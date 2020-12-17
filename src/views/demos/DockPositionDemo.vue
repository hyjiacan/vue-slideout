<template>
  <div class="demo">
    <slideout v-model="v1" dock="top" :title="text.header">
      <code>dock="top"</code>
      <div slot="footer">{{text.footer}}</div>
    </slideout>
    <slideout v-model="v2" dock="right" :title="text.header">
      <code>dock="right"</code>
      <div slot="footer">{{text.footer}}</div>
    </slideout>
    <slideout v-model="v3" dock="bottom" :title="text.header">
      <code>dock="bottom"</code>
      <div slot="footer">{{text.footer}}</div>
    </slideout>
    <slideout v-model="v4" dock="left" :title="text.header">
      <code>dock="left"</code>
      <div slot="footer">{{text.footer}}</div>
    </slideout>
    <div class="demo-block">
      <h3 v-lang>Dock position</h3>
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
  name: 'DockPositionDemo',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
