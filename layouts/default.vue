<template>
  <div class="app container-fluid d-flex flex-nowrap p-0">
    <side-nav
      class="sidenav py-md-3"
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
    flex-wrap: nowrap;
    width: 100%;
    z-index: 10;
    max-height: 100vh;
    min-width: 100vw;
    border-bottom: 1px solid #dee2e6
  }
  .app{background: #f5f8fa;}
  .content{
    max-width: 100vw;
    margin-top: 4rem;
  }

  /* Small */
  @media (min-width: 576px) {
  }
  /* Medium */
  @media (min-width: 768px) {
    .sidenav {
      display: block;
      width: 240px;
      height: 100%;
      min-width: 240px;
      overflow-y:scroll;
      border-right: 1px solid #dee2e6;
      border-bottom: none;
    }
    .content{
      margin-left: 240px;
      background: none;
      margin-top: 0rem;
    }
    .app{ max-width: 1100px;width: 1100px;}
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
  height: 100vh;
}
#__nuxt{ min-height: 100%;}
</style>
