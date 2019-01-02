<template>
  <comment :is="tag">
    <slot />
  </comment>
</template>

<script>
export default {
  name: 'RdTooltip',
  props: {
    tag: { type: String, default: 'span' },
    tooltip: { type: null, default: undefined }
  },
  mounted() {
    if (this.$options.name === 'RdTooltip' || this.tooltip === '' || this.tooltip) {
      window.$(this.$el).tooltip(this.tooltip || undefined);
    }
  },
  beforeDestroy() {
    if (this.$options.name === 'RdTooltip' || this.tooltip === '' || this.tooltip) {
      window.$(this.$el).tooltip('dispose');
    }
  }
};
</script>
