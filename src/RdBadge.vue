<template>
  <component
    :is="tag"
    class="badge rd-badge"
    :class="[semanticClass, {'badge-pill':pill}]"
  >
    <slot />
  </component>
</template>

<script>

import SemanticClass from './mixins/SemanticClass';

export default {
  name: 'RdBadge',
  mixins: [SemanticClass],
  props: { pill: Boolean, tag: { type: String, default: 'span' } },
};
</script>
