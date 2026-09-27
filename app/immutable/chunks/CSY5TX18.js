import"./NZTpNUN0.js";import{A as d,B as E,a1 as m,aN as H,z as Q,ag as Y,a6 as Z,_ as J,aO as K,Z as U,ac as X,af as P,Y as W,G as $,M as p,a7 as ee,W as te,p as se,a as T,b as ie,j as oe,V as ne,l as r,q as re,f as ae,s as le,at as ce,r as de,u as g,aP as he,aQ as j}from"./B_enzkuD.js";import{d as I,e as ue,b as fe,i as ge}from"./Cr5zgA7J.js";import{B as be}from"./Bk_8njHL.js";import{p as h,r as we}from"./BehBauIz.js";function ke(t,e,n,s,w,S){let k=d;d&&E();var o=null;d&&m.nodeType===H&&(o=m,E());var u=d?m:t,f=new be(u,!1);Q(()=>{const a=e()||null;var N=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,i=>{if(a){if(o=d?o:Z(a,N),J(o,o),s){var c=null;d&&K(a)&&o.append(c=document.createComment(""));var l=d?U(o):o.appendChild(X());d&&(l===null?P(!1):W(l)),s(o,l),c?.remove()}$.nodes.end=o,i.before(o)}d&&W(i)}),()=>{}},Y),p(()=>{}),k&&(P(!0),W(u))}/**
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
 */const z=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function y(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},s=i=>n[i]??i,w=t.size??t.width??b.width,S=t.size??t.height??b.height,k=t.aliases?.filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`lucide-${i}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?z(...u):z("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??b["stroke-width"])*Number(t.size??t.width??b.width)/Number(e.size??e.width??b.width):e.strokeWidth??b["stroke-width"];return["svg",{...Object.entries(b).reduce((i,[c,l])=>(i[s(c)]=l,i),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&y(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&y(e.width)&&{[s("width")]:e.width},..."height"in e&&y(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:a,...f&&{[s("class")]:f},[s("viewBox")]:`0 0 ${w} ${S}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(i=>{const[c,l,v]=i,_=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[c,_,v]:[c,_]})]}/**
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
 */const Se=Symbol("lucide-context"),Ne=()=>te(Se);var xe=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),me=ne("<svg><!><!></svg>");function Ee(t,e){se(e,!0);const n=Ne()??{},s=h(e,"color",19,()=>n.color??"currentColor"),w=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,w),k=h(e,"height",19,w),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),N=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),i=we(e,xe),c=g(()=>!!e.children||_e(i)),l=g(()=>ve(N(),{color:s(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:z("lucide-icon",n.class),hasA11yProp:r(c),attributes:i})),v=g(()=>j(r(l),3)),_=g(()=>r(v)[1]),L=g(()=>he(r(v)[2],()=>[],!0)),M=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var x=me();I(x,()=>({...r(M)}));var A=oe(x);ue(A,17,()=>r(L),ge,(D,F)=>{var C=g(()=>j(r(F),2));let G=()=>r(C)[0],R=()=>r(C)[1];var B=re(),V=ae(B);ke(V,G,!0,(q,We)=>{I(q,()=>({...R()}))}),T(D,B)});var O=le(A);fe(O,()=>e.children??ce),de(x),T(t,x),ie()}export{Ee as I,ke as e};
