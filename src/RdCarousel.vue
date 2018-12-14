<script>
/* eslint-disable no-script-url,no-param-reassign */

import './bootstrap';

export default {
  name: 'RdCarousel',
  model: {
    prop: 'idx',
    event: 'change'
  },
  props: {
    slide: { type: Boolean, default: true },
    control: Boolean,
    indicator: Boolean,
    fade: Boolean,
    idx: { type: Number, default: 0 },
    interval: { type: Number, default: 5000 },
    keyboard: { type: Boolean, default: true },
    pauseMode: { type: [String, Boolean], default: 'hover' },
    ride: { type: Boolean, default: false },
    wrap: { type: Boolean, default: true },
  },
  data() {
    return { value: this.idx || 0, toIdx: this.idx || 0, q: [] };
  },
  computed: {
    options() {
      const {
        interval, keyboard, pauseMode: pause, ride, wrap,
      } = this;
      return {
        interval, keyboard, pause, ride, wrap
      };
    }
  },
  watch: {
    idx(v) {
      if (this.value !== v) this.to(v);
    },
  },
  mounted() {
    window.$(this.$el)
      .carousel(this.options)
      .on('slide.bs.carousel', ({ to }) => {
        this.toIdx = to;
      })
      .on('slid.bs.carousel', ({ to }) => {
        this.value = to;
        this.dequeue();
        if (this.value !== this.idx) this.$emit('change', this.value);
      })
      .find('.carousel-item')
      .eq(this.value)
      .addClass('active');
  },
  methods: {
    queue(method) {
      if (!this.q.length) this.action(method);
      this.q.push(method);
    },
    dequeue() {
      this.q.shift();
      if (this.q.length) this.action(this.q[0]);
    },
    action(name) {
      this.$nextTick(() => window.$(this.$el).carousel(name));
    },
    cycle() {
      this.action('cycle');
    },
    pause() {
      this.action('pause');
    },
    to(v) {
      this.queue(v);
    },
    prev() {
      this.queue('prev');
    },
    next() {
      this.queue('next');
    },
    dispose() {
      this.action('dispose');
    },
  },
  render(h) {
    const items = (this.$slots.default || []).filter(x => x.tag).map((x, i) => {
      let ret = x;
      if (!ret.data) ret.data = {};
      if (x.tag === 'img') ret = h('div', { key: i }, [x]);

      (ret.children || []).filter(c => c.tag).forEach((c) => {
        if (!c.data) c.data = {};
        const { class: cls = {}, attrs: { caption } = {} } = c.data;
        if (caption || caption === '') c.data.class = Object.assign(cls, { 'carousel-caption': true });
        else c.data.class = Object.assign(cls, { 'd-block': true, 'w-100': true });
      });
      const { class: cls = {} } = ret.data;
      ret.data.class = Object.assign(cls, { 'carousel-item': true, active: this.value === i });

      return ret;
    });
    const inner = h('div', { staticClass: 'carousel-inner' }, items);

    const nodes = [inner];
    const { slide, fade } = this;
    if (this.indicator) {
      nodes.unshift(
        h(
          'ol',
          { staticClass: 'carousel-indicators' },
          items.map((x, i) => h('li', {
            class: { active: this.toIdx === i },
            on: { click: () => this.to(i) }
          }))
        )
      );
    }
    if (this.control) {
      nodes.push(h('a',
        {
          staticClass: 'carousel-control-prev',
          attrs: { role: 'button', href: 'javascript:' },
          on: { click: () => this.prev() }
        },
        [
          h('span', { staticClass: 'carousel-control-prev-icon' })
        ]));
      nodes.push(h('a',
        {
          staticClass: 'carousel-control-next',
          attrs: { role: 'button', href: 'javascript:' },
          on: { click: () => this.next() }
        },
        [
          h('span', { staticClass: 'carousel-control-next-icon' })
        ]));
    }
    return h('div', { staticClass: 'carousel', class: { slide: slide || fade, 'carousel-fade': fade } }, nodes);
  }
};
</script>
<ol class="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
