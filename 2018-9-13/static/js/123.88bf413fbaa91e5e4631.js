webpackJsonp([123],{LAZ6:function(e,t){},rnlR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("FMx0"),r=a("P9l9"),o=a("19nM"),l={components:{breadcrumb:n.a},data:function(){return{nav:["会员管理","经销商会员管理","会员详情","TA的账户","代币账户明细"],tableData:[],page:{currentPage:1,totalPage:0},name:"杨二盟",tableLoading:!1}},activated:function(){this.id=this.$route.query.memberId||JSON.parse(sessionStorage.getItem("memberId")),this.getList(this.page.currentPage)},methods:{getList:function(e){var t=this,a={page:e,dealerId:t.id,url:o.queryDealerAccount};t.tableLoading=!0,t.$axios.post(r.queryDetailTokencoinList,a).then(function(e){200==e.data.code?(t.tableLoading=!1,t.tableData=e.data.data.data,t.page.totalPage=e.data.data.resultCount):(t.$message.warning(e.data.msg),t.tableLoading=!1)}).catch(function(e){console.log(e),t.tableLoading=!1})},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e),this.page.currentPage=e,this.getList(e)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumb",{attrs:{nav:e.nav}}),e._v(" "),a("el-card",[a("p",{staticClass:"title"},[e._v(e._s(e.name)+"的代币账户明细")]),e._v(" "),a("el-table",{attrs:{border:"",data:e.tableData}},[a("el-table-column",{attrs:{prop:"order_no",label:"编号",align:"center","min-width":"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.ti_type?[e._v("收入")]:e._e(),e._v(" "),2==t.row.ti_type?[e._v("支出")]:e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"代币（元）",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.ti_type?[e._v("+"+e._s(t.row.token_coin))]:e._e(),e._v(" "),2==t.row.ti_type?[e._v("-"+e._s(t.row.token_coin))]:e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"类型",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.use_type?[e._v("购买")]:e._e(),e._v(" "),2==t.row.use_type?[e._v("交易提成")]:e._e(),e._v(" "),3==t.row.use_type?[e._v("消费")]:e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"时间",align:"center","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("formatDate")(t.row.create_time))+"\n                ")]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.page.currentPage,layout:"total, prev, pager, next, jumper",total:e.page.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,i,!1,function(e){a("LAZ6")},"data-v-cf1ca9a8",null);t.default=c.exports}});