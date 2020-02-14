# SlideOut

[![NPM](https://img.shields.io/npm/l/@hyjiacan/vue-slideout?style=flat-square)](https://github.com/hyjiacan/vue-slideout/blob/master/LICENSE)
[![Travis (.org)](https://img.shields.io/travis/hyjiacan/vue-slideout?style=flat-square)](https://www.travis-ci.org/hyjiacan/vue-slideout)
[![npm (scoped)](https://img.shields.io/npm/v/@hyjiacan/vue-slideout?style=flat-square)](https://www.npmjs.com/package/@hyjiacan/vue-slideout)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@hyjiacan/vue-slideout?style=flat-square)
[![npm](https://img.shields.io/npm/dm/@hyjiacan/vue-slideout?style=flat-square)](https://npmcharts.com/compare/@hyjiacan/vue-slideout?minimal=true)
[![Coverage Status](https://coveralls.io/repos/github/hyjiacan/vue-slideout/badge.svg?branch=master)](https://coveralls.io/github/hyjiacan/vue-slideout?branch=master)
[![](https://data.jsdelivr.com/v1/package/npm/@hyjiacan/vue-slideout/badge)](https://www.jsdelivr.com/package/npm/@hyjiacan/vue-slideout)

A Slide-Out component for Vue.js 2.0

### Dependencies
- Vue.js 2.x
- Less

## Install

### NodeJS ENV (commonjs)

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

### Browser ENV (umd)

> Since version 2.4.0
 
Unlike node env, a lowercase global `slideout` will be exploded.

The newest version
```html
<script src="https://cdn.jsdelivr.com/npm/@hyjiacan/vue-slideout/lib/slideout.umd.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@hyjiacan/vue-slideout/lib/slideout.css" />
```

Specified version
```html
<script src="https://cdn.jsdelivr.com/npm/@hyjiacan/vue-slideout@<VERSION>/lib/slideout.umd.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@hyjiacan/vue-slideout@<VERSION>/lib/slideout.css" />
```

> **unpkg** is also available: instead *cdn.jsdelivr.net* with *unpkg.com*

> And you can use the uncompressed by instead *slideout.umd.min.js* with *slideout.umd.js* 

## Usage

### Global (recommended)

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
