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
    // The styles of panel
    panelStyle () {
      const style = {}

      // Styles for fixed
      if (this.isSizeFixed) {
        // Set size
        style.width = this.sizeWithUnit[0]
        style.height = this.sizeWithUnit[1]
        // The offset of slideout content,
        // the value is 0 while fill-parent.
        const offset = this.isFilled ? 0 : this.offset
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
      // Set 100% while fill-parent
      const size = this.isFilled ? '100%' : (this.resizeValue > 0 ? `${this.resizeValue}px` : this.sizeWithUnit)
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
    containerClasses () {
      return {
        'slideout': true,
        [this.customClass || '']: true,
        [`slideout-dock--${this.dockOn}`]: true,
        'slideout-is--visible': this.activeVisibleClass,
        // Disable the animations while mouse button pressed,
        // to make the operation smoothly.
        'slideout-animation--enabled': !this.mousedown && !this.disableAnimation,
        'slideout-header--visible': this.showHeader,
        'slideout-footer--visible': this.$slots.footer,
        'slideout-is--resizable': this.resizable,
        'slideout-is--fixed': this.isFixed,
        'slideout-is--filled': this.isFilled,
        'slideout-is--autosize': this.isAutoSize
      }
    },
    // If to use fixed position.
    isFixed () {
      // False if target specified,
      // except the parent element is document.body.
      return this.fixed || this.parentElement === document.body || !this.target
    }
  }
}
