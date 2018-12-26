<template>
  <rd-input-group>
    <span
      slot="prepend"
      :class="outlineClass"
      text
    >
      <i class="fab fa-ethereum" />
    </span>
    <input
      ref="input"
      type="text"
      class="form-control"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="outlineClass"
      @keydown="check"
      @paste="check"
      @change="check"
    >
  </rd-input-group>
</template>


<script>
import Web3 from 'web3';
import RdInputGroup from './RdInputGroup.vue';

export default {
  name: 'RdInputAddress',
  components: { RdInputGroup },
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: { type: String, default: undefined },
    readonly: Boolean,
    disabled: Boolean,
    placeholder: { type: String, default: '0x0f167026022632e38c919700d6B466E598905f9C' }
  },
  data() { return { value: this.modelValue, valid: null, outline: undefined }; },
  computed: {
    outlineClass() {
      return this.outline && `border-${this.outline}`;
    }
  },
  mounted() {
    this.$refs.input.value = this.modelValue || '';
    this.check();
    window.peek = Web3;
  },
  methods: {
    check() {
      return this.$nextTick().then(() => {
        const { value } = this.$refs.input;
        const minLength = /^(0x)?((?!0x).){40,}$/i.test(value);
        if (minLength) {
          this.valid = Web3.utils.isAddress(value);
          this.outline = this.valid ? 'success' : 'danger';
        } else {
          this.valid = false;
          this.outline = undefined;
        }
        const newValue = this.valid ? this.$refs.input.value : undefined;
        if (newValue !== this.modelValue) this.$emit('change', newValue);
      });
    }
  },

};
</script>
