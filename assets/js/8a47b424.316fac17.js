"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[803],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,k=u["".concat(p,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(k,i(i({ref:t},s),{},{components:n})):o.createElement(k,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70670:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={id:"build-run-dev-node-and-services",title:"Run dev Point Node services",sidebar_label:"Run dev Point Node services",slug:"../build-run-dev-node-and-services"},p=void 0,d={unversionedId:"build/build-run-dev-node-and-services",id:"build/build-run-dev-node-and-services",title:"Run dev Point Node services",description:"You need to install Arlocal and Ganache-CLI as dependent services for Point Node to use.",source:"@site/docs/build/build-run-dev-node-and-services.md",sourceDirName:"build",slug:"/build-run-dev-node-and-services",permalink:"/docs/build-run-dev-node-and-services",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-run-dev-node-and-services.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1649833723,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"build-run-dev-node-and-services",title:"Run dev Point Node services",sidebar_label:"Run dev Point Node services",slug:"../build-run-dev-node-and-services"},sidebar:"pnSidebar",previous:{title:"Point Network Builders Starter's Guide",permalink:"/docs/build-build-with-point-network"},next:{title:"Testing Guide",permalink:"/docs/build-testing-guide"}},s=[{value:"Install Arlocal",id:"install-arlocal",children:[],level:2},{value:"Install Ganache CLI",id:"install-ganache-cli",children:[],level:2},{value:"Deploy Point Contracts",id:"deploy-point-contracts",children:[],level:2},{value:"Run the Owner Point Node and deploy an example Zapp",id:"run-the-owner-point-node-and-deploy-an-example-zapp",children:[],level:2},{value:"Run the Visitor Point Node",id:"run-the-visitor-point-node",children:[],level:2}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You need to install Arlocal and Ganache-CLI as dependent services for Point Node to use."),(0,r.kt)("h2",{id:"install-arlocal"},"Install Arlocal"),(0,r.kt)("p",null,"To install an start Arlocal:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/textury/arlocal"},"Arlocal")," repo"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npx arlocal"))),(0,r.kt)("h2",{id:"install-ganache-cli"},"Install Ganache CLI"),(0,r.kt)("p",null,"To install and start Ganache blockchain using Ganache CLI:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install globally via npm: ",(0,r.kt)("inlineCode",{parentName:"li"},"npm i -g ganache-cli")),(0,r.kt)("li",{parentName:"ol"},"Start Ganache blockchain on port 7545 including a specific prefunded account: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ganache-cli -v -p 7545 -i 256 --keepAliveTimeout 20000 \\\n  --account 0x011967d88c6b79116bb879d4c2bc2c3caa23569edd85dfe0bc596846837bbc8e,0x56bc75e2d63100000 \\\n  --account 0x22a316b515a68d4851087571bd5ff051f5ec3f13b28997fb80a8de055052514e,0x56bc75e2d63100000\n")),(0,r.kt)("h2",{id:"deploy-point-contracts"},"Deploy Point Contracts"),(0,r.kt)("p",null,"To deploy the Point Contracts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source .bash_alias\ncd hardhat\nrm -rf cache\nnpm i\nnpx hardhat compile\nnpm start\n")),(0,r.kt)("h1",{id:"setup-local-point-node-config"},"Setup Local Point Node Config"),(0,r.kt)("p",null,"Create a new profile directory on your local machine for ",(0,r.kt)("inlineCode",{parentName:"p"},"devlocal"),". This is the profile that you can use for running the dev Point Node directly on your own computer without using Docker. This folder can be wherever you like. In this tutorial we will create the profile under ",(0,r.kt)("inlineCode",{parentName:"p"},"~/workspace/pn/devlocal"),". "),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir")," command below which will create the folders shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p ~/workspace/pn/devlocal/keystore\n")),(0,r.kt)("p",null,"Copy the dev wallet key and arweave key from the pointnetowrk repository into the ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore")," directory that you created in the previous step."),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"cp")," command below. This assumes that you are currently in the cloned pointnetwork repository folder and you have already created the 'keystore' folder in the location specified earlier. Feel free to change this according to your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp resources/blockchain-test-key.json ~/workspace/pn/devlocal/keystore/key.json\ncp resources/arweave-test-key.json ~/workspace/pn/devlocal/keystore/arweave.json\n")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"devlocal.yaml")," config file and save it in the pointnetwork repo ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," directory. NOTE: This file is ignored by the ",(0,r.kt)("inlineCode",{parentName:"p"},"gitignore")," file automatically so do not commit this!"),(0,r.kt)("p",null,"Below is an example, You would only need to change ",(0,r.kt)("inlineCode",{parentName:"p"},"datadir")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.keystore_path")," values if you have created your profile in a different directory to what is specified:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You may need to replace the tilde (~) in the directory path below and expand that to the full path, so on a Mac this would be ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/YOUR_USERNAME/pn/devlocal")," etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You can change ",(0,r.kt)("inlineCode",{parentName:"p"},"zappsdir")," to any directory on your computer so that it points to the location where you have all your own personal Zapps that you are developing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"datadir: ~/workspace/pn/devlocal\nzappsdir: ../zapps\nwallet:\n  keystore_path: ~/workspace/pn/devlocal/keystore\nmode: zappdev\nlog:\n  sendLogs: false\n  level: debug\nstorage:\n  arweave_host: localhost\n  arweave_protocol: http\n  arweave_port: 1984\n  use_arweave_bundler: false\n  use_arlocal: true\n  arweave_gateway_url: http://localhost:1984/graphql\nnetwork:\n  web3: http://localhost:7545\napi:\n  address: 127.0.0.1\nzproxy:\n  host: 127.0.0.1\n")),(0,r.kt)("p",null,"Ensure that you have loaded the alias commands into your current terminal session."),(0,r.kt)("p",null,"Run the following command from the root of the cloned pointnetwork repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source .bash_alias\n")),(0,r.kt)("p",null,"Create a profile in Firefox called ",(0,r.kt)("inlineCode",{parentName:"p"},"pointnetwork")," that has a proxy set to route all http / https traffic to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8666"),". Don't forget to add the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-build-with-point-network#create-a-point-network-profile-in-firefox"},"Point Network CA certificate")," to the new profile in Firefox. "),(0,r.kt)("h2",{id:"run-the-owner-point-node-and-deploy-an-example-zapp"},"Run the Owner Point Node and deploy an example Zapp"),(0,r.kt)("p",null,"The above setup steps only need to be performed once. Going forward you can start a Point Node using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i\npoint-dev\n")),(0,r.kt)("p",null,"Point Network Example Zapps live in their own separate repo called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/zapps"},"Zapps"),". Clone this repo to any location you like on your computer and proceed with the instructions below. In this tutorial we will assume that you have cloned the Zapps repo to a folder ",(0,r.kt)("strong",{parentName:"p"},"one level below pointnetwork")," repo. If you want to clone to a different location that is fine - you just need to change the relative paths below to your path."),(0,r.kt)("p",null,"You can deploy a Zapp from the cloned ",(0,r.kt)("inlineCode",{parentName:"p"},"zapps")," folder. So from the pointnetwork repo folder run the following to deploy blog.point that is in the cloned zapps repo folder one level below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point-deploy ../zapps/blog.point --contracts\n")),(0,r.kt)("p",null,"Open a local Point Browser that connects to the Point Node proxy (which is running on port 8666 since there is no port mapping applied when running the Point Node outside of Docker)."),(0,r.kt)("p",null,"NOTE: This has to be run from within the cloned ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointsdk"},"PointSDK repo")," folder which you will have already setup according to the instructions ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-build-with-point-network#create-a-point-network-profile-in-firefox"},"here"),"."),(0,r.kt)("p",null,"Run the command below which assumes that you already have created the ",(0,r.kt)("inlineCode",{parentName:"p"},"pointnetwork")," profile as stated earlier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point-browser\n")),(0,r.kt)("h1",{id:"optional-run-a-second-point-node-to-simulate-a-visitor"},"(Optional) Run a second Point Node to simulate a Visitor"),(0,r.kt)("p",null,"To simulate having more than one Identity on the Netowrk and to be able to interact with both Identities, it is necessary to create a new profile and start a separate instance of the Point Node using this new profile. This is especially useful when developing Zapps such as ",(0,r.kt)("inlineCode",{parentName:"p"},"email.point")," which require direct interaction between two idetntities (sending emails). "),(0,r.kt)("p",null,"Create a new profile directory on your local machine for ",(0,r.kt)("inlineCode",{parentName:"p"},"visitlocal"),". This is the profile that you can use for running the dev Point Node as a second visitor Identity. This folder can be wherever you like. In this tutorial we will create the profile under ",(0,r.kt)("inlineCode",{parentName:"p"},"~/workspace/pn/visitlocal"),". "),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir")," command below which will create the folders shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p ~/workspace/pn/visitlocal/keystore\n")),(0,r.kt)("p",null,"Copy the dev wallet key and arweave key from the pointnetowrk repository into the ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore")," directory that you created in the previous step."),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"cp")," command below. This assumes that you are currently in the cloned pointnetwork repository folder and you have already created the 'keystore' folder in the location specified earlier. Feel free to change this according to your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp resources/blockchain-test-key2.json ~/workspace/pn/devlocal/keystore/key.json\ncp resources/arweave-test-key2.json ~/workspace/pn/devlocal/keystore/arweave.json\n")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"visitlocal.yaml")," config file and save it in the pointnetwork repo ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," directory. NOTE: This file is ignored by the ",(0,r.kt)("inlineCode",{parentName:"p"},"gitignore")," file automatically so do not commit this!"),(0,r.kt)("p",null,"Below is an example, You would only need to change ",(0,r.kt)("inlineCode",{parentName:"p"},"datadir")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.keystore_path")," values if you have created your profile in a different directory to what is specified:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You may need to replace the tilde (~) in the directory path below and expand that to the full path, so on a Mac this would be ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/YOUR_USERNAME/pn/visitlocal")," etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You can change ",(0,r.kt)("inlineCode",{parentName:"p"},"zappsdir")," to any directory on your computer so that it points to the location where you have all your own personal Zapps that you are developing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"datadir: ~/workspace/pn/visitlocal\nzappsdir: ../zapps\nwallet:\n  keystore_path: ~/workspace/pn/visitlocal/keystore\nmode: zappdev\nlog:\n  sendLogs: false\n  level: debug\nstorage:\n  arweave_host: localhost\n  arweave_protocol: http\n  arweave_port: 1984\n  use_arweave_bundler: false\n  use_arlocal: true\n  arweave_gateway_url: http://localhost:1984/graphql\nnetwork:\n  web3: http://localhost:7545\napi:\n  address: 127.0.0.1\n  port: 24682\nzproxy:\n  host: 127.0.0.1\n  port: 65502\n  server_port: 8779\n  server_http_port: 8780\n")),(0,r.kt)("p",null,"Create a profile in Firefox called ",(0,r.kt)("inlineCode",{parentName:"p"},"website_visitor_docker")," that has a proxy set to route all http / https traffic to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:65502")," (",(0,r.kt)("strong",{parentName:"p"},"note")," you can see this matches the zproxy config set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"visitlocal.yaml")," file defined above). Don't forget to add the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-build-with-point-network#create-a-point-network-profile-in-firefox"},"Point Network CA certificate")," to the new profile in Firefox. "),(0,r.kt)("h2",{id:"run-the-visitor-point-node"},"Run the Visitor Point Node"),(0,r.kt)("p",null,"The above setup steps for configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"visitlocal")," only need to be performed once. Going forward you can start a Point Node using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i\npoint-visit\n")),(0,r.kt)("p",null,"Open a local Point Browser that connects to the Visitor Point Node proxy running on port 65502."),(0,r.kt)("p",null,"NOTE: This has to be run from within the cloned ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointsdk"},"PointSDK repo")," folder which you will have already setup according to the instructions ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-build-with-point-network#create-a-point-network-profile-in-firefox"},"here"),"."),(0,r.kt)("p",null,"Run the command below which assumes that you already have created the ",(0,r.kt)("inlineCode",{parentName:"p"},"website_visitor_docker")," profile as stated earlier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point-browser-visitor\n")),(0,r.kt)("p",null,"You should now be able to interact with any Zapps that have been deployed. As mentioned this is useful for Zapps that required interacting between two Identities such as the email zapp. I encourage you to try it!"),(0,r.kt)("h1",{id:"optional-start-a-hardhat-console"},"(Optional) Start a Hardhat console"),(0,r.kt)("p",null,"If you want to start a hardhat console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat console --network development\n")),(0,r.kt)("p",null,"Then you can interact with the deployed Point contracts, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"identity = await ethers.getContractAt(\"identity\", \"0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d\")\nawait identity.ikvGet('blog', 'zweb/contracts/address/Blog')\n")))}u.isMDXComponent=!0}}]);