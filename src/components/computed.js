export default {
  computed: {
    // The side to dock on.
    // The default value is right.
    dockOn () {
      return this.dock || 'right'
    },
    // If to show the header bar or not.
    // This depends on the title property and the header slot.
    showHeader () {
      return this.title || this.$slots.header
    },
    // If to show the footer bar or not.
    // This depends on the footer slot.
    showFooter () {
      return this.$slots.footer
    },
    containerStyle () {
      const style = {
        'z-index': this.zIndex,
        display: this.showContainer ? 'block' : 'none'
      }
      if (this.mousedown) {
        style.userSelect = 'none'
      }
      return style
    },
    maskStyle () {
      return this.maskColor ? {
        'background-color': this.maskColor
      } : {}
    },
    // If to use the fixed size or not:
    // true if the value of size is an Array
    isSizeFixed () {
      return Array.isArray(this.size)
    },
    // Should I fit the size automatically ?
    // If the value of size is 0 or [0, 0],
    // then make it auto.
    isAutoSize () {
      if (this.isSizeFixed) {
        return !this.size.every(i => i.toString() !== '0')
      }
      return this.size.toString() === '0'
    },
    /**
     * Get the value of size with unit px or "%"
     * @return {Array|String}
     */
    sizeWithUnit () {
      if (!this.isSizeFixed) {
        return this._fixSizeUnit(this.size)
      }
      return [this._fixSizeUnit(this.size[0]), this._fixSizeUnit(this.size[this.size.length === 1 ? 0 : 1])]
    },
    // The styles of layout panel
    layoutStyle () {
      const style = {}

      // Styles for fixed
      if (this.isSizeFixed) {
        // Set size
        style.width = this.sizeWithUnit[0]
        style.height = this.sizeWithUnit[1]
        // The offset of slideout content,
        // the value is 0 while fullscreen.
        const offset = this.isFullscreen ? 0 : this.offset
        switch (this.dockOn) {
          case 'right':
          case 'left':
            style.top = offset
            style.maxHeight = `calc(100% - ${offset})`
            break
          case 'bottom':
          case 'top':
            style.left = offset
            style.maxWidth = `calc(100% - ${offset})`
            break
        }
        return style
      }
      // Set 100% while fullscreen
      const size = this.isFullscreen ? '100%' : (this.resizeValue > 0 ? `${this.resizeValue}px` : this.sizeWithUnit)
      switch (this.dockOn) {
        case 'right':
        case 'left':
          style.width = size
          break
        case 'bottom':
        case 'top':
          style.height = size
          break
      }
      return style
    },
    contentStyles () {
      const style = {}
      if (!this.isAutoSize) {
        return style
      }
      let padding = 0

      switch (this.dockOn) {
        case 'right':
        case 'left':
          break
        case 'bottom':
        case 'top':
          if (this.showHeader) {
            padding += 48
          }
          if (this.showFooter) {
            padding += 48
          }
          if (this.maxSize) {
            style.maxHeight = `${this.maxSize - padding}px`
          }
          if (this.minSize) {
            style.minHeight = `${this.minSize - padding}px`
          }
          break
      }
      return style
    },
    containerClasses () {
      return {
        'slideout': true,
        [this.customClass || '']: true,
        [`slideout-dock-${this.dockOn}`]: true,
        'slideout-visible': this.activeVisibleClass,
        // Disable the animations while mouse button pressed,
        // to make the operation smoothly.
        'slideout-enable-animation': !this.mousedown && !this.disableAnimation,
        'slideout-show-header': this.showHeader,
        'slideout-show-footer': this.$slots.footer,
        'slideout-allow-resize': this.allowResize,
        'slideout-fixed': this.isFixed,
        'slideout-fullscreen': this.isFullscreen,
        'slideout-autosize': this.isAutoSize
      }
    },
    headerStyle () {
      const style = {}

      // 当自定义 header 时，不需要计算
      if (this.$slots.header) {
        return style
      }

      style.paddingRight = `${this.defaultButtonsWidth}px`

      if (!this.headerButtons) {
        return style
      }
      const btnStyle = window.getComputedStyle(this.headerButtons)
      style.paddingRight = `${this.defaultButtonsWidth + parseInt(btnStyle.width) + 5}px`
      return style
    },
    defaultButtonsWidth () {
      // 20: padding
      let w = 20
      if (this.showClose) {
        w += 32
      }
      if (this.showFullscreen) {
        w += 32
      }
      return w
    },
    // If to use fixed position.
    isFixed () {
      // False if appendTo specified,
      // except the parent element is document.body.
      return this.fixed || this.parentElement === document.body || !this.appendTo
    }
  }
}
