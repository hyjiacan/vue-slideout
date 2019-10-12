<template>
  <div class="demo">
    <slide-out :visible.sync="v1" :title="text.header" size="600px">
      <div style="padding-top: 20px;">
        <input type="text" style="margin-bottom: 10px;display: block;" value="input"/>
        <textarea name="" id="" cols="30" rows="10" style="margin-bottom: 10px;display: block;">textarea</textarea>
        <div contenteditable="true" style="height: 100px;border:1px solid #CCC;" v-lang>
          This is an editable <code>DIV</code> element with attribute <code>contenteditable="true"</code>
        </div>
      </div>
      <p v-lang>
        Slide will not close if you press <code>Esc</code> key in editable element,
        such as <code>input</code>, <code>textarea</code>,
        <code>div[contenteditable="true"]</code>
      </p>
    </slide-out>
    <div class="demo-block">
      <h3 v-lang>Hot key: Esc</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Press Esc in <code>editable element</code> will not close slide
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'HotkeyDemo',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
