<template>
  <component
    :is="tag"
    class="btn"
    :class="[{active,disabled,'btn-block':block,'btn-link':link,close},
             semanticClass,sizeClass,outlineClass]"
    :active="active"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script>

import SemanticClass from './mixins/SemanticClass';
import SizeClass from './mixins/SizeClass';
import OutlineClass from './mixins/OutlineClass';
import RdPopover from './RdPopover.vue';
import RdTooltip from './RdTooltip.vue'

export default {
  name: 'RdButton',
  mixins: [SemanticClass, SizeClass, OutlineClass, RdPopover,RdTooltip],
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    active: Boolean,
    close: Boolean,
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
