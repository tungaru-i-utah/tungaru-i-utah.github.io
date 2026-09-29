import"./NZTpNUN0.js";import{J as c,K as E,Q as x,aF as R,H as Q,I as V,ad as Z,a9 as q,aG as U,a6 as X,a1 as Y,O as P,N as y,T as $,aH as p,ae as ee,A as te,p as se,a as I,b as ie,Z as oe,g as r,k as ne,m as re,f as ae,s as le,aI as de,r as ce,u as g,aJ as he,aK as T}from"./DGrCm-kJ.js";import{f as F,e as ue,b as fe,i as ge}from"./DFRettjM.js";import{B as be}from"./tgvA5W7T.js";import{p as h,r as we}from"./_I0a2hgm.js";function ke(t,e,n,s,w,S){let k=c;c&&E();var o=null;c&&x.nodeType===R&&(o=x,E());var u=c?x:t,f=new be(u,!1);Q(()=>{const a=e()||null;var N=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,i=>{if(a){if(o=c?o:Z(a,N),q(o,o),s){var d=null;c&&U(a)&&o.append(d=document.createComment(""));var l=c?X(o):o.appendChild(Y());c&&(l===null?P(!1):y(l)),s(o,l),d?.remove()}$.nodes.end=o,i.before(o)}c&&y(i)}),()=>{}},V),p(()=>{}),k&&(P(!0),y(u))}/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},s=i=>n[i]??i,w=t.size??t.width??b.width,S=t.size??t.height??b.height,k=t.aliases?.filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`lucide-${i}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?A(...u):A("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??b["stroke-width"])*Number(t.size??t.width??b.width)/Number(e.size??e.width??b.width):e.strokeWidth??b["stroke-width"];return["svg",{...Object.entries(b).reduce((i,[d,l])=>(i[s(d)]=l,i),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&W(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&W(e.width)&&{[s("width")]:e.width},..."height"in e&&W(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:a,...f&&{[s("class")]:f},[s("viewBox")]:`0 0 ${w} ${S}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(i=>{const[d,l,v]=i,_=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[d,_,v]:[d,_]})]}/**
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
 */const Se=Symbol("lucide-context"),Ne=()=>te(Se);var me=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),xe=oe("<svg><!><!></svg>");function Ee(t,e){se(e,!0);const n=Ne()??{},s=h(e,"color",19,()=>n.color??"currentColor"),w=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,w),k=h(e,"height",19,w),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),N=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),i=we(e,me),d=g(()=>!!e.children||_e(i)),l=g(()=>ve(N(),{color:s(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:A("lucide-icon",n.class),hasA11yProp:r(d),attributes:i})),v=g(()=>T(r(l),3)),_=g(()=>r(v)[1]),L=g(()=>he(r(v)[2],()=>[],!0)),O=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var m=xe();F(m,()=>({...r(O)}));var C=ne(m);ue(C,17,()=>r(L),ge,(D,H)=>{var z=g(()=>T(r(H),2));let M=()=>r(z)[0],G=()=>r(z)[1];var B=re(),J=ae(B);ke(J,M,!0,(K,ye)=>{F(K,()=>({...G()}))}),I(D,B)});var j=le(C);fe(j,()=>e.children??de),ce(m),I(t,m),ie()}export{Ee as I,ke as e};
