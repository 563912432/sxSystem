webpackJsonp([1],{XxUt:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("i50Q"),s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p2"},[e("P",{staticStyle:{"font-size":"20px","font-weight":"bold","text-align":"center",margin:"20px auto"}},[t._v("企业基础信息表")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"uk-text-center",staticStyle:{"margin-top":"15px"}},[e("button",{staticClass:"uk-button uk-button-primary",on:{click:t.saveForm}},[e("i",{staticClass:"uk-icon-save"}),t._v(" 保存")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.dataRestore()}}},[e("i",{staticClass:"uk-icon-close"}),t._v(" 删除")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[e("i",{staticClass:"uk-icon-file-excel-o"}),t._v(" 导出Excel\n    ")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(a){return t.useless()}}},[e("i",{staticClass:"uk-icon-print"}),t._v(" 打印")])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("table",{staticStyle:{margin:"0px auto",width:"100%","text-align":"left"},attrs:{cellpadding:"0",cellspacing:"0",border:"1"}},[e("tr",[e("td",{staticClass:"tdcon",attrs:{colspan:"8"}},[t._v("100基本信息")])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("101汇总纳税企业")]),t._v(" "),e("td",{attrs:{colspan:"6"}},[e("input",{attrs:{type:"radio",name:"2_1",value:"1"}}),t._v("　总机构(跨省)--适用《跨地区经营汇总纳税企业所得税征收管理办法》"),e("br"),t._v(" "),e("input",{attrs:{type:"radio",name:"2_1",value:"2"}}),t._v("　总机构(跨省)--不适用《跨地区经营汇总纳税企业所得税征收管理办法》"),e("br"),t._v(" "),e("input",{attrs:{type:"radio",name:"2_1",value:"3"}}),t._v("　总机构(省内)"),e("br"),t._v(" "),e("input",{attrs:{type:"radio",name:"2_1",value:"4"}}),t._v("　分支机构(须进行完整年度纳税申报且按比例纳税)--就地缴纳比例="),e("span",{staticStyle:{"background-color":"#d6ebff"}},[t._v("　　　|")]),t._v("%"),e("br"),t._v(" "),e("input",{attrs:{type:"radio",name:"2_1",value:"5"}}),t._v("　分支机构(须进行完整年度纳税申报但不就地缴纳)"),e("br"),t._v(" "),e("input",{attrs:{type:"radio",name:"2_1",value:"6"}}),t._v("　否\n        ")])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("102所属行业明细代码")]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v("6519其他软件开发")]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v("105国家限制或禁止行业")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"3_1",value:"0.00"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("104从业人数")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"4_1",value:"0"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v("103资产总额"),e("span",{staticStyle:{color:"red"}},[t._v("(万元)")])]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          是 "),e("input",{attrs:{type:"radio",name:"4_2",value:"1"}}),t._v("　　　　　\n          否 "),e("input",{attrs:{type:"radio",name:"4_2",value:"2"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("106非盈利组织")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          是 "),e("input",{attrs:{type:"radio",name:"5_1",value:"1"}}),t._v("　　　　　\n          否 "),e("input",{attrs:{type:"radio",name:"5_1",value:"2"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v("107存在境外关联交易")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          是 "),e("input",{attrs:{type:"radio",name:"5_2",value:"1"}}),t._v("　　　　　\n          否 "),e("input",{attrs:{type:"radio",name:"5_2",value:"2"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("108上市公司")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          是 ( 境内 "),e("input",{attrs:{type:"radio",name:"6_1",value:"1"}}),t._v("　境外 "),e("input",{attrs:{type:"radio",name:"6_1",value:"2"}}),t._v(" )　　　　\n          否 "),e("input",{attrs:{type:"radio",name:"6_1",value:"3"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v("109从事股权投资业务")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          是 "),e("input",{attrs:{type:"radio",name:"6_2",value:"1"}}),t._v("　　　　　\n          否 "),e("input",{attrs:{type:"radio",name:"6_2",value:"2"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("110使用的会计准则或会计制度")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"6"}},[t._v("\n          企业会计准则(\n          一般企业 "),e("input",{attrs:{type:"radio",name:"7_1",value:"1"}}),t._v("\n          银行 "),e("input",{attrs:{type:"radio",name:"7_1",value:"2"}}),t._v("\n          证券 "),e("input",{attrs:{type:"radio",name:"7_1",value:"3"}}),t._v("\n          保险 "),e("input",{attrs:{type:"radio",name:"7_1",value:"4"}}),t._v("\n          担保 "),e("input",{attrs:{type:"radio",name:"7_1",value:"5"}}),t._v("\n          )"),e("br"),t._v("\n          小企业会计准则 "),e("input",{attrs:{type:"radio",name:"7_1",value:"6"}}),e("br"),t._v("\n          企业会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"7"}}),e("br"),t._v("\n          事业单位会计准则(\n          事业单位会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"8"}}),t._v("　\n          科学事业单位会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"9"}}),t._v("　\n          医院会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"10"}}),t._v("　\n          高等学校会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"11"}}),t._v("　\n          中小学校会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"12"}}),t._v("　\n          彩票机构会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"13"}}),t._v("\n          )"),e("br"),t._v("\n          民间非盈利组织会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"14"}}),e("br"),t._v("\n          村集体经济组织会计制度 "),e("input",{attrs:{type:"radio",name:"7_1",value:"15"}}),e("br"),t._v("\n          农民专业合作社财务会计制度(试行) "),e("input",{attrs:{type:"radio",name:"7_1",value:"16"}}),e("br"),t._v("\n          其他 "),e("input",{attrs:{type:"radio",name:"7_1",value:"17"}})])]),t._v(" "),e("tr",[e("td",{staticClass:"tdcon",attrs:{colspan:"8"}},[t._v("200企业重组及递延纳税事项")])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"4"}},[t._v("201发生资产(股权)划转特殊性税务处理事项")]),t._v(" "),e("td",{staticClass:"tdcon bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          是 "),e("input",{attrs:{type:"radio",name:"9_1",value:"1"}})]),t._v(" "),e("td",{staticClass:"tdcon bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          否 "),e("input",{attrs:{type:"radio",name:"9_1",value:"2"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"4"}},[t._v("202发生非货币性资产投资递延纳税事项")]),t._v(" "),e("td",{staticClass:"tdcon bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          是 "),e("input",{attrs:{type:"radio",name:"10_1",value:"1"}})]),t._v(" "),e("td",{staticClass:"tdcon bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          否 "),e("input",{attrs:{type:"radio",name:"10_1",value:"2"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"4"}},[t._v("203发生技术入股递延纳税事项")]),t._v(" "),e("td",{staticClass:"tdcon bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          是 "),e("input",{attrs:{type:"radio",name:"11_1",value:"1"}})]),t._v(" "),e("td",{staticClass:"tdcon bg-unwrite",attrs:{colspan:"2"}},[t._v("\n          否 "),e("input",{attrs:{type:"radio",name:"11_1",value:"2"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"4"}},[t._v("204发生企业重组事项")]),t._v(" "),e("td",{staticClass:"tdcon bg-unwrite",attrs:{colspan:"4"}},[t._v("\n          是 ( 一般性税务处理 "),e("input",{attrs:{type:"radio",name:"12_1",value:"1"}}),t._v("　特殊性税务处理 "),e("input",{attrs:{type:"radio",name:"12_1",value:"2"}}),t._v("\n          )　\n          否 "),e("input",{attrs:{type:"radio",name:"12_1",value:"3"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("204-1重组开始时间")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"13_1",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v("204-2重组完成时间")]),t._v(" "),e("td",{staticClass:"bg-unwrite",attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"13_2",bt:"text"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("204-3重组交易类型")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("　法律形式改变 "),e("input",{attrs:{type:"checkbox",name:"14_1"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("　债务重组 "),e("input",{attrs:{type:"checkbox",name:"14_2"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("　股权收购 "),e("input",{attrs:{type:"checkbox",name:"14_3"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("　资产收购 "),e("input",{attrs:{type:"checkbox",name:"14_4"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("　合并 "),e("input",{attrs:{type:"checkbox",name:"14_5"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("　分立 "),e("input",{attrs:{type:"checkbox",name:"14_6"}})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("204-4企业在重组业务中所属当事方类型")]),t._v(" "),e("td",{staticClass:"tdcon"},[t._v("*")]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("\n          债务人 "),e("input",{attrs:{type:"checkbox",name:"15_1"}}),e("br"),t._v("\n          债权人 "),e("input",{attrs:{type:"checkbox",name:"15_2"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("\n          收购方 "),e("input",{attrs:{type:"checkbox",name:"15_3"}}),e("br"),t._v("\n          转让方 "),e("input",{attrs:{type:"checkbox",name:"15_4"}}),e("br"),t._v("\n          被收购企业 "),e("input",{attrs:{type:"checkbox",name:"15_5"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("\n          收购方 "),e("input",{attrs:{type:"checkbox",name:"15_6"}}),e("br"),t._v("\n          转让方 "),e("input",{attrs:{type:"checkbox",name:"15_7"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("\n          合并企业 "),e("input",{attrs:{type:"checkbox",name:"15_8"}}),e("br"),t._v("\n          被合并企业 "),e("input",{attrs:{type:"checkbox",name:"15_9"}}),e("br"),t._v("\n          被合并企业股东 "),e("input",{attrs:{type:"checkbox",name:"15_10"}})]),t._v(" "),e("td",{staticClass:"bg-unwrite"},[t._v("\n          分立企业 "),e("input",{attrs:{type:"checkbox",name:"15_11"}}),e("br"),t._v("\n          被分立企业 "),e("input",{attrs:{type:"checkbox",name:"15_12"}}),e("br"),t._v("\n          被分立企业股东 "),e("input",{attrs:{type:"checkbox",name:"15_13"}})])]),t._v(" "),e("tr",[e("td",{staticClass:"tdcon",attrs:{colspan:"8"}},[t._v("300企业主要股东分及红情况")])]),t._v(" "),e("tr",[e("td",{staticClass:"tdcon"},[t._v("股东名称")]),t._v(" "),e("td",{staticClass:"tdcon"},[t._v("证件种类")]),t._v(" "),e("td",{staticClass:"tdcon",attrs:{colspan:"2"}},[t._v("证件号码")]),t._v(" "),e("td",{staticClass:"tdcon"},[t._v("投资比例")]),t._v(" "),e("td",{staticClass:"tdcon",attrs:{colspan:"2"}},[t._v("当年(决议日)分配的股息、红利等权益性投资收益金额")]),t._v(" "),e("td",{staticClass:"tdcon"},[t._v("国际(注册地址)")])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"18_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"18_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"18_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"18_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"18_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"18_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"19_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"19_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"19_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"19_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"19_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"19_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"20_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"20_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"20_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"20_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"20_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"20_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"21_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"21_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"21_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"21_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"21_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"21_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"22_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"22_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"22_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"22_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"22_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"22_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"23_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"23_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"23_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"23_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"23_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"23_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"24_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"24_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"24_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"24_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"24_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"24_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"25_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"25_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"25_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"25_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"25_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"25_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"26_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"26_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"26_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"26_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"26_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"26_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"27_1",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"27_2",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"27_3",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"27_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"27_5",bt:"text"}})]),t._v(" "),e("td",[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"27_6",bt:"text"}})])]),t._v(" "),e("tr",{staticClass:"bg-unwrite"},[e("td",[t._v("其余股东合计")]),t._v(" "),e("td",{staticClass:"tdcon"},[t._v("——")]),t._v(" "),e("td",{staticClass:"tdcon",attrs:{colspan:"2"}},[t._v("——")]),t._v(" "),e("td",{staticClass:"tdcon"},[e("input",{staticStyle:{"text-align":"left"},attrs:{type:"text",name:"28_4",bt:"text"}})]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticStyle:{"text-align":"right"},attrs:{type:"text",name:"28_5",bt:"text"}})]),t._v(" "),e("td",{staticClass:"tdcon"},[t._v("——")])])])])}]};var i=function(t){e("ye68")},r=e("C7Lr")(n.a,s,!1,i,"data-v-0381d7c7",null);a.default=r.exports},i50Q:function(t,a,e){"use strict";(function(t){var n=e("PKHo");a.a={mixins:[n.a],data:function(){return{name:10,setting:null}},computed:{formData:function(){return this.$store.state.tableData[this.name]}},mounted:function(){this.inputChangeEvent(),this.inputClickEvent(),this.getSetting()},methods:{getSetting:function(){this.formData&&this.recoverFormData(),this.initData()},initData:function(){this.$Loading.start();var a=this,e=function(e){t("input").each(function(){if(t(this).attr("name")===e)return t(this).val((1*a.setting[e]).toFixed(2)),t(this).trigger("blur"),!1})};for(var n in this.setting)e(n);this.$Loading.finish()},recoverFormData:function(){this.$Loading.start();var a=this;t("input").each(function(){var e=this,n=t(this).attr("name");a.formData.map(function(a){a.name===n&&(t(e).val(a.value),t(e).prop("checked",!0))})}),this.$Loading.finish()},fn:function(){}}}}).call(a,e("hcrA"))},ye68:function(t,a){}});
//# sourceMappingURL=1.7f902e7b72c74349f4df.js.map