<template>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    :data-target="navbarId&&`#${navbarId}`"
  >
    <span class="navbar-toggler-icon" />
  </button>
</template>

<script>
export default {
  name: 'RdNavbarToggler',
  props: { navbarId: { type: String, default: undefined } }
};
</script>

<style scoped>

</style>
