(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"053a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,r,u,a){try{var s=t[u](a),o=s.value}catch(h){return void n(h)}s.done?e(o):Promise.resolve(o).then(i,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function s(t){u(a,i,r,s,o,"next",t)}function o(t){u(a,i,r,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,nonghuxingbieOptions:[],nonghuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=a(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],n=t.getStorageSync("loginTable"),this.tableName=n,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"nonghu"==this.tableName&&(this.nonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.nonghuxingbieOptions[0]),this.styleChange();case 6:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{yonghuxingbieChange:function(t){this.yonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},nonghuxingbieChange:function(t){this.nonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.nonghuxingbieOptions[this.nonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=a(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuming||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.yonghuxingming||"yonghu"!=this.tableName){t.next=9;break}return this.$utils.msg("用户姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){t.next=12;break}return this.$utils.msg("手机号码应输入手机格式"),t.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){t.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 15:if(this.ruleForm.nonghuzhanghao||"nonghu"!=this.tableName){t.next=18;break}return this.$utils.msg("农户账号不能为空"),t.abrupt("return");case 18:if(this.ruleForm.mima||"nonghu"!=this.tableName){t.next=21;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 21:if(this.ruleForm.nonghuxingming||"nonghu"!=this.tableName){t.next=24;break}return this.$utils.msg("农户姓名不能为空"),t.abrupt("return");case 24:if("nonghu"!=this.tableName||!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){t.next=27;break}return this.$utils.msg("联系方式应输入手机格式"),t.abrupt("return");case 27:if("nonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){t.next=30;break}return this.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 30:return t.next=32,this.$api.register("".concat(this.tableName),this.ruleForm);case 32:this.$utils.msgBack("注册成功");case 34:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("543d")["default"])},"26b5":function(t,e,n){"use strict";var i=n("8e0f"),r=n.n(i);r.a},"2eca":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},"8e0f":function(t,e,n){},"95e7":function(t,e,n){"use strict";n.r(e);var i=n("053a"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},cf3f:function(t,e,n){"use strict";n.r(e);var i=n("2eca"),r=n("95e7");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("26b5");var a,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"6eeac460",null,!1,i["a"],a);e["default"]=o.exports},fdb0:function(t,e,n){"use strict";(function(t){n("9ba9"),n("921b");i(n("66fd"));var e=i(n("cf3f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fdb0","common/runtime","common/vendor"]]]);