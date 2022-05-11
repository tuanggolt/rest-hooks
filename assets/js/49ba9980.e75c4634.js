"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[13119],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72360:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(86010);const o="tabItem_OmH5";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),r=t(67294),o=t(72389),l=t(67392),s=t(7094),i=t(12466),c=t(86010);const u="tabList_uSqn",m="tabItem_LplD";function p(e){var n,t;const{lazy:o,block:p,defaultValue:d,values:h,groupId:f,className:y}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,l.l)(v,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??(null==(t=b[0])?void 0:t.props.value);if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:w}=(0,s.U)(),[N,O]=(0,r.useState)(k),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=f){const e=E[f];null!=e&&e!==N&&v.some((n=>n.value===e))&&O(e)}const C=e=>{const n=e.currentTarget,t=D.indexOf(n),a=v[t].value;a!==N&&(T(n),O(a),null!=f&&w(f,a))},j=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;t=D[n]||D[0];break}case"ArrowLeft":{const n=D.indexOf(e.currentTarget)-1;t=D[n]||D[D.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,c.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},y)},v.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>D.push(e),onKeyDown:j,onFocus:C,onClick:C},o,{className:(0,c.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":N===n})}),t??n)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},70523:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(9877),r=t(72360),o=t(67294);function l(e){let{children:n}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(r.Z,{value:"ts"},n[0]),o.createElement(r.Z,{value:"js"},n[1]))}},62463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(83117),r=(t(67294),t(3905)),o=t(70523);const l={title:"Schema Quick Start",sidebar_label:"Schema"},s=void 0,i={unversionedId:"api/schema",id:"version-6.1/api/schema",title:"Schema Quick Start",description:"Consider a typical blog post. The API response for a single post might look something like this:",source:"@site/versioned_docs/version-6.1/api/schema.md",sourceDirName:"api",slug:"/api/schema",permalink:"/docs/6.1/api/schema",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/schema.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Schema Quick Start",sidebar_label:"Schema"},sidebar:"version-6.1/docs",previous:{title:"Index",permalink:"/docs/6.1/api/"},next:{title:"Entity",permalink:"/docs/6.1/api/Entity"}},c={},u=[],m={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Consider a typical blog post. The API response for a single post might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123",\n  "author": {\n    "id": "1",\n    "name": "Paul"\n  },\n  "title": "My awesome blog post",\n  "comments": [\n    {\n      "id": "324",\n      "createdAt": "2013-05-29T00:00:00-04:00",\n      "commenter": {\n        "id": "2",\n        "name": "Nicole"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"We have two nested entity types within our ",(0,r.kt)("inlineCode",{parentName:"p"},"article"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"comments"),". Using various ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),", we can normalize all three entity types down:"),(0,r.kt)(o.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { normalize, schema, Entity } from '@rest-hooks/normalizr';\n\n// Define a users schema\nclass User extends Entity {\n  readonly id: string = '';\n  readonly name: string = '';\n\n  pk() { return this.id; }\n}\n\n// Define your comments schema\nclass Comment extends Entity {\n  readonly id: string = '';\n  readonly createdAt: Date = new Date(0);\n  readonly commenter: User = User.fromJS({});\n\n  pk() { return this.id; }\n\n  static schema = {\n    commenter: User,\n    createdAt: Date,\n  }\n}\n\n// Define your article\nclass Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly author: User = User.fromJS({});\n  readonly comments: Comment[] = [];\n\n  pk() { return this.id; }\n\n  static schema = {\n    author: User,\n    comments: [Comment],\n  }\n}\n\nconst normalizedData = normalize(originalData, article);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { normalize, schema, Entity } from '@rest-hooks/normalizr';\n\n// Define a users schema\nclass User extends Entity {\n  pk() { return this.id; }\n}\n\n// Define your comments schema\nclass Comment extends Entity {\n  pk() { return this.id; }\n\n  static schema = {\n    commenter: User,\n    createdAt: Date,\n  }\n}\n\n// Define your article\nclass Article extends Entity {\n  pk() { return this.id; }\n\n  static schema = {\n    author: User,\n    comments: [Comment],\n  }\n}\n\nconst normalizedData = normalize(originalData, article);\n"))),(0,r.kt)("p",null,"Now, ",(0,r.kt)("inlineCode",{parentName:"p"},"normalizedData")," will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  result: "123",\n  entities: {\n    "articles": Article {\n      "123": {\n        id: "123",\n        author: "1",\n        title: "My awesome blog post",\n        comments: [ "324" ]\n      }\n    },\n    "users": {\n      "1": User { "id": "1", "name": "Paul" },\n      "2": User { "id": "2", "name": "Nicole" }\n    },\n    "comments": {\n      "324": Comment {\n        id: "324",\n        "createdAt": Date(`May 29, 2013`),\n        "commenter": "2"\n      }\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);