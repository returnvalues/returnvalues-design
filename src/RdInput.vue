<template>
  <div
    class="form-group"
    :class="{'form-check':check||radio,'form-check-inline':(radio||check)&&inline}"
  >
    <input
      v-if="check"
      :id="inputId"
      ref="input"
      :type="type"
      :value="modelValue"
      :class="[sizeClass,inputClass]"
      :readonly="readonly"
      :disabled="disabled"
      @change="$emit('change',$refs.input.checked)"
    >
    <input
      v-if="radio"
      :id="inputId"
      ref="input"
      :type="type"
      :value="value"
      :checked="modelValue===value"
      :class="[sizeClass,inputClass]"
      :readonly="readonly"
      :disabled="disabled"
      @change="$emit('change',value)"
    >
    <label
      v-if="$slots.default"
      :class="{'form-check-label':check||radio}"
      :for="inputId"
    >
      <slot />
    </label>

    <input
      v-if="!(check||radio)"
      :id="inputId"
      ref="input"
      :value="modelValue||value"
      :placeholder="placeholder"
      :type="type"
      :class="[sizeClass,inputClass]"
      :readonly="readonly"
      :disabled="disabled"
      @change="$emit('change',$refs.input.value)"
    >
    <slot name="message" />
  </div>
</template>

<script>
import SizeClass from './SizeClass';

let uid = 0;

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
    id: { type: String, default: undefined },
    readonly: Boolean,
    plaintext: Boolean,
    disabled: Boolean,
    inline: Boolean,
    modelValue: { type: null, default: undefined },
    value: { type: null, default: undefined }
  },
  data() {
    if (!this.id) uid += 1;
    return { inputId: this.id || `rd-input-id-${uid}` };
  },
  computed: {
    inputClass() {
      const type = {
        file: 'form-control-file',
        plaintext: 'form-control-plaintext',
        range: 'form-control-range',
        checkbox: 'form-check-input',
        radio: 'form-check-input'
      };
      return type[this.type] || `form-control${this.plaintext ? '-plaintext' : ''}`;
    },
    check() {
      return this.type === 'checkbox';
    },
    radio() {
      return this.type === 'radio';
    }
  },
};
</script>
