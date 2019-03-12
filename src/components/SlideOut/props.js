export default {
  /**
   * 滑出尺寸，单位为像素
   */
  size: {
    type: [String, Number],
    default: 400
  },
  /**
   * 层叠索引
   */
  zIndex: {
    type: Number,
    default: 1997
  },
  /**
   * 是否可见，可使用 .sync 修饰符
   */
  visible: {
    type: Boolean,
    default: false
  },
  /**
   * 显示的标题，传空时不显示标题栏
   */
  title: {
    type: String
  },
  /**
   * 是否在点击mask时关闭
   */
  closeOnMaskClick: {
    type: Boolean,
    default: true
  },
  /**
   * 自定义样式类
   */
  customClass: {
    type: String
  },
  /**
   * 是否显示遮罩层
   */
  showMask: {
    type: Boolean,
    default: true
  },
  /**
   * 遮罩层颜色
   */
  maskColor: {
    type: String,
    default: null
  },
  /**
   * 停靠方向，默认右侧
   */
  dock: {
    type: String,
    default: 'right'
  },
  /**
   * 将元素放置到指定元素下
   */
  appendTo: {
    type: [String, HTMLElement],
    default: null
  },
  /**
   * 是否禁用滑出动画，默认为false
   */
  disableAnimation: {
    type: Boolean,
    default: false
  },
  /**
   * 是否允许拖动弹出大小
   */
  resize: {
    type: Boolean,
    default: false
  },
  /**
   * 拖动改变大小时的最小尺寸，单位为px，此值不影响size属性指定的大小
   */
  minSize: {
    type: Number,
    default: 60
  },
  /**
   * 拖动改变大小时的最大尺寸，单位为px，指定为0时不限制，此值不影响size属性指定的大小
   */
  maxSize: {
    type: Number,
    default: 0
  }
}
