<template>
  <div
    class="modal"
    :class="{fade}"
  >
    <div
      class="modal-dialog"
      :class="sizeClass"
    >
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-script-url,no-param-reassign */

import './bootstrap';
import SizeClass from './mixins/SizeClass';

export default {
  name: 'RdModal',
  mixins: [SizeClass],
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: Boolean,
    backdrop: Boolean,
    fade: { type: Boolean, default: true },
  },
  data() { return { value: this.open }; },
  mounted() {
    window.$(this.$el).modal(this.value ? 'show' : 'hide');
  },
  methods: {
    action(name) {
      this.$nextTick(() => window.$(this.$el).modal(name));
    },
    toggle() {
      this.action('toggle');
    },
    show() {
      this.action('show');
    },
    hide() {
      this.action('hide');
    },
    handleUpdate() {
      this.action('next');
    },
    dispose() {
      this.action('dispose');
    },
  },
  render(h) {
    const { fade, $slots } = this;
    const nodes = $slots.default;
    return h('div', { staticClass: 'modal', class: { fade } }, nodes);
  }
};
</script>
<style>
/*.modal,.modal.fade {position: relative;*/
  /*top: auto;*/
  /*right: auto;*/
  /*bottom: auto;*/
  /*left: auto;*/
  /*z-index: 1;*/
  /*display: block;*/
  /*opacity: 1;*/
/*}*/
/*.modal.fade .modal-dialog {transform:none;}*/
</style>
