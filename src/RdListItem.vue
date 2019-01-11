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
import SemanticClass from './mixins/SemanticClass';

export default {
  name: 'RdListItem',
  mixins: [SemanticClass],
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    active: Boolean,
    disabled: Boolean
  },
  computed: {
    action() {
      return this.tag === 'a' || this.tag === 'button';
    }
  }
};
</script>
