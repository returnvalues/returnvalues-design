<script>
/* eslint-disable no-param-reassign */

export default {
  name: 'RdNav',
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    tabs: Boolean,
    pills: Boolean,
    fill: Boolean,
    justified: Boolean,
  },
  computed: {
    classes() {
      const type = ['tabs', 'pills', 'fill', 'justified'].filter(x => this[x]);
      const ret = type.map(x => `nav-${x}`);
      if (this.$parent.$options.name === 'RdCardHeader') ret.push(...type.map(x => `card-header-${x}`));
      return ret;
    }
  },
  render(h) {
    const tag = this.tag === 'nav' ? 'nav' : 'ul';
    const nodes = this.$slots.default || [];
    const aTags = nodes.filter(x => x.tag === 'a');
    let parent = this.$parent;
    let staticClass = 'nav rd-nav';
    while (parent) {
      if (parent.$options.name === 'RdNavbar') {
        staticClass = 'navbar-nav rd-nav';
        break;
      }
      parent = parent.$parent;
    }


    let child;
    if (tag === 'nav') child = nodes;
    else {
      child = nodes.filter(x => x.tag || `${x.text}`.trim()).map((x) => {
        if (`${x.tag}`.includes('RdDropdown')) {
          x.data.class = x.data.class || {};
          x.data.class['nav-item'] = true;
          x.componentOptions.propsData.tag = 'li';
          aTags.push(...x.componentOptions.children.filter(o => o.tag === 'a' && o.data.slot === 'button'));
          return x;
        }
        return h('li', { class: 'nav-item' }, [x]);
      });
    }

    aTags.forEach(({ data }) => {
      data.class = data.class || {};
      data.class['nav-link'] = true;
    });

    return h(tag, { staticClass, class: this.classes }, child);
  },
};
</script>
