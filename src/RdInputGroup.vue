<script>
export default {
  name: 'RdButtonGroup',
  render(createElement) {
    let { prepend = [], append = [] } = this.$slots;
    prepend.concat(append).forEach(({ data }) => {
      data.class = data.class || {}; // eslint-disable-line no-param-reassign
      if (data.attrs.text === '' || data.attrs.text) {
        data.class['input-group-text'] = true; // eslint-disable-line no-param-reassign
      }
    });
    if (prepend.length) {
      prepend = createElement('div', { class: { 'input-group-prepend': true } }, prepend);
    }
    if (append.length) {
      append = createElement('div', { class: { 'input-group-append': true } }, append);
    }
    return createElement('div',
      { class: { 'input-group': true } },
      [prepend, this.$slots.default, append]);
  }
};
</script>
