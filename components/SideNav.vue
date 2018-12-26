<template>
  <rd-nav
    class="flex-column"
  >
    <div class="row m-0 py-2 px-3 align-items-center">
      <img
        src="~/assets/logo.png"
        class="logo"
      >
      <div class="col">
        <h5>
          Return Values Design
        </h5>
      </div>
    </div>

    <side-nav-item
      v-for="item of navigations"
      :key="item.to"
      :item="item"
    />
  </rd-nav>
</template>
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

<style scoped>
  .logo {width:40px;height: 40px;}
</style>
