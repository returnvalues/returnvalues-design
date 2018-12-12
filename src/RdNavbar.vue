<script>
/* eslint-disable no-param-reassign */

import SemanticClass from './SemanticClass';
import SizeClass from './SizeClass';

let uid = 0;
export default {
  name: 'RdNavbar',
  mixins: [SemanticClass, SizeClass],
  beforeCreate() { uid += 1; },
  render(h) {
    this.$slots.default.filter(x => x.componentOptions)
      .forEach(({ componentOptions: { propsData: x } }) => { x.navbarId = `navbar-id-${uid}`; });
    return h('div', { class: ['navbar', this.semanticClass, this.sizeClass] }, this.$slots.default);
  },
};
</script>

<style scoped>

</style>
