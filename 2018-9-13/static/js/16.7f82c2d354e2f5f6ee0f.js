webpackJsonp([16],{"3Cnd":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"queryAllGiftBagOrderPageList",function(){return s}),a.d(e,"getGiftBagOrderDetail",function(){return i}),a.d(e,"orderSendOutGift",function(){return r});var s="/admin/gbGiftBagOrder/queryAllGiftBagOrderPageList",i="/admin/gbGiftBagOrder/getGiftBagOrderDetail",r="/admin/order/orderSendOutGift"},BPDs:function(t,e,a){"use strict";a.d(e,"c",function(){return s}),a.d(e,"d",function(){return i}),a.d(e,"g",function(){return r}),a.d(e,"h",function(){return n}),a.d(e,"i",function(){return o}),a.d(e,"f",function(){return l}),a.d(e,"e",function(){return c}),a.d(e,"a",function(){return d}),a.d(e,"b",function(){return v});var s="/admin/order/orderSign",i="/admin/gbGiftBagOrder/queryAllGiftBagOrderPageList",r="/admin/gbGiftBagOrder/queryUnPayGiftBagOrderPageList",n="/admin/gbGiftBagOrder/queryUnSendOutGiftBagOrderPageList",o="/admin/gbGiftBagOrder/queryUnVerifyGiftBagOrderPageList",l="/admin/gbGiftBagOrder/queryCompletedGiftBagOrderPageList",c="/admin/gbGiftBagOrder/queryClosedGiftBagOrderPageList",d="/admin/gbGiftBagOrder/getGiftBagOrderDetail",v="/admin/order/orderSendOut"},f5Bn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("FMx0"),i=a("BPDs"),r=a("3Cnd"),n=a("PJh5"),o=a.n(n),l=a("0xDb"),c=a.n(l),d=a("xnHa"),v={components:{vBreadcrumb:s.a},mixins:[d.b],data:function(){return{nav:["订单管理","礼包订单"],p:{orderSendOutGift:!1},tabLoading:!1,w:{name:"28%",price:"12%",num:"12%",consignee:"16%",status:"12%",collection:"18%",minWidth:"100px"},starArr:[{label:"红色标记",value:"1"},{label:"蓝色标记",value:"2"},{label:"绿色标记",value:"3"},{label:"黄色标记",value:"4"},{label:"紫色标记",value:"5"}],markArr:[{label:"red",value:"1"},{label:"skyblue",value:"2"},{label:"lightgreen",value:"3"},{label:"orange",value:"4"},{label:"purple",value:"5"}],activeName:"allOrder",tabName:"",dateRange:[],form:{productNum:"",realName:"",orderNum:"",productName:"",stars:""},url:"",status:"",tableData:[]}},activated:function(){this.url=i.d,this.getList(1),this.pControl()},methods:{pControl:function(){for(var t in this.p)this.p[t]=c.a.pc(r[t])},getList:function(t){var e=this,a={};this.page.currentPage=t,a.giftBagCode=this.form.productNum,a.receiver=this.form.realName,a.orderNum=this.form.orderNum,a.giftBagName=this.form.productName,a.stars=this.form.stars,a.startTime=0!=this.dateRange.length?o()(this.dateRange[0]).format("YYYY-MM-DD"):"",a.endTime=0!=this.dateRange.length?o()(this.dateRange[1]).format("YYYY-MM-DD"):"",a.page=t,this.tabLoading=!0,this.$axios.post(this.url,a).then(function(t){for(var a in e.tabLoading=!1,t.data.data.data)t.data.data.data[a].isShowPop=!1,t.data.data.data[a].starColor=void 0==e.markArr[t.data.data.data[a].stars-1]?"#ccc":e.markArr[t.data.data.data[a].stars-1].label,t.data.data.data[a].price=null==t.data.data.data[a].totalPrice?"0":t.data.data.data[a].totalPrice,e.tableData.push(t.data.data.data[a]);e.tableData=t.data.data.data,e.page.totalPage=t.data.data.resultCount}).catch(function(t){e.tabLoading=!1})},resetForm:function(t){this.$refs[t].resetFields(),this.dateRange=[],this.getList(1)},handleClick:function(t){switch(this.activeName=t.name,this.activeName){case"allOrder":this.url=i.d;break;case"toBePaid":this.url=i.g;break;case"toBeSend":this.url=i.h;break;case"toBeConfirm":this.url=i.i;break;case"finished":this.url=i.f;break;case"closed":this.url=i.e}this.getList(1)},changeColor:function(t,e){var a=this,s={};s.orderId=e.id,s.star=t.value,s.remarks=e.adminRemark,this.$axios.post(i.c,s).then(function(s){a.$message.success(s.data.data),e.starColor=t.label,e.isShowPop=!1}).catch(function(t){console.log(res)})},pushCloud:function(t){var e=this;this.$axios.post(i.b,{orderId:t.id}).then(function(t){e.$message.success(t.data.data),e.getList(e.page.currentPage)}).catch(function(t){console.log(t)})},orderInfo:function(t){sessionStorage.setItem("giftOrderInfoId",t.id),this.$router.push({name:"giftOrderInfo",query:{giftOrderInfoId:t.id}})},orderCheckBox:function(t){console.log(t)}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gift-list"},[a("v-breadcrumb",{attrs:{nav:t.nav}}),t._v(" "),a("el-card",{staticClass:"query-panue",attrs:{"body-style":{padding:"20px 20px"}}},[a("el-form",{ref:"form",attrs:{model:t.form,inline:"","label-width":"120px"}},[a("el-form-item",{attrs:{prop:"productNum",label:"产品编号"}},[a("el-input",{attrs:{placeholder:"请输入产品编号"},model:{value:t.form.productNum,callback:function(e){t.$set(t.form,"productNum",e)},expression:"form.productNum"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"realName",label:"买家姓名"}},[a("el-input",{attrs:{placeholder:"请输入产品名称"},model:{value:t.form.realName,callback:function(e){t.$set(t.form,"realName",e)},expression:"form.realName"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"orderNum",label:"订单编号"}},[a("el-input",{attrs:{placeholder:"请输入订单编号"},model:{value:t.form.orderNum,callback:function(e){t.$set(t.form,"orderNum",e)},expression:"form.orderNum"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"productName",label:"产品名称"}},[a("el-input",{attrs:{placeholder:"请输入产品名称"},model:{value:t.form.productName,callback:function(e){t.$set(t.form,"productName",e)},expression:"form.productName"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"stars",label:"订单标记"}},[a("el-select",{attrs:{placeholder:"请选择订单标记"},model:{value:t.form.stars,callback:function(e){t.$set(t.form,"stars",e)},expression:"form.stars"}},t._l(t.starArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"成交时间"}},[a("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v(" "),a("el-form-item",{attrs:{label:" "}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.getList(1)}}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("重置")])],1),t._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{attrs:{type:"primary"}},[t._v("批量导出")])],1)],1)],1),t._v(" "),a("el-card",{staticStyle:{"margin-top":"20px",minHeight:"90vh","overflow-x":"auto","min-width":"1336px"},attrs:{"body-style":{padding:"20px 50px"}}},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],staticStyle:{"min-width":"1366px"},attrs:{label:"全部订单",name:"allOrder"}},["allOrder"==t.activeName?[a("div",{staticClass:"tab-title"},[a("span",{staticClass:"spec",style:{width:t.w.name,minWidth:t.w.minWidth}},[t._v("产品名称")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.price,minWidth:t.w.minWidth}},[t._v("单价")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.num,minWidth:t.w.minWidth}},[t._v("数量")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.consignee,minWidth:t.w.minWidth}},[t._v("买家")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.status,minWidth:t.w.minWidth}},[t._v("交易状态")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.collection,minWidth:t.w.minWidth}},[t._v("实收款")])]),t._v(" "),t._l(t.tableData,function(e,s){return a("div",{key:s,staticClass:"tab-wrap"},[a("div",{staticClass:"tab-content-title"},[a("el-checkbox",{on:{change:function(a){t.orderCheckBox(e)}}}),t._v(" "),a("span",[t._v("订单号："+t._s(e.orderNum))]),t._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[t._v("创建时间："+t._s(t._f("formatDate")(e.orderCreateTime)))]),t._v(" "),a("div",{staticClass:"operate-btn-group"},[2==e.orderStatus&&t.p.orderSendOutGift?a("span",{on:{click:function(a){t.pushCloud(e)}}},[t._v("推送云仓")]):t._e(),t._v(" "),a("span",{staticStyle:{margin:"0 15px 0 15px"},on:{click:function(a){t.orderInfo(e)}}},[t._v("订单详情")]),t._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"150",trigger:"hover"},model:{value:e.isShowPop,callback:function(a){t.$set(e,"isShowPop",a)},expression:"v.isShowPop"}},[a("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[t._v("标记   "),a("span",{staticClass:"star",style:{color:e.starColor}},[t._v("★")])]),t._v(" "),t._l(t.markArr,function(s,i){return a("span",{key:i,style:{color:s.label,fontSize:"22px",cursor:"pointer",marginRight:"5px"},on:{click:function(a){t.changeColor(s,e)}}},[t._v("★")])}),t._v(" "),a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.adminRemark,callback:function(a){t.$set(e,"adminRemark",a)},expression:"v.adminRemark"}})],2)],1)],1),t._v(" "),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"left"},t._l(e.orderProduct,function(e,s){return a("div",{key:s,staticClass:"bar"},[a("div",{staticClass:"name"},[a("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),a("span",{staticClass:"pro-name"},[t._v(t._s(e.productName))]),t._v(" "),a("span",{staticClass:"pro-spec"},[t._v(t._s(e.spec))])]),t._v(" "),a("div",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("div",{staticClass:"num"},[t._v(t._s(e.num))]),t._v(" "),a("div",{staticClass:"consignee"},[t._v(t._s(e.receiver))])])})),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"status",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",lineHeight:120*e.orderProduct.length+e.orderProduct.length-1+"px"}},[1==e.orderStatus?[t._v("待支付")]:t._e(),t._v(" "),2==e.orderStatus?[t._v("待发货")]:t._e(),t._v(" "),3==e.orderStatus?[t._v("待确认")]:t._e(),t._v(" "),4==e.orderStatus?[t._v("待自提")]:t._e(),t._v(" "),5==e.orderStatus?[t._v("确认收货")]:t._e(),t._v(" "),6==e.orderStatus?[t._v("已关闭(退款关闭)")]:t._e(),t._v(" "),7==e.orderStatus||9==e.orderStatus?[t._v("已完成")]:t._e(),t._v(" "),8==e.orderStatus?[t._v("已关闭(用户关闭)")]:t._e(),t._v(" "),10==e.orderStatus?[t._v("已关闭(超时关闭)")]:t._e()],2),t._v(" "),a("div",{staticClass:"collection",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",paddingTop:120*e.orderProduct.length/2-30+"px"}},[a("span",[t._v(t._s(t._f("handleMoney")(e.price))),a("br"),t._v("（含运费："+t._s(t._f("handleMoney")(e.freightPrice))+"）")])])])])])})]:t._e()],2),t._v(" "),a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],attrs:{label:"待支付",name:"toBePaid"}},["toBePaid"==t.activeName?[a("div",{staticClass:"tab-title"},[a("span",{staticClass:"spec",style:{width:t.w.name,minWidth:t.w.minWidth}},[t._v("产品名称")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.price,minWidth:t.w.minWidth}},[t._v("单价")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.num,minWidth:t.w.minWidth}},[t._v("数量")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.consignee,minWidth:t.w.minWidth}},[t._v("买家")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.status,minWidth:t.w.minWidth}},[t._v("交易状态")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.collection,minWidth:t.w.minWidth}},[t._v("实收款")])]),t._v(" "),t._l(t.tableData,function(e,s){return a("div",{key:s,staticClass:"tab-wrap"},[a("div",{staticClass:"tab-content-title"},[a("el-checkbox",{on:{change:function(a){t.orderCheckBox(e)}}}),t._v(" "),a("span",[t._v("订单号："+t._s(e.orderNum))]),t._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[t._v("创建时间："+t._s(t._f("formatDate")(e.orderCreateTime)))]),t._v(" "),a("div",{staticClass:"operate-btn-group"},[a("span",{staticStyle:{margin:"0 15px 0 15px"},on:{click:function(a){t.orderInfo(e)}}},[t._v("订单详情")]),t._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"150",trigger:"hover"},model:{value:e.isShowPop,callback:function(a){t.$set(e,"isShowPop",a)},expression:"v.isShowPop"}},[a("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[t._v("标记   "),a("span",{staticClass:"star",style:{color:e.starColor}},[t._v("★")])]),t._v(" "),t._l(t.markArr,function(s,i){return a("span",{key:i,style:{color:s.label,fontSize:"22px",cursor:"pointer",marginRight:"5px"},on:{click:function(a){t.changeColor(s,e)}}},[t._v("★")])}),t._v(" "),a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.adminRemark,callback:function(a){t.$set(e,"adminRemark",a)},expression:"v.adminRemark"}})],2)],1)],1),t._v(" "),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"left"},t._l(e.orderProduct,function(e,s){return a("div",{key:s,staticClass:"bar"},[a("div",{staticClass:"name"},[a("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),a("span",{staticClass:"pro-name"},[t._v(t._s(e.productName))]),t._v(" "),a("span",{staticClass:"pro-spec"},[t._v(t._s(e.spec))])]),t._v(" "),a("div",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("div",{staticClass:"num"},[t._v(t._s(e.num))]),t._v(" "),a("div",{staticClass:"consignee"},[t._v(t._s(e.receiver))])])})),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"status",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",lineHeight:120*e.orderProduct.length+e.orderProduct.length-1+"px"}},[[t._v("待支付")]],2),t._v(" "),a("div",{staticClass:"collection",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",paddingTop:120*e.orderProduct.length/2-30+"px"}},[a("span",[t._v(t._s(t._f("handleMoney")(e.price))),a("br"),t._v("（含运费："+t._s(t._f("handleMoney")(e.freightPrice))+"）")])])])])])})]:t._e()],2),t._v(" "),a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],attrs:{label:"待发货",name:"toBeSend"}},["toBeSend"==t.activeName?[a("div",{staticClass:"tab-title"},[a("span",{staticClass:"spec",style:{width:t.w.name,minWidth:t.w.minWidth}},[t._v("产品名称")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.price,minWidth:t.w.minWidth}},[t._v("单价")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.num,minWidth:t.w.minWidth}},[t._v("数量")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.consignee,minWidth:t.w.minWidth}},[t._v("买家")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.status,minWidth:t.w.minWidth}},[t._v("交易状态")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.collection,minWidth:t.w.minWidth}},[t._v("实收款")])]),t._v(" "),t._l(t.tableData,function(e,s){return a("div",{key:s,staticClass:"tab-wrap"},[a("div",{staticClass:"tab-content-title"},[a("el-checkbox",{on:{change:function(a){t.orderCheckBox(e)}}}),t._v(" "),a("span",[t._v("订单号："+t._s(e.orderNum))]),t._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[t._v("创建时间："+t._s(t._f("formatDate")(e.orderCreateTime)))]),t._v(" "),a("div",{staticClass:"operate-btn-group"},[t.p.orderSendOutGift?a("span",{on:{click:function(a){t.pushCloud(e)}}},[t._v("推送云仓")]):t._e(),t._v(" "),a("span",{staticStyle:{margin:"0 15px 0 15px"},on:{click:function(a){t.orderInfo(e)}}},[t._v("订单详情")]),t._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"150",trigger:"hover"},model:{value:e.isShowPop,callback:function(a){t.$set(e,"isShowPop",a)},expression:"v.isShowPop"}},[a("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[t._v("标记   "),a("span",{staticClass:"star",style:{color:e.starColor}},[t._v("★")])]),t._v(" "),t._l(t.markArr,function(s,i){return a("span",{key:i,style:{color:s.label,fontSize:"22px",cursor:"pointer",marginRight:"5px"},on:{click:function(a){t.changeColor(s,e)}}},[t._v("★")])}),t._v(" "),a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.adminRemark,callback:function(a){t.$set(e,"adminRemark",a)},expression:"v.adminRemark"}})],2)],1)],1),t._v(" "),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"left"},t._l(e.orderProduct,function(e,s){return a("div",{key:s,staticClass:"bar"},[a("div",{staticClass:"name"},[a("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),a("span",{staticClass:"pro-name"},[t._v(t._s(e.productName))]),t._v(" "),a("span",{staticClass:"pro-spec"},[t._v(t._s(e.spec))])]),t._v(" "),a("div",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("div",{staticClass:"num"},[t._v(t._s(e.num))]),t._v(" "),a("div",{staticClass:"consignee"},[t._v(t._s(e.receiver))])])})),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"status",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",lineHeight:120*e.orderProduct.length+e.orderProduct.length-1+"px"}},[[t._v("待发货")]],2),t._v(" "),a("div",{staticClass:"collection",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",paddingTop:120*e.orderProduct.length/2-30+"px"}},[a("span",[t._v(t._s(t._f("handleMoney")(e.price))),a("br"),t._v("（含运费："+t._s(t._f("handleMoney")(e.freightPrice))+"）")])])])])])})]:t._e()],2),t._v(" "),a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],attrs:{label:"待确认",name:"toBeConfirm"}},["toBeConfirm"==t.activeName?[a("div",{staticClass:"tab-title"},[a("span",{staticClass:"spec",style:{width:t.w.name,minWidth:t.w.minWidth}},[t._v("产品名称")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.price,minWidth:t.w.minWidth}},[t._v("单价")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.num,minWidth:t.w.minWidth}},[t._v("数量")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.consignee,minWidth:t.w.minWidth}},[t._v("买家")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.status,minWidth:t.w.minWidth}},[t._v("交易状态")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.collection,minWidth:t.w.minWidth}},[t._v("实收款")])]),t._v(" "),t._l(t.tableData,function(e,s){return a("div",{key:s,staticClass:"tab-wrap"},[a("div",{staticClass:"tab-content-title"},[a("el-checkbox",{on:{change:function(a){t.orderCheckBox(e)}}}),t._v(" "),a("span",[t._v("订单号："+t._s(e.orderNum))]),t._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[t._v("创建时间："+t._s(t._f("formatDate")(e.orderCreateTime)))]),t._v(" "),a("div",{staticClass:"operate-btn-group"},[a("span",{staticStyle:{margin:"0 15px 0 15px"},on:{click:function(a){t.orderInfo(e)}}},[t._v("订单详情")]),t._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"150",trigger:"hover"},model:{value:e.isShowPop,callback:function(a){t.$set(e,"isShowPop",a)},expression:"v.isShowPop"}},[a("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[t._v("标记   "),a("span",{staticClass:"star",style:{color:e.starColor}},[t._v("★")])]),t._v(" "),t._l(t.markArr,function(s,i){return a("span",{key:i,style:{color:s.label,fontSize:"22px",cursor:"pointer",marginRight:"5px"},on:{click:function(a){t.changeColor(s,e)}}},[t._v("★")])}),t._v(" "),a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.adminRemark,callback:function(a){t.$set(e,"adminRemark",a)},expression:"v.adminRemark"}})],2)],1)],1),t._v(" "),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"left"},t._l(e.orderProduct,function(e,s){return a("div",{key:s,staticClass:"bar"},[a("div",{staticClass:"name"},[a("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),a("span",{staticClass:"pro-name"},[t._v(t._s(e.productName))]),t._v(" "),a("span",{staticClass:"pro-spec"},[t._v(t._s(e.spec))])]),t._v(" "),a("div",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("div",{staticClass:"num"},[t._v(t._s(e.num))]),t._v(" "),a("div",{staticClass:"consignee"},[t._v(t._s(e.receiver))])])})),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"status",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",lineHeight:120*e.orderProduct.length+e.orderProduct.length-1+"px"}},[[t._v("待确认")]],2),t._v(" "),a("div",{staticClass:"collection",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",paddingTop:120*e.orderProduct.length/2-30+"px"}},[a("span",[t._v(t._s(t._f("handleMoney")(e.price))),a("br"),t._v("（含运费："+t._s(t._f("handleMoney")(e.freightPrice))+"）")])])])])])})]:t._e()],2),t._v(" "),a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],attrs:{label:"已完成",name:"finished"}},["finished"==t.activeName?[a("div",{staticClass:"tab-title"},[a("span",{staticClass:"spec",style:{width:t.w.name,minWidth:t.w.minWidth}},[t._v("产品名称")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.price,minWidth:t.w.minWidth}},[t._v("单价")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.num,minWidth:t.w.minWidth}},[t._v("数量")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.consignee,minWidth:t.w.minWidth}},[t._v("买家")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.status,minWidth:t.w.minWidth}},[t._v("交易状态")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.collection,minWidth:t.w.minWidth}},[t._v("实收款")])]),t._v(" "),t._l(t.tableData,function(e,s){return a("div",{key:s,staticClass:"tab-wrap"},[a("div",{staticClass:"tab-content-title"},[a("el-checkbox",{on:{change:function(a){t.orderCheckBox(e)}}}),t._v(" "),a("span",[t._v("订单号："+t._s(e.orderNum))]),t._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[t._v("创建时间："+t._s(t._f("formatDate")(e.orderCreateTime)))]),t._v(" "),a("div",{staticClass:"operate-btn-group"},[a("span",{staticStyle:{margin:"0 15px 0 15px"},on:{click:function(a){t.orderInfo(e)}}},[t._v("订单详情")]),t._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"150",trigger:"hover"},model:{value:e.isShowPop,callback:function(a){t.$set(e,"isShowPop",a)},expression:"v.isShowPop"}},[a("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[t._v("标记   "),a("span",{staticClass:"star",style:{color:e.starColor}},[t._v("★")])]),t._v(" "),t._l(t.markArr,function(s,i){return a("span",{key:i,style:{color:s.label,fontSize:"22px",cursor:"pointer",marginRight:"5px"},on:{click:function(a){t.changeColor(s,e)}}},[t._v("★")])}),t._v(" "),a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.adminRemark,callback:function(a){t.$set(e,"adminRemark",a)},expression:"v.adminRemark"}})],2)],1)],1),t._v(" "),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"left"},t._l(e.orderProduct,function(e,s){return a("div",{key:s,staticClass:"bar"},[a("div",{staticClass:"name"},[a("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),a("span",{staticClass:"pro-name"},[t._v(t._s(e.productName))]),t._v(" "),a("span",{staticClass:"pro-spec"},[t._v(t._s(e.spec))])]),t._v(" "),a("div",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("div",{staticClass:"num"},[t._v(t._s(e.num))]),t._v(" "),a("div",{staticClass:"consignee"},[t._v(t._s(e.receiver))])])})),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"status",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",lineHeight:120*e.orderProduct.length+e.orderProduct.length-1+"px"}},[[t._v("已完成")]],2),t._v(" "),a("div",{staticClass:"collection",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",paddingTop:120*e.orderProduct.length/2-30+"px"}},[a("span",[t._v(t._s(t._f("handleMoney")(e.price))),a("br"),t._v("（含运费："+t._s(t._f("handleMoney")(e.freightPrice))+"）")])])])])])})]:t._e()],2),t._v(" "),a("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],attrs:{label:"已关闭",name:"closed"}},["closed"==t.activeName?[a("div",{staticClass:"tab-title"},[a("span",{staticClass:"spec",style:{width:t.w.name,minWidth:t.w.minWidth}},[t._v("产品名称")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.price,minWidth:t.w.minWidth}},[t._v("单价")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.num,minWidth:t.w.minWidth}},[t._v("数量")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.consignee,minWidth:t.w.minWidth}},[t._v("买家")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.status,minWidth:t.w.minWidth}},[t._v("交易状态")]),t._v(" "),a("span",{staticClass:"spec",style:{width:t.w.collection,minWidth:t.w.minWidth}},[t._v("实收款")])]),t._v(" "),t._l(t.tableData,function(e,s){return a("div",{key:s,staticClass:"tab-wrap"},[a("div",{staticClass:"tab-content-title"},[a("el-checkbox",{on:{change:function(a){t.orderCheckBox(e)}}}),t._v(" "),a("span",[t._v("订单号："+t._s(e.orderNum))]),t._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[t._v("创建时间："+t._s(t._f("formatDate")(e.orderCreateTime)))]),t._v(" "),a("div",{staticClass:"operate-btn-group"},[a("span",{staticStyle:{margin:"0 15px 0 15px"},on:{click:function(a){t.orderInfo(e)}}},[t._v("订单详情")]),t._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"150",trigger:"hover"},model:{value:e.isShowPop,callback:function(a){t.$set(e,"isShowPop",a)},expression:"v.isShowPop"}},[a("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[t._v("标记   "),a("span",{staticClass:"star",style:{color:e.starColor}},[t._v("★")])]),t._v(" "),t._l(t.markArr,function(s,i){return a("span",{key:i,style:{color:s.label,fontSize:"22px",cursor:"pointer",marginRight:"5px"},on:{click:function(a){t.changeColor(s,e)}}},[t._v("★")])}),t._v(" "),a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.adminRemark,callback:function(a){t.$set(e,"adminRemark",a)},expression:"v.adminRemark"}})],2)],1)],1),t._v(" "),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"left"},t._l(e.orderProduct,function(e,s){return a("div",{key:s,staticClass:"bar"},[a("div",{staticClass:"name"},[a("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),a("span",{staticClass:"pro-name"},[t._v(t._s(e.productName))]),t._v(" "),a("span",{staticClass:"pro-spec"},[t._v(t._s(e.spec))])]),t._v(" "),a("div",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("div",{staticClass:"num"},[t._v(t._s(e.num))]),t._v(" "),a("div",{staticClass:"consignee"},[t._v(t._s(e.receiver))])])})),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"status",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",lineHeight:120*e.orderProduct.length+e.orderProduct.length-1+"px"}},[[t._v("已关闭")]],2),t._v(" "),a("div",{staticClass:"collection",style:{height:120*e.orderProduct.length+e.orderProduct.length-1+"px",paddingTop:120*e.orderProduct.length/2-30+"px"}},[a("span",[t._v(t._s(t._f("handleMoney")(e.price))),a("br"),t._v("（含运费："+t._s(t._f("handleMoney")(e.freightPrice))+"）")])])])])])})]:t._e()],2)],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,layout:"total, prev, pager, next, jumper",total:t.page.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")(v,p,!1,function(t){a("q+KB")},null,null);e.default=_.exports},"q+KB":function(t,e){}});