export type DockPosition = 'top' | 'right' | 'bottom' | 'left'

declare class SlideOut {
  /**
   * The size of slide, both `px` and `%` available, default is `400px`
   */
  size: string | number;
  /**
   * The z-index of slide, default is `1997`
   */
  zIndex: number;
  /**
   * Is the slide visible，modifier `.sync` is available
   */
  visible: boolean;
  /**
   * Slide `title` text
   */
  title: string;
  /**
   * Whether to close slide while mask clicked, default is `true`
   */
  closeOnMaskClick: boolean;
  /**
   * Customized stylesheet class name
   */
  customClass: string;
  /**
   * Is mask visible, default is `true`
   */
  showMask: boolean;
  /**
   * Mask color, default is `rgba(0, 0, 0, 0.5)`
   */
  maskColor: string;
  /**
   * Slide dock position, optional values: `top`, `right`, `bottom`, `left`, default is `right`
   */
  dock: DockPosition;
  /**
   * Append slide into specified element.Both `string`(selector) and `HTMLElement`(DOM object) available, default is `null`
   */
  appendTo: string | HTMLElement;
  /**
   * Whether to disable animation, default is `false`
   */
  disableAnimation: boolean;
  /**
   * Whether to allow drag-resize, default is `false`
   */
  allowResize: boolean;
  /**
   * The min limit of drag-resize, value in `px`, default is `60`
   */
  minSize: number;
  /**
   * The min limit of drag-resize, value `0` makes no limit, value in `px`, default is `0`
   */
  maxSize: number;
  /**
   * Whether to ignore `esc` key, set `false` or keep default to close slide while press `ESC`, default is `false`
   */
  ignoreEsc: Boolean;
  /**
   * Whether to lock page scroll (except slide self), default is `false`
   */
  lockScroll: Boolean;

  /**
   * Event emitted after slide opened
   */
  on(eventName: 'open'): void;
  /**
   * Event emitted after before close, you can prevent it by e.wait=true, and e.close=true to close
   */
  on(eventName: 'close', e: { close: boolean, wait: boolean }): void;
  /**
   * Event emitted after slide closed
   */
  on(eventName: 'closed'): void;
}

export default SlideOut
