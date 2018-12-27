<script>
/* eslint-disable no-param-reassign */
import SizeClass from './mixins/SizeClass';

export default {
  name: 'RdPagination',
  mixins: [SizeClass],
  render(h) {
    const $vnode = this.$vnode.data;
    const ul = { class: ['pagination', 'rd-pagination', this.sizeClass, $vnode.class], staticClass: $vnode.staticClass };
    Object.assign($vnode, { class: undefined, staticClass: undefined });
    const nodes = this.$slots.default || [];
    const child = nodes.map((x) => {
      const li = { class: { 'page-item': true } };
      if (x.data) {
        x.data.class = x.data.class || {};
        x.data.class['page-link'] = true;
        li.class.disabled = x.data.attrs.disabled || (x.data.attrs.disabled === '');
        li.class.active = x.data.attrs.active || (x.data.attrs.active === '');
      }
      return h('li', li, [x]);
    });


    return h('nav', [h('ul', ul, child)]);
  },
};
</script>
