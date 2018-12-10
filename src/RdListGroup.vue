<template>
  <component
    :is="tag"
    class="list-group"
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
  }
};
</script>
