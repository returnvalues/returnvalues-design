<template>
  <rd-nav
    v-if="item.child"
    class="flex-column"
  >
    <a
      class="nav-link group"
      href="javascript:"
      @click="open=!open"
    >
      <i
        v-if="item.icon"
        :class="item.icon"
      />
      {{ item.name }}
    </a>
    <rd-collapse :show="open">
      <rd-nav class="flex-column">
        <side-nav-item
          v-for="child of item.child"
          :key="child.to"
          class="ml-3"
          :to-stack="toStack+item.to"
          :depth="depth+1"
          :item="child"
        />
      </rd-nav>
    </rd-collapse>
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
  data() { return { open: false }; }
};
</script>
<style scoped>
  .on{font-weight: bold;}
  .nav-link{color:#333;white-space: nowrap;}
  .group{font-weight: bold; color:#3562ab;}
</style>
