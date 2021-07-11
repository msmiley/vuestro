<template>
  <div class="vuestro-panel"
       :class="[ gutter, { scroll, noStretch, noBorder, hasTitlebar }]">
    <!--TOOLBAR-->
    <div v-if="hasTitlebar" class="vuestro-panel-title-toolbar">
      <vuestro-caret v-if="collapsible"
                     :collapsed="isCollapsed"
                     @click="toggleCollapse">
      </vuestro-caret>
      <vuestro-title class="vuestro-panel-title"
                     :spinner="spinner"
                     :clickable="collapsible"
                     :draggable="draggable"
                     @click="toggleCollapse">
        <slot name="title"></slot>
      </vuestro-title>
      <div v-if="$slots.toolbar" class="vuestro-panel-toolbar">
        <slot name="toolbar"></slot>
      </div>
    </div>
    <div class="vuestro-panel-contents-wrapper" :class="[contentPadding, { isCollapsed, scroll, frame, overflowHidden, row }]">
      <template v-if="!deferContent">
        <div ref="contents" v-show="!isCollapsed" class="vuestro-panel-contents" @scroll="updateScroll">
          <slot></slot>
        </div>
      </template>
      <template v-else>
        <div ref="contents" v-if="!isCollapsed" class="vuestro-panel-contents" @scroll="updateScroll">
          <slot></slot>
        </div>
      </template>
      <div v-if="canScroll" class="vuestro-panel-scroll-arrow">
        <vuestro-icon name="arrow-down"></vuestro-icon>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VuestroPanel',
  props: {
    gutter: { type: String, default: 'md' },         // gutter size override, usually inherited
    spinner: { type: Boolean, default: false },      // true if spinner should be shown next to title
    collapsible: { type: Boolean, default: false },  // true if collapsible
    collapsed: { type: Boolean, default: false },    // true if set collapsed mode
    deferContent: { type: Boolean, default: false }, // defer loading/rendering of content until expanded
    contentPadding: { type: String, default: '' },   // content padding size, default is no padding, options are sm,md,lg
    scroll: { type: Boolean, default: false },       // true for scrolling content
    frame: { type: Boolean, default: false },        // true for absolutely positioned content ("frame-mode")
    noBorder: { type: Boolean, default: false },     // true for no border
    noStretch: { type: Boolean, default: false },     // true for disable flexbox-stretch
    overflowHidden: { type: Boolean, default: false }, // true for overflow hidden on content
    draggable: { type: Boolean, default: false },    // true for .drag class and move cursor on title
    row: { type: Boolean, default: false },          // true for flexbox row mode instead of column
  },
  computed: {
    hasTitlebar() {
      return this.$slots.title || this.$slots.toolbar || this.collapsible;
    },
  },
  data() {
    return {
      isCollapsed: this.collapsed,
      canScroll: false,
    };
  },
  watch: {
    collapsed(newVal) {
      this.isCollapsed = newVal;
    },
  },
  updated() {
    this.updateScroll();
  },
  created() {
    window.addEventListener('resize', this.updateScroll);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.canScroll = this.scroll && this.$refs.contents && (this.$refs.contents.scrollHeight - this.$refs.contents.scrollTop > this.$refs.contents.clientHeight);
    },
    toggleCollapse() {
      if (this.collapsible) {
        this.isCollapsed = !this.isCollapsed;
        this.$emit('toggle');
      }
    }
  }
};

</script>

<style>

.vuestro-app {
  --vuestro-panel-bg: #fff;
  --vuestro-panel-fg: inherit;
  --vuestro-panel-toolbar-bg: inherit;
  --vuestro-panel-toolbar-fg: inherit;
  --vuestro-panel-toolbar-border: none;
  --vuestro-panel-border: none;
  --vuestro-panel-box-shadow: 1px 3px 5px 0px rgba(0,0,0,0.1);
  --vuestro-panel-border-radius: var(--vuestro-control-border-radius);
  --vuestro-panel-titlebar-min-height: 1.8em;
}

.vuestro-dark.vuestro-app {
  --vuestro-panel-bg: #2e2f34;
  --vuestro-panel-fg: var(--vuestro-text-color);
  --vuestro-panel-border: var(--vuestro-control-border-width) solid var(--vuestro-outline);
}

</style>

<style scoped>

.vuestro-panel.lg {
  --gutter-size: 30px;
}
.vuestro-panel.md {
  --gutter-size: 16px;
}
.vuestro-panel.sm {
  --gutter-size: 8px;
}
.vuestro-panel.none {
  --gutter-size: 0px;
}

.vuestro-panel {
  background-color: var(--vuestro-panel-bg);
  color: var(--vuestro-panel-fg);
  transition: background-color 0.4s;
  border-radius: var(--vuestro-panel-border-radius);
  box-shadow: var(--vuestro-panel-box-shadow);
  display: flex;
  flex-direction: column;
  position: relative;
  border: var(--vuestro-panel-border);
  min-width: 0;
  flex-grow: 1;
}
.vuestro-panel.noStretch {
  flex-grow: 0;
}
.vuestro-panel:not(:first-child) {
  margin-top: var(--gutter-size);
}
.vuestro-panel.noBorder {
  box-shadow: none;
  border: none;
}

.vuestro-panel .vuestro-tray:not(:last-child) {
  border-bottom: var(--vuestro-control-border-width) solid var(--vuestro-outline);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vuestro-panel-title-toolbar {
  min-height: var(--vuestro-panel-titlebar-min-height);
  display: flex;
  align-items: center;
  border-bottom: var(--vuestro-panel-toolbar-border);
  background-color: var(--vuestro-panel-toolbar-bg);
  border-top-left-radius: var(--vuestro-panel-border-radius);
  border-top-right-radius: var(--vuestro-panel-border-radius);
  padding-left: 0.2em;
  padding-right: 0.2em;
}
.vuestro-panel-title {
  padding: 0.2em 0.4em;
  color: var(--vuestro-panel-toolbar-fg);
}
.vuestro-panel-toolbar {
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: flex-end;
  color: var(--vuestro-panel-toolbar-fg);
}

.vuestro-panel-contents-wrapper {
  flex-grow: 1;
  position: relative;
  display: flex;
}
.vuestro-panel-contents {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 100%;
}
.vuestro-panel-contents-wrapper.row > .vuestro-panel-contents {
  flex-direction: row;
}
.vuestro-panel-contents-wrapper.sm {
  margin: 0.1em;
}
.vuestro-panel-contents-wrapper.md {
  margin: 0.4em;
}
.vuestro-panel-contents-wrapper.lg {
  margin: 0.7em;
}
.vuestro-panel.hasTitlebar .vuestro-panel-contents-wrapper {
  margin-top: 0px;
}
.vuestro-panel-contents-wrapper.isCollapsed {
  margin: 0;
}
.vuestro-panel-contents-wrapper.scroll > .vuestro-panel-contents,
.vuestro-panel-contents-wrapper.frame > .vuestro-panel-contents {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.vuestro-panel-contents-wrapper.scroll > .vuestro-panel-contents {
  overflow: auto;
}
.vuestro-panel-contents-wrapper.overflowHidden > .vuestro-panel-contents {
  overflow: hidden;
}

/* reset top padding when toolbar is present */
.vuestro-panel-contents:not(:only-child) {
  padding-top: 0;
}

.vuestro-panel-scroll-arrow {
  color: var(--vuestro-text-color-muted);
  position: absolute;
  right: 0.4em;
  bottom: 0.4em;
}

</style>