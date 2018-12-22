<script>
import './bootstrap';

export default {
  name: 'RdDropdown',
  props: {
    tag: { type: String, default: 'div' },
    inline: Boolean,
    dropright: Boolean,
    dropleft: Boolean,
    dropup: Boolean,
    alignright: Boolean,
  },
  render(createElement) {
    const { button: buttons = [] } = this.$slots;
    const [button] = buttons.slice(-1);
    if (button && this.$slots.default) {
      const { data } = button;
      data.class = data.class || {};
      Object.assign(data.attrs, { 'data-toggle': 'dropdown', role: 'button' });
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
    return createElement(this.tag, {
      class: {
        [(buttons.length > 1 || this.inline) ? 'btn-group' : 'dropdown']: true,
        dropleft: this.dropleft,
        dropright: this.dropright,
        dropup: this.dropup
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
