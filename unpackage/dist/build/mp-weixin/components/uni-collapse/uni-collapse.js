(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"315d":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=c},"3c76":function(n,t,e){"use strict";e.r(t);var c=e("315d"),u=e.n(c);for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);t["default"]=u.a},"7d44":function(n,t,e){"use strict";var c,u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return c})},a119:function(n,t,e){"use strict";var c=e("ffbf"),u=e.n(c);u.a},bf8f:function(n,t,e){"use strict";e.r(t);var c=e("7d44"),u=e("3c76");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);e("a119");var r,o=e("f0c5"),i=Object(o["a"])(u["default"],c["b"],c["c"],!1,null,"3d919f32",null,!1,c["a"],r);t["default"]=i.exports},ffbf:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bf8f"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
