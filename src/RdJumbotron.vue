<template>
  <div
    class="jumbotron rd-jumbotron"
    :class="{'jumbotron-fluid':fluid}"
  >
    <div
      v-if="fluid"
      class="container"
    >
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'RdJumbotron',
  props: { fluid: Boolean }
};
</script>
