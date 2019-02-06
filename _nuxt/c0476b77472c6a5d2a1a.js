(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{702:function(n,e,a){"use strict";a.r(e);var r={name:"Collapse",data:function(){return{accordion:1,test:!1,props:[["show","v-model","Boolean","false",""]],methods:[["toggle","{Boolean} show","To show Toggles or hide.(optional)","Returns to the caller before the collapsible element has actually been shown or hidden true/false"]]}}},t=a(1),i=Object(t.a)(r,function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",[a("h1",[n._v("Collapse")]),n._v(" "),a("p",{staticClass:"bd-lead"},[n._v("\n      The Collapse element shows and hides content with a built-in slide in/out animation. You might use this to create a panel of settings for your application, with sub-sections that can be expanded and collapsed.\n    ")]),n._v(" "),a("h2",[n._v("Example")]),n._v(" "),a("example",[a("p",[a("rd-button",{attrs:{primary:"",tag:"a",href:"javascript:"},nativeOn:{click:function(e){n.test=!n.test}}},[n._v("\n          Link with href\n        ")]),n._v(" "),a("rd-button",{attrs:{primary:"",type:"button"},nativeOn:{click:function(e){n.$refs.collapse1.toggle()}}},[n._v("\n          Button with data-target\n        ")])],1),n._v(" "),a("rd-collapse",{ref:"collapse1",model:{value:n.test,callback:function(e){n.test=e},expression:"test"}},[a("div",{staticClass:"card card-body"},[n._v("\n          Anim pariatur cliche reprehenderit,\n          enim eiusmod high life accusamus terry richardson ad squid.\n          Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident.\n        ")])])],1),n._v(" "),a("highlight",{attrs:{code:'<rd-button\n  primary\n  tag="a"\n  href="javascript:"\n  @click.native="test=!test"\n>\n  Link with href\n</rd-button>\n<rd-button\n  primary\n  type="button"\n  @click.native="$refs.collapse1.toggle()"\n>\n  Button with data-target\n</rd-button>\n</p>\n<rd-collapse\nref="collapse1"\nv-model="test"\n>\n<div class="card card-body">\n  Anim pariatur cliche reprehenderit,\n  enim eiusmod high life accusamus terry richardson ad squid.\n  Nihil anim keffiyeh helvetica,\n  craft beer labore wes anderson cred nesciunt sapiente ea proident.\n</div>\n</rd-collapse>\n'}}),n._v(" "),a("h3",[n._v("Multiple targets")]),n._v(" "),a("example",[a("p",[a("rd-button",{attrs:{tag:"a",primary:"",href:"javascript:"},nativeOn:{click:function(e){n.$refs.collapse2.toggle()}}},[n._v("\n          Toggle first element\n        ")]),n._v(" "),a("rd-button",{attrs:{primary:"",type:"button"},nativeOn:{click:function(e){n.$refs.collapse3.toggle()}}},[n._v("\n          Toggle second element\n        ")]),n._v(" "),a("rd-button",{attrs:{primary:"",type:"button"},nativeOn:{click:function(e){n.$refs.collapse2.toggle()&&n.$refs.collapse3.toggle()}}},[n._v("\n          Toggle both elements\n        ")])],1),n._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("rd-collapse",{ref:"collapse2",staticClass:"multi-collapse"},[a("rd-card",[a("rd-card-body",[n._v("\n                Anim pariatur cliche reprehenderit,\n                enim eiusmod high life accusamus terry richardson ad squid.\n                Nihil anim keffiyeh helvetica,\n                craft beer labore wes anderson cred nesciunt sapiente ea proident.\n              ")])],1)],1)],1),n._v(" "),a("div",{staticClass:"col"},[a("rd-collapse",{ref:"collapse3",staticClass:"multi-collapse"},[a("rd-card",[a("rd-card-body",[n._v("\n                Anim pariatur cliche reprehenderit,\n                enim eiusmod high life accusamus terry richardson ad squid.\n                Nihil anim keffiyeh helvetica,\n                craft beer labore wes anderson cred nesciunt sapiente ea proident.\n              ")])],1)],1)],1)])]),n._v(" "),a("highlight",{attrs:{code:'<p>\n  <rd-button\n    tag="a"\n    primary\n    href="javascript:"\n    @click.native="$refs.collapse2.toggle()"\n  >\n    Toggle first element\n  </rd-button>\n  <rd-button\n    primary\n    type="button"\n    @click.native="$refs.collapse3.toggle()"\n  >\n    Toggle second element\n  </rd-button>\n  <rd-button\n    primary\n    type="button"\n    @click.native="$refs.collapse2.toggle()&&$refs.collapse3.toggle()"\n  >\n    Toggle both elements\n  </rd-button>\n</p>\n<div class="row">\n  <div class="col">\n    <rd-collapse\n      ref="collapse2"\n      class=" multi-collapse"\n    >\n      <rd-card>\n        <rd-card-body>\n          Anim pariatur cliche reprehenderit,\n          enim eiusmod high life accusamus terry richardson ad squid.\n          Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident.\n        </rd-card-body>\n      </rd-card>\n    </rd-collapse>\n  </div>\n  <div class="col">\n    <rd-collapse\n      ref="collapse3"\n      class=" multi-collapse"\n    >\n      <rd-card>\n        <rd-card-body>\n          Anim pariatur cliche reprehenderit,\n          enim eiusmod high life accusamus terry richardson ad squid.\n          Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident.\n        </rd-card-body>\n      </rd-card>\n    </rd-collapse>\n  </div>\n</div>'}}),n._v(" "),a("h3",[n._v("Accordion example")]),n._v(" "),a("example",[a("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[a("rd-card",[a("rd-card-header",{attrs:{id:"headingOne"}},[a("h5",{staticClass:"mb-0"},[a("rd-button",{attrs:{link:"",type:"button"},nativeOn:{click:function(e){n.accordion=1}}},[n._v("\n                Collapsible Group Item #1\n              ")])],1)]),n._v(" "),a("rd-collapse",{attrs:{show:1===n.accordion},on:{change:function(e){return e&&(n.accordion=1)}}},[a("rd-card-body",[n._v("\n              Anim pariatur cliche reprehenderit,\n              enim eiusmod high life accusamus terry richardson ad squid.\n              3 wolf moon officia aute,\n              non cupidatat skateboard dolor brunch.\n              Food truck quinoa nesciunt laborum eiusmod.\n              Brunch 3 wolf moon tempor,\n              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n              Nihil anim keffiyeh helvetica,\n              craft beer labore wes anderson cred nesciunt sapiente ea proident.\n              Ad vegan excepteur butcher vice lomo.\n              Leggings occaecat craft beer farm-to-table,\n              raw denim aesthetic synth nesciunt\n              you probably havent heard of them accusamus labore sustainable VHS.\n            ")])],1)],1),n._v(" "),a("rd-card",[a("rd-card-header",[a("h5",{staticClass:"mb-0"},[a("rd-button",{attrs:{link:"",type:"button"},nativeOn:{click:function(e){n.accordion=2}}},[n._v("\n                Collapsible Group Item #2\n              ")])],1)]),n._v(" "),a("rd-collapse",{attrs:{show:2===n.accordion},on:{change:function(e){return e&&(n.accordion=2)}}},[a("rd-card-body",[n._v("\n              Anim pariatur cliche reprehenderit,\n              enim eiusmod high life accusamus terry richardson ad squid.\n              3 wolf moon officia aute,\n              non cupidatat skateboard dolor brunch.\n              Food truck quinoa nesciunt laborum eiusmod.\n              Brunch 3 wolf moon tempor,\n              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n              Nihil anim keffiyeh helvetica,\n              craft beer labore wes anderson cred nesciunt sapiente ea proident.\n              Ad vegan excepteur butcher vice lomo.\n              Leggings occaecat craft beer farm-to-table,\n              raw denim aesthetic synth nesciunt\n              you probably havent heard of them accusamus labore sustainable VHS.\n            ")])],1)],1),n._v(" "),a("rd-card",[a("rd-card-header",[a("h5",{staticClass:"mb-0"},[a("rd-button",{attrs:{link:"",type:"button"},nativeOn:{click:function(e){n.accordion=3}}},[n._v("\n                Collapsible Group Item #3\n              ")])],1)]),n._v(" "),a("rd-collapse",{attrs:{show:3===n.accordion},on:{change:function(e){return e&&(n.accordion=3)}}},[a("rd-card-body",[n._v("\n              Anim pariatur cliche reprehenderit,\n              enim eiusmod high life accusamus terry richardson ad squid.\n              3 wolf moon officia aute,\n              non cupidatat skateboard dolor brunch.\n              Food truck quinoa nesciunt laborum eiusmod.\n              Brunch 3 wolf moon tempor,\n              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n              Nihil anim keffiyeh helvetica,\n              craft beer labore wes anderson cred nesciunt sapiente ea proident.\n              Ad vegan excepteur butcher vice lomo.\n              Leggings occaecat craft beer farm-to-table,\n              raw denim aesthetic synth nesciunt\n              you probably havent heard of them accusamus labore sustainable VHS.\n            ")])],1)],1)],1)]),n._v(" "),a("highlight",{attrs:{code:'<div\n  id="accordionExample"\n  class="accordion"\n>\n  <rd-card>\n    <rd-card-header\n      id="headingOne"\n    >\n      <h5 class="mb-0">\n        <rd-button\n          link\n          type="button"\n          @click.native="accordion=1"\n        >\n          Collapsible Group Item #1\n        </rd-button>\n      </h5>\n    </rd-card-header>\n\n    <rd-collapse\n      :show="accordion===1"\n      @change="v=>v&&(accordion=1)"\n    >\n      <rd-card-body>\n        ...\n      </rd-card-body>\n    </rd-collapse>\n  </rd-card>\n  <rd-card>\n    <rd-card-header>\n      <h5 class="mb-0">\n        <rd-button\n          link\n          type="button"\n          @click.native="accordion=2"\n        >\n          Collapsible Group Item #2\n        </rd-button>\n      </h5>\n    </rd-card-header>\n    <rd-collapse\n      :show="accordion===2"\n      @change="v=>v&&(accordion=2)"\n    >\n      <rd-card-body>\n        ...\n      </rd-card-body>\n    </rd-collapse>\n  </rd-card>\n  <rd-card>\n    <rd-card-header>\n      <h5 class="mb-0">\n        <rd-button\n          link\n          type="button"\n          @click.native="accordion=3"\n        >\n          Collapsible Group Item #3\n        </rd-button>\n      </h5>\n    </rd-card-header>\n    <rd-collapse\n      :show="accordion===3"\n      @change="v=>v&&(accordion=3)"\n    >\n      <rd-card-body>\n        ...\n      </rd-card-body>\n    </rd-collapse>\n  </rd-card>\n</div>'}}),n._v(" "),a("h2",[n._v("Props")]),n._v(" "),a("properties",{attrs:{type:"props",data:n.props}}),n._v(" "),a("h2",[n._v("Methods")]),n._v(" "),a("properties",{attrs:{type:"methods",data:n.methods}})],1)},[],!1,null,null,null);i.options.__file="Collapse.vue";e.default=i.exports}}]);