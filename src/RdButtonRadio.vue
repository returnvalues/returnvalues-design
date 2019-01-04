<template>
  <label
    class="btn"
    :class="[{active:checked,disabled,'btn-block':block},semanticClass]"
  >
    <input
      :id="id"
      type="radio"
      :name="name"
      :autocomplete="autocomplete"
      :checked="checked"
      @change="$emit('change',value)"
    >

    <slot />
  </label>
</template>

<script>
import RdButton from './RdButton.vue';

export default {
  name: 'RdButtonRadio',
  mixins: [RdButton],
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: { type: null, default: undefined },
    modelValue: { type: null, default: undefined }
  },
  computed: {
    checked() {
      return this.value === this.modelValue;
    }
  }
};
</script>
