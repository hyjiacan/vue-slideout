<template>
  <div class="slideout" :style="containerStyle" :class="containerClasses"
       tabindex="0" v-if="!renderWhenVisible || isVisible">
    <div class="slideout-mask" v-if="showMask" @click="onMaskClick" :style="maskStyle"></div>
    <div class="slideout-layout" :style="layoutStyle" ref="layout">
      <div class="slideout-drag-handle" v-if="allowResize && !isFullscreen && !isSizeFixed"
           @mousedown="mouseDownHandler"></div>
      <div class="slideout-header" :style="headerStyle" v-if="showHeader">
        <slot name="header" :title="title">
          <div class="slideout-title-text">
            {{ title }}
          </div>
          <div class="slideout-title-buttons" ref="buttons">
            <span class="slideout-custom-buttons">
              <slot name="btn"/>
            </span>
            <span class="slideout-default-buttons">
              <button class="slideout-btn-fullscreen" @click="toggleFullscreen()" v-if="showFullscreen">
                <icon-fullscreen/>
                <icon-fullscreen-exit/>
              </button>
              <button class="slideout-btn-close" @click="tryClose()" v-if="showClose">
                <icon-arrow v-if="arrowButton"/>
                <icon-cross v-else/>
              </button>
            </span>
          </div>
        </slot>
      </div>
      <div class="slideout-content" :style="contentStyles">
        <slot/>
      </div>
      <div class="slideout-footer" v-show="$slots.footer">
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
  name: 'Slideout',
  mixins: [computed, data, methods, watch],
  components: {
    IconArrow,
    IconCross,
    IconFullscreen,
    IconFullscreenExit
  },
  props: {
    /**
     * The size of slideout.
     * If the value if an Array, then:
     * the 1st value is the width,
     * the 2nd value is the height.
     * If there is only one item in the array, then:
     * the width equals with the height.
     * 第一个值表示宽度，第二个值表示高度，数组只有一个值时，表示宽度和高度相同
     */
    size: {
      type: [String, Number, Array],
      default: 400
    },
    /**
     * If to allow resize operation.
     */
    allowResize: {
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
    visible: {
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
    appendTo: {
      type: [String, HTMLElement],
      default: null
    },
    disableAnimation: {
      type: Boolean,
      default: false
    },
    fullscreen: {
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
     * Whether to show the fullscreen button.
     */
    showFullscreen: {
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
  model: {
    prop: 'visible',
    event: 'change'
  },
  mounted () {
    this.isFullscreen = this.fullscreen
    this.appendComponentTo()
    if (this.allowResize) {
      // Bind the mouse events for resizing.
      document.addEventListener('mousemove', this.mouseMoveHandler)
      document.addEventListener('mouseup', this.mouseUpHandler)
    }
    this.headerButtons = this.$slots.btn ? this.$refs.buttons : null
  },
  beforeDestroy () {
    this.showContainer = false
    this._removeKeyboardEvent()
    if (this.allowResize) {
      // Remove the mouse events for resizing.
      document.removeEventListener('mousemove', this.mouseUpHandler)
      document.removeEventListener('mouseup', this.mouseMoveHandler)
    }
    if (this.isVisible) {
      this.tryClose()
    }
    // Cancel the scroll lock.
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
