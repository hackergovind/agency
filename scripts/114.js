(function(Jo){typeof define=="function"&&define.amd?define(Jo):Jo()})((function(){"use strict";var Jo=document.createElement("style");Jo.textContent=`*{margin:0;padding:0;box-sizing:border-box}html{height:auto;scroll-behavior:auto}a{color:inherit;text-decoration:none;transition:opacity .3s ease}img{max-width:100%;height:auto;display:block}[line],[letter],[opacity]{opacity:0}[scale]{transform:scale(0);transform-origin:50% 50%}.line-child,.letter-child{padding-bottom:.15em}.line-mask-child-mask,.letter-mask-child-mask{margin-bottom:-.15em}.section-w{position:relative;overflow:hidden}.section-w .video-hero-bg{position:absolute;top:50%;left:0;transform:translateY(-50%);width:100%;height:auto;z-index:0}.section-w .mask-reveal-canvas{position:absolute;inset:0;z-index:1;pointer-events:none}.section-w .section.hero-home{background-color:#fff;position:relative;z-index:0}.footer-svg-w,.footer-nothin-svg{overflow:visible}.footer-nothin-svg path{will-change:transform}@media (max-width: 768px){.work-list-img{grid-template-columns:1fr!important}.work-item-img{grid-column:1 / -1!important;height:auto!important}.work-item-img .work-img{height:auto!important}}
/*$vite$:1*/`,document.head.appendChild(Jo);function Ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Rp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bs={duration:.5,overwrite:!1,delay:0},_u,dn,Lt,oi=1e8,xt=1/oi,vu=Math.PI*2,xx=vu/4,Sx=0,Pp=Math.sqrt,yx=Math.cos,Mx=Math.sin,rn=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},Zi=function(e){return typeof e=="number"},xu=function(e){return typeof e>"u"},Pi=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},Su=function(){return typeof window<"u"},gl=function(e){return Ft(e)||rn(e)},Lp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,yu=/(?:-?\.?\d|\.)+/gi,Dp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ip=/[+-]=-?[.\d]+/,Up=/[^,'"\[\]\s]+/gi,Ex=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Li,Eu,Tu,Wn={},_l={},Np,Fp=function(e){return(_l=Vs(e,Wn))&&Bn},bu=function(e,t){},Qo=function(e,t){return!t&&void 0},Op=function(e,t){return e&&(Wn[e]=t)&&_l&&(_l[e]=t)||Wn},ea=function(){return 0},Tx={suppressEvents:!0,isStart:!0,kill:!1},vl={suppressEvents:!0,kill:!1},bx={suppressEvents:!0},wu={},xr=[],Au={},Bp,Xn={},Cu={},kp=30,xl=[],Ru="",Pu=function(e){var t=e[0],n,i;if(Pi(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xl.length;i--&&!xl[i].targetTest(t););n=xl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new pm(e[i],n)))||e.splice(i,1);return e},Qr=function(e){return e._gsap||Pu(li(e))[0]._gsap},zp=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():xu(n)&&e.getAttribute&&e.getAttribute(t)||n},Fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},zs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},wx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Sl=function(){var e=xr.length,t=xr.slice(0),n,i;for(Au={},xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lu=function(e){return!!(e._initted||e._startAt||e.add)},Vp=function(e,t,n,i){xr.length&&!dn&&Sl(),e.render(t,n,!!(dn&&t<0&&Lu(e))),xr.length&&!dn&&Sl()},Hp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Up).length<2?t:rn(e)?e.trim():e},Gp=function(e){return e},qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ax=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Vs=function(e,t){for(var n in t)e[n]=t[n];return e},Wp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Pi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},yl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ta=function(e){var t=e.parent||Ut,n=e.keyframes?Ax(mn(e.keyframes)):qn;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Cx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Xp=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ml=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},es=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Rx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Du=function(e,t,n,i){return e._startAt&&(dn?e._startAt.revert(vl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Px=function r(e){return!e||e._ts&&r(e.parent)},qp=function(e){return e._repeat?Hs(e._tTime,e=e.duration()+e._rDelay)*e:0},Hs=function(e,t){var n=Math.floor(e=Wt(e/t));return e&&n===e?n-1:n},El=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Tl=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},bl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Tl(e),n._dirty||es(n,e)),e},Yp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=El(e.rawTime(),t),(!t._dur||ia(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),es(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},Di=function(e,t,n,i){return t.parent&&Sr(t),t._start=Wt((Zi(n)?n:n||e!==Ut?ai(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xp(e,t,"_first","_last",e._sort?"_start":0),Iu(t)||(e._recent=t),i||Yp(e,t),e._ts<0&&bl(e,e._tTime),e},$p=function(e,t){return(Wn.ScrollTrigger||bu("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},Kp=function(e,t,n,i,s){if(Hu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bp!==$n.frame)return xr.push(e),e._lazy=[s,i],1},Lx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Iu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Dx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Lx(e)&&!(!e._initted&&Iu(e))||(e._ts<0||e._dp._ts<0)&&!Iu(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=ia(0,e._tDur,t),u=Hs(c,a),e._yoyo&&u&1&&(o=1-o),u!==Hs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||dn||i||e._zTime===xt||!t&&e._zTime){if(!e._initted&&Kp(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Du(e,t,n,!0),e._onUpdate&&!n&&Yn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sr(e,1),!n&&!dn&&(Yn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ix=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Gs=function(e,t,n,i){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&bl(e,e._tTime=e._tDur*a),e.parent&&Tl(e),n||es(e.parent,e),e},Zp=function(e){return e instanceof wn?es(e):Gs(e,e._dur)},Ux={_start:0,endTime:ea,totalDuration:ea},ai=function r(e,t,n){var i=e.labels,s=e._recent||Ux,o=e.duration()>=oi?s.endTime(!1):e._dur,a,c,l;return rn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},na=function(e,t,n){var i=Zi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Nn(c.vars.inherit)&&c.parent;o.immediateRender=Nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Xt(t[0],o,t[s+1])},yr=function(e,t){return e||e===0?t(e):t},ia=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!rn(e)||!(t=Ex.exec(e))?"":t[1]},Nx=function(e,t,n){return yr(n,function(i){return ia(e,t,i)})},Uu=[].slice,jp=function(e,t){return e&&Pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pi(e[0]))&&!e.nodeType&&e!==Li},Fx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return rn(i)&&!t||jp(i,1)?(s=n).push.apply(s,li(i)):n.push(i)})||n},li=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):rn(e)&&!n&&(Eu||!Xs())?Uu.call((t||Tu).querySelectorAll(e),0):mn(e)?Fx(e,n):jp(e)?Uu.call(e,0):e?[e]:[]},Nu=function(e){return e=li(e)[0]||Qo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return li(t,n.querySelectorAll?n:n===e?Qo("Invalid scope")||Tu.createElement("div"):e)}},Jp=function(e){return e.sort(function(){return .5-Math.random()})},Qp=function(e){if(Ft(e))return e;var t=Pi(e)?e:{each:e},n=ts(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return rn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(f,d,m){var _=(m||t).length,p=o[_],g,x,M,S,b,T,C,v,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,oi])[1],!E){for(C=-oi;C<(C=m[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(p=o[_]=[],g=c?Math.min(E,_)*u-.5:i%E,x=E===oi?0:c?_*h/E-.5:i/E|0,C=0,v=oi,T=0;T<_;T++)M=T%E-g,S=x-(T/E|0),p[T]=b=l?Math.abs(l==="y"?S:M):Pp(M*M+S*S),b>C&&(C=b),b<v&&(v=b);i==="random"&&Jp(p),p.max=C-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:l?l==="y"?_/E:E:Math.max(E,_/E))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=gn(t.amount||t.each)||0,n=n&&_<0?hm(n):n}return _=(p[f]-p.min)/p.max||0,Wt(p.b+(n?n(_):_)*p.v)+p.u}},Fu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zi(n)?0:gn(n))}},em=function(e,t){var n=mn(e),i,s;return!n&&Pi(e)&&(i=n=e.radius||oi,e.values?(e=li(e.values),(s=!Zi(e[0]))&&(i*=i)):e=Fu(e.increment)),yr(t,n?Ft(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=oi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-a),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:o,s||u===o||Zi(o)?u:u+gn(o)}:Fu(e))},tm=function(e,t,n,i){return yr(mn(e)?!t:n===!0?!!(n=0):!i,function(){return mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ox=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Bx=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},kx=function(e,t,n){return im(e,t,0,1,n)},nm=function(e,t,n){return yr(n,function(i){return e[~~t(i)]})},zx=function r(e,t,n){var i=t-e;return mn(e)?nm(e,r(0,e.length),t):yr(n,function(s){return(i+(s-e)%i)%i+e})},Vx=function r(e,t,n){var i=t-e,s=i*2;return mn(e)?nm(e,r(0,e.length-1),t):yr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ra=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Up:yu),n+=e.substr(t,i-t)+tm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},im=function(e,t,n,i,s){var o=t-e,a=i-n;return yr(s,function(c){return n+((c-e)/o*a||0)})},Hx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=rn(e),a={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(mn(e)&&!mn(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(r(e[l-1],e[l]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return u[_](m-_)},n=t}else i||(e=Vs(mn(e)?[]:{},e));if(!u){for(c in t)zu.call(a,e,c,"get",t[c]);s=function(m){return Xu(m,a)||(o?e.p:e)}}}return yr(n,s)},rm=function(e,t,n){var i=e.labels,s=oi,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},Yn=function(e,t,n){var i=e.vars,s=i[t],o=Lt,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&xr.length&&Sl(),a&&(Lt=a),u=c?s.apply(l,c):s.call(l),Lt=o,u},sa=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dn),e.progress()<1&&Yn(e,"onInterrupt"),e},Ws,sm=[],om=function(e){if(e)if(e=!e.name&&e.default||e,Su()||e.headless){var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ea,render:Xu,add:zu,kill:rS,modifier:iS,rawVars:0},o={targetTest:0,get:0,getSetter:Wu,aliases:{},register:0};if(Xs(),e!==i){if(Xn[t])return;qn(i,qn(yl(e,s),o)),Vs(i.prototype,Vs(s,yl(e,o))),Xn[i.prop=t]=i,e.targetTest&&(xl.push(i),wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Op(t,i),e.register&&e.register(Bn,i,On)}else sm.push(e)},St=255,oa={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Ou=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},am=function(e,t,n){var i=e?Zi(e)?[e>>16,e>>8&St,e&St]:0:oa.black,s,o,a,c,l,u,h,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oa[e])i=oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(yu),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ou(c+1/3,s,o),i[1]=Ou(c,s,o),i[2]=Ou(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Dp),n&&i.length<4&&(i[3]=1),i}else i=e.match(yu)||oa.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lm=function(e){var t=[],n=[],i=-1;return e.split(Mr).forEach(function(s){var o=s.match(ks)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},cm=function(e,t,n){var i="",s=(e+i).match(Mr),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(f){return(f=am(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=lm(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Mr,"1").split(ks),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(Mr),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},Mr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Gx=/hsl[a]?\(/,um=function(e){var t=e.join(" "),n;if(Mr.lastIndex=0,Mr.test(t))return n=Gx.test(t),e[1]=cm(e[1],n),e[0]=cm(e[0],n,lm(e[1])),!0},aa,$n=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,u,h,f,d,m=function _(p){var g=r()-i,x=p===!0,M,S,b,T;if((g>e||g<0)&&(n+=g-t),i+=g,b=i-n,M=b-o,(M>0||x)&&(T=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=M+(M>=s?4:s-M),S=1),x||(c=l(_)),S)for(d=0;d<a.length;d++)a[d](b,f,T,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Np&&(!Eu&&Su()&&(Li=Eu=window,Tu=Li.document||{},Wn.gsap=Bn,(Li.gsapVersions||(Li.gsapVersions=[])).push(Bn.version),Fp(_l||Li.GreenSockGlobals||!Li.gsap&&Li||{}),sm.forEach(om)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},aa=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),aa=0,l=ea},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,g,x){var M=g?function(S,b,T,C){p(S,b,T,C),h.remove(M)}:p;return h.remove(p),a[x?"unshift":"push"](M),Xs(),M},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),Xs=function(){return!aa&&$n.wake()},at={},Wx=/^[\d.\-M][\d.\-,\s]/,Xx=/["']/g,qx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(Xx,"").trim():+l,i=c.substr(a+1).trim();return t},Yx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$x=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qx(t[1])]:Yx(e).split(",").map(Hp)):at._CE&&Wx.test(e)?at._CE("",e):n},hm=function(e){return function(t){return 1-e(1-t)}},fm=function r(e,t){for(var n=e._first,i;n;)n instanceof wn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ts=function(e,t){return e&&(Ft(e)?e:at[e]||$x(e))||t},ns=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Fn(e,function(a){at[a]=Wn[a]=s,at[o=a.toLowerCase()]=n;for(var c in s)at[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=at[a+"."+c]=s[c]}),s},dm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/vu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Mx((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:dm(a);return s=vu/s,c.config=function(l,u){return r(e,l,u)},c},ku=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:dm(n);return i.config=function(s){return r(e,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ns(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),at.Linear.easeNone=at.none=at.Linear.easeIn,ns("Elastic",Bu("in"),Bu("out"),Bu()),(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ns("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75),ns("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)}),ns("Circ",function(r){return-(Pp(1-r*r)-1)}),ns("Sine",function(r){return r===1?1:-yx(r*xx)+1}),ns("Back",ku("in"),ku("out"),ku()),at.SteppedEase=at.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-xt;return function(a){return((i*ia(0,o,a)|0)+s)*n}}},Bs.ease=at["quad.out"],Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ru+=r+","+r+"Params,"});var pm=function(e,t){this.id=Sx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zp,this.set=t?t.getSetter:Wu},la=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Gs(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),aa||$n.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Gs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bl(this,n),!s._dp||s.parent||Yp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Vp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Hs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?El(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Tl(this),Rx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?El(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bx);var i=dn;return dn=n,Lu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ai(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i)),this._dur||(this._zTime=-xt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ft(n)?n:Gp,a=function(){var l=i.then;i.then=null,Ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){sa(this)},r})();qn(la.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var wn=(function(r){Rp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Nn(n.sortChildren),Ut&&Di(n.parent||Ut,Ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&$p(Ki(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return na(0,arguments,this),this},t.from=function(i,s,o){return na(1,arguments,this),this},t.fromTo=function(i,s,o,a){return na(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ta(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(i,s,ai(this,o),1),this},t.call=function(i,s,o){return Di(this,Xt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Xt(i,o,ai(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,u){return o.runBackwards=1,ta(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,s,o,a,c,l,u)},t.staggerFromTo=function(i,s,o,a,c,l,u,h){return a.startAt=o,ta(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,s,a,c,l,u,h)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Wt(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,m,_,p,g,x,M,S,b,T,C;if(this!==Ut&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,M=this._ts,g=!M,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Wt(u%p),u===c?(_=this._repeat,f=l):(b=Wt(u/p),_=~~b,_&&_===b&&(f=l,_--),f>l&&(f=l)),b=Hs(this._tTime,p),!a&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),T&&_&1&&(f=l-f,C=1),_!==b&&!this._lock){var v=T&&b&1,E=v===(T&&_&1);if(_<b&&(v=!v),a=v?0:u%l?l:u,this._lock=1,this.render(a||(C?0:Wt(_*p)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,E&&(this._lock=2,a=v?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;fm(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Ix(this,Wt(a),Wt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!b&&(Yn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=-xt);break}}d=m}else{d=this._last;for(var w=i<0?i:f;d;){if(m=d._prev,(d._act||w<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,s,o||dn&&Lu(d)),f!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=w?-xt:xt);break}}d=m}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-xt)._zTime=f>=a?1:-1,this._ts))return this._start=S,Tl(this),this.render(i,s,o);this._onUpdate&&!s&&Yn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(Yn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Zi(s)||(s=ai(this,s,i)),!(i instanceof la)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(rn(i))return this.addLabel(i,s);if(Ft(i))i=Xt.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-oi);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Xt?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return rn(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(i.parent===this&&Ml(this,i),i===this._recent&&(this._recent=this._last),es(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ai(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Xt.delayedCall(0,s||ea,o);return a.data="isPause",this._hasPause=1,Di(this,a,ai(this,i))},t.removePause=function(i){var s=this._first;for(i=ai(this,i);s;)s._start===i&&s.data==="isPause"&&Sr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Er!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=li(i),c=this._first,l=Zi(s),u;c;)c instanceof Xt?wx(c._targets,a)&&(l?(!Er||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ai(o,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,m=Xt.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||xt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());m._dur!==p&&Gs(m,p,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,qn({startAt:{time:ai(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rm(this,ai(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rm(this,ai(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return es(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=oi,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Gs(o,o===Ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ut._ts&&(Vp(Ut,El(i,Ut)),Bp=$n.frame),$n.frame>=kp){kp+=Gn.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&Gn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},e})(la);qn(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Kx=function(e,t,n,i,s,o,a){var c=new On(this._pt,e,t,0,1,Sm,null,s),l=0,u=0,h,f,d,m,_,p,g,x;for(c.b=n,c.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=ra(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(Mu)||[];h=Mu.exec(i);)m=h[0],_=i.substring(l,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?zs(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},l=Mu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Ip.test(i)||g)&&(c.e=0),this._pt=c,c},zu=function(e,t,n,i,s,o,a,c,l,u){Ft(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ft(h)?l?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=Ft(h)?l?eS:vm:Gu,m;if(rn(i)&&(~i.indexOf("random(")&&(i=ra(i)),i.charAt(1)==="="&&(m=zs(f,i)+(gn(f)||0),(m||m===0)&&(i=m))),!u||f!==i||Vu)return!isNaN(f*i)&&i!==""?(m=new On(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?nS:xm,0,d),l&&(m.fp=l),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&bu(t,i),Kx.call(this,e,t,f,i,d,c||Gn.stringFilter,l))},Zx=function(e,t,n,i,s){if(Ft(e)&&(e=ca(e,s,t,n,i)),!Pi(e)||e.style&&e.nodeType||mn(e)||Lp(e))return rn(e)?ca(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ca(e[a],s,t,n,i);return o},mm=function(e,t,n,i,s,o){var a,c,l,u;if(Xn[e]&&(a=new Xn[e]).init(s,a.rawVars?t[e]:Zx(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new On(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ws))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Er,Vu,Hu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:p,M=e._overwrite==="auto"&&!_u,S=e.timeline,b,T,C,v,E,w,R,L,N,O,I,z,B;if(S&&(!f||!s)&&(s="none"),e._ease=ts(s,Bs.ease),e._yEase=h?hm(ts(h===!0?s:h,Bs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(L=p[0]?Qr(p[0]).harness:0,z=L&&i[L.prop],b=yl(i,wu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&m?vl:Tx),_._lazy=0),o){if(Sr(e._startAt=Xt.set(p,qn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Nn(c),startAt:null,delay:0,onUpdate:l&&function(){return Yn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn||!a&&!d)&&e._startAt.revert(vl),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),C=qn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Nn(c),immediateRender:a,stagger:0,parent:g},b),z&&(C[L.prop]=z),Sr(e._startAt=Xt.set(p,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn?e._startAt.revert(vl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&Nn(c)||c&&!m,T=0;T<p.length;T++){if(E=p[T],R=E._gsap||Pu(p)[T]._gsap,e._ptLookup[T]=O={},Au[R.id]&&xr.length&&Sl(),I=x===p?T:x.indexOf(E),L&&(N=new L).init(E,z||b,e,I,x)!==!1&&(e._pt=v=new On(e._pt,E,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(K){O[K]=v}),N.priority&&(w=1)),!L||z)for(C in b)Xn[C]&&(N=mm(C,b,e,I,E,x))?N.priority&&(w=1):O[C]=v=zu.call(e,E,C,"get",b[C],I,x,0,i.stringFilter);e._op&&e._op[T]&&e.kill(E,e._op[T]),M&&e._pt&&(Er=e,Ut.killTweensOf(E,O,e.globalTime(t)),B=!e.parent,Er=0),e._pt&&c&&(Au[R.id]=1)}w&&ym(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&S.render(oi,!0,!0)},jx=function(e,t,n,i,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Vu=1,e.vars[t]="+=0",Hu(e,a),Vu=0,c?Qo(t+" not eligible for reset"):1;l.push(u)}for(d=l.length;d--;)h=l[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Bt(n)+gn(h.e)),h.b&&(h.b=u.s+gn(h.b))},Jx=function(e,t){var n=e[0]?Qr(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=Vs({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},Qx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(mn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ca=function(e,t,n,i,s){return Ft(e)?e.call(t,n,i,s):rn(e)&&~e.indexOf("random(")?ra(e):e},gm=Ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_m={};Fn(gm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _m[r]=1});var Xt=(function(r){Rp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ta(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,m=c.keyframes,_=c.defaults,p=c.scrollTrigger,g=c.yoyoEase,x=i.parent||Ut,M=(mn(n)||Lp(n)?Zi(n[0]):"length"in i)?[n]:li(n),S,b,T,C,v,E,w,R;if(a._targets=M.length?Pu(M):Qo("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||gl(l)||gl(u)){if(i=a.vars,S=a.timeline=new wn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:M}),S.kill(),S.parent=S._dp=Ki(a),S._start=0,f||gl(l)||gl(u)){if(C=M.length,w=f&&Qp(f),Pi(f))for(v in f)~gm.indexOf(v)&&(R||(R={}),R[v]=f[v]);for(b=0;b<C;b++)T=yl(i,_m),T.stagger=0,g&&(T.yoyoEase=g),R&&Vs(T,R),E=M[b],T.duration=+ca(l,Ki(a),b,E,M),T.delay=(+ca(u,Ki(a),b,E,M)||0)-a._delay,!f&&C===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),S.to(E,T,w?w(b,E,M):0),S._ease=at.none;S.duration()?l=u=0:a.timeline=0}else if(m){ta(qn(S.vars.defaults,{ease:"none"})),S._ease=ts(m.ease||i.ease||"none");var L=0,N,O,I;if(mn(m))m.forEach(function(z){return S.to(M,z,">")}),S.duration();else{T={};for(v in m)v==="ease"||v==="easeEach"||Qx(v,m[v],T,m.easeEach);for(v in T)for(N=T[v].sort(function(z,B){return z.t-B.t}),L=0,b=0;b<N.length;b++)O=N[b],I={ease:O.e,duration:(O.t-(b?N[b-1].t:0))/100*l},I[v]=O.v,S.to(M,I,L),L+=I.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||a.duration(l=S.duration())}else a.timeline=0;return d===!0&&!_u&&(Er=Ki(a),Ut.killTweensOf(M),Er=0),Di(x,Ki(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!m&&a._start===Wt(x._time)&&Nn(h)&&Px(Ki(a))&&x.data!=="nested")&&(a._tTime=-xt,a.render(Math.max(0,-u)||0)),p&&$p(Ki(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-xt&&!u?c:i<xt?0:i,f,d,m,_,p,g,x,M,S;if(!l)Dx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Wt(h%_),h===c?(m=this._repeat,f=l):(p=Wt(h/_),m=~~p,m&&m===p?(f=l,m--):f>l&&(f=l)),g=this._yoyo&&m&1,g&&(S=this._yEase,f=l-f),p=Hs(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=h,this;m!==p&&(M&&this._yEase&&fm(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Wt(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(Kp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(f/l),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!p&&(Yn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Du(this,i,s,o),Yn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Yn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Du(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!s&&!(u&&!a)&&(h||a||g)&&(Yn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,c){aa||$n.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Hu(this,l),u=this._ease(l/this._dur),jx(this,i,s,o,a,u,l,c)?this.resetTo(i,s,o,a,1):(bl(this,0),this.parent||Xp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Er&&Er.vars.overwrite!==!0)._first||sa(this),this.parent&&o!==this.timeline.totalDuration()&&Gs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?li(i):a,l=this._ptLookup,u=this._pt,h,f,d,m,_,p,g;if((!s||s==="all")&&Cx(a,c))return s==="all"&&(this._pt=0),sa(this);for(h=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},Fn(s,function(x){return _[x]=1}),s=_),s=Jx(a,s)),g=a.length;g--;)if(~c.indexOf(a[g])){f=l[g],s==="all"?(h[g]=s,m=f,d={}):(d=h[g]=h[g]||{},m=s);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ml(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&sa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return na(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return na(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ut.killTweensOf(i,s,o)},e})(la);qn(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new wn,t=Uu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Gu=function(e,t,n){return e[t]=n},vm=function(e,t,n){return e[t](n)},eS=function(e,t,n,i){return e[t](i.fp,n)},tS=function(e,t,n){return e.setAttribute(t,n)},Wu=function(e,t){return Ft(e[t])?vm:xu(e[t])&&e.setAttribute?tS:Gu},xm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Xu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},rS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ml(this,t,"_pt"):t.dep||(n=1),t=i;return!n},sS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ym=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},On=(function(){function r(t,n,i,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||xm,this.d=c||this,this.set=l||Gu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=sS,this.m=n,this.mt=s,this.tween=i},r})();Fn(Ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return wu[r]=1}),Wn.TweenMax=Wn.TweenLite=Xt,Wn.TimelineLite=Wn.TimelineMax=wn,Ut=new wn({sortChildren:!1,defaults:Bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Gn.stringFilter=um;var is=[],wl={},oS=[],Mm=0,aS=0,qu=function(e){return(wl[e]||oS).map(function(t){return t()})},Yu=function(){var e=Date.now(),t=[];e-Mm>2&&(qu("matchMediaInit"),is.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=Li.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),qu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mm=e,qu("matchMedia"))},Em=(function(){function r(t,n){this.selector=n&&Nu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=aS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ft(n)&&(s=i,i=n,n=Ft);var o=this,a=function(){var l=Lt,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=Nu(s)),Lt=o,h=i.apply(o,arguments),Ft(h)&&o._r.push(h),Lt=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ft?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof wn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Xt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=is.length;o--;)is[o].id===this.id&&is.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),lS=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Pi(n)||(n={matches:n});var o=new Em(0,s||this.scope),a=o.conditions={},c,l,u;Lt&&!o.selector&&(o.selector=Lt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Li.matchMedia(n[l]),c&&(is.indexOf(o)<0&&is.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Yu):c.addEventListener("change",Yu)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Al={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return om(i)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){rn(e)&&(e=li(e)[0]);var s=Qr(e||{}).get,o=n?Gp:Hp;return n==="native"&&(n=""),e&&(t?o((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(a,c,l){return o((Xn[a]&&Xn[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=li(e),e.length>1){var i=e.map(function(u){return Bn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Xn[t],a=Qr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;Ws._pt=0,h.init(e,n?u+n:u,Ws,0,[e]),h.render(1,h),Ws._pt&&Xu(1,Ws)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Bn.to(e,qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ts(e.ease,Bs.ease)),Wp(Bs,e||{})},config:function(e){return Wp(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!Wn[a]&&Qo(t+" effect requires "+a+" plugin.")}),Cu[t]=function(a,c,l){return n(li(a),qn(c||{},s),l)},o&&(wn.prototype[t]=function(a,c,l){return this.add(Cu[t](a,Pi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){at[e]=ts(t)},parseEase:function(e,t){return arguments.length?ts(e,t):at},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),i,s;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Xt&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Ut,n,0),n},context:function(e,t){return e?new Em(e,t):Lt},matchMedia:function(e){return new lS(e)},matchMediaRefresh:function(){return is.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Yu()},addEventListener:function(e,t){var n=wl[e]||(wl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=wl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:zx,wrapYoyo:Vx,distribute:Qp,random:tm,snap:em,normalize:kx,getUnit:gn,clamp:Nx,splitColor:am,toArray:li,selector:Nu,mapRange:im,pipe:Ox,unitize:Bx,interpolate:Hx,shuffle:Jp},install:Fp,effects:Cu,ticker:$n,updateRoot:wn.updateRoot,plugins:Xn,globalTimeline:Ut,core:{PropTween:On,globals:Op,Tween:Xt,Timeline:wn,Animation:la,getCache:Qr,_removeLinkedListItem:Ml,reverting:function(){return dn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return _u=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Al[r]=Xt[r]}),$n.add(wn.updateRoot),Ws=Al.to({},{duration:0});var cS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},uS=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=cS(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},$u=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(rn(s)&&(c={},Fn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}uS(a,s)}}}},Bn=Al.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$u("roundProps",Fu),$u("modifiers"),$u("snap",em))||Al;Xt.version=wn.version=Bn.version="3.13.0",Np=1,Su()&&Xs(),at.Power0,at.Power1,at.Power2,at.Power3,at.Power4,at.Linear,at.Quad,at.Cubic,at.Quart,at.Quint,at.Strong,at.Elastic,at.Back,at.SteppedEase,at.Bounce,at.Sine,at.Expo,at.Circ;var Tm,Tr,qs,Ku,rs,bm,Zu,hS=function(){return typeof window<"u"},ji={},ss=180/Math.PI,Ys=Math.PI/180,$s=Math.atan2,wm=1e8,ju=/([A-Z])/g,fS=/(left|right|width|margin|padding|x)/i,dS=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ju=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Am=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_S=function(e,t,n){return e.style[t]=n},vS=function(e,t,n){return e.style.setProperty(t,n)},xS=function(e,t,n){return e._gsap[t]=n},SS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},MS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Nt="transform",kn=Nt+"Origin",ES=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ji(i,a)}):this.tfm[e]=o.x?o[e]:Ji(i,e),e===kn&&(this.tfm.zOrigin=o.zOrigin);else return Ii.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Nt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},Rm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},TS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ju,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Zu(),(!s||!s.isStart)&&!n[Nt]&&(Rm(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pm=function(e,t){var n={target:e,props:[],revert:TS,save:ES};return e._gsap||Bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Lm,Qu=function(e,t){var n=Tr.createElementNS?Tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Tr.createElement(e);return n&&n.style?n:Tr.createElement(e)},ci=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ju,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ks(t)||t,1)||""},Dm="O,Moz,ms,Ms,Webkit".split(","),Ks=function(e,t,n){var i=t||rs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Dm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Dm[o]:"")+e},eh=function(){hS()&&window.document&&(Tm=window,Tr=Tm.document,qs=Tr.documentElement,rs=Qu("div")||{style:{}},Qu("div"),Nt=Ks(Nt),kn=Nt+"Origin",rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lm=!!Ks("perspective"),Zu=Bn.core.reverting,Ku=1)},Im=function(e){var t=e.ownerSVGElement,n=Qu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),qs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),qs.removeChild(n),s},Um=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Nm=function(e){var t,n;try{t=e.getBBox()}catch{t=Im(e),n=1}return t&&(t.width||t.height)||n||(t=Im(e)),t&&!t.width&&!t.x&&!t.y?{x:+Um(e,["x","cx","x1"])||0,y:+Um(e,["y","cy","y1"])||0,width:0,height:0}:t},Fm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Nm(e))},os=function(e,t){if(t){var n=e.style,i;t in ji&&t!==kn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ju,"-$1").toLowerCase())):n.removeAttribute(t)}},br=function(e,t,n,i,s,o){var a=new On(e._pt,t,n,0,1,o?Cm:Am);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Om={deg:1,rad:1,turn:1},bS={grid:1,flex:1},wr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=rs.style,c=fS.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",m,_,p,g;if(i===o||!s||Om[i]||Om[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&Fm(e),(d||o==="%")&&(ji[t]||~t.indexOf("adius")))return m=g?e.getBBox()[c?"width":"height"]:e[u],Bt(d?s/m*h:s/100*m);if(a[c?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Tr||!_.appendChild)&&(_=Tr.body),p=_._gsap,p&&d&&p.width&&c&&p.time===$n.time&&!p.uncache)return Bt(s/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,m=e[u],x?e.style[t]=x:os(e,t)}else(d||o==="%")&&!bS[ci(_,"display")]&&(a.position=ci(e,"position")),_===e&&(a.position="static"),_.appendChild(rs),m=rs[u],_.removeChild(rs),a.position="absolute";return c&&d&&(p=Qr(_),p.time=$n.time,p.width=_[u]),Bt(f?m*s/h:m&&s?h/m*s:0)},Ji=function(e,t,n,i){var s;return Ku||eh(),t in Ii&&t!=="transform"&&(t=Ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(s=ha(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Rl(ci(e,kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Cl[t]&&Cl[t](e,t,n)||ci(e,t)||zp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wr(e,t,s,n)+n:s},wS=function(e,t,n,i){if(!n||n==="none"){var s=Ks(t,e,1),o=s&&ci(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var a=new On(this._pt,e.style,t,0,1,Sm),c=0,l=0,u,h,f,d,m,_,p,g,x,M,S,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ci(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ci(e,t)||i,_?e.style[t]=_:os(e,t)),u=[n,i],um(u),n=u[0],i=u[1],f=n.match(ks)||[],b=i.match(ks)||[],b.length){for(;h=ks.exec(i);)p=h[0],x=i.substring(c,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),p!==(_=f[l++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),p.charAt(1)==="="&&(p=zs(d,p)+S),g=parseFloat(p),M=p.substr((g+"").length),c=ks.lastIndex-M.length,M||(M=M||Gn.units[t]||S,c===i.length&&(i+=M,a.e+=M)),S!==M&&(d=wr(e,t,_,M)||0),a._pt={_next:a._pt,p:x||l===1?x:",",s:d,c:g-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Cm:Am;return Ip.test(i)&&(a.e=0),this._pt=a,a},Bm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},AS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Bm[n]||n,t[1]=Bm[i]||i,t.join(" ")},CS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],ji[a]&&(c=1,a=a==="transformOrigin"?kn:Nt),os(n,a);c&&(os(n,Nt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ha(n,1),o.uncache=1,Rm(i)))}},Cl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new On(e._pt,t,n,0,0,CS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ua=[1,0,0,1,0,0],km={},zm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vm=function(e){var t=ci(e,Nt);return zm(t)?ua:t.substr(7).match(Dp).map(Bt)},th=function(e,t){var n=e._gsap||Qr(e),i=e.style,s=Vm(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ua:s):(s===ua&&!e.offsetParent&&e!==qs&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,qs.appendChild(e)),s=Vm(e),c?i.display=c:os(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nh=function(e,t,n,i,s,o){var a=e._gsap,c=s||th(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=c[0],m=c[1],_=c[2],p=c[3],g=c[4],x=c[5],M=t.split(" "),S=parseFloat(M[0])||0,b=parseFloat(M[1])||0,T,C,v,E;n?c!==ua&&(C=d*p-m*_)&&(v=S*(p/C)+b*(-_/C)+(_*x-p*g)/C,E=S*(-m/C)+b*(d/C)-(d*x-m*g)/C,S=v,b=E):(T=Nm(e),S=T.x+(~M[0].indexOf("%")?S/100*T.width:S),b=T.y+(~(M[1]||M[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&a.smooth?(g=S-l,x=b-u,a.xOffset=h+(g*d+x*_)-g,a.yOffset=f+(g*m+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[kn]="0px 0px",o&&(br(o,a,"xOrigin",l,S),br(o,a,"yOrigin",u,b),br(o,a,"xOffset",h,a.xOffset),br(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+b)},ha=function(e,t){var n=e._gsap||new pm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=ci(e,kn)||"0",u,h,f,d,m,_,p,g,x,M,S,b,T,C,v,E,w,R,L,N,O,I,z,B,K,Z,D,re,ce,ke,Ie,Se;return u=h=f=_=p=g=x=M=S=0,d=m=1,n.svg=!!(e.getCTM&&Fm(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Nt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Nt]!=="none"?c[Nt]:"")),i.scale=i.rotate=i.translate="none"),C=th(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),l=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),nh(e,B||l,!!B||n.originIsAbsolute,n.smooth!==!1,C)),b=n.xOrigin||0,T=n.yOrigin||0,C!==ua&&(R=C[0],L=C[1],N=C[2],O=C[3],u=I=C[4],h=z=C[5],C.length===6?(d=Math.sqrt(R*R+L*L),m=Math.sqrt(O*O+N*N),_=R||L?$s(L,R)*ss:0,x=N||O?$s(N,O)*ss+_:0,x&&(m*=Math.abs(Math.cos(x*Ys))),n.svg&&(u-=b-(b*R+T*N),h-=T-(b*L+T*O))):(Se=C[6],ke=C[7],D=C[8],re=C[9],ce=C[10],Ie=C[11],u=C[12],h=C[13],f=C[14],v=$s(Se,ce),p=v*ss,v&&(E=Math.cos(-v),w=Math.sin(-v),B=I*E+D*w,K=z*E+re*w,Z=Se*E+ce*w,D=I*-w+D*E,re=z*-w+re*E,ce=Se*-w+ce*E,Ie=ke*-w+Ie*E,I=B,z=K,Se=Z),v=$s(-N,ce),g=v*ss,v&&(E=Math.cos(-v),w=Math.sin(-v),B=R*E-D*w,K=L*E-re*w,Z=N*E-ce*w,Ie=O*w+Ie*E,R=B,L=K,N=Z),v=$s(L,R),_=v*ss,v&&(E=Math.cos(v),w=Math.sin(v),B=R*E+L*w,K=I*E+z*w,L=L*E-R*w,z=z*E-I*w,R=B,I=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),d=Bt(Math.sqrt(R*R+L*L+N*N)),m=Bt(Math.sqrt(z*z+Se*Se)),v=$s(I,z),x=Math.abs(v)>2e-4?v*ss:0,S=Ie?1/(Ie<0?-Ie:Ie):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zm(ci(e,Nt)),B&&e.setAttribute("transform",B))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Bt(d),n.scaleY=Bt(m),n.rotation=Bt(_)+a,n.rotationX=Bt(p)+a,n.rotationY=Bt(g)+a,n.skewX=x+a,n.skewY=M+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[kn]=Rl(l)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?PS:Lm?Hm:RS,n.uncache=0,n},Rl=function(e){return(e=e.split(" "))[0]+" "+e[1]},ih=function(e,t,n){var i=gn(t);return Bt(parseFloat(t)+parseFloat(wr(e,"x",n+"px",i)))+i},RS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Hm(e,t)},as="0deg",fa="0px",ls=") ",Hm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,x=n.target,M=n.zOrigin,S="",b=g==="auto"&&e&&e!==1||g===!0;if(M&&(h!==as||u!==as)){var T=parseFloat(u)*Ys,C=Math.sin(T),v=Math.cos(T),E;T=parseFloat(h)*Ys,E=Math.cos(T),o=ih(x,o,C*E*-M),a=ih(x,a,-Math.sin(T)*-M),c=ih(x,c,v*E*-M+M)}p!==fa&&(S+="perspective("+p+ls),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(b||o!==fa||a!==fa||c!==fa)&&(S+=c!==fa||b?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ls),l!==as&&(S+="rotate("+l+ls),u!==as&&(S+="rotateY("+u+ls),h!==as&&(S+="rotateX("+h+ls),(f!==as||d!==as)&&(S+="skew("+f+", "+d+ls),(m!==1||_!==1)&&(S+="scale("+m+", "+_+ls),x.style[Nt]=S||"translate(0, 0)"},PS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,x=n.forceCSS,M=parseFloat(o),S=parseFloat(a),b,T,C,v,E;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Ys,l*=Ys,b=Math.cos(c)*h,T=Math.sin(c)*h,C=Math.sin(c-l)*-f,v=Math.cos(c-l)*f,l&&(u*=Ys,E=Math.tan(l-u),E=Math.sqrt(1+E*E),C*=E,v*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),b*=E,T*=E)),b=Bt(b),T=Bt(T),C=Bt(C),v=Bt(v)):(b=h,v=f,T=C=0),(M&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(M=wr(d,"x",o,"px"),S=wr(d,"y",a,"px")),(m||_||p||g)&&(M=Bt(M+m-(m*b+_*C)+p),S=Bt(S+_-(m*T+_*v)+g)),(i||s)&&(E=d.getBBox(),M=Bt(M+i/100*E.width),S=Bt(S+s/100*E.height)),E="matrix("+b+","+T+","+C+","+v+","+M+","+S+")",d.setAttribute("transform",E),x&&(d.style[Nt]=E)},LS=function(e,t,n,i,s){var o=360,a=rn(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?ss:1),l=c-i,u=i+l+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*wm)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*wm)%o-~~(l/o)*o)),e._pt=f=new On(e._pt,t,n,i,l,pS),f.e=u,f.u="deg",e._props.push(n),f},Gm=function(e,t){for(var n in t)e[n]=t[n];return e},DS=function(e,t,n){var i=Gm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,f,d,m;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Nt]=t,a=ha(n,1),os(n,Nt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Nt],o[Nt]=t,a=ha(n,1),o[Nt]=l);for(c in ji)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(d=gn(l),m=gn(u),h=d!==m?wr(n,c,l,m):parseFloat(l),f=parseFloat(u),e._pt=new On(e._pt,a,c,h,f-h,Ju),e._pt.u=m||0,e._props.push(c));Gm(a,i)};Fn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Cl[e>1?"border"+r:r]=function(a,c,l,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return Ji(a,m,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(c,d,h)}});var Wm={name:"css",register:eh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,f,d,m,_,p,g,x,M,S,b,T,C,v;Ku||eh(),this.styles=this.styles||Pm(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Xn[_]&&mm(_,t,n,i,e,s)))){if(d=typeof u,m=Cl[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ra(u)),m)m(this,e,_,u,n)&&(C=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Mr.lastIndex=0,Mr.test(l)||(p=gn(l),g=gn(u)),g?p!==g&&(l=wr(e,_,l,g)+g):p&&(u+=p),this.add(a,"setProperty",l,u,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],rn(l)&&~l.indexOf("random(")&&(l=ra(l)),gn(l+"")||l==="auto"||(l+=Gn.units[_]||gn(Ji(e,_))||""),(l+"").charAt(1)==="="&&(l=Ji(e,_))):l=Ji(e,_),f=parseFloat(l),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Ii&&(_==="autoAlpha"&&(f===1&&Ji(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),br(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ji,M){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=ci(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),S||(b=e._gsap,b.renderTransform&&!t.parseTransform||ha(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,S=this._pt=new On(this._pt,a,Nt,0,1,b.renderTransform,b,0,-1),S.dep=1),_==="scale")this._pt=new On(this._pt,b,"scaleY",b.scaleY,(x?zs(b.scaleY,x+h):h)-b.scaleY||0,Ju),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(kn,0,a[kn]),u=AS(u),b.svg?nh(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==b.zOrigin&&br(this,b,"zOrigin",b.zOrigin,g),br(this,a,_,Rl(l),Rl(u)));continue}else if(_==="svgOrigin"){nh(e,u,1,T,0,this);continue}else if(_ in km){LS(this,b,_,f,x?zs(f,x+u):u);continue}else if(_==="smoothOrigin"){br(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){DS(this,u,e);continue}}else _ in a||(_=Ks(_)||_);if(M||(h||h===0)&&(f||f===0)&&!dS.test(u)&&_ in a)p=(l+"").substr((f+"").length),h||(h=0),g=gn(u)||(_ in Gn.units?Gn.units[_]:p),p!==g&&(f=wr(e,_,l,g)),this._pt=new On(this._pt,M?b:a,_,f,(x?zs(f,x+h):h)-f,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?gS:Ju),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=mS);else if(_ in a)wS.call(this,e,_,l,x?x+u:u);else if(_ in e)this.add(e,_,l||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){bu(_,u);continue}M||(_ in a?v.push(_,0,a[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,l||e[_])),o.push(_)}}C&&ym(this)},render:function(e,t){if(t.tween._time||!Zu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ji,aliases:Ii,getSetter:function(e,t,n){var i=Ii[t];return i&&i.indexOf(",")<0&&(t=i),t in ji&&t!==kn&&(e._gsap.x||Ji(e,"x"))?n&&bm===n?t==="scale"?SS:xS:(bm=n||{})&&(t==="scale"?yS:MS):e.style&&!xu(e.style[t])?_S:~t.indexOf("-")?vS:Wu(e,t)},core:{_removeProperty:os,_getMatrix:th}};Bn.utils.checkPrefix=Ks,Bn.core.getStyleSaver=Pm,(function(r,e,t,n){var i=Fn(r+","+e+","+t,function(s){ji[s]=1});Fn(e,function(s){Gn.units[s]="deg",km[s]=1}),Ii[i[13]]=r+","+e,Fn(n,function(s){var o=s.split(":");Ii[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"}),Bn.registerPlugin(Wm);var U=Bn.registerPlugin(Wm)||Bn;U.core.Tween;function IS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function US(r,e,t){return e&&IS(r.prototype,e),r}var pn,Pl,Kn,Ar,Cr,Zs,Xm,cs,da,qm,Qi,xi,Ym,$m=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},Km=1,js=[],rt=[],Ui=[],pa=Date.now,rh=function(e,t){return t},NS=function(){var e=da.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Ui),rt=n,Ui=i,rh=function(o,a){return t[o](a)}},Rr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]},ma=function(e){return!!~qm.indexOf(e)},An=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ll="scrollLeft",Dl="scrollTop",sh=function(){return Qi&&Qi.isPressed||rt.cache++},Il=function(e,t){var n=function i(s){if(s||s===0){Km&&(Kn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),e(s),i.cacheID=rt.cache,o&&rh("ss",s)}else(t||rt.cache!==i.cacheID||rh("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Rn={s:Ll,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Il(function(r){return arguments.length?Kn.scrollTo(r,Zt.sc()):Kn.pageXOffset||Ar[Ll]||Cr[Ll]||Zs[Ll]||0})},Zt={s:Dl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:Il(function(r){return arguments.length?Kn.scrollTo(Rn.sc(),r):Kn.pageYOffset||Ar[Dl]||Cr[Dl]||Zs[Dl]||0})},zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?void 0:null)},FS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Pr=function(e,t){var n=t.s,i=t.sc;ma(e)&&(e=Ar.scrollingElement||Cr);var s=rt.indexOf(e),o=i===Zt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||An(e,"scroll",sh);var a=rt[s+o],c=a||(rt[s+o]=Il(Rr(e,n),!0)||(ma(e)?i:Il(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),c},oh=function(e,t,n){var i=e,s=e,o=pa(),a=o,c=t||50,l=Math.max(500,c*3),u=function(m,_){var p=pa();_||p-o>c?(s=i,i=m,a=o,o=p):n?i+=m:i=s+(m-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(m){var _=a,p=s,g=pa();return(m||m===0)&&m!==i&&u(m),o===a||g-a>l?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},ga=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},jm=function(){da=pn.core.globals().ScrollTrigger,da&&da.core&&NS()},Jm=function(e){return pn=e||$m(),!Pl&&pn&&typeof document<"u"&&document.body&&(Kn=window,Ar=document,Cr=Ar.documentElement,Zs=Ar.body,qm=[Kn,Ar,Cr,Zs],pn.utils.clamp,Ym=pn.core.context||function(){},cs="onpointerenter"in Zs?"pointer":"mouse",Xm=kt.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,xi=kt.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Km=0},500),jm(),Pl=1),Pl};Rn.op=Zt,rt.cache=0;var kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Pl||Jm(pn),da||jm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,x=n.onDrag,M=n.onPress,S=n.onRelease,b=n.onRight,T=n.onLeft,C=n.onUp,v=n.onDown,E=n.onChangeX,w=n.onChangeY,R=n.onChange,L=n.onToggleX,N=n.onToggleY,O=n.onHover,I=n.onHoverEnd,z=n.onMove,B=n.ignoreCheck,K=n.isNormalizer,Z=n.onGestureStart,D=n.onGestureEnd,re=n.onWheel,ce=n.onEnable,ke=n.onDisable,Ie=n.onClick,Se=n.scrollSpeed,$=n.capture,le=n.allowClicks,te=n.lockAxis,Re=n.onLockAxis;this.target=a=zn(a)||Cr,this.vars=n,d&&(d=pn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,Se=Se||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Kn.getComputedStyle(Zs).lineHeight)||22);var Ne,we,Je,pe,Le,je,Ve,W=this,$e=0,Pt=0,k=n.passive||!u&&n.passive!==!1,ve=Pr(a,Rn),We=Pr(a,Zt),ut=ve(),_e=We(),et=~o.indexOf("touch")&&!~o.indexOf("pointer")&&xi[0]==="pointerdown",P=ma(a),y=a.ownerDocument||Ar,H=[0,0,0],J=[0,0,0],ne=0,me=function(){return ne=pa()},se=function(de,He){return(W.event=de)&&d&&FS(de.target,d)||He&&et&&de.pointerType!=="touch"||B&&B(de,He)},j=function(){W._vx.reset(),W._vy.reset(),we.pause(),h&&h(W)},ee=function(){var de=W.deltaX=Zm(H),He=W.deltaY=Zm(J),oe=Math.abs(de)>=i,Ge=Math.abs(He)>=i;R&&(oe||Ge)&&R(W,de,He,H,J),oe&&(b&&W.deltaX>0&&b(W),T&&W.deltaX<0&&T(W),E&&E(W),L&&W.deltaX<0!=$e<0&&L(W),$e=W.deltaX,H[0]=H[1]=H[2]=0),Ge&&(v&&W.deltaY>0&&v(W),C&&W.deltaY<0&&C(W),w&&w(W),N&&W.deltaY<0!=Pt<0&&N(W),Pt=W.deltaY,J[0]=J[1]=J[2]=0),(pe||Je)&&(z&&z(W),Je&&(p&&Je===1&&p(W),x&&x(W),Je=0),pe=!1),je&&!(je=!1)&&Re&&Re(W),Le&&(re(W),Le=!1),Ne=0},ye=function(de,He,oe){H[oe]+=de,J[oe]+=He,W._vx.update(de),W._vy.update(He),l?Ne||(Ne=requestAnimationFrame(ee)):ee()},Ce=function(de,He){te&&!Ve&&(W.axis=Ve=Math.abs(de)>Math.abs(He)?"x":"y",je=!0),Ve!=="y"&&(H[2]+=de,W._vx.update(de,!0)),Ve!=="x"&&(J[2]+=He,W._vy.update(He,!0)),l?Ne||(Ne=requestAnimationFrame(ee)):ee()},ge=function(de){if(!se(de,1)){de=ga(de,u);var He=de.clientX,oe=de.clientY,Ge=He-W.x,Ue=oe-W.y,Ye=W.isDragging;W.x=He,W.y=oe,(Ye||(Ge||Ue)&&(Math.abs(W.startX-He)>=s||Math.abs(W.startY-oe)>=s))&&(Je=Ye?2:1,Ye||(W.isDragging=!0),Ce(Ge,Ue))}},he=W.onPress=function(ae){se(ae,1)||ae&&ae.button||(W.axis=Ve=null,we.pause(),W.isPressed=!0,ae=ga(ae),$e=Pt=0,W.startX=W.x=ae.clientX,W.startY=W.y=ae.clientY,W._vx.reset(),W._vy.reset(),An(K?a:y,xi[1],ge,k,!0),W.deltaX=W.deltaY=0,M&&M(W))},xe=W.onRelease=function(ae){if(!se(ae,1)){Cn(K?a:y,xi[1],ge,!0);var de=!isNaN(W.y-W.startY),He=W.isDragging,oe=He&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Ge=ga(ae);!oe&&de&&(W._vx.reset(),W._vy.reset(),u&&le&&pn.delayedCall(.08,function(){if(pa()-ne>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(y.createEvent){var Ue=y.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Kn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(Ue)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&He&&!K&&we.restart(!0),Je&&ee(),g&&He&&g(W),S&&S(W,oe)}},Xe=function(de){return de.touches&&de.touches.length>1&&(W.isGesturing=!0)&&Z(de,W.isDragging)},Ke=function(){return(W.isGesturing=!1)||D(W)},F=function(de){if(!se(de)){var He=ve(),oe=We();ye((He-ut)*Se,(oe-_e)*Se,1),ut=He,_e=oe,h&&we.restart(!0)}},ue=function(de){if(!se(de)){de=ga(de,u),re&&(Le=!0);var He=(de.deltaMode===1?c:de.deltaMode===2?Kn.innerHeight:1)*m;ye(de.deltaX*He,de.deltaY*He,0),h&&!K&&we.restart(!0)}},Q=function(de){if(!se(de)){var He=de.clientX,oe=de.clientY,Ge=He-W.x,Ue=oe-W.y;W.x=He,W.y=oe,pe=!0,h&&we.restart(!0),(Ge||Ue)&&Ce(Ge,Ue)}},Ee=function(de){W.event=de,O(W)},fe=function(de){W.event=de,I(W)},ie=function(de){return se(de)||ga(de,u)&&Ie(W)};we=W._dc=pn.delayedCall(f||.25,j).pause(),W.deltaX=W.deltaY=0,W._vx=oh(0,50,!0),W._vy=oh(0,50,!0),W.scrollX=ve,W.scrollY=We,W.isDragging=W.isGesturing=W.isPressed=!1,Ym(this),W.enable=function(ae){return W.isEnabled||(An(P?y:a,"scroll",sh),o.indexOf("scroll")>=0&&An(P?y:a,"scroll",F,k,$),o.indexOf("wheel")>=0&&An(a,"wheel",ue,k,$),(o.indexOf("touch")>=0&&Xm||o.indexOf("pointer")>=0)&&(An(a,xi[0],he,k,$),An(y,xi[2],xe),An(y,xi[3],xe),le&&An(a,"click",me,!0,!0),Ie&&An(a,"click",ie),Z&&An(y,"gesturestart",Xe),D&&An(y,"gestureend",Ke),O&&An(a,cs+"enter",Ee),I&&An(a,cs+"leave",fe),z&&An(a,cs+"move",Q)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=pe=Je=!1,W._vx.reset(),W._vy.reset(),ut=ve(),_e=We(),ae&&ae.type&&he(ae),ce&&ce(W)),W},W.disable=function(){W.isEnabled&&(js.filter(function(ae){return ae!==W&&ma(ae.target)}).length||Cn(P?y:a,"scroll",sh),W.isPressed&&(W._vx.reset(),W._vy.reset(),Cn(K?a:y,xi[1],ge,!0)),Cn(P?y:a,"scroll",F,$),Cn(a,"wheel",ue,$),Cn(a,xi[0],he,$),Cn(y,xi[2],xe),Cn(y,xi[3],xe),Cn(a,"click",me,!0),Cn(a,"click",ie),Cn(y,"gesturestart",Xe),Cn(y,"gestureend",Ke),Cn(a,cs+"enter",Ee),Cn(a,cs+"leave",fe),Cn(a,cs+"move",Q),W.isEnabled=W.isPressed=W.isDragging=!1,ke&&ke(W))},W.kill=W.revert=function(){W.disable();var ae=js.indexOf(W);ae>=0&&js.splice(ae,1),Qi===W&&(Qi=0)},js.push(W),K&&ma(a)&&(Qi=W),W.enable(_)},US(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();kt.version="3.13.0",kt.create=function(r){return new kt(r)},kt.register=Jm,kt.getAll=function(){return js.slice()},kt.getById=function(r){return js.filter(function(e){return e.vars.id===r})[0]},$m()&&pn.registerPlugin(kt);var De,Js,st,bt,Zn,pt,ah,Ul,_a,va,xa,Nl,_n,Fl,lh,Pn,Qm,eg,Qs,tg,ch,ng,Ln,uh,ig,rg,Lr,hh,fh,eo,dh,Ol,ph,mh,Bl=1,vn=Date.now,gh=vn(),ui=0,Sa=0,sg=function(e,t,n){var i=jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},og=function(e,t){return t&&(!jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},OS=function r(){return Sa&&requestAnimationFrame(r)},ag=function(){return Fl=1},lg=function(){return Fl=0},Ni=function(e){return e},ya=function(e){return Math.round(e*1e5)/1e5||0},cg=function(){return typeof window<"u"},ug=function(){return De||cg()&&(De=window.gsap)&&De.registerPlugin&&De},us=function(e){return!!~ah.indexOf(e)},hg=function(e){return(e==="Height"?dh:st["inner"+e])||Zn["client"+e]||pt["client"+e]},fg=function(e){return Rr(e,"getBoundingClientRect")||(us(e)?function(){return jl.width=st.innerWidth,jl.height=dh,jl}:function(){return er(e)})},BS=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Rr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?hg(s):e["client"+s])||0}},kS=function(e,t){return!t||~Ui.indexOf(e)?fg(e):function(){return jl}},Fi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Rr(e,n))?o()-fg(e)()[s]:us(e)?(Zn[n]||pt[n])-hg(i):e[n]-e["offset"+i])},kl=function(e,t){for(var n=0;n<Qs.length;n+=3)(!t||~t.indexOf(Qs[n+1]))&&e(Qs[n],Qs[n+1],Qs[n+2])},jn=function(e){return typeof e=="string"},xn=function(e){return typeof e=="function"},Ma=function(e){return typeof e=="number"},hs=function(e){return typeof e=="object"},Ea=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},_h=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},to=Math.abs,dg="left",pg="top",vh="right",xh="bottom",fs="width",ds="height",Ta="Right",ba="Left",wa="Top",Aa="Bottom",qt="padding",hi="margin",no="Width",Sh="Height",jt="px",fi=function(e){return st.getComputedStyle(e)},zS=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},mg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&fi(e)[lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},zl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},gg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},VS=function(e){return function(t){return De.utils.snap(gg(e),t)}},yh=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},HS=function(e){return function(t,n){return yh(gg(e))(t,n.direction)}},Vl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Hl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},_g={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Gl={toggleActions:"play",anticipatePin:0},Wl={top:0,left:0,center:.5,bottom:1,right:1},Xl=function(e,t){if(jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Wl?Wl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ql=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=bt.createElement("div"),_=us(n)||Rr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?pt:n,x=e.indexOf("start")!==-1,M=x?l:u,S="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||c)&&_?"fixed;":"absolute;"),(p||c||!_)&&(S+=(i===Zt?vh:xh)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=S,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Yl(m,0,i,x),m},Yl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+no]=1,s["border"+a+no]=0,s[n.p]=t+"px",De.set(e,s)},nt=[],Mh={},Ca,vg=function(){return vn()-ui>34&&(Ca||(Ca=requestAnimationFrame(tr)))},io=function(){(!Ln||!Ln.isPressed||Ln.startX>pt.clientWidth)&&(rt.cache++,Ln?Ca||(Ca=requestAnimationFrame(tr)):tr(),ui||ms("scrollStart"),ui=vn())},Eh=function(){rg=st.innerWidth,ig=st.innerHeight},Ra=function(e){rt.cache++,(e===!0||!_n&&!ng&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!uh||rg!==st.innerWidth||Math.abs(st.innerHeight-ig)>st.innerHeight*.25))&&Ul.restart(!0)},ps={},GS=[],xg=function r(){return on(Oe,"scrollEnd",r)||_s(!0)},ms=function(e){return ps[e]&&ps[e].map(function(t){return t()})||GS},Jn=[],Sg=function(e){for(var t=0;t<Jn.length;t+=5)(!e||Jn[t+4]&&Jn[t+4].query===e)&&(Jn[t].style.cssText=Jn[t+1],Jn[t].getBBox&&Jn[t].setAttribute("transform",Jn[t+2]||""),Jn[t+3].uncache=1)},Th=function(e,t){var n;for(Pn=0;Pn<nt.length;Pn++)n=nt[Pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ol=!0,t&&Sg(t),t||ms("revert")},yg=function(e,t){rt.cache++,(t||!Dn)&&rt.forEach(function(n){return xn(n)&&n.cacheID++&&(n.rec=0)}),jn(e)&&(st.history.scrollRestoration=fh=e)},Dn,gs=0,Mg,WS=function(){if(Mg!==gs){var e=Mg=gs;requestAnimationFrame(function(){return e===gs&&_s(!0)})}},Eg=function(){pt.appendChild(eo),dh=!Ln&&eo.offsetHeight||st.innerHeight,pt.removeChild(eo)},Tg=function(e){return _a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},_s=function(e,t){if(Zn=bt.documentElement,pt=bt.body,ah=[st,bt,Zn,pt],ui&&!e&&!Ol){sn(Oe,"scrollEnd",xg);return}Eg(),Dn=Oe.isRefreshing=!0,rt.forEach(function(i){return xn(i)&&++i.cacheID&&(i.rec=i())});var n=ms("refreshInit");tg&&Oe.sort(),t||Th(),rt.forEach(function(i){xn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),Ol=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ph=1,Tg(!0),nt.forEach(function(i){var s=Fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Tg(!1),ph=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){xn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),yg(fh,1),Ul.pause(),gs++,Dn=2,tr(2),nt.forEach(function(i){return xn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=Oe.isRefreshing=!1,ms("refresh")},bh=0,$l=1,Pa,tr=function(e){if(e===2||!Dn&&!Ol){Oe.isUpdating=!0,Pa&&Pa.update(0);var t=nt.length,n=vn(),i=n-gh>=50,s=t&&nt[0].scroll();if($l=bh>s?-1:1,Dn||(bh=s),i&&(ui&&!Fl&&n-ui>200&&(ui=0,ms("scrollEnd")),xa=gh,gh=n),$l<0){for(Pn=t;Pn-- >0;)nt[Pn]&&nt[Pn].update(0,i);$l=1}else for(Pn=0;Pn<t;Pn++)nt[Pn]&&nt[Pn].update(0,i);Oe.isUpdating=!1}Ca=0},wh=[dg,pg,xh,vh,hi+Aa,hi+Ta,hi+wa,hi+ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Kl=wh.concat([fs,ds,"boxSizing","max"+no,"max"+Sh,"position",hi,qt,qt+wa,qt+Ta,qt+Aa,qt+ba]),XS=function(e,t,n){ro(n);var i=e._gsap;if(i.spacerIsNative)ro(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ah=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=wh.length,o=t.style,a=e.style,c;s--;)c=wh[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[xh]=a[vh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[fs]=zl(e,Rn)+jt,o[ds]=zl(e,Zt)+jt,o[qt]=a[hi]=a[pg]=a[dg]="0",ro(i),a[fs]=a["max"+no]=n[fs],a[ds]=a["max"+Sh]=n[ds],a[qt]=n[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qS=/([A-Z])/g,ro=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(qS,"-$1").toLowerCase())}},Zl=function(e){for(var t=Kl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Kl[s],n[Kl[s]]);return i.t=e,i},YS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},jl={left:0,top:0},bg=function(e,t,n,i,s,o,a,c,l,u,h,f,d,m){xn(e)&&(e=e(c)),jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Xl("0"+e.substr(3),n):0));var _=d?d.time():0,p,g,x;if(d&&d.seek(0),isNaN(e)||(e=+e),Ma(e))d&&(e=De.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Yl(a,n,i,!0);else{xn(t)&&(t=t(c));var M=(e||"0").split(" "),S,b,T,C;x=zn(t,c)||pt,S=er(x)||{},(!S||!S.left&&!S.top)&&fi(x).display==="none"&&(C=x.style.display,x.style.display="block",S=er(x),C?x.style.display=C:x.style.removeProperty("display")),b=Xl(M[0],S[i.d]),T=Xl(M[1]||"0",n),e=S[i.p]-l[i.p]-u+b+s-T,a&&Yl(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(m&&(c[m]=e||-.001,e<0&&(e=0)),o){var v=e+n,E=o._isStart;p="scroll"+i.d2,Yl(o,v,i,E&&v>20||!E&&(h?Math.max(pt[p],Zn[p]):o.parentNode[p])<=v+1),h&&(l=er(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+jt))}return d&&x&&(p=er(x),d.seek(f),g=er(x),d._caScrollDist=p[i.p]-g[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},$S=/(webkit|moz|length|cssText|inset)/i,wg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=fi(e);for(o in a)!+o&&!$S.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},Ag=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Jl=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},Cg=function(e,t){var n=Pr(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,h){var f=o.tween,d=c.onComplete,m={};l=l||n();var _=Ag(n,l,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,f&&f.kill(),c[i]=a,c.inherit=!1,c.modifiers=m,m[i]=function(){return _(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){rt.cache++,o.tween&&tr()},c.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=De.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(e,"wheel",n.wheelHandler),Oe.isTouch&&sn(e,"touchmove",n.wheelHandler),s},Oe=(function(){function r(t,n){Js||r.register(De),hh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sa){this.update=this.refresh=this.kill=Ni;return}n=mg(jn(n)||Ma(n)||n.nodeType?{trigger:n}:n,Gl);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,M=s.once,S=s.snap,b=s.pinReparent,T=s.pinSpacer,C=s.containerAnimation,v=s.fastScrollEnd,E=s.preventOverlaps,w=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Zt,R=!h&&h!==0,L=zn(n.scroller||st),N=De.core.getCache(L),O=us(L),I=("pinType"in n?n.pinType:Rr(L,"pinType")||O&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=R&&n.toggleActions.split(" "),K="markers"in n?n.markers:Gl.markers,Z=O?0:parseFloat(fi(L)["border"+w.p2+no])||0,D=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(D)},ce=BS(L,O,w),ke=kS(L,O),Ie=0,Se=0,$=0,le=Pr(L,w),te,Re,Ne,we,Je,pe,Le,je,Ve,W,$e,Pt,k,ve,We,ut,_e,et,P,y,H,J,ne,me,se,j,ee,ye,Ce,ge,he,xe,Xe,Ke,F,ue,Q,Ee,fe;if(D._startClamp=D._endClamp=!1,D._dir=w,p*=45,D.scroller=L,D.scroll=C?C.time.bind(C):le,we=le(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(tg=1,n.refreshPriority===-9999&&(Pa=D)),N.tweenScroll=N.tweenScroll||{top:Cg(L,Zt),left:Cg(L,Rn)},D.tweenTo=te=N.tweenScroll[w.p],D.scrubDuration=function(oe){Xe=Ma(oe)&&oe,Xe?xe?xe.duration(oe):xe=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xe,paused:!0,onComplete:function(){return g&&g(D)}}):(xe&&xe.progress(1).kill(),xe=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),ge=0,c||(c=i.vars.id)),S&&((!hs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in pt.style&&De.set(O?[pt,Zn]:L,{scrollBehavior:"auto"}),rt.forEach(function(oe){return xn(oe)&&oe.target===(O?bt.scrollingElement||Zn:L)&&(oe.smooth=!1)}),Ne=xn(S.snapTo)?S.snapTo:S.snapTo==="labels"?VS(i):S.snapTo==="labelsDirectional"?HS(i):S.directional!==!1?function(oe,Ge){return yh(S.snapTo)(oe,vn()-Se<500?0:Ge.direction)}:De.utils.snap(S.snapTo),Ke=S.duration||{min:.1,max:2},Ke=hs(Ke)?va(Ke.min,Ke.max):va(Ke,Ke),F=De.delayedCall(S.delay||Xe/2||.1,function(){var oe=le(),Ge=vn()-Se<500,Ue=te.tween;if((Ge||Math.abs(D.getVelocity())<10)&&!Ue&&!Fl&&Ie!==oe){var Ye=(oe-pe)/ve,$t=i&&!R?i.totalProgress():Ye,ot=Ge?0:($t-he)/(vn()-xa)*1e3||0,Dt=De.utils.clamp(-Ye,1-Ye,to(ot/2)*ot/.185),It=Ye+(S.inertia===!1?0:Dt),wt,Mt,mt=S,Tn=mt.onStart,At=mt.onInterrupt,un=mt.onComplete;if(wt=Ne(It,D),Ma(wt)||(wt=It),Mt=Math.max(0,Math.round(pe+wt*ve)),oe<=Le&&oe>=pe&&Mt!==oe){if(Ue&&!Ue._initted&&Ue.data<=to(Mt-oe))return;S.inertia===!1&&(Dt=wt-Ye),te(Mt,{duration:Ke(to(Math.max(to(It-$t),to(wt-$t))*.185/ot/.05||0)),ease:S.ease||"power3",data:to(Mt-oe),onInterrupt:function(){return F.restart(!0)&&At&&At(D)},onComplete:function(){D.update(),Ie=le(),i&&!R&&(xe?xe.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),ge=he=i&&!R?i.totalProgress():D.progress,x&&x(D),un&&un(D)}},oe,Dt*ve,Mt-oe-Dt*ve),Tn&&Tn(D,te.tween)}}else D.isActive&&Ie!==oe&&F.restart(!0)}).pause()),c&&(Mh[c]=D),f=D.trigger=zn(f||d!==!0&&d),fe=f&&f._gsap&&f._gsap.stRevert,fe&&(fe=fe(D)),d=d===!0?f:zn(d),jn(a)&&(a={targets:f,className:a}),d&&(m===!1||m===hi||(m=!m&&d.parentNode&&d.parentNode.style&&fi(d.parentNode).display==="flex"?!1:qt),D.pin=d,Re=De.core.getCache(d),Re.spacer?We=Re.pinState:(T&&(T=zn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Re.spacerIsNative=!!T,T&&(Re.spacerState=Zl(T))),Re.spacer=et=T||bt.createElement("div"),et.classList.add("pin-spacer"),c&&et.classList.add("pin-spacer-"+c),Re.pinState=We=Zl(d)),n.force3D!==!1&&De.set(d,{force3D:!0}),D.spacer=et=Re.spacer,Ce=fi(d),me=Ce[m+w.os2],y=De.getProperty(d),H=De.quickSetter(d,w.a,jt),Ah(d,et,Ce),_e=Zl(d)),K){Pt=hs(K)?mg(K,_g):_g,W=ql("scroller-start",c,L,w,Pt,0),$e=ql("scroller-end",c,L,w,Pt,0,W),P=W["offset"+w.op.d2];var ie=zn(Rr(L,"content")||L);je=this.markerStart=ql("start",c,ie,w,Pt,P,0,C),Ve=this.markerEnd=ql("end",c,ie,w,Pt,P,0,C),C&&(Ee=De.quickSetter([je,Ve],w.a,jt)),!I&&!(Ui.length&&Rr(L,"fixedMarkers")===!0)&&(zS(O?pt:L),De.set([W,$e],{force3D:!0}),j=De.quickSetter(W,w.a,jt),ye=De.quickSetter($e,w.a,jt))}if(C){var ae=C.vars.onUpdate,de=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){D.update(0,0,1),ae&&ae.apply(C,de||[])})}if(D.previous=function(){return nt[nt.indexOf(D)-1]},D.next=function(){return nt[nt.indexOf(D)+1]},D.revert=function(oe,Ge){if(!Ge)return D.kill(!0);var Ue=oe!==!1||!D.enabled,Ye=_n;Ue!==D.isReverted&&(Ue&&(ue=Math.max(le(),D.scroll.rec||0),$=D.progress,Q=i&&i.progress()),je&&[je,Ve,W,$e].forEach(function($t){return $t.style.display=Ue?"none":"block"}),Ue&&(_n=D,D.update(Ue)),d&&(!b||!D.isActive)&&(Ue?XS(d,et,We):Ah(d,et,fi(d),se)),Ue||D.update(Ue),_n=Ye,D.isReverted=Ue)},D.refresh=function(oe,Ge,Ue,Ye){if(!((_n||!D.enabled)&&!Ge)){if(d&&oe&&ui){sn(r,"scrollEnd",xg);return}!Dn&&re&&re(D),_n=D,te.tween&&!Ue&&(te.tween.kill(),te.tween=0),xe&&xe.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(be){return be.vars.immediateRender&&be.render(0,!0,!0)})),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var $t=ce(),ot=ke(),Dt=C?C.duration():Fi(L,w),It=ve<=.01||!ve,wt=0,Mt=Ye||0,mt=hs(Ue)?Ue.end:n.end,Tn=n.endTrigger||f,At=hs(Ue)?Ue.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),un=D.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,D),ri=f&&Math.max(0,nt.indexOf(D))||0,Kt=ri,nn,hn,vr,Ko,fn,Vt,_i,A,V,q,G,X,Me;for(K&&hs(Ue)&&(X=De.getProperty(W,w.p),Me=De.getProperty($e,w.p));Kt-- >0;)Vt=nt[Kt],Vt.end||Vt.refresh(0,1)||(_n=D),_i=Vt.pin,_i&&(_i===f||_i===d||_i===un)&&!Vt.isReverted&&(q||(q=[]),q.unshift(Vt),Vt.revert(!0,!0)),Vt!==nt[Kt]&&(ri--,Kt--);for(xn(At)&&(At=At(D)),At=sg(At,"start",D),pe=bg(At,f,$t,w,le(),je,W,D,ot,Z,I,Dt,C,D._startClamp&&"_startClamp")||(d?-.001:0),xn(mt)&&(mt=mt(D)),jn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(jn(At)?At.split(" ")[0]:"")+mt:(wt=Xl(mt.substr(2),$t),mt=jn(At)?At:(C?De.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,pe):pe)+wt,Tn=f)),mt=sg(mt,"end",D),Le=Math.max(pe,bg(mt||(Tn?"100% 0":Dt),Tn,$t,w,le()+wt,Ve,$e,D,ot,Z,I,Dt,C,D._endClamp&&"_endClamp"))||-.001,wt=0,Kt=ri;Kt--;)Vt=nt[Kt],_i=Vt.pin,_i&&Vt.start-Vt._pinPush<=pe&&!C&&Vt.end>0&&(nn=Vt.end-(D._startClamp?Math.max(0,Vt.start):Vt.start),(_i===f&&Vt.start-Vt._pinPush<pe||_i===un)&&isNaN(At)&&(wt+=nn*(1-Vt.progress)),_i===d&&(Mt+=nn));if(pe+=wt,Le+=wt,D._startClamp&&(D._startClamp+=wt),D._endClamp&&!Dn&&(D._endClamp=Le||-.001,Le=Math.min(Le,Fi(L,w))),ve=Le-pe||(pe-=.01)&&.001,It&&($=De.utils.clamp(0,1,De.utils.normalize(pe,Le,ue))),D._pinPush=Mt,je&&wt&&(nn={},nn[w.a]="+="+wt,un&&(nn[w.p]="-="+le()),De.set([je,Ve],nn)),d&&!(ph&&D.end>=Fi(L,w)))nn=fi(d),Ko=w===Zt,vr=le(),J=parseFloat(y(w.a))+Mt,!Dt&&Le>1&&(G=(O?bt.scrollingElement||Zn:L).style,G={style:G,value:G["overflow"+w.a.toUpperCase()]},O&&fi(pt)["overflow"+w.a.toUpperCase()]!=="scroll"&&(G.style["overflow"+w.a.toUpperCase()]="scroll")),Ah(d,et,nn),_e=Zl(d),hn=er(d,!0),A=I&&Pr(L,Ko?Rn:Zt)(),m?(se=[m+w.os2,ve+Mt+jt],se.t=et,Kt=m===qt?zl(d,w)+ve+Mt:0,Kt&&(se.push(w.d,Kt+jt),et.style.flexBasis!=="auto"&&(et.style.flexBasis=Kt+jt)),ro(se),un&&nt.forEach(function(be){be.pin===un&&be.vars.pinSpacing!==!1&&(be._subPinOffset=!0)}),I&&le(ue)):(Kt=zl(d,w),Kt&&et.style.flexBasis!=="auto"&&(et.style.flexBasis=Kt+jt)),I&&(fn={top:hn.top+(Ko?vr-pe:A)+jt,left:hn.left+(Ko?A:vr-pe)+jt,boxSizing:"border-box",position:"fixed"},fn[fs]=fn["max"+no]=Math.ceil(hn.width)+jt,fn[ds]=fn["max"+Sh]=Math.ceil(hn.height)+jt,fn[hi]=fn[hi+wa]=fn[hi+Ta]=fn[hi+Aa]=fn[hi+ba]="0",fn[qt]=nn[qt],fn[qt+wa]=nn[qt+wa],fn[qt+Ta]=nn[qt+Ta],fn[qt+Aa]=nn[qt+Aa],fn[qt+ba]=nn[qt+ba],ut=YS(We,fn,b),Dn&&le(0)),i?(V=i._initted,ch(1),i.render(i.duration(),!0,!0),ne=y(w.a)-J+ve+Mt,ee=Math.abs(ve-ne)>1,I&&ee&&ut.splice(ut.length-2,2),i.render(0,!0,!0),V||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ch(0)):ne=ve,G&&(G.value?G.style["overflow"+w.a.toUpperCase()]=G.value:G.style.removeProperty("overflow-"+w.a));else if(f&&le()&&!C)for(hn=f.parentNode;hn&&hn!==pt;)hn._pinOffset&&(pe-=hn._pinOffset,Le-=hn._pinOffset),hn=hn.parentNode;q&&q.forEach(function(be){return be.revert(!1,!0)}),D.start=pe,D.end=Le,we=Je=Dn?ue:le(),!C&&!Dn&&(we<ue&&le(ue),D.scroll.rec=0),D.revert(!1,!0),Se=vn(),F&&(Ie=-1,F.restart(!0)),_n=0,i&&R&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(It||$!==D.progress||C||_||i&&!i._initted)&&(i&&!R&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(C&&pe<-.001&&!$?De.utils.normalize(pe,Le,0):$,!0),D.progress=It||(we-pe)/ve===$?0:$),d&&m&&(et._pinOffset=Math.round(D.progress*ne)),xe&&xe.invalidate(),isNaN(X)||(X-=De.getProperty(W,w.p),Me-=De.getProperty($e,w.p),Jl(W,w,X),Jl(je,w,X-(Ye||0)),Jl($e,w,Me),Jl(Ve,w,Me-(Ye||0))),It&&!Dn&&D.update(),u&&!Dn&&!k&&(k=!0,u(D),k=!1)}},D.getVelocity=function(){return(le()-Je)/(vn()-xa)*1e3||0},D.endAnimation=function(){Ea(D.callbackAnimation),i&&(xe?xe.progress(1):i.paused()?R||Ea(i,D.direction<0,1):Ea(i,i.reversed()))},D.labelToScroll=function(oe){return i&&i.labels&&(pe||D.refresh()||pe)+i.labels[oe]/i.duration()*ve||0},D.getTrailing=function(oe){var Ge=nt.indexOf(D),Ue=D.direction>0?nt.slice(0,Ge).reverse():nt.slice(Ge+1);return(jn(oe)?Ue.filter(function(Ye){return Ye.vars.preventOverlaps===oe}):Ue).filter(function(Ye){return D.direction>0?Ye.end<=pe:Ye.start>=Le})},D.update=function(oe,Ge,Ue){if(!(C&&!Ue&&!oe)){var Ye=Dn===!0?ue:D.scroll(),$t=oe?0:(Ye-pe)/ve,ot=$t<0?0:$t>1?1:$t||0,Dt=D.progress,It,wt,Mt,mt,Tn,At,un,ri;if(Ge&&(Je=we,we=C?le():Ye,S&&(he=ge,ge=i&&!R?i.totalProgress():ot)),p&&d&&!_n&&!Bl&&ui&&(!ot&&pe<Ye+(Ye-Je)/(vn()-xa)*p?ot=1e-4:ot===1&&Le>Ye+(Ye-Je)/(vn()-xa)*p&&(ot=.9999)),ot!==Dt&&D.enabled){if(It=D.isActive=!!ot&&ot<1,wt=!!Dt&&Dt<1,At=It!==wt,Tn=At||!!ot!=!!Dt,D.direction=ot>Dt?1:-1,D.progress=ot,Tn&&!_n&&(Mt=ot&&!Dt?0:ot===1?1:Dt===1?2:3,R&&(mt=!At&&B[Mt+1]!=="none"&&B[Mt+1]||B[Mt],ri=i&&(mt==="complete"||mt==="reset"||mt in i))),E&&(At||ri)&&(ri||h||!i)&&(xn(E)?E(D):D.getTrailing(E).forEach(function(vr){return vr.endAnimation()})),R||(xe&&!_n&&!Bl?(xe._dp._time-xe._start!==xe._time&&xe.render(xe._dp._time-xe._start),xe.resetTo?xe.resetTo("totalProgress",ot,i._tTime/i._tDur):(xe.vars.totalProgress=ot,xe.invalidate().restart())):i&&i.totalProgress(ot,!!(_n&&(Se||oe)))),d){if(oe&&m&&(et.style[m+w.os2]=me),!I)H(ya(J+ne*ot));else if(Tn){if(un=!oe&&ot>Dt&&Le+1>Ye&&Ye+1>=Fi(L,w),b)if(!oe&&(It||un)){var Kt=er(d,!0),nn=Ye-pe;wg(d,pt,Kt.top+(w===Zt?nn:0)+jt,Kt.left+(w===Zt?0:nn)+jt)}else wg(d,et);ro(It||un?ut:_e),ee&&ot<1&&It||H(J+(ot===1&&!un?ne:0))}}S&&!te.tween&&!_n&&!Bl&&F.restart(!0),a&&(At||M&&ot&&(ot<1||!mh))&&_a(a.targets).forEach(function(vr){return vr.classList[It||M?"add":"remove"](a.className)}),o&&!R&&!oe&&o(D),Tn&&!_n?(R&&(ri&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(D)),(At||!mh)&&(l&&At&&_h(D,l),z[Mt]&&_h(D,z[Mt]),M&&(ot===1?D.kill(!1,1):z[Mt]=0),At||(Mt=ot===1?1:3,z[Mt]&&_h(D,z[Mt]))),v&&!It&&Math.abs(D.getVelocity())>(Ma(v)?v:2500)&&(Ea(D.callbackAnimation),xe?xe.progress(1):Ea(i,mt==="reverse"?1:!ot,1))):R&&o&&!_n&&o(D)}if(ye){var hn=C?Ye/C.duration()*(C._caScrollDist||0):Ye;j(hn+(W._isFlipped?1:0)),ye(hn)}Ee&&Ee(-Ye/C.duration()*(C._caScrollDist||0))}},D.enable=function(oe,Ge){D.enabled||(D.enabled=!0,sn(L,"resize",Ra),O||sn(L,"scroll",io),re&&sn(r,"refreshInit",re),oe!==!1&&(D.progress=$=0,we=Je=Ie=le()),Ge!==!1&&D.refresh())},D.getTween=function(oe){return oe&&te?te.tween:xe},D.setPositions=function(oe,Ge,Ue,Ye){if(C){var $t=C.scrollTrigger,ot=C.duration(),Dt=$t.end-$t.start;oe=$t.start+Dt*oe/ot,Ge=$t.start+Dt*Ge/ot}D.refresh(!1,!1,{start:og(oe,Ue&&!!D._startClamp),end:og(Ge,Ue&&!!D._endClamp)},Ye),D.update()},D.adjustPinSpacing=function(oe){if(se&&oe){var Ge=se.indexOf(w.d)+1;se[Ge]=parseFloat(se[Ge])+oe+jt,se[1]=parseFloat(se[1])+oe+jt,ro(se)}},D.disable=function(oe,Ge){if(D.enabled&&(oe!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Ge||xe&&xe.pause(),ue=0,Re&&(Re.uncache=1),re&&on(r,"refreshInit",re),F&&(F.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!O)){for(var Ue=nt.length;Ue--;)if(nt[Ue].scroller===L&&nt[Ue]!==D)return;on(L,"resize",Ra),O||on(L,"scroll",io)}},D.kill=function(oe,Ge){D.disable(oe,Ge),xe&&!Ge&&xe.kill(),c&&delete Mh[c];var Ue=nt.indexOf(D);Ue>=0&&nt.splice(Ue,1),Ue===Pn&&$l>0&&Pn--,Ue=0,nt.forEach(function(Ye){return Ye.scroller===D.scroller&&(Ue=1)}),Ue||Dn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,oe&&i.revert({kill:!1}),Ge||i.kill()),je&&[je,Ve,W,$e].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),Pa===D&&(Pa=0),d&&(Re&&(Re.uncache=1),Ue=0,nt.forEach(function(Ye){return Ye.pin===d&&Ue++}),Ue||(Re.spacer=0)),n.onKill&&n.onKill(D)},nt.push(D),D.enable(!1,!1),fe&&fe(D),i&&i.add&&!ve){var He=D.update;D.update=function(){D.update=He,rt.cache++,pe||Le||D.refresh()},De.delayedCall(.01,D.update),ve=.01,pe=Le=0}else D.refresh();d&&WS()},r.register=function(n){return Js||(De=n||ug(),cg()&&window.document&&r.enable(),Js=Sa),Js},r.defaults=function(n){if(n)for(var i in n)Gl[i]=n[i];return Gl},r.disable=function(n,i){Sa=0,nt.forEach(function(o){return o[i?"kill":"disable"](n)}),on(st,"wheel",io),on(bt,"scroll",io),clearInterval(Nl),on(bt,"touchcancel",Ni),on(pt,"touchstart",Ni),Vl(on,bt,"pointerdown,touchstart,mousedown",ag),Vl(on,bt,"pointerup,touchend,mouseup",lg),Ul.kill(),kl(on);for(var s=0;s<rt.length;s+=3)Hl(on,rt[s],rt[s+1]),Hl(on,rt[s],rt[s+2])},r.enable=function(){if(st=window,bt=document,Zn=bt.documentElement,pt=bt.body,De&&(_a=De.utils.toArray,va=De.utils.clamp,hh=De.core.context||Ni,ch=De.core.suppressOverwrites||Ni,fh=st.history.scrollRestoration||"auto",bh=st.pageYOffset||0,De.core.globals("ScrollTrigger",r),pt)){Sa=1,eo=document.createElement("div"),eo.style.height="100vh",eo.style.position="absolute",Eg(),OS(),kt.register(De),r.isTouch=kt.isTouch,Lr=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),uh=kt.isTouch===1,sn(st,"wheel",io),ah=[st,bt,Zn,pt],De.matchMedia&&(r.matchMedia=function(l){var u=De.matchMedia(),h;for(h in l)u.add(h,l[h]);return u},De.addEventListener("matchMediaInit",function(){return Th()}),De.addEventListener("matchMediaRevert",function(){return Sg()}),De.addEventListener("matchMedia",function(){_s(0,1),ms("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return Eh(),Eh})),Eh(),sn(bt,"scroll",io);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,o=De.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=er(pt),Zt.m=Math.round(a.top+Zt.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),Nl=setInterval(vg,250),De.delayedCall(.5,function(){return Bl=0}),sn(bt,"touchcancel",Ni),sn(pt,"touchstart",Ni),Vl(sn,bt,"pointerdown,touchstart,mousedown",ag),Vl(sn,bt,"pointerup,touchend,mouseup",lg),lh=De.utils.checkPrefix("transform"),Kl.push(lh),Js=vn(),Ul=De.delayedCall(.2,_s).pause(),Qs=[bt,"visibilitychange",function(){var l=st.innerWidth,u=st.innerHeight;bt.hidden?(Qm=l,eg=u):(Qm!==l||eg!==u)&&Ra()},bt,"DOMContentLoaded",_s,st,"load",_s,st,"resize",Ra],kl(sn),nt.forEach(function(l){return l.enable(0,1)}),c=0;c<rt.length;c+=3)Hl(on,rt[c],rt[c+1]),Hl(on,rt[c],rt[c+2])}},r.config=function(n){"limitCallbacks"in n&&(mh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Nl)||(Nl=i)&&setInterval(vg,i),"ignoreMobileResize"in n&&(uh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(kl(on)||kl(sn,n.autoRefreshEvents||"none"),ng=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),o=rt.indexOf(s),a=us(s);~o&&rt.splice(o,a?6:2),i&&(a?Ui.unshift(st,i,pt,i,Zn,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(jn(n)?zn(n):n).getBoundingClientRect(),a=o[s?fs:ds]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){jn(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[s?fs:ds],c=i==null?a/2:i in Wl?Wl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/st.innerWidth:(o.top+c)/st.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ps.killAll||[];ps={},i.forEach(function(s){return s()})}},r})();Oe.version="3.13.0",Oe.saveStyles=function(r){return r?_a(r).forEach(function(e){if(e&&e.style){var t=Jn.indexOf(e);t>=0&&Jn.splice(t,5),Jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),hh())}}):Jn},Oe.revert=function(r,e){return Th(!r,e)},Oe.create=function(r,e){return new Oe(r,e)},Oe.refresh=function(r){return r?Ra(!0):(Js||Oe.register())&&_s(!0)},Oe.update=function(r){return++rt.cache&&tr(r===!0?2:0)},Oe.clearScrollMemory=yg,Oe.maxScroll=function(r,e){return Fi(r,e?Rn:Zt)},Oe.getScrollFunc=function(r,e){return Pr(zn(r),e?Rn:Zt)},Oe.getById=function(r){return Mh[r]},Oe.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})},Oe.isScrolling=function(){return!!ui},Oe.snapDirectional=yh,Oe.addEventListener=function(r,e){var t=ps[r]||(ps[r]=[]);~t.indexOf(e)||t.push(e)},Oe.removeEventListener=function(r,e){var t=ps[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},Oe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var h=[],f=[],d=De.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&xn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return xn(s)&&(s=s(),sn(Oe,"refresh",function(){return s=e.batchMax()})),_a(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(Oe.create(l))}),t};var Rg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ch=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===Zn&&r(pt,t)},Ql={auto:1,scroll:1},KS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||De.core.getCache(s),a=vn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ql[(c=fi(s)).overflowY]||Ql[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!us(s)&&(Ql[(c=fi(s)).overflowY]||Ql[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Pg=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&KS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(bt,kt.eventTypes[0],Dg,!1,!0)},onDisable:function(){return on(bt,kt.eventTypes[0],Dg,!0)}})},ZS=/(input|label|select|textarea)/i,Lg,Dg=function(e){var t=ZS.test(e.target.tagName);(t||Lg)&&(e._gsapAllow=!0,Lg=t)},jS=function(e){hs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=zn(e.target)||Zn,u=De.core.globals().ScrollSmoother,h=u&&u.get(),f=Lr&&(e.content&&zn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Pr(l,Zt),m=Pr(l,Rn),_=1,p=(kt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,g=0,x=xn(i)?function(){return i(a)}:function(){return i||2.8},M,S,b=Pg(l,e.type,!0,s),T=function(){return S=!1},C=Ni,v=Ni,E=function(){c=Fi(l,Zt),v=va(Lr?1:0,c),n&&(C=va(0,Fi(l,Rn))),M=gs},w=function(){f._gsap.y=ya(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(S){requestAnimationFrame(T);var K=ya(a.deltaY/2),Z=v(d.v-K);if(f&&Z!==d.v+d.offset){d.offset=Z-d.v;var D=ya((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=rt.cache,tr()}return!0}d.offset&&w(),S=!0},L,N,O,I,z=function(){E(),L.isActive()&&L.vars.scrollY>c&&(d()>c?L.progress(1)&&d(c):L.resetTo("scrollY",c))};return f&&De.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return Lr&&B.type==="touchmove"&&R()||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){S=!1;var B=_;_=ya((st.visualViewport&&st.visualViewport.scale||1)/p),L.pause(),B!==_&&Ch(l,_>1.01?!0:n?!1:"x"),N=m(),O=d(),E(),M=gs},e.onRelease=e.onGestureStart=function(B,K){if(d.offset&&w(),!K)I.restart(!0);else{rt.cache++;var Z=x(),D,re;n&&(D=m(),re=D+Z*.05*-B.velocityX/.227,Z*=Rg(m,D,re,Fi(l,Rn)),L.vars.scrollX=C(re)),D=d(),re=D+Z*.05*-B.velocityY/.227,Z*=Rg(d,D,re,Fi(l,Zt)),L.vars.scrollY=v(re),L.invalidate().duration(Z).play(.01),(Lr&&L.vars.scrollY>=c||D>=c-1)&&De.to({},{onUpdate:z,duration:Z})}o&&o(B)},e.onWheel=function(){L._ts&&L.pause(),vn()-g>1e3&&(M=0,g=vn())},e.onChange=function(B,K,Z,D,re){if(gs!==M&&E(),K&&n&&m(C(D[2]===K?N+(B.startX-B.x):m()+K-D[1])),Z){d.offset&&w();var ce=re[2]===Z,ke=ce?O+B.startY-B.y:d()+Z-re[1],Ie=v(ke);ce&&ke!==Ie&&(O+=Ie-ke),d(Ie)}(Z||K)&&tr()},e.onEnable=function(){Ch(l,n?!1:"x"),Oe.addEventListener("refresh",z),sn(st,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),b.enable()},e.onDisable=function(){Ch(l,!0),on(st,"resize",z),Oe.removeEventListener("refresh",z),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new kt(e),a.iOS=Lr,Lr&&!d()&&d(1),Lr&&De.ticker.add(Ni),I=a._dc,L=De.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ag(d,d(),function(){return L.pause()})},onUpdate:tr,onComplete:I.vars.onComplete}),a};Oe.sort=function(r){if(xn(r))return nt.sort(r);var e=st.pageYOffset||0;return Oe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),nt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})},Oe.observe=function(r){return new kt(r)},Oe.normalizeScroll=function(r){if(typeof r>"u")return Ln;if(r===!0&&Ln)return Ln.enable();if(r===!1){Ln&&Ln.kill(),Ln=r;return}var e=r instanceof kt?r:jS(r);return Ln&&Ln.target===e.target&&Ln.kill(),us(e.target)&&(Ln=e),e},Oe.core={_getVelocityProp:oh,_inputObserver:Pg,_scrollers:rt,_proxies:Ui,bridge:{ss:function(){ui||ms("scrollStart"),ui=vn()},ref:function(){return _n}}},ug()&&De.registerPlugin(Oe);var JS="1.2.3";function Ig(r,e,t){return Math.max(r,Math.min(e,t))}function QS(r,e,t){return(1-t)*r+t*e}function ey(r,e,t,n){return QS(r,e,1-Math.exp(-t*n))}function ty(r,e){return(r%e+e)%e}var ny=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Ig(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=ey(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function iy(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var ry=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=iy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ug=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Ng=100/6,Dr={passive:!1},sy=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Dr),this.element.addEventListener("touchstart",this.onTouchStart,Dr),this.element.addEventListener("touchmove",this.onTouchMove,Dr),this.element.addEventListener("touchend",this.onTouchEnd,Dr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Ug;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Dr),this.element.removeEventListener("touchstart",this.onTouchStart,Dr),this.element.removeEventListener("touchmove",this.onTouchMove,Dr),this.element.removeEventListener("touchend",this.onTouchEnd,Dr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Ng:n===2?this.window.width:1,s=n===1?Ng:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},oy=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new ny;emitter=new Ug;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:c=T=>Math.min(1,1.001-Math.pow(2,-10*T)),lerp:l=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:x=!0,autoRaf:M=!1,anchors:S=!1,__experimental__naiveDimensions:b=!1}={}){window.lenisVersion=JS,(!r||r===document.documentElement)&&(r=window),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:x,autoRaf:M,anchors:S,__experimental__naiveDimensions:b},this.dimensions=new ry(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new sy(t,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(`#${n.split("#")[1]}`,i)}}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||c)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent;if(l.find(p=>p instanceof HTMLElement&&(typeof u=="function"&&u?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(f)>5;_&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:c,force:l=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!l)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const m=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?m.left:m.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):r=Ig(0,r,this.limit),r===this.targetScroll){a?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ty(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};let La=null;function ay(){const r=new oy({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2});La=r;function e(t){r.raf(t),requestAnimationFrame(e)}return requestAnimationFrame(e),r}let Fg="",Og="",ec=!1;function ly(){ec||(ec=!0,La&&La.stop(),Fg=document.documentElement.style.overflow,Og=document.body.style.overflow,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden")}function cy(){ec&&(ec=!1,document.documentElement.style.overflow=Fg,document.body.style.overflow=Og,La&&La.start())}function In(){if(!(this instanceof In))return new In;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var Da=window.document.documentElement,uy=Da.matches||Da.webkitMatchesSelector||Da.mozMatchesSelector||Da.oMatchesSelector||Da.msMatchesSelector;In.prototype.matchesSelector=function(r,e){return uy.call(r,e)},In.prototype.querySelectorAll=function(r,e){return e.querySelectorAll(r)},In.prototype.indexes=[];var hy=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;In.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(hy))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var fy=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;In.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(fy))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if(typeof t=="string")return t.split(/\s/);if(typeof t=="object"&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var dy=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;In.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(dy))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),In.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var Rh;typeof window.Map=="function"?Rh=window.Map:Rh=(function(){function r(){this.map={}}return r.prototype.get=function(e){return this.map[e+" "]},r.prototype.set=function(e,t){this.map[e+" "]=t},r})();var Bg=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function kg(r,e){r=r.slice(0).concat(r.default);var t=r.length,n,i,s,o,a=e,c,l,u=[];do if(Bg.exec(""),(s=Bg.exec(a))&&(a=s[3],s[2]||!a)){for(n=0;n<t;n++)if(l=r[n],c=l.selector(s[1])){for(i=u.length,o=!1;i--;)if(u[i].index===l&&u[i].key===c){o=!0;break}o||u.push({index:l,key:c});break}}while(s);return u}function py(r,e){var t,n,i;for(t=0,n=r.length;t<n;t++)if(i=r[t],e.isPrototypeOf(i))return i}In.prototype.logDefaultIndexUsed=function(){},In.prototype.add=function(r,e){var t,n,i,s,o,a,c,l,u=this.activeIndexes,h=this.selectors,f=this.selectorObjects;if(typeof r=="string"){for(t={id:this.uid++,selector:r,data:e},f[t.id]=t,c=kg(this.indexes,r),n=0;n<c.length;n++)l=c[n],s=l.key,i=l.index,o=py(u,i),o||(o=Object.create(i),o.map=new Rh,u.push(o)),i===this.indexes.default&&this.logDefaultIndexUsed(t),a=o.map.get(s),a||(a=[],o.map.set(s,a)),a.push(t);this.size++,h.push(r)}},In.prototype.remove=function(r,e){if(typeof r=="string"){var t,n,i,s,o,a,c,l,u=this.activeIndexes,h=this.selectors=[],f=this.selectorObjects,d={},m=arguments.length===1;for(t=kg(this.indexes,r),i=0;i<t.length;i++)for(n=t[i],s=u.length;s--;)if(a=u[s],n.index.isPrototypeOf(a)){if(c=a.map.get(n.key),c)for(o=c.length;o--;)l=c[o],l.selector===r&&(m||l.data===e)&&(c.splice(o,1),d[l.id]=!0);break}for(i in d)delete f[i],this.size--;for(i in f)h.push(f[i].selector)}};function zg(r,e){return r.id-e.id}In.prototype.queryAll=function(r){if(!this.selectors.length)return[];var e={},t=[],n=this.querySelectorAll(this.selectors.join(", "),r),i,s,o,a,c,l,u,h;for(i=0,o=n.length;i<o;i++)for(c=n[i],l=this.matches(c),s=0,a=l.length;s<a;s++)h=l[s],e[h.id]?u=e[h.id]:(u={id:h.id,selector:h.selector,data:h.data,elements:[]},e[h.id]=u,t.push(u)),u.elements.push(c);return t.sort(zg)},In.prototype.matches=function(r){if(!r)return[];var e,t,n,i,s,o,a,c,l,u,h,f=this.activeIndexes,d={},m=[];for(e=0,i=f.length;e<i;e++)if(a=f[e],c=a.element(r),c){for(t=0,s=c.length;t<s;t++)if(l=a.map.get(c[t]))for(n=0,o=l.length;n<o;n++)u=l[n],h=u.id,!d[h]&&this.matchesSelector(r,u.selector)&&(d[h]=!0,m.push(u))}return m.sort(zg)};const so={},Ir={},Ph=["mouseenter","mouseleave","pointerenter","pointerleave","blur","focus"];function Vg(r){Ir[r]===void 0&&(Ir[r]=new Set)}function my(r,e){Ir[r]&&Ir[r].forEach(t=>{t(...e)})}function Hg(r){return typeof r=="string"?document.querySelectorAll(r):r}function tc(r){let e=gy(so[r.type],r.target);if(e.length)for(let t=0;t<e.length;t++)for(let n=0;n<e[t].stack.length;n++)Ph.indexOf(r.type)!==-1?(Gg(r,e[t].delegatedTarget),r.target===e[t].delegatedTarget&&e[t].stack[n].data(r)):(Gg(r,e[t].delegatedTarget),e[t].stack[n].data(r))}function gy(r,e){const t=[];let n=e;do{if(n.nodeType!==1)break;const i=r.matches(n);i.length&&t.push({delegatedTarget:n,stack:i})}while(n=n.parentElement);return t}function Gg(r,e){Object.defineProperty(r,"currentTarget",{configurable:!0,enumerable:!0,get:()=>e})}function _y(r){const e={};for(const t in r)e[t]=[...r[t]];return e}class vy{bindAll(e,t){t||(t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)));for(let n=0;n<t.length;n++)e[t[n]]=e[t[n]].bind(e)}on(e,t,n,i){const s=e.split(" ");for(let o=0;o<s.length;o++){if(typeof t=="function"&&n===void 0){Vg(s[o]),Ir[s[o]].add(t);continue}if(t.nodeType&&t.nodeType===1||t===window||t===document){t.addEventListener(s[o],n,i);continue}t=Hg(t);for(let a=0;a<t.length;a++)t[a].addEventListener(s[o],n,i)}}delegate(e,t,n){const i=e.split(" ");for(let s=0;s<i.length;s++){let o=so[i[s]];o===void 0&&(o=new In,so[i[s]]=o,Ph.indexOf(i[s])!==-1?document.addEventListener(i[s],tc,!0):document.addEventListener(i[s],tc)),o.add(t,n)}}off(e,t,n,i){const s=e.split(" ");for(let o=0;o<s.length;o++){if(t===void 0){Ir[s[o]]?.clear();continue}if(typeof t=="function"){Vg(s[o]),Ir[s[o]].delete(t);continue}const a=so[s[o]];if(a!==void 0&&(a.remove(t,n),a.size===0)){delete so[s[o]],Ph.indexOf(s[o])!==-1?document.removeEventListener(s[o],tc,!0):document.removeEventListener(s[o],tc);continue}if(t.removeEventListener!==void 0){t.removeEventListener(s[o],n,i);continue}t=Hg(t);for(let c=0;c<t.length;c++)t[c].removeEventListener(s[o],n,i)}}emit(e,...t){my(e,t)}debugDelegated(){return JSON.parse(JSON.stringify(so))}debugBus(){return _y(Ir)}hasBus(e){return this.debugBus().hasOwnProperty(e)}}const Ur=new vy,xy=new DOMParser;function Sy(r){return typeof r=="string"?xy.parseFromString(r,"text/html"):r}function nr(r){const e=new URL(r,window.location.origin),t=e.hash.length?r.replace(e.hash,""):null;return{hasHash:e.hash.length>0,pathname:e.pathname.replace(/\/+$/,""),host:e.host,search:e.search,raw:r,href:t||e.href}}function Wg(r,e){r.parentNode.replaceChild(qg(r,e),r)}function Xg(r,e){(r.parentNode.tagName==="HEAD"?document.head:document.body).appendChild(qg(r,e))}function qg(r,e){const t=document.createElement(e);for(let n=0;n<r.attributes.length;n++){const i=r.attributes[n];t.setAttribute(i.nodeName,i.nodeValue)}return r.innerHTML&&(t.innerHTML=r.innerHTML),t}class nc{constructor({wrapper:e}){this.wrapper=e}leave(e){return new Promise(t=>{this.onLeave({...e,done:t})})}enter(e){return new Promise(t=>{this.onEnter({...e,done:t})})}onLeave({from:e,trigger:t,done:n}){n()}onEnter({to:e,trigger:t,done:n}){n()}}class Yg{constructor({content:e,page:t,title:n,wrapper:i}){this._contentString=e.outerHTML,this._DOM=null,this.page=t,this.title=n,this.wrapper=i,this.content=this.wrapper.lastElementChild}onEnter(){}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){}initialLoad(){this.onEnter(),this.onEnterCompleted()}update(){document.title=this.title,this.wrapper.appendChild(this._DOM.firstElementChild),this.content=this.wrapper.lastElementChild,this._DOM=null}createDom(){this._DOM||(this._DOM=document.createElement("div"),this._DOM.innerHTML=this._contentString)}remove(){this.wrapper.firstElementChild.remove()}enter(e,t){return new Promise(n=>{this.onEnter(),e.enter({trigger:t,to:this.content}).then(()=>{this.onEnterCompleted(),n()})})}leave(e,t,n){return new Promise(i=>{this.onLeave(),e.leave({trigger:t,from:this.content}).then(()=>{n&&this.remove(),this.onLeaveCompleted(),i()})})}}class yy{data=new Map;regexCache=new Map;add(e,t,n){this.data.has(e)||(this.data.set(e,new Map),this.regexCache.set(e,new RegExp(`^${e}$`))),this.data.get(e).set(t,n),this.regexCache.set(t,new RegExp(`^${t}$`))}findMatch(e,t){for(const[n,i]of this.data)if(e.pathname.match(this.regexCache.get(n))){for(const[s,o]of i)if(t.pathname.match(this.regexCache.get(s)))return o;break}return null}}const My="A transition is currently in progress";class Ey{isTransitioning=!1;currentCacheEntry=null;cache=new Map;activePromises=new Map;constructor(e={}){const{links:t="a[href]:not([target]):not([href^=\\#]):not([data-taxi-ignore])",removeOldContent:n=!0,allowInterruption:i=!1,bypassCache:s=!1,enablePrefetch:o=!0,renderers:a={default:Yg},transitions:c={default:nc},reloadJsFilter:l=h=>h.dataset.taxiReload!==void 0,reloadCssFilter:u=h=>!0}=e;this.renderers=a,this.transitions=c,this.defaultRenderer=this.renderers.default||Yg,this.defaultTransition=this.transitions.default||nc,this.wrapper=document.querySelector("[data-taxi]"),this.reloadJsFilter=l,this.reloadCssFilter=u,this.removeOldContent=n,this.allowInterruption=i,this.bypassCache=s,this.enablePrefetch=o,this.cache=new Map,this.isPopping=!1,this.attachEvents(t),this.currentLocation=nr(window.location.href),this.cache.set(this.currentLocation.href,this.createCacheEntry(document.cloneNode(!0),window.location.href)),this.currentCacheEntry=this.cache.get(this.currentLocation.href),this.currentCacheEntry.renderer.initialLoad()}setDefaultRenderer(e){this.defaultRenderer=this.renderers[e]}setDefaultTransition(e){this.defaultTransition=this.transitions[e]}addRoute(e,t,n){this.router||(this.router=new yy),this.router.add(e,t,n)}preload(e,t=!1){return e=nr(e).href,this.cache.has(e)?Promise.resolve():this.fetch(e,!1).then(async n=>{this.cache.set(e,this.createCacheEntry(n.html,n.url)),t&&this.cache.get(e).renderer.createDom()}).catch(n=>{})}updateCache(e){const t=nr(e||window.location.href).href;this.cache.has(t)&&this.cache.delete(t),this.cache.set(t,this.createCacheEntry(document.cloneNode(!0),t))}clearCache(e){const t=nr(e||window.location.href).href;this.cache.has(t)&&this.cache.delete(t)}navigateTo(e,t=!1,n=!1){return new Promise((i,s)=>{if(!this.allowInterruption&&this.isTransitioning){s(new Error(My));return}this.isTransitioning=!0,this.isPopping=!0,this.targetLocation=nr(e),this.popTarget=window.location.href;const o=new(this.chooseTransition(t))({wrapper:this.wrapper});let a;if(this.bypassCache||!this.cache.has(this.targetLocation.href)||this.cache.get(this.targetLocation.href).skipCache){const c=this.fetch(this.targetLocation.href).then(l=>{this.cache.set(this.targetLocation.href,this.createCacheEntry(l.html,l.url)),this.cache.get(this.targetLocation.href).renderer.createDom()}).catch(l=>{window.location.href=e});a=this.beforeFetch(this.targetLocation,o,n).then(async()=>c.then(async()=>await this.afterFetch(this.targetLocation,o,this.cache.get(this.targetLocation.href),n)))}else this.cache.get(this.targetLocation.href).renderer.createDom(),a=this.beforeFetch(this.targetLocation,o,n).then(async()=>await this.afterFetch(this.targetLocation,o,this.cache.get(this.targetLocation.href),n));a.then(()=>{i()})})}on(e,t){Ur.on(e,t)}off(e,t){Ur.off(e,t)}beforeFetch(e,t,n){return Ur.emit("NAVIGATE_OUT",{from:this.currentCacheEntry,trigger:n}),new Promise(i=>{this.currentCacheEntry.renderer.leave(t,n,this.removeOldContent).then(()=>{n!=="popstate"&&window.history.pushState({},"",e.raw),i()})})}afterFetch(e,t,n,i){return this.currentLocation=e,this.popTarget=this.currentLocation.href,new Promise(s=>{n.renderer.update(),Ur.emit("NAVIGATE_IN",{from:this.currentCacheEntry,to:n,trigger:i}),this.reloadJsFilter&&this.loadScripts(n.scripts),this.reloadCssFilter&&this.loadStyles(n.styles),i!=="popstate"&&e.href!==n.finalUrl&&window.history.replaceState({},"",n.finalUrl),n.renderer.enter(t,i).then(()=>{Ur.emit("NAVIGATE_END",{from:this.currentCacheEntry,to:n,trigger:i}),this.currentCacheEntry=n,this.isTransitioning=!1,this.isPopping=!1,s()})})}loadScripts(e){const t=[...e],n=Array.from(document.querySelectorAll("script")).filter(this.reloadJsFilter);for(let i=0;i<n.length;i++)for(let s=0;s<t.length;s++)if(n[i].outerHTML===t[s].outerHTML){Wg(n[i],"SCRIPT"),t.splice(s,1);break}for(const i of t)Xg(i,"SCRIPT")}loadStyles(e){const t=Array.from(document.querySelectorAll('link[rel="stylesheet"]')).filter(this.reloadCssFilter),n=Array.from(document.querySelectorAll("style")).filter(this.reloadCssFilter),i=e.filter(s=>{if(s.href){if(!t.find(o=>o.href===s.href))return document.body.append(s),!1}else return!0});for(let s=0;s<n.length;s++)for(let o=0;o<i.length;o++)if(n[s].outerHTML===i[o].outerHTML){Wg(n[s],"STYLE"),i.splice(o,1);break}for(const s of i)Xg(s,"STYLE")}attachEvents(e){Ur.delegate("click",e,this.onClick),Ur.on("popstate",window,this.onPopstate),this.enablePrefetch&&Ur.delegate("mouseenter focus",e,this.onPrefetch)}onClick=e=>{if(!(e.metaKey||e.ctrlKey)){const t=nr(e.currentTarget.href);if(this.currentLocation=nr(window.location.href),this.currentLocation.host!==t.host)return;if(this.currentLocation.href!==t.href||this.currentLocation.hasHash&&!t.hasHash){e.preventDefault(),this.navigateTo(t.raw,e.currentTarget.dataset.transition||!1,e.currentTarget).catch(n=>{});return}!this.currentLocation.hasHash&&!t.hasHash&&e.preventDefault()}};onPopstate=()=>{const e=nr(window.location.href);if(e.pathname===this.currentLocation.pathname&&e.search===this.currentLocation.search&&!this.isPopping)return!1;if(!this.allowInterruption&&(this.isTransitioning||this.isPopping))return window.history.pushState({},"",this.popTarget),!1;this.isPopping||(this.popTarget=window.location.href),this.isPopping=!0,this.navigateTo(window.location.href,!1,"popstate")};onPrefetch=e=>{const t=nr(e.currentTarget.href);this.currentLocation.host===t.host&&this.preload(e.currentTarget.href,!1)};fetch(e,t=!0){if(this.activePromises.has(e))return this.activePromises.get(e);const n=new Promise((i,s)=>{let o;fetch(e,{mode:"same-origin",method:"GET",headers:{"X-Requested-With":"Taxi"},credentials:"same-origin"}).then(a=>(a.ok||(s("Taxi encountered a non 2xx HTTP status code"),t&&(window.location.href=e)),o=a.url,a.text())).then(a=>{i({html:Sy(a),url:o})}).catch(a=>{s(a),t&&(window.location.href=e)}).finally(()=>{this.activePromises.delete(e)})});return this.activePromises.set(e,n),n}chooseTransition(e){if(e)return this.transitions[e];const t=this.router?.findMatch(this.currentLocation,this.targetLocation);return t?this.transitions[t]:this.defaultTransition}createCacheEntry(e,t){const n=e.querySelector("[data-taxi-view]"),i=n.dataset.taxiView.length?this.renderers[n.dataset.taxiView]:this.defaultRenderer;return{page:e,content:n,finalUrl:t,skipCache:n.hasAttribute("data-taxi-nocache"),scripts:this.reloadJsFilter?Array.from(e.querySelectorAll("script")).filter(this.reloadJsFilter):[],styles:this.reloadCssFilter?Array.from(e.querySelectorAll('link[rel="stylesheet"], style')).filter(this.reloadCssFilter):[],title:e.title,renderer:new i({wrapper:this.wrapper,title:e.title,content:n,page:e})}}}let Ia,oo,Lh,Ty=()=>Lh||Nr.register(window.gsap),$g=typeof Intl<"u"?new Intl.Segmenter:0,ic=r=>typeof r=="string"?ic(document.querySelectorAll(r)):"length"in r?Array.from(r):[r],Kg=r=>ic(r).filter(e=>e instanceof HTMLElement),Dh=[],Ih=function(){},by=/\s+/g,Zg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),jg={left:0,top:0,width:0,height:0},Jg=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Dh),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Qg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),ao=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Uh=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",c=n.indexOf("++")>-1,l=u=>{let h=document.createElement(i),f=t.length+1;return n&&(h.className=n+(c?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,t.push(h),h};return c&&(n=n.replace("++","")),l.collection=t,l},wy=(r,e,t,n)=>{let i=Uh("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let c=i("");for(c.style.textAlign=s,r.insertBefore(c,e[o]);o<a;o++)c.appendChild(e[o]);c.normalize()}},e_=(r,e,t,n,i,s,o,a,c,l)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:m=!0,prepareText:_}=e,p=r.getBoundingClientRect(),g=p,x=!m&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=0,S=t.collection,b,T,C,v,E,w,R,L,N,O,I,z,B,K,Z,D,re,ce;for(typeof d=="object"?(C=d.delimiter||d,T=d.replaceWith||""):T=d===""?"":d||" ",b=T!==" ";f<h.length;f++)if(v=h[f],v.nodeType===3){for(Z=v.textContent||"",m?Z=Z.replace(by," "):x&&(Z=Z.replace(/\n/g,T+`
`)),_&&(Z=_(Z,r)),v.textContent=Z,E=T||C?Z.split(C||T):Z.match(a)||Dh,re=E[E.length-1],L=b?re.slice(-1)===" ":!re,re||E.pop(),g=p,R=b?E[0].charAt(0)===" ":!E[0],R&&ao(" ",r,v),E[0]||E.shift(),Jg(E,c),s&&l||(v.textContent=""),N=1;N<=E.length;N++)if(D=E[N-1],!m&&x&&D.charAt(0)===`
`&&((u=v.previousSibling)==null||u.remove(),ao(document.createElement("br"),r,v),D=D.slice(1)),!m&&D==="")ao(T,r,v);else if(D===" ")r.insertBefore(document.createTextNode(" "),v);else{if(b&&D.charAt(0)===" "&&ao(" ",r,v),M&&N===1&&!R&&S.indexOf(M.parentNode)>-1?(w=S[S.length-1],w.appendChild(document.createTextNode(n?"":D))):(w=t(n?"":D),ao(w,r,v),M&&N===1&&!R&&w.insertBefore(M,w.firstChild)),n)for(I=$g?Jg([...$g.segment(D)].map(ke=>ke.segment),c):D.match(a)||Dh,ce=0;ce<I.length;ce++)w.appendChild(I[ce]===" "?document.createTextNode(" "):n(I[ce]));if(s&&l){if(Z=v.textContent=Z.substring(D.length+1,Z.length),O=w.getBoundingClientRect(),O.top>g.top&&O.left<=g.left){for(z=r.cloneNode(),B=r.childNodes[0];B&&B!==w;)K=B,B=B.nextSibling,z.appendChild(K);r.parentNode.insertBefore(z,r),i&&Qg(z)}g=O}(N<E.length||L)&&ao(N>=E.length?" ":b&&D.slice(-1)===" "?" "+T:T,r,v)}r.removeChild(v),M=0}else v.nodeType===1&&(o&&o.indexOf(v)>-1?(S.indexOf(v.previousSibling)>-1&&S[S.length-1].appendChild(v),M=v):(e_(v,e,t,n,i,s,o,a,c,!0),M=0),i&&Qg(v))};const t_=class vx{constructor(e,t){this.isSplit=!1,Ty(),this.elements=Kg(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let c=a.element.offsetWidth;if(c!==a.width){a.width=c,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Ih(this),this.split(t)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:c,mask:l}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=h&&!f&&!u,m=c&&("push"in c?new RegExp("(?:"+c.join("|")+")","gu"):c),_=m?new RegExp(m.source+"|"+Zg.source,"gu"):Zg,p=!!e.ignore&&Kg(e.ignore),{orig:g,animTime:x,obs:M}=this._data,S;return(h||f||u)&&(this.elements.forEach((b,T)=>{g[T]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let C=[],v=[],E=[],w=h?Uh("char",e,C):null,R=Uh("word",e,v),L,N,O,I;if(e_(b,e,R,w,d,i&&(u||d),p,_,m,!1),u){let z=ic(b.childNodes),B=wy(b,z,e,E),K,Z=[],D=0,re=z.map(ke=>ke.nodeType===1?ke.getBoundingClientRect():jg),ce=jg;for(L=0;L<z.length;L++)K=z[L],K.nodeType===1&&(K.nodeName==="BR"?(Z.push(K),B(D,L+1),D=L+1,ce=re[D]):(L&&re[L].top>ce.top&&re[L].left<=ce.left&&(B(D,L),D=L),ce=re[L]));D<L&&B(D,L),Z.forEach(ke=>{var Ie;return(Ie=ke.parentNode)==null?void 0:Ie.removeChild(ke)})}if(!f){for(L=0;L<v.length;L++)if(N=v[L],h||!N.nextSibling||N.nextSibling.nodeType!==3)if(s&&!u){for(O=document.createElement("span"),O.style.whiteSpace="nowrap";N.firstChild;)O.appendChild(N.firstChild);N.replaceWith(O)}else N.replaceWith(...N.childNodes);else I=N.nextSibling,I&&I.nodeType===3&&(I.textContent=(N.textContent||"")+(I.textContent||""),N.remove());v.length=0,b.normalize()}this.lines.push(...E),this.words.push(...v),this.chars.push(...C)}),l&&this[l]&&this.masks.push(...this[l].map(b=>{let T=b.cloneNode();return b.replaceWith(T),T.appendChild(b),b.className&&(T.className=b.className.replace(/(\b\w+\b)/g,"$1-mask")),T.style.overflow="clip",T}))),this.isSplit=!0,oo&&(a?oo.addEventListener("loadingdone",this._split):oo.status),(S=o&&o(this))&&S.totalTime&&(this._data.anim=x?S.totalTime(x):S),u&&a&&this.elements.forEach((b,T)=>{g[T].width=b.offsetWidth,M&&M.observe(b)}),this}revert(){var e,t;let{orig:n,anim:i,obs:s}=this._data;return s&&s.disconnect(),n.forEach(({element:o,html:a,ariaL:c,ariaH:l})=>{o.innerHTML=a,c?o.setAttribute("aria-label",c):o.removeAttribute("aria-label"),l?o.setAttribute("aria-hidden",l):o.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,oo?.removeEventListener("loadingdone",this._split),i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this),this}static create(e,t){return new vx(e,t)}static register(e){Ia=Ia||e||window.gsap,Ia&&(ic=Ia.utils.toArray,Ih=Ia.core.context||Ih),!Lh&&window.innerWidth>0&&(oo=document.fonts,Lh=!0)}};t_.version="3.13.0";let Nr=t_;function Nh(){document.querySelectorAll(".nbr-project").forEach(r=>{const t=(r.getAttribute("aria-label")??r.textContent??"").match(/\d+/);if(!t)return;const n=parseInt(t[0],10);Number.isNaN(n)||(r.textContent=`W'${String(n).padStart(2,"0")}`)})}U.registerPlugin(Nr);const Ay={type:"chars",charsClass:"letter-child",mask:"chars",autoSplit:!1,aria:"auto"},rc=.5,Cy=.45,Ry=1.2,Py="power4.inOut";class Ly extends nc{onLeave({from:e,done:t}){U.to(e,{opacity:0,duration:rc,ease:"power2.inOut",onComplete:t})}onEnter({to:e,done:t}){U.set(e,{position:"fixed",top:0,left:0,width:"100%",opacity:0,zIndex:10}),U.set(e.querySelectorAll("[no-scroll]"),{opacity:0}),U.to(e,{opacity:1,duration:rc,ease:"power2.inOut",onComplete:()=>{U.set(e,{clearProps:"all"});const n=this.wrapper.querySelector("[data-taxi-view]:not(:last-child)");n&&n.remove(),t()}})}}class Dy extends nc{onLeave({from:e,done:t}){const n=e.querySelector(".next-project-w .h1-case-next"),i=e.querySelector(".next-project-w .nbr-project-next");if(!n||!i){this.flyers=null,U.to(e,{opacity:0,duration:rc,ease:"power2.inOut",onComplete:t});return}const s=[n,i];s.forEach(a=>U.set(a.querySelectorAll(".letter-child"),{yPercent:0,y:0}));const o=s.map(a=>a.getBoundingClientRect());this.flyers=s.map((a,c)=>{const l=o[c],u=parseFloat(getComputedStyle(a).fontSize)||0,h=a.cloneNode(!0);return U.set(h.querySelectorAll(".letter-child"),{yPercent:0,y:0}),U.set(h,{position:"fixed",left:l.left,top:l.top,width:l.width,margin:0,padding:0,zIndex:99999,transformOrigin:"top left",x:0,y:0,scale:1,opacity:1,overflow:"visible",whiteSpace:"nowrap"}),document.body.appendChild(h),{el:h,rect:l,fontSize:u}}),s.forEach(a=>U.set(a,{visibility:"hidden"})),U.to(e,{opacity:0,duration:Cy,ease:"power2.inOut",onComplete:t})}onEnter({to:e,done:t}){const n=this.flyers;if(!n){U.fromTo(e,{opacity:0},{opacity:1,duration:rc,ease:"power2.inOut",onComplete:()=>{this._removeOldContent(),t()}});return}U.set(e,{position:"fixed",top:0,left:0,width:document.documentElement.clientWidth,zIndex:10,autoAlpha:0}),Nh();const i=e.querySelector(".title-work-flip .h1-case"),s=e.querySelector(".title-work-flip .nbr-project"),o=[i,s];o.forEach(l=>{if(!l)return;l.removeAttribute("letter");const u=Nr.create(l,Ay);U.set(u.chars,{yPercent:0,y:0}),U.set(l,{opacity:1})}),e.querySelectorAll("[no-scroll]").forEach(l=>{l===i||l===s||U.set(l,{opacity:0})});const a=()=>{window.scrollTo(0,0),n.forEach(l=>l.el.remove()),this.flyers=null,U.set(e,{clearProps:"all"}),this._removeOldContent(),t()},c=U.timeline({onComplete:a});n.forEach((l,u)=>{const h=o[u];if(!h||!l.rect.width)return;const f=h.getBoundingClientRect(),d=l.rect,m=parseFloat(getComputedStyle(h).fontSize)||l.fontSize,_=l.fontSize?m/l.fontSize:1;c.to(l.el,{x:f.left-d.left,y:f.top-d.top,scale:_,duration:Ry,ease:Py},0)}),c.getChildren().length||a()}_removeOldContent(){const e=this.wrapper?.querySelector("[data-taxi-view]:not(:last-child)");e&&e.remove()}}function Iy(){const r=new Ey({transitions:{default:Ly,flip:Dy},links:'a:not([target]):not([href^="#"]):not([data-taxi-ignore])',removeOldContent:!1});return r.on("NAVIGATE_END",()=>{window.scrollTo(0,0)}),r}U.registerPlugin(Oe,Nr);let lo=[],co=[],uo=[],di=[],Ua=!1,sc=!1,Fh=!1,Oh=!1,oc=!1;const Uy=1e3;function Si(r){return!r.closest("[data-taxi-view]")}function Ny(r){let e=!1;const t=i=>{e||(e=!0,r(i))},n=setTimeout(()=>t(!1),Uy);document.fonts.ready.then(()=>{clearTimeout(n),t(!0)})}function n_(){di=[],Ua=!1,Oh=!1,oc=!1,Ny(r=>{oc=!r,i_(),Fy(),Oe.refresh(),Ua=!0,sc&&lc(Fh),r||document.fonts.ready.then(()=>{oc&&(oc=!1,Oy())})})}function i_(){document.querySelectorAll("[line]").forEach(r=>{if(Si(r)&&r.dataset.revealInit==="1")return;r.dataset.revealInit="1";const e=r.hasAttribute("no-scroll"),t=parseFloat(r.getAttribute("delay")??r.getAttribute("data-delay"))||0,n=Nr.create(r,{type:"lines",linesClass:"line-child",mask:"lines",autoSplit:!1,aria:"auto"});U.set(n.lines,{yPercent:100}),U.set(r,{opacity:1});const i=(s=!1,o=!1)=>U.to(n.lines,{yPercent:0,duration:o?0:1,ease:"power4.inOut",stagger:o?0:.05,delay:s||o?0:t});e?di.push({play:i,el:r,isSplit:!0}):uo.push({el:r,tween:U.to(n.lines,{yPercent:0,duration:1,ease:"power4.inOut",stagger:.05,delay:t,scrollTrigger:{trigger:r,start:"top 95%",toggleActions:"play none none none"}})}),lo.push({el:r,split:n})}),document.querySelectorAll("[letter]").forEach(r=>{if(Si(r)&&r.dataset.revealInit==="1")return;r.dataset.revealInit="1";const e=r.hasAttribute("no-scroll"),t=parseFloat(r.getAttribute("delay")??r.getAttribute("data-delay"))||0,n=Nr.create(r,{type:"chars",charsClass:"letter-child",mask:"chars",autoSplit:!1,aria:"auto"});U.set(n.chars,{yPercent:100}),U.set(r,{opacity:1});const i=(s=!1,o=!1)=>U.to(n.chars,{yPercent:0,duration:o?0:1,ease:"power4.out",stagger:o?0:.1,delay:s||o?0:t});e?di.push({play:i,el:r,isSplit:!0}):uo.push({el:r,tween:U.to(n.chars,{yPercent:0,duration:1.2,ease:"power4.inOut",stagger:.03,delay:t,scrollTrigger:{trigger:r,start:"top 95%",toggleActions:"play none none none"}})}),lo.push({el:r,split:n})})}function ac(r,e){const t=r.getAttribute("delay")??r.getAttribute("data-delay");if(t!==null)return parseFloat(t)||0;const n=r.parentElement?.closest("[stagger]");if(!n)return 0;const i=parseFloat(n.getAttribute("stagger"))||0,s=parseFloat(n.getAttribute("stagger-delay"))||0,o=[...n.querySelectorAll(`[${e}]`)].indexOf(r);return s+Math.max(o,0)*i}function Fy(){document.querySelectorAll("[opacity]").forEach(t=>{if(Si(t)&&t.dataset.revealInit==="1")return;t.dataset.revealInit="1";const n=t.hasAttribute("no-scroll"),i=ac(t,"opacity");U.set(t,{opacity:0});const s=()=>{U.set(t,{opacity:0}),U.to(t,{opacity:1,duration:1,ease:"power3.out",delay:i,overwrite:!0})};n?di.push({play:s,el:t,isSplit:!1}):co.push({el:t,tween:U.to(t,{opacity:1,duration:1,ease:"power3.out",delay:i,scrollTrigger:{trigger:t,start:"top 95%",toggleActions:"play none none none"}})})}),document.querySelectorAll("[scale]").forEach(t=>{if(Si(t)&&t.dataset.revealInit==="1")return;t.dataset.revealInit="1";const n=t.hasAttribute("no-scroll"),i=ac(t,"scale");U.set(t,{scale:0,transformOrigin:"50% 50%"});const s=()=>{U.set(t,{scale:0,opacity:1}),U.to(t,{scale:1,duration:1,ease:"power3.out",delay:i,overwrite:!0})};n?di.push({play:s,el:t,isSplit:!1}):co.push({el:t,tween:U.to(t,{scale:1,duration:1,ease:"power3.out",delay:i,scrollTrigger:{trigger:t,start:"top 95%",toggleActions:"play none none none"}})})});const r={left:"inset(100% 100% 0% 0%)",right:"inset(100% 0% 0% 100%)"},e="inset(0% 0% 0% 0%)";document.querySelectorAll("[clip]").forEach(t=>{if(Si(t)&&t.dataset.revealInit==="1")return;t.dataset.revealInit="1";const n=t.hasAttribute("no-scroll"),i=ac(t,"clip"),s=r[t.getAttribute("clip")]??"inset(100% 0% 0% 0%)";U.set(t,{clipPath:s});const o=()=>{U.set(t,{clipPath:s,opacity:1}),U.to(t,{clipPath:e,duration:1.5,ease:"power4.inOut",delay:i,overwrite:!0})};n?di.push({play:o,el:t,isSplit:!1}):co.push({el:t,tween:U.to(t,{clipPath:e,duration:1.2,ease:"power3.inOut",delay:i,scrollTrigger:{trigger:t,start:"top 95%",toggleActions:"play none none none"}})})}),document.querySelectorAll("[separator]").forEach(t=>{if(Si(t)&&t.dataset.revealInit==="1")return;t.dataset.revealInit="1";const n=t.hasAttribute("no-scroll"),i=ac(t,"separator");U.set(t,{width:"0%"});const s=()=>{U.set(t,{width:"0%",opacity:1}),U.to(t,{width:"100%",duration:1.4,ease:"power4.inOut",delay:i,overwrite:!0})};n?di.push({play:s,el:t,isSplit:!1}):co.push({el:t,tween:U.to(t,{width:"100%",duration:1.4,ease:"power4.inOut",delay:i,scrollTrigger:{trigger:t,start:"top 95%",toggleActions:"play none none none"}})})})}function lc(r=!1,e=!1){if(!Ua){sc=!0,Fh=r;return}sc=!1,Oh=!0;const t=di;di=[],t.forEach(({play:n})=>n(r,e))}function Oy(){uo=uo.filter(({el:r,tween:e})=>Si(r)?!0:(e.scrollTrigger?.kill(),e.kill(),!1)),lo=lo.filter(({el:r,split:e})=>Si(r)?!0:(e?.revert?.(),r?.dataset&&delete r.dataset.revealInit,!1)),di=di.filter(r=>!(r.isSplit&&!Si(r.el))),i_(),Ua=!0,Oh&&lc(!0,!0),Oe.refresh()}function By(){const r=({el:e,tween:t})=>Si(e)?!0:(t.scrollTrigger?.kill(),t.kill(),!1);co=co.filter(r),uo=uo.filter(r),lo=lo.filter(({el:e,split:t})=>Si(e)?!0:(t?.revert?.(),e?.dataset&&delete e.dataset.revealInit,!1)),di=[],Ua=!1,sc=!1,Fh=!1}function ky(){By(),requestAnimationFrame(()=>{n_()})}var Oi,Bh,Na,r_,ho,fo,kh,s_,o_=function(){return Oi||typeof window<"u"&&(Oi=window.gsap)},zh={},zy=function(e){return Math.round(e*1e4)/1e4},Vh=function(e){return s_(e).id},Fa=function(e){return zh[Vh(typeof e=="string"?Na(e)[0]:e)]},a_=function(e){var t=ho,n;if(e-kh>=.05)for(kh=e;t;)n=t.g(t.t,t.p),(n!==t.v1||e-t.t1>.2)&&(t.v2=t.v1,t.v1=n,t.t2=t.t1,t.t1=e),t=t._next},Vy={deg:360,rad:Math.PI*2},Hh=function(){Oi=o_(),Oi&&(Na=Oi.utils.toArray,r_=Oi.utils.getUnit,s_=Oi.core.getCache,fo=Oi.ticker,Bh=1)},Hy=function(e,t,n,i){this.t=e,this.p=t,this.g=e._gsap.get,this.rCap=Vy[n||r_(this.g(e,t))],this.v1=this.v2=0,this.t1=this.t2=fo.time,i&&(this._next=i,i._prev=this)},Oa=(function(){function r(t,n){Bh||Hh(),this.target=Na(t)[0],zh[Vh(this.target)]=this,this._props={},n&&this.add(n)}r.register=function(n){Oi=n,Hh()};var e=r.prototype;return e.get=function(n,i){var s=this._props[n]||void 0,o,a,c;return o=parseFloat(i?s.v1:s.g(s.t,s.p)),a=o-parseFloat(s.v2),c=s.rCap,c&&(a=a%c,a!==a%(c/2)&&(a=a<0?a+c:a-c)),zy(a/((i?s.t1:fo.time)-s.t2))},e.getAll=function(){var n={},i=this._props,s;for(s in i)n[s]=this.get(s);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,i){n in this._props||(ho||(fo.add(a_),kh=fo.time),ho=this._props[n]=new Hy(this.target,n,i,ho))},e.remove=function(n){var i=this._props[n],s,o;i&&(s=i._prev,o=i._next,s&&(s._next=o),o?o._prev=s:ho===i&&(fo.remove(a_),ho=0),delete this._props[n])},e.kill=function(n){for(var i in this._props)this.remove(i);n||delete zh[Vh(this.target)]},r.track=function(n,i,s){Bh||Hh();for(var o=[],a=Na(n),c=i.split(","),l=(s||"").split(","),u=a.length,h,f;u--;){for(h=Fa(a[u])||new r(a[u]),f=c.length;f--;)h.add(c[f],l[f]||l[0]);o.push(h)}return o},r.untrack=function(n,i){var s=(i||"").split(",");Na(n).forEach(function(o){var a=Fa(o);a&&(s.length?s.forEach(function(c){return a.remove(c)}):a.kill(1))})},r.isTracking=function(n,i){var s=Fa(n);return s&&s.isTracking(i)},r.getVelocity=function(n,i){var s=Fa(n);return!s||!s.isTracking(i)?void 0:s.get(i)},r})();Oa.getByTarget=Fa,o_()&&Oi.registerPlugin(Oa);var Jt,l_,c_,u_,Gh,Ba,h_,f_,d_,Wh,p_,ka,Xh,m_,cc=Oa.getByTarget,g_=function(){return Jt||typeof window<"u"&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},Gy=function(e){return typeof e=="string"},za=function(e){return typeof e=="number"},Fr=function(e){return typeof e=="object"},qh=function(e){return typeof e=="function"},Wy=1,__=Array.isArray,Xy=function(e){return e},vs=1e10,v_=1/vs,x_=.05,qy=function(e){return Math.round(e*1e4)/1e4},Yy=function(e,t,n){for(var i in t)!(i in e)&&i!==n&&(e[i]=t[i]);return e},$y=function r(e){var t={},n,i;for(n in e)t[n]=Fr(i=e[n])&&!__(i)?r(i):i;return t},S_=function(e,t,n,i,s){var o=t.length,a=0,c=vs,l,u,h,f;if(Fr(e)){for(;o--;){l=t[o],u=0;for(h in e)f=l[h]-e[h],u+=f*f;u<c&&(a=o,c=u)}if((s||vs)<vs&&s<Math.sqrt(c))return e}else for(;o--;)l=t[o],u=l-e,u<0&&(u=-u),u<c&&l>=i&&l<=n&&(a=o,c=u);return t[a]},y_=function(e,t,n,i,s,o,a){if(e.end==="auto")return e;var c=e.end,l,u;if(n=isNaN(n)?vs:n,i=isNaN(i)?-vs:i,Fr(t)){if(l=t.calculated?t:(qh(c)?c(t,a):S_(t,c,n,i,o))||t,!t.calculated){for(u in l)t[u]=l[u];t.calculated=!0}l=l[s]}else l=qh(c)?c(t,a):__(c)?S_(t,c,n,i,o):parseFloat(c);return l>n?l=n:l<i&&(l=i),{max:l,min:l,unitFactor:e.unitFactor}},uc=function(e,t,n){return isNaN(e[t])?n:+e[t]},Yh=function(e,t){return t*x_*e/Wh},M_=function(e,t,n){return Math.abs((t-e)*Wh/n/x_)},E_={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},T_=function(e,t,n,i){if(t.linkedProps){var s=t.linkedProps.split(","),o={},a,c,l,u,h,f;for(a=0;a<s.length;a++)c=s[a],l=t[c],l&&(za(l.velocity)?u=l.velocity:(h=h||cc(e),u=h&&h.isTracking(c)?h.get(c):0),f=Math.abs(u/uc(l,"resistance",i)),o[c]=parseFloat(n(e,c))+Yh(u,f));return o}},Ky=function(e,t,n,i,s,o){if(n===void 0&&(n=10),i===void 0&&(i=.2),s===void 0&&(s=1),Gy(e)&&(e=u_(e)[0]),!e)return 0;var a=0,c=vs,l=t.inertia||t,u=d_(e).get,h=uc(l,"resistance",Ba.resistance),f,d,m,_,p,g,x,M,S,b;b=T_(e,l,u,h);for(f in l)E_[f]||(d=l[f],Fr(d)||(M=M||cc(e),M&&M.isTracking(f)?d=za(d)?{velocity:d}:{velocity:M.get(f)}:(_=+d||0,m=Math.abs(_/h))),Fr(d)&&(za(d.velocity)?_=d.velocity:(M=M||cc(e),_=M&&M.isTracking(f)?M.get(f):0),m=p_(i,n,Math.abs(_/uc(d,"resistance",h))),p=parseFloat(u(e,f))||0,g=p+Yh(_,m),"end"in d&&(d=y_(d,b&&f in b?b:g,d.max,d.min,f,l.radius,_),ka===t&&(ka=l=$y(t)),l[f]=Yy(d,l[f],"end")),"max"in d&&g>+d.max+v_?(S=d.unitFactor||Ba.unitFactors[f]||1,x=p>d.max&&d.min!==d.max||_*S>-15&&_*S<45?i+(n-i)*.1:M_(p,d.max,_),x+s<c&&(c=x+s)):"min"in d&&g<+d.min-v_&&(S=d.unitFactor||Ba.unitFactors[f]||1,x=p<d.min&&d.min!==d.max||_*S>-45&&_*S<15?i+(n-i)*.1:M_(p,d.min,_),x+s<c&&(c=x+s)),x>a&&(a=x)),m>a&&(a=m));return a>c&&(a=c),a>n?n:a<i?i:a},b_=function(){Jt=g_(),Jt&&(c_=Jt.parseEase,u_=Jt.utils.toArray,h_=Jt.utils.getUnit,d_=Jt.core.getCache,p_=Jt.utils.clamp,Xh=Jt.core.getStyleSaver,m_=Jt.core.reverting||function(){},Gh=c_("power3"),Wh=Gh(.05),f_=Jt.core.PropTween,Jt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),Ba=Jt.config(),Jt.registerPlugin(Oa),l_=1)},$h={version:"3.13.0",name:"inertia",register:function(e){Jt=e,b_()},init:function(e,t,n,i,s){l_||b_();var o=cc(e);if(t==="auto"){if(!o)return;t=o.getAll()}this.styles=Xh&&typeof e.style=="object"&&Xh(e),this.target=e,this.tween=n,ka=t;var a=e._gsap,c=a.get,l=t.duration,u=Fr(l),h=t.preventOvershoot||u&&l.overshoot===0,f=uc(t,"resistance",Ba.resistance),d=za(l)?l:Ky(e,t,u&&l.max||10,u&&l.min||.2,u&&"overshoot"in l?+l.overshoot:h?0:1),m,_,p,g,x,M,S,b,T;t=ka,ka=0,T=T_(e,t,c,f);for(m in t)E_[m]||(_=t[m],qh(_)&&(_=_(i,e,s)),za(_)?x=_:Fr(_)&&!isNaN(_.velocity)?x=+_.velocity:o&&o.isTracking(m)&&(x=o.get(m)),M=Yh(x,d),b=0,p=c(e,m),g=h_(p),p=parseFloat(p),Fr(_)&&(S=p+M,"end"in _&&(_=y_(_,T&&m in T?T:S,_.max,_.min,m,t.radius,x)),"max"in _&&+_.max<S?h||_.preventOvershoot?M=_.max-p:b=_.max-p-M:"min"in _&&+_.min>S&&(h||_.preventOvershoot?M=_.min-p:b=_.min-p-M)),this._props.push(m),this.styles&&this.styles.save(m),this._pt=new f_(this._pt,e,m,p,0,Xy,0,a.set(e,m,this)),this._pt.u=g||0,this._pt.c1=M,this._pt.c2=b);return n.duration(d),Wy},render:function(e,t){var n=t._pt;if(e=Gh(t.tween._time/t.tween._dur),e||!m_())for(;n;)n.set(n.t,n.p,qy(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(r){return $h[r]=Oa[r]}),g_()&&Jt.registerPlugin($h),U.registerPlugin($h);let Kh=[];function w_(){const r=document.querySelectorAll("[hoverme]");r.length!==0&&r.forEach(e=>{const n=e.textContent.split("");e.innerHTML="";const i=[];n.forEach(l=>{const u=document.createElement("span");u.textContent=l===" "?" ":l,u.style.display="inline-block",u.style.willChange="transform",e.appendChild(u),i.push(u)});const s=(l,u,h,f)=>Math.sqrt(Math.pow(h-l,2)+Math.pow(f-u,2)),o=(l,u,h,f)=>Math.atan2(f-u,h-l),a=l=>{const u=l.clientX,h=l.clientY;i.forEach(f=>{const d=f.getBoundingClientRect(),m=d.left+d.width/2,_=d.top+d.height/2,p=s(u,h,m,_),g=200,x=300;if(p<g){const M=o(m,_,u,h),b=(g-p)/g*x,T=-Math.cos(M)*b,C=-Math.sin(M)*b;U.to(f,{x:T,y:C,duration:2,ease:"power2.out",overwrite:"auto"})}else U.to(f,{x:0,y:0,duration:2,ease:"power2.out",overwrite:"auto"})})},c=()=>{i.forEach(l=>{U.to(l,{x:0,y:0,duration:.5,ease:"power2.out",overwrite:"auto"})})};e.addEventListener("mousemove",a),e.addEventListener("mouseleave",c),Kh.push({element:e,handleMouseMove:a,handleMouseLeave:c,letterSpans:i})})}function Zy(){Kh.forEach(({element:r,handleMouseMove:e,handleMouseLeave:t,letterSpans:n})=>{r.removeEventListener("mousemove",e),r.removeEventListener("mouseleave",t),n.forEach(i=>U.killTweensOf(i))}),Kh=[]}function jy(){Zy(),requestAnimationFrame(()=>{w_()})}let Zh=[],jh=[],Jh=[],Qh=[];function A_(){const r=document.querySelectorAll(".btn");r.length!==0&&r.forEach(e=>{const t=e.querySelector(".line-arrow");if(!t)return;const n=t.getBoundingClientRect().width,i=()=>{U.to(t,{width:n*1.45,duration:.4,ease:"power4.inOut",overwrite:"auto"})},s=()=>{U.to(t,{width:n,duration:.8,ease:"power4.out",overwrite:"auto"})};e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",s),Zh.push({btn:e,handleMouseEnter:i,handleMouseLeave:s,lineArrow:t})})}function C_(){const r=document.querySelectorAll(".view-all-btn");r.length!==0&&r.forEach(e=>{const t=e.querySelector("svg");if(!t)return;const n=t.querySelector(".arrow-shaft");if(!n)return;const i=6;U.set(t,{transformOrigin:"left center"});const s=U.timeline({paused:!0});s.to(n,{attr:{points:`-${i},7.5 -${i},7.5 15.5,7.5`},duration:.45,ease:"power2.inOut"}),s.to(t,{scaleX:2,duration:.45,ease:"power2.inOut"},"<");const o=()=>s.play(),a=()=>s.reverse();e.addEventListener("mouseenter",o),e.addEventListener("mouseleave",a),jh.push({btn:e,handleMouseEnter:o,handleMouseLeave:a,tl:s})})}function R_(){const r=document.querySelectorAll(".link");r.length!==0&&r.forEach(e=>{U.set(e,{position:"relative"});const t=document.createElement("span");t.className="link-underline",t.style.cssText=["position:absolute","bottom:-3px","left:0","width:0%","height:1px","background:white","pointer-events:none"].join(";"),e.appendChild(t);const n=U.timeline({paused:!0});n.fromTo(t,{width:"0%",left:"0%"},{width:"100%",left:"0%",duration:.6,ease:"power4.inOut"}),n.add("midway"),n.fromTo(t,{width:"100%",left:"0%"},{width:"0%",left:"100%",duration:.6,ease:"power4.inOut",immediateRender:!1});const i=()=>n.tweenFromTo(0,"midway"),s=()=>n.play();e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",s),Jh.push({link:e,underline:t,tl:n,handleMouseEnter:i,handleMouseLeave:s})})}function P_(){const r=document.querySelectorAll(".btn.email");r.length!==0&&r.forEach(e=>{const t=e.querySelector(".arobase");if(!t)return;const n=()=>{U.to(t,{scale:1.2,duration:.2,ease:"power2.in",overwrite:"auto"})},i=()=>{U.to(t,{scale:1,duration:.2,ease:"power2.in",overwrite:"auto"})};e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",i),Qh.push({btn:e,handleMouseEnter:n,handleMouseLeave:i,arobase:t})})}function Jy(){Qh.forEach(({btn:r,handleMouseEnter:e,handleMouseLeave:t,arobase:n})=>{r.removeEventListener("mouseenter",e),r.removeEventListener("mouseleave",t),U.killTweensOf(n)}),Qh=[]}function Qy(){Jh.forEach(({link:r,underline:e,tl:t,handleMouseEnter:n,handleMouseLeave:i})=>{r.removeEventListener("mouseenter",n),r.removeEventListener("mouseleave",i),t.kill(),e.remove()}),Jh=[]}function eM(){Zh.forEach(({btn:r,handleMouseEnter:e,handleMouseLeave:t,lineArrow:n})=>{r.removeEventListener("mouseenter",e),r.removeEventListener("mouseleave",t),U.killTweensOf(n)}),Zh=[]}function tM(){jh.forEach(({btn:r,handleMouseEnter:e,handleMouseLeave:t,tl:n})=>{r.removeEventListener("mouseenter",e),r.removeEventListener("mouseleave",t),n.kill()}),jh=[]}function nM(){eM(),tM(),Qy(),Jy(),requestAnimationFrame(()=>{A_(),C_(),R_(),P_()})}let hc=null,xs=0;const iM=500,L_=100,ef=5e3;function rM(r){const e=Math.min(r/ef,1);return L_+(iM-L_)*(1-Math.sin(e*Math.PI))}let fc=null,Va=null,Ha=null,Or=null,dc=null;const D_="nothin:loader-played";function sM(){try{return sessionStorage.getItem(D_)==="1"}catch{return!1}}function oM(){try{sessionStorage.setItem(D_,"1")}catch{}}function aM(){const r=document.querySelector(".loader");r&&U.set(r,{display:"none"})}function lM(){if(!Or)return;const r={val:100};Or.textContent="100",dc=U.to(r,{val:0,duration:ef/750,ease:"power2.inOut",onUpdate:()=>{Or.textContent=Math.round(r.val).toString().padStart(3,"0")},onComplete:()=>{Or.textContent="000"}})}function cM(){const r=document.querySelectorAll(".loader-img")[xs];r&&U.to(r,{scale:0,duration:.6,ease:"power4.inOut",delay:.5});const e=()=>{const t=document.querySelector(".loader");Or&&U.to(Or,{autoAlpha:0,duration:.5,ease:"power4.inOut"}),t?(U.to(t,{height:0,duration:1.8,ease:"power4.inOut",onComplete:()=>{U.set(t,{display:"none"})}}),U.delayedCall(1.8-1.8,tf)):tf()};fc?U.to(fc,{width:"1rem",duration:.8,ease:"power4.inOut",delay:.6,onComplete:e}):e()}function tf(){const r=document.querySelector(".nothin-hero-svg"),e=r?[...r.querySelectorAll("path:not(.nothin-apos)")]:[],t=r?r.querySelector(".nothin-apos"):null;if(window.dispatchEvent(new CustomEvent("loader:hero-reveal-start")),Va&&U.to(Va,{yPercent:100,duration:1,ease:"power4.inOut",onComplete:()=>U.set(Va,{opacity:0})}),Ha&&U.to(Ha,{scale:0,duration:1,ease:"power4.inOut",onComplete:()=>U.set(Ha,{opacity:0})}),e.length){const n=e.slice().sort(()=>Math.random()-.5);U.fromTo(n,{autoAlpha:1,yPercent:120},{yPercent:0,duration:1.8,ease:"power4.inOut",stagger:.07,delay:.2,onComplete:()=>{window.dispatchEvent(new CustomEvent("loader:hero-revealed"))}})}else window.dispatchEvent(new CustomEvent("loader:hero-revealed"));t&&U.fromTo(t,{autoAlpha:1,scale:0,transformOrigin:"center center"},{scale:1,duration:.6,ease:"back.out(0.9)",delay:1.5})}function I_(r,e){const t=performance.now()-e;if(t>=ef){cM();return}hc=setTimeout(()=>{const n=r[xs];U.killTweensOf(n),U.set(n,{clearProps:"all"}),U.set(n,{opacity:0}),xs=(xs+1)%r.length;const i=r[xs];U.killTweensOf(i),U.fromTo(i,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.32,ease:"back.out(1.2)"}),I_(r,e)},rM(t))}function uM(r,e){r.forEach(s=>U.set(s,{opacity:0}));const t=r[xs],i=window.matchMedia("(max-width: 991px)").matches?"10rem":"20rem";e&&U.fromTo(e,{width:"1rem"},{width:i,duration:1.2,ease:"power4.inOut"}),U.set(t,{opacity:1,scale:0}),U.to(t,{scale:1,rotate:15,duration:.8,ease:"back.out(0.9)",delay:.5,onComplete:()=>{lM(),I_(r,performance.now())}})}function hM(){const r=document.querySelector(".loader");if(sM()){r&&U.set(r,{display:"none"}),fc=null,Va=null,Ha=null,Or=null,tf();return}if(!r)return;const e=r.querySelector(".n-load"),t=r.querySelector(".apos-load"),n=r.querySelectorAll(".loader-img"),i=r.querySelector(".loader-img-w"),s=r.querySelector(".loader-nbr-w");if(fc=i,Va=e,Ha=t,Or=s,s&&(U.set(s,{autoAlpha:1}),s.textContent="100"),!e||n.length===0)return;oM();const o=document.querySelector(".nothin-hero-svg");if(o){const l=o.querySelectorAll("path:not(.nothin-apos)"),u=o.querySelector(".nothin-apos");U.set(l,{autoAlpha:0}),u&&U.set(u,{autoAlpha:0})}const a=document.createElement("div");a.style.cssText="overflow:hidden;display:flex;",e.parentNode.insertBefore(a,e),a.appendChild(e),U.set(e,{yPercent:100,opacity:0}),t&&U.set(t,{scale:0,transformOrigin:"center center"});const c=1;U.to(e,{opacity:1,yPercent:0,duration:c,ease:"power4.inOut",onComplete:()=>uM(n,i)}),t&&U.to(t,{scale:1,duration:c,ease:"power4.inOut"})}function fM(){hc&&(clearTimeout(hc),hc=null),dc&&(dc.kill(),dc=null),xs=0}const nf="184",dM=0,U_=1,pM=2,pc=1,mM=2,Ga=3,Br=0,Vn=1,ir=2,rr=0,po=1,N_=2,F_=3,O_=4,gM=5,Ss=100,_M=101,vM=102,xM=103,SM=104,yM=200,MM=201,EM=202,TM=203,rf=204,sf=205,bM=206,wM=207,AM=208,CM=209,RM=210,PM=211,LM=212,DM=213,IM=214,of=0,af=1,lf=2,mo=3,cf=4,uf=5,hf=6,ff=7,B_=0,UM=1,NM=2,Bi=0,k_=1,z_=2,V_=3,H_=4,G_=5,W_=6,X_=7,q_=300,ys=301,go=302,df=303,pf=304,mc=306,mf=1e3,sr=1001,gf=1002,an=1003,FM=1004,gc=1005,yt=1006,_f=1007,Ms=1008,Qn=1009,Y_=1010,$_=1011,Wa=1012,vf=1013,ki=1014,zi=1015,Vi=1016,xf=1017,Sf=1018,Xa=1020,K_=35902,Z_=35899,j_=1021,J_=1022,ei=1023,or=1026,Es=1027,Q_=1028,yf=1029,Ts=1030,Mf=1031,Ef=1033,_c=33776,vc=33777,xc=33778,Sc=33779,Tf=35840,bf=35841,wf=35842,Af=35843,Cf=36196,Rf=37492,Pf=37496,Lf=37488,Df=37489,yc=37490,If=37491,Uf=37808,Nf=37809,Ff=37810,Of=37811,Bf=37812,kf=37813,zf=37814,Vf=37815,Hf=37816,Gf=37817,Wf=37818,Xf=37819,qf=37820,Yf=37821,$f=36492,Kf=36494,Zf=36495,jf=36283,Jf=36284,Mc=36285,Qf=36286,OM=3200,e0=0,BM=1,kr="",Sn="srgb",Ec="srgb-linear",Tc="linear",gt="srgb",_o=7680,t0=519,kM=512,zM=513,VM=514,ed=515,HM=516,GM=517,td=518,WM=519,n0=35044,i0="300 es",Hi=2e3,bc=2001;function XM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qM(){const r=qa("canvas");return r.style.display="block",r}const r0={};function s0(...r){const e="THREE."+r.shift()}function o0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function qe(...r){r=o0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace}}function ht(...r){r=o0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace}}function nd(...r){const e=r.join(" ");e in r0||(r0[e]=!0,qe(...r))}function YM(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const $M={[of]:af,[lf]:hf,[cf]:ff,[mo]:uf,[af]:of,[hf]:lf,[ff]:cf,[uf]:mo};class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,rd=180/Math.PI;function Ya(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function KM(r,e){return(r%e+e)%e}function sd(r,e,t){return(1-t)*r+t*e}function $a(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tp=class Tp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tp.prototype.isVector2=!0;let dt=Tp;class vo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(h!==_||c!==f||l!==d||u!==m){let p=c*f+l*d+u*m+h*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const x=Math.acos(p),M=Math.sin(x);g=Math.sin(g*x)/M,a=Math.sin(a*x)/M,c=c*g+f*a,l=l*g+d*a,u=u*g+m*a,h=h*g+_*a}else{c=c*g+f*a,l=l*g+d*a,u=u*g+m*a,h=h*g+_*a;const x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-a*d,e[t+2]=l*m+u*d+a*f-c*h,e[t+3]=u*m-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bp=class bp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bp.prototype.isVector3=!0;let Y=bp;const od=new Y,a0=new vo,wp=class wp{constructor(e,t,n,i,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],x=i[1],M=i[4],S=i[7],b=i[2],T=i[5],C=i[8];return s[0]=o*_+a*x+c*b,s[3]=o*p+a*M+c*T,s[6]=o*g+a*S+c*C,s[1]=l*_+u*x+h*b,s[4]=l*p+u*M+h*T,s[7]=l*g+u*S+h*C,s[2]=f*_+d*x+m*b,s[5]=f*p+d*M+m*T,s[8]=f*g+d*S+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ad.makeScale(e,t)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;let Ze=wp;const ad=new Ze,l0=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c0=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZM(){const r={enabled:!0,workingColorSpace:Ec,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(i.r=ar(i.r),i.g=ar(i.g),i.b=ar(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(i.r=xo(i.r),i.g=xo(i.g),i.b=xo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kr?Tc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return nd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return nd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ec]:{primaries:e,whitePoint:n,transfer:Tc,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),r}const ct=ZM();function ar(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let So;class jM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{So===void 0&&(So=qa("canvas")),So.width=e.width,So.height=e.height;const i=So.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=So}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ar(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JM=0;class ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(cd(i[o].image)):s.push(cd(i[o]))}else s=cd(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function cd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let QM=0;const ud=new Y;class ln extends bs{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=sr,i=sr,s=yt,o=Ms,a=ei,c=Qn,l=ln.DEFAULT_ANISOTROPY,u=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Ya(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null,ln.DEFAULT_MAPPING=q_,ln.DEFAULT_ANISOTROPY=1;const Ap=class Ap{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,S=(d+1)/2,b=(g+1)/2,T=(u+f)/4,C=(h+_)/4,v=(m+p)/4;return M>S&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=T/n,s=C/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ap.prototype.isVector4=!0;let zt=Ap;class eE extends bs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new ln(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ld(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends eE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class u0 extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tE extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=class gu{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,m,_,p)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gu().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/yo.setFromMatrixColumn(e,0).length(),s=1/yo.setFromMatrixColumn(e,1).length(),o=1/yo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,_=l*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nE,e,iE)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),zr.crossVectors(n,ti),zr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),zr.crossVectors(n,ti)),zr.normalize(),wc.crossVectors(ti,zr),i[0]=zr.x,i[4]=wc.x,i[8]=ti.x,i[1]=zr.y,i[5]=wc.y,i[9]=ti.y,i[2]=zr.z,i[6]=wc.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],x=n[3],M=n[7],S=n[11],b=n[15],T=i[0],C=i[4],v=i[8],E=i[12],w=i[1],R=i[5],L=i[9],N=i[13],O=i[2],I=i[6],z=i[10],B=i[14],K=i[3],Z=i[7],D=i[11],re=i[15];return s[0]=o*T+a*w+c*O+l*K,s[4]=o*C+a*R+c*I+l*Z,s[8]=o*v+a*L+c*z+l*D,s[12]=o*E+a*N+c*B+l*re,s[1]=u*T+h*w+f*O+d*K,s[5]=u*C+h*R+f*I+d*Z,s[9]=u*v+h*L+f*z+d*D,s[13]=u*E+h*N+f*B+d*re,s[2]=m*T+_*w+p*O+g*K,s[6]=m*C+_*R+p*I+g*Z,s[10]=m*v+_*L+p*z+g*D,s[14]=m*E+_*N+p*B+g*re,s[3]=x*T+M*w+S*O+b*K,s[7]=x*C+M*R+S*I+b*Z,s[11]=x*v+M*L+S*z+b*D,s[15]=x*E+M*N+S*B+b*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],x=c*d-l*f,M=a*d-l*h,S=a*f-c*h,b=o*d-l*u,T=o*f-c*u,C=o*h-a*u;return t*(_*x-p*M+g*S)-n*(m*x-p*b+g*T)+i*(m*M-_*b+g*C)-s*(m*S-_*T+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],x=t*a-n*o,M=t*c-i*o,S=t*l-s*o,b=n*c-i*a,T=n*l-s*a,C=i*l-s*c,v=u*_-h*m,E=u*p-f*m,w=u*g-d*m,R=h*p-f*_,L=h*g-d*_,N=f*g-d*p,O=x*N-M*L+S*R+b*w-T*E+C*v;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=(a*N-c*L+l*R)*I,e[1]=(i*L-n*N-s*R)*I,e[2]=(_*C-p*T+g*b)*I,e[3]=(f*T-h*C-d*b)*I,e[4]=(c*w-o*N-l*E)*I,e[5]=(t*N-i*w+s*E)*I,e[6]=(p*S-m*C-g*M)*I,e[7]=(u*C-f*S+d*M)*I,e[8]=(o*L-a*w+l*v)*I,e[9]=(n*w-t*L-s*v)*I,e[10]=(m*T-_*S+g*x)*I,e[11]=(h*S-u*T-d*x)*I,e[12]=(a*E-o*R-c*v)*I,e[13]=(t*R-n*E+i*v)*I,e[14]=(_*M-m*b-p*x)*I,e[15]=(u*b-h*M+f*x)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,m=s*h,_=o*u,p=o*h,g=a*h,x=c*l,M=c*u,S=c*h,b=n.x,T=n.y,C=n.z;return i[0]=(1-(_+g))*b,i[1]=(d+S)*b,i[2]=(m-M)*b,i[3]=0,i[4]=(d-S)*T,i[5]=(1-(f+g))*T,i[6]=(p+x)*T,i[7]=0,i[8]=(m+M)*C,i[9]=(p-x)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=yo.set(i[0],i[1],i[2]).length();const a=yo.set(i[4],i[5],i[6]).length(),c=yo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Mi.copy(this);const l=1/o,u=1/a,h=1/c;return Mi.elements[0]*=l,Mi.elements[1]*=l,Mi.elements[2]*=l,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,t.setFromRotationMatrix(Mi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,o,a=Hi,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===Hi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===bc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Hi,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===Hi)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===bc)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};gu.prototype.isMatrix4=!0;let Qt=gu;const yo=new Y,Mi=new Qt,nE=new Y(0,0,0),iE=new Y(1,1,1),zr=new Y,wc=new Y,ti=new Y,h0=new Qt,f0=new vo;class ws{constructor(e=0,t=0,n=0,i=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return h0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class d0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rE=0;const p0=new Y,Mo=new vo,lr=new Qt,Ac=new Y,Ka=new Y,sE=new Y,oE=new vo,m0=new Y(1,0,0),g0=new Y(0,1,0),_0=new Y(0,0,1),v0={type:"added"},aE={type:"removed"},Eo={type:"childadded",child:null},hd={type:"childremoved",child:null};class ni extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new Y,t=new ws,n=new vo,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ze}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(_0,e)}translateOnAxis(e,t){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(_0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ac.copy(e):Ac.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Ka,Ac,this.up):lr.lookAt(Ac,Ka,this.up),this.quaternion.setFromRotationMatrix(lr),i&&(lr.extractRotation(i.matrixWorld),Mo.setFromRotationMatrix(lr),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v0),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aE),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v0),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,sE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,oE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ni.DEFAULT_UP=new Y(0,1,0),ni.DEFAULT_MATRIX_AUTO_UPDATE=!0,ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const x0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function dd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=KM(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=dd(o,s,e+1/3),this.g=dd(o,s,e),this.b=dd(o,s,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const n=x0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return ct.workingToColorSpace(Mn.copy(this),e),Math.round(lt(Mn.r*255,0,255))*65536+Math.round(lt(Mn.g*255,0,255))*256+Math.round(lt(Mn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Mn.copy(this),t);const n=Mn.r,i=Mn.g,s=Mn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Sn){ct.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,i=Mn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Rc);const n=sd(Vr.h,Rc.h,t),i=sd(Vr.s,Rc.s,t),s=sd(Vr.l,Rc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new _t;_t.NAMES=x0;class S0 extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ws,this.environmentIntensity=1,this.environmentRotation=new ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ei=new Y,cr=new Y,pd=new Y,ur=new Y,To=new Y,bo=new Y,y0=new Y,md=new Y,gd=new Y,_d=new Y,vd=new zt,xd=new zt,Sd=new zt;class Ti{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ei.subVectors(i,t),cr.subVectors(n,t),pd.subVectors(e,t);const o=Ei.dot(Ei),a=Ei.dot(cr),c=Ei.dot(pd),l=cr.dot(cr),u=cr.dot(pd),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,ur)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ur.x),c.addScaledVector(o,ur.y),c.addScaledVector(a,ur.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return vd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(e,t),xd.fromBufferAttribute(e,n),Sd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(vd,s.x),o.addScaledVector(xd,s.y),o.addScaledVector(Sd,s.z),o}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),cr.subVectors(e,t),Ei.cross(cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ei.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;To.subVectors(i,n),bo.subVectors(s,n),md.subVectors(e,n);const c=To.dot(md),l=bo.dot(md);if(c<=0&&l<=0)return t.copy(n);gd.subVectors(e,i);const u=To.dot(gd),h=bo.dot(gd);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(To,o);_d.subVectors(e,s);const d=To.dot(_d),m=bo.dot(_d);if(m>=0&&d<=m)return t.copy(s);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(bo,a);const p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return y0.subVectors(s,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(y0,a);const g=1/(p+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(To,o).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Za{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pc.copy(n.boundingBox)),Pc.applyMatrix4(e.matrixWorld),this.union(Pc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Lc.subVectors(this.max,ja),wo.subVectors(e.a,ja),Ao.subVectors(e.b,ja),Co.subVectors(e.c,ja),Hr.subVectors(Ao,wo),Gr.subVectors(Co,Ao),As.subVectors(wo,Co);let t=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-As.z,As.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,As.z,0,-As.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-As.y,As.x,0];return!yd(t,wo,Ao,Co,Lc)||(t=[1,0,0,0,1,0,0,0,1],!yd(t,wo,Ao,Co,Lc))?!1:(Dc.crossVectors(Hr,Gr),t=[Dc.x,Dc.y,Dc.z],yd(t,wo,Ao,Co,Lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],bi=new Y,Pc=new Za,wo=new Y,Ao=new Y,Co=new Y,Hr=new Y,Gr=new Y,As=new Y,ja=new Y,Lc=new Y,Dc=new Y,Cs=new Y;function yd(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Cs.fromArray(r,s);const a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),c=e.dot(Cs),l=t.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Yt=new Y,Ic=new dt;let cE=0;class Gi extends bs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=n0,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$a(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$a(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$a(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$a(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==n0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class M0 extends Gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class E0 extends Gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fr extends Gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const uE=new Za,Ja=new Y,Md=new Y;class Ed{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uE.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);const t=Ja.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ja,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(Md)),this.expandByPoint(Ja.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hE=0;const pi=new Qt,Td=new ni,Ro=new Y,ii=new Za,Qa=new Za,cn=new Y;class dr extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(XM(e)?E0:M0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ed);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qa.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(ii.min,Qa.min),ii.expandByPoint(cn),cn.addVectors(ii.max,Qa.max),ii.expandByPoint(cn)):(ii.expandByPoint(Qa.min),ii.expandByPoint(Qa.max))}ii.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)cn.fromBufferAttribute(a,l),c&&(Ro.fromBufferAttribute(e,l),cn.add(Ro)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new Y,c[v]=new Y;const l=new Y,u=new Y,h=new Y,f=new dt,d=new dt,m=new dt,_=new Y,p=new Y;function g(v,E,w){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),u.sub(l),h.sub(l),d.sub(f),m.sub(f);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),a[v].add(_),a[E].add(_),a[w].add(_),c[v].add(p),c[E].add(p),c[w].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,E=x.length;v<E;++v){const w=x[v],R=w.start,L=w.count;for(let N=R,O=R+L;N<O;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const M=new Y,S=new Y,b=new Y,T=new Y;function C(v){b.fromBufferAttribute(i,v),T.copy(b);const E=a[v];M.copy(E),M.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(T,E);const R=S.dot(c[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,R)}for(let v=0,E=x.length;v<E;++v){const w=x[v],R=w.start,L=w.count;for(let N=R,O=R+L;N<O;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new Y,s=new Y,o=new Y,a=new Y,c=new Y,l=new Y,u=new Y,h=new Y;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let g=0;g<u;g++)f[m++]=l[d++]}return new Gi(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dr,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fE=0;class Uc extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=po,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(n.blending=this.blending),this.side!==Br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rf&&(n.blendSrc=this.blendSrc),this.blendDst!==sf&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pr=new Y,bd=new Y,Nc=new Y,Wr=new Y,wd=new Y,Fc=new Y,Ad=new Y;class dE{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bd.copy(e).add(t).multiplyScalar(.5),Nc.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(bd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Nc),a=Wr.dot(this.direction),c=-Wr.dot(Nc),l=Wr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=s*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(bd).addScaledVector(Nc,f),d}intersectSphere(e,t){pr.subVectors(e.center,this.origin);const n=pr.dot(this.direction),i=pr.dot(pr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,n,i,s){wd.subVectors(t,e),Fc.subVectors(n,e),Ad.crossVectors(wd,Fc);let o=this.direction.dot(Ad),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wr.subVectors(this.origin,e);const c=a*this.direction.dot(Fc.crossVectors(Wr,Fc));if(c<0)return null;const l=a*this.direction.dot(wd.cross(Wr));if(l<0||c+l>o)return null;const u=-a*Wr.dot(Ad);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class T0 extends Uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.combine=B_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const b0=new Qt,Rs=new dE,Oc=new Ed,w0=new Y,Bc=new Y,kc=new Y,zc=new Y,Cd=new Y,Vc=new Y,A0=new Y,Hc=new Y;class wi extends ni{constructor(e=new dr,t=new T0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Vc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Cd.fromBufferAttribute(h,e),o?Vc.addScaledVector(Cd,u):Vc.addScaledVector(Cd.sub(t),u))}t.add(Vc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),Rs.copy(e.ray).recast(e.near),!(Oc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Oc,w0)===null||Rs.origin.distanceToSquared(w0)>(e.far-e.near)**2))&&(b0.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(b0),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,b=M;S<b;S+=3){const T=a.getX(S),C=a.getX(S+1),v=a.getX(S+2);i=Gc(this,g,e,n,l,u,h,T,C,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const x=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);i=Gc(this,o,e,n,l,u,h,x,M,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,b=M;S<b;S+=3){const T=S,C=S+1,v=S+2;i=Gc(this,g,e,n,l,u,h,T,C,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const x=p,M=p+1,S=p+2;i=Gc(this,o,e,n,l,u,h,x,M,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function pE(r,e,t,n,i,s,o,a){let c;if(e.side===Vn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Br,a),c===null)return null;Hc.copy(a),Hc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Hc);return l<t.near||l>t.far?null:{distance:l,point:Hc.clone(),object:r}}function Gc(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Bc),r.getVertexPosition(c,kc),r.getVertexPosition(l,zc);const u=pE(r,e,t,n,Bc,kc,zc,A0);if(u){const h=new Y;Ti.getBarycoord(A0,Bc,kc,zc,h),i&&(u.uv=Ti.getInterpolatedAttribute(i,a,c,l,h,new dt)),s&&(u.uv1=Ti.getInterpolatedAttribute(s,a,c,l,h,new dt)),o&&(u.normal=Ti.getInterpolatedAttribute(o,a,c,l,h,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new Y,materialIndex:0};Ti.getNormal(Bc,kc,zc,f.normal),u.face=f,u.barycoord=h}return u}class C0 extends ln{constructor(e=null,t=1,n=1,i,s,o,a,c,l=an,u=an,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rd=new Y,mE=new Y,gE=new Ze;class Ps{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rd.subVectors(n,t).cross(mE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Rd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gE.getNormalMatrix(e),i=this.coplanarPoint(Rd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Ed,_E=new dt(.5,.5),Wc=new Y;class R0{constructor(e=new Ps,t=new Ps,n=new Ps,i=new Ps,s=new Ps,o=new Ps){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],_=s[9],p=s[10],g=s[11],x=s[12],M=s[13],S=s[14],b=s[15];if(i[0].setComponents(l-o,d-u,g-m,b-x).normalize(),i[1].setComponents(l+o,d+u,g+m,b+x).normalize(),i[2].setComponents(l+a,d+h,g+_,b+M).normalize(),i[3].setComponents(l-a,d-h,g-_,b-M).normalize(),n)i[4].setComponents(c,f,p,S).normalize(),i[5].setComponents(l-c,d-f,g-p,b-S).normalize();else if(i[4].setComponents(l-c,d-f,g-p,b-S).normalize(),t===Hi)i[5].setComponents(l+c,d+f,g+p,b+S).normalize();else if(t===bc)i[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=_E.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wc.x=i.normal.x>0?e.max.x:e.min.x,Wc.y=i.normal.y>0?e.max.y:e.min.y,Wc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vE extends ln{constructor(e,t,n,i,s=yt,o=yt,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class P0 extends ln{constructor(e=[],t=ys,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Po extends ln{constructor(e,t,n=ki,i,s,o,a=an,c=an,l,u=or,h=1){if(u!==or&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xE extends Po{constructor(e,t=ki,n=ys,i,s,o=an,a=an,c,l=or){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class L0 extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends dr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new fr(l,3)),this.setAttribute("normal",new fr(u,3)),this.setAttribute("uv",new fr(h,2));function m(_,p,g,x,M,S,b,T,C,v,E){const w=S/C,R=b/v,L=S/2,N=b/2,O=T/2,I=C+1,z=v+1;let B=0,K=0;const Z=new Y;for(let D=0;D<z;D++){const re=D*R-N;for(let ce=0;ce<I;ce++){const ke=ce*w-L;Z[_]=ke*x,Z[p]=re*M,Z[g]=O,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[g]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(ce/C),h.push(1-D/v),B+=1}}for(let D=0;D<v;D++)for(let re=0;re<C;re++){const ce=f+re+I*D,ke=f+re+I*(D+1),Ie=f+(re+1)+I*(D+1),Se=f+(re+1)+I*D;c.push(ce,ke,Se),c.push(ke,Ie,Se),K+=6}a.addGroup(d,K,E),d+=K,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Lo extends dr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const x=g*f-o;for(let M=0;M<l;M++){const S=M*h-s;m.push(S,-x,0),_.push(0,0,1),p.push(M/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){const M=x+l*g,S=x+l*(g+1),b=x+1+l*(g+1),T=x+1+l*g;d.push(M,S,T),d.push(S,b,T)}this.setIndex(d),this.setAttribute("position",new fr(m,3)),this.setAttribute("normal",new fr(_,3)),this.setAttribute("uv",new fr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Do(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(D0(i))i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(D0(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const n=Do(r[t]);for(const i in n)e[i]=n[i]}return e}function D0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function SE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function I0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const yE={clone:Do,merge:Un};var ME=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Uc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ME,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=SE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class TE extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bE extends Uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wE extends Uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(U0(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!U0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function U0(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class AE{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const CE=new AE;class Ld{constructor(e){this.manager=e!==void 0?e:CE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ld.DEFAULT_MATERIAL_NAME="__DEFAULT";const Io=new WeakMap;class RE extends Ld{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pd.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Io.get(o);h===void 0&&(h=[],Io.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=qa("img");function c(){u(),t&&t(this);const h=Io.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Io.delete(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),Pd.remove(`image:${e}`);const f=Io.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}Io.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pd.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class PE extends Ld{constructor(e){super(e)}load(e,t,n,i){const s=new ln,o=new RE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}const Xc=new Y,qc=new vo,Wi=new Y;class N0 extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,qc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,qc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xc,qc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,qc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new Y,F0=new dt,O0=new dt;class gi extends N0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,F0,O0),t.subVectors(O0,F0)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(id*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Dd extends N0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Uo=-90,No=1;class LE extends ni{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gi(Uo,No,e,t);i.layers=this.layers,this.add(i);const s=new gi(Uo,No,e,t);s.layers=this.layers,this.add(s);const o=new gi(Uo,No,e,t);o.layers=this.layers,this.add(o);const a=new gi(Uo,No,e,t);a.layers=this.layers,this.add(a);const c=new gi(Uo,No,e,t);c.layers=this.layers,this.add(c);const l=new gi(Uo,No,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class DE extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cp=class Cp{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Cp.prototype.isMatrix2=!0;let B0=Cp;function k0(r,e,t,n){const i=IE(n);switch(t){case j_:return r*e;case Q_:return r*e/i.components*i.byteLength;case yf:return r*e/i.components*i.byteLength;case Ts:return r*e*2/i.components*i.byteLength;case Mf:return r*e*2/i.components*i.byteLength;case J_:return r*e*3/i.components*i.byteLength;case ei:return r*e*4/i.components*i.byteLength;case Ef:return r*e*4/i.components*i.byteLength;case _c:case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xc:case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bf:case Af:return Math.max(r,16)*Math.max(e,8)/4;case Tf:case wf:return Math.max(r,8)*Math.max(e,8)/2;case Cf:case Rf:case Lf:case Df:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pf:case yc:case If:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Of:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $f:case Kf:case Zf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case jf:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Mc:case Qf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IE(r){switch(r){case Qn:case Y_:return{byteLength:1,components:1};case Wa:case $_:case Vi:return{byteLength:2,components:1};case xf:case Sf:return{byteLength:2,components:4};case ki:case vf:case zi:return{byteLength:4,components:1};case K_:case Z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}})),typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);function z0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function UE(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,a),h.length===0)r.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,WE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$E=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hT="gl_FragColor = linearToOutputTexel( gl_FragColor );",fT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ST=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ET=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,AT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ub=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tt={alphahash_fragment:NE,alphahash_pars_fragment:FE,alphamap_fragment:OE,alphamap_pars_fragment:BE,alphatest_fragment:kE,alphatest_pars_fragment:zE,aomap_fragment:VE,aomap_pars_fragment:HE,batching_pars_vertex:GE,batching_vertex:WE,begin_vertex:XE,beginnormal_vertex:qE,bsdfs:YE,iridescence_fragment:$E,bumpmap_pars_fragment:KE,clipping_planes_fragment:ZE,clipping_planes_pars_fragment:jE,clipping_planes_pars_vertex:JE,clipping_planes_vertex:QE,color_fragment:eT,color_pars_fragment:tT,color_pars_vertex:nT,color_vertex:iT,common:rT,cube_uv_reflection_fragment:sT,defaultnormal_vertex:oT,displacementmap_pars_vertex:aT,displacementmap_vertex:lT,emissivemap_fragment:cT,emissivemap_pars_fragment:uT,colorspace_fragment:hT,colorspace_pars_fragment:fT,envmap_fragment:dT,envmap_common_pars_fragment:pT,envmap_pars_fragment:mT,envmap_pars_vertex:gT,envmap_physical_pars_fragment:AT,envmap_vertex:_T,fog_vertex:vT,fog_pars_vertex:xT,fog_fragment:ST,fog_pars_fragment:yT,gradientmap_pars_fragment:MT,lightmap_pars_fragment:ET,lights_lambert_fragment:TT,lights_lambert_pars_fragment:bT,lights_pars_begin:wT,lights_toon_fragment:CT,lights_toon_pars_fragment:RT,lights_phong_fragment:PT,lights_phong_pars_fragment:LT,lights_physical_fragment:DT,lights_physical_pars_fragment:IT,lights_fragment_begin:UT,lights_fragment_maps:NT,lights_fragment_end:FT,lightprobes_pars_fragment:OT,logdepthbuf_fragment:BT,logdepthbuf_pars_fragment:kT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:VT,map_fragment:HT,map_pars_fragment:GT,map_particle_fragment:WT,map_particle_pars_fragment:XT,metalnessmap_fragment:qT,metalnessmap_pars_fragment:YT,morphinstance_vertex:$T,morphcolor_vertex:KT,morphnormal_vertex:ZT,morphtarget_pars_vertex:jT,morphtarget_vertex:JT,normal_fragment_begin:QT,normal_fragment_maps:eb,normal_pars_fragment:tb,normal_pars_vertex:nb,normal_vertex:ib,normalmap_pars_fragment:rb,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:ob,clearcoat_pars_fragment:ab,iridescence_pars_fragment:lb,opaque_fragment:cb,packing:ub,premultiplied_alpha_fragment:hb,project_vertex:fb,dithering_fragment:db,dithering_pars_fragment:pb,roughnessmap_fragment:mb,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:_b,shadowmap_pars_vertex:vb,shadowmap_vertex:xb,shadowmask_pars_fragment:Sb,skinbase_vertex:yb,skinning_pars_vertex:Mb,skinning_vertex:Eb,skinnormal_vertex:Tb,specularmap_fragment:bb,specularmap_pars_fragment:wb,tonemapping_fragment:Ab,tonemapping_pars_fragment:Cb,transmission_fragment:Rb,transmission_pars_fragment:Pb,uv_pars_fragment:Lb,uv_pars_vertex:Db,uv_vertex:Ib,worldpos_vertex:Ub,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Te={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Xi={basic:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Un([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Un([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new _t(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Un([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Un([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Un([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Un([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Un([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Un([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Un([Te.common,Te.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Un([Te.lights,Te.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Xi.physical={uniforms:Un([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Yc={r:0,b:0,g:0},Nb=new Qt,V0=new Ze;V0.set(-1,0,0,0,1,0,0,0,1);function Fb(r,e,t,n,i,s){const o=new _t(0);let a=i===!0?0:1,c,l,u=null,h=0,f=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=e.get(M,S)}return M}function m(x){let M=!1;const S=d(x);S===null?p(o,a):S&&S.isColor&&(p(S,1),M=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,M){const S=d(M);S&&(S.isCubeTexture||S.mapping===mc)?(l===void 0&&(l=new wi(new el(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Do(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(V0),l.material.toneMapped=ct.getTransfer(S.colorSpace)!==gt,(u!==S||h!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new wi(new Lo(2,2),new mi({name:"BackgroundMaterial",uniforms:Do(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Yc,I0(r)),t.buffers.color.setClear(Yc.r,Yc.g,Yc.b,M,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:_,dispose:g}}function Ob(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(R,L,N,O,I){let z=!1;const B=h(R,O,N,L);s!==B&&(s=B,l(s.object)),z=d(R,O,N,I),z&&m(R,O,N,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(R,L,N,O),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return r.createVertexArray()}function l(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function h(R,L,N,O){const I=O.wireframe===!0;let z=n[L.id];z===void 0&&(z={},n[L.id]=z);const B=R.isInstancedMesh===!0?R.id:0;let K=z[B];K===void 0&&(K={},z[B]=K);let Z=K[N.id];Z===void 0&&(Z={},K[N.id]=Z);let D=Z[I];return D===void 0&&(D=f(c()),Z[I]=D),D}function f(R){const L=[],N=[],O=[];for(let I=0;I<t;I++)L[I]=0,N[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:O,object:R,attributes:{},index:null}}function d(R,L,N,O){const I=s.attributes,z=L.attributes;let B=0;const K=N.getAttributes();for(const Z in K)if(K[Z].location>=0){const re=I[Z];let ce=z[Z];if(ce===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function m(R,L,N,O){const I={},z=L.attributes;let B=0;const K=N.getAttributes();for(const Z in K)if(K[Z].location>=0){let re=z[Z];re===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),I[Z]=ce,B++}s.attributes=I,s.attributesNum=B,s.index=O}function _(){const R=s.newAttributes;for(let L=0,N=R.length;L<N;L++)R[L]=0}function p(R){g(R,0)}function g(R,L){const N=s.newAttributes,O=s.enabledAttributes,I=s.attributeDivisors;N[R]=1,O[R]===0&&(r.enableVertexAttribArray(R),O[R]=1),I[R]!==L&&(r.vertexAttribDivisor(R,L),I[R]=L)}function x(){const R=s.newAttributes,L=s.enabledAttributes;for(let N=0,O=L.length;N<O;N++)L[N]!==R[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function M(R,L,N,O,I,z,B){B===!0?r.vertexAttribIPointer(R,L,N,I,z):r.vertexAttribPointer(R,L,N,O,I,z)}function S(R,L,N,O){_();const I=O.attributes,z=N.getAttributes(),B=L.defaultAttributeValues;for(const K in z){const Z=z[K];if(Z.location>=0){let D=I[K];if(D===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),D!==void 0){const re=D.normalized,ce=D.itemSize,ke=e.get(D);if(ke===void 0)continue;const Ie=ke.buffer,Se=ke.type,$=ke.bytesPerElement,le=Se===r.INT||Se===r.UNSIGNED_INT||D.gpuType===vf;if(D.isInterleavedBufferAttribute){const te=D.data,Re=te.stride,Ne=D.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<Z.locationSize;we++)g(Z.location+we,te.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<Z.locationSize;we++)p(Z.location+we);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let we=0;we<Z.locationSize;we++)M(Z.location+we,ce/Z.locationSize,Se,re,Re*$,(Ne+ce/Z.locationSize*we)*$,le)}else{if(D.isInstancedBufferAttribute){for(let te=0;te<Z.locationSize;te++)g(Z.location+te,D.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let te=0;te<Z.locationSize;te++)p(Z.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let te=0;te<Z.locationSize;te++)M(Z.location+te,ce/Z.locationSize,Se,re,ce*$,ce/Z.locationSize*te*$,le)}}else if(B!==void 0){const re=B[K];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(Z.location,re);break;case 3:r.vertexAttrib3fv(Z.location,re);break;case 4:r.vertexAttrib4fv(Z.location,re);break;default:r.vertexAttrib1fv(Z.location,re)}}}}x()}function b(){E();for(const R in n){const L=n[R];for(const N in L){const O=L[N];for(const I in O){const z=O[I];for(const B in z)u(z[B].object),delete z[B];delete O[I]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const L=n[R.id];for(const N in L){const O=L[N];for(const I in O){const z=O[I];for(const B in z)u(z[B].object),delete z[B];delete O[I]}}delete n[R.id]}function C(R){for(const L in n){const N=n[L];for(const O in N){const I=N[O];if(I[R.id]===void 0)continue;const z=I[R.id];for(const B in z)u(z[B].object),delete z[B];delete I[R.id]}}}function v(R){for(const L in n){const N=n[L],O=R.isInstancedMesh===!0?R.id:0,I=N[O];if(I!==void 0){for(const z in I){const B=I[z];for(const K in B)u(B[K].object),delete B[K];delete I[z]}delete N[O],Object.keys(N).length===0&&delete n[L]}}}function E(){w(),o=!0,s!==i&&(s=i,l(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Bb(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function kb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==ei&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const v=C===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zi&&!v)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:b,samples:T}}function zb(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ps,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=r.get(h);if(!i||m===null||m.length===0||s&&!p)s?u(null):l();else{const x=s?0:n,M=x*4;let S=g.clippingState||null;c.value=S,S=u(m,f,M,d);for(let b=0;b!==M;++b)S[b]=t[b];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,S=d;M!==_;++M,S+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const qr=4,H0=[.125,.215,.35,.446,.526,.582],Ds=20,Vb=256,tl=new Dd,G0=new _t;let Id=null,Ud=0,Nd=0,Fd=!1;const Hb=new Y;class W0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Hb}=s;Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ud,Nd),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Vi,format:ei,colorSpace:Ec,depthBuffer:!1},i=X0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X0(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gb(s)),this._blurMaterial=Xb(s,e,t),this._ggxMaterial=Wb(s,e,t)}return i}_compileMaterial(e){const t=new wi(new dr,e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,n,i,s){const c=new gi(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(G0),h.toneMapping=Bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new el,new T0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,g=!0):(p.color.copy(G0),g=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):S===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const b=this._cubeSize;Fo(i,S*b,M>2?b:0,b,b),h.setRenderTarget(i),g&&h.render(_,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ys||e.mapping===go;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Fo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,tl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=0+l*1.25,d=h*f,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-qr?n-m+qr:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,Fo(s,p,g,3*_,2*_),i.setRenderTarget(s),i.render(a,tl),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,Fo(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(a,tl)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=l;const f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ds-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):Ds;p>Ds&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ds}`);const g=[];let x=0;for(let C=0;C<Ds;++C){const v=C/_,E=Math.exp(-v*v/2);g.push(E),C===0?x+=E:C<p&&(x+=2*E)}for(let C=0;C<g.length;C++)g[C]=g[C]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const S=this._sizeLods[i],b=3*S*(i>M-qr?i-M+qr:0),T=4*(this._cubeSize-S);Fo(t,b,T,3*S,2*S),c.setRenderTarget(t),c.render(h,tl)}}function Gb(r){const e=[],t=[],n=[];let i=r;const s=r-qr+1+H0.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-qr?c=H0[o-r+qr-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,p=2,g=1,x=new Float32Array(_*m*d),M=new Float32Array(p*m*d),S=new Float32Array(g*m*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,v=T>2?0:-1,E=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];x.set(E,_*m*T),M.set(f,p*m*T);const w=[T,T,T,T,T,T];S.set(w,g*m*T)}const b=new dr;b.setAttribute("position",new Gi(x,_)),b.setAttribute("uv",new Gi(M,p)),b.setAttribute("faceIndex",new Gi(S,g)),n.push(new wi(b,null)),i>qr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function X0(r,e,t){const n=new yi(r,e,t);return n.texture.mapping=mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wb(r,e,t){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Xb(r,e,t){const n=new Float32Array(Ds),i=new Y(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function q0(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Y0(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $0 extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new P0(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new el(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:rr});s.uniforms.tEquirect.value=t;const o=new wi(i,s),a=t.minFilter;return t.minFilter===Ms&&(t.minFilter=yt),new LE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function qb(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===df||d===pf)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new $0(m.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,m=d===df||d===pf,_=d===ys||d===go;if(m||_){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new W0(r)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return m&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new W0(r)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===df?f.mapping=ys:d===pf&&(f.mapping=go),f}function c(f){let d=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Yb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&nd("WebGLRenderer: "+n+" extension not supported."),i}}}function $b(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let M=0,S=x.length;M<S;M+=3){const b=x[M+0],T=x[M+1],C=x[M+2];f.push(b,T,T,C,C,b)}}else{const x=m.array;_=m.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const b=M+0,T=M+1,C=M+2;f.push(b,T,T,C,C,b)}}const p=new(m.count>=65535?E0:M0)(f,1);p.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Kb(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function l(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Zb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jb(r,e,t){const n=new WeakMap,i=new zt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let S=a.attributes.position.count*M,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*b*4*h),C=new u0(T,S,b,h);C.type=zi,C.needsUpdate=!0;const v=M*4;for(let w=0;w<h;w++){const R=p[w],L=g[w],N=x[w],O=S*b*4*w;for(let I=0;I<R.count;I++){const z=I*v;d===!0&&(i.fromBufferAttribute(R,I),T[O+z+0]=i.x,T[O+z+1]=i.y,T[O+z+2]=i.z,T[O+z+3]=0),m===!0&&(i.fromBufferAttribute(L,I),T[O+z+4]=i.x,T[O+z+5]=i.y,T[O+z+6]=i.z,T[O+z+7]=0),_===!0&&(i.fromBufferAttribute(N,I),T[O+z+8]=i.x,T[O+z+9]=i.y,T[O+z+10]=i.z,T[O+z+11]=N.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new dt(S,b)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Jb(r,e,t,n,i){let s=new WeakMap;function o(l){const u=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Qb={[k_]:"LINEAR_TONE_MAPPING",[z_]:"REINHARD_TONE_MAPPING",[V_]:"CINEON_TONE_MAPPING",[H_]:"ACES_FILMIC_TONE_MAPPING",[W_]:"AGX_TONE_MAPPING",[X_]:"NEUTRAL_TONE_MAPPING",[G_]:"CUSTOM_TONE_MAPPING"};function ew(r,e,t,n,i){const s=new yi(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Po(e,t):void 0}),o=new yi(e,t,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),a=new dr;a.setAttribute("position",new fr([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new fr([0,2,0,0,2,0],2));const c=new TE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new wi(a,c),u=new Dd(-1,1,1,-1,0,1);let h=null,f=null,d=!1,m,_=null,p=[],g=!1;this.setSize=function(x,M){s.setSize(x,M),o.setSize(x,M);for(let S=0;S<p.length;S++){const b=p[S];b.setSize&&b.setSize(x,M)}},this.setEffects=function(x){p=x,g=p.length>0&&p[0].isRenderPass===!0;const M=s.width,S=s.height;for(let b=0;b<p.length;b++){const T=p[b];T.setSize&&T.setSize(M,S)}},this.begin=function(x,M){if(d||x.toneMapping===Bi&&p.length===0)return!1;if(_=M,M!==null){const S=M.width,b=M.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return g===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=Bi,!0},this.hasRenderPass=function(){return g},this.end=function(x,M){x.toneMapping=m,d=!0;let S=s,b=o;for(let T=0;T<p.length;T++){const C=p[T];if(C.enabled!==!1&&(C.render(x,b,S,M),C.needsSwap!==!1)){const v=S;S=b,b=v}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,c.defines={},ct.getTransfer(h)===gt&&(c.defines.SRGB_TRANSFER="");const T=Qb[f];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(_),x.render(l,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const K0=new ln,Od=new Po(1,1),Z0=new u0,j0=new tE,J0=new P0,Q0=[],ev=[],tv=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function Oo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Q0[i];if(s===void 0&&(s=new Float32Array(i),Q0[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Kc(r,e){let t=ev[e];t===void 0&&(t=new Int32Array(e),ev[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function iw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function rw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function sw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;iv.set(n),r.uniformMatrix2fv(this.addr,!1,iv),tn(t,n)}}function ow(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;nv.set(n),r.uniformMatrix3fv(this.addr,!1,nv),tn(t,n)}}function aw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;tv.set(n),r.uniformMatrix4fv(this.addr,!1,tv),tn(t,n)}}function lw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function hw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function fw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function pw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function mw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function gw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Od.compareFunction=t.isReversedDepthBuffer()?td:ed,s=Od):s=K0,t.setTexture2D(e||s,i)}function _w(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||j0,i)}function vw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||J0,i)}function xw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Z0,i)}function Sw(r){switch(r){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return aw;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return hw;case 5125:return fw;case 36294:return dw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return xw}}function yw(r,e){r.uniform1fv(this.addr,e)}function Mw(r,e){const t=Oo(e,this.size,2);r.uniform2fv(this.addr,t)}function Ew(r,e){const t=Oo(e,this.size,3);r.uniform3fv(this.addr,t)}function Tw(r,e){const t=Oo(e,this.size,4);r.uniform4fv(this.addr,t)}function bw(r,e){const t=Oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ww(r,e){const t=Oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Aw(r,e){const t=Oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Cw(r,e){r.uniform1iv(this.addr,e)}function Rw(r,e){r.uniform2iv(this.addr,e)}function Pw(r,e){r.uniform3iv(this.addr,e)}function Lw(r,e){r.uniform4iv(this.addr,e)}function Dw(r,e){r.uniform1uiv(this.addr,e)}function Iw(r,e){r.uniform2uiv(this.addr,e)}function Uw(r,e){r.uniform3uiv(this.addr,e)}function Nw(r,e){r.uniform4uiv(this.addr,e)}function Fw(r,e,t){const n=this.cache,i=e.length,s=Kc(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Od:o=K0;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Ow(r,e,t){const n=this.cache,i=e.length,s=Kc(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||j0,s[o])}function Bw(r,e,t){const n=this.cache,i=e.length,s=Kc(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||J0,s[o])}function kw(r,e,t){const n=this.cache,i=e.length,s=Kc(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Z0,s[o])}function zw(r){switch(r){case 5126:return yw;case 35664:return Mw;case 35665:return Ew;case 35666:return Tw;case 35674:return bw;case 35675:return ww;case 35676:return Aw;case 5124:case 35670:return Cw;case 35667:case 35671:return Rw;case 35668:case 35672:return Pw;case 35669:case 35673:return Lw;case 5125:return Dw;case 36294:return Iw;case 36295:return Uw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Fw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return kw}}class Vw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sw(t.type)}}class Hw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zw(t.type)}}class Gw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function rv(r,e){r.seq.push(e),r.map[e.id]=e}function Ww(r,e,t){const n=r.name,i=n.length;for(Bd.lastIndex=0;;){const s=Bd.exec(n),o=Bd.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){rv(t,l===void 0?new Vw(a,r,e):new Hw(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Gw(a),rv(t,h)),t=h}}}class Zc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ww(a,c,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Xw=37297;let qw=0;function Yw(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ov=new Ze;function $w(r){ct._getMatrix(ov,ct.workingColorSpace,r);const e=`mat3( ${ov.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(r)){case Tc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function av(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Yw(r.getShaderSource(e),a)}else return s}function Kw(r,e){const t=$w(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Zw={[k_]:"Linear",[z_]:"Reinhard",[V_]:"Cineon",[H_]:"ACESFilmic",[W_]:"AgX",[X_]:"Neutral",[G_]:"Custom"};function jw(r,e){const t=Zw[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jc=new Y;function Jw(){ct.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function e1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function nl(r){return r!==""}function lv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(r){return r.replace(n1,r1)}const i1=new Map;function r1(r,e){let t=tt[e];if(t===void 0){const n=i1.get(e);if(n!==void 0)t=tt[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kd(t)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(r){return r.replace(s1,o1)}function o1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const a1={[pc]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function l1(r){return a1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c1={[ys]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function u1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":c1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const h1={[go]:"ENVMAP_MODE_REFRACTION"};function f1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":h1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d1={[B_]:"ENVMAP_BLENDING_MULTIPLY",[UM]:"ENVMAP_BLENDING_MIX",[NM]:"ENVMAP_BLENDING_ADD"};function p1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":d1[r.combine]||"ENVMAP_BLENDING_NONE"}function m1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=l1(t),l=u1(t),u=f1(t),h=p1(t),f=m1(t),d=Qw(t),m=e1(s),_=i.createProgram();let p,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(nl).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(nl).join(`
`),g.length>0&&(g+=`
`)):(p=[hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),g=[hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?jw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Kw("linearToOutputTexel",t.outputColorSpace),Jw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nl).join(`
`)),o=kd(o),o=lv(o,t),o=cv(o,t),a=kd(a),a=lv(a,t),a=cv(a,t),o=uv(o),a=uv(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=x+p+o,S=x+g+a,b=sv(i,i.VERTEX_SHADER,M),T=sv(i,i.FRAGMENT_SHADER,S);i.attachShader(_,b),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(R){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(b)||"",O=i.getShaderInfoLog(T)||"",I=L.trim(),z=N.trim(),B=O.trim();let K=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,T);else{const D=av(i,b,"vertex"),re=av(i,T,"fragment");ht("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+D+`
`+re)}else I!==""?qe("WebGLProgram: Program Info Log:",I):(z===""||B==="")&&(Z=!1);Z&&(R.diagnostics={runnable:K,programLog:I,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:g}})}i.deleteShader(b),i.deleteShader(T),v=new Zc(i,_),E=t1(i,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,Xw)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let _1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x1(e),t.set(e,n)),n}}class x1{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}}function S1(r){return r===Ts||r===yc||r===Mc}function y1(r,e,t,n,i,s){const o=new d0,a=new v1,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,E,w,R,L,N){const O=R.fog,I=L.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||z,B),Z=K&&K.mapping===mc?K.image.height:null,D=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const re=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ce=re!==void 0?re.length:0;let ke=0;I.morphAttributes.position!==void 0&&(ke=1),I.morphAttributes.normal!==void 0&&(ke=2),I.morphAttributes.color!==void 0&&(ke=3);let Ie,Se,$,le;if(D){const de=Xi[D];Ie=de.vertexShader,Se=de.fragmentShader}else Ie=v.vertexShader,Se=v.fragmentShader,a.update(v),$=a.getVertexShaderID(v),le=a.getFragmentShaderID(v);const te=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,we=L.isBatchedMesh===!0,Je=!!v.map,pe=!!v.matcap,Le=!!K,je=!!v.aoMap,Ve=!!v.lightMap,W=!!v.bumpMap,$e=!!v.normalMap,Pt=!!v.displacementMap,k=!!v.emissiveMap,ve=!!v.metalnessMap,We=!!v.roughnessMap,ut=v.anisotropy>0,_e=v.clearcoat>0,et=v.dispersion>0,P=v.iridescence>0,y=v.sheen>0,H=v.transmission>0,J=ut&&!!v.anisotropyMap,ne=_e&&!!v.clearcoatMap,me=_e&&!!v.clearcoatNormalMap,se=_e&&!!v.clearcoatRoughnessMap,j=P&&!!v.iridescenceMap,ee=P&&!!v.iridescenceThicknessMap,ye=y&&!!v.sheenColorMap,Ce=y&&!!v.sheenRoughnessMap,ge=!!v.specularMap,he=!!v.specularColorMap,xe=!!v.specularIntensityMap,Xe=H&&!!v.transmissionMap,Ke=H&&!!v.thicknessMap,F=!!v.gradientMap,ue=!!v.alphaMap,Q=v.alphaTest>0,Ee=!!v.alphaHash,fe=!!v.extensions;let ie=Bi;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ie=r.toneMapping);const ae={shaderID:D,shaderType:v.type,shaderName:v.name,vertexShader:Ie,fragmentShader:Se,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:we,batchingColor:we&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:pe,envMap:Le,envMapMode:Le&&K.mapping,envMapCubeUVHeight:Z,aoMap:je,lightMap:Ve,bumpMap:W,normalMap:$e,displacementMap:Pt,emissiveMap:k,normalMapObjectSpace:$e&&v.normalMapType===BM,normalMapTangentSpace:$e&&v.normalMapType===e0,packedNormalMap:$e&&v.normalMapType===e0&&S1(v.normalMap.format),metalnessMap:ve,roughnessMap:We,anisotropy:ut,anisotropyMap:J,clearcoat:_e,clearcoatMap:ne,clearcoatNormalMap:me,clearcoatRoughnessMap:se,dispersion:et,iridescence:P,iridescenceMap:j,iridescenceThicknessMap:ee,sheen:y,sheenColorMap:ye,sheenRoughnessMap:Ce,specularMap:ge,specularColorMap:he,specularIntensityMap:xe,transmission:H,transmissionMap:Xe,thicknessMap:Ke,gradientMap:F,opaque:v.transparent===!1&&v.blending===po&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:Q,alphaHash:Ee,combine:v.combine,mapUv:Je&&m(v.map.channel),aoMapUv:je&&m(v.aoMap.channel),lightMapUv:Ve&&m(v.lightMap.channel),bumpMapUv:W&&m(v.bumpMap.channel),normalMapUv:$e&&m(v.normalMap.channel),displacementMapUv:Pt&&m(v.displacementMap.channel),emissiveMapUv:k&&m(v.emissiveMap.channel),metalnessMapUv:ve&&m(v.metalnessMap.channel),roughnessMapUv:We&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:ne&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(v.sheenRoughnessMap.channel),specularMapUv:ge&&m(v.specularMap.channel),specularColorMapUv:he&&m(v.specularColorMap.channel),specularIntensityMapUv:xe&&m(v.specularIntensityMap.channel),transmissionMapUv:Xe&&m(v.transmissionMap.channel),thicknessMapUv:Ke&&m(v.thicknessMap.channel),alphaMapUv:ue&&m(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($e||ut),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Je||ue),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&$e===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:k&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ir,flipSided:v.side===Vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)E.push(w),E.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(g(E,v),x(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function M(v){const E=d[v.type];let w;if(E){const R=Xi[E];w=yE.clone(R.uniforms)}else w=v.uniforms;return w}function S(v,E){let w=u.get(E);return w!==void 0?++w.usedTimes:(w=new g1(r,E,v,i),l.push(w),u.set(E,w)),w}function b(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:C}}function M1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function E1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function fv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dv(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,_,p,g){let x=r[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},r[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=o(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=g),e++,x}function c(f,d,m,_,p,g){const x=a(f,d,m,_,p,g);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function l(f,d,m,_,p,g){const x=a(f,d,m,_,p,g);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function u(f,d){t.length>1&&t.sort(f||E1),n.length>1&&n.sort(d||fv),i.length>1&&i.sort(d||fv)}function h(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:h,sort:u}}function T1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new dv,r.set(n,[o])):i>=s.length?(o=new dv,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function b1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new _t};break;case"SpotLight":t={position:new Y,direction:new Y,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function w1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let A1=0;function C1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function R1(r){const e=new b1,t=w1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Y);const i=new Y,s=new Qt,o=new Qt;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,x=0,M=0,S=0,b=0,T=0,C=0;l.sort(C1);for(let E=0,w=l.length;E<w;E++){const R=l[E],L=R.color,N=R.intensity,O=R.distance;let I=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ts?I=R.shadow.map.texture:I=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=L.r*N,h+=L.g*N,f+=L.b*N;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],N);C++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,K=t.get(R);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=R.shadow.matrix,x++}n.directional[d]=z,d++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=O,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const B=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,B.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=B.matrix,R.castShadow){const K=t.get(R);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=I,S++}_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=z,p++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const B=R.shadow,K=t.get(R);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=I,n.pointShadowMatrix[m]=R.shadow.matrix,M++}n.point[m]=z,m++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(N),z.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[g]=z,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==p||v.hemiLength!==g||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==S||v.numSpotMaps!==b||v.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,v.directionalLength=d,v.pointLength=m,v.spotLength=_,v.rectAreaLength=p,v.hemiLength=g,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=S,v.numSpotMaps=b,v.numLightProbes=C,n.version=A1++)}function c(l,u){let h=0,f=0,d=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,x=l.length;g<x;g++){const M=l[g];if(M.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(M.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function pv(r){const e=new R1(r),t=[],n=[],i=[];function s(f){h.camera=f,t.length=0,n.length=0,i.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function c(f){i.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function P1(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new pv(r),e.set(i,[a])):s>=o.length?(a=new pv(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const L1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I1=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],U1=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],mv=new Qt,il=new Y,zd=new Y;function N1(r,e,t){let n=new R0;const i=new dt,s=new dt,o=new zt,a=new bE,c=new wE,l={},u=t.maxTextureSize,h={[Br]:Vn,[Vn]:Br,[ir]:ir},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:L1,fragmentShader:D1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new dr;m.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wi(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let g=this.type;this.render=function(T,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===mM&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pc);const E=r.getRenderTarget(),w=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),L=r.state;L.setBlending(rr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=g!==this.type;N&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(I=>I.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,I=T.length;O<I;O++){const z=T[O],B=z.shadow;if(B===void 0){qe("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const K=B.getFrameExtents();i.multiply(K),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,B.mapSize.y=s.y));const Z=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Z,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ga){if(z.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new yi(i.x,i.y,{format:Ts,type:Vi,minFilter:yt,magFilter:yt,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Po(i.x,i.y,zi),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=or,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=an,B.map.depthTexture.magFilter=an}else z.isPointLight?(B.map=new $0(i.x),B.map.depthTexture=new xE(i.x,ki)):(B.map=new yi(i.x,i.y),B.map.depthTexture=new Po(i.x,i.y,ki)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=or,this.type===pc?(B.map.depthTexture.compareFunction=Z?td:ed,B.map.depthTexture.minFilter=yt,B.map.depthTexture.magFilter=yt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=an,B.map.depthTexture.magFilter=an);B.camera.updateProjectionMatrix()}const D=B.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<D;re++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,re),r.clear();else{re===0&&(r.setRenderTarget(B.map),r.clear());const ce=B.getViewport(re);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),L.viewport(o)}if(z.isPointLight){const ce=B.camera,ke=B.matrix,Ie=z.distance||ce.far;Ie!==ce.far&&(ce.far=Ie,ce.updateProjectionMatrix()),il.setFromMatrixPosition(z.matrixWorld),ce.position.copy(il),zd.copy(ce.position),zd.add(I1[re]),ce.up.copy(U1[re]),ce.lookAt(zd),ce.updateMatrixWorld(),ke.makeTranslation(-il.x,-il.y,-il.z),mv.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),B._frustum.setFromProjectionMatrix(mv,ce.coordinateSystem,ce.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),S(C,v,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Ga&&x(B,v),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(E,w,R)};function x(T,C){const v=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(i.x,i.y,{format:Ts,type:Vi})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(C,null,v,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(C,null,v,d,_,null)}function M(T,C,v,E){let w=null;const R=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)w=R;else if(w=v.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=w.uuid,N=C.uuid;let O=l[L];O===void 0&&(O={},l[L]=O);let I=O[N];I===void 0&&(I=w.clone(),O[N]=I,C.addEventListener("dispose",b)),w=I}if(w.visible=C.visible,w.wireframe=C.wireframe,E===Ga?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=r.properties.get(w);L.light=v}return w}function S(T,C,v,E,w){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ga)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const N=e.update(T),O=T.material;if(Array.isArray(O)){const I=N.groups;for(let z=0,B=I.length;z<B;z++){const K=I[z],Z=O[K.materialIndex];if(Z&&Z.visible){const D=M(T,Z,E,w);T.onBeforeShadow(r,T,C,v,N,D,K),r.renderBufferDirect(v,null,N,D,T,K),T.onAfterShadow(r,T,C,v,N,D,K)}}}else if(O.visible){const I=M(T,O,E,w);T.onBeforeShadow(r,T,C,v,N,I,null),r.renderBufferDirect(v,null,N,I,T,null),T.onAfterShadow(r,T,C,v,N,I,null)}}const L=T.children;for(let N=0,O=L.length;N<O;N++)S(L[N],C,v,E,w)}function b(T){T.target.removeEventListener("dispose",b);for(const v in l){const E=l[v],w=T.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function F1(r,e){function t(){let F=!1;const ue=new zt;let Q=null;const Ee=new zt(0,0,0,0);return{setMask:function(fe){Q!==fe&&!F&&(r.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){F=fe},setClear:function(fe,ie,ae,de,He){He===!0&&(fe*=de,ie*=de,ae*=de),ue.set(fe,ie,ae,de),Ee.equals(ue)===!1&&(r.clearColor(fe,ie,ae,de),Ee.copy(ue))},reset:function(){F=!1,Q=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,ue=!1,Q=null,Ee=null,fe=null;return{setReversed:function(ie){if(ue!==ie){const ae=e.get("EXT_clip_control");ie?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const de=fe;fe=null,this.setClear(de)}},getReversed:function(){return ue},setTest:function(ie){ie?te(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!F&&(r.depthMask(ie),Q=ie)},setFunc:function(ie){if(ue&&(ie=$M[ie]),Ee!==ie){switch(ie){case of:r.depthFunc(r.NEVER);break;case af:r.depthFunc(r.ALWAYS);break;case lf:r.depthFunc(r.LESS);break;case mo:r.depthFunc(r.LEQUAL);break;case cf:r.depthFunc(r.EQUAL);break;case uf:r.depthFunc(r.GEQUAL);break;case hf:r.depthFunc(r.GREATER);break;case ff:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=ie}},setLocked:function(ie){F=ie},setClear:function(ie){fe!==ie&&(fe=ie,ue&&(ie=1-ie),r.clearDepth(ie))},reset:function(){F=!1,Q=null,Ee=null,fe=null,ue=!1}}}function i(){let F=!1,ue=null,Q=null,Ee=null,fe=null,ie=null,ae=null,de=null,He=null;return{setTest:function(oe){F||(oe?te(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(oe){ue!==oe&&!F&&(r.stencilMask(oe),ue=oe)},setFunc:function(oe,Ge,Ue){(Q!==oe||Ee!==Ge||fe!==Ue)&&(r.stencilFunc(oe,Ge,Ue),Q=oe,Ee=Ge,fe=Ue)},setOp:function(oe,Ge,Ue){(ie!==oe||ae!==Ge||de!==Ue)&&(r.stencilOp(oe,Ge,Ue),ie=oe,ae=Ge,de=Ue)},setLocked:function(oe){F=oe},setClear:function(oe){He!==oe&&(r.clearStencil(oe),He=oe)},reset:function(){F=!1,ue=null,Q=null,Ee=null,fe=null,ie=null,ae=null,de=null,He=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,x=null,M=null,S=null,b=null,T=null,C=null,v=new _t(0,0,0),E=0,w=!1,R=null,L=null,N=null,O=null,I=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),B=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),B=K>=2);let D=null,re={};const ce=r.getParameter(r.SCISSOR_BOX),ke=r.getParameter(r.VIEWPORT),Ie=new zt().fromArray(ce),Se=new zt().fromArray(ke);function $(F,ue,Q,Ee){const fe=new Uint8Array(4),ie=r.createTexture();r.bindTexture(F,ie),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<Q;ae++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(ue+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return ie}const le={};le[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc(mo),W(!1),$e(U_),te(r.CULL_FACE),je(rr);function te(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function Re(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Ne(F,ue){return f[F]!==ue?(r.bindFramebuffer(F,ue),f[F]=ue,F===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),F===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function we(F,ue){let Q=m,Ee=!1;if(F){Q=d.get(ue),Q===void 0&&(Q=[],d.set(ue,Q));const fe=F.textures;if(Q.length!==fe.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,ae=fe.length;ie<ae;ie++)Q[ie]=r.COLOR_ATTACHMENT0+ie;Q.length=fe.length,Ee=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(Q)}function Je(F){return _!==F?(r.useProgram(F),_=F,!0):!1}const pe={[Ss]:r.FUNC_ADD,[_M]:r.FUNC_SUBTRACT,[vM]:r.FUNC_REVERSE_SUBTRACT};pe[xM]=r.MIN,pe[SM]=r.MAX;const Le={[yM]:r.ZERO,[MM]:r.ONE,[EM]:r.SRC_COLOR,[rf]:r.SRC_ALPHA,[RM]:r.SRC_ALPHA_SATURATE,[AM]:r.DST_COLOR,[bM]:r.DST_ALPHA,[TM]:r.ONE_MINUS_SRC_COLOR,[sf]:r.ONE_MINUS_SRC_ALPHA,[CM]:r.ONE_MINUS_DST_COLOR,[wM]:r.ONE_MINUS_DST_ALPHA,[PM]:r.CONSTANT_COLOR,[LM]:r.ONE_MINUS_CONSTANT_COLOR,[DM]:r.CONSTANT_ALPHA,[IM]:r.ONE_MINUS_CONSTANT_ALPHA};function je(F,ue,Q,Ee,fe,ie,ae,de,He,oe){if(F===rr){p===!0&&(Re(r.BLEND),p=!1);return}if(p===!1&&(te(r.BLEND),p=!0),F!==gM){if(F!==g||oe!==w){if((x!==Ss||b!==Ss)&&(r.blendEquation(r.FUNC_ADD),x=Ss,b=Ss),oe)switch(F){case po:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case N_:r.blendFunc(r.ONE,r.ONE);break;case F_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case O_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ht("WebGLState: Invalid blending: ",F);break}else switch(F){case po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case N_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case F_:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case O_:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",F);break}M=null,S=null,T=null,C=null,v.set(0,0,0),E=0,g=F,w=oe}return}fe=fe||ue,ie=ie||Q,ae=ae||Ee,(ue!==x||fe!==b)&&(r.blendEquationSeparate(pe[ue],pe[fe]),x=ue,b=fe),(Q!==M||Ee!==S||ie!==T||ae!==C)&&(r.blendFuncSeparate(Le[Q],Le[Ee],Le[ie],Le[ae]),M=Q,S=Ee,T=ie,C=ae),(de.equals(v)===!1||He!==E)&&(r.blendColor(de.r,de.g,de.b,He),v.copy(de),E=He),g=F,w=!1}function Ve(F,ue){F.side===ir?Re(r.CULL_FACE):te(r.CULL_FACE);let Q=F.side===Vn;ue&&(Q=!Q),W(Q),F.blending===po&&F.transparent===!1?je(rr):je(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),k(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function W(F){R!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),R=F)}function $e(F){F!==dM?(te(r.CULL_FACE),F!==L&&(F===U_?r.cullFace(r.BACK):F===pM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),L=F}function Pt(F){F!==N&&(B&&r.lineWidth(F),N=F)}function k(F,ue,Q){F?(te(r.POLYGON_OFFSET_FILL),(O!==ue||I!==Q)&&(O=ue,I=Q,o.getReversed()&&(ue=-ue),r.polygonOffset(ue,Q))):Re(r.POLYGON_OFFSET_FILL)}function ve(F){F?te(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function We(F){F===void 0&&(F=r.TEXTURE0+z-1),D!==F&&(r.activeTexture(F),D=F)}function ut(F,ue,Q){Q===void 0&&(D===null?Q=r.TEXTURE0+z-1:Q=D);let Ee=re[Q];Ee===void 0&&(Ee={type:void 0,texture:void 0},re[Q]=Ee),(Ee.type!==F||Ee.texture!==ue)&&(D!==Q&&(r.activeTexture(Q),D=Q),r.bindTexture(F,ue||le[F]),Ee.type=F,Ee.texture=ue)}function _e(){const F=re[D];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{r.compressedTexImage2D(...arguments)}catch(F){ht("WebGLState:",F)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(F){ht("WebGLState:",F)}}function y(){try{r.texSubImage2D(...arguments)}catch(F){ht("WebGLState:",F)}}function H(){try{r.texSubImage3D(...arguments)}catch(F){ht("WebGLState:",F)}}function J(){try{r.compressedTexSubImage2D(...arguments)}catch(F){ht("WebGLState:",F)}}function ne(){try{r.compressedTexSubImage3D(...arguments)}catch(F){ht("WebGLState:",F)}}function me(){try{r.texStorage2D(...arguments)}catch(F){ht("WebGLState:",F)}}function se(){try{r.texStorage3D(...arguments)}catch(F){ht("WebGLState:",F)}}function j(){try{r.texImage2D(...arguments)}catch(F){ht("WebGLState:",F)}}function ee(){try{r.texImage3D(...arguments)}catch(F){ht("WebGLState:",F)}}function ye(F){return h[F]!==void 0?h[F]:r.getParameter(F)}function Ce(F,ue){h[F]!==ue&&(r.pixelStorei(F,ue),h[F]=ue)}function ge(F){Ie.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ie.copy(F))}function he(F){Se.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Se.copy(F))}function xe(F,ue){let Q=l.get(ue);Q===void 0&&(Q=new WeakMap,l.set(ue,Q));let Ee=Q.get(F);Ee===void 0&&(Ee=r.getUniformBlockIndex(ue,F.name),Q.set(F,Ee))}function Xe(F,ue){const Ee=l.get(ue).get(F);c.get(ue)!==Ee&&(r.uniformBlockBinding(ue,Ee,F.__bindingPointIndex),c.set(ue,Ee))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},D=null,re={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,x=null,M=null,S=null,b=null,T=null,C=null,v=new _t(0,0,0),E=0,w=!1,R=null,L=null,N=null,O=null,I=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Se.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Re,bindFramebuffer:Ne,drawBuffers:we,useProgram:Je,setBlending:je,setMaterial:Ve,setFlipSided:W,setCullFace:$e,setLineWidth:Pt,setPolygonOffset:k,setScissorTest:ve,activeTexture:We,bindTexture:ut,unbindTexture:_e,compressedTexImage2D:et,compressedTexImage3D:P,texImage2D:j,texImage3D:ee,pixelStorei:Ce,getParameter:ye,updateUBOMapping:xe,uniformBlockBinding:Xe,texStorage2D:me,texStorage3D:se,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:ge,viewport:he,reset:Ke}}function O1(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return m?new OffscreenCanvas(P,y):qa("canvas")}function p(P,y,H){let J=1;const ne=et(P);if((ne.width>H||ne.height>H)&&(J=H/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const me=Math.floor(J*ne.width),se=Math.floor(J*ne.height);f===void 0&&(f=_(me,se));const j=y?_(me,se):f;return j.width=me,j.height=se,j.getContext("2d").drawImage(P,0,0,me,se),qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+me+"x"+se+")."),j}else return"data"in P&&qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function g(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(P,y,H,J,ne,me=!1){if(P!==null){if(r[P]!==void 0)return r[P];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se;J&&(se=e.get("EXT_texture_norm16"),se||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===r.RED&&(H===r.FLOAT&&(j=r.R32F),H===r.HALF_FLOAT&&(j=r.R16F),H===r.UNSIGNED_BYTE&&(j=r.R8),H===r.UNSIGNED_SHORT&&se&&(j=se.R16_EXT),H===r.SHORT&&se&&(j=se.R16_SNORM_EXT)),y===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.R8UI),H===r.UNSIGNED_SHORT&&(j=r.R16UI),H===r.UNSIGNED_INT&&(j=r.R32UI),H===r.BYTE&&(j=r.R8I),H===r.SHORT&&(j=r.R16I),H===r.INT&&(j=r.R32I)),y===r.RG&&(H===r.FLOAT&&(j=r.RG32F),H===r.HALF_FLOAT&&(j=r.RG16F),H===r.UNSIGNED_BYTE&&(j=r.RG8),H===r.UNSIGNED_SHORT&&se&&(j=se.RG16_EXT),H===r.SHORT&&se&&(j=se.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RG8UI),H===r.UNSIGNED_SHORT&&(j=r.RG16UI),H===r.UNSIGNED_INT&&(j=r.RG32UI),H===r.BYTE&&(j=r.RG8I),H===r.SHORT&&(j=r.RG16I),H===r.INT&&(j=r.RG32I)),y===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGB8UI),H===r.UNSIGNED_SHORT&&(j=r.RGB16UI),H===r.UNSIGNED_INT&&(j=r.RGB32UI),H===r.BYTE&&(j=r.RGB8I),H===r.SHORT&&(j=r.RGB16I),H===r.INT&&(j=r.RGB32I)),y===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),H===r.UNSIGNED_INT&&(j=r.RGBA32UI),H===r.BYTE&&(j=r.RGBA8I),H===r.SHORT&&(j=r.RGBA16I),H===r.INT&&(j=r.RGBA32I)),y===r.RGB&&(H===r.UNSIGNED_SHORT&&se&&(j=se.RGB16_EXT),H===r.SHORT&&se&&(j=se.RGB16_SNORM_EXT),H===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),y===r.RGBA){const ee=me?Tc:ct.getTransfer(ne);H===r.FLOAT&&(j=r.RGBA32F),H===r.HALF_FLOAT&&(j=r.RGBA16F),H===r.UNSIGNED_BYTE&&(j=ee===gt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT&&se&&(j=se.RGBA16_EXT),H===r.SHORT&&se&&(j=se.RGBA16_SNORM_EXT),H===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(P,y){let H;return P?y===null||y===ki||y===Xa?H=r.DEPTH24_STENCIL8:y===zi?H=r.DEPTH32F_STENCIL8:y===Wa&&(H=r.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ki||y===Xa?H=r.DEPTH_COMPONENT24:y===zi?H=r.DEPTH_COMPONENT32F:y===Wa&&(H=r.DEPTH_COMPONENT16),H}function T(P,y){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==yt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function C(P){const y=P.target;y.removeEventListener("dispose",C),E(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function v(P){const y=P.target;y.removeEventListener("dispose",v),R(y)}function E(P){const y=n.get(P);if(y.__webglInit===void 0)return;const H=P.source,J=d.get(H);if(J){const ne=J[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(P),Object.keys(J).length===0&&d.delete(H)}n.remove(P)}function w(P){const y=n.get(P);r.deleteTexture(y.__webglTexture);const H=P.source,J=d.get(H);delete J[y.__cacheKey],o.memory.textures--}function R(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let ne=0;ne<y.__webglFramebuffer[J].length;ne++)r.deleteFramebuffer(y.__webglFramebuffer[J][ne]);else r.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)r.deleteFramebuffer(y.__webglFramebuffer[J]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=P.textures;for(let J=0,ne=H.length;J<ne;J++){const me=n.get(H[J]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(H[J])}n.remove(P)}let L=0;function N(){L=0}function O(){return L}function I(P){L=P}function z(){const P=L;return P>=i.maxTextures&&qe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function B(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function K(P,y){const H=n.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const J=P.image;if(J===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(H,P,y);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+y)}function Z(P,y){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Re(H,P,y);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+y)}function D(P,y){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Re(H,P,y);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+y)}function re(P,y){const H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Ne(H,P,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+y)}const ce={[mf]:r.REPEAT,[sr]:r.CLAMP_TO_EDGE,[gf]:r.MIRRORED_REPEAT},ke={[an]:r.NEAREST,[FM]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[yt]:r.LINEAR,[_f]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},Ie={[kM]:r.NEVER,[WM]:r.ALWAYS,[zM]:r.LESS,[ed]:r.LEQUAL,[VM]:r.EQUAL,[td]:r.GEQUAL,[HM]:r.GREATER,[GM]:r.NOTEQUAL};function Se(P,y){if(y.type===zi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===yt||y.magFilter===_f||y.magFilter===gc||y.magFilter===Ms||y.minFilter===yt||y.minFilter===_f||y.minFilter===gc||y.minFilter===Ms)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ce[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ce[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ce[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ke[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ke[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===an||y.minFilter!==gc&&y.minFilter!==Ms||y.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $(P,y){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",C));const J=y.source;let ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));const me=B(y);if(me!==P.__cacheKey){ne[me]===void 0&&(ne[me]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[me].usedTimes++;const se=ne[P.__cacheKey];se!==void 0&&(ne[P.__cacheKey].usedTimes--,se.usedTimes===0&&w(y)),P.__cacheKey=me,P.__webglTexture=ne[me].texture}return H}function le(P,y,H){return Math.floor(Math.floor(P/H)/y)}function te(P,y,H,J){const me=P.updateRanges;if(me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,H,J,y.data);else{me.sort((Ce,ge)=>Ce.start-ge.start);let se=0;for(let Ce=1;Ce<me.length;Ce++){const ge=me[se],he=me[Ce],xe=ge.start+ge.count,Xe=le(he.start,y.width,4),Ke=le(ge.start,y.width,4);he.start<=xe+1&&Xe===Ke&&le(he.start+he.count-1,y.width,4)===Xe?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++se,me[se]=he)}me.length=se+1;const j=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),ye=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Ce=0,ge=me.length;Ce<ge;Ce++){const he=me[Ce],xe=Math.floor(he.start/4),Xe=Math.ceil(he.count/4),Ke=xe%y.width,F=Math.floor(xe/y.width),ue=Xe,Q=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,Ke,F,ue,Q,H,J,y.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function Re(P,y,H){let J=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=r.TEXTURE_3D);const ne=$(P,y),me=y.source;t.bindTexture(J,P.__webglTexture,r.TEXTURE0+H);const se=n.get(me);if(me.version!==se.__version||ne===!0){if(t.activeTexture(r.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Q=ct.getPrimaries(ct.workingColorSpace),Ee=y.colorSpace===kr?null:ct.getPrimaries(y.colorSpace),fe=y.colorSpace===kr||Q===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=p(y.image,!1,i.maxTextureSize);ee=_e(y,ee);const ye=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type);let ge=S(y.internalFormat,ye,Ce,y.normalized,y.colorSpace,y.isVideoTexture);Se(J,y);let he;const xe=y.mipmaps,Xe=y.isVideoTexture!==!0,Ke=se.__version===void 0||ne===!0,F=me.dataReady,ue=T(y,ee);if(y.isDepthTexture)ge=b(y.format===Es,y.type),Ke&&(Xe?t.texStorage2D(r.TEXTURE_2D,1,ge,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,ge,ee.width,ee.height,0,ye,Ce,null));else if(y.isDataTexture)if(xe.length>0){Xe&&Ke&&t.texStorage2D(r.TEXTURE_2D,ue,ge,xe[0].width,xe[0].height);for(let Q=0,Ee=xe.length;Q<Ee;Q++)he=xe[Q],Xe?F&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,he.width,he.height,ye,Ce,he.data):t.texImage2D(r.TEXTURE_2D,Q,ge,he.width,he.height,0,ye,Ce,he.data);y.generateMipmaps=!1}else Xe?(Ke&&t.texStorage2D(r.TEXTURE_2D,ue,ge,ee.width,ee.height),F&&te(y,ee,ye,Ce)):t.texImage2D(r.TEXTURE_2D,0,ge,ee.width,ee.height,0,ye,Ce,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,ge,xe[0].width,xe[0].height,ee.depth);for(let Q=0,Ee=xe.length;Q<Ee;Q++)if(he=xe[Q],y.format!==ei)if(ye!==null)if(Xe){if(F)if(y.layerUpdates.size>0){const fe=k0(he.width,he.height,y.format,y.type);for(const ie of y.layerUpdates){const ae=he.data.subarray(ie*fe/he.data.BYTES_PER_ELEMENT,(ie+1)*fe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,ie,he.width,he.height,1,ye,ae)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ee.depth,ye,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,ge,he.width,he.height,ee.depth,0,he.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ee.depth,ye,Ce,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,ge,he.width,he.height,ee.depth,0,ye,Ce,he.data)}else{Xe&&Ke&&t.texStorage2D(r.TEXTURE_2D,ue,ge,xe[0].width,xe[0].height);for(let Q=0,Ee=xe.length;Q<Ee;Q++)he=xe[Q],y.format!==ei?ye!==null?Xe?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,he.width,he.height,ye,he.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,ge,he.width,he.height,0,he.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,he.width,he.height,ye,Ce,he.data):t.texImage2D(r.TEXTURE_2D,Q,ge,he.width,he.height,0,ye,Ce,he.data)}else if(y.isDataArrayTexture)if(Xe){if(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,ge,ee.width,ee.height,ee.depth),F)if(y.layerUpdates.size>0){const Q=k0(ee.width,ee.height,y.format,y.type);for(const Ee of y.layerUpdates){const fe=ee.data.subarray(Ee*Q/ee.data.BYTES_PER_ELEMENT,(Ee+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ee,ee.width,ee.height,1,ye,Ce,fe)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ye,Ce,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,ye,Ce,ee.data);else if(y.isData3DTexture)Xe?(Ke&&t.texStorage3D(r.TEXTURE_3D,ue,ge,ee.width,ee.height,ee.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ye,Ce,ee.data)):t.texImage3D(r.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,ye,Ce,ee.data);else if(y.isFramebufferTexture){if(Ke)if(Xe)t.texStorage2D(r.TEXTURE_2D,ue,ge,ee.width,ee.height);else{let Q=ee.width,Ee=ee.height;for(let fe=0;fe<ue;fe++)t.texImage2D(r.TEXTURE_2D,fe,ge,Q,Ee,0,ye,Ce,null),Q>>=1,Ee>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const Q=r.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),h.add(y),Q.onpaint=de=>{const He=de.changedElements;for(const oe of h)He.includes(oe.image)&&(oe.needsUpdate=!0)},Q.requestPaint();return}const Ee=0,fe=r.RGBA,ie=r.RGBA,ae=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ee,fe,ie,ae,ee),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Xe&&Ke){const Q=et(xe[0]);t.texStorage2D(r.TEXTURE_2D,ue,ge,Q.width,Q.height)}for(let Q=0,Ee=xe.length;Q<Ee;Q++)he=xe[Q],Xe?F&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ye,Ce,he):t.texImage2D(r.TEXTURE_2D,Q,ge,ye,Ce,he);y.generateMipmaps=!1}else if(Xe){if(Ke){const Q=et(ee);t.texStorage2D(r.TEXTURE_2D,ue,ge,Q.width,Q.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Ce,ee)}else t.texImage2D(r.TEXTURE_2D,0,ge,ye,Ce,ee);g(y)&&x(J),se.__version=me.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ne(P,y,H){if(y.image.length!==6)return;const J=$(P,y),ne=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);const me=n.get(ne);if(ne.version!==me.__version||J===!0){t.activeTexture(r.TEXTURE0+H);const se=ct.getPrimaries(ct.workingColorSpace),j=y.colorSpace===kr?null:ct.getPrimaries(y.colorSpace),ee=y.colorSpace===kr||se===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ye=y.isCompressedTexture||y.image[0].isCompressedTexture,Ce=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!ye&&!Ce?ge[ie]=p(y.image[ie],!0,i.maxCubemapSize):ge[ie]=Ce?y.image[ie].image:y.image[ie],ge[ie]=_e(y,ge[ie]);const he=ge[0],xe=s.convert(y.format,y.colorSpace),Xe=s.convert(y.type),Ke=S(y.internalFormat,xe,Xe,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,ue=me.__version===void 0||J===!0,Q=ne.dataReady;let Ee=T(y,he);Se(r.TEXTURE_CUBE_MAP,y);let fe;if(ye){F&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Ke,he.width,he.height);for(let ie=0;ie<6;ie++){fe=ge[ie].mipmaps;for(let ae=0;ae<fe.length;ae++){const de=fe[ae];y.format!==ei?xe!==null?F?Q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae,0,0,de.width,de.height,xe,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae,Ke,de.width,de.height,0,de.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae,0,0,de.width,de.height,xe,Xe,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae,Ke,de.width,de.height,0,xe,Xe,de.data)}}}else{if(fe=y.mipmaps,F&&ue){fe.length>0&&Ee++;const ie=et(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,xe,Xe,ge[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ke,ge[ie].width,ge[ie].height,0,xe,Xe,ge[ie].data);for(let ae=0;ae<fe.length;ae++){const He=fe[ae].image[ie].image;F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae+1,0,0,He.width,He.height,xe,Xe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae+1,Ke,He.width,He.height,0,xe,Xe,He.data)}}else{F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,xe,Xe,ge[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ke,xe,Xe,ge[ie]);for(let ae=0;ae<fe.length;ae++){const de=fe[ae];F?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae+1,0,0,xe,Xe,de.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae+1,Ke,xe,Xe,de.image[ie])}}}g(y)&&x(r.TEXTURE_CUBE_MAP),me.__version=ne.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function we(P,y,H,J,ne,me){const se=s.convert(H.format,H.colorSpace),j=s.convert(H.type),ee=S(H.internalFormat,se,j,H.normalized,H.colorSpace),ye=n.get(y),Ce=n.get(H);if(Ce.__renderTarget=y,!ye.__hasExternalTextures){const ge=Math.max(1,y.width>>me),he=Math.max(1,y.height>>me);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,me,ee,ge,he,y.depth,0,se,j,null):t.texImage2D(ne,me,ee,ge,he,0,se,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),We(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ne,Ce.__webglTexture,0,ve(y)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ne,Ce.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(P,y,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){const J=y.depthTexture,ne=J&&J.isDepthTexture?J.type:null,me=b(y.stencilBuffer,ne),se=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;We(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve(y),me,y.width,y.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve(y),me,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,me,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,P)}else{const J=y.textures;for(let ne=0;ne<J.length;ne++){const me=J[ne],se=s.convert(me.format,me.colorSpace),j=s.convert(me.type),ee=S(me.internalFormat,se,j,me.normalized,me.colorSpace);We(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve(y),ee,y.width,y.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve(y),ee,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ee,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(P,y,H){const J=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(y.depthTexture);if(ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),ne.__webglTexture===void 0){ne.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),Se(r.TEXTURE_CUBE_MAP,y.depthTexture);const ye=s.convert(y.depthTexture.format),Ce=s.convert(y.depthTexture.type);let ge;y.depthTexture.format===or?ge=r.DEPTH_COMPONENT24:y.depthTexture.format===Es&&(ge=r.DEPTH24_STENCIL8);for(let he=0;he<6;he++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,y.width,y.height,0,ye,Ce,null)}}else K(y.depthTexture,0);const me=ne.__webglTexture,se=ve(y),j=J?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,ee=y.depthTexture.format===Es?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===or)We(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,j,me,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,ee,j,me,0);else if(y.depthTexture.format===Es)We(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,j,me,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,ee,j,me,0);else throw new Error("Unknown depthTexture format")}function Le(P){const y=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=J}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let J=0;J<6;J++)pe(y.__webglFramebuffer[J],P,J);else{const J=P.texture.mipmaps;J&&J.length>0?pe(y.__webglFramebuffer[0],P,0):pe(y.__webglFramebuffer,P,0)}else if(H){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=r.createRenderbuffer(),Je(y.__webglDepthbuffer[J],P,!1);else{const ne=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,me)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Je(y.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,me)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(P,y,H){const J=n.get(P);y!==void 0&&we(J.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Le(P)}function Ve(P){const y=P.texture,H=n.get(P),J=n.get(y);P.addEventListener("dispose",v);const ne=P.textures,me=P.isWebGLCubeRenderTarget===!0,se=ne.length>1;if(se||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,o.memory.textures++),me){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let ee=0;ee<y.mipmaps.length;ee++)H.__webglFramebuffer[j][ee]=r.createFramebuffer()}else H.__webglFramebuffer[j]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)H.__webglFramebuffer[j]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(se)for(let j=0,ee=ne.length;j<ee;j++){const ye=n.get(ne[j]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&We(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<ne.length;j++){const ee=ne[j];H.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const ye=s.convert(ee.format,ee.colorSpace),Ce=s.convert(ee.type),ge=S(ee.internalFormat,ye,Ce,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),he=ve(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,he,ge,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,H.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Se(r.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)we(H.__webglFramebuffer[j][ee],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else we(H.__webglFramebuffer[j],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(y)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let j=0,ee=ne.length;j<ee;j++){const ye=ne[j],Ce=n.get(ye);let ge=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ce.__webglTexture),Se(ge,ye),we(H.__webglFramebuffer,P,ye,r.COLOR_ATTACHMENT0+j,ge,0),g(ye)&&x(ge)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,J.__webglTexture),Se(j,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)we(H.__webglFramebuffer[ee],P,y,r.COLOR_ATTACHMENT0,j,ee);else we(H.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,j,0);g(y)&&x(j),t.unbindTexture()}P.depthBuffer&&Le(P)}function W(P){const y=P.textures;for(let H=0,J=y.length;H<J;H++){const ne=y[H];if(g(ne)){const me=M(P),se=n.get(ne).__webglTexture;t.bindTexture(me,se),x(me),t.unbindTexture()}}}const $e=[],Pt=[];function k(P){if(P.samples>0){if(We(P)===!1){const y=P.textures,H=P.width,J=P.height;let ne=r.COLOR_BUFFER_BIT;const me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(P),j=y.length>1;if(j)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ee=P.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[ye]);const Ce=n.get(y[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ce,0)}r.blitFramebuffer(0,0,H,J,0,0,H,J,ne,r.NEAREST),c===!0&&($e.length=0,Pt.length=0,$e.push(r.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&($e.push(me),Pt.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,se.__webglColorRenderbuffer[ye]);const Ce=n.get(y[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,Ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ve(P){return Math.min(i.maxSamples,P.samples)}function We(P){const y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(P){const y=o.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function _e(P,y){const H=P.colorSpace,J=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Ec&&H!==kr&&(ct.getTransfer(H)===gt?(J!==ei||ne!==Qn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",H)),y}function et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=O,this.setTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=D,this.setTextureCube=re,this.rebindTextures=je,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=we,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function B1(r,e){function t(n,i=kr){let s;const o=ct.getTransfer(i);if(n===Qn)return r.UNSIGNED_BYTE;if(n===xf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===K_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Z_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Y_)return r.BYTE;if(n===$_)return r.SHORT;if(n===Wa)return r.UNSIGNED_SHORT;if(n===vf)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===zi)return r.FLOAT;if(n===Vi)return r.HALF_FLOAT;if(n===j_)return r.ALPHA;if(n===J_)return r.RGB;if(n===ei)return r.RGBA;if(n===or)return r.DEPTH_COMPONENT;if(n===Es)return r.DEPTH_STENCIL;if(n===Q_)return r.RED;if(n===yf)return r.RED_INTEGER;if(n===Ts)return r.RG;if(n===Mf)return r.RG_INTEGER;if(n===Ef)return r.RGBA_INTEGER;if(n===_c||n===vc||n===xc||n===Sc)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tf||n===bf||n===wf||n===Af)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Af)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cf||n===Rf||n===Pf||n===Lf||n===Df||n===yc||n===If)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cf||n===Rf)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lf)return s.COMPRESSED_R11_EAC;if(n===Df)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yc)return s.COMPRESSED_RG11_EAC;if(n===If)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uf||n===Nf||n===Ff||n===Of||n===Bf||n===kf||n===zf||n===Vf||n===Hf||n===Gf||n===Wf||n===Xf||n===qf||n===Yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ff)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Of)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$f||n===Kf||n===Zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$f)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jf||n===Jf||n===Mc||n===Qf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===jf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new L0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mi({vertexShader:k1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wi(new Lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H1 extends bs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",p=new V1,g={},x=t.getContextAttributes();let M=null,S=null;const b=[],T=[],C=new dt;let v=null;const E=new gi;E.viewport=new zt;const w=new gi;w.viewport=new zt;const R=[E,w],L=new DE;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=b[$];return le===void 0&&(le=new fd,b[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=b[$];return le===void 0&&(le=new fd,b[$]=le),le.getGripSpace()},this.getHand=function($){let le=b[$];return le===void 0&&(le=new fd,b[$]=le),le.getHandSpace()};function I($){const le=T.indexOf($.inputSource);if(le===-1)return;const te=b[le];te!==void 0&&(te.update($.inputSource,$.frame,l||o),te.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let $=0;$<b.length;$++){const le=T[$];le!==null&&(T[$]=null,b[$].disconnect(le))}N=null,O=null,p.reset();for(const $ in g)delete g[$];e.setRenderTarget(M),d=null,f=null,h=null,i=null,S=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Re=null,Ne=null;x.depth&&(Ne=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?Es:or,Re=x.stencil?Xa:ki);const we={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(we),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new yi(f.textureWidth,f.textureHeight,{format:ei,type:Qn,depthTexture:new Po(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new yi(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B($){for(let le=0;le<$.removed.length;le++){const te=$.removed[le],Re=T.indexOf(te);Re>=0&&(T[Re]=null,b[Re].disconnect(te))}for(let le=0;le<$.added.length;le++){const te=$.added[le];let Re=T.indexOf(te);if(Re===-1){for(let we=0;we<b.length;we++)if(we>=T.length){T.push(te),Re=we;break}else if(T[we]===null){T[we]=te,Re=we;break}if(Re===-1)break}const Ne=b[Re];Ne&&Ne.connect(te)}}const K=new Y,Z=new Y;function D($,le,te){K.setFromMatrixPosition(le.matrixWorld),Z.setFromMatrixPosition(te.matrixWorld);const Re=K.distanceTo(Z),Ne=le.projectionMatrix.elements,we=te.projectionMatrix.elements,Je=Ne[14]/(Ne[10]-1),pe=Ne[14]/(Ne[10]+1),Le=(Ne[9]+1)/Ne[5],je=(Ne[9]-1)/Ne[5],Ve=(Ne[8]-1)/Ne[0],W=(we[8]+1)/we[0],$e=Je*Ve,Pt=Je*W,k=Re/(-Ve+W),ve=k*-Ve;if(le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ve),$.translateZ(k),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ne[10]===-1)$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const We=Je+k,ut=pe+k,_e=$e-ve,et=Pt+(Re-ve),P=Le*pe/ut*We,y=je*pe/ut*We;$.projectionMatrix.makePerspective(_e,et,P,y,We,ut),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let le=$.near,te=$.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(te=p.depthFar)),L.near=w.near=E.near=le,L.far=w.far=E.far=te,(N!==L.near||O!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,O=L.far),L.layers.mask=$.layers.mask|6,E.layers.mask=L.layers.mask&-5,w.layers.mask=L.layers.mask&-3;const Re=$.parent,Ne=L.cameras;re(L,Re);for(let we=0;we<Ne.length;we++)re(Ne[we],Re);Ne.length===2?D(L,E,w):L.projectionMatrix.copy(E.projectionMatrix),ce($,L,Re)};function ce($,le,te){te===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(te.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function($){return g[$]};let ke=null;function Ie($,le){if(u=le.getViewerPose(l||o),m=le,u!==null){const te=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Re=!1;te.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let pe=0;pe<te.length;pe++){const Le=te[pe];let je=null;if(d!==null)je=d.getViewport(Le);else{const W=h.getViewSubImage(f,Le);je=W.viewport,pe===0&&(e.setRenderTargetTextures(S,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(S))}let Ve=R[pe];Ve===void 0&&(Ve=new gi,Ve.layers.enable(pe),Ve.viewport=new zt,R[pe]=Ve),Ve.matrix.fromArray(Le.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Le.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(je.x,je.y,je.width,je.height),pe===0&&(L.matrix.copy(Ve.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(Ve)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const pe=h.getDepthInformation(te[0]);pe&&pe.isValid&&pe.texture&&p.init(pe,i.renderState)}if(Ne&&Ne.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let pe=0;pe<te.length;pe++){const Le=te[pe].camera;if(Le){let je=g[Le];je||(je=new L0,g[Le]=je);const Ve=h.getCameraImage(Le);je.sourceTexture=Ve}}}}for(let te=0;te<b.length;te++){const Re=T[te],Ne=b[te];Re!==null&&Ne!==void 0&&Ne.update(Re,le,l||o)}ke&&ke($,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}const Se=new z0;Se.setAnimationLoop(Ie),this.setAnimationLoop=function($){ke=$},this.dispose=function(){}}}const G1=new Qt,gv=new Ze;gv.set(-1,0,0,0,1,0,0,0,1);function W1(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,I0(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,x,M,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),h(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,x,M):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Vn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Vn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),M=x.envMap,S=x.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(gv),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,x,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X1(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const S=M.program;n.uniformBlockBinding(x,S)}function l(x,M){let S=i[x.id];S===void 0&&(m(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",p));const b=M.program;n.updateUBOMapping(x,b);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const M=h();x.__bindingPointIndex=M;const S=r.createBuffer(),b=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=i[x.id],S=x.uniforms,b=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let T=0,C=S.length;T<C;T++){const v=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,w=v.length;E<w;E++){const R=v[E];if(d(R,T,E,b)===!0){const L=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let I=0;I<N.length;I++){const z=N[I],B=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,L+O,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):ArrayBuffer.isView(z)?R.__data.set(new z.constructor(z.buffer,z.byteOffset,R.__data.length)):(z.toArray(R.__data,O),O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,M,S,b){const T=x.value,C=M+"_"+S;if(b[C]===void 0)return typeof T=="number"||typeof T=="boolean"?b[C]=T:ArrayBuffer.isView(T)?b[C]=T.slice():b[C]=T.clone(),!0;{const v=b[C];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return b[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function m(x){const M=x.uniforms;let S=0;const b=16;for(let C=0,v=M.length;C<v;C++){const E=Array.isArray(M[C])?M[C]:[M[C]];for(let w=0,R=E.length;w<R;w++){const L=E[w],N=Array.isArray(L.value)?L.value:[L.value];for(let O=0,I=N.length;O<I;O++){const z=N[O],B=_(z),K=S%b,Z=K%B.boundary,D=K+Z;S+=Z,D!==0&&b-D<B.storage&&(S+=b-D),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=B.storage}}}const T=S%b;return T>0&&(S+=b-T),x.__size=S,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",x),M}function p(x){const M=x.target;M.removeEventListener("dispose",p);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}const q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function Y1(){return qi===null&&(qi=new C0(q1,16,16,Ts,Vi),qi.name="DFG_LUT",qi.minFilter=yt,qi.magFilter=yt,qi.wrapS=sr,qi.wrapT=sr,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class $1{constructor(e={}){const{canvas:t=qM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Qn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=d,p=new Set([Ef,Mf,yf]),g=new Set([Qn,ki,Wa,Xa,xf,Sf]),x=new Uint32Array(4),M=new Int32Array(4),S=new Y;let b=null,T=null;const C=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1,L=null;this._outputColorSpace=Sn;let N=0,O=0,I=null,z=-1,B=null;const K=new zt,Z=new zt;let D=null;const re=new _t(0);let ce=0,ke=t.width,Ie=t.height,Se=1,$=null,le=null;const te=new zt(0,0,ke,Ie),Re=new zt(0,0,ke,Ie);let Ne=!1;const we=new R0;let Je=!1,pe=!1;const Le=new Qt,je=new Y,Ve=new zt,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Pt(){return I===null?Se:1}let k=n;function ve(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nf}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",de,!1),k===null){const V="webgl2";if(k=ve(V,A),k===null)throw ve(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw ht("WebGLRenderer: "+A.message),A}let We,ut,_e,et,P,y,H,J,ne,me,se,j,ee,ye,Ce,ge,he,xe,Xe,Ke,F,ue,Q;function Ee(){We=new Yb(k),We.init(),F=new B1(k,We),ut=new kb(k,We,e,F),_e=new F1(k,We),ut.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),et=new Zb(k),P=new M1,y=new O1(k,We,_e,P,ut,F,et),H=new qb(w),J=new UE(k),ue=new Ob(k,J),ne=new $b(k,J,et,ue),me=new Jb(k,ne,J,ue,et),xe=new jb(k,ut,y),Ce=new zb(P),se=new y1(w,H,We,ut,ue,Ce),j=new W1(w,P),ee=new T1,ye=new P1(We),he=new Fb(w,H,_e,me,m,c),ge=new N1(w,me,ut),Q=new X1(k,et,ut,_e),Xe=new Bb(k,We,et),Ke=new Kb(k,We,et),et.programs=se.programs,w.capabilities=ut,w.extensions=We,w.properties=P,w.renderLists=ee,w.shadowMap=ge,w.state=_e,w.info=et}Ee(),_!==Qn&&(E=new ew(_,t.width,t.height,i,s));const fe=new H1(w,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=We.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=We.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(A){A!==void 0&&(Se=A,this.setSize(ke,Ie,!1))},this.getSize=function(A){return A.set(ke,Ie)},this.setSize=function(A,V,q=!0){if(fe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=A,Ie=V,t.width=Math.floor(A*Se),t.height=Math.floor(V*Se),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(ke*Se,Ie*Se).floor()},this.setDrawingBufferSize=function(A,V,q){ke=A,Ie=V,Se=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(_===Qn){ht("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,V,q,G){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,V,q,G),_e.viewport(K.copy(te).multiplyScalar(Se).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,V,q,G){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,V,q,G),_e.scissor(Z.copy(Re).multiplyScalar(Se).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){_e.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,q=!0){let G=0;if(A){let X=!1;if(I!==null){const Me=I.texture.format;X=p.has(Me)}if(X){const Me=I.texture.type,be=g.has(Me),Ae=he.getClearColor(),Fe=he.getClearAlpha(),Be=Ae.r,Qe=Ae.g,it=Ae.b;be?(x[0]=Be,x[1]=Qe,x[2]=it,x[3]=Fe,k.clearBufferuiv(k.COLOR,0,x)):(M[0]=Be,M[1]=Qe,M[2]=it,M[3]=Fe,k.clearBufferiv(k.COLOR,0,M))}else G|=k.COLOR_BUFFER_BIT}V&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",de,!1),he.dispose(),ee.dispose(),ye.dispose(),P.dispose(),H.dispose(),me.dispose(),ue.dispose(),Q.dispose(),se.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ot),fe.removeEventListener("sessionend",Dt),It.stop()};function ie(A){A.preventDefault(),s0("WebGLRenderer: Context Lost."),R=!0}function ae(){s0("WebGLRenderer: Context Restored."),R=!1;const A=et.autoReset,V=ge.enabled,q=ge.autoUpdate,G=ge.needsUpdate,X=ge.type;Ee(),et.autoReset=A,ge.enabled=V,ge.autoUpdate=q,ge.needsUpdate=G,ge.type=X}function de(A){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){const V=A.target;V.removeEventListener("dispose",He),oe(V)}function oe(A){Ge(A),P.remove(A)}function Ge(A){const V=P.get(A).programs;V!==void 0&&(V.forEach(function(q){se.releaseProgram(q)}),A.isShaderMaterial&&se.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,G,X,Me){V===null&&(V=W);const be=X.isMesh&&X.matrixWorld.determinant()<0,Ae=hn(A,V,q,G,X);_e.setMaterial(G,be);let Fe=q.index,Be=1;if(G.wireframe===!0){if(Fe=ne.getWireframeAttribute(q),Fe===void 0)return;Be=2}const Qe=q.drawRange,it=q.attributes.position;let ze=Qe.start*Be,vt=(Qe.start+Qe.count)*Be;Me!==null&&(ze=Math.max(ze,Me.start*Be),vt=Math.min(vt,(Me.start+Me.count)*Be)),Fe!==null?(ze=Math.max(ze,0),vt=Math.min(vt,Fe.count)):it!=null&&(ze=Math.max(ze,0),vt=Math.min(vt,it.count));const Ht=vt-ze;if(Ht<0||Ht===1/0)return;ue.setup(X,G,Ae,q,Fe);let Ot,Et=Xe;if(Fe!==null&&(Ot=J.get(Fe),Et=Ke,Et.setIndex(Ot)),X.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Pt()),Et.setMode(k.LINES)):Et.setMode(k.TRIANGLES);else if(X.isLine){let bn=G.linewidth;bn===void 0&&(bn=1),_e.setLineWidth(bn*Pt()),X.isLineSegments?Et.setMode(k.LINES):X.isLineLoop?Et.setMode(k.LINE_LOOP):Et.setMode(k.LINE_STRIP)}else X.isPoints?Et.setMode(k.POINTS):X.isSprite&&Et.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const bn=X._multiDrawStarts,Pe=X._multiDrawCounts,si=X._multiDrawCount,ft=Fe?J.get(Fe).bytesPerElement:1,vi=P.get(G).currentProgram.getUniforms();for(let $i=0;$i<si;$i++)vi.setValue(k,"_gl_DrawID",$i),Et.render(bn[$i]/ft,Pe[$i])}else if(X.isInstancedMesh)Et.renderInstances(ze,Ht,X.count);else if(q.isInstancedBufferGeometry){const bn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,bn);Et.renderInstances(ze,Ht,Pe)}else Et.render(ze,Ht)};function Ue(A,V,q){A.transparent===!0&&A.side===ir&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,un(A,V,q),A.side=Br,A.needsUpdate=!0,un(A,V,q),A.side=ir):un(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),T=ye.get(q),T.init(V),v.push(T),q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),A!==q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();const G=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const Ae=Me[be];Ue(Ae,q,X),G.add(Ae)}else Ue(Me,q,X),G.add(Me)}),T=v.pop(),G},this.compileAsync=function(A,V,q=null){const G=this.compile(A,V,q);return new Promise(X=>{function Me(){if(G.forEach(function(be){P.get(be).currentProgram.isReady()&&G.delete(be)}),G.size===0){X(A);return}setTimeout(Me,10)}We.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ye=null;function $t(A){Ye&&Ye(A)}function ot(){It.stop()}function Dt(){It.start()}const It=new z0;It.setAnimationLoop($t),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(A){Ye=A,fe.setAnimationLoop(A),A===null?It.stop():It.start()},fe.addEventListener("sessionstart",ot),fe.addEventListener("sessionend",Dt),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(A,V);const q=fe.enabled===!0&&fe.isPresenting===!0,G=E!==null&&(I===null||q)&&E.begin(w,I);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(V),V=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,V,I),T=ye.get(A,v.length),T.init(V),T.state.textureUnits=y.getTextureUnits(),v.push(T),Le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),we.setFromProjectionMatrix(Le,Hi,V.reversedDepth),pe=this.localClippingEnabled,Je=Ce.init(this.clippingPlanes,pe),b=ee.get(A,C.length),b.init(),C.push(b),fe.enabled===!0&&fe.isPresenting===!0){const be=w.xr.getDepthSensingMesh();be!==null&&wt(be,V,-1/0,w.sortObjects)}wt(A,V,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort($,le),$e=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,$e&&he.addToRenderList(b,A),this.info.render.frame++,Je===!0&&Ce.beginShadows();const X=T.state.shadowsArray;if(ge.render(X,A,V),Je===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&E.hasRenderPass())===!1){const be=b.opaque,Ae=b.transmissive;if(T.setupLights(),V.isArrayCamera){const Fe=V.cameras;if(Ae.length>0)for(let Be=0,Qe=Fe.length;Be<Qe;Be++){const it=Fe[Be];mt(be,Ae,A,it)}$e&&he.render(A);for(let Be=0,Qe=Fe.length;Be<Qe;Be++){const it=Fe[Be];Mt(b,A,it,it.viewport)}}else Ae.length>0&&mt(be,Ae,A,V),$e&&he.render(A),Mt(b,A,V)}I!==null&&O===0&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),G&&E.end(w),A.isScene===!0&&A.onAfterRender(w,A,V),ue.resetDefaultState(),z=-1,B=null,v.pop(),v.length>0?(T=v[v.length-1],y.setTextureUnits(T.state.textureUnits),Je===!0&&Ce.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,L!==null&&L.renderEnd()};function wt(A,V,q,G){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||we.intersectsSprite(A)){G&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);const be=me.update(A),Ae=A.material;Ae.visible&&b.push(A,be,Ae,q,Ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||we.intersectsObject(A))){const be=me.update(A),Ae=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ve.copy(be.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(Ae)){const Fe=be.groups;for(let Be=0,Qe=Fe.length;Be<Qe;Be++){const it=Fe[Be],ze=Ae[it.materialIndex];ze&&ze.visible&&b.push(A,be,ze,q,Ve.z,it)}}else Ae.visible&&b.push(A,be,Ae,q,Ve.z,null)}}const Me=A.children;for(let be=0,Ae=Me.length;be<Ae;be++)wt(Me[be],V,q,G)}function Mt(A,V,q,G){const{opaque:X,transmissive:Me,transparent:be}=A;T.setupLightsView(q),Je===!0&&Ce.setGlobalState(w.clippingPlanes,q),G&&_e.viewport(K.copy(G)),X.length>0&&Tn(X,V,q),Me.length>0&&Tn(Me,V,q),be.length>0&&Tn(be,V,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function mt(A,V,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const ze=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new yi(1,1,{generateMipmaps:!0,type:ze?Vi:Qn,minFilter:Ms,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Me=T.state.transmissionRenderTarget[G.id],be=G.viewport||K;Me.setSize(be.z*w.transmissionResolutionScale,be.w*w.transmissionResolutionScale);const Ae=w.getRenderTarget(),Fe=w.getActiveCubeFace(),Be=w.getActiveMipmapLevel();w.setRenderTarget(Me),w.getClearColor(re),ce=w.getClearAlpha(),ce<1&&w.setClearColor(16777215,.5),w.clear(),$e&&he.render(q);const Qe=w.toneMapping;w.toneMapping=Bi;const it=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Je===!0&&Ce.setGlobalState(w.clippingPlanes,G),Tn(A,q,G),y.updateMultisampleRenderTarget(Me),y.updateRenderTargetMipmap(Me),We.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let vt=0,Ht=V.length;vt<Ht;vt++){const Ot=V[vt],{object:Et,geometry:bn,material:Pe,group:si}=Ot;if(Pe.side===ir&&Et.layers.test(G.layers)){const ft=Pe.side;Pe.side=Vn,Pe.needsUpdate=!0,At(Et,q,G,bn,Pe,si),Pe.side=ft,Pe.needsUpdate=!0,ze=!0}}ze===!0&&(y.updateMultisampleRenderTarget(Me),y.updateRenderTargetMipmap(Me))}w.setRenderTarget(Ae,Fe,Be),w.setClearColor(re,ce),it!==void 0&&(G.viewport=it),w.toneMapping=Qe}function Tn(A,V,q){const G=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Me=A.length;X<Me;X++){const be=A[X],{object:Ae,geometry:Fe,group:Be}=be;let Qe=be.material;Qe.allowOverride===!0&&G!==null&&(Qe=G),Ae.layers.test(q.layers)&&At(Ae,V,q,Fe,Qe,Be)}}function At(A,V,q,G,X,Me){A.onBeforeRender(w,V,q,G,X,Me),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(w,V,q,G,A,Me),X.transparent===!0&&X.side===ir&&X.forceSinglePass===!1?(X.side=Vn,X.needsUpdate=!0,w.renderBufferDirect(q,V,G,X,A,Me),X.side=Br,X.needsUpdate=!0,w.renderBufferDirect(q,V,G,X,A,Me),X.side=ir):w.renderBufferDirect(q,V,G,X,A,Me),A.onAfterRender(w,V,q,G,X,Me)}function un(A,V,q){V.isScene!==!0&&(V=W);const G=P.get(A),X=T.state.lights,Me=T.state.shadowsArray,be=X.state.version,Ae=se.getParameters(A,X.state,Me,V,q,T.state.lightProbeGridArray),Fe=se.getProgramCacheKey(Ae);let Be=G.programs;G.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,G.fog=V.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;G.envMap=H.get(A.envMap||G.environment,Qe),G.envMapRotation=G.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",He),Be=new Map,G.programs=Be);let it=Be.get(Fe);if(it!==void 0){if(G.currentProgram===it&&G.lightsStateVersion===be)return Kt(A,Ae),it}else Ae.uniforms=se.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,q,Ae),A.onBeforeCompile(Ae,w),it=se.acquireProgram(Ae,Fe),Be.set(Fe,it),G.uniforms=Ae.uniforms;const ze=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Ce.uniform),Kt(A,Ae),G.needsLights=Ko(A),G.lightsStateVersion=be,G.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=it,G.uniformsList=null,it}function ri(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Zc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Kt(A,V){const q=P.get(A);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function nn(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(V.matrixWorld);for(let q=0,G=A.length;q<G;q++){const X=A[q];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function hn(A,V,q,G,X){V.isScene!==!0&&(V=W),y.resetTextureUnits();const Me=V.fog,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?V.environment:null,Ae=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ct.workingColorSpace,Fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Be=H.get(G.envMap||be,Fe),Qe=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ze=!!q.morphAttributes.position,vt=!!q.morphAttributes.normal,Ht=!!q.morphAttributes.color;let Ot=Bi;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ot=w.toneMapping);const Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bn=Et!==void 0?Et.length:0,Pe=P.get(G),si=T.state.lights;if(Je===!0&&(pe===!0||A!==B)){const Ct=A===B&&G.id===z;Ce.setState(G,A,Ct)}let ft=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==si.state.version||Pe.outputColorSpace!==Ae||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Be||G.fog===!0&&Pe.fog!==Me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ce.numPlanes||Pe.numIntersection!==Ce.numIntersection)||Pe.vertexAlphas!==Qe||Pe.vertexTangents!==it||Pe.morphTargets!==ze||Pe.morphNormals!==vt||Pe.morphColors!==Ht||Pe.toneMapping!==Ot||Pe.morphTargetsCount!==bn||!!Pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Pe.__version=G.version);let vi=Pe.currentProgram;ft===!0&&(vi=un(G,V,X),L&&G.isNodeMaterial&&L.onUpdateProgram(G,vi,Pe));let $i=!1,Zr=!1,Zo=!1;const Tt=vi.getUniforms(),Gt=Pe.uniforms;if(_e.useProgram(vi.program)&&($i=!0,Zr=!0,Zo=!0),G.id!==z&&(z=G.id,Zr=!0),Pe.needsLights){const Ct=nn(T.state.lightProbeGridArray,X);Pe.lightProbeGrid!==Ct&&(Pe.lightProbeGrid=Ct,Zr=!0)}if($i||B!==A){_e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Tt.setValue(k,"projectionMatrix",A.projectionMatrix),Tt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Jr=Tt.map.cameraPosition;Jr!==void 0&&Jr.setValue(k,je.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Tt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Zr=!0,Zo=!0)}if(Pe.needsLights&&(si.state.directionalShadowMap.length>0&&Tt.setValue(k,"directionalShadowMap",si.state.directionalShadowMap,y),si.state.spotShadowMap.length>0&&Tt.setValue(k,"spotShadowMap",si.state.spotShadowMap,y),si.state.pointShadowMap.length>0&&Tt.setValue(k,"pointShadowMap",si.state.pointShadowMap,y)),X.isSkinnedMesh){Tt.setOptional(k,X,"bindMatrix"),Tt.setOptional(k,X,"bindMatrixInverse");const Ct=X.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Tt.setValue(k,"boneTexture",Ct.boneTexture,y))}X.isBatchedMesh&&(Tt.setOptional(k,X,"batchingTexture"),Tt.setValue(k,"batchingTexture",X._matricesTexture,y),Tt.setOptional(k,X,"batchingIdTexture"),Tt.setValue(k,"batchingIdTexture",X._indirectTexture,y),Tt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&Tt.setValue(k,"batchingColorTexture",X._colorsTexture,y));const jr=q.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&xe.update(X,q,vi),(Zr||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,Tt.setValue(k,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&V.environment!==null&&(Gt.envMapIntensity.value=V.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Y1()),Zr){if(Tt.setValue(k,"toneMappingExposure",w.toneMappingExposure),Pe.needsLights&&vr(Gt,Zo),Me&&G.fog===!0&&j.refreshFogUniforms(Gt,Me),j.refreshMaterialUniforms(Gt,G,Se,Ie,T.state.transmissionRenderTarget[A.id]),Pe.needsLights&&Pe.lightProbeGrid){const Ct=Pe.lightProbeGrid;Gt.probesSH.value=Ct.texture,Gt.probesMin.value.copy(Ct.boundingBox.min),Gt.probesMax.value.copy(Ct.boundingBox.max),Gt.probesResolution.value.copy(Ct.resolution)}Zc.upload(k,ri(Pe),Gt,y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Zc.upload(k,ri(Pe),Gt,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(k,"center",X.center),Tt.setValue(k,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(k,"normalMatrix",X.normalMatrix),Tt.setValue(k,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){const Ct=G.uniformsGroups;for(let Jr=0,jo=Ct.length;Jr<jo;Jr++){const _x=Ct[Jr];Q.update(_x,vi),Q.bind(_x,vi)}}return vi}function vr(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Ko(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,V,q){const G=P.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),P.get(A.texture).__webglTexture=V,P.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const q=P.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const fn=k.createFramebuffer();this.setRenderTarget=function(A,V=0,q=0){I=A,N=V,O=q;let G=null,X=!1,Me=!1;if(A){const Ae=P.get(A);if(Ae.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(k.FRAMEBUFFER,Ae.__webglFramebuffer),K.copy(A.viewport),Z.copy(A.scissor),D=A.scissorTest,_e.viewport(K),_e.scissor(Z),_e.setScissorTest(D),z=-1;return}else if(Ae.__webglFramebuffer===void 0)y.setupRenderTarget(A);else if(Ae.__hasExternalTextures)y.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Ae.__boundDepthTexture!==Qe){if(Qe!==null&&P.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Be=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?G=Be[V][q]:G=Be[V],X=!0):A.samples>0&&y.useMultisampledRTT(A)===!1?G=P.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[q]:G=Be,K.copy(A.viewport),Z.copy(A.scissor),D=A.scissorTest}else K.copy(te).multiplyScalar(Se).floor(),Z.copy(Re).multiplyScalar(Se).floor(),D=Ne;if(q!==0&&(G=fn),_e.bindFramebuffer(k.FRAMEBUFFER,G)&&_e.drawBuffers(A,G),_e.viewport(K),_e.scissor(Z),_e.setScissorTest(D),X){const Ae=P.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,q)}else if(Me){const Ae=V;for(let Fe=0;Fe<A.textures.length;Fe++){const Be=P.get(A.textures[Fe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,q,Ae)}}else if(A!==null&&q!==0){const Ae=P.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ae.__webglTexture,q)}z=-1},this.readRenderTargetPixels=function(A,V,q,G,X,Me,be,Ae=0){if(!(A&&A.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){_e.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const Be=A.textures[Ae],Qe=Be.format,it=Be.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae),!ut.textureFormatReadable(Qe)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(it)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-G&&q>=0&&q<=A.height-X&&k.readPixels(V,q,G,X,F.convert(Qe),F.convert(it),Me)}finally{const Be=I!==null?P.get(I).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,V,q,G,X,Me,be,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe)if(V>=0&&V<=A.width-G&&q>=0&&q<=A.height-X){_e.bindFramebuffer(k.FRAMEBUFFER,Fe);const Be=A.textures[Ae],Qe=Be.format,it=Be.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae),!ut.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),k.readPixels(V,q,G,X,F.convert(Qe),F.convert(it),0);const vt=I!==null?P.get(I).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,vt);const Ht=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await YM(k,Ht,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.deleteBuffer(ze),k.deleteSync(Ht),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,q=0){const G=Math.pow(2,-q),X=Math.floor(A.image.width*G),Me=Math.floor(A.image.height*G),be=V!==null?V.x:0,Ae=V!==null?V.y:0;y.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,be,Ae,X,Me),_e.unbindTexture()};const Vt=k.createFramebuffer(),_i=k.createFramebuffer();this.copyTextureToTexture=function(A,V,q=null,G=null,X=0,Me=0){let be,Ae,Fe,Be,Qe,it,ze,vt,Ht;const Ot=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(q!==null)be=q.max.x-q.min.x,Ae=q.max.y-q.min.y,Fe=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,Qe=q.min.y,it=q.isBox3?q.min.z:0;else{const Gt=Math.pow(2,-X);be=Math.floor(Ot.width*Gt),Ae=Math.floor(Ot.height*Gt),A.isDataArrayTexture?Fe=Ot.depth:A.isData3DTexture?Fe=Math.floor(Ot.depth*Gt):Fe=1,Be=0,Qe=0,it=0}G!==null?(ze=G.x,vt=G.y,Ht=G.z):(ze=0,vt=0,Ht=0);const Et=F.convert(V.format),bn=F.convert(V.type);let Pe;V.isData3DTexture?(y.setTexture3D(V,0),Pe=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(y.setTexture2DArray(V,0),Pe=k.TEXTURE_2D_ARRAY):(y.setTexture2D(V,0),Pe=k.TEXTURE_2D),_e.activeTexture(k.TEXTURE0),_e.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),_e.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_e.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const si=_e.getParameter(k.UNPACK_ROW_LENGTH),ft=_e.getParameter(k.UNPACK_IMAGE_HEIGHT),vi=_e.getParameter(k.UNPACK_SKIP_PIXELS),$i=_e.getParameter(k.UNPACK_SKIP_ROWS),Zr=_e.getParameter(k.UNPACK_SKIP_IMAGES);_e.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),_e.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),_e.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),_e.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),_e.pixelStorei(k.UNPACK_SKIP_IMAGES,it);const Zo=A.isDataArrayTexture||A.isData3DTexture,Tt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const Gt=P.get(A),jr=P.get(V),Ct=P.get(Gt.__renderTarget),Jr=P.get(jr.__renderTarget);_e.bindFramebuffer(k.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let jo=0;jo<Fe;jo++)Zo&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,P.get(A).__webglTexture,X,it+jo),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,P.get(V).__webglTexture,Me,Ht+jo)),k.blitFramebuffer(Be,Qe,be,Ae,ze,vt,be,Ae,k.DEPTH_BUFFER_BIT,k.NEAREST);_e.bindFramebuffer(k.READ_FRAMEBUFFER,null),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||P.has(A)){const Gt=P.get(A),jr=P.get(V);_e.bindFramebuffer(k.READ_FRAMEBUFFER,Vt),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,_i);for(let Ct=0;Ct<Fe;Ct++)Zo?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.__webglTexture,X,it+Ct):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Gt.__webglTexture,X),Tt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,jr.__webglTexture,Me,Ht+Ct):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,jr.__webglTexture,Me),X!==0?k.blitFramebuffer(Be,Qe,be,Ae,ze,vt,be,Ae,k.COLOR_BUFFER_BIT,k.NEAREST):Tt?k.copyTexSubImage3D(Pe,Me,ze,vt,Ht+Ct,Be,Qe,be,Ae):k.copyTexSubImage2D(Pe,Me,ze,vt,Be,Qe,be,Ae);_e.bindFramebuffer(k.READ_FRAMEBUFFER,null),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Tt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Pe,Me,ze,vt,Ht,be,Ae,Fe,Et,bn,Ot.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Pe,Me,ze,vt,Ht,be,Ae,Fe,Et,Ot.data):k.texSubImage3D(Pe,Me,ze,vt,Ht,be,Ae,Fe,Et,bn,Ot):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,ze,vt,be,Ae,Et,bn,Ot.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,ze,vt,Ot.width,Ot.height,Et,Ot.data):k.texSubImage2D(k.TEXTURE_2D,Me,ze,vt,be,Ae,Et,bn,Ot);_e.pixelStorei(k.UNPACK_ROW_LENGTH,si),_e.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),_e.pixelStorei(k.UNPACK_SKIP_PIXELS,vi),_e.pixelStorei(k.UNPACK_SKIP_ROWS,$i),_e.pixelStorei(k.UNPACK_SKIP_IMAGES,Zr),Me===0&&V.generateMipmaps&&k.generateMipmap(Pe),_e.unbindTexture()},this.initRenderTarget=function(A){P.get(A).__webglFramebuffer===void 0&&y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?y.setTextureCube(A,0):A.isData3DTexture?y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?y.setTexture2DArray(A,0):y.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){N=0,O=0,I=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const K1=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Z1=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,j1=`precision highp float;

uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uTexelSize;
uniform float uDt;
uniform float uDissipation;

varying vec2 vUv;

vec4 bilerp(sampler2D sam, vec2 uv, vec2 tsize) {
  vec2 st = uv / tsize - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);
  vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
  vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
  vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
  vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
  return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}

void main() {
  vec2 coord = vUv - uDt * texture2D(uVelocity, vUv).xy * uTexelSize;
  vec4 result = uDissipation * bilerp(uSource, coord, uTexelSize);
  gl_FragColor = result;
}`,J1=`precision highp float;

uniform sampler2D uTarget;
uniform float uAspectRatio;
uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;

varying vec2 vUv;

void main() {
  vec2 p = vUv - uPoint;
  p.x *= uAspectRatio;
  vec3 splat = exp(-dot(p, p) / uRadius) * uColor;
  vec3 base = texture2D(uTarget, vUv).xyz;
  gl_FragColor = vec4(base + splat, 1.0);
}`,Q1=`precision highp float;

uniform sampler2D uVelocity;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  float L = texture2D(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).y;
  float R = texture2D(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).y;
  float T = texture2D(uVelocity, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture2D(uVelocity, vUv - vec2(0.0, uTexelSize.y)).x;
  float vorticity = R - L - T + B;
  gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}`,eA=`precision highp float;

uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform vec2 uTexelSize;
uniform float uCurlStrength;
uniform float uDt;

varying vec2 vUv;

void main() {
  float L = texture2D(uCurl, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture2D(uCurl, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture2D(uCurl, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture2D(uCurl, vUv - vec2(0.0, uTexelSize.y)).x;
  float C = texture2D(uCurl, vUv).x;

  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  float len = length(force) + 0.0001;
  force = force / len * uCurlStrength * C;

  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity += force * uDt;

  gl_FragColor = vec4(velocity, 0.0, 1.0);
}`,tA=`precision highp float;

uniform sampler2D uVelocity;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  float L = texture2D(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture2D(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture2D(uVelocity, vUv + vec2(0.0, uTexelSize.y)).y;
  float B = texture2D(uVelocity, vUv - vec2(0.0, uTexelSize.y)).y;

  float div = 0.5 * (R - L + T - B);
  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}`,nA=`precision highp float;

uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;
  float C = texture2D(uDivergence, vUv).x;

  float pressure = (L + R + B + T - C) * 0.25;
  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}`,iA=`precision highp float;

uniform sampler2D uPressure;
uniform sampler2D uVelocity;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;

  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity -= vec2(R - L, T - B) * 0.5;
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}`,rA=`uniform sampler2D uBaseTexture;
uniform sampler2D uRevealTexture;
uniform sampler2D uDye;

uniform float uRevealSize;
uniform float uEdgeSoftness;
uniform float uEdgeWidth;

uniform float uBaseImageAspect;
uniform float uRevealImageAspect;
uniform float uPlaneAspect;

varying vec2 vUv;

vec2 coverUv(vec2 uv, float imageAspect, float planeAspect) {
  vec2 ratio = vec2(
    min(planeAspect / imageAspect, 1.0),
    min(imageAspect / planeAspect, 1.0)
  );
  return vec2(
    uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    uv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
}

void main() {
  float dye = texture2D(uDye, vUv).r;

  vec2 baseUv = coverUv(vUv, uBaseImageAspect, uPlaneAspect);
  baseUv = clamp(baseUv, 0.001, 0.999);
  vec4 baseColor = texture2D(uBaseTexture, baseUv);

  vec2 revealUv = coverUv(vUv, uRevealImageAspect, uPlaneAspect);
  revealUv = clamp(revealUv, 0.001, 0.999);
  vec4 revealColor = texture2D(uRevealTexture, revealUv);

  float raw  = dye * uRevealSize;
  float mask = smoothstep(uEdgeSoftness, uEdgeSoftness + uEdgeWidth, raw);
  mask = clamp(mask, 0.0, 1.0);

  gl_FragColor = mix(baseColor, revealColor, mask);
}`,sA={simResolution:256,dyeResolution:512,velocityDissipation:.962,dyeDissipation:.988,pressureIterations:20,curlStrength:0,splatRadius:6e-5,splatForce:5900,revealSize:3.9,edgeSoftness:.5,edgeWidth:.01};let Yr=null;function oA(r={}){const{containerSelector:e=".section-w",base:t=null,reveal:n=null,settings:i={}}=r,s=document.querySelector(e);if(!s)return null;Yr&&Yr.destroy();const o={...sA,...i},a=s.querySelector(".section.hero-home"),c=t??uA(a)??"#0a0a0a",l=n;a&&!t&&(a.style.backgroundColor="white");const u=new cA(s,c,l,o);return Yr=u,u}function aA(){Yr&&(Yr.destroy(),Yr=null)}async function lA(r={}){Yr&&await Yr.setLayers(r)}class cA{constructor(e,t,n,i){this.container=e,this.settings=i,this.disposed=!1,this.mouse={x:.5,y:.5},this.prevMouse={x:.5,y:.5},this.mouseHasMoved=!1,this.size={width:1,height:1},this.baseAspect=1,this.revealAspect=16/9,this._ownedVideos={base:null,reveal:null},this._bakedSources={base:t,reveal:n},this._svgLayerSources={base:null,reveal:null},this._svgLayerBg={base:null,reveal:null},this._buildCanvas(),this._buildRenderer(),this._buildScenes(),this._buildTextures(t,n),this._initFluid(),this._buildMaskMaterial(),this._buildMeshes(),this._bindEvents(),this._resize(),this._animate=this._animate.bind(this),this._rafId=requestAnimationFrame(this._animate)}_buildCanvas(){const e=document.createElement("canvas");e.className="mask-reveal-canvas",Object.assign(e.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none",zIndex:"1"}),getComputedStyle(this.container).position==="static"&&(this.container.style.position="relative");const t=this.container.querySelector(".section.hero-home");t?this.container.insertBefore(e,t):this.container.appendChild(e),this.canvas=e}_buildRenderer(){this.renderer=new $1({canvas:this.canvas,antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(0,0),this.renderer.autoClear=!1}_buildScenes(){this.quadScene=new S0,this.quadCamera=new Dd(-1,1,1,-1,0,1),this.scene=new S0,this.camera=new gi(50,1,.1,100),this.camera.position.set(0,0,5)}_createRT(e,t,n){return new yi(e,t,{minFilter:n,magFilter:n,format:ei,type:Vi,depthBuffer:!1,stencilBuffer:!1})}_createDoubleFBO(e,t,n){return{read:this._createRT(e,t,n),write:this._createRT(e,t,n),swap(){const i=this.read;this.read=this.write,this.write=i}}}_initFluid(){const e=this.settings,t=e.simResolution,n=e.simResolution,i=e.dyeResolution,s=e.dyeResolution,o=yt,a=an;this.velocity=this._createDoubleFBO(t,n,o),this.pressure=this._createDoubleFBO(t,n,a),this.dye=this._createDoubleFBO(i,s,o),this.curlRT=this._createRT(t,n,a),this.divergenceRT=this._createRT(t,n,a),this.simTexelSize=new dt(1/t,1/n),this.dyeTexelSize=new dt(1/i,1/s),this.quadGeo=new Lo(2,2),this.curlMat=this._makePassMat(Q1,{uVelocity:{value:null},uTexelSize:{value:this.simTexelSize}}),this.vorticityMat=this._makePassMat(eA,{uVelocity:{value:null},uCurl:{value:null},uTexelSize:{value:this.simTexelSize},uCurlStrength:{value:e.curlStrength},uDt:{value:.016}}),this.advectionMat=this._makePassMat(j1,{uVelocity:{value:null},uSource:{value:null},uTexelSize:{value:this.simTexelSize},uDt:{value:1},uDissipation:{value:e.velocityDissipation}}),this.splatMat=this._makePassMat(J1,{uTarget:{value:null},uAspectRatio:{value:1},uPoint:{value:new dt},uColor:{value:new Y},uRadius:{value:e.splatRadius}}),this.divergenceMat=this._makePassMat(tA,{uVelocity:{value:null},uTexelSize:{value:this.simTexelSize}}),this.pressureMat=this._makePassMat(nA,{uPressure:{value:null},uDivergence:{value:null},uTexelSize:{value:this.simTexelSize}}),this.gradientSubMat=this._makePassMat(iA,{uPressure:{value:null},uVelocity:{value:null},uTexelSize:{value:this.simTexelSize}}),this.quadMesh=new wi(this.quadGeo,this.curlMat),this.quadScene.add(this.quadMesh)}_makePassMat(e,t){return new mi({vertexShader:K1,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1})}_renderPass(e,t){this.quadMesh.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.quadScene,this.quadCamera)}_buildMaskMaterial(){const e=this.settings;this.maskMaterial=new mi({vertexShader:Z1,fragmentShader:rA,transparent:!0,depthWrite:!1,uniforms:{uBaseTexture:{value:this.baseTexture},uRevealTexture:{value:this.revealTexture},uDye:{value:null},uRevealSize:{value:e.revealSize},uEdgeSoftness:{value:e.edgeSoftness},uEdgeWidth:{value:e.edgeWidth},uBaseImageAspect:{value:this.baseAspect},uRevealImageAspect:{value:this.revealAspect},uPlaneAspect:{value:1}}})}_buildMeshes(){this.planeGeo=new Lo(1,1,1,1),this.planeMesh=new wi(this.planeGeo,this.maskMaterial),this.scene.add(this.planeMesh)}_buildTextures(e,t){const n=Bo(e);this.baseTexture=n.texture,this.baseAspect=n.aspect,n.ownedVideo&&(this._ownedVideos.base=n.ownedVideo),n.onLoaded&&n.onLoaded(s=>{this.baseAspect=s});const i=Bo(t);this.revealTexture=i.texture,this.revealAspect=i.aspect,i.ownedVideo&&(this._ownedVideos.reveal=i.ownedVideo),i.onLoaded&&i.onLoaded(s=>{this.revealAspect=s})}async setLayers({base:e,reveal:t,hideOriginal:n=!0,baseBg:i=null,revealBg:s=null}={}){if(this.disposed)return;const o=[],a=async(c,l=null)=>c instanceof SVGElement?(o.push(c),await pA(c,this.container,l)):c;if(e!==void 0){this._svgLayerBg.base=e instanceof SVGElement?i:null;const c=await a(e,i);this._svgLayerSources.base=e instanceof SVGElement?e:null;const l=Bo(c);this.baseTexture?.dispose?.(),this._ownedVideos.base&&Jc(this._ownedVideos.base),this.baseTexture=l.texture,this.baseAspect=l.aspect,this._ownedVideos.base=l.ownedVideo||null,this._bakedSources.base=c,l.onLoaded&&l.onLoaded(u=>{this.baseAspect=u,this.maskMaterial.uniforms.uBaseImageAspect.value=u}),this.maskMaterial.uniforms.uBaseTexture.value=this.baseTexture,this.maskMaterial.uniforms.uBaseImageAspect.value=this.baseAspect}if(t!==void 0){this._svgLayerBg.reveal=t instanceof SVGElement?s:null;const c=await a(t,s);this._svgLayerSources.reveal=t instanceof SVGElement?t:null;const l=Bo(c);this.revealTexture?.dispose?.(),this._ownedVideos.reveal&&Jc(this._ownedVideos.reveal),this.revealTexture=l.texture,this.revealAspect=l.aspect,this._ownedVideos.reveal=l.ownedVideo||null,this._bakedSources.reveal=c,l.onLoaded&&l.onLoaded(u=>{this.revealAspect=u,this.maskMaterial.uniforms.uRevealImageAspect.value=u}),this.maskMaterial.uniforms.uRevealTexture.value=this.revealTexture,this.maskMaterial.uniforms.uRevealImageAspect.value=this.revealAspect}n&&o.forEach(c=>{c.dataset._maskHidden="1",c.style.visibility="hidden"})}_bindEvents(){this._onMouseMove=e=>{const t=this.canvas.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width,this.mouse.y=1-(e.clientY-t.top)/t.height,this.mouseHasMoved=!0},this._onTouchMove=e=>{if(!e.touches.length)return;const t=e.touches[0],n=this.canvas.getBoundingClientRect();this.mouse.x=(t.clientX-n.left)/n.width,this.mouse.y=1-(t.clientY-n.top)/n.height,this.mouseHasMoved=!0},this._onResize=()=>this._resize(),window.addEventListener("mousemove",this._onMouseMove,{passive:!0}),window.addEventListener("touchmove",this._onTouchMove,{passive:!0}),window.addEventListener("resize",this._onResize),typeof ResizeObserver<"u"&&(this._ro=new ResizeObserver(()=>this._resize()),this._ro.observe(this.container))}_resize(){const e=this.container.getBoundingClientRect(),t=Math.max(1,e.width),n=Math.max(1,e.height);this.size={width:t,height:n},this.renderer.setSize(t,n,!1);const i=t/n;this.camera.aspect=i,this.camera.fov=50,this.camera.updateProjectionMatrix();const s=this.camera.position.z,o=this.camera.fov*Math.PI/180,a=2*Math.tan(o/2)*s,c=a*i;this.planeMesh.scale.set(c,a,1),this.maskMaterial.uniforms.uPlaneAspect.value=i,this._scheduleSvgRebake()}_scheduleSvgRebake(){this._svgLayerSources&&(!this._svgLayerSources.base&&!this._svgLayerSources.reveal||(clearTimeout(this._rebakeTimeout),this._rebakeTimeout=setTimeout(()=>{const{base:e,reveal:t}=this._svgLayerSources,n={};e instanceof SVGElement&&(n.base=e,n.baseBg=this._svgLayerBg.base),t instanceof SVGElement&&(n.reveal=t,n.revealBg=this._svgLayerBg.reveal),Object.keys(n).length&&(n.hideOriginal=!1,this.setLayers(n).catch(()=>{}))},120)))}_computeScrollFade(){const e=this.canvas.getBoundingClientRect(),t=e.height||1;let n=-e.top/t;return n<0&&(n=0),n>1&&(n=1),n}_getShowreelScaleEl(){return this._showreelScaleEl&&this._showreelScaleEl.isConnected?this._showreelScaleEl:(this._showreelScaleEl=document.querySelector(".section.showreel .video-showreel-full-w"),this._showreelScaleEl)}_isShowreelFull(){const e=this._getShowreelScaleEl();if(!e)return!0;const t=e.style.width;if(!t)return!0;const n=t.trim().match(/^([\d.]+)%$/);return n?parseFloat(n[1])>=99:!0}_clearFluid(){const e=t=>{this.renderer.setRenderTarget(t),this.renderer.clear()};e(this.dye.read),e(this.dye.write),e(this.velocity.read),e(this.velocity.write),e(this.pressure.read),e(this.pressure.write),this.renderer.setRenderTarget(null)}_renderClean(){this.maskMaterial.uniforms.uDye.value=this.dye.read.texture,this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}_animate(){if(!this.disposed){if(this._rafId=requestAnimationFrame(this._animate),!this._isShowreelFull()){this._maskCleaned||(this._clearFluid(),this._renderClean(),this._maskCleaned=!0);return}this._maskCleaned&&(this._maskCleaned=!1,this.prevMouse.x=this.mouse.x,this.prevMouse.y=this.mouse.y,this.mouseHasMoved=!1),this._step()}}_step(){const e=this.settings,t=this.size.width/this.size.height,n=this._computeScrollFade(),i=n*n,s=1-i;if(this.mouseHasMoved){const u=this.mouse.x-this.prevMouse.x,h=this.mouse.y-this.prevMouse.y;Math.sqrt(u*u+h*h)>0&&s>.001&&(this.splatMat.uniforms.uTarget.value=this.velocity.read.texture,this.splatMat.uniforms.uAspectRatio.value=t,this.splatMat.uniforms.uPoint.value.set(this.mouse.x,this.mouse.y),this.splatMat.uniforms.uColor.value.set(u*e.splatForce*s,h*e.splatForce*s,0),this.splatMat.uniforms.uRadius.value=e.splatRadius,this._renderPass(this.splatMat,this.velocity.write),this.velocity.swap(),this.splatMat.uniforms.uTarget.value=this.dye.read.texture,this.splatMat.uniforms.uColor.value.set(s,s,s),this.splatMat.uniforms.uRadius.value=e.splatRadius,this._renderPass(this.splatMat,this.dye.write),this.dye.swap()),this.prevMouse.x=this.mouse.x,this.prevMouse.y=this.mouse.y}this.curlMat.uniforms.uVelocity.value=this.velocity.read.texture,this._renderPass(this.curlMat,this.curlRT),this.vorticityMat.uniforms.uVelocity.value=this.velocity.read.texture,this.vorticityMat.uniforms.uCurl.value=this.curlRT.texture,this.vorticityMat.uniforms.uCurlStrength.value=e.curlStrength,this.vorticityMat.uniforms.uDt.value=.016,this._renderPass(this.vorticityMat,this.velocity.write),this.velocity.swap(),this.advectionMat.uniforms.uVelocity.value=this.velocity.read.texture,this.advectionMat.uniforms.uSource.value=this.velocity.read.texture,this.advectionMat.uniforms.uTexelSize.value=this.simTexelSize,this.advectionMat.uniforms.uDissipation.value=e.velocityDissipation,this._renderPass(this.advectionMat,this.velocity.write),this.velocity.swap();const a=e.dyeDissipation+(.97-e.dyeDissipation)*i;this.advectionMat.uniforms.uVelocity.value=this.velocity.read.texture,this.advectionMat.uniforms.uSource.value=this.dye.read.texture,this.advectionMat.uniforms.uTexelSize.value=this.dyeTexelSize,this.advectionMat.uniforms.uDissipation.value=a,this._renderPass(this.advectionMat,this.dye.write),this.dye.swap(),this.divergenceMat.uniforms.uVelocity.value=this.velocity.read.texture,this._renderPass(this.divergenceMat,this.divergenceRT),this.renderer.setRenderTarget(this.pressure.read),this.renderer.clear(),this.renderer.setRenderTarget(null),this.pressureMat.uniforms.uDivergence.value=this.divergenceRT.texture;for(let u=0;u<e.pressureIterations;u++)this.pressureMat.uniforms.uPressure.value=this.pressure.read.texture,this._renderPass(this.pressureMat,this.pressure.write),this.pressure.swap();this.gradientSubMat.uniforms.uPressure.value=this.pressure.read.texture,this.gradientSubMat.uniforms.uVelocity.value=this.velocity.read.texture,this._renderPass(this.gradientSubMat,this.velocity.write),this.velocity.swap();const c=this.revealTexture?.image;if(c instanceof HTMLVideoElement&&c.videoWidth&&c.videoHeight){const u=c.videoWidth/c.videoHeight;Math.abs(u-this.revealAspect)>.001&&(this.revealAspect=u)}const l=this.maskMaterial.uniforms;l.uDye.value=this.dye.read.texture,l.uRevealSize.value=e.revealSize,l.uEdgeSoftness.value=e.edgeSoftness,l.uEdgeWidth.value=e.edgeWidth,l.uBaseImageAspect.value=this.baseAspect,l.uRevealImageAspect.value=this.revealAspect,this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}updateSettings(e){Object.assign(this.settings,e)}destroy(){if(this.disposed)return;this.disposed=!0,this._rafId&&cancelAnimationFrame(this._rafId),window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("touchmove",this._onTouchMove),window.removeEventListener("resize",this._onResize),this._ro&&this._ro.disconnect();const e=t=>{t?.read?.dispose(),t?.write?.dispose()};if(e(this.velocity),e(this.pressure),e(this.dye),this.curlRT?.dispose(),this.divergenceRT?.dispose(),this.quadGeo?.dispose(),this.planeGeo?.dispose(),[this.curlMat,this.vorticityMat,this.advectionMat,this.splatMat,this.divergenceMat,this.pressureMat,this.gradientSubMat,this.maskMaterial].forEach(t=>t?.dispose()),this.baseTexture?.dispose?.(),this.revealTexture?.dispose?.(),this.renderer?.dispose(),this._ownedVideos&&(this._ownedVideos.base&&Jc(this._ownedVideos.base),this._ownedVideos.reveal&&Jc(this._ownedVideos.reveal)),this._svgLayerSources)for(const t of Object.values(this._svgLayerSources))t instanceof SVGElement&&t.dataset._maskHidden&&(t.style.visibility="",delete t.dataset._maskHidden);this.canvas?.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}}function uA(r){if(!r)return null;const e=getComputedStyle(r).backgroundColor;return!e||e==="rgba(0, 0, 0, 0)"||e==="transparent"?null:e}function Bo(r){if(!r)return{texture:Hd(0,0,0,0),aspect:1,onLoaded:null};if(typeof r=="object"&&!Array.isArray(r)&&!(r instanceof Element)){if(typeof r.video=="string"){const e=_v(r.video),t=Vd(e);return t.ownedVideo=e,t}if(typeof r.image=="string")return Bo(r.image);if(typeof r.color=="string")return Bo(r.color)}if(typeof r=="string"){if(dA(r)){const t=_v(r),n=Vd(t);return n.ownedVideo=t,n}if(fA(r)){const t=new PE;let n=1,i=null;const s=t.load(r,o=>{const a=o.image;a&&a.naturalWidth&&(n=a.naturalWidth/a.naturalHeight,i&&i(n))});return s.minFilter=yt,s.magFilter=yt,s.colorSpace=Sn,{texture:s,aspect:n,onLoaded:o=>{i=o}}}const e=gA(r);return{texture:Hd(e[0],e[1],e[2],e[3]),aspect:1,onLoaded:null}}if(r instanceof HTMLVideoElement)return Vd(r);if(r instanceof HTMLCanvasElement||r instanceof HTMLImageElement){const e=new ln(r);e.needsUpdate=!0,e.minFilter=yt,e.magFilter=yt,e.colorSpace=Sn;const t=(r.naturalWidth||r.width||1)/(r.naturalHeight||r.height||1);return{texture:e,aspect:t,onLoaded:null}}return{texture:Hd(0,0,0,0),aspect:1,onLoaded:null}}function hA(r){if(!r)return;r.muted=!0,r.defaultMuted=!0,r.playsInline=!0,r.setAttribute("playsinline",""),r.setAttribute("muted","");const e=()=>{const n=r.play();n&&n.catch&&n.catch(()=>{})};e(),r.addEventListener("loadeddata",e,{once:!0}),r.addEventListener("canplay",e,{once:!0});const t=()=>{e(),window.removeEventListener("pointerdown",t),window.removeEventListener("touchstart",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t,{once:!0,passive:!0}),window.addEventListener("touchstart",t,{once:!0,passive:!0}),window.addEventListener("keydown",t,{once:!0})}function Vd(r){hA(r);const e=new vE(r);e.minFilter=yt,e.magFilter=yt,e.colorSpace=Sn,e.generateMipmaps=!1;const t=()=>r.videoWidth&&r.videoHeight?r.videoWidth/r.videoHeight:16/9;return{texture:e,aspect:t(),onLoaded:n=>{if(r.videoWidth&&r.videoHeight){n(t());return}const i=()=>{r.videoWidth&&r.videoHeight&&n(t())};r.addEventListener("loadedmetadata",i,{once:!0}),r.addEventListener("loadeddata",i,{once:!0})}}}function _v(r){const e=document.createElement("video");return e.src=r,e.muted=!0,e.defaultMuted=!0,e.loop=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.setAttribute("muted",""),e.autoplay=!0,e.preload="auto",e.crossOrigin="anonymous",Object.assign(e.style,{position:"absolute",left:"-9999px",top:"-9999px",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}),document.body.appendChild(e),e}function fA(r){return/^(https?:|data:image|\/|\.{0,2}\/)/.test(r)||/\.(png|jpe?g|gif|webp|svg|avif)(\?|#|$)/i.test(r)}function dA(r){return/\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(r)||/^data:video\//i.test(r)}function Jc(r){if(r){try{r.pause()}catch{}try{r.removeAttribute("src"),r.load()}catch{}r.parentNode&&r.parentNode.removeChild(r)}}function Hd(r,e,t,n){const i=new Uint8Array([r,e,t,n]),s=new C0(i,1,1,ei,Qn);return s.needsUpdate=!0,s.minFilter=yt,s.magFilter=yt,s.colorSpace=Sn,s}async function pA(r,e,t=null){const n=e.getBoundingClientRect(),i=r.getBoundingClientRect(),s=Math.min(window.devicePixelRatio||1,2),o=Math.max(1,Math.round(n.width*s)),a=Math.max(1,Math.round(n.height*s)),c=document.createElement("canvas");c.width=o,c.height=a;const l=c.getContext("2d");l.clearRect(0,0,o,a),t&&(l.fillStyle=t,l.fillRect(0,0,o,a));const u=await mA(r,i.width*s,i.height*s),h=(i.left-n.left)*s,f=(i.top-n.top)*s;return l.drawImage(u,h,f,i.width*s,i.height*s),c}function mA(r,e,t){return new Promise((n,i)=>{const s=r.cloneNode(!0);s.getAttribute("xmlns")||s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("width",String(Math.max(1,Math.round(e)))),s.setAttribute("height",String(Math.max(1,Math.round(t)))),s.style.visibility="visible",s.style.opacity="1",s.style.display="",s.removeAttribute("hidden");const o=getComputedStyle(r).color;o&&s.setAttribute("color",o);const a=new XMLSerializer().serializeToString(s),c="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(a),l=new Image;l.onload=()=>n(l),l.onerror=u=>i(u),l.src=c})}const ko=typeof document<"u"?document.createElement("div"):null;function gA(r){if(!ko)return[0,0,0,255];ko.style.color="",ko.style.color=r,document.body.appendChild(ko);const e=getComputedStyle(ko).color;document.body.removeChild(ko);const t=e.match(/rgba?\(([^)]+)\)/);if(!t)return[0,0,0,255];const n=t[1].split(",").map(c=>parseFloat(c.trim())),i=Math.round(n[0]||0),s=Math.round(n[1]||0),o=Math.round(n[2]||0),a=n.length===4?Math.round((n[3]||0)*255):255;return[i,s,o,a]}U.registerPlugin(Oe);let Qc=null;const _A={"nav-o":{x:241,w:285},"nav-t":{x:520,w:183},"nav-h":{x:722,w:228},"nav-i":{x:968,w:72},"nav-n-last":{x:1058,w:230}};function vA(r,e,t){const n=_A[t];if(!n)return;const i="http://www.w3.org/2000/svg",s=document.createElementNS(i,"clipPath");s.setAttribute("id",`clip-${t}`);const o=document.createElementNS(i,"rect");o.setAttribute("x",n.x),o.setAttribute("y",0),o.setAttribute("width",n.w),o.setAttribute("height",291),s.appendChild(o);let a=r.querySelector("defs");a||(a=document.createElementNS(i,"defs"),r.insertBefore(a,r.firstChild)),a.appendChild(s);const c=document.createElementNS(i,"g");c.setAttribute("clip-path",`url(#clip-${t})`),e.parentNode.insertBefore(c,e),c.appendChild(e)}function vv(){const r=document.querySelector(".nav-logo-wrap"),e=r?.querySelector(".nav-logo");if(!r||!e)return;const t=e.querySelector(".nav-apos"),n=["nav-o","nav-t","nav-h","nav-i","nav-n-last"],i=n.map(R=>e.querySelector(`.${R}`));n.forEach((R,L)=>{i[L]&&vA(e,i[L],R)});const s=-1060,o=338,a=1398,c=320,l={w:o},u={x:s};U.set(e,{attr:{viewBox:`0 0 ${o} 291`}}),U.set(t,{attr:{transform:`translate(${s}, 0)`}}),i.forEach(R=>{U.set(R,{attr:{transform:`translate(0, ${c})`}})});let h="idle",f=null,d=null;function m(R){const L=R.slice();for(let N=L.length-1;N>0;N--){const O=Math.floor(Math.random()*(N+1));[L[N],L[O]]=[L[O],L[N]]}return L}function _(){e.setAttribute("viewBox",`0 0 ${l.w.toFixed(1)} 291`),t.setAttribute("transform",`translate(${u.x.toFixed(1)}, 0)`)}function p(){h="spacing-in";const R=m([0,1,2,3,4]);f=U.timeline({onUpdate:_,onComplete:()=>{h="open"}}),f.to(l,{w:a,duration:.7,ease:"power4.inOut"},0),f.to(u,{x:0,duration:.7,ease:"power4.inOut"},0),R.forEach((L,N)=>{f.to(i[L],{attr:{transform:"translate(0, 0)"},duration:.6,ease:"power4.inOut"},.35+N*.06)})}function g(){h="letters-in";const R=m([0,1,2,3,4]);d=U.timeline({onUpdate:_,onComplete:()=>{h="open"}}),d.to(l,{w:a,duration:.6,ease:"power4.inOut"},0),d.to(u,{x:0,duration:.6,ease:"power4.inOut"},0),R.forEach((L,N)=>{d.to(i[L],{attr:{transform:"translate(0, 0)"},duration:.6,ease:"power4.inOut"},N*.06)})}function x(){h="letters-out";const R=m([0,1,2,3,4]);d=U.timeline({onComplete:M}),R.forEach((L,N)=>{d.to(i[L],{attr:{transform:`translate(0, ${c})`},duration:.6,ease:"power4.inOut"},N*.08)})}function M(){h="spacing-out",f=U.timeline({onUpdate:_,onComplete:()=>{h="idle"}}),f.to(l,{w:o,duration:.7,ease:"power4.inOut"},0),f.to(u,{x:s,duration:.7,ease:"power4.inOut"},0)}function S(){f?.kill(),d?.kill()}const b=()=>{S(),h==="idle"||h==="spacing-out"?p():h==="letters-out"&&g()},T=()=>{S(),(h==="open"||h==="letters-in"||h==="spacing-in")&&x()};window.matchMedia("(max-width: 991px)").matches||(r.addEventListener("mouseenter",b),r.addEventListener("mouseleave",T));const v=!!document.querySelector(".nothin-hero-svg");U.set(r,{autoAlpha:0});let E=!1,w=null;if(v){const L=O=>{O!==E&&(E=O,U.to(r,{autoAlpha:O?1:0,duration:O?.4:.3,ease:O?"power2.out":"power2.in"}))},N=()=>{const O=w?w.scroll():window.scrollY||window.pageYOffset||0,I=window.innerHeight*.1;L(O>=I)};w=Oe.create({start:()=>window.innerHeight*.1,end:()=>Oe.maxScroll(window)+window.innerHeight,onToggle:N,onRefresh:N}),N()}else U.set(r,{autoAlpha:1}),E=!0;Qc={wrap:r,handleEnter:b,handleLeave:T,kill:S,visST:w}}function xA(){if(!Qc)return;const{wrap:r,handleEnter:e,handleLeave:t,kill:n,visST:i}=Qc;r.removeEventListener("mouseenter",e),r.removeEventListener("mouseleave",t),i&&i.kill(),n(),Qc=null}U.registerPlugin(Oe);let rl=null;function xv(){if(window.matchMedia("(max-width: 991px)").matches)return;const r=document.querySelector(".section.showreel");if(!r)return;const e=r.querySelector(".video-showreel-full-w");e&&(rl=U.fromTo(e,{width:"100%",height:"100%"},{width:"33.3%",height:"35%",ease:"power4.inOut",immediateRender:!1,scrollTrigger:{trigger:r,start:"top top",end:"bottom bottom",scrub:3,invalidateOnRefresh:!0}}))}function SA(){rl&&(rl.scrollTrigger?.kill(),rl.kill(),rl=null),document.querySelectorAll(".section.showreel .video-showreel-full-w").forEach(r=>{U.set(r,{clearProps:"width,height"})})}var mr,Is,Gd,eu,sl,tu,nu,ol,Ai="transform",Wd=Ai+"Origin",Sv,Xd=function(e){var t=e.ownerDocument||e;for(!(Ai in e.style)&&("msTransform"in e.style)&&(Ai="msTransform",Wd=Ai+"Origin");t.parentNode&&(t=t.parentNode););if(Is=window,nu=new Us,t){mr=t,Gd=t.documentElement,eu=t.body,ol=mr.createElementNS("http://www.w3.org/2000/svg","g"),ol.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Sv=i.offsetParent!==n,s.removeChild(n))}return t},yA=function(e){for(var t,n;e&&e!==eu;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},yv=[],Mv=[],qd=function(){return Is.pageYOffset||mr.scrollTop||Gd.scrollTop||eu.scrollTop||0},Yd=function(){return Is.pageXOffset||mr.scrollLeft||Gd.scrollLeft||eu.scrollLeft||0},$d=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},MA=function r(e){if(Is.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Kd=function r(e,t){if(e.parentNode&&(mr||Xd(e))){var n=$d(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,c="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=mr.createElementNS?mr.createElementNS(i.replace(/^https/,"http"),s):mr.createElement(s);return t&&(n?(tu||(tu=r(e)),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+a+")"),tu.appendChild(l)):(sl||(sl=r(e),sl.style.cssText=c),l.style.cssText=c+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",sl.appendChild(l))),l}throw"Need document and parent."},EA=function(e){for(var t=new Us,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},Ev=function(e){var t=e.getCTM(),n;return t||(n=e.style[Ai],e.style[Ai]="none",e.appendChild(ol),t=ol.getCTM(),e.removeChild(ol),n?e.style[Ai]=n:e.style.removeProperty(Ai.replace(/([A-Z])/g,"-$1").toLowerCase())),t||nu.clone()},TA=function(e,t){var n=$d(e),i=e===n,s=n?yv:Mv,o=e.parentNode,a=o&&!n&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,c,l,u,h,f,d;if(e===Is)return e;if(s.length||s.push(Kd(e,1),Kd(e,2),Kd(e,3)),c=n?tu:sl,n)i?(u=Ev(e),h=-u.e/u.a,f=-u.f/u.d,l=nu):e.getBBox?(u=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?EA(l):l.getItem(0).matrix:nu,h=l.a*u.x+l.c*u.y,f=l.b*u.x+l.d*u.y):(l=new Us,h=f=0),t&&e.tagName.toLowerCase()==="g"&&(h=f=0),(i?n:o).appendChild(c),c.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+f)+")");else{if(h=f=0,Sv)for(l=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==l&&u.parentNode;)(Is.getComputedStyle(u)[Ai]+"").length>4&&(h=u.offsetLeft,f=u.offsetTop,u=0);if(d=Is.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;u=c.style,u.top=e.offsetTop-f+"px",u.left=e.offsetLeft-h+"px",u[Ai]=d[Ai],u[Wd]=d[Wd],u.position=d.position==="fixed"?"fixed":"absolute",a.appendChild(c)}return c},Zd=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},Us=(function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),Zd(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,c=this.f,l=n*o-i*s||1e-10;return Zd(this,o/l,-i/l,-s/l,n/l,(s*c-o*a)/l,-(n*c-i*a)/l)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,c=this.e,l=this.f,u=n.a,h=n.c,f=n.b,d=n.d,m=n.e,_=n.f;return Zd(this,u*i+f*o,u*s+f*a,h*i+d*o,h*s+d*a,c+m*i+_*o,l+m*s+_*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,c=this.e,l=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&c===n.e&&l===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,c=this.b,l=this.c,u=this.d,h=this.e,f=this.f;return i.x=s*a+o*l+h||0,i.y=s*c+o*u+f||0,i},r})();function Yi(r,e,t,n){if(!r||!r.parentNode||(mr||Xd(r)).documentElement===r)return new Us;var i=yA(r),s=$d(r),o=s?yv:Mv,a=TA(r,t),c=o[0].getBoundingClientRect(),l=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),h=a.parentNode,f=!n&&MA(r),d=new Us((l.left-c.left)/100,(l.top-c.top)/100,(u.left-c.left)/100,(u.top-c.top)/100,c.left+(f?0:Yd()),c.top+(f?0:qd()));if(h.removeChild(a),i)for(c=i.length;c--;)l=i[c],l.scaleX=l.scaleY=0,l.renderTransform(1,l);return e?d.inverse():d}var bA=1,zo,En,Rt,al,$r,gr,jd,Tv=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},Jd={},bv=180/Math.PI,wA=Math.PI/180,iu={},wv={},ru={},Qd=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},AA=Qd("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),su=Qd("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),ll=function(e){return zo(e)[0]||void 0},Vo=function(e){return Math.round(e*1e4)/1e4||0},ep=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},Av={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Cv={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},Rv=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},Ho=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},tp={},Pv=function(e){var t=tp[e]=Qd(e);return ru[e]=t.concat(su),t},CA=function(e){var t=e._gsap||En.core.getCache(e);return t.gmCache===En.ticker.frame?t.gMatrix:(t.gmCache=En.ticker.frame,t.gMatrix=Yi(e,!0,!1,!0))},RA=function r(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,s=1e3*Math.pow(10,n)*(t?-1:1),o=t?-s*900:0;e;)o+=s,e=e.previousSibling;return i?o+r(i,t,n+1):o},ou=function(e,t,n){return e.forEach(function(i){return i.d=RA(n?i.element:i.t,t)}),e.sort(function(i,s){return i.d-s.d}),e},cl=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],s=t.length,o,a;s--;)o=t[s],a=n[o]||n.getPropertyValue(o),i.push(a?o:wv[o]||(wv[o]=Rv(o)),a);return n},au=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Lv=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(au)},np="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),ip=function(e,t,n){var i=e.element,s=e.width,o=e.height,a=e.uncache,c=e.getProp,l=i.style,u=4,h,f,d;if(typeof t!="object"&&(t=e),Rt&&n!==1)return Rt._abs.push({t:i,b:e,a:e,sd:0}),Rt._final.push(function(){return(e.cache.uncache=1)&&au(e)}),i;for(f=c("display")==="none",(!e.isVisible||f)&&(f&&(cl(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=s=e.width||t.width,e.height=o=e.height||t.height),cl(e,np),d=window.getComputedStyle(i);u--;)l[np[u]]=d[np[u]];if(l.gridArea="1 / 1 / 1 / 1",l.transition="none",l.position="absolute",l.width=s+"px",l.height=o+"px",l.top||(l.top="0px"),l.left||(l.left="0px"),a)h=new Ns(i);else if(h=Ho(e,iu),h.position="absolute",e.simple){var m=i.getBoundingClientRect();h.matrix=new Us(1,0,0,1,m.left+Yd(),m.top+qd())}else h.matrix=Yi(i,!1,!1,!0);return h=Go(h,e,!0),e.x=gr(h.x,.01),e.y=gr(h.y,.01),i},Dv=function(e,t){return t!==!0&&(t=zo(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},Iv=function(e){return ou(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&ip(t.sd<0?t.b:t.a,t.b,1)})},PA=function(e,t){return t&&e.idLookup[rp(t).id]||e.elementStates[0]},rp=function(e,t,n,i){return e instanceof Ns?e:e instanceof Ci?PA(e,i):new Ns(typeof e=="string"?ll(e)||void 0:e,t,n)},LA=function(e,t){for(var n=En.getProperty(e.element,null,"native"),i=e.props={},s=t.length;s--;)i[t[s]]=(n(t[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},Uv=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},DA=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+bA++),t},Nv=function(e){return e.map(function(t){return t.element})},Fv=function(e,t,n){return e&&t.length&&n.add(e(Nv(t),n,new Ci(t,0,!0)),0)},Go=function(e,t,n,i,s,o){var a=e.element,c=e.cache,l=e.parent,u=e.x,h=e.y,f=t.width,d=t.height,m=t.scaleX,_=t.scaleY,p=t.rotation,g=t.bounds,x=o&&jd&&jd(a,"transform,width,height"),M=e,S=t.matrix,b=S.e,T=S.f,C=e.bounds.width!==g.width||e.bounds.height!==g.height||e.scaleX!==m||e.scaleY!==_||e.rotation!==p,v=!C&&e.simple&&t.simple&&!s,E,w,R,L,N,O,I;return v||!l?(m=_=1,p=E=0):(N=CA(l),O=N.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),p=Vo(Math.atan2(O.b,O.a)*bv),E=Vo(Math.atan2(O.c,O.d)*bv+p)%360,m=Math.sqrt(Math.pow(O.a,2)+Math.pow(O.b,2)),_=Math.sqrt(Math.pow(O.c,2)+Math.pow(O.d,2))*Math.cos(E*wA),s&&(s=zo(s)[0],L=En.getProperty(s),I=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),M={scaleX:L("scaleX"),scaleY:L("scaleY"),width:I?I.width:Math.ceil(parseFloat(L("width","px"))),height:I?I.height:parseFloat(L("height","px"))}),c.rotation=p+"deg",c.skewX=E+"deg"),n?(m*=f===M.width||!M.width?1:f/M.width,_*=d===M.height||!M.height?1:d/M.height,c.scaleX=m,c.scaleY=_):(f=gr(f*m/M.scaleX,0),d=gr(d*_/M.scaleY,0),a.style.width=f+"px",a.style.height=d+"px"),i&&Uv(a,t.props),v||!l?(u+=b-e.matrix.e,h+=T-e.matrix.f):C||l!==t.parent?(c.renderTransform(1,c),O=Yi(s||a,!1,!1,!0),w=N.apply({x:O.e,y:O.f}),R=N.apply({x:b,y:T}),u+=R.x-w.x,h+=R.y-w.y):(N.e=N.f=0,R=N.apply({x:b-e.matrix.e,y:T-e.matrix.f}),u+=R.x,h+=R.y),u=gr(u,.02),h=gr(h,.02),o&&!(o instanceof Ns)?x&&x.revert():(c.x=u+"px",c.y=h+"px",c.renderTransform(1,c)),o&&(o.x=u,o.y=h,o.rotation=p,o.skewX=E,n?(o.scaleX=m,o.scaleY=_):(o.width=f,o.height=d)),o||c},sp=function(e,t){return e instanceof Ci?e:new Ci(e,t)},Ov=function(e,t,n){var i=e.idLookup[n],s=e.alt[n];return s.isVisible&&(!(t.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},op=[],ap="width,height,overflowX,overflowY".split(","),lu,Bv=function(e){if(e!==lu){var t=$r.style,n=$r.clientWidth===window.outerWidth,i=$r.clientHeight===window.outerHeight,s=4;if(e&&(n||i)){for(;s--;)op[s]=t[ap[s]];n&&(t.width=$r.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=$r.clientHeight+"px",t.overflowX="hidden"),lu=e}else if(lu){for(;s--;)op[s]?t[ap[s]]=op[s]:t.removeProperty(Rv(ap[s]));lu=e}}},lp=function(e,t,n,i){e instanceof Ci&&t instanceof Ci,n=n||{};var s=n,o=s.clearProps,a=s.onEnter,c=s.onLeave,l=s.absolute,u=s.absoluteOnLeave,h=s.custom,f=s.delay,d=s.paused,m=s.repeat,_=s.repeatDelay,p=s.yoyo,g=s.toggleClass,x=s.nested,M=s.zIndex,S=s.scale,b=s.fade,T=s.stagger,C=s.spin,v=s.prune,E=("props"in n?n:e).props,w=Ho(n,Av),R=En.timeline({delay:f,paused:d,repeat:m,repeatDelay:_,yoyo:p,data:"isFlip"}),L=w,N=[],O=[],I=[],z=[],B=C===!0?1:C||0,K=typeof C=="function"?C:function(){return B},Z=e.interrupted||t.interrupted,D=R[i!==1?"to":"from"],re,ce,ke,Ie,Se,$,le,te,Re,Ne,we,Je,pe,Le;for(ce in t.idLookup)we=t.alt[ce]?Ov(t,e,ce):t.idLookup[ce],Se=we.element,Ne=e.idLookup[ce],e.alt[ce]&&Se===Ne.element&&(e.alt[ce].isVisible||!we.isVisible)&&(Ne=e.alt[ce]),Ne?($={t:Se,b:Ne,a:we,sd:Ne.element===Se?0:we.isVisible?1:-1},I.push($),$.sd&&($.sd<0&&($.b=we,$.a=Ne),Z&&cl($.b,E?ru[E]:su),b&&I.push($.swap={t:Ne.element,b:$.b,a:$.a,sd:-$.sd,swap:$})),Se._flip=Ne.element._flip=Rt?Rt.timeline:R):we.isVisible&&(I.push({t:Se,b:Ho(we,{isVisible:1}),a:we,sd:0,entering:1}),Se._flip=Rt?Rt.timeline:R);if(E&&(tp[E]||Pv(E)).forEach(function(W){return w[W]=function($e){return I[$e].a.props[W]}}),I.finalStates=Re=[],Je=function(){for(ou(I),Bv(!0),Ie=0;Ie<I.length;Ie++)$=I[Ie],pe=$.a,Le=$.b,v&&!pe.isDifferent(Le)&&!$.entering?I.splice(Ie--,1):(Se=$.t,x&&!($.sd<0)&&Ie&&(pe.matrix=Yi(Se,!1,!1,!0)),Le.isVisible&&pe.isVisible?($.sd<0?(le=new Ns(Se,E,e.simple),Go(le,pe,S,0,0,le),le.matrix=Yi(Se,!1,!1,!0),le.css=$.b.css,$.a=pe=le,b&&(Se.style.opacity=Z?Le.opacity:pe.opacity),T&&z.push(Se)):$.sd>0&&b&&(Se.style.opacity=Z?pe.opacity-Le.opacity:"0"),Go(pe,Le,S,E)):Le.isVisible!==pe.isVisible&&(Le.isVisible?pe.isVisible||(Le.css=pe.css,O.push(Le),I.splice(Ie--,1),l&&x&&Go(pe,Le,S,E)):(pe.isVisible&&N.push(pe),I.splice(Ie--,1))),S||(Se.style.maxWidth=Math.max(pe.width,Le.width)+"px",Se.style.maxHeight=Math.max(pe.height,Le.height)+"px",Se.style.minWidth=Math.min(pe.width,Le.width)+"px",Se.style.minHeight=Math.min(pe.height,Le.height)+"px"),x&&g&&Se.classList.add(g)),Re.push(pe);var $e;if(g&&($e=Re.map(function(ve){return ve.element}),x&&$e.forEach(function(ve){return ve.classList.remove(g)})),Bv(!1),S?(w.scaleX=function(ve){return I[ve].a.scaleX},w.scaleY=function(ve){return I[ve].a.scaleY}):(w.width=function(ve){return I[ve].a.width+"px"},w.height=function(ve){return I[ve].a.height+"px"},w.autoRound=n.autoRound||!1),w.x=function(ve){return I[ve].a.x+"px"},w.y=function(ve){return I[ve].a.y+"px"},w.rotation=function(ve){return I[ve].a.rotation+(C?K(ve,te[ve],te)*360:0)},w.skewX=function(ve){return I[ve].a.skewX},te=I.map(function(ve){return ve.t}),(M||M===0)&&(w.modifiers={zIndex:function(){return M}},w.zIndex=M,w.immediateRender=n.immediateRender!==!1),b&&(w.opacity=function(ve){return I[ve].sd<0?0:I[ve].sd>0?I[ve].a.opacity:"+=0"}),z.length){T=En.utils.distribute(T);var Pt=te.slice(z.length);w.stagger=function(ve,We){return T(~z.indexOf(We)?te.indexOf(I[ve].swap.t):ve,We,Pt)}}if(AA.forEach(function(ve){return n[ve]&&R.eventCallback(ve,n[ve],n[ve+"Params"])}),h&&te.length){L=Ho(w,Av),"scale"in h&&(h.scaleX=h.scaleY=h.scale,delete h.scale);for(ce in h)re=Ho(h[ce],Cv),re[ce]=w[ce],!("duration"in re)&&"duration"in w&&(re.duration=w.duration),re.stagger=w.stagger,D.call(R,te,re,0),delete L[ce]}(te.length||O.length||N.length)&&(g&&R.add(function(){return ep($e,g,R._zTime<0?"remove":"add")},0)&&!d&&ep($e,g,"add"),te.length&&D.call(R,te,L,0)),Fv(a,N,R),Fv(c,O,R);var k=Rt&&Rt.timeline;k&&(k.add(R,0),Rt._final.push(function(){return Lv(I,!o)})),ke=R.duration(),R.call(function(){var ve=R.time()>=ke;ve&&!k&&Lv(I,!o),g&&ep($e,g,ve?"remove":"add")})},u&&(l=I.filter(function(W){return!W.sd&&!W.a.isVisible&&W.b.isVisible}).map(function(W){return W.a.element})),Rt){var je;l&&(je=Rt._abs).push.apply(je,Dv(I,l)),Rt._run.push(Je)}else l&&Iv(Dv(I,l)),Je();var Ve=Rt?Rt.timeline:R;return Ve.revert=function(){return cp(Ve,1,1)},Ve},IA=function r(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(r)},cp=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(IA(e),t<2&&e.progress(1),e.kill()),!0},cu=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,s=i.length,o;s--;)o=i[s],t[o.id]?n[o.id]=o:t[o.id]=o},Ci=(function(){function r(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=Nv(t),this.elementStates=t,cu(this);else{this.targets=zo(t);var s=n&&(n.kill===!1||n.batch&&!n.kill);Rt&&!s&&Rt._kill.push(this),this.update(s||!!Rt)}}var e=r.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new Ns(s,i.props,i.simple)}),cu(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,cu(this),this},e.fit=function(n,i,s){for(var o=ou(this.elementStates.slice(0),!1,!0),a=(n||this).idLookup,c=0,l,u;c<o.length;c++)l=o[c],s&&(l.matrix=Yi(l.element,!1,!1,!0)),u=a[l.id],u&&Go(l,u,i,!0,0,l),l.matrix=Yi(l.element,!1,!1,!0);return this},e.getProperty=function(n,i){var s=this.getElementState(n)||iu;return(i in s?s:s.props||iu)[i]},e.add=function(n){for(var i=n.targets.length,s=this.idLookup,o=this.alt,a,c,l;i--;)c=n.elementStates[i],l=s[c.id],l&&(c.element===l.element||o[c.id]&&o[c.id].element===c.element)?(a=this.elementStates.indexOf(c.element===l.element?l:o[c.id]),this.targets.splice(a,1,n.targets[i]),this.elementStates.splice(a,1,c)):(this.targets.push(n.targets[i]),this.elementStates.push(c));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),cu(this),this},e.compare=function(n){var i=n.idLookup,s=this.idLookup,o=[],a=[],c=[],l=[],u=[],h=n.alt,f=this.alt,d=function(v,E,w){return(v.isVisible!==E.isVisible?v.isVisible?c:l:v.isVisible?a:o).push(w)&&u.push(w)},m=function(v,E,w){return u.indexOf(w)<0&&d(v,E,w)},_,p,g,x,M,S,b,T;for(g in i)M=h[g],S=f[g],_=M?Ov(n,this,g):i[g],x=_.element,p=s[g],S?(T=p.isVisible||!S.isVisible&&x===p.element?p:S,b=M&&!_.isVisible&&!M.isVisible&&T.element===M.element?M:_,b.isVisible&&T.isVisible&&b.element!==T.element?((b.isDifferent(T)?a:o).push(b.element,T.element),u.push(b.element,T.element)):d(b,T,b.element),M&&b.element===M.element&&(M=i[g]),m(b.element!==p.element&&M?M:b,p,p.element),m(M&&M.element===S.element?M:b,S,S.element),M&&m(M,S.element===M.element?S:p,M.element)):(p?p.isDifferent(_)?d(_,p,x):o.push(x):c.push(x),M&&m(M,p,M.element));for(g in s)i[g]||(l.push(s[g].element),f[g]&&l.push(f[g].element));return{changed:a,unchanged:o,enter:c,leave:l}},e.recordInlineStyles=function(){for(var n=ru[this.props]||su,i=this.elementStates.length;i--;)cl(this.elementStates[i],n)},e.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(o){var a=o._flip,c=cp(a,n?0:1);n&&c&&s.indexOf(a)<0&&a.add(function(){return i.updateVisibility()}),c&&s.push(a)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(ll(n))]},e.makeAbsolute=function(){return ou(this.elementStates.slice(0),!0,!0).map(ip)},r})(),Ns=(function(){function r(t,n,i){this.element=t,this.update(n,i)}var e=r.prototype;return e.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.update=function(n,i){var s=this,o=s.element,a=En.getProperty(o),c=En.core.getCache(o),l=o.getBoundingClientRect(),u=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),h=i?new Us(1,0,0,1,l.left+Yd(),l.top+qd()):Yi(o,!1,!1,!0);c.uncache=1,s.getProp=a,s.element=o,s.id=DA(o),s.matrix=h,s.cache=c,s.bounds=l,s.isVisible=!!(l.width||l.height||l.left||l.top),s.display=a("display"),s.position=a("position"),s.parent=o.parentNode,s.x=a("x"),s.y=a("y"),s.scaleX=c.scaleX,s.scaleY=c.scaleY,s.rotation=a("rotation"),s.skewX=a("skewX"),s.opacity=a("opacity"),s.width=u?u.width:gr(a("width","px"),.04),s.height=u?u.height:gr(a("height","px"),.04),n&&LA(s,tp[n]||Pv(n)),s.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Ev(o).inverse(),s.simple=i||Vo(h.a)===1&&!Vo(h.b)&&!Vo(h.c)&&Vo(h.d)===1,s.uncache=0},r})(),UA=(function(){function r(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=r.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},r})(),NA=(function(){function r(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Ci,this.timeline=En.timeline()}var e=r.prototype;return e.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new UA(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,s=Rt,o=al;return Rt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,al=a,a.state=a.vars.getState(a)),n&&a.states.forEach(function(c){return i.state.add(c)})}),al=o,Rt=s,this.killConflicts(),this},e.animate=function(){var n=this,i=Rt,s=this.timeline,o=this.actions.length,a,c;for(Rt=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(l){l.vars.animate&&l.vars.animate(l);var u=l.vars.onEnter,h=l.vars.onLeave,f=l.targets,d,m;f&&f.length&&(u||h)&&(d=new Ci,l.states.forEach(function(_){return d.add(_)}),m=d.compare(Wo.getState(f)),m.enter.length&&u&&u(m.enter),m.leave.length&&h&&h(m.leave))}),Iv(this._abs),this._run.forEach(function(l){return l()}),c=s.duration(),a=this._final.slice(0),s.add(function(){c<=s.time()&&(a.forEach(function(l){return l()}),Tv(n,"onComplete"))}),Rt=i;o--;)this.actions[o].vars.once&&this.actions[o].kill();return Tv(this,"onStart"),s.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var o,a=function c(l){l&&(s.targets=l),o=i.indexOf(c),~o&&(i.splice(o,1),i.length||n())};i.push(a),s.vars.loadState(a)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var s=this;return this!==Rt&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Jd[this.id]},r})(),Wo=(function(){function r(){}return r.getState=function(t,n){var i=sp(t,n);return al&&al.states.push(i),n&&n.batch&&r.batch(n.batch).state.add(i),i},r.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),lp(t,sp(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},r.to=function(t,n){return lp(t,sp(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},r.fromTo=function(t,n,i){return lp(t,n,i)},r.fit=function(t,n,i){var s=i?Ho(i,Cv):{},o=i||s,a=o.absolute,c=o.scale,l=o.getVars,u=o.props,h=o.runBackwards,f=o.onComplete,d=o.simple,m=i&&i.fitChild&&ll(i.fitChild),_=rp(n,u,d,t),p=rp(t,0,d,_),g=u?ru[u]:su,x=En.context();return u&&Uv(s,_.props),cl(p,g),h&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){au(p),f&&f.apply(this,arguments)}),a&&ip(p,_),s=Go(p,_,c||m,!s.duration&&u,m,s.duration||l?s:0),typeof i=="object"&&"zIndex"in i&&(s.zIndex=i.zIndex),x&&!l&&x.add(function(){return function(){return au(p)}}),l?s:s.duration?En.to(p.element,s):null},r.makeAbsolute=function(t,n){return(t instanceof Ci?t:new Ci(t,n)).makeAbsolute()},r.batch=function(t){return t||(t="default"),Jd[t]||(Jd[t]=new NA(t))},r.killFlipsOf=function(t,n){(t instanceof Ci?t.targets:zo(t)).forEach(function(i){return i&&cp(i._flip,n!==!1?1:2)})},r.isFlipping=function(t){var n=r.getByTarget(t);return!!n&&n.isActive()},r.getByTarget=function(t){return(ll(t)||iu)._flip},r.getElementState=function(t,n){return new Ns(ll(t),n)},r.convertCoordinates=function(t,n,i){var s=Yi(n,!0,!0).multiply(Yi(t));return i?s.apply(i):s},r.register=function(t){if($r=typeof document<"u"&&document.body,$r){En=t,Xd($r),zo=En.utils.toArray,jd=En.core.getStyleSaver;var n=En.utils.snap(.1);gr=function(s,o){return n(parseFloat(s)+o)}}},r})();Wo.version="3.13.0",typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(Wo),U.registerPlugin(Oe,Wo);let uu=null,Fs=null,hu=[],up=[],hp=[],fp=[],ul=null,dp=null,Xo=null;const kv=[80,-150,-100,-160,100,-90],zv=["inset(100% 100% 0% 0%)","inset(100% 0% 0% 100%)","inset(100% 0% 0% 0%)","inset(100% 100% 0% 0%)","inset(100% 0% 0% 100%)","inset(100% 0% 0% 0%)"],FA="inset(0% 0% 0% 0%)",pp=[{col:"1 / 7",rowOffset:0,alignSelf:"",imgH:"43.125rem"},{col:"9 / 13",rowOffset:0,alignSelf:"end",imgH:"26.875rem"},{col:"3 / 11",rowOffset:1,alignSelf:"",imgH:"42.25rem"},{col:"1 / 5",rowOffset:2,alignSelf:"end",imgH:"26.875rem"},{col:"7 / 13",rowOffset:2,alignSelf:"",imgH:"43.125rem"},{col:"3 / 11",rowOffset:3,alignSelf:"",imgH:"42.25rem"}],OA=4,BA=6,mp=[{col:"1 / 7",ratio:"1 / 1"},{small:!0,ratio:"253 / 241"},{col:"1 / 7",ratio:"343 / 550"}],kA="3 / 7",zA="1 / 5";function Vv(){document.querySelectorAll(".work-list_studio").forEach(n=>{Wv(n,".work-studio-link")});const r=document.querySelector(".section.works");if(!r)return;const e=window.matchMedia("(min-width: 992px)").matches;e&&(Hv(r),ul=()=>{clearTimeout(dp),dp=setTimeout(()=>{Gv(),Hv(r)},200)},window.addEventListener("resize",ul)),Wv(r);const t=[...r.querySelectorAll(".work_item")];!e&&t.length&&(Xo=t[0].parentElement,Xo&&U.set(Xo,{display:"grid",gridTemplateColumns:`repeat(${BA}, 1fr)`,gridAutoFlow:"row dense",alignItems:"start"})),t.forEach((n,i)=>{const s=n.querySelector(".img-work-w"),o=n.querySelector(".img-work");if(e){const a=pp[i%pp.length],l=Math.floor(i/pp.length)*OA+a.rowOffset+1;n.style.gridColumn=a.col,n.style.gridRow=String(l),n.style.alignSelf=a.alignSelf,s&&(s.style.height=a.imgH)}else{const a=mp[i%mp.length];let c=a.col;a.small&&(c=Math.floor(i/mp.length)%2===0?kA:zA),n.style.gridColumn=c,n.style.gridRow="auto",n.style.alignSelf="start",n.style.display="flex",n.style.flexDirection="column",s&&(s.style.width="100%",s.style.height="auto",s.style.aspectRatio=a.ratio)}if(s&&U.set(s,{overflow:"hidden"}),o&&U.set(o,{height:e?"auto":"100%",width:"100%",objectFit:"cover",top:0}),s){U.set(s,{clipPath:zv[i%zv.length]});const a=U.to(s,{clipPath:FA,ease:"power4.inOut",duration:1,scrollTrigger:{trigger:n,start:"top 88%",toggleActions:"play none none none"}});up.push(a.scrollTrigger)}if(e){const a=kv[i%kv.length],c=U.fromTo(n,{y:0},{y:a,ease:"none",scrollTrigger:{trigger:n,start:"top bottom",end:"bottom top",scrub:1.5}});if(hu.push(c.scrollTrigger),o){const l=U.fromTo(o,{yPercent:-5},{yPercent:-20,ease:"none",scrollTrigger:{trigger:n,start:"top bottom",end:"bottom center",scrub:3}});hu.push(l.scrollTrigger)}}})}function Hv(r){const e=[...r.querySelectorAll(".works-word-block-state1 .works-word")],t=[...r.querySelectorAll(".works-word-block-state2")];if(!(e.length>0&&t.length>=e.length))return;fp=e.map(i=>({word:i,parent:i.parentElement,next:i.nextSibling}));const n=Wo.getState(e);e.forEach((i,s)=>t[s].appendChild(i)),Fs=Wo.from(n,{ease:"power4.inOut",duration:1.4,stagger:{each:.2,from:"end"},repeat:1,yoyo:!0,paused:!0}),e.forEach((i,s)=>{const o=(e.length-1-s)*.1;Fs.to(i,{scale:.2,duration:.8,ease:"power4.inOut"},o),Fs.to(i,{scale:1,duration:.8,ease:"power4.inOut"},o+.8)}),uu=Oe.create({trigger:r,start:"top top",end:"bottom bottom",scrub:3,animation:Fs})}function Gv(){uu&&(uu.kill(),uu=null),Fs&&(Fs.kill(),Fs=null),fp.forEach(({word:r,parent:e,next:t})=>{e&&(U.killTweensOf(r),U.set(r,{clearProps:"all"}),t&&t.parentNode===e?e.insertBefore(r,t):e.appendChild(r))}),fp=[]}function Wv(r,e=".work-link"){const t=[...r.querySelectorAll(e)];t.length!==0&&t.forEach(n=>{const i=n.querySelector(".cursor-work");if(!i)return;U.set(n,{position:"relative"}),U.set(i,{position:"absolute",xPercent:-50,yPercent:-50,left:0,top:0,scale:0,autoAlpha:0,pointerEvents:"none",zIndex:10}),n.style.cursor="none";const s={tx:0,ty:0,cx:0,cy:0,raf:null,active:!1,lastX:null,lastY:null},o=.09;function a(){s.cx+=(s.tx-s.cx)*o,s.cy+=(s.ty-s.cy)*o,U.set(i,{x:s.cx,y:s.cy}),s.active||Math.abs(s.cx-s.tx)>.05||Math.abs(s.cy-s.ty)>.05?s.raf=requestAnimationFrame(a):s.raf=null}const c=()=>{s.active||(s.active=!0,U.to(i,{scale:1,autoAlpha:1,duration:.6,ease:"back.out(1.8)",overwrite:"auto"}),s.raf||(s.raf=requestAnimationFrame(a)))},l=()=>{s.active&&(s.active=!1,U.to(i,{scale:0,autoAlpha:0,duration:.38,ease:"power3.in",overwrite:"auto"}))},u=()=>{},h=d=>{const m=n.getBoundingClientRect();s.tx=d.clientX-m.left,s.ty=d.clientY-m.top;const _=d.clientX!==s.lastX||d.clientY!==s.lastY;if(s.lastX=d.clientX,s.lastY=d.clientY,!_){s.active&&!s.raf&&(s.raf=requestAnimationFrame(a));return}s.active||(s.cx=s.tx,s.cy=s.ty,U.set(i,{x:s.cx,y:s.cy})),c(),s.raf||(s.raf=requestAnimationFrame(a))},f=()=>l();n.addEventListener("mouseenter",u),n.addEventListener("mousemove",h),n.addEventListener("mouseleave",f),hp.push({link:n,cursor:i,s,onEnter:u,onMove:h,onLeave:f,hide:l})})}function VA(){ul&&(window.removeEventListener("resize",ul),ul=null),clearTimeout(dp),Gv(),Xo&&(U.set(Xo,{clearProps:"display,gridTemplateColumns,gridAutoFlow,alignItems"}),Xo=null),hu.forEach(r=>r?.kill()),hu=[],up.forEach(r=>r?.kill()),up=[],hp.forEach(({link:r,cursor:e,s:t,onEnter:n,onMove:i,onLeave:s})=>{r.removeEventListener("mouseenter",n),r.removeEventListener("mousemove",i),r.removeEventListener("mouseleave",s),t.raf&&cancelAnimationFrame(t.raf),U.killTweensOf(e),r.style.cursor=""}),hp=[]}U.registerPlugin(Nr);let fu=[];function Xv(){document.querySelectorAll(".faq3_component").forEach(e=>{if(e.querySelector(".faq3_accordion"))return;const t=e.closest("section");t&&(t.style.display="none")});const r=[...document.querySelectorAll(".faq3_accordion")];r.length!==0&&r.forEach(e=>{const t=e.querySelector(".faq3_question"),n=e.querySelector(".faq-separator-w"),i=e.querySelector(".faq3_answer"),s=e.querySelector(".faq-separator"),o=e.querySelector(".spacing-faq"),a=e.querySelectorAll(".cross-faq :is(path, rect, line)")[1]??null;if(!t||!i)return;const c=t.querySelector(".p-xl")??t.firstElementChild;c&&U.set(c,{opacity:.5}),o&&U.set(o,{height:0}),a&&U.set(a,{transformOrigin:"50% 50%"}),U.set(i,{height:0,overflow:"hidden"}),n&&U.set(n,{opacity:0}),t.style.cursor="pointer";const l=h=>{c&&U.to(c,{opacity:h,duration:.6,ease:"power4.inOut",overwrite:!0})},u={accordion:e,question:t,label:c,separator:n,line:s,crossBar:a,spacing:o,answer:i,open:!1,split:null,tl:null};u.openIt=()=>{u.open=!0,l(1),u.tl?.kill(),u.split?.revert(),u.split=Nr.create(i.children.length?[...i.children]:i,{type:"lines",linesClass:"line-child",mask:"lines",autoSplit:!1,aria:"auto"}),U.set(u.split.lines,{yPercent:100}),u.tl=U.timeline({defaults:{ease:"power4.inOut"}}).to(n,{opacity:1,duration:.6},0).fromTo(s,{width:"0%"},{width:"100%",duration:1.4},0).to(i,{height:"auto",duration:1.2},0).to(a,{scaleY:0,duration:1.2},0).to(o,{height:"4.375rem",duration:1.2},0).to(u.split.lines,{yPercent:0,duration:1.4,stagger:.07},.15)},u.closeIt=()=>{u.open=!1,t.matches(":hover")||l(.5),u.tl?.kill(),u.tl=U.timeline({defaults:{ease:"power4.inOut"},onComplete:()=>{u.split?.revert(),u.split=null}}).to(i,{height:0,duration:1},0).to(a,{scaleY:1,duration:1},0).to(o,{height:0,duration:1},0).to(n,{opacity:0,duration:.8},0)},u.onClick=()=>{if(u.open){u.closeIt();return}fu.forEach(h=>{h!==u&&h.open&&h.closeIt()}),u.openIt()},u.onEnter=()=>l(1),u.onLeave=()=>{u.open||l(.5)},t.addEventListener("click",u.onClick),t.addEventListener("mouseenter",u.onEnter),t.addEventListener("mouseleave",u.onLeave),fu.push(u)})}function HA(){fu.forEach(({question:r,label:e,separator:t,line:n,crossBar:i,spacing:s,answer:o,split:a,tl:c,onClick:l,onEnter:u,onLeave:h})=>{r.removeEventListener("click",l),r.removeEventListener("mouseenter",u),r.removeEventListener("mouseleave",h),e&&U.killTweensOf(e),r.style.cursor="",c?.kill(),a?.revert(),U.set([o,t,n,i,e,s].filter(Boolean),{clearProps:"all"})}),fu=[]}U.registerPlugin(Oe);let gp=[],_p=[];const GA="inset(100% 0% 0% 0%)",WA="inset(100% 100% 0% 0%)",XA="inset(100% 0% 0% 100%)",qA="inset(0% 0% 0% 0%)";function qv(){const r=document.querySelector(".work-list-img");if(!r)return;const e=[...r.querySelectorAll(".work-item-img")];e.length!==0&&(U.set(r,{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridAutoFlow:"row dense",gap:"1.25rem",alignItems:"start"}),e.forEach((t,n)=>{const i=t.querySelector(".work-img"),o=(i?.getAttribute("alt")??"").split(",").map(m=>m.trim()).filter(Boolean),a=o.find(m=>/^https?:\/\/\S+\.mp4(\?\S*)?$/i.test(m))||o.find(m=>/^https?:\/\//i.test(m)),c=o.filter(m=>m!==a).join(" "),l=/full/i.test(c),u=/portrait/i.test(c),h=l?12:6;if(t.style.gridColumn=`span ${h}`,U.set(t,{height:"auto",aspectRatio:u?"3 / 4":"auto",overflow:"hidden",position:"relative"}),i&&U.set(i,{width:"100%",height:u?"100%":"auto",objectFit:"cover",display:"block"}),a){const m=document.createElement("video");m.src=a,m.muted=!0,m.loop=!0,m.autoplay=!0,m.playsInline=!0,m.setAttribute("muted",""),m.setAttribute("playsinline",""),m.setAttribute("preload","auto"),U.set(m,{width:"100%",height:"auto",display:"none",opacity:0});const _=()=>{U.set(t,{aspectRatio:"auto"}),i&&U.set(i,{display:"none"}),U.set(m,{display:"block"}),U.to(m,{opacity:1,duration:.4})},p=()=>m.remove();m.addEventListener("canplay",_,{once:!0}),m.addEventListener("error",p,{once:!0}),t.appendChild(m),_p.push(m);const g=m.play();g&&typeof g.catch=="function"&&g.catch(()=>{})}let f=GA;h<12&&(f=n%2===0?WA:XA),U.set(t,{clipPath:f});const d=U.to(t,{clipPath:qA,ease:"power4.inOut",duration:1.4,scrollTrigger:{trigger:t,start:"top 88%",toggleActions:"play none none none"}});gp.push(d.scrollTrigger)}))}function YA(){gp.forEach(r=>r?.kill()),gp=[],_p.forEach(r=>{r.pause(),r.removeAttribute("src"),r.load(),r.remove()}),_p=[]}U.registerPlugin(Oe);let vp=[],xp=[];function Yv(){const r=document.querySelectorAll(".formes-w");r.length!==0&&r.forEach(e=>{const t=[...e.querySelectorAll('img, svg, [class*="-cursor"]')],n=g=>(g.dataset.formesBaseRot===void 0&&(g.dataset.formesBaseRot=String(Number(U.getProperty(g,"rotation"))||0)),parseFloat(g.dataset.formesBaseRot)||0),i=(g,x,M,S)=>Math.sqrt(Math.pow(M-g,2)+Math.pow(S-x,2)),s=(g,x,M,S)=>Math.atan2(S-x,M-g),o=g=>{const x=Number(U.getProperty(g,"x"))||0,M=Number(U.getProperty(g,"y"))||0,S=g.getBoundingClientRect();return{x:S.left+S.width/2-x,y:S.top+S.height/2-M}},a=()=>window.matchMedia("(max-width: 767px)").matches,c=()=>a()?{influenceRadius:260,maxDistance:110,rotForce:12,scaleForce:.1}:{influenceRadius:460,maxDistance:380,rotForce:30,scaleForce:.2},l=(g,x)=>{const{influenceRadius:M,maxDistance:S,rotForce:b,scaleForce:T}=c();t.forEach(C=>{const v=o(C),E=i(g,x,v.x,v.y),w=n(C);if(E<M){const R=s(v.x,v.y,g,x),L=Math.pow((M-E)/M,1.6),N=L*S,O=w-Math.cos(R)*L*b;U.to(C,{x:-Math.cos(R)*N,y:-Math.sin(R)*N,rotation:O,scale:1+L*T,duration:.45,ease:"power4.out",overwrite:"auto"})}else U.to(C,{x:0,y:0,rotation:w,scale:1,duration:1.2,ease:"elastic.out(1, 0.35)",overwrite:"auto"})})},u=()=>{t.forEach(g=>{U.to(g,{x:0,y:0,rotation:n(g),scale:1,duration:1.2,ease:"elastic.out(1, 0.35)",overwrite:"auto"})})};let h=!1;const f={x:window.innerWidth/2,y:window.innerHeight/2},d=()=>h?f:{x:window.innerWidth/2,y:window.innerHeight/2},m=g=>{h=!0,f.x=g.clientX,f.y=g.clientY,l(f.x,f.y)},_=()=>{h=!1;const g=d();l(g.x,g.y)};e.addEventListener("mousemove",m),e.addEventListener("mouseleave",_);const p=Oe.create({trigger:e,start:"top bottom",end:"bottom top",onUpdate:()=>{const g=d();l(g.x,g.y)},onLeave:u,onLeaveBack:u});xp.push(p),vp.push({wrapper:e,handleMouseMove:m,handleMouseLeave:_,objects:t})})}function $A(){vp.forEach(({wrapper:r,handleMouseMove:e,handleMouseLeave:t,objects:n})=>{r.removeEventListener("mousemove",e),r.removeEventListener("mouseleave",t),n.forEach(i=>U.killTweensOf(i))}),xp.forEach(r=>r?.kill()),vp=[],xp=[]}function $v(){const r=document.querySelector(".nbr-works-w");if(!r)return;const e=r.querySelector(".nbr-projects .w-dyn-items"),t=r.querySelector(".div-block-3 div:nth-child(2)");if(!e||!t)return;const n=e.querySelectorAll(".w-dyn-item").length,i=String(n).padStart(2,"0");t.textContent=i}function Kv(){const r=document.querySelector(".next-project-w");if(!r)return;const e=r.querySelector(".h1-case-next"),t=r.querySelector(".nbr-project-next"),n=r.querySelector(".next-work-link"),i=[...r.querySelectorAll(".next-work-list .next-work-item")];if(!e||!t||i.length===0)return;let s=r.dataset.currentProject;if(s==null){const f=(t.getAttribute("aria-label")??t.textContent??"").match(/\d+/);if(!f)return;s=f[0],r.dataset.currentProject=s}const o=parseInt(s,10);if(Number.isNaN(o))return;const a=i.map(KA).filter(h=>h&&!Number.isNaN(h.number));if(a.length===0)return;const c=a.filter(h=>h.number>o).sort((h,f)=>h.number-f.number),l=c.length>0?c[0]:a.slice().sort((h,f)=>h.number-f.number)[0];if(!l)return;l.name&&(e.textContent=l.name,e.setAttribute("aria-label",l.name));const u=`W'${String(l.number).padStart(2,"0")}`;t.textContent=u,t.setAttribute("aria-label",u),n&&l.href&&(n.setAttribute("href",l.href),n.dataset.transition="flip")}function KA(r){if(!r)return null;const e=r.querySelector("a")?.getAttribute("href")??"",t=[...r.children].filter(s=>s.tagName==="DIV"),n=(t[0]?.textContent??"").trim(),i=parseInt((t[1]?.textContent??"").trim(),10);return{name:n,number:i,href:e}}let hl=null,Kr=null,fl=null,dl=null,pl=null,Ri=0,_r=0,qo=!1,Os=null;const Zv=2600,ZA=2.5,jA=.12,JA=2;function jv(){const r=document.querySelector(".timeline-next-w");hl=r?.querySelector(".timeline-fill"),!(!r||!hl)&&(Ri=0,_r=0,qo=!1,Os=null,U.set(hl,{width:"0%"}),fl=e=>{qo||Jv(e.deltaY,e)},dl=e=>{Os=e.touches[0]?.clientY??null},pl=e=>{if(qo||Os==null)return;const t=e.touches[0]?.clientY??Os,n=(Os-t)*ZA;Os=t,Jv(n,e)},window.addEventListener("wheel",fl,{passive:!1,capture:!0}),window.addEventListener("touchstart",dl,{passive:!0,capture:!0}),window.addEventListener("touchmove",pl,{passive:!1,capture:!0}))}function Jv(r,e){if(r>0){if(!QA())return;Ri=Math.min(1,Ri+r/Zv),Qv(e),ex()}else if(r<0){if(Ri<=0)return;Ri=Math.max(0,Ri+r/Zv),Qv(e),ex()}}function QA(){const r=document.documentElement;return window.innerHeight+window.scrollY>=r.scrollHeight-JA}function Qv(r){r.cancelable&&(r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation&&r.stopImmediatePropagation())}function ex(){Kr||(Kr=requestAnimationFrame(tx))}function tx(){if(_r+=(Ri-_r)*jA,Math.abs(Ri-_r)<5e-4&&(_r=Ri),U.set(hl,{width:_r*100+"%"}),!qo&&_r>=.999){qo=!0,Kr=null,eC();return}_r!==Ri?Kr=requestAnimationFrame(tx):Kr=null}function eC(){const r=document.querySelector(".next-work-link"),e=r?.getAttribute("href");!e||e==="#"||(r?r.click():window.location.href=e)}function tC(){fl&&window.removeEventListener("wheel",fl,{capture:!0}),dl&&window.removeEventListener("touchstart",dl,{capture:!0}),pl&&window.removeEventListener("touchmove",pl,{capture:!0}),fl=dl=pl=null,Kr&&(cancelAnimationFrame(Kr),Kr=null),hl=null,Ri=0,_r=0,qo=!1,Os=null}U.registerPlugin(Oe);let du=[];function nx(){const r=[...document.querySelectorAll("[parallax]")];r.length!==0&&r.forEach(e=>{const t=parseFloat(e.getAttribute("parallax-y")??"-60"),n=parseFloat(e.getAttribute("parallax-x")??"0"),i=parseFloat(e.getAttribute("parallax-scrub")??"1.5"),s={trigger:e,start:"top bottom",end:"bottom top",scrub:i},o=U.fromTo(e,{y:0,x:0},{y:t,x:n,ease:"none",scrollTrigger:s});du.push(o.scrollTrigger);const a=e.querySelector("[parallax-img]");if(!a)return;let c,l;if(a.tagName==="IMG"?(l=a,c=a.parentElement):(c=a,l=a.querySelector("img")),!l)return;const u=parseFloat(a.getAttribute("parallax-img-y")??"-5"),h=parseFloat(a.getAttribute("parallax-img-scrub")??"2.5");U.set(c,{overflow:"hidden"}),U.set(l,{height:"110%",width:"100%",objectFit:"cover",top:0});const f=U.fromTo(l,{yPercent:0},{yPercent:u,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:h}});du.push(f.scrollTrigger)})}function nC(){du.forEach(r=>r?.kill()),du=[]}U.registerPlugin(Oe);const ix='abcdefghijklmnopqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ0123456789#$()!?"§&<>@*+-',rx=22,iC=8;let Sp=[];function sx(r){const e=[];function t(n){if(n.nodeType===Node.TEXT_NODE){const i=document.createDocumentFragment();for(const s of n.textContent)if(s===" "||s===" "||s===`
`)i.appendChild(document.createTextNode(s));else{const o=document.createElement("span");o.style.display="inline-block",o.textContent=s,i.appendChild(o),e.push({span:o,original:s})}n.parentNode.replaceChild(i,n)}else n.nodeType===Node.ELEMENT_NODE&&[...n.childNodes].forEach(t)}return[...r.childNodes].forEach(t),e}function ox(){return ix[Math.floor(Math.random()*ix.length)]}function rC(r,e,t){const n=r.length;if(!n)return;const i=(Math.floor(e)%n+n)%n;r.forEach(({span:s,original:o},a)=>{let c=a-i;if(c<0&&(c+=n),c<rx){const l=t*Math.pow(1-c/rx,.6);s.textContent=Math.random()<l?ox():o}else s.textContent=o})}const sC=4;function oC(r,e){if(!r.length)return;const t=e*r.length;r.forEach(({span:n,original:i},s)=>{s<t-sC?(n.style.opacity="1",n.textContent=i):s<t?(n.style.opacity="1",n.textContent=ox()):(n.style.opacity="0",n.textContent=i)})}function ax(){const r=document.querySelectorAll(".section.glitch");r.length&&r.forEach(e=>{const t=[...e.querySelectorAll(".text-block-6")];if(!t.length)return;const n=t.map(w=>w.innerHTML),i=t.map(w=>sx(w)),s=i.flat(),o=Math.max(...i.map(w=>w.length),1),a=e.querySelector(".finaltext"),c=a?.innerHTML??null,l=a?sx(a):[];l.forEach(({span:w})=>{w.style.opacity="0"});let u=0,h=0,f=0,d=null,m=!1,_=0,p=null,g=-1;function x(){if(m){if(_++,u+=(h-u)*.14,h*=.9,_%iC===0&&(u>.01?(f=(f+1+u*10)%o,i.forEach(w=>rC(w,f,u))):s.forEach(({span:w,original:R})=>{w.textContent=R}),l.length&&p)){const w=p.scrollTrigger?.progress??0;if(Math.abs(w-g)>2e-4)oC(l,w);else{const L=w*l.length;l.forEach(({span:N,original:O},I)=>{N.style.opacity=I<L?"1":"0",N.textContent=O})}g=w}d=requestAnimationFrame(x)}}function M(){m||(m=!0,_=0,d=requestAnimationFrame(x))}function S(){m=!1,h=0,u=0,d&&(cancelAnimationFrame(d),d=null),s.forEach(({span:w,original:R})=>{w.textContent=R}),l.forEach(({span:w,original:R})=>{w.style.opacity="0",w.textContent=R}),g=-1}const b=Oe.create({trigger:e,start:"top bottom",end:"bottom top",onEnter:M,onLeave:S,onEnterBack:M,onLeaveBack:S,onUpdate(w){const R=Math.abs(w.getVelocity());h=Math.min(R/3400,.45)}});p=U.timeline({scrollTrigger:{trigger:e,start:"top top",end:"center 30%",scrub:2}}),i.forEach((w,R)=>{const L=R*.06;w.forEach(({span:N})=>{p.to(N,{y:U.utils.random(40,160),x:U.utils.random(-10,10),rotation:U.utils.random(-20,20),opacity:0,ease:"power2.in",duration:U.utils.random(.25,.7)},L+U.utils.random(0,.6))})});const T=e.querySelector(".img-glitch-w"),C=e.querySelector(".glitch-img-w"),v=[];if(C&&v.push(U.to(C,{opacity:.3,ease:"none",immediateRender:!1,scrollTrigger:{trigger:e,start:"top top",end:"center center",scrub:2}}).scrollTrigger),T){const[w,R]=[...T.children];w&&v.push(U.fromTo(w,{y:100},{y:-300,ease:"none",scrollTrigger:{trigger:e,start:"top top",end:"bottom top",scrub:1.5}}).scrollTrigger),R&&v.push(U.fromTo(R,{y:100},{y:-800,ease:"none",scrollTrigger:{trigger:e,start:"top top",end:"bottom top",scrub:3}}).scrollTrigger)}const E=[{wrapperSel:".merguez",imgSel:".merguez-img",yPercent:-8},{wrapperSel:".ballon",imgSel:".ballon-img",yPercent:10}];E.forEach(({wrapperSel:w,imgSel:R,yPercent:L})=>{const N=e.querySelector(w),O=e.querySelector(R);!N||!O||(U.set(N,{overflow:"hidden"}),U.set(O,{height:"110%",width:"100%",objectFit:"cover",top:0}),v.push(U.fromTo(O,{yPercent:0},{yPercent:L,ease:"none",scrollTrigger:{trigger:e,start:"20% top",end:"bottom top",scrub:3}}).scrollTrigger))}),Sp.push({glitchST:b,fallTL:p,stopGlitch:S,textBlocks:t,originalHTMLs:n,finalTextEl:a,finalOriginalHTML:c,imgSTs:v,imgGlitchW:T,glitchImgW:C,imgParallaxItems:E.map(({wrapperSel:w,imgSel:R})=>({wrapper:e.querySelector(w),img:e.querySelector(R)}))})})}function aC(){Sp.forEach(({glitchST:r,fallTL:e,stopGlitch:t,textBlocks:n,originalHTMLs:i,finalTextEl:s,finalOriginalHTML:o,imgSTs:a,imgGlitchW:c,glitchImgW:l,imgParallaxItems:u})=>{t(),r?.kill(!0),e?.scrollTrigger?.kill(!0),e?.kill(),a?.forEach(h=>{h&&(h.animation?.kill(),h.kill(!0))}),c&&[...c.children].forEach(h=>U.set(h,{clearProps:"y"})),l&&U.set(l,{clearProps:"opacity"}),u?.forEach(({wrapper:h,img:f})=>{h&&U.set(h,{clearProps:"overflow"}),f&&U.set(f,{clearProps:"height,width,objectFit,top,yPercent"})}),n.forEach((h,f)=>{h.innerHTML=i[f]}),s&&o!==null&&(s.innerHTML=o)}),Sp=[]}U.registerPlugin(Oe);let Yo=[],yp=[];const lC=1.4,cC=.35,uC=1,hC=1.8,fC=1,dC=1,pC=.08,mC="top 85%",gC=1.4,Mp=1.6,_C=.35;function lx(){const r=[...document.querySelectorAll(".musee-w")];if(!r.length)return;const e=window.matchMedia("(min-width: 992px)").matches;r.forEach(t=>{const n=t.querySelector(".video-w");if(!n)return;const i=t.parentElement;i&&i.classList.contains("pin-spacer")&&(i.parentElement.insertBefore(t,i),i.remove(),t.removeAttribute("style"));const s=t.querySelector(".musee-bg"),o=t.closest(".section")||t.parentElement,a=t.querySelector(".btn-sound")||o&&o.querySelector(".btn-sound"),c=a&&a.querySelector(".toggle-sound"),l=a&&a.querySelector(".tick-sound");let u=!1,h=null,f=!1;a&&U.set(a,{opacity:0,pointerEvents:"none"});function d(){if(!c||!l)return 0;const E=c.getBoundingClientRect(),w=l.getBoundingClientRect(),R=w.left-E.left,L=E.right-w.right;return Math.max(0,L-R)}const m=[...n.querySelectorAll("video")];let _=!1,p=null;function g(E){a&&a.classList.toggle("is-on",E),l&&U.to(l,{x:E?d():0,duration:.3,ease:"power2.out"})}function x(E,w=0,R=Mp){const L=m[0];if(L)if(h&&(h.kill(),h=null),E){f=!1,L.muted=!1,L.volume=0;const N=L.play();N&&N.catch&&N.catch(()=>{}),h=U.to(L,{volume:1,duration:R,delay:w,ease:"power1.out",onComplete:()=>{h=null}})}else f=!0,h=U.to(L,{volume:0,duration:R,delay:w,ease:"power1.out",onComplete:()=>{try{L.muted=!0,L.volume=1}catch{}f=!1,h=null}})}function M(){u=!u,g(u),x(u,0,_C)}a&&a.addEventListener("click",M);function S(){u&&x(!1,gC,Mp)}function b(){C();const E=m[0];u&&(f||E&&E.muted)&&x(!0,0,Mp)}m.forEach(E=>{E.autoplay=!1,E.removeAttribute("autoplay"),E.preload="auto";try{E.pause(),E.readyState>=1?E.currentTime=.001:(E.networkState!==HTMLMediaElement.NETWORK_LOADING&&E.load(),E.addEventListener("loadedmetadata",()=>{if(!_)try{E.currentTime=.001}catch{}},{once:!0}))}catch{}});function T(){if(m.length>1){const E=m[0];for(let w=1;w<m.length;w++)if(Math.abs(m[w].currentTime-E.currentTime)>pC)try{m[w].currentTime=E.currentTime}catch{}}p=requestAnimationFrame(T)}function C(){if(_||!m.length)return;_=!0;const E=m[0].currentTime;m.forEach(w=>{try{w.currentTime=E}catch{}const R=w.play();R&&R.catch&&R.catch(()=>{})}),m.length>1&&(p=requestAnimationFrame(T)),a&&U.to(a,{opacity:1,pointerEvents:"auto",duration:.5,ease:"power2.out"})}yp.push(()=>{p&&cancelAnimationFrame(p),h&&(h.kill(),h=null),a&&a.removeEventListener("click",M),m.forEach(E=>{try{E.pause(),E.muted=!0}catch{}})});const v=Oe.create({trigger:t,start:mC,onEnter:b,onEnterBack:b});if(Yo.push(v),e){const E=U.fromTo(n,{scale:lC},{scale:cC,ease:"none",scrollTrigger:{trigger:t,start:"top top",end:"bottom top",pin:t,pinSpacing:!0,scrub:uC,invalidateOnRefresh:!0,refreshPriority:1,onEnter:b,onEnterBack:b,onLeave:S,onLeaveBack:S}});if(Yo.push(E.scrollTrigger),s){const w=U.fromTo(s,{scale:hC},{scale:fC,ease:"none",scrollTrigger:{trigger:t,start:"top top",end:"bottom top",scrub:dC,invalidateOnRefresh:!0}});Yo.push(w.scrollTrigger)}}else{const E=Oe.create({trigger:t,start:"top top",end:"bottom top",onEnter:b,onEnterBack:b,onLeave:S,onLeaveBack:S});Yo.push(E)}})}function vC(){Yo.forEach(r=>{r&&(r.animation?.kill(),r.kill(!0))}),Yo=[],yp.forEach(r=>r()),yp=[],document.querySelectorAll(".musee-w").forEach(r=>{U.set(r,{clearProps:"all"})}),document.querySelectorAll(".musee-w .video-w, .musee-w .musee-bg").forEach(r=>{U.set(r,{clearProps:"scale"})}),document.querySelectorAll(".btn-sound").forEach(r=>{r.classList.remove("is-on"),U.set(r,{clearProps:"opacity,pointerEvents"})}),document.querySelectorAll(".btn-sound .tick-sound").forEach(r=>{U.set(r,{clearProps:"transform"})})}let ml=null,$o=[];function xC(){return[...document.querySelectorAll("video")].filter(r=>r.closest(".musee-w")?!1:r.hasAttribute("autoplay")||r.classList.contains("video-hero-bg"))}function SC(r){r.muted=!0,r.defaultMuted=!0,r.playsInline=!0,r.setAttribute("playsinline",""),r.setAttribute("muted","")}function yC(r){const e=r.play();e&&e.catch&&e.catch(()=>{})}function cx(){ux(),$o=xC(),$o.length&&($o.forEach(SC),ml=new IntersectionObserver(r=>{r.forEach(e=>{const t=e.target;if(e.isIntersecting)yC(t);else try{t.pause()}catch{}})},{threshold:0}),$o.forEach(r=>ml.observe(r)))}function ux(){ml&&(ml.disconnect(),ml=null),$o.forEach(r=>{try{r.pause()}catch{}}),$o=[]}U.registerPlugin(Oe);let Ep=[];function hx(){const r=document.querySelectorAll(".footer-svg-w");r.length!==0&&r.forEach(e=>{const t=[...e.querySelectorAll("path")];if(t.length===0)return;const n=e.querySelector("svg");t.forEach(l=>U.set(l,{transformOrigin:"50% 50%"})),n&&(n.style.overflow="hidden"),e.style.overflow="hidden";const i=t[t.length-1],s=t.slice(0,-1);U.set(s,{autoAlpha:1,yPercent:120}),U.set(i,{autoAlpha:1,scale:0});const o=()=>{n&&(n.style.overflow="visible"),e.style.overflow="visible"},a=Oe.create({trigger:e,start:"top 95%",once:!0,onEnter:()=>{const l=s.slice().sort(()=>Math.random()-.5);U.fromTo(l,{autoAlpha:1,yPercent:120},{yPercent:0,duration:1.2,ease:"power4.inOut",stagger:.03,delay:.2,onComplete:o}),U.fromTo(i,{autoAlpha:1,scale:0},{scale:1,duration:.6,ease:"back.out(0.9)",delay:1})}}),c=[];t.forEach(l=>{let u=!1;const h=()=>{u||(u=!0,U.timeline({onComplete:()=>{u=!1}}).to(l,{scale:.05,duration:.6,ease:"power2.inOut"}).to(l,{scale:1,duration:1.8,ease:"elastic.out(1, 0.8)"}))};l.addEventListener("mouseenter",h),c.push({path:l,handleEnter:h})}),Ep.push({wrapper:e,handlers:c,revealST:a})})}function MC(){Ep.forEach(({handlers:r,revealST:e})=>{e?.kill(),r.forEach(({path:t,handleEnter:n})=>{t.removeEventListener("mouseenter",n),U.killTweensOf(t)})}),Ep=[]}let pu=[];function EC({menuBtn:r,svg:e,rects:t,links:n}){const i=document.querySelector(".menu_wrapper"),s=document.querySelector(".nav-logo-wrap"),o=r.querySelector(".menu-btn-text")||document.querySelector(".menu-btn-text");e&&U.set(e,{transformOrigin:"50% 50%"});const a=t.map(_=>({x:parseFloat(_.getAttribute("x")||"0")+1<3?.3:-.3,y:parseFloat(_.getAttribute("y")||"0")+1<3?.3:-.3}));i&&U.set(i,{autoAlpha:0,display:"none"}),o&&U.set(o,{opacity:0,pointerEvents:"none"});let c=!1;const l=()=>{c=!0,ly(),i&&(U.set(i,{display:"flex"}),U.to(i,{autoAlpha:1,duration:.5,ease:"power4.out"})),s&&U.to(s,{opacity:0,pointerEvents:"none",duration:.4,ease:"power4.out"}),o&&U.to(o,{opacity:1,pointerEvents:"auto",duration:.4,ease:"power4.out"}),e&&U.to(e,{rotateZ:45,duration:.5,ease:"power4.out"}),t.forEach((_,p)=>U.to(_,{x:a[p].x,y:a[p].y,duration:.5,ease:"power4.out"}))},u=()=>{c&&(c=!1,cy(),o&&U.to(o,{opacity:0,pointerEvents:"none",duration:.4,ease:"power4.out"}),i&&U.to(i,{autoAlpha:0,duration:.4,ease:"power4.out",onComplete:()=>U.set(i,{display:"none"})}),s&&U.to(s,{opacity:1,pointerEvents:"auto",duration:.4,ease:"power4.out"}),e&&U.to(e,{rotateZ:0,duration:.5,ease:"power4.out"}),t.forEach(_=>U.to(_,{x:0,y:0,duration:.5,ease:"power4.out"})))},h=()=>{c?u():l()};r.addEventListener("click",h);const f=i?[...i.querySelectorAll("a")]:[],m=[...new Set([...n,...f])].map(_=>{const p=()=>u();return _.addEventListener("click",p),{link:_,handleClick:p}});pu.push({isMobile:!0,menuBtn:r,svg:e,rects:t,menuWrapper:i,logoWrap:s,btnText:o,handleToggle:h,linkHandlers:m})}function fx(){const r=document.querySelectorAll(".menu-w");r.length!==0&&r.forEach(e=>{const t=e.querySelector(".menu-btn"),n=e.querySelector(".menu-links-w");if(!t||!n)return;const i=[...n.querySelectorAll(".link-boiler")],s=t.querySelector(".menu-svg"),o=s?[...s.querySelectorAll("rect")]:[];if(i.length===0)return;if(window.matchMedia("(max-width: 991px)").matches){EC({menuBtn:t,svg:s,rects:o,links:i});return}const a=i.map(S=>{const b=S.getBoundingClientRect().height;S.style.overflow="hidden",S.style.display="block",S.style.height=`${b}px`;const T=document.createElement("span");for(T.style.cssText="display:block;";S.firstChild;)T.appendChild(S.firstChild);return S.appendChild(T),U.set(T,{y:b}),T});s&&U.set(s,{transformOrigin:"50% 50%"});const c=o.map(S=>({x:parseFloat(S.getAttribute("x")||"0")+1<3?.3:-.3,y:parseFloat(S.getAttribute("y")||"0")+1<3?.3:-.3})),l=U.timeline({paused:!0});s&&l.to(s,{rotateZ:45,duration:.5,ease:"power4.out"},0),o.forEach((S,b)=>{l.to(S,{x:c[b].x,y:c[b].y,duration:.5,ease:"power4.out"},0)}),l.to(a,{y:0,duration:.6,ease:"power4.out",stagger:.08},0);let u=!1,h=null;const f=()=>{clearTimeout(h),!u&&(u=!0,l.play())},d=()=>{clearTimeout(h),h=setTimeout(()=>{u&&(u=!1,l.reverse())},60)},m=()=>clearTimeout(h),_=()=>f(),p=()=>d(),g=()=>m(),x=()=>d();t.addEventListener("mouseenter",_),t.addEventListener("mouseleave",p),n.addEventListener("mouseenter",g),n.addEventListener("mouseleave",x);const M=i.map(S=>{const b=()=>{clearTimeout(h),u=!1,l.reverse()};return S.addEventListener("click",b),{link:S,handleClick:b}});pu.push({menuBtn:t,linksW:n,links:i,spans:a,svg:s,rects:o,tl:l,closeTimer:h,handleBtnEnter:_,handleBtnLeave:p,handleLinksEnter:g,handleLinksLeave:x,linkHandlers:M})})}function TC(){pu.forEach(r=>{if(r.isMobile){r.menuBtn.removeEventListener("click",r.handleToggle),r.linkHandlers.forEach(({link:d,handleClick:m})=>{d.removeEventListener("click",m)}),r.svg&&(U.killTweensOf(r.svg),U.set(r.svg,{clearProps:"transform"})),r.rects.forEach(d=>{U.killTweensOf(d),U.set(d,{clearProps:"transform"})}),r.menuWrapper&&U.killTweensOf(r.menuWrapper),r.logoWrap&&(U.killTweensOf(r.logoWrap),U.set(r.logoWrap,{clearProps:"pointerEvents"})),r.btnText&&U.killTweensOf(r.btnText);return}const{menuBtn:e,linksW:t,links:n,spans:i,svg:s,rects:o,tl:a,handleBtnEnter:c,handleBtnLeave:l,handleLinksEnter:u,handleLinksLeave:h,linkHandlers:f}=r;e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",l),t.removeEventListener("mouseenter",u),t.removeEventListener("mouseleave",h),f.forEach(({link:d,handleClick:m})=>{d.removeEventListener("click",m)}),a.kill(),U.killTweensOf(i),s&&(U.killTweensOf(s),U.set(s,{clearProps:"transform"})),o.forEach(d=>{U.killTweensOf(d),U.set(d,{clearProps:"transform"})}),i.forEach((d,m)=>{const _=n[m];for(;d.firstChild;)_.appendChild(d.firstChild);d.remove(),_.style.overflow="",_.style.display="",_.style.height=""})}),pu=[]}const bC=r=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()};async function dx(){const r=document.querySelector(".nothin-hero-svg");if(!r)return;const e=document.querySelector(".section-w .video-hero-bg");oA({containerSelector:".section-w"}),await lA({base:r,baseBg:"#ffffff",reveal:"rgba(0,0,0,0)",hideOriginal:!0}),e&&wC(e),requestAnimationFrame(()=>requestAnimationFrame(()=>{const t=document.querySelector(".section-w .section.hero-home");t&&(t.style.backgroundColor="transparent")}))}function wC(r){r.muted=!0,r.defaultMuted=!0,r.loop=!0,r.playsInline=!0,r.setAttribute("playsinline",""),r.setAttribute("muted","");const e=()=>{const t=r.play();t&&t.catch&&t.catch(()=>{})};e(),r.addEventListener("loadeddata",e,{once:!0}),r.addEventListener("canplay",e,{once:!0})}let px=null;function mu(){clearTimeout(px),px=setTimeout(()=>Oe.refresh(),150)}function mx(){document.querySelectorAll('img[loading="lazy"]').forEach(r=>{r.loading="eager"})}function gx(){requestAnimationFrame(()=>{requestAnimationFrame(()=>Oe.refresh())}),document.querySelectorAll("img").forEach(r=>{r.complete||(r.addEventListener("load",mu,{once:!0}),r.addEventListener("error",mu,{once:!0}))}),document.querySelectorAll("video").forEach(r=>{r.readyState<1&&r.addEventListener("loadedmetadata",mu,{once:!0})}),document.fonts.ready.then(mu)}function AC(){const r=ay(),e=Iy();!!document.querySelector(".loader")&&(r.stop(),window.scrollTo(0,0)),e.on("NAVIGATE_END",()=>{r.scrollTo(0,{immediate:!0}),fM(),aM(),ky(),jy(),nM(),aA(),SA(),VA(),HA(),YA(),tC(),nC(),aC(),vC(),ux(),MC(),$A(),xA(),TC(),vv(),fx(),$v(),Nh(),Kv(),xv(),Vv(),Xv(),qv(),jv(),nx(),ax(),lx(),cx(),hx(),Yv(),lc(!0),dx(),mx(),gx()}),window.addEventListener("loader:hero-reveal-start",()=>lc(!1)),window.addEventListener("loader:hero-revealed",()=>{dx(),r.start()}),Nh(),Kv(),n_(),w_(),A_(),C_(),R_(),P_(),vv(),xv(),Vv(),Xv(),qv(),jv(),$v(),nx(),ax(),lx(),cx(),hx(),Yv(),fx(),hM(),mx(),gx(),window.gsap=U}bC(AC)}));
