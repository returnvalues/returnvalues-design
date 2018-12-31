<template>
  <div class="example border p-3">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Example'
};
</script>
<style scoped>
  .example{overflow: auto;}
</style>
