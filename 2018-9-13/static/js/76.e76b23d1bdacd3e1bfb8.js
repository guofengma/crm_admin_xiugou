webpackJsonp([76],{"J/oF":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("FMx0"),n=a("UU1J"),i=a("P9l9"),o=a("PJh5"),l=a.n(o),r=a("0xDb"),c=a.n(r),u=a("19nM"),d=a("xnHa"),p={components:{vBreadcrumb:s.a,icon:n.a},mixins:[d.b],data:function(){return{p:{addNotice:!1,updateNoticeStatus_1:!1,updateNoticeStatus_2:!1,updateNoticeStatus_3:!1,getNoticeDetailById:!1},isShowOperate:!0,checked:[!0,!1],tableData:[],height:"",tipsMask:!1,info:"",formLabelWidth:"100px",form:{status:"",name:"",date:"",nType:"1"},exportForm:{level:""},selected:"",nav:["服务管理","公告"],isShowDelToast:!1,status:"",id:"",btnLoading:!1,levels:[],levelIds:[]}},created:function(){var t=window.screen.availHeight-520;this.height=t,this.pControl()},activated:function(){this.getTable(),this.pControl()},methods:{pControl:function(){for(var t in this.p)this.p[t]=c.a.pc(u[t]);this.p.updateNoticeStatus_1||this.p.updateNoticeStatus_2||this.p.updateNoticeStatus_3||this.p.getNoticeDetailById||(this.isShowOperate=!1)},getTable:function(){var t=this,e=this;e.$axios.post(i.getDealerLevelList,{}).then(function(a){if(200==a.data.code){for(var s in a.data.data){var n=a.data.data[s].name,i=a.data.data[s].id;e.levels.push(n),e.levelIds.push(i)}t.getList(t.page.currentPage)}else e.$message.warning(res.data.msg)}).catch(function(t){console.log(t)})},change:function(t){this.checked=[!1,!1],this.checked[t]=!0,0==t?(this.nav=["服务管理","公告"],this.form.nType=1):(this.nav=["服务管理","通知"],this.form.nType=2),this.page.currentPage=1,this.getList(this.page.currentPage)},getList:function(t){var e=this,a={page:t,status:e.form.status,name:e.form.name,nType:e.form.nType,beginTime:e.form.date?l()(e.form.date[0]).format("YYYY-MM-DD"):"",endTime:e.form.date?l()(e.form.date[1]).format("YYYY-MM-DD"):""};a.url=u.getNoticeList,e.tableLoading=!0,e.$axios.post(i.getNoticeList,a).then(function(t){if(200==t.data.code){for(var a in e.tableLoading=!1,t.data.data.data){var s=t.data.data.data[a].push_way.split(","),n=[];for(var i in e.levelIds)for(var o in s)if(s[o]==e.levelIds[i]){var l=e.levels[i];-1==n.indexOf(l)&&n.push(e.levels[i])}t.data.data.data[a].push_way=n.join(",")}e.tableData=t.data.data.data,e.page.totalPage=t.data.data.resultCount}else e.$message.warning(t.data.msg),e.tableLoading=!1}).catch(function(t){e.tableLoading=!1,console.log(t)})},detailItem:function(t,e){localStorage.setItem("addNoticeInform",e.id),this.$router.push({path:"/noticeInformDetail",query:{id:e.id}})},upStatusItem:function(t,e){this.tipsMask=!0,2==e&&(this.info="确定再次推送？"),3==e&&(this.info="确定取消推送？"),4==e&&(this.info="确定删除？"),this.status=e,this.id=t},oprSure:function(){var t=this,e={id:t.id,status:t.status};2==t.status&&(e.url=u.updateNoticeStatus_1),3==t.status&&(e.url=u.updateNoticeStatus_2),4==t.status&&(e.url=u.updateNoticeStatus_3),t.btnLoading=!0,t.$axios.post(i.updateNoticeStatus,e).then(function(e){200==e.data.code?(t.tipsMask=!1,t.$message.success(e.data.msg),t.getList(t.page.currentPage),t.btnLoading=!1):(t.tipsMask=!1,t.$message.warning(e.data.msg),t.btnLoading=!1)}).catch(function(e){console.log(e),t.btnLoading=!1,t.tipsMask=!1})},addInf:function(){this.$router.push("/addNoticeInform")},resetForm:function(t){this.$refs[t].resetFields(),this.form.date="",this.getList(this.page.currentPage)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notice"},[a("v-breadcrumb",{attrs:{nav:["服务管理","公告通知管理"]}}),t._v(" "),a("transition",{attrs:{name:"move",appear:""}},[a("el-card",{staticStyle:{margin:"10px 0 20px"}},[a("el-form",{ref:"form",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{prop:"status",label:"状态","label-width":"120"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-option",{attrs:{label:"全部状态",value:""}}),t._v(" "),a("el-option",{attrs:{label:"待推送",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"已推送",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"取消推送",value:"3"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"name",label:"发布者","label-width":"120"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入发布者"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"date",label:"时间","label-width":"120"}},[a("el-date-picker",{attrs:{type:"datetimerange",format:"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.getList(1)}}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("重置")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"table-block"},[a("div",{staticStyle:{margin:"-20px 0 20px"}},[a("div",{staticClass:"tab-item",class:t.checked[0]?"checked":"",on:{click:function(e){t.change(0)}}},[t._v("公告")]),t._v(" "),a("div",{staticClass:"tab-item",class:t.checked[1]?"checked":"",staticStyle:{"margin-left":"-5px"},on:{click:function(e){t.change(1)}}},[t._v("通知\n            ")])]),t._v(" "),a("el-form",{ref:"exportForm",staticClass:"search-area",attrs:{inline:!0,model:t.form}},[a("el-form-item",[t.p.addNotice?a("el-button",{attrs:{type:"primary"},on:{click:t.addInf}},[t._v("发布公告/通知")]):t._e()],1)],1),t._v(" "),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:t.height,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"n_type",label:"类型",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.n_type?[t._v("公告")]:t._e(),t._v(" "),2==e.row.n_type?[t._v("通知")]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"push_way",label:"推送用户",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"推送区域",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.push_country?[t._v("全国")]:t._e(),t._v(" "),2==e.row.push_country?[t._v("国外")]:t._e(),t._v(" "),3==e.row.push_country?[t._v("\n                            "+t._s(e.row.address)+"\n                        ")]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"推送时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[[t._v(t._s(t._f("formatDate")(e.row.order_time)))]]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"发布者",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?[t._v("待推送")]:t._e(),t._v(" "),2==e.row.status?[t._v("已推送")]:t._e(),t._v(" "),3==e.row.status?[t._v("取消推送")]:t._e()]}}])}),t._v(" "),t.isShowOperate?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.p.getNoticeDetailById?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.detailItem(e.$index,e.row)}}},[t._v("查看详情\n                        ")]):t._e(),t._v(" "),2==e.row.status&&t.p.updateNoticeStatus_1?a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){t.upStatusItem(e.row.id,2)}}},[t._v("再次推送\n                        ")]):t._e(),t._v(" "),1==e.row.status&&t.p.updateNoticeStatus_2?a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){t.upStatusItem(e.row.id,3)}}},[t._v("取消推送\n                        ")]):t._e(),t._v(" "),3==e.row.status&&t.p.updateNoticeStatus_3?a("el-button",{staticStyle:{width:"80px"},attrs:{type:"danger",size:"small"},on:{click:function(a){t.upStatusItem(e.row.id,4)}}},[t._v(" 删除\n                        ")]):t._e()]}}])}):t._e()],1)],t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,layout:"total, prev, pager, next, jumper",total:t.page.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2),t._v(" "),t.tipsMask?a("div",{staticClass:"pwd-mask"},[a("div",{staticClass:"box"},[a("div",{staticClass:"mask-title"},[a("icon",{staticClass:"ico",attrs:{ico:"icon-jinggao"}}),t._v("\n                温馨提示\n            ")],1),t._v(" "),a("div",{staticClass:"mask-content"},[a("span",{staticClass:"del-tip"},[t._v(t._s(t.info))]),t._v(" "),a("div",{staticClass:"del-btn-group"},[a("el-button",{staticClass:"del-btn",attrs:{loading:t.btnLoading,type:"danger"},on:{click:function(e){t.oprSure(!0)}}},[t._v("确认\n                    ")]),t._v(" "),a("el-button",{on:{click:function(e){t.tipsMask=!1}}},[t._v("取消")])],1)])])]):t._e()],1)},staticRenderFns:[]};var f=a("VU/8")(p,m,!1,function(t){a("YNkq")},null,null);e.default=f.exports},YNkq:function(t,e){}});