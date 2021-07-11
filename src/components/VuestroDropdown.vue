<template>
  <div class="vuestro-dropdown"
       :class="{ disabled, stretch }"
       v-vuestro-blur="onBlur"
       :style="{ 'z-index': active ? 200:100 }">
    <div class="vuestro-dropdown-inner"
         :class="{ active, noScroll, bottom, stretch, button: !!$slots.button }"
         @mouseleave="onLeave">
      <div v-if="$slots.title" class="vuestro-dropdown-title" @click="onClick">
        &#8203;<slot name="title"></slot>&#8203;
      </div>
      <div class="vuestro-dropdown-button" v-else-if="$slots.button">
        <slot name="button"></slot>
      </div>
      <div ref="dropdown"
           class="vuestro-dropdown-menu"
           :style="{ visibility: active ? 'visible':'hidden', 'max-height': maxHeight }"
           :class="{ left, bottom }"
           @scroll="checkDimensions">
        <div v-if="active"
             class="vuestro-dropdown-menu-content"
             :class="{ noPadding }"
             @click="onContentClick">
          <slot :close="close"></slot>
        </div>
        <div class="vuestro-dropdown-menu-buttons" v-if="$slots.buttons">
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VuestroDropdown',
  props: {
    top: { type: Boolean, default: false },        // force drop-up behavior
    right: { type: Boolean, default: false },      // force right justification
    noPadding: { type: Boolean, default: false },  // no padding on content
    noScroll: { type: Boolean, default: false },   // no scroll on content
    closeOnContentClick: { type: Boolean, default: false }, // automatically close when content is clicked
    closeOnLeave: { type: Boolean, default: false }, // automatically close on mouseleave
    stretch: { type: Boolean, default: false },    // flexbox stretch
    disabled: { type: Boolean, default: false },   // disable dropdown
    fitWithinPanel: { type: Boolean, default: false }, // adjust size by finding parent panel and fitting within it
  },
  data() {
    return {
      holdOpen: false, // for programmatic open
      left: true,      // left justified
      bottom: true,    // default to bottom position
      active: false,   // open/close state
      maxHeight: '100vh', // default to full screen height
    };
  },
  created() {
    // watch for scroll event and resize
    window.addEventListener('scroll', this.checkDimensions);
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkDimensions);
  },
  mounted() {
    // if VuestroButton was used as activator, wire up its events
    this.$nextTick(() => {
      if (this.$slots.button) {
        this.$children[0].$on('click', () => {
          this.onClick();
        });
      }
    });
    this.checkDimensions();
  },
  methods: {
    // the programmatic open method
    open() {
      this.holdOpen = true;
      this.activate();
    },
    openForMs(ms) {
      this.open();
      setTimeout(this.close, ms);
    },
    release() {
      this.holdOpen = false;
    },
    // the programmatic close method
    close() {
      this.holdOpen = false;
      this.deactivate();
    },
    checkDimensions() {
      this.$nextTick(() => {
        this.left = true;
        // set max height based on available vertical space
        let bcr = this.$refs.dropdown.getBoundingClientRect();
        if (!this.noScroll) {
          if (this.fitWithinPanel) {
            // get parents bottom edge and fit within
            let parent = this.$el.closest('.vuestro-panel-contents');
            if (parent) {
              let pbcr = parent.getBoundingClientRect();
              this.maxHeight = `${pbcr.bottom - bcr.top}px`;
            }
          } else {
            // use window
            this.maxHeight = `${window.innerHeight - bcr.top}px`;
          }
        }
        // see if menu would go offscreen so we can flip it horizontally
        if (window.innerWidth - bcr.left < bcr.width*1.5) {
          this.left = false;
        }
        // see if right-justify was specified
        if (this.right) {
          this.left = false;
        }
      });
      if (this.top) {
        this.bottom = false;
      }
    },
    // this is the internal activation method
    activate() {
      this.$emit('enter');
      this.active = true;
      this.checkDimensions();
    },
    deactivate() {
      this.active = false;
      this.$emit('leave');
    },
    onClick() {
      if (this.active) {
        this.deactivate();
      } else {
        this.activate();
      }
    },
    onBlur() {
      if (!this.holdOpen) {
        this.deactivate();
      }
    },
    onLeave() {
      if (this.closeOnLeave) {
        this.deactivate();
      }
    },
    onContentClick() {
      if (this.closeOnContentClick) {
        this.deactivate();
      }
    },
  },
};

</script>

<style>

.vuestro-app {
  --vuestro-dropdown-outline: transparent;
  --vuestro-dropdown-title-bg: var(--vuestro-popup-bg);
  --vuestro-dropdown-title-fg: var(--vuestro-popup-fg);
  --vuestro-dropdown-title-active-fg: var(--vuestro-gray-dark);
  --vuestro-dropdown-content-bg: var(--vuestro-popup-bg);
  --vuestro-dropdown-content-fg: var(--vuestro-popup-fg);
  --vuestro-dropdown-min-width: 160px;
}
.vuestro-app.mobile {
  --vuestro-dropdown-min-width: 40vw;
}
.vuestro-dark {
  --vuestro-dropdown-outline: var(--vuestro-outline);
  --vuestro-dropdown-title-active-fg: var(--vuestro-white);

}

</style>

<style scoped>

.vuestro-dropdown {
  position: relative;
  cursor: default;
  display: flex;
  min-width: 0;
}
.vuestro-dropdown.stretch {
  flex-grow: 1;
  align-self: stretch;
}
.vuestro-dropdown.disabled {
  pointer-events: none;
}
.vuestro-dropdown-inner {
  display: flex;
  height: 100%;
  /* ensure dropdown is always visible, also make sure z-index of parent is set high enough for overlap */
  overflow: visible !important;
  position: relative;
}

.vuestro-dropdown-title {
  border: var(--vuestro-control-border-width) solid transparent;
  border-bottom-left-radius: var(--vuestro-control-border-radius);
  border-bottom-right-radius: var(--vuestro-control-border-radius);
  border-top: none;
  position: relative;
  padding: 2px 6px;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  user-select: none;
}
.vuestro-dropdown-inner.bottom .vuestro-dropdown-title {
  border-top-left-radius: var(--vuestro-control-border-radius);
  border-top-right-radius: var(--vuestro-control-border-radius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top: var(--vuestro-control-border-width) solid transparent;
  border-bottom: none;
}
.vuestro-dropdown-inner.noSpacing .vuestro-dropdown-title {
  padding: 0;
}
.vuestro-dropdown-inner.stretch,
.vuestro-dropdown-inner.stretch .vuestro-dropdown-title {
  flex-grow: 1;
}

.vuestro-dropdown-inner:hover .vuestro-dropdown-title {
  color: var(--vuestro-dropdown-title-active-fg);
}
.vuestro-dropdown-inner.active .vuestro-dropdown-title {
  color: var(--vuestro-dropdown-title-fg);
}
.vuestro-dropdown-inner.active .vuestro-dropdown-title {
  background-color: var(--vuestro-dropdown-title-bg);
  border-color: var(--vuestro-dropdown-outline);
}

.vuestro-dropdown-title >>> .vuestro-icon:not(:only-child) {
  margin-right: 4px;
}
.vuestro-dropdown-button {
  align-self: center;
  position: relative;
  flex-grow: 1;
}
.vuestro-dropdown-button >>> .vuestro-button-inner {
  flex-grow: 1;
}

.vuestro-dropdown-menu {
  background: var(--vuestro-dropdown-content-bg);
  color: var(--vuestro-dropdown-content-fg);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
  position: absolute;
  bottom: calc(100% - 1px);
  right: 0px;
  min-width: var(--vuestro-dropdown-min-width);
  overflow: auto;
  max-height: 90vh;
  border: var(--vuestro-control-border-width) solid var(--vuestro-dropdown-outline);
  border-top-left-radius: var(--vuestro-control-border-radius);
  border-top-right-radius: var(--vuestro-control-border-radius);
  border-bottom-left-radius: var(--vuestro-control-border-radius);
  z-index: -1;
  /* redefine style vars for vuestro components */
  --vuestro-text-field-fg: var(--vuestro-dropdown-content-fg);
  --vuestro-pill-value-fg: var(--vuestro-dropdown-content-fg);
  --vuestro-pill-value-bg: var(--vuestro-gray-med);
}
.vuestro-dropdown-inner.noScroll .vuestro-dropdown-menu {
  overflow: visible;
}
.vuestro-dropdown-inner.stretch .vuestro-dropdown-menu {
  right: 0;
  left: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.vuestro-dropdown-inner.button .vuestro-dropdown-menu {
  border-radius: var(--vuestro-control-border-radius);
}
.vuestro-dropdown-menu.left {
  left: 0px;
  right: initial;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--vuestro-control-border-radius);
}
.vuestro-dropdown-menu.bottom {
  bottom: initial;
  top: calc(100% - var(--vuestro-control-border-width));
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--vuestro-control-border-radius);
  border-bottom-right-radius: var(--vuestro-control-border-radius);
}
.vuestro-dropdown-menu.left.bottom {
  border-top-left-radius: 0;
  border-top-right-radius: var(--vuestro-control-border-radius);
}

.vuestro-dropdown-menu-content {
  padding: 0.4em;
  position: relative;
}
.vuestro-dropdown-menu-content.noPadding {
  padding: 0;
}

.vuestro-dropdown-menu-buttons {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-left: 0.1em;
  margin-right: 0.1em;
}

</style>