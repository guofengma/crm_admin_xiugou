webpackJsonp([136],{"3lFI":function(t,e){},"6EK4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("UU1J"),n=i("FMx0"),s=i("P9l9"),c=(i("19nM"),{components:{vBreadcrumb:n.a,icon:a.a},data:function(){return{codeImg:"",id:""}},activated:function(){this.id=this.$route.query.inviteLink||JSON.parse(sessionStorage.getItem("inviteLink")),this.getCode()},methods:{getCode:function(){var t=this,e={id:this.id};t.$axios.post(s.createWxQrcode,e).then(function(e){200==e.data.code?t.codeImg=e.data.data:t.$message.warning(e.data.msg)}).catch(function(e){t.loading=!1})}}}),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-breadcrumb",{attrs:{nav:["经销商会员管理","经销商加盟管理","邀请链接"]}}),t._v(" "),i("div",{staticClass:"invite-link"},[i("div",{staticClass:"box"},[i("div",{staticClass:"mask-content"},[i("el-form",[i("div",{staticClass:"title-item"},[t._v("邀请二维码：")]),t._v(" "),i("el-form-item",[i("img",{staticClass:"code-area",attrs:{src:t.codeImg,alt:""}})]),t._v(" "),i("div",{staticClass:"title-item"},[t._v("邀请链接：")]),t._v(" "),i("el-form-item",[i("el-input",{attrs:{readonly:"",placeholder:"请输入邀请链接"},model:{value:t.codeImg,callback:function(e){t.codeImg=e},expression:"codeImg"}})],1)],1)],1)])])],1)},staticRenderFns:[]};var d=i("VU/8")(c,o,!1,function(t){i("3lFI")},null,null);e.default=d.exports}});