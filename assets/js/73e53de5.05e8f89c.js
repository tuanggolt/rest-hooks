"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[62995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(83117),o=(r(67294),r(3905));const i={title:"Custom Resource cache lifetime",sidebar_label:"Custom cache lifetime",id:"resource-lifetime",original_id:"resource-lifetime"},a=void 0,c={unversionedId:"guides/resource-lifetime",id:"version-3.0/guides/resource-lifetime",title:"Custom Resource cache lifetime",description:"By default the NetworkManager specifies the lifetime of data and errors in the cache.",source:"@site/versioned_docs/version-3.0/guides/resource-lifetime.md",sourceDirName:"guides",slug:"/guides/resource-lifetime",permalink:"/docs/3.0/guides/resource-lifetime",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/resource-lifetime.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Custom Resource cache lifetime",sidebar_label:"Custom cache lifetime",id:"resource-lifetime",original_id:"resource-lifetime"},sidebar:"version-3.0/docs",previous:{title:"Custom networking library",permalink:"/docs/3.0/guides/custom-networking"},next:{title:"Cross-orgin requests with JSONP",permalink:"/docs/3.0/guides/jsonp"}},s={},l=[{value:"Examples",id:"examples",level:2},{value:"Long cache lifetime",id:"long-cache-lifetime",level:3},{value:"Never retry on error",id:"never-retry-on-error",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default the NetworkManager specifies the lifetime of data and errors in the cache.\nIf some resources are longer living, or shorter living than other, the can specify their own expiry length values,\nwhich will be passed on to all ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0/api/FetchShape"},"fetch shape")," creator functions of ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0/api/resource"},"Resource"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"long-cache-lifetime"},"Long cache lifetime"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LongLivingResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// We can now extend LongLivingResource to get a resource that will be cached for one hour\nabstract class LongLivingResource extends Resource {\n  static getFetchOptions() {\n    return {\n      ...super.getFetchOptions(),\n      dataExpiryLength: 60 * 60 * 1000, // one hour\n    };\n  }\n}\n")),(0,o.kt)("h3",{id:"never-retry-on-error"},"Never retry on error"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NoRetryResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// We can now extend NoRetryResource to get a resource that will never retry on network error\nabstract class NoRetryResource extends Resource {\n  static getFetchOptions() {\n    return {\n      ...super.getFetchOptions(),\n      errorExpiryLength: Infinity,\n    };\n  }\n}\n")))}p.isMDXComponent=!0}}]);