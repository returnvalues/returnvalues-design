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
import RdTooltip from './RdTooltip.vue';

export default {
  name: 'RdButton',
  mixins: [SemanticClass, SizeClass, OutlineClass, RdPopover, RdTooltip],
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
    id: { type: String, default: undefined },
    name: { type: String, default: undefined },
    autocomplete: { type: String, default: undefined },
  }
};
</script>
<style scoped>
  .input-group>.input-group-prepend .btn{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group>.input-group-append .btn{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
