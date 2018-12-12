<template>
  <div>
    Alert
    <rd-alert primary>
      A simple primary alert—check it out!
    </rd-alert>
    <rd-alert secondary>
      A simple secondary alert—check it out!
    </rd-alert>
    <rd-alert success>
      A simple success alert—check it out!
    </rd-alert>
    <rd-alert danger>
      A simple danger alert—check it out!
    </rd-alert>
    <rd-alert warning>
      A simple warning alert—check it out!
    </rd-alert>
    <rd-alert info>
      A simple info alert—check it out!
    </rd-alert>
    <rd-alert light>
      A simple light alert—check it out!
    </rd-alert>
    <rd-alert dark>
      A simple dark alert—check it out!
    </rd-alert>
  </div>
</template>

<script>
import { RdAlert } from '~/src';

export default {
  name: 'Alert',
  components: { RdAlert },
};
</script>
