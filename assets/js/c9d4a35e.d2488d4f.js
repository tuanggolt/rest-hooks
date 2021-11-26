"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(72389),s=n(80944),i=n(89521),l=n(86010);const c="tabItem_1uMI";function u(e){var t,n;const{lazy:a,block:o,defaultValue:u,values:d,groupId:p,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??h.map((({props:{value:e,label:t}})=>({value:e,label:t}))),f=(0,i.lx)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,s.Z)(),[y,w]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=p){const e=v[p];null!=e&&e!==y&&g.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==y&&(x(t),w(a),null!=p&&b(p,a))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},m)},g.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":y===e}),key:e,ref:e=>N.push(e),onKeyDown:A,onFocus:T,onClick:T},t??e)))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},80944:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(79443);const o=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},12713:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(9877),s=n(58215);const i={title:"Resource Authentication",sidebar_label:"Authentication"},l=void 0,c={unversionedId:"guides/auth",id:"version-6.1/guides/auth",isDocsHomePage:!1,title:"Resource Authentication",description:"All network requests are run through the static getFetchInit optionally",source:"@site/versioned_docs/version-6.1/guides/auth.md",sourceDirName:"guides",slug:"/guides/auth",permalink:"/docs/guides/auth",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/auth.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1637771422,formattedLastUpdatedAt:"11/24/2021",frontMatter:{title:"Resource Authentication",sidebar_label:"Authentication"},sidebar:"version-6.1/docs",previous:{title:"Pagination",permalink:"/docs/guides/pagination"},next:{title:"Transforming data on fetch",permalink:"/docs/guides/network-transform"}},u=[{value:"Cookie Auth",id:"cookie-auth",children:[],level:2},{value:"Access Tokens",id:"access-tokens",children:[],level:2},{value:"Auth Headers from React Context",id:"auth-headers-from-react-context",children:[],level:2},{value:"Code organization",id:"code-organization",children:[],level:2}],d={toc:u};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All network requests are run through the ",(0,r.kt)("inlineCode",{parentName:"p"},"static getFetchInit")," optionally\ndefined in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),"."),(0,r.kt)("h2",{id:"cookie-auth"},"Cookie Auth"),(0,r.kt)("p",null,"Here's an example using simple cookie auth:"),(0,r.kt)(o.Z,{defaultValue:"fetch",values:[{label:"fetch",value:"fetch"},{label:"superagent",value:"superagent"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"fetch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nabstract class AuthdResource extends Resource {\n  static getFetchInit = (init: RequestInit): RequestInit => ({\n    ...init,\n    credentials: 'same-origin',\n  });\n}\n"))),(0,r.kt)(s.Z,{value:"superagent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport type { SuperAgentRequest } from 'superagent';\n\nabstract class AuthdResource extends Resource {\n  static fetchPlugin = (request: SuperAgentRequest) =>\n    request.withCredentials();\n}\n")),(0,r.kt)("p",null,"If you used the ",(0,r.kt)("a",{parentName:"p",href:"../guides/custom-networking#superagent"},"custom superagent fetch")))),(0,r.kt)("p",null,"You can also do more complex flows (like adding arbitrary headers) to\nthe request. Every ",(0,r.kt)("a",{parentName:"p",href:"api/resource#getFetchInit"},"getFetchInit()")," takes in the existing ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"init options")," of fetch, and returns new init options to be used."),(0,r.kt)("h2",{id:"access-tokens"},"Access Tokens"),(0,r.kt)(o.Z,{defaultValue:"static",values:[{label:"static member",value:"static"},{label:"function singleton",value:"function"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"static",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="resources/AuthdResource.ts"',title:'"resources/AuthdResource.ts"'},"import { getAuthToken } from 'authorization-singleton';\nimport { Resource } from '@rest-hooks/rest';\n\nabstract class AuthdResource extends Resource {\n  // highlight-next-line\n  declare static accessToken?: string;\n  static getFetchInit = (init: RequestInit): RequestInit => ({\n    ...init,\n    headers: {\n      ...init.headers,\n      // highlight-next-line\n      'Access-Token': this.accessToken,\n    },\n  });\n}\n")),(0,r.kt)("p",null,"Upon login we set the token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Auth.tsx"',title:'"Auth.tsx"'},"import AuthdResource from 'resources/AuthdResource';\n\nfunction Auth() {\n  const handleLogin = useCallback(\n    async e => {\n      const { accessToken } = await login(new FormData(e.target));\n      // success!\n      // highlight-next-line\n      AuthdResource.accessToken = accessToken;\n    },\n    [login],\n  );\n\n  return <AuthForm onSubmit={handleLogin} />;\n}\n"))),(0,r.kt)(s.Z,{value:"function",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getAuthToken } from 'authorization-singleton';\nimport { Resource } from '@rest-hooks/rest';\n\nabstract class AuthdResource extends Resource {\n  static getFetchInit = (init: RequestInit): RequestInit => ({\n    ...init,\n    headers: {\n      ...init.headers,\n      // highlight-next-line\n      'Access-Token': getAuthToken(),\n    },\n  });\n}\n")),(0,r.kt)("p",null,"Upon login we set the token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Auth.tsx"',title:'"Auth.tsx"'},"import { setAuthToken } from 'authorization-singleton';\nimport AuthdResource from 'resources/AuthdResource';\n\nfunction Auth() {\n  const handleLogin = useCallback(\n    async e => {\n      const { accessToken } = await login(new FormData(e.target));\n      // success!\n      // highlight-next-line\n      setAuthToken(accessToken);\n    },\n    [login],\n  );\n\n  return <AuthForm onSubmit={handleLogin} />;\n}\n")))),(0,r.kt)("h2",{id:"auth-headers-from-react-context"},"Auth Headers from React Context"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using React Context for state that is not displayed (like auth tokens) is not recommended."))),(0,r.kt)("p",null,"Here we use a context variable to set headers. Note - this means any endpoint functions can only be\ncalled from a React Component. (However, this should be fine since the context will only exist in React anyway.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract class AuthdResource extends Resource {\n  static useFetchInit = (init: RequestInit) => {\n    const accessToken = useAuthContext();\n    return {\n      ...init,\n      headers: {\n        ...init.headers,\n        'Access-Token': accessToken,\n      },\n    };\n  };\n}\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using this means all endpoint calls must only occur during a function render."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n  // PostResource.create() calls useFetchInit()\n  //highlight-next-line\n  const createPost = PostResource.create();\n\n  return (\n    <form\n      onSubmit={e => fetch(createPost, {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,r.kt)("p",{parentName:"div"},"It may be helpful to prefix with 'use' so the react hooks linter detects these cases."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class PostResource extends Resource {\n  static useCreate<T extends typeof Resource>(this: T) {\n    return this.create();\n  }\n}\n")))),(0,r.kt)("h2",{id:"code-organization"},"Code organization"),(0,r.kt)("p",null,"If much of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar auth mechanism, you might\ntry extending from a base class that defines such common customizations."))}p.isMDXComponent=!0}}]);