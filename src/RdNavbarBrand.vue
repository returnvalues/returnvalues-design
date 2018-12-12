<template>
  <component
    :is="tag"
    class="navbar-brand"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'RdNavbarBrand',
  props: { tag: { type: String, default: 'a' } }
};
</script>

<style scoped>

</style>
