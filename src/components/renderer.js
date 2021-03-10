import { h } from 'vue'

import IconArrow from './icon/IconArrow'
import IconCross from './icon/IconCross'

import IconFullscreen from './icon/IconFullscreen'
import IconFullscreenExit from './icon/IconFullscreenExit'

export default {
  methods: {
    renderDefaultButtons () {
      const buttons = []

      if (this.showFullscreen) {
        buttons.push(h('button', {
          class: 'slideout-btn-fullscreen',
          onClick: this.toggleFullscreen
        }, [h(IconFullscreen), h(IconFullscreenExit)]))
      }
      if (this.showClose) {
        buttons.push(h('button', {
          class: 'slideout-btn-close',
          onClick: this.tryClose
        }, this.arrowButton ? h(IconArrow) : h(IconCross)))
      }

      return this.span({
        class: 'slideout-default-buttons'
      }, buttons)
    },
    renderResizeHandle () {
      return this.div({
        class: 'slideout-drag-handle',
        onMousedown: this.mouseDownHandler
      })
    },
    renderHeader () {
      return this.div({
        class: 'slideout-header',
        style: this.headerStyle
      }, this.$slots.header ? this.$slots.header() : [
        this.div({
          class: 'slideout-title-text'
        }, this.title),
        this.div({
          class: 'slideout-title-buttons',
          ref: 'buttons'
        }, [
          this.span({
            class: 'slideout-custom-buttons'
          }, this.$slots.btn ? this.$slots.btn() : []),
          this.renderDefaultButtons()
        ])
      ])
    },
    renderContent () {
      return this.div({
        class: 'slideout-content',
        style: this.contentStyles
      }, this.$slots.default())
    },
    renderFooter () {
      return this.div({
        class: 'slideout-footer'
      }, this.$slots.footer ? this.$slots.footer() : [])
    },
    renderLayout () {
      const children = []
      if (this.allowResize && !this.isFullscreen && !this.isSizeFixed) {
        children.push(this.renderResizeHandle())
      }
      if (this.showHeader) {
        children.push(this.renderHeader())
      }
      children.push(this.renderContent())
      if (this.showFooter) {
        children.push(this.renderFooter())
      }
      return this.div({
        class: 'slideout-layout',
        style: this.layoutStyle,
        ref: 'layout'
      }, children)
    },
    renderMask () {
      return this.div({
        class: 'slideout-mask',
        style: this.maskStyle,
        onClick: this.onMaskClick
      })
    },
    renderContainer (children) {
      return this.div({
        class: this.containerClasses,
        style: this.containerStyle,
        tabindex: 0
      }, children)
    },
    div (props, children) {
      return h('div', props, children)
    },
    span (props, children) {
      return h('span', props, children)
    }
  },
  render () {
    const children = []

    if (this.showMask) {
      children.push(this.renderMask())
    }

    children.push(this.renderLayout())

    const container = this.renderContainer(children)

    return h('teleport', {
      to: this.appendTo,
      disabled: this.appendTo
    }, container)
    // if (this.appendTo) {
    //   return h('teleport', {
    //     to: this.parentElement
    //   }, container)
    // }
    // return container
  }
}
