# API Reference

## Properties

#### size  (optional)

- type `String/Number/Array`
- default `400px`

> The size of slide, both `px` and `%` available;
> - If it is an array, then: The 1st element is the width, and the 2nd element is the height,
> - if there is only one element: that makes width equals with height. Properties `allow-resize`, `min-size`, `max-size` are not available.
> - ( **auto size supported** `since 2.3.5` )You can set value `0/[0]/[0,size]/[size,0]` to make slideout auto fit content size. Properties `min-size`, `max-size` are available. 

#### z-index  (optional)

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

#### close-on-mask-click  (optional)

- type `Boolean`
- default `true`

> Whether to close slide while mask clicked

#### custom-class  (optional)

- type `String`


> Customized stylesheet class name

#### show-mask  (optional)

- type `Boolean`
- default `true`

> Is mask visible

#### show-close  (optional)

- type `Boolean`
- default `true`

> Is close button visible

#### show-fullscreen  (optional)

> `since 2.3.0`

- type `Boolean`
- default `false`

> Is fullscreen button visible

#### mask-color  (optional)

- type `String`
- default `rgba(0, 0, 0, 0.5)`

> Mask color

#### dock  (optional)

- type `String`
- default `right`

> Slide dock position, optional values: `top`, `right`, `bottom`, `left`

#### append-to  (optional)

- type `String/HTMLElement`
- default `null`

> Append slide into specified element.
> Both `string`(selector) and `HTMLElement`(DOM object) available.
> Slide uses style `position: fixed` if property `appendTo` not specified.

#### disable-animation  (optional)

- type `Boolean`
- default `false`

> Whether to disable animation

#### allow-resize  (optional)

> `since 1.4.0`

- type `Boolean`
- default `false`

> Whether to allow drag-resize

#### min-size  (optional)

- type `Number`
- default `60`

> The min limit of drag-resize, value in `px`

#### max-size  (optional)

- type `Number`
- default `0`

> The max limit of drag-resize, value `0` makes no limit, value in `px`

#### ignore-esc  (optional)

> `since 2.0.0`

- type `Boolean`
- default `false`

> Whether to ignore `esc` key, set `false` or keep default to close slide while press `ESC`

#### fullscreen  (optional)

> `since 2.1.3`

- type `Boolean`
- default `false`

> Whether to enable fullscreen (resize is disabled if value is `true`),
> modifier `.sync` is available (will exit fullscreen after close)

#### fixed  (optional)

> `since 2.1.12`

- type `Boolean`
- default `false`

> Whether to use `position: fixed`


#### offset (optional)

> `since 2.2.0`

- type `String`
- default `0`

> The offset from `dock` side, both `px` and `%` available.
 > (Take affect only if property `size` is an Array)

#### arrow-button (optional)

> `since 2.3.0`

- type `Boolean`
- default `true`

> Display close button as `arrow`(->) if true, otherwise display as `cross` (x)

#### render-when-visible (optional)

> `since 2.5.0`

- type `Boolean`
- default `false`

> Whether to render the slideout content when `visible` is `true`

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

> `since 2.1.7`

- args `-`

> Extend header buttons, placed left side of the **Close Button**

#### footer  

- args `-`

> The footer slot.

## Events

#### before-open

> `since 2.2.5`

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
