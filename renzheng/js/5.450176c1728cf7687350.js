webpackJsonp([5],{"7Q70":function(t,e){},qOMS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("4YfN"),o=i.n(n),s=i("fUgm"),a={data:function(){return{showSelectStatus:0,taxdate:"",zcInvoiceInfo:{zyfpNum:0,zyfpMoney:0,zyfpTax_money:0,jdcNum:0,jdcMoney:0,jdcTax_money:0,numTotal:0,moneyTotal:0,tax_moneyTotal:0,bdkzyfpNum:0,bdkzyfpMoney:0,bdkzyfpTax_money:0,bdkjdcNum:0,bdkjdcMoney:0,bdkjdcTax_money:0},ycInvoiceInfo:{zyfpNum:0,zyfpMoney:0,zyfpTax_money:0,jdcNum:0,jdcMoney:0,jdcTax_money:0,numTotal:0,moneyTotal:0,tax_moneyTotal:0,bdkzyfpNum:0,bdkzyfpMoney:0,bdkzyfpTax_money:0,bdkjdcNum:0,bdkjdcMoney:0,bdkjdcTax_money:0},yrzInvoiceInfo:{zyfpNum:0,zyfpMoney:0,zyfpTax_money:0,jdcNum:0,jdcMoney:0,jdcTax_money:0,numTotal:0,moneyTotal:0,tax_moneyTotal:0,bdkzyfpNum:0,bdkzyfpMoney:0,bdkzyfpTax_money:0,bdkjdcNum:0,bdkjdcMoney:0,bdkjdcTax_money:0},condition:{code:"",number:"",create:"",saler_tax_no:""},datatable:[],total:0,invoiceType:"0",currentInvoice:0,taxMonth:"",dataInfo:[],statisticsDialog:!1,declareDialog:!1,deductionDialog:!1,width_sum:0}},computed:o()({company:function(){return this.$store.state.company},allData:function(){return this.$store.state.invoice},list:function(){return this.invoiceData.slice((this.checkList.currpage-1)*this.checkList.pagesize,this.checkList.currpage*this.checkList.pagesize)}},Object(s.b)(["deadDate"])),methods:{statisticsInvoiceInfo:function(){var t=this.$store.state.invoice;if(this.zcInvoiceInfo={zyfpNum:0,zyfpMoney:0,zyfpTax_money:0,jdcNum:0,jdcMoney:0,jdcTax_money:0,numTotal:0,moneyTotal:0,tax_moneyTotal:0,bdkzyfpNum:0,bdkzyfpMoney:0,bdkzyfpTax_money:0,bdkjdcNum:0,bdkjdcMoney:0,bdkjdcTax_money:0},this.ycInvoiceInfo={zyfpNum:0,zyfpMoney:0,zyfpTax_money:0,jdcNum:0,jdcMoney:0,jdcTax_money:0,numTotal:0,moneyTotal:0,tax_moneyTotal:0,bdkzyfpNum:0,bdkzyfpMoney:0,bdkzyfpTax_money:0,bdkjdcNum:0,bdkjdcMoney:0,bdkjdcTax_money:0},this.yrzInvoiceInfo={zyfpNum:0,zyfpMoney:0,zyfpTax_money:0,jdcNum:0,jdcMoney:0,jdcTax_money:0,numTotal:0,moneyTotal:0,tax_moneyTotal:0,bdkzyfpNum:0,bdkzyfpMoney:0,bdkzyfpTax_money:0,bdkjdcNum:0,bdkjdcMoney:0,bdkjdcTax_money:0},void 0!==t)for(var e=0;e<t.length;e++)0===parseInt(t[e].certify_state)?1===parseInt(t[e].check_state)&&(1==t[e].state?(this.zcInvoiceInfo.numTotal=this.zcInvoiceInfo.numTotal+1,this.zcInvoiceInfo.moneyTotal=this.zcInvoiceInfo.moneyTotal+1*t[e].money,this.zcInvoiceInfo.tax_moneyTotal=this.zcInvoiceInfo.tax_moneyTotal+1*t[e].tax_money,"1"===t[e].tax_cate?t[e].deduction?(this.zcInvoiceInfo.bdkzyfpNum=this.zcInvoiceInfo.bdkzyfpNum+1,this.zcInvoiceInfo.bdkzyfpMoney=this.zcInvoiceInfo.bdkzyfpMoney+1*t[e].money,this.zcInvoiceInfo.bdkzyfpTax_money=this.zcInvoiceInfo.bdkzyfpTax_money+1*t[e].tax_money):(this.zcInvoiceInfo.zyfpNum=this.zcInvoiceInfo.zyfpNum+1,this.zcInvoiceInfo.zyfpMoney=this.zcInvoiceInfo.zyfpMoney+1*t[e].money,this.zcInvoiceInfo.zyfpTax_money=this.zcInvoiceInfo.zyfpTax_money+1*t[e].tax_money):t[e].deduction?(this.zcInvoiceInfo.jdcNum=this.zcInvoiceInfo.bdkjdcNum+1,this.zcInvoiceInfo.jdcMoney=this.zcInvoiceInfo.bdkjdcMoney+1*t[e].money,this.zcInvoiceInfo.jdcTax_money=this.zcInvoiceInfo.bdkjdcTax_money+1*t[e].tax_money):(this.zcInvoiceInfo.jdcNum=this.zcInvoiceInfo.jdcNum+1,this.zcInvoiceInfo.jdcMoney=this.zcInvoiceInfo.jdcMoney+1*t[e].money,this.zcInvoiceInfo.jdcTax_money=this.zcInvoiceInfo.jdcTax_money+1*t[e].tax_money)):(this.ycInvoiceInfo.numTotal=this.ycInvoiceInfo.numTotal+1,this.ycInvoiceInfo.moneyTotal=this.ycInvoiceInfo.moneyTotal+1*t[e].money,this.ycInvoiceInfo.tax_moneyTotal=this.ycInvoiceInfo.tax_moneyTotal+1*t[e].tax_money,"1"===t[e].tax_cate?(this.ycInvoiceInfo.zyfpNum=this.ycInvoiceInfo.zyfpNum+1,this.ycInvoiceInfo.zyfpMoney=this.ycInvoiceInfo.zyfpMoney+1*t[e].money,this.ycInvoiceInfo.zyfpTax_money=this.ycInvoiceInfo.zyfpTax_money+1*t[e].tax_money):(this.ycInvoiceInfo.jdcNum=this.ycInvoiceInfo.jdcNum+1,this.ycInvoiceInfo.jdcMoney=this.ycInvoiceInfo.jdcMoney+1*t[e].money,this.ycInvoiceInfo.jdcTax_money=this.ycInvoiceInfo.jdcTax_money+1*t[e].tax_money))):1==t[e].state&&(this.yrzInvoiceInfo.numTotal=this.yrzInvoiceInfo.numTotal+1,this.yrzInvoiceInfo.moneyTotal=this.yrzInvoiceInfo.moneyTotal+1*t[e].money,this.yrzInvoiceInfo.tax_moneyTotal=this.yrzInvoiceInfo.tax_moneyTotal+1*t[e].tax_money,1===parseInt(t[e].tax_cate)?t[e].deduction?(this.yrzInvoiceInfo.bdkzyfpNum=this.yrzInvoiceInfo.bdkzyfpNum+1,this.yrzInvoiceInfo.bdkzyfpMoney=this.yrzInvoiceInfo.bdkzyfpMoney+1*t[e].money,this.yrzInvoiceInfo.bdkzyfpTax_money=this.yrzInvoiceInfo.bdkzyfpTax_money+1*t[e].tax_money):(this.yrzInvoiceInfo.zyfpNum=this.yrzInvoiceInfo.zyfpNum+1,this.yrzInvoiceInfo.zyfpMoney=this.yrzInvoiceInfo.zyfpMoney+1*t[e].money,this.yrzInvoiceInfo.zyfpTax_money=this.yrzInvoiceInfo.zyfpTax_money+1*t[e].tax_money):t[e].deduction?(this.yrzInvoiceInfo.jdcNum=this.yrzInvoiceInfo.bdkjdcNum+1,this.yrzInvoiceInfo.jdcMoney=this.yrzInvoiceInfo.bdkjdcMoney+1*t[e].money,this.yrzInvoiceInfo.jdcTax_money=this.yrzInvoiceInfo.bdkjdcTax_money+1*t[e].tax_money):(this.yrzInvoiceInfo.jdcNum=this.yrzInvoiceInfo.jdcNum+1,this.yrzInvoiceInfo.jdcMoney=this.yrzInvoiceInfo.jdcMoney+1*t[e].money,this.yrzInvoiceInfo.jdcTax_money=this.yrzInvoiceInfo.jdcTax_money+1*t[e].tax_money))},selectStatus:function(){0===this.showSelectStatus?this.showSelectStatus=1:this.showSelectStatus=0},inquireInvoiceInfo:function(){var t=this.$store.state.publicData.invoiceList,e=[];if(void 0!==t){for(var i=0;i<t.length;i++)if("是"===t[i].checkCertification&&""!==t[i].checkCertificationdate&&(t[i].code===this.condition.code||""===this.condition.code)&&!(t[i].number!==this.condition.number&&""!==this.condition.number||t[i].saler_tax_no!==this.condition.saler_tax_no&&""!==this.condition.saler_tax_no)){if(""!=this.condition.create)var n=this.isDateBetween(t[i].create_date,this.condition.create[0],this.condition.create[1]);(n||""==this.condition.create)&&(t[i].attestType="勾选认证",e.push(t[i]))}this.datatable=e,this.total=e.length}},countType:function(t){this.currentInvoice=t},toStatistics:function(){this.statisticsDialog=!0},toStatisticsTwo:function(){var t=this;this.statisticsDialog=!1,this.width_sum=1,setTimeout(function(){t.width_sum=2,t.statisticsInvoiceInfo()},2e3)},toDeclare:function(){this.declareDialog=!0},saveDeclare:function(){var t=this;this.declareDialog=!1,this.$prompt("请输入证书密码：","提示信息",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(e){var i=e.value;t.company.certify_pwd==i?(t.$store.commit("confirmSign"),t.$message.success("确认成功!"),t.width_sum=3):t.$message.error("证书密码错误!")}).catch(function(){})},cancelCount:function(){this.width_sum=0},countInquire:function(){this.statisticsInvoiceInfo(),this.deductionDialog=!0}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticStyle:{"border-bottom":"20px solid #F7F7F7"}},[t._m(0),t._v(" "),i("div",{staticClass:"standard"},[i("div",{staticClass:"switch-invoice-type mt-20"},[i("input",{class:0===t.currentInvoice?"switch-invoice-type_on":"",attrs:{type:"button",value:"当前属期数据统计"},on:{click:function(e){return t.countType(0)}}}),t._v(" "),i("input",{class:1===t.currentInvoice?"switch-invoice-type_on":"",attrs:{type:"button",value:"历史属期数据统计"}})]),t._v(" "),0===t.currentInvoice?i("div",{staticClass:"T-title"},[t._m(1),t._v(" "),i("span",{staticClass:"color_3 font-16"},[t._v(t._s(t.company.month))]),t._v(" "),i("span",{staticClass:"ml-20 font-16"},[t._v("\n          报表类型：\n          "),i("label",{staticClass:"pad15_r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.invoiceType,expression:"invoiceType"}],attrs:{type:"radio",value:"0"},domProps:{checked:t._q(t.invoiceType,"0")},on:{change:function(e){t.invoiceType="0"}}}),t._v(" 发票统计表\n          ")]),t._v(" "),i("label",{staticClass:"pad15_r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.invoiceType,expression:"invoiceType"}],attrs:{type:"radio",value:"1",disabled:""},domProps:{checked:t._q(t.invoiceType,"1")},on:{change:function(e){t.invoiceType="1"}}}),t._v(" 异常发票统计表\n          ")])]),t._v(" "),i("span",{staticClass:"f-r",staticStyle:{"margin-top":"-10px"}},[i("a",{staticClass:"button button-green",on:{click:t.countInquire}},[t._v("统计查询")]),t._v(" "),i("a",{staticClass:"button button-green notice-help",attrs:{href:"javascript:void(0);"}},[t._v("打印")])])]):i("div",{staticClass:"T-title"},[t._m(2),t._v(" "),i("span",{staticClass:"color_3 font-16"},[i("el-date-picker",{staticStyle:{"margin-top":"-5px"},attrs:{size:"mini",type:"month",clearable:!1,editable:!1,"value-format":"yyyy-MM",placeholder:"选择月"},model:{value:t.taxMonth,callback:function(e){t.taxMonth=e},expression:"taxMonth"}})],1),t._v(" "),i("span",{staticClass:"ml-20 font-16"},[t._v("\n          报表类型：\n          "),i("label",{staticClass:"pad15_r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.invoiceType,expression:"invoiceType"}],attrs:{type:"radio",value:"0"},domProps:{checked:t._q(t.invoiceType,"0")},on:{change:function(e){t.invoiceType="0"}}}),t._v(" 发票统计表\n          ")]),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])]),t._v(" "),0===t.currentInvoice?i("div",{staticClass:"standard"},[i("div",{attrs:{id:"normal"}},[i("div",{staticClass:"text-right mt-30"},[t.width_sum<2?i("a",{staticClass:"button button-green switch-invoice-type_on",on:{click:t.toStatistics}},[t._v("申请统计")]):t._e(),t._v(" "),2===t.width_sum?i("a",{staticClass:"button button-green switch-invoice-type_on",on:{click:t.toDeclare}},[t._v("确认签名")]):t._e(),t._v(" "),t.width_sum>1?i("a",{staticClass:"button button-green switch-invoice-type_on",on:{click:t.cancelCount}},[t._v("撤销统计")]):t._e()]),t._v(" "),i("div",{staticClass:"standard-timeline"},[i("div",{staticClass:"step-bar"},[i("div",{staticClass:"step-bar-active",class:1===t.width_sum?"width-33":2===t.width_sum?"width-66":3===t.width_sum?"width-100":""})]),t._v(" "),i("ul",[i("li",{staticStyle:{width:"33.3333%"}},[i("span",{class:t.width_sum>0?"on_span":""},[t._v("1")]),t._v(" "),t._m(5)]),t._v(" "),i("li",{staticStyle:{width:"33.3333%"}},[i("span",{class:t.width_sum>1?"on_span":""},[t._v("2")]),t._v(" "),t._m(6)]),t._v(" "),i("li",{staticStyle:{width:"33.3333%"}},[i("span",{class:t.width_sum>2?"on_span":""},[t._v("3")]),t._v(" "),t._m(7)])])]),t._v(" "),t._m(8),t._v(" "),2===t.width_sum||3===t.width_sum?i("table",{staticClass:"height40",attrs:{width:"100%"}},[i("tbody",[i("tr",[i("td",[i("span",{staticClass:"height40 color_2",attrs:{id:"nsrmc1"}},[t._v("纳税人名称："+t._s(t.company.company))])]),t._v(" "),i("td",[i("span",{staticClass:"height40 color_2",attrs:{id:"nsrsbh1"}},[t._v("纳税人识别号："+t._s(t.company.tax_no))])]),t._v(" "),i("td",[i("span",{staticClass:"height40 color_2",attrs:{id:"rzyf1"}},[t._v("认证月份："+t._s(t.company.month))])]),t._v(" "),t._m(9)])])]):t._e(),t._v(" "),i("div",{staticStyle:{width:"100%","overflow-x":"auto"}},[i("table",{staticClass:"height40 resulttable",attrs:{width:"100%",border:"1",cellpadding:"0",cellspacing:"0"}},[i("tbody",[t._m(10),t._v(" "),t._m(11),t._v(" "),t.width_sum<2?i("tr",[i("td",{attrs:{colspan:"7"}},[t._v("未找到符合在条件的记录")])]):t._e(),t._v(" "),t.width_sum>1?i("tr",{attrs:{id:"row_0"}},[i("td",[t._v("增值税专用发票")]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.zyfpNum))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.zyfpMoney))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.zyfpTax_money))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.bdkzyfpNum))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.bdkzyfpMoney))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.bdkzyfpTax_money))])]):t._e(),t._v(" "),t.width_sum>1?i("tr",{attrs:{id:"row_1"}},[i("td",[t._v("机动车销售统一发票")]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.jdcNum))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.jdcMoney))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.jdcTax_money))]),t._v(" "),i("td",[t._v("0")]),t._v(" "),i("td",[t._v("0.00")]),t._v(" "),i("td",[t._v("0.00")])]):t._e()])]),t._v(" "),t._m(12)])])]):i("div",{staticClass:"standard"},[t._m(13),t._v(" "),i("div",{staticStyle:{width:"100%","overflow-x":"auto"}},[i("table",{staticClass:"height40 resulttable",attrs:{width:"100%",border:"1",cellpadding:"0",cellspacing:"0"}},[i("tbody",[t._m(14),t._v(" "),t._m(15),t._v(" "),i("tr",[i("td",[t._v("增值税专用发票")]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.zyfpNum))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.zyfpMoney))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.zyfpTax_money))]),t._v(" "),i("td",[t._v("0")]),t._v(" "),i("td",[t._v("0.00")]),t._v(" "),i("td",[t._v("0.00")])]),t._v(" "),i("tr",[i("td",[t._v("机动车销售统一发票")]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.jdcNum))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.jdcMoney))]),t._v(" "),i("td",[t._v(t._s(t.zcInvoiceInfo.jdcTax_money))]),t._v(" "),i("td",[t._v("0")]),t._v(" "),i("td",[t._v("0.00")]),t._v(" "),i("td",[t._v("0.00")])])])]),t._v(" "),t._m(16)])])]),t._v(" "),0===t.currentInvoice?i("div",{staticStyle:{"min-height":"40px"}}):i("div",{staticClass:"width-1200",staticStyle:{"min-height":"40px","margin-top":"20px"}},[t._m(17),t._v(" "),i("div",[i("div",{staticClass:"height40"},[i("p",[t._v("\n          发票类别：\n          "),i("label",{staticClass:"pad15_r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.invoiceType,expression:"invoiceType"}],attrs:{type:"radio",value:"0"},domProps:{checked:t._q(t.invoiceType,"0")},on:{change:function(e){t.invoiceType="0"}}}),t._v(" 增值税专用发票\n          ")]),t._v(" "),i("label",{staticClass:"pad15_r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.invoiceType,expression:"invoiceType"}],attrs:{type:"radio",value:"1",disabled:""},domProps:{checked:t._q(t.invoiceType,"1")},on:{change:function(e){t.invoiceType="1"}}}),t._v(" 出口转内销发票\n          ")])]),t._v(" "),i("span",{staticClass:"pad15_r"},[t._v("发票代码："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.condition.code,expression:"condition.code"}],staticClass:"input_1",attrs:{type:"text"},domProps:{value:t.condition.code},on:{input:function(e){e.target.composing||t.$set(t.condition,"code",e.target.value)}}})]),t._v(" "),i("span",{staticClass:"pad15_r"},[t._v("发票号码："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.condition.number,expression:"condition.number"}],staticClass:"input_1",attrs:{type:"text"},domProps:{value:t.condition.number},on:{input:function(e){e.target.composing||t.$set(t.condition,"number",e.target.value)}}})]),t._v(" "),i("span",{staticClass:"pad15_r",attrs:{id:"createDate"}},[t._v("勾选日期：\n          "),i("el-date-picker",{staticStyle:{width:"300px",border:"1px solid #888888","border-radius":"0px",height:"28px",top:"1px"},attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"-","start-placeholder":"起始日期","end-placeholder":"截止日期"},model:{value:t.condition.create,callback:function(e){t.$set(t.condition,"create",e)},expression:"condition.create"}})],1),t._v(" "),i("span",{staticClass:"pad15_r"},[t._v("销方税号：\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.condition.saler_tax_no,expression:"condition.saler_tax_no"}],staticClass:"input_1",staticStyle:{width:"175px"},attrs:{type:"text"},domProps:{value:t.condition.saler_tax_no},on:{input:function(e){e.target.composing||t.$set(t.condition,"saler_tax_no",e.target.value)}}})]),t._v(" "),i("br"),t._v(" "),t._m(18)]),t._v(" "),t._m(19),t._v(" "),i("div",{staticClass:"mb-10"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataInfo,size:"mini",border:""}},[i("el-table-column",{attrs:{label:"序号",width:"40"}}),t._v(" "),i("el-table-column",{attrs:{label:"发票代码",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"发票号码",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"开票日期",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"销方名称"}}),t._v(" "),i("el-table-column",{attrs:{label:"金额"}}),t._v(" "),i("el-table-column",{attrs:{label:"税额"}}),t._v(" "),i("el-table-column",{attrs:{label:"有效税额",width:"70"}}),t._v(" "),i("el-table-column",{attrs:{label:"勾选日期",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"发票类型",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"用途",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"发票状态",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"管理状态",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"80"}})],1)],1)])]),t._v(" "),i("span"),t._v(" "),t.statisticsDialog?i("div",{staticClass:"statisticsDialog"},[i("el-dialog",{attrs:{title:"提示信息",visible:t.statisticsDialog,width:"330px","close-on-click-modal":!1},on:{"update:visible":function(e){t.statisticsDialog=e}}},[i("div",{staticClass:"invoice-checks-dialog-form",staticStyle:{height:"130px"}},[i("div",{staticClass:"float-left",staticStyle:{width:"25%","padding-top":"20px"}},[i("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"60px",color:"#FB6908"}})]),t._v(" "),i("div",{staticClass:"float-left fs-16",staticStyle:{width:"75%","line-height":"70px","font-weight":"bold"}},[i("p",[t._v("是否确定申请生成统计报表！")])]),t._v(" "),i("p",{staticClass:"text-center"},[i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("input",{staticClass:"button button-blue mr-10",attrs:{type:"button",value:"取消"},on:{click:function(e){t.statisticsDialog=!1}}}),t._v(" "),i("input",{staticClass:"button button-blue",attrs:{type:"button",value:"确定"},on:{click:t.toStatisticsTwo}})])])])])],1):t._e(),t._v(" "),t.declareDialog?i("div",{staticClass:"statisticsDialog"},[i("el-dialog",{attrs:{title:"提示信息",visible:t.declareDialog,width:"450px","close-on-click-modal":!1},on:{"update:visible":function(e){t.declareDialog=e}}},[i("div",{staticClass:"invoice-checks-dialog-form",staticStyle:{height:"130px"}},[i("div",{staticClass:"float-left",staticStyle:{width:"20%","padding-top":"20px"}},[i("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"60px",color:"#FB6908"}})]),t._v(" "),i("div",{staticClass:"float-left",staticStyle:{width:"75%","line-height":"70px","font-weight":"bold"}},[i("p",[t._v("是否确定,确认后当前统计报表将作为申报的依据!")])]),t._v(" "),i("p",{staticClass:"text-center"},[i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("input",{staticClass:"button button-blue mr-10",attrs:{type:"button",value:"取消"},on:{click:function(e){t.declareDialog=!1}}}),t._v(" "),i("input",{staticClass:"button button-blue",attrs:{type:"button",value:"确定"},on:{click:t.saveDeclare}})])])])])],1):t._e(),t._v(" "),t.deductionDialog?i("div",{staticClass:"statisticsDialog"},[i("el-dialog",{attrs:{title:"查询信息",visible:t.deductionDialog,width:"1100px","close-on-click-modal":!1},on:{"update:visible":function(e){t.deductionDialog=e}}},[i("div",{staticClass:"invoice-checks-dialog-form",staticStyle:{height:"220px"}},[i("div",{staticClass:"text-center table-title"},[t._v("发票抵扣统计表")]),t._v(" "),i("table",{staticClass:"height40 resulttable",attrs:{width:"100%",border:"1",cellpadding:"0",cellspacing:"0"}},[i("tbody",[i("tr",[i("th",{attrs:{width:"20%",rowspan:"2"}},[i("div",{staticClass:"out"},[i("b",[t._v("用途")]),t._v(" "),i("em",{staticStyle:{color:"rgb(0, 0, 0)"}},[t._v("发票类型")])])]),t._v(" "),i("th",{attrs:{width:"20%",colspan:"3"}},[t._v("抵扣")]),t._v(" "),i("th",{attrs:{width:"20%",colspan:"3"}},[t._v("不抵扣")])]),t._v(" "),i("tr",[i("th",[t._v("份数")]),t._v(" "),i("th",[t._v("金额")]),t._v(" "),i("th",[t._v("有效税额")]),t._v(" "),i("th",[t._v("份数")]),t._v(" "),i("th",[t._v("金额")]),t._v(" "),i("th",[t._v("有效税额")])]),t._v(" "),i("tr",[i("td",[t._v("增值税专用发票")]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.zyfpNum))]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.zyfpMoney))]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.zyfpTax_money))]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.bdkzyfpNum))]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.bdkzyfpMoney))]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.bdkzyfpTax_money))])]),t._v(" "),i("tr",[i("td",[t._v("机动车销售统一发票")]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.jdcNum))]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.jdcMoney))]),t._v(" "),i("td",[t._v(t._s(t.yrzInvoiceInfo.jdcTax_money))]),t._v(" "),i("td",[t._v("0")]),t._v(" "),i("td",[t._v("0.00")]),t._v(" "),i("td",[t._v("0.00")])])])])])])],1):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"breadCrumb"},[i("div",{staticClass:"width-1200"},[i("div",{staticClass:"iconfont rz-iconditu float-left font-24"}),t._v(" "),i("a",{staticClass:"float-left font-16 ml-25"},[t._v("当前位置：首页-"),i("span",{staticClass:"cl-888"},[t._v("抵扣勾选")]),t._v("-"),i("span",{staticClass:"cl-888"},[t._v("抵扣勾选统计")])]),t._v(" "),i("div",{staticClass:"iconfont rz-iconyou float-right font-24"}),t._v(" "),i("a",{staticClass:"float-right font-16 mr-5"},[t._v("帮助")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pad15_r font-16"},[e("div",{staticClass:"row-top-blue"}),this._v(" "),e("span",{staticClass:"row-top-text"},[this._v("税款所属期：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pad15_r font-16"},[e("div",{staticClass:"row-top-blue"}),this._v(" "),e("span",{staticClass:"row-top-text"},[this._v("税款所属期：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"pad15_r"},[e("input",{attrs:{type:"radio",disabled:""}}),this._v(" 异常发票统计表\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"f-r",staticStyle:{"margin-top":"-10px"}},[e("a",{staticClass:"button button-green"},[this._v("统计查询")]),this._v(" "),e("a",{staticClass:"button button-green notice-help",attrs:{href:"javascript:void(0);"}},[this._v("打印")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("申请统计\n                "),e("br"),this._v(" "),e("i",{attrs:{id:"sqtjsj"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n                统计完成\n                "),e("br"),this._v(" "),e("i",{attrs:{id:"tjwcsj"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n                确认签名\n                "),e("br"),this._v(" "),e("i",{attrs:{id:"qrqmsj"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"T-title"},[e("div",{staticClass:"text-center font-16 mt-65"},[this._v("发票统计表")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{align:"right"}},[e("span",{staticClass:"height40 color_2 mar_l_30"},[this._v("单位：（份、元）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{attrs:{width:"20%",rowspan:"2"}},[e("div",{staticClass:"out"},[e("b",[this._v("用途")]),this._v(" "),e("em",{staticStyle:{color:"rgb(0, 0, 0)"}},[this._v("发票类型")])])]),this._v(" "),e("th",{attrs:{width:"20%",colspan:"3"}},[this._v("抵扣")]),this._v(" "),e("th",{attrs:{width:"20%",colspan:"3"}},[this._v("不抵扣")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("份数")]),t._v(" "),i("th",[t._v("金额")]),t._v(" "),i("th",[t._v("有效税额")]),t._v(" "),i("th",[t._v("份数")]),t._v(" "),i("th",[t._v("金额")]),t._v(" "),i("th",[t._v("有效税额")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tips mt-20"},[i("div",{staticClass:"tips-con-bz"},[i("div",{staticStyle:{width:"4px",height:"20px","background-color":"#16307a",float:"left"}}),t._v(" "),i("span",{staticStyle:{float:"left","margin-left":"10px","font-size":"16px","font-weight":"700"}},[t._v("备注")])]),t._v(" "),i("p",[t._v("1、本统计表包括当前税款所属期内所有勾选为抵扣和不抵扣的增值税发票；")]),t._v(" "),i("p",[t._v("2、一个属期内对已勾选的发票支持多次申请统计操作；")]),t._v(" "),i("p",[t._v("3、申报期内，对已勾选数据进行申请统计后，系统将自动锁定当期抵扣勾选操作；如需继续勾选发票，可在撤销统计成功后继续进行发票勾选或撤勾选操作；")]),t._v(" "),i("p",[t._v("4、申报期内，申请统计完成后正式进行申报前，需在本平台对抵扣统计表进行签名确认操作；")]),t._v(" "),i("p",[t._v("5、申报期内，对抵扣统计表签名确认后申报完成前，支持撤销统计，系统将自动撤销抵扣统计表和确认签名，撤销完成后可以继续勾选发票，修正完毕后需再次进行申请统计和确认签名操作。")]),t._v(" "),i("br"),t._v(" "),i("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"T-title"},[e("div",{staticClass:"text-center font-16 mt-65"},[this._v("发票统计表")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{attrs:{width:"20%",rowspan:"2"}},[e("div",{staticClass:"out"},[e("b",[this._v("用途")]),this._v(" "),e("em",{staticStyle:{color:"rgb(0, 0, 0)"}},[this._v("发票类型")])])]),this._v(" "),e("th",{attrs:{width:"20%",colspan:"3"}},[this._v("抵扣")]),this._v(" "),e("th",{attrs:{width:"20%",colspan:"3"}},[this._v("不抵扣")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("份数")]),t._v(" "),i("th",[t._v("金额")]),t._v(" "),i("th",[t._v("有效税额")]),t._v(" "),i("th",[t._v("份数")]),t._v(" "),i("th",[t._v("金额")]),t._v(" "),i("th",[t._v("有效税额")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tips mt-20"},[i("div",{staticClass:"tips-con-bz"},[i("div",{staticStyle:{width:"4px",height:"20px","background-color":"#16307a",float:"left"}}),t._v(" "),i("span",{staticStyle:{float:"left","margin-left":"10px","font-size":"16px","font-weight":"700"}},[t._v("备注")])]),t._v(" "),i("p",[t._v("1、本统计表包括当前选定税款所属期内所有勾选为抵扣和不抵扣的增值税发票；")]),t._v(" "),i("p",[t._v("2、本统计表只允许查询下载近一年数据。")]),t._v(" "),i("br"),t._v(" "),i("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"T-title"},[e("span",{staticClass:"pad15_r font-16"},[e("div",{staticClass:"row-top-blue"}),this._v(" "),e("span",{staticClass:"row-top-text"},[this._v("发票清单")])]),this._v(" "),e("span",{staticClass:"f-r",staticStyle:{"margin-top":"-10px"}},[e("a",{staticClass:"button button-green switch-invoice-type_on"},[this._v("查询明细下载")]),this._v(" "),e("a",{staticClass:"button button-green switch-invoice-type_on"},[this._v("查询")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pad15_r",attrs:{id:"certifyMethod"}},[this._v("用途：\n          "),e("label",{staticClass:"pad15_r"},[e("input",{attrs:{name:"certify_state",type:"radio",checked:""}}),this._v(" 全部\n          ")]),this._v(" "),e("label",{staticClass:"pad15_r"},[e("input",{attrs:{name:"certify_state",type:"radio"}}),this._v("抵扣\n          ")]),this._v(" "),e("label",{staticClass:"pad15_r"},[e("input",{attrs:{name:"certify_state",type:"radio"}}),this._v("不抵扣\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"T-title"},[e("span",{staticClass:"pad15_r font-16"},[e("div",{staticClass:"row-top-blue"}),this._v(" "),e("span",{staticClass:"row-top-text"},[this._v("查询结果")])])])}]};var v=i("C7Lr")(a,c,!1,function(t){i("v9ep"),i("7Q70")},"data-v-937bf090",null);e.default=v.exports},v9ep:function(t,e){}});
//# sourceMappingURL=5.450176c1728cf7687350.js.map