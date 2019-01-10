<script>
/* eslint-disable no-shadow,no-script-url,no-param-reassign */

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
  beforeDestroy() {
    window.$(this.$el).carousel('dispose');
  },
  mounted() {
    window.$(this.$el)
      .carousel(this.options)
      .on('slide.bs.carousel', ({ to }) => { // 시작하자마자
        this.toIdx = to;
      })
      .on('slid.bs.carousel', ({ to }) => { // 끝났을때
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
      if (!this.q.length) this.action(method); // 큐가 비었으면 바로 실행
      this.q.push(method); // 사용자 조작을 큐에 넣었다 순서대로 실행. 중복 실행 할 경우 문제생김.
    },
    dequeue() {
      this.q.shift();
      if (this.q.length) this.action(this.q[0]); // 큐가 남아있으면 실행
    },
    action(name) {
      this.$nextTick(() => window.$(this.$el).carousel(name)); // 바로 실행 할 경우 돔업데이트와 충돌. 업데이트 완료 후 실행
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
    const items = (this.$slots.default || []).filter(x => x.tag).map((x, i) => { // .carousel-item
      let ret = x;
      if (!ret.data) ret.data = {};
      if (x.tag === 'img') ret = h('div', { key: i }, [x]); // 이미지 태그가 바로 들어온 경우 div로 감쌈

      const { class: cls = {}, staticClass = '' } = ret.data;
      ret.data.staticClass = `carousel-item ${staticClass}`;
      ret.data.class = Object.assign(cls, { active: this.value === i });

      (ret.children || []).filter(c => c.tag).forEach((c) => {
        if (!c.data) c.data = {};
        const { staticClass = '', attrs: { caption } = {} } = c.data;
        if (caption || caption === '') c.data.staticClass = `carousel-caption ${staticClass}`; // caption인 경우
        else c.data.staticClass = `d-block w-100 ${staticClass}`;
      });

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
          items.map((x, i) => h('li', { // items 개수만큼 li 생성
            class: { active: this.toIdx === i },
            on: { click: () => this.to(i) }
          }))
        )
      );
    }
    if (this.control) {
      ['prev', 'next'].forEach((direction) => {
        nodes.push(h('a',
          {
            staticClass: `carousel-control-${direction}`,
            attrs: { role: 'button', href: 'javascript:' },
            on: { click: () => this[direction]() }
          },
          [
            h('span', { staticClass: `carousel-control-${direction}-icon` })
          ]));
      });
    }
    return h('div', { staticClass: 'carousel rd-carousel', class: { slide: slide || fade, 'carousel-fade': fade } }, nodes);
  }
};
</script>
