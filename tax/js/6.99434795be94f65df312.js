webpackJsonp([6],{PoaY:function(t,a,s){"use strict";(function(t){var _=s("PKHo");a.a={mixins:[_.a],data:function(){return{name:41,setting:[],com:[],taxes:this.$store.state.isConfirmed.taxes_status}},computed:{formData:function(){return this.$store.state.tableData[this.name]}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;this.com=this.$store.state.companyCurrent.gscompany;for(var a=this.$store.state.companyCurrent.yhs,s=[],_=0;_<a.length;_++)a[_].taxes_status==this.taxes&&s.push(a[_]);this.setting=s,setTimeout(function(){t.formData&&t.recoverFormData()},150)},recoverFormData:function(){this.$Loading.start();var a=this;t("input").each(function(){var s=this,_=t(this).attr("name");a.formData.map(function(a){a.name===_&&t(s).val(a.value)})}),this.$Loading.finish()}}}}).call(a,s("hcrA"))},hIwm:function(t,a){},xzC2:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var _=s("PoaY"),e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"p2"},[s("div",{staticClass:"TT_1"},[s("P",{staticClass:"PP1"},[t._v("印花税申报回执")]),t._v(" "),s("P",{staticClass:"PP2"},[t._v("申报回执编号：10023716000041830489")]),t._v(" "),s("P",{staticClass:"PP3"},[t._v("企业名称："),s("span",[t._v(t._s(t.com.firm_name)+"（纳税人识别号："+t._s(t.com.firm_code)+"）")])]),t._v(" "),s("P",{staticClass:"PP4"},[t._v("您当前属期扣缴印花税已经申报成功。系统接收申报时间为："+t._s(t.com.month)+"-"+t._s((new Date).getDate()+":"+(new Date).getHours()+":"+(new Date).getMinutes())+" ")]),t._v(" "),s("P",{staticClass:"PP5"},[t._v("淄博市张店分局")]),t._v(" "),s("P",{staticClass:"PP6"},[t._v(t._s(t.com.month)+"-"+t._s((new Date).getDate()))])],1),t._v(" "),s("P",{staticClass:"TT1",staticStyle:{"text-align":"center"}},[t._v("印花税纳税申报表")]),t._v(" "),s("div",{staticClass:"Tabulation"},[s("form",[s("table",{staticClass:"yhs",attrs:{cellpadding:"0",width:"100%",cellspacing:"0",border:"1"}},[s("tr",[s("td",{staticStyle:{width:"150px"}},[t._v("纳税人识别号")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.firm_code))]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("纳税人名称")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.firm_name))]),t._v(" "),s("td",[t._v("申报日期")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.month)+"-"+t._s((new Date).getDate()))])]),t._v(" "),s("tr",[s("td",[t._v("税款所属期起")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.month)+"-01")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("税款所属期止")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.month)+"-30")]),t._v(" "),s("td",[t._v("申报类型")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("正常申报")])]),t._v(" "),s("tr",[s("td",[t._v("纳税人类型")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("单位")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("登记注册类型")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.firm_type))]),t._v(" "),s("td",[t._v("所属行业")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.firm_trade))])]),t._v(" "),s("tr",[s("td",[t._v("身份证件类型")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("居民身份证")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("身份证件号码")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.firm_legal_person_id))]),t._v(" "),s("td",[t._v("联系方式")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.com.firm_telephone))])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._l(t.setting,function(a,_){return a.taxes_status==t.taxes?s("tr",{staticClass:"addtr"},[s("td",[t._v(t._s(a.taxable_name))]),t._v(" "),s("td",{staticStyle:{"background-color":"#FFF"}},[s("input",{attrs:{name:_+1+"_1",readonly:""}})]),t._v(" "),s("td",[s("input",{attrs:{name:_+1+"_2",readonly:""}})]),t._v(" "),s("td",[s("input",{staticClass:"tiaochu",attrs:{name:_+1+"_3",readonly:""}})]),t._v(" "),s("td",[s("input",{staticClass:"tiaochu",attrs:{name:_+1+"_4",readonly:""}})]),t._v(" "),s("td",[s("input",{attrs:{name:_+1+"_5",readonly:""}})]),t._v(" "),s("td",{staticStyle:{"background-color":"#FFF"}},[s("input",{attrs:{name:_+1+"_6",readonly:""}})]),t._v(" "),s("td",{staticStyle:{"background-color":"#FFF"}},[s("input",{attrs:{name:_+1+"_7",readonly:"",type:"text"}})]),t._v(" "),s("td",{staticStyle:{"background-color":"#FFF"}},[s("input",{attrs:{name:_+1+"_8",readonly:""}})]),t._v(" "),s("td",[s("input",{attrs:{name:_+1+"_9",readonly:""}})])]):t._e()}),t._v(" "),t._m(3)],2)])]),t._v(" "),t._m(4)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",{attrs:{rowspan:"3"}},[t._v("应税凭证名称")]),t._v(" "),s("td",{attrs:{rowspan:"2"}},[t._v("计税金额或件数")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("核定征收")]),t._v(" "),s("td",{attrs:{rowspan:"2"}},[t._v("适用税率")]),t._v(" "),s("td",{attrs:{rowspan:"2"}},[t._v("本期应纳税额")]),t._v(" "),s("td",{attrs:{rowspan:"2"}},[t._v("本期已缴税额")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("本期减免税额")]),t._v(" "),s("td",{attrs:{rowspan:"2"}},[t._v("本期应补（退）税额")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",[this._v("核定计税依据")]),this._v(" "),a("td",[this._v("核定比例")]),this._v(" "),a("td",[this._v("减免性质代码")]),this._v(" "),a("td",[this._v("减免税额")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("5=1*4 or 5=1*3*4 or 5=2*4")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("7")]),t._v(" "),s("td",[t._v("8")]),t._v(" "),s("td",[t._v("9=5-6-8")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",[t._v("合计")]),t._v(" "),s("td",[t._v("--")]),t._v(" "),s("td",[t._v("--")]),t._v(" "),s("td",[t._v("--")]),t._v(" "),s("td",[t._v("--")]),t._v(" "),s("td",[s("input",{attrs:{name:"h_5",readonly:"",value:"0.00"}})]),t._v(" "),s("td",[s("input",{attrs:{name:"h_6",readonly:"",value:"0.00"}})]),t._v(" "),s("td",[t._v("--")]),t._v(" "),s("td",[s("input",{attrs:{name:"h_8",readonly:"",value:"0.00"}})]),t._v(" "),s("td",[s("input",{attrs:{name:"h_9",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-text-center",staticStyle:{"margin-top":"15px"}},[a("a",{attrs:{href:"#/home"}},[a("button",{staticClass:"uk-button uk-button-primary"},[a("i",{staticClass:"uk-icon-close"}),this._v(" 关闭")])])])}]};var n=function(t){s("hIwm")},r=s("C7Lr")(_.a,e,!1,n,"data-v-21611f9a",null);a.default=r.exports}});
//# sourceMappingURL=6.99434795be94f65df312.js.map