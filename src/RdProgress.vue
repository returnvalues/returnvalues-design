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
    bar: Boolean, // 내부 속성. 멀티플로 래핑 되어있는지 확인 용도
    percent: { type: Number, default: 0 },
  },
  render(h) {
    const nodes = this.$slots.default;

    if (this.multiple) { // 멀티플 속성이 있을 경우 래퍼로 사용한걸로 간주
      nodes.map(x => x.componentOptions).filter(x => x).forEach((x) => { x.propsData.bar = true; });
      return h('div', { staticClass: 'progress rd-progress' }, nodes);
    }

    const bar = {
      staticClass: 'progress-bar',
      class: [this.semanticClass],
      style: { width: `${this.percent}%` }
    };
    if (this.striped) bar.class.push('progress-bar-striped');
    if (this.animated) bar.class.push('progress-bar-animated');
    if (this.bar) return h('div', bar); // 이미 래핑이 되어있어서 바 단독 사용
    return h('div', { staticClass: 'progress rd-progress' }, [h('div', bar, nodes)]);
  }
};
</script>
