(this["webpackJsonpbeez-frontend"]=this["webpackJsonpbeez-frontend"]||[]).push([[5],{814:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var c,a,r,i,s,o,j,b,u,l,O,d,p=n(71),x=n(0),f=n(3),h=n(56),m=n(213),g=n(214),v=n(4),w=n.n(v),k=n(30),S=n(37),y=n(89),z=n(28),H=n.n(z),A=n(784),N=n(31),C=n(48),B=n(44),E=n(95),M=n(783),R=n(155),T=function(){var e=Object(x.useState)([]),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(y.m)().account,r=Object(R.a)().fastRefresh;return Object(x.useEffect)((function(){a&&function(){var e=Object(k.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=M.a.map((function(e){return{address:Object(B.e)(),name:"pendingHny",params:[e.pid,a]}})),e.next=3,Object(C.a)(E,t);case 3:n=e.sent,r=M.a.map((function(e,t){return Object(N.a)(Object(N.a)({},e),{},{balance:new H.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},Y=n(785),F=n(794),L=n(10),P=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=e.prefix,i=Object(F.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),s=i.countUp,o=i.update,j=Object(x.useRef)(o);return Object(x.useEffect)((function(){j.current(t)}),[t,j]),Object(L.jsxs)(h.A,{bold:!0,fontSize:a,children:[r,s]})},$=function(e){var t=e.earningsSum,n=Object(m.a)();return Object(y.m)().account?Object(L.jsx)(P,{value:t}):Object(L.jsx)(h.A,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},D=function(e){var t=e.cakeBalance,n=Object(m.a)();return Object(y.m)().account?Object(L.jsx)(P,{value:t,fontSize:"24px"}):Object(L.jsx)(h.A,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},Q=n(115),W=n(323),J=n(106),U=n(786),V=function(e){var t=Object(x.useState)(new H.a(0)),n=Object(S.a)(t,2),c=n[0],a=n[1],r=Object(y.m)(),i=r.account,s=r.ethereum,o=Object(R.a)().fastRefresh;return Object(x.useEffect)((function(){i&&s&&function(){var t=Object(k.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.b)(s,e,i);case 2:n=t.sent,a(new H.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,o]),c},G=function(){var e=Object(x.useState)([]),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(y.m)().account,r=Object(R.a)().fastRefresh;return Object(x.useEffect)((function(){a&&function(){var e=Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=M.a.map((function(e){return{address:Object(B.e)(),name:"pendingHny",params:[e.pid,a]}})),e.next=3,Object(C.a)(E,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},_=n(774),q=Object(f.e)(h.h)(c||(c=Object(p.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),I=f.e.div(a||(a=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),K=f.e.img(r||(r=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),X=f.e.div(i||(i=Object(p.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Z=f.e.div(s||(s=Object(p.a)(["\n  margin-top: 24px;\n"]))),ee=function(){var e=Object(x.useState)(!1),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(y.m)().account,r=Object(m.a)(),i=T(),s=Object(_.a)(V(Object(B.b)())),o=Object(Q.g)().toNumber(),j=G().reduce((function(e,t){return e+new H.a(t).div(new H.a(10).pow(18)).toNumber()}),0),b=i.filter((function(e){return e.balance.toNumber()>0})),u=Object(A.a)(b.map((function(e){return e.pid}))).onReward,l=Object(x.useCallback)(Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,u();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[u]);return Object(L.jsx)(q,{children:Object(L.jsxs)(h.i,{children:[Object(L.jsx)(h.n,{size:"xl",mb:"24px",children:r(542,"Honeycomb Farms & Pools")}),Object(L.jsx)(K,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(L.jsxs)(I,{children:[Object(L.jsx)(X,{children:r(544,"HNYCMB to Harvest")}),Object(L.jsx)($,{earningsSum:j}),Object(L.jsxs)(X,{children:["~$",(o*j).toFixed(2)]})]}),Object(L.jsxs)(I,{children:[Object(L.jsx)(X,{children:r(546,"HNYCMB in Wallet")}),Object(L.jsx)(D,{cakeBalance:s}),Object(L.jsxs)(X,{children:["~$",(o*s).toFixed(2)]})]}),Object(L.jsx)(Z,{children:a?Object(L.jsx)(h.d,{id:"harvest-all",disabled:b.length<=0||n,onClick:l,fullWidth:!0,children:n?r(548,"Collecting HNYCMB"):r(999,"Harvest all (".concat(b.length,")"))}):Object(L.jsx)(Y.a,{fullWidth:!0})})]})})},te=n(781),ne=Object(f.e)(h.h)(o||(o=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ce=f.e.div(j||(j=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=function(){var e=Object(m.a)(),t=function(){var e=Object(R.a)().slowRefresh,t=Object(x.useState)(),n=Object(S.a)(t,2),c=n[0],a=n[1];return Object(x.useEffect)((function(){function e(){return(e=Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(J.a)(W,Object(B.b)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new H.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(x.useState)(new H.a(0)),n=Object(S.a)(t,2),c=n[0],a=n[1],r=Object(R.a)().slowRefresh;return Object(x.useEffect)((function(){!function(){var e=Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(J.a)(W,Object(B.b)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,a(new H.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,r]),c}(Object(B.b)()),c=Object(Q.c)(),a=Object(Q.g)(),r=t?t.minus(n):new te.a(0),i=Object(_.a)(r),s=a.times(r),o=0;return c&&c[0]&&c[0].hnycmbPerBlock&&(o=new te.a(c[0].hnycmbPerBlock).div(new te.a(10).pow(18)).toNumber()),Object(L.jsx)(ne,{children:Object(L.jsxs)(h.i,{children:[Object(L.jsx)(h.n,{size:"xl",mb:"24px",children:e(534,"Egg Stats")}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.A,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(L.jsx)(P,{fontSize:"14px",value:Object(_.a)(s),decimals:0,prefix:"$"})]}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.A,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(L.jsx)(P,{fontSize:"14px",value:Object(_.a)(t),decimals:0})]}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.A,{fontSize:"14px",children:e(538,"Total Burned")}),Object(L.jsx)(P,{fontSize:"14px",value:Object(_.a)(n),decimals:0})]}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.A,{fontSize:"14px",children:e(10004,"Circulating Supply")}),i&&Object(L.jsx)(P,{fontSize:"14px",value:i,decimals:0})]}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.A,{fontSize:"14px",children:e(540,"New HNY/block")}),Object(L.jsx)(h.A,{bold:!0,fontSize:"14px",children:o})]})]})})},re=Object(f.e)(h.h)(b||(b=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ie=function(){var e=Object(m.a)(),t=Object(Q.h)();return Object(L.jsx)(re,{children:Object(L.jsxs)(h.i,{children:[Object(L.jsx)(h.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(P,{value:t.toNumber(),prefix:"$",decimals:2}),Object(L.jsx)(h.A,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},se=n(806),oe=Object(f.e)(h.h)(u||(u=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),je=(f.e.div(l||(l=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(m.a)();return Object(L.jsx)(oe,{children:Object(L.jsxs)(h.i,{children:[Object(L.jsx)(h.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(L.jsx)(se.a,{dataSource:{sourceType:"profile",screenName:"beez_safe"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),be=f.e.div(O||(O=Object(p.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ue=Object(f.e)(h.b)(d||(d=Object(p.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),le=function(){var e=Object(m.a)();return Object(L.jsxs)(g.a,{children:[Object(L.jsxs)(be,{children:[Object(L.jsx)(h.n,{as:"h1",size:"xl",mb:"24px",color:"danger",children:e(576,"The HNYCMB Hive")}),Object(L.jsx)(h.A,{children:e(578,"Get HNYCMB at the Honeycomb!")})]}),Object(L.jsx)("div",{children:Object(L.jsxs)(ue,{children:[Object(L.jsx)(ee,{}),Object(L.jsx)(je,{}),Object(L.jsx)(ae,{}),Object(L.jsx)(ie,{})]})})]})}}}]);
//# sourceMappingURL=5.9e732ae4.chunk.js.map