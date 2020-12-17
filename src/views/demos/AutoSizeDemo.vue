<template>
  <div class="demo">
    <slideout dock="top" size="0" v-model="v1" :title="text.header">
      <ul>
        <li><code>dock="top" size="0"</code></li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{text.footer}}
      </template>
    </slideout>
    <slideout dock="right" :size="0" v-model="v2" :title="text.header">
      <ul>
        <li><code>dock="right" :size="0"</code></li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{text.footer}}
      </template>
    </slideout>
    <slideout dock="bottom" :size="[0]" offset="100px" v-model="v3" :title="text.header">
      <ul>
        <li><code>dock="bottom" :size="[0]" offset="100px"</code></li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{text.footer}}
      </template>
    </slideout>
    <slideout dock="left" :size="[300, 0]" offset="100px" v-model="v4" :title="text.header">
      <ul>
        <li><code>dock="left"</code></li>
        <li><code>:size="[300, 0]"</code></li>
        <li><code>offset="100px"</code></li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{text.footer}}
      </template>
    </slideout>
    <slideout dock="top" :size="0" v-model="v5" :min-size="400" :max-size="500" :title="text.header">
      <ul>
        <li><code>dock="top" :size="0" v-model="v5" :min-size="400" :max-size="500"</code></li>
        <li>Use `min-size` and `max-size` to limit the size, and enable scrolling</li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{text.footer}}
      </template>
    </slideout>
    <div class="demo-block">
      <h3 v-lang>Auto size (wrap content)</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Top</button>
          <button @click="v2 = true" v-lang>Right</button>
          <button @click="v3 = true" v-lang>Bottom</button>
          <button @click="v4 = true" v-lang>Left</button>
        </li>
        <li>
          <button @click="v5 = true" v-lang>Scrolling</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
import InputControl from './InputControl'

export default {
  name: 'AutoSizeDemo',
  components: {InputControl},
  mixins: [mixin]
}
</script>

<style scoped>

</style>
