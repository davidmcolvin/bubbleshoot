/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-canvas-csstransitions-setclasses !*/
!function(e,n,t){function o(e){var n=P.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?P.className.baseVal=n:P.className=n)}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return typeof e===n}function s(){var e,n,t,o,r,s,i;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=a(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)s=e[r],i=s.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),C.push((o?"":"no-")+i.join("-"))}}function i(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var o;for(var r in e)if(e[r]in n)return t===!1?e[r]:(o=n[e[r]],a(o,"function")?i(o,t||n):o);return!1}function u(e,n){return!!~(""+e).indexOf(n)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(n,t,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,n,t);var a=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(a){var s=a.error?"error":"log";a[s].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!t&&n.currentStyle&&n.currentStyle[o];return r}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=r(T?"svg":"body"),e.fake=!0),e}function y(e,t,o,a){var s,i,l,u,c="modernizr",f=r("div"),d=p();if(parseInt(o,10))for(;o--;)l=r("div"),l.id=a?a[o]:c+(o+1),f.appendChild(l);return s=r("style"),s.type="text/css",s.id="s"+c,(d.fake?d:f).appendChild(s),d.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),f.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",u=P.style.overflow,P.style.overflow="hidden",P.appendChild(d)),i=t(f,e),d.fake?(d.parentNode.removeChild(d),P.style.overflow=u,P.offsetHeight):f.parentNode.removeChild(f),!!i}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(d(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];r--;)a.push("("+d(n[r])+":"+o+")");return a=a.join(" or "),y("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return t}function g(e,n,o,s){function i(){f&&(delete E.style,delete E.modElem)}if(s=a(s,"undefined")?!1:s,!a(o,"undefined")){var l=m(e,o);if(!a(l,"undefined"))return l}for(var f,d,p,y,g,v=["modernizr","tspan","samp"];!E.style&&v.length;)f=!0,E.modElem=r(v.shift()),E.style=E.modElem.style;for(p=e.length,d=0;p>d;d++)if(y=e[d],g=E.style[y],u(y,"-")&&(y=c(y)),E.style[y]!==t){if(s||a(o,"undefined"))return i(),"pfx"==n?y:!0;try{E.style[y]=o}catch(h){}if(E.style[y]!=g)return i(),"pfx"==n?y:!0}return i(),!1}function v(e,n,t,o,r){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+x.join(s+" ")+s).split(" ");return a(n,"string")||a(n,"undefined")?g(i,n,o,r):(i=(e+" "+b.join(s+" ")+s).split(" "),l(i,n,t))}function h(e,n,o){return v(e,t,t,n,o)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var P=n.documentElement,T="svg"===P.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=r("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("canvas",function(){var e=r("canvas");return!(!e.getContext||!e.getContext("2d"))});var _="Moz O ms Webkit",x=S._config.usePrefixes?_.split(" "):[];S._cssomPrefixes=x;var b=S._config.usePrefixes?_.toLowerCase().split(" "):[];S._domPrefixes=b;var z={elem:r("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),S.testAllProps=v,S.testAllProps=h,Modernizr.addTest("csstransitions",h("transition","all",!0)),s(),o(C),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);