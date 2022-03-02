var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}const u="undefined"!=typeof window;let c=u?()=>window.performance.now():()=>Date.now(),l=u?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach((e=>{e.c(t)||(a.delete(e),e.f())})),0!==a.size&&l(f)}function m(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function v(){return y(" ")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e){t.value=null==e?"":e}function k(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let A;function E(t){A=t}const I=[],C=[],M=[],j=[],S=Promise.resolve();let D=!1;function L(t){M.push(t)}let P=!1;const T=new Set;function z(){if(!P){P=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];E(e),N(e.$$)}for(E(null),I.length=0;C.length;)C.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];T.has(e)||(T.add(e),e())}M.length=0}while(I.length);for(;j.length;)j.pop()();D=!1,P=!1,T.clear()}}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const O=new Set;function q(t,e){-1===t.$$.dirty[0]&&(I.push(t),D||(D=!0,S.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(o,i,u,c,l,a,f,m=[-1]){const h=A;E(o);const p=o.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:i.target||h.$$.root};f&&f(p.root);let b=!1;if(p.ctx=u?u(o,i.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),b&&q(o,t)),e})):[],p.update(),b=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();i.intro&&((g=o.$$.fragment)&&g.i&&(O.delete(g),g.i(y))),function(t,n,o,i){const{fragment:u,on_mount:c,on_destroy:l,after_update:a}=t.$$;u&&u.m(n,o),i||L((()=>{const n=c.map(e).filter(s);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(L)}(o,i.target,i.anchor,i.customElement),z()}var g,y;E(h)}class H{constructor(t,e){if(this.hour=t,this.minute=e,this.alarmIsActive=!0,this.allTime="",t>=24||t<0)throw Error("The hour argument must be between 0 and 23");if(e>60||e<0)throw Error("Error: minute value must be >= 0 and < 60")}tick(){return this.minute+=1,this.minute>=60&&(this.minute=0,this.hour+=1,this.hour>=24&&(this.hour=0)),this.minute<10&&this.hour<10?"0"+this.hour+":0"+this.minute:this.minute<10?this.hour+":0"+this.minute:this.hour<10?"0"+this.hour+":"+this.minute:this.hour+":"+this.minute}time(){return this.minute<10&&this.hour<10?"0"+this.hour+":0"+this.minute:this.minute<10?this.hour+":0"+this.minute:this.hour<10?"0"+this.hour+":"+this.minute:this.hour+":"+this.minute}setAlarm(t,e){this.alarmHour=t,this.alarmMinute=e}deactivateAlarm(){this.alarmIsActive=!1}activateAlarm(){this.alarmIsActive=!0}}const F=[];function R(t){return"[object Date]"===Object.prototype.toString.call(t)}function G(t,e,n,r){if("number"==typeof n||R(n)){const s=r-n,o=(n-e)/(t.dt||1/60),i=(o+(t.opts.stiffness*s-t.opts.damping*o)*t.inv_mass)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(s)<t.opts.precision?r:(t.settled=!1,R(n)?new Date(n.getTime()+i):n+i)}if(Array.isArray(n))return n.map(((s,o)=>G(t,e[o],n[o],r[o])));if("object"==typeof n){const s={};for(const o in n)s[o]=G(t,e[o],n[o],r[o]);return s}throw new Error(`Cannot spring ${typeof n} values`)}function J(e,n={}){const r=function(e,n=t){let r;const s=new Set;function i(t){if(o(e,t)&&(e=t,r)){const t=!F.length;for(const t of s)t[1](),F.push(t,e);if(t){for(let t=0;t<F.length;t+=2)F[t][0](F[t+1]);F.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(o,u=t){const c=[o,u];return s.add(c),1===s.size&&(r=n(i)||t),o(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}(e),{stiffness:s=.15,damping:i=.8,precision:u=.01}=n;let m,h,d,p=e,b=e,g=1,y=0,v=!1;function $(t,n={}){b=t;const s=d={};if(null==e||n.hard||w.stiffness>=1&&w.damping>=1)return v=!0,m=c(),p=t,r.set(e=b),Promise.resolve();if(n.soft){const t=!0===n.soft?.5:+n.soft;y=1/(60*t),g=0}return h||(m=c(),v=!1,h=function(t){let e;return 0===a.size&&l(f),{promise:new Promise((n=>{a.add(e={c:t,f:n})})),abort(){a.delete(e)}}}((t=>{if(v)return v=!1,h=null,!1;g=Math.min(g+y,1);const n={inv_mass:g,opts:w,settled:!0,dt:60*(t-m)/1e3},s=G(n,p,e,b);return m=t,p=e,r.set(e=s),n.settled&&(h=null),!n.settled}))),new Promise((t=>{h.promise.then((()=>{s===d&&t()}))}))}const w={set:$,update:(t,n)=>$(t(b,e),n),subscribe:r.subscribe,stiffness:s,damping:i,precision:u};return w}function K(t,e,n){const r=t.slice();return r[19]=e[n],r}function Q(t,e,n){const r=t.slice();return r[22]=e[n],r}function U(t){let e,n;return{c(){e=g("line"),w(e,"class","minuteLine svelte-g5mbmy"),w(e,"y1","90"),w(e,"y2","78"),w(e,"transform",n="rotate("+6*(t[19]+t[22])+")")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function V(e){let n,r,s,o=[1,2,3,4],i=[];for(let t=0;t<4;t+=1)i[t]=U(Q(e,o,t));return{c(){n=g("line");for(let t=0;t<4;t+=1)i[t].c();s=y(""),w(n,"class","hourLine svelte-g5mbmy"),w(n,"y1","90"),w(n,"y2","78"),w(n,"transform",r="rotate("+6*e[19]+")")},m(t,e){h(t,n,e);for(let n=0;n<4;n+=1)i[n].m(t,e);h(t,s,e)},p:t,d(t){t&&d(n),p(i,t),t&&d(s)}}}function W(e){let n,s,o,i,u,c,l,a,f,A,E,I,C,M,j,S,D,L,P,T,z,N,O,q,B,H,F,R,G,J,Q,U,W,X,Y=e[0][1]+"",Z=e[0][2]+"",tt=[0,5,10,15,20,25,30,35,40,45,50,55],et=[];for(let t=0;t<12;t+=1)et[t]=V(K(e,tt,t));return{c(){n=b("main"),s=g("svg"),o=g("circle");for(let t=0;t<12;t+=1)et[t].c();i=g("line"),c=g("line"),a=v(),f=b("h1"),A=y(e[1]),E=v(),I=b("div"),C=b("p"),M=y(Y),j=v(),S=b("div"),D=b("h2"),L=y(Z),P=v(),T=b("div"),z=b("button"),z.textContent="1",N=v(),O=b("button"),O.textContent="2",q=v(),B=b("button"),B.textContent="3",H=v(),F=b("div"),R=b("input"),G=v(),J=b("input"),Q=v(),U=b("input"),w(o,"class","clock-face svelte-g5mbmy"),w(o,"r","90"),w(i,"class","hour svelte-g5mbmy"),w(i,"y1","60"),w(i,"y2","-12"),w(i,"transform",u="rotate("+(.5*e[3]-180)+")"),w(c,"class","minute svelte-g5mbmy"),w(c,"y1","72"),w(c,"y2","-24"),w(c,"transform",l="rotate("+(6*e[3]-180)+")"),w(s,"class","clock svelte-g5mbmy"),w(s,"viewBox","-100 -10 200 35"),w(f,"class","svelte-g5mbmy"),w(C,"class","svelte-g5mbmy"),w(D,"class","svelte-g5mbmy"),w(S,"class","thirdClock"),w(z,"class","clicker"),w(O,"class","clicker"),w(B,"class","clicker"),w(T,"class","clickerDiv"),k(R,"top","-500px"),w(R,"type","time"),w(R,"class","setAlarm svelte-g5mbmy"),k(J,"top","-350px"),w(J,"type","time"),w(J,"class","setAlarm svelte-g5mbmy"),k(U,"top","-200px"),w(U,"type","time"),w(U,"class","setAlarm svelte-g5mbmy"),w(F,"class","alarmDiv svelte-g5mbmy"),w(n,"class","svelte-g5mbmy")},m(t,r){h(t,n,r),m(n,s),m(s,o);for(let t=0;t<12;t+=1)et[t].m(s,null);m(s,i),m(s,c),m(n,a),m(n,f),m(f,A),m(n,E),m(n,I),m(I,C),m(C,M),m(n,j),m(n,S),m(S,D),m(D,L),m(n,P),m(n,T),m(T,z),m(T,N),m(T,O),m(T,q),m(T,B),m(n,H),m(n,F),m(F,R),_(R,e[2][0]),m(F,G),m(F,J),_(J,e[2][1]),m(F,Q),m(F,U),_(U,e[2][2]),W||(X=[$(z,"click",e[6]),$(O,"click",e[7]),$(B,"click",e[8]),$(R,"input",e[9]),$(J,"input",e[10]),$(U,"input",e[11])],W=!0)},p(t,[e]){8&e&&u!==(u="rotate("+(.5*t[3]-180)+")")&&w(i,"transform",u),8&e&&l!==(l="rotate("+(6*t[3]-180)+")")&&w(c,"transform",l),2&e&&x(A,t[1]),1&e&&Y!==(Y=t[0][1]+"")&&x(M,Y),1&e&&Z!==(Z=t[0][2]+"")&&x(L,Z),4&e&&_(R,t[2][0]),4&e&&_(J,t[2][1]),4&e&&_(U,t[2][2])},i:t,o:t,d(t){t&&d(n),p(et,t),W=!1,r(X)}}}function X(t,e,n){let r,s,o=new H(1,0),u=new H(2,0),c=new H(3,0),l=[o,u,c],a=["00:00","00:00","00:00"],f="",m=[],h=[],d=["",0],p=J(60*o.hour+o.minute);function b(t){n(0,a[t]=l[t].tick(),a),l[t]=l[t],p.set(60*parseInt(o.hour)+parseInt(o.minute)),h=m[t],l[t].alarmHour=h[0],l[t].alarmMinute=h[1],0!=d[1]&&d[0]==t&&(s=d[1],s-=1,d[1]=s),m[t]==l[t].time()?(n(1,f="ALARM"),d=[t,5],n(2,m[t]=0,m)):d[1]<=0&&n(1,f="")}i(t,p,(t=>n(3,r=t))),setInterval(b,1e3,0),setInterval(b,1e3,1),setInterval(b,1e3,2);return[a,f,m,r,p,b,()=>b(0),()=>b(1),()=>b(2),function(){m[0]=this.value,n(2,m)},function(){m[1]=this.value,n(2,m)},function(){m[2]=this.value,n(2,m)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),B(this,t,X,W,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map