import"./NZTpNUN0.js";import{x as c,y as B,a1 as m,aN as Q,A as Y,ae as Z,a6 as q,_ as J,aO as K,Z as U,aa as X,ad as P,Y as y,E as $,L as p,a7 as ee,W as te,p as se,a as L,b as ie,h as oe,s as ne,V as re,i as r,m as ae,f as le,as as de,r as ce,u as g,aP as he,aQ as T}from"./B1n7GXzY.js";import{d as I,e as ue,b as fe,i as ge}from"./D5yBPtrH.js";import{B as be}from"./BnvP9o2J.js";import{p as h,r as we}from"./CM9H4OTr.js";function ke(t,e,n,s,w,S){let k=c;c&&B();var o=null;c&&m.nodeType===Q&&(o=m,B());var u=c?m:t,f=new be(u,!1);Y(()=>{const a=e()||null;var N=n||a==="svg"?ee:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,i=>{if(a){if(o=c?o:q(a,N),J(o,o),s){var d=null;c&&K(a)&&o.append(d=document.createComment(""));var l=c?U(o):o.appendChild(X());c&&(l===null?P(!1):y(l)),s(o,l),d?.remove()}$.nodes.end=o,i.before(o)}c&&y(i)}),()=>{}},Z),p(()=>{}),k&&(P(!0),y(u))}/**
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
 */const Se=Symbol("lucide-context"),Ne=()=>te(Se);var xe=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),me=re("<svg><!><!></svg>");function Be(t,e){se(e,!0);const n=Ne()??{},s=h(e,"color",19,()=>n.color??"currentColor"),w=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,w),k=h(e,"height",19,w),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=h(e,"iconNode",19,()=>[]),N=h(e,"icon",19,()=>({node:a(),aliases:[],size:24})),i=we(e,xe),d=g(()=>!!e.children||_e(i)),l=g(()=>ve(N(),{color:s(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:A("lucide-icon",n.class),hasA11yProp:r(d),attributes:i})),v=g(()=>T(r(l),3)),_=g(()=>r(v)[1]),O=g(()=>he(r(v)[2],()=>[],!0)),j=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var x=me();I(x,()=>({...r(j)}));var C=oe(x);ue(C,17,()=>r(O),ge,(F,M)=>{var z=g(()=>T(r(M),2));let R=()=>r(z)[0],V=()=>r(z)[1];var E=ae(),G=le(E);ke(G,R,!0,(H,ye)=>{I(H,()=>({...V()}))}),L(F,E)});var D=ne(C);fe(D,()=>e.children??de),ce(x),L(t,x),ie()}export{Be as I,ke as e};
