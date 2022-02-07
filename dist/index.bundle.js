(()=>{var r={757:(r,n,t)=>{r.exports=t(666)},340:(r,n,t)=>{"use strict";t.d(n,{Z:()=>b});var e=t(81),o=t.n(e),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(787),t.b),u=new URL(t(389),t.b),f=new URL(t(998),t.b),p=i()(o()),d=s()(l),h=s()(u),m=s()(f);p.push([r.id,"*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-image: url("+d+");\r\n  background-image: -webkit-image-set(url("+h+") 1x,\r\n      /* url('../img/wall.web') 1x, */\r\n      url("+d+") 1x);\r\n  background-image: image-set(url("+h+") 1x,\r\n      /* url('../img/wall.web') 1x, */\r\n      url("+d+') 1x);\r\n  background-repeat: no-repeat;\r\n  color: #fff;\r\n  background-size: cover;\r\n  font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\np {\r\n  margin: 0;\r\n}\r\n\r\ninput {\r\n  margin: 0;\r\n}\r\n\r\ninput:invalid:focus {\r\n  background-image: linear-gradient(pink, lightgreen);\r\n}\r\n\r\n\r\n\r\n.container {\r\n  max-width: 1024px;\r\n  margin: 0 auto;\r\n  padding: 0 50px;\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .container {\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n.title {\r\n  flex-grow: 1;\r\n  flex-basis: 100%;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.choises-seat {\r\n  flex-basis: 300px;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.plane {\r\n  margin: 20px auto;\r\n  max-width: 300px;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.cockpit {\r\n  height: 250px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  border-bottom: 5px solid #d8d8d8;\r\n}\r\n\r\n.cockpit-confirm {\r\n  position: relative;\r\n  z-index: 3;\r\n  background-color: #fff;\r\n  opacity: 0.7;\r\n  font-weight: 700;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  align-self: flex-end;\r\n  border: 1px solid #afafaf;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.cockpit:before {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 500px;\r\n  width: 100%;\r\n  border-radius: 50%;\r\n  border-right: 5px solid #d8d8d8;\r\n  border-left: 5px solid #d8d8d8;\r\n  background: rgba(242, 238, 159, .5);\r\n  z-index: 1;\r\n\r\n}\r\n\r\n.cockpit-title {\r\n  font-size: 30px;\r\n  width: 60%;\r\n  margin: 80px auto 35px auto;\r\n  position: relative;\r\n  z-index: 2;\r\n\r\n}\r\n\r\n.exit {\r\n  position: relative;\r\n  height: 50px;\r\n}\r\n\r\n.exit:before,\r\n.exit:after {\r\n  content: "EXIT";\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  padding: 0px 2px;\r\n  font-family: "Arial Narrow", Arial, sans-serif;\r\n  display: block;\r\n  position: absolute;\r\n  background: green;\r\n  color: white;\r\n  top: 50%;\r\n  transform: translate(0, -50%);\r\n}\r\n\r\n.exit:before {\r\n  left: 0;\r\n}\r\n\r\n.exit:after {\r\n  right: 0;\r\n}\r\n\r\n.fuselage {\r\n  border-right: 5px solid #d8d8d8;\r\n  border-left: 5px solid #d8d8d8;\r\n  background: rgba(242, 238, 159, .5);\r\n\r\n}\r\n\r\nol {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.seats {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.seat {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 0 0 40px;\r\n  height: 40px;\r\n  position: relative;\r\n}\r\n\r\n.seat:nth-child(3) {\r\n  margin-right: auto;\r\n}\r\n\r\n.seat label {\r\n  position: relative;\r\n  width: 90%;\r\n  height: 90%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.seat label:before {\r\n  content: "";\r\n  position: absolute;\r\n  top: 5%;\r\n  width: 80%;\r\n  height: 80%;\r\n  background: rgba(255, 255, 255, 0.4);\r\n  border-radius: 3px;\r\n  z-index: 999;\r\n  pointer-events: none\r\n}\r\n\r\n.seat label:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 0 0px 2px #5C6AFF;\r\n}\r\n\r\n.seat input[type=checkbox] {\r\n  position: absolute;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.seat input[type=checkbox]:before {\r\n  content: attr(value);\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  position: relative;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  line-height: 1.5rem;\r\n  padding: 4px 0;\r\n  background: #F42536;\r\n  border-radius: 5px;\r\n  animation-duration: 300ms;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.seat input[type=checkbox]:checked:before {\r\n  background: #bada55;\r\n  -webkit-animation-name: rubberBand;\r\n  animation-name: rubberBand;\r\n  animation-duration: 300ms;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.seat input[type=checkbox]:disabled:before {\r\n  background: #dddddd;\r\n  text-indent: -9999px;\r\n  overflow: hidden;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.seat input[type=checkbox]:disabled:after {\r\n  content: "X";\r\n  text-indent: 0;\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 50%;\r\n  transform: translate(-50%, 0%);\r\n}\r\n\r\n.seat input[type=checkbox]:disabled:hover {\r\n  box-shadow: none;\r\n  cursor: not-allowed;\r\n}\r\n\r\n@-webkit-keyframes rubberBand {\r\n  0% {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: scale3d(1.25, 0.75, 1);\r\n    transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(0.75, 1.25, 1);\r\n    transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.15, 0.85, 1);\r\n    transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    -webkit-transform: scale3d(0.95, 1.05, 1);\r\n    transform: scale3d(0.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale3d(1.05, 0.95, 1);\r\n    transform: scale3d(1.05, 0.95, 1);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes rubberBand {\r\n  0% {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: scale3d(1.25, 0.75, 1);\r\n    transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(0.75, 1.25, 1);\r\n    transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.15, 0.85, 1);\r\n    transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    -webkit-transform: scale3d(0.95, 1.05, 1);\r\n    transform: scale3d(0.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale3d(1.05, 0.95, 1);\r\n    transform: scale3d(1.05, 0.95, 1);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.rubberBand {\r\n  -webkit-animation-name: rubberBand;\r\n  animation-name: rubberBand;\r\n}\r\n\r\n.person-data {\r\n  padding: 30px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.person {\r\n  margin-bottom: 30px;\r\n  border-radius: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.person__title {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n.field {\r\n  width: 360px;\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n  background-color: rgba(255, 255, 255, .72);\r\n  border: 1px solid #afafaf;\r\n  padding: 15px 20px;\r\n  border-radius: 12px;\r\n  color: #afafaf;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n}\r\n\r\n.field:not(:last-child) {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.field__label {\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  line-height: 130%;\r\n  color: #303030;\r\n}\r\n\r\n.field__select {\r\n  display: block;\r\n  font-size: 16px;\r\n  font-family: sans-serif;\r\n  font-weight: 700;\r\n  color: #444;\r\n  line-height: 1.3;\r\n  padding: .6em 1.4em .5em .8em;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  border: 1px solid #aaa;\r\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);\r\n  border-radius: .5em;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background-color: #fff;\r\n  background-image: url('+m+');\r\n  background-repeat: no-repeat, repeat;\r\n  background-position: right .7em top 50%, 0 0;\r\n  background-size: .65em auto, 100%;\r\n}\r\n\r\n.field__select::-ms-expand {\r\n  display: none;\r\n}\r\n\r\n.field__select:hover {\r\n  border-color: #888;\r\n}\r\n\r\n.field__select:focus {\r\n  border-color: #aaa;\r\n  box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);\r\n  box-shadow: 0 0 0 3px -moz-mac-focusring;\r\n  color: #222;\r\n  outline: none;\r\n}\r\n\r\n.field__select option {\r\n  font-weight: normal;\r\n}\r\n\r\n*[dir="rtl"] .field__select,\r\n:root:lang(ar) .field__select,\r\n:root:lang(iw) .field__select {\r\n  background-position: left .7em top 50%, 0 0;\r\n  padding: .6em .8em .5em 1.4em;\r\n}\r\n\r\n.person {\r\n  border: 2px solid #787878;\r\n  padding: 20px;\r\n\r\n}\r\n\r\n.person:disabled .field__label {\r\n  opacity: 0.7;\r\n}\r\n\r\n.field__input {\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  line-height: 130%;\r\n  padding: 5px;\r\n}\r\n\r\n.person:disabled .field__input {\r\n  opacity: 0.7;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-confirm {\r\n  background-color: #fff;\r\n  opacity: 0.7;\r\n  font-weight: 700;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  align-self: flex-end;\r\n  border: 1px solid #afafaf;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-confirm:hover:not(:disabled) {\r\n  opacity: 0.9;\r\n}\r\n\r\n.btn-confirm:disabled {\r\n  cursor: auto;\r\n}',""]);const b=p},645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<r.length;l++){var u=[].concat(r[l]);e&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:r=>{"use strict";r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{"use strict";r.exports=function(r){return r[1]}},666:r=>{var n=function(r){"use strict";var n,t=Object.prototype,e=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(r,n,t){return Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),r[n]}try{s({},"")}catch(r){s=function(r,n,t){return r[n]=t}}function l(r,n,t,e){var o=n&&n.prototype instanceof b?n:b,a=Object.create(o.prototype),i=new j(e||[]);return a._invoke=function(r,n,t){var e=f;return function(o,a){if(e===d)throw new Error("Generator is already running");if(e===h){if("throw"===o)throw a;return C()}for(t.method=o,t.arg=a;;){var i=t.delegate;if(i){var c=N(i,t);if(c){if(c===m)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(e===f)throw e=h,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e=d;var s=u(r,n,t);if("normal"===s.type){if(e=t.done?h:p,s.arg===m)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(e=h,t.method="throw",t.arg=s.arg)}}}(r,t,i),a}function u(r,n,t){try{return{type:"normal",arg:r.call(n,t)}}catch(r){return{type:"throw",arg:r}}}r.wrap=l;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function b(){}function g(){}function v(){}var y={};s(y,a,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(A([])));w&&w!==t&&e.call(w,a)&&(y=w);var k=v.prototype=b.prototype=Object.create(y);function _(r){["next","throw","return"].forEach((function(n){s(r,n,(function(r){return this._invoke(n,r)}))}))}function E(r,n){function t(o,a,i,c){var s=u(r[o],r,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&e.call(f,"__await")?n.resolve(f.__await).then((function(r){t("next",r,i,c)}),(function(r){t("throw",r,i,c)})):n.resolve(f).then((function(r){l.value=r,i(l)}),(function(r){return t("throw",r,i,c)}))}c(s.arg)}var o;this._invoke=function(r,e){function a(){return new n((function(n,o){t(r,e,n,o)}))}return o=o?o.then(a,a):a()}}function N(r,t){var e=r.iterator[t.method];if(e===n){if(t.delegate=null,"throw"===t.method){if(r.iterator.return&&(t.method="return",t.arg=n,N(r,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(e,r.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[r.resultName]=a.value,t.next=r.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function L(r){var n={tryLoc:r[0]};1 in r&&(n.catchLoc=r[1]),2 in r&&(n.finallyLoc=r[2],n.afterLoc=r[3]),this.tryEntries.push(n)}function S(r){var n=r.completion||{};n.type="normal",delete n.arg,r.completion=n}function j(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(L,this),this.reset(!0)}function A(r){if(r){var t=r[a];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function t(){for(;++o<r.length;)if(e.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:n,done:!0}}return g.prototype=v,s(k,"constructor",v),s(v,"constructor",g),g.displayName=s(v,c,"GeneratorFunction"),r.isGeneratorFunction=function(r){var n="function"==typeof r&&r.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,v):(r.__proto__=v,s(r,c,"GeneratorFunction")),r.prototype=Object.create(k),r},r.awrap=function(r){return{__await:r}},_(E.prototype),s(E.prototype,i,(function(){return this})),r.AsyncIterator=E,r.async=function(n,t,e,o,a){void 0===a&&(a=Promise);var i=new E(l(n,t,e,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(r){return r.done?r.value:i.next()}))},_(k),s(k,c,"Generator"),s(k,a,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),r.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=A,j.prototype={constructor:j,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!r)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var t=this;function o(e,o){return c.type="throw",c.arg=r,t.next=e,o&&(t.method="next",t.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=e.call(i,"catchLoc"),l=e.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(r,n){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===r||"continue"===r)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=r,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(r,n){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&n&&(this.next=n),m},finish:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===r)return this.complete(t.completion,t.afterLoc),S(t),m}},catch:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===r){var e=t.completion;if("throw"===e.type){var o=e.arg;S(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,t,e){return this.delegate={iterator:A(r),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=n),m}},r}(r.exports);try{regeneratorRuntime=n}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},379:r=>{"use strict";var n=[];function t(r){for(var t=-1,e=0;e<n.length;e++)if(n[e].identifier===r){t=e;break}return t}function e(r,e){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],l=e.base?s[0]+e.base:s[0],u=a[l]||0,f="".concat(l," ").concat(u);a[l]=u+1;var p=t(f),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var h=o(d,e);e.byIndex=c,n.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(r,n){var t=n.domAPI(n);return t.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;t.update(r=n)}else t.remove()}}r.exports=function(r,o){var a=e(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=e(r,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:r=>{"use strict";var n={};r.exports=function(r,t){var e=function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}n[r]=t}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:r=>{"use strict";r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,t)=>{"use strict";r.exports=function(r){var n=t.nc;n&&r.setAttribute("nonce",n)}},795:r=>{"use strict";r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(t){!function(r,n,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{"use strict";r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},998:r=>{"use strict";r.exports="data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23cccccc%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"},389:(r,n,t)=>{"use strict";r.exports=t.p+"src/img//wall.avif"},787:(r,n,t)=>{"use strict";r.exports=t.p+"src/img//wall.jpg"}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,exports:{}};return r[e](a,a.exports,t),a.exports}t.m=r,t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;t.g.importScripts&&(r=t.g.location+"");var n=t.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var e=n.getElementsByTagName("script");e.length&&(r=e[e.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})(),t.b=document.baseURI||self.location.href,(()=>{"use strict";function r(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function n(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}function e(t){return function(n){if(Array.isArray(n))return r(n)}(t)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r,n,t,e,o,a,i){try{var c=r[a](i),s=c.value}catch(r){return void t(r)}c.done?n(s):Promise.resolve(s).then(e,o)}var a=t(757),i=t.n(a),c=t(379),s=t.n(c),l=t(795),u=t.n(l),f=t(569),p=t.n(f),d=t(565),h=t.n(d),m=t(216),b=t.n(m),g=t(589),v=t.n(g),y=t(340),x={};x.styleTagTransform=v(),x.setAttributes=h(),x.insert=p().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=b(),s()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;const w=function(r,n){var t=document.createElement(r);return Object.assign(t,n),t},k=function(r,n,t){var o=function(r){return w("h1",{className:"title",textContent:r})}(n),a=w("main",{className:"person-data"}),i=function(r){var n=w("form",{className:"field"}),t=w("label",{className:"field__label",for:"tour",textContent:"Выбрать тур"}),o=w("select",{className:"field__select",id:"tour",name:"tour"}),a=r.map((function(r){return w("option",{value:r.id,textContent:r.tour})}));o.append.apply(o,e(a)),w("label",{className:"field__label",textContent:"Укажите количество человек (max: 6)"});var i=w("input",{className:"field__input",id:"count",name:"count",type:"number",placeholder:"#",min:"1",max:"6",required:!0,value:"1"}),c=w("button",{className:"btn-confirm",type:"submit",textContent:"Подтвердить"});return n.append(t,o,i,c),n}(t);return a.append(i),r.append(o,a),{main:a,firstForm:i,h1:o}};var _=function(r){var n=w("form",{className:"person"}),t=w("h2",{className:"person__title",textContent:"Пассажир #".concat(r+1)}),e=w("div",{className:"field"}),o=w("label",{className:"field__label",htmlFor:"name".concat(r),textContent:"ФИО"}),a=w("input",{className:"field__input",id:"name".concat(r),name:"name",type:"text",placeholder:"Введите ваше ФИО",required:!0,value:"ФИО ".concat(r)}),i=w("div",{className:"field"}),c=w("label",{className:"field__label",htmlFor:"ticket".concat(r),textContent:"Номер билета (10 цифр)"}),s=w("input",{className:"field__input",id:"ticket".concat(r),name:"ticket",type:"text",placeholder:"Номер билета",required:!0,minLength:1,maxlength:10,value:"Билет пассажира ".concat(r)});e.append(o,a),i.append(c,s);var l=w("button",{className:"btn-confirm",type:"submit",textContent:"Подтвердить"});return n.append(t,e,i,l),n};const E=function(r){var n=[];r>6&&(r=6);for(var t=0;t<r;t++)n.push(_(t));return n};function N(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,o,a=[],i=!0,c=!1;try{for(t=t.call(r);!(i=(e=t.next()).done)&&(a.push(e.value),!n||a.length!==n);i=!0);}catch(r){c=!0,o=r}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(r,t)||n(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=function(r,n){var t=n.scheme,o=w("form",{className:"choises-seat"}),a=w("fieldset",{className:"plane",name:"plane"}),i=function(r){var n=w("div",{className:"cockpit"}),t=w("h1",{className:"cockpit-title",textContent:r}),e=w("button",{className:"cockpit-confirm",type:"submit",textContent:"Подтвердить"});return n.append(t,e),n}(r),c=1,s=t.map((function(r){if("exit"===r)return w("div",{className:"fuselage exit"});if("number"==typeof r){var n=function(r,n){for(var t=["A","B","C","D","E","F"],o=w("ol",{className:"fuselage"}),a=function(r){var n=w("li"),a=w("ol",{className:"seats"}),i=t.map((function(n){var t=w("li",{className:"seat"}),e=w("label"),o=w("input",{name:"seat",type:"checkbox",value:"".concat(r).concat(n)});return e.append(o),t.append(e),t}));a.append.apply(a,e(i)),n.append(a),o.append(n)},i=r;i<n+r;i++)a(i);return o}(c,r);return c+=r,n}}));return a.append.apply(a,[i].concat(e(s))),o.append(a),o};function S(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}const j=function(r,n,t){var o=[];r.forEach((function(a){a.addEventListener("submit",(function(i){i.preventDefault();var c,s=function(r,n){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,n){if(r){if("string"==typeof r)return S(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(r,n):void 0}}(r))||n&&r&&"number"==typeof r.length){t&&(r=t);var e=0,o=function(){};return{s:o,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return i=r.done,r},e:function(r){c=!0,a=r},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw a}}}}(a.elements);try{for(s.s();!(c=s.n()).done;)c.value.disabled=!0}catch(r){s.e(r)}finally{s.f()}o.push({name:a.name.value,ticket:a.ticket.value}),r.length===o.length&&(r.forEach((function(r){return r.remove()})),function(r,n,t){var o,a="Выберите ".concat(["место","места","мест"][(o=n.length)%10==1&&o%100!=11?0:o%10>=2&&o%10<=4&&(o%100<10||o%100>=20)?1:2]);!function(r,n){console.log(r),r.addEventListener("change",(function(){console.log("form changed"),e(new FormData(r)).map((function(r){return N(r,2)[1]})).length===n.length&&e(r).forEach((function(r){!1===r.checked&&"seat"===r.name&&(r.disabled=!0)}))})),r.addEventListener("submit",(function(t){t.preventDefault();for(var o=e(new FormData(r)).map((function(r){return N(r,2)[1]})),a=0;a<n.length;a++)n[a].seat=o[a];console.log(n)}))}(L(a,t),n),r.append(L(a,t))}(n,o,t))}))}))};!function(){var r,n=(r=i().mark((function r(n,t){var o,a,c,s,l,u;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=document.querySelector(n),r.next=3,fetch("https://61f4662310f0f7001768c90f.mockapi.io/api/airplane").then((function(r){if(r.ok)return r.json();throw new Error(r.status)})).catch((function(r){console.error(r)}));case 3:a=r.sent,c=k(o,t,a),s=c.main,l=c.firstForm,u=c.h1,l.addEventListener("submit",(function(r){r.preventDefault();var n=a.find((function(r){return r.id===l.tour.value}));u.textContent=n.tour;var t=E(l.count.value);l.remove(),s.append.apply(s,e(t)),j(t,s,n)}));case 6:case"end":return r.stop()}}),r)})),function(){var n=this,t=arguments;return new Promise((function(e,a){var i=r.apply(n,t);function c(r){o(i,e,a,c,s,"next",r)}function s(r){o(i,e,a,c,s,"throw",r)}c(void 0)}))});return function(r,t){return n.apply(this,arguments)}}()(".app","Выберите тур")})()})();