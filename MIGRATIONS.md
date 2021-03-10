# Migrations

The migrations contain some **breaking changes**. 

## Upgrade to 3.x

This section will guide you to upgrade Slideout from 2.x to 3.x.

The component name has been renamed to `Slideout` (From `SlideOut`).

### Props

#### visible

It has been removed, use `v-model` instead.

#### render-when-visible

The default value has been changed to `true`.

You can use the follow codes to keep it in `false`:

```javascript
import Vue from 'vue'
import Slideout from '@hyjiacan/vue-slideout'

Vue.use(Slideout, {
  renderWhenVisible: false
})
```

#### fullscreen

It has been renamed to `fill-parent`.

You should use `v-model:fill-parent` to synchronize the value.

#### showFullscreen

It has been renamed to `show-fill-button`.

#### allow-resize

It has been renamed to `resizable`.

#### append-to

It has been renamed to `target`.

### Events

#### before-open

It has been removed, use `opening` instead.

You can just replace event `v-on:before-open` with `v-on:opening`.

For more information, see [Event opening](./API.md#opening).

#### open

It has been removed, use `opened` instead.

You can just replace event `v-on:open` with `v-on:opened`.

For more information, see [Event opened](./API.md#opened).

#### close

It has been removed, use `closing` instead.

With event `closing`, You should replace event `v-on:close` with `v-on:closing`.

Also, `e.wait` is no longer exists, use `e.pause` or `e.cancel` instead.

Also, `e.close` is no longer exists, use `e.resume` instead.

For more information, see [Event closing](./API.md#closing).

### Slots

#### btn

It has been renamed to 'buttons'.

### CSS

All the css class prefix `vue-slideout` has been renamed to `slideout`.

Here is the changelist of CSS class name:

|Old(2.x)|New(3.x)|
|---|---|
|slideout-dock-*|slideout-dock--*|
|slideout-visible|slideout-is--visible|
|slideout-enable-animation|slideout-animation--enabled|
|slideout-show-header|slideout-header--visible|
|slideout-show-footer|slideout-footer--visible|
|slideout-allow-resize|slideout-is--resizable|
|slideout-fixed|slideout-is--fixed|
|slideout-fullscreen|slideout-is--filled|
|slideout-autosize|slideout-is--autosize|
|slideout-layout|slideout-panel|
|slideout-title-text|slideout-header--text|
|slideout-title-buttons|slideout-header--buttons|
|slideout-custom-buttons|slideout-header--buttons-custom|
|slideout-default-buttons|slideout-header--buttons-default|
|slideout-drag-handle|slideout-resize--handle|
|slideout-btn-close|slideout-btn--close|
|slideout-btn-fullscreen|slideout-btn--fill|
|slideout-lock-scroll|slideout-helper--scroll-locker|
