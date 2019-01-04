<template>
  <canvas
    v-if="valid"
    ref="canvas"
  />
</template>
<script>
import Web3 from 'web3';
import RdQrcode from './RdQrcode.vue';

export default {
  name: 'RdEthQrcode',
  mixins: [RdQrcode],
  computed: {
    valid() {
      return Web3.utils.isAddress(this.text);
    }
  },
};
</script>
