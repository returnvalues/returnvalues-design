<template>
  <comment :is="tag">
    <slot />
  </comment>
</template>

<script>
export default {
  name: 'RdPopover',
  props: {
    tag: { type: String, default: 'span' },
    popover: { type: Object, default: undefined }
  },
  mounted() {
    if (this.popover) window.$(this.$el).popover(this.popover);
  },
  beforeDestroy() {
    if (this.popover) window.$(this.$el).popover('dispose');
  },
  methods: {
    popoverShow() {
      window.$(this.$el).popover('show');
    },
    popoverHide() {
      window.$(this.$el).popover('hide');
    },
  }
};
</script>
