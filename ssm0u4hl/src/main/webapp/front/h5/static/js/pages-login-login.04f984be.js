(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"205e":function(e,r,t){"use strict";var i,o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"box",style:{padding:"48rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 5%",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"90%",borderStyle:"solid",height:"90%"}},[t("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"0 auto",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20220213/5f9bcfe2ef6f45e3bebd7a33f292bf44.webp",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20220213/5f9bcfe2ef6f45e3bebd7a33f292bf44.webp",mode:"aspectFill"}})],1),t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0 0 4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:e.username,callback:function(r){e.username=r},expression:"username"}})],1),t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0 0 4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1),e.roleNum>1?t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-picker",{attrs:{value:e.index,range:e.options},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.optionsChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-picker-type",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(204, 204, 204, 1)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0 0 4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v(e._s(e.options[e.index]))])],1)],1):e._e(),t("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(37, 147, 230, 1)",borderRadius:"80rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"2rpx",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onLoginTap.apply(void 0,arguments)}}},[e._v("登录")]),t("v-uni-view",{staticClass:"links",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"link-highlight",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"10rpx",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(37, 147, 230, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"55%",lineHeight:"40rpx",fontSize:"24rpx",borderStyle:"solid"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onRegisterTap("yonghu")}}},[e._v("注册用户")]),t("v-uni-view",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"#999",textAlign:"right",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"40rpx",fontSize:"24rpx",borderStyle:"solid"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onForgetTap.apply(void 0,arguments)}}},[e._v("忘记密码？")])],1)],1)],1)},n=[];t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return i}))},3285:function(e,r,t){"use strict";t.r(r);var i=t("6263"),o=t.n(i);for(var n in i)"default"!==n&&function(e){t.d(r,e,(function(){return i[e]}))}(n);r["default"]=o.a},6263:function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("96cf");var o=i(t("3b8d")),n=i(t("2971")),a={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var e=["请选择登录用户类型"],r=n.default.list();this.menuList=r;for(var t=0;t<this.menuList.length;t++)"是"==this.menuList[t].hasFrontLogin&&(e.push(this.menuList[t].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){uni.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.username){e.next=3;break}return this.$utils.msg("请输入用户名"),e.abrupt("return");case 3:if(this.password){e.next=6;break}return this.$utils.msg("请输入用户密码"),e.abrupt("return");case 6:if(this.optionsValues[this.index]){e.next=9;break}return this.$utils.msg("请选择登陆用户类型"),e.abrupt("return");case 9:return e.next=11,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 11:return r=e.sent,uni.removeStorageSync("useridTag"),uni.setStorageSync("token",r.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),e.next=18,this.$api.session("".concat(this.optionsValues[this.index]));case 18:r=e.sent,uni.setStorageSync("userid",r.data.id),r.data.vip&&uni.setStorageSync("vip",r.data.vip),uni.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 23:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value}}};r.default=a},"69a3":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4ee628b1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh - 44px);box-sizing:border-box}.content[data-v-4ee628b1]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220213/ffc2b6c73bc14ebc8bcaffdf9bb20702.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-4ee628b1]{text-align:center}.logo uni-image[data-v-4ee628b1]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-4ee628b1]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-4ee628b1]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-4ee628b1]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-4ee628b1]{margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-4ee628b1]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-4ee628b1]{margin:0;color:#b49950}',""]),e.exports=r},"6b87":function(e,r,t){var i=t("91ef");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("4b29e60a",i,!0,{sourceMap:!1,shadowMode:!1})},"703d":function(e,r,t){"use strict";var i=t("aa13"),o=t.n(i);o.a},"91ef":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,".btn-submit[data-v-4ee628b1]{height:auto!important;line-height:%?88?%}",""]),e.exports=r},a86a:function(e,r,t){"use strict";t.r(r);var i=t("205e"),o=t("3285");for(var n in o)"default"!==n&&function(e){t.d(r,e,(function(){return o[e]}))}(n);t("b961"),t("703d");var a,s=t("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4ee628b1",null,!1,i["a"],a);r["default"]=d.exports},aa13:function(e,r,t){var i=t("69a3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("2ebd0e0f",i,!0,{sourceMap:!1,shadowMode:!1})},b961:function(e,r,t){"use strict";var i=t("6b87"),o=t.n(i);o.a}}]);