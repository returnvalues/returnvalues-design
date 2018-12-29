<template>
  <div class="app container-fluid d-flex flex-nowrap p-0">
    <side-nav
      class="sidenav border-right py-md-3"
    />
    <div class="content d-flex flex-grow-1 p-md-4">
      <nuxt class="container-fluid" />
    </div>
  </div>
</template>

<script>

import SideNav from '~/components/SideNav.vue';

export default {
  name: 'Default',
  components: {
    SideNav,
  },
};
</script>

<style scoped>

  .container-fluid {height: 100%}

  .sidenav{
    position: fixed;
    background: white;
  }

  /* Small */
  @media (min-width: 576px) {
    .sidenav{
      width: 100%;
      z-index: 10;
    }
  }
  /* Medium */
  @media (min-width: 768px) {
    .sidenav {
      display: block;
      width: 240px;
      min-width: 240px;
      overflow-y: auto;
      max-height: 100vh;
      z-index: 10;
      flex-wrap: nowrap;
      height: 100%;
      background: #fff;
    }
    .content{margin-left: 240px;}
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
   }
  /* Large */
  @media (min-width: 992px) {  }
  /* Extra large  */
  @media (min-width: 1200px) { }
</style>

<style>
body, #__nuxt, #__layout {
  height: 100%;
}
#__nuxt{ min-height: 100%;}
</style>
