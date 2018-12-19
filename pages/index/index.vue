<template>
  <div>
    index
    <highlight
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
import Highlight from '~/components/Highlight.vue';

export default {
  name: 'Index',
  components: { Highlight },
};
</script>
