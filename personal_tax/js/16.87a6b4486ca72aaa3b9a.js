webpackJsonp([16],{EH4R:function(t,i){},LMDD:function(t,i){},O3UZ:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("uM2x"),a=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,function(){return o[t]})}(n);var c=e("Xmvs");var r=function(t){e("LMDD"),e("EH4R")},s=e("VU/8")(a.a,c.a,!1,r,"data-v-1e7bb512",null);i.default=s.exports},Xmvs:function(t,i,e){"use strict";var o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"declaration collection"},[e("div",{staticClass:"rg-top-top"},[e("div",{class:1==t.path?"top-div-active top-div":"top-div",on:{click:function(i){return t.pathClick(1)}}},[t._v("1、收入及减除项填写")]),t._v(" "),e("div",{staticClass:"top-arrow"},[t._v(">>")]),t._v(" "),e("div",{class:2==t.path?"top-div-active top-div":"top-div",on:{click:function(i){return t.pathClick(2)}}},[t._v("2、税款计算")]),t._v(" "),e("div",{staticClass:"top-arrow"},[t._v(">>")]),t._v(" "),e("div",{class:3==t.path?"top-div-active top-div":"top-div",on:{click:function(i){return t.pathClick(3)}}},[t._v("3、附表填写")]),t._v(" "),e("div",{staticClass:"top-arrow"},[t._v(">>")]),t._v(" "),e("div",{class:4==t.path?"top-div-active top-div":"top-div",on:{click:function(i){return t.pathClick(4)}}},[t._v("4、申报表报送")])]),t._v(" "),e("router-view",{on:{pathNumber:t.setActive}})],1)},staticRenderFns:[]};i.a=o},uM2x:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={components:{},data:function(){return{allIncomeTable:[],path:1}},created:function(){this.$emit("router",this.$router.history.current.name)},mounted:function(){},methods:{submitForm:function(t){console.log(this.ruleForm.personStatus),this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")})},showNull:function(){this.$alert("本系统为教学系统，目前只提供常用操作功能噢","信息",{confirmButtonText:"确定"})},nullClick:function(){this.showNull()},pathClick:function(t){switch(t){case 1:this.$router.push("/declaration/allDeclaration");break;case 2:this.$router.push("/declaration/taxCalculation");break;case 3:this.$router.push("/declaration/extraTable");break;case 4:this.$router.push("/declaration/application")}},setActive:function(t){this.path=t}}}}});
//# sourceMappingURL=16.87a6b4486ca72aaa3b9a.js.map