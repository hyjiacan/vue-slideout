<template>
  <div class="vue-slideout" :style="containerStyle" :class="containerClasses" tabindex="0">
    <div class="vue-slideout-mask" v-if="showMask" @click="onMaskClick" :style="maskStyle"></div>
    <div class="vue-slideout-layout" v-if="!renderWhenVisible || isVisible" :style="layoutStyle" ref="layout">
      <div class="vue-slideout-drag-handle" v-if="allowResize && !isFullscreen && !isSizeFixed"
           @mousedown="mouseDownHandler"></div>
      <div class="vue-slideout-header" :style="headerStyle" v-if="showHeader">
        <slot name="header" :title="title">
          <div class="vue-slideout-title-text">
            {{title}}
          </div>
          <div class="vue-slideout-title-buttons" ref="buttons">
            <span class="vue-slideout-custom-buttons">
              <slot name="btn"/>
            </span>
            <span class="vue-slideout-default-buttons">
              <button class="vue-slideout-btn-fullscreen" @click="toggleFullscreen()" v-if="showFullscreen">
                <icon-fullscreen/>
                <icon-fullscreen-exit/>
              </button>
              <button class="vue-slideout-btn-close" @click="toggleVisible(false)" v-if="showClose">
                <icon-arrow v-if="arrowButton"/>
                <icon-cross v-else/>
              </button>
            </span>
          </div>
        </slot>
      </div>
      <div class="vue-slideout-content" :style="contentStyles">
        <slot/>
      </div>
      <div class="vue-slideout-footer" v-show="$slots.footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from './icon/IconArrow'
import IconCross from './icon/IconCross'
import IconFullscreen from './icon/IconFullscreen'
import IconFullscreenExit from './icon/IconFullscreenExit'
import '../styles/index.less'
import computed from './computed'
import data from './data'
import methods from './methods'
import watch from './watch'

export default {
  name: 'SlideOut',
  mixins: [computed, data, methods, watch],
  components: {IconArrow, IconCross, IconFullscreen, IconFullscreenExit},
  props: {
    /**
     * 滑出尺寸，单位为像素，当为数组时，表示设置宽度和高度
     * 第一个值表示宽度，第二个值表示高度，数组只有一个值时，表示宽度和高度相同
     */
    size: {
      type: [String, Number, Array],
      default: 400
    },
    /**
     * 是否允许拖动弹出大小
     */
    allowResize: {
      type: Boolean,
      default: false
    },
    /**
     * 拖动改变大小时的最小尺寸，单位为px，此值不影响size属性指定的大小
     */
    minSize: {
      type: Number,
      default: 100
    },
    /**
     * 拖动改变大小时的最大尺寸，单位为px，指定为0时不限制，此值不影响size属性指定的大小
     */
    maxSize: {
      type: Number,
      default: 0
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
     * 是否在点击mask时关闭
     */
    closeOnMaskClick: {
      type: Boolean,
      default: true
    },
    /**
     * 是否忽略ESC键，不忽略时按下ESC会关闭
     */
    ignoreEsc: {
      type: Boolean,
      default: false
    },
    /**
     * 停靠方向，默认右侧
     */
    dock: {
      type: String,
      default: 'right',
      validator: value => ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0
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
     * 是否启用全屏显示
     */
    fullscreen: {
      type: Boolean,
      default: false
    },
    /**
     * 是否显示关闭按钮
     */
    showClose: {
      type: Boolean,
      default: true
    },
    /**
     * 是否显示全屏按钮
     */
    showFullscreen: {
      type: Boolean,
      default: false
    },
    /**
     * 是否固定显示（此时会隐藏滚动条）
     */
    fixed: {
      type: Boolean,
      default: false
    },
    /**
     * 距离dock(停靠)边的偏移量，单位可以是`px`或`%`
     */
    offset: {
      type: String,
      default: '0'
    },
    /**
     * 以箭头方式显示关闭按钮
     */
    arrowButton: {
      type: Boolean,
      default: true
    },
    /**
     * 是否在可见时才渲染内容
     */
    renderWhenVisible: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.isFullscreen = this.fullscreen
    this.appendComponentTo()
    if (this.allowResize) {
      // 绑定鼠标事件
      document.addEventListener('mousemove', this.mouseMoveHandler)
      document.addEventListener('mouseup', this.mouseUpHandler)
    }
    this._bindKeyboardEvent()
    this.headerButtons = this.$slots.btn ? this.$refs.buttons : null
  },
  beforeDestroy() {
    this.showContainer = false
    this._removeKeyboardEvent()
    if (this.allowResize) {
      // 移除事件
      document.removeEventListener('mousemove', this.mouseUpHandler)
      document.removeEventListener('mouseup', this.mouseMoveHandler)
    }
    if (this.isVisible) {
      this.setVisibleValue(false)
    }
    // 取消滚动锁定
    document.body.classList.remove('vue-slideout-lock-scroll')
    if (this.appendTo) {
      try {
        this.$el.parentElement.removeChild(this.$el)
      } catch (e) {
        // ignore
      }
    }
  }
}
</script>
