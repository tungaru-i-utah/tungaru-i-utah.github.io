import"./NZTpNUN0.js";import{J as d,K as E,Q as x,aY as K,H as Q,I as V,aH as Y,aD as Z,aZ as q,a1 as U,a2 as X,O as P,N as y,T as $,a_ as p,aI as ee,A as te,p as ie,a as I,b as se,ay as oe,g as r,k as ne,m as re,f as ae,s as le,a$ as ce,r as de,u as g,b0 as he,b1 as T}from"./ESpZ_Ygj.js";import{e as D,b as ue}from"./BtXoknv3.js";import{e as fe,i as ge}from"./CKTQcaPo.js";import{B as be}from"./XrPzHAPm.js";import{p as h,r as we}from"./BaROoU0t.js";function ke(t,e,n,i,w,S){let k=d;d&&E();var o=null;d&&x.nodeType===K&&(o=x,E());var u=d?x:t,f=new be(u,!1);Q(()=>{const a=e()||null;var N=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,s=>{if(a){if(o=d?o:Y(a,N),Z(o,o),i){var c=null;d&&q(a)&&o.append(c=document.createComment(""));var l=d?U(o):o.appendChild(X());d&&(l===null?P(!1):y(l)),i(o,l),c?.remove()}$.nodes.end=o,s.before(o)}d&&y(s)}),()=>{}},V),p(()=>{}),k&&(P(!0),y(u))}/**
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
 */const A=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},i=s=>n[s]??s,w=t.size??t.width??b.width,S=t.size??t.height??b.height,k=t.aliases?.filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`lucide-${s}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?A(...u):A("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??b["stroke-width"])*Number(t.size??t.width??b.width)/Number(e.size??e.width??b.width):e.strokeWidth??b["stroke-width"];return["svg",{...Object.entries(b).reduce((s,[c,l])=>(s[i(c)]=l,s),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&W(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&W(e.width)&&{[i("width")]:e.width},..."height"in e&&W(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:a,...f&&{[i("class")]:f},[i("viewBox")]:`0 0 ${w} ${S}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(s=>{const[c,l,v]=s,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[c,_,v]:[c,_]})]}/**
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
 */const Se=Symbol("lucide-context"),Ne=()=>te(Se);var me=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),xe=oe("<svg><!><!></svg>");function Pe(t,e){ie(e,!0);const n=Ne()??{},i=h(e,"color",19,()=>n.color??"currentColor"),w=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,w),k=h(e,"height",19,w),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),N=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),s=we(e,me),c=g(()=>!!e.children||_e(s)),l=g(()=>ve(N(),{color:i(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:A("lucide-icon",n.class),hasA11yProp:r(c),attributes:s})),v=g(()=>T(r(l),3)),_=g(()=>r(v)[1]),L=g(()=>he(r(v)[2],()=>[],!0)),O=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var m=xe();D(m,()=>({...r(O)}));var C=ne(m);fe(C,17,()=>r(L),ge,(F,H)=>{var z=g(()=>T(r(H),2));let M=()=>r(z)[0],R=()=>r(z)[1];var B=re(),G=ae(B);ke(G,M,!0,(J,ye)=>{D(J,()=>({...R()}))}),I(F,B)});var j=le(C);ue(j,()=>e.children??ce),de(m),I(t,m),se()}export{Pe as I,ke as e};
