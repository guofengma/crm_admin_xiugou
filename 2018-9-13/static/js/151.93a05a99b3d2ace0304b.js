webpackJsonp([151],{"2mvK":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),c=s.n(i),a=s("FMx0"),o=s("9Vdu"),r=(s("F30e"),s("0xDb"),{components:{vBreadcrumb:a.a},data:function(){return{giftId:"",keyWords:"",keyWordsID:"",productNum:"",tableData:[],checkList:[],selectedPro:[]}},activated:function(){this.giftId=this.$route.query.giftProductMangeId||sessionStorage.getItem("giftProductMangeId"),this.tableData=[],this.checkList=[],this.selectedPro=[],this.productNum="",this.keyWords="",this.getGiftProInfo()},methods:{getGiftProInfo:function(){var t=this;this.$axios.post(o.w,{id:this.giftId}).then(function(e){t.selectedPro=[],t.selectedPro=e.data.data})},submitForm:function(){var t=this;if(0!=this.selectedPro.length){var e={};e.id=this.giftId,e.jsonStr=c()(this.selectedPro),this.$axios.post(o.b,e).then(function(e){t.$message.success(e.data.msg),t.$router.push("giftManage")})}else this.$message.warning("请选择产品规格")},getSpecList:function(){var t=this;""!=this.keyWordsID?this.$axios.post(o.y,{productId:this.keyWordsID}).then(function(e){t.tableData=[],t.checkList=[],e.data.data.forEach(function(e,s){e.checked=!1,t.tableData.push(e)})}):this.$message.success("暂无数据")},querySearchAsync:function(t,e){""!=t&&(this.keyWordsID="",this.$axios.post(o.k,{condition:t}).then(function(t){var s=[];t.data.data.forEach(function(t,e){var i={};i.value=t.name+" 产品ID："+t.prodCode,i.id=t.id,s.push(i)}),e(s)}))},handleSelect:function(t){this.keyWordsID=t.id},setNum:function(){if(""!=this.productNum&&void 0!=this.productNum)if(0!=this.checkList.length){var t=[];this.checkList.forEach(function(e,s){t.push(e)});var e={};e.productId=t[0].productId,e.value=[],t.forEach(function(t,s){var i={};i.id=t.id,i.num=1,i.name=t.productName,i.spec=t.spec,i.prodCode=t.productCode,e.value.push(i)});for(var s=0;s<this.productNum;s++)this.selectedPro.push(e)}else this.$message.warning("请选择产品规格");else this.$message.warning("请输入产品数量")},delselectedPro:function(t,e){this.selectedPro[t].value.splice(e,1),0==this.selectedPro[t].value.length&&this.selectedPro.splice(t,1)},selectPro:function(t,e){var s=this;1==t?this.checkList.push(e):this.checkList.forEach(function(t,i){t.id==e.id&&s.checkList.splice(i,1)})}}}),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gift-product-mange"},[s("v-breadcrumb",{attrs:{nav:["品牌产品管理","礼包管理"]}}),t._v(" "),s("el-card",{attrs:{"body-style":{padding:"50px"}}},[s("el-autocomplete",{staticStyle:{width:"600px"},attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入产品名称模糊搜索"},on:{select:t.handleSelect},model:{value:t.keyWords,callback:function(e){t.keyWords=e},expression:"keyWords"}}),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.getSpecList}},[t._v("搜索")]),t._v(" "),s("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"spec",label:"规格",align:"center"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-checkbox",{attrs:{label:"选择产品",value:e.id},on:{change:function(s){return t.selectPro(s,e.row)}},model:{value:e.row.checked,callback:function(s){t.$set(e.row,"checked",s)},expression:"scope.row.checked"}})]}}])})],1),t._v(" "),s("div",{staticClass:"set-pro-num"},[s("span",{staticStyle:{"font-size":"14px"}},[t._v("选择产品数量")]),t._v(" "),s("el-input-number",{staticClass:"my-inp",attrs:{min:1,label:"请输入产品数量"},model:{value:t.productNum,callback:function(e){t.productNum=e},expression:"productNum"}}),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.setNum}},[t._v("确认")]),t._v(" "),s("el-button",[t._v("取消")])],1),t._v(" "),t._l(t.selectedPro,function(e,i){return s("div",{key:i,staticStyle:{"margin-bottom":"10px"}},[s("table",{staticClass:"selected-product"},[0==t.selectedPro.length?s("tr",{staticStyle:{color:"#aaa"}},[s("td",[t._v("请选择产品")])]):t._e(),t._v(" "),t._l(e.value,function(c,a){return s("tr",{key:a},[0==a?s("td",{staticStyle:{padding:"0 10px"},attrs:{rowspan:e.value.length}},[t._v(t._s(i+1))]):t._e(),t._v(" "),s("td",[t._v(t._s((c.name||"")+(c.spec||"")))]),t._v(" "),s("td",[t._v("产品ID："+t._s(c.prodCode))]),t._v(" "),s("td",{staticStyle:{"min-width":"100px"}},[t._v("x1")]),t._v(" "),s("td",{staticStyle:{"min-width":"80px",cursor:"pointer",color:"#33b4ff"},on:{click:function(e){t.delselectedPro(i,a)}}},[t._v("删除")])])})],2)])}),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提交")]),t._v(" "),s("el-button",[t._v("取消")])],1)],2)],1)},staticRenderFns:[]};var d=s("VU/8")(r,n,!1,function(t){s("JspH")},"data-v-f82be5bc",null);e.default=d.exports},JspH:function(t,e){}});