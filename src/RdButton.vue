<template>
  <component
    :is="tag"
    class="btn"
    :class="[classes,{active,disabled,'btn-block':block}]"
  >
    <slot />
  </component>
</template>

<script>

export default {
  name: 'RdButton',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    active: {
      type: [Boolean, Object],
      default: undefined
    },
    disabled: {
      type: [Boolean, Object],
      default: undefined
    },
    block: {
      type: [Boolean, Object],
      default: undefined
    },
    semantic: {
      type: String,
      default: 'primary'
    },
    outline: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
  },
  computed: {
    classes() {
      const ret = [this.semantic, this.outline && `outline-${this.outline}`, this.size];
      return ret.map(x => x && `btn-${x}`);
    }
  }
};
</script>
