"bundle";!function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><require from="nav-bar.html"></require><require from="bootstrap/css/bootstrap.css"></require><nav-bar router.bind="router"></nav-bar><div class="page-host"><router-view></router-view></div></template>'})}(),function(){var a=System.amdDefine;a("app.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(){}return a.prototype.configureRouter=function(a,b){a.title="Aurelia",a.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=b},a}();b.App=c})}(),function(){var a=System.amdDefine,b=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},c=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};a("blur-image.js",["require","exports","aurelia-framework"],function(a,d,e){"use strict";function f(a,b,c,d,e,f){if(!(isNaN(f)||f<1)){f|=0;var h,i=a.getContext("2d");try{h=i.getImageData(b,c,d,e)}catch(l){throw new Error("unable to access image data: "+l)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=h.data,L=f+f+1,M=d-1,N=e-1,O=f+1,P=O*(O+1)/2,Q=new g,R=Q;for(o=1;o<L;o++)if(R=R.next=new g,o==O)var S=R;R.next=Q;var T=null,U=null;s=r=0;var V=j[f],W=k[f];for(n=0;n<e;n++){for(B=C=D=E=t=u=v=w=0,x=O*(F=K[r]),y=O*(G=K[r+1]),z=O*(H=K[r+2]),A=O*(I=K[r+3]),t+=P*F,u+=P*G,v+=P*H,w+=P*I,R=Q,o=0;o<O;o++)R.r=F,R.g=G,R.b=H,R.a=I,R=R.next;for(o=1;o<O;o++)p=r+((M<o?M:o)<<2),t+=(R.r=F=K[p])*(J=O-o),u+=(R.g=G=K[p+1])*J,v+=(R.b=H=K[p+2])*J,w+=(R.a=I=K[p+3])*J,B+=F,C+=G,D+=H,E+=I,R=R.next;for(T=Q,U=S,m=0;m<d;m++)K[r+3]=I=w*V>>W,0!=I?(I=255/I,K[r]=(t*V>>W)*I,K[r+1]=(u*V>>W)*I,K[r+2]=(v*V>>W)*I):K[r]=K[r+1]=K[r+2]=0,t-=x,u-=y,v-=z,w-=A,x-=T.r,y-=T.g,z-=T.b,A-=T.a,p=s+((p=m+f+1)<M?p:M)<<2,B+=T.r=K[p],C+=T.g=K[p+1],D+=T.b=K[p+2],E+=T.a=K[p+3],t+=B,u+=C,v+=D,w+=E,T=T.next,x+=F=U.r,y+=G=U.g,z+=H=U.b,A+=I=U.a,B-=F,C-=G,D-=H,E-=I,U=U.next,r+=4;s+=d}for(m=0;m<d;m++){for(C=D=E=B=u=v=w=t=0,r=m<<2,x=O*(F=K[r]),y=O*(G=K[r+1]),z=O*(H=K[r+2]),A=O*(I=K[r+3]),t+=P*F,u+=P*G,v+=P*H,w+=P*I,R=Q,o=0;o<O;o++)R.r=F,R.g=G,R.b=H,R.a=I,R=R.next;for(q=d,o=1;o<=f;o++)r=q+m<<2,t+=(R.r=F=K[r])*(J=O-o),u+=(R.g=G=K[r+1])*J,v+=(R.b=H=K[r+2])*J,w+=(R.a=I=K[r+3])*J,B+=F,C+=G,D+=H,E+=I,R=R.next,o<N&&(q+=d);for(r=m,T=Q,U=S,n=0;n<e;n++)p=r<<2,K[p+3]=I=w*V>>W,I>0?(I=255/I,K[p]=(t*V>>W)*I,K[p+1]=(u*V>>W)*I,K[p+2]=(v*V>>W)*I):K[p]=K[p+1]=K[p+2]=0,t-=x,u-=y,v-=z,w-=A,x-=T.r,y-=T.g,z-=T.b,A-=T.a,p=m+((p=n+O)<N?p:N)*d<<2,t+=B+=T.r=K[p],u+=C+=T.g=K[p+1],v+=D+=T.b=K[p+2],w+=E+=T.a=K[p+3],T=T.next,x+=F=U.r,y+=G=U.g,z+=H=U.b,A+=I=U.a,B-=F,C-=G,D-=H,E-=I,U=U.next,r+=d}i.putImageData(h,b,c)}}function g(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function h(a,b){var c=a.width,d=a.height,e=a.getContext("2d");e.drawImage(b,0,0,c,d),f(a,0,0,c,d,l)}var i=function(){function a(a){this.element=a,this.element=a}return a.prototype.valueChanged=function(a){var b=this;a.complete?h(this.element,a):a.onload=function(){return h(b.element,a)}},a}();i=b([e.autoinject,c("design:paramtypes",[Element])],i),d.BlurImageCustomAttribute=i;var j=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],k=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],l=40})}(),function(){var a=System.amdDefine;a("child-router.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><section class="au-animate"><h2>${heading}</h2><div><div class="col-md-2"><ul class="well nav nav-pills nav-stacked"><li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"><a href.bind="row.href">${row.title}</a></li></ul></div><div class="col-md-10" style="padding: 0"><router-view></router-view></div></div></section></template>'})}(),function(){var a=System.amdDefine;a("child-router.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(){this.heading="Child Router"}return a.prototype.configureRouter=function(a,b){a.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=b},a}();b.ChildRouter=c})}(),function(){var a=System.amdDefine;a("main.js",["require","exports","bootstrap"],function(a,b){"use strict";function c(a){a.use.standardConfiguration().developmentLogging().plugin("aurelia-dialog"),a.start().then(function(){return a.setRoot()})}b.configure=c})}(),function(){var a=System.amdDefine;a("nav-bar.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template bindable="router"><nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#"><i class="fa fa-home"></i> <span>${router.title}</span></a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"><a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1.in" href.bind="row.href">${row.title}</a></li></ul><ul class="nav navbar-nav navbar-right"><li class="loader" if.bind="router.isNavigating"><i class="fa fa-spinner fa-spin fa-2x"></i></li></ul></div></nav></template>'})}(),function(){var a=System.amdDefine;a("project/projectaudiovm.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><h2><a href.bind="audio.url">${audio.title}</a></h2><audio src.bind="audio.audio" preload="auto" controls></audio><p>${audio.description}</p></template>'})}(),function(){var a=System.amdDefine,b=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},c=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};a("project/projectaudiovm.js",["require","exports","aurelia-framework","./projectaudio"],function(a,d,e,f){"use strict";var g=function(){function a(){}return a.prototype.activate=function(a){this.audio=a},a}();b([e.bindable,c("design:type",f["default"])],g.prototype,"audio",void 0),d.ProjectAudioVM=g})}(),function(){var a=System.amdDefine;a("project/projectdetailsvm.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><ai-dialog><ai-dialog-body><h2>${project.title} <a if.bind="project.reposuri" href.bind="project.reposuri"><i class="fa fa-github-square" aria-hidden="true"></i></a></h2><div if.bind="currentobjind != -1"><div class="container gallery-container"><button class="gallery-control" if.bind="hasObjControls()" click.delegate="previous()"><i class="fa fa-chevron-left" aria-hidden="true"></i></button><compose class="gallery-content" view-model="${project.objects[currentobjind].view}" model.bind="project.objects[currentobjind]"></compose><button class="gallery-control" if.bind="hasObjControls()" click.delegate="next()"><i class="fa fa-chevron-right" aria-hidden="true"></i></button></div></div><div innerhtml.bind="project.description"></div><compose if.bind="project.detailsview !== null" view.bind="project.detailsview"></compose></ai-dialog-body></ai-dialog></template>'})}(),function(){var a=System.amdDefine;a("project/projectimagevm.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><img src.bind="image"></template>'})}(),function(){var a=System.amdDefine,b=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},c=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};a("project/projectimagevm.js",["require","exports","aurelia-framework"],function(a,d,e){"use strict";var f=function(){function a(){}return a.prototype.activate=function(a){this.image=a.image},a}();b([e.bindable,c("design:type",String)],f.prototype,"image",void 0),d.ProjectImageVM=f})}(),function(){var a=System.amdDefine;a("project/projectobject.js",["require","exports"],function(a,b){"use strict"})}(),function(){var a=System.amdDefine;a("project/projectvm.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><div class="grid"><figure class="effect-bubba" click.delegate="openDetails()"><!--<i style="position:absolute;top:5px;right:5px;color:#ffffff" class="fa fa-plus-circle" aria-hidden="true"></i>--> <img src.bind="project.mainImage"><figcaption><h2>${project.title}</h2><p><span innerhtml.bind="project.description"></span></p></figcaption></figure></div></template>'})}(),function(){var a=System.amdDefine,b=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},c=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};a("project/projectdetailsvm.js",["require","exports","./project","aurelia-framework","aurelia-dialog"],function(a,d,e,f,g){"use strict";var h=function(){function a(a){this.currentobjind=-1,a.settings.lock=!1}return a.prototype.activate=function(a){this.project=a,void 0!==this.project.objects&&0!=this.project.objects.length&&(this.currentobjind=0)},a.prototype.hasObjControls=function(){return void 0!==this.project.objects&&this.project.objects.length>1},a.prototype.next=function(){void 0!==this.project.objects&&0!=this.project.objects.length&&(this.currentobjind=(this.currentobjind+1)%this.project.objects.length)},a.prototype.previous=function(){void 0!==this.project.objects&&0!=this.project.objects.length&&(this.currentobjind--,this.currentobjind<0&&(this.currentobjind=this.project.objects.length-1))},a}();b([f.bindable,c("design:type",e["default"])],h.prototype,"project",void 0),b([f.bindable,c("design:type",Number)],h.prototype,"currentobjind",void 0),h=b([f.inject(g.DialogController),c("design:paramtypes",[Object])],h),d.projectdetailsvm=h})}(),function(){var a=System.amdDefine,b=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},c=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};a("project/projectvm.js",["require","exports","./project","aurelia-framework","aurelia-dialog","./projectdetailsvm"],function(a,d,e,f,g,h){"use strict";var i=function(){function a(a){this.dialogService=a}return a.prototype.openDetails=function(){this.dialogService.open({viewModel:h.projectdetailsvm,model:this.project})},a}();b([f.bindable,c("design:type",e["default"])],i.prototype,"project",void 0),i=b([f.inject(g.DialogService),c("design:paramtypes",[Object])],i),d.projectvm=i})}(),function(){var a=System.amdDefine;a("users.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><require from="blur-image"></require><section class="au-animate"><h2>${heading}</h2><div class="row au-stagger"><div class="col-sm-6 col-md-3 card-container au-animate" repeat.for="user of users"><div class="card"><canvas class="header-bg" width="250" height="70" blur-image.bind="image"></canvas><div class="avatar"><img src.bind="user.avatar_url" crossorigin ref="image"></div><div class="content"><p class="name">${user.login}</p><p><a target="_blank" class="btn btn-default" href.bind="user.html_url">Contact</a></p></div></div></div></div></section></template>'})}(),function(){var a=System.amdDefine,b=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},c=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};a("users.js",["require","exports","aurelia-framework","aurelia-fetch-client","fetch"],function(a,d,e,f){"use strict";var g=function(){function a(a){this.http=a,this.heading="Github Users",this.users=[],a.configure(function(a){a.useStandardConfiguration().withBaseUrl("https://api.github.com/")})}return a.prototype.activate=function(){var a=this;return this.http.fetch("users").then(function(a){return a.json()}).then(function(b){return a.users=b})},a}();g=b([e.autoinject,c("design:paramtypes",[f.HttpClient])],g),d.Users=g})}(),function(){var a=System.amdDefine;a("welcome.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><section class="au-animate"><div class="container"><require from="./project/projectvm"></require><div class="row"><div class="col-xs-12 col-sm-4 col-md-4 ng-isolate-scope" repeat.for="project of projects"><!--<compose view-model="./project/projectdetailsvm" model.bind="project"></compose>--><projectvm project.bind="project"></projectvm></div></div></div></section></template>'})}(),function(){var a=System.amdDefine;a("project/project.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(a,b,c,d,e,f){void 0===e&&(e=null),void 0===f&&(f=null),this.title=a,this.mainImage=b,this.description=c,this.objects=d,this.detailsview=e,this.reposuri=f}return a}();Object.defineProperty(b,"__esModule",{value:!0}),b["default"]=c})}(),function(){var a=System.amdDefine;a("project/projectaudio.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(a,b,c,d){this.audio=a,this.title=b,this.description=c,this.url=d,this.view="./projectaudiovm"}return a}();Object.defineProperty(b,"__esModule",{value:!0}),b["default"]=c})}(),function(){var a=System.amdDefine;a("project/projectimage.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(a){this.image=a,this.view="./projectimagevm"}return a}();Object.defineProperty(b,"__esModule",{value:!0}),b["default"]=c})}(),function(){var a=System.amdDefine;a("project/projects.js",["require","exports","./project","./projectaudio","./projectimage"],function(a,b,c,d,e){"use strict";var f=function(){function a(){}return a}();f.projects=[new c["default"]("OpenCL Audio Equalizer","/images/openclequalizer/main.png","Audio equalizer using OpenCL implementing twelve 1000 order FIR filters running in real-time in the GPU.",[new e["default"]("/images/openclequalizer/1.png"),new d["default"]("/audio/oclequalizer/Seeing-The-Future-by-Dexter-Britain.mp3","Seeing The Future by Dexter Britain","Audio modified by equalizer","http://freemusicarchive.org/music/Dexter_Britain/Creative_Commons_Volume_2/Seeing_The_Future"),new d["default"]("/audio/oclequalizer/Enter The World of Paradise by D SMILEZ.mp3","Enter The World of Paradise by D SMILEZ","Audio modified by equalizer","http://freemusicarchive.org/music/D_SMILEZ/Melody__Beats/Enter_The_World_of_Paradise"),new d["default"]("/audio/oclequalizer/O Fortuna by Dr. Phibes and The Ten Plagues of Egypt.mp3","O Fortuna by Dr. Phibes and The Ten Plagues of Egypt","Audio modified by equalizer","https://freemusicarchive.org/music/Dr_Phibes_and_The_Ten_Plagues_of_Egypt/Carmina_Burana/Carmina_Burana_01"),new d["default"]("/audio/oclequalizer/Summers-Coming-by-Dexter-Britain.mp3","Summers Coming by Dexter Britain","Audio modified by equalizer","http://freemusicarchive.org/music/Dexter_Britain/Creative_Commons_Volume_2/Summers_Coming")],null,"https://github.com/bngreen/OpenCL-Equalizer")],Object.defineProperty(b,"__esModule",{value:!0}),b["default"]=f})}(),function(){var a=System.amdDefine;a("welcome.js",["require","exports","./project/projects"],function(a,b,c){"use strict";var d=function(){function a(){this.heading="Welcome to the Aurelia Navigation App!",this.firstName="John",this.lastName="Doe",this.previousValue=this.fullName,this.projects=c["default"].projects}return Object.defineProperty(a.prototype,"fullName",{get:function(){return this.firstName+" "+this.lastName},enumerable:!0,configurable:!0}),a.prototype.submit=function(){this.previousValue=this.fullName,alert("Welcome, "+this.fullName+"!")},a.prototype.canDeactivate=function(){if(this.fullName!==this.previousValue)return confirm("Are you sure you want to leave?")},a}();b.Welcome=d;var e=function(){function a(){}return a.prototype.toView=function(a){return a&&a.toUpperCase()},a}();b.UpperValueConverter=e})}();