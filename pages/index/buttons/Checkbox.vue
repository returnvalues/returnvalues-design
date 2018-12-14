<template>
  <div>
    Checkbox
    <rd-button-group>
      <rd-button-checkbox
        v-model="picked"
        semantic="secondary"
      >
        Checked
      </rd-button-checkbox>
    </rd-button-group>
  </div>
</template>

<script>
import { RdButtonGroup, RdButtonCheckbox } from '~/src';

export default {
  name: 'Checkbox',
  components: { RdButtonGroup, RdButtonCheckbox },
  data() {
    return { picked: true };
  },
};
</script>
