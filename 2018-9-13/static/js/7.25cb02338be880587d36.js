webpackJsonp([7],{"6mLW":function(e,t,s){"use strict";var a=s("mvHQ"),i=s.n(a),r=s("UU1J"),o=s("pT42"),n=s("OwCO"),d={components:{icon:r.a},props:["getProducts","isOnly"],data:function(){return{first:[],second:[],productList:[],firstCategoryId:"",secCategoryId:"",productId:"",firstCategoryName:"",secCategoryName:"",productName:"",loading:!1,firstClassifyTag:{},secondClassifyTag:{},productTag:{}}},watch:{getProducts:function(e){this.resetValue(),e.firstCategoryIds?(this.firstCategoryId=e.firstCategoryIds,this.firstCategoryName=e.firstCategoryNames,this.firstClassifyTag={id:this.firstCategoryId,name:this.firstCategoryName}):(this.firstCategoryId="",this.firstCategoryNames=""),e.secCategoryIds?(this.secCategoryId=e.secCategoryIds,this.secCategoryName=e.secCategoryNames,this.secondClassifyTag={id:this.secCategoryId,name:this.secCategoryName}):(this.secCategoryId="",this.secCategoryName=""),e.products?(this.productId=e.products,this.productName=e.productNames,this.productTag={id:this.productId}):this.productId="",this.getFirst(),this.isOnly&&(this.getSecond(this.firstClassifyTag,!1),this.getProductList(this.secondClassifyTag,!1))}},created:function(){this.getFirst(),this.resetValue()},methods:{resetValue:function(){this.firstClassifyTag={},this.secondClassifyTag={},this.productTag={}},getFirst:function(){var e=this;e.loading=!0,e.$axios.post(o.a,{}).then(function(t){200==t.data.code?(e.first=t.data.data,e.loading=!1):(e.$message.warning(t.data.msg),e.loading=!1)}).catch(function(t){console.log(t),e.loading=!1})},getSecond:function(e,t){var s=this;t&&(s.firstCategoryName=e.name,s.firstClassifyTag=[],s.second=[],s.productList=[],s.secondClassifyTag=[],s.productTag=[]),s.firstCategoryId=e.id;var a={fatherid:e.id};s.loading=!1,s.$axios.post(o.b,a).then(function(e){200==e.data.code?s.second=e.data.data:(s.$message.warning(e.data.msg),s.loading=!1)}).catch(function(e){console.log(e),s.loading=!1}),this.transValue()},getProductList:function(e,t){var s=this;t&&(s.productList=[],s.productTag=[],s.products=[],s.secondClassifyTag=e),s.secCategoryId=e.id;var a={page:1,pageSize:1e4,firstCategoryId:s.firstCategoryId,secCategoryId:s.secCategoryId,url:n.queryProductPageList};s.loading=!1,s.$axios.post(o.c,a).then(function(e){s.productList=e.data.data.data,s.loading=!1}).catch(function(e){console.log(e),s.loading=!1}),this.transValue()},chooseProduct:function(e){this.productTag=e,this.productName=e.name,this.productId=e.id,this.transValue()},deleteTags:function(e){1==e?(this.firstCategoryName="",this.firstClassifyTag={},this.second=[],this.productList=[],this.deleteTags(2),this.deleteTags(3)):2==e?(this.secCategoryName="",this.secondClassifyTag={},this.productList=[],this.deleteTags(3)):(this.productName="",this.productTag={})},transValue:function(){var e={firstCategoryIds:this.firstCategoryId,secCategoryIds:this.secCategoryId,products:this.productId};this.$emit("getProductIds",i()(e))}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"choose-box"},[s("div",{staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"check-area"},[s("div",{staticClass:"title"},[e._v("一级类目")]),e._v(" "),s("div",{staticClass:"data-area"},[s("el-radio-group",{model:{value:e.firstCategoryName,callback:function(t){e.firstCategoryName=t},expression:"firstCategoryName"}},e._l(e.first,function(t,a){return s("div",{key:a},[s("el-radio",{attrs:{label:t.name,value:t.id},on:{change:function(s){e.getSecond(t,!0)}}})],1)}))],1)]),e._v(" "),s("div",{staticClass:"check-area"},[s("div",{staticClass:"title"},[e._v("二级类目")]),e._v(" "),e.second.length>0?s("div",{staticClass:"data-area"},[s("el-radio-group",{model:{value:e.secCategoryName,callback:function(t){e.secCategoryName=t},expression:"secCategoryName"}},e._l(e.second,function(t,a){return s("div",{key:a},[s("el-radio",{attrs:{label:t.name,value:t.id},on:{change:function(s){e.getProductList(t,!0)}}})],1)}))],1):s("div",{staticClass:"nodata"},[e._v("\n                暂无数据~\n            ")])]),e._v(" "),s("div",{staticClass:"check-area"},[s("div",{staticClass:"title"},[e._v("产品\n                "),s("el-input",{attrs:{placeholder:"请输入产品名称或者ID进行查找","suffix-icon":"el-icon-search"}})],1),e._v(" "),e.productList.length>0?s("div",{staticClass:"data-area"},[s("el-radio-group",{model:{value:e.productName,callback:function(t){e.productName=t},expression:"productName"}},e._l(e.productList,function(t,a){return s("div",{key:a,staticClass:"product-list"},[s("el-radio",{attrs:{value:t.id,label:t.name},on:{change:function(s){e.chooseProduct(t,a)}}}),e._v(" "),s("span",{staticClass:"product-item"},[e._v("产品ID:"+e._s(t.id)+" "),s("span",{staticClass:"product-name"},[e._v(e._s(t.name))])])],1)}))],1):s("div",{staticClass:"nodata"},[e._v("\n                暂无数据~\n            ")])]),e._v(" "),s("div",{staticClass:"clearfix"}),e._v(" "),s("div",{staticStyle:{"margin-top":"10px"}},[e.firstClassifyTag.name?s("div",[e._v("\n                一级类目：\n                "),s("el-tag",{attrs:{closable:""},on:{close:function(t){e.deleteTags(1)}}},[e._v("\n                    "+e._s(e.firstClassifyTag.name)+"\n                ")])],1):e._e(),e._v(" "),e.secondClassifyTag.name?s("div",[e._v("\n                二级类目：\n                "),s("el-tag",{attrs:{closable:""},on:{close:function(t){e.deleteTags(2)}}},[e._v("\n                    "+e._s(e.secondClassifyTag.name)+"\n                ")])],1):e._e(),e._v(" "),e.productTag.id?s("div",[e._v("\n                产品ID：\n                "),s("el-tag",{attrs:{closable:""},on:{close:function(t){e.deleteTags(3)}}},[e._v("\n                    "+e._s(e.productTag.id)+"\n                ")])],1):e._e()])])])},staticRenderFns:[]};var l=s("VU/8")(d,c,!1,function(e){s("mMZf")},"data-v-d73cf900",null);t.a=l.exports},YI69:function(e,t){},gGm9:function(e,t){},mMZf:function(e,t){},pT42:function(e,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i}),s.d(t,"c",function(){return r});var a="/admin/productCategory/queryProductCategoryName",i="/admin/productCategory/queryProductCategoryFatherid",r="/admin/product/queryProductPageList"},"s/ju":function(e,t,s){"use strict";var a=s("mvHQ"),i=s.n(a),r=s("UU1J"),o=s("pT42"),n=s("OwCO"),d={components:{icon:r.a},props:["getProducts"],data:function(){return{first:[],second:[],productList:[],checkAll:!1,name:"",isIndeterminate:!1,firstChecked:[],secondChecked:[],productChecked:[],firstCategoryId:"",secCategoryId:"",firstCategoryIds:[],secCategoryIds:[],firstCategoryName:"",secCategoryName:"",firstCategoryNames:[],secCategoryNames:[],products:[],firstIndex:"",secondIndex:"",loading:!1,firstClassifyTags:[],secondClassifyTags:[],productTags:[],firstTagIds:[],secondTagIds:[],productTagIds:[],checkedList:[]}},watch:{getProducts:function(e){if(this.resetValue(),e.firstCategoryIds)for(var t in-1==e.firstCategoryIds.indexOf(",")?(this.firstTagIds=this.firstCategoryIds=[Number(e.firstCategoryIds)],this.firstCategoryNames=[e.firstCategoryNames]):(this.firstTagIds=this.firstCategoryIds=this.toNumber(e.firstCategoryIds.split(",")),this.firstCategoryNames=e.firstCategoryNames.split(",")),this.firstTagIds)this.firstClassifyTags.push({id:this.firstTagIds[t],name:this.firstCategoryNames[t]});else this.firstCategoryNames=this.firstTagIds=this.firstCategoryIds=[];if(e.secCategoryIds)for(var s in-1==e.secCategoryIds.indexOf(",")?(this.secondTagIds=this.secCategoryIds=[Number(e.secCategoryIds)],this.secCategoryNames=[e.secCategoryNames]):(this.secondTagIds=this.secCategoryIds=this.toNumber(e.secCategoryIds.split(",")),this.secCategoryNames=e.secCategoryNames.split(",")),this.secondTagIds)this.secondClassifyTags.push({id:this.secondTagIds[s],name:this.secCategoryNames[s]});else this.secCategoryNames=this.secondTagIds=this.secCategoryIds=[];if(e.products)for(var a in-1==e.products.indexOf(",")?this.productTagIds=this.products=[Number(e.products)]:this.productTagIds=this.products=this.toNumber(e.products.split(",")),this.productTagIds)this.productTags.push({id:this.productTagIds[a]});else this.productTags=this.productTagIds=this.products=[];this.getFirst()}},created:function(){this.resetValue(),this.getFirst()},methods:{resetValue:function(){this.firstCategoryIds=[],this.secCategoryNames=[],this.products=[],this.firstClassifyTags=[],this.secondClassifyTags=[],this.productTags=[],this.firstTagIds=[],this.secondTagIds=[],this.productTagIds=[],this.checkedList=[],this.checkAll=!1},getFirst:function(){var e=this;e.loading=!0,e.$axios.post(o.a,{}).then(function(t){200==t.data.code?(e.first=t.data.data,t.data.data.forEach(function(t,s){-1!=e.firstTagIds.indexOf(t.id)?e.firstChecked[s]=!0:e.firstChecked[s]=!1}),e.loading=!1,e.isFirstAllCheck()):(e.$message.warning(t.data.msg),e.loading=!1)}).catch(function(t){console.log(t),e.loading=!1})},handleCheckAllChange:function(){for(var e in this.firstChecked)this.firstChecked[e]=this.checkAll;this.isFirstAllCheck();var t=this;this.checkAll?t.first.forEach(function(e,s){t.addTags(1,e),t.firstCategoryIds.push(e.id)}):(t.first.forEach(function(e,s){t.deleteTags(1,e,"false")}),t.firstCategoryIds=[]),this.transValue()},isFirstAllCheck:function(){var e=0;for(var t in this.firstChecked)this.firstChecked[t]&&e++;this.isIndeterminate=e>0&&this.firstChecked.length>e,0==e&&(this.checkAll=!1),e==this.firstChecked.length?this.checkAll=!0:this.checkAll=!1,this.transValue()},isFirstSecondCheck:function(e){var t=this,s=1==e?this.secondChecked:this.productChecked,a=1==e?this.firstChecked:this.secondChecked,i=1==e?this.firstIndex:this.secondIndex,r=1==e?this.first:this.second,o=1==e?this.second:this.productList,n=0;for(var d in s)s[d]&&n++;a[i]=s.length==n,a[i]?(o.forEach(function(s,a){t.deleteTags(parseInt(e+1),s,"false")}),this.addTags(e,r[i])):(this.deleteTags(e,r[i],"false"),o.forEach(function(a,i){s[i]&&t.addTags(parseInt(e+1),a)})),1==e&&this.isFirstAllCheck(),2==e&&this.isFirstSecondCheck(1),this.transValue()},getSecond:function(e,t){var s=this;s.firstCategoryName=e.name,s.firstChecked[t]?(s.addTags(1,e),s.changePreValues(e,"add",1),s.second.forEach(function(e,t){s.deleteTags(2,e,"false")}),s.deleteProductTags(e)):(s.deleteTags(1,e,"false"),s.changePreValues(e,"delete",1));var a=[];if(s.checkedList.forEach(function(e,t){a.push(e.id)}),-1==a.indexOf(e.id)&&s.checkedList.push({id:e.id,productIds:[]}),s.isFirstAllCheck(),s.productList=[],s.secCategoryId="",s.firstCategoryId!=e.id){s.second=[],s.secondChecked=[],s.firstIndex=t,s.firstCategoryId=e.id;var i={fatherid:e.id};s.loading=!1,s.$axios.post(o.b,i).then(function(e){200==e.data.code?(s.second=e.data.data,e.data.data.forEach(function(e,a){-1!=s.secondTagIds.indexOf(e.id)||s.firstChecked[t]?s.secondChecked[a]=!0:s.secondChecked[a]=!1,s.loading=!1})):(s.$message.warning(e.data.msg),s.loading=!1)}).catch(function(e){console.log(e),s.loading=!1})}else s.changeNextValues(1,t)},getProductList:function(e,t){var s=this;if(s.secondChecked[t]?(s.secCategoryName=e.name,s.addTags(2,e),s.changePreValues(e,"add",2),s.productList.forEach(function(e,t){s.deleteTags(3,e,"false")})):(s.deleteTags(2,e,"false"),s.changePreValues(e,"delete",2)),s.isFirstSecondCheck(1),s.secCategoryId!=e.id){s.productList=[],s.productChecked=[],s.products=[],s.secondIndex=t,s.secCategoryId=e.id;var a={page:1,pageSize:1e4,firstCategoryId:s.firstCategoryId,secCategoryId:s.secCategoryId,url:n.queryProductPageList};s.loading=!1,s.$axios.post(o.c,a).then(function(e){s.productList=e.data.data.data,e.data.data.data.forEach(function(e,a){-1!=s.productTagIds.indexOf(e.id)||s.secondChecked[t]?s.productChecked[a]=!0:s.productChecked[a]=!1}),s.loading=!1}).catch(function(e){console.log(e),s.loading=!1})}else s.changeNextValues(2,t)},chooseProduct:function(e,t){if(this.productChecked[t])this.addTags(3,e),-1==this.products.indexOf(e.id)&&this.products.push(e.id);else if(this.deleteTags(3,e,"false"),-1!=this.products.indexOf(e.id))for(var s in this.products)this.products[s]==e.id&&this.products.splice(s,1);var a=this;a.checkedList.forEach(function(s,i){if(s.id==a.firstCategoryId)if(a.productChecked[t])s.productIds.push(e.id);else for(var r in s.productIds)e.id==s.productIds[r]&&s.productIds.splice(r,1)}),this.isFirstSecondCheck(2),this.transValue()},deleteProductTags:function(e){var t=this;t.checkedList.forEach(function(s,a){if(s.id==e.id)for(var i in t.productTagIds){var r=t.productTagIds[i];-1!=s.productIds.indexOf(r)&&(t.productTagIds.splice(i,1),t.productTags.splice(i,1),t.productTagIds.length&&t.deleteProductTags(e))}})},changePreValues:function(e,t,s){var a=1==s?this.firstCategoryIds:this.secCategoryIds,i=1==s?this.firstCategoryNames:this.secCategoryNames;if("add"==t)-1==a.indexOf(e.id)&&(a.push(e.id),i.push(e.name));else for(var r in a)e.id==a[r]&&(a.splice(r,1),i.splice(r,1));this.transValue()},changeNextValues:function(e,t){var s=1==e?this.firstChecked:this.secondChecked,a=1==e?this.secondChecked:this.productChecked,i=this.productChecked;for(var r in a)a[r]=s[t];if(1==e)for(var o in i)i[o]=!1;this.transValue()},addTags:function(e,t){var s=1==e?this.firstClassifyTags:2==e?this.secondClassifyTags:this.productTags,a=1==e?this.firstTagIds:2==e?this.secondTagIds:this.productTagIds,i=2==e?this.firstCategoryId:this.secCategoryId,r=2==e?this.secondTagIds:this.productTagIds;-1==a.indexOf(t.id)&&(1!=e?-1==r.indexOf(i)&&(s.push(t),a.push(t.id)):(s.push(t),a.push(t.id)))},deleteTags:function(e,t,s){var a=[],i=1==e?this.firstTagIds:2==e?this.secondTagIds:this.productTagIds,r=1==e?this.firstClassifyTags:2==e?this.secondClassifyTags:this.productTags,o=1==e?this.first:2==e?this.second:this.productList,n=1==e?this.firstChecked:2==e?this.secondChecked:this.productChecked,d=1==e?this.firstCategoryIds:2==e?this.secondTagIds:this.productIds;for(var c in i)t.id==i[c]&&(r.splice(c,1),i.splice(c,1));if("true"==s){for(var l in o.forEach(function(e,t){a.push(e.id)}),a)t.id==a[l]&&(n[l]=!1,this.$set(n,l,n[l]),3!=e&&(this.changeNextValues(e,l),1==e&&this.isFirstAllCheck()));for(var u in d)d[u]==t.id&&d.splice(u,1);this.transValue()}},transValue:function(){var e={firstCategoryIds:this.firstCategoryIds,secCategoryIds:this.secCategoryIds,products:this.products,checkAll:this.checkAll};this.$emit("getProductIds",i()(e))},toNumber:function(e){var t=[];for(var s in e)t.push(Number(e[s]));return t}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"choose-box"},[s("div",{staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"check-area"},[s("div",{staticClass:"title"},[e._v("一级类目")]),e._v(" "),s("div",{staticClass:"data-area"},[s("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[s("span",[e._v("全品类")])]),e._v(" "),e._l(e.first,function(t,a){return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],key:a},[s("el-checkbox",{attrs:{value:t.id},on:{change:function(s){e.getSecond(t,a)}},model:{value:e.firstChecked[a],callback:function(t){e.$set(e.firstChecked,a,t)},expression:"firstChecked[index]"}}),e._v(" "),s("span",{staticClass:"expand-btn",on:{click:function(s){e.getSecond(t,a)}}},[e._v(e._s(t.name))])],1)})],2)]),e._v(" "),s("div",{staticClass:"check-area"},[s("div",{staticClass:"title"},[e._v("二级类目")]),e._v(" "),e.second.length>0?s("div",{staticClass:"data-area"},e._l(e.second,function(t,a){return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],key:a},[s("el-checkbox",{attrs:{value:t.id},on:{change:function(s){e.getProductList(t,a)}},model:{value:e.secondChecked[a],callback:function(t){e.$set(e.secondChecked,a,t)},expression:"secondChecked[index]"}}),e._v(" "),s("span",{staticClass:"expand-btn",on:{click:function(s){e.getProductList(t,a)}}},[e._v(e._s(t.name))])],1)})):s("div",{staticClass:"nodata"},[e._v("\n                暂无数据~\n            ")])]),e._v(" "),s("div",{staticClass:"check-area"},[s("div",{staticClass:"title"},[e._v("产品\n                "),s("el-input",{attrs:{placeholder:"请输入产品名称或者ID进行查找","suffix-icon":"el-icon-search"}})],1),e._v(" "),e.productList.length>0?s("div",{staticClass:"data-area"},e._l(e.productList,function(t,a){return s("div",{key:a},[s("el-checkbox",{attrs:{label:t.name,value:t.id},on:{change:function(s){e.chooseProduct(t,a)}},model:{value:e.productChecked[a],callback:function(t){e.$set(e.productChecked,a,t)},expression:"productChecked[index]"}},[e._v("\n                        产品ID:"+e._s(t.id)+" "),s("span",{staticClass:"product-name"},[e._v(e._s(t.name))])])],1)})):s("div",{staticClass:"nodata"},[e._v("\n                暂无数据~\n            ")])]),e._v(" "),s("div",{staticClass:"clearfix"}),e._v(" "),s("div",{staticStyle:{"margin-top":"10px"}},[e.firstClassifyTags.length?s("div",[e._v("\n                一级类目：\n                "),e._l(e.firstClassifyTags,function(t,a){return s("el-tag",{key:a,attrs:{closable:""},on:{close:function(s){e.deleteTags(1,t,"true")}}},[e._v("\n                    "+e._s(t.name)+"\n                ")])})],2):e._e(),e._v(" "),e.secondClassifyTags.length?s("div",[e._v("\n                二级类目：\n                "),e._l(e.secondClassifyTags,function(t,a){return s("el-tag",{key:a,attrs:{closable:""},on:{close:function(s){e.deleteTags(2,t,"true")}}},[e._v("\n                    "+e._s(t.name)+"\n                ")])})],2):e._e(),e._v(" "),e.productTags.length?s("div",[e._v("\n                产品ID：\n                "),e._l(e.productTags,function(t,a){return s("el-tag",{key:a,attrs:{closable:""},on:{close:function(s){e.deleteTags(3,t,"true")}}},[e._v("\n                    "+e._s(t.id)+"\n                ")])})],2):e._e()])])])},staticRenderFns:[]};var l=s("VU/8")(d,c,!1,function(e){s("gGm9")},"data-v-0347c596",null);t.a=l.exports},vCsu:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("FMx0"),i=s("s/ju"),r=s("6mLW"),o=s("UU1J"),n=s("OwCO"),d=s("0xDb"),c=s.n(d),l=s("GVVA"),u={components:{vBreadcrumb:a.a,vOnlychoose:r.a,icon:o.a,vMultichoose:i.a},data:function(){return{nav:["运营管理","优惠券设置","编辑优惠券"],checkAll:!1,checkedUsers:[],users:[],isIndeterminate:!1,form:{name:"",type:"DJ",value:"",discountCouponTemplateId:"",totalNumber:"",maxDealerGetNumber:"",remark:""},typeArr:[{name:"满减券(商品满额可用)",type:"MJ"},{name:"抵价券(商品直接抵价)",type:"DJ"},{name:"折扣券(打折百分比券)",type:"ZK"},{name:"抵扣券",type:"DK"}],discountArr:[{name:"1折",type:10},{name:"2折",type:20},{name:"3折",type:30},{name:"4折",type:40},{name:"5折",type:50},{name:"6折",type:60},{name:"7折",type:70},{name:"8折",type:80},{name:"9折",type:90}],tempArr:[],isChooseBrand:!1,expirationReminder:"",data:{totalNumber:"",maxDealerGetNumber:""},totalNumber:!1,maxDealerGetNumber:!1,productList:[],day:"",monthOrWeek:"",type:"3",isDay:!1,tipInf:"月",useConditions:"",btnLoading:!1,getProducts:{},categoryType:0,isOnly:!1}},activated:function(){this.checkedUsers=[],this.isOnly=!1,c.a.cleanFormData(this.form),this.getAllDiscountCouponTemplate(),this.id=this.$route.query.couponId||sessionStorage.getItem("couponId"),this.getDetail()},methods:{getDetail:function(){var e=this,t={id:this.id,url:n.getDiscountCouponPageById};l.a.getDiscountCouponPageById(t).then(function(t){var s=t.data.data;e.form.name=s.name,e.form.type=s.type,"DK"==e.form.type&&(e.isOnly=!0),e.form.value=s.value,e.form.discountCouponTemplateId=s.discountCouponTemplateId,e.form.remark=s.remark,e.categoryType=t.data.data.categoryType,e.useConditions=s.useConditions,e.getProducts={firstCategoryIds:s.firstCategoryIds,secCategoryIds:s.secCategoryIds,products:s.productIds,firstCategoryNames:s.firstCategoryNames,secCategoryNames:s.secCategoryNames,productNames:s.productNames},1==s.hadPeriod?(e.isDay=!0,e.monthOrWeek=s.period,e.type=s.periodType,e.tipInf=3==e.type?"月":"周"):(e.isDay=!1,e.day=s.period),e.expirationReminder=1==s.expirationReminder,e.form.dealerLevelIds=s.dealerLevelIds,e.showLevel(s.dealerLevelIds),-1==s.maxDealerGetNumber?e.maxDealerGetNumber=!0:e.form.maxDealerGetNumber=s.maxDealerGetNumber,-1==s.totalNumber?e.totalNumber=!0:e.form.totalNumber=s.totalNumber;var a={firstCategoryIds:s.firstCategoryIds,secCategoryIds:s.secCategoryIds,productIds:s.productIds};e.productIds=a}).catch(function(e){console.log(e)})},showLevel:function(e){var t=this;this.users=[],this.checkedUsers=[],l.a.getDealerLevelList({}).then(function(s){var a=0,i=e.split(",");if(200==resData.data.code){for(var r in resData.data.data){var o=resData.data.data[r].name;for(var n in-1==t.users.indexOf(o)&&t.users.push(resData.data.data[r]),i)i[n]==resData.data.data[r].id&&(a++,t.checkedUsers.push(resData.data.data[r]))}a==resData.data.data.length?(t.checkAll=!0,t.isIndeterminate=!1):t.isIndeterminate=!0}else t.$message.warning(s.data.msg)}).catch(function(e){console.log(e)})},getAllDiscountCouponTemplate:function(){var e=this;l.a.getAllDiscountCouponTemplate({}).then(function(t){e.tempArr=t.data.data}).catch(function(e){console.log(e)})},changeType:function(){this.tipInf=3==this.type?"月":"周"},handleCheckAllChange:function(e){if(this.checkedUsers=e?this.users:[],this.isIndeterminate=!1,e){for(var t="",s=0;s<this.users.length;s++)t+=this.users[s].id+",";this.form.dealerLevelIds=t.slice(0,-1)}else this.form.dealerLevelIds=""},handleCheckedUsersChange:function(e){var t=e.length,s="";for(var a in this.users)for(var i in e)this.users[a].id==e[i].id&&(s+=this.users[a].id+",");this.form.dealerLevelIds=s.slice(0,-1),this.checkAll=t===this.users.length,this.isIndeterminate=t>0&&t<this.users.length},getProductIds:function(e){e&&(this.productList=JSON.parse(e))},submitForm:function(){var e=this,t=this.form;if(t.name)if(t.type)if(t.value)if(t.discountCouponTemplateId)if(this.useConditions?t.useConditions=this.useConditions:t.useConditions=0,t.id=this.id,this.isDay?(t.periodType=this.type,t.period=this.monthOrWeek,t.hadPeriod=1):(t.periodType=1,t.period=this.day,t.hadPeriod=0),t.period){if("DK"==this.form.type){if(!e.productList.firstCategoryIds||!e.productList.secCategoryIds||!e.productList.products)return void this.$message.warning("请选择可用品类!");e.productList.firstCategoryIds instanceof Array?(t.firstCategoryIds=e.productList.firstCategoryIds.join(","),t.secCategoryIds=e.productList.secCategoryIds.join(","),t.productIds=e.productList.products.join(",")):(t.firstCategoryIds=e.productList.firstCategoryIds,t.secCategoryIds=e.productList.secCategoryIds,t.productIds=e.productList.products),t.categoryType=5}else{var s=[],a=[],i=[];if(s=e.productList.firstCategoryIds,a=e.productList.secCategoryIds,i=e.productList.products,0==e.productList.length)return void this.$message.warning("请选择可用品类!");if(0==s.length&&0==a.length&&0==i.length)return void this.$message.warning("请选择可用品类!");e.productList.checkAll?t.categoryType=1:0==s.length&&0==a.length&&1==i.length?t.categoryType=5:0==s.length&&0==a.length&&i.length>1?t.categoryType=4:(1==s.length&&0==a.length||0==s.length&&1==a.length)&&0==i.length?t.categoryType=3:t.categoryType=2,t.firstCategoryIds=s.length?s.join(","):"",t.secCategoryIds=a.length?a.join(","):"",t.productIds=i.length?i.join(","):""}if(this.checkedUsers){if(e.totalNumber)t.totalNumber=-1;else if(!t.totalNumber)return void this.$message.warning("请输入发放数量!");if(e.maxDealerGetNumber)t.maxDealerGetNumber=-1;else if(!t.totalNumber)return void this.$message.warning("请输入每人限额!");e.expirationReminder?t.expirationReminder=1:t.expirationReminder=0,this.useConditions?t.useConditions=this.useConditions:t.useConditions=0,t.url=n.updateDiscountCouponById,e.btnLoading=!0,l.a.updateDiscountCouponById(t).then(function(t){e.$message.warning(t.data.msg),e.$router.push("/discountCoupon"),e.btnLoading=!1}).catch(function(t){console.log(t),e.btnLoading=!1})}else this.$message.warning("请选择可使用用户层级!")}else this.$message.warning("请输入可用周期数据!");else this.$message.warning("请选择券模板!");else"ZK"!=t.type?this.$message.warning("请输入券值!"):this.$message.warning("请选中折扣值!");else this.$message.warning("请选择优惠券类型!");else this.$message.warning("请输入优惠券名称!")},cancel:function(){this.$router.push("/discountCoupon")}}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-coupon"},[s("v-breadcrumb",{attrs:{nav:e.nav}}),e._v(" "),s("el-card",{attrs:{"body-style":{padding:"20px 45px",color:"#666"}}},[s("div",{staticClass:"pro-title"},[e._v("编辑优惠券")]),e._v(" "),s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"券名称"}},[s("el-input",{attrs:{placeholder:"请输入优惠券名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"券类型"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeArr,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.type}})}))],1),e._v(" "),s("div",{staticClass:"line"}),e._v(" "),"ZK"!=e.form.type?s("el-form-item",{attrs:{label:"券值"}},[s("el-input",{attrs:{placeholder:"请输入券值"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}}),e._v("\n                元\n            ")],1):s("el-form-item",{attrs:{label:"折扣"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}},e._l(e.discountArr,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.type}})}))],1),e._v(" "),s("el-form-item",{attrs:{label:"券模板"}},[s("el-select",{attrs:{placeholder:"请选择券模板"},model:{value:e.form.discountCouponTemplateId,callback:function(t){e.$set(e.form,"discountCouponTemplateId",t)},expression:"form.discountCouponTemplateId"}},e._l(e.tempArr,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),"DK"!=e.form.type&&"DJ"!=e.form.type?s("el-form-item",{staticStyle:{"margin-top":"30px"},attrs:{label:"使用限制"}},[e._v("\n                满\n                "),s("el-input",{attrs:{placeholder:"请输入金额"},model:{value:e.useConditions,callback:function(t){e.useConditions=t},expression:"useConditions"}}),e._v("\n                元可用\n            ")],1):e._e(),e._v(" "),s("el-form-item",{attrs:{label:"可用周期"}},[s("div",{staticStyle:{display:"inline-block",margin:"0 50px 10px 0"}},[e._v("领到券当日开始\n                    "),s("el-input",{staticClass:"sml-inp",attrs:{disabled:e.isDay},model:{value:e.day,callback:function(t){e.day=t},expression:"day"}}),e._v("\n                    天内有效\n                ")],1),e._v(" "),s("el-checkbox",{model:{value:e.isDay,callback:function(t){e.isDay=t},expression:"isDay"}},[e._v("设置为礼包周期优惠券")]),e._v(" "),s("div",[e._v("领到券当天后\n                    "),s("el-input",{staticClass:"sml-inp",attrs:{disabled:!e.isDay},model:{value:e.monthOrWeek,callback:function(t){e.monthOrWeek=t},expression:"monthOrWeek"}}),e._v(" "),s("el-select",{staticClass:"sml-inp",attrs:{disabled:!e.isDay},on:{change:e.changeType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[s("el-option",{attrs:{label:"月",value:"3"}},[e._v("月")]),e._v(" "),s("el-option",{attrs:{label:"周",value:"2"}},[e._v("周")])],1),e._v("\n                    开始生效，次"+e._s(e.tipInf)+"当天生效\n                    "),s("div",[e._v("例:领券日期为当月5日，如1月后生效，则次月5日生效，再次月的5日凌晨失效")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"到期提醒"}},[s("el-checkbox",{model:{value:e.expirationReminder,callback:function(t){e.expirationReminder=t},expression:"expirationReminder"}},[e._v("到期前4天提醒一次")])],1),e._v(" "),s("el-form-item",{attrs:{label:"可用品类"}},[s("v-onlychoose",{directives:[{name:"show",rawName:"v-show",value:"DK"==e.form.type,expression:"form.type=='DK'"}],attrs:{getProducts:e.getProducts,isOnly:e.isOnly},on:{getProductIds:e.getProductIds}}),e._v(" "),s("v-multichoose",{directives:[{name:"show",rawName:"v-show",value:"DK"!=e.form.type,expression:"form.type!='DK'"}],attrs:{getProducts:e.getProducts,isOnly:e.isOnly},on:{getProductIds:e.getProductIds}})],1),e._v(" "),s("el-form-item",{staticClass:"role-choose",attrs:{label:"可使用用户层级"}},[s("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("\n                    全部用户\n                ")]),e._v(" "),s("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),s("el-checkbox-group",{on:{change:e.handleCheckedUsersChange},model:{value:e.checkedUsers,callback:function(t){e.checkedUsers=t},expression:"checkedUsers"}},e._l(e.users,function(t,a){return s("el-checkbox",{key:a,attrs:{label:t}},[e._v(e._s(t.name)+"\n                    ")])}))],1),e._v(" "),s("el-form-item",{attrs:{label:"发放数量"}},[s("el-input",{staticClass:"mid-inp",attrs:{disabled:e.totalNumber},model:{value:e.form.totalNumber,callback:function(t){e.$set(e.form,"totalNumber",t)},expression:"form.totalNumber"}}),e._v("\n                张\n                "),s("span",[s("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:e.totalNumber,callback:function(t){e.totalNumber=t},expression:"totalNumber"}},[e._v("不限制")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"每人限额"}},[s("el-input",{staticClass:"mid-inp",attrs:{disabled:e.maxDealerGetNumber},model:{value:e.form.maxDealerGetNumber,callback:function(t){e.$set(e.form,"maxDealerGetNumber",t)},expression:"form.maxDealerGetNumber"}}),e._v("\n                张\n                "),s("span",[s("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:e.maxDealerGetNumber,callback:function(t){e.maxDealerGetNumber=t},expression:"maxDealerGetNumber"}},[e._v("不限制")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"优惠券说明"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入说明"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.submitForm}},[e._v("提交")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var g=s("VU/8")(u,h,!1,function(e){s("YI69")},null,null);t.default=g.exports}});