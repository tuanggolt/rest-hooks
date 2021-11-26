"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),o=n(72389),l=n(80944),s=n(89521),i=n(86010);const c="tabItem_1uMI";function u(e){var t,n;const{lazy:r,block:o,defaultValue:u,values:p,groupId:d,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((({props:{value:e,label:t}})=>({value:e,label:t}))),g=(0,s.lx)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,l.Z)(),[k,w]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=d){const e=b[d];null!=e&&e!==k&&f.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==k&&(T(t),w(r),null!=d&&y(d,r))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]||O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},m)},f.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":k===e}),key:e,ref:e=>O.push(e),onKeyDown:x,onFocus:E,onClick:E},t??e)))),r?(0,a.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},80944:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(79443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},970:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>s,toc:()=>i,default:()=>u});var r=n(87462),a=(n(67294),n(3905));n(9877),n(58215);const o={title:"GraphQL Authentication"},l=void 0,s={unversionedId:"graphql/auth",id:"version-5.0/graphql/auth",isDocsHomePage:!1,title:"GraphQL Authentication",description:"Cookie Auth",source:"@site/versioned_docs/version-5.0/graphql/auth.md",sourceDirName:"graphql",slug:"/graphql/auth",permalink:"/docs/5.0/graphql/auth",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/auth.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631077272,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"GraphQL Authentication"},sidebar:"version-5.0/docs",previous:{title:"Usage",permalink:"/docs/5.0/graphql/usage"},next:{title:"Handling loading state",permalink:"/docs/5.0/concepts/loading-state"}},i=[{value:"Cookie Auth",id:"cookie-auth",children:[],level:2},{value:"Access Tokens",id:"access-tokens",children:[],level:2}],c={toc:i};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cookie-auth"},"Cookie Auth"),(0,a.kt)("p",null,"Here's an example using simple cookie auth:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me', {\n  getFetchInit(init: RequestInit): RequestInit {\n    return {\n      ...init,\n      credentials: 'same-origin',\n    };\n  },\n});\nexport default gql;\n")),(0,a.kt)("h2",{id:"access-tokens"},"Access Tokens"),(0,a.kt)("p",null,"Here we'll use a member variable to track the access token and send it\nin a header."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me', {\n  getHeaders(headers: HeadersInit): HeadersInit {\n    return {\n      ...headers,\n      'Access-Token': this.accessToken,\n    };\n  },\n});\nexport default gql;\n")),(0,a.kt)("p",null,"Then be sure to set the access token upon login:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import gql from 'schema/endpoint';\n\nfunction Auth() {\n  const handleLogin = useCallback(\n    async e => {\n      const { accessToken } = await login(new FormData(e.target));\n      // success!\n      // highlight-next-line\n      gql.accessToken = accessToken;\n    },\n    [login],\n  );\n\n  return <AuthForm onSubmit={handleLogin} />;\n}\n")))}u.isMDXComponent=!0}}]);