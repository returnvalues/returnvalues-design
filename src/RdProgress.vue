<script>
/* eslint-disable no-param-reassign */

import SemanticClass from './mixins/SemanticClass';

export default {
  name: 'RdProgress',
  mixins: [SemanticClass],
  props: {
    striped: Boolean,
    animated: Boolean,
    percent: { type: Number, default: 0 },
    bar: Boolean
  },
  render(h) {
    const nodes = this.$slots.default;

    if (nodes) { // 컨테이너로 사용되었을 경우.
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
    return h('div', { class: 'progress' }, [h('div', data)]);
  }
};
</script>

<style scoped>

</style>
