# API Reference

## Properties

#### size (optional)

- type `String/Number/Array`
- default `400px`

> The size of component, both `px` and `%` are available;
> - If it is an array, then: The 1st element is the width, and the 2nd element is the height,
> - if there is only one element: that makes width equals with height.
  In this situation, props `allow-resize`, `min-size`, `max-size` are not available.
> - ( **Auto-fit size supported** `since 2.3.5` ).
  You can set value `0/[0]/[0,size]/[size,0]` to make component auto fit content size.
  In this situation, props `min-size`, `max-size` are available. 

#### z-index (optional)

- type `Number`
- default `1997`

> The z-index of component.

#### ~~visible~~ (required)

> Removed since _3.0.0_, use `v-model` instead.

- type `Boolean`
- default `false`

> The visible state of component, modifier `.sync` is available.

#### v-model (required)

> Since `3.0.0`

- type `Boolean`

> The visible state of component.

#### title (optional)

- type `String`


> The `title` text of component,
> if this is empty and `slot=header` is empty too,the header would be hidden.

#### close-on-mask-click (optional)

- type `Boolean`
- default `true`

> Whether to close component while the mask clicked.

#### custom-class (optional)

- type `String`


> Customized the css class name.

#### show-mask (optional)

- type `Boolean`
- default `true`

> Is the mask visible.

#### show-close (optional)

- type `Boolean`
- default `true`

> Is the close button visible.

#### show-fullscreen (optional)

> `since 2.3.0`

- type `Boolean`
- default `false`

> Is the fullscreen button visible.

#### mask-color (optional)

- type `String`
- default `rgba(0, 0, 0, 0.5)`

> The color of mask layer.

#### dock (optional)

- type `String`
- default `right`

> The dock position of component, optional values are `top`, `right`, `bottom`, `left`.

#### append-to (optional)

- type `String/HTMLElement`
- default `null`

> Append component into the specified element.
> Both `string`(selector) and `HTMLElement`(DOM object) available.
> Use style `position: fixed` if prop `appendTo` not specified.

#### disable-animation (optional)

- type `Boolean`
- default `false`

> Whether to disable animation.

#### allow-resize (optional)

> `since 1.4.0`

- type `Boolean`
- default `false`

> Whether to allow drag-resize.

#### min-size (optional)

- type `Number`
- default `60`

> The min limit of drag-resize, value in `px`.

#### max-size (optional)

- type `Number`
- default `0`

> The max limit of drag-resize, value `0` makes no limit, value in `px`.

#### ignore-esc (optional)

> `since 2.0.0`

- type `Boolean`
- default `false`

> Whether to ignore `esc` key, set `false` or keep default to close component while press `ESC`.

#### fullscreen (optional)

> `since 2.1.3`

- type `Boolean`
- default `false`

> Whether to enable fullscreen (resize is disabled if value is `true`),
> modifier `.sync` is available (will exit fullscreen after close).

#### fixed (optional)

> `since 2.1.12`

- type `Boolean`
- default `false`

> Whether to use `position: fixed`.

#### offset (optional)

> `since 2.2.0`

- type `String`
- default `0`

> The offset from `dock` side, both `px` and `%` available.
> (Take effect only if prop `size` is an array).

#### arrow-button (optional)

> `since 2.3.0`

- type `Boolean`
- default `true`

> Display close button as `arrow`(->) if true, otherwise display as `cross` (x).

#### render-when-visible (optional)

> `since 2.5.0`

- type `Boolean`
- default `false` / `true` after _3.0.0_

> DON'T render the content when `visible` is `false`.

## Slots

#### default 

- args `-`

> The content slot.

#### header 

- args `{title}`

> The header slot, replaces all the header bar, 
> `title` will take no affected(and close button will be removed) if specified this,
> use `slot-scope="{ title }"` to get prop `title`.

#### btn 

> `since 2.1.7`

- args `-`

> Extend header buttons, placed left side of the **Close Button**.

#### footer 

- args `-`

> The footer slot.

## Events

#### opening

> `since 3.0.0`

- args e: `{pause: Boolean, resume: Boolean}`

> Emitted before component open, in callback function,
> assign `e.pause=true` to pause open, and assign `e.resume=true` to resume open (async supported).

#### opened

> `since 3.0.0`

- args `-`

> Emitted after opened (and after the animation completed).

#### closing

> `since 3.0.0`

- args e: `{pause: Boolean, resume: Boolean}`

> Emitted before component close, in callback function,
> assign `e.pause=true` to pause close, and assign `e.resume=true` to resume close (async supported).

#### closed 

- args `-`

> Emitted after component closed, it's emitted after event `closing`

#### ~~before-open~~

> Removed since _3.0.0_, use [opening](#opening) instead.

> `since 2.2.5`

- args e: `{cancel: Boolean}`

> Emitted before component open, in callback function,
> assign `e.cancel=true` to prevent open

#### ~~open~~

> Removed since _3.0.0_, use [opened](#opened) instead.

- args `-`

> Emitted after component opened

#### ~~close~~

> Removed since _3.0.0_, use [closing](#closing) instead.

- args e: `{close: Boolean, wait: Boolean}`

> Emitted before component close, in callback function,
> assign `e.wait=true` to prevent close, and assign `e.close=true` to close (async supported).
