webpackJsonp([1],{"+3og":function(t,a){},"0Y+k":function(t,a){},"22ps":function(t,a,e){t.exports=e.p+"img/lunbo3.8230c08.png"},"3xxH":function(t,a,e){t.exports=e.p+"img/error.190c24e.png"},"4yJi":function(t,a){},"68O8":function(t,a){},DLge:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Ai5V"),o=e.n(n),i=e("dhqA"),s=e.n(i),r=e("kQvj"),d=e.n(r),c=e("7+uW"),u={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]},l=e("VU/8")({name:"App"},u,!1,null,null,null).exports,p=e("/ocq"),h=e("mvHQ"),f=e.n(h),m=e("mtWM"),v=e.n(m),g=e("fxnj"),_=e.n(g);var w={data:function(){return{discounts:"",orderId:"",host:"http://test.leagoohealth.com:18081",orderInfo:{productList:"",paySum:"",reducedSum:0},noDataText:"",payData:"",loading:!1}},created:function(){/MicroMessenger/.test(window.navigator.userAgent)?3==window.location.href.split("?").length?(this.code=window.location.href.split("?")[1].split("#")[0].split("&")[0].split("=")[1],this.orderId=window.location.href.split("?")[2].split("=")[1],this.getData()):window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid="+this.$route.query.appId+"&redirect_uri=http%3a%2f%2fwww.leagoohealth.com%2fpaytest%2f%23%2findex?orderId="+this.$route.query.orderId+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"):(this.orderId=this.$route.query.orderId,this.getData())},mounted:function(){},updated:function(){},methods:{toPay:function(){this.loading=!0;var t=this;/MicroMessenger/.test(window.navigator.userAgent)?v()({url:t.host+"/leagoo-health-api/api/pay/wxOrder",method:"post",data:{orderId:t.orderId,code:t.code}}).then(function(a){200==a.data.code&&(_.a.config({debug:!1,appId:a.data.data.appId,timestamp:a.data.data.timeStamp,nonceStr:a.data.data.nonceStr,signature:"MD5",jsApiList:["chooseWXPay","closeWindow"]}),_.a.ready(function(){_.a.chooseWXPay({appId:a.data.data.appId,timestamp:a.data.data.timeStamp,nonceStr:a.data.data.nonceStr,package:a.data.data.package,signType:a.data.data.signType,paySign:a.data.data.paySign,success:function(a){t.loading=!1,"chooseWXPay:ok"==a.errMsg?t.$router.replace({path:"/success"}):t.$router.replace({path:"/error"})},cancel:function(a){t.loading=!1,_.a.closeWindow()}})}))},function(a){t.loading=!1,console.log(a)}):/AlipayClient/.test(window.navigator.userAgent)?v()({url:t.host+"/leagoo-health-api/api/pay/aliOrder",method:"post",data:{orderId:t.orderId}}).then(function(a){t.loading=!1,200==a.data.code&&(t.payData=a.data.form,t.$nextTick(function(){document.forms[0].submit()}))},function(t){console.log(t)}):/Bestpay/.test(window.navigator.userAgent)&&v()({url:t.host+"/leagoo-health-api/api/pay/telecomOrder",method:"post",data:{orderId:t.orderId}}).then(function(a){t.loading=!1,200==a.data.code&&(BestpayHtml5.config(),t.getProductNo(a.data.data))},function(t){console.log(t)})},getProductNo:function(t){var a=this;BestpayHtml5.User.getProductNo({},function(e){a.doBastpay(t,e.productNo)},function(t){console.log(t)},function(t){console.log(t)})},doBastpay:function(t,a){alert(f()(t)),alert(f()(a));var e={INSTITUTIONCODE:t.merchanttd,INSTITUTIONTYPE:"MERCHANT",SIGNTYPE:"CA",SIGN:t.sign,SERVICE:"mobile.security.pay",MERCHANTID:t.merchanttd,SUBMERCHANTID:"deprecated",BACKMERCHANTURL:"deprecated",ORDERSEQ:t.tradeprodNo,ORDERREQTRANSEQ:t.orderId,TRADENO:t.tradeNo,ORDERTIME:"deprecated",ORDERVALIDITYTIME:"deprecated",ORDERAMOUNT:this.orderInfo.paySum,CURTYPE:"156",PRODUCTID:"04",PRODUCTDESC:"领歌云康设备端支付",PRODUCTAMOUNT:this.orderInfo.paySum,ATTACHAMOUNT:"0.00",BUSITYPE:"04",SUBJECT:"领歌云康设备端支付",ACCOUNTID:a},n=this;alert(f()(e)),BestpayHtml5.Payment.pay(e,function(){alert("拉起成功！11111111"),n.$router.replace({path:"/success"})},function(t){alert("拉起失败！22222222"+f()(t)),n.$router.replace({path:"/error"})})},getData:function(t){var a=this;v()({url:a.host+"/leagoo-health-api/api/order/orderDetail",method:"post",data:{orderId:a.orderId}}).then(function(e){200==e.data.code?(console.log(e.data.code),a.orderInfo=e.data.data,t&&a.toPay()):a.noDataText="暂无订单信息"},function(t){console.log(t)})},status:function(){var t=this;v()({url:t.host+"/leagoo-health-api/api/order/checkOrderState",method:"post",data:{orderId:t.orderId}}).then(function(a){console.log(a),200==a.data.code&&(console.log("订单已成功"+a),t.getData(!0)),30002==a.data.code&&(alert("订单已失效,请重新扫码二维码支付"),_.a.closeWindow())}).catch(function(t){alert("订单已取消"),_.a.closeWindow()})}}},I={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("div",{staticStyle:{display:"none"},domProps:{innerHTML:t._s(t.payData)}}),t._v(" "),n("mu-carousel",{staticClass:"banner",attrs:{"hide-controls":!0,"hide-indicators":!0}},[n("mu-carousel-item",[n("img",{attrs:{src:e("yoqB"),width:"100%"}})]),t._v(" "),n("mu-carousel-item",[n("img",{attrs:{src:e("22ps"),width:"100%"}})]),t._v(" "),n("mu-carousel-item",[n("img",{attrs:{src:e("22ps"),width:"100%"}})])],1),t._v(" "),t.orderInfo.productList.length>0?n("div",{staticClass:"list"},t._l(t.orderInfo.productList,function(a,e){return n("div",{staticClass:"item"},[n("div",{staticClass:"ix"},[n("img",{staticClass:"ixs",attrs:{src:a.img}})]),t._v(" "),n("div",{staticClass:"explain"},[n("p",[t._v(t._s(a.name))]),t._v(" "),n("p",{staticStyle:{margin:"10px 0"}},[n("span",{staticClass:"pd_left4"},[t._v("规")]),t._v(" "),n("span",[t._v("格: ")]),t._v(t._s(a.spec))]),t._v(" "),n("div",{staticClass:"price"},[n("span",{staticClass:"f_16"},[t._v("¥")]),t._v(" "+t._s(a.dealSum))])]),t._v(" "),n("div",{staticClass:"price-num"},[n("div",{staticClass:"num"},[t._v("×"+t._s(a.count)+t._s(a.unit))])])])}),0):n("div",{staticClass:"no-data"},[t._v(t._s(t.noDataText))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"discounts"},[n("div",{staticClass:"discounts_hd"},[t._v("优惠券：")]),t._v(" "),n("div",{staticClass:"discounts_bd"},[t._v("暂无可用优惠券")])]),t._v(" "),n("div",{staticClass:"payment"},[n("div",{staticClass:"info"},[n("div",[n("span",{staticClass:"f_36"},[t._v(" ¥ "+t._s(t.orderInfo.paySum))]),t._v(" "),n("span",[t._v("(优惠金额：¥"+t._s(t.orderInfo.reducedSum)+")")])])]),t._v(" "),n("mu-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"data-mu-loading-size":"24","data-mu-loading-color":"#4caf50"},on:{click:function(a){t.status()}}},[t._v("确认付款")])],1)],1)},staticRenderFns:[]};var C=e("VU/8")(w,I,!1,function(t){e("yG6i")},"data-v-c262f6e6",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"img-w"},[a("img",{attrs:{src:e("mzrL")}})]),this._v(" "),a("p",{staticClass:"title"},[this._v("支付成功")]),this._v(" "),a("p",{staticClass:"content"},[this._v("请在售货机取货口取走您的商品！")])])}]};var T=e("VU/8")({data:function(){return{}},created:function(){},mounted:function(){},updated:function(){},methods:{}},y,!1,function(t){e("SDxU")},"data-v-062a83bd",null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"img-w"},[a("img",{attrs:{src:e("3xxH")}})]),this._v(" "),a("p",{staticClass:"title"},[this._v("支付失败")]),this._v(" "),a("p",{staticClass:"content"},[this._v("请重新扫码支付！")])])}]};var E=e("VU/8")({data:function(){return{}},created:function(){},mounted:function(){},updated:function(){},methods:{}},x,!1,function(t){e("sSzg")},"data-v-529da260",null).exports,S={data:function(){return{host:"http://leagoohealth.com:18080",userInfo:"",loading:!1,disabled:!1,code:"",username:"",bindText:"绑定授权"}},created:function(){if(3==window.location.href.split("?").length){this.code=window.location.href.split("?")[1].split("#")[0].split("&")[0].split("=")[1],this.username=window.location.href.split("?")[2].split("=")[1];var t=this;v()({url:t.host+"/leagoo-health-manager/wechatuserinfo/getHeadImg",method:"post",data:{username:t.username,code:t.code}}).then(function(a){200==a.data.code?t.userInfo=a.data.data:alert(a.data.msg)},function(t){console.log(t)})}else window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbba4b3d497457d6b&redirect_uri=http%3a%2f%2fwww.leagoohealth.com%2fwxdd%2fpay%2f%23%2fbind?username="+this.$route.query.username+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect")},mounted:function(){},updated:function(){},methods:{doBind:function(){var t=this;t.loading=!0,v()({url:t.host+"/leagoo-health-manager/wechatuserinfo/binding",method:"post",data:{username:t.username,openid:t.userInfo.openid}}).then(function(a){t.loading=!1,200==a.data.code?(t.bindText="绑定成功",t.disabled=!0):t.bindText="绑定失败"},function(t){console.log(t)})}}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.userInfo.headimgurl}})]),t._v(" "),e("div",{staticClass:"name"},[t._v(t._s(t.userInfo.nickname))]),t._v(" "),e("div",{staticClass:"title"},[t._v("绑定微信账号")]),t._v(" "),e("div",{staticClass:"btn-w"},[e("mu-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"full-width":"",color:"success","data-mu-loading-size":"24","data-mu-loading-color":"#4caf50",disabled:t.disabled},on:{click:t.doBind}},[t._v(t._s(t.bindText))])],1)])},staticRenderFns:[]};var D=e("VU/8")(S,b,!1,function(t){e("DLge")},"data-v-734fb89c",null).exports;c.a.use(p.a);var A=new p.a({routes:[{path:"/index",name:"index",component:C},{path:"/success",name:"success",component:T},{path:"/error",name:"error",component:E},{path:"/bind",name:"bind",component:D},{path:"*",redirect:"/index"}]}),N=(e("68O8"),e("k84x"),e("uEvk"),e("0Y+k"),e("1kwf")),R=e("+nBf"),O=e.n(R);c.a.use(d.a),c.a.use(s.a),c.a.use(N.a),c.a.use(O.a),c.a.use(o.a),c.a.config.productionTip=!1,new c.a({el:"#app",router:A,components:{App:l},template:"<App/>"})},SDxU:function(t,a){},"i+Ai":function(t,a){},k84x:function(t,a){},kLMm:function(t,a){},"m/7z":function(t,a){},mDNE:function(t,a){},mhXF:function(t,a){},mzrL:function(t,a,e){t.exports=e.p+"img/success.ba978bf.png"},pCZj:function(t,a){},sSzg:function(t,a){},uEvk:function(t,a){},uPa8:function(t,a){},yG6i:function(t,a){},yoqB:function(t,a,e){t.exports=e.p+"img/lunbo1.54aa91d.png"}},["NHnr"]);
//# sourceMappingURL=app.b43371121be00eb7fc5a.js.map