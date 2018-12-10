<template>
  <label
    class="btn"
    :class="[classes,{active:state,disabled,'btn-block':block}]"
  >
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="value"
      :autocomplete="autocomplete"
      :checked="state"
      @change="onChange"
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
    checked: {
      type: Boolean,
      default: false,
    },
    value: {
      type: null,
      default: '',
    },
    modelValue: { type: null, default: undefined },
    id: { type: String, default: undefined },
    name: { type: String, default: undefined },
    autocomplete: { type: String, default: undefined },
  },
  computed: {
    state() {
      if (this.modelValue === undefined) {
        return this.checked;
      }
      return this.modelValue === this.value;
    }
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },
  methods: {
    onChange() {
      this.toggle();
    },
    toggle() {
      this.$emit('change', this.state ? '' : this.value);
    }
  },
};
</script>
