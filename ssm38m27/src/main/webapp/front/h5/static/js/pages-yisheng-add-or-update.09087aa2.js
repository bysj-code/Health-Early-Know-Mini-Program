(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yisheng-add-or-update"],{"118c":function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var n=t(i("3b8d")),a=t(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{yishenggonghao:"",mima:"",yishengxingming:"",yishengxingbie:"",yishengzhaopian:"",yishengzhicheng:"",lianxidianhua:""},yishengxingbieOptions:[],yishengxingbieIndex:0,user:{},ro:{yishenggonghao:!1,mima:!1,yishengxingming:!1,yishengxingbie:!1,yishengzhaopian:!1,yishengzhicheng:!1,lianxidianhua:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(e){var i,t,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:if(t=r.sent,this.user=t.data,this.yishengxingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=14;break}return this.ruleForm.id=e.id,r.next=12,this.$api.info("yisheng",this.ruleForm.id);case 12:t=r.sent,this.ruleForm=t.data;case 14:if(this.cross=e.cross,!e.cross){r.next=50;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 18:if((r.t1=r.t0()).done){r.next=50;break}if(a=r.t1.value,"yishenggonghao"!=a){r.next=24;break}return this.ruleForm.yishenggonghao=n[a],this.ro.yishenggonghao=!0,r.abrupt("continue",18);case 24:if("mima"!=a){r.next=28;break}return this.ruleForm.mima=n[a],this.ro.mima=!0,r.abrupt("continue",18);case 28:if("yishengxingming"!=a){r.next=32;break}return this.ruleForm.yishengxingming=n[a],this.ro.yishengxingming=!0,r.abrupt("continue",18);case 32:if("yishengxingbie"!=a){r.next=36;break}return this.ruleForm.yishengxingbie=n[a],this.ro.yishengxingbie=!0,r.abrupt("continue",18);case 36:if("yishengzhaopian"!=a){r.next=40;break}return this.ruleForm.yishengzhaopian=n[a],this.ro.yishengzhaopian=!0,r.abrupt("continue",18);case 40:if("yishengzhicheng"!=a){r.next=44;break}return this.ruleForm.yishengzhicheng=n[a],this.ro.yishengzhicheng=!0,r.abrupt("continue",18);case 44:if("lianxidianhua"!=a){r.next=48;break}return this.ruleForm.lianxidianhua=n[a],this.ro.lianxidianhua=!0,r.abrupt("continue",18);case 48:r.next=18;break;case 50:this.styleChange();case 51:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},yishengxingbieChange:function(r){this.yishengxingbieIndex=r.target.value,this.ruleForm.yishengxingbie=this.yishengxingbieOptions[this.yishengxingbieIndex]},yishengzhaopianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.yishengzhaopian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){var e,i,t,n,a,o,s,d,g,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.yishenggonghao){r.next=3;break}return this.$utils.msg("医生工号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(this.ruleForm.yishengxingming){r.next=9;break}return this.$utils.msg("医生姓名不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){r.next=12;break}return this.$utils.msg("联系电话应输入手机格式"),r.abrupt("return");case 12:if(!this.cross){r.next=28;break}if(n=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==n){r.next=28;break}if(o=uni.getStorageSync("crossObj"),n.startsWith("[")){r.next=24;break}for(s in o)s==n&&(o[s]=a);return d=uni.getStorageSync("crossTable"),r.next=22,this.$api.update("".concat(d),o);case 22:r.next=28;break;case 24:e=Number(uni.getStorageSync("userid")),i=o["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 28:if(!i||!e){r.next=50;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=34,this.$api.list("yisheng",g);case 34:if(u=r.sent,!(u.data.total>=t)){r.next=40;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 40:if(!this.ruleForm.id){r.next=45;break}return r.next=43,this.$api.update("yisheng",this.ruleForm);case 43:r.next=47;break;case 45:return r.next=47,this.$api.add("yisheng",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:r.next=58;break;case 50:if(!this.ruleForm.id){r.next=55;break}return r.next=53,this.$api.update("yisheng",this.ruleForm);case 53:r.next=57;break;case 55:return r.next=57,this.$api.add("yisheng",this.ruleForm);case 57:this.$utils.msgBack("提交成功");case 58:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,n=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(i,"-").concat(t,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},"20cc":function(r,e,i){"use strict";i.r(e);var t=i("2a14"),n=i("bee7");for(var a in n)"default"!==a&&function(r){i.d(e,r,(function(){return n[r]}))}(a);i("22b6");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"0ac4761b",null,!1,t["a"],o);e["default"]=d.exports},"22b6":function(r,e,i){"use strict";var t=i("2fd1"),n=i.n(t);n.a},"2a14":function(r,e,i){"use strict";var t,n=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("医生工号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.yishenggonghao,placeholder:"医生工号"},model:{value:r.ruleForm.yishenggonghao,callback:function(e){r.$set(r.ruleForm,"yishenggonghao",e)},expression:"ruleForm.yishenggonghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("医生姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.yishengxingming,placeholder:"医生姓名"},model:{value:r.ruleForm.yishengxingming,callback:function(e){r.$set(r.ruleForm,"yishengxingming",e)},expression:"ruleForm.yishengxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("医生性别")]),i("v-uni-picker",{attrs:{value:r.yishengxingbieIndex,range:r.yishengxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.yishengxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.ruleForm.yishengxingbie?r.ruleForm.yishengxingbie:"请选择医生性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.yishengzhaopianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("医生照片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.yishengzhaopian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.yishengzhaopian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("医生职称")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.yishengzhicheng,placeholder:"医生职称"},model:{value:r.ruleForm.yishengzhicheng,callback:function(e){r.$set(r.ruleForm,"yishengzhicheng",e)},expression:"ruleForm.yishengzhicheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("联系电话")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.lianxidianhua,placeholder:"联系电话"},model:{value:r.ruleForm.lianxidianhua,callback:function(e){r.$set(r.ruleForm,"lianxidianhua",e)},expression:"ruleForm.lianxidianhua"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0 auto",backgroundColor:"rgba(71, 177, 60, 1)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}))},"2fd1":function(r,e,i){var t=i("d3de");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var n=i("4f06").default;n("eb06eace",t,!0,{sourceMap:!1,shadowMode:!1})},bee7:function(r,e,i){"use strict";i.r(e);var t=i("118c"),n=i.n(t);for(var a in t)"default"!==a&&function(r){i.d(e,r,(function(){return t[r]}))}(a);e["default"]=n.a},d3de:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0ac4761b]{padding:%?20?%}.content[data-v-0ac4761b]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0ac4761b]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0ac4761b]{width:%?180?%}.avator[data-v-0ac4761b]{width:%?150?%;height:%?60?%}.right-input[data-v-0ac4761b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0ac4761b]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0ac4761b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0ac4761b]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0ac4761b]{border:0}.cu-form-group uni-input[data-v-0ac4761b]{padding:0 %?30?%}.uni-input[data-v-0ac4761b]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0ac4761b]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0ac4761b]::after{line-height:%?80?%}.select .uni-input[data-v-0ac4761b]{line-height:%?80?%}.input .right-input[data-v-0ac4761b]{line-height:%?88?%}',""]),r.exports=e}}]);