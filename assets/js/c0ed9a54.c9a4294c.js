/*! For license information please see c0ed9a54.c9a4294c.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[86611],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}function k(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=v.prototype;var g=b.prototype=new k;g.constructor=b,h(g,v.prototype),g.isPureReactComponent=!0;var w=Array.isArray,x=Object.prototype.hasOwnProperty,M={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},s=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,o)&&!N.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:r,type:e,key:s,ref:l,props:a,_owner:M.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,o,a,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return s=s(i=e),e=""===a?"."+C(i,0):a,w(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),E(s,t,o,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(i=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var c=a+C(l=e[u],u);i+=E(l,t,o,c,s)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(l=e.next()).done;)i+=E(l=l.value,t,o,c=a+C(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function _(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},Z={transition:null}},27378:(e,t,r)=>{r(41535)},72360:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(86010);const a="tabItem_OmH5";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:r},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(83117),o=r(67294),a=r(72389),s=r(67392),l=r(7094),i=r(12466),u=r(86010);const c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,r;const{lazy:a,block:p,defaultValue:m,values:f,groupId:h,className:y}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=f??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,s.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=v[0])?void 0:r.props.value);if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,l.U)(),[M,N]=(0,o.useState)(g),S=[],{blockElementScrollPositionUntilNextRender:P}=(0,i.o5)();if(null!=h){const e=w[h];null!=e&&e!==M&&k.some((t=>t.value===e))&&N(e)}const R=e=>{const t=e.currentTarget,r=S.indexOf(t),n=k[r].value;n!==M&&(P(t),N(n),null!=h&&x(h,n))},C=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;r=S[t]||S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;r=S[t]||S[S.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,u.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},y)},k.map((e=>{let{value:t,label:r,attributes:a}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:e=>S.push(e),onKeyDown:C,onFocus:R,onClick:R},a,{className:(0,u.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":M===t})}),r??t)}))),a?(0,o.cloneElement)(v.filter((e=>e.props.value===M))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==M})))))}function m(e){const t=(0,a.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},96497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(9877),o=r(72360),a=r(67294),s=r(58173);function l(e){let{pkgs:t,dev:r=!1}=e;return a.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(s.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),a.createElement(o.Z,{value:"npm"},a.createElement(s.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(15814);const a={React:n,...n,...o}},63868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(83117),o=(r(27378),r(3905)),a=r(96497),s=r(9877),l=r(72360);const i={id:"redux",title:"Redux integration"},u=void 0,c={unversionedId:"guides/redux",id:"guides/redux",title:"Redux integration",description:"Using redux is completely optional. However, for many it means easy integration or migration",source:"@site/../docs/guides/redux.md",sourceDirName:"guides",slug:"/guides/redux",permalink:"/docs/guides/redux",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/redux.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1645833604,formattedLastUpdatedAt:"2/25/2022",frontMatter:{id:"redux",title:"Redux integration"},sidebar:"docs",previous:{title:"Aborting Fetch",permalink:"/docs/guides/abort"},next:{title:"Usage with class components",permalink:"/docs/guides/class-components"}},d={},p=[{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>index.tsx</code>",id:"indextsx-1",level:4},{value:"Redux devtools",id:"redux-devtools",level:2}],m={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is completely optional. However, for many it means easy integration or migration\nwith existing projects, or just a nice centralized state management abstraction."),(0,o.kt)("p",null,"Integration is fairly straightforward as rest-hooks already uses the same paradigms as redux under\nthe hood. However, care should be taken to integrate the reducer and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"middlewares")," properly\nor it won't work as expected."),(0,o.kt)("p",null,"First make sure you have redux installed:"),(0,o.kt)(a.Z,{pkgs:"redux",mdxType:"PkgTabs"}),(0,o.kt)("p",null,"Note: react-redux is ",(0,o.kt)("em",{parentName:"p"},"not")," needed for this integration (though you will need it if you want to use redux directly as well)."),(0,o.kt)("p",null,"Then you'll want to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/ExternalCacheProvider"},"<ExternalCacheProvider /",">")," instead of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/CacheProvider"},"<CacheProvider /",">")," and pass in the store and a selector function to grab\nthe rest-hooks specific part of the state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You should only use ONE provider; nested another provider will override the previous.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Rest Hooks manager middlewares return promises, which is different from how redux middlewares work.\nBecause of this, if you want to integrate both, you'll need to place all redux middlewares\nafter the ",(0,o.kt)("inlineCode",{parentName:"p"},"PromiseifyMiddleware")," adapter, and place all Rest Hooks manager middlewares before.")),(0,o.kt)(s.Z,{defaultValue:"rest-hooks",values:[{label:"just Rest Hooks",value:"rest-hooks"},{label:"with React-Redux",value:"react-redux"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rest-hooks",mdxType:"TabItem"},(0,o.kt)("h4",{id:"indextsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport {\n  initialState,\n  createReducer,\n  NetworkManager,\n  Controller,\n} from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport ReactDOM from 'react-dom';\n\nconst networkManager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst controller = new Controller();\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  applyMiddleware(\n    ...applyManager([networkManager, subscriptionManager], controller),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\n// managers optionally provide initialization subroutine\nfor (const manager of [networkManager, subscriptionManager]) {\n  managers[i].init?.(selector(store.getState()));\n}\n\nReactDOM.render(\n  <ExternalCacheProvider\n    store={store}\n    selector={selector}\n    controller={controller}\n  >\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      ...applyManager([networkManager, subscriptionManager], controller),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n"))),(0,o.kt)(l.Z,{value:"react-redux",mdxType:"TabItem"},(0,o.kt)("h4",{id:"indextsx-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport {\n  initialState,\n  createReducer,\n  NetworkManager,\n  Controller,\n} from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport { Provider } from 'react-redux';\nimport ReactDOM from 'react-dom';\n\nconst manager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst controller = new Controller();\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  applyMiddleware(\n    ...applyManager([networkManager, subscriptionManager], controller),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector} controller={controller}>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      ...applyManager([networkManager, subscriptionManager], controller),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n")))),(0,o.kt)("p",null,"Here we store rest-hooks state information in the 'restHooks' part of the tree."),(0,o.kt)("h2",{id:"redux-devtools"},"Redux devtools"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"Redux DevTools")," allows easy inspection of current\nstate and transitions in the Rest Hooks store."),(0,o.kt)("p",null,"Simply wrap the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"composeWithDevTools()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { composeWithDevTools } from 'redux-devtools-extension';\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  // The next three lines are added\n  composeWithDevTools({\n    trace: true,\n  })(\n    applyMiddleware(\n      ...applyManager([networkManager, subscriptionManager], controller),\n      // place Rest Hooks built middlewares before PromiseifyMiddleware\n      PromiseifyMiddleware,\n      // place redux middlewares after PromiseifyMiddleware\n    ),\n  ),\n);\n")))}f.isMDXComponent=!0}}]);