<template>
  <component
    :is="tag"
    class="btn"
    :class="[classes,{active,disabled,'btn-block':block},semanticClass,sizeClass,outlineClass]"
    :active="active"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script>

import SemanticClass from './SemanticClass';
import SizeClass from './SizeClass';
import OutlineClass from './OutlineClass';

export default {
  name: 'RdButton',
  mixins: [SemanticClass, SizeClass, OutlineClass],
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
    id: { type: String, default: undefined },
    name: { type: String, default: undefined },
    autocomplete: { type: String, default: undefined },
  }
};
</script>
