(function(){"use strict";var t={650:function(t,s,e){var a=e(9242),n=e(3396);const l=(0,n._)("br",null,null,-1),i=(0,n._)("h1",null," TO DO LIST",-1);function o(t,s,e,a,o,d){const r=(0,n.up)("titleBar"),c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r),l,i,(0,n.Wm)(c)],64)}const d={class:"navbar navbar-expand navbar-light bg-light"},r={class:"container"},c=(0,n._)("h2",{class:"navbar-brand"},[(0,n._)("strong",null,"Task Manager")],-1),u=(0,n._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarSupportedContent"},p={class:"navbar-nav ml-auto"},k={class:"nav-item active"},g=(0,n._)("span",{class:"sr-only"},"(current)",-1),m={class:"nav-item"},_={class:"nav-item"},f={class:"nav-item"};function v(t,s,e,a,l,i){const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",d,[(0,n._)("div",r,[c,u,(0,n._)("div",h,[(0,n._)("ul",p,[(0,n._)("li",k,[(0,n.Wm)(o,{class:"nav-link",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home "),g])),_:1})]),(0,n._)("li",m,[(0,n.Wm)(o,{class:"nav-link",to:"/displayCompletedTask"},{default:(0,n.w5)((()=>[(0,n.Uk)("Completed Tasks")])),_:1})]),(0,n._)("li",_,[(0,n.Wm)(o,{class:"nav-link",to:"/displayPages"},{default:(0,n.w5)((()=>[(0,n.Uk)("InCompleted Tasks")])),_:1})]),(0,n._)("li",f,[(0,n.Wm)(o,{class:"nav-link",to:"/addTask"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Add Task ")])),_:1})])])])])])}var b={name:"titleBar",methods:{handlePage(){console.log(Error)}}},w=e(89);const T=(0,w.Z)(b,[["render",v]]);var y=T,A={components:{titleBar:y}};const C=(0,w.Z)(A,[["render",o]]);var x=C,M=e(2483),D=e(7139);const j={class:"displayTask"},O={key:0,class:"errorMessage"},S={class:"fw-bold text-danger"},z={class:"container"},I={class:"row"},U=(0,n._)("div",{class:"col"},[(0,n._)("p",{class:"h3 fw-bold text-success text-center m-4"}," Incompleted Tasks ")],-1),q={class:"row"},E={class:"col"},P={class:"table table-hover text-center table-striped"},H=(0,n._)("thead",{class:"bg-light"},[(0,n._)("tr",null,[(0,n._)("th",null,"Title"),(0,n._)("th",null,"Description"),(0,n._)("th",null,"Status"),(0,n._)("th",{colspan:"2"},"Actions")])],-1),V={class:"text-center"},W=["onClick"],Z=(0,n._)("i",{class:"fa-solid fa-trash"},null,-1),$=[Z];function N(t,s,e,a,l,i){return(0,n.wg)(),(0,n.iD)("div",j,[t.errorMessage?((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("p",S,(0,D.zw)(t.errorMessage),1)])):(0,n.kq)("",!0),(0,n._)("div",z,[(0,n._)("div",I,[U,(0,n._)("div",q,[(0,n._)("div",E,[(0,n._)("table",P,[H,(0,n._)("tbody",V,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.list,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,(0,D.zw)(t.title),1),(0,n._)("td",null,(0,D.zw)(t.description),1),(0,n._)("td",null,(0,D.zw)(t.status),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",class:"btn btn-link btn-lg",onClick:s=>i.deleteTask(t.id)},$,8,W)])])))),128))])])])])])])])}class Y{static getIncompletedTasks(){let t="https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/?status=Incomplete";return fetch(t)}static getCompletedTasks(){let t="https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/?status=Task%20Completed";return fetch(t)}static getAllTasks(){let t="https://65269f8f917d673fd76ca8e4.mockapi.io/tasks";return fetch(t)}static getTasks(t){let s="https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/"+t;return fetch(s)}static deleteTask(t){let s="https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/"+t;return fetch(s,{method:"DELETE"})}static changeStatus(t){let s="/tasks/"+t;return fetch(s,{method:"PATCH",mode:"cors",headers:{"Content-type":"application/json"},body:{status:"Task Completed"}})}}var B={name:"displayTask",data:function(){return{loading:!1,list:[],errorMessage:null}},methods:{async getIncompleteTask(){try{this.loading=!0,await Y.getIncompletedTasks().then((t=>t.json())).then((t=>this.list=t)),this.loading=!1}catch(t){this.loading=!1,this.errorMessage=t}},async deleteTask(t){console.log(t);try{await Y.deleteTask(t).then((t=>{if(t.ok)return t.json();console.log("Delete task was performed: "+t.ok)})).then((t=>this.list=t)),console.log(this.list),await Y.getIncompletedTasks().then((t=>t.json())).then((t=>this.list=t)),this.loading=!1}catch(s){this.loading=!1,this.errorMessage=s}}},mounted(){this.getIncompleteTask()}};const K=(0,w.Z)(B,[["render",N]]);var J=K;const L={class:"home"},F={key:0,class:"errorMessage"},G={class:"fw-bold text-danger"},Q={class:"container"},R={class:"row"},X=(0,n._)("div",{class:"col"},[(0,n._)("p",{class:"h3 fw-bold text-success text-center m-4"},"Tasks")],-1),tt={class:"row"},st={class:"col"},et={class:"table table-hover text-center table-striped"},at=(0,n._)("thead",{class:"bg-light"},[(0,n._)("tr",null,[(0,n._)("th",null,"Title"),(0,n._)("th",null,"Description"),(0,n._)("th",null,"Status"),(0,n._)("th",{colspan:"2"},"Actions")])],-1),nt={class:"text-center"},lt=(0,n._)("button",{type:"button",class:"btn btn-link btn-lg"},[(0,n._)("i",{class:"fa-solid fa-pen-to-square"})],-1),it=["onClick"],ot=(0,n._)("i",{class:"fa-solid fa-trash"},null,-1),dt=[ot];function rt(t,s,e,a,l,i){const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",L,[t.errorMessage?((0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("p",G,(0,D.zw)(t.errorMessage),1)])):(0,n.kq)("",!0),(0,n._)("div",Q,[(0,n._)("div",R,[X,(0,n._)("div",tt,[(0,n._)("div",st,[(0,n._)("table",et,[at,(0,n._)("tbody",nt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.list,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,(0,D.zw)(t.title),1),(0,n._)("td",null,(0,D.zw)(t.description),1),(0,n._)("td",null,(0,D.zw)(t.status),1),(0,n._)("td",null,[(0,n.Wm)(o,{to:`/editTask/${t.id}`},{default:(0,n.w5)((()=>[lt])),_:2},1032,["to"])]),(0,n._)("td",null,[(0,n._)("button",{onClick:s=>i.deleteTask(t.id),type:"button",class:"btn btn-link btn-lg"},dt,8,it)])])))),128))])])])])])])])}var ct={name:"HomeView",data:function(){return{loading:!1,list:[],errorMessage:null}},methods:{async getAllTask(){try{this.loading=!0,await Y.getAllTasks().then((t=>t.json())).then((t=>this.list=t)),this.loading=!1,console.log(this.list)}catch(t){this.loading=!1,this.errorMessage=t}},async deleteTask(t){try{await Y.deleteTask(t).then((t=>{if(t.ok)return t.json();console.log("Delete task was performed: "+t.ok)})).then((t=>this.list=t)),console.log(this.list),await Y.getAllTasks().then((t=>t.json())).then((t=>this.list=t)),this.loading=!1}catch(s){this.loading=!1,this.errorMessage=s}}},mounted(){this.getAllTask()}};const ut=(0,w.Z)(ct,[["render",rt]]);var ht=ut;const pt={class:"container"},kt={class:"container m-4",align:"center"},gt={class:"row"},mt={class:""},_t={class:"card shadow-lg"},ft=(0,n._)("div",{class:"card-header bg-seconadry text-black"},[(0,n._)("p",{class:"h3"},"Add A new Task")],-1),vt={class:"card-body bg-light"},bt={class:"mb-2"},wt={class:"mb-2"},Tt={class:"mb-2"},yt=(0,n._)("option",{selected:""},"Incomplete",-1),At=(0,n._)("option",null,"Task Completed",-1),Ct=[yt,At],xt=(0,n._)("div",{class:"mb-2"},[(0,n._)("input",{class:"btn btn-primary",value:"Add Task",type:"submit"})],-1);function Mt(t,s,e,l,i,o){return(0,n.wg)(),(0,n.iD)("div",pt,[(0,n._)("div",kt,[(0,n._)("div",gt,[(0,n._)("div",mt,[(0,n._)("div",_t,[ft,(0,n._)("div",vt,[(0,n._)("form",{onSubmit:s[3]||(s[3]=(0,a.iM)(((...t)=>o.addTask&&o.addTask(...t)),["prevent"])),method:"post"},[(0,n._)("div",bt,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[0]||(s[0]=s=>t.taskAdded.title=s),class:"form-control",placeholder:"Task Title",type:"text",name:"title",id:"title",required:""},null,512),[[a.nr,t.taskAdded.title]])]),(0,n._)("div",wt,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[1]||(s[1]=s=>t.taskAdded.description=s),class:"form-control",placeholder:"Description",type:"text",name:"description",id:"description",required:""},null,512),[[a.nr,t.taskAdded.description]])]),(0,n._)("div",Tt,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":s[2]||(s[2]=s=>t.taskAdded.status=s),class:"form-control",name:"status",id:"status",required:""},Ct,512),[[a.bM,t.taskAdded.status]])]),xt],32)])])])])])])}e(7658);var Dt={name:"addNewTask",data:function(){return{taskAdded:{title:"",description:"",status:""}}},methods:{async addTask(){fetch("https://65269f8f917d673fd76ca8e4.mockapi.io/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({title:this.taskAdded.title,description:this.taskAdded.description,status:this.taskAdded.status})}).then((t=>{if(t.ok)return t.json()})).then((t=>{console.log(t),t.isEmpty||this.$router.push("/")}))}}};const jt=(0,w.Z)(Dt,[["render",Mt]]);var Ot=jt;const St={class:"displayTask"},zt={key:0,class:"errorMessage"},It={class:"fw-bold text-danger"},Ut={class:"container"},qt={class:"row"},Et=(0,n._)("div",{class:"col"},[(0,n._)("p",{class:"h3 fw-bold text-success text-center m-4"},"Completed Tasks")],-1),Pt={class:"row"},Ht={class:"col"},Vt={class:"table table-hover text-center table-striped"},Wt=(0,n._)("thead",{class:"bg-light"},[(0,n._)("tr",null,[(0,n._)("th",null,"Title"),(0,n._)("th",null,"Description"),(0,n._)("th",null,"Status"),(0,n._)("th",{colspan:"2"},"Actions")])],-1),Zt={class:"text-center"},$t=["onClick"],Nt=(0,n._)("i",{class:"fa-solid fa-trash"},null,-1),Yt=[Nt];function Bt(t,s,e,a,l,i){return(0,n.wg)(),(0,n.iD)("div",St,[t.errorMessage?((0,n.wg)(),(0,n.iD)("div",zt,[(0,n._)("p",It,(0,D.zw)(t.errorMessage),1)])):(0,n.kq)("",!0),(0,n._)("div",Ut,[(0,n._)("div",qt,[Et,(0,n._)("div",Pt,[(0,n._)("div",Ht,[(0,n._)("table",Vt,[Wt,(0,n._)("tbody",Zt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.list,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,(0,D.zw)(t.title),1),(0,n._)("td",null,(0,D.zw)(t.description),1),(0,n._)("td",null,(0,D.zw)(t.status),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",class:"btn btn-link btn-lg",onClick:s=>i.deleteTask(t.id)},Yt,8,$t)])])))),128))])])])])])])])}var Kt={name:"displayCompleted",data:function(){return{loading:!1,list:[],errorMessage:null}},methods:{async getCompleteTask(){try{this.loading=!0,await Y.getCompletedTasks().then((t=>t.json())).then((t=>this.list=t)),this.loading=!1,console.log(this.list)}catch(t){this.loading=!1,this.errorMessage=t}},async deleteTask(t){try{console.log(t),await Y.deleteTask(t).then((t=>{if(t.ok)return t.json();console.log("Delete task was performed: "+t.ok)})).then((t=>this.list=t)),console.log(this.list),await Y.getCompletedTasks().then((t=>t.json())).then((t=>this.list=t)),this.loading=!1}catch(s){this.loading=!1,this.errorMessage=s}}},mounted(){this.getCompleteTask()}};const Jt=(0,w.Z)(Kt,[["render",Bt]]);var Lt=Jt;const Ft={class:"container"},Gt={class:"container m-4",align:"center"},Qt={class:"row"},Rt={class:""},Xt={class:"card shadow-lg"},ts=(0,n._)("div",{class:"card-header bg-seconadry text-black"},[(0,n._)("p",{class:"h3"},"Edit Task")],-1),ss={class:"card-body bg-light"},es={class:"mb-2"},as={class:"mb-2"},ns={class:"mb-2"},ls=(0,n._)("option",{selected:""},"Incomplete",-1),is=(0,n._)("option",null,"Task Completed",-1),os=[ls,is],ds=(0,n._)("div",{class:"mb-2"},[(0,n._)("input",{class:"btn btn-primary",value:"Save Task",type:"submit"})],-1);function rs(t,s,e,l,i,o){return(0,n.wg)(),(0,n.iD)("div",Ft,[(0,n._)("div",Gt,[(0,n._)("div",Qt,[(0,n._)("div",Rt,[(0,n._)("div",Xt,[ts,(0,n._)("div",ss,[(0,n._)("form",{onSubmit:s[3]||(s[3]=(0,a.iM)(((...t)=>o.editTask&&o.editTask(...t)),["prevent"])),method:"post"},[(0,n._)("div",es,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[0]||(s[0]=s=>t.taskAdded.title=s),class:"form-control",type:"text",name:"title",id:"title",required:""},null,512),[[a.nr,t.taskAdded.title]])]),(0,n._)("div",as,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[1]||(s[1]=s=>t.taskAdded.description=s),class:"form-control",placeholder:"Description",type:"text",name:"description",id:"description",required:""},null,512),[[a.nr,t.taskAdded.description]])]),(0,n._)("div",ns,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":s[2]||(s[2]=s=>t.taskAdded.status=s),class:"form-control",name:"status",id:"status",required:""},os,512),[[a.bM,t.taskAdded.status]])]),ds],32)])])])])])])}var cs={name:"editTask",data:function(){return{loading:!1,list:[],errorMessage:null,taskAdded:{title:"",description:"",status:""}}},created(){this.id=this.$route.params.id,console.log(this.id)},methods:{async addEditTask(){console.log(this.id);try{await Y.getTasks(`${this.id}`).then((t=>t.json())).then((t=>this.list=t)),console.log(this.list),this.taskAdded=this.list,this.loading=!1}catch(t){this.loading=!1,this.errorMessage=t}},async editTask(){console.log("editTask(): "+this.id);try{fetch("https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/"+this.id,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({title:this.taskAdded.title,description:this.taskAdded.description,status:this.taskAdded.status})}).then((t=>{if(t.ok)return t.json()})).then((t=>{console.log(t),t.isEmpty||this.$router.push("/")}))}catch(t){this.loading=!1,this.errorMessage=t}}},mounted(){this.addEditTask()}};const us=(0,w.Z)(cs,[["render",rs]]);var hs=us;const ps=[{path:"/",name:"HomeView",component:ht},{path:"/displayPages",name:"displayTask",component:J},{path:"/addTask",name:"addNewTask",component:Ot},{path:"/displayCompletedTask",name:"displayCompleted",component:Lt},{path:"/editTask/:id",name:"editTask",component:hs}],ks=(0,M.p7)({history:(0,M.PO)("/Task_Manager/"),routes:ps});var gs=ks;e(3455);(0,a.ri)(x).use(gs).mount("#app")}},s={};function e(a){var n=s[a];if(void 0!==n)return n.exports;var l=s[a]={exports:{}};return t[a].call(l.exports,l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(s,a,n,l){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],n=t[c][1],l=t[c][2];for(var o=!0,d=0;d<a.length;d++)(!1&l||i>=l)&&Object.keys(e.O).every((function(t){return e.O[t](a[d])}))?a.splice(d--,1):(o=!1,l<i&&(i=l));if(o){t.splice(c--,1);var r=n();void 0!==r&&(s=r)}}return s}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[a,n,l]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var n,l,i=a[0],o=a[1],d=a[2],r=0;if(i.some((function(s){return 0!==t[s]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(d)var c=d(e)}for(s&&s(a);r<i.length;r++)l=i[r],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(c)},a=self["webpackChunktask_scheduling"]=self["webpackChunktask_scheduling"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(650)}));a=e.O(a)})();
//# sourceMappingURL=app.d372639d.js.map