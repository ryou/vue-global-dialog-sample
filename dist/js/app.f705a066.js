(function(t){function e(e){for(var o,r,u=e[0],s=e[1],l=e[2],f=0,d=[];f<u.length;f++)r=u[f],i[r]&&d.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-global-dialog-sample/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"buttons"},[n("div",{staticClass:"buttons_button"},[n("Button",{on:{click:function(e){t.showDialog=!0}}},[t._v("一般的な方法")])],1),n("div",{staticClass:"buttons_button"},[n("Button",{on:{click:t.dialog}},[t._v("this.$dialogによる呼び出し")])],1)]),n("Dialog",{attrs:{title:"一般的な方法による呼び出し"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"Button",on:{click:function(e){return t.$emit("click")}}},[n("span",{staticClass:"Button_text"},[t._t("default")],2)])},u=[],s={name:"Button"},l=s,c=(n("ae37"),n("2877")),f=Object(c["a"])(l,r,u,!1,null,"72a60302",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":function(e){return t.$emit("afterLeave")}}},[t.showDialog?n("div",{staticClass:"Dialog"},[n("div",{staticClass:"Dialog_main"},[t.title.length>0?n("div",{staticClass:"Dialog_title"},[t._v(t._s(t.title))]):t._e(),t.message.length>0?n("div",{staticClass:"Dialog_message"},[t._v(t._s(t.message))]):t._e(),n("div",{staticClass:"Dialog_buttons"},[n("Button",{staticClass:"Dialog_button",on:{click:t.hide}},[t._v("OK")])],1)])]):t._e()])},h=[],g={name:"Dialog",components:{Button:d},data:function(){return{showDialog:!1}},props:{value:{type:Boolean,default:null},title:{type:String,default:""},message:{type:String,default:""}},watch:{value:function(t){this.showDialog!==t&&this.updateState(t)}},methods:{show:function(){this.$emit("input",!0),this.showDialog=!0},hide:function(){this.$emit("input",!1),this.showDialog=!1},updateState:function(t){t?this.show():this.hide()}},mounted:function(){null!==this.value&&this.updateState(this.value)}},v=g,m=(n("58ae"),Object(c["a"])(v,p,h,!1,null,"008880a5",null)),b=m.exports,_={name:"app",components:{Button:d,Dialog:b},data:function(){return{showDialog:!1}},methods:{dialog:function(){this.$dialog({title:"関数呼び出しによるDialog",message:"this.$alertから呼び出されました"}).then(function(){alert("ダイアログが閉じられました")})}}},w=_,y=(n("56d9"),Object(c["a"])(w,i,a,!1,null,"e4928e4c",null)),D=y.exports,$=n("795b"),O=n.n($),C=function(t){return new O.a(function(e){var n=document.createElement("div");document.body.appendChild(n);var i=new o["a"]({el:n,render:function(n){return n(b,{ref:"dialog",props:t,on:{afterLeave:function(){i.$destroy(),i.$el.remove(),i=null,e()}}})},mounted:function(){this.$refs.dialog.show()}})})},j={install:function(t){t.prototype.$dialog=function(t){return C(t)}}};n("f5df");o["a"].config.productionTip=!1,o["a"].use(j),new o["a"]({render:function(t){return t(D)}}).$mount("#app")},"56d9":function(t,e,n){"use strict";var o=n("932c"),i=n.n(o);i.a},"58ae":function(t,e,n){"use strict";var o=n("9a60"),i=n.n(o);i.a},"932c":function(t,e,n){},9780:function(t,e,n){},"9a60":function(t,e,n){},ae37:function(t,e,n){"use strict";var o=n("9780"),i=n.n(o);i.a}});
//# sourceMappingURL=app.f705a066.js.map