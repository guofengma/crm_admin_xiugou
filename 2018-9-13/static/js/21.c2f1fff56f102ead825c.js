webpackJsonp([21],{"/bct":function(t,e){},Com3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),s=a.n(n),i=a("FMx0"),o=a("UU1J"),l=a("P9l9"),r=a("19nM"),d={components:{icon:o.a},data:function(){return{form:{name:"",status:"1"}}},methods:{closeToask:function(){this.$emit("status",!1)},submitForm:function(t){var e=this;if(""!=this.form.name){var a={};a.name=this.form.name,a.status=this.form.status,a.fatherid="0",a.url=r.addPermitChannel_1,this.$axios.post(l.addPermitChannel,a).then(function(t){200==t.data.code?(e.$message.success(t.data.msg),e.closeToask()):e.$message.warning(t.data.msg)}).catch(function(t){console.log(t)})}else this.$message.warning("请输入渠道名称！")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pwd-mask"},[a("div",{staticClass:"box"},[a("div",{staticClass:"mask-title"},[t._v("添加渠道")]),t._v(" "),a("div",{staticClass:"mask-content"},[a("el-form",{attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"渠道名称"}},[a("el-input",{attrs:{placeholder:"请输入渠道名称",size:"medium"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否启用"}},[a("el-select",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-option",{attrs:{value:"1",label:"是"}}),t._v(" "),a("el-option",{attrs:{value:"2",label:"否"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"submit-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("确认")]),t._v(" "),a("el-button",{on:{click:t.closeToask}},[t._v("取消")])],1)],1)],1)])])},staticRenderFns:[]};var m=a("VU/8")(d,c,!1,function(t){a("mxRX")},"data-v-50fd5192",null).exports,u={props:["row"],components:{icon:o.a},data:function(){return{form:{id:"",name:"",status:""}}},mounted:function(){this.form.name=this.row.name,this.form.status=this.row.status.toString(),this.form.id=this.row.id},methods:{closeToask:function(){this.$emit("status",!1)},submitForm:function(t){var e=this;if(""!=this.form.name){var a={};a.name=this.form.name,a.status=this.form.status,a.id=this.form.id,a.url=r.updatePermitChannel_1,this.$axios.post(l.updatePermitChannel,a).then(function(t){200==t.data.code?(e.$message.success(t.data.msg),e.closeToask()):e.$message.warning(t.data.msg)}).catch(function(t){console.log(t)})}else this.$message.warning("请输入渠道名称！")}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pwd-mask"},[a("div",{staticClass:"box"},[a("div",{staticClass:"mask-title"},[t._v("编辑渠道")]),t._v(" "),a("div",{staticClass:"mask-content"},[a("el-form",{attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"渠道名称"}},[a("el-input",{attrs:{placeholder:"请输入渠道名称",size:"medium"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否启用"}},[a("el-select",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-option",{attrs:{value:"1",label:"是"}}),t._v(" "),a("el-option",{attrs:{value:"2",label:"否"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"submit-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("确认")]),t._v(" "),a("el-button",{on:{click:t.closeToask}},[t._v("取消")])],1)],1)],1)])])},staticRenderFns:[]};var f=a("VU/8")(u,h,!1,function(t){a("rvyd")},"data-v-6f7b3d98",null).exports,p=a("EkIv"),v=a("0xDb"),b=a.n(v),_=a("xnHa"),C={components:{breadcrumb:i.a,addChannel:m,editChannel:f,deleteToast:p.a},mixins:[_.b],data:function(){return{p:{addPermitChannel_1:!1,addPermitChannel_2:!1,updatePermitChannel_1:!1,updatePermitChannel_2:!1,updatePermitChannel_4:!1},isShowOperate:!0,breadcrumb:["授权管理","渠道类目管理"],isShowAddChan:!1,isShowEditChan:!1,isShowDelToast:!1,tableLoading:!1,row:"",delId:66,delUrl:"http://api",delUri:"",tableData:[],height:""}},created:function(){var t=window.screen.availHeight-360;this.height=t,this.pControl()},activated:function(){this.pControl(),this.getList()},methods:{pControl:function(){for(var t in this.p)this.p[t]=b.a.pc(r[t]);this.p.updatePermitChannel_2||this.p.updatePermitChannel_2||this.p.updatePermitChannel_4||(this.isShowOperate=!1)},getList:function(){var t=this;this.tableLoading=!0,this.$axios.post(l.permitChannelGetList,{fatherid:0,url:r.channelItemManage}).then(function(e){t.tableLoading=!1,200==e.data.code?(t.tableData=[],t.tableData=e.data.data):t.$message.warning(e.data.msg)}).catch(function(t){console.log(t),that.tableLoading=!1})},deleteMsg:function(t){this.delId=t.id,this.delUrl=l.updatePermitChannel,this.delUri=r.updatePermitChannel_4,this.isShowDelToast=!0},secondChannel:function(t){sessionStorage.setItem("secondChannel",s()({id:t.id,fatherName:t.name,firstName:t.name})),this.$router.push({name:"secondChannel",params:{id:t.id,fatherName:t.name,firstName:t.name}})},addChan:function(){this.isShowAddChan=!0},closeAddChan:function(t){this.getList(),this.isShowAddChan=t},editChan:function(t){this.row=t,this.isShowEditChan=!0},closeEditChan:function(t){this.getList(),this.isShowEditChan=t},deleteToast:function(t){this.getList(),this.isShowDelToast=t}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("breadcrumb",{attrs:{nav:t.breadcrumb}}),t._v(" "),a("el-card",[t.p.addPermitChannel_1?a("el-button",{attrs:{type:"primary"},on:{click:t.addChan}},[t._v("添加渠道")]):t._e(),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticClass:"w-table",staticStyle:{width:"100%"},attrs:{stripe:"",data:t.tableData,height:t.height,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"品类",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"渠道参与者",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?[t._v("开启")]:t._e(),t._v(" "),2==e.row.status?[t._v("关闭")]:t._e(),t._v(" "),3==e.row.status?[t._v("删除")]:t._e()]}}])}),t._v(" "),t.isShowOperate?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.p.addPermitChannel_2?a("el-button",{attrs:{type:"primary"},on:{click:function(a){t.secondChannel(e.row)}}},[t._v("二级渠道")]):t._e(),t._v(" "),t.p.updatePermitChannel_1?a("el-button",{attrs:{type:"warning"},on:{click:function(a){t.editChan(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),2==e.row.status&&t.p.updatePermitChannel_4?a("el-button",{attrs:{type:"danger"},on:{click:function(a){t.deleteMsg(e.row)}}},[t._v("删除")]):t._e()]}}])}):t._e()],1)],1),t._v(" "),t.isShowAddChan?a("add-channel",{on:{status:t.closeAddChan}}):t._e(),t._v(" "),t.isShowEditChan?a("edit-channel",{attrs:{row:t.row},on:{status:t.closeEditChan}}):t._e(),t._v(" "),t.isShowDelToast?a("delete-toast",{attrs:{id:t.delId,url:t.delUrl,uri:t.delUri,status:"3"},on:{msg:t.deleteToast}}):t._e()],1)},staticRenderFns:[]};var w=a("VU/8")(C,g,!1,function(t){a("/bct")},"data-v-4fb5b0f6",null);e.default=w.exports},mxRX:function(t,e){},rvyd:function(t,e){}});