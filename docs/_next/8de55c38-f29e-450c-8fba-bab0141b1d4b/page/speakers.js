
          window.__NEXT_REGISTER_PAGE('/speakers', function() {
            var comp = module.exports=webpackJsonp([9],{100:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=n(l),u=a(32),i=n(u),d=a(101),c=n(d),o=function(e){var t=e.title,a=void 0===t?"Newsletter":t,n=e.theme,l=void 0===n?"purple-bg":n;return r.default.createElement(i.default,{theme:l,spacing:"spacing-both"},r.default.createElement(c.default,{theme:l,name:a}),r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-1"},r.default.createElement("p",null,"Don't miss a conference update by subscribing to our newsletter. We don't give your email to partners and we won't spam you often.")))),r.default.createElement("div",{className:"newsletter",dangerouslySetInnerHTML:{__html:'\n      <form\n        action="//balkanruby.us16.list-manage.com/subscribe/post?u=690a4f9d71c3a29f39792b453&amp;id=d13d0bd575"\n        method="post"\n        id="mc-embedded-subscribe-form"\n        name="mc-embedded-subscribe-form"\n        class="validate"\n        target="_blank"\n        noValidate=""\n      >\n        <div class="form-group">\n          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="you@awesome.conf" />\n          <button type="submit" value="Subscribe" name="subscribe" class="btn-primary">\n            Subscribe\n          </button>\n        </div>\n        <div style="position: absolute; left: -5000px;" aria-hidden="true">\n          <input type="text" name="b_690a4f9d71c3a29f39792b453_d13d0bd575" tabIndex="-1" value="" />\n        </div>\n      </form>\n    '}}))};t.default=o},101:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=n(l),u=a(32),i=n(u);t.default=function(e){var t=e.theme,a=e.name;return r.default.createElement(i.default,{id:"speakers",theme:t||"blank",spacing:"spacing-both",container:!0},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-2"},r.default.createElement("div",{className:"section-title"},r.default.createElement("h2",null,a))))))}},113:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=n(l),u=a(46),i=n(u),d=a(121),c=n(d),o=a(122),s=n(o),m=a(100),f=n(m);t.default=function(e){var t=e.children;return r.default.createElement("div",{className:"darkside"},r.default.createElement(i.default,null,r.default.createElement("title",null,"Balkan Ruby – 17-18 May, 2019 – Sofia, Bulgaria"),r.default.createElement("meta",{name:"description",content:"Brand new conference about Ruby and satellite technologies. Visit Sofia, Bulgaria and meet like-minded Ruby developers from all over Europe."})),r.default.createElement(c.default,null),t,r.default.createElement(f.default,null),r.default.createElement(s.default,null))}},114:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={speakers:[{anchor:"aaron",image:"/static/images/speakers/aaron.png",link:"http://tenderlovemaking.com",name:"Aaron Patterson",company:"GitHub",bio:"\n        <p>\n          Tender lovemaking! Ruby & Rails core team member.\n        </p>\n      ",talk:"Keynote",description:"\n        <p>Coming soon. </p>\n      "},{anchor:"eileen",image:"/static/images/speakers/eileen.png",link:"http://eileencodes.com/",name:"Eileen Uchitelle",company:"GitHub",bio:"\n        <p>\n          Senior Systems Engineer at GitHub. Avid contributor to Open Source\n          and Rails Core Team and the Rails Security Team member. Enjoy\n          speaking at conferences, usually about performance or contributing to\n          Open Source. Other than writing code, enjoys craft beer and hiking\n          with her husband, Abe and their dog, Arya.\n        </p>\n      ",talk:"Keynote",description:"\n        <p>Coming soon. </p>\n      "}]};t.default=n},171:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(45),r=n(l),u=a(0),i=n(u),d=function(e){var t=e.anchor,a=e.title,n=e.description,l=e.meta,r=e.image;return i.default.createElement("div",{id:t,className:"grid thumb"},i.default.createElement("div",{className:"fourth"},i.default.createElement("img",{src:r,alt:a})),i.default.createElement("div",{className:"eight"},i.default.createElement("h3",null,a),i.default.createElement("div",{className:"meta",dangerouslySetInnerHTML:{__html:l}}),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))},c=function(e){var t=e.list;return i.default.createElement("div",{className:"thumb-feed"},i.default.createElement("div",{className:"container"},t.map(function(e,t){return i.default.createElement(d,(0,r.default)({key:t},e))})))};t.default=c},275:function(e,t,a){e.exports=a(276)},276:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=n(l),u=a(46),i=n(u),d=a(113),c=n(d),o=a(32),s=n(o),m=a(93),f=n(m),p=a(171),b=n(p),v=a(114),g=n(v),h=g.default.speakers.map(function(e){return{anchor:e.anchor,image:e.image,link:e.link,title:e.name,description:e.bio,meta:(e.company?"<strong>"+e.company+"</strong>, ":"")+"<a href="+e.link+' target="_blank">'+e.link+"</a>"}});t.default=function(){return r.default.createElement(c.default,null,r.default.createElement(i.default,null,r.default.createElement("title",null,"Speakers | Balkan Ruby")),r.default.createElement(f.default,{title:"Speakers"}),r.default.createElement(s.default,{theme:"blank",spacing:"spacing-both"},r.default.createElement(b.default,{list:h})))}},45:function(e,t,a){"use strict";t.__esModule=!0;var n=a(74),l=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=l.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}},93:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t=e.title,a=e.theme,n=void 0===a?"blank":a;return l.default.createElement("div",{className:["page-title",n].join(" ")},l.default.createElement("div",{className:"container"},l.default.createElement("h1",null,t)))};r.defaultProps={title:"Page title"},t.default=r}},[275]);
            return { page: comp.default }
          })
        