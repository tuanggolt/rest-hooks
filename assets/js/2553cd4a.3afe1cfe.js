(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[83251],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>be});var r=n(67294),a=n(98416),i=n(88300),o=n(81593),l=n(63312),s=n(33186),d=n(52803),c=n(44431),u=n.n(c),p=n(49909),m=n(53775);class h extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class f extends h{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:v,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new p.Z(this),getOptimisticResponse:y})}}f.urlRoot="/api/todos";const g=(e,t,n)=>({id:t.id,...e.getResponse(f.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),v=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),y=(e,t)=>({...t,updatedAt:e.fetchedAt});var k=n(83117),b=n(61313),E=n(86010),w=n(95999),x=n(52263),T=n(72389),S=n(66412),N=n(55423),C=n(84195),I=n(58699),O=n(28808),R=n(16909),A=n(28224),U=n(7094),P=n(12466),F=n(91262);const D="playgroundContainer_sLUA",Z="row_YGZs",j="hidden_Hh8i",_="playgroundHeader_Zx4K",H="playgroundEditor_lYwu",L="playgroundPreview_rk9R",B="playgroundError_sRnA",M="playgroundResult_tefG",K="debugToggle_zlro",V="tabControls_trxh",G="tabs_m54V",$="tab_bTGw",z="selected_QXZk";var X=n(60522),q=n(90988),Y=n(92949);function Q(e){let{value:t}=e;const{isDarkTheme:n}=(0,Y.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(q.L,{shouldExpandNode:W,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function W(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const J="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return J&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:K,onClick:t},"Store"),"y"===n?r.createElement(ae,null):null)}const ne=(0,r.memo)(te);function re(){const e=(0,r.useContext)(X.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(Q,{value:t})}const ae=(0,r.memo)(re);function ie(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:i,setTabGroupChoices:o}=(0,U.U)(),[l,s]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:d}=(0,P.o5)();if(null!=t){const e=i[t];null!=e&&e!==l&&s(e)}const c=(0,r.useCallback)((e=>{d(e.currentTarget),s((e=>"y"===e?"n":"y")),o(t,"y"===l?"n":"y")}),[d,t,l,o]),u=(0,r.useMemo)((()=>[new A.Z,new I.Z(O.Z)]),[]),p=!("n"===l||!a);return r.createElement(R.nq,{managers:u},r.createElement("div",{className:(0,E.Z)(L,{[j]:p})},r.createElement(F.Z,{fallback:r.createElement(le,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(le,null)},r.createElement(b.i5,null),r.createElement(b.IF,{className:B}))))),r.createElement(ne,{selectedValue:l,toggle:c}))}const oe=(0,r.memo)(ie);function le(){return r.createElement("div",null,"Loading...")}function se(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,E.Z)(_,n)},t)}function de(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(se,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:M},r.createElement(oe,{groupId:t,defaultOpen:n,row:a})))}function ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(C.Z);return r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,E.Z)($,{[z]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function ue(e){let{children:t}=e;return r.createElement(se,{className:V},r.createElement("div",null,t),r.createElement(ce,null))}function pe(e){let{title:t}=e;const{values:n}=(0,r.useContext)(C.Z),a=n.length>0,i=(0,T.Z)();return r.createElement("div",null,a?r.createElement(ue,null,t):r.createElement(se,null,t),r.createElement(b.uz,{key:i,className:H}))}function me(e){let{children:t,transformCode:n,groupId:a,defaultOpen:i,row:o,hidden:l=!1,...s}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:d}}}}=(0,x.Z)(),c=(0,S.p)();s.scope;return r.createElement("div",{className:(0,E.Z)(D,{[Z]:o,[j]:l})},r.createElement(b.nu,(0,k.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>N.transpileModule(e,{compilerOptions:{module:N.ModuleKind.ESNext,target:N.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:c},s),"top"===d?r.createElement(r.Fragment,null,r.createElement(de,{groupId:a,defaultOpen:i,row:o}),r.createElement(pe,null)):r.createElement(r.Fragment,null,r.createElement(pe,null),r.createElement(de,{groupId:a,defaultOpen:i,row:o}))))}pe.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},me.defaultProps={row:!1};var he=n(71481),fe=n(42910);class ge extends l.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ge.schema={updatedAt:Date};const ve=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ge});const ye={...a,...o,...d,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u(),lastUpdated:ve,TimedEntity:ge,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:i}=(0,he.Z)();return r.createElement(fe.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:B},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{i(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends f{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ke=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:i="n",row:o=!1}=e;return r.createElement(me,{scope:ye,noInline:!0,groupId:n,defaultOpen:i,row:o,hidden:a},"string"==typeof t?t:t.props.children.props.children)},be=(0,r.memo)(ke)},77449:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905)),i=n(9790);const o={title:"Expiry Policy",sidebar_label:"Expiry Policy"},l=void 0,s={unversionedId:"getting-started/expiry-policy",id:"version-6.2/getting-started/expiry-policy",title:"Expiry Policy",description:"By default, Rest Hooks cache policy can be described as stale-while-revalidate.",source:"@site/versioned_docs/version-6.2/getting-started/expiry-policy.md",sourceDirName:"getting-started",slug:"/getting-started/expiry-policy",permalink:"/docs/6.2/getting-started/expiry-policy",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/expiry-policy.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Expiry Policy",sidebar_label:"Expiry Policy"},sidebar:"docs",previous:{title:"Entity",permalink:"/docs/6.2/getting-started/entity"},next:{title:"Validation",permalink:"/docs/6.2/getting-started/validation"}},d={},c=[{value:"Expiry status",id:"expiry-status",level:2},{value:"Fresh",id:"fresh",level:3},{value:"Stale",id:"stale",level:3},{value:"Invalid",id:"invalid",level:3},{value:"Expiry Time",id:"expiry-time",level:2},{value:"Endpoint.dataExpiryLength",id:"endpointdataexpirylength",level:3},{value:"Endpoint.invalidIfStale",id:"endpointinvalidifstale",level:3},{value:"Force refresh",id:"force-refresh",level:2},{value:"Invalidate (re-suspend)",id:"invalidate-re-suspend",level:2},{value:"A specific endpoint",id:"a-specific-endpoint",level:3},{value:"Any endpoint with an entity",id:"any-endpoint-with-an-entity",level:3},{value:"Error policy",id:"error-policy",level:2},{value:"Soft",id:"soft",level:3},{value:"Hard",id:"hard",level:3},{value:"Policy for Resources",id:"policy-for-resources",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, Rest Hooks cache policy can be described as ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/stale-while-revalidate/"},"stale-while-revalidate"),".\nThis means that when data is available it can avoid blocking the application by using the stale data. However, in the background\nit will still refresh the data if old enough."),(0,a.kt)("p",null,"To explain these concepts we'll be faking an endpoint that gives us the current time so it is easy to tell how stale it is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="lastUpdated.ts"',title:'"lastUpdated.ts"'},"class TimedEntity extends Entity {\n  pk() {\n    return this.id;\n  }\n  static schema = {\n    updatedAt: Date,\n  };\n}\nconst fetchLastUpdated = ({ id }) =>\n  fetch(`/api/currentTime/${id}`).then(res => res.json());\nconst lastUpdated = new Endpoint(mockLastUpdated, { schema: TimedEntity });\n")),(0,a.kt)("h2",{id:"expiry-status"},"Expiry status"),(0,a.kt)("h3",{id:"fresh"},"Fresh"),(0,a.kt)("p",null,"Data in this state is considered new enough that it doesn't need to fetch."),(0,a.kt)("h3",{id:"stale"},"Stale"),(0,a.kt)("p",null,"Data is still allowed to be shown, however Rest Hooks might attempt to revalidate by fetching again."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/useSuspense"},"useSuspense()")," considers fetching on mount as well as when its parameters change.\nIn these cases it will fetch if the data is considered stale."),(0,a.kt)("h3",{id:"invalid"},"Invalid"),(0,a.kt)("p",null,"Data should not be shown. Any components needing this data will trigger fetch and suspense. If\nno components care about this data no action will be taken."),(0,a.kt)("h2",{id:"expiry-time"},"Expiry Time"),(0,a.kt)("h3",{id:"endpointdataexpirylength"},"Endpoint.dataExpiryLength"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength"},"Endpoint.dataExpiryLength")," sets how long (in miliseconds) it takes for data\nto transition from 'fresh' to 'stale' status. Try setting it to a very low number like '50'\nto make it becomes stale almost instantly; or a very large number to stay around for a long time."),(0,a.kt)("p",null,"Toggling between 'first' and 'second' changes the parameters. If the data is still considered fresh\nyou will continue to see the old time without any refresh."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const lastUpdated = lastUpdated.extend({ dataExpiryLength: 10000 });\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useSuspense(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("h3",{id:"endpointinvalidifstale"},"Endpoint.invalidIfStale"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#invalidifstale"},"Endpoint.invalidIfStale")," eliminates the ",(0,a.kt)("inlineCode",{parentName:"p"},"stale")," status, making data\nthat expires immediately be considered 'invalid'."),(0,a.kt)("p",null,"This is demonstrated by the component suspending once its data goes stale. If the data is still\nwithin the expiry time it just continues to display it."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const lastUpdated = lastUpdated.extend({\n  invalidIfStale: true,\n  dataExpiryLength: 5000,\n});\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useSuspense(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("h2",{id:"force-refresh"},"Force refresh"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Controller#fetch"},"Controller.fetch")," can be used to trigger a fetch while still showing\nthe previous data. This can be done even with 'fresh' data."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(lastUpdated, { id: '1' })}>Refresh</button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"invalidate-re-suspend"},"Invalidate (re-suspend)"),(0,a.kt)("p",null,"Both endpoints and entities can be targetted to be invalidated."),(0,a.kt)("h3",{id:"a-specific-endpoint"},"A specific endpoint"),(0,a.kt)("p",null,"In this example we can see invalidating the endpoint shows the loading fallback since the data is not allowed to be displayed."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { invalidate } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => invalidate(lastUpdated, { id: '1' })}>\n        Invalidate\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h3",{id:"any-endpoint-with-an-entity"},"Any endpoint with an entity"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/Delete"},"Delete")," allows us to invalidate ",(0,a.kt)("em",{parentName:"p"},"any")," endpoint that includes that relies on that entity in their\nresponse. If the endpoint uses the entity in an Array, it will simply be removed from that Array."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockDelete = ({ id }) => Promise.resolve({ id });\nconst deleteLastUpdated = new Endpoint(mockDelete, {\n  schema: new schema.Delete(TimedEntity),\n});\n\nfunction ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(deleteLastUpdated, { id: '1' })}>\n        Delete\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"error-policy"},"Error policy"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#errorpolicy"},"Endpoint.errorPolicy")," controls cache behavior upon a fetch rejection.\nIt uses the rejection error to determine whether it should be treated as 'soft' or 'hard' error."),(0,a.kt)("h3",{id:"soft"},"Soft"),(0,a.kt)("p",null,"Soft errors will not invalidate a response if it is already available. However, if there is currently\nno data available, it will mark that endpoint as rejected, causing ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/useSuspense"},"useSuspense()")," to throw an\nerror. This can be caught with ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/NetworkErrorBoundary"},"NetworkErrorBoundary")),(0,a.kt)("h3",{id:"hard"},"Hard"),(0,a.kt)("p",null,"Hard errors always invalidate a response with the rejection - even when data has previously made available."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"let FAKE_ERROR = undefined;\nconst superFetch = lastUpdated;\nconst mockFetch = (arg, error) =>\n  FAKE_ERROR !== undefined ? Promise.reject(FAKE_ERROR) : superFetch(arg);\n\nconst lastUpdated = lastUpdated.extend({\n  fetch: mockFetch,\n  errorPolicy: error =>\n    error.status >= 500 ? ('hard' as const) : ('soft' as const),\n});\nfunction createError(status) {\n  const error = new Error('fake error');\n  error.status = status;\n  return error;\n}\n\nfunction ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch, invalidate } = useController();\n  React.useEffect(\n    () => () => {\n      FAKE_ERROR = undefined;\n    },\n    [updatedAt],\n  );\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <div>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Hard\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Hard\n        </button>\n      </div>\n    </div>\n  );\n}\n\nrender(\n  <ResetableErrorBoundary>\n    <ShowTime />\n  </ResetableErrorBoundary>,\n);\n"))),(0,a.kt)("h3",{id:"policy-for-resources"},"Policy for Resources"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"500"),"s indicate a failure of the server, we want to use stale data\nif it exists. On the other hand, something like a ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," indicates 'user error', which\nmeans the error indicates something about application flow - like if a record is deleted, resulting\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"400"),". Keeping the record around would be inaccurate."),(0,a.kt)("p",null,"Since this is the typical behavior for REST APIs, this is the default policy in ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  /** Get the request options for this SimpleResource */\n  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return {\n      errorPolicy: error =>\n        error.status >= 500 ? ('soft' as const) : undefined,\n    };\n  }\n")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);