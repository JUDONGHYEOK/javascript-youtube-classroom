(()=>{var n={757:(n,e,t)=>{n.exports=t(666)},71:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var i=t(537),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,"body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n","",{version:3,sources:["webpack://./src/css/app.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:["body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n"],sourceRoot:""}]);const s=a},340:(n,e,t)=>{"use strict";t.d(e,{Z:()=>A});var i=t(537),r=t.n(i),o=t(645),a=t.n(o),s=t(71),c=t(399),l=t(341),u=a()(r());u.i(s.Z),u.i(c.Z),u.i(l.Z),u.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n","",{version:3,sources:["webpack://./src/css/index.css"],names:[],mappings:"AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf",sourcesContent:['@import "./app.css";\n@import "./modal.css";\n@import "./skeleton.css";\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n'],sourceRoot:""}]);const A=u},399:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var i=t(537),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result {\n  width: 100%;\n  height: 493px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n.hide {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/css/modal.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf",sourcesContent:[".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result {\n  width: 100%;\n  height: 493px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n.hide {\n  display: none;\n}\n"],sourceRoot:""}]);const s=a},341:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var i=t(537),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,".skeleton {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton-container {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.skeleton.thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.skeleton.title {\n  width: 90%;\n  height: 20px;\n}\n\n.skeleton.text {\n  width: 80%;\n  height: 16px;\n}\n\n.skeleton.date {\n  width: 40%;\n  height: 14px;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/skeleton.css"],names:[],mappings:"AAAA;EACE;;;;;GAKC;EACD,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF",sourcesContent:[".skeleton {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton-container {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.skeleton.thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.skeleton.title {\n  width: 90%;\n  height: 20px;\n}\n\n.skeleton.text {\n  width: 80%;\n  height: 16px;\n}\n\n.skeleton.date {\n  width: 40%;\n  height: 14px;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n"],sourceRoot:""}]);const s=a},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);i&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(r," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}return[e].join("\n")}},666:n=>{var e=function(n){"use strict";var e,t=Object.prototype,i=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{c({},"")}catch(n){c=function(n,e,t){return n[e]=t}}function l(n,e,t,i){var r=e&&e.prototype instanceof v?e:v,o=Object.create(r.prototype),a=new L(i||[]);return o._invoke=function(n,e,t){var i=A;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return j()}for(t.method=r,t.arg=o;;){var a=t.delegate;if(a){var s=B(a,t);if(s){if(s===f)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(i===A)throw i=p,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i=d;var c=u(n,e,t);if("normal"===c.type){if(i=t.done?p:h,c.arg===f)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(i=p,t.method="throw",t.arg=c.arg)}}}(n,t,a),o}function u(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var A="suspendedStart",h="suspendedYield",d="executing",p="completed",f={};function v(){}function m(){}function g(){}var E={};c(E,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(T([])));b&&b!==t&&i.call(b,o)&&(E=b);var x=g.prototype=v.prototype=Object.create(E);function C(n){["next","throw","return"].forEach((function(e){c(n,e,(function(n){return this._invoke(e,n)}))}))}function w(n,e){function t(r,o,a,s){var c=u(n[r],n,o);if("throw"!==c.type){var l=c.arg,A=l.value;return A&&"object"==typeof A&&i.call(A,"__await")?e.resolve(A.__await).then((function(n){t("next",n,a,s)}),(function(n){t("throw",n,a,s)})):e.resolve(A).then((function(n){l.value=n,a(l)}),(function(n){return t("throw",n,a,s)}))}s(c.arg)}var r;this._invoke=function(n,i){function o(){return new e((function(e,r){t(n,i,e,r)}))}return r=r?r.then(o,o):o()}}function B(n,t){var i=n.iterator[t.method];if(i===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=e,B(n,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(i,n.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function _(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function L(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(k,this),this.reset(!0)}function T(n){if(n){var t=n[o];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,a=function t(){for(;++r<n.length;)if(i.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=g,c(x,"constructor",g),c(g,"constructor",m),m.displayName=c(g,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,c(n,s,"GeneratorFunction")),n.prototype=Object.create(x),n},n.awrap=function(n){return{__await:n}},C(w.prototype),c(w.prototype,a,(function(){return this})),n.AsyncIterator=w,n.async=function(e,t,i,r,o){void 0===o&&(o=Promise);var a=new w(l(e,t,i,r),o);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},C(x),c(x,s,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var i=e.pop();if(i in n)return t.value=i,t.done=!1,t}return t.done=!0,t}},n.values=T,L.prototype={constructor:L,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!n)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(i,r){return s.type="throw",s.arg=n,t.next=i,r&&(t.method="next",t.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=n,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),f},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),_(t),f}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var i=t.completion;if("throw"===i.type){var r=i.arg;_(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,i){return this.delegate={iterator:T(n),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=e),f}},n}(n.exports);try{regeneratorRuntime=e}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=i.base?c[0]+i.base:c[0],u=o[l]||0,A="".concat(l," ").concat(u);o[l]=u+1;var h=t(A),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(d);else{var p=r(d,i);i.byIndex=s,e.splice(s,0,{identifier:A,updater:p,references:1})}a.push(A)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=i(n,r),l=0;l<o.length;l++){var u=t(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function i(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}const r=function(n){var e=n.id,t=n.thumbnails,i=n.channelTitle,r=n.title,o=n.publishTime,a=n.isSaved;return'\n  <li class="video-item" data-video-id='.concat(e,">\n    <img\n      src=").concat(t,'\n      alt="video-item-thumbnail" class="video-item__thumbnail" />\n    <h4 class="video-item__title">').concat(r,'</h4>\n    <p class="video-item__channel-name">').concat(i,'</p>\n    <p class="video-item__published-date">').concat(function(n){var e=new Date(n);return"".concat(e.getFullYear(),"년 ").concat(e.getMonth()+1,"월 ").concat(e.getDate(),"일")}(o),"</p>\n    ").concat(a?"":'<button class="video-item__save-button button">⬇ 저장</button>',"\n  </li>\n  ")},o=function(){return'\n    <div class="no-result">\n      <img src='.concat("./not_found.png",' alt="no result image" class="no-result__image">\n      <p class="no-result__description">\n        검색 결과가 없습니다<br />\n        다른 키워드로 검색해보세요\n      </p>\n    </div>\n  ')},a=function(){return'\n    <li class="video-item skeleton-container">\n      <div class="skeleton thumbnail"></div>\n      <div class="skeleton title"></div>\n      <div class="skeleton text"></div>\n      <div class="skeleton date"></div>\n    </li>\n  '},s=function(){return'\n  <div class="no-result">\n    <img src= '.concat("./error-background.png",'/>\n    <p class="no-result__description">\n      할당량 초과!!<br />\n      다음날 5시에 다시 시도하세요\n    </p>\n  </div>\n  ')};function c(n,e,t,i,r,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(i,r)}function l(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var o=n.apply(e,t);function a(n){c(o,i,r,a,s,"next",n)}function s(n){c(o,i,r,a,s,"throw",n)}a(void 0)}))}}function u(n,e,t){if(!e.has(n))throw new TypeError("attempted to "+t+" private field on non-instance");return e.get(n)}function A(n,e){return function(n,e){return e.get?e.get.call(n):e.value}(n,u(n,e,"get"))}function h(n,e,t){return function(n,e,t){if(e.set)e.set.call(n,t);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=t}}(n,u(n,e,"set"),t),t}var d=t(757),p=t.n(d),f="save",v="403 Error";const m={REDIRECT_SERVER_HOST:"https://donkeykong.netlify.app/",searchByPage:function(n,e){var t=this;return l(p().mark((function i(){var r,o;return p().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return r=t.createURL(n,e),i.next=3,fetch(r,{method:"GET"});case 3:return o=i.sent,t.checkExceedCapacity(o),i.next=7,o.json();case 7:return i.abrupt("return",i.sent);case 8:case"end":return i.stop()}}),i)})))()},createURL:function(n,e){var t=new URL("youtube/v3/search",this.REDIRECT_SERVER_HOST),i=new URLSearchParams({part:"snippet",maxResults:10,pageToken:e||"",q:n,type:"video"});return t.search=i.toString(),t},checkExceedCapacity:function(n){if(403===n.status){var e=new Error("오늘의 할당량을 모두 사용했습니다😅");throw e.name=v,e}}};var g=function(n){var e;return null!==(e=JSON.parse(localStorage.getItem(n)))&&void 0!==e?e:[]};function E(n,e,t){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.set(n,t)}var y=new WeakMap,b=new WeakMap,x=new WeakMap,C=new WeakMap,w=new WeakMap,B=new WeakMap,k=function(){function e(t,i,r,o,a,s){n(this,e),E(this,y,{writable:!0,value:void 0}),E(this,b,{writable:!0,value:void 0}),E(this,x,{writable:!0,value:void 0}),E(this,C,{writable:!0,value:void 0}),E(this,w,{writable:!0,value:void 0}),E(this,B,{writable:!0,value:void 0}),h(this,y,t),h(this,b,i),h(this,x,r),h(this,C,o),h(this,w,a),h(this,B,s)}return i(e,[{key:"id",get:function(){return A(this,y)}},{key:"thumbnails",get:function(){return A(this,b)}},{key:"title",get:function(){return A(this,C)}},{key:"channelTitle",get:function(){return A(this,x)}},{key:"publishTime",get:function(){return A(this,w)}},{key:"isSaved",get:function(){return A(this,B)}}]),e}();function _(n,e,t){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.set(n,t)}var L=new WeakMap,T=new WeakMap,j=new WeakMap,S=new WeakMap,R=new WeakMap,M=new WeakMap,I=function(){function e(){n(this,e),_(this,L,{writable:!0,value:void 0}),_(this,T,{writable:!0,value:void 0}),_(this,j,{writable:!0,value:void 0}),_(this,S,{writable:!0,value:void 0}),_(this,R,{writable:!0,value:void 0}),_(this,M,{writable:!0,value:void 0})}return i(e,[{key:"setId",value:function(n){return h(this,L,n),this}},{key:"setTitle",value:function(n){return h(this,S,n),this}},{key:"setThumbnails",value:function(n){return h(this,T,n),this}},{key:"setChannelTitle",value:function(n){return h(this,j,n),this}},{key:"setPublishTime",value:function(n){return h(this,R,n),this}},{key:"setIsSaved",value:function(n){return h(this,M,n),this}},{key:"build",value:function(){return new k(A(this,L),A(this,T),A(this,j),A(this,S),A(this,R),A(this,M))}}]),e}(),Y=function(){function e(){n(this,e)}return i(e,null,[{key:"generate",value:function(n){var e,t=n.id.videoId,i=(e=t,g(f).includes(e)),r=n.snippet,o=r.thumbnails.high.url,a=r.channelTitle,s=r.title,c=r.publishTime;return(new I).setId(t).setThumbnails(o).setTitle(s).setChannelTitle(a).setPublishTime(c).setIsSaved(i).build()}}]),e}();function $(n,e,t){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.set(n,t)}var W=new WeakMap,z=new WeakMap,q=function(){function e(){n(this,e),$(this,W,{writable:!0,value:void 0}),$(this,z,{writable:!0,value:void 0}),h(this,z,""),h(this,W,"")}var t;return i(e,[{key:"keyword",set:function(n){!function(n){if(function(n){return""===n}(n))throw new Error("검색어를 입력해주세요")}(n),h(this,W,n)}},{key:"search",value:(t=l(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.searchByPage(A(this,W),A(this,z));case 2:return e=n.sent,h(this,z,e.nextPageToken),n.abrupt("return",e.items.map((function(n){return Y.generate(n)})));case 5:case"end":return n.stop()}}),n,this)}))),function(){return t.apply(this,arguments)})},{key:"initPageToken",value:function(){h(this,z,"")}},{key:"saveVideoToLocalStorage",value:function(n){!function(){if(g(f).length>=100)throw new Error("최대 저장 개수는 100개입니다.")}();var e,t=g(f);e=t.concat(n),localStorage.setItem("save",JSON.stringify(e))}}]),e}();const O=function(){function e(){var t,i,r;n(this,e),this.$modalContainer=document.querySelector(".modal-container"),this.$dimmer=document.querySelector(".dimmer"),this.$searchInputKeyword=document.querySelector("#search-input-keyword"),this.$searchButton=document.querySelector("#search-button"),this.$videoListContainer=document.querySelector(".video-list"),this.$searchResult=document.querySelector(".search-result"),this.scrollHandler=this.scrollVideoContainerHandler(),this.requestAdditionalSearchResult=(t=this.scrollHandler.requestAdditionalSearchResult,i=1e3,function(){r||(r=setTimeout((function(){r=null,t()}),i))}).bind(this),this.machine=new q,this.bindEvent()}return i(e,[{key:"toggleModalContainerView",value:function(){this.$modalContainer.classList.toggle("hide")}},{key:"initModalState",value:function(){this.toggleModalContainerView(),this.$videoListContainer.replaceChildren(),this.$searchInputKeyword.value="",this.removeNoResult()}},{key:"removeNoResult",value:function(){var n=document.querySelector(".no-result");n&&(n.remove(),this.$searchResult.classList.remove("search-result--no-result"))}},{key:"bindEvent",value:function(){this.$searchInputKeyword.addEventListener("keypress",this.submitKeywordHandler.bind(this)),this.$searchButton.addEventListener("click",this.submitKeywordHandler.bind(this)),this.$videoListContainer.addEventListener("click",this.saveVideo.bind(this)),this.$videoListContainer.addEventListener("scroll",this.requestAdditionalSearchResult.bind(this))}},{key:"submitKeywordHandler",value:function(n){if("keypress"===n.type&&"Enter"===n.key||"click"===n.type)try{this.scrollHandler.setError(!1),this.machine.keyword=this.$searchInputKeyword.value,this.initVideoState(),this.searchVideo()}catch(n){alert(n)}}},{key:"initVideoState",value:function(){this.removeNoResult(),this.$videoListContainer.replaceChildren(),this.$searchInputKeyword.blur(),this.$videoListContainer.classList.remove("hide"),this.machine.initPageToken()}},{key:"saveVideo",value:function(n){var e=n.target;if(e.classList.contains("video-item__save-button"))try{var t=e.closest("li").dataset.videoId;this.machine.saveVideoToLocalStorage(t),e.classList.add("hide")}catch(n){alert(n.message)}}},{key:"scrollVideoContainerHandler",value:function(){var n=this,e=!1;return{requestAdditionalSearchResult:function(){var t=n.$videoListContainer,i=t.offsetHeight,r=t.scrollHeight,o=t.scrollTop;0===o||e||i+o>=r&&n.searchVideo()},setError:function(n){e=n}}}},{key:"searchVideo",value:function(){var n=this;this.renderSkeletonImage(),this.machine.search().then((function(e){return n.renderResult(e)})).catch((function(e){return n.renderNetworkError(e)})).finally(this.removeSkeleton)}},{key:"renderNetworkError",value:function(n){n.name===v&&(this.scrollHandler.setError(!0),this.$videoListContainer.insertAdjacentHTML("beforeend",s()))}},{key:"renderResult",value:function(n){0!==n.length?this.renderVideo(n):this.renderNoResultImage()}},{key:"renderSkeletonImage",value:function(){this.$videoListContainer.insertAdjacentHTML("beforeend",Array(10).fill().map((function(n){return a()})).join(" "))}},{key:"removeSkeleton",value:function(){document.querySelectorAll(".skeleton-container").forEach((function(n){n.remove()}))}},{key:"renderNoResultImage",value:function(){this.$videoListContainer.classList.add("hide"),this.$searchResult.insertAdjacentHTML("beforeend",o()),this.$searchResult.classList.add("search-result--no-result")}},{key:"renderVideo",value:function(n){var e=this;n.forEach((function(n){e.$videoListContainer.insertAdjacentHTML("beforeend",r(n))}))}}]),e}();(new(function(){function e(){n(this,e),this.$searchModalButton=document.querySelector("#search-modal-button"),this.modalComponent=new O,this.$dimmer=document.querySelector(".dimmer")}return i(e,[{key:"init",value:function(){this.bindEvent()}},{key:"bindEvent",value:function(){this.$searchModalButton.addEventListener("click",this.modalComponent.toggleModalContainerView.bind(this.modalComponent)),this.$dimmer.addEventListener("click",this.modalComponent.initModalState.bind(this.modalComponent))}}]),e}())).init();var N=t(379),V=t.n(N),P=t(795),Z=t.n(P),H=t(569),U=t.n(H),F=t(565),G=t.n(F),K=t(216),X=t.n(K),D=t(589),J=t.n(D),Q=t(340),nn={};nn.styleTagTransform=J(),nn.setAttributes=G(),nn.insert=U().bind(null,"head"),nn.domAPI=Z(),nn.insertStyleElement=X(),V()(Q.Z,nn),Q.Z&&Q.Z.locals&&Q.Z.locals})()})();
//# sourceMappingURL=bundle.js.map