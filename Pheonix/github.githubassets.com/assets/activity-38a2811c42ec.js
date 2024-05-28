"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["activity"],{46263:(e,r,_)=>{function t(e,r=0,{start:_=!0,middle:t=!0,once:s=!1}={}){let o,a=_,n=0,i=!1;function d(...c){if(i)return;let l=Date.now()-n;n=Date.now(),_&&t&&l>=r&&(a=!0),a?(a=!1,e.apply(this,c),s&&d.cancel()):(t&&l<r||!t)&&(clearTimeout(o),o=setTimeout(()=>{n=Date.now(),e.apply(this,c),s&&d.cancel()},t?r-l:r))}return d.cancel=()=>{clearTimeout(o),i=!0},d}function s(e,r=0,{start:_=!1,middle:s=!1,once:o=!1}={}){return t(e,r,{start:_,middle:s,once:o})}_.d(r,{D:()=>s,P:()=>t})},48392:(e,r,_)=>{var t=_(5475),s=_(96810),o=_(48055),a=_(47658),n=_(51952),i=_(74863);let d={};function c({children:e}){return(0,o.jsx)(n.xp,{children:(0,o.jsx)(i.x,{baseUrl:"",children:(0,o.jsx)(a.n,{appName:"react-activity-view",category:"",metadata:d,children:e})})})}try{c.displayName||(c.displayName="App")}catch{}var l=_(99531);(0,s.g)("activity",()=>({App:c,routes:[(0,t.g)({path:"/:owner/:repo/activity",Component:l.Z})]}))},51952:(e,r,_)=>{_.d(r,{ZV:()=>l,_G:()=>t,eI:()=>d,xp:()=>c});var t,s=_(48055),o=_(46263),a=_(58081);!function(e){e[e.small=1]="small",e[e.medium=544]="medium",e[e.large=768]="large",e[e.xlarge=1012]="xlarge",e[e.xxlarge=1280]="xxlarge",e[e.xxxlarge=1350]="xxxlarge",e[e.xxxxlarge=1440]="xxxxlarge"}(t||(t={}));let n=[1440,1350,1280,1012,768,544,1],i=a.createContext({screenSize:1});function d(){return a.useContext(i)}function c({children:e,initialValue:r}){let _=(0,a.useSyncExternalStore)(()=>()=>{},()=>r??l(window.innerWidth),()=>r??1),t=(0,a.useRef)(_),[n,d]=(0,a.useState)(_),c=(0,a.useCallback)(()=>{let e=l(window.innerWidth);t.current!==e&&(t.current=e,d(e))},[]);(0,a.useEffect)(()=>{let e=new ResizeObserver((0,o.D)(c));return e.observe(document.documentElement),()=>e.disconnect()},[c]);let u=(0,a.useMemo)(()=>({screenSize:n}),[n]);return(0,s.jsx)(i.Provider,{value:u,children:e})}function l(e){for(let r of n)if(e>=r)return r;return 1}try{i.displayName||(i.displayName="ScreenContext")}catch{}try{c.displayName||(c.displayName="ScreenSizeProvider")}catch{}}},e=>{var r=r=>e(e.s=r);e.O(0,["react-lib","vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-541a38","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_github_ca-9009bd","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_primer_react_node_modules_primer_octicons-react_dist_index_esm_mjs","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_TextInput_TextInput_js","vendors-node_modules_primer_react_lib-esm_AnchoredOverlay_AnchoredOverlay_js","vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js","vendors-node_modules_react-router-dom_dist_index_js","vendors-node_modules_primer_react_lib-esm_PageLayout_PageLayout_js-node_modules_github_hydro--f8521d","vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-4cf34b","ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c","ui_packages_react-core_register-app_ts","ui_packages_paths_index_ts","ui_packages_ref-selector_RefSelector_tsx","app_assets_modules_activity_pages_ActivityIndex_tsx-ui_packages_react-core_JsonRoute_tsx"],()=>r(48392)),e.O()}]);
//# sourceMappingURL=activity-790073d0e053.js.map