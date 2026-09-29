import"./NZTpNUN0.js";import{x as d,y as E,_ as x,aL as V,w as X,U as Y,al as q,ah as J,aM as K,ag as Q,ab as Z,Y as P,X as y,a1 as $,I as p,am as ee,O as te,p as ie,a as I,b as se,aa as oe,g as r,i as ne,m as re,f as ae,s as le,aN as ce,r as de,j as g,aO as he,aP as L}from"./LVloKznS.js";import{f as O,e as ue,a as fe,i as ge}from"./FKtxepnJ.js";import{B as we}from"./BLea960m.js";import{p as h,r as be}from"./D76Ag0Vr.js";function ke(t,e,n,i,b,S){let k=d;d&&E();var o=null;d&&x.nodeType===V&&(o=x,E());var u=d?x:t,f=new we(u,!1);X(()=>{const a=e()||null;var N=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,s=>{if(a){if(o=d?o:q(a,N),J(o,o),i){var c=null;d&&K(a)&&o.append(c=document.createComment(""));var l=d?Q(o):o.appendChild(Z());d&&(l===null?P(!1):y(l)),i(o,l),c?.remove()}$.nodes.end=o,s.before(o)}d&&y(s)}),()=>{}},Y),p(()=>{}),k&&(P(!0),y(u))}/**
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
 */const C=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},i=s=>n[s]??s,b=t.size??t.width??w.width,S=t.size??t.height??w.height,k=t.aliases?.filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`lucide-${s}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?C(...u):C("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??w["stroke-width"])*Number(t.size??t.width??w.width)/Number(e.size??e.width??w.width):e.strokeWidth??w["stroke-width"];return["svg",{...Object.entries(w).reduce((s,[c,l])=>(s[i(c)]=l,s),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&W(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&W(e.width)&&{[i("width")]:e.width},..."height"in e&&W(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:a,...f&&{[i("class")]:f},[i("viewBox")]:`0 0 ${b} ${S}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(s=>{const[c,l,v]=s,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[c,_,v]:[c,_]})]}/**
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
 */const Se=Symbol("lucide-context"),Ne=()=>te(Se);var me=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),xe=oe("<svg><!><!></svg>");function Ee(t,e){ie(e,!0);const n=Ne()??{},i=h(e,"color",19,()=>n.color??"currentColor"),b=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,b),k=h(e,"height",19,b),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),N=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),s=be(e,me),c=g(()=>!!e.children||_e(s)),l=g(()=>ve(N(),{color:i(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:C("lucide-icon",n.class),hasA11yProp:r(c),attributes:s})),v=g(()=>L(r(l),3)),_=g(()=>r(v)[1]),T=g(()=>he(r(v)[2],()=>[],!0)),j=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var m=xe();O(m,()=>({...r(j)}));var z=ne(m);ue(z,17,()=>r(T),ge,(D,F)=>{var A=g(()=>L(r(F),2));let R=()=>r(A)[0],G=()=>r(A)[1];var B=re(),H=ae(B);ke(H,R,!0,(U,ye)=>{O(U,()=>({...G()}))}),I(D,B)});var M=le(z);fe(M,()=>e.children??ce),de(m),I(t,m),se()}export{Ee as I,ke as e};
