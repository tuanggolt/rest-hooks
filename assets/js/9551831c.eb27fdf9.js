/*! For license information please see 9551831c.eb27fdf9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76063],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))r.call(i,s)&&(l[s]=i[s]);if(t){c=t(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(l[c[p]]=i[c[p]])}}return l}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var i=60109,c=60110,l=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function h(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var v=b.prototype=new h;v.constructor=b,n(v,m.prototype),v.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===n?"."+_(l,0):n,g(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),E(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",g(e))for(var u=0;u<e.length;u++){var s=n+_(c=e[u],u);l+=E(c,t,r,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),u=0;!(c=e.next()).done;)l+=E(c=c.value,t,r,s=n+_(c,u++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function R(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},C={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71179:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>c,toc:()=>l,default:()=>s});var n=r(87462),o=(r(27378),r(3905));const a={title:"Protocol Specific Extensions"},i=void 0,c={unversionedId:"getting-started/protocols",id:"getting-started/protocols",isDocsHomePage:!1,title:"Protocol Specific Extensions",description:"REST / CRUD",source:"@site/../docs/getting-started/protocols.md",sourceDirName:"getting-started",slug:"/getting-started/protocols",permalink:"/docs/next/getting-started/protocols",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/protocols.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1629952278,formattedLastUpdatedAt:"8/25/2021",frontMatter:{title:"Protocol Specific Extensions"}},l=[{value:"REST / CRUD",id:"rest--crud",children:[{value:"Resource",id:"resource",children:[{value:"Readonly endpoints",id:"readonly-endpoints",children:[],level:4},{value:"Mutation endpoints",id:"mutation-endpoints",children:[],level:4}],level:3}],level:2},{value:"GraphQL",id:"graphql",children:[],level:2}],u={toc:l};function s({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rest--crud"},"REST / CRUD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rest-hooks/rest\n")),(0,o.kt)("h3",{id:"resource"},"Resource"),(0,o.kt)("p",null,"// make this a table"),(0,o.kt)("h4",{id:"readonly-endpoints"},"Readonly endpoints"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource.detail()"),(0,o.kt)("li",{parentName:"ul"},"Resource.list()")),(0,o.kt)("h4",{id:"mutation-endpoints"},"Mutation endpoints"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource.create()"),(0,o.kt)("li",{parentName:"ul"},"Resource.update()"),(0,o.kt)("li",{parentName:"ul"},"Resource.partialUpdate()"),(0,o.kt)("li",{parentName:"ul"},"Resource.delete()")),(0,o.kt)("h2",{id:"graphql"},"GraphQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class GQLEntity extends Entity {\n  readonly id: number = 0;\n\n  pk() { return `${this.id}`; }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const GQL = new Endpoint(\n  ()\n)\n")))}s.isMDXComponent=!0}}]);