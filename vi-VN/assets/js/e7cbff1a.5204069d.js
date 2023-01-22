"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},r="Discount Addon",l={unversionedId:"addon/discount",id:"addon/discount",title:"Discount Addon",description:"Discount Addon added Discount Code in your QuickShop-Hikari server.",source:"@site/i18n/vi-VN/docusaurus-plugin-content-docs/current/addon/discount.md",sourceDirName:"addon",slug:"/addon/discount",permalink:"/QuickShop-Hikari-Documents/vi-VN/docs/addon/discount",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/vi-VN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DiscordSRV Addon",permalink:"/QuickShop-Hikari-Documents/vi-VN/docs/addon/discordsrv"},next:{title:"Limited Addon",permalink:"/QuickShop-Hikari-Documents/vi-VN/docs/addon/limited"}},s={},c=[{value:"Permission",id:"permission",level:2},{value:"Create a discount code",id:"create-a-discount-code",level:2},{value:"Available Code Type",id:"available-code-type",level:3},{value:"Install a code",id:"install-a-code",level:2},{value:"Uninstall a code",id:"uninstall-a-code",level:2},{value:"Show detailes for a installed discount code",id:"show-detailes-for-a-installed-discount-code",level:2},{value:"Remove discount code",id:"remove-discount-code",level:2},{value:"Check if discount code can be applied to specific shop",id:"check-if-discount-code-can-be-applied-to-specific-shop",level:2},{value:"Apply the discounting",id:"apply-the-discounting",level:2},{value:"Auto Purge Expired Code",id:"auto-purge-expired-code",level:2},{value:"Convert your time",id:"convert-your-time",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discount-addon"},"Discount Addon"),(0,a.kt)("p",null,"Discount Addon added Discount Code in your QuickShop-Hikari server."),(0,a.kt)("h2",{id:"permission"},"Permission"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quickshopaddon.discount.use")," ",(0,a.kt)("em",{parentName:"li"},"(default: everyone)"),(0,a.kt)("br",{parentName:"li"}),"Permission to use any ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs discount")," commands."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quickshopaddon.discount.bypass")," ",(0,a.kt)("em",{parentName:"li"},"(default: OP)"),(0,a.kt)("br",{parentName:"li"}),"Permission to bypass the owner checks to force config discount codes, add non-self shops in allow list or remove a discount code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quickshopaddon.discount.create.server_all_shops")," ",(0,a.kt)("em",{parentName:"li"},"(default: OP)"),(0,a.kt)("br",{parentName:"li"}),"Permission to create discount code that applied to all shops in your server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quickshopaddon.discount.create.player_all_shops")," ",(0,a.kt)("em",{parentName:"li"},"(default: everyone)"),(0,a.kt)("br",{parentName:"li"}),"Permission to create discount code that applied to player themself shops."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quickshopaddon.discount.create.specific_shops")," ",(0,a.kt)("em",{parentName:"li"},"(default: everyone)"),(0,a.kt)("br",{parentName:"li"}),"Permission to create discount code that applied to shops in the code allow list.")),(0,a.kt)("h2",{id:"create-a-discount-code"},"Create a discount code"),(0,a.kt)("p",null,"To create a discount code, you need use discount command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"/qs discount create <code> <code-type> <rate> [max-usage] [threshold] [expired-time]\n")),(0,a.kt)("p",null,"Command pretty long, but you have in-game command assistant to help you in your tab complete hint."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/208291577-59fcd76e-2b4a-4e87-bdf5-582ba573795e.png",alt:null})),(0,a.kt)("h3",{id:"available-code-type"},"Available Code Type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SERVER_ALL_SHOPS (Applied to all shops in your server)"),(0,a.kt)("li",{parentName:"ul"},"PLAYER_ALL_SHOPS (Applied to all shops belongs to code creator)"),(0,a.kt)("li",{parentName:"ul"},"SPECIFIC_SHOPS (Applied to shops in allow list that added by command ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs discount config <code> addshop"),")")),(0,a.kt)("h2",{id:"install-a-code"},"Install a code"),(0,a.kt)("p",null,"To use a Discount Code, you need install them before purchase shops."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"/qs discount install <code>\n")),(0,a.kt)("p",null,"The installed code will remember during this session."),(0,a.kt)("h2",{id:"uninstall-a-code"},"Uninstall a code"),(0,a.kt)("p",null,"To uninstall a Discount Code, you need use command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"/qs discount uninstall <code>\n")),(0,a.kt)("h2",{id:"show-detailes-for-a-installed-discount-code"},"Show detailes for a installed discount code"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," subcommand, you can query the code creator, range, remaining usage, expired time, threshold and discount rate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"/qs disount info\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/208291677-85469f8b-2c34-4563-bb57-619cfe70e105.png",alt:null})),(0,a.kt)("h2",{id:"remove-discount-code"},"Remove discount code"),(0,a.kt)("p",null,"To remove your a specified discount code, execute command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"/qs discount remove <code>\n")),(0,a.kt)("h2",{id:"check-if-discount-code-can-be-applied-to-specific-shop"},"Check if discount code can be applied to specific shop"),(0,a.kt)("p",null,"You need install a discount code first, then you click the shop you want to check, a promot message will show up when you can enjoy the discount in this shop.",(0,a.kt)("br",{parentName:"p"}),"\n","If code not accepted by target shop, you will also receive a warning message when you click it."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/208291999-a32277bb-4111-4dde-bcd4-1d5f5b40ce9e.png",alt:null})),(0,a.kt)("h2",{id:"apply-the-discounting"},"Apply the discounting"),(0,a.kt)("p",null,"You need install a discount code first, then purchase a shop that accept your code.",(0,a.kt)("br",{parentName:"p"}),"\n","Then discount will applied to your puchase, and your remaining count will be consumed."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/208292084-633fe7e1-239c-4b8c-99b2-87fc9e824e1f.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NOTE: If the above additional conditions are not met, the Discount Code will not be applied and you will not get a discount, but at the same time, the Discount Code will not be consumed, and the prompt message will contain the specific reason.")),(0,a.kt)("h2",{id:"auto-purge-expired-code"},"Auto Purge Expired Code"),(0,a.kt)("p",null,"An expired discount code will automaticlly removed while server startup or in 30mins.",(0,a.kt)("br",{parentName:"p"}),"\n","Before they got purged, players who use a expired code will receive a error message that says the code has been expired."),(0,a.kt)("h2",{id:"convert-your-time"},"Convert your time"),(0,a.kt)("p",null,"Expired time accepts both Zulu Time format and UNIX Timestamp in seconds format:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/208248088-01b1cbfe-ff79-4448-8a34-7e95324a71e1.png",alt:null})),(0,a.kt)("p",null,"There have a such pretty online website can help you convert the time:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.unixtimestamp.com/"},"https://www.unixtimestamp.com/")),(0,a.kt)("p",null,"For Zulu Time (ISO 8601 Extended) format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"yyyy-MM-dd'T'HH:mm:ssZZ\n")),(0,a.kt)("p",null,"Note that the server time zone is used for calculations during the conversion."))}u.isMDXComponent=!0}}]);