export default {
  methods: {
    makeBeforeEventArgs (resumeCallback, cancelCallback) {
      const vm = this
      let canceled = false
      return {
        // If to pause the open/close operation.
        pause: false,
        // setter
        // Resume the paused operation.
        set resume (value) {
          // Cancel the operation if the value is falsy.
          if (!value) {
            return
          }
          // Continue the operation.
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
    tryOpen () {
      // Do nothing if slideout is visible.
      if (this.isVisible) {
        return
      }
      // The arguments of event "opening".
      const args = this.makeBeforeEventArgs(() => {
        this.setVisibleValue(true)
      }, () => {
        // Reset the value of visible to "false" while operation canceled.
        this._updateVisibleValue(false)
      })

      // Trigger the "opening" event with "args".
      this.$emit('opening', args)

      // If the open operation is paused or canceled, just return.
      if (args.pause || args.cancel) {
        return
      }

      // Show slideout.
      this.setVisibleValue(true)
    },
    tryClose () {
      // Do nothing if slideout is invisible.
      if (!this.isVisible) {
        return
      }
      // The arguments of event "opening".
      const args = this.makeBeforeEventArgs(() => {
        this.setVisibleValue(false)
      }, () => {
        // Reset the value of visible to "true" while operation canceled.
        this._updateVisibleValue(true)
      })

      // Trigger the "closing" event with "args".
      this.$emit('closing', args)

      // If the open operation is paused or canceled, just return.
      if (args.pause || args.cancel) {
        return
      }

      this.setVisibleValue(false)
    },
    /**
     * Update the value of isVisible.
     * @param {Boolean} visible The visible state
     */
    setVisibleValue (visible) {
      // Reset the size while slideout is brought into visible.
      if (visible) {
        this.resizeValue = 0
      }

      if (visible) {
        this.showContainer = true
        this.isVisible = true
        this.$nextTick(() => {
          // Delay the animation.
          setTimeout(() => {
            this.activeVisibleClass = true
            this.emitOpenedEvent()
          }, 10)
        })
      } else {
        if (this.isFullscreen) {
          // Update the value of "fullscreen" for "fullscreen.sync" to exit fullscreen after slideout closed.
          this.$emit('update:fullscreen', false)
        }
        this.activeVisibleClass = false
        this.$nextTick(() => {
          this.emitClosedEvent()
        })
      }
    },
    emitOpenedEvent () {
      if (this.disableAnimation) {
        // The animation is disabled.
        this._doOpen()
        return
      }
      // Applying the animation.
      setTimeout(() => {
        this._doOpen()
      }, this.animationDuration)
    },
    emitClosedEvent () {
      if (this.disableAnimation) {
        // The animation is disabled.
        this._doClose()
        return
      }
      // Applying the animation.
      setTimeout(() => {
        this._doClose()
      }, this.animationDuration)
    },
    _doOpen () {
      this.$emit('opened', this.$refs.layout)
      if (this.visible !== this.isVisible) {
        this._updateVisibleValue(true)
      }
    },
    _doClose () {
      this.showContainer = false
      this.isVisible = false
      this.$emit('closed')
      if (this.visible !== this.isVisible) {
        this._updateVisibleValue(false)
      }
    },
    toggleFullscreen (fullscreen) {
      if (this.isFullscreen === fullscreen) {
        return
      }
      if (fullscreen === undefined) {
        this.isFullscreen = !this.isFullscreen
      } else {
        this.isFullscreen = fullscreen
      }
      if (this.isFullscreen !== this.fullscreen) {
        this.$emit('update:fullscreen', this.isFullscreen)
      }
    },
    /**
     * Get the actual parent element of Slideout
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
     * The handler for mask click.
     */
    onMaskClick () {
      if (this.closeOnMaskClick) {
        this.tryClose()
      }
    },
    /**
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
     * @return {{width: Number, height: Number}}
     */
    getMyownSize () {
      const rect = this.$refs.layout.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    mouseDownHandler (e) {
      if (this.isFullscreen) {
        // Resize is disabled while fullscreen.
        return
      }
      this.mousedown = true
      this.mouseDownPosition = {
        x: e.pageX,
        y: e.pageY
      }
      this.originSize = this.getMyownSize()
    },
    mouseMoveHandler (e) {
      if (this.isFullscreen) {
        // Resize is disabled while fullscreen.
        return
      }
      // Resize is disabled while the mouse button is not pressed.
      if (!this.mousedown) {
        return
      }
      e.preventDefault()
      // The offset of mouse movement.
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
    /**
     * Close slideout after ESC pressed.
     * @param {KeyboardEvent} e
     */
    onKeydown (e) {
      if (!this.isVisible) {
        return
      }
      // 27: Escape key
      if (e.code !== 27 && e.keyCode !== 27 && e.which !== 27) {
        return
      }
      // Ignore input controls.
      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) !== -1 || e.target.contentEditable === 'true') {
        return
      }
      this.tryClose()
      return false
    },
    _bindKeyboardEvent () {
      if (!this.ignoreEsc && this.$el) {
        this.$el.focus()
        this.$el.addEventListener('keydown', this.onKeydown)
      }
    },
    _removeKeyboardEvent () {
      if (!this.ignoreEsc && this.$el) {
        this.$el.removeEventListener('keydown', this.onKeydown)
      }
    },
    _fixSizeUnit (val) {
      return val.toString() === '0' ? 'auto' : `${parseInt(val)}${/%$/.test(val) ? '%' : 'px'}`
    },
    _updateVisibleValue (value) {
      this.$emit('change', value)
    }
  }
}
