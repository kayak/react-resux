!function(e){function n(n){for(var r,o,d=n[0],a=n[1],i=n[2],c=n[3]||[],s=0,u=[];s<d.length;s++)o=d[s],H[o]&&u.push(H[o][0]),H[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(z&&z(n),I.push.apply(I,c);u.length;)u.shift()();return S.push.apply(S,i||[]),t()}function t(){for(var e,n=0;n<S.length;n++){for(var t=S[n],r=!0,o=1;o<t.length;o++){var d=t[o];0!==H[d]&&(r=!1)}r&&(S.splice(n--,1),e=A(A.s=t[0]))}return 0===S.length&&(I.forEach(function(e){if(void 0===H[e]){H[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",A.nc&&n.setAttribute("nonce",A.nc),n.rel="prefetch",n.as="script",n.href=M(e),document.head.appendChild(n)}}),I.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!k[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0===--x&&0===y&&E()}(e,n),r&&r(e,n)};var o,d=!0,a="ec61ed80f08dbf66b9ec",i=1e4,c={},s=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:c[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,g,x=0,y=0,b={},w={},k={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return d=e,h("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"===typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=A.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(d){return t(d)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(d){return void t(d)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;w={},b={},k=e.c,g=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var t in v={},H)_(t);return"prepare"===f&&0===y&&0===x&&E(),n});var n}function _(e){k[e]?(w[e]=!0,x++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=A.p+""+e+"."+a+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):b[e]=!0}function E(){h("ready");var e=m;if(m=null,e)if(d)Promise.resolve().then(function(){return D(d)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(O(t));e.resolve(n)}}function D(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,d,i;function u(e){for(var n=[e],t={},r=n.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((d=P[a])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<d.parents.length;c++){var s=d.parents[c],u=P[s];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[a]?(t[s]||(t[s]=[]),l(t[s],[a])):(delete t[s],n.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var p={},m=[],x={},y=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var b in v)if(Object.prototype.hasOwnProperty.call(v,b)){var w;i=O(b);var j=!1,_=!1,E=!1,D="";switch((w=v[b]?u(i):{type:"disposed",moduleId:b}).chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(w),n.ignoreUnaccepted||(j=new Error("Aborted because "+i+" is not accepted"+D));break;case"accepted":n.onAccepted&&n.onAccepted(w),_=!0;break;case"disposed":n.onDisposed&&n.onDisposed(w),E=!0;break;default:throw new Error("Unexception type "+w.type)}if(j)return h("abort"),Promise.reject(j);if(_)for(i in x[i]=v[i],l(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,i)&&(p[i]||(p[i]=[]),l(p[i],w.outdatedDependencies[i]));E&&(l(m,[w.moduleId]),x[i]=y)}var S,I=[];for(r=0;r<m.length;r++)i=m[r],P[i]&&P[i].hot._selfAccepted&&x[i]!==y&&I.push({module:i,errorHandler:P[i].hot._selfAccepted});h("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&function(e){delete H[e]}(e)});for(var M,R,C=m.slice();C.length>0;)if(i=C.pop(),d=P[i]){var q={},z=d.hot._disposeHandlers;for(o=0;o<z.length;o++)(t=z[o])(q);for(c[i]=q,d.hot.active=!1,delete P[i],delete p[i],o=0;o<d.children.length;o++){var T=P[d.children[o]];T&&((S=T.parents.indexOf(i))>=0&&T.parents.splice(S,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(d=P[i]))for(R=p[i],o=0;o<R.length;o++)M=R[o],(S=d.children.indexOf(M))>=0&&d.children.splice(S,1);for(i in h("apply"),a=g,x)Object.prototype.hasOwnProperty.call(x,i)&&(e[i]=x[i]);var U=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(d=P[i])){R=p[i];var L=[];for(r=0;r<R.length;r++)if(M=R[r],t=d.hot._acceptedDependencies[M]){if(-1!==L.indexOf(t))continue;L.push(t)}for(r=0;r<L.length;r++){t=L[r];try{t(R)}catch(N){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:R[r],error:N}),n.ignoreErrored||U||(U=N)}}}for(r=0;r<I.length;r++){var J=I[r];i=J.module,s=[i];try{A(i)}catch(N){if("function"===typeof J.errorHandler)try{J.errorHandler(N)}catch(G){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:G,originalError:N}),n.ignoreErrored||U||(U=G),U||(U=N)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:N}),n.ignoreErrored||U||(U=N)}}return U?(h("fail"),Promise.reject(U)):(h("idle"),new Promise(function(e){e(m)}))}var P={},H={1:0},S=[],I=[];function M(e){return A.p+"static/js/"+({2:"docs-concepts",3:"docs-development",4:"docs-hooks",5:"docs-index",6:"docs-redux"}[e]||e)+"."+{2:"d9a70adc",3:"aaeb9fd4",4:"29e22c15",5:"487915e0",6:"e12efdf0"}[e]+".js"}function A(n){if(P[n])return P[n].exports;var t=P[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=s,s=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=P[e];if(!n)return A;var t=function(t){return n.hot.active?(P[t]?-1===P[t].parents.indexOf(e)&&P[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),A(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(n){A[e]=n}}};for(var d in A)Object.prototype.hasOwnProperty.call(A,d)&&"e"!==d&&"t"!==d&&Object.defineProperty(t,d,r(d));return t.e=function(e){return"ready"===f&&h("prepare"),y++,A.e(e).then(n,function(e){throw n(),e});function n(){y--,"prepare"===f&&(b[e]||_(e),0===y&&0===x&&E())}},t.t=function(e,n){return 1&n&&(e=t(e)),A.t(e,-2&n)},t}(n)),t.l=!0,t.exports}A.e=function(e){var n=[],t=H[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=H[e]=[n,r]});n.push(t[2]=r);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,A.nc&&d.setAttribute("nonce",A.nc),d.src=M(e),0!==d.src.indexOf(window.location.origin+"/")&&(d.crossOrigin="anonymous");var a=new Error;o=function(n){d.onerror=d.onload=null,clearTimeout(i);var t=H[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,t[1](a)}H[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:d})},12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(n)},A.m=e,A.c=P,A.d=function(e,n,t){A.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,n){if(1&n&&(e=A(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)A.d(t,r,function(n){return e[n]}.bind(null,r));return t},A.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(n,"a",n),n},A.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},A.p="/react-resux/",A.oe=function(e){throw console.error(e),e},A.h=function(){return a};var R=window.webpackJsonp=window.webpackJsonp||[],C=R.push.bind(R);R.push=n,R=R.slice();for(var q=0;q<R.length;q++)n(R[q]);var z=C,T=(S.push([0,0]),t());n([[],{},0,[0,2,3,4,5,6]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"React-Resux","description":"Opinionated, Redux abstraction with built-in immutability, normalization, and selectors support","menu":["Getting Started","Concepts","Hooks","Integrating with Redux","Development"],"version":"0.0.1","repository":"https://github.com/kayak/react-resux","native":false,"codeSandbox":true,"themeConfig":{"mode":"dark"},"separator":"-","typescript":true,"base":"/react-resux/"},"props":[],"entries":[{"key":"docs/concepts.mdx","value":{"name":"Concepts","route":"/react-resux/concepts","id":"75a82cca9418ac146039aef151eb1886","filepath":"docs/concepts.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/concepts.mdx","slug":"docs-concepts","menu":"","headings":[{"slug":"models","depth":1,"value":"Models"},{"slug":"example","depth":4,"value":"Example:"},{"slug":"model-options","depth":2,"value":"Model Options"},{"slug":"namespace","depth":3,"value":"Namespace"},{"slug":"syntax","depth":4,"value":"Syntax"},{"slug":"scopes","depth":3,"value":"Scopes"},{"slug":"syntax-1","depth":4,"value":"Syntax"},{"slug":"fields","depth":3,"value":"Fields"},{"slug":"syntax-2","depth":4,"value":"Syntax"},{"slug":"views","depth":3,"value":"Views"},{"slug":"syntax-3","depth":4,"value":"Syntax"},{"slug":"controllers","depth":3,"value":"Controllers"},{"slug":"syntax-4","depth":4,"value":"Syntax"}]}},{"key":"docs/development.mdx","value":{"name":"Development","route":"/react-resux/development","id":"daf528bb743f99f962adc42f09612d05","filepath":"docs/development.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/development.mdx","slug":"docs-development","menu":"","headings":[{"slug":"development","depth":1,"value":"Development"},{"slug":"testing","depth":2,"value":"Testing"},{"slug":"documentation","depth":2,"value":"Documentation"},{"slug":"deploying--publishing","depth":2,"value":"Deploying & Publishing"},{"slug":"license","depth":2,"value":"License"}]}},{"key":"docs/hooks.mdx","value":{"name":"Hooks","route":"/react-resux/hooks","id":"157848edbe2b857079e219bdd1694ee4","filepath":"docs/hooks.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/hooks.mdx","slug":"docs-hooks","menu":"","headings":[{"slug":"hooks","depth":1,"value":"Hooks"},{"slug":"usemodel","depth":2,"value":"useModel"},{"slug":"read-data-example","depth":4,"value":"Read data example:"},{"slug":"change-data-example","depth":4,"value":"Change data example:"},{"slug":"useservice","depth":2,"value":"useService"},{"slug":"example","depth":4,"value":"Example:"}]}},{"key":"docs/redux.mdx","value":{"name":"Integrating with Redux","route":"/react-resux/redux-integration","id":"d07964a4a6e4c03b5e4a3d2e5e5b9bb8","filepath":"docs/redux.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/redux.mdx","slug":"docs-redux","menu":"","headings":[{"slug":"integrating-with-redux","depth":1,"value":"Integrating with Redux"}]}},{"key":"docs/index.mdx","value":{"name":"Getting Started","route":"/react-resux/","id":"73498ad0e1e62a714b08085d318f9de1","filepath":"docs/index.mdx","link":"https://github.com/kayak/react-resux/edit/master/docs/index.mdx","slug":"docs-index","menu":"","headings":[{"slug":"introduction","depth":1,"value":"Introduction"},{"slug":"benefits","depth":2,"value":"Benefits"},{"slug":"installation","depth":2,"value":"Installation"},{"slug":"philosophy--overview","depth":2,"value":"Philosophy & Overview"}]}}]}')},"./.docz/app/index.jsx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),d=t("./node_modules/react-dom/index.js"),a=t.n(d),i=t("./node_modules/docz/dist/index.esm.js"),c=t("./node_modules/docz-theme-default/dist/index.esm.js"),s={"docs/concepts.mdx":function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"./docs/concepts.mdx"))},"docs/development.mdx":function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"./docs/development.mdx"))},"docs/hooks.mdx":function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"./docs/hooks.mdx"))},"docs/redux.mdx":function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"./docs/redux.mdx"))},"docs/index.mdx":function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"./docs/index.mdx"))}},u=t("./.docz/app/db.json"),l=function(){return o.a.createElement(c.a,{linkComponent:i.b,db:u},o.a.createElement(i.c,{imports:s}))},p=[],f=[],h=function(){return p.forEach(function(e){return e&&e()})},m=function(){return f.forEach(function(e){return e&&e()})},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),a.a.render(o.a.createElement(e,null),v,m)}(l)},0:function(e,n,t){e.exports=t("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.ec61ed80f08dbf66b9ec.js.map