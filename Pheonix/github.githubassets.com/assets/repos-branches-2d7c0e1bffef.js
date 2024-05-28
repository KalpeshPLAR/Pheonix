"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["repos-branches"],{91534:(e,t,r)=>{r.d(t,{Z:()=>a});let a=(e,t)=>{let r=new URL(e,window.location.origin),a=new URL(t,window.location.origin);return a.href.includes("#")&&r.host===a.host&&r.pathname===a.pathname&&r.search===a.search}},20431:(e,t,r)=>{var a,s=r(48055),n=r(12008),i=r(52674),l=r(51952),o=r(58081);let c=(0,o.createContext)(null);function d({options:e,children:t}){return(0,s.jsx)(c.Provider,{value:e,children:t})}function u(){let e=(0,o.useContext)(c);if(!e)throw Error("useCreateBranchButtonOptions must be used within CreateBranchButtonOptionProvider");return e}try{c.displayName||(c.displayName="CreateBranchButtonOptionContext")}catch{}try{d.displayName||(d.displayName="CreateBranchButtonOptionProvider")}catch{}let h=(0,o.createContext)(void 0);function p({user:e,children:t}){return(0,s.jsxs)(h.Provider,{value:e,children:[" ",t," "]})}function m(){return(0,o.useContext)(h)}try{h.displayName||(h.displayName="CurrentUserContext")}catch{}try{p.displayName||(p.displayName="CurrentUserProvider")}catch{}function x({children:e}){let{repo:t,createBranchButtonOptions:r,currentUser:a}=(0,n.M)();return(0,s.jsx)(p,{user:a,children:(0,s.jsx)(i.d,{repository:t,children:(0,s.jsx)(d,{options:r,children:(0,s.jsx)(l.xp,{children:e})})})})}try{x.displayName||(x.displayName="App")}catch{}var _=r(42483),b=r(97011),y=r(98833),g=r(85529),f=r(77461),j=r(48363),v=r(24533),w=r(81313),C=r(75308),N=r(31147),k=r(21024);let B=[{type:"overview",title:"Overview",href:"branches"},{type:"yours",title:"Yours",href:"branches/yours",onlyShowForPushUsers:!0},{type:"active",title:"Active",href:"branches/active"},{type:"stale",title:"Stale",href:"branches/stale"},{type:"all",title:"All",href:"branches/all"}];var S=r(85193),P=r(9770),R=r(51526),Z=r(46263);function I(){let e=(0,i.H)();return(0,o.useCallback)(t=>{let{href:r}=B.find(e=>e.type===t)||{};if(r)return`/${e.ownerLogin}/${e.name}/${r}`},[e.name,e.ownerLogin])}function L({onChange:e,selectedPage:t,sx:r={}}){let[a,n]=(0,S.l)(),[i,l]=(0,o.useState)(a.get("query")??""),c=(0,o.useRef)(null),d=(0,S.s)(),u=I(),h=(0,o.useRef)((0,Z.D)(r=>{e?.(r),"all"!==t?d(`${u("all")}?query=${encodeURIComponent(r)}&lastTab=${encodeURIComponent(t)}`,{replace:!0}):a.get("lastTab")&&!r?d(`${u(a.get("lastTab"))}?query=`,{replace:!0}):n({query:r},{replace:!0})},250));return(0,o.useEffect)(()=>{a.has("query")&&c.current?.focus()},[a]),(0,s.jsxs)(P.Z,{sx:r,children:[(0,s.jsx)(P.Z.Label,{visuallyHidden:!0,children:"Search"}),(0,s.jsx)(R.Z,{value:i,ref:c,placeholder:"Search branches...",leadingVisual:g.SearchIcon,onChange:e=>{l(e.target.value),h.current(e.target.value)},block:!0})]})}try{L.displayName||(L.displayName="SearchInput")}catch{}var D=r(90122);function T({sx:e={}}){let{current_page:t,has_more:r}=(0,v.T)(),[a,n]=(0,S.l)(),i=r?t+1:t;return 1===t&&1===i?null:(0,s.jsx)(_.Z,{sx:e,children:(0,s.jsx)(D.Z,{pageCount:i,currentPage:t,onPageChange:(e,r)=>{e.preventDefault(),t!==r&&(a.set("page",`${r}`),n(a))},showPages:!1})})}try{T.displayName||(T.displayName="BranchPagination")}catch{}function A({selectedPage:e,children:t}){let{currentUserCanPush:r}=(0,i.H)(),a=I(),n=u();return(0,s.jsxs)(w.X,{children:[(0,s.jsx)(w.X.Header,{children:(0,s.jsxs)(_.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(C.Z,{as:"h1",sx:{fontSize:4,fontWeight:"normal"},children:"Branches"}),(0,s.jsx)(_.Z,{sx:{display:"flex",alignItems:"center"},children:r&&(0,s.jsx)(k.q,{...n,liveReload:!0})})]})}),(0,s.jsx)(w.X.Content,{as:"div",children:(0,s.jsxs)(_.Z,{sx:{display:"flex",flexDirection:"column",gap:3},children:[(0,s.jsx)(N.Z,{children:B.filter(({onlyShowForPushUsers:e})=>r||!e).map(t=>(0,s.jsx)(N.Z.Link,{as:f.r,to:a(t.type),selected:t.type===e,children:t.title},t.type))}),(0,s.jsx)(L,{selectedPage:e}),(0,s.jsx)(_.Z,{"data-hpc":!0,children:t}),"overview"!==e?(0,s.jsx)(T,{}):null]})})]})}try{A.displayName||(A.displayName="Layout")}catch{}var M=r(63309),z=r(50295),q=r(45433),$=r(46008),U=r(14136),F=r(65379),G=r(50919),O=r(79621);function H({rulesetsPath:e,protectedByBranchProtections:t}){return(0,o.useMemo)(()=>{let r=2;return e?r=1:t&&(r=0),{isProtectedBy:{branchProtections:0===r,rulesets:1===r},isProtected:2!==r}},[t,e])}function E({isLarge:e,...t}){let{isProtectedBy:r}=H(t),a=(0,o.useRef)(null),n=!e&&t.name.length<5?"ne":void 0,[i,l]=(0,O.g)({contentRef:a,"aria-label":"This branch is protected by branch protections",direction:n});return r.branchProtections?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.Z,{"data-testid":"branch-protection-shield",ref:a,...i,children:(0,s.jsx)(y.Z,{size:16,icon:g.ShieldIcon,"aria-label":"This branch is protected by branch protections",sx:{width:32,color:"fg.muted"}})}),l]}):r.rulesets?(0,s.jsx)(F.Z,{"aria-label":"View rules",children:(0,s.jsx)(f.r,{to:t.rulesetsPath,"aria-label":"This branch is protected",children:(0,s.jsx)(G.h,{variant:"invisible",icon:g.ShieldIcon,"aria-label":"This branch is protected"})})}):null}!function(e){e[e.protectedByBranchProtections=0]="protectedByBranchProtections",e[e.protectedByRulesets=1]="protectedByRulesets",e[e.unprotected=2]="unprotected"}(a||(a={}));try{E.displayName||(E.displayName="BranchProtectionShield")}catch{}var V=r(48170),W=r(79902);let Q={[l._G.small]:200,[l._G.medium]:200,[l._G.large]:225,[l._G.xlarge]:250,[l._G.xxlarge]:460,[l._G.xxxlarge]:530,[l._G.xxxxlarge]:540},X=e=>Q[e]??Q[l._G.small];function Y({sx:e={},...t}){let{screenSize:r}=(0,l.eI)(),{isProtected:a}=H(t);return(0,s.jsx)(V.Z,{href:t.path,sx:e,children:(0,s.jsx)(W.Z,{title:t.name,maxWidth:X(r)+(a?-32:0),children:t.name})})}try{Y.displayName||(Y.displayName="TruncatedBranchName")}catch{}function K({isLarge:e=!1,sx:t={},...r}){let a=!e&&r.name.length<3?"ne":void 0;return(0,s.jsxs)(_.Z,{sx:{...t,display:"flex",alignItems:"center",gap:2,height:J},children:[(0,s.jsx)(Y,{...r}),(0,s.jsxs)(_.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(U.m,{sx:{display:"flex",justifyContent:"center",width:J},textToCopy:r.name,ariaLabel:"Copy branch name to clipboard",tooltipProps:{direction:a},hasPortalTooltip:!0}),(0,s.jsx)(E,{...r,isLarge:e})]})]})}let J=32;try{K.displayName||(K.displayName="BranchDescription")}catch{}var ee=r(7606),et=r(73290),er=r(40663),ea=r(41436),es=r(22326),en=r(79804);function ei({user:e,updatedAt:t,deletedAt:r,sx:a={}}){return(0,s.jsxs)(_.Z,{sx:{...a,display:"flex",flexDirection:"row",alignItems:"center"},children:[e&&(e.path.startsWith("/apps/")?(0,s.jsx)(ea.u,{text:e.name,children:(0,s.jsx)(et.Z,{href:e.path,sx:{display:"flex",alignItems:"center"},children:(0,s.jsx)(en.O,{"aria-label":e.login,src:e.avatarUrl,alt:e.login,sx:{mr:2},size:16,square:!0})})}):(0,s.jsx)(et.Z,{href:e.path,"data-hovercard-url":(0,es.zP)({owner:e.login}),sx:{display:"flex",alignItems:"center"},children:(0,s.jsx)(en.O,{"aria-label":e.login,src:e.avatarUrl,alt:e.login,sx:{mr:2},size:16,square:!1})})),r&&(0,s.jsx)(b.Z,{children:"Deleted"}),"\xa0",(0,s.jsx)(er.Z,{datetime:r||t,tense:"past"})]})}try{ei.displayName||(ei.displayName="UpdatedBy")}catch{}var el=r(57793);let eo=(0,o.lazy)(()=>r.e("ui_packages_repos-branches_components_StatusCheckRollup_tsx").then(r.bind(r,93890))),ec=(0,o.lazy)(()=>r.e("ui_packages_repos-branches_components_PullRequestLabel_tsx").then(r.bind(r,58786))),ed=(0,o.lazy)(()=>r.e("ui_packages_repos-branches_components_MergeQueueLabel_tsx").then(r.bind(r,48844))),eu=(0,o.lazy)(()=>Promise.resolve().then(r.bind(r,7606)));function eh({labelId:e,branches:t,deferredMetadata:r,showMergeQueueHeader:a,isLarge:n=!1}){let l=(0,i.H)(),c=m(),[d,u]=(0,o.useState)([]);return 0===t.length?(0,s.jsxs)(z.Z,{border:!0,children:[(0,s.jsx)(z.Z.Visual,{children:(0,s.jsx)(g.GitBranchIcon,{size:"medium"})}),(0,s.jsx)(z.Z.Heading,{children:"No branches"}),(0,s.jsx)(z.Z.Description,{children:"No branches match the search"})]}):(0,s.jsx)(q.w,{"aria-labelledby":e,data:t.map(e=>{let t=r?.get(e.name);return{id:e.name,...e,author:e.author??t?.author,oid:t?.oid,deletedAt:r&&r.size>0&&void 0===t&&!e.isBeingRenamed?e.authoredDate:void 0,aheadBehind:t?.aheadBehind,statusCheckRollup:t?.statusCheckRollup,pullRequest:t?.pullRequest,mergeQueue:t?.mergeQueue,maxDiverged:t?.maxDiverged,isLarge:n}}),columns:[{header:"Branch",field:"name",width:"grow",renderCell:e=>(0,s.jsx)(K,{...e})},{header:"Updated",field:"author",width:180,renderCell:({author:e,authoredDate:t,name:a,deletedAt:n})=>{let i=d.includes(a);return(0,s.jsx)(ep,{children:(0,s.jsxs)(s.Fragment,{children:[r||i||e?null:(0,s.jsx)($.o,{variant:"rounded",sx:{width:16,height:16,mr:2}}),(0,s.jsx)(ei,{user:i?c:e,updatedAt:t,deletedAt:i?new Date().toISOString():n})]})})}},{header:"Check status",id:"statusCheckRollup",width:125,renderCell:({oid:e,statusCheckRollup:t})=>{let a=(0,s.jsx)($.o,{variant:"rounded",sx:{width:"33%",maxWidth:"42px",height:"20px"}});return r?e&&t?(0,s.jsx)(ep,{children:(0,s.jsx)(o.Suspense,{fallback:a,children:(0,s.jsx)(eo,{oid:e,statusCheckRollup:t})})}):null:(0,s.jsx)(ep,{children:a})}},{header:()=>(0,s.jsxs)(_.Z,{sx:{display:"flex",justifyContent:"center",mr:"3px",flexGrow:1},children:[(0,s.jsx)(b.Z,{sx:{borderRight:"1px solid",borderColor:"border.default",pr:1},children:"Behind"}),(0,s.jsx)(b.Z,{sx:{pl:1},children:"Ahead"})]}),field:"aheadBehind",width:ee.AheadBehindCountWidth,renderCell:({isDefault:e,aheadBehind:t,maxDiverged:a})=>{let n=(0,s.jsx)($.o,{variant:"rounded",sx:{width:ee.AheadBehindCountWidth-24,height:"20px"}});return r?e?(0,s.jsx)(ep,{sx:{justifyContent:"center",flexGrow:1},children:(0,s.jsx)(M.Z,{children:"Default"})}):t?(0,s.jsx)(o.Suspense,{fallback:n,children:(0,s.jsx)(eu,{width:ee.AheadBehindCountWidth-24,aheadCount:t[0],behindCount:t[1],maxDiverged:a})}):null:(0,s.jsx)(ep,{children:n})}},{header:a?"Merge queue":"Pull request",id:"pullRequestOrMergeQueue",width:125,renderCell:({mergeQueue:e,pullRequest:t})=>{let a=(0,s.jsx)($.o,{variant:"rounded",sx:{width:"33%",maxWidth:"75px",height:"20px"}});return r?e?(0,s.jsx)(ep,{children:(0,s.jsx)(o.Suspense,{fallback:a,children:(0,s.jsx)(ed,{mergeQueueUrl:e.path,queueCount:e.count})})}):t?(0,s.jsx)(ep,{children:(0,s.jsx)(o.Suspense,{fallback:a,children:(0,s.jsx)(ec,{repo:l,pullRequest:t})})}):null:(0,s.jsx)(ep,{children:a})}},{header:()=>(0,s.jsx)(b.Z,{className:"sr-only",sx:{position:"relative"},children:"Action menu"}),id:"actionMenu",width:70,renderCell:({isDefault:e,name:t,rulesetsPath:r,path:a,deleteable:n,deleteProtected:i,renameable:o,isBeingRenamed:c,oid:h,pullRequest:p,deletedAt:m})=>(0,s.jsx)(el.G,{repo:l,branch:{isDefault:e,name:t,rulesetsPath:r,path:a,deleteable:n,deleteProtected:i,renameable:o,isBeingRenamed:c},oid:h,pullRequest:p,deletedBranches:d,onDeletedBranchesChange:u,sx:{float:"right"},deletedAt:m})}]})}let ep=({sx:e,children:t})=>(0,s.jsx)(_.Z,{sx:{display:"flex",alignItems:"center",height:32,...e},children:t});try{eo.displayName||(eo.displayName="StatusCheckRollup")}catch{}try{ec.displayName||(ec.displayName="PullRequestLabel")}catch{}try{ed.displayName||(ed.displayName="MergeQueueLabel")}catch{}try{eu.displayName||(eu.displayName="AheadBehindCount")}catch{}try{eh.displayName||(eh.displayName="BranchesTable")}catch{}try{ep.displayName||(ep.displayName="VerticallyCenteredCell")}catch{}var em=r(88216),ex=r(59434),e_=r(87623);function eb({onDismiss:e}){let t=m(),{defaultBranch:r,ownerLogin:a,name:n,id:l}=(0,i.H)(),{helpUrl:c}=u(),{sendClickAnalyticsEvent:d}=(0,ex.w)(),h=(0,o.useCallback)(()=>{t&&(async()=>{(await (0,e_.Q)(`${(0,es.xv)(t)}?notice_name=sculk_protect_this_branch&repository_id=${l}`,{method:"DELETE"})).ok&&e()})()},[t,l,e]),p=(0,o.useCallback)(()=>{d({category:"suggestion",action:"click_to_dismiss",label:"ref_cta:dismiss;ref_loc:repo_branches_listing;"})},[d]),x=(0,o.useCallback)(()=>{d({category:"suggestion",action:"click_to_learn_more_about_rulesets",label:"ref_cta:learn_more_about_rulesets;ref_loc:repo_files_listing;"})},[d]),y=(0,o.useCallback)(()=>{d({category:"suggestion",action:"click_to_add_a_rule",label:"ref_cta:protect_this_branch;ref_loc:repo_branches_listing;"})},[d]);return(0,s.jsx)(_.Z,{sx:{position:"relative",width:"100%",borderTop:1,overflow:"hidden"},as:"aside",className:"color-border-default js-notice","aria-label":`Your ${r} branch isn't protected`,children:(0,s.jsxs)(_.Z,{sx:{display:"flex",p:2,justifyContent:"space-between",flexDirection:["column","column","row","row"],gap:[2,2,null,null]},"data-testid":"protect-this-branch-banner",children:[(0,s.jsxs)(_.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(_.Z,{sx:{float:"none",mr:3,ml:0},"data-testid":"protect-this-branch-primer-icon",className:"branch-action-item-icon completeness-indicator completeness-indicator-problem",children:(0,s.jsx)(g.GitBranchIcon,{})}),(0,s.jsxs)(_.Z,{children:[(0,s.jsxs)(_.Z,{as:"h3",sx:{mb:1},className:"h5",children:["Your ",r," branch isn't protected"]}),(0,s.jsxs)(b.Z,{as:"p",sx:{fontSize:0,color:"fg.muted",mb:0},children:["Protect this branch from force pushing or deletion, or require status checks before merging.\xa0",(0,s.jsx)(f.r,{onClick:x,to:`${c}/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets`,style:{textDecoration:"underline"},children:"Learn more"})]})]})]}),(0,s.jsxs)(_.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(em.r,{variant:"invisible",onClick:()=>{h(),p()},sx:{fontSize:0,color:"fg.muted",mx:3},children:"Dismiss"}),(0,s.jsx)(f.r,{onClick:y,to:(0,es.uP)({owner:a,repo:n}),className:"btn btn-sm",children:"Protect this branch"})]})]})})}try{eb.displayName||(eb.displayName="ProtectThisBranchBanner")}catch{}function ey(e,t){let[r,a]=(0,o.useState)(void 0),[s]=(0,S.l)(),n=s.get("query")??"",i=new URLSearchParams;n.length>0&&i.append("include_authors","true");let l=`${(0,es.FL)({owner:e.ownerLogin,repo:e.name,action:"branches"})}/deferred_metadata?${i.toString()}`;return(0,o.useEffect)(()=>{let e=!1;return(async()=>{if(a(void 0),!t.length){a(new Map);return}let r=await (0,e_.v)(l,{body:{branches:t},method:"POST"});if(!e)try{if(r.ok){let e=await r.json();e&&a(new Map(Object.entries(e.deferredMetadata)))}else a(new Map)}catch(e){a(new Map)}})(),function(){e=!0}},[t,l]),r}function eg({id:e,title:t,viewMorePath:r,branches:a,deferredMetadata:n,showMergeQueueHeader:i,showFooter:o,isSecurityAdvisory:c,onDismissBanner:d=()=>null}){let{screenSize:u}=(0,l.eI)(),h=u>=l._G.xxxlarge,p="default"===e;return a.length?(0,s.jsxs)(_.Z,{sx:{mb:3},children:[(0,s.jsxs)(j.i.Container,{sx:o?{"& .TableOverflowWrapper:last-child .Table .TableBody .TableRow:last-of-type .TableCell":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}:null,children:[(0,s.jsx)(j.i.Title,{as:"h2",id:e,children:t}),(0,s.jsx)(eh,{labelId:e,branches:a,deferredMetadata:n,showMergeQueueHeader:i,isLarge:h})]}),p&&o&&!c?(0,s.jsx)(ej,{children:(0,s.jsx)(eb,{onDismiss:d})}):null,r&&o?(0,s.jsx)(ej,{children:(0,s.jsx)(b.Z,{children:(0,s.jsxs)(f.r,{to:r,children:["View more branches ",(0,s.jsx)(y.Z,{icon:g.ChevronRightIcon})]})})}):null]}):null}function ef(){let e=(0,v.T)(),t=I(),r=(0,i.H)(),a=e.protectThisBranchBanner.isSecurityAdvisory,[n,l]=(0,o.useState)(e.protectThisBranchBanner.dismissed),c=ey(r,(0,o.useMemo)(()=>(e.branches.default?[e.branches.default]:[]).concat(e.branches.yours).concat(e.branches.active).map(e=>e.name),[e.branches.active,e.branches.default,e.branches.yours]));return(0,s.jsxs)(A,{selectedPage:"overview",children:[e.branches.default&&(0,s.jsx)(eg,{id:"default",title:"Default",branches:[e.branches.default],deferredMetadata:c,showMergeQueueHeader:e.branches.default.mergeQueueEnabled,onDismissBanner:()=>{l(!0)},showFooter:!n,isSecurityAdvisory:a}),(0,s.jsx)(eg,{id:"yours",title:"Your branches",branches:e.branches.yours,deferredMetadata:c,viewMorePath:t("yours"),showFooter:e.hasMore.yours}),(0,s.jsx)(eg,{id:"Active",title:"Active branches",branches:e.branches.active,deferredMetadata:c,viewMorePath:t("active"),showFooter:e.hasMore.active})]})}function ej({children:e}){return(0,s.jsx)(_.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"space-between",padding:2,border:"1px solid",borderTop:0,borderColor:"border.default",borderBottomLeftRadius:2,borderBottomRightRadius:2},children:e})}try{eg.displayName||(eg.displayName="BranchSection")}catch{}try{ef.displayName||(ef.displayName="Overview")}catch{}try{ej.displayName||(ej.displayName="FooterRow")}catch{}var ev=r(96810),ew=r(5475),eC=r(80810);function eN(){return(0,s.jsx)(eP,{type:"yours"})}function ek(){return(0,s.jsx)(eP,{type:"active"})}function eB(){return(0,s.jsx)(eP,{type:"stale"})}function eS(){return(0,s.jsx)(eP,{type:"all"})}function eP({type:e}){let t=(0,v.T)(),r=(0,i.H)(),[a]=(0,S.l)(),{screenSize:n}=(0,l.eI)(),c=n>=l._G.xxxlarge,d=(0,o.useMemo)(()=>t.branches.map(e=>e.name),[t.branches]),u=ey(r,d);return(0,o.useEffect)(()=>{a.get("query")&&(0===d.length?(0,eC.x)("No results found"):(0,eC.x)(`${d.length} result${d.length>1?"s":""} found`))},[d,a]),(0,s.jsx)(A,{selectedPage:e,children:(0,s.jsx)(eh,{branches:t.branches,deferredMetadata:u,isLarge:c})})}try{eN.displayName||(eN.displayName="Yours")}catch{}try{ek.displayName||(ek.displayName="Active")}catch{}try{eB.displayName||(eB.displayName="Stale")}catch{}try{eS.displayName||(eS.displayName="All")}catch{}try{eP.displayName||(eP.displayName="List")}catch{}(0,ev.g)("repos-branches",()=>({App:x,routes:[(0,ew.g)({path:"/:user_id/:repository/branches",Component:ef}),(0,ew.g)({path:"/:user_id/:repository/branches/yours",Component:eN}),(0,ew.g)({path:"/:user_id/:repository/branches/active",Component:ek}),(0,ew.g)({path:"/:user_id/:repository/branches/stale",Component:eB}),(0,ew.g)({path:"/:user_id/:repository/branches/all",Component:eS})]}))},59434:(e,t,r)=>{r.d(t,{w:()=>l,z:()=>i});var a=r(58081),s=r(79697),n=r(15470);function i(){let e=(0,a.useContext)(n.f);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:r,metadata:i}=e;return{sendAnalyticsEvent:(0,a.useCallback)((e,a,n={})=>{let l={react:!0,app_name:t,category:r,...i};(0,s.qP)(e,{...l,...n,target:a})},[t,r,i])}}function l(){let{sendAnalyticsEvent:e}=i();return{sendClickAnalyticsEvent:(0,a.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},85193:(e,t,r)=>{r.d(t,{l:()=>h,s:()=>u});var a=r(58081),s=r(89250),n=r(12599),i=r(79655),l=r(91534),o=r(40940),c=r(10394),d=r(42439);let u=()=>{let{routes:e,history:t}=a.useContext(o.I),i=(0,s.s0)();return a.useCallback((a,s)=>{let o=(0,n.i3)(a).pathname;if((0,n.fp)(e,o))(0,l.Z)(location.href,a.toString())||(0,c.LD)("react"),(0,d.X)(()=>{i(a,s);let{turbo:e,...t}=window.history.state;window.history.replaceState({...t,skipTurbo:!0},"",location.href)});else{let e=t.createHref(a);(async()=>{let{softNavigate:t}=await Promise.all([r.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"),r.e("ui_packages_soft-navigate_soft-navigate_ts")]).then(r.bind(r,12272));t(e)})()}},[t,i,e])},h=()=>{let[e]=(0,i.lr)(),t=u(),{pathname:r}=(0,s.TH)(),n=a.useCallback((a,s)=>{t({pathname:r,search:(0,i.fW)("function"==typeof a?a(e):a).toString()},s)},[e,t,r]);return[e,n]}},52674:(e,t,r)=>{r.d(t,{H:()=>l,d:()=>i});var a=r(48055),s=r(58081);let n=s.createContext({});function i({repository:e,children:t}){return(0,a.jsxs)(n.Provider,{value:e,children:[" ",t," "]})}function l(){return s.useContext(n)}try{n.displayName||(n.displayName="CurrentRepositoryContext")}catch{}try{i.displayName||(i.displayName="CurrentRepositoryProvider")}catch{}},79804:(e,t,r)=>{r.d(t,{O:()=>l});var a=r(48055),s=r(58081),n=r(26012),i=r(71207);let l=(0,s.forwardRef)(function({src:e,size:t=20,...r},l){let o=(0,s.useMemo)(()=>{let r=new URL(e,i.ssrSafeLocation.origin);return r.searchParams.has("size")||r.searchParams.has("s")||r.searchParams.set("size",String(2*Number(t))),r.toString()},[e,t]);return(0,a.jsx)(n.Z,{ref:l,src:o,size:t,"data-testid":"github-avatar",...r})});try{l.displayName||(l.displayName="GitHubAvatar")}catch{}},5475:(e,t,r)=>{r.d(t,{g:()=>a});function a({path:e,Component:t,shouldNavigateOnError:r,transitionType:a,children:s}){return{path:e,Component:t,coreLoader:async function({location:e}){let t;try{let r=`${e.pathname}${e.search}`;t=await window.fetch(r,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest","X-GitHub-Target":"dotcom"}})}catch(e){return{type:r?"route-handled-error":"error",error:{type:"fetchError"}}}if(t.redirected)return{type:"redirect",url:t.url};if(!t.ok)return{type:r?"route-handled-error":"error",error:{type:"httpError",httpStatus:t.status}};try{let e=await t.json();return{type:"loaded",data:e,title:e.title}}catch(e){return{type:r?"route-handled-error":"error",error:{type:"badResponseError"}}}},loadFromEmbeddedData:function({embeddedData:e}){return{data:e,title:e.title}},transitionType:a,children:s}}},77461:(e,t,r)=>{r.d(t,{r:()=>c});var a=r(48055),s=r(58081),n=r(12599),i=r(79655),l=r(40940),o=r(71207);let c=s.forwardRef(({to:e,reloadDocument:t,...r},c)=>{let{routes:d}=s.useContext(l.I),u=(0,n.i3)(e,o.ssrSafeLocation.pathname).pathname;return t=t??!(0,n.fp)(d,u),(0,a.jsx)(i.rU,{to:e,...r,reloadDocument:t,ref:c})});c.displayName="Link"},7606:(e,t,r)=>{r.r(t),r.d(t,{AheadBehindCountWidth:()=>o,default:()=>i,scaleAheadBehind:()=>c});var a=r(48055),s=r(42483),n=r(65379);function i({aheadCount:e,behindCount:t,maxDiverged:r,width:i=o,sx:d={}}){let u=e+t,h=void 0!==r?c(e,r):Math.floor(e/u*100),p=void 0!==r?c(t,r):100-h;return(0,a.jsx)(s.Z,{sx:{...d,display:"inline-block",color:"fg.muted"},"aria-label":`Ahead behind count: ${u}`,className:"branch-a-b-count",role:"img",children:(0,a.jsx)(n.Z,{"aria-label":`Ahead behind count: ${u}`,children:(0,a.jsxs)(s.Z,{sx:{display:"flex",width:i},children:[(0,a.jsx)(l,{aheadOrBehind:"behind",count:t,percentage:p}),(0,a.jsx)(l,{aheadOrBehind:"ahead",count:e,percentage:h})]})})})}let l=({aheadOrBehind:e,count:t,percentage:r})=>(0,a.jsxs)(s.Z,{sx:{position:"relative",width:"50%",paddingBottom:1,..."ahead"===e?{textAlign:"left",borderLeft:"1px solid",borderColor:"border.default"}:{textAlign:"right"}},children:[(0,a.jsx)(s.Z,{sx:{position:"relative",display:"block",top:"-1px",paddingX:1,fontSize:0},children:t}),(0,a.jsx)(s.Z,{"data-testid":`ahead-behind-${r}`,sx:{position:"absolute",width:`${r}%`,minWidth:1,height:"4px",..."ahead"===e?{left:0,borderRadiusTopRight:2,borderRadiusBottomRight:2}:{right:0,borderRadiusTopLeft:2,borderRadiusBottomLeft:2}},children:(0,a.jsx)(s.Z,{sx:{position:"absolute",height:"100%",backgroundColor:t>0?"neutral.muted":"transparent",..."ahead"===e?{left:0}:{right:0}},className:"anim-grow-x"})})]}),o=150;function c(e,t){return e=e<=0?0:Math.log10(e),parseFloat((100*((t=t<=0?0:Math.log10(t))>0?e/t:0)).toFixed(2))}try{i.displayName||(i.displayName="AheadBehindCount")}catch{}try{l.displayName||(l.displayName="CountHalf")}catch{}},57793:(e,t,r)=>{r.d(t,{G:()=>b,N:()=>_});var a=r(48055),s=r(58081),n=r(42483),i=r(50919),l=r(45677),o=r(14786),c=r(85529),d=r(77461),u=r(22326),h=r(88049),p=r(87623);let m=(0,s.lazy)(()=>r.e("ui_packages_repos-branches_components_DeleteBranchDialog_tsx").then(r.bind(r,71165))),x=(0,s.lazy)(()=>r.e("ui_packages_repos-branches_components_RenameBranchDialog_tsx").then(r.bind(r,58965)));async function _(e,t,r,a,s){e(!0);let n=await (0,p.Q)(`${(0,u.v2)({repo:s})}/${encodeURIComponent(t)}`,{method:"delete"});return n.ok&&a([...r,t]),e(!1),n.ok}function b({repo:e,branch:t,oid:r,pullRequest:b,deletedBranches:y,onDeletedBranchesChange:g,sx:f={},deletedAt:j}){let{addToast:v}=(0,h.V6)(),[w,C]=(0,s.useState)(!1),[N,k]=(0,s.useState)(!1),[B,S]=(0,s.useState)(!1);async function P(){w||N||!r||(t.isDefault?v({type:"error",message:"You can't delete the default branch."}):t.deleteProtected?v({type:"error",message:"You can't delete this protected branch."}):t.isBeingRenamed?v({type:"error",message:"You can't delete this branch because it is being renamed."}):t.deleteable&&r?b?.state==="open"?S(!0):await _(C,t.name,y,g,e)||v({type:"error",message:"Branch could not be deleted."}):v({type:"error",message:"You can't delete this branch."}))}async function R(){N||w||!r||(k(!0),(await (0,p.Q)(`${(0,u.v2)({repo:e})}/?branch=${r}&name=${t.name}`,{method:"post"})).ok?g(y.filter(e=>e!==t.name)):v({type:"error",message:"Branch could not be restored."}),k(!1))}let[Z,I]=(0,s.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end",...f},children:y.includes(t.name)&&r?(0,a.jsx)(i.h,{icon:c.UndoIcon,onClick:R,size:"small",variant:"invisible","aria-label":"Restore"}):(0,a.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,a.jsx)(i.h,{icon:c.TrashIcon,variant:"invisible",onClick:()=>{j?v({type:"error",message:"This branch no longer exists."}):P()},"aria-label":"Delete branch",size:"small"}),(0,a.jsxs)(l.P,{children:[(0,a.jsx)(l.P.Anchor,{children:(0,a.jsx)(i.h,{icon:c.KebabHorizontalIcon,size:"small",variant:"invisible",className:"color-fg-muted align-center","aria-label":"Branch menu",name:"Branch menu"})}),(0,a.jsx)(l.P.Overlay,{children:(0,a.jsxs)(o.S,{children:[!t.isDefault&&(j?(0,a.jsxs)(o.S.Item,{onSelect:()=>{v({type:"error",message:"This branch no longer exists."})},children:[(0,a.jsx)(o.S.LeadingVisual,{children:e.currentUserCanPush?(0,a.jsx)(c.GitPullRequestIcon,{size:16}):(0,a.jsx)(c.GitCompareIcon,{size:16})}),e.currentUserCanPush?"New pull request":"Compare"]}):(0,a.jsxs)(o.S.LinkItem,{as:d.r,"aria-label":e.currentUserCanPush?"New pull request":"Compare",to:e.currentUserCanPush?(0,u.wu)({repo:e,refName:t.name}):(0,u.j6)({repo:e,head:t.name}),className:"text-decoration-skip",children:[(0,a.jsx)(o.S.LeadingVisual,{children:e.currentUserCanPush?(0,a.jsx)(c.GitPullRequestIcon,{size:16}):(0,a.jsx)(c.GitCompareIcon,{size:16})}),e.currentUserCanPush?"New pull request":"Compare"]})),(0,a.jsxs)(o.S.LinkItem,{as:d.r,"aria-label":"Activity",to:(0,u.QD)({repo:e,branch:t.name}),className:"text-decoration-skip",children:[(0,a.jsx)(o.S.LeadingVisual,{children:(0,a.jsx)(c.PulseIcon,{size:16})}),"Activity"]}),t.rulesetsPath?(0,a.jsxs)(o.S.LinkItem,{as:d.r,"aria-label":"View rules",to:t.rulesetsPath,className:"text-decoration-skip",children:[(0,a.jsx)(o.S.LeadingVisual,{children:(0,a.jsx)(c.ShieldLockIcon,{size:16})}),"View rules"]}):(0,a.jsxs)(o.S.Item,{onSelect:()=>{v({type:"error",message:"There are no rulesets associated with this branch."})},children:[(0,a.jsx)(o.S.LeadingVisual,{children:(0,a.jsx)(c.ShieldLockIcon,{size:16})}),"View rules"]}),e.currentUserCanPush&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.S.Item,{"aria-label":`Rename branch '${t.name}'`,onSelect:()=>{j?v({type:"error",message:"This branch no longer exists."}):t.isBeingRenamed?v({type:"error",message:"You can't rename this branch because it is being renamed."}):t.renameable?I(!0):v({type:"error",message:"You don't have permission to rename this branch."})},children:[(0,a.jsx)(o.S.LeadingVisual,{children:(0,a.jsx)(c.PencilIcon,{size:16})}),"Rename branch"]})})]})})]})]})}),(0,a.jsxs)(s.Suspense,{children:[Z&&(0,a.jsx)(x,{repo:e,branch:t,onDismiss:function(){I(!1)}}),B&&b&&(0,a.jsx)(m,{showModal:B,setShowModal:S,setDeleting:C,branchName:t.name,onDeletedBranchesChange:g,deletedBranches:y,pullRequest:b,repo:e})]})]})}try{m.displayName||(m.displayName="DeleteBranchDialog")}catch{}try{x.displayName||(x.displayName="RenameBranchDialog")}catch{}try{b.displayName||(b.displayName="BranchActionMenu")}catch{}},51952:(e,t,r)=>{r.d(t,{ZV:()=>u,_G:()=>a,eI:()=>c,xp:()=>d});var a,s=r(48055),n=r(46263),i=r(58081);!function(e){e[e.small=1]="small",e[e.medium=544]="medium",e[e.large=768]="large",e[e.xlarge=1012]="xlarge",e[e.xxlarge=1280]="xxlarge",e[e.xxxlarge=1350]="xxxlarge",e[e.xxxxlarge=1440]="xxxxlarge"}(a||(a={}));let l=[1440,1350,1280,1012,768,544,1],o=i.createContext({screenSize:1});function c(){return i.useContext(o)}function d({children:e,initialValue:t}){let r=(0,i.useSyncExternalStore)(()=>()=>{},()=>t??u(window.innerWidth),()=>t??1),a=(0,i.useRef)(r),[l,c]=(0,i.useState)(r),d=(0,i.useCallback)(()=>{let e=u(window.innerWidth);a.current!==e&&(a.current=e,c(e))},[]);(0,i.useEffect)(()=>{let e=new ResizeObserver((0,n.D)(d));return e.observe(document.documentElement),()=>e.disconnect()},[d]);let h=(0,i.useMemo)(()=>({screenSize:l}),[l]);return(0,s.jsx)(o.Provider,{value:h,children:e})}function u(e){for(let t of l)if(e>=t)return t;return 1}try{o.displayName||(o.displayName="ScreenContext")}catch{}try{d.displayName||(d.displayName="ScreenSizeProvider")}catch{}},46008:(e,t,r)=>{r.d(t,{o:()=>u});var a=r(42483),s=r(42379),n=r(15173),i=r(15388);let l=(0,i.F4)(["0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}"]),o=(0,i.iv)(["animation:"," 1.5s infinite linear;"],l),c=(0,i.F4)(["0%{opacity:.3;}10%{opacity:1;}100%{opacity:.3;}"]),d=(0,i.iv)(["animation:"," 2s infinite linear;"],c),u=(0,i.ZP)(a.Z).withConfig({displayName:"LoadingSkeleton",componentId:"sc-bcbf24f9-0"})(["position:relative;overflow:hidden;mask-image:radial-gradient(white,black);",";&::after{",";background:linear-gradient(90deg,transparent,",",transparent);content:'';position:absolute;transform:translateX(-100%);bottom:0;left:0;right:0;top:0;}background-color:",";border-radius:",";display:block;height:1.2em;"," width:",";height:",";",""],({animationStyle:e})=>"pulse"===e&&d,({animationStyle:e})=>"pulse"!==e&&o,(0,s.U2)("colors.neutral.subtle"),(0,s.U2)("colors.neutral.subtle"),({theme:e,variant:t})=>{switch(t){case"rounded":return(0,s.U2)("radii.1")(e);case"pill":return"100px";case"elliptical":return"50%";default:return"0"}},({variant:e})=>"elliptical"===e&&{borderRadius:"50%"},({width:e})=>{switch(e){case"random":return`${Math.floor(40*Math.random()+40)}%`;case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},({height:e})=>{switch(e){case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},n.Z);try{u.displayName||(u.displayName="LoadingSkeleton")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-541a38","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_github_ca-9009bd","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_primer_react_node_modules_primer_octicons-react_dist_index_esm_mjs","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_TextInput_TextInput_js","vendors-node_modules_primer_react_lib-esm_AnchoredOverlay_AnchoredOverlay_js","vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js","vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js","vendors-node_modules_react-router-dom_dist_index_js","vendors-node_modules_github_relative-time-element_dist_index_js","vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-fd5530","vendors-node_modules_primer_react_lib-esm_ConfirmationDialog_ConfirmationDialog_js","vendors-node_modules_primer_react_lib-esm_PageLayout_PageLayout_js-node_modules_github_hydro--f8521d","vendors-node_modules_primer_react_lib-esm_DataTable_DataTable_js","vendors-node_modules_primer_react_lib-esm_Dialog_js-node_modules_primer_react_lib-esm_Flash_F-077cc8","vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-cb36e1","ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c","ui_packages_react-core_register-app_ts","ui_packages_paths_index_ts","ui_packages_ref-selector_RefSelector_tsx","ui_packages_create-branch-button_CreateBranchButton_tsx"],()=>t(20431)),e.O()}]);
//# sourceMappingURL=repos-branches-a7ee70c3f86d.js.map