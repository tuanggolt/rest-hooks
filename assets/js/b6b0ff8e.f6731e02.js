/*! For license information please see b6b0ff8e.f6731e02.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[76286],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=k.prototype=new b;v.constructor=k,f(v,g.prototype),v.isPureReactComponent=!0;var w=Array.isArray,R=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var s,o={},a=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)R.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=t[s]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var p=Array(u),c=0;c<u;c++)p[c]=arguments[c+2];o.children=p}if(e&&e.defaultProps)for(s in u=e.defaultProps)void 0===o[s]&&(o[s]=u[s]);return{$$typeof:n,type:e,key:a,ref:i,props:o,_owner:x.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function q(e,t,s,o,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return a=a(u=e),e=""===o?"."+_(u,0):o,w(a)?(s="",null!=e&&(s=e.replace(N,"$&/")+"/"),q(a,t,s,"",(function(e){return e}))):null!=a&&(T(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(N,"$&/")+"/")+e)),t.push(a)),1;if(u=0,o=""===o?".":o+":",w(e))for(var p=0;p<e.length;p++){var c=o+_(i=e[p],p);u+=q(i,t,s,c,a)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),p=0;!(i=e.next()).done;)u+=q(i=i.value,t,s,c=o+_(i,p++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function A(e,t,n){if(null==e)return e;var r=[],s=0;return q(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},P={transition:null}},27378:(e,t,n)=>{n(41535)},56922:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),s=n(15814);const o={React:r,...r,...s}},10742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(87462),s=(n(27378),n(3905)),o=n(95652);const a={title:"Using a custom networking library",sidebar_label:"Custom networking library"},i=void 0,u={unversionedId:"guides/custom-networking",id:"guides/custom-networking",title:"Using a custom networking library",description:"Resource.fetch() wraps the standard fetch.",source:"@site/../docs/guides/custom-networking.md",sourceDirName:"guides",slug:"/guides/custom-networking",permalink:"/docs/guides/custom-networking",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/custom-networking.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1634747974,formattedLastUpdatedAt:"10/20/2021",frontMatter:{title:"Using a custom networking library",sidebar_label:"Custom networking library"},sidebar:"docs",previous:{title:"Capturing Mutation Side-Effects",permalink:"/docs/guides/rpc"},next:{title:"Usage",permalink:"/docs/graphql/usage"}},p={},c=[{value:"Fetch (default)",id:"fetch-default",level:2},{value:"Superagent",id:"superagent",level:2},{value:"Axios",id:"axios",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Resource.fetch()")," wraps the standard ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch"),".\nOne key customization is ensuring every network related error thrown has a\nstatus member. This is useful in distinguishing code errors from networking errors,\nand is used in the ",(0,s.kt)("a",{parentName:"p",href:"../api/NetworkManager"},"NetworkManager"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SimpleResource")," can be used as an abstract class to implement custom fetch methods\nwithout including the default."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you plan on using ",(0,s.kt)("a",{parentName:"p",href:"../api/NetworkErrorBoundary"},"NetworkErrorBoundary")," make sure\nto add a ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," member to errors, as it catches only errors with a ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," member."))),(0,s.kt)("h2",{id:"fetch-default"},"Fetch (default)"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/github/fetch#installation"},"whatwg-fetch")," polyfill will be\nuseful in environments that don't support it, like node and older browsers\n(Internet Explorer). Be sure to include it in any bundles that need it."),(0,s.kt)("p",null,"This implementation is provided as a useful reference for building your own.\nFor the most up-to-date implementation, see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/blob/master/packages/rest-hooks/src/resource/Resource.ts"},"source on master")),(0,s.kt)(o.Z,{className:"language-typescript",mdxType:"CodeBlock"},"import type {\n  SchemaDetail,\n  SchemaList,\n  AbstractInstanceType,\n} from '@rest-hooks/endpoint';\nimport { schema } from '@rest-hooks/endpoint';\n\nimport BaseResource from './BaseResource.js';\nimport type { RestEndpoint } from './types.js';\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n * @see https://resthooks.io/docs/api/resource\n */\nexport default abstract class Resource extends BaseResource {\n  /** Endpoint to get a single entity */\n  static detail<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    (this: RestEndpoint, params: any) => Promise<any>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    undefined\n  > {\n    const endpoint = this.endpoint();\n    return this.memo('#detail', () =>\n      endpoint.extend({\n        schema: this,\n      }),\n    );\n  }\n\n  /** Endpoint to get a list of entities */\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    (this: RestEndpoint, params?: any) => Promise<any>,\n    SchemaList<AbstractInstanceType<T>>,\n    undefined\n  > {\n    const endpoint = this.endpoint();\n    return this.memo('#list', () =>\n      endpoint.extend({\n        schema: [this],\n        url: this.listUrl.bind(this),\n      }),\n    );\n  }\n\n  /** Endpoint to create a new entity (post) */\n  static create<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    (this: RestEndpoint, first: any, second?: any) => Promise<any>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    true\n  > {\n    return this.memo('#create', () => {\n      const endpoint = this.endpointMutate();\n      const instanceFetch = this.fetch.bind(this);\n      return endpoint.extend({\n        fetch(...args) {\n          return instanceFetch(\n            this.url(...args),\n            this.getFetchInit(args[args.length - 1]),\n          );\n        },\n        url: (...args) => {\n          return args.length > 1 ? this.listUrl(args[0]) : this.listUrl();\n        },\n        schema: this,\n      });\n    });\n  }\n\n  /** Endpoint to update an existing entity (put) */\n  static update<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    (this: RestEndpoint, params: any, body: any) => Promise<any>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    true\n  > {\n    const endpoint = this.endpointMutate();\n    return this.memo('#update', () =>\n      endpoint.extend({\n        method: 'PUT',\n        schema: this,\n      }),\n    );\n  }\n\n  /** Endpoint to update a subset of fields of an existing entity (patch) */\n  static partialUpdate<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    (this: RestEndpoint, params: any, body: any) => Promise<any>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    true\n  > {\n    const endpoint = this.endpointMutate();\n    return this.memo('#partialUpdate', () =>\n      endpoint.extend({\n        method: 'PATCH',\n        schema: this,\n      }),\n    );\n  }\n\n  /** Endpoint to delete an entity (delete) */\n  static delete<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    (this: RestEndpoint, params: any) => Promise<any>,\n    schema.Delete<T>,\n    true\n  > {\n    const endpoint = this.endpointMutate();\n    return this.memo('#delete', () =>\n      endpoint.extend({\n        fetch(this: RestEndpoint, params: any) {\n          return endpoint.fetch\n            .call(this, params)\n            .then(res => (res && Object.keys(res).length ? res : params));\n        },\n        method: 'DELETE',\n        schema: new schema.Delete(this),\n      }),\n    );\n  }\n}\n"),(0,s.kt)("h2",{id:"superagent"},"Superagent"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://visionmedia.github.io/superagent/"},"Superagent")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from '@rest-hooks/rest';\nimport type { SuperAgentRequest } from 'superagent';\n\nconst ResourceError = `JSON expected but not returned from API`;\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n */\nexport default abstract class Resource extends SimpleResource {\n  /** A function to mutate all requests for fetch */\n  static fetchPlugin?: (request: SuperAgentRequest) => SuperAgentRequest;\n\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    let req = request[init.method](input).on('error', () => {});\n    if (this.fetchPlugin) req = req.use(this.fetchPlugin);\n    if (init.body) req = req.send(init.body);\n    return req.then(res => {\n      if (isInvalidResponse(res)) {\n        throw new Error(ResourceError);\n      }\n      return res.body;\n    });\n  }\n}\n\nexport const isInvalidResponse = (res: request.Response): boolean => {\n  // Empty is only valid when no response is expect (204)\n  const resEmptyIsExpected = res.text === '' && res.status === 204;\n  const resBodyEmpty = Object.keys(res.body).length === 0;\n  return !(res.type.includes('json') || resEmptyIsExpected) && resBodyEmpty;\n};\n")),(0,s.kt)("h2",{id:"axios"},"Axios"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from '@rest-hooks/rest';\nimport axios from 'axios';\n\nexport default abstract class AxiosResource extends SimpleResource {\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    return await axios[init.method](input, init.body);\n  }\n}\n")))}d.isMDXComponent=!0}}]);