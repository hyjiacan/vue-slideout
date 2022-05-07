<template>
  <div class="demo">
    <slide-out dock="top" size="0" :visible.sync="v1" :title="text.header">
      <ul>
        <li><code>dock="top" size="0"</code></li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{ text.footer }}
      </template>
    </slide-out>
    <slide-out dock="right" :size="0" :visible.sync="v2" :title="text.header">
      <ul>
        <li><code>dock="right" :size="0"</code></li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{ text.footer }}
      </template>
    </slide-out>
    <slide-out dock="bottom" :size="[0]" offset="100px" :visible.sync="v3" :title="text.header">
      <ul>
        <li><code>dock="bottom" :size="[0]" offset="100px"</code></li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{ text.footer }}
      </template>
    </slide-out>
    <slide-out dock="left" :size="[300, 0]" offset="100px" :visible.sync="v4" :title="text.header">
      <ul>
        <li><code>dock="left"</code></li>
        <li><code>:size="[300, 0]"</code></li>
        <li><code>offset="100px"</code></li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{ text.footer }}
      </template>
    </slide-out>
    <slide-out dock="top" :size="0" :visible.sync="v5" :min-size="400" :max-size="500" :title="text.header">
      <ul>
        <li><code>dock="top" :size="0" :visible.sync="v5" :min-size="400" :max-size="500"</code></li>
        <li>
          <span v-lang>Use</span>
          <code>min-size</code>
          <span v-lang>and</span>
          <code>max-size</code>
          <span v-lang>to limit the size, and enable scrolling</span>
        </li>
      </ul>
      <input-control/>
      <template v-slot:footer>
        {{ text.footer }}
      </template>
    </slide-out>
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
