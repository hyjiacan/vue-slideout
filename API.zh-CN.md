# API 文档

## 属性

#### size (必填)

- 类型 `String/Number/Array`
- 默认值 `400px`

> 显示的尺寸, 可以使用单位`px`和`%`；
> - 当为数组时: 第一个值表示宽度，第二个值表示高度;
> - 当数组只有一个值时: 表示宽度和高度相同，此时属性 `allow-resize`, `min-size`, `max-size`  值会被忽略，即不允许改变大小
> - ( **自适应尺寸支持** `since 2.3.5`) 可以设置值为 `0/[0]/[0,size]/[size,0]` 格式，使组件尺寸自动适应内容。此时 `min-size`, `max-size` 可用。

#### z-index (选填)

- 类型 `Number`
- 默认值 `1997`

> 组件的 `z-index` 值

#### visible  (必填)

- 类型 `Boolean`
- 默认值 `false`

> 是否可见，可使用 `.sync` 修饰

#### title  (可选)

- 类型 `String`
- 默认值 `-`

> 标题文本，如果此属性为空，`slot=header` 也为空,(br/>那么头部会被隐藏

#### close-on-mask-click  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 是否在点击遮罩层时关闭

#### custom-class  (可选)

- 类型 `String`
- 默认值 `-`

> 自定义的样式类名称

#### show-mask  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 遮罩层是否可见

#### show-close  (可选)

- 类型 `Boolean`
- 默认值 `true`

> 是否显示关闭按钮

#### show-fullscreen  (可选)

> `since 2.3.0`

- 类型 `Boolean`
- 默认值 `false`

> 是否显示全屏按钮

#### mask-color  (可选)

- 类型 `String`
- 默认值 `rgba(0, 0, 0, 0.5)`

> 遮罩层的颜色

#### dock  (可选)

- 类型 `String`
- 默认值 `right`

> 停靠位置，可选值为: `top`, `right`, `bottom`, `left`

#### append-to  (可选)

- 类型 `String/HTMLElement`
- 默认值 `null`

> 设置父元素，可使用字符串(选择器)和(br/>对象(DOM对象)。
> 在未设置`appendTo`时，Slide组件会以`position: fixed`的方式显示

#### disable-animation  (可选)

- 类型 `Boolean`
- 默认值 `false`

> 是否禁用显示和隐藏的动画

#### allow-resize  (可选)

> `since 1.4.0`

- 类型 `Boolean`
- 默认值 `false`

> 是否允许鼠标挺拖动改变尺寸

#### min-size  (可选)

- 类型 `Number`
- 默认值 `60`

> 拖动大小的最小值限制，单位为 `px`

#### max-size  (可选)

- 类型 `Number`
- 默认值 `0`

> 拖动大小的最大值限制，单位为 `px`， 设置为 `0` 表示不限制

#### ignore-esc  (可选)

> `since 2.0.0`

- 类型 `Boolean`
- 默认值 `false`

> 是否忽略 `Esc` 键，设置为`false`或保持默认值时，按下`Esc`不会关闭

#### fullscreen  (可选)

> `since 2.1.3`

- 类型 `Boolean`
- 默认值 `false`

> 是否全屏显示(此时会禁用拖动改变尺寸功能)，可使用 `.sync` 修饰(此时在关闭后会退出全屏)

#### fixed  (可选)

> `since 2.1.12`

- 类型 `Boolean`
- 默认值 `false`

> 是否使用 `position: fixed`

#### offset (可选)

> `since 2.2.0`

- 类型 `String`
- 默认值 `0`

> 距离dock(停靠)边的偏移量，单位可以是`px`或`%` (仅当`size`是数组时生效)

#### arrow-button (可选)

> `since 2.3.0`

- 类型 `Boolean`
- 默认值 `true`

> 设置为`true`时，以箭头方式显示关闭按钮; 否则显示为 X 符号

#### render-when-visible (可选)

> `since 2.5.0`

- 类型 `Boolean`
- 默认值 `false`

> 是否仅在 `visible` 为 `true` 时才渲染内容 

## 插槽

#### header

- 作用域 `{title}`

> 头部内容，使用时会占据整个头部，此时属性`title`会无效，
> 同时也不会显示关闭按钮使用`slot-scope="{ title }"`可以取到属性`title`的值

#### btn

> `since 2.1.7`

> 头部的扩展部分，放在**关闭按钮**左侧

#### default

> 内容部分

#### footer

> 底部内容

## 事件

#### before-open

> `since 2.2.5`

- 参数 e: `{cancel: Boolean}`

> 在打开前调用,在回调函数内, 设置`e.cancel=true` 可以阻止打开

#### open

- 参数 `无`

> 在打开后立即调用

#### close

- 参数 e: `{close: Boolean, wait: Boolean}`

> 在关闭前调用,在回调函数内, 设置`e.wait=true` 可以阻止关闭，
> 设置 `e.close=true` 可以继续关闭(支持异步关闭)

#### closed

- 参数 '无'

> 在slide真正关闭后调用,它在事件`close`后才会被触发
