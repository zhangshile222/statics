(self["webpackChunk"]=self["webpackChunk"]||[]).push([[813],{78338:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};const o=i;var a=n(80505),c=function(e,t){return r.createElement(a.Z,Object.assign({},e,{ref:t,icon:o}))};c.displayName="ClockCircleOutlined";const l=r.forwardRef(c)},73171:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};const o=i;var a=n(80505),c=function(e,t){return r.createElement(a.Z,Object.assign({},e,{ref:t,icon:o}))};c.displayName="DeleteOutlined";const l=r.forwardRef(c)},70883:()=>{},57484:()=>{},18067:()=>{},10247:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(67294),i=n(96942),o=function(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},a={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},c={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},l={ctrl:function(e){return e.ctrlKey},shift:function(e){return e.shiftKey},alt:function(e){return e.altKey},meta:function(e){return e.metaKey}},s=function(){};function u(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()}function f(e,t){var n,r;if(!e.key)return!1;var i=u(t);if("number"===i)return e.keyCode===t;var s=t.split("."),f=0;try{for(var v=o(s),d=v.next();!d.done;d=v.next()){var h=d.value,p=l[h],m=c[h],y=a[h];(p&&p(e)||(m&&"array"===u(m)?m.includes(e.key):m===e.key)||(y&&"array"===u(y)?y.includes(e.keyCode):y===e.keyCode)||e.key.toUpperCase()===h.toUpperCase())&&f++}}catch(g){n={error:g}}finally{try{d&&!d.done&&(r=v["return"])&&r.call(v)}finally{if(n)throw n.error}}return f===s.length}function v(e){var t=u(e);return"function"===t?e:"string"===t||"number"===t?function(t){return f(t,e)}:"array"===t?function(t){return e.some((function(e){return f(t,e)}))}:e?function(){return!0}:function(){return!1}}var d=["keydown"];function h(e,t,n){void 0===t&&(t=s),void 0===n&&(n={});var a=n.events,c=void 0===a?d:a,l=n.target,u=(0,r.useRef)(t);u.current=t,(0,r.useEffect)((function(){var t,n,r=function(t){var n=v(e);if(n(t))return u.current(t)},a=(0,i.n)(l,window);try{for(var s=o(c),f=s.next();!f.done;f=s.next()){var d=f.value;a.addEventListener(d,r)}}catch(h){t={error:h}}finally{try{f&&!f.done&&(n=s["return"])&&n.call(s)}finally{if(t)throw t.error}}return function(){var e,t;try{for(var n=o(c),i=n.next();!i.done;i=n.next()){var l=i.value;a.removeEventListener(l,r)}}catch(s){e={error:s}}finally{try{i&&!i.done&&(t=n["return"])&&t.call(n)}finally{if(e)throw e.error}}}}),[c,e,l])}const p=h},71685:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),i=function(e,t){var n=(0,r.useRef)(!1);(0,r.useEffect)((function(){if(n.current)return e();n.current=!0}),t)};const o=i;var a=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(c){i={error:c}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a};function c(e){return"function"===typeof e}function l(e){function t(t,n){var i=e,l=a((0,r.useState)((function(){return f()})),2),s=l[0],u=l[1];function f(){var e=i.getItem(t);if(e)try{return JSON.parse(e)}catch(r){}return c(n)?n():n}o((function(){u(f())}),[t]);var v=(0,r.useCallback)((function(e){if("undefined"===typeof e)i.removeItem(t),u(void 0);else if(c(e)){var n=f(),r=e(n);i.setItem(t,JSON.stringify(r)),u(r)}else i.setItem(t,JSON.stringify(e)),u(e)}),[t]);return[s,v]}return e?t:function(e,t){return[c(t)?t():t,function(){}]}}var s=l("object"===typeof window?window.localStorage:null);const u=s},63022:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},o=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(c){i={error:c}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a};function a(){var e=navigator;return"object"!==typeof e?null:e.connection||e.mozConnection||e.webkitConnection}function c(){var e=a();return e?{rtt:e.rtt,type:e.type,saveData:e.saveData,downlink:e.downlink,downlinkMax:e.downlinkMax,effectiveType:e.effectiveType}:{}}function l(){var e=o((0,r.useState)((function(){return i({since:void 0,online:navigator.onLine},c())})),2),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=function(){n((function(e){return i(i({},e),{online:!0,since:new Date})}))},t=function(){n((function(e){return i(i({},e),{online:!1,since:new Date})}))},r=function(){n((function(e){return i(i({},e),c())}))};window.addEventListener("online",e),window.addEventListener("offline",t);var o=a();return null===o||void 0===o||o.addEventListener("change",r),function(){window.removeEventListener("online",e),window.removeEventListener("offline",t),null===o||void 0===o||o.removeEventListener("change",r)}}),[]),t}const s=l},48783:(e,t,n)=>{"use strict";n.d(t,{t:()=>o,U:()=>a});var r=n(85061),i=n(75164);function o(e){var t,n=function(n){return function(){t=null,e.apply(void 0,(0,r.Z)(n))}},o=function(){if(null==t){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];t=(0,i.Z)(n(r))}};return o.cancel=function(){return i.Z.cancel(t)},o}function a(){return function(e,t,n){var r=n.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(t))return r;var n=o(r.bind(this));return i=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),i=!1,n}}}}},1734:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(22122),i=n(96156),o=n(6610),a=n(5991),c=n(10379),l=n(54070),s=n(90484),u=n(67294),f=n(94184),v=n.n(f),d=n(98423),h=n(28991),p=n(34203),m=n(50344),y=n(80334),g=n(42550),w=n(91033),x="rc-observer-key",b=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),e=t.apply(this,arguments),e.resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target,i=r.getBoundingClientRect(),o=i.width,a=i.height,c=r.offsetWidth,l=r.offsetHeight,s=Math.floor(o),u=Math.floor(a);if(e.state.width!==s||e.state.height!==u||e.state.offsetWidth!==c||e.state.offsetHeight!==l){var f={width:s,height:u,offsetWidth:c,offsetHeight:l};e.setState(f),n&&Promise.resolve().then((function(){n((0,h.Z)((0,h.Z)({},f),{},{offsetWidth:c,offsetHeight:l}),r)}))}},e.setChildNode=function(t){e.childNode=t},e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){var e=this.props.disabled;if(e)this.destroyObserver();else{var t=(0,p.Z)(this.childNode||this),n=t!==this.currentElement;n&&(this.destroyObserver(),this.currentElement=t),!this.resizeObserver&&t&&(this.resizeObserver=new w.Z(this.onResize),this.resizeObserver.observe(t))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=(0,m.Z)(e);if(t.length>1)(0,y.ZP)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return(0,y.ZP)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(u.isValidElement(n)&&(0,g.Yr)(n)){var r=n.ref;t[0]=u.cloneElement(n,{ref:(0,g.sQ)(r,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!u.isValidElement(e)||"key"in e&&null!==e.key?e:u.cloneElement(e,{key:"".concat(x,"-").concat(t)})}))}}]),n}(u.Component);b.displayName="ResizeObserver";const Z=b;var E=n(65632),C=n(48783),N=n(64019);function k(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function O(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function P(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n){var r=window.innerHeight-t.bottom;return n+r}}var z=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],T=[];function S(e,t){if(e){var n=T.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},T.push(n),z.forEach((function(t){n.eventHandlers[t]=(0,N.Z)(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function L(e){var t=T.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(T=T.filter((function(e){return e!==t})),z.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))}var H,R=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,s.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};function D(){return"undefined"!==typeof window?window:null}(function(e){e[e["None"]=0]="None",e[e["Prepare"]=1]="Prepare"})(H||(H={}));var M=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),e=t.apply(this,arguments),e.state={status:H.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props.offsetBottom,n=e.props.offsetTop;return void 0===t&&void 0===n&&(n=0),n},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,r=t.lastAffix,i=e.props.onChange,o=e.getTargetFunc();if(n===H.Prepare&&e.fixedNode&&e.placeholderNode&&o){var a=e.getOffsetTop(),c=e.getOffsetBottom(),l=o();if(l){var s={status:H.None},u=k(l),f=k(e.placeholderNode),v=O(f,u,a),d=P(f,u,c);void 0!==v?(s.affixStyle={position:"fixed",top:v,width:f.width,height:f.height},s.placeholderStyle={width:f.width,height:f.height}):void 0!==d&&(s.affixStyle={position:"fixed",bottom:d,width:f.width,height:f.height},s.placeholderStyle={width:f.width,height:f.height}),s.lastAffix=!!s.affixStyle,i&&r!==s.lastAffix&&i(s.lastAffix),e.setState(s)}}},e.prepareMeasure=function(){e.setState({status:H.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.render=function(){var t=e.context.getPrefixCls,n=e.state,o=n.affixStyle,a=n.placeholderStyle,c=e.props,l=c.prefixCls,s=c.children,f=v()((0,i.Z)({},t("affix",l),o)),h=(0,d.Z)(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return u.createElement(Z,{onResize:function(){e.updatePosition()}},u.createElement("div",(0,r.Z)({},h,{ref:e.savePlaceholderNode}),o&&u.createElement("div",{style:a,"aria-hidden":"true"}),u.createElement("div",{className:f,ref:e.saveFixedNode,style:o},u.createElement(Z,{onResize:function(){e.updatePosition()}},s))))},e}return(0,a.Z)(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||D}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){S(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),r=null;n&&(r=n()||null),t!==r&&(L(this),r&&(S(r,this),this.updatePosition()),this.setState({prevTarget:r})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),L(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),r=this.getOffsetBottom(),i=e();if(i&&this.placeholderNode){var o=k(i),a=k(this.placeholderNode),c=O(a,o,n),l=P(a,o,r);if(void 0!==c&&t.top===c||void 0!==l&&t.bottom===l)return}}this.prepareMeasure()}}]),n}(u.Component);M.contextType=E.E_,R([(0,C.U)()],M.prototype,"updatePosition",null),R([(0,C.U)()],M.prototype,"lazyUpdatePosition",null);const U=M},3515:(e,t,n)=>{"use strict";n(65056),n(70883)},33876:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var r=n(22122),i=n(96156),o=n(28481),a=n(67294),c=n(60444),l=n(64019),s=n(21770),u=n(94184),f=n.n(u),v=n(98423),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};const h=d;var p=n(80505),m=function(e,t){return a.createElement(p.Z,Object.assign({},e,{ref:t,icon:h}))};m.displayName="VerticalAlignTopOutlined";const y=a.forwardRef(m);var g=n(48783),w=n(65632);function x(e){return null!==e&&void 0!==e&&e===e.window}function b(e,t){var n;if("undefined"===typeof window)return 0;var r=t?"scrollTop":"scrollLeft",i=0;return x(e)?i=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?i=e.documentElement[r]:e&&(i=e[r]),e&&!x(e)&&"number"!==typeof i&&(i=null===(n=(e.ownerDocument||e).documentElement)||void 0===n?void 0:n[r]),i}var Z=n(75164);function E(e,t,n,r){var i=n-t;return e/=r/2,e<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getContainer,r=void 0===n?function(){return window}:n,i=t.callback,o=t.duration,a=void 0===o?450:o,c=r(),l=b(c,!0),s=Date.now(),u=function t(){var n=Date.now(),r=n-s,o=E(r>a?a:r,l,e,a);x(c)?c.scrollTo(window.pageXOffset,o):c instanceof HTMLDocument||"HTMLDocument"===c.constructor.name?c.documentElement.scrollTop=o:c.scrollTop=o,r<a?(0,Z.Z)(t):"function"===typeof i&&i()};(0,Z.Z)(u)}var N=a.isValidElement;function k(e,t,n){return N(e)?a.cloneElement(e,"function"===typeof n?n(e.props||{}):n):t}function O(e,t){return k(e,e,t)}var P=function(e){var t=(0,s.Z)(!1,{value:e.visible}),n=(0,o.Z)(t,2),u=n[0],d=n[1],h=a.createRef(),p=a.useRef(),m=function(){return h.current&&h.current.ownerDocument?h.current.ownerDocument:window},x=(0,g.t)((function(t){var n=e.visibilityHeight,r=b(t.target,!0);d(r>n)})),Z=function(){var t=e.target,n=t||m,r=n();p.current=(0,l.Z)(r,"scroll",(function(e){x(e)})),x({target:r})};a.useEffect((function(){return Z(),function(){p.current&&p.current.remove(),x.cancel()}}),[e.target]);var E=function(t){var n=e.onClick,r=e.target,i=e.duration,o=void 0===i?450:i;C(0,{getContainer:r||m,duration:o}),"function"===typeof n&&n(t)},N=function(t){var n=t.prefixCls,r=t.rootPrefixCls,i=e.children,o=a.createElement("div",{className:"".concat(n,"-content")},a.createElement("div",{className:"".concat(n,"-icon")},a.createElement(y,null)));return a.createElement(c.Z,{visible:u,motionName:"".concat(r,"-fade"),removeOnLeave:!0},(function(e){var t=e.className,n=i||o;return a.createElement("div",null,O(n,(function(e){var n=e.className;return{className:f()(t,n)}})))}))},k=a.useContext(w.E_),P=k.getPrefixCls,z=k.direction,T=e.prefixCls,S=e.className,L=void 0===S?"":S,H=P("back-top",T),R=P(),D=f()(H,(0,i.Z)({},"".concat(H,"-rtl"),"rtl"===z),L),M=(0,v.Z)(e,["prefixCls","className","children","visibilityHeight","target","visible"]);return a.createElement("div",(0,r.Z)({},M,{className:D,onClick:E,ref:h}),N({prefixCls:H,rootPrefixCls:R}))};P.defaultProps={visibilityHeight:400};const z=a.memo(P)},16318:(e,t,n)=>{"use strict";n(65056),n(57484)},33860:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var r=n(96156),i=n(22122),o=n(90484),a=n(67294),c=n(94184),l=n.n(c),s=function(e){var t=e.prefixCls,n=e.className,r=e.width,o=e.style;return a.createElement("h3",{className:l()(t,n),style:(0,i.Z)({width:r},o)})};const u=s;var f=n(85061),v=function(e){var t=function(t){var n=e.width,r=e.rows,i=void 0===r?2:r;return Array.isArray(n)?n[t]:i-1===t?n:void 0},n=e.prefixCls,r=e.className,i=e.style,o=e.rows,c=(0,f.Z)(Array(o)).map((function(e,n){return a.createElement("li",{key:n,style:{width:t(n)}})}));return a.createElement("ul",{className:l()(n,r),style:i},c)};const d=v;var h=n(65632),p=function(e){var t,n,o=e.prefixCls,c=e.className,s=e.style,u=e.size,f=e.shape,v=l()((t={},(0,r.Z)(t,"".concat(o,"-lg"),"large"===u),(0,r.Z)(t,"".concat(o,"-sm"),"small"===u),t)),d=l()((n={},(0,r.Z)(n,"".concat(o,"-circle"),"circle"===f),(0,r.Z)(n,"".concat(o,"-square"),"square"===f),(0,r.Z)(n,"".concat(o,"-round"),"round"===f),n)),h="number"===typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{};return a.createElement("span",{className:l()(o,v,d,c),style:(0,i.Z)((0,i.Z)({},h),s)})};const m=p;var y=n(98423),g=function(e){var t=function(t){var n=t.getPrefixCls,o=e.prefixCls,c=e.className,s=e.active,u=n("skeleton",o),f=(0,y.Z)(e,["prefixCls"]),v=l()(u,"".concat(u,"-element"),(0,r.Z)({},"".concat(u,"-active"),s),c);return a.createElement("div",{className:v},a.createElement(m,(0,i.Z)({prefixCls:"".concat(u,"-avatar")},f)))};return a.createElement(h.C,null,t)};g.defaultProps={size:"default",shape:"circle"};const w=g;var x=function(e){var t=function(t){var n=t.getPrefixCls,o=e.prefixCls,c=e.className,s=e.active,u=n("skeleton",o),f=(0,y.Z)(e,["prefixCls"]),v=l()(u,"".concat(u,"-element"),(0,r.Z)({},"".concat(u,"-active"),s),c);return a.createElement("div",{className:v},a.createElement(m,(0,i.Z)({prefixCls:"".concat(u,"-button")},f)))};return a.createElement(h.C,null,t)};x.defaultProps={size:"default"};const b=x;var Z=function(e){var t=function(t){var n=t.getPrefixCls,o=e.prefixCls,c=e.className,s=e.active,u=n("skeleton",o),f=(0,y.Z)(e,["prefixCls"]),v=l()(u,"".concat(u,"-element"),(0,r.Z)({},"".concat(u,"-active"),s),c);return a.createElement("div",{className:v},a.createElement(m,(0,i.Z)({prefixCls:"".concat(u,"-input")},f)))};return a.createElement(h.C,null,t)};Z.defaultProps={size:"default"};const E=Z;var C="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",N=function(e){var t=function(t){var n=t.getPrefixCls,r=e.prefixCls,i=e.className,o=e.style,c=n("skeleton",r),s=l()(c,"".concat(c,"-element"),i);return a.createElement("div",{className:s},a.createElement("div",{className:l()("".concat(c,"-image"),i),style:o},a.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(c,"-image-svg")},a.createElement("path",{d:C,className:"".concat(c,"-image-path")}))))};return a.createElement(h.C,null,t)};const k=N;function O(e){return e&&"object"===(0,o.Z)(e)?e:{}}function P(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function z(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function T(e,t){var n={};return e&&t||(n.width="61%"),n.rows=!e&&t?3:2,n}var S=function(e){var t=function(t){var n=t.getPrefixCls,o=t.direction,c=e.prefixCls,s=e.loading,f=e.className,v=e.children,h=e.avatar,p=e.title,y=e.paragraph,g=e.active,w=e.round,x=n("skeleton",c);if(s||!("loading"in e)){var b,Z,E,C=!!h,N=!!p,k=!!y;if(C){var S=(0,i.Z)((0,i.Z)({prefixCls:"".concat(x,"-avatar")},P(N,k)),O(h));Z=a.createElement("div",{className:"".concat(x,"-header")},a.createElement(m,S))}if(N||k){var L,H;if(N){var R=(0,i.Z)((0,i.Z)({prefixCls:"".concat(x,"-title")},z(C,k)),O(p));L=a.createElement(u,R)}if(k){var D=(0,i.Z)((0,i.Z)({prefixCls:"".concat(x,"-paragraph")},T(C,N)),O(y));H=a.createElement(d,D)}E=a.createElement("div",{className:"".concat(x,"-content")},L,H)}var M=l()(x,(b={},(0,r.Z)(b,"".concat(x,"-with-avatar"),C),(0,r.Z)(b,"".concat(x,"-active"),g),(0,r.Z)(b,"".concat(x,"-rtl"),"rtl"===o),(0,r.Z)(b,"".concat(x,"-round"),w),b),f);return a.createElement("div",{className:M},Z,E)}return v};return a.createElement(h.C,null,t)};S.defaultProps={avatar:!1,title:!0,paragraph:!0},S.Button=b,S.Avatar=w,S.Input=E,S.Image=k;const L=S,H=L},18446:(e,t,n)=>{"use strict";n(65056),n(18067)}}]);