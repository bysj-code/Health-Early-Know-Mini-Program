(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-messages-liuyan"],{2809:function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content my-publish-pv"},[r("v-uni-form",[r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-input",{style:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"#333",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:"true",placeholder:"留言人用户名"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"#333",borderRadius:"0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"dashed ",height:"300rpx"},attrs:{placeholder:"留言内容"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.cpicture?r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.baseUrl+e.ruleForm.cpicture,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"text-align":"center"}},[r("v-uni-button",{staticClass:"bg-red margin-tb-sm",style:{padding:"0 20rpx",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"20rpx 0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(71, 177, 60, 1)",color:"#fff",borderRadius:"80rpx",borderWidth:"1",width:"320rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},i=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}))},5328:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-54ee3b07]{background-color:#fff}.content[data-v-54ee3b07]{padding:%?20?% %?24?%}.content[data-v-54ee3b07]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-54ee3b07]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-54ee3b07]{width:%?180?%}.avator[data-v-54ee3b07]{width:%?150?%;height:%?60?%}.right-input[data-v-54ee3b07]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.cu-form-group[data-v-54ee3b07]{padding:0;background-color:initial;min-height:inherit;margin-bottom:%?20?%}.cu-form-group + .cu-form-group[data-v-54ee3b07]{border:0}.cu-form-group uni-input[data-v-54ee3b07]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-54ee3b07]{padding:%?30?%;margin:0}.bg-red[data-v-54ee3b07]{line-height:%?80?%}body.?%PAGE?%[data-v-54ee3b07]{background-color:#fff}',""]),e.exports=t},"8e2e":function(e,t,r){var n=r("5328");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("4f06").default;a("321aaa75",n,!0,{sourceMap:!1,shadowMode:!1})},"99cf":function(e,t,r){"use strict";r.r(t);var n=r("2809"),a=r("ca9c");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("eeed");var o,u=r("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"54ee3b07",null,!1,n["a"],o);t["default"]=s.exports},ca9c:function(e,t,r){"use strict";r.r(t);var n=r("fddf"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},eeed:function(e,t,r){"use strict";var n=r("8e2e"),a=r.n(n);a.a},fddf:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("3b2b"),r("28a5"),r("96cf");var a=n(r("3b8d")),i={data:function(){return{ruleForm:{userid:"",username:"",content:"",reply:"",cpicture:""},user:{}}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),"yisheng"==r&&(this.ruleForm.username=this.user.yishenggonghao),"yonghu"==r&&(this.ruleForm.username=this.user.yonghuming),this.styleChange();case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{uploadTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.cpicture="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.content){e.next=10;break}for(t="",r=[],t&&(r=t.split(",")),n=0;n<r.length;n++)a=new RegExp(r[n],"g"),this.ruleForm.content.indexOf(r[n])>-1&&(this.ruleForm.content=this.ruleForm.content.replace(a,"**"));return e.next=7,this.$api.add("messages",this.ruleForm);case 7:this.$utils.msgBack("提交成功"),e.next=11;break;case 10:this.$utils.msg("请填写留言内容");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=i}}]);