"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[25123],{72360:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),s=a(86010);const r="tabItem_OmH5";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,o),hidden:a},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),s=a(67294),r=a(72389),o=a(67392),l=a(7094),i=a(12466),u=a(86010);const c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,a;const{lazy:r,block:d,defaultValue:m,values:h,groupId:g,className:f}=e,k=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=k[0])?void 0:a.props.value);if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.U)(),[I,T]=(0,s.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=g){const e=N[g];null!=e&&e!==I&&v.some((t=>t.value===e))&&T(e)}const R=e=>{const t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==I&&(E(t),T(n),null!=g&&w(g,n))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]||x[x.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,u.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>x.push(e),onKeyDown:Z,onFocus:R,onClick:R},r,{className:(0,u.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":I===t})}),a??t)}))),r?(0,s.cloneElement)(k.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function m(e){const t=(0,r.Z)();return s.createElement(d,(0,n.Z)({key:String(t)},e))}},96497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9877),s=a(72360),r=a(67294),o=a(58173);function l(e){let{pkgs:t,dev:a=!1}=e;return r.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(s.Z,{value:"yarn"},r.createElement(o.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),r.createElement(s.Z,{value:"npm"},r.createElement(o.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(15814);const r={React:n,...n,...s}},48475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(83117),s=(a(67294),a(3905)),r=a(96497),o=a(9877),l=a(72360);const i={title:"Fetching Media"},u=void 0,c={unversionedId:"guides/binary-fetches",id:"version-6.0/guides/binary-fetches",title:"Fetching Media",description:"After setting up Rest Hooks for structured data fetching, you might want to incorporate",source:"@site/versioned_docs/version-6.0/guides/binary-fetches.md",sourceDirName:"guides",slug:"/guides/binary-fetches",permalink:"/docs/6.0/guides/binary-fetches",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/binary-fetches.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Fetching Media"},sidebar:"version-6.0/docs",previous:{title:"Dealing with network errors",permalink:"/docs/6.0/concepts/network-errors"},next:{title:"Infinite Scrolling",permalink:"/docs/6.0/guides/infinite-scrolling-pagination"}},p={},d=[{value:"Storing buffers",id:"storing-buffers",level:2},{value:"Just Images",id:"just-images",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Prefetching",id:"prefetching",level:4}],m={toc:d};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,s.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,s.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," and ",(0,s.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,s.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,s.kt)(o.Z,{defaultValue:"useResource",values:[{label:"useResource",value:"useResource"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"useResource",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useResource(getPhoto, { userId });\n"))),(0,s.kt)(l.Z,{value:"useCache",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,s.kt)(l.Z,{value:"JS/Node",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,s.kt)("h2",{id:"just-images"},"Just Images"),(0,s.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,s.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,s.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,s.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(r.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("details",{open:!0},(0,s.kt)("summary",null,(0,s.kt)("b",null,"Profile.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useResource } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useResource(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,s.kt)("h4",{id:"prefetching"},"Prefetching"),(0,s.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,s.kt)("details",{open:!0},(0,s.kt)("summary",null,(0,s.kt)("b",null,"Profile.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useResource, useRetrieve } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useRetrieve(getImage, { src: imageSrc });\n  const user = useResource(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,s.kt)("p",null,"When using the ",(0,s.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,s.kt)("a",{parentName:"p",href:"../api/useFetcher"},"useFetcher")," with the ",(0,s.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,s.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," to preload the image."))}h.isMDXComponent=!0}}]);