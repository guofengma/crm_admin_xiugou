webpackJsonp([24],{"B+aB":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("mvHQ"),s=i.n(a),c=i("UU1J"),n=i("FMx0"),l=i("tF3a"),r=i("Ov/a"),o=i("GVVA"),h={components:{vBreadcrumb:n.a,icon:c.a,region:l.a,chooseArea:r.a},data:function(){return{rules:{name:[{validator:function(e,t,i){if(!t)return i(new Error("模版名称不能为空"));t.length>25?i(new Error("模版名称最多不能超过25个字")):i()},trigger:"blur"}]},times:[{label:"2小时发货",id:2},{label:"4小时发货",id:4},{label:"8小时发货",id:8},{label:"12小时发货",id:12},{label:"当日发货",id:24},{label:"2天内",id:48},{label:"3天内",id:72},{label:"4天内",id:96},{label:"7天内",id:168}],chooseData:[],preData:[],form:{name:"",sendDays:24,country:"1",calcType:"1",freightType:"1",provinceId:"",cityId:"",areaId:""},freightFreePrice:"",startUnit:"",startPrice:"",nextUnit:"",nextPirce:"",tableData:[],tableIndex:"0",btnLoading:!1,address:"",includeArea:"",isShowArea:!1,areaDisabled:!0,showTips:!1,isShowExpress:!0,unit:"公斤",title1:"首公斤数(kg)",title2:"续公斤数(kg)",tips:"应输入0.00至999.99的数字，小数保留两位",id:"",rows:0}},activated:function(){this.id=this.$route.query.templateId||sessionStorage.getItem("templateId"),this.tableData=[],this.rows=0,this.getDetail()},methods:{getDetail:function(){var e=this,t={id:e.id};e.loading=!0,e.$axios.post(api.findFreightTemplateById,t).then(function(t){if(200==t.data.code){e.loading=!1;var i=t.data.data.freightTemplate;e.form.name=i.name,e.form.country=i.country.toString(),e.form.calcType=i.calcType?i.calcType.toString():"1",e.form.freightType=i.freightType.toString(),e.sendDays=i.sendDays,e.freightFreePrice=i.freightFreePrice;var a=[];a.push(i.provinceId,i.cityId,i.areaId),e.address=a,e.form.provinceId=i.provinceId,e.form.cityId=i.cityId,e.form.areaId=i.areaId,e.isShowExpress=!(2==i.freightType);var s=t.data.data.list;e.startUnit=s[0].startUnit,e.startPrice=s[0].startPrice,e.nextUnit=s[0].nextUnit,e.nextPirce=s[0].nextPirce;for(var c=1;c<s.length;c++)e.tableData.push(s[c]);e.rows=s.length-1}else e.loading=!1,e.$message.warning(t.data.msg)}).catch(function(t){e.loading=!1})},getRegion:function(e){this.address=e,this.form.provinceId=this.address[0],this.form.cityId=this.address[1],this.form.areaId=this.address[2],console.log(this.address)},submitForm:function(e){var t=this,i=this;i.$refs[e].validate(function(e){if(e){var a=i.form;if(a.id=i.id,i.form.provinceId&&i.form.cityId&&i.form.areaId){if(3==i.form.freightType){if(!i.freightFreePrice)return void i.$message.warning("请输入满包邮的金额！");a.freightFreePrice=i.freightFreePrice}var c=[],n={startUnit:i.startUnit,startPrice:i.startPrice,nextUnit:i.nextUnit,nextPirce:i.nextPirce,defaultTrue:1};c.push(n);var l=!0;i.tableData.forEach(function(e,t){var i={includeAreaName:e.includeAreaName,includeArea:e.includeArea,startUnit:e.startUnit,startPrice:e.startPrice,nextUnit:e.nextUnit,nextPirce:e.nextPirce,defaultTrue:2};(""===e.includeAreaName||""===e.includeArea||""===e.startUnit||""===e.startPrice||""===e.nextUnit||""===e.nextPirce||e.nextUnit<=0)&&(l=!1),c.push(i)}),a.list=s()(c),l?(t.btnLoading=!0,o.a.updateFreightTemplateById(a).then(function(e){i.$router.push("/shippingTemplate"),t.btnLoading=!1}).catch(function(e){console.log(e),t.btnLoading=!1})):t.$message.warning("请填写完整的运费设置!")}else i.$message.warning("请选择省市区！")}})},productArea:function(){this.areaDisabled=1===this.form.country},chooseStyle:function(){this.showTips=2==this.form.freightType,this.isShowExpress=!(2==this.form.freightType)},calcType:function(){var e=this.form.calcType;1==e?(this.unit="公斤",this.title1="首公斤数(kg)",this.title2="续公斤数(kg)",this.tips="应输入0.00至999.99的数字，小数保留两位"):2==e?(this.unit="m³",this.title1="首体积数(m³)",this.title2="续体积数(m³)",this.tips="应输入0.00至999.99的数字，小数保留两位"):3==e&&(this.unit="元",this.title1="首件数(元)",this.title2="续件数(元)",this.tips="应输入正整数")},cancel:function(){this.$router.push("/shippingTemplate")},editAddress:function(e){this.isShowArea=!0,this.tableIndex=e,this.chooseData=this.tableData,this.preData=this.tableData[e]},delItem:function(e,t){this.tableData.splice(t,1),this.rows=this.rows-1},chooseAreaToast:function(e){if(this.isShowArea=!1,e){var t=e.indexOf("IDS");this.tableData[this.tableIndex].includeAreaName=e.substring(0,t),this.tableData[this.tableIndex].includeArea=e.substring(t+4)}},addSetting:function(){0==this.rows?this.addRow():this.isRowEmpty()?this.addRow():this.$message.warning("请填写完整的运费设置!")},addRow:function(){this.rows=this.rows+1,this.tableData.push({includeAreaName:"",startUnit:"",startPrice:"",nextUnit:"",nextPirce:""})},isRowEmpty:function(){var e=this.tableData[this.rows-1];return!(""===e.includeAreaName||""===e.startUnit||""===e.startPrice||""===e.nextUnit||""===e.nextPirce||e.nextUnit<=0)}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shipping"},[i("v-breadcrumb",{attrs:{nav:["品牌产品管理","运费模板","编辑模板"]}}),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"shipping-box"},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[i("el-form-item",{attrs:{prop:"name",label:"模板名称"}},[i("el-input",{staticClass:"lar-inp",attrs:{placeholder:"请输入模板名称(模板名称最少必须由1个字组成，最多不能超过25个字)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{staticClass:"address-item",attrs:{prop:"country",label:"产品发货地"}},[i("el-select",{staticClass:"small-inp",on:{change:e.productArea},model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}},[i("el-option",{attrs:{label:"中国",value:"1"}},[e._v("中国")])],1),e._v(" "),i("div",{staticClass:"address-area"},[i("region",{attrs:{regionMsg:e.address,isDisabled:!e.areaDisabled},on:{regionMsg:e.getRegion}})],1)],1),e._v(" "),i("el-form-item",{attrs:{prop:"sendDays",label:"发货时间"}},[i("el-select",{staticClass:"mid-inp",model:{value:e.form.sendDays,callback:function(t){e.$set(e.form,"sendDays",t)},expression:"form.sendDays"}},e._l(e.times,function(t,a){return i("el-option",{key:a,attrs:{label:t.label,value:t.id}},[e._v("\n                            "+e._s(t.label)+"\n                        ")])}))],1),e._v(" "),i("el-form-item",{attrs:{prop:"status",label:"是否包邮"}},[i("el-radio-group",{on:{change:e.chooseStyle},model:{value:e.form.freightType,callback:function(t){e.$set(e.form,"freightType",t)},expression:"form.freightType"}},[i("el-radio",{attrs:{label:"1"}},[e._v("自定义运费")]),e._v(" "),i("el-radio",{attrs:{label:"2"}},[e._v("平台承担运费")]),e._v(" "),i("el-radio",{attrs:{label:"3"}},[e._v("满\n                            "),i("el-input",{staticClass:"small-inp",model:{value:e.freightFreePrice,callback:function(t){e.freightFreePrice=t},expression:"freightFreePrice"}}),e._v("\n                            元包邮\n                        ")],1)],1)],1),e._v(" "),e.isShowExpress?i("div",[i("el-form-item",{attrs:{prop:"status",label:"计价方式"}},[i("el-radio-group",{on:{change:e.calcType},model:{value:e.form.calcType,callback:function(t){e.$set(e.form,"calcType",t)},expression:"form.calcType"}},[i("el-radio",{attrs:{label:"1"}},[e._v("按重量")])],1)],1),e._v(" "),i("div",{staticClass:"express"},[i("span",[e._v("物流快递")])]),e._v(" "),i("el-form-item",{staticClass:"express-area"},[e._v("\n                        默认运费\n                        "),i("el-input",{staticClass:"small-inp",model:{value:e.startUnit,callback:function(t){e.startUnit=t},expression:"startUnit"}}),e._v("\n                        "+e._s(e.unit)+"内\n                        "),i("el-input",{staticClass:"small-inp",model:{value:e.startPrice,callback:function(t){e.startPrice=t},expression:"startPrice"}}),e._v("\n                        元，每增加\n                        "),i("el-input",{staticClass:"small-inp",model:{value:e.nextUnit,callback:function(t){e.nextUnit=t},expression:"nextUnit"}}),e._v("\n                        "+e._s(e.unit)+"，增加运费\n                        "),i("el-input",{staticClass:"small-inp",model:{value:e.nextPirce,callback:function(t){e.nextPirce=t},expression:"nextPirce"}}),e._v("\n                        元\n                        "),i("div",{staticClass:"color-red"},[e._v(e._s(e.tips))]),e._v(" "),i("el-table",{attrs:{data:e.tableData,border:""}},[i("el-table-column",{attrs:{label:"选择地区",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[[i("span",{staticStyle:{float:"left",display:"inline-block","text-align":"left",width:"70%"}},[e._v(e._s(t.row.includeAreaName))])],e._v(" "),i("span",{staticStyle:{float:"right",display:"inline-block"}},[i("span",{staticClass:"color-blue",on:{click:function(i){e.editAddress(t.$index)}}},[e._v("编辑")]),e._v(" "),i("span",{staticClass:"color-blue",staticStyle:{"margin-left":"10px"},on:{click:function(i){e.delItem(t.row,t.$index)}}},[e._v("删除")])])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.title1,align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{staticClass:"mini-inp",model:{value:t.row.startUnit,callback:function(i){e.$set(t.row,"startUnit",i)},expression:"scope.row.startUnit"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"运费(元)",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{staticClass:"mini-inp",model:{value:t.row.startPrice,callback:function(i){e.$set(t.row,"startPrice",i)},expression:"scope.row.startPrice"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.title2,align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{staticClass:"mini-inp",model:{value:t.row.nextUnit,callback:function(i){e.$set(t.row,"nextUnit",i)},expression:"scope.row.nextUnit"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"续费(元)",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{staticClass:"mini-inp",model:{value:t.row.nextPirce,callback:function(i){e.$set(t.row,"nextPirce",i)},expression:"scope.row.nextPirce"}})]}}])})],1),e._v(" "),i("div",[i("span",{staticClass:"color-blue",on:{click:e.addSetting}},[e._v("增加制定省市运费设置")])])],1)],1):e._e(),e._v(" "),i("div",{staticClass:"submit-btn"},[i("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){e.submitForm("form")}}},[e._v("确认保存")]),e._v(" "),i("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)]),e._v(" "),e.isShowArea?i("choose-area",{attrs:{index:e.tableIndex,chooseData:e.chooseData,preData:e.preData},on:{getArea:e.chooseAreaToast}}):e._e(),e._v(" "),e.showTips?i("div",{staticClass:"mask"},[i("div",{staticClass:"box"},[i("div",{staticClass:"mask-title"},[i("icon",{staticClass:"ico",attrs:{ico:"icon-jinggao"}}),e._v("\n                温馨提示\n            ")],1),e._v(" "),i("div",{staticClass:"mask-content"},[i("span",{staticClass:"del-tip"},[e._v('选择"卖家承担运费"后，所有区域的运费将设置为0元，且原运费设置无法恢复，请保存原有运费设置。')]),e._v(" "),i("div",{staticClass:"del-btn-group"},[i("el-button",{staticClass:"del-btn",attrs:{loading:e.btnLoading,type:"primary"},on:{click:function(t){e.showTips=!1}}},[e._v("确认\n                    ")])],1)])])]):e._e()],1)},staticRenderFns:[]};var p=i("VU/8")(h,d,!1,function(e){i("rujE")},null,null);t.default=p.exports},"Ov/a":function(e,t,i){"use strict";var a=i("GVVA"),s={components:{},props:["index","chooseData","preData"],data:function(){return{area:[],checkAll:[],showCities:!1,expandId:-1,checkNames:[],checkIds:[],btnLoading:!1,allChooseData:[],preChooseData:[],allChooseProvinceIds:[],allCityIds:[],allCityNames:[],preChooseProvinceIds:[],preCityIds:[],preCityNames:[],loading:!1}},created:function(){this.getAllData(this.chooseData),this.preData&&this.getAllData(this.preData),this.getProvinceListGroupByDistrict()},methods:{getAllData:function(e){var t=[],i=[],a=[],s=[],c=[];e instanceof Array?(t=this.allChooseData,i=e,a=this.allChooseProvinceIds,s=this.allCityIds,c=this.allCityNames):(i.push(e),t=this.preChooseData,a=this.preChooseProvinceIds,s=this.preCityIds,c=this.preCityNames);for(var n=0;n<i.length;n++)if(i[n].includeArea)for(var l=i[n].includeArea.replace(/:/g,",").split(","),r=i[n].includeAreaName.replace(/:/g,",").split(","),o=0;o<l.length;o++)if("0000"==l[o].slice(2,6)){var h={provinceId:l[o],provinceName:r[o],cityIds:[],cityNames:[]};-1==a.indexOf(l[o])&&(a.push(l[o]),t.push(h))}for(var d=0;d<t.length;d++)for(var p=0;p<i.length;p++)if(i[p].includeArea)for(var u=i[p].includeArea.replace(/:/g,",").split(","),v=i[p].includeAreaName.replace(/:/g,",").split(","),k=0;k<u.length;k++)t[d].provinceId==u[k]&&(u.splice(k,1),v.splice(k,1)),t[d].provinceId.slice(0,2)==u[k].slice(0,2)&&-1==t[d].cityIds.indexOf(u[k])&&(t[d].cityIds.push(u[k]),t[d].cityNames.push(v[k]),s.push(u[k]),c.push(v[k]))},getProvinceListGroupByDistrict:function(){var e=this;a.a.getProvinceListGroupByDistrict({}).then(function(t){var i=["","华东","华南","华中","华北","西北","西南","东北","港澳台","海外"];for(var a in t.data.data){var s={isChecked:!1,isDisabled:!1,isIndeterminate:!1,count:0,provinceCheck:[]};for(var c in t.data.data[a]){var n={isChecked:!1,isDisabled:!1,isIndeterminate:!1,cityCheck:[],cityDisabled:[],name:t.data.data[a][c].name,zipcode:t.data.data[a][c].zipcode,count:0,ids:[],names:[],checkedCities:[]},l=t.data.data[a][c].zipcode;for(var r in"string"!=typeof t.data.data[a][c].zipcode&&(l=t.data.data[a][c].zipcode.toString()),e.allChooseData)if(e.allChooseData[r].provinceId==l)if(n.isChecked=!0,n.ids=e.allChooseData[r].cityIds,n.names=e.allChooseData[r].cityNames,-1==e.preChooseProvinceIds.indexOf(l))for(var o in n.isDisabled=!0,e.allChooseData[r].cityIds)n.cityDisabled[o]=!0;else for(var h in e.preChooseData)e.preChooseData[h].provinceId==l&&e.preChooseData[h].cityIds.length<e.allChooseData[r].cityIds.length&&(n.isDisabled=!0);s.provinceCheck.push(n)}e.checkAll.push(s);var d={name:i[a],id:a,value:t.data.data[a]};for(var p in e.area.push(d),e.checkAll)e.areaCheckedAll(p)}}).catch(function(e){console.log(e)})},getCityList:function(e,t,i,s,c){var n=this;n.showCities="checked"!=t,n.expandId==e&&(n.showCities=!0),n.expandId=e;var l={fatherZipcode:e};n.loading=!0,a.a.getCityList(l).then(function(a){for(var c in n.checkAll[i].provinceCheck[s].checkedCities=a.data.data,n.checkAll[i].provinceCheck[s].count=a.data.data.length,a.data.data){var l=a.data.data[c];n.checkAll[i].provinceCheck[s].cityCheck[c]=!1,n.checkAll[i].provinceCheck[s].cityDisabled[c]=!1;var r="string"==typeof l.zipcode?l.zipcode:l.zipcode.toString();if(e="string"==typeof e?e:e.toString(),-1!=n.allChooseProvinceIds.indexOf(e)&&-1!=n.allCityIds.indexOf(r)&&(n.checkAll[i].provinceCheck[s].cityCheck[c]=!0,-1==n.preCityIds.indexOf(r)&&(n.checkAll[i].provinceCheck[s].cityDisabled[c]=!0)),-1==n.checkAll[i].provinceCheck[s].ids.indexOf(r)&&"checked"==t&&(n.checkAll[i].provinceCheck[s].ids.push(r),n.checkAll[i].provinceCheck[s].names.push(l.name)),"checked"==t)if(n.checkAll[i].provinceCheck[s].isChecked){var o=n.checkAll[i].provinceCheck[s].zipcode;n.checkAll[i].provinceCheck[s].cityDisabled[c]||(n.checkAll[i].provinceCheck[s].cityCheck[c]=!0,n.handelChooseData("all",o,i,s,r,l.name),n.handelChooseData("pre",o,i,s,r,l.name),-1==n.allCityIds.indexOf(r)&&(n.allCityIds.push(r),n.preCityIds.push(r),n.preCityNames.push(l.name))),n.checkAll[i].provinceCheck[s].isChecked=!0,n.checkAll[i].provinceCheck[s].isIndeterminate=!1}else n.checkAll[i].provinceCheck[s].ids=[],n.checkAll[i].provinceCheck[s].names=[],n.checkAll[i].provinceCheck[s].cityCheck[c]=!1,n.handelDeleteData(r,l.name);var h=n.checkAll[i].provinceCheck[s].names;if("expand"==t){for(var d in n.checkAll[i].provinceCheck[s].ids){n.checkAll[i].provinceCheck[s].ids[d]==r&&-1==h.indexOf(l.name)&&h.push(l.name)}n.checkAll[i].provinceCheck[s].names=h}n.checkAll[i].provinceCheck[s].ids.length>0&&n.checkAll[i].provinceCheck[s].ids.length<a.data.data.length?n.checkAll[i].provinceCheck[s].isIndeterminate=!0:n.checkAll[i].provinceCheck[s].isIndeterminate=!1,n.$set(n.checkAll[i].provinceCheck,s,n.checkAll[i].provinceCheck[s])}n.loading=!1}).catch(function(e){console.log(e)})},handleAllProvince:function(e,t){var i=this;i.checkAll[t].isChecked?i.checkAll[t].provinceCheck.forEach(function(e,a){i.checkAll[t].provinceCheck[a].isChecked=!0,i.getCityList(e.zipcode,"checked",t,a,e.name)}):(i.expandId=-1,i.showCities=!1,i.checkAll[t].provinceCheck.forEach(function(e,a){i.checkAll[t].provinceCheck[a].isChecked=!1,i.checkAll[t].provinceCheck[a].names=[],i.checkAll[t].provinceCheck[a].ids=[],i.checkAll[t].provinceCheck[a].checkedCities=[]}))},handleCheckAll:function(e,t,i){this.getCityList(e.zipcode,"checked",i,t,e.name),this.areaCheckedAll(i),this.checkAll[i].provinceCheck[t].isIndeterminate=!1},expandItem:function(e,t,i){this.expandId=e.zipcode,this.getCityList(e.zipcode,"expand",i,t,e.name)},handleCheckedCities:function(e,t,i,a,s){var c="string"==typeof a.zipcode?a.zipcode:a.zipcode.toString(),n=this.checkAll[i].provinceCheck[t].zipcode;"string"!=typeof n&&(n=n.toString()),this.$set(this.checkAll[i].provinceCheck[t].cityCheck,e,s),s?(this.checkAll[i].provinceCheck[t].ids.push(c),this.checkAll[i].provinceCheck[t].names.push(a.name),this.handelChooseData("all",n,i,t,c,a.name),this.handelChooseData("pre",n,i,t,c,a.name),-1==this.allCityIds.indexOf(c)&&(this.allCityIds.push(c),this.preCityIds.push(c),this.preCityNames.push(a.name))):(this.deleteData(this.checkAll[i].provinceCheck[t].ids,c),this.deleteData(this.checkAll[i].provinceCheck[t].names,a.name),this.handelDeleteData(c,a.name));var l=this.checkAll[i].provinceCheck[t].ids.length,r=this.checkAll[i].provinceCheck[t].checkedCities;this.checkAll[i].provinceCheck[t].isChecked=l===r.length,this.checkAll[i].isIndeterminate=this.checkAll[i].provinceCheck[t].isIndeterminate=l>0&&l<r.length,this.$set(this.checkAll,i,this.checkAll[i]),this.$set(this.checkAll[i].provinceCheck,t,this.checkAll[i].provinceCheck[t]),this.areaCheckedAll(i)},handelChooseData:function(e,t,i,a,s,c){var n=void 0,l=void 0,r=this;"all"==e?(n=r.allChooseData,l=r.allChooseProvinceIds):(n=r.preChooseData,l=r.preChooseProvinceIds),n.length?n.forEach(function(n,o){-1!=l.indexOf(t)?n.provinceId==t&&-1==n.cityIds.indexOf(s)&&(n.cityIds.push(s),n.cityNames.push(c)):r.addChooseData(e,t,i,a,s,c)}):r.addChooseData(e,t,i,a,s,c)},addChooseData:function(e,t,i,a,s,c){var n=void 0,l=void 0;"all"==e?(n=this.allChooseData,l=this.allChooseProvinceIds):(n=this.preChooseData,l=this.preChooseProvinceIds),l.push(t);var r={provinceId:t,provinceName:this.checkAll[i].provinceCheck[a].name,cityIds:[],cityNames:[]};r.cityIds.push(s),r.cityNames.push(c),n.push(r)},handelDeleteData:function(e,t){var i=this;i.allChooseData.forEach(function(a,s){i.deleteData(a.cityIds,e),i.deleteData(a.cityNames,t)}),i.preChooseData.forEach(function(a,s){i.deleteData(a.cityIds,e),i.deleteData(a.cityNames,t)}),i.deleteData(i.allCityIds,e),i.deleteData(i.preCityIds,e),i.deleteData(i.preCityNames,t)},deleteData:function(e,t){for(var i in e)e[i]==t&&e.splice(i,1)},areaCheckedAll:function(e){if(8!=e){var t=0,i=0;this.checkAll[e].provinceCheck.forEach(function(e){e.isChecked&&++t,e.isDisabled&&++i}),this.checkAll[e].isChecked=t===this.checkAll[e].provinceCheck.length,this.checkAll[e].isIndeterminate=t>0&&t<this.checkAll[e].provinceCheck.length,this.checkAll[e].isDisabled=i>0}},closeToask:function(e){for(var t in this.checkNames=[],this.checkIds=[],this.preChooseData)if(this.preChooseData[t].cityNames.length){var i=this.preChooseData[t].provinceName+":"+this.preChooseData[t].cityNames.join(","),a=this.preChooseData[t].provinceId+":"+this.preChooseData[t].cityIds.join(",");-1==this.checkNames.indexOf(i)&&(this.checkNames.push(i),this.checkIds.push(a))}e?this.$emit("getArea",this.checkNames+"IDS:"+this.checkIds):this.$emit("getArea",!1)}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"choose-area"},[i("div",{staticClass:"pwd-mask"},[i("div",{staticClass:"box"},[i("div",{staticClass:"mask-title"},[e._v("\n                选择区域\n            ")]),e._v(" "),i("div",{staticClass:"mask-content"},[e._l(e.area,function(t,a){return i("div",{staticStyle:{"margin-bottom":"10px"}},[i("el-checkbox",{attrs:{indeterminate:e.checkAll[a].isIndeterminate,disabled:e.checkAll[a].isDisabled},on:{change:function(i){e.handleAllProvince(t,a)}},model:{value:e.checkAll[a].isChecked,callback:function(t){e.$set(e.checkAll[a],"isChecked",t)},expression:"checkAll[index].isChecked"}},[e._v("\n                        "+e._s(t.name)+"\n                    ")]),e._v(" "),i("div",{staticStyle:{"margin-left":"20px"}},[e._l(t.value,function(t,s){return[i("el-checkbox",{key:s,attrs:{disabled:e.checkAll[a].provinceCheck[s].isDisabled,indeterminate:e.checkAll[a].provinceCheck[s].isIndeterminate},on:{change:function(i){e.handleCheckAll(t,s,a)}},model:{value:e.checkAll[a].provinceCheck[s].isChecked,callback:function(t){e.$set(e.checkAll[a].provinceCheck[s],"isChecked",t)},expression:"checkAll[index].provinceCheck[k].isChecked"}}),e._v(" "),i("span",{staticClass:"expand-item",on:{click:function(i){e.expandItem(t,s,a)}}},[e._v("\n                                "+e._s(t.name)+"\n                            "),[i("i",{staticClass:"el-icon-caret-bottom",staticStyle:{"margin-right":"10px"}})],e._v(" "),[e.showCities&&e.expandId==t.zipcode?i("el-card",{staticClass:"city-area"},[i("i",{staticClass:"el-icon-close",staticStyle:{"margin-right":"10px"},on:{click:function(t){t.stopPropagation(),e.showCities=!1}}}),e._v(" "),e._l(e.checkAll[a].provinceCheck[s].checkedCities,function(t,c){return i("el-checkbox",{key:c,attrs:{disabled:e.checkAll[a].provinceCheck[s].cityDisabled[c]},on:{change:function(i){e.handleCheckedCities(c,s,a,t,i)}},model:{value:e.checkAll[a].provinceCheck[s].cityCheck[c],callback:function(t){e.$set(e.checkAll[a].provinceCheck[s].cityCheck,c,t)},expression:"checkAll[index].provinceCheck[k].cityCheck[kk]"}},[e._v("\n                                            "+e._s(t.name)+"\n                                        ")])})],2):e._e()]],2)]})],2)],1)}),e._v(" "),i("div",{staticClass:"del-btn-group"},[i("el-button",{staticClass:"del-btn",attrs:{loading:e.btnLoading,type:"primary"},on:{click:function(t){e.closeToask(!0)}}},[e._v("确认\n                    ")]),e._v(" "),i("el-button",{on:{click:function(t){e.closeToask(!1)}}},[e._v("取消")])],1)],2)])])])},staticRenderFns:[]};var n=i("VU/8")(s,c,!1,function(e){i("RWcx")},null,null);t.a=n.exports},RWcx:function(e,t){},rujE:function(e,t){}});