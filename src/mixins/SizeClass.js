const prefix = {
  RdButtonGroup: 'input-group',
  RdButton: 'btn',
  RdInput: 'form-control',
  RdNavbar: 'navbar-expand',
  RdPagination: 'pagination',
  RdModal: 'modal'
};

export default {
  props: {
    size: { type: String, default: undefined },
    sm: { type: Boolean, default: undefined },
    lg: { type: Boolean, default: undefined }
  },
  computed: {
    sizeClass() {
      if (!prefix[this.$options.name]) return undefined;
      let ret;
      if (this.size) ret = this.size;
      else {
        const { sm, lg } = this;
        const classes = { lg, sm };
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
