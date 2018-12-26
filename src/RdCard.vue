<script>
/* eslint-disable no-param-reassign */

export default {
  name: 'RdCard',
  props: {
    group: Boolean, deck: Boolean, columns: Boolean
  },
  render(h) {
    const wrapperTypes = ['group', 'deck', 'columns'];
    for (let i = 0; i < wrapperTypes.length; i += 1) {
      const type = wrapperTypes[i];
      if (this[type]) return h('div', { staticClass: `card-${type}` }, this.$slots.default);
    }
    const {
      top = [], img = [], default: body, bottom = []
    } = this.$slots;
    top.concat(bottom, img).forEach((x) => { if (!x.data)x.data = {}; });
    top.forEach(({ data }) => { data.staticClass = `${data.staticClass || ''} card-img-top`; });
    bottom.forEach(({ data }) => { data.staticClass = `${data.staticClass || ''} card-img-bottom`; });

    return h('div', { staticClass: 'card' }, [img, top, body, bottom]);
  }
};
</script>
