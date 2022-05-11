"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[48610],{36299:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(67294),s=a(95999),n=a(71750);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&l.createElement(n.Z,{permalink:r,title:l.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},69404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(67294),s=a(39960),n=a(4118),r=a(26244),o=a(95999),i=a(88824),g=a(10833),c=a(35281),m=a(36299),p=a(14739),d=a(86010);function u(e){let{tag:t,items:a,sidebar:u,listMetadata:h}=e;const b=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(t.count),tagName:t.label});return l.createElement(g.FG,{className:(0,d.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},l.createElement(g.d,{title:E}),l.createElement(p.Z,{tag:"blog_tags_posts"}),l.createElement(n.Z,{sidebar:u},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(s.Z,{href:t.allTagsPath},l.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(r.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(m.Z,{metadata:h})))}},56922:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294),s=a(15814);const n={React:l,...l,...s}}}]);