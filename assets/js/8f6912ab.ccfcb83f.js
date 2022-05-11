"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[75077],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(83117),a=(t(67294),t(3905));const i={title:"Union"},o=void 0,l={unversionedId:"api/Union",id:"version-4.3/api/Union",title:"Union",description:"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by schema.Array or schema.Values but for non-collection fields.",source:"@site/versioned_docs/version-4.3/api/Union.md",sourceDirName:"api",slug:"/api/Union",permalink:"/docs/4.3/api/Union",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Union.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Union"}},s={},p=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:4},{value:"Output",id:"output",level:4}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = { owner: { id: 1, type: 'user', name: 'Anne' } };\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  readonly name: string = '';\n  pk() { return `${this.id}`; }\n}\nclass Group extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst unionSchema = new schema.Union(\n  {\n    user: User,\n    group: Group\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, { owner: unionSchema });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const data = { owner: { id: 1, type: 'user', name: 'Anne' } };\n\nclass User extends Entity {\n  pk() { return `${this.id}`; }\n}\nclass Group extends Entity {\n  pk() { return `${this.id}`; }\n}\nconst unionSchema = new schema.Union(\n  {\n    user: User,\n    group: Group\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, { owner: unionSchema });\n")),(0,a.kt)("h4",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    User: { '1': { id: 1, type: 'user', name: 'Anne' } }\n  },\n  result: { owner: { id: 1, schema: 'User' } }\n}\n")))}c.isMDXComponent=!0}}]);