webpackJsonp([23],{"4Ldy":function(t,e){},"7k6J":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("FMx0"),o=r("BBuG"),a=r("UU1J"),s=r("5fic"),l=r("V3Ru"),n=(r("0xDb"),r("PJh5")),c=r.n(n),m={components:{vBreadcrumb:i.a,icon:a.a,vChooseproduct:o.a},data:function(){var t=this,e=function(t,e,r){if(!e)return r(new Error("参数不能为空!"));/^[1-9]*[1-9][0-9]*$/.test(e)?r():r(new Error("请输入正整数"))},r=function(t,e,r){if(!e)return r(new Error("参数不能为空!"));/^[0-9]+([.]{1}[0-9]{1,2})?$/.test(e)?r():r(new Error("请输入两位小数"))};return{nav:["运营管理","营销工具管理","降价拍","新建降价拍"],rules:{orderCloseTime:[{validator:e,trigger:"blur"}],intervalTime:[{validator:e,trigger:"blur"}],floorPriceTime:[{validator:e,trigger:"blur"}],startPrice:[{validator:r,trigger:"blur"}],floorPrice:[{validator:r,trigger:"blur"}],downPrice:[{validator:r,trigger:"blur"}],totalNumber:[{validator:function(e,r,i){if(!r)return i(new Error("参数不能为空!"));r>t.productDetail.stock?i(new Error("发放数量不能大于商品库存!")):i()},trigger:"blur"}],limitNumber:[{validator:function(t,e,r){if(""===e)return r(new Error("参数不能为空!"));/^\d+$/.test(e)?r():r(new Error("请输入非负整数"))},trigger:"blur"}]},form:{floorPrice:"",beginTime:"",intervalTime:"",downPrice:"",floorPriceTime:"",endTime:"",startPrice:"",orderCloseTime:"",totalNumber:"",limitNumber:"0"},showMask:!1,productDetail:{},showDuration:!1,durationTime:"",duration:"",btnLoading:!1}},activated:function(){this.productDetail={},this.duration="",this.form={},this.form.limitNumber=0},methods:{chooseProduct:function(){this.showMask=!0},productInf:function(t){this.showMask=!1,0!=t&&(this.productDetail=t)},floorPrice:function(){return!(Number(this.form.floorPrice)>Number(this.form.startPrice))||(this.$message.warning("最低价格应不大于起拍价格！"),this.form.floorPrice="",!1)},calDurationTime:function(t){var e=this.form.startPrice,r=this.form.floorPrice,i=this.form.intervalTime,o=this.form.downPrice;if(e)if(r){if(this.floorPrice())if(i&&o){var a=Math.floor((100*e-100*r)/(100*o))*i;this.durationTime=a;var s=Math.floor(a/60/24),l=Math.floor((a-60*s*24)/60),n=a-60*s*24-60*l;this.showDuration=t,this.duration=s+"天 "+this.addZero(l)+":"+this.addZero(n)+":00",this.calEndTime(this.form.beginTime,this.durationTime,this.form.floorPriceTime)}else this.$message.warning("请输入降价幅度！")}else this.$message.warning("请输入最低价格！");else this.$message.warning("请输入起拍价！")},addZero:function(t){return t<10?"0"+t:t},calEndTimeByStartDurationTime:function(){var t=this.showDuration;this.calDurationTime(t),this.calEndTime(this.form.beginTime,this.durationTime,this.form.floorPriceTime)},calEndTime:function(t,e,r){this.form.startPrice&&this.form.floorPrice&&this.form.intervalTime&&this.form.downPrice&&this.form.beginTime&&this.form.floorPriceTime&&(this.form.endTime=c()(new Date(t).getTime()+60*(Number(e)+Number(r))*1e3).format("YYYY-MM-DD HH:mm:ss"))},submitForm:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return console.log("error submit!!"),t.btnLoading=!1,!1;if(t.productDetail.id)if(t.form.beginTime){var r={};r.beginTime=c()(t.form.beginTime).format("YYYY-MM-DD HH:mm:ss"),r.downPrice=t.form.downPrice,r.endTime=t.form.endTime,r.floorPrice=t.form.floorPrice,r.floorPriceTime=t.form.floorPriceTime,r.intervalTime=t.form.intervalTime,r.orderCloseTime=t.form.orderCloseTime,r.productCode=t.productDetail.productCode,r.productId=t.productDetail.productId,r.productImg=t.productDetail.specImg,r.productName=t.productDetail.productName,r.productPrice=t.productDetail.originalPrice,r.productPriceId=t.productDetail.id,r.productSpec=t.productDetail.spec,r.startPrice=t.form.startPrice,r.totalNumber=t.form.totalNumber,r.limitNumber=t.form.limitNumber,r.url=l.operatorAddDepreciate,t.btnLoading=!0,t.$axios.post(s.n,r).then(function(e){t.$message.success(e.data.msg),t.$router.push("/depreciate"),t.btnLoading=!1}).catch(function(e){t.btnLoading=!1})}else t.$message.warning("请选择开始时间！");else t.$message.warning("请选择商品！")})},cancel:function(){this.$router.push("/depreciate")}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add-depreciate"},[r("v-breadcrumb",{attrs:{nav:t.nav}}),t._v(" "),r("el-card",{attrs:{"body-style":{padding:"20px 45px",color:"#666"}}},[r("div",{staticClass:"pro-title"},[t._v("新建降价拍")]),t._v(" "),r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"110px"}},[r("el-form-item",{attrs:{label:"选择商品"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.chooseProduct}},[t._v("+添加商品")])],1),t._v(" "),r("el-form-item",{attrs:{label:"商品名称"}},[t.productDetail.productName?r("span",[t._v(t._s(t.productDetail.productName))]):r("span",[t._v("--")])]),t._v(" "),r("el-form-item",{attrs:{label:"商品规格"}},[t.productDetail.spec?r("span",[t._v(t._s(t.productDetail.spec))]):r("span",[t._v("--")])]),t._v(" "),r("el-form-item",{attrs:{label:"商品原价"}},[t.productDetail.originalPrice?r("span",{staticClass:"color-red"},[t._v(t._s(t.productDetail.originalPrice))]):r("span",[t._v("--")])]),t._v(" "),r("el-form-item",{attrs:{label:"商品库存"}},[t.productDetail.stock?r("span",[t._v(t._s(t.productDetail.stock))]):r("span",[t._v("--")])]),t._v(" "),r("el-form-item",{staticStyle:{"margin-top":"30px"},attrs:{prop:"startPrice",label:"起拍价格"}},[t._v("\n                ￥\n                "),t.form.endTime?r("el-input",{on:{input:function(e){t.calDurationTime(t.showDuration)}},model:{value:t.form.startPrice,callback:function(e){t.$set(t.form,"startPrice",e)},expression:"form.startPrice"}}):r("el-input",{model:{value:t.form.startPrice,callback:function(e){t.$set(t.form,"startPrice",e)},expression:"form.startPrice"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"floorPrice",label:"最低价格"}},[t._v("\n                ￥\n                "),t.form.endTime?r("el-input",{on:{input:function(e){t.calDurationTime(t.showDuration)}},model:{value:t.form.floorPrice,callback:function(e){t.$set(t.form,"floorPrice",e)},expression:"form.floorPrice"}}):r("el-input",{on:{input:t.floorPrice},model:{value:t.form.floorPrice,callback:function(e){t.$set(t.form,"floorPrice",e)},expression:"form.floorPrice"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"开始时间",prop:"beginTime"}},[t.form.endTime?r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择开始时间"},on:{input:function(e){t.calDurationTime(t.showDuration)}},model:{value:t.form.beginTime,callback:function(e){t.$set(t.form,"beginTime",e)},expression:"form.beginTime"}}):r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择开始时间"},model:{value:t.form.beginTime,callback:function(e){t.$set(t.form,"beginTime",e)},expression:"form.beginTime"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"orderCloseTime",label:"设置关闭订单"}},[r("el-input",{staticClass:"small",model:{value:t.form.orderCloseTime,callback:function(e){t.$set(t.form,"orderCloseTime",e)},expression:"form.orderCloseTime"}}),t._v(" "),r("span",[t._v("分钟未付款自动关闭订单")])],1),t._v(" "),r("div",{staticClass:"spec-item"},[r("el-form-item",{attrs:{prop:"intervalTime",label:"降价幅度"}},[r("span",[t._v("每")]),t._v(" "),t.form.endTime?r("el-input",{staticClass:"small",on:{input:function(e){t.calDurationTime(t.showDuration)}},model:{value:t.form.intervalTime,callback:function(e){t.$set(t.form,"intervalTime",e)},expression:"form.intervalTime"}}):r("el-input",{staticClass:"small",model:{value:t.form.intervalTime,callback:function(e){t.$set(t.form,"intervalTime",e)},expression:"form.intervalTime"}}),t._v(" "),r("span",[t._v("分钟下降")]),t._v(" "),r("span",[t._v("￥")])],1),t._v(" "),r("el-form-item",{staticClass:"item",attrs:{prop:"downPrice"}},[t.form.endTime?r("el-input",{staticClass:"small",on:{input:function(e){t.calDurationTime(t.showDuration)}},model:{value:t.form.downPrice,callback:function(e){t.$set(t.form,"downPrice",e)},expression:"form.downPrice"}}):r("el-input",{staticClass:"small",model:{value:t.form.downPrice,callback:function(e){t.$set(t.form,"downPrice",e)},expression:"form.downPrice"}})],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"持续时间"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.calDurationTime(!0)}}},[t._v("计算持续时间")]),t._v(" "),t.showDuration?r("div",[t._v(t._s(t.duration))]):t._e()],1),t._v(" "),r("el-form-item",{attrs:{prop:"floorPriceTime",label:"底价持续时间"}},[r("span",[t._v("降到底价还允许")]),t._v(" "),r("el-input",{staticClass:"small",on:{input:t.calEndTimeByStartDurationTime},model:{value:t.form.floorPriceTime,callback:function(e){t.$set(t.form,"floorPriceTime",e)},expression:"form.floorPriceTime"}}),t._v(" "),r("span",[t._v("分钟购买时间")])],1),t._v(" "),r("el-form-item",{attrs:{label:"结束时间"}},[t.form.endTime?r("span",[t._v(t._s(t.form.endTime))]):r("span",[t._v("--")])]),t._v(" "),r("el-form-item",{attrs:{prop:"totalNumber",label:"降价拍发放数量"}},[r("el-input",{staticClass:"small",model:{value:t.form.totalNumber,callback:function(e){t.$set(t.form,"totalNumber",e)},expression:"form.totalNumber"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"limitNumber",label:"每人限购"}},[r("el-input",{staticClass:"small",model:{value:t.form.limitNumber,callback:function(e){t.$set(t.form,"limitNumber",e)},expression:"form.limitNumber"}}),t._v(" "),r("span",{staticClass:"tip"},[t._v("(同一用户ID视为同一人)")])],1),t._v(" "),r("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.submitForm}},[t._v("确认保存")]),t._v(" "),r("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1),t._v(" "),t.showMask?r("v-chooseproduct",{attrs:{productId:t.productDetail.id,searchProductId:t.productDetail.searchProductId,searchProductName:t.productDetail.productName,activityType:2},on:{getProductInf:t.productInf}}):t._e()],1)},staticRenderFns:[]};var d=r("VU/8")(m,u,!1,function(t){r("4Ldy")},"data-v-6c25c7e8",null);e.default=d.exports},BBuG:function(t,e,r){"use strict";var i=r("5fic"),o=(r("V3Ru"),r("0xDb"),{components:{},props:["productId","activityType","searchProductId","searchProductName"],data:function(){return{keyWords:"",keyWordsID:"",stock:"",flagStatus:"",status:"",productNum:"",tableData:[],checkList:[],selectedPro:[],chooseId:"",productDetail:"",showResult:!1,noResult:!1,resultTip:"",name:"",prodCode:""}},created:function(){this.tableData=[],this.keyWords="",this.chooseId=this.productId,this.searchProductId&&(this.keyWordsID=this.searchProductId,this.keyWords=this.searchProductName,this.getSpecList())},methods:{closeMask:function(t){if(t){if(!this.chooseId)return void this.$message.warning("请选择商品!");this.$emit("getProductInf",this.productDetail)}else this.$emit("getProductInf",!1)},getSpecList:function(){var t=this;""!=this.keyWordsID?(this.showResult=!0,0==this.productNum||0==this.flagStatus||5==this.status?(this.noResult=!0,0==this.flagStatus?this.resultTip="已参与同类活动":5==this.status?this.resultTip="已下架":0==this.productNum&&(this.resultTip="该商品无库存")):(this.noResult=!1,this.$axios.post(i.A,{productId:this.keyWordsID}).then(function(e){t.tableData=[],t.tableData=e.data.data,t.showResult=!0}))):this.$message.success("暂无数据")},querySearchAsync:function(t,e){""!=t&&(this.keyWordsID="",this.$axios.post(i.z,{condition:t,activityType:this.activityType}).then(function(t){var r=[];t.data.data.forEach(function(t,e){var i={};i.value=t.name+" 产品ID："+t.prodCode,i.id=t.id,i.productNum=t.productNum,i.flagStatus=t.flagStatus,i.name=t.name,i.status=t.status,i.prodCode=t.prodCode,r.push(i)}),e(r)}))},handleSelect:function(t){this.keyWordsID=t.id,this.productNum=t.productNum,this.flagStatus=t.flagStatus,this.status=t.status,this.name=t.name,this.prodCode=t.prodCode},selectPro:function(t){this.chooseId=t.id,t.specImg||(t.specImg=t.imgUrl),this.productDetail=t,this.productDetail.searchProductId=this.keyWordsID}}}),a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"choose-product-mask"},[r("div",{staticClass:"choose-product"},[r("el-card",{attrs:{"body-style":{padding:"50px"}}},[r("span",{staticClass:"title"},[t._v("商品名称/ID")]),t._v(" "),r("el-autocomplete",{staticStyle:{width:"230px"},attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入产品名称模糊搜索"},on:{select:t.handleSelect},model:{value:t.keyWords,callback:function(e){t.keyWords=e},expression:"keyWords"}}),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.getSpecList}},[t._v("搜索")]),t._v(" "),t.showResult?r("div",[t.noResult?r("div",{staticClass:"nodata"},[r("table",[r("tr",[r("td",{staticClass:"product-inf"},[t._v(t._s(t.name)+" "+t._s(t.prodCode))]),t._v(" "),r("td",{staticClass:"color-red no-stock"},[t._v(t._s(t.resultTip))])])])]):r("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:t.tableData,border:""}},[r("el-table-column",{attrs:{prop:"spec",label:"规格",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"选择",align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-radio",{attrs:{disabled:0==e.row.stock,label:e.row.id,value:e.id},on:{change:function(r){t.selectPro(e.row)}},model:{value:t.chooseId,callback:function(e){t.chooseId=e},expression:"chooseId"}},[t._v("选择"),0==e.row.stock?r("span",{staticClass:"color-red"},[t._v("(无库存)")]):t._e()])]}}])})],1)],1):r("div",{staticClass:"nodata"},[r("table",{staticStyle:{"text-align":"center"}},[r("tr",[r("td",[t._v("请输入产品名称模糊搜索~")])])])]),t._v(" "),r("div",{staticStyle:{margin:"20px 0 30px",float:"right"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.closeMask(!0)}}},[t._v("确认")]),t._v(" "),r("el-button",{on:{click:function(e){t.closeMask(!1)}}},[t._v("取消")])],1)],1)],1)])},staticRenderFns:[]};var s=r("VU/8")(o,a,!1,function(t){r("wtDC")},"data-v-dfeb225c",null);e.a=s.exports},wtDC:function(t,e){}});