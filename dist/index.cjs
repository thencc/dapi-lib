"use strict";var I=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var E=(a,e,t)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,S=(a,e)=>{for(var t in e||(e={}))N.call(e,t)&&E(a,t,e[t]);if(C)for(var t of C(e))B.call(e,t)&&E(a,t,e[t]);return a};var F=(a,e)=>{for(var t in e)I(a,t,{get:e[t],enumerable:!0})},q=(a,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of M(e))!N.call(a,n)&&n!==t&&I(a,n,{get:()=>e[n],enumerable:!(s=U(e,n))||s.enumerable});return a};var L=a=>q(I({},"__esModule",{value:!0}),a);var G={};F(G,{NCCDapiTypes:()=>R,default:()=>b});module.exports=L(G);var P="https://nccdapi.web.app";function D(a,e){if(console.log("sanity check"),e.accessToken||console.warn("YOU HAVE NO API KEY!  Just sayin"),!a)throw new Error("you must provide an api endpoint!")}var o={call:async function(a,e,t){D(a,e);let s=t||"v1";console.log(`running call to ${s}/${a}`);let n={};try{return n=await(await fetch(`${P}/${s}/${a}`,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),console.log("NCCdAPIs.ts: got response!",n),n}catch(r){return console.log("there was an error ",r),{requestStatus:"fail",requestError:r,requestErrorMessage:r.message}}},requestToken(){},fetch:async function(a,e,t){D(a,e);let s=t||"v1";console.log(`running fetch to ${s}/${a}`);let n={};try{let r=await fetch(`${P}/${s}/${a}`,{method:"GET",cache:"no-cache"});return console.log("got response!"),n=await r.json(),n}catch(r){return console.log("there was an error ",r),{requestStatus:"fail",requestError:r,requestErrorMessage:r.message}}}};var c=class{constructor(){this.accessToken=""}static destroy(){c.instance&&(c.instance=null)}static getInstance(e){return e.length==0?null:(c.instance||(c.instance=new c),c.instance.accessToken=e,c.instance)}static getOrgStatus(e){switch(e){case 1:return"Active";default:return"Undefined state"}}async mintOrg(e){let t={accessToken:this.accessToken,route:"mint",uuid:e.uuid};try{let s=await o.call("rodeo/org/"+e.orgName,t);return console.log("mint org resposne: ",s),s}catch(s){return console.log("there was an error ",s),null}}async updateOrg(e){let t={accessToken:this.accessToken,uuid:e.uuid,route:"update",edits:e.data};try{let s=await o.call("rodeo/org/"+e.orgName,t);console.log("the edit response is: ",s)}catch(s){console.log("there was an error ",s)}}async createOrg(e){let t=S({accessToken:this.accessToken},e);console.log("data is: ",t);try{let s=await o.call("rodeo/org/create",t);return console.log("org creation response: ",s),s}catch(s){return console.log("there was an error ",s),null}}async getAllOrgs(e){if(e.length==0)return console.error("Invalid UUID"),null;let t={accessToken:this.accessToken,uuid:e};return await o.call("rodeo/test",t)}async getOrgByAppId(e,t){if(e.length==0||t==0)return e.length==0&&console.error("Invalid UUID"),t==0&&console.error("Invalid org app ID"),null;let s={accessToken:this.accessToken,uuid:e,route:"fetchByAppId"},n="rodeo/org/"+t;try{let r=await o.call(n,s);return console.log("response of fetch: ",r),r}catch(r){return console.error("there was an error: ",r),null}}async getOrgByName(e,t){if(e.length==0||t.length==0)return e.length==0&&console.error("Invalid UUID"),t.length==0&&console.error("Invalid org name"),null;let s={accessToken:this.accessToken,uuid:e,route:"fetch"},n="rodeo/org/"+t;try{let r=await o.call(n,s);return console.log("response: ",r),r}catch(r){return console.log("there was an error ",r),null}}async createProject(e,t,s,n,r,h){let i={accessToken:this.accessToken,route:"create",uuid:e,creatorAddress:t,url:s,title:n,description:r,org_id:h},f="rodeo/project/create";try{let m=await o.call(f,i);return console.log("project creation response: ",m),m}catch(m){return console.log("there was an error ",m),null}}async fetchProjectsByOrgId(e,t){let s={accessToken:this.accessToken,uuid:e,route:"fetchByOrgId",org_id:t},n="rodeo/project/all";try{let r=await o.call(n,s);return console.log("fetch projects by org response: ",r),r}catch(r){return console.log("there was an error ",r),null}}async fetchProject(e,t){let s={accessToken:this.accessToken,uuid:e,route:"fetch"},n="rodeo/project/"+t;try{let r=await o.call(n,s);return console.log("fetch projects by org response: ",r),r}catch(r){return console.log("there was an error ",r),null}}async fetchAllMilestonesByProject(e,t){let s={accessToken:this.accessToken,uuid:e,route:"fetchByProjectId",project_id:t},n="rodeo/milestone/all";try{let r=await o.call(n,s);return console.log("fetch milestones by project response: ",r),r}catch(r){return console.log("there was an error ",r),null}}async createMilestone(e,t,s,n,r,h,i,f){try{let m={accessToken:this.accessToken,uuid:e,creatorAddress:t,route:"create",title:n,description:r,url:s,data:i,project_id:h,approverUUID:f},j="rodeo/milestone/create",O=await o.call(j,m);return console.log("milestone creation response: ",O),O}catch(m){return console.log("there was an error ",m),null}}async fetchMilestone(e,t){let s={accessToken:this.accessToken,uuid:e,route:"fetch"},n="rodeo/milestone/"+t;try{let r=await o.call(n,s);return console.log("fetch milestone by id: ",r),r}catch(r){return console.log("there was an error ",r),null}}};var g=class{constructor(){this.accessToken=""}static destroy(){g.instance&&(g.instance=null)}static getInstance(e){return e.length==0?null:(g.instance||(g.instance=new g),g.instance.accessToken=e,g.instance)}async sendBricks(e,t,s){try{let n={accessToken:this.accessToken,uuid:e,amount:1e3,toAddress:t,toAppIndex:s},r=await o.call("bricks/send",n);console.log("got response!",r)}catch(n){console.log("there was an error ",n)}}async sendRickToMedia(e,t,s){try{let n={accessToken:this.accessToken,uuid:e,amount:1e3,toAddress:t,toAppIndex:s},r=await o.call("bricks/send-rick",n);console.log("got response!",r)}catch(n){console.log("there was an error ",n)}}async listBricks(e){try{if(e.length==0)throw new Error("Invalid creator address");let t={accessToken:this.accessToken,creatorAddress:e},s=await o.call("bricks/list",t);return console.log("got response!",s),s}catch(t){return console.log("there was an error ",t),null}}async deployMedia(e,t,s,n,r,h){try{if(e.length==0)throw new Error("Invalid uuid");if(t.length==0)throw new Error("Invalid name");if(h.length==0)throw new Error("Invalid creator address");let i={accessToken:this.accessToken,uuid:e,name:t,metadata:s,price:n,publicPerformancePrice:r,creatorAddress:h},f=await o.call("bricks/deploy-media",i);return console.log("got response!",f),f}catch(i){return console.log("there was an error ",i),null}}},k=g;var u=class{constructor(){this.accessToken=""}static destroy(){u.instance&&(u.instance=null)}static getInstance(e){return e.length==0?null:(u.instance||(u.instance=new u),u.instance.accessToken=e,u.instance)}async send(e,t){try{let s={accessToken:this.accessToken,qText:e,ctx:t,respLength:140},n=await o.call("linr/music",s);return console.log("LiNR tests send, response is: ",n),n}catch(s){return console.error("there was an error: ",s),null}}async sendMedia(e,t){try{let s={accessToken:this.accessToken,qText:e,ctx:t,respLength:140},n=await o.call("linr/media",s);return console.log("LiNR tests send, response is: ",n),n}catch(s){return console.error("there was an error: ",s),null}}},A=u;var p=class{constructor(){this.address="";this.algonaut=null;this.nccTokenBal=-1}static destroy(){p.instance&&(p.instance=null)}static async getInstance(e){return p.instance||(p.instance=new p),p.instance.algonaut=e,p.instance}async getNCCBalance(){if(!this.algonaut)throw new Error("Invalid algonaut");if(!this.algonaut.account)throw new Error("No user logged in");return await this.algonaut.getTokenBalance(this.algonaut.account.address,101088863)}async isOptedNCC(){if(!this.algonaut)throw new Error("Invalid algonaut");if(!this.algonaut.account)throw new Error("No user logged in");return await this.algonaut.isOptedIntoAsset({account:this.algonaut.account.address,assetId:101088863})}async getAccessToken(){var e;try{if(!this.algonaut)throw new Error("Invalid algonaut");let t=await this.algonaut.atomicCallApp({appIndex:101209779,appArgs:["get_token"],optionalFields:{assets:[101088863]}}),s=t.transaction.txID().toString();if(console.log("trying to sign this tx: ",t),!this.algonaut.walletState.activeWallet)throw new Error("No valid active wallet");let n=t.transaction.toByte();if(!((e=this.algonaut.walletState.enabledWallets)!=null&&e.inkey))throw new Error("No valid inkey wallet");console.log("hello this is me: ",this.algonaut);let r=await this.algonaut.walletState.enabledWallets.inkey.signTransactions([n]);console.log(r);let h=this.algonaut.txnBuffToB64(r[0]),i=await o.call("get-access-token",{address:this.address,txId:s,signedTx:h});if(console.log("got response!"),console.log(i),!i)throw new Error("No access token response!");return i}catch(t){return console.log("there was an error ",t),{status:"fail",message:"Error getting access token",error:t,result:null}}}async refreshNCCBal(){try{if(!this.algonaut)throw new Error("Invalid algonaut");let e=await this.algonaut.getTokenBalance(this.address,101088863);this.nccTokenBal=e}catch(e){console.error("unable to refresh NCC balance: ",e)}}async getNCCs(){return await o.call("get-nccs",{address:this.address})}async createUserSLA(e){try{if(!this.algonaut)throw new Error("Invalid algonaut");if(!this.algonaut.account)throw new Error("No user logged in");let t=await this.isOptedNCC();if(t)return{status:"success",message:"Address already opted into NCCs",error:null,result:{address:this.algonaut.account.address,isOpted:t}};let s=await this.algonaut.sendTransaction([await this.algonaut.atomicOptInApp({appIndex:110525806,appArgs:[e]}),await this.algonaut.atomicOptInAsset(101088863),await this.algonaut.atomicOptInAsset(10458941)]);if(s.error)throw s.error;if(s.status=="fail")throw new Error("Failed to opt-in to NCC SLA app");console.log(s);let n=await this.getNCCs();if(n.error)throw n.error;if(n.status=="fail")throw new Error("Failed to get NCCs for user SLA");return console.log(n),{status:"success",message:"Created SLA contract for address",error:null,result:{address:this.algonaut.account.address,slaResult:s,nccDropResult:n.result}}}catch(t){return console.error("error in creating SLA contract: ",t),{status:"fail",message:"Error in creating SLA contract",error:t,result:null}}}},T=p;var l=class{constructor(){this.accessToken="";this.algonaut=null}static destroy(){l.instance&&(l.instance=null)}static getInstance(e,t){return e.length==0?null:(l.instance||(l.instance=new l),l.instance.algonaut=t,l.instance.accessToken=e,l.instance)}validConfig(e){return!(e.apiKey.length==0||e.appId.length==0||e.authDomain.length==0||e.messagingSenderId.length==0||e.projectId.length==0||e.storageBucket.length==0)}async receive(e,t,s){try{if(e.length==0)throw new Error("Invalid UUID");if(!this.validConfig(s))throw new Error("Invalid TTM config");let n={accessToken:this.accessToken,uuid:e,lastRound:t,config:s};return await o.call("ttm/receive",n)}catch(n){return console.error("there was an error: ",n),null}}async send(e,t,s){try{if(!s||s==0)throw new Error("Invalid token target value");if(t){if(e.length==0)throw new Error("Invalid UUID")}else throw new Error("Invalid message");let n={accessToken:this.accessToken,uuid:e,tokenToTarget:s,message:t},r=await o.call("ttm/send",n);return console.log("TTM tests send: response",r),r}catch(n){return console.error("there was an error: ",n),null}}async optInToToken(e){try{if(!this.algonaut)throw new Error("Invalid algonaut");if(e==0)throw new Error("Invalid token asset ID to opt into");let t=await this.algonaut.optInAsset(e);return console.log("opt result: ",t),t}catch(t){return console.error("there was an error: ",t),null}}async getTokens(e){try{if(!this.algonaut)throw new Error("Invalid algonaut");if(e.length==0)throw new Error("Invalid user address");console.log("fetching tokens for "+e);let t=await this.algonaut.getAccountInfo(e),s=[];for(let n=0;n<t.assets.length;n++){let r=t.assets[n];if(r.amount){let h=r["asset-id"],i=await this.algonaut.getAssetInfo(h);console.log(i),s.push({id:i.index,name:i.params["unit-name"]+" - "+i.params.name})}}return s}catch(t){return console.error("there was an error: ",t),[]}}},v=l;var d=class{constructor(){this.accessToken=""}static getInstance(e){return e.length==0?null:(d.instance||(d.instance=new d),d.instance.accessToken=e,d.instance)}static destroy(){d.instance&&(d.instance=null)}async registerUser(e,t){if(this.accessToken&&e.length&&t.length){console.log("registering user...");let s=await o.call("register-account",{accessToken:this.accessToken,uuid:e,creatorAddress:t});return console.log(s),s}else return alert("you need a token and some data!"),null}async deregisterUser(e){if(this.accessToken&&e.length){console.log("de-registering user");let t=await o.call("deregister-account",{accessToken:this.accessToken,uuid:e});return console.log(t),t}else return alert("you need a token and some data!"),null}async fundAccount(e,t,s){if(this.accessToken&&e.length&&t){console.log("funding...");let n=await o.call("fund-account",{accessToken:this.accessToken,uuid:e,asaId:s,amount:t});return console.log(n),n}else return alert("you need a token and some data!"),null}async getAllAccounts(e){if(this.accessToken&&e.length>0){let t=await o.call("list-accounts",{accessToken:this.accessToken,creatorAddress:e});return console.log("got response!",t),t}return null}async accountOptInApp(e,t,s){if(this.accessToken&&e.length){console.log("opting account into app...");let n=await o.call("opt-account-into-app",{accessToken:this.accessToken,uuid:e,appId:t,appArgs:s});return console.log(n),n}else return alert("you need a token and some data!"),null}async accountOptInToken(e,t){if(this.accessToken&&e.length&&t){console.log("opt in...");let s=await o.call("opt-account-into-token",{accessToken:this.accessToken,uuid:e,asaId:t});return console.log(s),s}else return alert("you need a token and some data!"),null}},x=d;var R=(r=>(r.Rodeo="rodeo",r.TTM="ttm",r.LiNR="linr",r.Bricks="bricks",r.Peels="peels",r))(R||{});var w=class{constructor(e){this.rodeo=null;this.bricks=null;this.linr=null;this.ttm=null;this.user=null;this.token=null;this.algonaut=null;this.docs=o.call("docs",{});this.dAPI=o;this.excludes=null;e&&(this.excludes=e)}async init(e){console.log("getting NCC Token instance...");let t=await T.getInstance(e);this.algonaut=e,this.token=t,console.log("initialized NCC's happy dapi")}static destroyAll(){T.destroy(),x.destroy(),c.destroy(),v.destroy(),A.destroy(),k.destroy(),console.log("destroyed all services")}serviceSpecified(e){return!this.excludes||this.excludes&&!this.excludes.includes(e)}startServices(e){return this.algonaut?this.algonaut.account?this.algonaut.account.address&&e.length?(this.serviceSpecified("rodeo")&&(this.rodeo=c.getInstance(e)),this.serviceSpecified("bricks")&&(this.bricks=k.getInstance(e)),this.serviceSpecified("linr")&&(this.linr=A.getInstance(e)),this.serviceSpecified("ttm")&&(this.ttm=v.getInstance(e,this.algonaut)),this.user=x.getInstance(e),console.log("started services"),!0):!1:(console.error("No user logged in"),!1):(console.error("Invalid algonaut instance"),!1)}};var b=class{constructor(e){this.dapis=null;this.endUser=null;if(!e.algonaut)throw new Error("Invalid algonaut instance");this.dapis=new w(e.excludes),this.dapis.init(e.algonaut)}};0&&(module.exports={NCCDapiTypes});
//# sourceMappingURL=index.cjs.map
