export default {
  watch: {
    // 当从外部改变visible时，切换显示状态
    visible (visible) {
      if (visible === this.isVisible) {
        return
      }
      if (visible) {
        this.tryShow()
      } else {
        this.tryHide()
      }
    },
    // 当从外部改变fullscreen时，切换显示状态
    fullscreen (fullscreen) {
      if (fullscreen === this.isFullscreen) {
        return
      }
      this.toggleFullscreen(fullscreen)
    },
    // 当从内部改变 isVisible时
    isVisible (v) {
      if (!this.isFixed) {
        // 非固定时，不需要锁定滚动
        return
      }
      // 切换锁定样式类
      if (v) {
        document.body.classList.add('slideout-lock-scroll')
      } else {
        document.body.classList.remove('slideout-lock-scroll')
      }
    }
  }
}
