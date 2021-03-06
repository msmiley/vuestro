<template>
  <div class="vuestro-pill"
       :class="[ size, { clickable: $listeners.click,
                         closable: $listeners.close,
                         shadow, draggable, geopattern, noMargin }]"
       @click="onClick">
    <div v-if="!$slots.title && !$slots.icon" class="vuestro-pill-title" :class="{ autoCapital }"
         :style="titleStyle">
      {{ titleComputed }}
    </div>
    <div v-if="$slots.title || $slots.icon"
         class="vuestro-pill-title"
         :class="$slots['title-buttons'] ? ['vuestro-pill-title-no-right']:[]"
         :style="titleStyle">
      <div v-if="$slots.icon" class="vuestro-pill-icon-slot">
        <slot name="icon"></slot>
      </div>
      <div v-if="$slots.title" class="vuestro-pill-title-slot">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots['title-buttons']" class="vuestro-pill-button-slot">
        <slot name="title-buttons"></slot>
      </div>
    </div>
    <div v-if="$slots.value" class="vuestro-pill-value">
      <slot name="value"></slot>
    </div>
    <div v-if="$slots['value-buttons']" class="vuestro-pill-button-slot">
      <slot name="value-buttons"></slot>
    </div>
    <div v-if="$listeners.close">
      <vuestro-button no-margin :size="size" round no-border @click.stop="onClose">
        <vuestro-icon name="times"></vuestro-icon>
      </vuestro-button>
    </div>
  </div>
</template>

<script>

/* global _ */
import GeoPattern from 'geopattern/geopattern.js';

export default {
  name: 'VuestroPill',
  props: {
    size: { type: String, default: 'md' },
    color: { type: String, default: null },
    draggable: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    geopattern: { type: null, default: null },
    noMargin: { type: Boolean, default: false },
  },
  data() {
    return {
      autoCapital: false,
    };
  },
  computed: {
    titleStyle() {
      let ret = {};
      if (_.isString(this.geopattern)) {
        let text;
        // use the value of geopattern as the seed if it's a string
        if (this.geopattern.length > 0) {
          text = this.geopattern;
        } else {
          text = this.$slots.title[0].text || '';
        }
        ret['background-image'] = GeoPattern.generate(text.trim()).toDataUrl();
      }
      if (this.color) {
        ret['background-color'] = this.color;
      }
      if (!this.$slots.value) {
        ret['flex-grow'] = 1;
        ret['justify-content'] = 'flex-start';
      }
      return ret;
    },
    titleComputed() {
      this.autoCapital = true;
      if (this.$slots.value && this.$slots.value[0]) {
        let v = this.value || this.$slots.value[0].text;
        if (v && _.isString(v)) {
          return v.trim().slice(0, 1).toUpperCase();
        }
      }
      return '';
    },
  },
  methods: {
    onClose(e) {
      this.$emit('close', e);
    },
    onClick(e) {
      if (this.$listeners.click) { // only if set
        this.$emit('click', e);
      }
    },
  }
};

</script>

<style>

.vuestro-app {
  --vuestro-pill-radius: 999px;
  --vuestro-pill-title-fg: var(--vuestro-text-color-inverse);
  --vuestro-pill-value-fg: var(--vuestro-text-color);
  --vuestro-pill-value-bg: var(--vuestro-widget-light-bg);
}
.vuestro-dark {
  --vuestro-pill-title-fg: var(--vuestro-text-color);
  --vuestro-pill-value-fg: var(--vuestro-text-color);
  --vuestro-pill-value-bg: var(--vuestro-gray-med);
}

</style>

<style scoped>

.vuestro-pill {
  background-color: var(--vuestro-pill-value-bg);
  transition: background-color 0.4s;
  border-radius: var(--vuestro-pill-radius);
  flex: 0 1 auto;
  display: flex;
  min-width: 0;
  margin: var(--vuestro-control-margin-v) var(--vuestro-control-margin-h);
}
.vuestro-pill.noMargin {
  margin: 0;
}
.vuestro-pill.sm {
  line-height: var(--vuestro-control-sm-height);
  font-size: calc(var(--vuestro-control-sm-height)/1.7);
}
.vuestro-pill.md {
  line-height: var(--vuestro-control-md-height);
  font-size: calc(var(--vuestro-control-md-height)/1.8);
}
.vuestro-pill.lg {
  line-height: var(--vuestro-control-lg-height);
  font-size: calc(var(--vuestro-control-lg-height)/1.9);
}
.vuestro-pill.xl {
  line-height: var(--vuestro-control-xl-height);
  font-size: calc(var(--vuestro-control-xl-height)/2);
}

.vuestro-pill.clickable {
  cursor: pointer;
}
.vuestro-pill.clickable:hover {
  filter: brightness(110%);
}
.vuestro-pill.draggable {
  cursor: move;
}
.vuestro-pill.shadow {
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);
}
.vuestro-pill.sm .vuestro-pill-title {
  min-width: var(--vuestro-control-sm-height);
}
.vuestro-pill.md .vuestro-pill-title {
  min-width: var(--vuestro-control-md-height);
}
.vuestro-pill.lg .vuestro-pill-title {
  min-width: var(--vuestro-control-lg-height);
}
.vuestro-pill.xl .vuestro-pill-title {
  min-width: var(--vuestro-control-xl-height);
}
.vuestro-pill-title {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vuestro-primary);
  color: var(--vuestro-pill-title-fg);
  border-radius: var(--vuestro-pill-radius);
}
.vuestro-pill-title-slot {
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.vuestro-pill-title.autoCapital {
  padding: 0;
}
.vuestro-pill-title-no-right {
  padding-right: 0;
}
/* add slight overlap for multiple buttons so they don't take up as much space */
.vuestro-pill-button-slot {
  display: flex;
}
.vuestro-pill-button-slot > .vuestro-button:not(:first-child) {
  margin-left: -0.2em;
}
.vuestro-pill-button-slot {
  --vuestro-control-margin-v: 0;
  --vuestro-control-margin-h: 0;
}

.vuestro-pill-value {
  padding-left: 0.33em;
  padding-right: 0.5em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
	color: var(--vuestro-pill-value-fg);
}
.vuestro-pill.closable .vuestro-pill-value {
  padding-right: 0.33em;
}

.vuestro-pill-icon-slot {
  padding-left: 0.4em;
  margin-right: -0.3em;
}
.vuestro-pill-icon-slot:only-child {
  padding-right: 0.4em;
  margin-right: 0;
}
.vuestro-pill.sm .vuestro-pill-icon-slot {
  width: var(--vuestro-control-sm-height);
}
.vuestro-pill.md .vuestro-pill-icon-slot {
  width: var(--vuestro-control-md-height);
}
.vuestro-pill.lg .vuestro-pill-icon-slot {
  width: var(--vuestro-control-lg-height);
}
.vuestro-pill.xl .vuestro-pill-icon-slot {
  width: var(--vuestro-control-xl-height);
}

.vuestro-pill.geopattern .vuestro-pill-title {
  background-repeat: repeat;
}

</style>