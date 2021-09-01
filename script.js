!function(){var t={757:function(t,e,r){t.exports=r(666)},402:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,"body {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  margin: 0 auto;\n}\n\n#chatMessages {\n  width: 70%;\n  border: 1px solid #c1c1c1;\n  flex-grow: 1;\n  padding: 15px;\n  border-bottom: 1px solid #9e9e9e;\n  height: calc(100% - 60px);\n  overflow: auto;\n}\n\nform {\n  width: 70%;\n  align-content: center;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n\n#input {\n  display: flex;\n  align-items: center;\n}\n\n#username {\n  width: 81%;\n  flex-grow: 1;\n  padding: 5px;\n  font-size: 13px;\n  border: 1px solid #8e8e8e;\n  border-radius: 5px;\n}\n\n#inputForm {\n  margin-top: 5px;\n}\n\n#textMessage {\n  width: 81%;\n  height: 5em;\n  resize: none;\n  flex-grow: 1;\n  padding: 5px;\n  font-size: 13px;\n  border: 1px solid #8e8e8e;\n  border-radius: 5px;\n}\n\n#sendBtn {\n  display: inline-block;\n  vertical-align: top;\n  height: 4em;\n  min-width: 17%;\n  max-width: 50%;\n  margin-left: 5px;\n  width: 100px;\n  border-radius: 5px;\n  border: none;\n  color: #fff;\n  background-color: cornflowerblue;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.message {\n  padding-bottom: 10px;\n}\n\n.scroll {\n  overflow-y: scroll;\n}\n",""]);const i=o},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new T(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=P(c,r);if(a){if(a===d)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",d={};function v(){}function b(){}function g(){}var m={};u(m,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(A([])));O&&O!==r&&n.call(O,i)&&(m=O);var x=g.prototype=v.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,c,a){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:k}}function k(){return{value:e,done:!0}}return b.prototype=g,u(x,"constructor",g),u(g,"constructor",b),b.displayName=u(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(x),u(x,a,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:function(t){"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},c=[],a=0;a<t.length;a++){var u=t[a],s=n.base?u[0]+n.base:u[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=r(l),h={css:u[1],media:u[2],sourceMap:u[3]};-1!==p?(e[p].references++,e[p].updater(h)):e.push({identifier:l,updater:o(h,n),references:1}),c.push(l)}return c}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=r(i[c]);e[a].references--}for(var u=n(t,o),s=0;s<i.length;s++){var f=r(i[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=u}}},569:function(t){"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:function(t,e,r){"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var c=e.apply(r,n);function a(e){t(c,o,i,a,u,"next",e)}function u(e){t(c,o,i,a,u,"throw",e)}a(void 0)}))}}var n=r(757),o=r.n(n),i=r(379),c=r.n(i),a=r(795),u=r.n(a),s=r(569),f=r.n(s),l=r(565),p=r.n(l),h=r(216),y=r.n(h),d=r(589),v=r.n(d),b=r(402),g={};function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t,e,r){return e&&w(t.prototype,e),r&&w(t,r),t}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?P(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function A(t,e){if(t){if("string"==typeof t)return T(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(t,e):void 0}}function k(t){return function(t){if(Array.isArray(t))return T(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||A(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}g.styleTagTransform=v(),g.setAttributes=p(),g.insert=f().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=y(),c()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var M=function(){function t(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};m(this,t),_(this,"isMounted",!1),_(this,"state",{}),_(this,"events",{}),this.el=e,this.setState(n),setTimeout((function(){r.el.innerHTML=r.render(),r.subscribeToEvents()}),0)}return O(t,[{key:"onMount",value:function(t){this.isMounted||(this.isMounted=!0)}},{key:"setState",value:function(t){this.state=N(N({},this.state),t),this.el.innerHTML=this.render(),this.subscribeToEvents()}},{key:"subscribeToEvents",value:function(){var t=this;this.events&&Object.keys(this.events).forEach((function(e){var r,n,o=(r=e.split("@"),n=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],c=!0,a=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){a=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}}(r,n)||A(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],c=o[1];k(t.el.querySelectorAll("".concat(c))).forEach((function(r){r.addEventListener("".concat(i),t.events[e])}))}))}}]),t}();function R(t,e){return t.replace(/{{for (\w+)}}([\s\S]+?){{endfor}}/g,(function(t,r,n){return e[r].map((function(t){return R(n,t)})).join("")})).replace(/{{for (\w+) as (\w+)}}([\s\S]+?){{endfor}}/g,(function(t,r,n,o){return e[r].map((function(t){var e={};return e[n]=t,R(o,e)})).join("")})).replace(/{{(\w*)}}/g,(function(t,r){return e[r]?e[r]:""}))}var I={":)":"&#128512;",":-)":"&#128512;","(:":"&#128512;","(-:":"&#128512;",":D":"&#128513;",":-D":"&#128513;",":(":"&#9785;",":-(":"&#9785;",":o":"&#128558;",":-o":"&#128558;","8O":"&#128562;","8-O":"&#128562;",":|":"&#128528;",":-|":"&#128528;","8)":"&#128526;","8-)":"&#128526;",":x":"&#128544;",":-x":"&#128544;",":P":"&#128539;",":-P":"&#128539;",";)":"&#128521;",";-)":"&#128521;"};var C=function(t){j(o,t);var e,r,n=(e=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=L(e);if(r){var o=L(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return S(this,t)});function o(){return m(this,o),n.apply(this,arguments)}return O(o,[{key:"render",value:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,r=t;return Object.keys(e).forEach((function(t){var n=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");r=r.replace(new RegExp(n,"g"),e[t])})),r}(R('{{for messageList}}\n            <div class="message">\n              <p class="date"><i>{{date}}</i></p>\n              <span class="author"><b>{{name}}</b></span>:\n                <p class="text">{{message}}</p>\n            </div>\n            {{endfor}}',this.state))}}]),o}(M);function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function q(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var B="function"==typeof Symbol&&Symbol.observable||"@@observable",H=function(){return Math.random().toString(36).substring(7).split("").join(".")},U={INIT:"@@redux/INIT"+H(),REPLACE:"@@redux/REPLACE"+H(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+H()}};function Z(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function z(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function J(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var $=J();function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}$.withExtraArgument=J;var Y="https://otus-js-chat-4ed79-default-rtdb.firebaseio.com",Q="messages.json";function V(){return X.apply(this,arguments)}function X(){return(X=e(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(Y,"/").concat(Q),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return Object.values(t).map((function(t){return W(W({},t),{},{date:new Date(t.date)})}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function tt(t){return et.apply(this,arguments)}function et(){return(et=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(Y,"/").concat(Q),{method:"POST",body:JSON.stringify(W(W({},e),{},{date:new Date})),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ot="GET_MESSAGES",it="GET_MESSAGE",ct="CHANGE_USERNAME";function at(t){return{type:ot,payload:{messageList:t}}}var ut=function(){return function(){var t=e(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V();case 2:r=t.sent,e(at(r.slice(-50)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},st=function(){return function(t){var e;e=function(e){if(Object.keys(e).includes("message")){var r=nt(nt({},e),{},{date:new Date(e.date)});t(function(t){return{type:it,payload:t}}(r))}},new EventSource("".concat(Y,"/").concat(Q)).addEventListener("put",(function(t){return e(JSON.parse(t.data).data)}))}};function ft(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ft(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ft(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var pt={username:"Неизвестный",messageList:[]},ht=function t(e,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(q(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(q(1));return n(t)(e,r)}if("function"!=typeof e)throw new Error(q(2));var i=e,c=r,a=[],u=a,s=!1;function f(){u===a&&(u=a.slice())}function l(){if(s)throw new Error(q(3));return c}function p(t){if("function"!=typeof t)throw new Error(q(4));if(s)throw new Error(q(5));var e=!0;return f(),u.push(t),function(){if(e){if(s)throw new Error(q(6));e=!1,f();var r=u.indexOf(t);u.splice(r,1),a=null}}}function h(t){if(!Z(t))throw new Error(q(7));if(void 0===t.type)throw new Error(q(8));if(s)throw new Error(q(9));try{s=!0,c=i(c,t)}finally{s=!1}for(var e=a=u,r=0;r<e.length;r++)(0,e[r])();return t}function y(t){if("function"!=typeof t)throw new Error(q(10));i=t,h({type:U.REPLACE})}function d(){var t,e=p;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(q(11));function r(){t.next&&t.next(l())}return r(),{unsubscribe:e(r)}}})[B]=function(){return this},t}return h({type:U.INIT}),(o={dispatch:h,subscribe:p,getState:l,replaceReducer:y})[B]=d,o}((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ot:return lt(lt({},t),{},{messageList:e.payload.messageList});case it:return lt(lt({},t),{},{messageList:[].concat(k(t.messageList),[e.payload])});case ct:return lt(lt({},t),{},{username:e.payload});default:return t}}),function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(q(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return n=z.apply(void 0,i)(r.dispatch),F(F({},r),{},{dispatch:n})}}}($));var yt=function(t){j(c,t);var r,n,i=(r=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(n){var o=L(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return S(this,t)});function c(){var t;m(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return _(P(t=i.call.apply(i,[this].concat(n))),"submit",function(){var r=e(o().mark((function e(r){var n,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=r.target.querySelector("#textMessage"),(i=r.target.querySelector("#username"))&&bt(i.value),!n){e.next=9;break}return c={name:t.state.username,message:n.value,date:new Date},n.value="",e.next=9,tt(c);case 9:case"end":return e.stop()}}),e)})));return function(t){return r.apply(this,arguments)}}()),_(P(t),"events",{"submit@form":t.submit}),t}return O(c,[{key:"render",value:function(){return R('\n          <form>\n            <div id="user">\n              <div id="label"><span>Ваше имя:</span></div>\n              <input id="username" type="text" value="{{username}}" required>\n            </div>\n            <div id="inputForm">\n              <textarea  id=\'textMessage\'  autofocus  class="scroll" required>{{text}}</textarea>\n              <input type="submit" id="sendBtn" value="Отправить">\n            </div>\n          </form>\n        ',this.state)}}]),c}(M);function dt(){return vt.apply(this,arguments)}function vt(){return(vt=e(o().mark((function t(){var e,r,n,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=document.querySelector("#chatMessages"),r=document.querySelector("#input"),!e||!r){t.next=10;break}return n=new C(e,ht.getState()),i=new yt(r,ht.getState()),ht.subscribe((function(){n.setState(ht.getState()),e.scrollTop=e.scrollHeight})),ht.subscribe((function(){i.setState(ht.getState())})),t.next=9,ht.dispatch(ut());case 9:ht.dispatch(st());case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function bt(t){ht.dispatch(function(t){return{type:ct,payload:t}}(t))}e(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt();case 2:case"end":return t.stop()}}),t)})))()}()}();