webpackJsonp([101],{Md0S:function(t,a){},l3aJ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("FMx0"),l=e("5fic"),r=e("V3Ru"),i=e("0xDb"),o=e.n(i),c=(e("PJh5"),{props:["name"],components:{vBreadcrumb:n.a},data:function(){return{nav:["运营管理","营销工具管理","奖品池管理","冻结库存活动"],p:{},tableData:[{id:111}],tableLoading:!1,page:{currentPage:1,totalPage:0,pageSize:20},id:""}},activated:function(){this.pControl(),this.submitForm(1)},methods:{pControl:function(){for(var t in this.p)this.p[t]=o.a.pc(r[t])},submitForm:function(t){var a=this,e={};e.page=t,this.page.currentPage=t,this.tableLoading=!0,this.$axios.post(l.u,e).then(function(t){a.tableData=[],a.tableData=t.data.data.data,a.page.totalPage=t.data.data.resultCount,a.tableLoading=!1}).catch(function(t){console.log(t),a.tableLoading=!1})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.submitForm(t)},watchItem:function(t){this.$router.push("/packageList")}}}),s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"prize-poll"},[e("v-breadcrumb",{attrs:{nav:t.nav}}),t._v(" "),e("el-card",{attrs:{"body-style":{padding:"30px 45px",minHeight:"80vh"}}},[e("div",{staticClass:"tab-content"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{border:"",data:t.tableData}},[e("el-table-column",{attrs:{prop:"id",label:"名称",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"id",label:"活动类型",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"id",label:"冻结数量",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:"开始/结束时间",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.watchItem(a.row)}}},[t._v("查看")])]}}])})],1),t._v(" "),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,"page-size":t.page.pageSize,layout:"total, prev, pager, next, jumper",total:t.page.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])],1)},staticRenderFns:[]};var u=e("VU/8")(c,s,!1,function(t){e("Md0S")},"data-v-54be2841",null);a.default=u.exports}});