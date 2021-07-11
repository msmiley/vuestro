<template>
  <transition name="vuestro-modal" mode="out-in"
              @after-enter="onAfterOpen"
              @after-leave="onAfterClose">
    <div class="vuestro-modal" v-if="active" @click.exact="onBlur">
      <div class="vuestro-modal-inner">
        <div class="vuestro-modal-titlebar">
          <div class="vuestro-modal-title">
            <slot name="title"></slot>
          </div>
          <div class="vuestro-modal-toolbar-buttons">
            <slot name="toolbar"></slot>
            <template v-if="closeText.length > 0">
              <vuestro-button pill no-border class="close-button" @click="onClose">{{ closeText }}</vuestro-button>
            </template>
            <template v-else>
              <vuestro-button round no-border class="close-button" @click="onClose">
                <vuestro-icon name="times"></vuestro-icon>
              </vuestro-button>
            </template>
          </div>
        </div>
        <div class="vuestro-modal-default-slot">
          <slot></slot>
        </div>
        <div v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
        <div v-if="$slots.buttons" class="vuestro-modal-buttons">
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'VuestroModal',
  props: {
    active: { type: Boolean, required: false },
    closeText: { type: String, default: '' },
    closeOnBlur: { type: Boolean, default: false },
  },
  methods: {
    onClose() {
      this.$emit('update:active', false);
      this.$emit('close');
    },
    onBlur(e) {
      if (this.closeOnBlur && e.target.classList.contains('vuestro-modal')) {
        this.onClose();
      }
      return false;
    },
    onAfterOpen() {
      this.$emit('after-open');
    },
    onAfterClose() {
      this.$emit('after-close');
    }
  },
};

</script>

<style>
/* override these css vars to set style */
.vuestro-app {
  --vuestro-modal-title-bg: var(--vuestro-dark);
  --vuestro-modal-title-fg: var(--vuestro-text-color-light);
  --vuestro-modal-content-bg: var(--vuestro-content-bg);
  --vuestro-modal-footer-bg: var(--vuestro-content-bg);
  --vuestro-modal-active-bg: rgba(0,0,0,0.5);
  --vuestro-modal-header-border: 1px solid rgba(0,0,0,0.2);
  --vuestro-modal-footer-border: 1px solid rgba(0,0,0,0.2);
  --vuestro-modal-width: 60vw;
	--vuestro-modal-border-radius: var(--vuestro-control-border-radius);
}

.vuestro-app.mobile {
  --vuestro-modal-header-footer-border: 1px solid var(--vuestro-outline);
  --vuestro-modal-width: 90vw;
}

.vuestro-dark {
  --vuestro-modal-title-bg: var(--vuestro-darker);
  --vuestro-modal-footer-bg: var(--vuestro-content-bg);
  --vuestro-modal-header-border: 1px solid var(--vuestro-outline);
  --vuestro-modal-footer-border: none;
}

</style>

<style scoped>

.vuestro-modal {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: start;
  justify-content: center;
  z-index: 10000;
  background-color: var(--vuestro-modal-active-bg);
  overflow: auto;
  backdrop-filter: blur(0.4em);
}

.vuestro-modal-inner {
  background-color: var(--vuestro-modal-content-bg);
  transition: background-color 0.4s;
  width: var(--vuestro-modal-width);
  min-height: 15vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: start;
  box-shadow: 0 0 1em var(--vuestro-dark);
	border-radius: var(--vuestro-modal-border-radius);
  z-index: 10001;
}

.vuestro-dark .vuestro-modal-inner {
  border: 1px solid var(--vuestro-outline);
}

.vuestro-modal-titlebar {
  padding: 0 0.1em 0 0.6em;
  background-color: var(--vuestro-modal-title-bg);
  color: var(--vuestro-modal-title-fg);
  flex: none;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
	border-top-left-radius: var(--vuestro-modal-border-radius);
	border-top-right-radius: var(--vuestro-modal-border-radius);
  flex-wrap: wrap;
}
.vuestro-dark .vuestro-modal-titlebar {
  border-bottom: var(--vuestro-modal-header-border);
}

.vuestro-modal-title {
  pointer-events: none;
}

.vuestro-modal-toolbar-buttons {
  display: flex;
  margin-left: auto;
}
.vuestro-modal-default-slot {
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}

.vuestro-modal-buttons {
  border-top: var(--vuestro-modal-footer-border);
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 0 0.2em;
  background-color: var(--vuestro-modal-footer-bg);
	border-bottom-left-radius: var(--vuestro-modal-border-radius);
	border-bottom-right-radius: var(--vuestro-modal-border-radius);
}

@media screen and (max-width: 768px) {
  .vuestro-modal-inner {
    width: 100%;
    height: 100%;
    max-height: 100%;
    margin-top: 0;
  }
}

.vuestro-modal-enter-active, .vuestro-modal-leave-active {
  transition: opacity 0.2s;
}
.vuestro-modal-enter, .vuestro-modal-leave-to {
  opacity: 0;
}

</style>