webpackJsonp([47],{"8wCx":function(t,a,e){"use strict";(function(t){var n=e("PKHo");a.a={mixins:[n.a],data:function(){return{name:26,setting:[],form:{a1_2:"0.00"},com:[]}},computed:{formData:function(){return this.$store.state.tableData[this.name]}},mounted:function(){this.inputChangeEvent(),this.inputClickEvent(),this.getSetting(),this.formrevise()},methods:{getSetting:function(){this.formData&&this.recoverFormData(),this.com=this.$store.state.companyCurrent.gscompany},initData:function(){this.$Loading.start();var a=this,e=function(e){t("input").each(function(){if(t(this).attr("name")===e)return t(this).val((1*a.setting[e]).toFixed(2)),t(this).trigger("blur"),!1})};for(var n in this.setting)e(n);this.$Loading.finish()},recoverFormData:function(){this.$Loading.start();var a=this;t("input").each(function(){var e=this,n=t(this).attr("name");a.formData.map(function(a){a.name===n&&t(e).val(a.value)})}),this.$Loading.finish()},fn:function(){this.fn4(9,1,[10,11,12],3),this.fn4(9,2,[10,11,12],3),this.fn4(9,3,[10,11,12],3),this.fn4(9,4,[10,11,12],3),this.fn4(20,1,[15,16],1),this.fn4(20,2,[15,16],1),this.fn4(22,1,[20,21],1),this.fn4(22,2,[20,21],1)},fn1:function(a,e,n){for(var s=1;s<=e;s++){for(var r=0,i=0;i<n.length;i++){var c=n[i],l=t("input[name="+s+"_"+c+"]");l.val()&&(this.$store.state.companyCurrent.content.page27[s+"_2"]?r+=parseFloat(1*l.val()+1*this.$store.state.companyCurrent.content.page27[s+"_2"]):r+=parseFloat(1*l.val()+0))}t("input[name="+s+"_"+a+"]").val(r.toFixed(2))}},fn2:function(a,e,n,s,r,i){for(var c=0,l=1;l<=e;l++)for(var o=0;o<n.length;o++){var _=n[o],d=t("input[name="+l+"_"+_+"]");if(d.val()&&t.inArray(l,s)>=0&&!isNaN(d.val())&&1==i){14==l||15==l?c=parseFloat(c-d.val()):c+=parseFloat(d.val())}}t("input[name="+r+"_"+a+"]").val(c.toFixed(2))},fn3:function(a,e){for(var n=1;n<=a;n++){if(t("input[name=11_"+n+"]").val())var s=1*t("input[name=11_"+n+"]").val();else s=0;if(t("input[name=17_"+n+"]").val())var r=1*t("input[name=17_"+n+"]").val();else r=0;r<s?t("input[name="+e+"_"+n+"]").val(r.toFixed(2)):t("input[name="+e+"_"+n+"]").val(s.toFixed(2))}},fn4:function(a,e,n,s){for(var r=1;r<=e;r++){for(var i=0,c=0;c<n.length;c++){var l=n[c],o=t("input[name="+l+"_"+r+"]");o.val()&&(isNaN(o.val())?console.log("error"):1==s?0==c?i=o.val():i-=parseFloat(o.val()):2==s?2==c?i-=parseFloat(o.val()):i+=parseFloat(o.val()):3==s?i+=parseFloat(o.val()):4==s?3==c?i-=parseFloat(o.val()):0==c?i=parseFloat(o.val()):i+=parseFloat(o.val()):5==s&&(0==c?i=parseFloat(o.val()):i-=parseFloat(o.val())))}t("input[name="+a+"_"+r+"]").val((1*i).toFixed(2))}},formrevise:function(){var t="",a="";if(this.$store.state.tableData[27]){var e=1*this.$store.state.tableData[27][7].value;this.form.a1_2=e.toFixed(2)}else t="《增值税纳税申报表(适用于增值税小规模纳税人)附列资料》";this.$store.state.tableData[44]||(a="《增值税减免税申报明细表(季度)》"),""==t&&""==a||this.eg("请按照填表顺序正确填写:"+t+a+"表未填写！")}}}}).call(a,e("hcrA"))},HeQJ:function(t,a){},bdtl:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("8wCx"),s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p2"},[e("div",[e("p",{staticStyle:{"font-size":"20px",height:"35px","font-weight":"bold","text-align":"center"}},[t._v("增  值  税  纳  税  申  报  表")]),t._v(" "),e("p",{staticStyle:{"font-weight":"bold",height:"40px","font-size":"18px","text-align":"center"}},[t._v("(小规模纳税人适用)")]),t._v(" "),e("p",{staticStyle:{width:"100%",height:"25px",float:"left","text-align":"left"}},[t._v("纳税人识别号："+t._s(t.com.firm_code))]),t._v(" "),e("p",{staticStyle:{width:"70%",height:"25px",float:"left","text-align":"left"}},[t._v("纳税人名称(公章)："+t._s(t.com.firm_name))]),t._v(" "),e("p",{staticStyle:{width:"30%",height:"30px","text-align":"right",float:"left"}},[t._v("金额单位：元至角分")]),t._v(" "),e("p",{staticStyle:{width:"50%",height:"30px",float:"left","text-align":"left"}},[t._v("税款所属时间："+t._s(t.com.month)+"-01日至"+t._s(t.com.month)+"-30日")]),t._v(" "),e("p",{staticStyle:{width:"50%",height:"30px",float:"left","text-align":"right"}},[t._v("填表日期："+t._s(t.com.month)+"-"+t._s((new Date).getDate())+"日")]),t._v(" "),e("form",[e("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"1",width:"100%"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("tr",[e("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[t._v("(一)应征增值税不含税销售额")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),t._m(2),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.a1_2,expression:"form.a1_2"}],attrs:{name:"1_2",readonly:"",value:"0.00"},domProps:{value:t.form.a1_2},on:{input:function(a){a.target.composing||t.$set(t.form,"a1_2",a.target.value)}}})]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32)])])]),t._v(" "),e("div",{staticClass:"uk-text-center",staticStyle:{"margin-top":"15px"}},[e("button",{staticClass:"uk-button uk-button-primary",on:{click:t.saveForm}},[e("i",{staticClass:"uk-icon-save"}),t._v(" 保存\n    ")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.dataRestore()}}},[e("i",{staticClass:"uk-icon-close"}),t._v(" 删除\n    ")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[e("i",{staticClass:"uk-icon-file-excel-o"}),t._v(" 导出Excel\n    ")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[e("i",{staticClass:"uk-icon-print"}),t._v(" 打印\n    ")])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{attrs:{rowspan:"16",colspan:"1"}},[t._v("\n            一\n            "),e("br"),t._v("、\n            "),e("br"),t._v("计\n            "),e("br"),t._v("税\n            "),e("br"),t._v("依\n            "),e("br"),t._v("据\n          ")]),t._v(" "),e("td",{attrs:{rowspan:"2",colspan:"2",align:"center"}},[t._v("项目")]),t._v(" "),e("td",{attrs:{rowspan:"2",align:"center"}},[t._v("栏次")]),t._v(" "),e("td",{attrs:{colspan:"4",align:"center"}},[t._v("本期数")]),t._v(" "),e("td",{attrs:{colspan:"2",align:"center"}},[t._v("本年累计")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{attrs:{colspan:"3",align:"center"}},[this._v("货物及劳务")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("服务、不动产和无形资产")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("货物及劳务")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("服务、不动产和无形资产")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"1_1",value:"0.00"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"1_3",tabindex:"1",value:"0.00"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"1_4",readonly:"",tabindex:"2",value:"0.00"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("税务机关代开的增值税专用发票不含税销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("2")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"2_1",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"2_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"2_3",tabindex:"3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"2_4",tabindex:"4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("税控器具开具的普通发票不含税销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("3")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"3_1",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"3_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"3_3",tabindex:"5",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"3_4",tabindex:"6",value:"0.00"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[t._v("(二)销售、出租不动产不含税销售额")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"},attrs:{colspan:"3"}},[e("span",[t._v("-----")])]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"4_2",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("span",[t._v("-----")])]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"4_4",tabindex:"11",value:"0.00"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[t._v("税务机关代开的增值税专用发票不含税销售额")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("5")]),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"},attrs:{colspan:"3"}},[e("span",[t._v("-----")])]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"5_2",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("span",[t._v("-----")])]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"5_4",tabindex:"8",value:"0.00"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[t._v("税控器具开具的普通发票不含税销售额")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("6")]),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"},attrs:{colspan:"3"}},[e("span",[t._v("-----")])]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"6_2",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("span",[t._v("-----")])]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"6_4",tabindex:"14",value:"0.00"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[t._v("(三)销售使用过的固定资产不含税销售额")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("7(7≥8)")]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"7_1",tabindex:"15",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#FFF"}},[t._v("----")]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[e("input",{attrs:{name:"7_3",value:"0.00"}})]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("----")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[t._v("其中：税控器具开具的普通发票不含税销售额")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"8_1",tabindex:"17",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#FFF"}},[t._v("----")]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[e("input",{attrs:{name:"8_2",tabindex:"15",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#FFF"},attrs:{align:"center"}},[t._v("----")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("(四)免税销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("9=10+11+12")]),this._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"9_1",readonly:"",tabindex:"16",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"}},[a("input",{attrs:{name:"9_2",readonly:"",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"},attrs:{align:"center"}},[a("input",{attrs:{name:"9_3",readonly:"",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"},attrs:{align:"center"}},[a("input",{attrs:{name:"9_4",readonly:"",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("其中：小微企业免税销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("10")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"10_1",tabindex:"18",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"10_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"10_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"10_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("未达起征点销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("11")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"11_1",tabindex:"18",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"11_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"11_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"11_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("其他免税销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("12")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"12_1",tabindex:"18",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"12_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"12_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"12_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("(五)出口免税销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("13(13≥14)")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"13_1",tabindex:"18",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"13_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"13_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"13_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("其中：税控器具开具的普通发票销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("14")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"14_1",tabindex:"18",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"14_2",tabindex:"18",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"14_3",tabindex:"18",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{align:"center"}},[a("input",{attrs:{name:"14_4",tabindex:"18",value:"0.00"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{attrs:{rowspan:"8",colspan:"1"}},[t._v("\n            二\n            "),e("br"),t._v("、\n            "),e("br"),t._v("税\n            "),e("br"),t._v("款\n            "),e("br"),t._v("计\n            "),e("br"),t._v("算\n          ")]),t._v(" "),e("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[t._v("本期应纳税额")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("15")]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"15_1",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"15_2",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"15_3",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#d6ebff"}},[e("input",{attrs:{name:"15_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("本期应纳税额减征额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("16")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"16_1",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"16_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"16_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"16_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("本期免税额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("17")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"17_1",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"17_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"17_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"17_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("其中：小微企业免税额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("18")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"18_1",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"18_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"18_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"18_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("未达起征点销售额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("19")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"19_1",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"19_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"19_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"19_4",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("应纳税额合计")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("20=15-16")]),this._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"20_1",readonly:"",tabindex:"12",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"}},[a("input",{attrs:{name:"20_2",readonly:"",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"}},[a("input",{attrs:{name:"20_3",readonly:"",tabindex:"13",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#ccccff"}},[a("input",{attrs:{name:"20_4",readonly:"",tabindex:"14",value:"0.00"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[this._v("本期预交税额")]),this._v(" "),a("td",{attrs:{align:"center"}},[this._v("21")]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"},attrs:{colspan:"3"}},[a("input",{attrs:{name:"21_1",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"21_2",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"21_3",value:"0.00"}})]),this._v(" "),a("td",{staticStyle:{"background-color":"#d6ebff"}},[a("input",{attrs:{name:"21_4",value:"0.00"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticClass:"tdleft",attrs:{colspan:"2"}},[t._v("本期应补(退)税额")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("22=20-21")]),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"},attrs:{colspan:"3"}},[e("input",{attrs:{name:"22_1",readonly:"",tabindex:"12",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#ccccff"}},[e("input",{attrs:{name:"22_2",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#FFF"}},[t._v("----")]),t._v(" "),e("td",{staticStyle:{"background-color":"#FFF"}},[t._v("----")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{attrs:{colspan:"2",align:"center"}},[this._v("纳税人或代理人声明：")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"10",align:"center"}},[this._v("如纳税人填报，由纳税人填写以下各栏：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"2",rowspan:"5",align:"center"}},[this._v("\n            本纳税申报表是根据国家税收法律法规及相关规定填报的，\n            "),a("br"),this._v("我确定它是真实的、可靠的、完整的。\n          ")]),this._v(" "),a("td",{staticStyle:{"text-align":"left","border-bottom":"none","border-right":"none"},attrs:{colspan:"5",align:"center"}},[this._v("\n            办税人员：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 80px)"},attrs:{name:"110_2",bt:"text"}})]),this._v(" "),a("td",{staticStyle:{"text-align":"left","border-left":"none","border-bottom":"none"},attrs:{colspan:"5",align:"center"}},[this._v("\n            财务负责人：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 80px)"},attrs:{name:"110_3",bt:"text"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticStyle:{"text-align":"left","border-top":"none","border-right":"none"},attrs:{colspan:"5",align:"center"}},[this._v("\n            法定代表人：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 80px)"},attrs:{name:"110_3",bt:"text"}})]),this._v(" "),a("td",{staticStyle:{"text-align":"left","border-left":"none","border-top":"none"},attrs:{colspan:"5",align:"center"}},[this._v("\n            联系电话：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 80px)"},attrs:{name:"110_4",bt:"text"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"10",align:"center"}},[this._v("如委托代理人填报，由代理人填写以下各栏：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticStyle:{"text-align":"left","border-bottom":"none","border-right":"none"},attrs:{colspan:"5",align:"center"}},[this._v("\n            代理人名称(公章)：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 120px)"},attrs:{name:"110_4",bt:"text"}})]),this._v(" "),a("td",{staticStyle:{"text-align":"left","border-left":"none","border-bottom":"none"},attrs:{colspan:"5",align:"center"}},[this._v("\n            经办人：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 80px)"},attrs:{name:"110_4",bt:"text"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticStyle:{"text-align":"left","border-top":"none","border-right":"none"},attrs:{colspan:"5",align:"center"}}),this._v(" "),a("td",{staticStyle:{"text-align":"left","border-left":"none","border-top":"none"},attrs:{colspan:"5",align:"center"}},[this._v("\n            联系电话：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 80px)"},attrs:{name:"110_4",bt:"text"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticStyle:{"text-align":"left",border:"none"},attrs:{colspan:"2",align:"center"}},[this._v("\n            主管税务机关：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 90px)"},attrs:{name:"110_5",bt:"text"}})]),this._v(" "),a("td",{staticStyle:{"text-align":"left",border:"none"},attrs:{colspan:"4",align:"center"}}),this._v(" "),a("td",{staticStyle:{"text-align":"left",border:"none"},attrs:{colspan:"3",align:"center"}},[this._v("\n            接收人：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 80px)"},attrs:{name:"110_6",bt:"text"}})]),this._v(" "),a("td",{staticStyle:{"text-align":"left",border:"none"},attrs:{colspan:"3",align:"center"}},[this._v("\n            接收日期：\n            "),a("input",{staticClass:"t_l modSty",staticStyle:{width:"calc(100% - 80px)"},attrs:{name:"110_7",bt:"text"}})])])}]};var r=function(t){e("HeQJ")},i=e("C7Lr")(n.a,s,!1,r,"data-v-68dbb256",null);a.default=i.exports}});
//# sourceMappingURL=47.a5a2fdc272d27016c3df.js.map