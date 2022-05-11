"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[13313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72360:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o="tabItem_OmH5";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),o=n(72389),s=n(67392),i=n(7094),l=n(12466),u=n(86010);const c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:h,groupId:f,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=g[0])?void 0:n.props.value);if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,i.U)(),[T,O]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:A}=(0,l.o5)();if(null!=f){const e=w[f];null!=e&&e!==T&&v.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==T&&(A(t),O(r),null!=f&&x(f,r))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},b)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:R,onFocus:E,onClick:E},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},86472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(83117),a=(n(67294),n(3905)),o=n(9877),s=n(72360);const i={title:"Resource Authentication",sidebar_label:"Authentication"},l=void 0,u={unversionedId:"guides/auth",id:"version-6.0/guides/auth",title:"Resource Authentication",description:"All network requests are run through the static getFetchInit optionally",source:"@site/versioned_docs/version-6.0/guides/auth.md",sourceDirName:"guides",slug:"/guides/auth",permalink:"/docs/6.0/guides/auth",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/auth.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Resource Authentication",sidebar_label:"Authentication"},sidebar:"version-6.0/docs",previous:{title:"Pagination",permalink:"/docs/6.0/guides/pagination"},next:{title:"Transforming data on fetch",permalink:"/docs/6.0/guides/network-transform"}},c={},p=[{value:"Cookie Auth",id:"cookie-auth",level:2},{value:"Auth Headers from React Context",id:"auth-headers-from-react-context",level:2},{value:"Code organization",id:"code-organization",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All network requests are run through the ",(0,a.kt)("inlineCode",{parentName:"p"},"static getFetchInit")," optionally\ndefined in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource"),"."),(0,a.kt)("h2",{id:"cookie-auth"},"Cookie Auth"),(0,a.kt)("p",null,"Here's an example using simple cookie auth:"),(0,a.kt)(o.Z,{defaultValue:"fetch",values:[{label:"fetch",value:"fetch"},{label:"superagent",value:"superagent"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"fetch",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nabstract class AuthdResource extends Resource {\n  static getFetchInit = (init: RequestInit): RequestInit => ({\n    ...init,\n    credentials: 'same-origin',\n  });\n}\n"))),(0,a.kt)(s.Z,{value:"superagent",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport type { SuperAgentRequest } from 'superagent';\n\nabstract class AuthdResource extends Resource {\n  static fetchPlugin = (request: SuperAgentRequest) =>\n    request.withCredentials();\n}\n")),(0,a.kt)("p",null,"If you used the ",(0,a.kt)("a",{parentName:"p",href:"../guides/custom-networking#superagent"},"custom superagent fetch")))),(0,a.kt)("p",null,"You can also do more complex flows (like adding arbitrary headers) to\nthe request. Every ",(0,a.kt)("a",{parentName:"p",href:"api/resource#static-getfetchinitinit-requestinit-requestinit"},"getFetchInit()")," takes in the existing ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"init options")," of fetch, and returns new init options to be used."),(0,a.kt)("h2",{id:"auth-headers-from-react-context"},"Auth Headers from React Context"),(0,a.kt)("p",null,"Here we use a context variable to set headers. Note - this means any endpoint functions can only be\ncalled from a React Component. (However, this should be fine since the context will only exist in React anyway.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract class AuthdResource extends Resource {\n  static useFetchInit = (init: RequestInit) => {\n    const accessToken = useAuthContext();\n    return {\n      ...init,\n      headers: {\n        ...init.headers,\n        'Access-Token': accessToken,\n      },\n    };\n  };\n}\n")),(0,a.kt)("h2",{id:"code-organization"},"Code organization"),(0,a.kt)("p",null,"If much of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar auth mechanism, you might\ntry extending from a base class that defines such common customizations."))}m.isMDXComponent=!0}}]);