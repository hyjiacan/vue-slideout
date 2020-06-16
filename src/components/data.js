export default {
  data () {
    return {
      isVisible: false,
      isFullscreen: false,
      // 标识鼠标是否按下，仅按下时能拖动大小
      mousedown: false,
      // 鼠标按下时的位置
      mouseDownPosition: {x: 0, y: 0},
      // 弹出的原始大小
      originSize: {width: 0, height: 0},
      // 调整大小时的值，单位为px
      resizeValue: 0,
      // 父级元素
      parentElement: null,
      // 扩展按钮容器
      headerButtons: null,
      // 动画时长
      animationDuration: 312,
      // 是否激活 active 类
      activeVisibleClass: false,
      showContainer: false
    }
  }
}
