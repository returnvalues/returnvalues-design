<script>
/* eslint-disable no-param-reassign */

export default {
  name: 'RdCardBody',
  props: { overlay: Boolean },
  render(h) {
    const {
      title = [], subtitle = [], default: text = [], link = []
    } = this.$slots;
    const tags = {
      title, subtitle, text, link
    };

    Object.keys(tags).forEach((name) => {
      tags[name].forEach((x) => {
        if (!x.data) x.data = {};
        x.data.staticClass = `${x.data.staticClass || ''} card-${name}`;
      });
    });
    return h('div', { staticClass: `card-${this.overlay ? 'img-overlay' : 'body'}` }, [title, subtitle, text, link]);
  }
};
</script>

<style scoped>

</style>
