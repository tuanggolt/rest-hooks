/*! For license information please see d513f1a5.96dd6abe.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7690,37103,68047,714,18961,36701,68649,901,18612],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var l,i,u=a(e),s=1;s<arguments.length;s++){for(var c in l=Object(arguments[s]))r.call(l,c)&&(u[c]=l[c]);if(t){i=t(l);for(var p=0;p<i.length;p++)n.call(l,i[p])&&(u[i[p]]=l[i[p]])}}return u}},41535:(e,t,r)=>{var n=r(62525),a=60103,o=60106;var l=60109,i=60110,u=60112;var s=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),l=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var b=v.prototype=new y;b.constructor=v,n(b,h.prototype),b.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)k.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:w.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return l=l(u=e),e=""===n?"."+x(u,0):n,g(l)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),P(l,t,r,"",(function(e){return e}))):null!=l&&(N(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(E,"$&/")+"/")+e)),t.push(l)),1;if(u=0,n=""===n?".":n+":",g(e))for(var s=0;s<e.length;s++){var c=n+x(i=e[s],s);u+=P(i,t,r,c,l)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),s=0;!(i=e.next()).done;)u+=P(i=i.value,t,r,c=n+x(i,s++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function _(e,t,r){if(null==e)return e;var n=[],a=0;return P(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function S(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},F={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},9877:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(87462),a=r(67294),o=r(72389),l=r(80944),i=r(89521),u=r(86010);const s="tabItem_1uMI";function c(e){var t,r;const{lazy:n,block:o,defaultValue:c,values:p,groupId:d,className:f}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??m.map((({props:{value:e,label:t}})=>({value:e,label:t}))),y=(0,i.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=m[0])?void 0:r.props.value);if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,l.Z)(),[k,w]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,i.o5)();if(null!=d){const e=b[d];null!=e&&e!==k&&h.some((t=>t.value===e))&&w(e)}const N=e=>{const t=e.currentTarget,r=O.indexOf(t),n=h[r].value;n!==k&&(j(t),w(n),null!=d&&g(d,n))},E=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]||O[O.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},f)},h.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":k===e}),key:e,ref:e=>O.push(e),onKeyDown:E,onFocus:N,onClick:N},t??e)))),n?(0,a.cloneElement)(m.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},79443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)(void 0)},80944:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(79443);const o=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},11048:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(9877),a=r(58215),o=r(67294);function l({children:e}){return o.createElement(n.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(a.Z,{value:"simple"},e[0]),o.createElement(a.Z,{value:"generics"},e[1]))}},74989:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>u,toc:()=>s,default:()=>p});var n=r(87462),a=(r(27378),r(3905)),o=r(11048);const l={title:"useFetch()"},i=void 0,u={unversionedId:"api/useFetch",id:"api/useFetch",isDocsHomePage:!1,title:"useFetch()",description:"Great for retrieving resources optimistically before they are needed.",source:"@site/../docs/api/useFetch.md",sourceDirName:"api",slug:"/api/useFetch",permalink:"/docs/next/api/useFetch",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useFetch.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"useFetch()"},sidebar:"docs",previous:{title:"useSubscription()",permalink:"/docs/next/api/useSubscription"},next:{title:"useMeta()",permalink:"/docs/next/api/useMeta"}},s=[{value:"Example",id:"example",children:[{value:"Simple",id:"simple",children:[],level:3},{value:"Conditional",id:"conditional",children:[],level:3}],level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",children:[],level:2}],c={toc:s};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetch(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Promise<any> | undefined;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetch<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(endpoint: E, ...args: Args): ReturnType<E>;\n"))),(0,a.kt)("p",null,"Great for retrieving resources optimistically before they are needed."),(0,a.kt)("p",null,"This can be useful for ensuring resources early in a render tree before they are needed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On first-render",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"or parameters change"),(0,a.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,a.kt)("li",{parentName:"ul"},"or imperative ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/Controller#invalidate"},"invalidation")," triggered"))),(0,a.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,a.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,a.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Returned promise will reject"))),(0,a.kt)("li",{parentName:"ul"},"On fetch returns a promise else undefined.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"simple"},"Simple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id }: { id: number }) {\n  useFetch(PostResource.detail(), { id });\n  // ...\n}\n")),(0,a.kt)("h3",{id:"conditional"},"Conditional"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id, doNotFetch }: { id: number; doNotFetch: boolean }) {\n  useFetch(PostResource.detail(), doNotFetch ? null : { id });\n  // ...\n}\n")),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"detail()"),(0,a.kt)("li",{parentName:"ul"},"list()")),(0,a.kt)("p",null,"Feel free to add your own ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint")," as well."))}p.isMDXComponent=!0}}]);