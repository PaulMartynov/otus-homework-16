!function(){var t={757:function(t,e,r){t.exports=r(666)},402:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,"#chatMessages {\n  width: 70%;\n  height: 30em;\n  border: 1px solid #c1c1c1;\n}\n\nform {\n  margin-top: 15px;\n  width: 70%;\n  align-content: center;\n}\n\n#username {\n  width: 90%;\n}\n\n#inputForm {\n  margin-top: 5px;\n}\n\n#textMessage {\n  width: 81%;\n  height: 5em;\n  resize: none;\n}\n\n#sendBtn {\n  display: inline-block;\n  vertical-align: top;\n  height: 5em;\n  min-width: 18%;\n  max-width: 50%;\n}\n\n.message {\n  padding: 5px;\n}\n\n.scroll {\n  overflow-y: scroll;\n}\n",""]);const i=o},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var a=[].concat(t[u]);n&&o[a[0]]||(r&&(a[2]?a[2]="".concat(r," and ").concat(a[2]):a[2]=r),e.push(a))}},e}},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new T(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=S(c,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var a=f(t,e,r);if("normal"===a.type){if(n=r.done?y:p,a.arg===d)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n=y,r.method="throw",r.arg=a.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",d={};function v(){}function m(){}function b(){}var g={};a(g,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(A([])));O&&O!==r&&n.call(O,i)&&(g=O);var j=b.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,c,u){var a=f(t[o],t,i);if("throw"!==a.type){var s=a.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(a.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:_}}function _(){return{value:e,done:!0}}return m.prototype=b,a(j,"constructor",b),a(b,"constructor",m),m.displayName=a(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,a(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},x(E.prototype),a(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(j),a(j,u,"Generator"),a(j,i,(function(){return this})),a(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var a=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(a&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:function(t){"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},c=[],u=0;u<t.length;u++){var a=t[u],s=n.base?a[0]+n.base:a[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=r(l),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(e[p].references++,e[p].updater(h)):e.push({identifier:l,updater:o(h,n),references:1}),c.push(l)}return c}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var u=r(i[c]);e[u].references--}for(var a=n(t,o),s=0;s<i.length;s++){var f=r(i[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=a}}},569:function(t){"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:function(t,e,r){"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var c=e.apply(r,n);function u(e){t(c,o,i,u,a,"next",e)}function a(e){t(c,o,i,u,a,"throw",e)}u(void 0)}))}}var n=r(757),o=r.n(n);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?l(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function v(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w=function(){function t(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),m(this,"isMounted",!1),m(this,"state",{}),m(this,"events",{}),this.el=e,this.setState(n),setTimeout((function(){r.el.innerHTML=r.render(),r.subscribeToEvents()}),0)}return u(t,[{key:"onMount",value:function(t){this.isMounted||(this.isMounted=!0)}},{key:"setState",value:function(t){this.state=g(g({},this.state),t),this.el.innerHTML=this.render(),this.subscribeToEvents()}},{key:"subscribeToEvents",value:function(){var t=this;this.events&&Object.keys(this.events).forEach((function(e){var r,n,o=(r=e.split("@"),n=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}}(r,n)||d(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],c=o[1];v(t.el.querySelectorAll("".concat(c))).forEach((function(r){r.addEventListener("".concat(i),t.events[e])}))}))}}]),t}();function O(t,e){return t.replace(/{{for (\w+)}}([\s\S]+?){{endfor}}/g,(function(t,r,n){return e[r].map((function(t){return O(n,t)})).join("")})).replace(/{{for (\w+) as (\w+)}}([\s\S]+?){{endfor}}/g,(function(t,r,n,o){return e[r].map((function(t){var e={};return e[n]=t,O(o,e)})).join("")})).replace(/{{(\w*)}}/g,(function(t,r){return e[r]?e[r]:""}))}var j=function(t){s(o,t);var e,r,n=(e=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=h(e);if(r){var o=h(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return p(this,t)});function o(){return i(this,o),n.apply(this,arguments)}return u(o,[{key:"render",value:function(){return O('{{for messageList}}\n            <div class="message">\n              <p class="date">{{date}}}</p>\n              <span class="author">{{name}}</span>:\n                <p>{{message}}</p>\n            </div>\n            {{endfor}}',this.state)}}]),o}(w);function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S="https://otus-js-chat-4ed79-default-rtdb.firebaseio.com",P="messages.json";function L(){return T.apply(this,arguments)}function T(){return(T=e(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(S,"/").concat(P),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return Object.values(t).map((function(t){return E(E({},t),{},{date:new Date(t.date)})}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t){return _.apply(this,arguments)}function _(){return(_=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(S,"/").concat(P),{method:"POST",body:JSON.stringify(E(E({},e),{},{date:new Date})),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function N(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var R="function"==typeof Symbol&&Symbol.observable||"@@observable",D=function(){return Math.random().toString(36).substring(7).split("").join(".")},I={INIT:"@@redux/INIT"+D(),REPLACE:"@@redux/REPLACE"+D(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+D()}};function C(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function G(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function F(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var B=F();function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}B.withExtraArgument=F;var U={username:"Неизвестный",messageList:[]},Z=function t(e,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(N(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(N(1));return n(t)(e,r)}if("function"!=typeof e)throw new Error(N(2));var i=e,c=r,u=[],a=u,s=!1;function f(){a===u&&(a=u.slice())}function l(){if(s)throw new Error(N(3));return c}function p(t){if("function"!=typeof t)throw new Error(N(4));if(s)throw new Error(N(5));var e=!0;return f(),a.push(t),function(){if(e){if(s)throw new Error(N(6));e=!1,f();var r=a.indexOf(t);a.splice(r,1),u=null}}}function h(t){if(!C(t))throw new Error(N(7));if(void 0===t.type)throw new Error(N(8));if(s)throw new Error(N(9));try{s=!0,c=i(c,t)}finally{s=!1}for(var e=u=a,r=0;r<e.length;r++)(0,e[r])();return t}function y(t){if("function"!=typeof t)throw new Error(N(10));i=t,h({type:I.REPLACE})}function d(){var t,e=p;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(N(11));function r(){t.next&&t.next(l())}return r(),{unsubscribe:e(r)}}})[R]=function(){return this},t}return h({type:I.INIT}),(o={dispatch:h,subscribe:p,getState:l,replaceReducer:y})[R]=d,o}((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J:return H(H({},t),{},{messageList:e.payload.messageList});case K:return H(H({},t),{},{messageList:[].concat(v(t.messageList),[e.payload])});case W:return H({},t);default:return t}}),function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(N(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return n=G.apply(void 0,i)(r.dispatch),M(M({},r),{},{dispatch:n})}}}(B)),J="GET_MESSAGES",K="GET_MESSAGE",W="SEND_MESSAGE";function Y(t){return{type:J,payload:{messageList:t}}}var z=function(){return function(){var t=e(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:r=t.sent,e(Y(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(t){return function(){var r=e(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:r({type:W});case 3:case"end":return e.stop()}}),e)})));return function(t){return r.apply(this,arguments)}}()};function Q(t){return V.apply(this,arguments)}function V(){return(V=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.dispatch($(e));case 2:return t.next=4,Z.dispatch(z());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var X=function(t){s(a,t);var r,n,c=(r=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(n){var o=h(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return p(this,t)});function a(){var t;i(this,a);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return m(l(t=c.call.apply(c,[this].concat(n))),"submit",function(){var r=e(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n={name:t.state.username,message:r.target.querySelector("#textMessage").value,date:new Date},e.next=4,Q(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return r.apply(this,arguments)}}()),m(l(t),"events",{"submit@form":t.submit}),t}return u(a,[{key:"render",value:function(){return O('\n          <form>\n            <div id="username">\n              <div id="label"><span>Ваше имя:</span></div>\n              <input id="username" type="text" value="{{username}}" required>\n            </div>\n            <div id="inputForm">\n              <textarea  id=\'textMessage\'  autofocus  class="scroll" required>{{text}}</textarea>\n              <input type="submit" id="sendBtn" value="Отправить">\n            </div>\n          </form>\n        ',this.state)}}]),a}(w),tt=r(379),et=r.n(tt),rt=r(795),nt=r.n(rt),ot=r(569),it=r.n(ot),ct=r(565),ut=r.n(ct),at=r(216),st=r.n(at),ft=r(589),lt=r.n(ft),pt=r(402),ht={};ht.styleTagTransform=lt(),ht.setAttributes=ut(),ht.insert=it().bind(null,"head"),ht.domAPI=nt(),ht.insertStyleElement=st(),et()(pt.Z,ht),pt.Z&&pt.Z.locals&&pt.Z.locals,e(o().mark((function t(){var e,r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=document.querySelector("#chatMessages"),r=document.querySelector("#input"),!e||!r){t.next=8;break}return n=new j(e,Z.getState()),Z.subscribe((function(){n.setState(Z.getState()),e.scrollTop=e.scrollHeight})),Z.subscribe((function(){new X(r,Z.getState())})),t.next=8,Z.dispatch(z());case 8:case"end":return t.stop()}}),t)})))()}()}();