;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
var ko = require('knockout-client'),
	vm = require('./viewModel');

ko.applyBindings(vm);
},{"./viewModel":2,"knockout-client":3}],3:[function(require,module,exports){
// Knockout JavaScript library v2.2.1
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {function j(w){throw w;}var m=!0,p=null,r=!1;function u(w){return function(){return w}};var x=window,y=document,ga=navigator,F=window.jQuery,I=void 0;
function L(w){function ha(a,d,c,e,f){var g=[];a=b.j(function(){var a=d(c,f)||[];0<g.length&&(b.a.Ya(M(g),a),e&&b.r.K(e,p,[c,a,f]));g.splice(0,g.length);b.a.P(g,a)},p,{W:a,Ka:function(){return 0==g.length||!b.a.X(g[0])}});return{M:g,j:a.pa()?a:I}}function M(a){for(;a.length&&!b.a.X(a[0]);)a.splice(0,1);if(1<a.length){for(var d=a[0],c=a[a.length-1],e=[d];d!==c;){d=d.nextSibling;if(!d)return;e.push(d)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}return a}function S(a,b,c,e,f){var g=Math.min,
h=Math.max,k=[],l,n=a.length,q,s=b.length,v=s-n||1,G=n+s+1,J,A,z;for(l=0;l<=n;l++){A=J;k.push(J=[]);z=g(s,l+v);for(q=h(0,l-1);q<=z;q++)J[q]=q?l?a[l-1]===b[q-1]?A[q-1]:g(A[q]||G,J[q-1]||G)+1:q+1:l+1}g=[];h=[];v=[];l=n;for(q=s;l||q;)s=k[l][q]-1,q&&s===k[l][q-1]?h.push(g[g.length]={status:c,value:b[--q],index:q}):l&&s===k[l-1][q]?v.push(g[g.length]={status:e,value:a[--l],index:l}):(g.push({status:"retained",value:b[--q]}),--l);if(h.length&&v.length){a=10*n;var t;for(b=c=0;(f||b<a)&&(t=h[c]);c++){for(e=
0;k=v[e];e++)if(t.value===k.value){t.moved=k.index;k.moved=t.index;v.splice(e,1);b=e=0;break}b+=e}}return g.reverse()}function T(a,d,c,e,f){f=f||{};var g=a&&N(a),g=g&&g.ownerDocument,h=f.templateEngine||O;b.za.vb(c,h,g);c=h.renderTemplate(c,e,f,g);("number"!=typeof c.length||0<c.length&&"number"!=typeof c[0].nodeType)&&j(Error("Template engine must return an array of DOM nodes"));g=r;switch(d){case "replaceChildren":b.e.N(a,c);g=m;break;case "replaceNode":b.a.Ya(a,c);g=m;break;case "ignoreTargetNode":break;
default:j(Error("Unknown renderMode: "+d))}g&&(U(c,e),f.afterRender&&b.r.K(f.afterRender,p,[c,e.$data]));return c}function N(a){return a.nodeType?a:0<a.length?a[0]:p}function U(a,d){if(a.length){var c=a[0],e=a[a.length-1];V(c,e,function(a){b.Da(d,a)});V(c,e,function(a){b.s.ib(a,[d])})}}function V(a,d,c){var e;for(d=b.e.nextSibling(d);a&&(e=a)!==d;)a=b.e.nextSibling(e),(1===e.nodeType||8===e.nodeType)&&c(e)}function W(a,d,c){a=b.g.aa(a);for(var e=b.g.Q,f=0;f<a.length;f++){var g=a[f].key;if(e.hasOwnProperty(g)){var h=
e[g];"function"===typeof h?(g=h(a[f].value))&&j(Error(g)):h||j(Error("This template engine does not support the '"+g+"' binding within its templates"))}}a="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+b.g.ba(a)+" } })()})";return c.createJavaScriptEvaluatorBlock(a)+d}function X(a,d,c,e){function f(a){return function(){return k[a]}}function g(){return k}var h=0,k,l;b.j(function(){var n=c&&c instanceof b.z?c:new b.z(b.a.d(c)),q=n.$data;e&&b.eb(a,n);if(k=("function"==typeof d?
d(n,a):d)||b.J.instance.getBindings(a,n)){if(0===h){h=1;for(var s in k){var v=b.c[s];v&&8===a.nodeType&&!b.e.I[s]&&j(Error("The binding '"+s+"' cannot be used with virtual elements"));if(v&&"function"==typeof v.init&&(v=(0,v.init)(a,f(s),g,q,n))&&v.controlsDescendantBindings)l!==I&&j(Error("Multiple bindings ("+l+" and "+s+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),l=s}h=2}if(2===h)for(s in k)(v=b.c[s])&&"function"==
typeof v.update&&(0,v.update)(a,f(s),g,q,n)}},p,{W:a});return{Nb:l===I}}function Y(a,d,c){var e=m,f=1===d.nodeType;f&&b.e.Ta(d);if(f&&c||b.J.instance.nodeHasBindings(d))e=X(d,p,a,c).Nb;e&&Z(a,d,!f)}function Z(a,d,c){for(var e=b.e.firstChild(d);d=e;)e=b.e.nextSibling(d),Y(a,d,c)}function $(a,b){var c=aa(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:p}function aa(a,b){for(var c=a,e=1,f=[];c=c.nextSibling;){if(H(c)&&(e--,0===e))return f;f.push(c);B(c)&&e++}b||j(Error("Cannot find closing comment tag to match: "+
a.nodeValue));return p}function H(a){return 8==a.nodeType&&(K?a.text:a.nodeValue).match(ia)}function B(a){return 8==a.nodeType&&(K?a.text:a.nodeValue).match(ja)}function P(a,b){for(var c=p;a!=c;)c=a,a=a.replace(ka,function(a,c){return b[c]});return a}function la(){var a=[],d=[];this.save=function(c,e){var f=b.a.i(a,c);0<=f?d[f]=e:(a.push(c),d.push(e))};this.get=function(c){c=b.a.i(a,c);return 0<=c?d[c]:I}}function ba(a,b,c){function e(e){var g=b(a[e]);switch(typeof g){case "boolean":case "number":case "string":case "function":f[e]=
g;break;case "object":case "undefined":var h=c.get(g);f[e]=h!==I?h:ba(g,b,c)}}c=c||new la;a=b(a);if(!("object"==typeof a&&a!==p&&a!==I&&!(a instanceof Date)))return a;var f=a instanceof Array?[]:{};c.save(a,f);var g=a;if(g instanceof Array){for(var h=0;h<g.length;h++)e(h);"function"==typeof g.toJSON&&e("toJSON")}else for(h in g)e(h);return f}function ca(a,d){if(a)if(8==a.nodeType){var c=b.s.Ua(a.nodeValue);c!=p&&d.push({sb:a,Fb:c})}else if(1==a.nodeType)for(var c=0,e=a.childNodes,f=e.length;c<f;c++)ca(e[c],
d)}function Q(a,d,c,e){b.c[a]={init:function(a){b.a.f.set(a,da,{});return{controlsDescendantBindings:m}},update:function(a,g,h,k,l){h=b.a.f.get(a,da);g=b.a.d(g());k=!c!==!g;var n=!h.Za;if(n||d||k!==h.qb)n&&(h.Za=b.a.Ia(b.e.childNodes(a),m)),k?(n||b.e.N(a,b.a.Ia(h.Za)),b.Ea(e?e(l,g):l,a)):b.e.Y(a),h.qb=k}};b.g.Q[a]=r;b.e.I[a]=m}function ea(a,d,c){c&&d!==b.k.q(a)&&b.k.T(a,d);d!==b.k.q(a)&&b.r.K(b.a.Ba,p,[a,"change"])}var b="undefined"!==typeof w?w:{};b.b=function(a,d){for(var c=a.split("."),e=b,f=0;f<
c.length-1;f++)e=e[c[f]];e[c[c.length-1]]=d};b.p=function(a,b,c){a[b]=c};b.version="2.2.1";b.b("version",b.version);b.a=new function(){function a(a,d){if("input"!==b.a.u(a)||!a.type||"click"!=d.toLowerCase())return r;var c=a.type;return"checkbox"==c||"radio"==c}var d=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,c={},e={};c[/Firefox\/2/i.test(ga.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];c.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
for(var f in c){var g=c[f];if(g.length)for(var h=0,k=g.length;h<k;h++)e[g[h]]=f}var l={propertychange:m},n,c=3;f=y.createElement("div");for(g=f.getElementsByTagName("i");f.innerHTML="\x3c!--[if gt IE "+ ++c+"]><i></i><![endif]--\x3e",g[0];);n=4<c?c:I;return{Na:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],o:function(a,b){for(var d=0,c=a.length;d<c;d++)b(a[d])},i:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var d=0,c=a.length;d<
c;d++)if(a[d]===b)return d;return-1},lb:function(a,b,d){for(var c=0,e=a.length;c<e;c++)if(b.call(d,a[c]))return a[c];return p},ga:function(a,d){var c=b.a.i(a,d);0<=c&&a.splice(c,1)},Ga:function(a){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)0>b.a.i(d,a[c])&&d.push(a[c]);return d},V:function(a,b){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)d.push(b(a[c]));return d},fa:function(a,b){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)b(a[c])&&d.push(a[c]);return d},P:function(a,b){if(b instanceof Array)a.push.apply(a,
b);else for(var d=0,c=b.length;d<c;d++)a.push(b[d]);return a},extend:function(a,b){if(b)for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a},ka:function(a){for(;a.firstChild;)b.removeNode(a.firstChild)},Hb:function(a){a=b.a.L(a);for(var d=y.createElement("div"),c=0,e=a.length;c<e;c++)d.appendChild(b.A(a[c]));return d},Ia:function(a,d){for(var c=0,e=a.length,g=[];c<e;c++){var f=a[c].cloneNode(m);g.push(d?b.A(f):f)}return g},N:function(a,d){b.a.ka(a);if(d)for(var c=0,e=d.length;c<e;c++)a.appendChild(d[c])},
Ya:function(a,d){var c=a.nodeType?[a]:a;if(0<c.length){for(var e=c[0],g=e.parentNode,f=0,h=d.length;f<h;f++)g.insertBefore(d[f],e);f=0;for(h=c.length;f<h;f++)b.removeNode(c[f])}},bb:function(a,b){7>n?a.setAttribute("selected",b):a.selected=b},D:function(a){return(a||"").replace(d,"")},Rb:function(a,d){for(var c=[],e=(a||"").split(d),f=0,g=e.length;f<g;f++){var h=b.a.D(e[f]);""!==h&&c.push(h)}return c},Ob:function(a,b){a=a||"";return b.length>a.length?r:a.substring(0,b.length)===b},tb:function(a,b){if(b.compareDocumentPosition)return 16==
(b.compareDocumentPosition(a)&16);for(;a!=p;){if(a==b)return m;a=a.parentNode}return r},X:function(a){return b.a.tb(a,a.ownerDocument)},u:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,d,c){var e=n&&l[d];if(!e&&"undefined"!=typeof F){if(a(b,d)){var f=c;c=function(a,b){var d=this.checked;b&&(this.checked=b.nb!==m);f.call(this,a);this.checked=d}}F(b).bind(d,c)}else!e&&"function"==typeof b.addEventListener?b.addEventListener(d,c,r):"undefined"!=typeof b.attachEvent?b.attachEvent("on"+
d,function(a){c.call(b,a)}):j(Error("Browser doesn't support addEventListener or attachEvent"))},Ba:function(b,d){(!b||!b.nodeType)&&j(Error("element must be a DOM node when calling triggerEvent"));if("undefined"!=typeof F){var c=[];a(b,d)&&c.push({nb:b.checked});F(b).trigger(d,c)}else"function"==typeof y.createEvent?"function"==typeof b.dispatchEvent?(c=y.createEvent(e[d]||"HTMLEvents"),c.initEvent(d,m,m,x,0,0,0,0,0,r,r,r,r,0,b),b.dispatchEvent(c)):j(Error("The supplied element doesn't support dispatchEvent")):
"undefined"!=typeof b.fireEvent?(a(b,d)&&(b.checked=b.checked!==m),b.fireEvent("on"+d)):j(Error("Browser doesn't support triggering events"))},d:function(a){return b.$(a)?a():a},ua:function(a){return b.$(a)?a.t():a},da:function(a,d,c){if(d){var e=/[\w-]+/g,f=a.className.match(e)||[];b.a.o(d.match(e),function(a){var d=b.a.i(f,a);0<=d?c||f.splice(d,1):c&&f.push(a)});a.className=f.join(" ")}},cb:function(a,d){var c=b.a.d(d);if(c===p||c===I)c="";if(3===a.nodeType)a.data=c;else{var e=b.e.firstChild(a);
!e||3!=e.nodeType||b.e.nextSibling(e)?b.e.N(a,[y.createTextNode(c)]):e.data=c;b.a.wb(a)}},ab:function(a,b){a.name=b;if(7>=n)try{a.mergeAttributes(y.createElement("<input name='"+a.name+"'/>"),r)}catch(d){}},wb:function(a){9<=n&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},ub:function(a){if(9<=n){var b=a.style.width;a.style.width=0;a.style.width=b}},Lb:function(a,d){a=b.a.d(a);d=b.a.d(d);for(var c=[],e=a;e<=d;e++)c.push(e);return c},L:function(a){for(var b=[],d=0,c=a.length;d<
c;d++)b.push(a[d]);return b},Pb:6===n,Qb:7===n,Z:n,Oa:function(a,d){for(var c=b.a.L(a.getElementsByTagName("input")).concat(b.a.L(a.getElementsByTagName("textarea"))),e="string"==typeof d?function(a){return a.name===d}:function(a){return d.test(a.name)},f=[],g=c.length-1;0<=g;g--)e(c[g])&&f.push(c[g]);return f},Ib:function(a){return"string"==typeof a&&(a=b.a.D(a))?x.JSON&&x.JSON.parse?x.JSON.parse(a):(new Function("return "+a))():p},xa:function(a,d,c){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&
j(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(b.a.d(a),d,c)},Jb:function(a,d,c){c=c||{};var e=c.params||{},f=c.includeFields||this.Na,g=a;if("object"==typeof a&&"form"===b.a.u(a))for(var g=a.action,h=f.length-1;0<=h;h--)for(var k=b.a.Oa(a,f[h]),l=k.length-1;0<=l;l--)e[k[l].name]=k[l].value;d=b.a.d(d);var n=y.createElement("form");
n.style.display="none";n.action=g;n.method="post";for(var w in d)a=y.createElement("input"),a.name=w,a.value=b.a.xa(b.a.d(d[w])),n.appendChild(a);for(w in e)a=y.createElement("input"),a.name=w,a.value=e[w],n.appendChild(a);y.body.appendChild(n);c.submitter?c.submitter(n):n.submit();setTimeout(function(){n.parentNode.removeChild(n)},0)}}};b.b("utils",b.a);b.b("utils.arrayForEach",b.a.o);b.b("utils.arrayFirst",b.a.lb);b.b("utils.arrayFilter",b.a.fa);b.b("utils.arrayGetDistinctValues",b.a.Ga);b.b("utils.arrayIndexOf",
b.a.i);b.b("utils.arrayMap",b.a.V);b.b("utils.arrayPushAll",b.a.P);b.b("utils.arrayRemoveItem",b.a.ga);b.b("utils.extend",b.a.extend);b.b("utils.fieldsIncludedWithJsonPost",b.a.Na);b.b("utils.getFormFields",b.a.Oa);b.b("utils.peekObservable",b.a.ua);b.b("utils.postJson",b.a.Jb);b.b("utils.parseJson",b.a.Ib);b.b("utils.registerEventHandler",b.a.n);b.b("utils.stringifyJson",b.a.xa);b.b("utils.range",b.a.Lb);b.b("utils.toggleDomNodeCssClass",b.a.da);b.b("utils.triggerEvent",b.a.Ba);b.b("utils.unwrapObservable",
b.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice.call(arguments);a=c.shift();return function(){return b.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});b.a.f=new function(){var a=0,d="__ko__"+(new Date).getTime(),c={};return{get:function(a,d){var c=b.a.f.la(a,r);return c===I?I:c[d]},set:function(a,d,c){c===I&&b.a.f.la(a,r)===I||(b.a.f.la(a,m)[d]=c)},la:function(b,f){var g=b[d];if(!g||!("null"!==g&&c[g])){if(!f)return I;g=b[d]="ko"+
a++;c[g]={}}return c[g]},clear:function(a){var b=a[d];return b?(delete c[b],a[d]=p,m):r}}};b.b("utils.domData",b.a.f);b.b("utils.domData.clear",b.a.f.clear);b.a.F=new function(){function a(a,d){var e=b.a.f.get(a,c);e===I&&d&&(e=[],b.a.f.set(a,c,e));return e}function d(c){var e=a(c,r);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);b.a.f.clear(c);"function"==typeof F&&"function"==typeof F.cleanData&&F.cleanData([c]);if(f[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}
var c="__ko_domNodeDisposal__"+(new Date).getTime(),e={1:m,8:m,9:m},f={1:m,9:m};return{Ca:function(b,d){"function"!=typeof d&&j(Error("Callback must be a function"));a(b,m).push(d)},Xa:function(d,e){var f=a(d,r);f&&(b.a.ga(f,e),0==f.length&&b.a.f.set(d,c,I))},A:function(a){if(e[a.nodeType]&&(d(a),f[a.nodeType])){var c=[];b.a.P(c,a.getElementsByTagName("*"));for(var k=0,l=c.length;k<l;k++)d(c[k])}return a},removeNode:function(a){b.A(a);a.parentNode&&a.parentNode.removeChild(a)}}};b.A=b.a.F.A;b.removeNode=
b.a.F.removeNode;b.b("cleanNode",b.A);b.b("removeNode",b.removeNode);b.b("utils.domNodeDisposal",b.a.F);b.b("utils.domNodeDisposal.addDisposeCallback",b.a.F.Ca);b.b("utils.domNodeDisposal.removeDisposeCallback",b.a.F.Xa);b.a.ta=function(a){var d;if("undefined"!=typeof F)if(F.parseHTML)d=F.parseHTML(a);else{if((d=F.clean([a]))&&d[0]){for(a=d[0];a.parentNode&&11!==a.parentNode.nodeType;)a=a.parentNode;a.parentNode&&a.parentNode.removeChild(a)}}else{var c=b.a.D(a).toLowerCase();d=y.createElement("div");
c=c.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!c.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!c.indexOf("<td")||!c.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];a="ignored<div>"+c[1]+a+c[2]+"</div>";for("function"==typeof x.innerShiv?d.appendChild(x.innerShiv(a)):d.innerHTML=a;c[0]--;)d=d.lastChild;d=b.a.L(d.lastChild.childNodes)}return d};b.a.ca=function(a,d){b.a.ka(a);d=b.a.d(d);if(d!==p&&d!==I)if("string"!=typeof d&&(d=d.toString()),
"undefined"!=typeof F)F(a).html(d);else for(var c=b.a.ta(d),e=0;e<c.length;e++)a.appendChild(c[e])};b.b("utils.parseHtmlFragment",b.a.ta);b.b("utils.setHtml",b.a.ca);var R={};b.s={ra:function(a){"function"!=typeof a&&j(Error("You can only pass a function to ko.memoization.memoize()"));var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);R[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},hb:function(a,b){var c=R[a];c===I&&j(Error("Couldn't find any memo with ID "+
a+". Perhaps it's already been unmemoized."));try{return c.apply(p,b||[]),m}finally{delete R[a]}},ib:function(a,d){var c=[];ca(a,c);for(var e=0,f=c.length;e<f;e++){var g=c[e].sb,h=[g];d&&b.a.P(h,d);b.s.hb(c[e].Fb,h);g.nodeValue="";g.parentNode&&g.parentNode.removeChild(g)}},Ua:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:p}};b.b("memoization",b.s);b.b("memoization.memoize",b.s.ra);b.b("memoization.unmemoize",b.s.hb);b.b("memoization.parseMemoText",b.s.Ua);b.b("memoization.unmemoizeDomNodeAndDescendants",
b.s.ib);b.Ma={throttle:function(a,d){a.throttleEvaluation=d;var c=p;return b.j({read:a,write:function(b){clearTimeout(c);c=setTimeout(function(){a(b)},d)}})},notify:function(a,d){a.equalityComparer="always"==d?u(r):b.m.fn.equalityComparer;return a}};b.b("extenders",b.Ma);b.fb=function(a,d,c){this.target=a;this.ha=d;this.rb=c;b.p(this,"dispose",this.B)};b.fb.prototype.B=function(){this.Cb=m;this.rb()};b.S=function(){this.w={};b.a.extend(this,b.S.fn);b.p(this,"subscribe",this.ya);b.p(this,"extend",
this.extend);b.p(this,"getSubscriptionsCount",this.yb)};b.S.fn={ya:function(a,d,c){c=c||"change";var e=new b.fb(this,d?a.bind(d):a,function(){b.a.ga(this.w[c],e)}.bind(this));this.w[c]||(this.w[c]=[]);this.w[c].push(e);return e},notifySubscribers:function(a,d){d=d||"change";this.w[d]&&b.r.K(function(){b.a.o(this.w[d].slice(0),function(b){b&&b.Cb!==m&&b.ha(a)})},this)},yb:function(){var a=0,b;for(b in this.w)this.w.hasOwnProperty(b)&&(a+=this.w[b].length);return a},extend:function(a){var d=this;if(a)for(var c in a){var e=
b.Ma[c];"function"==typeof e&&(d=e(d,a[c]))}return d}};b.Qa=function(a){return"function"==typeof a.ya&&"function"==typeof a.notifySubscribers};b.b("subscribable",b.S);b.b("isSubscribable",b.Qa);var C=[];b.r={mb:function(a){C.push({ha:a,La:[]})},end:function(){C.pop()},Wa:function(a){b.Qa(a)||j(Error("Only subscribable things can act as dependencies"));if(0<C.length){var d=C[C.length-1];d&&!(0<=b.a.i(d.La,a))&&(d.La.push(a),d.ha(a))}},K:function(a,b,c){try{return C.push(p),a.apply(b,c||[])}finally{C.pop()}}};
var ma={undefined:m,"boolean":m,number:m,string:m};b.m=function(a){function d(){if(0<arguments.length){if(!d.equalityComparer||!d.equalityComparer(c,arguments[0]))d.H(),c=arguments[0],d.G();return this}b.r.Wa(d);return c}var c=a;b.S.call(d);d.t=function(){return c};d.G=function(){d.notifySubscribers(c)};d.H=function(){d.notifySubscribers(c,"beforeChange")};b.a.extend(d,b.m.fn);b.p(d,"peek",d.t);b.p(d,"valueHasMutated",d.G);b.p(d,"valueWillMutate",d.H);return d};b.m.fn={equalityComparer:function(a,
b){return a===p||typeof a in ma?a===b:r}};var E=b.m.Kb="__ko_proto__";b.m.fn[E]=b.m;b.ma=function(a,d){return a===p||a===I||a[E]===I?r:a[E]===d?m:b.ma(a[E],d)};b.$=function(a){return b.ma(a,b.m)};b.Ra=function(a){return"function"==typeof a&&a[E]===b.m||"function"==typeof a&&a[E]===b.j&&a.zb?m:r};b.b("observable",b.m);b.b("isObservable",b.$);b.b("isWriteableObservable",b.Ra);b.R=function(a){0==arguments.length&&(a=[]);a!==p&&(a!==I&&!("length"in a))&&j(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));
var d=b.m(a);b.a.extend(d,b.R.fn);return d};b.R.fn={remove:function(a){for(var b=this.t(),c=[],e="function"==typeof a?a:function(b){return b===a},f=0;f<b.length;f++){var g=b[f];e(g)&&(0===c.length&&this.H(),c.push(g),b.splice(f,1),f--)}c.length&&this.G();return c},removeAll:function(a){if(a===I){var d=this.t(),c=d.slice(0);this.H();d.splice(0,d.length);this.G();return c}return!a?[]:this.remove(function(d){return 0<=b.a.i(a,d)})},destroy:function(a){var b=this.t(),c="function"==typeof a?a:function(b){return b===
a};this.H();for(var e=b.length-1;0<=e;e--)c(b[e])&&(b[e]._destroy=m);this.G()},destroyAll:function(a){return a===I?this.destroy(u(m)):!a?[]:this.destroy(function(d){return 0<=b.a.i(a,d)})},indexOf:function(a){var d=this();return b.a.i(d,a)},replace:function(a,b){var c=this.indexOf(a);0<=c&&(this.H(),this.t()[c]=b,this.G())}};b.a.o("pop push reverse shift sort splice unshift".split(" "),function(a){b.R.fn[a]=function(){var b=this.t();this.H();b=b[a].apply(b,arguments);this.G();return b}});b.a.o(["slice"],
function(a){b.R.fn[a]=function(){var b=this();return b[a].apply(b,arguments)}});b.b("observableArray",b.R);b.j=function(a,d,c){function e(){b.a.o(z,function(a){a.B()});z=[]}function f(){var a=h.throttleEvaluation;a&&0<=a?(clearTimeout(t),t=setTimeout(g,a)):g()}function g(){if(!q)if(n&&w())A();else{q=m;try{var a=b.a.V(z,function(a){return a.target});b.r.mb(function(c){var d;0<=(d=b.a.i(a,c))?a[d]=I:z.push(c.ya(f))});for(var c=s.call(d),e=a.length-1;0<=e;e--)a[e]&&z.splice(e,1)[0].B();n=m;h.notifySubscribers(l,
"beforeChange");l=c}finally{b.r.end()}h.notifySubscribers(l);q=r;z.length||A()}}function h(){if(0<arguments.length)return"function"===typeof v?v.apply(d,arguments):j(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")),this;n||g();b.r.Wa(h);return l}function k(){return!n||0<z.length}var l,n=r,q=r,s=a;s&&"object"==typeof s?(c=s,s=c.read):(c=c||{},s||(s=c.read));"function"!=typeof s&&j(Error("Pass a function that returns the value of the ko.computed"));
var v=c.write,G=c.disposeWhenNodeIsRemoved||c.W||p,w=c.disposeWhen||c.Ka||u(r),A=e,z=[],t=p;d||(d=c.owner);h.t=function(){n||g();return l};h.xb=function(){return z.length};h.zb="function"===typeof c.write;h.B=function(){A()};h.pa=k;b.S.call(h);b.a.extend(h,b.j.fn);b.p(h,"peek",h.t);b.p(h,"dispose",h.B);b.p(h,"isActive",h.pa);b.p(h,"getDependenciesCount",h.xb);c.deferEvaluation!==m&&g();if(G&&k()){A=function(){b.a.F.Xa(G,arguments.callee);e()};b.a.F.Ca(G,A);var D=w,w=function(){return!b.a.X(G)||D()}}return h};
b.Bb=function(a){return b.ma(a,b.j)};w=b.m.Kb;b.j[w]=b.m;b.j.fn={};b.j.fn[w]=b.j;b.b("dependentObservable",b.j);b.b("computed",b.j);b.b("isComputed",b.Bb);b.gb=function(a){0==arguments.length&&j(Error("When calling ko.toJS, pass the object you want to convert."));return ba(a,function(a){for(var c=0;b.$(a)&&10>c;c++)a=a();return a})};b.toJSON=function(a,d,c){a=b.gb(a);return b.a.xa(a,d,c)};b.b("toJS",b.gb);b.b("toJSON",b.toJSON);b.k={q:function(a){switch(b.a.u(a)){case "option":return a.__ko__hasDomDataOptionValue__===
m?b.a.f.get(a,b.c.options.sa):7>=b.a.Z?a.getAttributeNode("value").specified?a.value:a.text:a.value;case "select":return 0<=a.selectedIndex?b.k.q(a.options[a.selectedIndex]):I;default:return a.value}},T:function(a,d){switch(b.a.u(a)){case "option":switch(typeof d){case "string":b.a.f.set(a,b.c.options.sa,I);"__ko__hasDomDataOptionValue__"in a&&delete a.__ko__hasDomDataOptionValue__;a.value=d;break;default:b.a.f.set(a,b.c.options.sa,d),a.__ko__hasDomDataOptionValue__=m,a.value="number"===typeof d?
d:""}break;case "select":for(var c=a.options.length-1;0<=c;c--)if(b.k.q(a.options[c])==d){a.selectedIndex=c;break}break;default:if(d===p||d===I)d="";a.value=d}}};b.b("selectExtensions",b.k);b.b("selectExtensions.readValue",b.k.q);b.b("selectExtensions.writeValue",b.k.T);var ka=/\@ko_token_(\d+)\@/g,na=["true","false"],oa=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;b.g={Q:[],aa:function(a){var d=b.a.D(a);if(3>d.length)return[];"{"===d.charAt(0)&&(d=d.substring(1,d.length-1));a=[];for(var c=
p,e,f=0;f<d.length;f++){var g=d.charAt(f);if(c===p)switch(g){case '"':case "'":case "/":c=f,e=g}else if(g==e&&"\\"!==d.charAt(f-1)){g=d.substring(c,f+1);a.push(g);var h="@ko_token_"+(a.length-1)+"@",d=d.substring(0,c)+h+d.substring(f+1),f=f-(g.length-h.length),c=p}}e=c=p;for(var k=0,l=p,f=0;f<d.length;f++){g=d.charAt(f);if(c===p)switch(g){case "{":c=f;l=g;e="}";break;case "(":c=f;l=g;e=")";break;case "[":c=f,l=g,e="]"}g===l?k++:g===e&&(k--,0===k&&(g=d.substring(c,f+1),a.push(g),h="@ko_token_"+(a.length-
1)+"@",d=d.substring(0,c)+h+d.substring(f+1),f-=g.length-h.length,c=p))}e=[];d=d.split(",");c=0;for(f=d.length;c<f;c++)k=d[c],l=k.indexOf(":"),0<l&&l<k.length-1?(g=k.substring(l+1),e.push({key:P(k.substring(0,l),a),value:P(g,a)})):e.push({unknown:P(k,a)});return e},ba:function(a){var d="string"===typeof a?b.g.aa(a):a,c=[];a=[];for(var e,f=0;e=d[f];f++)if(0<c.length&&c.push(","),e.key){var g;a:{g=e.key;var h=b.a.D(g);switch(h.length&&h.charAt(0)){case "'":case '"':break a;default:g="'"+h+"'"}}e=e.value;
c.push(g);c.push(":");c.push(e);e=b.a.D(e);0<=b.a.i(na,b.a.D(e).toLowerCase())?e=r:(h=e.match(oa),e=h===p?r:h[1]?"Object("+h[1]+")"+h[2]:e);e&&(0<a.length&&a.push(", "),a.push(g+" : function(__ko_value) { "+e+" = __ko_value; }"))}else e.unknown&&c.push(e.unknown);d=c.join("");0<a.length&&(d=d+", '_ko_property_writers' : { "+a.join("")+" } ");return d},Eb:function(a,d){for(var c=0;c<a.length;c++)if(b.a.D(a[c].key)==d)return m;return r},ea:function(a,d,c,e,f){if(!a||!b.Ra(a)){if((a=d()._ko_property_writers)&&
a[c])a[c](e)}else(!f||a.t()!==e)&&a(e)}};b.b("expressionRewriting",b.g);b.b("expressionRewriting.bindingRewriteValidators",b.g.Q);b.b("expressionRewriting.parseObjectLiteral",b.g.aa);b.b("expressionRewriting.preProcessBindings",b.g.ba);b.b("jsonExpressionRewriting",b.g);b.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",b.g.ba);var K="\x3c!--test--\x3e"===y.createComment("test").text,ja=K?/^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/:/^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/,ia=K?/^\x3c!--\s*\/ko\s*--\x3e$/:
/^\s*\/ko\s*$/,pa={ul:m,ol:m};b.e={I:{},childNodes:function(a){return B(a)?aa(a):a.childNodes},Y:function(a){if(B(a)){a=b.e.childNodes(a);for(var d=0,c=a.length;d<c;d++)b.removeNode(a[d])}else b.a.ka(a)},N:function(a,d){if(B(a)){b.e.Y(a);for(var c=a.nextSibling,e=0,f=d.length;e<f;e++)c.parentNode.insertBefore(d[e],c)}else b.a.N(a,d)},Va:function(a,b){B(a)?a.parentNode.insertBefore(b,a.nextSibling):a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)},Pa:function(a,d,c){c?B(a)?a.parentNode.insertBefore(d,
c.nextSibling):c.nextSibling?a.insertBefore(d,c.nextSibling):a.appendChild(d):b.e.Va(a,d)},firstChild:function(a){return!B(a)?a.firstChild:!a.nextSibling||H(a.nextSibling)?p:a.nextSibling},nextSibling:function(a){B(a)&&(a=$(a));return a.nextSibling&&H(a.nextSibling)?p:a.nextSibling},jb:function(a){return(a=B(a))?a[1]:p},Ta:function(a){if(pa[b.a.u(a)]){var d=a.firstChild;if(d){do if(1===d.nodeType){var c;c=d.firstChild;var e=p;if(c){do if(e)e.push(c);else if(B(c)){var f=$(c,m);f?c=f:e=[c]}else H(c)&&
(e=[c]);while(c=c.nextSibling)}if(c=e){e=d.nextSibling;for(f=0;f<c.length;f++)e?a.insertBefore(c[f],e):a.appendChild(c[f])}}while(d=d.nextSibling)}}}};b.b("virtualElements",b.e);b.b("virtualElements.allowedBindings",b.e.I);b.b("virtualElements.emptyNode",b.e.Y);b.b("virtualElements.insertAfter",b.e.Pa);b.b("virtualElements.prepend",b.e.Va);b.b("virtualElements.setDomNodeChildren",b.e.N);b.J=function(){this.Ha={}};b.a.extend(b.J.prototype,{nodeHasBindings:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind")!=
p;case 8:return b.e.jb(a)!=p;default:return r}},getBindings:function(a,b){var c=this.getBindingsString(a,b);return c?this.parseBindingsString(c,b,a):p},getBindingsString:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind");case 8:return b.e.jb(a);default:return p}},parseBindingsString:function(a,d,c){try{var e;if(!(e=this.Ha[a])){var f=this.Ha,g,h="with($context){with($data||{}){return{"+b.g.ba(a)+"}}}";g=new Function("$context","$element",h);e=f[a]=g}return e(d,c)}catch(k){j(Error("Unable to parse bindings.\nMessage: "+
k+";\nBindings value: "+a))}}});b.J.instance=new b.J;b.b("bindingProvider",b.J);b.c={};b.z=function(a,d,c){d?(b.a.extend(this,d),this.$parentContext=d,this.$parent=d.$data,this.$parents=(d.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=[],this.$root=a,this.ko=b);this.$data=a;c&&(this[c]=a)};b.z.prototype.createChildContext=function(a,d){return new b.z(a,this,d)};b.z.prototype.extend=function(a){var d=b.a.extend(new b.z,this);return b.a.extend(d,a)};b.eb=function(a,d){if(2==
arguments.length)b.a.f.set(a,"__ko_bindingContext__",d);else return b.a.f.get(a,"__ko_bindingContext__")};b.Fa=function(a,d,c){1===a.nodeType&&b.e.Ta(a);return X(a,d,c,m)};b.Ea=function(a,b){(1===b.nodeType||8===b.nodeType)&&Z(a,b,m)};b.Da=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&j(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||x.document.body;Y(a,b,m)};b.ja=function(a){switch(a.nodeType){case 1:case 8:var d=b.eb(a);if(d)return d;
if(a.parentNode)return b.ja(a.parentNode)}return I};b.pb=function(a){return(a=b.ja(a))?a.$data:I};b.b("bindingHandlers",b.c);b.b("applyBindings",b.Da);b.b("applyBindingsToDescendants",b.Ea);b.b("applyBindingsToNode",b.Fa);b.b("contextFor",b.ja);b.b("dataFor",b.pb);var fa={"class":"className","for":"htmlFor"};b.c.attr={update:function(a,d){var c=b.a.d(d())||{},e;for(e in c)if("string"==typeof e){var f=b.a.d(c[e]),g=f===r||f===p||f===I;g&&a.removeAttribute(e);8>=b.a.Z&&e in fa?(e=fa[e],g?a.removeAttribute(e):
a[e]=f):g||a.setAttribute(e,f.toString());"name"===e&&b.a.ab(a,g?"":f.toString())}}};b.c.checked={init:function(a,d,c){b.a.n(a,"click",function(){var e;if("checkbox"==a.type)e=a.checked;else if("radio"==a.type&&a.checked)e=a.value;else return;var f=d(),g=b.a.d(f);"checkbox"==a.type&&g instanceof Array?(e=b.a.i(g,a.value),a.checked&&0>e?f.push(a.value):!a.checked&&0<=e&&f.splice(e,1)):b.g.ea(f,c,"checked",e,m)});"radio"==a.type&&!a.name&&b.c.uniqueName.init(a,u(m))},update:function(a,d){var c=b.a.d(d());
"checkbox"==a.type?a.checked=c instanceof Array?0<=b.a.i(c,a.value):c:"radio"==a.type&&(a.checked=a.value==c)}};b.c.css={update:function(a,d){var c=b.a.d(d());if("object"==typeof c)for(var e in c){var f=b.a.d(c[e]);b.a.da(a,e,f)}else c=String(c||""),b.a.da(a,a.__ko__cssValue,r),a.__ko__cssValue=c,b.a.da(a,c,m)}};b.c.enable={update:function(a,d){var c=b.a.d(d());c&&a.disabled?a.removeAttribute("disabled"):!c&&!a.disabled&&(a.disabled=m)}};b.c.disable={update:function(a,d){b.c.enable.update(a,function(){return!b.a.d(d())})}};
b.c.event={init:function(a,d,c,e){var f=d()||{},g;for(g in f)(function(){var f=g;"string"==typeof f&&b.a.n(a,f,function(a){var g,n=d()[f];if(n){var q=c();try{var s=b.a.L(arguments);s.unshift(e);g=n.apply(e,s)}finally{g!==m&&(a.preventDefault?a.preventDefault():a.returnValue=r)}q[f+"Bubble"]===r&&(a.cancelBubble=m,a.stopPropagation&&a.stopPropagation())}})})()}};b.c.foreach={Sa:function(a){return function(){var d=a(),c=b.a.ua(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:b.C.oa};
b.a.d(d);return{foreach:c.data,as:c.as,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:b.C.oa}}},init:function(a,d){return b.c.template.init(a,b.c.foreach.Sa(d))},update:function(a,d,c,e,f){return b.c.template.update(a,b.c.foreach.Sa(d),c,e,f)}};b.g.Q.foreach=r;b.e.I.foreach=m;b.c.hasfocus={init:function(a,d,c){function e(e){a.__ko_hasfocusUpdating=m;var f=a.ownerDocument;"activeElement"in
f&&(e=f.activeElement===a);f=d();b.g.ea(f,c,"hasfocus",e,m);a.__ko_hasfocusUpdating=r}var f=e.bind(p,m),g=e.bind(p,r);b.a.n(a,"focus",f);b.a.n(a,"focusin",f);b.a.n(a,"blur",g);b.a.n(a,"focusout",g)},update:function(a,d){var c=b.a.d(d());a.__ko_hasfocusUpdating||(c?a.focus():a.blur(),b.r.K(b.a.Ba,p,[a,c?"focusin":"focusout"]))}};b.c.html={init:function(){return{controlsDescendantBindings:m}},update:function(a,d){b.a.ca(a,d())}};var da="__ko_withIfBindingData";Q("if");Q("ifnot",r,m);Q("with",m,r,function(a,
b){return a.createChildContext(b)});b.c.options={update:function(a,d,c){"select"!==b.a.u(a)&&j(Error("options binding applies only to SELECT elements"));for(var e=0==a.length,f=b.a.V(b.a.fa(a.childNodes,function(a){return a.tagName&&"option"===b.a.u(a)&&a.selected}),function(a){return b.k.q(a)||a.innerText||a.textContent}),g=a.scrollTop,h=b.a.d(d());0<a.length;)b.A(a.options[0]),a.remove(0);if(h){c=c();var k=c.optionsIncludeDestroyed;"number"!=typeof h.length&&(h=[h]);if(c.optionsCaption){var l=y.createElement("option");
b.a.ca(l,c.optionsCaption);b.k.T(l,I);a.appendChild(l)}d=0;for(var n=h.length;d<n;d++){var q=h[d];if(!q||!q._destroy||k){var l=y.createElement("option"),s=function(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c},v=s(q,c.optionsValue,q);b.k.T(l,b.a.d(v));q=s(q,c.optionsText,v);b.a.cb(l,q);a.appendChild(l)}}h=a.getElementsByTagName("option");d=k=0;for(n=h.length;d<n;d++)0<=b.a.i(f,b.k.q(h[d]))&&(b.a.bb(h[d],m),k++);a.scrollTop=g;e&&"value"in c&&ea(a,b.a.ua(c.value),m);b.a.ub(a)}}};
b.c.options.sa="__ko.optionValueDomData__";b.c.selectedOptions={init:function(a,d,c){b.a.n(a,"change",function(){var e=d(),f=[];b.a.o(a.getElementsByTagName("option"),function(a){a.selected&&f.push(b.k.q(a))});b.g.ea(e,c,"value",f)})},update:function(a,d){"select"!=b.a.u(a)&&j(Error("values binding applies only to SELECT elements"));var c=b.a.d(d());c&&"number"==typeof c.length&&b.a.o(a.getElementsByTagName("option"),function(a){var d=0<=b.a.i(c,b.k.q(a));b.a.bb(a,d)})}};b.c.style={update:function(a,
d){var c=b.a.d(d()||{}),e;for(e in c)if("string"==typeof e){var f=b.a.d(c[e]);a.style[e]=f||""}}};b.c.submit={init:function(a,d,c,e){"function"!=typeof d()&&j(Error("The value for a submit binding must be a function"));b.a.n(a,"submit",function(b){var c,h=d();try{c=h.call(e,a)}finally{c!==m&&(b.preventDefault?b.preventDefault():b.returnValue=r)}})}};b.c.text={update:function(a,d){b.a.cb(a,d())}};b.e.I.text=m;b.c.uniqueName={init:function(a,d){if(d()){var c="ko_unique_"+ ++b.c.uniqueName.ob;b.a.ab(a,
c)}}};b.c.uniqueName.ob=0;b.c.value={init:function(a,d,c){function e(){h=r;var e=d(),f=b.k.q(a);b.g.ea(e,c,"value",f)}var f=["change"],g=c().valueUpdate,h=r;g&&("string"==typeof g&&(g=[g]),b.a.P(f,g),f=b.a.Ga(f));if(b.a.Z&&("input"==a.tagName.toLowerCase()&&"text"==a.type&&"off"!=a.autocomplete&&(!a.form||"off"!=a.form.autocomplete))&&-1==b.a.i(f,"propertychange"))b.a.n(a,"propertychange",function(){h=m}),b.a.n(a,"blur",function(){h&&e()});b.a.o(f,function(c){var d=e;b.a.Ob(c,"after")&&(d=function(){setTimeout(e,
0)},c=c.substring(5));b.a.n(a,c,d)})},update:function(a,d){var c="select"===b.a.u(a),e=b.a.d(d()),f=b.k.q(a),g=e!=f;0===e&&(0!==f&&"0"!==f)&&(g=m);g&&(f=function(){b.k.T(a,e)},f(),c&&setTimeout(f,0));c&&0<a.length&&ea(a,e,r)}};b.c.visible={update:function(a,d){var c=b.a.d(d()),e="none"!=a.style.display;c&&!e?a.style.display="":!c&&e&&(a.style.display="none")}};b.c.click={init:function(a,d,c,e){return b.c.event.init.call(this,a,function(){var a={};a.click=d();return a},c,e)}};b.v=function(){};b.v.prototype.renderTemplateSource=
function(){j(Error("Override renderTemplateSource"))};b.v.prototype.createJavaScriptEvaluatorBlock=function(){j(Error("Override createJavaScriptEvaluatorBlock"))};b.v.prototype.makeTemplateSource=function(a,d){if("string"==typeof a){d=d||y;var c=d.getElementById(a);c||j(Error("Cannot find template with ID "+a));return new b.l.h(c)}if(1==a.nodeType||8==a.nodeType)return new b.l.O(a);j(Error("Unknown template type: "+a))};b.v.prototype.renderTemplate=function(a,b,c,e){a=this.makeTemplateSource(a,e);
return this.renderTemplateSource(a,b,c)};b.v.prototype.isTemplateRewritten=function(a,b){return this.allowTemplateRewriting===r?m:this.makeTemplateSource(a,b).data("isRewritten")};b.v.prototype.rewriteTemplate=function(a,b,c){a=this.makeTemplateSource(a,c);b=b(a.text());a.text(b);a.data("isRewritten",m)};b.b("templateEngine",b.v);var qa=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,ra=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;b.za={vb:function(a,
d,c){d.isTemplateRewritten(a,c)||d.rewriteTemplate(a,function(a){return b.za.Gb(a,d)},c)},Gb:function(a,b){return a.replace(qa,function(a,e,f,g,h,k,l){return W(l,e,b)}).replace(ra,function(a,e){return W(e,"\x3c!-- ko --\x3e",b)})},kb:function(a){return b.s.ra(function(d,c){d.nextSibling&&b.Fa(d.nextSibling,a,c)})}};b.b("__tr_ambtns",b.za.kb);b.l={};b.l.h=function(a){this.h=a};b.l.h.prototype.text=function(){var a=b.a.u(this.h),a="script"===a?"text":"textarea"===a?"value":"innerHTML";if(0==arguments.length)return this.h[a];
var d=arguments[0];"innerHTML"===a?b.a.ca(this.h,d):this.h[a]=d};b.l.h.prototype.data=function(a){if(1===arguments.length)return b.a.f.get(this.h,"templateSourceData_"+a);b.a.f.set(this.h,"templateSourceData_"+a,arguments[1])};b.l.O=function(a){this.h=a};b.l.O.prototype=new b.l.h;b.l.O.prototype.text=function(){if(0==arguments.length){var a=b.a.f.get(this.h,"__ko_anon_template__")||{};a.Aa===I&&a.ia&&(a.Aa=a.ia.innerHTML);return a.Aa}b.a.f.set(this.h,"__ko_anon_template__",{Aa:arguments[0]})};b.l.h.prototype.nodes=
function(){if(0==arguments.length)return(b.a.f.get(this.h,"__ko_anon_template__")||{}).ia;b.a.f.set(this.h,"__ko_anon_template__",{ia:arguments[0]})};b.b("templateSources",b.l);b.b("templateSources.domElement",b.l.h);b.b("templateSources.anonymousTemplate",b.l.O);var O;b.wa=function(a){a!=I&&!(a instanceof b.v)&&j(Error("templateEngine must inherit from ko.templateEngine"));O=a};b.va=function(a,d,c,e,f){c=c||{};(c.templateEngine||O)==I&&j(Error("Set a template engine before calling renderTemplate"));
f=f||"replaceChildren";if(e){var g=N(e);return b.j(function(){var h=d&&d instanceof b.z?d:new b.z(b.a.d(d)),k="function"==typeof a?a(h.$data,h):a,h=T(e,f,k,h,c);"replaceNode"==f&&(e=h,g=N(e))},p,{Ka:function(){return!g||!b.a.X(g)},W:g&&"replaceNode"==f?g.parentNode:g})}return b.s.ra(function(e){b.va(a,d,c,e,"replaceNode")})};b.Mb=function(a,d,c,e,f){function g(a,b){U(b,k);c.afterRender&&c.afterRender(b,a)}function h(d,e){k=f.createChildContext(b.a.d(d),c.as);k.$index=e;var g="function"==typeof a?
a(d,k):a;return T(p,"ignoreTargetNode",g,k,c)}var k;return b.j(function(){var a=b.a.d(d)||[];"undefined"==typeof a.length&&(a=[a]);a=b.a.fa(a,function(a){return c.includeDestroyed||a===I||a===p||!b.a.d(a._destroy)});b.r.K(b.a.$a,p,[e,a,h,c,g])},p,{W:e})};b.c.template={init:function(a,d){var c=b.a.d(d());if("string"!=typeof c&&!c.name&&(1==a.nodeType||8==a.nodeType))c=1==a.nodeType?a.childNodes:b.e.childNodes(a),c=b.a.Hb(c),(new b.l.O(a)).nodes(c);return{controlsDescendantBindings:m}},update:function(a,
d,c,e,f){d=b.a.d(d());c={};e=m;var g,h=p;"string"!=typeof d&&(c=d,d=c.name,"if"in c&&(e=b.a.d(c["if"])),e&&"ifnot"in c&&(e=!b.a.d(c.ifnot)),g=b.a.d(c.data));"foreach"in c?h=b.Mb(d||a,e&&c.foreach||[],c,a,f):e?(f="data"in c?f.createChildContext(g,c.as):f,h=b.va(d||a,f,c,a)):b.e.Y(a);f=h;(g=b.a.f.get(a,"__ko__templateComputedDomDataKey__"))&&"function"==typeof g.B&&g.B();b.a.f.set(a,"__ko__templateComputedDomDataKey__",f&&f.pa()?f:I)}};b.g.Q.template=function(a){a=b.g.aa(a);return 1==a.length&&a[0].unknown||
b.g.Eb(a,"name")?p:"This template engine does not support anonymous templates nested within its templates"};b.e.I.template=m;b.b("setTemplateEngine",b.wa);b.b("renderTemplate",b.va);b.a.Ja=function(a,b,c){a=a||[];b=b||[];return a.length<=b.length?S(a,b,"added","deleted",c):S(b,a,"deleted","added",c)};b.b("utils.compareArrays",b.a.Ja);b.a.$a=function(a,d,c,e,f){function g(a,b){t=l[b];w!==b&&(z[a]=t);t.na(w++);M(t.M);s.push(t);A.push(t)}function h(a,c){if(a)for(var d=0,e=c.length;d<e;d++)c[d]&&b.a.o(c[d].M,
function(b){a(b,d,c[d].U)})}d=d||[];e=e||{};var k=b.a.f.get(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===I,l=b.a.f.get(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],n=b.a.V(l,function(a){return a.U}),q=b.a.Ja(n,d),s=[],v=0,w=0,B=[],A=[];d=[];for(var z=[],n=[],t,D=0,C,E;C=q[D];D++)switch(E=C.moved,C.status){case "deleted":E===I&&(t=l[v],t.j&&t.j.B(),B.push.apply(B,M(t.M)),e.beforeRemove&&(d[D]=t,A.push(t)));v++;break;case "retained":g(D,v++);break;case "added":E!==I?
g(D,E):(t={U:C.value,na:b.m(w++)},s.push(t),A.push(t),k||(n[D]=t))}h(e.beforeMove,z);b.a.o(B,e.beforeRemove?b.A:b.removeNode);for(var D=0,k=b.e.firstChild(a),H;t=A[D];D++){t.M||b.a.extend(t,ha(a,c,t.U,f,t.na));for(v=0;q=t.M[v];k=q.nextSibling,H=q,v++)q!==k&&b.e.Pa(a,q,H);!t.Ab&&f&&(f(t.U,t.M,t.na),t.Ab=m)}h(e.beforeRemove,d);h(e.afterMove,z);h(e.afterAdd,n);b.a.f.set(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult",s)};b.b("utils.setDomNodeChildrenFromArrayMapping",b.a.$a);b.C=function(){this.allowTemplateRewriting=
r};b.C.prototype=new b.v;b.C.prototype.renderTemplateSource=function(a){var d=!(9>b.a.Z)&&a.nodes?a.nodes():p;if(d)return b.a.L(d.cloneNode(m).childNodes);a=a.text();return b.a.ta(a)};b.C.oa=new b.C;b.wa(b.C.oa);b.b("nativeTemplateEngine",b.C);b.qa=function(){var a=this.Db=function(){if("undefined"==typeof F||!F.tmpl)return 0;try{if(0<=F.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,c,e){e=e||{};2>a&&j(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));
var f=b.data("precompiled");f||(f=b.text()||"",f=F.template(p,"{{ko_with $item.koBindingContext}}"+f+"{{/ko_with}}"),b.data("precompiled",f));b=[c.$data];c=F.extend({koBindingContext:c},e.templateOptions);c=F.tmpl(f,b,c);c.appendTo(y.createElement("div"));F.fragments={};return c};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){y.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(F.tmpl.tag.ko_code=
{open:"__.push($1 || '');"},F.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};b.qa.prototype=new b.v;w=new b.qa;0<w.Db&&b.wa(w);b.b("jqueryTmplTemplateEngine",b.qa)}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?L(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],L):L(x.ko={});m;
})();

},{}],2:[function(require,module,exports){
var ko = require('knockout-client'),
	datejs = require('datejs'),
	_ = require('underscore');
ko.mapping = require('knockout-mapping');

function ViewModel(wtfHistory) {
	this.wtfHistory = ko.observableArray(wtfHistory);
	
	this.wtfCount = ko.computed(function() {
		return this.wtfHistory().length;
	}, this);
	
	this.lastWtf = ko.computed(function() {
	 	return _.last(this.wtfHistory());
 	}, this);
	
	this.lastWtfText = ko.computed(function() {
		var lastWtf = this.lastWtf();
		if (lastWtf)
			return formatDate(lastWtf.date);
		return 'never';
	}, this);

	this.todaysWtfs = ko.computed(function() {
		return this.wtfHistory().map(mapDate).filter(isToday);
	}, this);

	this.past24 = ko.computed(function() {
		return this.wtfHistory().map(mapDate).filter(isPast24);
	}, this);

	this.todayWtfCount = ko.computed(function() {
		return this.todaysWtfs().length;
	}, this);

	this.hourlyWtfs = ko.computed(function() {
		var grouped = _.groupBy(this.past24(), mapHour);
		var hourly = [];
		var i, m;
		var offset = new Date().getHours();
		for (i = 0; i < 24; i++) {
			hour = (i + offset + 1) % 24;
			hourly[i] = { hour: hour, wtfs: grouped['' + hour] || [] };
		}
		console.log(hourly);
		return hourly;
	}, this);

	ko.computed(function() {
		var history = JSON.stringify(this.wtfHistory());
		localStorage.setItem('wtfHistory', history);
	}, this).extend({throttle: 1});
}

ViewModel.prototype.wtf = function() {
	date = new Date();
	this.wtfHistory.push({ date: date });
}

ViewModel.prototype.reset = function() {
	this.wtfHistory.removeAll();
}

function mapHour(date) {
	return date.getHours();
}

function mapDate(item) {
	return item.date;
}

function isToday(date) {
	return date.between(Date.today(), Date.parse('tomorrow'));
}

function isPast24(date) {
	return date.compareTo(new Date().add(-1).days()) === 1;
}

function fixDate(key, value){
	return (key === 'date') ? new Date(value) : value;
}

function formatDate(date) {
	return date.toString('ddd, MMM dd, yyyy h:mm:ss tt');
}

var storedHistory = localStorage.getItem('wtfHistory');
var wtfHistory = JSON.parse(storedHistory, fixDate) || [];
var vm = new ViewModel(wtfHistory);

module.exports = vm;
},{"knockout-client":3,"datejs":4,"underscore":5,"knockout-mapping":6}],7:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],4:[function(require,module,exports){
(function(process){/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
$P._toString=$P.toString;$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());

})(require("__browserify_process"))
},{"__browserify_process":7}],5:[function(require,module,exports){
(function(){//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.4.4';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? null : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value || _.identity);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] == null) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(n);
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);

})()
},{}],6:[function(require,module,exports){
(function(){/// Knockout Mapping plugin v2.3.2
/// (c) 2012 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function (factory) {
	// Module systems magic dance.

	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory(require("knockout-client"), exports);
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout", "exports"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `mapping` property
		factory(ko, ko.mapping = {});
	}
}(function (ko, exports) {
	var DEBUG=true;
	var mappingProperty = "__ko_mapping__";
	var realKoDependentObservable = ko.dependentObservable;
	var mappingNesting = 0;
	var dependentObservables;
	var visitedObjects;
	var recognizedRootProperties = ["create", "update", "key", "arrayChanged"];
	var emptyReturn = {};

	var _defaultOptions = {
		include: ["_destroy"],
		ignore: [],
		copy: []
	};
	var defaultOptions = _defaultOptions;

	// Author: KennyTM @ StackOverflow
	function unionArrays (x, y) {
		var obj = {};
		for (var i = x.length - 1; i >= 0; -- i) obj[x[i]] = x[i];
		for (var i = y.length - 1; i >= 0; -- i) obj[y[i]] = y[i];
		var res = [];

		for (var k in obj) {
			res.push(obj[k]);
		};

		return res;
	}

	function extendObject(destination, source) {
		for (var key in source) {
			if (source.hasOwnProperty(key) && source[key]) {
				if (key && destination[key] && !(exports.getType(destination[key]) === "array")) {
					extendObject(destination[key], source[key]);
				} else {
					var bothArrays = exports.getType(destination[key]) === "array" && exports.getType(source[key]) === "array";
					if (bothArrays) {
						destination[key] = unionArrays(destination[key], source[key]);
					} else {
						destination[key] = source[key];
					}
				}
			}
		}
	}

	function merge(obj1, obj2) {
		var merged = {};
		extendObject(merged, obj1);
		extendObject(merged, obj2);

		return merged;
	}

	exports.isMapped = function (viewModel) {
		var unwrapped = ko.utils.unwrapObservable(viewModel);
		return unwrapped && unwrapped[mappingProperty];
	}

	exports.fromJS = function (jsObject /*, inputOptions, target*/ ) {
		if (arguments.length == 0) throw new Error("When calling ko.fromJS, pass the object you want to convert.");

		// When mapping is completed, even with an exception, reset the nesting level
		window.setTimeout(function () {
			mappingNesting = 0;
		}, 0);

		if (!mappingNesting++) {
			dependentObservables = [];
			visitedObjects = new objectLookup();
		}

		var options;
		var target;

		if (arguments.length == 2) {
			if (arguments[1][mappingProperty]) {
				target = arguments[1];
			} else {
				options = arguments[1];
			}
		}
		if (arguments.length == 3) {
			options = arguments[1];
			target = arguments[2];
		}

		if (target) {
			options = merge(options, target[mappingProperty]);
		}
		options = fillOptions(options);

		var result = updateViewModel(target, jsObject, options);
		if (target) {
			result = target;
		}

		// Evaluate any dependent observables that were proxied.
		// Do this in a timeout to defer execution. Basically, any user code that explicitly looks up the DO will perform the first evaluation. Otherwise,
		// it will be done by this code.
		if (!--mappingNesting) {
			window.setTimeout(function () {
				while (dependentObservables.length) {
					var DO = dependentObservables.pop();
					if (DO) DO();
				}
			}, 0);
		}

		// Save any new mapping options in the view model, so that updateFromJS can use them later.
		result[mappingProperty] = merge(result[mappingProperty], options);

		return result;
	};

	exports.fromJSON = function (jsonString /*, options, target*/ ) {
		var parsed = ko.utils.parseJson(jsonString);
		arguments[0] = parsed;
		return exports.fromJS.apply(this, arguments);
	};

	exports.updateFromJS = function (viewModel) {
		throw new Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
	};

	exports.updateFromJSON = function (viewModel) {
		throw new Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
	};

	exports.toJS = function (rootObject, options) {
		if (!defaultOptions) exports.resetDefaultOptions();

		if (arguments.length == 0) throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
		if (exports.getType(defaultOptions.ignore) !== "array") throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
		if (exports.getType(defaultOptions.include) !== "array") throw new Error("ko.mapping.defaultOptions().include should be an array.");
		if (exports.getType(defaultOptions.copy) !== "array") throw new Error("ko.mapping.defaultOptions().copy should be an array.");

		// Merge in the options used in fromJS
		options = fillOptions(options, rootObject[mappingProperty]);

		// We just unwrap everything at every level in the object graph
		return exports.visitModel(rootObject, function (x) {
			return ko.utils.unwrapObservable(x)
		}, options);
	};

	exports.toJSON = function (rootObject, options) {
		var plainJavaScriptObject = exports.toJS(rootObject, options);
		return ko.utils.stringifyJson(plainJavaScriptObject);
	};

	exports.defaultOptions = function () {
		if (arguments.length > 0) {
			defaultOptions = arguments[0];
		} else {
			return defaultOptions;
		}
	};

	exports.resetDefaultOptions = function () {
		defaultOptions = {
			include: _defaultOptions.include.slice(0),
			ignore: _defaultOptions.ignore.slice(0),
			copy: _defaultOptions.copy.slice(0)
		};
	};

	exports.getType = function(x) {
		if ((x) && (typeof (x) === "object")) {
			if (x.constructor == (new Date).constructor) return "date";
			if (Object.prototype.toString.call(x) === "[object Array]") return "array";
		}
		return typeof x;
	}

	function fillOptions(rawOptions, otherOptions) {
		var options = merge({}, rawOptions);

		// Move recognized root-level properties into a root namespace
		for (var i = recognizedRootProperties.length - 1; i >= 0; i--) {
			var property = recognizedRootProperties[i];
			
			// Carry on, unless this property is present
			if (!options[property]) continue;
			
			// Move the property into the root namespace
			if (!(options[""] instanceof Object)) options[""] = {};
			options[""][property] = options[property];
			delete options[property];
		}

		if (otherOptions) {
			options.ignore = mergeArrays(otherOptions.ignore, options.ignore);
			options.include = mergeArrays(otherOptions.include, options.include);
			options.copy = mergeArrays(otherOptions.copy, options.copy);
		}
		options.ignore = mergeArrays(options.ignore, defaultOptions.ignore);
		options.include = mergeArrays(options.include, defaultOptions.include);
		options.copy = mergeArrays(options.copy, defaultOptions.copy);

		options.mappedProperties = options.mappedProperties || {};
		return options;
	}

	function mergeArrays(a, b) {
		if (exports.getType(a) !== "array") {
			if (exports.getType(a) === "undefined") a = [];
			else a = [a];
		}
		if (exports.getType(b) !== "array") {
			if (exports.getType(b) === "undefined") b = [];
			else b = [b];
		}

		return ko.utils.arrayGetDistinctValues(a.concat(b));
	}

	// When using a 'create' callback, we proxy the dependent observable so that it doesn't immediately evaluate on creation.
	// The reason is that the dependent observables in the user-specified callback may contain references to properties that have not been mapped yet.
	function withProxyDependentObservable(dependentObservables, callback) {
		var localDO = ko.dependentObservable;
		ko.dependentObservable = function (read, owner, options) {
			options = options || {};

			if (read && typeof read == "object") { // mirrors condition in knockout implementation of DO's
				options = read;
			}

			var realDeferEvaluation = options.deferEvaluation;

			var isRemoved = false;

			// We wrap the original dependent observable so that we can remove it from the 'dependentObservables' list we need to evaluate after mapping has
			// completed if the user already evaluated the DO themselves in the meantime.
			var wrap = function (DO) {
				// Temporarily revert ko.dependentObservable, since it is used in ko.isWriteableObservable
				var tmp = ko.dependentObservable;
				ko.dependentObservable = realKoDependentObservable;
				var isWriteable = ko.isWriteableObservable(DO);
				ko.dependentObservable = tmp;

				var wrapped = realKoDependentObservable({
					read: function () {
						if (!isRemoved) {
							ko.utils.arrayRemoveItem(dependentObservables, DO);
							isRemoved = true;
						}
						return DO.apply(DO, arguments);
					},
					write: isWriteable && function (val) {
						return DO(val);
					},
					deferEvaluation: true
				});
				if (DEBUG) wrapped._wrapper = true;
				return wrapped;
			};
			
			options.deferEvaluation = true; // will either set for just options, or both read/options.
			var realDependentObservable = new realKoDependentObservable(read, owner, options);

			if (!realDeferEvaluation) {
				realDependentObservable = wrap(realDependentObservable);
				dependentObservables.push(realDependentObservable);
			}

			return realDependentObservable;
		}
		ko.dependentObservable.fn = realKoDependentObservable.fn;
		ko.computed = ko.dependentObservable;
		var result = callback();
		ko.dependentObservable = localDO;
		ko.computed = ko.dependentObservable;
		return result;
	}

	function updateViewModel(mappedRootObject, rootObject, options, parentName, parent, parentPropertyName, mappedParent) {
		var isArray = exports.getType(ko.utils.unwrapObservable(rootObject)) === "array";

		parentPropertyName = parentPropertyName || "";

		// If this object was already mapped previously, take the options from there and merge them with our existing ones.
		if (exports.isMapped(mappedRootObject)) {
			var previousMapping = ko.utils.unwrapObservable(mappedRootObject)[mappingProperty];
			options = merge(previousMapping, options);
		}

		var callbackParams = {
			data: rootObject,
			parent: mappedParent
		};

		var hasCreateCallback = function () {
			return options[parentName] && options[parentName].create instanceof Function;
		};

		var createCallback = function (data) {
			return withProxyDependentObservable(dependentObservables, function () {
				
				if (ko.utils.unwrapObservable(parent) instanceof Array) {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent,
						skip: emptyReturn
					});
				} else {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent
					});
				}				
			});
		};

		var hasUpdateCallback = function () {
			return options[parentName] && options[parentName].update instanceof Function;
		};

		var updateCallback = function (obj, data) {
			var params = {
				data: data || callbackParams.data,
				parent: callbackParams.parent,
				target: ko.utils.unwrapObservable(obj)
			};

			if (ko.isWriteableObservable(obj)) {
				params.observable = obj;
			}

			return options[parentName].update(params);
		}

		var alreadyMapped = visitedObjects.get(rootObject);
		if (alreadyMapped) {
			return alreadyMapped;
		}

		parentName = parentName || "";

		if (!isArray) {
			// For atomic types, do a direct update on the observable
			if (!canHaveProperties(rootObject)) {
				switch (exports.getType(rootObject)) {
				case "function":
					if (hasUpdateCallback()) {
						if (ko.isWriteableObservable(rootObject)) {
							rootObject(updateCallback(rootObject));
							mappedRootObject = rootObject;
						} else {
							mappedRootObject = updateCallback(rootObject);
						}
					} else {
						mappedRootObject = rootObject;
					}
					break;
				default:
					if (ko.isWriteableObservable(mappedRootObject)) {
						if (hasUpdateCallback()) {
							var valueToWrite = updateCallback(mappedRootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						} else {
							var valueToWrite = ko.utils.unwrapObservable(rootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						}
					} else {
						if (hasCreateCallback()) {
							mappedRootObject = createCallback();
							return mappedRootObject;
						} else {
							mappedRootObject = ko.observable(ko.utils.unwrapObservable(rootObject));
							return mappedRootObject;
						}

						if (hasUpdateCallback()) {
							mappedRootObject(updateCallback(mappedRootObject));
							return mappedRootObject;
						}
					}
				}

			} else {
				mappedRootObject = ko.utils.unwrapObservable(mappedRootObject);
				if (!mappedRootObject) {
					if (hasCreateCallback()) {
						var result = createCallback();

						if (hasUpdateCallback()) {
							result = updateCallback(result);
						}

						return result;
					} else {
						if (hasUpdateCallback()) {
							return updateCallback(result);
						}

						mappedRootObject = {};
					}
				}

				if (hasUpdateCallback()) {
					mappedRootObject = updateCallback(mappedRootObject);
				}

				visitedObjects.save(rootObject, mappedRootObject);
				if (hasUpdateCallback()) return mappedRootObject;

				// For non-atomic types, visit all properties and update recursively
				visitPropertiesOrArrayEntries(rootObject, function (indexer) {
					var fullPropertyName = parentPropertyName.length ? parentPropertyName + "." + indexer : indexer;

					if (ko.utils.arrayIndexOf(options.ignore, fullPropertyName) != -1) {
						return;
					}

					if (ko.utils.arrayIndexOf(options.copy, fullPropertyName) != -1) {
						mappedRootObject[indexer] = rootObject[indexer];
						return;
					}

					// In case we are adding an already mapped property, fill it with the previously mapped property value to prevent recursion.
					// If this is a property that was generated by fromJS, we should use the options specified there
					var prevMappedProperty = visitedObjects.get(rootObject[indexer]);
					var retval = updateViewModel(mappedRootObject[indexer], rootObject[indexer], options, indexer, mappedRootObject, fullPropertyName, mappedRootObject);
					var value = prevMappedProperty || retval;

					if (ko.isWriteableObservable(mappedRootObject[indexer])) {
						mappedRootObject[indexer](ko.utils.unwrapObservable(value));
					} else {
						mappedRootObject[indexer] = value;
					}

					options.mappedProperties[fullPropertyName] = true;
				});
			}
		} else { //mappedRootObject is an array
			var changes = [];

			var hasKeyCallback = false;
			var keyCallback = function (x) {
				return x;
			}
			if (options[parentName] && options[parentName].key) {
				keyCallback = options[parentName].key;
				hasKeyCallback = true;
			}

			if (!ko.isObservable(mappedRootObject)) {
				// When creating the new observable array, also add a bunch of utility functions that take the 'key' of the array items into account.
				mappedRootObject = ko.observableArray([]);

				mappedRootObject.mappedRemove = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.remove(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedRemoveAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.remove(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedDestroy = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.destroy(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedDestroyAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.destroy(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedIndexOf = function (item) {
					var keys = filterArrayByKey(mappedRootObject(), keyCallback);
					var key = keyCallback(item);
					return ko.utils.arrayIndexOf(keys, key);
				}

				mappedRootObject.mappedCreate = function (value) {
					if (mappedRootObject.mappedIndexOf(value) !== -1) {
						throw new Error("There already is an object with the key that you specified.");
					}

					var item = hasCreateCallback() ? createCallback(value) : value;
					if (hasUpdateCallback()) {
						var newValue = updateCallback(item, value);
						if (ko.isWriteableObservable(item)) {
							item(newValue);
						} else {
							item = newValue;
						}
					}
					mappedRootObject.push(item);
					return item;
				}
			}

			var currentArrayKeys = filterArrayByKey(ko.utils.unwrapObservable(mappedRootObject), keyCallback).sort();
			var newArrayKeys = filterArrayByKey(rootObject, keyCallback);
			if (hasKeyCallback) newArrayKeys.sort();
			var editScript = ko.utils.compareArrays(currentArrayKeys, newArrayKeys);

			var ignoreIndexOf = {};
			
			var i, j;

			var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);
			var itemsByKey = {};
			var optimizedKeys = true;
			for (i = 0, j = unwrappedRootObject.length; i < j; i++) {
				var key = keyCallback(unwrappedRootObject[i]);
				if (key === undefined || key instanceof Object) {
					optimizedKeys = false;
					break;
				}
				itemsByKey[key] = unwrappedRootObject[i];
			}

			var newContents = [];
			var passedOver = 0;
			for (i = 0, j = editScript.length; i < j; i++) {
				var key = editScript[i];
				var mappedItem;
				var fullPropertyName = parentPropertyName + "[" + i + "]";
				switch (key.status) {
				case "added":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = updateViewModel(undefined, item, options, parentName, mappedRootObject, fullPropertyName, parent);
					if(!hasCreateCallback()) {
						mappedItem = ko.utils.unwrapObservable(mappedItem);
					}

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					
					if (mappedItem === emptyReturn) {
						passedOver++;
					} else {
						newContents[index - passedOver] = mappedItem;
					}
						
					ignoreIndexOf[index] = true;
					break;
				case "retained":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					updateViewModel(mappedItem, item, options, parentName, mappedRootObject, fullPropertyName, parent);

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					newContents[index] = mappedItem;
					ignoreIndexOf[index] = true;
					break;
				case "deleted":
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					break;
				}

				changes.push({
					event: key.status,
					item: mappedItem
				});
			}

			mappedRootObject(newContents);

			if (options[parentName] && options[parentName].arrayChanged) {
				ko.utils.arrayForEach(changes, function (change) {
					options[parentName].arrayChanged(change.event, change.item);
				});
			}
		}

		return mappedRootObject;
	}

	function ignorableIndexOf(array, item, ignoreIndices) {
		for (var i = 0, j = array.length; i < j; i++) {
			if (ignoreIndices[i] === true) continue;
			if (array[i] === item) return i;
		}
		return null;
	}

	function mapKey(item, callback) {
		var mappedItem;
		if (callback) mappedItem = callback(item);
		if (exports.getType(mappedItem) === "undefined") mappedItem = item;

		return ko.utils.unwrapObservable(mappedItem);
	}

	function getItemByKey(array, key, callback) {
		array = ko.utils.unwrapObservable(array);
		for (var i = 0, j = array.length; i < j; i++) {
			var item = array[i];
			if (mapKey(item, callback) === key) return item;
		}

		throw new Error("When calling ko.update*, the key '" + key + "' was not found!");
	}

	function filterArrayByKey(array, callback) {
		return ko.utils.arrayMap(ko.utils.unwrapObservable(array), function (item) {
			if (callback) {
				return mapKey(item, callback);
			} else {
				return item;
			}
		});
	}

	function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
		if (exports.getType(rootObject) === "array") {
			for (var i = 0; i < rootObject.length; i++)
			visitorCallback(i);
		} else {
			for (var propertyName in rootObject)
			visitorCallback(propertyName);
		}
	};

	function canHaveProperties(object) {
		var type = exports.getType(object);
		return ((type === "object") || (type === "array")) && (object !== null);
	}

	// Based on the parentName, this creates a fully classified name of a property

	function getPropertyName(parentName, parent, indexer) {
		var propertyName = parentName || "";
		if (exports.getType(parent) === "array") {
			if (parentName) {
				propertyName += "[" + indexer + "]";
			}
		} else {
			if (parentName) {
				propertyName += ".";
			}
			propertyName += indexer;
		}
		return propertyName;
	}

	exports.visitModel = function (rootObject, callback, options) {
		options = options || {};
		options.visitedObjects = options.visitedObjects || new objectLookup();

		var mappedRootObject;
		var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);

		if (!canHaveProperties(unwrappedRootObject)) {
			return callback(rootObject, options.parentName);
		} else {
			options = fillOptions(options, unwrappedRootObject[mappingProperty]);

			// Only do a callback, but ignore the results
			callback(rootObject, options.parentName);
			mappedRootObject = exports.getType(unwrappedRootObject) === "array" ? [] : {};
		}

		options.visitedObjects.save(rootObject, mappedRootObject);

		var parentName = options.parentName;
		visitPropertiesOrArrayEntries(unwrappedRootObject, function (indexer) {
			if (options.ignore && ko.utils.arrayIndexOf(options.ignore, indexer) != -1) return;

			var propertyValue = unwrappedRootObject[indexer];
			options.parentName = getPropertyName(parentName, unwrappedRootObject, indexer);

			// If we don't want to explicitly copy the unmapped property...
			if (ko.utils.arrayIndexOf(options.copy, indexer) === -1) {
				// ...find out if it's a property we want to explicitly include
				if (ko.utils.arrayIndexOf(options.include, indexer) === -1) {
					// The mapped properties object contains all the properties that were part of the original object.
					// If a property does not exist, and it is not because it is part of an array (e.g. "myProp[3]"), then it should not be unmapped.
					if (unwrappedRootObject[mappingProperty] && unwrappedRootObject[mappingProperty].mappedProperties && !unwrappedRootObject[mappingProperty].mappedProperties[indexer] && !(exports.getType(unwrappedRootObject) === "array")) {
						return;
					}
				}
			}

			var outputProperty;
			switch (exports.getType(ko.utils.unwrapObservable(propertyValue))) {
			case "object":
			case "array":
			case "undefined":
				var previouslyMappedValue = options.visitedObjects.get(propertyValue);
				mappedRootObject[indexer] = (exports.getType(previouslyMappedValue) !== "undefined") ? previouslyMappedValue : exports.visitModel(propertyValue, callback, options);
				break;
			default:
				mappedRootObject[indexer] = callback(propertyValue, options.parentName);
			}
		});

		return mappedRootObject;
	}

	function simpleObjectLookup() {
		var keys = [];
		var values = [];
		this.save = function (key, value) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			if (existingIndex >= 0) values[existingIndex] = value;
			else {
				keys.push(key);
				values.push(value);
			}
		};
		this.get = function (key) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			var value = (existingIndex >= 0) ? values[existingIndex] : undefined;
			return value;
		};
	};
	
	function objectLookup() {
		var buckets = {};
		
		var findBucket = function(key) {
			var bucketKey;
			try {
				bucketKey = key;//JSON.stringify(key);
			}
			catch (e) {
				bucketKey = "$$$";
			}

			var bucket = buckets[bucketKey];
			if (bucket === undefined) {
				bucket = new simpleObjectLookup();
				buckets[bucketKey] = bucket;
			}
			return bucket;
		};
		
		this.save = function (key, value) {
			findBucket(key).save(key, value);
		};
		this.get = function (key) {
			return findBucket(key).get(key);
		};
	};
}));
})()
},{"knockout-client":8}],8:[function(require,module,exports){
// Knockout JavaScript library v2.1.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,document,navigator,undefined){
function m(w){throw w;}var n=void 0,p=!0,s=null,t=!1;function A(w){return function(){return w}};function E(w){function B(b,c,d){d&&c!==a.k.r(b)&&a.k.S(b,c);c!==a.k.r(b)&&a.a.va(b,"change")}var a="undefined"!==typeof w?w:{};a.b=function(b,c){for(var d=b.split("."),f=a,g=0;g<d.length-1;g++)f=f[d[g]];f[d[d.length-1]]=c};a.B=function(a,c,d){a[c]=d};a.version="2.1.0";a.b("version",a.version);a.a=new function(){function b(b,c){if("input"!==a.a.o(b)||!b.type||"click"!=c.toLowerCase())return t;var e=b.type;return"checkbox"==e||"radio"==e}var c=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,d={},f={};d[/Firefox\/2/i.test(navigator.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");for(var g in d){var e=d[g];if(e.length)for(var h=0,j=e.length;h<j;h++)f[e[h]]=g}var k={propertychange:p},i=function(){for(var a=3,b=document.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);return 4<a?a:n}();return{Ca:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
v:function(a,b){for(var c=0,e=a.length;c<e;c++)b(a[c])},j:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,e=a.length;c<e;c++)if(a[c]===b)return c;return-1},ab:function(a,b,c){for(var e=0,f=a.length;e<f;e++)if(b.call(c,a[e]))return a[e];return s},ba:function(b,c){var e=a.a.j(b,c);0<=e&&b.splice(e,1)},za:function(b){for(var b=b||[],c=[],e=0,f=b.length;e<f;e++)0>a.a.j(c,b[e])&&c.push(b[e]);return c},T:function(a,b){for(var a=a||[],c=[],
e=0,f=a.length;e<f;e++)c.push(b(a[e]));return c},aa:function(a,b){for(var a=a||[],c=[],e=0,f=a.length;e<f;e++)b(a[e])&&c.push(a[e]);return c},N:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,e=b.length;c<e;c++)a.push(b[c]);return a},extend:function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},ga:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Ab:function(b){for(var b=a.a.L(b),c=document.createElement("div"),e=0,f=b.length;e<f;e++)a.F(b[e]),
c.appendChild(b[e]);return c},X:function(b,c){a.a.ga(b);if(c)for(var e=0,f=c.length;e<f;e++)b.appendChild(c[e])},Na:function(b,c){var e=b.nodeType?[b]:b;if(0<e.length){for(var f=e[0],d=f.parentNode,g=0,h=c.length;g<h;g++)d.insertBefore(c[g],f);g=0;for(h=e.length;g<h;g++)a.removeNode(e[g])}},Pa:function(a,b){0<=navigator.userAgent.indexOf("MSIE 6")?a.setAttribute("selected",b):a.selected=b},w:function(a){return(a||"").replace(c,"")},Ib:function(b,c){for(var e=[],f=(b||"").split(c),g=0,d=f.length;g<
d;g++){var h=a.a.w(f[g]);""!==h&&e.push(h)}return e},Hb:function(a,b){a=a||"";return b.length>a.length?t:a.substring(0,b.length)===b},eb:function(a,b){for(var c="return ("+a+")",e=0;e<b;e++)c="with(sc["+e+"]) { "+c+" } ";return new Function("sc",c)},kb:function(a,b){if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a!=s;){if(a==b)return p;a=a.parentNode}return t},fa:function(b){return a.a.kb(b,b.ownerDocument)},o:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},
n:function(a,c,e){var f=i&&k[c];if(!f&&"undefined"!=typeof jQuery){if(b(a,c))var g=e,e=function(a,b){var c=this.checked;b&&(this.checked=b.fb!==p);g.call(this,a);this.checked=c};jQuery(a).bind(c,e)}else!f&&"function"==typeof a.addEventListener?a.addEventListener(c,e,t):"undefined"!=typeof a.attachEvent?a.attachEvent("on"+c,function(b){e.call(a,b)}):m(Error("Browser doesn't support addEventListener or attachEvent"))},va:function(a,c){(!a||!a.nodeType)&&m(Error("element must be a DOM node when calling triggerEvent"));
if("undefined"!=typeof jQuery){var e=[];b(a,c)&&e.push({fb:a.checked});jQuery(a).trigger(c,e)}else"function"==typeof document.createEvent?"function"==typeof a.dispatchEvent?(e=document.createEvent(f[c]||"HTMLEvents"),e.initEvent(c,p,p,window,0,0,0,0,0,t,t,t,t,0,a),a.dispatchEvent(e)):m(Error("The supplied element doesn't support dispatchEvent")):"undefined"!=typeof a.fireEvent?(b(a,c)&&(a.checked=a.checked!==p),a.fireEvent("on"+c)):m(Error("Browser doesn't support triggering events"))},d:function(b){return a.la(b)?
b():b},Ua:function(b,c,e){var f=(b.className||"").split(/\s+/),g=0<=a.a.j(f,c);if(e&&!g)b.className+=(f[0]?" ":"")+c;else if(g&&!e){e="";for(g=0;g<f.length;g++)f[g]!=c&&(e+=f[g]+" ");b.className=a.a.w(e)}},Qa:function(b,c){var e=a.a.d(c);if(e===s||e===n)e="";"innerText"in b?b.innerText=e:b.textContent=e;9<=i&&(b.style.display=b.style.display)},lb:function(a){if(9<=i){var b=a.style.width;a.style.width=0;a.style.width=b}},Eb:function(b,e){for(var b=a.a.d(b),e=a.a.d(e),c=[],f=b;f<=e;f++)c.push(f);return c},
L:function(a){for(var b=[],e=0,c=a.length;e<c;e++)b.push(a[e]);return b},tb:6===i,ub:7===i,ja:i,Da:function(b,e){for(var c=a.a.L(b.getElementsByTagName("input")).concat(a.a.L(b.getElementsByTagName("textarea"))),f="string"==typeof e?function(a){return a.name===e}:function(a){return e.test(a.name)},g=[],d=c.length-1;0<=d;d--)f(c[d])&&g.push(c[d]);return g},Bb:function(b){return"string"==typeof b&&(b=a.a.w(b))?window.JSON&&window.JSON.parse?window.JSON.parse(b):(new Function("return "+b))():s},sa:function(b,
e,c){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&m(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(a.a.d(b),e,c)},Cb:function(b,e,c){var c=c||{},f=c.params||{},g=c.includeFields||this.Ca,d=b;if("object"==typeof b&&"form"===a.a.o(b))for(var d=b.action,h=g.length-1;0<=h;h--)for(var k=a.a.Da(b,g[h]),
j=k.length-1;0<=j;j--)f[k[j].name]=k[j].value;var e=a.a.d(e),i=document.createElement("form");i.style.display="none";i.action=d;i.method="post";for(var z in e)b=document.createElement("input"),b.name=z,b.value=a.a.sa(a.a.d(e[z])),i.appendChild(b);for(z in f)b=document.createElement("input"),b.name=z,b.value=f[z],i.appendChild(b);document.body.appendChild(i);c.submitter?c.submitter(i):i.submit();setTimeout(function(){i.parentNode.removeChild(i)},0)}}};a.b("utils",a.a);a.b("utils.arrayForEach",a.a.v);
a.b("utils.arrayFirst",a.a.ab);a.b("utils.arrayFilter",a.a.aa);a.b("utils.arrayGetDistinctValues",a.a.za);a.b("utils.arrayIndexOf",a.a.j);a.b("utils.arrayMap",a.a.T);a.b("utils.arrayPushAll",a.a.N);a.b("utils.arrayRemoveItem",a.a.ba);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Ca);a.b("utils.getFormFields",a.a.Da);a.b("utils.postJson",a.a.Cb);a.b("utils.parseJson",a.a.Bb);a.b("utils.registerEventHandler",a.a.n);a.b("utils.stringifyJson",a.a.sa);a.b("utils.range",a.a.Eb);
a.b("utils.toggleDomNodeCssClass",a.a.Ua);a.b("utils.triggerEvent",a.a.va);a.b("utils.unwrapObservable",a.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments),a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={};return{get:function(b,c){var e=a.a.f.getAll(b,t);return e===n?n:e[c]},set:function(b,c,e){e===n&&a.a.f.getAll(b,
t)===n||(a.a.f.getAll(b,p)[c]=e)},getAll:function(a,g){var e=a[c];if(!(e&&"null"!==e)){if(!g)return;e=a[c]="ko"+b++;d[e]={}}return d[e]},clear:function(a){var b=a[c];b&&(delete d[b],a[c]=s)}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.G=new function(){function b(b,c){var f=a.a.f.get(b,d);f===n&&c&&(f=[],a.a.f.set(b,d,f));return f}function c(e){var f=b(e,t);if(f)for(var f=f.slice(0),d=0;d<f.length;d++)f[d](e);a.a.f.clear(e);"function"==typeof jQuery&&"function"==typeof jQuery.cleanData&&
jQuery.cleanData([e]);if(g[e.nodeType])for(f=e.firstChild;e=f;)f=e.nextSibling,8===e.nodeType&&c(e)}var d="__ko_domNodeDisposal__"+(new Date).getTime(),f={1:p,8:p,9:p},g={1:p,9:p};return{wa:function(a,c){"function"!=typeof c&&m(Error("Callback must be a function"));b(a,p).push(c)},Ma:function(c,f){var g=b(c,t);g&&(a.a.ba(g,f),0==g.length&&a.a.f.set(c,d,n))},F:function(b){if(f[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.N(d,b.getElementsByTagName("*"));for(var b=0,j=d.length;b<j;b++)c(d[b])}},
removeNode:function(b){a.F(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.F=a.a.G.F;a.removeNode=a.a.G.removeNode;a.b("cleanNode",a.F);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.wa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.Ma);(function(){a.a.pa=function(b){var c;if("undefined"!=typeof jQuery){if((c=jQuery.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&
b.parentNode.removeChild(b)}}else{var d=a.a.w(b).toLowerCase();c=document.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof window.innerShiv?c.appendChild(window.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.L(c.lastChild.childNodes)}return c};
a.a.Y=function(b,c){a.a.ga(b);if(c!==s&&c!==n)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof jQuery)jQuery(b).html(c);else for(var d=a.a.pa(c),f=0;f<d.length;f++)b.appendChild(d[f])}})();a.b("utils.parseHtmlFragment",a.a.pa);a.b("utils.setHtml",a.a.Y);a.s=function(){function b(){return(4294967296*(1+Math.random())|0).toString(16).substring(1)}function c(b,g){if(b)if(8==b.nodeType){var e=a.s.Ja(b.nodeValue);e!=s&&g.push({jb:b,yb:e})}else if(1==b.nodeType)for(var e=0,d=b.childNodes,j=d.length;e<
j;e++)c(d[e],g)}var d={};return{na:function(a){"function"!=typeof a&&m(Error("You can only pass a function to ko.memoization.memoize()"));var c=b()+b();d[c]=a;return"<\!--[ko_memo:"+c+"]--\>"},Va:function(a,b){var c=d[a];c===n&&m(Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized."));try{return c.apply(s,b||[]),p}finally{delete d[a]}},Wa:function(b,d){var e=[];c(b,e);for(var h=0,j=e.length;h<j;h++){var k=e[h].jb,i=[k];d&&a.a.N(i,d);a.s.Va(e[h].yb,i);k.nodeValue="";k.parentNode&&
k.parentNode.removeChild(k)}},Ja:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:s}}}();a.b("memoization",a.s);a.b("memoization.memoize",a.s.na);a.b("memoization.unmemoize",a.s.Va);a.b("memoization.parseMemoText",a.s.Ja);a.b("memoization.unmemoizeDomNodeAndDescendants",a.s.Wa);a.Ba={throttle:function(b,c){b.throttleEvaluation=c;var d=s;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(b,c){b.equalityComparer="always"==c?A(t):a.m.fn.equalityComparer;
return b}};a.b("extenders",a.Ba);a.Sa=function(b,c,d){this.target=b;this.ca=c;this.ib=d;a.B(this,"dispose",this.A)};a.Sa.prototype.A=function(){this.sb=p;this.ib()};a.R=function(){this.u={};a.a.extend(this,a.R.fn);a.B(this,"subscribe",this.ta);a.B(this,"extend",this.extend);a.B(this,"getSubscriptionsCount",this.ob)};a.R.fn={ta:function(b,c,d){var d=d||"change",b=c?b.bind(c):b,f=new a.Sa(this,b,function(){a.a.ba(this.u[d],f)}.bind(this));this.u[d]||(this.u[d]=[]);this.u[d].push(f);return f},notifySubscribers:function(b,
c){c=c||"change";this.u[c]&&a.a.v(this.u[c].slice(0),function(a){a&&a.sb!==p&&a.ca(b)})},ob:function(){var a=0,c;for(c in this.u)this.u.hasOwnProperty(c)&&(a+=this.u[c].length);return a},extend:function(b){var c=this;if(b)for(var d in b){var f=a.Ba[d];"function"==typeof f&&(c=f(c,b[d]))}return c}};a.Ga=function(a){return"function"==typeof a.ta&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.R);a.b("isSubscribable",a.Ga);a.U=function(){var b=[];return{bb:function(a){b.push({ca:a,Aa:[]})},
end:function(){b.pop()},La:function(c){a.Ga(c)||m(Error("Only subscribable things can act as dependencies"));if(0<b.length){var d=b[b.length-1];0<=a.a.j(d.Aa,c)||(d.Aa.push(c),d.ca(c))}}}}();var G={undefined:p,"boolean":p,number:p,string:p};a.m=function(b){function c(){if(0<arguments.length){if(!c.equalityComparer||!c.equalityComparer(d,arguments[0]))c.I(),d=arguments[0],c.H();return this}a.U.La(c);return d}var d=b;a.R.call(c);c.H=function(){c.notifySubscribers(d)};c.I=function(){c.notifySubscribers(d,
"beforeChange")};a.a.extend(c,a.m.fn);a.B(c,"valueHasMutated",c.H);a.B(c,"valueWillMutate",c.I);return c};a.m.fn={equalityComparer:function(a,c){return a===s||typeof a in G?a===c:t}};var x=a.m.Db="__ko_proto__";a.m.fn[x]=a.m;a.ia=function(b,c){return b===s||b===n||b[x]===n?t:b[x]===c?p:a.ia(b[x],c)};a.la=function(b){return a.ia(b,a.m)};a.Ha=function(b){return"function"==typeof b&&b[x]===a.m||"function"==typeof b&&b[x]===a.h&&b.pb?p:t};a.b("observable",a.m);a.b("isObservable",a.la);a.b("isWriteableObservable",
a.Ha);a.Q=function(b){0==arguments.length&&(b=[]);b!==s&&(b!==n&&!("length"in b))&&m(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var c=a.m(b);a.a.extend(c,a.Q.fn);return c};a.Q.fn={remove:function(a){for(var c=this(),d=[],f="function"==typeof a?a:function(c){return c===a},g=0;g<c.length;g++){var e=c[g];f(e)&&(0===d.length&&this.I(),d.push(e),c.splice(g,1),g--)}d.length&&this.H();return d},removeAll:function(b){if(b===n){var c=this(),
d=c.slice(0);this.I();c.splice(0,c.length);this.H();return d}return!b?[]:this.remove(function(c){return 0<=a.a.j(b,c)})},destroy:function(a){var c=this(),d="function"==typeof a?a:function(c){return c===a};this.I();for(var f=c.length-1;0<=f;f--)d(c[f])&&(c[f]._destroy=p);this.H()},destroyAll:function(b){return b===n?this.destroy(A(p)):!b?[]:this.destroy(function(c){return 0<=a.a.j(b,c)})},indexOf:function(b){var c=this();return a.a.j(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.I(),
this()[d]=c,this.H())}};a.a.v("pop push reverse shift sort splice unshift".split(" "),function(b){a.Q.fn[b]=function(){var a=this();this.I();a=a[b].apply(a,arguments);this.H();return a}});a.a.v(["slice"],function(b){a.Q.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.Q);a.h=function(b,c,d){function f(){a.a.v(v,function(a){a.A()});v=[]}function g(){var a=h.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(e,a)):e()}function e(){if(!l)if(i&&w())u();else{l=
p;try{var b=a.a.T(v,function(a){return a.target});a.U.bb(function(c){var e;0<=(e=a.a.j(b,c))?b[e]=n:v.push(c.ta(g))});for(var e=q.call(c),f=b.length-1;0<=f;f--)b[f]&&v.splice(f,1)[0].A();i=p;h.notifySubscribers(k,"beforeChange");k=e}finally{a.U.end()}h.notifySubscribers(k);l=t}}function h(){if(0<arguments.length)j.apply(h,arguments);else return i||e(),a.U.La(h),k}function j(){"function"===typeof o?o.apply(c,arguments):m(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."))}
var k,i=t,l=t,q=b;q&&"object"==typeof q?(d=q,q=d.read):(d=d||{},q||(q=d.read));"function"!=typeof q&&m(Error("Pass a function that returns the value of the ko.computed"));var o=d.write;c||(c=d.owner);var v=[],u=f,r="object"==typeof d.disposeWhenNodeIsRemoved?d.disposeWhenNodeIsRemoved:s,w=d.disposeWhen||A(t);if(r){u=function(){a.a.G.Ma(r,arguments.callee);f()};a.a.G.wa(r,u);var y=w,w=function(){return!a.a.fa(r)||y()}}var x=s;h.nb=function(){return v.length};h.pb="function"===typeof d.write;h.A=function(){u()};
a.R.call(h);a.a.extend(h,a.h.fn);d.deferEvaluation!==p&&e();a.B(h,"dispose",h.A);a.B(h,"getDependenciesCount",h.nb);return h};a.rb=function(b){return a.ia(b,a.h)};w=a.m.Db;a.h[w]=a.m;a.h.fn={};a.h.fn[w]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.rb);(function(){function b(a,g,e){e=e||new d;a=g(a);if(!("object"==typeof a&&a!==s&&a!==n&&!(a instanceof Date)))return a;var h=a instanceof Array?[]:{};e.save(a,h);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=
d;break;case "object":case "undefined":var i=e.get(d);h[c]=i!==n?i:b(d,g,e)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){var b=[],c=[];this.save=function(e,d){var j=a.a.j(b,e);0<=j?c[j]=d:(b.push(e),c.push(d))};this.get=function(e){e=a.a.j(b,e);return 0<=e?c[e]:n}}a.Ta=function(c){0==arguments.length&&m(Error("When calling ko.toJS, pass the object you want to convert."));return b(c,function(b){for(var c=
0;a.la(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,e){b=a.Ta(b);return a.a.sa(b,c,e)}})();a.b("toJS",a.Ta);a.b("toJSON",a.toJSON);(function(){a.k={r:function(b){switch(a.a.o(b)){case "option":return b.__ko__hasDomDataOptionValue__===p?a.a.f.get(b,a.c.options.oa):b.getAttribute("value");case "select":return 0<=b.selectedIndex?a.k.r(b.options[b.selectedIndex]):n;default:return b.value}},S:function(b,c){switch(a.a.o(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.c.options.oa,
n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.c.options.oa,c),b.__ko__hasDomDataOptionValue__=p,b.value="number"===typeof c?c:""}break;case "select":for(var d=b.options.length-1;0<=d;d--)if(a.k.r(b.options[d])==c){b.selectedIndex=d;break}break;default:if(c===s||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.r);a.b("selectExtensions.writeValue",a.k.S);a.g=function(){function b(a,b){for(var d=
s;a!=d;)d=a,a=a.replace(c,function(a,c){return b[c]});return a}var c=/\@ko_token_(\d+)\@/g,d=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,f=["true","false"];return{D:[],W:function(c){var e=a.a.w(c);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-1));for(var c=[],d=s,f,k=0;k<e.length;k++){var i=e.charAt(k);if(d===s)switch(i){case '"':case "'":case "/":d=k,f=i}else if(i==f&&"\\"!==e.charAt(k-1)){i=e.substring(d,k+1);c.push(i);var l="@ko_token_"+(c.length-
1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k=k-(i.length-l.length),d=s}}f=d=s;for(var q=0,o=s,k=0;k<e.length;k++){i=e.charAt(k);if(d===s)switch(i){case "{":d=k;o=i;f="}";break;case "(":d=k;o=i;f=")";break;case "[":d=k,o=i,f="]"}i===o?q++:i===f&&(q--,0===q&&(i=e.substring(d,k+1),c.push(i),l="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k-=i.length-l.length,d=s))}f=[];e=e.split(",");d=0;for(k=e.length;d<k;d++)q=e[d],o=q.indexOf(":"),0<o&&o<q.length-1?(i=q.substring(o+1),f.push({key:b(q.substring(0,
o),c),value:b(i,c)})):f.push({unknown:b(q,c)});return f},ka:function(b){for(var c="string"===typeof b?a.g.W(b):b,h=[],b=[],j,k=0;j=c[k];k++)if(0<h.length&&h.push(","),j.key){var i;a:{i=j.key;var l=a.a.w(i);switch(l.length&&l.charAt(0)){case "'":case '"':break a;default:i="'"+l+"'"}}j=j.value;h.push(i);h.push(":");h.push(j);l=a.a.w(j);if(0<=a.a.j(f,a.a.w(l).toLowerCase())?0:l.match(d)!==s)0<b.length&&b.push(", "),b.push(i+" : function(__ko_value) { "+j+" = __ko_value; }")}else j.unknown&&h.push(j.unknown);
c=h.join("");0<b.length&&(c=c+", '_ko_property_writers' : { "+b.join("")+" } ");return c},wb:function(b,c){for(var d=0;d<b.length;d++)if(a.a.w(b[d].key)==c)return p;return t},$:function(b,c,d,f,k){if(!b||!a.Ha(b)){if((b=c()._ko_property_writers)&&b[d])b[d](f)}else(!k||b()!==f)&&b(f)}}}();a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.bindingRewriteValidators",a.g.D);a.b("jsonExpressionRewriting.parseObjectLiteral",a.g.W);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",
a.g.ka);(function(){function b(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(e)}function c(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(h)}function d(a,e){for(var d=a,f=1,g=[];d=d.nextSibling;){if(c(d)&&(f--,0===f))return g;g.push(d);b(d)&&f++}e||m(Error("Cannot find closing comment tag to match: "+a.nodeValue));return s}function f(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:s}var g="<\!--test--\>"===document.createComment("test").text,e=g?/^<\!--\s*ko\s+(.*\:.*)\s*--\>$/:
/^\s*ko\s+(.*\:.*)\s*$/,h=g?/^<\!--\s*\/ko\s*--\>$/:/^\s*\/ko\s*$/,j={ul:p,ol:p};a.e={C:{},childNodes:function(a){return b(a)?d(a):a.childNodes},ha:function(c){if(b(c))for(var c=a.e.childNodes(c),e=0,d=c.length;e<d;e++)a.removeNode(c[e]);else a.a.ga(c)},X:function(c,e){if(b(c)){a.e.ha(c);for(var d=c.nextSibling,f=0,g=e.length;f<g;f++)d.parentNode.insertBefore(e[f],d)}else a.a.X(c,e)},Ka:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},
Fa:function(a,c,e){b(a)?a.parentNode.insertBefore(c,e.nextSibling):e.nextSibling?a.insertBefore(c,e.nextSibling):a.appendChild(c)},firstChild:function(a){return!b(a)?a.firstChild:!a.nextSibling||c(a.nextSibling)?s:a.nextSibling},nextSibling:function(a){b(a)&&(a=f(a));return a.nextSibling&&c(a.nextSibling)?s:a.nextSibling},Xa:function(a){return(a=b(a))?a[1]:s},Ia:function(e){if(j[a.a.o(e)]){var d=e.firstChild;if(d){do if(1===d.nodeType){var g;g=d.firstChild;var h=s;if(g){do if(h)h.push(g);else if(b(g)){var o=
f(g,p);o?g=o:h=[g]}else c(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h){h=d.nextSibling;for(o=0;o<g.length;o++)h?e.insertBefore(g[o],h):e.appendChild(g[o])}}while(d=d.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.C);a.b("virtualElements.emptyNode",a.e.ha);a.b("virtualElements.insertAfter",a.e.Fa);a.b("virtualElements.prepend",a.e.Ka);a.b("virtualElements.setDomNodeChildren",a.e.X);(function(){a.J=function(){this.cb={}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind")!=
s;case 8:return a.e.Xa(b)!=s;default:return t}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c):s},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Xa(b);default:return s}},parseBindingsString:function(b,c){try{var d=c.$data,d="object"==typeof d&&d!=s?[d,c]:[c],f=d.length,g=this.cb,e=f+"_"+b,h;if(!(h=g[e])){var j=" { "+a.g.ka(b)+" } ";h=g[e]=a.a.eb(j,f)}return h(d)}catch(k){m(Error("Unable to parse bindings.\nMessage: "+
k+";\nBindings value: "+b))}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(b,d,e){for(var h=a.e.firstChild(d);d=h;)h=a.e.nextSibling(d),c(b,d,e)}function c(c,g,e){var h=p,j=1===g.nodeType;j&&a.e.Ia(g);if(j&&e||a.J.instance.nodeHasBindings(g))h=d(g,s,c,e).Gb;h&&b(c,g,!j)}function d(b,c,e,d){function j(a){return function(){return l[a]}}function k(){return l}var i=0,l,q;a.h(function(){var o=e&&e instanceof a.z?e:new a.z(a.a.d(e)),v=o.$data;d&&a.Ra(b,o);if(l=("function"==
typeof c?c():c)||a.J.instance.getBindings(b,o)){if(0===i){i=1;for(var u in l){var r=a.c[u];r&&8===b.nodeType&&!a.e.C[u]&&m(Error("The binding '"+u+"' cannot be used with virtual elements"));if(r&&"function"==typeof r.init&&(r=(0,r.init)(b,j(u),k,v,o))&&r.controlsDescendantBindings)q!==n&&m(Error("Multiple bindings ("+q+" and "+u+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),q=u}i=2}if(2===i)for(u in l)(r=a.c[u])&&"function"==
typeof r.update&&(0,r.update)(b,j(u),k,v,o)}},s,{disposeWhenNodeIsRemoved:b});return{Gb:q===n}}a.c={};a.z=function(b,c){c?(a.a.extend(this,c),this.$parentContext=c,this.$parent=c.$data,this.$parents=(c.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=[],this.$root=b);this.$data=b};a.z.prototype.createChildContext=function(b){return new a.z(b,this)};a.z.prototype.extend=function(b){var c=a.a.extend(new a.z,this);return a.a.extend(c,b)};a.Ra=function(b,c){if(2==arguments.length)a.a.f.set(b,
"__ko_bindingContext__",c);else return a.a.f.get(b,"__ko_bindingContext__")};a.ya=function(b,c,e){1===b.nodeType&&a.e.Ia(b);return d(b,c,e,p)};a.Ya=function(a,c){(1===c.nodeType||8===c.nodeType)&&b(a,c,p)};a.xa=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&m(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||window.document.body;c(a,b,p)};a.ea=function(b){switch(b.nodeType){case 1:case 8:var c=a.Ra(b);if(c)return c;if(b.parentNode)return a.ea(b.parentNode)}};
a.hb=function(b){return(b=a.ea(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("applyBindings",a.xa);a.b("applyBindingsToDescendants",a.Ya);a.b("applyBindingsToNode",a.ya);a.b("contextFor",a.ea);a.b("dataFor",a.hb)})();a.a.v(["click"],function(b){a.c[b]={init:function(c,d,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},f,g)}}});a.c.event={init:function(b,c,d,f){var g=c()||{},e;for(e in g)(function(){var g=e;"string"==typeof g&&a.a.n(b,g,function(b){var e,i=c()[g];if(i){var l=
d();try{var q=a.a.L(arguments);q.unshift(f);e=i.apply(f,q)}finally{e!==p&&(b.preventDefault?b.preventDefault():b.returnValue=t)}l[g+"Bubble"]===t&&(b.cancelBubble=p,b.stopPropagation&&b.stopPropagation())}})})()}};a.c.submit={init:function(b,c,d,f){"function"!=typeof c()&&m(Error("The value for a submit binding must be a function"));a.a.n(b,"submit",function(a){var e,d=c();try{e=d.call(f,b)}finally{e!==p&&(a.preventDefault?a.preventDefault():a.returnValue=t)}})}};a.c.visible={update:function(b,c){var d=
a.a.d(c()),f="none"!=b.style.display;d&&!f?b.style.display="":!d&&f&&(b.style.display="none")}};a.c.enable={update:function(b,c){var d=a.a.d(c());d&&b.disabled?b.removeAttribute("disabled"):!d&&!b.disabled&&(b.disabled=p)}};a.c.disable={update:function(b,c){a.c.enable.update(b,function(){return!a.a.d(c())})}};a.c.value={init:function(b,c,d){function f(){var e=c(),f=a.k.r(b);a.g.$(e,d,"value",f,p)}var g=["change"],e=d().valueUpdate;e&&("string"==typeof e&&(e=[e]),a.a.N(g,e),g=a.a.za(g));if(a.a.ja&&
("input"==b.tagName.toLowerCase()&&"text"==b.type&&"off"!=b.autocomplete&&(!b.form||"off"!=b.form.autocomplete))&&-1==a.a.j(g,"propertychange")){var h=t;a.a.n(b,"propertychange",function(){h=p});a.a.n(b,"blur",function(){if(h){h=t;f()}})}a.a.v(g,function(c){var e=f;if(a.a.Hb(c,"after")){e=function(){setTimeout(f,0)};c=c.substring(5)}a.a.n(b,c,e)})},update:function(b,c){var d="select"===a.a.o(b),f=a.a.d(c()),g=a.k.r(b),e=f!=g;0===f&&(0!==g&&"0"!==g)&&(e=p);e&&(g=function(){a.k.S(b,f)},g(),d&&setTimeout(g,
0));d&&0<b.length&&B(b,f,t)}};a.c.options={update:function(b,c,d){"select"!==a.a.o(b)&&m(Error("options binding applies only to SELECT elements"));for(var f=0==b.length,g=a.a.T(a.a.aa(b.childNodes,function(b){return b.tagName&&"option"===a.a.o(b)&&b.selected}),function(b){return a.k.r(b)||b.innerText||b.textContent}),e=b.scrollTop,h=a.a.d(c());0<b.length;)a.F(b.options[0]),b.remove(0);if(h){d=d();"number"!=typeof h.length&&(h=[h]);if(d.optionsCaption){var j=document.createElement("option");a.a.Y(j,
d.optionsCaption);a.k.S(j,n);b.appendChild(j)}for(var c=0,k=h.length;c<k;c++){var j=document.createElement("option"),i="string"==typeof d.optionsValue?h[c][d.optionsValue]:h[c],i=a.a.d(i);a.k.S(j,i);var l=d.optionsText,i="function"==typeof l?l(h[c]):"string"==typeof l?h[c][l]:i;if(i===s||i===n)i="";a.a.Qa(j,i);b.appendChild(j)}h=b.getElementsByTagName("option");c=j=0;for(k=h.length;c<k;c++)0<=a.a.j(g,a.k.r(h[c]))&&(a.a.Pa(h[c],p),j++);b.scrollTop=e;f&&"value"in d&&B(b,a.a.d(d.value),p);a.a.lb(b)}}};
a.c.options.oa="__ko.optionValueDomData__";a.c.selectedOptions={Ea:function(b){for(var c=[],b=b.childNodes,d=0,f=b.length;d<f;d++){var g=b[d],e=a.a.o(g);"option"==e&&g.selected?c.push(a.k.r(g)):"optgroup"==e&&(g=a.c.selectedOptions.Ea(g),Array.prototype.splice.apply(c,[c.length,0].concat(g)))}return c},init:function(b,c,d){a.a.n(b,"change",function(){var b=c(),g=a.c.selectedOptions.Ea(this);a.g.$(b,d,"value",g)})},update:function(b,c){"select"!=a.a.o(b)&&m(Error("values binding applies only to SELECT elements"));
var d=a.a.d(c());if(d&&"number"==typeof d.length)for(var f=b.childNodes,g=0,e=f.length;g<e;g++){var h=f[g];"option"===a.a.o(h)&&a.a.Pa(h,0<=a.a.j(d,a.k.r(h)))}}};a.c.text={update:function(b,c){a.a.Qa(b,c())}};a.c.html={init:function(){return{controlsDescendantBindings:p}},update:function(b,c){var d=a.a.d(c());a.a.Y(b,d)}};a.c.css={update:function(b,c){var d=a.a.d(c()||{}),f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);a.a.Ua(b,f,g)}}};a.c.style={update:function(b,c){var d=a.a.d(c()||{}),f;
for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);b.style[f]=g||""}}};a.c.uniqueName={init:function(b,c){c()&&(b.name="ko_unique_"+ ++a.c.uniqueName.gb,(a.a.tb||a.a.ub)&&b.mergeAttributes(document.createElement("<input name='"+b.name+"'/>"),t))}};a.c.uniqueName.gb=0;a.c.checked={init:function(b,c,d){a.a.n(b,"click",function(){var f;if("checkbox"==b.type)f=b.checked;else if("radio"==b.type&&b.checked)f=b.value;else return;var g=c();"checkbox"==b.type&&a.a.d(g)instanceof Array?(f=a.a.j(a.a.d(g),b.value),
b.checked&&0>f?g.push(b.value):!b.checked&&0<=f&&g.splice(f,1)):a.g.$(g,d,"checked",f,p)});"radio"==b.type&&!b.name&&a.c.uniqueName.init(b,A(p))},update:function(b,c){var d=a.a.d(c());"checkbox"==b.type?b.checked=d instanceof Array?0<=a.a.j(d,b.value):d:"radio"==b.type&&(b.checked=b.value==d)}};var F={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.d(c())||{},f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]),e=g===t||g===s||g===n;e&&b.removeAttribute(f);8>=a.a.ja&&
f in F?(f=F[f],e?b.removeAttribute(f):b[f]=g):e||b.setAttribute(f,g.toString())}}};a.c.hasfocus={init:function(b,c,d){function f(b){var e=c();a.g.$(e,d,"hasfocus",b,p)}a.a.n(b,"focus",function(){f(p)});a.a.n(b,"focusin",function(){f(p)});a.a.n(b,"blur",function(){f(t)});a.a.n(b,"focusout",function(){f(t)})},update:function(b,c){var d=a.a.d(c());d?b.focus():b.blur();a.a.va(b,d?"focusin":"focusout")}};a.c["with"]={p:function(b){return function(){var c=b();return{"if":c,data:c,templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c["with"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["with"].p(c),d,f,g)}};a.g.D["with"]=t;a.e.C["with"]=p;a.c["if"]={p:function(b){return function(){return{"if":b(),templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c["if"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["if"].p(c),d,f,g)}};a.g.D["if"]=t;a.e.C["if"]=p;a.c.ifnot={p:function(b){return function(){return{ifnot:b(),templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c.ifnot.p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c.ifnot.p(c),d,f,g)}};a.g.D.ifnot=t;a.e.C.ifnot=p;a.c.foreach={p:function(b){return function(){var c=a.a.d(b());return!c||"number"==typeof c.length?{foreach:c,templateEngine:a.q.K}:{foreach:c.data,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.p(c))},
update:function(b,c,d,f,g){return a.c.template.update(b,a.c.foreach.p(c),d,f,g)}};a.g.D.foreach=t;a.e.C.foreach=p;a.t=function(){};a.t.prototype.renderTemplateSource=function(){m(Error("Override renderTemplateSource"))};a.t.prototype.createJavaScriptEvaluatorBlock=function(){m(Error("Override createJavaScriptEvaluatorBlock"))};a.t.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){var c=c||document,d=c.getElementById(b);d||m(Error("Cannot find template with ID "+b));return new a.l.i(d)}if(1==
b.nodeType||8==b.nodeType)return new a.l.M(b);m(Error("Unknown template type: "+b))};a.t.prototype.renderTemplate=function(a,c,d,f){return this.renderTemplateSource(this.makeTemplateSource(a,f),c,d)};a.t.prototype.isTemplateRewritten=function(a,c){return this.allowTemplateRewriting===t||!(c&&c!=document)&&this.V&&this.V[a]?p:this.makeTemplateSource(a,c).data("isRewritten")};a.t.prototype.rewriteTemplate=function(a,c,d){var f=this.makeTemplateSource(a,d),c=c(f.text());f.text(c);f.data("isRewritten",
p);!(d&&d!=document)&&"string"==typeof a&&(this.V=this.V||{},this.V[a]=p)};a.b("templateEngine",a.t);a.Z=function(){function b(b,c,e){for(var b=a.g.W(b),d=a.g.D,j=0;j<b.length;j++){var k=b[j].key;if(d.hasOwnProperty(k)){var i=d[k];"function"===typeof i?(k=i(b[j].value))&&m(Error(k)):i||m(Error("This template engine does not support the '"+k+"' binding within its templates"))}}b="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+a.g.ka(b)+
" } })()         })";return e.createJavaScriptEvaluatorBlock(b)+c}var c=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,d=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{mb:function(b,c,e){c.isTemplateRewritten(b,e)||c.rewriteTemplate(b,function(b){return a.Z.zb(b,c)},e)},zb:function(a,g){return a.replace(c,function(a,c,d,f,i,l,q){return b(q,c,g)}).replace(d,function(a,c){return b(c,"<\!-- ko --\>",g)})},Za:function(b){return a.s.na(function(c,
e){c.nextSibling&&a.ya(c.nextSibling,b,e)})}}}();a.b("templateRewriting",a.Z);a.b("templateRewriting.applyMemoizedBindingsToNextSibling",a.Z.Za);(function(){a.l={};a.l.i=function(a){this.i=a};a.l.i.prototype.text=function(){var b=a.a.o(this.i),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.i[b];var c=arguments[0];"innerHTML"===b?a.a.Y(this.i,c):this.i[b]=c};a.l.i.prototype.data=function(b){if(1===arguments.length)return a.a.f.get(this.i,"templateSourceData_"+
b);a.a.f.set(this.i,"templateSourceData_"+b,arguments[1])};a.l.M=function(a){this.i=a};a.l.M.prototype=new a.l.i;a.l.M.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.i,"__ko_anon_template__")||{};b.ua===n&&b.da&&(b.ua=b.da.innerHTML);return b.ua}a.a.f.set(this.i,"__ko_anon_template__",{ua:arguments[0]})};a.l.i.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.i,"__ko_anon_template__")||{}).da;a.a.f.set(this.i,"__ko_anon_template__",{da:arguments[0]})};
a.b("templateSources",a.l);a.b("templateSources.domElement",a.l.i);a.b("templateSources.anonymousTemplate",a.l.M)})();(function(){function b(b,c,d){for(var f,c=a.e.nextSibling(c);b&&(f=b)!==c;)b=a.e.nextSibling(f),(1===f.nodeType||8===f.nodeType)&&d(f)}function c(c,d){if(c.length){var f=c[0],g=c[c.length-1];b(f,g,function(b){a.xa(d,b)});b(f,g,function(b){a.s.Wa(b,[d])})}}function d(a){return a.nodeType?a:0<a.length?a[0]:s}function f(b,f,j,k,i){var i=i||{},l=b&&d(b),l=l&&l.ownerDocument,q=i.templateEngine||
g;a.Z.mb(j,q,l);j=q.renderTemplate(j,k,i,l);("number"!=typeof j.length||0<j.length&&"number"!=typeof j[0].nodeType)&&m(Error("Template engine must return an array of DOM nodes"));l=t;switch(f){case "replaceChildren":a.e.X(b,j);l=p;break;case "replaceNode":a.a.Na(b,j);l=p;break;case "ignoreTargetNode":break;default:m(Error("Unknown renderMode: "+f))}l&&(c(j,k),i.afterRender&&i.afterRender(j,k.$data));return j}var g;a.ra=function(b){b!=n&&!(b instanceof a.t)&&m(Error("templateEngine must inherit from ko.templateEngine"));
g=b};a.qa=function(b,c,j,k,i){j=j||{};(j.templateEngine||g)==n&&m(Error("Set a template engine before calling renderTemplate"));i=i||"replaceChildren";if(k){var l=d(k);return a.h(function(){var g=c&&c instanceof a.z?c:new a.z(a.a.d(c)),o="function"==typeof b?b(g.$data):b,g=f(k,i,o,g,j);"replaceNode"==i&&(k=g,l=d(k))},s,{disposeWhen:function(){return!l||!a.a.fa(l)},disposeWhenNodeIsRemoved:l&&"replaceNode"==i?l.parentNode:l})}return a.s.na(function(d){a.qa(b,c,j,d,"replaceNode")})};a.Fb=function(b,
d,g,k,i){function l(a,b){c(b,o);g.afterRender&&g.afterRender(b,a)}function q(c,d){var h="function"==typeof b?b(c):b;o=i.createChildContext(a.a.d(c));o.$index=d;return f(s,"ignoreTargetNode",h,o,g)}var o;return a.h(function(){var b=a.a.d(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.aa(b,function(b){return g.includeDestroyed||b===n||b===s||!a.a.d(b._destroy)});a.a.Oa(k,b,q,g,l)},s,{disposeWhenNodeIsRemoved:k})};a.c.template={init:function(b,c){var d=a.a.d(c());if("string"!=typeof d&&!d.name&&
(1==b.nodeType||8==b.nodeType))d=1==b.nodeType?b.childNodes:a.e.childNodes(b),d=a.a.Ab(d),(new a.l.M(b)).nodes(d);return{controlsDescendantBindings:p}},update:function(b,c,d,f,g){c=a.a.d(c());f=p;"string"==typeof c?d=c:(d=c.name,"if"in c&&(f=f&&a.a.d(c["if"])),"ifnot"in c&&(f=f&&!a.a.d(c.ifnot)));var l=s;"object"===typeof c&&"foreach"in c?l=a.Fb(d||b,f&&c.foreach||[],c,b,g):f?(g="object"==typeof c&&"data"in c?g.createChildContext(a.a.d(c.data)):g,l=a.qa(d||b,g,c,b)):a.e.ha(b);g=l;(c=a.a.f.get(b,"__ko__templateSubscriptionDomDataKey__"))&&
"function"==typeof c.A&&c.A();a.a.f.set(b,"__ko__templateSubscriptionDomDataKey__",g)}};a.g.D.template=function(b){b=a.g.W(b);return 1==b.length&&b[0].unknown||a.g.wb(b,"name")?s:"This template engine does not support anonymous templates nested within its templates"};a.e.C.template=p})();a.b("setTemplateEngine",a.ra);a.b("renderTemplate",a.qa);(function(){a.a.O=function(b,c,d){if(d===n)return a.a.O(b,c,1)||a.a.O(b,c,10)||a.a.O(b,c,Number.MAX_VALUE);for(var b=b||[],c=c||[],f=b,g=c,e=[],h=0;h<=g.length;h++)e[h]=
[];for(var h=0,j=Math.min(f.length,d);h<=j;h++)e[0][h]=h;h=1;for(j=Math.min(g.length,d);h<=j;h++)e[h][0]=h;for(var j=f.length,k,i=g.length,h=1;h<=j;h++){k=Math.max(1,h-d);for(var l=Math.min(i,h+d);k<=l;k++)e[k][h]=f[h-1]===g[k-1]?e[k-1][h-1]:Math.min(e[k-1][h]===n?Number.MAX_VALUE:e[k-1][h]+1,e[k][h-1]===n?Number.MAX_VALUE:e[k][h-1]+1)}d=b.length;f=c.length;g=[];h=e[f][d];if(h===n)e=s;else{for(;0<d||0<f;){j=e[f][d];i=0<f?e[f-1][d]:h+1;l=0<d?e[f][d-1]:h+1;k=0<f&&0<d?e[f-1][d-1]:h+1;if(i===n||i<j-1)i=
h+1;if(l===n||l<j-1)l=h+1;k<j-1&&(k=h+1);i<=l&&i<k?(g.push({status:"added",value:c[f-1]}),f--):(l<i&&l<k?g.push({status:"deleted",value:b[d-1]}):(g.push({status:"retained",value:b[d-1]}),f--),d--)}e=g.reverse()}return e}})();a.b("utils.compareArrays",a.a.O);(function(){function b(a){if(2<a.length){for(var b=a[0],c=a[a.length-1],e=[b];b!==c;){b=b.nextSibling;if(!b)return;e.push(b)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}}function c(c,f,g,e,h){var j=[],c=a.h(function(){var c=f(g,h)||
[];0<j.length&&(b(j),a.a.Na(j,c),e&&e(g,c));j.splice(0,j.length);a.a.N(j,c)},s,{disposeWhenNodeIsRemoved:c,disposeWhen:function(){return 0==j.length||!a.a.fa(j[0])}});return{xb:j,h:c}}a.a.Oa=function(d,f,g,e,h){for(var f=f||[],e=e||{},j=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===n,k=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=a.a.T(k,function(a){return a.$a}),l=a.a.O(i,f),f=[],q=0,o=[],v=0,i=[],u=s,r=0,w=l.length;r<w;r++)switch(l[r].status){case "retained":var y=
k[q];y.qb(v);v=f.push(y);0<y.P.length&&(u=y.P[y.P.length-1]);q++;break;case "deleted":k[q].h.A();b(k[q].P);a.a.v(k[q].P,function(a){o.push({element:a,index:r,value:l[r].value});u=a});q++;break;case "added":for(var y=l[r].value,x=a.m(v),v=c(d,g,y,h,x),C=v.xb,v=f.push({$a:l[r].value,P:C,h:v.h,qb:x}),z=0,B=C.length;z<B;z++){var D=C[z];i.push({element:D,index:r,value:l[r].value});u==s?a.e.Ka(d,D):a.e.Fa(d,D,u);u=D}h&&h(y,C,x)}a.a.v(o,function(b){a.F(b.element)});g=t;if(!j){if(e.afterAdd)for(r=0;r<i.length;r++)e.afterAdd(i[r].element,
i[r].index,i[r].value);if(e.beforeRemove){for(r=0;r<o.length;r++)e.beforeRemove(o[r].element,o[r].index,o[r].value);g=p}}if(!g&&o.length)for(r=0;r<o.length;r++)e=o[r].element,e.parentNode&&e.parentNode.removeChild(e);a.a.f.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",f)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Oa);a.q=function(){this.allowTemplateRewriting=t};a.q.prototype=new a.t;a.q.prototype.renderTemplateSource=function(b){var c=!(9>a.a.ja)&&b.nodes?b.nodes():s;
if(c)return a.a.L(c.cloneNode(p).childNodes);b=b.text();return a.a.pa(b)};a.q.K=new a.q;a.ra(a.q.K);a.b("nativeTemplateEngine",a.q);(function(){a.ma=function(){var a=this.vb=function(){if("undefined"==typeof jQuery||!jQuery.tmpl)return 0;try{if(0<=jQuery.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,f,g){g=g||{};2>a&&m(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));var e=b.data("precompiled");
e||(e=b.text()||"",e=jQuery.template(s,"{{ko_with $item.koBindingContext}}"+e+"{{/ko_with}}"),b.data("precompiled",e));b=[f.$data];f=jQuery.extend({koBindingContext:f},g.templateOptions);f=jQuery.tmpl(e,b,f);f.appendTo(document.createElement("div"));jQuery.fragments={};return f};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){document.write("<script type='text/html' id='"+a+"'>"+b+"<\/script>")};0<a&&(jQuery.tmpl.tag.ko_code=
{open:"__.push($1 || '');"},jQuery.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.ma.prototype=new a.t;var b=new a.ma;0<b.vb&&a.ra(b);a.b("jqueryTmplTemplateEngine",a.ma)})()}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?E(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],E):E(window.ko={});p;
})(window,document,navigator);

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL3NpdGUvc2NyaXB0cy9hcHAuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9rbm9ja291dC1jbGllbnQva25vY2tvdXQuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL3NpdGUvc2NyaXB0cy92aWV3TW9kZWwuanMiLCIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9kYXRlanMvbGliL2RhdGUuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9rbm9ja291dC1tYXBwaW5nL2luZGV4LmpzIiwiL1VzZXJzL2pvc2hrYS9Db2RlL2NvdW50dy50Zi9ub2RlX21vZHVsZXMva25vY2tvdXQtbWFwcGluZy9ub2RlX21vZHVsZXMva25vY2tvdXQtY2xpZW50L2tub2Nrb3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3J3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGtvID0gcmVxdWlyZSgna25vY2tvdXQtY2xpZW50JyksXG5cdHZtID0gcmVxdWlyZSgnLi92aWV3TW9kZWwnKTtcblxua28uYXBwbHlCaW5kaW5ncyh2bSk7IiwiLy8gS25vY2tvdXQgSmF2YVNjcmlwdCBsaWJyYXJ5IHYyLjIuMVxuLy8gKGMpIFN0ZXZlbiBTYW5kZXJzb24gLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4vLyBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuXG4oZnVuY3Rpb24oKSB7ZnVuY3Rpb24gaih3KXt0aHJvdyB3O312YXIgbT0hMCxwPW51bGwscj0hMTtmdW5jdGlvbiB1KHcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB3fX07dmFyIHg9d2luZG93LHk9ZG9jdW1lbnQsZ2E9bmF2aWdhdG9yLEY9d2luZG93LmpRdWVyeSxJPXZvaWQgMDtcbmZ1bmN0aW9uIEwodyl7ZnVuY3Rpb24gaGEoYSxkLGMsZSxmKXt2YXIgZz1bXTthPWIuaihmdW5jdGlvbigpe3ZhciBhPWQoYyxmKXx8W107MDxnLmxlbmd0aCYmKGIuYS5ZYShNKGcpLGEpLGUmJmIuci5LKGUscCxbYyxhLGZdKSk7Zy5zcGxpY2UoMCxnLmxlbmd0aCk7Yi5hLlAoZyxhKX0scCx7VzphLEthOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PWcubGVuZ3RofHwhYi5hLlgoZ1swXSl9fSk7cmV0dXJue006ZyxqOmEucGEoKT9hOkl9fWZ1bmN0aW9uIE0oYSl7Zm9yKDthLmxlbmd0aCYmIWIuYS5YKGFbMF0pOylhLnNwbGljZSgwLDEpO2lmKDE8YS5sZW5ndGgpe2Zvcih2YXIgZD1hWzBdLGM9YVthLmxlbmd0aC0xXSxlPVtkXTtkIT09Yzspe2Q9ZC5uZXh0U2libGluZztpZighZClyZXR1cm47ZS5wdXNoKGQpfUFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYSxbMCxhLmxlbmd0aF0uY29uY2F0KGUpKX1yZXR1cm4gYX1mdW5jdGlvbiBTKGEsYixjLGUsZil7dmFyIGc9TWF0aC5taW4sXG5oPU1hdGgubWF4LGs9W10sbCxuPWEubGVuZ3RoLHEscz1iLmxlbmd0aCx2PXMtbnx8MSxHPW4rcysxLEosQSx6O2ZvcihsPTA7bDw9bjtsKyspe0E9SjtrLnB1c2goSj1bXSk7ej1nKHMsbCt2KTtmb3IocT1oKDAsbC0xKTtxPD16O3ErKylKW3FdPXE/bD9hW2wtMV09PT1iW3EtMV0/QVtxLTFdOmcoQVtxXXx8RyxKW3EtMV18fEcpKzE6cSsxOmwrMX1nPVtdO2g9W107dj1bXTtsPW47Zm9yKHE9cztsfHxxOylzPWtbbF1bcV0tMSxxJiZzPT09a1tsXVtxLTFdP2gucHVzaChnW2cubGVuZ3RoXT17c3RhdHVzOmMsdmFsdWU6YlstLXFdLGluZGV4OnF9KTpsJiZzPT09a1tsLTFdW3FdP3YucHVzaChnW2cubGVuZ3RoXT17c3RhdHVzOmUsdmFsdWU6YVstLWxdLGluZGV4Omx9KTooZy5wdXNoKHtzdGF0dXM6XCJyZXRhaW5lZFwiLHZhbHVlOmJbLS1xXX0pLC0tbCk7aWYoaC5sZW5ndGgmJnYubGVuZ3RoKXthPTEwKm47dmFyIHQ7Zm9yKGI9Yz0wOyhmfHxiPGEpJiYodD1oW2NdKTtjKyspe2ZvcihlPVxuMDtrPXZbZV07ZSsrKWlmKHQudmFsdWU9PT1rLnZhbHVlKXt0Lm1vdmVkPWsuaW5kZXg7ay5tb3ZlZD10LmluZGV4O3Yuc3BsaWNlKGUsMSk7Yj1lPTA7YnJlYWt9Yis9ZX19cmV0dXJuIGcucmV2ZXJzZSgpfWZ1bmN0aW9uIFQoYSxkLGMsZSxmKXtmPWZ8fHt9O3ZhciBnPWEmJk4oYSksZz1nJiZnLm93bmVyRG9jdW1lbnQsaD1mLnRlbXBsYXRlRW5naW5lfHxPO2IuemEudmIoYyxoLGcpO2M9aC5yZW5kZXJUZW1wbGF0ZShjLGUsZixnKTsoXCJudW1iZXJcIiE9dHlwZW9mIGMubGVuZ3RofHwwPGMubGVuZ3RoJiZcIm51bWJlclwiIT10eXBlb2YgY1swXS5ub2RlVHlwZSkmJmooRXJyb3IoXCJUZW1wbGF0ZSBlbmdpbmUgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgRE9NIG5vZGVzXCIpKTtnPXI7c3dpdGNoKGQpe2Nhc2UgXCJyZXBsYWNlQ2hpbGRyZW5cIjpiLmUuTihhLGMpO2c9bTticmVhaztjYXNlIFwicmVwbGFjZU5vZGVcIjpiLmEuWWEoYSxjKTtnPW07YnJlYWs7Y2FzZSBcImlnbm9yZVRhcmdldE5vZGVcIjpicmVhaztcbmRlZmF1bHQ6aihFcnJvcihcIlVua25vd24gcmVuZGVyTW9kZTogXCIrZCkpfWcmJihVKGMsZSksZi5hZnRlclJlbmRlciYmYi5yLksoZi5hZnRlclJlbmRlcixwLFtjLGUuJGRhdGFdKSk7cmV0dXJuIGN9ZnVuY3Rpb24gTihhKXtyZXR1cm4gYS5ub2RlVHlwZT9hOjA8YS5sZW5ndGg/YVswXTpwfWZ1bmN0aW9uIFUoYSxkKXtpZihhLmxlbmd0aCl7dmFyIGM9YVswXSxlPWFbYS5sZW5ndGgtMV07VihjLGUsZnVuY3Rpb24oYSl7Yi5EYShkLGEpfSk7VihjLGUsZnVuY3Rpb24oYSl7Yi5zLmliKGEsW2RdKX0pfX1mdW5jdGlvbiBWKGEsZCxjKXt2YXIgZTtmb3IoZD1iLmUubmV4dFNpYmxpbmcoZCk7YSYmKGU9YSkhPT1kOylhPWIuZS5uZXh0U2libGluZyhlKSwoMT09PWUubm9kZVR5cGV8fDg9PT1lLm5vZGVUeXBlKSYmYyhlKX1mdW5jdGlvbiBXKGEsZCxjKXthPWIuZy5hYShhKTtmb3IodmFyIGU9Yi5nLlEsZj0wO2Y8YS5sZW5ndGg7ZisrKXt2YXIgZz1hW2ZdLmtleTtpZihlLmhhc093blByb3BlcnR5KGcpKXt2YXIgaD1cbmVbZ107XCJmdW5jdGlvblwiPT09dHlwZW9mIGg/KGc9aChhW2ZdLnZhbHVlKSkmJmooRXJyb3IoZykpOmh8fGooRXJyb3IoXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnXCIrZytcIicgYmluZGluZyB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiKSl9fWE9XCJrby5fX3RyX2FtYnRucyhmdW5jdGlvbigkY29udGV4dCwkZWxlbWVudCl7cmV0dXJuKGZ1bmN0aW9uKCl7cmV0dXJueyBcIitiLmcuYmEoYSkrXCIgfSB9KSgpfSlcIjtyZXR1cm4gYy5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2soYSkrZH1mdW5jdGlvbiBYKGEsZCxjLGUpe2Z1bmN0aW9uIGYoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGtbYV19fWZ1bmN0aW9uIGcoKXtyZXR1cm4ga312YXIgaD0wLGssbDtiLmooZnVuY3Rpb24oKXt2YXIgbj1jJiZjIGluc3RhbmNlb2YgYi56P2M6bmV3IGIueihiLmEuZChjKSkscT1uLiRkYXRhO2UmJmIuZWIoYSxuKTtpZihrPShcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP1xuZChuLGEpOmQpfHxiLkouaW5zdGFuY2UuZ2V0QmluZGluZ3MoYSxuKSl7aWYoMD09PWgpe2g9MTtmb3IodmFyIHMgaW4gayl7dmFyIHY9Yi5jW3NdO3YmJjg9PT1hLm5vZGVUeXBlJiYhYi5lLklbc10mJmooRXJyb3IoXCJUaGUgYmluZGluZyAnXCIrcytcIicgY2Fubm90IGJlIHVzZWQgd2l0aCB2aXJ0dWFsIGVsZW1lbnRzXCIpKTtpZih2JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2LmluaXQmJih2PSgwLHYuaW5pdCkoYSxmKHMpLGcscSxuKSkmJnYuY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MpbCE9PUkmJmooRXJyb3IoXCJNdWx0aXBsZSBiaW5kaW5ncyAoXCIrbCtcIiBhbmQgXCIrcytcIikgYXJlIHRyeWluZyB0byBjb250cm9sIGRlc2NlbmRhbnQgYmluZGluZ3Mgb2YgdGhlIHNhbWUgZWxlbWVudC4gWW91IGNhbm5vdCB1c2UgdGhlc2UgYmluZGluZ3MgdG9nZXRoZXIgb24gdGhlIHNhbWUgZWxlbWVudC5cIikpLGw9c31oPTJ9aWYoMj09PWgpZm9yKHMgaW4gaykodj1iLmNbc10pJiZcImZ1bmN0aW9uXCI9PVxudHlwZW9mIHYudXBkYXRlJiYoMCx2LnVwZGF0ZSkoYSxmKHMpLGcscSxuKX19LHAse1c6YX0pO3JldHVybntOYjpsPT09SX19ZnVuY3Rpb24gWShhLGQsYyl7dmFyIGU9bSxmPTE9PT1kLm5vZGVUeXBlO2YmJmIuZS5UYShkKTtpZihmJiZjfHxiLkouaW5zdGFuY2Uubm9kZUhhc0JpbmRpbmdzKGQpKWU9WChkLHAsYSxjKS5OYjtlJiZaKGEsZCwhZil9ZnVuY3Rpb24gWihhLGQsYyl7Zm9yKHZhciBlPWIuZS5maXJzdENoaWxkKGQpO2Q9ZTspZT1iLmUubmV4dFNpYmxpbmcoZCksWShhLGQsYyl9ZnVuY3Rpb24gJChhLGIpe3ZhciBjPWFhKGEsYik7cmV0dXJuIGM/MDxjLmxlbmd0aD9jW2MubGVuZ3RoLTFdLm5leHRTaWJsaW5nOmEubmV4dFNpYmxpbmc6cH1mdW5jdGlvbiBhYShhLGIpe2Zvcih2YXIgYz1hLGU9MSxmPVtdO2M9Yy5uZXh0U2libGluZzspe2lmKEgoYykmJihlLS0sMD09PWUpKXJldHVybiBmO2YucHVzaChjKTtCKGMpJiZlKyt9Ynx8aihFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiK1xuYS5ub2RlVmFsdWUpKTtyZXR1cm4gcH1mdW5jdGlvbiBIKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoSz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGlhKX1mdW5jdGlvbiBCKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoSz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGphKX1mdW5jdGlvbiBQKGEsYil7Zm9yKHZhciBjPXA7YSE9YzspYz1hLGE9YS5yZXBsYWNlKGthLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGJbY119KTtyZXR1cm4gYX1mdW5jdGlvbiBsYSgpe3ZhciBhPVtdLGQ9W107dGhpcy5zYXZlPWZ1bmN0aW9uKGMsZSl7dmFyIGY9Yi5hLmkoYSxjKTswPD1mP2RbZl09ZTooYS5wdXNoKGMpLGQucHVzaChlKSl9O3RoaXMuZ2V0PWZ1bmN0aW9uKGMpe2M9Yi5hLmkoYSxjKTtyZXR1cm4gMDw9Yz9kW2NdOkl9fWZ1bmN0aW9uIGJhKGEsYixjKXtmdW5jdGlvbiBlKGUpe3ZhciBnPWIoYVtlXSk7c3dpdGNoKHR5cGVvZiBnKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcImZ1bmN0aW9uXCI6ZltlXT1cbmc7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJ1bmRlZmluZWRcIjp2YXIgaD1jLmdldChnKTtmW2VdPWghPT1JP2g6YmEoZyxiLGMpfX1jPWN8fG5ldyBsYTthPWIoYSk7aWYoIShcIm9iamVjdFwiPT10eXBlb2YgYSYmYSE9PXAmJmEhPT1JJiYhKGEgaW5zdGFuY2VvZiBEYXRlKSkpcmV0dXJuIGE7dmFyIGY9YSBpbnN0YW5jZW9mIEFycmF5P1tdOnt9O2Muc2F2ZShhLGYpO3ZhciBnPWE7aWYoZyBpbnN0YW5jZW9mIEFycmF5KXtmb3IodmFyIGg9MDtoPGcubGVuZ3RoO2grKyllKGgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGcudG9KU09OJiZlKFwidG9KU09OXCIpfWVsc2UgZm9yKGggaW4gZyllKGgpO3JldHVybiBmfWZ1bmN0aW9uIGNhKGEsZCl7aWYoYSlpZig4PT1hLm5vZGVUeXBlKXt2YXIgYz1iLnMuVWEoYS5ub2RlVmFsdWUpO2MhPXAmJmQucHVzaCh7c2I6YSxGYjpjfSl9ZWxzZSBpZigxPT1hLm5vZGVUeXBlKWZvcih2YXIgYz0wLGU9YS5jaGlsZE5vZGVzLGY9ZS5sZW5ndGg7YzxmO2MrKyljYShlW2NdLFxuZCl9ZnVuY3Rpb24gUShhLGQsYyxlKXtiLmNbYV09e2luaXQ6ZnVuY3Rpb24oYSl7Yi5hLmYuc2V0KGEsZGEse30pO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczptfX0sdXBkYXRlOmZ1bmN0aW9uKGEsZyxoLGssbCl7aD1iLmEuZi5nZXQoYSxkYSk7Zz1iLmEuZChnKCkpO2s9IWMhPT0hZzt2YXIgbj0haC5aYTtpZihufHxkfHxrIT09aC5xYiluJiYoaC5aYT1iLmEuSWEoYi5lLmNoaWxkTm9kZXMoYSksbSkpLGs/KG58fGIuZS5OKGEsYi5hLklhKGguWmEpKSxiLkVhKGU/ZShsLGcpOmwsYSkpOmIuZS5ZKGEpLGgucWI9a319O2IuZy5RW2FdPXI7Yi5lLklbYV09bX1mdW5jdGlvbiBlYShhLGQsYyl7YyYmZCE9PWIuay5xKGEpJiZiLmsuVChhLGQpO2QhPT1iLmsucShhKSYmYi5yLksoYi5hLkJhLHAsW2EsXCJjaGFuZ2VcIl0pfXZhciBiPVwidW5kZWZpbmVkXCIhPT10eXBlb2Ygdz93Ont9O2IuYj1mdW5jdGlvbihhLGQpe2Zvcih2YXIgYz1hLnNwbGl0KFwiLlwiKSxlPWIsZj0wO2Y8XG5jLmxlbmd0aC0xO2YrKyllPWVbY1tmXV07ZVtjW2MubGVuZ3RoLTFdXT1kfTtiLnA9ZnVuY3Rpb24oYSxiLGMpe2FbYl09Y307Yi52ZXJzaW9uPVwiMi4yLjFcIjtiLmIoXCJ2ZXJzaW9uXCIsYi52ZXJzaW9uKTtiLmE9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGQpe2lmKFwiaW5wdXRcIiE9PWIuYS51KGEpfHwhYS50eXBlfHxcImNsaWNrXCIhPWQudG9Mb3dlckNhc2UoKSlyZXR1cm4gcjt2YXIgYz1hLnR5cGU7cmV0dXJuXCJjaGVja2JveFwiPT1jfHxcInJhZGlvXCI9PWN9dmFyIGQ9L14oXFxzfFxcdTAwQTApK3woXFxzfFxcdTAwQTApKyQvZyxjPXt9LGU9e307Y1svRmlyZWZveFxcLzIvaS50ZXN0KGdhLnVzZXJBZ2VudCk/XCJLZXlib2FyZEV2ZW50XCI6XCJVSUV2ZW50c1wiXT1bXCJrZXl1cFwiLFwia2V5ZG93blwiLFwia2V5cHJlc3NcIl07Yy5Nb3VzZUV2ZW50cz1cImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIuc3BsaXQoXCIgXCIpO1xuZm9yKHZhciBmIGluIGMpe3ZhciBnPWNbZl07aWYoZy5sZW5ndGgpZm9yKHZhciBoPTAsaz1nLmxlbmd0aDtoPGs7aCsrKWVbZ1toXV09Zn12YXIgbD17cHJvcGVydHljaGFuZ2U6bX0sbixjPTM7Zj15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGc9Zi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlcIik7Zi5pbm5lckhUTUw9XCJcXHgzYyEtLVtpZiBndCBJRSBcIisgKytjK1wiXT48aT48L2k+PCFbZW5kaWZdLS1cXHgzZVwiLGdbMF07KTtuPTQ8Yz9jOkk7cmV0dXJue05hOltcImF1dGhlbnRpY2l0eV90b2tlblwiLC9eX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4oXy4qKT8kL10sbzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgZD0wLGM9YS5sZW5ndGg7ZDxjO2QrKyliKGFbZF0pfSxpOmZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmluZGV4T2YpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiKTtmb3IodmFyIGQ9MCxjPWEubGVuZ3RoO2Q8XG5jO2QrKylpZihhW2RdPT09YilyZXR1cm4gZDtyZXR1cm4tMX0sbGI6ZnVuY3Rpb24oYSxiLGQpe2Zvcih2YXIgYz0wLGU9YS5sZW5ndGg7YzxlO2MrKylpZihiLmNhbGwoZCxhW2NdKSlyZXR1cm4gYVtjXTtyZXR1cm4gcH0sZ2E6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuaShhLGQpOzA8PWMmJmEuc3BsaWNlKGMsMSl9LEdhOmZ1bmN0aW9uKGEpe2E9YXx8W107Zm9yKHZhciBkPVtdLGM9MCxlPWEubGVuZ3RoO2M8ZTtjKyspMD5iLmEuaShkLGFbY10pJiZkLnB1c2goYVtjXSk7cmV0dXJuIGR9LFY6ZnVuY3Rpb24oYSxiKXthPWF8fFtdO2Zvcih2YXIgZD1bXSxjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWQucHVzaChiKGFbY10pKTtyZXR1cm4gZH0sZmE6ZnVuY3Rpb24oYSxiKXthPWF8fFtdO2Zvcih2YXIgZD1bXSxjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWIoYVtjXSkmJmQucHVzaChhW2NdKTtyZXR1cm4gZH0sUDpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxcbmIpO2Vsc2UgZm9yKHZhciBkPTAsYz1iLmxlbmd0aDtkPGM7ZCsrKWEucHVzaChiW2RdKTtyZXR1cm4gYX0sZXh0ZW5kOmZ1bmN0aW9uKGEsYil7aWYoYilmb3IodmFyIGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiYoYVtkXT1iW2RdKTtyZXR1cm4gYX0sa2E6ZnVuY3Rpb24oYSl7Zm9yKDthLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlTm9kZShhLmZpcnN0Q2hpbGQpfSxIYjpmdW5jdGlvbihhKXthPWIuYS5MKGEpO2Zvcih2YXIgZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz0wLGU9YS5sZW5ndGg7YzxlO2MrKylkLmFwcGVuZENoaWxkKGIuQShhW2NdKSk7cmV0dXJuIGR9LElhOmZ1bmN0aW9uKGEsZCl7Zm9yKHZhciBjPTAsZT1hLmxlbmd0aCxnPVtdO2M8ZTtjKyspe3ZhciBmPWFbY10uY2xvbmVOb2RlKG0pO2cucHVzaChkP2IuQShmKTpmKX1yZXR1cm4gZ30sTjpmdW5jdGlvbihhLGQpe2IuYS5rYShhKTtpZihkKWZvcih2YXIgYz0wLGU9ZC5sZW5ndGg7YzxlO2MrKylhLmFwcGVuZENoaWxkKGRbY10pfSxcbllhOmZ1bmN0aW9uKGEsZCl7dmFyIGM9YS5ub2RlVHlwZT9bYV06YTtpZigwPGMubGVuZ3RoKXtmb3IodmFyIGU9Y1swXSxnPWUucGFyZW50Tm9kZSxmPTAsaD1kLmxlbmd0aDtmPGg7ZisrKWcuaW5zZXJ0QmVmb3JlKGRbZl0sZSk7Zj0wO2ZvcihoPWMubGVuZ3RoO2Y8aDtmKyspYi5yZW1vdmVOb2RlKGNbZl0pfX0sYmI6ZnVuY3Rpb24oYSxiKXs3Pm4/YS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLGIpOmEuc2VsZWN0ZWQ9Yn0sRDpmdW5jdGlvbihhKXtyZXR1cm4oYXx8XCJcIikucmVwbGFjZShkLFwiXCIpfSxSYjpmdW5jdGlvbihhLGQpe2Zvcih2YXIgYz1bXSxlPShhfHxcIlwiKS5zcGxpdChkKSxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKXt2YXIgaD1iLmEuRChlW2ZdKTtcIlwiIT09aCYmYy5wdXNoKGgpfXJldHVybiBjfSxPYjpmdW5jdGlvbihhLGIpe2E9YXx8XCJcIjtyZXR1cm4gYi5sZW5ndGg+YS5sZW5ndGg/cjphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LHRiOmZ1bmN0aW9uKGEsYil7aWYoYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbilyZXR1cm4gMTY9PVxuKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSkmMTYpO2Zvcig7YSE9cDspe2lmKGE9PWIpcmV0dXJuIG07YT1hLnBhcmVudE5vZGV9cmV0dXJuIHJ9LFg6ZnVuY3Rpb24oYSl7cmV0dXJuIGIuYS50YihhLGEub3duZXJEb2N1bWVudCl9LHU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LG46ZnVuY3Rpb24oYixkLGMpe3ZhciBlPW4mJmxbZF07aWYoIWUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKXtpZihhKGIsZCkpe3ZhciBmPWM7Yz1mdW5jdGlvbihhLGIpe3ZhciBkPXRoaXMuY2hlY2tlZDtiJiYodGhpcy5jaGVja2VkPWIubmIhPT1tKTtmLmNhbGwodGhpcyxhKTt0aGlzLmNoZWNrZWQ9ZH19RihiKS5iaW5kKGQsYyl9ZWxzZSFlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmFkZEV2ZW50TGlzdGVuZXI/Yi5hZGRFdmVudExpc3RlbmVyKGQsYyxyKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5hdHRhY2hFdmVudD9iLmF0dGFjaEV2ZW50KFwib25cIitcbmQsZnVuY3Rpb24oYSl7Yy5jYWxsKGIsYSl9KTpqKEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYWRkRXZlbnRMaXN0ZW5lciBvciBhdHRhY2hFdmVudFwiKSl9LEJhOmZ1bmN0aW9uKGIsZCl7KCFifHwhYi5ub2RlVHlwZSkmJmooRXJyb3IoXCJlbGVtZW50IG11c3QgYmUgYSBET00gbm9kZSB3aGVuIGNhbGxpbmcgdHJpZ2dlckV2ZW50XCIpKTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgRil7dmFyIGM9W107YShiLGQpJiZjLnB1c2goe25iOmIuY2hlY2tlZH0pO0YoYikudHJpZ2dlcihkLGMpfWVsc2VcImZ1bmN0aW9uXCI9PXR5cGVvZiB5LmNyZWF0ZUV2ZW50P1wiZnVuY3Rpb25cIj09dHlwZW9mIGIuZGlzcGF0Y2hFdmVudD8oYz15LmNyZWF0ZUV2ZW50KGVbZF18fFwiSFRNTEV2ZW50c1wiKSxjLmluaXRFdmVudChkLG0sbSx4LDAsMCwwLDAsMCxyLHIscixyLDAsYiksYi5kaXNwYXRjaEV2ZW50KGMpKTpqKEVycm9yKFwiVGhlIHN1cHBsaWVkIGVsZW1lbnQgZG9lc24ndCBzdXBwb3J0IGRpc3BhdGNoRXZlbnRcIikpOlxuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZmlyZUV2ZW50PyhhKGIsZCkmJihiLmNoZWNrZWQ9Yi5jaGVja2VkIT09bSksYi5maXJlRXZlbnQoXCJvblwiK2QpKTpqKEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdHJpZ2dlcmluZyBldmVudHNcIikpfSxkOmZ1bmN0aW9uKGEpe3JldHVybiBiLiQoYSk/YSgpOmF9LHVhOmZ1bmN0aW9uKGEpe3JldHVybiBiLiQoYSk/YS50KCk6YX0sZGE6ZnVuY3Rpb24oYSxkLGMpe2lmKGQpe3ZhciBlPS9bXFx3LV0rL2csZj1hLmNsYXNzTmFtZS5tYXRjaChlKXx8W107Yi5hLm8oZC5tYXRjaChlKSxmdW5jdGlvbihhKXt2YXIgZD1iLmEuaShmLGEpOzA8PWQ/Y3x8Zi5zcGxpY2UoZCwxKTpjJiZmLnB1c2goYSl9KTthLmNsYXNzTmFtZT1mLmpvaW4oXCIgXCIpfX0sY2I6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKTtpZihjPT09cHx8Yz09PUkpYz1cIlwiO2lmKDM9PT1hLm5vZGVUeXBlKWEuZGF0YT1jO2Vsc2V7dmFyIGU9Yi5lLmZpcnN0Q2hpbGQoYSk7XG4hZXx8MyE9ZS5ub2RlVHlwZXx8Yi5lLm5leHRTaWJsaW5nKGUpP2IuZS5OKGEsW3kuY3JlYXRlVGV4dE5vZGUoYyldKTplLmRhdGE9YztiLmEud2IoYSl9fSxhYjpmdW5jdGlvbihhLGIpe2EubmFtZT1iO2lmKDc+PW4pdHJ5e2EubWVyZ2VBdHRyaWJ1dGVzKHkuY3JlYXRlRWxlbWVudChcIjxpbnB1dCBuYW1lPSdcIithLm5hbWUrXCInLz5cIikscil9Y2F0Y2goZCl7fX0sd2I6ZnVuY3Rpb24oYSl7OTw9biYmKGE9MT09YS5ub2RlVHlwZT9hOmEucGFyZW50Tm9kZSxhLnN0eWxlJiYoYS5zdHlsZS56b29tPWEuc3R5bGUuem9vbSkpfSx1YjpmdW5jdGlvbihhKXtpZig5PD1uKXt2YXIgYj1hLnN0eWxlLndpZHRoO2Euc3R5bGUud2lkdGg9MDthLnN0eWxlLndpZHRoPWJ9fSxMYjpmdW5jdGlvbihhLGQpe2E9Yi5hLmQoYSk7ZD1iLmEuZChkKTtmb3IodmFyIGM9W10sZT1hO2U8PWQ7ZSsrKWMucHVzaChlKTtyZXR1cm4gY30sTDpmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sZD0wLGM9YS5sZW5ndGg7ZDxcbmM7ZCsrKWIucHVzaChhW2RdKTtyZXR1cm4gYn0sUGI6Nj09PW4sUWI6Nz09PW4sWjpuLE9hOmZ1bmN0aW9uKGEsZCl7Zm9yKHZhciBjPWIuYS5MKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGIuYS5MKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKSkpLGU9XCJzdHJpbmdcIj09dHlwZW9mIGQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZT09PWR9OmZ1bmN0aW9uKGEpe3JldHVybiBkLnRlc3QoYS5uYW1lKX0sZj1bXSxnPWMubGVuZ3RoLTE7MDw9ZztnLS0pZShjW2ddKSYmZi5wdXNoKGNbZ10pO3JldHVybiBmfSxJYjpmdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYSYmKGE9Yi5hLkQoYSkpP3guSlNPTiYmeC5KU09OLnBhcnNlP3guSlNPTi5wYXJzZShhKToobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiK2EpKSgpOnB9LHhhOmZ1bmN0aW9uKGEsZCxjKXsoXCJ1bmRlZmluZWRcIj09dHlwZW9mIEpTT058fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBKU09OLnN0cmluZ2lmeSkmJlxuaihFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpKTtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoYi5hLmQoYSksZCxjKX0sSmI6ZnVuY3Rpb24oYSxkLGMpe2M9Y3x8e307dmFyIGU9Yy5wYXJhbXN8fHt9LGY9Yy5pbmNsdWRlRmllbGRzfHx0aGlzLk5hLGc9YTtpZihcIm9iamVjdFwiPT10eXBlb2YgYSYmXCJmb3JtXCI9PT1iLmEudShhKSlmb3IodmFyIGc9YS5hY3Rpb24saD1mLmxlbmd0aC0xOzA8PWg7aC0tKWZvcih2YXIgaz1iLmEuT2EoYSxmW2hdKSxsPWsubGVuZ3RoLTE7MDw9bDtsLS0pZVtrW2xdLm5hbWVdPWtbbF0udmFsdWU7ZD1iLmEuZChkKTt2YXIgbj15LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xubi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO24uYWN0aW9uPWc7bi5tZXRob2Q9XCJwb3N0XCI7Zm9yKHZhciB3IGluIGQpYT15LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLm5hbWU9dyxhLnZhbHVlPWIuYS54YShiLmEuZChkW3ddKSksbi5hcHBlbmRDaGlsZChhKTtmb3IodyBpbiBlKWE9eS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS5uYW1lPXcsYS52YWx1ZT1lW3ddLG4uYXBwZW5kQ2hpbGQoYSk7eS5ib2R5LmFwcGVuZENoaWxkKG4pO2Muc3VibWl0dGVyP2Muc3VibWl0dGVyKG4pOm4uc3VibWl0KCk7c2V0VGltZW91dChmdW5jdGlvbigpe24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKX0sMCl9fX07Yi5iKFwidXRpbHNcIixiLmEpO2IuYihcInV0aWxzLmFycmF5Rm9yRWFjaFwiLGIuYS5vKTtiLmIoXCJ1dGlscy5hcnJheUZpcnN0XCIsYi5hLmxiKTtiLmIoXCJ1dGlscy5hcnJheUZpbHRlclwiLGIuYS5mYSk7Yi5iKFwidXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlc1wiLGIuYS5HYSk7Yi5iKFwidXRpbHMuYXJyYXlJbmRleE9mXCIsXG5iLmEuaSk7Yi5iKFwidXRpbHMuYXJyYXlNYXBcIixiLmEuVik7Yi5iKFwidXRpbHMuYXJyYXlQdXNoQWxsXCIsYi5hLlApO2IuYihcInV0aWxzLmFycmF5UmVtb3ZlSXRlbVwiLGIuYS5nYSk7Yi5iKFwidXRpbHMuZXh0ZW5kXCIsYi5hLmV4dGVuZCk7Yi5iKFwidXRpbHMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3RcIixiLmEuTmEpO2IuYihcInV0aWxzLmdldEZvcm1GaWVsZHNcIixiLmEuT2EpO2IuYihcInV0aWxzLnBlZWtPYnNlcnZhYmxlXCIsYi5hLnVhKTtiLmIoXCJ1dGlscy5wb3N0SnNvblwiLGIuYS5KYik7Yi5iKFwidXRpbHMucGFyc2VKc29uXCIsYi5hLkliKTtiLmIoXCJ1dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlclwiLGIuYS5uKTtiLmIoXCJ1dGlscy5zdHJpbmdpZnlKc29uXCIsYi5hLnhhKTtiLmIoXCJ1dGlscy5yYW5nZVwiLGIuYS5MYik7Yi5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYi5hLmRhKTtiLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixiLmEuQmEpO2IuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixcbmIuYS5kKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO2E9Yy5zaGlmdCgpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBiLmFwcGx5KGEsYy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpfX0pO2IuYS5mPW5ldyBmdW5jdGlvbigpe3ZhciBhPTAsZD1cIl9fa29fX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGM9e307cmV0dXJue2dldDpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5mLmxhKGEscik7cmV0dXJuIGM9PT1JP0k6Y1tkXX0sc2V0OmZ1bmN0aW9uKGEsZCxjKXtjPT09SSYmYi5hLmYubGEoYSxyKT09PUl8fChiLmEuZi5sYShhLG0pW2RdPWMpfSxsYTpmdW5jdGlvbihiLGYpe3ZhciBnPWJbZF07aWYoIWd8fCEoXCJudWxsXCIhPT1nJiZjW2ddKSl7aWYoIWYpcmV0dXJuIEk7Zz1iW2RdPVwia29cIitcbmErKztjW2ddPXt9fXJldHVybiBjW2ddfSxjbGVhcjpmdW5jdGlvbihhKXt2YXIgYj1hW2RdO3JldHVybiBiPyhkZWxldGUgY1tiXSxhW2RdPXAsbSk6cn19fTtiLmIoXCJ1dGlscy5kb21EYXRhXCIsYi5hLmYpO2IuYihcInV0aWxzLmRvbURhdGEuY2xlYXJcIixiLmEuZi5jbGVhcik7Yi5hLkY9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGQpe3ZhciBlPWIuYS5mLmdldChhLGMpO2U9PT1JJiZkJiYoZT1bXSxiLmEuZi5zZXQoYSxjLGUpKTtyZXR1cm4gZX1mdW5jdGlvbiBkKGMpe3ZhciBlPWEoYyxyKTtpZihlKWZvcih2YXIgZT1lLnNsaWNlKDApLGs9MDtrPGUubGVuZ3RoO2srKyllW2tdKGMpO2IuYS5mLmNsZWFyKGMpO1wiZnVuY3Rpb25cIj09dHlwZW9mIEYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEYuY2xlYW5EYXRhJiZGLmNsZWFuRGF0YShbY10pO2lmKGZbYy5ub2RlVHlwZV0pZm9yKGU9Yy5maXJzdENoaWxkO2M9ZTspZT1jLm5leHRTaWJsaW5nLDg9PT1jLm5vZGVUeXBlJiZkKGMpfVxudmFyIGM9XCJfX2tvX2RvbU5vZGVEaXNwb3NhbF9fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZT17MTptLDg6bSw5Om19LGY9ezE6bSw5Om19O3JldHVybntDYTpmdW5jdGlvbihiLGQpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGQmJmooRXJyb3IoXCJDYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2EoYixtKS5wdXNoKGQpfSxYYTpmdW5jdGlvbihkLGUpe3ZhciBmPWEoZCxyKTtmJiYoYi5hLmdhKGYsZSksMD09Zi5sZW5ndGgmJmIuYS5mLnNldChkLGMsSSkpfSxBOmZ1bmN0aW9uKGEpe2lmKGVbYS5ub2RlVHlwZV0mJihkKGEpLGZbYS5ub2RlVHlwZV0pKXt2YXIgYz1bXTtiLmEuUChjLGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKTtmb3IodmFyIGs9MCxsPWMubGVuZ3RoO2s8bDtrKyspZChjW2tdKX1yZXR1cm4gYX0scmVtb3ZlTm9kZTpmdW5jdGlvbihhKXtiLkEoYSk7YS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSl9fX07Yi5BPWIuYS5GLkE7Yi5yZW1vdmVOb2RlPVxuYi5hLkYucmVtb3ZlTm9kZTtiLmIoXCJjbGVhbk5vZGVcIixiLkEpO2IuYihcInJlbW92ZU5vZGVcIixiLnJlbW92ZU5vZGUpO2IuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbFwiLGIuYS5GKTtiLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrXCIsYi5hLkYuQ2EpO2IuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2tcIixiLmEuRi5YYSk7Yi5hLnRhPWZ1bmN0aW9uKGEpe3ZhciBkO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKWlmKEYucGFyc2VIVE1MKWQ9Ri5wYXJzZUhUTUwoYSk7ZWxzZXtpZigoZD1GLmNsZWFuKFthXSkpJiZkWzBdKXtmb3IoYT1kWzBdO2EucGFyZW50Tm9kZSYmMTEhPT1hLnBhcmVudE5vZGUubm9kZVR5cGU7KWE9YS5wYXJlbnROb2RlO2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfX1lbHNle3ZhciBjPWIuYS5EKGEpLnRvTG93ZXJDYXNlKCk7ZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jPWMubWF0Y2goL148KHRoZWFkfHRib2R5fHRmb290KS8pJiZbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdfHwhYy5pbmRleE9mKFwiPHRyXCIpJiZbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdfHwoIWMuaW5kZXhPZihcIjx0ZFwiKXx8IWMuaW5kZXhPZihcIjx0aFwiKSkmJlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl18fFswLFwiXCIsXCJcIl07YT1cImlnbm9yZWQ8ZGl2PlwiK2NbMV0rYStjWzJdK1wiPC9kaXY+XCI7Zm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIHguaW5uZXJTaGl2P2QuYXBwZW5kQ2hpbGQoeC5pbm5lclNoaXYoYSkpOmQuaW5uZXJIVE1MPWE7Y1swXS0tOylkPWQubGFzdENoaWxkO2Q9Yi5hLkwoZC5sYXN0Q2hpbGQuY2hpbGROb2Rlcyl9cmV0dXJuIGR9O2IuYS5jYT1mdW5jdGlvbihhLGQpe2IuYS5rYShhKTtkPWIuYS5kKGQpO2lmKGQhPT1wJiZkIT09SSlpZihcInN0cmluZ1wiIT10eXBlb2YgZCYmKGQ9ZC50b1N0cmluZygpKSxcblwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKUYoYSkuaHRtbChkKTtlbHNlIGZvcih2YXIgYz1iLmEudGEoZCksZT0wO2U8Yy5sZW5ndGg7ZSsrKWEuYXBwZW5kQ2hpbGQoY1tlXSl9O2IuYihcInV0aWxzLnBhcnNlSHRtbEZyYWdtZW50XCIsYi5hLnRhKTtiLmIoXCJ1dGlscy5zZXRIdG1sXCIsYi5hLmNhKTt2YXIgUj17fTtiLnM9e3JhOmZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGEmJmooRXJyb3IoXCJZb3UgY2FuIG9ubHkgcGFzcyBhIGZ1bmN0aW9uIHRvIGtvLm1lbW9pemF0aW9uLm1lbW9pemUoKVwiKSk7dmFyIGI9KDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKSsoNDI5NDk2NzI5NiooMStNYXRoLnJhbmRvbSgpKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1JbYl09YTtyZXR1cm5cIlxceDNjIS0tW2tvX21lbW86XCIrYitcIl0tLVxceDNlXCJ9LGhiOmZ1bmN0aW9uKGEsYil7dmFyIGM9UlthXTtjPT09SSYmaihFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIitcbmErXCIuIFBlcmhhcHMgaXQncyBhbHJlYWR5IGJlZW4gdW5tZW1vaXplZC5cIikpO3RyeXtyZXR1cm4gYy5hcHBseShwLGJ8fFtdKSxtfWZpbmFsbHl7ZGVsZXRlIFJbYV19fSxpYjpmdW5jdGlvbihhLGQpe3ZhciBjPVtdO2NhKGEsYyk7Zm9yKHZhciBlPTAsZj1jLmxlbmd0aDtlPGY7ZSsrKXt2YXIgZz1jW2VdLnNiLGg9W2ddO2QmJmIuYS5QKGgsZCk7Yi5zLmhiKGNbZV0uRmIsaCk7Zy5ub2RlVmFsdWU9XCJcIjtnLnBhcmVudE5vZGUmJmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnKX19LFVhOmZ1bmN0aW9uKGEpe3JldHVybihhPWEubWF0Y2goL15cXFtrb19tZW1vXFw6KC4qPylcXF0kLykpP2FbMV06cH19O2IuYihcIm1lbW9pemF0aW9uXCIsYi5zKTtiLmIoXCJtZW1vaXphdGlvbi5tZW1vaXplXCIsYi5zLnJhKTtiLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVcIixiLnMuaGIpO2IuYihcIm1lbW9pemF0aW9uLnBhcnNlTWVtb1RleHRcIixiLnMuVWEpO2IuYihcIm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50c1wiLFxuYi5zLmliKTtiLk1hPXt0aHJvdHRsZTpmdW5jdGlvbihhLGQpe2EudGhyb3R0bGVFdmFsdWF0aW9uPWQ7dmFyIGM9cDtyZXR1cm4gYi5qKHtyZWFkOmEsd3JpdGU6ZnVuY3Rpb24oYil7Y2xlYXJUaW1lb3V0KGMpO2M9c2V0VGltZW91dChmdW5jdGlvbigpe2EoYil9LGQpfX0pfSxub3RpZnk6ZnVuY3Rpb24oYSxkKXthLmVxdWFsaXR5Q29tcGFyZXI9XCJhbHdheXNcIj09ZD91KHIpOmIubS5mbi5lcXVhbGl0eUNvbXBhcmVyO3JldHVybiBhfX07Yi5iKFwiZXh0ZW5kZXJzXCIsYi5NYSk7Yi5mYj1mdW5jdGlvbihhLGQsYyl7dGhpcy50YXJnZXQ9YTt0aGlzLmhhPWQ7dGhpcy5yYj1jO2IucCh0aGlzLFwiZGlzcG9zZVwiLHRoaXMuQil9O2IuZmIucHJvdG90eXBlLkI9ZnVuY3Rpb24oKXt0aGlzLkNiPW07dGhpcy5yYigpfTtiLlM9ZnVuY3Rpb24oKXt0aGlzLnc9e307Yi5hLmV4dGVuZCh0aGlzLGIuUy5mbik7Yi5wKHRoaXMsXCJzdWJzY3JpYmVcIix0aGlzLnlhKTtiLnAodGhpcyxcImV4dGVuZFwiLFxudGhpcy5leHRlbmQpO2IucCh0aGlzLFwiZ2V0U3Vic2NyaXB0aW9uc0NvdW50XCIsdGhpcy55Yil9O2IuUy5mbj17eWE6ZnVuY3Rpb24oYSxkLGMpe2M9Y3x8XCJjaGFuZ2VcIjt2YXIgZT1uZXcgYi5mYih0aGlzLGQ/YS5iaW5kKGQpOmEsZnVuY3Rpb24oKXtiLmEuZ2EodGhpcy53W2NdLGUpfS5iaW5kKHRoaXMpKTt0aGlzLndbY118fCh0aGlzLndbY109W10pO3RoaXMud1tjXS5wdXNoKGUpO3JldHVybiBlfSxub3RpZnlTdWJzY3JpYmVyczpmdW5jdGlvbihhLGQpe2Q9ZHx8XCJjaGFuZ2VcIjt0aGlzLndbZF0mJmIuci5LKGZ1bmN0aW9uKCl7Yi5hLm8odGhpcy53W2RdLnNsaWNlKDApLGZ1bmN0aW9uKGIpe2ImJmIuQ2IhPT1tJiZiLmhhKGEpfSl9LHRoaXMpfSx5YjpmdW5jdGlvbigpe3ZhciBhPTAsYjtmb3IoYiBpbiB0aGlzLncpdGhpcy53Lmhhc093blByb3BlcnR5KGIpJiYoYSs9dGhpcy53W2JdLmxlbmd0aCk7cmV0dXJuIGF9LGV4dGVuZDpmdW5jdGlvbihhKXt2YXIgZD10aGlzO2lmKGEpZm9yKHZhciBjIGluIGEpe3ZhciBlPVxuYi5NYVtjXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYoZD1lKGQsYVtjXSkpfXJldHVybiBkfX07Yi5RYT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnlhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5vdGlmeVN1YnNjcmliZXJzfTtiLmIoXCJzdWJzY3JpYmFibGVcIixiLlMpO2IuYihcImlzU3Vic2NyaWJhYmxlXCIsYi5RYSk7dmFyIEM9W107Yi5yPXttYjpmdW5jdGlvbihhKXtDLnB1c2goe2hhOmEsTGE6W119KX0sZW5kOmZ1bmN0aW9uKCl7Qy5wb3AoKX0sV2E6ZnVuY3Rpb24oYSl7Yi5RYShhKXx8aihFcnJvcihcIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llc1wiKSk7aWYoMDxDLmxlbmd0aCl7dmFyIGQ9Q1tDLmxlbmd0aC0xXTtkJiYhKDA8PWIuYS5pKGQuTGEsYSkpJiYoZC5MYS5wdXNoKGEpLGQuaGEoYSkpfX0sSzpmdW5jdGlvbihhLGIsYyl7dHJ5e3JldHVybiBDLnB1c2gocCksYS5hcHBseShiLGN8fFtdKX1maW5hbGx5e0MucG9wKCl9fX07XG52YXIgbWE9e3VuZGVmaW5lZDptLFwiYm9vbGVhblwiOm0sbnVtYmVyOm0sc3RyaW5nOm19O2IubT1mdW5jdGlvbihhKXtmdW5jdGlvbiBkKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXtpZighZC5lcXVhbGl0eUNvbXBhcmVyfHwhZC5lcXVhbGl0eUNvbXBhcmVyKGMsYXJndW1lbnRzWzBdKSlkLkgoKSxjPWFyZ3VtZW50c1swXSxkLkcoKTtyZXR1cm4gdGhpc31iLnIuV2EoZCk7cmV0dXJuIGN9dmFyIGM9YTtiLlMuY2FsbChkKTtkLnQ9ZnVuY3Rpb24oKXtyZXR1cm4gY307ZC5HPWZ1bmN0aW9uKCl7ZC5ub3RpZnlTdWJzY3JpYmVycyhjKX07ZC5IPWZ1bmN0aW9uKCl7ZC5ub3RpZnlTdWJzY3JpYmVycyhjLFwiYmVmb3JlQ2hhbmdlXCIpfTtiLmEuZXh0ZW5kKGQsYi5tLmZuKTtiLnAoZCxcInBlZWtcIixkLnQpO2IucChkLFwidmFsdWVIYXNNdXRhdGVkXCIsZC5HKTtiLnAoZCxcInZhbHVlV2lsbE11dGF0ZVwiLGQuSCk7cmV0dXJuIGR9O2IubS5mbj17ZXF1YWxpdHlDb21wYXJlcjpmdW5jdGlvbihhLFxuYil7cmV0dXJuIGE9PT1wfHx0eXBlb2YgYSBpbiBtYT9hPT09YjpyfX07dmFyIEU9Yi5tLktiPVwiX19rb19wcm90b19fXCI7Yi5tLmZuW0VdPWIubTtiLm1hPWZ1bmN0aW9uKGEsZCl7cmV0dXJuIGE9PT1wfHxhPT09SXx8YVtFXT09PUk/cjphW0VdPT09ZD9tOmIubWEoYVtFXSxkKX07Yi4kPWZ1bmN0aW9uKGEpe3JldHVybiBiLm1hKGEsYi5tKX07Yi5SYT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhW0VdPT09Yi5tfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhW0VdPT09Yi5qJiZhLnpiP206cn07Yi5iKFwib2JzZXJ2YWJsZVwiLGIubSk7Yi5iKFwiaXNPYnNlcnZhYmxlXCIsYi4kKTtiLmIoXCJpc1dyaXRlYWJsZU9ic2VydmFibGVcIixiLlJhKTtiLlI9ZnVuY3Rpb24oYSl7MD09YXJndW1lbnRzLmxlbmd0aCYmKGE9W10pO2EhPT1wJiYoYSE9PUkmJiEoXCJsZW5ndGhcImluIGEpKSYmaihFcnJvcihcIlRoZSBhcmd1bWVudCBwYXNzZWQgd2hlbiBpbml0aWFsaXppbmcgYW4gb2JzZXJ2YWJsZSBhcnJheSBtdXN0IGJlIGFuIGFycmF5LCBvciBudWxsLCBvciB1bmRlZmluZWQuXCIpKTtcbnZhciBkPWIubShhKTtiLmEuZXh0ZW5kKGQsYi5SLmZuKTtyZXR1cm4gZH07Yi5SLmZuPXtyZW1vdmU6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXMudCgpLGM9W10sZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6ZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1hfSxmPTA7ZjxiLmxlbmd0aDtmKyspe3ZhciBnPWJbZl07ZShnKSYmKDA9PT1jLmxlbmd0aCYmdGhpcy5IKCksYy5wdXNoKGcpLGIuc3BsaWNlKGYsMSksZi0tKX1jLmxlbmd0aCYmdGhpcy5HKCk7cmV0dXJuIGN9LHJlbW92ZUFsbDpmdW5jdGlvbihhKXtpZihhPT09SSl7dmFyIGQ9dGhpcy50KCksYz1kLnNsaWNlKDApO3RoaXMuSCgpO2Quc3BsaWNlKDAsZC5sZW5ndGgpO3RoaXMuRygpO3JldHVybiBjfXJldHVybiFhP1tdOnRoaXMucmVtb3ZlKGZ1bmN0aW9uKGQpe3JldHVybiAwPD1iLmEuaShhLGQpfSl9LGRlc3Ryb3k6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy50KCksYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6ZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1cbmF9O3RoaXMuSCgpO2Zvcih2YXIgZT1iLmxlbmd0aC0xOzA8PWU7ZS0tKWMoYltlXSkmJihiW2VdLl9kZXN0cm95PW0pO3RoaXMuRygpfSxkZXN0cm95QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09ST90aGlzLmRlc3Ryb3kodShtKSk6IWE/W106dGhpcy5kZXN0cm95KGZ1bmN0aW9uKGQpe3JldHVybiAwPD1iLmEuaShhLGQpfSl9LGluZGV4T2Y6ZnVuY3Rpb24oYSl7dmFyIGQ9dGhpcygpO3JldHVybiBiLmEuaShkLGEpfSxyZXBsYWNlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5pbmRleE9mKGEpOzA8PWMmJih0aGlzLkgoKSx0aGlzLnQoKVtjXT1iLHRoaXMuRygpKX19O2IuYS5vKFwicG9wIHB1c2ggcmV2ZXJzZSBzaGlmdCBzb3J0IHNwbGljZSB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2IuUi5mblthXT1mdW5jdGlvbigpe3ZhciBiPXRoaXMudCgpO3RoaXMuSCgpO2I9YlthXS5hcHBseShiLGFyZ3VtZW50cyk7dGhpcy5HKCk7cmV0dXJuIGJ9fSk7Yi5hLm8oW1wic2xpY2VcIl0sXG5mdW5jdGlvbihhKXtiLlIuZm5bYV09ZnVuY3Rpb24oKXt2YXIgYj10aGlzKCk7cmV0dXJuIGJbYV0uYXBwbHkoYixhcmd1bWVudHMpfX0pO2IuYihcIm9ic2VydmFibGVBcnJheVwiLGIuUik7Yi5qPWZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKCl7Yi5hLm8oeixmdW5jdGlvbihhKXthLkIoKX0pO3o9W119ZnVuY3Rpb24gZigpe3ZhciBhPWgudGhyb3R0bGVFdmFsdWF0aW9uO2EmJjA8PWE/KGNsZWFyVGltZW91dCh0KSx0PXNldFRpbWVvdXQoZyxhKSk6ZygpfWZ1bmN0aW9uIGcoKXtpZighcSlpZihuJiZ3KCkpQSgpO2Vsc2V7cT1tO3RyeXt2YXIgYT1iLmEuVih6LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRhcmdldH0pO2Iuci5tYihmdW5jdGlvbihjKXt2YXIgZDswPD0oZD1iLmEuaShhLGMpKT9hW2RdPUk6ei5wdXNoKGMueWEoZikpfSk7Zm9yKHZhciBjPXMuY2FsbChkKSxlPWEubGVuZ3RoLTE7MDw9ZTtlLS0pYVtlXSYmei5zcGxpY2UoZSwxKVswXS5CKCk7bj1tO2gubm90aWZ5U3Vic2NyaWJlcnMobCxcblwiYmVmb3JlQ2hhbmdlXCIpO2w9Y31maW5hbGx5e2Iuci5lbmQoKX1oLm5vdGlmeVN1YnNjcmliZXJzKGwpO3E9cjt6Lmxlbmd0aHx8QSgpfX1mdW5jdGlvbiBoKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXJldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiB2P3YuYXBwbHkoZCxhcmd1bWVudHMpOmooRXJyb3IoXCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLlwiKSksdGhpcztufHxnKCk7Yi5yLldhKGgpO3JldHVybiBsfWZ1bmN0aW9uIGsoKXtyZXR1cm4hbnx8MDx6Lmxlbmd0aH12YXIgbCxuPXIscT1yLHM9YTtzJiZcIm9iamVjdFwiPT10eXBlb2Ygcz8oYz1zLHM9Yy5yZWFkKTooYz1jfHx7fSxzfHwocz1jLnJlYWQpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBzJiZqKEVycm9yKFwiUGFzcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGtvLmNvbXB1dGVkXCIpKTtcbnZhciB2PWMud3JpdGUsRz1jLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZHx8Yy5XfHxwLHc9Yy5kaXNwb3NlV2hlbnx8Yy5LYXx8dShyKSxBPWUsej1bXSx0PXA7ZHx8KGQ9Yy5vd25lcik7aC50PWZ1bmN0aW9uKCl7bnx8ZygpO3JldHVybiBsfTtoLnhiPWZ1bmN0aW9uKCl7cmV0dXJuIHoubGVuZ3RofTtoLnpiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLndyaXRlO2guQj1mdW5jdGlvbigpe0EoKX07aC5wYT1rO2IuUy5jYWxsKGgpO2IuYS5leHRlbmQoaCxiLmouZm4pO2IucChoLFwicGVla1wiLGgudCk7Yi5wKGgsXCJkaXNwb3NlXCIsaC5CKTtiLnAoaCxcImlzQWN0aXZlXCIsaC5wYSk7Yi5wKGgsXCJnZXREZXBlbmRlbmNpZXNDb3VudFwiLGgueGIpO2MuZGVmZXJFdmFsdWF0aW9uIT09bSYmZygpO2lmKEcmJmsoKSl7QT1mdW5jdGlvbigpe2IuYS5GLlhhKEcsYXJndW1lbnRzLmNhbGxlZSk7ZSgpfTtiLmEuRi5DYShHLEEpO3ZhciBEPXcsdz1mdW5jdGlvbigpe3JldHVybiFiLmEuWChHKXx8RCgpfX1yZXR1cm4gaH07XG5iLkJiPWZ1bmN0aW9uKGEpe3JldHVybiBiLm1hKGEsYi5qKX07dz1iLm0uS2I7Yi5qW3ddPWIubTtiLmouZm49e307Yi5qLmZuW3ddPWIuajtiLmIoXCJkZXBlbmRlbnRPYnNlcnZhYmxlXCIsYi5qKTtiLmIoXCJjb21wdXRlZFwiLGIuaik7Yi5iKFwiaXNDb21wdXRlZFwiLGIuQmIpO2IuZ2I9ZnVuY3Rpb24oYSl7MD09YXJndW1lbnRzLmxlbmd0aCYmaihFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIikpO3JldHVybiBiYShhLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYz0wO2IuJChhKSYmMTA+YztjKyspYT1hKCk7cmV0dXJuIGF9KX07Yi50b0pTT049ZnVuY3Rpb24oYSxkLGMpe2E9Yi5nYihhKTtyZXR1cm4gYi5hLnhhKGEsZCxjKX07Yi5iKFwidG9KU1wiLGIuZ2IpO2IuYihcInRvSlNPTlwiLGIudG9KU09OKTtiLms9e3E6ZnVuY3Rpb24oYSl7c3dpdGNoKGIuYS51KGEpKXtjYXNlIFwib3B0aW9uXCI6cmV0dXJuIGEuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX189PT1cbm0/Yi5hLmYuZ2V0KGEsYi5jLm9wdGlvbnMuc2EpOjc+PWIuYS5aP2EuZ2V0QXR0cmlidXRlTm9kZShcInZhbHVlXCIpLnNwZWNpZmllZD9hLnZhbHVlOmEudGV4dDphLnZhbHVlO2Nhc2UgXCJzZWxlY3RcIjpyZXR1cm4gMDw9YS5zZWxlY3RlZEluZGV4P2Iuay5xKGEub3B0aW9uc1thLnNlbGVjdGVkSW5kZXhdKTpJO2RlZmF1bHQ6cmV0dXJuIGEudmFsdWV9fSxUOmZ1bmN0aW9uKGEsZCl7c3dpdGNoKGIuYS51KGEpKXtjYXNlIFwib3B0aW9uXCI6c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwic3RyaW5nXCI6Yi5hLmYuc2V0KGEsYi5jLm9wdGlvbnMuc2EsSSk7XCJfX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfX1wiaW4gYSYmZGVsZXRlIGEuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX187YS52YWx1ZT1kO2JyZWFrO2RlZmF1bHQ6Yi5hLmYuc2V0KGEsYi5jLm9wdGlvbnMuc2EsZCksYS5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz1tLGEudmFsdWU9XCJudW1iZXJcIj09PXR5cGVvZiBkP1xuZDpcIlwifWJyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmb3IodmFyIGM9YS5vcHRpb25zLmxlbmd0aC0xOzA8PWM7Yy0tKWlmKGIuay5xKGEub3B0aW9uc1tjXSk9PWQpe2Euc2VsZWN0ZWRJbmRleD1jO2JyZWFrfWJyZWFrO2RlZmF1bHQ6aWYoZD09PXB8fGQ9PT1JKWQ9XCJcIjthLnZhbHVlPWR9fX07Yi5iKFwic2VsZWN0RXh0ZW5zaW9uc1wiLGIuayk7Yi5iKFwic2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWVcIixiLmsucSk7Yi5iKFwic2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlXCIsYi5rLlQpO3ZhciBrYT0vXFxAa29fdG9rZW5fKFxcZCspXFxAL2csbmE9W1widHJ1ZVwiLFwiZmFsc2VcIl0sb2E9L14oPzpbJF9hLXpdWyRcXHddKnwoLispKFxcLlxccypbJF9hLXpdWyRcXHddKnxcXFsuK1xcXSkpJC9pO2IuZz17UTpbXSxhYTpmdW5jdGlvbihhKXt2YXIgZD1iLmEuRChhKTtpZigzPmQubGVuZ3RoKXJldHVybltdO1wie1wiPT09ZC5jaGFyQXQoMCkmJihkPWQuc3Vic3RyaW5nKDEsZC5sZW5ndGgtMSkpO2E9W107Zm9yKHZhciBjPVxucCxlLGY9MDtmPGQubGVuZ3RoO2YrKyl7dmFyIGc9ZC5jaGFyQXQoZik7aWYoYz09PXApc3dpdGNoKGcpe2Nhc2UgJ1wiJzpjYXNlIFwiJ1wiOmNhc2UgXCIvXCI6Yz1mLGU9Z31lbHNlIGlmKGc9PWUmJlwiXFxcXFwiIT09ZC5jaGFyQXQoZi0xKSl7Zz1kLnN1YnN0cmluZyhjLGYrMSk7YS5wdXNoKGcpO3ZhciBoPVwiQGtvX3Rva2VuX1wiKyhhLmxlbmd0aC0xKStcIkBcIixkPWQuc3Vic3RyaW5nKDAsYykraCtkLnN1YnN0cmluZyhmKzEpLGY9Zi0oZy5sZW5ndGgtaC5sZW5ndGgpLGM9cH19ZT1jPXA7Zm9yKHZhciBrPTAsbD1wLGY9MDtmPGQubGVuZ3RoO2YrKyl7Zz1kLmNoYXJBdChmKTtpZihjPT09cClzd2l0Y2goZyl7Y2FzZSBcIntcIjpjPWY7bD1nO2U9XCJ9XCI7YnJlYWs7Y2FzZSBcIihcIjpjPWY7bD1nO2U9XCIpXCI7YnJlYWs7Y2FzZSBcIltcIjpjPWYsbD1nLGU9XCJdXCJ9Zz09PWw/aysrOmc9PT1lJiYoay0tLDA9PT1rJiYoZz1kLnN1YnN0cmluZyhjLGYrMSksYS5wdXNoKGcpLGg9XCJAa29fdG9rZW5fXCIrKGEubGVuZ3RoLVxuMSkrXCJAXCIsZD1kLnN1YnN0cmluZygwLGMpK2grZC5zdWJzdHJpbmcoZisxKSxmLT1nLmxlbmd0aC1oLmxlbmd0aCxjPXApKX1lPVtdO2Q9ZC5zcGxpdChcIixcIik7Yz0wO2ZvcihmPWQubGVuZ3RoO2M8ZjtjKyspaz1kW2NdLGw9ay5pbmRleE9mKFwiOlwiKSwwPGwmJmw8ay5sZW5ndGgtMT8oZz1rLnN1YnN0cmluZyhsKzEpLGUucHVzaCh7a2V5OlAoay5zdWJzdHJpbmcoMCxsKSxhKSx2YWx1ZTpQKGcsYSl9KSk6ZS5wdXNoKHt1bmtub3duOlAoayxhKX0pO3JldHVybiBlfSxiYTpmdW5jdGlvbihhKXt2YXIgZD1cInN0cmluZ1wiPT09dHlwZW9mIGE/Yi5nLmFhKGEpOmEsYz1bXTthPVtdO2Zvcih2YXIgZSxmPTA7ZT1kW2ZdO2YrKylpZigwPGMubGVuZ3RoJiZjLnB1c2goXCIsXCIpLGUua2V5KXt2YXIgZzthOntnPWUua2V5O3ZhciBoPWIuYS5EKGcpO3N3aXRjaChoLmxlbmd0aCYmaC5jaGFyQXQoMCkpe2Nhc2UgXCInXCI6Y2FzZSAnXCInOmJyZWFrIGE7ZGVmYXVsdDpnPVwiJ1wiK2grXCInXCJ9fWU9ZS52YWx1ZTtcbmMucHVzaChnKTtjLnB1c2goXCI6XCIpO2MucHVzaChlKTtlPWIuYS5EKGUpOzA8PWIuYS5pKG5hLGIuYS5EKGUpLnRvTG93ZXJDYXNlKCkpP2U9cjooaD1lLm1hdGNoKG9hKSxlPWg9PT1wP3I6aFsxXT9cIk9iamVjdChcIitoWzFdK1wiKVwiK2hbMl06ZSk7ZSYmKDA8YS5sZW5ndGgmJmEucHVzaChcIiwgXCIpLGEucHVzaChnK1wiIDogZnVuY3Rpb24oX19rb192YWx1ZSkgeyBcIitlK1wiID0gX19rb192YWx1ZTsgfVwiKSl9ZWxzZSBlLnVua25vd24mJmMucHVzaChlLnVua25vd24pO2Q9Yy5qb2luKFwiXCIpOzA8YS5sZW5ndGgmJihkPWQrXCIsICdfa29fcHJvcGVydHlfd3JpdGVycycgOiB7IFwiK2Euam9pbihcIlwiKStcIiB9IFwiKTtyZXR1cm4gZH0sRWI6ZnVuY3Rpb24oYSxkKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihiLmEuRChhW2NdLmtleSk9PWQpcmV0dXJuIG07cmV0dXJuIHJ9LGVhOmZ1bmN0aW9uKGEsZCxjLGUsZil7aWYoIWF8fCFiLlJhKGEpKXtpZigoYT1kKCkuX2tvX3Byb3BlcnR5X3dyaXRlcnMpJiZcbmFbY10pYVtjXShlKX1lbHNlKCFmfHxhLnQoKSE9PWUpJiZhKGUpfX07Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZ1wiLGIuZyk7Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNcIixiLmcuUSk7Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWxcIixiLmcuYWEpO2IuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzXCIsYi5nLmJhKTtiLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZ1wiLGIuZyk7Yi5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvblwiLGIuZy5iYSk7dmFyIEs9XCJcXHgzYyEtLXRlc3QtLVxceDNlXCI9PT15LmNyZWF0ZUNvbW1lbnQoXCJ0ZXN0XCIpLnRleHQsamE9Sz8vXlxceDNjIS0tXFxzKmtvKD86XFxzKyguK1xccypcXDpbXFxzXFxTXSopKT9cXHMqLS1cXHgzZSQvOi9eXFxzKmtvKD86XFxzKyguK1xccypcXDpbXFxzXFxTXSopKT9cXHMqJC8saWE9Sz8vXlxceDNjIS0tXFxzKlxcL2tvXFxzKi0tXFx4M2UkLzpcbi9eXFxzKlxcL2tvXFxzKiQvLHBhPXt1bDptLG9sOm19O2IuZT17STp7fSxjaGlsZE5vZGVzOmZ1bmN0aW9uKGEpe3JldHVybiBCKGEpP2FhKGEpOmEuY2hpbGROb2Rlc30sWTpmdW5jdGlvbihhKXtpZihCKGEpKXthPWIuZS5jaGlsZE5vZGVzKGEpO2Zvcih2YXIgZD0wLGM9YS5sZW5ndGg7ZDxjO2QrKyliLnJlbW92ZU5vZGUoYVtkXSl9ZWxzZSBiLmEua2EoYSl9LE46ZnVuY3Rpb24oYSxkKXtpZihCKGEpKXtiLmUuWShhKTtmb3IodmFyIGM9YS5uZXh0U2libGluZyxlPTAsZj1kLmxlbmd0aDtlPGY7ZSsrKWMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZFtlXSxjKX1lbHNlIGIuYS5OKGEsZCl9LFZhOmZ1bmN0aW9uKGEsYil7QihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGIsYS5uZXh0U2libGluZyk6YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKGIsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKGIpfSxQYTpmdW5jdGlvbihhLGQsYyl7Yz9CKGEpP2EucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZCxcbmMubmV4dFNpYmxpbmcpOmMubmV4dFNpYmxpbmc/YS5pbnNlcnRCZWZvcmUoZCxjLm5leHRTaWJsaW5nKTphLmFwcGVuZENoaWxkKGQpOmIuZS5WYShhLGQpfSxmaXJzdENoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiFCKGEpP2EuZmlyc3RDaGlsZDohYS5uZXh0U2libGluZ3x8SChhLm5leHRTaWJsaW5nKT9wOmEubmV4dFNpYmxpbmd9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGEpe0IoYSkmJihhPSQoYSkpO3JldHVybiBhLm5leHRTaWJsaW5nJiZIKGEubmV4dFNpYmxpbmcpP3A6YS5uZXh0U2libGluZ30samI6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9QihhKSk/YVsxXTpwfSxUYTpmdW5jdGlvbihhKXtpZihwYVtiLmEudShhKV0pe3ZhciBkPWEuZmlyc3RDaGlsZDtpZihkKXtkbyBpZigxPT09ZC5ub2RlVHlwZSl7dmFyIGM7Yz1kLmZpcnN0Q2hpbGQ7dmFyIGU9cDtpZihjKXtkbyBpZihlKWUucHVzaChjKTtlbHNlIGlmKEIoYykpe3ZhciBmPSQoYyxtKTtmP2M9ZjplPVtjXX1lbHNlIEgoYykmJlxuKGU9W2NdKTt3aGlsZShjPWMubmV4dFNpYmxpbmcpfWlmKGM9ZSl7ZT1kLm5leHRTaWJsaW5nO2ZvcihmPTA7ZjxjLmxlbmd0aDtmKyspZT9hLmluc2VydEJlZm9yZShjW2ZdLGUpOmEuYXBwZW5kQ2hpbGQoY1tmXSl9fXdoaWxlKGQ9ZC5uZXh0U2libGluZyl9fX19O2IuYihcInZpcnR1YWxFbGVtZW50c1wiLGIuZSk7Yi5iKFwidmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1wiLGIuZS5JKTtiLmIoXCJ2aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlXCIsYi5lLlkpO2IuYihcInZpcnR1YWxFbGVtZW50cy5pbnNlcnRBZnRlclwiLGIuZS5QYSk7Yi5iKFwidmlydHVhbEVsZW1lbnRzLnByZXBlbmRcIixiLmUuVmEpO2IuYihcInZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW5cIixiLmUuTik7Yi5KPWZ1bmN0aW9uKCl7dGhpcy5IYT17fX07Yi5hLmV4dGVuZChiLkoucHJvdG90eXBlLHtub2RlSGFzQmluZGluZ3M6ZnVuY3Rpb24oYSl7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgMTpyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIikhPVxucDtjYXNlIDg6cmV0dXJuIGIuZS5qYihhKSE9cDtkZWZhdWx0OnJldHVybiByfX0sZ2V0QmluZGluZ3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGEsYik7cmV0dXJuIGM/dGhpcy5wYXJzZUJpbmRpbmdzU3RyaW5nKGMsYixhKTpwfSxnZXRCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihhKXtzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBhLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKTtjYXNlIDg6cmV0dXJuIGIuZS5qYihhKTtkZWZhdWx0OnJldHVybiBwfX0scGFyc2VCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihhLGQsYyl7dHJ5e3ZhciBlO2lmKCEoZT10aGlzLkhhW2FdKSl7dmFyIGY9dGhpcy5IYSxnLGg9XCJ3aXRoKCRjb250ZXh0KXt3aXRoKCRkYXRhfHx7fSl7cmV0dXJue1wiK2IuZy5iYShhKStcIn19fVwiO2c9bmV3IEZ1bmN0aW9uKFwiJGNvbnRleHRcIixcIiRlbGVtZW50XCIsaCk7ZT1mW2FdPWd9cmV0dXJuIGUoZCxjKX1jYXRjaChrKXtqKEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbk1lc3NhZ2U6IFwiK1xuaytcIjtcXG5CaW5kaW5ncyB2YWx1ZTogXCIrYSkpfX19KTtiLkouaW5zdGFuY2U9bmV3IGIuSjtiLmIoXCJiaW5kaW5nUHJvdmlkZXJcIixiLkopO2IuYz17fTtiLno9ZnVuY3Rpb24oYSxkLGMpe2Q/KGIuYS5leHRlbmQodGhpcyxkKSx0aGlzLiRwYXJlbnRDb250ZXh0PWQsdGhpcy4kcGFyZW50PWQuJGRhdGEsdGhpcy4kcGFyZW50cz0oZC4kcGFyZW50c3x8W10pLnNsaWNlKDApLHRoaXMuJHBhcmVudHMudW5zaGlmdCh0aGlzLiRwYXJlbnQpKToodGhpcy4kcGFyZW50cz1bXSx0aGlzLiRyb290PWEsdGhpcy5rbz1iKTt0aGlzLiRkYXRhPWE7YyYmKHRoaXNbY109YSl9O2Iuei5wcm90b3R5cGUuY3JlYXRlQ2hpbGRDb250ZXh0PWZ1bmN0aW9uKGEsZCl7cmV0dXJuIG5ldyBiLnooYSx0aGlzLGQpfTtiLnoucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihhKXt2YXIgZD1iLmEuZXh0ZW5kKG5ldyBiLnosdGhpcyk7cmV0dXJuIGIuYS5leHRlbmQoZCxhKX07Yi5lYj1mdW5jdGlvbihhLGQpe2lmKDI9PVxuYXJndW1lbnRzLmxlbmd0aCliLmEuZi5zZXQoYSxcIl9fa29fYmluZGluZ0NvbnRleHRfX1wiLGQpO2Vsc2UgcmV0dXJuIGIuYS5mLmdldChhLFwiX19rb19iaW5kaW5nQ29udGV4dF9fXCIpfTtiLkZhPWZ1bmN0aW9uKGEsZCxjKXsxPT09YS5ub2RlVHlwZSYmYi5lLlRhKGEpO3JldHVybiBYKGEsZCxjLG0pfTtiLkVhPWZ1bmN0aW9uKGEsYil7KDE9PT1iLm5vZGVUeXBlfHw4PT09Yi5ub2RlVHlwZSkmJlooYSxiLG0pfTtiLkRhPWZ1bmN0aW9uKGEsYil7YiYmKDEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZSkmJmooRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKSk7Yj1ifHx4LmRvY3VtZW50LmJvZHk7WShhLGIsbSl9O2IuamE9ZnVuY3Rpb24oYSl7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgMTpjYXNlIDg6dmFyIGQ9Yi5lYihhKTtpZihkKXJldHVybiBkO1xuaWYoYS5wYXJlbnROb2RlKXJldHVybiBiLmphKGEucGFyZW50Tm9kZSl9cmV0dXJuIEl9O2IucGI9ZnVuY3Rpb24oYSl7cmV0dXJuKGE9Yi5qYShhKSk/YS4kZGF0YTpJfTtiLmIoXCJiaW5kaW5nSGFuZGxlcnNcIixiLmMpO2IuYihcImFwcGx5QmluZGluZ3NcIixiLkRhKTtiLmIoXCJhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c1wiLGIuRWEpO2IuYihcImFwcGx5QmluZGluZ3NUb05vZGVcIixiLkZhKTtiLmIoXCJjb250ZXh0Rm9yXCIsYi5qYSk7Yi5iKFwiZGF0YUZvclwiLGIucGIpO3ZhciBmYT17XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsXCJmb3JcIjpcImh0bWxGb3JcIn07Yi5jLmF0dHI9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSl8fHt9LGU7Zm9yKGUgaW4gYylpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIGY9Yi5hLmQoY1tlXSksZz1mPT09cnx8Zj09PXB8fGY9PT1JO2cmJmEucmVtb3ZlQXR0cmlidXRlKGUpOzg+PWIuYS5aJiZlIGluIGZhPyhlPWZhW2VdLGc/YS5yZW1vdmVBdHRyaWJ1dGUoZSk6XG5hW2VdPWYpOmd8fGEuc2V0QXR0cmlidXRlKGUsZi50b1N0cmluZygpKTtcIm5hbWVcIj09PWUmJmIuYS5hYihhLGc/XCJcIjpmLnRvU3RyaW5nKCkpfX19O2IuYy5jaGVja2VkPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtiLmEubihhLFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciBlO2lmKFwiY2hlY2tib3hcIj09YS50eXBlKWU9YS5jaGVja2VkO2Vsc2UgaWYoXCJyYWRpb1wiPT1hLnR5cGUmJmEuY2hlY2tlZCllPWEudmFsdWU7ZWxzZSByZXR1cm47dmFyIGY9ZCgpLGc9Yi5hLmQoZik7XCJjaGVja2JveFwiPT1hLnR5cGUmJmcgaW5zdGFuY2VvZiBBcnJheT8oZT1iLmEuaShnLGEudmFsdWUpLGEuY2hlY2tlZCYmMD5lP2YucHVzaChhLnZhbHVlKTohYS5jaGVja2VkJiYwPD1lJiZmLnNwbGljZShlLDEpKTpiLmcuZWEoZixjLFwiY2hlY2tlZFwiLGUsbSl9KTtcInJhZGlvXCI9PWEudHlwZSYmIWEubmFtZSYmYi5jLnVuaXF1ZU5hbWUuaW5pdChhLHUobSkpfSx1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKCkpO1xuXCJjaGVja2JveFwiPT1hLnR5cGU/YS5jaGVja2VkPWMgaW5zdGFuY2VvZiBBcnJheT8wPD1iLmEuaShjLGEudmFsdWUpOmM6XCJyYWRpb1wiPT1hLnR5cGUmJihhLmNoZWNrZWQ9YS52YWx1ZT09Yyl9fTtiLmMuY3NzPXt1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKCkpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBjKWZvcih2YXIgZSBpbiBjKXt2YXIgZj1iLmEuZChjW2VdKTtiLmEuZGEoYSxlLGYpfWVsc2UgYz1TdHJpbmcoY3x8XCJcIiksYi5hLmRhKGEsYS5fX2tvX19jc3NWYWx1ZSxyKSxhLl9fa29fX2Nzc1ZhbHVlPWMsYi5hLmRhKGEsYyxtKX19O2IuYy5lbmFibGU9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSk7YyYmYS5kaXNhYmxlZD9hLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpOiFjJiYhYS5kaXNhYmxlZCYmKGEuZGlzYWJsZWQ9bSl9fTtiLmMuZGlzYWJsZT17dXBkYXRlOmZ1bmN0aW9uKGEsZCl7Yi5jLmVuYWJsZS51cGRhdGUoYSxmdW5jdGlvbigpe3JldHVybiFiLmEuZChkKCkpfSl9fTtcbmIuYy5ldmVudD17aW5pdDpmdW5jdGlvbihhLGQsYyxlKXt2YXIgZj1kKCl8fHt9LGc7Zm9yKGcgaW4gZikoZnVuY3Rpb24oKXt2YXIgZj1nO1wic3RyaW5nXCI9PXR5cGVvZiBmJiZiLmEubihhLGYsZnVuY3Rpb24oYSl7dmFyIGcsbj1kKClbZl07aWYobil7dmFyIHE9YygpO3RyeXt2YXIgcz1iLmEuTChhcmd1bWVudHMpO3MudW5zaGlmdChlKTtnPW4uYXBwbHkoZSxzKX1maW5hbGx5e2chPT1tJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT1yKX1xW2YrXCJCdWJibGVcIl09PT1yJiYoYS5jYW5jZWxCdWJibGU9bSxhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKSl9fSl9KSgpfX07Yi5jLmZvcmVhY2g9e1NhOmZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBkPWEoKSxjPWIuYS51YShkKTtpZighY3x8XCJudW1iZXJcIj09dHlwZW9mIGMubGVuZ3RoKXJldHVybntmb3JlYWNoOmQsdGVtcGxhdGVFbmdpbmU6Yi5DLm9hfTtcbmIuYS5kKGQpO3JldHVybntmb3JlYWNoOmMuZGF0YSxhczpjLmFzLGluY2x1ZGVEZXN0cm95ZWQ6Yy5pbmNsdWRlRGVzdHJveWVkLGFmdGVyQWRkOmMuYWZ0ZXJBZGQsYmVmb3JlUmVtb3ZlOmMuYmVmb3JlUmVtb3ZlLGFmdGVyUmVuZGVyOmMuYWZ0ZXJSZW5kZXIsYmVmb3JlTW92ZTpjLmJlZm9yZU1vdmUsYWZ0ZXJNb3ZlOmMuYWZ0ZXJNb3ZlLHRlbXBsYXRlRW5naW5lOmIuQy5vYX19fSxpbml0OmZ1bmN0aW9uKGEsZCl7cmV0dXJuIGIuYy50ZW1wbGF0ZS5pbml0KGEsYi5jLmZvcmVhY2guU2EoZCkpfSx1cGRhdGU6ZnVuY3Rpb24oYSxkLGMsZSxmKXtyZXR1cm4gYi5jLnRlbXBsYXRlLnVwZGF0ZShhLGIuYy5mb3JlYWNoLlNhKGQpLGMsZSxmKX19O2IuZy5RLmZvcmVhY2g9cjtiLmUuSS5mb3JlYWNoPW07Yi5jLmhhc2ZvY3VzPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKGUpe2EuX19rb19oYXNmb2N1c1VwZGF0aW5nPW07dmFyIGY9YS5vd25lckRvY3VtZW50O1wiYWN0aXZlRWxlbWVudFwiaW5cbmYmJihlPWYuYWN0aXZlRWxlbWVudD09PWEpO2Y9ZCgpO2IuZy5lYShmLGMsXCJoYXNmb2N1c1wiLGUsbSk7YS5fX2tvX2hhc2ZvY3VzVXBkYXRpbmc9cn12YXIgZj1lLmJpbmQocCxtKSxnPWUuYmluZChwLHIpO2IuYS5uKGEsXCJmb2N1c1wiLGYpO2IuYS5uKGEsXCJmb2N1c2luXCIsZik7Yi5hLm4oYSxcImJsdXJcIixnKTtiLmEubihhLFwiZm9jdXNvdXRcIixnKX0sdXBkYXRlOmZ1bmN0aW9uKGEsZCl7dmFyIGM9Yi5hLmQoZCgpKTthLl9fa29faGFzZm9jdXNVcGRhdGluZ3x8KGM/YS5mb2N1cygpOmEuYmx1cigpLGIuci5LKGIuYS5CYSxwLFthLGM/XCJmb2N1c2luXCI6XCJmb2N1c291dFwiXSkpfX07Yi5jLmh0bWw9e2luaXQ6ZnVuY3Rpb24oKXtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6bX19LHVwZGF0ZTpmdW5jdGlvbihhLGQpe2IuYS5jYShhLGQoKSl9fTt2YXIgZGE9XCJfX2tvX3dpdGhJZkJpbmRpbmdEYXRhXCI7UShcImlmXCIpO1EoXCJpZm5vdFwiLHIsbSk7UShcIndpdGhcIixtLHIsZnVuY3Rpb24oYSxcbmIpe3JldHVybiBhLmNyZWF0ZUNoaWxkQ29udGV4dChiKX0pO2IuYy5vcHRpb25zPXt1cGRhdGU6ZnVuY3Rpb24oYSxkLGMpe1wic2VsZWN0XCIhPT1iLmEudShhKSYmaihFcnJvcihcIm9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpKTtmb3IodmFyIGU9MD09YS5sZW5ndGgsZj1iLmEuVihiLmEuZmEoYS5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLnRhZ05hbWUmJlwib3B0aW9uXCI9PT1iLmEudShhKSYmYS5zZWxlY3RlZH0pLGZ1bmN0aW9uKGEpe3JldHVybiBiLmsucShhKXx8YS5pbm5lclRleHR8fGEudGV4dENvbnRlbnR9KSxnPWEuc2Nyb2xsVG9wLGg9Yi5hLmQoZCgpKTswPGEubGVuZ3RoOyliLkEoYS5vcHRpb25zWzBdKSxhLnJlbW92ZSgwKTtpZihoKXtjPWMoKTt2YXIgaz1jLm9wdGlvbnNJbmNsdWRlRGVzdHJveWVkO1wibnVtYmVyXCIhPXR5cGVvZiBoLmxlbmd0aCYmKGg9W2hdKTtpZihjLm9wdGlvbnNDYXB0aW9uKXt2YXIgbD15LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5iLmEuY2EobCxjLm9wdGlvbnNDYXB0aW9uKTtiLmsuVChsLEkpO2EuYXBwZW5kQ2hpbGQobCl9ZD0wO2Zvcih2YXIgbj1oLmxlbmd0aDtkPG47ZCsrKXt2YXIgcT1oW2RdO2lmKCFxfHwhcS5fZGVzdHJveXx8ayl7dmFyIGw9eS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXR5cGVvZiBiO3JldHVyblwiZnVuY3Rpb25cIj09ZD9iKGEpOlwic3RyaW5nXCI9PWQ/YVtiXTpjfSx2PXMocSxjLm9wdGlvbnNWYWx1ZSxxKTtiLmsuVChsLGIuYS5kKHYpKTtxPXMocSxjLm9wdGlvbnNUZXh0LHYpO2IuYS5jYihsLHEpO2EuYXBwZW5kQ2hpbGQobCl9fWg9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKTtkPWs9MDtmb3Iobj1oLmxlbmd0aDtkPG47ZCsrKTA8PWIuYS5pKGYsYi5rLnEoaFtkXSkpJiYoYi5hLmJiKGhbZF0sbSksaysrKTthLnNjcm9sbFRvcD1nO2UmJlwidmFsdWVcImluIGMmJmVhKGEsYi5hLnVhKGMudmFsdWUpLG0pO2IuYS51YihhKX19fTtcbmIuYy5vcHRpb25zLnNhPVwiX19rby5vcHRpb25WYWx1ZURvbURhdGFfX1wiO2IuYy5zZWxlY3RlZE9wdGlvbnM9e2luaXQ6ZnVuY3Rpb24oYSxkLGMpe2IuYS5uKGEsXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPWQoKSxmPVtdO2IuYS5vKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksZnVuY3Rpb24oYSl7YS5zZWxlY3RlZCYmZi5wdXNoKGIuay5xKGEpKX0pO2IuZy5lYShlLGMsXCJ2YWx1ZVwiLGYpfSl9LHVwZGF0ZTpmdW5jdGlvbihhLGQpe1wic2VsZWN0XCIhPWIuYS51KGEpJiZqKEVycm9yKFwidmFsdWVzIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKSk7dmFyIGM9Yi5hLmQoZCgpKTtjJiZcIm51bWJlclwiPT10eXBlb2YgYy5sZW5ndGgmJmIuYS5vKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksZnVuY3Rpb24oYSl7dmFyIGQ9MDw9Yi5hLmkoYyxiLmsucShhKSk7Yi5hLmJiKGEsZCl9KX19O2IuYy5zdHlsZT17dXBkYXRlOmZ1bmN0aW9uKGEsXG5kKXt2YXIgYz1iLmEuZChkKCl8fHt9KSxlO2ZvcihlIGluIGMpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBmPWIuYS5kKGNbZV0pO2Euc3R5bGVbZV09Znx8XCJcIn19fTtiLmMuc3VibWl0PXtpbml0OmZ1bmN0aW9uKGEsZCxjLGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGQoKSYmaihFcnJvcihcIlRoZSB2YWx1ZSBmb3IgYSBzdWJtaXQgYmluZGluZyBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2IuYS5uKGEsXCJzdWJtaXRcIixmdW5jdGlvbihiKXt2YXIgYyxoPWQoKTt0cnl7Yz1oLmNhbGwoZSxhKX1maW5hbGx5e2MhPT1tJiYoYi5wcmV2ZW50RGVmYXVsdD9iLnByZXZlbnREZWZhdWx0KCk6Yi5yZXR1cm5WYWx1ZT1yKX19KX19O2IuYy50ZXh0PXt1cGRhdGU6ZnVuY3Rpb24oYSxkKXtiLmEuY2IoYSxkKCkpfX07Yi5lLkkudGV4dD1tO2IuYy51bmlxdWVOYW1lPXtpbml0OmZ1bmN0aW9uKGEsZCl7aWYoZCgpKXt2YXIgYz1cImtvX3VuaXF1ZV9cIisgKytiLmMudW5pcXVlTmFtZS5vYjtiLmEuYWIoYSxcbmMpfX19O2IuYy51bmlxdWVOYW1lLm9iPTA7Yi5jLnZhbHVlPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKCl7aD1yO3ZhciBlPWQoKSxmPWIuay5xKGEpO2IuZy5lYShlLGMsXCJ2YWx1ZVwiLGYpfXZhciBmPVtcImNoYW5nZVwiXSxnPWMoKS52YWx1ZVVwZGF0ZSxoPXI7ZyYmKFwic3RyaW5nXCI9PXR5cGVvZiBnJiYoZz1bZ10pLGIuYS5QKGYsZyksZj1iLmEuR2EoZikpO2lmKGIuYS5aJiYoXCJpbnB1dFwiPT1hLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PWEudHlwZSYmXCJvZmZcIiE9YS5hdXRvY29tcGxldGUmJighYS5mb3JtfHxcIm9mZlwiIT1hLmZvcm0uYXV0b2NvbXBsZXRlKSkmJi0xPT1iLmEuaShmLFwicHJvcGVydHljaGFuZ2VcIikpYi5hLm4oYSxcInByb3BlcnR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtoPW19KSxiLmEubihhLFwiYmx1clwiLGZ1bmN0aW9uKCl7aCYmZSgpfSk7Yi5hLm8oZixmdW5jdGlvbihjKXt2YXIgZD1lO2IuYS5PYihjLFwiYWZ0ZXJcIikmJihkPWZ1bmN0aW9uKCl7c2V0VGltZW91dChlLFxuMCl9LGM9Yy5zdWJzdHJpbmcoNSkpO2IuYS5uKGEsYyxkKX0pfSx1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1cInNlbGVjdFwiPT09Yi5hLnUoYSksZT1iLmEuZChkKCkpLGY9Yi5rLnEoYSksZz1lIT1mOzA9PT1lJiYoMCE9PWYmJlwiMFwiIT09ZikmJihnPW0pO2cmJihmPWZ1bmN0aW9uKCl7Yi5rLlQoYSxlKX0sZigpLGMmJnNldFRpbWVvdXQoZiwwKSk7YyYmMDxhLmxlbmd0aCYmZWEoYSxlLHIpfX07Yi5jLnZpc2libGU9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSksZT1cIm5vbmVcIiE9YS5zdHlsZS5kaXNwbGF5O2MmJiFlP2Euc3R5bGUuZGlzcGxheT1cIlwiOiFjJiZlJiYoYS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19O2IuYy5jbGljaz17aW5pdDpmdW5jdGlvbihhLGQsYyxlKXtyZXR1cm4gYi5jLmV2ZW50LmluaXQuY2FsbCh0aGlzLGEsZnVuY3Rpb24oKXt2YXIgYT17fTthLmNsaWNrPWQoKTtyZXR1cm4gYX0sYyxlKX19O2Iudj1mdW5jdGlvbigpe307Yi52LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1cbmZ1bmN0aW9uKCl7aihFcnJvcihcIk92ZXJyaWRlIHJlbmRlclRlbXBsYXRlU291cmNlXCIpKX07Yi52LnByb3RvdHlwZS5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oKXtqKEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpKX07Yi52LnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYSxkKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7ZD1kfHx5O3ZhciBjPWQuZ2V0RWxlbWVudEJ5SWQoYSk7Y3x8aihFcnJvcihcIkNhbm5vdCBmaW5kIHRlbXBsYXRlIHdpdGggSUQgXCIrYSkpO3JldHVybiBuZXcgYi5sLmgoYyl9aWYoMT09YS5ub2RlVHlwZXx8OD09YS5ub2RlVHlwZSlyZXR1cm4gbmV3IGIubC5PKGEpO2ooRXJyb3IoXCJVbmtub3duIHRlbXBsYXRlIHR5cGU6IFwiK2EpKX07Yi52LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1mdW5jdGlvbihhLGIsYyxlKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZSk7XG5yZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZShhLGIsYyl9O2Iudi5wcm90b3R5cGUuaXNUZW1wbGF0ZVJld3JpdHRlbj1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc9PT1yP206dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxiKS5kYXRhKFwiaXNSZXdyaXR0ZW5cIil9O2Iudi5wcm90b3R5cGUucmV3cml0ZVRlbXBsYXRlPWZ1bmN0aW9uKGEsYixjKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsYyk7Yj1iKGEudGV4dCgpKTthLnRleHQoYik7YS5kYXRhKFwiaXNSZXdyaXR0ZW5cIixtKX07Yi5iKFwidGVtcGxhdGVFbmdpbmVcIixiLnYpO3ZhciBxYT0vKDxbYS16XStcXGQqKFxccysoPyFkYXRhLWJpbmQ9KVthLXowLTlcXC1dKyg9KFxcXCJbXlxcXCJdKlxcXCJ8XFwnW15cXCddKlxcJykpPykqXFxzKylkYXRhLWJpbmQ9KFtcIiddKShbXFxzXFxTXSo/KVxcNS9naSxyYT0vXFx4M2MhLS1cXHMqa29cXGJcXHMqKFtcXHNcXFNdKj8pXFxzKi0tXFx4M2UvZztiLnphPXt2YjpmdW5jdGlvbihhLFxuZCxjKXtkLmlzVGVtcGxhdGVSZXdyaXR0ZW4oYSxjKXx8ZC5yZXdyaXRlVGVtcGxhdGUoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi56YS5HYihhLGQpfSxjKX0sR2I6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5yZXBsYWNlKHFhLGZ1bmN0aW9uKGEsZSxmLGcsaCxrLGwpe3JldHVybiBXKGwsZSxiKX0pLnJlcGxhY2UocmEsZnVuY3Rpb24oYSxlKXtyZXR1cm4gVyhlLFwiXFx4M2MhLS0ga28gLS1cXHgzZVwiLGIpfSl9LGtiOmZ1bmN0aW9uKGEpe3JldHVybiBiLnMucmEoZnVuY3Rpb24oZCxjKXtkLm5leHRTaWJsaW5nJiZiLkZhKGQubmV4dFNpYmxpbmcsYSxjKX0pfX07Yi5iKFwiX190cl9hbWJ0bnNcIixiLnphLmtiKTtiLmw9e307Yi5sLmg9ZnVuY3Rpb24oYSl7dGhpcy5oPWF9O2IubC5oLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7dmFyIGE9Yi5hLnUodGhpcy5oKSxhPVwic2NyaXB0XCI9PT1hP1widGV4dFwiOlwidGV4dGFyZWFcIj09PWE/XCJ2YWx1ZVwiOlwiaW5uZXJIVE1MXCI7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5oW2FdO1xudmFyIGQ9YXJndW1lbnRzWzBdO1wiaW5uZXJIVE1MXCI9PT1hP2IuYS5jYSh0aGlzLmgsZCk6dGhpcy5oW2FdPWR9O2IubC5oLnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKGEpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBiLmEuZi5nZXQodGhpcy5oLFwidGVtcGxhdGVTb3VyY2VEYXRhX1wiK2EpO2IuYS5mLnNldCh0aGlzLmgsXCJ0ZW1wbGF0ZVNvdXJjZURhdGFfXCIrYSxhcmd1bWVudHNbMV0pfTtiLmwuTz1mdW5jdGlvbihhKXt0aGlzLmg9YX07Yi5sLk8ucHJvdG90eXBlPW5ldyBiLmwuaDtiLmwuTy5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBhPWIuYS5mLmdldCh0aGlzLmgsXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiKXx8e307YS5BYT09PUkmJmEuaWEmJihhLkFhPWEuaWEuaW5uZXJIVE1MKTtyZXR1cm4gYS5BYX1iLmEuZi5zZXQodGhpcy5oLFwiX19rb19hbm9uX3RlbXBsYXRlX19cIix7QWE6YXJndW1lbnRzWzBdfSl9O2IubC5oLnByb3RvdHlwZS5ub2Rlcz1cbmZ1bmN0aW9uKCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4oYi5hLmYuZ2V0KHRoaXMuaCxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIpfHx7fSkuaWE7Yi5hLmYuc2V0KHRoaXMuaCxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIse2lhOmFyZ3VtZW50c1swXX0pfTtiLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixiLmwpO2IuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYi5sLmgpO2IuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGIubC5PKTt2YXIgTztiLndhPWZ1bmN0aW9uKGEpe2EhPUkmJiEoYSBpbnN0YW5jZW9mIGIudikmJmooRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKSk7Tz1hfTtiLnZhPWZ1bmN0aW9uKGEsZCxjLGUsZil7Yz1jfHx7fTsoYy50ZW1wbGF0ZUVuZ2luZXx8Tyk9PUkmJmooRXJyb3IoXCJTZXQgYSB0ZW1wbGF0ZSBlbmdpbmUgYmVmb3JlIGNhbGxpbmcgcmVuZGVyVGVtcGxhdGVcIikpO1xuZj1mfHxcInJlcGxhY2VDaGlsZHJlblwiO2lmKGUpe3ZhciBnPU4oZSk7cmV0dXJuIGIuaihmdW5jdGlvbigpe3ZhciBoPWQmJmQgaW5zdGFuY2VvZiBiLno/ZDpuZXcgYi56KGIuYS5kKGQpKSxrPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YShoLiRkYXRhLGgpOmEsaD1UKGUsZixrLGgsYyk7XCJyZXBsYWNlTm9kZVwiPT1mJiYoZT1oLGc9TihlKSl9LHAse0thOmZ1bmN0aW9uKCl7cmV0dXJuIWd8fCFiLmEuWChnKX0sVzpnJiZcInJlcGxhY2VOb2RlXCI9PWY/Zy5wYXJlbnROb2RlOmd9KX1yZXR1cm4gYi5zLnJhKGZ1bmN0aW9uKGUpe2IudmEoYSxkLGMsZSxcInJlcGxhY2VOb2RlXCIpfSl9O2IuTWI9ZnVuY3Rpb24oYSxkLGMsZSxmKXtmdW5jdGlvbiBnKGEsYil7VShiLGspO2MuYWZ0ZXJSZW5kZXImJmMuYWZ0ZXJSZW5kZXIoYixhKX1mdW5jdGlvbiBoKGQsZSl7az1mLmNyZWF0ZUNoaWxkQ29udGV4dChiLmEuZChkKSxjLmFzKTtrLiRpbmRleD1lO3ZhciBnPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/XG5hKGQsayk6YTtyZXR1cm4gVChwLFwiaWdub3JlVGFyZ2V0Tm9kZVwiLGcsayxjKX12YXIgaztyZXR1cm4gYi5qKGZ1bmN0aW9uKCl7dmFyIGE9Yi5hLmQoZCl8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBhLmxlbmd0aCYmKGE9W2FdKTthPWIuYS5mYShhLGZ1bmN0aW9uKGEpe3JldHVybiBjLmluY2x1ZGVEZXN0cm95ZWR8fGE9PT1JfHxhPT09cHx8IWIuYS5kKGEuX2Rlc3Ryb3kpfSk7Yi5yLksoYi5hLiRhLHAsW2UsYSxoLGMsZ10pfSxwLHtXOmV9KX07Yi5jLnRlbXBsYXRlPXtpbml0OmZ1bmN0aW9uKGEsZCl7dmFyIGM9Yi5hLmQoZCgpKTtpZihcInN0cmluZ1wiIT10eXBlb2YgYyYmIWMubmFtZSYmKDE9PWEubm9kZVR5cGV8fDg9PWEubm9kZVR5cGUpKWM9MT09YS5ub2RlVHlwZT9hLmNoaWxkTm9kZXM6Yi5lLmNoaWxkTm9kZXMoYSksYz1iLmEuSGIoYyksKG5ldyBiLmwuTyhhKSkubm9kZXMoYyk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOm19fSx1cGRhdGU6ZnVuY3Rpb24oYSxcbmQsYyxlLGYpe2Q9Yi5hLmQoZCgpKTtjPXt9O2U9bTt2YXIgZyxoPXA7XCJzdHJpbmdcIiE9dHlwZW9mIGQmJihjPWQsZD1jLm5hbWUsXCJpZlwiaW4gYyYmKGU9Yi5hLmQoY1tcImlmXCJdKSksZSYmXCJpZm5vdFwiaW4gYyYmKGU9IWIuYS5kKGMuaWZub3QpKSxnPWIuYS5kKGMuZGF0YSkpO1wiZm9yZWFjaFwiaW4gYz9oPWIuTWIoZHx8YSxlJiZjLmZvcmVhY2h8fFtdLGMsYSxmKTplPyhmPVwiZGF0YVwiaW4gYz9mLmNyZWF0ZUNoaWxkQ29udGV4dChnLGMuYXMpOmYsaD1iLnZhKGR8fGEsZixjLGEpKTpiLmUuWShhKTtmPWg7KGc9Yi5hLmYuZ2V0KGEsXCJfX2tvX190ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleV9fXCIpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZy5CJiZnLkIoKTtiLmEuZi5zZXQoYSxcIl9fa29fX3RlbXBsYXRlQ29tcHV0ZWREb21EYXRhS2V5X19cIixmJiZmLnBhKCk/ZjpJKX19O2IuZy5RLnRlbXBsYXRlPWZ1bmN0aW9uKGEpe2E9Yi5nLmFhKGEpO3JldHVybiAxPT1hLmxlbmd0aCYmYVswXS51bmtub3dufHxcbmIuZy5FYihhLFwibmFtZVwiKT9wOlwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzIG5lc3RlZCB3aXRoaW4gaXRzIHRlbXBsYXRlc1wifTtiLmUuSS50ZW1wbGF0ZT1tO2IuYihcInNldFRlbXBsYXRlRW5naW5lXCIsYi53YSk7Yi5iKFwicmVuZGVyVGVtcGxhdGVcIixiLnZhKTtiLmEuSmE9ZnVuY3Rpb24oYSxiLGMpe2E9YXx8W107Yj1ifHxbXTtyZXR1cm4gYS5sZW5ndGg8PWIubGVuZ3RoP1MoYSxiLFwiYWRkZWRcIixcImRlbGV0ZWRcIixjKTpTKGIsYSxcImRlbGV0ZWRcIixcImFkZGVkXCIsYyl9O2IuYihcInV0aWxzLmNvbXBhcmVBcnJheXNcIixiLmEuSmEpO2IuYS4kYT1mdW5jdGlvbihhLGQsYyxlLGYpe2Z1bmN0aW9uIGcoYSxiKXt0PWxbYl07dyE9PWImJih6W2FdPXQpO3QubmEodysrKTtNKHQuTSk7cy5wdXNoKHQpO0EucHVzaCh0KX1mdW5jdGlvbiBoKGEsYyl7aWYoYSlmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspY1tkXSYmYi5hLm8oY1tkXS5NLFxuZnVuY3Rpb24oYil7YShiLGQsY1tkXS5VKX0pfWQ9ZHx8W107ZT1lfHx7fTt2YXIgaz1iLmEuZi5nZXQoYSxcInNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdfbGFzdE1hcHBpbmdSZXN1bHRcIik9PT1JLGw9Yi5hLmYuZ2V0KGEsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIpfHxbXSxuPWIuYS5WKGwsZnVuY3Rpb24oYSl7cmV0dXJuIGEuVX0pLHE9Yi5hLkphKG4sZCkscz1bXSx2PTAsdz0wLEI9W10sQT1bXTtkPVtdO2Zvcih2YXIgej1bXSxuPVtdLHQsRD0wLEMsRTtDPXFbRF07RCsrKXN3aXRjaChFPUMubW92ZWQsQy5zdGF0dXMpe2Nhc2UgXCJkZWxldGVkXCI6RT09PUkmJih0PWxbdl0sdC5qJiZ0LmouQigpLEIucHVzaC5hcHBseShCLE0odC5NKSksZS5iZWZvcmVSZW1vdmUmJihkW0RdPXQsQS5wdXNoKHQpKSk7disrO2JyZWFrO2Nhc2UgXCJyZXRhaW5lZFwiOmcoRCx2KyspO2JyZWFrO2Nhc2UgXCJhZGRlZFwiOkUhPT1JP1xuZyhELEUpOih0PXtVOkMudmFsdWUsbmE6Yi5tKHcrKyl9LHMucHVzaCh0KSxBLnB1c2godCksa3x8KG5bRF09dCkpfWgoZS5iZWZvcmVNb3ZlLHopO2IuYS5vKEIsZS5iZWZvcmVSZW1vdmU/Yi5BOmIucmVtb3ZlTm9kZSk7Zm9yKHZhciBEPTAsaz1iLmUuZmlyc3RDaGlsZChhKSxIO3Q9QVtEXTtEKyspe3QuTXx8Yi5hLmV4dGVuZCh0LGhhKGEsYyx0LlUsZix0Lm5hKSk7Zm9yKHY9MDtxPXQuTVt2XTtrPXEubmV4dFNpYmxpbmcsSD1xLHYrKylxIT09ayYmYi5lLlBhKGEscSxIKTshdC5BYiYmZiYmKGYodC5VLHQuTSx0Lm5hKSx0LkFiPW0pfWgoZS5iZWZvcmVSZW1vdmUsZCk7aChlLmFmdGVyTW92ZSx6KTtoKGUuYWZ0ZXJBZGQsbik7Yi5hLmYuc2V0KGEsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIscyl9O2IuYihcInV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdcIixiLmEuJGEpO2IuQz1mdW5jdGlvbigpe3RoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz1cbnJ9O2IuQy5wcm90b3R5cGU9bmV3IGIudjtiLkMucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGEpe3ZhciBkPSEoOT5iLmEuWikmJmEubm9kZXM/YS5ub2RlcygpOnA7aWYoZClyZXR1cm4gYi5hLkwoZC5jbG9uZU5vZGUobSkuY2hpbGROb2Rlcyk7YT1hLnRleHQoKTtyZXR1cm4gYi5hLnRhKGEpfTtiLkMub2E9bmV3IGIuQztiLndhKGIuQy5vYSk7Yi5iKFwibmF0aXZlVGVtcGxhdGVFbmdpbmVcIixiLkMpO2IucWE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkRiPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIEZ8fCFGLnRtcGwpcmV0dXJuIDA7dHJ5e2lmKDA8PUYudG1wbC50YWcudG1wbC5vcGVuLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpKXJldHVybiAyfWNhdGNoKGEpe31yZXR1cm4gMX0oKTt0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsYyxlKXtlPWV8fHt9OzI+YSYmaihFcnJvcihcIllvdXIgdmVyc2lvbiBvZiBqUXVlcnkudG1wbCBpcyB0b28gb2xkLiBQbGVhc2UgdXBncmFkZSB0byBqUXVlcnkudG1wbCAxLjAuMHByZSBvciBsYXRlci5cIikpO1xudmFyIGY9Yi5kYXRhKFwicHJlY29tcGlsZWRcIik7Znx8KGY9Yi50ZXh0KCl8fFwiXCIsZj1GLnRlbXBsYXRlKHAsXCJ7e2tvX3dpdGggJGl0ZW0ua29CaW5kaW5nQ29udGV4dH19XCIrZitcInt7L2tvX3dpdGh9fVwiKSxiLmRhdGEoXCJwcmVjb21waWxlZFwiLGYpKTtiPVtjLiRkYXRhXTtjPUYuZXh0ZW5kKHtrb0JpbmRpbmdDb250ZXh0OmN9LGUudGVtcGxhdGVPcHRpb25zKTtjPUYudG1wbChmLGIsYyk7Yy5hcHBlbmRUbyh5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO0YuZnJhZ21lbnRzPXt9O3JldHVybiBjfTt0aGlzLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaz1mdW5jdGlvbihhKXtyZXR1cm5cInt7a29fY29kZSAoKGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIrYStcIiB9KSgpKSB9fVwifTt0aGlzLmFkZFRlbXBsYXRlPWZ1bmN0aW9uKGEsYil7eS53cml0ZShcIjxzY3JpcHQgdHlwZT0ndGV4dC9odG1sJyBpZD0nXCIrYStcIic+XCIrYitcIlxceDNjL3NjcmlwdD5cIil9OzA8YSYmKEYudG1wbC50YWcua29fY29kZT1cbntvcGVuOlwiX18ucHVzaCgkMSB8fCAnJyk7XCJ9LEYudG1wbC50YWcua29fd2l0aD17b3BlbjpcIndpdGgoJDEpIHtcIixjbG9zZTpcIn0gXCJ9KX07Yi5xYS5wcm90b3R5cGU9bmV3IGIudjt3PW5ldyBiLnFhOzA8dy5EYiYmYi53YSh3KTtiLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixiLnFhKX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcmVxdWlyZSYmXCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9MKG1vZHVsZS5leHBvcnRzfHxleHBvcnRzKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLEwpOkwoeC5rbz17fSk7bTtcbn0pKCk7XG4iLCJ2YXIga28gPSByZXF1aXJlKCdrbm9ja291dC1jbGllbnQnKSxcblx0ZGF0ZWpzID0gcmVxdWlyZSgnZGF0ZWpzJyksXG5cdF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5rby5tYXBwaW5nID0gcmVxdWlyZSgna25vY2tvdXQtbWFwcGluZycpO1xuXG5mdW5jdGlvbiBWaWV3TW9kZWwod3RmSGlzdG9yeSkge1xuXHR0aGlzLnd0Zkhpc3RvcnkgPSBrby5vYnNlcnZhYmxlQXJyYXkod3RmSGlzdG9yeSk7XG5cdFxuXHR0aGlzLnd0ZkNvdW50ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMud3RmSGlzdG9yeSgpLmxlbmd0aDtcblx0fSwgdGhpcyk7XG5cdFxuXHR0aGlzLmxhc3RXdGYgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0IFx0cmV0dXJuIF8ubGFzdCh0aGlzLnd0Zkhpc3RvcnkoKSk7XG4gXHR9LCB0aGlzKTtcblx0XG5cdHRoaXMubGFzdFd0ZlRleHQgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHR2YXIgbGFzdFd0ZiA9IHRoaXMubGFzdFd0ZigpO1xuXHRcdGlmIChsYXN0V3RmKVxuXHRcdFx0cmV0dXJuIGZvcm1hdERhdGUobGFzdFd0Zi5kYXRlKTtcblx0XHRyZXR1cm4gJ25ldmVyJztcblx0fSwgdGhpcyk7XG5cblx0dGhpcy50b2RheXNXdGZzID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMud3RmSGlzdG9yeSgpLm1hcChtYXBEYXRlKS5maWx0ZXIoaXNUb2RheSk7XG5cdH0sIHRoaXMpO1xuXG5cdHRoaXMucGFzdDI0ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMud3RmSGlzdG9yeSgpLm1hcChtYXBEYXRlKS5maWx0ZXIoaXNQYXN0MjQpO1xuXHR9LCB0aGlzKTtcblxuXHR0aGlzLnRvZGF5V3RmQ291bnQgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy50b2RheXNXdGZzKCkubGVuZ3RoO1xuXHR9LCB0aGlzKTtcblxuXHR0aGlzLmhvdXJseVd0ZnMgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHR2YXIgZ3JvdXBlZCA9IF8uZ3JvdXBCeSh0aGlzLnBhc3QyNCgpLCBtYXBIb3VyKTtcblx0XHR2YXIgaG91cmx5ID0gW107XG5cdFx0dmFyIGksIG07XG5cdFx0dmFyIG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuXHRcdFx0aG91ciA9IChpICsgb2Zmc2V0ICsgMSkgJSAyNDtcblx0XHRcdGhvdXJseVtpXSA9IHsgaG91cjogaG91ciwgd3RmczogZ3JvdXBlZFsnJyArIGhvdXJdIHx8IFtdIH07XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKGhvdXJseSk7XG5cdFx0cmV0dXJuIGhvdXJseTtcblx0fSwgdGhpcyk7XG5cblx0a28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhpc3RvcnkgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnd0Zkhpc3RvcnkoKSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3d0Zkhpc3RvcnknLCBoaXN0b3J5KTtcblx0fSwgdGhpcykuZXh0ZW5kKHt0aHJvdHRsZTogMX0pO1xufVxuXG5WaWV3TW9kZWwucHJvdG90eXBlLnd0ZiA9IGZ1bmN0aW9uKCkge1xuXHRkYXRlID0gbmV3IERhdGUoKTtcblx0dGhpcy53dGZIaXN0b3J5LnB1c2goeyBkYXRlOiBkYXRlIH0pO1xufVxuXG5WaWV3TW9kZWwucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMud3RmSGlzdG9yeS5yZW1vdmVBbGwoKTtcbn1cblxuZnVuY3Rpb24gbWFwSG91cihkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG59XG5cbmZ1bmN0aW9uIG1hcERhdGUoaXRlbSkge1xuXHRyZXR1cm4gaXRlbS5kYXRlO1xufVxuXG5mdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuYmV0d2VlbihEYXRlLnRvZGF5KCksIERhdGUucGFyc2UoJ3RvbW9ycm93JykpO1xufVxuXG5mdW5jdGlvbiBpc1Bhc3QyNChkYXRlKSB7XG5cdHJldHVybiBkYXRlLmNvbXBhcmVUbyhuZXcgRGF0ZSgpLmFkZCgtMSkuZGF5cygpKSA9PT0gMTtcbn1cblxuZnVuY3Rpb24gZml4RGF0ZShrZXksIHZhbHVlKXtcblx0cmV0dXJuIChrZXkgPT09ICdkYXRlJykgPyBuZXcgRGF0ZSh2YWx1ZSkgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG5cdHJldHVybiBkYXRlLnRvU3RyaW5nKCdkZGQsIE1NTSBkZCwgeXl5eSBoOm1tOnNzIHR0Jyk7XG59XG5cbnZhciBzdG9yZWRIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3d0Zkhpc3RvcnknKTtcbnZhciB3dGZIaXN0b3J5ID0gSlNPTi5wYXJzZShzdG9yZWRIaXN0b3J5LCBmaXhEYXRlKSB8fCBbXTtcbnZhciB2bSA9IG5ldyBWaWV3TW9kZWwod3RmSGlzdG9yeSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdm07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGlmIChldi5zb3VyY2UgPT09IHdpbmRvdyAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCIoZnVuY3Rpb24ocHJvY2Vzcyl7LyoqXHJcbiAqIEB2ZXJzaW9uOiAxLjAgQWxwaGEtMVxyXG4gKiBAYXV0aG9yOiBDb29saXRlIEluYy4gaHR0cDovL3d3dy5jb29saXRlLmNvbS9cclxuICogQGRhdGU6IDIwMDgtMDUtMTNcclxuICogQGNvcHlyaWdodDogQ29weXJpZ2h0IChjKSAyMDA2LTIwMDgsIENvb2xpdGUgSW5jLiAoaHR0cDovL3d3dy5jb29saXRlLmNvbS8pLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBAbGljZW5zZTogTGljZW5zZWQgdW5kZXIgVGhlIE1JVCBMaWNlbnNlLiBTZWUgbGljZW5zZS50eHQgYW5kIGh0dHA6Ly93d3cuZGF0ZWpzLmNvbS9saWNlbnNlLy4gXHJcbiAqIEB3ZWJzaXRlOiBodHRwOi8vd3d3LmRhdGVqcy5jb20vXHJcbiAqL1xyXG5EYXRlLkN1bHR1cmVJbmZvPXtuYW1lOlwiZW4tVVNcIixlbmdsaXNoTmFtZTpcIkVuZ2xpc2ggKFVuaXRlZCBTdGF0ZXMpXCIsbmF0aXZlTmFtZTpcIkVuZ2xpc2ggKFVuaXRlZCBTdGF0ZXMpXCIsZGF5TmFtZXM6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sYWJicmV2aWF0ZWREYXlOYW1lczpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sc2hvcnRlc3REYXlOYW1lczpbXCJTdVwiLFwiTW9cIixcIlR1XCIsXCJXZVwiLFwiVGhcIixcIkZyXCIsXCJTYVwiXSxmaXJzdExldHRlckRheU5hbWVzOltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sbW9udGhOYW1lczpbXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sYWJicmV2aWF0ZWRNb250aE5hbWVzOltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sYW1EZXNpZ25hdG9yOlwiQU1cIixwbURlc2lnbmF0b3I6XCJQTVwiLGZpcnN0RGF5T2ZXZWVrOjAsdHdvRGlnaXRZZWFyTWF4OjIwMjksZGF0ZUVsZW1lbnRPcmRlcjpcIm1keVwiLGZvcm1hdFBhdHRlcm5zOntzaG9ydERhdGU6XCJNL2QveXl5eVwiLGxvbmdEYXRlOlwiZGRkZCwgTU1NTSBkZCwgeXl5eVwiLHNob3J0VGltZTpcImg6bW0gdHRcIixsb25nVGltZTpcImg6bW06c3MgdHRcIixmdWxsRGF0ZVRpbWU6XCJkZGRkLCBNTU1NIGRkLCB5eXl5IGg6bW06c3MgdHRcIixzb3J0YWJsZURhdGVUaW1lOlwieXl5eS1NTS1kZFRISDptbTpzc1wiLHVuaXZlcnNhbFNvcnRhYmxlRGF0ZVRpbWU6XCJ5eXl5LU1NLWRkIEhIOm1tOnNzWlwiLHJmYzExMjM6XCJkZGQsIGRkIE1NTSB5eXl5IEhIOm1tOnNzIEdNVFwiLG1vbnRoRGF5OlwiTU1NTSBkZFwiLHllYXJNb250aDpcIk1NTU0sIHl5eXlcIn0scmVnZXhQYXR0ZXJuczp7amFuOi9eamFuKHVhcnkpPy9pLGZlYjovXmZlYihydWFyeSk/L2ksbWFyOi9ebWFyKGNoKT8vaSxhcHI6L15hcHIoaWwpPy9pLG1heTovXm1heS9pLGp1bjovXmp1bihlKT8vaSxqdWw6L15qdWwoeSk/L2ksYXVnOi9eYXVnKHVzdCk/L2ksc2VwOi9ec2VwKHQoZW1iZXIpPyk/L2ksb2N0Oi9eb2N0KG9iZXIpPy9pLG5vdjovXm5vdihlbWJlcik/L2ksZGVjOi9eZGVjKGVtYmVyKT8vaSxzdW46L15zdShuKGRheSk/KT8vaSxtb246L15tbyhuKGRheSk/KT8vaSx0dWU6L150dShlKHMoZGF5KT8pPyk/L2ksd2VkOi9ed2UoZChuZXNkYXkpPyk/L2ksdGh1Oi9edGgodShyKHMoZGF5KT8pPyk/KT8vaSxmcmk6L15mcihpKGRheSk/KT8vaSxzYXQ6L15zYSh0KHVyZGF5KT8pPy9pLGZ1dHVyZTovXm5leHQvaSxwYXN0Oi9ebGFzdHxwYXN0fHByZXYoaW91cyk/L2ksYWRkOi9eKFxcK3xhZnQoZXIpP3xmcm9tfGhlbmNlKS9pLHN1YnRyYWN0Oi9eKFxcLXxiZWYob3JlKT98YWdvKS9pLHllc3RlcmRheTovXnllcyh0ZXJkYXkpPy9pLHRvZGF5Oi9edChvZChheSk/KT8vaSx0b21vcnJvdzovXnRvbShvcnJvdyk/L2ksbm93Oi9ebihvdyk/L2ksbWlsbGlzZWNvbmQ6L15tc3xtaWxsaShzZWNvbmQpP3M/L2ksc2Vjb25kOi9ec2VjKG9uZCk/cz8vaSxtaW51dGU6L15tbnxtaW4odXRlKT9zPy9pLGhvdXI6L15oKG91cik/cz8vaSx3ZWVrOi9edyhlZWspP3M/L2ksbW9udGg6L15tKG9udGgpP3M/L2ksZGF5Oi9eZChheSk/cz8vaSx5ZWFyOi9eeShlYXIpP3M/L2ksc2hvcnRNZXJpZGlhbjovXihhfHApL2ksbG9uZ01lcmlkaWFuOi9eKGFcXC4/bT9cXC4/fHBcXC4/bT9cXC4/KS9pLHRpbWV6b25lOi9eKChlKHN8ZCl0fGMoc3xkKXR8bShzfGQpdHxwKHN8ZCl0KXwoKGdtdCk/XFxzKihcXCt8XFwtKVxccypcXGRcXGRcXGRcXGQ/KXxnbXR8dXRjKS9pLG9yZGluYWxTdWZmaXg6L15cXHMqKHN0fG5kfHJkfHRoKS9pLHRpbWVDb250ZXh0Oi9eXFxzKihcXDp8YSg/IXV8cCl8cCkvaX0sdGltZXpvbmVzOlt7bmFtZTpcIlVUQ1wiLG9mZnNldDpcIi0wMDBcIn0se25hbWU6XCJHTVRcIixvZmZzZXQ6XCItMDAwXCJ9LHtuYW1lOlwiRVNUXCIsb2Zmc2V0OlwiLTA1MDBcIn0se25hbWU6XCJFRFRcIixvZmZzZXQ6XCItMDQwMFwifSx7bmFtZTpcIkNTVFwiLG9mZnNldDpcIi0wNjAwXCJ9LHtuYW1lOlwiQ0RUXCIsb2Zmc2V0OlwiLTA1MDBcIn0se25hbWU6XCJNU1RcIixvZmZzZXQ6XCItMDcwMFwifSx7bmFtZTpcIk1EVFwiLG9mZnNldDpcIi0wNjAwXCJ9LHtuYW1lOlwiUFNUXCIsb2Zmc2V0OlwiLTA4MDBcIn0se25hbWU6XCJQRFRcIixvZmZzZXQ6XCItMDcwMFwifV19O1xuKGZ1bmN0aW9uKCl7dmFyICREPURhdGUsJFA9JEQucHJvdG90eXBlLCRDPSRELkN1bHR1cmVJbmZvLHA9ZnVuY3Rpb24ocyxsKXtpZighbCl7bD0yO31cbnJldHVybihcIjAwMFwiK3MpLnNsaWNlKGwqLTEpO307JFAuY2xlYXJUaW1lPWZ1bmN0aW9uKCl7dGhpcy5zZXRIb3VycygwKTt0aGlzLnNldE1pbnV0ZXMoMCk7dGhpcy5zZXRTZWNvbmRzKDApO3RoaXMuc2V0TWlsbGlzZWNvbmRzKDApO3JldHVybiB0aGlzO307JFAuc2V0VGltZVRvTm93PWZ1bmN0aW9uKCl7dmFyIG49bmV3IERhdGUoKTt0aGlzLnNldEhvdXJzKG4uZ2V0SG91cnMoKSk7dGhpcy5zZXRNaW51dGVzKG4uZ2V0TWludXRlcygpKTt0aGlzLnNldFNlY29uZHMobi5nZXRTZWNvbmRzKCkpO3RoaXMuc2V0TWlsbGlzZWNvbmRzKG4uZ2V0TWlsbGlzZWNvbmRzKCkpO3JldHVybiB0aGlzO307JEQudG9kYXk9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUoKS5jbGVhclRpbWUoKTt9OyRELmNvbXBhcmU9ZnVuY3Rpb24oZGF0ZTEsZGF0ZTIpe2lmKGlzTmFOKGRhdGUxKXx8aXNOYU4oZGF0ZTIpKXt0aHJvdyBuZXcgRXJyb3IoZGF0ZTErXCIgLSBcIitkYXRlMik7fWVsc2UgaWYoZGF0ZTEgaW5zdGFuY2VvZiBEYXRlJiZkYXRlMiBpbnN0YW5jZW9mIERhdGUpe3JldHVybihkYXRlMTxkYXRlMik/LTE6KGRhdGUxPmRhdGUyKT8xOjA7fWVsc2V7dGhyb3cgbmV3IFR5cGVFcnJvcihkYXRlMStcIiAtIFwiK2RhdGUyKTt9fTskRC5lcXVhbHM9ZnVuY3Rpb24oZGF0ZTEsZGF0ZTIpe3JldHVybihkYXRlMS5jb21wYXJlVG8oZGF0ZTIpPT09MCk7fTskRC5nZXREYXlOdW1iZXJGcm9tTmFtZT1mdW5jdGlvbihuYW1lKXt2YXIgbj0kQy5kYXlOYW1lcyxtPSRDLmFiYnJldmlhdGVkRGF5TmFtZXMsbz0kQy5zaG9ydGVzdERheU5hbWVzLHM9bmFtZS50b0xvd2VyQ2FzZSgpO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXtpZihuW2ldLnRvTG93ZXJDYXNlKCk9PXN8fG1baV0udG9Mb3dlckNhc2UoKT09c3x8b1tpXS50b0xvd2VyQ2FzZSgpPT1zKXtyZXR1cm4gaTt9fVxucmV0dXJuLTE7fTskRC5nZXRNb250aE51bWJlckZyb21OYW1lPWZ1bmN0aW9uKG5hbWUpe3ZhciBuPSRDLm1vbnRoTmFtZXMsbT0kQy5hYmJyZXZpYXRlZE1vbnRoTmFtZXMscz1uYW1lLnRvTG93ZXJDYXNlKCk7Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe2lmKG5baV0udG9Mb3dlckNhc2UoKT09c3x8bVtpXS50b0xvd2VyQ2FzZSgpPT1zKXtyZXR1cm4gaTt9fVxucmV0dXJuLTE7fTskRC5pc0xlYXBZZWFyPWZ1bmN0aW9uKHllYXIpe3JldHVybigoeWVhciU0PT09MCYmeWVhciUxMDAhPT0wKXx8eWVhciU0MDA9PT0wKTt9OyRELmdldERheXNJbk1vbnRoPWZ1bmN0aW9uKHllYXIsbW9udGgpe3JldHVyblszMSwoJEQuaXNMZWFwWWVhcih5ZWFyKT8yOToyOCksMzEsMzAsMzEsMzAsMzEsMzEsMzAsMzEsMzAsMzFdW21vbnRoXTt9OyRELmdldFRpbWV6b25lQWJicmV2aWF0aW9uPWZ1bmN0aW9uKG9mZnNldCl7dmFyIHo9JEMudGltZXpvbmVzLHA7Zm9yKHZhciBpPTA7aTx6Lmxlbmd0aDtpKyspe2lmKHpbaV0ub2Zmc2V0PT09b2Zmc2V0KXtyZXR1cm4geltpXS5uYW1lO319XG5yZXR1cm4gbnVsbDt9OyRELmdldFRpbWV6b25lT2Zmc2V0PWZ1bmN0aW9uKG5hbWUpe3ZhciB6PSRDLnRpbWV6b25lcyxwO2Zvcih2YXIgaT0wO2k8ei5sZW5ndGg7aSsrKXtpZih6W2ldLm5hbWU9PT1uYW1lLnRvVXBwZXJDYXNlKCkpe3JldHVybiB6W2ldLm9mZnNldDt9fVxucmV0dXJuIG51bGw7fTskUC5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLmdldFRpbWUoKSk7fTskUC5jb21wYXJlVG89ZnVuY3Rpb24oZGF0ZSl7cmV0dXJuIERhdGUuY29tcGFyZSh0aGlzLGRhdGUpO307JFAuZXF1YWxzPWZ1bmN0aW9uKGRhdGUpe3JldHVybiBEYXRlLmVxdWFscyh0aGlzLGRhdGV8fG5ldyBEYXRlKCkpO307JFAuYmV0d2Vlbj1mdW5jdGlvbihzdGFydCxlbmQpe3JldHVybiB0aGlzLmdldFRpbWUoKT49c3RhcnQuZ2V0VGltZSgpJiZ0aGlzLmdldFRpbWUoKTw9ZW5kLmdldFRpbWUoKTt9OyRQLmlzQWZ0ZXI9ZnVuY3Rpb24oZGF0ZSl7cmV0dXJuIHRoaXMuY29tcGFyZVRvKGRhdGV8fG5ldyBEYXRlKCkpPT09MTt9OyRQLmlzQmVmb3JlPWZ1bmN0aW9uKGRhdGUpe3JldHVybih0aGlzLmNvbXBhcmVUbyhkYXRlfHxuZXcgRGF0ZSgpKT09PS0xKTt9OyRQLmlzVG9kYXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1NhbWVEYXkobmV3IERhdGUoKSk7fTskUC5pc1NhbWVEYXk9ZnVuY3Rpb24oZGF0ZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS5jbGVhclRpbWUoKS5lcXVhbHMoZGF0ZS5jbG9uZSgpLmNsZWFyVGltZSgpKTt9OyRQLmFkZE1pbGxpc2Vjb25kcz1mdW5jdGlvbih2YWx1ZSl7dGhpcy5zZXRNaWxsaXNlY29uZHModGhpcy5nZXRNaWxsaXNlY29uZHMoKSt2YWx1ZSk7cmV0dXJuIHRoaXM7fTskUC5hZGRTZWNvbmRzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGRNaWxsaXNlY29uZHModmFsdWUqMTAwMCk7fTskUC5hZGRNaW51dGVzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGRNaWxsaXNlY29uZHModmFsdWUqNjAwMDApO307JFAuYWRkSG91cnM9ZnVuY3Rpb24odmFsdWUpe3JldHVybiB0aGlzLmFkZE1pbGxpc2Vjb25kcyh2YWx1ZSozNjAwMDAwKTt9OyRQLmFkZERheXM9ZnVuY3Rpb24odmFsdWUpe3RoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSt2YWx1ZSk7cmV0dXJuIHRoaXM7fTskUC5hZGRXZWVrcz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkRGF5cyh2YWx1ZSo3KTt9OyRQLmFkZE1vbnRocz1mdW5jdGlvbih2YWx1ZSl7dmFyIG49dGhpcy5nZXREYXRlKCk7dGhpcy5zZXREYXRlKDEpO3RoaXMuc2V0TW9udGgodGhpcy5nZXRNb250aCgpK3ZhbHVlKTt0aGlzLnNldERhdGUoTWF0aC5taW4obiwkRC5nZXREYXlzSW5Nb250aCh0aGlzLmdldEZ1bGxZZWFyKCksdGhpcy5nZXRNb250aCgpKSkpO3JldHVybiB0aGlzO307JFAuYWRkWWVhcnM9ZnVuY3Rpb24odmFsdWUpe3JldHVybiB0aGlzLmFkZE1vbnRocyh2YWx1ZSoxMik7fTskUC5hZGQ9ZnVuY3Rpb24oY29uZmlnKXtpZih0eXBlb2YgY29uZmlnPT1cIm51bWJlclwiKXt0aGlzLl9vcmllbnQ9Y29uZmlnO3JldHVybiB0aGlzO31cbnZhciB4PWNvbmZpZztpZih4Lm1pbGxpc2Vjb25kcyl7dGhpcy5hZGRNaWxsaXNlY29uZHMoeC5taWxsaXNlY29uZHMpO31cbmlmKHguc2Vjb25kcyl7dGhpcy5hZGRTZWNvbmRzKHguc2Vjb25kcyk7fVxuaWYoeC5taW51dGVzKXt0aGlzLmFkZE1pbnV0ZXMoeC5taW51dGVzKTt9XG5pZih4LmhvdXJzKXt0aGlzLmFkZEhvdXJzKHguaG91cnMpO31cbmlmKHgud2Vla3Mpe3RoaXMuYWRkV2Vla3MoeC53ZWVrcyk7fVxuaWYoeC5tb250aHMpe3RoaXMuYWRkTW9udGhzKHgubW9udGhzKTt9XG5pZih4LnllYXJzKXt0aGlzLmFkZFllYXJzKHgueWVhcnMpO31cbmlmKHguZGF5cyl7dGhpcy5hZGREYXlzKHguZGF5cyk7fVxucmV0dXJuIHRoaXM7fTt2YXIgJHksJG0sJGQ7JFAuZ2V0V2Vlaz1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnLG4scyx3OyR5PSghJHkpP3RoaXMuZ2V0RnVsbFllYXIoKTokeTskbT0oISRtKT90aGlzLmdldE1vbnRoKCkrMTokbTskZD0oISRkKT90aGlzLmdldERhdGUoKTokZDtpZigkbTw9Mil7YT0keS0xO2I9KGEvNHwwKS0oYS8xMDB8MCkrKGEvNDAwfDApO2M9KChhLTEpLzR8MCktKChhLTEpLzEwMHwwKSsoKGEtMSkvNDAwfDApO3M9Yi1jO2U9MDtmPSRkLTErKDMxKigkbS0xKSk7fWVsc2V7YT0keTtiPShhLzR8MCktKGEvMTAwfDApKyhhLzQwMHwwKTtjPSgoYS0xKS80fDApLSgoYS0xKS8xMDB8MCkrKChhLTEpLzQwMHwwKTtzPWItYztlPXMrMTtmPSRkKygoMTUzKigkbS0zKSsyKS81KSs1OCtzO31cbmc9KGErYiklNztkPShmK2ctZSklNztuPShmKzMtZCl8MDtpZihuPDApe3c9NTMtKChnLXMpLzV8MCk7fWVsc2UgaWYobj4zNjQrcyl7dz0xO31lbHNle3c9KG4vN3wwKSsxO31cbiR5PSRtPSRkPW51bGw7cmV0dXJuIHc7fTskUC5nZXRJU09XZWVrPWZ1bmN0aW9uKCl7JHk9dGhpcy5nZXRVVENGdWxsWWVhcigpOyRtPXRoaXMuZ2V0VVRDTW9udGgoKSsxOyRkPXRoaXMuZ2V0VVRDRGF0ZSgpO3JldHVybiBwKHRoaXMuZ2V0V2VlaygpKTt9OyRQLnNldFdlZWs9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMubW92ZVRvRGF5T2ZXZWVrKDEpLmFkZFdlZWtzKG4tdGhpcy5nZXRXZWVrKCkpO307JEQuX3ZhbGlkYXRlPWZ1bmN0aW9uKG4sbWluLG1heCxuYW1lKXtpZih0eXBlb2Ygbj09XCJ1bmRlZmluZWRcIil7cmV0dXJuIGZhbHNlO31lbHNlIGlmKHR5cGVvZiBuIT1cIm51bWJlclwiKXt0aHJvdyBuZXcgVHlwZUVycm9yKG4rXCIgaXMgbm90IGEgTnVtYmVyLlwiKTt9ZWxzZSBpZihuPG1pbnx8bj5tYXgpe3Rocm93IG5ldyBSYW5nZUVycm9yKG4rXCIgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIFwiK25hbWUrXCIuXCIpO31cbnJldHVybiB0cnVlO307JEQudmFsaWRhdGVNaWxsaXNlY29uZD1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwwLDk5OSxcIm1pbGxpc2Vjb25kXCIpO307JEQudmFsaWRhdGVTZWNvbmQ9ZnVuY3Rpb24odmFsdWUpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMCw1OSxcInNlY29uZFwiKTt9OyRELnZhbGlkYXRlTWludXRlPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDAsNTksXCJtaW51dGVcIik7fTskRC52YWxpZGF0ZUhvdXI9ZnVuY3Rpb24odmFsdWUpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMCwyMyxcImhvdXJcIik7fTskRC52YWxpZGF0ZURheT1mdW5jdGlvbih2YWx1ZSx5ZWFyLG1vbnRoKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDEsJEQuZ2V0RGF5c0luTW9udGgoeWVhcixtb250aCksXCJkYXlcIik7fTskRC52YWxpZGF0ZU1vbnRoPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDAsMTEsXCJtb250aFwiKTt9OyRELnZhbGlkYXRlWWVhcj1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwwLDk5OTksXCJ5ZWFyXCIpO307JFAuc2V0PWZ1bmN0aW9uKGNvbmZpZyl7aWYoJEQudmFsaWRhdGVNaWxsaXNlY29uZChjb25maWcubWlsbGlzZWNvbmQpKXt0aGlzLmFkZE1pbGxpc2Vjb25kcyhjb25maWcubWlsbGlzZWNvbmQtdGhpcy5nZXRNaWxsaXNlY29uZHMoKSk7fVxuaWYoJEQudmFsaWRhdGVTZWNvbmQoY29uZmlnLnNlY29uZCkpe3RoaXMuYWRkU2Vjb25kcyhjb25maWcuc2Vjb25kLXRoaXMuZ2V0U2Vjb25kcygpKTt9XG5pZigkRC52YWxpZGF0ZU1pbnV0ZShjb25maWcubWludXRlKSl7dGhpcy5hZGRNaW51dGVzKGNvbmZpZy5taW51dGUtdGhpcy5nZXRNaW51dGVzKCkpO31cbmlmKCRELnZhbGlkYXRlSG91cihjb25maWcuaG91cikpe3RoaXMuYWRkSG91cnMoY29uZmlnLmhvdXItdGhpcy5nZXRIb3VycygpKTt9XG5pZigkRC52YWxpZGF0ZU1vbnRoKGNvbmZpZy5tb250aCkpe3RoaXMuYWRkTW9udGhzKGNvbmZpZy5tb250aC10aGlzLmdldE1vbnRoKCkpO31cbmlmKCRELnZhbGlkYXRlWWVhcihjb25maWcueWVhcikpe3RoaXMuYWRkWWVhcnMoY29uZmlnLnllYXItdGhpcy5nZXRGdWxsWWVhcigpKTt9XG5pZigkRC52YWxpZGF0ZURheShjb25maWcuZGF5LHRoaXMuZ2V0RnVsbFllYXIoKSx0aGlzLmdldE1vbnRoKCkpKXt0aGlzLmFkZERheXMoY29uZmlnLmRheS10aGlzLmdldERhdGUoKSk7fVxuaWYoY29uZmlnLnRpbWV6b25lKXt0aGlzLnNldFRpbWV6b25lKGNvbmZpZy50aW1lem9uZSk7fVxuaWYoY29uZmlnLnRpbWV6b25lT2Zmc2V0KXt0aGlzLnNldFRpbWV6b25lT2Zmc2V0KGNvbmZpZy50aW1lem9uZU9mZnNldCk7fVxuaWYoY29uZmlnLndlZWsmJiRELl92YWxpZGF0ZShjb25maWcud2VlaywwLDUzLFwid2Vla1wiKSl7dGhpcy5zZXRXZWVrKGNvbmZpZy53ZWVrKTt9XG5yZXR1cm4gdGhpczt9OyRQLm1vdmVUb0ZpcnN0RGF5T2ZNb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNldCh7ZGF5OjF9KTt9OyRQLm1vdmVUb0xhc3REYXlPZk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0KHtkYXk6JEQuZ2V0RGF5c0luTW9udGgodGhpcy5nZXRGdWxsWWVhcigpLHRoaXMuZ2V0TW9udGgoKSl9KTt9OyRQLm1vdmVUb050aE9jY3VycmVuY2U9ZnVuY3Rpb24oZGF5T2ZXZWVrLG9jY3VycmVuY2Upe3ZhciBzaGlmdD0wO2lmKG9jY3VycmVuY2U+MCl7c2hpZnQ9b2NjdXJyZW5jZS0xO31cbmVsc2UgaWYob2NjdXJyZW5jZT09PS0xKXt0aGlzLm1vdmVUb0xhc3REYXlPZk1vbnRoKCk7aWYodGhpcy5nZXREYXkoKSE9PWRheU9mV2Vlayl7dGhpcy5tb3ZlVG9EYXlPZldlZWsoZGF5T2ZXZWVrLC0xKTt9XG5yZXR1cm4gdGhpczt9XG5yZXR1cm4gdGhpcy5tb3ZlVG9GaXJzdERheU9mTW9udGgoKS5hZGREYXlzKC0xKS5tb3ZlVG9EYXlPZldlZWsoZGF5T2ZXZWVrLCsxKS5hZGRXZWVrcyhzaGlmdCk7fTskUC5tb3ZlVG9EYXlPZldlZWs9ZnVuY3Rpb24oZGF5T2ZXZWVrLG9yaWVudCl7dmFyIGRpZmY9KGRheU9mV2Vlay10aGlzLmdldERheSgpKzcqKG9yaWVudHx8KzEpKSU3O3JldHVybiB0aGlzLmFkZERheXMoKGRpZmY9PT0wKT9kaWZmKz03KihvcmllbnR8fCsxKTpkaWZmKTt9OyRQLm1vdmVUb01vbnRoPWZ1bmN0aW9uKG1vbnRoLG9yaWVudCl7dmFyIGRpZmY9KG1vbnRoLXRoaXMuZ2V0TW9udGgoKSsxMioob3JpZW50fHwrMSkpJTEyO3JldHVybiB0aGlzLmFkZE1vbnRocygoZGlmZj09PTApP2RpZmYrPTEyKihvcmllbnR8fCsxKTpkaWZmKTt9OyRQLmdldE9yZGluYWxOdW1iZXI9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5jZWlsKCh0aGlzLmNsb25lKCkuY2xlYXJUaW1lKCktbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLDAsMSkpLzg2NDAwMDAwKSsxO307JFAuZ2V0VGltZXpvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gJEQuZ2V0VGltZXpvbmVBYmJyZXZpYXRpb24odGhpcy5nZXRVVENPZmZzZXQoKSk7fTskUC5zZXRUaW1lem9uZU9mZnNldD1mdW5jdGlvbihvZmZzZXQpe3ZhciBoZXJlPXRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSx0aGVyZT1OdW1iZXIob2Zmc2V0KSotNi8xMDtyZXR1cm4gdGhpcy5hZGRNaW51dGVzKHRoZXJlLWhlcmUpO307JFAuc2V0VGltZXpvbmU9ZnVuY3Rpb24ob2Zmc2V0KXtyZXR1cm4gdGhpcy5zZXRUaW1lem9uZU9mZnNldCgkRC5nZXRUaW1lem9uZU9mZnNldChvZmZzZXQpKTt9OyRQLmhhc0RheWxpZ2h0U2F2aW5nVGltZT1mdW5jdGlvbigpe3JldHVybihEYXRlLnRvZGF5KCkuc2V0KHttb250aDowLGRheToxfSkuZ2V0VGltZXpvbmVPZmZzZXQoKSE9PURhdGUudG9kYXkoKS5zZXQoe21vbnRoOjYsZGF5OjF9KS5nZXRUaW1lem9uZU9mZnNldCgpKTt9OyRQLmlzRGF5bGlnaHRTYXZpbmdUaW1lPWZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuaGFzRGF5bGlnaHRTYXZpbmdUaW1lKCkmJm5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKT09PURhdGUudG9kYXkoKS5zZXQoe21vbnRoOjYsZGF5OjF9KS5nZXRUaW1lem9uZU9mZnNldCgpKTt9OyRQLmdldFVUQ09mZnNldD1mdW5jdGlvbigpe3ZhciBuPXRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSotMTAvNixyO2lmKG48MCl7cj0obi0xMDAwMCkudG9TdHJpbmcoKTtyZXR1cm4gci5jaGFyQXQoMCkrci5zdWJzdHIoMik7fWVsc2V7cj0obisxMDAwMCkudG9TdHJpbmcoKTtyZXR1cm5cIitcIityLnN1YnN0cigxKTt9fTskUC5nZXRFbGFwc2VkPWZ1bmN0aW9uKGRhdGUpe3JldHVybihkYXRlfHxuZXcgRGF0ZSgpKS10aGlzO307aWYoISRQLnRvSVNPU3RyaW5nKXskUC50b0lTT1N0cmluZz1mdW5jdGlvbigpe2Z1bmN0aW9uIGYobil7cmV0dXJuIG48MTA/JzAnK246bjt9XG5yZXR1cm4nXCInK3RoaXMuZ2V0VVRDRnVsbFllYXIoKSsnLScrXG5mKHRoaXMuZ2V0VVRDTW9udGgoKSsxKSsnLScrXG5mKHRoaXMuZ2V0VVRDRGF0ZSgpKSsnVCcrXG5mKHRoaXMuZ2V0VVRDSG91cnMoKSkrJzonK1xuZih0aGlzLmdldFVUQ01pbnV0ZXMoKSkrJzonK1xuZih0aGlzLmdldFVUQ1NlY29uZHMoKSkrJ1pcIic7fTt9XG4kUC5fdG9TdHJpbmc9JFAudG9TdHJpbmc7JFAudG9TdHJpbmc9ZnVuY3Rpb24oZm9ybWF0KXt2YXIgeD10aGlzO2lmKGZvcm1hdCYmZm9ybWF0Lmxlbmd0aD09MSl7dmFyIGM9JEMuZm9ybWF0UGF0dGVybnM7eC50PXgudG9TdHJpbmc7c3dpdGNoKGZvcm1hdCl7Y2FzZVwiZFwiOnJldHVybiB4LnQoYy5zaG9ydERhdGUpO2Nhc2VcIkRcIjpyZXR1cm4geC50KGMubG9uZ0RhdGUpO2Nhc2VcIkZcIjpyZXR1cm4geC50KGMuZnVsbERhdGVUaW1lKTtjYXNlXCJtXCI6cmV0dXJuIHgudChjLm1vbnRoRGF5KTtjYXNlXCJyXCI6cmV0dXJuIHgudChjLnJmYzExMjMpO2Nhc2VcInNcIjpyZXR1cm4geC50KGMuc29ydGFibGVEYXRlVGltZSk7Y2FzZVwidFwiOnJldHVybiB4LnQoYy5zaG9ydFRpbWUpO2Nhc2VcIlRcIjpyZXR1cm4geC50KGMubG9uZ1RpbWUpO2Nhc2VcInVcIjpyZXR1cm4geC50KGMudW5pdmVyc2FsU29ydGFibGVEYXRlVGltZSk7Y2FzZVwieVwiOnJldHVybiB4LnQoYy55ZWFyTW9udGgpO319XG52YXIgb3JkPWZ1bmN0aW9uKG4pe3N3aXRjaChuKjEpe2Nhc2UgMTpjYXNlIDIxOmNhc2UgMzE6cmV0dXJuXCJzdFwiO2Nhc2UgMjpjYXNlIDIyOnJldHVyblwibmRcIjtjYXNlIDM6Y2FzZSAyMzpyZXR1cm5cInJkXCI7ZGVmYXVsdDpyZXR1cm5cInRoXCI7fX07cmV0dXJuIGZvcm1hdD9mb3JtYXQucmVwbGFjZSgvKFxcXFwpPyhkZD9kP2Q/fE1NP00/TT98eXk/eT95P3xoaD98SEg/fG1tP3xzcz98dHQ/fFMpL2csZnVuY3Rpb24obSl7aWYobS5jaGFyQXQoMCk9PT1cIlxcXFxcIil7cmV0dXJuIG0ucmVwbGFjZShcIlxcXFxcIixcIlwiKTt9XG54Lmg9eC5nZXRIb3Vycztzd2l0Y2gobSl7Y2FzZVwiaGhcIjpyZXR1cm4gcCh4LmgoKTwxMz8oeC5oKCk9PT0wPzEyOnguaCgpKTooeC5oKCktMTIpKTtjYXNlXCJoXCI6cmV0dXJuIHguaCgpPDEzPyh4LmgoKT09PTA/MTI6eC5oKCkpOih4LmgoKS0xMik7Y2FzZVwiSEhcIjpyZXR1cm4gcCh4LmgoKSk7Y2FzZVwiSFwiOnJldHVybiB4LmgoKTtjYXNlXCJtbVwiOnJldHVybiBwKHguZ2V0TWludXRlcygpKTtjYXNlXCJtXCI6cmV0dXJuIHguZ2V0TWludXRlcygpO2Nhc2VcInNzXCI6cmV0dXJuIHAoeC5nZXRTZWNvbmRzKCkpO2Nhc2VcInNcIjpyZXR1cm4geC5nZXRTZWNvbmRzKCk7Y2FzZVwieXl5eVwiOnJldHVybiBwKHguZ2V0RnVsbFllYXIoKSw0KTtjYXNlXCJ5eVwiOnJldHVybiBwKHguZ2V0RnVsbFllYXIoKSk7Y2FzZVwiZGRkZFwiOnJldHVybiAkQy5kYXlOYW1lc1t4LmdldERheSgpXTtjYXNlXCJkZGRcIjpyZXR1cm4gJEMuYWJicmV2aWF0ZWREYXlOYW1lc1t4LmdldERheSgpXTtjYXNlXCJkZFwiOnJldHVybiBwKHguZ2V0RGF0ZSgpKTtjYXNlXCJkXCI6cmV0dXJuIHguZ2V0RGF0ZSgpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gJEMubW9udGhOYW1lc1t4LmdldE1vbnRoKCldO2Nhc2VcIk1NTVwiOnJldHVybiAkQy5hYmJyZXZpYXRlZE1vbnRoTmFtZXNbeC5nZXRNb250aCgpXTtjYXNlXCJNTVwiOnJldHVybiBwKCh4LmdldE1vbnRoKCkrMSkpO2Nhc2VcIk1cIjpyZXR1cm4geC5nZXRNb250aCgpKzE7Y2FzZVwidFwiOnJldHVybiB4LmgoKTwxMj8kQy5hbURlc2lnbmF0b3Iuc3Vic3RyaW5nKDAsMSk6JEMucG1EZXNpZ25hdG9yLnN1YnN0cmluZygwLDEpO2Nhc2VcInR0XCI6cmV0dXJuIHguaCgpPDEyPyRDLmFtRGVzaWduYXRvcjokQy5wbURlc2lnbmF0b3I7Y2FzZVwiU1wiOnJldHVybiBvcmQoeC5nZXREYXRlKCkpO2RlZmF1bHQ6cmV0dXJuIG07fX0pOnRoaXMuX3RvU3RyaW5nKCk7fTt9KCkpO1xuKGZ1bmN0aW9uKCl7dmFyICREPURhdGUsJFA9JEQucHJvdG90eXBlLCRDPSRELkN1bHR1cmVJbmZvLCROPU51bWJlci5wcm90b3R5cGU7JFAuX29yaWVudD0rMTskUC5fbnRoPW51bGw7JFAuX2lzPWZhbHNlOyRQLl9zYW1lPWZhbHNlOyRQLl9pc1NlY29uZD1mYWxzZTskTi5fZGF0ZUVsZW1lbnQ9XCJkYXlcIjskUC5uZXh0PWZ1bmN0aW9uKCl7dGhpcy5fb3JpZW50PSsxO3JldHVybiB0aGlzO307JEQubmV4dD1mdW5jdGlvbigpe3JldHVybiAkRC50b2RheSgpLm5leHQoKTt9OyRQLmxhc3Q9JFAucHJldj0kUC5wcmV2aW91cz1mdW5jdGlvbigpe3RoaXMuX29yaWVudD0tMTtyZXR1cm4gdGhpczt9OyRELmxhc3Q9JEQucHJldj0kRC5wcmV2aW91cz1mdW5jdGlvbigpe3JldHVybiAkRC50b2RheSgpLmxhc3QoKTt9OyRQLmlzPWZ1bmN0aW9uKCl7dGhpcy5faXM9dHJ1ZTtyZXR1cm4gdGhpczt9OyRQLnNhbWU9ZnVuY3Rpb24oKXt0aGlzLl9zYW1lPXRydWU7dGhpcy5faXNTZWNvbmQ9ZmFsc2U7cmV0dXJuIHRoaXM7fTskUC50b2RheT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNhbWUoKS5kYXkoKTt9OyRQLndlZWtkYXk9ZnVuY3Rpb24oKXtpZih0aGlzLl9pcyl7dGhpcy5faXM9ZmFsc2U7cmV0dXJuKCF0aGlzLmlzKCkuc2F0KCkmJiF0aGlzLmlzKCkuc3VuKCkpO31cbnJldHVybiBmYWxzZTt9OyRQLmF0PWZ1bmN0aW9uKHRpbWUpe3JldHVybih0eXBlb2YgdGltZT09PVwic3RyaW5nXCIpPyRELnBhcnNlKHRoaXMudG9TdHJpbmcoXCJkXCIpK1wiIFwiK3RpbWUpOnRoaXMuc2V0KHRpbWUpO307JE4uZnJvbU5vdz0kTi5hZnRlcj1mdW5jdGlvbihkYXRlKXt2YXIgYz17fTtjW3RoaXMuX2RhdGVFbGVtZW50XT10aGlzO3JldHVybigoIWRhdGUpP25ldyBEYXRlKCk6ZGF0ZS5jbG9uZSgpKS5hZGQoYyk7fTskTi5hZ289JE4uYmVmb3JlPWZ1bmN0aW9uKGRhdGUpe3ZhciBjPXt9O2NbdGhpcy5fZGF0ZUVsZW1lbnRdPXRoaXMqLTE7cmV0dXJuKCghZGF0ZSk/bmV3IERhdGUoKTpkYXRlLmNsb25lKCkpLmFkZChjKTt9O3ZhciBkeD0oXCJzdW5kYXkgbW9uZGF5IHR1ZXNkYXkgd2VkbmVzZGF5IHRodXJzZGF5IGZyaWRheSBzYXR1cmRheVwiKS5zcGxpdCgvXFxzLyksbXg9KFwiamFudWFyeSBmZWJydWFyeSBtYXJjaCBhcHJpbCBtYXkganVuZSBqdWx5IGF1Z3VzdCBzZXB0ZW1iZXIgb2N0b2JlciBub3ZlbWJlciBkZWNlbWJlclwiKS5zcGxpdCgvXFxzLykscHg9KFwiTWlsbGlzZWNvbmQgU2Vjb25kIE1pbnV0ZSBIb3VyIERheSBXZWVrIE1vbnRoIFllYXJcIikuc3BsaXQoL1xccy8pLHB4Zj0oXCJNaWxsaXNlY29uZHMgU2Vjb25kcyBNaW51dGVzIEhvdXJzIERhdGUgV2VlayBNb250aCBGdWxsWWVhclwiKS5zcGxpdCgvXFxzLyksbnRoPShcImZpbmFsIGZpcnN0IHNlY29uZCB0aGlyZCBmb3VydGggZmlmdGhcIikuc3BsaXQoL1xccy8pLGRlOyRQLnRvT2JqZWN0PWZ1bmN0aW9uKCl7dmFyIG89e307Zm9yKHZhciBpPTA7aTxweC5sZW5ndGg7aSsrKXtvW3B4W2ldLnRvTG93ZXJDYXNlKCldPXRoaXNbXCJnZXRcIitweGZbaV1dKCk7fVxucmV0dXJuIG87fTskRC5mcm9tT2JqZWN0PWZ1bmN0aW9uKGNvbmZpZyl7Y29uZmlnLndlZWs9bnVsbDtyZXR1cm4gRGF0ZS50b2RheSgpLnNldChjb25maWcpO307dmFyIGRmPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe2lmKHRoaXMuX2lzKXt0aGlzLl9pcz1mYWxzZTtyZXR1cm4gdGhpcy5nZXREYXkoKT09bjt9XG5pZih0aGlzLl9udGghPT1udWxsKXtpZih0aGlzLl9pc1NlY29uZCl7dGhpcy5hZGRTZWNvbmRzKHRoaXMuX29yaWVudCotMSk7fVxudGhpcy5faXNTZWNvbmQ9ZmFsc2U7dmFyIG50ZW1wPXRoaXMuX250aDt0aGlzLl9udGg9bnVsbDt2YXIgdGVtcD10aGlzLmNsb25lKCkubW92ZVRvTGFzdERheU9mTW9udGgoKTt0aGlzLm1vdmVUb050aE9jY3VycmVuY2UobixudGVtcCk7aWYodGhpcz50ZW1wKXt0aHJvdyBuZXcgUmFuZ2VFcnJvcigkRC5nZXREYXlOYW1lKG4pK1wiIGRvZXMgbm90IG9jY3VyIFwiK250ZW1wK1wiIHRpbWVzIGluIHRoZSBtb250aCBvZiBcIiskRC5nZXRNb250aE5hbWUodGVtcC5nZXRNb250aCgpKStcIiBcIit0ZW1wLmdldEZ1bGxZZWFyKCkrXCIuXCIpO31cbnJldHVybiB0aGlzO31cbnJldHVybiB0aGlzLm1vdmVUb0RheU9mV2VlayhuLHRoaXMuX29yaWVudCk7fTt9O3ZhciBzZGY9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9JEQudG9kYXkoKSxzaGlmdD1uLXQuZ2V0RGF5KCk7aWYobj09PTAmJiRDLmZpcnN0RGF5T2ZXZWVrPT09MSYmdC5nZXREYXkoKSE9PTApe3NoaWZ0PXNoaWZ0Kzc7fVxucmV0dXJuIHQuYWRkRGF5cyhzaGlmdCk7fTt9O2Zvcih2YXIgaT0wO2k8ZHgubGVuZ3RoO2krKyl7JERbZHhbaV0udG9VcHBlckNhc2UoKV09JERbZHhbaV0udG9VcHBlckNhc2UoKS5zdWJzdHJpbmcoMCwzKV09aTskRFtkeFtpXV09JERbZHhbaV0uc3Vic3RyaW5nKDAsMyldPXNkZihpKTskUFtkeFtpXV09JFBbZHhbaV0uc3Vic3RyaW5nKDAsMyldPWRmKGkpO31cbnZhciBtZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtpZih0aGlzLl9pcyl7dGhpcy5faXM9ZmFsc2U7cmV0dXJuIHRoaXMuZ2V0TW9udGgoKT09PW47fVxucmV0dXJuIHRoaXMubW92ZVRvTW9udGgobix0aGlzLl9vcmllbnQpO307fTt2YXIgc21mPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiAkRC50b2RheSgpLnNldCh7bW9udGg6bixkYXk6MX0pO307fTtmb3IodmFyIGo9MDtqPG14Lmxlbmd0aDtqKyspeyREW214W2pdLnRvVXBwZXJDYXNlKCldPSREW214W2pdLnRvVXBwZXJDYXNlKCkuc3Vic3RyaW5nKDAsMyldPWo7JERbbXhbal1dPSREW214W2pdLnN1YnN0cmluZygwLDMpXT1zbWYoaik7JFBbbXhbal1dPSRQW214W2pdLnN1YnN0cmluZygwLDMpXT1tZihqKTt9XG52YXIgZWY9ZnVuY3Rpb24oail7cmV0dXJuIGZ1bmN0aW9uKCl7aWYodGhpcy5faXNTZWNvbmQpe3RoaXMuX2lzU2Vjb25kPWZhbHNlO3JldHVybiB0aGlzO31cbmlmKHRoaXMuX3NhbWUpe3RoaXMuX3NhbWU9dGhpcy5faXM9ZmFsc2U7dmFyIG8xPXRoaXMudG9PYmplY3QoKSxvMj0oYXJndW1lbnRzWzBdfHxuZXcgRGF0ZSgpKS50b09iamVjdCgpLHY9XCJcIixrPWoudG9Mb3dlckNhc2UoKTtmb3IodmFyIG09KHB4Lmxlbmd0aC0xKTttPi0xO20tLSl7dj1weFttXS50b0xvd2VyQ2FzZSgpO2lmKG8xW3ZdIT1vMlt2XSl7cmV0dXJuIGZhbHNlO31cbmlmKGs9PXYpe2JyZWFrO319XG5yZXR1cm4gdHJ1ZTt9XG5pZihqLnN1YnN0cmluZyhqLmxlbmd0aC0xKSE9XCJzXCIpe2orPVwic1wiO31cbnJldHVybiB0aGlzW1wiYWRkXCIral0odGhpcy5fb3JpZW50KTt9O307dmFyIG5mPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3RoaXMuX2RhdGVFbGVtZW50PW47cmV0dXJuIHRoaXM7fTt9O2Zvcih2YXIgaz0wO2s8cHgubGVuZ3RoO2srKyl7ZGU9cHhba10udG9Mb3dlckNhc2UoKTskUFtkZV09JFBbZGUrXCJzXCJdPWVmKHB4W2tdKTskTltkZV09JE5bZGUrXCJzXCJdPW5mKGRlKTt9XG4kUC5fc3M9ZWYoXCJTZWNvbmRcIik7dmFyIG50aGZuPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihkYXlPZldlZWspe2lmKHRoaXMuX3NhbWUpe3JldHVybiB0aGlzLl9zcyhhcmd1bWVudHNbMF0pO31cbmlmKGRheU9mV2Vla3x8ZGF5T2ZXZWVrPT09MCl7cmV0dXJuIHRoaXMubW92ZVRvTnRoT2NjdXJyZW5jZShkYXlPZldlZWssbik7fVxudGhpcy5fbnRoPW47aWYobj09PTImJihkYXlPZldlZWs9PT11bmRlZmluZWR8fGRheU9mV2Vlaz09PW51bGwpKXt0aGlzLl9pc1NlY29uZD10cnVlO3JldHVybiB0aGlzLmFkZFNlY29uZHModGhpcy5fb3JpZW50KTt9XG5yZXR1cm4gdGhpczt9O307Zm9yKHZhciBsPTA7bDxudGgubGVuZ3RoO2wrKyl7JFBbbnRoW2xdXT0obD09PTApP250aGZuKC0xKTpudGhmbihsKTt9fSgpKTtcbihmdW5jdGlvbigpe0RhdGUuUGFyc2luZz17RXhjZXB0aW9uOmZ1bmN0aW9uKHMpe3RoaXMubWVzc2FnZT1cIlBhcnNlIGVycm9yIGF0ICdcIitzLnN1YnN0cmluZygwLDEwKStcIiAuLi4nXCI7fX07dmFyICRQPURhdGUuUGFyc2luZzt2YXIgXz0kUC5PcGVyYXRvcnM9e3J0b2tlbjpmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIG14PXMubWF0Y2gocik7aWYobXgpe3JldHVybihbbXhbMF0scy5zdWJzdHJpbmcobXhbMF0ubGVuZ3RoKV0pO31lbHNle3Rocm93IG5ldyAkUC5FeGNlcHRpb24ocyk7fX07fSx0b2tlbjpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24ocyl7cmV0dXJuIF8ucnRva2VuKG5ldyBSZWdFeHAoXCJeXFxzKlwiK3MrXCJcXHMqXCIpKShzKTt9O30sc3Rva2VuOmZ1bmN0aW9uKHMpe3JldHVybiBfLnJ0b2tlbihuZXcgUmVnRXhwKFwiXlwiK3MpKTt9LHVudGlsOmZ1bmN0aW9uKHApe3JldHVybiBmdW5jdGlvbihzKXt2YXIgcXg9W10scng9bnVsbDt3aGlsZShzLmxlbmd0aCl7dHJ5e3J4PXAuY2FsbCh0aGlzLHMpO31jYXRjaChlKXtxeC5wdXNoKHJ4WzBdKTtzPXJ4WzFdO2NvbnRpbnVlO31cbmJyZWFrO31cbnJldHVybltxeCxzXTt9O30sbWFueTpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHJ4PVtdLHI9bnVsbDt3aGlsZShzLmxlbmd0aCl7dHJ5e3I9cC5jYWxsKHRoaXMscyk7fWNhdGNoKGUpe3JldHVybltyeCxzXTt9XG5yeC5wdXNoKHJbMF0pO3M9clsxXTt9XG5yZXR1cm5bcngsc107fTt9LG9wdGlvbmFsOmZ1bmN0aW9uKHApe3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1udWxsO3RyeXtyPXAuY2FsbCh0aGlzLHMpO31jYXRjaChlKXtyZXR1cm5bbnVsbCxzXTt9XG5yZXR1cm5bclswXSxyWzFdXTt9O30sbm90OmZ1bmN0aW9uKHApe3JldHVybiBmdW5jdGlvbihzKXt0cnl7cC5jYWxsKHRoaXMscyk7fWNhdGNoKGUpe3JldHVybltudWxsLHNdO31cbnRocm93IG5ldyAkUC5FeGNlcHRpb24ocyk7fTt9LGlnbm9yZTpmdW5jdGlvbihwKXtyZXR1cm4gcD9mdW5jdGlvbihzKXt2YXIgcj1udWxsO3I9cC5jYWxsKHRoaXMscyk7cmV0dXJuW251bGwsclsxXV07fTpudWxsO30scHJvZHVjdDpmdW5jdGlvbigpe3ZhciBweD1hcmd1bWVudHNbMF0scXg9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLHJ4PVtdO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7cngucHVzaChfLmVhY2gocHhbaV0scXgpKTt9XG5yZXR1cm4gcng7fSxjYWNoZTpmdW5jdGlvbihydWxlKXt2YXIgY2FjaGU9e30scj1udWxsO3JldHVybiBmdW5jdGlvbihzKXt0cnl7cj1jYWNoZVtzXT0oY2FjaGVbc118fHJ1bGUuY2FsbCh0aGlzLHMpKTt9Y2F0Y2goZSl7cj1jYWNoZVtzXT1lO31cbmlmKHIgaW5zdGFuY2VvZiAkUC5FeGNlcHRpb24pe3Rocm93IHI7fWVsc2V7cmV0dXJuIHI7fX07fSxhbnk6ZnVuY3Rpb24oKXt2YXIgcHg9YXJndW1lbnRzO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1udWxsO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7aWYocHhbaV09PW51bGwpe2NvbnRpbnVlO31cbnRyeXtyPShweFtpXS5jYWxsKHRoaXMscykpO31jYXRjaChlKXtyPW51bGw7fVxuaWYocil7cmV0dXJuIHI7fX1cbnRocm93IG5ldyAkUC5FeGNlcHRpb24ocyk7fTt9LGVhY2g6ZnVuY3Rpb24oKXt2YXIgcHg9YXJndW1lbnRzO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcng9W10scj1udWxsO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7aWYocHhbaV09PW51bGwpe2NvbnRpbnVlO31cbnRyeXtyPShweFtpXS5jYWxsKHRoaXMscykpO31jYXRjaChlKXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO31cbnJ4LnB1c2goclswXSk7cz1yWzFdO31cbnJldHVybltyeCxzXTt9O30sYWxsOmZ1bmN0aW9uKCl7dmFyIHB4PWFyZ3VtZW50cyxfPV87cmV0dXJuIF8uZWFjaChfLm9wdGlvbmFsKHB4KSk7fSxzZXF1ZW5jZTpmdW5jdGlvbihweCxkLGMpe2Q9ZHx8Xy5ydG9rZW4oL15cXHMqLyk7Yz1jfHxudWxsO2lmKHB4Lmxlbmd0aD09MSl7cmV0dXJuIHB4WzBdO31cbnJldHVybiBmdW5jdGlvbihzKXt2YXIgcj1udWxsLHE9bnVsbDt2YXIgcng9W107Zm9yKHZhciBpPTA7aTxweC5sZW5ndGg7aSsrKXt0cnl7cj1weFtpXS5jYWxsKHRoaXMscyk7fWNhdGNoKGUpe2JyZWFrO31cbnJ4LnB1c2goclswXSk7dHJ5e3E9ZC5jYWxsKHRoaXMsclsxXSk7fWNhdGNoKGV4KXtxPW51bGw7YnJlYWs7fVxucz1xWzFdO31cbmlmKCFyKXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO31cbmlmKHEpe3Rocm93IG5ldyAkUC5FeGNlcHRpb24ocVsxXSk7fVxuaWYoYyl7dHJ5e3I9Yy5jYWxsKHRoaXMsclsxXSk7fWNhdGNoKGV5KXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHJbMV0pO319XG5yZXR1cm5bcngsKHI/clsxXTpzKV07fTt9LGJldHdlZW46ZnVuY3Rpb24oZDEscCxkMil7ZDI9ZDJ8fGQxO3ZhciBfZm49Xy5lYWNoKF8uaWdub3JlKGQxKSxwLF8uaWdub3JlKGQyKSk7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByeD1fZm4uY2FsbCh0aGlzLHMpO3JldHVybltbcnhbMF1bMF0sclswXVsyXV0scnhbMV1dO307fSxsaXN0OmZ1bmN0aW9uKHAsZCxjKXtkPWR8fF8ucnRva2VuKC9eXFxzKi8pO2M9Y3x8bnVsbDtyZXR1cm4ocCBpbnN0YW5jZW9mIEFycmF5P18uZWFjaChfLnByb2R1Y3QocC5zbGljZSgwLC0xKSxfLmlnbm9yZShkKSkscC5zbGljZSgtMSksXy5pZ25vcmUoYykpOl8uZWFjaChfLm1hbnkoXy5lYWNoKHAsXy5pZ25vcmUoZCkpKSxweCxfLmlnbm9yZShjKSkpO30sc2V0OmZ1bmN0aW9uKHB4LGQsYyl7ZD1kfHxfLnJ0b2tlbigvXlxccyovKTtjPWN8fG51bGw7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByPW51bGwscD1udWxsLHE9bnVsbCxyeD1udWxsLGJlc3Q9W1tdLHNdLGxhc3Q9ZmFsc2U7Zm9yKHZhciBpPTA7aTxweC5sZW5ndGg7aSsrKXtxPW51bGw7cD1udWxsO3I9bnVsbDtsYXN0PShweC5sZW5ndGg9PTEpO3RyeXtyPXB4W2ldLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7Y29udGludWU7fVxucng9W1tyWzBdXSxyWzFdXTtpZihyWzFdLmxlbmd0aD4wJiYhbGFzdCl7dHJ5e3E9ZC5jYWxsKHRoaXMsclsxXSk7fWNhdGNoKGV4KXtsYXN0PXRydWU7fX1lbHNle2xhc3Q9dHJ1ZTt9XG5pZighbGFzdCYmcVsxXS5sZW5ndGg9PT0wKXtsYXN0PXRydWU7fVxuaWYoIWxhc3Qpe3ZhciBxeD1bXTtmb3IodmFyIGo9MDtqPHB4Lmxlbmd0aDtqKyspe2lmKGkhPWope3F4LnB1c2gocHhbal0pO319XG5wPV8uc2V0KHF4LGQpLmNhbGwodGhpcyxxWzFdKTtpZihwWzBdLmxlbmd0aD4wKXtyeFswXT1yeFswXS5jb25jYXQocFswXSk7cnhbMV09cFsxXTt9fVxuaWYocnhbMV0ubGVuZ3RoPGJlc3RbMV0ubGVuZ3RoKXtiZXN0PXJ4O31cbmlmKGJlc3RbMV0ubGVuZ3RoPT09MCl7YnJlYWs7fX1cbmlmKGJlc3RbMF0ubGVuZ3RoPT09MCl7cmV0dXJuIGJlc3Q7fVxuaWYoYyl7dHJ5e3E9Yy5jYWxsKHRoaXMsYmVzdFsxXSk7fWNhdGNoKGV5KXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKGJlc3RbMV0pO31cbmJlc3RbMV09cVsxXTt9XG5yZXR1cm4gYmVzdDt9O30sZm9yd2FyZDpmdW5jdGlvbihncixmbmFtZSl7cmV0dXJuIGZ1bmN0aW9uKHMpe3JldHVybiBncltmbmFtZV0uY2FsbCh0aGlzLHMpO307fSxyZXBsYWNlOmZ1bmN0aW9uKHJ1bGUscmVwbCl7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByPXJ1bGUuY2FsbCh0aGlzLHMpO3JldHVybltyZXBsLHJbMV1dO307fSxwcm9jZXNzOmZ1bmN0aW9uKHJ1bGUsZm4pe3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1ydWxlLmNhbGwodGhpcyxzKTtyZXR1cm5bZm4uY2FsbCh0aGlzLHJbMF0pLHJbMV1dO307fSxtaW46ZnVuY3Rpb24obWluLHJ1bGUpe3JldHVybiBmdW5jdGlvbihzKXt2YXIgcng9cnVsZS5jYWxsKHRoaXMscyk7aWYocnhbMF0ubGVuZ3RoPG1pbil7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9XG5yZXR1cm4gcng7fTt9fTt2YXIgX2dlbmVyYXRvcj1mdW5jdGlvbihvcCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGFyZ3M9bnVsbCxyeD1bXTtpZihhcmd1bWVudHMubGVuZ3RoPjEpe2FyZ3M9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTt9ZWxzZSBpZihhcmd1bWVudHNbMF1pbnN0YW5jZW9mIEFycmF5KXthcmdzPWFyZ3VtZW50c1swXTt9XG5pZihhcmdzKXtmb3IodmFyIGk9MCxweD1hcmdzLnNoaWZ0KCk7aTxweC5sZW5ndGg7aSsrKXthcmdzLnVuc2hpZnQocHhbaV0pO3J4LnB1c2gob3AuYXBwbHkobnVsbCxhcmdzKSk7YXJncy5zaGlmdCgpO3JldHVybiByeDt9fWVsc2V7cmV0dXJuIG9wLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9fTt9O3ZhciBneD1cIm9wdGlvbmFsIG5vdCBpZ25vcmUgY2FjaGVcIi5zcGxpdCgvXFxzLyk7Zm9yKHZhciBpPTA7aTxneC5sZW5ndGg7aSsrKXtfW2d4W2ldXT1fZ2VuZXJhdG9yKF9bZ3hbaV1dKTt9XG52YXIgX3ZlY3Rvcj1mdW5jdGlvbihvcCl7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoYXJndW1lbnRzWzBdaW5zdGFuY2VvZiBBcnJheSl7cmV0dXJuIG9wLmFwcGx5KG51bGwsYXJndW1lbnRzWzBdKTt9ZWxzZXtyZXR1cm4gb3AuYXBwbHkobnVsbCxhcmd1bWVudHMpO319O307dmFyIHZ4PVwiZWFjaCBhbnkgYWxsXCIuc3BsaXQoL1xccy8pO2Zvcih2YXIgaj0wO2o8dngubGVuZ3RoO2orKyl7X1t2eFtqXV09X3ZlY3RvcihfW3Z4W2pdXSk7fX0oKSk7KGZ1bmN0aW9uKCl7dmFyICREPURhdGUsJFA9JEQucHJvdG90eXBlLCRDPSRELkN1bHR1cmVJbmZvO3ZhciBmbGF0dGVuQW5kQ29tcGFjdD1mdW5jdGlvbihheCl7dmFyIHJ4PVtdO2Zvcih2YXIgaT0wO2k8YXgubGVuZ3RoO2krKyl7aWYoYXhbaV1pbnN0YW5jZW9mIEFycmF5KXtyeD1yeC5jb25jYXQoZmxhdHRlbkFuZENvbXBhY3QoYXhbaV0pKTt9ZWxzZXtpZihheFtpXSl7cngucHVzaChheFtpXSk7fX19XG5yZXR1cm4gcng7fTskRC5HcmFtbWFyPXt9OyRELlRyYW5zbGF0b3I9e2hvdXI6ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5ob3VyPU51bWJlcihzKTt9O30sbWludXRlOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubWludXRlPU51bWJlcihzKTt9O30sc2Vjb25kOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMuc2Vjb25kPU51bWJlcihzKTt9O30sbWVyaWRpYW46ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5tZXJpZGlhbj1zLnNsaWNlKDAsMSkudG9Mb3dlckNhc2UoKTt9O30sdGltZXpvbmU6ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49cy5yZXBsYWNlKC9bXlxcZFxcK1xcLV0vZyxcIlwiKTtpZihuLmxlbmd0aCl7dGhpcy50aW1lem9uZU9mZnNldD1OdW1iZXIobik7fWVsc2V7dGhpcy50aW1lem9uZT1zLnRvTG93ZXJDYXNlKCk7fX07fSxkYXk6ZnVuY3Rpb24oeCl7dmFyIHM9eFswXTtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLmRheT1OdW1iZXIocy5tYXRjaCgvXFxkKy8pWzBdKTt9O30sbW9udGg6ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5tb250aD0ocy5sZW5ndGg9PTMpP1wiamFuIGZlYiBtYXIgYXByIG1heSBqdW4ganVsIGF1ZyBzZXAgb2N0IG5vdiBkZWNcIi5pbmRleE9mKHMpLzQ6TnVtYmVyKHMpLTE7fTt9LHllYXI6ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49TnVtYmVyKHMpO3RoaXMueWVhcj0oKHMubGVuZ3RoPjIpP246KG4rKCgobisyMDAwKTwkQy50d29EaWdpdFllYXJNYXgpPzIwMDA6MTkwMCkpKTt9O30scmRheTpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXtzd2l0Y2gocyl7Y2FzZVwieWVzdGVyZGF5XCI6dGhpcy5kYXlzPS0xO2JyZWFrO2Nhc2VcInRvbW9ycm93XCI6dGhpcy5kYXlzPTE7YnJlYWs7Y2FzZVwidG9kYXlcIjp0aGlzLmRheXM9MDticmVhaztjYXNlXCJub3dcIjp0aGlzLmRheXM9MDt0aGlzLm5vdz10cnVlO2JyZWFrO319O30sZmluaXNoRXhhY3Q6ZnVuY3Rpb24oeCl7eD0oeCBpbnN0YW5jZW9mIEFycmF5KT94Olt4XTtmb3IodmFyIGk9MDtpPHgubGVuZ3RoO2krKyl7aWYoeFtpXSl7eFtpXS5jYWxsKHRoaXMpO319XG52YXIgbm93PW5ldyBEYXRlKCk7aWYoKHRoaXMuaG91cnx8dGhpcy5taW51dGUpJiYoIXRoaXMubW9udGgmJiF0aGlzLnllYXImJiF0aGlzLmRheSkpe3RoaXMuZGF5PW5vdy5nZXREYXRlKCk7fVxuaWYoIXRoaXMueWVhcil7dGhpcy55ZWFyPW5vdy5nZXRGdWxsWWVhcigpO31cbmlmKCF0aGlzLm1vbnRoJiZ0aGlzLm1vbnRoIT09MCl7dGhpcy5tb250aD1ub3cuZ2V0TW9udGgoKTt9XG5pZighdGhpcy5kYXkpe3RoaXMuZGF5PTE7fVxuaWYoIXRoaXMuaG91cil7dGhpcy5ob3VyPTA7fVxuaWYoIXRoaXMubWludXRlKXt0aGlzLm1pbnV0ZT0wO31cbmlmKCF0aGlzLnNlY29uZCl7dGhpcy5zZWNvbmQ9MDt9XG5pZih0aGlzLm1lcmlkaWFuJiZ0aGlzLmhvdXIpe2lmKHRoaXMubWVyaWRpYW49PVwicFwiJiZ0aGlzLmhvdXI8MTIpe3RoaXMuaG91cj10aGlzLmhvdXIrMTI7fWVsc2UgaWYodGhpcy5tZXJpZGlhbj09XCJhXCImJnRoaXMuaG91cj09MTIpe3RoaXMuaG91cj0wO319XG5pZih0aGlzLmRheT4kRC5nZXREYXlzSW5Nb250aCh0aGlzLnllYXIsdGhpcy5tb250aCkpe3Rocm93IG5ldyBSYW5nZUVycm9yKHRoaXMuZGF5K1wiIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBkYXlzLlwiKTt9XG52YXIgcj1uZXcgRGF0ZSh0aGlzLnllYXIsdGhpcy5tb250aCx0aGlzLmRheSx0aGlzLmhvdXIsdGhpcy5taW51dGUsdGhpcy5zZWNvbmQpO2lmKHRoaXMudGltZXpvbmUpe3Iuc2V0KHt0aW1lem9uZTp0aGlzLnRpbWV6b25lfSk7fWVsc2UgaWYodGhpcy50aW1lem9uZU9mZnNldCl7ci5zZXQoe3RpbWV6b25lT2Zmc2V0OnRoaXMudGltZXpvbmVPZmZzZXR9KTt9XG5yZXR1cm4gcjt9LGZpbmlzaDpmdW5jdGlvbih4KXt4PSh4IGluc3RhbmNlb2YgQXJyYXkpP2ZsYXR0ZW5BbmRDb21wYWN0KHgpOlt4XTtpZih4Lmxlbmd0aD09PTApe3JldHVybiBudWxsO31cbmZvcih2YXIgaT0wO2k8eC5sZW5ndGg7aSsrKXtpZih0eXBlb2YgeFtpXT09XCJmdW5jdGlvblwiKXt4W2ldLmNhbGwodGhpcyk7fX1cbnZhciB0b2RheT0kRC50b2RheSgpO2lmKHRoaXMubm93JiYhdGhpcy51bml0JiYhdGhpcy5vcGVyYXRvcil7cmV0dXJuIG5ldyBEYXRlKCk7fWVsc2UgaWYodGhpcy5ub3cpe3RvZGF5PW5ldyBEYXRlKCk7fVxudmFyIGV4cHJlc3Npb249ISEodGhpcy5kYXlzJiZ0aGlzLmRheXMhPT1udWxsfHx0aGlzLm9yaWVudHx8dGhpcy5vcGVyYXRvcik7dmFyIGdhcCxtb2Qsb3JpZW50O29yaWVudD0oKHRoaXMub3JpZW50PT1cInBhc3RcInx8dGhpcy5vcGVyYXRvcj09XCJzdWJ0cmFjdFwiKT8tMToxKTtpZighdGhpcy5ub3cmJlwiaG91ciBtaW51dGUgc2Vjb25kXCIuaW5kZXhPZih0aGlzLnVuaXQpIT0tMSl7dG9kYXkuc2V0VGltZVRvTm93KCk7fVxuaWYodGhpcy5tb250aHx8dGhpcy5tb250aD09PTApe2lmKFwieWVhciBkYXkgaG91ciBtaW51dGUgc2Vjb25kXCIuaW5kZXhPZih0aGlzLnVuaXQpIT0tMSl7dGhpcy52YWx1ZT10aGlzLm1vbnRoKzE7dGhpcy5tb250aD1udWxsO2V4cHJlc3Npb249dHJ1ZTt9fVxuaWYoIWV4cHJlc3Npb24mJnRoaXMud2Vla2RheSYmIXRoaXMuZGF5JiYhdGhpcy5kYXlzKXt2YXIgdGVtcD1EYXRlW3RoaXMud2Vla2RheV0oKTt0aGlzLmRheT10ZW1wLmdldERhdGUoKTtpZighdGhpcy5tb250aCl7dGhpcy5tb250aD10ZW1wLmdldE1vbnRoKCk7fVxudGhpcy55ZWFyPXRlbXAuZ2V0RnVsbFllYXIoKTt9XG5pZihleHByZXNzaW9uJiZ0aGlzLndlZWtkYXkmJnRoaXMudW5pdCE9XCJtb250aFwiKXt0aGlzLnVuaXQ9XCJkYXlcIjtnYXA9KCRELmdldERheU51bWJlckZyb21OYW1lKHRoaXMud2Vla2RheSktdG9kYXkuZ2V0RGF5KCkpO21vZD03O3RoaXMuZGF5cz1nYXA/KChnYXArKG9yaWVudCptb2QpKSVtb2QpOihvcmllbnQqbW9kKTt9XG5pZih0aGlzLm1vbnRoJiZ0aGlzLnVuaXQ9PVwiZGF5XCImJnRoaXMub3BlcmF0b3Ipe3RoaXMudmFsdWU9KHRoaXMubW9udGgrMSk7dGhpcy5tb250aD1udWxsO31cbmlmKHRoaXMudmFsdWUhPW51bGwmJnRoaXMubW9udGghPW51bGwmJnRoaXMueWVhciE9bnVsbCl7dGhpcy5kYXk9dGhpcy52YWx1ZSoxO31cbmlmKHRoaXMubW9udGgmJiF0aGlzLmRheSYmdGhpcy52YWx1ZSl7dG9kYXkuc2V0KHtkYXk6dGhpcy52YWx1ZSoxfSk7aWYoIWV4cHJlc3Npb24pe3RoaXMuZGF5PXRoaXMudmFsdWUqMTt9fVxuaWYoIXRoaXMubW9udGgmJnRoaXMudmFsdWUmJnRoaXMudW5pdD09XCJtb250aFwiJiYhdGhpcy5ub3cpe3RoaXMubW9udGg9dGhpcy52YWx1ZTtleHByZXNzaW9uPXRydWU7fVxuaWYoZXhwcmVzc2lvbiYmKHRoaXMubW9udGh8fHRoaXMubW9udGg9PT0wKSYmdGhpcy51bml0IT1cInllYXJcIil7dGhpcy51bml0PVwibW9udGhcIjtnYXA9KHRoaXMubW9udGgtdG9kYXkuZ2V0TW9udGgoKSk7bW9kPTEyO3RoaXMubW9udGhzPWdhcD8oKGdhcCsob3JpZW50Km1vZCkpJW1vZCk6KG9yaWVudCptb2QpO3RoaXMubW9udGg9bnVsbDt9XG5pZighdGhpcy51bml0KXt0aGlzLnVuaXQ9XCJkYXlcIjt9XG5pZighdGhpcy52YWx1ZSYmdGhpcy5vcGVyYXRvciYmdGhpcy5vcGVyYXRvciE9PW51bGwmJnRoaXNbdGhpcy51bml0K1wic1wiXSYmdGhpc1t0aGlzLnVuaXQrXCJzXCJdIT09bnVsbCl7dGhpc1t0aGlzLnVuaXQrXCJzXCJdPXRoaXNbdGhpcy51bml0K1wic1wiXSsoKHRoaXMub3BlcmF0b3I9PVwiYWRkXCIpPzE6LTEpKyh0aGlzLnZhbHVlfHwwKSpvcmllbnQ7fWVsc2UgaWYodGhpc1t0aGlzLnVuaXQrXCJzXCJdPT1udWxsfHx0aGlzLm9wZXJhdG9yIT1udWxsKXtpZighdGhpcy52YWx1ZSl7dGhpcy52YWx1ZT0xO31cbnRoaXNbdGhpcy51bml0K1wic1wiXT10aGlzLnZhbHVlKm9yaWVudDt9XG5pZih0aGlzLm1lcmlkaWFuJiZ0aGlzLmhvdXIpe2lmKHRoaXMubWVyaWRpYW49PVwicFwiJiZ0aGlzLmhvdXI8MTIpe3RoaXMuaG91cj10aGlzLmhvdXIrMTI7fWVsc2UgaWYodGhpcy5tZXJpZGlhbj09XCJhXCImJnRoaXMuaG91cj09MTIpe3RoaXMuaG91cj0wO319XG5pZih0aGlzLndlZWtkYXkmJiF0aGlzLmRheSYmIXRoaXMuZGF5cyl7dmFyIHRlbXA9RGF0ZVt0aGlzLndlZWtkYXldKCk7dGhpcy5kYXk9dGVtcC5nZXREYXRlKCk7aWYodGVtcC5nZXRNb250aCgpIT09dG9kYXkuZ2V0TW9udGgoKSl7dGhpcy5tb250aD10ZW1wLmdldE1vbnRoKCk7fX1cbmlmKCh0aGlzLm1vbnRofHx0aGlzLm1vbnRoPT09MCkmJiF0aGlzLmRheSl7dGhpcy5kYXk9MTt9XG5pZighdGhpcy5vcmllbnQmJiF0aGlzLm9wZXJhdG9yJiZ0aGlzLnVuaXQ9PVwid2Vla1wiJiZ0aGlzLnZhbHVlJiYhdGhpcy5kYXkmJiF0aGlzLm1vbnRoKXtyZXR1cm4gRGF0ZS50b2RheSgpLnNldFdlZWsodGhpcy52YWx1ZSk7fVxuaWYoZXhwcmVzc2lvbiYmdGhpcy50aW1lem9uZSYmdGhpcy5kYXkmJnRoaXMuZGF5cyl7dGhpcy5kYXk9dGhpcy5kYXlzO31cbnJldHVybihleHByZXNzaW9uKT90b2RheS5hZGQodGhpcyk6dG9kYXkuc2V0KHRoaXMpO319O3ZhciBfPSRELlBhcnNpbmcuT3BlcmF0b3JzLGc9JEQuR3JhbW1hcix0PSRELlRyYW5zbGF0b3IsX2ZuO2cuZGF0ZVBhcnREZWxpbWl0ZXI9Xy5ydG9rZW4oL14oW1xcc1xcLVxcLlxcLFxcL1xceDI3XSspLyk7Zy50aW1lUGFydERlbGltaXRlcj1fLnN0b2tlbihcIjpcIik7Zy53aGl0ZVNwYWNlPV8ucnRva2VuKC9eXFxzKi8pO2cuZ2VuZXJhbERlbGltaXRlcj1fLnJ0b2tlbigvXigoW1xcc1xcLF18YXR8QHxvbikrKS8pO3ZhciBfQz17fTtnLmN0b2tlbj1mdW5jdGlvbihrZXlzKXt2YXIgZm49X0Nba2V5c107aWYoIWZuKXt2YXIgYz0kQy5yZWdleFBhdHRlcm5zO3ZhciBreD1rZXlzLnNwbGl0KC9cXHMrLykscHg9W107Zm9yKHZhciBpPTA7aTxreC5sZW5ndGg7aSsrKXtweC5wdXNoKF8ucmVwbGFjZShfLnJ0b2tlbihjW2t4W2ldXSksa3hbaV0pKTt9XG5mbj1fQ1trZXlzXT1fLmFueS5hcHBseShudWxsLHB4KTt9XG5yZXR1cm4gZm47fTtnLmN0b2tlbjI9ZnVuY3Rpb24oa2V5KXtyZXR1cm4gXy5ydG9rZW4oJEMucmVnZXhQYXR0ZXJuc1trZXldKTt9O2cuaD1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXigwWzAtOV18MVswLTJdfFsxLTldKS8pLHQuaG91cikpO2cuaGg9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oMFswLTldfDFbMC0yXSkvKSx0LmhvdXIpKTtnLkg9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oWzAtMV1bMC05XXwyWzAtM118WzAtOV0pLyksdC5ob3VyKSk7Zy5ISD1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihbMC0xXVswLTldfDJbMC0zXSkvKSx0LmhvdXIpKTtnLm09Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oWzAtNV1bMC05XXxbMC05XSkvKSx0Lm1pbnV0ZSkpO2cubW09Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL15bMC01XVswLTldLyksdC5taW51dGUpKTtnLnM9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oWzAtNV1bMC05XXxbMC05XSkvKSx0LnNlY29uZCkpO2cuc3M9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL15bMC01XVswLTldLyksdC5zZWNvbmQpKTtnLmhtcz1fLmNhY2hlKF8uc2VxdWVuY2UoW2cuSCxnLm0sZy5zXSxnLnRpbWVQYXJ0RGVsaW1pdGVyKSk7Zy50PV8uY2FjaGUoXy5wcm9jZXNzKGcuY3Rva2VuMihcInNob3J0TWVyaWRpYW5cIiksdC5tZXJpZGlhbikpO2cudHQ9Xy5jYWNoZShfLnByb2Nlc3MoZy5jdG9rZW4yKFwibG9uZ01lcmlkaWFuXCIpLHQubWVyaWRpYW4pKTtnLno9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oKFxcK3xcXC0pXFxzKlxcZFxcZFxcZFxcZCl8KChcXCt8XFwtKVxcZFxcZFxcOj9cXGRcXGQpLyksdC50aW1lem9uZSkpO2cueno9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oKFxcK3xcXC0pXFxzKlxcZFxcZFxcZFxcZCl8KChcXCt8XFwtKVxcZFxcZFxcOj9cXGRcXGQpLyksdC50aW1lem9uZSkpO2cuenp6PV8uY2FjaGUoXy5wcm9jZXNzKGcuY3Rva2VuMihcInRpbWV6b25lXCIpLHQudGltZXpvbmUpKTtnLnRpbWVTdWZmaXg9Xy5lYWNoKF8uaWdub3JlKGcud2hpdGVTcGFjZSksXy5zZXQoW2cudHQsZy56enpdKSk7Zy50aW1lPV8uZWFjaChfLm9wdGlvbmFsKF8uaWdub3JlKF8uc3Rva2VuKFwiVFwiKSkpLGcuaG1zLGcudGltZVN1ZmZpeCk7Zy5kPV8uY2FjaGUoXy5wcm9jZXNzKF8uZWFjaChfLnJ0b2tlbigvXihbMC0yXVxcZHwzWzAtMV18XFxkKS8pLF8ub3B0aW9uYWwoZy5jdG9rZW4yKFwib3JkaW5hbFN1ZmZpeFwiKSkpLHQuZGF5KSk7Zy5kZD1fLmNhY2hlKF8ucHJvY2VzcyhfLmVhY2goXy5ydG9rZW4oL14oWzAtMl1cXGR8M1swLTFdKS8pLF8ub3B0aW9uYWwoZy5jdG9rZW4yKFwib3JkaW5hbFN1ZmZpeFwiKSkpLHQuZGF5KSk7Zy5kZGQ9Zy5kZGRkPV8uY2FjaGUoXy5wcm9jZXNzKGcuY3Rva2VuKFwic3VuIG1vbiB0dWUgd2VkIHRodSBmcmkgc2F0XCIpLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMud2Vla2RheT1zO307fSkpO2cuTT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXigxWzAtMl18MFxcZHxcXGQpLyksdC5tb250aCkpO2cuTU09Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oMVswLTJdfDBcXGQpLyksdC5tb250aCkpO2cuTU1NPWcuTU1NTT1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbihcImphbiBmZWIgbWFyIGFwciBtYXkganVuIGp1bCBhdWcgc2VwIG9jdCBub3YgZGVjXCIpLHQubW9udGgpKTtnLnk9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oXFxkXFxkPykvKSx0LnllYXIpKTtnLnl5PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFxcZFxcZCkvKSx0LnllYXIpKTtnLnl5eT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXGRcXGQ/XFxkP1xcZD8pLyksdC55ZWFyKSk7Zy55eXl5PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFxcZFxcZFxcZFxcZCkvKSx0LnllYXIpKTtfZm49ZnVuY3Rpb24oKXtyZXR1cm4gXy5lYWNoKF8uYW55LmFwcGx5KG51bGwsYXJndW1lbnRzKSxfLm5vdChnLmN0b2tlbjIoXCJ0aW1lQ29udGV4dFwiKSkpO307Zy5kYXk9X2ZuKGcuZCxnLmRkKTtnLm1vbnRoPV9mbihnLk0sZy5NTU0pO2cueWVhcj1fZm4oZy55eXl5LGcueXkpO2cub3JpZW50YXRpb249Xy5wcm9jZXNzKGcuY3Rva2VuKFwicGFzdCBmdXR1cmVcIiksZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5vcmllbnQ9czt9O30pO2cub3BlcmF0b3I9Xy5wcm9jZXNzKGcuY3Rva2VuKFwiYWRkIHN1YnRyYWN0XCIpLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMub3BlcmF0b3I9czt9O30pO2cucmRheT1fLnByb2Nlc3MoZy5jdG9rZW4oXCJ5ZXN0ZXJkYXkgdG9tb3Jyb3cgdG9kYXkgbm93XCIpLHQucmRheSk7Zy51bml0PV8ucHJvY2VzcyhnLmN0b2tlbihcInNlY29uZCBtaW51dGUgaG91ciBkYXkgd2VlayBtb250aCB5ZWFyXCIpLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMudW5pdD1zO307fSk7Zy52YWx1ZT1fLnByb2Nlc3MoXy5ydG9rZW4oL15cXGRcXGQ/KHN0fG5kfHJkfHRoKT8vKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnZhbHVlPXMucmVwbGFjZSgvXFxEL2csXCJcIik7fTt9KTtnLmV4cHJlc3Npb249Xy5zZXQoW2cucmRheSxnLm9wZXJhdG9yLGcudmFsdWUsZy51bml0LGcub3JpZW50YXRpb24sZy5kZGQsZy5NTU1dKTtfZm49ZnVuY3Rpb24oKXtyZXR1cm4gXy5zZXQoYXJndW1lbnRzLGcuZGF0ZVBhcnREZWxpbWl0ZXIpO307Zy5tZHk9X2ZuKGcuZGRkLGcubW9udGgsZy5kYXksZy55ZWFyKTtnLnltZD1fZm4oZy5kZGQsZy55ZWFyLGcubW9udGgsZy5kYXkpO2cuZG15PV9mbihnLmRkZCxnLmRheSxnLm1vbnRoLGcueWVhcik7Zy5kYXRlPWZ1bmN0aW9uKHMpe3JldHVybigoZ1skQy5kYXRlRWxlbWVudE9yZGVyXXx8Zy5tZHkpLmNhbGwodGhpcyxzKSk7fTtnLmZvcm1hdD1fLnByb2Nlc3MoXy5tYW55KF8uYW55KF8ucHJvY2VzcyhfLnJ0b2tlbigvXihkZD9kP2Q/fE1NP00/TT98eXk/eT95P3xoaD98SEg/fG1tP3xzcz98dHQ/fHp6P3o/KS8pLGZ1bmN0aW9uKGZtdCl7aWYoZ1tmbXRdKXtyZXR1cm4gZ1tmbXRdO31lbHNle3Rocm93ICRELlBhcnNpbmcuRXhjZXB0aW9uKGZtdCk7fX0pLF8ucHJvY2VzcyhfLnJ0b2tlbigvXlteZE15aEhtc3R6XSsvKSxmdW5jdGlvbihzKXtyZXR1cm4gXy5pZ25vcmUoXy5zdG9rZW4ocykpO30pKSksZnVuY3Rpb24ocnVsZXMpe3JldHVybiBfLnByb2Nlc3MoXy5lYWNoLmFwcGx5KG51bGwscnVsZXMpLHQuZmluaXNoRXhhY3QpO30pO3ZhciBfRj17fTt2YXIgX2dldD1mdW5jdGlvbihmKXtyZXR1cm4gX0ZbZl09KF9GW2ZdfHxnLmZvcm1hdChmKVswXSk7fTtnLmZvcm1hdHM9ZnVuY3Rpb24oZngpe2lmKGZ4IGluc3RhbmNlb2YgQXJyYXkpe3ZhciByeD1bXTtmb3IodmFyIGk9MDtpPGZ4Lmxlbmd0aDtpKyspe3J4LnB1c2goX2dldChmeFtpXSkpO31cbnJldHVybiBfLmFueS5hcHBseShudWxsLHJ4KTt9ZWxzZXtyZXR1cm4gX2dldChmeCk7fX07Zy5fZm9ybWF0cz1nLmZvcm1hdHMoW1wiXFxcInl5eXktTU0tZGRUSEg6bW06c3NaXFxcIlwiLFwieXl5eS1NTS1kZFRISDptbTpzc1pcIixcInl5eXktTU0tZGRUSEg6bW06c3N6XCIsXCJ5eXl5LU1NLWRkVEhIOm1tOnNzXCIsXCJ5eXl5LU1NLWRkVEhIOm1tWlwiLFwieXl5eS1NTS1kZFRISDptbXpcIixcInl5eXktTU0tZGRUSEg6bW1cIixcImRkZCwgTU1NIGRkLCB5eXl5IEg6bW06c3MgdHRcIixcImRkZCBNTU0gZCB5eXl5IEhIOm1tOnNzIHp6elwiLFwiTU1kZHl5eXlcIixcImRkTU15eXl5XCIsXCJNZGR5eXl5XCIsXCJkZE15eXl5XCIsXCJNZHl5eXlcIixcImRNeXl5eVwiLFwieXl5eVwiLFwiTWR5eVwiLFwiZE15eVwiLFwiZFwiXSk7Zy5fc3RhcnQ9Xy5wcm9jZXNzKF8uc2V0KFtnLmRhdGUsZy50aW1lLGcuZXhwcmVzc2lvbl0sZy5nZW5lcmFsRGVsaW1pdGVyLGcud2hpdGVTcGFjZSksdC5maW5pc2gpO2cuc3RhcnQ9ZnVuY3Rpb24ocyl7dHJ5e3ZhciByPWcuX2Zvcm1hdHMuY2FsbCh7fSxzKTtpZihyWzFdLmxlbmd0aD09PTApe3JldHVybiByO319Y2F0Y2goZSl7fVxucmV0dXJuIGcuX3N0YXJ0LmNhbGwoe30scyk7fTskRC5fcGFyc2U9JEQucGFyc2U7JEQucGFyc2U9ZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDtpZighcyl7cmV0dXJuIG51bGw7fVxuaWYocyBpbnN0YW5jZW9mIERhdGUpe3JldHVybiBzO31cbnRyeXtyPSRELkdyYW1tYXIuc3RhcnQuY2FsbCh7fSxzLnJlcGxhY2UoL15cXHMqKFxcUyooXFxzK1xcUyspKilcXHMqJC8sXCIkMVwiKSk7fWNhdGNoKGUpe3JldHVybiBudWxsO31cbnJldHVybigoclsxXS5sZW5ndGg9PT0wKT9yWzBdOm51bGwpO307JEQuZ2V0UGFyc2VGdW5jdGlvbj1mdW5jdGlvbihmeCl7dmFyIGZuPSRELkdyYW1tYXIuZm9ybWF0cyhmeCk7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByPW51bGw7dHJ5e3I9Zm4uY2FsbCh7fSxzKTt9Y2F0Y2goZSl7cmV0dXJuIG51bGw7fVxucmV0dXJuKChyWzFdLmxlbmd0aD09PTApP3JbMF06bnVsbCk7fTt9OyRELnBhcnNlRXhhY3Q9ZnVuY3Rpb24ocyxmeCl7cmV0dXJuICRELmdldFBhcnNlRnVuY3Rpb24oZngpKHMpO307fSgpKTtcclxuXG59KShyZXF1aXJlKFwiX19icm93c2VyaWZ5X3Byb2Nlc3NcIikpIiwiKGZ1bmN0aW9uKCl7Ly8gICAgIFVuZGVyc2NvcmUuanMgMS40LjRcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIEluYy5cbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCBpbiB0aGUgYnJvd3Nlciwgb3IgYGdsb2JhbGAgb24gdGhlIHNlcnZlci5cbiAgdmFyIHJvb3QgPSB0aGlzO1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gRXN0YWJsaXNoIHRoZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIHRvIGJyZWFrIG91dCBvZiBhIGxvb3AgaXRlcmF0aW9uLlxuICB2YXIgYnJlYWtlciA9IHt9O1xuXG4gIC8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLCBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGUsIEZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgdmFyIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgICBzbGljZSAgICAgICAgICAgID0gQXJyYXlQcm90by5zbGljZSxcbiAgICAgIGNvbmNhdCAgICAgICAgICAgPSBBcnJheVByb3RvLmNvbmNhdCxcbiAgICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICAgIGhhc093blByb3BlcnR5ICAgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhclxuICAgIG5hdGl2ZUZvckVhY2ggICAgICA9IEFycmF5UHJvdG8uZm9yRWFjaCxcbiAgICBuYXRpdmVNYXAgICAgICAgICAgPSBBcnJheVByb3RvLm1hcCxcbiAgICBuYXRpdmVSZWR1Y2UgICAgICAgPSBBcnJheVByb3RvLnJlZHVjZSxcbiAgICBuYXRpdmVSZWR1Y2VSaWdodCAgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0LFxuICAgIG5hdGl2ZUZpbHRlciAgICAgICA9IEFycmF5UHJvdG8uZmlsdGVyLFxuICAgIG5hdGl2ZUV2ZXJ5ICAgICAgICA9IEFycmF5UHJvdG8uZXZlcnksXG4gICAgbmF0aXZlU29tZSAgICAgICAgID0gQXJyYXlQcm90by5zb21lLFxuICAgIG5hdGl2ZUluZGV4T2YgICAgICA9IEFycmF5UHJvdG8uaW5kZXhPZixcbiAgICBuYXRpdmVMYXN0SW5kZXhPZiAgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mLFxuICAgIG5hdGl2ZUlzQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyAgICAgICAgID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQmluZCAgICAgICAgID0gRnVuY1Byb3RvLmJpbmQ7XG5cbiAgLy8gQ3JlYXRlIGEgc2FmZSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciB1c2UgYmVsb3cuXG4gIHZhciBfID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIF8pIHJldHVybiBvYmo7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8pKSByZXR1cm4gbmV3IF8ob2JqKTtcbiAgICB0aGlzLl93cmFwcGVkID0gb2JqO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yICoqTm9kZS5qcyoqLCB3aXRoXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciB0aGUgb2xkIGByZXF1aXJlKClgIEFQSS4gSWYgd2UncmUgaW5cbiAgLy8gdGhlIGJyb3dzZXIsIGFkZCBgX2AgYXMgYSBnbG9iYWwgb2JqZWN0IHZpYSBhIHN0cmluZyBpZGVudGlmaWVyLFxuICAvLyBmb3IgQ2xvc3VyZSBDb21waWxlciBcImFkdmFuY2VkXCIgbW9kZS5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS40LjQnO1xuXG4gIC8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4gIC8vIEhhbmRsZXMgb2JqZWN0cyB3aXRoIHRoZSBidWlsdC1pbiBgZm9yRWFjaGAsIGFycmF5cywgYW5kIHJhdyBvYmplY3RzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZm9yRWFjaGAgaWYgYXZhaWxhYmxlLlxuICB2YXIgZWFjaCA9IF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybjtcbiAgICBpZiAobmF0aXZlRm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gbmF0aXZlRm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoXy5oYXMob2JqLCBrZXkpKSB7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0b3IgdG8gZWFjaCBlbGVtZW50LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbWFwYCBpZiBhdmFpbGFibGUuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlTWFwICYmIG9iai5tYXAgPT09IG5hdGl2ZU1hcCkgcmV0dXJuIG9iai5tYXAoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHZhciByZWR1Y2VFcnJvciA9ICdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2UgJiYgb2JqLnJlZHVjZSA9PT0gbmF0aXZlUmVkdWNlKSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2UoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IHZhbHVlO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZVJpZ2h0YCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlUmlnaHQgJiYgb2JqLnJlZHVjZVJpZ2h0ID09PSBuYXRpdmVSZWR1Y2VSaWdodCkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvcik7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09ICtsZW5ndGgpIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaW5kZXggPSBrZXlzID8ga2V5c1stLWxlbmd0aF0gOiAtLWxlbmd0aDtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gb2JqW2luZGV4XTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCBvYmpbaW5kZXhdLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQ7XG4gICAgYW55KG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmaWx0ZXJgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZUZpbHRlciAmJiBvYmouZmlsdGVyID09PSBuYXRpdmVGaWx0ZXIpIHJldHVybiBvYmouZmlsdGVyKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuICFpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgfSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBtYXRjaCBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBldmVyeWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgfHwgKGl0ZXJhdG9yID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChuYXRpdmVFdmVyeSAmJiBvYmouZXZlcnkgPT09IG5hdGl2ZUV2ZXJ5KSByZXR1cm4gb2JqLmV2ZXJ5KGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIShyZXN1bHQgPSByZXN1bHQgJiYgaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgc29tZWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICB2YXIgYW55ID0gXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgfHwgKGl0ZXJhdG9yID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlU29tZSAmJiBvYmouc29tZSA9PT0gbmF0aXZlU29tZSkgcmV0dXJuIG9iai5zb21lKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAocmVzdWx0IHx8IChyZXN1bHQgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKSByZXR1cm4gYnJlYWtlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHQ7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiB2YWx1ZSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgdGFyZ2V0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgb2JqLmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBvYmouaW5kZXhPZih0YXJnZXQpICE9IC0xO1xuICAgIHJldHVybiBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB0YXJnZXQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gZnVuY3Rpb24ob2JqLCBtZXRob2QpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaXNGdW5jID0gXy5pc0Z1bmN0aW9uKG1ldGhvZCk7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAoaXNGdW5jID8gbWV0aG9kIDogdmFsdWVbbWV0aG9kXSkuYXBwbHkodmFsdWUsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlKXsgcmV0dXJuIHZhbHVlW2tleV07IH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMsIGZpcnN0KSB7XG4gICAgaWYgKF8uaXNFbXB0eShhdHRycykpIHJldHVybiBmaXJzdCA/IG51bGwgOiBbXTtcbiAgICByZXR1cm4gX1tmaXJzdCA/ICdmaW5kJyA6ICdmaWx0ZXInXShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgaWYgKGF0dHJzW2tleV0gIT09IHZhbHVlW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8ud2hlcmUob2JqLCBhdHRycywgdHJ1ZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgb3IgKGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICAvLyBDYW4ndCBvcHRpbWl6ZSBhcnJheXMgb2YgaW50ZWdlcnMgbG9uZ2VyIHRoYW4gNjUsNTM1IGVsZW1lbnRzLlxuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MDc5N1xuICBfLm1heCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNFbXB0eShvYmopKSByZXR1cm4gLUluZmluaXR5O1xuICAgIHZhciByZXN1bHQgPSB7Y29tcHV0ZWQgOiAtSW5maW5pdHksIHZhbHVlOiAtSW5maW5pdHl9O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBjb21wdXRlZCA+PSByZXN1bHQuY29tcHV0ZWQgJiYgKHJlc3VsdCA9IHt2YWx1ZSA6IHZhbHVlLCBjb21wdXRlZCA6IGNvbXB1dGVkfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1pbmltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWluID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0FycmF5KG9iaikgJiYgb2JqWzBdID09PSArb2JqWzBdICYmIG9iai5sZW5ndGggPCA2NTUzNSkge1xuICAgICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIG9iaik7XG4gICAgfVxuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0VtcHR5KG9iaikpIHJldHVybiBJbmZpbml0eTtcbiAgICB2YXIgcmVzdWx0ID0ge2NvbXB1dGVkIDogSW5maW5pdHksIHZhbHVlOiBJbmZpbml0eX07XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgdmFyIGNvbXB1dGVkID0gaXRlcmF0b3IgPyBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkgOiB2YWx1ZTtcbiAgICAgIGNvbXB1dGVkIDwgcmVzdWx0LmNvbXB1dGVkICYmIChyZXN1bHQgPSB7dmFsdWUgOiB2YWx1ZSwgY29tcHV0ZWQgOiBjb21wdXRlZH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhbiBhcnJheS5cbiAgXy5zaHVmZmxlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJhbmQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc2h1ZmZsZWQgPSBbXTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJhbmQgPSBfLnJhbmRvbShpbmRleCsrKTtcbiAgICAgIHNodWZmbGVkW2luZGV4IC0gMV0gPSBzaHVmZmxlZFtyYW5kXTtcbiAgICAgIHNodWZmbGVkW3JhbmRdID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGxvb2t1cCBpdGVyYXRvcnMuXG4gIHZhciBsb29rdXBJdGVyYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZSA6IGZ1bmN0aW9uKG9iail7IHJldHVybiBvYmpbdmFsdWVdOyB9O1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRvci5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGl0ZXJhdG9yID0gbG9va3VwSXRlcmF0b3IodmFsdWUpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSA6IHZhbHVlLFxuICAgICAgICBpbmRleCA6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYSA6IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IDwgcmlnaHQuaW5kZXggPyAtMSA6IDE7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCwgYmVoYXZpb3IpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGl0ZXJhdG9yID0gbG9va3VwSXRlcmF0b3IodmFsdWUgfHwgXy5pZGVudGl0eSk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgdmFyIGtleSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgYmVoYXZpb3IocmVzdWx0LCBrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZ3JvdXAob2JqLCB2YWx1ZSwgY29udGV4dCwgZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgICAoXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0gOiAocmVzdWx0W2tleV0gPSBbXSkpLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuICAvLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgLy8gY3JpdGVyaW9uLlxuICBfLmNvdW50QnkgPSBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGdyb3VwKG9iaiwgdmFsdWUsIGNvbnRleHQsIGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgICBpZiAoIV8uaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0gPSAwO1xuICAgICAgcmVzdWx0W2tleV0rKztcbiAgICB9KTtcbiAgfTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvciA9PSBudWxsID8gXy5pZGVudGl0eSA6IGxvb2t1cEl0ZXJhdG9yKGl0ZXJhdG9yKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iaik7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgIHZhciBtaWQgPSAobG93ICsgaGlnaCkgPj4+IDE7XG4gICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W21pZF0pIDwgdmFsdWUgPyBsb3cgPSBtaWQgKyAxIDogaGlnaCA9IG1pZDtcbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbiAgfTtcblxuICAvLyBTYWZlbHkgY29udmVydCBhbnl0aGluZyBpdGVyYWJsZSBpbnRvIGEgcmVhbCwgbGl2ZSBhcnJheS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICByZXR1cm4gKG4gIT0gbnVsbCkgJiYgIWd1YXJkID8gc2xpY2UuY2FsbChhcnJheSwgMCwgbikgOiBhcnJheVswXTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi4gVGhlICoqZ3VhcmQqKiBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoXG4gIC8vIGBfLm1hcGAuXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyAxIDogbikpO1xuICB9O1xuXG4gIC8vIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBsYXN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gVGhlICoqZ3VhcmQqKiBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmICgobiAhPSBudWxsKSAmJiAhZ3VhcmQpIHtcbiAgICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBNYXRoLm1heChhcnJheS5sZW5ndGggLSBuLCAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKipcbiAgLy8gY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgXy5pZGVudGl0eSk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBvdXRwdXQpIHtcbiAgICBlYWNoKGlucHV0LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgc2hhbGxvdyA/IHB1c2guYXBwbHkob3V0cHV0LCB2YWx1ZSkgOiBmbGF0dGVuKHZhbHVlLCBzaGFsbG93LCBvdXRwdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29tcGxldGVseSBmbGF0dGVuZWQgdmVyc2lvbiBvZiBhbiBhcnJheS5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgW10pO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LiBJZiB0aGUgYXJyYXkgaGFzIGFscmVhZHlcbiAgLy8gYmVlbiBzb3J0ZWQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdXNpbmcgYSBmYXN0ZXIgYWxnb3JpdGhtLlxuICAvLyBBbGlhc2VkIGFzIGB1bmlxdWVgLlxuICBfLnVuaXEgPSBfLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5LCBpc1NvcnRlZCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGlzU29ydGVkKSkge1xuICAgICAgY29udGV4dCA9IGl0ZXJhdG9yO1xuICAgICAgaXRlcmF0b3IgPSBpc1NvcnRlZDtcbiAgICAgIGlzU29ydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHZhciBpbml0aWFsID0gaXRlcmF0b3IgPyBfLm1hcChhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIDogYXJyYXk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGVhY2goaW5pdGlhbCwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICBpZiAoaXNTb3J0ZWQgPyAoIWluZGV4IHx8IHNlZW5bc2Vlbi5sZW5ndGggLSAxXSAhPT0gdmFsdWUpIDogIV8uY29udGFpbnMoc2VlbiwgdmFsdWUpKSB7XG4gICAgICAgIHNlZW4ucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJlc3VsdHMucHVzaChhcnJheVtpbmRleF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuaXEoY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyBldmVyeSBpdGVtIHNoYXJlZCBiZXR3ZWVuIGFsbCB0aGVcbiAgLy8gcGFzc2VkLWluIGFycmF5cy5cbiAgXy5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBfLmZpbHRlcihfLnVuaXEoYXJyYXkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gXy5ldmVyeShyZXN0LCBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gXy5pbmRleE9mKG90aGVyLCBpdGVtKSA+PSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7IH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgdmFyIGxlbmd0aCA9IF8ubWF4KF8ucGx1Y2soYXJncywgJ2xlbmd0aCcpKTtcbiAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdHNbaV0gPSBfLnBsdWNrKGFyZ3MsIFwiXCIgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgbGlzdHMgaW50byBvYmplY3RzLiBQYXNzIGVpdGhlciBhIHNpbmdsZSBhcnJheSBvZiBgW2tleSwgdmFsdWVdYFxuICAvLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2ZcbiAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIGlmIChsaXN0ID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcGx5IHVzIHdpdGggaW5kZXhPZiAoSSdtIGxvb2tpbmcgYXQgeW91LCAqKk1TSUUqKiksXG4gIC8vIHdlIG5lZWQgdGhpcyBmdW5jdGlvbi4gUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhblxuICAvLyBpdGVtIGluIGFuIGFycmF5LCBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgaW5kZXhPZmAgaWYgYXZhaWxhYmxlLlxuICAvLyBJZiB0aGUgYXJyYXkgaXMgbGFyZ2UgYW5kIGFscmVhZHkgaW4gc29ydCBvcmRlciwgcGFzcyBgdHJ1ZWBcbiAgLy8gZm9yICoqaXNTb3J0ZWQqKiB0byB1c2UgYmluYXJ5IHNlYXJjaC5cbiAgXy5pbmRleE9mID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGlzU29ydGVkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGlzU29ydGVkKSB7XG4gICAgICBpZiAodHlwZW9mIGlzU29ydGVkID09ICdudW1iZXInKSB7XG4gICAgICAgIGkgPSAoaXNTb3J0ZWQgPCAwID8gTWF0aC5tYXgoMCwgbCArIGlzU29ydGVkKSA6IGlzU29ydGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgPSBfLnNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2ldID09PSBpdGVtID8gaSA6IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtLCBpc1NvcnRlZCk7XG4gICAgZm9yICg7IGkgPCBsOyBpKyspIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBsYXN0SW5kZXhPZmAgaWYgYXZhaWxhYmxlLlxuICBfLmxhc3RJbmRleE9mID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGZyb20pIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIHZhciBoYXNJbmRleCA9IGZyb20gIT0gbnVsbDtcbiAgICBpZiAobmF0aXZlTGFzdEluZGV4T2YgJiYgYXJyYXkubGFzdEluZGV4T2YgPT09IG5hdGl2ZUxhc3RJbmRleE9mKSB7XG4gICAgICByZXR1cm4gaGFzSW5kZXggPyBhcnJheS5sYXN0SW5kZXhPZihpdGVtLCBmcm9tKSA6IGFycmF5Lmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICB2YXIgaSA9IChoYXNJbmRleCA/IGZyb20gOiBhcnJheS5sZW5ndGgpO1xuICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBhcmd1bWVudHNbMl0gfHwgMTtcblxuICAgIHZhciBsZW4gPSBNYXRoLm1heChNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSwgMCk7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIHJhbmdlID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICB3aGlsZShpZHggPCBsZW4pIHtcbiAgICAgIHJhbmdlW2lkeCsrXSA9IHN0YXJ0O1xuICAgICAgc3RhcnQgKz0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gKGFoZW0pIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICBpZiAoZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kICYmIG5hdGl2ZUJpbmQpIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LlxuICBfLnBhcnRpYWwgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBCaW5kIGFsbCBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXRcbiAgLy8gYWxsIGNhbGxiYWNrcyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG4gIF8uYmluZEFsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBmdW5jcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSBmdW5jcyA9IF8uZnVuY3Rpb25zKG9iaik7XG4gICAgZWFjaChmdW5jcywgZnVuY3Rpb24oZikgeyBvYmpbZl0gPSBfLmJpbmQob2JqW2ZdLCBvYmopOyB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG4gIF8ubWVtb2l6ZSA9IGZ1bmN0aW9uKGZ1bmMsIGhhc2hlcikge1xuICAgIHZhciBtZW1vID0ge307XG4gICAgaGFzaGVyIHx8IChoYXNoZXIgPSBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIga2V5ID0gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gXy5oYXMobWVtbywga2V5KSA/IG1lbW9ba2V5XSA6IChtZW1vW2tleV0gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuICAvLyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgc3VwcGxpZWQuXG4gIF8uZGVsYXkgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7IH0sIHdhaXQpO1xuICB9O1xuXG4gIC8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuICAvLyBjbGVhcmVkLlxuICBfLmRlZmVyID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHJldHVybiBfLmRlbGF5LmFwcGx5KF8sIFtmdW5jLCAxXS5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBjb250ZXh0LCBhcmdzLCB0aW1lb3V0LCByZXN1bHQ7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gbmV3IERhdGU7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gbmV3IERhdGU7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCByZXN1bHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWltbWVkaWF0ZSkgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH07XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChjYWxsTm93KSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIHJhbiA9IGZhbHNlLCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyYW4pIHJldHVybiBtZW1vO1xuICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gW2Z1bmNdO1xuICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIHdyYXBwZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuICAvLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuICBfLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZnVuY3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBmb3IgKHZhciBpID0gZnVuY3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXJncyA9IFtmdW5jc1tpXS5hcHBseSh0aGlzLCBhcmdzKV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBhZnRlciBiZWluZyBjYWxsZWQgTiB0aW1lcy5cbiAgXy5hZnRlciA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgaWYgKHRpbWVzIDw9IDApIHJldHVybiBmdW5jKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBuYXRpdmVLZXlzIHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogIT09IE9iamVjdChvYmopKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9iamVjdCcpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5c1trZXlzLmxlbmd0aF0gPSBrZXk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSB2YWx1ZXMucHVzaChvYmpba2V5XSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBwYWlycyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIHBhaXJzLnB1c2goW2tleSwgb2JqW2tleV1dKTtcbiAgICByZXR1cm4gcGFpcnM7XG4gIH07XG5cbiAgLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuICBfLmludmVydCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSByZXN1bHRbb2JqW2tleV1dID0ga2V5O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuICAvLyBBbGlhc2VkIGFzIGBtZXRob2RzYFxuICBfLmZ1bmN0aW9ucyA9IF8ubWV0aG9kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lcy5zb3J0KCk7XG4gIH07XG5cbiAgLy8gRXh0ZW5kIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHBhc3NlZC1pbiBvYmplY3QocykuXG4gIF8uZXh0ZW5kID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGVhY2goa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoa2V5IGluIG9iaikgY29weVtrZXldID0gb2JqW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrZXlzID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKCFfLmNvbnRhaW5zKGtleXMsIGtleSkpIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChvYmpbcHJvcF0gPT0gbnVsbCkgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbiAgdmFyIGVxID0gZnVuY3Rpb24oYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBIYXJtb255IGBlZ2FsYCBwcm9wb3NhbDogaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PSAxIC8gYjtcbiAgICAvLyBBIHN0cmljdCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGBudWxsID09IHVuZGVmaW5lZGAuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBhID09PSBiO1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuIGEgPT0gU3RyaW5nKGIpO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS4gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvclxuICAgICAgICAvLyBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuIGEgIT0gK2EgPyBiICE9ICtiIDogKGEgPT0gMCA/IDEgLyBhID09IDEgLyBiIDogYSA9PSArYik7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT0gK2I7XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb21wYXJlZCBieSB0aGVpciBzb3VyY2UgcGF0dGVybnMgYW5kIGZsYWdzLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgICAgcmV0dXJuIGEuc291cmNlID09IGIuc291cmNlICYmXG4gICAgICAgICAgICAgICBhLmdsb2JhbCA9PSBiLmdsb2JhbCAmJlxuICAgICAgICAgICAgICAgYS5tdWx0aWxpbmUgPT0gYi5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgICAgIGEuaWdub3JlQ2FzZSA9PSBiLmlnbm9yZUNhc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PSBiO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG4gICAgdmFyIHNpemUgPSAwLCByZXN1bHQgPSB0cnVlO1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChjbGFzc05hbWUgPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgICBzaXplID0gYS5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaXplID09IGIubGVuZ3RoO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gZXEoYVtzaXplXSwgYltzaXplXSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzXG4gICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgKGFDdG9yIGluc3RhbmNlb2YgYUN0b3IpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiAoYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKF8uaGFzKGEsIGtleSkpIHtcbiAgICAgICAgICAvLyBDb3VudCB0aGUgZXhwZWN0ZWQgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlci5cbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBfLmhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICBpZiAoXy5oYXMoYiwga2V5KSAmJiAhKHNpemUtLSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9ICFzaXplO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIF8uaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYiwgW10sIFtdKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9O1xuXG4gIC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLlxuICBlYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiAhIShvYmogJiYgXy5oYXMob2JqLCAnY2FsbGVlJykpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuXG4gIGlmICh0eXBlb2YgKC8uLykgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPSArb2JqO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdG9ycy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuICBfLnRpbWVzID0gZnVuY3Rpb24obiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgYWNjdW0gPSBBcnJheShuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYWNjdW1baV0gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBMaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIGVzY2FwaW5nLlxuICB2YXIgZW50aXR5TWFwID0ge1xuICAgIGVzY2FwZToge1xuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgXCInXCI6ICcmI3gyNzsnLFxuICAgICAgJy8nOiAnJiN4MkY7J1xuICAgIH1cbiAgfTtcbiAgZW50aXR5TWFwLnVuZXNjYXBlID0gXy5pbnZlcnQoZW50aXR5TWFwLmVzY2FwZSk7XG5cbiAgLy8gUmVnZXhlcyBjb250YWluaW5nIHRoZSBrZXlzIGFuZCB2YWx1ZXMgbGlzdGVkIGltbWVkaWF0ZWx5IGFib3ZlLlxuICB2YXIgZW50aXR5UmVnZXhlcyA9IHtcbiAgICBlc2NhcGU6ICAgbmV3IFJlZ0V4cCgnWycgKyBfLmtleXMoZW50aXR5TWFwLmVzY2FwZSkuam9pbignJykgKyAnXScsICdnJyksXG4gICAgdW5lc2NhcGU6IG5ldyBSZWdFeHAoJygnICsgXy5rZXlzKGVudGl0eU1hcC51bmVzY2FwZSkuam9pbignfCcpICsgJyknLCAnZycpXG4gIH07XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICBfLmVhY2goWydlc2NhcGUnLCAndW5lc2NhcGUnXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgX1ttZXRob2RdID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoc3RyaW5nID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIHJldHVybiAoJycgKyBzdHJpbmcpLnJlcGxhY2UoZW50aXR5UmVnZXhlc1ttZXRob2RdLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gZW50aXR5TWFwW21ldGhvZF1bbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBwcm9wZXJ0eSBpcyBhIGZ1bmN0aW9uIHRoZW4gaW52b2tlIGl0O1xuICAvLyBvdGhlcndpc2UsIHJldHVybiBpdC5cbiAgXy5yZXN1bHQgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZSAgICA6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGUgOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGUgICAgICA6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6ICAgICAgXCInXCIsXG4gICAgJ1xcXFwnOiAgICAgJ1xcXFwnLFxuICAgICdcXHInOiAgICAgJ3InLFxuICAgICdcXG4nOiAgICAgJ24nLFxuICAgICdcXHQnOiAgICAgJ3QnLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHR8XFx1MjAyOHxcXHUyMDI5L2c7XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIGRhdGEsIHNldHRpbmdzKSB7XG4gICAgdmFyIHJlbmRlcjtcbiAgICBzZXR0aW5ncyA9IF8uZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gICAgLy8gQ29tYmluZSBkZWxpbWl0ZXJzIGludG8gb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2aWEgYWx0ZXJuYXRpb24uXG4gICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgICAgICAucmVwbGFjZShlc2NhcGVyLCBmdW5jdGlvbihtYXRjaCkgeyByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07IH0pO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9XG4gICAgICBpZiAoZXZhbHVhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICAgIHNvdXJjZSArPSBcIic7XFxuXCI7XG5cbiAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgIGlmICghc2V0dGluZ3MudmFyaWFibGUpIHNvdXJjZSA9ICd3aXRoKG9ianx8e30pe1xcbicgKyBzb3VyY2UgKyAnfVxcbic7XG5cbiAgICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIiArXG4gICAgICBcInByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxuXCIgK1xuICAgICAgc291cmNlICsgXCJyZXR1cm4gX19wO1xcblwiO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkgcmV0dXJuIHJlbmRlcihkYXRhLCBfKTtcbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIChzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJykgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEFkZCBhIFwiY2hhaW5cIiBmdW5jdGlvbiwgd2hpY2ggd2lsbCBkZWxlZ2F0ZSB0byB0aGUgd3JhcHBlci5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfKG9iaikuY2hhaW4oKTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIGVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT0gJ3NoaWZ0JyB8fCBuYW1lID09ICdzcGxpY2UnKSAmJiBvYmoubGVuZ3RoID09PSAwKSBkZWxldGUgb2JqWzBdO1xuICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFsbCBhY2Nlc3NvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIGVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgXy5leHRlbmQoXy5wcm90b3R5cGUsIHtcblxuICAgIC8vIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgICBjaGFpbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9jaGFpbiA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gICAgfVxuXG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuXG59KSgpIiwiKGZ1bmN0aW9uKCl7Ly8vIEtub2Nrb3V0IE1hcHBpbmcgcGx1Z2luIHYyLjMuMlxuLy8vIChjKSAyMDEyIFN0ZXZlbiBTYW5kZXJzb24sIFJveSBKYWNvYnMgLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4vLy8gTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHQvLyBNb2R1bGUgc3lzdGVtcyBtYWdpYyBkYW5jZS5cblxuXHRpZiAodHlwZW9mIHJlcXVpcmUgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlMgb3IgTm9kZTogaGFyZC1jb2RlZCBkZXBlbmRlbmN5IG9uIFwia25vY2tvdXRcIlxuXHRcdGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0LWNsaWVudFwiKSwgZXhwb3J0cyk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZVtcImFtZFwiXSkge1xuXHRcdC8vIEFNRCBhbm9ueW1vdXMgbW9kdWxlIHdpdGggaGFyZC1jb2RlZCBkZXBlbmRlbmN5IG9uIFwia25vY2tvdXRcIlxuXHRcdGRlZmluZShbXCJrbm9ja291dFwiLCBcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIDxzY3JpcHQ+IHRhZzogdXNlIHRoZSBnbG9iYWwgYGtvYCBvYmplY3QsIGF0dGFjaGluZyBhIGBtYXBwaW5nYCBwcm9wZXJ0eVxuXHRcdGZhY3Rvcnkoa28sIGtvLm1hcHBpbmcgPSB7fSk7XG5cdH1cbn0oZnVuY3Rpb24gKGtvLCBleHBvcnRzKSB7XG5cdHZhciBERUJVRz10cnVlO1xuXHR2YXIgbWFwcGluZ1Byb3BlcnR5ID0gXCJfX2tvX21hcHBpbmdfX1wiO1xuXHR2YXIgcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZSA9IGtvLmRlcGVuZGVudE9ic2VydmFibGU7XG5cdHZhciBtYXBwaW5nTmVzdGluZyA9IDA7XG5cdHZhciBkZXBlbmRlbnRPYnNlcnZhYmxlcztcblx0dmFyIHZpc2l0ZWRPYmplY3RzO1xuXHR2YXIgcmVjb2duaXplZFJvb3RQcm9wZXJ0aWVzID0gW1wiY3JlYXRlXCIsIFwidXBkYXRlXCIsIFwia2V5XCIsIFwiYXJyYXlDaGFuZ2VkXCJdO1xuXHR2YXIgZW1wdHlSZXR1cm4gPSB7fTtcblxuXHR2YXIgX2RlZmF1bHRPcHRpb25zID0ge1xuXHRcdGluY2x1ZGU6IFtcIl9kZXN0cm95XCJdLFxuXHRcdGlnbm9yZTogW10sXG5cdFx0Y29weTogW11cblx0fTtcblx0dmFyIGRlZmF1bHRPcHRpb25zID0gX2RlZmF1bHRPcHRpb25zO1xuXG5cdC8vIEF1dGhvcjogS2VubnlUTSBAIFN0YWNrT3ZlcmZsb3dcblx0ZnVuY3Rpb24gdW5pb25BcnJheXMgKHgsIHkpIHtcblx0XHR2YXIgb2JqID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IHgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLSBpKSBvYmpbeFtpXV0gPSB4W2ldO1xuXHRcdGZvciAodmFyIGkgPSB5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgLS0gaSkgb2JqW3lbaV1dID0geVtpXTtcblx0XHR2YXIgcmVzID0gW107XG5cblx0XHRmb3IgKHZhciBrIGluIG9iaikge1xuXHRcdFx0cmVzLnB1c2gob2JqW2tdKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlcztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZE9iamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHRcdFx0aWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNvdXJjZVtrZXldKSB7XG5cdFx0XHRcdGlmIChrZXkgJiYgZGVzdGluYXRpb25ba2V5XSAmJiAhKGV4cG9ydHMuZ2V0VHlwZShkZXN0aW5hdGlvbltrZXldKSA9PT0gXCJhcnJheVwiKSkge1xuXHRcdFx0XHRcdGV4dGVuZE9iamVjdChkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGJvdGhBcnJheXMgPSBleHBvcnRzLmdldFR5cGUoZGVzdGluYXRpb25ba2V5XSkgPT09IFwiYXJyYXlcIiAmJiBleHBvcnRzLmdldFR5cGUoc291cmNlW2tleV0pID09PSBcImFycmF5XCI7XG5cdFx0XHRcdFx0aWYgKGJvdGhBcnJheXMpIHtcblx0XHRcdFx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSB1bmlvbkFycmF5cyhkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtZXJnZShvYmoxLCBvYmoyKSB7XG5cdFx0dmFyIG1lcmdlZCA9IHt9O1xuXHRcdGV4dGVuZE9iamVjdChtZXJnZWQsIG9iajEpO1xuXHRcdGV4dGVuZE9iamVjdChtZXJnZWQsIG9iajIpO1xuXG5cdFx0cmV0dXJuIG1lcmdlZDtcblx0fVxuXG5cdGV4cG9ydHMuaXNNYXBwZWQgPSBmdW5jdGlvbiAodmlld01vZGVsKSB7XG5cdFx0dmFyIHVud3JhcHBlZCA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmlld01vZGVsKTtcblx0XHRyZXR1cm4gdW53cmFwcGVkICYmIHVud3JhcHBlZFttYXBwaW5nUHJvcGVydHldO1xuXHR9XG5cblx0ZXhwb3J0cy5mcm9tSlMgPSBmdW5jdGlvbiAoanNPYmplY3QgLyosIGlucHV0T3B0aW9ucywgdGFyZ2V0Ki8gKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLmZyb21KUywgcGFzcyB0aGUgb2JqZWN0IHlvdSB3YW50IHRvIGNvbnZlcnQuXCIpO1xuXG5cdFx0Ly8gV2hlbiBtYXBwaW5nIGlzIGNvbXBsZXRlZCwgZXZlbiB3aXRoIGFuIGV4Y2VwdGlvbiwgcmVzZXQgdGhlIG5lc3RpbmcgbGV2ZWxcblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRtYXBwaW5nTmVzdGluZyA9IDA7XG5cdFx0fSwgMCk7XG5cblx0XHRpZiAoIW1hcHBpbmdOZXN0aW5nKyspIHtcblx0XHRcdGRlcGVuZGVudE9ic2VydmFibGVzID0gW107XG5cdFx0XHR2aXNpdGVkT2JqZWN0cyA9IG5ldyBvYmplY3RMb29rdXAoKTtcblx0XHR9XG5cblx0XHR2YXIgb3B0aW9ucztcblx0XHR2YXIgdGFyZ2V0O1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMikge1xuXHRcdFx0aWYgKGFyZ3VtZW50c1sxXVttYXBwaW5nUHJvcGVydHldKSB7XG5cdFx0XHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDMpIHtcblx0XHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cdFx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMl07XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0b3B0aW9ucyA9IG1lcmdlKG9wdGlvbnMsIHRhcmdldFttYXBwaW5nUHJvcGVydHldKTtcblx0XHR9XG5cdFx0b3B0aW9ucyA9IGZpbGxPcHRpb25zKG9wdGlvbnMpO1xuXG5cdFx0dmFyIHJlc3VsdCA9IHVwZGF0ZVZpZXdNb2RlbCh0YXJnZXQsIGpzT2JqZWN0LCBvcHRpb25zKTtcblx0XHRpZiAodGFyZ2V0KSB7XG5cdFx0XHRyZXN1bHQgPSB0YXJnZXQ7XG5cdFx0fVxuXG5cdFx0Ly8gRXZhbHVhdGUgYW55IGRlcGVuZGVudCBvYnNlcnZhYmxlcyB0aGF0IHdlcmUgcHJveGllZC5cblx0XHQvLyBEbyB0aGlzIGluIGEgdGltZW91dCB0byBkZWZlciBleGVjdXRpb24uIEJhc2ljYWxseSwgYW55IHVzZXIgY29kZSB0aGF0IGV4cGxpY2l0bHkgbG9va3MgdXAgdGhlIERPIHdpbGwgcGVyZm9ybSB0aGUgZmlyc3QgZXZhbHVhdGlvbi4gT3RoZXJ3aXNlLFxuXHRcdC8vIGl0IHdpbGwgYmUgZG9uZSBieSB0aGlzIGNvZGUuXG5cdFx0aWYgKCEtLW1hcHBpbmdOZXN0aW5nKSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHdoaWxlIChkZXBlbmRlbnRPYnNlcnZhYmxlcy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgRE8gPSBkZXBlbmRlbnRPYnNlcnZhYmxlcy5wb3AoKTtcblx0XHRcdFx0XHRpZiAoRE8pIERPKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDApO1xuXHRcdH1cblxuXHRcdC8vIFNhdmUgYW55IG5ldyBtYXBwaW5nIG9wdGlvbnMgaW4gdGhlIHZpZXcgbW9kZWwsIHNvIHRoYXQgdXBkYXRlRnJvbUpTIGNhbiB1c2UgdGhlbSBsYXRlci5cblx0XHRyZXN1bHRbbWFwcGluZ1Byb3BlcnR5XSA9IG1lcmdlKHJlc3VsdFttYXBwaW5nUHJvcGVydHldLCBvcHRpb25zKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0ZXhwb3J0cy5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uU3RyaW5nIC8qLCBvcHRpb25zLCB0YXJnZXQqLyApIHtcblx0XHR2YXIgcGFyc2VkID0ga28udXRpbHMucGFyc2VKc29uKGpzb25TdHJpbmcpO1xuXHRcdGFyZ3VtZW50c1swXSA9IHBhcnNlZDtcblx0XHRyZXR1cm4gZXhwb3J0cy5mcm9tSlMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0fTtcblxuXHRleHBvcnRzLnVwZGF0ZUZyb21KUyA9IGZ1bmN0aW9uICh2aWV3TW9kZWwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJrby5tYXBwaW5nLnVwZGF0ZUZyb21KUywgdXNlIGtvLm1hcHBpbmcuZnJvbUpTIGluc3RlYWQuIFBsZWFzZSBub3RlIHRoYXQgdGhlIG9yZGVyIG9mIHBhcmFtZXRlcnMgaXMgZGlmZmVyZW50IVwiKTtcblx0fTtcblxuXHRleHBvcnRzLnVwZGF0ZUZyb21KU09OID0gZnVuY3Rpb24gKHZpZXdNb2RlbCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImtvLm1hcHBpbmcudXBkYXRlRnJvbUpTT04sIHVzZSBrby5tYXBwaW5nLmZyb21KU09OIGluc3RlYWQuIFBsZWFzZSBub3RlIHRoYXQgdGhlIG9yZGVyIG9mIHBhcmFtZXRlcnMgaXMgZGlmZmVyZW50IVwiKTtcblx0fTtcblxuXHRleHBvcnRzLnRvSlMgPSBmdW5jdGlvbiAocm9vdE9iamVjdCwgb3B0aW9ucykge1xuXHRcdGlmICghZGVmYXVsdE9wdGlvbnMpIGV4cG9ydHMucmVzZXREZWZhdWx0T3B0aW9ucygpO1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLm1hcHBpbmcudG9KUywgcGFzcyB0aGUgb2JqZWN0IHlvdSB3YW50IHRvIGNvbnZlcnQuXCIpO1xuXHRcdGlmIChleHBvcnRzLmdldFR5cGUoZGVmYXVsdE9wdGlvbnMuaWdub3JlKSAhPT0gXCJhcnJheVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJrby5tYXBwaW5nLmRlZmF1bHRPcHRpb25zKCkuaWdub3JlIHNob3VsZCBiZSBhbiBhcnJheS5cIik7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShkZWZhdWx0T3B0aW9ucy5pbmNsdWRlKSAhPT0gXCJhcnJheVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJrby5tYXBwaW5nLmRlZmF1bHRPcHRpb25zKCkuaW5jbHVkZSBzaG91bGQgYmUgYW4gYXJyYXkuXCIpO1xuXHRcdGlmIChleHBvcnRzLmdldFR5cGUoZGVmYXVsdE9wdGlvbnMuY29weSkgIT09IFwiYXJyYXlcIikgdGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy5kZWZhdWx0T3B0aW9ucygpLmNvcHkgc2hvdWxkIGJlIGFuIGFycmF5LlwiKTtcblxuXHRcdC8vIE1lcmdlIGluIHRoZSBvcHRpb25zIHVzZWQgaW4gZnJvbUpTXG5cdFx0b3B0aW9ucyA9IGZpbGxPcHRpb25zKG9wdGlvbnMsIHJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XSk7XG5cblx0XHQvLyBXZSBqdXN0IHVud3JhcCBldmVyeXRoaW5nIGF0IGV2ZXJ5IGxldmVsIGluIHRoZSBvYmplY3QgZ3JhcGhcblx0XHRyZXR1cm4gZXhwb3J0cy52aXNpdE1vZGVsKHJvb3RPYmplY3QsIGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRyZXR1cm4ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh4KVxuXHRcdH0sIG9wdGlvbnMpO1xuXHR9O1xuXG5cdGV4cG9ydHMudG9KU09OID0gZnVuY3Rpb24gKHJvb3RPYmplY3QsIG9wdGlvbnMpIHtcblx0XHR2YXIgcGxhaW5KYXZhU2NyaXB0T2JqZWN0ID0gZXhwb3J0cy50b0pTKHJvb3RPYmplY3QsIG9wdGlvbnMpO1xuXHRcdHJldHVybiBrby51dGlscy5zdHJpbmdpZnlKc29uKHBsYWluSmF2YVNjcmlwdE9iamVjdCk7XG5cdH07XG5cblx0ZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGRlZmF1bHRPcHRpb25zID0gYXJndW1lbnRzWzBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG5cdFx0fVxuXHR9O1xuXG5cdGV4cG9ydHMucmVzZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHRkZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRcdGluY2x1ZGU6IF9kZWZhdWx0T3B0aW9ucy5pbmNsdWRlLnNsaWNlKDApLFxuXHRcdFx0aWdub3JlOiBfZGVmYXVsdE9wdGlvbnMuaWdub3JlLnNsaWNlKDApLFxuXHRcdFx0Y29weTogX2RlZmF1bHRPcHRpb25zLmNvcHkuc2xpY2UoMClcblx0XHR9O1xuXHR9O1xuXG5cdGV4cG9ydHMuZ2V0VHlwZSA9IGZ1bmN0aW9uKHgpIHtcblx0XHRpZiAoKHgpICYmICh0eXBlb2YgKHgpID09PSBcIm9iamVjdFwiKSkge1xuXHRcdFx0aWYgKHguY29uc3RydWN0b3IgPT0gKG5ldyBEYXRlKS5jb25zdHJ1Y3RvcikgcmV0dXJuIFwiZGF0ZVwiO1xuXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSByZXR1cm4gXCJhcnJheVwiO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZW9mIHg7XG5cdH1cblxuXHRmdW5jdGlvbiBmaWxsT3B0aW9ucyhyYXdPcHRpb25zLCBvdGhlck9wdGlvbnMpIHtcblx0XHR2YXIgb3B0aW9ucyA9IG1lcmdlKHt9LCByYXdPcHRpb25zKTtcblxuXHRcdC8vIE1vdmUgcmVjb2duaXplZCByb290LWxldmVsIHByb3BlcnRpZXMgaW50byBhIHJvb3QgbmFtZXNwYWNlXG5cdFx0Zm9yICh2YXIgaSA9IHJlY29nbml6ZWRSb290UHJvcGVydGllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIHByb3BlcnR5ID0gcmVjb2duaXplZFJvb3RQcm9wZXJ0aWVzW2ldO1xuXHRcdFx0XG5cdFx0XHQvLyBDYXJyeSBvbiwgdW5sZXNzIHRoaXMgcHJvcGVydHkgaXMgcHJlc2VudFxuXHRcdFx0aWYgKCFvcHRpb25zW3Byb3BlcnR5XSkgY29udGludWU7XG5cdFx0XHRcblx0XHRcdC8vIE1vdmUgdGhlIHByb3BlcnR5IGludG8gdGhlIHJvb3QgbmFtZXNwYWNlXG5cdFx0XHRpZiAoIShvcHRpb25zW1wiXCJdIGluc3RhbmNlb2YgT2JqZWN0KSkgb3B0aW9uc1tcIlwiXSA9IHt9O1xuXHRcdFx0b3B0aW9uc1tcIlwiXVtwcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcblx0XHRcdGRlbGV0ZSBvcHRpb25zW3Byb3BlcnR5XTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXJPcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zLmlnbm9yZSA9IG1lcmdlQXJyYXlzKG90aGVyT3B0aW9ucy5pZ25vcmUsIG9wdGlvbnMuaWdub3JlKTtcblx0XHRcdG9wdGlvbnMuaW5jbHVkZSA9IG1lcmdlQXJyYXlzKG90aGVyT3B0aW9ucy5pbmNsdWRlLCBvcHRpb25zLmluY2x1ZGUpO1xuXHRcdFx0b3B0aW9ucy5jb3B5ID0gbWVyZ2VBcnJheXMob3RoZXJPcHRpb25zLmNvcHksIG9wdGlvbnMuY29weSk7XG5cdFx0fVxuXHRcdG9wdGlvbnMuaWdub3JlID0gbWVyZ2VBcnJheXMob3B0aW9ucy5pZ25vcmUsIGRlZmF1bHRPcHRpb25zLmlnbm9yZSk7XG5cdFx0b3B0aW9ucy5pbmNsdWRlID0gbWVyZ2VBcnJheXMob3B0aW9ucy5pbmNsdWRlLCBkZWZhdWx0T3B0aW9ucy5pbmNsdWRlKTtcblx0XHRvcHRpb25zLmNvcHkgPSBtZXJnZUFycmF5cyhvcHRpb25zLmNvcHksIGRlZmF1bHRPcHRpb25zLmNvcHkpO1xuXG5cdFx0b3B0aW9ucy5tYXBwZWRQcm9wZXJ0aWVzID0gb3B0aW9ucy5tYXBwZWRQcm9wZXJ0aWVzIHx8IHt9O1xuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWVyZ2VBcnJheXMoYSwgYikge1xuXHRcdGlmIChleHBvcnRzLmdldFR5cGUoYSkgIT09IFwiYXJyYXlcIikge1xuXHRcdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShhKSA9PT0gXCJ1bmRlZmluZWRcIikgYSA9IFtdO1xuXHRcdFx0ZWxzZSBhID0gW2FdO1xuXHRcdH1cblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGIpICE9PSBcImFycmF5XCIpIHtcblx0XHRcdGlmIChleHBvcnRzLmdldFR5cGUoYikgPT09IFwidW5kZWZpbmVkXCIpIGIgPSBbXTtcblx0XHRcdGVsc2UgYiA9IFtiXTtcblx0XHR9XG5cblx0XHRyZXR1cm4ga28udXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlcyhhLmNvbmNhdChiKSk7XG5cdH1cblxuXHQvLyBXaGVuIHVzaW5nIGEgJ2NyZWF0ZScgY2FsbGJhY2ssIHdlIHByb3h5IHRoZSBkZXBlbmRlbnQgb2JzZXJ2YWJsZSBzbyB0aGF0IGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHkgZXZhbHVhdGUgb24gY3JlYXRpb24uXG5cdC8vIFRoZSByZWFzb24gaXMgdGhhdCB0aGUgZGVwZW5kZW50IG9ic2VydmFibGVzIGluIHRoZSB1c2VyLXNwZWNpZmllZCBjYWxsYmFjayBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHByb3BlcnRpZXMgdGhhdCBoYXZlIG5vdCBiZWVuIG1hcHBlZCB5ZXQuXG5cdGZ1bmN0aW9uIHdpdGhQcm94eURlcGVuZGVudE9ic2VydmFibGUoZGVwZW5kZW50T2JzZXJ2YWJsZXMsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGxvY2FsRE8gPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlO1xuXHRcdGtvLmRlcGVuZGVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAocmVhZCwgb3duZXIsIG9wdGlvbnMpIHtcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0XHRpZiAocmVhZCAmJiB0eXBlb2YgcmVhZCA9PSBcIm9iamVjdFwiKSB7IC8vIG1pcnJvcnMgY29uZGl0aW9uIGluIGtub2Nrb3V0IGltcGxlbWVudGF0aW9uIG9mIERPJ3Ncblx0XHRcdFx0b3B0aW9ucyA9IHJlYWQ7XG5cdFx0XHR9XG5cblx0XHRcdHZhciByZWFsRGVmZXJFdmFsdWF0aW9uID0gb3B0aW9ucy5kZWZlckV2YWx1YXRpb247XG5cblx0XHRcdHZhciBpc1JlbW92ZWQgPSBmYWxzZTtcblxuXHRcdFx0Ly8gV2Ugd3JhcCB0aGUgb3JpZ2luYWwgZGVwZW5kZW50IG9ic2VydmFibGUgc28gdGhhdCB3ZSBjYW4gcmVtb3ZlIGl0IGZyb20gdGhlICdkZXBlbmRlbnRPYnNlcnZhYmxlcycgbGlzdCB3ZSBuZWVkIHRvIGV2YWx1YXRlIGFmdGVyIG1hcHBpbmcgaGFzXG5cdFx0XHQvLyBjb21wbGV0ZWQgaWYgdGhlIHVzZXIgYWxyZWFkeSBldmFsdWF0ZWQgdGhlIERPIHRoZW1zZWx2ZXMgaW4gdGhlIG1lYW50aW1lLlxuXHRcdFx0dmFyIHdyYXAgPSBmdW5jdGlvbiAoRE8pIHtcblx0XHRcdFx0Ly8gVGVtcG9yYXJpbHkgcmV2ZXJ0IGtvLmRlcGVuZGVudE9ic2VydmFibGUsIHNpbmNlIGl0IGlzIHVzZWQgaW4ga28uaXNXcml0ZWFibGVPYnNlcnZhYmxlXG5cdFx0XHRcdHZhciB0bXAgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlO1xuXHRcdFx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHRcdFx0dmFyIGlzV3JpdGVhYmxlID0ga28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKERPKTtcblx0XHRcdFx0a28uZGVwZW5kZW50T2JzZXJ2YWJsZSA9IHRtcDtcblxuXHRcdFx0XHR2YXIgd3JhcHBlZCA9IHJlYWxLb0RlcGVuZGVudE9ic2VydmFibGUoe1xuXHRcdFx0XHRcdHJlYWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmICghaXNSZW1vdmVkKSB7XG5cdFx0XHRcdFx0XHRcdGtvLnV0aWxzLmFycmF5UmVtb3ZlSXRlbShkZXBlbmRlbnRPYnNlcnZhYmxlcywgRE8pO1xuXHRcdFx0XHRcdFx0XHRpc1JlbW92ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIERPLmFwcGx5KERPLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0d3JpdGU6IGlzV3JpdGVhYmxlICYmIGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBETyh2YWwpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGVmZXJFdmFsdWF0aW9uOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoREVCVUcpIHdyYXBwZWQuX3dyYXBwZXIgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gd3JhcHBlZDtcblx0XHRcdH07XG5cdFx0XHRcblx0XHRcdG9wdGlvbnMuZGVmZXJFdmFsdWF0aW9uID0gdHJ1ZTsgLy8gd2lsbCBlaXRoZXIgc2V0IGZvciBqdXN0IG9wdGlvbnMsIG9yIGJvdGggcmVhZC9vcHRpb25zLlxuXHRcdFx0dmFyIHJlYWxEZXBlbmRlbnRPYnNlcnZhYmxlID0gbmV3IHJlYWxLb0RlcGVuZGVudE9ic2VydmFibGUocmVhZCwgb3duZXIsIG9wdGlvbnMpO1xuXG5cdFx0XHRpZiAoIXJlYWxEZWZlckV2YWx1YXRpb24pIHtcblx0XHRcdFx0cmVhbERlcGVuZGVudE9ic2VydmFibGUgPSB3cmFwKHJlYWxEZXBlbmRlbnRPYnNlcnZhYmxlKTtcblx0XHRcdFx0ZGVwZW5kZW50T2JzZXJ2YWJsZXMucHVzaChyZWFsRGVwZW5kZW50T2JzZXJ2YWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZWFsRGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHR9XG5cdFx0a28uZGVwZW5kZW50T2JzZXJ2YWJsZS5mbiA9IHJlYWxLb0RlcGVuZGVudE9ic2VydmFibGUuZm47XG5cdFx0a28uY29tcHV0ZWQgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlO1xuXHRcdHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuXHRcdGtvLmRlcGVuZGVudE9ic2VydmFibGUgPSBsb2NhbERPO1xuXHRcdGtvLmNvbXB1dGVkID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVmlld01vZGVsKG1hcHBlZFJvb3RPYmplY3QsIHJvb3RPYmplY3QsIG9wdGlvbnMsIHBhcmVudE5hbWUsIHBhcmVudCwgcGFyZW50UHJvcGVydHlOYW1lLCBtYXBwZWRQYXJlbnQpIHtcblx0XHR2YXIgaXNBcnJheSA9IGV4cG9ydHMuZ2V0VHlwZShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpKSA9PT0gXCJhcnJheVwiO1xuXG5cdFx0cGFyZW50UHJvcGVydHlOYW1lID0gcGFyZW50UHJvcGVydHlOYW1lIHx8IFwiXCI7XG5cblx0XHQvLyBJZiB0aGlzIG9iamVjdCB3YXMgYWxyZWFkeSBtYXBwZWQgcHJldmlvdXNseSwgdGFrZSB0aGUgb3B0aW9ucyBmcm9tIHRoZXJlIGFuZCBtZXJnZSB0aGVtIHdpdGggb3VyIGV4aXN0aW5nIG9uZXMuXG5cdFx0aWYgKGV4cG9ydHMuaXNNYXBwZWQobWFwcGVkUm9vdE9iamVjdCkpIHtcblx0XHRcdHZhciBwcmV2aW91c01hcHBpbmcgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3QpW21hcHBpbmdQcm9wZXJ0eV07XG5cdFx0XHRvcHRpb25zID0gbWVyZ2UocHJldmlvdXNNYXBwaW5nLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHR2YXIgY2FsbGJhY2tQYXJhbXMgPSB7XG5cdFx0XHRkYXRhOiByb290T2JqZWN0LFxuXHRcdFx0cGFyZW50OiBtYXBwZWRQYXJlbnRcblx0XHR9O1xuXG5cdFx0dmFyIGhhc0NyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0gJiYgb3B0aW9uc1twYXJlbnROYW1lXS5jcmVhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcblx0XHR9O1xuXG5cdFx0dmFyIGNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdHJldHVybiB3aXRoUHJveHlEZXBlbmRlbnRPYnNlcnZhYmxlKGRlcGVuZGVudE9ic2VydmFibGVzLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShwYXJlbnQpIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1twYXJlbnROYW1lXS5jcmVhdGUoe1xuXHRcdFx0XHRcdFx0ZGF0YTogZGF0YSB8fCBjYWxsYmFja1BhcmFtcy5kYXRhLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBjYWxsYmFja1BhcmFtcy5wYXJlbnQsXG5cdFx0XHRcdFx0XHRza2lwOiBlbXB0eVJldHVyblxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBvcHRpb25zW3BhcmVudE5hbWVdLmNyZWF0ZSh7XG5cdFx0XHRcdFx0XHRkYXRhOiBkYXRhIHx8IGNhbGxiYWNrUGFyYW1zLmRhdGEsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6IGNhbGxiYWNrUGFyYW1zLnBhcmVudFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR2YXIgaGFzVXBkYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9uc1twYXJlbnROYW1lXSAmJiBvcHRpb25zW3BhcmVudE5hbWVdLnVwZGF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuXHRcdH07XG5cblx0XHR2YXIgdXBkYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiAob2JqLCBkYXRhKSB7XG5cdFx0XHR2YXIgcGFyYW1zID0ge1xuXHRcdFx0XHRkYXRhOiBkYXRhIHx8IGNhbGxiYWNrUGFyYW1zLmRhdGEsXG5cdFx0XHRcdHBhcmVudDogY2FsbGJhY2tQYXJhbXMucGFyZW50LFxuXHRcdFx0XHR0YXJnZXQ6IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUob2JqKVxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShvYmopKSB7XG5cdFx0XHRcdHBhcmFtcy5vYnNlcnZhYmxlID0gb2JqO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3B0aW9uc1twYXJlbnROYW1lXS51cGRhdGUocGFyYW1zKTtcblx0XHR9XG5cblx0XHR2YXIgYWxyZWFkeU1hcHBlZCA9IHZpc2l0ZWRPYmplY3RzLmdldChyb290T2JqZWN0KTtcblx0XHRpZiAoYWxyZWFkeU1hcHBlZCkge1xuXHRcdFx0cmV0dXJuIGFscmVhZHlNYXBwZWQ7XG5cdFx0fVxuXG5cdFx0cGFyZW50TmFtZSA9IHBhcmVudE5hbWUgfHwgXCJcIjtcblxuXHRcdGlmICghaXNBcnJheSkge1xuXHRcdFx0Ly8gRm9yIGF0b21pYyB0eXBlcywgZG8gYSBkaXJlY3QgdXBkYXRlIG9uIHRoZSBvYnNlcnZhYmxlXG5cdFx0XHRpZiAoIWNhbkhhdmVQcm9wZXJ0aWVzKHJvb3RPYmplY3QpKSB7XG5cdFx0XHRcdHN3aXRjaCAoZXhwb3J0cy5nZXRUeXBlKHJvb3RPYmplY3QpKSB7XG5cdFx0XHRcdGNhc2UgXCJmdW5jdGlvblwiOlxuXHRcdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKHJvb3RPYmplY3QpKSB7XG5cdFx0XHRcdFx0XHRcdHJvb3RPYmplY3QodXBkYXRlQ2FsbGJhY2socm9vdE9iamVjdCkpO1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0gcm9vdE9iamVjdDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSB1cGRhdGVDYWxsYmFjayhyb290T2JqZWN0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHJvb3RPYmplY3Q7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdCkpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB2YWx1ZVRvV3JpdGUgPSB1cGRhdGVDYWxsYmFjayhtYXBwZWRSb290T2JqZWN0KTtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCh2YWx1ZVRvV3JpdGUpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVUb1dyaXRlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIHZhbHVlVG9Xcml0ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCk7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QodmFsdWVUb1dyaXRlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlVG9Xcml0ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGhhc0NyZWF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IGNyZWF0ZUNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IGtvLm9ic2VydmFibGUoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0KHVwZGF0ZUNhbGxiYWNrKG1hcHBlZFJvb3RPYmplY3QpKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3QpO1xuXHRcdFx0XHRpZiAoIW1hcHBlZFJvb3RPYmplY3QpIHtcblx0XHRcdFx0XHRpZiAoaGFzQ3JlYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0dmFyIHJlc3VsdCA9IGNyZWF0ZUNhbGxiYWNrKCk7XG5cblx0XHRcdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHVwZGF0ZUNhbGxiYWNrKHJlc3VsdCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVDYWxsYmFjayhyZXN1bHQpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0gdXBkYXRlQ2FsbGJhY2sobWFwcGVkUm9vdE9iamVjdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2aXNpdGVkT2JqZWN0cy5zYXZlKHJvb3RPYmplY3QsIG1hcHBlZFJvb3RPYmplY3QpO1xuXHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkgcmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XG5cblx0XHRcdFx0Ly8gRm9yIG5vbi1hdG9taWMgdHlwZXMsIHZpc2l0IGFsbCBwcm9wZXJ0aWVzIGFuZCB1cGRhdGUgcmVjdXJzaXZlbHlcblx0XHRcdFx0dmlzaXRQcm9wZXJ0aWVzT3JBcnJheUVudHJpZXMocm9vdE9iamVjdCwgZnVuY3Rpb24gKGluZGV4ZXIpIHtcblx0XHRcdFx0XHR2YXIgZnVsbFByb3BlcnR5TmFtZSA9IHBhcmVudFByb3BlcnR5TmFtZS5sZW5ndGggPyBwYXJlbnRQcm9wZXJ0eU5hbWUgKyBcIi5cIiArIGluZGV4ZXIgOiBpbmRleGVyO1xuXG5cdFx0XHRcdFx0aWYgKGtvLnV0aWxzLmFycmF5SW5kZXhPZihvcHRpb25zLmlnbm9yZSwgZnVsbFByb3BlcnR5TmFtZSkgIT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuY29weSwgZnVsbFByb3BlcnR5TmFtZSkgIT0gLTEpIHtcblx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0gPSByb290T2JqZWN0W2luZGV4ZXJdO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEluIGNhc2Ugd2UgYXJlIGFkZGluZyBhbiBhbHJlYWR5IG1hcHBlZCBwcm9wZXJ0eSwgZmlsbCBpdCB3aXRoIHRoZSBwcmV2aW91c2x5IG1hcHBlZCBwcm9wZXJ0eSB2YWx1ZSB0byBwcmV2ZW50IHJlY3Vyc2lvbi5cblx0XHRcdFx0XHQvLyBJZiB0aGlzIGlzIGEgcHJvcGVydHkgdGhhdCB3YXMgZ2VuZXJhdGVkIGJ5IGZyb21KUywgd2Ugc2hvdWxkIHVzZSB0aGUgb3B0aW9ucyBzcGVjaWZpZWQgdGhlcmVcblx0XHRcdFx0XHR2YXIgcHJldk1hcHBlZFByb3BlcnR5ID0gdmlzaXRlZE9iamVjdHMuZ2V0KHJvb3RPYmplY3RbaW5kZXhlcl0pO1xuXHRcdFx0XHRcdHZhciByZXR2YWwgPSB1cGRhdGVWaWV3TW9kZWwobWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSwgcm9vdE9iamVjdFtpbmRleGVyXSwgb3B0aW9ucywgaW5kZXhlciwgbWFwcGVkUm9vdE9iamVjdCwgZnVsbFByb3BlcnR5TmFtZSwgbWFwcGVkUm9vdE9iamVjdCk7XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gcHJldk1hcHBlZFByb3BlcnR5IHx8IHJldHZhbDtcblxuXHRcdFx0XHRcdGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSkpIHtcblx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0oa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3B0aW9ucy5tYXBwZWRQcm9wZXJ0aWVzW2Z1bGxQcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHsgLy9tYXBwZWRSb290T2JqZWN0IGlzIGFuIGFycmF5XG5cdFx0XHR2YXIgY2hhbmdlcyA9IFtdO1xuXG5cdFx0XHR2YXIgaGFzS2V5Q2FsbGJhY2sgPSBmYWxzZTtcblx0XHRcdHZhciBrZXlDYWxsYmFjayA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdHJldHVybiB4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9wdGlvbnNbcGFyZW50TmFtZV0gJiYgb3B0aW9uc1twYXJlbnROYW1lXS5rZXkpIHtcblx0XHRcdFx0a2V5Q2FsbGJhY2sgPSBvcHRpb25zW3BhcmVudE5hbWVdLmtleTtcblx0XHRcdFx0aGFzS2V5Q2FsbGJhY2sgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWtvLmlzT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KSkge1xuXHRcdFx0XHQvLyBXaGVuIGNyZWF0aW5nIHRoZSBuZXcgb2JzZXJ2YWJsZSBhcnJheSwgYWxzbyBhZGQgYSBidW5jaCBvZiB1dGlsaXR5IGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlICdrZXknIG9mIHRoZSBhcnJheSBpdGVtcyBpbnRvIGFjY291bnQuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkUmVtb3ZlID0gZnVuY3Rpb24gKHZhbHVlT3JQcmVkaWNhdGUpIHtcblx0XHRcdFx0XHR2YXIgcHJlZGljYXRlID0gdHlwZW9mIHZhbHVlT3JQcmVkaWNhdGUgPT0gXCJmdW5jdGlvblwiID8gdmFsdWVPclByZWRpY2F0ZSA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IGtleUNhbGxiYWNrKHZhbHVlT3JQcmVkaWNhdGUpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdC5yZW1vdmUoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVkaWNhdGUoa2V5Q2FsbGJhY2soaXRlbSkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5tYXBwZWRSZW1vdmVBbGwgPSBmdW5jdGlvbiAoYXJyYXlPZlZhbHVlcykge1xuXHRcdFx0XHRcdHZhciBhcnJheU9mS2V5cyA9IGZpbHRlckFycmF5QnlLZXkoYXJyYXlPZlZhbHVlcywga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0LnJlbW92ZShmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheU9mS2V5cywga2V5Q2FsbGJhY2soaXRlbSkpICE9IC0xO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5tYXBwZWREZXN0cm95ID0gZnVuY3Rpb24gKHZhbHVlT3JQcmVkaWNhdGUpIHtcblx0XHRcdFx0XHR2YXIgcHJlZGljYXRlID0gdHlwZW9mIHZhbHVlT3JQcmVkaWNhdGUgPT0gXCJmdW5jdGlvblwiID8gdmFsdWVPclByZWRpY2F0ZSA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IGtleUNhbGxiYWNrKHZhbHVlT3JQcmVkaWNhdGUpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdC5kZXN0cm95KGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZGljYXRlKGtleUNhbGxiYWNrKGl0ZW0pKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkRGVzdHJveUFsbCA9IGZ1bmN0aW9uIChhcnJheU9mVmFsdWVzKSB7XG5cdFx0XHRcdFx0dmFyIGFycmF5T2ZLZXlzID0gZmlsdGVyQXJyYXlCeUtleShhcnJheU9mVmFsdWVzLCBrZXlDYWxsYmFjayk7XG5cdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3QuZGVzdHJveShmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheU9mS2V5cywga2V5Q2FsbGJhY2soaXRlbSkpICE9IC0xO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5tYXBwZWRJbmRleE9mID0gZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHR2YXIga2V5cyA9IGZpbHRlckFycmF5QnlLZXkobWFwcGVkUm9vdE9iamVjdCgpLCBrZXlDYWxsYmFjayk7XG5cdFx0XHRcdFx0dmFyIGtleSA9IGtleUNhbGxiYWNrKGl0ZW0pO1xuXHRcdFx0XHRcdHJldHVybiBrby51dGlscy5hcnJheUluZGV4T2Yoa2V5cywga2V5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkQ3JlYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKG1hcHBlZFJvb3RPYmplY3QubWFwcGVkSW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGFuIG9iamVjdCB3aXRoIHRoZSBrZXkgdGhhdCB5b3Ugc3BlY2lmaWVkLlwiKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgaXRlbSA9IGhhc0NyZWF0ZUNhbGxiYWNrKCkgPyBjcmVhdGVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0dmFyIG5ld1ZhbHVlID0gdXBkYXRlQ2FsbGJhY2soaXRlbSwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShpdGVtKSkge1xuXHRcdFx0XHRcdFx0XHRpdGVtKG5ld1ZhbHVlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0gPSBuZXdWYWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjdXJyZW50QXJyYXlLZXlzID0gZmlsdGVyQXJyYXlCeUtleShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3QpLCBrZXlDYWxsYmFjaykuc29ydCgpO1xuXHRcdFx0dmFyIG5ld0FycmF5S2V5cyA9IGZpbHRlckFycmF5QnlLZXkocm9vdE9iamVjdCwga2V5Q2FsbGJhY2spO1xuXHRcdFx0aWYgKGhhc0tleUNhbGxiYWNrKSBuZXdBcnJheUtleXMuc29ydCgpO1xuXHRcdFx0dmFyIGVkaXRTY3JpcHQgPSBrby51dGlscy5jb21wYXJlQXJyYXlzKGN1cnJlbnRBcnJheUtleXMsIG5ld0FycmF5S2V5cyk7XG5cblx0XHRcdHZhciBpZ25vcmVJbmRleE9mID0ge307XG5cdFx0XHRcblx0XHRcdHZhciBpLCBqO1xuXG5cdFx0XHR2YXIgdW53cmFwcGVkUm9vdE9iamVjdCA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCk7XG5cdFx0XHR2YXIgaXRlbXNCeUtleSA9IHt9O1xuXHRcdFx0dmFyIG9wdGltaXplZEtleXMgPSB0cnVlO1xuXHRcdFx0Zm9yIChpID0gMCwgaiA9IHVud3JhcHBlZFJvb3RPYmplY3QubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdFx0XHRcdHZhciBrZXkgPSBrZXlDYWxsYmFjayh1bndyYXBwZWRSb290T2JqZWN0W2ldKTtcblx0XHRcdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSBpbnN0YW5jZW9mIE9iamVjdCkge1xuXHRcdFx0XHRcdG9wdGltaXplZEtleXMgPSBmYWxzZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtc0J5S2V5W2tleV0gPSB1bndyYXBwZWRSb290T2JqZWN0W2ldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbmV3Q29udGVudHMgPSBbXTtcblx0XHRcdHZhciBwYXNzZWRPdmVyID0gMDtcblx0XHRcdGZvciAoaSA9IDAsIGogPSBlZGl0U2NyaXB0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuXHRcdFx0XHR2YXIga2V5ID0gZWRpdFNjcmlwdFtpXTtcblx0XHRcdFx0dmFyIG1hcHBlZEl0ZW07XG5cdFx0XHRcdHZhciBmdWxsUHJvcGVydHlOYW1lID0gcGFyZW50UHJvcGVydHlOYW1lICsgXCJbXCIgKyBpICsgXCJdXCI7XG5cdFx0XHRcdHN3aXRjaCAoa2V5LnN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiYWRkZWRcIjpcblx0XHRcdFx0XHR2YXIgaXRlbSA9IG9wdGltaXplZEtleXMgPyBpdGVtc0J5S2V5W2tleS52YWx1ZV0gOiBnZXRJdGVtQnlLZXkoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KSwga2V5LnZhbHVlLCBrZXlDYWxsYmFjayk7XG5cdFx0XHRcdFx0bWFwcGVkSXRlbSA9IHVwZGF0ZVZpZXdNb2RlbCh1bmRlZmluZWQsIGl0ZW0sIG9wdGlvbnMsIHBhcmVudE5hbWUsIG1hcHBlZFJvb3RPYmplY3QsIGZ1bGxQcm9wZXJ0eU5hbWUsIHBhcmVudCk7XG5cdFx0XHRcdFx0aWYoIWhhc0NyZWF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdG1hcHBlZEl0ZW0gPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1hcHBlZEl0ZW0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBpbmRleCA9IGlnbm9yYWJsZUluZGV4T2Yoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KSwgaXRlbSwgaWdub3JlSW5kZXhPZik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKG1hcHBlZEl0ZW0gPT09IGVtcHR5UmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRwYXNzZWRPdmVyKys7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG5ld0NvbnRlbnRzW2luZGV4IC0gcGFzc2VkT3Zlcl0gPSBtYXBwZWRJdGVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlnbm9yZUluZGV4T2ZbaW5kZXhdID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJldGFpbmVkXCI6XG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBvcHRpbWl6ZWRLZXlzID8gaXRlbXNCeUtleVtrZXkudmFsdWVdIDogZ2V0SXRlbUJ5S2V5KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCksIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdG1hcHBlZEl0ZW0gPSBnZXRJdGVtQnlLZXkobWFwcGVkUm9vdE9iamVjdCwga2V5LnZhbHVlLCBrZXlDYWxsYmFjayk7XG5cdFx0XHRcdFx0dXBkYXRlVmlld01vZGVsKG1hcHBlZEl0ZW0sIGl0ZW0sIG9wdGlvbnMsIHBhcmVudE5hbWUsIG1hcHBlZFJvb3RPYmplY3QsIGZ1bGxQcm9wZXJ0eU5hbWUsIHBhcmVudCk7XG5cblx0XHRcdFx0XHR2YXIgaW5kZXggPSBpZ25vcmFibGVJbmRleE9mKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCksIGl0ZW0sIGlnbm9yZUluZGV4T2YpO1xuXHRcdFx0XHRcdG5ld0NvbnRlbnRzW2luZGV4XSA9IG1hcHBlZEl0ZW07XG5cdFx0XHRcdFx0aWdub3JlSW5kZXhPZltpbmRleF0gPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVsZXRlZFwiOlxuXHRcdFx0XHRcdG1hcHBlZEl0ZW0gPSBnZXRJdGVtQnlLZXkobWFwcGVkUm9vdE9iamVjdCwga2V5LnZhbHVlLCBrZXlDYWxsYmFjayk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjaGFuZ2VzLnB1c2goe1xuXHRcdFx0XHRcdGV2ZW50OiBrZXkuc3RhdHVzLFxuXHRcdFx0XHRcdGl0ZW06IG1hcHBlZEl0ZW1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdG1hcHBlZFJvb3RPYmplY3QobmV3Q29udGVudHMpO1xuXG5cdFx0XHRpZiAob3B0aW9uc1twYXJlbnROYW1lXSAmJiBvcHRpb25zW3BhcmVudE5hbWVdLmFycmF5Q2hhbmdlZCkge1xuXHRcdFx0XHRrby51dGlscy5hcnJheUZvckVhY2goY2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuXHRcdFx0XHRcdG9wdGlvbnNbcGFyZW50TmFtZV0uYXJyYXlDaGFuZ2VkKGNoYW5nZS5ldmVudCwgY2hhbmdlLml0ZW0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGlnbm9yYWJsZUluZGV4T2YoYXJyYXksIGl0ZW0sIGlnbm9yZUluZGljZXMpIHtcblx0XHRmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuXHRcdFx0aWYgKGlnbm9yZUluZGljZXNbaV0gPT09IHRydWUpIGNvbnRpbnVlO1xuXHRcdFx0aWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBtYXBLZXkoaXRlbSwgY2FsbGJhY2spIHtcblx0XHR2YXIgbWFwcGVkSXRlbTtcblx0XHRpZiAoY2FsbGJhY2spIG1hcHBlZEl0ZW0gPSBjYWxsYmFjayhpdGVtKTtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKG1hcHBlZEl0ZW0pID09PSBcInVuZGVmaW5lZFwiKSBtYXBwZWRJdGVtID0gaXRlbTtcblxuXHRcdHJldHVybiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1hcHBlZEl0ZW0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0SXRlbUJ5S2V5KGFycmF5LCBrZXksIGNhbGxiYWNrKSB7XG5cdFx0YXJyYXkgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFycmF5KTtcblx0XHRmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBhcnJheVtpXTtcblx0XHRcdGlmIChtYXBLZXkoaXRlbSwgY2FsbGJhY2spID09PSBrZXkpIHJldHVybiBpdGVtO1xuXHRcdH1cblxuXHRcdHRocm93IG5ldyBFcnJvcihcIldoZW4gY2FsbGluZyBrby51cGRhdGUqLCB0aGUga2V5ICdcIiArIGtleSArIFwiJyB3YXMgbm90IGZvdW5kIVwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpbHRlckFycmF5QnlLZXkoYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0cmV0dXJuIGtvLnV0aWxzLmFycmF5TWFwKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYXJyYXkpLCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdHJldHVybiBtYXBLZXkoaXRlbSwgY2FsbGJhY2spO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB2aXNpdFByb3BlcnRpZXNPckFycmF5RW50cmllcyhyb290T2JqZWN0LCB2aXNpdG9yQ2FsbGJhY2spIHtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKHJvb3RPYmplY3QpID09PSBcImFycmF5XCIpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdE9iamVjdC5sZW5ndGg7IGkrKylcblx0XHRcdHZpc2l0b3JDYWxsYmFjayhpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHJvb3RPYmplY3QpXG5cdFx0XHR2aXNpdG9yQ2FsbGJhY2socHJvcGVydHlOYW1lKTtcblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gY2FuSGF2ZVByb3BlcnRpZXMob2JqZWN0KSB7XG5cdFx0dmFyIHR5cGUgPSBleHBvcnRzLmdldFR5cGUob2JqZWN0KTtcblx0XHRyZXR1cm4gKCh0eXBlID09PSBcIm9iamVjdFwiKSB8fCAodHlwZSA9PT0gXCJhcnJheVwiKSkgJiYgKG9iamVjdCAhPT0gbnVsbCk7XG5cdH1cblxuXHQvLyBCYXNlZCBvbiB0aGUgcGFyZW50TmFtZSwgdGhpcyBjcmVhdGVzIGEgZnVsbHkgY2xhc3NpZmllZCBuYW1lIG9mIGEgcHJvcGVydHlcblxuXHRmdW5jdGlvbiBnZXRQcm9wZXJ0eU5hbWUocGFyZW50TmFtZSwgcGFyZW50LCBpbmRleGVyKSB7XG5cdFx0dmFyIHByb3BlcnR5TmFtZSA9IHBhcmVudE5hbWUgfHwgXCJcIjtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKHBhcmVudCkgPT09IFwiYXJyYXlcIikge1xuXHRcdFx0aWYgKHBhcmVudE5hbWUpIHtcblx0XHRcdFx0cHJvcGVydHlOYW1lICs9IFwiW1wiICsgaW5kZXhlciArIFwiXVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocGFyZW50TmFtZSkge1xuXHRcdFx0XHRwcm9wZXJ0eU5hbWUgKz0gXCIuXCI7XG5cdFx0XHR9XG5cdFx0XHRwcm9wZXJ0eU5hbWUgKz0gaW5kZXhlcjtcblx0XHR9XG5cdFx0cmV0dXJuIHByb3BlcnR5TmFtZTtcblx0fVxuXG5cdGV4cG9ydHMudmlzaXRNb2RlbCA9IGZ1bmN0aW9uIChyb290T2JqZWN0LCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdG9wdGlvbnMudmlzaXRlZE9iamVjdHMgPSBvcHRpb25zLnZpc2l0ZWRPYmplY3RzIHx8IG5ldyBvYmplY3RMb29rdXAoKTtcblxuXHRcdHZhciBtYXBwZWRSb290T2JqZWN0O1xuXHRcdHZhciB1bndyYXBwZWRSb290T2JqZWN0ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KTtcblxuXHRcdGlmICghY2FuSGF2ZVByb3BlcnRpZXModW53cmFwcGVkUm9vdE9iamVjdCkpIHtcblx0XHRcdHJldHVybiBjYWxsYmFjayhyb290T2JqZWN0LCBvcHRpb25zLnBhcmVudE5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zID0gZmlsbE9wdGlvbnMob3B0aW9ucywgdW53cmFwcGVkUm9vdE9iamVjdFttYXBwaW5nUHJvcGVydHldKTtcblxuXHRcdFx0Ly8gT25seSBkbyBhIGNhbGxiYWNrLCBidXQgaWdub3JlIHRoZSByZXN1bHRzXG5cdFx0XHRjYWxsYmFjayhyb290T2JqZWN0LCBvcHRpb25zLnBhcmVudE5hbWUpO1xuXHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IGV4cG9ydHMuZ2V0VHlwZSh1bndyYXBwZWRSb290T2JqZWN0KSA9PT0gXCJhcnJheVwiID8gW10gOiB7fTtcblx0XHR9XG5cblx0XHRvcHRpb25zLnZpc2l0ZWRPYmplY3RzLnNhdmUocm9vdE9iamVjdCwgbWFwcGVkUm9vdE9iamVjdCk7XG5cblx0XHR2YXIgcGFyZW50TmFtZSA9IG9wdGlvbnMucGFyZW50TmFtZTtcblx0XHR2aXNpdFByb3BlcnRpZXNPckFycmF5RW50cmllcyh1bndyYXBwZWRSb290T2JqZWN0LCBmdW5jdGlvbiAoaW5kZXhlcikge1xuXHRcdFx0aWYgKG9wdGlvbnMuaWdub3JlICYmIGtvLnV0aWxzLmFycmF5SW5kZXhPZihvcHRpb25zLmlnbm9yZSwgaW5kZXhlcikgIT0gLTEpIHJldHVybjtcblxuXHRcdFx0dmFyIHByb3BlcnR5VmFsdWUgPSB1bndyYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdO1xuXHRcdFx0b3B0aW9ucy5wYXJlbnROYW1lID0gZ2V0UHJvcGVydHlOYW1lKHBhcmVudE5hbWUsIHVud3JhcHBlZFJvb3RPYmplY3QsIGluZGV4ZXIpO1xuXG5cdFx0XHQvLyBJZiB3ZSBkb24ndCB3YW50IHRvIGV4cGxpY2l0bHkgY29weSB0aGUgdW5tYXBwZWQgcHJvcGVydHkuLi5cblx0XHRcdGlmIChrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5jb3B5LCBpbmRleGVyKSA9PT0gLTEpIHtcblx0XHRcdFx0Ly8gLi4uZmluZCBvdXQgaWYgaXQncyBhIHByb3BlcnR5IHdlIHdhbnQgdG8gZXhwbGljaXRseSBpbmNsdWRlXG5cdFx0XHRcdGlmIChrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5pbmNsdWRlLCBpbmRleGVyKSA9PT0gLTEpIHtcblx0XHRcdFx0XHQvLyBUaGUgbWFwcGVkIHByb3BlcnRpZXMgb2JqZWN0IGNvbnRhaW5zIGFsbCB0aGUgcHJvcGVydGllcyB0aGF0IHdlcmUgcGFydCBvZiB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuXHRcdFx0XHRcdC8vIElmIGEgcHJvcGVydHkgZG9lcyBub3QgZXhpc3QsIGFuZCBpdCBpcyBub3QgYmVjYXVzZSBpdCBpcyBwYXJ0IG9mIGFuIGFycmF5IChlLmcuIFwibXlQcm9wWzNdXCIpLCB0aGVuIGl0IHNob3VsZCBub3QgYmUgdW5tYXBwZWQuXG5cdFx0XHRcdFx0aWYgKHVud3JhcHBlZFJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XSAmJiB1bndyYXBwZWRSb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0ubWFwcGVkUHJvcGVydGllcyAmJiAhdW53cmFwcGVkUm9vdE9iamVjdFttYXBwaW5nUHJvcGVydHldLm1hcHBlZFByb3BlcnRpZXNbaW5kZXhlcl0gJiYgIShleHBvcnRzLmdldFR5cGUodW53cmFwcGVkUm9vdE9iamVjdCkgPT09IFwiYXJyYXlcIikpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIG91dHB1dFByb3BlcnR5O1xuXHRcdFx0c3dpdGNoIChleHBvcnRzLmdldFR5cGUoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShwcm9wZXJ0eVZhbHVlKSkpIHtcblx0XHRcdGNhc2UgXCJvYmplY3RcIjpcblx0XHRcdGNhc2UgXCJhcnJheVwiOlxuXHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxuXHRcdFx0XHR2YXIgcHJldmlvdXNseU1hcHBlZFZhbHVlID0gb3B0aW9ucy52aXNpdGVkT2JqZWN0cy5nZXQocHJvcGVydHlWYWx1ZSk7XG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0gPSAoZXhwb3J0cy5nZXRUeXBlKHByZXZpb3VzbHlNYXBwZWRWYWx1ZSkgIT09IFwidW5kZWZpbmVkXCIpID8gcHJldmlvdXNseU1hcHBlZFZhbHVlIDogZXhwb3J0cy52aXNpdE1vZGVsKHByb3BlcnR5VmFsdWUsIGNhbGxiYWNrLCBvcHRpb25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdID0gY2FsbGJhY2socHJvcGVydHlWYWx1ZSwgb3B0aW9ucy5wYXJlbnROYW1lKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xuXHR9XG5cblx0ZnVuY3Rpb24gc2ltcGxlT2JqZWN0TG9va3VwKCkge1xuXHRcdHZhciBrZXlzID0gW107XG5cdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcdHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHR2YXIgZXhpc3RpbmdJbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihrZXlzLCBrZXkpO1xuXHRcdFx0aWYgKGV4aXN0aW5nSW5kZXggPj0gMCkgdmFsdWVzW2V4aXN0aW5nSW5kZXhdID0gdmFsdWU7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0a2V5cy5wdXNoKGtleSk7XG5cdFx0XHRcdHZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHRoaXMuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0dmFyIGV4aXN0aW5nSW5kZXggPSBrby51dGlscy5hcnJheUluZGV4T2Yoa2V5cywga2V5KTtcblx0XHRcdHZhciB2YWx1ZSA9IChleGlzdGluZ0luZGV4ID49IDApID8gdmFsdWVzW2V4aXN0aW5nSW5kZXhdIDogdW5kZWZpbmVkO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH07XG5cdH07XG5cdFxuXHRmdW5jdGlvbiBvYmplY3RMb29rdXAoKSB7XG5cdFx0dmFyIGJ1Y2tldHMgPSB7fTtcblx0XHRcblx0XHR2YXIgZmluZEJ1Y2tldCA9IGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0dmFyIGJ1Y2tldEtleTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGJ1Y2tldEtleSA9IGtleTsvL0pTT04uc3RyaW5naWZ5KGtleSk7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRidWNrZXRLZXkgPSBcIiQkJFwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYnVja2V0ID0gYnVja2V0c1tidWNrZXRLZXldO1xuXHRcdFx0aWYgKGJ1Y2tldCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGJ1Y2tldCA9IG5ldyBzaW1wbGVPYmplY3RMb29rdXAoKTtcblx0XHRcdFx0YnVja2V0c1tidWNrZXRLZXldID0gYnVja2V0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJ1Y2tldDtcblx0XHR9O1xuXHRcdFxuXHRcdHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRmaW5kQnVja2V0KGtleSkuc2F2ZShrZXksIHZhbHVlKTtcblx0XHR9O1xuXHRcdHRoaXMuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGZpbmRCdWNrZXQoa2V5KS5nZXQoa2V5KTtcblx0XHR9O1xuXHR9O1xufSkpO1xufSkoKSIsIi8vIEtub2Nrb3V0IEphdmFTY3JpcHQgbGlicmFyeSB2Mi4xLjBcbi8vIChjKSBTdGV2ZW4gU2FuZGVyc29uIC0gaHR0cDovL2tub2Nrb3V0anMuY29tL1xuLy8gTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcblxuKGZ1bmN0aW9uKHdpbmRvdyxkb2N1bWVudCxuYXZpZ2F0b3IsdW5kZWZpbmVkKXtcbmZ1bmN0aW9uIG0odyl7dGhyb3cgdzt9dmFyIG49dm9pZCAwLHA9ITAscz1udWxsLHQ9ITE7ZnVuY3Rpb24gQSh3KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gd319O2Z1bmN0aW9uIEUodyl7ZnVuY3Rpb24gQihiLGMsZCl7ZCYmYyE9PWEuay5yKGIpJiZhLmsuUyhiLGMpO2MhPT1hLmsucihiKSYmYS5hLnZhKGIsXCJjaGFuZ2VcIil9dmFyIGE9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3P3c6e307YS5iPWZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPWIuc3BsaXQoXCIuXCIpLGY9YSxnPTA7ZzxkLmxlbmd0aC0xO2crKylmPWZbZFtnXV07ZltkW2QubGVuZ3RoLTFdXT1jfTthLkI9ZnVuY3Rpb24oYSxjLGQpe2FbY109ZH07YS52ZXJzaW9uPVwiMi4xLjBcIjthLmIoXCJ2ZXJzaW9uXCIsYS52ZXJzaW9uKTthLmE9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMpe2lmKFwiaW5wdXRcIiE9PWEuYS5vKGIpfHwhYi50eXBlfHxcImNsaWNrXCIhPWMudG9Mb3dlckNhc2UoKSlyZXR1cm4gdDt2YXIgZT1iLnR5cGU7cmV0dXJuXCJjaGVja2JveFwiPT1lfHxcInJhZGlvXCI9PWV9dmFyIGM9L14oXFxzfFxcdTAwQTApK3woXFxzfFxcdTAwQTApKyQvZyxkPXt9LGY9e307ZFsvRmlyZWZveFxcLzIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpP1xuXCJLZXlib2FyZEV2ZW50XCI6XCJVSUV2ZW50c1wiXT1bXCJrZXl1cFwiLFwia2V5ZG93blwiLFwia2V5cHJlc3NcIl07ZC5Nb3VzZUV2ZW50cz1cImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIuc3BsaXQoXCIgXCIpO2Zvcih2YXIgZyBpbiBkKXt2YXIgZT1kW2ddO2lmKGUubGVuZ3RoKWZvcih2YXIgaD0wLGo9ZS5sZW5ndGg7aDxqO2grKylmW2VbaF1dPWd9dmFyIGs9e3Byb3BlcnR5Y2hhbmdlOnB9LGk9ZnVuY3Rpb24oKXtmb3IodmFyIGE9MyxiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtiLmlubmVySFRNTD1cIjxcXCEtLVtpZiBndCBJRSBcIisgKythK1wiXT48aT48L2k+PCFbZW5kaWZdLS1cXD5cIixjWzBdOyk7cmV0dXJuIDQ8YT9hOm59KCk7cmV0dXJue0NhOltcImF1dGhlbnRpY2l0eV90b2tlblwiLC9eX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4oXy4qKT8kL10sXG52OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWIoYVtjXSl9LGo6ZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZilyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLGIpO2Zvcih2YXIgYz0wLGU9YS5sZW5ndGg7YzxlO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sYWI6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZT0wLGY9YS5sZW5ndGg7ZTxmO2UrKylpZihiLmNhbGwoYyxhW2VdKSlyZXR1cm4gYVtlXTtyZXR1cm4gc30sYmE6ZnVuY3Rpb24oYixjKXt2YXIgZT1hLmEuaihiLGMpOzA8PWUmJmIuc3BsaWNlKGUsMSl9LHphOmZ1bmN0aW9uKGIpe2Zvcih2YXIgYj1ifHxbXSxjPVtdLGU9MCxmPWIubGVuZ3RoO2U8ZjtlKyspMD5hLmEuaihjLGJbZV0pJiZjLnB1c2goYltlXSk7cmV0dXJuIGN9LFQ6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGE9YXx8W10sYz1bXSxcbmU9MCxmPWEubGVuZ3RoO2U8ZjtlKyspYy5wdXNoKGIoYVtlXSkpO3JldHVybiBjfSxhYTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYT1hfHxbXSxjPVtdLGU9MCxmPWEubGVuZ3RoO2U8ZjtlKyspYihhW2VdKSYmYy5wdXNoKGFbZV0pO3JldHVybiBjfSxOOmZ1bmN0aW9uKGEsYil7aWYoYiBpbnN0YW5jZW9mIEFycmF5KWEucHVzaC5hcHBseShhLGIpO2Vsc2UgZm9yKHZhciBjPTAsZT1iLmxlbmd0aDtjPGU7YysrKWEucHVzaChiW2NdKTtyZXR1cm4gYX0sZXh0ZW5kOmZ1bmN0aW9uKGEsYil7aWYoYilmb3IodmFyIGMgaW4gYiliLmhhc093blByb3BlcnR5KGMpJiYoYVtjXT1iW2NdKTtyZXR1cm4gYX0sZ2E6ZnVuY3Rpb24oYil7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlTm9kZShiLmZpcnN0Q2hpbGQpfSxBYjpmdW5jdGlvbihiKXtmb3IodmFyIGI9YS5hLkwoYiksYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9MCxmPWIubGVuZ3RoO2U8ZjtlKyspYS5GKGJbZV0pLFxuYy5hcHBlbmRDaGlsZChiW2VdKTtyZXR1cm4gY30sWDpmdW5jdGlvbihiLGMpe2EuYS5nYShiKTtpZihjKWZvcih2YXIgZT0wLGY9Yy5sZW5ndGg7ZTxmO2UrKyliLmFwcGVuZENoaWxkKGNbZV0pfSxOYTpmdW5jdGlvbihiLGMpe3ZhciBlPWIubm9kZVR5cGU/W2JdOmI7aWYoMDxlLmxlbmd0aCl7Zm9yKHZhciBmPWVbMF0sZD1mLnBhcmVudE5vZGUsZz0wLGg9Yy5sZW5ndGg7ZzxoO2crKylkLmluc2VydEJlZm9yZShjW2ddLGYpO2c9MDtmb3IoaD1lLmxlbmd0aDtnPGg7ZysrKWEucmVtb3ZlTm9kZShlW2ddKX19LFBhOmZ1bmN0aW9uKGEsYil7MDw9bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA2XCIpP2Euc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixiKTphLnNlbGVjdGVkPWJ9LHc6ZnVuY3Rpb24oYSl7cmV0dXJuKGF8fFwiXCIpLnJlcGxhY2UoYyxcIlwiKX0sSWI6ZnVuY3Rpb24oYixjKXtmb3IodmFyIGU9W10sZj0oYnx8XCJcIikuc3BsaXQoYyksZz0wLGQ9Zi5sZW5ndGg7ZzxcbmQ7ZysrKXt2YXIgaD1hLmEudyhmW2ddKTtcIlwiIT09aCYmZS5wdXNoKGgpfXJldHVybiBlfSxIYjpmdW5jdGlvbihhLGIpe2E9YXx8XCJcIjtyZXR1cm4gYi5sZW5ndGg+YS5sZW5ndGg/dDphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LGViOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVwicmV0dXJuIChcIithK1wiKVwiLGU9MDtlPGI7ZSsrKWM9XCJ3aXRoKHNjW1wiK2UrXCJdKSB7IFwiK2MrXCIgfSBcIjtyZXR1cm4gbmV3IEZ1bmN0aW9uKFwic2NcIixjKX0sa2I6ZnVuY3Rpb24oYSxiKXtpZihiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKXJldHVybiAxNj09KGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSkmMTYpO2Zvcig7YSE9czspe2lmKGE9PWIpcmV0dXJuIHA7YT1hLnBhcmVudE5vZGV9cmV0dXJuIHR9LGZhOmZ1bmN0aW9uKGIpe3JldHVybiBhLmEua2IoYixiLm93bmVyRG9jdW1lbnQpfSxvOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLnRhZ05hbWUmJmEudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSxcbm46ZnVuY3Rpb24oYSxjLGUpe3ZhciBmPWkmJmtbY107aWYoIWYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkpe2lmKGIoYSxjKSl2YXIgZz1lLGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNoZWNrZWQ7YiYmKHRoaXMuY2hlY2tlZD1iLmZiIT09cCk7Zy5jYWxsKHRoaXMsYSk7dGhpcy5jaGVja2VkPWN9O2pRdWVyeShhKS5iaW5kKGMsZSl9ZWxzZSFmJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKGMsZSx0KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5hdHRhY2hFdmVudD9hLmF0dGFjaEV2ZW50KFwib25cIitjLGZ1bmN0aW9uKGIpe2UuY2FsbChhLGIpfSk6bShFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGFkZEV2ZW50TGlzdGVuZXIgb3IgYXR0YWNoRXZlbnRcIikpfSx2YTpmdW5jdGlvbihhLGMpeyghYXx8IWEubm9kZVR5cGUpJiZtKEVycm9yKFwiZWxlbWVudCBtdXN0IGJlIGEgRE9NIG5vZGUgd2hlbiBjYWxsaW5nIHRyaWdnZXJFdmVudFwiKSk7XG5pZihcInVuZGVmaW5lZFwiIT10eXBlb2YgalF1ZXJ5KXt2YXIgZT1bXTtiKGEsYykmJmUucHVzaCh7ZmI6YS5jaGVja2VkfSk7alF1ZXJ5KGEpLnRyaWdnZXIoYyxlKX1lbHNlXCJmdW5jdGlvblwiPT10eXBlb2YgZG9jdW1lbnQuY3JlYXRlRXZlbnQ/XCJmdW5jdGlvblwiPT10eXBlb2YgYS5kaXNwYXRjaEV2ZW50PyhlPWRvY3VtZW50LmNyZWF0ZUV2ZW50KGZbY118fFwiSFRNTEV2ZW50c1wiKSxlLmluaXRFdmVudChjLHAscCx3aW5kb3csMCwwLDAsMCwwLHQsdCx0LHQsMCxhKSxhLmRpc3BhdGNoRXZlbnQoZSkpOm0oRXJyb3IoXCJUaGUgc3VwcGxpZWQgZWxlbWVudCBkb2Vzbid0IHN1cHBvcnQgZGlzcGF0Y2hFdmVudFwiKSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZmlyZUV2ZW50PyhiKGEsYykmJihhLmNoZWNrZWQ9YS5jaGVja2VkIT09cCksYS5maXJlRXZlbnQoXCJvblwiK2MpKTptKEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdHJpZ2dlcmluZyBldmVudHNcIikpfSxkOmZ1bmN0aW9uKGIpe3JldHVybiBhLmxhKGIpP1xuYigpOmJ9LFVhOmZ1bmN0aW9uKGIsYyxlKXt2YXIgZj0oYi5jbGFzc05hbWV8fFwiXCIpLnNwbGl0KC9cXHMrLyksZz0wPD1hLmEuaihmLGMpO2lmKGUmJiFnKWIuY2xhc3NOYW1lKz0oZlswXT9cIiBcIjpcIlwiKStjO2Vsc2UgaWYoZyYmIWUpe2U9XCJcIjtmb3IoZz0wO2c8Zi5sZW5ndGg7ZysrKWZbZ10hPWMmJihlKz1mW2ddK1wiIFwiKTtiLmNsYXNzTmFtZT1hLmEudyhlKX19LFFhOmZ1bmN0aW9uKGIsYyl7dmFyIGU9YS5hLmQoYyk7aWYoZT09PXN8fGU9PT1uKWU9XCJcIjtcImlubmVyVGV4dFwiaW4gYj9iLmlubmVyVGV4dD1lOmIudGV4dENvbnRlbnQ9ZTs5PD1pJiYoYi5zdHlsZS5kaXNwbGF5PWIuc3R5bGUuZGlzcGxheSl9LGxiOmZ1bmN0aW9uKGEpe2lmKDk8PWkpe3ZhciBiPWEuc3R5bGUud2lkdGg7YS5zdHlsZS53aWR0aD0wO2Euc3R5bGUud2lkdGg9Yn19LEViOmZ1bmN0aW9uKGIsZSl7Zm9yKHZhciBiPWEuYS5kKGIpLGU9YS5hLmQoZSksYz1bXSxmPWI7Zjw9ZTtmKyspYy5wdXNoKGYpO3JldHVybiBjfSxcbkw6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGU9MCxjPWEubGVuZ3RoO2U8YztlKyspYi5wdXNoKGFbZV0pO3JldHVybiBifSx0Yjo2PT09aSx1Yjo3PT09aSxqYTppLERhOmZ1bmN0aW9uKGIsZSl7Zm9yKHZhciBjPWEuYS5MKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGEuYS5MKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKSkpLGY9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZT09PWV9OmZ1bmN0aW9uKGEpe3JldHVybiBlLnRlc3QoYS5uYW1lKX0sZz1bXSxkPWMubGVuZ3RoLTE7MDw9ZDtkLS0pZihjW2RdKSYmZy5wdXNoKGNbZF0pO3JldHVybiBnfSxCYjpmdW5jdGlvbihiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGI9YS5hLncoYikpP3dpbmRvdy5KU09OJiZ3aW5kb3cuSlNPTi5wYXJzZT93aW5kb3cuSlNPTi5wYXJzZShiKToobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiK2IpKSgpOnN9LHNhOmZ1bmN0aW9uKGIsXG5lLGMpeyhcInVuZGVmaW5lZFwiPT10eXBlb2YgSlNPTnx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIEpTT04uc3RyaW5naWZ5KSYmbShFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpKTtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoYS5hLmQoYiksZSxjKX0sQ2I6ZnVuY3Rpb24oYixlLGMpe3ZhciBjPWN8fHt9LGY9Yy5wYXJhbXN8fHt9LGc9Yy5pbmNsdWRlRmllbGRzfHx0aGlzLkNhLGQ9YjtpZihcIm9iamVjdFwiPT10eXBlb2YgYiYmXCJmb3JtXCI9PT1hLmEubyhiKSlmb3IodmFyIGQ9Yi5hY3Rpb24saD1nLmxlbmd0aC0xOzA8PWg7aC0tKWZvcih2YXIgaz1hLmEuRGEoYixnW2hdKSxcbmo9ay5sZW5ndGgtMTswPD1qO2otLSlmW2tbal0ubmFtZV09a1tqXS52YWx1ZTt2YXIgZT1hLmEuZChlKSxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO2kuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtpLmFjdGlvbj1kO2kubWV0aG9kPVwicG9zdFwiO2Zvcih2YXIgeiBpbiBlKWI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGIubmFtZT16LGIudmFsdWU9YS5hLnNhKGEuYS5kKGVbel0pKSxpLmFwcGVuZENoaWxkKGIpO2Zvcih6IGluIGYpYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYi5uYW1lPXosYi52YWx1ZT1mW3pdLGkuYXBwZW5kQ2hpbGQoYik7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpKTtjLnN1Ym1pdHRlcj9jLnN1Ym1pdHRlcihpKTppLnN1Ym1pdCgpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSl9LDApfX19O2EuYihcInV0aWxzXCIsYS5hKTthLmIoXCJ1dGlscy5hcnJheUZvckVhY2hcIixhLmEudik7XG5hLmIoXCJ1dGlscy5hcnJheUZpcnN0XCIsYS5hLmFiKTthLmIoXCJ1dGlscy5hcnJheUZpbHRlclwiLGEuYS5hYSk7YS5iKFwidXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlc1wiLGEuYS56YSk7YS5iKFwidXRpbHMuYXJyYXlJbmRleE9mXCIsYS5hLmopO2EuYihcInV0aWxzLmFycmF5TWFwXCIsYS5hLlQpO2EuYihcInV0aWxzLmFycmF5UHVzaEFsbFwiLGEuYS5OKTthLmIoXCJ1dGlscy5hcnJheVJlbW92ZUl0ZW1cIixhLmEuYmEpO2EuYihcInV0aWxzLmV4dGVuZFwiLGEuYS5leHRlbmQpO2EuYihcInV0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0XCIsYS5hLkNhKTthLmIoXCJ1dGlscy5nZXRGb3JtRmllbGRzXCIsYS5hLkRhKTthLmIoXCJ1dGlscy5wb3N0SnNvblwiLGEuYS5DYik7YS5iKFwidXRpbHMucGFyc2VKc29uXCIsYS5hLkJiKTthLmIoXCJ1dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlclwiLGEuYS5uKTthLmIoXCJ1dGlscy5zdHJpbmdpZnlKc29uXCIsYS5hLnNhKTthLmIoXCJ1dGlscy5yYW5nZVwiLGEuYS5FYik7XG5hLmIoXCJ1dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3NcIixhLmEuVWEpO2EuYihcInV0aWxzLnRyaWdnZXJFdmVudFwiLGEuYS52YSk7YS5iKFwidXRpbHMudW53cmFwT2JzZXJ2YWJsZVwiLGEuYS5kKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLGE9ZC5zaGlmdCgpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBjLmFwcGx5KGEsZC5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpfX0pO2EuYS5mPW5ldyBmdW5jdGlvbigpe3ZhciBiPTAsYz1cIl9fa29fX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGQ9e307cmV0dXJue2dldDpmdW5jdGlvbihiLGMpe3ZhciBlPWEuYS5mLmdldEFsbChiLHQpO3JldHVybiBlPT09bj9uOmVbY119LHNldDpmdW5jdGlvbihiLGMsZSl7ZT09PW4mJmEuYS5mLmdldEFsbChiLFxudCk9PT1ufHwoYS5hLmYuZ2V0QWxsKGIscClbY109ZSl9LGdldEFsbDpmdW5jdGlvbihhLGcpe3ZhciBlPWFbY107aWYoIShlJiZcIm51bGxcIiE9PWUpKXtpZighZylyZXR1cm47ZT1hW2NdPVwia29cIitiKys7ZFtlXT17fX1yZXR1cm4gZFtlXX0sY2xlYXI6ZnVuY3Rpb24oYSl7dmFyIGI9YVtjXTtiJiYoZGVsZXRlIGRbYl0sYVtjXT1zKX19fTthLmIoXCJ1dGlscy5kb21EYXRhXCIsYS5hLmYpO2EuYihcInV0aWxzLmRvbURhdGEuY2xlYXJcIixhLmEuZi5jbGVhcik7YS5hLkc9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMpe3ZhciBmPWEuYS5mLmdldChiLGQpO2Y9PT1uJiZjJiYoZj1bXSxhLmEuZi5zZXQoYixkLGYpKTtyZXR1cm4gZn1mdW5jdGlvbiBjKGUpe3ZhciBmPWIoZSx0KTtpZihmKWZvcih2YXIgZj1mLnNsaWNlKDApLGQ9MDtkPGYubGVuZ3RoO2QrKylmW2RdKGUpO2EuYS5mLmNsZWFyKGUpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGpRdWVyeSYmXCJmdW5jdGlvblwiPT10eXBlb2YgalF1ZXJ5LmNsZWFuRGF0YSYmXG5qUXVlcnkuY2xlYW5EYXRhKFtlXSk7aWYoZ1tlLm5vZGVUeXBlXSlmb3IoZj1lLmZpcnN0Q2hpbGQ7ZT1mOylmPWUubmV4dFNpYmxpbmcsOD09PWUubm9kZVR5cGUmJmMoZSl9dmFyIGQ9XCJfX2tvX2RvbU5vZGVEaXNwb3NhbF9fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZj17MTpwLDg6cCw5OnB9LGc9ezE6cCw5OnB9O3JldHVybnt3YTpmdW5jdGlvbihhLGMpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGMmJm0oRXJyb3IoXCJDYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2IoYSxwKS5wdXNoKGMpfSxNYTpmdW5jdGlvbihjLGYpe3ZhciBnPWIoYyx0KTtnJiYoYS5hLmJhKGcsZiksMD09Zy5sZW5ndGgmJmEuYS5mLnNldChjLGQsbikpfSxGOmZ1bmN0aW9uKGIpe2lmKGZbYi5ub2RlVHlwZV0mJihjKGIpLGdbYi5ub2RlVHlwZV0pKXt2YXIgZD1bXTthLmEuTihkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKTtmb3IodmFyIGI9MCxqPWQubGVuZ3RoO2I8ajtiKyspYyhkW2JdKX19LFxucmVtb3ZlTm9kZTpmdW5jdGlvbihiKXthLkYoYik7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYil9fX07YS5GPWEuYS5HLkY7YS5yZW1vdmVOb2RlPWEuYS5HLnJlbW92ZU5vZGU7YS5iKFwiY2xlYW5Ob2RlXCIsYS5GKTthLmIoXCJyZW1vdmVOb2RlXCIsYS5yZW1vdmVOb2RlKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWxcIixhLmEuRyk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFja1wiLGEuYS5HLndhKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwucmVtb3ZlRGlzcG9zZUNhbGxiYWNrXCIsYS5hLkcuTWEpOyhmdW5jdGlvbigpe2EuYS5wYT1mdW5jdGlvbihiKXt2YXIgYztpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgalF1ZXJ5KXtpZigoYz1qUXVlcnkuY2xlYW4oW2JdKSkmJmNbMF0pe2ZvcihiPWNbMF07Yi5wYXJlbnROb2RlJiYxMSE9PWIucGFyZW50Tm9kZS5ub2RlVHlwZTspYj1iLnBhcmVudE5vZGU7Yi5wYXJlbnROb2RlJiZcbmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX19ZWxzZXt2YXIgZD1hLmEudyhiKS50b0xvd2VyQ2FzZSgpO2M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkPWQubWF0Y2goL148KHRoZWFkfHRib2R5fHRmb290KS8pJiZbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdfHwhZC5pbmRleE9mKFwiPHRyXCIpJiZbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdfHwoIWQuaW5kZXhPZihcIjx0ZFwiKXx8IWQuaW5kZXhPZihcIjx0aFwiKSkmJlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl18fFswLFwiXCIsXCJcIl07Yj1cImlnbm9yZWQ8ZGl2PlwiK2RbMV0rYitkWzJdK1wiPC9kaXY+XCI7Zm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIHdpbmRvdy5pbm5lclNoaXY/Yy5hcHBlbmRDaGlsZCh3aW5kb3cuaW5uZXJTaGl2KGIpKTpjLmlubmVySFRNTD1iO2RbMF0tLTspYz1jLmxhc3RDaGlsZDtjPWEuYS5MKGMubGFzdENoaWxkLmNoaWxkTm9kZXMpfXJldHVybiBjfTtcbmEuYS5ZPWZ1bmN0aW9uKGIsYyl7YS5hLmdhKGIpO2lmKGMhPT1zJiZjIT09bilpZihcInN0cmluZ1wiIT10eXBlb2YgYyYmKGM9Yy50b1N0cmluZygpKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgalF1ZXJ5KWpRdWVyeShiKS5odG1sKGMpO2Vsc2UgZm9yKHZhciBkPWEuYS5wYShjKSxmPTA7ZjxkLmxlbmd0aDtmKyspYi5hcHBlbmRDaGlsZChkW2ZdKX19KSgpO2EuYihcInV0aWxzLnBhcnNlSHRtbEZyYWdtZW50XCIsYS5hLnBhKTthLmIoXCJ1dGlscy5zZXRIdG1sXCIsYS5hLlkpO2Eucz1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtyZXR1cm4oNDI5NDk2NzI5NiooMStNYXRoLnJhbmRvbSgpKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpfWZ1bmN0aW9uIGMoYixnKXtpZihiKWlmKDg9PWIubm9kZVR5cGUpe3ZhciBlPWEucy5KYShiLm5vZGVWYWx1ZSk7ZSE9cyYmZy5wdXNoKHtqYjpiLHliOmV9KX1lbHNlIGlmKDE9PWIubm9kZVR5cGUpZm9yKHZhciBlPTAsZD1iLmNoaWxkTm9kZXMsaj1kLmxlbmd0aDtlPFxuajtlKyspYyhkW2VdLGcpfXZhciBkPXt9O3JldHVybntuYTpmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBhJiZtKEVycm9yKFwiWW91IGNhbiBvbmx5IHBhc3MgYSBmdW5jdGlvbiB0byBrby5tZW1vaXphdGlvbi5tZW1vaXplKClcIikpO3ZhciBjPWIoKStiKCk7ZFtjXT1hO3JldHVyblwiPFxcIS0tW2tvX21lbW86XCIrYytcIl0tLVxcPlwifSxWYTpmdW5jdGlvbihhLGIpe3ZhciBjPWRbYV07Yz09PW4mJm0oRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFueSBtZW1vIHdpdGggSUQgXCIrYStcIi4gUGVyaGFwcyBpdCdzIGFscmVhZHkgYmVlbiB1bm1lbW9pemVkLlwiKSk7dHJ5e3JldHVybiBjLmFwcGx5KHMsYnx8W10pLHB9ZmluYWxseXtkZWxldGUgZFthXX19LFdhOmZ1bmN0aW9uKGIsZCl7dmFyIGU9W107YyhiLGUpO2Zvcih2YXIgaD0wLGo9ZS5sZW5ndGg7aDxqO2grKyl7dmFyIGs9ZVtoXS5qYixpPVtrXTtkJiZhLmEuTihpLGQpO2Eucy5WYShlW2hdLnliLGkpO2subm9kZVZhbHVlPVwiXCI7ay5wYXJlbnROb2RlJiZcbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChrKX19LEphOmZ1bmN0aW9uKGEpe3JldHVybihhPWEubWF0Y2goL15cXFtrb19tZW1vXFw6KC4qPylcXF0kLykpP2FbMV06c319fSgpO2EuYihcIm1lbW9pemF0aW9uXCIsYS5zKTthLmIoXCJtZW1vaXphdGlvbi5tZW1vaXplXCIsYS5zLm5hKTthLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVcIixhLnMuVmEpO2EuYihcIm1lbW9pemF0aW9uLnBhcnNlTWVtb1RleHRcIixhLnMuSmEpO2EuYihcIm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50c1wiLGEucy5XYSk7YS5CYT17dGhyb3R0bGU6ZnVuY3Rpb24oYixjKXtiLnRocm90dGxlRXZhbHVhdGlvbj1jO3ZhciBkPXM7cmV0dXJuIGEuaCh7cmVhZDpiLHdyaXRlOmZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChkKTtkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKGEpfSxjKX19KX0sbm90aWZ5OmZ1bmN0aW9uKGIsYyl7Yi5lcXVhbGl0eUNvbXBhcmVyPVwiYWx3YXlzXCI9PWM/QSh0KTphLm0uZm4uZXF1YWxpdHlDb21wYXJlcjtcbnJldHVybiBifX07YS5iKFwiZXh0ZW5kZXJzXCIsYS5CYSk7YS5TYT1mdW5jdGlvbihiLGMsZCl7dGhpcy50YXJnZXQ9Yjt0aGlzLmNhPWM7dGhpcy5pYj1kO2EuQih0aGlzLFwiZGlzcG9zZVwiLHRoaXMuQSl9O2EuU2EucHJvdG90eXBlLkE9ZnVuY3Rpb24oKXt0aGlzLnNiPXA7dGhpcy5pYigpfTthLlI9ZnVuY3Rpb24oKXt0aGlzLnU9e307YS5hLmV4dGVuZCh0aGlzLGEuUi5mbik7YS5CKHRoaXMsXCJzdWJzY3JpYmVcIix0aGlzLnRhKTthLkIodGhpcyxcImV4dGVuZFwiLHRoaXMuZXh0ZW5kKTthLkIodGhpcyxcImdldFN1YnNjcmlwdGlvbnNDb3VudFwiLHRoaXMub2IpfTthLlIuZm49e3RhOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZD1kfHxcImNoYW5nZVwiLGI9Yz9iLmJpbmQoYyk6YixmPW5ldyBhLlNhKHRoaXMsYixmdW5jdGlvbigpe2EuYS5iYSh0aGlzLnVbZF0sZil9LmJpbmQodGhpcykpO3RoaXMudVtkXXx8KHRoaXMudVtkXT1bXSk7dGhpcy51W2RdLnB1c2goZik7cmV0dXJuIGZ9LG5vdGlmeVN1YnNjcmliZXJzOmZ1bmN0aW9uKGIsXG5jKXtjPWN8fFwiY2hhbmdlXCI7dGhpcy51W2NdJiZhLmEudih0aGlzLnVbY10uc2xpY2UoMCksZnVuY3Rpb24oYSl7YSYmYS5zYiE9PXAmJmEuY2EoYil9KX0sb2I6ZnVuY3Rpb24oKXt2YXIgYT0wLGM7Zm9yKGMgaW4gdGhpcy51KXRoaXMudS5oYXNPd25Qcm9wZXJ0eShjKSYmKGErPXRoaXMudVtjXS5sZW5ndGgpO3JldHVybiBhfSxleHRlbmQ6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztpZihiKWZvcih2YXIgZCBpbiBiKXt2YXIgZj1hLkJhW2RdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGYmJihjPWYoYyxiW2RdKSl9cmV0dXJuIGN9fTthLkdhPWZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGEudGEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEubm90aWZ5U3Vic2NyaWJlcnN9O2EuYihcInN1YnNjcmliYWJsZVwiLGEuUik7YS5iKFwiaXNTdWJzY3JpYmFibGVcIixhLkdhKTthLlU9ZnVuY3Rpb24oKXt2YXIgYj1bXTtyZXR1cm57YmI6ZnVuY3Rpb24oYSl7Yi5wdXNoKHtjYTphLEFhOltdfSl9LFxuZW5kOmZ1bmN0aW9uKCl7Yi5wb3AoKX0sTGE6ZnVuY3Rpb24oYyl7YS5HYShjKXx8bShFcnJvcihcIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llc1wiKSk7aWYoMDxiLmxlbmd0aCl7dmFyIGQ9YltiLmxlbmd0aC0xXTswPD1hLmEuaihkLkFhLGMpfHwoZC5BYS5wdXNoKGMpLGQuY2EoYykpfX19fSgpO3ZhciBHPXt1bmRlZmluZWQ6cCxcImJvb2xlYW5cIjpwLG51bWJlcjpwLHN0cmluZzpwfTthLm09ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYygpe2lmKDA8YXJndW1lbnRzLmxlbmd0aCl7aWYoIWMuZXF1YWxpdHlDb21wYXJlcnx8IWMuZXF1YWxpdHlDb21wYXJlcihkLGFyZ3VtZW50c1swXSkpYy5JKCksZD1hcmd1bWVudHNbMF0sYy5IKCk7cmV0dXJuIHRoaXN9YS5VLkxhKGMpO3JldHVybiBkfXZhciBkPWI7YS5SLmNhbGwoYyk7Yy5IPWZ1bmN0aW9uKCl7Yy5ub3RpZnlTdWJzY3JpYmVycyhkKX07Yy5JPWZ1bmN0aW9uKCl7Yy5ub3RpZnlTdWJzY3JpYmVycyhkLFxuXCJiZWZvcmVDaGFuZ2VcIil9O2EuYS5leHRlbmQoYyxhLm0uZm4pO2EuQihjLFwidmFsdWVIYXNNdXRhdGVkXCIsYy5IKTthLkIoYyxcInZhbHVlV2lsbE11dGF0ZVwiLGMuSSk7cmV0dXJuIGN9O2EubS5mbj17ZXF1YWxpdHlDb21wYXJlcjpmdW5jdGlvbihhLGMpe3JldHVybiBhPT09c3x8dHlwZW9mIGEgaW4gRz9hPT09Yzp0fX07dmFyIHg9YS5tLkRiPVwiX19rb19wcm90b19fXCI7YS5tLmZuW3hdPWEubTthLmlhPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9PT1zfHxiPT09bnx8Ylt4XT09PW4/dDpiW3hdPT09Yz9wOmEuaWEoYlt4XSxjKX07YS5sYT1mdW5jdGlvbihiKXtyZXR1cm4gYS5pYShiLGEubSl9O2EuSGE9ZnVuY3Rpb24oYil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYiYmYlt4XT09PWEubXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmYlt4XT09PWEuaCYmYi5wYj9wOnR9O2EuYihcIm9ic2VydmFibGVcIixhLm0pO2EuYihcImlzT2JzZXJ2YWJsZVwiLGEubGEpO2EuYihcImlzV3JpdGVhYmxlT2JzZXJ2YWJsZVwiLFxuYS5IYSk7YS5RPWZ1bmN0aW9uKGIpezA9PWFyZ3VtZW50cy5sZW5ndGgmJihiPVtdKTtiIT09cyYmKGIhPT1uJiYhKFwibGVuZ3RoXCJpbiBiKSkmJm0oRXJyb3IoXCJUaGUgYXJndW1lbnQgcGFzc2VkIHdoZW4gaW5pdGlhbGl6aW5nIGFuIG9ic2VydmFibGUgYXJyYXkgbXVzdCBiZSBhbiBhcnJheSwgb3IgbnVsbCwgb3IgdW5kZWZpbmVkLlwiKSk7dmFyIGM9YS5tKGIpO2EuYS5leHRlbmQoYyxhLlEuZm4pO3JldHVybiBjfTthLlEuZm49e3JlbW92ZTpmdW5jdGlvbihhKXtmb3IodmFyIGM9dGhpcygpLGQ9W10sZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6ZnVuY3Rpb24oYyl7cmV0dXJuIGM9PT1hfSxnPTA7ZzxjLmxlbmd0aDtnKyspe3ZhciBlPWNbZ107ZihlKSYmKDA9PT1kLmxlbmd0aCYmdGhpcy5JKCksZC5wdXNoKGUpLGMuc3BsaWNlKGcsMSksZy0tKX1kLmxlbmd0aCYmdGhpcy5IKCk7cmV0dXJuIGR9LHJlbW92ZUFsbDpmdW5jdGlvbihiKXtpZihiPT09bil7dmFyIGM9dGhpcygpLFxuZD1jLnNsaWNlKDApO3RoaXMuSSgpO2Muc3BsaWNlKDAsYy5sZW5ndGgpO3RoaXMuSCgpO3JldHVybiBkfXJldHVybiFiP1tdOnRoaXMucmVtb3ZlKGZ1bmN0aW9uKGMpe3JldHVybiAwPD1hLmEuaihiLGMpfSl9LGRlc3Ryb3k6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcygpLGQ9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9hOmZ1bmN0aW9uKGMpe3JldHVybiBjPT09YX07dGhpcy5JKCk7Zm9yKHZhciBmPWMubGVuZ3RoLTE7MDw9ZjtmLS0pZChjW2ZdKSYmKGNbZl0uX2Rlc3Ryb3k9cCk7dGhpcy5IKCl9LGRlc3Ryb3lBbGw6ZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1uP3RoaXMuZGVzdHJveShBKHApKTohYj9bXTp0aGlzLmRlc3Ryb3koZnVuY3Rpb24oYyl7cmV0dXJuIDA8PWEuYS5qKGIsYyl9KX0saW5kZXhPZjpmdW5jdGlvbihiKXt2YXIgYz10aGlzKCk7cmV0dXJuIGEuYS5qKGMsYil9LHJlcGxhY2U6ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLmluZGV4T2YoYSk7MDw9ZCYmKHRoaXMuSSgpLFxudGhpcygpW2RdPWMsdGhpcy5IKCkpfX07YS5hLnYoXCJwb3AgcHVzaCByZXZlcnNlIHNoaWZ0IHNvcnQgc3BsaWNlIHVuc2hpZnRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7YS5RLmZuW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcygpO3RoaXMuSSgpO2E9YVtiXS5hcHBseShhLGFyZ3VtZW50cyk7dGhpcy5IKCk7cmV0dXJuIGF9fSk7YS5hLnYoW1wic2xpY2VcIl0sZnVuY3Rpb24oYil7YS5RLmZuW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcygpO3JldHVybiBhW2JdLmFwcGx5KGEsYXJndW1lbnRzKX19KTthLmIoXCJvYnNlcnZhYmxlQXJyYXlcIixhLlEpO2EuaD1mdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZigpe2EuYS52KHYsZnVuY3Rpb24oYSl7YS5BKCl9KTt2PVtdfWZ1bmN0aW9uIGcoKXt2YXIgYT1oLnRocm90dGxlRXZhbHVhdGlvbjthJiYwPD1hPyhjbGVhclRpbWVvdXQoeCkseD1zZXRUaW1lb3V0KGUsYSkpOmUoKX1mdW5jdGlvbiBlKCl7aWYoIWwpaWYoaSYmdygpKXUoKTtlbHNle2w9XG5wO3RyeXt2YXIgYj1hLmEuVCh2LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRhcmdldH0pO2EuVS5iYihmdW5jdGlvbihjKXt2YXIgZTswPD0oZT1hLmEuaihiLGMpKT9iW2VdPW46di5wdXNoKGMudGEoZykpfSk7Zm9yKHZhciBlPXEuY2FsbChjKSxmPWIubGVuZ3RoLTE7MDw9ZjtmLS0pYltmXSYmdi5zcGxpY2UoZiwxKVswXS5BKCk7aT1wO2gubm90aWZ5U3Vic2NyaWJlcnMoayxcImJlZm9yZUNoYW5nZVwiKTtrPWV9ZmluYWxseXthLlUuZW5kKCl9aC5ub3RpZnlTdWJzY3JpYmVycyhrKTtsPXR9fWZ1bmN0aW9uIGgoKXtpZigwPGFyZ3VtZW50cy5sZW5ndGgpai5hcHBseShoLGFyZ3VtZW50cyk7ZWxzZSByZXR1cm4gaXx8ZSgpLGEuVS5MYShoKSxrfWZ1bmN0aW9uIGooKXtcImZ1bmN0aW9uXCI9PT10eXBlb2Ygbz9vLmFwcGx5KGMsYXJndW1lbnRzKTptKEVycm9yKFwiQ2Fubm90IHdyaXRlIGEgdmFsdWUgdG8gYSBrby5jb21wdXRlZCB1bmxlc3MgeW91IHNwZWNpZnkgYSAnd3JpdGUnIG9wdGlvbi4gSWYgeW91IHdpc2ggdG8gcmVhZCB0aGUgY3VycmVudCB2YWx1ZSwgZG9uJ3QgcGFzcyBhbnkgcGFyYW1ldGVycy5cIikpfVxudmFyIGssaT10LGw9dCxxPWI7cSYmXCJvYmplY3RcIj09dHlwZW9mIHE/KGQ9cSxxPWQucmVhZCk6KGQ9ZHx8e30scXx8KHE9ZC5yZWFkKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgcSYmbShFcnJvcihcIlBhc3MgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBrby5jb21wdXRlZFwiKSk7dmFyIG89ZC53cml0ZTtjfHwoYz1kLm93bmVyKTt2YXIgdj1bXSx1PWYscj1cIm9iamVjdFwiPT10eXBlb2YgZC5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ/ZC5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6cyx3PWQuZGlzcG9zZVdoZW58fEEodCk7aWYocil7dT1mdW5jdGlvbigpe2EuYS5HLk1hKHIsYXJndW1lbnRzLmNhbGxlZSk7ZigpfTthLmEuRy53YShyLHUpO3ZhciB5PXcsdz1mdW5jdGlvbigpe3JldHVybiFhLmEuZmEocil8fHkoKX19dmFyIHg9cztoLm5iPWZ1bmN0aW9uKCl7cmV0dXJuIHYubGVuZ3RofTtoLnBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLndyaXRlO2guQT1mdW5jdGlvbigpe3UoKX07XG5hLlIuY2FsbChoKTthLmEuZXh0ZW5kKGgsYS5oLmZuKTtkLmRlZmVyRXZhbHVhdGlvbiE9PXAmJmUoKTthLkIoaCxcImRpc3Bvc2VcIixoLkEpO2EuQihoLFwiZ2V0RGVwZW5kZW5jaWVzQ291bnRcIixoLm5iKTtyZXR1cm4gaH07YS5yYj1mdW5jdGlvbihiKXtyZXR1cm4gYS5pYShiLGEuaCl9O3c9YS5tLkRiO2EuaFt3XT1hLm07YS5oLmZuPXt9O2EuaC5mblt3XT1hLmg7YS5iKFwiZGVwZW5kZW50T2JzZXJ2YWJsZVwiLGEuaCk7YS5iKFwiY29tcHV0ZWRcIixhLmgpO2EuYihcImlzQ29tcHV0ZWRcIixhLnJiKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsZyxlKXtlPWV8fG5ldyBkO2E9ZyhhKTtpZighKFwib2JqZWN0XCI9PXR5cGVvZiBhJiZhIT09cyYmYSE9PW4mJiEoYSBpbnN0YW5jZW9mIERhdGUpKSlyZXR1cm4gYTt2YXIgaD1hIGluc3RhbmNlb2YgQXJyYXk/W106e307ZS5zYXZlKGEsaCk7YyhhLGZ1bmN0aW9uKGMpe3ZhciBkPWcoYVtjXSk7c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcImZ1bmN0aW9uXCI6aFtjXT1cbmQ7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJ1bmRlZmluZWRcIjp2YXIgaT1lLmdldChkKTtoW2NdPWkhPT1uP2k6YihkLGcsZSl9fSk7cmV0dXJuIGh9ZnVuY3Rpb24gYyhhLGIpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSl7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYihjKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRvSlNPTiYmYihcInRvSlNPTlwiKX1lbHNlIGZvcihjIGluIGEpYihjKX1mdW5jdGlvbiBkKCl7dmFyIGI9W10sYz1bXTt0aGlzLnNhdmU9ZnVuY3Rpb24oZSxkKXt2YXIgaj1hLmEuaihiLGUpOzA8PWo/Y1tqXT1kOihiLnB1c2goZSksYy5wdXNoKGQpKX07dGhpcy5nZXQ9ZnVuY3Rpb24oZSl7ZT1hLmEuaihiLGUpO3JldHVybiAwPD1lP2NbZV06bn19YS5UYT1mdW5jdGlvbihjKXswPT1hcmd1bWVudHMubGVuZ3RoJiZtKEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLnRvSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKSk7cmV0dXJuIGIoYyxmdW5jdGlvbihiKXtmb3IodmFyIGM9XG4wO2EubGEoYikmJjEwPmM7YysrKWI9YigpO3JldHVybiBifSl9O2EudG9KU09OPWZ1bmN0aW9uKGIsYyxlKXtiPWEuVGEoYik7cmV0dXJuIGEuYS5zYShiLGMsZSl9fSkoKTthLmIoXCJ0b0pTXCIsYS5UYSk7YS5iKFwidG9KU09OXCIsYS50b0pTT04pOyhmdW5jdGlvbigpe2Euaz17cjpmdW5jdGlvbihiKXtzd2l0Y2goYS5hLm8oYikpe2Nhc2UgXCJvcHRpb25cIjpyZXR1cm4gYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz09PXA/YS5hLmYuZ2V0KGIsYS5jLm9wdGlvbnMub2EpOmIuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7Y2FzZSBcInNlbGVjdFwiOnJldHVybiAwPD1iLnNlbGVjdGVkSW5kZXg/YS5rLnIoYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pOm47ZGVmYXVsdDpyZXR1cm4gYi52YWx1ZX19LFM6ZnVuY3Rpb24oYixjKXtzd2l0Y2goYS5hLm8oYikpe2Nhc2UgXCJvcHRpb25cIjpzd2l0Y2godHlwZW9mIGMpe2Nhc2UgXCJzdHJpbmdcIjphLmEuZi5zZXQoYixhLmMub3B0aW9ucy5vYSxcbm4pO1wiX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX19cImluIGImJmRlbGV0ZSBiLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fO2IudmFsdWU9YzticmVhaztkZWZhdWx0OmEuYS5mLnNldChiLGEuYy5vcHRpb25zLm9hLGMpLGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX189cCxiLnZhbHVlPVwibnVtYmVyXCI9PT10eXBlb2YgYz9jOlwiXCJ9YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmZvcih2YXIgZD1iLm9wdGlvbnMubGVuZ3RoLTE7MDw9ZDtkLS0paWYoYS5rLnIoYi5vcHRpb25zW2RdKT09Yyl7Yi5zZWxlY3RlZEluZGV4PWQ7YnJlYWt9YnJlYWs7ZGVmYXVsdDppZihjPT09c3x8Yz09PW4pYz1cIlwiO2IudmFsdWU9Y319fX0pKCk7YS5iKFwic2VsZWN0RXh0ZW5zaW9uc1wiLGEuayk7YS5iKFwic2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWVcIixhLmsucik7YS5iKFwic2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlXCIsYS5rLlMpO2EuZz1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxiKXtmb3IodmFyIGQ9XG5zO2EhPWQ7KWQ9YSxhPWEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGJbY119KTtyZXR1cm4gYX12YXIgYz0vXFxAa29fdG9rZW5fKFxcZCspXFxAL2csZD0vXltcXF8kYS16XVtcXF8kYS16MC05XSooXFxbLio/XFxdKSooXFwuW1xcXyRhLXpdW1xcXyRhLXowLTldKihcXFsuKj9cXF0pKikqJC9pLGY9W1widHJ1ZVwiLFwiZmFsc2VcIl07cmV0dXJue0Q6W10sVzpmdW5jdGlvbihjKXt2YXIgZT1hLmEudyhjKTtpZigzPmUubGVuZ3RoKXJldHVybltdO1wie1wiPT09ZS5jaGFyQXQoMCkmJihlPWUuc3Vic3RyaW5nKDEsZS5sZW5ndGgtMSkpO2Zvcih2YXIgYz1bXSxkPXMsZixrPTA7azxlLmxlbmd0aDtrKyspe3ZhciBpPWUuY2hhckF0KGspO2lmKGQ9PT1zKXN3aXRjaChpKXtjYXNlICdcIic6Y2FzZSBcIidcIjpjYXNlIFwiL1wiOmQ9ayxmPWl9ZWxzZSBpZihpPT1mJiZcIlxcXFxcIiE9PWUuY2hhckF0KGstMSkpe2k9ZS5zdWJzdHJpbmcoZCxrKzEpO2MucHVzaChpKTt2YXIgbD1cIkBrb190b2tlbl9cIisoYy5sZW5ndGgtXG4xKStcIkBcIixlPWUuc3Vic3RyaW5nKDAsZCkrbCtlLnN1YnN0cmluZyhrKzEpLGs9ay0oaS5sZW5ndGgtbC5sZW5ndGgpLGQ9c319Zj1kPXM7Zm9yKHZhciBxPTAsbz1zLGs9MDtrPGUubGVuZ3RoO2srKyl7aT1lLmNoYXJBdChrKTtpZihkPT09cylzd2l0Y2goaSl7Y2FzZSBcIntcIjpkPWs7bz1pO2Y9XCJ9XCI7YnJlYWs7Y2FzZSBcIihcIjpkPWs7bz1pO2Y9XCIpXCI7YnJlYWs7Y2FzZSBcIltcIjpkPWssbz1pLGY9XCJdXCJ9aT09PW8/cSsrOmk9PT1mJiYocS0tLDA9PT1xJiYoaT1lLnN1YnN0cmluZyhkLGsrMSksYy5wdXNoKGkpLGw9XCJAa29fdG9rZW5fXCIrKGMubGVuZ3RoLTEpK1wiQFwiLGU9ZS5zdWJzdHJpbmcoMCxkKStsK2Uuc3Vic3RyaW5nKGsrMSksay09aS5sZW5ndGgtbC5sZW5ndGgsZD1zKSl9Zj1bXTtlPWUuc3BsaXQoXCIsXCIpO2Q9MDtmb3Ioaz1lLmxlbmd0aDtkPGs7ZCsrKXE9ZVtkXSxvPXEuaW5kZXhPZihcIjpcIiksMDxvJiZvPHEubGVuZ3RoLTE/KGk9cS5zdWJzdHJpbmcobysxKSxmLnB1c2goe2tleTpiKHEuc3Vic3RyaW5nKDAsXG5vKSxjKSx2YWx1ZTpiKGksYyl9KSk6Zi5wdXNoKHt1bmtub3duOmIocSxjKX0pO3JldHVybiBmfSxrYTpmdW5jdGlvbihiKXtmb3IodmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiP2EuZy5XKGIpOmIsaD1bXSxiPVtdLGosaz0wO2o9Y1trXTtrKyspaWYoMDxoLmxlbmd0aCYmaC5wdXNoKFwiLFwiKSxqLmtleSl7dmFyIGk7YTp7aT1qLmtleTt2YXIgbD1hLmEudyhpKTtzd2l0Y2gobC5sZW5ndGgmJmwuY2hhckF0KDApKXtjYXNlIFwiJ1wiOmNhc2UgJ1wiJzpicmVhayBhO2RlZmF1bHQ6aT1cIidcIitsK1wiJ1wifX1qPWoudmFsdWU7aC5wdXNoKGkpO2gucHVzaChcIjpcIik7aC5wdXNoKGopO2w9YS5hLncoaik7aWYoMDw9YS5hLmooZixhLmEudyhsKS50b0xvd2VyQ2FzZSgpKT8wOmwubWF0Y2goZCkhPT1zKTA8Yi5sZW5ndGgmJmIucHVzaChcIiwgXCIpLGIucHVzaChpK1wiIDogZnVuY3Rpb24oX19rb192YWx1ZSkgeyBcIitqK1wiID0gX19rb192YWx1ZTsgfVwiKX1lbHNlIGoudW5rbm93biYmaC5wdXNoKGoudW5rbm93bik7XG5jPWguam9pbihcIlwiKTswPGIubGVuZ3RoJiYoYz1jK1wiLCAnX2tvX3Byb3BlcnR5X3dyaXRlcnMnIDogeyBcIitiLmpvaW4oXCJcIikrXCIgfSBcIik7cmV0dXJuIGN9LHdiOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspaWYoYS5hLncoYltkXS5rZXkpPT1jKXJldHVybiBwO3JldHVybiB0fSwkOmZ1bmN0aW9uKGIsYyxkLGYsayl7aWYoIWJ8fCFhLkhhKGIpKXtpZigoYj1jKCkuX2tvX3Byb3BlcnR5X3dyaXRlcnMpJiZiW2RdKWJbZF0oZil9ZWxzZSgha3x8YigpIT09ZikmJmIoZil9fX0oKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZ1wiLGEuZyk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzXCIsYS5nLkQpO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nLnBhcnNlT2JqZWN0TGl0ZXJhbFwiLGEuZy5XKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZy5pbnNlcnRQcm9wZXJ0eUFjY2Vzc29yc0ludG9Kc29uXCIsXG5hLmcua2EpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIDg9PWEubm9kZVR5cGUmJihnP2EudGV4dDphLm5vZGVWYWx1ZSkubWF0Y2goZSl9ZnVuY3Rpb24gYyhhKXtyZXR1cm4gOD09YS5ub2RlVHlwZSYmKGc/YS50ZXh0OmEubm9kZVZhbHVlKS5tYXRjaChoKX1mdW5jdGlvbiBkKGEsZSl7Zm9yKHZhciBkPWEsZj0xLGc9W107ZD1kLm5leHRTaWJsaW5nOyl7aWYoYyhkKSYmKGYtLSwwPT09ZikpcmV0dXJuIGc7Zy5wdXNoKGQpO2IoZCkmJmYrK31lfHxtKEVycm9yKFwiQ2Fubm90IGZpbmQgY2xvc2luZyBjb21tZW50IHRhZyB0byBtYXRjaDogXCIrYS5ub2RlVmFsdWUpKTtyZXR1cm4gc31mdW5jdGlvbiBmKGEsYil7dmFyIGM9ZChhLGIpO3JldHVybiBjPzA8Yy5sZW5ndGg/Y1tjLmxlbmd0aC0xXS5uZXh0U2libGluZzphLm5leHRTaWJsaW5nOnN9dmFyIGc9XCI8XFwhLS10ZXN0LS1cXD5cIj09PWRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJ0ZXN0XCIpLnRleHQsZT1nPy9ePFxcIS0tXFxzKmtvXFxzKyguKlxcOi4qKVxccyotLVxcPiQvOlxuL15cXHMqa29cXHMrKC4qXFw6LiopXFxzKiQvLGg9Zz8vXjxcXCEtLVxccypcXC9rb1xccyotLVxcPiQvOi9eXFxzKlxcL2tvXFxzKiQvLGo9e3VsOnAsb2w6cH07YS5lPXtDOnt9LGNoaWxkTm9kZXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSk/ZChhKTphLmNoaWxkTm9kZXN9LGhhOmZ1bmN0aW9uKGMpe2lmKGIoYykpZm9yKHZhciBjPWEuZS5jaGlsZE5vZGVzKGMpLGU9MCxkPWMubGVuZ3RoO2U8ZDtlKyspYS5yZW1vdmVOb2RlKGNbZV0pO2Vsc2UgYS5hLmdhKGMpfSxYOmZ1bmN0aW9uKGMsZSl7aWYoYihjKSl7YS5lLmhhKGMpO2Zvcih2YXIgZD1jLm5leHRTaWJsaW5nLGY9MCxnPWUubGVuZ3RoO2Y8ZztmKyspZC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlW2ZdLGQpfWVsc2UgYS5hLlgoYyxlKX0sS2E6ZnVuY3Rpb24oYSxjKXtiKGEpP2EucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYyxhLm5leHRTaWJsaW5nKTphLmZpcnN0Q2hpbGQ/YS5pbnNlcnRCZWZvcmUoYyxhLmZpcnN0Q2hpbGQpOmEuYXBwZW5kQ2hpbGQoYyl9LFxuRmE6ZnVuY3Rpb24oYSxjLGUpe2IoYSk/YS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjLGUubmV4dFNpYmxpbmcpOmUubmV4dFNpYmxpbmc/YS5pbnNlcnRCZWZvcmUoYyxlLm5leHRTaWJsaW5nKTphLmFwcGVuZENoaWxkKGMpfSxmaXJzdENoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiFiKGEpP2EuZmlyc3RDaGlsZDohYS5uZXh0U2libGluZ3x8YyhhLm5leHRTaWJsaW5nKT9zOmEubmV4dFNpYmxpbmd9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGEpe2IoYSkmJihhPWYoYSkpO3JldHVybiBhLm5leHRTaWJsaW5nJiZjKGEubmV4dFNpYmxpbmcpP3M6YS5uZXh0U2libGluZ30sWGE6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YihhKSk/YVsxXTpzfSxJYTpmdW5jdGlvbihlKXtpZihqW2EuYS5vKGUpXSl7dmFyIGQ9ZS5maXJzdENoaWxkO2lmKGQpe2RvIGlmKDE9PT1kLm5vZGVUeXBlKXt2YXIgZztnPWQuZmlyc3RDaGlsZDt2YXIgaD1zO2lmKGcpe2RvIGlmKGgpaC5wdXNoKGcpO2Vsc2UgaWYoYihnKSl7dmFyIG89XG5mKGcscCk7bz9nPW86aD1bZ119ZWxzZSBjKGcpJiYoaD1bZ10pO3doaWxlKGc9Zy5uZXh0U2libGluZyl9aWYoZz1oKXtoPWQubmV4dFNpYmxpbmc7Zm9yKG89MDtvPGcubGVuZ3RoO28rKyloP2UuaW5zZXJ0QmVmb3JlKGdbb10saCk6ZS5hcHBlbmRDaGlsZChnW29dKX19d2hpbGUoZD1kLm5leHRTaWJsaW5nKX19fX19KSgpO2EuYihcInZpcnR1YWxFbGVtZW50c1wiLGEuZSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1wiLGEuZS5DKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlXCIsYS5lLmhhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuaW5zZXJ0QWZ0ZXJcIixhLmUuRmEpO2EuYihcInZpcnR1YWxFbGVtZW50cy5wcmVwZW5kXCIsYS5lLkthKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuXCIsYS5lLlgpOyhmdW5jdGlvbigpe2EuSj1mdW5jdGlvbigpe3RoaXMuY2I9e319O2EuYS5leHRlbmQoYS5KLnByb3RvdHlwZSx7bm9kZUhhc0JpbmRpbmdzOmZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6cmV0dXJuIGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpIT1cbnM7Y2FzZSA4OnJldHVybiBhLmUuWGEoYikhPXM7ZGVmYXVsdDpyZXR1cm4gdH19LGdldEJpbmRpbmdzOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcy5nZXRCaW5kaW5nc1N0cmluZyhhLGMpO3JldHVybiBkP3RoaXMucGFyc2VCaW5kaW5nc1N0cmluZyhkLGMpOnN9LGdldEJpbmRpbmdzU3RyaW5nOmZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6cmV0dXJuIGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpO2Nhc2UgODpyZXR1cm4gYS5lLlhhKGIpO2RlZmF1bHQ6cmV0dXJuIHN9fSxwYXJzZUJpbmRpbmdzU3RyaW5nOmZ1bmN0aW9uKGIsYyl7dHJ5e3ZhciBkPWMuJGRhdGEsZD1cIm9iamVjdFwiPT10eXBlb2YgZCYmZCE9cz9bZCxjXTpbY10sZj1kLmxlbmd0aCxnPXRoaXMuY2IsZT1mK1wiX1wiK2IsaDtpZighKGg9Z1tlXSkpe3ZhciBqPVwiIHsgXCIrYS5nLmthKGIpK1wiIH0gXCI7aD1nW2VdPWEuYS5lYihqLGYpfXJldHVybiBoKGQpfWNhdGNoKGspe20oRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgYmluZGluZ3MuXFxuTWVzc2FnZTogXCIrXG5rK1wiO1xcbkJpbmRpbmdzIHZhbHVlOiBcIitiKSl9fX0pO2EuSi5pbnN0YW5jZT1uZXcgYS5KfSkoKTthLmIoXCJiaW5kaW5nUHJvdmlkZXJcIixhLkopOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkLGUpe2Zvcih2YXIgaD1hLmUuZmlyc3RDaGlsZChkKTtkPWg7KWg9YS5lLm5leHRTaWJsaW5nKGQpLGMoYixkLGUpfWZ1bmN0aW9uIGMoYyxnLGUpe3ZhciBoPXAsaj0xPT09Zy5ub2RlVHlwZTtqJiZhLmUuSWEoZyk7aWYoaiYmZXx8YS5KLmluc3RhbmNlLm5vZGVIYXNCaW5kaW5ncyhnKSloPWQoZyxzLGMsZSkuR2I7aCYmYihjLGcsIWopfWZ1bmN0aW9uIGQoYixjLGUsZCl7ZnVuY3Rpb24gaihhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbFthXX19ZnVuY3Rpb24gaygpe3JldHVybiBsfXZhciBpPTAsbCxxO2EuaChmdW5jdGlvbigpe3ZhciBvPWUmJmUgaW5zdGFuY2VvZiBhLno/ZTpuZXcgYS56KGEuYS5kKGUpKSx2PW8uJGRhdGE7ZCYmYS5SYShiLG8pO2lmKGw9KFwiZnVuY3Rpb25cIj09XG50eXBlb2YgYz9jKCk6Yyl8fGEuSi5pbnN0YW5jZS5nZXRCaW5kaW5ncyhiLG8pKXtpZigwPT09aSl7aT0xO2Zvcih2YXIgdSBpbiBsKXt2YXIgcj1hLmNbdV07ciYmOD09PWIubm9kZVR5cGUmJiFhLmUuQ1t1XSYmbShFcnJvcihcIlRoZSBiaW5kaW5nICdcIit1K1wiJyBjYW5ub3QgYmUgdXNlZCB3aXRoIHZpcnR1YWwgZWxlbWVudHNcIikpO2lmKHImJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIuaW5pdCYmKHI9KDAsci5pbml0KShiLGoodSksayx2LG8pKSYmci5jb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncylxIT09biYmbShFcnJvcihcIk11bHRpcGxlIGJpbmRpbmdzIChcIitxK1wiIGFuZCBcIit1K1wiKSBhcmUgdHJ5aW5nIHRvIGNvbnRyb2wgZGVzY2VuZGFudCBiaW5kaW5ncyBvZiB0aGUgc2FtZSBlbGVtZW50LiBZb3UgY2Fubm90IHVzZSB0aGVzZSBiaW5kaW5ncyB0b2dldGhlciBvbiB0aGUgc2FtZSBlbGVtZW50LlwiKSkscT11fWk9Mn1pZigyPT09aSlmb3IodSBpbiBsKShyPWEuY1t1XSkmJlwiZnVuY3Rpb25cIj09XG50eXBlb2Ygci51cGRhdGUmJigwLHIudXBkYXRlKShiLGoodSksayx2LG8pfX0scyx7ZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOmJ9KTtyZXR1cm57R2I6cT09PW59fWEuYz17fTthLno9ZnVuY3Rpb24oYixjKXtjPyhhLmEuZXh0ZW5kKHRoaXMsYyksdGhpcy4kcGFyZW50Q29udGV4dD1jLHRoaXMuJHBhcmVudD1jLiRkYXRhLHRoaXMuJHBhcmVudHM9KGMuJHBhcmVudHN8fFtdKS5zbGljZSgwKSx0aGlzLiRwYXJlbnRzLnVuc2hpZnQodGhpcy4kcGFyZW50KSk6KHRoaXMuJHBhcmVudHM9W10sdGhpcy4kcm9vdD1iKTt0aGlzLiRkYXRhPWJ9O2Euei5wcm90b3R5cGUuY3JlYXRlQ2hpbGRDb250ZXh0PWZ1bmN0aW9uKGIpe3JldHVybiBuZXcgYS56KGIsdGhpcyl9O2Euei5wcm90b3R5cGUuZXh0ZW5kPWZ1bmN0aW9uKGIpe3ZhciBjPWEuYS5leHRlbmQobmV3IGEueix0aGlzKTtyZXR1cm4gYS5hLmV4dGVuZChjLGIpfTthLlJhPWZ1bmN0aW9uKGIsYyl7aWYoMj09YXJndW1lbnRzLmxlbmd0aClhLmEuZi5zZXQoYixcblwiX19rb19iaW5kaW5nQ29udGV4dF9fXCIsYyk7ZWxzZSByZXR1cm4gYS5hLmYuZ2V0KGIsXCJfX2tvX2JpbmRpbmdDb250ZXh0X19cIil9O2EueWE9ZnVuY3Rpb24oYixjLGUpezE9PT1iLm5vZGVUeXBlJiZhLmUuSWEoYik7cmV0dXJuIGQoYixjLGUscCl9O2EuWWE9ZnVuY3Rpb24oYSxjKXsoMT09PWMubm9kZVR5cGV8fDg9PT1jLm5vZGVUeXBlKSYmYihhLGMscCl9O2EueGE9ZnVuY3Rpb24oYSxiKXtiJiYoMSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlKSYmbShFcnJvcihcImtvLmFwcGx5QmluZGluZ3M6IGZpcnN0IHBhcmFtZXRlciBzaG91bGQgYmUgeW91ciB2aWV3IG1vZGVsOyBzZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIERPTSBub2RlXCIpKTtiPWJ8fHdpbmRvdy5kb2N1bWVudC5ib2R5O2MoYSxiLHApfTthLmVhPWZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6Y2FzZSA4OnZhciBjPWEuUmEoYik7aWYoYylyZXR1cm4gYztpZihiLnBhcmVudE5vZGUpcmV0dXJuIGEuZWEoYi5wYXJlbnROb2RlKX19O1xuYS5oYj1mdW5jdGlvbihiKXtyZXR1cm4oYj1hLmVhKGIpKT9iLiRkYXRhOm59O2EuYihcImJpbmRpbmdIYW5kbGVyc1wiLGEuYyk7YS5iKFwiYXBwbHlCaW5kaW5nc1wiLGEueGEpO2EuYihcImFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzXCIsYS5ZYSk7YS5iKFwiYXBwbHlCaW5kaW5nc1RvTm9kZVwiLGEueWEpO2EuYihcImNvbnRleHRGb3JcIixhLmVhKTthLmIoXCJkYXRhRm9yXCIsYS5oYil9KSgpO2EuYS52KFtcImNsaWNrXCJdLGZ1bmN0aW9uKGIpe2EuY1tiXT17aW5pdDpmdW5jdGlvbihjLGQsZixnKXtyZXR1cm4gYS5jLmV2ZW50LmluaXQuY2FsbCh0aGlzLGMsZnVuY3Rpb24oKXt2YXIgYT17fTthW2JdPWQoKTtyZXR1cm4gYX0sZixnKX19fSk7YS5jLmV2ZW50PXtpbml0OmZ1bmN0aW9uKGIsYyxkLGYpe3ZhciBnPWMoKXx8e30sZTtmb3IoZSBpbiBnKShmdW5jdGlvbigpe3ZhciBnPWU7XCJzdHJpbmdcIj09dHlwZW9mIGcmJmEuYS5uKGIsZyxmdW5jdGlvbihiKXt2YXIgZSxpPWMoKVtnXTtpZihpKXt2YXIgbD1cbmQoKTt0cnl7dmFyIHE9YS5hLkwoYXJndW1lbnRzKTtxLnVuc2hpZnQoZik7ZT1pLmFwcGx5KGYscSl9ZmluYWxseXtlIT09cCYmKGIucHJldmVudERlZmF1bHQ/Yi5wcmV2ZW50RGVmYXVsdCgpOmIucmV0dXJuVmFsdWU9dCl9bFtnK1wiQnViYmxlXCJdPT09dCYmKGIuY2FuY2VsQnViYmxlPXAsYi5zdG9wUHJvcGFnYXRpb24mJmIuc3RvcFByb3BhZ2F0aW9uKCkpfX0pfSkoKX19O2EuYy5zdWJtaXQ9e2luaXQ6ZnVuY3Rpb24oYixjLGQsZil7XCJmdW5jdGlvblwiIT10eXBlb2YgYygpJiZtKEVycm9yKFwiVGhlIHZhbHVlIGZvciBhIHN1Ym1pdCBiaW5kaW5nIG11c3QgYmUgYSBmdW5jdGlvblwiKSk7YS5hLm4oYixcInN1Ym1pdFwiLGZ1bmN0aW9uKGEpe3ZhciBlLGQ9YygpO3RyeXtlPWQuY2FsbChmLGIpfWZpbmFsbHl7ZSE9PXAmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPXQpfX0pfX07YS5jLnZpc2libGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPVxuYS5hLmQoYygpKSxmPVwibm9uZVwiIT1iLnN0eWxlLmRpc3BsYXk7ZCYmIWY/Yi5zdHlsZS5kaXNwbGF5PVwiXCI6IWQmJmYmJihiLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpfX07YS5jLmVuYWJsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpKTtkJiZiLmRpc2FibGVkP2IucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik6IWQmJiFiLmRpc2FibGVkJiYoYi5kaXNhYmxlZD1wKX19O2EuYy5kaXNhYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXthLmMuZW5hYmxlLnVwZGF0ZShiLGZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5kKGMoKSl9KX19O2EuYy52YWx1ZT17aW5pdDpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZigpe3ZhciBlPWMoKSxmPWEuay5yKGIpO2EuZy4kKGUsZCxcInZhbHVlXCIsZixwKX12YXIgZz1bXCJjaGFuZ2VcIl0sZT1kKCkudmFsdWVVcGRhdGU7ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1bZV0pLGEuYS5OKGcsZSksZz1hLmEuemEoZykpO2lmKGEuYS5qYSYmXG4oXCJpbnB1dFwiPT1iLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PWIudHlwZSYmXCJvZmZcIiE9Yi5hdXRvY29tcGxldGUmJighYi5mb3JtfHxcIm9mZlwiIT1iLmZvcm0uYXV0b2NvbXBsZXRlKSkmJi0xPT1hLmEuaihnLFwicHJvcGVydHljaGFuZ2VcIikpe3ZhciBoPXQ7YS5hLm4oYixcInByb3BlcnR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtoPXB9KTthLmEubihiLFwiYmx1clwiLGZ1bmN0aW9uKCl7aWYoaCl7aD10O2YoKX19KX1hLmEudihnLGZ1bmN0aW9uKGMpe3ZhciBlPWY7aWYoYS5hLkhiKGMsXCJhZnRlclwiKSl7ZT1mdW5jdGlvbigpe3NldFRpbWVvdXQoZiwwKX07Yz1jLnN1YnN0cmluZyg1KX1hLmEubihiLGMsZSl9KX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9XCJzZWxlY3RcIj09PWEuYS5vKGIpLGY9YS5hLmQoYygpKSxnPWEuay5yKGIpLGU9ZiE9ZzswPT09ZiYmKDAhPT1nJiZcIjBcIiE9PWcpJiYoZT1wKTtlJiYoZz1mdW5jdGlvbigpe2Euay5TKGIsZil9LGcoKSxkJiZzZXRUaW1lb3V0KGcsXG4wKSk7ZCYmMDxiLmxlbmd0aCYmQihiLGYsdCl9fTthLmMub3B0aW9ucz17dXBkYXRlOmZ1bmN0aW9uKGIsYyxkKXtcInNlbGVjdFwiIT09YS5hLm8oYikmJm0oRXJyb3IoXCJvcHRpb25zIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKSk7Zm9yKHZhciBmPTA9PWIubGVuZ3RoLGc9YS5hLlQoYS5hLmFhKGIuY2hpbGROb2RlcyxmdW5jdGlvbihiKXtyZXR1cm4gYi50YWdOYW1lJiZcIm9wdGlvblwiPT09YS5hLm8oYikmJmIuc2VsZWN0ZWR9KSxmdW5jdGlvbihiKXtyZXR1cm4gYS5rLnIoYil8fGIuaW5uZXJUZXh0fHxiLnRleHRDb250ZW50fSksZT1iLnNjcm9sbFRvcCxoPWEuYS5kKGMoKSk7MDxiLmxlbmd0aDspYS5GKGIub3B0aW9uc1swXSksYi5yZW1vdmUoMCk7aWYoaCl7ZD1kKCk7XCJudW1iZXJcIiE9dHlwZW9mIGgubGVuZ3RoJiYoaD1baF0pO2lmKGQub3B0aW9uc0NhcHRpb24pe3ZhciBqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7YS5hLlkoaixcbmQub3B0aW9uc0NhcHRpb24pO2Euay5TKGosbik7Yi5hcHBlbmRDaGlsZChqKX1mb3IodmFyIGM9MCxrPWgubGVuZ3RoO2M8aztjKyspe3ZhciBqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksaT1cInN0cmluZ1wiPT10eXBlb2YgZC5vcHRpb25zVmFsdWU/aFtjXVtkLm9wdGlvbnNWYWx1ZV06aFtjXSxpPWEuYS5kKGkpO2Euay5TKGosaSk7dmFyIGw9ZC5vcHRpb25zVGV4dCxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIGw/bChoW2NdKTpcInN0cmluZ1wiPT10eXBlb2YgbD9oW2NdW2xdOmk7aWYoaT09PXN8fGk9PT1uKWk9XCJcIjthLmEuUWEoaixpKTtiLmFwcGVuZENoaWxkKGopfWg9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKTtjPWo9MDtmb3Ioaz1oLmxlbmd0aDtjPGs7YysrKTA8PWEuYS5qKGcsYS5rLnIoaFtjXSkpJiYoYS5hLlBhKGhbY10scCksaisrKTtiLnNjcm9sbFRvcD1lO2YmJlwidmFsdWVcImluIGQmJkIoYixhLmEuZChkLnZhbHVlKSxwKTthLmEubGIoYil9fX07XG5hLmMub3B0aW9ucy5vYT1cIl9fa28ub3B0aW9uVmFsdWVEb21EYXRhX19cIjthLmMuc2VsZWN0ZWRPcHRpb25zPXtFYTpmdW5jdGlvbihiKXtmb3IodmFyIGM9W10sYj1iLmNoaWxkTm9kZXMsZD0wLGY9Yi5sZW5ndGg7ZDxmO2QrKyl7dmFyIGc9YltkXSxlPWEuYS5vKGcpO1wib3B0aW9uXCI9PWUmJmcuc2VsZWN0ZWQ/Yy5wdXNoKGEuay5yKGcpKTpcIm9wdGdyb3VwXCI9PWUmJihnPWEuYy5zZWxlY3RlZE9wdGlvbnMuRWEoZyksQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShjLFtjLmxlbmd0aCwwXS5jb25jYXQoZykpKX1yZXR1cm4gY30saW5pdDpmdW5jdGlvbihiLGMsZCl7YS5hLm4oYixcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGI9YygpLGc9YS5jLnNlbGVjdGVkT3B0aW9ucy5FYSh0aGlzKTthLmcuJChiLGQsXCJ2YWx1ZVwiLGcpfSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMpe1wic2VsZWN0XCIhPWEuYS5vKGIpJiZtKEVycm9yKFwidmFsdWVzIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKSk7XG52YXIgZD1hLmEuZChjKCkpO2lmKGQmJlwibnVtYmVyXCI9PXR5cGVvZiBkLmxlbmd0aClmb3IodmFyIGY9Yi5jaGlsZE5vZGVzLGc9MCxlPWYubGVuZ3RoO2c8ZTtnKyspe3ZhciBoPWZbZ107XCJvcHRpb25cIj09PWEuYS5vKGgpJiZhLmEuUGEoaCwwPD1hLmEuaihkLGEuay5yKGgpKSl9fX07YS5jLnRleHQ9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYS5RYShiLGMoKSl9fTthLmMuaHRtbD17aW5pdDpmdW5jdGlvbigpe3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczpwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpKTthLmEuWShiLGQpfX07YS5jLmNzcz17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpfHx7fSksZjtmb3IoZiBpbiBkKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBmKXt2YXIgZz1hLmEuZChkW2ZdKTthLmEuVWEoYixmLGcpfX19O2EuYy5zdHlsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpfHx7fSksZjtcbmZvcihmIGluIGQpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGYpe3ZhciBnPWEuYS5kKGRbZl0pO2Iuc3R5bGVbZl09Z3x8XCJcIn19fTthLmMudW5pcXVlTmFtZT17aW5pdDpmdW5jdGlvbihiLGMpe2MoKSYmKGIubmFtZT1cImtvX3VuaXF1ZV9cIisgKythLmMudW5pcXVlTmFtZS5nYiwoYS5hLnRifHxhLmEudWIpJiZiLm1lcmdlQXR0cmlidXRlcyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiPGlucHV0IG5hbWU9J1wiK2IubmFtZStcIicvPlwiKSx0KSl9fTthLmMudW5pcXVlTmFtZS5nYj0wO2EuYy5jaGVja2VkPXtpbml0OmZ1bmN0aW9uKGIsYyxkKXthLmEubihiLFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciBmO2lmKFwiY2hlY2tib3hcIj09Yi50eXBlKWY9Yi5jaGVja2VkO2Vsc2UgaWYoXCJyYWRpb1wiPT1iLnR5cGUmJmIuY2hlY2tlZClmPWIudmFsdWU7ZWxzZSByZXR1cm47dmFyIGc9YygpO1wiY2hlY2tib3hcIj09Yi50eXBlJiZhLmEuZChnKWluc3RhbmNlb2YgQXJyYXk/KGY9YS5hLmooYS5hLmQoZyksYi52YWx1ZSksXG5iLmNoZWNrZWQmJjA+Zj9nLnB1c2goYi52YWx1ZSk6IWIuY2hlY2tlZCYmMDw9ZiYmZy5zcGxpY2UoZiwxKSk6YS5nLiQoZyxkLFwiY2hlY2tlZFwiLGYscCl9KTtcInJhZGlvXCI9PWIudHlwZSYmIWIubmFtZSYmYS5jLnVuaXF1ZU5hbWUuaW5pdChiLEEocCkpfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCkpO1wiY2hlY2tib3hcIj09Yi50eXBlP2IuY2hlY2tlZD1kIGluc3RhbmNlb2YgQXJyYXk/MDw9YS5hLmooZCxiLnZhbHVlKTpkOlwicmFkaW9cIj09Yi50eXBlJiYoYi5jaGVja2VkPWIudmFsdWU9PWQpfX07dmFyIEY9e1wiY2xhc3NcIjpcImNsYXNzTmFtZVwiLFwiZm9yXCI6XCJodG1sRm9yXCJ9O2EuYy5hdHRyPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCkpfHx7fSxmO2ZvcihmIGluIGQpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGYpe3ZhciBnPWEuYS5kKGRbZl0pLGU9Zz09PXR8fGc9PT1zfHxnPT09bjtlJiZiLnJlbW92ZUF0dHJpYnV0ZShmKTs4Pj1hLmEuamEmJlxuZiBpbiBGPyhmPUZbZl0sZT9iLnJlbW92ZUF0dHJpYnV0ZShmKTpiW2ZdPWcpOmV8fGIuc2V0QXR0cmlidXRlKGYsZy50b1N0cmluZygpKX19fTthLmMuaGFzZm9jdXM9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGYoYil7dmFyIGU9YygpO2EuZy4kKGUsZCxcImhhc2ZvY3VzXCIsYixwKX1hLmEubihiLFwiZm9jdXNcIixmdW5jdGlvbigpe2YocCl9KTthLmEubihiLFwiZm9jdXNpblwiLGZ1bmN0aW9uKCl7ZihwKX0pO2EuYS5uKGIsXCJibHVyXCIsZnVuY3Rpb24oKXtmKHQpfSk7YS5hLm4oYixcImZvY3Vzb3V0XCIsZnVuY3Rpb24oKXtmKHQpfSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSk7ZD9iLmZvY3VzKCk6Yi5ibHVyKCk7YS5hLnZhKGIsZD9cImZvY3VzaW5cIjpcImZvY3Vzb3V0XCIpfX07YS5jW1wid2l0aFwiXT17cDpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1iKCk7cmV0dXJue1wiaWZcIjpjLGRhdGE6Yyx0ZW1wbGF0ZUVuZ2luZTphLnEuS319fSxcbmluaXQ6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jLnRlbXBsYXRlLmluaXQoYixhLmNbXCJ3aXRoXCJdLnAoYykpfSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZixnKXtyZXR1cm4gYS5jLnRlbXBsYXRlLnVwZGF0ZShiLGEuY1tcIndpdGhcIl0ucChjKSxkLGYsZyl9fTthLmcuRFtcIndpdGhcIl09dDthLmUuQ1tcIndpdGhcIl09cDthLmNbXCJpZlwiXT17cDpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm57XCJpZlwiOmIoKSx0ZW1wbGF0ZUVuZ2luZTphLnEuS319fSxpbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS5pbml0KGIsYS5jW1wiaWZcIl0ucChjKSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCxmLGcpe3JldHVybiBhLmMudGVtcGxhdGUudXBkYXRlKGIsYS5jW1wiaWZcIl0ucChjKSxkLGYsZyl9fTthLmcuRFtcImlmXCJdPXQ7YS5lLkNbXCJpZlwiXT1wO2EuYy5pZm5vdD17cDpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm57aWZub3Q6YigpLHRlbXBsYXRlRW5naW5lOmEucS5LfX19LFxuaW5pdDpmdW5jdGlvbihiLGMpe3JldHVybiBhLmMudGVtcGxhdGUuaW5pdChiLGEuYy5pZm5vdC5wKGMpKX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGYsZyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS51cGRhdGUoYixhLmMuaWZub3QucChjKSxkLGYsZyl9fTthLmcuRC5pZm5vdD10O2EuZS5DLmlmbm90PXA7YS5jLmZvcmVhY2g9e3A6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9YS5hLmQoYigpKTtyZXR1cm4hY3x8XCJudW1iZXJcIj09dHlwZW9mIGMubGVuZ3RoP3tmb3JlYWNoOmMsdGVtcGxhdGVFbmdpbmU6YS5xLkt9Ontmb3JlYWNoOmMuZGF0YSxpbmNsdWRlRGVzdHJveWVkOmMuaW5jbHVkZURlc3Ryb3llZCxhZnRlckFkZDpjLmFmdGVyQWRkLGJlZm9yZVJlbW92ZTpjLmJlZm9yZVJlbW92ZSxhZnRlclJlbmRlcjpjLmFmdGVyUmVuZGVyLHRlbXBsYXRlRW5naW5lOmEucS5LfX19LGluaXQ6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jLnRlbXBsYXRlLmluaXQoYixhLmMuZm9yZWFjaC5wKGMpKX0sXG51cGRhdGU6ZnVuY3Rpb24oYixjLGQsZixnKXtyZXR1cm4gYS5jLnRlbXBsYXRlLnVwZGF0ZShiLGEuYy5mb3JlYWNoLnAoYyksZCxmLGcpfX07YS5nLkQuZm9yZWFjaD10O2EuZS5DLmZvcmVhY2g9cDthLnQ9ZnVuY3Rpb24oKXt9O2EudC5wcm90b3R5cGUucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oKXttKEVycm9yKFwiT3ZlcnJpZGUgcmVuZGVyVGVtcGxhdGVTb3VyY2VcIikpfTthLnQucHJvdG90eXBlLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaz1mdW5jdGlvbigpe20oRXJyb3IoXCJPdmVycmlkZSBjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2tcIikpfTthLnQucHJvdG90eXBlLm1ha2VUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGMpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXt2YXIgYz1jfHxkb2N1bWVudCxkPWMuZ2V0RWxlbWVudEJ5SWQoYik7ZHx8bShFcnJvcihcIkNhbm5vdCBmaW5kIHRlbXBsYXRlIHdpdGggSUQgXCIrYikpO3JldHVybiBuZXcgYS5sLmkoZCl9aWYoMT09XG5iLm5vZGVUeXBlfHw4PT1iLm5vZGVUeXBlKXJldHVybiBuZXcgYS5sLk0oYik7bShFcnJvcihcIlVua25vd24gdGVtcGxhdGUgdHlwZTogXCIrYikpfTthLnQucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlPWZ1bmN0aW9uKGEsYyxkLGYpe3JldHVybiB0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlKHRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZiksYyxkKX07YS50LnByb3RvdHlwZS5pc1RlbXBsYXRlUmV3cml0dGVuPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz09PXR8fCEoYyYmYyE9ZG9jdW1lbnQpJiZ0aGlzLlYmJnRoaXMuVlthXT9wOnRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsYykuZGF0YShcImlzUmV3cml0dGVuXCIpfTthLnQucHJvdG90eXBlLnJld3JpdGVUZW1wbGF0ZT1mdW5jdGlvbihhLGMsZCl7dmFyIGY9dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxkKSxjPWMoZi50ZXh0KCkpO2YudGV4dChjKTtmLmRhdGEoXCJpc1Jld3JpdHRlblwiLFxucCk7IShkJiZkIT1kb2N1bWVudCkmJlwic3RyaW5nXCI9PXR5cGVvZiBhJiYodGhpcy5WPXRoaXMuVnx8e30sdGhpcy5WW2FdPXApfTthLmIoXCJ0ZW1wbGF0ZUVuZ2luZVwiLGEudCk7YS5aPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZSl7Zm9yKHZhciBiPWEuZy5XKGIpLGQ9YS5nLkQsaj0wO2o8Yi5sZW5ndGg7aisrKXt2YXIgaz1iW2pdLmtleTtpZihkLmhhc093blByb3BlcnR5KGspKXt2YXIgaT1kW2tdO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBpPyhrPWkoYltqXS52YWx1ZSkpJiZtKEVycm9yKGspKTppfHxtKEVycm9yKFwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCB0aGUgJ1wiK2srXCInIGJpbmRpbmcgd2l0aGluIGl0cyB0ZW1wbGF0ZXNcIikpfX1iPVwia28udGVtcGxhdGVSZXdyaXRpbmcuYXBwbHlNZW1vaXplZEJpbmRpbmdzVG9OZXh0U2libGluZyhmdW5jdGlvbigpIHsgICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbigpIHsgcmV0dXJuIHsgXCIrYS5nLmthKGIpK1xuXCIgfSB9KSgpICAgICAgICAgfSlcIjtyZXR1cm4gZS5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2soYikrY312YXIgYz0vKDxbYS16XStcXGQqKFxccysoPyFkYXRhLWJpbmQ9KVthLXowLTlcXC1dKyg9KFxcXCJbXlxcXCJdKlxcXCJ8XFwnW15cXCddKlxcJykpPykqXFxzKylkYXRhLWJpbmQ9KFtcIiddKShbXFxzXFxTXSo/KVxcNS9naSxkPS88XFwhLS1cXHMqa29cXGJcXHMqKFtcXHNcXFNdKj8pXFxzKi0tXFw+L2c7cmV0dXJue21iOmZ1bmN0aW9uKGIsYyxlKXtjLmlzVGVtcGxhdGVSZXdyaXR0ZW4oYixlKXx8Yy5yZXdyaXRlVGVtcGxhdGUoYixmdW5jdGlvbihiKXtyZXR1cm4gYS5aLnpiKGIsYyl9LGUpfSx6YjpmdW5jdGlvbihhLGcpe3JldHVybiBhLnJlcGxhY2UoYyxmdW5jdGlvbihhLGMsZCxmLGksbCxxKXtyZXR1cm4gYihxLGMsZyl9KS5yZXBsYWNlKGQsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYihjLFwiPFxcIS0tIGtvIC0tXFw+XCIsZyl9KX0sWmE6ZnVuY3Rpb24oYil7cmV0dXJuIGEucy5uYShmdW5jdGlvbihjLFxuZSl7Yy5uZXh0U2libGluZyYmYS55YShjLm5leHRTaWJsaW5nLGIsZSl9KX19fSgpO2EuYihcInRlbXBsYXRlUmV3cml0aW5nXCIsYS5aKTthLmIoXCJ0ZW1wbGF0ZVJld3JpdGluZy5hcHBseU1lbW9pemVkQmluZGluZ3NUb05leHRTaWJsaW5nXCIsYS5aLlphKTsoZnVuY3Rpb24oKXthLmw9e307YS5sLmk9ZnVuY3Rpb24oYSl7dGhpcy5pPWF9O2EubC5pLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7dmFyIGI9YS5hLm8odGhpcy5pKSxiPVwic2NyaXB0XCI9PT1iP1widGV4dFwiOlwidGV4dGFyZWFcIj09PWI/XCJ2YWx1ZVwiOlwiaW5uZXJIVE1MXCI7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5pW2JdO3ZhciBjPWFyZ3VtZW50c1swXTtcImlubmVySFRNTFwiPT09Yj9hLmEuWSh0aGlzLmksYyk6dGhpcy5pW2JdPWN9O2EubC5pLnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKGIpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBhLmEuZi5nZXQodGhpcy5pLFwidGVtcGxhdGVTb3VyY2VEYXRhX1wiK1xuYik7YS5hLmYuc2V0KHRoaXMuaSxcInRlbXBsYXRlU291cmNlRGF0YV9cIitiLGFyZ3VtZW50c1sxXSl9O2EubC5NPWZ1bmN0aW9uKGEpe3RoaXMuaT1hfTthLmwuTS5wcm90b3R5cGU9bmV3IGEubC5pO2EubC5NLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aCl7dmFyIGI9YS5hLmYuZ2V0KHRoaXMuaSxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIpfHx7fTtiLnVhPT09biYmYi5kYSYmKGIudWE9Yi5kYS5pbm5lckhUTUwpO3JldHVybiBiLnVhfWEuYS5mLnNldCh0aGlzLmksXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiLHt1YTphcmd1bWVudHNbMF19KX07YS5sLmkucHJvdG90eXBlLm5vZGVzPWZ1bmN0aW9uKCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4oYS5hLmYuZ2V0KHRoaXMuaSxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIpfHx7fSkuZGE7YS5hLmYuc2V0KHRoaXMuaSxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIse2RhOmFyZ3VtZW50c1swXX0pfTtcbmEuYihcInRlbXBsYXRlU291cmNlc1wiLGEubCk7YS5iKFwidGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnRcIixhLmwuaSk7YS5iKFwidGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlXCIsYS5sLk0pfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkKXtmb3IodmFyIGYsYz1hLmUubmV4dFNpYmxpbmcoYyk7YiYmKGY9YikhPT1jOyliPWEuZS5uZXh0U2libGluZyhmKSwoMT09PWYubm9kZVR5cGV8fDg9PT1mLm5vZGVUeXBlKSYmZChmKX1mdW5jdGlvbiBjKGMsZCl7aWYoYy5sZW5ndGgpe3ZhciBmPWNbMF0sZz1jW2MubGVuZ3RoLTFdO2IoZixnLGZ1bmN0aW9uKGIpe2EueGEoZCxiKX0pO2IoZixnLGZ1bmN0aW9uKGIpe2Eucy5XYShiLFtkXSl9KX19ZnVuY3Rpb24gZChhKXtyZXR1cm4gYS5ub2RlVHlwZT9hOjA8YS5sZW5ndGg/YVswXTpzfWZ1bmN0aW9uIGYoYixmLGosayxpKXt2YXIgaT1pfHx7fSxsPWImJmQoYiksbD1sJiZsLm93bmVyRG9jdW1lbnQscT1pLnRlbXBsYXRlRW5naW5lfHxcbmc7YS5aLm1iKGoscSxsKTtqPXEucmVuZGVyVGVtcGxhdGUoaixrLGksbCk7KFwibnVtYmVyXCIhPXR5cGVvZiBqLmxlbmd0aHx8MDxqLmxlbmd0aCYmXCJudW1iZXJcIiE9dHlwZW9mIGpbMF0ubm9kZVR5cGUpJiZtKEVycm9yKFwiVGVtcGxhdGUgZW5naW5lIG11c3QgcmV0dXJuIGFuIGFycmF5IG9mIERPTSBub2Rlc1wiKSk7bD10O3N3aXRjaChmKXtjYXNlIFwicmVwbGFjZUNoaWxkcmVuXCI6YS5lLlgoYixqKTtsPXA7YnJlYWs7Y2FzZSBcInJlcGxhY2VOb2RlXCI6YS5hLk5hKGIsaik7bD1wO2JyZWFrO2Nhc2UgXCJpZ25vcmVUYXJnZXROb2RlXCI6YnJlYWs7ZGVmYXVsdDptKEVycm9yKFwiVW5rbm93biByZW5kZXJNb2RlOiBcIitmKSl9bCYmKGMoaixrKSxpLmFmdGVyUmVuZGVyJiZpLmFmdGVyUmVuZGVyKGosay4kZGF0YSkpO3JldHVybiBqfXZhciBnO2EucmE9ZnVuY3Rpb24oYil7YiE9biYmIShiIGluc3RhbmNlb2YgYS50KSYmbShFcnJvcihcInRlbXBsYXRlRW5naW5lIG11c3QgaW5oZXJpdCBmcm9tIGtvLnRlbXBsYXRlRW5naW5lXCIpKTtcbmc9Yn07YS5xYT1mdW5jdGlvbihiLGMsaixrLGkpe2o9anx8e307KGoudGVtcGxhdGVFbmdpbmV8fGcpPT1uJiZtKEVycm9yKFwiU2V0IGEgdGVtcGxhdGUgZW5naW5lIGJlZm9yZSBjYWxsaW5nIHJlbmRlclRlbXBsYXRlXCIpKTtpPWl8fFwicmVwbGFjZUNoaWxkcmVuXCI7aWYoayl7dmFyIGw9ZChrKTtyZXR1cm4gYS5oKGZ1bmN0aW9uKCl7dmFyIGc9YyYmYyBpbnN0YW5jZW9mIGEuej9jOm5ldyBhLnooYS5hLmQoYykpLG89XCJmdW5jdGlvblwiPT10eXBlb2YgYj9iKGcuJGRhdGEpOmIsZz1mKGssaSxvLGcsaik7XCJyZXBsYWNlTm9kZVwiPT1pJiYoaz1nLGw9ZChrKSl9LHMse2Rpc3Bvc2VXaGVuOmZ1bmN0aW9uKCl7cmV0dXJuIWx8fCFhLmEuZmEobCl9LGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDpsJiZcInJlcGxhY2VOb2RlXCI9PWk/bC5wYXJlbnROb2RlOmx9KX1yZXR1cm4gYS5zLm5hKGZ1bmN0aW9uKGQpe2EucWEoYixjLGosZCxcInJlcGxhY2VOb2RlXCIpfSl9O2EuRmI9ZnVuY3Rpb24oYixcbmQsZyxrLGkpe2Z1bmN0aW9uIGwoYSxiKXtjKGIsbyk7Zy5hZnRlclJlbmRlciYmZy5hZnRlclJlbmRlcihiLGEpfWZ1bmN0aW9uIHEoYyxkKXt2YXIgaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiP2IoYyk6YjtvPWkuY3JlYXRlQ2hpbGRDb250ZXh0KGEuYS5kKGMpKTtvLiRpbmRleD1kO3JldHVybiBmKHMsXCJpZ25vcmVUYXJnZXROb2RlXCIsaCxvLGcpfXZhciBvO3JldHVybiBhLmgoZnVuY3Rpb24oKXt2YXIgYj1hLmEuZChkKXx8W107XCJ1bmRlZmluZWRcIj09dHlwZW9mIGIubGVuZ3RoJiYoYj1bYl0pO2I9YS5hLmFhKGIsZnVuY3Rpb24oYil7cmV0dXJuIGcuaW5jbHVkZURlc3Ryb3llZHx8Yj09PW58fGI9PT1zfHwhYS5hLmQoYi5fZGVzdHJveSl9KTthLmEuT2EoayxiLHEsZyxsKX0scyx7ZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOmt9KX07YS5jLnRlbXBsYXRlPXtpbml0OmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpKTtpZihcInN0cmluZ1wiIT10eXBlb2YgZCYmIWQubmFtZSYmXG4oMT09Yi5ub2RlVHlwZXx8OD09Yi5ub2RlVHlwZSkpZD0xPT1iLm5vZGVUeXBlP2IuY2hpbGROb2RlczphLmUuY2hpbGROb2RlcyhiKSxkPWEuYS5BYihkKSwobmV3IGEubC5NKGIpKS5ub2RlcyhkKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6cH19LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCxmLGcpe2M9YS5hLmQoYygpKTtmPXA7XCJzdHJpbmdcIj09dHlwZW9mIGM/ZD1jOihkPWMubmFtZSxcImlmXCJpbiBjJiYoZj1mJiZhLmEuZChjW1wiaWZcIl0pKSxcImlmbm90XCJpbiBjJiYoZj1mJiYhYS5hLmQoYy5pZm5vdCkpKTt2YXIgbD1zO1wib2JqZWN0XCI9PT10eXBlb2YgYyYmXCJmb3JlYWNoXCJpbiBjP2w9YS5GYihkfHxiLGYmJmMuZm9yZWFjaHx8W10sYyxiLGcpOmY/KGc9XCJvYmplY3RcIj09dHlwZW9mIGMmJlwiZGF0YVwiaW4gYz9nLmNyZWF0ZUNoaWxkQ29udGV4dChhLmEuZChjLmRhdGEpKTpnLGw9YS5xYShkfHxiLGcsYyxiKSk6YS5lLmhhKGIpO2c9bDsoYz1hLmEuZi5nZXQoYixcIl9fa29fX3RlbXBsYXRlU3Vic2NyaXB0aW9uRG9tRGF0YUtleV9fXCIpKSYmXG5cImZ1bmN0aW9uXCI9PXR5cGVvZiBjLkEmJmMuQSgpO2EuYS5mLnNldChiLFwiX19rb19fdGVtcGxhdGVTdWJzY3JpcHRpb25Eb21EYXRhS2V5X19cIixnKX19O2EuZy5ELnRlbXBsYXRlPWZ1bmN0aW9uKGIpe2I9YS5nLlcoYik7cmV0dXJuIDE9PWIubGVuZ3RoJiZiWzBdLnVua25vd258fGEuZy53YihiLFwibmFtZVwiKT9zOlwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzIG5lc3RlZCB3aXRoaW4gaXRzIHRlbXBsYXRlc1wifTthLmUuQy50ZW1wbGF0ZT1wfSkoKTthLmIoXCJzZXRUZW1wbGF0ZUVuZ2luZVwiLGEucmEpO2EuYihcInJlbmRlclRlbXBsYXRlXCIsYS5xYSk7KGZ1bmN0aW9uKCl7YS5hLk89ZnVuY3Rpb24oYixjLGQpe2lmKGQ9PT1uKXJldHVybiBhLmEuTyhiLGMsMSl8fGEuYS5PKGIsYywxMCl8fGEuYS5PKGIsYyxOdW1iZXIuTUFYX1ZBTFVFKTtmb3IodmFyIGI9Ynx8W10sYz1jfHxbXSxmPWIsZz1jLGU9W10saD0wO2g8PWcubGVuZ3RoO2grKyllW2hdPVxuW107Zm9yKHZhciBoPTAsaj1NYXRoLm1pbihmLmxlbmd0aCxkKTtoPD1qO2grKyllWzBdW2hdPWg7aD0xO2ZvcihqPU1hdGgubWluKGcubGVuZ3RoLGQpO2g8PWo7aCsrKWVbaF1bMF09aDtmb3IodmFyIGo9Zi5sZW5ndGgsayxpPWcubGVuZ3RoLGg9MTtoPD1qO2grKyl7az1NYXRoLm1heCgxLGgtZCk7Zm9yKHZhciBsPU1hdGgubWluKGksaCtkKTtrPD1sO2srKyllW2tdW2hdPWZbaC0xXT09PWdbay0xXT9lW2stMV1baC0xXTpNYXRoLm1pbihlW2stMV1baF09PT1uP051bWJlci5NQVhfVkFMVUU6ZVtrLTFdW2hdKzEsZVtrXVtoLTFdPT09bj9OdW1iZXIuTUFYX1ZBTFVFOmVba11baC0xXSsxKX1kPWIubGVuZ3RoO2Y9Yy5sZW5ndGg7Zz1bXTtoPWVbZl1bZF07aWYoaD09PW4pZT1zO2Vsc2V7Zm9yKDswPGR8fDA8Zjspe2o9ZVtmXVtkXTtpPTA8Zj9lW2YtMV1bZF06aCsxO2w9MDxkP2VbZl1bZC0xXTpoKzE7az0wPGYmJjA8ZD9lW2YtMV1bZC0xXTpoKzE7aWYoaT09PW58fGk8ai0xKWk9XG5oKzE7aWYobD09PW58fGw8ai0xKWw9aCsxO2s8ai0xJiYoaz1oKzEpO2k8PWwmJmk8az8oZy5wdXNoKHtzdGF0dXM6XCJhZGRlZFwiLHZhbHVlOmNbZi0xXX0pLGYtLSk6KGw8aSYmbDxrP2cucHVzaCh7c3RhdHVzOlwiZGVsZXRlZFwiLHZhbHVlOmJbZC0xXX0pOihnLnB1c2goe3N0YXR1czpcInJldGFpbmVkXCIsdmFsdWU6YltkLTFdfSksZi0tKSxkLS0pfWU9Zy5yZXZlcnNlKCl9cmV0dXJuIGV9fSkoKTthLmIoXCJ1dGlscy5jb21wYXJlQXJyYXlzXCIsYS5hLk8pOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7aWYoMjxhLmxlbmd0aCl7Zm9yKHZhciBiPWFbMF0sYz1hW2EubGVuZ3RoLTFdLGU9W2JdO2IhPT1jOyl7Yj1iLm5leHRTaWJsaW5nO2lmKCFiKXJldHVybjtlLnB1c2goYil9QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhLFswLGEubGVuZ3RoXS5jb25jYXQoZSkpfX1mdW5jdGlvbiBjKGMsZixnLGUsaCl7dmFyIGo9W10sYz1hLmgoZnVuY3Rpb24oKXt2YXIgYz1mKGcsaCl8fFxuW107MDxqLmxlbmd0aCYmKGIoaiksYS5hLk5hKGosYyksZSYmZShnLGMpKTtqLnNwbGljZSgwLGoubGVuZ3RoKTthLmEuTihqLGMpfSxzLHtkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6YyxkaXNwb3NlV2hlbjpmdW5jdGlvbigpe3JldHVybiAwPT1qLmxlbmd0aHx8IWEuYS5mYShqWzBdKX19KTtyZXR1cm57eGI6aixoOmN9fWEuYS5PYT1mdW5jdGlvbihkLGYsZyxlLGgpe2Zvcih2YXIgZj1mfHxbXSxlPWV8fHt9LGo9YS5hLmYuZ2V0KGQsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIpPT09bixrPWEuYS5mLmdldChkLFwic2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ19sYXN0TWFwcGluZ1Jlc3VsdFwiKXx8W10saT1hLmEuVChrLGZ1bmN0aW9uKGEpe3JldHVybiBhLiRhfSksbD1hLmEuTyhpLGYpLGY9W10scT0wLG89W10sdj0wLGk9W10sdT1zLHI9MCx3PWwubGVuZ3RoO3I8dztyKyspc3dpdGNoKGxbcl0uc3RhdHVzKXtjYXNlIFwicmV0YWluZWRcIjp2YXIgeT1cbmtbcV07eS5xYih2KTt2PWYucHVzaCh5KTswPHkuUC5sZW5ndGgmJih1PXkuUFt5LlAubGVuZ3RoLTFdKTtxKys7YnJlYWs7Y2FzZSBcImRlbGV0ZWRcIjprW3FdLmguQSgpO2Ioa1txXS5QKTthLmEudihrW3FdLlAsZnVuY3Rpb24oYSl7by5wdXNoKHtlbGVtZW50OmEsaW5kZXg6cix2YWx1ZTpsW3JdLnZhbHVlfSk7dT1hfSk7cSsrO2JyZWFrO2Nhc2UgXCJhZGRlZFwiOmZvcih2YXIgeT1sW3JdLnZhbHVlLHg9YS5tKHYpLHY9YyhkLGcseSxoLHgpLEM9di54Yix2PWYucHVzaCh7JGE6bFtyXS52YWx1ZSxQOkMsaDp2LmgscWI6eH0pLHo9MCxCPUMubGVuZ3RoO3o8Qjt6Kyspe3ZhciBEPUNbel07aS5wdXNoKHtlbGVtZW50OkQsaW5kZXg6cix2YWx1ZTpsW3JdLnZhbHVlfSk7dT09cz9hLmUuS2EoZCxEKTphLmUuRmEoZCxELHUpO3U9RH1oJiZoKHksQyx4KX1hLmEudihvLGZ1bmN0aW9uKGIpe2EuRihiLmVsZW1lbnQpfSk7Zz10O2lmKCFqKXtpZihlLmFmdGVyQWRkKWZvcihyPTA7cjxpLmxlbmd0aDtyKyspZS5hZnRlckFkZChpW3JdLmVsZW1lbnQsXG5pW3JdLmluZGV4LGlbcl0udmFsdWUpO2lmKGUuYmVmb3JlUmVtb3ZlKXtmb3Iocj0wO3I8by5sZW5ndGg7cisrKWUuYmVmb3JlUmVtb3ZlKG9bcl0uZWxlbWVudCxvW3JdLmluZGV4LG9bcl0udmFsdWUpO2c9cH19aWYoIWcmJm8ubGVuZ3RoKWZvcihyPTA7cjxvLmxlbmd0aDtyKyspZT1vW3JdLmVsZW1lbnQsZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk7YS5hLmYuc2V0KGQsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIsZil9fSkoKTthLmIoXCJ1dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nXCIsYS5hLk9hKTthLnE9ZnVuY3Rpb24oKXt0aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc9dH07YS5xLnByb3RvdHlwZT1uZXcgYS50O2EucS5wcm90b3R5cGUucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYil7dmFyIGM9ISg5PmEuYS5qYSkmJmIubm9kZXM/Yi5ub2RlcygpOnM7XG5pZihjKXJldHVybiBhLmEuTChjLmNsb25lTm9kZShwKS5jaGlsZE5vZGVzKTtiPWIudGV4dCgpO3JldHVybiBhLmEucGEoYil9O2EucS5LPW5ldyBhLnE7YS5yYShhLnEuSyk7YS5iKFwibmF0aXZlVGVtcGxhdGVFbmdpbmVcIixhLnEpOyhmdW5jdGlvbigpe2EubWE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnZiPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGpRdWVyeXx8IWpRdWVyeS50bXBsKXJldHVybiAwO3RyeXtpZigwPD1qUXVlcnkudG1wbC50YWcudG1wbC5vcGVuLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpKXJldHVybiAyfWNhdGNoKGEpe31yZXR1cm4gMX0oKTt0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsZixnKXtnPWd8fHt9OzI+YSYmbShFcnJvcihcIllvdXIgdmVyc2lvbiBvZiBqUXVlcnkudG1wbCBpcyB0b28gb2xkLiBQbGVhc2UgdXBncmFkZSB0byBqUXVlcnkudG1wbCAxLjAuMHByZSBvciBsYXRlci5cIikpO3ZhciBlPWIuZGF0YShcInByZWNvbXBpbGVkXCIpO1xuZXx8KGU9Yi50ZXh0KCl8fFwiXCIsZT1qUXVlcnkudGVtcGxhdGUocyxcInt7a29fd2l0aCAkaXRlbS5rb0JpbmRpbmdDb250ZXh0fX1cIitlK1wie3sva29fd2l0aH19XCIpLGIuZGF0YShcInByZWNvbXBpbGVkXCIsZSkpO2I9W2YuJGRhdGFdO2Y9alF1ZXJ5LmV4dGVuZCh7a29CaW5kaW5nQ29udGV4dDpmfSxnLnRlbXBsYXRlT3B0aW9ucyk7Zj1qUXVlcnkudG1wbChlLGIsZik7Zi5hcHBlbmRUbyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtqUXVlcnkuZnJhZ21lbnRzPXt9O3JldHVybiBmfTt0aGlzLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaz1mdW5jdGlvbihhKXtyZXR1cm5cInt7a29fY29kZSAoKGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIrYStcIiB9KSgpKSB9fVwifTt0aGlzLmFkZFRlbXBsYXRlPWZ1bmN0aW9uKGEsYil7ZG9jdW1lbnQud3JpdGUoXCI8c2NyaXB0IHR5cGU9J3RleHQvaHRtbCcgaWQ9J1wiK2ErXCInPlwiK2IrXCI8XFwvc2NyaXB0PlwiKX07MDxhJiYoalF1ZXJ5LnRtcGwudGFnLmtvX2NvZGU9XG57b3BlbjpcIl9fLnB1c2goJDEgfHwgJycpO1wifSxqUXVlcnkudG1wbC50YWcua29fd2l0aD17b3BlbjpcIndpdGgoJDEpIHtcIixjbG9zZTpcIn0gXCJ9KX07YS5tYS5wcm90b3R5cGU9bmV3IGEudDt2YXIgYj1uZXcgYS5tYTswPGIudmImJmEucmEoYik7YS5iKFwianF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lXCIsYS5tYSl9KSgpfVwiZnVuY3Rpb25cIj09PXR5cGVvZiByZXF1aXJlJiZcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP0UobW9kdWxlLmV4cG9ydHN8fGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sRSk6RSh3aW5kb3cua289e30pO3A7XG59KSh3aW5kb3csZG9jdW1lbnQsbmF2aWdhdG9yKTtcbiJdfQ==
;