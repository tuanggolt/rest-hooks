"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[32519],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,s(s({ref:t},l),{},{components:a})):n.createElement(h,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},71893:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={title:"Immediate Mutation Updates",id:"immediate-updates",original_id:"immediate-updates"},s=void 0,o={unversionedId:"guides/immediate-updates",id:"version-4.5/guides/immediate-updates",title:"Immediate Mutation Updates",description:"When a user causes mutations like creating, updating, or deleting resources, it's important",source:"@site/versioned_docs/version-4.5/guides/immediate-updates.md",sourceDirName:"guides",slug:"/guides/immediate-updates",permalink:"/docs/4.5/guides/immediate-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/immediate-updates.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Immediate Mutation Updates",id:"immediate-updates",original_id:"immediate-updates"},sidebar:"version-4.5/docs",previous:{title:"Fetch then Render",permalink:"/docs/4.5/guides/fetch-then-render"},next:{title:"Optimistic Updates",permalink:"/docs/4.5/guides/optimistic-updates"}},d={},p=[{value:"Update",id:"update",level:2},{value:"Delete",id:"delete",level:2},{value:"Create",id:"create",level:2}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a user causes mutations like creating, updating, or deleting resources, it's important\nto have those changed be reflected in the application. A simple publish cache\nthat has no underlying knowledge of the data structures would require a refetch of any endpoints\nthat are changed. This would reduce performance and put extra burden on the backend."),(0,r.kt)("p",null,"However, like many other cases, a normalized cache - one with underlying knowledge of the relationships\nbetween resources - is capable of keeping all data consistent and fresh without\nany refetches."),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"Rest Hooks uses your schema definitions to understand how to normalize response data into\nan ",(0,r.kt)("inlineCode",{parentName:"p"},"entity table")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"result table"),". Of course, this means that there is only ever one copy\nof a given ",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),". Aside from providing consistency when using different response shapes,\nthis means that by providing an accurate schema definition, Rest Hooks can automatically keep\nall data uses consistent and fresh. The default update shapes ",(0,r.kt)("a",{parentName:"p",href:"../api/resource"},"Resource.updateShape()")," and\n",(0,r.kt)("a",{parentName:"p",href:"../api/resource"},"Resource.partialUpdate()")," both do this automatically. ",(0,r.kt)("a",{parentName:"p",href:"./rpc"},"Read more about defining other\nupdate fetch shapes")),(0,r.kt)("h2",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Rest Hooks automatically deletes entity entries when any ",(0,r.kt)("a",{parentName:"p",href:"../api/FetchShape"},"Fetch Shape"),"\nof type ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," is resolved. ",(0,r.kt)("a",{parentName:"p",href:"../api/resource#deleteshape-deleteshape"},"Resource.deleteShape()"),"\nprovides such a shape."),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("p",null,"Like updates, created entities are automatically added to the entities table. This means\nany components useResource() for just that item will be able to access it immediately and\nnot have to wait for an additional retrieval request. However, often new items are created\nwhen viewing an entire list of items, and the create should result in that list - any maybe others -\ndisplaying the newly created entry."),(0,r.kt)("p",null,"In the case list views are expected to include newly created items, a third argument to\nthe fetch function ",(0,r.kt)("a",{parentName:"p",href:"../api/useFetcher#updateparams-destshape-destparams-updatefunction"},"updateParams"),"\ncan be added."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../api/useFetcher#updateparams-destshape-destparams-updatefunction"},"updateParams")," for more information,\nbut it essentially specifies which lists to update."))}u.isMDXComponent=!0}}]);