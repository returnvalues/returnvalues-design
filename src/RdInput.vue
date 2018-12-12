<template>
  <div
    class="form-group"
    :class="{'form-check':check}"
  >
    <label :class="{'form-check-label':check}">
      <input
        v-if="check"
        ref="input"
        :type="type"
        :value="modelValue"
        :class="[sizeClass,inputClass]"
        :readonly="readonly"
        @change="$emit('change',$refs.input.checked)"
      >
      <slot />
      <input
        v-if="!check"
        ref="input"
        :value="modelValue||value"
        :placeholder="placeholder"
        :type="type"
        :class="[sizeClass,inputClass]"
        :readonly="readonly"
        @change="$emit('change',$refs.input.value)"
      >
    </label>
    <slot name="message" />
  </div>
</template>

<script>
import SizeClass from './SizeClass';

export default {
  name: 'RdInput',

  mixins: [SizeClass],
  model: {
    prop: 'modelValue',
    event: 'change'
  },

  props: {
    type: { type: String, default: 'div' },
    placeholder: { type: String, default: undefined },
    readonly: Boolean,
    plaintext: Boolean,
    modelValue: { type: null, default: undefined },
    value: { type: null, default: undefined }
  },
  computed: {
    inputClass() {
      const type = {
        file: 'form-control-file',
        plaintext: 'form-control-plaintext',
        range: 'form-control-range',
        checkbox: 'form-check-input'
      };
      return type[this.type] || `form-control${this.plaintext ? '-plaintext' : ''}`;
    },
    check() {
      return this.type === 'checkbox';
    }
  },
};
</script>
