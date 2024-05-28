"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_inline-comment_ts-app_assets_modules_github_discussions_v-a47e26","app_assets_modules_github_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages-6fe316"],{43467:(e,t,n)=>{n.d(t,{j:()=>a,w:()=>s});var r=n(59753),o=n(97390),i=n(9238);function a(e){let t=e.querySelector(".js-inline-comment-form-container");t.classList.add("open"),t.querySelector(".js-write-tab")?.click(),t.querySelector(".js-comment-field").focus(),(0,r.f)(t,"inlinecomment:focus")}function s(e){e.reset();let t=e.closest(".js-inline-comment-form-container");t.classList.remove("open");let n=t.querySelector(".js-multi-line-preview");n&&(n.hidden=!0),(0,r.f)(t,"inlinecomment:collapse")}(0,r.on)("click",".js-toggle-inline-comment-form",function(e){a(e.currentTarget.closest(".js-line-comments"))}),(0,r.on)("quote-selection",".js-line-comments",function(e){a(e.currentTarget),e.stopPropagation()}),(0,i.w4)("keydown",".js-inline-comment-form-container form .js-comment-field",function(e){let t=e.target;t.classList.contains("js-navigation-enable")||"Escape"!==e.key||0!==t.value.length||(s(t.closest("form")),e.preventDefault())}),(0,r.on)("click",".js-hide-inline-comment-form",function(e){let t=e.currentTarget.closest("form");!(0,o.T)(t)||confirm(e.currentTarget.getAttribute("data-confirm-cancel-text"))?s(t):e.preventDefault()})},27280:(e,t,n)=>{var r=n(80810),o=n(36071);let i=async(e,t,n,r)=>{let o=new FormData;return!0===r&&o.append("upvote","true"),await fetch(e,{body:"delete"===n?"":o,method:n,mode:"same-origin",headers:{"Scoped-CSRF-Token":t}})},a=class VoteCountElement{getLabel(){return this.voteCountElement?.getAttribute("data-upvote-label")||""}getText(){return this.voteCountElement?.textContent||""}constructor(e){this.voteCountElement=e}},s=class VoteFormElement{isUpvoted(){return"true"===this.voteForm.getAttribute("data-upvoted")}getCsrfDeleteInputValue(){let e=this.voteForm.querySelector(".js-data-url-delete-csrf");return e?e.value:""}getCsrfPutInputValue(){let e=this.voteForm.querySelector(".js-data-url-put-csrf");return e?e.value:""}simulateUpvote(){this.voteForm.setAttribute("data-upvoted","true"),this.voteForm.getAttribute("data-new-upvote")&&(this.voteForm.querySelector(".js-upvote-button")?.classList.add("user-has-reacted","color-bg-accent"),this.voteForm.querySelector(".js-upvote-button")?.classList.remove("color-fg-muted")),this.voteForm.classList.add("is-upvoted"),this.voteButton?.setAttribute("aria-label",this.upvotedCountElement.getLabel()),this.voteButton?.setAttribute("aria-pressed","true"),(0,r.x)(`${this.upvotedCountElement.getText()} Upvotes`)}simulateUpvoteDeletion(){this.voteForm.setAttribute("data-upvoted","false"),this.voteForm.getAttribute("data-new-upvote")&&(this.voteForm.querySelector(".js-upvote-button")?.classList.remove("user-has-reacted","color-bg-accent"),this.voteForm.querySelector(".js-upvote-button")?.classList.add("color-fg-muted")),this.voteForm.classList.remove("is-upvoted"),this.voteButton?.setAttribute("aria-label",this.defaultVoteCountElement.getLabel()),this.voteButton?.setAttribute("aria-pressed","false"),(0,r.x)(`${this.defaultVoteCountElement.getText()} Upvotes`)}displayUpVoteError(e){let t=this.voteForm.querySelector(".js-upvote-error");t instanceof HTMLElement&&(t.textContent=e,t.hidden=!1)}hideVoteErrors(){let e=this.voteForm.querySelector(".js-upvote-error");e instanceof HTMLElement&&(e.hidden=!0)}constructor(e){this.voteForm=e,this.voteButton=this.voteForm.querySelector(".js-upvote-button"),this.defaultVoteCountElement=new a(e.querySelector(".js-default-vote-count")),this.upvotedCountElement=new a(e.querySelector(".js-upvoted-vote-count")),this.url=this.voteForm.getAttribute("data-url")||""}},l=class Upvote{animateUpvote(e){e?this.voteFormElement.simulateUpvoteDeletion():this.voteFormElement.simulateUpvote()}animateUpvoteUndo(e){e?this.voteFormElement.simulateUpvote():this.voteFormElement.simulateUpvoteDeletion()}async click(){this.voteFormElement.hideVoteErrors();let e=this.voteFormElement.isUpvoted(),t=e?this.voteFormElement.getCsrfDeleteInputValue():this.voteFormElement.getCsrfPutInputValue();this.animateUpvote(e);let n=await i(this.voteFormElement.url,t,e?"delete":"put",!e);if(!n.ok&&422===n.status){let t=await n.json();this.voteFormElement.displayUpVoteError(t.error),this.animateUpvoteUndo(e)}}constructor(e){this.voteFormElement=e}};(0,o.N7)(".js-upvote-button",e=>{if(!(e instanceof HTMLElement)||!(e.closest(".discussion-vote-form") instanceof HTMLElement))return;let t=new l(new s(e.closest(".discussion-vote-form")));e.addEventListener("click",async()=>{await t.click()})})},97390:(e,t,n)=>{let r,o,i;n.d(t,{M:()=>l,T:()=>c});var a=n(14840),s=n(80702);function l(e,t=!1,n=!1){var l;return!n&&c(e)||function(e,t){let n=r instanceof Element?r:e&&e.ownerDocument&&e.ownerDocument.activeElement?e.ownerDocument.activeElement:null;return null!==n&&(!t||n!==e)&&(!!(n===e&&(0,s.sw)(n)||e.contains(n)&&!function(e){if(e instanceof a.Z)return!0;let t=e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement,n=e.parentElement?.classList.contains("task-list-item");if(t&&n)return!0;if(!(i instanceof Element))return!1;let r=e.closest(u);return!!r&&r===i.closest(u)}(n))||i instanceof Element&&e.contains(i)&&!!i.closest("details[open] > summary"))}(e,t)||(l=e).matches(":active:enabled")||l.contains(o)||!!(e.closest(".is-dirty")||e.querySelector(".is-dirty"))}function c(e){for(let t of e.querySelectorAll("input, textarea"))if((t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&function(e){if(e instanceof HTMLInputElement&&("checkbox"===e.type||"radio"===e.type)){if(e.checked!==e.defaultChecked)return!0}else if(e.value!==e.defaultValue)return!0;return!1}(t))return!0;return!1}document.addEventListener("mousedown",function(e){o=e.target},!0),document.addEventListener("mouseup",function(e){o=null,i=e.target},!0),document.addEventListener("contextmenu",function(e){o=null,i=e.target},!0),document.addEventListener("dragend",function(){o=null},!0);let u="a[href], button"},9238:(e,t,n)=>{n.d(t,{ZG:()=>s,q6:()=>c,w4:()=>l});var r=n(8439);let o=!1,i=new r.Z;function a(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of i.matches(t))e.data.call(null,t)}function s(e,t){o||(o=!0,document.addEventListener("focus",a,!0)),i.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function l(e,t,n){function r(t){let o=t.currentTarget;o&&(o.removeEventListener(e,n),o.removeEventListener("blur",r))}s(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",r)})}function c(e,t){function n(e){let{currentTarget:r}=e;r&&(r.removeEventListener("input",t),r.removeEventListener("blur",n))}s(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},80810:(e,t,n)=>{n.d(t,{N:()=>o,x:()=>i});var r=n(71207);function o(e,t){i((e.getAttribute("aria-label")||e.innerText||"").trim(),t)}function i(e,t){let{assertive:n,selector:o}=t??{};!function(e,t,n){let o=r.n4?.querySelector(n||(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice"));o&&(o.textContent===e?o.textContent=`${e}\u00A0`:o.textContent=e)}(e,n,o)}},40578:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function i(){return r?.locale??"en-US"}n.d(t,{Kd:()=>i,dU:()=>o}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},87274:(e,t,n)=>{n.d(t,{C:()=>i,x:()=>o});var r=n(71207);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),i=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},65809:(e,t,n)=>{n.d(t,{eK:()=>h});var r=n(82918),o=n(21630),i=n(28382);function a(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}var s=n(54508),l=n(71207),c=n(18515),u=n(58374);let m=!1,f=0,d=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function v(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function h(e,t={}){if((0,c.cr)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(T.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);y(g({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:b(n),catalogService:void 0},t));return}v(e)||y(g(E(e),t))}else v(e)||y(g(E(e),t))}async function y(e){if(!(!S&&!m&&f<10&&(0,o.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>w.test(e.filename)||w.test(e.function))){m=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function E(e){return{type:e.name,value:e.message,stacktrace:b(e),catalogService:e.catalogService}}function g(e,t={}){return Object.assign({error:e,sanitizedUrl:`${window.location.protocol}//${window.location.host}${function(){let e=a("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=a("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=a("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`||window.location.href,readyState:document.readyState,referrer:(0,u.wP)(),timeSinceLoad:Math.round(Date.now()-d),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}()||void 0,bundler:s.A,ui:!!document.querySelector('meta[name="ui"]')},t)}function b(e){return(0,i.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let w=/(chrome|moz|safari)-extension:\/\//,S=!1;l.iG?.addEventListener("pageshow",()=>S=!1),l.iG?.addEventListener("pagehide",()=>S=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{h(e.data.error)});let T=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},18515:(e,t,n)=>{n.d(t,{$m:()=>c,KM:()=>s,cr:()=>l});var r=n(15205),o=n(40578);function i(){return new Set((0,o.dU)().featureFlags.map(e=>e.toLowerCase()))}let a=n(71207).W6?i:(0,r.Z)(i);function s(){return Array.from(a())}function l(e){return a().has(e.toLowerCase())}let c={isFeatureEnabled:l}},80702:(e,t,n)=>{n.d(t,{Bt:()=>i,DN:()=>s,KL:()=>u,Se:()=>a,qC:()=>m,sw:()=>l});var r=n(31347);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function i(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,r.j)(t)),o(e,"submit",!0)&&e.submit()}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function s(e,t){for(let n in t){let r=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=r:o instanceof HTMLTextAreaElement&&(o.value=r)}}function l(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function c(e){return new URLSearchParams(e)}function u(e,t){let n=new URLSearchParams(e.search);for(let[e,r]of c(t))n.append(e,r);return n.toString()}function m(e){return c(new FormData(e)).toString()}},31347:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",o=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>r,u:()=>o})},79697:(e,t,n)=>{let r;n.d(t,{YT:()=>f,qP:()=>d,yM:()=>p});var o=n(88149),i=n(86058),a=n(56363),s=n(43786);let{getItem:l}=(0,a.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.n)("octolytics");delete e.baseContext,r=new i.R(e)}catch(e){}function m(e){let t=(0,o.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))u.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,s.B)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(m(e))}function d(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(m(o),r.sendEvent(e||"unknown",m(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},5223:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(47940),o=n(50655);let i="parse-html-no-op",a=r.ZO.createPolicy(i,{createHTML:e=>o.O.apply({policy:()=>e,policyName:i,fallback:e,sanitize:!1,fallbackOnError:!0})});function s(e,t){let n=e.createElement("template");return n.innerHTML=a.createHTML(t),e.importNode(n.content,!0)}},54508:(e,t,n)=>{n.d(t,{A:()=>s,k:()=>a});var r=n(15205),o=n(71207);let i=(0,r.Z)(function(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),a=(0,r.Z)(function(){return"enterprise"===i()}),s="webpack-react-next"},56363:(e,t,n)=>{n.d(t,{Z:()=>a,_:()=>s});var r=n(71207),o=n(43786);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function a(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,a=e=>e,s=e=>e){let l;try{if(!n)throw Error();l=n[e]||new i}catch{l=new i}let{throwQuotaErrorsOnSet:c}=t;function u(e){t.sendCacheStats&&(0,o.b)({incrementKey:e})}function m(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(l.getItem(r));if(o&&t>o)return m(e),m(r),u("SAFE_STORAGE_VALUE_EXPIRED"),null;return u("SAFE_STORAGE_VALUE_WITHIN_TTL"),a(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(l.setItem(e,s(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;l.setItem(n,o.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:m,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return a(e,{throwQuotaErrorsOnSet:!1},r.iG,JSON.parse,JSON.stringify)}},65706:(e,t,n)=>{n.d(t,{LS:()=>o,cl:()=>i,rV:()=>r});let{getItem:r,setItem:o,removeItem:i}=(0,n(56363).Z)("sessionStorage")},58374:(e,t,n)=>{n.d(t,{Ak:()=>E,CI:()=>S,Gj:()=>v,J$:()=>w,Nb:()=>T,Nt:()=>g,OE:()=>h,U6:()=>f,Wl:()=>y,XL:()=>m,jN:()=>o,pS:()=>d,sj:()=>p,vu:()=>L,wG:()=>_,wP:()=>b});var r=n(65706);let o="reload",i="soft-nav:fail",a="soft-nav:fail-referrer",s="soft-nav:referrer",l="soft-nav:marker",c="soft-nav:react-app-name",u="soft-nav:latest-mechanism";function m(){(0,r.LS)(l,"0"),(0,r.cl)(s),(0,r.cl)(i),(0,r.cl)(a),(0,r.cl)(c),(0,r.cl)(u)}function f(e){(0,r.LS)(l,e)}function d(){(0,r.LS)(l,"0")}function p(){let e=(0,r.rV)(l);return e&&"0"!==e}function v(){return(0,r.rV)(l)}function h(){return!!y()}function y(){return(0,r.rV)(i)}function E(e){(0,r.LS)(i,e||o),(0,r.LS)(a,window.location.href)}function g(){(0,r.LS)(s,window.location.href)}function b(){return(0,r.rV)(s)||document.referrer}function w(){let e=T();e?(0,r.LS)(c,e):(0,r.cl)(c)}function S(){return(0,r.rV)(c)}function T(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function L(e){(0,r.LS)(u,e)}function _(){return(0,r.rV)(u)}},71207:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,n4:()=>o.n4,ssrSafeLocation:()=>o.jX,zu:()=>o.zu});var r=n(60327),o=n(66199)},66199:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>a,n4:()=>r,zu:()=>i});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,a="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},60327:(e,t,n)=>{n.d(t,{Qg:()=>i,W6:()=>o,cF:()=>a});var r=n(66199);let o=void 0===r.n4,i=!o;function a(){return!!o||!!r.n4.querySelector('react-app[data-ssr="true"]')}},43786:(e,t,n)=>{n.d(t,{B:()=>f,b:()=>l});var r=n(71207),o=n(87274),i=n(54508),a=n(18515);let s=[];function l(e,t=!1,n=.5){if(!0!==(0,a.cr)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=f(),e.bundler=i.A,Math.random()<n&&s.push(e),t?m():u()}}let c=null;async function u(){await o.C,null==c&&(c=window.requestIdleCallback(m))}function m(){if(c=null,!s.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}(n));return t}(s))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);s=[]}}function f(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",m),r.n4?.addEventListener("visibilitychange",m)},50655:(e,t,n)=>{n.d(t,{O:()=>c,d:()=>TrustedTypesPolicyError});var r=n(18515),o=n(43786),i=n(65809),a=n(27856),s=n.n(a),l=n(79697);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:a=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,r.cr)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return c&&new Promise(e=>{let n=window.performance.now(),r=s().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==r.length){let a=Error("Trusted Types policy output sanitized"),s=a.stack?.slice(0,1e3),c=i.slice(0,250);(0,l.qP)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:s,outputLength:i.length,sanitizedLength:r.length,executionTime:o-n}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return n}}},47940:(e,t,n)=>{n.d(t,{ZO:()=>u});var r,o=n(71207),i=n(43786);function a(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:a("createHTML"),createScript:a("createScript"),createScriptURL:a("createScriptURL")},l=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),c=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...s,...t})},u={createPolicy:(e,t)=>{if(l.has(e))return(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let n=Object.freeze(c.createPolicy(e,t));return l.set(e,n),n}}},m=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||m||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),m=!0)})}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_inline-comment_ts-app_assets_modules_github_discussions_v-a47e26-2a295ac58dca.js.map