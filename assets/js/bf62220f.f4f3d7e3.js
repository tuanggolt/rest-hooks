(self.webpackChunk=self.webpackChunk||[]).push([[77178],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},79443:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)(void 0)},80944:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(67294),o=r(79443);const s=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},84195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,r)=>{"use strict";r.d(t,{Z:()=>he});var n=r(67294),o=r(24861),s=r(88300),a=r(71481),i=r(42910),c=r(99876),l=r(63312),u=r(52803),d=r(44431),p=r.n(d),m=r(53775);class f extends m.Z{constructor(...e){super(...e),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,r)=>({...await e(t,r),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,r)=>({...await e(t,r),id:r.id})})}}class h extends f{constructor(...e){super(...e),this.userId=0,this.title="",this.completed=!1}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdate:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdate:y,update:t=>({[e]:(e=[])=>[...e,t]})})}static delete(){return super.delete().extend({optimisticUpdate:b})}}h.urlRoot="https://jsonplaceholder.typicode.com/todos";const g=(e,t)=>({id:e.id,...t}),y=(e,t)=>t,b=e=>e;var v=r(87462),E=r(50776),k=r(86010),w=r(95999),R=r(52263),x=r(72389),O=r(83229),N=r(55423),C=r(84195),P=r(58699),U=r(28808),Z=r(96714),T=r(28224),S=r(80944),j=r(89521),I=r(91262);const _="playgroundContainer_1vxj",A="row_3g4V",D="hidden_2rz-",M="playgroundHeader_2X75",F="playgroundEditor_1tQZ",V="playgroundPreview_3d_E",B="playgroundResult_5IAE",L="debugToggle_2KFu",z="tabControls_vH2K",H="tabs_1lMe",X="tab_3qyO",$="selected_3AAM";var J=r(60522),K=r(80126),q=r(85350);function G({value:e}){const{isDarkTheme:t}=(0,q.Z)(),r=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return n.createElement(K.ZP,{shouldExpandNode:Q,data:e,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem","background-color":t?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:({style:e},t)=>({style:{...e,"font-family":"arial"}}),arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:({style:e},t)=>({style:{...e,color:r[t]}}),base0B:"rgb(191, 199, 213)"}})}function Q(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}function W({toggle:e,selectedValue:t}){return n.createElement(n.Fragment,null,n.createElement("div",{className:L,onClick:e},"Store"),"y"===t?n.createElement(te,null):null)}const Y=(0,n.memo)(W);function ee(){const e=(0,n.useContext)(J.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return n.createElement(G,{value:t})}const te=(0,n.memo)(ee);function re({groupId:e,defaultOpen:t,row:r}){const{tabGroupChoices:o,setTabGroupChoices:s}=(0,S.Z)(),[a,i]=(0,n.useState)(t),{blockElementScrollPositionUntilNextRender:c}=(0,j.o5)();if(null!=e){const t=o[e];null!=t&&t!==a&&i(t)}const l=(0,n.useCallback)((t=>{c(t.currentTarget),i((e=>"y"===e?"n":"y")),s(e,"y"===a?"n":"y")}),[c,e,a,s]),u=(0,n.useMemo)((()=>[new T.Z,new P.Z(U.Z)]),[]),d=!("n"===a||!r);return n.createElement(Z.nq,{managers:u},n.createElement("div",{className:(0,k.Z)(V,{[D]:d})},n.createElement(I.Z,{fallback:n.createElement(oe,null)},(()=>n.createElement(n.Suspense,{fallback:n.createElement(oe,null)},n.createElement(E.i5,null),n.createElement(E.IF,null))))),n.createElement(Y,{selectedValue:a,toggle:l}))}const ne=(0,n.memo)(re);function oe(){return n.createElement("div",null,"Loading...")}function se({children:e,className:t}){return n.createElement("div",{className:(0,k.Z)(M,t)},e)}function ae({groupId:e,defaultOpen:t,row:r}){return n.createElement("div",null,n.createElement(se,null,n.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),n.createElement("div",{className:B},n.createElement(ne,{groupId:e,defaultOpen:t,row:r})))}function ie(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(C.Z);return n.createElement("div",{className:H,role:"tablist","aria-orientation":"horizontal"},r.map((({value:r,label:o})=>n.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,k.Z)(X,{[$]:e===r}),onFocus:t,onClick:t,value:r},o))))}function ce({children:e}){return n.createElement(se,{className:z},n.createElement("div",null,e),n.createElement(ie,null))}function le({title:e}){const{values:t}=(0,n.useContext)(C.Z),r=t.length>0,o=(0,x.Z)();return n.createElement("div",null,r?n.createElement(ce,null,e):n.createElement(se,null,e),n.createElement(E.uz,{key:o,className:F}))}function ue({children:e,transformCode:t,groupId:r,defaultOpen:o,row:s,hidden:a=!1,...i}){const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,R.Z)(),l=(0,O.Z)();i.scope;return n.createElement("div",{className:(0,k.Z)(_,{[A]:s,[D]:a})},n.createElement(E.nu,(0,v.Z)({code:e.replace(/\n$/,""),transformCode:t||(e=>(e=>N.transpileModule(e,{compilerOptions:{module:N.ModuleKind.ESNext,target:N.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:l},i),"top"===c?n.createElement(n.Fragment,null,n.createElement(ae,{groupId:r,defaultOpen:o,row:s}),n.createElement(le,null)):n.createElement(n.Fragment,null,n.createElement(le,null),n.createElement(ae,{groupId:r,defaultOpen:o,row:s}))))}le.defaultProps={title:n.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};class de extends l.Z{constructor(...e){super(...e),this.id=""}pk(){return this.id}}de.schema={updatedAt:Date};const pe=new s.Z((({id:e})=>fetch(`/api/currentTime/${e}`).then((e=>e.json()))),{schema:de});const me={...o,...c,...u,mockFetch:(e,t,r=150)=>{const n=(...t)=>new Promise((n=>setTimeout((()=>n(e(...t))),r)));return t&&Object.defineProperty(n,"name",{value:t,writable:!1}),n},BigNumber:p(),lastUpdated:pe,TimedEntity:de,CurrentTime:function(){const[e,t]=(0,n.useState)((()=>new Date));return(0,n.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),n.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function({children:e}){const[t,r]=n.useState(0),{resetEntireStore:o}=a.Z();return n.createElement(i.Z,{key:t,fallbackComponent:({error:e})=>n.createElement(n.Fragment,null,n.createElement("div",null,e.message," ",n.createElement("i",null,e.status)),n.createElement("button",{onClick:()=>{o(),r((e=>e+1))}},"Clear Error"))},e)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({fetch:async(...t)=>(await e(...t)).slice(0,5)})}}},fe=({children:e,groupId:t,hidden:r=!1,defaultOpen:o="n",row:s=!1})=>n.createElement(ue,{scope:me,noInline:!0,groupId:t,defaultOpen:o,row:s,hidden:r},"string"==typeof e?e:e.props.children.props.children),he=(0,n.memo)(fe)},24815:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>c,toc:()=>l,default:()=>d});var n=r(87462),o=(r(67294),r(3905)),s=r(70720);const a={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},i=void 0,c={unversionedId:"guides/nested-response",id:"version-6.1/guides/nested-response",isDocsHomePage:!1,title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/versioned_docs/version-6.1/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/docs/guides/nested-response",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/nested-response.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},sidebar:"version-6.1/docs",previous:{title:"Multi-column primary key",permalink:"/docs/guides/multi-pk"},next:{title:"Capturing Mutation Side-Effects",permalink:"/docs/guides/rpc"}},l=[{value:"static schema",id:"static-schema",children:[],level:2},{value:"Circular dependencies",id:"circular-dependencies",children:[],level:2}],u={toc:l};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/resource"},"Resource")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class UserResource extends Resource {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/user/';\n}\nclass PostResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/article/';\n\n  // this override is purely to fake a response\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      fetch({ id }) {\n        return Promise.resolve({\n          id,\n          author: { id: '123', name: 'Jim' },\n          content: 'Happy day',\n          contributors: [{ id: '100', name: 'Eliza' }],\n        });\n      },\n      schema: this,\n    });\n  }\n}\n\nfunction PostPage() {\n  const post = useResource(PostResource.detail(), { id: '5' });\n  return (\n    <div>\n      <p>{post.content} - <cite>{post.author.name}</cite></p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/resource"},"Resources")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ArticleResource.ts"',title:'"resources/ArticleResource.ts"'},"import { Resource, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n}\n\n// we set the schema here since we can correctly reference ArticleResource\nUserResource.schema = {\n  posts: [ArticleResource],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/UserResource.ts"',title:'"resources/UserResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport type { ArticleResource } from 'resources';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: ArticleResource[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}d.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);