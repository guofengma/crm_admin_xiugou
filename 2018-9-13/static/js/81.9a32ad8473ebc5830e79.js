webpackJsonp([81],{ajeM:function(e,t){},hiNH:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("FMx0"),n=o("P9l9"),s=o("19nM"),i=o("0xDb"),d=o.n(i),l={components:{breadcrumb:a.a},data:function(){return{p:{addCategoryBrandCode:!1,productAllCode:!1,loseCategoryBrandCode:!1},isShowOperate:!0,nav:["溯源管理","防伪码参数设置"],loading:!1,tableLoading:!1,btnLoading:!1,isShowDialog:!1,isShowCreateCode:!1,isShowlostFunc:!1,phone:"",showPhone:"",codeTime:0,code:!0,codeTime1:0,code1:!0,telephoneCode:"",telephoneCode1:"",sended:!1,sended1:!1,productCode:"",firstIndex:-1,secondIndex:-1,thirdIndex:-1,setParams:"",firstList:[],secondList:[],brandList:[],tableData:[],page:{currentPage:1,totalPage:0},id:"",cId:"",bId:""}},created:function(){var e=window.screen.availHeight-360;this.height=e,this.getList(),this.pControl(),this.showPhone=localStorage.getItem("ms_userPhone").substring(0,3)+"****"+localStorage.getItem("ms_userPhone").substring(7)},methods:{pControl:function(){for(var e in this.p)this.p[e]=d.a.pc(s[e]);this.p.productAllCode||this.p.loseCategoryBrandCode||(this.isShowOperate=!1)},getList:function(){var e=this,t=this,o={url:s.getAllCategoryBrand};this.tableLoading=!0,this.$axios.post(n.getAllCategoryBrand,o).then(function(o){t.tableLoading=!1,200==o.data.code?(e.tableData=[],e.tableData=o.data.data):e.$message.error(o.data.msg)}).catch(function(e){console.log(e),t.tableLoading=!1})},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e),this.page.currentPage=e,this.getList(e)},addCodeParams:function(){this.isShowDialog=!0,this.getFirst(),this.secondList=[],this.brandList=[],this.firstIndex=-1,this.secondIndex=-1,this.thirdIndex=-1,this.setParams=""},confirmAdd:function(){var e=this;if(e.cId)if(e.bId)if(e.setParams){if(/^\d{4}$/.test(e.setParams)){var t={};t.cId=e.cId,t.bId=e.bId,t.code=e.setParams,t.url=s.addCategoryBrandCode,e.$axios.post(n.addCategoryBrandCode,t).then(function(t){200==t.data.code?(e.$message.success("添加成功!"),e.getList()):e.$message.warning(t.data.msg)}).catch(function(e){console.log(e)}),e.isShowDialog=!1}else e.$message.warning("请输入正确的参数!")}else e.$message.warning("请设置参数!");else e.$message.warning("请选择品牌!");else e.$message.warning("请选择品类!")},paramsReg:function(){/^\d{4}$/.test(this.setParams)||this.$message.warning("请输入正确的参数!")},chooseItem:function(e,t){this.thirdIndex=e,this.bId=t},createCode:function(e){this.isShowCreateCode=!0,this.productCode=e.code,this.sended=!1,this.codeTime=0,this.telephoneCode="",this.phone=localStorage.getItem("ms_userPhone")},confirmCreateCode:function(){var e=this;if(e.telephoneCode){var t={};t.telephoneCode=e.telephoneCode,t.url=s.productAllCode,t.productCode=e.productCode,e.$axios.post(n.productAllCode,t).then(function(t){200==t.data.code?(e.$message.success("操作成功"),e.getList(),e.isShowCreateCode=!1):e.$message.warning(t.data.msg)}).catch(function(e){console.log(e)})}else e.$message.warning("手机验证码为空!")},lostFunc:function(e){this.isShowlostFunc=!0,this.id=e.id,this.sended1=!1,this.codeTime1=0,this.telephoneCode1="",this.phone=localStorage.getItem("ms_userPhone")},confirmlostFunc:function(){var e=this;if(e.telephoneCode1){var t={};t.telephoneCode=e.telephoneCode1,t.url=s.loseCategoryBrandCode,t.id=e.id,e.$axios.post(n.loseCategoryBrandCode,t).then(function(t){200==t.data.code?(e.$message.success("修改成功!"),e.getList()):e.$message.warning(t.data.msg)}).catch(function(e){console.log(e)}),e.isShowlostFunc=!1}else e.$message.warning("手机验证码为空!")},getCode:function(e){var t=this,o=this;if("create"==e){o.code=!1,o.codeTime=60;var a=setInterval(function(){o.codeTime--,o.codeTime<=0&&(o.code=!0,clearInterval(a))},1e3)}else{this.code1=!1,o.codeTime1=60;var s=setInterval(function(){o.codeTime1--,o.codeTime1<=0&&(o.code1=!0,clearInterval(s))},1e3)}var i={};i.phone=o.phone,i.code="ADMIN_SOURCE_CODE",this.$axios.post(n.sendSecurityCodeCode,i).then(function(a){200==a.data.code?(t.$message.success("已发送验证码"),"create"==e?o.sended=!0:o.sended1=!0):t.$message.warning(a.data.msg)}).catch(function(e){console.log(e)})},getFirst:function(){var e=this;e.$axios.post(n.getFirstList,{}).then(function(t){200==t.data.code?e.firstList=t.data.data:e.$message.warning(t.data.msg)}).catch(function(e){console.log(e)})},getSecond:function(e,t){var o=this;o.firstIndex=e,o.secondIndex=-1,o.thirdIndex=-1,o.brandList=[];var a={fatherid:t};o.loading=!0,o.$axios.post(n.getSecondList,a).then(function(e){o.loading=!1,200==e.data.code?o.secondList=e.data.data:o.$message.warning(e.data.msg)}).catch(function(e){console.log(e),o.loading=!1})},getBrand:function(e,t){var o=this;o.secondIndex=e,o.cId=t,o.bId="";var a={cId:t};o.loading=!0,o.$axios.post(n.queryCategoryBrandCid,a).then(function(e){o.loading=!1,200==e.data.code?o.brandList=e.data.data:o.$message.warning(e.data.msg)}).catch(function(e){console.log(e),o.loading=!1})}}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"code-params"},[o("breadcrumb",{attrs:{nav:e.nav}}),e._v(" "),o("el-card",[e.p.addCategoryBrandCode?o("el-button",{attrs:{type:"primary"},on:{click:e.addCodeParams}},[e._v("添加防伪码参数")]):e._e(),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"w-table",staticStyle:{width:"100%"},attrs:{stripe:"",data:e.tableData,height:e.height,border:""}},[o("el-table-column",{attrs:{prop:"id",label:"编号",width:"180",align:"center"}}),e._v(" "),o("el-table-column",{attrs:{prop:"productName",label:"产品分类",align:"center"}}),e._v(" "),o("el-table-column",{attrs:{prop:"brandName",label:"产品品牌",align:"center"}}),e._v(" "),o("el-table-column",{attrs:{prop:"code",label:"设置参数",align:"center"}}),e._v(" "),e.isShowOperate?o("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.p.productAllCode&&t.row.code&&1==t.row.status?o("el-button",{attrs:{type:"primary"},on:{click:function(o){e.createCode(t.row)}}},[e._v("生成备码\n                    ")]):e._e(),e._v(" "),e.p.loseCategoryBrandCode&&t.row.code&&1==t.row.status||3==t.row.status?o("el-button",{attrs:{type:"danger"},on:{click:function(o){e.lostFunc(t.row)}}},[e._v("失效\n                    ")]):e._e(),e._v(" "),2==t.row.status?o("span",[e._v("生成中")]):e._e()]}}])}):e._e()],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"选择分类和品牌",visible:e.isShowDialog,width:"40%"},on:{"update:visible":function(t){e.isShowDialog=t}}},[o("div",{staticStyle:{overflow:"hidden"}},[o("div",{staticClass:"check-area"},[o("div",{staticClass:"title"},[e._v("选择一级类目")]),e._v(" "),o("div",[o("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},e._l(e.firstList,function(t,a){return o("li",{key:a,class:e.firstIndex==a?"selected":"",on:{click:function(o){e.getSecond(a,t.id)}}},[e._v(e._s(t.name)+"\n                        ")])}))])]),e._v(" "),o("div",{staticClass:"check-area"},[o("div",{staticClass:"title"},[e._v("选择二级类目")]),e._v(" "),o("div",[o("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},e._l(e.secondList,function(t,a){return o("li",{key:a,class:e.secondIndex==a?"selected":"",on:{click:function(o){e.getBrand(a,t.id)}}},[e._v(e._s(t.name)+"\n                        ")])}))])]),e._v(" "),o("div",{staticClass:"check-area"},[o("div",{staticClass:"title"},[e._v("选择品牌")]),e._v(" "),o("div",[o("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},e._l(e.brandList,function(t,a){return o("li",{key:a,class:e.thirdIndex==a?"selected":"",on:{click:function(o){e.chooseItem(a,t.id)}}},[e._v(e._s(t.name)+"\n                        ")])}))])])]),e._v(" "),o("div",{staticStyle:{"margin-top":"20px"}},[e._v("\n            设置参数\n            "),o("el-input",{staticStyle:{width:"300px","margin-left":"20px"},on:{blur:e.paramsReg},model:{value:e.setParams,callback:function(t){e.setParams=t},expression:"setParams"}}),e._v(" "),o("br"),e._v(" "),o("span",{staticStyle:{color:"red","font-size":"12px","margin-left":"80px"}},[e._v("仅限4位前置防伪码，不可与之前设置的防伪码相同")])],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.confirmAdd()}}},[e._v("确 定")]),e._v(" "),o("el-button",{on:{click:function(t){e.isShowDialog=!1}}},[e._v("取 消")])],1)]),e._v(" "),o("el-dialog",{attrs:{title:"生成备码",visible:e.isShowCreateCode,width:"30%"},on:{"update:visible":function(t){e.isShowCreateCode=t}}},[o("div",{staticStyle:{width:"100%","text-align":"center","font-size":"16px"}},[e.sended?o("span",[e._v("已")]):e._e(),e._v("向"+e._s(e.showPhone)+"发送验证码，请输入验证码才可以进行生成操作\n        ")]),e._v(" "),o("div",{staticStyle:{width:"100%"}},[o("el-input",{staticStyle:{width:"210px",margin:"5% 0 0 12%"},attrs:{placeholder:"请输入验证码"},model:{value:e.telephoneCode,callback:function(t){e.telephoneCode=t},expression:"telephoneCode"}}),e._v(" "),e.code?o("el-button",{staticClass:"code-btn",attrs:{type:"primary"},on:{click:function(t){e.getCode("create")}}},[e._v("获取验证码")]):o("el-button",{staticClass:"code-btn",attrs:{type:"primary"}},[e._v(e._s(e.codeTime)+"s")])],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.confirmCreateCode}},[e._v("确 定")]),e._v(" "),o("el-button",{on:{click:function(t){e.isShowCreateCode=!1}}},[e._v("取 消")])],1)]),e._v(" "),o("el-dialog",{attrs:{title:"失效操作",visible:e.isShowlostFunc,width:"30%"},on:{"update:visible":function(t){e.isShowlostFunc=t}}},[o("div",{staticStyle:{width:"100%","text-align":"center","font-size":"16px"}},[e.sended1?o("span",[e._v("已")]):e._e(),e._v("向"+e._s(e.showPhone)+"发送验证码，请输入验证码才可以进行生成操作\n        ")]),e._v(" "),o("div",{staticStyle:{width:"100%"}},[o("el-input",{staticStyle:{width:"210px",margin:"5% 0 0 12%"},attrs:{placeholder:"请输入验证码"},model:{value:e.telephoneCode1,callback:function(t){e.telephoneCode1=t},expression:"telephoneCode1"}}),e._v(" "),e.code1?o("el-button",{staticClass:"code-btn",attrs:{type:"primary"},on:{click:function(t){e.getCode("lost")}}},[e._v("获取验证码")]):o("el-button",{staticClass:"code-btn",attrs:{type:"primary"}},[e._v(e._s(e.codeTime1)+"s")])],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.confirmlostFunc}},[e._v("确 定")]),e._v(" "),o("el-button",{on:{click:function(t){e.isShowlostFunc=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};var r=o("VU/8")(l,c,!1,function(e){o("ajeM")},null,null);t.default=r.exports}});