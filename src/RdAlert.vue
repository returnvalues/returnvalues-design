<template>
  <div
    class="alert rd-alert"
    :class="semanticClass"
  >
    <slot />
  </div>
</template>

<script>

import SemanticClass from './mixins/SemanticClass';

export default {
  name: 'RdAlert',
  mixins: [SemanticClass]
};
</script>
