webpackJsonp([23],{H6iJ:function(t,e,a){"use strict";(function(t){var n=a("PKHo");a("fUgm");e.a={mixins:[n.a],data:function(){return{name:24,setting:null,form:{a10_3:"0.00",a11_1:"0",a11_2:"0.00",a11_3:"0.00"},com:[]}},computed:{formData:function(){return this.$store.state.tableData[this.name]}},mounted:function(){this.inputChangeEvent(),this.inputClickEvent(),this.getSetting(),this.formrevise()},methods:{getSetting:function(){this.formData&&this.recoverFormData(),this.com=this.$store.state.companyCurrent.gscompany,this.setting=this.$store.state.companyCurrent.content.page24,this.initData()},initData:function(){this.$Loading.start();var e=this,a=function(a){t("input").each(function(){if(t(this).attr("name")===a)return t(this).val((1*e.setting[a]).toFixed(2)),t(this).trigger("blur"),!1})};for(var n in this.setting)a(n);this.$Loading.finish()},recoverFormData:function(){this.$Loading.start();var e=this;t("input").each(function(){var a=this,n=t(this).attr("name");e.formData.map(function(e){e.name===n&&t(a).val(e.value)})}),this.$Loading.finish()},fn:function(){this.fn2("2_1","24_1"),this.fn2("2_2","24_2"),this.fn2("2_3","24_3"),this.fn1(1,6,[1],[2,3],1,1),this.fn1(1,16,[1],[14,15,16],3,2),this.fn1(1,9,[1],[5,6,7,8,9],4,1),this.fn1(1,12,[1],[1,4,11],13,3),this.fn1(1,22,[1],[19,20,21,22],18,1),this.fn1(4,11,[4],[2,3,4,5,6,7,8,9,10,11],1,1),this.fn1(2,6,[2],[2,3],1,1),this.fn1(2,16,[2],[14,15,16],3,2),this.fn1(2,9,[2],[5,6,7,8,9],4,1),this.fn1(2,12,[2],[1,4,11],13,3),this.fn1(2,22,[2],[19,20,21,22],18,1),this.fn1(3,6,[3],[2,3],1,1),this.fn1(3,16,[3],[14,15,16],3,2),this.fn1(3,9,[3],[5,6,7,8,9],4,1),this.fn1(3,12,[3],[1,4,11],13,3),this.fn1(3,22,[3],[19,20,21,22],18,1)},fn1:function(e,a,n,i,s,r){for(var c=0,l=1;l<=a;l++)for(var _=0;_<n.length;_++){var v=n[_],d=t("input[name="+l+"_"+v+"]");if(t.inArray(l,i)>=0&&d.val()&&!isNaN(d.val()))if(1==r)c+=parseFloat(d.val());else if(2==r)if(16==l){var o=-1*d.val();c=parseFloat(c+o)}else c+=parseFloat(d.val());else 3==r&&11!==l&&(c+=parseFloat(d.val()))}t("input[name="+s+"_"+e+"]").val(c)},fn2:function(e,a){var n=t("input[name="+e+"]");if(t("input[name="+a+"]").val())var i=t("input[name="+a+"]").val();else i=0;n.val(1*i)},formrevise:function(){this.$store.state.tableData[23]&&(this.form.a10_3=this.$store.state.tableData[23][1].value,this.form.a11_3=this.$store.state.tableData[23][2].value)}}}}).call(e,a("hcrA"))},U6P7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("H6iJ"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p2"},[a("div",[a("p",{staticStyle:{"font-size":"20px",height:"35px","font-weight":"bold","text-align":"center"}},[t._v("增值税纳税申报表附列材料（二）")]),t._v(" "),a("p",{staticStyle:{height:"30px","text-align":"center"}},[t._v("（本期进项税额明细）")]),t._v(" "),a("P",{staticStyle:{height:"30px","text-align":"center"}},[t._v("税款所属时间：20xx年xx月xx日至20xx年xx月xx日")]),t._v(" "),a("p",{staticStyle:{width:"50%",float:"left",height:"25px","text-align":"left"}},[t._v("纳税人名称："+t._s(t.com.firm_name))]),t._v(" "),a("p",{staticStyle:{width:"50%",float:"left",height:"25px","text-align":"right"}},[t._v("金额单位：元至角分")]),t._v(" "),a("form",[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"1",width:"100%"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("tr",[a("td",{staticClass:"tdleft"},[t._v("（三）本期用于购建不动产的扣税证明")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("9")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a10_3,expression:"form.a10_3"}],attrs:{name:"10_3",readonly:"",value:"0.00"},domProps:{value:t.form.a10_3},on:{input:function(e){e.target.composing||t.$set(t.form,"a10_3",e.target.value)}}})])]),t._v(" "),a("tr",[a("td",{staticClass:"tdleft"},[t._v("（四）本期用于抵扣的旅客运输服务扣税凭证")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a11_1,expression:"form.a11_1"}],attrs:{name:"11_1",value:"0.00"},domProps:{value:t.form.a11_1},on:{input:function(e){e.target.composing||t.$set(t.form,"a11_1",e.target.value)}}})]),t._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a11_2,expression:"form.a11_2"}],attrs:{name:"11_2",value:"0.00"},domProps:{value:t.form.a11_2},on:{input:function(e){e.target.composing||t.$set(t.form,"a11_2",e.target.value)}}})]),t._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a11_3,expression:"form.a11_3"}],attrs:{name:"11_3",value:"0.00"},domProps:{value:t.form.a11_3},on:{input:function(e){e.target.composing||t.$set(t.form,"a11_3",e.target.value)}}})])]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44)])]),t._v(" "),a("div",{staticClass:"uk-text-center",staticStyle:{"margin-top":"15px"}},[a("button",{staticClass:"uk-button uk-button-primary",on:{click:t.saveForm}},[a("i",{staticClass:"uk-icon-save"}),t._v(" 保存")]),t._v(" "),a("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return t.dataRestore()}}},[a("i",{staticClass:"uk-icon-close"}),t._v(" 删除")]),t._v(" "),a("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return t.useless()}}},[a("i",{staticClass:"uk-icon-file-excel-o"}),t._v(" 导出Excel\n      ")]),t._v(" "),a("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return t.useless()}}},[a("i",{staticClass:"uk-icon-print"}),t._v(" 打印")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"font-weight":"bold"},attrs:{align:"center",colspan:"5"}},[this._v("一、申报抵扣的进项税额")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{align:"center"}},[t._v("项目")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("栏次")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("份数")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("金额")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("税额")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("（一）认证相符的增值税专用发票")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("1=2+3")]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"1_1",bt:"zheng",readonly:"",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"1_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"1_3",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　其中：本期认证相符且本期申报抵扣")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("2")]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"2_1",bt:"zheng",readonly:"",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"2_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"2_3",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　　　　前期认证相符且本期申报抵扣")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("3")]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"3_1",bt:"zheng",readonly:"",tabindex:"1",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"3_2",readonly:"",tabindex:"2",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"3_3",readonly:"",tabindex:"3",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("（二）其他扣税凭证")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("4=5+6+7+8a+8b")]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"4_1",bt:"zheng",readonly:"",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"4_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"4_3",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　其中：海关进口增值税专用缴款书")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("5")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"5_1",bt:"zheng",tabindex:"4",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"5_2",tabindex:"5",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"5_3",tabindex:"6",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　　　　农产品代购发票或者销售发票")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("6")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"6_1",bt:"zheng",tabindex:"7",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"6_2",tabindex:"8",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"6_3",tabindex:"9",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　　　　代扣代缴税收缴款凭证")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("7")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"7_1",bt:"zheng",tabindex:"10",value:"0"}})]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("-------")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"7_3",tabindex:"11",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"tdleft"},[t._v("　　　　　　加计扣除农产品进项税额")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("8a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-------")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-------")]),t._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff","text-align":"right","font-size":"13px","padding-right":"1.5px"}},[t._v("0.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　　　　其他")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("8b")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"9_1",bt:"zheng",tabindex:"12",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"9_2",tabindex:"13",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"9_3",tabindex:"14",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"10_1",bt:"zheng",tabindex:"15",value:"0"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"10_2",tabindex:"16",value:"0.00"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"tdleft"},[t._v("（五）外贸企业进项税额抵扣证明")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("11")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("-------")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("-------")]),t._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"12_3",tabindex:"17",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("当期申报抵扣进项税额合计")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("12=1+4+11")]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"13_1",bt:"zheng",readonly:"",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"13_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"13_3",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"font-weight":"bold"},attrs:{colspan:"5",align:"center"}},[this._v("二、进项税额转出额")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{align:"center"}},[this._v("项目")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("栏次")]),this._v(" "),e("td",{attrs:{align:"center",colspan:"3"}},[this._v("税额")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("本期进项税转出额")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("13=14至23之和")]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"1_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("其中：免税项目用")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("14")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"2_4",tabindex:"18",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　集体福利、个人消费")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("15")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"3_4",tabindex:"19",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　非正常损失")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("16")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"4_4",tabindex:"20",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　简易计税方法征税项目用")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("17")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"5_4",tabindex:"21",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　免抵退税办法不得抵扣的进项税额")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("18")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"6_4",tabindex:"22",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　纳税检查调减进项税额")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("19")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"7_4",tabindex:"23",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　红字专用发票信息表注明的进项税额")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("20")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"8_4",tabindex:"24",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　上期留抵税额抵减欠税")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("21")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"9_4",tabindex:"25",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　上期留抵税额退税")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("22")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"10_4",tabindex:"26",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　其他应作进项税额转出的情形")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("23")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"11_4",tabindex:"27",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"font-weight":"bold"},attrs:{colspan:"5",align:"center"}},[this._v("三、待抵扣进项税额")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{align:"center"}},[t._v("项目")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("栏次")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("份数")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("金额")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("税额")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"tdleft"},[t._v("（一）认证相符的增值税专用发票")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("24")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("-------")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("-------")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("-------")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　期初已认证相符但未申报抵扣")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("25")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"14_1",bt:"zheng",tabindex:"28",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"14_2",tabindex:"29",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"14_3",tabindex:"30",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　本期认证相符且本期未申报抵扣")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("26")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"15_1",bt:"zheng",tabindex:"31",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"15_2",tabindex:"32",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"15_3",tabindex:"33",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　期末已认证相符但未申报抵扣")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("27")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"16_1",bt:"zheng",tabindex:"34",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"16_2",tabindex:"35",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"16_3",tabindex:"36",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　其中：按照税法规定不允许抵扣")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("28")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"17_1",bt:"zheng",tabindex:"37",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"17_2",tabindex:"38",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"17_3",tabindex:"39",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("（二）其他扣税凭证")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("29=30至33之和")]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"18_1",bt:"zheng",readonly:"",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"18_2",readonly:"",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"18_3",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("其中：海关进口增值税专用缴款书")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("30")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"19_1",bt:"zheng",tabindex:"40",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"19_2",tabindex:"41",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"19_3",tabindex:"42",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　农产品收购发票或者销售发票")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("31")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"20_1",bt:"zheng",tabindex:"43",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"20_2",tabindex:"44",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"20_3",tabindex:"45",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　代扣代缴税收通用缴款书")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("32")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"21_1",bt:"zheng",tabindex:"46",value:"0"}})]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("-------")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"21_3",tabindex:"47",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("　　　其他")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("33")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"22_1",bt:"zheng",tabindex:"48",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"22_2",tabindex:"49",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"22_3",tabindex:"50",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td"),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("34")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"23_1",bt:"zheng",tabindex:"51",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"23_2",tabindex:"52",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"23_3",tabindex:"53",value:"0.00"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"font-weight":"bold"},attrs:{colspan:"5",align:"center"}},[this._v("四、其他")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{align:"center"}},[t._v("项目")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("栏次")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("份数")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("金额")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("税额")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"tdleft"},[this._v("本期认证相符的增值税专用发票")]),this._v(" "),e("td",{attrs:{align:"center"}},[this._v("35")]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"24_1",bt:"zheng",tabindex:"54",value:"0"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"24_2",tabindex:"55",value:"0.00"}})]),this._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"24_3",tabindex:"56",value:"0.00"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"tdleft"},[t._v("代扣代缴税额")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("36")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("-------")]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v("-------")]),t._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"25_3",tabindex:"57",value:"0.00"}})])])}]};var s=function(t){a("WFnB")},r=a("C7Lr")(n.a,i,!1,s,"data-v-c9016daa",null);e.default=r.exports},WFnB:function(t,e){}});
//# sourceMappingURL=23.fe8fa566521f08502a19.js.map