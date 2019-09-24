# SlideOut

A Slide-Out component for Vue.js 2.0

### Dependencies
- Vue.js 2.x
- Less

## Install

```bash
npm i @hyjiacan/vue-slideout
```

or

```bash
yarn add @hyjiacan/vue-slideout
```

You can get the latest code:

```bash
git clone https://github.com/hyjiacan/vue-slideout.git
```

or just [download archive](https://github.com/hyjiacan/vue-slideout/archive/master.zip)

## Usage

### Global (recommend)

*main.js*
```javascript
import Vue from 'vue'
import SlideOut from '@hyjiacan/vue-slideout'
import '@hyjiacan/vue-slideout/lib/slideout.css'

// import SlideOut component, and set the defaults props
Vue.use(SlideOut, {
  // set props here
})
```

### In Component

*Foobar.vue*
```html
<slide-out @close="onClose">
    <div slot="header" slot-scope="{title}">
    </div>
    content
</slide-out>
<script>
import SlideOut from '@hyjiacan/vue-slideout'
import '@hyjiacan/vue-slideout/lib/slideout.css'

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

- For more usage, see https://hyjiacan.github.io/vue-slideout/
- API reference: [API.md](./API.md)

## Development

```bash
yarn
# start dev server
yarn serve
# Build library
yarn release
```
