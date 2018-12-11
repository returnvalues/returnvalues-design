<script>
export default {
  name: 'RdDropdown',
  props: {
    split: Boolean,
    dropright: Boolean,
    dropleft: Boolean,
    alignright: Boolean,

  },
  render(createElement) {
    const { button: buttons = [] } = this.$slots;
    const [button] = buttons.slice(-1);
    if (button && this.$slots.default) {
      const { data } = button;
      data.class = data.class || {};
      data.attrs['data-toggle'] = 'dropdown';
      data.class['dropdown-toggle'] = true;
    }
    if (this.$slots.default) {
      this.$slots.default.forEach((node) => {
        if (node.tag === 'a' || node.tag === 'button') {
          const { data } = node;
          data.class = data.class || {};
          data.class['dropdown-item'] = true;
        }
      });
    }
    if (this.$slots.header) {
      this.$slots.header.forEach((node) => {
        const { data } = node;
        data.class = data.class || {};
        data.class['dropdown-header'] = true;
      });
    }
    return createElement('div', {
      class: {
        [this.split ? 'btn-group' : 'dropdown']: true,
        dropleft: this.dropleft,
        dropright: this.dropright
      }
    }, [
      this.$slots.button,
      this.$slots.default && createElement('div',
        {
          class: {
            'dropdown-menu': true,
            show: this.show,
            'dropdown-menu-right': this.alignright
          }
        },
        [this.$slots.header, this.$slots.default])
    ]);
  }
};
</script>

<style scoped>

</style>
