(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"2ccb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},"45f9":function(t,e,n){"use strict";n.r(e);var u=n("8999"),a=n("67fe");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("cad5");var c,r=n("f0c5"),f=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"6ab12496",null,!1,u["a"],c);e["default"]=f.exports},"673b":function(t,e,n){},"67fe":function(t,e,n){"use strict";n.r(e);var u=n("2ccb"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a},8999:function(t,e,n){"use strict";var u,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return u})},cad5:function(t,e,n){"use strict";var u=n("673b"),a=n.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("45f9"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
