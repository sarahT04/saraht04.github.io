function M(){}function et(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function I(){return Object.create(null)}function $(t){t.forEach(K)}function Q(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function $t(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function nt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function vt(t,e,n){t.$$.on_destroy.push(it(e,n))}function Et(t,e,n,i){if(t){const r=R(t,e,n,i);return t[0](r)}}function R(t,e,n,i){return t[1]&&i?et(n.ctx.slice(),t[1](i(e))):n.ctx}function Nt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)a[u]=e.dirty[u]|r[u];return a}return e.dirty|r}return e.dirty}function St(t,e,n,i,r,a){if(r){const c=R(e,n,i,a);t.p(c,r)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let j=!1;function rt(){j=!0}function ct(){j=!1}function st(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function lt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:st(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[f]+1;const d=f+1;n[d]=s,r=Math.max(d,r)}const a=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(a.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);a.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<a.length&&c[s].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;t.insertBefore(c[s],f)}}function ut(t,e){if(j){for(lt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){j&&!n?ut(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function at(t){t.parentNode&&t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function jt(){return z(" ")}function Ct(){return z("")}function Ot(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,r=!1){dt(t);const a=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function W(t,e,n,i){return U(t,r=>r.nodeName===e,r=>{const a=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||a.push(u.name)}a.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Bt(t,e,n){return W(t,e,n,ot)}function Lt(t,e,n){return W(t,e,n,ft)}function ht(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Pt(t){return ht(t," ")}function Tt(t,e){e=""+e,t.data!==e&&(t.data=e)}function zt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Dt(t,e){return new t(e)}let E;function v(t){E=t}function V(){if(!E)throw new Error("Function called outside component initialization");return E}function Ft(t){V().$$.on_mount.push(t)}function Ht(t){V().$$.after_update.push(t)}const b=[],G=[];let w=[];const J=[],X=Promise.resolve();let P=!1;function Y(){P||(P=!0,X.then(Z))}function It(){return Y(),X}function T(t){w.push(t)}const L=new Set;let x=0;function Z(){if(x!==0)return;const t=E;do{try{for(;x<b.length;){const e=b[x];x++,v(e),mt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(v(null),b.length=0,x=0;G.length;)G.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];L.has(n)||(L.add(n),n())}w.length=0}while(b.length);for(;J.length;)J.pop()();P=!1,L.clear(),v(t)}function mt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function pt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}const A=new Set;let g;function Gt(){g={r:0,c:[],p:g}}function Jt(){g.r||$(g.c),g=g.p}function tt(t,e){t&&t.i&&(A.delete(t),t.i(e))}function yt(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Kt(t,e){yt(t,1,1,()=>{e.delete(t.key)})}function Qt(t,e,n,i,r,a,c,u,s,l,f,d){let _=t.length,m=a.length,h=_;const C={};for(;h--;)C[t[h].key]=h;const N=[],O=new Map,q=new Map,D=[];for(h=m;h--;){const o=d(r,a,h),p=n(o);let y=c.get(p);y?i&&D.push(()=>y.p(o,e)):(y=l(p,o),y.c()),O.set(p,N[h]=y),p in C&&q.set(p,Math.abs(h-C[p]))}const F=new Set,H=new Set;function B(o){tt(o,1),o.m(u,f),c.set(o.key,o),f=o.first,m--}for(;_&&m;){const o=N[m-1],p=t[_-1],y=o.key,S=p.key;o===p?(f=o.first,_--,m--):O.has(S)?!c.has(y)||F.has(y)?B(o):H.has(S)?_--:q.get(y)>q.get(S)?(H.add(y),B(o)):(F.add(S),_--):(s(p,c),_--)}for(;_--;){const o=t[_];O.has(o.key)||s(o,c)}for(;m;)B(N[m-1]);return $(D),N}function Rt(t){t&&t.c()}function Ut(t,e){t&&t.l(e)}function gt(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||T(()=>{const c=t.$$.on_mount.map(K).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),a.forEach(T)}function xt(t,e){const n=t.$$;n.fragment!==null&&(pt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(b.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,a,c,u=[-1]){const s=E;v(t);const l=t.$$={fragment:null,ctx:[],props:a,update:M,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),f&&bt(t,d)),_}):[],l.update(),f=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){rt();const d=_t(e.target);l.fragment&&l.fragment.l(d),d.forEach(at)}else l.fragment&&l.fragment.c();e.intro&&tt(t.$$.fragment),gt(t,e.target,e.anchor,e.customElement),ct(),Z()}v(s)}class Vt{$destroy(){xt(this,1),this.$destroy=M}$on(e,n){if(!Q(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{gt as A,xt as B,Et as C,St as D,kt as E,Nt as F,ut as G,M as H,vt as I,$t as J,ft as K,Lt as L,T as M,Ot as N,Mt as O,$ as P,Qt as Q,Kt as R,Vt as S,it as T,Q as U,jt as a,At as b,Pt as c,yt as d,Ct as e,Jt as f,tt as g,at as h,Wt as i,Ht as j,ot as k,Bt as l,_t as m,qt as n,Ft as o,zt as p,z as q,ht as r,wt as s,It as t,Tt as u,Gt as v,G as w,Dt as x,Rt as y,Ut as z};
