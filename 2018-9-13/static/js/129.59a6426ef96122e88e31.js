webpackJsonp([129],{PGP4:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("FMx0"),s=(e("P9l9"),e("GVVA")),n=e("xnHa"),r={components:{breadcrumb:i.a},mixins:[n.a],data:function(){return{nav:["经销商会员管理","会员管理","会员详情","实名认证"],img:[],detail:{},id:""}},activated:function(){this.id=this.$route.query.memberId||sessionStorage.getItem("memberId"),this.getUserId(),this.getDetail()},methods:{getDetail:function(){var t=this;t.img=[];var a={id:t.id};s.a.findDealerById(a).then(function(a){console.log(a),t.detail=a.data,t.img.push(a.data.frontPhoto,a.data.backPhoto)}).catch(function(t){console.log(t)})}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"realname-info"},[e("breadcrumb",{attrs:{nav:t.nav}}),t._v(" "),e("el-card",[e("div",{staticClass:"wrap"},[e("span",{staticClass:"title"},[t._v("基本信息")]),t._v(" "),e("p",[t._v("证件类型："+t._s((t.detail.drType,"身份证")))]),t._v(" "),e("p",[t._v("姓名："+t._s(t.detail.myRealName))]),t._v(" "),e("p",[t._v("身份证号："+t._s(t.detail.myCardNum))]),t._v(" "),e("span",{staticClass:"title"},[t._v("图片")]),t._v(" "),e("div",{staticClass:"info"},t._l(t.img,function(t,a){return e("div",{key:a,staticClass:"card"},[e("img",{attrs:{src:t,alt:""}})])}))])])],1)},staticRenderFns:[]};var c=e("VU/8")(r,d,!1,function(t){e("uUr3")},"data-v-46118886",null);a.default=c.exports},uUr3:function(t,a){}});