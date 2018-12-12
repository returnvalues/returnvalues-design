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
        class="form-check-input"
        @change="$emit('change',$refs.input.checked)"
      >
      <slot />
      <input
        v-if="!check"
        ref="input"
        :value="modelValue"
        :placeholder="placeholder"
        :type="type"
        class="form-control"
        @change="$emit('change',$refs.input.value)"
      >
    </label>
    <slot name="message" />
  </div>
</template>

<script>
export default {
  name: 'RdInput',
  model: {
    prop: 'modelValue',
    event: 'change'
  },

  props: {
    type: { type: String, default: 'div' },
    placeholder: { type: String, default: '' },
    modelValue: { type: null, default: undefined }
  },
  computed: {
    check() {
      return this.type === 'checkbox';
    }
  },
};
</script>
