"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[64581],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5358:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(83117),o=(t(67294),t(3905));const a={title:"Dealing with network errors"},i=void 0,s={unversionedId:"concepts/network-errors",id:"version-4.1/concepts/network-errors",title:"Dealing with network errors",description:"When you use the useResource() hook, React will suspend rendering while the network",source:"@site/versioned_docs/version-4.1/concepts/network-errors.md",sourceDirName:"concepts",slug:"/concepts/network-errors",permalink:"/docs/4.1/concepts/network-errors",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/concepts/network-errors.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Dealing with network errors"}},l={},u=[{value:"Error Boundary",id:"error-boundary",level:2},{value:"Without Error Boundary",id:"without-error-boundary",level:2},{value:"Errors from Mutates (imperative)",id:"errors-from-mutates-imperative",level:2}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useResource()")," hook, React will suspend rendering while the network\nrequest takes place. But what happens if there is a network failure? It will\nthrow the network error. When this happens you'll want to have an\n",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"error boundary")," set up to handle it.\nMost likely you'll want to place one specifically for network errors at the same place\nyou put your ",(0,o.kt)("inlineCode",{parentName:"p"},"<Suspense>"),". What you do with the error once you catch it, is of course\nup to you."),(0,o.kt)("h2",{id:"error-boundary"},"Error Boundary"),(0,o.kt)("p",null,"This library provides ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkErrorBoundary")," component that only catches network\nerrors and sends them to a fallback component you provide. Other errors will rethrow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\nimport { RouteChildrenProps } from 'react-router';\n\nconst App = ({ location }: RouteChildrenProps) => (\n  <Suspense fallback={<Spinner />}>\n    <NetworkErrorBoundary>\n      <Routes />\n    </NetworkErrorBoundary>\n  </Suspense>\n)\n")),(0,o.kt)("p",null,"Alternatively you could create your own error boundary where you might\ntry dispatching the errors to another provider to use in a transient\npopup."),(0,o.kt)("p",null,"Additionally you could also use one error boundary for any error\ntype and handle network errors there."),(0,o.kt)("h2",{id:"without-error-boundary"},"Without Error Boundary"),(0,o.kt)("p",null,"Error boundaries provide elegant ways to reduce complexity by handling many\nerrors in the react tree in one location. However, if you find yourself wanting to handle\nerror state manually you can adapt the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/guides/no-suspense"},"useStatefulResource()")," hook."),(0,o.kt)("h2",{id:"errors-from-mutates-imperative"},"Errors from Mutates (imperative)"),(0,o.kt)("p",null,"Since mutations are called imperatively, their function will throw an error if there\nis a network error like 400 because the form values were invalid."),(0,o.kt)("p",null,"Let's look at the update form example from the introduction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  const update = useFetcher(ArticleResource.update());\n  // update as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form\n      onSubmit={e => update({ id }, new FormData(e.target))}\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,o.kt)("p",null,"The function we pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Form />")," calls the update fetch. This means that it\nwill pass through any errors that occur with that fetch."),(0,o.kt)("p",null,"To handle this the Form component should control form error state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Form({ onSubmit, initialValues, children }: FormState) {\n  const [errors, setErrors] = useState<null | Error>(null);\n  const formData = useFormData(); // this is an example interface\n\n  const handleSubmit = useCallback(() => {\n    try {\n      return onSubmit(formData);\n    } catch(e) {\n      // We set the form error state when we catch an error from our network call\n      setErrors(e);\n    }\n  }, [setErrors, onSubmit]);\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Show the form errors at the top */}\n      <FormError error={error} />\n      {children}\n    </form>\n  )\n}\n")))}p.isMDXComponent=!0}}]);