# API Reference

## Properties

### Basic

#### size (optional)

- type `String/Number/Array`
- default `400px`

> The size of component, both `px` and `%` are available;
> - If it is an array, then: The 1st element is the width, and the 2nd element is the height,
> - if there is only one element: that makes width equals with height.
    > In this situation, props `resizable`, `min-size`, `max-size` are not available.
> - ( **Auto-fit size supported** ).
    > You can set value `0/[0]/[0,size]/[size,0]` to make component auto fit content size.
    > In this situation, props `min-size`, `max-size` are available.

#### v-model (required)

- type `Boolean`

> The visible state of component.

#### dock (optional)

- type `String`
- default `right`

> The dock position of component, optional values are `top`, `right`, `bottom`, `left`.

#### title (optional)

- type `String`

> The `title` text of component,
> if this is empty and `<template #header>` is empty too,the header would be hidden.

#### target (optional)

- type `String/HTMLElement`
- default `null`

> Append component into the specified element.
> Both `string`(selector) and `HTMLElement`(DOM object) available.
> Use style `position: fixed` if prop `target` not specified.
>
> Note the target element must exist before the component is mounted
>
> i.e. the target cannot be rendered by the component itself,
> and ideally should be outside of the entire Vue component tree.

### Mask layer

#### show-mask (optional)

- type `Boolean`
- default `true`

> Is the mask visible.

#### mask-color (optional)

- type `String`
- default `rgba(0, 0, 0, 0.5)`

> The color of mask layer.

#### close-on-mask-click (optional)

- type `Boolean`
- default `true`

> Whether to close component while the mask clicked.

### Fill parent

#### show-fill-button (optional)

- type `Boolean`
- default `false`

> Is the fill button visible.

#### fill-parent (optional)

- type `Boolean`
- default `false`

> Whether to enable fill-parent (resize is disabled if value is `true`),
> Use `v-model:fill-parent` to synchronize the value (will exit fill state after close).

### Size and location

#### resizable (optional)

- type `Boolean`
- default `false`

> Whether to allow resizing.

#### min-size (optional)

- type `Number`
- default `60`

> The min limit of drag-resize, value in `px`.

#### max-size (optional)

- type `Number`
- default `0`

> The max limit of drag-resize, value `0` makes no limit, value in `px`.

#### fixed (optional)

- type `Boolean`
- default `false`

> Whether to use `position: fixed`.

#### offset (optional)

- type `String`
- default `0`

> The offset from `dock` side, both `px` and `%` available.
> (Take effect only if prop `size` is an array).

### Others

#### z-index (optional)

- type `Number`
- default `1997`

> The z-index of component.

#### custom-class (optional)

- type `String`

> Customized the css class name.

#### show-close (optional)

- type `Boolean`
- default `true`

> Is the close button visible.

#### disable-animation (optional)

- type `Boolean`
- default `false`

> Whether to disable animation.

#### ignore-esc (optional)

- type `Boolean`
- default `false`

> Whether to ignore `esc` key, set `false` or keep default to close component while press `Esc`.

#### arrow-button (optional)

- type `Boolean`
- default `true`

> Display close button as `arrow`(->) if true, otherwise display as `cross` (x).

#### render-when-visible (optional)

- type `Boolean`
- default `true`

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

#### buttons

- args `-`

> Extend header buttons.

#### footer

- args `-`

> The footer slot.

## Events

#### opening

- args e: `{pause: Boolean, resume: Boolean}`

> Emitted before component open, in callback function,
> Emitted before component open, in callback function,
> assign `e.pause=true` to pause open, and assign `e.resume=true` to resume open (async supported).

#### opened

- args `-`

> Emitted after opened (and after the animation completed).

#### closing

- args e: `{pause: Boolean, resume: Boolean}`

> Emitted before component close, in callback function,
> assign `e.pause=true` to pause close, and assign `e.resume=true` to resume close (async supported).

#### closed

- args `-`

> Emitted after component closed, it's emitted after event `closing`
