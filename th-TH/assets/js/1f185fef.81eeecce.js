"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[2141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={},a="List Addon",s={unversionedId:"addon/list",id:"addon/list",title:"List Addon",description:"This addon was added into QuickShop-Hikari at 4.1.0.0-SNAPSHOT",source:"@site/docs/addon/list.md",sourceDirName:"addon",slug:"/addon/list",permalink:"/QuickShop-Hikari-Documents/th-TH/docs/addon/list",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/th-TH",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Limited Addon",permalink:"/QuickShop-Hikari-Documents/th-TH/docs/addon/limited"},next:{title:"Plan Addon",permalink:"/QuickShop-Hikari-Documents/th-TH/docs/addon/plan"}},l={},p=[{value:"Permissions",id:"permissions",level:2},{value:"Listing",id:"listing",level:2},{value:"Simple Information",id:"simple-information",level:2},{value:"Fast Preview",id:"fast-preview",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"list-addon"},"List Addon"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This addon was added into QuickShop-Hikari at 4.1.0.0-SNAPSHOT")),(0,r.kt)("p",null,"This addon added a command ",(0,r.kt)("inlineCode",{parentName:"p"},"/qs list")," to allow player or server administrator to listing all shops."),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quickshopaddon.list.self")," - The permission to use ",(0,r.kt)("inlineCode",{parentName:"li"},"/qs list")," to query self shops"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quickshopaddon.list.other")," - The permission to use ",(0,r.kt)("inlineCode",{parentName:"li"},"/qs list <player_name>")," to query others shops")),(0,r.kt)("h2",{id:"listing"},"Listing"),(0,r.kt)("p",null,"This addon can listing all shops that owned by specific player, and display in a list with shop name (or location for un-named shops)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"listing",src:n(5340).Z,width:"1974",height:"260"})),(0,r.kt)("h2",{id:"simple-information"},"Simple Information"),(0,r.kt)("p",null,"By hover your cursor on a entry, you will able to see the shop name, shop location, shop price, shop item, and shop type."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hover",src:n(5668).Z,width:"1355",height:"324"})),(0,r.kt)("h2",{id:"fast-preview"},"Fast Preview"),(0,r.kt)("p",null,"If player are able to preview a shop (e.g click ","[Preview Shop]"," in purchase dialog), then player also able to preview the shop remotely by clicking the entry."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"click",src:n(8448).Z,width:"714",height:"378"})))}c.isMDXComponent=!0},8448:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/list_click_entry_preview-a05f884b73bf4ba525aa32f747be6f5c.png"},5668:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/list_entry_hover-a16131e300b708516160fb9575191310.png"},5340:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/list_listing-15598887001bbf0cf3a22d869edb234a.png"}}]);