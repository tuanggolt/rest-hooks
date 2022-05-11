"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[76336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(83117),o=(n(67294),n(3905));const s={title:"Usage with class components",id:"class-components",original_id:"class-components"},i=void 0,a={unversionedId:"guides/class-components",id:"version-4.1/guides/class-components",title:"Usage with class components",description:"Hooks are great, but many of us are working with existing codebases or libraries",source:"@site/versioned_docs/version-4.1/guides/class-components.md",sourceDirName:"guides",slug:"/guides/class-components",permalink:"/docs/4.1/guides/class-components",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/class-components.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Usage with class components",id:"class-components",original_id:"class-components"},sidebar:"version-4.1/docs",previous:{title:"Redux integration",permalink:"/docs/4.1/guides/redux"},next:{title:"Usage without Suspense",permalink:"/docs/4.1/guides/no-suspense"}},c={},l=[{value:"Install hook-hoc",id:"install-hook-hoc",level:2},{value:"Use with class",id:"use-with-class",level:2},{value:"Extracting the function",id:"extracting-the-function",level:2},{value:"Filters, debounce and more",id:"filters-debounce-and-more",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hooks are great, but many of us are working with existing codebases or libraries\nwith class based components. Some might be easy to migrate but others might be\nmore diffcult. Should this block you from adopting rest-hooks? Of course not!"),(0,o.kt)("p",null,"Using the simple ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")," interop library\nwe can create Higher Order Components from hooks quite easily. This enables us\nto easily replace any existing HOC with ease."),(0,o.kt)("h2",{id:"install-hook-hoc"},"Install ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add hook-hoc\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install hook-hoc\n")),(0,o.kt)("h2",{id:"use-with-class"},"Use with class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(({ id }: { id: number }) => {\n  const [user, friends] = useResource(\n    [UserResource.detailShape(), { id }],\n    [UserResource.listShape(), { friendid: id }],\n  );\n  return { user, friends };\n})(Profile);\n")),(0,o.kt)("p",null,"Here you can see the return value of the function you pass in gets injected into the props\nof the component you wrap."),(0,o.kt)("h2",{id:"extracting-the-function"},"Extracting the function"),(0,o.kt)("p",null,"You might notice the function we pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"withHook()")," is a function that calls\nhooks. That makes it a hook by definition. To make this detectable by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"rules of hooks"),"\nand also potentially reusable, let's move it out to a named function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const [user, friends] = useResource(\n    [UserResource.detailShape(), { id }],\n    [UserResource.listShape(), { friendid: id }],\n  );\n  return { user, friends };\n}\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(useProfile)(Profile);\n")),(0,o.kt)("h2",{id:"filters-debounce-and-more"},"Filters, debounce and more"),(0,o.kt)("p",null,"Often times you'll be doing a bit more than just retrieving the data. We can\ndo all of that extra work in the hook we just created. Here we'll add some\nclient-side filtering as well as ",(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useDebounce/"},"debouncing")," the requests themselves."),(0,o.kt)("p",null,"You can combine any hooks here - the sky's the limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const debouncedId = useDebounce(id, 150);\n\n  const [user, friends] = useResource(\n    [UserResource.detailShape(), { id }],\n    [UserResource.listShape(), { friendid: id }],\n  );\n  const realFriends = friends.filter(friend => friend.isReal);\n\n  return { user, friends: realFriends };\n}\n\n// rest of file...\n")))}d.isMDXComponent=!0}}]);