<template>
  <div class="demo">
    <slide-out :visible.sync="v1" :title="text.header" @before-open="onBeforeOpen" @open="onOpen" @close="onClose"
               @closed="onClosed">
      <p>
        <code>@before-open="onBeforeOpen" @open="onOpen" @close="onClose" @closed="onClosed"</code>
      </p>
      <div v-show="status === 0" v-lang>I will close after 3 seconds...</div>
      <div v-show="status === 1" v-lang>I am opened, I will close after 3 seconds while click <code>close</code> button,
        and event <code>closed</code> will be emitted after slide really closed
      </div>
    </slide-out>
    <div class="demo-block">
      <h3 v-lang>Event</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>All of the events</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'EventDemo',
  mixins: [mixins],
  data() {
    return {
      status: 0
    }
  },
  methods: {
    onBeforeOpen(e) {
      e.cancel = !confirm('Open it ?')
      if (e.cancel) {
        // prevent open
        this.emitTip('The open operation is canceled')
      }
    },
    onOpen() {
      this.status = 1
    },
    onClose(e) {
      // prevent close and wait
      e.wait = true
      this.status = 0
      this.emitTip('The close operation is pending...')
      // close after 3 seconds
      setTimeout(() => {
        // assign true to close, do nothing or assign false to cancel close.
        e.close = true
      }, 3000)
    },
    onClosed() {
      this.emitTip('Aha, I am closed now')
    }
  }
}
</script>

<style scoped>

</style>
