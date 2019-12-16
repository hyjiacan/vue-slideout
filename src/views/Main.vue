<template>
  <div id="demo">
    <p class="standout" v-lang>You can press <code>ESC</code> key to close slide.</p>
    <dock-position-demo/>
    <customize-demo/>
    <event-demo/>
    <resize-demo/>
    <long-header-demo/>
    <hotkey-demo/>
    <fullscreen-demo/>
    <fixed-n-offset-demo/>
    <auto-size-demo/>
  </div>
</template>

<script>
import DockPositionDemo from './demos/DockPositionDemo'
import FixedNOffsetDemo from './demos/FixedNOffsetDemo'
import FullscreenDemo from './demos/FullscreenDemo'
import HotkeyDemo from './demos/HotkeyDemo'
import LongHeaderDemo from './demos/LongHeaderDemo'
import ResizeDemo from './demos/ResizeDemo'
import EventDemo from './demos/EventDemo'
import CustomizeDemo from './demos/CustomizeDemo'
import AutoSizeDemo from './demos/AutoSizeDemo'

export default {
  name: 'Demo',
  components: {
    AutoSizeDemo,
    CustomizeDemo,
    EventDemo,
    ResizeDemo,
    LongHeaderDemo,
    HotkeyDemo,
    FullscreenDemo,
    FixedNOffsetDemo,
    DockPositionDemo
  }
}
</script>
<style lang="less">
#customize {
  position: relative;
}

.demo-block {
  margin-bottom: 40px;
}

li {
  list-style: none;

  button {
    padding: 8px 5px;
    min-width: 80px;
    margin: 5px;
    border: 1px solid #fcfdf5;
    background-color: #898d9d;
    color: #f2f4e6;

    &:hover {
      border-color: #98bcf3;
      background-color: #4a7ccf;
    }
  }
}

blockquote {
  color: #888888;
  font-size: 13px;
  background-color: #fafafa;
  padding: 5px 10px;
  border-left: 3px solid #CCCCCC;
  line-height: 2;
}
</style>
