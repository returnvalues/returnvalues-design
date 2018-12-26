<script>
export default {
  name: 'RdBreadcrumb',
  render(h) {
    const nodes = this.$slots.default;
    if (!nodes) return h('nav');
    const items = nodes && nodes
      .filter(x => x.tag || `${x.text}`.trim())
      .map((x, i, arr) => h('li', { class: { 'breadcrumb-item': true, active: i === arr.length - 1 } }, [x]));
    return h('nav', [h('ol', { class: 'breadcrumb' }, items)]);
  },
};
</script>
