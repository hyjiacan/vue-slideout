# API 文档

## 属性

### 基础属性

#### v-model (必填)

- 类型 `Boolean`

> 组件的可见状态。

#### size (必填)

- 类型 `String/Number/Array`
- 默认值 `400px`

> 显示的尺寸, 可以使用单位`px`和`%`；
> - 当为数组时: 第一个值表示宽度，第二个值表示高度;
> - 当数组只有一个值时: 表示宽度和高度相同，此时属性 `resizable`, `min-size`, `max-size` 值会被忽略，即不允许改变大小。
> - ( **自适应尺寸支持** ) 可以设置值为 `0/[0]/[0,size]/[size,0]` 格式， 使组件尺寸自动适应内容。此时 `min-size`, `max-size` 可用。

#### dock  (可选)

- 类型 `String`
- 默认值 `right`

> 停靠位置，可选值为: `top`, `right`, `bottom`, `left`。

#### title  (可选)

- 类型 `String`
- 默认值 `-`

> 标题文本，如果此属性为空，`<template #header>` 也为空, 那么头部会被隐藏。

#### target  (可选)

- 类型 `String/HTMLElement`
- 默认值 `null`

> 设置父元素，可使用字符串(选择器)和(DOM对象)。
> 在未设置 `target` 时，Slide组件会以 `position: fixed` 的方式显示。
>
> 注意：请确保目标元素在组件挂载前已经存在。
>
> 也就是说，目标元素不能由包含此组件的本身来渲染，并且最好是将其放置在整个Vue组件树之外。

### mask 层属性

#### show-mask  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 遮罩层是否可见。

#### mask-color  (可选)

- 类型 `String`
- 默认值 `rgba(0, 0, 0, 0.5)`

> 遮罩层的颜色。

#### close-on-mask-click  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 是否在点击遮罩层时关闭。

### 填充父容器

#### fill-parent  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否填充父容器(此时会禁用拖动改变尺寸功能)，可使用 `v-model:fill-parent` 同步值(此时在关闭后会退出填充父容器)。

#### show-fill-button  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否显示填充父容器按钮。

### 大小和位置

#### resizable  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否允许鼠标挺拖动改变尺寸。

#### min-size  (可选)

- 类型 `Number`
- 默认值 `60`

> 拖动大小的最小值限制，单位为 `px`。

#### max-size  (可选)

- 类型 `Number`
- 默认值 `0`

> 拖动大小的最大值限制，单位为 `px`， 设置为 `0` 表示不限制。

#### fixed  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否使用 `position: fixed`。

#### offset (可选)

- 类型 `String`
- 默认值 `0`

> 距离dock(停靠)边的偏移量，单位可以是`px`或`%` (仅当`size`是数组时生效)。

### 其他属性

#### z-index (选填)

- 类型 `Number`
- 默认值 `1997`

> 组件的 `z-index` 值。

#### custom-class  (可选)

- 类型 `String`
- 默认值 `-`

> 自定义的样式类名称。

#### show-close  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 是否显示关闭按钮。

#### disable-animation  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否禁用显示和隐藏的动画。

#### ignore-esc  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否忽略 `Esc` 键，设置为`false`或保持默认值时，按下`Esc`不会关闭。

#### arrow-button (可选)

- 类型 `Boolean`
- 默认值 `true`

> 设置为`true`时，以箭头方式显示关闭按钮; 否则显示为 X 符号。

#### render-when-visible (可选)

- 类型 `Boolean`
- 默认值 `true`

> 是否仅在 `visible` 为 `true` 时才渲染内容。

## 插槽

#### header

- 作用域 `{title}`

> 头部内容，使用时会占据整个头部，此时属性`title`会无效，
> 同时也不会显示关闭按钮使用`slot-scope="{ title }"`可以取到属性`title`的值。

#### buttons

> 头部的扩展按钮部分。

#### default

> 内容部分。

#### footer

> 底部内容。

## 事件

#### opening

- 参数 e: `{pause: Boolean, resume: Boolean}`

> 在打开前调用,在回调函数内, 设置`e.pause=true` 可以阻止打开，
> 设置 `e.continue=true` 可以继续打开(支持异步)。

#### opened

- 参数 `-`

> 在打开后(动画完成)调用。

#### closing

- 参数 e: `{pause: Boolean, resume: Boolean}`

> 在关闭前调用,在回调函数内, 设置`e.pause=true` 可以阻止关闭，
> 设置 `e.continue=true` 可以继续关闭(支持异步)。

#### closed

- 参数 `-`

> 在真正关闭后调用, 它在事件 `closing` 后才会被触发。
