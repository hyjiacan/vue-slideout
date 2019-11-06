export default {
  inject: ['ebus'],
  data() {
    return {
      text: {
        header: 'Here is header',
        content: 'Here is content',
        footer: 'Here is footer'
      },
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
      v6: false,
      v7: false,
      v8: false,
      v9: false,
      v10: false,
      v11: false,
      v12: false,
      v13: false,
      v14: false
    }
  },
  methods: {
    emitTip(msg) {
      this.ebus.$emit('tip', msg)
    }
  }
}
