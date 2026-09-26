import"./NZTpNUN0.js";import{G as d,H as E,a8 as x,aG as K,J as V,aa as X,aH as Y,aI as q,aJ as Q,a9 as U,a1 as Z,a6 as P,a7 as y,D as $,O as p,aK as ee,Y as te,p as se,a as I,b as ie,i as oe,s as ne,X as re,j as r,v as ae,f as le,am as ce,r as de,u as g,aL as he,aM as L}from"./DTL_mC1p.js";import{h as T,e as ue,f as fe,g as ge}from"./el_GfRbD.js";import{B as we}from"./BgNIBlni.js";import{p as h,r as be}from"./Bk03o-Yq.js";function ke(t,e,n,s,b,S){let k=d;d&&E();var o=null;d&&x.nodeType===K&&(o=x,E());var u=d?x:t,f=new we(u,!1);V(()=>{const a=e()||null;var N=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,i=>{if(a){if(o=d?o:Y(a,N),q(o,o),s){var c=null;d&&Q(a)&&o.append(c=document.createComment(""));var l=d?U(o):o.appendChild(Z());d&&(l===null?P(!1):y(l)),s(o,l),c?.remove()}$.nodes.end=o,i.before(o)}d&&y(i)}),()=>{}},X),p(()=>{}),k&&(P(!0),y(u))}/**
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
 */const C=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},s=i=>n[i]??i,b=t.size??t.width??w.width,S=t.size??t.height??w.height,k=t.aliases?.filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`lucide-${i}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?C(...u):C("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??w["stroke-width"])*Number(t.size??t.width??w.width)/Number(e.size??e.width??w.width):e.strokeWidth??w["stroke-width"];return["svg",{...Object.entries(w).reduce((i,[c,l])=>(i[s(c)]=l,i),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&W(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&W(e.width)&&{[s("width")]:e.width},..."height"in e&&W(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:a,...f&&{[s("class")]:f},[s("viewBox")]:`0 0 ${b} ${S}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(i=>{const[c,l,v]=i,_=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[c,_,v]:[c,_]})]}/**
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
 */const Se=Symbol("lucide-context"),Ne=()=>te(Se);var me=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),xe=re("<svg><!><!></svg>");function Ee(t,e){se(e,!0);const n=Ne()??{},s=h(e,"color",19,()=>n.color??"currentColor"),b=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,b),k=h(e,"height",19,b),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),N=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),i=be(e,me),c=g(()=>!!e.children||_e(i)),l=g(()=>ve(N(),{color:s(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:C("lucide-icon",n.class),hasA11yProp:r(c),attributes:i})),v=g(()=>L(r(l),3)),_=g(()=>r(v)[1]),j=g(()=>he(r(v)[2],()=>[],!0)),D=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var m=xe();T(m,()=>({...r(D)}));var z=oe(m);ue(z,17,()=>r(j),ge,(O,F)=>{var A=g(()=>L(r(F),2));let G=()=>r(A)[0],H=()=>r(A)[1];var B=ae(),J=le(B);ke(J,G,!0,(R,ye)=>{T(R,()=>({...H()}))}),I(O,B)});var M=ne(z);fe(M,()=>e.children??ce),de(m),I(t,m),ie()}export{Ee as I,ke as e};
