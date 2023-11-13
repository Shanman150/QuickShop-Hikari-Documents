"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={},a="DisplayControl Addon",l={unversionedId:"addon/displaycontrol",id:"addon/displaycontrol",title:"DisplayControl Addon",description:"Can't find where to download the JAR? Click here.",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/addon/displaycontrol.md",sourceDirName:"addon",slug:"/addon/displaycontrol",permalink:"/QuickShop-Hikari-Documents/docs/addon/displaycontrol",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/edit/master/docs/addon/displaycontrol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discount Addon",permalink:"/QuickShop-Hikari-Documents/docs/addon/discount"},next:{title:"Dynmap Addon",permalink:"/QuickShop-Hikari-Documents/docs/addon/dynmap"}},s={},d=[{value:"Requirement",id:"requirement",level:2},{value:"Commands",id:"commands",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Demo",id:"demo",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"displaycontrol-addon"},"DisplayControl Addon"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Can't find where to download the JAR? ",(0,r.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/docs/faq/where-addons-compacts-at"},"Click here"),".")),(0,r.kt)("p",null,"DisplayControl Addon gives you the ability to allow player controls the display item behavior on different clients."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"THIS ADDON ONLY WORKS WITH VIRTUAL DISPLAY ITEM TOGETHER")),(0,r.kt)("h2",{id:"requirement"},"Requirement"),(0,r.kt)("p",null,"If you Bukkit/Spigot server behind a BungeeCord, you will need to install ",(0,r.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/docs/compat-modules/bungeecord-geyser"},"Compat-BungeeCord-Geyser Bridge")," on your BungeeCord instance. Otherwise, it will doesn't work at all."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/qs displaycontrol <auto/enable/disable>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auto")," - Default behavior, will enable display on Java Edition clients, and disable on Bedrock clients."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable")," - Always enable display on all clients. ",(0,r.kt)("em",{parentName:"li"},"If the server disabled display items, this option will respect the server global settings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disable")," - Always disable display on all clients.")),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quickshopaddon.displaycontrol.use")," - Allows players to use ",(0,r.kt)("inlineCode",{parentName:"li"},"/qs displaycontrol")," commands")),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"display-control demo",src:n(6907).Z,width:"844",height:"534"})))}p.isMDXComponent=!0},6907:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/display-control-1ec287edb28c440796c58cb5407b27c6.gif"}}]);