<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <h5>Return Values Design</h5>
    </li>
    <side-nav-item
      v-for="item of navigations"
      :key="item.to"
      :item="item"
    />
  </ul>
</template>

<script>
import SideNavItem from './SideNavItem.vue';

export default {
  name: 'SideNav',
  components: { SideNavItem },
  data() {
    return {
      navigations: [
        { name: 'Main', to: '/', },
        { name: 'Card', to: '/card', },
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
