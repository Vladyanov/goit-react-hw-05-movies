"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[437],{938:function(e,t,r){r.d(t,{IQ:function(){return p},Jh:function(){return l},LP:function(){return i},TP:function(){return u},z1:function(){return o}});var n=r(861),a=r(757),s=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"75312bed02c00aa4fc762f08e8bb0223"}}),i=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},437:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(87),o=r(689),p=r(938),l="movie-details_button__-LbCU",d="movie-details_wrapper__eLwwi",f="movie-details_movie_details__QrAuK",v="movie-details_text_wrapper__BOe8a",m="movie-details_title__ekJTg",h="movie-details_additoinal_info__ELKdU",_="movie-details_link__y+gMH",x=r(184),w=function(){var e,t=(0,i.useState)(),r=(0,a.Z)(t,2),s=r[0],w=r[1],b=(0,o.UO)().id,k=(0,o.s0)(),j=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",g=(0,i.useCallback)((function(){return k(j)}),[j,k]);if((0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.TP)(b);case 3:t=e.sent,w(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0.response,console.log(r.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[b,w]),s){var N=Math.round(10*s.vote_average),y=s.release_date.split("-"),Z=[];return s.genres.map((function(e){return Z.push(e.name)})),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{onClick:g,className:l,type:"button",children:"Go back"}),(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)("div",{className:d,children:(0,x.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300/".concat(s.poster_path),alt:""})}),(0,x.jsxs)("div",{className:v,children:[(0,x.jsxs)("p",{className:m,children:[s.original_title," (",y[0],")"]}),(0,x.jsxs)("p",{children:["User score: ",N,"%"]}),(0,x.jsx)("p",{className:m,children:"Overview"}),(0,x.jsx)("p",{children:s.overview}),(0,x.jsx)("p",{className:m,children:"Genres"}),(0,x.jsx)("p",{children:Z.join(", ")})]})]}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("p",{className:m,children:"Additional information"}),(0,x.jsx)(u.rU,{className:_,to:"cast",state:{from:j},children:"Cast"}),(0,x.jsx)(u.rU,{className:_,to:"reviews",state:{from:j},children:"Reviews"})]}),(0,x.jsx)(o.j3,{})]})}}}}]);
//# sourceMappingURL=437.ceae04d7.chunk.js.map