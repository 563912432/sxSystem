webpackJsonp([48],{QOza:function(t,a){},YCsN:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("x/IK"),n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p2"},[e("h1",{staticClass:"uk-text-center uk-margin-large-top uk-margin-large-bottom",staticStyle:{"font-weight":"bold"}},[t._v("利润表")]),t._v(" "),e("div",{staticStyle:{width:"900px",margin:"0 auto"}},[e("div",{staticClass:"uk-text-right"},[t._v("会小企02表")]),t._v(" "),e("div",{staticClass:"uk-flex uk-flex-space-between uk-margin-top-small"},[e("span",[t._v("编制单位:"+t._s(t.com.firm_name))]),t._v(" "),e("span",[t._v(t._s(t.com.month)+"-"+t._s((new Date).getDate()))]),t._v(" "),e("span",[t._v("单位:元")])])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"uk-text-center",staticStyle:{"margin-top":"15px"}},[e("button",{staticClass:"uk-button uk-button-primary",on:{click:t.saveForm}},[e("i",{staticClass:"uk-icon-save"}),t._v(" 保存")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.dataRestore()}}},[e("i",{staticClass:"uk-icon-close"}),t._v(" 删除")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[e("i",{staticClass:"uk-icon-file-excel-o"}),t._v(" 导出Excel\n    ")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[e("i",{staticClass:"uk-icon-print"}),t._v(" 打印")])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("table",{staticStyle:{margin:"0px auto"},attrs:{cellpadding:"0",cellspacing:"0",border:"1",width:"100%"}},[e("tbody",[e("tr",{attrs:{height:"30"}},[e("td",{staticClass:"uk-text-center",attrs:{width:"500"}},[t._v("项目")]),t._v(" "),e("td",{staticClass:"uk-text-center",attrs:{width:"30"}},[t._v("行次")]),t._v(" "),e("td",{staticClass:"uk-text-center",attrs:{width:"200"}},[t._v("本年累计金额")]),t._v(" "),e("td",{staticClass:"uk-text-center",attrs:{width:"200"}},[t._v("本月金额")])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("一、营业收入")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("1")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"1_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"1_2",tabindex:"1",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　减:营业成本")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("2")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"2_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"2_2",tabindex:"2",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　营业税金及附加")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("3")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"3_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"3_2",tabindex:"3",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　其中：消费税")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("4")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"4_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"4_2",tabindex:"4",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　　　营业税")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("5")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"5_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"5_2",tabindex:"5",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　　　城市维护建设税")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("6")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"6_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"6_2",tabindex:"6",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　　　资源税")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("7")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"7_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"7_2",tabindex:"7",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　　　土地增值税")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("8")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"8_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"8_2",tabindex:"8",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　　　城镇土地使用税、房产税、车船税、印花税")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("9")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"9_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"9_2",tabindex:"9",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　　　教育费附加、矿产资源补偿费、排污费")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("10")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"10_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"10_2",tabindex:"10",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　销售费用")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("11")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"11_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"11_2",tabindex:"11",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　其中：商品维护费")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("12")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"12_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"12_2",tabindex:"12",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　广告费和业务宣传费")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("13")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"13_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"13_2",tabindex:"13",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　管理费用")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("14")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"14_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"14_2",tabindex:"14",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　其中：开办费")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("15")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"15_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"15_2",tabindex:"15",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　　业务招待费")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("16")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"16_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"16_2",tabindex:"16",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　　研究费用")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("17")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"17_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"17_2",tabindex:"17",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　财务费用")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("18")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"18_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"18_2",tabindex:"18",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v('　　　其中：利息费用(收入以"-"号填列)')]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("19")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"19_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"19_2",tabindex:"19",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v('　　　加:投资收益(损失以"-"号填列)')]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("20")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"20_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"20_2",tabindex:"20",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v('二、营业利润(亏损以"-"号填列)')]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("21")]),t._v(" "),e("td",{staticClass:"bg-write"},[e("input",{attrs:{name:"21_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-write"},[e("input",{attrs:{name:"21_2",readonly:"",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　加:营业外收入")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("22")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"22_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"22_2",tabindex:"21",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　其中：政府补助")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("23")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"23_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"23_2",tabindex:"22",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　减:营业外支出")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("24")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"24_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"24_2",tabindex:"23",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　其中：坏账损失")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("25")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"25_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"25_2",tabindex:"24",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　无法收回的长期债券投资损失")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("26")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"26_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"26_2",tabindex:"25",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　无法收回的长期股权投资损失")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("27")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"27_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"27_2",tabindex:"26",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　自然灾害等不可抗力因素造成的损失")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("28")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"28_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"28_2",tabindex:"27",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　　　　税收滞纳金")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("29")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"29_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"29_2",tabindex:"28",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("三、利润总额(亏损总额以“-”号填列)")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("30")]),t._v(" "),e("td",{staticClass:"bg-write"},[e("input",{attrs:{name:"30_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-write"},[e("input",{attrs:{name:"30_2",readonly:"",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v("　　　减:所得税费用")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("31")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"31_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[e("input",{attrs:{name:"31_2",tabindex:"29",value:"0.00"}})])]),t._v(" "),e("tr",{attrs:{height:"30"}},[e("td",[t._v('四、净利润(净亏损以"-"号填列)')]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("32")]),t._v(" "),e("td",{staticClass:"bg-write"},[e("input",{attrs:{name:"32_1",readonly:"",value:"0.00"}})]),t._v(" "),e("td",{staticClass:"bg-write"},[e("input",{attrs:{name:"32_2",readonly:"",value:"0.00"}})])])])])])}]};var i=function(t){e("QOza")},r=e("C7Lr")(s.a,n,!1,i,"data-v-7fb73d5c",null);a.default=r.exports},"x/IK":function(t,a,e){"use strict";(function(t){var s=e("PKHo");a.a={mixins:[s.a],data:function(){return{name:8,setting:null}},computed:{com:function(){return this.$store.state.companyCurrent.gscompany},formData:function(){return this.$store.state.tableData[this.name]}},mounted:function(){this.inputChangeEvent(),this.inputClickEvent(),this.getSetting()},methods:{getSetting:function(){this.formData&&this.recoverFormData(),this.setting=this.$store.state.companyCurrent.content.page8,this.initData()},initData:function(){this.$Loading.start();var a=this,e=function(e){t("input").each(function(){if(t(this).attr("name")===e)return t(this).val((1*a.setting[e]).toFixed(2)),t(this).trigger("blur"),!1})};for(var s in this.setting)e(s);this.$Loading.finish()},recoverFormData:function(){this.$Loading.start();var a=this;t("input").each(function(){var e=this,s=t(this).attr("name");a.formData.map(function(a){a.name===s&&t(e).val(a.value)})}),this.$Loading.finish()},fn:function(){this.fn2("21_2",[1,2,3,11,14,18,20],1),this.fn2("30_2",[21,22,24],2),this.fn2("32_2",[30,31],3),this.fn1(1,32,[2])},fn1:function(a,e,s){for(var n=1;n<=e;n++){for(var i=0,r=0;r<s.length;r++){var v=s[r],u=t("input[name="+n+"_"+v+"]");if(u.val()&&!isNaN(u.val())){var _=this.$store.state.companyCurrent.content.page8[n+"_"+a];i+=parseFloat(parseFloat(u.val())+parseFloat(_))}}t("input[name="+n+"_"+a+"]").val(i.toFixed(2))}},fn2:function(a,e,s){for(var n=parseFloat(t("input[name="+e[0]+"_2]").val()),i=1;i<e.length;i++){var r=t("input[name="+e[i]+"_2]");r.val()&&(1==s?6==i?n+=parseFloat(r.val()):n-=parseFloat(r.val()):2==s?1==i?n+=parseFloat(r.val()):n-=parseFloat(r.val()):3==s&&(n-=parseFloat(r.val())))}t("input[name="+a+"]").val(n.toFixed(2))}}}}).call(a,e("hcrA"))}});
//# sourceMappingURL=48.8bf0f645dd64c2a6647b.js.map