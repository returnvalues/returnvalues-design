<template>
  <rd-nav
    v-if="item.child"
    class="flex-column"
  >
    <span class="nav-link group">
      <i
        v-if="item.icon"
        :class="item.icon"
      />
      {{ item.name }}
    </span>
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
    class="nav-link"
    :to="item.child?'':(toStack+item.to)"
  >
    <i
      v-if="item.icon"
      :class="item.icon"
    />
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
<style scoped>
  .on{font-weight: bold;}
  .nav-link{color:#333;}
  .group{font-weight: bold;}

</style>
