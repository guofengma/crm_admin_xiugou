webpackJsonp([134],{"/fNQ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("FMx0"),n=a("UU1J"),r=a("tF3a"),o=a("P9l9"),i=a("19nM"),s=a("PJh5"),c=a.n(s),d=a("xnHa"),p=a("GVVA"),u={components:{vBreadcrumb:l.a,icon:n.a,region:r.a},mixins:[d.b],data:function(){return{tableData:[],tableLoading:!1,btnLoading:!1,tipsMask:!1,height:"",formLabelWidth:"100px",form:{id:"",phone:"",userType:""},exportForm:{levelId:""},selected:"",address:[],levelList:[],id:"",info:"",type:"",btnTxt:""}},activated:function(){this.getList(this.page.currentPage),this.getLevelList()},methods:{getList:function(e){var t=this,a=t.form;a.page=e,a.levelId=t.exportForm.levelId;var l=t.address;l&&l[0]?(a.provinceId=l[0],l[1]&&(a.cityId=l[1]),l[2]&&(a.areaId=l[2])):(a.provinceId="",a.cityId="",a.areaId=""),t.tableLoading=!0,p.a.queryUserPageList(a).then(function(e){t.tableLoading=!1,t.tableData=[],t.tableData=e.data.data,t.page.totalPage=e.data.totalPage}).catch(function(e){t.tableLoading=!1,console.log(e)})},getLevelList:function(){var e=this;p.a.getUserLevelList({}).then(function(t){e.levelList=t.data}).catch(function(e){console.log(e)})},toLower:function(e){sessionStorage.setItem("memberId",e),this.$router.push({path:"/lowerMemberManage"})},detailItem:function(e,t){sessionStorage.setItem("memberDetail",t.id),this.$router.push({path:"/memberDetail",query:{id:t.id}})},updateStatusItem:function(e,t,a){this.id=t,1==a?(this.info="是否确认关闭？",this.type="关闭",this.btnTxt="确认关闭"):(this.info="是否确认开启？",this.type="开启",this.btnTxt="确认开启"),this.tipsMask=!0},oprSure:function(){var e=this,t={id:e.id},a="";"关闭"==e.type?(a=o.stopDealerById,t.url=i.stopDealerById):(a=o.openDealerById,t.url=i.openDealerById),e.btnLoading=!0,e.$axios.post(a,t).then(function(t){e.btnLoading=!1,e.getList(e.page.currentPage),e.tipsMask=!1}).catch(function(t){e.btnLoading=!1,e.tipsMask=!1})},exportData:function(){var e=this.form;e.page=this.page.currentPage,e.levelId=this.exportForm.levelId,e.url=i.exportDealerListExcel;var t=this.address;t&&t[0]?(e.provinceId=t[0],t[1]&&(e.cityId=t[1]),t[2]&&(e.areaId=t[2])):(e.provinceId="",e.cityId="",e.areaId=""),this.$axios.post(o.exportDealerListExcel,e,{responseType:"blob"}).then(function(e){var t=e.data;if(t){var a=window.URL.createObjectURL(new Blob([t])),l=document.createElement("a");l.style.display="none",l.href=a;var n=c()(new Date).format("YYYYMMDDHHmmss");l.setAttribute("download","会员列表"+n+".xlsx"),document.body.appendChild(l),l.click()}}).catch(function(e){console.log(e)})},resetForm:function(e){this.address=[],this.$refs[e].resetFields(),this.$refs.exportForm.resetFields(),this.getList(this.page.currentPage)},getRegion:function(e){this.address=e}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"member"},[a("v-breadcrumb",{attrs:{nav:["经销商会员管理","会员管理"]}}),e._v(" "),a("el-card",{staticStyle:{margin:"10px 0 20px"}},[a("el-form",{ref:"form",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{prop:"id",label:"会员搜索","label-width":"120"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"可通过用户ID/授权码/昵称"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"idcard",label:"证件号","label-width":"120"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入证件号"},model:{value:e.form.idcard,callback:function(t){e.$set(e.form,"idcard",t)},expression:"form.idcard"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"phone",label:"手机号","label-width":"120"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"dType",label:"会员类型","label-width":"120"}},[a("el-select",{attrs:{placeholder:"请选择会员类型"},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}},[a("el-option",{attrs:{label:"请选择会员类型",value:""}}),e._v(" "),a("el-option",{attrs:{label:"网信经销商",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"供货经销商",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"网红经销商",value:"3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"levelId",label:"用户层级","label-width":"120"}},[a("el-select",{attrs:{placeholder:"全部层级"},model:{value:e.exportForm.levelId,callback:function(t){e.$set(e.exportForm,"levelId",t)},expression:"exportForm.levelId"}},[a("el-option",{attrs:{label:"全部层级",value:""}}),e._v(" "),e._l(e.levelList,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})],2)],1),e._v(" "),a("el-form-item",[a("div",{staticStyle:{display:"inline-block","margin-right":"20px"}},[a("region",{attrs:{regionMsg:e.address},on:{regionMsg:e.getRegion}})],1)]),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.getList(1)}}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"table-block"},[a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"}},[e._v("导出")]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID",width:"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"用户昵称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"授权层级",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.levelName))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"day_count",label:"本日登录",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"month_count",label:"本月登录",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"最近登录时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[[e._v(e._s(e._f("formatDate")(t.row.last_logintime)))]]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"授权码",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"idcard",label:"证件号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"会员类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.userType?[e._v("网信经销商")]:2==t.row.userType?[e._v("供货经销商")]:3==t.row.userType?[e._v("网红经销商")]:e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"addrPreFix",label:"区域/省市区",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"下级",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{cursor:"pointer",color:"#ff6868"},on:{click:function(a){e.toLower(t.row.id)}}},[e._v(e._s(t.row.sub_level_num))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?[e._v("待激活")]:e._e(),e._v(" "),2==t.row.status?[e._v("正常")]:e._e(),e._v(" "),3==t.row.status?[e._v("已关闭")]:e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"160",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.detailItem(t.$index,t.row)}}},[e._v("详情\n                    ")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.page.currentPage,layout:"total, prev, pager, next, jumper",total:e.page.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),e.tipsMask?a("div",{staticClass:"pwd-mask"},[a("div",{staticClass:"box"},[a("div",{staticClass:"mask-title"},[a("icon",{staticClass:"ico",attrs:{ico:"icon-jinggao"}}),e._v("\n                温馨提示\n            ")],1),e._v(" "),a("div",{staticClass:"mask-content"},[a("span",{staticClass:"del-tip"},[e._v(e._s(e.info))]),e._v(" "),a("div",{staticClass:"del-btn-group"},[a("el-button",{staticClass:"del-btn",attrs:{loading:e.btnLoading,type:"danger"},on:{click:function(t){e.oprSure(!0)}}},[e._v(e._s(e.btnTxt)+"\n                    ")]),e._v(" "),a("el-button",{on:{click:function(t){e.tipsMask=!1}}},[e._v("取消")])],1)])])]):e._e()],1)},staticRenderFns:[]};var m=a("VU/8")(u,v,!1,function(e){a("1kKc")},null,null);t.default=m.exports},"1kKc":function(e,t){}});