webpackJsonp([142],{DDzf:function(t,e){},XKGS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),i=a.n(s),l=a("FMx0"),o=a("UU1J"),r=a("EkIv"),n=(a("0xDb"),a("19nM")),d=a("xnHa"),c=a("GVVA"),m={components:{vBreadcrumb:l.a,icon:o.a,deleteToast:r.a},mixins:[d.b],data:function(){return{tableData:[],type:"",height:"",addMask:!1,editMask:!1,isShowDelToast:!1,formLabelWidth:"100px",form:{name:"",status:"1",img:""},addForm:{name:"",status:"1",img:""},title:"添加二级类目",id:"",itemId:"",name:"",itype:"",delId:66,delUrl:"http://api",delUri:""}},created:function(){var t=window.screen.availHeight-500;this.height=t},activated:function(){this.name=this.$route.query.name||JSON.parse(sessionStorage.getItem("secondClassify").name),this.id=this.$route.query.id||JSON.parse(sessionStorage.getItem("secondClassify").id),this.type=this.$route.query.type||JSON.parse(sessionStorage.getItem("secondClassify").type),this.getList(this.page.currentPage)},methods:{getList:function(t){var e=this,a={page:t,fatherId:this.id,pageSize:this.page.pageSize,level:2};c.a.queryProductCategoryList(a).then(function(t){e.tableData=[],e.tableData=t.data.data,e.page.totalPage=t.data.totalNum}).catch(function(t){console.log(t)})},addClassify:function(){this.title="添加二级类目",this.addMask=!0,this.addForm.name="",this.addForm.img="",this.addForm.status="1",this.itype="add"},editItem:function(t){this.title="编辑二级类目",this.editMask=!0,t.status=t.status.toString(),this.form=t,this.itemId=t.id,this.itype="edit"},addOrEdit:function(t){var e=this,a="",s={};if(s.name=this[t].name,s.img="http://example.adios.com/a.png",s.status=this[t].status,s.type=this.type,s.level=2,s.fatherId=this.id,s.name){/^[A-Za-z\u4e00-\u9fa5]{2,16}$/.test(s.name)?s.img?("add"==this.itype?a="addProductCategory":(a="modifyProductCategory",s.id=this.itemId),this.btnLoading=!0,c.a[a](s).then(function(t){e.btnLoading=!1,e.addMask=!1,e.editMask=!1,e.getList(e.page.currentPage)}).catch(function(t){console.log(t)})):this.$message.warning("请上传类目图标!"):this.$message.warning("请输入2-16位汉字字母的组合!")}else this.$message.warning("请输入类目名称!")},delItem:function(t){this.delId=t,this.delUrl="deleteProductCategory",this.delUri=n.deleteProductCategory_2,this.isShowDelToast=!0},deleteToast:function(t){this.isShowDelToast=t,this.getList(this.page.currentPage)},handleAvatarSuccess:function(t,e){"add"==this.itype?this.addForm.img=t.data.imageUrl:this.form.img=t.data.imageUrl},cancel:function(){this.addMask=!1,this.editMask=!1,this.getList(this.page.currentPage)},toThirdClassify:function(t){sessionStorage.setItem("thirdClassify",i()({name:t.name,id:t.id,type:t.type,superiorName:t.superiorName})),this.$router.push({path:"/thirdClassify",query:{name:t.name,id:t.id,type:t.type,superiorName:t.superiorName}})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"second-classify"},[a("v-breadcrumb",{attrs:{nav:["品牌产品管理","产品分类管理",t.name]}}),t._v(" "),a("div",{staticClass:"table-block"},[a("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary"},on:{click:t.addClassify}},[t._v("添加二级类目")]),t._v(" "),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:t.height,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"二级分类",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"superiorName",label:"一级分类",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"图标",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.img,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?[t._v("启用")]:t._e(),t._v(" "),2==e.row.status?[t._v("禁用")]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"160",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.toThirdClassify(e.row)}}},[t._v("三级类目")]),t._v(" "),a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){t.editItem(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.delItem(e.row.id)}}},[t._v("删除")])]}}])})],1)],t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,layout:"total, prev, pager, next, jumper",total:t.page.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.addMask},on:{"update:visible":function(e){t.addMask=e}}},[a("el-form",{model:{value:t.addForm,callback:function(e){t.addForm=e},expression:"addForm"}},[a("el-form-item",{attrs:{label:"类目名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name",e)},expression:"addForm.name"}}),t._v(" "),a("span",{staticStyle:{"font-size":"12px",color:"#aaa"}},[t._v("（2-16位汉字字母组合）")])],1),t._v(" "),a("el-form-item",{staticClass:"icon-area",attrs:{label:"类目图标","label-width":t.formLabelWidth}},[a("el-input",{attrs:{readonly:"","auto-complete":"off"},model:{value:t.addForm.img,callback:function(e){t.$set(t.addForm,"img",e)},expression:"addForm.img"}}),t._v(" "),a("el-upload",{staticClass:"icon-uploader",attrs:{action:"/common/upload/oss","on-success":t.handleAvatarSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"}},[a("i",{staticClass:"el-icon-upload"}),t._v("上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"一级分类","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否启用","label-width":t.formLabelWidth}},[a("el-select",{model:{value:t.addForm.status,callback:function(e){t.$set(t.addForm,"status",e)},expression:"addForm.status"}},[a("el-option",{attrs:{label:"是",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"2"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrEdit("addForm")}}},[t._v("确 认")]),t._v(" "),a("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.editMask},on:{"update:visible":function(e){t.editMask=e}}},[a("el-form",{model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("el-form-item",{attrs:{label:"类目名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("span",{staticStyle:{"font-size":"12px",color:"#aaa"}},[t._v("（2-16位汉字字母组合）")])],1),t._v(" "),a("el-form-item",{staticClass:"icon-area",attrs:{label:"类目图标","label-width":t.formLabelWidth}},[a("el-input",{attrs:{readonly:"","auto-complete":"off"},model:{value:t.form.img,callback:function(e){t.$set(t.form,"img",e)},expression:"form.img"}}),t._v(" "),a("el-upload",{staticClass:"icon-uploader",attrs:{action:"/common/upload/oss","on-success":t.handleAvatarSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"}},[a("i",{staticClass:"el-icon-upload"}),t._v("上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"一级分类","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否启用","label-width":t.formLabelWidth}},[a("el-select",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-option",{attrs:{label:"是",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"2"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrEdit("form")}}},[t._v("确 认")]),t._v(" "),a("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1),t._v(" "),t.isShowDelToast?a("delete-toast",{attrs:{id:t.delId,url:t.delUrl,uri:t.delUri},on:{msg:t.deleteToast}}):t._e()],1)},staticRenderFns:[]};var f=a("VU/8")(m,u,!1,function(t){a("DDzf")},null,null);e.default=f.exports}});