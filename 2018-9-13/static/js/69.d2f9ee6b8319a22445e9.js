webpackJsonp([69],{"H/9J":function(e,t){},NImm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("0xDb"),n=a.n(r),l=a("Te9O"),o=a("FMx0"),i=a("6MZE"),s=a("xnHa"),c={components:{vBreadcrumb:o.a},mixins:[s.b],data:function(){return{adminList:[],supplayerList:[],tableLoading:!1,form:{name:"",dealUser:"",supplyName:"",time:[]},table:[]}},activated:function(){this.getAdminList(),this.getSupplierList(),this.getList(this.page.currentPage)},methods:{getList:function(e){var t=this,a={};a.adminId=this.form.dealUser,a.nickname=this.form.name,a.supplierId=this.form.supplyName,a.startTime=0==this.form.time.length?"":n.a.formatTime(this.form.time[0],1),a.endTime=0==this.form.time.length?"":n.a.formatTime(this.form.time[1],1),a.page=e,a.url=i.queryReturnMoneyList,this.tableLoading=!0,this.$axios.post(l.queryReturnMoneyList,a).then(function(a){t.table=a.data.data.data,t.page.currentPage=e,t.page.totalPage=a.data.data.resultCount,t.tableLoading=!1}).catch(function(e){t.tableLoading=!1})},showDetail:function(e){sessionStorage.setItem("afterSaleOprId",e.orderProductId),this.$router.push({name:"afterSaleOpr",query:{afterSaleOprId:e.orderProductId}})},handleSizeChange:function(e){},handleCurrentChange:function(e){this.page.currentPage=e,this.getList(e)},resetForm:function(e){this.$refs[e].resetFields(),this.getList(this.page.currentPage)},getAdminList:function(){var e=this;this.$axios.post(l.adminList,{}).then(function(t){e.adminList=t.data.data})},getSupplierList:function(){var e=this;this.$axios.post(l.querySupplierList,{}).then(function(t){e.supplayerList=t.data.data})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"refund-mange"},[a("v-breadcrumb",{attrs:{nav:["结算管理","退款审核"]}}),e._v(" "),a("el-card",{attrs:{"body-style":{padding:"30px"}}},[a("el-form",{ref:"form",attrs:{model:e.form,inline:""}},[a("el-form-item",{attrs:{prop:"name",label:"买家姓名"}},[a("el-input",{attrs:{placeholder:"请输入买家姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"dealUser",label:"处理人"}},[a("el-select",{attrs:{placeholder:"请选择处理人"},model:{value:e.form.dealUser,callback:function(t){e.$set(e.form,"dealUser",t)},expression:"form.dealUser"}},e._l(e.adminList,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{prop:"supplyName",label:"供应商名称"}},[a("el-select",{attrs:{placeholder:"请选择供应商名称"},model:{value:e.form.supplyName,callback:function(t){e.$set(e.form,"supplyName",t)},expression:"form.supplyName"}},e._l(e.supplayerList,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{prop:"time",label:"退款时间"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:" "}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.getList(1)}}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-card",{staticStyle:{"margin-top":"20px"},attrs:{"body-style":{padding:"30px"}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.table,border:""}},[a("el-table-column",{attrs:{prop:"order_num",label:"订单编号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"买家",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"product_name",label:"产品",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pay_time",label:"成交时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.pay_time?[e._v("\n          "+e._s(e._f("formatDate")(t.row.pay_time))+"\n        ")]:void 0}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.price?[a("span",{staticStyle:{color:"red"}},[e._v(e._s(e._f("handleMoney")(t.row.price)))])]:void 0}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"num",label:"数量",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"freight_price",label:"邮费",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品总价",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.price?[a("span",{staticStyle:{color:"red"}},[e._v(e._s(e._f("handleMoney")(t.row.price*t.row.num+t.row.freight_price)))])]:void 0}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"supplierName",label:"供应商",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"out_refund_no",label:"退款编号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"refund_time",label:"退款时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.refund_time?[e._v("\n          "+e._s(e._f("formatDate")(t.row.refund_time))+"\n        ")]:void 0}}])}),e._v(" "),a("el-table-column",{attrs:{label:"退款金额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",{staticStyle:{color:"red"}},[e._v("余额："+e._s(e._f("handleMoney")(t.row.actual_balance)))]),e._v(" "),a("p",{staticStyle:{color:"red"}},[e._v("代币："+e._s(e._f("handleMoney")(t.row.actual_token_coin)))]),e._v(" "),a("p",{staticStyle:{color:"red"}},[e._v("积分："+e._s(e._f("handleMoney")(t.row.actual_user_score)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"要求",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("仅退款")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"adminUser",label:"处理人",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"处理情况",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("同意退款")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.showDetail(t.row)}}},[e._v("详情")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.page.currentPage,layout:"total, prev, pager, next, jumper",total:e.page.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(c,u,!1,function(e){a("H/9J")},"data-v-68d0ffdb",null);t.default=p.exports}});