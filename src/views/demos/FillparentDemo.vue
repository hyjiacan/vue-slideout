<template>
  <div class="demo">
    <slideout v-model="v1" :title="text.header" size="400px" allow-resize
              v-model:fillparent="fillparent" append-to="body" show-fillparent fixed>
      <p>
        <code>size="400px" allow-resize :fillparent="fillparent" append-to="body" fixed</code>
      </p>
      <p v-lang>
        Property <code>fixed</code> can prevent <code>body</code> scroll.
      </p>
      <p style="color: #6278ff;text-decoration: underline;cursor: pointer;" @click="fillparent = !fillparent" v-lang>
        Click to toggle fillparent</p>
    </slideout>
    <slideout v-model="v2" dock="top" :title="text.header" size="600px" allow-resize fillparent>
      <p>
        <code>size="600px" allow-resize fillparent</code>
      </p>
      <p v-lang>
        Property <code>fixed</code> can prevent <code>body</code> scroll.
      </p>
    </slideout>
    <div class="demo-block">
      <h3 v-lang>Fill-parent</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Toggle fillparent</button>
          <button @click="v2 = true" v-lang>Fill-parent as default</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'FillparentDemo',
  mixins: [mixins],
  data () {
    return {
      fillparent: false
    }
  }
}
</script>

<style scoped>

</style>
