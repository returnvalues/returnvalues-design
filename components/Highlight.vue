<template>
  <pre class="highlight"><code
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
  }
};
</script>
<style>
.border + pre.highlight .border{
  border-top: 0px !important;
}
</style>
