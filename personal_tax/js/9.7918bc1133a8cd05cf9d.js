webpackJsonp([9],{"5E8n":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("RB1F"),r=a.n(l);for(var i in l)"default"!==i&&function(t){a.d(e,t,function(){return l[t]})}(i);var o=a("Z3KI");var s=function(t){a("Rl6o"),a("zwa8")},n=a("VU/8")(r.a,o.a,!1,s,"data-v-e1c39098",null);e.default=n.exports},RB1F:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l,r=a("Dd8w"),i=(l=r)&&l.__esModule?l:{default:l},o=a("NYxO");e.default={components:{},data:function(){return{}},computed:(0,i.default)({},(0,o.mapGetters)(["company"]),{dataHistory:function(){return this.$store.state.form.jiaokuanForm}}),created:function(){this.$emit("router",this.$router.history.current.name)},mounted:function(){},methods:{submitForm:function(t){this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")})},showNull:function(){this.$alert("本系统为教学系统，目前只提供常用操作功能噢","信息",{confirmButtonText:"确定"})},nullClick:function(){this.showNull()}}}},Rl6o:function(t,e){},Z3KI:function(t,e,a){"use strict";var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collection"},[a("div",{staticClass:"rg-top",staticStyle:{padding:"0"}},[a("div",{staticClass:"rg-top-bottom"},[a("div",[a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("查看明细")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("导出")])],1)])]),t._v(" "),a("div",{staticClass:"rg-top",staticStyle:{margin:"10px"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"税款所属期"}},[a("el-date-picker",{staticStyle:{width:"48%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"}}),t._v("\n        -\n        "),a("el-date-picker",{staticStyle:{width:"48%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("重置")])],1)],1)],1),t._v(" "),a("div",{staticStyle:{margin:"0 10px"}},[a("div",{staticClass:"con-div",staticStyle:{"overflow-y":"auto",display:"block"},attrs:{id:"con_in"}},[a("el-table",{staticStyle:{"max-width":"100%"},attrs:{data:t.dataHistory,border:""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"所得月份"}},[[t._v("\n            "+t._s(t.company[0].shenbao_month)+"\n          ")]],2),t._v(" "),a("el-table-column",{attrs:{prop:"shenbaobiao",label:"申报表"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tuibu",label:"应补（退）税额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"shijiao",label:"实缴税额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"缴款状态"}})],1)],1)])])},staticRenderFns:[]};e.a=l},zwa8:function(t,e){}});
//# sourceMappingURL=9.7918bc1133a8cd05cf9d.js.map