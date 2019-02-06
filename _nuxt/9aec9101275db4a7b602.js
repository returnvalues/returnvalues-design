(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{681:function(n,t,p){"use strict";p.r(t);var r={name:"InputGroup"},o=p(1),e=Object(o.a)(r,function(){var n=this,t=n.$createElement,p=n._self._c||t;return p("div",[p("h1",[n._v("Input group")]),n._v(" "),p("p",{staticClass:"bd-lead"},[n._v("\n      Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.\n    ")]),n._v(" "),p("h2",[n._v("Example")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3"},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          @\n        ")]),n._v(" "),p("rd-input",{attrs:{type:"text",placeholder:"Username"}})],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("rd-input",{attrs:{type:"text",placeholder:"Recipient's username"}}),n._v(" "),p("span",{attrs:{slot:"append",text:""},slot:"append"},[n._v("\n          @example.com\n        ")])],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          https://example.com/users/\n        ")]),n._v(" "),p("rd-input")],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          $\n        ")]),n._v(" "),p("rd-input"),n._v(" "),p("span",{attrs:{slot:"append",text:""},slot:"append"},[n._v("\n          .00\n        ")])],1),n._v(" "),p("rd-input-group",[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          With textarea\n        ")]),n._v(" "),p("textarea")])],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group class="mb-3">\n  <span\n    slot="prepend"\n    text\n  >\n    @\n  </span>\n  <rd-input\n    type="text"\n    placeholder="Username"\n  />\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <rd-input\n    type="text"\n    placeholder="Recipient\'s username"\n  />\n  <span\n    slot="append"\n    text\n  >\n    @example.com\n  </span>\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <span\n    slot="prepend"\n    text\n  >\n    https://example.com/users/\n  </span>\n  <rd-input />\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <span\n    slot="prepend"\n    text\n  >\n    $\n  </span>\n  <rd-input/>\n    <span\n      slot="append"\n      text\n    >\n      .00\n    </span>\n</rd-input-group>\n<rd-input-group>\n  <span\n    slot="prepend"\n    text\n  >\n    With textarea\n  </span>\n  <textarea />\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Sizing")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3",attrs:{sm:""}},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          Small\n        ")]),n._v(" "),p("rd-input")],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          Default\n        ")]),n._v(" "),p("rd-input")],1),n._v(" "),p("rd-input-group",{attrs:{lg:""}},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          Large\n        ")]),n._v(" "),p("rd-input")],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group\n  class="mb-3"\n  sm\n>\n  <span\n    slot="prepend"\n    text\n  >\n    Small\n  </span>\n  <rd-input />\n</rd-input-group>\n<rd-input-group class=" mb-3">\n  <span\n    slot="prepend"\n    text\n  >\n    Default\n  </span>\n  <rd-input />\n</rd-input-group>\n<rd-input-group lg>\n  <span\n    slot="prepend"\n    text\n  >\n    Large\n  </span>\n  <rd-input />\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Checkboxes and radios")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3"},[p("div",{attrs:{slot:"prepend",text:""},slot:"prepend"},[p("rd-input",{attrs:{type:"checkbox"}})],1),n._v(" "),p("rd-input",{attrs:{type:"text"}})],1),n._v(" "),p("rd-input-group",[p("div",{attrs:{slot:"prepend",text:""},slot:"prepend"},[p("rd-input",{attrs:{type:"radio"}})],1),n._v(" "),p("rd-input",{attrs:{type:"text"}})],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group class="mb-3">\n  <div\n    slot="prepend"\n    text\n  >\n    <rd-input\n      type="checkbox"\n    />\n  </div>\n\n  <rd-input\n    type="text"\n  />\n</rd-input-group>\n<rd-input-group>\n  <div\n    slot="prepend"\n    text\n  >\n    <rd-input\n      type="radio"\n    />\n  </div>\n\n  <rd-input\n    type="text"\n  />\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Multiple inputs")]),n._v(" "),p("example",[p("rd-input-group",[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          First and last name\n        ")]),n._v(" "),p("rd-input"),n._v(" "),p("rd-input")],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group>\n  <span\n    slot="prepend"\n    text\n  >\n    First and last name\n  </span>\n  <rd-input />\n  <rd-input />\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Multiple addons")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3"},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          $\n        ")]),n._v(" "),p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          0.00\n        ")]),n._v(" "),p("rd-input")],1),n._v(" "),p("rd-input-group",[p("rd-input"),n._v(" "),p("span",{attrs:{slot:"append",text:""},slot:"append"},[n._v("\n          $\n        ")]),n._v(" "),p("span",{attrs:{slot:"append",text:""},slot:"append"},[n._v("\n          0.00\n        ")])],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group class="mb-3">\n  <span\n    slot="prepend"\n    text\n  >\n    $\n  </span>\n  <span\n    slot="prepend"\n    text\n  >\n    0.00\n  </span>\n  <rd-input />\n</rd-input-group>\n<rd-input-group>\n  <rd-input />\n  <span\n    slot="append"\n    text\n  >\n    $\n  </span>\n  <span\n    slot="append"\n    text\n  >\n    0.00\n  </span>\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Button addons")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3"},[p("rd-button",{attrs:{slot:"prepend","outline-secondary":"",type:"button"},slot:"prepend"},[n._v("\n          Button\n        ")]),n._v(" "),p("rd-input")],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("rd-input",{attrs:{placeholder:"Recipient's username"}}),n._v(" "),p("rd-button",{attrs:{slot:"append","outline-secondary":"",type:"button"},slot:"append"},[n._v("\n          Button\n        ")])],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("rd-button",{attrs:{slot:"prepend","outline-secondary":"",type:"button"},slot:"prepend"},[n._v("\n          Button\n        ")]),n._v(" "),p("rd-button",{attrs:{slot:"prepend","outline-secondary":"",type:"button"},slot:"prepend"},[n._v("\n          Button\n        ")]),n._v(" "),p("rd-input")],1),n._v(" "),p("rd-input-group",[p("rd-input",{attrs:{placeholder:"Recipient's username"}}),n._v(" "),p("rd-button",{attrs:{slot:"append","outline-secondary":"",type:"button"},slot:"append"},[n._v("\n          Button\n        ")]),n._v(" "),p("rd-button",{attrs:{slot:"append","outline-secondary":"",type:"button"},slot:"append"},[n._v("\n          Button\n        ")])],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group class="mb-3">\n  <rd-button\n    slot="prepend"\n    outline-secondary\n    type="button"\n  >\n    Button\n  </rd-button>\n  <rd-input />\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <rd-input placeholder="Recipient&apos;s username" />\n  <rd-button\n    slot="append"\n    outline-secondary\n    type="button"\n  >\n    Button\n  </rd-button>\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <rd-button\n    slot="prepend"\n    outline-secondary\n    type="button"\n  >\n    Button\n  </rd-button>\n  <rd-button\n    slot="prepend"\n    outline-secondary\n    type="button"\n  >\n    Button\n  </rd-button>\n\n  <rd-input />\n</rd-input-group>\n<rd-input-group>\n  <rd-input placeholder="Recipient&apos;s username" />\n  <rd-button\n    slot="append"\n    outline-secondary\n    type="button"\n  >\n    Button\n  </rd-button>\n  <rd-button\n    slot="append"\n    outline-secondary\n    type="button"\n  >\n    Button\n  </rd-button>\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Buttons with dropdowns")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3"},[p("rd-dropdown",{attrs:{slot:"prepend"},slot:"prepend"},[p("rd-button",{attrs:{slot:"button","outline-secondary":"",type:"button"},slot:"button"},[n._v("\n            Dropdown\n          ")]),n._v(" "),p("a",{attrs:{href:"javascript:"}},[n._v("\n            Action\n          ")]),n._v(" "),p("a",{attrs:{href:"javascript:"}},[n._v("\n            Another action\n          ")]),n._v(" "),p("a",{attrs:{href:"javascript:"}},[n._v("\n            Something else here\n          ")]),n._v(" "),p("div",{staticClass:"dropdown-divider"}),n._v(" "),p("a",{attrs:{href:"javascript:"}},[n._v("\n            Separated link\n          ")])],1),n._v(" "),p("rd-input")],1),n._v(" "),p("rd-input-group",[p("rd-input"),n._v(" "),p("rd-dropdown",{attrs:{slot:"append"},slot:"append"},[p("rd-button",{attrs:{slot:"button","outline-secondary":"",type:"button"},slot:"button"},[n._v("\n            Dropdown\n          ")]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Action\n          ")]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Another action\n          ")]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Something else here\n          ")]),n._v(" "),p("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Separated link\n          ")])],1)],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group class="mb-3">\n  <rd-dropdown slot="prepend">\n    <rd-button\n      slot="button"\n      outline-secondary\n      type="button"\n    >\n      Dropdown\n    </rd-button>\n    <a\n      href="javascript:"\n    >\n      Action\n    </a>\n    <a\n      href="javascript:"\n    >\n      Another action\n    </a>\n    <a\n      href="javascript:"\n    >\n      Something else here\n    </a>\n    <div class="dropdown-divider" />\n    <a\n      href="javascript:"\n    >\n      Separated link\n    </a>\n  </rd-dropdown>\n  <rd-input />\n</rd-input-group>\n<rd-input-group>\n  <rd-input />\n  <rd-dropdown slot="append">\n    <rd-button\n      slot="button"\n      outline-secondary\n      type="button"\n    >\n      Dropdown\n    </rd-button>\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Action\n    </a>\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Another action\n    </a>\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Something else here\n    </a>\n    <div\n      role="separator"\n      class="dropdown-divider"\n    />\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Separated link\n    </a>\n  </rd-dropdown>\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Segmented buttons")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3"},[p("rd-dropdown",{attrs:{slot:"prepend",inline:""},slot:"prepend"},[p("rd-button",{attrs:{slot:"button","outline-secondary":""},slot:"button"},[n._v("\n            Action\n          ")]),n._v(" "),p("rd-button",{attrs:{slot:"button","outline-secondary":""},slot:"button"},[p("span",{staticClass:"sr-only"},[n._v("\n              Toggle Dropdown\n            ")])]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Action\n          ")]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Another action\n          ")]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Something else here\n          ")]),n._v(" "),p("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Separated link\n          ")])],1),n._v(" "),p("rd-input")],1),n._v(" "),p("rd-input-group",[p("rd-input"),n._v(" "),p("rd-dropdown",{attrs:{slot:"append"},slot:"append"},[p("rd-button",{attrs:{slot:"button",type:"button","outline-secondary":""},slot:"button"},[n._v("\n            Action\n          ")]),n._v(" "),p("rd-button",{attrs:{slot:"button","outline-secondary":""},slot:"button"},[p("span",{staticClass:"sr-only"},[n._v("\n              Toggle Dropdown\n            ")])]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Action\n          ")]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Another action\n          ")]),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Something else here\n          ")]),n._v(" "),p("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),n._v(" "),p("a",{staticClass:"dropdown-item",attrs:{href:"javascript:"}},[n._v("\n            Separated link\n          ")])],1)],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group class="mb-3">\n  <rd-dropdown\n    slot="prepend"\n    inline\n  >\n    <rd-button\n      slot="button"\n      outline-secondary\n    >\n      Action\n    </rd-button>\n    <rd-button\n      slot="button"\n      outline-secondary\n    >\n      <span class="sr-only">\n        Toggle Dropdown\n      </span>\n    </rd-button>\n\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Action\n    </a>\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Another action\n    </a>\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Something else here\n    </a>\n    <div\n      role="separator"\n      class="dropdown-divider"\n    />\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Separated link\n    </a>\n  </rd-dropdown>\n  <rd-input />\n</rd-input-group>\n<rd-input-group>\n  <rd-input />\n  <rd-dropdown slot="append">\n    <rd-button\n      slot="button"\n      type="button"\n      outline-secondary\n    >\n      Action\n    </rd-button>\n    <rd-button\n      slot="button"\n      outline-secondary\n    >\n      <span class="sr-only">\n        Toggle Dropdown\n      </span>\n    </rd-button>\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Action\n    </a>\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Another action\n    </a>\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Something else here\n    </a>\n    <div\n      role="separator"\n      class="dropdown-divider"\n    />\n    <a\n      class="dropdown-item"\n      href="javascript:"\n    >\n      Separated link\n    </a>\n  </rd-dropdown>\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Custom select")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3"},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          Options\n        ")]),n._v(" "),p("rd-select",[p("option",{attrs:{value:"1"}},[n._v("\n            One\n          ")]),n._v(" "),p("option",{attrs:{value:"2"}},[n._v("\n            Two\n          ")]),n._v(" "),p("option",{attrs:{value:"3"}},[n._v("\n            Three\n          ")])])],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("rd-select",[p("option",{attrs:{value:"1"}},[n._v("\n            One\n          ")]),n._v(" "),p("option",{attrs:{value:"2"}},[n._v("\n            Two\n          ")]),n._v(" "),p("option",{attrs:{value:"3"}},[n._v("\n            Three\n          ")])]),n._v(" "),p("span",{attrs:{slot:"append",text:""},slot:"append"},[n._v("\n          Options\n        ")])],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("rd-button",{attrs:{slot:"prepend",type:"button","outline-secondary":""},slot:"prepend"},[n._v("\n          Button\n        ")]),n._v(" "),p("rd-select",[p("option",{attrs:{value:"1"}},[n._v("\n            One\n          ")]),n._v(" "),p("option",{attrs:{value:"2"}},[n._v("\n            Two\n          ")]),n._v(" "),p("option",{attrs:{value:"3"}},[n._v("\n            Three\n          ")])])],1),n._v(" "),p("rd-input-group",[p("rd-select",[p("option",{attrs:{value:"1"}},[n._v("\n            One\n          ")]),n._v(" "),p("option",{attrs:{value:"2"}},[n._v("\n            Two\n          ")]),n._v(" "),p("option",{attrs:{value:"3"}},[n._v("\n            Three\n          ")])]),n._v(" "),p("rd-button",{attrs:{slot:"append","outline-secondary":"",type:"button"},slot:"append"},[n._v("\n          Button\n        ")])],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group class="mb-3">\n  <span\n    slot="prepend"\n    text\n  >\n    Options\n  </span>\n  <rd-select>\n    <option value="1">\n      One\n    </option>\n    <option value="2">\n      Two\n    </option>\n    <option value="3">\n      Three\n    </option>\n  </rd-select>\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <rd-select>\n    <option value="1">\n      One\n    </option>\n    <option value="2">\n      Two\n    </option>\n    <option value="3">\n      Three\n    </option>\n  </rd-select>\n\n  <span\n    slot="append"\n    text\n  >\n    Options\n  </span>\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <rd-button\n    slot="prepend"\n    type="button"\n    outline-secondary\n  >\n    Button\n  </rd-button>\n\n  <rd-select>\n    <option value="1">\n      One\n    </option>\n    <option value="2">\n      Two\n    </option>\n    <option value="3">\n      Three\n    </option>\n  </rd-select>\n</rd-input-group>\n<rd-input-group>\n  <rd-select>\n    <option value="1">\n      One\n    </option>\n    <option value="2">\n      Two\n    </option>\n    <option value="3">\n      Three\n    </option>\n  </rd-select>\n\n  <rd-button\n    slot="append"\n    outline-secondary\n    type="button"\n  >\n    Button\n  </rd-button>\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Custom file input")]),n._v(" "),p("example",[p("rd-input-group",{staticClass:"mb-3"},[p("span",{attrs:{slot:"prepend",text:""},slot:"prepend"},[n._v("\n          Upload\n        ")]),n._v(" "),p("rd-input",{attrs:{type:"file"}},[n._v("\n          Choose file\n        ")])],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("rd-input",{attrs:{type:"file"}},[n._v("\n          Choose file\n        ")]),n._v(" "),p("span",{attrs:{slot:"append",text:""},slot:"append"},[n._v("\n          Upload\n        ")])],1),n._v(" "),p("rd-input-group",{staticClass:"mb-3"},[p("rd-button",{attrs:{slot:"prepend",type:"button","outline-secondary":""},slot:"prepend"},[n._v("\n          Button\n        ")]),n._v(" "),p("rd-input",{attrs:{type:"file"}},[n._v("\n          Choose file\n        ")])],1),n._v(" "),p("rd-input-group",[p("rd-input",{attrs:{type:"file"}},[n._v("\n          Choose file\n        ")]),n._v(" "),p("rd-button",{attrs:{slot:"append","outline-secondary":"",type:"button"},slot:"append"},[n._v("\n          Button\n        ")])],1)],1),n._v(" "),p("highlight",{attrs:{code:'<rd-input-group class="mb-3">\n  <span\n    slot="prepend"\n    text\n  >\n    Upload\n  </span>\n\n  <rd-input type="file">\n    Choose file\n  </rd-input>\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <rd-input type="file">\n    Choose file\n  </rd-input>\n  <span\n    slot="append"\n    text\n  >\n    Upload\n  </span>\n</rd-input-group>\n<rd-input-group class="mb-3">\n  <rd-button\n    slot="prepend"\n    type="button"\n    outline-secondary\n  >\n    Button\n  </rd-button>\n\n  <rd-input type="file">\n    Choose file\n  </rd-input>\n</rd-input-group>\n<rd-input-group>\n  <rd-input type="file">\n    Choose file\n  </rd-input>\n\n  <rd-button\n    slot="append"\n    outline-secondary\n    type="button"\n  >\n    Button\n  </rd-button>\n</rd-input-group>'}}),n._v(" "),p("h3",[n._v("Props")]),n._v("You can also use\n    "),p("nuxt-link",{attrs:{append:"",to:"../../mixins/size"}},[n._v("\n      Size\n    ")]),n._v("attributes.\n  ")],1)},[],!1,null,null,null);e.options.__file="InputGroup.vue";t.default=e.exports}}]);