<template>
  <component
    :is="tag"
    class="list-group-item"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'RdListItem',
  props: {
    tag: {
      type: String,
      default: 'li'
    },
  }
};
</script>
