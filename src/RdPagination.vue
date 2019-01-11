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
      const li = { staticClass: 'page-item' };
      if (x.data) {
        x.data.staticClass = `page-link ${x.data.staticClass || ''}`;
        if (x.data.attrs.disabled || (x.data.attrs.disabled === ''))li.staticClass += ' disabled'; // disabled 속성이 있을 경우 클래스 추가
        if (x.data.attrs.active || (x.data.attrs.active === ''))li.staticClass += ' active';
      }
      return h('li', li, [x]);
    });


    return h('nav', [h('ul', ul, child)]);
  },
};
</script>
