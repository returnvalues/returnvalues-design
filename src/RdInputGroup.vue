<script>
/* eslint-disable no-param-reassign */
import SizeClass from './mixins/SizeClass';

export default {
  name: 'RdInputGroup',
  mixins: [SizeClass],
  render(createElement) {
    const deflt = this.$slots.default || [];
    let { prepend = [], append = [] } = this.$slots;
    const pna = prepend.concat(append);
    pna.forEach(({ data }) => {
      if (data.attrs.text === '' || data.attrs.text) {
        data.class = data.class || {};
        data.class['input-group-text'] = true;
      }
    });
    if (prepend.length) {
      prepend = createElement('div', { class: { 'input-group-prepend': true } }, prepend);
    }
    if (append.length) {
      append = createElement('div', { class: { 'input-group-append': true } }, append);
    }
    pna.concat(deflt).forEach((x) => {
      if (x.tag === 'input' || x.tag === 'textarea') {
        x.data = x.data || {};
        x.data.class = x.data.class || {};
        x.data.class['form-control'] = true;
      }
    });

    return createElement('div',
      { class: [{ 'input-group': true }, this.sizeClass] },
      [prepend, deflt, append]);
  }
};
</script>
