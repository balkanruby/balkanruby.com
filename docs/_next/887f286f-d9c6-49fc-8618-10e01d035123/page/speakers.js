
          window.__NEXT_REGISTER_PAGE('/speakers', function() {
            var comp = module.exports=webpackJsonp([10],{107:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(e){var t=e.title;return l.default.createElement("div",{className:"page-title"},l.default.createElement("div",{className:"container"},l.default.createElement("h1",null,t)))};n.defaultProps={title:"Page title"},t.default=n},108:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(e){var t=e.title,i=e.description,a=e.primaryLink,n=e.primaryLabel,r=e.secondaryLink,u=e.secondaryLabel;return l.default.createElement("div",{className:"cta"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"grid"},l.default.createElement("div",{className:"shift-1"},l.default.createElement("h3",null,t),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),l.default.createElement("div",{className:"btn-wrapper"},n&&l.default.createElement("a",{href:a,className:"btn-primary"},n),u&&l.default.createElement("a",{href:r,className:"btn-secondary"},u))))))};n.defaultProps={title:"Call to action",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia, praesentium blanditiis quo, veniam necessitatibus saepe.",primaryLink:"#",primaryLabel:"Primary",secondaryLink:"#",secondaryLabel:"Secondary"},t.default=n},147:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=i(66),n=a(l),r=i(0),u=a(r),s=function(e){var t=e.title,i=e.description,a=e.link,l=e.image;return u.default.createElement("div",{className:"grid thumb"},u.default.createElement("div",{className:"fourth"},u.default.createElement("img",{src:l,alt:t})),u.default.createElement("div",{className:"eight"},u.default.createElement("h3",null,t),u.default.createElement("div",{className:"meta"},u.default.createElement("a",{href:a},a)),u.default.createElement("div",{dangerouslySetInnerHTML:{__html:i}})))},o=function(e){var t=e.list;return u.default.createElement("div",{className:"thumb-feed"},u.default.createElement("div",{className:"container"},t.map(function(e,t){return u.default.createElement(s,(0,n.default)({key:t},e))})))};o.defaultProps={list:[{image:"http://placehold.it/400x300",link:"#",title:"Article Title",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non."},{image:"http://placehold.it/400x300",link:"#",title:"Article Title",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non."},{image:"http://placehold.it/400x300",link:"#",title:"Article Title",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non."}]},t.default=o},276:function(e,t,i){e.exports=i(277)},277:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=i(0),n=a(l),r=i(85),u=a(r),s=i(106),o=a(s),c=i(54),d=a(c),m=i(107),p=a(m),f=i(147),h=a(f),g=i(108),b=(a(g),i(86)),v=a(b),E=[{image:"/static/images/speakers/holman.png",link:"https://zachholman.com/",title:"Zach Holman, CEO During",description:'<p>Zach Holman is a developer living in San Francisco. He joined GitHub in 2010 as one of their first engineering hires, and helped build and grow their product and culture over five years. Currently he’s the founder and CEO of \x3c!-- --\x3e <a href="http://during.com">During</a>, a new calendar to help you during your day. He also advises startups, including <a href="https://gitlab.com">GitLab</a> and \x3c!-- --\x3e <a href="https://dockbit.com">Dockbit</a>.</p>'},{image:"/static/images/speakers/rmosolgo.png",link:"http://rmosolgo.github.io/",title:"Robert Mosolgo, GitHub",description:"<p>Robert is a Ruby developer at GitHub, focused on the GraphQL API. In his free time, he likes spending time with his family, reading about programming language design, and doing upholstery projects.</p>"},{image:"/static/images/speakers/nick.jpg",link:"https://apotonick.wordpress.com/",title:"Nick Sutterer, Trailblazer",description:'<p>Whenever Open-Source meets deep and profound debates about architecting software, and there\'s free beers involved, Nick Sutterer must be just around the corner. Say "Hi!" to him, he loves people.</p>'}];t.default=function(){return n.default.createElement(o.default,null,n.default.createElement(u.default,null,n.default.createElement("title",null,"Speakers | Balkan Ruby")),n.default.createElement(p.default,{title:"Speakers"}),n.default.createElement(v.default,{centered:!0,text:"<p>Balkan Ruby is supported by these awesome companies</p>"}),n.default.createElement("br",null),n.default.createElement(d.default,{theme:"blank",spacing:"spacing-both"},n.default.createElement(h.default,{list:E})))}},86:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a),n=function(e){var t=e.text,i=e.centered;return l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"grid"},l.default.createElement("div",{className:"text "+(i?"align-center":""),dangerouslySetInnerHTML:{__html:t}})))};n.defaultProps={centered:!1,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nostrum necessitatibus nisi deserunt illum similique, nam eius perspiciatis enim aliquam doloremque accusantium dolorem quos omnis quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus consequatur nobis explicabo, earum deleniti reiciendis pariatur perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium molestiae deserunt rem sunt. Eius, nihil atque nobis obcaecati adipisci eligendi, inventore. Cupiditate magnam adipisci inventore eius repellat. Non odit, laudantium fugit, ea aut inventore illum amet aspernatur!"},t.default=n}},[276]);
            return { page: comp.default }
          })
        