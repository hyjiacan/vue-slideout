<template>
  <div class="demo">
    <slideout v-model="v1" append-to="body" dock="top" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>append-to="body" dock="top" allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{ resizeValue }}px</div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v2" append-to="body" dock="right" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>append-to="body" dock="right" allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{ resizeValue }}px</div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v3" append-to="body" dock="bottom" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>append-to="body" dock="bottom" allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{ resizeValue }}px</div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v4" append-to="body" dock="left" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>append-to="body" dock="left" allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{ resizeValue }}px</div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
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
      <blockquote>
        <div v-lang>Because the height of their parent element is less than 200px, resize cannot be demonstrated here
        </div>
        <div v-lang>So these four components get <code>append-to="body"</code></div>
      </blockquote>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'ResizeDemo',
  mixins: [mixins],
  data () {
    return {
      resizeValue: 0
    }
  },
  methods: {
    onResize (e) {
      this.resizeValue = e.size
    },
    showResizeDemo (name) {
      this.resizeValue = 0
      this[`v${name}`] = true
    }
  }
}
</script>

<style scoped>

</style>
