<template>
  <div class="slide" :style="containerStyle" :class="containerClasses">
    <div class="slide-mask" v-if="showMask" @click="onMaskClick" :style="maskStyle"></div>
    <div class="slide-layout" :style="layoutStyle">
      <div class="slide-header" v-if="$slots.header || title">
        <slot name="header" :title="title">
          <div class="title-text left">
            {{title}}
          </div>
          <div class="right">
            <button class="slide-btn-close" @click="toggle(false)">
              <svg version="1.1" viewBox="0 0 1024 1024"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16">
                <path
                  d="M493.45411 71.89033 197.751365 361.596502c-9.624195 9.380648-9.624195 24.707728 0 34.138518 9.576099 9.381671 25.222451 9.381671 34.848693 0l253.612115-248.494561 0 786.690176c0 13.3214 11.047614 24.142863 24.642237 24.142863 13.597693 0 24.645306-10.821463 24.645306-24.142863L535.499715 147.240459l253.632581 248.494561c9.603729 9.381671 25.248034 9.381671 34.847669 0 4.836145-4.76349 7.194866-10.939143 7.194866-17.116843 0-6.1777-2.405793-12.355399-7.194866-17.116843L528.255731 71.797209c-9.602705-9.383718-25.244964-9.383718-34.849716 0L493.45411 71.89033z"
                ></path>
              </svg>
            </button>
          </div>
        </slot>
      </div>
      <div class="slide-content">
        <slot></slot>
      </div>
      <div class="slide-footer" v-show="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideOut',
  props: {
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
      default: 'rgba(0, 0, 0, 0.5)'
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
      type: [String, HTMLElement]
    },
    /**
     * 是否禁用滑出动画，默认为false
     */
    disableAnimation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: false
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
      return {
        'background-color': this.maskColor
      }
    },
    layoutStyle() {
      let style = {}
      let size = typeof this.size === 'number' ? `${this.size}px` : this.size
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
      return [
        this.customClass,
        `dock-${this.dockOn}`,
        this.isVisible ? 'visible' : '',
        this.disableAnimation ? '' : 'enable-animation',
        this.title || this.$slots.header ? 'slide-show-header' : '',
        this.$slots.footer ? 'slide-show-footer' : ''
      ]
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
      this.isVisible = visible
      this.$emit('update:visible', visible)
    },
    appendComponentTo() {
      if (!this.appendTo) {
        return
      }
      let target = this.appendTo
      if (typeof target === 'string') {
        target = document.querySelector(target)
        if (!target) {
          throw new Error(`SlideOut 找不到指定的AppendTo节点: ${this.appendTo}`)
        }
      }
      if (target) {
        target.appendChild(this.$el)
      }
    },
    onMaskClick() {
      if (this.closeOnMaskClick) {
        this.toggle(false)
      }
    }
  },
  mounted() {
    this.appendComponentTo()
  },
  beforeDestroy() {
    if (!this.isVisible) {
      return
    }
    this.setVisibleValue(false)
  }
}
</script>

<style lang="less" scoped>
@duration: 318ms;

.left {
  float: left;
}

.right {
  float: right;
}

.slide {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  font-size: 14px;
  font-weight: normal;

  &-show-header {
    .slide-content {
      top: 48px;
    }
  }

  &-show-footer {
    .slide-content {
      bottom: 48px;
    }
  }
}

.enable-animation {
  opacity: 0;
  transition: opacity @duration, left 1ms @duration, top 1ms @duration, bottom 1ms @duration, right 1ms @duration;

  &.visible {
    opacity: 1;
    transition: opacity @duration, left 1ms, top 1ms, bottom 1ms, right 1ms;
  }

  .slide-layout {
    transition-property: left, right, top, bottom;
    transition-duration: @duration;
  }
}

.slide-layout {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
}

.slide-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.slide-content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow: auto;
}

.slide-header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 48px;
  padding: 5px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #EEE;

  .slide-btn-close {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 50%;
    transition: border-color 318ms;
    position: relative;
    outline: none;
    background: none;

    svg {
      fill: #5d616f;
      vertical-align: -2px;
    }

    &:hover {
      border-color: rgba(146, 146, 154, 0.63);

      svg {
        fill: #1C1F2E;
      }
    }

    &:active {
      background-color: rgba(146, 146, 154, 0.63);

      svg {
        fill: #222326;
      }
    }
  }
}

.slide-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 48px;
  padding: 5px 10px;
  box-sizing: border-box;
  border-top: 1px solid #EEE;
}

.title-text {
  line-height: 40px;
  font-size: 14px;
  font-weight: bold;
}

.dock-right {
  .slide-btn-close {
    transform: rotate(90deg);
  }
}

.dock-bottom {
  .slide-btn-close {
    transform: rotate(180deg);
  }
}

.dock-left {
  .slide-btn-close {
    transform: rotate(-90deg);
  }
}
</style>
