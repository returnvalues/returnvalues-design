<script>
/* eslint-disable no-param-reassign */
import SizeClass from './mixins/SizeClass';

export default {
  name: 'RdInputGroup',
  mixins: [SizeClass],
  render(h) {
    const deflt = this.$slots.default || [];
    let { prepend = [], append = [] } = this.$slots;
    const pna = prepend.concat(append);
    pna.forEach(({ data }) => {
      if (data.attrs.text === '' || data.attrs.text) { // text 어트리뷰트가 붙었을 경우 .input-group-text 추가
        data.staticClass = `input-group-text ${data.staticClass || ''}`;
      }
    });
    if (prepend.length) {
      prepend = h('div', { staticClass: 'input-group-prepend' }, prepend);
    }
    if (append.length) {
      append = h('div', { staticClass: 'input-group-append' }, append);
    }
    pna.concat(deflt).forEach((x) => {
      if (x.tag === 'input' || x.tag === 'textarea') {
        x.data = x.data || {};
        x.data.staticClass = `form-control ${x.data.staticClass || ''}`;
      }
    });

    return h('div',
      { staticClass: 'input-group rd-input-group', class: [this.sizeClass] },
      [prepend, deflt, append]);
  }
};
</script>
