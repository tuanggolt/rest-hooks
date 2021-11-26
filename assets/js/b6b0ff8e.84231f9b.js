/*! For license information please see b6b0ff8e.84231f9b.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[76286],{62525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,s){for(var a,i,l=o(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))n.call(a,u)&&(l[u]=a[u]);if(t){i=t(a);for(var p=0;p<i.length;p++)r.call(a,i[p])&&(l[i[p]]=a[i[p]])}}return l}},41535:(e,t,n)=>{"use strict";var r=n(62525),o=60103,s=60106;var a=60109,i=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),s=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var b=g.prototype=new y;b.constructor=g,r(b,h.prototype),b.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,s={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)v.call(t,r)&&!E.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===s[r]&&(s[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:i,props:s,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case s:l=!0}}if(l)return a=a(l=e),e=""===r?"."+R(l,0):r,k(a)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),O(a,t,n,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(N,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",k(e))for(var c=0;c<e.length;c++){var u=r+R(i=e[c],c);l+=O(i,t,n,u,a)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(i=e.next()).done;)l+=O(i=i.value,t,n,u=r+R(i,c++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function S(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},_={transition:0}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87799:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r=n(87462),o=n(67294),s=n(50776),a=n(86010),i=n(95999),l=n(52263),c=n(91262),u=n(83229);const p="playgroundContainer_1KVM",d="playgroundHeader_2QE7",f="playgroundEditor_PkRz",m="playgroundPreview_1s6C";var h=n(72389);function y({children:e}){return o.createElement("div",{className:(0,a.Z)(d)},e)}function g(){return o.createElement("div",null,"Loading...")}function b(){return o.createElement(o.Fragment,null,o.createElement(y,null,o.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),o.createElement("div",{className:m},o.createElement(c.Z,{fallback:o.createElement(g,null)},(()=>o.createElement(o.Fragment,null,o.createElement(s.i5,null),o.createElement(s.IF,null))))))}function k(){const e=(0,h.Z)();return o.createElement(s.uz,{key:e,className:f})}function v(){return o.createElement(o.Fragment,null,o.createElement(y,null,o.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),o.createElement(k,null))}function w({children:e,transformCode:t,...n}){const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:a}}}}=(0,l.Z)(),i=(0,u.Z)();return o.createElement("div",{className:p},o.createElement(s.nu,(0,r.Z)({code:e.replace(/\n$/,""),transformCode:t||(e=>`${e};`),theme:i},n),"top"===a?o.createElement(o.Fragment,null,o.createElement(b,null),o.createElement(v,null)):o.createElement(o.Fragment,null,o.createElement(v,null),o.createElement(b,null))))}var E=n(56922),j=n(23746);var x=n(87594),N=n.n(x);const R="codeBlockContainer_K1bP",O="codeBlockContent_hGly",S="codeBlockTitle_eoMF",P="codeBlock_23N8",C="copyButton_Ue-o",_="codeBlockLines_39YC";var q=n(89521);const I=/{([\d,-]+)}/,T=["js","jsBlock","jsx","python","html"],A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},Z=["highlight-next-line","highlight-start","highlight-end"],$=(e=T)=>{const t=e.map((e=>{const{start:t,end:n}=A[e];return`(?:${t}\\s*(${Z.join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)};const B=(F=function({children:e,className:t,metastring:n,title:s}){const{prism:l}=(0,q.LU)(),[c,p]=(0,o.useState)(!1),[d,f]=(0,o.useState)(!1);(0,o.useEffect)((()=>{f(!0)}),[]);const m=(0,q.bc)(n)||s,h=(0,o.useRef)(null);let y=[];const g=(0,u.Z)(),b=Array.isArray(e)?e.join(""):e;if(n&&I.test(n)){const e=n.match(I)[1];y=N()(e).filter((e=>e>0))}const k=null==t?void 0:t.split(" ").find((e=>e.startsWith("language-")));let v=null==k?void 0:k.replace(/language-/,"");!v&&l.defaultLanguage&&(v=l.defaultLanguage);let w=b.replace(/\n$/,"");if(0===y.length&&void 0!==v){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return $(["js","jsBlock"]);case"jsx":case"tsx":return $(["js","jsBlock","jsx"]);case"html":return $(["js","jsBlock","html"]);case"python":case"py":return $(["python"]);default:return $()}})(v),n=b.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const s=o+1,a=n[o].match(t);if(null!==a){switch(a.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${s},`;break;case"highlight-start":r=s;break;case"highlight-end":e+=`${r}-${s-1},`}n.splice(o,1)}else o+=1}y=N()(e),w=n.join("\n")}const E=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let s=!1;o.rangeCount>0&&(s=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),s&&(o.removeAllRanges(),o.addRange(s)),r&&r.focus()}(w),p(!0),setTimeout((()=>p(!1)),2e3)};return o.createElement(j.ZP,(0,r.Z)({},j.lG,{key:String(d),theme:g,code:w,language:v}),(({className:e,style:n,tokens:s,getLineProps:l,getTokenProps:u})=>o.createElement("div",{className:(0,a.Z)(R,null==t?void 0:t.replace(/language-[^ ]+/,""))},m&&o.createElement("div",{style:n,className:S},m),o.createElement("div",{className:(0,a.Z)(O,v)},o.createElement("pre",{tabIndex:0,className:(0,a.Z)(e,P,"thin-scrollbar"),style:n},o.createElement("code",{className:_},s.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=l({line:e,key:t});return y.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},u({token:e,key:t}))))),o.createElement("br",null))})))),o.createElement("button",{ref:h,type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(C,"clean-btn"),onClick:E},c?o.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))},e=>e.live?o.createElement(w,(0,r.Z)({scope:E.Z},e)):o.createElement(F,e));var F},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n(15814);const s={React:r,...r,...o}},10742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(27378),n(3905)),s=n(87799);const a={title:"Using a custom networking library",sidebar_label:"Custom networking library"},i=void 0,l={unversionedId:"guides/custom-networking",id:"guides/custom-networking",isDocsHomePage:!1,title:"Using a custom networking library",description:"Resource.fetch() wraps the standard fetch.",source:"@site/../docs/guides/custom-networking.md",sourceDirName:"guides",slug:"/guides/custom-networking",permalink:"/docs/next/guides/custom-networking",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/custom-networking.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1634747974,formattedLastUpdatedAt:"10/20/2021",frontMatter:{title:"Using a custom networking library",sidebar_label:"Custom networking library"},sidebar:"docs",previous:{title:"Capturing Mutation Side-Effects",permalink:"/docs/next/guides/rpc"},next:{title:"Usage",permalink:"/docs/next/graphql/usage"}},c=[{value:"Fetch (default)",id:"fetch-default",children:[],level:2},{value:"Superagent",id:"superagent",children:[],level:2},{value:"Axios",id:"axios",children:[],level:2}],u={toc:c};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Resource.fetch()")," wraps the standard ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch"),".\nOne key customization is ensuring every network related error thrown has a\nstatus member. This is useful in distinguishing code errors from networking errors,\nand is used in the ",(0,o.kt)("a",{parentName:"p",href:"../api/NetworkManager"},"NetworkManager"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SimpleResource")," can be used as an abstract class to implement custom fetch methods\nwithout including the default."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you plan on using ",(0,o.kt)("a",{parentName:"p",href:"../api/NetworkErrorBoundary"},"NetworkErrorBoundary")," make sure\nto add a ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," member to errors, as it catches only errors with a ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," member."))),(0,o.kt)("h2",{id:"fetch-default"},"Fetch (default)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/github/fetch#installation"},"whatwg-fetch")," polyfill will be\nuseful in environments that don't support it, like node and older browsers\n(Internet Explorer). Be sure to include it in any bundles that need it."),(0,o.kt)("p",null,"This implementation is provided as a useful reference for building your own.\nFor the most up-to-date implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/blob/master/packages/rest-hooks/src/resource/Resource.ts"},"source on master")),(0,o.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"import SimpleResource from '@rest-hooks/rest/SimpleResource';\n\nclass NetworkError extends Error {\n  declare status: number;\n  declare response: Response;\n  name = 'NetworkError';\n\n  constructor(response: Response) {\n    super(\n      response.statusText ||\n        /* istanbul ignore next */ `Network response not 'ok': ${response.status}`,\n    );\n    this.status = response.status;\n    this.response = response;\n  }\n}\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n * @see https://resthooks.io/docs/api/resource\n */\nexport default abstract class Resource extends SimpleResource {\n  /** Perform network request and resolve with HTTP Response */\n  static fetchResponse(input: RequestInfo, init: RequestInit) {\n    let options: RequestInit = init;\n    if (!options.body || typeof options.body === 'string') {\n      options = {\n        ...options,\n        headers: {\n          'Content-Type': 'application/json',\n          ...options.headers,\n        },\n      };\n    }\n    return fetch(input, options)\n      .then(response => {\n        if (!response.ok) {\n          throw new NetworkError(response);\n        }\n        return response;\n      })\n      .catch(error => {\n        // ensure CORS, network down, and parse errors are still caught by NetworkErrorBoundary\n        if (error instanceof TypeError) {\n          (error as any).status = 400;\n        }\n        throw error;\n      });\n  }\n\n  /** Perform network request and resolve with json body */\n  static fetch(input: RequestInfo, init: RequestInit) {\n    return this.fetchResponse(input, init).then((response: Response) => {\n      if (\n        !response.headers.get('content-type')?.includes('json') ||\n        response.status === 204\n      )\n        return response.text();\n      return response.json().catch(error => {\n        error.status = 400;\n        throw error;\n      });\n    });\n  }\n}\n"),(0,o.kt)("h2",{id:"superagent"},"Superagent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://visionmedia.github.io/superagent/"},"Superagent")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from '@rest-hooks/rest';\nimport type { SuperAgentRequest } from 'superagent';\n\nconst ResourceError = `JSON expected but not returned from API`;\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n */\nexport default abstract class Resource extends SimpleResource {\n  /** A function to mutate all requests for fetch */\n  static fetchPlugin?: (request: SuperAgentRequest) => SuperAgentRequest;\n\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    let req = request[init.method](input).on('error', () => {});\n    if (this.fetchPlugin) req = req.use(this.fetchPlugin);\n    if (init.body) req = req.send(init.body);\n    return req.then(res => {\n      if (isInvalidResponse(res)) {\n        throw new Error(ResourceError);\n      }\n      return res.body;\n    });\n  }\n}\n\nexport const isInvalidResponse = (res: request.Response): boolean => {\n  // Empty is only valid when no response is expect (204)\n  const resEmptyIsExpected = res.text === '' && res.status === 204;\n  const resBodyEmpty = Object.keys(res.body).length === 0;\n  return !(res.type.includes('json') || resEmptyIsExpected) && resBodyEmpty;\n};\n")),(0,o.kt)("h2",{id:"axios"},"Axios"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from '@rest-hooks/rest';\nimport axios from 'axios';\n\nexport default abstract class AxiosResource extends SimpleResource {\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    return await axios[init.method](input, init.body);\n  }\n}\n")))}p.isMDXComponent=!0},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,s]=t;if(r&&s){r=parseInt(r),s=parseInt(s);const e=r<s?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(s+=e);for(let t=r;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);