"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[56778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72360:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_OmH5";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),s=n(72389),o=n(67392),l=n(7094),i=n(12466),u=n(86010);const c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n;const{lazy:s,block:d,defaultValue:m,values:h,groupId:v,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=h??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=g[0])?void 0:n.props.value);if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:E}=(0,l.U)(),[w,C]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=v){const e=N[v];null!=e&&e!==w&&k.some((t=>t.value===e))&&C(e)}const R=e=>{const t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==w&&(T(t),C(a),null!=v&&E(v,a))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]||x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},k.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:S,onFocus:R,onClick:R},s,{className:(0,u.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),s?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9877),r=n(72360),s=n(67294);function o(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(r.Z,{value:"ts"},t[0]),s.createElement(r.Z,{value:"js"},t[1]))}},40901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),s=(n(70523),n(9877)),o=n(72360);const l={title:"Controller"},i=void 0,u={unversionedId:"api/Controller",id:"version-6.1/api/Controller",title:"Controller",description:"Controller - Imperative Controls for Rest Hooks",source:"@site/versioned_docs/version-6.1/api/Controller.md",sourceDirName:"api",slug:"/api/Controller",permalink:"/docs/6.1/api/Controller",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Controller.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1637771422,formattedLastUpdatedAt:"11/24/2021",frontMatter:{title:"Controller"},sidebar:"version-6.1/docs",previous:{title:"TypeScript Types",permalink:"/docs/6.1/api/types"},next:{title:"useResource()",permalink:"/docs/6.1/api/useresource"}},c={},p=[{value:"fetch(endpoint, ...args)",id:"fetch",level:2},{value:"Endpoint.sideEffect",id:"endpointsideeffect",level:3},{value:"true",id:"true",level:4},{value:"undefined",id:"undefined",level:4},{value:"useFetchInit()",id:"usefetchinit",level:3},{value:"invalidate(endpoint, ...args)",id:"invalidate",level:2},{value:"resetEntireStore()",id:"resetEntireStore",level:2},{value:"receive(endpoint, ...args, response)",id:"receive",level:2},{value:"receiveError(endpoint, ...args, error)",id:"receiveError",level:2},{value:"subscribe(endpoint, ...args)",id:"subscribe",level:2},{value:"unsubscribe(endpoint, ...args)",id:"unsubscribe",level:2},{value:"getResponse(endpoint, ...args, state)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"Example",id:"example",level:3},{value:"getError(endpoint, ...args, state)",id:"getError",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Controller - Imperative Controls for Rest Hooks")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Controller {\n  /*************** Action Dispatchers ***************/\n  fetch(endpoint, ...args) => ReturnType<E>;\n  invalidate(endpoint, ...args) => Promise<void>;\n  resetEntireStore: () => Promise<void>;\n  receive(endpoint, ...args, response) => Promise<void>;\n  receiveError(endpoint, ...args, error) => Promise<void>;\n  subscribe(endpoint, ...args) => Promise<void>;\n  unsubscribe(endpoint, ...args) => Promise<void>;\n  /*************** Data Access ***************/\n  getResponse(endpoint, ...args, state)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args, state)\u200b => ErrorTypes | undefined;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/useController"},"useController()")," provides access in React components"),(0,r.kt)("h2",{id:"fetch"},"fetch(endpoint, ...args)"),(0,r.kt)("p",null,"Fetches the endpoint with given args, updating the Rest Hooks cache with\nthe response or error upon completion."),(0,r.kt)(s.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Create",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n\n  return (\n    <form\n      onSubmit={e => fetch(PostResource.create(), {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,r.kt)(o.Z,{value:"Update",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <form\n      onSubmit={e =>\n        fetch(PostResource.update(), { id }, new FormData(e.target))\n      }\n    >\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,r.kt)(o.Z,{value:"Delete",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const { fetch } = useController();\n\n  const handleDelete = useCallback(\n    async e => {\n      await fetch(PostResource.delete(), { id: post.id });\n      history.push('/');\n    },\n    [fetch, id],\n  );\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={handleDelete}>X</button>\n    </div>\n  );\n}\n")))),(0,r.kt)("h3",{id:"endpointsideeffect"},"Endpoint.sideEffect"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint#sideeffect"},"sideEffect")," changes the behavior"),(0,r.kt)("h4",{id:"true"},"true"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resolves ",(0,r.kt)("em",{parentName:"li"},"before")," committing Rest Hooks cache updates."),(0,r.kt)("li",{parentName:"ul"},"Each call will always cause a new fetch.")),(0,r.kt)("h4",{id:"undefined"},"undefined"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resolves ",(0,r.kt)("em",{parentName:"li"},"after")," committing Rest Hooks cache updates."),(0,r.kt)("li",{parentName:"ul"},"Identical requests are deduplicated globally; allowing only one inflight request at a time.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To ensure a ",(0,r.kt)("em",{parentName:"li"},"new")," request is started, make sure to abort any existing inflight requests.")))),(0,r.kt)("h3",{id:"usefetchinit"},"useFetchInit()"),(0,r.kt)("p",null,"Overriding ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/resource#useFetchInit"},"Resource.useFetchInit()")," makes it necessary to hoist all endpoint calls\nto the function render."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n  // PostResource.create() calls useFetchInit()\n  //highlight-next-line\n  const createPost = PostResource.create();\n\n  return (\n    <form\n      onSubmit={e => fetch(createPost, {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,r.kt)("h2",{id:"invalidate"},"invalidate(endpoint, ...args)"),(0,r.kt)("p",null,"Forces refetching and suspense on ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/useresource"},"useResource")," with the same Endpoint\nand parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleName({ id }: { id: string }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  const { invalidate } = useController();\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidate(ArticleResource.detail(), { id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To refresh while continuing to display stale data - ",(0,r.kt)("a",{parentName:"p",href:"#fetch"},"Controller.fetch")," instead."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Invalidate many endpoints at once")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Delete"},"schema.Delete")," to invalidate every endpoint that contains a given entity."))),(0,r.kt)("h2",{id:"resetEntireStore"},"resetEntireStore()"),(0,r.kt)("p",null,"Resets the entire Rest Hooks cache. All inflight requests will not resolve."),(0,r.kt)("p",null,"This is typically used when logging out or changing authenticated users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const USER_NUMBER_ONE: string = "1111";\n\nfunction UserName() {\n  const user = useResource(CurrentUserResource.detail(), { });\n  const { resetEntireStore } = useController();\n\n  const becomeAdmin = useCallback(() => {\n    // Changes the current user\n    impersonateUser(USER_NUMBER_ONE);\n    // highlight-next-line\n    resetEntireStore();\n  }, []);\n  return (\n    <div>\n      <h1>{user.name}<h1>\n      <button onClick={becomeAdmin}>Be Number One</button>\n    </div>\n  );\n}\n')),(0,r.kt)("h2",{id:"receive"},"receive(endpoint, ...args, response)"),(0,r.kt)("p",null,"Stores ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," in cache for given ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint"},"Endpoint")," and args."),(0,r.kt)("p",null,"Any components suspending for the given ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint"},"Endpoint")," and args will resolve."),(0,r.kt)("p",null,"If data already exists for the given ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint"},"Endpoint")," and args, it will be updated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { receive } = useController();\n\nuseEffect(() => {\n  const websocket = new Websocket(url);\n\n  websocket.onmessage = event =>\n    receive(EndpointLookup[event.endpoint], ...event.args, event.data);\n\n  return () => websocket.close();\n});\n")),(0,r.kt)("h2",{id:"receiveError"},"receiveError(endpoint, ...args, error)"),(0,r.kt)("p",null,"Stores the result of ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint"},"Endpoint")," and args as the error provided."),(0,r.kt)("h2",{id:"subscribe"},"subscribe(endpoint, ...args)"),(0,r.kt)("p",null,"Marks a new subscription to a given ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint"},"Endpoint"),". This should increment the subscription."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/useSubscription"},"useSubscription")," calls this on mount."),(0,r.kt)("p",null,"This might be useful for custom hooks to sub/unsub based on other factors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const controller = useController();\nconst key = endpoint.key(...args);\n\nuseEffect(() => {\n  controller.subscribe(endpoint, ...args);\n  return () => controller.unsubscribe(endpoint, ...args);\n}, [controller, key]);\n")),(0,r.kt)("h2",{id:"unsubscribe"},"unsubscribe(endpoint, ...args)"),(0,r.kt)("p",null,"Marks completion of subscription to a given ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint"},"Endpoint"),". This should\ndecrement the subscription and if the count reaches 0, more updates won't be received automatically."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/useSubscription"},"useSubscription")," calls this on unmount."),(0,r.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args, state)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,r.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,r.kt)("h3",{id:"data"},"data"),(0,r.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,r.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,r.kt)("h4",{id:"valid"},"Valid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will never suspend."),(0,r.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,r.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,r.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,r.kt)("h4",{id:"invalid"},"Invalid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will always suspend"),(0,r.kt)("li",{parentName:"ul"},"Will always fetch")),(0,r.kt)("h3",{id:"expiresat"},"expiresAt"),(0,r.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"This is used in ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/useCache"},"useCache"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/useresource"},"useResource")," and can be used in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Manager"},"Managers")," to lookup a response with the state provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="useCache.ts"',title:'"useCache.ts"'},"import {\n  useController,\n  StateContext,\n  EndpointInterface,\n} from '@rest-hooks/core';\n\n/** Oversimplified useCache */\nfunction useCache<E extends EntityInterface>(\n  endpoint: E,\n  ...args: readonly [...Parameters<E>]\n) {\n  const state = useContext(StateContext);\n  const controller = useController();\n  return controller.getResponse(endpoint, ...args, state).data;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyManager.ts"',title:'"MyManager.ts"'},"import type { Manager, Middleware, actionTypes } from '@rest-hooks/core';\nimport type { EndpointInterface } from '@rest-hooks/endpoint';\n\nexport default class MyManager implements Manager {\n  protected declare middleware: Middleware;\n  constructor() {\n    this.middleware = ({ controller, getState }) => {\n      return next => async action => {\n        if (action.type === actionTypes.FETCH_TYPE) {\n          console.log('The existing response of the requested fetch');\n          console.log(\n            controller.getResponse(\n              action.endpoint,\n              ...(action.meta.args as Parameters<typeof action.endpoint>),\n              getState(),\n            ).data,\n          );\n        }\n        next(action);\n      };\n    };\n  }\n\n  cleanup() {\n    this.websocket.close();\n  }\n\n  getMiddleware<T extends StreamManager>(this: T) {\n    return this.middleware;\n  }\n}\n")),(0,r.kt)("h2",{id:"getError"},"getError(endpoint, ...args, state)"),(0,r.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."))}m.isMDXComponent=!0}}]);