<script>
/* eslint-disable no-param-reassign */

export default {
  name: 'RdModalHeader',
  render(h) {
    this.$slots.default.filter(x => x.tag).forEach((x) => {
      if (!x.data) x.data = { attrs: {} };
      const { attrs } = x.data;
      if (attrs.title === '' || attrs.title) x.data.staticClass = `modal-title ${x.data.staticClass || ''}`;
    });
    return h('div', { staticClass: 'modal-header' }, this.$slots.default);
  }
};
</script>
