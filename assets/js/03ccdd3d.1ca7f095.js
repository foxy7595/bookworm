"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2479],{7176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=n(4848),i=n(8453),o=n(3935),c=n(9048);const s={sidebar_position:1,title:"Introduction",tags:["content-type-builder"]},a="Content Type Builder",d={id:"docs/core/content-type-builder/intro",title:"Introduction",description:"This section is an overview of all the features related to the Content Type Builder:",source:"@site/docs/docs/01-core/content-type-builder/00-intro.md",sourceDirName:"docs/01-core/content-type-builder",slug:"/docs/core/content-type-builder/intro",permalink:"/docs/core/content-type-builder/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/content-type-builder/00-intro.md",tags:[{label:"content-type-builder",permalink:"/tags/content-type-builder"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",tags:["content-type-builder"]},sidebar:"docs",previous:{title:"Content Releases Scheduling",permalink:"/docs/core/content-releases/scheduling"},next:{title:"Introduction",permalink:"/docs/core/data-transfer/intro"}},l={},u=[];function p(e){const t={h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"content-type-builder",children:"Content Type Builder"}),"\n",(0,r.jsx)(t.p,{children:"This section is an overview of all the features related to the Content Type Builder:"}),"\n","\n","\n",(0,r.jsx)(o.A,{items:(0,c.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3935:(e,t,n)=>{n.d(t,{A:()=>y});n(6540);var r=n(8215),i=n(9048),o=n(4783),c=n(877),s=n(3230),a=n(5225);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:o}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),o&&(0,l.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,l.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,l.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,l.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const o=(0,i.d1)(t);return(0,l.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(6540);const i={},o=r.createContext(i);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);