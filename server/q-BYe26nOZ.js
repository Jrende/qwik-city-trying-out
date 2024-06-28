import{D as f,E as ce,G as ue,F as I,H as Y,b as K,i as Z,I as fe,J as pe,k as v,x as b,j as de,h as k,K as me,T as he,R as be,Q as ye}from"./q-DExUwTsQ.js";/**
 * @license
 * @builder.io/qwik/server 1.5.7
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ve=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),we="<sync>";function G(n,e){const t=e==null?void 0:e.mapper,r=n.symbolMapper?n.symbolMapper:o=>{var a;if(t){const i=C(o),l=t[i];if(!l){if(i===we)return[i,""];if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(i))return[o,"_"];console.error("Cannot resolve symbol",o,"in",t)}return l}};return{isServer:!0,async importSymbol(o,a,i){var q;const l=C(i),u=(q=globalThis.__qwik_reg_symbols)==null?void 0:q.get(l);if(u)return u;let p=String(a);p.endsWith(".js")||(p+=".js");const g=ve(p);if(!(i in g))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${p}'.`);return g[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(a=>{setTimeout(()=>{a(o())})}),chunkForSymbol(o){return r(o,t)}}}async function qe(n,e){const t=G(n,e);Y(t)}var C=n=>{const e=n.lastIndexOf("_");return e>-1?n.slice(e+1):n};function T(){if(typeof performance>"u")return()=>0;const n=performance.now();return()=>(performance.now()-n)/1e6}function ee(n){let e=n.base;return typeof n.base=="function"&&(e=n.base(n)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var ge='(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,s)=>{for(var a in s||(s={}))n.call(s,a)&&o(e,a,s[a]);if(t)for(var a of t(s))r.call(s,a)&&o(e,a,s[a]);return e};((e,t)=>{const n="__q_context__",r=window,o=new Set,a="replace",i="forEach",c="target",l="getAttribute",f="isConnected",p="qvisible",b="_qwikjson_",u=t=>e.querySelectorAll(t),y=e=>e&&"function"==typeof e.then,d=(e,t,n=t.type)=>{u("[on"+e+"\\\\:"+n+"]")[i]((r=>q(r,e,t,n)))},m=t=>{if(void 0===t[b]){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n[l]("type")){t[b]=JSON.parse(n.textContent[a](/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},h=(e,t)=>new CustomEvent(e,{detail:t}),q=async(t,r,o,i=o.type)=>{const c="on"+r+":"+i;t.hasAttribute("preventdefault:"+i)&&o.preventDefault();const p=t._qc_,b=p&&p.li.filter((e=>e[0]===c));if(b&&b.length>0){for(const e of b){const n=e[1].getFn([t,o],(()=>t[f]))(o,t),r=o.cancelBubble;y(n)&&await n,r&&o.stopPropagation()}return}const u=t[l](c);if(u){const r=t.closest("[q\\\\:container]"),i=r[l]("q:base"),c=r[l]("q:version")||"unknown",p=r[l]("q:manifest-hash")||"dev",b=new URL(i,e.baseURI);for(const l of u.split("\\n")){const u=new URL(l,b),d=u.href,h=u.hash[a](/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let v,g,E;const _=l.startsWith("#"),k={qBase:i,qManifest:p,qVersion:c,href:d,symbol:h,element:t,reqTime:q};if(_)v=(r.qFuncs||[])[Number.parseInt(h)],v||(g="sync",E=Error("sync handler error for symbol: "+h));else{const e=u.href.split("#")[0];try{const t=import(e);m(r),v=(await t)[h]}catch(e){g="async",E=e}}if(!v){w("qerror",s({importError:g,error:E},k));break}const C=e[n];if(t[f])try{e[n]=[t,o,u],_||w("qsymbol",s({},k));const r=v(o,t);y(r)&&await r}catch(e){w("qerror",s({error:e},k))}finally{e[n]=C}}}},w=(t,n)=>{e.dispatchEvent(h(t,n))},v=e=>e[a](/([A-Z])/g,(e=>"-"+e.toLowerCase())),g=async e=>{let t=v(e.type),n=e[c];for(d("-document",e,t);n&&n[l];){const r=q(n,"",e,t);let o=e.cancelBubble;y(r)&&await r,o=o||e.cancelBubble||n.hasAttribute("stoppropagation:"+e.type),n=e.bubbles&&!0!==o?n.parentElement:null}},E=e=>{d("-window",e,v(e.type))},_=()=>{var n;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(t=1,w("qinit"),(null!=(n=r.requestIdleCallback)?n:r.setTimeout).bind(r)((()=>w("qidle"))),o.has(p))){const e=u("[on\\\\:"+p+"]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n[c]),q(n[c],"",h(p,n)))}));e[i]((e=>t.observe(e)))}},k=(e,t,n,r=!1)=>e.addEventListener(t,n,{capture:r,passive:!1}),C=t=>{for(const n of t)o.has(n)||(k(e,n,g,!0),k(r,n,E,!0),o.add(n))};if(!(n in e)){e[n]=0;const t=r.qwikevents;Array.isArray(t)&&C(t),r.qwikevents={push:(...e)=>C(e)},k(e,"readystatechange",_),_()}})(document)})()',ke=`(() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value
    }) : obj[key] = value;
    var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) {
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        }
        if (__getOwnPropSymbols) {
            for (var prop of __getOwnPropSymbols(b)) {
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
            }
        }
        return a;
    };
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const isPromise = promise => promise && "function" == typeof promise.then;
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    const results = listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                    const cancelBubble = ev.cancelBubble;
                    isPromise(results) && await results;
                    cancelBubble && ev.stopPropagation();
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const qBase = container.getAttribute("q:base");
                const qVersion = container.getAttribute("q:version") || "unknown";
                const qManifest = container.getAttribute("q:manifest-hash") || "dev";
                const base = new URL(qBase, doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const href = url.href;
                    const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    let importError;
                    let error;
                    const isSync = qrl.startsWith("#");
                    const eventData = {
                        qBase: qBase,
                        qManifest: qManifest,
                        qVersion: qVersion,
                        href: href,
                        symbol: symbol,
                        element: element,
                        reqTime: reqTime
                    };
                    if (isSync) {
                        handler = (container.qFuncs || [])[Number.parseInt(symbol)];
                        if (!handler) {
                            importError = "sync";
                            error = new Error("sync handler error for symbol: " + symbol);
                        }
                    } else {
                        const uri = url.href.split("#")[0];
                        try {
                            const module = import(
                                                        uri);
                            resolveContainer(container);
                            handler = (await module)[symbol];
                        } catch (err) {
                            importError = "async";
                            error = err;
                        }
                    }
                    if (!handler) {
                        emitEvent("qerror", __spreadValues({
                            importError: importError,
                            error: error
                        }, eventData));
                        break;
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", __spreadValues({}, eventData));
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } catch (error2) {
                            emitEvent("qerror", __spreadValues({
                                error: error2
                            }, eventData));
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                const results = dispatch(element, "", ev, type);
                let cancelBubble = ev.cancelBubble;
                isPromise(results) && await results;
                cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
                element = ev.bubbles && !0 !== cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent, !0);
                    events.add(eventName);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`;function X(n={}){return n.debug?ke:ge}function _e(n,e,t){if(!t)return[];const r=e.prefetchStrategy,s=ee(e);if(r!==null){if(!r||!r.symbolsToPrefetch||r.symbolsToPrefetch==="auto")return Se(n,t,s);if(typeof r.symbolsToPrefetch=="function")try{return r.symbolsToPrefetch({manifest:t.manifest})}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}}return[]}function Se(n,e,t){const r=[],s=n==null?void 0:n.qrls,{mapper:o,manifest:a}=e,i=new Map;if(Array.isArray(s))for(const l of s){const u=l.getHash(),p=o[u];p&&ne(a,i,r,t,p[1])}return r}function ne(n,e,t,r,s){const o=r+s;let a=e.get(o);if(!a){a={url:o,imports:[]},e.set(o,a);const i=n.bundles[s];if(i&&Array.isArray(i.imports))for(const l of i.imports)ne(n,e,a.imports,r,l)}t.push(a)}function Ee(n){if(n!=null&&n.mapping!=null&&typeof n.mapping=="object"&&n.symbols!=null&&typeof n.symbols=="object"&&n.bundles!=null&&typeof n.bundles=="object")return n}function L(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function Pe(n){const e={bundles:_(n).map(t=>t.split("/").pop())};return`(${Te})(
    document.currentScript.closest('[q\\\\:container]'),
    window.qwikPrefetchSW||(window.qwikPrefetchSW=[]),
    ${JSON.stringify(e.bundles)}
  );`}var Te=((n,e,t)=>{e.push(["prefetch",n.getAttribute("q:base"),...t])}).toString();function _(n){const e=[],t=r=>{if(Array.isArray(r))for(const s of r)e.includes(s.url)||(e.push(s.url),t(s.imports))};return t(n),e}function Ce(n){const e=new Map;let t=0;const r=(i,l)=>{if(Array.isArray(i))for(const u of i){const p=e.get(u.url)||0;e.set(u.url,p+1),t++,l.has(u.url)||(l.add(u.url),r(u.imports,l))}},s=new Set;for(const i of n)s.clear(),r(i.imports,s);const o=t/e.size*2,a=Array.from(e.entries());return a.sort((i,l)=>l[1]-i[1]),a.slice(0,5).filter(i=>i[1]>o).map(i=>i[0])}function Le(n,e,t){const r=Re(n==null?void 0:n.implementation),s=[];return r.prefetchEvent==="always"&&Ie(s,e,t),r.linkInsert==="html-append"&&Ae(s,e,r),r.linkInsert==="js-append"?Oe(s,e,r,t):r.workerFetchInsert==="always"&&je(s,e,t),s.length>0?f(I,{children:s}):null}function Ie(n,e,t){const r=Ce(e);for(const s of r)n.push(f("link",{rel:"modulepreload",href:s,nonce:t}));n.push(f("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:Pe(e)+"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:t}))}function Ae(n,e,t){const r=_(e),s=t.linkRel||"prefetch";for(const o of r){const a={};a.href=o,a.rel=s,(s==="prefetch"||s==="preload")&&o.endsWith(".js")&&(a.as="script"),n.push(f("link",a,void 0))}}function Oe(n,e,t,r){const s=t.linkRel||"prefetch";let o="";t.workerFetchInsert==="no-link-support"&&(o+="let supportsLinkRel = true;"),o+=`const u=${JSON.stringify(_(e))};`,o+="u.map((u,i)=>{",o+="const l=document.createElement('link');",o+='l.setAttribute("href",u);',o+=`l.setAttribute("rel","${s}");`,t.workerFetchInsert==="no-link-support"&&(o+="if(i===0){",o+="try{",o+=`supportsLinkRel=l.relList.supports("${s}");`,o+="}catch(e){}",o+="}"),o+="document.body.appendChild(l);",o+="});",t.workerFetchInsert==="no-link-support"&&(o+="if(!supportsLinkRel){",o+=L(),o+="}"),t.workerFetchInsert==="always"&&(o+=L()),n.push(f("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:o,nonce:r}))}function je(n,e,t){let r=`const u=${JSON.stringify(_(e))};`;r+=L(),n.push(f("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:r,nonce:t}))}function Re(n){return{...Ne,...n}}var Ne={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},xe="<!DOCTYPE html>";async function De(n,e){var D,F,B;let t=e.stream,r=0,s=0,o=0,a=0,i="",l;const u=((D=e.streaming)==null?void 0:D.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},p=e.containerTagName??"html",g=e.containerAttributes??{},q=t,re=T(),oe=ee(e),d=te(e.manifest);function A(){i&&(q.write(i),i="",r=0,o++,o===1&&(a=re()))}function O(c){const m=c.length;r+=m,s+=m,i+=c}switch(u.strategy){case"disabled":t={write:O};break;case"direct":t=q;break;case"auto":let c=0,m=!1;const $=u.maximunChunk??0,P=u.maximunInitialChunk??0;t={write(w){w==="<!--qkssr-f-->"?m||(m=!0):w==="<!--qkssr-pu-->"?c++:w==="<!--qkssr-po-->"?c--:O(w),c===0&&(m||r>=(o===0?P:$))&&(m=!1,A())}};break}p==="html"?t.write(xe):(t.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"},e.qwikPrefetchServiceWorker||(e.qwikPrefetchServiceWorker={}),e.qwikPrefetchServiceWorker.include||(e.qwikPrefetchServiceWorker.include=!1),e.qwikPrefetchServiceWorker.position||(e.qwikPrefetchServiceWorker.position="top")),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await qe(e,d);const j=d==null?void 0:d.manifest.injections,S=j?j.map(c=>f(c.tag,c.attributes??{})):[],E=((F=e.qwikLoader)==null?void 0:F.include)??"auto";if((((B=e.qwikLoader)==null?void 0:B.position)??"bottom")==="top"&&E!=="never"){const c=X({debug:e.debug});S.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:c})),S.push(f("script",{dangerouslySetInnerHTML:"window.qwikevents.push('click')"}))}const se=T(),R=[];let N=0,x=0;await ce(n,{stream:t,containerTagName:p,containerAttributes:g,serverData:e.serverData,base:oe,beforeContent:S,beforeClose:async(c,m,$,P)=>{var W,Q,U,z,V;N=se();const w=T();l=await ue(c,m,void 0,P);const y=[];if(e.prefetchStrategy!==null){const h=_e(l,e,d);if(h.length>0){const J=Le(e.prefetchStrategy,h,(W=e.serverData)==null?void 0:W.nonce);J&&y.push(J)}}const ae=JSON.stringify(l.state,void 0,void 0);y.push(f("script",{type:"qwik/json",dangerouslySetInnerHTML:Fe(ae),nonce:(Q=e.serverData)==null?void 0:Q.nonce})),l.funcs.length>0&&y.push(f("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:He(l.funcs),nonce:(U=e.serverData)==null?void 0:U.nonce}));const le=!l||l.mode!=="static",H=E==="always"||E==="auto"&&le;if(H){const h=X({debug:e.debug});y.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:h,nonce:(z=e.serverData)==null?void 0:z.nonce}))}const M=Array.from(m.$events$,h=>JSON.stringify(h));if(M.length>0){const h=(H?"window.qwikevents":"(window.qwikevents||=[])")+`.push(${M.join(", ")})`;y.push(f("script",{dangerouslySetInnerHTML:h,nonce:(V=e.serverData)==null?void 0:V.nonce}))}return Be(R,c),x=w(),f(I,{children:y})},manifestHash:(d==null?void 0:d.manifest.manifestHash)||"dev"}),p!=="html"&&t.write("<!--/cq-->"),A();const ie=l.resources.some(c=>c._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:d==null?void 0:d.manifest,size:s,isStatic:!ie,timing:{render:N,snapshot:x,firstFlush:a},_symbols:R}}function te(n){if(n){if("mapper"in n)return n;if(n=Ee(n),n){const e={};return Object.entries(n.mapping).forEach(([t,r])=>{e[C(t)]=[t,r]}),{mapper:e,manifest:n}}}}var Fe=n=>n.replace(/<(\/?script)/gi,"\\x3C$1");function Be(n,e){var t;for(const r of e){const s=(t=r.$componentQrl$)==null?void 0:t.getSymbol();s&&!n.includes(s)&&n.push(s)}}var $e='document.currentScript.closest("[q\\\\:container]").qFuncs=';function He(n){return $e+`[${n.join(`,
`)}]`}async function Ye(n){const e=G({manifest:n},te(n));Y(e)}const Me=null,We=()=>{const n=fe(),e=pe();return v(I,{children:[b("title",null,null,n.title,1,null),b("link",null,{rel:"canonical",href:de(t=>t.url.href,[e],"p0.url.href")},null,3,null),b("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),b("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),n.meta.map(t=>k("meta",{...t},null,0,t.key)),n.links.map(t=>k("link",{...t},null,0,t.key)),n.styles.map(t=>{var r;return k("style",{...t.props,...(r=t.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.style}},null,0,t.key)}),n.scripts.map(t=>{var r;return k("script",{...t.props,...(r=t.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.script}},null,0,t.key)})]},1,"OA_0")},Qe=K(Z(We,"s_zrbrqoaqXSY")),Ue=()=>v(ye,{children:[b("head",null,null,[b("meta",null,{charset:"utf-8"},null,3,null),b("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),v(Qe,null,3,"35_0"),v(me,null,3,"35_1")],1,null),b("body",null,{lang:"en"},v(he,{children:v(be,null,3,"35_2")},1,"35_3"),1,null)]},1,"35_4"),ze=K(Z(Ue,"s_3sccYCDd1Z0"));function Ke(n){return De(v(ze,null,3,"pY_0"),{manifest:Me,...n,containerAttributes:{lang:"en-us",...n.containerAttributes},serverData:{...n.serverData}})}export{Me as m,Ke as r,Ye as s};
