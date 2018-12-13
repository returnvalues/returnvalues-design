<template>
  <component
    :is="tag"
    class="btn"
    :class="[{active,disabled,'btn-block':block,'btn-link':link},
             semanticClass,sizeClass,outlineClass]"
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
    active: Boolean,
    link: Boolean,
    disabled: Boolean,
    block: Boolean,
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
