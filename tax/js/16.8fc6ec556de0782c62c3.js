webpackJsonp([16],{lNgn:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mpk6"),i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"p2"},[s("h1",{staticClass:"uk-text-center uk-margin-large-top uk-margin-large-bottom",staticStyle:{"font-weight":"bold"}},[t._v("利润表")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"uk-text-center",staticStyle:{"margin-top":"15px"}},[s("button",{staticClass:"uk-button uk-button-primary",on:{click:t.saveForm}},[s("i",{staticClass:"uk-icon-save"}),t._v(" 保存")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.dataRestore()}}},[s("i",{staticClass:"uk-icon-close"}),t._v(" 删除")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[s("i",{staticClass:"uk-icon-file-excel-o"}),t._v(" 导出Excel\n    ")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[s("i",{staticClass:"uk-icon-print"}),t._v(" 打印")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticStyle:{width:"900px",margin:"0 auto"}},[a("div",{staticClass:"uk-text-right"},[this._v("会小企02表")]),this._v(" "),a("div",{staticClass:"uk-flex uk-flex-space-between uk-margin-top-small"},[a("span",[this._v("编制单位:某某机械有限公司")]),this._v(" "),a("span",[this._v("20xx年xx月xx日")]),this._v(" "),a("span",[this._v("单位:元")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("form",[s("table",{staticStyle:{margin:"0px auto"},attrs:{cellpadding:"0",cellspacing:"0",border:"1",width:"100%"}},[s("tbody",[s("tr",{attrs:{height:"30"}},[s("td",{staticClass:"uk-text-center",attrs:{width:"500"}},[t._v("项目")]),t._v(" "),s("td",{staticClass:"uk-text-center",attrs:{width:"30"}},[t._v("行次")]),t._v(" "),s("td",{staticClass:"uk-text-center",attrs:{width:"200"}},[t._v("本年累计金额")]),t._v(" "),s("td",{staticClass:"uk-text-center",attrs:{width:"200"}},[t._v("上年金额")])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("一、营业收入")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("1")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"1_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"1_2",tabindex:"1",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　减:营业成本")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("2")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"2_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"2_2",tabindex:"2",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　营业税金及附加")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("3")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"3_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"3_2",tabindex:"3",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　其中：消费税")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("4")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"4_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"4_2",tabindex:"4",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　　　营业税")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("5")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"5_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"5_2",tabindex:"5",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　　　城市维护建设税")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("6")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"6_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"6_2",tabindex:"6",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　　　资源税")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("7")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"7_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"7_2",tabindex:"7",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　　　土地增值税")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("8")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"8_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"8_2",tabindex:"8",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　　　城镇土地使用税、房产税、车船税、印花税")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("9")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"9_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"9_2",tabindex:"9",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　　　教育费附加、矿产资源补偿费、排污费")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("10")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"10_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"10_2",tabindex:"10",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　销售费用")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("11")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"11_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"11_2",tabindex:"11",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　其中：商品维护费")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("12")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"12_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"12_2",tabindex:"12",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　广告费和业务宣传费")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("13")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"13_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"13_2",tabindex:"13",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　管理费用")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("14")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"14_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"14_2",tabindex:"14",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　其中：开办费")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("15")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"15_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"15_2",tabindex:"15",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　　　　业务招待费")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("16")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"16_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"16_2",tabindex:"16",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　　　　研究费用")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("17")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"17_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"17_2",tabindex:"17",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　财务费用")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("18")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"18_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"18_2",tabindex:"18",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v('　　　其中：利息费用(收入以"-"号填列)')]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("19")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"19_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"19_2",tabindex:"19",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v('　　　加:投资收益(损失以"-"号填列)')]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("20")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"20_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"20_2",tabindex:"20",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v('二、营业利润(亏损以"-"号填列)')]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("21")]),t._v(" "),s("td",{staticClass:"bg-write"},[s("input",{attrs:{name:"21_1",readonly:"",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-write"},[s("input",{attrs:{name:"21_2",readonly:"",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　加:营业外收入")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("22")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"22_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"22_2",tabindex:"21",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　其中：政府补助")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("23")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"23_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"23_2",tabindex:"22",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　减:营业外支出")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("24")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"24_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"24_2",tabindex:"23",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　其中：坏账损失")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("25")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"25_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"25_2",tabindex:"24",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　无法收回的长期债券投资损失")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("26")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"26_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"26_2",tabindex:"25",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　无法收回的长期股权投资损失")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("27")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"27_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"27_2",tabindex:"26",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　自然灾害等不可抗力因素造成的损失")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("28")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"28_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"28_2",tabindex:"27",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　　　　税收滞纳金")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("29")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"29_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"29_2",tabindex:"28",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("三、利润总额")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("30")]),t._v(" "),s("td",{staticClass:"bg-write"},[s("input",{attrs:{name:"30_1",readonly:"",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-write"},[s("input",{attrs:{name:"30_2",readonly:"",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v("　　　减:所得税费用")]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("31")]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"31_1",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-unwrite"},[s("input",{attrs:{name:"31_2",tabindex:"29",value:"0.00"}})])]),t._v(" "),s("tr",{attrs:{height:"30"}},[s("td",[t._v('四、净利润(净亏损以"-"号填列)')]),t._v(" "),s("td",{staticClass:"uk-text-center"},[t._v("32")]),t._v(" "),s("td",{staticClass:"bg-write"},[s("input",{attrs:{name:"32_1",readonly:"",value:"0.00"}})]),t._v(" "),s("td",{staticClass:"bg-write"},[s("input",{attrs:{name:"32_2",readonly:"",value:"0.00"}})])])])])])}]};var n=function(t){s("qDJe")},r=s("C7Lr")(e.a,i,!1,n,"data-v-15bcf484",null);a.default=r.exports},mpk6:function(t,a,s){"use strict";(function(t){var e=s("PKHo");a.a={mixins:[e.a],data:function(){return{name:32,setting:null}},computed:{formData:function(){return this.$store.state.tableData[this.name]}},mounted:function(){this.inputChangeEvent(),this.inputClickEvent(),this.getSetting()},methods:{getSetting:function(){this.formData&&this.recoverFormData(),this.initData()},initData:function(){this.$Loading.start();var a=this,s=function(s){t("input").each(function(){if(t(this).attr("name")===s)return t(this).val((1*a.setting[s]).toFixed(2)),t(this).trigger("blur"),!1})};for(var e in this.setting)s(e);this.$Loading.finish()},recoverFormData:function(){this.$Loading.start();var a=this;t("input").each(function(){var s=this,e=t(this).attr("name");a.formData.map(function(a){a.name===e&&t(s).val(a.value)})}),this.$Loading.finish()},fn:function(){this.fn1("21_1",1,[1,2,3,11,14,18,20],1),this.fn1("21_2",2,[1,2,3,11,14,18,20],1),this.fn1("30_1",1,[21,22,24],2),this.fn1("30_2",2,[21,22,24],2),this.fn1("32_1",1,[30,31],3),this.fn1("32_2",2,[30,31],3)},fn1:function(a,s,e,i){for(var n=parseFloat(t("input[name="+e[0]+"_"+s+"]").val()),r=1;r<e.length;r++){var v=t("input[name="+e[r]+"_"+s+"]");v.val()&&(1==i?6==r?n+=parseFloat(v.val()):n-=parseFloat(v.val()):2==i?1==r?n+=parseFloat(v.val()):n-=parseFloat(v.val()):3==i&&(n-=parseFloat(v.val())))}t("input[name="+a+"]").val(n.toFixed(2))}}}}).call(a,s("hcrA"))},qDJe:function(t,a){}});
//# sourceMappingURL=16.8fc6ec556de0782c62c3.js.map