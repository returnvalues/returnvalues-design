<template>
  <rd-input-group class="rd-eth-input-address">
    <span
      slot="prepend"
      :class="[outlineClass,textClass]"
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
      @input="check"
    >
  </rd-input-group>
</template>


<script>
import Web3 from 'web3';
import RdInputGroup from './RdInputGroup.vue';

export default {
  name: 'RdEthInputAddress',
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
  data() { return { value: this.modelValue, valid: null, semantic: undefined }; },
  computed: {
    outlineClass() {
      return this.semantic && `border-${this.semantic}`;
    },
    textClass() {
      return this.semantic && `text-${this.semantic}`;
    }
  },
  mounted() {
    this.$refs.input.value = this.modelValue || '';
    this.check();
  },
  methods: {
    check() {
      return this.$nextTick().then(() => {
        const { value } = this.$refs.input;
        const minLength = /^(0x)?((?!0x).){40,}$/i.test(value); // 0x로 시작해서 40자 이상인지 체크
        if (minLength) { // 최소 글자 수를 만족했을때 유효성 검사
          this.valid = Web3.utils.isAddress(value);
          this.semantic = this.valid ? 'success' : 'danger';
        } else {
          this.valid = false;
          this.semantic = undefined;
        }
        const newValue = this.valid ? this.$refs.input.value : undefined;
        if (newValue !== this.modelValue) this.$emit('change', newValue);
      });
    }
  },

};
</script>
