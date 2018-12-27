<template>
  <component
    :is="tag"
    class="list-group rd-list-group"
    :class="{'list-group-flush':flush}"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'RdListGroup',
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    flush: {
      type: Boolean,
      default: undefined
    },
  }
};
</script>
