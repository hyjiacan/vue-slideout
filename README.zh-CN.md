# SlideOut

一个 Vue.js 2.0 的侧滑组件

### 依赖
- Vue.js 2.x
- Less

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

### 全局引用 (推荐)

*main.js*
```javascript
import Vue from 'vue'
import SlideOut from '@hyjiacan/vue-slideout'
import from '@hyjiacan/vue-slideout/lib/slideout.css'

// 引入 SlideOut 组件，并设置组件默认值
Vue.use(SlideOut, {
  // 在此处填写默认的属性值
})
```

### 组件内引用

*Foobar.vue*
```html
<slide-out @close="onClose">
    <div slot="header" slot-scope="{title}">
    </div>
    这里是内容
</slide-out>
<script>
import SlideOut from '@hyjiacan/vue-slideout'
import from '@hyjiacan/vue-slideout/lib/slideout.css'

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

更多的用法，参见 https://hyjiacan.github.io/vue-slideout/

## 属性

|名称|类型|必填|描述|默认值|
|---|---|---|---|---|
|size|String/Number|否|显示的尺寸, 可以使用单位`px`和`%`|400px|
|zIndex|Number|否|z-index 值|1997|
|visible|Boolean|是|是否可见，可使用 `.sync` 修饰|false|
|title|String|否|标题文本，如果此属性为空，`slot=header` 也为空,<br/>那么头部会被隐藏|-|
|closeOnMaskClick|Boolean|否|是否在点击遮罩层时关闭|true|
|customClass|String|否|自定义的样式类名称|-|
|showMask|Boolean|否|遮罩层是否可见|true|
|showClose|Boolean|否|是否显示关闭按钮|true|
|maskColor|String|否|遮罩层的颜色|rgba(0, 0, 0, 0.5)|
|dock|String|否|停靠位置，可选值为: `top`, `right`, `bottom`, `left`|right|
|appendTo|String/HTMLElement|否|设置父元素，可使用字符串(选择器)和<br/>对象(DOM对象)|null|
|disableAnimation|Boolean|否|是否禁用显示和隐藏的动画|false|
|allowResize|Boolean|否|是否允许鼠标挺拖动改变尺寸|false|
|minSize|Number|否|拖动大小的最小值限制，单位为 `px`|60|
|maxSize|Number|否|拖动大小的最大值限制，单位为 `px`， 设置为 `0` 表示不限制|0|
|ignoreEsc|Boolean|否|是否忽略 `Esc` 键，设置为`false`或保持默认值时，按下`Esc`不会关闭|false|
|fullscreen|Boolean|否|是否全屏显示(此时会禁用拖动改变尺寸功能)，可使用 `.sync` 修饰(此时在关闭后会退出全屏)|false|

> 注意：在未设置`appendTo`时，Slide组件会以`position: fixed`的方式显示

## 插槽

|名称|作用域|描述|
|---|---|---|
|header|`{title}`|头部内容，使用时会占据整个头部，此时属性`title`会无效，同时也不会显示关闭按钮<br/>使用`slot-scope="{ title }"`可以取到属性`title`的值|
|btn|-|头部的扩展部分，放在**关闭按钮**左侧|
|default|-|内容部分|
|footer|-|底部内容|


## 事件

|名称|参数|描述|
|---|---|---|
|open|-|在打开后立即调用|
|close|e: `{close: Boolean, wait: Boolean}`|在关闭前调用,在回调函数内, <br/>设置`e.wait=true` 可以阻止关闭，<br/>设置 `e.close=true` 可以继续关闭(支持异步关闭)|
|closed|-|在slide真正关闭后调用,它在事件`close`后才会被触发|

## 开发

```bash
yarn
# 启动服务器
yarn serve
# 构建仓库
yarn release
```
