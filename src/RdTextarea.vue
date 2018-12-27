<template>
  <div class="form-group">
    <slot />
    <textarea
      ref="textarea"
      class="form-control rd-textarea"
      :rows="rows"
      :value="modelValue"
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
    rows: { type: Number, default: undefined }
  }
};
</script>
