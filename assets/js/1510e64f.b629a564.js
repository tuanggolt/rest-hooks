"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[77417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(83117),r=(n(67294),n(3905));const o={title:"PollingSubscription implements Subscription",sidebar_label:"PollingSubscription",hide_title:!0,id:"PollingSubscription",original_id:"PollingSubscription"},a="PollingSubscription implements [Subscription](/docs/4.1/api/SubscriptionManager)",l={unversionedId:"api/PollingSubscription",id:"version-4.1/api/PollingSubscription",title:"PollingSubscription implements Subscription",description:"Will dispatch a fetch action at the minimum interval of all subscriptions to this",source:"@site/versioned_docs/version-4.1/api/PollingSubscription.md",sourceDirName:"api",slug:"/api/PollingSubscription",permalink:"/docs/4.1/api/PollingSubscription",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/PollingSubscription.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"PollingSubscription implements Subscription",sidebar_label:"PollingSubscription",hide_title:!0,id:"PollingSubscription",original_id:"PollingSubscription"},sidebar:"version-4.1/docs",previous:{title:"SubscriptionManager",permalink:"/docs/4.1/api/SubscriptionManager"},next:{title:"<MockProvider />",permalink:"/docs/4.1/api/MockProvider"}},s={},c=[{value:"Dispatched Actions",id:"dispatched-actions",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pollingsubscription-implements-subscription"},"PollingSubscription implements ",(0,r.kt)("a",{parentName:"h1",href:"/docs/4.1/api/SubscriptionManager"},"Subscription")),(0,r.kt)("p",null,"Will dispatch a ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," action at the minimum interval of all subscriptions to this\nresource."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pauses when offline."),(0,r.kt)("li",{parentName:"ul"},"Immediately fetches when online status returns."),(0,r.kt)("li",{parentName:"ul"},"Immediately fetches any new subscriptions.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  CacheProvider,\n} from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\n\nReactDOM.render(\n  <CacheProvider subscriptionManager={subscriptionManager}>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n")),(0,r.kt)("h2",{id:"dispatched-actions"},"Dispatched Actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'rest-hooks/fetch'")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,r.kt)("p",{parentName:"blockquote"},"This is already used by ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheProvider")," by default.")))}u.isMDXComponent=!0}}]);