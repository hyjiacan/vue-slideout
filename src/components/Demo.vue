<template>
  <div id="demo">
    <p class="standout" v-lang>You can press <code>ESC</code> key to close slide.</p>
    <slide-out :visible.sync="demo1Visible" :dock="position" :title="text.header">
      <code>:dock="{{position}}"</code>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo2Visible">
      <div slot="header">{{text.header}}</div>
      <div v-lang>Close button would be removed while use <code>slot="header"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo3Visible" size="50%" :title="text.header">
      <div><code> size="50%"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo4Visible" size="200px" :title="text.header">
      <div><code>size="200px"</code></div>
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
      <div><code>:close-on-mask-click="false"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo9Visible" :title="text.header" disable-animation>
      <div><code>disable-animation</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo10Visible" :title="text.header" mask-color="rgba(89, 150, 105, 0.5)">
      <div><code>mask-color="rgba(89, 150, 105, 0.5)"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo11Visible" :title="text.header" :show-mask="false">
      <div><code>:show-mask="false"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo12Visible" :title="text.header" append-to="#customize" lock-scroll allow-resize>
      <div>
        <div><code>append-to="#customize" lock-scroll allow-resize</code></div>
        <p v-lang>Element <code>#customize</code> <b>SHOULD NOT</b> be <code>position: static</code></p>
        <p v-lang>Resize is available for this instance.</p>
        <p v-lang><code>body</code> scroll is locked now, close slide to release it.</p>
        <p><span style="color: red;">&lt;-</span><span v-lang>Move the cursor onto this border to have a try</span></p>
      </div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo13Visible" :title="text.header" @open="onOpen" @close="onClose">
      <p>
        <code>@open="onOpen" @close="onClose"</code>
      </p>
      <div v-show="status === 0" v-lang>I will close after 3 seconds...</div>
      <div v-show="status === 1" v-lang>I am opened</div>
    </slide-out>
    <slide-out :visible.sync="demo14Visible" :dock="position" :title="text.header" allow-resize @resize="onResize">
      <div>
        <p><code>allow-resize @resize="onResize"</code></p>
        <p><code>allow-resize</code><span v-lang>makes it resizable</span></p>
        <p><code>@resize="onResize"</code> <span
          v-lang>makes function <code>onResize</code> to accept <code>resize</code> event</span></p>
      </div>
      <div>Resize value: {{resizeValue}}px</div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo15Visible" title="And God said, let there be light, and there was light">
      <div v-lang>Long header text turns out <b>ellipse</b> style.</div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo16Visible" :title="text.header" ignore-esc>
      <div>
        <p><code>ignore-esc</code></p>
        <p v-lang>This makes slide ignore <code>Esc</code> key press.</p>
        <p v-lang>So you can not close slide by press <code>Esc</code> key.</p>
        <p v-lang>No matter how many times you press <code>Esc</code> key, slide will always keep opened.</p>
      </div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out :visible.sync="demo17Visible" :title="text.header" size="600px">
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
      <h3 v-lang>Dock position</h3>
      <ul>
        <li>
          <button @click="showDemo1('top')" v-lang>Top</button>
          <button @click="showDemo1('right')" v-lang>Right</button>
          <button @click="showDemo1('bottom')" v-lang>Bottom</button>
          <button @click="showDemo1('left')" v-lang>Left</button>
        </li>
      </ul>
    </div>
    <div class="demo-block" id="customize">
      <h3 v-lang>Customize</h3>
      <ul>
        <li>
          <button @click="demo2Visible = true" v-lang>Header</button>
          <button @click="demo12Visible = true" v-lang>Append to specified element <b>#customize</b></button>
        </li>
        <li>
          <button @click="demo3Visible = true" v-lang>Size: 50%</button>
          <button @click="demo4Visible = true" v-lang>Size: 200px</button>
        </li>
        <li>
          <button @click="demo5Visible = true" v-lang>No close button</button>
          <button @click="demo6Visible = true" v-lang>No Header</button>
          <button @click="demo7Visible = true" v-lang>No Footer</button>
        </li>
        <li>
          <button @click="demo8Visible = true" v-lang>Disable close on mask click</button>
          <button @click="demo9Visible = true" v-lang>Disable animation</button>
        </li>
        <li>
          <button @click="demo10Visible = true">
            <span v-lang>Mask color</span>
            <span
              style="width: 14px;height: 14px;background: rgba(89, 150, 105, 0.5);display: inline-block;vertical-align: -2px;"></span>
          </button>
          <button @click="demo11Visible = true" v-lang>No Mask</button>
        </li>
        <li>
          <button @click="demo16Visible = true" v-lang>Ignore ESC key press</button>
        </li>
      </ul>
    </div>
    <div class="demo-block">
      <h3 v-lang>Event</h3>
      <ul>
        <li>
          <button @click="demo13Visible = true" v-lang>Event after open and before close</button>
        </li>
      </ul>
    </div>
    <div class="demo-block">
      <h3 v-lang>Allow Resize</h3>
      <ul>
        <li>
          <button @click="showResizeDemo('top')" v-lang>Top</button>
          <button @click="showResizeDemo('right')" v-lang>Right</button>
          <button @click="showResizeDemo('bottom')" v-lang>Bottom</button>
          <button @click="showResizeDemo('left')" v-lang>Left</button>
        </li>
      </ul>
    </div>
    <div class="demo-block">
      <h3 v-lang>Long header text</h3>
      <ul>
        <li>
          <button @click="demo15Visible = true" v-lang>Long header</button>
        </li>
      </ul>
    </div>
    <div class="demo-block">
      <h3 v-lang>Hot key: Esc</h3>
      <ul>
        <li>
          <button @click="demo17Visible = true" v-lang>Press Esc in <code>editable element</code> will not close slide</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Demo',
  data() {
    return {
      text: {
        header: 'Here is header',
        content: 'Here is content',
        footer: 'Here is footer'
      },
      status: 0,
      resizeValue: 0,
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
      demo14Visible: false,
      demo15Visible: false,
      demo16Visible: false,
      demo17Visible: false
    }
  },
  methods: {
    showDemo1(position) {
      this.position = position
      this.demo1Visible = true
    },
    showResizeDemo(position) {
      this.resizeValue = 0
      this.position = position
      this.demo14Visible = true
    },
    onOpen() {
      this.status = 1
    },
    onClose(e) {
      // prevent close and wait
      e.wait = true
      this.status = 0
      // close after 3 seconds
      setTimeout(() => {
        // assign true to close, do nothing or assign false to cancel close.
        e.close = true
      }, 3000)
    },
    onResize(e) {
      this.resizeValue = e.size
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

button {
  padding: 5px;
  min-width: 80px;
  margin: 5px;
}
</style>
