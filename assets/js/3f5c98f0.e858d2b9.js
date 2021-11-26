"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(72389),l=n(80944),s=n(89521),i=n(86010);const c="tabItem_1uMI";function u(e){var t,n;const{lazy:a,block:o,defaultValue:u,values:d,groupId:p,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((({props:{value:e,label:t}})=>({value:e,label:t}))),b=(0,s.lx)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:g}=(0,l.Z)(),[k,O]=(0,r.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=p){const e=y[p];null!=e&&e!==k&&f.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),a=f[n].value;a!==k&&(w(t),O(a),null!=p&&g(p,a))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]||j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]||j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},m)},f.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":k===e}),key:e,ref:e=>j.push(e),onKeyDown:N,onFocus:E,onClick:E},t??e)))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function d(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},80944:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(79443);const o=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},70523:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9877),r=n(58215),o=n(67294);function l({children:e}){return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(r.Z,{value:"ts"},e[0]),o.createElement(r.Z,{value:"js"},e[1]))}},64778:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(70523);const l={title:"Object"},s=void 0,i={unversionedId:"api/Object",id:"version-5.0/api/Object",isDocsHomePage:!1,title:"Object",description:"Define a plain object mapping that has values needing to be normalized into Entities. Note { ... }",source:"@site/versioned_docs/version-5.0/api/Object.md",sourceDirName:"api",slug:"/api/Object",permalink:"/docs/5.0/api/Object",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Object.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Object"},sidebar:"version-5.0/docs",previous:{title:"SimpleRecord",permalink:"/docs/5.0/api/SimpleRecord"},next:{title:"Array",permalink:"/docs/5.0/api/Array"}},c=[{value:"Instance Methods",id:"instance-methods",children:[],level:4},{value:"Usage",id:"usage",children:[],level:4},{value:"Output",id:"output",children:[],level:4}],u={toc:c};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Define a plain object mapping that has values needing to be normalized into Entities. ",(0,r.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,r.kt)("inlineCode",{parentName:"em"},"{ ... }"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A definition of the nested entities found within this object. Defaults to empty object.\nYou ",(0,r.kt)("em",{parentName:"li"},"do not")," need to define any keys in your object other than those that hold other entities. All other values will be copied to the normalized output.")),(0,r.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Example data response\nconst data = { users: [{ id: '123', name: 'Beth' }] };\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst responseSchema = new schema.Object({ users: new schema.Array(User) });\n// or shorthand\nconst responseSchema = { users: new schema.Array(User) };\n\nconst normalizedData = normalize(data, responseSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Example data response\nconst data = { users: [{ id: '123', name: 'Beth' }] };\n\nclass User extends Entity {\n  pk() {\n    return this.id;\n  }\n}\nconst responseSchema = new schema.Object({ users: new schema.Array(User) });\n// or shorthand\nconst responseSchema = { users: [User] };\n\nconst normalizedData = normalize(data, responseSchema);\n"))),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    User: { '123': { id: '123', name: 'Beth' } }\n  },\n  result: { User: [ '123' ] }\n}\n")))}d.isMDXComponent=!0}}]);