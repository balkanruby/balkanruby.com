
          window.__NEXT_REGISTER_PAGE('/tickets_wip', function() {
            var comp = module.exports=webpackJsonp([4],[,,function(e,t,n){var r=n(50)("wks"),u=n(29),a=n(4).Symbol,o="function"==typeof a;(e.exports=function(e){return r[e]||(r[e]=o&&a[e]||(o?a:u)("Symbol."+e))}).store=r},,,,,,,,,function(e,t){e.exports={}},function(e,t,n){var r=n(5).f,u=n(8),a=n(2)("toStringTag");e.exports=function(e,t,n){e&&!u(e=n?e:e.prototype,a)&&r(e,a,{configurable:!0,value:t})}},,,function(e,t){e.exports=!0},function(e,t,n){var r=n(6),u=n(60),a=n(51),o=n(49)("IE_PROTO"),i=function(){},l=function(){var e,t=n(86)("iframe"),r=a.length;for(t.style.display="none",n(44).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;r--;)delete l.prototype[a[r]];return l()};e.exports=Object.create||function(e,t){var n;return null!==e?(i.prototype=r(e),n=new i,i.prototype=null,n[o]=e):n=l(),void 0===t?n:u(n,t)}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(52),u=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},,function(e,t,n){"use strict";var r=n(61)(!0);n(25)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){t.f=n(2)},function(e,t,n){var r=n(4),u=n(1),a=n(15),o=n(21),i=n(5).f;e.exports=function(e){var t=u.Symbol||(u.Symbol=a?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||i(t,e,{value:o.f(e)})}},,function(e,t,n){n(57);for(var r=n(4),u=n(7),a=n(11),o=n(2)("toStringTag"),i="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<i.length;l++){var c=i[l],f=r[c],s=f&&f.prototype;s&&!s[o]&&u(s,o,c),a[c]=a.Array}},function(e,t,n){"use strict";var r=n(15),u=n(3),a=n(36),o=n(7),i=n(8),l=n(11),c=n(59),f=n(12),s=n(37),d=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};e.exports=function(e,t,n,m,v,h,_){c(n,t,m);var b,g,E,k=function(e){if(!p&&e in C)return C[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",O="values"==v,x=!1,C=e.prototype,T=C[d]||C["@@iterator"]||v&&C[v],M=!p&&T||k(v),j=v?O?k("entries"):M:void 0,P="Array"==t?C.entries||T:T;if(P&&(E=s(P.call(new e)))!==Object.prototype&&E.next&&(f(E,S,!0),r||i(E,d)||o(E,d,y)),O&&T&&"values"!==T.name&&(x=!0,M=function(){return T.call(this)}),r&&!_||!p&&!x&&C[d]||o(C,d,M),l[t]=M,l[S]=y,v)if(b={values:O?M:k("values"),keys:h?M:k("keys"),entries:j},_)for(g in b)g in C||a(C,g,b[g]);else u(u.P+u.F*(p||x),t,b);return b}},,,function(e,t,n){e.exports={default:n(68),__esModule:!0}},,,function(e,t,n){"use strict";t.__esModule=!0;var r=n(33),u=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,u.default)(t))&&"function"!=typeof t?e:t}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=n(79),a=r(u),o=n(83),i=r(o),l=n(33),c=r(l);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,c.default)(t)));e.prototype=(0,i.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(a.default?(0,a.default)(e,t):e.__proto__=t)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=n(70),a=r(u),o=n(72),i=r(o),l="function"==typeof i.default&&"symbol"==typeof a.default?function(e){return typeof e}:function(e){return e&&"function"==typeof i.default&&e.constructor===i.default&&e!==i.default.prototype?"symbol":typeof e};t.default="function"==typeof i.default&&"symbol"===l(a.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof i.default&&e.constructor===i.default&&e!==i.default.prototype?"symbol":void 0===e?"undefined":l(e)}},function(e,t,n){var r=n(30),u=n(23),a=n(14),o=n(48),i=n(8),l=n(104),c=Object.getOwnPropertyDescriptor;t.f=n(10)?c:function(e,t){if(e=a(e),t=o(t,!0),l)try{return c(e,t)}catch(e){}if(i(e,t))return u(!r.f.call(e,t),e[t])}},,function(e,t,n){e.exports=n(7)},function(e,t,n){var r=n(8),u=n(27),a=n(49)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=u(e),r(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t){},,function(e,t,n){var r=n(29)("meta"),u=n(9),a=n(8),o=n(5).f,i=0,l=Object.isExtensible||function(){return!0},c=!n(19)(function(){return l(Object.preventExtensions({}))}),f=function(e){o(e,r,{value:{i:"O"+ ++i,w:{}}})},s=function(e,t){if(!u(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,r)){if(!l(e))return"F";if(!t)return"E";f(e)}return e[r].i},d=function(e,t){if(!a(e,r)){if(!l(e))return!0;if(!t)return!1;f(e)}return e[r].w},p=function(e){return c&&y.NEED&&l(e)&&!a(e,r)&&f(e),e},y=e.exports={KEY:r,NEED:!1,fastKey:s,getWeak:d,onFreeze:p}},function(e,t,n){var r=n(105),u=n(51).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,u)}},function(e,t,n){var r=n(35),u=n(2)("toStringTag"),a="Arguments"==r(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=o(t=Object(e),u))?n:a?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var r=n(4).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(35);e.exports=Array.isArray||function(e){return"Array"==r(e)}},,,,,,,function(e,t,n){e.exports={default:n(66),__esModule:!0}},,function(e,t,n){var r=n(3),u=n(1),a=n(19);e.exports=function(e,t){var n=(u.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",o)}},,,function(e,t,n){"use strict";var r=n(58),u=n(43),a=n(11),o=n(14);e.exports=n(25)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,u(1)):"keys"==t?u(0,n):"values"==t?u(0,e[n]):u(0,[n,e[n]])},"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t,n){"use strict";var r=n(16),u=n(23),a=n(12),o={};n(7)(o,n(2)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(o,{next:u(1,n)}),a(e,t+" Iterator")}},function(e,t,n){var r=n(5),u=n(6),a=n(26);e.exports=n(10)?Object.defineProperties:function(e,t){u(e);for(var n,o=a(t),i=o.length,l=0;i>l;)r.f(e,n=o[l++],t[n]);return e}},function(e,t,n){var r=n(94),u=n(93);e.exports=function(e){return function(t,n){var a,o,i=String(u(t)),l=r(n),c=i.length;return l<0||l>=c?e?"":void 0:(a=i.charCodeAt(l),a<55296||a>56319||l+1===c||(o=i.charCodeAt(l+1))<56320||o>57343?e?i.charAt(l):a:e?i.slice(l,l+2):o-56320+(a-55296<<10)+65536)}}},function(e,t,n){var r=n(42),u=n(2)("iterator"),a=n(11);e.exports=n(1).getIteratorMethod=function(e){if(void 0!=e)return e[u]||e["@@iterator"]||a[r(e)]}},,,,function(e,t,n){n(67);var r=n(1).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(3);r(r.S+r.F*!n(10),"Object",{defineProperty:n(5).f})},function(e,t,n){n(69),e.exports=n(1).Object.getPrototypeOf},function(e,t,n){var r=n(27),u=n(37);n(54)("getPrototypeOf",function(){return function(e){return u(r(e))}})},function(e,t,n){e.exports={default:n(71),__esModule:!0}},function(e,t,n){n(20),n(24),e.exports=n(21).f("iterator")},function(e,t,n){e.exports={default:n(73),__esModule:!0}},function(e,t,n){n(74),n(38),n(77),n(78),e.exports=n(1).Symbol},function(e,t,n){"use strict";var r=n(4),u=n(8),a=n(10),o=n(3),i=n(36),l=n(40).KEY,c=n(19),f=n(50),s=n(12),d=n(29),p=n(2),y=n(21),m=n(22),v=n(75),h=n(45),_=n(6),b=n(9),g=n(14),E=n(48),k=n(23),S=n(16),O=n(76),x=n(34),C=n(5),T=n(26),M=x.f,j=C.f,P=O.f,w=r.Symbol,q=r.JSON,A=q&&q.stringify,L=p("_hidden"),N=p("toPrimitive"),I={}.propertyIsEnumerable,F=f("symbol-registry"),R=f("symbols"),D=f("op-symbols"),B=Object.prototype,J="function"==typeof w,V=r.QObject,G=!V||!V.prototype||!V.prototype.findChild,W=a&&c(function(){return 7!=S(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=M(B,t);r&&delete B[t],j(e,t,n),r&&e!==B&&j(B,t,r)}:j,z=function(e){var t=R[e]=S(w.prototype);return t._k=e,t},H=J&&"symbol"==typeof w.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof w},Q=function(e,t,n){return e===B&&Q(D,t,n),_(e),t=E(t,!0),_(n),u(R,t)?(n.enumerable?(u(e,L)&&e[L][t]&&(e[L][t]=!1),n=S(n,{enumerable:k(0,!1)})):(u(e,L)||j(e,L,k(1,{})),e[L][t]=!0),W(e,t,n)):j(e,t,n)},U=function(e,t){_(e);for(var n,r=v(t=g(t)),u=0,a=r.length;a>u;)Q(e,n=r[u++],t[n]);return e},K=function(e,t){return void 0===t?S(e):U(S(e),t)},Y=function(e){var t=I.call(this,e=E(e,!0));return!(this===B&&u(R,e)&&!u(D,e))&&(!(t||!u(this,e)||!u(R,e)||u(this,L)&&this[L][e])||t)},Z=function(e,t){if(e=g(e),t=E(t,!0),e!==B||!u(R,t)||u(D,t)){var n=M(e,t);return!n||!u(R,t)||u(e,L)&&e[L][t]||(n.enumerable=!0),n}},X=function(e){for(var t,n=P(g(e)),r=[],a=0;n.length>a;)u(R,t=n[a++])||t==L||t==l||r.push(t);return r},$=function(e){for(var t,n=e===B,r=P(n?D:g(e)),a=[],o=0;r.length>o;)!u(R,t=r[o++])||n&&!u(B,t)||a.push(R[t]);return a};J||(w=function(){if(this instanceof w)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===B&&t.call(D,n),u(this,L)&&u(this[L],e)&&(this[L][e]=!1),W(this,e,k(1,n))};return a&&G&&W(B,e,{configurable:!0,set:t}),z(e)},i(w.prototype,"toString",function(){return this._k}),x.f=Z,C.f=Q,n(41).f=O.f=X,n(30).f=Y,n(53).f=$,a&&!n(15)&&i(B,"propertyIsEnumerable",Y,!0),y.f=function(e){return z(p(e))}),o(o.G+o.W+o.F*!J,{Symbol:w});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)p(ee[te++]);for(var ne=T(p.store),re=0;ne.length>re;)m(ne[re++]);o(o.S+o.F*!J,"Symbol",{for:function(e){return u(F,e+="")?F[e]:F[e]=w(e)},keyFor:function(e){if(!H(e))throw TypeError(e+" is not a symbol!");for(var t in F)if(F[t]===e)return t},useSetter:function(){G=!0},useSimple:function(){G=!1}}),o(o.S+o.F*!J,"Object",{create:K,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:Z,getOwnPropertyNames:X,getOwnPropertySymbols:$}),q&&o(o.S+o.F*(!J||c(function(){var e=w();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],u=1;arguments.length>u;)r.push(arguments[u++]);if(n=t=r[1],(b(t)||void 0!==e)&&!H(e))return h(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!H(t))return t}),r[1]=t,A.apply(q,r)}}),w.prototype[N]||n(7)(w.prototype,N,w.prototype.valueOf),s(w,"Symbol"),s(Math,"Math",!0),s(r.JSON,"JSON",!0)},function(e,t,n){var r=n(26),u=n(53),a=n(30);e.exports=function(e){var t=r(e),n=u.f;if(n)for(var o,i=n(e),l=a.f,c=0;i.length>c;)l.call(e,o=i[c++])&&t.push(o);return t}},function(e,t,n){var r=n(14),u=n(41).f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return u(e)}catch(e){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?i(e):u(r(e))}},function(e,t,n){n(22)("asyncIterator")},function(e,t,n){n(22)("observable")},function(e,t,n){e.exports={default:n(80),__esModule:!0}},function(e,t,n){n(81),e.exports=n(1).Object.setPrototypeOf},function(e,t,n){var r=n(3);r(r.S,"Object",{setPrototypeOf:n(82).set})},function(e,t,n){var r=n(9),u=n(6),a=function(e,t){if(u(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n(13)(Function.call,n(34).f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return a(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:a}},function(e,t,n){e.exports={default:n(84),__esModule:!0}},function(e,t,n){n(85);var r=n(1).Object;e.exports=function(e,t){return r.create(e,t)}},function(e,t,n){var r=n(3);r(r.S,"Object",{create:n(16)})},,,,function(e,t,n){var r=n(6);e.exports=function(e,t,n,u){try{return u?t(r(n)[0],n[1]):t(n)}catch(t){var a=e.return;throw void 0!==a&&r(a.call(e)),t}}},function(e,t,n){var r=n(11),u=n(2)("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||a[u]===e)}},function(e,t,n){var r=n(2)("iterator"),u=!1;try{var a=[7][r]();a.return=function(){u=!0},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!u)return!1;var n=!1;try{var a=[7],o=a[r]();o.next=function(){return{done:n=!0}},a[r]=function(){return o},e(a)}catch(e){}return n}},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";t.__esModule=!0;var r=n(115),u=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,u.default)(e)}},function(e,t,n){e.exports={default:n(143),__esModule:!0}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){n(20),n(144),e.exports=n(1).Array.from},function(e,t,n){"use strict";var r=n(13),u=n(3),a=n(27),o=n(89),i=n(90),l=n(87),c=n(145),f=n(62);u(u.S+u.F*!n(91)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,u,s,d=a(e),p="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,v=void 0!==m,h=0,_=f(d);if(v&&(m=r(m,y>2?arguments[2]:void 0,2)),void 0==_||p==Array&&i(_))for(t=l(d.length),n=new p(t);t>h;h++)c(n,h,v?m(d[h],h):d[h]);else for(s=_.call(d),n=new p;!(u=s.next()).done;h++)c(n,h,v?o(s,m,[u.value,h],!0):u.value);return n.length=h,n}})},function(e,t,n){"use strict";var r=n(5),u=n(23);e.exports=function(e,t,n){t in e?r.f(e,t,u(0,n)):e[t]=n}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),a=function(e){var t=e.type,n=e.label,r=e.value,a=e.required,o=e.onChange;return u.default.createElement("div",{className:"form-group"},u.default.createElement("label",null,n," ",a?"":"(optional)"),u.default.createElement("input",{type:t,value:r,onChange:function(e){return o(e.target.value,e)}}))};a.defaultProps={type:"text",optional:!0,value:""},t.default=a},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),a=function(e){var t=e.type,n=e.name,r=e.label,a=e.value,o=e.checked,i=e.required,l=e.onChange;return u.default.createElement("div",{className:"form-group checkbox"},u.default.createElement("label",null,u.default.createElement("input",{type:t,name:n,value:a,checked:o,onChange:function(e){return l(e.target.checked,e)}}),u.default.createElement("span",null,r," ",i?"":"(optional)")))};a.defaultProps={type:"checkbox",optional:!0,value:""},t.default=a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(283)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=r(u),o=n(56),i=r(o),l=n(102),c=r(l),f=n(46),s=r(f),d=n(284),p=r(d),y={id:1,name:"Balkan Ruby",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit necessitatibus deserunt minima, reprehenderit odit similique quibusdam libero praesentium cupiditate dignissimos et laboriosam voluptate.",active:!0,ticket_types:[{id:13,name:"Early Bird",active:!1,price:79},{id:14,name:"Regular",active:!0,price:99},{id:15,name:"Workshop",active:!0,price:199}]};t.default=function(){return a.default.createElement(c.default,null,a.default.createElement(i.default,null,a.default.createElement("title",null,"Tickets | Balkan Ruby")),a.default.createElement(s.default,{theme:"blank",spacing:"spacing-both"},a.default.createElement("div",{className:"container"},a.default.createElement("h1",null,"Tickets"),a.default.createElement(p.default,{event:y}))))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(285),a=r(u),o=n(287),i=r(o),l=n(131),c=r(l),f=n(114),s=r(f),d=n(28),p=r(d),y=n(17),m=r(y),v=n(18),h=r(v),_=n(31),b=r(_),g=n(32),E=r(g),k=n(0),S=r(k),O=n(288),x=r(O),C=n(289),T=r(C),M=n(290),j=r(M),P=n(291),w=r(P),q=function(e){function t(e){(0,m.default)(this,t);var n=(0,b.default)(this,(t.__proto__||(0,p.default)(t)).call(this,e)),r=e.event.ticket_types.filter(function(e){return!0===e.active});return n.state={activeTicketTypes:r,quantities:r.map(function(e,t){return{typeId:e.id,quantity:0===t?1:0}}),currentStep:"tickets-list",buyer:{first_name:"",last_name:"",email:"",type:"individual",isCompany:!1,company:"",company_id:"",company_vat:"",company_country:"",company_city:"",company_zip:"",company_address:""},tickets:[],paymentType:"bank"},n}return(0,E.default)(t,e),(0,h.default)(t,[{key:"updateQuantity",value:function(e,t){var n=this.state.quantities,r=n.findIndex(function(t){return t.typeId===e}),u=[].concat((0,s.default)(n.slice(0,r)),[{typeId:e,quantity:t}],(0,s.default)(n.slice(r+1)));this.setState({quantities:u})}},{key:"updateBuyer",value:function(e,t){var n=this.state.buyer,r=(0,c.default)({},n,(0,i.default)({},e,t));this.setState({buyer:r})}},{key:"handleUpdateTicket",value:function(e,t,n,r){var u,a=this.state.tickets;console.log("idx",t);var o=[].concat((0,s.default)(a.slice(0,t)),[(0,c.default)({},a[t],(u={},(0,i.default)(u,n,r),(0,i.default)(u,"ticketType",e),u))],(0,s.default)(a.slice(t+1)));this.setState({tickets:o})}},{key:"goToStep",value:function(e){return"tickets"===e?void this.setState({currentStep:"tickets"}):"customer-info"===e?void this.setState({currentStep:"customer-info"}):"finish"===e?void this.setState({currentStep:"finish"}):void 0}},{key:"render",value:function(){var e=this,t=(this.props.event,this.state),n=t.currentStep,r=t.activeTicketTypes,u=t.quantities,o=t.buyer,i=t.tickets,l=t.paymentType,c=u.filter(function(e){return e.quantity>0}).map(function(e){return e.typeId}),f=r.filter(function(e){return-1!==c.indexOf(e.id)});return S.default.createElement("div",{className:"tickets-form"},"tickets-list"===n&&S.default.createElement("div",null,S.default.createElement(x.default,{ticketTypes:r,quantities:u,onChange:function(t,n){return e.updateQuantity(t,n)}}),S.default.createElement("button",{type:"button",onClick:function(){return e.goToStep("tickets")},className:"btn-primary"},"Order")),"tickets"===n&&S.default.createElement("div",null,S.default.createElement(j.default,{ticketTypes:f,quantities:u,tickets:i,onChange:function(t,n,r,u){return e.handleUpdateTicket(t,n,r,u)}}),S.default.createElement("button",{type:"button",onClick:function(){return e.goToStep("customer-info")},className:"btn-primary"},"Proceed")),"customer-info"===n&&S.default.createElement("div",null,S.default.createElement(T.default,{ticketTypes:r,quantities:u,buyer:o,onChange:function(t,n){return e.updateBuyer(t,n)}}),S.default.createElement(w.default,{paymentType:l,onChange:function(t){return e.setState({paymentType:t})}}),S.default.createElement("button",{type:"button",onClick:function(){return e.goToStep("finish")},className:"btn-primary"},"Complete order")),"finish"===n&&S.default.createElement("pre",null,(0,a.default)({tickets:i,buyer:o,paymentType:l},null,2)))}}]),t}(S.default.Component);t.default=q},function(e,t,n){e.exports={default:n(286),__esModule:!0}},function(e,t,n){var r=n(1),u=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return u.stringify.apply(u,arguments)}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(52),u=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e,t,n){return t in e?(0,u.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(28),a=r(u),o=n(17),i=r(o),l=n(18),c=r(l),f=n(31),s=r(f),d=n(32),p=r(d),y=n(0),m=r(y),v=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.ticketTypes,n=e.quantities,r=e.onChange;return m.default.createElement("div",{className:"tickets-list"},m.default.createElement("table",null,m.default.createElement("thead",null,m.default.createElement("tr",null,m.default.createElement("th",null,"Ticket category"),m.default.createElement("th",null,"Price"),m.default.createElement("th",null,"Quantity"))),m.default.createElement("tbody",null,t.map(function(e){return m.default.createElement("tr",{key:e.id},m.default.createElement("td",null,e.name),m.default.createElement("td",null,"EUR ",e.price),m.default.createElement("td",null,m.default.createElement("input",{type:"number",value:n.find(function(t){return t.typeId===e.id}).quantity,onChange:function(t){return r(e.id,parseInt(t.target.value,10))}})))}))))}}]),t}(m.default.Component);t.default=v},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(28),a=r(u),o=n(17),i=r(o),l=n(18),c=r(l),f=n(31),s=r(f),d=n(32),p=r(d),y=n(0),m=r(y),v=n(178),h=r(v),_=n(186),b=r(_),g=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.quantities,e.ticketTypes,e.buyer),n=e.onChange;return m.default.createElement("div",null,m.default.createElement("h3",null,"Billing information"),m.default.createElement(h.default,{label:"First name",value:t.first_name,onChange:function(e){return n("first_name",e)},required:!0}),m.default.createElement(h.default,{label:"Last name",value:t.last_name,onChange:function(e){return n("last_name",e)},required:!0}),m.default.createElement(h.default,{label:"Email",value:t.email,onChange:function(e){return n("email",e)},required:!0,type:"email"}),m.default.createElement(b.default,{label:"This is a company",value:t.isCompany,onChange:function(e){return n("isCompany",e)}}),t.isCompany&&m.default.createElement("div",null,m.default.createElement(h.default,{label:"Company",value:t.company,onChange:function(e){return n("company",e)},required:!0}),m.default.createElement(h.default,{label:"Company ID",value:t.company_id,onChange:function(e){return n("company_id",e)},required:!0}),m.default.createElement(h.default,{label:"Company VAT",value:t.company_vat,onChange:function(e){return n("company_vat",e)},required:!0}),m.default.createElement(h.default,{label:"Country",value:t.company_country,onChange:function(e){return n("company_country",e)},required:!0}),m.default.createElement(h.default,{label:"City",value:t.company_city,onChange:function(e){return n("company_city",e)},required:!0}),m.default.createElement(h.default,{label:"ZIP",value:t.company_zip,onChange:function(e){return n("company_zip",e)},required:!0}),m.default.createElement(h.default,{label:"Address",value:t.company_address,onChange:function(e){return n("company_address",e)},required:!0})))}}]),t}(m.default.Component);t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(115),a=r(u),o=n(0),i=r(o),l=n(178),c=r(l),f=function(e,t){return e.find(function(e){return parseInt(e.typeId,10)===parseInt(t,10)}).quantity},s=function(e){return(0,a.default)(Array(e).keys())},d=function(e){var t=e.ticketTypes,n=e.quantities,r=e.tickets,u=e.onChange;return i.default.createElement("div",null,t.map(function(e){return i.default.createElement("div",{key:e.id},i.default.createElement("h3",null,e.name),s(f(n,e.id)).map(function(t){return i.default.createElement("div",{key:t},i.default.createElement("h4",null,"Ticket ",t+1,": €",e.price),i.default.createElement(c.default,{label:"First name",value:r[t]&&r[t].first_name,onChange:function(n){return u(e.id,parseInt(t,10),"first_name",n)},required:!0}),i.default.createElement(c.default,{label:"Last name",value:r[t]&&r[t].last_name,onChange:function(n){return u(e.id,parseInt(t,10),"last_name",n)},required:!0}),i.default.createElement(c.default,{label:"Email",value:r[t]&&r[t].email,onChange:function(n){return u(e.id,parseInt(t,10),"email",n)},required:!0}))}))}))};t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(28),a=r(u),o=n(17),i=r(o),l=n(18),c=r(l),f=n(31),s=r(f),d=n(32),p=r(d),y=n(0),m=r(y),v=n(178),h=(r(v),n(186)),_=r(h),b=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.paymentType,n=e.onChange;return m.default.createElement("div",null,m.default.createElement("h3",null,"Payment type"),m.default.createElement(_.default,{name:"payment_type",type:"radio",label:"Bank transfer",value:t,checked:"bank"===t,onChange:function(e){return n("bank")},required:!0}),m.default.createElement(_.default,{name:"payment_type",type:"radio",label:"Card",value:t,checked:"card"===t,onChange:function(e){return n("card")},required:!0}))}}]),t}(m.default.Component);t.default=b}],[282]);
            return { page: comp.default }
          })
        