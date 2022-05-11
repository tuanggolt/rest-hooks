/*! For license information please see 8c39c7a0.2bab303d.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[52850],{41535:(e,t)=>{var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var k=v.prototype=new b;k.constructor=v,g(k,h.prototype),k.isPureReactComponent=!0;var w=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,o){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=o;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case o:u=!0}}if(u)return i=i(u=e),e=""===a?"."+E(u,0):a,w(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),N(i,t,n,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(u=0,a=""===a?".":a+":",w(e))for(var l=0;l<e.length;l++){var p=a+E(s=e[l],l);u+=N(s,t,n,p,i)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),l=0;!(s=e.next()).done;)u+=N(s=s.value,t,n,p=a+E(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function U(e,t,r){if(null==e)return e;var o=[],n=0;return N(e,o,"","",(function(e){return t.call(r,e,n++)})),o}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},$={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,y=f["".concat(u,".").concat(d)]||f[d]||c[d]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(83117),n=(r(27378),r(3905));const a={title:"Upgrading @rest-hooks/test to 7"},i=void 0,s={unversionedId:"upgrade/upgrading-test-to-seven",id:"upgrade/upgrading-test-to-seven",title:"Upgrading @rest-hooks/test to 7",description:"Importing directly from hidden files is no longer supported",source:"@site/../docs/upgrade/upgrading-test-to-seven.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-test-to-seven",permalink:"/docs/upgrade/upgrading-test-to-seven",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-test-to-seven.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1633140901,formattedLastUpdatedAt:"10/1/2021",frontMatter:{title:"Upgrading @rest-hooks/test to 7"},sidebar:"docs",previous:{title:"Upgrading from 4 to 5",permalink:"/docs/upgrade/upgrading-to-5"},next:{title:"Upgrading @rest-hooks/test to 6",permalink:"/docs/upgrade/upgrading-test-to-six"}},u={},l=[{value:"Importing directly from hidden files is no longer supported",id:"importing-directly-from-hidden-files-is-no-longer-supported",level:3},{value:"Node &gt;= 12",id:"node--12",level:3}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"importing-directly-from-hidden-files-is-no-longer-supported"},"Importing directly from hidden files is no longer supported"),(0,n.kt)("p",null,"All packages now use ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/package-exports/"},"package exports"),", which if\nsupported disallow importing directly from any sub path like ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks/lib/MockResolver")),(0,n.kt)("p",null,"Doing this was never supported as file locations would change without announcement. However, now\nwith tooling that supports package exports, it will not work at all."),(0,n.kt)("h3",{id:"node--12"},"Node >= 12"),(0,n.kt)("p",null,"Node 10 support is dropped."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@7")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/blob/master/packages/test/CHANGELOG.md#700-2021-09-08"},"Release notes")))}c.isMDXComponent=!0}}]);