import{d as K,a as E,b as Q,c as U}from"./BJInNtUR.js";import{x as d,y as P,R as x,aV as X,A as Y,U as q,aj as J,T as Z,K as p,P as T,Q as y,v as $,G as ee,aW as te,_ as ie,p as se,a as oe,c as ne,s as re,g as r,f as ae,ai as le,r as ce,u as g,aX as de,aY as j}from"./NmtKrYcu.js";import{j as I,e as he,g as ue,h as fe}from"./BRQ8ldew.js";import{i as ge}from"./CadLpt_Q.js";import{B as we}from"./BwyyCk5i.js";import{p as h,r as be}from"./BBMs81TQ.js";function ke(t,e,n,i,b,S){let k=d;d&&P();var o=null;d&&x.nodeType===X&&(o=x,P());var u=d?x:t,f=new we(u,!1);Y(()=>{const a=e()||null;var m=n||a==="svg"?te:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,s=>{if(a){if(o=d?o:J(a,m),K(o,o),i){var c=null;d&&ge(a)&&o.append(c=document.createComment(""));var l=d?Z(o):o.appendChild(p());d&&(l===null?T(!1):y(l)),i(o,l),c?.remove()}$.nodes.end=o,s.before(o)}d&&y(s)}),()=>{}},q),ee(()=>{}),k&&(T(!0),y(u))}/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},i=s=>n[s]??s,b=t.size??t.width??w.width,S=t.size??t.height??w.height,k=t.aliases?.filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`lucide-${s}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?A(...u):A("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??w["stroke-width"])*Number(t.size??t.width??w.width)/Number(e.size??e.width??w.width):e.strokeWidth??w["stroke-width"];return["svg",{...Object.entries(w).reduce((s,[c,l])=>(s[i(c)]=l,s),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&W(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&W(e.width)&&{[i("width")]:e.width},..."height"in e&&W(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:a,...f&&{[i("class")]:f},[i("viewBox")]:`0 0 ${b} ${S}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(s=>{const[c,l,v]=s,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[c,_,v]:[c,_]})]}/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=Symbol("lucide-context"),me=()=>ie(Se);var Ne=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),xe=Q("<svg><!><!></svg>");function Pe(t,e){se(e,!0);const n=me()??{},i=h(e,"color",19,()=>n.color??"currentColor"),b=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,b),k=h(e,"height",19,b),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),m=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),s=be(e,Ne),c=g(()=>!!e.children||_e(s)),l=g(()=>ve(m(),{color:i(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:A("lucide-icon",n.class),hasA11yProp:r(c),attributes:s})),v=g(()=>j(r(l),3)),_=g(()=>r(v)[1]),L=g(()=>de(r(v)[2],()=>[],!0)),D=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var N=xe();I(N,()=>({...r(D)}));var C=ne(N);he(C,17,()=>r(L),fe,(M,O)=>{var z=g(()=>j(r(O),2));let R=()=>r(z)[0],G=()=>r(z)[1];var B=U(),V=ae(B);ke(V,R,!0,(H,ye)=>{I(H,()=>({...G()}))}),E(M,B)});var F=re(C);ue(F,()=>e.children??le),ce(N),E(t,N),oe()}export{Pe as I,ke as e};
