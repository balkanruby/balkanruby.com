
          window.__NEXT_REGISTER_PAGE('/tickets', function() {
            var comp = module.exports=webpackJsonp([16],{115:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){var t=e.title,a=e.description,n=e.primaryLink,o=e.primaryLabel,l=e.secondaryLink,i=e.secondaryLabel;return r.default.createElement("div",{className:"cta"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-1"},r.default.createElement("h3",null,t),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),r.default.createElement("div",{className:"btn-wrapper"},o&&r.default.createElement("a",{href:n,className:"btn-primary"},o),i&&r.default.createElement("a",{href:l,className:"btn-secondary"},i))))))};o.defaultProps={title:"Call to action",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia, praesentium blanditiis quo, veniam necessitatibus saepe.",primaryLink:"#",primaryLabel:"Primary",secondaryLink:"#",secondaryLabel:"Secondary"},t.default=o},120:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){var t=e.title;return r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-2"},r.default.createElement("div",{className:"section-title"},r.default.createElement("h2",null,t)))))};o.defaultProps={title:"Speakers"},t.default=o},304:function(e,t,a){e.exports=a(305)},305:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),o=n(r),l=a(50),i=n(l),s=a(100),c=n(s),u=a(47),d=n(u),f=a(120),m=n(f),h=a(306),p=n(h),y=a(115),v=n(y),b=[{question:"How do I get an invoice for my ticket?",answer:'<p>We will send you an Invoice within a few days from the date when you purchased your ticket.</p><p>If you have any questions or special requests for the invoice do not hesitate to contact us: <a href="mailto:hi@balkanruby.com?subject=Invoice question">hi@balkanruby.com</a></p>'},{question:"What information do we collect?",answer:"<p>We collect personal information from you when you purchase a ticket. You may however, visit our site anonymously.</p>    <p>Any of the information we collect from you may be used in one of the following ways:</p>    <ul>      <li>To personalize your experience</li>      <li>To help us to more effectively respond to your requests and support needs</li>      <li>To process transactions</li>    </ul>    <p>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased tickets.</p>"},{question:"Prices and Local Taxes",answer:"<p>All ticket prices include the local sales tax where the event takes place, and any other transaction fees. Prices include VAT.</p>"},{question:"Shipping Information",answer:"<p>All tickets are delivered via email. Upon registration at the venue, you will receive your badge and t-shirt.</p>"},{question:"What do you get for your money?",answer:"      <p>        <ul>          <li>Access to all talks at the conference</li>          <li>A cool T-shirt</li>          <li>Morning and afternoon coffee breaks</li>          <li>Access to the after party</li>        </ul>      </p>"},{question:"Refunds",answer:'<p>If you have to cancel your conference ticket(s), please send us an email at <a href="mailto:hi@balkanruby.com?subject=Refund">hi@balkanruby.com</a> at latest two weeks before the event. Once you cancel the ticket(s), you will receive a refund of your purchase. Cancellations made later than two weeks before the event starts and attendees who fail to attend for some reason, can’t be considered for refunds. Sorry.</p>'},{question:"Transferring your ticket",answer:'<p>If you’d like to transfer your ticket to a friend or colleague without the reservation being refunded, that’s no problem at all — no cancellation fees will occur. Don’t forget to send us the new attendee contact details at    <a href="mailto:hi@balkanruby.com?subject=Ticket Transfer">hi@balkanruby.com</a> no later than five days before the event you are registered for. We’ll sort it out quickly.</p>'},{question:"Event Cancellation",answer:"<p>If the event is cancelled, We will fully refund your registration fee with no penalties or other reductions — no questions asked! However, we can’t cover travel or hotel reservation costs.</p>"},{question:"Code of Conduct",answer:'<p>All attendees shall conduct themselves at all times in accordance with the Conference’s Code of Conduct, as listed on <a href="http://berlincodeofconduct.org/" target="_blank">http://berlincodeofconduct.org/</a>. We reserve the right to remove from the Conference a person, Company, or any Company representative(s) violating those standards. We will not refund anyone who violates the Code of Conduct.</p>'}],w={title:"Need more information?",description:"<br />",primaryLink:!1,primaryLabel:!1,secondaryLink:"mailto:hi@balkanruby.com?subject=I+have+a+question",secondaryLabel:"Contact us"};t.default=function(){return o.default.createElement(c.default,null,o.default.createElement(i.default,null,o.default.createElement("title",null,"Tickets | Balkan Ruby")),o.default.createElement(d.default,{theme:"blank",spacing:"spacing-both"},o.default.createElement("div",{className:"container"},o.default.createElement("h1",null,"Tickets"),o.default.createElement("script",{src:"https://cdn.weemss.com/compiled/js/integration-embed.js?v79.7"}),o.default.createElement("iframe",{src:"https://event.gg/9100/form",id:"weemss_integration_9100",frameBorder:"0",width:"100%",height:"100%",scrolling:"no"}))),o.default.createElement(d.default,{theme:"blank",spacing:"spacing-both"},o.default.createElement(m.default,{title:"FAQ"})),o.default.createElement(d.default,{theme:"blank",spacing:"spacing-both"},o.default.createElement(p.default,{list:b})),o.default.createElement(d.default,{theme:"light-bg",spacing:"spacing-both"},o.default.createElement(v.default,w)))}},306:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){var t=e.list;return r.default.createElement("div",{className:"faq"},r.default.createElement("div",{className:"container"},t.map(function(e,t){return r.default.createElement("div",{className:"faq-item"},r.default.createElement("h4",null,e.question),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.answer}}))})))};t.default=o}},[304]);
            return { page: comp.default }
          })
        