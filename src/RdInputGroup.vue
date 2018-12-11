<script>
import SizeClass from './SizeClass';

export default {
  name: 'RdButtonGroup',
  mixins: [SizeClass],
  render(createElement) {
    const deflt = this.$slots.default || [];
    let { prepend = [], append = [] } = this.$slots;
    const pna = prepend.concat(append);
    pna.forEach(({ data }) => {
      if (data.attrs.text === '' || data.attrs.text) {
        data.class = data.class || {}; // eslint-disable-line no-param-reassign
        data.class['input-group-text'] = true; // eslint-disable-line no-param-reassign
      }
    });
    if (prepend.length) {
      prepend = createElement('div', { class: { 'input-group-prepend': true } }, prepend);
    }
    if (append.length) {
      append = createElement('div', { class: { 'input-group-append': true } }, append);
    }
    pna.concat(deflt).forEach(({ data, tag }) => {
      if (tag === 'input' || tag === 'textarea') {
        data.class = data.class || {}; // eslint-disable-line no-param-reassign
        data.class['form-control'] = true; // eslint-disable-line no-param-reassign
      }
    });

    return createElement('div',
      { class: [{ 'input-group': true }, this.sizeClass] },
      [prepend, deflt, append]);
  }
};
</script>
