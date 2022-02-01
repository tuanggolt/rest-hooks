(self.webpackChunk=self.webpackChunk||[]).push([[31488],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(79443);const l=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var r=n(67294),a=n(24861),l=n(88300),s=n(71481),o=n(42910),i=n(99876),c=n(63312),u=n(33186),d=n(52803),p=n(44431),m=n.n(p),h=n(49909),f=n(53775);class g extends f.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class y extends g{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static merge(e,t){return e.updatedAt<t.updatedAt?{...e,...t}:e}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdater:v})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdater:E,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new h.Z(this),optimisticUpdater:b})}}y.urlRoot="/api/todos";const v=(e,t,n)=>({id:t.id,...e.getResponse(y.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),E=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),b=(e,t)=>({...t,updatedAt:e.fetchedAt});var k=n(87462),w=n(50776),x=n(86010),D=n(95999),O=n(52263),C=n(72389),T=n(83229),N=n(55423),Z=n(84195),I=n(58699),P=n(28808),R=n(96714),U=n(28224),S=n(80944),F=n(53810),M=n(91262);const j="playgroundContainer_1vxj",A="row_3g4V",_="hidden_2rz-",L="playgroundHeader_2X75",B="playgroundEditor_1tQZ",V="playgroundPreview_3d_E",H="playgroundResult_5IAE",z="debugToggle_2KFu",q="tabControls_vH2K",X="tabs_1lMe",$="tab_3qyO",K="selected_3AAM";var G=n(60522),J=n(83552),Q=n(85350);function W(e){let{value:t}=e;const{isDarkTheme:n}=(0,Q.Z)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(J.L,{shouldExpandNode:Y,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function Y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function ee(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:z,onClick:t},"Store"),"y"===n?r.createElement(re,null):null)}const te=(0,r.memo)(ee);function ne(){const e=(0,r.useContext)(G.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(W,{value:t})}const re=(0,r.memo)(ne);function ae(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:l,setTabGroupChoices:s}=(0,S.Z)(),[o,i]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,F.o5)();if(null!=t){const e=l[t];null!=e&&e!==o&&i(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),i((e=>"y"===e?"n":"y")),s(t,"y"===o?"n":"y")}),[c,t,o,s]),d=(0,r.useMemo)((()=>[new U.Z,new I.Z(P.Z)]),[]),p=!("n"===o||!a);return r.createElement(R.nq,{managers:d},r.createElement("div",{className:(0,x.Z)(V,{[_]:p})},r.createElement(M.Z,{fallback:r.createElement(se,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(se,null)},r.createElement(w.i5,null),r.createElement(w.IF,null))))),r.createElement(te,{selectedValue:o,toggle:u}))}const le=(0,r.memo)(ae);function se(){return r.createElement("div",null,"Loading...")}function oe(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,x.Z)(L,n)},t)}function ie(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",null,r.createElement(oe,null,r.createElement(D.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:H},r.createElement(le,{groupId:t,defaultOpen:n,row:a})))}function ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(Z.Z);return r.createElement("div",{className:X,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,x.Z)($,{[K]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function ue(e){let{children:t}=e;return r.createElement(oe,{className:q},r.createElement("div",null,t),r.createElement(ce,null))}function de(e){let{title:t}=e;const{values:n}=(0,r.useContext)(Z.Z),a=n.length>0,l=(0,C.Z)();return r.createElement("div",null,a?r.createElement(ue,null,t):r.createElement(oe,null,t),r.createElement(w.uz,{key:l,className:B}))}function pe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:s,hidden:o=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,O.Z)(),u=(0,T.Z)();i.scope;return r.createElement("div",{className:(0,x.Z)(j,{[A]:s,[_]:o})},r.createElement(w.nu,(0,k.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>N.transpileModule(e,{compilerOptions:{module:N.ModuleKind.ESNext,target:N.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},i),"top"===c?r.createElement(r.Fragment,null,r.createElement(ie,{groupId:a,defaultOpen:l,row:s}),r.createElement(de,null)):r.createElement(r.Fragment,null,r.createElement(de,null),r.createElement(ie,{groupId:a,defaultOpen:l,row:s}))))}de.defaultProps={title:r.createElement(D.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};class me extends c.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}me.schema={updatedAt:Date};const he=new l.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:me});const fe={...a,...i,...d,...u,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:m(),lastUpdated:he,TimedEntity:me,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=s.Z();return r.createElement(o.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends y{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ge=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l="n",row:s=!1}=e;return r.createElement(pe,{scope:fe,noInline:!0,groupId:n,defaultOpen:l,row:s,hidden:a},"string"==typeof t?t:t.props.children.props.children)},ye=(0,r.memo)(ge)},10119:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>i,toc:()=>c,default:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(70720);const s={title:"schema.Delete"},o=void 0,i={unversionedId:"api/Delete",id:"version-6.1/api/Delete",title:"schema.Delete",description:"schema.Delete - Invalidating Entities | Rest Hooks",source:"@site/versioned_docs/version-6.1/api/Delete.md",sourceDirName:"api",slug:"/api/Delete",permalink:"/docs/api/Delete",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Delete.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"schema.Delete"},sidebar:"version-6.1/docs",previous:{title:"schema.Values",permalink:"/docs/api/Values"},next:{title:"SimpleRecord",permalink:"/docs/api/SimpleRecord"}},c=[{value:"Usage",id:"usage",children:[{value:"Batch Deletes",id:"batch-deletes",children:[],level:3},{value:"Impact on useResource()",id:"impact-on-useresource",children:[],level:3}],level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Delete - Invalidating Entities | Rest Hooks")),(0,a.kt)("p",null,"Describes entities to be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETED"),". This is a special symbol."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entity")," which entity to delete. The input is used to compute the pk() for lookup.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: '123', name: 'Jim' },\n    { id: '456', name: 'Jane' },\n    { id: '555', name: 'Phone' },\n  ]);\nconst sampleDelete = ({ id }) => Promise.resolve({ id });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema: [User],\n});\nconst userDelete = new Endpoint(sampleDelete, {\n  schema: new schema.Delete(User),\n});\nfunction UsersPage() {\n  const users = useResource(userList, {});\n  const { fetch } = useController();\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>\n          {user.name}{' '}\n          <a\n            style={{ cursor: 'pointer' }}\n            onClick={() => fetch(userDelete, { id: user.id })}\n          >\n            \u274c\n          </a>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,a.kt)("h3",{id:"batch-deletes"},"Batch Deletes"),(0,a.kt)("p",null,"Here we add another endpoint for deleting many entities at a time. Here we\npass in a list of ids, and the response is an empty string."),(0,a.kt)("p",null,"Constructing an article response using the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," argument in fetch empowers\nthe normalized cache to know which entities to delete when the request is success,\nor if optimistic updates are used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, schema } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static deleteList<T extends typeof MyResource>(this: T) {\n    const init = this.getFetchInit({ method: 'DELETE' });\n    return new Endpoint(\n      (params: readonly string[]) =>\n        this.fetch(this.url(params).then(() => params.map(id => ({ id })))),\n      {\n        ...this.getEndpointExtra(),\n        schema: [new schemas.Delete(this)],\n      },\n    );\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyTable() {\n  const { selectedIds } = useFields(TableForm);\n  const list = useResource(MyResource.list(), {});\n  const { fetch } = useController();\n\n  return (\n    <div>\n      <header>\n        <span>My Table</span>\n        <button onClick={() => fetch(MyResource.deleteList(), selectedIds)}>\n          Delete\n        </button>\n      </header>\n      <TableBody data={list} form={TableForm} />\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"impact-on-useresource"},"Impact on useResource()"),(0,a.kt)("p",null,"When entities are deleted in a result currently being presented in React, useResource()\nwill consider them invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For optional Entities, they are simply removed"),(0,a.kt)("li",{parentName:"ul"},"For required Entities, this invalidates the entire response re-triggering suspense.")))}d.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);