<template>
  <!-- eslint-disable vue/no-v-html -->
  <pre class="highlight"><rd-popover
  ref="popover"
  class="copy m-1"
  :popover="{
    content:'복사 되었습니다.',
    placement:'left',
}"
><rd-badge
  pill
  secondary
  @click.native="copy"
>Copy</rd-badge></rd-popover><code
  ref="code"
  class="p-3 border hljs"
  :class="type"
  v-html="result.value"
  /></pre>
</template>
<script>
import hljs from 'highlight.js/lib/highlight';
import html from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('html', html);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
export default {
  name: 'Hightlight',
  props: { type: { type: String, default: 'html' }, code: { type: String, default: undefined } },
  computed: {
    result() {
      return hljs.highlight(this.type, this.code);
    }
  },
  methods: {
    copy() {
      const selection = window.getSelection();
      selection.removeAllRanges();
      const range = document.createRange();
      range.selectNode(this.$refs.code);
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
      window.setTimeout(() => { this.$refs.popover.popoverHide(); }, 300);
    }
  },
};
</script>
<style>
.border + pre.highlight .border{
  border-top: 0px !important;
}
.highlight{position: relative;}
.copy{position: absolute;right:0;cursor: pointer;}
</style>
