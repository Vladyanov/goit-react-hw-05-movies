"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[139],{938:function(e,t,r){r.d(t,{IQ:function(){return f},Jh:function(){return p},LP:function(){return s},TP:function(){return i},z1:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"75312bed02c00aa4fc762f08e8bb0223"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},666:function(e,t,r){r.d(t,{Z:function(){return o}});var n={item:"movies-list_item__4sR7D",gallery_item:"movies-list_gallery_item__JtSRO"},a=r(791),u=r(87),c=r(689),s=r(184),i=function(e){var t=e.items,r=(0,c.TH)(),a=t.map((function(e){var t=e.id,a=e.title;return(0,s.jsx)(u.rU,{className:n.item,to:"/movies/".concat(t),state:{from:r},children:(0,s.jsx)("li",{className:n.gallery_item,children:a})},t)}));return(0,s.jsx)("ul",{className:n.gallery,children:a})},o=(0,a.memo)(i);i.defaultProps={items:[]}},139:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(666),o=r(938),f=r(184),p=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],p=(0,s.useState)(null),l=(0,a.Z)(p,2),m=l[0],v=l[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.LP)();case 3:t=e.sent,u(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.Z,{items:r}),m&&(0,f.jsxs)("p",{children:["Error: ",m]})]})},l="home-page_title__IV5Jt",m=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:l,children:" Tranding today"}),(0,f.jsx)(p,{})]})}}}]);
//# sourceMappingURL=139.854b88ce.chunk.js.map