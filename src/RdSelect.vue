<template>
  <div class="form-group">
    <label>
      <slot name="label"></slot>
      <select class="form-control"
              ref="select"
              v-model="value" :multiple="multiple">
        <slot/>
      </select>
    </label>
  </div>
</template>

<script>
function getValue(option) {
  return '_value' in option ? option._value : option.value;
}


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

export function looseEqual(a, b) {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    }
    catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) return i
  }
  return -1
}


export default {
  name: 'RdSelect',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  mounted() {
    this.setSelected();
  },
  methods: {
    setSelected() {
      const el = this.$refs.select;
      const value = this.modelValue
      let selected;
      let option;
      const isMultiple = this.multiple;
      for (let i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
          selected = looseIndexOf(value, getValue(option)) > -1;
          if (option.selected !== selected) {
            option.selected = selected;
          }
        } else {
          if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) {
              el.selectedIndex = i;
            }
            return;
          }
        }
      }
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
    }
  },
  data() {
    return { value: this.modelValue }
  },
  watch: {
    value() {
      this.$emit('change', this.value);
    }
  },
  props: {
    modelValue: { type: null, default: undefined },
    multiple: Boolean
  },
};
</script>
