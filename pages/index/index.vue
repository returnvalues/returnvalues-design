<template>
  <div>
    index
    <hightlight
      type="html"
      code="<div class=&quot;container-fluid d-flex flex-nowrap&quot;>
  <side-nav
    class=&quot;sidenav&quot;
    :navigations=&quot;navigations&quot;
  />
  <div class=&quot;col content d-flex flex-grow-1 border rounded py-3 pl-5&quot;>
    <nuxt-child />
  </div>
</div>"
    />
  </div>
</template>

<script>
import Hightlight from '~/components/Hightlight.vue';

export default {
  name: 'Index',
  components: { Hightlight },
};
</script>
