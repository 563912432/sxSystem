(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e78f111"],{2120:function(t,e,a){},8996:function(t,e,a){"use strict";var n=a("2120"),c=a.n(n);c.a},c825:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accountMingXi"},[n("div",{staticClass:"position-relative",staticStyle:{"margin-top":"10px"}},[n("img",{attrs:{src:a("f3d5"),alt:""}}),n("div",{staticClass:"account-scre"},[t._v("***********")]),n("div",{staticClass:"account-search"},[t._v(t._s(t.companyInfo.number))]),n("div",{staticClass:"account-name"},[t._v(t._s(t.companyInfo.name))]),n("div",{staticClass:"account-location"},[t._v(t._s(t.companyInfo.bank))]),n("div",[n("el-table",{attrs:{data:t.detailData,border:"","highlight-current-row":"",fit:"",size:"mini"},on:{"selection-change":t.chosePaper}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),n("el-table-column",{attrs:{label:"交易时间",prop:"created_at",align:"center","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"借方（支取）",prop:"jfMoney",align:"center"}}),n("el-table-column",{attrs:{label:"贷方（收入）",prop:"dfMoney",align:"center"}}),n("el-table-column",{attrs:{label:"余额",prop:"lastAccount",align:"center"}}),n("el-table-column",{attrs:{label:"对方户名",prop:"payeeAccountName",align:"center"}}),n("el-table-column",{attrs:{label:"对方账号",prop:"payeeAccountNum",align:"center","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"对方开户机构",prop:"payeeBank",align:"center"}}),n("el-table-column",{attrs:{label:"记账日期",prop:"jzTime",align:"center"}}),n("el-table-column",{attrs:{label:"摘要",prop:"sumarry",align:"center"}}),n("el-table-column",{attrs:{label:"备注",prop:"toUse",align:"center"}})],1),n("div",{staticClass:"position-relative text-center mt-20 mb-20"},[n("el-button",{staticStyle:{"background-color":"#1f93d5","border-color":"#1f93d5"},attrs:{type:"info",size:"medium"},on:{click:t.returnBill}},[t._v("电子回执打印/预览")]),n("el-button",{attrs:{type:"info",size:"medium"},on:{click:t.goBackFirst}},[t._v("返回")])],1)],1)])])},c=[],l=(a("b4fb"),{name:"AccountMingXi",data:function(){return{active:1,detailData:[],selectdeVal:[]}},computed:{companyInfo:function(){return this.$store.state.companyInfo},payTransferInfo:function(){return this.$store.state.payTransferInfo},checkResultInfo:function(){return this.$store.state.checkResultInfo}},watch:{payTransferInfo:function(){this.getList()},checkResultInfo:function(){this.getList()}},created:function(){this.getList()},methods:{getList:function(){this.detailData=this.payTransferInfo.concat(this.checkResultInfo)},goBackFirst:function(){this.$router.push("/main/account")},chosePaper:function(t){this.selectdeVal=t},returnBill:function(){0===this.selectdeVal.length?this.$message.warning("请选择查询的回单信息"):this.selectdeVal.length>1?this.$message.warning("一次只能查询一条信息"):this.$router.push({path:"/main/account/account-huidan",query:{id:this.selectdeVal[0].id}})}}}),o=l,i=(a("8996"),a("9ca4")),s=Object(i["a"])(o,n,c,!1,null,"453b79ae",null);e["default"]=s.exports},f3d5:function(t,e,a){t.exports=a.p+"static/img/mingxi-search.0b26e556.png"}}]);
//# sourceMappingURL=chunk-0e78f111.b9d87f81.js.map