export default {
  watch: {
    modelValue (visible) {
      if (visible === this.isVisible) {
        return
      }
      if (visible) {
        this.tryOpen()
      } else {
        this.tryClose()
      }
    },
    fullscreen (fullscreen) {
      if (fullscreen === this.isFullscreen) {
        return
      }
      this.toggleFullscreen(fullscreen)
    },
    isVisible (v) {
      this.$nextTick(() => {
        this._removeKeyboardEvent()
        if (v) {
          this._bindKeyboardEvent()
        }
      })

      // Do not lock the scroll while slideout is not fixed.
      if (!this.isFixed) {
        return
      }

      // Toggle the scroll class.
      if (v) {
        document.body.classList.add('slideout-lock-scroll')
      } else {
        document.body.classList.remove('slideout-lock-scroll')
      }
    }
  }
}
