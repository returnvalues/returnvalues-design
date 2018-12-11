<template>
  <div class="input-group">
    <div
      v-if="$slots.prepend"
      class="input-group-prepend"
    >
      <slot name="prepend" />
    </div>
    <slot />
    <div
      v-if="$slots.append"
      class="input-group-append"
    >
      <slot name="append" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RdButtonGroup',
};
</script>

<style scoped>

</style>
