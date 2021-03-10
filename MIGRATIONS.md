# Migrations

## Upgrade to 3.x

This section will guide you to upgrade Slideout to version 3.x.

**IMPORTANT BREAKING**

The component name has been changed to `Slideout` (From `SlideOut`).

### Props

#### visible

> **BREAKING**

This prop `visible` has been removed, use `v-model` instead.

#### render-when-visible

> **BREAKING**

The default value of `render-when-visible` has been changed to `true`.

You can use the follow codes to keep it in `false`:

```javascript
import Vue from 'vue'
import Slideout from '@hyjiacan/vue-slideout'

Vue.use(Slideout, {
  renderWhenVisible: false
})
```

#### fillparent

> **BREAKING**

This property has changed to `fill`.

### Events

#### before-open

Event `before-open` is removed, use `opening` instead.

You can just replace event `v-on:before-open` with `v-on:opening`.

For more information, see [Event opening](./API.md#opening).

#### open

Event `open` is removed, use `opened` instead.

You can just replace event `v-on:open` with `v-on:opened`.

For more information, see [Event opened](./API.md#opened).

#### close

Event `close` is removed, use `closing` instead.

With event `closing`, You should replace event `v-on:close` with `v-on:closing`.

Also, `e.wait` is no longer exists, use `e.pause` or `e.cancel` instead.

Also, `e.close` is no longer exists, use `e.resume` instead.

For more information, see [Event closing](./API.md#closing).

### CSS

> **BREAKING**

All the css class prefix `vue-slideout` has been changed to `slideout`.

The CSS class name changes:

|Old|New|
|---|---|
|slideout-dock-*|slideout-dock--*|
|slideout-visible|slideout-is--visible|
|slideout-enable-animation|slideout-animation--enabled|
|slideout-show-header|slideout-header--visible|
|slideout-show-footer|slideout-footer--visible|
|slideout-allow-resize|slideout-resize--enabled|
|slideout-fixed|slideout-is--fixed|
|slideout-fullscreen|slideout-is--fillparent|
|slideout-is-autosize|slideout-is--autosize|
|slideout-layout|slideout-panel|
|slideout-title-text|slideout-header--text|
|slideout-title-buttons|slideout-header--buttons|
|slideout-custom-buttons|slideout-header--buttons-custom|
|slideout-default-buttons|slideout-header--buttons-default|
|slideout-drag-handle|slideout-resize--handle|
|slideout-btn-close|slideout-btn--close|
|slideout-btn-fullscreen|slideout-btn--fill|
|slideout-lock-scroll|slideout-helper--scroll-locker|
