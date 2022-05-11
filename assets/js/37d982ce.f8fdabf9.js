"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[91827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const i={title:"<CacheProvider />",id:"CacheProvider",original_id:"CacheProvider"},o=void 0,s={unversionedId:"api/CacheProvider",id:"version-3.0/api/CacheProvider",title:"<CacheProvider />",description:"Manages state, providing all context needed to use the hooks. Should be placed as high as possible",source:"@site/versioned_docs/version-3.0/api/CacheProvider.md",sourceDirName:"api",slug:"/api/CacheProvider",permalink:"/docs/3.0/api/CacheProvider",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/CacheProvider.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"<CacheProvider />",id:"CacheProvider",original_id:"CacheProvider"},sidebar:"version-3.0/docs",previous:{title:"useResetter()",permalink:"/docs/3.0/api/useResetter"},next:{title:"<ExternalCacheProvider />",permalink:"/docs/3.0/api/ExternalCacheProvider"}},l={},c=[{value:"initialState: State&lt;unknown&gt;",id:"initialstate-stateunknown",level:2},{value:"managers: Manager[]",id:"managers-manager",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderProps {\n  children: ReactNode;\n  managers: Manager[];\n  initialState: State<unknown>;\n}\n")),(0,a.kt)("p",null,"Manages state, providing all context needed to use the hooks. Should be placed as high as possible\nin application tree as any usage of the hooks is only possible for components below the provider\nin the React tree."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body\n);\n")),(0,a.kt)("h2",{id:"initialstate-stateunknown"},"initialState: State\\<unknown",">"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type State<T> = Readonly<{\n  entities: Readonly<{ [fetchKey: string]: { [pk: string]: T } | undefined }>;\n  results: Readonly<{ [url: string]: unknown | PK[] | PK | undefined }>;\n  meta: Readonly<{\n    [url: string]: { date: number; error?: Error; expiresAt: number };\n  }>;\n}>;\n")),(0,a.kt)("p",null,"Instead of starting with an empty cache, you can provide your own initial state. This can\nbe useful for testing, or rehydrating the cache state when using server side rendering."),(0,a.kt)("h2",{id:"managers-manager"},"managers: Manager[]"),(0,a.kt)("p",null,"Default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"[new NetworkManager(), new SubscriptionManager(PollingSubscription)]\n")),(0,a.kt)("p",null,"List of ",(0,a.kt)("a",{parentName:"p",href:"./Manager"},"Manager"),"s use. This is the main extensibility point of the provider."))}d.isMDXComponent=!0}}]);