"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[43],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},l="Plan Addon",i={unversionedId:"addon/plan",id:"addon/plan",title:"Plan Addon",description:"Plan addon allow server owners to showcase the recent QuickShop-Hikari activities on the server.",source:"@site/i18n/he-IL/docusaurus-plugin-content-docs/current/addon/plan.md",sourceDirName:"addon",slug:"/addon/plan",permalink:"/QuickShop-Hikari-Documents/he-IL/docs/addon/plan",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/he-IL",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"List Addon",permalink:"/QuickShop-Hikari-Documents/he-IL/docs/addon/list"},next:{title:"Compatibility Modules",permalink:"/QuickShop-Hikari-Documents/he-IL/docs/category/compatibility-modules"}},s={},c=[{value:"Data Tracked",id:"data-tracked",level:2},{value:"Global Scope",id:"global-scope",level:2},{value:"Player Scope",id:"player-scope",level:2},{value:"Showcase",id:"showcase",level:2},{value:"Localization",id:"localization",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plan-addon"},"Plan Addon"),(0,r.kt)("p",null,"Plan addon allow server owners to showcase the recent QuickShop-Hikari activities on the server."),(0,r.kt)("h2",{id:"data-tracked"},"Data Tracked"),(0,r.kt)("p",null,"Recorded data can be displayed from Hikari v2.0.0.0 onwards, but only after version 3.6.0.0 can Item amount in Purchase History be displayed correctly."),(0,r.kt)("h2",{id:"global-scope"},"Global Scope"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total shops amount"),(0,r.kt)("li",{parentName:"ul"},"All shops (to a Shops list)"),(0,r.kt)("li",{parentName:"ul"},"Recent Purchase History (include deleted or invalided shops), only in recent 365 days and 1000 rows will be shown up.")),(0,r.kt)("p",null,"Due the Plan limitations, We can't add more data into the list because the maxmium columns are hardcoded limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," in server scope.",(0,r.kt)("br",{parentName:"p"}),"\n","And still is Plan limitations, the list sorting is disturbed, so the display order is not the actual order."),(0,r.kt)("h2",{id:"player-scope"},"Player Scope"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total shops amount"),(0,r.kt)("li",{parentName:"ul"},"All owned shops (to a Shops list)"),(0,r.kt)("li",{parentName:"ul"},"Recent Purchase History (include deleted or invalided shops), only in recent 365 days and 50 rows will be shown up.")),(0,r.kt)("p",null,"Due the Plan limitations, We can't add more data into the list because the maxmium columns are hardcoded limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," in player scope.",(0,r.kt)("br",{parentName:"p"}),"\n","And still is Plan limitations, the list sorting is disturbed, so the display order is not the actual order."),(0,r.kt)("h2",{id:"showcase"},"Showcase"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Global Purchases"),(0,r.kt)("th",{parentName:"tr",align:null},"Player Purchases"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/30802565/208290345-2aa32f74-8c0a-4d27-9f69-b72a3ad605f4.png"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/30802565/208110771-b8d3a1cc-3c07-449f-a2ad-1348eafa7134.png"}))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Global Shops"),(0,r.kt)("th",{parentName:"tr",align:null},"Player Shops"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/30802565/208109812-4f040bfb-4342-4510-adee-928d9041fa60.png"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/30802565/208110850-d59f4ec9-6c86-4a89-a2f9-87ced3d3d74e.png"}))))),(0,r.kt)("h2",{id:"localization"},"Localization"),(0,r.kt)("p",null,"Due the Plan limitations, translate Plan addon is impossible."))}p.isMDXComponent=!0}}]);