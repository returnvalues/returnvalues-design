<template>
  <div class="flex-column d-flex">
    <div class="row m-0 py-2 px-3 align-items-center flex-shrink-0">
      <img
        src="~/assets/logo.png"
        class="logo"
      >
      <div class="col">
        <h5 class="m-0">
          Return Values Design
        </h5>
      </div>
    </div>
    <rd-nav
      class="flex-column flex-nowrap"
    >
      <side-nav-item
        v-for="item of navigations"
        :key="item.to"
        :item="item"
      />
    </rd-nav>
  </div>
</template>
<script>
import SideNavItem from './SideNavItem.vue';

export default {
  name: 'SideNav',
  components: {
    SideNavItem
  },
  data() {
    return {
      navigations: [
        { name: 'Getting started', to: '/', icon: 'far fa-newspaper' },
        { name: 'Alert', to: '/alert', icon: 'fas fa-exclamation-circle' },
        { name: 'Badge', to: '/badge', icon: 'fab fa-flickr' },
        { name: 'Breadcrumb', to: '/breadcrumb', icon: 'fas fa-percentage' },
        {
          name: 'Buttons',
          to: '/buttons',
          icon: 'far fa-minus-square',
          child: [
            { name: 'Button', to: '/button', },
            { name: 'Checkbox', to: '/checkbox', },
            { name: 'Radio', to: '/radio', },
          ]
        },
        { name: 'Card', to: '/card', icon: 'far fa-id-card' },
        { name: 'Carousel', to: '/carousel', icon: 'far fa-images' },
        { name: 'Collapse', to: '/collapse', icon: 'far fa-caret-square-down' },
        {
          name: 'Ethereum',
          icon: 'fab fa-ethereum',
          to: '/ethereum',
          child: [
            { name: 'Input Address', to: '/inputaddress' },
            { name: 'Address Filter', to: '/addressfilter' }
          ]
        },
        {
          name: 'Inputs',
          to: '/inputs',
          icon: 'far fa-edit',
          child: [
            { name: 'Dropdown', to: '/dropdown' },
            { name: 'Form', to: '/form' },
            { name: 'Input group', to: '/inputgroup' },
          ]
        },
        { name: 'Jumbotron', to: '/jumbotron', icon: 'fas fa-square-full' },
        { name: 'List', to: '/list', icon: 'fas fa-list' },
        { name: 'Modal', to: '/modal', icon: 'far fa-window-maximize' },
        {
          name: 'Navs',
          to: '/navs',
          icon: 'fas fa-bars',
          child: [
            { name: 'Nav', to: '/nav' },
            { name: 'Navbar', to: '/navbar' },
          ]
        },
        { name: 'Pagination', to: '/pagination', icon: 'fas fa-angle-right' },
        { name: 'Popover', to: '/popover', icon: 'far fa-comment-alt' },
        { name: 'Progress', to: '/progress', icon: 'fas fa-percentage' },
        { name: 'Tooltip', to: '/tooltip', icon: 'fas fa-comment-alt' }
      ]
    };
  },

};
</script>

<style scoped>
  .logo {width:50px;height: 50px;}
  .rd-nav {overflow-y:scroll;}
  @media (min-width: 768px) {
    .rd-nav {overflow: visible;}
  }
</style>
