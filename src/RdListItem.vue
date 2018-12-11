<template>
  <component
    :is="tag"
    class="list-group-item"
    :class="[{active,disabled,'list-group-item-action':action},semanticClass]"
    :active="active"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script>
import SemanticClass from './SemanticClass';

export default {
  name: 'RdListItem',
  mixins: [SemanticClass],
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    active: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    action() {
      return this.tag === 'a' || this.tag === 'button';
    }
  }
};
</script>
