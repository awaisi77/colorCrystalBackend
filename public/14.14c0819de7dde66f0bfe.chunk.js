(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),i=n("ab039aecd4a1d4fedc0e"),c=n("d7dd51e1bf6bfc2c9c3d"),s=n("ab4cb61bcb2dc161defb"),l=n("a28fc3c963a1d4d1a2e5"),d=(n("5ef9de3df8d92ea0e41c"),n("5fa3f8487e09c6182715")),u=n.n(d),f=n("f3b0ff1628e56352bcbf"),m=n.n(f),p=n("a1cf5d6fa4ed65a6ddd5"),b=n.n(p),g=n("6a4f9c383785f9168266"),v=n.n(g),h=n("d3a850c4000d77bccc89"),y=n.n(h),w=n("f2873ecf7390fe7d7c89"),j=n.n(w);function S(e){var t={dispatch:m.a,subscribe:m.a,getState:m.a,replaceReducer:m.a,runSaga:m.a,injectedReducers:y.a,injectedSagas:y.a};v()(j()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var x=n("491cc2e27aa2b4221847");function O(e,t){return function(n,r){t||S(e),v()(u()(n)&&!b()(n)&&m()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(x.a)(e.injectedReducers)))}}function k(e){return S(e),{injectReducer:O(e,!0)}}var C=function(e){var t=e.key,n=e.reducer,r=a.a.useContext(c.ReactReduxContext);a.a.useEffect(function(){k(r.store).injectReducer(t,n)},[])},R="@@saga-injector/daemon",P="@@saga-injector/once-till-unmount";function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){N(e,t,n[t])})}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=["@@saga-injector/restart-on-remount",R,P],M=function(e){return v()(u()(e)&&!b()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},_=function(e){var t={saga:m.a,mode:function(e){return u()(e)&&E.includes(e)}};v()(j()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function A(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t||S(e);var o=I({},r,{mode:r.mode||R}),i=o.saga,c=o.mode;M(n),_(o);var s=Reflect.has(e.injectedSagas,n);(!s||s&&c!==R&&c!==P)&&(e.injectedSagas[n]=I({},o,{task:e.runSaga(i,a)}))}}function H(e,t){return function(n){if(t||S(e),M(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==R&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function $(e){return S(e),{injectSaga:A(e,!0),ejectSaga:H(e,!0)}}var F,z=function(e){var t=e.key,n=e.saga,r=e.mode,o=a.a.useContext(c.ReactReduxContext);a.a.useEffect(function(){var e=$(o.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])},U=n("c4ec0be7fefbdf794ace"),D=function(e){return e.global||U.b},L=n("0b3cb19af78752326f59"),T=L.b.h2.withConfig({displayName:"H2",componentId:"egphza-0"})(["font-size:1.5em;"]),W=L.b.ul.withConfig({displayName:"Ul",componentId:"mwnq6h-0"})(["list-style:none;margin:0;width:100%;max-height:30em;overflow-y:auto;padding:0 1em;"]),q=L.b.div.withConfig({displayName:"Wrapper",componentId:"sc-1umgotm-0"})(["padding:0;margin:0;width:100%;background-color:white;border:1px solid #ccc;border-radius:3px;overflow:hidden;"]);function G(e,t,n,r){F||(F="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),s=0;s<o;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:F,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var J=G("div",{});var V,B=function(e){var t=e.component,n=J;return n=e.items?e.items.map(function(e){return G(t,{item:e},"item-".concat(e.id))}):G(t,{}),G(q,{},void 0,G(W,{},void 0,n))},X=L.b.div.withConfig({displayName:"Item",componentId:"sc-3y9mie-0"})(["display:flex;justify-content:space-between;width:100%;height:100%;align-items:center;"]),K=L.b.li.withConfig({displayName:"Wrapper",componentId:"euo0oy-0"})(["width:100%;height:3em;display:flex;align-items:center;position:relative;border-top:1px solid #eee;&:first-child{border-top:none;}"]);function Q(e,t,n,r){V||(V="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),s=0;s<o;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:V,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var Y,Z=function(e){return Q(K,{},void 0,Q(X,{},void 0,e.item))},ee=n("8e4c85c29cdef1bf8a5f");function te(e,t,n,r){Y||(Y="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),s=0;s<o;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:Y,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var re=te("path",{d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"});var ae,oe=function(e){return a.a.createElement("svg",ne({height:"1em",width:"0.875em",className:e.className},e),re)},ie=Object(L.b)(oe).withConfig({displayName:"IssueIcon",componentId:"s8m34y-0"})(["fill:#ccc;margin-right:0.25em;"]),ce=L.b.a.withConfig({displayName:"A",componentId:"br8h0y-0"})(["color:#41addd;&:hover{color:#6cc0e5;}"]),se=Object(L.b)(ce).withConfig({displayName:"IssueLink",componentId:"uyzonb-0"})(["height:100%;color:black;display:flex;align-items:center;justify-content:center;white-space:nowrap;"]),le=Object(L.b)(ce).withConfig({displayName:"RepoLink",componentId:"pvpwpn-0"})(["height:100%;color:black;display:flex;align-items:center;width:100%;"]),de=L.b.div.withConfig({displayName:"Wrapper",componentId:"sc-17s0rao-0"})(["width:100%;height:100%;display:flex;align-items:space-between;"]);function ue(e,t,n,r){ae||(ae="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),s=0;s<o;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:ae,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var fe=ue(ie,{});var me,pe=Object(c.connect)(Object(l.b)({currentUser:Object(l.a)(D,function(e){return e.currentUser})}))(function(e){var t=e.item,n="";t.owner.login!==e.currentUser&&(n="".concat(t.owner.login,"/"));var r=ue(de,{},void 0,ue(le,{href:t.html_url,target:"_blank"},void 0,n+t.name),ue(se,{href:"".concat(t.html_url,"/issues"),target:"_blank"},void 0,fe,ue(i.FormattedNumber,{value:t.open_issues_count})));return ue(Z,{item:r},"repo-list-item-".concat(t.full_name))});function be(e,t,n,r){me||(me="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),s=0;s<o;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:me,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var ge=be(B,{component:ee.a}),ve=be(Z,{item:"Something went wrong, please try again!"});var he=function(e){var t=e.loading,n=e.error,r=e.repos;if(t)return ge;if(!1!==n)return be(B,{component:function(){return ve}});return!1!==r?be(B,{items:r,component:pe}):null},ye=L.b.span.withConfig({displayName:"AtPrefix",componentId:"sc-1suuq8o-0"})(["color:black;margin-left:0.4em;"]),we=L.b.section.withConfig({displayName:"Section",componentId:"sc-1eulrsm-0"})(["margin:3em auto;&:first-child{margin-top:0;}"]),je=Object(L.b)(we).withConfig({displayName:"CenteredSection",componentId:"sc-6zy0wx-0"})(["text-align:center;"]),Se=L.b.form.withConfig({displayName:"Form",componentId:"dmhz4x-0"})(["margin-bottom:1em;"]),xe=L.b.input.withConfig({displayName:"Input",componentId:"sc-19rkjmi-0"})(["outline:none;border:none;border-bottom:1px dotted #999;background-color:transparent;"]),Oe="boilerplate.containers.HomePage",ke=Object(i.defineMessages)({startProjectHeader:{id:"".concat(Oe,".start_project.header"),defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"".concat(Oe,".start_project.message"),defaultMessage:"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"},trymeHeader:{id:"".concat(Oe,".tryme.header"),defaultMessage:"Try me!"},trymeMessage:{id:"".concat(Oe,".tryme.message"),defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"".concat(Oe,".tryme.atPrefix"),defaultMessage:"@"}}),Ce=n("fcb99a06256635f70435");function Re(e,t){return{type:Ce.c,repos:e,username:t}}var Pe="boilerplate/Home/CHANGE_USERNAME";var Ie=n("7edf83707012a871cdfb"),Ne={username:""},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return Object(Ie.a)(e,function(e){switch(t.type){case Pe:e.username=t.username.replace(/@/gi,"")}})},Me=function(e){return e.home||Ne},_e=function(){return Object(l.a)(Me,function(e){return e.username})},Ae=n("d782b72bc5b680c7122c");function He(e){return 204===e.status||205===e.status?null:e.json()}function $e(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function Fe(e,t){return fetch(e,t).then($e).then(He)}var ze,Ue=regeneratorRuntime.mark(Le),De=regeneratorRuntime.mark(Te);function Le(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Ae.select)(_e());case 2:return e=r.sent,t="https://api.github.com/users/".concat(e,"/repos?type=all&sort=updated"),r.prev=4,r.next=7,Object(Ae.call)(Fe,t);case 7:return n=r.sent,r.next=10,Object(Ae.put)(Re(n,e));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(4),r.next=16,Object(Ae.put)((a=r.t0,{type:Ce.b,error:a}));case 16:case"end":return r.stop()}var a},Ue,null,[[4,12]])}function Te(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.takeLatest)(Ce.a,Le);case 2:case"end":return e.stop()}},De)}function We(e,t,n,r){ze||(ze="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var c=new Array(o),s=0;s<o;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:ze,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"HomePage",function(){return Je}),n.d(t,"mapDispatchToProps",function(){return Be});var qe="home",Ge=We(o.Helmet,{},void 0,We("title",{},void 0,"Home Page"),We("meta",{name:"description",content:"A React.js Boilerplate application homepage"}));function Je(e){var t=e.username,n=e.loading,o=e.error,c=e.repos,s=e.onSubmitForm,l=e.onChangeUsername;C({key:qe,reducer:Ee}),z({key:qe,saga:Te}),Object(r.useEffect)(function(){t&&t.trim().length>0&&s()},[]);var d={loading:n,error:o,repos:c};return We("article",{},void 0,Ge,We("div",{},void 0,We(je,{},void 0,We(T,{},void 0,a.a.createElement(i.FormattedMessage,ke.startProjectHeader)),We("p",{},void 0,a.a.createElement(i.FormattedMessage,ke.startProjectMessage))),We(we,{},void 0,We(T,{},void 0,a.a.createElement(i.FormattedMessage,ke.trymeHeader)),We(Se,{onSubmit:s},void 0,We("label",{htmlFor:"username"},void 0,a.a.createElement(i.FormattedMessage,ke.trymeMessage),We(ye,{},void 0,a.a.createElement(i.FormattedMessage,ke.trymeAtPrefix)),We(xe,{id:"username",type:"text",placeholder:"mxstbr",value:t,onChange:l}))),a.a.createElement(he,d))))}var Ve=Object(l.b)({repos:Object(l.a)(D,function(e){return e.userData.repositories}),username:_e(),loading:Object(l.a)(D,function(e){return e.loading}),error:Object(l.a)(D,function(e){return e.error})});function Be(e){return{onChangeUsername:function(t){return e((n=t.target.value,{type:Pe,username:n}));var n},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e({type:Ce.a})}}}var Xe=Object(c.connect)(Ve,Be);t.default=Object(s.compose)(Xe,r.memo)(Je)}}]);