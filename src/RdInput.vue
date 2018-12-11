<template>
  <div
    class="form-group"
    :class="{'form-check':check}"
  >
    <label :class="{'form-check-label':check}">
      <input
        v-if="check"
        :type="type"
        class="form-check-input"
      >
      <slot />
      <input
        v-if="!check"
        :type="type"
        class="form-control"
      >
    </label>
    <slot name="help" />
  </div>
</template>

<script>
export default {
  name: 'RdInput',
  props: { type: { type: String, default: 'div' } },
  computed: {
    check() {
      return this.type === 'checkbox';
    }
  },
};
</script>
