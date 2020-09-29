export default {
  computed: {
    // 停靠边，当未指定时，设置为默认值 right
    dockOn () {
      return this.dock || 'right'
    },
    showHeader () {
      return this.title || this.$slots.header
    },
    showFooter () {
      return this.$slots.footer
    },
    // SlideOut 容器样式
    containerStyle () {
      let style = {
        // 2147483647 是允许的最大值
        // 'z-index': this.isFullscreen ? 2147483647 : this.zIndex,
        'z-index': this.zIndex,
        display: this.showContainer ? 'block' : 'none'
      }
      if (this.mousedown) {
        style.userSelect = 'none'
      }
      return style
    },
    // SlideOut 遮罩层样式
    maskStyle () {
      return this.maskColor ? {
        'background-color': this.maskColor
      } : {}
    },
    // 是否使用固定大小，判断依据：指定的大小是一个数组
    isSizeFixed () {
      return Array.isArray(this.size)
    },
    isAutoSize () {
      if (this.isSizeFixed) {
        return !this.size.every(i => i.toString() !== '0')
      }
      return this.size.toString() === '0'
    },
    /**
     * 获取带上单位的size值
     * @return {Array|String}
     */
    sizeWithUnit () {
      if (!this.isSizeFixed) {
        return this._fixSizeUnit(this.size)
      }
      return [this._fixSizeUnit(this.size[0]), this._fixSizeUnit(this.size[this.size.length === 1 ? 0 : 1])]
    },
    // SlideOut 内容样式
    layoutStyle () {
      let style = {}
      if (this.isSizeFixed) {
        // 指定大小
        style.width = this.sizeWithUnit[0]
        style.height = this.sizeWithUnit[1]
        // 偏移量，当全屏时偏移量为 0
        let offset = this.isFullscreen ? 0 : this.offset
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
      // 内容显示大小
      // 当全屏时，设置为 100%
      let size = this.isFullscreen ? '100%' : (this.resizeValue > 0 ? `${this.resizeValue}px` : this.sizeWithUnit)
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
      let style = {}
      if (!this.isAutoSize) {
        return style
      }

      switch (this.dockOn) {
        case 'right':
        case 'left':
          break
        case 'bottom':
        case 'top':
          let padding = 0
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
    // 容器需要应用的样式类
    containerClasses () {
      return {
        [this.customClass || '']: true,
        [`vue-slideout-dock-${this.dockOn}`]: true,
        'vue-slideout-visible': this.activeVisibleClass,
        // 鼠标按下拖动大小时，禁用动画，以提高视觉流畅度
        'vue-slideout-enable-animation': !this.mousedown && !this.disableAnimation,
        'vue-slideout-show-header': this.showHeader,
        'vue-slideout-show-footer': this.$slots.footer,
        'vue-slideout-allow-resize': this.allowResize,
        'vue-slideout-fixed': this.isFixed,
        'vue-slideout-fullscreen': this.isFullscreen,
        'vue-slideout-autosize': this.isAutoSize
      }
    },
    // 头部样式
    headerStyle () {
      let style = {}

      // 当自定义 header 时，不需要计算
      if (this.$slots.header) {
        return style
      }

      style.paddingRight = `${this.defaultButtonsWidth}px`

      if (!this.headerButtons) {
        return style
      }
      let btnStyle = window.getComputedStyle(this.headerButtons)
      style.paddingRight = `${this.defaultButtonsWidth + parseInt(btnStyle.width) + 5}px`
      return style
    },
    defaultButtonsWidth () {
      // 20: padding 的值
      let w = 20
      if (this.showClose) {
        w += 32
      }
      if (this.showFullscreen) {
        w += 32
      }
      return w
    },
    // 是否使用固定定位
    isFixed () {
      // 设置了 appendTo 的时候，就不固定显示
      // 但是如果父元素为 body 时，也需要固定显示
      return this.fixed || this.parentElement === document.body || !this.appendTo
    }
  }
}
