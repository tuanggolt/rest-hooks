"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[24112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},40219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={id:"usage",title:"Usage",original_id:"usage"},i=void 0,s={unversionedId:"getting-started/usage",id:"version-4.1/getting-started/usage",title:"Usage",description:"Define a Resource",source:"@site/versioned_docs/version-4.1/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/docs/4.1/getting-started/usage",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/usage.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"usage",title:"Usage",original_id:"usage"},sidebar:"version-4.1/docs",previous:{title:"Installation",permalink:"/docs/4.1/"},next:{title:"Handling loading state",permalink:"/docs/4.1/guides/loading-state"}},l={},c=[{value:"Define a Resource",id:"define-a-resource",level:2},{value:"<code>resources/article.ts</code>",id:"resourcesarticlets",level:4},{value:"Use resource",id:"use-resource",level:2},{value:"Dispatch mutation",id:"dispatch-mutation",level:2},{value:"<code>article.tsx</code>",id:"articletsx",level:4}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"define-a-resource"},"Define a ",(0,a.kt)("a",{parentName:"h2",href:"/docs/4.1/api/resource"},"Resource")),(0,a.kt)("h4",{id:"resourcesarticlets"},(0,a.kt)("inlineCode",{parentName:"h4"},"resources/article.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  +id: ?number = undefined;\n  +title: string = '';\n  +content: string = '';\n  +author: ?number = null;\n  +tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("p",null,"Be sure to add all the properties you expect and mark them as readonly."),(0,a.kt)("p",null,"Also be sure to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," function and ",(0,a.kt)("inlineCode",{parentName:"p"},"static urlRoot")," string."),(0,a.kt)("p",null,"APIs quickly get much more complicated! ",(0,a.kt)("a",{parentName:"p",href:"../guides/resource-types"},"Customizing Resources to fit your API")),(0,a.kt)("h2",{id:"use-resource"},(0,a.kt)("a",{parentName:"h2",href:"/docs/4.1/api/useresource"},"Use resource")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detailShape(), { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ sortBy }: { sortBy: string }) {\n  const articles = useResource(ArticleResource.listShape(), { sortBy });\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")),(0,a.kt)("p",null,"This will automatically fetch the resource if it is not already available. Param changes also results\nin a fetch. Consistency of data is guaranteed even when other components fetch updates and even when\nthose updates are of a different form."),(0,a.kt)("h2",{id:"dispatch-mutation"},(0,a.kt)("a",{parentName:"h2",href:"/docs/4.1/api/useFetcher"},"Dispatch mutation")),(0,a.kt)("h4",{id:"articletsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"article.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function NewArticleForm() {\n  const create = useFetcher(ArticleResource.createShape());\n  // create as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form onSubmit={e => create({}, new FormData(e.target))}>\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create()")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detailShape(), { id });\n  const update = useFetcher(ArticleResource.updateShape());\n  // update as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form\n      onSubmit={e => update({ id }, new FormData(e.target))}\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"update()")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleWithDelete({ article }: { article: ArticleResource }) {\n  const del = useFetcher(ArticleResource.deleteShape());\n  // del as (body: any, params?: Readonly<object>) => Promise<any>\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button onClick={() => del({ id: article.id })}>Delete</button>\n    </article>\n  );\n}\n")),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."))}d.isMDXComponent=!0}}]);