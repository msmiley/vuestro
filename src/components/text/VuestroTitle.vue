<template>
  <div class="vuestro-title"
       @click="onClick">
    <span class="vuestro-title-title"
          :class="{ clickable,
                    drag: draggable }">
      <slot></slot>
    </span>
    <vuestro-icon scale="0.7" name="spinner" pulse v-if="spinner"></vuestro-icon>
  </div>
</template>

<script>

export default {
  name: 'VuestroTitle',
  props: {
    spinner: { type: Boolean, default: false },
    clickable: { type: Boolean, default: false },
    draggable: { type: Boolean, default: false },
  },
  methods: {
    onClick(e) {
      if (this.clickable) {
        this.$emit('click', e);
      }
    }
  }
};

</script>

<style>
.vuestro-app {
  --vuestro-title-font-size: 13px;
  --vuestro-title-font-weight: 600;
  --vuestro-title-text-transform: uppercase;
}

.vuestro-app.mobile {
  --vuestro-title-font-size: 28px;
}
</style>

<style scoped>

.vuestro-title {
  font-size: var(--vuestro-title-font-size);
  font-weight: var(--vuestro-title-font-weight);
  display: flex;
  align-items: center;
  text-transform: var(--vuestro-title-text-transform);
  min-width: 1px;
}
.vuestro-title-title {
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
}
.vuestro-title-title.clickable {
  pointer-events: initial;
  cursor: pointer;
}

.vuestro-title-title.drag {
  pointer-events: initial;
  cursor: move;
}

.vuestro-icon {
  margin-left: 5px;
  margin-right: 5px;
}

</style>