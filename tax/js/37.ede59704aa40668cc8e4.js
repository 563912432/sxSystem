webpackJsonp([37],{dem8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("uIWh"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p2"},[e("h1",{staticClass:"uk-text-center uk-margin-large-top uk-margin-large-bottom"},[t._v("减免所得税额明细表")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"uk-text-center",staticStyle:{"margin-top":"15px"}},[e("button",{staticClass:"uk-button uk-button-primary",on:{click:t.saveForm}},[e("i",{staticClass:"uk-icon-save"}),t._v(" 保存")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.dataRestore()}}},[e("i",{staticClass:"uk-icon-close"}),t._v(" 删除")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[e("i",{staticClass:"uk-icon-file-excel-o"}),t._v(" 导出Excel\n    ")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[e("i",{staticClass:"uk-icon-print"}),t._v(" 打印")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticStyle:{width:"900px",margin:"0 auto"}},[a("div",{staticClass:"uk-flex uk-flex-right"},[a("p",[this._v("注: "),a("span",{staticClass:"bg-write",staticStyle:{width:"20px",height:"10px",display:"inline-block"}}),this._v(" 不能填写 ")]),this._v(" "),a("span",[this._v("　　金额单位：人民币元（列至角分）")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"1",width:"100%"}},[e("tr",{attrs:{height:"30"}},[e("td",{staticStyle:{"text-align":"center"},attrs:{width:"5%"}},[t._v("行次")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"},attrs:{width:"55%"}},[t._v("项目")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"},attrs:{width:"15%"}},[t._v("本 期 累 计 金 额")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",[t._v("一、符合条件的小型微利企业减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"1_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",[t._v("二、国家需要重点扶持的高新技术企业减按15%的税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"2_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",[t._v("三、经济特区和上海浦东新区新设立的高新技术企业在区内取得的所得定期减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"3_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",[t._v("四、受灾地区农村信用社免征企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"4_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),e("td",[t._v("五、动漫企业自主开发、生产动漫产品定期减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"5_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),e("td",[t._v("六、线宽小于0.8微米（含）的集成电路生产企业减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"6_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),e("td",[t._v("七、线宽小于0.25微米的集成电路生产企业减按15%税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"7_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),e("td",[t._v("八、投资额度超过80亿元的集成电路生产企业减按15%税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"8_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),e("td",[t._v("九、线宽小于0.25微米的集成电路生产企业减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"9_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),e("td",[t._v("十、投资额超过80亿元的集成电路生产企业减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"10_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",[t._v("十一、线宽小于130纳米的集成电路生产企业减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"11_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),e("td",[t._v("十二、线宽小于65纳米或投资额超过150亿元的集成电路生产企业减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"12_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("13")]),t._v(" "),e("td",[t._v("十三、新办集成电路设计企业减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"13_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("14")]),t._v(" "),e("td",[t._v("十四、国家规划布局内集成电路设计企业可减按10%的税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"14_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),e("td",[t._v("十五、符合条件的软件企业减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"15_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),e("td",[t._v("十六、国家规划布局内重点软件企业可减按10%的税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"16_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("17")]),t._v(" "),e("td",[t._v("十七、符合条件的集成电路封装、测试企业定期减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"17_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),t._v(" "),e("td",[t._v("十八、符合条件的集成电路关键专用材料生产企业、集成电路专用设备生产企业定期减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"18_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),e("td",[t._v("十九、经营性文化事业单位转制为企业的免征企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"19_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",[t._v("二十、符合条件的生产和装配伤残人员专门用品企业免征企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"20_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("21")]),t._v(" "),e("td",[t._v("二十一、技术先进型服务企业减按15%的税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"21_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("22")]),t._v(" "),e("td",[t._v("二十二、服务贸易类技术先进型服务企业减按15%的税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"22_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("23")]),t._v(" "),e("td",[t._v("二十四、设在西部地区的鼓励类产业企业减按15%的税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"23_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("24")]),t._v(" "),e("td",[t._v("二十四、新疆困难地区新办企业定期减免企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"24_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("25")]),t._v(" "),e("td",[t._v("二十五、新疆喀什、霍尔果斯特殊经济开发区新办企业定期免征企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"25_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("26")]),t._v(" "),e("td",[t._v("二十六、广东横琴、福建平潭、深圳前海等地区的鼓励类产业企业减按15%税率征收企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"26_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("27")]),t._v(" "),e("td",[t._v("二十七、北京冬奥组委、北京冬奥会测试赛赛事组委会免征企业所得税")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"27_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("28")]),t._v(" "),e("td",{staticStyle:{padding:"0px"}},[t._v("\n          二十八、其他\n          "),e("p",{staticStyle:{margin:"0px",width:"70%",height:"25px","border-left":"2px #808080 solid",float:"right","background-color":"#D6EBFF"}})]),t._v(" "),e("td",{staticStyle:{"background-color":"#D6EBFF"}},[e("input",{attrs:{value:"0.00",name:"28_1"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("29")]),t._v(" "),e("td",[t._v("\n          二十九、民族自治地方的自治机关对本民族自治地方的企业应缴纳的企业所得税中属于地方分享的部分减征或免征（\n          "),e("input",{staticStyle:{width:"15px",height:"15px"},attrs:{type:"radio",disabled:""}}),t._v("免征\n          "),e("input",{staticStyle:{width:"15px",height:"15px"},attrs:{type:"radio",disabled:""}}),t._v("减征：减征幅度______%\n          ）\n        ")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"29_1",readonly:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),e("td",[t._v("合计（1+2+3+4+5+6+···+29）")]),t._v(" "),e("td",{staticStyle:{"background-color":"#CCCCFF"}},[e("input",{attrs:{value:"0.00",name:"30_1",readonly:""}})])])])])}]};var r=function(t){e("fDtm")},l=e("C7Lr")(n.a,i,!1,r,"data-v-b3277b5e",null);a.default=l.exports},fDtm:function(t,a){},uIWh:function(t,a,e){"use strict";(function(t){var n=e("PKHo");a.a={mixins:[n.a],data:function(){return{name:5,setting:[]}},computed:{formData:function(){return this.$store.state.tableData[this.name]}},mounted:function(){this.inputChangeEvent(),this.inputClickEvent(),this.getSetting()},methods:{getSetting:function(){this.formData&&this.recoverFormData(),this.initData()},initData:function(){this.$Loading.start();var a=this,e=function(e){t("input").each(function(){if(t(this).attr("name")===e)return t(this).val((1*a.setting[e]).toFixed(2)),t(this).trigger("blur"),!1})};for(var n in this.setting)e(n);this.$Loading.finish()},recoverFormData:function(){this.$Loading.start();var a=this;t("input").each(function(){var e=this,n=t(this).attr("name");a.formData.map(function(a){a.name===n&&t(e).val(a.value)})}),this.$Loading.finish()},fn:function(){this.fn1(30,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],1)},fn1:function(a,e,n){if(t("input[name="+e[0]+"_1]").val())var i=parseFloat(t("input[name="+e[0]+"_1]").val());else i=0;for(var r=1;r<e.length;r++){var l=t("input[name="+e[r]+"_1]");l.val()&&1==n&&(i+=parseFloat(l.val()))}t("input[name="+a+"_1]").val(i.toFixed(2))}}}}).call(a,e("hcrA"))}});
//# sourceMappingURL=37.ede59704aa40668cc8e4.js.map