<template>
  <div class="app container-fluid d-flex flex-nowrap">
    <side-nav
      class="sidenav border-right"
      :navigations="navigations"
    />
    <div class="content d-flex flex-grow-1 p-4">
      <nuxt-child class="container-fluid" />
    </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';
import SideNav from '~/components/SideNav.vue';

export default {
  name: 'Index',
  layout: false,
  components: {
    SideNav,
  },
  data() {
    return {
      navigations: [
        { name: 'Main', to: '/', },
        { name: 'Alert', to: '/alert', },
        { name: 'Badge', to: '/badge', },
        { name: 'Breadcrumb', to: '/breadcrumb' },
        {
          name: 'Buttons',
          to: '/buttons',
          child: [
            { name: 'Button', to: '/button', },
            { name: 'Checkbox', to: '/checkbox', },
            { name: 'Radio', to: '/radio', },
          ]
        },
        { name: 'Card', to: '/card', },
        { name: 'Carousel', to: '/carousel' },
        { name: 'Collapse', to: '/collapse' },
        { name: 'Jumbotron', to: '/jumbotron' },
        { name: 'List', to: '/list', },
        { name: 'Modal', to: '/modal' },
        { name: 'Navs', to: '/navs' },
        { name: 'Navbar', to: '/navbar' },
        { name: 'Pagination', to: '/pagination' },
        { name: 'Popover', to: '/popover' },
        { name: 'Progress', to: '/progress' },
        { name: 'Tooltip', to: '/tooltip' },
        {
          name: 'Inputs',
          to: '/inputs',
          child: [
            { name: 'Dropdown', to: '/dropdown' },
            { name: 'Form', to: '/form' },
            { name: 'Input group', to: '/inputgroup' },
          ]
        },
        {
          name: 'Ethereum',
          to: '/ethereum',
          child: [
            { name: 'Input Address', to: '/inputaddress' },
            { name: 'Address Filter', to: '/addressfilter' }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
  .sidenav {
    width: 270px;
    min-width: 270px;
    overflow-y: auto;
    max-height: 100vh;
    z-index: 10;
    flex-wrap: nowrap;
    position: fixed;
    height: 100%;
  }
  .content{margin-left: 270px;}
  .container-fluid {height: 100%}
  .app{ max-width: 1100px;width: 1100px; }
  .app::before{
    content:' ';
    position: fixed;
    width: 100%;
    height: 100%;
    background: #f5f8fa;
    margin-left: 270px;
    z-index: -1;
  }
</style>

<style>
body, #__nuxt, #__layout {
  height: 100%;
}
#__nuxt{ min-height: 100%;}
</style>
