webpackJsonp([30],{"3C0m":function(t,e,a){"use strict";(function(t){var s=a("PKHo");e.a={mixins:[s.a],data:function(){return{name:15,setting:[],form:{a14_1:0,a14_2:0,a14_3:"0.00",a14_4:"0.00",a16_3:"0.00",a16_4:"0.00",a32_1:0,a32_2:0,a32_3:"0.00",a32_4:"0.00"}}},computed:{formData:function(){return this.$store.state.tableData[this.name]}},mounted:function(){this.inputChangeEvent(),this.inputClickEvent(),this.getSetting(),this.formrevise()},methods:{getSetting:function(){this.formData&&this.recoverFormData(),this.initData()},initData:function(){this.$Loading.start();var e=this,a=function(a){t("input").each(function(){if(t(this).attr("name")===a)return t(this).val((1*e.setting[a]).toFixed(2)),t(this).trigger("blur"),!1})};for(var s in this.setting)a(s);this.$Loading.finish()},recoverFormData:function(){this.$Loading.start();var e=this;t("input").each(function(){var a=this,s=t(this).attr("name");e.formData.map(function(e){e.name===s&&t(a).val(e.value)})}),this.$Loading.finish()},fn:function(){this.fn1("1_3",["2_3","3_3","4_3","5_3","6_3","7_3","8_3","10_3","11_3"],2),this.fn1("1_4",["2_4","3_4","4_4","5_4","6_4","7_4","8_4","10_4","11_4"],2),this.fn3("12_3",3,[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),this.fn3("12_4",4,[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),this.fn1("15_3",["15_1","15_2"],1),this.fn2([18,19,20,21,22,23,26,27,28,29,30,35,41]),this.fn1("31_3",["32_3","33_3","34_3","35_3"],2),this.fn1("31_4",["32_4","33_4","34_4","35_4"],2),this.fn1("36_3",["37_3","38_3","39_3","40_3","41_3","42_3"],2),this.fn1("36_4",["37_4","38_4","39_4","40_4","41_4","42_4"],2),this.fn1("45_3",["1_3","12_3","31_3","36_3","43_3","44_3"],2),this.fn1("45_4",["1_4","12_4","31_4","36_4","43_4","44_4"],2)},fn1:function(e,a,s){if(t("input[name="+a[0]+"]").val())var i=parseFloat(t("input[name="+a[0]+"]").val());else i=0;for(var r=1;r<a.length;r++){var n=t("input[name="+a[r]+"]");n.val()&&(1==s?i-=parseFloat(n.val()):2==s&&(i+=parseFloat(n.val())))}t("input[name="+e+"]").val(i.toFixed(2))},fn2:function(e){for(var a=0;a<e.length;a++){var s=0,i=parseFloat(t("input[name="+e[a]+"_1]").val());i||(i=0);var r=parseFloat(t("input[name="+e[a]+"_2]").val());(s=r?i-r:i)>0?(t("input[name="+e[a]+"_3]").val(s.toFixed(2)),t("input[name="+e[a]+"_4]")&&t("input[name="+e[a]+"_4]").val("0.00")):(t("input[name="+e[a]+"_3]").val("0.00"),t("input[name="+e[a]+"_4]")&&t("input[name="+e[a]+"_4]").val(Math.abs(s).toFixed(2)))}},fn3:function(e,a,s){for(var i=0,r=0;r<s.length;r++)t("input[name="+s[r]+"_"+a+"]").val()&&(i+=1*t("input[name="+s[r]+"_"+a+"]").val());t("input[name="+e+"]").val(i.toFixed(2))},formrevise:function(){var t="",e="",a="";if(this.$store.state.tableData[16]){this.form.a14_1=this.$store.state.tableData[16][58].value,this.form.a14_2=this.$store.state.tableData[16][61].value;var s=this.$store.state.tableData[16][62].value;s>=0?this.form.a14_3=s:this.form.a14_4=Math.abs(s).toFixed(2)}else t="《职工薪酬支出及纳税调整明细表(A105050)》";if(this.$store.state.tableData[17]){var i=this.$store.state.tableData[17][11].value;i>=0?this.form.a16_3=i:this.form.a16_4=Math.abs(i)}else e="《广告费和业务宣传费跨年度纳税调整明细表(A105060)》";if(this.$store.state.tableData[18]){this.form.a32_1=this.$store.state.tableData[18][278].value,this.form.a32_2=this.$store.state.tableData[18][281].value;var r=this.$store.state.tableData[18][285].value;r>=0?this.form.a32_3=r:this.form.a32_4=Math.abs(r)}else a="《广告费和业务宣传费跨年度纳税调整明细表(A105060)》";""==t&&""==e&&""==a||this.eg("请按照填表顺序正确填写:"+t+e+a+"表未填写！")}}}}).call(e,a("hcrA"))},cdQH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("3C0m"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p2"},[a("h1",{staticClass:"uk-text-center uk-margin-large-top uk-margin-large-bottom"},[t._v("纳税调整项目明细表")]),t._v(" "),a("form",[a("table",{staticStyle:{margin:"0px auto"},attrs:{cellpadding:"0",cellspacing:"0",border:"1",width:"100%"}},[a("tbody",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("14")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（二）职工薪酬（填写A105050）")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a14_1,expression:"form.a14_1"}],attrs:{type:"text",name:"14_1",readonly:""},domProps:{value:t.form.a14_1},on:{input:function(e){e.target.composing||t.$set(t.form,"a14_1",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a14_2,expression:"form.a14_2"}],attrs:{type:"text",name:"14_2",readonly:""},domProps:{value:t.form.a14_2},on:{input:function(e){e.target.composing||t.$set(t.form,"a14_2",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a14_3,expression:"form.a14_3"}],attrs:{type:"text",name:"14_3",readonly:""},domProps:{value:t.form.a14_3},on:{input:function(e){e.target.composing||t.$set(t.form,"a14_3",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a14_4,expression:"form.a14_4"}],attrs:{type:"text",name:"14_4",readonly:"",value:"0.00"},domProps:{value:t.form.a14_4},on:{input:function(e){e.target.composing||t.$set(t.form,"a14_4",e.target.value)}}})])]),t._v(" "),t._m(15),t._v(" "),a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("16")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（四）广告费和业务宣传费支出（填写A105060）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a16_3,expression:"form.a16_3"}],attrs:{type:"text",name:"16_3",readonly:""},domProps:{value:t.form.a16_3},on:{input:function(e){e.target.composing||t.$set(t.form,"a16_3",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a16_4,expression:"form.a16_4"}],attrs:{type:"text",name:"16_4",readonly:""},domProps:{value:t.form.a16_4},on:{input:function(e){e.target.composing||t.$set(t.form,"a16_4",e.target.value)}}})])]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("32")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（一）资产折旧、摊销（填写A105080）")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a32_1,expression:"form.a32_1"}],attrs:{type:"text",name:"32_1",readonly:""},domProps:{value:t.form.a32_1},on:{input:function(e){e.target.composing||t.$set(t.form,"a32_1",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a32_2,expression:"form.a32_2"}],attrs:{type:"text",name:"32_2",readonly:""},domProps:{value:t.form.a32_2},on:{input:function(e){e.target.composing||t.$set(t.form,"a32_2",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a32_3,expression:"form.a32_3"}],attrs:{type:"text",name:"32_3",readonly:""},domProps:{value:t.form.a32_3},on:{input:function(e){e.target.composing||t.$set(t.form,"a32_3",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a32_4,expression:"form.a32_4"}],attrs:{type:"text",name:"32_4",readonly:""},domProps:{value:t.form.a32_4},on:{input:function(e){e.target.composing||t.$set(t.form,"a32_4",e.target.value)}}})])]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43)])])]),t._v(" "),a("div",{staticClass:"uk-text-center",staticStyle:{"margin-top":"15px"}},[a("button",{staticClass:"uk-button uk-button-primary",on:{click:t.saveForm}},[a("i",{staticClass:"uk-icon-save"}),t._v(" 保存")]),t._v(" "),a("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return t.dataRestore()}}},[a("i",{staticClass:"uk-icon-close"}),t._v(" 删除")]),t._v(" "),a("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return t.useless()}}},[a("i",{staticClass:"uk-icon-file-excel-o"}),t._v(" 导出Excel\n    ")]),t._v(" "),a("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return t.useless()}}},[a("i",{staticClass:"uk-icon-print"}),t._v(" 打印")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center",attrs:{rowspan:"2",width:"40"}},[t._v("行次")]),t._v(" "),a("td",{attrs:{rowspan:"2"}},[t._v("项　　目")]),t._v(" "),a("td",[t._v("账载金额")]),t._v(" "),a("td",[t._v("税收金额")]),t._v(" "),a("td",[t._v("调增金额")]),t._v(" "),a("td",[t._v("调减金额")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("1")]),this._v(" "),e("td",[this._v("2")]),this._v(" "),e("td",[this._v("3")]),this._v(" "),e("td",[this._v("4")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("1")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("一、收入类调整项目（2+3+4+5+6+7+8+10+11）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"1_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"1_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("2")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（一）视同销售收入（填写A105010）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"2_2",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"2_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("3")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（二）未按权责发生制原则确认的收入（填写A105020）")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"3_1",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"3_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"3_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"3_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("4")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（三）投资收益（填写A105030）")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"4_1",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"4_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"4_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"4_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("5")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（四）按权益法核算长期股权投资对初始投资成本调整确认收益")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"5_4",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("6")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（五）交易性金融资产初始投资调整")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"6_3",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("7")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（六）公允价值变动净损益")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"7_1",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"7_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"7_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("8")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（七）不征税收入")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"8_3",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"8_4",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("9")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　其中：专项用途财政性资金（填写A105040）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"9_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"9_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("10")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（八）销售折扣、折让和退回")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"10_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"10_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"10_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"10_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("11")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（九）其他")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"11_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"11_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"11_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"11_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("12")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("二、扣除类调整项目（13+14+...+24+26+27+28+29+30）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"12_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"12_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("13")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（一）视同销售成本（填写A105010）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"13_2",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"13_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("15")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（三）业务招待费支出")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"15_1",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"15_2",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"15_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("17")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（五）捐赠支出（填写A105070）")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"17_1",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"17_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"17_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"17_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("18")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（六）利息支出")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"18_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"18_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"18_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"18_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("19")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（七）罚金、罚款和被没收财物的损失")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"19_1",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"19_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("20")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（八）税收滞纳金、加收利息")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"20_1",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"20_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("21")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（九）赞助支出")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"21_1",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"21_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("22")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（十）与未实现融资收益相关在当期确认的财务费用")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"22_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"22_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"22_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"22_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("23")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（十一）佣金和手续费支出")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"23_1",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"23_2",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"23_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("24")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（十二）不征税收入用于支出所形成的费用")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"24_3",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("25")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　其中：专项用途财政性资金用于支出所形成的费用（填写A105040）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"25_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("26")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（十三）跨期扣除项目")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"26_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"26_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"26_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"26_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("27")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（十四）与取得收入无关的支出")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"27_1",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"27_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("28")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（十五）境外所得分摊的共同支出")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"28_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("29")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（十六）党组织工作经费")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"29_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"29_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"29_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"29_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("30")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（十六）其他")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"30_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"30_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"30_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"30_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("31")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("三、资产类调整项目（32+33+34+35）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"31_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"31_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("33")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（二）资产减值准备金")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"33_1",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"33_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"33_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("34")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（三）资产损失（填写A105090）")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"34_1",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"34_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"34_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"34_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("35")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（四）其他")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"35_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"35_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"35_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"35_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("36")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("四、特殊事项调整项目（36+37+38+39+40）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"36_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"36_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("37")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（一）企业重组（填写A105100）")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"37_1",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"37_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"37_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"37_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("38")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（二）政策性搬迁（填写A105110）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"38_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"38_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("39")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（三）特殊行业准备金（填写A105120）")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"39_1",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"39_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"39_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"39_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("40")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（四）房地产开发企业特定业务计算的纳税调整额（填写A105010）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"40_2",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"40_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"40_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"uk-text-center"},[this._v("41")]),this._v(" "),e("td",{staticClass:"uk-text-left"},[this._v("　　（五）有限合伙企业法人合伙方应分得的应纳税所得额")]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"41_1",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-write"},[e("input",{attrs:{type:"text",name:"41_2",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"41_3",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticClass:"uk-text-right bg-unwrite"},[e("input",{attrs:{type:"text",name:"41_4",readonly:"",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("42")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("　　（五）其他")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"42_3",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"42_4",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("43")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("五、特别纳税调整应税所得")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"43_3",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"43_4",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("44")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("六、其他")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"44_3",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-write"},[a("input",{attrs:{type:"text",name:"44_4",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"uk-text-center"},[t._v("45")]),t._v(" "),a("td",{staticClass:"uk-text-left"},[t._v("合计（1+12+30+35+41+42）")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"45_3",readonly:"",value:"0.00"}})]),t._v(" "),a("td",{staticClass:"uk-text-right bg-unwrite"},[a("input",{attrs:{type:"text",name:"45_4",readonly:"",value:"0.00"}})])])}]};var r=function(t){a("qb/I")},n=a("C7Lr")(s.a,i,!1,r,"data-v-c21acc02",null);e.default=n.exports},"qb/I":function(t,e){}});
//# sourceMappingURL=30.04cc757bd1eb394206a7.js.map