webpackJsonp([75],{"L+St":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o("0xDb"),o("Te9O");var a={components:{vBreadcrumb:o("FMx0").a},data:function(){return{id:"",form:{name:"",time:[]},table:[{no:123456789,id:1,status:"1"},{no:123456789,id:1,status:"2"}],page:{currentPage:1,totalPage:0},isShowdia:!1,isShowRecorDia:!1,recordTable:[{id:1}]}},methods:{settleRecord:function(t){this.isShowRecorDia=!0},settlement:function(t){this.id=t.id,this.isShowdia=!0},confirmSett:function(){this.axios.post().then(function(t){console.log(t.data)})},queryForm:function(t){},showInfo:function(t){this.$router.push({name:"invoiceInfo",query:{id:t.id}})},handleSizeChange:function(t){},handleCurrentChange:function(t){this.page.currentPage=t,this.queryForm(t)}}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cloud-warehouse"},[o("v-breadcrumb",{attrs:{nav:["结算管理","云仓结算管理"]}}),t._v(" "),o("el-card",{attrs:{"body-style":{padding:"30px"}}},[o("el-form",{ref:"form",attrs:{model:t.form,inline:""}},[o("el-form-item",{attrs:{prop:"time",label:"发货时间"}},[o("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1),t._v(" "),o("el-form-item",{attrs:{label:" "}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.queryForm(1)}}},[t._v("查询")]),t._v(" "),o("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("重置")])],1)],1)],1),t._v(" "),o("el-card",{staticStyle:{"margin-top":"20px"},attrs:{"body-style":{padding:"30px"}}},[o("el-table",{attrs:{data:t.table,border:""}},[o("el-table-column",{attrs:{prop:"no",label:"编号",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"no",label:"开始时间",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"no",label:"结束时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{color:"red"}},[t._v(t._s(t._f("handleMoney")(e.row.no)))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"no",label:"推送数量",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"no",label:"发货数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{color:"red"}},[t._v(t._s(t._f("handleMoney")(e.row.no)))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"no",label:"结算额",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"no",label:"状态",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary"},on:{click:function(o){t.showInfo(e.row)}}},[t._v("查看发货单")]),t._v(" "),1==e.row.status?[o("el-button",{attrs:{type:"danger"},on:{click:function(o){t.settlement(e.row)}}},[t._v("结算")])]:t._e(),t._v(" "),2==e.row.status?[o("el-button",{attrs:{type:"success"},on:{click:function(o){t.settleRecord(e.row)}}},[t._v("结算记录")])]:t._e()]}}])})],1),t._v(" "),o("div",{staticClass:"block"},[o("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,layout:"total, prev, pager, next, jumper",total:t.page.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"确认结算",visible:t.isShowdia,width:"30%",center:""},on:{"update:visible":function(e){t.isShowdia=e}}},[o("p",{staticClass:"deposit-payment"},[t._v("确认与百世汇通结算吗？")]),t._v(" "),o("p",{staticClass:"deposit-payment"},[t._v("结算金额：666")]),t._v(" "),o("p",{staticClass:"deposit-payment"},[t._v("结算操作人：王小明")]),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:t.confirmSett}},[t._v("确 定")]),t._v(" "),o("el-button",{on:{click:function(e){t.isShowdia=!1}}},[t._v("取 消")])],1)]),t._v(" "),o("el-dialog",{attrs:{title:"结算记录",visible:t.isShowRecorDia,width:"30%",center:""},on:{"update:visible":function(e){t.isShowRecorDia=e}}},[o("el-table",{attrs:{data:t.recordTable,border:""}},[o("el-table-column",{attrs:{prop:"id",label:"结算时间",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"id",label:"结算金额",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"id",label:"结算操作人",align:"center"}})],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isShowRecorDia=!1}}},[t._v("确 定")]),t._v(" "),o("el-button",{on:{click:function(e){t.isShowRecorDia=!1}}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]};var l=o("VU/8")(a,n,!1,function(t){o("lUVw")},"data-v-4f4dcc82",null);e.default=l.exports},lUVw:function(t,e){}});