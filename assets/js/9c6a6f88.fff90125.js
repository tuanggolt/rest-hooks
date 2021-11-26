/*! For license information please see 9c6a6f88.fff90125.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34090],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,i,u=o(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))n.call(s,l)&&(u[l]=s[l]);if(t){i=t(s);for(var p=0;p<i.length;p++)r.call(s,i[p])&&(u[i[p]]=s[i[p]])}}return u}},41535:(e,t,n)=>{var r=n(62525),o=60103,a=60106;var s=60109,i=60110,u=60112;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),l=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var k=g.prototype=new y;k.constructor=g,r(k,m.prototype),k.isPureReactComponent=!0;var b=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function U(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return s=s(u=e),e=""===r?"."+x(u,0):r,b(s)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),U(s,t,n,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(u=0,r=""===r?".":r+":",b(e))for(var c=0;c<e.length;c++){var l=r+x(i=e[c],c);u+=U(i,t,n,l,s)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),c=0;!(i=e.next()).done;)u+=U(i=i.value,t,n,l=r+x(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,n){if(null==e)return e;var r=[],o=0;return U(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var S={current:null},_={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93242:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>i,toc:()=>u,default:()=>l});var r=n(87462),o=(n(27378),n(3905));const a={title:"Immediate Mutation Updates"},s=void 0,i={unversionedId:"guides/immediate-updates",id:"guides/immediate-updates",isDocsHomePage:!1,title:"Immediate Mutation Updates",description:"When a user causes mutations like creating, updating, or deleting resources, it's important",source:"@site/../docs/guides/immediate-updates.md",sourceDirName:"guides",slug:"/guides/immediate-updates",permalink:"/docs/next/guides/immediate-updates",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/immediate-updates.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Immediate Mutation Updates"},sidebar:"docs",previous:{title:"Render as you Fetch",permalink:"/docs/next/guides/render-as-you-fetch"},next:{title:"Optimistic Updates",permalink:"/docs/next/guides/optimistic-updates"}},u=[{value:"Update",id:"update",children:[],level:2},{value:"Delete",id:"delete",children:[],level:2},{value:"Create",id:"create",children:[],level:2}],c={toc:u};function l({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When a user causes mutations like creating, updating, or deleting resources, it's important\nto have those changed be reflected in the application. A simple publish cache\nthat has no underlying knowledge of the data structures would require a refetch of any endpoints\nthat are changed. This would reduce performance and put extra burden on the backend."),(0,o.kt)("p",null,"However, like many other cases, a normalized cache - one with underlying knowledge of the relationships\nbetween resources - is capable of keeping all data consistent and fresh without\nany refetches."),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("p",null,"Rest Hooks uses your schema definitions to understand how to normalize response data into\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"entity table")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"result table"),". Of course, this means that there is only ever one copy\nof a given ",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),". Aside from providing consistency when using different response endpoints,\nthis means that by providing an accurate schema definition, Rest Hooks can automatically keep\nall data uses consistent and fresh. The default update endpoints ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#update-endpoint"},"Resource.update()")," and\n",(0,o.kt)("a",{parentName:"p",href:"../api/resource#partialupdate-endpoint"},"Resource.partialUpdate()")," both do this automatically. ",(0,o.kt)("a",{parentName:"p",href:"./rpc"},"Read more about defining other\nupdate endpoints")),(0,o.kt)("h2",{id:"delete"},"Delete"),(0,o.kt)("p",null,"Rest Hooks automatically deletes entity entries ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/Delete"},"schema.Delete")," is used.\n",(0,o.kt)("a",{parentName:"p",href:"../api/resource#delete-endpoint"},"Resource.delete()"),"\nprovides such an endpoint."),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("p",null,"Like updates, created entities are automatically added to the entities table. This means\nany components useSuspense() for just that item will be able to access it immediately and\nnot have to wait for an additional retrieval request. However, often new items are created\nwhen viewing an entire list of items, and the create should result in that list - any maybe others -\ndisplaying the newly created entry."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint#update"},"Endpoint.update")," handles this case"),(0,o.kt)("p",null,"Simplest case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId: string) => ({\n    [userList.key()]: (users = []) => [newUserId, ...users],\n  }),\n});\n")),(0,o.kt)("p",null,"More updates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Component.tsx"',title:'"Component.tsx"'},"const allusers = useSuspense(userList);\nconst adminUsers = useSuspense(userList, { admin: true });\n")),(0,o.kt)("p",null,"The endpoint below ensures the new user shows up immediately in the usages above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId, newUser)  => {\n    const updates = {\n      [userList.key()]: (users = []) => [newUserId, ...users],\n    ];\n    if (newUser.isAdmin) {\n      updates[userList.key({ admin: true })] = (users = []) => [newUserId, ...users];\n    }\n    return updates;\n  },\n});\n")),(0,o.kt)("p",null,"This is usage with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/resource"},"Resource")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  static create<T extends typeof Resource>(this: T) {\n    const todoList = this.list();\n    return super.create().extend({\n      schema: this,\n      // highlight-start\n      update: (newResourcePk: string) => ({\n        [todoList.key({})]: (resourcePks: string[] = []) => [\n          ...resourcePks,\n          newResourcePk,\n        ],\n      }),\n      // highlight-end\n    });\n  }\n}\n")),(0,o.kt)("p",null,"Extract the core logic for reuse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  static create<T extends typeof Resource>(this: T) {\n    const todoList = this.list();\n    return super.create().extend({\n      schema: this,\n      update: (newResourcePk: string) => ({\n        // highlight-next-line\n        [todoList.key({})]: this.appendList.bind(this, newResourcePk),\n      }),\n    });\n  }\n\n  // highlight-start\n  static appendList(newResourcePk: string, resourcePks: string[] = []) {\n    if (resourcePks.includes(newResourcePk)) return resourcePks;\n    return [...resourcePks, newResourcePk];\n  }\n  // highlight-end\n}\n")))}l.isMDXComponent=!0}}]);