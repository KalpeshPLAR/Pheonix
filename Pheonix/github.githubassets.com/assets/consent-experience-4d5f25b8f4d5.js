"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["consent-experience"],{69366:(e,t,r)=>{var a=r(74898),n=r(31190);(0,a.t)("consent-experience",{Component:n.O})},83206:(e,t,r)=>{r.d(t,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new a),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let a=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},48968:(e,t,r)=>{r.d(t,{Ac:()=>s,Z_:()=>i,ev:()=>n});var a=r(58081);function n(e){return((0,a.useEffect)(()=>{let t=e?.anchor;t&&("disabled"in t&&(t.disabled=!1),t.classList.remove("cursor-wait"))},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function s(e){let t=(0,a.useRef)(e.__wrapperElement.anchor||null),[r,n]=(0,a.useState)(!1),s=(0,a.useCallback)(()=>{n(!r)},[r,n]);return(0,a.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),i(e,s),{ref:t,open:r,setOpen:n}}function i(e,t){let r=(0,a.useRef)(e.__wrapperElement.anchor);(0,a.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},74898:(e,t,r)=>{r.d(t,{t:()=>c});let a=new(r(83206)).e;var n=r(48055),s=r(76006),i=r(60302),o=r(75069);let l=class ReactPartialElement extends i.S{async getReactNode(e){var t;let{Component:r}=await (t=this.name,a.getRegistration(t)),s=this.closest("react-partial-anchor");return(0,n.jsx)(o.S,{partialName:this.name,embeddedData:e,Component:r,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:s})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function c(e,t){a.register(e,t)}l=function(e,t,r,a){var n,s=arguments.length,i=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([s.Ih],l)},82914:(e,t,r)=>{r.d(t,{Z:()=>o});let{getItem:a,setItem:n,removeItem:s}=(0,r(56363).Z)("localStorage"),i="REACT_PROFILING_ENABLED",o={enable:()=>n(i,"true"),disable:()=>s(i),isEnabled:()=>!!a(i)}},31190:(e,t,r)=>{r.d(t,{O:()=>f});var a,n=r(48055),s=r(58081);let i={preamble:"Yes, please, I\u2019d like to hear from GitHub and its family of companies via email for personalized communications, targeted advertising, and campaign effectiveness. To withdraw consent or manage your contact preferences, visit the",preambleWithPhone:"Yes, please, I\u2019d like to hear from GitHub and its family of companies via email and phone for personalized communications, targeted advertising, and campaign effectiveness. To withdraw consent or manage your contact preferences, visit the",privacyStatementText:"GitHub Privacy Statement",settingsLinkText:"Promotional Communications Manager"};function o({fieldName:e,hasPhone:t=!1,labelClass:r,formControlClass:a,privacyStatementHref:s,emailSubscriptionSettingsLinkHref:o,children:l}){return(0,n.jsx)("div",{className:a,children:(0,n.jsxs)("label",{htmlFor:e,className:r,"data-testid":"label",children:[l,(0,n.jsxs)("p",{children:[t?i.preambleWithPhone:i.preamble," ",(0,n.jsx)("a",{href:o,children:i.settingsLinkText}),"."," ",(0,n.jsx)("a",{href:s,children:i.privacyStatementText}),"."]})]})})}try{o.displayName||(o.displayName="Canada")}catch{}let l={preamble:"Yes please, I\u2019d like GitHub and affiliates to use my information for personalized communications, targeted advertising and campaign effectiveness. See the",privacyStatementText:"GitHub Privacy Statement",postamble:"for more details."};function c({fieldName:e,labelClass:t,formControlClass:r,noticeClass:a,privacyStatementHref:s,children:i}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:r,children:(0,n.jsxs)("label",{htmlFor:e,className:t,"data-testid":"label",children:[i,(0,n.jsxs)("p",{children:[l.preamble," ",(0,n.jsx)("a",{href:s,children:l.privacyStatementText})," ",l.postamble]})]})}),(0,n.jsx)("p",{className:a,children:"Participation requires transferring your personal data to other countries in which GitHub operates, including the United States. By submitting this form, you agree to the transfer of your data outside of China."})]})}try{c.displayName||(c.displayName="China")}catch{}let d={preamble:"Yes please, I\u2019d like GitHub and affiliates to use my information for personalized communications, targeted advertising and campaign effectiveness. See the",privacyStatementText:"GitHub Privacy Statement",postamble:"for more details."};function m({fieldName:e,labelClass:t,formControlClass:r,privacyStatementHref:a,children:s}){return(0,n.jsx)("div",{className:r,children:(0,n.jsxs)("label",{htmlFor:e,className:t,"data-testid":"label",children:[s,(0,n.jsxs)("p",{children:[d.preamble," ",(0,n.jsx)("a",{href:a,children:d.privacyStatementText})," ",d.postamble]})]})})}try{m.displayName||(m.displayName="Default")}catch{}let h={privacyStatementText:"GitHub Privacy Statement"};function u({fieldName:e,exampleFields:t=[],formControlClass:r,noticeClass:a,privacyStatementHref:i,children:o,onValidationChange:l}){let c=t.join(", "),[d,m]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{l&&l(d)},[l,d]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:r,children:(0,n.jsxs)("label",{htmlFor:"south-korea-primary-consent",className:"text-normal",children:[(0,n.jsx)("input",{type:"checkbox",id:"south-korea-primary-consent",checked:d,onChange:e=>{m(e.target.checked)},required:!0}),(0,n.jsx)("p",{children:"I agree to the collection and use of my personal information (required)*:"}),(0,n.jsxs)("ul",{className:"my-2",children:[(0,n.jsxs)("li",{children:["Items of Personal Information to be Collected: ",c,", and any other fields visible on this form."]}),(0,n.jsx)("li",{children:"Purpose of Collection and Use: GitHub will use the data for the purpose described on this form."}),(0,n.jsxs)("li",{children:["Retention/Use Period of Personal Information:"," ",(0,n.jsx)("span",{className:"text-bold f3",children:"As long as needed to provide the service(s) you are requesting"})]})]})]})}),(0,n.jsx)("div",{className:r,children:(0,n.jsxs)("label",{htmlFor:e,"data-testid":"label",children:[o,(0,n.jsxs)("div",{className:"text-normal",children:[(0,n.jsx)("p",{children:"I agree to receiving marketing information and use of my personal information for marketing purposes (optional):"}),(0,n.jsxs)("ul",{className:"my-2",children:[(0,n.jsxs)("li",{className:"text-normal",children:[(0,n.jsx)("span",{className:"text-bold f3",children:"Consent to Receive Marketing:"})," The information collected may be used for GitHub for personalized communications, targeted advertising and campaign effectiveness."]}),(0,n.jsxs)("li",{className:"text-normal",children:["Items of Personal Information to be Collected: ",c,", and any other fields visible on this form."]}),(0,n.jsxs)("li",{className:"text-normal",children:["Purpose of Collection and Use:"," ",(0,n.jsx)("span",{className:"text-bold f3",children:"To contact you for marketing purposes."})]}),(0,n.jsxs)("li",{className:"text-normal",children:["Retention/Use Period of Personal Information:"," ",(0,n.jsx)("span",{className:"text-bold f3",children:"As long as needed to provide the service(s) you are requesting."})]})]})]})]})}),(0,n.jsxs)("p",{className:a,children:["You have the right to refuse the collection and use of your personal information, use of personal information for marketing purposes, and receiving marketing information as set forth above. However, if you refuse, you may not be able to receive the benefits described under Purpose of Collection & Use."," ",(0,n.jsx)("a",{href:i,children:h.privacyStatementText}),"."]})]})}try{u.displayName||(u.displayName="SouthKorea")}catch{}function p({country:e,children:t,...r}){let a=function(e){switch(e){case"KR":return u;case"CA":return o;case"CN":return c;default:return m}}(e);return(0,n.jsx)(a,{...r,children:t})}try{p.displayName||(p.displayName="ConsentLanguage")}catch{}try{(a=Component).displayName||(a.displayName="Component")}catch{}function f({countryFieldSelector:e,fieldName:t,fieldValue:r="1",onlySendIfChecked:a=!1,onValidationChange:i,...o}){let[l,c]=(0,s.useState)(""),[d,m]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{i&&i(!0)},[i]),(0,s.useEffect)(()=>{let t=document.querySelector(e);if(t){let e=e=>{i&&i(!0),c(e.currentTarget.value),m(!1)};return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}},[i,e]),(0,n.jsx)("div",{"data-testid":"consent-experience",children:(0,n.jsxs)(p,{fieldName:t,country:l,onValidationChange:i,...o,children:[!a&&(0,n.jsx)("input",{type:"hidden",name:t,value:"0","data-testid":"hidden-consent"}),(0,n.jsx)("input",{type:"checkbox",name:t,value:r,id:t,className:"form-control",checked:d,onChange:()=>m(!d)})]})})}try{f.displayName||(f.displayName="ConsentExperience")}catch{}},75069:(e,t,r)=>{r.d(t,{S:()=>p});var a=r(48055),n=r(58081),s=r(53167),i=r(12599),o=r(73216),l=r(89250),c=r(22877);function d({children:e,history:t}){let[r,s]=(0,n.useState)({location:t.location});return(0,c.g)(()=>t.listen(s),[t]),(0,a.jsx)(l.F0,{location:r.location,navigator:t,children:e})}try{d.displayName||(d.displayName="PartialRouter")}catch{}var m=r(80491),h=r(7533),u=r(48968);function p({partialName:e,embeddedData:t,Component:r,wasServerRendered:l,ssrError:c,anchorElement:p}){let f=n.useRef(),g=globalThis.window;f.current||(f.current=g?(0,h.l)({window:g}):(0,i.PP)({initialEntries:[{pathname:"/"}]}));let y=f.current,b=(0,u.ev)(p);return(0,a.jsx)(s.R,{appName:e,wasServerRendered:l,children:(0,a.jsx)(o.i,{history:y,routes:[],children:(0,a.jsxs)(d,{history:y,children:[(0,a.jsx)(r,{...t.props,...b}),(0,a.jsx)(m.P,{ssrError:c})]})})})}try{p.displayName||(p.displayName="PartialEntry")}catch{}},60302:(e,t,r)=>{r.d(t,{S:()=>ReactBaseElement});var a=r(48055),n=r(76006),s=r(27876),i=r(58081),o=r(82914),l=r(18448),c=r(43786);function d(e,t,r,a){var n,s=arguments.length,i=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}let m=RegExp("Minified React error #(?<invariant>\\d+)");let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:s.s,hydrateRoot:s.a};o.Z.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,n=await this.getReactNode(t),l=(0,a.jsx)(i.StrictMode,{children:n});if(r&&this.logSSRError(r),this.hasSSRContent){let t=this.querySelector('style[data-styled="true"]');t&&document.head.appendChild(t),this.root=e.hydrateRoot(this.reactRoot,l,{onRecoverableError:e=>{if(!(e instanceof Error))return;let t=m.exec(e.message),r=String(t?.groups?.invariant);(0,c.b)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:r}})}}),t&&requestIdleCallback(()=>{t.parentElement?.removeChild(t)})}else this.root=e.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,19547,19))}logSSRError(e){if(l.t[e])return console.error("SSR failed with an expected error:",l.t[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ";return e.stacktrace.map(e=>{let{function:r,filename:a,lineno:n,colno:s}=e,i=`${t} at ${r} (${a}:${n}:${s})`;return t=" ",i}).join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};d([n.fA],ReactBaseElement.prototype,"embeddedData",void 0),d([n.fA],ReactBaseElement.prototype,"ssrError",void 0),d([n.fA],ReactBaseElement.prototype,"reactRoot",void 0);try{m.displayName||(m.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-541a38","vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_github_ca-9009bd","ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c"],()=>t(69366)),e.O()}]);
//# sourceMappingURL=consent-experience-38bd4aa82d6f.js.map