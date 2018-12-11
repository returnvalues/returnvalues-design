const prefix = {
  RdButton: 'btn-outline'
};

export default {
  props: {
    outline: { type: String, default: undefined },
    outlinePrimary: { type: Boolean, default: undefined },
    outlineSecondary: { type: Boolean, default: undefined },
    outlineSuccess: { type: Boolean, default: undefined },
    outlineDanger: { type: Boolean, default: undefined },
    outlineWarning: { type: Boolean, default: undefined },
    outlineInfo: { type: Boolean, default: undefined },
    outlineLight: { type: Boolean, default: undefined },
    outlineDark: { type: Boolean, default: undefined },
  },
  computed: {
    outlineClass() {
      if (!prefix[this.$options.name]) return undefined;
      let ret;
      if (this.outline) ret = this.outline;
      else {
        const {
          outlinePrimary,
          outlineSecondary,
          outlineSuccess,
          outlineDanger,
          outlineWarning,
          outlineInfo,
          outlineLight,
          outlineDark
        } = this;
        const classes = {
          dark: outlineDark,
          light: outlineLight,
          info: outlineInfo,
          warning: outlineWarning,
          danger: outlineDanger,
          success: outlineSuccess,
          secondary: outlineSecondary,
          primary: outlinePrimary
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
