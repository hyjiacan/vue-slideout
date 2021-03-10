<template>
  <div class="demo" id="customize">
    <slideout v-model="v1" size="480px">
      <template #header>
        <div>{{ text.header }}</div>
      </template>
      <div v-lang>Close/Fullscreen button would be removed while use <code>slot="header"</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v2" size="50%" :title="text.header">
      <div><code> size="50%"</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v3" size="200px" :title="text.header">
      <div><code>size="200px"</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v15" size="120%" dock="right" :title="text.header">
      <div><code>size="120%" dock="right"</code></div>
      <p v-lang>Component has limited the max value of <code>size</code> as <code>100%</code>.</p>
      <p v-lang>The <code>size="120%"</code> specified here is greater than <code>100%</code>, thus it wouldn't work as
        expected.</p>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v16" size="120%" dock="top" :title="text.header">
      <div><code>size="120%" dock="top"</code></div>
      <p v-lang>Component has limited the max value of <code>size</code> as <code>100%</code>.</p>
      <p v-lang>The <code>size="120%"</code> specified here is greater than <code>100%</code>, thus it wouldn't work as
        expected.</p>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v4" :title="text.header" :show-close="false">
      <div><code>:show-close="false"</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v14" :title="text.header" :arrow-button="false">
      <div><code>:arrow-button="false"</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v5">
      <div>{{ text.content }}</div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v6" :title="text.header">
      <div>{{ text.content }}</div>
    </slideout>
    <slideout v-model="v7" :close-on-mask-click="false" :title="text.header">
      <div><code>:close-on-mask-click="false"</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v8" :title="text.header" disable-animation>
      <div><code>disable-animation</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v9" :title="text.header" mask-color="#00ff0055">
      <div><code>mask-color="#00ff0055"</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v10" :title="text.header" :show-mask="false">
      <div><code>:show-mask="false"</code></div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v11" size="480px" :title="text.header" append-to="#customize" allow-resize>
      <div>
        <div><code>append-to="#customize" allow-resize</code></div>
        <p v-lang>Element <code>#customize</code> <b>SHOULD NOT</b> be <code>position: static</code></p>
        <p v-lang>Resize is available for this instance.</p>
        <p><span style="color: red;">&lt;-</span><span v-lang>Move the cursor onto this border to have a try</span></p>
      </div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v12" size="480px" :title="text.header" ignore-esc>
      <div>
        <p><code>ignore-esc</code></p>
        <p v-lang>This makes component ignore <code>Esc</code> key press.</p>
        <p v-lang>So you can not close component by press <code>Esc</code> key.</p>
        <p v-lang>No matter how many times you press <code>Esc</code> key, component will always keep opened.</p>
      </div>
      <template #footer>
        <div>{{ text.footer }}</div>
      </template>
    </slideout>
    <slideout v-model="v13" size="480px" :title="text.header">
      <template #btn>
        <button>Test</button>
      </template>
      <div>
        <code>&lt;template slot="btn"&gt;</code>
      </div>
      <div>
        <code>&lt;button&gt;Test&lt;/button&gt;</code>
      </div>
      <div>
        <code>&lt;/template&gt;</code>
      </div>
    </slideout>
    <div class="demo-block">
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
              style="width: 14px;height: 14px;background: #00ff0055;display: inline-block;vertical-align: -2px;"></span>
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
