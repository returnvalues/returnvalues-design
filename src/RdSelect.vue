<template>
  <select
    v-if="inputGroup"
    ref="select"
    v-model="value"
    class="custom-select rd-select"
    :multiple="multiple"
  >
    <slot />
  </select>
  <div
    v-else
    class="form-group"
  >
    <label>
      <slot name="label" />
      <select
        ref="select"
        v-model="value"
        class="form-control rd-select"
        :multiple="multiple"
      >
        <slot />
      </select>
    </label>
  </div>
</template>

<script>
// util 함수들. 뷰 내부에서 작동하는 로직 가져옴.
function getValue(option) {
  const key = '_value';
  return key in option ? option[key] : option.value;
}


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

export function looseEqual(a, b) {
  if (a === b) return true;
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => looseEqual(e, b[i]));
      } if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(key => looseEqual(a[key], b[key]));
      }
      /* istanbul ignore next */
      return false;
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (looseEqual(arr[i], val)) return i;
  }
  return -1;
}


export default {
  name: 'RdSelect',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: { type: null, default: undefined },
    multiple: Boolean
  },
  data() {
    return { value: this.modelValue, inputGroup: false };
  },
  watch: {
    value() {
      this.$emit('change', this.value);
    }
  },
  created() {
    this.inputGroup = this.$parent.$options.name === 'RdInputGroup'; // RdInputGroup으로 감싸있는지 여부
  },
  mounted() {
    this.setSelected();
  },
  methods: {
    setSelected() { // 컴파일된 템플릿 소스코드에서 가져옴
      const el = this.$refs.select;
      const value = this.modelValue;
      let selected;
      let option;
      const isMultiple = this.multiple;
      for (let i = 0, l = el.options.length; i < l; i += 1) {
        option = el.options[i];
        if (isMultiple) {
          selected = looseIndexOf(value, getValue(option)) > -1;
          if (option.selected !== selected) {
            option.selected = selected;
          }
        } else if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
    }
  },
};
</script>
