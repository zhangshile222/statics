(self["webpackChunk"]=self["webpackChunk"]||[]).push([[717],{39987:e=>{e.exports={header:"header___1YldI",logo:"logo___35WgN",userInfo:"userInfo___3JE-P",infoList:"infoList___1emhR",infoItem:"infoItem___eUXW2",infoTitle:"infoTitle___qPWRK",record:"record___2Pb6-",user:"user___3qg4v"}},30901:e=>{e.exports={box:"box___18ed5",fps:"fps___1c4C2"}},86977:e=>{e.exports={search:"search___1eAkB",searchButton:"searchButton___3v1x1",searchInput:"searchInput___1ztHK",searchResult:"searchResult___3vNiI",searchReacorTitle:"searchReacorTitle___2KNHU",searchResultHost:"searchResultHost___StfZ7",searchHistory:"searchHistory___2CN7n",clearSearchHistory:"clearSearchHistory___sFryS"}},39103:e=>{e.exports={ul:"ul___vB3Nr",box:"box___3s9lI",all:"all___2ANYw",allIcon:"allIcon___1Tq9X",typeList:"typeList___2KjFN",allTxt:"allTxt___3Vzu3",allNav:"allNav___14yS6"}},95376:e=>{e.exports={watchRecord:"watchRecord___2-lxe",recordContent:"recordContent___25DvP",empty:"empty___1NHqe",recordItem:"recordItem___73iSC",recordImg:"recordImg___1yzMY",info:"info___2FH5p"}},15909:e=>{e.exports={box:"box___3IU96",imgItem:"imgItem___1cxMR",bannerBox:"bannerBox___3SIWB",videoBox:"videoBox___2aRJG",smallBox:"smallBox___2nHoI"}},89434:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>ie});var s=t(3182),r=(t(16318),t(33876)),c=(t(13062),t(79294)),a=t(11849),i=(t(89032),t(1635)),o=t(94043),l=t.n(o),d=t(67294),u=t(99222),x=t(22231),h=(t(3515),t(1734)),m=t(39987),p=t.n(m),_=(t(18446),t(33860)),f=t(86582),v=t(2824),j=t(76570),g=t(73171),y=t(11067),N=t(71685),b=t(10247),I=t(86977),Z=t.n(I),w=t(85893);const S=function(){var e="search-hot",n=(0,N.Z)(e),t=(0,v.Z)(n,2),s=t[0],r=t[1],c=(0,N.Z)("searchHistory",[]),a=(0,v.Z)(c,2),i=a[0],o=a[1],l=(0,d.useState)([]),u=(0,v.Z)(l,2),h=u[0],m=u[1],p=(0,d.useState)(""),I=(0,v.Z)(p,2),S=I[0],k=I[1],C=(0,d.useState)(!1),R=(0,v.Z)(C,2),H=R[0],B=R[1],T=(0,d.useRef)(null),F=(0,x.useRequest)(y.zs,{manual:!0,onSuccess:function(e){r({data:e,time:Date.now()+6e5}),m(e)}}),q=F.loading,L=F.run;function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;""!==e&&(B(!1),o((0,f.Z)(new Set([e].concat((0,f.Z)(i))))),T.current&&(T.current.value=e),x.m.push("/search/".concat(e)))}function U(){B(!1)}function z(e){k(e.target.value)}function D(){if(!H){B(!0);var n=localStorage.getItem(e);!n||null===s||void 0===s||!s.data||s&&s.time<=Date.now()?L():m(s.data)}}function J(e){e.preventDefault(),e.stopPropagation()}function K(){o([])}function W(e){P(e)}return(0,b.Z)("enter",(function(){P()}),{events:["keyup"],target:function(){return T.current}}),(0,d.useEffect)((function(){document.onclick=U}),[]),(0,w.jsx)(d.Fragment,{children:(0,w.jsxs)("div",{className:Z().search,onClick:J,children:[(0,w.jsx)("input",{type:"text",className:Z().searchInput,ref:T,onInput:z,onFocus:D}),(0,w.jsxs)("div",{className:Z().searchButton,onClick:function(){return P()},children:[(0,w.jsx)(j.Z,{}),(0,w.jsx)("i",{className:"mobile-hidden",children:"\u641c\u4e00\u4e0b"})]}),H&&(0,w.jsxs)("div",{className:Z().searchResult,children:[!(!i||!i.length)&&(0,w.jsxs)(d.Fragment,{children:[(0,w.jsxs)("div",{className:Z().searchReacorTitle,children:["\u641c\u7d22\u8bb0\u5f55",(0,w.jsxs)("span",{className:Z().clearSearchHistory,onClick:K,children:[(0,w.jsx)(g.Z,{style:{fontSize:"18px"}})," \u6e05\u9664"]})]}),(0,w.jsx)("ul",{className:Z().searchHistory,children:i.map((function(e){return(0,w.jsx)("li",{onClick:function(){return W(e)},className:"text-overflow-ellipsis",title:e,children:(0,w.jsx)(d.Fragment,{children:e})},e)}))})]}),q&&(0,w.jsx)(_.Z,{active:!0}),!q&&(0,w.jsxs)(d.Fragment,{children:[(0,w.jsx)("div",{className:Z().searchReacorTitle,children:"\u70ed\u95e8\u641c\u7d22"}),(0,w.jsx)("ul",{className:Z().searchResultHost,children:h&&h.map((function(e,n){return(0,w.jsxs)("li",{className:"text-overflow-ellipsis",onClick:function(){return W(e.content)},title:e.content,children:[(0,w.jsx)("em",{children:++n}),e.content]},e.content)}))})]})]})]})})};t(13254);var k=t(14277),C=t(95376),R=t.n(C),H=t(42919),B=t.n(H),T=t(42906),F=t(70029),q=t(73727);const L=function(){var e=(0,T.v)();return(0,w.jsx)("div",{className:R().watchRecord,children:(0,w.jsxs)("div",{className:R().recordContent,children:[(!e||!e.length)&&(0,w.jsx)("div",{className:R().empty,children:(0,w.jsx)(k.Z,{image:B(),imageStyle:{height:60},description:(0,w.jsx)("div",{style:{marginTop:"13px"},children:"\u60a8\u8fd8\u6ca1\u6709\u89c2\u770b\u4efb\u4f55\u89c6\u9891\u54e6"})})}),e&&e.map((function(e,n){var t=e.vodId,s=e.name,r=e.playId,c=e.picture,a=e.title,i=e.doubanScore,o=e.year;return(0,w.jsxs)("div",{className:R().recordItem,children:[(0,w.jsx)("div",{className:R().recordImg,children:(0,w.jsx)(F.Z,{id:t,banner:!1,name:s,picture:c,query:{id:r}})}),(0,w.jsx)(q.rU,{to:"/video/detail/".concat(t,"?id=").concat(r),children:(0,w.jsxs)("div",{className:R().info,children:[(0,w.jsxs)("p",{children:["\u7247\u540d\uff1a",s]}),(0,w.jsxs)("p",{children:["\u64ad\u653e\uff1a",a]}),(0,w.jsxs)("p",{children:["\u8bc4\u5206\uff1a",i]}),(0,w.jsxs)("p",{children:["\u5e74\u4efd\uff1a",o]})]})})]},n)}))]})})};var P=t(39103),U=t.n(P),z=t(57254),D=function(e){var n=e.item;return(0,w.jsx)("li",{children:(0,w.jsx)(q.rU,{to:"/type/".concat(n.id),children:n.name})})},J=function(e){var n=e.types;return(0,w.jsxs)("div",{className:U().box,children:[(0,w.jsx)("ul",{className:U().ul,children:n.map((function(e){return(0,w.jsx)(D,{item:e},e.id)}))}),(0,w.jsxs)("div",{className:U().all,children:[(0,w.jsx)("span",{className:U().allTxt,children:"\u5168\u90e8"}),(0,w.jsx)("span",{className:U().allNav,children:"\u5bfc\u822a"}),(0,w.jsx)(z.Z,{className:U().allIcon}),(0,w.jsx)("ul",{className:U().typeList,children:n.map((function(e){return(0,w.jsxs)(d.Fragment,{children:[(0,w.jsx)(D,{item:e}),e.children&&e.children.map((function(e){return(0,w.jsx)(D,{item:e},e.id)}))]},e.id)}))})]})]})};const K=(0,x.connect)((function(e){var n=e.global;return{types:n.types}}))(J);var W=t(78338),E=t(53245),Y=t.n(E),A=t(43367),M=t.n(A),O=t(63022),X=t(30901),G=t.n(X);const V=function(){var e=(0,O.Z)();return(0,w.jsxs)("div",{className:G().box,children:[(0,w.jsx)("span",{className:G().type,children:e.effectiveType}),(0,w.jsxs)("span",{className:G().fps,children:[" FPS ",e.rtt]})]})};var Q=function(e){var n=e.config,t=e.colConfig,s=(0,u.isBrowser)();function r(){x.m.push("/")}return(0,w.jsx)(h.Z,{style:{zIndex:5e3},children:(0,w.jsx)("header",{className:p().header,children:(0,w.jsxs)(c.Z,{children:[(0,w.jsx)(i.Z,(0,a.Z)((0,a.Z)({},t),{},{offset:1,children:(0,w.jsxs)(c.Z,{justify:"space-between",align:"middle",gutter:{xs:0,sm:16,md:0},children:[(0,w.jsx)(i.Z,{xs:0,sm:0,md:3,lg:4,xl:3,xxl:3,children:(0,w.jsx)("div",{style:{backgroundImage:"url(".concat(n.siteLogo||Y(),")")},className:p().logo,onClick:r})}),(0,w.jsx)(i.Z,{xs:5,sm:3,md:0,children:(0,w.jsx)("div",{style:{backgroundImage:"url(".concat(n.wapLogo||M(),")")},className:p().logo,onClick:r})}),(0,w.jsxs)(i.Z,{span:16,xs:19,sm:21,md:21,lg:20,xl:21,xxl:21,className:"display-flex justify-content-space-between align-items-center",children:[(0,w.jsx)(K,{}),(0,w.jsx)(S,{}),(0,w.jsx)("div",{className:p().userInfo,children:(0,w.jsx)("div",{className:p().infoList,children:(0,w.jsxs)("div",{className:[p().infoItem,p().record].join(" "),children:[(0,w.jsx)(W.Z,{}),(0,w.jsx)("div",{className:p().infoTitle,children:"\u770b\u8fc7"}),s&&(0,w.jsx)(L,{})]})})})]})]})})),s&&(0,w.jsx)(V,{})]})})})};const $=(0,x.connect)((function(e){var n=e.global;return{config:n.config}}))(Q);var ee=t(74865),ne=t.n(ee),te=t(96318),se=t.n(te),re=function(e){var n=e.config,t=void 0===n?{}:n,s=e.path,r=t.siteName,c=t.siteLogo,a=t.icon;return(0,w.jsxs)(x.Helmet,{children:[(0,w.jsx)("meta",{property:"og:url",content:s}),(0,w.jsx)("meta",{property:"og:type",content:"video"}),(0,w.jsx)("meta",{property:"og:title",content:r}),(0,w.jsx)("meta",{property:"og:image",content:c}),(0,w.jsx)("meta",{property:"og:site_name",content:r}),(0,w.jsx)("meta",{"http-equiv":"mobile-agent",content:'"format=html5; url='.concat(s,'"')}),(0,w.jsx)("link",{rel:"dns-prefetch",href:"https://cdn.jsdelivr.net"}),(0,w.jsx)("meta",{name:"apple-mobile-web-app-title",content:r}),(0,w.jsx)("link",{rel:"icon",type:"image/x-icon",href:a||se()})]})};const ce=(0,x.connect)((function(e){var n=e.global;return{config:n.config}}))(re);var ae=function(e){return(0,u.isBrowser)()&&setTimeout((function(){ne().done()}),100),(0,w.jsxs)(d.Fragment,{children:[(0,w.jsx)(ce,{path:e.path}),(0,w.jsx)("div",{className:"layout_header",children:(0,w.jsx)($,{colConfig:e.colConfig})}),(0,w.jsx)(c.Z,{children:(0,w.jsx)(i.Z,(0,a.Z)((0,a.Z)({},e.colConfig),{},{offset:1,children:(0,w.jsx)("div",{className:"content margin-bottom-md padding-top-md",children:e.children})}))}),(0,w.jsx)(r.Z,{})]})};ae.getInitialProps=function(){var e=(0,s.Z)(l().mark((function e(n){var t;return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.isServer){e.next=2;break}return e.abrupt("return");case 2:if(t="",t=n.isServer?n.serverHref:window.location.href,n.store.getState().loading.models.global){e.next=7;break}return e.next=7,n.store.dispatch({type:"global/getData"});case 7:return e.abrupt("return",(0,a.Z)({path:t},n.store.getState()));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();const ie=(0,x.connect)((function(e){var n=e.layout;return{colConfig:n.config}}))(ae)},42906:(e,n,t)=>{"use strict";t.d(n,{v:()=>s,U:()=>r});var s=function(){var e=window.localStorage.getItem("watch_recrod_key");return e?JSON.parse(e):[]},r=function(e){var n=s().filter((function(n){return n.playId!=e.playId&&n.vodId!=e.vodId}));return n.unshift(e),window.localStorage.setItem("watch_recrod_key",JSON.stringify(n))}},70029:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var s=t(2824),r=t(67294),c=t(73727),a=t(15909),i=t.n(a),o=function(e){if(!e||!e.cdn)return(null===e||void 0===e?void 0:e.pic)||(null===e||void 0===e?void 0:e.url)||"/";var n=e.cdn,t=n.r.path,s=n.path;return"".concat("https://cdn.jsdelivr.net/","gh/").concat(t,"@main/").concat(s)},l=t(85893);const d=function(e){var n=e.id,t=e.name,a=void 0===t?"":t,d=e.banner,u=void 0===d||d,x=e.children,h=e.picture,m=e.playing,p=void 0!==m&&m,_=e.query,f=void 0===_?{}:_,v=(0,r.useState)({}),j=(0,s.Z)(v,2),g=j[0],y=j[1];return(0,r.useEffect)((function(){setTimeout((function(){y({backgroundImage:"url(".concat(o(h),")")})}),100)})),(0,l.jsxs)("div",{className:[i().box,u?i().bannerBox:i().videoBox].join(" "),children:[n&&(0,l.jsx)(c.rU,{to:{pathname:"/video/detail/".concat(n),query:f},title:a,style:g,className:[i().imgItem,p?"playing":""].join(" "),children:x}),!n&&(0,l.jsx)(r.Fragment,{children:x})]})}},42919:(e,n,t)=>{e.exports=t.p+"static/empty.dbd309de.svg"},96318:(e,n,t)=>{e.exports=t.p+"static/icon.c21b0fa5.png"},43367:(e,n,t)=>{e.exports=t.p+"static/logo-wap.b6252ca4.png"},53245:(e,n,t)=>{e.exports=t.p+"static/logo3.308fb3be.png"}}]);