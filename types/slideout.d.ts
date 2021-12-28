export type DockOptions = 'top' | 'right' | 'bottom' | 'left'

export declare class SlideOutProps {
  /**
   * The size of slideout.
   * If the value if an Array, then:
   * the 1st value is the width,
   * the 2nd value is the height.
   * If there is only one item in the array, then:
   * the width equals with the height.
   */
  size?: string | number | string[] | number[]
  /**
   * If to allow resize operation.
   */
  allowResize?: boolean
  /**
   * The minimize value for resizing.
   * This does not limit the value of size.
   */
  minSize?: number
  /**
   * The minimize value for resizing.
   * 0 means there is no limit.
   * This does not limit the value of size.
   */
  maxSize?: number
  zIndex?: number
  /**
   * The title text
   */
  title?: string
  /**
   * Custom class for slideout.
   */
  customClass?: string
  /**
   * If to show the mask layer.
   */
  showMask?: boolean
  /**
   * The background color of mask layer.
   */
  maskColor?: string
  /**
   * If to close slideout while mask is clicked.
   */
  closeOnMaskClick?: boolean
  /**
   * Whether to ignore Esc.
   */
  ignoreEsc?: boolean
  /**
   * The dock side, the default value is "right".
   */
  dock?: DockOptions
  /**
   * Specify the parent element to append slideout to.
   */
  appendTo?: string | HTMLElement
  disableAnimation?: boolean
  fullscreen?: boolean
  /**
   * Whether to show the close button.
   */
  showClose?: boolean
  /**
   * Whether to show the fill-parent button.
   */
  showFullscreen?: boolean
  /**
   * Display slideout as fixed (The scroll will be locked)
   */
  fixed?: boolean
  /**
   * The offset to dock side. ("px" or "%)
   */
  offset?: string
  /**
   * Whether to show the close button as arrow.
   */
  arrowButton?: boolean
  /**
   * Render content while "visible" is "true".
   */
  renderWhenVisible?: boolean
}

export declare class SlideOut extends SlideOutProps {
  install(vue, defaults?: SlideOutProps)
  /**
   * 是否可见，可使用 .sync 修饰符
   */
  visible: boolean
}
