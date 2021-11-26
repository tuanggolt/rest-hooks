/*! For license information please see de8db8f3.e5f15996.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93049,37103,68047,714,18961,36701,68649,901,18612],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,l,i=o(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))r.call(s,u)&&(i[u]=s[u]);if(t){l=t(s);for(var p=0;p<l.length;p++)n.call(s,l[p])&&(i[l[p]]=s[l[p]])}}return i}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var s=60109,l=60110,i=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),l=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=h.prototype=new b;v.constructor=h,n(v,y.prototype),v.isPureReactComponent=!0;var k=Array.isArray,g=Object.prototype.hasOwnProperty,x={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,a={},s=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)g.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:x.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return s=s(i=e),e=""===n?"."+S(i,0):n,k(s)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),A(s,t,r,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(i=0,n=""===n?".":n+":",k(e))for(var c=0;c<e.length;c++){var u=n+S(l=e[c],c);i+=A(l,t,r,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(l=e.next()).done;)i+=A(l=l.value,t,r,u=n+S(l,c++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function N(e,t,r){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},_={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const o=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},9877:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(87462),o=r(67294),a=r(72389),s=r(80944),l=r(89521),i=r(86010);const c="tabItem_1uMI";function u(e){var t,r;const{lazy:n,block:a,defaultValue:u,values:p,groupId:d,className:f}=e,m=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??m.map((({props:{value:e,label:t}})=>({value:e,label:t}))),b=(0,l.lx)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=m[0])?void 0:r.props.value);if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,s.Z)(),[g,x]=(0,o.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=d){const e=v[d];null!=e&&e!==g&&y.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,r=w.indexOf(t),n=y[r].value;n!==g&&(O(t),x(n),null!=d&&k(d,n))},R=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]||w[w.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},f)},y.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":g===e}),key:e,ref:e=>w.push(e),onKeyDown:R,onFocus:j,onClick:j},t??e)))),n?(0,o.cloneElement)(m.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function p(e){const t=(0,a.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},79443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)(void 0)},80944:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(79443);const a=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},27071:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>d});var n=r(87462),o=(r(27378),r(3905)),a=r(9877),s=r(58215);const l={title:"Mocking data for Storybook"},i=void 0,c={unversionedId:"guides/storybook",id:"guides/storybook",isDocsHomePage:!1,title:"Mocking data for Storybook",description:"Storybook is a great utility to do isolated development and",source:"@site/../docs/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/next/guides/storybook",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/storybook.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Mocking data for Storybook"},sidebar:"docs",previous:{title:"Debugging",permalink:"/docs/next/guides/debugging"},next:{title:"Unit testing hooks",permalink:"/docs/next/guides/unit-testing-hooks"}},u=[{value:"Setup",id:"setup",children:[],level:2},{value:"Fixtures",id:"fixtures",children:[],level:2},{value:"Decorators",id:"decorators",children:[{value:"<code>.storybook/preview.tsx</code>",id:"storybookpreviewtsx",children:[],level:4}],level:2},{value:"Story",id:"story",children:[{value:"<code>ArticleList.stories.tsx</code>",id:"articleliststoriestsx",children:[],level:4}],level:2}],p={toc:u};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is a great utility to do isolated development and\ntesting, potentially speeding up development time greatly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/MockResolver"},"<MockResolver /",">")," enables easy loading of fixtures to see what\ndifferent network responses might look like. It can be layered, composed, and even used\nfor ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/Controller#fetch"},"imperative fetches")," usually used with side-effect endpoints like ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#create-endpoint"},"create")," and ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#update-endpoint"},"update"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(a.Z,{defaultValue:"ArticleResource.ts",values:[{label:"Resource",value:"ArticleResource.ts"},{label:"Component",value:"ArticleList.tsx"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ArticleResource.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"export default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n  declare static fixtures: Record<string, FixtureEndpoint>;\n}\n"))),(0,o.kt)(s.Z,{value:"ArticleList.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleList.tsx"',title:'"ArticleList.tsx"'},"import ArticleResource from 'resources/ArticleResource';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ maxResults }: { maxResults: number }) {\n  const articles = useSuspense(ArticleResource.list(), { maxResults });\n  return (\n    <div>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </div>\n  );\n}\n")))),(0,o.kt)("h2",{id:"fixtures"},"Fixtures"),(0,o.kt)("p",null,"We'll test three cases: some interesting results in the list, an empty list, and data not\nexisting so loading fallback is shown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"// leave out in production so we don't bloat the bundle\nif (process.env.NODE_ENV !== 'production') {\n  ArticleResource.fixtures = {\n    full: [\n      {\n        endpoint: ArticleResource.list(),\n        args: [{ maxResults: 10 }] as const,\n        response: [\n          {\n            id: 5,\n            content: 'have a merry christmas',\n            author: 2,\n            contributors: [],\n          },\n          {\n            id: 532,\n            content: 'never again',\n            author: 23,\n            contributors: [5],\n          },\n        ],\n      },\n      {\n        endpoint: ArticleResource.update(),\n        args: [{ id: 532 }] as const,\n        response: {\n          id: 532,\n          content: 'updated \"never again\"',\n          author: 23,\n          contributors: [5],\n        },\n      },\n    ],\n    empty: [\n      {\n        endpoint: ArticleResource.list(),\n        args: [{ maxResults: 10 }] as const,\n        response: [],\n      },\n    ],\n    error: [\n      {\n        endpoint: ArticleResource.list(),\n        args: [{ maxResults: 10 }] as const,\n        response: { message: 'Bad request', status: 400, name: 'Not Found' },\n        error: true,\n      },\n    ],\n    loading: [],\n  };\n}\n")),(0,o.kt)("h2",{id:"decorators"},"Decorators"),(0,o.kt)("p",null,"You'll need to add the appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators"},"global decorators")," to establish the correct context."),(0,o.kt)("p",null,"This should resemble what you have added in ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation#add-provider-at-top-level-component"},"initial setup")),(0,o.kt)("h4",{id:"storybookpreviewtsx"},(0,o.kt)("inlineCode",{parentName:"h4"},".storybook/preview.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';\n\nexport const decorators = [\n  Story => (\n    <CacheProvider>\n      <Suspense fallback=\"loading\">\n        <NetworkErrorBoundary>\n          <Story />\n        </NetworkErrorBoundary>\n      </Suspense>\n    </CacheProvider>\n  ),\n];\n")),(0,o.kt)("h2",{id:"story"},"Story"),(0,o.kt)("p",null,"Wrapping our component with ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/MockResolver"},"<MockResolver /",">")," enables us to declaratively\ncontrol how Rest Hooks' fetches are resolved."),(0,o.kt)("p",null,"Here we select which fixtures should be used by ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"storybook controls"),"."),(0,o.kt)("h4",{id:"articleliststoriestsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"ArticleList.stories.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MockResolver } from '@rest-hooks/test';\nimport type { Fixture } from '@rest-hooks/test';\nimport { Story } from '@storybook/react/types-6-0';\n\nimport ArticleList from 'ArticleList';\nimport ArticleResource from 'resources/ArticleResource';\n\nexport default {\n  title: 'Pages/ArticleList',\n  component: ArticleList,\n  argTypes: {\n    result: {\n      description: 'Results',\n      defaultValue: 'full',\n      control: {\n        type: 'select',\n        options: Object.keys(ArticleResource.fixtures),\n      },\n    },\n  },\n};\n\nconst Template: Story<{ result: keyof typeof options }> = ({ result }) => (\n  <MockResolver fixtures={options[result]}>\n    <ArticleList maxResults={10} />\n  </MockResolver>\n);\n\nexport const FullArticleList = Template.bind({});\n\nFullArticleList.args = {\n  result: 'full',\n};\n")))}d.isMDXComponent=!0}}]);