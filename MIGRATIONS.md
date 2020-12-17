# Migrations

## Upgrade to 3.x 

This section will guide you to upgrade Slideout to version 3.x. 

### Props

#### render-when-visible

> **BREAKING**

The default value of `render-when-visible` has been changed to `true`.

### Events

### before-open

Event `before-open` is deprecated, use `opening` instead.

See [Event opening](./API.md#opening).

### open

Event `open` is deprecated, use `opened` instead.

See [Event opened](./API.md#opened).

### close

Event `close` is deprecated, use `closing` instead.

See [Event closing](./API.md#closing).

### CSS

> **BREAKING**

All the css class prefix `vue-slideout` has been changed to `slideout`.  
