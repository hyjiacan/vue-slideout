<template>
  <div id="app">
    <h2>
      SlideOut
      <small>A Slide-Out component for Vue.js 2.0</small>
    </h2>
    <a href="https://github.com/hyjiacan/vue-slideout.git">Github</a>
    <demo />
  </div>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: 'App',
  components: {
    Demo
  }
}
</script>
<style lang="less">
#app {
  width: 800px;
  margin: 0 auto;
}
</style>
