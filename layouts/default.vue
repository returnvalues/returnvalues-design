<template>
  <div class="app container-fluid d-flex flex-nowrap">
    <side-nav
      class="sidenav border-right py-3"
    />
    <div class="content d-flex flex-grow-1 p-4">
      <nuxt class="container-fluid" />
    </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';
import SideNav from '~/components/SideNav.vue';

export default {
  name: 'Default',
  components: {
    SideNav,
  },
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
    background: #fff;
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
