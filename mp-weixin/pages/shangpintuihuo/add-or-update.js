(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpintuihuo/add-or-update"],{"38a6":function(n,e,t){},"8dbf":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,i,r,u,a){try{var o=n[u](a),s=o.value}catch(h){return void t(h)}o.done?e(s):Promise.resolve(s).then(i,r)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var a=n.apply(e,t);function o(n){u(a,i,r,o,s,"next",n)}function s(n){u(a,i,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("94bb"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:"",shangpinmingcheng:"",tupian:"",jine:"",tuihuoyuanyin:"",shenqingriqi:"",nonghuzhanghao:"",nonghuxingming:"",yonghuming:"",yonghuxingming:"",sfsh:"",shhf:"",userid:""},user:{},ro:{dingdanbianhao:!1,shangpinmingcheng:!1,tupian:!1,jine:!1,tuihuoyuanyin:!1,shenqingriqi:!1,nonghuzhanghao:!1,nonghuxingming:!1,yonghuming:!1,yonghuxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=a(i.default.mark((function e(t){var r,u,a,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(u=e.sent,this.user=u.data,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("shangpintuihuo",this.ruleForm.id);case 11:u=e.sent,this.ruleForm=u.data;case 13:if(!t.cross){e.next=64;break}a=n.getStorageSync("crossObj"),e.t0=i.default.keys(a);case 16:if((e.t1=e.t0()).done){e.next=64;break}if(o=e.t1.value,"dingdanbianhao"!=o){e.next=22;break}return this.ruleForm.dingdanbianhao=a[o],this.ro.dingdanbianhao=!0,e.abrupt("continue",16);case 22:if("shangpinmingcheng"!=o){e.next=26;break}return this.ruleForm.shangpinmingcheng=a[o],this.ro.shangpinmingcheng=!0,e.abrupt("continue",16);case 26:if("tupian"!=o){e.next=30;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,e.abrupt("continue",16);case 30:if("jine"!=o){e.next=34;break}return this.ruleForm.jine=a[o],this.ro.jine=!0,e.abrupt("continue",16);case 34:if("tuihuoyuanyin"!=o){e.next=38;break}return this.ruleForm.tuihuoyuanyin=a[o],this.ro.tuihuoyuanyin=!0,e.abrupt("continue",16);case 38:if("shenqingriqi"!=o){e.next=42;break}return this.ruleForm.shenqingriqi=a[o],this.ro.shenqingriqi=!0,e.abrupt("continue",16);case 42:if("nonghuzhanghao"!=o){e.next=46;break}return this.ruleForm.nonghuzhanghao=a[o],this.ro.nonghuzhanghao=!0,e.abrupt("continue",16);case 46:if("nonghuxingming"!=o){e.next=50;break}return this.ruleForm.nonghuxingming=a[o],this.ro.nonghuxingming=!0,e.abrupt("continue",16);case 50:if("yonghuming"!=o){e.next=54;break}return this.ruleForm.yonghuming=a[o],this.ro.yonghuming=!0,e.abrupt("continue",16);case 54:if("yonghuxingming"!=o){e.next=58;break}return this.ruleForm.yonghuxingming=a[o],this.ro.yonghuxingming=!0,e.abrupt("continue",16);case 58:if("userid"!=o){e.next=62;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,e.abrupt("continue",16);case 62:e.next=16;break;case 64:this.styleChange();case 65:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shenqingriqiChange:function(n){this.ruleForm.shenqingriqi=n.target.value,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=a(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.userid){n.next=3;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("shangpintuihuo",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("shangpintuihuo",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},9485:function(n,e,t){"use strict";var i=t("38a6"),r=t.n(i);r.a},"9d3f":function(n,e,t){"use strict";t.r(e);var i=t("8dbf"),r=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=r.a},b17f:function(n,e,t){"use strict";t.r(e);var i=t("bcf0"),r=t("9d3f");for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t("9485");var a,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"4cb7ebab",null,!1,i["a"],a);e["default"]=s.exports},bcf0:function(n,e,t){"use strict";var i,r=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return i}))},f876:function(n,e,t){"use strict";(function(n){t("9ba9"),t("921b");i(t("66fd"));var e=i(t("b17f"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["f876","common/runtime","common/vendor"]]]);