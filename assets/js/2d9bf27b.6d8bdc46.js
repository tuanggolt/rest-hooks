"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[77284],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=s,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(h,a(a({ref:r},l),{},{components:t})):n.createElement(h,a({ref:r},l))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},52792:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(83117),s=(t(67294),t(3905));const o={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)",id:"nested-response",original_id:"nested-response"},a=void 0,i={unversionedId:"guides/nested-response",id:"version-4.2/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/versioned_docs/version-4.2/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/docs/4.2/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/nested-response.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)",id:"nested-response",original_id:"nested-response"},sidebar:"version-4.2/docs",previous:{title:"Multi-column primary key",permalink:"/docs/4.2/guides/multi-pk"},next:{title:"Capturing Mutation Side-Effects",permalink:"/docs/4.2/guides/rpc"}},c={},u=[{value:"asSchema",id:"asschema",level:2},{value:"<code>resources/ArticleResource.ts</code>",id:"resourcesarticleresourcets",level:4},{value:"<code>ArticleList.tsx</code>",id:"articlelisttsx",level:4},{value:"Circular dependencies",id:"circular-dependencies",level:2},{value:"<code>resources/ArticleResource.ts</code>",id:"resourcesarticleresourcets-1",level:4},{value:"<code>resources/UserResource.ts</code>",id:"resourcesuserresourcets",level:4}],l={toc:u};function d(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,s.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,s.kt)("a",{parentName:"p",href:"/docs/4.2/api/resource"},"Resource")," defintion.\nThese should be the primary keys of the entities we care about."),(0,s.kt)("p",null,"Next we'll need to extend the schema definition provided by ",(0,s.kt)("a",{parentName:"p",href:"/docs/4.2/api/resource#static-getentityschema-schemaentity-https-githubcom-ntucker-normalizr-blob-master-docs-apimd-entitykey-definition-options"},"asSchema()"),"."),(0,s.kt)("h2",{id:"asschema"},"asSchema"),(0,s.kt)("h4",{id:"resourcesarticleresourcets"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/ArticleResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Resource, schemas, AbstractInstanceType } from 'rest-hooks';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema = {\n    author: UserResource.asSchema(),\n    contributors: [UserResource.asSchema()],\n  };\n}\n")),(0,s.kt)("p",null,"Upon fetching the nested items will end up in the cache so they can be retrieved with ",(0,s.kt)("a",{parentName:"p",href:"/docs/4.2/api/useCache"},"useCache()")),(0,s.kt)("h4",{id:"articlelisttsx"},(0,s.kt)("inlineCode",{parentName:"h4"},"ArticleList.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/ArticleResource';\n\nexport default function ArticleList({ id }: { id: number }) {\n  const articles = useResource(ArticleResource.listShape(), { id });\n\n  return (\n    <React.Fragment>\n      {articles.map(article => (\n        <ArticleInline key={article.pk()} article={article} />\n      ))}\n    </React.Fragment>\n  );\n}\n\nfunction ArticleInline({ article }: { article: ArticleResource }) {\n  const author = useCache(UserResource.detailShape(), { id: article.author });\n  // some jsx here\n}\n")),(0,s.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,s.kt)("p",null,"If two or more ",(0,s.kt)("a",{parentName:"p",href:"/docs/4.2/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,s.kt)("a",{parentName:"p",href:"/docs/4.2/api/resource#static-getentityschema-schemaentity-https-githubcom-ntucker-normalizr-blob-master-docs-apimd-entitykey-definition-options"},"asSchema()")," to avoid circular imports."),(0,s.kt)("h4",{id:"resourcesarticleresourcets-1"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/ArticleResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, schemas, AbstractInstanceType } from 'rest-hooks';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema = {\n    author: UserResource.asSchema(),\n    contributors: [UserResource.asSchema()],\n  };\n}\n\nUserResource.schema = {\n  posts: [ArticleResource.asSchema()],\n};\n")),(0,s.kt)("h4",{id:"resourcesuserresourcets"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/UserResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n// no need to import ArticleResource as the asSchema() override happens there.\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}d.isMDXComponent=!0}}]);