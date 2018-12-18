<template>
  <div class="container-fluid d-flex flex-nowrap">
    <side-nav
      class="sidenav"
      :navigations="navigations"
    />
    <div class="col content d-flex flex-grow-1 border rounded py-3 pl-5">
      <nuxt-child  class="container-fluid"/>
    </div>
  </div>
</template>

<script>

import '~/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from '~/components/SideNav.vue';

export default {
  name: 'Index',
  components: {
    SideNav,
  },
  data() {
    return {
      navigations: [
        { name: 'Main', to: '/', },
        { name: 'Semantic', to: '/semantic', },
        { name: 'Alert', to: '/alert', },
        { name: 'Card', to: '/card', },
        { name: 'List', to: '/list', },
        { name: 'Badge', to: '/badge', },
        { name: 'Breadcrumb', to: '/breadcrumb' },
        { name: 'Carousel', to: '/carousel' },
        { name: 'Collapse', to: '/collapse' },
        { name: 'Jumbotron', to: '/jumbotron' },
        { name: 'Modal', to: '/modal' },
        { name: 'Navbar', to: '/navbar' },
        { name: 'Navs', to: '/navs' },
        { name: 'Pagination', to: '/pagination' },
        { name: 'Progress', to: '/progress' },
        { name: 'Popover', to: '/popover' },
        { name: 'Tooltip', to: '/tooltip' },
        {
          name: 'Inputs',
          to: '/inputs',
          child: [
            { name: 'Input group', to: '/inputgroup' },
            { name: 'Dropdown', to: '/dropdown' },
            { name: 'Form', to: '/form' },
          ]
        },
        {
          name: 'Buttons',
          to: '/buttons',
          child: [
            { name: 'Button', to: '/button', },
            { name: 'Checkbox', to: '/checkbox', },
            { name: 'Radio', to: '/radio', },
          ]
        },
      ]
    };
  }
};
</script>

<style scoped>
  .sidenav {width: 200px;}
  .container-fluid {height: 100%}
  .content {background: #fff; overflow: auto;}
</style>
