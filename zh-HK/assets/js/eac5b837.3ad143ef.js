"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[8684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=i,h=d["".concat(u,".").concat(k)]||d[k]||p[k]||o;return a?r.createElement(h,n(n({ref:t},c),{},{components:a})):r.createElement(h,n({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),i=(a(7294),a(3905));const o={},n="Privacy",l={unversionedId:"about/privacy",id:"about/privacy",title:"Privacy",description:"When using the QuickShop Hikari service, we will send the necessary and partial optional data to the relevant service provider.",source:"@site/docs/about/privacy.md",sourceDirName:"about",slug:"/about/privacy",permalink:"/QuickShop-Hikari-Documents/zh-HK/docs/about/privacy",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-HK",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Regional legal restrictions",permalink:"/QuickShop-Hikari-Documents/zh-HK/docs/about/netease"},next:{title:"0x01 Getting Started",permalink:"/QuickShop-Hikari-Documents/zh-HK/docs/development/getting-start"}},u={},s=[{value:"bStats",id:"bstats",level:2},{value:"Quit bStats Metrics",id:"quit-bstats-metrics",level:3},{value:"Rollbar Error Tracking",id:"rollbar-error-tracking",level:2},{value:"Regenerate QuickShop-Hikari unique ID",id:"regenerate-quickshop-hikari-unique-id",level:3},{value:"Quit Rollbar Error Tracking",id:"quit-rollbar-error-tracking",level:3},{value:"Paste",id:"paste",level:2},{value:"IP Detecting",id:"ip-detecting",level:2},{value:"Updater",id:"updater",level:2},{value:"Donating",id:"donating",level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"privacy"},"Privacy"),(0,i.kt)("p",null,"When using the QuickShop Hikari service, we will send the necessary and partial optional data to the relevant service provider.  "),(0,i.kt)("h2",{id:"bstats"},"bStats"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://bstats.org/"},"bStats.org")," to collect statistical indicators so that we can better improve our products.  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://bstats.org/privacy-policy"},"bStats's Privacy Policy")),(0,i.kt)("p",null,"All data collected will be displayed on this page: ",(0,i.kt)("a",{parentName:"p",href:"https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281"},"bStats - QuickShop-Hikari")),(0,i.kt)("h3",{id:"quit-bstats-metrics"},"Quit bStats Metrics"),(0,i.kt)("p",null,"To quit bStats metrics, you can disable bstats service in QuickShop-Hikari's configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#Disallow QuickShop to send metrics data to bStats.\n#Please let the metrics enabled, it helps the author :).\ndisabled-metrics: false\n")),(0,i.kt)("p",null,"Note: The collected data won't deleted from bStats, to remove exists data, please contact bStats administrators.",(0,i.kt)("br",{parentName:"p"}),"\n","Note: We respect your bStats global settings, if you has been disabled bStats in global, we won't send any data to bStats.  "),(0,i.kt)("h2",{id:"rollbar-error-tracking"},"Rollbar Error Tracking"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://rollbar.com/"},"Rollbar")," to collect error reports. All errors on your server which related to QuickShop-Hikari will be automaticlly submit to our Rollbar bin."),(0,i.kt)("p",null,"You can check Rollbar's Privacy Policy ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rollbar.com/docs/privacy-policy"},"here"),"."),(0,i.kt)("p",null,"Including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time"),(0,i.kt)("li",{parentName:"ul"},"Error and StackTrace"),(0,i.kt)("li",{parentName:"ul"},"OS Name"),(0,i.kt)("li",{parentName:"ul"},"OS Arch"),(0,i.kt)("li",{parentName:"ul"},"OS Version"),(0,i.kt)("li",{parentName:"ul"},"System CPU Cores"),(0,i.kt)("li",{parentName:"ul"},"Java Version"),(0,i.kt)("li",{parentName:"ul"},"Server/Bukkit Build Version"),(0,i.kt)("li",{parentName:"ul"},"Server Players"),(0,i.kt)("li",{parentName:"ul"},"Online Mode"),(0,i.kt)("li",{parentName:"ul"},"Your QuickShop-Hikari unique ID")),(0,i.kt)("h3",{id:"regenerate-quickshop-hikari-unique-id"},"Regenerate QuickShop-Hikari unique ID"),(0,i.kt)("p",null,"While you install QuickShop-Hikari in fresh, the your unique ID will be generated and write into your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml"),".",(0,i.kt)("br",{parentName:"p"}),"\n","The ID does not depend on any other information for calculation and is completely random, It is used in our bug tracking and other scenarios where different QuickShop-Hikari instances need to be identified.  "),(0,i.kt)("p",null,"In case you are sure that no addon is using this value, you can remove this from the configuration file so that QuickShop-Hikari will generate a new unique ID."),(0,i.kt)("h3",{id:"quit-rollbar-error-tracking"},"Quit Rollbar Error Tracking"),(0,i.kt)("p",null,"To quit Rollbar Error Tracking, you can disable rollbar service in QuickShop-Hikari's configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Should QS be allowed to automatically report errors to the author?\n# It will also create a paste for data-recovery or debug when the server boots up.\nauto-report-errors: true\n")),(0,i.kt)("p",null,"Note: The collected data won't deleted from Rollbar, to remove exists data, please contact QuickShop-Hikari developer."),(0,i.kt)("h2",{id:"paste"},"Paste"),(0,i.kt)("p",null,"When you creating a paste by ",(0,i.kt)("inlineCode",{parentName:"p"},"/qs paste")," command, you data will upload to ",(0,i.kt)("a",{parentName:"p",href:"https://bytebin.lucko.me/"},"Lucko's Bytebin"),".",(0,i.kt)("br",{parentName:"p"}),"\n","To avoid data uploading, you can create local paste by using command ",(0,i.kt)("inlineCode",{parentName:"p"},"/qs paste file"),", the paste will save to your local disk without uploading."),(0,i.kt)("p",null,"The Paste Viewer hosting on Github Pages, access the uploaded data through CloudFlare Worker."),(0,i.kt)("p",null,"While we generating your Paste, we will censor your sensitive data, Don't send your Paste to anyone you don't trust."),(0,i.kt)("h2",{id:"ip-detecting"},"IP Detecting"),(0,i.kt)("p",null,"We will send an IP lookup request to CloudFlare to determine if your server is located in mainland China. For more information, please see: ",(0,i.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/zh-HK/docs/about/netease"},"Regional legal restrictions"),"."),(0,i.kt)("p",null,"The URL we will request: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cloudflare.com/cdn-cgi/trace"),"."),(0,i.kt)("h2",{id:"updater"},"Updater"),(0,i.kt)("p",null,"For checking update, QuickShop-Hikari will request CodeMC.io's Nexus for checking updates.  "),(0,i.kt)("p",null,"To disable update checker, you can turn it off by adjust the configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#Should QS be allowed to check for updates?\nupdater: false\n")),(0,i.kt)("h2",{id:"donating"},"Donating"),(0,i.kt)("p",null,"When you donating on ko-fi.com, ko-fi will collect your personal data, click ",(0,i.kt)("a",{parentName:"p",href:"https://more.ko-fi.com/privacy"},"here")," to check ko-fi's privacy policy."),(0,i.kt)("p",null,"Your personal data will also send to Ghost_chu's web server for showcase your name on our supporter list, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time"),(0,i.kt)("li",{parentName:"ul"},"Your Ko-fi username."),(0,i.kt)("li",{parentName:"ul"},"Donation Type"),(0,i.kt)("li",{parentName:"ul"},"Is public"),(0,i.kt)("li",{parentName:"ul"},"Message ID"),(0,i.kt)("li",{parentName:"ul"},"Message"),(0,i.kt)("li",{parentName:"ul"},"Kofi Transaction ID"),(0,i.kt)("li",{parentName:"ul"},"Tier Name")),(0,i.kt)("p",null,"The data collected is stored in the territory of the People's Republic of China and is managed in accordance with the relevant laws and regulations of the server location (Beijing).",(0,i.kt)("br",{parentName:"p"}),"\n","To remove your data, please contact QuickShop-Hikari developer."),(0,i.kt)("p",null,"The data below will show up for everyone at ",(0,i.kt)("a",{parentName:"p",href:"https://quickshop-kofi-proxy.ghostchu.workers.dev/"},"here"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time"),(0,i.kt)("li",{parentName:"ul"},"Type"),(0,i.kt)("li",{parentName:"ul"},"Your Ko-fi username")),(0,i.kt)("p",null,"If you donation has been set to private, it won't show up."))}p.isMDXComponent=!0}}]);