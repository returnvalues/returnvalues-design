<template>
  <pre class="highlight"><rd-badge
  pill
  secondary
  class="copy m-1"
  @click.native="copy"
>Copy</rd-badge><code
  ref="code"
  class="p-3 border"
  :class="type"
  >{{ code }}</code></pre>
</template>
<script>

import hljs from 'highlight.js/lib/highlight';
import html from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';


hljs.registerLanguage('html', html);
hljs.registerLanguage('javascript', javascript);
export default {
  name: 'Hightlight',
  props: { type: { type: String, default: 'html' }, code: { type: String, default: undefined } },
  mounted() {
    hljs.highlightBlock(this.$refs.code);
  },
  updated() {
    hljs.highlightBlock(this.$refs.code);
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
