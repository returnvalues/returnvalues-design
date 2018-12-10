<template>
  <div class="container-fluid d-flex">
    <SideNav class="sidenav " />
    <div class="col content d-flex flex-grow-1">
      <NuxtChild />
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
