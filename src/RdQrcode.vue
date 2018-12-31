<template>
  <canvas ref="canvas" />
</template>

<script>
import QRCode from 'qrcode';

export default {
  name: 'RdQrcode',
  props: ['text', 'options'],
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
        if (error) console.error(error);
        else window.$(this.$refs.canvas).attr('style', style);
      });
    }
  }
};
</script>
