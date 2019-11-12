<template>
  <div class="vue-slideout" :style="containerStyle" :class="containerClasses" tabindex="0">
    <div class="vue-slideout-mask" v-if="showMask" @click="onMaskClick" :style="maskStyle"></div>
    <div class="vue-slideout-layout" :style="layoutStyle" ref="layout">
      <div class="vue-slideout-drag-handle" v-if="allowResize && !isFullscreen && !isSizeFixed"
           @mousedown="mouseDownHandler"></div>
      <div class="vue-slideout-header" :style="headerStyle" v-if="$slots.header || title">
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
      <div class="vue-slideout-content">
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
import component from './component'
import './slideout.less'

export default {
  mixins: [component],
  components: {IconArrow, IconCross, IconFullscreen, IconFullscreenExit}
}
</script>
