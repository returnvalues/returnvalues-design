<template>
  <div
    class="modal rd-modal"
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
    backdrop: { type: null, default: true },
    fade: { type: Boolean, default: true },
  },
  data() { return { value: this.open }; },
  watch: {
    open(v) {
      if (v === this.value) return;
      window.$(this.$el).modal(v ? 'show' : 'hide');
      this.value = v;
    },
  },
  mounted() {
    const { backdrop, value: show } = this;
    window.$(this.$el).modal({ backdrop, show }).on('hide.bs.modal', () => {
      this.value = false;
      if (this.open === true) this.$emit('change', false);
    });
  },
  methods: {
    action(name) {
      this.$nextTick(() => window.$(this.$el).modal(name));
    },
    toggle() {
      if (this.value) this.hide();
      else this.show();
    },
    show() {
      this.action('show');
      this.value = true;
      this.$emit('change', this.value);
    },
    hide() {
      this.action('hide');
      this.value = false;
      this.$emit('change', this.value);
    },
    handleUpdate() {
      this.action('handleUpdate');
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
