import{j as e}from"./jsx-runtime.BQrSPCSS.js";import{r as x}from"./index.Cj_FO6QK.js";import{c as g}from"./createLucideIcon.BA9dUA82.js";const h=g("MoveLeft",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]),P=g("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]),M=({allPosts:t})=>{const a=Math.ceil(t.length/8),[s,l]=x.useState(1),[r,n]=x.useState(t.slice(8*(s-1),8*s)),i=Math.max(1,Math.min(s-Math.floor(2.5),a-5+1)),c=Math.min(a,i+5-1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-8 p-4",children:r.map((t=>e.jsxs("div",{className:"relative overflow-hidden mx-auto rounded-xl p-4 bg-white border-2 transition-transform duration-500 hover:-translate-y-1 hover:scale-105 dark:bg-neutral-900 m-4 flex flex-col",children:[e.jsx("a",{href:`/posts/documentation/${t.slug}/`,className:"block flex-grow",children:e.jsx("img",{src:t.data.coverSrc,alt:"",className:"w-auto h-auto object-contain"})}),e.jsx("div",{className:"text-center mt-auto",children:e.jsx("p",{className:"text-xl",children:t.data.title})})]})))}),e.jsxs("nav",{className:"mb-8 flex items-center text-black justify-center gap-x-1","aria-label":"Pagination",children:[e.jsx("button",{onClick:()=>{l(s-1),n(t.slice(8*(s-2),8*(s-1)))},"aria-label":"Previous page",className:"inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 rounded-lg px-2.5 py-2 text-sm",children:e.jsx(h,{})}),e.jsx("ul",{className:"flex items-center gap-x-1",children:Array.from({length:c-i+1},((a,r)=>{const c=i+r,o="min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg "+(s===c?"bg-neutral-200 focus:bg-neutral-300 dark:bg-neutral-600 dark:focus:bg-neutral-500 dark:text-white":"text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100");return e.jsx("li",{children:e.jsx("button",{onClick:()=>{l(c),n(t.slice(8*(c-1),8*c))},className:o,children:c})},c)}))}),e.jsx("button",{onClick:()=>{l(s+1),n(t.slice(8*s,8*(s+1)))},"aria-label":"Next page",className:"inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 rounded-lg px-2.5 py-2 text-sm",children:e.jsx(P,{})})]})]})};export{M as default};