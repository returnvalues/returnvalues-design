<script>
import SemanticClass from './mixins/SemanticClass';
import SizeClass from './mixins/SizeClass';

export default {
  name: 'RdNavbar',
  mixins: [SemanticClass, SizeClass],
  render(h) {
    return h('div', { staticClass: 'navbar rd-navbar', class: [this.semanticClass, this.sizeClass] }, this.$slots.default);
  },
};
</script>
