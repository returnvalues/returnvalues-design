<template>
  <div class="app container-fluid d-flex flex-nowrap">
    <side-nav
      class="sidenav border-right py-3"
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
        { name: 'Main', to: '/', icon: 'far fa-newspaper' },
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
        { name: 'Tooltip', to: '/tooltip', icon: 'fas fa-comment-alt' },
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
        {
          name: 'Ethereum',
          icon: 'fab fa-ethereum',
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
    width: 240px;
    min-width: 240px;
    overflow-y: auto;
    max-height: 100vh;
    z-index: 10;
    flex-wrap: nowrap;
    position: fixed;
    height: 100%;
  }
  .content{margin-left: 240px;}
  .container-fluid {height: 100%}
  .app{ max-width: 1100px;width: 1100px; }
  .app::before{
    content:' ';
    position: fixed;
    width: 100%;
    height: 100%;
    background: #f5f8fa;
    margin-left: 240px;
    z-index: -1;
  }
</style>

<style>
body, #__nuxt, #__layout {
  height: 100%;
}
#__nuxt{ min-height: 100%;}
</style>
