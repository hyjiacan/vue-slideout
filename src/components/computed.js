export default {
  computed: {
    // 停靠边，当未指定时，设置为默认值 right
    dockOn () {
      return this.dock || 'right'
    },
    // SlideOut 容器样式
    containerStyle () {
      let style = {
        // 2147483647 是允许的最大值
        'z-index': this.isFullscreen ? 2147483647 : this.zIndex,
        display: this.styleDisplay ? 'block' : 'none'
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
    // 获取带上单位的size值
    sizeWithUnit () {
      return typeof this.size === 'number' || !(/%$/.test(this.size)) ? `${parseInt(this.size)}px` : `${parseInt(this.size)}%`
    },
    // SlideOut 内容样式
    layoutStyle () {
      let style = {}
      if (this.isSizeFixed) {
        // 指定大小
        style.width = this.isFullscreen ? '100%' : this.size[0]
        style.height = this.isFullscreen ? '100%' : this.size[this.size.length === 1 ? 0 : 1]
        // 偏移量，当全屏时偏移量为 0
        let offset = this.isFullscreen ? 0 : this.offset
        switch (this.dockOn) {
          case 'right':
          case 'left':
            style.top = offset
            break
          case 'bottom':
          case 'top':
            style.left = offset
            break
        }
        return style
      }
      // 内容显示大小
      let size = this.isFullscreen ? '100%' : this.resizeValue > 0 ? `${this.resizeValue}px` : this.sizeWithUnit
      switch (this.dockOn) {
        case 'right':
          style.width = size
          break
        case 'left':
          style.width = size
          break
        case 'bottom':
          style.height = size
          break
        case 'top':
          style.height = size
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
        'vue-slideout-enable-animation': !this.disableAnimation,
        'vue-slideout-show-header': this.title || this.$slots.header,
        'vue-slideout-show-footer': this.$slots.footer,
        'vue-slideout-fixed': this.isFixed,
        'vue-slideout-fullscreen': this.isFullscreen
      }
    },
    // 头部样式
    headerStyle () {
      let style = {
        paddingRight: `${this.defaultButtonsWidth}px`
      }
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
