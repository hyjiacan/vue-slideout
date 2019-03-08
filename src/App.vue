<template>
  <div id="app">
    <h1>
      SlideOut
      <small>A Slide-Out component for Vue.js 2.0</small>
    </h1>
    <h2>Install</h2>
      <code>npm install @hyjiacan/vue-slideout</code>
      <p>or</p>
      <code>yarn add @hyjiacan/vue-slideout</code>
      <p>For the latest code, you can:</p>
      <code>git clone https://github.com/hyjiacan/vue-slideout.git</code>
      <p>or <a href="https://github.com/hyjiacan/vue-slideout/archive/master.zip">download archive</a></p>
    <h2>Source</h2>
    <ul>
      <li><a href="https://github.com/hyjiacan/vue-slideout.git">Github</a></li>
      <li><a href="https://gitee.com/hyjiacan/vue-slideout.git">Gitee</a></li>
      <li><a href="https://github.com/hyjiacan/vue-slideout/blob/master/src/components/Demo.vue" target="_blank">Demo Source</a></li>
    </ul>
    <h2>Samples</h2>
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
h1 small {
  font-size: 16px;
  color: #666;
  font-weight: normal;
}
h1 {
  padding: 10px 0;
  border-bottom: solid 3px #AAA;
}
h2 {
  padding: 6px 0;
  border-bottom: solid 2px #CCC;
}
h3 {
  padding: 3px 0;
  border-bottom: solid 1px #EEE;
}
li{
  padding: 10px 0;
}
code {
  padding: 8px 15px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 14px;
  background-color: rgb(228, 227, 224);
  color: rgb(211, 121, 4);
  border-radius: 3px;
  line-height: 18px;
}
</style>
