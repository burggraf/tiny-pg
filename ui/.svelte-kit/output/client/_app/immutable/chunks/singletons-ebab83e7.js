function _(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function O(){return Object.create(null)}function g(t){t.forEach(V)}function L(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let w;function Et(t,e){return w||(w=document.createElement("a")),w.href=e,t===w.href}function et(t){return Object.keys(t).length===0}function B(t,...e){if(t==null)return _;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function vt(t,e,n){t.$$.on_destroy.push(B(e,n))}function At(t,e,n,r){if(t){const i=z(t,e,n,r);return t[0](i)}}function z(t,e,n,r){return t[1]&&r?Z(n.ctx.slice(),t[1](r(e))):n.ctx}function Nt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const u=[],s=Math.max(e.dirty.length,i.length);for(let c=0;c<s;c+=1)u[c]=e.dirty[c]|i[c];return u}return e.dirty|i}return e.dirty}function St(t,e,n,r,i,u){if(i){const s=z(e,n,r,u);t.p(s,i)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function kt(t){return t??""}let S=!1;function nt(){S=!0}function rt(){S=!1}function it(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,a=(i>0&&e[n[i]].claim_order<=o?i+1:it(1,i,m=>e[n[m]].claim_order,o))-1;r[l]=n[a]+1;const f=a+1;n[f]=l,i=Math.max(f,i)}const u=[],s=[];let c=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(u.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);u.reverse(),s.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<s.length;l++){for(;o<u.length&&s[l].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[l],a)}}function ot(t,e){if(S){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Rt(t,e,n){S&&!n?ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ct(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function Lt(){return C(" ")}function Ct(){return C("")}function Ot(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function It(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:ut(t,e,n)}function at(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,r,i=!1){ft(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function dt(t,e,n,r){return H(t,i=>i.nodeName===e,i=>{const u=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||u.push(c.name)}u.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Dt(t,e,n){return dt(t,e,n,ct)}function _t(t,e){return H(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>C(e),!0)}function Ut(t){return _t(t," ")}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Mt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Pt(t,e,n){t.classList[n?"add":"remove"](e)}function Vt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const u=i.textContent.trim();u===`HEAD_${t}_END`?(r-=1,n.push(i)):u===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Bt(t,e){return new t(e)}let $;function x(t){$=t}function Y(){if(!$)throw new Error("Function called outside component initialization");return $}function zt(t){Y().$$.on_mount.push(t)}function Ht(t){Y().$$.after_update.push(t)}const y=[],I=[],A=[],D=[],G=Promise.resolve();let R=!1;function K(){R||(R=!0,G.then(W))}function Yt(){return K(),G}function j(t){A.push(t)}const k=new Set;let E=0;function W(){const t=$;do{for(;E<y.length;){const e=y[E];E++,x(e),ht(e.$$)}for(x(null),y.length=0,E=0;I.length;)I.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];k.has(n)||(k.add(n),n())}A.length=0}while(y.length);for(;D.length;)D.pop()();R=!1,k.clear(),x(t)}function ht(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const N=new Set;let h;function Gt(){h={r:0,c:[],p:h}}function Kt(){h.r||g(h.c),h=h.p}function mt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Wt(t,e,n,r){if(t&&t.o){if(N.has(t))return;N.add(t),h.c.push(()=>{N.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Xt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function pt(t,e,n,r){const{fragment:i,after_update:u}=t.$$;i&&i.m(e,n),r||j(()=>{const s=t.$$.on_mount.map(V).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),u.forEach(j)}function bt(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&(y.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Jt(t,e,n,r,i,u,s,c=[-1]){const l=$;x(t);const o=t.$$={fragment:null,ctx:[],props:u,update:_,not_equal:i,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:O(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(f,m,...d)=>{const p=d.length?d[0]:m;return o.ctx&&i(o.ctx[f],o.ctx[f]=p)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](p),a&&gt(t,f)),m}):[],o.update(),a=!0,g(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){nt();const f=at(e.target);o.fragment&&o.fragment.l(f),f.forEach(lt)}else o.fragment&&o.fragment.c();e.intro&&mt(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),rt(),W()}x(l)}class Qt{$destroy(){bt(this,1),this.$destroy=_}$on(e,n){if(!L(n))return _;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const b=[];function yt(t,e){return{subscribe:T(t,e).subscribe}}function T(t,e=_){let n;const r=new Set;function i(c){if(tt(t,c)&&(t=c,n)){const l=!b.length;for(const o of r)o[1](),b.push(o,t);if(l){for(let o=0;o<b.length;o+=2)b[o][0](b[o+1]);b.length=0}}}function u(c){i(c(t))}function s(c,l=_){const o=[c,l];return r.add(o),r.size===1&&(n=e(i)||_),c(t),()=>{r.delete(o),r.size===0&&(n(),n=null)}}return{set:i,update:u,subscribe:s}}function Zt(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,u=e.length<2;return yt(n,s=>{let c=!1;const l=[];let o=0,a=_;const f=()=>{if(o)return;a();const d=e(r?l[0]:l,s);u?s(d):a=L(d)?d:_},m=i.map((d,p)=>B(d,Q=>{l[p]=Q,o&=~(1<<p),c&&f()},()=>{o|=1<<p}));return c=!0,f(),function(){g(m),a()}})}let U="",X="";function te(t){U=t.base,X=t.assets||U}let F="";function ee(t){F=t}const ne="sveltekit:scroll",re="sveltekit:index",q={tap:1,hover:2,viewport:3,eager:4,off:-1};function ie(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function se(){return{x:pageXOffset,y:pageYOffset}}function v(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const M={...q,"":q.hover};function J(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function oe(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A")return t;t=J(t)}}function le(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r={rel_external:(t.getAttribute("rel")||"").split(/\s+/).includes("external"),download:t.hasAttribute("download"),target:!!(t instanceof SVGAElement?t.target.baseVal:t.target)},i=!n||$t(n,e)||r.rel_external||r.target||r.download;return{url:n,has:r,external:i}}function ce(t){let e=null,n=null,r=null,i=null,u=t;for(;u&&u!==document.documentElement;)n===null&&(n=v(u,"preload-code")),r===null&&(r=v(u,"preload-data")),e===null&&(e=v(u,"noscroll")),i===null&&(i=v(u,"reload")),u=J(u);return{preload_code:M[n??"off"],preload_data:M[r??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:i==="off"?!1:i===""?!0:null}}function P(t){const e=T(t);let n=!0;function r(){n=!0,e.update(s=>s)}function i(s){n=!1,e.set(s)}function u(s){let c;return e.subscribe(l=>{(c===void 0||n&&l!==c)&&s(c=l)})}return{notify:r,set:i,subscribe:u}}function xt(){const{set:t,subscribe:e}=T(!1);let n;async function r(){clearTimeout(n);const i=await fetch(`${X}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(i.ok){const s=(await i.json()).version!==F;return s&&(t(!0),clearTimeout(n)),s}else throw new Error(`Version check failed: ${i.status}`)}return{subscribe:e,check:r}}function $t(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}let wt;function ue(t){wt=t.client}const ae={url:P({}),page:P({}),navigating:T(null),updated:xt()};export{vt as $,ne as A,ie as B,Yt as C,oe as D,le as E,ce as F,ae as G,$t as H,re as I,se as J,te as K,ue as L,ee as M,Zt as N,yt as O,q as P,Vt as Q,Et as R,Qt as S,It as T,ot as U,_ as V,Ot as W,T as X,Pt as Y,jt as Z,g as _,Lt as a,kt as a0,At as a1,St as a2,Tt as a3,Nt as a4,wt as a5,Rt as b,Ut as c,Kt as d,Ct as e,mt as f,Gt as g,lt as h,Jt as i,Ht as j,ct as k,Dt as l,at as m,ut as n,zt as o,Mt as p,C as q,_t as r,tt as s,Wt as t,qt as u,Bt as v,Xt as w,Ft as x,pt as y,bt as z};
