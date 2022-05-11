(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[62311],{72360:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const s="tabItem_OmH5";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},9877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(83117),r=n(67294),s=n(72389),l=n(67392),i=n(7094),o=n(12466),u=n(86010);const c="tabList_uSqn",d="tabItem_LplD";function m(e){var t,n;const{lazy:s,block:m,defaultValue:p,values:g,groupId:h,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=g??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:w}=(0,i.U)(),[N,x]=(0,r.useState)(k),Z=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=h){const e=E[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&x(e)}const U=e=>{const t=e.currentTarget,n=Z.indexOf(t),a=y[n].value;a!==N&&(T(t),x(a),null!=h&&w(h,a))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=Z.indexOf(e.currentTarget)+1;n=Z[t]||Z[0];break}case"ArrowLeft":{const t=Z.indexOf(e.currentTarget)-1;n=Z[t]||Z[Z.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},f)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>Z.push(e),onKeyDown:C,onFocus:U,onClick:U},s,{className:(0,u.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),s?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var a=n(67294),r=n(98416),s=n(88300),l=n(81593),i=n(63312),o=n(33186),u=n(52803),c=n(44431),d=n.n(c),m=n(49909),p=n(53775);class g extends p.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class h extends g{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,a){return n.updatedAt<=a.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:f})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:v,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new m.Z(this),getOptimisticResponse:y})}}h.urlRoot="/api/todos";const f=(e,t,n)=>({id:t.id,...e.getResponse(h.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),v=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),y=(e,t)=>({...t,updatedAt:e.fetchedAt});var b=n(83117),k=n(61313),E=n(86010),w=n(95999),N=n(52263),x=n(72389),Z=n(66412),T=n(55423),U=n(84195),C=n(58699),I=n(28808),q=n(16909),S=n(28224),L=n(7094),R=n(12466),D=n(91262);const G="playgroundContainer_sLUA",P="row_YGZs",F="hidden_Hh8i",A="playgroundHeader_Zx4K",_="playgroundEditor_lYwu",Q="playgroundPreview_rk9R",O="playgroundError_sRnA",$="playgroundResult_tefG",M="debugToggle_zlro",V="tabControls_trxh",z="tabs_m54V",j="tab_bTGw",B="selected_QXZk";var H=n(60522),W=n(90988),K=n(92949);function X(e){let{value:t}=e;const{isDarkTheme:n}=(0,K.I)(),r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return a.createElement(W.L,{shouldExpandNode:Y,data:t,valueRenderer:ee,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"}})}function Y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const J="undefined"!=typeof Intl;function ee(e,t){const n=arguments.length<=2?void 0:arguments[2];return J&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function te(e){let{toggle:t,selectedValue:n}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:M,onClick:t},"Store"),"y"===n?a.createElement(re,null):null)}const ne=(0,a.memo)(te);function ae(){const e=(0,a.useContext)(H.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return a.createElement(X,{value:t})}const re=(0,a.memo)(ae);function se(e){let{groupId:t,defaultOpen:n,row:r}=e;const{tabGroupChoices:s,setTabGroupChoices:l}=(0,L.U)(),[i,o]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,R.o5)();if(null!=t){const e=s[t];null!=e&&e!==i&&o(e)}const c=(0,a.useCallback)((e=>{u(e.currentTarget),o((e=>"y"===e?"n":"y")),l(t,"y"===i?"n":"y")}),[u,t,i,l]),d=(0,a.useMemo)((()=>[new S.Z,new C.Z(I.Z)]),[]),m=!("n"===i||!r);return a.createElement(q.nq,{managers:d},a.createElement("div",{className:(0,E.Z)(Q,{[F]:m})},a.createElement(D.Z,{fallback:a.createElement(ie,null)},(()=>a.createElement(a.Suspense,{fallback:a.createElement(ie,null)},a.createElement(k.i5,null),a.createElement(k.IF,{className:O}))))),a.createElement(ne,{selectedValue:i,toggle:c}))}const le=(0,a.memo)(se);function ie(){return a.createElement("div",null,"Loading...")}function oe(e){let{children:t,className:n}=e;return a.createElement("div",{className:(0,E.Z)(A,n)},t)}function ue(e){let{groupId:t,defaultOpen:n,row:r}=e;return a.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},a.createElement(oe,null,a.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:$},a.createElement(le,{groupId:t,defaultOpen:n,row:r})))}function ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(U.Z);return a.createElement("div",{className:z,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:s}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,E.Z)(j,{[B]:e===r}),onFocus:t,onClick:t,value:r},s)})))}function de(e){let{children:t}=e;return a.createElement(oe,{className:V},a.createElement("div",null,t),a.createElement(ce,null))}function me(e){let{title:t}=e;const{values:n}=(0,a.useContext)(U.Z),r=n.length>0,s=(0,x.Z)();return a.createElement("div",null,r?a.createElement(de,null,t):a.createElement(oe,null,t),a.createElement(k.uz,{key:s,className:_}))}function pe(e){let{children:t,transformCode:n,groupId:r,defaultOpen:s,row:l,hidden:i=!1,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,N.Z)(),c=(0,Z.p)();o.scope;return a.createElement("div",{className:(0,E.Z)(G,{[P]:l,[F]:i})},a.createElement(k.nu,(0,b.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:c},o),"top"===u?a.createElement(a.Fragment,null,a.createElement(ue,{groupId:r,defaultOpen:s,row:l}),a.createElement(me,null)):a.createElement(a.Fragment,null,a.createElement(me,null),a.createElement(ue,{groupId:r,defaultOpen:s,row:l}))))}me.defaultProps={title:a.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var ge=n(71481),he=n(42910);class fe extends i.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}fe.schema={updatedAt:Date};const ve=new s.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:fe});const ye={...r,...l,...u,...o,mockFetch:function(e,t,n){void 0===n&&(n=150);const a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return new Promise((t=>setTimeout((()=>t(e(...a))),n)))};return t&&Object.defineProperty(a,"name",{value:t,writable:!1}),a},BigNumber:d(),lastUpdated:ve,TimedEntity:fe,CurrentTime:function(){const[e,t]=(0,a.useState)((()=>new Date));return(0,a.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),a.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=a.useState(0),{resetEntireStore:s}=(0,ge.Z)();return a.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:O},t.message," ",a.createElement("i",null,t.status)),a.createElement("button",{onClick:()=>{s(),r((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},be=e=>{let{children:t,groupId:n,hidden:r=!1,defaultOpen:s="n",row:l=!1}=e;return a.createElement(pe,{scope:ye,noInline:!0,groupId:n,defaultOpen:s,row:l,hidden:r},"string"==typeof t?t:t.props.children.props.children)},ke=(0,a.memo)(be)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(9877),r=n(72360),s=n(67294);function l(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(r.Z,{value:"ts"},t[0]),s.createElement(r.Z,{value:"js"},t[1]))}},96497:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(9877),r=n(72360),s=n(67294),l=n(58173);function i(e){let{pkgs:t,dev:n=!1}=e;return s.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(r.Z,{value:"yarn"},s.createElement(l.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),s.createElement(r.Z,{value:"npm"},s.createElement(l.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),r=n(15814);const s={React:a,...a,...r}},93827:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var a=n(83117),r=(n(67294),n(3905)),s=n(70523),l=n(9877),i=n(72360),o=n(96497),u=n(9790);const c={id:"usage",title:"GraphQL Usage",sidebar_label:"Usage"},d=void 0,m={unversionedId:"graphql/usage",id:"version-6.1/graphql/usage",title:"GraphQL Usage",description:"GraphQL Usage with Rest Hooks",source:"@site/versioned_docs/version-6.1/graphql/usage.md",sourceDirName:"graphql",slug:"/graphql/usage",permalink:"/docs/6.1/graphql/usage",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/usage.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"usage",title:"GraphQL Usage",sidebar_label:"Usage"},sidebar:"version-6.1/docs",previous:{title:"Custom networking library",permalink:"/docs/6.1/guides/custom-networking"},next:{title:"Authentication",permalink:"/docs/6.1/graphql/auth"}},p={},g=[{value:"Define Endpoint and Schema",id:"define-endpoint-and-schema",level:2},{value:"Query the Graph",id:"query-the-graph",level:2},{value:"Mutate the Graph",id:"mutate-the-graph",level:2}],h={toc:g};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"GraphQL Usage with Rest Hooks")),(0,r.kt)(o.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgTabs"}),(0,r.kt)("h2",{id:"define-endpoint-and-schema"},"Define Endpoint and Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\nexport default gql;\n")),(0,r.kt)(s.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {\n  readonly name: string | null = null;\n  readonly email: string = '';\n  readonly age: number = 0;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {}\n"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity"),"s are immutable. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using GQLEntities is not required, but is important to achieve data consistency."))),(0,r.kt)("h2",{id:"query-the-graph"},"Query the Graph"),(0,r.kt)(l.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserDetail.tsx"',title:'"pages/UserDetail.tsx"'},"import { useResource } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nexport const userDetail = gql.query(\n  (v: { name: string }) => `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n\nexport default function UserDetail({ name }: { name: string }) {\n  const { user } = useResource(userDetail, { name });\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <div>{user.email}</div>\n    </article>\n  );\n}\n"))),(0,r.kt)(i.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserList.tsx"',title:'"pages/UserList.tsx"'},"import { useResource } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nconst userList = gql.query(\n  `{\n    users {\n      id\n      name\n      email\n      }\n    }`,\n  { users: [User] },\n);\n\nexport default function UserList() {\n  const { users } = useResource(userList, {});\n  return (\n    <section>\n      {users.map(user => (\n        <UserSummary key={user.pk()} user={user} />\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")," guarantees access to data with sufficient ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/getting-started/data-dependency#boundaries"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,r.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,r.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"SWAPI Demo")),(0,r.kt)(u.Z,{mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\nclass Person extends GQLEntity {\n  readonly id: string = '';\n  readonly name: string = '';\n  readonly height: string = '';\n}\nconst PageInfo = {\n  hasNextPage: false,\n  startCursor: '',\n  endCursor: '',\n}\nconst allPeople = gql.query(\n  (v: { first?: number; after?: string }) => `\nquery People($first: Int, $after:String) {\n  allPeople(first: $first, after:$after) {\n    people{\n      id,name,height\n    },\n    pageInfo {\n      hasNextPage,\n      startCursor,\n      endCursor\n    }\n  }\n}\n`,\n{ allPeople: { people: [Person], pageInfo: PageInfo } },\n);\nfunction StarPeople() {\n  const { people, pageInfo } = useResource(allPeople, { first: 5 }).allPeople;\n  return (\n    <div>\n      {people.map(person => (\n        <div key={person.id}>\n          name: {person.name} height: {person.height}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<StarPeople/>);\n")))),(0,r.kt)("h2",{id:"mutate-the-graph"},"Mutate the Graph"),(0,r.kt)("p",null,"We're using ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/swapi-graphql"},"SWAPI")," as our example, since it offers mutations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/CreateReview.tsx"',title:'"pages/CreateReview.tsx"'},"import { useController } from 'rest-hooks';\nimport { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\n\nclass Review extends GQLEntity {\n  readonly stars: number = 0;\n  readonly commentary: string = '';\n}\n\nconst createReview = gql.mutation(\n  (v: {\n    ep: string;\n    review: { stars: number; commentary: string };\n  }) => `mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n    createReview(episode: $ep, review: $review) {\n      stars\n      commentary\n    }\n  }`,\n  { createReview: Review },\n);\n\nexport default function NewReviewForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(createReview, new FormData(e.target))}>\n      <FormField name=\"ep\" />\n      <FormField name=\"review\" type=\"compound\" />\n    </Form>\n  );\n}\n")),(0,r.kt)("p",null,"The first argument to GQLEndpoint.query or GQLEndpoint.mutate is either the query string\n",(0,r.kt)("em",{parentName:"p"},"or")," a function that returns the query string. The main value of using the latter is enforcing\nthe function argument types."))}f.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);