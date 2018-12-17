<script>
/* eslint-disable no-param-reassign */

export default {
  name: 'RdModalHeader',
  render(h) {
    this.$slots.default.filter(x => x.tag).forEach((x) => {
      if (!x.data) x.data = { attrs: {} };
      if (!x.data.class) x.data.class = {};
      const { attrs } = x.data;
      if (attrs.title === '' || attrs.title) x.data.class['modal-title'] = true;
    });
    return h('div', { staticClass: 'modal-header' }, this.$slots.default);
  }
};
</script>
