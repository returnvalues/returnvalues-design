<script>
export default {
  name: 'RdDropdown',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: Boolean,
    tag: { type: String, default: 'button' }
  },
  data() {
    return { show: this.modelValue };
  },
  methods: {
    toggle(...args) {
      const [tf = this.show] = args;
      this.show = args.length ? tf : !tf;
      this.$emit('change', this.show);
    }
  },
  render(createElement) {
    const { button: buttons = [] } = this.$slots;
    const [button] = buttons.slice(-1);
    if (button) {
      const { data } = button;
      data.class = data.class || {};
      data.attrs['data-toggle'] = 'dropdown';
      data.class['dropdown-toggle'] = true;
    }
    this.$slots.default.forEach((node) => {
      if (node.tag === 'a') {
        const { data } = node;
        data.class = data.class || {};
        data.class['dropdown-item'] = true;
      }
    });
    return createElement('div', { class: 'dropdown' }, [
      this.$slots.button,
      createElement('div', { class: { 'dropdown-menu': true, show: this.show } },
        this.$slots.default)
    ]);
  }
};
</script>

<style scoped>

</style>
