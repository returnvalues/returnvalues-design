<template>
  <label
    class="btn"
    :class="[classes,{active:input,disabled,'btn-block':block}]"
  >
    <input
      :id="id"
      v-model="input"
      type="checkbox"
      :name="name"
      :autocomplete="autocomplete"
      @change="$emit('change',input)"
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
    modelValue: { type: null, default: undefined }
  },
  data() {
    return { input: this.modelValue };
  }
};
</script>
