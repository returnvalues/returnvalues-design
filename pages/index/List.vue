<template>
  <div>
    List
    <rd-list-group>
      <rd-list-item>Cras justo odio</rd-list-item>
      <rd-list-item>Dapibus ac facilisis in</rd-list-item>
      <rd-list-item>Morbi leo risus</rd-list-item>
      <rd-list-item>Porta ac consectetur ac</rd-list-item>
      <rd-list-item>Vestibulum at eros</rd-list-item>
    </rd-list-group>

    <rd-list-group tag="div">
      <rd-list-item
        tag="button"
        disabled
      >
        Cras justo odio
      </rd-list-item>
      <rd-list-item tag="button" primary>
        Dapibus ac facilisis in
      </rd-list-item>
      <rd-list-item tag="button">
        Morbi leo risus
      </rd-list-item>
      <rd-list-item tag="button">
        Porta ac consectetur ac
      </rd-list-item>
      <rd-list-item tag="button">
        Vestibulum at eros
      </rd-list-item>
    </rd-list-group>
  </div>
</template>

<script>
import { RdListGroup, RdListItem } from '~/src';

export default {
  name: 'List',
  components: { RdListGroup, RdListItem }
};
</script>

<style scoped>

</style>
