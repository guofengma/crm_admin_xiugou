webpackJsonp([121],{"2MX1":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),i=a("exGp"),o=a.n(i),s=a("FMx0"),l=a("xnHa"),c=a("P9l9"),u=a("19nM"),d=a("0xDb"),m=a.n(d),f={components:{vBreadcrumb:s.a},mixins:[l.a,l.b,l.c],data:function(){return{p:{findDealerRealnameInfo_1:!1,dismissAudit:!1},form:{code:"",nickname:"",idNumber:""},page:{currentPage:1,totalPage:0},id:"",height:"",tableData:[],dialogVisible:!1,memberId:"",reason:"",freeReason:"",reasonList:[]}},activated:function(){this.getList(this.page.currentPage),this.pControl()},created:function(){this.getTbaleHeight()},methods:{pControl:function(){for(var e in this.p)this.p[e]=m.a.pc(u[e])},getList:function(e){var t=this,a={page:e,code:t.form.code,nickname:t.form.nickname,idNumber:t.form.idNumber,url:u.queryDealerRealnamePageList};t.tableLoading=!0,t.$axios.post(c.queryDealerRealnamePageList,a).then(function(e){200==e.data.code?(t.tableLoading=!1,t.tableData=e.data.data.data,t.page.totalPage=e.data.data.resultCount):(t.$message.warning(e.data.msg),t.tableLoading=!1)}).catch(function(e){console.log(e),t.tableLoading=!1})},resetForm:function(e){this.$refs[e].resetFields(),this.getList(1)},realName:function(e){sessionStorage.setItem("memberId",e.id),this.$router.push({name:"realNameInfo",query:{memberId:e.id}})},refuseAudit:function(e){var t=this;return o()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.memberId=e.id,t.freeReason="",t.reason="",t.dialogVisible=!0,a.next=6,t.queryDictonary(6);case 6:t.reasonList=t.tmpAxiosData;case 7:case"end":return a.stop()}},a,t)}))()},confirmRefuse:function(){var e=this;""!=this.reason?this.$axios.post(c.dismissAudit,{id:this.memberId,reason:this.reason}).then(function(t){e.$message.success(t.data.msg),e.dialogVisible=!1,e.getList(e.page.currentPage)}):this.$message.warning("请输入驳回理由")},changeReason:function(e){this.reason=e}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"real-name-auth"},[a("v-breadcrumb",{attrs:{nav:["经销商会员管理","会员管理","实名认证审核"]}}),e._v(" "),a("el-card",{staticStyle:{margin:"10px 0 20px"}},[a("el-form",{ref:"form",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{prop:"nickname",label:"会员搜索","label-width":"120"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"可用户ID/授权码/昵称"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"idNumber",label:"证件号","label-width":"120"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入用户证件号"},model:{value:e.form.idNumber,callback:function(t){e.$set(e.form,"idNumber",t)},expression:"form.idNumber"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.getList(1)}}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("div",{staticClass:"table-block"},[[a("el-table",{attrs:{height:e.height,data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"编号",type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户昵称",prop:"nickname",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"真实姓名",prop:"realname",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"证件号",prop:"idcardNo",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.status?[e._v("待审核")]:e._e(),e._v(" "),1==t.row.status?[e._v("已通过")]:e._e(),e._v(" "),2==t.row.status?[e._v("未通过")]:e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.realName(t.row)}}},[e._v("详细信息")]),e._v(" "),1==t.row.status&&e.p.dismissAudit?a("el-button",{attrs:{type:"danger"},on:{click:function(a){e.refuseAudit(t.row)}}},[e._v("驳回认证")]):e._e()]}}])})],1)],e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.page.currentPage,layout:"total, prev, pager, next, jumper",total:e.page.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2),e._v(" "),a("el-dialog",{attrs:{title:"驳回理由",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-select",{attrs:{placeholder:"请选择驳回理由"},on:{change:e.changeReason},model:{value:e.freeReason,callback:function(t){e.freeReason=t},expression:"freeReason"}},e._l(e.reasonList,function(e,t){return a("el-option",{key:t,attrs:{label:e.dValue,value:e.dValue}})})),e._v(" "),a("el-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"请输入驳回理由",type:"textarea",rows:10},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.confirmRefuse}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]};var b=a("VU/8")(f,p,!1,function(e){a("XsKd")},"data-v-18b98192",null);t.default=b.exports},XsKd:function(e,t){}});