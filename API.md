# API Reference

## Properties

#### size  (optional)

- type `String/Number/Array`
- default `400px`

> The size of slide, both `px` and `%` available;
> If it is an array, then:
> - The 1st element is the width, and the 2nd element is the height,
> if there is only one element, that makes width equals with height.
> - Properties `allowResize`, `minSize`, `maxSize` will be ignore. 

#### zIndex  (optional)

- type `Number`
- default `1997`

> The z-index of slide

#### visible  (required)

- type `Boolean`
- default `false`

> Is the slide visible, modifier `.sync` is available

#### title  (optional)

- type `String`


> Slide `title` text,
> if this is empty and `slot=header` is empty too,the header would be hidden

#### closeOnMaskClick  (optional)

- type `Boolean`
- default `true`

> Whether to close slide while mask clicked

#### customClass  (optional)

- type `String`


> Customized stylesheet class name

#### showMask  (optional)

- type `Boolean`
- default `true`

> Is mask visible

#### showClose  (optional)

- type `Boolean`
- default `true`

> Is close button visible

#### maskColor  (optional)

- type `String`
- default `rgba(0, 0, 0, 0.5)`

> Mask color

#### dock  (optional)

- type `String`
- default `right`

> Slide dock position, optional values: `top`, `right`, `bottom`, `left`

#### appendTo  (optional)

- type `String/HTMLElement`
- default `null`

> Append slide into specified element.
> Both `string`(selector) and `HTMLElement`(DOM object) available.
> Slide uses style `position: fixed` if property `appendTo` not specified.

#### disableAnimation  (optional)

- type `Boolean`
- default `false`

> Whether to disable animation

#### allowResize  (optional)

- type `Boolean`
- default `false`

> Whether to allow drag-resize

#### minSize  (optional)

- type `Number`
- default `60`

> The min limit of drag-resize, value in `px`

#### maxSize  (optional)

- type `Number`
- default `0`

> The max limit of drag-resize, value `0` makes no limit, value in `px`

#### ignoreEsc  (optional)

- type `Boolean`
- default `false`

> Whether to ignore `esc` key, set `false` or keep default to close slide while press `ESC`

#### fullscreen  (optional)

- type `Boolean`
- default `false`

> Whether to enable fullscreen (resize is disabled if value is `true`),
> modifier `.sync` is available (will exit fullscreen after close)

#### fixed  (optional)

- type `Boolean`
- default `false`

> Whether to use `position: fixed`


#### offset (可选)

- 类型 `String`
- 默认值 `0`

> The offset from `dock` side, both `px` and `%` available.
 > (Take affect only if property `size` is an Array)

## Slots

#### default  

- args `-`

> The content slot.

#### header  

- args `{title}`

> The header slot, replaces all the header bar, 
> `title` will take no affected(and close button will be removed) if specified this,
> use `slot-scope="{ title }"` to get property `title`

#### btn  

- args `-`

> Extend header buttons, placed left side of the **Close Button**

#### footer  

- args `-`

> The footer slot.

## Events

#### before-open

- args e: `{cancel: Boolean}`

> Invoke before slide open, in callback function,
> assign `e.cancel=true` to prevent open

#### open  

- args `-`

> Invoke after slide opened

#### close  

- args e: `{close: Boolean, wait: Boolean}`

> Invoke before slide close, in callback function,
> assign `e.wait=true` to prevent close, and assign `e.close=true` to close (async supported)

#### closed  

- args `-`

> Invoke after slide really closed, it's emit after event `close`
