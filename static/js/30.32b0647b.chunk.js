"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[30],{938:function(e,r,t){t.d(r,{IQ:function(){return f},Jh:function(){return p},LP:function(){return s},TP:function(){return i},z1:function(){return o}});var n=t(861),a=t(757),c=t.n(a),u=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"75312bed02c00aa4fc762f08e8bb0223"}}),s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/week");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},666:function(e,r,t){t.d(r,{Z:function(){return o}});var n={item:"movies-list_item__4sR7D",gallery_item:"movies-list_gallery_item__JtSRO"},a=t(791),c=t(87),u=t(689),s=t(184),i=function(e){var r=e.items,t=(0,u.TH)(),a=r.map((function(e){var r=e.id,a=e.title;return(0,s.jsx)(c.rU,{className:n.item,to:"/movies/".concat(r),state:{from:t},children:(0,s.jsx)("li",{className:n.gallery_item,children:a})},r)}));return(0,s.jsx)("ul",{className:n.gallery,children:a})},o=(0,a.memo)(i);i.defaultProps={items:[]}},30:function(e,r,t){t.r(r),t.d(r,{default:function(){return O}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(87),o=t(666);function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m="searchbar_searchbar__GZ61d",h="searchbar_form__-2y5s",v="searchbar_button__pCJtq",b="searchbar_button_label__QKzi5",d="searchbar_input__VLVB3",_={search:""},x=t(184),y=function(e){var r=e.onSubmit,t=(0,s.useState)(l({},_)),n=(0,a.Z)(t,2),c=n[0],u=n[1],i=c.search;return(0,x.jsx)("header",{className:m,children:(0,x.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),r(c),u(_)},children:[(0,x.jsx)("button",{type:"submit",className:v,children:(0,x.jsx)("span",{className:b,children:"Search"})}),(0,x.jsx)("input",{className:d,value:i,name:"search",onChange:function(e){var r=e.target,t=r.name,n=r.value;u((function(e){return l(l({},e),{},f({},t,n))}))},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})},j=(0,s.memo)(y),w=t(938),g=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],f=(0,s.useState)(null),p=(0,a.Z)(f,2),l=p[0],m=p[1],h=(0,i.lr)(),v=(0,a.Z)(h,2),b=v[0],d=v[1],_=b.get("search");(0,s.useEffect)((function(){if(_){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.z1)(_);case 3:r=e.sent,c(r.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t=e.t0.response,m(t.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_]);var y=(0,s.useCallback)((function(e){var r=e.search;d({search:r}),c([])}),[d]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j,{onSubmit:y}),(0,x.jsx)(o.Z,{items:t}),l&&(0,x.jsxs)("p",{children:["Error: ",l]})]})},O=function(){return(0,x.jsx)(g,{})}}}]);
//# sourceMappingURL=30.32b0647b.chunk.js.map