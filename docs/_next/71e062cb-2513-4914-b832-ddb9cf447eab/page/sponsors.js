
          window.__NEXT_REGISTER_PAGE('/sponsors', function() {
            var comp = module.exports=webpackJsonp([8],{112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(e){var t=e.title,n=e.description,a=e.primaryLink,o=e.primaryLabel,s=e.secondaryLink,r=e.secondaryLabel;return i.default.createElement("div",{className:"cta"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"grid"},i.default.createElement("div",{className:"shift-1"},i.default.createElement("h3",null,t),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),i.default.createElement("div",{className:"btn-wrapper"},o&&i.default.createElement("a",{href:a,className:"btn-primary"},o),r&&i.default.createElement("a",{href:s,className:"btn-secondary"},r))))))};o.defaultProps={title:"Call to action",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia, praesentium blanditiis quo, veniam necessitatibus saepe.",primaryLink:"#",primaryLabel:"Primary",secondaryLink:"#",secondaryLabel:"Secondary"},t.default=o},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={schedule:[{description:"FRIDAY",type:"info"},{time:"9:00",description:"Registration and morning coffee",type:"break"},{time:"10:00",description:"UTC is Enough for Everybody, Right?",author:"zach"},{time:"10:50",description:"GraphQL",author:"robert"},{time:"11:40",author:"gabriela"},{time:"12:20",description:"Lunch",type:"break"},{time:"14:30",author:"piotr"},{time:"15:20",author:"dinah"},{time:"16:00",description:"Coffee break",type:"break"},{time:"16:30",author:"marko"},{time:"17:20",description:"Panel discussions with Bozhidar Batsov"},{time:"18:10",author:"vladimir"},{description:"SATURDAY",type:"info"},{time:"9:00",description:"Morning coffee"},{time:"10:00",author:"radoslav"},{time:"10:50",author:"armin"},{time:"11:40",author:"sameer"},{time:"12:20",description:"Lunch",type:"break"},{time:"14:30",author:"jan"},{time:"15:20",author:"serdar"},{time:"16:00",description:"Coffee break",type:"break"},{time:"16:30",author:"nynne"},{time:"17:20",description:"Lightning talks"},{time:"18:10",author:"nick"}],speakers:[{anchor:"zach",image:"/static/images/speakers/holman.png",link:"https://zachholman.com/",name:"Zach Holman",company:"During",bio:'\n        <p>\n          Zach Holman is a developer living in San Francisco. He joined GitHub\n          in 2010 as one of their first engineering hires, and helped build and\n          grow their product and culture over five years. Currently he’s the\n          founder and CEO of   <a href="https://during.com">During</a>, a\n          new calendar to help you during your day. He also advises startups,\n          including <a href="https://gitlab.com">GitLab</a> and  \n          <a href="https://dockbit.com">Dockbit</a>.\n        </p>\n      ',talk:"UTC is Enough for Everybody, Right?",description:"\n        <p>Coming soon. </p>\n      "},{anchor:"robert",image:"/static/images/speakers/rmosolgo.png",link:"https://rmosolgo.github.io/",name:"Robert Mosolgo",company:"GitHub",bio:"\n        <p>\n          Robert is a Ruby developer at GitHub, focused on the GraphQL API. In\n          his free time, he likes spending time with his family, reading about\n          programming language design, and doing upholstery projects.\n        </p>\n      ",talk:"GraphQL",description:"\n        <p>Coming soon. </p>\n      "},{anchor:"nick",image:"/static/images/speakers/nick.jpg",link:"https://apotonick.wordpress.com/",name:"Nick Sutterer",company:"Trailblazer",bio:'\n        <p>\n          Whenever Open-Source meets deep and profound debates about architecting\n          software, and there\'s free beers involved, Nick Sutterer must be just\n          around the corner. Say "Hi!" to him, he loves people.\n        </p>\n      ',talk:"Trailblazer",description:"\n        <p>Coming soon. </p>\n      "},{anchor:"gabriela",image:"/static/images/speakers/gabriela.jpg",link:"https://github.com/luhova",name:"Gabriela Luhova",company:"Tutuf",bio:"\n        <p>\n          Rails Girls mentor since 2015. Ruby on Rails developer at Tutuf.\n          Faculty of Mathematics and Informatics at the Sofia University\n          graduate. Took part in a lot of conferences as an assistant organizer,\n          because being part of community is giving me motivation and\n          inspiration.\n        </p>\n      ",talk:"JSON API in the Ruby world",description:"\n        <p>\n          What is JSON API? How can it be used? What are the benefits of it? What\n          gems can we use to serialize our ActiveRecord/ActiveModel objects? How\n          fast can it be? The JSON API in the Ruby World talk will give answers to\n          all of these questions and more.\n        </p>\n      "},{anchor:"marko",image:"/static/images/speakers/marko.jpg",link:"https://github.com/bmarkons",name:"Marko Bogdanović",company:"RenderedText",bio:"\n        <p>\n          Spent last summer crafting RubyBench as a participant of Google Summer\n          of Code. Recently joined guys at the Semaphore CI as a full time Ruby\n          newbie. Most of the non-work time spend on Fruska gora hiking, running\n          or preferably mountain biking.\n        </p>\n      ",talk:"Start your Open Source journey with Ruby Bench",description:"\n        <p>\n          I was last year Google Summer of Code student who joined the Ruby team\n          to work on RubyBench project. I really feel like sharing my last summer\n          contributions and overall experience - since that's what Open Source is\n          mostly about. These were my very first Open Source contributions, and I'd\n          be happy to encourage other newcomers like me to give their take to the\n          community by joining our efforts together on Ruby Bench project. In the\n          first part of the talk I would make a walkthrough of the current state of\n          the project, after which we would examine together what's missing on the\n          platform that needs your help.\n        </p>\n      "},{anchor:"dinah",image:"/static/images/speakers/dinah.jpg",link:"https://dinahshi.github.io",name:"Dinah Shi",company:"University of Waterloo",bio:"\n        <p>\n          Dinah is wrapping up her engineering degree at the University of\n          Waterloo. In 2017, she spent four months backpacking around Europe and\n          China while looking for half-decent WIFI connections to power her\n          open-source contributions. For the last few months, she has been\n          building a public API to expose more preloading options in Ruby on\n          Rails.\n        </p>\n      ",talk:"Eager Loading for ActiveRecord Performance",description:"\n        <p>\n          As soon as a database has more than a few hundreds rows in any given\n          table, it’s time to start thinking about performance in ActiveRecord.\n          But performance is hard, with terms like eager loading, preloading, and\n          N+1 problems. In this talk, we’ll make sense of those terms, learn how to\n          write performant queries, and look at how those query methods work under\n          the hood. We’ll also take a peek into the future of eager loading coming\n          to a Rails release near you.\n        </p>\n      "},{anchor:"vladimir",image:"/static/images/speakers/vlad.jpg",link:"https://github.com/palkan",name:"Vladimir Dementyev",company:"Evil Martians",bio:"\n        <p>\n          Vladimir is a mathematician who found his happiness in programming Ruby\n          and Erlang, contributing to open source and being an Evil Martian.\n          Author of AnyCable, TestProf and many yet unknown ukulele melodies.\n        </p>\n      ",talk:"Take your slow tests to the doctor",description:"\n        <p>\n          Writing tests is a significant part of the development process,\n          especially in the Ruby and Rails community. We don’t care about test\n          suite performance until we find ourselves wasting too much time\n          waiting for the green light.\n        </p>\n\n        <p>\n          I’ve spent a lot of time analyzing test suites performance and\n          developed some useful techniques and tools to make tests faster.\n        </p>\n\n        <p>\n          Let's me show some profiling and refactoring techniques to make our\n          tests healed!\n        </p>\n      "},{anchor:"armin",image:"/static/images/speakers/armin.jpg",link:"https://github.com/Krule",name:"Armin Pašalić",company:"solarisBank AG",bio:'\n        <p>\n          Software builder, mostly Ruby and a bit of Go. Passionate about\n          "proper" testing, clean architecture and DDD. Currently busy\n          constructing a distributed software system with the best colleagues\n          ever at <a href="https://solaris.bank/">solarisBank AG</a>.\n        </p>\n      ',talk:"Beyond the current state: Time travel as answer to hard questions",description:"\n        <p>\n          Current application state; what, in fact, is it? We, as software\n          engineers, usually don’t think much about it (unless we face a\n          consistency issues in a distributed system, in which case we might\n          think about it a LOT). But looking closer, one might realize, in\n          essence what is known as current state is just a product of mutations\n          over time. Mutations which, as they happen, commonly cause the\n          software system to forget about what was, up to that point, known as\n          current state. Once this is clear, one starts to wonder, is there a\n          beneficial way to utilize this fact?\n        </p>\n      "},{anchor:"radoslav",image:"/static/images/speakers/rado.jpg",link:"https://rstankov.com",name:"Radoslav Stankov",company:"Product Hunt",bio:"\n        <p>\n          Radoslav is a web developer for more than a decade. He believes that\n          frontend and backend are equally important. In the last several years\n          he juggles between Ruby and JavaScript projects. Organizer of\n          &lt;React.NotAConf /&gt;. Currently works at Product Hunt.\n        </p>\n      ",talk:"How to get to zero unhandled exceptions in production",description:"\n        <p>\n          In the talk, I'm going to explain how to categorize exceptions and\n          their level of impact. Present use cases and code samples of common\n          problems in a Rails application. How to make sure your background\n          workers run without issues and how to debug exceptions\n        </p>\n      "},{anchor:"jan",image:"/static/images/speakers/jan.jpg",link:"https://jan.krutisch.de",name:"Jan Krutisch",company:"Depfu",bio:'\n        <p>\n          I am a <a href="/coding.html">software developer</a>, <a href="/writings.html">tech writer</a>,\n          <a href="/speaking.html">speaker</a> and <a href="http://soundcloud.com/halfbyte">multi</a>\n          <a href="http://flickr.com/photos/jankrutisch">purpose</a> <a href="http://github.com/halfbyte">geek</a>.\n        </p>\n      ',talk:"My Ruby is a Paintbrush. My Ruby is a Synth.",description:"\n        <p>\n          In 2017, Ruby is proven, almost boring technology. We use it mostly\n          to build Backends for Hipster Technology™ JavaScript Frontends. But\n          Ruby can do so much more - so let’s explore that. Ruby can paint\n          pictures. Ruby can make music. As we will see: Ruby can be an\n          engineer’s tool, or an artist’s tool.\n        </p>\n\n        <p>\n          The Ruby community is very much focused on Rails. But while building\n          web applications can be fun, in 2017, it is not always the most\n          exciting of all jobs. I’m going to show you a handful of interesting\n          projects and tools to use Ruby to do things you probably didn’t think\n          about. Like making music. Or creating 3D objects. Or driving a light\n          show. Or …\n        </p>\n\n        <p>\n          This talk is going to be a fast paced ride with lots of demos through\n          things you can do with Ruby outside of the “Web Development” or even\n          the “Scripting Chainsaw” box.\n        </p>\n      "},{anchor:"serdar",image:"/static/images/speakers/sedar.jpg",link:"https://github.com/sdogruyol",name:"Serdar Doğruyol",company:"",bio:"\n        <p>\n          Rubyist, Crystal Evangelist, Creator of Kemal – a lightning fast, super\n          simple web framework written in Crystal.\n        </p>\n      ",talk:"Crystal: A language for humans and computers",description:"\n        <p>\n          I love Ruby! So do we! Let's take a look at Crystal, the younger sibling of Ruby, as Matz said. :-)\n        </p>\n      "},{anchor:"nynne",image:"/static/images/speakers/nynne.jpg",link:"https://github.com/nynnejc",name:"Nynne Just Christoffersen",company:"Karnov",bio:"\n        <p>\n          Nynne Just Christoffersen is a Copenhagen-based developer with a\n          background in Art and Design History. In her spare time she enjoys her\n          unhealthy obsession with meetup.com. She's the organiser of Rails Girls\n          Copenhagen and the Copenhagen tech book and film club, among many other\n          things.\n        </p>\n      ",talk:"What I learned from building a twitter Art Bot",description:"\n        <p>\n          Rijksbot, is a twitter bot I built with ruby that responds when you tweet to it\n          with an image culled from the Rijsmuseums collection, scraped from the museums’\n          API. If you tweet the word 'flower' at the bot, It'll bring you an image of a\n          flower etc. For this talk I'll reflect on the following:\n        </p>\n\n        <ul>\n          <li>What is a bot.</li>\n          <li>How to we find creative ways to access vast archives of public data?</li>\n          <li>What is the value of communicating with images?</li>\n          <li>How do we handle messy data?</li>\n        </ul>\n\n        <p>\n          These questions are shaped equally by my background in art history,\n          love of twitter and curiosity.\n        </p>\n\n        <p>\n          Museums, art collections and libraries are increasingly digitising\n          and making their data available to the public. Many museums even offer\n          well-documented APIs to play with! As a trained art and design historian, I'm\n          particularly keen on investigating the opportunities these vast treasure troves\n          of data can offer. But how much fun can we have simply looking at a huge DB?\n          With this project, I wanted to bring some interaction and playfulness to the\n          wonderful collection of the Rijksmuseum in Amsterdam. The project made me\n          appreciative of the many challenges faced by cultural institutions today. With\n          this talk I'd love to share my findings.\n        </p>\n      "},{anchor:"piotr",image:"/static/images/speakers/piotr.jpg",link:"https://chastell.net",name:"Piotr Szotkowski",company:"Rebased",bio:"\n        <p>\n          Hacker scientist. Assistant professor at Warsaw University of Technology\n        </p>\n      ",talk:"The Modern Prometheus",description:"\n        <p>\n          Most non-scripting languages are faster than Ruby (Rust: tremendously so),\n          but few (Crystal?) can match its optimisation for developer happiness and\n          productivity. Let’s try to gauge Ruby’s chances when it comes to matching\n          modern performance expectations: Are the changes in recent CRuby versions\n          significant? Can JRuby bring enough JVM performance? And – to address the\n          titular Frankenstein – how easily can we harness the power of Crystal, Rust, C\n          or even assembly from within our Ruby applications?\n        </p>\n\n        <p>\n          If you’ve hung around our community for a few years you probably saw Ruby rise\n          from being a pleasant, but niche and slow scripting language to a popular\n          choice powering many a web application – and then seemingly overshadowed by a\n          plethora of new contenders, from Scala and Clojure through JavaScript (or its\n          many tools and derivatives) to Go or even Lua. Most of the alternatives are\n          faster or offer compelling design differences (Rust: tremendously so, on both\n          counts), but few (Crystal?) can match Ruby’s optimisation for developer\n          happiness and developer productivity.\n        </p>\n\n        <p>\n          This talk, based on experiences in using Ruby for academic research projects,\n          attempts to gauge Ruby’s chances when it comes to matching modern performance\n          expectations: Are the changes in recent CRuby versions significant? Can JRuby\n          bring enough JVM performance? And – to address the titular Frankenstein – how\n          easily can we harness the power of Crystal, Rust, C or even assembly from\n          within our Ruby applications?\n        </p>\n      "},{anchor:"sameer",image:"/static/images/speakers/vodro.jpg",link:"http://v0dro.in",name:"Sameer Deshmukh",company:"Tokyo Insitute of Technology",bio:"\n        <p>\n          Sameer is a student and a contributor to the Ruby Science Foundation, where he\n          helps build scientific computation tools in Ruby. He is currently working on\n          Rubex, a new language for easily writing C extensions for the CRuby\n          interpreter. He enjoys spending spare time with friends, books and his bass\n          guitar.\n        </p>\n      ",talk:"Ferrari Driven Development: superfast Ruby with Rubex",description:"\n        <p>\n          Did you ever really really want to speed up your Ruby code with C extensions\n          but got baffled by mountains of documentation and scary C programming and chose\n          to move to another language instead? Did you wish that you could just release\n          that GIL and extract all the juice that your processor has to offer without\n          losing your hair? If yes, then come see this talk!\n        </p>\n\n        <p>\n          This talk will introduce you to Rubex, the fastest and happiest way of writing\n          Ruby C extensions. Rubex is a whole new language designed from the ground up\n          keeping in mind Ruby's core philosophy - make programmers happy.\n        </p>\n\n        <p>\n          Rubex allows you to write C extensions using the same syntax that you would\n          use for writing Ruby programs, and also freely mix C data types with arbitrary\n          Ruby objects. It also allows you to easily (and safely) release the Ruby GIL\n          and spawn native threads. The Rubex compiler compiles your Rubex code into\n          meaningful C code that it then interfaces with the CRuby interpreter by\n          implicitly using the CRuby C API in a manner that is completely transparent to\n          the programmer.\n        </p>\n      "}],sponsors:{pro:[{title:"emerchantpay",description:'\n          <p>\n            emerchantpay is a leading online, mobile and POS payment service\n            provider. We help e-commerce businesses of all sizes and sectors accept\n            payments via multiple customer touch points. Designed to increase conversions,\n            our offering includes robust payment processing technology, coupled with\n            popular alternative payment methods and a range of acquiring services.\n            emerchantpay Limited is registered as an authorised Electronic Money\n            Institution (EMI) and has the FCA’s permission to issue electronic money\n            (e-money) and provide payment services under registration number <a\n            href="https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000003jN1U9AAK">900778</a>.\n          </p>\n\n          <p>We\n            are a self-funded, product-based company, and working on a number of\n            challenging (both code and infrastructure), high-uptime (99.99%) payment\n            products, utilising predominantly the Ruby and Rails stack.\n          </p>\n        ',link:"https://www.emerchantpay.com/",image:"/static/images/sponsors/emerchantpay-logo.svg"},{title:"Receipt Bank",description:"\n          <p>\n            Receipt Bank is an award-winning accounting software used by 30,000+ small\n            business to make bookkeeping effortless. Our automation saves them hundreds of\n            hours every year - and we’re just getting started!\n          </p>\n\n          <p>We are based around\n            the globe, but our development team is mostly here in Bulgaria. We are a\n            start-up that cares deeply about high quality and sane development practices.\n            We have learned through blood and tears that the best way is almost always\n            through beautiful, easily maintained code.\n          </p>\n\n          <p>We are down to earth, happy\n            Rails users and extremely proud sponsors of Balkan Ruby.\n          </p>\n        ",image:"/static/images/sponsors/receiptbank-logo.svg",link:"https://www.receipt-bank.com/"},{title:"Catawiki",description:"\n          <p>\n            Catawiki's mission is to make special items available to everyone and we are one of the fastest growing\n            companies in Europe. Our Online auction website attracts 14 million monthly users from around the globe\n            to participate in weekly auctions across a variety of categories for special objects. The items we have\n            auctioned off include a lock of Napoleon’s hair, a mammoth skeleton and the most expensive set of Lego\n            ever produced! And yes, it's true, we use Ruby to sell Rubies!\n          </p>\n        ",image:"/static/images/sponsors/catawiki-logo.svg",link:"https://www.catawiki.com/"},{title:"Funding Circle",description:"\n          <p>\n            At Funding Circle we’re changing the world. We are the world’s leading marketplace for business loans\n            and we’re taking on the global banking system to find a better way for businesses to borrow and investors\n            to lend, by connecting them together. We are helping small businesses to grow, creating thousands of jobs\n            across the UK, US, DE and NL, changing the lives of business owners, and at the same time helping investors\n            earn a return on their hard-earned money.\n          </p>\n\n          <p>\n            We’re one of the fastest growing startups in the world with teams in London, San Francisco and Europe,\n            and more than $300 million raised from the same people who backed Twitter, Facebook and Skype. We have\n            a unique working environment and incredible teams as we seek to change the face of one of the biggest\n            industries in the world – banking – as well as help to solve some of the biggest challenges the global\n            economy faces.\n          </p>\n        ",image:"/static/images/sponsors/funding-circle-logo.svg",link:"https://www.fundingcircle.com/uk/"}],standard:[{title:"Strypes",description:"\n          <p>\n            With a team of over 170 people Strypes is a company with extensive experience in the software development.\n            Founded in 2008, currently the company is a proud member of the ICT Group in the Netherlands.\n            The ICT Group is a stock listed IT company that was founded in 1978 and employs over 1000 professionals worldwide.\n          </p>\n        ",image:"/static/images/sponsors/strypes-logo.png",link:"https://strypes.eu/"}],speaker:[{title:"GitHub",link:"https://github.com/",image:"/static/images/sponsors/github-logo.svg"},{title:"Rebased",image:"/static/images/sponsors/rebased-logo.png",link:"https://rebased.pl/"},{title:"RenderedText",image:"/static/images/sponsors/renderedtext-logo.png",link:"https://renderedtext.com/"},{title:"Karnov Group",image:"/static/images/sponsors/karnovgroup-logo.png",link:"http://www.karnovgroup.com/"},{title:"Questers",image:"/static/images/sponsors/questers-logo.svg",link:"https://www.questers.com/"}]}};t.default=a},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(e){var t=e.list;return i.default.createElement("div",{className:"partner-logos"},i.default.createElement("div",{className:"container"},t.map(function(e,t){return i.default.createElement("a",{href:e.link,title:e.title,target:"_blank",className:"partner-logo"},i.default.createElement("img",{src:e.image,alt:e.title}))})))};o.defaultProps={list:[{title:"Partner 1",link:"#",image:"http://placehold.it/400x300"}]},t.default=o},184:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(46),o=a(i),s=n(0),r=a(s),l=function(e){var t=e.title,n=e.description,a=e.link,i=e.image;return r.default.createElement("div",{className:"partner grid"},r.default.createElement("div",{className:"third"},r.default.createElement("a",{href:a,className:"partner-logo",target:"_blank"},r.default.createElement("img",{src:i,alt:t}))),r.default.createElement("div",{className:"eight"},r.default.createElement("h3",null,t),r.default.createElement("div",{className:"meta"},r.default.createElement("a",{href:a,target:"_blank"},a)),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))},u=function(e){var t=e.list;e.type;return r.default.createElement("div",{className:"partner-feed"},r.default.createElement("div",{className:"container"},t.map(function(e,t){return r.default.createElement(l,(0,o.default)({key:t},e))})))};t.default=u},286:function(e,t,n){e.exports=n(287)},287:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=a(i),s=n(53),r=a(s),l=n(94),u=a(l),c=n(44),p=a(c),d=n(99),h=a(d),m=n(184),g=a(m),f=n(112),y=a(f),b=n(91),w=a(b),k=n(157),v=a(k),R=n(118),E=a(R),j={title:"Become a partner",description:"<p>If your company is interested in supporting Balkan Ruby, you can learn more about the partner opportunities by following the link below.</p>",primaryLink:"/static/files/balkan_ruby_packages.pdf",primaryLabel:"View packages",secondaryLink:"#",secondaryLabel:""};t.default=function(){return o.default.createElement(u.default,null,o.default.createElement(r.default,null,o.default.createElement("title",null,"Partners | Balkan Ruby")),o.default.createElement(h.default,{title:"Partners"}),o.default.createElement(w.default,{centered:!0,text:"<p>We are supported by these awesome companies!</p>"}),o.default.createElement(p.default,{theme:"blank",spacing:"spacing-both"},o.default.createElement(g.default,{list:E.default.sponsors.pro,type:"Pro"})),o.default.createElement(p.default,{theme:"blank",spacing:"spacing-both"},o.default.createElement(g.default,{list:E.default.sponsors.standard,type:"Standard"})),o.default.createElement(p.default,{theme:"blank",spacing:"spacing-top"},o.default.createElement(w.default,{centered:!0,text:"<h3>Thanks to</h3>"})),o.default.createElement(p.default,{theme:"blank",spacing:"spacing-both"},o.default.createElement(v.default,{list:E.default.sponsors.speaker})),o.default.createElement(p.default,{theme:"light-bg",spacing:"spacing-both"},o.default.createElement(y.default,j)))}},41:function(e,t,n){e.exports={default:n(47),__esModule:!0}},46:function(e,t,n){"use strict";t.__esModule=!0;var a=n(41),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},47:function(e,t,n){n(48),e.exports=n(1).Object.assign},48:function(e,t,n){var a=n(3);a(a.S+a.F,"Object",{assign:n(49)})},49:function(e,t,n){"use strict";var a=n(16),i=n(29),o=n(22),s=n(17),r=n(61),l=Object.assign;e.exports=!l||n(12)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=a})?function(e,t){for(var n=s(e),l=arguments.length,u=1,c=i.f,p=o.f;l>u;)for(var d,h=r(arguments[u++]),m=c?a(h).concat(c(h)):a(h),g=m.length,f=0;g>f;)p.call(h,d=m[f++])&&(n[d]=h[d]);return n}:l},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(e){var t=e.text,n=e.centered,a=e.children;return i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"grid"},t?i.default.createElement("div",{className:"text "+(n?"align-center":""),dangerouslySetInnerHTML:{__html:t}}):i.default.createElement("div",{className:"text "+(n?"align-center":"")},i.default.createElement("div",{className:"text"},a))))};t.default=o},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(e){var t=e.title;return i.default.createElement("div",{className:"page-title"},i.default.createElement("div",{className:"container"},i.default.createElement("h1",null,t)))};o.defaultProps={title:"Page title"},t.default=o}},[286]);
            return { page: comp.default }
          })
        