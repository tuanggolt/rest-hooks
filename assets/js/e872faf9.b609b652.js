"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[81335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72360:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_OmH5";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),l=n(72389),i=n(67392),o=n(7094),s=n(12466),u=n(86010);const c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:v,groupId:f,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=v??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=b[0])?void 0:n.props.value);if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,o.U)(),[E,O]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==E&&k.some((t=>t.value===e))&&O(e)}const R=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==E&&(x(t),O(a),null!=f&&w(f,a))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]||T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},h)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:P,onFocus:R,onClick:R},l,{className:(0,u.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),n??t)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9877),r=n(72360),l=n(67294);function i(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(r.Z,{value:"simple"},t[0]),l.createElement(r.Z,{value:"generics"},t[1]))}},18406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),l=n(11048);const i={title:"useRetrieve()"},o=void 0,s={unversionedId:"api/useRetrieve",id:"version-6.2/api/useRetrieve",title:"useRetrieve()",description:"Use useFetch() instead",source:"@site/versioned_docs/version-6.2/api/useRetrieve.md",sourceDirName:"api",slug:"/api/useRetrieve",permalink:"/docs/6.2/api/useRetrieve",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useRetrieve.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"useRetrieve()"},sidebar:"docs",previous:{title:"useResource()",permalink:"/docs/6.2/api/useresource"},next:{title:"useDebounce()",permalink:"/docs/6.2/api/useDebounce"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Conditional",id:"conditional",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/useFetch"},"useFetch()")," instead"))),(0,r.kt)(l.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useRetrieve(\n  endpoint: ReadEndpoint,\n  params: object | null,\n): Promise<any> | undefined;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useRetrieve<\n  Params extends Readonly<object>,\n  S extends Schema\n>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>,\n  params: Params | null,\n): Promise<any> | undefined;\n"))),(0,r.kt)("p",null,"Great for retrieving resources optimistically before they are needed."),(0,r.kt)("p",null,"This can be useful for ensuring resources early in a render tree before they are needed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On first-render",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or parameters change"),(0,r.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,r.kt)("li",{parentName:"ul"},"or imperative ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/Controller#invalidate"},"invalidation")," triggered"))),(0,r.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,r.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,r.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returned promise will reject"))),(0,r.kt)("li",{parentName:"ul"},"On fetch returns a promise else undefined.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id }: { id: number }) {\n  useRetrieve(PostResource.detail(), { id });\n  // ...\n}\n")),(0,r.kt)("h3",{id:"conditional"},"Conditional"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id, doNotFetch }: { id: number, doNotFetch: boolean }) {\n  useRetrieve(PostResource.detail(), doNotFetch ? null : { id });\n  // ...\n}\n")),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"detail()"),(0,r.kt)("li",{parentName:"ul"},"list()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint"},"Endpoint")," as well."))}d.isMDXComponent=!0}}]);