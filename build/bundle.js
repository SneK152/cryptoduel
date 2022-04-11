var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function i(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(e){let t;return s(e,(e=>t=e))(),t}function c(e,t,n){e.$$.on_destroy.push(s(t,n))}function a(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function m(){return p(" ")}function g(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function y(e,t){e.value=null==t?"":t}function b(e,t,n,o){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function x(e,t,n){e.classList[n?"add":"remove"](t)}let w;function C(e){w=e}function k(){if(!w)throw new Error("Function called outside component initialization");return w}function P(){const e=k();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const i=function(e,t,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,!1,t),o}(t,n);o.slice().forEach((t=>{t.call(e,i)}))}}}const S=[],j=[],A=[],_=[],q=Promise.resolve();let E=!1;function M(e){A.push(e)}const R=new Set;let O=0;function T(){const e=w;do{for(;O<S.length;){const e=S[O];O++,C(e),I(e.$$)}for(C(null),S.length=0,O=0;j.length;)j.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];R.has(t)||(R.add(t),t())}A.length=0}while(S.length);for(;_.length;)_.pop()();E=!1,R.clear(),C(e)}function I(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const N=new Set;let B;function z(){B={r:0,c:[],p:B}}function D(){B.r||o(B.c),B=B.p}function F(e,t){e&&e.i&&(N.delete(e),e.i(t))}function U(e,t,n,o){if(e&&e.o){if(N.has(e))return;N.add(e),B.c.push((()=>{N.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function L(e){e&&e.c()}function V(e,n,r,s){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=e.$$;l&&l.m(n,r),s||M((()=>{const n=c.map(t).filter(i);a?a.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(M)}function J(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){-1===e.$$.dirty[0]&&(S.push(e),E||(E=!0,q.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(t,i,r,s,l,c,a,u=[-1]){const f=w;C(t);const h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:i.target||f.$$.root};a&&a(h.root);let p=!1;if(h.ctx=r?r(t,i.props||{},((e,n,...o)=>{const i=o.length?o[0]:n;return h.ctx&&l(h.ctx[e],h.ctx[e]=i)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](i),p&&Y(t,e)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);h.fragment&&h.fragment.l(e),e.forEach(d)}else h.fragment&&h.fragment.c();i.intro&&F(t.$$.fragment),V(t,i.target,i.anchor,i.customElement),T()}C(f)}class K{$destroy(){J(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const X="ABCDEFGHIJKLMNOPQRSTUVWXYZ",H=e=>e.map((e=>[Math.random(),e])).sort(((e,t)=>e[0]-t[0])).map((e=>e[1])),Z=()=>{const e=H([...Array(26).keys()]);return e.some(((e,t)=>e===t))?Z():e.map((e=>X[e]))},G=e=>e.replace(/[^\x00-\x7F]+/g,""),Q=[];function ee(t,n=e){let o;const i=new Set;function s(e){if(r(t,e)&&(t=e,o)){const e=!Q.length;for(const e of i)e[1](),Q.push(e,t);if(e){for(let e=0;e<Q.length;e+=2)Q[e][0](Q[e+1]);Q.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(r,l=e){const c=[r,l];return i.add(c),1===i.size&&(o=n(s)||e),r(t),()=>{i.delete(c),0===i.size&&(o(),o=null)}}}}function te(t,n,r){const l=!Array.isArray(t),c=l?[t]:t,a=n.length<2;return u=t=>{let r=!1;const u=[];let d=0,f=e;const h=()=>{if(d)return;f();const o=n(l?u[0]:u,t);a?t(o):f=i(o)?o:e},p=c.map(((e,t)=>s(e,(e=>{u[t]=e,d&=~(1<<t),r&&h()}),(()=>{d|=1<<t}))));return r=!0,h(),function(){o(p),f()}},{subscribe:ee(r,u).subscribe};var u}const ne=ee([{id:"",name:"",progress:null,solved:!1,conn:{}}].slice(1)),oe=ee(""),ie=ee(null),re=ee(`person-${parseInt(1e4*Math.random())}`),se=ee(null),le=ee(null),ce=ee(!1),ae=new Map,ue=te([oe,re,le,ce],(([e,t,n,o])=>({id:e,name:t,progress:n,solved:o}))),de=te(ie,(()=>Date.now())),fe=te([ne,de],(([e,t])=>new Map(e.map((e=>[e.id,e.solved?l(fe).get(e.id):Date.now()-t]))))),he={Peer:window.Peer},pe=0,me=1,ge=2,$e=3,ve=new URLSearchParams(location.search).get("game"),ye=null===ve,be=e=>`${Math.floor(e)}`.padStart(2,"0"),xe=e=>{const t=be(e/6e4/60),n=be(e/6e4%60),o=be(e%6e4/1e3);return("00"!==t?`${t}:${n}:${o}`:`${n}:${o}`).replace(/^0+/g,"")},we=new he.Peer,Ce=[(e,t)=>{ne.update((n=>[...n,{id:e,name:t.name,progress:null,solved:!1}]))},(e,t)=>{ie.set(t.problem)},(e,t)=>{ye&&ne.update((n=>n.map((n=>n.id!==e?n:{...n,name:t.name,progress:t.progress,solved:t.solved}))))},(e,t)=>{if(ye)return;const n=l(oe);ne.set(t.users.filter((e=>e.id!==n)))}],ke=e=>new Promise((t=>{e.on("open",(()=>{var n;e.peer===ve&&se.set(e),ae.set(e.peer,e),e.on("data",(n=e.peer,e=>{Ce[e.type]&&Ce[e.type](n,e)})),e.on("close",(e=>()=>{ne.update((t=>t.filter((t=>t.id!==e)))),ae.delete(e)})(e.peer)),setTimeout((()=>{(e=>{e?.send({type:pe,name:l(re)})})(e)}),100),t(e)}))})),Pe=e=>ae.forEach((t=>t.send(e)));we.on("open",oe.set),we.on("connection",ke);const Se=[ne.subscribe((e=>{ye&&Pe({type:$e,users:[...e.map((e=>({...e,conn:null}))),l(ue)]})})),ue.subscribe((e=>{ye?Pe({type:$e,users:[...l(ne).map((e=>({...e,conn:null}))),e]}):l(se)?.send({type:ge,name:e.name,progress:e.progress,solved:e.solved})})),ie.subscribe((e=>{null!==e&&ye&&(ne.update((e=>e.map((e=>({...e,progress:null,solved:!1}))))),le.set(null),ce.set(!1),Pe({type:me,problem:e}))}))];function je(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ae(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _e(e,t,n){return t&&Ae(e.prototype,t),n&&Ae(e,n),e}function qe(e){return+e.replace(/px/,"")}function Ee(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=Math.random()*(t-e)+e;return Math.floor(o*Math.pow(10,n))/Math.pow(10,n)}function Me(e){return e[Ee(0,e.length)]}window.$cryptoduel$subscriptions&&window.$cryptoduel$subscriptions.forEach((e=>e())),window.$cryptoduel$subscriptions=Se;var Re=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function Oe(e){return Math.log(e)/Math.log(1920)}var Te=function(){function e(t){je(this,e);var n=t.initialPosition,o=t.direction,i=t.confettiRadius,r=t.confettiColors,s=t.emojis,l=t.emojiSize,c=t.canvasWidth,a=Ee(.9,1.7,3)*Oe(c);this.confettiSpeed={x:a,y:a},this.finalConfettiSpeedX=Ee(.2,.6,3),this.rotationSpeed=s.length?.01:Ee(.03,.07,3)*Oe(c),this.dragForceCoefficient=Ee(5e-4,9e-4,6),this.radius={x:i,y:i},this.initialRadius=i,this.rotationAngle="left"===o?Ee(0,.2,3):Ee(-.2,0,3),this.emojiSize=l,this.emojiRotationAngle=Ee(0,2*Math.PI),this.radiusYUpdateDirection="down";var u="left"===o?Ee(82,15)*Math.PI/180:Ee(-15,-82)*Math.PI/180;this.absCos=Math.abs(Math.cos(u)),this.absSin=Math.abs(Math.sin(u));var d=Ee(-150,0),f={x:n.x+("left"===o?-d:d)*this.absCos,y:n.y-d*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=s.length?null:Me(r),this.emoji=s.length?Me(s):null,this.createdAt=(new Date).getTime(),this.direction=o}return _e(e,[{key:"draw",value:function(e){var t=this.currentPosition,n=this.radius,o=this.color,i=this.emoji,r=this.rotationAngle,s=this.emojiRotationAngle,l=this.emojiSize,c=window.devicePixelRatio;o?(e.fillStyle=o,e.beginPath(),e.ellipse(t.x*c,t.y*c,n.x*c,n.y*c,r,0,2*Math.PI),e.fill()):i&&(e.font="".concat(l,"px serif"),e.save(),e.translate(c*t.x,c*t.y),e.rotate(s),e.textAlign="center",e.fillText(i,0,0),e.restore())}},{key:"updatePosition",value:function(e,t){var n=this.confettiSpeed,o=this.dragForceCoefficient,i=this.finalConfettiSpeedX,r=this.radiusYUpdateDirection,s=this.rotationSpeed,l=this.createdAt,c=this.direction,a=t-l;n.x>i&&(this.confettiSpeed.x-=o*e),this.currentPosition.x+=n.x*("left"===c?-this.absCos:this.absCos)*e,this.currentPosition.y=this.initialPosition.y-n.y*this.absSin*a+.00125*Math.pow(a,2)/2,this.rotationSpeed-=this.emoji?1e-4:1e-5*e,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji?this.emojiRotationAngle+=this.rotationSpeed*e%(2*Math.PI):"down"===r?(this.radius.y-=e*s,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=e*s,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(e){return this.currentPosition.y<e+100}}]),e}();function Ie(){var e=document.createElement("canvas");return e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.zIndex="1000",e.style.pointerEvents="none",document.body.appendChild(e),e}function Ne(e){var t=e.confettiRadius,n=void 0===t?6:t,o=e.confettiNumber,i=void 0===o?e.confettiesNumber||(e.emojis?40:250):o,r=e.confettiColors,s=void 0===r?Re:r,l=e.emojis,c=void 0===l?e.emojies||[]:l,a=e.emojiSize,u=void 0===a?80:a;return e.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),e.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:n,confettiNumber:i,confettiColors:s,emojis:c,emojiSize:u}}var Be=function(){function e(t){var n=this;je(this,e),this.canvasContext=t,this.shapes=[],this.promise=new Promise((function(e){return n.resolvePromise=e}))}return _e(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var e;(e=this.shapes).push.apply(e,arguments)}},{key:"complete",value:function(){var e;return!this.shapes.length&&(null===(e=this.resolvePromise)||void 0===e||e.call(this),!0)}},{key:"processShapes",value:function(e,t,n){var o=this,i=e.timeDelta,r=e.currentTime;this.shapes=this.shapes.filter((function(e){return e.updatePosition(i,r),e.draw(o.canvasContext),!n||e.getIsVisibleOnCanvas(t)}))}}]),e}(),ze=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};je(this,e),this.activeConfettiBatches=[],this.canvas=t.canvas||Ie(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=(new Date).getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return _e(e,[{key:"loop",value:function(){var e,t,n,o,i;this.requestAnimationFrameRequested=!1,e=this.canvas,t=window.devicePixelRatio,n=getComputedStyle(e),o=qe(n.getPropertyValue("width")),i=qe(n.getPropertyValue("height")),e.setAttribute("width",(o*t).toString()),e.setAttribute("height",(i*t).toString());var r=(new Date).getTime(),s=r-this.lastUpdated,l=this.canvas.offsetHeight,c=this.iterationIndex%10==0;this.activeConfettiBatches=this.activeConfettiBatches.filter((function(e){return e.processShapes({timeDelta:s,currentTime:r},l,c),!c||!e.complete()})),this.iterationIndex++,this.queueAnimationFrameIfNeeded(r)}},{key:"queueAnimationFrameIfNeeded",value:function(e){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=e||(new Date).getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Ne(e),n=t.confettiRadius,o=t.confettiNumber,i=t.confettiColors,r=t.emojis,s=t.emojiSize,l=this.canvas.getBoundingClientRect(),c=l.width,a=l.height,u=5*a/7,d={x:0,y:u},f={x:c,y:u},h=new Be(this.canvasContext),p=0;p<o/2;p++){var m=new Te({initialPosition:d,direction:"right",confettiRadius:n,confettiColors:i,confettiNumber:o,emojis:r,emojiSize:s,canvasWidth:c}),g=new Te({initialPosition:f,direction:"left",confettiRadius:n,confettiColors:i,confettiNumber:o,emojis:r,emojiSize:s,canvasWidth:c});h.addShapes(m,g)}return this.activeConfettiBatches.push(h),this.queueAnimationFrameIfNeeded(),h.getBatchCompletePromise()}}]),e}();let De;setTimeout((()=>{De=new ze({canvas:document.querySelector("#confetti")})}),10),window.$cryptoduel$confetti=De;function Fe(e,t,n){const o=e.slice();o[7]=t[n],o[9]=n;const i=o[2][o[9]];return o[1]=i,o}function Ue(e){let t,n,o,i,r,s,l,c,f,y,b=e[7]+"",w=e[1]+"";return{c(){t=h("div"),n=h("div"),o=p(b),i=m(),r=h("div"),s=h("pre"),l=p(w),c=m(),$(n,"class","cipher-letter svelte-1x2ot2m"),$(r,"class","decrypted-letter svelte-1x2ot2m"),$(r,"tabindex","0"),x(r,"non-alphabetic",null===e[1]),$(t,"class","plain-encrypt-pair svelte-1x2ot2m")},m(d,h){u(d,t,h),a(t,n),a(n,o),a(t,i),a(t,r),a(r,s),a(s,l),a(t,c),f||(y=g(r,"keydown",e[3](e[9])),f=!0)},p(t,n){e=t,1&n&&b!==(b=e[7]+"")&&v(o,b),4&n&&w!==(w=e[1]+"")&&v(l,w),4&n&&x(r,"non-alphabetic",null===e[1])},d(e){e&&d(t),f=!1,y()}}}function Le(t){let n,o=t[0],i=[];for(let e=0;e<o.length;e+=1)i[e]=Ue(Fe(t,o,e));return{c(){n=h("div");for(let e=0;e<i.length;e+=1)i[e].c();$(n,"class","word svelte-1x2ot2m")},m(e,t){u(e,n,t);for(let e=0;e<i.length;e+=1)i[e].m(n,null)},p(e,[t]){if(13&t){let r;for(o=e[0],r=0;r<o.length;r+=1){const s=Fe(e,o,r);i[r]?i[r].p(s,t):(i[r]=Ue(s),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=o.length}},i:e,o:e,d(e){e&&d(n),f(i,e)}}}function Ve(e,t,n){let o,{word:i=""}=t,{replacement:r=Array(26).fill("")}=t,{disabled:s=!1}=t;const l=P();return e.$$set=e=>{"word"in e&&n(0,i=e.word),"replacement"in e&&n(1,r=e.replacement),"disabled"in e&&n(4,s=e.disabled)},e.$$.update=()=>{3&e.$$.dirty&&n(2,o=((e,t)=>[...e].map((e=>{const n=X.indexOf(e);return-1===n?null:t[n]})))(i,r))},[i,r,o,e=>t=>{s||l("replace",{from:i[e],to:t.key.toUpperCase()})},s]}class Je extends K{constructor(e){super(),W(this,e,Ve,Le,r,{word:0,replacement:1,disabled:4})}}function Ye(e,t,n){const o=e.slice();return o[9]=t[n],o}function We(e){let t,n;return t=new Je({props:{word:e[9],replacement:e[1],disabled:e[2]}}),t.$on("replace",e[5]),{c(){L(t.$$.fragment)},m(e,o){V(t,e,o),n=!0},p(e,n){const o={};8&n&&(o.word=e[9]),2&n&&(o.replacement=e[1]),4&n&&(o.disabled=e[2]),t.$set(o)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ke(e){let t,n,o,i,r,s,l=e[0].author+"",c=e[3],g=[];for(let t=0;t<c.length;t+=1)g[t]=We(Ye(e,c,t));const y=e=>U(g[e],1,1,(()=>{g[e]=null}));return{c(){t=h("p"),n=p("Solve this quote by "),o=p(l),i=m(),r=h("div");for(let e=0;e<g.length;e+=1)g[e].c();$(t,"class","svelte-xqyi96"),$(r,"class","cryptogram svelte-xqyi96"),x(r,"solved",e[2])},m(e,l){u(e,t,l),a(t,n),a(t,o),u(e,i,l),u(e,r,l);for(let e=0;e<g.length;e+=1)g[e].m(r,null);s=!0},p(e,[t]){if((!s||1&t)&&l!==(l=e[0].author+"")&&v(o,l),30&t){let n;for(c=e[3],n=0;n<c.length;n+=1){const o=Ye(e,c,n);g[n]?(g[n].p(o,t),F(g[n],1)):(g[n]=We(o),g[n].c(),F(g[n],1),g[n].m(r,null))}for(z(),n=c.length;n<g.length;n+=1)y(n);D()}4&t&&x(r,"solved",e[2])},i(e){if(!s){for(let e=0;e<c.length;e+=1)F(g[e]);s=!0}},o(e){g=g.filter(Boolean);for(let e=0;e<g.length;e+=1)U(g[e]);s=!1},d(e){e&&d(t),e&&d(i),e&&d(r),f(g,e)}}}function Xe(e,t,n){let o,i,{problem:r=null}=t;const s=P();let l=Array(26).fill("");const c=({from:e,to:t})=>{if((1!==t.length||!/[a-zA-Z]/.test(t))&&"BACKSPACE"!==t)return;const o=[...l];o[X.indexOf(e)]="BACKSPACE"===t?"":t,n(1,l=o)},a=(e,t)=>[...t].map((t=>X.includes(t)&&""!==e[X.indexOf(t)]));return e.$$set=e=>{"problem"in e&&n(0,r=e.problem)},e.$$.update=()=>{1&e.$$.dirty&&n(1,l=Array(26).fill("")),1&e.$$.dirty&&n(3,o=(e=>[...e.split(/\s+/g)])(r.ciphertext)),3&e.$$.dirty&&n(2,i=((e,t)=>!!t&&[...t.ciphertext].every(((n,o)=>!X.includes(n)||t.plaintext[o]===e[X.indexOf(n)])))(l,r)),4&e.$$.dirty&&i&&s("solved"),3&e.$$.dirty&&s("progress",{progress:a(l,r.ciphertext)}),e.$$.dirty},[r,l,i,o,c,e=>c(e.detail)]}class He extends K{constructor(e){super(),W(this,e,Xe,Ke,r,{problem:0})}}function Ze(t){let n,o,i,r,s,l,c;return{c(){n=h("div"),o=h("label"),o.textContent="Username",i=m(),r=h("input"),$(o,"for","username"),$(r,"type","text"),$(r,"id","username"),$(r,"name","username"),r.disabled=s=null!==t[2],$(n,"class","name-chooser svelte-1mwrz3m")},m(e,s){u(e,n,s),a(n,o),a(n,i),a(n,r),y(r,t[3]),l||(c=g(r,"input",t[4]),l=!0)},p(e,[t]){4&t&&s!==(s=null!==e[2])&&(r.disabled=s),8&t&&r.value!==e[3]&&y(r,e[3])},i:e,o:e,d(e){e&&d(n),l=!1,c()}}}function Ge(t,n,o){let i,r,l=e,c=()=>(l(),l=s(d,(e=>o(2,i=e))),d),a=e,u=()=>(a(),a=s(f,(e=>o(3,r=e))),f);t.$$.on_destroy.push((()=>l())),t.$$.on_destroy.push((()=>a()));let{gameProblem:d=ie}=n;c();let{name:f=re}=n;return u(),t.$$set=e=>{"gameProblem"in e&&c(o(0,d=e.gameProblem)),"name"in e&&u(o(1,f=e.name))},[d,f,i,r,function(){r=this.value,f.set(r)}]}class Qe extends K{constructor(e){super(),W(this,e,Ge,Ze,r,{gameProblem:0,name:1})}}function et(t){let n,o,i,r,s,l,c,f,y=t[1]?"Join Link (copied)":"Copy Join Link";return{c(){n=h("div"),o=h("button"),i=p(y),r=m(),s=h("a"),l=p(t[2]),$(o,"class","join-link svelte-vczin0"),$(s,"href",t[2]),$(n,"class","join-links svelte-vczin0")},m(e,d){u(e,n,d),a(n,o),a(o,i),a(n,r),a(n,s),a(s,l),c||(f=g(o,"click",t[3]),c=!0)},p(e,[t]){2&t&&y!==(y=e[1]?"Join Link (copied)":"Copy Join Link")&&v(i,y),4&t&&v(l,e[2]),4&t&&$(s,"href",e[2])},i:e,o:e,d(e){e&&d(n),c=!1,f()}}}function tt(t,n,o){let i,r,l=e,c=()=>(l(),l=s(a,(e=>o(4,r=e))),a);t.$$.on_destroy.push((()=>l()));let{id:a=oe}=n;c();let u=!1;return t.$$set=e=>{"id"in e&&c(o(0,a=e.id))},t.$$.update=()=>{16&t.$$.dirty&&o(2,i=`${location.href}?game=${encodeURIComponent(r)}`)},[a,u,i,()=>{navigator.clipboard.writeText(i),o(1,u=!0)},r]}class nt extends K{constructor(e){super(),W(this,e,tt,et,r,{id:0})}}function ot(e,t,n){const o=e.slice();return o[7]=t[n],o}function it(e,t,n){const o=e.slice();return o[10]=t[n],o}function rt(e){let t;return{c(){t=h("div"),$(t,"class","progress-item svelte-16730xu"),x(t,"has-done",e[10])},m(e,n){u(e,t,n)},p(e,n){24&n&&x(t,"has-done",e[10])},d(e){e&&d(t)}}}function st(e){let t,n,o,i,r,s,l,c=e[7].name+"",g=e[7].progress??e[3],y=[];for(let t=0;t<g.length;t+=1)y[t]=rt(it(e,g,t));return{c(){t=h("div"),n=h("p"),o=p(c),i=p(":"),r=m(),s=h("div");for(let e=0;e<y.length;e+=1)y[e].c();l=m(),$(s,"class","opponent-progress svelte-16730xu"),$(t,"class","user-container svelte-16730xu"),b(t,"--desc","'SOLVED ("+xe(e[5].get(e[7].id))+")'"),x(t,"solved",e[7].solved)},m(e,c){u(e,t,c),a(t,n),a(n,o),a(n,i),a(t,r),a(t,s);for(let e=0;e<y.length;e+=1)y[e].m(s,null);a(t,l)},p(e,n){if(16&n&&c!==(c=e[7].name+"")&&v(o,c),24&n){let t;for(g=e[7].progress??e[3],t=0;t<g.length;t+=1){const o=it(e,g,t);y[t]?y[t].p(o,n):(y[t]=rt(o),y[t].c(),y[t].m(s,null))}for(;t<y.length;t+=1)y[t].d(1);y.length=g.length}48&n&&b(t,"--desc","'SOLVED ("+xe(e[5].get(e[7].id))+")'"),16&n&&x(t,"solved",e[7].solved)},d(e){e&&d(t),f(y,e)}}}function lt(t){let n,o=t[4],i=[];for(let e=0;e<o.length;e+=1)i[e]=st(ot(t,o,e));return{c(){n=h("div");for(let e=0;e<i.length;e+=1)i[e].c();$(n,"class","opponent-progress-container svelte-16730xu")},m(e,t){u(e,n,t);for(let e=0;e<i.length;e+=1)i[e].m(n,null)},p(e,[t]){if(56&t){let r;for(o=e[4],r=0;r<o.length;r+=1){const s=ot(e,o,r);i[r]?i[r].p(s,t):(i[r]=st(s),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=o.length}},i:e,o:e,d(e){e&&d(n),f(i,e)}}}function ct(t,n,o){let i,r,l,c,a=e,u=()=>(a(),a=s(g,(e=>o(6,r=e))),g),d=e,f=()=>(d(),d=s(m,(e=>o(4,l=e))),m),h=e,p=()=>(h(),h=s($,(e=>o(5,c=e))),$);t.$$.on_destroy.push((()=>a())),t.$$.on_destroy.push((()=>d())),t.$$.on_destroy.push((()=>h()));let{users:m=ne}=n;f();let{gameProblem:g=ie}=n;u();let{timeTakenByOpponents:$=fe}=n;return p(),t.$$set=e=>{"users"in e&&f(o(0,m=e.users)),"gameProblem"in e&&u(o(1,g=e.gameProblem)),"timeTakenByOpponents"in e&&p(o(2,$=e.timeTakenByOpponents))},t.$$.update=()=>{var e;64&t.$$.dirty&&o(3,i=null===(e=r)?[]:[...e.ciphertext].map((e=>!1)))},[m,g,$,i,l,c,r]}class at extends K{constructor(e){super(),W(this,e,ct,lt,r,{users:0,gameProblem:1,timeTakenByOpponents:2})}}function ut(t){let n,o={ctx:t,current:null,token:null,hasCatch:!1,pending:pt,then:ht,catch:ft,value:7};var i;return function(e,t){const n=t.token={};function o(e,o,i,r){if(t.token!==n)return;t.resolved=r;let s=t.ctx;void 0!==i&&(s=s.slice(),s[i]=r);const l=e&&(t.current=e)(s);let c=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==o&&e&&(z(),U(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),D())})):t.block.d(1),l.c(),F(l,1),l.m(t.mount(),t.anchor),c=!0),t.block=l,t.blocks&&(t.blocks[o]=l),c&&T()}if((i=e)&&"object"==typeof i&&"function"==typeof i.then){const n=k();if(e.then((e=>{C(n),o(t.then,1,t.value,e),C(null)}),(e=>{if(C(n),o(t.catch,2,t.error,e),C(null),!t.hasCatch)throw e})),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,e),!0;t.resolved=e}var i}((i=ve,new Promise((e=>{const t=oe.subscribe((n=>{if(""===n)return;const o=we.connect(i);setTimeout((()=>t())),ke(o).then(e)}))}))),o),{c(){n=p(""),o.block.c()},m(e,t){u(e,n,t),o.block.m(e,o.anchor=t),o.mount=()=>n.parentNode,o.anchor=n},p(e,n){!function(e,t,n){const o=t.slice(),{resolved:i}=e;e.current===e.then&&(o[e.value]=i),e.current===e.catch&&(o[e.error]=i),e.block.p(o,n)}(o,t=e,n)},i:e,o:e,d(e){e&&d(n),o.block.d(e),o.token=null,o=null}}}function dt(t){let n,o;return n=new nt({}),{c(){L(n.$$.fragment)},m(e,t){V(n,e,t),o=!0},p:e,i(e){o||(F(n.$$.fragment,e),o=!0)},o(e){U(n.$$.fragment,e),o=!1},d(e){J(n,e)}}}function ft(t){return{c:e,m:e,p:e,d:e}}function ht(t){let n;return{c(){n=h("p"),n.textContent=`Successfully connected to ${ve}`},m(e,t){u(e,n,t)},p:e,d(e){e&&d(n)}}}function pt(t){let n;return{c(){n=h("p"),n.textContent=`Connecting to ${ve}`},m(e,t){u(e,n,t)},p:e,d(e){e&&d(n)}}}function mt(e){let t,n,o,i;return t=new at({}),o=new He({props:{problem:e[0]}}),o.$on("progress",e[4]),o.$on("solved",e[5]),{c(){L(t.$$.fragment),n=m(),L(o.$$.fragment)},m(e,r){V(t,e,r),u(e,n,r),V(o,e,r),i=!0},p(e,t){const n={};1&t&&(n.problem=e[0]),o.$set(n)},i(e){i||(F(t.$$.fragment,e),F(o.$$.fragment,e),i=!0)},o(e){U(t.$$.fragment,e),U(o.$$.fragment,e),i=!1},d(e){J(t,e),e&&d(n),J(o,e)}}}function gt(t){let n,o,i,r,s,l,c,f,p,v;const y=[dt,ut],b=[];r=ye?0:1,s=b[r]=y[r](t),c=new Qe({});let x=t[0]&&mt(t),w=ye&&function(t){let n,o,i;return{c(){n=h("button"),n.textContent="New Problem",$(n,"class","svelte-3fadq2")},m(e,r){u(e,n,r),o||(i=g(n,"click",t[1]),o=!0)},p:e,d(e){e&&d(n),o=!1,i()}}}(t);return{c(){n=h("canvas"),o=m(),i=h("main"),s.c(),l=m(),L(c.$$.fragment),f=m(),x&&x.c(),p=m(),w&&w.c(),$(n,"id","confetti"),$(n,"class","svelte-3fadq2"),$(i,"class","svelte-3fadq2")},m(e,t){u(e,n,t),u(e,o,t),u(e,i,t),b[r].m(i,null),a(i,l),V(c,i,null),a(i,f),x&&x.m(i,null),a(i,p),w&&w.m(i,null),v=!0},p(e,[t]){s.p(e,t),e[0]?x?(x.p(e,t),1&t&&F(x,1)):(x=mt(e),x.c(),F(x,1),x.m(i,p)):x&&(z(),U(x,1,1,(()=>{x=null})),D()),ye&&w.p(e,t)},i(e){v||(F(s),F(c.$$.fragment,e),F(x),v=!0)},o(e){U(s),U(c.$$.fragment,e),U(x),v=!1},d(e){e&&d(n),e&&d(o),e&&d(i),b[r].d(),J(c),x&&x.d(),w&&w.d()}}}function $t(e,t,n){let o,i,r;c(e,ce,(e=>n(2,o=e))),c(e,ne,(e=>n(3,i=e))),c(e,ie,(e=>n(0,r=e)));const s=(()=>{let e=0;const t=fetch(`./quotes/${parseInt(8*Math.random())}.json`).then((e=>e.json())).then(H);return async()=>{const n=await t,o=n[e++%n.length];return{author:o.quoteAuthor,text:G(o.quoteText)}}})();return e.$$.update=()=>{e.$$.dirty,4&e.$$.dirty&&o&&De.addConfetti()},[r,()=>{s().then((e=>ie.set((e=>{const t=e.text.toUpperCase(),n=Z(),o=[...t].map((e=>n[X.indexOf(e)]??e)).join("");return{...e,plaintext:t,ciphertext:o}})(e))))},o,i,e=>le.set(e.detail.progress),()=>ce.set(!0)]}const vt=new class extends K{constructor(e){super(),W(this,e,$t,gt,r,{})}}({target:document.body,props:{name:"world"}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{vt.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),vt}();
//# sourceMappingURL=bundle.js.map
