"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16802],{96497:(e,s,n)=>{n.d(s,{Z:()=>a});var t=n(9877),o=n(58215),r=n(67294),i=n(87799);function a({pkgs:e,dev:s=!1}){return r.createElement(t.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(o.Z,{value:"yarn"},r.createElement(i.Z,{className:"language-bash"},"yarn add ",s?"--dev ":"",e)),r.createElement(o.Z,{value:"npm"},r.createElement(i.Z,{className:"language-bash"},"npm install --save",s?"Dev ":""," ",e)))}},56922:(e,s,n)=>{n.d(s,{Z:()=>r});var t=n(67294),o=n(15814);const r={React:t,...t,...o}},34696:(e,s,n)=>{n.r(s),n.d(s,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>u,toc:()=>l,default:()=>d});var t=n(87462),o=(n(67294),n(3905)),r=n(96497);const i={title:"Usage with class components"},a=void 0,u={unversionedId:"guides/class-components",id:"version-6.1/guides/class-components",isDocsHomePage:!1,title:"Usage with class components",description:"Hooks are great, but many of us are working with existing codebases or libraries",source:"@site/versioned_docs/version-6.1/guides/class-components.md",sourceDirName:"guides",slug:"/guides/class-components",permalink:"/docs/guides/class-components",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/class-components.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Usage with class components"},sidebar:"version-6.1/docs",previous:{title:"Redux integration",permalink:"/docs/guides/redux"},next:{title:"Usage without Suspense",permalink:"/docs/guides/no-suspense"}},l=[{value:"Install hook-hoc",id:"install-hook-hoc",children:[],level:2},{value:"Use with class",id:"use-with-class",children:[],level:2},{value:"Extracting the function",id:"extracting-the-function",children:[],level:2},{value:"Filters, debounce and more",id:"filters-debounce-and-more",children:[],level:2}],c={toc:l};function d({components:e,...s}){return(0,o.kt)("wrapper",(0,t.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hooks are great, but many of us are working with existing codebases or libraries\nwith class based components. Some might be easy to migrate but others might be\nmore diffcult. Should this block you from adopting rest-hooks? Of course not!"),(0,o.kt)("p",null,"Using the simple ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")," interop library\nwe can create Higher Order Components from hooks quite easily. This enables us\nto easily replace any existing HOC with ease."),(0,o.kt)("h2",{id:"install-hook-hoc"},"Install ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")),(0,o.kt)(r.Z,{pkgs:"hook-hoc",mdxType:"PkgTabs"}),(0,o.kt)("h2",{id:"use-with-class"},"Use with class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(({ id }: { id: number }) => {\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  return { user, friends };\n})(Profile);\n")),(0,o.kt)("p",null,"Here you can see the return value of the function you pass in gets injected into the props\nof the component you wrap."),(0,o.kt)("h2",{id:"extracting-the-function"},"Extracting the function"),(0,o.kt)("p",null,"You might notice the function we pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"withHook()")," is a function that calls\nhooks. That makes it a hook by definition. To make this detectable by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"rules of hooks"),"\nand also potentially reusable, let's move it out to a named function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  return { user, friends };\n}\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(useProfile)(Profile);\n")),(0,o.kt)("h2",{id:"filters-debounce-and-more"},"Filters, debounce and more"),(0,o.kt)("p",null,"Often times you'll be doing a bit more than just retrieving the data. We can\ndo all of that extra work in the hook we just created. Here we'll add some\nclient-side filtering as well as ",(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useDebounce/"},"debouncing")," the requests themselves."),(0,o.kt)("p",null,"You can combine any hooks here - the sky's the limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const debouncedId = useDebounce(id, 150);\n\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  const realFriends = friends.filter(friend => friend.isReal);\n\n  return { user, friends: realFriends };\n}\n\n// rest of file...\n")))}d.isMDXComponent=!0}}]);