# SlideOut

A Slide-Out component for Vue.js 2.0

### Dependencies
- Vue.js 2.6+
- Less

## Install

```
npm i @hyjiacan/vue-slideout --save
```

## Usage

```html
<slide-out @close="onClose">
    <div v-slot.header="{title}">
    </div>
    For Vue2.6+
</slide-out>
<slide-out @close="onClose">
    <div slot-scope="{title}">
    </div>
    For Vue2.x
</slide-out>
<script>
import SlideOut from '@hyjiacan/vue-slideout'

export default {
    name: 'Foobar',
    components: {SlideOut},
    methods: {
        onClose (e) {
            // prevent close and wait
            e.wait = true
            // close after 3 seconds
            setTimeout(() => {
                // assign true to close, do nothing or assign false to cancel close.
                e.close = true
            }, 3000)
        }
    }
}
</script>
```

For more usage, see https://hyjiacan.github.io/vue-slideout/

## Properties

|name|type|required|description|default|
|---|---|---|---|---|
|size|String \| Number|false|Slide size, both `px` and `%` available|400|
|zIndex|Number|false|z-index|1997|
|visible|Boolean|true|Is the slide visible，modifier `.sync` is available|false|
|title|String|false|Slide `title` text, if this is empty and `slot=header` is empty too, the header would be hidden||
|closeOnMaskClick|Boolean|false|Whether to close slide while mask clicked|true|
|customClass|String|false|Customized stylesheet class name||
|showMask|Boolean|false|Is mask visible|true|
|maskColor|String|false|Mask color|rgba(0, 0, 0, 0.5)|
|dock|String|false|Slide dock position, optional values: `top`, `right`, `bottom`, `left`|right|
|appendTo|String \| HTMLElement|false|Append slide into specified element.Both `string`(selector) and `HTMLElement`(DOM object) available|null|
|disableAnimation|Boolean|false|Whether to disable animation|false|

## Slots

|name|scope|description|
|---|---|---|
|header|`{title}`|Header content, take all the header bar, <br/>`title` will take no affected(and close button will be removed) if specified this，<br/>use `v-slot.header="{title}"`(Vue2.6+, Vue3.x) or `slot-scope="{ title }"`(Vue2.x) to get property `title`|
|default||Content|
|footer||Footer content|


## Events

|name|parameter|description|
|---|---|---|
|open||Invoke after slide opened|
|close|e: `{close: Boolean, wait: Boolean}`|Invoke before slide close, in callback function, <br/>assign `e.wait=true` to prevent close，<br/>and assign `e.close=true` to close (async supported)|

## Development

```bash
npm i
npm run dev
```

> Note: run `npm run build` to build docs。
