<template>
  <div>
    <div>Enter any text to change the visual size (Press <code>ENTER</code> to input newline):</div>
    <textarea cols="30" rows="4" v-model="inputText"/>
    <pre>{{ inputText }}</pre>
  </div>
</template>

<script>
export default {
  name: 'InputControl',
  data () {
    return {
      inputText: ''
    }
  }
}
</script>

<style scoped>

</style>
