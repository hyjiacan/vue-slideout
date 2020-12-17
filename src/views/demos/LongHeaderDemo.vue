<template>
  <div class="demo">
    <slide-out v-model="v1" title="And God said, let there be light, and there was light">
      <div v-lang>Long header text turns out <b>ellipsis</b> style.</div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <div class="demo-block">
      <h3 v-lang>Long header text</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Long header</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'LongHeaderDemo',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
