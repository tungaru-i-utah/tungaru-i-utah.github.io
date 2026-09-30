import"./NZTpNUN0.js";import{z as d,A as B,G as x,aX as H,y as X,E as Y,aA as Z,aw as J,aY as K,V as Q,W as U,F as P,D as y,M as $,aZ as p,aB as ee,aE as te,p as ie,a as T,b as se,aq as oe,g as r,k as ne,m as re,f as ae,s as le,a_ as ce,r as de,u as g,a$ as he,b0 as D}from"./ChZp4UqY.js";import{e as F,a as ue}from"./DsNnAS9w.js";import{e as fe,i as ge}from"./Cl7M8Wty.js";import{B as we}from"./DiKlqoWo.js";import{p as h,r as be}from"./DF9lYgmJ.js";function ke(t,e,n,i,b,S){let k=d;d&&B();var o=null;d&&x.nodeType===H&&(o=x,B());var u=d?x:t,f=new we(u,!1);X(()=>{const a=e()||null;var m=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,s=>{if(a){if(o=d?o:Z(a,m),J(o,o),i){var c=null;d&&K(a)&&o.append(c=document.createComment(""));var l=d?Q(o):o.appendChild(U());d&&(l===null?P(!1):y(l)),i(o,l),c?.remove()}$.nodes.end=o,s.before(o)}d&&y(s)}),()=>{}},Y),p(()=>{}),k&&(P(!0),y(u))}/**
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
 */const Se=Symbol("lucide-context"),me=()=>te(Se);var Ne=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),xe=oe("<svg><!><!></svg>");function Pe(t,e){ie(e,!0);const n=me()??{},i=h(e,"color",19,()=>n.color??"currentColor"),b=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,b),k=h(e,"height",19,b),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),m=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),s=be(e,Ne),c=g(()=>!!e.children||_e(s)),l=g(()=>ve(m(),{color:i(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:A("lucide-icon",n.class),hasA11yProp:r(c),attributes:s})),v=g(()=>D(r(l),3)),_=g(()=>r(v)[1]),I=g(()=>he(r(v)[2],()=>[],!0)),L=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var N=xe();F(N,()=>({...r(L)}));var z=ne(N);fe(z,17,()=>r(I),ge,(j,O)=>{var C=g(()=>D(r(O),2));let G=()=>r(C)[0],R=()=>r(C)[1];var E=re(),V=ae(E);ke(V,G,!0,(q,ye)=>{F(q,()=>({...R()}))}),T(j,E)});var M=le(z);ue(M,()=>e.children??ce),de(N),T(t,N),se()}export{Pe as I,ke as e};
