/*! For license information please see fa88e895.4d33e089.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85609],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,i,u=a(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))n.call(s,l)&&(u[l]=s[l]);if(t){i=t(s);for(var p=0;p<i.length;p++)r.call(s,i[p])&&(u[i[p]]=s[i[p]])}}return u}},41535:(e,t,n)=>{var r=n(62525),a=60103,o=60106;var s=60109,i=60110,u=60112;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),l=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function y(){}function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var b=h.prototype=new y;b.constructor=h,r(b,g.prototype),b.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:s,ref:i,props:o,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return s=s(u=e),e=""===r?"."+N(u,0):r,k(s)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),R(s,t,n,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+e)),t.push(s)),1;if(u=0,r=""===r?".":r+":",k(e))for(var c=0;c<e.length;c++){var l=r+N(i=e[c],c);u+=R(i,t,n,l,s)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),c=0;!(i=e.next()).done;)u+=R(i=i.value,t,n,l=r+N(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function S(e,t,n){if(null==e)return e;var r=[],a=0;return R(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},C={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47386:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>i,toc:()=>u,default:()=>l});var r=n(87462),a=(n(27378),n(3905));const o={title:"Infinite Scrolling"},s=void 0,i={unversionedId:"guides/infinite-scrolling-pagination",id:"guides/infinite-scrolling-pagination",isDocsHomePage:!1,title:"Infinite Scrolling",description:"Add Update Function matching network schema",source:"@site/../docs/guides/infinite-scrolling-pagination.md",sourceDirName:"guides",slug:"/guides/infinite-scrolling-pagination",permalink:"/docs/next/guides/infinite-scrolling-pagination",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/infinite-scrolling-pagination.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635345848,formattedLastUpdatedAt:"10/27/2021",frontMatter:{title:"Infinite Scrolling"},sidebar:"docs",previous:{title:"Images and other Media",permalink:"/docs/next/guides/img-media"},next:{title:"Fetching multiple resources at once",permalink:"/docs/next/guides/fetch-multiple"}},u=[{value:"Add Update Function matching network schema",id:"add-update-function-matching-network-schema",children:[],level:2},{value:"Create pagination hook",id:"create-pagination-hook",children:[],level:2},{value:"NewsList example",id:"newslist-example",children:[],level:2}],c={toc:u};function l({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"add-update-function-matching-network-schema"},"Add Update Function matching network schema"),(0,a.kt)("p",null,"If your API follows a common pattern, adding the ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#update"},"Endpoint.update"),"\nto a base class can make adding pagination behavior to any of your endpoints quite easy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Params = { cursor: string; [k: string]: any };\nabstract class BaseResource extends Resource {\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    FetchFunction<Params>,\n    { results: T[]; cursor: string | null },\n    undefined\n  > {\n    return super.list().extend({\n      schema: { results: [this], cursor: null },\n      update: (newResults: any, { cursor, ...rest }: Params) => ({\n        [this.list().key({ ...rest })]: BaseResource.appendList.bind(\n          BaseResource,\n          newResults,\n        ),\n      }),\n    });\n  }\n\n  static appendList(\n    newResults: { results: string[] },\n    existingResults: { results: string[] } | undefined,\n  ) {\n    const existingList = existingResults?.results ?? [];\n    const existingSet: Set<string> = new Set(existingList);\n    const addedList = newResults.results.filter(\n      (pk: string) => !existingSet.has(pk),\n    );\n    const mergedResults: string[] = [...existingList, ...addedList];\n    return {\n      ...newResults,\n      results: mergedResults,\n    };\n  }\n}\n")),(0,a.kt)("h2",{id:"create-pagination-hook"},"Create pagination hook"),(0,a.kt)("p",null,"Here we'll define a helper hook for pagination that uses the BaseResource\n",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#update"},"Endpoint.update"),".\nThis can then be used for any Resources that conform to this schema. Most likely\nthat is the same as those extending from BaseResource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useMemo } from 'react';\nimport { ReadEndpoint, useController } from 'rest-hooks';\n\nfunction usePaginator<\n  E extends ReadEndpoint<(params: any) => Promise<any>, any>,\n>(endpoint: E, params: Omit<Parameters<E>[0], 'cursor'> | null) {\n  const { fetch } = useController();\n\n  return useMemo(\n    () => {\n      if (!params) return null;\n      return (cursor: string) => {\n        const p: Parameters<E> = [{ ...params, cursor }] as any;\n        return fetch(endpoint, ...p);\n      };\n    },\n    // \"params && endpoint.key(params)\" is a method to serialize params\n    [fetch, params && endpoint.key(params)],\n  );\n}\n")),(0,a.kt)("h2",{id:"newslist-example"},"NewsList example"),(0,a.kt)("p",null,"We'll extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseResource")," created above, to define the correct\nschema for list()."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import BaseResource from 'resources/BaseResource';\n\nclass NewsResource extends BaseResource {\n  readonly id: string | undefined = undefined;\n  readonly title = '';\n  readonly url = '';\n  readonly previewImage = '';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = '/news';\n}\n")),(0,a.kt)("p",null,"Now we can declare our data depency to get list results with ",(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense"),",\nand get an imperative handler ",(0,a.kt)("inlineCode",{parentName:"p"},"getNextPage")," using our new hook."),(0,a.kt)("p",null,"Since UI behaviors vary widely, and implementations vary from platform (react-native or web),\nwe'll just assume a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pagination")," component is built, that uses a callback to trigger next\npage fetching. On web, it is recommended to use something based on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observers")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Pagination />")," is assumed to call its ",(0,a.kt)("inlineCode",{parentName:"p"},"onPaginate")," prop when a user scrolls and its\n",(0,a.kt)("inlineCode",{parentName:"p"},"nextCursor")," is not falsy. It will then pass the nextCursor prop as the sole argument to\n",(0,a.kt)("inlineCode",{parentName:"p"},"onPaginate"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport NewsResource from 'resources/NewsResource';\nimport usePaginator from 'resources/basePaginator';\n\nfunction NewsList() {\n  const { results, cursor } = useSuspense(NewsResource.list(), {});\n  const getNextPage = usePaginator(NewsResource.list(), {});\n\n  return (\n    <Pagination onPaginate={getNextPage} nextCursor={cursor}>\n      <NewsList data={results} />\n    </Pagination>\n  );\n}\n")))}l.isMDXComponent=!0}}]);