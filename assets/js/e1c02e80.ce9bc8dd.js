/*! For license information please see e1c02e80.ce9bc8dd.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26094],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,c=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(c[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(c[s[p]]=i[s[p]])}}return c}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var i=60109,s=60110,c=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=g.prototype=new b;v.constructor=g,n(v,y.prototype),v.isPureReactComponent=!0;var h=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:O.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function M(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+P(c,0):n,h(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),M(i,t,r,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",h(e))for(var l=0;l<e.length;l++){var u=n+P(s=e[l],l);c+=M(s,t,r,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),l=0;!(s=e.next()).done;)c+=M(s=s.value,t,r,u=n+P(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function S(e,t,r){if(null==e)return e;var n=[],o=0;return M(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},E={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70049:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>u});var n=r(87462),o=(r(27378),r(3905));const a={title:"DevToolsManager implements Manager",sidebar_label:"DevToolsManager"},i=void 0,s={unversionedId:"api/DevToolsManager",id:"api/DevToolsManager",isDocsHomePage:!1,title:"DevToolsManager implements Manager",description:"Integrates with Redux DevTools to track",source:"@site/../docs/api/DevToolsManager.md",sourceDirName:"api",slug:"/api/DevToolsManager",permalink:"/docs/next/api/DevToolsManager",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/DevToolsManager.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1595298129,formattedLastUpdatedAt:"7/20/2020",frontMatter:{title:"DevToolsManager implements Manager",sidebar_label:"DevToolsManager"},sidebar:"docs",previous:{title:"PollingSubscription",permalink:"/docs/next/api/PollingSubscription"},next:{title:"useFetcher()",permalink:"/docs/next/api/useFetcher"}},c=[{value:"constructor(options: Arguments)",id:"constructoroptions-arguments",children:[],level:2},{value:"More info",id:"more-info",children:[],level:2}],l={toc:c};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class DevToolsManager implements Manager\n")),(0,o.kt)("p",null,"Integrates with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux DevTools")," to track\nstate and actions. Note: does not integrate time-travel."),(0,o.kt)("p",null,"Add the ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"chrome extension"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"firefox extension")," to your\nbrowser to get started."),(0,o.kt)("h2",{id:"constructoroptions-arguments"},"constructor(options: Arguments)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md"},"Arguments"),"\nto send to redux devtools."),(0,o.kt)("h2",{id:"more-info"},"More info"),(0,o.kt)("p",null,"Using this Manager allows ",(0,o.kt)("a",{parentName:"p",href:"../guides/debugging"},"debugging")," with redux-devtools."))}u.isMDXComponent=!0}}]);