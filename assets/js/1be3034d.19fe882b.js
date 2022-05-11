"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[2296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(83117),o=(r(67294),r(3905));const a={title:"Rest Hooks 4.2-4.5",authors:["ntucker"],tags:["releases","rest-hooks"]},s=void 0,i={permalink:"/blog/2020/02/18/Rest-Hooks-4.2-4.5",source:"@site/blog/2020-02-18-Rest-Hooks-4.2-4.5.md",title:"Rest Hooks 4.2-4.5",description:"A lot of exciting features have been developed recently, resulting in many feature releases.",date:"2020-02-18T00:00:00.000Z",formattedDate:"February 18, 2020",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"}],readingTime:.705,truncated:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Rest Hooks 4.2-4.5",authors:["ntucker"],tags:["releases","rest-hooks"]},prevItem:{title:"Experimental useController()",permalink:"/blog/2021/08/29/Experimental-useController"},nextItem:{title:"Rest Hooks 4.1 Released",permalink:"/blog/2020/01/06/Rest-Hooks-4.1-Released"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A lot of exciting features have been developed recently, resulting in many feature releases.\nWe've been hard a work integrating them into Coinbase's various products, so I skipped a few\nrelease announcements. The biggest focus has been performance features - highlighted by\nadding true ",(0,o.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/4.5/guides/optimistic-updates"},"optimistic updates"),"."))}p.isMDXComponent=!0}}]);