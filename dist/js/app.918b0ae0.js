(function(t){function e(e){for(var a,c,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)c=i[l],o[c]&&f.push(o[c][0]),o[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b24f1092"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=a);var r,u=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t),r=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,u.appendChild(s)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"41cb":function(t,e,n){"use strict";var a=n("2b0e"),o=n("8c4f");a["a"].use(o["a"]),e["a"]=new o["a"]({mode:"history",base:"/",routes:[{path:"/admin",name:"admin",component:function(){return n.e("about").then(n.bind(null,"3530"))}},{path:"/",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/inicio",name:"inicio",component:function(){return n.e("about").then(n.bind(null,"bb51"))}}]})},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("router-view")],1)},r=[],c=n("2877"),i={},u=Object(c["a"])(i,o,r,!1,null,null,null);u.options.__file="App.vue";var s=u.exports,l=n("41cb"),p=n("2f62"),f=n("bc3a"),h=n.n(f);a["a"].use(p["a"]),h.a.defaults.withCredentials=!0,h.a.defaults.headers={Authorization:"123456","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS"},h.a.defaults.baseURL="https://captchaback.herokuapp.com/api/captcha";var d=new p["a"].Store({state:{captchaSettings:{numCharact:0,attemps:0,alfa:!1,id:0},captcha:"",maxAttemps:"",attemps:0},mutations:{setSettings:function(t,e){t.captchaSettings=e},setCaptcha:function(t,e){localStorage.setItem("captcha",e),t.captcha=e},setMaxAttemps:function(t,e){localStorage.setItem("attemps",e),t.maxAttemps=e}},actions:{getSettings:function(t){var e=t.commit;h.a.get("/config/getsettings",{headers:{Authorization:"123456","Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){return e("setSettings",t.data)}).catch(function(t){return console.log(t)})},getCaptcha:function(t){var e=t.commit;null==localStorage.getItem("captcha")?h.a.get("/app/getcaptcha").then(function(t){e("setCaptcha",t.data.key),e("setMaxAttemps",t.data.value)}).catch(function(t){return console.log(t)}):e("setCaptcha",localStorage.getItem("captcha"))},setSettings:function(t,e){t.commit;h.a.post("/config/setsettings",{id:e.id,alfa:e.alfa,attemps:e.attemps,numCharact:e.numCharact}).then(function(t){return l["a"].push({name:"admin"})}).catch(function(t){return console.log(t)})}}});a["a"].config.productionTip=!1,new a["a"]({router:l["a"],store:d,render:function(t){return t(s)}}).$mount("#app")}});
//# sourceMappingURL=app.918b0ae0.js.map