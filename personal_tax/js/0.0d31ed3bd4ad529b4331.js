webpackJsonp([0],{"/4kf":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADFUlEQVRYR8WXX0hTcRTHv9/rZs5tUeGfB4Mi2pNEDwllaLkFPljQWy/Rm9J7oKIzWLgpKvQcVvTUWz0ESiHkloYSUUH1EClkUA+ZYnR3N3XznrhzW9Om3jsX7m33nvM9Hy6/c37nS5j81d8WR1ks3gLqVyjwCFBBokoAHcAigAUCn3Qqj7HqGIkEuGxGmjsFNfaplXZBn4BXCTh2ijfeCxAn5GGC6J7sdv/cLmdLgKaA2GCPdSqQLgBOM4XzxGg62I9E+UAkwGQ+jbwADf1ysHQtOgLybIGFN6aJTK2WuC697OLSZr1/AM71LntKlOQYgaNFKZ4WEWBuTbc1T9wsm8nV3QBwIRStFsEbEDXFLJ7VEnwnceq53/Uj8ywL0DwkzuSKNg3ixH8pnhEVfLDtc9aPtVMzHmUBvMHoAIkO08UFugAPANgIXAOhmM0VwWC4x9WZBfAFYzUCfZZEmWkR4FXY7zpjxHuD0dck6kznCpbFrngineXfUl/AF1LvAmw1K5COez/ud51MA3wkUWslXwT3wz2uVtYGpLTKrv0yO2Ryi4jgCwgW0jHGsJpPOA/Q26u1UJFRK/TFihWdF+kNqXcIXrcsKvJbF1w28hTiCcj9VjUEMmwARAiet5oMyOK4312ROkNBdRHkIasaAnlBX1D9DNJjNbkYABCZoS8Y1UCU7wkAoNEbVFWSrr0AEJGocQZmCB7fEwDILH0hdQJg414AADJZeBsWpwuGdzGIitCGxiAyRnG1TVuy3gm7A8iO4vXLRB0m2WbtHOwOAJB74353W+o2NDYhXTBn5TrezSASwfJKQo5M3XLP/11IQtFBAu1mv0J69R404gXssHKbCjAU9rtSy08WYN14aBNWFguzsJvi3sYdzobpG4xvADD+NAWkgnbtHYHDBYpvnyb4qieddZEAFzKBeddym5J4BvBYMSFMreWZgoYxsevaUwKniwJhxZhkChrzodIeayfEb+WAbVjZgLiAIcvWLFckZVYgwULMKcGeXBOS72vu6I4zSVvaczG6EMahStlzEeWRJB2jZu35H9r/fLAED4kMAAAAAElFTkSuQmCC"},"0Uha":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},data:function(){return{selectCollection:{texPlayerNumber:"",employmentNumber:"",personName:"",cardNumber:"",isYanzheng:"",isBaosong:"",porsonStatus:"",isCangulie:"",employmentType:""},selectStatus:[]}},props:{formId:{type:String}},created:function(){},methods:{nullClick:function(){this.$emit("nullClick")},handleCheckAllChange:function(){this.selectStatus=["待报送","待反馈","报送成功","报送失败"]},handCancle:function(){this.selectStatus=[]},selectClick:function(e){this.$emit("selectClick",e,this.selectCollection)}}}},FokR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},data:function(){return{selectCollection:{texPlayerNumber:"",employmentNumber:"",personName:"",cardNumber:"",isYanzheng:"",isBaosong:"",porsonStatus:"",isCangulie:"",employmentType:""},selectStatus:[]}},props:{formId:{type:String}},created:function(){},methods:{nullClick:function(){this.$emit("nullClick")},selectClick:function(e){this.$emit("selectClick",e,this.selectCollection)}}}},Gvqx:function(e,t,n){"use strict";var s,a=n("pFYg"),i=(s=a)&&s.__esModule?s:{default:s};e.exports={tableRelevance:function(e,t,n,s){var a=[],l=e.$store.getters.getFormContent(t),o=[];for(var r in l)"已报送"===l[r].isBaosong&&o.push(l[r]);var c=o,u=e.$store.getters.getFormContent(s);for(var d in c)for(var m in n)if(a[d]||(a[d]={}),"string"==typeof n[m]&&(a[d][n[m]]=c[d][n[m]]),"object"===(0,i.default)(n[m]))for(var f in n[m])a[d][f]=c[d][n[m][f]];for(var v in a)for(var p in u)a[v].infoId===u[p].personInfoId&&a.splice(v,1);return a},tableRelevanceArr:function(e,t,n,s,a,i){var l=t,o=n;for(var r in t)for(var c in o)if(t[r][a]!==o[c][i]);else for(var u in s)l[r]?l[r][s[u]]=o[c][s[u]]:l[r]={};return l},yearShuilvPercent:function(e){var t={};switch(!0){case e<=1500:t.shuilv="3%",t.susuan=0,t.taxPay=.03*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=1500&&e<4500:t.shuilv="10%",t.susuan=105,t.taxPay=.1*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=4500&&e<9e3:t.shuilv="20%",t.susuan=555,t.taxPay=.2*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=9e3&&e<35e3:t.shuilv="25%",t.susuan=1005,t.taxPay=.25*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=35e3&&e<55e3:t.shuilv="30%",t.susuan=2755,t.taxPay=.3*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=55e3&&e<8e4:t.shuilv="35%",t.susuan=5505,t.taxPay=.35*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>8e4:t.shuilv="45%",t.susuan=13505,t.taxPay=.45*e-t.susuan,t.taxPay=t.taxPay.toFixed(2)}return t},laowuShuilvPercent:function(e){var t={};switch(!0){case e<=2e4:t.shuilv="20%",t.susuan=0,t.taxPay=.2*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=2e4&&e<5e4:t.shuilv="30%",t.susuan=2e3,t.taxPay=.3*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=5e4:t.shuilv="40%",t.susuan=7e3,t.taxPay=.4*e-t.susuan,t.taxPay=t.taxPay.toFixed(2)}return t},shuilvPercent:function(e){var t={};switch(!0){case e<=0:t.shuilv="0%",t.susuan=0,t.taxPay=0,t.taxPay=t.taxPay.toFixed(2);break;case e>0&&e<=36e3:t.shuilv="3%",t.susuan=0,t.taxPay=.03*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=36e3&&e<144400:t.shuilv="10%",t.susuan=2520,t.taxPay=.1*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=144400&&e<3e5:t.shuilv="20%",t.susuan=16920,t.taxPay=.2*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=3e5&&e<42e4:t.shuilv="25%",t.susuan=31920,t.taxPay=.25*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=42e4&&e<66e4:t.shuilv="30%",t.susuan=52920,t.taxPay=.3*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=66e4&&e<96e4:t.shuilv="35%",t.susuan=85920,t.taxPay=.35*e-t.susuan,t.taxPay=t.taxPay.toFixed(2);break;case e>=96e4:t.shuilv="45%",t.susuan=181920,t.taxPay=.45*e-t.susuan,t.taxPay=t.taxPay.toFixed(2)}return t},getBirth:function(e){var t="";return null!=e&&""!==e&&(15===e.length?t="19"+e.slice(6,12):18===e.length&&(t=e.slice(6,14)),t=t.replace(/(.{4})(.{2})/,"$1-$2-")),t},shuilvEnd:function(e,t){return(this.shuilvPercent(e*t).taxPay-this.shuilvPercent(e*(t-1)).taxPay).toFixed(2)},defultNull:function(e,t){for(var n in t)e[n]||(e[n]=t[n]);return e},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){var a=n[s].trim();if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""},setCookie:function(e,t){var n=new Date;n.setTime(n.getTime()+2592e6),document.cookie=e+"="+escape(t)+";expires="+n.toGMTString()},getKeyObj:function(e,t){var n={};for(var s in t)for(var a in e)t[s]===a&&(n[a]=e[a]);return n}}},Hf7o:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,a=n("Dd8w"),i=(s=a)&&s.__esModule?s:{default:s},l=n("NYxO");t.default={props:{formId:{type:String}},computed:(0,i.default)({},(0,l.mapGetters)(["company"])),methods:{deleteClick:function(e){this.$emit("deleteClick",e)},addFormClick:function(){this.$emit("addFormClick")},nullClick:function(){this.$emit("nullClick")},submittedClick:function(e){this.$emit("submittedClick",e)},fankuiClick:function(e){this.$emit("fankuiClick",e)}}}},M6js:function(e,t){},OQEv:function(e,t,n){"use strict";var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{border:"1px rgb(224, 224, 224) solid",margin:"10px","padding-top":"15px",position:"relative"}},[n("el-form",{ref:"form",staticStyle:{position:"relative"},attrs:{model:e.selectCollection,"label-width":"80px"}},[n("div",{staticStyle:{display:"flex"}},[n("el-form-item",{attrs:{label:"工号"}},[n("el-input",{model:{value:e.selectCollection.employmentNumber,callback:function(t){e.$set(e.selectCollection,"employmentNumber",t)},expression:"selectCollection.employmentNumber"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{model:{value:e.selectCollection.personName,callback:function(t){e.$set(e.selectCollection,"personName",t)},expression:"selectCollection.personName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"证件号码"}},[n("el-input",{model:{value:e.selectCollection.cardNumber,callback:function(t){e.$set(e.selectCollection,"cardNumber",t)},expression:"selectCollection.cardNumber"}})],1)],1),e._v(" "),n("div",{staticClass:"flex"},[n("el-form-item",{attrs:{label:"报送状态"}},[n("el-checkbox-group",{model:{value:e.selectStatus,callback:function(t){e.selectStatus=t},expression:"selectStatus"}},[n("el-checkbox",{attrs:{label:"待报送",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"待反馈",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"报送成功",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"报送失败",name:"type"}})],1)],1),e._v(" "),n("el-form-item",{staticStyle:{display:"inline-block"}},[n("el-button",{attrs:{size:"small"},on:{click:e.handleCheckAllChange}},[e._v("全选")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:e.handCancle}},[e._v("全不选")])],1)],1),e._v(" "),n("el-button",{staticStyle:{position:"absolute",right:"80px"},attrs:{size:"small",type:"primary"},on:{click:function(t){return e.selectClick(e.formId)}}},[e._v("查询\n    ")]),e._v(" "),n("el-button",{staticStyle:{position:"absolute",right:"10px"},attrs:{size:"small"}},[e._v("重置")]),e._v(" "),n("div",{staticStyle:{position:"relative",width:"10px",height:"45px"}})],1)],1)},staticRenderFns:[]};t.a=s},bnex:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("FokR"),a=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);var l=n("fSlF");var o=function(e){n("M6js")},r=n("VU/8")(a.a,l.a,!1,o,"data-v-d6205078",null);t.default=r.exports},fSlF:function(e,t,n){"use strict";var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{border:"1px rgb(224, 224, 224) solid",margin:"10px","padding-top":"15px"}},[n("el-form",{ref:"form",attrs:{model:e.selectCollection,"label-width":"80px"}},[n("div",{staticStyle:{display:"flex"}},[n("el-form-item",{attrs:{label:"工号"}},[n("el-input",{model:{value:e.selectCollection.employmentNumber,callback:function(t){e.$set(e.selectCollection,"employmentNumber",t)},expression:"selectCollection.employmentNumber"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{model:{value:e.selectCollection.personName,callback:function(t){e.$set(e.selectCollection,"personName",t)},expression:"selectCollection.personName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"证件号码"}},[n("el-input",{model:{value:e.selectCollection.cardNumber,callback:function(t){e.$set(e.selectCollection,"cardNumber",t)},expression:"selectCollection.cardNumber"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否残孤烈"}},[n("el-select",{model:{value:e.selectCollection.isCangulie,callback:function(t){e.$set(e.selectCollection,"isCangulie",t)},expression:"selectCollection.isCangulie"}},[n("el-option",{attrs:{label:"是",value:!0}}),e._v(" "),n("el-option",{attrs:{label:"否",value:!1}})],1)],1)],1),e._v(" "),n("el-button",{staticStyle:{position:"relative",left:"90%"},attrs:{size:"small",type:"primary"},on:{click:function(t){return e.selectClick(e.formId)}}},[e._v("查询\n    ")]),e._v(" "),n("el-button",{staticStyle:{position:"relative",left:"90%"},attrs:{size:"small"}},[e._v("重置")])],1)],1)},staticRenderFns:[]};t.a=s},jW3A:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Hf7o"),a=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);var l=n("kOfx");var o=function(e){n("uiGP")},r=n("VU/8")(a.a,l.a,!1,o,"data-v-619ef7a4",null);t.default=r.exports},kOfx:function(e,t,n){"use strict";var s={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"hot-notice"},[s("span",{staticStyle:{"font-size":"18px","font-weight":"bold","line-height":"18px"}},[e._v("扣除年度："+e._s(e.company[0].shenbao_month))]),e._v(" "),s("img",{staticStyle:{width:"18px",height:"18px","margin-bottom":"4px"},attrs:{src:n("/4kf"),alt:""}}),e._v(" "),s("span",[e._v("在任一采集页面进行【导入】、【下载更新】或是选择【导出全部】，均是对所有采集项目的操作，无需重复操作")])]),e._v(" "),s("div",{staticClass:"rg-top",staticStyle:{height:"50px"}},[s("div",{staticClass:"rg-top-bottom"},[s("div",{staticStyle:{"line-height":"45px"}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addFormClick}},[e._v("新增")]),e._v(" "),s("el-dropdown",[s("el-button",{attrs:{type:"primary",size:"small","split-button":!0}},[e._v("\n            导入\n            "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(t){return e.nullClick(t)}}},[e._v("导入文件")]),e._v(" "),s("el-dropdown-item",{nativeOn:{click:function(t){return e.nullClick(t)}}},[e._v("模板下载")])],1)],1),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.deleteClick(e.formId)}}},[e._v("删除")]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.submittedClick(e.formId)}}},[e._v("报送")]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.fankuiClick(e.formId)}}},[e._v("获取反馈")]),e._v(" "),s("el-dropdown",[s("el-button",{attrs:{type:"primary",size:"small","split-button":!0}},[e._v("\n            下载更新\n            "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(t){return e.nullClick(t)}}},[e._v("全部人员")]),e._v(" "),s("el-dropdown-item",{nativeOn:{click:function(t){return e.nullClick(t)}}},[e._v("指定人员")])],1)],1),e._v(" "),s("el-dropdown",[s("el-button",{attrs:{type:"primary",size:"small","split-button":!0}},[e._v("\n            导出\n            "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(t){return e.nullClick(t)}}},[e._v("选中人员")]),e._v(" "),s("el-dropdown-item",{nativeOn:{click:function(t){return e.nullClick(t)}}},[e._v("全部人员")])],1)],1)],1)])])])},staticRenderFns:[]};t.a=s},mvHQ:function(e,t,n){e.exports={default:n("qkKv"),__esModule:!0}},oStf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("0Uha"),a=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);var l=n("OQEv");var o=function(e){n("rDuL")},r=n("VU/8")(a.a,l.a,!1,o,"data-v-cc9dd724",null);t.default=r.exports},pbfL:function(e,t,n){"use strict";var s,a=n("mvHQ"),i=(s=a)&&s.__esModule?s:{default:s};e.exports={nullClick:function(){this.$alert("本系统为教学系统，目前只提供常用操作功能","信息",{confirmButtonText:"确定"})},resetForm:function(e){this.$refs[e].resetFields()},selsChange:function(e){this.sels=e},deleteClick:function(e){var t=this;0!==this.sels.length?this.$confirm("是否要删除选中的"+this.sels.length+"条数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n=t.sels,s={};for(var a in s.formId=e,s.infoId=[],s.serviceId=t.$store.state.service.servicesId,n)s.infoId.push(n[a].infoId);t.$store.commit("deleteFormInfo",s),t.sels.length=0;var i=e+"Table";t.$refs[i].clearSelection(),t.isSelectNow=!1,t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})}):this.$message.warning("选中才能删除")},submittedClick:function(e){var t=this;0!==this.sels.length?this.$confirm("是否要报送选中的"+this.sels.length+"条数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={};for(var s in n.formId=e,n.infoId=[],n.serviceId=t.$store.state.service.servicesId,t.sels)n.infoId.push(t.sels[s].infoId);t.$store.commit("updataBaosong",n),t.$message({type:"success",message:"报送成功!"})}).catch(function(e){console.log(e)}):this.$message.warning("选中才能报送")},fankuiClick:function(e){var t=this;0!==this.sels.length?this.$confirm("是否要获取选中的"+this.sels.length+"条数据的反馈(只会反馈报送中的数据)","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={};for(var s in n.formId=e,n.infoId=[],n.serviceId=t.$store.state.service.servicesId,t.sels)n.infoId.push(t.sels[s].infoId);t.$store.commit("updataFankui",n),t.$message({type:"success",message:"获取反馈成功!"})}).catch(function(e){t.$message({type:"info",message:"已取消反馈"})}):this.$message.warning("选中才能获取反馈")},selectObjCompare:function(e,t){for(var n in e)if(""!==e[n]&&(t[n]||""===t[n])&&e[n]!==t[n])return!1;return!0},selectClick:function(e,t){this.selectArr=[],this.isSelectNow=!0;var n=this.$store.getters.getFormContent(e);for(var s in n)this.selectObjCompare(t,n[s])&&this.selectArr.push(n[s]);this.$forceUpdate()},addFormClick:function(){this.centerDialogVisible=!0},goBack:function(){history.back(-1)},updataClick:function(e){1===this.sels.length?(this.centerDialogVisible=!0,this.$data[e]=JSON.parse((0,i.default)(this.sels[0])),this.isUpdata=!0):this.$message.warning("只能选中一个的时候修改")},changeSelectClick:function(){this.isSelect?this.isSelect=!1:this.isSelect=!0},addMetaInfo:function(e){var t={},n=this[e];t.personInfoId=n.personInfoId,t.isMate=n.isMate,t.mateCardType=n.mateCardType,t.mateCardNumber=n.mateCardNumber,t.mateName=n.mateName,this.$store.commit("addMeta",t)},personChange:function(e){var t=this.$store.getters.getMate(this[e].personInfoId);t&&(this[e].isMate=t.isMate,this[e].mateCardType=t.mateCardType,this[e].mateCardNumber=t.mateCardNumber,this[e].mateName=t.mateName)}}},qkKv:function(e,t,n){var s=n("FeBl"),a=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},rDuL:function(e,t){},tQk3:function(e,t,n){"use strict";e.exports={centerDialogVisible:!1,isSelect:!1,close_modal:!1,sels:[],isSelectNow:!1,isUpdata:!1,selectArr:[],selectStatus:[]}},uiGP:function(e,t){}});
//# sourceMappingURL=0.0d31ed3bd4ad529b4331.js.map