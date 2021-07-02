<template>
  <vuestro-tooltip class="vuestro-confirm" :position="position" click-to-open>
    <template #default>
      <vuestro-button :size="size" no-margin round no-border :variant="variant">
        <vuestro-icon :name="icon"></vuestro-icon>
      </vuestro-button>
    </template>
    <template #content>
      <div class="vuestro-confirm-content">
        {{message}}&nbsp;<vuestro-button pill :variant="variant" @click="onConfirm" value>{{confirmText}}</vuestro-button>
      </div>
    </template>
  </vuestro-tooltip>
</template>

<script>

export default {
  name: 'VuestroConfirm',
  props: {
    size: { type: String, default: 'md'},
    icon: { type: String, default: 'trash'},
    position: { type: String, default: 'left'},
    variant: { type: String, default: 'danger'},
    message: { type: String, default: 'Are you sure?'},
    confirmText: { type: String, default: 'Yes'}
  },
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
  },
};

</script>

<style scoped>

.vuestro-confirm-content {
  display: flex;
  white-space: nowrap;
  align-items: center;
  position: relative;
}

</style>