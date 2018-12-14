<template>
  <div>
    radio
    <rd-button-group>
      <rd-button-radio
        id="option1"
        v-model="picked"
        semantic="secondary"
        name="options"
        autocomplete="off"
        value="one"
      >
        Active
      </rd-button-radio>
      <rd-button-radio
        id="option2"
        v-model="picked"
        semantic="secondary"
        name="options"
        autocomplete="off"
        value="two"
      >
        Radio
      </rd-button-radio>
      <rd-button-radio
        id="option3"
        v-model="picked"
        semantic="secondary"
        name="options"
        autocomplete="off"
        value="three"
      >
        Radio
      </rd-button-radio>
    </rd-button-group>
  </div>
</template>

<script>
import { RdButtonGroup, RdButtonRadio } from '~/src';

export default {
  name: 'Radio',
  components: { RdButtonGroup, RdButtonRadio },
  data() {
    return { picked: 'one' };
  },
};
</script>
