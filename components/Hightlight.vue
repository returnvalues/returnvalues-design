<template>
  <pre class="border border-top-0"><code
ref="code"
                                         class="p-3"
                                         :class="type"
  >{{ code }}</code></pre>
</template>
<script>

import hljs from 'highlight.js/lib/highlight';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';


hljs.registerLanguage('html', html);
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
