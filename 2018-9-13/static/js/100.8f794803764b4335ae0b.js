webpackJsonp([100],{Awpk:function(t,e){},ydqG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),n=a.n(i),o=a("FMx0"),s=a("5fic"),r=a("V3Ru"),l=a("0xDb"),c=a.n(l),u=a("PJh5"),p=a.n(u),d={props:["name"],components:{vBreadcrumb:o.a},data:function(){return{nav:["运营管理","营销工具管理","奖品池管理"],p:{addOperActivityPackage:!1,batchDeleteOperActivityPackage_1:!1,batchDeleteOperActivityPackage_2:!1,updateOperActivityPackageStatusById_1:!1,updateOperActivityPackageStatusById_2:!1,updateOperActivityPackageStatusById_3:!1,updateOperActivityPackageStatusById_4:!1,addPackageProduct:!1,updatePackageSpecValueStock:!1,updateOperActivityPackagePriceAndStock:!1,findOperActivityPackageDetailsById:!1,updateOperActivityPackage:!1},showOpr:!0,createUserList:[],status:"",form:{name:"",style:"",createUser:"",releaseDate:"",status:"",updateUser:"",updateDate:""},prizeStyleList:[{name:"全部",id:""},{name:"优惠券",id:"1"},{name:"商品",id:"2"},{name:"服务商品",id:"3"},{name:"经验",id:"4"},{name:"积分",id:"5"},{name:"优惠码",id:"6"},{name:"代币",id:"7"}],prizeStatusList:[{name:"全部",id:""},{name:"正常",id:"1"},{name:"已下架",id:"2"},{name:"已停用",id:"3"}],tableData:[],tableLoading:!1,btnLoading:!1,isShowPop:!1,multipleSelection:[],page:{currentPage:1,totalPage:0,pageSize:20},showMask:!1,showInf:[{title:"删除确认",tip:"是否删除该奖品？"},{title:"停用确认",tip:"是否停用该奖品？"},{title:"启用确认",tip:"是否启用该奖品？"}],id:"",inventoryMask:!1,inventory:"",number:"",notEnough:!1,mask:!1,maskContent:[{title:"代币奖品添加",label:"赠送代币数",unit:"枚"},{title:"积分奖品添加",label:"赠送积分数",unit:"分"},{title:"经验奖品添加",label:"赠送经验数",unit:"点"},{title:"优惠卷奖品添加",label:"优惠卷",unit:"张"},{title:"商品奖品添加",label:"商品名称搜索",unit:"件"},{title:"服务商品奖品添加",label:"商品名称搜索",unit:"件"}],index:0,keyWords:"",keyWordsID:"",couponList:[]}},activated:function(){this.pControl(),this.submitForm(1),this.getCreateUserList()},methods:{pControl:function(){for(var t in this.p)this.p[t]=c.a.pc(r[t]);this.p.updateOperActivityPackageStatusById_1||this.p.updateOperActivityPackageStatusById_2||this.p.updateOperActivityPackageStatusById_3||this.p.updateOperActivityPackageStatusById_4||this.p.addPackageProduct||this.p.updatePackageSpecValueStock||this.p.updateOperActivityPackagePriceAndStock||this.findOperActivityPackageDetailsById||this.p.updateOperActivityPackage||(this.showOpr=!1)},getCreateUserList:function(){var t=this;this.$axios.post(s.r,{}).then(function(e){t.createUserList=[],t.createUserList=e.data.data}).catch(function(t){})},submitForm:function(t){var e=this,a={};a.page=t,a.name=this.form.name,a.packageCode=this.form.packageCode,a.createAdmin=this.form.createAdmin,a.startTime=this.form.releaseDate?p()(this.form.releaseDate[0]).format("YYYY-MM-DD"):"",a.endTime=this.form.releaseDate?p()(this.form.releaseDate[1]).format("YYYY-MM-DD"):"",a.pageSize=this.page.pageSize,a.status=this.status,this.page.currentPage=t,this.tableLoading=!0,this.$axios.post(s.u,a).then(function(t){e.tableData=[],e.tableData=t.data.data.data,e.page.totalPage=t.data.data.resultCount,e.tableLoading=!1}).catch(function(t){console.log(t),e.tableLoading=!1})},resetForm:function(t){this.$refs[t].resetFields(),this.form.releaseDate="",this.form.updateDate="",this.submitForm(1)},handleSelectionChange:function(t){var e=this;this.multipleSelection=[],t.forEach(function(t,a){e.multipleSelection.push(t.id)})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.submitForm(t)},packageStatus:function(t,e){var a=this,i={};i.id=t.id,6==t.status||8==t.status?i.status=7:7==t.status?i.status=4==e?9:8:i.status=e,i.url=2==e?r.updateOperActivityPackageStatusById_1:3==e||4==e?r.updateOperActivityPackageStatusById_2:5==e?r.updateOperActivityPackageStatusById_3:r.updateOperActivityPackageStatusById_4,this.$axios.post(s.G,i).then(function(t){a.$message.success(t.data.msg),a.submitForm(a.page.currentPage)}).catch(function(t){console.log(t)})},batchOperate:function(t){var e=this,a=[];for(var i in this.multipleSelection){var o={id:this.multipleSelection[i],status:t};a.push(o)}this.$axios.post(s.f,{paramStr:n()(a)}).then(function(t){e.$message.success(t.data.msg),e.isShowPop=!1,e.isDownPop=!1,e.submitForm(e.page.currentPage)}).catch(function(t){console.log(t),e.isShowPop=!1,e.isDownPop=!1})},addInventory:function(t){this.inventoryMask=!0,this.notEnough=!1,this.number="",this.id=t.id,this.inventory=t.totalNumber-t.freezeNumber},calInventory:function(){if(this.inventory<this.number)return this.notEnough=!0,!1;return!!/^[1-9]*[1-9][0-9]*$/.test(this.number)||(this.$message.warning("请输入正整数!"),this.number,!1)},sure:function(){if(this.calInventory()){var t={id:this.id,freezeNumber:this.number,url:r.operatorUpdateDepreciatelist_3};this.changeStatus(t)}},addPrize:function(t){this.index=t,this.mask=!0,this.inventory="",this.number="",3==t&&this.getAllCoupon()},submit:function(t,e){var a=this;var i=this[t];i.id=this.id;var n=!0,o=!0,s=!0,r=!0;0==e?(n=this.isEmpty(i.upgradeExp,!1),this.setIsAjax(n)):1==e?(this.isChecked(),this.checked[0]&&(n=this.isEmpty(i.upgradeCondDirectNum,!0)),this.checked[1]&&(o=this.isEmpty(i.upgradeCondIndirectNum,!0)),this.checked[2]&&(s=this.isEmpty(i.upgradeCondPerSales,!1)),this.checked[3]&&(r=this.isEmpty(i.upgradeCondGroupSales,!1)),this.checked[4]?i.upgradeCondBuyGift=1:i.upgradeCondBuyGift=0,this.setIsAjax(n&&o&&s&&r)):2==e?(o=this.isEmpty(i.upgradeDirectPerExp,!1),this.setIsAjax(o)):3==e?(o=this.isEmpty(i.upgradeIndirectPerExp,!1),this.setIsAjax(o)):4==e?(o=this.isEmpty(i.upgradePerSalesOneExp,!1),this.setIsAjax(o)):5==e?(o=this.isEmpty(i.upgradeDirectSalesOneExp,!1),this.setIsAjax(o)):6==e?(o=this.isEmpty(i.upgradeIndirectSalesOneExp,!1),this.setIsAjax(o)):7==e?(n=this.isEmpty(i.upgradeWeekSalesNum,!1),o=this.isEmpty(i.upgradeWeekSalesNumExp,!1),this.setIsAjax(n&&o)):8==e?(n=this.isEmpty(i.upgradeWeekSalesFreq,!0),o=this.isEmpty(i.upgradeWeekSalesFreqExp,!1),this.setIsAjax(n&&o)):9==e?(n=this.isEmpty(i.upgradeBuyNum,!1),o=this.isEmpty(i.upgradeBuyNumExp,!1),this.setIsAjax(n&&o)):10==e&&(o=this.isEmpty(i.upgradeTokenCoinBuyOneExp,!1),this.setIsAjax(o)),this.isAjax&&this.$axios.post(void 0,i).then(function(t){a.$message.success(t.data.msg),a.mask=!1}).catch(function(t){console.log(t)})},querySearchAsync:function(t,e){""!=t&&(this.keyWordsID="",this.$axios.post(s.z,{condition:t,activityType:1}).then(function(t){var a=[];t.data.data.forEach(function(t,e){var i={};i.value=t.name+" 产品ID："+t.prodCode,i.id=t.id,i.productNum=t.productNum,i.flagStatus=t.flagStatus,i.name=t.name,i.status=t.status,i.prodCode=t.prodCode,a.push(i)}),e(a)}))},handleSelect:function(t){this.inventory=t.productNum},getAllCoupon:function(){var t=this;this.$axios.post(s.k,{pageSize:1e4}).then(function(e){t.couponList=e.data.data.data}).catch(function(e){console.log(e),t.tableLoading=!1})},showCouponInfo:function(t){var e=this;this.$axios.post(s.t,{condition:t}).then(function(t){-1==t.data.data[0].totalNumber?e.inventory="无限":e.inventory=t.data.data[0].totalNumber+"张"}).catch(function(t){console.log(t),e.tableLoading=!1})},toBlockStockActivity:function(){this.$router.push("/blockStockActivity")}},filters:{formatPrice:function(t){return"￥"+t}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"prize-poll"},[a("v-breadcrumb",{attrs:{nav:t.nav}}),t._v(" "),a("el-card",{attrs:{"body-style":{padding:"30px 45px",minHeight:"80vh"}}},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"search-pane"},[a("el-form",{ref:"form",attrs:{model:t.form,inline:"","label-width":"100px"}},[a("el-form-item",{attrs:{prop:"name",label:"奖品名称"}},[a("el-input",{attrs:{placeholder:"请输入奖品名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"==typeof e?e.trim():e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"style",label:"奖品类型"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.form.style,callback:function(e){t.$set(t.form,"style",e)},expression:"form.style"}},t._l(t.prizeStyleList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{prop:"createUser",label:"发布人"}},[a("el-input",{attrs:{placeholder:"请输入发布人"},model:{value:t.form.createUser,callback:function(e){t.$set(t.form,"createUser","string"==typeof e?e.trim():e)},expression:"form.createUser"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"releaseDate",label:"发布时间"}},[a("el-date-picker",{attrs:{type:"datetimerange",format:"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.releaseDate,callback:function(e){t.$set(t.form,"releaseDate",e)},expression:"form.releaseDate"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"status",label:"奖品状态"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.prizeStatusList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{prop:"updateUser",label:"修改人"}},[a("el-input",{attrs:{placeholder:"请输入修改人"},model:{value:t.form.updateUser,callback:function(e){t.$set(t.form,"updateUser","string"==typeof e?e.trim():e)},expression:"form.updateUser"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"updateDate",label:"修改时间"}},[a("el-date-picker",{attrs:{type:"datetimerange",format:"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.updateDate,callback:function(e){t.$set(t.form,"updateDate",e)},expression:"form.updateDate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:" "}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm(1)}}},[t._v("搜索")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("重置")])],1)],1)],1),t._v(" "),a("div",{staticStyle:{"margin-bottom":"15px"}},[t.p.addOperActivityPackage?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addPrize(0)}}},[t._v("添加代币奖品")]):t._e(),t._v(" "),t.p.addOperActivityPackage?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addPrize(1)}}},[t._v("添加积分奖品")]):t._e(),t._v(" "),t.p.addOperActivityPackage?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addPrize(2)}}},[t._v("添加经验奖品")]):t._e(),t._v(" "),t.p.addOperActivityPackage?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addPrize(3)}}},[t._v("添加优惠券奖品")]):t._e(),t._v(" "),t.p.addOperActivityPackage?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addPrize(4)}}},[t._v("添加商品奖品")]):t._e(),t._v(" "),t.p.addOperActivityPackage?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addPrize(5)}}},[t._v("添加服务商品奖品")]):t._e()],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{border:"",data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"编号","min-width":"50",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"productCode",label:"产品ID",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stockNum",label:"赠送值",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"categoryName",label:"类型",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stockNum",label:"总发放数量",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stockNum",label:"剩余数量",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{label:"冻结数量",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"blue",on:{click:t.toBlockStockActivity}},[t._v(t._s(e.row.stockNum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"stockNum",label:"已使用数量",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?[t._v("正常")]:2==e.row.status?[t._v("已下架")]:3==e.row.status?[t._v("已停用")]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"发布时间/发布人",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s(t._f("formatDate")(e.row.createTime))),a("br"),t._v(t._s(e.row.adminName)+"\n                    ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"修改时间/修改人",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s(t._f("formatDate")(e.row.createTime))),a("br"),t._v(t._s(e.row.adminName)+"\n                    ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1==e.row.totalNumber||0==e.row.totalNumber?a("el-button",{attrs:{type:"primary"},on:{click:function(a){t.addInventory(e.row)}}},[t._v("增加库存")]):t._e(),t._v(" "),1==e.row.status?a("el-button",{attrs:{type:"warning"},on:{click:function(a){t.endOrDelete(1,e.row)}}},[t._v("停用")]):t._e(),t._v(" "),3==e.row.status?a("el-button",{attrs:{type:"warning"},on:{click:function(a){t.endOrDelete(1,e.row)}}},[t._v("开启")]):t._e(),t._v(" "),0==e.row.stockNum?a("el-button",{attrs:{type:"danger"},on:{click:function(a){t.endOrDelete(0,e.row)}}},[t._v("删除")]):t._e()]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,"page-size":t.page.pageSize,layout:"total, prev, pager, next, jumper",total:t.page.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("div",{staticClass:"operate-table"},[a("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.isShowPop,callback:function(e){t.isShowPop=e},expression:"isShowPop"}},[a("p",[t._v("确定删除吗？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.batchOperate("0")}}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.isShowPop=!1}}},[t._v("取消")])],1),t._v(" "),t.p.batchDeleteOperActivityPackage_1?a("el-button",{attrs:{slot:"reference"},on:{click:function(e){t.isShowPop=!0}},slot:"reference"},[t._v("\n                        删除\n                    ")]):t._e()],1)],1)],1),t._v(" "),t.showMask?a("div",{staticClass:"pwd-mask"},[a("div",{staticClass:"box"},[a("div",{staticClass:"mask-title"},[a("icon",{staticClass:"ico",attrs:{ico:"icon-jinggao"}}),t._v("\n                    "+t._s(t.showInf[t.index].title)+"\n                ")],1),t._v(" "),a("div",{staticClass:"mask-content"},[a("div",{staticClass:"del-tip"},[a("div",[t._v(t._s(t.showInf[t.index].tip))]),t._v(" "),a("div",[t._v(t._s(t.showInf[t.index].result))])]),t._v(" "),a("div",{staticClass:"del-btn-group"},[a("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:function(e){t.closeMask(!0)}}},[t._v("确认")]),t._v(" "),a("el-button",{on:{click:function(e){t.closeMask(!1)}}},[t._v("取消")])],1)])])]):t._e(),t._v(" "),a("el-dialog",{attrs:{title:"增加库存",visible:t.inventoryMask},on:{"update:visible":function(e){t.inventoryMask=e}}},[a("div",{staticStyle:{"text-align":"center","line-height":"50px"}},[t._v("现有库存"+t._s(t.inventory))]),t._v(" "),a("el-form",[a("el-form-item",{attrs:{prop:"name",label:"增加"}},[a("el-input",{attrs:{"auto-complete":"off"},on:{blur:t.calInventory},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),t._v(" "),a("span",[t._v("发放数量")]),t._v(" "),t.notEnough?a("div",{staticClass:"tip",staticStyle:{"margin-left":"50px"}},[t._v("增加数量不能大于现有库存")]):t._e()],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:t.sure}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.inventoryMask=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.maskContent[t.index].title,visible:t.mask},on:{"update:visible":function(e){t.mask=e}}},[0==t.index||1==t.index||2==t.index?a("el-form",{attrs:{"label-width":"120px"},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("el-form-item",{attrs:{label:"奖品名称"}},[a("el-input",{attrs:{placeholder:"请输入奖品名称","auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.maskContent[t.index].label}},[a("el-input",{attrs:{placeholder:"请输入数值","auto-complete":"off"},model:{value:t.form.upgradeExp,callback:function(e){t.$set(t.form,"upgradeExp",e)},expression:"form.upgradeExp"}}),t._v(" "),a("span",[t._v(t._s(t.maskContent[t.index].unit))])],1),t._v(" "),a("el-form-item",{attrs:{label:"发放数量"}},[a("el-radio-group",{model:{value:t.form.sendNumber,callback:function(e){t.$set(t.form,"sendNumber",e)},expression:"form.sendNumber"}},[a("el-radio",{attrs:{label:"1",value:"1"}},[t._v("填写数量")]),t._v(" "),a("el-radio",{attrs:{label:"2",value:"2"}},[t._v("不限")])],1),t._v(" "),a("div",[a("el-input",{attrs:{disabled:"2"==t.form.sendNumber,placeholder:"请输入数值","auto-complete":"off"},model:{value:t.form.upgradeExp,callback:function(e){t.$set(t.form,"upgradeExp",e)},expression:"form.upgradeExp"}}),t._v(" "),a("span",[t._v("件")])],1)],1)],1):t._e(),t._v(" "),3==t.index||4==t.index||5==t.index?a("el-form",{attrs:{"label-width":"120px"},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("el-form-item",{attrs:{label:t.maskContent[t.index].label}},[3==t.index?a("el-select",{on:{change:function(e){t.showCouponInfo(t.form.coupon)}},model:{value:t.form.coupon,callback:function(e){t.$set(t.form,"coupon",e)},expression:"form.coupon"}},t._l(t.couponList,function(e,i){return a("el-option",{key:i,attrs:{value:e.name}},[t._v(t._s(e.name))])})):a("el-autocomplete",{staticStyle:{width:"230px"},attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入商品名称"},on:{select:t.handleSelect},model:{value:t.keyWords,callback:function(e){t.keyWords=e},expression:"keyWords"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"现有库存"}},[a("span",[t._v(t._s(t.inventory))])]),t._v(" "),a("el-form-item",{attrs:{label:"发放数量"}},[a("el-input",{attrs:{placeholder:"请输入数值","auto-complete":"off"},on:{blur:t.calInventory},model:{value:t.form.upgradeExp,callback:function(e){t.$set(t.form,"upgradeExp",e)},expression:"form.upgradeExp"}}),t._v(" "),a("span",[t._v("件")]),t._v(" "),a("div",{staticClass:"tip"},[t._v("(数值必须小于现有库存)")])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submit("form",t.index)}}},[t._v("确认保存")]),t._v(" "),a("el-button",{on:{click:function(e){t.mask=!1}}},[t._v("取 消")])],1)],1)],1)],1)},staticRenderFns:[]};var f=a("VU/8")(d,m,!1,function(t){a("Awpk")},"data-v-3b6d8295",null);e.default=f.exports}});