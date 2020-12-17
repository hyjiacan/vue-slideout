<template>
  <div class="demo">
    <slide-out v-model="v1" size="480px">
      <div slot="header">{{text.header}}</div>
      <div v-lang>Close/Fullscreen button would be removed while use <code>slot="header"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v2" size="50%" :title="text.header">
      <div><code> size="50%"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v3" size="200px" :title="text.header">
      <div><code>size="200px"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v15" size="120%" dock="right" :title="text.header">
      <div><code>size="120%" dock="right"</code></div>
      <p>Slideout has limited the max value of <code>size</code> as <code>100%</code>.</p>
      <p>The <code>size</code> specified here is greater than <code>100%</code>, thus it wouldn't work as expected.</p>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v16" size="120%" dock="top" :title="text.header">
      <div><code>size="120%" dock="top"</code></div>
      <p>Slideout has limited the max value of <code>size</code> as <code>100%</code>.</p>
      <p>The <code>size</code> specified here is greater than <code>100%</code>, thus it wouldn't work as expected.</p>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v4" :title="text.header" :show-close="false">
      <div><code>:show-close="false"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v14" :title="text.header" :arrow-button="false">
      <div><code>:arrow-button="false"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v5">
      <div>{{text.content}}</div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v6" :title="text.header">
      <div>{{text.content}}</div>
    </slide-out>
    <slide-out v-model="v7" :close-on-mask-click="false" :title="text.header">
      <div><code>:close-on-mask-click="false"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v8" :title="text.header" disable-animation>
      <div><code>disable-animation</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v9" :title="text.header" mask-color="#FFFFFF">
      <div><code>mask-color="#FFFFFF"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v10" :title="text.header" :show-mask="false">
      <div><code>:show-mask="false"</code></div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v11" size="480px" :title="text.header" append-to="#customize" allow-resize>
      <div>
        <div><code>append-to="#customize" allow-resize</code></div>
        <p v-lang>Element <code>#customize</code> <b>SHOULD NOT</b> be <code>position: static</code></p>
        <p v-lang>Resize is available for this instance.</p>
        <p><span style="color: red;">&lt;-</span><span v-lang>Move the cursor onto this border to have a try</span></p>
      </div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v12" size="480px" :title="text.header" ignore-esc>
      <div>
        <p><code>ignore-esc</code></p>
        <p v-lang>This makes slide ignore <code>Esc</code> key press.</p>
        <p v-lang>So you can not close slide by press <code>Esc</code> key.</p>
        <p v-lang>No matter how many times you press <code>Esc</code> key, slide will always keep opened.</p>
      </div>
      <div slot="footer">{{text.footer}}</div>
    </slide-out>
    <slide-out v-model="v13" size="480px" :title="text.header">
      <template slot="btn">
        <button>Test</button>
      </template>
      <p>
        <code>&lt;template slot="btn"&gt;&lt;button&gt;Test&lt;/button&gt;&lt;/template&gt;</code>
      </p>
    </slide-out>
    <div class="demo-block" id="customize">
      <h3 v-lang>Customize</h3>
      <ul>
        <li>
          <button @click="v1 = true" v-lang>Header</button>
          <button @click="v11 = true" v-lang>Append to specified element <b>#customize</b></button>
        </li>
        <li>
          <button @click="v2 = true" v-lang>Size: 50%</button>
          <button @click="v3 = true" v-lang>Size: 200px</button>
          <button @click="v15 = true" v-lang>Size: 120% (right)</button>
          <button @click="v16 = true" v-lang>Size: 120% (top)</button>
        </li>
        <li>
          <button @click="v4 = true" v-lang>No close button</button>
          <button @click="v14 = true" v-lang>Display close button as cross</button>
          <button @click="v5 = true" v-lang>No Header</button>
          <button @click="v6 = true" v-lang>No Footer</button>
        </li>
        <li>
          <button @click="v7 = true" v-lang>Disable close on mask click</button>
          <button @click="v8 = true" v-lang>Disable animation</button>
        </li>
        <li>
          <button @click="v9 = true">
            <span v-lang>Mask color</span>
            <span
              style="width: 14px;height: 14px;background: #FFFFFF;display: inline-block;vertical-align: -2px;"></span>
          </button>
          <button @click="v10 = true" v-lang>No Mask</button>
        </li>
        <li>
          <button @click="v12 = true" v-lang>Ignore ESC key press</button>
        </li>
        <li>
          <button @click="v13 = true" v-lang>Customize header buttons</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from './mixin'

export default {
  name: 'CustomizeDemo',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
