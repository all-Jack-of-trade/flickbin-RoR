;(function(){
  "use strict";function _instanceof(t,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](t):t instanceof n}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,n){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define("uikit",n):(t=t||self).UIkit=n()}(void 0,function(){function p(e,r){return function(t){var n=arguments.length;return n?1<n?e.apply(r,arguments):e.call(r,t):e.call(r)}}var n=Object.prototype,e=n.hasOwnProperty;function c(t,n){return e.call(t,n)}var r={},i=/([a-z\d])([A-Z])/g;function v(t){return t in r||(r[t]=t.replace(i,"$1-$2").toLowerCase()),r[t]}var o=/-(\w)/g;function m(t){return t.replace(o,u)}function u(t,n){return n?n.toUpperCase():""}function a(t){return t.length?u(0,t.charAt(0))+t.slice(1):""}var t=String.prototype,s=t.startsWith||function(t){return 0===this.lastIndexOf(t,0)};function y(t,n){return s.call(t,n)}var f=t.endsWith||function(t){return this.substr(-t.length)===t};function l(t,n){return f.call(t,n)}var d=function(t){return~this.indexOf(t)},h=t.includes||d,g=Array.prototype.includes||d;function b(t,n){return t&&(S(t)?h:g).call(t,n)}var w=Array.isArray;function _(t){return"function"==typeof t}function x(t){return null!==t&&"object"===_typeof(t)}function E(t){return x(t)&&Object.getPrototypeOf(t)===n}function $(t){return x(t)&&t===t.window}function C(t){return x(t)&&9===t.nodeType}function N(t){return x(t)&&!!t.jquery}function O(t){return _instanceof(t,Node)||x(t)&&1<=t.nodeType}var T=n.toString;function k(t){return T.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)}function M(t){return"boolean"==typeof t}function S(t){return"string"==typeof t}function j(t){return"number"==typeof t}function I(t){return j(t)||S(t)&&!isNaN(t-parseFloat(t))}function A(t){return void 0===t}function D(t){return M(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function L(t){var n=Number(t);return!isNaN(n)&&n}function P(t){return parseFloat(t)||0}function F(t){return O(t)||$(t)||C(t)?t:k(t)||N(t)?t[0]:w(t)?F(t[0]):null}var H=Array.prototype;function V(t){return O(t)?[t]:k(t)?H.slice.call(t):w(t)?t.map(F).filter(Boolean):N(t)?t.toArray():[]}function W(t){return w(t)?t:S(t)?t.split(/,(?![^(]*\))/).map(function(t){return I(t)?L(t):D(t.trim())}):[t]}function R(t,e){return t===e||x(t)&&x(e)&&Object.keys(t).length===Object.keys(e).length&&q(t,function(t,n){return t===e[n]})}var B=Object.assign||function(t){for(var n=[],e=arguments.length-1;0<e--;)n[e]=arguments[e+1];t=Object(t);for(var r=0;r<n.length;r++){var i=n[r];if(null!==i)for(var o in i)c(i,o)&&(t[o]=i[o])}return t};function q(t,n){for(var e in t)if(!1===n(t[e],e))return!1;return!0}function z(t,i){return t.sort(function(t,n){var e=t[i];void 0===e&&(e=0);var r=n[i];return void 0===r&&(r=0),r<e?1:e<r?-1:0})}function U(t,n,e){return void 0===n&&(n=0),void 0===e&&(e=1),Math.min(Math.max(L(t)||0,n),e)}function Y(){}function X(t,n){return t.left<n.right&&t.right>n.left&&t.top<n.bottom&&t.bottom>n.top}function J(t,n){return t.x<=n.right&&t.x>=n.left&&t.y<=n.bottom&&t.y>=n.top}var G={ratio:function(t,n,e){var r,i="width"===n?"height":"width";return(r={})[i]=t[n]?Math.round(e*t[i]/t[n]):t[i],r[n]=e,r},contain:function(e,r){var i=this;return q(e=B({},e),function(t,n){return e=e[n]>r[n]?i.ratio(e,n,r[n]):e}),e},cover:function(e,r){var i=this;return q(e=this.contain(e,r),function(t,n){return e=e[n]<r[n]?i.ratio(e,n,r[n]):e}),e}};function Q(t,n,e){if(x(n))for(var r in n)Q(t,r,n[r]);else{if(A(e))return(t=F(t))&&t.getAttribute(n);V(t).forEach(function(t){_(e)&&(e=e.call(t,Q(t,n))),null===e?K(t,n):t.setAttribute(n,e)})}}function Z(t,n){return V(t).some(function(t){return t.hasAttribute(n)})}function K(t,n){t=V(t),n.split(" ").forEach(function(n){return t.forEach(function(t){return t.removeAttribute(n)})})}function tt(t,n){for(var e=0,r=[n,"data-"+n];e<r.length;e++)if(Z(t,r[e]))return Q(t,r[e])}function nt(t,n){return void 0===n&&(n=document),at(t)||C(n)?n:n.ownerDocument}function et(t,n){return F(it(t,n,"querySelector"))}function rt(t,n){return V(it(t,n,"querySelectorAll"))}function it(t,u,n){if(void 0===u&&(u=document),!t||!S(t))return null;var a;at(t=t.replace(ut,"$1 *"))&&(a=[],t=t.split(",").map(function(t,n){var e=u;if("!"===(t=t.trim())[0]){var r=t.substr(1).trim().split(" ");e=dt(u.parentNode,r[0]),t=r.slice(1).join(" ").trim()}if("-"===t[0]){var i=t.substr(1).trim().split(" "),o=(e||u).previousElementSibling;e=ft(o,t.substr(1))?o:null,t=i.slice(1).join(" ")}return e?(e.id||(e.id="uk-"+Date.now()+n,a.push(function(){return K(e,"id")})),"#"+pt(e.id)+" "+t):null}).filter(Boolean).join(","),u=document);try{return u[n](t)}catch(t){return null}finally{a&&a.forEach(function(t){return t()})}}var ot=/(^|,)\s*[!>+~-]/,ut=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g;function at(t){return S(t)&&t.match(ot)}var st=Element.prototype,ct=st.matches||st.webkitMatchesSelector||st.msMatchesSelector;function ft(t,n){return V(t).some(function(t){return ct.call(t,n)})}var lt=st.closest||function(t){var n=this;do{if(ft(n,t))return n;n=n.parentNode}while(n&&1===n.nodeType)};function dt(t,n){return y(n,">")&&(n=n.slice(1)),O(t)?t.parentNode&&lt.call(t,n):V(t).map(function(t){return dt(t,n)}).filter(Boolean)}var ht=window.CSS&&CSS.escape||function(t){return t.replace(/([^\x7f-\uFFFF\w-])/g,function(t){return"\\"+t})};function pt(t){return S(t)?ht.call(null,t):""}var vt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function mt(t){return V(t).some(function(t){return t.offsetWidth||t.offsetHeight||t.getClientRects().length})}var yt="input,select,textarea,button";function gt(t,n){return S(n)?ft(t,n)||dt(t,n):t===n||(C(n)?n.documentElement:F(n)).contains(F(t))}var bt=/msie|trident/i.test(window.navigator.userAgent),wt="rtl"===Q(document.documentElement,"dir"),_t="ontouchstart"in window,xt=window.PointerEvent,Et=_t||window.DocumentTouch&&_instanceof(document,DocumentTouch)||navigator.maxTouchPoints,$t=xt?"pointerdown":_t?"touchstart":"mousedown",Ct=xt?"pointermove":_t?"touchmove":"mousemove",Nt=xt?"pointerup":_t?"touchend":"mouseup",Ot=xt?"pointerenter":_t?"":"mouseenter",Tt=xt?"pointerleave":_t?"":"mouseleave",kt=xt?"pointercancel":"touchcancel";function Mt(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var e,r=Dt(t),i=r[0],o=r[1],u=r[2],a=r[3],s=r[4];return i=Ft(i),u&&(a=function(t,r,i){var o=this;return function(e){t.forEach(function(t){var n=">"===r[0]?rt(r,t).reverse().filter(function(t){return gt(e.target,t)})[0]:dt(e.target,r);n&&(e.delegate=t,e.current=n,i.call(o,e))})}}(i,u,a)),1<a.length&&(e=a,a=function(t){return w(t.detail)?e.apply(void 0,[t].concat(t.detail)):e(t)}),o.split(" ").forEach(function(n){return i.forEach(function(t){return t.addEventListener(n,a,s)})}),function(){return St(i,o,a,s)}}function St(t,n,e,r){void 0===r&&(r=!1),t=Ft(t),n.split(" ").forEach(function(n){return t.forEach(function(t){return t.removeEventListener(n,e,r)})})}function jt(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var e=Dt(t),r=e[0],i=e[1],o=e[2],u=e[3],a=e[4],s=e[5],c=Mt(r,i,o,function(t){var n=!s||s(t);n&&(c(),u(t,n))},a);return c}function It(t,e,r){return Ft(t).reduce(function(t,n){return t&&n.dispatchEvent(At(e,!0,!0,r))},!0)}function At(t,n,e,r){if(void 0===n&&(n=!0),void 0===e&&(e=!1),S(t)){var i=document.createEvent("CustomEvent");i.initCustomEvent(t,n,e,r),t=i}return t}function Dt(t){return _(t[2])&&t.splice(2,0,!1),t}function Lt(t){return t&&"addEventListener"in t}function Pt(t){return Lt(t)?t:F(t)}function Ft(t){return w(t)?t.map(Pt).filter(Boolean):S(t)?rt(t):Lt(t)?[t]:V(t)}var Ht="Promise"in window?window.Promise:Rt,Vt=2,Wt="setImmediate"in window?setImmediate:setTimeout;function Rt(t){this.state=Vt,this.value=void 0,this.deferred=[];var n=this;try{t(function(t){n.resolve(t)},function(t){n.reject(t)})}catch(t){n.reject(t)}}Rt.reject=function(e){return new Rt(function(t,n){n(e)})},Rt.resolve=function(e){return new Rt(function(t,n){t(e)})},Rt.all=function(u){return new Rt(function(e,t){var r=[],i=0;function n(n){return function(t){r[n]=t,(i+=1)===u.length&&e(r)}}0===u.length&&e(r);for(var o=0;o<u.length;o+=1)Rt.resolve(u[o]).then(n(o),t)})},Rt.race=function(r){return new Rt(function(t,n){for(var e=0;e<r.length;e+=1)Rt.resolve(r[e]).then(t,n)})};var Bt=Rt.prototype;function qt(t,n){return n?V(t).indexOf(F(n)):V((t=F(t))&&t.parentNode.children).indexOf(t)}function zt(t){return(t=en(t)).innerHTML="",t}function Ut(t,n){return t=en(t),A(n)?t.innerHTML:Yt(t.hasChildNodes()?zt(t):t,n)}function Yt(n,t){return n=en(n),Jt(t,function(t){return n.appendChild(t)})}function Xt(n,t){return n=en(n),Jt(t,function(t){return n.parentNode.insertBefore(t,n)})}function Jt(t,n){return(t=S(t)?tn(t):t)?"length"in t?V(t).map(n):n(t):null}function Gt(t){V(t).map(function(t){return t.parentNode&&t.parentNode.removeChild(t)})}function Qt(t,n){for(n=F(Xt(t,n));n.firstChild;)n=n.firstChild;return Yt(n,t),n}Bt.resolve=function(t){var n=this;if(n.state===Vt){if(t===n)throw new TypeError("Promise settled with itself.");var e=!1;try{var r=t&&t.then;if(null!==t&&x(t)&&_(r))return void r.call(t,function(t){e||n.resolve(t),e=!0},function(t){e||n.reject(t),e=!0})}catch(t){return void(e||n.reject(t))}n.state=0,n.value=t,n.notify()}},Bt.reject=function(t){var n=this;if(n.state===Vt){if(t===n)throw new TypeError("Promise settled with itself.");n.state=1,n.value=t,n.notify()}},Bt.notify=function(){var o=this;Wt(function(){if(o.state!==Vt)for(;o.deferred.length;){var t=o.deferred.shift(),n=t[0],e=t[1],r=t[2],i=t[3];try{0===o.state?_(n)?r(n.call(void 0,o.value)):r(o.value):1===o.state&&(_(e)?r(e.call(void 0,o.value)):i(o.value))}catch(t){i(t)}}})},Bt.then=function(e,r){var i=this;return new Rt(function(t,n){i.deferred.push([e,r,t,n]),i.notify()})},Bt.catch=function(t){return this.then(void 0,t)};var Zt=/^\s*<(\w+|!)[^>]*>/,Kt=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function tn(t){var n=Kt.exec(t);if(n)return document.createElement(n[1]);var e=document.createElement("div");return Zt.test(t)?e.insertAdjacentHTML("beforeend",t.trim()):e.textContent=t,1<e.childNodes.length?V(e.childNodes):e.firstChild}function nn(t,n){if(t&&1===t.nodeType)for(n(t),t=t.firstElementChild;t;)nn(t,n),t=t.nextElementSibling}function en(t,n){return S(t)?on(t)?F(tn(t)):et(t,n):F(t)}function rn(t,n){return S(t)?on(t)?V(tn(t)):rt(t,n):V(t)}function on(t){return"<"===t[0]||t.match(/^\s*</)}function un(t){for(var n=[],e=arguments.length-1;0<e--;)n[e]=arguments[e+1];fn(t,n,"add")}function an(t){for(var n=[],e=arguments.length-1;0<e--;)n[e]=arguments[e+1];fn(t,n,"remove")}function sn(t,n){Q(t,"class",function(t){return(t||"").replace(new RegExp("\\b"+n+"\\b","g"),"")})}function cn(t,n){return n&&V(t).some(function(t){return t.classList.contains(n.split(" ")[0])})}function fn(t,e,r){(e=ln(e).filter(Boolean)).length&&V(t).forEach(function(t){var n=t.classList;hn.Multiple?n[r].apply(n,e):e.forEach(function(t){return n[r](t)})})}function ln(t){return t.reduce(function(t,n){return t.concat.call(t,S(n)&&b(n," ")?n.trim().split(" "):n)},[])}var dn,hn={};(dn=document.createElement("_").classList)&&(dn.add("a","b"),dn.toggle("c",!1),hn.Multiple=dn.contains("b"),hn.Force=!dn.contains("c"));var pn={"animation-iteration-count":!(dn=null),"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,widows:!0,"z-index":!0,zoom:!0};function vn(t,n,i){return V(t).map(function(e){if(S(n)){if(n=wn(n),A(i))return yn(e,n);i||j(i)?e.style[n]=I(i)&&!pn[n]?i+"px":i:e.style.removeProperty(n)}else{if(w(n)){var r=mn(e);return n.reduce(function(t,n){return t[n]=r[wn(n)],t},{})}x(n)&&q(n,function(t,n){return vn(e,n,t)})}return e})[0]}function mn(t,n){return(t=F(t)).ownerDocument.defaultView.getComputedStyle(t,n)}function yn(t,n,e){return mn(t,e)[n]}var gn={};var bn={};function wn(t){var n=bn[t];return n||(n=bn[t]=function(t){if((t=v(t))in xn)return t;var n,e=_n.length;for(;e--;)if((n="-"+_n[e]+"-"+t)in xn)return n}(t)||t),n}var _n=["webkit","moz","ms"],xn=document.createElement("_").style;function En(t,u,a,s){return void 0===a&&(a=400),void 0===s&&(s="linear"),Ht.all(V(t).map(function(o){return new Ht(function(e,r){for(var t in u){var n=vn(o,t);""===n&&vn(o,t,n)}var i=setTimeout(function(){return It(o,"transitionend")},a);jt(o,"transitionend transitioncanceled",function(t){var n=t.type;clearTimeout(i),an(o,"uk-transition"),vn(o,{"transition-property":"","transition-duration":"","transition-timing-function":""}),"transitioncanceled"===n?r():e()},!1,function(t){var n=t.target;return o===n}),un(o,"uk-transition"),vn(o,B({"transition-property":Object.keys(u).map(wn).join(","),"transition-duration":a+"ms","transition-timing-function":s},u))})}))}var $n={start:En,stop:function(t){return It(t,"transitionend"),Ht.resolve()},cancel:function(t){It(t,"transitioncanceled")},inProgress:function(t){return cn(t,"uk-transition")}},Cn="uk-animation-",Nn="uk-cancel-animation";function On(t,n,e,a,s){var c=arguments;return void 0===e&&(e=200),Ht.all(V(t).map(function(u){return new Ht(function(r,i){if(cn(u,Nn))requestAnimationFrame(function(){return Ht.resolve().then(function(){return On.apply(void 0,c).then(r,i)})});else{var t=n+" "+Cn+(s?"leave":"enter");y(n,Cn)&&(a&&(t+=" uk-transform-origin-"+a),s&&(t+=" "+Cn+"reverse")),o(),jt(u,"animationend animationcancel",function(t){var n=t.type,e=!1;"animationcancel"===n?(i(),o()):(r(),Ht.resolve().then(function(){e=!0,o()})),requestAnimationFrame(function(){e||(un(u,Nn),requestAnimationFrame(function(){return an(u,Nn)}))})},!1,function(t){var n=t.target;return u===n}),vn(u,"animationDuration",e+"ms"),un(u,t)}function o(){vn(u,"animationDuration",""),sn(u,Cn+"\\S*")}})}))}var Tn=new RegExp(Cn+"(enter|leave)"),kn={in:function(t,n,e,r){return On(t,n,e,r,!1)},out:function(t,n,e,r){return On(t,n,e,r,!0)},inProgress:function(t){return Tn.test(Q(t,"class"))},cancel:function(t){It(t,"animationcancel")}},Mn={width:["x","left","right"],height:["y","top","bottom"]};function Sn(e,r){if(e=F(e),!r)return jn(e);var i=Sn(e),o=vn(e,"position");["left","top"].forEach(function(t){if(t in r){var n=vn(e,t);vn(e,t,r[t]-i[t]+P("absolute"===o&&"auto"===n?In(e)[t]:n))}})}function jn(t){var n,e,r=Bn(t=F(t)),i=r.pageYOffset,o=r.pageXOffset;if($(t)){var u=t.innerHeight,a=t.innerWidth;return{top:i,left:o,height:u,width:a,bottom:i+u,right:o+a}}mt(t)||(n=Q(t,"style"),e=Q(t,"hidden"),Q(t,{style:(n||"")+";display:block !important;",hidden:null}));var s=t.getBoundingClientRect();return A(n)||Q(t,{style:n,hidden:e}),{height:s.height,width:s.width,top:s.top+i,left:s.left+o,bottom:s.bottom+i,right:s.right+o}}function In(r){var i=(r=F(r)).offsetParent||qn(r).documentElement,o=Sn(i),t=["top","left"].reduce(function(t,n){var e=a(n);return t[n]-=o[n]+P(vn(r,"margin"+e))+P(vn(i,"border"+e+"Width")),t},Sn(r));return{top:t.top,left:t.left}}var An=Ln("height"),Dn=Ln("width");function Ln(r){var i=a(r);return function(t,n){if(t=F(t),A(n)){if($(t))return t["inner"+i];if(C(t)){var e=t.documentElement;return Math.max(e["offset"+i],e["scroll"+i])}return(n="auto"===(n=vn(t,r))?t["offset"+i]:P(n)||0)-Pn(r,t)}vn(t,r,n||0===n?+n+Pn(r,t)+"px":"")}}function Pn(t,e,n){return void 0===n&&(n="border-box"),vn(e,"boxSizing")===n?Mn[t].slice(1).map(a).reduce(function(t,n){return t+P(vn(e,"padding"+n))+P(vn(e,"border"+n+"Width"))},0):0}function Fn(o,u,a,s){q(Mn,function(t,n){var e=t[0],r=t[1],i=t[2];u[e]===i?o[r]+=a[n]*s:"center"===u[e]&&(o[r]+=a[n]*s/2)})}function Hn(t){var n=/left|center|right/,e=/top|center|bottom/;return 1===(t=(t||"").split(" ")).length&&(t=n.test(t[0])?t.concat(["center"]):e.test(t[0])?["center"].concat(t):["center","center"]),{x:n.test(t[0])?t[0]:"center",y:e.test(t[1])?t[1]:"center"}}function Vn(t,n,e){var r=(t||"").split(" "),i=r[0],o=r[1];return{x:i?P(i)*(l(i,"%")?n/100:1):0,y:o?P(o)*(l(o,"%")?e/100:1):0}}function Wn(t,n,e){if(void 0===n&&(n=0),void 0===e&&(e=0),!mt(t))return!1;var r=Bn(t=F(t)),i=t.getBoundingClientRect(),o={top:-n,left:-e,bottom:n+An(r),right:e+Dn(r)};return X(i,o)||J({x:i.left,y:i.top},o)}function Rn(t){var n=[0,0];do{if(n[0]+=t.offsetTop,n[1]+=t.offsetLeft,"fixed"===vn(t,"position")){var e=Bn(t);return n[0]+=e.pageYOffset,n[1]+=e.pageXOffset,n}}while(t=t.offsetParent);return n}function Bn(t){return $(t)?t:qn(t).defaultView}function qn(t){return F(t).ownerDocument}var zn={reads:[],writes:[],read:function(t){return this.reads.push(t),Un(),t},write:function(t){return this.writes.push(t),Un(),t},clear:function(t){return Xn(this.reads,t)||Xn(this.writes,t)},flush:function(){Yn(this.reads),Yn(this.writes.splice(0,this.writes.length)),this.scheduled=!1,(this.reads.length||this.writes.length)&&Un()}};function Un(){zn.scheduled||(zn.scheduled=!0,requestAnimationFrame(zn.flush.bind(zn)))}function Yn(t){for(var n;n=t.shift();)n()}function Xn(t,n){var e=t.indexOf(n);return!!~e&&!!t.splice(e,1)}function Jn(){}function Gn(t,n){return(n.y-t.y)/(n.x-t.x)}Jn.prototype={positions:[],position:null,init:function(){var r=this;this.positions=[],this.position=null;var i=!1;this.unbind=Mt(document,"mousemove",function(e){i||(setTimeout(function(){var t=Date.now(),n=r.positions.length;n&&100<t-r.positions[n-1].time&&r.positions.splice(0,n),r.positions.push({time:t,x:e.pageX,y:e.pageY}),5<r.positions.length&&r.positions.shift(),i=!1},5),i=!0)})},cancel:function(){this.unbind&&this.unbind()},movesTo:function(t){if(this.positions.length<2)return!1;var n=Sn(t),e=this.positions[this.positions.length-1],r=this.positions[0];if(n.left<=e.x&&e.x<=n.right&&n.top<=e.y&&e.y<=n.bottom)return!1;var i=[[{x:n.left,y:n.top},{x:n.right,y:n.bottom}],[{x:n.right,y:n.top},{x:n.left,y:n.bottom}]];return n.right<=e.x||(n.left>=e.x?(i[0].reverse(),i[1].reverse()):n.bottom<=e.y?i[0].reverse():n.top>=e.y&&i[1].reverse()),!!i.reduce(function(t,n){return t+(Gn(r,n[0])<Gn(e,n[0])&&Gn(r,n[1])>Gn(e,n[1]))},0)}};var Qn={};function Zn(t,n,e){return Qn.computed(_(t)?t.call(e,e):t,_(n)?n.call(e,e):n)}function Kn(t,n){return t=t&&!w(t)?[t]:t,n?t?t.concat(n):w(n)?n:[n]:t}function te(n,e,r){var i={};if(_(e)&&(e=e.options),e.extends&&(n=te(n,e.extends,r)),e.mixins)for(var t=0,o=e.mixins.length;t<o;t++)n=te(n,e.mixins[t],r);for(var u in n)s(u);for(var a in e)c(n,a)||s(a);function s(t){i[t]=(Qn[t]||function(t,n){return A(n)?t:n})(n[t],e[t],r)}return i}function ne(t,n){var e;void 0===n&&(n=[]);try{return t?y(t,"{")?JSON.parse(t):n.length&&!b(t,":")?((e={})[n[0]]=t,e):t.split(";").reduce(function(t,n){var e=n.split(/:(.*)/),r=e[0],i=e[1];return r&&!A(i)&&(t[r.trim()]=i.trim()),t},{}):{}}catch(t){return{}}}Qn.events=Qn.created=Qn.beforeConnect=Qn.connected=Qn.beforeDisconnect=Qn.disconnected=Qn.destroy=Kn,Qn.args=function(t,n){return Kn(n||t)},Qn.update=function(t,n){return z(Kn(t,_(n)?{read:n}:n),"order")},Qn.props=function(t,n){return w(n)&&(n=n.reduce(function(t,n){return t[n]=String,t},{})),Qn.methods(t,n)},Qn.computed=Qn.methods=function(t,n){return n?t?B({},t,n):n:t},Qn.data=function(n,e,t){return t?Zn(n,e,t):e?n?function(t){return Zn(n,e,t)}:e:n};var ee=0,re=function(t){this.id=++ee,this.el=F(t)};function ie(t,n){try{t.contentWindow.postMessage(JSON.stringify(B({event:"command"},n)),"*")}catch(t){}}re.prototype.isVideo=function(){return this.isYoutube()||this.isVimeo()||this.isHTML5()},re.prototype.isHTML5=function(){return"VIDEO"===this.el.tagName},re.prototype.isIFrame=function(){return"IFRAME"===this.el.tagName},re.prototype.isYoutube=function(){return this.isIFrame()&&!!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)},re.prototype.isVimeo=function(){return this.isIFrame()&&!!this.el.src.match(/vimeo\.com\/video\/.*/)},re.prototype.enableApi=function(){var n=this;if(this.ready)return this.ready;var e,i=this.isYoutube(),o=this.isVimeo();return i||o?this.ready=new Ht(function(t){var r;jt(n.el,"load",function(){if(i){var t=function(){return ie(n.el,{event:"listening",id:n.id})};e=setInterval(t,100),t()}}),(r=function(t){return i&&t.id===n.id&&"onReady"===t.event||o&&Number(t.player_id)===n.id},new Ht(function(e){jt(window,"message",function(t,n){return e(n)},!1,function(t){var n=t.data;if(n&&S(n)){try{n=JSON.parse(n)}catch(t){return}return n&&r(n)}})})).then(function(){t(),e&&clearInterval(e)}),Q(n.el,"src",n.el.src+(b(n.el.src,"?")?"&":"?")+(i?"enablejsapi=1":"api=1&player_id="+n.id))}):Ht.resolve()},re.prototype.play=function(){var t=this;if(this.isVideo())if(this.isIFrame())this.enableApi().then(function(){return ie(t.el,{func:"playVideo",method:"play"})});else if(this.isHTML5())try{var n=this.el.play();n&&n.catch(Y)}catch(t){}},re.prototype.pause=function(){var t=this;this.isVideo()&&(this.isIFrame()?this.enableApi().then(function(){return ie(t.el,{func:"pauseVideo",method:"pause"})}):this.isHTML5()&&this.el.pause())},re.prototype.mute=function(){var t=this;this.isVideo()&&(this.isIFrame()?this.enableApi().then(function(){return ie(t.el,{func:"mute",method:"setVolume",value:0})}):this.isHTML5()&&(this.el.muted=!0,Q(this.el,"muted","")))};var oe,ue,ae="IntersectionObserver"in window?window.IntersectionObserver:function(){function t(n,t){var e=this;void 0===t&&(t={});var r=t.rootMargin;void 0===r&&(r="0 0"),this.targets=[];var i,o=(r||"0 0").split(" ").map(P),u=o[0],a=o[1];this.offsetTop=u,this.offsetLeft=a,this.apply=function(){i||(i=requestAnimationFrame(function(){return setTimeout(function(){var t=e.takeRecords();t.length&&n(t,e),i=!1})}))},this.off=Mt(window,"scroll resize load",this.apply,{passive:!0,capture:!0})}return t.prototype.takeRecords=function(){var e=this;return this.targets.filter(function(t){var n=Wn(t.target,e.offsetTop,e.offsetLeft);if(null===t.isIntersecting||n^t.isIntersecting)return t.isIntersecting=n,!0})},t.prototype.observe=function(t){this.targets.push({target:t,isIntersecting:null}),this.apply()},t.prototype.disconnect=function(){this.targets=[],this.off()},t}(),se={};function ce(t){return"touch"===t.pointerType||t.touches||ue}function fe(t,n){void 0===n&&(n="client");var e=t.touches,r=t.changedTouches,i=e&&e[0]||r&&r[0]||t;return{x:i[n+"X"],y:i[n+"Y"]}}function le(t){return!(!y(t,"uk-")&&!y(t,"data-uk-"))&&m(t.replace("data-uk-","").replace("uk-",""))}Mt(document,$t,function(t){se.el&&(se={});var n=t.target,e=fe(t),r=e.x,i=e.y;se.el="tagName"in n?n:n.parentNode,se.x=r,se.y=i,ue=ce(t)}),Mt(document,Nt,function(t){var n=fe(t),i=n.x,o=n.y;se.el&&i&&100<Math.abs(se.x-i)||o&&100<Math.abs(se.y-o)?oe=setTimeout(function(){var t,n,e,r;se.el&&(It(se.el,"swipe"),It(se.el,"swipe"+(t=se.x,n=se.y,e=i,r=o,Math.abs(t-e)>=Math.abs(n-r)?0<t-e?"Left":"Right":0<n-r?"Up":"Down"))),se={}}):se={},setTimeout(function(){return ue=!1})}),Mt(document,kt,function(){oe&&clearTimeout(oe),oe=null,se={}});var de,he,pe,ve,me=function(t){this._init(t)};me.util=Object.freeze({ajax:function(u,a){return new Ht(function(t,n){var e=B({data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:Y,responseType:""},a);e.beforeSend(e);var r=e.xhr;for(var i in e)if(i in r)try{r[i]=e[i]}catch(t){}for(var o in r.open(e.method.toUpperCase(),u),e.headers)r.setRequestHeader(o,e.headers[o]);Mt(r,"load",function(){0===r.status||200<=r.status&&r.status<300||304===r.status?t(r):n(B(Error(r.statusText),{xhr:r,status:r.status}))}),Mt(r,"error",function(){return n(B(Error("Network Error"),{xhr:r}))}),Mt(r,"timeout",function(){return n(B(Error("Network Timeout"),{xhr:r}))}),r.send(e.data)})},getImage:function(r,i,o){return new Ht(function(t,n){var e=new Image;e.onerror=n,e.onload=function(){return t(e)},o&&(e.sizes=o),i&&(e.srcset=i),e.src=r})},transition:En,Transition:$n,animate:On,Animation:kn,attr:Q,hasAttr:Z,removeAttr:K,data:tt,addClass:un,removeClass:an,removeClasses:sn,replaceClass:function(t){for(var n=[],e=arguments.length-1;0<e--;)n[e]=arguments[e+1];n[0]&&an(t,n[0]),n[1]&&un(t,n[1])},hasClass:cn,toggleClass:function(t){for(var r=[],n=arguments.length-1;0<n--;)r[n]=arguments[n+1];if(r.length){var i=S((r=ln(r))[r.length-1])?[]:r.pop();r=r.filter(Boolean),V(t).forEach(function(t){for(var n=t.classList,e=0;e<r.length;e++)hn.Force?n.toggle.apply(n,[r[e]].concat(i)):n[(A(i)?!n.contains(r[e]):i)?"add":"remove"](r[e])})}},positionAt:function(t,n,f,l,d,e,r,i){f=Hn(f),l=Hn(l);var h={element:f,target:l};if(!t||!n)return h;var p=jn(t),v=jn(n),m=v;if(Fn(m,f,p,-1),Fn(m,l,v,1),d=Vn(d,p.width,p.height),e=Vn(e,v.width,v.height),d.x+=e.x,d.y+=e.y,m.left+=d.x,m.top+=d.y,r){var o=[jn(Bn(t))];i&&o.unshift(jn(i)),q(Mn,function(t,u){var a=t[0],s=t[1],c=t[2];(!0===r||b(r,a))&&o.some(function(r){var t=f[a]===s?-p[u]:f[a]===c?p[u]:0,n=l[a]===s?v[u]:l[a]===c?-v[u]:0;if(m[s]<r[s]||m[s]+p[u]>r[c]){var e=p[u]/2,i="center"===l[a]?-v[u]/2:0;return"center"===f[a]&&(o(e,i)||o(-e,-i))||o(t,n)}function o(n,t){var e=m[s]+n+t-2*d[a];if(e>=r[s]&&e+p[u]<=r[c])return m[s]=e,["element","target"].forEach(function(t){h[t][a]=n?h[t][a]===Mn[u][1]?Mn[u][2]:Mn[u][1]:h[t][a]}),!0}})})}return Sn(t,m),h},offset:Sn,position:In,height:An,width:Dn,boxModelAdjust:Pn,flipPosition:function(t){switch(t){case"left":return"right";case"right":return"left";case"top":return"bottom";case"bottom":return"top";default:return t}},isInView:Wn,scrolledOver:function(t,n){if(void 0===n&&(n=0),!mt(t))return 0;var e=Bn(t=F(t)),r=qn(t),i=t.offsetHeight+n,o=Rn(t)[0],u=An(e),a=u+Math.min(0,o-u),s=Math.max(0,u-(An(r)+n-(o+i)));return U((a+e.pageYOffset-o)/((a+(i-(s<u?s:0)))/100)/100)},scrollTop:function(t,n){if($(t=F(t))||C(t)){var e=Bn(t);(0,e.scrollTo)(e.pageXOffset,n)}else t.scrollTop=n},offsetPosition:Rn,ready:function(t){if("loading"===document.readyState)var n=Mt(document,"DOMContentLoaded",function(){n(),t()});else t()},index:qt,getIndex:function(t,n,e,r){void 0===e&&(e=0),void 0===r&&(r=!1);var i=(n=V(n)).length;return t=I(t)?L(t):"next"===t?e+1:"previous"===t?e-1:qt(n,t),r?U(t,0,i-1):(t%=i)<0?t+i:t},empty:zt,html:Ut,prepend:function(n,t){return(n=en(n)).hasChildNodes()?Jt(t,function(t){return n.insertBefore(t,n.firstChild)}):Yt(n,t)},append:Yt,before:Xt,after:function(n,t){return n=en(n),Jt(t,function(t){return n.nextSibling?Xt(n.nextSibling,t):Yt(n.parentNode,t)})},remove:Gt,wrapAll:Qt,wrapInner:function(t,n){return V(V(t).map(function(t){return t.hasChildNodes?Qt(V(t.childNodes),n):Yt(t,n)}))},unwrap:function(t){V(t).map(function(t){return t.parentNode}).filter(function(t,n,e){return e.indexOf(t)===n}).forEach(function(t){Xt(t,t.childNodes),Gt(t)})},fragment:tn,apply:nn,$:en,$$:rn,isIE:bt,isRtl:wt,hasTouch:Et,pointerDown:$t,pointerMove:Ct,pointerUp:Nt,pointerEnter:Ot,pointerLeave:Tt,pointerCancel:kt,on:Mt,off:St,once:jt,trigger:It,createEvent:At,toEventTargets:Ft,preventClick:function(){var n=setTimeout(jt(document,"click",function(t){t.preventDefault(),t.stopImmediatePropagation(),clearTimeout(n)},!0));It(document,kt)},fastdom:zn,isVoidElement:function(t){return V(t).some(function(t){return vt[t.tagName.toLowerCase()]})},isVisible:mt,selInput:yt,isInput:function(t){return V(t).some(function(t){return ft(t,yt)})},filter:function(t,n){return V(t).filter(function(t){return ft(t,n)})},within:gt,bind:p,hasOwn:c,hyphenate:v,camelize:m,ucfirst:a,startsWith:y,endsWith:l,includes:b,isArray:w,isFunction:_,isObject:x,isPlainObject:E,isWindow:$,isDocument:C,isJQuery:N,isNode:O,isNodeCollection:k,isBoolean:M,isString:S,isNumber:j,isNumeric:I,isUndefined:A,toBoolean:D,toNumber:L,toFloat:P,toNode:F,toNodes:V,toList:W,toMs:function(t){return t?l(t,"ms")?P(t):1e3*P(t):0},isEqual:R,swap:function(t,n,e){return t.replace(new RegExp(n+"|"+e,"mg"),function(t){return t===n?e:n})},assign:B,each:q,sortBy:z,clamp:U,noop:Y,intersectRect:X,pointInRect:J,Dimensions:G,MouseTracker:Jn,mergeOptions:te,parseOptions:ne,Player:re,Promise:Ht,Deferred:function(){var e=this;this.promise=new Ht(function(t,n){e.reject=n,e.resolve=t})},IntersectionObserver:ae,query:function(t,n){return F(t)||et(t,nt(t,n))},queryAll:function(t,n){var e=V(t);return e.length&&e||rt(t,nt(t,n))},find:et,findAll:rt,matches:ft,closest:dt,parents:function(t,n){for(var e=[],r=F(t).parentNode;r&&1===r.nodeType;)ft(r,n)&&e.push(r),r=r.parentNode;return e},escape:pt,css:vn,getStyles:mn,getStyle:yn,getCssVar:function(t){var n=document.documentElement;if(!bt)return mn(n).getPropertyValue("--uk-"+t);if(!(t in gn)){var e=Yt(n,document.createElement("div"));un(e,"uk-"+t),gn[t]=yn(e,"content",":before").replace(/^["'](.*)["']$/,"$1"),Gt(e)}return gn[t]},propName:wn,isTouch:ce,getPos:fe}),me.data="__uikit__",me.prefix="uk-",me.options={},function(e){var n,r=e.data;function i(t,n){if(t)for(var e in t)t[e]._connected&&t[e]._callUpdate(n)}e.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},e.mixin=function(t,n){(n=(S(n)?e.component(n):n)||this).options=te(n.options,t)},e.extend=function(t){t=t||{};var n=function(t){this._init(t)};return((n.prototype=Object.create(this.prototype)).constructor=n).options=te(this.options,t),n.super=this,n.extend=this.extend,n},e.update=function(t,n){(function t(n,e){n&&n!==document.body&&n.parentNode&&(t(n.parentNode,e),e(n.parentNode))})(t=t?F(t):document.body,function(t){return i(t[r],n)}),nn(t,function(t){return i(t[r],n)})},Object.defineProperty(e,"container",{get:function(){return n||document.body},set:function(t){n=en(t)}})}(me),(de=me).prototype._callHook=function(t){var n=this,e=this.$options[t];e&&e.forEach(function(t){return t.call(n)})},de.prototype._callConnected=function(){this._connected||(this._data={},this._computeds={},this._initProps(),this._callHook("beforeConnect"),this._connected=!0,this._initEvents(),this._initObserver(),this._callHook("connected"),this._callUpdate())},de.prototype._callDisconnected=function(){this._connected&&(this._callHook("beforeDisconnect"),this._observer&&(this._observer.disconnect(),this._observer=null),this._unbindEvents(),this._callHook("disconnected"),this._connected=!1)},de.prototype._callUpdate=function(t){var o=this;void 0===t&&(t="update");var u=t.type||t;b(["update","resize"],u)&&this._callWatches();var n=this.$options.update,e=this._frames,a=e.reads,s=e.writes;n&&n.forEach(function(t,n){var e=t.read,r=t.write,i=t.events;("update"===u||b(i,u))&&(e&&!b(zn.reads,a[n])&&(a[n]=zn.read(function(){var t=o._connected&&e.call(o,o._data,u);!1===t&&r?zn.clear(s[n]):E(t)&&B(o._data,t)})),r&&!b(zn.writes,s[n])&&(s[n]=zn.write(function(){return o._connected&&r.call(o,o._data,u)})))})},function(t){var n=0;function u(t,n){var e={},r=t.args;void 0===r&&(r=[]);var i=t.props;void 0===i&&(i={});var o=t.el;if(!i)return e;for(var u in i){var a=v(u),s=tt(o,a);if(!A(s)){if(s=i[u]===Boolean&&""===s||d(i[u],s),"target"===a&&(!s||y(s,"_")))continue;e[u]=s}}var c=ne(tt(o,n),r);for(var f in c){var l=m(f);void 0!==i[l]&&(e[l]=d(i[l],c[f]))}return e}function e(r,i,o){Object.defineProperty(r,i,{enumerable:!0,get:function(){var t=r._computeds,n=r.$props,e=r.$el;return c(t,i)||(t[i]=(o.get||o).call(r,n,e)),t[i]},set:function(t){var n=r._computeds;n[i]=o.set?o.set.call(r,t):t,A(n[i])&&delete n[i]}})}function h(n,e,r){E(e)||(e={name:r,handler:e});var i,o,t=e.name,u=e.el,a=e.handler,s=e.capture,c=e.passive,f=e.delegate,l=e.filter,d=e.self;u=_(u)?u.call(n):u||n.$el,w(u)?u.forEach(function(t){return h(n,B({},e,{el:t}),r)}):!u||l&&!l.call(n)||(i=S(a)?n[a]:p(a,n),a=function(t){return w(t.detail)?i.apply(void 0,[t].concat(t.detail)):i(t)},d&&(o=a,a=function(t){if(t.target===t.currentTarget||t.target===t.current)return o.call(null,t)}),n._events.push(Mt(u,t,f?S(f)?f:f.call(n):null,a,M(c)?{passive:c,capture:s}:s)))}function r(t,n){return t.every(function(t){return!t||!c(t,n)})}function d(t,n){return t===Boolean?D(n):t===Number?L(n):"list"===t?W(n):t?t(n):n}t.prototype._init=function(t){(t=t||{}).data=function(t,n){var e=t.data,r=(t.el,n.args),i=n.props;if(void 0===i&&(i={}),e=w(e)?r&&r.length?e.slice(0,r.length).reduce(function(t,n,e){return E(n)?B(t,n):t[r[e]]=n,t},{}):void 0:e)for(var o in e)A(e[o])?delete e[o]:e[o]=i[o]?d(i[o],e[o]):e[o];return e}(t,this.constructor.options),this.$options=te(this.constructor.options,t,this),this.$el=null,this.$props={},this._frames={reads:{},writes:{}},this._events=[],this._uid=n++,this._initData(),this._initMethods(),this._initComputeds(),this._callHook("created"),t.el&&this.$mount(t.el)},t.prototype._initData=function(){var t=this.$options.data;for(var n in void 0===t&&(t={}),t)this.$props[n]=this[n]=t[n]},t.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var n in t)this[n]=p(t[n],this)},t.prototype._initComputeds=function(){var t=this.$options.computed;if(this._computeds={},t)for(var n in t)e(this,n,t[n])},t.prototype._callWatches=function(){var t=this.$options.computed,n=this._computeds;for(var e in n){var r=n[e];delete n[e],t[e].watch&&!R(r,this[e])&&t[e].watch.call(this,this[e],r)}},t.prototype._initProps=function(t){var n;for(n in t=t||u(this.$options,this.$name))A(t[n])||(this.$props[n]=t[n]);var e=[this.$options.computed,this.$options.methods];for(n in this.$props)n in t&&r(e,n)&&(this[n]=this.$props[n])},t.prototype._initEvents=function(){var e=this,t=this.$options.events;t&&t.forEach(function(t){if(c(t,"handler"))h(e,t);else for(var n in t)h(e,t[n],n)})},t.prototype._unbindEvents=function(){this._events.forEach(function(t){return t()}),this._events=[]},t.prototype._initObserver=function(){var e=this,t=this.$options,r=t.attrs,n=t.props,i=t.el;if(!this._observer&&n&&!1!==r){r=w(r)?r:Object.keys(n),this._observer=new MutationObserver(function(){var n=u(e.$options,e.$name);r.some(function(t){return!A(n[t])&&n[t]!==e.$props[t]})&&e.$reset()});var o=r.map(function(t){return v(t)}).concat(this.$name);this._observer.observe(i,{attributes:!0,attributeFilter:o.concat(o.map(function(t){return"data-"+t}))})}}}(me),pe=(he=me).data,ve={},he.component=function(u,t){if(!t)return E(ve[u])&&(ve[u]=he.extend(ve[u])),ve[u];he[u]=function(t,e){for(var n=arguments.length,r=Array(n);n--;)r[n]=arguments[n];var i=he.component(u);return E(t)?new i({data:t}):i.options.functional?new i({data:[].concat(r)}):t&&t.nodeType?o(t):rn(t).map(o)[0];function o(t){var n=he.getComponent(t,u);if(n){if(!e)return n;n.$destroy()}return new i({el:t,data:e})}};var n=E(t)?B({},t):t.options;if(n.name=u,n.install&&n.install(he,n,u),he._initialized&&!n.functional){var e=v(u);zn.read(function(){return he[u]("[uk-"+e+"],[data-uk-"+e+"]")})}return ve[u]=E(t)?n:t},he.getComponents=function(t){return t&&t[pe]||{}},he.getComponent=function(t,n){return he.getComponents(t)[n]},he.connect=function(t){if(t[pe])for(var n in t[pe])t[pe][n]._callConnected();for(var e=0;e<t.attributes.length;e++){var r=le(t.attributes[e].name);r&&r in ve&&he[r](t)}},he.disconnect=function(t){for(var n in t[pe])t[pe][n]._callDisconnected()},function(r){var i=r.data;r.prototype.$mount=function(t){var n=this.$options.name;t[i]||(t[i]={}),t[i][n]||((t[i][n]=this).$el=this.$options.el=this.$options.el||t,gt(t,document)&&this._callConnected())},r.prototype.$emit=function(t){this._callUpdate(t)},r.prototype.$reset=function(){this._callDisconnected(),this._callConnected()},r.prototype.$destroy=function(t){void 0===t&&(t=!1);var n=this.$options,e=n.el,r=n.name;e&&this._callDisconnected(),this._callHook("destroy"),e&&e[i]&&(delete e[i][r],Object.keys(e[i]).length||delete e[i],t&&Gt(this.$el))},r.prototype.$create=function(t,n,e){return r[t](n,e)},r.prototype.$update=r.update,r.prototype.$getComponent=r.getComponent;var n={};Object.defineProperties(r.prototype,{$container:Object.getOwnPropertyDescriptor(r,"container"),$name:{get:function(){var t=this.$options.name;return n[t]||(n[t]=r.prefix+v(t)),n[t]}}})}(me);var ye={connected:function(){!cn(this.$el,this.$name)&&un(this.$el,this.$name)}};me.version="3.0.3";var ge={mixins:[ye],props:{date:String,clsWrapper:String},data:{date:"",clsWrapper:".uk-countdown-%unit%"},computed:{date:function(t){var n=t.date;return Date.parse(n)},days:function(t,n){return en(t.clsWrapper.replace("%unit%","days"),n)},hours:function(t,n){return en(t.clsWrapper.replace("%unit%","hours"),n)},minutes:function(t,n){return en(t.clsWrapper.replace("%unit%","minutes"),n)},seconds:function(t,n){return en(t.clsWrapper.replace("%unit%","seconds"),n)},units:function(){var n=this;return["days","hours","minutes","seconds"].filter(function(t){return n[t]})}},connected:function(){this.start()},disconnected:function(){var n=this;this.stop(),this.units.forEach(function(t){return zt(n[t])})},events:[{name:"visibilitychange",el:document,handler:function(){document.hidden?this.stop():this.start()}}],update:{write:function(){var t,n,r=this,i=(t=this.date,{total:n=t-Date.now(),seconds:n/1e3%60,minutes:n/1e3/60%60,hours:n/1e3/60/60%24,days:n/1e3/60/60/24});i.total<=0&&(this.stop(),i.days=i.hours=i.minutes=i.seconds=0),this.units.forEach(function(t){var n=String(Math.floor(i[t]));n="days"!==t?n.length<2?"0"+n:n:n.length<2?""+n:n;var e=r[t];e.textContent!==n&&((n=n.split("")).length!==e.children.length&&Ut(e,n.map(function(){return"<span></span>"}).join("")),n.forEach(function(t,n){return e.children[n].textContent=t}))})}},methods:{start:function(){var t=this;this.stop(),this.date&&this.units.length&&(this.$emit(),this.timer=setInterval(function(){return t.$emit()},1e3))},stop:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}}};return me.component("countdown",ge),function(o){var u=o.connect,a=o.disconnect;function t(){s(document.body,u),zn.flush(),new MutationObserver(function(t){return t.forEach(n)}).observe(document,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),o._initialized=!0}function n(t){var n=t.target;("attributes"!==t.type?function(t){for(var n=t.addedNodes,e=t.removedNodes,r=0;r<n.length;r++)s(n[r],u);for(var i=0;i<e.length;i++)s(e[i],a);return!0}(t):function(t){var n=t.target,e=t.attributeName;if("href"===e)return!0;var r=le(e);if(r&&r in o){if(Z(n,e))return o[r](n),!0;var i=o.getComponent(n,r);return i?(i.$destroy(),!0):void 0}}(t))&&o.update(n)}function s(t,n){if(1===t.nodeType&&!Z(t,"uk-no-boot"))for(n(t),t=t.firstElementChild;t;){var e=t.nextElementSibling;s(t,n),t=e}}"MutationObserver"in window&&(document.body?t():new MutationObserver(function(){document.body&&(this.disconnect(),t())}).observe(document,{childList:!0,subtree:!0}))}(me),me});
})();
