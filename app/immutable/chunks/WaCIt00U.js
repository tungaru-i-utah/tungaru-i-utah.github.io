import"./NZTpNUN0.js";import{w as c,x as B,a1 as m,aN as Q,z as Y,ae as Z,a6 as q,_ as J,aO as K,Z as U,aa as X,ad as P,Y as W,E as $,L as p,a7 as ee,W as te,p as ie,a as L,b as se,h as oe,s as ne,V as re,i as r,v as ae,f as le,at as de,r as ce,u as g,aP as he,aQ as T}from"./BU64FNsz.js";import{d as I,e as ue,b as fe,i as ge}from"./D3oAdfa3.js";import{B as we}from"./CQGbl_aH.js";import{p as h,r as be}from"./NnD3rwjX.js";function ke(t,e,n,i,b,S){let k=c;c&&B();var o=null;c&&m.nodeType===Q&&(o=m,B());var u=c?m:t,f=new we(u,!1);Y(()=>{const a=e()||null;var N=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,s=>{if(a){if(o=c?o:q(a,N),J(o,o),i){var d=null;c&&K(a)&&o.append(d=document.createComment(""));var l=c?U(o):o.appendChild(X());c&&(l===null?P(!1):W(l)),i(o,l),d?.remove()}$.nodes.end=o,s.before(o)}c&&W(s)}),()=>{}},Z),p(()=>{}),k&&(P(!0),W(u))}/**
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
 */const z=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function y(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},i=s=>n[s]??s,b=t.size??t.width??w.width,S=t.size??t.height??w.height,k=t.aliases?.filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`lucide-${s}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?z(...u):z("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??w["stroke-width"])*Number(t.size??t.width??w.width)/Number(e.size??e.width??w.width):e.strokeWidth??w["stroke-width"];return["svg",{...Object.entries(w).reduce((s,[d,l])=>(s[i(d)]=l,s),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&y(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&y(e.width)&&{[i("width")]:e.width},..."height"in e&&y(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:a,...f&&{[i("class")]:f},[i("viewBox")]:`0 0 ${b} ${S}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(s=>{const[d,l,v]=s,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[d,_,v]:[d,_]})]}/**
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
 */const Se=Symbol("lucide-context"),Ne=()=>te(Se);var xe=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),me=re("<svg><!><!></svg>");function Be(t,e){ie(e,!0);const n=Ne()??{},i=h(e,"color",19,()=>n.color??"currentColor"),b=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,b),k=h(e,"height",19,b),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),N=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),s=be(e,xe),d=g(()=>!!e.children||_e(s)),l=g(()=>ve(N(),{color:i(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:z("lucide-icon",n.class),hasA11yProp:r(d),attributes:s})),v=g(()=>T(r(l),3)),_=g(()=>r(v)[1]),O=g(()=>he(r(v)[2],()=>[],!0)),j=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var x=me();I(x,()=>({...r(j)}));var C=oe(x);ue(C,17,()=>r(O),ge,(F,M)=>{var A=g(()=>T(r(M),2));let R=()=>r(A)[0],V=()=>r(A)[1];var E=ae(),G=le(E);ke(G,R,!0,(H,We)=>{I(H,()=>({...V()}))}),L(F,E)});var D=ne(C);fe(D,()=>e.children??de),ce(x),L(t,x),se()}export{Be as I,ke as e};
