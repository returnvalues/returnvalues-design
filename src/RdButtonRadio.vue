<template>
  <label
    class="btn"
    :class="[classes,{active:checked,disabled,'btn-block':block}]"
  >
    <input
      :id="id"
      type="radio"
      :name="name"
      :autocomplete="autocomplete"
      @change="$emit('change',value)"
      :checked="checked"
    >

    <slot/>
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
  computed: {
    checked() {
      return this.value === this.modelValue
    }
  },
  props: {
    value: { type: null, default: undefined },
    modelValue: { type: null, default: undefined }
  }
};
</script>
