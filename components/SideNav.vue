<template>
  <rd-nav
    class="flex-column"
  >
    <h5>Return Values Design</h5>
    <side-nav-item
      v-for="item of navigations"
      :key="item.to"
      :item="item"
    />
  </rd-nav>
</template>

  <ul class="nav flex-column">
    <li class="nav-item">
      <h5>Return Values Design</h5>
    </li>
    <side-nav-item
      v-for="item of navigations"
      :key="item.to"
      :item="item"
    />
  </ul>

<script>
import SideNavItem from './SideNavItem.vue';

export default {
  name: 'SideNav',
  components: {
    SideNavItem
  },
  props: { navigations: { type: Array, default: undefined } },

};
</script>
