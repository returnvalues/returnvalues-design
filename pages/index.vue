<template>
  <div class="container-fluid">
    <SideNav />
    <NavBar />
    <RdButton>dddd</RdButton>
  </div>
</template>

<script>

import { RdButton } from '../src';
import NavBar from '~/components/NavBar.vue';
import SideNav from '~/components/SideNav.vue';

export default {
  name: 'Index',
  components: {
    RdButton, NavBar, SideNav,
  },
};
</script>
