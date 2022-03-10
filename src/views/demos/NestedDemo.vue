<template>
  <div class="demo">
    <slide-out :visible.sync="v1" title="Outer Slide" size="80%" @close="onOuterClose">
      <div>
        <code>:visible.sync="v1" title="Outer Slide" size="50%" @close="onOuterClose"</code>
      </div>
      <div>
        <pre>
          <code style="display: block">
          onOuterClose(e) {
            if (this.v2) {
              // Avoid to close the inner Slide while outer mask clicked
              e.wait = true
              return
            }
            this.v2 = false
          }
          </code>
        </pre>
      </div>
      <div v-lang>Here is the outer Slide.</div>
      <div>
        <button @click="v2 = true" v-lang>Click to open the inner Slide</button>
      </div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
      <slide-out :visible.sync="v2" title="Inner Slide" :style="innerStyle" size="80%">
        <p>
          <code>:visible.sync="v2" title="Inner Slide" style="top: 48px;bottom: 48px; size="80%"</code>
        </p>
        <p>
          <span v-lang>The style</span>
          <code>top: 48px;bottom: 48px</code>
          <span v-lang>is important, you can</span>
          <button @click="removeTheStyle" v-lang v-show="!!innerStyle">remove it</button>
          <button @click="removeTheStyle" v-lang v-show="!innerStyle">add it</button>
          <span v-lang>to see what's difference.</span>
        </p>
        <div v-lang>Here is the inner Slide.</div>
        <template #footer>
          <div>{{ text.footer }}</div>
        </template>
      </slide-out>
    </slide-out>
    <div class="demo-block">
      <h3 v-lang>Nested usage</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Open</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'NestedDemo',
  mixins: [mixins],
  data() {
    return {
      innerStyle: 'top: 48px;bottom: 48px;'
    }
  },
  methods: {
    onOuterClose(e) {
      if (this.v2) {
        e.wait = true
        return
      }
      this.v2 = false
    },
    removeTheStyle() {
      this.innerStyle = this.innerStyle ? '' : 'top: 48px;bottom: 48px;'
    }
  }
}
</script>

<style scoped>

</style>
