/*! For license information please see 87264463.144ddc22.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[98981],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function k(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=k.prototype;var b=v.prototype=new g;b.constructor=v,h(b,k.prototype),b.isPureReactComponent=!0;var w=Array.isArray,E=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var p=Array(c),l=0;l<c;l++)p[l]=arguments[l+2];a.children=p}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+j(c,0):a,w(i)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),T(i,t,o,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",w(e))for(var p=0;p<e.length;p++){var l=a+j(s=e[p],p);c+=T(s,t,o,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),p=0;!(s=e.next()).done;)c+=T(s=s.value,t,o,l=a+j(s,p++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},I={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(83117),o=(n(27378),n(3905));const a={title:"TypeScript Types"},i=void 0,s={unversionedId:"api/types",id:"api/types",title:"TypeScript Types",description:"@rest-hooks/core",source:"@site/../docs/api/types.md",sourceDirName:"api",slug:"/api/types",permalink:"/docs/api/types",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/types.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"TypeScript Types"},sidebar:"docs",previous:{title:"Legacy browser support",permalink:"/docs/guides/legacy-browser"},next:{title:"Controller",permalink:"/docs/api/Controller"}},c={},p=[{value:"@rest-hooks/core",id:"rest-hookscore",level:2},{value:"Manager",id:"manager",level:3},{value:"NetworkError",id:"networkerror",level:3},{value:"UnknownError",id:"unknownerror",level:3},{value:"@rest-hooks/endpoint",id:"rest-hooksendpoint",level:2},{value:"EndpointInterface",id:"endpointinterface",level:3},{value:"EndpointInstance",id:"endpointinstance",level:3},{value:"FetchFunction",id:"fetchfunction",level:3},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:2},{value:"RestEndpoint",id:"restendpoint",level:3},{value:"RestFetch",id:"restfetch",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rest-hookscore"},"@rest-hooks/core"),(0,o.kt)("h3",{id:"manager"},"Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Manager {\n  getMiddleware(): Middleware;\n  cleanup(): void;\n  init?: (state: State<any>) => void;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./Manager"},"More")),(0,o.kt)("h3",{id:"networkerror"},"NetworkError"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface NetworkError extends Error {\n  status: number;\n  response?: Response;\n}\n")),(0,o.kt)("h3",{id:"unknownerror"},"UnknownError"),(0,o.kt)("p",null,"This is a catch-all for errors thrown in fetch functions. It is recommended\nto try to conform to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkError")," interface above"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type UnknownError = Error & { status?: unknown; response?: unknown };\n")),(0,o.kt)("h2",{id:"rest-hooksendpoint"},"@rest-hooks/endpoint"),(0,o.kt)("h3",{id:"endpointinterface"},"EndpointInterface"),(0,o.kt)("p",null,"The bare requirements for an endpoint-type. This is useful\nfor typing function parameters (like hooks), as it is accepting of any correct\nimplementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n> extends EndpointExtraOptions {\n  (...args: Parameters<F>): InferReturn<F, S>;\n  key(...args: Parameters<F>): string;\n  readonly sideEffect?: M;\n  readonly schema?: S;\n}\n")),(0,o.kt)("p",null,"e.g.,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCache<E extends EndpointInterface>(\n  endpoint: E,\n  params: Parameters<E>[0],\n);\n")),(0,o.kt)("h3",{id:"endpointinstance"},"EndpointInstance"),(0,o.kt)("p",null,"An instance of the ",(0,o.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EndpointInstance<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n>;\n")),(0,o.kt)("p",null,"This is useful to specify types explicitly, instead of implicitly in construction.\nBeing explicit reduces TypeScript computational overhead when inferring types, which\nis sometimes necessary to avoid tripping the recursion depth limit. This is one of the reasons why\nthere is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md"},"eslint rule to explicitly specify return types of methods/functions"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const userDetail: EndpointInstance<FetchFunction<{\n  id: string;\n}>> = new Endpoint(({ id }) => fetch(`/users/${id}`));\n\nclass User extends Entity {\n  static detail<T extends User>(\n    this: T,\n  ): EndpointInstance<\n    FetchFunction<{\n      id: string;\n    }>,\n    T,\n    undefined\n  > {\n    return new Endpoint(({ id }) => fetch(`/users/${id}`), { schema: this });\n  }\n\n  /** Expected Body payload is a subset of the properties of User\n  *  Expected Response is all the properties of User\n  */\n  static update<T extends User>(\n    this: T,\n  ): EndpointInstance<\n    FetchFunction<\n      {\n        id: string;\n      },\n      Partial<T>,\n      // return value is plain object - this is an easy way to extract public members from this class' interface\n      Omit<T, never>\n    >,\n    T,\n    true\n  > {\n    return new Endpoint(({ id }) => fetch(`/users/${id}`, { method: 'PUT' }), {\n      schema: this,\n    });\n  }\n}\n")),(0,o.kt)("h3",{id:"fetchfunction"},"FetchFunction"),(0,o.kt)("p",null,"Represents a function that does actual fetch. Convenient type to specify\nonly part of the function's type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type FetchFunction<P = any, B = any, R = any> = (\n  params?: P,\n  body?: B,\n) => Promise<R>;\n")),(0,o.kt)("p",null,"Providing a function type that returns a Promise also works."),(0,o.kt)("h2",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,o.kt)("h3",{id:"restendpoint"},"RestEndpoint"),(0,o.kt)("p",null,"Is a specialized form of Endpoint that includes additional extension points\nfor easy customization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RestEndpoint<\n  F extends FetchFunction = RestFetch,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n  U extends any[] = any,\n> extends EndpointInstance<F, S, M> {\n  url: (...args: U) => string;\n  fetchInit: RequestInit;\n  getFetchInit: (\n    this: any,\n    body?: RequestInit['body'] | Record<string, any>,\n  ) => any;\n  method: string;\n  signal: AbortSignal | undefined;\n}\n")),(0,o.kt)("h3",{id:"restfetch"},"RestFetch"),(0,o.kt)("p",null,"Fetch function for Resources. Unlike ",(0,o.kt)("a",{parentName:"p",href:"#fetchfunction"},"FetchFunction"),", these require the params variable\nas ",(0,o.kt)("a",{parentName:"p",href:"./resource"},"Resource")," expects it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type RestFetch<A extends readonly any[] = any[], R = any> = (\n  this: RestEndpoint,\n  ...args: A\n) => Promise<R>;\n")))}u.isMDXComponent=!0}}]);