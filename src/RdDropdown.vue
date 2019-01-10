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
    if (button && this.$slots.default) { // 버튼이 여러개일 경우 마지막으로 들어온 버튼으로 토글작동
      const { data } = button;
      data.class = data.class || {};
      Object.assign(data.attrs, { 'data-toggle': 'dropdown', role: 'button' });
      data.staticClass = `dropdown-toggle ${data.staticClass || ''}`;
    }
    if (this.$slots.default) { // default 슬롯 아이템 클래스 추가
      this.$slots.default.forEach((node) => {
        if (node.tag === 'a' || node.tag === 'button') { // a,button 태그에 .dropdown-item 추가
          const { data } = node;
          data.staticClass = `dropdown-item ${data.staticClass || ''}`;
        }
      });
    }
    if (this.$slots.header) { // 헤더 슬롯 클래스 추가
      this.$slots.header.forEach((node) => {
        const { data } = node;
        data.staticClass = `dropdown-header ${data.staticClass || ''}`;
      });
    }
    return createElement(this.tag, {
      staticClass: `rd-dropdown ${(buttons.length > 1 || this.inline) ? 'btn-group' : 'dropdown'}`,
      class: {
        dropleft: this.dropleft,
        dropright: this.dropright,
        dropup: this.dropup
      }
    }, [
      this.$slots.button,
      this.$slots.default && createElement('div',
        {
          staticClass: 'dropdown-menu',
          class: {
            show: this.show,
            'dropdown-menu-right': this.alignright
          }
        },
        [this.$slots.header, this.$slots.default])
    ]);
  }
};
</script>
