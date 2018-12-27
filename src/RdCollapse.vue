<script>
import './bootstrap';

export default {
  name: 'RdCollapse',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: { show: Boolean },
  data() { return { value: this.show }; },
  watch: {
    show(v) {
      this.value = v;
      this.$nextTick(() => window.$(this.$el).collapse(v ? 'show' : 'hide'));
    },
  },
  methods: {
    toggle(v) {
      const toAssign = arguments.length === 0 ? !this.value : v;
      const ret = this.value !== toAssign;
      this.value = toAssign;
      if (ret) {
        this.$emit('change', this.value);
        window.$(this.$el).collapse(this.value ? 'show' : 'hide');
      }
      return ret;
    }
  },
  render(h) {
    const div = { class: ['collapse', 'rd-collapse'] };
    if (this.$parent.$options.name === 'RdNavbar') div.class.push('navbar-collapse');
    return h('div', div, this.$slots.default);
  },
};
</script>
