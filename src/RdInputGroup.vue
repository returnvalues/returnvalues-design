<template>
  <div class="input-group">
    <div class="input-group-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <slot/>
    <div class="input-group-append" v-if="$slots.append">
      <slot name="append"></slot>
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
