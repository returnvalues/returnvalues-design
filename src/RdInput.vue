<script>
import SizeClass from './mixins/SizeClass';
import OutlineClass from './mixins/OutlineClass';

let uid = 0; // 라벨과 인풋을 같은 아이디로 맞추는 용도

export default {
  name: 'RdInput',
  mixins: [SizeClass, OutlineClass],
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    type: { type: String, default: 'text' },
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
        checkbox: '',
        radio: ''
      };
      return Object.hasOwnProperty.call(type, this.type) ? type[this.type] : `form-control${this.plaintext ? '-plaintext' : ''}`;
    },
    formInputClass() {
      const type = {
        checkbox: 'form-check-input',
        radio: 'form-check-input'
      };
      return type[this.type] || '';
    },
    check() {
      return this.type === 'checkbox';
    },
    radio() {
      return this.type === 'radio';
    },
    file() {
      return this.type === 'file';
    },
  },
  render(h) {
    const {
      check, radio, inline, inputId, type, file,
      placeholder,
      readonly,
      disabled,
      modelValue,
      value,
      sizeClass, inputClass, formInputClass, outlineClass
    } = this;
    const self = this;
    const formGroup = {
      staticClass: 'rd-form-group',
      class: ['form-group', {
        'form-check': check || radio,
        'form-check-inline': (radio || check) && inline
      }]
    };
    const label = {
      class: { 'form-check-label': check || radio },
      attrs: { for: inputId }
    };

    const input = {
      ref: 'input',
      staticClass: 'rd-input',
      attrs: {
        id: inputId, type, readonly, disabled, placeholder
      },
      domProps: {
        value: modelValue || value,
      },
      class: [sizeClass, inputClass, outlineClass],
      on: {
        input() {
          self.$emit('change', self.$refs.input.value);
        }
      }
    };

    const inputCheck = {
      domProps: { checked: modelValue },
      on: {
        change() {
          self.$emit('change', self.$refs.input.checked);
        }
      }
    };
    const inputRadio = {
      domProps: {
        value,
        checked: typeof modelValue !== 'undefined' && modelValue === value
      },
      on: {
        change() {
          self.$emit('change', value);
        }
      }
    };
    const inputFile = {
      on: {
        change($event) {
          self.$emit('change', $event);
        }
      }
    };

    if (check) Object.assign(input, inputCheck);
    else if (radio) Object.assign(input, inputRadio);
    else if (file) Object.assign(input, inputFile);

    const hasLabel = this.$slots.default;
    let hasFormGroup = (hasLabel || check || radio);
    if (this.$parent.$options.name === 'RdInputGroup') { // 옵션에 이미 InputGroup으로 감싸져 있을 경우
      if (file) {
        input.staticClass = 'custom-file-input';
        return h('div', { staticClass: 'custom-file rd-custom-file' }, [
          h('input', input),
          h('label', { staticClass: 'custom-file-label' }, this.$slots.default)
        ]);
      }
      input.staticClass = (check || radio) ? undefined : 'form-control';
      hasFormGroup = false;
    }

    if (hasFormGroup) input.class.push(formInputClass);
    else return h('input', input);

    const order = [hasLabel && h('label', label, this.$slots.default)];
    if (check || radio) order.unshift(h('input', input));
    else order.push(h('input', input), this.$slots.message);
    return h('div', formGroup, order);
  },
};
</script>
