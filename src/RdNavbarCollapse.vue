<template>
  <component
    :is="tag"
    :id="navbarId"
    class="collapse navbar-collapse"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'RdNavbarCollapse',
  props: { tag: { type: String, default: 'div' }, navbarId: { type: String, default: undefined } }
};
</script>

<style scoped>

</style>
