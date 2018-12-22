<script>
/* eslint-disable no-param-reassign */

import SemanticClass from './mixins/SemanticClass';

export default {
  name: 'RdProgress',
  mixins: [SemanticClass],
  props: {
    striped: Boolean,
    animated: Boolean,
    multiple: Boolean,
    bar: Boolean,
    percent: { type: Number, default: 0 },
  },
  render(h) {
    const nodes = this.$slots.default;

    if (this.multiple) {
      nodes.map(x => x.componentOptions).filter(x => x).forEach((x) => { x.propsData.bar = true; });
      return h('div', { class: 'progress' }, nodes);
    }

    const data = {
      class: ['progress-bar', this.semanticClass],
      style: { width: `${this.percent}%` }
    };
    if (this.striped) data.class.push('progress-bar-striped');
    if (this.animated) data.class.push('progress-bar-animated');
    if (this.bar) return h('div', data);
    return h('div', { class: 'progress' }, [h('div', data, nodes)]);
  }
};
</script>

<style scoped>

</style>
