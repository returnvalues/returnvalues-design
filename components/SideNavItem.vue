<template>
  <rd-nav
    v-if="item.child"
    class="flex-column"
  >
    <span>{{ item.name }}</span>
    <side-nav-item
      v-for="child of item.child"
      :key="child.to"
      class="ml-3"
      :to-stack="item.to"
      :depth="depth+1"
      :item="child"
    />
  </rd-nav>
  <nuxt-link
    v-else
    active-class="on"
    exact
    :to="item.child?'':(toStack+item.to)"
  >
    {{ item.name }}
  </nuxt-link>
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
<style>
  .on{font-weight: bold;}
</style>
