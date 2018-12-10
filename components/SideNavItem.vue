<template>
  <li class="nav-item">
    <nuxt-link :to="item.child?'':(toStack+item.to)">
      {{ item.name }}
    </nuxt-link>
    <ul
      v-if="item.child"
      class="nav flex-column"
    >
      <side-nav-item
        v-for="child of item.child"
        :key="child.to"
        :to-stack="item.to"
        :depth="depth+1"
        :item="child"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'SideNavItem',
  props: {
    item: { type: Object, default: null },
    depth: { type: Number, default: 1 },
    toStack: { type: String, default: '' }
  },
};
</script>

<style scoped>

</style>
