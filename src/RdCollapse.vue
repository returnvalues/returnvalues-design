<script>
export default {
  name: 'RdCollapse',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: { modelValue: Boolean },
  data() { return { value: this.modelValue }; },
  watch: {
    value(v) {
      window.$(this.$el).collapse(v ? 'show' : 'hide');
    },
    modelValue(v) {
      this.value = v;
    },
  },
  mounted() {
    window.$(this.$el).collapse({ toggle: this.value });
  },
  methods: {
    toggle(v) {
      const toAssign = arguments.length === 0 ? !this.value : v;
      const ret = this.value !== toAssign;
      this.value = toAssign;
      return ret;
    }
  },
  render(h) {
    const div = { class: ['collapse'] };
    if (this.$parent.$options.name === 'RdNavbar') div.class.push('navbar-collapse');
    return h('div', div, this.$slots.default);
  },
};
</script>
