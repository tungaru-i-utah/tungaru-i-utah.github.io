import{b as V,c as Z,a as B,d as q}from"./BRpZ35hq.js";import{h as d,a as P,e as x,aZ as J,b as K,E as U,aQ as X,P as Y,O as p,d as T,c as y,n as $,M as ee,a_ as te,a$ as ie,p as se,w as oe,f as ne,A as r,i as re,b0 as ae,y as le,g as ce,F as g,b1 as de,b2 as F}from"./CFJccstd.js";import{e as I,s as he}from"./CDrGdCyK.js";import{e as ue,i as fe}from"./B7N2Qt4y.js";import{f as ge}from"./C7VDGGNJ.js";import{B as be}from"./YXN8P4BP.js";import{p as h,r as we}from"./mZ_3MJA6.js";function ke(t,e,n,i,w,S){let k=d;d&&P();var o=null;d&&x.nodeType===J&&(o=x,P());var u=d?x:t,f=new be(u,!1);K(()=>{const l=e()||null;var m=te;if(l===null){f.ensure(null,null);return}return f.ensure(l,s=>{if(l){if(o=d?o:X(l,m),V(o,o),i){var c=null;d&&ge(l)&&o.append(c=document.createComment(""));var a=d?Y(o):o.appendChild(p());d&&(a===null?T(!1):y(a)),i(o,a),c?.remove()}$.nodes.end=o,s.before(o)}d&&y(s)}),()=>{}},U),ee(()=>{}),k&&(T(!0),y(u))}/**
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
 */function W(t){return t!=null}function ve(t,e={}){const n=e.attributeNames??{},i=s=>n[s]??s,w=t.size??t.width??b.width,S=t.size??t.height??b.height,k=t.aliases?.filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`lucide-${s}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...k],u=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?A(...u):A("lucide",...o,...u),l=e.absoluteStrokeWidth?Number(e.strokeWidth??b["stroke-width"])*Number(t.size??t.width??b.width)/Number(e.size??e.width??b.width):e.strokeWidth??b["stroke-width"];return["svg",{...Object.entries(b).reduce((s,[c,a])=>(s[i(c)]=a,s),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&W(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&W(e.width)&&{[i("width")]:e.width},..."height"in e&&W(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:l,...f&&{[i("class")]:f},[i("viewBox")]:`0 0 ${w} ${S}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(s=>{const[c,a,v]=s,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...a}:a;return v?[c,_,v]:[c,_]})]}/**
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
 */const Se=Symbol("lucide-context"),me=()=>ie(Se);var Ne=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),xe=q("<svg><!><!></svg>");function Te(t,e){se(e,!0);const n=me()??{},i=h(e,"color",19,()=>n.color??"currentColor"),w=h(e,"size",19,()=>n.size??24),S=h(e,"width",19,w),k=h(e,"height",19,w),o=h(e,"strokeWidth",19,()=>n.strokeWidth??2),u=h(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=h(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),l=h(e,"iconNode",19,()=>[]),m=h(e,"icon",19,()=>({node:l(),aliases:[],size:24})),s=we(e,Ne),c=g(()=>!!e.children||_e(s)),a=g(()=>ve(m(),{color:i(),width:S(),height:k(),strokeWidth:o(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:A("lucide-icon",n.class),hasA11yProp:r(c),attributes:s})),v=g(()=>F(r(a),3)),_=g(()=>r(v)[1]),L=g(()=>de(r(v)[2],()=>[],!0)),M=g(()=>({...r(_),class:[...r(_).class.split(" "),e.class]}));var N=xe();I(N,()=>({...r(M)}));var C=oe(N);ue(C,17,()=>r(L),fe,(j,D)=>{var z=g(()=>F(r(D),2));let R=()=>r(z)[0],G=()=>r(z)[1];var E=Z(),H=ne(E);ke(H,R,!0,(Q,ye)=>{I(Q,()=>({...G()}))}),B(j,E)});var O=re(C);he(O,()=>e.children??ae),le(N),B(t,N),ce()}export{Te as I};
