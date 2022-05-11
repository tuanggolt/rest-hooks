"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[51812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(83117),s=(n(67294),n(3905));const o={title:"useSubscription()",id:"useSubscription",original_id:"useSubscription"},i=void 0,a={unversionedId:"api/useSubscription",id:"version-2.2/api/useSubscription",title:"useSubscription()",description:"Great for keeping resources up-to-date with frequent changes.",source:"@site/versioned_docs/version-2.2/api/useSubscription.md",sourceDirName:"api",slug:"/api/useSubscription",permalink:"/docs/2.2/api/useSubscription",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSubscription.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"useSubscription()",id:"useSubscription",original_id:"useSubscription"},sidebar:"version-2.2/docs",previous:{title:"useResultCache()",permalink:"/docs/2.2/api/useResultCache"},next:{title:"useRetrieve()",permalink:"/docs/2.2/api/useRetrieve"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Only subscribe while element is visible",id:"only-subscribe-while-element-is-visible",level:2},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription(\n  fetchShape: ReadShape,\n  params: object | null,\n  body?: object | string,\n  active?: boolean = true,\n): void;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(\n  fetchShape: ReadShape<S, Params, Body>,\n  params: Params | null,\n  body?: Body,\n  active?: boolean = true,\n): void;\n")),(0,s.kt)("p",null,"Great for keeping resources up-to-date with frequent changes."),(0,s.kt)("p",null,"Frequency must be set in ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/FetchShape"},"FetchShape"),", otherwise will have no effect."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"PriceResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, RequestOptions } from 'rest-hooks';\n\nexport default class PriceResource extends Resource {\n  readonly symbol: string | null = null;\n  readonly price: string = '0.0';\n  // ...\n\n  pk() {\n    return this.symbol;\n  }\n  static urlRoot = 'http://test.com/price/';\n\n  /** Used as default options for every FetchShape */\n  static getRequestOptions(): RequestOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detailShape(), { symbol });\n  useSubscription(PriceResource.detailShape(), { symbol });\n  // ...\n}\n")),(0,s.kt)("h2",{id:"only-subscribe-while-element-is-visible"},"Only subscribe while element is visible"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from 'react';\nimport { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detailShape(), { symbol });\n  const ref = useRef();\n  const onScreen = useOnScreen(ref);\n  useSubscription(PriceResource.detailShape(), { symbol }, undefined, onScreen);\n\n  return (\n    <div ref={ref}>{price.value.toLocaleString('en', { currency: 'USD' })}</div>\n  );\n}\n")),(0,s.kt)("p",null,"Using the last argument ",(0,s.kt)("inlineCode",{parentName:"p"},"active")," we control whether the subscription is active or not\nbased on whether the element rendered is ",(0,s.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"visible on screen"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"useOnScreen()")," uses ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"IntersectionObserver"),", which is very performant."),(0,s.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,s.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"detailShape()"),(0,s.kt)("li",{parentName:"ul"},"listShape()")),(0,s.kt)("p",null,"Be sure to extend these ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/FetchShape"},"FetchShape"),"s with a pollFrequency to set\nthe polling-rate."))}u.isMDXComponent=!0}}]);