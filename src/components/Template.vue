<template>
  <div class="vue-slideout" :style="containerStyle" :class="containerClasses" tabindex="0">
    <div class="vue-slideout-mask" v-if="showMask" @click="onMaskClick" :style="maskStyle"></div>
    <div class="vue-slideout-layout" :style="layoutStyle" ref="layout">
      <div class="vue-slideout-drag-handle" v-if="allowResize && !fullscreen && !isSizeFixed"
           @mousedown="mouseDownHandler"></div>
      <div class="vue-slideout-header" :style="headerStyle" v-if="$slots.header || title">
        <slot name="header" :title="title">
          <div class="vue-slideout-title-text">
            {{title}}
          </div>
          <div class="vue-slideout-title-buttons" ref="buttons">
            <slot name="btn"></slot>
            <button class="vue-slideout-btn-close" @click="toggle(false)" v-if="showClose">
              <icon-arrow></icon-arrow>
            </button>
          </div>
        </slot>
      </div>
      <div class="vue-slideout-content">
        <slot></slot>
      </div>
      <div class="vue-slideout-footer" v-show="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from './icon/IconArrow'
import component from './component'
import props from './props'
import './slideout.less'

export default {
  props,
  components: {IconArrow},
  ...component
}
</script>
