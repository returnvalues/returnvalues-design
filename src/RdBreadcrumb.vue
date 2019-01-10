<script>
export default {
  name: 'RdBreadcrumb',
  render(h) {
    const nodes = this.$slots.default;
    if (!nodes) return h('nav');
    const items = nodes && nodes // 모든 노드들을 li.breadcrumb-item로 감싸고 마지막 아이템은 .active
      .filter(x => x.tag || `${x.text}`.trim())
      .map((x, i, arr) => h('li', { staticClass: 'breadcrumb-item', class: { active: i === arr.length - 1 } }, [x]));
    return h('nav', [h('ol', { staticClass: 'breadcrumb rd-breadcrumb' }, items)]);
  },
};
</script>
