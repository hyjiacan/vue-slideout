export default {
  data () {
    return {
      isVisible: false,
      isFullscreen: false,
      mousedown: false,
      // The position of where the mouse button down
      mouseDownPosition: {
        x: 0,
        y: 0
      },
      // The original size of slideout.
      originSize: {
        width: 0,
        height: 0
      },
      // The size after resizing (unit: px)
      resizeValue: 0,
      parentElement: null,
      // The container to contain header buttons.
      headerButtons: null,
      animationDuration: 312,
      // The state to indicate the visible state of slideout.
      activeVisibleClass: false,
      showContainer: false
    }
  }
}
