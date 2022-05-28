"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5053],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(v,a(a({ref:n},d),{},{components:t})):r.createElement(v,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},63588:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),a=["components"],l={id:"build-environments",title:"Point Network Environments",sidebar_label:"Point Network Environments",slug:"../build-environments"},s=void 0,p={unversionedId:"build/build-environments",id:"build/build-environments",title:"Point Network Environments",description:"There are several environments in which Point Network can be run. These are:",source:"@site/docs/build/build-environments.md",sourceDirName:"build",slug:"/build-environments",permalink:"/docs/build-environments",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-environments.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1653717718,formattedLastUpdatedAt:"5/28/2022",frontMatter:{id:"build-environments",title:"Point Network Environments",sidebar_label:"Point Network Environments",slug:"../build-environments"},sidebar:"pnSidebar",previous:{title:"Builder's Portal",permalink:"/docs/build-index"},next:{title:"Zapp Development Environment using Docker",permalink:"/docs/build-zapp-dev-environment-docker"}},d=[{value:"Differences between environments",id:"differences-between-environments",children:[],level:3},{value:"e2e Environment",id:"e2e-environment",children:[],level:3},{value:"zappdev Environment",id:"zappdev-environment",children:[],level:3}],c={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are several environments in which Point Network can be run. These are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"YNET")," this is the default live environment for the Alpha version of Point Network and can be installed by following the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/pointnetwork-dashboard/blob/main/ALPHA.md"},"Point Network Alpha Testing Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"e2e")," this is the end to end environment which is used for simulating the YNET environment on a single local developer machine. It's started using the e2e Docker Compose file as defined ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/pointnetwork/blob/develop/docker-compose.e2e.yaml"},"here"),". To start the ",(0,o.kt)("inlineCode",{parentName:"li"},"e2e")," environment in docker simply run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker compose -f docker-compose.e2e.yaml up -d")," from your terminal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zappdev")," this is the development environment for building, testing, maintaining and deploying Zapps (applications that run on Point Network). To get started with this environment please follow the ",(0,o.kt)("a",{parentName:"li",href:"/docs/build-zapp-dev-environment-direct-install"},"Point Network Builders Starter's Guide"))),(0,o.kt)("h3",{id:"differences-between-environments"},"Differences between environments"),(0,o.kt)("p",null,"You might be wondering what the differences between these environments are - particularly between ",(0,o.kt)("strong",{parentName:"p"},"e2e")," and ",(0,o.kt)("strong",{parentName:"p"},"zappdev"),". Below are the differences highlighted:"),(0,o.kt)("h3",{id:"e2e-environment"},"e2e Environment"),(0,o.kt)("p",null,"This is used as a complete isolated near to live (YNET) environment as possible running on an isolated local developer machine. It includes all the components that are used in YNET running as local docker containers. It is useful for testing deployments and running Zapps locally before deploying to the YNET environment. It also serves as a development platform for integrating and testing new services when these are required. It currently uses Ganache as a local blockchain."),(0,o.kt)("h3",{id:"zappdev-environment"},"zappdev Environment"),(0,o.kt)("p",null,"This is used for for building, testing, maintaining and deploying Zapps and is a lightweight version of the e2e environment that is using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/textury/arlocal"},"arlocal")," for the storage layer rather than a full Arweave node. It also loads all zapps directly from the file system which allows for more rapid development - just change the code in the zapp and its immediately available (with the exception of smart contracts which need to be redeployed if changed). Moreover the zappdev environment uses Ganache and has a second point node instance running ('website visitor') for allowing zapp developers to test interacting in Zapps using different accounts."))}u.isMDXComponent=!0}}]);