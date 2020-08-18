export default {
  methods: {
    /**
     * 获取关闭事件参数对象
     */
    getCloseArgs() {
      let me = this
      // 通过使用 setter 以实现延迟操作
      return {
        // 是否等待操作
        wait: false,
        set close(close) {
          // 取消关闭
          if (!close) {
            return
          }
          // 关闭
          me.setVisibleValue(false)
        },
        get close() {
          return undefined
        }
      }
    },
    /**
     * 切换显示状态
     * @param {Boolean} [visible] 指定显示状态，不指定时切换状态
     */
    toggleVisible(visible) {
      if (visible === this.isVisible) {
        return
      }
      if (visible) {
        // 显示前触发事件
        let args = {
          cancel: false
        }
        this.$emit('before-open', args)
        // 取消打开
        if (args.cancel) {
          // 取消时，重置原值为 false
          this.$emit('update:visible', false)
          return
        }
        this.setVisibleValue(true)
        // 显示后触发事件
        this.$nextTick(() => {
          this.emitOpenEvent()
          // 在组件显示后让组件获取焦点
          this.$el.focus()
        })
        return
      }
      // 隐藏前触发事件
      let args = this.getCloseArgs()
      this.$emit('close', args)
      if (args.wait) {
        // 取消时，重置原值为 true
        this.$emit('update:visible', true)
        // 需要等待，最终是否关闭要看 args.close 是否为 true
        return
      }
      this.setVisibleValue(false)
    },
    /**
     * 切换全屏
     */
    toggleFullscreen(fullscreen) {
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
     * 设置显示状态
     * @param {Boolean} visible 显示状态
     */
    setVisibleValue(visible) {
      // 如果显示状态相同，则啥也不做
      if (this.isVisible === visible) {
        return
      }
      // 显示时重置大小
      if (visible) {
        this.resizeValue = 0
      }
      this.$emit('update:visible', visible)

      if (visible) {
        this.showContainer = true
        this.isVisible = true
        this.$nextTick(() => {
          // 延时应用动画
          setTimeout(() => {
            this.activeVisibleClass = true
          }, 10)
        })
      } else {
        // 若指定了 .sync 修饰，则关闭后退出全屏
        this.$emit('update:fullscreen', false)
        this.activeVisibleClass = false
        // 触发关闭后的事件
        this.$nextTick(this.emitCloseEvent)
      }
    },
    /**
     * 计算出组件在DOM中的父元素
     */
    appendComponentTo() {
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
    onMaskClick() {
      if (this.closeOnMaskClick) {
        this.toggleVisible(false)
      }
    },
    /**
     * 获取父元素的尺寸
     * @return {{width: Number, height: Number}}
     */
    getParentSize() {
      let rect = this.parentElement.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    /**
     * 获取到此组件的大小（基于px）
     * @return {{width: Number, height: Number}}
     */
    getMyOwnSize() {
      let rect = this.$refs.layout.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    mouseDownHandler(e) {
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
    mouseMoveHandler(e) {
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
      let x = e.pageX - this.mouseDownPosition.x
      let y = e.pageY - this.mouseDownPosition.y

      let parentSize = this.getParentSize()
      let winSize = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      let size = this.originSize
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
        this.$emit('resize', {size: this.resizeValue})
      })
    },
    mouseUpHandler() {
      this.mousedown = false
    },
    onKeydown(e) {
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
      this.toggleVisible(false)
      return false
    },
    emitOpenEvent() {
      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.$emit('open', this.$refs.layout)
        return
      }
      // 开启动画时，有个this.animationDuration ms的动画
      setTimeout(() => {
        this.$emit('open', this.$refs.layout)
      }, this.animationDuration)
    },
    emitCloseEvent() {
      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.showContainer = false
        this.isVisible = false
        this.$emit('closed')
        return
      }
      // 开启动画时，有个this.animationDuration / 2 ms的动画
      setTimeout(() => {
        this.showContainer = false
        this.isVisible = false
        this.$emit('closed')
      }, this.animationDuration)
    },
    _bindKeyboardEvent() {
      if (!this.ignoreEsc) {
        this.$el.addEventListener('keydown', this.onKeydown)
      }
    },
    _removeKeyboardEvent() {
      if (!this.ignoreEsc) {
        this.$el.removeEventListener('keydown', this.onKeydown)
      }
    },
    _fixSizeUnit(val) {
      return val.toString() === '0' ? 'auto' : `${parseInt(val)}${/%$/.test(val) ? '%' : 'px'}`
    }
  }
}
