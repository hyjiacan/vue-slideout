<template>
  <div class="demo">
    <slide-out :visible.sync="v1" dock="top" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>dock="top" allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{resizeValue}}px</div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="v2" dock="right" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>dock="right" allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{resizeValue}}px</div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="v3" dock="bottom" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>dock="bottom" allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{resizeValue}}px</div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="v4" dock="left" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>dock="left" allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{resizeValue}}px</div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <div class="demo-block">
      <h3 v-lang>Allow Resize</h3>
      <ul>
        <li>
          <button @click="showResizeDemo(1)" v-lang>Top</button>
          <button @click="showResizeDemo(2)" v-lang>Right</button>
          <button @click="showResizeDemo(3)" v-lang>Bottom</button>
          <button @click="showResizeDemo(4)" v-lang>Left</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'ResizeDemo',
  mixins: [mixins],
  data() {
    return {
      resizeValue: 0
    }
  },
  methods: {
    onResize(e) {
      this.resizeValue = e.size
    },
    showResizeDemo(name) {
      this.resizeValue = 0
      this[`v${name}`] = true
    }
  }
}
</script>

<style scoped>

</style>
