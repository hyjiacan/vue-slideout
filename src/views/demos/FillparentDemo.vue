<template>
  <div class="demo">
    <slideout v-model="v1" :title="text.header" size="400px" resizable
              v-model:fill-parent="fillparent" target="body" show-fill-button fixed>
      <p>
        <code>size="400px" resizable :fill-parent="fillparent" target="body" fixed</code>
      </p>
      <p v-lang>
        Property <code>fixed</code> can prevent <code>body</code> scroll.
      </p>
      <p style="color: #6278ff;text-decoration: underline;cursor: pointer;" @click="fillparent = !fillparent" v-lang>
        Click to toggle fill parent</p>
    </slideout>
    <slideout v-model="v2" dock="top" :title="text.header" size="600px" resizable fillparent>
      <p>
        <code>size="600px" resizable fillparent</code>
      </p>
      <p v-lang>
        Property <code>fixed</code> can prevent <code>body</code> scroll.
      </p>
    </slideout>
    <div class="demo-block">
      <h3 v-lang>Fill-parent</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Toggle fill parent</button>
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
