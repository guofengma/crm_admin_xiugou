webpackJsonp([59],{FAoF:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("FMx0"),o=s("0xDb"),i=s.n(o),n=s("GVVA"),r={components:{vBreadcrumb:a.a},data:function(){return{nav:["拼店店铺管理","店铺等级设置","店铺晋升设置"],showupgradeExp:!1,showNecessaryConf:!1,showShareBonus:!1,showTotalTrans:!1,showContinTrad:!1,showContinFrequ:!1,showSingleOrder:!1,showMemberUpStand:!1,checked:[!1,!1,!1,!1,!1],form:{upgradeExp:"",upgradeCondUserNum:"",upgradeCondTotleSales:"",upgradeCondProfitCtrb:"",upgradeCondAvgActivity:"",upgradeCondBonusNum:"",upgradeBonusNumPerExp:"",upgradeTotleSalesAddPerExp:"",upgradeWeekSalesNum:"",upgradeWeekSalesNumExp:"",upgradeWeekSalesFreq:"",upgradeWeekSalesFreqExp:"",upgradeOrderPrice:"",upgradeOrderPriceExp:"",upgradeUserAddOneExp:""},shopId:"",isAjax:!1}},activated:function(){this.shopId=this.$route.query.promotionShopId||sessionStorage.getItem("promotionShopId"),console.log(this.shopId),this.getStoreStarById()},methods:{getStoreStarById:function(){var e=this,t={id:this.shopId};n.a.getStoreStarById(t).then(function(t){e.form=t.data,e.convert(e.form.upgradeCondition)}).catch(function(e){console.log(e)})},cleanData:function(){i.a.cleanFormData(this.form)},sure:function(e){var t=this,s=void 0;switch(e){case 0:s=1;break;case 1:s=8;break;case 2:s=2;break;case 3:s=3;break;case 4:s=4;break;case 5:s=5;break;case 6:s=6;break;case 7:s=7}var a=this.form;a.id=this.shopId,a.type=s;var o=!0,i=!0,r=!0,l=!0;0==e?(o=this.isEmpty(a.upgradeExp,!1),this.setIsAjax(o)):1==e?(this.isChecked(),this.checked[0]&&(o=this.isEmpty(a.upgradeCondUserNum,!0)),this.checked[1]&&(i=this.isEmpty(a.upgradeCondTotleSales,!1)),this.checked[2]&&(r=this.isEmpty(a.upgradeCondProfitCtrb,!1)),this.checked[3]&&(l=this.isEmpty(a.upgradeCondAvgActivity,!1)),this.checked[4]&&(l=this.isEmpty(a.upgradeCondBonusNum,!0)),this.setIsAjax(o&&i&&r&&l)):2==e?(a.upgradeTotleSalesAdd=1,i=this.isEmpty(a.upgradeBonusNumPerExp,!1),this.setIsAjax(i)):3==e?(i=this.isEmpty(a.upgradeTotleSalesAddPerExp,!1),this.setIsAjax(i)):4==e?(o=this.isEmpty(a.upgradeWeekSalesNum,!1),i=this.isEmpty(a.upgradeWeekSalesNumExp,!1),this.setIsAjax(o&&i)):5==e?(o=this.isEmpty(a.upgradeWeekSalesFreq,!0),i=this.isEmpty(a.upgradeWeekSalesFreqExp,!1),this.setIsAjax(o&&i)):6==e?(o=this.isEmpty(a.upgradeOrderPrice,!1),i=this.isEmpty(a.upgradeOrderPriceExp,!1),this.setIsAjax(o&&i)):7==e&&(i=this.isEmpty(a.upgradeUserAddOneExp,!1),this.setIsAjax(i)),this.isAjax&&n.a.updateStoreStar(a).then(function(e){t.$message.success("设置成功"),t.showupgradeExp=!1,t.showNecessaryConf=!1,t.showShareBonus=!1,t.showTotalTrans=!1,t.showContinTrad=!1,t.showContinFrequ=!1,t.showSingleOrder=!1,t.showMemberUpStand=!1,t.getStoreStarById()}).catch(function(e){console.log(e)})},isChecked:function(){var e=0;for(var t in this.checked)this.checked[t]&&(e+=Math.pow(2,t));this.form.upgradeCondition=e},convert:function(e){var t=[];if(e){for(var s=0;;s++){if(!(e/2>=1)){t[s]=1;break}t[s]=e%2,e=parseInt(e/2)}for(var a in t)1==t[a]?this.checked[a]=!0:this.checked[a]=!1}},isEmpty:function(e,t){if(null==e||void 0==e||""==e)return t?this.$message.warning("请输入整数!"):this.$message.warning("请输入数值!"),!1;if(t){return this.setReg(/^[1-9]*[1-9][0-9]*$/,e)}return this.setReg(/^[0-9]+([.]{1}[0-9]{1,2})?$/,e)},setReg:function(e,t){return!!e.test(t)||(this.$message.warning("请输入合法数据!"),!1)},setIsAjax:function(e){this.isAjax=!!e}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"promotion-shop"},[s("v-breadcrumb",{attrs:{nav:e.nav}}),e._v(" "),s("el-card",{attrs:{"body-style":{padding:"20px 80px",minHeight:"60vh"}}},[s("p",{staticClass:"small-title"},[e._v("基础设置")]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.showupgradeExp=!0}}},[e._v("设置升级经验值（默认值）")]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.showNecessaryConf=!0}}},[e._v("设置必要条件")]),e._v(" "),s("p",{staticClass:"small-title"},[e._v("交易纬度")]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.showShareBonus=!0}}},[e._v("分红奖励")]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.showTotalTrans=!0}}},[e._v("交易额达标奖励")]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.showContinTrad=!0}}},[e._v("连续交易额达标")]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.showContinFrequ=!0}}},[e._v("连续交易频率达标")]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.showSingleOrder=!0}}},[e._v("单笔订单交易额")]),e._v(" "),s("p",{staticClass:"small-title"},[e._v("成员纬度")]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){e.showMemberUpStand=!0}}},[e._v("人数达标奖励")])],1),e._v(" "),s("el-dialog",{attrs:{title:"所需经验值设置",visible:e.showupgradeExp,width:"30%",open:"cleanData"},on:{"update:visible":function(t){e.showupgradeExp=t}}},[s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("所需经验值设置")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeExp,callback:function(t){e.$set(e.form,"upgradeExp",t)},expression:"form.upgradeExp"}})],1),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sure(0)}}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.showupgradeExp=!1}}},[e._v("取 消")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"设置必要条件",visible:e.showNecessaryConf,width:"30%",open:"cleanData"},on:{"update:visible":function(t){e.showNecessaryConf=t}}},[s("div",{staticClass:"necessary-box"},[s("p",{staticClass:"necessary-title"},[e._v("必要条件:")]),e._v(" "),s("div",{staticClass:"dialog-nec-item"},[s("el-checkbox",{model:{value:e.checked[0],callback:function(t){e.$set(e.checked,0,t)},expression:"checked[0]"}},[s("span",{staticClass:"dialog-nec-title"},[e._v("人员数")])]),e._v(" "),s("el-input",{staticClass:"dialog-nec-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeCondUserNum,callback:function(t){e.$set(e.form,"upgradeCondUserNum",t)},expression:"form.upgradeCondUserNum"}})],1),e._v(" "),s("div",{staticClass:"dialog-nec-item"},[s("el-checkbox",{model:{value:e.checked[1],callback:function(t){e.$set(e.checked,1,t)},expression:"checked[1]"}},[s("span",{staticClass:"dialog-nec-title"},[e._v("交易总额达到")])]),e._v(" "),s("el-input",{staticClass:"dialog-nec-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeCondTotleSales,callback:function(t){e.$set(e.form,"upgradeCondTotleSales",t)},expression:"form.upgradeCondTotleSales"}})],1),e._v(" "),s("div",{staticClass:"dialog-nec-item"},[s("el-checkbox",{model:{value:e.checked[2],callback:function(t){e.$set(e.checked,2,t)},expression:"checked[2]"}},[s("span",{staticClass:"dialog-nec-title"},[e._v("利润贡献值")])]),e._v(" "),s("el-input",{staticClass:"dialog-nec-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeCondProfitCtrb,callback:function(t){e.$set(e.form,"upgradeCondProfitCtrb",t)},expression:"form.upgradeCondProfitCtrb"}})],1),e._v(" "),s("div",{staticClass:"dialog-nec-item"},[s("el-checkbox",{model:{value:e.checked[3],callback:function(t){e.$set(e.checked,3,t)},expression:"checked[3]"}},[s("span",{staticClass:"dialog-nec-title"},[e._v("平均活跃度达到")])]),e._v(" "),s("el-input",{staticClass:"dialog-nec-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeCondAvgActivity,callback:function(t){e.$set(e.form,"upgradeCondAvgActivity",t)},expression:"form.upgradeCondAvgActivity"}})],1),e._v(" "),s("div",{staticClass:"dialog-nec-item"},[s("el-checkbox",{model:{value:e.checked[4],callback:function(t){e.$set(e.checked,4,t)},expression:"checked[4]"}},[s("span",{staticClass:"dialog-nec-title"},[e._v("完成分红次数")])]),e._v(" "),s("el-input",{staticClass:"dialog-nec-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeCondBonusNum,callback:function(t){e.$set(e.form,"upgradeCondBonusNum",t)},expression:"form.upgradeCondBonusNum"}})],1)]),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sure(1)}}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.showNecessaryConf=!1}}},[e._v("取 消")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"经验值设置",visible:e.showShareBonus,width:"30%",open:"cleanData"},on:{"update:visible":function(t){e.showShareBonus=t}}},[s("p",{staticClass:"dialog-item"},[s("span",{staticStyle:{"margin-left":"30px"}},[e._v("达成分红次数1次，则获得")])]),e._v(" "),s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("获得经验值")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeBonusNumPerExp,callback:function(t){e.$set(e.form,"upgradeBonusNumPerExp",t)},expression:"form.upgradeBonusNumPerExp"}}),e._v("\n            分\n        ")],1),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sure(2)}}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.showShareBonus=!1}}},[e._v("取 消")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"经验值设置",visible:e.showTotalTrans,width:"30%",open:"cleanData"},on:{"update:visible":function(t){e.showTotalTrans=t}}},[s("p",{staticClass:"dialog-item"},[s("span",{staticStyle:{"margin-left":"30px"}},[e._v("总交易额增加1元，则增加")])]),e._v(" "),s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("获得经验值")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeTotleSalesAddPerExp,callback:function(t){e.$set(e.form,"upgradeTotleSalesAddPerExp",t)},expression:"form.upgradeTotleSalesAddPerExp"}}),e._v("\n            分\n        ")],1),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sure(3)}}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.showTotalTrans=!1}}},[e._v("取 消")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"经验值设置",visible:e.showContinTrad,width:"30%",open:"cleanData"},on:{"update:visible":function(t){e.showContinTrad=t}}},[s("p",{staticStyle:{"font-size":"16px","font-weight":"700","margin-left":"30px"}},[e._v("每周交易额达到：")]),e._v(" "),s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("交易额")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeWeekSalesNum,callback:function(t){e.$set(e.form,"upgradeWeekSalesNum",t)},expression:"form.upgradeWeekSalesNum"}}),e._v("\n            元\n        ")],1),e._v(" "),s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("获得经验值")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeWeekSalesNumExp,callback:function(t){e.$set(e.form,"upgradeWeekSalesNumExp",t)},expression:"form.upgradeWeekSalesNumExp"}}),e._v("\n            分\n        ")],1),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sure(4)}}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.showContinTrad=!1}}},[e._v("取 消")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"经验值设置",visible:e.showContinFrequ,width:"30%",open:"cleanData"},on:{"update:visible":function(t){e.showContinFrequ=t}}},[s("p",{staticStyle:{"font-size":"16px","font-weight":"700","margin-left":"30px"}},[e._v("每周交易频次达到：")]),e._v(" "),s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("交易频次")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeWeekSalesFreq,callback:function(t){e.$set(e.form,"upgradeWeekSalesFreq",t)},expression:"form.upgradeWeekSalesFreq"}}),e._v("\n            次\n        ")],1),e._v(" "),s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("获得经验值")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeWeekSalesFreqExp,callback:function(t){e.$set(e.form,"upgradeWeekSalesFreqExp",t)},expression:"form.upgradeWeekSalesFreqExp"}}),e._v("\n            分\n        ")],1),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sure(5)}}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.showContinFrequ=!1}}},[e._v("取 消")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"经验值设置",visible:e.showSingleOrder,width:"30%",open:"cleanData"},on:{"update:visible":function(t){e.showSingleOrder=t}}},[s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("单笔订单交易额")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeOrderPrice,callback:function(t){e.$set(e.form,"upgradeOrderPrice",t)},expression:"form.upgradeOrderPrice"}}),e._v("\n            元\n        ")],1),e._v(" "),s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("获得经验值")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeOrderPriceExp,callback:function(t){e.$set(e.form,"upgradeOrderPriceExp",t)},expression:"form.upgradeOrderPriceExp"}}),e._v("\n            分\n        ")],1),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sure(6)}}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.showSingleOrder=!1}}},[e._v("取 消")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"经验值设置",visible:e.showMemberUpStand,width:"30%",open:"cleanData"},on:{"update:visible":function(t){e.showMemberUpStand=t}}},[s("p",{staticClass:"dialog-item"},[s("span",{staticStyle:{"margin-left":"30px"}},[e._v("每增加1人则获得")])]),e._v(" "),s("p",{staticClass:"dialog-item"},[s("span",{staticClass:"dialog-title"},[e._v("获得经验值")]),e._v(" "),s("el-input",{staticClass:"dialog-inp",attrs:{placeholder:"请输入数值"},model:{value:e.form.upgradeUserAddOneExp,callback:function(t){e.$set(e.form,"upgradeUserAddOneExp",t)},expression:"form.upgradeUserAddOneExp"}}),e._v("\n            分\n        ")],1),e._v(" "),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sure(7)}}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.showMemberUpStand=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};var c=s("VU/8")(r,l,!1,function(e){s("HUYS")},null,null);t.default=c.exports},HUYS:function(e,t){}});