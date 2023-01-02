(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var f,g="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var l={a:!0},m={};try{m.__proto__=l;k=m.a;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var n=h,q=this||self,r=function(a,b){function c(){}c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.M=function(d,e,I){for(var x=Array(arguments.length-2),p=2;p<arguments.length;p++)x[p-2]=arguments[p];return b.prototype[e].apply(d,x)}};var t=function(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(u,Error);u.prototype.name="CustomError";var v=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])};r(v,u);v.prototype.name="AssertionError";var w=function(a,b,c){if(!a){var d="Assertion failed";if(b){d+=": "+b;var e=Array.prototype.slice.call(arguments,2)}throw new v(""+d,e||[]);}return a},y=function(a,b){throw new v("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var A=function(a,b){this.j=b===z?a:""};A.prototype.D=!0;A.prototype.C=function(){return this.j.toString()};A.prototype.toString=function(){return this.j.toString()};var B=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,z={};var C=[],D=function(a){a=C.indexOf(a);0<=a&&C.splice(a,1)};document.addEventListener("click",function(a){for(var b=0;b<C.length;b++)if(25>Math.abs(a.clientX-C[b].A)&&25>Math.abs(a.clientY-C[b].B)||25>Math.abs(a.screenX-C[b].J)&&25>Math.abs(a.screenY-C[b].K))C.splice(b,1),a.stopPropagation(),a.preventDefault()},!0);var E=function(){var a=HTMLElement.call(this)||this;a.u=0;a.v=0;a.i=null;a.m=null;a.h=null;a.l=null;a.o=a.F.bind(a);a.g=!0;return a},F=HTMLElement;E.prototype=g(F.prototype);
E.prototype.constructor=E;if(n)n(E,F);else for(var G in F)if("prototype"!=G)if(Object.defineProperties){var H=Object.getOwnPropertyDescriptor(F,G);H&&Object.defineProperty(E,G,H)}else E[G]=F[G];E.L=F.prototype;f=E.prototype;f.connectedCallback=function(){this.h||(this.i=this.s.bind(this),this.m=this.I.bind(this),this.h=this.H.bind(this),this.l=this.G.bind(this));this.addEventListener("click",this.i,!1);this.addEventListener("touchstart",this.m,!1);this.addEventListener("action",this.o,!1)};
f.disconnectedCallback=function(){this.removeEventListener("click",this.i,!1);this.removeEventListener("touchstart",this.m,!1);this.removeEventListener("action",this.o,!1)};f.s=function(a){this.g&&t("action",this,a);this.g=!0};f.I=function(a){this.addEventListener("touchmove",this.h,!1);this.addEventListener("touchend",this.l,!1);a=a.touches[0];this.u=a.clientX;this.v=a.clientY};
f.G=function(a){this.s(a);this.removeEventListener("touchmove",this.h,!1);this.removeEventListener("touchend",this.l,!1);a=a.changedTouches[0];a={A:a.clientX,B:a.clientY,J:a.screenX,K:a.screenY};C.push(a);setTimeout(D.bind(null,a),2500)};f.H=function(a){a=a.touches[0];this.g=this.g&&10>=Math.abs(this.u-a.clientX)&&10>=Math.abs(this.v-a.clientY)};
f.F=function(a){var b=this.getAttribute("exit-id"),c=this.getAttribute("product-index"),d=this.getAttribute("exit-override-url");d&&!t("tapareaexit",this,{"exit-id":b,url:d,"product-index":c,"action-event":a.detail}).detail.handled&&(d instanceof A?a=d:(a=d,a instanceof A||(a="object"==typeof a&&a.D?a.C():String(a),w(B.test(a),"%s does not match the safe URL pattern",a)||(a="about:invalid#zClosurez"),a=new A(a,z))),b=a,a=q.open,b instanceof A&&b.constructor===A?b=b.j:(c=typeof b,y("expected object of type SafeUrl, got '"+
b+"' of type "+("object"!=c?c:b?Array.isArray(b)?"array":c:"null")),b="type_error:SafeUrl"),a.call(q,b,""))};customElements.define("gwd-taparea",E);}).call(this);
