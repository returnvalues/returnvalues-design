<template>
  <canvas
    v-show="valid"
    ref="canvas"
  />
</template>

<script>
import QRCode from 'qrcode';
import Web3 from 'web3';

export default {
  name: 'RdQrcode',
  props: {
    text: { type: String, default: '' },
    options: { type: Object, default: undefined },
    ethAddress: Boolean
  },
  computed: {
    valid() {
      return !this.ethAddress || Web3.utils.isAddress(this.text);
    }
  },
  watch: {
    text() {
      this.update();
    },
    options() {
      this.update();
    }
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      const style = window.$(this.$refs.canvas).attr('style');
      QRCode.toCanvas(this.$refs.canvas, this.text, this.options, (error) => {
        if (error) throw error;
        else window.$(this.$refs.canvas).attr('style', style);
      });
    }
  }
};
</script>
