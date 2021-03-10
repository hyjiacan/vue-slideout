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
    fillparent (fillparent) {
      if (fillparent === this.isFillparent) {
        return
      }
      this.toggleFillparent(fillparent)
    },
    isVisible (v) {
      if (v) {
        this.$nextTick(() => {
          this.$refs.container.focus()
        })
      }

      // Do not lock the scroll while slideout is not fixed.
      if (!this.isFixed) {
        return
      }

      // Toggle the scroll class.
      if (v) {
        document.body.classList.add('slideout-helper--scroll-locker')
      } else {
        document.body.classList.remove('slideout-helper--scroll-locker')
      }
    }
  }
}
