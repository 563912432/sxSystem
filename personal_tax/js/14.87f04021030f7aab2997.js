webpackJsonp([14],{"4yxw":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=c(a("Dd8w")),s=c(a("pbfL")),i=c(a("Gvqx")),r=c(a("tQk3")),o=c(a("jW3A")),n=c(a("oStf")),p=a("NYxO");function c(t){return t&&t.__esModule?t:{default:t}}var m="payInterestForm";e.default={components:{topHead:o.default,topSelect:n.default},data:function(){return(0,l.default)({},r.default,{isIn:!0,formId:m,payTableIsEditor:!1,tableDataOut:[],centerDialogVisible:!1,close_modal:!1,bodySelect:{user:"",region:""},payInterestForm:{cardNumber:"",isMate:"",mateName:"",mateCardType:"居民身份证",mateCardNumber:"",houseAddress:"",houseNumber:"",certificateStage:"",certificateNumber:"",isPersonGet:"",isFirstGet:"",gongLoanNumber:"",gongFirstDate:"",gongLoanDeadline:"",gongBank:"",shangLoanNumber:"",shangFirstDate:"",shangLoanDeadline:"",shangBank:"",isBaosong:"未报送",isShenfen:"未验证"},selectCollection:{texPlayerNumber:"",employmentNumber:"",personName:"",cardNumber:"",isShenfen:"",isBaosong:"",porsonStatus:"",isCangulie:"",employmentType:""},rules:{cardNumber:[{required:!0,message:"请选择身份证号",trigger:"blur"}],personInfoId:[{required:!0,message:"请选择姓名",trigger:"change"}]},editValue:""})},computed:(0,l.default)({},(0,p.mapGetters)(["company"]),{personInfo:{get:function(){return i.default.tableRelevance(this,"personCollection",["personName","cardNumber","cardType","infoId"],m)}},payInterestTable:{get:function(){return this.isSelectNow?this.selectArr:i.default.tableRelevanceArr(this,this.$store.state.form[m],this.$store.getters.getFormContent("personCollection"),["personName","cardNumber","cardType","employmentNumber"],"personInfoId","infoId")}}}),watch:{centerDialogVisible:function(t){t||(this.isUpdata=!1,this[m]=this.$options.data()[m])}},created:function(){this.$emit("router",this.$router.history.current.name)},mounted:function(){},methods:(0,l.default)({},s.default,{addFormClick:function(){this.centerDialogVisible=!0},submitForm:function(t){var e=this,a=this;this.$refs[t].validate(function(l){if(!l)return!1;var s={};a[t].infoId=a.$store.getters.getFormInfoId(t)+1,s.formId=t,s.content=a[t],a.isUpdata?(a.$store.commit("updataFormInfo",s),a.isUpdata=!1):a.$store.commit("addFormInfo",s),e.addMetaInfo(m),a.centerDialogVisible=!1,e[t]=e.$options.data()[t],a.$message.success("提交成功!"),console.log(e.$store.getters.getFormContent(m))})},updataRow:function(t,e){this.centerDialogVisible=!0,this[m]=this.$store.getters.getFormOneInfo(m,e.infoId),this.editValue=this[m].personName,this.isUpdata=!0},handleCheckAllChange:function(){this.selectStatus=["待报送","待反馈","报送成功","报送失败"]},handCancle:function(){this.selectStatus=[]}})}},BWxv:function(t,e,a){"use strict";var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collection"},[a("topHead",{attrs:{formId:t.formId},on:{deleteClick:t.deleteClick,nullClick:t.nullClick,addFormClick:t.addFormClick,submittedClick:t.submittedClick,fankuiClick:t.fankuiClick}}),t._v(" "),a("topSelect",{attrs:{formId:t.formId},on:{selectClick:t.selectClick}}),t._v(" "),a("div",{staticStyle:{border:"solid 1px #e0e0e0",margin:"0 10px"}},[a("div",{staticClass:"con-div",staticStyle:{"overflow-y":"auto",display:"block"},attrs:{id:"con_in"}},[a("el-table",{ref:t.formId+"Table",staticStyle:{"max-width":"100%",border:"none"},attrs:{data:t.payInterestTable,border:""},on:{"selection-change":t.selsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"employmentNumber",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"personName",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cardType",label:"证照类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cardNumber",label:"证照号码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isBaosong",label:"报送状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isShenfen",label:"身份验证状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.updataRow(e.$index,e.row)}}},[t._v("修改\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"更新日期"}},[a("el-input",{attrs:{value:t.company[0].time_start}})],1)],1)],1)]),t._v(" "),a("el-dialog",{staticClass:"in-table",attrs:{title:"新增住房贷款支出信息",visible:t.centerDialogVisible,"close-on-click-modal":t.close_modal,width:"1000px",top:"10vh"},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("div",{staticClass:"in-table-content"},[a("el-form",{ref:"payInterestForm",staticClass:"demo-ruleForm",attrs:{"status-icon":!0,model:t.payInterestForm,rules:t.rules,"label-width":"80px","label-position":"right",size:"mini"}},[a("div",{staticStyle:{height:"600px",padding:"0 30px 0 0px","overflow-y":"auto"}},[a("div",{staticClass:"pl-20 mt-5 pb-10 line-bottom"},[a("div",{staticClass:"mb-5"},[a("span",{staticClass:"content-top-text-blue"}),t._v(" "),a("span",{staticClass:"title text-red",staticStyle:{"line-height":"40px"}},[t._v("温馨提示")])])]),t._v(" "),a("div",{staticClass:"ml-50 text-notice"},[t._v("住房租金支出专项附加扣除和房贷利息支出专项附加扣除不得同时享受。")]),t._v(" "),a("div",{staticClass:"main-info"},[a("div",{staticStyle:{height:"40px","line-height":"40px",position:"relative",left:"5px"}},[a("span",{staticClass:"content-top-text-blue"}),t._v(" "),a("span",{staticStyle:{"margin-left":"2px"}},[t._v("个人信息信息")])]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[t.isUpdata?a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"姓名"}},[a("el-input",{attrs:{value:t.editValue,readonly:""}})],1):a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"姓名",prop:"personInfoId"}},[a("el-select",{attrs:{placeholder:"-请选择姓名-"},on:{change:function(e){return t.personChange(t.formId)}},model:{value:t.payInterestForm.personInfoId,callback:function(e){t.$set(t.payInterestForm,"personInfoId",e)},expression:"payInterestForm.personInfoId"}},t._l(t.personInfo,function(t,e){return a("el-option",{key:e,attrs:{label:t.personName,value:t.infoId}})}),1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"证件类型"}},[a("el-input",{attrs:{value:"居民身份证"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"证件号码",prop:"cardNumber"}},[a("el-select",{attrs:{placeholder:"-请选择证件号码-"},model:{value:t.payInterestForm.cardNumber,callback:function(e){t.$set(t.payInterestForm,"cardNumber",e)},expression:"payInterestForm.cardNumber"}},t._l(t.personInfo,function(t,e){return a("el-option",{key:e,attrs:{label:t.cardNumber,value:t.cardNumber}})}),1)],1)],1)]),t._v(" "),a("div",{staticClass:"main-info"},[a("div",{staticStyle:{height:"40px","line-height":"40px",position:"relative",left:"5px"}},[a("span",{staticClass:"content-top-text-blue"}),t._v(" "),a("span",{staticStyle:{"margin-left":"2px"}},[t._v("配偶信息")])]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{attrs:{label:"有无配偶",prop:"resource"}},[a("el-radio-group",{model:{value:t.payInterestForm.isMate,callback:function(e){t.$set(t.payInterestForm,"isMate",e)},expression:"payInterestForm.isMate"}},[a("el-radio",{attrs:{label:"有配偶"}}),t._v(" "),a("el-radio",{attrs:{label:"无配偶"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"姓名"}},[a("el-input",{model:{value:t.payInterestForm.mateName,callback:function(e){t.$set(t.payInterestForm,"mateName",e)},expression:"payInterestForm.mateName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"证照类型"}},[a("el-input",{model:{value:t.payInterestForm.mateCardType,callback:function(e){t.$set(t.payInterestForm,"mateCardType",e)},expression:"payInterestForm.mateCardType"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"证照号码"}},[a("el-input",{model:{value:t.payInterestForm.mateCardNumber,callback:function(e){t.$set(t.payInterestForm,"mateCardNumber",e)},expression:"payInterestForm.mateCardNumber"}})],1)],1),t._v(" "),a("div",{staticClass:"house-info"},[a("div",{staticStyle:{height:"40px","line-height":"40px",position:"relative",left:"5px"}},[a("span",{staticClass:"content-top-text-blue"}),t._v(" "),a("span",{staticStyle:{"margin-left":"2px"}},[t._v("住房信息")])]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"房屋坐落地址","label-width":"100px"}},[a("el-input",{model:{value:t.payInterestForm.houseAddress,callback:function(e){t.$set(t.payInterestForm,"houseAddress",e)},expression:"payInterestForm.houseAddress"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"房屋门牌号","label-width":"100px",prop:"sitizenship"}},[a("el-input",{model:{value:t.payInterestForm.houseNumber,callback:function(e){t.$set(t.payInterestForm,"houseNumber",e)},expression:"payInterestForm.houseNumber"}})],1)],1),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"证书类型","label-width":"100px"}},[a("el-select",{model:{value:t.payInterestForm.certificateStage,callback:function(e){t.$set(t.payInterestForm,"certificateStage",e)},expression:"payInterestForm.certificateStage"}},[a("el-option",{attrs:{value:"房屋所有产权证"}}),t._v(" "),a("el-option",{attrs:{value:"不动产权证"}}),t._v(" "),a("el-option",{attrs:{value:"房屋买卖合同"}}),t._v(" "),a("el-option",{attrs:{value:"房屋预售合同"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"房屋证书号","label-width":"100px",prop:"sitizenship"}},[a("el-input",{model:{value:t.payInterestForm.certificateNumber,callback:function(e){t.$set(t.payInterestForm,"certificateNumber",e)},expression:"payInterestForm.certificateNumber"}})],1)],1),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"本人是否借款","label-width":"100px"}},[a("el-radio-group",{model:{value:t.payInterestForm.isPersonGet,callback:function(e){t.$set(t.payInterestForm,"isPersonGet",e)},expression:"payInterestForm.isPersonGet"}},[a("el-radio",{attrs:{label:"是"}}),t._v(" "),a("el-radio",{attrs:{label:"否"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"更新日期","label-width":"100px",prop:"sitizenship"}},[a("el-input",{attrs:{value:t.company[0].time_start}})],1)],1),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"是否是婚前各自首套贷款，且婚后分别扣除50%","label-width":"280px"}},[a("el-radio-group",{model:{value:t.payInterestForm.isFirstGet,callback:function(e){t.$set(t.payInterestForm,"isFirstGet",e)},expression:"payInterestForm.isFirstGet"}},[a("el-radio",{attrs:{label:"是"}}),t._v(" "),a("el-radio",{attrs:{label:"否"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"采集来源",prop:"sitizenship","label-width":"100px"}},[a("el-input",{attrs:{value:"扣缴义务人"}})],1)],1)]),t._v(" "),a("div",{staticClass:"house-info"},[a("div",{staticStyle:{height:"40px","line-height":"40px",position:"relative",left:"5px"}},[a("span",{staticClass:"content-top-text-blue"}),t._v(" "),a("span",{staticStyle:{"margin-left":"2px"}},[t._v("公积金贷款信息")])]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"贷款合同编号","label-width":"100px"}},[a("el-input",{model:{value:t.payInterestForm.gongLoanNumber,callback:function(e){t.$set(t.payInterestForm,"gongLoanNumber",e)},expression:"payInterestForm.gongLoanNumber"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"首次还款日期","label-width":"100px",prop:"sitizenship"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"","value-format":"yyyy-MM-dd"},model:{value:t.payInterestForm.gongFirstDate,callback:function(e){t.$set(t.payInterestForm,"gongFirstDate",e)},expression:"payInterestForm.gongFirstDate"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"贷款期限(月数)","label-width":"100px",prop:"sitizenship"}},[a("el-input",{model:{value:t.payInterestForm.gongLoanDeadline,callback:function(e){t.$set(t.payInterestForm,"gongLoanDeadline",e)},expression:"payInterestForm.gongLoanDeadline"}})],1)],1),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"贷款银行","label-width":"100px"}},[a("el-select",{attrs:{placeholder:"请选择银行"},model:{value:t.payInterestForm.personName,callback:function(e){t.$set(t.payInterestForm,"personName",e)},expression:"payInterestForm.personName"}},[a("el-option",{attrs:{value:"中国工商银行"}}),t._v(" "),a("el-option",{attrs:{value:"中国银行"}}),t._v(" "),a("el-option",{attrs:{value:"中国建设银行"}}),t._v(" "),a("el-option",{attrs:{value:"中国农业银行"}}),t._v(" "),a("el-option",{attrs:{value:"交通银行"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"扣除有效期起","label-width":"100px"}},[a("el-input",{attrs:{value:t.company[0].time_start,readonly:""}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"扣除有效期止","label-width":"100px"}},[a("el-input",{attrs:{value:t.company[0].time_end,readonly:""}})],1)],1),t._v(" "),a("div",{staticStyle:{height:"40px","line-height":"40px",position:"relative",left:"5px"}},[a("span",{staticClass:"content-top-text-blue"}),t._v(" "),a("span",{staticStyle:{"margin-left":"2px"}},[t._v("商业贷款信息")])]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"贷款合同编号","label-width":"100px"}},[a("el-input",{model:{value:t.payInterestForm.shangLoanNumber,callback:function(e){t.$set(t.payInterestForm,"shangLoanNumber",e)},expression:"payInterestForm.shangLoanNumber"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"首次还款日期","label-width":"100px",prop:"sitizenship"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"","value-format":"yyyy-MM-dd"},model:{value:t.payInterestForm.shangFirstDate,callback:function(e){t.$set(t.payInterestForm,"shangFirstDate",e)},expression:"payInterestForm.shangFirstDate"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"贷款期限(月数)","label-width":"100px",prop:"sitizenship"}},[a("el-input",{model:{value:t.payInterestForm.shangLoanDeadline,callback:function(e){t.$set(t.payInterestForm,"shangLoanDeadline",e)},expression:"payInterestForm.shangLoanDeadline"}})],1)],1),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"贷款银行","label-width":"100px"}},[a("el-select",{attrs:{placeholder:"请选择银行"},model:{value:t.payInterestForm.shangBank,callback:function(e){t.$set(t.payInterestForm,"shangBank",e)},expression:"payInterestForm.shangBank"}},[a("el-option",{attrs:{value:"中国工商银行"}}),t._v(" "),a("el-option",{attrs:{value:"中国银行"}}),t._v(" "),a("el-option",{attrs:{value:"中国建设银行"}}),t._v(" "),a("el-option",{attrs:{value:"中国农业银行"}}),t._v(" "),a("el-option",{attrs:{value:"交通银行"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"扣除有效期起","label-width":"100px"}},[a("el-input",{attrs:{value:t.company[0].time_start,readonly:""}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"33%"},attrs:{label:"扣除有效期止","label-width":"100px"}},[a("el-input",{attrs:{value:t.company[0].time_end,readonly:""}})],1)],1)])]),t._v(" "),a("el-form-item",{staticClass:"btn-right"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.submitForm("payInterestForm")}}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.resetForm("payInterestForm")}}},[t._v("重置")])],1)],1)],1)])],1)},staticRenderFns:[]};e.a=l},"Vgt+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("4yxw"),s=a.n(l);for(var i in l)"default"!==i&&function(t){a.d(e,t,function(){return l[t]})}(i);var r=a("BWxv");var o=function(t){a("nezf"),a("kKXk")},n=a("VU/8")(s.a,r.a,!1,o,"data-v-78d7bce8",null);e.default=n.exports},kKXk:function(t,e){},nezf:function(t,e){}});
//# sourceMappingURL=14.87f04021030f7aab2997.js.map