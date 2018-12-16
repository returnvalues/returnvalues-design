<script>
/* eslint-disable no-param-reassign */

import SemanticClass from './mixins/SemanticClass';
import SizeClass from './mixins/SizeClass';

export default {
  name: 'RdNavbar',
  mixins: [SemanticClass, SizeClass],
  render(h) {
    return h('div', { class: ['navbar', this.semanticClass, this.sizeClass] }, this.$slots.default);
  },
};
</script>

<style scoped>

</style>
