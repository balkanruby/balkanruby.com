
          window.__NEXT_REGISTER_PAGE('/blog', function() {
            var comp = module.exports=webpackJsonp([7],{1:function(e,t){var n=e.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},10:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){var t=e.title;return r.default.createElement("div",{className:"page-title"},r.default.createElement("div",{className:"container"},r.default.createElement("h1",null,t)))};l.defaultProps={title:"Page title"},t.default=l},11:function(e,t,n){var a=n(7),r=n(14);e.exports=n(6)?function(e,t,n){return a.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){var t=e.title,n=e.description,a=e.primaryLink,l=e.primaryLabel,u=e.secondaryLink,c=e.secondaryLabel;return r.default.createElement("div",{className:"cta"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-1"},r.default.createElement("h3",null,t),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),r.default.createElement("div",{className:"btn-wrapper"},l&&r.default.createElement("a",{href:a,className:"btn-primary"},l),c&&r.default.createElement("a",{href:u,className:"btn-secondary"},c))))))};l.defaultProps={title:"Call to action",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia, praesentium blanditiis quo, veniam necessitatibus saepe.",primaryLink:"#",primaryLabel:"Primary",secondaryLink:"#",secondaryLabel:"Secondary"},t.default=l},12:function(e,t,n){var a=n(29),r=n(21);e.exports=function(e){return a(r(e))}},13:function(e,t,n){var a=n(23);e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,r){return e.call(t,n,a,r)}}return function(){return e.apply(t,arguments)}}},14:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},15:function(e,t,n){var a=n(39),r=n(27);e.exports=Object.keys||function(e){return a(e,r)}},155:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(61),l=a(r),u=n(0),c=a(u),o=function(e){var t=e.anchor,n=e.title,a=e.description,r=e.meta,l=e.image;return c.default.createElement("div",{id:t,className:"grid thumb"},c.default.createElement("div",{className:"fourth"},c.default.createElement("img",{src:l,alt:n})),c.default.createElement("div",{className:"eight"},c.default.createElement("h3",null,n),c.default.createElement("div",{className:"meta",dangerouslySetInnerHTML:{__html:r}}),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))},i=function(e){var t=e.list;return c.default.createElement("div",{className:"thumb-feed"},c.default.createElement("div",{className:"container"},t.map(function(e,t){return c.default.createElement(o,(0,l.default)({key:t},e))})))};t.default=i},16:function(e,t){var n=0,a=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+a).toString(36))}},17:function(e,t,n){var a=n(21);e.exports=function(e){return Object(a(e))}},18:function(e,t){t.f={}.propertyIsEnumerable},2:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},21:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},22:function(e,t){var n=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:n)(e)}},23:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},24:function(e,t,n){var a=n(5);e.exports=function(e,t){if(!a(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!a(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!a(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!a(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},248:function(e,t,n){e.exports=n(249)},249:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),u=n(50),c=a(u),o=n(100),i=a(o),f=n(47),s=a(f),d=n(105),m=a(d),p=n(155),v=(a(p),n(115)),h=(a(v),n(99));a(h);t.default=function(){return l.default.createElement(i.default,null,l.default.createElement(c.default,null,l.default.createElement("title",null,"Blog | Balkan Ruby")),l.default.createElement(m.default,{title:"Blog"}),l.default.createElement("br",null),l.default.createElement(s.default,{theme:"blank",spacing:"spacing-bottom"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"grid"},l.default.createElement("div",{className:"article-list"},l.default.createElement("div",{className:"article"},l.default.createElement("h3",null,l.default.createElement("a",{href:"/blog/community-tickets"},"Community Tickets")),l.default.createElement("div",{className:"meta"},"by"," ",l.default.createElement("a",{href:"https://twitter.com/gsamokovarov",target:"_blank"},"Genadi")),l.default.createElement("p",null,"We may be sold out, but we have saved a few tickets to give away for free!"))),l.default.createElement("div",{className:"article-list"},l.default.createElement("div",{className:"article"},l.default.createElement("h3",null,l.default.createElement("a",{href:"/blog/introducing-generator"},"The Venue")),l.default.createElement("div",{className:"meta"},"by"," ",l.default.createElement("a",{href:"https://twitter.com/vestimir",target:"_blank"},"Vestimir")),l.default.createElement("p",null,"Today we are excited to reveal the venue for Balkan Ruby! The conference will be held on 25th and 26th of May at Generator Sofia.")),l.default.createElement("div",{className:"article"},l.default.createElement("h3",null,l.default.createElement("a",{href:"/blog/cfp-time"},"CFP Time")),l.default.createElement("div",{className:"meta"},"by"," ",l.default.createElement("a",{href:"https://twitter.com/gsamokovarov",target:"_blank"},"Genadi")),l.default.createElement("p",null,"The Balkans are such a nice place to be and we can help you get here for free through our ",l.default.createElement("a",{href:"https://goo.gl/forms/uvxE2CR7I3fwYCtl2",targe:"_blank"},"Call for Papers"),"!")),l.default.createElement("div",{className:"article"},l.default.createElement("h3",null,l.default.createElement("a",{href:"/blog/announcement"},"Introducing Balkan Ruby")),l.default.createElement("div",{className:"meta"},"by"," ",l.default.createElement("a",{href:"https://twitter.com/gsamokovarov",target:"_blank"},"Genadi")),l.default.createElement("p",null,"Meet Balkan Ruby, an event not just for Bulgaria, but the whole Balkan region. With it, we aim to introduce the local communities to each other and invite developers from all over Europe to come, share and exchange ideas with us. The dates are 25th and 26th of May 2018, the city – Sofia, Bulgaria.")))))),l.default.createElement(s.default,{theme:"purple-bg",spacing:"spacing-both",id:"newsletter"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"grid"},l.default.createElement("div",{className:"shift-2"},l.default.createElement("div",{className:"section-title"},l.default.createElement("h2",null,"Subscribe for news")))))),l.default.createElement(s.default,{theme:"purple-bg",spacing:"none"},l.default.createElement("div",{className:"newsletter"},l.default.createElement("form",{action:"//balkanruby.us16.list-manage.com/subscribe/post?u=690a4f9d71c3a29f39792b453&id=d13d0bd575",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:""},l.default.createElement("div",{className:"form-group"},l.default.createElement("input",{type:"email",value:"",name:"EMAIL",className:"required email",id:"mce-EMAIL",placeholder:"you@awesome.conf"})),l.default.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},l.default.createElement("input",{type:"text",name:"b_690a4f9d71c3a29f39792b453_d13d0bd575",tabIndex:"-1",value:""})),l.default.createElement("button",{type:"submit",value:"Subscribe",name:"subscribe",className:"btn-primary"},"Subscribe")))))}},25:function(e,t,n){var a=n(26)("keys"),r=n(16);e.exports=function(e){return a[e]||(a[e]=r(e))}},26:function(e,t,n){var a=n(2),r=a["__core-js_shared__"]||(a["__core-js_shared__"]={});e.exports=function(e){return r[e]||(r[e]={})}},27:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},29:function(e,t,n){var a=n(20);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},3:function(e,t,n){var a=n(2),r=n(1),l=n(13),u=n(11),c=n(9),o=function(e,t,n){var i,f,s,d=e&o.F,m=e&o.G,p=e&o.S,v=e&o.P,h=e&o.B,b=e&o.W,E=m?r:r[t]||(r[t]={}),y=E.prototype,g=m?a:p?a[t]:(a[t]||{}).prototype;m&&(n=t);for(i in n)(f=!d&&g&&void 0!==g[i])&&c(E,i)||(s=f?g[i]:n[i],E[i]=m&&"function"!=typeof g[i]?n[i]:h&&f?l(s,a):b&&g[i]==s?function(e){var t=function(t,n,a){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(s):v&&"function"==typeof s?l(Function.call,s):s,v&&((E.virtual||(E.virtual={}))[i]=s,e&o.R&&y&&!y[i]&&u(y,i,s)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,e.exports=o},30:function(e,t){t.f=Object.getOwnPropertySymbols},32:function(e,t,n){var a=n(5),r=n(2).document,l=a(r)&&a(r.createElement);e.exports=function(e){return l?r.createElement(e):{}}},34:function(e,t,n){var a=n(22),r=Math.min;e.exports=function(e){return e>0?r(a(e),9007199254740991):0}},38:function(e,t,n){e.exports=!n(6)&&!n(10)(function(){return 7!=Object.defineProperty(n(32)("div"),"a",{get:function(){return 7}}).a})},39:function(e,t,n){var a=n(9),r=n(12),l=n(52)(!1),u=n(25)("IE_PROTO");e.exports=function(e,t){var n,c=r(e),o=0,i=[];for(n in c)n!=u&&a(c,n)&&i.push(n);for(;t.length>o;)a(c,n=t[o++])&&(~l(i,n)||i.push(n));return i}},5:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},52:function(e,t,n){var a=n(12),r=n(34),l=n(53);e.exports=function(e){return function(t,n,u){var c,o=a(t),i=r(o.length),f=l(u,i);if(e&&n!=n){for(;i>f;)if((c=o[f++])!=c)return!0}else for(;i>f;f++)if((e||f in o)&&o[f]===n)return e||f||0;return!e&&-1}}},53:function(e,t,n){var a=n(22),r=Math.max,l=Math.min;e.exports=function(e,t){return e=a(e),e<0?r(e+t,0):l(e,t)}},57:function(e,t,n){e.exports={default:n(62),__esModule:!0}},6:function(e,t,n){e.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},61:function(e,t,n){"use strict";t.__esModule=!0;var a=n(57),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},62:function(e,t,n){n(63),e.exports=n(1).Object.assign},63:function(e,t,n){var a=n(3);a(a.S+a.F,"Object",{assign:n(64)})},64:function(e,t,n){"use strict";var a=n(15),r=n(30),l=n(18),u=n(17),c=n(29),o=Object.assign;e.exports=!o||n(10)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=o({},e)[n]||Object.keys(o({},t)).join("")!=a})?function(e,t){for(var n=u(e),o=arguments.length,i=1,f=r.f,s=l.f;o>i;)for(var d,m=c(arguments[i++]),p=f?a(m).concat(f(m)):a(m),v=p.length,h=0;v>h;)s.call(m,d=p[h++])&&(n[d]=m[d]);return n}:o},7:function(e,t,n){var a=n(8),r=n(38),l=n(24),u=Object.defineProperty;t.f=n(6)?Object.defineProperty:function(e,t,n){if(a(e),t=l(t,!0),a(n),r)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},8:function(e,t,n){var a=n(5);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},9:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){var t=e.text,n=e.centered,a=e.children;return r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},t?r.default.createElement("div",{className:"text "+(n?"align-center":""),dangerouslySetInnerHTML:{__html:t}}):r.default.createElement("div",{className:"text "+(n?"align-center":"")},r.default.createElement("div",{className:"text"},a))))};t.default=l}},[248]);
            return { page: comp.default }
          })
        