webpackJsonp([164],{"3qIH":function(t,e){},BQ2f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={components:{breadcrumb:a("FMx0").a},data:function(){return{breadcrumb:["授权审核管理","授权证书模板"],data:[{title:"A模板",id:"1",url:"aaa"},{title:"B模板",id:"2",url:"bbb"}]}},methods:{setStatus:function(t,e){console.log(t,e)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("breadcrumb",{attrs:{nav:t.breadcrumb}}),t._v(" "),a("el-card",t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"tpl"},[a("span",{staticClass:"tem-title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"tem-content"}),t._v(" "),a("el-button",{staticClass:"tem-btn",attrs:{type:"primary"},on:{click:function(a){t.setStatus(e.id,!0)}}},[t._v("启用")]),t._v(" "),a("el-button",{staticClass:"tem-btn",on:{click:function(a){t.setStatus(e.id,!1)}}},[t._v("停用")])],1)}))],1)},staticRenderFns:[]};var c=a("VU/8")(n,s,!1,function(t){a("3qIH")},"data-v-795d7a65",null);e.default=c.exports}});