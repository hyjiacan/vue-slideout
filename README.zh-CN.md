# SlideOut

![NPM](https://img.shields.io/npm/l/@hyjiacan/vue-slideout?style=flat-square)
![Travis (.org)](https://img.shields.io/travis/hyjiacan/vue-slideout?style=flat-square)
![npm (scoped)](https://img.shields.io/npm/v/@hyjiacan/vue-slideout?style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@hyjiacan/vue-slideout?style=flat-square)
![npm](https://img.shields.io/npm/dm/@hyjiacan/vue-slideout?style=flat-square)

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
import '@hyjiacan/vue-slideout/lib/slideout.css'

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
import '@hyjiacan/vue-slideout/lib/slideout.css'

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

- 更多的用法，参见 https://hyjiacan.github.io/vue-slideout/
- API文档参见 [API.zh-CN.md](./API.zh-CN.md)

## 开发

```bash
yarn
# 启动服务器
yarn serve
# 构建仓库
yarn release
```
