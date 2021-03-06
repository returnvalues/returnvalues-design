const prefix = { // 컴포넌트이름:클래스
  RdButtonGroup: 'input-group',
  RdButton: 'btn',
  RdInput: 'form-control',
  RdNavbar: 'navbar-expand',
  RdPagination: 'pagination',
  RdModal: 'modal',
  RdInputGroup: 'input-group'
};

export default {
  props: {
    size: { type: String, default: undefined },
    sm: { type: Boolean, default: undefined },
    md: { type: Boolean, default: undefined },
    lg: { type: Boolean, default: undefined },
    xl: { type: Boolean, default: undefined },
  },
  computed: {
    sizeClass() {
      if (!prefix[this.$options.name]) return undefined;
      let ret;
      if (this.size) ret = this.size;
      else {
        const {
          sm, md, lg, xl
        } = this;
        const classes = {
          xl, lg, md, sm
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
