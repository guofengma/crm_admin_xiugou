webpackJsonp([18],{"7SHl":function(t,e,a){"use strict";a.d(e,"f",function(){return d}),a.d(e,"c",function(){return i}),a.d(e,"g",function(){return n}),a.d(e,"b",function(){return r}),a.d(e,"a",function(){return u}),a.d(e,"d",function(){return s}),a.d(e,"e",function(){return c});var d="/admin/featured/queryFeaturedList",i="/admin/featured/findFeaturedById",n="/admin/featured/updateFeatured",r="/admin/featured/deleteFeatured",u="/admin/featured/addFeatured",s="/admin/product/findProductNameByProdCode",c="/admin/topic/getNameById"},FE4z:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"queryFeaturedList",function(){return d}),a.d(e,"findFeaturedById",function(){return i}),a.d(e,"updateFeatured",function(){return n}),a.d(e,"deleteFeatured",function(){return r}),a.d(e,"addFeatured",function(){return u}),a.d(e,"findProductNameByProdCode",function(){return s});var d="/admin/featured/queryFeaturedList",i="/admin/featured/findFeaturedById",n="/admin/featured/updateFeatured",r="/admin/featured/deleteFeatured",u="/admin/featured/addFeatured",s="/admin/product/findProductNameByProdCode"},TamF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=a("FMx0"),i=a("UU1J"),n=(a("7SHl"),a("0xDb"),a("FE4z"),{components:{vBreadcrumb:d.a,icon:i.a},data:function(){return{}},created:function(){},methods:{toPage:function(t){sessionStorage.getItem("pageType",t),this.$router.push({path:"/featuredManage",query:{pageType:t}})}}}),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"featured"},[a("v-breadcrumb",{attrs:{nav:["运营管理","推荐位管理"]}}),t._v(" "),a("div",{staticClass:"item",on:{click:function(e){t.toPage(1)}}},[a("div",{staticClass:"name"},[t._v("产品推荐位1")]),t._v(" "),a("div",{staticClass:"tip"},[t._v("（首页产品推荐）")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("div",{staticClass:"name"},[this._v("产品推荐位2")]),this._v(" "),e("div",{staticClass:"tip"},[this._v("（预留）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("div",{staticClass:"name"},[this._v("产品推荐位3")]),this._v(" "),e("div",{staticClass:"tip"},[this._v("（预留）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("div",{staticClass:"name"},[this._v("产品推荐位4")]),this._v(" "),e("div",{staticClass:"tip"},[this._v("（预留）")])])}]};var u=a("VU/8")(n,r,!1,function(t){a("o5iD")},"data-v-43db086a",null);e.default=u.exports},o5iD:function(t,e){}});