webpackJsonp([53],{oCab:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t._v("当前第"+t._s(t.currentPage)+"页")]),t._v(" "),a("nav",{staticClass:"mt-4 spiritPagination",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item disabled",on:{click:function(e){return t.prevOrNext(-1)}}},[t._m(0)]),t._v(" "),t._l(t.pages,function(e,s){return a("li",{key:s,staticClass:"page",on:{click:function(a){return t.select(e)}}},[a("a",{staticClass:"page-link",class:{actived:e===t.currentPage},attrs:{href:"javascript:void(0);"}},[t._v(t._s(e))])])}),t._v(" "),a("li",{staticClass:"page-item",on:{click:function(e){return t.prevOrNext(1)}}},[t._m(1)])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"javascript:void(0);","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("«")]),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Previous")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"javascript:void(0);","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("»")]),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Next")])])}]};var i=a("C7Lr")({data:function(){return{currentPage:1,totalPages:6}},computed:{pages:function(){var t=this.currentPage,e=this.totalPages;return t<=5?[1,2,3,4,5,6,7,8,9,"...",e]:t>=e-4?[1,"...",e-8,e-7,e-6,e-5,e-4,e-3,e-2,e-1,e]:[1,"...",t-3,t-2,t-1,t,t+1,t+2,t+3,"...",e]}},methods:{select:function(t){t!==this.currentPage&&"string"!=typeof t&&(this.currentPage=t)},prevOrNext:function(t){this.currentPage+=t,this.currentPage<1?this.currentPage=1:this.currentPage>this.totalPages&&(this.currentPage=this.totalPages)}}},s,!1,function(t){a("u324")},null,null);e.default=i.exports},u324:function(t,e){}});
//# sourceMappingURL=53.756c45320e95576ca0ac.js.map