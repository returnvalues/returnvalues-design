<template>
  <div class="form-group">
    <slot />
    <textarea
      ref="textarea"
      class="form-control rd-textarea"
      :value="modelValue"
      :rows="rows"
      :cols="cols"
      :autofocus="autofocus"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :wrap="wrap"
      @change="$emit('change',$refs.textarea.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'RdTextarea',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: { type: null, default: undefined },
    rows: { type: Number, default: undefined },
    cols: { type: Number, default: undefined },
    autofocus: Boolean,
    disabled: Boolean,
    placeholder: Boolean,
    readonly: Boolean,
    required: Boolean,
    wrap: Boolean
  }
};
</script>
