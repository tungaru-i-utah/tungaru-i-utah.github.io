import"./NZTpNUN0.js";import{L as d,M as B,S as x,a_ as H,J as K,K as Q,aG as X,aJ as Y,aE as q,a$ as U,a3 as Z,a4 as $,Q as P,P as y,V as p,b0 as ee,C as te,p as ie,a as L,b as se,az as oe,g as r,k as ne,m as re,f as ae,s as le,aY as ce,r as de,u as g,b1 as he,aX as T}from"./C30omy08.js";import{f as I,a as ue}from"./Dca3GMP1.js";import{e as fe,i as ge}from"./wzsmSsD0.js";import{B as be}from"./U9kW-bmJ.js";import{p as h,r as we}from"./CZABjS7e.js";function ke(t,e,n,i,w,S){let k=d;d&&B();var o=null;d&&x.nodeType===H&&(o=x,B());var u=d?x:t,f=new be(u,!1);K(()=>{const a=e()||null;var m=n||a==="svg"?Y:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,s=>{if(a){if(o=d?o:X(a,m),q(o,o),i){var c=null;d&&U(a)&&o.append(c=document.createComment(""));var l=d?Z(o):o.appendChild($());d&&(l===null?P(!1):y(l)),i(o,l),c?.remove()}p.nodes.end=o,s.before(o)}d&&y(s)}),()=>{}},Q),ee(()=>{}),k&&(P(!0),y(u))}/**
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
 */const C=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},i=s=>n[s]??s,w=t.size??t.width??b.width,S=t.size??t.height??b.height,k=t.aliases?.filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`lucide-${s}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?C(...u):C("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??b["stroke-width"])*Number(t.size??t.width??b.width)/Number(e.size??e.width??b.width):e.strokeWidth??b["stroke-width"];return["svg",{...Object.entries(b).reduce((s,[c,l])=>(s[i(c)]=l,s),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&W(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&W(e.width)&&{[i("width")]:e.width},..."height"in e&&W(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:a,...f&&{[i("class")]:f},[i("viewBox")]:`0 0 ${w} ${S}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(s=>{const[c,l,v]=s,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[c,_,v]:[c,_]})]}/**
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
 */const Se=Symbol("lucide-context"),me=()=>te(Se);var Ne=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),xe=oe("<svg><!><!></svg>");function Pe(t,e){ie(e,!0);const n=me()??{},i=h(e,"color",19,()=>n.color??"currentColor"),w=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,w),k=h(e,"height",19,w),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),m=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),s=we(e,Ne),c=g(()=>!!e.children||_e(s)),l=g(()=>ve(m(),{color:i(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:C("lucide-icon",n.class),hasA11yProp:r(c),attributes:s})),v=g(()=>T(r(l),3)),_=g(()=>r(v)[1]),M=g(()=>he(r(v)[2],()=>[],!0)),j=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var N=xe();I(N,()=>({...r(j)}));var z=ne(N);fe(z,17,()=>r(M),ge,(F,O)=>{var A=g(()=>T(r(O),2));let G=()=>r(A)[0],J=()=>r(A)[1];var E=re(),R=ae(E);ke(R,G,!0,(V,ye)=>{I(V,()=>({...J()}))}),L(F,E)});var D=le(z);ue(D,()=>e.children??ce),de(N),L(t,N),se()}export{Pe as I,ke as e};
