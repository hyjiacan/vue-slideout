# SlideOut

一个 Vue.js 2.0 的侧滑组件

### 依赖
- Vue.js 2.x
- Less
- v-scroll-lock

## 安装

```bash
npm i @hyjiacan/vue-slideout
```

或

```bash
yarn add @hyjiacan/vue-slideout
```

可以通过以下方式获取最新代码:

```bash
git clone https://github.com/hyjiacan/vue-slideout.git
```
或 [下载归档](https://github.com/hyjiacan/vue-slideout/archive/master.zip)

## 使用

```html
<slide-out @close="onClose">
    <div slot="header" slot-scope="{title}">
    </div>
    这里是内容
</slide-out>
<script>
import SlideOut from '@hyjiacan/vue-slideout'

export default {
    name: 'Foobar',
    components: {SlideOut},
    methods: {
        onClose (e) {
            // 阻止关闭，等待同步或异步的操作
            e.wait = true
            // 3秒后关闭slide
            setTimeout(() => {
                // 设置 close 为 true 以关闭，设置为 false 为什么也不做保持打开状态
                e.close = true
            }, 3000)
        }
    }
}
</script>
```

也可以通过 `Vue.component(SlideOut.name, SlideOut)` 或 `Vue.use(SlideOut)` 将其注册为全局组件。 

更多的用法，参见 https://hyjiacan.github.io/vue-slideout/

## 属性

|名称|类型|必填|描述|默认值|
|---|---|---|---|---|
|size|String/Number|否|显示的尺寸, 可以使用单位`px`和`%`|400px|
|zIndex|Number|否|z-index 值|1997|
|visible|Boolean|是|是否可见，可使用 `.sync` 修饰|false|
|title|String|否|标题文本，如果此属性为空，`slot=header` 也为空,<br/>那么头部会被隐藏||
|closeOnMaskClick|Boolean|否|是否在点击遮罩层时关闭|true|
|customClass|String|否|自定义的样式类名称||
|showMask|Boolean|否|遮罩层是否可见|true|
|maskColor|String|否|遮罩层的颜色|rgba(0, 0, 0, 0.5)|
|dock|String|否|停靠位置，可选值为: `top`, `right`, `bottom`, `left`|right|
|appendTo|String/HTMLElement|否|设置父元素，可使用字符串(选择器)和<br/>对象(DOM对象)|null|
|disableAnimation|Boolean|否|是否禁用显示和隐藏的动画|false|
|allowResize|Boolean|否|是否允许鼠标挺拖动改变尺寸|false|
|minSize|Number|否|拖动大小的最小值限制，单位为 `px`|60|
|maxSize|Number|否|拖动大小的最大值限制，单位为 `px`， 设置为 `0` 表示不限制|0|
|ignoreEsc|Boolean|否|是否忽略 `Esc` 键，设置为`false`或保持默认值时，按下`Esc`不会关闭|false|
|lockScroll|Boolean|否|是否锁定页面(仅影响`body`元素)的滚动(slide内可正常滚动)|false|
## 插槽

|名称|作用域|描述|
|---|---|---|
|header|`{title}`|头部内容，使用时会占据整个头部，此时属性`title`会无效，同时也不会显示关闭按钮<br/>使用`slot-scope="{ title }"`可以取到属性`title`的值|
|default||内容部分|
|footer||底部内容|


## 事件

|名称|参数|描述|
|---|---|---|
|open||在打开后立即调用|
|close|e: `{close: Boolean, wait: Boolean}`|在关闭前调用,在回调函数内, <br/>设置`e.wait=true` 可以阻止关闭，<br/>设置 `e.close=true` 可以继续关闭(支持异步关闭)|

## 开发

```bash
npm i
npm run dev
```
或
```bash
yarn
yarn run dev
```

> 注: 执行`npm run build` 或`yarn run build` 以生成文档。
