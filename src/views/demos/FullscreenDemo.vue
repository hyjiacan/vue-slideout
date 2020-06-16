<template>
  <div class="demo">
    <slide-out :visible.sync="v1" :title="text.header" size="600px" allow-resize
               :fullscreen.sync="fullscreen" append-to="body" show-fullscreen fixed>
      <p>
        <code>size="600px" allow-resize :fullscreen="fullscreen" append-to="body" fixed</code>
      </p>
      <p v-lang>
        Property <code>fixed</code> can prevent <code>body</code> scroll.
      </p>
      <p style="color: #6278ff;text-decoration: underline;cursor: pointer;" @click="fullscreen = !fullscreen" v-lang>
        Click to toggle fullscreen</p>
    </slide-out>
    <slide-out :visible.sync="v2" dock="top" :title="text.header" size="600px" allow-resize fullscreen>
      <p>
        <code>size="600px" allow-resize fullscreen</code>
      </p>
      <p v-lang>
        Property <code>fixed</code> can prevent <code>body</code> scroll.
      </p>
      <p style="color: #6278ff;text-decoration: underline;cursor: pointer;" @click="fullscreen = !fullscreen" v-lang>
        Click to toggle fullscreen</p>
    </slide-out>
    <div class="demo-block">
      <h3 v-lang>Fullscreen</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Toggle fullscreen</button>
          <button @click="v2 = true" v-lang>Fullscreen as default</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'FullscreenDemo',
  mixins: [mixins],
  data() {
    return {
      fullscreen: false
    }
  }
}
</script>

<style scoped>

</style>
