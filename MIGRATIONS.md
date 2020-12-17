# Migrations

## Upgrade to 3.x

This section will guide you to upgrade Slideout to version 3.x.

**IMPORTANT BREAKING** Component name has been changed to `Slideout` (The old name is `SlideOut`).

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

### Events

### before-open

Event `before-open` is removed, use `opening` instead.

You can just replace event `v-on:before-open` with `v-on:opening`.

For more information, see [Event opening](./API.md#opening).

### open

Event `open` is removed, use `opened` instead.

You can just replace event `v-on:open` with `v-on:opened`.

For more information, see [Event opened](./API.md#opened).

### close

Event `close` is removed, use `closing` instead.

With event `closing`,
You should replace event `v-on:close` with `v-on:closing`.
Also, `e.wait` is no longer exists, use `e.pause` or `e.cancel` instead.
Also, `e.close` is no longer exists, use `e.resume` instead.

For more information, see [Event closing](./API.md#closing).

### CSS

> **BREAKING**

All the css class prefix `vue-slideout` has been changed to `slideout`.  
