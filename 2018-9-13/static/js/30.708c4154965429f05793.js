webpackJsonp([30],{XjWl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("FMx0"),s=a("mvHQ"),n=a.n(s),o=a("5fic"),c=a("V3Ru"),r=a("0xDb"),l=a.n(r),u=a("PJh5"),p=a.n(u),d={props:["name"],components:{vRemark:a("go8C").a},data:function(){return{contents:["销量=成交订单总数-退款/退货订单数","库存数量=新建套餐冻结的库存数+新增库存数"],p:{addOperActivityPackage:!1,batchDeleteOperActivityPackage_1:!1,batchDeleteOperActivityPackage_2:!1,updateOperActivityPackageStatusById_1:!1,updateOperActivityPackageStatusById_2:!1,updateOperActivityPackageStatusById_3:!1,updateOperActivityPackageStatusById_4:!1,addPackageProduct:!1,updatePackageSpecValueStock:!1,updateOperActivityPackagePriceAndStock:!1,findOperActivityPackageDetailsById:!1,updateOperActivityPackage:!1},showOpr:!0,createUserList:[],status:"",form:{name:"",packageCode:"",createAdmin:"",releaseDate:""},tableData:[],tableLoading:!1,isShowPop:!1,isDownPop:!1,multipleSelection:[],page:{currentPage:1,totalPage:0,pageSize:20}}},activated:function(){this.pControl(),this.submitForm(1),this.getCreateUserList()},mounted:function(){var t=this.name;"allPackage"==t?this.status="":"upPackage"==t?this.status="5":"downProduct"==t?this.status="6":"auditPackage"==t?this.status="2":"submitPackage"==t?this.status="1":"rejectPackage"==t&&(this.status="3"),this.pControl(),this.submitForm(1)},methods:{pControl:function(){for(var t in this.p)this.p[t]=l.a.pc(c[t]);this.p.updateOperActivityPackageStatusById_1||this.p.updateOperActivityPackageStatusById_2||this.p.updateOperActivityPackageStatusById_3||this.p.updateOperActivityPackageStatusById_4||this.p.addPackageProduct||this.p.updatePackageSpecValueStock||this.p.updateOperActivityPackagePriceAndStock||this.findOperActivityPackageDetailsById||this.p.updateOperActivityPackage||(this.showOpr=!1)},getCreateUserList:function(){var t=this;this.$axios.post(o.r,{}).then(function(e){t.createUserList=[],t.createUserList=e.data.data}).catch(function(t){})},submitForm:function(t){var e=this,a={};a.page=t,a.name=this.form.name,a.packageCode=this.form.packageCode,a.createAdmin=this.form.createAdmin,a.startTime=this.form.releaseDate?p()(this.form.releaseDate[0]).format("YYYY-MM-DD"):"",a.endTime=this.form.releaseDate?p()(this.form.releaseDate[1]).format("YYYY-MM-DD"):"",a.pageSize=this.page.pageSize,a.status=this.status,this.page.currentPage=t,this.tableLoading=!0,this.$axios.post(o.u,a).then(function(t){e.tableData=[],e.tableData=t.data.data.data,e.page.totalPage=t.data.data.resultCount,e.tableLoading=!1}).catch(function(t){console.log(t),e.tableLoading=!1})},resetForm:function(t){this.$refs[t].resetFields(),this.form.releaseDate="",this.submitForm(1)},handleSelectionChange:function(t){var e=this;this.multipleSelection=[],t.forEach(function(t,a){e.multipleSelection.push(t.id)})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.submitForm(t)},addPackage:function(){this.$router.push({name:"addPackage"})},editPackage:function(t){sessionStorage.setItem("packageId",t.id),sessionStorage.setItem("packageCode",t.packageCode),this.$router.push({name:"editPackage",query:{packageId:t.id,packageCode:t.packageCode}})},priceInventory:function(t){var e=this;this.$axios.post(o.w,{packageCode:t.packageCode}).then(function(a){a.data.data.length?(sessionStorage.setItem("packageCode",t.packageCode),sessionStorage.setItem("id",t.id),e.$router.push({name:"priceInventory",query:{packageCode:t.packageCode,id:t.id}})):e.$message.warning("请先编辑产品管理!")}).catch(function(t){console.log(t)})},addInventory:function(t){sessionStorage.setItem("packageCode",t.packageCode),sessionStorage.setItem("id",t.id),this.$router.push({name:"packageInventory",query:{packageCode:t.packageCode,id:t.id}})},packageStatus:function(t,e){var a=this,i={};i.id=t.id,6==t.status||8==t.status?i.status=7:7==t.status?i.status=4==e?9:8:i.status=e,i.url=2==e?c.updateOperActivityPackageStatusById_1:3==e||4==e?c.updateOperActivityPackageStatusById_2:5==e?c.updateOperActivityPackageStatusById_3:c.updateOperActivityPackageStatusById_4,this.$axios.post(o.G,i).then(function(t){a.$message.success(t.data.msg),a.submitForm(a.page.currentPage)}).catch(function(t){console.log(t)})},packageInfo:function(t){sessionStorage.setItem("packageInfoId",t.id),this.$router.push({name:"packageInfo",query:{packageInfoId:t.id}})},batchOperate:function(t){var e=this,a=[];for(var i in this.multipleSelection){var s={id:this.multipleSelection[i],status:t};a.push(s)}this.$axios.post(o.f,{paramStr:n()(a)}).then(function(t){e.$message.success(t.data.msg),e.isShowPop=!1,e.isDownPop=!1,e.submitForm(e.page.currentPage)}).catch(function(t){console.log(t),e.isShowPop=!1,e.isDownPop=!1})},productManage:function(t){sessionStorage.setItem("packageId",t.id),sessionStorage.setItem("packageCode",t.packageCode),this.$router.push({path:"/packageProductManege",query:{packageCode:t.packageCode,id:t.id}})}},filters:{formatPrice:function(t){return"￥"+t}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-content"},[t.p.addOperActivityPackage?a("el-button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"primary"},on:{click:t.addPackage}},[t._v("新建套餐\n    ")]):t._e(),t._v(" "),a("div",{staticClass:"search-pane"},[a("el-form",{ref:"form",attrs:{model:t.form,inline:"","label-width":"100px"}},[a("el-form-item",{attrs:{prop:"name",label:"套餐名称"}},[a("el-input",{attrs:{placeholder:"请输入套餐名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"==typeof e?e.trim():e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"packageCode",label:"套餐ID"}},[a("el-input",{attrs:{placeholder:"请输入套餐ID"},model:{value:t.form.packageCode,callback:function(e){t.$set(t.form,"packageCode","string"==typeof e?e.trim():e)},expression:"form.packageCode"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"releaseDate",label:"发布时间"}},[a("el-date-picker",{attrs:{type:"datetimerange",format:"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.releaseDate,callback:function(e){t.$set(t.form,"releaseDate",e)},expression:"form.releaseDate"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"createAdmin",label:"发布人"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.form.createAdmin,callback:function(e){t.$set(t.form,"createAdmin",e)},expression:"form.createAdmin"}},[a("el-option",{attrs:{value:""}},[t._v("全部")]),t._v(" "),t._l(t.createUserList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:" "}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm(1)}}},[t._v("搜索")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("重置")])],1)],1)],1),t._v(" "),a("v-remark",{attrs:{contents:t.contents}}),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{border:"",data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"套餐产品名称","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"product-img"},[a("img",{attrs:{src:e.row.imgUrl}})]),t._v(" "),a("p",{staticClass:"product-name"},[t._v(t._s(e.row.name))]),t._v(" "),a("p",{staticClass:"product-id"},[t._v("套餐ID："+t._s(e.row.packageCode))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"categoryName",label:"产品类目",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{label:"套餐价格",align:"center","min-width":"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t._f("formatPrice")(void 0==e.row.originalPrice?"0":e.row.originalPrice))+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"productNumber",label:"产品数量",align:"center","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stockNum",label:"库存数量",align:"center","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"销量",align:"center","min-width":"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.specNum?e.row.specNum:"0"))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"发布时间/发布人",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.row.upTime))),a("br"),t._v(t._s(e.row.adminName)+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"状态",align:"center","min-width":"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?[t._v("待提交")]:2==e.row.status?[t._v("待审核")]:3==e.row.status?[t._v("已驳回")]:4==e.row.status?[t._v("待上架")]:5==e.row.status?[t._v("已上架")]:6==e.row.status?[t._v("已下架")]:7==e.row.status?[t._v("待审核"),a("br"),t._v("(上架过)")]:8==e.row.status?[t._v("已驳回"),a("br"),t._v("(上架过)")]:9==e.row.status?[t._v("待上架"),a("br"),t._v("(上架过)")]:t._e()]}}])}),t._v(" "),t.showOpr?a("el-table-column",{attrs:{label:"操作","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{float:"left","margin-right":"5px",width:"80px"}},[1==e.row.status||3==e.row.status||6==e.row.status||8==e.row.status&&t.p.updateOperActivityPackageStatusById_1?a("el-button",{attrs:{type:"danger"},on:{click:function(a){t.packageStatus(e.row,2)}}},[t._v("提交审核\n                    ")]):t._e(),t._v(" "),2==e.row.status||7==e.row.status&&t.p.updateOperActivityPackageStatusById_2?a("el-button",{attrs:{type:"danger"},on:{click:function(a){t.packageStatus(e.row,4)}}},[t._v("通过审核\n                    ")]):t._e(),t._v(" "),2==e.row.status||7==e.row.status&&t.p.updateOperActivityPackageStatusById_2?a("el-button",{attrs:{type:"warning"},on:{click:function(a){t.packageStatus(e.row,3)}}},[t._v("驳回审核\n                    ")]):t._e(),t._v(" "),4==e.row.status||9==e.row.status&&t.p.updateOperActivityPackageStatusById_3?a("el-button",{attrs:{type:"warning"},on:{click:function(a){t.packageStatus(e.row,5)}}},[t._v("套餐上架\n                    ")]):t._e(),t._v(" "),5==e.row.status?a("el-button",{attrs:{type:"warning"},on:{click:function(a){t.packageStatus(e.row,6)&&t.p.updateOperActivityPackageStatusById_4}}},[t._v("套餐下架\n                    ")]):t._e()],1),t._v(" "),a("div",{staticStyle:{float:"left"}},[2!=e.row.status&&5!=e.row.status&&7!=e.row.status&&t.p.updateOperActivityPackage?a("div",{staticClass:"blue",on:{click:function(a){t.editPackage(e.row)}}},[t._v("套餐编辑\n                    ")]):t._e(),t._v(" "),1==e.row.status||3==e.row.status||4==e.row.status&&t.p.addPackageProduct?a("div",{staticClass:"blue",on:{click:function(a){t.productManage(e.row)}}},[t._v("产品管理\n                    ")]):t._e(),t._v(" "),5==e.row.status||6==e.row.status||8==e.row.status||9==e.row.status&&t.p.updatePackageSpecValueStock?a("div",{staticClass:"blue",on:{click:function(a){t.addInventory(e.row)}}},[t._v("添加库存\n                    ")]):t._e(),t._v(" "),1==e.row.status||3==e.row.status||4==e.row.status&&t.p.updateOperActivityPackagePriceAndStock?a("div",{staticClass:"blue",on:{click:function(a){t.priceInventory(e.row)}}},[t._v("价格库存\n                    ")]):t._e(),t._v(" "),2!=e.row.status?a("div",{staticClass:"blue",on:{click:function(a){t.packageInfo(e.row)&&t.p.findOperActivityPackageDetailsById}}},[t._v("查看详情")]):t._e()]),t._v(" "),a("div",{staticStyle:{clear:"both"}})]}}])}):t._e()],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,"page-size":t.page.pageSize,layout:"total, prev, pager, next, jumper",total:t.page.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("div",{staticClass:"operate-table"},[a("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.isShowPop,callback:function(e){t.isShowPop=e},expression:"isShowPop"}},[a("p",[t._v("确定删除吗？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.batchOperate("0")}}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.isShowPop=!1}}},[t._v("取消")])],1),t._v(" "),t.p.batchDeleteOperActivityPackage_1?a("el-button",{attrs:{slot:"reference"},on:{click:function(e){t.isShowPop=!0}},slot:"reference"},[t._v("删除")]):t._e()],1),t._v(" "),a("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.isDownPop,callback:function(e){t.isDownPop=e},expression:"isDownPop"}},[a("p",[t._v("确定下架吗？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.batchOperate("6")}}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.isDownPop=!1}}},[t._v("取消")])],1),t._v(" "),t.p.batchDeleteOperActivityPackage_2?a("el-button",{attrs:{slot:"reference"},on:{click:function(e){t.isDownPop=!0}},slot:"reference"},[t._v("下架")]):t._e()],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(d,m,!1,function(t){a("kACS")},"data-v-07652b4c",null).exports,v={components:{vBreadcrumb:i.a,vTabContent:g},data:function(){return{nav:["运营管理","营销工具管理","优惠套餐"],activeName:"allPackage"}},activated:function(){this.activeName="allPackage"},methods:{handleClick:function(t){this.tabName=t.name}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"package-list"},[a("v-breadcrumb",{attrs:{nav:t.nav}}),t._v(" "),a("el-card",{attrs:{"body-style":{padding:"30px 45px",minHeight:"80vh"}}},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部套餐产品",name:"allPackage"}},["allPackage"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"已上架",name:"upPackage"}},["upPackage"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"待提交",name:"submitPackage"}},["submitPackage"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"待审核",name:"auditPackage"}},["auditPackage"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"已下架",name:"downProduct"}},["downProduct"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"已驳回",name:"rejectPackage"}},["rejectPackage"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1)],1)],1)],1)},staticRenderFns:[]};var f=a("VU/8")(v,k,!1,function(t){a("rP/I")},null,null);e.default=f.exports},kACS:function(t,e){},"rP/I":function(t,e){}});