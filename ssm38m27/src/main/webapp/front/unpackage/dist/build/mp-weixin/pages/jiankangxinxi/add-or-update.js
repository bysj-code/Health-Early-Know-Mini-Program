(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiankangxinxi/add-or-update"],{"196a":function(n,e,r){"use strict";r.r(e);var t=r("597e"),i=r.n(t);for(var u in t)"default"!==u&&function(n){r.d(e,n,(function(){return t[n]}))}(u);e["default"]=i.a},"3b31":function(n,e,r){"use strict";r.r(e);var t=r("c898"),i=r("196a");for(var u in i)"default"!==u&&function(n){r.d(e,n,(function(){return i[n]}))}(u);r("fe6f");var a,o=r("f0c5"),s=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"5f2230a2",null,!1,t["a"],a);e["default"]=s.exports},"43fb":function(n,e,r){},5571:function(n,e,r){"use strict";(function(n){r("4ba9");t(r("66fd"));var e=t(r("3b31"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,r("543d")["createPage"])},"597e":function(n,e,r){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(r("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function u(n,e,r,t,i,u,a){try{var o=n[u](a),s=o.value}catch(c){return void r(c)}o.done?e(s):Promise.resolve(s).then(t,i)}function a(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var a=n.apply(e,r);function o(n){u(a,t,i,o,s,"next",n)}function s(n){u(a,t,i,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("b6e8"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{yonghuming:"",xingbie:"",xingming:"",touxiang:"",nianling:"",shengao:"",tizhong:"",xinlv:"",xueya:"",yinshixiguan:"",yundongxiguan:"",xinxibeizhu:"",riqi:""},yundongxiguanOptions:[],yundongxiguanIndex:0,user:{},ro:{yonghuming:!1,xingbie:!1,xingming:!1,touxiang:!1,nianling:!1,shengao:!1,tizhong:!1,xinlv:!1,xueya:!1,yinshixiguan:!1,yundongxiguan:!1,xinxibeizhu:!1,riqi:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var r=this;return a(t.default.mark((function i(){var u,a,o,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r.ruleForm.riqi=r.$utils.getCurDate(),u=n.getStorageSync("nowTable"),i.next=4,r.$api.session(u);case 4:if(a=i.sent,r.user=a.data,r.ruleForm.yonghuming=r.user.yonghuming,r.ro.yonghuming=!0,r.ruleForm.xingbie=r.user.xingbie,r.ro.xingbie=!0,r.ruleForm.xingming=r.user.xingming,r.ro.xingming=!0,r.ruleForm.touxiang=r.user.touxiang,r.ro.touxiang=!0,r.ro.yonghuming=!0,r.ro.xingbie=!0,r.ro.xingming=!0,r.ro.touxiang=!0,r.yundongxiguanOptions="从不,偶尔,经常".split(","),r.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(r.ruleForm.refid=e.refid,r.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=27;break}return r.ruleForm.id=e.id,i.next=25,r.$api.info("jiankangxinxi",r.ruleForm.id);case 25:a=i.sent,r.ruleForm=a.data;case 27:if(r.cross=e.cross,!e.cross){i.next=87;break}o=n.getStorageSync("crossObj"),i.t0=t.default.keys(o);case 31:if((i.t1=i.t0()).done){i.next=87;break}if(s=i.t1.value,"yonghuming"!=s){i.next=37;break}return r.ruleForm.yonghuming=o[s],r.ro.yonghuming=!0,i.abrupt("continue",31);case 37:if("xingbie"!=s){i.next=41;break}return r.ruleForm.xingbie=o[s],r.ro.xingbie=!0,i.abrupt("continue",31);case 41:if("xingming"!=s){i.next=45;break}return r.ruleForm.xingming=o[s],r.ro.xingming=!0,i.abrupt("continue",31);case 45:if("touxiang"!=s){i.next=49;break}return r.ruleForm.touxiang=o[s],r.ro.touxiang=!0,i.abrupt("continue",31);case 49:if("nianling"!=s){i.next=53;break}return r.ruleForm.nianling=o[s],r.ro.nianling=!0,i.abrupt("continue",31);case 53:if("shengao"!=s){i.next=57;break}return r.ruleForm.shengao=o[s],r.ro.shengao=!0,i.abrupt("continue",31);case 57:if("tizhong"!=s){i.next=61;break}return r.ruleForm.tizhong=o[s],r.ro.tizhong=!0,i.abrupt("continue",31);case 61:if("xinlv"!=s){i.next=65;break}return r.ruleForm.xinlv=o[s],r.ro.xinlv=!0,i.abrupt("continue",31);case 65:if("xueya"!=s){i.next=69;break}return r.ruleForm.xueya=o[s],r.ro.xueya=!0,i.abrupt("continue",31);case 69:if("yinshixiguan"!=s){i.next=73;break}return r.ruleForm.yinshixiguan=o[s],r.ro.yinshixiguan=!0,i.abrupt("continue",31);case 73:if("yundongxiguan"!=s){i.next=77;break}return r.ruleForm.yundongxiguan=o[s],r.ro.yundongxiguan=!0,i.abrupt("continue",31);case 77:if("xinxibeizhu"!=s){i.next=81;break}return r.ruleForm.xinxibeizhu=o[s],r.ro.xinxibeizhu=!0,i.abrupt("continue",31);case 81:if("riqi"!=s){i.next=85;break}return r.ruleForm.riqi=o[s],r.ro.riqi=!0,i.abrupt("continue",31);case 85:i.next=31;break;case 87:r.styleChange();case 88:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},riqiChange:function(n){this.ruleForm.riqi=n.target.value,this.$forceUpdate()},yundongxiguanChange:function(n){this.yundongxiguanIndex=n.target.value,this.ruleForm.yundongxiguan=this.yundongxiguanOptions[this.yundongxiguanIndex]},touxiangTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.touxiang="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(t.default.mark((function r(){var i,u,a,o,s,c,g,l,x,f;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.ruleForm.nianling){r.next=3;break}return e.$utils.msg("年龄不能为空"),r.abrupt("return");case 3:if(!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){r.next=6;break}return e.$utils.msg("年龄应输入整数"),r.abrupt("return");case 6:if(e.ruleForm.shengao){r.next=9;break}return e.$utils.msg("身高不能为空"),r.abrupt("return");case 9:if(e.ruleForm.tizhong){r.next=12;break}return e.$utils.msg("体重不能为空"),r.abrupt("return");case 12:if(e.ruleForm.xinlv){r.next=15;break}return e.$utils.msg("心率不能为空"),r.abrupt("return");case 15:if(e.ruleForm.xueya){r.next=18;break}return e.$utils.msg("血压不能为空"),r.abrupt("return");case 18:if(e.ruleForm.yinshixiguan){r.next=21;break}return e.$utils.msg("饮食习惯不能为空"),r.abrupt("return");case 21:if(e.ruleForm.yundongxiguan){r.next=24;break}return e.$utils.msg("运动习惯不能为空"),r.abrupt("return");case 24:if(!e.cross){r.next=40;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){r.next=40;break}if(c=n.getStorageSync("crossObj"),o.startsWith("[")){r.next=36;break}for(g in c)g==o&&(c[g]=s);return l=n.getStorageSync("crossTable"),r.next=34,e.$api.update("".concat(l),c);case 34:r.next=40;break;case 36:i=Number(n.getStorageSync("userid")),u=c["id"],a=n.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 40:if(!u||!i){r.next=62;break}return e.ruleForm.crossuserid=i,e.ruleForm.crossrefid=u,x={page:1,limit:10,crossuserid:i,crossrefid:u},r.next=46,e.$api.list("jiankangxinxi",x);case 46:if(f=r.sent,!(f.data.total>=a)){r.next=52;break}return e.$utils.msg(n.getStorageSync("tips")),r.abrupt("return",!1);case 52:if(!e.ruleForm.id){r.next=57;break}return r.next=55,e.$api.update("jiankangxinxi",e.ruleForm);case 55:r.next=59;break;case 57:return r.next=59,e.$api.add("jiankangxinxi",e.ruleForm);case 59:e.$utils.msgBack("提交成功");case 60:r.next=70;break;case 62:if(!e.ruleForm.id){r.next=67;break}return r.next=65,e.$api.update("jiankangxinxi",e.ruleForm);case 65:r.next=69;break;case 67:return r.next=69,e.$api.add("jiankangxinxi",e.ruleForm);case 69:e.$utils.msgBack("提交成功");case 70:case"end":return r.stop()}}),r)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,r=e.getFullYear(),t=e.getMonth()+1,i=e.getDate();return"start"===n?r-=60:"end"===n&&(r+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(r,"-").concat(t,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,r("543d")["default"])},c898:function(n,e,r){"use strict";var t;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return t}));var i=function(){var n=this,e=n.$createElement;n._self._c},u=[]},fe6f:function(n,e,r){"use strict";var t=r("43fb"),i=r.n(t);i.a}},[["5571","common/runtime","common/vendor"]]]);