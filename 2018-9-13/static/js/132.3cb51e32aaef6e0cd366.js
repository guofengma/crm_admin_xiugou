webpackJsonp([132],{"/24t":function(t,a){},HFlr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var c=s("FMx0"),n=s("UU1J"),i=s("P9l9"),e=s("19nM"),o={components:{icon:n.a,vBreadcrumb:c.a},data:function(){return{id:"",accountInfo:""}},activated:function(){this.id=this.$route.query.memberId||JSON.parse(sessionStorage.getItem("memberId")),this.getQueryDealerAccount(this.id)},methods:{btnClicked:function(t){var a={};switch(a.memberId=this.id,a.nickname=this.accountInfo.nickname,sessionStorage.setItem("memberId",this.id),t){case 1:this.$router.push({path:"/cashAccountBalance",query:{memberId:this.id}});break;case 2:this.$router.push({path:"/tokenAccountBalance",query:{memberId:this.id}});break;case 3:sessionStorage.setItem("memberInfo",a),this.$router.push({path:"/shareAccountBalance",query:{memberInfo:a}});break;case 4:this.$router.push({path:"/integralAccountBalance",query:{memberId:this.id}});break;case 5:this.$router.push({path:"/MemberCard",query:{memberId:this.id}});break;case 6:sessionStorage.setItem("memberInfo",a),this.$router.push({path:"/withDrawAccount",query:{memberInfo:a}})}},getQueryDealerAccount:function(t){var a=this,s={url:e.queryDealerAccount,id:t};this.$axios.post(i.queryDealerAccount,s).then(function(t){200==t.data.code?a.accountInfo=t.data.data:a.$message.warning(t.data.msg)}).catch(function(t){console.log(t)})}}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("v-breadcrumb",{attrs:{nav:["经销商会员管理","会员管理","会员详情","TA的账户"]}}),t._v(" "),s("div",{staticClass:"accountInfod"},[s("ul",{staticClass:"card-box"},[s("li",{staticClass:"Account"},[s("div",{staticClass:"card-title"},[s("icon",{staticClass:"ico",attrs:{ico:"icon-ffffff"}}),t._v("\n                    现金账户 （元）\n                ")],1),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-amout"},[t._v("\n                        可提现："+t._s(t.accountInfo.available_balance)+"\n                    ")]),t._v(" "),s("div",{staticClass:"frozen"},[t._v("\n                        冻结中："+t._s(t.accountInfo.blocked_balances)+"\n                    ")])]),t._v(" "),s("span",{staticClass:"spanBtn",on:{click:function(a){t.btnClicked(1)}}},[t._v("收支明细")])]),t._v(" "),s("li",{staticClass:"userToken"},[s("div",{staticClass:"card-title"},[s("icon",{staticClass:"ico",attrs:{ico:"icon-jinbiqian"}}),t._v("\n                    代币账户（币）\n                ")],1),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-amout"},[t._v("\n                        代币数："+t._s(t.accountInfo.token_coin)+"\n                    ")]),t._v(" "),s("div",{staticClass:"frozen"},[t._v("\n                        冻结中："+t._s(t.accountInfo.blocked_coin)+"\n                    ")])]),t._v(" "),s("span",{staticClass:"spanBtn",on:{click:function(a){t.btnClicked(2)}}},[t._v("收支明细")])]),t._v(" "),s("li",{staticClass:"UserBonus"},[s("div",{staticClass:"card-title"},[s("icon",{staticClass:"ico",attrs:{ico:"icon-xianjindai"}}),t._v("\n                    收益账户（元）\n                ")],1),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-amout"},[t._v("\n                        收益数："+t._s(t.accountInfo.bonus_point||0)+"\n                    ")])]),t._v(" "),s("span",{staticClass:"spanBtn",on:{click:function(a){t.btnClicked(3)}}},[t._v("收支明细")])]),t._v(" "),s("li",{staticClass:"userIntegral"},[s("div",{staticClass:"card-title"},[s("icon",{staticClass:"ico",attrs:{ico:"icon-youhuiquan"}}),t._v("\n                    积分账户（分）\n                ")],1),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-amout"},[t._v("\n                        积分数："+t._s(t.accountInfo.user_score)+"\n                    ")])]),t._v(" "),s("span",{staticClass:"spanBtn",on:{click:function(a){t.btnClicked(4)}}},[t._v("收支明细")])]),t._v(" "),s("li",{staticClass:"userCard"},[s("div",{staticClass:"card-title"},[s("icon",{staticClass:"ico",attrs:{ico:"icon-tubiaolunkuo-"}}),t._v("\n                    银行卡（张）\n                ")],1),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-amout"},[t._v("\n                        已绑定银行卡："+t._s(t.accountInfo.count)+"\n                    ")])]),t._v(" "),s("span",{staticClass:"spanBtn",on:{click:function(a){t.btnClicked(5)}}},[t._v("查看详情")])]),t._v(" "),s("li",{staticClass:"withdrawAccount"},[s("div",{staticClass:"card-title"},[s("icon",{staticClass:"ico",attrs:{ico:"icon-tixian1"}}),t._v("\n                    待提现账户（元）\n                ")],1),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-amout"},[t._v("\n                        可提现："+t._s(t.accountInfo.count||0)+"\n                    ")])]),t._v(" "),s("span",{staticClass:"spanBtn",on:{click:function(a){t.btnClicked(6)}}},[t._v("查看详情")])])])])],1)},staticRenderFns:[]};var l=s("VU/8")(o,r,!1,function(t){s("/24t")},"data-v-521f4332",null);a.default=l.exports}});