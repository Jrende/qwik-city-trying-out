import{s as Me,r as We,m as $e}from"./q-BYe26nOZ.js";import{getNotFound as He}from"./@qwik-city-not-found-paths.js";import{isStaticPath as Z}from"./@qwik-city-static-paths.js";import{createReadStream as Ne}from"node:fs";import{join as R,basename as Le,extname as je}from"node:path";import{fileURLToPath as pe}from"node:url";import{Http2ServerRequest as Ie}from"node:http2";import{TextEncoderStream as Ue,TextDecoderStream as ze,WritableStream as Fe,ReadableStream as Qe}from"node:stream/web";import{fetch as Ge,Headers as Be,Request as Ee,Response as Je,FormData as Ke}from"undici";import Xe from"crypto";import{_ as Ye,a as Ze,v as Ve}from"./q-DExUwTsQ.js";import"dotenv/config";import qe from"./@qwik-city-plan.js";import K from"express";import"body-scroll-lock-upgrade";import"sqlite3";import"ramda";var et=class extends Error{constructor(e,t){super(),this.status=e,this.data=t}},ge=class extends Error{constructor(e,t){super(t),this.status=e}};function tt(e,t){let n="Server Error";return t!=null&&(typeof t.message=="string"?n=t.message:n=String(t)),"<html>"+ye(e,n)+"</html>"}function ye(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=rt(t):t="";const n=typeof t=="string"?"600px":"300px",r=e>=500?it:at;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var nt=/[&<>]/g,rt=e=>e.replace(nt,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),at="#006ce9",it="#713fc2",st={lax:"Lax",Lax:"Lax",None:"None",none:"None",strict:"Strict",Strict:"Strict"},ot={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},V=(e,t,n)=>{const r=[`${e}=${t}`];typeof n.domain=="string"&&r.push(`Domain=${n.domain}`),typeof n.maxAge=="number"?r.push(`Max-Age=${n.maxAge}`):Array.isArray(n.maxAge)?r.push(`Max-Age=${n.maxAge[0]*ot[n.maxAge[1]]}`):typeof n.expires=="number"||typeof n.expires=="string"?r.push(`Expires=${n.expires}`):n.expires instanceof Date&&r.push(`Expires=${n.expires.toUTCString()}`),n.httpOnly&&r.push("HttpOnly"),typeof n.path=="string"&&r.push(`Path=${n.path}`);const s=lt(n.sameSite);return s&&r.push(`SameSite=${s}`),n.secure&&r.push("Secure"),r.join("; ")};function q(e){try{return decodeURIComponent(e)}catch{return e}}var ct=e=>{const t={};if(typeof e=="string"&&e!==""){const n=e.split(";");for(const r of n){const s=r.indexOf("=");s!==-1&&(t[q(r.slice(0,s).trim())]=q(r.slice(s+1).trim()))}}return t};function lt(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return st[e]}var D=Symbol("request-cookies"),W=Symbol("response-cookies"),x=Symbol("live-cookies"),we,be,ft=class{constructor(e){this[we]={},this[be]={},this.appendCounter=0,this[D]=ct(e),this[x]={...this[D]}}get(e,t=!0){const n=this[t?x:D][e];return n?{value:n,json(){return JSON.parse(n)},number(){return Number(n)}}:null}getAll(e=!0){return Object.keys(this[e?x:D]).reduce((t,n)=>(t[n]=this.get(n),t),{})}has(e,t=!0){return!!this[t?x:D][e]}set(e,t,n={}){this[x][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[W][e]=V(e,r,n)}append(e,t,n={}){this[x][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[W][++this.appendCounter]=V(e,r,n)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[x][e]=null}headers(){return Object.values(this[W])}};we=W,be=x;var X=class{},$=class extends X{},ee=new WeakMap,te="qaction",dt="qfunc",ne="qdata";function ut(e){const{url:t,params:n,request:r,status:s,locale:a}=e,o={};r.headers.forEach((y,w)=>o[w]=y);const i=e.sharedMap.get(U),l=e.sharedMap.get(_e),c=e.sharedMap.get(Ae),f=e.sharedMap.get(Dt),u=e.request.headers,d=new URL(t.pathname+t.search,t),m=u.get("X-Forwarded-Host"),p=u.get("X-Forwarded-Proto");return m&&(d.port="",d.host=m),p&&(d.protocol=p),{url:d.href,requestHeaders:o,locale:a(),nonce:f,containerAttributes:{"q:route":c},qwikcity:{routeName:c,ev:e,params:{...n},loadedRoute:kt(e),response:{status:s(),loaders:z(e),action:i,formData:l}}}}var ht=(e,t,n,r,s)=>{const a=[],o=[],i=[],l=!!(t&&bt(t[2]));if(e&&re(a,o,i,e,l,n),t){const c=t[0];r&&(n==="POST"||n==="PUT"||n==="PATCH"||n==="DELETE")&&i.unshift(St),l&&((n==="POST"||n==="GET")&&i.push(gt),i.push(yt),i.push(xt)),i.push(vt),re(a,o,i,t[2],l,n),l&&(i.push(f=>{f.sharedMap.set(Ae,c)}),i.push(mt(a,o)),i.push(s))}return i},re=(e,t,n,r,s,a)=>{for(const o of r){typeof o.onRequest=="function"?n.push(o.onRequest):Array.isArray(o.onRequest)&&n.push(...o.onRequest);let i;switch(a){case"GET":{i=o.onGet;break}case"POST":{i=o.onPost;break}case"PUT":{i=o.onPut;break}case"PATCH":{i=o.onPatch;break}case"DELETE":{i=o.onDelete;break}case"OPTIONS":{i=o.onOptions;break}case"HEAD":{i=o.onHead;break}}if(typeof i=="function"?n.push(i):Array.isArray(i)&&n.push(...i),s){const l=Object.values(o).filter(f=>ae(f,"server_loader"));e.push(...l);const c=Object.values(o).filter(f=>ae(f,"server_action"));t.push(...c)}}},ae=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function mt(e,t){return async n=>{if(n.headersSent){n.exit();return}const{method:r}=n,s=z(n),a=F(n)==="dev",o=n[I];if(a&&r==="GET"&&n.query.has(te)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),r==="POST"){const i=n.query.get(te);if(i){const l=globalThis._qwikActionsMap,c=t.find(f=>f.__id===i)??(l==null?void 0:l.get(i));if(c){n.sharedMap.set(U,i);const f=await n.parseBody();if(!f||typeof f!="object")throw new Error("Expected request data to be an object");const u=await ie(n,c.__validators,f,a);if(!u.success)s[i]=n.fail(u.status??500,u.error);else{const d=a?await N(n,c.__qrl.getSymbol().split("_",1)[0],()=>c.__qrl.call(n,u.data,n)):await c.__qrl.call(n,u.data,n);a&&H(o,d,c.__qrl),s[i]=d}}}}e.length>0&&await Promise.all(e.map(i=>{const l=i.__id;return s[l]=ie(n,i.__validators,void 0,a).then(c=>c.success?a?N(n,i.__qrl.getSymbol().split("_",1)[0],()=>i.__qrl.call(n,n)):i.__qrl.call(n,n):n.fail(c.status??500,c.error)).then(c=>(typeof c=="function"?s[l]=c():(a&&H(o,c,i.__qrl),s[l]=c),c))}))}}async function ie(e,t,n,r){let s={success:!0,data:n};if(t)for(const a of t)if(r?s=await N(e,"validator$",()=>a.validate(e,n)):s=await a.validate(e,n),s.success)n=s.data;else return s;return s}function pt(e){return e?typeof e=="object"&&Symbol.asyncIterator in e:!1}async function gt(e){const t=e.query.get(dt);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const n=F(e)==="dev",r=e[I],s=await e.parseBody();if(Array.isArray(s)){const[a,...o]=s;if(wt(a)&&a.getHash()===t){let i;try{n?i=await N(e,`server_${a.getSymbol()}`,()=>a.apply(e,o)):i=await a.apply(e,o)}catch(l){if(l instanceof et){e.headers.set("Content-Type","application/qwik-json"),e.send(l.status,await r._serializeData(l.data,!0));return}e.headers.set("Content-Type","application/qwik-json"),e.send(500,await r._serializeData(l,!0));return}if(pt(i)){e.headers.set("Content-Type","text/qwik-json-stream");const c=e.getWritableStream().getWriter();for await(const f of i){n&&H(r,f,a);const u=await r._serializeData(f,!0);if(e.signal.aborted)break;await c.write(j.encode(`${u}
`))}c.close()}else{H(r,i,a),e.headers.set("Content-Type","application/qwik-json");const l=await r._serializeData(i,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function yt(e){const t=Y(e),{basePathname:n,pathname:r,url:s,sharedMap:a}=e;if(!a.has(P)&&r!==n&&!r.endsWith(".html")){if(t){if(!r.endsWith("/"))throw e.redirect(302,r+"/"+s.search)}else if(r.endsWith("/"))throw e.redirect(302,r.slice(0,r.length-1)+s.search)}}function H(e,t,n){try{e._verifySerializable(t,void 0)}catch(r){throw r instanceof Error&&n.dev&&(r.loc=n.dev),r}}var wt=e=>typeof e=="function"&&typeof e.getSymbol=="function";function bt(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function Se(e,t){return e=new URL(e),e.pathname.endsWith(A)&&(e.pathname=e.pathname.slice(0,-A.length)),t?e.pathname.endsWith("/")||(e.pathname+="/"):e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),e.toString().substring(e.origin.length)}var j=new TextEncoder;function St(e){if(At(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const n=e.request.headers.get("origin"),r=e.url.origin;if(n!==r)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${r}".`)}}function Tt(e){return async t=>{if(t.headersSent||t.sharedMap.has(P))return;t.request.headers.forEach((u,d)=>u);const r=t.headers;r.has("Content-Type")||r.set("Content-Type","text/html; charset=utf-8");const s=Y(t),{readable:a,writable:o}=new TextEncoderStream,i=t.getWritableStream(),l=a.pipeTo(i,{preventClose:!0}),c=o.getWriter(),f=t.status();try{const u=F(t)==="static",d=ut(t),m=await e({base:t.basePathname+"build/",stream:c,serverData:d,containerAttributes:{"q:render":u?"static":"",...d.containerAttributes}}),p={loaders:z(t),action:t.sharedMap.get(U),status:f!==200?f:200,href:Se(t.url,s)};typeof m.html=="string"&&await c.write(m.html),t.sharedMap.set("qData",p)}finally{await c.ready,await c.close(),await l}await i.close()}}async function vt(e){if(e.sharedMap.has(P)){try{await e.next()}catch(a){if(!(a instanceof $))throw a}if(e.headersSent)return;const n=e.status(),r=e.headers.get("Location");if(n>=301&&n<=308&&r){const a=Rt(r);if(a){e.headers.set("Location",a),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}}async function xt(e){if(e.sharedMap.has(P)){if(await e.next(),e.headersSent||e.exited)return;const n=e.status(),r=e.headers.get("Location"),s=Y(e);e.request.headers.forEach((c,f)=>c),e.headers.set("Content-Type","application/json; charset=utf-8");const a={loaders:z(e),action:e.sharedMap.get(U),status:n!==200?n:200,href:Se(e.url,s),redirect:r??void 0},o=e.getWritableStream().getWriter(),l=await e[I]._serializeData(a,!0);o.write(j.encode(l)),e.sharedMap.set("qData",a),o.close()}}function Rt(e){if(e.startsWith("/")){const t=A,n=new URL(e,"http://localhost");return(n.pathname.endsWith("/")?n.pathname.slice(0,-1):n.pathname)+(t.startsWith("/")?"":"/")+t+n.search}else return}function se(){return typeof performance<"u"?performance.now():0}async function N(e,t,n){const r=se();try{return await n()}finally{const s=se()-r;let a=e.sharedMap.get("@serverTiming");a||e.sharedMap.set("@serverTiming",a=[]),a.push([t,s])}}function At(e,...t){var n;const r=((n=e.get("content-type"))==null?void 0:n.split(/;,/,1)[0].trim())??"";return t.includes(r)}function _t(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var Ct=e=>e&&typeof e.then=="function",Te=Symbol("RequestEvLoaders"),ve=Symbol("RequestEvMode"),xe=Symbol("RequestEvRoute"),I=Symbol("RequestEvQwikSerializer"),Re=Symbol("RequestEvTrailingSlash"),Ae="@routeName",U="@actionId",_e="@actionFormData",Dt="@nonce";function Pt(e,t,n,r,s,a,o,i){const{request:l,platform:c,env:f}=e,u=new Map,d=new ft(l.headers.get("cookie")),m=new Headers,p=new URL(l.url);p.pathname.endsWith(A)&&(p.pathname=p.pathname.slice(0,-Ce),s&&!p.pathname.endsWith("/")&&(p.pathname+="/"),u.set(P,!0)),u.set("@manifest",r);let y=-1,w=null,b,_=e.locale,T=200;const Oe=async()=>{for(y++;y<n.length;){const h=n[y],g=globalThis.qcAsyncRequestStore,S=g!=null&&g.run?g.run(v,h,v):h(v);Ct(S)&&await S,y++}},C=()=>{if(w!==null)throw new Error("Response already sent")},O=(h,g)=>{if(C(),typeof h=="number"){T=h;const M=v.getWritableStream().getWriter();M.write(typeof g=="string"?j.encode(g):g),M.close()}else if(T=h.status,h.headers.forEach((S,M)=>{m.append(M,S)}),h.body){const S=v.getWritableStream();h.body.pipeTo(S)}else{if(T>=300&&T<400)return new $;v.getWritableStream().getWriter().close()}return Q()},Q=()=>(y=oe,new X),G={},v={[Te]:G,[ve]:e.mode,[Re]:s,[xe]:t,[I]:o,cookie:d,headers:m,env:f,method:l.method,signal:l.signal,params:(t==null?void 0:t[1])??{},pathname:p.pathname,platform:c,query:p.searchParams,request:l,url:p,basePathname:a,sharedMap:u,get headersSent(){return w!==null},get exited(){return y>=oe},get clientConn(){return e.getClientConn()},next:Oe,exit:Q,cacheControl:(h,g="Cache-Control")=>{C(),m.set(g,_t(h))},resolveValue:async h=>{const g=h.__id;if(h.__brand==="server_loader"&&!(g in G))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return G[g]},status:h=>typeof h=="number"?(C(),T=h,h):T,locale:h=>(typeof h=="string"&&(_=h),_||""),error:(h,g)=>(T=h,m.delete("Cache-Control"),new ge(h,g)),redirect:(h,g)=>{if(C(),T=h,g){const S=g.replace(/([^:])\/{2,}/g,"$1/");g!==S&&console.warn(`Redirect URL ${g} is invalid, fixing to ${S}`),m.set("Location",S)}return m.delete("Cache-Control"),h>301&&m.set("Cache-Control","no-store"),Q(),new $},defer:h=>typeof h=="function"?h:()=>h,fail:(h,g)=>(C(),T=h,m.delete("Cache-Control"),{failed:!0,...g}),text:(h,g)=>(m.set("Content-Type","text/plain; charset=utf-8"),O(h,g)),html:(h,g)=>(m.set("Content-Type","text/html; charset=utf-8"),O(h,g)),parseBody:async()=>b!==void 0?b:b=Ot(v,u,o),json:(h,g)=>(m.set("Content-Type","application/json; charset=utf-8"),O(h,JSON.stringify(g))),send:O,isDirty:()=>w!==null,getWritableStream:()=>{if(w===null){if(e.mode==="dev"){const h=u.get("@serverTiming");h&&m.set("Server-Timing",h.map(g=>`${g[0]};dur=${g[1]}`).join(","))}w=e.getWritableStream(T,m,d,i,v)}return w}};return Object.freeze(v)}function z(e){return e[Te]}function Y(e){return e[Re]}function kt(e){return e[xe]}function F(e){return e[ve]}var oe=Number.MAX_SAFE_INTEGER,Ot=async({request:e,method:t,query:n},r,s)=>{var a;const o=((a=e.headers.get("content-type"))==null?void 0:a.split(/[;,]/,1)[0].trim())??"";if(o==="application/x-www-form-urlencoded"||o==="multipart/form-data"){const i=await e.formData();return r.set(_e,i),Mt(i)}else{if(o==="application/json")return await e.json();if(o==="application/qwik-json"){if(t==="GET"&&n.has(ne)){const i=n.get(ne);if(i)try{return s._deserializeData(decodeURIComponent(i))}catch{}}return s._deserializeData(await e.text())}}},Mt=e=>[...e.entries()].reduce((n,[r,s])=>(r.split(".").reduce((a,o,i,l)=>{if(o.endsWith("[]")){const c=o.slice(0,-2);return a[c]=a[c]||[],a[c]=[...a[c],s]}return i<l.length-1?a[o]=a[o]||(Number.isNaN(+l[i+1])?{}:[]):a[o]=s},n),n),{}),L;import("node:async_hooks").then(e=>{const t=e.AsyncLocalStorage;L=new t,globalThis.qcAsyncRequestStore=L}).catch(e=>{console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.",e)});function Wt(e,t,n,r,s=!0,a="/",o){let i;const l=new Promise(f=>i=f),c=Pt(e,t,n,r,s,a,o,i);return{response:l,requestEv:c,completion:L?L.run(c,ce,c,i):ce(c,i)}}async function ce(e,t){try{await e.next()}catch(n){if(n instanceof $)await e.getWritableStream().close();else if(n instanceof ge){if(console.error(n),!e.headersSent){const r=tt(n.status,n),s=n.status;e.html(s,r)}}else if(!(n instanceof X)){if(F(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const r=e.getWritableStream();if(!r.locked){const s=r.getWriter();await s.write(j.encode(ye(500,"Internal Server Error"))),await s.close()}}catch{console.error("Unable to render error page")}return n}}finally{e.isDirty()||t(null)}}function $t(e,t){if(e.endsWith(A)){const n=e.length-Ce+(t?1:0);e=e.slice(0,n),e===""&&(e="/")}return e}var P="@isQData",A="/q-data.json",Ce=A.length;function Ht(e,t){const n=de(e),r=le(e),s=de(t),a=le(t);return De(e,n,r,t,s,a)}function De(e,t,n,r,s,a){let o=null;for(;t<n;){const i=e.charCodeAt(t++),l=r.charCodeAt(s++);if(i===91){const c=Pe(e,t),f=t+(c?3:0),u=B(e,f,n,93),d=e.substring(f,u),m=B(e,u+1,n,47),p=e.substring(u+1,m);t=u+1;const y=s-1;if(c){const _=Lt(d,p,r,y,a,e,t+p.length+1,n);if(_)return Object.assign(o||(o={}),_)}const w=B(r,y,a,47,p);if(w==-1)return null;const b=r.substring(y,w);if(!c&&!p&&!b)return null;s=w,(o||(o={}))[d]=decodeURIComponent(b)}else if(i!==l&&!(isNaN(l)&&Nt(e,t)))return null}return fe(e,t)&&fe(r,s)?o||{}:null}function Nt(e,t){return e.charCodeAt(t)===91&&Pe(e,t+1)}function le(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function fe(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function de(e){return e.charCodeAt(0)===47?1:0}function Pe(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function B(e,t,n,r,s=""){for(;t<n&&e.charCodeAt(t)!==r;)t++;const a=s.length;for(let o=0;o<a;o++)if(e.charCodeAt(t-a+o)!==s.charCodeAt(o))return-1;return t-a}function Lt(e,t,n,r,s,a,o,i){n.charCodeAt(r)===47&&r++;let l=s;const c=t+"/";for(;l>=r;){const f=De(a,o,i,n,l,s);if(f){let d=n.substring(r,Math.min(l,s));return d.endsWith(c)&&(d=d.substring(0,d.length-c.length)),f[e]=decodeURIComponent(d),f}const u=jt(n,r,c,l,r-1)+c.length;if(l===u)break;l=u}return null}function jt(e,t,n,r,s){let a=e.lastIndexOf(n,r);return a==r-n.length&&(a=e.lastIndexOf(n,r-n.length-1)),a>t?a:s}var It=async(e,t,n,r)=>{if(Array.isArray(e))for(const s of e){const a=s[0],o=Ht(a,r);if(o){const i=s[1],l=s[3],c=new Array(i.length),f=[],u=Ut(t,r);let d;return i.forEach((m,p)=>{ue(m,f,y=>c[p]=y,n)}),ue(u,f,m=>d=m==null?void 0:m.default,n),f.length>0&&await Promise.all(f),[a,o,c,d,l]}}return null},ue=(e,t,n,r)=>{if(typeof e=="function"){const s=ee.get(e);if(s)n(s);else{const a=e();typeof a.then=="function"?t.push(a.then(o=>{r!==!1&&ee.set(e,o),n(o)})):a&&n(a)}}},Ut=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}};async function zt(e,t,n){const{render:r,qwikCityPlan:s,manifest:a,checkOrigin:o}=t,i=e.url.pathname,l=$t(i,s.trailingSlash),c=await Ft(s,l,e.request.method,o??!0,r);return c?Wt(e,c[0],c[1],a,s.trailingSlash,s.basePathname,n):null}async function Ft(e,t,n,r,s){const{routes:a,serverPlugins:o,menus:i,cacheModules:l}=e,c=await It(a,i,l,t),f=ht(o,c,n,r,Tt(s));return f.length>0?[c,f]:null}function E(e,t){var n;return((n=t==null?void 0:t.getOrigin)==null?void 0:n.call(t,e))??(t==null?void 0:t.origin)??process.env.ORIGIN??Qt(e)}function Qt(e){const{PROTOCOL_HEADER:t,HOST_HEADER:n}=process.env,r=e.headers,s=t&&r[t]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),a=n??(e instanceof Ie?":authority":"host"),o=r[a];return`${s}://${o}`}function J(e,t){return Bt(e.originalUrl||e.url||"/",t)}function Gt(e=""){return["The stream has been destroyed","write after end"].some(n=>e.includes(n))}var he=/^:(method|scheme|authority|path)$/i;function Bt(e,t){const n=/\/\/|\\\\/g;return new URL(e.replace(n,"/"),t)}async function Et(e,t,n,r,s){const a=new Headers,o=t.headers;try{for(const[d,m]of Object.entries(o))if(!he.test(d)){if(typeof m=="string")a.set(d,m);else if(Array.isArray(m))for(const p of m)a.append(d,p)}}catch(d){console.error(d)}const i=async function*(){for await(const d of t)yield d},l=t.method==="HEAD"||t.method==="GET"?void 0:i(),c=new AbortController,f={method:t.method,headers:a,body:l,signal:c.signal,duplex:"half"};return n.on("close",()=>{c.abort()}),{mode:r,url:e,request:new Request(e.href,f),env:{get(d){return process.env[d]}},getWritableStream:(d,m,p)=>{n.statusCode=d;try{for(const[w,b]of m)he.test(w)||n.setHeader(w,b);const y=p.headers();y.length>0&&n.setHeader("Set-Cookie",y)}catch(y){console.error(y)}return new WritableStream({write(y){n.closed||n.destroyed||n.write(y,w=>{w&&!Gt(w.message)&&console.error(w)})},close(){n.end()}})},getClientConn:()=>s?s(t):{ip:t.socket.remoteAddress},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var Jt={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function Kt(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=Ge,globalThis.Headers=Be,globalThis.Request=Ee,globalThis.Response=Je,globalThis.FormData=Ke),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=Ue,globalThis.TextDecoderStream=ze),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=Fe,globalThis.ReadableStream=Qe),typeof globalThis.crypto>"u"&&(globalThis.crypto=Xe.webcrypto)}function Xt(e){var t;Kt();const n={_deserializeData:Ye,_serializeData:Ze,_verifySerializable:Ve};e.manifest&&Me(e.manifest);const r=((t=e.static)==null?void 0:t.root)??R(pe(import.meta.url),"..","..","dist");return{router:async(i,l,c)=>{try{const f=E(i,e),u=await Et(J(i,f),i,l,"server",e.getClientConn),d=await zt(u,e,n);if(d){const m=await d.completion;if(m)throw m;if(d.requestEv.headersSent)return}c()}catch(f){console.error(f),c(f)}},notFound:async(i,l,c)=>{try{if(!l.headersSent){const f=E(i,e),u=J(i,f),d=Z(i.method||"GET",u)?"Not Found":He(u.pathname);l.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":u.pathname}),l.end(d)}}catch(f){console.error(f),c(f)}},staticFile:async(i,l,c)=>{var f;try{const u=E(i,e),d=J(i,u);if(Z(i.method||"GET",d)){const m=d.pathname;let p;Le(m).includes(".")?p=R(r,m):e.qwikCityPlan.trailingSlash?p=R(r,m+"index.html"):p=R(r,m,"index.html");const y=je(p).replace(/^\./,""),w=Ne(p);w.on("error",c);const b=Jt[y];b&&l.setHeader("Content-Type",b),(f=e.static)!=null&&f.cacheControl&&l.setHeader("Cache-Control",e.static.cacheControl),w.pipe(l);return}return c()}catch(u){console.error(u),c(u)}}}}const ke=R(pe(import.meta.url),"..","..","dist"),Yt=R(ke,"build"),me=process.env.PORT??3e3,{router:Zt,notFound:Vt}=Xt({render:We,qwikCityPlan:qe,manifest:$e}),k=K();k.use("/build",K.static(Yt,{immutable:!0,maxAge:"1y"}));k.use(K.static(ke,{redirect:!1}));k.use(Zt);k.use(Vt);k.listen(me,()=>{console.log(`Server started: http://localhost:${me}/`)});