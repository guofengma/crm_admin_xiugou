webpackJsonp([116],{A9Z2:function(t,i){},OkF4:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("FMx0"),s=a("OwCO"),n=(a("0xDb"),a("PJh5"),a("GVVA")),d={components:{vBreadcrumb:e.a},data:function(){return{nav:["运营管理","优惠券设置","优惠券管理","优惠券详情"],id:"",detail:{}}},activated:function(){this.id=this.$route.query.couponDetail||sessionStorage.getItem("couponDetail"),this.getDetail()},methods:{getDetail:function(){var t=this,i={id:this.id,url:s.getDiscountCouponPageById};n.a.getDiscountCouponPageById(i).then(function(i){t.detail=i.data.data}).catch(function(t){console.log(t)})}}},o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"coupon-detail"},[a("v-breadcrumb",{attrs:{nav:t.nav}}),t._v(" "),a("el-card",[a("div",{staticClass:"item"},[a("div",{staticClass:"main"},[a("div",{staticClass:"limit"},[a("div",{staticClass:"money"},[t._v("¥"+t._s(t.detail.value))]),t._v(" "),a("div",{staticClass:"detail"},[a("p",[t._v("优惠券")]),t._v(" "),a("p",[t._v("订单满"+t._s(t.detail.useConditions)+"元可用")])])]),t._v(" "),a("div",{staticClass:"time"},[t._v("可用周期：领券日 - 次月领券当天失效")])]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"tip"},[a("div",[t._v("优惠券说明：")]),t._v(" "),a("div",[t._v("优惠券仅限于但商品购物使用，只有满足消费"+t._s(t.detail.useConditions)+"元才可使用")])])])])])],1)},staticRenderFns:[]};var c=a("VU/8")(d,o,!1,function(t){a("A9Z2")},"data-v-31a68f7c",null);i.default=c.exports}});