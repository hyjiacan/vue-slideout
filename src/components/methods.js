export default {
  methods: {
    makeBeforeEventArgs (resumeCallback, cancelCallback) {
      const vm = this
      let canceled = false
      return {
        // 是否暂停操作
        pause: false,
        set resume (value) {
          // 取消操作
          if (!value) {
            return
          }
          // 继续操作
          vm.$nextTick(() => {
            resumeCallback()
          })
        },
        get resume () {
          return undefined
        },
        set cancel (value) {
          canceled = value
          if (!value) {
            return
          }
          vm.$nextTick(() => {
            cancelCallback()
          })
        },
        get cancel () {
          return canceled
        }
      }
    },
    tryShow () {
      // 如果显示状态相同，则啥也不做
      if (this.isVisible) {
        return
      }
      // 显示前触发事件
      const args = this.makeBeforeEventArgs(() => {
        this.setVisibleValue(true)
      }, () => {
        // 取消时，重置原值为 false
        this.$emit('update:visible', false)
      })

      this.$emit('opening', args)

      // 暂停打开
      if (args.pause || args.cancel) {
        return
      }

      this.setVisibleValue(true)
    },
    tryHide () {
      // 如果显示状态相同，则啥也不做
      if (!this.isVisible) {
        return
      }
      // 显示前触发事件
      const args = this.makeBeforeEventArgs(() => {
        this.setVisibleValue(false)
      }, () => {
        // 取消时，重置原值为 true
        this.$emit('update:visible', true)
      })

      this.$emit('closing', args)

      // 暂停关闭
      if (args.pause || args.cancel) {
        return
      }

      this.setVisibleValue(false)
    },
    /**
     * 设置显示状态
     * @param {Boolean} visible 显示状态
     */
    setVisibleValue (visible) {
      // 显示时重置大小
      if (visible) {
        this.resizeValue = 0
      }

      if (visible) {
        this.showContainer = true
        this.isVisible = true
        this.$nextTick(() => {
          // 延时应用动画
          setTimeout(() => {
            this.activeVisibleClass = true
            this.emitOpenedEvent()
          }, 10)
        })
      } else {
        if (this.isFullscreen) {
          // 若指定了 .sync 修饰，则关闭后退出全屏
          this.$emit('update:fullscreen', false)
        }
        this.activeVisibleClass = false
        // 触发关闭后的事件
        this.$nextTick(() => {
          this.emitClosedEvent()
        })
      }
    },
    emitOpenedEvent () {
      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.$emit('opened', this.$refs.layout)
        if (this.visible !== this.isVisible) {
          this.$emit('update:visible', true)
        }
        // 在组件显示后让组件获取焦点
        this.$el.focus()
        return
      }
      // 开启动画时，有个this.animationDuration ms的动画
      setTimeout(() => {
        this.$emit('opened', this.$refs.layout)
        if (this.visible !== this.isVisible) {
          this.$emit('update:visible', true)
        }
        // 在组件显示后让组件获取焦点
        this.$el.focus()
      }, this.animationDuration)
    },
    emitClosedEvent () {
      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.showContainer = false
        this.isVisible = false
        this.$emit('closed')
        if (this.visible !== this.isVisible) {
          this.$emit('update:visible', false)
        }
        return
      }
      // 开启动画时，有个this.animationDuration / 2 ms的动画
      setTimeout(() => {
        this.showContainer = false
        this.isVisible = false
        this.$emit('closed')
        if (this.visible !== this.isVisible) {
          this.$emit('update:visible', false)
        }
      }, this.animationDuration)
    },
    /**
     * 切换全屏
     */
    toggleFullscreen (fullscreen) {
      if (fullscreen === undefined) {
        this.isFullscreen = !this.isFullscreen
      } else if (this.isFullscreen === fullscreen) {
        return
      } else {
        this.isFullscreen = fullscreen
      }
      this.$emit('update:fullscreen', this.isFullscreen)
    },
    /**
     * 计算出组件在DOM中的父元素
     */
    appendComponentTo () {
      if (!this.appendTo) {
        this.parentElement = this.$el.parentElement
        return
      }
      let target = this.appendTo
      // handle selector
      if (typeof target === 'string') {
        target = document.querySelector(target)
        if (!target) {
          throw new Error(`[vue-slideout] Cannot find the node to append: ${this.appendTo}`)
        }
      }
      // @see https://vuejs.org/v2/api/index.html#vm-mount
      target.appendChild(this.$mount().$el)
      this.parentElement = target
    },
    /**
     * 点击遮罩层时的事件处理
     */
    onMaskClick () {
      if (this.closeOnMaskClick) {
        this.tryHide()
      }
    },
    /**
     * 获取父元素的尺寸
     * @return {{width: Number, height: Number}}
     */
    getParentSize () {
      const rect = this.parentElement.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    /**
     * 获取到此组件的大小（基于px）
     * @return {{width: Number, height: Number}}
     */
    getMyOwnSize () {
      const rect = this.$refs.layout.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    mouseDownHandler (e) {
      if (this.isFullscreen) {
        // 全屏时不允许改变大小
        return
      }
      this.mousedown = true
      this.mouseDownPosition = {
        x: e.pageX,
        y: e.pageY
      }
      this.originSize = this.getMyOwnSize()
    },
    mouseMoveHandler (e) {
      if (this.isFullscreen) {
        // 全屏时不允许改变大小
        return
      }
      // 鼠标未按下时，不能拖动
      if (!this.mousedown) {
        return
      }
      e.preventDefault()
      // 获取鼠标的偏移量
      const x = e.pageX - this.mouseDownPosition.x
      const y = e.pageY - this.mouseDownPosition.y

      const parentSize = this.getParentSize()
      const winSize = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      const size = this.originSize
      let newSize = 0
      switch (this.dock) {
        case 'top':
          newSize = size.height + y
          if (newSize > parentSize.height) {
            newSize = parentSize.height
          }
          if (newSize > winSize.height) {
            newSize = winSize.height
          }
          break
        case 'right':
          newSize = size.width - x
          if (newSize > parentSize.width) {
            newSize = parentSize.width
          }
          if (newSize > winSize.width) {
            newSize = winSize.width
          }
          break
        case 'bottom':
          newSize = size.height - y
          if (newSize > parentSize.height) {
            newSize = parentSize.height
          }
          if (newSize > winSize.height) {
            newSize = winSize.height
          }
          break
        case 'left':
          newSize = size.width + x
          if (newSize > parentSize.width) {
            newSize = parentSize.width
          }
          if (newSize > winSize.width) {
            newSize = winSize.width
          }
          break
      }
      if (this.maxSize > 0 && this.maxSize < newSize) {
        newSize = this.maxSize
      }
      requestAnimationFrame(() => {
        this.resizeValue = newSize < this.minSize ? this.minSize : newSize
      })
      this.$nextTick(() => {
        this.$emit('resize', { size: this.resizeValue })
      })
    },
    mouseUpHandler () {
      this.mousedown = false
    },
    onKeydown (e) {
      if (!this.isVisible) {
        return
      }
      if (e.code !== 27 && e.keyCode !== 27 && e.which !== 27) {
        return
      }
      // 忽略输入组件
      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) !== -1 || e.target.contentEditable === 'true') {
        return
      }
      this.tryHide()
      return false
    },
    _bindKeyboardEvent () {
      if (!this.ignoreEsc) {
        this.$el.addEventListener('keydown', this.onKeydown)
      }
    },
    _removeKeyboardEvent () {
      if (!this.ignoreEsc) {
        this.$el.removeEventListener('keydown', this.onKeydown)
      }
    },
    _fixSizeUnit (val) {
      return val.toString() === '0' ? 'auto' : `${parseInt(val)}${/%$/.test(val) ? '%' : 'px'}`
    }
  }
}
