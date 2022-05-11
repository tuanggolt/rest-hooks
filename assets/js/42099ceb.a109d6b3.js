/*! For license information please see 42099ceb.a109d6b3.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[34209],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function k(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var v=g.prototype=new k;v.constructor=g,m(v,b.prototype),v.isPureReactComponent=!0;var w=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:j.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===a?"."+x(l,0):a,w(i)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(M(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+x(s=e[c],c);l+=P(s,t,o,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(s=e.next()).done;)l+=P(s=s.value,t,o,u=a+x(s,c++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function E(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},C={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(83117),o=(r(27378),r(3905));const a={title:"NetworkManager implements Manager",sidebar_label:"NetworkManager"},i=void 0,s={unversionedId:"api/NetworkManager",id:"api/NetworkManager",title:"NetworkManager implements Manager",description:"NetworkManager orchestrates asynchronous fetches. By keeping track of all in-flight requests",source:"@site/../docs/api/NetworkManager.md",sourceDirName:"api",slug:"/api/NetworkManager",permalink:"/docs/api/NetworkManager",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/NetworkManager.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1555833938,formattedLastUpdatedAt:"4/21/2019",frontMatter:{title:"NetworkManager implements Manager",sidebar_label:"NetworkManager"},sidebar:"docs",previous:{title:"Manager",permalink:"/docs/api/Manager"},next:{title:"useResource()",permalink:"/docs/api/useresource"}},l={},c=[{value:"constructor(dataExpiryLength: number = 60000, errorExpiryLength: number = 1000)",id:"constructordataexpirylength-number--60000-errorexpirylength-number--1000",level:2},{value:"Consumed Actions",id:"consumed-actions",level:2},{value:"Processed Actions",id:"processed-actions",level:2},{value:"Dispatched Actions",id:"dispatched-actions",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NetworkManager orchestrates asynchronous fetches. By keeping track of all in-flight requests\nit is able to dedupe identical requests if they are made using the throttle flag."),(0,o.kt)("h2",{id:"constructordataexpirylength-number--60000-errorexpirylength-number--1000"},"constructor(dataExpiryLength: number = 60000, errorExpiryLength: number = 1000)"),(0,o.kt)("p",null,"Arguments represent the default time (in miliseconds) before a resource is considered 'stale'."),(0,o.kt)("h2",{id:"consumed-actions"},"Consumed Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/fetch'")),(0,o.kt)("p",null,"Will initiate network request and then dispatch upon completion."),(0,o.kt)("h2",{id:"processed-actions"},"Processed Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/purge'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/rpc'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/receive'")),(0,o.kt)("p",null,"Marks request as complete."),(0,o.kt)("h2",{id:"dispatched-actions"},"Dispatched Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/purge'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/rpc'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/receive'")))}p.isMDXComponent=!0}}]);