webpackJsonp([40],{"eo/D":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("FMx0"),n=a("UU1J"),i=a("EkIv"),r=(a("0xDb"),a("xnHa")),o=a("GVVA"),s={components:{vBreadcrumb:l.a,icon:n.a,deleteToast:i.a},mixins:[r.b],data:function(){return{tableData:[],tableLoading:!1,height:"",isShowDelToast:!1,formLabelWidth:"100px",form:{name:"",status:"",icon:""},delId:"",delUrl:"",delUri:""}},created:function(){},activated:function(){this.getList()},methods:{getList:function(){var e=this;e.tableLoading=!0,o.a.queryFreightTemplateList({}).then(function(t){e.tableLoading=!1,e.tableData=t.data}).catch(function(t){console.log(t),e.tableLoading=!1})},addTemplate:function(){this.$router.push({path:"/addTemplate"})},editItem:function(e,t){sessionStorage.setItem("templateId",t),this.$router.push({path:"/editTemplate",query:{templateId:t}})},delItem:function(e,t){this.delId=t,this.delUrl="deleteFreightTemplateById",this.delUri="/admin/freightTemplate/deleteFreightTemplateById",this.isShowDelToast=!0},deleteToast:function(e){this.isShowDelToast=e,this.getList()}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"brand-manage"},[a("v-breadcrumb",{attrs:{nav:["品牌产品管理","运费模板"]}}),e._v(" "),a("div",{staticClass:"table-block"},[a("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary"},on:{click:e.addTemplate}},[e._v("添加模板")]),e._v(" "),[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"运费模板编号",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"模板名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"是否包邮",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.freight_type?[e._v("自定义运费")]:e._e(),e._v(" "),2==t.row.freight_type?[e._v("平台承担运费")]:e._e(),e._v(" "),3==t.row.freight_type?[e._v("满"+e._s(t.row.freight_free_price)+"包邮")]:e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"计价方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.calc_type?[e._v("按重量")]:e._e(),e._v(" "),2==t.row.calc_type?[e._v("按体积")]:e._e(),e._v(" "),3==t.row.calc_type?[e._v("按件数量")]:e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"num",label:"使用数",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"100",label:"模板设置",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){e.editItem(t.$index,t.row.id)}}},[e._v("设置模板\n                        ")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.delItem(t.$index,t.row.id)}}},[e._v("删除模板\n                        ")])]}}])})],1)]],2),e._v(" "),e.isShowDelToast?a("delete-toast",{attrs:{id:e.delId,url:e.delUrl,uri:e.delUri},on:{msg:e.deleteToast}}):e._e()],1)},staticRenderFns:[]};var c=a("VU/8")(s,d,!1,function(e){a("lXq3")},null,null);t.default=c.exports},lXq3:function(e,t){}});