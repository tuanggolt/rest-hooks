/*! For license information please see 27beb51b.4242bb1b.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[6213],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function v(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var g=k.prototype=new v;g.constructor=k,m(g,h.prototype),g.isPureReactComponent=!0;var C=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},l=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)O.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];a.children=i}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:r,type:e,key:l,ref:s,props:a,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,o,a,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return l=l(u=e),e=""===a?"."+x(u,0):a,C(l)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),E(l,t,o,"",(function(e){return e}))):null!=l&&(_(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+e)),t.push(l)),1;if(u=0,a=""===a?".":a+":",C(e))for(var i=0;i<e.length;i++){var c=a+x(s=e[i],i);u+=E(s,t,o,c,l)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),i=0;!(s=e.next()).done;)u+=E(s=s.value,t,o,c=a+x(s,i++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=i(r),y=o,d=f["".concat(u,".").concat(y)]||f[y]||p[y]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(83117),o=(r(27378),r(3905));const a={title:"useController()"},l=void 0,s={unversionedId:"api/useController",id:"api/useController",title:"useController()",description:"useController() - Imperative Controls for Rest Hooks",source:"@site/../docs/api/useController.md",sourceDirName:"api",slug:"/api/useController",permalink:"/docs/api/useController",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useController.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1633535713,formattedLastUpdatedAt:"10/6/2021",frontMatter:{title:"useController()"},sidebar:"docs",previous:{title:"useSuspense()",permalink:"/docs/api/useSuspense"},next:{title:"useCache()",permalink:"/docs/api/useCache"}},u={},i=[],c={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"useController() - Imperative Controls for Rest Hooks")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useController(): Controller;\n")),(0,o.kt)("p",null,"Provides access to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Controller"},"Controller")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\n\nfunction MyComponent({ id }) {\n  const { fetch, invalidate, resetEntireStore } = useController();\n\n  const handleRefresh = useCallback(\n    async e => {\n      await fetch(MyResource.detail(), { id });\n    },\n    [fetch, id],\n  );\n\n  const handleSuspend = useCallback(\n    async e => {\n      await invalidate(MyResource.detail(), { id });\n    },\n    [invalidate, id],\n  );\n\n  const handleLogout = useCallback(\n    async e => {\n      resetEntireStore();\n    },\n    [resetEntireStore],\n  );\n}\n")))}p.isMDXComponent=!0}}]);