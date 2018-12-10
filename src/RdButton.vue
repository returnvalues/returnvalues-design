<template>
  <component
    :is="tag"
    class="btn"
    :class="[classes,{active,disabled,'btn-block':block},semanticClass]"
    :active="active"
    :disabled="disabled"
  >
    <slot/>
  </component>
</template>

<script>

import SemanticClass from './SemanticClass';

export default {
  name: 'RdButton',
  mixins: [SemanticClass],
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    active: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    block: {
      type: Boolean,
      default: undefined
    },
    outline: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    id: { type: String, default: undefined },
    name: { type: String, default: undefined },
    autocomplete: { type: String, default: undefined },
  },
  computed: {
    classes() {
      const ret = [this.outline && `outline-${this.outline}`, this.size];
      return ret.map(x => x && `btn-${x}`);
    }
  }
};
</script>
