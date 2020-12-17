<template>
  <div class="demo">
    <slideout v-model="v1" :title="text.header" size="480px"
              @opening="onOpening" @opened="onOpened" @closing="onClosing" @closed="onClosed">
      <p>
        <code>@opening="onOpening" @opened="onOpened" @close="onClosing" @closed="onClosed"</code>
      </p>
      <div v-show="status === 0" v-lang>I will close after 3 seconds...</div>
      <div v-show="status === 1" v-lang>I am opened, I will close after 3 seconds while click <code>close</code> button,
        and event <code>closed</code> will be emitted after component actually closed
      </div>
    </slideout>
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
  data () {
    return {
      status: 0
    }
  },
  methods: {
    onOpening (e) {
      e.cancel = !confirm('Open it ?')
      if (e.cancel) {
        // prevent open
        this.emitTip('The open operation is paused')
      }
    },
    onOpened () {
      this.status = 1
    },
    onClosing (e) {
      // prevent close and wait
      e.pause = true
      this.status = 0
      this.emitTip('The close operation is pending...')
      // close after 3 seconds
      setTimeout(() => {
        // assign true to close, do nothing or assign false to cancel close.
        e.resume = true
      }, 3000)
    },
    onClosed () {
      this.emitTip('Aha, I am closed now')
    }
  }
}
</script>

<style scoped>

</style>
