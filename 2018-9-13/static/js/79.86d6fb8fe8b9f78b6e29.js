webpackJsonp([79],{"+bke":function(e,o){},W3r3:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t("FMx0"),l=t("EkIv"),i=t("P9l9"),d=t("0xDb"),s=t.n(d),r=t("19nM"),n={components:{breadcrumb:a.a,deleteToast:l.a},data:function(){return{p:{addCodeTemplate:!1,updateCodeTemplate:!1,deleteCodeTemplate:!1,loseCodeTemplate:!1},nav:["溯源管理","防伪码模板"],tableLoading:!1,btnLoading:!1,isShowaddCodeDialog:!1,isShoweditCodeDialog:!1,isShowDelToast:!1,isShowBigBox:!0,isUseSmallBox:!1,useBigBoxCode:"1",delId:0,delUrl:"http://api",delUri:"",addTplForm:{templateName:"",bigBoxCodeNum:"1",smallBoxCodeNum:"",packagingCodeNum:""},editTplForm:{id:"",templateName:"",bigBoxCodeNum:"1",smallBoxCodeNum:"",packagingCodeNum:""},tableData:[],page:{currentPage:1,totalPage:0},rules:{templateName:[{required:!0,message:"请输入模板名称",trigger:"blur"}],smallBoxCodeNum:[{required:!0,message:"请输入小箱码",trigger:"blur"}],packagingCodeNum:[{required:!0,message:"请输入包装码",trigger:"blur"}]}}},created:function(){var e=window.screen.availHeight-360;this.height=e,this.pControl()},activated:function(){this.pControl(),this.getList(this.page.currentPage)},methods:{pControl:function(){for(var e in this.p)this.p[e]=s.a.pc(r[e])},getList:function(e){var o=this,t=this;this.tableLoading=!0,this.$axios.post(i.rootsGetCodeTplList,{url:r.securityCodeTemplate}).then(function(e){t.tableLoading=!1,200==e.data.code?(o.tableData=[],o.tableData=e.data.data):o.$message.error(e.data.msg)}).catch(function(e){console.log(e),t.tableLoading=!1})},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e),this.page.currentPage=e,this.getList(e)},addCodeTpl:function(e){this.addTplForm={bigBoxCodeNum:"1",smallBoxCodeNum:"1"},this.isShowaddCodeDialog=!0},confirmAddCodeTpl:function(e){var o=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var t=/^\d+(?=\.{0,1}\d+$|$)/;if((t.test(o.addTplForm.bigBoxCodeNum)||""==o.addTplForm.bigBoxCodeNum)&&t.test(o.addTplForm.smallBoxCodeNum)&&t.test(o.addTplForm.packagingCodeNum)){o.btnLoading=!0;var a=o,l={};(l=o.addTplForm).url=r.addCodeTemplate,o.$axios.post(i.rootsAddCodeTplList,l).then(function(e){a.btnLoading=!1,200==e.data.code?(o.btnLoading=!1,o.$message.success("添加成功"),o.isShowaddCodeDialog=!1,o.getList(o.page.currentPage)):(o.btnLoading=!1,o.$message.error(e.data.msg),o.isShowaddCodeDialog=!1)}).catch(function(e){console.log(e),o.btnLoading=!1})}else o.$message.warning("请输入正确的数值")})},editCodeTpl:function(e){var o=this;this.editTplForm={},this.btnLoading=!0;var t={id:e.id};this.$axios.post(i.rootsQueryCodeTplList,t).then(function(e){200==e.data.code?(o.editTplForm=e.data.data,o.btnLoading=!1):(o.$message.error(e.data.msg),o.btnLoading=!1)}).catch(function(e){console.log(e),that.tableLoading=!1}),this.isShoweditCodeDialog=!0},confirmEditCodeTpl:function(e){var o=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var t=/^\d+(?=\.{0,1}\d+$|$)/;if(!t.test(o.editTplForm.smallBoxCodeNum)||!t.test(o.editTplForm.packagingCodeNum))return console.log(o.editTplForm),void o.$message.warning("请输入正确的数值");o.btnLoading=!0;var a={};a.id=o.editTplForm.id,a.templateName=o.editTplForm.templateName,a.smallBoxCodeNum=o.editTplForm.smallBoxCodeNum,a.packagingCodeNum=o.editTplForm.packagingCodeNum,a.url=r.updateCodeTemplate,o.$axios.post(i.rootsEditCodeTplList,a).then(function(e){o.btnLoading=!1,200==e.data.code?(o.btnLoading=!1,o.$message.success("编辑成功"),o.getList(o.page.currentPage),o.isShoweditCodeDialog=!1):(o.btnLoading=!1,o.$message.error(e.data.msg),o.isShoweditCodeDialog=!1)}).catch(function(e){console.log(e),o.btnLoading=!1})})},failureTpl:function(e){var o=this;this.$axios.post(i.loseById,{id:e.id,url:r.loseCodeTemplate}).then(function(t){200==t.data.code?(o.$message.success("修改成功!"),o.getList(o.page.currentPage),e.status=0):o.$message.warning(t.data.msg)}).catch(function(e){console.log(e)})},deleteTpl:function(e){this.delId=e.id,this.delUrl=i.rootsDelCodeTplList,this.delUri=r.deleteCodeTemplate,this.isShowDelToast=!0},deleteToast:function(e){this.isShowDelToast=e,this.getList(this.page.currentPage)},setBigBoxCode:function(e){2==e?(this.isShowBigBox=!1,this.addTplForm.bigBoxCodeNum="",this.editTplForm.bigBoxCodeNum="",this.isUseSmallBox=!0,this.addTplForm.smallBoxCodeNum=1,this.editTplForm.smallBoxCodeNum=1):(this.isShowBigBox=!0,this.isUseSmallBox=!1,this.addTplForm.bigBoxCodeNum=1,this.editTplForm.bigBoxCodeNum=1)}}},m={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("breadcrumb",{attrs:{nav:e.nav}}),e._v(" "),t("el-card",[e.p.addCodeTemplate?t("el-button",{attrs:{type:"primary"},on:{click:function(o){e.addCodeTpl("addTplForm")}}},[e._v("添加模板")]):e._e(),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"w-table",staticStyle:{width:"100%"},attrs:{stripe:"",data:e.tableData,height:e.height,border:""}},[t("el-table-column",{attrs:{prop:"id",label:"编号",width:"180",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"templateName",label:"模板名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"bigBoxCodeNum",label:"大箱码",align:"center"},scopedSlots:e._u([{key:"default",fn:function(o){return[void 0==o.row.bigBoxCodeNum?[e._v("\n                  /\n                ")]:[e._v("\n                  "+e._s(o.row.bigBoxCodeNum)+"\n                ")]]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"smallBoxCodeNum",label:"小箱码",align:"center"},scopedSlots:e._u([{key:"default",fn:function(o){return[void 0==o.row.smallBoxCodeNum?[e._v("\n                  /\n                ")]:[e._v("\n                  "+e._s(o.row.smallBoxCodeNum)+"\n                ")]]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"packagingCodeNum",label:"包装码",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"productCount",label:"已生成",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(o){return[0==o.row.productCount?[e.p.updateCodeTemplate?t("el-button",{attrs:{type:"warning"},on:{click:function(t){e.editCodeTpl(o.row)}}},[e._v("编辑")]):e._e(),e._v(" "),e.p.deleteCodeTemplate?t("el-button",{attrs:{type:"danger"},on:{click:function(t){e.deleteTpl(o.row)}}},[e._v("删除")]):e._e()]:e._e(),e._v(" "),o.row.productCount>0?[e.p.loseCodeTemplate&&1==o.row.status?t("el-button",{attrs:{type:"warning"},on:{click:function(t){e.failureTpl(o.row)}}},[e._v("失效")]):e._e(),e._v(" "),e.p.loseCodeTemplate&&0==o.row.status?t("el-button",{attrs:{type:"warning",disabled:""}},[e._v("已失效")]):e._e()]:e._e()]}}])})],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"添加防伪码模板",visible:e.isShowaddCodeDialog},on:{"update:visible":function(o){e.isShowaddCodeDialog=o}}},[t("el-form",{ref:"addTplForm",attrs:{model:e.addTplForm,rules:e.rules,"label-width":"140px"}},[t("el-form-item",{attrs:{prop:"templateName",label:"模板名称"}},[t("el-input",{staticClass:"rootscode-inp",attrs:{placeholder:"请输入模板名称"},model:{value:e.addTplForm.templateName,callback:function(o){e.$set(e.addTplForm,"templateName",o)},expression:"addTplForm.templateName"}})],1),t("br"),e._v(" "),t("el-form-item",{attrs:{label:""}},[t("h3",{staticStyle:{position:"absolute",top:"-15px",left:"-70px"}},[e._v("防伪码数量设置")])]),t("br"),e._v(" "),t("el-form-item",{attrs:{label:"是否需要大箱防伪码"}},[t("el-select",{on:{change:e.setBigBoxCode},model:{value:e.useBigBoxCode,callback:function(o){e.useBigBoxCode=o},expression:"useBigBoxCode"}},[t("el-option",{attrs:{value:"1",label:"是"}}),e._v(" "),t("el-option",{attrs:{value:"2",label:"否"}})],1)],1),e._v(" "),e.isShowBigBox?t("el-form-item",{attrs:{prop:"bigBoxCodeNum",label:"大箱防伪码数量"}},[t("el-input",{staticClass:"rootscode-inp",attrs:{disabled:!0,placeholder:"请输入大箱码"},model:{value:e.addTplForm.bigBoxCodeNum,callback:function(o){e.$set(e.addTplForm,"bigBoxCodeNum",o)},expression:"addTplForm.bigBoxCodeNum"}})],1):e._e(),e._v(" "),t("el-form-item",{attrs:{prop:"smallBoxCodeNum",label:"小箱防伪码数量"}},[t("el-input",{staticClass:"rootscode-inp",attrs:{disabled:e.isUseSmallBox,placeholder:"请输入箱码"},model:{value:e.addTplForm.smallBoxCodeNum,callback:function(o){e.$set(e.addTplForm,"smallBoxCodeNum",o)},expression:"addTplForm.smallBoxCodeNum"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"packagingCodeNum",label:"包装防伪码数量"}},[t("el-input",{staticClass:"rootscode-inp",attrs:{placeholder:"请输入包装码"},model:{value:e.addTplForm.packagingCodeNum,callback:function(o){e.$set(e.addTplForm,"packagingCodeNum",o)},expression:"addTplForm.packagingCodeNum"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(o){e.confirmAddCodeTpl("addTplForm")}}},[e._v("确 定")]),e._v(" "),t("el-button",{on:{click:function(o){e.isShowaddCodeDialog=!1}}},[e._v("取 消")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"修改防伪码模板",visible:e.isShoweditCodeDialog},on:{"update:visible":function(o){e.isShoweditCodeDialog=o}}},[t("el-form",{ref:"editTplForm",attrs:{model:e.editTplForm,rules:e.rules,"label-width":"140px"}},[t("el-form-item",{attrs:{prop:"templateName",label:"模板名称"}},[t("el-input",{staticClass:"rootscode-inp",attrs:{placeholder:"请输入模板名称"},model:{value:e.editTplForm.templateName,callback:function(o){e.$set(e.editTplForm,"templateName",o)},expression:"editTplForm.templateName"}})],1),t("br"),e._v(" "),t("el-form-item",{attrs:{label:""}},[t("h3",{staticStyle:{position:"absolute",top:"-15px",left:"-70px"}},[e._v("防伪码数量设置")])]),t("br"),e._v(" "),t("el-form-item",{attrs:{label:"是否需要大箱防伪码"}},[t("el-select",{on:{change:e.setBigBoxCode},model:{value:e.useBigBoxCode,callback:function(o){e.useBigBoxCode=o},expression:"useBigBoxCode"}},[t("el-option",{attrs:{value:"1",label:"是"}}),e._v(" "),t("el-option",{attrs:{value:"2",label:"否"}})],1)],1),e._v(" "),e.isShowBigBox?t("el-form-item",{attrs:{prop:"bigBoxCodeNum",label:"大箱防伪码数量"}},[t("el-input",{staticClass:"rootscode-inp",attrs:{disabled:!0,placeholder:"请输入大箱码"},model:{value:e.addTplForm.bigBoxCodeNum,callback:function(o){e.$set(e.addTplForm,"bigBoxCodeNum",o)},expression:"addTplForm.bigBoxCodeNum"}})],1):e._e(),e._v(" "),t("el-form-item",{attrs:{prop:"smallBoxCodeNum",label:"小箱防伪码数量"}},[t("el-input",{staticClass:"rootscode-inp",attrs:{disabled:e.isUseSmallBox,placeholder:"请输入箱码"},model:{value:e.editTplForm.smallBoxCodeNum,callback:function(o){e.$set(e.editTplForm,"smallBoxCodeNum",o)},expression:"editTplForm.smallBoxCodeNum"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"packagingCodeNum",label:"包装码"}},[t("el-input",{staticClass:"rootscode-inp",attrs:{placeholder:"请输入包装码"},model:{value:e.editTplForm.packagingCodeNum,callback:function(o){e.$set(e.editTplForm,"packagingCodeNum",o)},expression:"editTplForm.packagingCodeNum"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{loading:e.btnLoading,type:"primary"},on:{click:function(o){e.confirmEditCodeTpl("editTplForm")}}},[e._v("确 定 修 改")]),e._v(" "),t("el-button",{on:{click:function(o){e.isShoweditCodeDialog=!1}}},[e._v("取 消")])],1)],1),e._v(" "),e.isShowDelToast?t("delete-toast",{attrs:{id:e.delId,url:e.delUrl,uri:e.delUri},on:{msg:e.deleteToast}}):e._e()],1)},staticRenderFns:[]};var p=t("VU/8")(n,m,!1,function(e){t("+bke")},null,null);o.default=p.exports}});