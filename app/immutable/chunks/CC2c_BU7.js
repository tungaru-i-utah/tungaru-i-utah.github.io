import"./NZTpNUN0.js";import{y as c,z as B,a0 as m,aN as H,x as K,af as Q,a5 as U,Z as X,aO as Y,Y as Z,ab as J,ae as P,X as y,E as $,K as p,a6 as ee,V as te,p as ie,a as T,b as se,k as oe,U as ne,i as r,q as re,f as ae,s as le,at as de,r as ce,u as g,aP as he,aQ as I}from"./CsDE6c2p.js";import{d as L,e as ue,b as fe,i as ge}from"./Cd6W0Mmn.js";import{B as be}from"./CXawLnS-.js";import{p as h,r as we}from"./CjC5Amvm.js";function ke(t,e,n,i,w,S){let k=c;c&&B();var o=null;c&&m.nodeType===H&&(o=m,B());var u=c?m:t,f=new be(u,!1);K(()=>{const a=e()||null;var N=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,s=>{if(a){if(o=c?o:U(a,N),X(o,o),i){var d=null;c&&Y(a)&&o.append(d=document.createComment(""));var l=c?Z(o):o.appendChild(J());c&&(l===null?P(!1):y(l)),i(o,l),d?.remove()}$.nodes.end=o,s.before(o)}c&&y(s)}),()=>{}},Q),p(()=>{}),k&&(P(!0),y(u))}/**
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
 */const z=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},i=s=>n[s]??s,w=t.size??t.width??b.width,S=t.size??t.height??b.height,k=t.aliases?.filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`lucide-${s}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?z(...u):z("lucide",...o,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??b["stroke-width"])*Number(t.size??t.width??b.width)/Number(e.size??e.width??b.width):e.strokeWidth??b["stroke-width"];return["svg",{...Object.entries(b).reduce((s,[d,l])=>(s[i(d)]=l,s),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&W(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&W(e.width)&&{[i("width")]:e.width},..."height"in e&&W(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:a,...f&&{[i("class")]:f},[i("viewBox")]:`0 0 ${w} ${S}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(s=>{const[d,l,v]=s,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...l}:l;return v?[d,_,v]:[d,_]})]}/**
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
 */const Se=Symbol("lucide-context"),Ne=()=>te(Se);var xe=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),me=ne("<svg><!><!></svg>");function Be(t,e){ie(e,!0);const n=Ne()??{},i=h(e,"color",19,()=>n.color??"currentColor"),w=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,w),k=h(e,"height",19,w),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),N=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),s=we(e,xe),d=g(()=>!!e.children||_e(s)),l=g(()=>ve(N(),{color:i(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:z("lucide-icon",n.class),hasA11yProp:r(d),attributes:s})),v=g(()=>I(r(l),3)),_=g(()=>r(v)[1]),O=g(()=>he(r(v)[2],()=>[],!0)),j=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var x=me();L(x,()=>({...r(j)}));var C=oe(x);ue(C,17,()=>r(O),ge,(F,M)=>{var A=g(()=>I(r(M),2));let R=()=>r(A)[0],V=()=>r(A)[1];var E=re(),q=ae(E);ke(q,R,!0,(G,ye)=>{L(G,()=>({...V()}))}),T(F,E)});var D=le(C);fe(D,()=>e.children??de),ce(x),T(t,x),se()}export{Be as I,ke as e};
