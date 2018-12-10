<template>
  <label
    class="btn"
    :class="[classes,{active:input,disabled,'btn-block':block}]"
  >
    <input
      v-model="input"
      :id="id"
      type="checkbox"
      :name="name"
      :autocomplete="autocomplete"
      @change="$emit('change',input)"
    >

    <slot/>
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
  data() {
    return { input: this.modelValue }
  },
  props: {
    modelValue: { type: null, default: undefined }
  }
};
</script>
