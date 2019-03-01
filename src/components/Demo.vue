<template>
    <div id="demo">
        <slide-out :visible.sync="demo1Visible" :dock="position" :title="text.header">
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo2Visible">
            <div slot="header">{{text.header}}</div>
            <div>Close button would be removed while use slot <b>header</b></div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo3Visible" size="50%" :title="text.header">
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo4Visible" size="200px" :title="text.header">
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo5Visible">
            <div slot="header">{{text.header}}</div>
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo6Visible">
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo7Visible" :title="text.header">
            <div>{{text.content}}</div>
        </slide-out>
        <slide-out :visible.sync="demo8Visible" :close-on-mask-click="false" :title="text.header">
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo9Visible" :title="text.header" disable-animation>
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo10Visible" :title="text.header" mask-color="rgba(89, 150, 105, 0.5)">
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo11Visible" :title="text.header" :show-mask="false">
            <div>{{text.content}}</div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo12Visible" :title="text.header" append-to="#customize">
            <div>
                {{text.content}}
                <p>Element <b>#customize</b> SHOULD NOT be <b>position: static</b></p>
            </div>
            <div slot="footer">{{text.footer}}</div>
        </slide-out>
        <slide-out :visible.sync="demo13Visible" :title="text.header" @open="onOpen" @close="onClose">
            <div>{{text.wait}}</div>
        </slide-out>
        <div class="demo-block">
            <h3>Dock position</h3>
            <ul>
                <li>
                    <button @click="showDemo1('top')">Top</button>
                    <button @click="showDemo1('right')">Right</button>
                    <button @click="showDemo1('bottom')">Bottom</button>
                    <button @click="showDemo1('left')">Left</button>
                </li>
            </ul>
        </div>
        <div class="demo-block" id="customize">
            <h3>Customize</h3>
            <ul>
                <li>
                    <button @click="demo2Visible = true">Header</button>
                    <button @click="demo12Visible = true">Append to specified element <b>#customize</b></button>
                </li>
                <li>
                    <button @click="demo3Visible = true">Size: 50%</button>
                    <button @click="demo4Visible = true">Size: 200px</button>
                </li>
                <li>
                    <button @click="demo5Visible = true">No close button</button>
                    <button @click="demo6Visible = true">No Header</button>
                    <button @click="demo7Visible = true">No Footer</button>
                </li>
                <li>
                    <button @click="demo8Visible = true">Disable close on mask click</button>
                    <button @click="demo9Visible = true">Disable animation</button>
                </li>
                <li>
                    <button @click="demo10Visible = true">
                        <span>Mask color</span>
                        <span style="width: 14px;height: 14px;background: rgba(89, 150, 105, 0.5);display: inline-block;vertical-align: -2px;"></span>
                    </button>
                    <button @click="demo11Visible = true">No Mask</button>
                </li>
            </ul>
        </div>
        <div class="demo-block">
            <h3>Event</h3>
            <ul>
                <li>
                    <button @click="demo13Visible = true">Event after open and before close</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import SlideOut from './SlideOut'

export default {
  name: 'Demo',
  components: {
    SlideOut
  },
  data() {
    return {
      text: {
        header: 'Here is header',
        content: 'Here is content',
        footer: 'Here is footer',
        wait: ''
      },
      position: null,
      demo1Visible: false,
      demo2Visible: false,
      demo3Visible: false,
      demo4Visible: false,
      demo5Visible: false,
      demo6Visible: false,
      demo7Visible: false,
      demo8Visible: false,
      demo9Visible: false,
      demo10Visible: false,
      demo11Visible: false,
      demo12Visible: false,
      demo13Visible: false,
      demo14Visible: false
    }
  },
  methods: {
    showDemo1(position) {
      this.position = position
      this.demo1Visible = true
    },
    onOpen() {
      this.text.wait = 'I am opened'
    },
    onClose(e) {
      // prevent close and wait
      e.wait = true
      this.text.wait = 'I will close after 3 seconds...'
      // close after 3 seconds
      setTimeout(() => {
        // assign true to close, do nothing or assign false to cancel close.
        e.close = true
      }, 3000)
    }
  }
}
</script>
<style lang="less" scoped>
#customize {
    position: relative;
}
.demo-block {
  margin-bottom: 40px;
}
li{
  padding: 10px 0;
}
</style>
