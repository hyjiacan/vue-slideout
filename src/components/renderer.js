import {h, Teleport} from 'vue'

import IconArrow from './icon/IconArrow'
import IconCross from './icon/IconCross'

import IconFill from './icon/IconFill'
import IconExitFill from './icon/IconExitFill'

export default {
  methods: {
    renderDefaultButtons() {
      const buttons = []

      if (this.showFillButton) {
        buttons.push(h('button', {
          class: 'slideout-btn--fill',
          onClick: this.toggleFillState
        }, [h(IconFill), h(IconExitFill)]))
      }
      if (this.showClose) {
        buttons.push(h('button', {
          class: 'slideout-btn--close',
          onClick: this.tryClose
        }, this.arrowButton ? h(IconArrow) : h(IconCross)))
      }

      return this.span({
        class: 'slideout-header--buttons-default'
      }, buttons)
    },
    renderResizeHandle() {
      return this.div({
        class: 'slideout-resize--handle',
        onMousedown: this.mouseDownHandler,
        onTouchstart: this.mouseDownHandler
      })
    },
    renderHeader() {
      return this.div({
        class: 'slideout-header'
      }, this.$slots.header ? this.$slots.header() : [
        this.div({
          class: 'slideout-header--text'
        }, this.title),
        this.div({
          class: 'slideout-header--buttons',
          ref: 'buttons'
        }, [
          this.span({
            class: 'slideout-header--buttons-custom'
          }, this.$slots.buttons ? this.$slots.buttons() : []),
          this.renderDefaultButtons()
        ])
      ])
    },
    renderContent() {
      return this.div({
        class: 'slideout-content',
      }, this.$slots.default ? this.$slots.default() : [])
    },
    renderFooter() {
      return this.div({
        class: 'slideout-footer'
      }, this.$slots.footer ? this.$slots.footer() : [])
    },
    renderLayout() {
      const children = []
      if (this.resizable && !this.isFilled && !this.isSizeFixed) {
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
        class: 'slideout-panel',
        style: this.panelStyle,
        ref: 'panel'
      }, children)
    },
    renderMask() {
      return this.div({
        class: 'slideout-mask',
        style: this.maskStyle,
        onClick: this.onMaskClick
      })
    },
    renderContainer(children) {
      return this.div({
        class: this.containerClasses,
        style: this.containerStyle,
        tabindex: 0,
        ref: 'container',
        onKeydown: this.onKeydown
      }, children)
    },
    div(props, children) {
      return h('div', props, children)
    },
    span(props, children) {
      return h('span', props, children)
    }
  },
  render() {
    if (this.renderWhenVisible && !this.modelValue) {
      return null
    }

    const children = []

    if (this.showMask) {
      children.push(this.renderMask())
    }

    children.push(this.renderLayout())

    const container = this.renderContainer(children)

    if (this.target) {
      return h(Teleport, {
        to: this.target
      }, container)
    }
    return container
  }
}
