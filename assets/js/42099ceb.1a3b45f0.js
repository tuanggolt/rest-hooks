/*! For license information please see 42099ceb.1a3b45f0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34209],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))r.call(i,l)&&(s[l]=i[l]);if(t){c=t(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var i=60109,c=60110,s=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=b.prototype=new m;g.constructor=b,n(g,h.prototype),g.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function M(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+x(s,0):n,k(i)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),M(i,t,r,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",k(e))for(var u=0;u<e.length;u++){var l=n+x(c=e[u],u);s+=M(c,t,r,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),u=0;!(c=e.next()).done;)s+=M(c=c.value,t,r,l=n+x(c,u++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,r){if(null==e)return e;var n=[],o=0;return M(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},A={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8811:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>c,toc:()=>s,default:()=>l});var n=r(87462),o=(r(27378),r(3905));const a={title:"NetworkManager implements Manager",sidebar_label:"NetworkManager"},i=void 0,c={unversionedId:"api/NetworkManager",id:"api/NetworkManager",isDocsHomePage:!1,title:"NetworkManager implements Manager",description:"NetworkManager orchestrates asynchronous fetches. By keeping track of all in-flight requests",source:"@site/../docs/api/NetworkManager.md",sourceDirName:"api",slug:"/api/NetworkManager",permalink:"/docs/next/api/NetworkManager",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/NetworkManager.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1555833938,formattedLastUpdatedAt:"4/21/2019",frontMatter:{title:"NetworkManager implements Manager",sidebar_label:"NetworkManager"},sidebar:"docs",previous:{title:"Manager",permalink:"/docs/next/api/Manager"},next:{title:"useResource()",permalink:"/docs/next/api/useresource"}},s=[{value:"constructor(dataExpiryLength: number = 60000, errorExpiryLength: number = 1000)",id:"constructordataexpirylength-number--60000-errorexpirylength-number--1000",children:[],level:2},{value:"Consumed Actions",id:"consumed-actions",children:[],level:2},{value:"Processed Actions",id:"processed-actions",children:[],level:2},{value:"Dispatched Actions",id:"dispatched-actions",children:[],level:2}],u={toc:s};function l({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NetworkManager orchestrates asynchronous fetches. By keeping track of all in-flight requests\nit is able to dedupe identical requests if they are made using the throttle flag."),(0,o.kt)("h2",{id:"constructordataexpirylength-number--60000-errorexpirylength-number--1000"},"constructor(dataExpiryLength: number = 60000, errorExpiryLength: number = 1000)"),(0,o.kt)("p",null,"Arguments represent the default time (in miliseconds) before a resource is considered 'stale'."),(0,o.kt)("h2",{id:"consumed-actions"},"Consumed Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/fetch'")),(0,o.kt)("p",null,"Will initiate network request and then dispatch upon completion."),(0,o.kt)("h2",{id:"processed-actions"},"Processed Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/purge'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/rpc'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/receive'")),(0,o.kt)("p",null,"Marks request as complete."),(0,o.kt)("h2",{id:"dispatched-actions"},"Dispatched Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/purge'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/rpc'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/receive'")))}l.isMDXComponent=!0}}]);