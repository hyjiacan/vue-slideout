export type DockPosition = 'top' | 'right' | 'bottom' | 'left'

declare class SlideOut {
  size: string | number
  zIndex: number
  visible: boolean
  title: string
  closeOnMaskClick: boolean
  customClass: string
  showMask: boolean
  maskColor: string
  dock: DockPosition
  appendTo: string | HTMLElement
  disableAnimation: boolean
  resize: boolean
  minSize: number
  maxSize: number
}

export default SlideOut
