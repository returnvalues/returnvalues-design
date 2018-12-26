<template>
  <component
    :is="tag"
    class="navbar-text"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'RdNavbarText',
  props: { tag: { type: String, default: 'span' } }
};
</script>
