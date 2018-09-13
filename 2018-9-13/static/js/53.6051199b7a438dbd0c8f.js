webpackJsonp([53],{S6WF:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("FMx0"),i=(a("0xDb"),a("GVVA")),o={components:{vBreadcrumb:e.a},data:function(){return{nav:["拼店店铺管理","店铺管理","店铺详情"],shopId:"",avatar:"",detail:{}}},activated:function(){this.shopId=this.$route.query.shopInfoId||sessionStorage.getItem("shopInfoId"),this.getInfo()},methods:{getInfo:function(){var s=this,t={id:this.shopId};i.a.getStoreDetail(t).then(function(t){s.detail=t.data}).catch(function(s){console.log(s)})},showShopLeader:function(s){localStorage.setItem("memberDetail",s),this.$router.push({path:"/memberDetail",query:{id:s}})},shopTransfer:function(){},shareBoneMsg:function(){sessionStorage.setItem("recruitShopId",this.shopId),sessionStorage.setItem("groupMoney",this.detail.groupMoney),this.$router.push({name:"shareBonusInfo",query:{recruitShopId:this.shopId,groupMoney:this.detail.groupMoney}})},uploadSuccess:function(s){this.avatar=s.data.imageUrl},spellShopAcc:function(){sessionStorage.setItem("recruitShopId",this.shopId),this.$router.push({name:"spellShopAccount",query:{recruitShopId:this.shopId}})},memberManage:function(){sessionStorage.setItem("recruitShopId",this.shopId),sessionStorage.setItem("groupMoney",this.detail.groupMoney),this.$router.push({name:"shopMemberManage",query:{recruitShopId:this.shopId,groupMoney:this.detail.groupMoney}})},shopAnnouncement:function(){sessionStorage.setItem("recruitShopId",this.shopId),this.$router.push({name:"shopAnnouncement",query:{recruitShopId:this.shopId}})}}},p={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"shop-info"},[e("v-breadcrumb",{attrs:{nav:s.nav}}),s._v(" "),e("el-card",{attrs:{"body-style":{padding:"20px 50px"}}},[e("div",{staticClass:"shop-box",staticStyle:{height:"220px"}},[e("p",{staticClass:"shop-title"},[s._v("店铺信息")]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店铺名称："+s._s(s.detail.name))])])]),s._v(" "),e("div",{staticClass:"shop-right"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("创建时间："+s._s(s._f("formatDate")(s.detail.createTime)))])])])]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店铺ID："+s._s(s.detail.storeNumber))])])]),s._v(" "),e("div",{staticClass:"shop-right"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店铺等级："+s._s(s.detail.starName))])])])]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("保证金：￥"+s._s(s.detail.deposit||0))])])]),s._v(" "),e("div",{staticClass:"shop-right"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店铺经验："+s._s(s.detail.experience))])])])]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店长："),e("span",{staticClass:"font-href",on:{click:function(t){s.showShopLeader(s.detail.userId)}}},[s._v(s._s(s.detail.storeUserName))])]),s._v(" "),e("span",{staticClass:"inf"},[s._v("实名认证")])])]),s._v(" "),e("div",{staticClass:"shop-right"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店铺成员数："+s._s(s.detail.storeUserName?s.detail.storeUserName:0)+"/"+s._s(s.detail.maxUser))])])])]),s._v(" "),e("div",{staticClass:"avatar-wrap"},[""==s.detail.headUrl?e("img",{attrs:{src:a("odpv"),alt:""}}):e("img",{attrs:{src:s.detail.headUrl,alt:""}}),s._v(" "),e("p",{staticStyle:{"margin-top":"10px"}},[e("el-button",{attrs:{type:"primary"},on:{click:s.spellShopAcc}},[s._v("拼店账户")])],1),s._v(" "),e("p",{staticStyle:{"margin-top":"10px"}},[e("el-button",{attrs:{type:"primary"},on:{click:s.memberManage}},[s._v("成员管理")])],1),s._v(" "),e("p",{staticStyle:{"margin-top":"10px"}},[e("el-button",{attrs:{type:"primary"},on:{click:s.shopAnnouncement}},[s._v("店铺公告管理")])],1)])]),s._v(" "),e("hr",{staticStyle:{border:"none",height:"1px","background-color":"#e2e2e2"}}),s._v(" "),e("div",{staticClass:"shop-box"},[e("p",{staticClass:"shop-title"},[s._v("店铺交易记录")]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店铺拼店分红总额：￥"+s._s(s.detail.totalTradeVolume+s.detail.tradeVolume))])])])]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店铺分红次数："+s._s(s.detail.bonusCount)+"次")]),s._v(" "),e("span",{staticClass:"font-href",staticStyle:{"margin-left":"20px"},on:{click:s.shareBoneMsg}},[s._v("查看详情")])])])]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店铺分红总金额：￥"+s._s(s.detail.totalTradeVolume||0))])])])]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店长分红总金额：￥"+s._s(s.detail.bossBonus||0))])])])]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("店员分红总金额：￥"+s._s(s.detail.saleBonus||0))])])])]),s._v(" "),e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("最快拼店记录："+s._s(s._f("formatDate")(s.detail.quickBonusBeginTime))+"-"+s._s(s._f("formatDate")(s.detail.quickBonusEndTime)))])])])])]),s._v(" "),e("hr",{staticStyle:{border:"none",height:"1px","background-color":"#e2e2e2"}}),s._v(" "),e("div",{staticClass:"shop-box"},[e("div",{staticClass:"shop-wrap"},[e("div",{staticClass:"shop-left"},[e("p",{staticClass:"shop-msg"},[e("span",[s._v("拼店金额目标：￥"+s._s(s.detail.groupMoney))])])])])])])],1)},staticRenderFns:[]};var r=a("VU/8")(o,p,!1,function(s){a("k0p1")},null,null);t.default=r.exports},k0p1:function(s,t){}});