<template>
  <div
    class="alert"
    :class="semanticClass"
  >
    <slot />
  </div>
</template>

<script>

import SemanticClass from './SemanticClass';

export default {
  name: 'RdAlert',
  mixins: [SemanticClass]
};
</script>
