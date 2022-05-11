(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[57951],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72360:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_OmH5";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},9877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),l=n(72389),o=n(67392),i=n(7094),s=n(12466),c=n(86010);const u="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:f,groupId:h,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=f??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=h){const e=E[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==N&&(O(t),T(r),null!=h&&w(h,r))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]||x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,c.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},g)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,c.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var r=n(67294),a=n(98416),l=n(88300),o=n(81593),i=n(63312),s=n(33186),c=n(52803),u=n(44431),d=n.n(u),p=n(49909),m=n(53775);class f extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class h extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:v,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new p.Z(this),getOptimisticResponse:b})}}h.urlRoot="/api/todos";const g=(e,t,n)=>({id:t.id,...e.getResponse(h.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),v=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),b=(e,t)=>({...t,updatedAt:e.fetchedAt});var y=n(83117),k=n(61313),E=n(86010),w=n(95999),N=n(52263),T=n(72389),x=n(66412),O=n(55423),C=n(84195),I=n(58699),Z=n(28808),U=n(16909),P=n(28224),S=n(7094),D=n(12466),j=n(91262);const A="playgroundContainer_sLUA",R="row_YGZs",_="hidden_Hh8i",F="playgroundHeader_Zx4K",L="playgroundEditor_lYwu",M="playgroundPreview_rk9R",V="playgroundError_sRnA",$="playgroundResult_tefG",z="debugToggle_zlro",B="tabControls_trxh",G="tabs_m54V",q="tab_bTGw",H="selected_QXZk";var X=n(60522),K=n(90988),W=n(92949);function Y(e){let{value:t}=e;const{isDarkTheme:n}=(0,W.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(K.L,{shouldExpandNode:J,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function J(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Q="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return Q&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:z,onClick:t},"Store"),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(X.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(Y,{value:t})}const ae=(0,r.memo)(re);function le(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:l,setTabGroupChoices:o}=(0,S.U)(),[i,s]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,D.o5)();if(null!=t){const e=l[t];null!=e&&e!==i&&s(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),s((e=>"y"===e?"n":"y")),o(t,"y"===i?"n":"y")}),[c,t,i,o]),d=(0,r.useMemo)((()=>[new P.Z,new I.Z(Z.Z)]),[]),p=!("n"===i||!a);return r.createElement(U.nq,{managers:d},r.createElement("div",{className:(0,E.Z)(M,{[_]:p})},r.createElement(j.Z,{fallback:r.createElement(ie,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ie,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:V}))))),r.createElement(ne,{selectedValue:i,toggle:u}))}const oe=(0,r.memo)(le);function ie(){return r.createElement("div",null,"Loading...")}function se(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,E.Z)(F,n)},t)}function ce(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(se,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:$},r.createElement(oe,{groupId:t,defaultOpen:n,row:a})))}function ue(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(C.Z);return r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,E.Z)(q,{[H]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function de(e){let{children:t}=e;return r.createElement(se,{className:B},r.createElement("div",null,t),r.createElement(ue,null))}function pe(e){let{title:t}=e;const{values:n}=(0,r.useContext)(C.Z),a=n.length>0,l=(0,T.Z)();return r.createElement("div",null,a?r.createElement(de,null,t):r.createElement(se,null,t),r.createElement(k.uz,{key:l,className:L}))}function me(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:o,hidden:i=!1,...s}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,N.Z)(),u=(0,x.p)();s.scope;return r.createElement("div",{className:(0,E.Z)(A,{[R]:o,[_]:i})},r.createElement(k.nu,(0,y.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>O.transpileModule(e,{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},s),"top"===c?r.createElement(r.Fragment,null,r.createElement(ce,{groupId:a,defaultOpen:l,row:o}),r.createElement(pe,null)):r.createElement(r.Fragment,null,r.createElement(pe,null),r.createElement(ce,{groupId:a,defaultOpen:l,row:o}))))}pe.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},me.defaultProps={row:!1};var fe=n(71481),he=n(42910);class ge extends i.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ge.schema={updatedAt:Date};const ve=new l.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ge});const be={...a,...o,...c,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d(),lastUpdated:ve,TimedEntity:ge,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,fe.Z)();return r.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:V},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ye=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l="n",row:o=!1}=e;return r.createElement(me,{scope:be,noInline:!0,groupId:n,defaultOpen:l,row:o,hidden:a},"string"==typeof t?t:t.props.children.props.children)},ke=(0,r.memo)(ye)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9877),a=n(72360),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},88046:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(83117),a=(n(67294),n(3905)),l=(n(70523),n(9790));const o={title:"schema.Union"},i=void 0,s={unversionedId:"api/Union",id:"version-6.1/api/Union",title:"schema.Union",description:"schema.Union - Representing a Union of possible types | Rest Hooks",source:"@site/versioned_docs/version-6.1/api/Union.md",sourceDirName:"api",slug:"/api/Union",permalink:"/docs/6.1/api/Union",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Union.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"schema.Union"},sidebar:"version-6.1/docs",previous:{title:"schema.Array",permalink:"/docs/6.1/api/Array"},next:{title:"schema.Values",permalink:"/docs/6.1/api/Values"}},c={},u=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Union - Representing a Union of possible types | Rest Hooks")),(0,a.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\n\nconst feed = new Endpoint(sampleData, {\n  schema: [\n    new schema.Union(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ],\n});\n\nfunction FeedList() {\n  const feedItems = useResource(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);