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
    while (parent) { // 부모를 타고 올라가며 RdNavBar 안에 있는지 체크
      if (parent.$options.name === 'RdNavbar') {
        staticClass = 'navbar-nav rd-nav'; // 있을경우 클래스명 변경
        break;
      }
      parent = parent.$parent;
    }


    let child;
    if (tag === 'nav') child = nodes;
    else { // ul일 경우 li로 감싸는 작업
      child = nodes
        .filter(x => x.tag || `${x.text}`.trim()) // 글자도 없는 빈 노드 필터
        .map((x) => {
          if (`${x.tag}`.includes('RdDropdown')) { // RdDropdown인 경우
            x.data.staticClass = `nav-item ${x.data.staticClass || ''}`;
            x.componentOptions.propsData.tag = 'li'; // RdDropdown의 태그를 li로 변경
            aTags.push(...x.componentOptions.children.filter(o => o.tag === 'a' && o.data.slot === 'button'));
            return x;
          }
          return h('li', { staticClass: 'nav-item' }, [x]);
        });
    }

    aTags.forEach((a) => { // 모든 a태그에 nav-link 클래스 추가
      a.data = a.data || {};
      a.data.staticClass = `nav-link ${a.data.staticClass || ''}`;
    });

    return h(tag, { staticClass, class: this.classes }, child);
  },
};
</script>
