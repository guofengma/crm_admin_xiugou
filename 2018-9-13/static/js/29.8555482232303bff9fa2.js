webpackJsonp([29],{CSbq:function(t,e){},cm2y:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("FMx0"),r=a("5fic"),s=a("V3Ru"),n=a("0xDb"),l=a.n(n),o=a("UU1J"),c=a("PJh5"),u=a.n(c),d=a("go8C"),m={props:["name"],components:{icon:o.a,vRemark:d.a},data:function(){return{contents:["销量=成交订单总数-退款/退货订单数","删除活动归还库存时间=手动关闭时间+订单关闭时间+5分钟"],p:{addOperatorSeckill:!1,updateActiviySeckillStatus_1:!1,updateActiviySeckillStatus_2:!1,updateActiviySeckillStatus_3:!1,findActivitySeckillByActivityCode:!1},showOpr:!0,endStyleArr:[{label:"全部",value:""},{label:"库存售完",value:"3"},{label:"时间结束",value:"4"},{label:"手动结束",value:"5"}],createUserList:[],form:{releaseDate:"",startDate:"",activityCode:"",createUser:"",productCode:"",productName:"",status:""},tableData:[],tableLoading:!1,page:{currentPage:1,totalPage:0,pageSize:20},showMask:!1,btnLoading:!1,showInf:[{title:"删除确认",tip:"确定要删除此活动？",result:"一旦删除，不能撤回"},{title:"结束确认",tip:"确定要结束此活动？",result:"一旦结束，不能再开启"},{title:"下架确认",tip:"确定要下架此活动？",result:"一旦下架，不能再开启"}],index:"",id:""}},computed:{secStaName:function(){switch(this.name){case"allSecKill":return"";case"notStart":return"1";case"starting":return"2";case"ended":return"3"}}},created:function(){this.submitForm(1),this.pControl(),this.getCreateUserList()},activated:function(){this.submitForm(1),this.pControl(),this.getCreateUserList()},methods:{pControl:function(){for(var t in this.p)this.p[t]=l.a.pc(s[t]);this.p.updateActiviySeckillStatus_1||this.p.updateActiviySeckillStatus_2||this.p.updateActiviySeckillStatus_2||this.p.findActivitySeckillByActivityCode||(this.showOpr=!1)},getCreateUserList:function(){var t=this;this.$axios.post(r.r,{}).then(function(e){t.createUserList=[],t.createUserList=e.data.data}).catch(function(t){})},submitForm:function(t){var e=this,a={};a.productName=this.form.productName,a.activityCode=this.form.activityCode,a.createUser=this.form.createUser,a.productCode=this.form.productCode,a.beginStartTime=this.form.startDate?u()(this.form.startDate[0]).format("YYYY-MM-DD HH:mm:ss"):"",a.beginEndTime=this.form.startDate?u()(this.form.startDate[1]).format("YYYY-MM-DD HH:mm:ss"):"",a.createStartTime=this.form.releaseDate?u()(this.form.releaseDate[0]).format("YYYY-MM-DD HH:mm:ss"):"",a.createEndTime=this.form.releaseDate?u()(this.form.releaseDate[1]).format("YYYY-MM-DD HH:mm:ss"):"",a.page=t,a.pageSize=this.page.pageSize,3==this.secStaName?(a.noStartStatus=1,a.startStatus=2):a.unEndStatus=this.secStaName,a.status=this.form.status,this.page.currentPage=t,this.tableLoading=!0,this.$axios.post(r.v,a).then(function(t){e.tableData=[],e.tableData=t.data.data.data,e.page.totalPage=t.data.data.resultCount,e.tableLoading=!1}).catch(function(t){e.tableLoading=!1})},resetForm:function(t){this.$refs[t].resetFields(),this.form.startDate="",this.form.releaseDate="",this.submitForm(1)},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.submitForm(t)},addSecKill:function(){this.$router.push({name:"addSecKill"})},endOrDelete:function(t,e){this.index=t,this.showMask=!0,this.id=e.activityCode},closeMask:function(t){if(t){var e={};0==this.index?(e.status=this.index,e.url=s.updateActiviySeckillStatus_1):1==this.index?(e.status=5,e.url=s.updateActiviySeckillStatus_2):(e.status=6,e.url=s.updateActiviySeckillStatus_3),this.changeStatus(e)}else this.showMask=!1},changeStatus:function(t){var e=this;t.activityCode=this.id,this.btnLoading=!0,this.$axios.post(r.D,t).then(function(t){e.submitForm(e.page.currentPage),e.showMask=!1,e.btnLoading=!1}).catch(function(t){e.btnLoading=!1})},toDetail:function(t){sessionStorage.setItem("id",t.activityCode),this.$router.push({path:"/SecKillInfo",query:{id:t.activityCode}})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-content"},[t.p.addOperatorSeckill?a("el-button",{staticClass:"add-product",attrs:{type:"primary"},on:{click:t.addSecKill}},[t._v("新建秒杀")]):t._e(),t._v(" "),a("div",{staticClass:"search-pane"},[a("el-form",{ref:"form",attrs:{model:t.form,inline:"","label-width":"100px"}},[a("el-form-item",{attrs:{prop:"productName",label:"产品名称"}},[a("el-input",{attrs:{placeholder:"请输入产品名称"},model:{value:t.form.productName,callback:function(e){t.$set(t.form,"productName","string"==typeof e?e.trim():e)},expression:"form.productName"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"productCode",label:"产品ID"}},[a("el-input",{attrs:{placeholder:"请输入产品ID"},model:{value:t.form.productCode,callback:function(e){t.$set(t.form,"productCode","string"==typeof e?e.trim():e)},expression:"form.productCode"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"activityCode",label:"产品编号"}},[a("el-input",{attrs:{placeholder:"请输入产品编号"},model:{value:t.form.activityCode,callback:function(e){t.$set(t.form,"activityCode","string"==typeof e?e.trim():e)},expression:"form.activityCode"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"startDate",label:"活动时间"}},[a("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.startDate,callback:function(e){t.$set(t.form,"startDate",e)},expression:"form.startDate"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"status",label:"结束方式"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.endStyleArr,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{prop:"createUser",label:"发布人"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.form.createUser,callback:function(e){t.$set(t.form,"createUser",e)},expression:"form.createUser"}},[a("el-option",{attrs:{value:""}},[t._v("全部")]),t._v(" "),t._l(t.createUserList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{prop:"releaseDate",label:"发布时间"}},[a("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.releaseDate,callback:function(e){t.$set(t.form,"releaseDate",e)},expression:"form.releaseDate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:" "}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm(1)}}},[t._v("搜索")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("重置")])],1)],1)],1),t._v(" "),a("v-remark",{attrs:{contents:t.contents}}),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{border:"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"activityCode",align:"center",label:"编号","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"秒杀商品","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"product-img"},[a("img",{attrs:{src:e.row.productImg}})]),t._v(" "),a("p",{staticClass:"product-inf"},[t._v(t._s(e.row.productName))]),t._v(" "),a("p",{staticClass:"product-inf",staticStyle:{"margin-top":"25px"}},[t._v("原价：￥"+t._s(e.row.productPrice))]),t._v(" "),a("p",{staticClass:"product-inf"},[t._v("产品ID："+t._s(e.row.productCode))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"productSpec",label:"规格",align:"center","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"秒杀价格",align:"center","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                ￥"+t._s(e.row.seckillPrice)+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"totalNumber",label:"库存数量",align:"center","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{label:"销量",align:"center","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[[t._v(t._s(e.row.saleNumber?e.row.saleNumber:"0"))]]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"预约购买人数",align:"center","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[[t._v(t._s(e.row.subNumber?e.row.subNumber:"0"))]]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[2==e.row.status?[t._v("进行中")]:3==e.row.status?[t._v("已结束"),a("br"),t._v("(库存售完)")]:4==e.row.status?[t._v("已结束"),a("br"),t._v("(时间结束)")]:5==e.row.status?[t._v("已结束"),a("br"),t._v("(手动结束)")]:1==e.row.status?[t._v("未开始")]:6==e.row.status?[t._v("下架隐藏")]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"开始/结束时间",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.row.beginTime))),a("br"),t._v(t._s(t._f("formatDate")(e.row.endTime))+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"关闭时间",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.closeTime?[t._v(t._s(t._f("formatDate")(e.row.closeTime)))]:t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"发布时间/发布人",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.row.createTime))),a("br"),t._v(t._s(e.row.createName)+"\n            ")]}}])}),t._v(" "),t.showOpr?a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.p.findActivitySeckillByActivityCode?a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:function(a){t.toDetail(e.row)}}},[t._v("查看")]):t._e(),t._v(" "),1!=e.row.status&&2!=e.row.status||!t.p.updateActiviySeckillStatus_2?t._e():a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"warning"},on:{click:function(a){t.endOrDelete(1,e.row)}}},[t._v("结束\n                ")]),t._v(" "),1!=e.row.status&&2!=e.row.status&&t.p.updateActiviySeckillStatus_1?a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"danger"},on:{click:function(a){t.endOrDelete(0,e.row)}}},[t._v("删除\n                ")]):t._e(),t._v(" "),3!=e.row.status&&4!=e.row.status&&5!=e.row.status||!t.p.updateActiviySeckillStatus_3?t._e():a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"warning"},on:{click:function(a){t.endOrDelete(2,e.row)}}},[t._v("下架\n                ")])]}}])}):t._e()],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,"page-size":t.page.pageSize,layout:"total, prev, pager, next, jumper",total:t.page.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),t.showMask?a("div",{staticClass:"pwd-mask"},[a("div",{staticClass:"box"},[a("div",{staticClass:"mask-title"},[a("icon",{staticClass:"ico",attrs:{ico:"icon-jinggao"}}),t._v("\n                "+t._s(t.showInf[t.index].title)+"\n            ")],1),t._v(" "),a("div",{staticClass:"mask-content"},[a("div",{staticClass:"del-tip"},[a("div",[t._v(t._s(t.showInf[t.index].tip))]),t._v(" "),a("div",[t._v(t._s(t.showInf[t.index].result))])]),t._v(" "),a("div",{staticClass:"del-btn-group"},[a("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:function(e){t.closeMask(!0)}}},[t._v("确认")]),t._v(" "),a("el-button",{on:{click:function(e){t.closeMask(!1)}}},[t._v("取消")])],1)])])]):t._e()],1)},staticRenderFns:[]};var v=a("VU/8")(m,p,!1,function(t){a("CSbq")},"data-v-4d8e0bb2",null).exports,f={components:{vBreadcrumb:i.a,vTabContent:v},data:function(){return{nav:["运营管理","营销工具管理","秒杀"],activeName:"allSecKill"}},methods:{handleClick:function(t){this.activeName=t.name}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secKill-list"},[a("v-breadcrumb",{attrs:{nav:t.nav}}),t._v(" "),a("el-card",{attrs:{"body-style":{padding:"30px 45px",minHeight:"80vh"}}},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部",name:"allSecKill"}},["allSecKill"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"未开始",name:"notStart"}},["notStart"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"进行中",name:"starting"}},["starting"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"已结束",name:"ended"}},["ended"==t.activeName?a("v-tab-content",{attrs:{name:t.activeName}}):t._e()],1)],1)],1)],1)},staticRenderFns:[]};var b=a("VU/8")(f,_,!1,function(t){a("zq2Z")},null,null);e.default=b.exports},zq2Z:function(t,e){}});