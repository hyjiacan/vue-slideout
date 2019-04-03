import props from './props'
import VScrollLock from 'v-scroll-lock'
import Vue from 'vue'

Vue.use(VScrollLock)

const component = {
  name: 'SlideOut',
  props,
  data() {
    return {
      isVisible: false,
      // 标识鼠标是否按下，仅按下时能拖动大小
      mousedown: false,
      // 鼠标按下时的位置
      mouseDownPosition: {x: 0, y: 0},
      // 弹出的原始大小
      originSize: {width: 0, height: 0},
      // 调整大小时的值，单位为px
      resizeValue: 0,
      // 父级元素
      parentElement: null
    }
  },
  watch: {
    visible(visible) {
      this.toggle(visible)
    }
  },
  computed: {
    dockOn() {
      return this.dock || 'right'
    },
    containerStyle() {
      let style = {
        'z-index': this.zIndex
      }
      if (this.mousedown) {
        style.userSelect = 'none'
      }
      let distance = this.isVisible ? '0' : '100%'
      switch (this.dockOn) {
        case 'left':
          style.right = distance
          break
        case 'right':
          style.left = distance
          break
        case 'top':
          style.bottom = distance
          break
        case 'bottom':
          style.top = distance
          break
      }
      return style
    },
    maskStyle() {
      return this.maskColor ? {
        'background-color': this.maskColor
      } : {}
    },
    layoutStyle() {
      let style = {}
      let size = this.resizeValue > 0 ? `${this.resizeValue}px` : typeof this.size === 'number' ? `${this.size}px` : this.size
      let distance = this.isVisible || this.disableAnimation
        ? 0
        : (typeof this.size === 'number' || !(/%$/.test(this.size)) ? `${-parseInt(this.size)}px` : `${-parseInt(this.size)}%`)
      switch (this.dockOn) {
        case 'right':
          style.width = size
          style.right = distance
          break
        case 'left':
          style.width = size
          style.left = distance
          break
        case 'bottom':
          style.height = size
          style.bottom = distance
          break
        case 'top':
          style.height = size
          style.top = distance
          break
      }
      return style
    },
    containerClasses() {
      return {
        [this.customClass || '']: true,
        [`dock-${this.dockOn}`]: true,
        'visible': this.isVisible,
        'enable-animation': !this.disableAnimation,
        'slide-show-header': this.title || this.$slots.header,
        'slide-show-footer': this.$slots.footer,
        'slide-fixed': this.isFixed
      }
    },
    isFixed() {
      // 是否使用固定定位
      // 设置了 appendTo 的时候，就不固定显示
      return !this.appendTo
    }
  },
  methods: {
    /**
     * 获取关闭事件参数对象
     */
    getArgs() {
      let me = this
      // 通过使用 setter 以实现延迟操作
      return {
        // 是否等待操作
        wait: false,
        set close(close) {
          // 取消关闭
          if (!close) {
            return
          }
          // 关闭
          me.setVisibleValue(false)
        },
        get close() {
          return undefined
        }
      }
    },
    toggle(visible) {
      if (visible === this.isVisible) {
        return
      }
      // 显示后触发事件
      if (visible) {
        this.setVisibleValue(true)
        this.$emit('open')
        return
      }
      // 隐藏前触发事件
      let args = this.getArgs()
      this.$emit('close', args)
      if (args.wait) {
        // 需要等待，最终是否关闭要看 args.close 是否为 true
        return
      }
      this.setVisibleValue(false)
    },
    setVisibleValue(visible) {
      // 如果显示状态相同，则啥也不做
      if (this.isVisible === visible) {
        return
      }
      // 显示时重置大小
      if (visible) {
        this.resizeValue = 0
      }
      this.isVisible = visible
      this.$el.focus()
      this.$emit('update:visible', visible)
      // 触发关闭后的事件
      if (!visible) {
        this.emitCloseEvent()
      }
    },
    appendComponentTo() {
      if (!this.appendTo) {
        this.parentElement = this.$el.parentElement
        return
      }
      let target = this.appendTo
      // handle selector
      if (typeof target === 'string') {
        target = document.querySelector(target)
        if (!target) {
          throw new Error(`SlideOut 找不到指定的 AppendTo 节点: ${this.appendTo}`)
        }
      }
      target.appendChild(this.$el)
      this.parentElement = target
    },
    onMaskClick() {
      if (this.closeOnMaskClick) {
        this.toggle(false)
      }
    },
    getParentSize() {
      let rect = this.parentElement.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    /**
     * 获取到此组件的大小（基于px）
     */
    getMyOwnSize() {
      let rect = this.$refs.layout.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    mouseDownHandler(e) {
      this.mousedown = true
      this.mouseDownPosition = {
        x: e.pageX,
        y: e.pageY
      }
      this.originSize = this.getMyOwnSize()
    },
    mouseMoveHandler(e) {
      // 鼠标未按下时，不能拖动
      if (!this.mousedown) {
        return
      }
      // 获取鼠标的偏移量
      let x = e.pageX - this.mouseDownPosition.x
      let y = e.pageY - this.mouseDownPosition.y

      let parentSize = this.getParentSize()
      let size = this.originSize
      let newSize = 0
      switch (this.dock) {
        case 'top':
          newSize = size.height + y
          if (newSize > parentSize.height) {
            newSize = parentSize.height
          }
          break
        case 'right':
          newSize = size.width - x
          if (newSize > parentSize.width) {
            newSize = parentSize.width
          }
          break
        case 'bottom':
          newSize = size.height - y
          if (newSize > parentSize.height) {
            newSize = parentSize.height
          }
          break
        case 'left':
          newSize = size.width + x
          if (newSize > parentSize.width) {
            newSize = parentSize.width
          }
          break
      }
      if (this.maxSize > 0 && this.maxSize < newSize) {
        newSize = this.maxSize
      }
      this.resizeValue = newSize < this.minSize ? this.minSize : newSize
      this.$nextTick(() => {
        this.$emit('resize', {size: this.resizeValue})
      })
    },
    mouseUpHandler() {
      this.mousedown = false
    },
    onKeydown(e) {
      if (!this.isVisible) {
        return
      }
      if (e.keyCode !== 27 && e.which !== 27) {
        return
      }
      // 忽略输入组件
      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) !== -1 || e.target.contentEditable === 'true') {
        return
      }
      this.toggle(false)
      return false
    },
    emitCloseEvent() {
      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.$emit('closed')
      }
      // 开启动画时，有个318ms的动画
      setTimeout(() => {
        this.$emit('closed')
      }, 318)
    }
  },
  mounted() {
    this.appendComponentTo()
    if (this.allowResize) {
      // 绑定鼠标事件
      document.addEventListener('mousemove', this.mouseMoveHandler)
      document.addEventListener('mouseup', this.mouseUpHandler)
    }
    if (!this.ignoreEsc) {
      this.$el.addEventListener('keydown', this.onKeydown)
    }
  },
  beforeDestroy() {
    if (!this.ignoreEsc) {
      this.$el.removeEventListener('keydown', this.onKeydown)
    }
    if (this.allowResize) {
      // 移除事件
      document.removeEventListener('mousemove', this.mouseUpHandler)
      document.removeEventListener('mouseup', this.mouseMoveHandler)
    }
    if (!this.isVisible) {
      return
    }
    this.setVisibleValue(false)
  }
}

export default component
