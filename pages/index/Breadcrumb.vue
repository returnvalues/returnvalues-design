<template>
  <div>
    Breadcrumb
    <rd-breadcrumb>
      Home
    </rd-breadcrumb>

    <rd-breadcrumb>
      <a href="javascript:">
        Home
      </a>
      Library
    </rd-breadcrumb>

    <rd-breadcrumb>
      <a href="javascript:">
        Home
      </a>
      <a href="javascript:">
        Library
      </a>
      Data
    </rd-breadcrumb>
  </div>
</template>

<script>
import { RdBreadcrumb } from '~/src';

export default {
  name: 'Breadcrumb',
  components: { RdBreadcrumb }
};
</script>
