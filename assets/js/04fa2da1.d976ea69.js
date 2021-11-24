"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[551],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return n?o.createElement(m,l(l({ref:t},d),{},{components:n})):o.createElement(m,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3343:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),l=["components"],a={id:"build-build-with-point-network",title:"Point Network Builders Starter's Guide",sidebar_label:"Point Network Builders Starter's Guide",slug:"../build-build-with-point-network"},p=void 0,s={unversionedId:"build/build-build-with-point-network",id:"build/build-build-with-point-network",isDocsHomePage:!1,title:"Point Network Builders Starter's Guide",description:"Welcome to the builder's section of the Point Network Wiki.",source:"@site/docs/build/build-build-with-pointnetwork.md",sourceDirName:"build",slug:"/build-build-with-point-network",permalink:"/docs/build-build-with-point-network",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-build-with-pointnetwork.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1637751123,formattedLastUpdatedAt:"11/24/2021",frontMatter:{id:"build-build-with-point-network",title:"Point Network Builders Starter's Guide",sidebar_label:"Point Network Builders Starter's Guide",slug:"../build-build-with-point-network"},sidebar:"pnSidebar",previous:{title:"Builder's Portal",permalink:"/docs/build-index"},next:{title:"Testing Guide",permalink:"/docs/build-testing-guide"}},d=[{value:"Develop using docker compose",id:"develop-using-docker-compose",children:[],level:3},{value:"Open the deployed site in Point Browser",id:"open-the-deployed-site-in-point-browser",children:[],level:3},{value:"Open the deployed site in a second Point Browser",id:"open-the-deployed-site-in-a-second-point-browser",children:[],level:3},{value:"Next steps",id:"next-steps",children:[],level:3},{value:"Coding style",id:"coding-style",children:[],level:3}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the builder's section of the Point Network Wiki."),(0,r.kt)("h3",{id:"develop-using-docker-compose"},"Develop using docker compose"),(0,r.kt)("p",null,"First add some alias and functions to your local bash environment (only needs be done once). So in your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," file add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'alias point-e2e="docker-compose --env-file .env.e2e -f docker-compose.e2e.yaml -f docker-compose.dev.yaml "\nalias point-browser-docker-1="web-ext run --firefox-profile=storage_provider_docker --keep-profile-changes --source-dir dist/prod --url https://point/"\nalias point-browser-docker-2="web-ext run --firefox-profile=website_owner_docker --keep-profile-changes --source-dir dist/prod --url https://point/"\nalias point-browser-docker-3="web-ext run --firefox-profile=website_visitor_docker --keep-profile-changes --source-dir dist/prod --url https://point/"\n\ndexec() { docker exec -it "$1" bash; }\ndclean() { docker stop $(docker ps -a -q); docker rm -f $(docker ps -a -q); docker rmi -f $(docker images | grep "<none>" | awk "{print \\$3}"); docker system prune -f; docker system prune --volumes -f; }\n')),(0,r.kt)("p",null,"Now update your terminal session  with the changes made to bash_profile earler: ",(0,r.kt)("inlineCode",{parentName:"p"},"source ~/.bash_profile"),"."),(0,r.kt)("p",null,"Clone the pointnetwork repo, cd into and instll deps like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:pointnetwork/pointnetwork.git\ncd pointnetwork\nnpm i\n")),(0,r.kt)("p",null,"Next, copy the ",(0,r.kt)("em",{parentName:"p"},".env.e2e.example")," file to ",(0,r.kt)("em",{parentName:"p"},".env.e2e"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp .env.e2e.example .env.e2e\n")),(0,r.kt)("p",null,"and set ",(0,r.kt)("inlineCode",{parentName:"p"},"DEV_ZAPP_HOST")," envrionment variable in .env.e2e with the zapp domain that you are working with (e.g. pointsocial.z it would be set like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DEV_ZAPP_HOST=pointsocial.z\n")),(0,r.kt)("p",null,"With the above out of the way, run the following:"),(0,r.kt)("p",null,"NOTE: Since PointSocial Zapp uses React JS we need to make sure that the site is built locally first. For sites that are build using Twig (like twitter.z, blog.z etc) you can skip this step as they do not require building locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd example/pointsocial.z\nnpm i\nnpm run build\n")),(0,r.kt)("p",null,"In one terminal start all the services and watch the ",(0,r.kt)("inlineCode",{parentName:"p"},"website_owner")," logs (NOTE: run these commands ",(0,r.kt)("em",{parentName:"p"},"from the root")," of the cloned pointnetwork repo!)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dclean\npoint-e2e up -d\npoint-e2e logs -f website_owner\n")),(0,r.kt)("p",null,"In another terminal (to connect to the ",(0,r.kt)("inlineCode",{parentName:"p"},"website_owner")," node and deploy the site )"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dexec pointnetwork_website_owner\n./scripts/deploy-sites.sh pointsocial.z --contracts\n")),(0,r.kt)("p",null,"The site should deploy sucessefully after a few minutes."),(0,r.kt)("h3",{id:"open-the-deployed-site-in-point-browser"},"Open the deployed site in Point Browser"),(0,r.kt)("p",null,"First create three profiles in Firefox to be able to test connecting to the different nodes quickly and easily. I suggest creating 3 profiles matching the names of the profiles set in your bash alias as mentioned above (these profiles only need to be created once):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Profile ",(0,r.kt)("inlineCode",{parentName:"li"},"storage_provider_docker")," : set proxy to 'localhost:65500'"),(0,r.kt)("li",{parentName:"ul"},"Profile ",(0,r.kt)("inlineCode",{parentName:"li"},"website_owner_docker")," : set proxy to 'localhost:65501'"),(0,r.kt)("li",{parentName:"ul"},"Profile ",(0,r.kt)("inlineCode",{parentName:"li"},"website_visitor_docker")," : set proxy to 'localhost:65502'")),(0,r.kt)("p",null,"Now clone the PointSDK repo, cd into it and run the browser alias command like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:pointnetwork/pointsdk.git\ncd pointsdk\npoint-browser-docker-2\n")),(0,r.kt)("p",null,"This should open the Point Browser with the ",(0,r.kt)("inlineCode",{parentName:"p"},"website_owner_docker")," profile already configured to connect to the ",(0,r.kt)("inlineCode",{parentName:"p"},"website_owner")," node and open ",(0,r.kt)("a",{parentName:"p",href:"https://point"},"https://point"),". Now you can navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://point/identities"},"https://point/identities")," and you should see the deployed pointsocial.z zapp listed, You can open it from there."),(0,r.kt)("h3",{id:"open-the-deployed-site-in-a-second-point-browser"},"Open the deployed site in a second Point Browser"),(0,r.kt)("p",null,"To test out interacting between different Point Network identities we can open another Point Browser, for example the ",(0,r.kt)("inlineCode",{parentName:"p"},"website_visitor")," like so (from the root of the pointsdk repo):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point-browser-docker-3\n")),(0,r.kt)("p",null,"If you have added the above command as an alias and you have setup the Firefox profile you should see a new browser open that is connected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"website_visitor")," node. You can now post messages between each other on pointsocial!"),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Try to deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"store.z")," app. To do so its just a matter of:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the deps in store.z ",(0,r.kt)("inlineCode",{parentName:"li"},"cd example/store.z && npm i")),(0,r.kt)("li",{parentName:"ol"},"Build the store.z site ",(0,r.kt)("inlineCode",{parentName:"li"},"cd example/store.z && npm run build")),(0,r.kt)("li",{parentName:"ol"},"Updating the 'DEV_ZAPP_HOST' environment variable in ",(0,r.kt)("em",{parentName:"li"},".env.e2e")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"DEV_ZAPP_HOST=store.z")),(0,r.kt)("li",{parentName:"ol"},"Tear down all the services (from the project root) ",(0,r.kt)("inlineCode",{parentName:"li"},"point-e2e down")),(0,r.kt)("li",{parentName:"ol"},"Bring up all the services (from the project root) ",(0,r.kt)("inlineCode",{parentName:"li"},"point-e2e up -d")),(0,r.kt)("li",{parentName:"ol"},"Connect back into the ",(0,r.kt)("inlineCode",{parentName:"li"},"website_owner")," running container: ",(0,r.kt)("inlineCode",{parentName:"li"},"dexec pointnetwork_website_owner")),(0,r.kt)("li",{parentName:"ol"},"Deploy store.z: ",(0,r.kt)("inlineCode",{parentName:"li"},"./scripts/deploy-sites.sh store.z --contracts")),(0,r.kt)("li",{parentName:"ol"},"Open a Point Browser instance to ",(0,r.kt)("a",{parentName:"li",href:"https://store.z"},"https://store.z"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker Compose Logs")),(0,r.kt)("p",null,"To follow the logs of ",(0,r.kt)("em",{parentName:"p"},"all")," the containers simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"point-e2e logs -f")," in the terminal. If you want to follow the logs of a specific container, hten specify the service name as well like so: ",(0,r.kt)("inlineCode",{parentName:"p"},"point-e2e logs -f storage_provider")," (to follow the logs of ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_provider"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker Compose and Truffle Console")),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain_node")," service is exposed via ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7545")," its therefore possible to use truffle console without any modification."),(0,r.kt)("p",null,"Therefore, ",(0,r.kt)("em",{parentName:"p"},"from the root")," of the cloned pointnetwork repo, you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd truffle\ntruffle console\n")),(0,r.kt)("p",null," The above will connect to the running Ganache blockchain in the Docker ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain_node")," service."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Docker complete database reset")),(0,r.kt)("p",null," There is a simple command in the alias list above that will tear down all services, remove orphen containers and remove all volumes. ",(0,r.kt)("em",{parentName:"p"},"Only run this command if you are ok with it clearing out your Docker volumes etc"),". Check the alias for its exact functionality. The command run is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dclean()\n")),(0,r.kt)("h3",{id:"coding-style"},"Coding style"),(0,r.kt)("p",null,"Following coding style applies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Always use semicolons otherwise ",(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/codebyte-why-are-explicit-semicolons-important-in-javascript-49550bea0b82/"},"dragons may bite you"),"!"),(0,r.kt)("li",{parentName:"ul"},"Use 4 spaces as a default indent for all files and set this in your IDE.")))}u.isMDXComponent=!0}}]);