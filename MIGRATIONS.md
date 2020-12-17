# Migrations

## Upgrade to 3.x

This section will guide you to upgrade Slideout to version 3.x.

**IMPORTANT BREAKING** Component name has been changed to `Slideout` (The old name is `SlideOut`).

### Props

#### visible

> **BREAKING**

This prop has been removed, use `v-model` instead.

#### render-when-visible

> **BREAKING**

The default value of `render-when-visible` has been changed to `true`.

### Events

### before-open

Event `before-open` is removed, use `opening` instead.

See [Event opening](./API.md#opening).

### open

Event `open` is removed, use `opened` instead.

See [Event opened](./API.md#opened).

### close

Event `close` is removed, use `closing` instead.

See [Event closing](./API.md#closing).

### CSS

> **BREAKING**

All the css class prefix `vue-slideout` has been changed to `slideout`.  
