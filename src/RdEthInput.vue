<script>
import Web3 from 'web3';
import { hexFrom, hexTo } from './filters';
import SizeClass from './mixins/SizeClass';
import OutlineClass from './mixins/OutlineClass';

let uid = 0;

export default {
  name: 'RdEthInput',
  mixins: [SizeClass, OutlineClass],
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    type: { type: String, default: 'text' },
    from: { type: String, default: 'utf8' },
    to: { type: String, default: 'hex' },
    placeholder: { type: String, default: undefined },
    id: { type: String, default: undefined },
    readonly: Boolean,
    plaintext: Boolean,
    disabled: Boolean,
    modelValue: { type: null, default: undefined }
  },
  data() {
    if (!this.id) uid += 1;
    return { inputId: this.id || `rd-input-id-${uid}`, inputValue: this.convertInputValue() };
  },
  computed: {
    inputClass() {
      return `form-control${this.plaintext ? '-plaintext' : ''}`;
    }
  },
  watch: {
    modelValue() {
      this.inputValue = this.convertInputValue();
    }
  },
  methods: {
    convertInputValue() {
      const toFn = v => ((this.from !== 'hex' && Web3.utils.isHexStrict(v)) ? (hexTo[this.from] || hexTo.utf8)(v) : v);
      const fromFn = v => (this.to === 'hex' ? v : (hexFrom[this.to] || (x => x))(v));
      const hex = fromFn(this.modelValue);
      return toFn(hex);
    },
    fromFn(v) {
      if (this.from === 'hex') return v;
      return (hexFrom[this.from] || hexFrom.utf8)(v);
    },
    toFn(v) {
      if (!Web3.utils.isHexStrict(v) || this.to === 'hex' || !hexTo[this.to]) return v;
      return hexTo[this.to](v);
    },
  },
  render(h) {
    const {
      inputId, type,
      placeholder,
      readonly,
      disabled,
      inputValue,
      fromFn,
      toFn,
      sizeClass, inputClass, outlineClass
    } = this;
    const self = this;
    const formGroup = { staticClass: 'rd-form-group form-group' };
    const label = {
      attrs: { for: inputId }
    };

    const input = {
      ref: 'input',
      staticClass: 'rd-eth-input',
      attrs: {
        id: inputId, type, readonly, disabled, placeholder
      },
      domProps: {
        value: inputValue,
      },
      class: [sizeClass, inputClass, outlineClass],
      on: {
        input($event) {
          if ($event.target.composing) return;
          self.inputValue = $event.target.value;
          const from = fromFn(self.inputValue);
          self.$emit('input', toFn(from));
        }
      }
    };


    const hasLabel = this.$slots.default;
    let hasFormGroup = hasLabel;
    if (this.$parent.$options.name === 'RdInputGroup') {
      input.class = 'form-control';
      hasFormGroup = false;
    }

    if (!hasFormGroup) return h('input', input);

    const order = [hasLabel && h('label', label, this.$slots.default)];
    order.push(h('input', input), this.$slots.message);
    return h('div', formGroup, order);
  },
};
</script>
