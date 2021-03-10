import '../styles/index.less'
import computed from './computed'
import data from './data'
import methods from './methods'
import watch from './watch'
import renderer from './renderer'

export default {
  name: 'Slideout',
  inheritAttrs: false,
  mixins: [computed, data, methods, watch, renderer],
  emits: [
    'opening',
    'opened',
    'closing',
    'closed',
    'resize',
    'update:fill-parent',
    'update:modelValue'
  ],
  props: {
    /**
     * The size of slideout.
     * If the value if an Array, then:
     * the 1st value is the width,
     * the 2nd value is the height.
     * If there is only one item in the array, then:
     * the width equals with the height.
     */
    size: {
      type: [String, Number, Array],
      default: 400
    },
    /**
     * If to allow resize operation.
     */
    resizable: {
      type: Boolean,
      default: false
    },
    /**
     * The minimize value for resizing.
     * This does not limit the value of size.
     */
    minSize: {
      type: Number,
      default: 100
    },
    /**
     * The minimize value for resizing.
     * 0 means there is no limit.
     * This does not limit the value of size.
     */
    maxSize: {
      type: Number,
      default: 0
    },
    zIndex: {
      type: Number,
      default: 1997
    },
    /**
     * Is slideout visible.
     * Do not specify this directly, use v-model instead.
     */
    modelValue: {
      type: Boolean,
      default: false
    },
    /**
     * The title text
     */
    title: {
      type: String
    },
    /**
     * Custom class for slideout.
     */
    customClass: {
      type: String
    },
    /**
     * If to show the mask layer.
     */
    showMask: {
      type: Boolean,
      default: true
    },
    /**
     * The background color of mask layer.
     */
    maskColor: {
      type: String,
      default: null
    },
    /**
     * If to close slideout while mask is clicked.
     */
    closeOnMaskClick: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to ignore ESC.
     */
    ignoreEsc: {
      type: Boolean,
      default: false
    },
    /**
     * The dock side, the default value is "right".
     */
    dock: {
      type: String,
      default: 'right',
      validator: value => ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0
    },
    /**
     * Specify the parent element to append slideout to.
     */
    target: {
      type: [String, HTMLElement],
      default: 'body'
    },
    disableAnimation: {
      type: Boolean,
      default: false
    },
    fillParent: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to show the close button.
     */
    showClose: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to show the fill-parent button.
     */
    showFillButton: {
      type: Boolean,
      default: false
    },
    /**
     * Display slideout as fixed (The scroll will be locked)
     */
    fixed: {
      type: Boolean,
      default: false
    },
    /**
     * The offset to dock side. ("px" or "%)
     */
    offset: {
      type: String,
      default: '0'
    },
    /**
     * Whether to show the close button as arrow.
     */
    arrowButton: {
      type: Boolean,
      default: true
    },
    /**
     * Render content while "visible" is "true".
     */
    renderWhenVisible: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.isFilled = this.fillParent
    this.updateParentElement()
    if (this.resizable) {
      // Bind the mouse events for resizing.
      document.addEventListener('mousemove', this.mouseMoveHandler)
      document.addEventListener('mouseup', this.mouseUpHandler)
    }
    this.headerButtons = this.$slots.btn ? this.$refs.buttons : null
  },
  beforeUnmount () {
    this.showContainer = false
    this._removeKeyboardEvent()
    if (this.resizable) {
      // Remove the mouse events for resizing.
      document.removeEventListener('mousemove', this.mouseUpHandler)
      document.removeEventListener('mouseup', this.mouseMoveHandler)
    }
    if (this.isVisible) {
      this.tryClose()
    }
    // Cancel the scroll lock.
    document.body.classList.remove('slideout-helper--scroll-locker')
  }
}
