const prefix = {
  RdListItem: 'list-group-item',
  RdButton: 'btn',
  RdButtonCheckbox: 'btn',
  RdButtonRadio: 'btn',
};

export default {
  props: {
    semantic: { type: String, default: undefined },
    primary: { type: Boolean, default: undefined },
    secondary: { type: Boolean, default: undefined },
    success: { type: Boolean, default: undefined },
    danger: { type: Boolean, default: undefined },
    warning: { type: Boolean, default: undefined },
    info: { type: Boolean, default: undefined },
    light: { type: Boolean, default: undefined },
    dark: { type: Boolean, default: undefined },
  },
  computed: {
    semanticClass() {
      if (!prefix[this.$options.name]) return undefined;
      let ret;
      if (this.semantic) ret = this.semantic;
      else {
        const {
          primary, secondary, success, danger, warning, info, light, dark
        } = this;
        const classes = {
          dark, light, info, warning, danger, success, secondary, primary
        };
        Object.keys(classes).every((key) => {
          if (classes[key] === undefined) return true;
          ret = key;
          return false;
        });
      }
      return ret && `${prefix[this.$options.name]}-${ret}`;
    }
  }
};
