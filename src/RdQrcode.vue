<template>
  <canvas ref="canvas" />
</template>

<script>
import QRCode from 'qrcode';

export default {
  name: 'RdQrcode',
  props: {
    text: { type: String, default: '' },
    options: { type: Object, default: undefined }
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
      this.$nextTick(() => {
        if (this.$refs.canvas) {
          const style = window.$(this.$refs.canvas).attr('style');
          QRCode.toCanvas(this.$refs.canvas, this.text, this.options, (error) => {
            if (error) throw error;
            else window.$(this.$refs.canvas).attr('style', style);
          });
        }
      });
    }
  }
};
</script>
