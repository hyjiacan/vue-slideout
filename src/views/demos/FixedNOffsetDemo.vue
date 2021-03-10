<template>
  <div class="demo">
    <slideout v-model="v1" :size="['480px', '200px']" offset="100px" dock="top"
              :title="text.header" show-fullscreen>
      <code>:size="['480px', '200px']" offset="100px" dock="top" show-fullscreen</code>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v2" :size="['480px', '200px']" offset="30%" dock="right"
              :title="text.header">
      <code>:size="['480px', '200px']" offset="30%" dock="right"</code>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v3" :size="['480px', '200px']" offset="30%" dock="bottom"
              :title="text.header">
      <code>:size="['480px', '200px']" offset="30%" dock="bottom"</code>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v4" :size="['480px', '200px']" offset="100px" dock="left" :title="text.header">
      <code>:size="['480px', '200px']" offset="100px" dock="left"</code>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <div class="demo-block">
      <h3 v-lang>Fixed size AND Offset</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Top</button>
          <button @click="v2 = true" v-lang>Right</button>
          <button @click="v3 = true" v-lang>Bottom</button>
          <button @click="v4 = true" v-lang>Left</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'FixedNOffsetDemo',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
