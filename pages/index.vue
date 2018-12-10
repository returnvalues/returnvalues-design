<template>
  <div class="container-fluid d-flex flex-nowrap">
    <side-nav class="sidenav" />
    <div class="col content d-flex flex-grow-1 border rounded">
      <nuxt-child />
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
};
</script>

<style scoped>
  .sidenav {width: 200px;}
  .container-fluid {height: 100%}
  .content {background: #fff;}
</style>
