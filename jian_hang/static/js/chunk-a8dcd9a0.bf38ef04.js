(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8dcd9a0"],{"7bb3":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"payIndex"},[1===parseInt(e.role)?a("div",{staticClass:"header"},[a("el-dropdown",{staticStyle:{"font-size":"16px","padding-right":"40px"},on:{command:e.chose}},[a("span",{staticClass:"el-dropdown-link cursor-pointer"},[e._v("转账制单"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown",size:"medium"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"pay-payee"}},[e._v("单笔付款")])],1)],1),a("router-link",{staticClass:"router-link-class",attrs:{to:"/main/pay/pay-account"}},[e._v("常用账户管理")])],1):2===parseInt(e.role)?a("div",{staticClass:"header"},[a("el-dropdown",{staticStyle:{"font-size":"16px","padding-right":"40px"},on:{command:e.chose}},[a("span",{staticClass:"el-dropdown-link cursor-pointer"},[e._v("转账复核"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown",size:"medium"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"pay-check"}},[e._v("按笔复核")])],1)],1)],1):e._e(),a("router-view")],1)},n=[],s={name:"PayIndex",computed:{role:function(){return this.$store.state.role}},methods:{chose:function(e){switch(e){case"pay-payee":this.goRouter("/main/pay/pay-transfer");break;case"pay-payee-group":this.goRouter("/main/pay/pay-payee-group");break;case"pay-check":this.goRouter("/main/pay/pay-check");break}},goRouter:function(e){this.$router.push(e)}}},r=s,i=(a("c4a1"),a("9ca4")),c=Object(i["a"])(r,o,n,!1,null,"4eb30242",null);t["default"]=c.exports},c4a1:function(e,t,a){"use strict";var o=a("f2a9"),n=a.n(o);n.a},f2a9:function(e,t,a){}}]);
//# sourceMappingURL=chunk-a8dcd9a0.bf38ef04.js.map