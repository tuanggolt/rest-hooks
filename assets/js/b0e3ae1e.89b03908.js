/*! For license information please see b0e3ae1e.89b03908.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43943],{62525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(t,a){for(var i,c,u=o(t),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))r.call(i,l)&&(u[l]=i[l]);if(e){c=e(i);for(var f=0;f<c.length;f++)n.call(i,c[f])&&(u[c[f]]=i[c[f]])}}return u}},41535:(t,e,r)=>{var n=r(62525),o=60103,a=60106;var i=60109,c=60110,u=60112;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),i=f("react.provider"),c=f("react.context"),u=f("react.forward_ref"),f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(t,e,r){this.props=t,this.context=e,this.refs=d,this.updater=r||y}function g(){}function m(t,e,r){this.props=t,this.context=e,this.refs=d,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},b.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=b.prototype;var v=m.prototype=new g;v.constructor=m,n(v,b.prototype),v.isPureReactComponent=!0;var h=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function k(t,e,r){var n,a={},i=null,c=null;if(null!=e)for(n in void 0!==e.ref&&(c=e.ref),void 0!==e.key&&(i=""+e.key),e)O.call(e,n)&&!w.hasOwnProperty(n)&&(a[n]=e[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(t&&t.defaultProps)for(n in u=t.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:t,key:i,ref:c,props:a,_owner:j.current}}function E(t){return"object"==typeof t&&null!==t&&t.$$typeof===o}var _=/\/+/g;function S(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function P(t,e,r,n,i){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=t),t=""===n?"."+S(u,0):n,h(i)?(r="",null!=t&&(r=t.replace(_,"$&/")+"/"),P(i,e,r,"",(function(t){return t}))):null!=i&&(E(i)&&(i=function(t,e){return{$$typeof:o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+t)),e.push(i)),1;if(u=0,n=""===n?".":n+":",h(t))for(var s=0;s<t.length;s++){var l=n+S(c=t[s],s);u+=P(c,e,r,l,i)}else if("function"==typeof(l=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=p&&t[p]||t["@@iterator"])?t:null}(t)))for(t=l.call(t),s=0;!(c=t.next()).done;)u+=P(c=c.value,e,r,l=n+S(c,s++),i);else if("object"===c)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return u}function x(t,e,r){if(null==t)return t;var n=[],o=0;return P(t,n,"","",(function(t){return e.call(r,t,o++)})),n}function D(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var A={current:null},M={transition:0}},27378:(t,e,r)=>{r(41535)},3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=s(r),y=o,d=p["".concat(u,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(d,i(i({ref:e},l),{},{components:r})):n.createElement(d,i({ref:e},l))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5714:(t,e,r)=>{r.r(e),r.d(e,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>l});var n=r(87462),o=(r(27378),r(3905));const a={},i=void 0,c={unversionedId:"getting-started/README",id:"getting-started/README",isDocsHomePage:!1,title:"README",description:"Getting Started",source:"@site/../docs/getting-started/README.md",sourceDirName:"getting-started",slug:"/getting-started/README",permalink:"/docs/next/getting-started/README",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/README.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{}},u=[{value:"Getting Started",id:"getting-started",children:[],level:2}],s={toc:u};function l({components:t,...e}){return(0,o.kt)("wrapper",(0,n.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/getting-started/installation"},"Installation"))))}l.isMDXComponent=!0}}]);