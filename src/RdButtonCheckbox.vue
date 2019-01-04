<template>
  <label
    class="btn"
    :class="[{active:modelValue,disabled,'btn-block':block},semanticClass]"
  >
    <input
      :id="id"
      ref="input"
      :checked="modelValue"
      type="checkbox"
      :name="name"
      :autocomplete="autocomplete"
      @change="$emit('change',$refs.input.checked)"
    >
    <slot />
  </label>
</template>

<script>
import RdButton from './RdButton.vue';

export default {
  name: 'RdButtonCheckbox',
  mixins: [RdButton],
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: { type: Boolean, default: false }
  }
};
</script>
