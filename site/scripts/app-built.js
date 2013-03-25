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

	this.todayWtfPerMin = ko.computed(function() {
		var today = this.todaysWtfs();
		var first = _.first(today);
		var last = _.last(today);
		var mins = (last - first) / 1000 / 60;
		var count = today.length;
		var wtfPerMin = count / mins;
		return wtfPerMin.toFixed(3) || '0';
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
		return hourly;
	}, this);

	this.hourlyVisible = ko.observable(false);

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

ViewModel.prototype.toggleHourlyVisible = function() {
	this.hourlyVisible(!this.hourlyVisible());
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL3NpdGUvc2NyaXB0cy9hcHAuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9rbm9ja291dC1jbGllbnQva25vY2tvdXQuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL3NpdGUvc2NyaXB0cy92aWV3TW9kZWwuanMiLCIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9kYXRlanMvbGliL2RhdGUuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9rbm9ja291dC1tYXBwaW5nL2luZGV4LmpzIiwiL1VzZXJzL2pvc2hrYS9Db2RlL2NvdW50dy50Zi9ub2RlX21vZHVsZXMva25vY2tvdXQtbWFwcGluZy9ub2RlX21vZHVsZXMva25vY2tvdXQtY2xpZW50L2tub2Nrb3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3J3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGtvID0gcmVxdWlyZSgna25vY2tvdXQtY2xpZW50JyksXG5cdHZtID0gcmVxdWlyZSgnLi92aWV3TW9kZWwnKTtcblxua28uYXBwbHlCaW5kaW5ncyh2bSk7IiwiLy8gS25vY2tvdXQgSmF2YVNjcmlwdCBsaWJyYXJ5IHYyLjIuMVxuLy8gKGMpIFN0ZXZlbiBTYW5kZXJzb24gLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4vLyBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuXG4oZnVuY3Rpb24oKSB7ZnVuY3Rpb24gaih3KXt0aHJvdyB3O312YXIgbT0hMCxwPW51bGwscj0hMTtmdW5jdGlvbiB1KHcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB3fX07dmFyIHg9d2luZG93LHk9ZG9jdW1lbnQsZ2E9bmF2aWdhdG9yLEY9d2luZG93LmpRdWVyeSxJPXZvaWQgMDtcbmZ1bmN0aW9uIEwodyl7ZnVuY3Rpb24gaGEoYSxkLGMsZSxmKXt2YXIgZz1bXTthPWIuaihmdW5jdGlvbigpe3ZhciBhPWQoYyxmKXx8W107MDxnLmxlbmd0aCYmKGIuYS5ZYShNKGcpLGEpLGUmJmIuci5LKGUscCxbYyxhLGZdKSk7Zy5zcGxpY2UoMCxnLmxlbmd0aCk7Yi5hLlAoZyxhKX0scCx7VzphLEthOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PWcubGVuZ3RofHwhYi5hLlgoZ1swXSl9fSk7cmV0dXJue006ZyxqOmEucGEoKT9hOkl9fWZ1bmN0aW9uIE0oYSl7Zm9yKDthLmxlbmd0aCYmIWIuYS5YKGFbMF0pOylhLnNwbGljZSgwLDEpO2lmKDE8YS5sZW5ndGgpe2Zvcih2YXIgZD1hWzBdLGM9YVthLmxlbmd0aC0xXSxlPVtkXTtkIT09Yzspe2Q9ZC5uZXh0U2libGluZztpZighZClyZXR1cm47ZS5wdXNoKGQpfUFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYSxbMCxhLmxlbmd0aF0uY29uY2F0KGUpKX1yZXR1cm4gYX1mdW5jdGlvbiBTKGEsYixjLGUsZil7dmFyIGc9TWF0aC5taW4sXG5oPU1hdGgubWF4LGs9W10sbCxuPWEubGVuZ3RoLHEscz1iLmxlbmd0aCx2PXMtbnx8MSxHPW4rcysxLEosQSx6O2ZvcihsPTA7bDw9bjtsKyspe0E9SjtrLnB1c2goSj1bXSk7ej1nKHMsbCt2KTtmb3IocT1oKDAsbC0xKTtxPD16O3ErKylKW3FdPXE/bD9hW2wtMV09PT1iW3EtMV0/QVtxLTFdOmcoQVtxXXx8RyxKW3EtMV18fEcpKzE6cSsxOmwrMX1nPVtdO2g9W107dj1bXTtsPW47Zm9yKHE9cztsfHxxOylzPWtbbF1bcV0tMSxxJiZzPT09a1tsXVtxLTFdP2gucHVzaChnW2cubGVuZ3RoXT17c3RhdHVzOmMsdmFsdWU6YlstLXFdLGluZGV4OnF9KTpsJiZzPT09a1tsLTFdW3FdP3YucHVzaChnW2cubGVuZ3RoXT17c3RhdHVzOmUsdmFsdWU6YVstLWxdLGluZGV4Omx9KTooZy5wdXNoKHtzdGF0dXM6XCJyZXRhaW5lZFwiLHZhbHVlOmJbLS1xXX0pLC0tbCk7aWYoaC5sZW5ndGgmJnYubGVuZ3RoKXthPTEwKm47dmFyIHQ7Zm9yKGI9Yz0wOyhmfHxiPGEpJiYodD1oW2NdKTtjKyspe2ZvcihlPVxuMDtrPXZbZV07ZSsrKWlmKHQudmFsdWU9PT1rLnZhbHVlKXt0Lm1vdmVkPWsuaW5kZXg7ay5tb3ZlZD10LmluZGV4O3Yuc3BsaWNlKGUsMSk7Yj1lPTA7YnJlYWt9Yis9ZX19cmV0dXJuIGcucmV2ZXJzZSgpfWZ1bmN0aW9uIFQoYSxkLGMsZSxmKXtmPWZ8fHt9O3ZhciBnPWEmJk4oYSksZz1nJiZnLm93bmVyRG9jdW1lbnQsaD1mLnRlbXBsYXRlRW5naW5lfHxPO2IuemEudmIoYyxoLGcpO2M9aC5yZW5kZXJUZW1wbGF0ZShjLGUsZixnKTsoXCJudW1iZXJcIiE9dHlwZW9mIGMubGVuZ3RofHwwPGMubGVuZ3RoJiZcIm51bWJlclwiIT10eXBlb2YgY1swXS5ub2RlVHlwZSkmJmooRXJyb3IoXCJUZW1wbGF0ZSBlbmdpbmUgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgRE9NIG5vZGVzXCIpKTtnPXI7c3dpdGNoKGQpe2Nhc2UgXCJyZXBsYWNlQ2hpbGRyZW5cIjpiLmUuTihhLGMpO2c9bTticmVhaztjYXNlIFwicmVwbGFjZU5vZGVcIjpiLmEuWWEoYSxjKTtnPW07YnJlYWs7Y2FzZSBcImlnbm9yZVRhcmdldE5vZGVcIjpicmVhaztcbmRlZmF1bHQ6aihFcnJvcihcIlVua25vd24gcmVuZGVyTW9kZTogXCIrZCkpfWcmJihVKGMsZSksZi5hZnRlclJlbmRlciYmYi5yLksoZi5hZnRlclJlbmRlcixwLFtjLGUuJGRhdGFdKSk7cmV0dXJuIGN9ZnVuY3Rpb24gTihhKXtyZXR1cm4gYS5ub2RlVHlwZT9hOjA8YS5sZW5ndGg/YVswXTpwfWZ1bmN0aW9uIFUoYSxkKXtpZihhLmxlbmd0aCl7dmFyIGM9YVswXSxlPWFbYS5sZW5ndGgtMV07VihjLGUsZnVuY3Rpb24oYSl7Yi5EYShkLGEpfSk7VihjLGUsZnVuY3Rpb24oYSl7Yi5zLmliKGEsW2RdKX0pfX1mdW5jdGlvbiBWKGEsZCxjKXt2YXIgZTtmb3IoZD1iLmUubmV4dFNpYmxpbmcoZCk7YSYmKGU9YSkhPT1kOylhPWIuZS5uZXh0U2libGluZyhlKSwoMT09PWUubm9kZVR5cGV8fDg9PT1lLm5vZGVUeXBlKSYmYyhlKX1mdW5jdGlvbiBXKGEsZCxjKXthPWIuZy5hYShhKTtmb3IodmFyIGU9Yi5nLlEsZj0wO2Y8YS5sZW5ndGg7ZisrKXt2YXIgZz1hW2ZdLmtleTtpZihlLmhhc093blByb3BlcnR5KGcpKXt2YXIgaD1cbmVbZ107XCJmdW5jdGlvblwiPT09dHlwZW9mIGg/KGc9aChhW2ZdLnZhbHVlKSkmJmooRXJyb3IoZykpOmh8fGooRXJyb3IoXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnXCIrZytcIicgYmluZGluZyB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiKSl9fWE9XCJrby5fX3RyX2FtYnRucyhmdW5jdGlvbigkY29udGV4dCwkZWxlbWVudCl7cmV0dXJuKGZ1bmN0aW9uKCl7cmV0dXJueyBcIitiLmcuYmEoYSkrXCIgfSB9KSgpfSlcIjtyZXR1cm4gYy5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2soYSkrZH1mdW5jdGlvbiBYKGEsZCxjLGUpe2Z1bmN0aW9uIGYoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGtbYV19fWZ1bmN0aW9uIGcoKXtyZXR1cm4ga312YXIgaD0wLGssbDtiLmooZnVuY3Rpb24oKXt2YXIgbj1jJiZjIGluc3RhbmNlb2YgYi56P2M6bmV3IGIueihiLmEuZChjKSkscT1uLiRkYXRhO2UmJmIuZWIoYSxuKTtpZihrPShcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP1xuZChuLGEpOmQpfHxiLkouaW5zdGFuY2UuZ2V0QmluZGluZ3MoYSxuKSl7aWYoMD09PWgpe2g9MTtmb3IodmFyIHMgaW4gayl7dmFyIHY9Yi5jW3NdO3YmJjg9PT1hLm5vZGVUeXBlJiYhYi5lLklbc10mJmooRXJyb3IoXCJUaGUgYmluZGluZyAnXCIrcytcIicgY2Fubm90IGJlIHVzZWQgd2l0aCB2aXJ0dWFsIGVsZW1lbnRzXCIpKTtpZih2JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2LmluaXQmJih2PSgwLHYuaW5pdCkoYSxmKHMpLGcscSxuKSkmJnYuY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MpbCE9PUkmJmooRXJyb3IoXCJNdWx0aXBsZSBiaW5kaW5ncyAoXCIrbCtcIiBhbmQgXCIrcytcIikgYXJlIHRyeWluZyB0byBjb250cm9sIGRlc2NlbmRhbnQgYmluZGluZ3Mgb2YgdGhlIHNhbWUgZWxlbWVudC4gWW91IGNhbm5vdCB1c2UgdGhlc2UgYmluZGluZ3MgdG9nZXRoZXIgb24gdGhlIHNhbWUgZWxlbWVudC5cIikpLGw9c31oPTJ9aWYoMj09PWgpZm9yKHMgaW4gaykodj1iLmNbc10pJiZcImZ1bmN0aW9uXCI9PVxudHlwZW9mIHYudXBkYXRlJiYoMCx2LnVwZGF0ZSkoYSxmKHMpLGcscSxuKX19LHAse1c6YX0pO3JldHVybntOYjpsPT09SX19ZnVuY3Rpb24gWShhLGQsYyl7dmFyIGU9bSxmPTE9PT1kLm5vZGVUeXBlO2YmJmIuZS5UYShkKTtpZihmJiZjfHxiLkouaW5zdGFuY2Uubm9kZUhhc0JpbmRpbmdzKGQpKWU9WChkLHAsYSxjKS5OYjtlJiZaKGEsZCwhZil9ZnVuY3Rpb24gWihhLGQsYyl7Zm9yKHZhciBlPWIuZS5maXJzdENoaWxkKGQpO2Q9ZTspZT1iLmUubmV4dFNpYmxpbmcoZCksWShhLGQsYyl9ZnVuY3Rpb24gJChhLGIpe3ZhciBjPWFhKGEsYik7cmV0dXJuIGM/MDxjLmxlbmd0aD9jW2MubGVuZ3RoLTFdLm5leHRTaWJsaW5nOmEubmV4dFNpYmxpbmc6cH1mdW5jdGlvbiBhYShhLGIpe2Zvcih2YXIgYz1hLGU9MSxmPVtdO2M9Yy5uZXh0U2libGluZzspe2lmKEgoYykmJihlLS0sMD09PWUpKXJldHVybiBmO2YucHVzaChjKTtCKGMpJiZlKyt9Ynx8aihFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiK1xuYS5ub2RlVmFsdWUpKTtyZXR1cm4gcH1mdW5jdGlvbiBIKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoSz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGlhKX1mdW5jdGlvbiBCKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoSz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGphKX1mdW5jdGlvbiBQKGEsYil7Zm9yKHZhciBjPXA7YSE9YzspYz1hLGE9YS5yZXBsYWNlKGthLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGJbY119KTtyZXR1cm4gYX1mdW5jdGlvbiBsYSgpe3ZhciBhPVtdLGQ9W107dGhpcy5zYXZlPWZ1bmN0aW9uKGMsZSl7dmFyIGY9Yi5hLmkoYSxjKTswPD1mP2RbZl09ZTooYS5wdXNoKGMpLGQucHVzaChlKSl9O3RoaXMuZ2V0PWZ1bmN0aW9uKGMpe2M9Yi5hLmkoYSxjKTtyZXR1cm4gMDw9Yz9kW2NdOkl9fWZ1bmN0aW9uIGJhKGEsYixjKXtmdW5jdGlvbiBlKGUpe3ZhciBnPWIoYVtlXSk7c3dpdGNoKHR5cGVvZiBnKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcImZ1bmN0aW9uXCI6ZltlXT1cbmc7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJ1bmRlZmluZWRcIjp2YXIgaD1jLmdldChnKTtmW2VdPWghPT1JP2g6YmEoZyxiLGMpfX1jPWN8fG5ldyBsYTthPWIoYSk7aWYoIShcIm9iamVjdFwiPT10eXBlb2YgYSYmYSE9PXAmJmEhPT1JJiYhKGEgaW5zdGFuY2VvZiBEYXRlKSkpcmV0dXJuIGE7dmFyIGY9YSBpbnN0YW5jZW9mIEFycmF5P1tdOnt9O2Muc2F2ZShhLGYpO3ZhciBnPWE7aWYoZyBpbnN0YW5jZW9mIEFycmF5KXtmb3IodmFyIGg9MDtoPGcubGVuZ3RoO2grKyllKGgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGcudG9KU09OJiZlKFwidG9KU09OXCIpfWVsc2UgZm9yKGggaW4gZyllKGgpO3JldHVybiBmfWZ1bmN0aW9uIGNhKGEsZCl7aWYoYSlpZig4PT1hLm5vZGVUeXBlKXt2YXIgYz1iLnMuVWEoYS5ub2RlVmFsdWUpO2MhPXAmJmQucHVzaCh7c2I6YSxGYjpjfSl9ZWxzZSBpZigxPT1hLm5vZGVUeXBlKWZvcih2YXIgYz0wLGU9YS5jaGlsZE5vZGVzLGY9ZS5sZW5ndGg7YzxmO2MrKyljYShlW2NdLFxuZCl9ZnVuY3Rpb24gUShhLGQsYyxlKXtiLmNbYV09e2luaXQ6ZnVuY3Rpb24oYSl7Yi5hLmYuc2V0KGEsZGEse30pO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczptfX0sdXBkYXRlOmZ1bmN0aW9uKGEsZyxoLGssbCl7aD1iLmEuZi5nZXQoYSxkYSk7Zz1iLmEuZChnKCkpO2s9IWMhPT0hZzt2YXIgbj0haC5aYTtpZihufHxkfHxrIT09aC5xYiluJiYoaC5aYT1iLmEuSWEoYi5lLmNoaWxkTm9kZXMoYSksbSkpLGs/KG58fGIuZS5OKGEsYi5hLklhKGguWmEpKSxiLkVhKGU/ZShsLGcpOmwsYSkpOmIuZS5ZKGEpLGgucWI9a319O2IuZy5RW2FdPXI7Yi5lLklbYV09bX1mdW5jdGlvbiBlYShhLGQsYyl7YyYmZCE9PWIuay5xKGEpJiZiLmsuVChhLGQpO2QhPT1iLmsucShhKSYmYi5yLksoYi5hLkJhLHAsW2EsXCJjaGFuZ2VcIl0pfXZhciBiPVwidW5kZWZpbmVkXCIhPT10eXBlb2Ygdz93Ont9O2IuYj1mdW5jdGlvbihhLGQpe2Zvcih2YXIgYz1hLnNwbGl0KFwiLlwiKSxlPWIsZj0wO2Y8XG5jLmxlbmd0aC0xO2YrKyllPWVbY1tmXV07ZVtjW2MubGVuZ3RoLTFdXT1kfTtiLnA9ZnVuY3Rpb24oYSxiLGMpe2FbYl09Y307Yi52ZXJzaW9uPVwiMi4yLjFcIjtiLmIoXCJ2ZXJzaW9uXCIsYi52ZXJzaW9uKTtiLmE9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGQpe2lmKFwiaW5wdXRcIiE9PWIuYS51KGEpfHwhYS50eXBlfHxcImNsaWNrXCIhPWQudG9Mb3dlckNhc2UoKSlyZXR1cm4gcjt2YXIgYz1hLnR5cGU7cmV0dXJuXCJjaGVja2JveFwiPT1jfHxcInJhZGlvXCI9PWN9dmFyIGQ9L14oXFxzfFxcdTAwQTApK3woXFxzfFxcdTAwQTApKyQvZyxjPXt9LGU9e307Y1svRmlyZWZveFxcLzIvaS50ZXN0KGdhLnVzZXJBZ2VudCk/XCJLZXlib2FyZEV2ZW50XCI6XCJVSUV2ZW50c1wiXT1bXCJrZXl1cFwiLFwia2V5ZG93blwiLFwia2V5cHJlc3NcIl07Yy5Nb3VzZUV2ZW50cz1cImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIuc3BsaXQoXCIgXCIpO1xuZm9yKHZhciBmIGluIGMpe3ZhciBnPWNbZl07aWYoZy5sZW5ndGgpZm9yKHZhciBoPTAsaz1nLmxlbmd0aDtoPGs7aCsrKWVbZ1toXV09Zn12YXIgbD17cHJvcGVydHljaGFuZ2U6bX0sbixjPTM7Zj15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGc9Zi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlcIik7Zi5pbm5lckhUTUw9XCJcXHgzYyEtLVtpZiBndCBJRSBcIisgKytjK1wiXT48aT48L2k+PCFbZW5kaWZdLS1cXHgzZVwiLGdbMF07KTtuPTQ8Yz9jOkk7cmV0dXJue05hOltcImF1dGhlbnRpY2l0eV90b2tlblwiLC9eX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4oXy4qKT8kL10sbzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgZD0wLGM9YS5sZW5ndGg7ZDxjO2QrKyliKGFbZF0pfSxpOmZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmluZGV4T2YpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiKTtmb3IodmFyIGQ9MCxjPWEubGVuZ3RoO2Q8XG5jO2QrKylpZihhW2RdPT09YilyZXR1cm4gZDtyZXR1cm4tMX0sbGI6ZnVuY3Rpb24oYSxiLGQpe2Zvcih2YXIgYz0wLGU9YS5sZW5ndGg7YzxlO2MrKylpZihiLmNhbGwoZCxhW2NdKSlyZXR1cm4gYVtjXTtyZXR1cm4gcH0sZ2E6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuaShhLGQpOzA8PWMmJmEuc3BsaWNlKGMsMSl9LEdhOmZ1bmN0aW9uKGEpe2E9YXx8W107Zm9yKHZhciBkPVtdLGM9MCxlPWEubGVuZ3RoO2M8ZTtjKyspMD5iLmEuaShkLGFbY10pJiZkLnB1c2goYVtjXSk7cmV0dXJuIGR9LFY6ZnVuY3Rpb24oYSxiKXthPWF8fFtdO2Zvcih2YXIgZD1bXSxjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWQucHVzaChiKGFbY10pKTtyZXR1cm4gZH0sZmE6ZnVuY3Rpb24oYSxiKXthPWF8fFtdO2Zvcih2YXIgZD1bXSxjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWIoYVtjXSkmJmQucHVzaChhW2NdKTtyZXR1cm4gZH0sUDpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxcbmIpO2Vsc2UgZm9yKHZhciBkPTAsYz1iLmxlbmd0aDtkPGM7ZCsrKWEucHVzaChiW2RdKTtyZXR1cm4gYX0sZXh0ZW5kOmZ1bmN0aW9uKGEsYil7aWYoYilmb3IodmFyIGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiYoYVtkXT1iW2RdKTtyZXR1cm4gYX0sa2E6ZnVuY3Rpb24oYSl7Zm9yKDthLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlTm9kZShhLmZpcnN0Q2hpbGQpfSxIYjpmdW5jdGlvbihhKXthPWIuYS5MKGEpO2Zvcih2YXIgZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz0wLGU9YS5sZW5ndGg7YzxlO2MrKylkLmFwcGVuZENoaWxkKGIuQShhW2NdKSk7cmV0dXJuIGR9LElhOmZ1bmN0aW9uKGEsZCl7Zm9yKHZhciBjPTAsZT1hLmxlbmd0aCxnPVtdO2M8ZTtjKyspe3ZhciBmPWFbY10uY2xvbmVOb2RlKG0pO2cucHVzaChkP2IuQShmKTpmKX1yZXR1cm4gZ30sTjpmdW5jdGlvbihhLGQpe2IuYS5rYShhKTtpZihkKWZvcih2YXIgYz0wLGU9ZC5sZW5ndGg7YzxlO2MrKylhLmFwcGVuZENoaWxkKGRbY10pfSxcbllhOmZ1bmN0aW9uKGEsZCl7dmFyIGM9YS5ub2RlVHlwZT9bYV06YTtpZigwPGMubGVuZ3RoKXtmb3IodmFyIGU9Y1swXSxnPWUucGFyZW50Tm9kZSxmPTAsaD1kLmxlbmd0aDtmPGg7ZisrKWcuaW5zZXJ0QmVmb3JlKGRbZl0sZSk7Zj0wO2ZvcihoPWMubGVuZ3RoO2Y8aDtmKyspYi5yZW1vdmVOb2RlKGNbZl0pfX0sYmI6ZnVuY3Rpb24oYSxiKXs3Pm4/YS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLGIpOmEuc2VsZWN0ZWQ9Yn0sRDpmdW5jdGlvbihhKXtyZXR1cm4oYXx8XCJcIikucmVwbGFjZShkLFwiXCIpfSxSYjpmdW5jdGlvbihhLGQpe2Zvcih2YXIgYz1bXSxlPShhfHxcIlwiKS5zcGxpdChkKSxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKXt2YXIgaD1iLmEuRChlW2ZdKTtcIlwiIT09aCYmYy5wdXNoKGgpfXJldHVybiBjfSxPYjpmdW5jdGlvbihhLGIpe2E9YXx8XCJcIjtyZXR1cm4gYi5sZW5ndGg+YS5sZW5ndGg/cjphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LHRiOmZ1bmN0aW9uKGEsYil7aWYoYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbilyZXR1cm4gMTY9PVxuKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSkmMTYpO2Zvcig7YSE9cDspe2lmKGE9PWIpcmV0dXJuIG07YT1hLnBhcmVudE5vZGV9cmV0dXJuIHJ9LFg6ZnVuY3Rpb24oYSl7cmV0dXJuIGIuYS50YihhLGEub3duZXJEb2N1bWVudCl9LHU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LG46ZnVuY3Rpb24oYixkLGMpe3ZhciBlPW4mJmxbZF07aWYoIWUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKXtpZihhKGIsZCkpe3ZhciBmPWM7Yz1mdW5jdGlvbihhLGIpe3ZhciBkPXRoaXMuY2hlY2tlZDtiJiYodGhpcy5jaGVja2VkPWIubmIhPT1tKTtmLmNhbGwodGhpcyxhKTt0aGlzLmNoZWNrZWQ9ZH19RihiKS5iaW5kKGQsYyl9ZWxzZSFlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmFkZEV2ZW50TGlzdGVuZXI/Yi5hZGRFdmVudExpc3RlbmVyKGQsYyxyKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5hdHRhY2hFdmVudD9iLmF0dGFjaEV2ZW50KFwib25cIitcbmQsZnVuY3Rpb24oYSl7Yy5jYWxsKGIsYSl9KTpqKEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYWRkRXZlbnRMaXN0ZW5lciBvciBhdHRhY2hFdmVudFwiKSl9LEJhOmZ1bmN0aW9uKGIsZCl7KCFifHwhYi5ub2RlVHlwZSkmJmooRXJyb3IoXCJlbGVtZW50IG11c3QgYmUgYSBET00gbm9kZSB3aGVuIGNhbGxpbmcgdHJpZ2dlckV2ZW50XCIpKTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgRil7dmFyIGM9W107YShiLGQpJiZjLnB1c2goe25iOmIuY2hlY2tlZH0pO0YoYikudHJpZ2dlcihkLGMpfWVsc2VcImZ1bmN0aW9uXCI9PXR5cGVvZiB5LmNyZWF0ZUV2ZW50P1wiZnVuY3Rpb25cIj09dHlwZW9mIGIuZGlzcGF0Y2hFdmVudD8oYz15LmNyZWF0ZUV2ZW50KGVbZF18fFwiSFRNTEV2ZW50c1wiKSxjLmluaXRFdmVudChkLG0sbSx4LDAsMCwwLDAsMCxyLHIscixyLDAsYiksYi5kaXNwYXRjaEV2ZW50KGMpKTpqKEVycm9yKFwiVGhlIHN1cHBsaWVkIGVsZW1lbnQgZG9lc24ndCBzdXBwb3J0IGRpc3BhdGNoRXZlbnRcIikpOlxuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZmlyZUV2ZW50PyhhKGIsZCkmJihiLmNoZWNrZWQ9Yi5jaGVja2VkIT09bSksYi5maXJlRXZlbnQoXCJvblwiK2QpKTpqKEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdHJpZ2dlcmluZyBldmVudHNcIikpfSxkOmZ1bmN0aW9uKGEpe3JldHVybiBiLiQoYSk/YSgpOmF9LHVhOmZ1bmN0aW9uKGEpe3JldHVybiBiLiQoYSk/YS50KCk6YX0sZGE6ZnVuY3Rpb24oYSxkLGMpe2lmKGQpe3ZhciBlPS9bXFx3LV0rL2csZj1hLmNsYXNzTmFtZS5tYXRjaChlKXx8W107Yi5hLm8oZC5tYXRjaChlKSxmdW5jdGlvbihhKXt2YXIgZD1iLmEuaShmLGEpOzA8PWQ/Y3x8Zi5zcGxpY2UoZCwxKTpjJiZmLnB1c2goYSl9KTthLmNsYXNzTmFtZT1mLmpvaW4oXCIgXCIpfX0sY2I6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKTtpZihjPT09cHx8Yz09PUkpYz1cIlwiO2lmKDM9PT1hLm5vZGVUeXBlKWEuZGF0YT1jO2Vsc2V7dmFyIGU9Yi5lLmZpcnN0Q2hpbGQoYSk7XG4hZXx8MyE9ZS5ub2RlVHlwZXx8Yi5lLm5leHRTaWJsaW5nKGUpP2IuZS5OKGEsW3kuY3JlYXRlVGV4dE5vZGUoYyldKTplLmRhdGE9YztiLmEud2IoYSl9fSxhYjpmdW5jdGlvbihhLGIpe2EubmFtZT1iO2lmKDc+PW4pdHJ5e2EubWVyZ2VBdHRyaWJ1dGVzKHkuY3JlYXRlRWxlbWVudChcIjxpbnB1dCBuYW1lPSdcIithLm5hbWUrXCInLz5cIikscil9Y2F0Y2goZCl7fX0sd2I6ZnVuY3Rpb24oYSl7OTw9biYmKGE9MT09YS5ub2RlVHlwZT9hOmEucGFyZW50Tm9kZSxhLnN0eWxlJiYoYS5zdHlsZS56b29tPWEuc3R5bGUuem9vbSkpfSx1YjpmdW5jdGlvbihhKXtpZig5PD1uKXt2YXIgYj1hLnN0eWxlLndpZHRoO2Euc3R5bGUud2lkdGg9MDthLnN0eWxlLndpZHRoPWJ9fSxMYjpmdW5jdGlvbihhLGQpe2E9Yi5hLmQoYSk7ZD1iLmEuZChkKTtmb3IodmFyIGM9W10sZT1hO2U8PWQ7ZSsrKWMucHVzaChlKTtyZXR1cm4gY30sTDpmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sZD0wLGM9YS5sZW5ndGg7ZDxcbmM7ZCsrKWIucHVzaChhW2RdKTtyZXR1cm4gYn0sUGI6Nj09PW4sUWI6Nz09PW4sWjpuLE9hOmZ1bmN0aW9uKGEsZCl7Zm9yKHZhciBjPWIuYS5MKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGIuYS5MKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKSkpLGU9XCJzdHJpbmdcIj09dHlwZW9mIGQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZT09PWR9OmZ1bmN0aW9uKGEpe3JldHVybiBkLnRlc3QoYS5uYW1lKX0sZj1bXSxnPWMubGVuZ3RoLTE7MDw9ZztnLS0pZShjW2ddKSYmZi5wdXNoKGNbZ10pO3JldHVybiBmfSxJYjpmdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYSYmKGE9Yi5hLkQoYSkpP3guSlNPTiYmeC5KU09OLnBhcnNlP3guSlNPTi5wYXJzZShhKToobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiK2EpKSgpOnB9LHhhOmZ1bmN0aW9uKGEsZCxjKXsoXCJ1bmRlZmluZWRcIj09dHlwZW9mIEpTT058fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBKU09OLnN0cmluZ2lmeSkmJlxuaihFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpKTtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoYi5hLmQoYSksZCxjKX0sSmI6ZnVuY3Rpb24oYSxkLGMpe2M9Y3x8e307dmFyIGU9Yy5wYXJhbXN8fHt9LGY9Yy5pbmNsdWRlRmllbGRzfHx0aGlzLk5hLGc9YTtpZihcIm9iamVjdFwiPT10eXBlb2YgYSYmXCJmb3JtXCI9PT1iLmEudShhKSlmb3IodmFyIGc9YS5hY3Rpb24saD1mLmxlbmd0aC0xOzA8PWg7aC0tKWZvcih2YXIgaz1iLmEuT2EoYSxmW2hdKSxsPWsubGVuZ3RoLTE7MDw9bDtsLS0pZVtrW2xdLm5hbWVdPWtbbF0udmFsdWU7ZD1iLmEuZChkKTt2YXIgbj15LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xubi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO24uYWN0aW9uPWc7bi5tZXRob2Q9XCJwb3N0XCI7Zm9yKHZhciB3IGluIGQpYT15LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLm5hbWU9dyxhLnZhbHVlPWIuYS54YShiLmEuZChkW3ddKSksbi5hcHBlbmRDaGlsZChhKTtmb3IodyBpbiBlKWE9eS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS5uYW1lPXcsYS52YWx1ZT1lW3ddLG4uYXBwZW5kQ2hpbGQoYSk7eS5ib2R5LmFwcGVuZENoaWxkKG4pO2Muc3VibWl0dGVyP2Muc3VibWl0dGVyKG4pOm4uc3VibWl0KCk7c2V0VGltZW91dChmdW5jdGlvbigpe24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKX0sMCl9fX07Yi5iKFwidXRpbHNcIixiLmEpO2IuYihcInV0aWxzLmFycmF5Rm9yRWFjaFwiLGIuYS5vKTtiLmIoXCJ1dGlscy5hcnJheUZpcnN0XCIsYi5hLmxiKTtiLmIoXCJ1dGlscy5hcnJheUZpbHRlclwiLGIuYS5mYSk7Yi5iKFwidXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlc1wiLGIuYS5HYSk7Yi5iKFwidXRpbHMuYXJyYXlJbmRleE9mXCIsXG5iLmEuaSk7Yi5iKFwidXRpbHMuYXJyYXlNYXBcIixiLmEuVik7Yi5iKFwidXRpbHMuYXJyYXlQdXNoQWxsXCIsYi5hLlApO2IuYihcInV0aWxzLmFycmF5UmVtb3ZlSXRlbVwiLGIuYS5nYSk7Yi5iKFwidXRpbHMuZXh0ZW5kXCIsYi5hLmV4dGVuZCk7Yi5iKFwidXRpbHMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3RcIixiLmEuTmEpO2IuYihcInV0aWxzLmdldEZvcm1GaWVsZHNcIixiLmEuT2EpO2IuYihcInV0aWxzLnBlZWtPYnNlcnZhYmxlXCIsYi5hLnVhKTtiLmIoXCJ1dGlscy5wb3N0SnNvblwiLGIuYS5KYik7Yi5iKFwidXRpbHMucGFyc2VKc29uXCIsYi5hLkliKTtiLmIoXCJ1dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlclwiLGIuYS5uKTtiLmIoXCJ1dGlscy5zdHJpbmdpZnlKc29uXCIsYi5hLnhhKTtiLmIoXCJ1dGlscy5yYW5nZVwiLGIuYS5MYik7Yi5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYi5hLmRhKTtiLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixiLmEuQmEpO2IuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixcbmIuYS5kKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO2E9Yy5zaGlmdCgpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBiLmFwcGx5KGEsYy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpfX0pO2IuYS5mPW5ldyBmdW5jdGlvbigpe3ZhciBhPTAsZD1cIl9fa29fX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGM9e307cmV0dXJue2dldDpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5mLmxhKGEscik7cmV0dXJuIGM9PT1JP0k6Y1tkXX0sc2V0OmZ1bmN0aW9uKGEsZCxjKXtjPT09SSYmYi5hLmYubGEoYSxyKT09PUl8fChiLmEuZi5sYShhLG0pW2RdPWMpfSxsYTpmdW5jdGlvbihiLGYpe3ZhciBnPWJbZF07aWYoIWd8fCEoXCJudWxsXCIhPT1nJiZjW2ddKSl7aWYoIWYpcmV0dXJuIEk7Zz1iW2RdPVwia29cIitcbmErKztjW2ddPXt9fXJldHVybiBjW2ddfSxjbGVhcjpmdW5jdGlvbihhKXt2YXIgYj1hW2RdO3JldHVybiBiPyhkZWxldGUgY1tiXSxhW2RdPXAsbSk6cn19fTtiLmIoXCJ1dGlscy5kb21EYXRhXCIsYi5hLmYpO2IuYihcInV0aWxzLmRvbURhdGEuY2xlYXJcIixiLmEuZi5jbGVhcik7Yi5hLkY9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGQpe3ZhciBlPWIuYS5mLmdldChhLGMpO2U9PT1JJiZkJiYoZT1bXSxiLmEuZi5zZXQoYSxjLGUpKTtyZXR1cm4gZX1mdW5jdGlvbiBkKGMpe3ZhciBlPWEoYyxyKTtpZihlKWZvcih2YXIgZT1lLnNsaWNlKDApLGs9MDtrPGUubGVuZ3RoO2srKyllW2tdKGMpO2IuYS5mLmNsZWFyKGMpO1wiZnVuY3Rpb25cIj09dHlwZW9mIEYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEYuY2xlYW5EYXRhJiZGLmNsZWFuRGF0YShbY10pO2lmKGZbYy5ub2RlVHlwZV0pZm9yKGU9Yy5maXJzdENoaWxkO2M9ZTspZT1jLm5leHRTaWJsaW5nLDg9PT1jLm5vZGVUeXBlJiZkKGMpfVxudmFyIGM9XCJfX2tvX2RvbU5vZGVEaXNwb3NhbF9fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZT17MTptLDg6bSw5Om19LGY9ezE6bSw5Om19O3JldHVybntDYTpmdW5jdGlvbihiLGQpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGQmJmooRXJyb3IoXCJDYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2EoYixtKS5wdXNoKGQpfSxYYTpmdW5jdGlvbihkLGUpe3ZhciBmPWEoZCxyKTtmJiYoYi5hLmdhKGYsZSksMD09Zi5sZW5ndGgmJmIuYS5mLnNldChkLGMsSSkpfSxBOmZ1bmN0aW9uKGEpe2lmKGVbYS5ub2RlVHlwZV0mJihkKGEpLGZbYS5ub2RlVHlwZV0pKXt2YXIgYz1bXTtiLmEuUChjLGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKTtmb3IodmFyIGs9MCxsPWMubGVuZ3RoO2s8bDtrKyspZChjW2tdKX1yZXR1cm4gYX0scmVtb3ZlTm9kZTpmdW5jdGlvbihhKXtiLkEoYSk7YS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSl9fX07Yi5BPWIuYS5GLkE7Yi5yZW1vdmVOb2RlPVxuYi5hLkYucmVtb3ZlTm9kZTtiLmIoXCJjbGVhbk5vZGVcIixiLkEpO2IuYihcInJlbW92ZU5vZGVcIixiLnJlbW92ZU5vZGUpO2IuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbFwiLGIuYS5GKTtiLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrXCIsYi5hLkYuQ2EpO2IuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2tcIixiLmEuRi5YYSk7Yi5hLnRhPWZ1bmN0aW9uKGEpe3ZhciBkO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKWlmKEYucGFyc2VIVE1MKWQ9Ri5wYXJzZUhUTUwoYSk7ZWxzZXtpZigoZD1GLmNsZWFuKFthXSkpJiZkWzBdKXtmb3IoYT1kWzBdO2EucGFyZW50Tm9kZSYmMTEhPT1hLnBhcmVudE5vZGUubm9kZVR5cGU7KWE9YS5wYXJlbnROb2RlO2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfX1lbHNle3ZhciBjPWIuYS5EKGEpLnRvTG93ZXJDYXNlKCk7ZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jPWMubWF0Y2goL148KHRoZWFkfHRib2R5fHRmb290KS8pJiZbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdfHwhYy5pbmRleE9mKFwiPHRyXCIpJiZbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdfHwoIWMuaW5kZXhPZihcIjx0ZFwiKXx8IWMuaW5kZXhPZihcIjx0aFwiKSkmJlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl18fFswLFwiXCIsXCJcIl07YT1cImlnbm9yZWQ8ZGl2PlwiK2NbMV0rYStjWzJdK1wiPC9kaXY+XCI7Zm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIHguaW5uZXJTaGl2P2QuYXBwZW5kQ2hpbGQoeC5pbm5lclNoaXYoYSkpOmQuaW5uZXJIVE1MPWE7Y1swXS0tOylkPWQubGFzdENoaWxkO2Q9Yi5hLkwoZC5sYXN0Q2hpbGQuY2hpbGROb2Rlcyl9cmV0dXJuIGR9O2IuYS5jYT1mdW5jdGlvbihhLGQpe2IuYS5rYShhKTtkPWIuYS5kKGQpO2lmKGQhPT1wJiZkIT09SSlpZihcInN0cmluZ1wiIT10eXBlb2YgZCYmKGQ9ZC50b1N0cmluZygpKSxcblwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKUYoYSkuaHRtbChkKTtlbHNlIGZvcih2YXIgYz1iLmEudGEoZCksZT0wO2U8Yy5sZW5ndGg7ZSsrKWEuYXBwZW5kQ2hpbGQoY1tlXSl9O2IuYihcInV0aWxzLnBhcnNlSHRtbEZyYWdtZW50XCIsYi5hLnRhKTtiLmIoXCJ1dGlscy5zZXRIdG1sXCIsYi5hLmNhKTt2YXIgUj17fTtiLnM9e3JhOmZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGEmJmooRXJyb3IoXCJZb3UgY2FuIG9ubHkgcGFzcyBhIGZ1bmN0aW9uIHRvIGtvLm1lbW9pemF0aW9uLm1lbW9pemUoKVwiKSk7dmFyIGI9KDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKSsoNDI5NDk2NzI5NiooMStNYXRoLnJhbmRvbSgpKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1JbYl09YTtyZXR1cm5cIlxceDNjIS0tW2tvX21lbW86XCIrYitcIl0tLVxceDNlXCJ9LGhiOmZ1bmN0aW9uKGEsYil7dmFyIGM9UlthXTtjPT09SSYmaihFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIitcbmErXCIuIFBlcmhhcHMgaXQncyBhbHJlYWR5IGJlZW4gdW5tZW1vaXplZC5cIikpO3RyeXtyZXR1cm4gYy5hcHBseShwLGJ8fFtdKSxtfWZpbmFsbHl7ZGVsZXRlIFJbYV19fSxpYjpmdW5jdGlvbihhLGQpe3ZhciBjPVtdO2NhKGEsYyk7Zm9yKHZhciBlPTAsZj1jLmxlbmd0aDtlPGY7ZSsrKXt2YXIgZz1jW2VdLnNiLGg9W2ddO2QmJmIuYS5QKGgsZCk7Yi5zLmhiKGNbZV0uRmIsaCk7Zy5ub2RlVmFsdWU9XCJcIjtnLnBhcmVudE5vZGUmJmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnKX19LFVhOmZ1bmN0aW9uKGEpe3JldHVybihhPWEubWF0Y2goL15cXFtrb19tZW1vXFw6KC4qPylcXF0kLykpP2FbMV06cH19O2IuYihcIm1lbW9pemF0aW9uXCIsYi5zKTtiLmIoXCJtZW1vaXphdGlvbi5tZW1vaXplXCIsYi5zLnJhKTtiLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVcIixiLnMuaGIpO2IuYihcIm1lbW9pemF0aW9uLnBhcnNlTWVtb1RleHRcIixiLnMuVWEpO2IuYihcIm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50c1wiLFxuYi5zLmliKTtiLk1hPXt0aHJvdHRsZTpmdW5jdGlvbihhLGQpe2EudGhyb3R0bGVFdmFsdWF0aW9uPWQ7dmFyIGM9cDtyZXR1cm4gYi5qKHtyZWFkOmEsd3JpdGU6ZnVuY3Rpb24oYil7Y2xlYXJUaW1lb3V0KGMpO2M9c2V0VGltZW91dChmdW5jdGlvbigpe2EoYil9LGQpfX0pfSxub3RpZnk6ZnVuY3Rpb24oYSxkKXthLmVxdWFsaXR5Q29tcGFyZXI9XCJhbHdheXNcIj09ZD91KHIpOmIubS5mbi5lcXVhbGl0eUNvbXBhcmVyO3JldHVybiBhfX07Yi5iKFwiZXh0ZW5kZXJzXCIsYi5NYSk7Yi5mYj1mdW5jdGlvbihhLGQsYyl7dGhpcy50YXJnZXQ9YTt0aGlzLmhhPWQ7dGhpcy5yYj1jO2IucCh0aGlzLFwiZGlzcG9zZVwiLHRoaXMuQil9O2IuZmIucHJvdG90eXBlLkI9ZnVuY3Rpb24oKXt0aGlzLkNiPW07dGhpcy5yYigpfTtiLlM9ZnVuY3Rpb24oKXt0aGlzLnc9e307Yi5hLmV4dGVuZCh0aGlzLGIuUy5mbik7Yi5wKHRoaXMsXCJzdWJzY3JpYmVcIix0aGlzLnlhKTtiLnAodGhpcyxcImV4dGVuZFwiLFxudGhpcy5leHRlbmQpO2IucCh0aGlzLFwiZ2V0U3Vic2NyaXB0aW9uc0NvdW50XCIsdGhpcy55Yil9O2IuUy5mbj17eWE6ZnVuY3Rpb24oYSxkLGMpe2M9Y3x8XCJjaGFuZ2VcIjt2YXIgZT1uZXcgYi5mYih0aGlzLGQ/YS5iaW5kKGQpOmEsZnVuY3Rpb24oKXtiLmEuZ2EodGhpcy53W2NdLGUpfS5iaW5kKHRoaXMpKTt0aGlzLndbY118fCh0aGlzLndbY109W10pO3RoaXMud1tjXS5wdXNoKGUpO3JldHVybiBlfSxub3RpZnlTdWJzY3JpYmVyczpmdW5jdGlvbihhLGQpe2Q9ZHx8XCJjaGFuZ2VcIjt0aGlzLndbZF0mJmIuci5LKGZ1bmN0aW9uKCl7Yi5hLm8odGhpcy53W2RdLnNsaWNlKDApLGZ1bmN0aW9uKGIpe2ImJmIuQ2IhPT1tJiZiLmhhKGEpfSl9LHRoaXMpfSx5YjpmdW5jdGlvbigpe3ZhciBhPTAsYjtmb3IoYiBpbiB0aGlzLncpdGhpcy53Lmhhc093blByb3BlcnR5KGIpJiYoYSs9dGhpcy53W2JdLmxlbmd0aCk7cmV0dXJuIGF9LGV4dGVuZDpmdW5jdGlvbihhKXt2YXIgZD10aGlzO2lmKGEpZm9yKHZhciBjIGluIGEpe3ZhciBlPVxuYi5NYVtjXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYoZD1lKGQsYVtjXSkpfXJldHVybiBkfX07Yi5RYT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnlhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5vdGlmeVN1YnNjcmliZXJzfTtiLmIoXCJzdWJzY3JpYmFibGVcIixiLlMpO2IuYihcImlzU3Vic2NyaWJhYmxlXCIsYi5RYSk7dmFyIEM9W107Yi5yPXttYjpmdW5jdGlvbihhKXtDLnB1c2goe2hhOmEsTGE6W119KX0sZW5kOmZ1bmN0aW9uKCl7Qy5wb3AoKX0sV2E6ZnVuY3Rpb24oYSl7Yi5RYShhKXx8aihFcnJvcihcIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llc1wiKSk7aWYoMDxDLmxlbmd0aCl7dmFyIGQ9Q1tDLmxlbmd0aC0xXTtkJiYhKDA8PWIuYS5pKGQuTGEsYSkpJiYoZC5MYS5wdXNoKGEpLGQuaGEoYSkpfX0sSzpmdW5jdGlvbihhLGIsYyl7dHJ5e3JldHVybiBDLnB1c2gocCksYS5hcHBseShiLGN8fFtdKX1maW5hbGx5e0MucG9wKCl9fX07XG52YXIgbWE9e3VuZGVmaW5lZDptLFwiYm9vbGVhblwiOm0sbnVtYmVyOm0sc3RyaW5nOm19O2IubT1mdW5jdGlvbihhKXtmdW5jdGlvbiBkKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXtpZighZC5lcXVhbGl0eUNvbXBhcmVyfHwhZC5lcXVhbGl0eUNvbXBhcmVyKGMsYXJndW1lbnRzWzBdKSlkLkgoKSxjPWFyZ3VtZW50c1swXSxkLkcoKTtyZXR1cm4gdGhpc31iLnIuV2EoZCk7cmV0dXJuIGN9dmFyIGM9YTtiLlMuY2FsbChkKTtkLnQ9ZnVuY3Rpb24oKXtyZXR1cm4gY307ZC5HPWZ1bmN0aW9uKCl7ZC5ub3RpZnlTdWJzY3JpYmVycyhjKX07ZC5IPWZ1bmN0aW9uKCl7ZC5ub3RpZnlTdWJzY3JpYmVycyhjLFwiYmVmb3JlQ2hhbmdlXCIpfTtiLmEuZXh0ZW5kKGQsYi5tLmZuKTtiLnAoZCxcInBlZWtcIixkLnQpO2IucChkLFwidmFsdWVIYXNNdXRhdGVkXCIsZC5HKTtiLnAoZCxcInZhbHVlV2lsbE11dGF0ZVwiLGQuSCk7cmV0dXJuIGR9O2IubS5mbj17ZXF1YWxpdHlDb21wYXJlcjpmdW5jdGlvbihhLFxuYil7cmV0dXJuIGE9PT1wfHx0eXBlb2YgYSBpbiBtYT9hPT09YjpyfX07dmFyIEU9Yi5tLktiPVwiX19rb19wcm90b19fXCI7Yi5tLmZuW0VdPWIubTtiLm1hPWZ1bmN0aW9uKGEsZCl7cmV0dXJuIGE9PT1wfHxhPT09SXx8YVtFXT09PUk/cjphW0VdPT09ZD9tOmIubWEoYVtFXSxkKX07Yi4kPWZ1bmN0aW9uKGEpe3JldHVybiBiLm1hKGEsYi5tKX07Yi5SYT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhW0VdPT09Yi5tfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhW0VdPT09Yi5qJiZhLnpiP206cn07Yi5iKFwib2JzZXJ2YWJsZVwiLGIubSk7Yi5iKFwiaXNPYnNlcnZhYmxlXCIsYi4kKTtiLmIoXCJpc1dyaXRlYWJsZU9ic2VydmFibGVcIixiLlJhKTtiLlI9ZnVuY3Rpb24oYSl7MD09YXJndW1lbnRzLmxlbmd0aCYmKGE9W10pO2EhPT1wJiYoYSE9PUkmJiEoXCJsZW5ndGhcImluIGEpKSYmaihFcnJvcihcIlRoZSBhcmd1bWVudCBwYXNzZWQgd2hlbiBpbml0aWFsaXppbmcgYW4gb2JzZXJ2YWJsZSBhcnJheSBtdXN0IGJlIGFuIGFycmF5LCBvciBudWxsLCBvciB1bmRlZmluZWQuXCIpKTtcbnZhciBkPWIubShhKTtiLmEuZXh0ZW5kKGQsYi5SLmZuKTtyZXR1cm4gZH07Yi5SLmZuPXtyZW1vdmU6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXMudCgpLGM9W10sZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6ZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1hfSxmPTA7ZjxiLmxlbmd0aDtmKyspe3ZhciBnPWJbZl07ZShnKSYmKDA9PT1jLmxlbmd0aCYmdGhpcy5IKCksYy5wdXNoKGcpLGIuc3BsaWNlKGYsMSksZi0tKX1jLmxlbmd0aCYmdGhpcy5HKCk7cmV0dXJuIGN9LHJlbW92ZUFsbDpmdW5jdGlvbihhKXtpZihhPT09SSl7dmFyIGQ9dGhpcy50KCksYz1kLnNsaWNlKDApO3RoaXMuSCgpO2Quc3BsaWNlKDAsZC5sZW5ndGgpO3RoaXMuRygpO3JldHVybiBjfXJldHVybiFhP1tdOnRoaXMucmVtb3ZlKGZ1bmN0aW9uKGQpe3JldHVybiAwPD1iLmEuaShhLGQpfSl9LGRlc3Ryb3k6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy50KCksYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6ZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1cbmF9O3RoaXMuSCgpO2Zvcih2YXIgZT1iLmxlbmd0aC0xOzA8PWU7ZS0tKWMoYltlXSkmJihiW2VdLl9kZXN0cm95PW0pO3RoaXMuRygpfSxkZXN0cm95QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09ST90aGlzLmRlc3Ryb3kodShtKSk6IWE/W106dGhpcy5kZXN0cm95KGZ1bmN0aW9uKGQpe3JldHVybiAwPD1iLmEuaShhLGQpfSl9LGluZGV4T2Y6ZnVuY3Rpb24oYSl7dmFyIGQ9dGhpcygpO3JldHVybiBiLmEuaShkLGEpfSxyZXBsYWNlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5pbmRleE9mKGEpOzA8PWMmJih0aGlzLkgoKSx0aGlzLnQoKVtjXT1iLHRoaXMuRygpKX19O2IuYS5vKFwicG9wIHB1c2ggcmV2ZXJzZSBzaGlmdCBzb3J0IHNwbGljZSB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2IuUi5mblthXT1mdW5jdGlvbigpe3ZhciBiPXRoaXMudCgpO3RoaXMuSCgpO2I9YlthXS5hcHBseShiLGFyZ3VtZW50cyk7dGhpcy5HKCk7cmV0dXJuIGJ9fSk7Yi5hLm8oW1wic2xpY2VcIl0sXG5mdW5jdGlvbihhKXtiLlIuZm5bYV09ZnVuY3Rpb24oKXt2YXIgYj10aGlzKCk7cmV0dXJuIGJbYV0uYXBwbHkoYixhcmd1bWVudHMpfX0pO2IuYihcIm9ic2VydmFibGVBcnJheVwiLGIuUik7Yi5qPWZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKCl7Yi5hLm8oeixmdW5jdGlvbihhKXthLkIoKX0pO3o9W119ZnVuY3Rpb24gZigpe3ZhciBhPWgudGhyb3R0bGVFdmFsdWF0aW9uO2EmJjA8PWE/KGNsZWFyVGltZW91dCh0KSx0PXNldFRpbWVvdXQoZyxhKSk6ZygpfWZ1bmN0aW9uIGcoKXtpZighcSlpZihuJiZ3KCkpQSgpO2Vsc2V7cT1tO3RyeXt2YXIgYT1iLmEuVih6LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRhcmdldH0pO2Iuci5tYihmdW5jdGlvbihjKXt2YXIgZDswPD0oZD1iLmEuaShhLGMpKT9hW2RdPUk6ei5wdXNoKGMueWEoZikpfSk7Zm9yKHZhciBjPXMuY2FsbChkKSxlPWEubGVuZ3RoLTE7MDw9ZTtlLS0pYVtlXSYmei5zcGxpY2UoZSwxKVswXS5CKCk7bj1tO2gubm90aWZ5U3Vic2NyaWJlcnMobCxcblwiYmVmb3JlQ2hhbmdlXCIpO2w9Y31maW5hbGx5e2Iuci5lbmQoKX1oLm5vdGlmeVN1YnNjcmliZXJzKGwpO3E9cjt6Lmxlbmd0aHx8QSgpfX1mdW5jdGlvbiBoKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXJldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiB2P3YuYXBwbHkoZCxhcmd1bWVudHMpOmooRXJyb3IoXCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLlwiKSksdGhpcztufHxnKCk7Yi5yLldhKGgpO3JldHVybiBsfWZ1bmN0aW9uIGsoKXtyZXR1cm4hbnx8MDx6Lmxlbmd0aH12YXIgbCxuPXIscT1yLHM9YTtzJiZcIm9iamVjdFwiPT10eXBlb2Ygcz8oYz1zLHM9Yy5yZWFkKTooYz1jfHx7fSxzfHwocz1jLnJlYWQpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBzJiZqKEVycm9yKFwiUGFzcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGtvLmNvbXB1dGVkXCIpKTtcbnZhciB2PWMud3JpdGUsRz1jLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZHx8Yy5XfHxwLHc9Yy5kaXNwb3NlV2hlbnx8Yy5LYXx8dShyKSxBPWUsej1bXSx0PXA7ZHx8KGQ9Yy5vd25lcik7aC50PWZ1bmN0aW9uKCl7bnx8ZygpO3JldHVybiBsfTtoLnhiPWZ1bmN0aW9uKCl7cmV0dXJuIHoubGVuZ3RofTtoLnpiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLndyaXRlO2guQj1mdW5jdGlvbigpe0EoKX07aC5wYT1rO2IuUy5jYWxsKGgpO2IuYS5leHRlbmQoaCxiLmouZm4pO2IucChoLFwicGVla1wiLGgudCk7Yi5wKGgsXCJkaXNwb3NlXCIsaC5CKTtiLnAoaCxcImlzQWN0aXZlXCIsaC5wYSk7Yi5wKGgsXCJnZXREZXBlbmRlbmNpZXNDb3VudFwiLGgueGIpO2MuZGVmZXJFdmFsdWF0aW9uIT09bSYmZygpO2lmKEcmJmsoKSl7QT1mdW5jdGlvbigpe2IuYS5GLlhhKEcsYXJndW1lbnRzLmNhbGxlZSk7ZSgpfTtiLmEuRi5DYShHLEEpO3ZhciBEPXcsdz1mdW5jdGlvbigpe3JldHVybiFiLmEuWChHKXx8RCgpfX1yZXR1cm4gaH07XG5iLkJiPWZ1bmN0aW9uKGEpe3JldHVybiBiLm1hKGEsYi5qKX07dz1iLm0uS2I7Yi5qW3ddPWIubTtiLmouZm49e307Yi5qLmZuW3ddPWIuajtiLmIoXCJkZXBlbmRlbnRPYnNlcnZhYmxlXCIsYi5qKTtiLmIoXCJjb21wdXRlZFwiLGIuaik7Yi5iKFwiaXNDb21wdXRlZFwiLGIuQmIpO2IuZ2I9ZnVuY3Rpb24oYSl7MD09YXJndW1lbnRzLmxlbmd0aCYmaihFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIikpO3JldHVybiBiYShhLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYz0wO2IuJChhKSYmMTA+YztjKyspYT1hKCk7cmV0dXJuIGF9KX07Yi50b0pTT049ZnVuY3Rpb24oYSxkLGMpe2E9Yi5nYihhKTtyZXR1cm4gYi5hLnhhKGEsZCxjKX07Yi5iKFwidG9KU1wiLGIuZ2IpO2IuYihcInRvSlNPTlwiLGIudG9KU09OKTtiLms9e3E6ZnVuY3Rpb24oYSl7c3dpdGNoKGIuYS51KGEpKXtjYXNlIFwib3B0aW9uXCI6cmV0dXJuIGEuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX189PT1cbm0/Yi5hLmYuZ2V0KGEsYi5jLm9wdGlvbnMuc2EpOjc+PWIuYS5aP2EuZ2V0QXR0cmlidXRlTm9kZShcInZhbHVlXCIpLnNwZWNpZmllZD9hLnZhbHVlOmEudGV4dDphLnZhbHVlO2Nhc2UgXCJzZWxlY3RcIjpyZXR1cm4gMDw9YS5zZWxlY3RlZEluZGV4P2Iuay5xKGEub3B0aW9uc1thLnNlbGVjdGVkSW5kZXhdKTpJO2RlZmF1bHQ6cmV0dXJuIGEudmFsdWV9fSxUOmZ1bmN0aW9uKGEsZCl7c3dpdGNoKGIuYS51KGEpKXtjYXNlIFwib3B0aW9uXCI6c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwic3RyaW5nXCI6Yi5hLmYuc2V0KGEsYi5jLm9wdGlvbnMuc2EsSSk7XCJfX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfX1wiaW4gYSYmZGVsZXRlIGEuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX187YS52YWx1ZT1kO2JyZWFrO2RlZmF1bHQ6Yi5hLmYuc2V0KGEsYi5jLm9wdGlvbnMuc2EsZCksYS5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz1tLGEudmFsdWU9XCJudW1iZXJcIj09PXR5cGVvZiBkP1xuZDpcIlwifWJyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmb3IodmFyIGM9YS5vcHRpb25zLmxlbmd0aC0xOzA8PWM7Yy0tKWlmKGIuay5xKGEub3B0aW9uc1tjXSk9PWQpe2Euc2VsZWN0ZWRJbmRleD1jO2JyZWFrfWJyZWFrO2RlZmF1bHQ6aWYoZD09PXB8fGQ9PT1JKWQ9XCJcIjthLnZhbHVlPWR9fX07Yi5iKFwic2VsZWN0RXh0ZW5zaW9uc1wiLGIuayk7Yi5iKFwic2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWVcIixiLmsucSk7Yi5iKFwic2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlXCIsYi5rLlQpO3ZhciBrYT0vXFxAa29fdG9rZW5fKFxcZCspXFxAL2csbmE9W1widHJ1ZVwiLFwiZmFsc2VcIl0sb2E9L14oPzpbJF9hLXpdWyRcXHddKnwoLispKFxcLlxccypbJF9hLXpdWyRcXHddKnxcXFsuK1xcXSkpJC9pO2IuZz17UTpbXSxhYTpmdW5jdGlvbihhKXt2YXIgZD1iLmEuRChhKTtpZigzPmQubGVuZ3RoKXJldHVybltdO1wie1wiPT09ZC5jaGFyQXQoMCkmJihkPWQuc3Vic3RyaW5nKDEsZC5sZW5ndGgtMSkpO2E9W107Zm9yKHZhciBjPVxucCxlLGY9MDtmPGQubGVuZ3RoO2YrKyl7dmFyIGc9ZC5jaGFyQXQoZik7aWYoYz09PXApc3dpdGNoKGcpe2Nhc2UgJ1wiJzpjYXNlIFwiJ1wiOmNhc2UgXCIvXCI6Yz1mLGU9Z31lbHNlIGlmKGc9PWUmJlwiXFxcXFwiIT09ZC5jaGFyQXQoZi0xKSl7Zz1kLnN1YnN0cmluZyhjLGYrMSk7YS5wdXNoKGcpO3ZhciBoPVwiQGtvX3Rva2VuX1wiKyhhLmxlbmd0aC0xKStcIkBcIixkPWQuc3Vic3RyaW5nKDAsYykraCtkLnN1YnN0cmluZyhmKzEpLGY9Zi0oZy5sZW5ndGgtaC5sZW5ndGgpLGM9cH19ZT1jPXA7Zm9yKHZhciBrPTAsbD1wLGY9MDtmPGQubGVuZ3RoO2YrKyl7Zz1kLmNoYXJBdChmKTtpZihjPT09cClzd2l0Y2goZyl7Y2FzZSBcIntcIjpjPWY7bD1nO2U9XCJ9XCI7YnJlYWs7Y2FzZSBcIihcIjpjPWY7bD1nO2U9XCIpXCI7YnJlYWs7Y2FzZSBcIltcIjpjPWYsbD1nLGU9XCJdXCJ9Zz09PWw/aysrOmc9PT1lJiYoay0tLDA9PT1rJiYoZz1kLnN1YnN0cmluZyhjLGYrMSksYS5wdXNoKGcpLGg9XCJAa29fdG9rZW5fXCIrKGEubGVuZ3RoLVxuMSkrXCJAXCIsZD1kLnN1YnN0cmluZygwLGMpK2grZC5zdWJzdHJpbmcoZisxKSxmLT1nLmxlbmd0aC1oLmxlbmd0aCxjPXApKX1lPVtdO2Q9ZC5zcGxpdChcIixcIik7Yz0wO2ZvcihmPWQubGVuZ3RoO2M8ZjtjKyspaz1kW2NdLGw9ay5pbmRleE9mKFwiOlwiKSwwPGwmJmw8ay5sZW5ndGgtMT8oZz1rLnN1YnN0cmluZyhsKzEpLGUucHVzaCh7a2V5OlAoay5zdWJzdHJpbmcoMCxsKSxhKSx2YWx1ZTpQKGcsYSl9KSk6ZS5wdXNoKHt1bmtub3duOlAoayxhKX0pO3JldHVybiBlfSxiYTpmdW5jdGlvbihhKXt2YXIgZD1cInN0cmluZ1wiPT09dHlwZW9mIGE/Yi5nLmFhKGEpOmEsYz1bXTthPVtdO2Zvcih2YXIgZSxmPTA7ZT1kW2ZdO2YrKylpZigwPGMubGVuZ3RoJiZjLnB1c2goXCIsXCIpLGUua2V5KXt2YXIgZzthOntnPWUua2V5O3ZhciBoPWIuYS5EKGcpO3N3aXRjaChoLmxlbmd0aCYmaC5jaGFyQXQoMCkpe2Nhc2UgXCInXCI6Y2FzZSAnXCInOmJyZWFrIGE7ZGVmYXVsdDpnPVwiJ1wiK2grXCInXCJ9fWU9ZS52YWx1ZTtcbmMucHVzaChnKTtjLnB1c2goXCI6XCIpO2MucHVzaChlKTtlPWIuYS5EKGUpOzA8PWIuYS5pKG5hLGIuYS5EKGUpLnRvTG93ZXJDYXNlKCkpP2U9cjooaD1lLm1hdGNoKG9hKSxlPWg9PT1wP3I6aFsxXT9cIk9iamVjdChcIitoWzFdK1wiKVwiK2hbMl06ZSk7ZSYmKDA8YS5sZW5ndGgmJmEucHVzaChcIiwgXCIpLGEucHVzaChnK1wiIDogZnVuY3Rpb24oX19rb192YWx1ZSkgeyBcIitlK1wiID0gX19rb192YWx1ZTsgfVwiKSl9ZWxzZSBlLnVua25vd24mJmMucHVzaChlLnVua25vd24pO2Q9Yy5qb2luKFwiXCIpOzA8YS5sZW5ndGgmJihkPWQrXCIsICdfa29fcHJvcGVydHlfd3JpdGVycycgOiB7IFwiK2Euam9pbihcIlwiKStcIiB9IFwiKTtyZXR1cm4gZH0sRWI6ZnVuY3Rpb24oYSxkKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihiLmEuRChhW2NdLmtleSk9PWQpcmV0dXJuIG07cmV0dXJuIHJ9LGVhOmZ1bmN0aW9uKGEsZCxjLGUsZil7aWYoIWF8fCFiLlJhKGEpKXtpZigoYT1kKCkuX2tvX3Byb3BlcnR5X3dyaXRlcnMpJiZcbmFbY10pYVtjXShlKX1lbHNlKCFmfHxhLnQoKSE9PWUpJiZhKGUpfX07Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZ1wiLGIuZyk7Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNcIixiLmcuUSk7Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWxcIixiLmcuYWEpO2IuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzXCIsYi5nLmJhKTtiLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZ1wiLGIuZyk7Yi5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvblwiLGIuZy5iYSk7dmFyIEs9XCJcXHgzYyEtLXRlc3QtLVxceDNlXCI9PT15LmNyZWF0ZUNvbW1lbnQoXCJ0ZXN0XCIpLnRleHQsamE9Sz8vXlxceDNjIS0tXFxzKmtvKD86XFxzKyguK1xccypcXDpbXFxzXFxTXSopKT9cXHMqLS1cXHgzZSQvOi9eXFxzKmtvKD86XFxzKyguK1xccypcXDpbXFxzXFxTXSopKT9cXHMqJC8saWE9Sz8vXlxceDNjIS0tXFxzKlxcL2tvXFxzKi0tXFx4M2UkLzpcbi9eXFxzKlxcL2tvXFxzKiQvLHBhPXt1bDptLG9sOm19O2IuZT17STp7fSxjaGlsZE5vZGVzOmZ1bmN0aW9uKGEpe3JldHVybiBCKGEpP2FhKGEpOmEuY2hpbGROb2Rlc30sWTpmdW5jdGlvbihhKXtpZihCKGEpKXthPWIuZS5jaGlsZE5vZGVzKGEpO2Zvcih2YXIgZD0wLGM9YS5sZW5ndGg7ZDxjO2QrKyliLnJlbW92ZU5vZGUoYVtkXSl9ZWxzZSBiLmEua2EoYSl9LE46ZnVuY3Rpb24oYSxkKXtpZihCKGEpKXtiLmUuWShhKTtmb3IodmFyIGM9YS5uZXh0U2libGluZyxlPTAsZj1kLmxlbmd0aDtlPGY7ZSsrKWMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZFtlXSxjKX1lbHNlIGIuYS5OKGEsZCl9LFZhOmZ1bmN0aW9uKGEsYil7QihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGIsYS5uZXh0U2libGluZyk6YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKGIsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKGIpfSxQYTpmdW5jdGlvbihhLGQsYyl7Yz9CKGEpP2EucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZCxcbmMubmV4dFNpYmxpbmcpOmMubmV4dFNpYmxpbmc/YS5pbnNlcnRCZWZvcmUoZCxjLm5leHRTaWJsaW5nKTphLmFwcGVuZENoaWxkKGQpOmIuZS5WYShhLGQpfSxmaXJzdENoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiFCKGEpP2EuZmlyc3RDaGlsZDohYS5uZXh0U2libGluZ3x8SChhLm5leHRTaWJsaW5nKT9wOmEubmV4dFNpYmxpbmd9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGEpe0IoYSkmJihhPSQoYSkpO3JldHVybiBhLm5leHRTaWJsaW5nJiZIKGEubmV4dFNpYmxpbmcpP3A6YS5uZXh0U2libGluZ30samI6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9QihhKSk/YVsxXTpwfSxUYTpmdW5jdGlvbihhKXtpZihwYVtiLmEudShhKV0pe3ZhciBkPWEuZmlyc3RDaGlsZDtpZihkKXtkbyBpZigxPT09ZC5ub2RlVHlwZSl7dmFyIGM7Yz1kLmZpcnN0Q2hpbGQ7dmFyIGU9cDtpZihjKXtkbyBpZihlKWUucHVzaChjKTtlbHNlIGlmKEIoYykpe3ZhciBmPSQoYyxtKTtmP2M9ZjplPVtjXX1lbHNlIEgoYykmJlxuKGU9W2NdKTt3aGlsZShjPWMubmV4dFNpYmxpbmcpfWlmKGM9ZSl7ZT1kLm5leHRTaWJsaW5nO2ZvcihmPTA7ZjxjLmxlbmd0aDtmKyspZT9hLmluc2VydEJlZm9yZShjW2ZdLGUpOmEuYXBwZW5kQ2hpbGQoY1tmXSl9fXdoaWxlKGQ9ZC5uZXh0U2libGluZyl9fX19O2IuYihcInZpcnR1YWxFbGVtZW50c1wiLGIuZSk7Yi5iKFwidmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1wiLGIuZS5JKTtiLmIoXCJ2aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlXCIsYi5lLlkpO2IuYihcInZpcnR1YWxFbGVtZW50cy5pbnNlcnRBZnRlclwiLGIuZS5QYSk7Yi5iKFwidmlydHVhbEVsZW1lbnRzLnByZXBlbmRcIixiLmUuVmEpO2IuYihcInZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW5cIixiLmUuTik7Yi5KPWZ1bmN0aW9uKCl7dGhpcy5IYT17fX07Yi5hLmV4dGVuZChiLkoucHJvdG90eXBlLHtub2RlSGFzQmluZGluZ3M6ZnVuY3Rpb24oYSl7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgMTpyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIikhPVxucDtjYXNlIDg6cmV0dXJuIGIuZS5qYihhKSE9cDtkZWZhdWx0OnJldHVybiByfX0sZ2V0QmluZGluZ3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGEsYik7cmV0dXJuIGM/dGhpcy5wYXJzZUJpbmRpbmdzU3RyaW5nKGMsYixhKTpwfSxnZXRCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihhKXtzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBhLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKTtjYXNlIDg6cmV0dXJuIGIuZS5qYihhKTtkZWZhdWx0OnJldHVybiBwfX0scGFyc2VCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihhLGQsYyl7dHJ5e3ZhciBlO2lmKCEoZT10aGlzLkhhW2FdKSl7dmFyIGY9dGhpcy5IYSxnLGg9XCJ3aXRoKCRjb250ZXh0KXt3aXRoKCRkYXRhfHx7fSl7cmV0dXJue1wiK2IuZy5iYShhKStcIn19fVwiO2c9bmV3IEZ1bmN0aW9uKFwiJGNvbnRleHRcIixcIiRlbGVtZW50XCIsaCk7ZT1mW2FdPWd9cmV0dXJuIGUoZCxjKX1jYXRjaChrKXtqKEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbk1lc3NhZ2U6IFwiK1xuaytcIjtcXG5CaW5kaW5ncyB2YWx1ZTogXCIrYSkpfX19KTtiLkouaW5zdGFuY2U9bmV3IGIuSjtiLmIoXCJiaW5kaW5nUHJvdmlkZXJcIixiLkopO2IuYz17fTtiLno9ZnVuY3Rpb24oYSxkLGMpe2Q/KGIuYS5leHRlbmQodGhpcyxkKSx0aGlzLiRwYXJlbnRDb250ZXh0PWQsdGhpcy4kcGFyZW50PWQuJGRhdGEsdGhpcy4kcGFyZW50cz0oZC4kcGFyZW50c3x8W10pLnNsaWNlKDApLHRoaXMuJHBhcmVudHMudW5zaGlmdCh0aGlzLiRwYXJlbnQpKToodGhpcy4kcGFyZW50cz1bXSx0aGlzLiRyb290PWEsdGhpcy5rbz1iKTt0aGlzLiRkYXRhPWE7YyYmKHRoaXNbY109YSl9O2Iuei5wcm90b3R5cGUuY3JlYXRlQ2hpbGRDb250ZXh0PWZ1bmN0aW9uKGEsZCl7cmV0dXJuIG5ldyBiLnooYSx0aGlzLGQpfTtiLnoucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihhKXt2YXIgZD1iLmEuZXh0ZW5kKG5ldyBiLnosdGhpcyk7cmV0dXJuIGIuYS5leHRlbmQoZCxhKX07Yi5lYj1mdW5jdGlvbihhLGQpe2lmKDI9PVxuYXJndW1lbnRzLmxlbmd0aCliLmEuZi5zZXQoYSxcIl9fa29fYmluZGluZ0NvbnRleHRfX1wiLGQpO2Vsc2UgcmV0dXJuIGIuYS5mLmdldChhLFwiX19rb19iaW5kaW5nQ29udGV4dF9fXCIpfTtiLkZhPWZ1bmN0aW9uKGEsZCxjKXsxPT09YS5ub2RlVHlwZSYmYi5lLlRhKGEpO3JldHVybiBYKGEsZCxjLG0pfTtiLkVhPWZ1bmN0aW9uKGEsYil7KDE9PT1iLm5vZGVUeXBlfHw4PT09Yi5ub2RlVHlwZSkmJlooYSxiLG0pfTtiLkRhPWZ1bmN0aW9uKGEsYil7YiYmKDEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZSkmJmooRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKSk7Yj1ifHx4LmRvY3VtZW50LmJvZHk7WShhLGIsbSl9O2IuamE9ZnVuY3Rpb24oYSl7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgMTpjYXNlIDg6dmFyIGQ9Yi5lYihhKTtpZihkKXJldHVybiBkO1xuaWYoYS5wYXJlbnROb2RlKXJldHVybiBiLmphKGEucGFyZW50Tm9kZSl9cmV0dXJuIEl9O2IucGI9ZnVuY3Rpb24oYSl7cmV0dXJuKGE9Yi5qYShhKSk/YS4kZGF0YTpJfTtiLmIoXCJiaW5kaW5nSGFuZGxlcnNcIixiLmMpO2IuYihcImFwcGx5QmluZGluZ3NcIixiLkRhKTtiLmIoXCJhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c1wiLGIuRWEpO2IuYihcImFwcGx5QmluZGluZ3NUb05vZGVcIixiLkZhKTtiLmIoXCJjb250ZXh0Rm9yXCIsYi5qYSk7Yi5iKFwiZGF0YUZvclwiLGIucGIpO3ZhciBmYT17XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsXCJmb3JcIjpcImh0bWxGb3JcIn07Yi5jLmF0dHI9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSl8fHt9LGU7Zm9yKGUgaW4gYylpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIGY9Yi5hLmQoY1tlXSksZz1mPT09cnx8Zj09PXB8fGY9PT1JO2cmJmEucmVtb3ZlQXR0cmlidXRlKGUpOzg+PWIuYS5aJiZlIGluIGZhPyhlPWZhW2VdLGc/YS5yZW1vdmVBdHRyaWJ1dGUoZSk6XG5hW2VdPWYpOmd8fGEuc2V0QXR0cmlidXRlKGUsZi50b1N0cmluZygpKTtcIm5hbWVcIj09PWUmJmIuYS5hYihhLGc/XCJcIjpmLnRvU3RyaW5nKCkpfX19O2IuYy5jaGVja2VkPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtiLmEubihhLFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciBlO2lmKFwiY2hlY2tib3hcIj09YS50eXBlKWU9YS5jaGVja2VkO2Vsc2UgaWYoXCJyYWRpb1wiPT1hLnR5cGUmJmEuY2hlY2tlZCllPWEudmFsdWU7ZWxzZSByZXR1cm47dmFyIGY9ZCgpLGc9Yi5hLmQoZik7XCJjaGVja2JveFwiPT1hLnR5cGUmJmcgaW5zdGFuY2VvZiBBcnJheT8oZT1iLmEuaShnLGEudmFsdWUpLGEuY2hlY2tlZCYmMD5lP2YucHVzaChhLnZhbHVlKTohYS5jaGVja2VkJiYwPD1lJiZmLnNwbGljZShlLDEpKTpiLmcuZWEoZixjLFwiY2hlY2tlZFwiLGUsbSl9KTtcInJhZGlvXCI9PWEudHlwZSYmIWEubmFtZSYmYi5jLnVuaXF1ZU5hbWUuaW5pdChhLHUobSkpfSx1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKCkpO1xuXCJjaGVja2JveFwiPT1hLnR5cGU/YS5jaGVja2VkPWMgaW5zdGFuY2VvZiBBcnJheT8wPD1iLmEuaShjLGEudmFsdWUpOmM6XCJyYWRpb1wiPT1hLnR5cGUmJihhLmNoZWNrZWQ9YS52YWx1ZT09Yyl9fTtiLmMuY3NzPXt1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKCkpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBjKWZvcih2YXIgZSBpbiBjKXt2YXIgZj1iLmEuZChjW2VdKTtiLmEuZGEoYSxlLGYpfWVsc2UgYz1TdHJpbmcoY3x8XCJcIiksYi5hLmRhKGEsYS5fX2tvX19jc3NWYWx1ZSxyKSxhLl9fa29fX2Nzc1ZhbHVlPWMsYi5hLmRhKGEsYyxtKX19O2IuYy5lbmFibGU9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSk7YyYmYS5kaXNhYmxlZD9hLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpOiFjJiYhYS5kaXNhYmxlZCYmKGEuZGlzYWJsZWQ9bSl9fTtiLmMuZGlzYWJsZT17dXBkYXRlOmZ1bmN0aW9uKGEsZCl7Yi5jLmVuYWJsZS51cGRhdGUoYSxmdW5jdGlvbigpe3JldHVybiFiLmEuZChkKCkpfSl9fTtcbmIuYy5ldmVudD17aW5pdDpmdW5jdGlvbihhLGQsYyxlKXt2YXIgZj1kKCl8fHt9LGc7Zm9yKGcgaW4gZikoZnVuY3Rpb24oKXt2YXIgZj1nO1wic3RyaW5nXCI9PXR5cGVvZiBmJiZiLmEubihhLGYsZnVuY3Rpb24oYSl7dmFyIGcsbj1kKClbZl07aWYobil7dmFyIHE9YygpO3RyeXt2YXIgcz1iLmEuTChhcmd1bWVudHMpO3MudW5zaGlmdChlKTtnPW4uYXBwbHkoZSxzKX1maW5hbGx5e2chPT1tJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT1yKX1xW2YrXCJCdWJibGVcIl09PT1yJiYoYS5jYW5jZWxCdWJibGU9bSxhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKSl9fSl9KSgpfX07Yi5jLmZvcmVhY2g9e1NhOmZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBkPWEoKSxjPWIuYS51YShkKTtpZighY3x8XCJudW1iZXJcIj09dHlwZW9mIGMubGVuZ3RoKXJldHVybntmb3JlYWNoOmQsdGVtcGxhdGVFbmdpbmU6Yi5DLm9hfTtcbmIuYS5kKGQpO3JldHVybntmb3JlYWNoOmMuZGF0YSxhczpjLmFzLGluY2x1ZGVEZXN0cm95ZWQ6Yy5pbmNsdWRlRGVzdHJveWVkLGFmdGVyQWRkOmMuYWZ0ZXJBZGQsYmVmb3JlUmVtb3ZlOmMuYmVmb3JlUmVtb3ZlLGFmdGVyUmVuZGVyOmMuYWZ0ZXJSZW5kZXIsYmVmb3JlTW92ZTpjLmJlZm9yZU1vdmUsYWZ0ZXJNb3ZlOmMuYWZ0ZXJNb3ZlLHRlbXBsYXRlRW5naW5lOmIuQy5vYX19fSxpbml0OmZ1bmN0aW9uKGEsZCl7cmV0dXJuIGIuYy50ZW1wbGF0ZS5pbml0KGEsYi5jLmZvcmVhY2guU2EoZCkpfSx1cGRhdGU6ZnVuY3Rpb24oYSxkLGMsZSxmKXtyZXR1cm4gYi5jLnRlbXBsYXRlLnVwZGF0ZShhLGIuYy5mb3JlYWNoLlNhKGQpLGMsZSxmKX19O2IuZy5RLmZvcmVhY2g9cjtiLmUuSS5mb3JlYWNoPW07Yi5jLmhhc2ZvY3VzPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKGUpe2EuX19rb19oYXNmb2N1c1VwZGF0aW5nPW07dmFyIGY9YS5vd25lckRvY3VtZW50O1wiYWN0aXZlRWxlbWVudFwiaW5cbmYmJihlPWYuYWN0aXZlRWxlbWVudD09PWEpO2Y9ZCgpO2IuZy5lYShmLGMsXCJoYXNmb2N1c1wiLGUsbSk7YS5fX2tvX2hhc2ZvY3VzVXBkYXRpbmc9cn12YXIgZj1lLmJpbmQocCxtKSxnPWUuYmluZChwLHIpO2IuYS5uKGEsXCJmb2N1c1wiLGYpO2IuYS5uKGEsXCJmb2N1c2luXCIsZik7Yi5hLm4oYSxcImJsdXJcIixnKTtiLmEubihhLFwiZm9jdXNvdXRcIixnKX0sdXBkYXRlOmZ1bmN0aW9uKGEsZCl7dmFyIGM9Yi5hLmQoZCgpKTthLl9fa29faGFzZm9jdXNVcGRhdGluZ3x8KGM/YS5mb2N1cygpOmEuYmx1cigpLGIuci5LKGIuYS5CYSxwLFthLGM/XCJmb2N1c2luXCI6XCJmb2N1c291dFwiXSkpfX07Yi5jLmh0bWw9e2luaXQ6ZnVuY3Rpb24oKXtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6bX19LHVwZGF0ZTpmdW5jdGlvbihhLGQpe2IuYS5jYShhLGQoKSl9fTt2YXIgZGE9XCJfX2tvX3dpdGhJZkJpbmRpbmdEYXRhXCI7UShcImlmXCIpO1EoXCJpZm5vdFwiLHIsbSk7UShcIndpdGhcIixtLHIsZnVuY3Rpb24oYSxcbmIpe3JldHVybiBhLmNyZWF0ZUNoaWxkQ29udGV4dChiKX0pO2IuYy5vcHRpb25zPXt1cGRhdGU6ZnVuY3Rpb24oYSxkLGMpe1wic2VsZWN0XCIhPT1iLmEudShhKSYmaihFcnJvcihcIm9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpKTtmb3IodmFyIGU9MD09YS5sZW5ndGgsZj1iLmEuVihiLmEuZmEoYS5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLnRhZ05hbWUmJlwib3B0aW9uXCI9PT1iLmEudShhKSYmYS5zZWxlY3RlZH0pLGZ1bmN0aW9uKGEpe3JldHVybiBiLmsucShhKXx8YS5pbm5lclRleHR8fGEudGV4dENvbnRlbnR9KSxnPWEuc2Nyb2xsVG9wLGg9Yi5hLmQoZCgpKTswPGEubGVuZ3RoOyliLkEoYS5vcHRpb25zWzBdKSxhLnJlbW92ZSgwKTtpZihoKXtjPWMoKTt2YXIgaz1jLm9wdGlvbnNJbmNsdWRlRGVzdHJveWVkO1wibnVtYmVyXCIhPXR5cGVvZiBoLmxlbmd0aCYmKGg9W2hdKTtpZihjLm9wdGlvbnNDYXB0aW9uKXt2YXIgbD15LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5iLmEuY2EobCxjLm9wdGlvbnNDYXB0aW9uKTtiLmsuVChsLEkpO2EuYXBwZW5kQ2hpbGQobCl9ZD0wO2Zvcih2YXIgbj1oLmxlbmd0aDtkPG47ZCsrKXt2YXIgcT1oW2RdO2lmKCFxfHwhcS5fZGVzdHJveXx8ayl7dmFyIGw9eS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXR5cGVvZiBiO3JldHVyblwiZnVuY3Rpb25cIj09ZD9iKGEpOlwic3RyaW5nXCI9PWQ/YVtiXTpjfSx2PXMocSxjLm9wdGlvbnNWYWx1ZSxxKTtiLmsuVChsLGIuYS5kKHYpKTtxPXMocSxjLm9wdGlvbnNUZXh0LHYpO2IuYS5jYihsLHEpO2EuYXBwZW5kQ2hpbGQobCl9fWg9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKTtkPWs9MDtmb3Iobj1oLmxlbmd0aDtkPG47ZCsrKTA8PWIuYS5pKGYsYi5rLnEoaFtkXSkpJiYoYi5hLmJiKGhbZF0sbSksaysrKTthLnNjcm9sbFRvcD1nO2UmJlwidmFsdWVcImluIGMmJmVhKGEsYi5hLnVhKGMudmFsdWUpLG0pO2IuYS51YihhKX19fTtcbmIuYy5vcHRpb25zLnNhPVwiX19rby5vcHRpb25WYWx1ZURvbURhdGFfX1wiO2IuYy5zZWxlY3RlZE9wdGlvbnM9e2luaXQ6ZnVuY3Rpb24oYSxkLGMpe2IuYS5uKGEsXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPWQoKSxmPVtdO2IuYS5vKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksZnVuY3Rpb24oYSl7YS5zZWxlY3RlZCYmZi5wdXNoKGIuay5xKGEpKX0pO2IuZy5lYShlLGMsXCJ2YWx1ZVwiLGYpfSl9LHVwZGF0ZTpmdW5jdGlvbihhLGQpe1wic2VsZWN0XCIhPWIuYS51KGEpJiZqKEVycm9yKFwidmFsdWVzIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKSk7dmFyIGM9Yi5hLmQoZCgpKTtjJiZcIm51bWJlclwiPT10eXBlb2YgYy5sZW5ndGgmJmIuYS5vKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksZnVuY3Rpb24oYSl7dmFyIGQ9MDw9Yi5hLmkoYyxiLmsucShhKSk7Yi5hLmJiKGEsZCl9KX19O2IuYy5zdHlsZT17dXBkYXRlOmZ1bmN0aW9uKGEsXG5kKXt2YXIgYz1iLmEuZChkKCl8fHt9KSxlO2ZvcihlIGluIGMpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBmPWIuYS5kKGNbZV0pO2Euc3R5bGVbZV09Znx8XCJcIn19fTtiLmMuc3VibWl0PXtpbml0OmZ1bmN0aW9uKGEsZCxjLGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGQoKSYmaihFcnJvcihcIlRoZSB2YWx1ZSBmb3IgYSBzdWJtaXQgYmluZGluZyBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2IuYS5uKGEsXCJzdWJtaXRcIixmdW5jdGlvbihiKXt2YXIgYyxoPWQoKTt0cnl7Yz1oLmNhbGwoZSxhKX1maW5hbGx5e2MhPT1tJiYoYi5wcmV2ZW50RGVmYXVsdD9iLnByZXZlbnREZWZhdWx0KCk6Yi5yZXR1cm5WYWx1ZT1yKX19KX19O2IuYy50ZXh0PXt1cGRhdGU6ZnVuY3Rpb24oYSxkKXtiLmEuY2IoYSxkKCkpfX07Yi5lLkkudGV4dD1tO2IuYy51bmlxdWVOYW1lPXtpbml0OmZ1bmN0aW9uKGEsZCl7aWYoZCgpKXt2YXIgYz1cImtvX3VuaXF1ZV9cIisgKytiLmMudW5pcXVlTmFtZS5vYjtiLmEuYWIoYSxcbmMpfX19O2IuYy51bmlxdWVOYW1lLm9iPTA7Yi5jLnZhbHVlPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKCl7aD1yO3ZhciBlPWQoKSxmPWIuay5xKGEpO2IuZy5lYShlLGMsXCJ2YWx1ZVwiLGYpfXZhciBmPVtcImNoYW5nZVwiXSxnPWMoKS52YWx1ZVVwZGF0ZSxoPXI7ZyYmKFwic3RyaW5nXCI9PXR5cGVvZiBnJiYoZz1bZ10pLGIuYS5QKGYsZyksZj1iLmEuR2EoZikpO2lmKGIuYS5aJiYoXCJpbnB1dFwiPT1hLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PWEudHlwZSYmXCJvZmZcIiE9YS5hdXRvY29tcGxldGUmJighYS5mb3JtfHxcIm9mZlwiIT1hLmZvcm0uYXV0b2NvbXBsZXRlKSkmJi0xPT1iLmEuaShmLFwicHJvcGVydHljaGFuZ2VcIikpYi5hLm4oYSxcInByb3BlcnR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtoPW19KSxiLmEubihhLFwiYmx1clwiLGZ1bmN0aW9uKCl7aCYmZSgpfSk7Yi5hLm8oZixmdW5jdGlvbihjKXt2YXIgZD1lO2IuYS5PYihjLFwiYWZ0ZXJcIikmJihkPWZ1bmN0aW9uKCl7c2V0VGltZW91dChlLFxuMCl9LGM9Yy5zdWJzdHJpbmcoNSkpO2IuYS5uKGEsYyxkKX0pfSx1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1cInNlbGVjdFwiPT09Yi5hLnUoYSksZT1iLmEuZChkKCkpLGY9Yi5rLnEoYSksZz1lIT1mOzA9PT1lJiYoMCE9PWYmJlwiMFwiIT09ZikmJihnPW0pO2cmJihmPWZ1bmN0aW9uKCl7Yi5rLlQoYSxlKX0sZigpLGMmJnNldFRpbWVvdXQoZiwwKSk7YyYmMDxhLmxlbmd0aCYmZWEoYSxlLHIpfX07Yi5jLnZpc2libGU9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSksZT1cIm5vbmVcIiE9YS5zdHlsZS5kaXNwbGF5O2MmJiFlP2Euc3R5bGUuZGlzcGxheT1cIlwiOiFjJiZlJiYoYS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19O2IuYy5jbGljaz17aW5pdDpmdW5jdGlvbihhLGQsYyxlKXtyZXR1cm4gYi5jLmV2ZW50LmluaXQuY2FsbCh0aGlzLGEsZnVuY3Rpb24oKXt2YXIgYT17fTthLmNsaWNrPWQoKTtyZXR1cm4gYX0sYyxlKX19O2Iudj1mdW5jdGlvbigpe307Yi52LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1cbmZ1bmN0aW9uKCl7aihFcnJvcihcIk92ZXJyaWRlIHJlbmRlclRlbXBsYXRlU291cmNlXCIpKX07Yi52LnByb3RvdHlwZS5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oKXtqKEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpKX07Yi52LnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYSxkKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7ZD1kfHx5O3ZhciBjPWQuZ2V0RWxlbWVudEJ5SWQoYSk7Y3x8aihFcnJvcihcIkNhbm5vdCBmaW5kIHRlbXBsYXRlIHdpdGggSUQgXCIrYSkpO3JldHVybiBuZXcgYi5sLmgoYyl9aWYoMT09YS5ub2RlVHlwZXx8OD09YS5ub2RlVHlwZSlyZXR1cm4gbmV3IGIubC5PKGEpO2ooRXJyb3IoXCJVbmtub3duIHRlbXBsYXRlIHR5cGU6IFwiK2EpKX07Yi52LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1mdW5jdGlvbihhLGIsYyxlKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZSk7XG5yZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZShhLGIsYyl9O2Iudi5wcm90b3R5cGUuaXNUZW1wbGF0ZVJld3JpdHRlbj1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc9PT1yP206dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxiKS5kYXRhKFwiaXNSZXdyaXR0ZW5cIil9O2Iudi5wcm90b3R5cGUucmV3cml0ZVRlbXBsYXRlPWZ1bmN0aW9uKGEsYixjKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsYyk7Yj1iKGEudGV4dCgpKTthLnRleHQoYik7YS5kYXRhKFwiaXNSZXdyaXR0ZW5cIixtKX07Yi5iKFwidGVtcGxhdGVFbmdpbmVcIixiLnYpO3ZhciBxYT0vKDxbYS16XStcXGQqKFxccysoPyFkYXRhLWJpbmQ9KVthLXowLTlcXC1dKyg9KFxcXCJbXlxcXCJdKlxcXCJ8XFwnW15cXCddKlxcJykpPykqXFxzKylkYXRhLWJpbmQ9KFtcIiddKShbXFxzXFxTXSo/KVxcNS9naSxyYT0vXFx4M2MhLS1cXHMqa29cXGJcXHMqKFtcXHNcXFNdKj8pXFxzKi0tXFx4M2UvZztiLnphPXt2YjpmdW5jdGlvbihhLFxuZCxjKXtkLmlzVGVtcGxhdGVSZXdyaXR0ZW4oYSxjKXx8ZC5yZXdyaXRlVGVtcGxhdGUoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi56YS5HYihhLGQpfSxjKX0sR2I6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5yZXBsYWNlKHFhLGZ1bmN0aW9uKGEsZSxmLGcsaCxrLGwpe3JldHVybiBXKGwsZSxiKX0pLnJlcGxhY2UocmEsZnVuY3Rpb24oYSxlKXtyZXR1cm4gVyhlLFwiXFx4M2MhLS0ga28gLS1cXHgzZVwiLGIpfSl9LGtiOmZ1bmN0aW9uKGEpe3JldHVybiBiLnMucmEoZnVuY3Rpb24oZCxjKXtkLm5leHRTaWJsaW5nJiZiLkZhKGQubmV4dFNpYmxpbmcsYSxjKX0pfX07Yi5iKFwiX190cl9hbWJ0bnNcIixiLnphLmtiKTtiLmw9e307Yi5sLmg9ZnVuY3Rpb24oYSl7dGhpcy5oPWF9O2IubC5oLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7dmFyIGE9Yi5hLnUodGhpcy5oKSxhPVwic2NyaXB0XCI9PT1hP1widGV4dFwiOlwidGV4dGFyZWFcIj09PWE/XCJ2YWx1ZVwiOlwiaW5uZXJIVE1MXCI7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5oW2FdO1xudmFyIGQ9YXJndW1lbnRzWzBdO1wiaW5uZXJIVE1MXCI9PT1hP2IuYS5jYSh0aGlzLmgsZCk6dGhpcy5oW2FdPWR9O2IubC5oLnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKGEpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBiLmEuZi5nZXQodGhpcy5oLFwidGVtcGxhdGVTb3VyY2VEYXRhX1wiK2EpO2IuYS5mLnNldCh0aGlzLmgsXCJ0ZW1wbGF0ZVNvdXJjZURhdGFfXCIrYSxhcmd1bWVudHNbMV0pfTtiLmwuTz1mdW5jdGlvbihhKXt0aGlzLmg9YX07Yi5sLk8ucHJvdG90eXBlPW5ldyBiLmwuaDtiLmwuTy5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBhPWIuYS5mLmdldCh0aGlzLmgsXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiKXx8e307YS5BYT09PUkmJmEuaWEmJihhLkFhPWEuaWEuaW5uZXJIVE1MKTtyZXR1cm4gYS5BYX1iLmEuZi5zZXQodGhpcy5oLFwiX19rb19hbm9uX3RlbXBsYXRlX19cIix7QWE6YXJndW1lbnRzWzBdfSl9O2IubC5oLnByb3RvdHlwZS5ub2Rlcz1cbmZ1bmN0aW9uKCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4oYi5hLmYuZ2V0KHRoaXMuaCxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIpfHx7fSkuaWE7Yi5hLmYuc2V0KHRoaXMuaCxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIse2lhOmFyZ3VtZW50c1swXX0pfTtiLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixiLmwpO2IuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYi5sLmgpO2IuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGIubC5PKTt2YXIgTztiLndhPWZ1bmN0aW9uKGEpe2EhPUkmJiEoYSBpbnN0YW5jZW9mIGIudikmJmooRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKSk7Tz1hfTtiLnZhPWZ1bmN0aW9uKGEsZCxjLGUsZil7Yz1jfHx7fTsoYy50ZW1wbGF0ZUVuZ2luZXx8Tyk9PUkmJmooRXJyb3IoXCJTZXQgYSB0ZW1wbGF0ZSBlbmdpbmUgYmVmb3JlIGNhbGxpbmcgcmVuZGVyVGVtcGxhdGVcIikpO1xuZj1mfHxcInJlcGxhY2VDaGlsZHJlblwiO2lmKGUpe3ZhciBnPU4oZSk7cmV0dXJuIGIuaihmdW5jdGlvbigpe3ZhciBoPWQmJmQgaW5zdGFuY2VvZiBiLno/ZDpuZXcgYi56KGIuYS5kKGQpKSxrPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YShoLiRkYXRhLGgpOmEsaD1UKGUsZixrLGgsYyk7XCJyZXBsYWNlTm9kZVwiPT1mJiYoZT1oLGc9TihlKSl9LHAse0thOmZ1bmN0aW9uKCl7cmV0dXJuIWd8fCFiLmEuWChnKX0sVzpnJiZcInJlcGxhY2VOb2RlXCI9PWY/Zy5wYXJlbnROb2RlOmd9KX1yZXR1cm4gYi5zLnJhKGZ1bmN0aW9uKGUpe2IudmEoYSxkLGMsZSxcInJlcGxhY2VOb2RlXCIpfSl9O2IuTWI9ZnVuY3Rpb24oYSxkLGMsZSxmKXtmdW5jdGlvbiBnKGEsYil7VShiLGspO2MuYWZ0ZXJSZW5kZXImJmMuYWZ0ZXJSZW5kZXIoYixhKX1mdW5jdGlvbiBoKGQsZSl7az1mLmNyZWF0ZUNoaWxkQ29udGV4dChiLmEuZChkKSxjLmFzKTtrLiRpbmRleD1lO3ZhciBnPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/XG5hKGQsayk6YTtyZXR1cm4gVChwLFwiaWdub3JlVGFyZ2V0Tm9kZVwiLGcsayxjKX12YXIgaztyZXR1cm4gYi5qKGZ1bmN0aW9uKCl7dmFyIGE9Yi5hLmQoZCl8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBhLmxlbmd0aCYmKGE9W2FdKTthPWIuYS5mYShhLGZ1bmN0aW9uKGEpe3JldHVybiBjLmluY2x1ZGVEZXN0cm95ZWR8fGE9PT1JfHxhPT09cHx8IWIuYS5kKGEuX2Rlc3Ryb3kpfSk7Yi5yLksoYi5hLiRhLHAsW2UsYSxoLGMsZ10pfSxwLHtXOmV9KX07Yi5jLnRlbXBsYXRlPXtpbml0OmZ1bmN0aW9uKGEsZCl7dmFyIGM9Yi5hLmQoZCgpKTtpZihcInN0cmluZ1wiIT10eXBlb2YgYyYmIWMubmFtZSYmKDE9PWEubm9kZVR5cGV8fDg9PWEubm9kZVR5cGUpKWM9MT09YS5ub2RlVHlwZT9hLmNoaWxkTm9kZXM6Yi5lLmNoaWxkTm9kZXMoYSksYz1iLmEuSGIoYyksKG5ldyBiLmwuTyhhKSkubm9kZXMoYyk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOm19fSx1cGRhdGU6ZnVuY3Rpb24oYSxcbmQsYyxlLGYpe2Q9Yi5hLmQoZCgpKTtjPXt9O2U9bTt2YXIgZyxoPXA7XCJzdHJpbmdcIiE9dHlwZW9mIGQmJihjPWQsZD1jLm5hbWUsXCJpZlwiaW4gYyYmKGU9Yi5hLmQoY1tcImlmXCJdKSksZSYmXCJpZm5vdFwiaW4gYyYmKGU9IWIuYS5kKGMuaWZub3QpKSxnPWIuYS5kKGMuZGF0YSkpO1wiZm9yZWFjaFwiaW4gYz9oPWIuTWIoZHx8YSxlJiZjLmZvcmVhY2h8fFtdLGMsYSxmKTplPyhmPVwiZGF0YVwiaW4gYz9mLmNyZWF0ZUNoaWxkQ29udGV4dChnLGMuYXMpOmYsaD1iLnZhKGR8fGEsZixjLGEpKTpiLmUuWShhKTtmPWg7KGc9Yi5hLmYuZ2V0KGEsXCJfX2tvX190ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleV9fXCIpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZy5CJiZnLkIoKTtiLmEuZi5zZXQoYSxcIl9fa29fX3RlbXBsYXRlQ29tcHV0ZWREb21EYXRhS2V5X19cIixmJiZmLnBhKCk/ZjpJKX19O2IuZy5RLnRlbXBsYXRlPWZ1bmN0aW9uKGEpe2E9Yi5nLmFhKGEpO3JldHVybiAxPT1hLmxlbmd0aCYmYVswXS51bmtub3dufHxcbmIuZy5FYihhLFwibmFtZVwiKT9wOlwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzIG5lc3RlZCB3aXRoaW4gaXRzIHRlbXBsYXRlc1wifTtiLmUuSS50ZW1wbGF0ZT1tO2IuYihcInNldFRlbXBsYXRlRW5naW5lXCIsYi53YSk7Yi5iKFwicmVuZGVyVGVtcGxhdGVcIixiLnZhKTtiLmEuSmE9ZnVuY3Rpb24oYSxiLGMpe2E9YXx8W107Yj1ifHxbXTtyZXR1cm4gYS5sZW5ndGg8PWIubGVuZ3RoP1MoYSxiLFwiYWRkZWRcIixcImRlbGV0ZWRcIixjKTpTKGIsYSxcImRlbGV0ZWRcIixcImFkZGVkXCIsYyl9O2IuYihcInV0aWxzLmNvbXBhcmVBcnJheXNcIixiLmEuSmEpO2IuYS4kYT1mdW5jdGlvbihhLGQsYyxlLGYpe2Z1bmN0aW9uIGcoYSxiKXt0PWxbYl07dyE9PWImJih6W2FdPXQpO3QubmEodysrKTtNKHQuTSk7cy5wdXNoKHQpO0EucHVzaCh0KX1mdW5jdGlvbiBoKGEsYyl7aWYoYSlmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspY1tkXSYmYi5hLm8oY1tkXS5NLFxuZnVuY3Rpb24oYil7YShiLGQsY1tkXS5VKX0pfWQ9ZHx8W107ZT1lfHx7fTt2YXIgaz1iLmEuZi5nZXQoYSxcInNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdfbGFzdE1hcHBpbmdSZXN1bHRcIik9PT1JLGw9Yi5hLmYuZ2V0KGEsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIpfHxbXSxuPWIuYS5WKGwsZnVuY3Rpb24oYSl7cmV0dXJuIGEuVX0pLHE9Yi5hLkphKG4sZCkscz1bXSx2PTAsdz0wLEI9W10sQT1bXTtkPVtdO2Zvcih2YXIgej1bXSxuPVtdLHQsRD0wLEMsRTtDPXFbRF07RCsrKXN3aXRjaChFPUMubW92ZWQsQy5zdGF0dXMpe2Nhc2UgXCJkZWxldGVkXCI6RT09PUkmJih0PWxbdl0sdC5qJiZ0LmouQigpLEIucHVzaC5hcHBseShCLE0odC5NKSksZS5iZWZvcmVSZW1vdmUmJihkW0RdPXQsQS5wdXNoKHQpKSk7disrO2JyZWFrO2Nhc2UgXCJyZXRhaW5lZFwiOmcoRCx2KyspO2JyZWFrO2Nhc2UgXCJhZGRlZFwiOkUhPT1JP1xuZyhELEUpOih0PXtVOkMudmFsdWUsbmE6Yi5tKHcrKyl9LHMucHVzaCh0KSxBLnB1c2godCksa3x8KG5bRF09dCkpfWgoZS5iZWZvcmVNb3ZlLHopO2IuYS5vKEIsZS5iZWZvcmVSZW1vdmU/Yi5BOmIucmVtb3ZlTm9kZSk7Zm9yKHZhciBEPTAsaz1iLmUuZmlyc3RDaGlsZChhKSxIO3Q9QVtEXTtEKyspe3QuTXx8Yi5hLmV4dGVuZCh0LGhhKGEsYyx0LlUsZix0Lm5hKSk7Zm9yKHY9MDtxPXQuTVt2XTtrPXEubmV4dFNpYmxpbmcsSD1xLHYrKylxIT09ayYmYi5lLlBhKGEscSxIKTshdC5BYiYmZiYmKGYodC5VLHQuTSx0Lm5hKSx0LkFiPW0pfWgoZS5iZWZvcmVSZW1vdmUsZCk7aChlLmFmdGVyTW92ZSx6KTtoKGUuYWZ0ZXJBZGQsbik7Yi5hLmYuc2V0KGEsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIscyl9O2IuYihcInV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdcIixiLmEuJGEpO2IuQz1mdW5jdGlvbigpe3RoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz1cbnJ9O2IuQy5wcm90b3R5cGU9bmV3IGIudjtiLkMucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGEpe3ZhciBkPSEoOT5iLmEuWikmJmEubm9kZXM/YS5ub2RlcygpOnA7aWYoZClyZXR1cm4gYi5hLkwoZC5jbG9uZU5vZGUobSkuY2hpbGROb2Rlcyk7YT1hLnRleHQoKTtyZXR1cm4gYi5hLnRhKGEpfTtiLkMub2E9bmV3IGIuQztiLndhKGIuQy5vYSk7Yi5iKFwibmF0aXZlVGVtcGxhdGVFbmdpbmVcIixiLkMpO2IucWE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkRiPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIEZ8fCFGLnRtcGwpcmV0dXJuIDA7dHJ5e2lmKDA8PUYudG1wbC50YWcudG1wbC5vcGVuLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpKXJldHVybiAyfWNhdGNoKGEpe31yZXR1cm4gMX0oKTt0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsYyxlKXtlPWV8fHt9OzI+YSYmaihFcnJvcihcIllvdXIgdmVyc2lvbiBvZiBqUXVlcnkudG1wbCBpcyB0b28gb2xkLiBQbGVhc2UgdXBncmFkZSB0byBqUXVlcnkudG1wbCAxLjAuMHByZSBvciBsYXRlci5cIikpO1xudmFyIGY9Yi5kYXRhKFwicHJlY29tcGlsZWRcIik7Znx8KGY9Yi50ZXh0KCl8fFwiXCIsZj1GLnRlbXBsYXRlKHAsXCJ7e2tvX3dpdGggJGl0ZW0ua29CaW5kaW5nQ29udGV4dH19XCIrZitcInt7L2tvX3dpdGh9fVwiKSxiLmRhdGEoXCJwcmVjb21waWxlZFwiLGYpKTtiPVtjLiRkYXRhXTtjPUYuZXh0ZW5kKHtrb0JpbmRpbmdDb250ZXh0OmN9LGUudGVtcGxhdGVPcHRpb25zKTtjPUYudG1wbChmLGIsYyk7Yy5hcHBlbmRUbyh5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO0YuZnJhZ21lbnRzPXt9O3JldHVybiBjfTt0aGlzLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaz1mdW5jdGlvbihhKXtyZXR1cm5cInt7a29fY29kZSAoKGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIrYStcIiB9KSgpKSB9fVwifTt0aGlzLmFkZFRlbXBsYXRlPWZ1bmN0aW9uKGEsYil7eS53cml0ZShcIjxzY3JpcHQgdHlwZT0ndGV4dC9odG1sJyBpZD0nXCIrYStcIic+XCIrYitcIlxceDNjL3NjcmlwdD5cIil9OzA8YSYmKEYudG1wbC50YWcua29fY29kZT1cbntvcGVuOlwiX18ucHVzaCgkMSB8fCAnJyk7XCJ9LEYudG1wbC50YWcua29fd2l0aD17b3BlbjpcIndpdGgoJDEpIHtcIixjbG9zZTpcIn0gXCJ9KX07Yi5xYS5wcm90b3R5cGU9bmV3IGIudjt3PW5ldyBiLnFhOzA8dy5EYiYmYi53YSh3KTtiLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixiLnFhKX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcmVxdWlyZSYmXCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9MKG1vZHVsZS5leHBvcnRzfHxleHBvcnRzKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLEwpOkwoeC5rbz17fSk7bTtcbn0pKCk7XG4iLCJ2YXIga28gPSByZXF1aXJlKCdrbm9ja291dC1jbGllbnQnKSxcblx0ZGF0ZWpzID0gcmVxdWlyZSgnZGF0ZWpzJyksXG5cdF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5rby5tYXBwaW5nID0gcmVxdWlyZSgna25vY2tvdXQtbWFwcGluZycpO1xuXG5mdW5jdGlvbiBWaWV3TW9kZWwod3RmSGlzdG9yeSkge1xuXHR0aGlzLnd0Zkhpc3RvcnkgPSBrby5vYnNlcnZhYmxlQXJyYXkod3RmSGlzdG9yeSk7XG5cdFxuXHR0aGlzLnd0ZkNvdW50ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMud3RmSGlzdG9yeSgpLmxlbmd0aDtcblx0fSwgdGhpcyk7XG5cdFxuXHR0aGlzLmxhc3RXdGYgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0IFx0cmV0dXJuIF8ubGFzdCh0aGlzLnd0Zkhpc3RvcnkoKSk7XG4gXHR9LCB0aGlzKTtcblx0XG5cdHRoaXMubGFzdFd0ZlRleHQgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHR2YXIgbGFzdFd0ZiA9IHRoaXMubGFzdFd0ZigpO1xuXHRcdGlmIChsYXN0V3RmKVxuXHRcdFx0cmV0dXJuIGZvcm1hdERhdGUobGFzdFd0Zi5kYXRlKTtcblx0XHRyZXR1cm4gJ25ldmVyJztcblx0fSwgdGhpcyk7XG5cblx0dGhpcy50b2RheXNXdGZzID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMud3RmSGlzdG9yeSgpLm1hcChtYXBEYXRlKS5maWx0ZXIoaXNUb2RheSk7XG5cdH0sIHRoaXMpO1xuXG5cdHRoaXMudG9kYXlXdGZQZXJNaW4gPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHR2YXIgdG9kYXkgPSB0aGlzLnRvZGF5c1d0ZnMoKTtcblx0XHR2YXIgZmlyc3QgPSBfLmZpcnN0KHRvZGF5KTtcblx0XHR2YXIgbGFzdCA9IF8ubGFzdCh0b2RheSk7XG5cdFx0dmFyIG1pbnMgPSAobGFzdCAtIGZpcnN0KSAvIDEwMDAgLyA2MDtcblx0XHR2YXIgY291bnQgPSB0b2RheS5sZW5ndGg7XG5cdFx0dmFyIHd0ZlBlck1pbiA9IGNvdW50IC8gbWlucztcblx0XHRyZXR1cm4gd3RmUGVyTWluLnRvRml4ZWQoMykgfHwgJzAnO1xuXHR9LCB0aGlzKTtcblxuXHR0aGlzLnBhc3QyNCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnd0Zkhpc3RvcnkoKS5tYXAobWFwRGF0ZSkuZmlsdGVyKGlzUGFzdDI0KTtcblx0fSwgdGhpcyk7XG5cblx0dGhpcy50b2RheVd0ZkNvdW50ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9kYXlzV3RmcygpLmxlbmd0aDtcblx0fSwgdGhpcyk7XG5cblx0dGhpcy5ob3VybHlXdGZzID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGdyb3VwZWQgPSBfLmdyb3VwQnkodGhpcy5wYXN0MjQoKSwgbWFwSG91cik7XG5cdFx0dmFyIGhvdXJseSA9IFtdO1xuXHRcdHZhciBpLCBtO1xuXHRcdHZhciBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcblx0XHRcdGhvdXIgPSAoaSArIG9mZnNldCArIDEpICUgMjQ7XG5cdFx0XHRob3VybHlbaV0gPSB7IGhvdXI6IGhvdXIsIHd0ZnM6IGdyb3VwZWRbJycgKyBob3VyXSB8fCBbXSB9O1xuXHRcdH1cblx0XHRyZXR1cm4gaG91cmx5O1xuXHR9LCB0aGlzKTtcblxuXHR0aGlzLmhvdXJseVZpc2libGUgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcblxuXHRrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHR2YXIgaGlzdG9yeSA9IEpTT04uc3RyaW5naWZ5KHRoaXMud3RmSGlzdG9yeSgpKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd3RmSGlzdG9yeScsIGhpc3RvcnkpO1xuXHR9LCB0aGlzKS5leHRlbmQoe3Rocm90dGxlOiAxfSk7XG59XG5cblZpZXdNb2RlbC5wcm90b3R5cGUud3RmID0gZnVuY3Rpb24oKSB7XG5cdGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHR0aGlzLnd0Zkhpc3RvcnkucHVzaCh7IGRhdGU6IGRhdGUgfSk7XG59XG5cblZpZXdNb2RlbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy53dGZIaXN0b3J5LnJlbW92ZUFsbCgpO1xufVxuXG5WaWV3TW9kZWwucHJvdG90eXBlLnRvZ2dsZUhvdXJseVZpc2libGUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5ob3VybHlWaXNpYmxlKCF0aGlzLmhvdXJseVZpc2libGUoKSk7XG59XG5cbmZ1bmN0aW9uIG1hcEhvdXIoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRIb3VycygpO1xufVxuXG5mdW5jdGlvbiBtYXBEYXRlKGl0ZW0pIHtcblx0cmV0dXJuIGl0ZW0uZGF0ZTtcbn1cblxuZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG5cdHJldHVybiBkYXRlLmJldHdlZW4oRGF0ZS50b2RheSgpLCBEYXRlLnBhcnNlKCd0b21vcnJvdycpKTtcbn1cblxuZnVuY3Rpb24gaXNQYXN0MjQoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5jb21wYXJlVG8obmV3IERhdGUoKS5hZGQoLTEpLmRheXMoKSkgPT09IDE7XG59XG5cbmZ1bmN0aW9uIGZpeERhdGUoa2V5LCB2YWx1ZSl7XG5cdHJldHVybiAoa2V5ID09PSAnZGF0ZScpID8gbmV3IERhdGUodmFsdWUpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS50b1N0cmluZygnZGRkLCBNTU0gZGQsIHl5eXkgaDptbTpzcyB0dCcpO1xufVxuXG52YXIgc3RvcmVkSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3dGZIaXN0b3J5Jyk7XG52YXIgd3RmSGlzdG9yeSA9IEpTT04ucGFyc2Uoc3RvcmVkSGlzdG9yeSwgZml4RGF0ZSkgfHwgW107XG52YXIgdm0gPSBuZXcgVmlld01vZGVsKHd0Zkhpc3RvcnkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZtOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoZXYuc291cmNlID09PSB3aW5kb3cgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwiKGZ1bmN0aW9uKHByb2Nlc3Mpey8qKlxyXG4gKiBAdmVyc2lvbjogMS4wIEFscGhhLTFcclxuICogQGF1dGhvcjogQ29vbGl0ZSBJbmMuIGh0dHA6Ly93d3cuY29vbGl0ZS5jb20vXHJcbiAqIEBkYXRlOiAyMDA4LTA1LTEzXHJcbiAqIEBjb3B5cmlnaHQ6IENvcHlyaWdodCAoYykgMjAwNi0yMDA4LCBDb29saXRlIEluYy4gKGh0dHA6Ly93d3cuY29vbGl0ZS5jb20vKS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogQGxpY2Vuc2U6IExpY2Vuc2VkIHVuZGVyIFRoZSBNSVQgTGljZW5zZS4gU2VlIGxpY2Vuc2UudHh0IGFuZCBodHRwOi8vd3d3LmRhdGVqcy5jb20vbGljZW5zZS8uIFxyXG4gKiBAd2Vic2l0ZTogaHR0cDovL3d3dy5kYXRlanMuY29tL1xyXG4gKi9cclxuRGF0ZS5DdWx0dXJlSW5mbz17bmFtZTpcImVuLVVTXCIsZW5nbGlzaE5hbWU6XCJFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiLG5hdGl2ZU5hbWU6XCJFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiLGRheU5hbWVzOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLGFiYnJldmlhdGVkRGF5TmFtZXM6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLHNob3J0ZXN0RGF5TmFtZXM6W1wiU3VcIixcIk1vXCIsXCJUdVwiLFwiV2VcIixcIlRoXCIsXCJGclwiLFwiU2FcIl0sZmlyc3RMZXR0ZXJEYXlOYW1lczpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLG1vbnRoTmFtZXM6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLGFiYnJldmlhdGVkTW9udGhOYW1lczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLGFtRGVzaWduYXRvcjpcIkFNXCIscG1EZXNpZ25hdG9yOlwiUE1cIixmaXJzdERheU9mV2VlazowLHR3b0RpZ2l0WWVhck1heDoyMDI5LGRhdGVFbGVtZW50T3JkZXI6XCJtZHlcIixmb3JtYXRQYXR0ZXJuczp7c2hvcnREYXRlOlwiTS9kL3l5eXlcIixsb25nRGF0ZTpcImRkZGQsIE1NTU0gZGQsIHl5eXlcIixzaG9ydFRpbWU6XCJoOm1tIHR0XCIsbG9uZ1RpbWU6XCJoOm1tOnNzIHR0XCIsZnVsbERhdGVUaW1lOlwiZGRkZCwgTU1NTSBkZCwgeXl5eSBoOm1tOnNzIHR0XCIsc29ydGFibGVEYXRlVGltZTpcInl5eXktTU0tZGRUSEg6bW06c3NcIix1bml2ZXJzYWxTb3J0YWJsZURhdGVUaW1lOlwieXl5eS1NTS1kZCBISDptbTpzc1pcIixyZmMxMTIzOlwiZGRkLCBkZCBNTU0geXl5eSBISDptbTpzcyBHTVRcIixtb250aERheTpcIk1NTU0gZGRcIix5ZWFyTW9udGg6XCJNTU1NLCB5eXl5XCJ9LHJlZ2V4UGF0dGVybnM6e2phbjovXmphbih1YXJ5KT8vaSxmZWI6L15mZWIocnVhcnkpPy9pLG1hcjovXm1hcihjaCk/L2ksYXByOi9eYXByKGlsKT8vaSxtYXk6L15tYXkvaSxqdW46L15qdW4oZSk/L2ksanVsOi9eanVsKHkpPy9pLGF1ZzovXmF1Zyh1c3QpPy9pLHNlcDovXnNlcCh0KGVtYmVyKT8pPy9pLG9jdDovXm9jdChvYmVyKT8vaSxub3Y6L15ub3YoZW1iZXIpPy9pLGRlYzovXmRlYyhlbWJlcik/L2ksc3VuOi9ec3UobihkYXkpPyk/L2ksbW9uOi9ebW8obihkYXkpPyk/L2ksdHVlOi9edHUoZShzKGRheSk/KT8pPy9pLHdlZDovXndlKGQobmVzZGF5KT8pPy9pLHRodTovXnRoKHUocihzKGRheSk/KT8pPyk/L2ksZnJpOi9eZnIoaShkYXkpPyk/L2ksc2F0Oi9ec2EodCh1cmRheSk/KT8vaSxmdXR1cmU6L15uZXh0L2kscGFzdDovXmxhc3R8cGFzdHxwcmV2KGlvdXMpPy9pLGFkZDovXihcXCt8YWZ0KGVyKT98ZnJvbXxoZW5jZSkvaSxzdWJ0cmFjdDovXihcXC18YmVmKG9yZSk/fGFnbykvaSx5ZXN0ZXJkYXk6L155ZXModGVyZGF5KT8vaSx0b2RheTovXnQob2QoYXkpPyk/L2ksdG9tb3Jyb3c6L150b20ob3Jyb3cpPy9pLG5vdzovXm4ob3cpPy9pLG1pbGxpc2Vjb25kOi9ebXN8bWlsbGkoc2Vjb25kKT9zPy9pLHNlY29uZDovXnNlYyhvbmQpP3M/L2ksbWludXRlOi9ebW58bWluKHV0ZSk/cz8vaSxob3VyOi9eaChvdXIpP3M/L2ksd2VlazovXncoZWVrKT9zPy9pLG1vbnRoOi9ebShvbnRoKT9zPy9pLGRheTovXmQoYXkpP3M/L2kseWVhcjovXnkoZWFyKT9zPy9pLHNob3J0TWVyaWRpYW46L14oYXxwKS9pLGxvbmdNZXJpZGlhbjovXihhXFwuP20/XFwuP3xwXFwuP20/XFwuPykvaSx0aW1lem9uZTovXigoZShzfGQpdHxjKHN8ZCl0fG0oc3xkKXR8cChzfGQpdCl8KChnbXQpP1xccyooXFwrfFxcLSlcXHMqXFxkXFxkXFxkXFxkPyl8Z210fHV0YykvaSxvcmRpbmFsU3VmZml4Oi9eXFxzKihzdHxuZHxyZHx0aCkvaSx0aW1lQ29udGV4dDovXlxccyooXFw6fGEoPyF1fHApfHApL2l9LHRpbWV6b25lczpbe25hbWU6XCJVVENcIixvZmZzZXQ6XCItMDAwXCJ9LHtuYW1lOlwiR01UXCIsb2Zmc2V0OlwiLTAwMFwifSx7bmFtZTpcIkVTVFwiLG9mZnNldDpcIi0wNTAwXCJ9LHtuYW1lOlwiRURUXCIsb2Zmc2V0OlwiLTA0MDBcIn0se25hbWU6XCJDU1RcIixvZmZzZXQ6XCItMDYwMFwifSx7bmFtZTpcIkNEVFwiLG9mZnNldDpcIi0wNTAwXCJ9LHtuYW1lOlwiTVNUXCIsb2Zmc2V0OlwiLTA3MDBcIn0se25hbWU6XCJNRFRcIixvZmZzZXQ6XCItMDYwMFwifSx7bmFtZTpcIlBTVFwiLG9mZnNldDpcIi0wODAwXCJ9LHtuYW1lOlwiUERUXCIsb2Zmc2V0OlwiLTA3MDBcIn1dfTtcbihmdW5jdGlvbigpe3ZhciAkRD1EYXRlLCRQPSRELnByb3RvdHlwZSwkQz0kRC5DdWx0dXJlSW5mbyxwPWZ1bmN0aW9uKHMsbCl7aWYoIWwpe2w9Mjt9XG5yZXR1cm4oXCIwMDBcIitzKS5zbGljZShsKi0xKTt9OyRQLmNsZWFyVGltZT1mdW5jdGlvbigpe3RoaXMuc2V0SG91cnMoMCk7dGhpcy5zZXRNaW51dGVzKDApO3RoaXMuc2V0U2Vjb25kcygwKTt0aGlzLnNldE1pbGxpc2Vjb25kcygwKTtyZXR1cm4gdGhpczt9OyRQLnNldFRpbWVUb05vdz1mdW5jdGlvbigpe3ZhciBuPW5ldyBEYXRlKCk7dGhpcy5zZXRIb3VycyhuLmdldEhvdXJzKCkpO3RoaXMuc2V0TWludXRlcyhuLmdldE1pbnV0ZXMoKSk7dGhpcy5zZXRTZWNvbmRzKG4uZ2V0U2Vjb25kcygpKTt0aGlzLnNldE1pbGxpc2Vjb25kcyhuLmdldE1pbGxpc2Vjb25kcygpKTtyZXR1cm4gdGhpczt9OyRELnRvZGF5PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKCkuY2xlYXJUaW1lKCk7fTskRC5jb21wYXJlPWZ1bmN0aW9uKGRhdGUxLGRhdGUyKXtpZihpc05hTihkYXRlMSl8fGlzTmFOKGRhdGUyKSl7dGhyb3cgbmV3IEVycm9yKGRhdGUxK1wiIC0gXCIrZGF0ZTIpO31lbHNlIGlmKGRhdGUxIGluc3RhbmNlb2YgRGF0ZSYmZGF0ZTIgaW5zdGFuY2VvZiBEYXRlKXtyZXR1cm4oZGF0ZTE8ZGF0ZTIpPy0xOihkYXRlMT5kYXRlMik/MTowO31lbHNle3Rocm93IG5ldyBUeXBlRXJyb3IoZGF0ZTErXCIgLSBcIitkYXRlMik7fX07JEQuZXF1YWxzPWZ1bmN0aW9uKGRhdGUxLGRhdGUyKXtyZXR1cm4oZGF0ZTEuY29tcGFyZVRvKGRhdGUyKT09PTApO307JEQuZ2V0RGF5TnVtYmVyRnJvbU5hbWU9ZnVuY3Rpb24obmFtZSl7dmFyIG49JEMuZGF5TmFtZXMsbT0kQy5hYmJyZXZpYXRlZERheU5hbWVzLG89JEMuc2hvcnRlc3REYXlOYW1lcyxzPW5hbWUudG9Mb3dlckNhc2UoKTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7aWYobltpXS50b0xvd2VyQ2FzZSgpPT1zfHxtW2ldLnRvTG93ZXJDYXNlKCk9PXN8fG9baV0udG9Mb3dlckNhc2UoKT09cyl7cmV0dXJuIGk7fX1cbnJldHVybi0xO307JEQuZ2V0TW9udGhOdW1iZXJGcm9tTmFtZT1mdW5jdGlvbihuYW1lKXt2YXIgbj0kQy5tb250aE5hbWVzLG09JEMuYWJicmV2aWF0ZWRNb250aE5hbWVzLHM9bmFtZS50b0xvd2VyQ2FzZSgpO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXtpZihuW2ldLnRvTG93ZXJDYXNlKCk9PXN8fG1baV0udG9Mb3dlckNhc2UoKT09cyl7cmV0dXJuIGk7fX1cbnJldHVybi0xO307JEQuaXNMZWFwWWVhcj1mdW5jdGlvbih5ZWFyKXtyZXR1cm4oKHllYXIlND09PTAmJnllYXIlMTAwIT09MCl8fHllYXIlNDAwPT09MCk7fTskRC5nZXREYXlzSW5Nb250aD1mdW5jdGlvbih5ZWFyLG1vbnRoKXtyZXR1cm5bMzEsKCRELmlzTGVhcFllYXIoeWVhcik/Mjk6MjgpLDMxLDMwLDMxLDMwLDMxLDMxLDMwLDMxLDMwLDMxXVttb250aF07fTskRC5nZXRUaW1lem9uZUFiYnJldmlhdGlvbj1mdW5jdGlvbihvZmZzZXQpe3ZhciB6PSRDLnRpbWV6b25lcyxwO2Zvcih2YXIgaT0wO2k8ei5sZW5ndGg7aSsrKXtpZih6W2ldLm9mZnNldD09PW9mZnNldCl7cmV0dXJuIHpbaV0ubmFtZTt9fVxucmV0dXJuIG51bGw7fTskRC5nZXRUaW1lem9uZU9mZnNldD1mdW5jdGlvbihuYW1lKXt2YXIgej0kQy50aW1lem9uZXMscDtmb3IodmFyIGk9MDtpPHoubGVuZ3RoO2krKyl7aWYoeltpXS5uYW1lPT09bmFtZS50b1VwcGVyQ2FzZSgpKXtyZXR1cm4geltpXS5vZmZzZXQ7fX1cbnJldHVybiBudWxsO307JFAuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy5nZXRUaW1lKCkpO307JFAuY29tcGFyZVRvPWZ1bmN0aW9uKGRhdGUpe3JldHVybiBEYXRlLmNvbXBhcmUodGhpcyxkYXRlKTt9OyRQLmVxdWFscz1mdW5jdGlvbihkYXRlKXtyZXR1cm4gRGF0ZS5lcXVhbHModGhpcyxkYXRlfHxuZXcgRGF0ZSgpKTt9OyRQLmJldHdlZW49ZnVuY3Rpb24oc3RhcnQsZW5kKXtyZXR1cm4gdGhpcy5nZXRUaW1lKCk+PXN0YXJ0LmdldFRpbWUoKSYmdGhpcy5nZXRUaW1lKCk8PWVuZC5nZXRUaW1lKCk7fTskUC5pc0FmdGVyPWZ1bmN0aW9uKGRhdGUpe3JldHVybiB0aGlzLmNvbXBhcmVUbyhkYXRlfHxuZXcgRGF0ZSgpKT09PTE7fTskUC5pc0JlZm9yZT1mdW5jdGlvbihkYXRlKXtyZXR1cm4odGhpcy5jb21wYXJlVG8oZGF0ZXx8bmV3IERhdGUoKSk9PT0tMSk7fTskUC5pc1RvZGF5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNTYW1lRGF5KG5ldyBEYXRlKCkpO307JFAuaXNTYW1lRGF5PWZ1bmN0aW9uKGRhdGUpe3JldHVybiB0aGlzLmNsb25lKCkuY2xlYXJUaW1lKCkuZXF1YWxzKGRhdGUuY2xvbmUoKS5jbGVhclRpbWUoKSk7fTskUC5hZGRNaWxsaXNlY29uZHM9ZnVuY3Rpb24odmFsdWUpe3RoaXMuc2V0TWlsbGlzZWNvbmRzKHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkrdmFsdWUpO3JldHVybiB0aGlzO307JFAuYWRkU2Vjb25kcz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkTWlsbGlzZWNvbmRzKHZhbHVlKjEwMDApO307JFAuYWRkTWludXRlcz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkTWlsbGlzZWNvbmRzKHZhbHVlKjYwMDAwKTt9OyRQLmFkZEhvdXJzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGRNaWxsaXNlY29uZHModmFsdWUqMzYwMDAwMCk7fTskUC5hZGREYXlzPWZ1bmN0aW9uKHZhbHVlKXt0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkrdmFsdWUpO3JldHVybiB0aGlzO307JFAuYWRkV2Vla3M9ZnVuY3Rpb24odmFsdWUpe3JldHVybiB0aGlzLmFkZERheXModmFsdWUqNyk7fTskUC5hZGRNb250aHM9ZnVuY3Rpb24odmFsdWUpe3ZhciBuPXRoaXMuZ2V0RGF0ZSgpO3RoaXMuc2V0RGF0ZSgxKTt0aGlzLnNldE1vbnRoKHRoaXMuZ2V0TW9udGgoKSt2YWx1ZSk7dGhpcy5zZXREYXRlKE1hdGgubWluKG4sJEQuZ2V0RGF5c0luTW9udGgodGhpcy5nZXRGdWxsWWVhcigpLHRoaXMuZ2V0TW9udGgoKSkpKTtyZXR1cm4gdGhpczt9OyRQLmFkZFllYXJzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGRNb250aHModmFsdWUqMTIpO307JFAuYWRkPWZ1bmN0aW9uKGNvbmZpZyl7aWYodHlwZW9mIGNvbmZpZz09XCJudW1iZXJcIil7dGhpcy5fb3JpZW50PWNvbmZpZztyZXR1cm4gdGhpczt9XG52YXIgeD1jb25maWc7aWYoeC5taWxsaXNlY29uZHMpe3RoaXMuYWRkTWlsbGlzZWNvbmRzKHgubWlsbGlzZWNvbmRzKTt9XG5pZih4LnNlY29uZHMpe3RoaXMuYWRkU2Vjb25kcyh4LnNlY29uZHMpO31cbmlmKHgubWludXRlcyl7dGhpcy5hZGRNaW51dGVzKHgubWludXRlcyk7fVxuaWYoeC5ob3Vycyl7dGhpcy5hZGRIb3Vycyh4LmhvdXJzKTt9XG5pZih4LndlZWtzKXt0aGlzLmFkZFdlZWtzKHgud2Vla3MpO31cbmlmKHgubW9udGhzKXt0aGlzLmFkZE1vbnRocyh4Lm1vbnRocyk7fVxuaWYoeC55ZWFycyl7dGhpcy5hZGRZZWFycyh4LnllYXJzKTt9XG5pZih4LmRheXMpe3RoaXMuYWRkRGF5cyh4LmRheXMpO31cbnJldHVybiB0aGlzO307dmFyICR5LCRtLCRkOyRQLmdldFdlZWs9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZyxuLHMsdzskeT0oISR5KT90aGlzLmdldEZ1bGxZZWFyKCk6JHk7JG09KCEkbSk/dGhpcy5nZXRNb250aCgpKzE6JG07JGQ9KCEkZCk/dGhpcy5nZXREYXRlKCk6JGQ7aWYoJG08PTIpe2E9JHktMTtiPShhLzR8MCktKGEvMTAwfDApKyhhLzQwMHwwKTtjPSgoYS0xKS80fDApLSgoYS0xKS8xMDB8MCkrKChhLTEpLzQwMHwwKTtzPWItYztlPTA7Zj0kZC0xKygzMSooJG0tMSkpO31lbHNle2E9JHk7Yj0oYS80fDApLShhLzEwMHwwKSsoYS80MDB8MCk7Yz0oKGEtMSkvNHwwKS0oKGEtMSkvMTAwfDApKygoYS0xKS80MDB8MCk7cz1iLWM7ZT1zKzE7Zj0kZCsoKDE1MyooJG0tMykrMikvNSkrNTgrczt9XG5nPShhK2IpJTc7ZD0oZitnLWUpJTc7bj0oZiszLWQpfDA7aWYobjwwKXt3PTUzLSgoZy1zKS81fDApO31lbHNlIGlmKG4+MzY0K3Mpe3c9MTt9ZWxzZXt3PShuLzd8MCkrMTt9XG4keT0kbT0kZD1udWxsO3JldHVybiB3O307JFAuZ2V0SVNPV2Vlaz1mdW5jdGlvbigpeyR5PXRoaXMuZ2V0VVRDRnVsbFllYXIoKTskbT10aGlzLmdldFVUQ01vbnRoKCkrMTskZD10aGlzLmdldFVUQ0RhdGUoKTtyZXR1cm4gcCh0aGlzLmdldFdlZWsoKSk7fTskUC5zZXRXZWVrPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLm1vdmVUb0RheU9mV2VlaygxKS5hZGRXZWVrcyhuLXRoaXMuZ2V0V2VlaygpKTt9OyRELl92YWxpZGF0ZT1mdW5jdGlvbihuLG1pbixtYXgsbmFtZSl7aWYodHlwZW9mIG49PVwidW5kZWZpbmVkXCIpe3JldHVybiBmYWxzZTt9ZWxzZSBpZih0eXBlb2YgbiE9XCJudW1iZXJcIil7dGhyb3cgbmV3IFR5cGVFcnJvcihuK1wiIGlzIG5vdCBhIE51bWJlci5cIik7fWVsc2UgaWYobjxtaW58fG4+bWF4KXt0aHJvdyBuZXcgUmFuZ2VFcnJvcihuK1wiIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBcIituYW1lK1wiLlwiKTt9XG5yZXR1cm4gdHJ1ZTt9OyRELnZhbGlkYXRlTWlsbGlzZWNvbmQ9ZnVuY3Rpb24odmFsdWUpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMCw5OTksXCJtaWxsaXNlY29uZFwiKTt9OyRELnZhbGlkYXRlU2Vjb25kPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDAsNTksXCJzZWNvbmRcIik7fTskRC52YWxpZGF0ZU1pbnV0ZT1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwwLDU5LFwibWludXRlXCIpO307JEQudmFsaWRhdGVIb3VyPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDAsMjMsXCJob3VyXCIpO307JEQudmFsaWRhdGVEYXk9ZnVuY3Rpb24odmFsdWUseWVhcixtb250aCl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwxLCRELmdldERheXNJbk1vbnRoKHllYXIsbW9udGgpLFwiZGF5XCIpO307JEQudmFsaWRhdGVNb250aD1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwwLDExLFwibW9udGhcIik7fTskRC52YWxpZGF0ZVllYXI9ZnVuY3Rpb24odmFsdWUpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMCw5OTk5LFwieWVhclwiKTt9OyRQLnNldD1mdW5jdGlvbihjb25maWcpe2lmKCRELnZhbGlkYXRlTWlsbGlzZWNvbmQoY29uZmlnLm1pbGxpc2Vjb25kKSl7dGhpcy5hZGRNaWxsaXNlY29uZHMoY29uZmlnLm1pbGxpc2Vjb25kLXRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkpO31cbmlmKCRELnZhbGlkYXRlU2Vjb25kKGNvbmZpZy5zZWNvbmQpKXt0aGlzLmFkZFNlY29uZHMoY29uZmlnLnNlY29uZC10aGlzLmdldFNlY29uZHMoKSk7fVxuaWYoJEQudmFsaWRhdGVNaW51dGUoY29uZmlnLm1pbnV0ZSkpe3RoaXMuYWRkTWludXRlcyhjb25maWcubWludXRlLXRoaXMuZ2V0TWludXRlcygpKTt9XG5pZigkRC52YWxpZGF0ZUhvdXIoY29uZmlnLmhvdXIpKXt0aGlzLmFkZEhvdXJzKGNvbmZpZy5ob3VyLXRoaXMuZ2V0SG91cnMoKSk7fVxuaWYoJEQudmFsaWRhdGVNb250aChjb25maWcubW9udGgpKXt0aGlzLmFkZE1vbnRocyhjb25maWcubW9udGgtdGhpcy5nZXRNb250aCgpKTt9XG5pZigkRC52YWxpZGF0ZVllYXIoY29uZmlnLnllYXIpKXt0aGlzLmFkZFllYXJzKGNvbmZpZy55ZWFyLXRoaXMuZ2V0RnVsbFllYXIoKSk7fVxuaWYoJEQudmFsaWRhdGVEYXkoY29uZmlnLmRheSx0aGlzLmdldEZ1bGxZZWFyKCksdGhpcy5nZXRNb250aCgpKSl7dGhpcy5hZGREYXlzKGNvbmZpZy5kYXktdGhpcy5nZXREYXRlKCkpO31cbmlmKGNvbmZpZy50aW1lem9uZSl7dGhpcy5zZXRUaW1lem9uZShjb25maWcudGltZXpvbmUpO31cbmlmKGNvbmZpZy50aW1lem9uZU9mZnNldCl7dGhpcy5zZXRUaW1lem9uZU9mZnNldChjb25maWcudGltZXpvbmVPZmZzZXQpO31cbmlmKGNvbmZpZy53ZWVrJiYkRC5fdmFsaWRhdGUoY29uZmlnLndlZWssMCw1MyxcIndlZWtcIikpe3RoaXMuc2V0V2Vlayhjb25maWcud2Vlayk7fVxucmV0dXJuIHRoaXM7fTskUC5tb3ZlVG9GaXJzdERheU9mTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXQoe2RheToxfSk7fTskUC5tb3ZlVG9MYXN0RGF5T2ZNb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNldCh7ZGF5OiRELmdldERheXNJbk1vbnRoKHRoaXMuZ2V0RnVsbFllYXIoKSx0aGlzLmdldE1vbnRoKCkpfSk7fTskUC5tb3ZlVG9OdGhPY2N1cnJlbmNlPWZ1bmN0aW9uKGRheU9mV2VlayxvY2N1cnJlbmNlKXt2YXIgc2hpZnQ9MDtpZihvY2N1cnJlbmNlPjApe3NoaWZ0PW9jY3VycmVuY2UtMTt9XG5lbHNlIGlmKG9jY3VycmVuY2U9PT0tMSl7dGhpcy5tb3ZlVG9MYXN0RGF5T2ZNb250aCgpO2lmKHRoaXMuZ2V0RGF5KCkhPT1kYXlPZldlZWspe3RoaXMubW92ZVRvRGF5T2ZXZWVrKGRheU9mV2VlaywtMSk7fVxucmV0dXJuIHRoaXM7fVxucmV0dXJuIHRoaXMubW92ZVRvRmlyc3REYXlPZk1vbnRoKCkuYWRkRGF5cygtMSkubW92ZVRvRGF5T2ZXZWVrKGRheU9mV2VlaywrMSkuYWRkV2Vla3Moc2hpZnQpO307JFAubW92ZVRvRGF5T2ZXZWVrPWZ1bmN0aW9uKGRheU9mV2VlayxvcmllbnQpe3ZhciBkaWZmPShkYXlPZldlZWstdGhpcy5nZXREYXkoKSs3KihvcmllbnR8fCsxKSklNztyZXR1cm4gdGhpcy5hZGREYXlzKChkaWZmPT09MCk/ZGlmZis9Nyoob3JpZW50fHwrMSk6ZGlmZik7fTskUC5tb3ZlVG9Nb250aD1mdW5jdGlvbihtb250aCxvcmllbnQpe3ZhciBkaWZmPShtb250aC10aGlzLmdldE1vbnRoKCkrMTIqKG9yaWVudHx8KzEpKSUxMjtyZXR1cm4gdGhpcy5hZGRNb250aHMoKGRpZmY9PT0wKT9kaWZmKz0xMioob3JpZW50fHwrMSk6ZGlmZik7fTskUC5nZXRPcmRpbmFsTnVtYmVyPWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguY2VpbCgodGhpcy5jbG9uZSgpLmNsZWFyVGltZSgpLW5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwwLDEpKS84NjQwMDAwMCkrMTt9OyRQLmdldFRpbWV6b25lPWZ1bmN0aW9uKCl7cmV0dXJuICRELmdldFRpbWV6b25lQWJicmV2aWF0aW9uKHRoaXMuZ2V0VVRDT2Zmc2V0KCkpO307JFAuc2V0VGltZXpvbmVPZmZzZXQ9ZnVuY3Rpb24ob2Zmc2V0KXt2YXIgaGVyZT10aGlzLmdldFRpbWV6b25lT2Zmc2V0KCksdGhlcmU9TnVtYmVyKG9mZnNldCkqLTYvMTA7cmV0dXJuIHRoaXMuYWRkTWludXRlcyh0aGVyZS1oZXJlKTt9OyRQLnNldFRpbWV6b25lPWZ1bmN0aW9uKG9mZnNldCl7cmV0dXJuIHRoaXMuc2V0VGltZXpvbmVPZmZzZXQoJEQuZ2V0VGltZXpvbmVPZmZzZXQob2Zmc2V0KSk7fTskUC5oYXNEYXlsaWdodFNhdmluZ1RpbWU9ZnVuY3Rpb24oKXtyZXR1cm4oRGF0ZS50b2RheSgpLnNldCh7bW9udGg6MCxkYXk6MX0pLmdldFRpbWV6b25lT2Zmc2V0KCkhPT1EYXRlLnRvZGF5KCkuc2V0KHttb250aDo2LGRheToxfSkuZ2V0VGltZXpvbmVPZmZzZXQoKSk7fTskUC5pc0RheWxpZ2h0U2F2aW5nVGltZT1mdW5jdGlvbigpe3JldHVybih0aGlzLmhhc0RheWxpZ2h0U2F2aW5nVGltZSgpJiZuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk9PT1EYXRlLnRvZGF5KCkuc2V0KHttb250aDo2LGRheToxfSkuZ2V0VGltZXpvbmVPZmZzZXQoKSk7fTskUC5nZXRVVENPZmZzZXQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkqLTEwLzYscjtpZihuPDApe3I9KG4tMTAwMDApLnRvU3RyaW5nKCk7cmV0dXJuIHIuY2hhckF0KDApK3Iuc3Vic3RyKDIpO31lbHNle3I9KG4rMTAwMDApLnRvU3RyaW5nKCk7cmV0dXJuXCIrXCIrci5zdWJzdHIoMSk7fX07JFAuZ2V0RWxhcHNlZD1mdW5jdGlvbihkYXRlKXtyZXR1cm4oZGF0ZXx8bmV3IERhdGUoKSktdGhpczt9O2lmKCEkUC50b0lTT1N0cmluZyl7JFAudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBmKG4pe3JldHVybiBuPDEwPycwJytuOm47fVxucmV0dXJuJ1wiJyt0aGlzLmdldFVUQ0Z1bGxZZWFyKCkrJy0nK1xuZih0aGlzLmdldFVUQ01vbnRoKCkrMSkrJy0nK1xuZih0aGlzLmdldFVUQ0RhdGUoKSkrJ1QnK1xuZih0aGlzLmdldFVUQ0hvdXJzKCkpKyc6JytcbmYodGhpcy5nZXRVVENNaW51dGVzKCkpKyc6JytcbmYodGhpcy5nZXRVVENTZWNvbmRzKCkpKydaXCInO307fVxuJFAuX3RvU3RyaW5nPSRQLnRvU3RyaW5nOyRQLnRvU3RyaW5nPWZ1bmN0aW9uKGZvcm1hdCl7dmFyIHg9dGhpcztpZihmb3JtYXQmJmZvcm1hdC5sZW5ndGg9PTEpe3ZhciBjPSRDLmZvcm1hdFBhdHRlcm5zO3gudD14LnRvU3RyaW5nO3N3aXRjaChmb3JtYXQpe2Nhc2VcImRcIjpyZXR1cm4geC50KGMuc2hvcnREYXRlKTtjYXNlXCJEXCI6cmV0dXJuIHgudChjLmxvbmdEYXRlKTtjYXNlXCJGXCI6cmV0dXJuIHgudChjLmZ1bGxEYXRlVGltZSk7Y2FzZVwibVwiOnJldHVybiB4LnQoYy5tb250aERheSk7Y2FzZVwiclwiOnJldHVybiB4LnQoYy5yZmMxMTIzKTtjYXNlXCJzXCI6cmV0dXJuIHgudChjLnNvcnRhYmxlRGF0ZVRpbWUpO2Nhc2VcInRcIjpyZXR1cm4geC50KGMuc2hvcnRUaW1lKTtjYXNlXCJUXCI6cmV0dXJuIHgudChjLmxvbmdUaW1lKTtjYXNlXCJ1XCI6cmV0dXJuIHgudChjLnVuaXZlcnNhbFNvcnRhYmxlRGF0ZVRpbWUpO2Nhc2VcInlcIjpyZXR1cm4geC50KGMueWVhck1vbnRoKTt9fVxudmFyIG9yZD1mdW5jdGlvbihuKXtzd2l0Y2gobioxKXtjYXNlIDE6Y2FzZSAyMTpjYXNlIDMxOnJldHVyblwic3RcIjtjYXNlIDI6Y2FzZSAyMjpyZXR1cm5cIm5kXCI7Y2FzZSAzOmNhc2UgMjM6cmV0dXJuXCJyZFwiO2RlZmF1bHQ6cmV0dXJuXCJ0aFwiO319O3JldHVybiBmb3JtYXQ/Zm9ybWF0LnJlcGxhY2UoLyhcXFxcKT8oZGQ/ZD9kP3xNTT9NP00/fHl5P3k/eT98aGg/fEhIP3xtbT98c3M/fHR0P3xTKS9nLGZ1bmN0aW9uKG0pe2lmKG0uY2hhckF0KDApPT09XCJcXFxcXCIpe3JldHVybiBtLnJlcGxhY2UoXCJcXFxcXCIsXCJcIik7fVxueC5oPXguZ2V0SG91cnM7c3dpdGNoKG0pe2Nhc2VcImhoXCI6cmV0dXJuIHAoeC5oKCk8MTM/KHguaCgpPT09MD8xMjp4LmgoKSk6KHguaCgpLTEyKSk7Y2FzZVwiaFwiOnJldHVybiB4LmgoKTwxMz8oeC5oKCk9PT0wPzEyOnguaCgpKTooeC5oKCktMTIpO2Nhc2VcIkhIXCI6cmV0dXJuIHAoeC5oKCkpO2Nhc2VcIkhcIjpyZXR1cm4geC5oKCk7Y2FzZVwibW1cIjpyZXR1cm4gcCh4LmdldE1pbnV0ZXMoKSk7Y2FzZVwibVwiOnJldHVybiB4LmdldE1pbnV0ZXMoKTtjYXNlXCJzc1wiOnJldHVybiBwKHguZ2V0U2Vjb25kcygpKTtjYXNlXCJzXCI6cmV0dXJuIHguZ2V0U2Vjb25kcygpO2Nhc2VcInl5eXlcIjpyZXR1cm4gcCh4LmdldEZ1bGxZZWFyKCksNCk7Y2FzZVwieXlcIjpyZXR1cm4gcCh4LmdldEZ1bGxZZWFyKCkpO2Nhc2VcImRkZGRcIjpyZXR1cm4gJEMuZGF5TmFtZXNbeC5nZXREYXkoKV07Y2FzZVwiZGRkXCI6cmV0dXJuICRDLmFiYnJldmlhdGVkRGF5TmFtZXNbeC5nZXREYXkoKV07Y2FzZVwiZGRcIjpyZXR1cm4gcCh4LmdldERhdGUoKSk7Y2FzZVwiZFwiOnJldHVybiB4LmdldERhdGUoKTtjYXNlXCJNTU1NXCI6cmV0dXJuICRDLm1vbnRoTmFtZXNbeC5nZXRNb250aCgpXTtjYXNlXCJNTU1cIjpyZXR1cm4gJEMuYWJicmV2aWF0ZWRNb250aE5hbWVzW3guZ2V0TW9udGgoKV07Y2FzZVwiTU1cIjpyZXR1cm4gcCgoeC5nZXRNb250aCgpKzEpKTtjYXNlXCJNXCI6cmV0dXJuIHguZ2V0TW9udGgoKSsxO2Nhc2VcInRcIjpyZXR1cm4geC5oKCk8MTI/JEMuYW1EZXNpZ25hdG9yLnN1YnN0cmluZygwLDEpOiRDLnBtRGVzaWduYXRvci5zdWJzdHJpbmcoMCwxKTtjYXNlXCJ0dFwiOnJldHVybiB4LmgoKTwxMj8kQy5hbURlc2lnbmF0b3I6JEMucG1EZXNpZ25hdG9yO2Nhc2VcIlNcIjpyZXR1cm4gb3JkKHguZ2V0RGF0ZSgpKTtkZWZhdWx0OnJldHVybiBtO319KTp0aGlzLl90b1N0cmluZygpO307fSgpKTtcbihmdW5jdGlvbigpe3ZhciAkRD1EYXRlLCRQPSRELnByb3RvdHlwZSwkQz0kRC5DdWx0dXJlSW5mbywkTj1OdW1iZXIucHJvdG90eXBlOyRQLl9vcmllbnQ9KzE7JFAuX250aD1udWxsOyRQLl9pcz1mYWxzZTskUC5fc2FtZT1mYWxzZTskUC5faXNTZWNvbmQ9ZmFsc2U7JE4uX2RhdGVFbGVtZW50PVwiZGF5XCI7JFAubmV4dD1mdW5jdGlvbigpe3RoaXMuX29yaWVudD0rMTtyZXR1cm4gdGhpczt9OyRELm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm4gJEQudG9kYXkoKS5uZXh0KCk7fTskUC5sYXN0PSRQLnByZXY9JFAucHJldmlvdXM9ZnVuY3Rpb24oKXt0aGlzLl9vcmllbnQ9LTE7cmV0dXJuIHRoaXM7fTskRC5sYXN0PSRELnByZXY9JEQucHJldmlvdXM9ZnVuY3Rpb24oKXtyZXR1cm4gJEQudG9kYXkoKS5sYXN0KCk7fTskUC5pcz1mdW5jdGlvbigpe3RoaXMuX2lzPXRydWU7cmV0dXJuIHRoaXM7fTskUC5zYW1lPWZ1bmN0aW9uKCl7dGhpcy5fc2FtZT10cnVlO3RoaXMuX2lzU2Vjb25kPWZhbHNlO3JldHVybiB0aGlzO307JFAudG9kYXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zYW1lKCkuZGF5KCk7fTskUC53ZWVrZGF5PWZ1bmN0aW9uKCl7aWYodGhpcy5faXMpe3RoaXMuX2lzPWZhbHNlO3JldHVybighdGhpcy5pcygpLnNhdCgpJiYhdGhpcy5pcygpLnN1bigpKTt9XG5yZXR1cm4gZmFsc2U7fTskUC5hdD1mdW5jdGlvbih0aW1lKXtyZXR1cm4odHlwZW9mIHRpbWU9PT1cInN0cmluZ1wiKT8kRC5wYXJzZSh0aGlzLnRvU3RyaW5nKFwiZFwiKStcIiBcIit0aW1lKTp0aGlzLnNldCh0aW1lKTt9OyROLmZyb21Ob3c9JE4uYWZ0ZXI9ZnVuY3Rpb24oZGF0ZSl7dmFyIGM9e307Y1t0aGlzLl9kYXRlRWxlbWVudF09dGhpcztyZXR1cm4oKCFkYXRlKT9uZXcgRGF0ZSgpOmRhdGUuY2xvbmUoKSkuYWRkKGMpO307JE4uYWdvPSROLmJlZm9yZT1mdW5jdGlvbihkYXRlKXt2YXIgYz17fTtjW3RoaXMuX2RhdGVFbGVtZW50XT10aGlzKi0xO3JldHVybigoIWRhdGUpP25ldyBEYXRlKCk6ZGF0ZS5jbG9uZSgpKS5hZGQoYyk7fTt2YXIgZHg9KFwic3VuZGF5IG1vbmRheSB0dWVzZGF5IHdlZG5lc2RheSB0aHVyc2RheSBmcmlkYXkgc2F0dXJkYXlcIikuc3BsaXQoL1xccy8pLG14PShcImphbnVhcnkgZmVicnVhcnkgbWFyY2ggYXByaWwgbWF5IGp1bmUganVseSBhdWd1c3Qgc2VwdGVtYmVyIG9jdG9iZXIgbm92ZW1iZXIgZGVjZW1iZXJcIikuc3BsaXQoL1xccy8pLHB4PShcIk1pbGxpc2Vjb25kIFNlY29uZCBNaW51dGUgSG91ciBEYXkgV2VlayBNb250aCBZZWFyXCIpLnNwbGl0KC9cXHMvKSxweGY9KFwiTWlsbGlzZWNvbmRzIFNlY29uZHMgTWludXRlcyBIb3VycyBEYXRlIFdlZWsgTW9udGggRnVsbFllYXJcIikuc3BsaXQoL1xccy8pLG50aD0oXCJmaW5hbCBmaXJzdCBzZWNvbmQgdGhpcmQgZm91cnRoIGZpZnRoXCIpLnNwbGl0KC9cXHMvKSxkZTskUC50b09iamVjdD1mdW5jdGlvbigpe3ZhciBvPXt9O2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7b1tweFtpXS50b0xvd2VyQ2FzZSgpXT10aGlzW1wiZ2V0XCIrcHhmW2ldXSgpO31cbnJldHVybiBvO307JEQuZnJvbU9iamVjdD1mdW5jdGlvbihjb25maWcpe2NvbmZpZy53ZWVrPW51bGw7cmV0dXJuIERhdGUudG9kYXkoKS5zZXQoY29uZmlnKTt9O3ZhciBkZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtpZih0aGlzLl9pcyl7dGhpcy5faXM9ZmFsc2U7cmV0dXJuIHRoaXMuZ2V0RGF5KCk9PW47fVxuaWYodGhpcy5fbnRoIT09bnVsbCl7aWYodGhpcy5faXNTZWNvbmQpe3RoaXMuYWRkU2Vjb25kcyh0aGlzLl9vcmllbnQqLTEpO31cbnRoaXMuX2lzU2Vjb25kPWZhbHNlO3ZhciBudGVtcD10aGlzLl9udGg7dGhpcy5fbnRoPW51bGw7dmFyIHRlbXA9dGhpcy5jbG9uZSgpLm1vdmVUb0xhc3REYXlPZk1vbnRoKCk7dGhpcy5tb3ZlVG9OdGhPY2N1cnJlbmNlKG4sbnRlbXApO2lmKHRoaXM+dGVtcCl7dGhyb3cgbmV3IFJhbmdlRXJyb3IoJEQuZ2V0RGF5TmFtZShuKStcIiBkb2VzIG5vdCBvY2N1ciBcIitudGVtcCtcIiB0aW1lcyBpbiB0aGUgbW9udGggb2YgXCIrJEQuZ2V0TW9udGhOYW1lKHRlbXAuZ2V0TW9udGgoKSkrXCIgXCIrdGVtcC5nZXRGdWxsWWVhcigpK1wiLlwiKTt9XG5yZXR1cm4gdGhpczt9XG5yZXR1cm4gdGhpcy5tb3ZlVG9EYXlPZldlZWsobix0aGlzLl9vcmllbnQpO307fTt2YXIgc2RmPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciB0PSRELnRvZGF5KCksc2hpZnQ9bi10LmdldERheSgpO2lmKG49PT0wJiYkQy5maXJzdERheU9mV2Vlaz09PTEmJnQuZ2V0RGF5KCkhPT0wKXtzaGlmdD1zaGlmdCs3O31cbnJldHVybiB0LmFkZERheXMoc2hpZnQpO307fTtmb3IodmFyIGk9MDtpPGR4Lmxlbmd0aDtpKyspeyREW2R4W2ldLnRvVXBwZXJDYXNlKCldPSREW2R4W2ldLnRvVXBwZXJDYXNlKCkuc3Vic3RyaW5nKDAsMyldPWk7JERbZHhbaV1dPSREW2R4W2ldLnN1YnN0cmluZygwLDMpXT1zZGYoaSk7JFBbZHhbaV1dPSRQW2R4W2ldLnN1YnN0cmluZygwLDMpXT1kZihpKTt9XG52YXIgbWY9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7aWYodGhpcy5faXMpe3RoaXMuX2lzPWZhbHNlO3JldHVybiB0aGlzLmdldE1vbnRoKCk9PT1uO31cbnJldHVybiB0aGlzLm1vdmVUb01vbnRoKG4sdGhpcy5fb3JpZW50KTt9O307dmFyIHNtZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gJEQudG9kYXkoKS5zZXQoe21vbnRoOm4sZGF5OjF9KTt9O307Zm9yKHZhciBqPTA7ajxteC5sZW5ndGg7aisrKXskRFtteFtqXS50b1VwcGVyQ2FzZSgpXT0kRFtteFtqXS50b1VwcGVyQ2FzZSgpLnN1YnN0cmluZygwLDMpXT1qOyREW214W2pdXT0kRFtteFtqXS5zdWJzdHJpbmcoMCwzKV09c21mKGopOyRQW214W2pdXT0kUFtteFtqXS5zdWJzdHJpbmcoMCwzKV09bWYoaik7fVxudmFyIGVmPWZ1bmN0aW9uKGope3JldHVybiBmdW5jdGlvbigpe2lmKHRoaXMuX2lzU2Vjb25kKXt0aGlzLl9pc1NlY29uZD1mYWxzZTtyZXR1cm4gdGhpczt9XG5pZih0aGlzLl9zYW1lKXt0aGlzLl9zYW1lPXRoaXMuX2lzPWZhbHNlO3ZhciBvMT10aGlzLnRvT2JqZWN0KCksbzI9KGFyZ3VtZW50c1swXXx8bmV3IERhdGUoKSkudG9PYmplY3QoKSx2PVwiXCIsaz1qLnRvTG93ZXJDYXNlKCk7Zm9yKHZhciBtPShweC5sZW5ndGgtMSk7bT4tMTttLS0pe3Y9cHhbbV0udG9Mb3dlckNhc2UoKTtpZihvMVt2XSE9bzJbdl0pe3JldHVybiBmYWxzZTt9XG5pZihrPT12KXticmVhazt9fVxucmV0dXJuIHRydWU7fVxuaWYoai5zdWJzdHJpbmcoai5sZW5ndGgtMSkhPVwic1wiKXtqKz1cInNcIjt9XG5yZXR1cm4gdGhpc1tcImFkZFwiK2pdKHRoaXMuX29yaWVudCk7fTt9O3ZhciBuZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLl9kYXRlRWxlbWVudD1uO3JldHVybiB0aGlzO307fTtmb3IodmFyIGs9MDtrPHB4Lmxlbmd0aDtrKyspe2RlPXB4W2tdLnRvTG93ZXJDYXNlKCk7JFBbZGVdPSRQW2RlK1wic1wiXT1lZihweFtrXSk7JE5bZGVdPSROW2RlK1wic1wiXT1uZihkZSk7fVxuJFAuX3NzPWVmKFwiU2Vjb25kXCIpO3ZhciBudGhmbj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oZGF5T2ZXZWVrKXtpZih0aGlzLl9zYW1lKXtyZXR1cm4gdGhpcy5fc3MoYXJndW1lbnRzWzBdKTt9XG5pZihkYXlPZldlZWt8fGRheU9mV2Vlaz09PTApe3JldHVybiB0aGlzLm1vdmVUb050aE9jY3VycmVuY2UoZGF5T2ZXZWVrLG4pO31cbnRoaXMuX250aD1uO2lmKG49PT0yJiYoZGF5T2ZXZWVrPT09dW5kZWZpbmVkfHxkYXlPZldlZWs9PT1udWxsKSl7dGhpcy5faXNTZWNvbmQ9dHJ1ZTtyZXR1cm4gdGhpcy5hZGRTZWNvbmRzKHRoaXMuX29yaWVudCk7fVxucmV0dXJuIHRoaXM7fTt9O2Zvcih2YXIgbD0wO2w8bnRoLmxlbmd0aDtsKyspeyRQW250aFtsXV09KGw9PT0wKT9udGhmbigtMSk6bnRoZm4obCk7fX0oKSk7XG4oZnVuY3Rpb24oKXtEYXRlLlBhcnNpbmc9e0V4Y2VwdGlvbjpmdW5jdGlvbihzKXt0aGlzLm1lc3NhZ2U9XCJQYXJzZSBlcnJvciBhdCAnXCIrcy5zdWJzdHJpbmcoMCwxMCkrXCIgLi4uJ1wiO319O3ZhciAkUD1EYXRlLlBhcnNpbmc7dmFyIF89JFAuT3BlcmF0b3JzPXtydG9rZW46ZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciBteD1zLm1hdGNoKHIpO2lmKG14KXtyZXR1cm4oW214WzBdLHMuc3Vic3RyaW5nKG14WzBdLmxlbmd0aCldKTt9ZWxzZXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO319O30sdG9rZW46ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKHMpe3JldHVybiBfLnJ0b2tlbihuZXcgUmVnRXhwKFwiXlxccypcIitzK1wiXFxzKlwiKSkocyk7fTt9LHN0b2tlbjpmdW5jdGlvbihzKXtyZXR1cm4gXy5ydG9rZW4obmV3IFJlZ0V4cChcIl5cIitzKSk7fSx1bnRpbDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHF4PVtdLHJ4PW51bGw7d2hpbGUocy5sZW5ndGgpe3RyeXtyeD1wLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7cXgucHVzaChyeFswXSk7cz1yeFsxXTtjb250aW51ZTt9XG5icmVhazt9XG5yZXR1cm5bcXgsc107fTt9LG1hbnk6ZnVuY3Rpb24ocCl7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByeD1bXSxyPW51bGw7d2hpbGUocy5sZW5ndGgpe3RyeXtyPXAuY2FsbCh0aGlzLHMpO31jYXRjaChlKXtyZXR1cm5bcngsc107fVxucngucHVzaChyWzBdKTtzPXJbMV07fVxucmV0dXJuW3J4LHNdO307fSxvcHRpb25hbDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDt0cnl7cj1wLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7cmV0dXJuW251bGwsc107fVxucmV0dXJuW3JbMF0sclsxXV07fTt9LG5vdDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dHJ5e3AuY2FsbCh0aGlzLHMpO31jYXRjaChlKXtyZXR1cm5bbnVsbCxzXTt9XG50aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO307fSxpZ25vcmU6ZnVuY3Rpb24ocCl7cmV0dXJuIHA/ZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDtyPXAuY2FsbCh0aGlzLHMpO3JldHVybltudWxsLHJbMV1dO306bnVsbDt9LHByb2R1Y3Q6ZnVuY3Rpb24oKXt2YXIgcHg9YXJndW1lbnRzWzBdLHF4PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxyeD1bXTtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe3J4LnB1c2goXy5lYWNoKHB4W2ldLHF4KSk7fVxucmV0dXJuIHJ4O30sY2FjaGU6ZnVuY3Rpb24ocnVsZSl7dmFyIGNhY2hlPXt9LHI9bnVsbDtyZXR1cm4gZnVuY3Rpb24ocyl7dHJ5e3I9Y2FjaGVbc109KGNhY2hlW3NdfHxydWxlLmNhbGwodGhpcyxzKSk7fWNhdGNoKGUpe3I9Y2FjaGVbc109ZTt9XG5pZihyIGluc3RhbmNlb2YgJFAuRXhjZXB0aW9uKXt0aHJvdyByO31lbHNle3JldHVybiByO319O30sYW55OmZ1bmN0aW9uKCl7dmFyIHB4PWFyZ3VtZW50cztyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe2lmKHB4W2ldPT1udWxsKXtjb250aW51ZTt9XG50cnl7cj0ocHhbaV0uY2FsbCh0aGlzLHMpKTt9Y2F0Y2goZSl7cj1udWxsO31cbmlmKHIpe3JldHVybiByO319XG50aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO307fSxlYWNoOmZ1bmN0aW9uKCl7dmFyIHB4PWFyZ3VtZW50cztyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHJ4PVtdLHI9bnVsbDtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe2lmKHB4W2ldPT1udWxsKXtjb250aW51ZTt9XG50cnl7cj0ocHhbaV0uY2FsbCh0aGlzLHMpKTt9Y2F0Y2goZSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9XG5yeC5wdXNoKHJbMF0pO3M9clsxXTt9XG5yZXR1cm5bcngsc107fTt9LGFsbDpmdW5jdGlvbigpe3ZhciBweD1hcmd1bWVudHMsXz1fO3JldHVybiBfLmVhY2goXy5vcHRpb25hbChweCkpO30sc2VxdWVuY2U6ZnVuY3Rpb24ocHgsZCxjKXtkPWR8fF8ucnRva2VuKC9eXFxzKi8pO2M9Y3x8bnVsbDtpZihweC5sZW5ndGg9PTEpe3JldHVybiBweFswXTt9XG5yZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbCxxPW51bGw7dmFyIHJ4PVtdO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7dHJ5e3I9cHhbaV0uY2FsbCh0aGlzLHMpO31jYXRjaChlKXticmVhazt9XG5yeC5wdXNoKHJbMF0pO3RyeXtxPWQuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleCl7cT1udWxsO2JyZWFrO31cbnM9cVsxXTt9XG5pZighcil7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9XG5pZihxKXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHFbMV0pO31cbmlmKGMpe3RyeXtyPWMuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihyWzFdKTt9fVxucmV0dXJuW3J4LChyP3JbMV06cyldO307fSxiZXR3ZWVuOmZ1bmN0aW9uKGQxLHAsZDIpe2QyPWQyfHxkMTt2YXIgX2ZuPV8uZWFjaChfLmlnbm9yZShkMSkscCxfLmlnbm9yZShkMikpO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcng9X2ZuLmNhbGwodGhpcyxzKTtyZXR1cm5bW3J4WzBdWzBdLHJbMF1bMl1dLHJ4WzFdXTt9O30sbGlzdDpmdW5jdGlvbihwLGQsYyl7ZD1kfHxfLnJ0b2tlbigvXlxccyovKTtjPWN8fG51bGw7cmV0dXJuKHAgaW5zdGFuY2VvZiBBcnJheT9fLmVhY2goXy5wcm9kdWN0KHAuc2xpY2UoMCwtMSksXy5pZ25vcmUoZCkpLHAuc2xpY2UoLTEpLF8uaWdub3JlKGMpKTpfLmVhY2goXy5tYW55KF8uZWFjaChwLF8uaWdub3JlKGQpKSkscHgsXy5pZ25vcmUoYykpKTt9LHNldDpmdW5jdGlvbihweCxkLGMpe2Q9ZHx8Xy5ydG9rZW4oL15cXHMqLyk7Yz1jfHxudWxsO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1udWxsLHA9bnVsbCxxPW51bGwscng9bnVsbCxiZXN0PVtbXSxzXSxsYXN0PWZhbHNlO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7cT1udWxsO3A9bnVsbDtyPW51bGw7bGFzdD0ocHgubGVuZ3RoPT0xKTt0cnl7cj1weFtpXS5jYWxsKHRoaXMscyk7fWNhdGNoKGUpe2NvbnRpbnVlO31cbnJ4PVtbclswXV0sclsxXV07aWYoclsxXS5sZW5ndGg+MCYmIWxhc3Qpe3RyeXtxPWQuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleCl7bGFzdD10cnVlO319ZWxzZXtsYXN0PXRydWU7fVxuaWYoIWxhc3QmJnFbMV0ubGVuZ3RoPT09MCl7bGFzdD10cnVlO31cbmlmKCFsYXN0KXt2YXIgcXg9W107Zm9yKHZhciBqPTA7ajxweC5sZW5ndGg7aisrKXtpZihpIT1qKXtxeC5wdXNoKHB4W2pdKTt9fVxucD1fLnNldChxeCxkKS5jYWxsKHRoaXMscVsxXSk7aWYocFswXS5sZW5ndGg+MCl7cnhbMF09cnhbMF0uY29uY2F0KHBbMF0pO3J4WzFdPXBbMV07fX1cbmlmKHJ4WzFdLmxlbmd0aDxiZXN0WzFdLmxlbmd0aCl7YmVzdD1yeDt9XG5pZihiZXN0WzFdLmxlbmd0aD09PTApe2JyZWFrO319XG5pZihiZXN0WzBdLmxlbmd0aD09PTApe3JldHVybiBiZXN0O31cbmlmKGMpe3RyeXtxPWMuY2FsbCh0aGlzLGJlc3RbMV0pO31jYXRjaChleSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihiZXN0WzFdKTt9XG5iZXN0WzFdPXFbMV07fVxucmV0dXJuIGJlc3Q7fTt9LGZvcndhcmQ6ZnVuY3Rpb24oZ3IsZm5hbWUpe3JldHVybiBmdW5jdGlvbihzKXtyZXR1cm4gZ3JbZm5hbWVdLmNhbGwodGhpcyxzKTt9O30scmVwbGFjZTpmdW5jdGlvbihydWxlLHJlcGwpe3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1ydWxlLmNhbGwodGhpcyxzKTtyZXR1cm5bcmVwbCxyWzFdXTt9O30scHJvY2VzczpmdW5jdGlvbihydWxlLGZuKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9cnVsZS5jYWxsKHRoaXMscyk7cmV0dXJuW2ZuLmNhbGwodGhpcyxyWzBdKSxyWzFdXTt9O30sbWluOmZ1bmN0aW9uKG1pbixydWxlKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHJ4PXJ1bGUuY2FsbCh0aGlzLHMpO2lmKHJ4WzBdLmxlbmd0aDxtaW4pe3Rocm93IG5ldyAkUC5FeGNlcHRpb24ocyk7fVxucmV0dXJuIHJ4O307fX07dmFyIF9nZW5lcmF0b3I9ZnVuY3Rpb24ob3Ape3JldHVybiBmdW5jdGlvbigpe3ZhciBhcmdzPW51bGwscng9W107aWYoYXJndW1lbnRzLmxlbmd0aD4xKXthcmdzPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7fWVsc2UgaWYoYXJndW1lbnRzWzBdaW5zdGFuY2VvZiBBcnJheSl7YXJncz1hcmd1bWVudHNbMF07fVxuaWYoYXJncyl7Zm9yKHZhciBpPTAscHg9YXJncy5zaGlmdCgpO2k8cHgubGVuZ3RoO2krKyl7YXJncy51bnNoaWZ0KHB4W2ldKTtyeC5wdXNoKG9wLmFwcGx5KG51bGwsYXJncykpO2FyZ3Muc2hpZnQoKTtyZXR1cm4gcng7fX1lbHNle3JldHVybiBvcC5hcHBseShudWxsLGFyZ3VtZW50cyk7fX07fTt2YXIgZ3g9XCJvcHRpb25hbCBub3QgaWdub3JlIGNhY2hlXCIuc3BsaXQoL1xccy8pO2Zvcih2YXIgaT0wO2k8Z3gubGVuZ3RoO2krKyl7X1tneFtpXV09X2dlbmVyYXRvcihfW2d4W2ldXSk7fVxudmFyIF92ZWN0b3I9ZnVuY3Rpb24ob3Ape3JldHVybiBmdW5jdGlvbigpe2lmKGFyZ3VtZW50c1swXWluc3RhbmNlb2YgQXJyYXkpe3JldHVybiBvcC5hcHBseShudWxsLGFyZ3VtZW50c1swXSk7fWVsc2V7cmV0dXJuIG9wLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9fTt9O3ZhciB2eD1cImVhY2ggYW55IGFsbFwiLnNwbGl0KC9cXHMvKTtmb3IodmFyIGo9MDtqPHZ4Lmxlbmd0aDtqKyspe19bdnhbal1dPV92ZWN0b3IoX1t2eFtqXV0pO319KCkpOyhmdW5jdGlvbigpe3ZhciAkRD1EYXRlLCRQPSRELnByb3RvdHlwZSwkQz0kRC5DdWx0dXJlSW5mbzt2YXIgZmxhdHRlbkFuZENvbXBhY3Q9ZnVuY3Rpb24oYXgpe3ZhciByeD1bXTtmb3IodmFyIGk9MDtpPGF4Lmxlbmd0aDtpKyspe2lmKGF4W2ldaW5zdGFuY2VvZiBBcnJheSl7cng9cnguY29uY2F0KGZsYXR0ZW5BbmRDb21wYWN0KGF4W2ldKSk7fWVsc2V7aWYoYXhbaV0pe3J4LnB1c2goYXhbaV0pO319fVxucmV0dXJuIHJ4O307JEQuR3JhbW1hcj17fTskRC5UcmFuc2xhdG9yPXtob3VyOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMuaG91cj1OdW1iZXIocyk7fTt9LG1pbnV0ZTpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm1pbnV0ZT1OdW1iZXIocyk7fTt9LHNlY29uZDpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnNlY29uZD1OdW1iZXIocyk7fTt9LG1lcmlkaWFuOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubWVyaWRpYW49cy5zbGljZSgwLDEpLnRvTG93ZXJDYXNlKCk7fTt9LHRpbWV6b25lOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXMucmVwbGFjZSgvW15cXGRcXCtcXC1dL2csXCJcIik7aWYobi5sZW5ndGgpe3RoaXMudGltZXpvbmVPZmZzZXQ9TnVtYmVyKG4pO31lbHNle3RoaXMudGltZXpvbmU9cy50b0xvd2VyQ2FzZSgpO319O30sZGF5OmZ1bmN0aW9uKHgpe3ZhciBzPXhbMF07cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5kYXk9TnVtYmVyKHMubWF0Y2goL1xcZCsvKVswXSk7fTt9LG1vbnRoOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubW9udGg9KHMubGVuZ3RoPT0zKT9cImphbiBmZWIgbWFyIGFwciBtYXkganVuIGp1bCBhdWcgc2VwIG9jdCBub3YgZGVjXCIuaW5kZXhPZihzKS80Ok51bWJlcihzKS0xO307fSx5ZWFyOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPU51bWJlcihzKTt0aGlzLnllYXI9KChzLmxlbmd0aD4yKT9uOihuKygoKG4rMjAwMCk8JEMudHdvRGlnaXRZZWFyTWF4KT8yMDAwOjE5MDApKSk7fTt9LHJkYXk6ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7c3dpdGNoKHMpe2Nhc2VcInllc3RlcmRheVwiOnRoaXMuZGF5cz0tMTticmVhaztjYXNlXCJ0b21vcnJvd1wiOnRoaXMuZGF5cz0xO2JyZWFrO2Nhc2VcInRvZGF5XCI6dGhpcy5kYXlzPTA7YnJlYWs7Y2FzZVwibm93XCI6dGhpcy5kYXlzPTA7dGhpcy5ub3c9dHJ1ZTticmVhazt9fTt9LGZpbmlzaEV4YWN0OmZ1bmN0aW9uKHgpe3g9KHggaW5zdGFuY2VvZiBBcnJheSk/eDpbeF07Zm9yKHZhciBpPTA7aTx4Lmxlbmd0aDtpKyspe2lmKHhbaV0pe3hbaV0uY2FsbCh0aGlzKTt9fVxudmFyIG5vdz1uZXcgRGF0ZSgpO2lmKCh0aGlzLmhvdXJ8fHRoaXMubWludXRlKSYmKCF0aGlzLm1vbnRoJiYhdGhpcy55ZWFyJiYhdGhpcy5kYXkpKXt0aGlzLmRheT1ub3cuZ2V0RGF0ZSgpO31cbmlmKCF0aGlzLnllYXIpe3RoaXMueWVhcj1ub3cuZ2V0RnVsbFllYXIoKTt9XG5pZighdGhpcy5tb250aCYmdGhpcy5tb250aCE9PTApe3RoaXMubW9udGg9bm93LmdldE1vbnRoKCk7fVxuaWYoIXRoaXMuZGF5KXt0aGlzLmRheT0xO31cbmlmKCF0aGlzLmhvdXIpe3RoaXMuaG91cj0wO31cbmlmKCF0aGlzLm1pbnV0ZSl7dGhpcy5taW51dGU9MDt9XG5pZighdGhpcy5zZWNvbmQpe3RoaXMuc2Vjb25kPTA7fVxuaWYodGhpcy5tZXJpZGlhbiYmdGhpcy5ob3VyKXtpZih0aGlzLm1lcmlkaWFuPT1cInBcIiYmdGhpcy5ob3VyPDEyKXt0aGlzLmhvdXI9dGhpcy5ob3VyKzEyO31lbHNlIGlmKHRoaXMubWVyaWRpYW49PVwiYVwiJiZ0aGlzLmhvdXI9PTEyKXt0aGlzLmhvdXI9MDt9fVxuaWYodGhpcy5kYXk+JEQuZ2V0RGF5c0luTW9udGgodGhpcy55ZWFyLHRoaXMubW9udGgpKXt0aHJvdyBuZXcgUmFuZ2VFcnJvcih0aGlzLmRheStcIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZGF5cy5cIik7fVxudmFyIHI9bmV3IERhdGUodGhpcy55ZWFyLHRoaXMubW9udGgsdGhpcy5kYXksdGhpcy5ob3VyLHRoaXMubWludXRlLHRoaXMuc2Vjb25kKTtpZih0aGlzLnRpbWV6b25lKXtyLnNldCh7dGltZXpvbmU6dGhpcy50aW1lem9uZX0pO31lbHNlIGlmKHRoaXMudGltZXpvbmVPZmZzZXQpe3Iuc2V0KHt0aW1lem9uZU9mZnNldDp0aGlzLnRpbWV6b25lT2Zmc2V0fSk7fVxucmV0dXJuIHI7fSxmaW5pc2g6ZnVuY3Rpb24oeCl7eD0oeCBpbnN0YW5jZW9mIEFycmF5KT9mbGF0dGVuQW5kQ29tcGFjdCh4KTpbeF07aWYoeC5sZW5ndGg9PT0wKXtyZXR1cm4gbnVsbDt9XG5mb3IodmFyIGk9MDtpPHgubGVuZ3RoO2krKyl7aWYodHlwZW9mIHhbaV09PVwiZnVuY3Rpb25cIil7eFtpXS5jYWxsKHRoaXMpO319XG52YXIgdG9kYXk9JEQudG9kYXkoKTtpZih0aGlzLm5vdyYmIXRoaXMudW5pdCYmIXRoaXMub3BlcmF0b3Ipe3JldHVybiBuZXcgRGF0ZSgpO31lbHNlIGlmKHRoaXMubm93KXt0b2RheT1uZXcgRGF0ZSgpO31cbnZhciBleHByZXNzaW9uPSEhKHRoaXMuZGF5cyYmdGhpcy5kYXlzIT09bnVsbHx8dGhpcy5vcmllbnR8fHRoaXMub3BlcmF0b3IpO3ZhciBnYXAsbW9kLG9yaWVudDtvcmllbnQ9KCh0aGlzLm9yaWVudD09XCJwYXN0XCJ8fHRoaXMub3BlcmF0b3I9PVwic3VidHJhY3RcIik/LTE6MSk7aWYoIXRoaXMubm93JiZcImhvdXIgbWludXRlIHNlY29uZFwiLmluZGV4T2YodGhpcy51bml0KSE9LTEpe3RvZGF5LnNldFRpbWVUb05vdygpO31cbmlmKHRoaXMubW9udGh8fHRoaXMubW9udGg9PT0wKXtpZihcInllYXIgZGF5IGhvdXIgbWludXRlIHNlY29uZFwiLmluZGV4T2YodGhpcy51bml0KSE9LTEpe3RoaXMudmFsdWU9dGhpcy5tb250aCsxO3RoaXMubW9udGg9bnVsbDtleHByZXNzaW9uPXRydWU7fX1cbmlmKCFleHByZXNzaW9uJiZ0aGlzLndlZWtkYXkmJiF0aGlzLmRheSYmIXRoaXMuZGF5cyl7dmFyIHRlbXA9RGF0ZVt0aGlzLndlZWtkYXldKCk7dGhpcy5kYXk9dGVtcC5nZXREYXRlKCk7aWYoIXRoaXMubW9udGgpe3RoaXMubW9udGg9dGVtcC5nZXRNb250aCgpO31cbnRoaXMueWVhcj10ZW1wLmdldEZ1bGxZZWFyKCk7fVxuaWYoZXhwcmVzc2lvbiYmdGhpcy53ZWVrZGF5JiZ0aGlzLnVuaXQhPVwibW9udGhcIil7dGhpcy51bml0PVwiZGF5XCI7Z2FwPSgkRC5nZXREYXlOdW1iZXJGcm9tTmFtZSh0aGlzLndlZWtkYXkpLXRvZGF5LmdldERheSgpKTttb2Q9Nzt0aGlzLmRheXM9Z2FwPygoZ2FwKyhvcmllbnQqbW9kKSklbW9kKToob3JpZW50Km1vZCk7fVxuaWYodGhpcy5tb250aCYmdGhpcy51bml0PT1cImRheVwiJiZ0aGlzLm9wZXJhdG9yKXt0aGlzLnZhbHVlPSh0aGlzLm1vbnRoKzEpO3RoaXMubW9udGg9bnVsbDt9XG5pZih0aGlzLnZhbHVlIT1udWxsJiZ0aGlzLm1vbnRoIT1udWxsJiZ0aGlzLnllYXIhPW51bGwpe3RoaXMuZGF5PXRoaXMudmFsdWUqMTt9XG5pZih0aGlzLm1vbnRoJiYhdGhpcy5kYXkmJnRoaXMudmFsdWUpe3RvZGF5LnNldCh7ZGF5OnRoaXMudmFsdWUqMX0pO2lmKCFleHByZXNzaW9uKXt0aGlzLmRheT10aGlzLnZhbHVlKjE7fX1cbmlmKCF0aGlzLm1vbnRoJiZ0aGlzLnZhbHVlJiZ0aGlzLnVuaXQ9PVwibW9udGhcIiYmIXRoaXMubm93KXt0aGlzLm1vbnRoPXRoaXMudmFsdWU7ZXhwcmVzc2lvbj10cnVlO31cbmlmKGV4cHJlc3Npb24mJih0aGlzLm1vbnRofHx0aGlzLm1vbnRoPT09MCkmJnRoaXMudW5pdCE9XCJ5ZWFyXCIpe3RoaXMudW5pdD1cIm1vbnRoXCI7Z2FwPSh0aGlzLm1vbnRoLXRvZGF5LmdldE1vbnRoKCkpO21vZD0xMjt0aGlzLm1vbnRocz1nYXA/KChnYXArKG9yaWVudCptb2QpKSVtb2QpOihvcmllbnQqbW9kKTt0aGlzLm1vbnRoPW51bGw7fVxuaWYoIXRoaXMudW5pdCl7dGhpcy51bml0PVwiZGF5XCI7fVxuaWYoIXRoaXMudmFsdWUmJnRoaXMub3BlcmF0b3ImJnRoaXMub3BlcmF0b3IhPT1udWxsJiZ0aGlzW3RoaXMudW5pdCtcInNcIl0mJnRoaXNbdGhpcy51bml0K1wic1wiXSE9PW51bGwpe3RoaXNbdGhpcy51bml0K1wic1wiXT10aGlzW3RoaXMudW5pdCtcInNcIl0rKCh0aGlzLm9wZXJhdG9yPT1cImFkZFwiKT8xOi0xKSsodGhpcy52YWx1ZXx8MCkqb3JpZW50O31lbHNlIGlmKHRoaXNbdGhpcy51bml0K1wic1wiXT09bnVsbHx8dGhpcy5vcGVyYXRvciE9bnVsbCl7aWYoIXRoaXMudmFsdWUpe3RoaXMudmFsdWU9MTt9XG50aGlzW3RoaXMudW5pdCtcInNcIl09dGhpcy52YWx1ZSpvcmllbnQ7fVxuaWYodGhpcy5tZXJpZGlhbiYmdGhpcy5ob3VyKXtpZih0aGlzLm1lcmlkaWFuPT1cInBcIiYmdGhpcy5ob3VyPDEyKXt0aGlzLmhvdXI9dGhpcy5ob3VyKzEyO31lbHNlIGlmKHRoaXMubWVyaWRpYW49PVwiYVwiJiZ0aGlzLmhvdXI9PTEyKXt0aGlzLmhvdXI9MDt9fVxuaWYodGhpcy53ZWVrZGF5JiYhdGhpcy5kYXkmJiF0aGlzLmRheXMpe3ZhciB0ZW1wPURhdGVbdGhpcy53ZWVrZGF5XSgpO3RoaXMuZGF5PXRlbXAuZ2V0RGF0ZSgpO2lmKHRlbXAuZ2V0TW9udGgoKSE9PXRvZGF5LmdldE1vbnRoKCkpe3RoaXMubW9udGg9dGVtcC5nZXRNb250aCgpO319XG5pZigodGhpcy5tb250aHx8dGhpcy5tb250aD09PTApJiYhdGhpcy5kYXkpe3RoaXMuZGF5PTE7fVxuaWYoIXRoaXMub3JpZW50JiYhdGhpcy5vcGVyYXRvciYmdGhpcy51bml0PT1cIndlZWtcIiYmdGhpcy52YWx1ZSYmIXRoaXMuZGF5JiYhdGhpcy5tb250aCl7cmV0dXJuIERhdGUudG9kYXkoKS5zZXRXZWVrKHRoaXMudmFsdWUpO31cbmlmKGV4cHJlc3Npb24mJnRoaXMudGltZXpvbmUmJnRoaXMuZGF5JiZ0aGlzLmRheXMpe3RoaXMuZGF5PXRoaXMuZGF5czt9XG5yZXR1cm4oZXhwcmVzc2lvbik/dG9kYXkuYWRkKHRoaXMpOnRvZGF5LnNldCh0aGlzKTt9fTt2YXIgXz0kRC5QYXJzaW5nLk9wZXJhdG9ycyxnPSRELkdyYW1tYXIsdD0kRC5UcmFuc2xhdG9yLF9mbjtnLmRhdGVQYXJ0RGVsaW1pdGVyPV8ucnRva2VuKC9eKFtcXHNcXC1cXC5cXCxcXC9cXHgyN10rKS8pO2cudGltZVBhcnREZWxpbWl0ZXI9Xy5zdG9rZW4oXCI6XCIpO2cud2hpdGVTcGFjZT1fLnJ0b2tlbigvXlxccyovKTtnLmdlbmVyYWxEZWxpbWl0ZXI9Xy5ydG9rZW4oL14oKFtcXHNcXCxdfGF0fEB8b24pKykvKTt2YXIgX0M9e307Zy5jdG9rZW49ZnVuY3Rpb24oa2V5cyl7dmFyIGZuPV9DW2tleXNdO2lmKCFmbil7dmFyIGM9JEMucmVnZXhQYXR0ZXJuczt2YXIga3g9a2V5cy5zcGxpdCgvXFxzKy8pLHB4PVtdO2Zvcih2YXIgaT0wO2k8a3gubGVuZ3RoO2krKyl7cHgucHVzaChfLnJlcGxhY2UoXy5ydG9rZW4oY1treFtpXV0pLGt4W2ldKSk7fVxuZm49X0Nba2V5c109Xy5hbnkuYXBwbHkobnVsbCxweCk7fVxucmV0dXJuIGZuO307Zy5jdG9rZW4yPWZ1bmN0aW9uKGtleSl7cmV0dXJuIF8ucnRva2VuKCRDLnJlZ2V4UGF0dGVybnNba2V5XSk7fTtnLmg9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oMFswLTldfDFbMC0yXXxbMS05XSkvKSx0LmhvdXIpKTtnLmhoPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKDBbMC05XXwxWzAtMl0pLyksdC5ob3VyKSk7Zy5IPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFswLTFdWzAtOV18MlswLTNdfFswLTldKS8pLHQuaG91cikpO2cuSEg9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oWzAtMV1bMC05XXwyWzAtM10pLyksdC5ob3VyKSk7Zy5tPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFswLTVdWzAtOV18WzAtOV0pLyksdC5taW51dGUpKTtnLm1tPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eWzAtNV1bMC05XS8pLHQubWludXRlKSk7Zy5zPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFswLTVdWzAtOV18WzAtOV0pLyksdC5zZWNvbmQpKTtnLnNzPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eWzAtNV1bMC05XS8pLHQuc2Vjb25kKSk7Zy5obXM9Xy5jYWNoZShfLnNlcXVlbmNlKFtnLkgsZy5tLGcuc10sZy50aW1lUGFydERlbGltaXRlcikpO2cudD1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbjIoXCJzaG9ydE1lcmlkaWFuXCIpLHQubWVyaWRpYW4pKTtnLnR0PV8uY2FjaGUoXy5wcm9jZXNzKGcuY3Rva2VuMihcImxvbmdNZXJpZGlhblwiKSx0Lm1lcmlkaWFuKSk7Zy56PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKChcXCt8XFwtKVxccypcXGRcXGRcXGRcXGQpfCgoXFwrfFxcLSlcXGRcXGRcXDo/XFxkXFxkKS8pLHQudGltZXpvbmUpKTtnLnp6PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKChcXCt8XFwtKVxccypcXGRcXGRcXGRcXGQpfCgoXFwrfFxcLSlcXGRcXGRcXDo/XFxkXFxkKS8pLHQudGltZXpvbmUpKTtnLnp6ej1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbjIoXCJ0aW1lem9uZVwiKSx0LnRpbWV6b25lKSk7Zy50aW1lU3VmZml4PV8uZWFjaChfLmlnbm9yZShnLndoaXRlU3BhY2UpLF8uc2V0KFtnLnR0LGcuenp6XSkpO2cudGltZT1fLmVhY2goXy5vcHRpb25hbChfLmlnbm9yZShfLnN0b2tlbihcIlRcIikpKSxnLmhtcyxnLnRpbWVTdWZmaXgpO2cuZD1fLmNhY2hlKF8ucHJvY2VzcyhfLmVhY2goXy5ydG9rZW4oL14oWzAtMl1cXGR8M1swLTFdfFxcZCkvKSxfLm9wdGlvbmFsKGcuY3Rva2VuMihcIm9yZGluYWxTdWZmaXhcIikpKSx0LmRheSkpO2cuZGQ9Xy5jYWNoZShfLnByb2Nlc3MoXy5lYWNoKF8ucnRva2VuKC9eKFswLTJdXFxkfDNbMC0xXSkvKSxfLm9wdGlvbmFsKGcuY3Rva2VuMihcIm9yZGluYWxTdWZmaXhcIikpKSx0LmRheSkpO2cuZGRkPWcuZGRkZD1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbihcInN1biBtb24gdHVlIHdlZCB0aHUgZnJpIHNhdFwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLndlZWtkYXk9czt9O30pKTtnLk09Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oMVswLTJdfDBcXGR8XFxkKS8pLHQubW9udGgpKTtnLk1NPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKDFbMC0yXXwwXFxkKS8pLHQubW9udGgpKTtnLk1NTT1nLk1NTU09Xy5jYWNoZShfLnByb2Nlc3MoZy5jdG9rZW4oXCJqYW4gZmViIG1hciBhcHIgbWF5IGp1biBqdWwgYXVnIHNlcCBvY3Qgbm92IGRlY1wiKSx0Lm1vbnRoKSk7Zy55PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFxcZFxcZD8pLyksdC55ZWFyKSk7Zy55eT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXGRcXGQpLyksdC55ZWFyKSk7Zy55eXk9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oXFxkXFxkP1xcZD9cXGQ/KS8pLHQueWVhcikpO2cueXl5eT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXGRcXGRcXGRcXGQpLyksdC55ZWFyKSk7X2ZuPWZ1bmN0aW9uKCl7cmV0dXJuIF8uZWFjaChfLmFueS5hcHBseShudWxsLGFyZ3VtZW50cyksXy5ub3QoZy5jdG9rZW4yKFwidGltZUNvbnRleHRcIikpKTt9O2cuZGF5PV9mbihnLmQsZy5kZCk7Zy5tb250aD1fZm4oZy5NLGcuTU1NKTtnLnllYXI9X2ZuKGcueXl5eSxnLnl5KTtnLm9yaWVudGF0aW9uPV8ucHJvY2VzcyhnLmN0b2tlbihcInBhc3QgZnV0dXJlXCIpLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMub3JpZW50PXM7fTt9KTtnLm9wZXJhdG9yPV8ucHJvY2VzcyhnLmN0b2tlbihcImFkZCBzdWJ0cmFjdFwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm9wZXJhdG9yPXM7fTt9KTtnLnJkYXk9Xy5wcm9jZXNzKGcuY3Rva2VuKFwieWVzdGVyZGF5IHRvbW9ycm93IHRvZGF5IG5vd1wiKSx0LnJkYXkpO2cudW5pdD1fLnByb2Nlc3MoZy5jdG9rZW4oXCJzZWNvbmQgbWludXRlIGhvdXIgZGF5IHdlZWsgbW9udGggeWVhclwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnVuaXQ9czt9O30pO2cudmFsdWU9Xy5wcm9jZXNzKF8ucnRva2VuKC9eXFxkXFxkPyhzdHxuZHxyZHx0aCk/LyksZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy52YWx1ZT1zLnJlcGxhY2UoL1xcRC9nLFwiXCIpO307fSk7Zy5leHByZXNzaW9uPV8uc2V0KFtnLnJkYXksZy5vcGVyYXRvcixnLnZhbHVlLGcudW5pdCxnLm9yaWVudGF0aW9uLGcuZGRkLGcuTU1NXSk7X2ZuPWZ1bmN0aW9uKCl7cmV0dXJuIF8uc2V0KGFyZ3VtZW50cyxnLmRhdGVQYXJ0RGVsaW1pdGVyKTt9O2cubWR5PV9mbihnLmRkZCxnLm1vbnRoLGcuZGF5LGcueWVhcik7Zy55bWQ9X2ZuKGcuZGRkLGcueWVhcixnLm1vbnRoLGcuZGF5KTtnLmRteT1fZm4oZy5kZGQsZy5kYXksZy5tb250aCxnLnllYXIpO2cuZGF0ZT1mdW5jdGlvbihzKXtyZXR1cm4oKGdbJEMuZGF0ZUVsZW1lbnRPcmRlcl18fGcubWR5KS5jYWxsKHRoaXMscykpO307Zy5mb3JtYXQ9Xy5wcm9jZXNzKF8ubWFueShfLmFueShfLnByb2Nlc3MoXy5ydG9rZW4oL14oZGQ/ZD9kP3xNTT9NP00/fHl5P3k/eT98aGg/fEhIP3xtbT98c3M/fHR0P3x6ej96PykvKSxmdW5jdGlvbihmbXQpe2lmKGdbZm10XSl7cmV0dXJuIGdbZm10XTt9ZWxzZXt0aHJvdyAkRC5QYXJzaW5nLkV4Y2VwdGlvbihmbXQpO319KSxfLnByb2Nlc3MoXy5ydG9rZW4oL15bXmRNeWhIbXN0el0rLyksZnVuY3Rpb24ocyl7cmV0dXJuIF8uaWdub3JlKF8uc3Rva2VuKHMpKTt9KSkpLGZ1bmN0aW9uKHJ1bGVzKXtyZXR1cm4gXy5wcm9jZXNzKF8uZWFjaC5hcHBseShudWxsLHJ1bGVzKSx0LmZpbmlzaEV4YWN0KTt9KTt2YXIgX0Y9e307dmFyIF9nZXQ9ZnVuY3Rpb24oZil7cmV0dXJuIF9GW2ZdPShfRltmXXx8Zy5mb3JtYXQoZilbMF0pO307Zy5mb3JtYXRzPWZ1bmN0aW9uKGZ4KXtpZihmeCBpbnN0YW5jZW9mIEFycmF5KXt2YXIgcng9W107Zm9yKHZhciBpPTA7aTxmeC5sZW5ndGg7aSsrKXtyeC5wdXNoKF9nZXQoZnhbaV0pKTt9XG5yZXR1cm4gXy5hbnkuYXBwbHkobnVsbCxyeCk7fWVsc2V7cmV0dXJuIF9nZXQoZngpO319O2cuX2Zvcm1hdHM9Zy5mb3JtYXRzKFtcIlxcXCJ5eXl5LU1NLWRkVEhIOm1tOnNzWlxcXCJcIixcInl5eXktTU0tZGRUSEg6bW06c3NaXCIsXCJ5eXl5LU1NLWRkVEhIOm1tOnNzelwiLFwieXl5eS1NTS1kZFRISDptbTpzc1wiLFwieXl5eS1NTS1kZFRISDptbVpcIixcInl5eXktTU0tZGRUSEg6bW16XCIsXCJ5eXl5LU1NLWRkVEhIOm1tXCIsXCJkZGQsIE1NTSBkZCwgeXl5eSBIOm1tOnNzIHR0XCIsXCJkZGQgTU1NIGQgeXl5eSBISDptbTpzcyB6enpcIixcIk1NZGR5eXl5XCIsXCJkZE1NeXl5eVwiLFwiTWRkeXl5eVwiLFwiZGRNeXl5eVwiLFwiTWR5eXl5XCIsXCJkTXl5eXlcIixcInl5eXlcIixcIk1keXlcIixcImRNeXlcIixcImRcIl0pO2cuX3N0YXJ0PV8ucHJvY2VzcyhfLnNldChbZy5kYXRlLGcudGltZSxnLmV4cHJlc3Npb25dLGcuZ2VuZXJhbERlbGltaXRlcixnLndoaXRlU3BhY2UpLHQuZmluaXNoKTtnLnN0YXJ0PWZ1bmN0aW9uKHMpe3RyeXt2YXIgcj1nLl9mb3JtYXRzLmNhbGwoe30scyk7aWYoclsxXS5sZW5ndGg9PT0wKXtyZXR1cm4gcjt9fWNhdGNoKGUpe31cbnJldHVybiBnLl9zdGFydC5jYWxsKHt9LHMpO307JEQuX3BhcnNlPSRELnBhcnNlOyRELnBhcnNlPWZ1bmN0aW9uKHMpe3ZhciByPW51bGw7aWYoIXMpe3JldHVybiBudWxsO31cbmlmKHMgaW5zdGFuY2VvZiBEYXRlKXtyZXR1cm4gczt9XG50cnl7cj0kRC5HcmFtbWFyLnN0YXJ0LmNhbGwoe30scy5yZXBsYWNlKC9eXFxzKihcXFMqKFxccytcXFMrKSopXFxzKiQvLFwiJDFcIikpO31jYXRjaChlKXtyZXR1cm4gbnVsbDt9XG5yZXR1cm4oKHJbMV0ubGVuZ3RoPT09MCk/clswXTpudWxsKTt9OyRELmdldFBhcnNlRnVuY3Rpb249ZnVuY3Rpb24oZngpe3ZhciBmbj0kRC5HcmFtbWFyLmZvcm1hdHMoZngpO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1udWxsO3RyeXtyPWZuLmNhbGwoe30scyk7fWNhdGNoKGUpe3JldHVybiBudWxsO31cbnJldHVybigoclsxXS5sZW5ndGg9PT0wKT9yWzBdOm51bGwpO307fTskRC5wYXJzZUV4YWN0PWZ1bmN0aW9uKHMsZngpe3JldHVybiAkRC5nZXRQYXJzZUZ1bmN0aW9uKGZ4KShzKTt9O30oKSk7XHJcblxufSkocmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpKSIsIihmdW5jdGlvbigpey8vICAgICBVbmRlcnNjb3JlLmpzIDEuNC40XG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBJbmMuXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgaW4gdGhlIGJyb3dzZXIsIG9yIGBnbG9iYWxgIG9uIHRoZSBzZXJ2ZXIuXG4gIHZhciByb290ID0gdGhpcztcblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYF9gIHZhcmlhYmxlLlxuICB2YXIgcHJldmlvdXNVbmRlcnNjb3JlID0gcm9vdC5fO1xuXG4gIC8vIEVzdGFibGlzaCB0aGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCB0byBicmVhayBvdXQgb2YgYSBsb29wIGl0ZXJhdGlvbi5cbiAgdmFyIGJyZWFrZXIgPSB7fTtcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhciBwdXNoICAgICAgICAgICAgID0gQXJyYXlQcm90by5wdXNoLFxuICAgICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgICBjb25jYXQgICAgICAgICAgID0gQXJyYXlQcm90by5jb25jYXQsXG4gICAgICB0b1N0cmluZyAgICAgICAgID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgICBoYXNPd25Qcm9wZXJ0eSAgID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXJcbiAgICBuYXRpdmVGb3JFYWNoICAgICAgPSBBcnJheVByb3RvLmZvckVhY2gsXG4gICAgbmF0aXZlTWFwICAgICAgICAgID0gQXJyYXlQcm90by5tYXAsXG4gICAgbmF0aXZlUmVkdWNlICAgICAgID0gQXJyYXlQcm90by5yZWR1Y2UsXG4gICAgbmF0aXZlUmVkdWNlUmlnaHQgID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodCxcbiAgICBuYXRpdmVGaWx0ZXIgICAgICAgPSBBcnJheVByb3RvLmZpbHRlcixcbiAgICBuYXRpdmVFdmVyeSAgICAgICAgPSBBcnJheVByb3RvLmV2ZXJ5LFxuICAgIG5hdGl2ZVNvbWUgICAgICAgICA9IEFycmF5UHJvdG8uc29tZSxcbiAgICBuYXRpdmVJbmRleE9mICAgICAgPSBBcnJheVByb3RvLmluZGV4T2YsXG4gICAgbmF0aXZlTGFzdEluZGV4T2YgID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZixcbiAgICBuYXRpdmVJc0FycmF5ICAgICAgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgICAgICAgICA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgICAgICAgICA9IEZ1bmNQcm90by5iaW5kO1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdCB2aWEgYSBzdHJpbmcgaWRlbnRpZmllcixcbiAgLy8gZm9yIENsb3N1cmUgQ29tcGlsZXIgXCJhZHZhbmNlZFwiIG1vZGUuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuNC40JztcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIG9iamVjdHMgd2l0aCB0aGUgYnVpbHQtaW4gYGZvckVhY2hgLCBhcnJheXMsIGFuZCByYXcgb2JqZWN0cy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZvckVhY2hgIGlmIGF2YWlsYWJsZS5cbiAgdmFyIGVhY2ggPSBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm47XG4gICAgaWYgKG5hdGl2ZUZvckVhY2ggJiYgb2JqLmZvckVhY2ggPT09IG5hdGl2ZUZvckVhY2gpIHtcbiAgICAgIG9iai5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2ldLCBpLCBvYmopID09PSBicmVha2VyKSByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKF8uaGFzKG9iaiwga2V5KSkge1xuICAgICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdG9yIHRvIGVhY2ggZWxlbWVudC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYG1hcGAgaWYgYXZhaWxhYmxlLlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZU1hcCAmJiBvYmoubWFwID09PSBuYXRpdmVNYXApIHJldHVybiBvYmoubWFwKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICB2YXIgcmVkdWNlRXJyb3IgPSAnUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZSc7XG5cbiAgLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuICAvLyBvciBgZm9sZGxgLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgcmVkdWNlYCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlICYmIG9iai5yZWR1Y2UgPT09IG5hdGl2ZVJlZHVjZSkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZShpdGVyYXRvciwgbWVtbykgOiBvYmoucmVkdWNlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSB2YWx1ZTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW5pdGlhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihyZWR1Y2VFcnJvcik7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VSaWdodGAgaWYgYXZhaWxhYmxlLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIGlmIChvYmogPT0gbnVsbCkgb2JqID0gW107XG4gICAgaWYgKG5hdGl2ZVJlZHVjZVJpZ2h0ICYmIG9iai5yZWR1Y2VSaWdodCA9PT0gbmF0aXZlUmVkdWNlUmlnaHQpIHtcbiAgICAgIGlmIChjb250ZXh0KSBpdGVyYXRvciA9IF8uYmluZChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gaW5pdGlhbCA/IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvciwgbWVtbykgOiBvYmoucmVkdWNlUmlnaHQoaXRlcmF0b3IpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSArbGVuZ3RoKSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgfVxuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGluZGV4ID0ga2V5cyA/IGtleXNbLS1sZW5ndGhdIDogLS1sZW5ndGg7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IG9ialtpbmRleF07XG4gICAgICAgIGluaXRpYWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgbWVtbywgb2JqW2luZGV4XSwgaW5kZXgsIGxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW5pdGlhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihyZWR1Y2VFcnJvcik7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZmlsdGVyYCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVGaWx0ZXIgJiYgb2JqLmZpbHRlciA9PT0gbmF0aXZlRmlsdGVyKSByZXR1cm4gb2JqLmZpbHRlcihpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0c1tyZXN1bHRzLmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiAhaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgIH0sIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZXZlcnlgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yIHx8IChpdGVyYXRvciA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlRXZlcnkgJiYgb2JqLmV2ZXJ5ID09PSBuYXRpdmVFdmVyeSkgcmV0dXJuIG9iai5ldmVyeShpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKCEocmVzdWx0ID0gcmVzdWx0ICYmIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHNvbWVgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgdmFyIGFueSA9IF8uc29tZSA9IF8uYW55ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yIHx8IChpdGVyYXRvciA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKG5hdGl2ZVNvbWUgJiYgb2JqLnNvbWUgPT09IG5hdGl2ZVNvbWUpIHJldHVybiBvYmouc29tZShpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHJlc3VsdCB8fCAocmVzdWx0ID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gdmFsdWUgKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIHRhcmdldCkge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIG9iai5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSByZXR1cm4gb2JqLmluZGV4T2YodGFyZ2V0KSAhPSAtMTtcbiAgICByZXR1cm4gYW55KG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdGFyZ2V0O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuICBfLmludm9rZSA9IGZ1bmN0aW9uKG9iaiwgbWV0aG9kKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGlzRnVuYyA9IF8uaXNGdW5jdGlvbihtZXRob2QpO1xuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKGlzRnVuYyA/IG1ldGhvZCA6IHZhbHVlW21ldGhvZF0pLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiB2YWx1ZVtrZXldOyB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzLCBmaXJzdCkge1xuICAgIGlmIChfLmlzRW1wdHkoYXR0cnMpKSByZXR1cm4gZmlyc3QgPyBudWxsIDogW107XG4gICAgcmV0dXJuIF9bZmlyc3QgPyAnZmluZCcgOiAnZmlsdGVyJ10ob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGlmIChhdHRyc1trZXldICE9PSB2YWx1ZVtrZXldKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLndoZXJlKG9iaiwgYXR0cnMsIHRydWUpO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IG9yIChlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgLy8gQ2FuJ3Qgb3B0aW1pemUgYXJyYXlzIG9mIGludGVnZXJzIGxvbmdlciB0aGFuIDY1LDUzNSBlbGVtZW50cy5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODA3OTdcbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzRW1wdHkob2JqKSkgcmV0dXJuIC1JbmZpbml0eTtcbiAgICB2YXIgcmVzdWx0ID0ge2NvbXB1dGVkIDogLUluZmluaXR5LCB2YWx1ZTogLUluZmluaXR5fTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBpdGVyYXRvciA/IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSA6IHZhbHVlO1xuICAgICAgY29tcHV0ZWQgPj0gcmVzdWx0LmNvbXB1dGVkICYmIChyZXN1bHQgPSB7dmFsdWUgOiB2YWx1ZSwgY29tcHV0ZWQgOiBjb21wdXRlZH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNFbXB0eShvYmopKSByZXR1cm4gSW5maW5pdHk7XG4gICAgdmFyIHJlc3VsdCA9IHtjb21wdXRlZCA6IEluZmluaXR5LCB2YWx1ZTogSW5maW5pdHl9O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBjb21wdXRlZCA8IHJlc3VsdC5jb21wdXRlZCAmJiAocmVzdWx0ID0ge3ZhbHVlIDogdmFsdWUsIGNvbXB1dGVkIDogY29tcHV0ZWR9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYW4gYXJyYXkuXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByYW5kO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNodWZmbGVkID0gW107XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oaW5kZXgrKyk7XG4gICAgICBzaHVmZmxlZFtpbmRleCAtIDFdID0gc2h1ZmZsZWRbcmFuZF07XG4gICAgICBzaHVmZmxlZFtyYW5kXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBsb29rdXAgaXRlcmF0b3JzLlxuICB2YXIgbG9va3VwSXRlcmF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUgOiBmdW5jdGlvbihvYmopeyByZXR1cm4gb2JqW3ZhbHVlXTsgfTtcbiAgfTtcblxuICAvLyBTb3J0IHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24gcHJvZHVjZWQgYnkgYW4gaXRlcmF0b3IuXG4gIF8uc29ydEJ5ID0gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIHZhciBpdGVyYXRvciA9IGxvb2t1cEl0ZXJhdG9yKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUgOiB2YWx1ZSxcbiAgICAgICAgaW5kZXggOiBpbmRleCxcbiAgICAgICAgY3JpdGVyaWEgOiBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdClcbiAgICAgIH07XG4gICAgfSkuc29ydChmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhO1xuICAgICAgdmFyIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgIGlmIChhID4gYiB8fCBhID09PSB2b2lkIDApIHJldHVybiAxO1xuICAgICAgICBpZiAoYSA8IGIgfHwgYiA9PT0gdm9pZCAwKSByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVmdC5pbmRleCA8IHJpZ2h0LmluZGV4ID8gLTEgOiAxO1xuICAgIH0pLCAndmFsdWUnKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB1c2VkIGZvciBhZ2dyZWdhdGUgXCJncm91cCBieVwiIG9wZXJhdGlvbnMuXG4gIHZhciBncm91cCA9IGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQsIGJlaGF2aW9yKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpdGVyYXRvciA9IGxvb2t1cEl0ZXJhdG9yKHZhbHVlIHx8IF8uaWRlbnRpdHkpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHZhciBrZXkgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgIGJlaGF2aW9yKHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBHcm91cHMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbi4gUGFzcyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlXG4gIC8vIHRvIGdyb3VwIGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3JpdGVyaW9uLlxuICBfLmdyb3VwQnkgPSBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGdyb3VwKG9iaiwgdmFsdWUsIGNvbnRleHQsIGZ1bmN0aW9uKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgICAgKF8uaGFzKHJlc3VsdCwga2V5KSA/IHJlc3VsdFtrZXldIDogKHJlc3VsdFtrZXldID0gW10pKS5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBncm91cChvYmosIHZhbHVlLCBjb250ZXh0LCBmdW5jdGlvbihyZXN1bHQsIGtleSkge1xuICAgICAgaWYgKCFfLmhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldID0gMDtcbiAgICAgIHJlc3VsdFtrZXldKys7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuICAvLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG4gIF8uc29ydGVkSW5kZXggPSBmdW5jdGlvbihhcnJheSwgb2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3IgPT0gbnVsbCA/IF8uaWRlbnRpdHkgOiBsb29rdXBJdGVyYXRvcihpdGVyYXRvcik7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gKGxvdyArIGhpZ2gpID4+PiAxO1xuICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBhcnJheVttaWRdKSA8IHZhbHVlID8gbG93ID0gbWlkICsgMSA6IGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gU2FmZWx5IGNvbnZlcnQgYW55dGhpbmcgaXRlcmFibGUgaW50byBhIHJlYWwsIGxpdmUgYXJyYXkuXG4gIF8udG9BcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gW107XG4gICAgaWYgKF8uaXNBcnJheShvYmopKSByZXR1cm4gc2xpY2UuY2FsbChvYmopO1xuICAgIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBBcnJheSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYGhlYWRgIGFuZCBgdGFrZWAuIFRoZSAqKmd1YXJkKiogY2hlY2tcbiAgLy8gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmZpcnN0ID0gXy5oZWFkID0gXy50YWtlID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgcmV0dXJuIChuICE9IG51bGwpICYmICFndWFyZCA/IHNsaWNlLmNhbGwoYXJyYXksIDAsIG4pIDogYXJyYXlbMF07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aFxuICAvLyBgXy5tYXBgLlxuICBfLmluaXRpYWwgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gKChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAoKG4gIT0gbnVsbCkgJiYgIWd1YXJkKSB7XG4gICAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgTWF0aC5tYXgoYXJyYXkubGVuZ3RoIC0gbiwgMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqXG4gIC8vIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5yZXN0ID0gXy50YWlsID0gXy5kcm9wID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIF8uaWRlbnRpdHkpO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgb3V0cHV0KSB7XG4gICAgZWFjaChpbnB1dCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHNoYWxsb3cgPyBwdXNoLmFwcGx5KG91dHB1dCwgdmFsdWUpIDogZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgb3V0cHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvbXBsZXRlbHkgZmxhdHRlbmVkIHZlcnNpb24gb2YgYW4gYXJyYXkuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIFtdKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRvcjtcbiAgICAgIGl0ZXJhdG9yID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbCA9IGl0ZXJhdG9yID8gXy5tYXAoYXJyYXksIGl0ZXJhdG9yLCBjb250ZXh0KSA6IGFycmF5O1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHNlZW4gPSBbXTtcbiAgICBlYWNoKGluaXRpYWwsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgaWYgKGlzU29ydGVkID8gKCFpbmRleCB8fCBzZWVuW3NlZW4ubGVuZ3RoIC0gMV0gIT09IHZhbHVlKSA6ICFfLmNvbnRhaW5zKHNlZW4sIHZhbHVlKSkge1xuICAgICAgICBzZWVuLnB1c2godmFsdWUpO1xuICAgICAgICByZXN1bHRzLnB1c2goYXJyYXlbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bmlxKGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoXy51bmlxKGFycmF5KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIF8uZXZlcnkocmVzdCwgZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5kZXhPZihvdGhlciwgaXRlbSkgPj0gMDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbiAgLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbiAgXy5kaWZmZXJlbmNlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpOyB9KTtcbiAgfTtcblxuICAvLyBaaXAgdG9nZXRoZXIgbXVsdGlwbGUgbGlzdHMgaW50byBhIHNpbmdsZSBhcnJheSAtLSBlbGVtZW50cyB0aGF0IHNoYXJlXG4gIC8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuICBfLnppcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHZhciBsZW5ndGggPSBfLm1heChfLnBsdWNrKGFyZ3MsICdsZW5ndGgnKSk7XG4gICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRzW2ldID0gXy5wbHVjayhhcmdzLCBcIlwiICsgaSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICBpZiAobGlzdCA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBseSB1cyB3aXRoIGluZGV4T2YgKEknbSBsb29raW5nIGF0IHlvdSwgKipNU0lFKiopLFxuICAvLyB3ZSBuZWVkIHRoaXMgZnVuY3Rpb24uIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW5cbiAgLy8gaXRlbSBpbiBhbiBhcnJheSwgb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpc1NvcnRlZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChpc1NvcnRlZCkge1xuICAgICAgaWYgKHR5cGVvZiBpc1NvcnRlZCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpID0gKGlzU29ydGVkIDwgMCA/IE1hdGgubWF4KDAsIGwgKyBpc1NvcnRlZCkgOiBpc1NvcnRlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpID0gXy5zb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheVtpXSA9PT0gaXRlbSA/IGkgOiAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgYXJyYXkuaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSwgaXNTb3J0ZWQpO1xuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbGFzdEluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgXy5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBmcm9tKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaGFzSW5kZXggPSBmcm9tICE9IG51bGw7XG4gICAgaWYgKG5hdGl2ZUxhc3RJbmRleE9mICYmIGFycmF5Lmxhc3RJbmRleE9mID09PSBuYXRpdmVMYXN0SW5kZXhPZikge1xuICAgICAgcmV0dXJuIGhhc0luZGV4ID8gYXJyYXkubGFzdEluZGV4T2YoaXRlbSwgZnJvbSkgOiBhcnJheS5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgdmFyIGkgPSAoaGFzSW5kZXggPyBmcm9tIDogYXJyYXkubGVuZ3RoKTtcbiAgICB3aGlsZSAoaS0tKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBzdGVwID0gYXJndW1lbnRzWzJdIHx8IDE7XG5cbiAgICB2YXIgbGVuID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHZhciByYW5nZSA9IG5ldyBBcnJheShsZW4pO1xuXG4gICAgd2hpbGUoaWR4IDwgbGVuKSB7XG4gICAgICByYW5nZVtpZHgrK10gPSBzdGFydDtcbiAgICAgIHN0YXJ0ICs9IHN0ZXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQ3JlYXRlIGEgZnVuY3Rpb24gYm91bmQgdG8gYSBnaXZlbiBvYmplY3QgKGFzc2lnbmluZyBgdGhpc2AsIGFuZCBhcmd1bWVudHMsXG4gIC8vIG9wdGlvbmFsbHkpLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgRnVuY3Rpb24uYmluZGAgaWZcbiAgLy8gYXZhaWxhYmxlLlxuICBfLmJpbmQgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0KSB7XG4gICAgaWYgKGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCAmJiBuYXRpdmVCaW5kKSByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC5cbiAgXy5wYXJ0aWFsID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQmluZCBhbGwgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0XG4gIC8vIGFsbCBjYWxsYmFja3MgZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuICBfLmJpbmRBbGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgZnVuY3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkgZnVuY3MgPSBfLmZ1bmN0aW9ucyhvYmopO1xuICAgIGVhY2goZnVuY3MsIGZ1bmN0aW9uKGYpIHsgb2JqW2ZdID0gXy5iaW5kKG9ialtmXSwgb2JqKTsgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtbyA9IHt9O1xuICAgIGhhc2hlciB8fCAoaGFzaGVyID0gXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF8uaGFzKG1lbW8sIGtleSkgPyBtZW1vW2tleV0gOiAobWVtb1trZXldID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpOyB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gXy5kZWxheS5hcHBseShfLCBbZnVuYywgMV0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgY29udGV4dCwgYXJncywgdGltZW91dCwgcmVzdWx0O1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG5ldyBEYXRlO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgcmVzdWx0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9O1xuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICBpZiAoY2FsbE5vdykgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciByYW4gPSBmYWxzZSwgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocmFuKSByZXR1cm4gbWVtbztcbiAgICAgIHJhbiA9IHRydWU7XG4gICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgZnVuYyA9IG51bGw7XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuICAvLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4gIC8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gIF8ud3JhcCA9IGZ1bmN0aW9uKGZ1bmMsIHdyYXBwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IFtmdW5jXTtcbiAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiB3cmFwcGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZ1bmNzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgZm9yICh2YXIgaSA9IGZ1bmNzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGFyZ3MgPSBbZnVuY3NbaV0uYXBwbHkodGhpcywgYXJncyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYWZ0ZXIgYmVpbmcgY2FsbGVkIE4gdGltZXMuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIGlmICh0aW1lcyA8PSAwKSByZXR1cm4gZnVuYygpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2BcbiAgXy5rZXlzID0gbmF0aXZlS2V5cyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqICE9PSBPYmplY3Qob2JqKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvYmplY3QnKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXNba2V5cy5sZW5ndGhdID0ga2V5O1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgXy52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkgdmFsdWVzLnB1c2gob2JqW2tleV0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIF8ucGFpcnMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSBwYWlycy5wdXNoKFtrZXksIG9ialtrZXldXSk7XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkgcmVzdWx0W29ialtrZXldXSA9IGtleTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ucGljayA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBlYWNoKGtleXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleSBpbiBvYmopIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5vbWl0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghXy5jb250YWlucyhrZXlzLCBrZXkpKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgXy5kZWZhdWx0cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAob2JqW3Byb3BdID09IG51bGwpIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuICBfLmNsb25lID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIF8uaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgb2JqKTtcbiAgfTtcblxuICAvLyBJbnZva2VzIGludGVyY2VwdG9yIHdpdGggdGhlIG9iaiwgYW5kIHRoZW4gcmV0dXJucyBvYmouXG4gIC8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuICAvLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbiAgXy50YXAgPSBmdW5jdGlvbihvYmosIGludGVyY2VwdG9yKSB7XG4gICAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgSGFybW9ueSBgZWdhbGAgcHJvcG9zYWw6IGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbC5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT0gMSAvIGI7XG4gICAgLy8gQSBzdHJpY3QgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkgYmVjYXVzZSBgbnVsbCA9PSB1bmRlZmluZWRgLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiBhID09IFN0cmluZyhiKTtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3JcbiAgICAgICAgLy8gb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiBhICE9ICthID8gYiAhPSArYiA6IChhID09IDAgPyAxIC8gYSA9PSAxIC8gYiA6IGEgPT0gK2IpO1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuICthID09ICtiO1xuICAgICAgLy8gUmVnRXhwcyBhcmUgY29tcGFyZWQgYnkgdGhlaXIgc291cmNlIHBhdHRlcm5zIGFuZCBmbGFncy5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAgIHJldHVybiBhLnNvdXJjZSA9PSBiLnNvdXJjZSAmJlxuICAgICAgICAgICAgICAgYS5nbG9iYWwgPT0gYi5nbG9iYWwgJiZcbiAgICAgICAgICAgICAgIGEubXVsdGlsaW5lID09IGIubXVsdGlsaW5lICYmXG4gICAgICAgICAgICAgICBhLmlnbm9yZUNhc2UgPT0gYi5pZ25vcmVDYXNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGEgIT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT0gYjtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuICAgIHZhciBzaXplID0gMCwgcmVzdWx0ID0gdHJ1ZTtcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoY2xhc3NOYW1lID09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgc2l6ZSA9IGEubGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gc2l6ZSA9PSBiLmxlbmd0aDtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgICAgd2hpbGUgKHNpemUtLSkge1xuICAgICAgICAgIGlmICghKHJlc3VsdCA9IGVxKGFbc2l6ZV0sIGJbc2l6ZV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3Rgc1xuICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiYgIShfLmlzRnVuY3Rpb24oYUN0b3IpICYmIChhQ3RvciBpbnN0YW5jZW9mIGFDdG9yKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihiQ3RvcikgJiYgKGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgICAgIGlmIChfLmhhcyhhLCBrZXkpKSB7XG4gICAgICAgICAgLy8gQ291bnQgdGhlIGV4cGVjdGVkIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXIuXG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gXy5oYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgICAgaWYgKF8uaGFzKGIsIGtleSkgJiYgIShzaXplLS0pKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSAhc2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIsIFtdLCBbXSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiBhcnJheSwgc3RyaW5nLCBvciBvYmplY3QgZW1wdHk/XG4gIC8vIEFuIFwiZW1wdHlcIiBvYmplY3QgaGFzIG5vIGVudW1lcmFibGUgb3duLXByb3BlcnRpZXMuXG4gIF8uaXNFbXB0eSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKF8uaXNBcnJheShvYmopIHx8IF8uaXNTdHJpbmcob2JqKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBET00gZWxlbWVudD9cbiAgXy5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhbiBhcnJheT9cbiAgLy8gRGVsZWdhdGVzIHRvIEVDTUE1J3MgbmF0aXZlIEFycmF5LmlzQXJyYXlcbiAgXy5pc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cC5cbiAgZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFKSwgd2hlcmVcbiAgLy8gdGhlcmUgaXNuJ3QgYW55IGluc3BlY3RhYmxlIFwiQXJndW1lbnRzXCIgdHlwZS5cbiAgaWYgKCFfLmlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBfLmlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gISEob2JqICYmIF8uaGFzKG9iaiwgJ2NhbGxlZScpKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLlxuICBpZiAodHlwZW9mICgvLi8pICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gPyAoTmFOIGlzIHRoZSBvbmx5IG51bWJlciB3aGljaCBkb2VzIG5vdCBlcXVhbCBpdHNlbGYpLlxuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBvYmogIT0gK29iajtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGVxdWFsIHRvIG51bGw/XG4gIF8uaXNOdWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIHVuZGVmaW5lZD9cbiAgXy5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHZvaWQgMDtcbiAgfTtcblxuICAvLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5XG4gIC8vIG9uIGl0c2VsZiAoaW4gb3RoZXIgd29yZHMsIG5vdCBvbiBhIHByb3RvdHlwZSkuXG4gIF8uaGFzID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSdW4gVW5kZXJzY29yZS5qcyBpbiAqbm9Db25mbGljdCogbW9kZSwgcmV0dXJuaW5nIHRoZSBgX2AgdmFyaWFibGUgdG8gaXRzXG4gIC8vIHByZXZpb3VzIG93bmVyLiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcm9vdC5fID0gcHJldmlvdXNVbmRlcnNjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRvcnMuXG4gIF8uaWRlbnRpdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkobik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBpKTtcbiAgICByZXR1cm4gYWNjdW07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKS5cbiAgXy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIGlmIChtYXggPT0gbnVsbCkge1xuICAgICAgbWF4ID0gbWluO1xuICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG4gIH07XG5cbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICBlc2NhcGU6IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgICAgICcvJzogJyYjeDJGOydcbiAgICB9XG4gIH07XG4gIGVudGl0eU1hcC51bmVzY2FwZSA9IF8uaW52ZXJ0KGVudGl0eU1hcC5lc2NhcGUpO1xuXG4gIC8vIFJlZ2V4ZXMgY29udGFpbmluZyB0aGUga2V5cyBhbmQgdmFsdWVzIGxpc3RlZCBpbW1lZGlhdGVseSBhYm92ZS5cbiAgdmFyIGVudGl0eVJlZ2V4ZXMgPSB7XG4gICAgZXNjYXBlOiAgIG5ldyBSZWdFeHAoJ1snICsgXy5rZXlzKGVudGl0eU1hcC5lc2NhcGUpLmpvaW4oJycpICsgJ10nLCAnZycpLFxuICAgIHVuZXNjYXBlOiBuZXcgUmVnRXhwKCcoJyArIF8ua2V5cyhlbnRpdHlNYXAudW5lc2NhcGUpLmpvaW4oJ3wnKSArICcpJywgJ2cnKVxuICB9O1xuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbiAgXy5lYWNoKFsnZXNjYXBlJywgJ3VuZXNjYXBlJ10sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIF9bbWV0aG9kXSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgaWYgKHN0cmluZyA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICByZXR1cm4gKCcnICsgc3RyaW5nKS5yZXBsYWNlKGVudGl0eVJlZ2V4ZXNbbWV0aG9kXSwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eU1hcFttZXRob2RdW21hdGNoXTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgbmFtZWQgcHJvcGVydHkgaXMgYSBmdW5jdGlvbiB0aGVuIGludm9rZSBpdDtcbiAgLy8gb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICB9O1xuXG4gIC8vIEFkZCB5b3VyIG93biBjdXN0b20gZnVuY3Rpb25zIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5taXhpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSl7XG4gICAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXTtcbiAgICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGUgICAgOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlIDogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlICAgICAgOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiAgICAgIFwiJ1wiLFxuICAgICdcXFxcJzogICAgICdcXFxcJyxcbiAgICAnXFxyJzogICAgICdyJyxcbiAgICAnXFxuJzogICAgICduJyxcbiAgICAnXFx0JzogICAgICd0JyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx0fFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBkYXRhLCBzZXR0aW5ncykge1xuICAgIHZhciByZW5kZXI7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICAgICAgLnJlcGxhY2UoZXNjYXBlciwgZnVuY3Rpb24obWF0Y2gpIHsgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdOyB9KTtcblxuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG4gICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArIFwicmV0dXJuIF9fcDtcXG5cIjtcblxuICAgIHRyeSB7XG4gICAgICByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHJldHVybiByZW5kZXIoZGF0YSwgXyk7XG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBmdW5jdGlvbiBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyAoc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicpICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgZGVsZWdhdGUgdG8gdGhlIHdyYXBwZXIuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXyhvYmopLmNoYWluKCk7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0aGlzLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsncG9wJywgJ3B1c2gnLCAncmV2ZXJzZScsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09ICdzaGlmdCcgfHwgbmFtZSA9PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgbWV0aG9kLmFwcGx5KHRoaXMuX3dyYXBwZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKF8ucHJvdG90eXBlLCB7XG5cbiAgICAvLyBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gICAgY2hhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fY2hhaW4gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICAgIH1cblxuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcblxufSkoKSIsIihmdW5jdGlvbigpey8vLyBLbm9ja291dCBNYXBwaW5nIHBsdWdpbiB2Mi4zLjJcbi8vLyAoYykgMjAxMiBTdGV2ZW4gU2FuZGVyc29uLCBSb3kgSmFjb2JzIC0gaHR0cDovL2tub2Nrb3V0anMuY29tL1xuLy8vIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Ly8gTW9kdWxlIHN5c3RlbXMgbWFnaWMgZGFuY2UuXG5cblx0aWYgKHR5cGVvZiByZXF1aXJlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTIG9yIE5vZGU6IGhhcmQtY29kZWQgZGVwZW5kZW5jeSBvbiBcImtub2Nrb3V0XCJcblx0XHRmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dC1jbGllbnRcIiksIGV4cG9ydHMpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmVbXCJhbWRcIl0pIHtcblx0XHQvLyBBTUQgYW5vbnltb3VzIG1vZHVsZSB3aXRoIGhhcmQtY29kZWQgZGVwZW5kZW5jeSBvbiBcImtub2Nrb3V0XCJcblx0XHRkZWZpbmUoW1wia25vY2tvdXRcIiwgXCJleHBvcnRzXCJdLCBmYWN0b3J5KTtcblx0fSBlbHNlIHtcblx0XHQvLyA8c2NyaXB0PiB0YWc6IHVzZSB0aGUgZ2xvYmFsIGBrb2Agb2JqZWN0LCBhdHRhY2hpbmcgYSBgbWFwcGluZ2AgcHJvcGVydHlcblx0XHRmYWN0b3J5KGtvLCBrby5tYXBwaW5nID0ge30pO1xuXHR9XG59KGZ1bmN0aW9uIChrbywgZXhwb3J0cykge1xuXHR2YXIgREVCVUc9dHJ1ZTtcblx0dmFyIG1hcHBpbmdQcm9wZXJ0eSA9IFwiX19rb19tYXBwaW5nX19cIjtcblx0dmFyIHJlYWxLb0RlcGVuZGVudE9ic2VydmFibGUgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlO1xuXHR2YXIgbWFwcGluZ05lc3RpbmcgPSAwO1xuXHR2YXIgZGVwZW5kZW50T2JzZXJ2YWJsZXM7XG5cdHZhciB2aXNpdGVkT2JqZWN0cztcblx0dmFyIHJlY29nbml6ZWRSb290UHJvcGVydGllcyA9IFtcImNyZWF0ZVwiLCBcInVwZGF0ZVwiLCBcImtleVwiLCBcImFycmF5Q2hhbmdlZFwiXTtcblx0dmFyIGVtcHR5UmV0dXJuID0ge307XG5cblx0dmFyIF9kZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRpbmNsdWRlOiBbXCJfZGVzdHJveVwiXSxcblx0XHRpZ25vcmU6IFtdLFxuXHRcdGNvcHk6IFtdXG5cdH07XG5cdHZhciBkZWZhdWx0T3B0aW9ucyA9IF9kZWZhdWx0T3B0aW9ucztcblxuXHQvLyBBdXRob3I6IEtlbm55VE0gQCBTdGFja092ZXJmbG93XG5cdGZ1bmN0aW9uIHVuaW9uQXJyYXlzICh4LCB5KSB7XG5cdFx0dmFyIG9iaiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSB4Lmxlbmd0aCAtIDE7IGkgPj0gMDsgLS0gaSkgb2JqW3hbaV1dID0geFtpXTtcblx0XHRmb3IgKHZhciBpID0geS5sZW5ndGggLSAxOyBpID49IDA7IC0tIGkpIG9ialt5W2ldXSA9IHlbaV07XG5cdFx0dmFyIHJlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgayBpbiBvYmopIHtcblx0XHRcdHJlcy5wdXNoKG9ialtrXSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiByZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmRPYmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuXHRcdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRcdGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzb3VyY2Vba2V5XSkge1xuXHRcdFx0XHRpZiAoa2V5ICYmIGRlc3RpbmF0aW9uW2tleV0gJiYgIShleHBvcnRzLmdldFR5cGUoZGVzdGluYXRpb25ba2V5XSkgPT09IFwiYXJyYXlcIikpIHtcblx0XHRcdFx0XHRleHRlbmRPYmplY3QoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBib3RoQXJyYXlzID0gZXhwb3J0cy5nZXRUeXBlKGRlc3RpbmF0aW9uW2tleV0pID09PSBcImFycmF5XCIgJiYgZXhwb3J0cy5nZXRUeXBlKHNvdXJjZVtrZXldKSA9PT0gXCJhcnJheVwiO1xuXHRcdFx0XHRcdGlmIChib3RoQXJyYXlzKSB7XG5cdFx0XHRcdFx0XHRkZXN0aW5hdGlvbltrZXldID0gdW5pb25BcnJheXMoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbWVyZ2Uob2JqMSwgb2JqMikge1xuXHRcdHZhciBtZXJnZWQgPSB7fTtcblx0XHRleHRlbmRPYmplY3QobWVyZ2VkLCBvYmoxKTtcblx0XHRleHRlbmRPYmplY3QobWVyZ2VkLCBvYmoyKTtcblxuXHRcdHJldHVybiBtZXJnZWQ7XG5cdH1cblxuXHRleHBvcnRzLmlzTWFwcGVkID0gZnVuY3Rpb24gKHZpZXdNb2RlbCkge1xuXHRcdHZhciB1bndyYXBwZWQgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZpZXdNb2RlbCk7XG5cdFx0cmV0dXJuIHVud3JhcHBlZCAmJiB1bndyYXBwZWRbbWFwcGluZ1Byb3BlcnR5XTtcblx0fVxuXG5cdGV4cG9ydHMuZnJvbUpTID0gZnVuY3Rpb24gKGpzT2JqZWN0IC8qLCBpbnB1dE9wdGlvbnMsIHRhcmdldCovICkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHRocm93IG5ldyBFcnJvcihcIldoZW4gY2FsbGluZyBrby5mcm9tSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKTtcblxuXHRcdC8vIFdoZW4gbWFwcGluZyBpcyBjb21wbGV0ZWQsIGV2ZW4gd2l0aCBhbiBleGNlcHRpb24sIHJlc2V0IHRoZSBuZXN0aW5nIGxldmVsXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0bWFwcGluZ05lc3RpbmcgPSAwO1xuXHRcdH0sIDApO1xuXG5cdFx0aWYgKCFtYXBwaW5nTmVzdGluZysrKSB7XG5cdFx0XHRkZXBlbmRlbnRPYnNlcnZhYmxlcyA9IFtdO1xuXHRcdFx0dmlzaXRlZE9iamVjdHMgPSBuZXcgb2JqZWN0TG9va3VwKCk7XG5cdFx0fVxuXG5cdFx0dmFyIG9wdGlvbnM7XG5cdFx0dmFyIHRhcmdldDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHtcblx0XHRcdGlmIChhcmd1bWVudHNbMV1bbWFwcGluZ1Byb3BlcnR5XSkge1xuXHRcdFx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAzKSB7XG5cdFx0XHRvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXHRcdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzJdO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdG9wdGlvbnMgPSBtZXJnZShvcHRpb25zLCB0YXJnZXRbbWFwcGluZ1Byb3BlcnR5XSk7XG5cdFx0fVxuXHRcdG9wdGlvbnMgPSBmaWxsT3B0aW9ucyhvcHRpb25zKTtcblxuXHRcdHZhciByZXN1bHQgPSB1cGRhdGVWaWV3TW9kZWwodGFyZ2V0LCBqc09iamVjdCwgb3B0aW9ucyk7XG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0cmVzdWx0ID0gdGFyZ2V0O1xuXHRcdH1cblxuXHRcdC8vIEV2YWx1YXRlIGFueSBkZXBlbmRlbnQgb2JzZXJ2YWJsZXMgdGhhdCB3ZXJlIHByb3hpZWQuXG5cdFx0Ly8gRG8gdGhpcyBpbiBhIHRpbWVvdXQgdG8gZGVmZXIgZXhlY3V0aW9uLiBCYXNpY2FsbHksIGFueSB1c2VyIGNvZGUgdGhhdCBleHBsaWNpdGx5IGxvb2tzIHVwIHRoZSBETyB3aWxsIHBlcmZvcm0gdGhlIGZpcnN0IGV2YWx1YXRpb24uIE90aGVyd2lzZSxcblx0XHQvLyBpdCB3aWxsIGJlIGRvbmUgYnkgdGhpcyBjb2RlLlxuXHRcdGlmICghLS1tYXBwaW5nTmVzdGluZykge1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR3aGlsZSAoZGVwZW5kZW50T2JzZXJ2YWJsZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIERPID0gZGVwZW5kZW50T2JzZXJ2YWJsZXMucG9wKCk7XG5cdFx0XHRcdFx0aWYgKERPKSBETygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAwKTtcblx0XHR9XG5cblx0XHQvLyBTYXZlIGFueSBuZXcgbWFwcGluZyBvcHRpb25zIGluIHRoZSB2aWV3IG1vZGVsLCBzbyB0aGF0IHVwZGF0ZUZyb21KUyBjYW4gdXNlIHRoZW0gbGF0ZXIuXG5cdFx0cmVzdWx0W21hcHBpbmdQcm9wZXJ0eV0gPSBtZXJnZShyZXN1bHRbbWFwcGluZ1Byb3BlcnR5XSwgb3B0aW9ucyk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGV4cG9ydHMuZnJvbUpTT04gPSBmdW5jdGlvbiAoanNvblN0cmluZyAvKiwgb3B0aW9ucywgdGFyZ2V0Ki8gKSB7XG5cdFx0dmFyIHBhcnNlZCA9IGtvLnV0aWxzLnBhcnNlSnNvbihqc29uU3RyaW5nKTtcblx0XHRhcmd1bWVudHNbMF0gPSBwYXJzZWQ7XG5cdFx0cmV0dXJuIGV4cG9ydHMuZnJvbUpTLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdH07XG5cblx0ZXhwb3J0cy51cGRhdGVGcm9tSlMgPSBmdW5jdGlvbiAodmlld01vZGVsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy51cGRhdGVGcm9tSlMsIHVzZSBrby5tYXBwaW5nLmZyb21KUyBpbnN0ZWFkLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBvcmRlciBvZiBwYXJhbWV0ZXJzIGlzIGRpZmZlcmVudCFcIik7XG5cdH07XG5cblx0ZXhwb3J0cy51cGRhdGVGcm9tSlNPTiA9IGZ1bmN0aW9uICh2aWV3TW9kZWwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJrby5tYXBwaW5nLnVwZGF0ZUZyb21KU09OLCB1c2Uga28ubWFwcGluZy5mcm9tSlNPTiBpbnN0ZWFkLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBvcmRlciBvZiBwYXJhbWV0ZXJzIGlzIGRpZmZlcmVudCFcIik7XG5cdH07XG5cblx0ZXhwb3J0cy50b0pTID0gZnVuY3Rpb24gKHJvb3RPYmplY3QsIG9wdGlvbnMpIHtcblx0XHRpZiAoIWRlZmF1bHRPcHRpb25zKSBleHBvcnRzLnJlc2V0RGVmYXVsdE9wdGlvbnMoKTtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHRocm93IG5ldyBFcnJvcihcIldoZW4gY2FsbGluZyBrby5tYXBwaW5nLnRvSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKTtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGRlZmF1bHRPcHRpb25zLmlnbm9yZSkgIT09IFwiYXJyYXlcIikgdGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy5kZWZhdWx0T3B0aW9ucygpLmlnbm9yZSBzaG91bGQgYmUgYW4gYXJyYXkuXCIpO1xuXHRcdGlmIChleHBvcnRzLmdldFR5cGUoZGVmYXVsdE9wdGlvbnMuaW5jbHVkZSkgIT09IFwiYXJyYXlcIikgdGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy5kZWZhdWx0T3B0aW9ucygpLmluY2x1ZGUgc2hvdWxkIGJlIGFuIGFycmF5LlwiKTtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGRlZmF1bHRPcHRpb25zLmNvcHkpICE9PSBcImFycmF5XCIpIHRocm93IG5ldyBFcnJvcihcImtvLm1hcHBpbmcuZGVmYXVsdE9wdGlvbnMoKS5jb3B5IHNob3VsZCBiZSBhbiBhcnJheS5cIik7XG5cblx0XHQvLyBNZXJnZSBpbiB0aGUgb3B0aW9ucyB1c2VkIGluIGZyb21KU1xuXHRcdG9wdGlvbnMgPSBmaWxsT3B0aW9ucyhvcHRpb25zLCByb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0pO1xuXG5cdFx0Ly8gV2UganVzdCB1bndyYXAgZXZlcnl0aGluZyBhdCBldmVyeSBsZXZlbCBpbiB0aGUgb2JqZWN0IGdyYXBoXG5cdFx0cmV0dXJuIGV4cG9ydHMudmlzaXRNb2RlbChyb290T2JqZWN0LCBmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoeClcblx0XHR9LCBvcHRpb25zKTtcblx0fTtcblxuXHRleHBvcnRzLnRvSlNPTiA9IGZ1bmN0aW9uIChyb290T2JqZWN0LCBvcHRpb25zKSB7XG5cdFx0dmFyIHBsYWluSmF2YVNjcmlwdE9iamVjdCA9IGV4cG9ydHMudG9KUyhyb290T2JqZWN0LCBvcHRpb25zKTtcblx0XHRyZXR1cm4ga28udXRpbHMuc3RyaW5naWZ5SnNvbihwbGFpbkphdmFTY3JpcHRPYmplY3QpO1xuXHR9O1xuXG5cdGV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRkZWZhdWx0T3B0aW9ucyA9IGFyZ3VtZW50c1swXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuXHRcdH1cblx0fTtcblxuXHRleHBvcnRzLnJlc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0ZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0XHRpbmNsdWRlOiBfZGVmYXVsdE9wdGlvbnMuaW5jbHVkZS5zbGljZSgwKSxcblx0XHRcdGlnbm9yZTogX2RlZmF1bHRPcHRpb25zLmlnbm9yZS5zbGljZSgwKSxcblx0XHRcdGNvcHk6IF9kZWZhdWx0T3B0aW9ucy5jb3B5LnNsaWNlKDApXG5cdFx0fTtcblx0fTtcblxuXHRleHBvcnRzLmdldFR5cGUgPSBmdW5jdGlvbih4KSB7XG5cdFx0aWYgKCh4KSAmJiAodHlwZW9mICh4KSA9PT0gXCJvYmplY3RcIikpIHtcblx0XHRcdGlmICh4LmNvbnN0cnVjdG9yID09IChuZXcgRGF0ZSkuY29uc3RydWN0b3IpIHJldHVybiBcImRhdGVcIjtcblx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBBcnJheV1cIikgcmV0dXJuIFwiYXJyYXlcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGVvZiB4O1xuXHR9XG5cblx0ZnVuY3Rpb24gZmlsbE9wdGlvbnMocmF3T3B0aW9ucywgb3RoZXJPcHRpb25zKSB7XG5cdFx0dmFyIG9wdGlvbnMgPSBtZXJnZSh7fSwgcmF3T3B0aW9ucyk7XG5cblx0XHQvLyBNb3ZlIHJlY29nbml6ZWQgcm9vdC1sZXZlbCBwcm9wZXJ0aWVzIGludG8gYSByb290IG5hbWVzcGFjZVxuXHRcdGZvciAodmFyIGkgPSByZWNvZ25pemVkUm9vdFByb3BlcnRpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdHZhciBwcm9wZXJ0eSA9IHJlY29nbml6ZWRSb290UHJvcGVydGllc1tpXTtcblx0XHRcdFxuXHRcdFx0Ly8gQ2Fycnkgb24sIHVubGVzcyB0aGlzIHByb3BlcnR5IGlzIHByZXNlbnRcblx0XHRcdGlmICghb3B0aW9uc1twcm9wZXJ0eV0pIGNvbnRpbnVlO1xuXHRcdFx0XG5cdFx0XHQvLyBNb3ZlIHRoZSBwcm9wZXJ0eSBpbnRvIHRoZSByb290IG5hbWVzcGFjZVxuXHRcdFx0aWYgKCEob3B0aW9uc1tcIlwiXSBpbnN0YW5jZW9mIE9iamVjdCkpIG9wdGlvbnNbXCJcIl0gPSB7fTtcblx0XHRcdG9wdGlvbnNbXCJcIl1bcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XG5cdFx0XHRkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyT3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucy5pZ25vcmUgPSBtZXJnZUFycmF5cyhvdGhlck9wdGlvbnMuaWdub3JlLCBvcHRpb25zLmlnbm9yZSk7XG5cdFx0XHRvcHRpb25zLmluY2x1ZGUgPSBtZXJnZUFycmF5cyhvdGhlck9wdGlvbnMuaW5jbHVkZSwgb3B0aW9ucy5pbmNsdWRlKTtcblx0XHRcdG9wdGlvbnMuY29weSA9IG1lcmdlQXJyYXlzKG90aGVyT3B0aW9ucy5jb3B5LCBvcHRpb25zLmNvcHkpO1xuXHRcdH1cblx0XHRvcHRpb25zLmlnbm9yZSA9IG1lcmdlQXJyYXlzKG9wdGlvbnMuaWdub3JlLCBkZWZhdWx0T3B0aW9ucy5pZ25vcmUpO1xuXHRcdG9wdGlvbnMuaW5jbHVkZSA9IG1lcmdlQXJyYXlzKG9wdGlvbnMuaW5jbHVkZSwgZGVmYXVsdE9wdGlvbnMuaW5jbHVkZSk7XG5cdFx0b3B0aW9ucy5jb3B5ID0gbWVyZ2VBcnJheXMob3B0aW9ucy5jb3B5LCBkZWZhdWx0T3B0aW9ucy5jb3B5KTtcblxuXHRcdG9wdGlvbnMubWFwcGVkUHJvcGVydGllcyA9IG9wdGlvbnMubWFwcGVkUHJvcGVydGllcyB8fCB7fTtcblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXG5cdGZ1bmN0aW9uIG1lcmdlQXJyYXlzKGEsIGIpIHtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGEpICE9PSBcImFycmF5XCIpIHtcblx0XHRcdGlmIChleHBvcnRzLmdldFR5cGUoYSkgPT09IFwidW5kZWZpbmVkXCIpIGEgPSBbXTtcblx0XHRcdGVsc2UgYSA9IFthXTtcblx0XHR9XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShiKSAhPT0gXCJhcnJheVwiKSB7XG5cdFx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGIpID09PSBcInVuZGVmaW5lZFwiKSBiID0gW107XG5cdFx0XHRlbHNlIGIgPSBbYl07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGtvLnV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXMoYS5jb25jYXQoYikpO1xuXHR9XG5cblx0Ly8gV2hlbiB1c2luZyBhICdjcmVhdGUnIGNhbGxiYWNrLCB3ZSBwcm94eSB0aGUgZGVwZW5kZW50IG9ic2VydmFibGUgc28gdGhhdCBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5IGV2YWx1YXRlIG9uIGNyZWF0aW9uLlxuXHQvLyBUaGUgcmVhc29uIGlzIHRoYXQgdGhlIGRlcGVuZGVudCBvYnNlcnZhYmxlcyBpbiB0aGUgdXNlci1zcGVjaWZpZWQgY2FsbGJhY2sgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBub3QgYmVlbiBtYXBwZWQgeWV0LlxuXHRmdW5jdGlvbiB3aXRoUHJveHlEZXBlbmRlbnRPYnNlcnZhYmxlKGRlcGVuZGVudE9ic2VydmFibGVzLCBjYWxsYmFjaykge1xuXHRcdHZhciBsb2NhbERPID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHJlYWQsIG93bmVyLCBvcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdFx0aWYgKHJlYWQgJiYgdHlwZW9mIHJlYWQgPT0gXCJvYmplY3RcIikgeyAvLyBtaXJyb3JzIGNvbmRpdGlvbiBpbiBrbm9ja291dCBpbXBsZW1lbnRhdGlvbiBvZiBETydzXG5cdFx0XHRcdG9wdGlvbnMgPSByZWFkO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmVhbERlZmVyRXZhbHVhdGlvbiA9IG9wdGlvbnMuZGVmZXJFdmFsdWF0aW9uO1xuXG5cdFx0XHR2YXIgaXNSZW1vdmVkID0gZmFsc2U7XG5cblx0XHRcdC8vIFdlIHdyYXAgdGhlIG9yaWdpbmFsIGRlcGVuZGVudCBvYnNlcnZhYmxlIHNvIHRoYXQgd2UgY2FuIHJlbW92ZSBpdCBmcm9tIHRoZSAnZGVwZW5kZW50T2JzZXJ2YWJsZXMnIGxpc3Qgd2UgbmVlZCB0byBldmFsdWF0ZSBhZnRlciBtYXBwaW5nIGhhc1xuXHRcdFx0Ly8gY29tcGxldGVkIGlmIHRoZSB1c2VyIGFscmVhZHkgZXZhbHVhdGVkIHRoZSBETyB0aGVtc2VsdmVzIGluIHRoZSBtZWFudGltZS5cblx0XHRcdHZhciB3cmFwID0gZnVuY3Rpb24gKERPKSB7XG5cdFx0XHRcdC8vIFRlbXBvcmFyaWx5IHJldmVydCBrby5kZXBlbmRlbnRPYnNlcnZhYmxlLCBzaW5jZSBpdCBpcyB1c2VkIGluIGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZVxuXHRcdFx0XHR2YXIgdG1wID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHRcdFx0a28uZGVwZW5kZW50T2JzZXJ2YWJsZSA9IHJlYWxLb0RlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0XHRcdHZhciBpc1dyaXRlYWJsZSA9IGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShETyk7XG5cdFx0XHRcdGtvLmRlcGVuZGVudE9ic2VydmFibGUgPSB0bXA7XG5cblx0XHRcdFx0dmFyIHdyYXBwZWQgPSByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlKHtcblx0XHRcdFx0XHRyZWFkOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWlzUmVtb3ZlZCkge1xuXHRcdFx0XHRcdFx0XHRrby51dGlscy5hcnJheVJlbW92ZUl0ZW0oZGVwZW5kZW50T2JzZXJ2YWJsZXMsIERPKTtcblx0XHRcdFx0XHRcdFx0aXNSZW1vdmVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBETy5hcHBseShETywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHdyaXRlOiBpc1dyaXRlYWJsZSAmJiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gRE8odmFsKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRlZmVyRXZhbHVhdGlvbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKERFQlVHKSB3cmFwcGVkLl93cmFwcGVyID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHdyYXBwZWQ7XG5cdFx0XHR9O1xuXHRcdFx0XG5cdFx0XHRvcHRpb25zLmRlZmVyRXZhbHVhdGlvbiA9IHRydWU7IC8vIHdpbGwgZWl0aGVyIHNldCBmb3IganVzdCBvcHRpb25zLCBvciBib3RoIHJlYWQvb3B0aW9ucy5cblx0XHRcdHZhciByZWFsRGVwZW5kZW50T2JzZXJ2YWJsZSA9IG5ldyByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlKHJlYWQsIG93bmVyLCBvcHRpb25zKTtcblxuXHRcdFx0aWYgKCFyZWFsRGVmZXJFdmFsdWF0aW9uKSB7XG5cdFx0XHRcdHJlYWxEZXBlbmRlbnRPYnNlcnZhYmxlID0gd3JhcChyZWFsRGVwZW5kZW50T2JzZXJ2YWJsZSk7XG5cdFx0XHRcdGRlcGVuZGVudE9ic2VydmFibGVzLnB1c2gocmVhbERlcGVuZGVudE9ic2VydmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVhbERlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0fVxuXHRcdGtvLmRlcGVuZGVudE9ic2VydmFibGUuZm4gPSByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlLmZuO1xuXHRcdGtvLmNvbXB1dGVkID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHR2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcblx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gbG9jYWxETztcblx0XHRrby5jb21wdXRlZCA9IGtvLmRlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZpZXdNb2RlbChtYXBwZWRSb290T2JqZWN0LCByb290T2JqZWN0LCBvcHRpb25zLCBwYXJlbnROYW1lLCBwYXJlbnQsIHBhcmVudFByb3BlcnR5TmFtZSwgbWFwcGVkUGFyZW50KSB7XG5cdFx0dmFyIGlzQXJyYXkgPSBleHBvcnRzLmdldFR5cGUoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KSkgPT09IFwiYXJyYXlcIjtcblxuXHRcdHBhcmVudFByb3BlcnR5TmFtZSA9IHBhcmVudFByb3BlcnR5TmFtZSB8fCBcIlwiO1xuXG5cdFx0Ly8gSWYgdGhpcyBvYmplY3Qgd2FzIGFscmVhZHkgbWFwcGVkIHByZXZpb3VzbHksIHRha2UgdGhlIG9wdGlvbnMgZnJvbSB0aGVyZSBhbmQgbWVyZ2UgdGhlbSB3aXRoIG91ciBleGlzdGluZyBvbmVzLlxuXHRcdGlmIChleHBvcnRzLmlzTWFwcGVkKG1hcHBlZFJvb3RPYmplY3QpKSB7XG5cdFx0XHR2YXIgcHJldmlvdXNNYXBwaW5nID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KVttYXBwaW5nUHJvcGVydHldO1xuXHRcdFx0b3B0aW9ucyA9IG1lcmdlKHByZXZpb3VzTWFwcGluZywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNhbGxiYWNrUGFyYW1zID0ge1xuXHRcdFx0ZGF0YTogcm9vdE9iamVjdCxcblx0XHRcdHBhcmVudDogbWFwcGVkUGFyZW50XG5cdFx0fTtcblxuXHRcdHZhciBoYXNDcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvcHRpb25zW3BhcmVudE5hbWVdICYmIG9wdGlvbnNbcGFyZW50TmFtZV0uY3JlYXRlIGluc3RhbmNlb2YgRnVuY3Rpb247XG5cdFx0fTtcblxuXHRcdHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRyZXR1cm4gd2l0aFByb3h5RGVwZW5kZW50T2JzZXJ2YWJsZShkZXBlbmRlbnRPYnNlcnZhYmxlcywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocGFyZW50KSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0uY3JlYXRlKHtcblx0XHRcdFx0XHRcdGRhdGE6IGRhdGEgfHwgY2FsbGJhY2tQYXJhbXMuZGF0YSxcblx0XHRcdFx0XHRcdHBhcmVudDogY2FsbGJhY2tQYXJhbXMucGFyZW50LFxuXHRcdFx0XHRcdFx0c2tpcDogZW1wdHlSZXR1cm5cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1twYXJlbnROYW1lXS5jcmVhdGUoe1xuXHRcdFx0XHRcdFx0ZGF0YTogZGF0YSB8fCBjYWxsYmFja1BhcmFtcy5kYXRhLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBjYWxsYmFja1BhcmFtcy5wYXJlbnRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGhhc1VwZGF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0gJiYgb3B0aW9uc1twYXJlbnROYW1lXS51cGRhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcblx0XHR9O1xuXG5cdFx0dmFyIHVwZGF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKG9iaiwgZGF0YSkge1xuXHRcdFx0dmFyIHBhcmFtcyA9IHtcblx0XHRcdFx0ZGF0YTogZGF0YSB8fCBjYWxsYmFja1BhcmFtcy5kYXRhLFxuXHRcdFx0XHRwYXJlbnQ6IGNhbGxiYWNrUGFyYW1zLnBhcmVudCxcblx0XHRcdFx0dGFyZ2V0OiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG9iailcblx0XHRcdH07XG5cblx0XHRcdGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUob2JqKSkge1xuXHRcdFx0XHRwYXJhbXMub2JzZXJ2YWJsZSA9IG9iajtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0udXBkYXRlKHBhcmFtcyk7XG5cdFx0fVxuXG5cdFx0dmFyIGFscmVhZHlNYXBwZWQgPSB2aXNpdGVkT2JqZWN0cy5nZXQocm9vdE9iamVjdCk7XG5cdFx0aWYgKGFscmVhZHlNYXBwZWQpIHtcblx0XHRcdHJldHVybiBhbHJlYWR5TWFwcGVkO1xuXHRcdH1cblxuXHRcdHBhcmVudE5hbWUgPSBwYXJlbnROYW1lIHx8IFwiXCI7XG5cblx0XHRpZiAoIWlzQXJyYXkpIHtcblx0XHRcdC8vIEZvciBhdG9taWMgdHlwZXMsIGRvIGEgZGlyZWN0IHVwZGF0ZSBvbiB0aGUgb2JzZXJ2YWJsZVxuXHRcdFx0aWYgKCFjYW5IYXZlUHJvcGVydGllcyhyb290T2JqZWN0KSkge1xuXHRcdFx0XHRzd2l0Y2ggKGV4cG9ydHMuZ2V0VHlwZShyb290T2JqZWN0KSkge1xuXHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcblx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShyb290T2JqZWN0KSkge1xuXHRcdFx0XHRcdFx0XHRyb290T2JqZWN0KHVwZGF0ZUNhbGxiYWNrKHJvb3RPYmplY3QpKTtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHJvb3RPYmplY3Q7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0gdXBkYXRlQ2FsbGJhY2socm9vdE9iamVjdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSByb290T2JqZWN0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3QpKSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdmFsdWVUb1dyaXRlID0gdXBkYXRlQ2FsbGJhY2sobWFwcGVkUm9vdE9iamVjdCk7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QodmFsdWVUb1dyaXRlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlVG9Xcml0ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciB2YWx1ZVRvV3JpdGUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpO1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0KHZhbHVlVG9Xcml0ZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVRvV3JpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChoYXNDcmVhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBjcmVhdGVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBrby5vYnNlcnZhYmxlKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCh1cGRhdGVDYWxsYmFjayhtYXBwZWRSb290T2JqZWN0KSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KTtcblx0XHRcdFx0aWYgKCFtYXBwZWRSb290T2JqZWN0KSB7XG5cdFx0XHRcdFx0aWYgKGhhc0NyZWF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdHZhciByZXN1bHQgPSBjcmVhdGVDYWxsYmFjaygpO1xuXG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSB1cGRhdGVDYWxsYmFjayhyZXN1bHQpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlQ2FsbGJhY2socmVzdWx0KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHVwZGF0ZUNhbGxiYWNrKG1hcHBlZFJvb3RPYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmlzaXRlZE9iamVjdHMuc2F2ZShyb290T2JqZWN0LCBtYXBwZWRSb290T2JqZWN0KTtcblx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xuXG5cdFx0XHRcdC8vIEZvciBub24tYXRvbWljIHR5cGVzLCB2aXNpdCBhbGwgcHJvcGVydGllcyBhbmQgdXBkYXRlIHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIGZ1bmN0aW9uIChpbmRleGVyKSB7XG5cdFx0XHRcdFx0dmFyIGZ1bGxQcm9wZXJ0eU5hbWUgPSBwYXJlbnRQcm9wZXJ0eU5hbWUubGVuZ3RoID8gcGFyZW50UHJvcGVydHlOYW1lICsgXCIuXCIgKyBpbmRleGVyIDogaW5kZXhlcjtcblxuXHRcdFx0XHRcdGlmIChrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5pZ25vcmUsIGZ1bGxQcm9wZXJ0eU5hbWUpICE9IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtvLnV0aWxzLmFycmF5SW5kZXhPZihvcHRpb25zLmNvcHksIGZ1bGxQcm9wZXJ0eU5hbWUpICE9IC0xKSB7XG5cdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdID0gcm9vdE9iamVjdFtpbmRleGVyXTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJbiBjYXNlIHdlIGFyZSBhZGRpbmcgYW4gYWxyZWFkeSBtYXBwZWQgcHJvcGVydHksIGZpbGwgaXQgd2l0aCB0aGUgcHJldmlvdXNseSBtYXBwZWQgcHJvcGVydHkgdmFsdWUgdG8gcHJldmVudCByZWN1cnNpb24uXG5cdFx0XHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHByb3BlcnR5IHRoYXQgd2FzIGdlbmVyYXRlZCBieSBmcm9tSlMsIHdlIHNob3VsZCB1c2UgdGhlIG9wdGlvbnMgc3BlY2lmaWVkIHRoZXJlXG5cdFx0XHRcdFx0dmFyIHByZXZNYXBwZWRQcm9wZXJ0eSA9IHZpc2l0ZWRPYmplY3RzLmdldChyb290T2JqZWN0W2luZGV4ZXJdKTtcblx0XHRcdFx0XHR2YXIgcmV0dmFsID0gdXBkYXRlVmlld01vZGVsKG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0sIHJvb3RPYmplY3RbaW5kZXhlcl0sIG9wdGlvbnMsIGluZGV4ZXIsIG1hcHBlZFJvb3RPYmplY3QsIGZ1bGxQcm9wZXJ0eU5hbWUsIG1hcHBlZFJvb3RPYmplY3QpO1xuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IHByZXZNYXBwZWRQcm9wZXJ0eSB8fCByZXR2YWw7XG5cblx0XHRcdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0pKSB7XG5cdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWUpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG9wdGlvbnMubWFwcGVkUHJvcGVydGllc1tmdWxsUHJvcGVydHlOYW1lXSA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7IC8vbWFwcGVkUm9vdE9iamVjdCBpcyBhbiBhcnJheVxuXHRcdFx0dmFyIGNoYW5nZXMgPSBbXTtcblxuXHRcdFx0dmFyIGhhc0tleUNhbGxiYWNrID0gZmFsc2U7XG5cdFx0XHR2YXIga2V5Q2FsbGJhY2sgPSBmdW5jdGlvbiAoeCkge1xuXHRcdFx0XHRyZXR1cm4geDtcblx0XHRcdH1cblx0XHRcdGlmIChvcHRpb25zW3BhcmVudE5hbWVdICYmIG9wdGlvbnNbcGFyZW50TmFtZV0ua2V5KSB7XG5cdFx0XHRcdGtleUNhbGxiYWNrID0gb3B0aW9uc1twYXJlbnROYW1lXS5rZXk7XG5cdFx0XHRcdGhhc0tleUNhbGxiYWNrID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFrby5pc09ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdCkpIHtcblx0XHRcdFx0Ly8gV2hlbiBjcmVhdGluZyB0aGUgbmV3IG9ic2VydmFibGUgYXJyYXksIGFsc28gYWRkIGEgYnVuY2ggb2YgdXRpbGl0eSBmdW5jdGlvbnMgdGhhdCB0YWtlIHRoZSAna2V5JyBvZiB0aGUgYXJyYXkgaXRlbXMgaW50byBhY2NvdW50LlxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZFJlbW92ZSA9IGZ1bmN0aW9uICh2YWx1ZU9yUHJlZGljYXRlKSB7XG5cdFx0XHRcdFx0dmFyIHByZWRpY2F0ZSA9IHR5cGVvZiB2YWx1ZU9yUHJlZGljYXRlID09IFwiZnVuY3Rpb25cIiA/IHZhbHVlT3JQcmVkaWNhdGUgOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBrZXlDYWxsYmFjayh2YWx1ZU9yUHJlZGljYXRlKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3QucmVtb3ZlKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZGljYXRlKGtleUNhbGxiYWNrKGl0ZW0pKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkUmVtb3ZlQWxsID0gZnVuY3Rpb24gKGFycmF5T2ZWYWx1ZXMpIHtcblx0XHRcdFx0XHR2YXIgYXJyYXlPZktleXMgPSBmaWx0ZXJBcnJheUJ5S2V5KGFycmF5T2ZWYWx1ZXMsIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdC5yZW1vdmUoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBrby51dGlscy5hcnJheUluZGV4T2YoYXJyYXlPZktleXMsIGtleUNhbGxiYWNrKGl0ZW0pKSAhPSAtMTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkRGVzdHJveSA9IGZ1bmN0aW9uICh2YWx1ZU9yUHJlZGljYXRlKSB7XG5cdFx0XHRcdFx0dmFyIHByZWRpY2F0ZSA9IHR5cGVvZiB2YWx1ZU9yUHJlZGljYXRlID09IFwiZnVuY3Rpb25cIiA/IHZhbHVlT3JQcmVkaWNhdGUgOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBrZXlDYWxsYmFjayh2YWx1ZU9yUHJlZGljYXRlKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3QuZGVzdHJveShmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWRpY2F0ZShrZXlDYWxsYmFjayhpdGVtKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZERlc3Ryb3lBbGwgPSBmdW5jdGlvbiAoYXJyYXlPZlZhbHVlcykge1xuXHRcdFx0XHRcdHZhciBhcnJheU9mS2V5cyA9IGZpbHRlckFycmF5QnlLZXkoYXJyYXlPZlZhbHVlcywga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0LmRlc3Ryb3koZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBrby51dGlscy5hcnJheUluZGV4T2YoYXJyYXlPZktleXMsIGtleUNhbGxiYWNrKGl0ZW0pKSAhPSAtMTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkSW5kZXhPZiA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0dmFyIGtleXMgPSBmaWx0ZXJBcnJheUJ5S2V5KG1hcHBlZFJvb3RPYmplY3QoKSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdHZhciBrZXkgPSBrZXlDYWxsYmFjayhpdGVtKTtcblx0XHRcdFx0XHRyZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGtleXMsIGtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZENyZWF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdGlmIChtYXBwZWRSb290T2JqZWN0Lm1hcHBlZEluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYWxyZWFkeSBpcyBhbiBvYmplY3Qgd2l0aCB0aGUga2V5IHRoYXQgeW91IHNwZWNpZmllZC5cIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBoYXNDcmVhdGVDYWxsYmFjaygpID8gY3JlYXRlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdHZhciBuZXdWYWx1ZSA9IHVwZGF0ZUNhbGxiYWNrKGl0ZW0sIHZhbHVlKTtcblx0XHRcdFx0XHRcdGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUoaXRlbSkpIHtcblx0XHRcdFx0XHRcdFx0aXRlbShuZXdWYWx1ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpdGVtID0gbmV3VmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QucHVzaChpdGVtKTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY3VycmVudEFycmF5S2V5cyA9IGZpbHRlckFycmF5QnlLZXkoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KSwga2V5Q2FsbGJhY2spLnNvcnQoKTtcblx0XHRcdHZhciBuZXdBcnJheUtleXMgPSBmaWx0ZXJBcnJheUJ5S2V5KHJvb3RPYmplY3QsIGtleUNhbGxiYWNrKTtcblx0XHRcdGlmIChoYXNLZXlDYWxsYmFjaykgbmV3QXJyYXlLZXlzLnNvcnQoKTtcblx0XHRcdHZhciBlZGl0U2NyaXB0ID0ga28udXRpbHMuY29tcGFyZUFycmF5cyhjdXJyZW50QXJyYXlLZXlzLCBuZXdBcnJheUtleXMpO1xuXG5cdFx0XHR2YXIgaWdub3JlSW5kZXhPZiA9IHt9O1xuXHRcdFx0XG5cdFx0XHR2YXIgaSwgajtcblxuXHRcdFx0dmFyIHVud3JhcHBlZFJvb3RPYmplY3QgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpO1xuXHRcdFx0dmFyIGl0ZW1zQnlLZXkgPSB7fTtcblx0XHRcdHZhciBvcHRpbWl6ZWRLZXlzID0gdHJ1ZTtcblx0XHRcdGZvciAoaSA9IDAsIGogPSB1bndyYXBwZWRSb290T2JqZWN0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuXHRcdFx0XHR2YXIga2V5ID0ga2V5Q2FsbGJhY2sodW53cmFwcGVkUm9vdE9iamVjdFtpXSk7XG5cdFx0XHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRcdFx0XHRvcHRpbWl6ZWRLZXlzID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbXNCeUtleVtrZXldID0gdW53cmFwcGVkUm9vdE9iamVjdFtpXTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG5ld0NvbnRlbnRzID0gW107XG5cdFx0XHR2YXIgcGFzc2VkT3ZlciA9IDA7XG5cdFx0XHRmb3IgKGkgPSAwLCBqID0gZWRpdFNjcmlwdC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHRcdFx0dmFyIGtleSA9IGVkaXRTY3JpcHRbaV07XG5cdFx0XHRcdHZhciBtYXBwZWRJdGVtO1xuXHRcdFx0XHR2YXIgZnVsbFByb3BlcnR5TmFtZSA9IHBhcmVudFByb3BlcnR5TmFtZSArIFwiW1wiICsgaSArIFwiXVwiO1xuXHRcdFx0XHRzd2l0Y2ggKGtleS5zdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImFkZGVkXCI6XG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBvcHRpbWl6ZWRLZXlzID8gaXRlbXNCeUtleVtrZXkudmFsdWVdIDogZ2V0SXRlbUJ5S2V5KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCksIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdG1hcHBlZEl0ZW0gPSB1cGRhdGVWaWV3TW9kZWwodW5kZWZpbmVkLCBpdGVtLCBvcHRpb25zLCBwYXJlbnROYW1lLCBtYXBwZWRSb290T2JqZWN0LCBmdWxsUHJvcGVydHlOYW1lLCBwYXJlbnQpO1xuXHRcdFx0XHRcdGlmKCFoYXNDcmVhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRtYXBwZWRJdGVtID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRJdGVtKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgaW5kZXggPSBpZ25vcmFibGVJbmRleE9mKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCksIGl0ZW0sIGlnbm9yZUluZGV4T2YpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChtYXBwZWRJdGVtID09PSBlbXB0eVJldHVybikge1xuXHRcdFx0XHRcdFx0cGFzc2VkT3ZlcisrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRuZXdDb250ZW50c1tpbmRleCAtIHBhc3NlZE92ZXJdID0gbWFwcGVkSXRlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZ25vcmVJbmRleE9mW2luZGV4XSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZXRhaW5lZFwiOlxuXHRcdFx0XHRcdHZhciBpdGVtID0gb3B0aW1pemVkS2V5cyA/IGl0ZW1zQnlLZXlba2V5LnZhbHVlXSA6IGdldEl0ZW1CeUtleShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpLCBrZXkudmFsdWUsIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHRtYXBwZWRJdGVtID0gZ2V0SXRlbUJ5S2V5KG1hcHBlZFJvb3RPYmplY3QsIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdHVwZGF0ZVZpZXdNb2RlbChtYXBwZWRJdGVtLCBpdGVtLCBvcHRpb25zLCBwYXJlbnROYW1lLCBtYXBwZWRSb290T2JqZWN0LCBmdWxsUHJvcGVydHlOYW1lLCBwYXJlbnQpO1xuXG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gaWdub3JhYmxlSW5kZXhPZihrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpLCBpdGVtLCBpZ25vcmVJbmRleE9mKTtcblx0XHRcdFx0XHRuZXdDb250ZW50c1tpbmRleF0gPSBtYXBwZWRJdGVtO1xuXHRcdFx0XHRcdGlnbm9yZUluZGV4T2ZbaW5kZXhdID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlbGV0ZWRcIjpcblx0XHRcdFx0XHRtYXBwZWRJdGVtID0gZ2V0SXRlbUJ5S2V5KG1hcHBlZFJvb3RPYmplY3QsIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtcblx0XHRcdFx0XHRldmVudDoga2V5LnN0YXR1cyxcblx0XHRcdFx0XHRpdGVtOiBtYXBwZWRJdGVtXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRtYXBwZWRSb290T2JqZWN0KG5ld0NvbnRlbnRzKTtcblxuXHRcdFx0aWYgKG9wdGlvbnNbcGFyZW50TmFtZV0gJiYgb3B0aW9uc1twYXJlbnROYW1lXS5hcnJheUNoYW5nZWQpIHtcblx0XHRcdFx0a28udXRpbHMuYXJyYXlGb3JFYWNoKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcblx0XHRcdFx0XHRvcHRpb25zW3BhcmVudE5hbWVdLmFycmF5Q2hhbmdlZChjaGFuZ2UuZXZlbnQsIGNoYW5nZS5pdGVtKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XG5cdH1cblxuXHRmdW5jdGlvbiBpZ25vcmFibGVJbmRleE9mKGFycmF5LCBpdGVtLCBpZ25vcmVJbmRpY2VzKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHRcdGlmIChpZ25vcmVJbmRpY2VzW2ldID09PSB0cnVlKSBjb250aW51ZTtcblx0XHRcdGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWFwS2V5KGl0ZW0sIGNhbGxiYWNrKSB7XG5cdFx0dmFyIG1hcHBlZEl0ZW07XG5cdFx0aWYgKGNhbGxiYWNrKSBtYXBwZWRJdGVtID0gY2FsbGJhY2soaXRlbSk7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShtYXBwZWRJdGVtKSA9PT0gXCJ1bmRlZmluZWRcIikgbWFwcGVkSXRlbSA9IGl0ZW07XG5cblx0XHRyZXR1cm4ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRJdGVtKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEl0ZW1CeUtleShhcnJheSwga2V5LCBjYWxsYmFjaykge1xuXHRcdGFycmF5ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhcnJheSk7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYXJyYXlbaV07XG5cdFx0XHRpZiAobWFwS2V5KGl0ZW0sIGNhbGxiYWNrKSA9PT0ga2V5KSByZXR1cm4gaXRlbTtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXaGVuIGNhbGxpbmcga28udXBkYXRlKiwgdGhlIGtleSAnXCIgKyBrZXkgKyBcIicgd2FzIG5vdCBmb3VuZCFcIik7XG5cdH1cblxuXHRmdW5jdGlvbiBmaWx0ZXJBcnJheUJ5S2V5KGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHJldHVybiBrby51dGlscy5hcnJheU1hcChrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFycmF5KSwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRyZXR1cm4gbWFwS2V5KGl0ZW0sIGNhbGxiYWNrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdmlzaXRQcm9wZXJ0aWVzT3JBcnJheUVudHJpZXMocm9vdE9iamVjdCwgdmlzaXRvckNhbGxiYWNrKSB7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShyb290T2JqZWN0KSA9PT0gXCJhcnJheVwiKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvb3RPYmplY3QubGVuZ3RoOyBpKyspXG5cdFx0XHR2aXNpdG9yQ2FsbGJhY2soaSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiByb290T2JqZWN0KVxuXHRcdFx0dmlzaXRvckNhbGxiYWNrKHByb3BlcnR5TmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGNhbkhhdmVQcm9wZXJ0aWVzKG9iamVjdCkge1xuXHRcdHZhciB0eXBlID0gZXhwb3J0cy5nZXRUeXBlKG9iamVjdCk7XG5cdFx0cmV0dXJuICgodHlwZSA9PT0gXCJvYmplY3RcIikgfHwgKHR5cGUgPT09IFwiYXJyYXlcIikpICYmIChvYmplY3QgIT09IG51bGwpO1xuXHR9XG5cblx0Ly8gQmFzZWQgb24gdGhlIHBhcmVudE5hbWUsIHRoaXMgY3JlYXRlcyBhIGZ1bGx5IGNsYXNzaWZpZWQgbmFtZSBvZiBhIHByb3BlcnR5XG5cblx0ZnVuY3Rpb24gZ2V0UHJvcGVydHlOYW1lKHBhcmVudE5hbWUsIHBhcmVudCwgaW5kZXhlcikge1xuXHRcdHZhciBwcm9wZXJ0eU5hbWUgPSBwYXJlbnROYW1lIHx8IFwiXCI7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShwYXJlbnQpID09PSBcImFycmF5XCIpIHtcblx0XHRcdGlmIChwYXJlbnROYW1lKSB7XG5cdFx0XHRcdHByb3BlcnR5TmFtZSArPSBcIltcIiArIGluZGV4ZXIgKyBcIl1cIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHBhcmVudE5hbWUpIHtcblx0XHRcdFx0cHJvcGVydHlOYW1lICs9IFwiLlwiO1xuXHRcdFx0fVxuXHRcdFx0cHJvcGVydHlOYW1lICs9IGluZGV4ZXI7XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wZXJ0eU5hbWU7XG5cdH1cblxuXHRleHBvcnRzLnZpc2l0TW9kZWwgPSBmdW5jdGlvbiAocm9vdE9iamVjdCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHRvcHRpb25zLnZpc2l0ZWRPYmplY3RzID0gb3B0aW9ucy52aXNpdGVkT2JqZWN0cyB8fCBuZXcgb2JqZWN0TG9va3VwKCk7XG5cblx0XHR2YXIgbWFwcGVkUm9vdE9iamVjdDtcblx0XHR2YXIgdW53cmFwcGVkUm9vdE9iamVjdCA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCk7XG5cblx0XHRpZiAoIWNhbkhhdmVQcm9wZXJ0aWVzKHVud3JhcHBlZFJvb3RPYmplY3QpKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2socm9vdE9iamVjdCwgb3B0aW9ucy5wYXJlbnROYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucyA9IGZpbGxPcHRpb25zKG9wdGlvbnMsIHVud3JhcHBlZFJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XSk7XG5cblx0XHRcdC8vIE9ubHkgZG8gYSBjYWxsYmFjaywgYnV0IGlnbm9yZSB0aGUgcmVzdWx0c1xuXHRcdFx0Y2FsbGJhY2socm9vdE9iamVjdCwgb3B0aW9ucy5wYXJlbnROYW1lKTtcblx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBleHBvcnRzLmdldFR5cGUodW53cmFwcGVkUm9vdE9iamVjdCkgPT09IFwiYXJyYXlcIiA/IFtdIDoge307XG5cdFx0fVxuXG5cdFx0b3B0aW9ucy52aXNpdGVkT2JqZWN0cy5zYXZlKHJvb3RPYmplY3QsIG1hcHBlZFJvb3RPYmplY3QpO1xuXG5cdFx0dmFyIHBhcmVudE5hbWUgPSBvcHRpb25zLnBhcmVudE5hbWU7XG5cdFx0dmlzaXRQcm9wZXJ0aWVzT3JBcnJheUVudHJpZXModW53cmFwcGVkUm9vdE9iamVjdCwgZnVuY3Rpb24gKGluZGV4ZXIpIHtcblx0XHRcdGlmIChvcHRpb25zLmlnbm9yZSAmJiBrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5pZ25vcmUsIGluZGV4ZXIpICE9IC0xKSByZXR1cm47XG5cblx0XHRcdHZhciBwcm9wZXJ0eVZhbHVlID0gdW53cmFwcGVkUm9vdE9iamVjdFtpbmRleGVyXTtcblx0XHRcdG9wdGlvbnMucGFyZW50TmFtZSA9IGdldFByb3BlcnR5TmFtZShwYXJlbnROYW1lLCB1bndyYXBwZWRSb290T2JqZWN0LCBpbmRleGVyKTtcblxuXHRcdFx0Ly8gSWYgd2UgZG9uJ3Qgd2FudCB0byBleHBsaWNpdGx5IGNvcHkgdGhlIHVubWFwcGVkIHByb3BlcnR5Li4uXG5cdFx0XHRpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuY29weSwgaW5kZXhlcikgPT09IC0xKSB7XG5cdFx0XHRcdC8vIC4uLmZpbmQgb3V0IGlmIGl0J3MgYSBwcm9wZXJ0eSB3ZSB3YW50IHRvIGV4cGxpY2l0bHkgaW5jbHVkZVxuXHRcdFx0XHRpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuaW5jbHVkZSwgaW5kZXhlcikgPT09IC0xKSB7XG5cdFx0XHRcdFx0Ly8gVGhlIG1hcHBlZCBwcm9wZXJ0aWVzIG9iamVjdCBjb250YWlucyBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhcnQgb2YgdGhlIG9yaWdpbmFsIG9iamVjdC5cblx0XHRcdFx0XHQvLyBJZiBhIHByb3BlcnR5IGRvZXMgbm90IGV4aXN0LCBhbmQgaXQgaXMgbm90IGJlY2F1c2UgaXQgaXMgcGFydCBvZiBhbiBhcnJheSAoZS5nLiBcIm15UHJvcFszXVwiKSwgdGhlbiBpdCBzaG91bGQgbm90IGJlIHVubWFwcGVkLlxuXHRcdFx0XHRcdGlmICh1bndyYXBwZWRSb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0gJiYgdW53cmFwcGVkUm9vdE9iamVjdFttYXBwaW5nUHJvcGVydHldLm1hcHBlZFByb3BlcnRpZXMgJiYgIXVud3JhcHBlZFJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XS5tYXBwZWRQcm9wZXJ0aWVzW2luZGV4ZXJdICYmICEoZXhwb3J0cy5nZXRUeXBlKHVud3JhcHBlZFJvb3RPYmplY3QpID09PSBcImFycmF5XCIpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvdXRwdXRQcm9wZXJ0eTtcblx0XHRcdHN3aXRjaCAoZXhwb3J0cy5nZXRUeXBlKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocHJvcGVydHlWYWx1ZSkpKSB7XG5cdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRjYXNlIFwiYXJyYXlcIjpcblx0XHRcdGNhc2UgXCJ1bmRlZmluZWRcIjpcblx0XHRcdFx0dmFyIHByZXZpb3VzbHlNYXBwZWRWYWx1ZSA9IG9wdGlvbnMudmlzaXRlZE9iamVjdHMuZ2V0KHByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdID0gKGV4cG9ydHMuZ2V0VHlwZShwcmV2aW91c2x5TWFwcGVkVmFsdWUpICE9PSBcInVuZGVmaW5lZFwiKSA/IHByZXZpb3VzbHlNYXBwZWRWYWx1ZSA6IGV4cG9ydHMudmlzaXRNb2RlbChwcm9wZXJ0eVZhbHVlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IGNhbGxiYWNrKHByb3BlcnR5VmFsdWUsIG9wdGlvbnMucGFyZW50TmFtZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNpbXBsZU9iamVjdExvb2t1cCgpIHtcblx0XHR2YXIga2V5cyA9IFtdO1xuXHRcdHZhciB2YWx1ZXMgPSBbXTtcblx0XHR0aGlzLnNhdmUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0dmFyIGV4aXN0aW5nSW5kZXggPSBrby51dGlscy5hcnJheUluZGV4T2Yoa2V5cywga2V5KTtcblx0XHRcdGlmIChleGlzdGluZ0luZGV4ID49IDApIHZhbHVlc1tleGlzdGluZ0luZGV4XSA9IHZhbHVlO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdFx0XHR2YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR0aGlzLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHZhciBleGlzdGluZ0luZGV4ID0ga28udXRpbHMuYXJyYXlJbmRleE9mKGtleXMsIGtleSk7XG5cdFx0XHR2YXIgdmFsdWUgPSAoZXhpc3RpbmdJbmRleCA+PSAwKSA/IHZhbHVlc1tleGlzdGluZ0luZGV4XSA6IHVuZGVmaW5lZDtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9O1xuXHR9O1xuXHRcblx0ZnVuY3Rpb24gb2JqZWN0TG9va3VwKCkge1xuXHRcdHZhciBidWNrZXRzID0ge307XG5cdFx0XG5cdFx0dmFyIGZpbmRCdWNrZXQgPSBmdW5jdGlvbihrZXkpIHtcblx0XHRcdHZhciBidWNrZXRLZXk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRidWNrZXRLZXkgPSBrZXk7Ly9KU09OLnN0cmluZ2lmeShrZXkpO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0YnVja2V0S2V5ID0gXCIkJCRcIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGJ1Y2tldCA9IGJ1Y2tldHNbYnVja2V0S2V5XTtcblx0XHRcdGlmIChidWNrZXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRidWNrZXQgPSBuZXcgc2ltcGxlT2JqZWN0TG9va3VwKCk7XG5cdFx0XHRcdGJ1Y2tldHNbYnVja2V0S2V5XSA9IGJ1Y2tldDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBidWNrZXQ7XG5cdFx0fTtcblx0XHRcblx0XHR0aGlzLnNhdmUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0ZmluZEJ1Y2tldChrZXkpLnNhdmUoa2V5LCB2YWx1ZSk7XG5cdFx0fTtcblx0XHR0aGlzLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBmaW5kQnVja2V0KGtleSkuZ2V0KGtleSk7XG5cdFx0fTtcblx0fTtcbn0pKTtcbn0pKCkiLCIvLyBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjIuMS4wXG4vLyAoYykgU3RldmVuIFNhbmRlcnNvbiAtIGh0dHA6Ly9rbm9ja291dGpzLmNvbS9cbi8vIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG5cbihmdW5jdGlvbih3aW5kb3csZG9jdW1lbnQsbmF2aWdhdG9yLHVuZGVmaW5lZCl7XG5mdW5jdGlvbiBtKHcpe3Rocm93IHc7fXZhciBuPXZvaWQgMCxwPSEwLHM9bnVsbCx0PSExO2Z1bmN0aW9uIEEodyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHd9fTtmdW5jdGlvbiBFKHcpe2Z1bmN0aW9uIEIoYixjLGQpe2QmJmMhPT1hLmsucihiKSYmYS5rLlMoYixjKTtjIT09YS5rLnIoYikmJmEuYS52YShiLFwiY2hhbmdlXCIpfXZhciBhPVwidW5kZWZpbmVkXCIhPT10eXBlb2Ygdz93Ont9O2EuYj1mdW5jdGlvbihiLGMpe2Zvcih2YXIgZD1iLnNwbGl0KFwiLlwiKSxmPWEsZz0wO2c8ZC5sZW5ndGgtMTtnKyspZj1mW2RbZ11dO2ZbZFtkLmxlbmd0aC0xXV09Y307YS5CPWZ1bmN0aW9uKGEsYyxkKXthW2NdPWR9O2EudmVyc2lvbj1cIjIuMS4wXCI7YS5iKFwidmVyc2lvblwiLGEudmVyc2lvbik7YS5hPW5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjKXtpZihcImlucHV0XCIhPT1hLmEubyhiKXx8IWIudHlwZXx8XCJjbGlja1wiIT1jLnRvTG93ZXJDYXNlKCkpcmV0dXJuIHQ7dmFyIGU9Yi50eXBlO3JldHVyblwiY2hlY2tib3hcIj09ZXx8XCJyYWRpb1wiPT1lfXZhciBjPS9eKFxcc3xcXHUwMEEwKSt8KFxcc3xcXHUwMEEwKSskL2csZD17fSxmPXt9O2RbL0ZpcmVmb3hcXC8yL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KT9cblwiS2V5Ym9hcmRFdmVudFwiOlwiVUlFdmVudHNcIl09W1wia2V5dXBcIixcImtleWRvd25cIixcImtleXByZXNzXCJdO2QuTW91c2VFdmVudHM9XCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiLnNwbGl0KFwiIFwiKTtmb3IodmFyIGcgaW4gZCl7dmFyIGU9ZFtnXTtpZihlLmxlbmd0aClmb3IodmFyIGg9MCxqPWUubGVuZ3RoO2g8ajtoKyspZltlW2hdXT1nfXZhciBrPXtwcm9wZXJ0eWNoYW5nZTpwfSxpPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPTMsYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGM9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlcIik7Yi5pbm5lckhUTUw9XCI8XFwhLS1baWYgZ3QgSUUgXCIrICsrYStcIl0+PGk+PC9pPjwhW2VuZGlmXS0tXFw+XCIsY1swXTspO3JldHVybiA0PGE/YTpufSgpO3JldHVybntDYTpbXCJhdXRoZW50aWNpdHlfdG9rZW5cIiwvXl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuKF8uKik/JC9dLFxudjpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGU9YS5sZW5ndGg7YzxlO2MrKyliKGFbY10pfSxqOmZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmluZGV4T2YpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiKTtmb3IodmFyIGM9MCxlPWEubGVuZ3RoO2M8ZTtjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LGFiOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGU9MCxmPWEubGVuZ3RoO2U8ZjtlKyspaWYoYi5jYWxsKGMsYVtlXSkpcmV0dXJuIGFbZV07cmV0dXJuIHN9LGJhOmZ1bmN0aW9uKGIsYyl7dmFyIGU9YS5hLmooYixjKTswPD1lJiZiLnNwbGljZShlLDEpfSx6YTpmdW5jdGlvbihiKXtmb3IodmFyIGI9Ynx8W10sYz1bXSxlPTAsZj1iLmxlbmd0aDtlPGY7ZSsrKTA+YS5hLmooYyxiW2VdKSYmYy5wdXNoKGJbZV0pO3JldHVybiBjfSxUOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBhPWF8fFtdLGM9W10sXG5lPTAsZj1hLmxlbmd0aDtlPGY7ZSsrKWMucHVzaChiKGFbZV0pKTtyZXR1cm4gY30sYWE6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGE9YXx8W10sYz1bXSxlPTAsZj1hLmxlbmd0aDtlPGY7ZSsrKWIoYVtlXSkmJmMucHVzaChhW2VdKTtyZXR1cm4gY30sTjpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxiKTtlbHNlIGZvcih2YXIgYz0wLGU9Yi5sZW5ndGg7YzxlO2MrKylhLnB1c2goYltjXSk7cmV0dXJuIGF9LGV4dGVuZDpmdW5jdGlvbihhLGIpe2lmKGIpZm9yKHZhciBjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmKGFbY109YltjXSk7cmV0dXJuIGF9LGdhOmZ1bmN0aW9uKGIpe2Zvcig7Yi5maXJzdENoaWxkOylhLnJlbW92ZU5vZGUoYi5maXJzdENoaWxkKX0sQWI6ZnVuY3Rpb24oYil7Zm9yKHZhciBiPWEuYS5MKGIpLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPTAsZj1iLmxlbmd0aDtlPGY7ZSsrKWEuRihiW2VdKSxcbmMuYXBwZW5kQ2hpbGQoYltlXSk7cmV0dXJuIGN9LFg6ZnVuY3Rpb24oYixjKXthLmEuZ2EoYik7aWYoYylmb3IodmFyIGU9MCxmPWMubGVuZ3RoO2U8ZjtlKyspYi5hcHBlbmRDaGlsZChjW2VdKX0sTmE6ZnVuY3Rpb24oYixjKXt2YXIgZT1iLm5vZGVUeXBlP1tiXTpiO2lmKDA8ZS5sZW5ndGgpe2Zvcih2YXIgZj1lWzBdLGQ9Zi5wYXJlbnROb2RlLGc9MCxoPWMubGVuZ3RoO2c8aDtnKyspZC5pbnNlcnRCZWZvcmUoY1tnXSxmKTtnPTA7Zm9yKGg9ZS5sZW5ndGg7ZzxoO2crKylhLnJlbW92ZU5vZGUoZVtnXSl9fSxQYTpmdW5jdGlvbihhLGIpezA8PW5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNlwiKT9hLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsYik6YS5zZWxlY3RlZD1ifSx3OmZ1bmN0aW9uKGEpe3JldHVybihhfHxcIlwiKS5yZXBsYWNlKGMsXCJcIil9LEliOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBlPVtdLGY9KGJ8fFwiXCIpLnNwbGl0KGMpLGc9MCxkPWYubGVuZ3RoO2c8XG5kO2crKyl7dmFyIGg9YS5hLncoZltnXSk7XCJcIiE9PWgmJmUucHVzaChoKX1yZXR1cm4gZX0sSGI6ZnVuY3Rpb24oYSxiKXthPWF8fFwiXCI7cmV0dXJuIGIubGVuZ3RoPmEubGVuZ3RoP3Q6YS5zdWJzdHJpbmcoMCxiLmxlbmd0aCk9PT1ifSxlYjpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1cInJldHVybiAoXCIrYStcIilcIixlPTA7ZTxiO2UrKyljPVwid2l0aChzY1tcIitlK1wiXSkgeyBcIitjK1wiIH0gXCI7cmV0dXJuIG5ldyBGdW5jdGlvbihcInNjXCIsYyl9LGtiOmZ1bmN0aW9uKGEsYil7aWYoYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbilyZXR1cm4gMTY9PShiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpJjE2KTtmb3IoO2EhPXM7KXtpZihhPT1iKXJldHVybiBwO2E9YS5wYXJlbnROb2RlfXJldHVybiB0fSxmYTpmdW5jdGlvbihiKXtyZXR1cm4gYS5hLmtiKGIsYi5vd25lckRvY3VtZW50KX0sbzpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYS50YWdOYW1lJiZhLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0sXG5uOmZ1bmN0aW9uKGEsYyxlKXt2YXIgZj1pJiZrW2NdO2lmKCFmJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgalF1ZXJ5KXtpZihiKGEsYykpdmFyIGc9ZSxlPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jaGVja2VkO2ImJih0aGlzLmNoZWNrZWQ9Yi5mYiE9PXApO2cuY2FsbCh0aGlzLGEpO3RoaXMuY2hlY2tlZD1jfTtqUXVlcnkoYSkuYmluZChjLGUpfWVsc2UhZiYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihjLGUsdCk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuYXR0YWNoRXZlbnQ/YS5hdHRhY2hFdmVudChcIm9uXCIrYyxmdW5jdGlvbihiKXtlLmNhbGwoYSxiKX0pOm0oRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBhZGRFdmVudExpc3RlbmVyIG9yIGF0dGFjaEV2ZW50XCIpKX0sdmE6ZnVuY3Rpb24oYSxjKXsoIWF8fCFhLm5vZGVUeXBlKSYmbShFcnJvcihcImVsZW1lbnQgbXVzdCBiZSBhIERPTSBub2RlIHdoZW4gY2FsbGluZyB0cmlnZ2VyRXZlbnRcIikpO1xuaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGpRdWVyeSl7dmFyIGU9W107YihhLGMpJiZlLnB1c2goe2ZiOmEuY2hlY2tlZH0pO2pRdWVyeShhKS50cmlnZ2VyKGMsZSl9ZWxzZVwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LmNyZWF0ZUV2ZW50P1wiZnVuY3Rpb25cIj09dHlwZW9mIGEuZGlzcGF0Y2hFdmVudD8oZT1kb2N1bWVudC5jcmVhdGVFdmVudChmW2NdfHxcIkhUTUxFdmVudHNcIiksZS5pbml0RXZlbnQoYyxwLHAsd2luZG93LDAsMCwwLDAsMCx0LHQsdCx0LDAsYSksYS5kaXNwYXRjaEV2ZW50KGUpKTptKEVycm9yKFwiVGhlIHN1cHBsaWVkIGVsZW1lbnQgZG9lc24ndCBzdXBwb3J0IGRpc3BhdGNoRXZlbnRcIikpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmZpcmVFdmVudD8oYihhLGMpJiYoYS5jaGVja2VkPWEuY2hlY2tlZCE9PXApLGEuZmlyZUV2ZW50KFwib25cIitjKSk6bShFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRyaWdnZXJpbmcgZXZlbnRzXCIpKX0sZDpmdW5jdGlvbihiKXtyZXR1cm4gYS5sYShiKT9cbmIoKTpifSxVYTpmdW5jdGlvbihiLGMsZSl7dmFyIGY9KGIuY2xhc3NOYW1lfHxcIlwiKS5zcGxpdCgvXFxzKy8pLGc9MDw9YS5hLmooZixjKTtpZihlJiYhZyliLmNsYXNzTmFtZSs9KGZbMF0/XCIgXCI6XCJcIikrYztlbHNlIGlmKGcmJiFlKXtlPVwiXCI7Zm9yKGc9MDtnPGYubGVuZ3RoO2crKylmW2ddIT1jJiYoZSs9ZltnXStcIiBcIik7Yi5jbGFzc05hbWU9YS5hLncoZSl9fSxRYTpmdW5jdGlvbihiLGMpe3ZhciBlPWEuYS5kKGMpO2lmKGU9PT1zfHxlPT09billPVwiXCI7XCJpbm5lclRleHRcImluIGI/Yi5pbm5lclRleHQ9ZTpiLnRleHRDb250ZW50PWU7OTw9aSYmKGIuc3R5bGUuZGlzcGxheT1iLnN0eWxlLmRpc3BsYXkpfSxsYjpmdW5jdGlvbihhKXtpZig5PD1pKXt2YXIgYj1hLnN0eWxlLndpZHRoO2Euc3R5bGUud2lkdGg9MDthLnN0eWxlLndpZHRoPWJ9fSxFYjpmdW5jdGlvbihiLGUpe2Zvcih2YXIgYj1hLmEuZChiKSxlPWEuYS5kKGUpLGM9W10sZj1iO2Y8PWU7ZisrKWMucHVzaChmKTtyZXR1cm4gY30sXG5MOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxlPTAsYz1hLmxlbmd0aDtlPGM7ZSsrKWIucHVzaChhW2VdKTtyZXR1cm4gYn0sdGI6Nj09PWksdWI6Nz09PWksamE6aSxEYTpmdW5jdGlvbihiLGUpe2Zvcih2YXIgYz1hLmEuTChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIikpLmNvbmNhdChhLmEuTChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIikpKSxmPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKGEpe3JldHVybiBhLm5hbWU9PT1lfTpmdW5jdGlvbihhKXtyZXR1cm4gZS50ZXN0KGEubmFtZSl9LGc9W10sZD1jLmxlbmd0aC0xOzA8PWQ7ZC0tKWYoY1tkXSkmJmcucHVzaChjW2RdKTtyZXR1cm4gZ30sQmI6ZnVuY3Rpb24oYil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihiPWEuYS53KGIpKT93aW5kb3cuSlNPTiYmd2luZG93LkpTT04ucGFyc2U/d2luZG93LkpTT04ucGFyc2UoYik6KG5ldyBGdW5jdGlvbihcInJldHVybiBcIitiKSkoKTpzfSxzYTpmdW5jdGlvbihiLFxuZSxjKXsoXCJ1bmRlZmluZWRcIj09dHlwZW9mIEpTT058fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBKU09OLnN0cmluZ2lmeSkmJm0oRXJyb3IoXCJDYW5ub3QgZmluZCBKU09OLnN0cmluZ2lmeSgpLiBTb21lIGJyb3dzZXJzIChlLmcuLCBJRSA8IDgpIGRvbid0IHN1cHBvcnQgaXQgbmF0aXZlbHksIGJ1dCB5b3UgY2FuIG92ZXJjb21lIHRoaXMgYnkgYWRkaW5nIGEgc2NyaXB0IHJlZmVyZW5jZSB0byBqc29uMi5qcywgZG93bmxvYWRhYmxlIGZyb20gaHR0cDovL3d3dy5qc29uLm9yZy9qc29uMi5qc1wiKSk7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGEuYS5kKGIpLGUsYyl9LENiOmZ1bmN0aW9uKGIsZSxjKXt2YXIgYz1jfHx7fSxmPWMucGFyYW1zfHx7fSxnPWMuaW5jbHVkZUZpZWxkc3x8dGhpcy5DYSxkPWI7aWYoXCJvYmplY3RcIj09dHlwZW9mIGImJlwiZm9ybVwiPT09YS5hLm8oYikpZm9yKHZhciBkPWIuYWN0aW9uLGg9Zy5sZW5ndGgtMTswPD1oO2gtLSlmb3IodmFyIGs9YS5hLkRhKGIsZ1toXSksXG5qPWsubGVuZ3RoLTE7MDw9ajtqLS0pZltrW2pdLm5hbWVdPWtbal0udmFsdWU7dmFyIGU9YS5hLmQoZSksaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7aS5hY3Rpb249ZDtpLm1ldGhvZD1cInBvc3RcIjtmb3IodmFyIHogaW4gZSliPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiLm5hbWU9eixiLnZhbHVlPWEuYS5zYShhLmEuZChlW3pdKSksaS5hcHBlbmRDaGlsZChiKTtmb3IoeiBpbiBmKWI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGIubmFtZT16LGIudmFsdWU9Zlt6XSxpLmFwcGVuZENoaWxkKGIpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaSk7Yy5zdWJtaXR0ZXI/Yy5zdWJtaXR0ZXIoaSk6aS5zdWJtaXQoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpfSwwKX19fTthLmIoXCJ1dGlsc1wiLGEuYSk7YS5iKFwidXRpbHMuYXJyYXlGb3JFYWNoXCIsYS5hLnYpO1xuYS5iKFwidXRpbHMuYXJyYXlGaXJzdFwiLGEuYS5hYik7YS5iKFwidXRpbHMuYXJyYXlGaWx0ZXJcIixhLmEuYWEpO2EuYihcInV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXNcIixhLmEuemEpO2EuYihcInV0aWxzLmFycmF5SW5kZXhPZlwiLGEuYS5qKTthLmIoXCJ1dGlscy5hcnJheU1hcFwiLGEuYS5UKTthLmIoXCJ1dGlscy5hcnJheVB1c2hBbGxcIixhLmEuTik7YS5iKFwidXRpbHMuYXJyYXlSZW1vdmVJdGVtXCIsYS5hLmJhKTthLmIoXCJ1dGlscy5leHRlbmRcIixhLmEuZXh0ZW5kKTthLmIoXCJ1dGlscy5maWVsZHNJbmNsdWRlZFdpdGhKc29uUG9zdFwiLGEuYS5DYSk7YS5iKFwidXRpbHMuZ2V0Rm9ybUZpZWxkc1wiLGEuYS5EYSk7YS5iKFwidXRpbHMucG9zdEpzb25cIixhLmEuQ2IpO2EuYihcInV0aWxzLnBhcnNlSnNvblwiLGEuYS5CYik7YS5iKFwidXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXJcIixhLmEubik7YS5iKFwidXRpbHMuc3RyaW5naWZ5SnNvblwiLGEuYS5zYSk7YS5iKFwidXRpbHMucmFuZ2VcIixhLmEuRWIpO1xuYS5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYS5hLlVhKTthLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixhLmEudmEpO2EuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixhLmEuZCk7RnVuY3Rpb24ucHJvdG90eXBlLmJpbmR8fChGdW5jdGlvbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxhPWQuc2hpZnQoKTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYy5hcHBseShhLGQuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKX19KTthLmEuZj1uZXcgZnVuY3Rpb24oKXt2YXIgYj0wLGM9XCJfX2tvX19cIisobmV3IERhdGUpLmdldFRpbWUoKSxkPXt9O3JldHVybntnZXQ6ZnVuY3Rpb24oYixjKXt2YXIgZT1hLmEuZi5nZXRBbGwoYix0KTtyZXR1cm4gZT09PW4/bjplW2NdfSxzZXQ6ZnVuY3Rpb24oYixjLGUpe2U9PT1uJiZhLmEuZi5nZXRBbGwoYixcbnQpPT09bnx8KGEuYS5mLmdldEFsbChiLHApW2NdPWUpfSxnZXRBbGw6ZnVuY3Rpb24oYSxnKXt2YXIgZT1hW2NdO2lmKCEoZSYmXCJudWxsXCIhPT1lKSl7aWYoIWcpcmV0dXJuO2U9YVtjXT1cImtvXCIrYisrO2RbZV09e319cmV0dXJuIGRbZV19LGNsZWFyOmZ1bmN0aW9uKGEpe3ZhciBiPWFbY107YiYmKGRlbGV0ZSBkW2JdLGFbY109cyl9fX07YS5iKFwidXRpbHMuZG9tRGF0YVwiLGEuYS5mKTthLmIoXCJ1dGlscy5kb21EYXRhLmNsZWFyXCIsYS5hLmYuY2xlYXIpO2EuYS5HPW5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjKXt2YXIgZj1hLmEuZi5nZXQoYixkKTtmPT09biYmYyYmKGY9W10sYS5hLmYuc2V0KGIsZCxmKSk7cmV0dXJuIGZ9ZnVuY3Rpb24gYyhlKXt2YXIgZj1iKGUsdCk7aWYoZilmb3IodmFyIGY9Zi5zbGljZSgwKSxkPTA7ZDxmLmxlbmd0aDtkKyspZltkXShlKTthLmEuZi5jbGVhcihlKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBqUXVlcnkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGpRdWVyeS5jbGVhbkRhdGEmJlxualF1ZXJ5LmNsZWFuRGF0YShbZV0pO2lmKGdbZS5ub2RlVHlwZV0pZm9yKGY9ZS5maXJzdENoaWxkO2U9ZjspZj1lLm5leHRTaWJsaW5nLDg9PT1lLm5vZGVUeXBlJiZjKGUpfXZhciBkPVwiX19rb19kb21Ob2RlRGlzcG9zYWxfX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGY9ezE6cCw4OnAsOTpwfSxnPXsxOnAsOTpwfTtyZXR1cm57d2E6ZnVuY3Rpb24oYSxjKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBjJiZtKEVycm9yKFwiQ2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpKTtiKGEscCkucHVzaChjKX0sTWE6ZnVuY3Rpb24oYyxmKXt2YXIgZz1iKGMsdCk7ZyYmKGEuYS5iYShnLGYpLDA9PWcubGVuZ3RoJiZhLmEuZi5zZXQoYyxkLG4pKX0sRjpmdW5jdGlvbihiKXtpZihmW2Iubm9kZVR5cGVdJiYoYyhiKSxnW2Iubm9kZVR5cGVdKSl7dmFyIGQ9W107YS5hLk4oZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSk7Zm9yKHZhciBiPTAsaj1kLmxlbmd0aDtiPGo7YisrKWMoZFtiXSl9fSxcbnJlbW92ZU5vZGU6ZnVuY3Rpb24oYil7YS5GKGIpO2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpfX19O2EuRj1hLmEuRy5GO2EucmVtb3ZlTm9kZT1hLmEuRy5yZW1vdmVOb2RlO2EuYihcImNsZWFuTm9kZVwiLGEuRik7YS5iKFwicmVtb3ZlTm9kZVwiLGEucmVtb3ZlTm9kZSk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsXCIsYS5hLkcpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2tcIixhLmEuRy53YSk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFja1wiLGEuYS5HLk1hKTsoZnVuY3Rpb24oKXthLmEucGE9ZnVuY3Rpb24oYil7dmFyIGM7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGpRdWVyeSl7aWYoKGM9alF1ZXJ5LmNsZWFuKFtiXSkpJiZjWzBdKXtmb3IoYj1jWzBdO2IucGFyZW50Tm9kZSYmMTEhPT1iLnBhcmVudE5vZGUubm9kZVR5cGU7KWI9Yi5wYXJlbnROb2RlO2IucGFyZW50Tm9kZSYmXG5iLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYil9fWVsc2V7dmFyIGQ9YS5hLncoYikudG9Mb3dlckNhc2UoKTtjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZD1kLm1hdGNoKC9ePCh0aGVhZHx0Ym9keXx0Zm9vdCkvKSYmWzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXXx8IWQuaW5kZXhPZihcIjx0clwiKSYmWzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXXx8KCFkLmluZGV4T2YoXCI8dGRcIil8fCFkLmluZGV4T2YoXCI8dGhcIikpJiZbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdfHxbMCxcIlwiLFwiXCJdO2I9XCJpZ25vcmVkPGRpdj5cIitkWzFdK2IrZFsyXStcIjwvZGl2PlwiO2ZvcihcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cuaW5uZXJTaGl2P2MuYXBwZW5kQ2hpbGQod2luZG93LmlubmVyU2hpdihiKSk6Yy5pbm5lckhUTUw9YjtkWzBdLS07KWM9Yy5sYXN0Q2hpbGQ7Yz1hLmEuTChjLmxhc3RDaGlsZC5jaGlsZE5vZGVzKX1yZXR1cm4gY307XG5hLmEuWT1mdW5jdGlvbihiLGMpe2EuYS5nYShiKTtpZihjIT09cyYmYyE9PW4paWYoXCJzdHJpbmdcIiE9dHlwZW9mIGMmJihjPWMudG9TdHJpbmcoKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGpRdWVyeSlqUXVlcnkoYikuaHRtbChjKTtlbHNlIGZvcih2YXIgZD1hLmEucGEoYyksZj0wO2Y8ZC5sZW5ndGg7ZisrKWIuYXBwZW5kQ2hpbGQoZFtmXSl9fSkoKTthLmIoXCJ1dGlscy5wYXJzZUh0bWxGcmFnbWVudFwiLGEuYS5wYSk7YS5iKFwidXRpbHMuc2V0SHRtbFwiLGEuYS5ZKTthLnM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7cmV0dXJuKDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKX1mdW5jdGlvbiBjKGIsZyl7aWYoYilpZig4PT1iLm5vZGVUeXBlKXt2YXIgZT1hLnMuSmEoYi5ub2RlVmFsdWUpO2UhPXMmJmcucHVzaCh7amI6Yix5YjplfSl9ZWxzZSBpZigxPT1iLm5vZGVUeXBlKWZvcih2YXIgZT0wLGQ9Yi5jaGlsZE5vZGVzLGo9ZC5sZW5ndGg7ZTxcbmo7ZSsrKWMoZFtlXSxnKX12YXIgZD17fTtyZXR1cm57bmE6ZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiIT10eXBlb2YgYSYmbShFcnJvcihcIllvdSBjYW4gb25seSBwYXNzIGEgZnVuY3Rpb24gdG8ga28ubWVtb2l6YXRpb24ubWVtb2l6ZSgpXCIpKTt2YXIgYz1iKCkrYigpO2RbY109YTtyZXR1cm5cIjxcXCEtLVtrb19tZW1vOlwiK2MrXCJdLS1cXD5cIn0sVmE6ZnVuY3Rpb24oYSxiKXt2YXIgYz1kW2FdO2M9PT1uJiZtKEVycm9yKFwiQ291bGRuJ3QgZmluZCBhbnkgbWVtbyB3aXRoIElEIFwiK2ErXCIuIFBlcmhhcHMgaXQncyBhbHJlYWR5IGJlZW4gdW5tZW1vaXplZC5cIikpO3RyeXtyZXR1cm4gYy5hcHBseShzLGJ8fFtdKSxwfWZpbmFsbHl7ZGVsZXRlIGRbYV19fSxXYTpmdW5jdGlvbihiLGQpe3ZhciBlPVtdO2MoYixlKTtmb3IodmFyIGg9MCxqPWUubGVuZ3RoO2g8ajtoKyspe3ZhciBrPWVbaF0uamIsaT1ba107ZCYmYS5hLk4oaSxkKTthLnMuVmEoZVtoXS55YixpKTtrLm5vZGVWYWx1ZT1cIlwiO2sucGFyZW50Tm9kZSYmXG5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoayl9fSxKYTpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLm1hdGNoKC9eXFxba29fbWVtb1xcOiguKj8pXFxdJC8pKT9hWzFdOnN9fX0oKTthLmIoXCJtZW1vaXphdGlvblwiLGEucyk7YS5iKFwibWVtb2l6YXRpb24ubWVtb2l6ZVwiLGEucy5uYSk7YS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplXCIsYS5zLlZhKTthLmIoXCJtZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0XCIsYS5zLkphKTthLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHNcIixhLnMuV2EpO2EuQmE9e3Rocm90dGxlOmZ1bmN0aW9uKGIsYyl7Yi50aHJvdHRsZUV2YWx1YXRpb249Yzt2YXIgZD1zO3JldHVybiBhLmgoe3JlYWQ6Yix3cml0ZTpmdW5jdGlvbihhKXtjbGVhclRpbWVvdXQoZCk7ZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihhKX0sYyl9fSl9LG5vdGlmeTpmdW5jdGlvbihiLGMpe2IuZXF1YWxpdHlDb21wYXJlcj1cImFsd2F5c1wiPT1jP0EodCk6YS5tLmZuLmVxdWFsaXR5Q29tcGFyZXI7XG5yZXR1cm4gYn19O2EuYihcImV4dGVuZGVyc1wiLGEuQmEpO2EuU2E9ZnVuY3Rpb24oYixjLGQpe3RoaXMudGFyZ2V0PWI7dGhpcy5jYT1jO3RoaXMuaWI9ZDthLkIodGhpcyxcImRpc3Bvc2VcIix0aGlzLkEpfTthLlNhLnByb3RvdHlwZS5BPWZ1bmN0aW9uKCl7dGhpcy5zYj1wO3RoaXMuaWIoKX07YS5SPWZ1bmN0aW9uKCl7dGhpcy51PXt9O2EuYS5leHRlbmQodGhpcyxhLlIuZm4pO2EuQih0aGlzLFwic3Vic2NyaWJlXCIsdGhpcy50YSk7YS5CKHRoaXMsXCJleHRlbmRcIix0aGlzLmV4dGVuZCk7YS5CKHRoaXMsXCJnZXRTdWJzY3JpcHRpb25zQ291bnRcIix0aGlzLm9iKX07YS5SLmZuPXt0YTpmdW5jdGlvbihiLGMsZCl7dmFyIGQ9ZHx8XCJjaGFuZ2VcIixiPWM/Yi5iaW5kKGMpOmIsZj1uZXcgYS5TYSh0aGlzLGIsZnVuY3Rpb24oKXthLmEuYmEodGhpcy51W2RdLGYpfS5iaW5kKHRoaXMpKTt0aGlzLnVbZF18fCh0aGlzLnVbZF09W10pO3RoaXMudVtkXS5wdXNoKGYpO3JldHVybiBmfSxub3RpZnlTdWJzY3JpYmVyczpmdW5jdGlvbihiLFxuYyl7Yz1jfHxcImNoYW5nZVwiO3RoaXMudVtjXSYmYS5hLnYodGhpcy51W2NdLnNsaWNlKDApLGZ1bmN0aW9uKGEpe2EmJmEuc2IhPT1wJiZhLmNhKGIpfSl9LG9iOmZ1bmN0aW9uKCl7dmFyIGE9MCxjO2ZvcihjIGluIHRoaXMudSl0aGlzLnUuaGFzT3duUHJvcGVydHkoYykmJihhKz10aGlzLnVbY10ubGVuZ3RoKTtyZXR1cm4gYX0sZXh0ZW5kOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7aWYoYilmb3IodmFyIGQgaW4gYil7dmFyIGY9YS5CYVtkXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiYoYz1mKGMsYltkXSkpfXJldHVybiBjfX07YS5HYT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5vdGlmeVN1YnNjcmliZXJzfTthLmIoXCJzdWJzY3JpYmFibGVcIixhLlIpO2EuYihcImlzU3Vic2NyaWJhYmxlXCIsYS5HYSk7YS5VPWZ1bmN0aW9uKCl7dmFyIGI9W107cmV0dXJue2JiOmZ1bmN0aW9uKGEpe2IucHVzaCh7Y2E6YSxBYTpbXX0pfSxcbmVuZDpmdW5jdGlvbigpe2IucG9wKCl9LExhOmZ1bmN0aW9uKGMpe2EuR2EoYyl8fG0oRXJyb3IoXCJPbmx5IHN1YnNjcmliYWJsZSB0aGluZ3MgY2FuIGFjdCBhcyBkZXBlbmRlbmNpZXNcIikpO2lmKDA8Yi5sZW5ndGgpe3ZhciBkPWJbYi5sZW5ndGgtMV07MDw9YS5hLmooZC5BYSxjKXx8KGQuQWEucHVzaChjKSxkLmNhKGMpKX19fX0oKTt2YXIgRz17dW5kZWZpbmVkOnAsXCJib29sZWFuXCI6cCxudW1iZXI6cCxzdHJpbmc6cH07YS5tPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoKXtpZigwPGFyZ3VtZW50cy5sZW5ndGgpe2lmKCFjLmVxdWFsaXR5Q29tcGFyZXJ8fCFjLmVxdWFsaXR5Q29tcGFyZXIoZCxhcmd1bWVudHNbMF0pKWMuSSgpLGQ9YXJndW1lbnRzWzBdLGMuSCgpO3JldHVybiB0aGlzfWEuVS5MYShjKTtyZXR1cm4gZH12YXIgZD1iO2EuUi5jYWxsKGMpO2MuSD1mdW5jdGlvbigpe2Mubm90aWZ5U3Vic2NyaWJlcnMoZCl9O2MuST1mdW5jdGlvbigpe2Mubm90aWZ5U3Vic2NyaWJlcnMoZCxcblwiYmVmb3JlQ2hhbmdlXCIpfTthLmEuZXh0ZW5kKGMsYS5tLmZuKTthLkIoYyxcInZhbHVlSGFzTXV0YXRlZFwiLGMuSCk7YS5CKGMsXCJ2YWx1ZVdpbGxNdXRhdGVcIixjLkkpO3JldHVybiBjfTthLm0uZm49e2VxdWFsaXR5Q29tcGFyZXI6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT09PXN8fHR5cGVvZiBhIGluIEc/YT09PWM6dH19O3ZhciB4PWEubS5EYj1cIl9fa29fcHJvdG9fX1wiO2EubS5mblt4XT1hLm07YS5pYT1mdW5jdGlvbihiLGMpe3JldHVybiBiPT09c3x8Yj09PW58fGJbeF09PT1uP3Q6Ylt4XT09PWM/cDphLmlhKGJbeF0sYyl9O2EubGE9ZnVuY3Rpb24oYil7cmV0dXJuIGEuaWEoYixhLm0pfTthLkhhPWZ1bmN0aW9uKGIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmJbeF09PT1hLm18fFwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmJbeF09PT1hLmgmJmIucGI/cDp0fTthLmIoXCJvYnNlcnZhYmxlXCIsYS5tKTthLmIoXCJpc09ic2VydmFibGVcIixhLmxhKTthLmIoXCJpc1dyaXRlYWJsZU9ic2VydmFibGVcIixcbmEuSGEpO2EuUT1mdW5jdGlvbihiKXswPT1hcmd1bWVudHMubGVuZ3RoJiYoYj1bXSk7YiE9PXMmJihiIT09biYmIShcImxlbmd0aFwiaW4gYikpJiZtKEVycm9yKFwiVGhlIGFyZ3VtZW50IHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBhbiBvYnNlcnZhYmxlIGFycmF5IG11c3QgYmUgYW4gYXJyYXksIG9yIG51bGwsIG9yIHVuZGVmaW5lZC5cIikpO3ZhciBjPWEubShiKTthLmEuZXh0ZW5kKGMsYS5RLmZuKTtyZXR1cm4gY307YS5RLmZuPXtyZW1vdmU6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjPXRoaXMoKSxkPVtdLGY9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9hOmZ1bmN0aW9uKGMpe3JldHVybiBjPT09YX0sZz0wO2c8Yy5sZW5ndGg7ZysrKXt2YXIgZT1jW2ddO2YoZSkmJigwPT09ZC5sZW5ndGgmJnRoaXMuSSgpLGQucHVzaChlKSxjLnNwbGljZShnLDEpLGctLSl9ZC5sZW5ndGgmJnRoaXMuSCgpO3JldHVybiBkfSxyZW1vdmVBbGw6ZnVuY3Rpb24oYil7aWYoYj09PW4pe3ZhciBjPXRoaXMoKSxcbmQ9Yy5zbGljZSgwKTt0aGlzLkkoKTtjLnNwbGljZSgwLGMubGVuZ3RoKTt0aGlzLkgoKTtyZXR1cm4gZH1yZXR1cm4hYj9bXTp0aGlzLnJlbW92ZShmdW5jdGlvbihjKXtyZXR1cm4gMDw9YS5hLmooYixjKX0pfSxkZXN0cm95OmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMoKSxkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YTpmdW5jdGlvbihjKXtyZXR1cm4gYz09PWF9O3RoaXMuSSgpO2Zvcih2YXIgZj1jLmxlbmd0aC0xOzA8PWY7Zi0tKWQoY1tmXSkmJihjW2ZdLl9kZXN0cm95PXApO3RoaXMuSCgpfSxkZXN0cm95QWxsOmZ1bmN0aW9uKGIpe3JldHVybiBiPT09bj90aGlzLmRlc3Ryb3koQShwKSk6IWI/W106dGhpcy5kZXN0cm95KGZ1bmN0aW9uKGMpe3JldHVybiAwPD1hLmEuaihiLGMpfSl9LGluZGV4T2Y6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcygpO3JldHVybiBhLmEuaihjLGIpfSxyZXBsYWNlOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcy5pbmRleE9mKGEpOzA8PWQmJih0aGlzLkkoKSxcbnRoaXMoKVtkXT1jLHRoaXMuSCgpKX19O2EuYS52KFwicG9wIHB1c2ggcmV2ZXJzZSBzaGlmdCBzb3J0IHNwbGljZSB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe2EuUS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMoKTt0aGlzLkkoKTthPWFbYl0uYXBwbHkoYSxhcmd1bWVudHMpO3RoaXMuSCgpO3JldHVybiBhfX0pO2EuYS52KFtcInNsaWNlXCJdLGZ1bmN0aW9uKGIpe2EuUS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMoKTtyZXR1cm4gYVtiXS5hcHBseShhLGFyZ3VtZW50cyl9fSk7YS5iKFwib2JzZXJ2YWJsZUFycmF5XCIsYS5RKTthLmg9ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGYoKXthLmEudih2LGZ1bmN0aW9uKGEpe2EuQSgpfSk7dj1bXX1mdW5jdGlvbiBnKCl7dmFyIGE9aC50aHJvdHRsZUV2YWx1YXRpb247YSYmMDw9YT8oY2xlYXJUaW1lb3V0KHgpLHg9c2V0VGltZW91dChlLGEpKTplKCl9ZnVuY3Rpb24gZSgpe2lmKCFsKWlmKGkmJncoKSl1KCk7ZWxzZXtsPVxucDt0cnl7dmFyIGI9YS5hLlQodixmdW5jdGlvbihhKXtyZXR1cm4gYS50YXJnZXR9KTthLlUuYmIoZnVuY3Rpb24oYyl7dmFyIGU7MDw9KGU9YS5hLmooYixjKSk/YltlXT1uOnYucHVzaChjLnRhKGcpKX0pO2Zvcih2YXIgZT1xLmNhbGwoYyksZj1iLmxlbmd0aC0xOzA8PWY7Zi0tKWJbZl0mJnYuc3BsaWNlKGYsMSlbMF0uQSgpO2k9cDtoLm5vdGlmeVN1YnNjcmliZXJzKGssXCJiZWZvcmVDaGFuZ2VcIik7az1lfWZpbmFsbHl7YS5VLmVuZCgpfWgubm90aWZ5U3Vic2NyaWJlcnMoayk7bD10fX1mdW5jdGlvbiBoKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKWouYXBwbHkoaCxhcmd1bWVudHMpO2Vsc2UgcmV0dXJuIGl8fGUoKSxhLlUuTGEoaCksa31mdW5jdGlvbiBqKCl7XCJmdW5jdGlvblwiPT09dHlwZW9mIG8/by5hcHBseShjLGFyZ3VtZW50cyk6bShFcnJvcihcIkNhbm5vdCB3cml0ZSBhIHZhbHVlIHRvIGEga28uY29tcHV0ZWQgdW5sZXNzIHlvdSBzcGVjaWZ5IGEgJ3dyaXRlJyBvcHRpb24uIElmIHlvdSB3aXNoIHRvIHJlYWQgdGhlIGN1cnJlbnQgdmFsdWUsIGRvbid0IHBhc3MgYW55IHBhcmFtZXRlcnMuXCIpKX1cbnZhciBrLGk9dCxsPXQscT1iO3EmJlwib2JqZWN0XCI9PXR5cGVvZiBxPyhkPXEscT1kLnJlYWQpOihkPWR8fHt9LHF8fChxPWQucmVhZCkpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIHEmJm0oRXJyb3IoXCJQYXNzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUga28uY29tcHV0ZWRcIikpO3ZhciBvPWQud3JpdGU7Y3x8KGM9ZC5vd25lcik7dmFyIHY9W10sdT1mLHI9XCJvYmplY3RcIj09dHlwZW9mIGQuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkP2QuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOnMsdz1kLmRpc3Bvc2VXaGVufHxBKHQpO2lmKHIpe3U9ZnVuY3Rpb24oKXthLmEuRy5NYShyLGFyZ3VtZW50cy5jYWxsZWUpO2YoKX07YS5hLkcud2Eocix1KTt2YXIgeT13LHc9ZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmZhKHIpfHx5KCl9fXZhciB4PXM7aC5uYj1mdW5jdGlvbigpe3JldHVybiB2Lmxlbmd0aH07aC5wYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZC53cml0ZTtoLkE9ZnVuY3Rpb24oKXt1KCl9O1xuYS5SLmNhbGwoaCk7YS5hLmV4dGVuZChoLGEuaC5mbik7ZC5kZWZlckV2YWx1YXRpb24hPT1wJiZlKCk7YS5CKGgsXCJkaXNwb3NlXCIsaC5BKTthLkIoaCxcImdldERlcGVuZGVuY2llc0NvdW50XCIsaC5uYik7cmV0dXJuIGh9O2EucmI9ZnVuY3Rpb24oYil7cmV0dXJuIGEuaWEoYixhLmgpfTt3PWEubS5EYjthLmhbd109YS5tO2EuaC5mbj17fTthLmguZm5bd109YS5oO2EuYihcImRlcGVuZGVudE9ic2VydmFibGVcIixhLmgpO2EuYihcImNvbXB1dGVkXCIsYS5oKTthLmIoXCJpc0NvbXB1dGVkXCIsYS5yYik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhLGcsZSl7ZT1lfHxuZXcgZDthPWcoYSk7aWYoIShcIm9iamVjdFwiPT10eXBlb2YgYSYmYSE9PXMmJmEhPT1uJiYhKGEgaW5zdGFuY2VvZiBEYXRlKSkpcmV0dXJuIGE7dmFyIGg9YSBpbnN0YW5jZW9mIEFycmF5P1tdOnt9O2Uuc2F2ZShhLGgpO2MoYSxmdW5jdGlvbihjKXt2YXIgZD1nKGFbY10pO3N3aXRjaCh0eXBlb2YgZCl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJmdW5jdGlvblwiOmhbY109XG5kO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpjYXNlIFwidW5kZWZpbmVkXCI6dmFyIGk9ZS5nZXQoZCk7aFtjXT1pIT09bj9pOmIoZCxnLGUpfX0pO3JldHVybiBofWZ1bmN0aW9uIGMoYSxiKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIoYyk7XCJmdW5jdGlvblwiPT10eXBlb2YgYS50b0pTT04mJmIoXCJ0b0pTT05cIil9ZWxzZSBmb3IoYyBpbiBhKWIoYyl9ZnVuY3Rpb24gZCgpe3ZhciBiPVtdLGM9W107dGhpcy5zYXZlPWZ1bmN0aW9uKGUsZCl7dmFyIGo9YS5hLmooYixlKTswPD1qP2Nbal09ZDooYi5wdXNoKGUpLGMucHVzaChkKSl9O3RoaXMuZ2V0PWZ1bmN0aW9uKGUpe2U9YS5hLmooYixlKTtyZXR1cm4gMDw9ZT9jW2VdOm59fWEuVGE9ZnVuY3Rpb24oYyl7MD09YXJndW1lbnRzLmxlbmd0aCYmbShFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIikpO3JldHVybiBiKGMsZnVuY3Rpb24oYil7Zm9yKHZhciBjPVxuMDthLmxhKGIpJiYxMD5jO2MrKyliPWIoKTtyZXR1cm4gYn0pfTthLnRvSlNPTj1mdW5jdGlvbihiLGMsZSl7Yj1hLlRhKGIpO3JldHVybiBhLmEuc2EoYixjLGUpfX0pKCk7YS5iKFwidG9KU1wiLGEuVGEpO2EuYihcInRvSlNPTlwiLGEudG9KU09OKTsoZnVuY3Rpb24oKXthLms9e3I6ZnVuY3Rpb24oYil7c3dpdGNoKGEuYS5vKGIpKXtjYXNlIFwib3B0aW9uXCI6cmV0dXJuIGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX189PT1wP2EuYS5mLmdldChiLGEuYy5vcHRpb25zLm9hKTpiLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO2Nhc2UgXCJzZWxlY3RcIjpyZXR1cm4gMDw9Yi5zZWxlY3RlZEluZGV4P2Euay5yKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKTpuO2RlZmF1bHQ6cmV0dXJuIGIudmFsdWV9fSxTOmZ1bmN0aW9uKGIsYyl7c3dpdGNoKGEuYS5vKGIpKXtjYXNlIFwib3B0aW9uXCI6c3dpdGNoKHR5cGVvZiBjKXtjYXNlIFwic3RyaW5nXCI6YS5hLmYuc2V0KGIsYS5jLm9wdGlvbnMub2EsXG5uKTtcIl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fXCJpbiBiJiZkZWxldGUgYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXztiLnZhbHVlPWM7YnJlYWs7ZGVmYXVsdDphLmEuZi5zZXQoYixhLmMub3B0aW9ucy5vYSxjKSxiLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fPXAsYi52YWx1ZT1cIm51bWJlclwiPT09dHlwZW9mIGM/YzpcIlwifWJyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmb3IodmFyIGQ9Yi5vcHRpb25zLmxlbmd0aC0xOzA8PWQ7ZC0tKWlmKGEuay5yKGIub3B0aW9uc1tkXSk9PWMpe2Iuc2VsZWN0ZWRJbmRleD1kO2JyZWFrfWJyZWFrO2RlZmF1bHQ6aWYoYz09PXN8fGM9PT1uKWM9XCJcIjtiLnZhbHVlPWN9fX19KSgpO2EuYihcInNlbGVjdEV4dGVuc2lvbnNcIixhLmspO2EuYihcInNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlXCIsYS5rLnIpO2EuYihcInNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZVwiLGEuay5TKTthLmc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsYil7Zm9yKHZhciBkPVxuczthIT1kOylkPWEsYT1hLnJlcGxhY2UoYyxmdW5jdGlvbihhLGMpe3JldHVybiBiW2NdfSk7cmV0dXJuIGF9dmFyIGM9L1xcQGtvX3Rva2VuXyhcXGQrKVxcQC9nLGQ9L15bXFxfJGEtel1bXFxfJGEtejAtOV0qKFxcWy4qP1xcXSkqKFxcLltcXF8kYS16XVtcXF8kYS16MC05XSooXFxbLio/XFxdKSopKiQvaSxmPVtcInRydWVcIixcImZhbHNlXCJdO3JldHVybntEOltdLFc6ZnVuY3Rpb24oYyl7dmFyIGU9YS5hLncoYyk7aWYoMz5lLmxlbmd0aClyZXR1cm5bXTtcIntcIj09PWUuY2hhckF0KDApJiYoZT1lLnN1YnN0cmluZygxLGUubGVuZ3RoLTEpKTtmb3IodmFyIGM9W10sZD1zLGYsaz0wO2s8ZS5sZW5ndGg7aysrKXt2YXIgaT1lLmNoYXJBdChrKTtpZihkPT09cylzd2l0Y2goaSl7Y2FzZSAnXCInOmNhc2UgXCInXCI6Y2FzZSBcIi9cIjpkPWssZj1pfWVsc2UgaWYoaT09ZiYmXCJcXFxcXCIhPT1lLmNoYXJBdChrLTEpKXtpPWUuc3Vic3RyaW5nKGQsaysxKTtjLnB1c2goaSk7dmFyIGw9XCJAa29fdG9rZW5fXCIrKGMubGVuZ3RoLVxuMSkrXCJAXCIsZT1lLnN1YnN0cmluZygwLGQpK2wrZS5zdWJzdHJpbmcoaysxKSxrPWstKGkubGVuZ3RoLWwubGVuZ3RoKSxkPXN9fWY9ZD1zO2Zvcih2YXIgcT0wLG89cyxrPTA7azxlLmxlbmd0aDtrKyspe2k9ZS5jaGFyQXQoayk7aWYoZD09PXMpc3dpdGNoKGkpe2Nhc2UgXCJ7XCI6ZD1rO289aTtmPVwifVwiO2JyZWFrO2Nhc2UgXCIoXCI6ZD1rO289aTtmPVwiKVwiO2JyZWFrO2Nhc2UgXCJbXCI6ZD1rLG89aSxmPVwiXVwifWk9PT1vP3ErKzppPT09ZiYmKHEtLSwwPT09cSYmKGk9ZS5zdWJzdHJpbmcoZCxrKzEpLGMucHVzaChpKSxsPVwiQGtvX3Rva2VuX1wiKyhjLmxlbmd0aC0xKStcIkBcIixlPWUuc3Vic3RyaW5nKDAsZCkrbCtlLnN1YnN0cmluZyhrKzEpLGstPWkubGVuZ3RoLWwubGVuZ3RoLGQ9cykpfWY9W107ZT1lLnNwbGl0KFwiLFwiKTtkPTA7Zm9yKGs9ZS5sZW5ndGg7ZDxrO2QrKylxPWVbZF0sbz1xLmluZGV4T2YoXCI6XCIpLDA8byYmbzxxLmxlbmd0aC0xPyhpPXEuc3Vic3RyaW5nKG8rMSksZi5wdXNoKHtrZXk6YihxLnN1YnN0cmluZygwLFxubyksYyksdmFsdWU6YihpLGMpfSkpOmYucHVzaCh7dW5rbm93bjpiKHEsYyl9KTtyZXR1cm4gZn0sa2E6ZnVuY3Rpb24oYil7Zm9yKHZhciBjPVwic3RyaW5nXCI9PT10eXBlb2YgYj9hLmcuVyhiKTpiLGg9W10sYj1bXSxqLGs9MDtqPWNba107aysrKWlmKDA8aC5sZW5ndGgmJmgucHVzaChcIixcIiksai5rZXkpe3ZhciBpO2E6e2k9ai5rZXk7dmFyIGw9YS5hLncoaSk7c3dpdGNoKGwubGVuZ3RoJiZsLmNoYXJBdCgwKSl7Y2FzZSBcIidcIjpjYXNlICdcIic6YnJlYWsgYTtkZWZhdWx0Omk9XCInXCIrbCtcIidcIn19aj1qLnZhbHVlO2gucHVzaChpKTtoLnB1c2goXCI6XCIpO2gucHVzaChqKTtsPWEuYS53KGopO2lmKDA8PWEuYS5qKGYsYS5hLncobCkudG9Mb3dlckNhc2UoKSk/MDpsLm1hdGNoKGQpIT09cykwPGIubGVuZ3RoJiZiLnB1c2goXCIsIFwiKSxiLnB1c2goaStcIiA6IGZ1bmN0aW9uKF9fa29fdmFsdWUpIHsgXCIraitcIiA9IF9fa29fdmFsdWU7IH1cIil9ZWxzZSBqLnVua25vd24mJmgucHVzaChqLnVua25vd24pO1xuYz1oLmpvaW4oXCJcIik7MDxiLmxlbmd0aCYmKGM9YytcIiwgJ19rb19wcm9wZXJ0eV93cml0ZXJzJyA6IHsgXCIrYi5qb2luKFwiXCIpK1wiIH0gXCIpO3JldHVybiBjfSx3YjpmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD0wO2Q8Yi5sZW5ndGg7ZCsrKWlmKGEuYS53KGJbZF0ua2V5KT09YylyZXR1cm4gcDtyZXR1cm4gdH0sJDpmdW5jdGlvbihiLGMsZCxmLGspe2lmKCFifHwhYS5IYShiKSl7aWYoKGI9YygpLl9rb19wcm9wZXJ0eV93cml0ZXJzKSYmYltkXSliW2RdKGYpfWVsc2UoIWt8fGIoKSE9PWYpJiZiKGYpfX19KCk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmdcIixhLmcpO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1wiLGEuZy5EKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWxcIixhLmcuVyk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvblwiLFxuYS5nLmthKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoZz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGUpfWZ1bmN0aW9uIGMoYSl7cmV0dXJuIDg9PWEubm9kZVR5cGUmJihnP2EudGV4dDphLm5vZGVWYWx1ZSkubWF0Y2goaCl9ZnVuY3Rpb24gZChhLGUpe2Zvcih2YXIgZD1hLGY9MSxnPVtdO2Q9ZC5uZXh0U2libGluZzspe2lmKGMoZCkmJihmLS0sMD09PWYpKXJldHVybiBnO2cucHVzaChkKTtiKGQpJiZmKyt9ZXx8bShFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiK2Eubm9kZVZhbHVlKSk7cmV0dXJuIHN9ZnVuY3Rpb24gZihhLGIpe3ZhciBjPWQoYSxiKTtyZXR1cm4gYz8wPGMubGVuZ3RoP2NbYy5sZW5ndGgtMV0ubmV4dFNpYmxpbmc6YS5uZXh0U2libGluZzpzfXZhciBnPVwiPFxcIS0tdGVzdC0tXFw+XCI9PT1kb2N1bWVudC5jcmVhdGVDb21tZW50KFwidGVzdFwiKS50ZXh0LGU9Zz8vXjxcXCEtLVxccyprb1xccysoLipcXDouKilcXHMqLS1cXD4kLzpcbi9eXFxzKmtvXFxzKyguKlxcOi4qKVxccyokLyxoPWc/L148XFwhLS1cXHMqXFwva29cXHMqLS1cXD4kLzovXlxccypcXC9rb1xccyokLyxqPXt1bDpwLG9sOnB9O2EuZT17Qzp7fSxjaGlsZE5vZGVzOmZ1bmN0aW9uKGEpe3JldHVybiBiKGEpP2QoYSk6YS5jaGlsZE5vZGVzfSxoYTpmdW5jdGlvbihjKXtpZihiKGMpKWZvcih2YXIgYz1hLmUuY2hpbGROb2RlcyhjKSxlPTAsZD1jLmxlbmd0aDtlPGQ7ZSsrKWEucmVtb3ZlTm9kZShjW2VdKTtlbHNlIGEuYS5nYShjKX0sWDpmdW5jdGlvbihjLGUpe2lmKGIoYykpe2EuZS5oYShjKTtmb3IodmFyIGQ9Yy5uZXh0U2libGluZyxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKWQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZVtmXSxkKX1lbHNlIGEuYS5YKGMsZSl9LEthOmZ1bmN0aW9uKGEsYyl7YihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMsYS5uZXh0U2libGluZyk6YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKGMsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKGMpfSxcbkZhOmZ1bmN0aW9uKGEsYyxlKXtiKGEpP2EucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYyxlLm5leHRTaWJsaW5nKTplLm5leHRTaWJsaW5nP2EuaW5zZXJ0QmVmb3JlKGMsZS5uZXh0U2libGluZyk6YS5hcHBlbmRDaGlsZChjKX0sZmlyc3RDaGlsZDpmdW5jdGlvbihhKXtyZXR1cm4hYihhKT9hLmZpcnN0Q2hpbGQ6IWEubmV4dFNpYmxpbmd8fGMoYS5uZXh0U2libGluZyk/czphLm5leHRTaWJsaW5nfSxuZXh0U2libGluZzpmdW5jdGlvbihhKXtiKGEpJiYoYT1mKGEpKTtyZXR1cm4gYS5uZXh0U2libGluZyYmYyhhLm5leHRTaWJsaW5nKT9zOmEubmV4dFNpYmxpbmd9LFhhOmZ1bmN0aW9uKGEpe3JldHVybihhPWIoYSkpP2FbMV06c30sSWE6ZnVuY3Rpb24oZSl7aWYoalthLmEubyhlKV0pe3ZhciBkPWUuZmlyc3RDaGlsZDtpZihkKXtkbyBpZigxPT09ZC5ub2RlVHlwZSl7dmFyIGc7Zz1kLmZpcnN0Q2hpbGQ7dmFyIGg9cztpZihnKXtkbyBpZihoKWgucHVzaChnKTtlbHNlIGlmKGIoZykpe3ZhciBvPVxuZihnLHApO28/Zz1vOmg9W2ddfWVsc2UgYyhnKSYmKGg9W2ddKTt3aGlsZShnPWcubmV4dFNpYmxpbmcpfWlmKGc9aCl7aD1kLm5leHRTaWJsaW5nO2ZvcihvPTA7bzxnLmxlbmd0aDtvKyspaD9lLmluc2VydEJlZm9yZShnW29dLGgpOmUuYXBwZW5kQ2hpbGQoZ1tvXSl9fXdoaWxlKGQ9ZC5uZXh0U2libGluZyl9fX19fSkoKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHNcIixhLmUpO2EuYihcInZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NcIixhLmUuQyk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZVwiLGEuZS5oYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyXCIsYS5lLkZhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMucHJlcGVuZFwiLGEuZS5LYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlblwiLGEuZS5YKTsoZnVuY3Rpb24oKXthLko9ZnVuY3Rpb24oKXt0aGlzLmNiPXt9fTthLmEuZXh0ZW5kKGEuSi5wcm90b3R5cGUse25vZGVIYXNCaW5kaW5nczpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBiLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKSE9XG5zO2Nhc2UgODpyZXR1cm4gYS5lLlhhKGIpIT1zO2RlZmF1bHQ6cmV0dXJuIHR9fSxnZXRCaW5kaW5nczpmdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMuZ2V0QmluZGluZ3NTdHJpbmcoYSxjKTtyZXR1cm4gZD90aGlzLnBhcnNlQmluZGluZ3NTdHJpbmcoZCxjKTpzfSxnZXRCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBiLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKTtjYXNlIDg6cmV0dXJuIGEuZS5YYShiKTtkZWZhdWx0OnJldHVybiBzfX0scGFyc2VCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihiLGMpe3RyeXt2YXIgZD1jLiRkYXRhLGQ9XCJvYmplY3RcIj09dHlwZW9mIGQmJmQhPXM/W2QsY106W2NdLGY9ZC5sZW5ndGgsZz10aGlzLmNiLGU9ZitcIl9cIitiLGg7aWYoIShoPWdbZV0pKXt2YXIgaj1cIiB7IFwiK2EuZy5rYShiKStcIiB9IFwiO2g9Z1tlXT1hLmEuZWIoaixmKX1yZXR1cm4gaChkKX1jYXRjaChrKXttKEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbk1lc3NhZ2U6IFwiK1xuaytcIjtcXG5CaW5kaW5ncyB2YWx1ZTogXCIrYikpfX19KTthLkouaW5zdGFuY2U9bmV3IGEuSn0pKCk7YS5iKFwiYmluZGluZ1Byb3ZpZGVyXCIsYS5KKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCxlKXtmb3IodmFyIGg9YS5lLmZpcnN0Q2hpbGQoZCk7ZD1oOyloPWEuZS5uZXh0U2libGluZyhkKSxjKGIsZCxlKX1mdW5jdGlvbiBjKGMsZyxlKXt2YXIgaD1wLGo9MT09PWcubm9kZVR5cGU7aiYmYS5lLklhKGcpO2lmKGomJmV8fGEuSi5pbnN0YW5jZS5ub2RlSGFzQmluZGluZ3MoZykpaD1kKGcscyxjLGUpLkdiO2gmJmIoYyxnLCFqKX1mdW5jdGlvbiBkKGIsYyxlLGQpe2Z1bmN0aW9uIGooYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGxbYV19fWZ1bmN0aW9uIGsoKXtyZXR1cm4gbH12YXIgaT0wLGwscTthLmgoZnVuY3Rpb24oKXt2YXIgbz1lJiZlIGluc3RhbmNlb2YgYS56P2U6bmV3IGEueihhLmEuZChlKSksdj1vLiRkYXRhO2QmJmEuUmEoYixvKTtpZihsPShcImZ1bmN0aW9uXCI9PVxudHlwZW9mIGM/YygpOmMpfHxhLkouaW5zdGFuY2UuZ2V0QmluZGluZ3MoYixvKSl7aWYoMD09PWkpe2k9MTtmb3IodmFyIHUgaW4gbCl7dmFyIHI9YS5jW3VdO3ImJjg9PT1iLm5vZGVUeXBlJiYhYS5lLkNbdV0mJm0oRXJyb3IoXCJUaGUgYmluZGluZyAnXCIrdStcIicgY2Fubm90IGJlIHVzZWQgd2l0aCB2aXJ0dWFsIGVsZW1lbnRzXCIpKTtpZihyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLmluaXQmJihyPSgwLHIuaW5pdCkoYixqKHUpLGssdixvKSkmJnIuY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MpcSE9PW4mJm0oRXJyb3IoXCJNdWx0aXBsZSBiaW5kaW5ncyAoXCIrcStcIiBhbmQgXCIrdStcIikgYXJlIHRyeWluZyB0byBjb250cm9sIGRlc2NlbmRhbnQgYmluZGluZ3Mgb2YgdGhlIHNhbWUgZWxlbWVudC4gWW91IGNhbm5vdCB1c2UgdGhlc2UgYmluZGluZ3MgdG9nZXRoZXIgb24gdGhlIHNhbWUgZWxlbWVudC5cIikpLHE9dX1pPTJ9aWYoMj09PWkpZm9yKHUgaW4gbCkocj1hLmNbdV0pJiZcImZ1bmN0aW9uXCI9PVxudHlwZW9mIHIudXBkYXRlJiYoMCxyLnVwZGF0ZSkoYixqKHUpLGssdixvKX19LHMse2Rpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDpifSk7cmV0dXJue0diOnE9PT1ufX1hLmM9e307YS56PWZ1bmN0aW9uKGIsYyl7Yz8oYS5hLmV4dGVuZCh0aGlzLGMpLHRoaXMuJHBhcmVudENvbnRleHQ9Yyx0aGlzLiRwYXJlbnQ9Yy4kZGF0YSx0aGlzLiRwYXJlbnRzPShjLiRwYXJlbnRzfHxbXSkuc2xpY2UoMCksdGhpcy4kcGFyZW50cy51bnNoaWZ0KHRoaXMuJHBhcmVudCkpOih0aGlzLiRwYXJlbnRzPVtdLHRoaXMuJHJvb3Q9Yik7dGhpcy4kZGF0YT1ifTthLnoucHJvdG90eXBlLmNyZWF0ZUNoaWxkQ29udGV4dD1mdW5jdGlvbihiKXtyZXR1cm4gbmV3IGEueihiLHRoaXMpfTthLnoucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihiKXt2YXIgYz1hLmEuZXh0ZW5kKG5ldyBhLnosdGhpcyk7cmV0dXJuIGEuYS5leHRlbmQoYyxiKX07YS5SYT1mdW5jdGlvbihiLGMpe2lmKDI9PWFyZ3VtZW50cy5sZW5ndGgpYS5hLmYuc2V0KGIsXG5cIl9fa29fYmluZGluZ0NvbnRleHRfX1wiLGMpO2Vsc2UgcmV0dXJuIGEuYS5mLmdldChiLFwiX19rb19iaW5kaW5nQ29udGV4dF9fXCIpfTthLnlhPWZ1bmN0aW9uKGIsYyxlKXsxPT09Yi5ub2RlVHlwZSYmYS5lLklhKGIpO3JldHVybiBkKGIsYyxlLHApfTthLllhPWZ1bmN0aW9uKGEsYyl7KDE9PT1jLm5vZGVUeXBlfHw4PT09Yy5ub2RlVHlwZSkmJmIoYSxjLHApfTthLnhhPWZ1bmN0aW9uKGEsYil7YiYmKDEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZSkmJm0oRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKSk7Yj1ifHx3aW5kb3cuZG9jdW1lbnQuYm9keTtjKGEsYixwKX07YS5lYT1mdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOmNhc2UgODp2YXIgYz1hLlJhKGIpO2lmKGMpcmV0dXJuIGM7aWYoYi5wYXJlbnROb2RlKXJldHVybiBhLmVhKGIucGFyZW50Tm9kZSl9fTtcbmEuaGI9ZnVuY3Rpb24oYil7cmV0dXJuKGI9YS5lYShiKSk/Yi4kZGF0YTpufTthLmIoXCJiaW5kaW5nSGFuZGxlcnNcIixhLmMpO2EuYihcImFwcGx5QmluZGluZ3NcIixhLnhhKTthLmIoXCJhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c1wiLGEuWWEpO2EuYihcImFwcGx5QmluZGluZ3NUb05vZGVcIixhLnlhKTthLmIoXCJjb250ZXh0Rm9yXCIsYS5lYSk7YS5iKFwiZGF0YUZvclwiLGEuaGIpfSkoKTthLmEudihbXCJjbGlja1wiXSxmdW5jdGlvbihiKXthLmNbYl09e2luaXQ6ZnVuY3Rpb24oYyxkLGYsZyl7cmV0dXJuIGEuYy5ldmVudC5pbml0LmNhbGwodGhpcyxjLGZ1bmN0aW9uKCl7dmFyIGE9e307YVtiXT1kKCk7cmV0dXJuIGF9LGYsZyl9fX0pO2EuYy5ldmVudD17aW5pdDpmdW5jdGlvbihiLGMsZCxmKXt2YXIgZz1jKCl8fHt9LGU7Zm9yKGUgaW4gZykoZnVuY3Rpb24oKXt2YXIgZz1lO1wic3RyaW5nXCI9PXR5cGVvZiBnJiZhLmEubihiLGcsZnVuY3Rpb24oYil7dmFyIGUsaT1jKClbZ107aWYoaSl7dmFyIGw9XG5kKCk7dHJ5e3ZhciBxPWEuYS5MKGFyZ3VtZW50cyk7cS51bnNoaWZ0KGYpO2U9aS5hcHBseShmLHEpfWZpbmFsbHl7ZSE9PXAmJihiLnByZXZlbnREZWZhdWx0P2IucHJldmVudERlZmF1bHQoKTpiLnJldHVyblZhbHVlPXQpfWxbZytcIkJ1YmJsZVwiXT09PXQmJihiLmNhbmNlbEJ1YmJsZT1wLGIuc3RvcFByb3BhZ2F0aW9uJiZiLnN0b3BQcm9wYWdhdGlvbigpKX19KX0pKCl9fTthLmMuc3VibWl0PXtpbml0OmZ1bmN0aW9uKGIsYyxkLGYpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGMoKSYmbShFcnJvcihcIlRoZSB2YWx1ZSBmb3IgYSBzdWJtaXQgYmluZGluZyBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2EuYS5uKGIsXCJzdWJtaXRcIixmdW5jdGlvbihhKXt2YXIgZSxkPWMoKTt0cnl7ZT1kLmNhbGwoZixiKX1maW5hbGx5e2UhPT1wJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT10KX19KX19O2EuYy52aXNpYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1cbmEuYS5kKGMoKSksZj1cIm5vbmVcIiE9Yi5zdHlsZS5kaXNwbGF5O2QmJiFmP2Iuc3R5bGUuZGlzcGxheT1cIlwiOiFkJiZmJiYoYi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19O2EuYy5lbmFibGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSk7ZCYmYi5kaXNhYmxlZD9iLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpOiFkJiYhYi5kaXNhYmxlZCYmKGIuZGlzYWJsZWQ9cCl9fTthLmMuZGlzYWJsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5jLmVuYWJsZS51cGRhdGUoYixmdW5jdGlvbigpe3JldHVybiFhLmEuZChjKCkpfSl9fTthLmMudmFsdWU9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGYoKXt2YXIgZT1jKCksZj1hLmsucihiKTthLmcuJChlLGQsXCJ2YWx1ZVwiLGYscCl9dmFyIGc9W1wiY2hhbmdlXCJdLGU9ZCgpLnZhbHVlVXBkYXRlO2UmJihcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9W2VdKSxhLmEuTihnLGUpLGc9YS5hLnphKGcpKTtpZihhLmEuamEmJlxuKFwiaW5wdXRcIj09Yi50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT1iLnR5cGUmJlwib2ZmXCIhPWIuYXV0b2NvbXBsZXRlJiYoIWIuZm9ybXx8XCJvZmZcIiE9Yi5mb3JtLmF1dG9jb21wbGV0ZSkpJiYtMT09YS5hLmooZyxcInByb3BlcnR5Y2hhbmdlXCIpKXt2YXIgaD10O2EuYS5uKGIsXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7aD1wfSk7YS5hLm4oYixcImJsdXJcIixmdW5jdGlvbigpe2lmKGgpe2g9dDtmKCl9fSl9YS5hLnYoZyxmdW5jdGlvbihjKXt2YXIgZT1mO2lmKGEuYS5IYihjLFwiYWZ0ZXJcIikpe2U9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGYsMCl9O2M9Yy5zdWJzdHJpbmcoNSl9YS5hLm4oYixjLGUpfSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPVwic2VsZWN0XCI9PT1hLmEubyhiKSxmPWEuYS5kKGMoKSksZz1hLmsucihiKSxlPWYhPWc7MD09PWYmJigwIT09ZyYmXCIwXCIhPT1nKSYmKGU9cCk7ZSYmKGc9ZnVuY3Rpb24oKXthLmsuUyhiLGYpfSxnKCksZCYmc2V0VGltZW91dChnLFxuMCkpO2QmJjA8Yi5sZW5ndGgmJkIoYixmLHQpfX07YS5jLm9wdGlvbnM9e3VwZGF0ZTpmdW5jdGlvbihiLGMsZCl7XCJzZWxlY3RcIiE9PWEuYS5vKGIpJiZtKEVycm9yKFwib3B0aW9ucyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIikpO2Zvcih2YXIgZj0wPT1iLmxlbmd0aCxnPWEuYS5UKGEuYS5hYShiLmNoaWxkTm9kZXMsZnVuY3Rpb24oYil7cmV0dXJuIGIudGFnTmFtZSYmXCJvcHRpb25cIj09PWEuYS5vKGIpJiZiLnNlbGVjdGVkfSksZnVuY3Rpb24oYil7cmV0dXJuIGEuay5yKGIpfHxiLmlubmVyVGV4dHx8Yi50ZXh0Q29udGVudH0pLGU9Yi5zY3JvbGxUb3AsaD1hLmEuZChjKCkpOzA8Yi5sZW5ndGg7KWEuRihiLm9wdGlvbnNbMF0pLGIucmVtb3ZlKDApO2lmKGgpe2Q9ZCgpO1wibnVtYmVyXCIhPXR5cGVvZiBoLmxlbmd0aCYmKGg9W2hdKTtpZihkLm9wdGlvbnNDYXB0aW9uKXt2YXIgaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO2EuYS5ZKGosXG5kLm9wdGlvbnNDYXB0aW9uKTthLmsuUyhqLG4pO2IuYXBwZW5kQ2hpbGQoail9Zm9yKHZhciBjPTAsaz1oLmxlbmd0aDtjPGs7YysrKXt2YXIgaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLGk9XCJzdHJpbmdcIj09dHlwZW9mIGQub3B0aW9uc1ZhbHVlP2hbY11bZC5vcHRpb25zVmFsdWVdOmhbY10saT1hLmEuZChpKTthLmsuUyhqLGkpO3ZhciBsPWQub3B0aW9uc1RleHQsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2woaFtjXSk6XCJzdHJpbmdcIj09dHlwZW9mIGw/aFtjXVtsXTppO2lmKGk9PT1zfHxpPT09bilpPVwiXCI7YS5hLlFhKGosaSk7Yi5hcHBlbmRDaGlsZChqKX1oPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIik7Yz1qPTA7Zm9yKGs9aC5sZW5ndGg7YzxrO2MrKykwPD1hLmEuaihnLGEuay5yKGhbY10pKSYmKGEuYS5QYShoW2NdLHApLGorKyk7Yi5zY3JvbGxUb3A9ZTtmJiZcInZhbHVlXCJpbiBkJiZCKGIsYS5hLmQoZC52YWx1ZSkscCk7YS5hLmxiKGIpfX19O1xuYS5jLm9wdGlvbnMub2E9XCJfX2tvLm9wdGlvblZhbHVlRG9tRGF0YV9fXCI7YS5jLnNlbGVjdGVkT3B0aW9ucz17RWE6ZnVuY3Rpb24oYil7Zm9yKHZhciBjPVtdLGI9Yi5jaGlsZE5vZGVzLGQ9MCxmPWIubGVuZ3RoO2Q8ZjtkKyspe3ZhciBnPWJbZF0sZT1hLmEubyhnKTtcIm9wdGlvblwiPT1lJiZnLnNlbGVjdGVkP2MucHVzaChhLmsucihnKSk6XCJvcHRncm91cFwiPT1lJiYoZz1hLmMuc2VsZWN0ZWRPcHRpb25zLkVhKGcpLEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYyxbYy5sZW5ndGgsMF0uY29uY2F0KGcpKSl9cmV0dXJuIGN9LGluaXQ6ZnVuY3Rpb24oYixjLGQpe2EuYS5uKGIsXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBiPWMoKSxnPWEuYy5zZWxlY3RlZE9wdGlvbnMuRWEodGhpcyk7YS5nLiQoYixkLFwidmFsdWVcIixnKX0pfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXtcInNlbGVjdFwiIT1hLmEubyhiKSYmbShFcnJvcihcInZhbHVlcyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIikpO1xudmFyIGQ9YS5hLmQoYygpKTtpZihkJiZcIm51bWJlclwiPT10eXBlb2YgZC5sZW5ndGgpZm9yKHZhciBmPWIuY2hpbGROb2RlcyxnPTAsZT1mLmxlbmd0aDtnPGU7ZysrKXt2YXIgaD1mW2ddO1wib3B0aW9uXCI9PT1hLmEubyhoKSYmYS5hLlBhKGgsMDw9YS5hLmooZCxhLmsucihoKSkpfX19O2EuYy50ZXh0PXt1cGRhdGU6ZnVuY3Rpb24oYixjKXthLmEuUWEoYixjKCkpfX07YS5jLmh0bWw9e2luaXQ6ZnVuY3Rpb24oKXtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6cH19LHVwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSk7YS5hLlkoYixkKX19O2EuYy5jc3M9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKXx8e30pLGY7Zm9yKGYgaW4gZClpZihcInN0cmluZ1wiPT10eXBlb2YgZil7dmFyIGc9YS5hLmQoZFtmXSk7YS5hLlVhKGIsZixnKX19fTthLmMuc3R5bGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKXx8e30pLGY7XG5mb3IoZiBpbiBkKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBmKXt2YXIgZz1hLmEuZChkW2ZdKTtiLnN0eWxlW2ZdPWd8fFwiXCJ9fX07YS5jLnVuaXF1ZU5hbWU9e2luaXQ6ZnVuY3Rpb24oYixjKXtjKCkmJihiLm5hbWU9XCJrb191bmlxdWVfXCIrICsrYS5jLnVuaXF1ZU5hbWUuZ2IsKGEuYS50Ynx8YS5hLnViKSYmYi5tZXJnZUF0dHJpYnV0ZXMoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIjxpbnB1dCBuYW1lPSdcIitiLm5hbWUrXCInLz5cIiksdCkpfX07YS5jLnVuaXF1ZU5hbWUuZ2I9MDthLmMuY2hlY2tlZD17aW5pdDpmdW5jdGlvbihiLGMsZCl7YS5hLm4oYixcImNsaWNrXCIsZnVuY3Rpb24oKXt2YXIgZjtpZihcImNoZWNrYm94XCI9PWIudHlwZSlmPWIuY2hlY2tlZDtlbHNlIGlmKFwicmFkaW9cIj09Yi50eXBlJiZiLmNoZWNrZWQpZj1iLnZhbHVlO2Vsc2UgcmV0dXJuO3ZhciBnPWMoKTtcImNoZWNrYm94XCI9PWIudHlwZSYmYS5hLmQoZylpbnN0YW5jZW9mIEFycmF5PyhmPWEuYS5qKGEuYS5kKGcpLGIudmFsdWUpLFxuYi5jaGVja2VkJiYwPmY/Zy5wdXNoKGIudmFsdWUpOiFiLmNoZWNrZWQmJjA8PWYmJmcuc3BsaWNlKGYsMSkpOmEuZy4kKGcsZCxcImNoZWNrZWRcIixmLHApfSk7XCJyYWRpb1wiPT1iLnR5cGUmJiFiLm5hbWUmJmEuYy51bmlxdWVOYW1lLmluaXQoYixBKHApKX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpKTtcImNoZWNrYm94XCI9PWIudHlwZT9iLmNoZWNrZWQ9ZCBpbnN0YW5jZW9mIEFycmF5PzA8PWEuYS5qKGQsYi52YWx1ZSk6ZDpcInJhZGlvXCI9PWIudHlwZSYmKGIuY2hlY2tlZD1iLnZhbHVlPT1kKX19O3ZhciBGPXtcImNsYXNzXCI6XCJjbGFzc05hbWVcIixcImZvclwiOlwiaHRtbEZvclwifTthLmMuYXR0cj17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpKXx8e30sZjtmb3IoZiBpbiBkKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBmKXt2YXIgZz1hLmEuZChkW2ZdKSxlPWc9PT10fHxnPT09c3x8Zz09PW47ZSYmYi5yZW1vdmVBdHRyaWJ1dGUoZik7OD49YS5hLmphJiZcbmYgaW4gRj8oZj1GW2ZdLGU/Yi5yZW1vdmVBdHRyaWJ1dGUoZik6YltmXT1nKTplfHxiLnNldEF0dHJpYnV0ZShmLGcudG9TdHJpbmcoKSl9fX07YS5jLmhhc2ZvY3VzPXtpbml0OmZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBmKGIpe3ZhciBlPWMoKTthLmcuJChlLGQsXCJoYXNmb2N1c1wiLGIscCl9YS5hLm4oYixcImZvY3VzXCIsZnVuY3Rpb24oKXtmKHApfSk7YS5hLm4oYixcImZvY3VzaW5cIixmdW5jdGlvbigpe2YocCl9KTthLmEubihiLFwiYmx1clwiLGZ1bmN0aW9uKCl7Zih0KX0pO2EuYS5uKGIsXCJmb2N1c291dFwiLGZ1bmN0aW9uKCl7Zih0KX0pfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCkpO2Q/Yi5mb2N1cygpOmIuYmx1cigpO2EuYS52YShiLGQ/XCJmb2N1c2luXCI6XCJmb2N1c291dFwiKX19O2EuY1tcIndpdGhcIl09e3A6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9YigpO3JldHVybntcImlmXCI6YyxkYXRhOmMsdGVtcGxhdGVFbmdpbmU6YS5xLkt9fX0sXG5pbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS5pbml0KGIsYS5jW1wid2l0aFwiXS5wKGMpKX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGYsZyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS51cGRhdGUoYixhLmNbXCJ3aXRoXCJdLnAoYyksZCxmLGcpfX07YS5nLkRbXCJ3aXRoXCJdPXQ7YS5lLkNbXCJ3aXRoXCJdPXA7YS5jW1wiaWZcIl09e3A6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJue1wiaWZcIjpiKCksdGVtcGxhdGVFbmdpbmU6YS5xLkt9fX0saW5pdDpmdW5jdGlvbihiLGMpe3JldHVybiBhLmMudGVtcGxhdGUuaW5pdChiLGEuY1tcImlmXCJdLnAoYykpfSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZixnKXtyZXR1cm4gYS5jLnRlbXBsYXRlLnVwZGF0ZShiLGEuY1tcImlmXCJdLnAoYyksZCxmLGcpfX07YS5nLkRbXCJpZlwiXT10O2EuZS5DW1wiaWZcIl09cDthLmMuaWZub3Q9e3A6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJue2lmbm90OmIoKSx0ZW1wbGF0ZUVuZ2luZTphLnEuS319fSxcbmluaXQ6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jLnRlbXBsYXRlLmluaXQoYixhLmMuaWZub3QucChjKSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCxmLGcpe3JldHVybiBhLmMudGVtcGxhdGUudXBkYXRlKGIsYS5jLmlmbm90LnAoYyksZCxmLGcpfX07YS5nLkQuaWZub3Q9dDthLmUuQy5pZm5vdD1wO2EuYy5mb3JlYWNoPXtwOmZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBjPWEuYS5kKGIoKSk7cmV0dXJuIWN8fFwibnVtYmVyXCI9PXR5cGVvZiBjLmxlbmd0aD97Zm9yZWFjaDpjLHRlbXBsYXRlRW5naW5lOmEucS5LfTp7Zm9yZWFjaDpjLmRhdGEsaW5jbHVkZURlc3Ryb3llZDpjLmluY2x1ZGVEZXN0cm95ZWQsYWZ0ZXJBZGQ6Yy5hZnRlckFkZCxiZWZvcmVSZW1vdmU6Yy5iZWZvcmVSZW1vdmUsYWZ0ZXJSZW5kZXI6Yy5hZnRlclJlbmRlcix0ZW1wbGF0ZUVuZ2luZTphLnEuS319fSxpbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS5pbml0KGIsYS5jLmZvcmVhY2gucChjKSl9LFxudXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGYsZyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS51cGRhdGUoYixhLmMuZm9yZWFjaC5wKGMpLGQsZixnKX19O2EuZy5ELmZvcmVhY2g9dDthLmUuQy5mb3JlYWNoPXA7YS50PWZ1bmN0aW9uKCl7fTthLnQucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKCl7bShFcnJvcihcIk92ZXJyaWRlIHJlbmRlclRlbXBsYXRlU291cmNlXCIpKX07YS50LnByb3RvdHlwZS5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oKXttKEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpKX07YS50LnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixjKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7dmFyIGM9Y3x8ZG9jdW1lbnQsZD1jLmdldEVsZW1lbnRCeUlkKGIpO2R8fG0oRXJyb3IoXCJDYW5ub3QgZmluZCB0ZW1wbGF0ZSB3aXRoIElEIFwiK2IpKTtyZXR1cm4gbmV3IGEubC5pKGQpfWlmKDE9PVxuYi5ub2RlVHlwZXx8OD09Yi5ub2RlVHlwZSlyZXR1cm4gbmV3IGEubC5NKGIpO20oRXJyb3IoXCJVbmtub3duIHRlbXBsYXRlIHR5cGU6IFwiK2IpKX07YS50LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1mdW5jdGlvbihhLGMsZCxmKXtyZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZSh0aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGYpLGMsZCl9O2EudC5wcm90b3R5cGUuaXNUZW1wbGF0ZVJld3JpdHRlbj1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc9PT10fHwhKGMmJmMhPWRvY3VtZW50KSYmdGhpcy5WJiZ0aGlzLlZbYV0/cDp0aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGMpLmRhdGEoXCJpc1Jld3JpdHRlblwiKX07YS50LnByb3RvdHlwZS5yZXdyaXRlVGVtcGxhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBmPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZCksYz1jKGYudGV4dCgpKTtmLnRleHQoYyk7Zi5kYXRhKFwiaXNSZXdyaXR0ZW5cIixcbnApOyEoZCYmZCE9ZG9jdW1lbnQpJiZcInN0cmluZ1wiPT10eXBlb2YgYSYmKHRoaXMuVj10aGlzLlZ8fHt9LHRoaXMuVlthXT1wKX07YS5iKFwidGVtcGxhdGVFbmdpbmVcIixhLnQpO2EuWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGUpe2Zvcih2YXIgYj1hLmcuVyhiKSxkPWEuZy5ELGo9MDtqPGIubGVuZ3RoO2orKyl7dmFyIGs9YltqXS5rZXk7aWYoZC5oYXNPd25Qcm9wZXJ0eShrKSl7dmFyIGk9ZFtrXTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgaT8oaz1pKGJbal0udmFsdWUpKSYmbShFcnJvcihrKSk6aXx8bShFcnJvcihcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgdGhlICdcIitrK1wiJyBiaW5kaW5nIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCIpKX19Yj1cImtvLnRlbXBsYXRlUmV3cml0aW5nLmFwcGx5TWVtb2l6ZWRCaW5kaW5nc1RvTmV4dFNpYmxpbmcoZnVuY3Rpb24oKSB7ICAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24oKSB7IHJldHVybiB7IFwiK2EuZy5rYShiKStcblwiIH0gfSkoKSAgICAgICAgIH0pXCI7cmV0dXJuIGUuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrKGIpK2N9dmFyIGM9Lyg8W2Etel0rXFxkKihcXHMrKD8hZGF0YS1iaW5kPSlbYS16MC05XFwtXSsoPShcXFwiW15cXFwiXSpcXFwifFxcJ1teXFwnXSpcXCcpKT8pKlxccyspZGF0YS1iaW5kPShbXCInXSkoW1xcc1xcU10qPylcXDUvZ2ksZD0vPFxcIS0tXFxzKmtvXFxiXFxzKihbXFxzXFxTXSo/KVxccyotLVxcPi9nO3JldHVybnttYjpmdW5jdGlvbihiLGMsZSl7Yy5pc1RlbXBsYXRlUmV3cml0dGVuKGIsZSl8fGMucmV3cml0ZVRlbXBsYXRlKGIsZnVuY3Rpb24oYil7cmV0dXJuIGEuWi56YihiLGMpfSxlKX0semI6ZnVuY3Rpb24oYSxnKXtyZXR1cm4gYS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxjLGQsZixpLGwscSl7cmV0dXJuIGIocSxjLGcpfSkucmVwbGFjZShkLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGIoYyxcIjxcXCEtLSBrbyAtLVxcPlwiLGcpfSl9LFphOmZ1bmN0aW9uKGIpe3JldHVybiBhLnMubmEoZnVuY3Rpb24oYyxcbmUpe2MubmV4dFNpYmxpbmcmJmEueWEoYy5uZXh0U2libGluZyxiLGUpfSl9fX0oKTthLmIoXCJ0ZW1wbGF0ZVJld3JpdGluZ1wiLGEuWik7YS5iKFwidGVtcGxhdGVSZXdyaXRpbmcuYXBwbHlNZW1vaXplZEJpbmRpbmdzVG9OZXh0U2libGluZ1wiLGEuWi5aYSk7KGZ1bmN0aW9uKCl7YS5sPXt9O2EubC5pPWZ1bmN0aW9uKGEpe3RoaXMuaT1hfTthLmwuaS5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe3ZhciBiPWEuYS5vKHRoaXMuaSksYj1cInNjcmlwdFwiPT09Yj9cInRleHRcIjpcInRleHRhcmVhXCI9PT1iP1widmFsdWVcIjpcImlubmVySFRNTFwiO2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuaVtiXTt2YXIgYz1hcmd1bWVudHNbMF07XCJpbm5lckhUTUxcIj09PWI/YS5hLlkodGhpcy5pLGMpOnRoaXMuaVtiXT1jfTthLmwuaS5wcm90b3R5cGUuZGF0YT1mdW5jdGlvbihiKXtpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gYS5hLmYuZ2V0KHRoaXMuaSxcInRlbXBsYXRlU291cmNlRGF0YV9cIitcbmIpO2EuYS5mLnNldCh0aGlzLmksXCJ0ZW1wbGF0ZVNvdXJjZURhdGFfXCIrYixhcmd1bWVudHNbMV0pfTthLmwuTT1mdW5jdGlvbihhKXt0aGlzLmk9YX07YS5sLk0ucHJvdG90eXBlPW5ldyBhLmwuaTthLmwuTS5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBiPWEuYS5mLmdldCh0aGlzLmksXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiKXx8e307Yi51YT09PW4mJmIuZGEmJihiLnVhPWIuZGEuaW5uZXJIVE1MKTtyZXR1cm4gYi51YX1hLmEuZi5zZXQodGhpcy5pLFwiX19rb19hbm9uX3RlbXBsYXRlX19cIix7dWE6YXJndW1lbnRzWzBdfSl9O2EubC5pLnByb3RvdHlwZS5ub2Rlcz1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuKGEuYS5mLmdldCh0aGlzLmksXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiKXx8e30pLmRhO2EuYS5mLnNldCh0aGlzLmksXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiLHtkYTphcmd1bWVudHNbMF19KX07XG5hLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixhLmwpO2EuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYS5sLmkpO2EuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGEubC5NKX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCl7Zm9yKHZhciBmLGM9YS5lLm5leHRTaWJsaW5nKGMpO2ImJihmPWIpIT09YzspYj1hLmUubmV4dFNpYmxpbmcoZiksKDE9PT1mLm5vZGVUeXBlfHw4PT09Zi5ub2RlVHlwZSkmJmQoZil9ZnVuY3Rpb24gYyhjLGQpe2lmKGMubGVuZ3RoKXt2YXIgZj1jWzBdLGc9Y1tjLmxlbmd0aC0xXTtiKGYsZyxmdW5jdGlvbihiKXthLnhhKGQsYil9KTtiKGYsZyxmdW5jdGlvbihiKXthLnMuV2EoYixbZF0pfSl9fWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGEubm9kZVR5cGU/YTowPGEubGVuZ3RoP2FbMF06c31mdW5jdGlvbiBmKGIsZixqLGssaSl7dmFyIGk9aXx8e30sbD1iJiZkKGIpLGw9bCYmbC5vd25lckRvY3VtZW50LHE9aS50ZW1wbGF0ZUVuZ2luZXx8XG5nO2EuWi5tYihqLHEsbCk7aj1xLnJlbmRlclRlbXBsYXRlKGosayxpLGwpOyhcIm51bWJlclwiIT10eXBlb2Ygai5sZW5ndGh8fDA8ai5sZW5ndGgmJlwibnVtYmVyXCIhPXR5cGVvZiBqWzBdLm5vZGVUeXBlKSYmbShFcnJvcihcIlRlbXBsYXRlIGVuZ2luZSBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBET00gbm9kZXNcIikpO2w9dDtzd2l0Y2goZil7Y2FzZSBcInJlcGxhY2VDaGlsZHJlblwiOmEuZS5YKGIsaik7bD1wO2JyZWFrO2Nhc2UgXCJyZXBsYWNlTm9kZVwiOmEuYS5OYShiLGopO2w9cDticmVhaztjYXNlIFwiaWdub3JlVGFyZ2V0Tm9kZVwiOmJyZWFrO2RlZmF1bHQ6bShFcnJvcihcIlVua25vd24gcmVuZGVyTW9kZTogXCIrZikpfWwmJihjKGosayksaS5hZnRlclJlbmRlciYmaS5hZnRlclJlbmRlcihqLGsuJGRhdGEpKTtyZXR1cm4gan12YXIgZzthLnJhPWZ1bmN0aW9uKGIpe2IhPW4mJiEoYiBpbnN0YW5jZW9mIGEudCkmJm0oRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKSk7XG5nPWJ9O2EucWE9ZnVuY3Rpb24oYixjLGosayxpKXtqPWp8fHt9OyhqLnRlbXBsYXRlRW5naW5lfHxnKT09biYmbShFcnJvcihcIlNldCBhIHRlbXBsYXRlIGVuZ2luZSBiZWZvcmUgY2FsbGluZyByZW5kZXJUZW1wbGF0ZVwiKSk7aT1pfHxcInJlcGxhY2VDaGlsZHJlblwiO2lmKGspe3ZhciBsPWQoayk7cmV0dXJuIGEuaChmdW5jdGlvbigpe3ZhciBnPWMmJmMgaW5zdGFuY2VvZiBhLno/YzpuZXcgYS56KGEuYS5kKGMpKSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGI/YihnLiRkYXRhKTpiLGc9ZihrLGksbyxnLGopO1wicmVwbGFjZU5vZGVcIj09aSYmKGs9ZyxsPWQoaykpfSxzLHtkaXNwb3NlV2hlbjpmdW5jdGlvbigpe3JldHVybiFsfHwhYS5hLmZhKGwpfSxkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6bCYmXCJyZXBsYWNlTm9kZVwiPT1pP2wucGFyZW50Tm9kZTpsfSl9cmV0dXJuIGEucy5uYShmdW5jdGlvbihkKXthLnFhKGIsYyxqLGQsXCJyZXBsYWNlTm9kZVwiKX0pfTthLkZiPWZ1bmN0aW9uKGIsXG5kLGcsayxpKXtmdW5jdGlvbiBsKGEsYil7YyhiLG8pO2cuYWZ0ZXJSZW5kZXImJmcuYWZ0ZXJSZW5kZXIoYixhKX1mdW5jdGlvbiBxKGMsZCl7dmFyIGg9XCJmdW5jdGlvblwiPT10eXBlb2YgYj9iKGMpOmI7bz1pLmNyZWF0ZUNoaWxkQ29udGV4dChhLmEuZChjKSk7by4kaW5kZXg9ZDtyZXR1cm4gZihzLFwiaWdub3JlVGFyZ2V0Tm9kZVwiLGgsbyxnKX12YXIgbztyZXR1cm4gYS5oKGZ1bmN0aW9uKCl7dmFyIGI9YS5hLmQoZCl8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBiLmxlbmd0aCYmKGI9W2JdKTtiPWEuYS5hYShiLGZ1bmN0aW9uKGIpe3JldHVybiBnLmluY2x1ZGVEZXN0cm95ZWR8fGI9PT1ufHxiPT09c3x8IWEuYS5kKGIuX2Rlc3Ryb3kpfSk7YS5hLk9hKGssYixxLGcsbCl9LHMse2Rpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDprfSl9O2EuYy50ZW1wbGF0ZT17aW5pdDpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSk7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGQmJiFkLm5hbWUmJlxuKDE9PWIubm9kZVR5cGV8fDg9PWIubm9kZVR5cGUpKWQ9MT09Yi5ub2RlVHlwZT9iLmNoaWxkTm9kZXM6YS5lLmNoaWxkTm9kZXMoYiksZD1hLmEuQWIoZCksKG5ldyBhLmwuTShiKSkubm9kZXMoZCk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOnB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZixnKXtjPWEuYS5kKGMoKSk7Zj1wO1wic3RyaW5nXCI9PXR5cGVvZiBjP2Q9YzooZD1jLm5hbWUsXCJpZlwiaW4gYyYmKGY9ZiYmYS5hLmQoY1tcImlmXCJdKSksXCJpZm5vdFwiaW4gYyYmKGY9ZiYmIWEuYS5kKGMuaWZub3QpKSk7dmFyIGw9cztcIm9iamVjdFwiPT09dHlwZW9mIGMmJlwiZm9yZWFjaFwiaW4gYz9sPWEuRmIoZHx8YixmJiZjLmZvcmVhY2h8fFtdLGMsYixnKTpmPyhnPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZcImRhdGFcImluIGM/Zy5jcmVhdGVDaGlsZENvbnRleHQoYS5hLmQoYy5kYXRhKSk6ZyxsPWEucWEoZHx8YixnLGMsYikpOmEuZS5oYShiKTtnPWw7KGM9YS5hLmYuZ2V0KGIsXCJfX2tvX190ZW1wbGF0ZVN1YnNjcmlwdGlvbkRvbURhdGFLZXlfX1wiKSkmJlxuXCJmdW5jdGlvblwiPT10eXBlb2YgYy5BJiZjLkEoKTthLmEuZi5zZXQoYixcIl9fa29fX3RlbXBsYXRlU3Vic2NyaXB0aW9uRG9tRGF0YUtleV9fXCIsZyl9fTthLmcuRC50ZW1wbGF0ZT1mdW5jdGlvbihiKXtiPWEuZy5XKGIpO3JldHVybiAxPT1iLmxlbmd0aCYmYlswXS51bmtub3dufHxhLmcud2IoYixcIm5hbWVcIik/czpcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgYW5vbnltb3VzIHRlbXBsYXRlcyBuZXN0ZWQgd2l0aGluIGl0cyB0ZW1wbGF0ZXNcIn07YS5lLkMudGVtcGxhdGU9cH0pKCk7YS5iKFwic2V0VGVtcGxhdGVFbmdpbmVcIixhLnJhKTthLmIoXCJyZW5kZXJUZW1wbGF0ZVwiLGEucWEpOyhmdW5jdGlvbigpe2EuYS5PPWZ1bmN0aW9uKGIsYyxkKXtpZihkPT09bilyZXR1cm4gYS5hLk8oYixjLDEpfHxhLmEuTyhiLGMsMTApfHxhLmEuTyhiLGMsTnVtYmVyLk1BWF9WQUxVRSk7Zm9yKHZhciBiPWJ8fFtdLGM9Y3x8W10sZj1iLGc9YyxlPVtdLGg9MDtoPD1nLmxlbmd0aDtoKyspZVtoXT1cbltdO2Zvcih2YXIgaD0wLGo9TWF0aC5taW4oZi5sZW5ndGgsZCk7aDw9ajtoKyspZVswXVtoXT1oO2g9MTtmb3Ioaj1NYXRoLm1pbihnLmxlbmd0aCxkKTtoPD1qO2grKyllW2hdWzBdPWg7Zm9yKHZhciBqPWYubGVuZ3RoLGssaT1nLmxlbmd0aCxoPTE7aDw9ajtoKyspe2s9TWF0aC5tYXgoMSxoLWQpO2Zvcih2YXIgbD1NYXRoLm1pbihpLGgrZCk7azw9bDtrKyspZVtrXVtoXT1mW2gtMV09PT1nW2stMV0/ZVtrLTFdW2gtMV06TWF0aC5taW4oZVtrLTFdW2hdPT09bj9OdW1iZXIuTUFYX1ZBTFVFOmVbay0xXVtoXSsxLGVba11baC0xXT09PW4/TnVtYmVyLk1BWF9WQUxVRTplW2tdW2gtMV0rMSl9ZD1iLmxlbmd0aDtmPWMubGVuZ3RoO2c9W107aD1lW2ZdW2RdO2lmKGg9PT1uKWU9cztlbHNle2Zvcig7MDxkfHwwPGY7KXtqPWVbZl1bZF07aT0wPGY/ZVtmLTFdW2RdOmgrMTtsPTA8ZD9lW2ZdW2QtMV06aCsxO2s9MDxmJiYwPGQ/ZVtmLTFdW2QtMV06aCsxO2lmKGk9PT1ufHxpPGotMSlpPVxuaCsxO2lmKGw9PT1ufHxsPGotMSlsPWgrMTtrPGotMSYmKGs9aCsxKTtpPD1sJiZpPGs/KGcucHVzaCh7c3RhdHVzOlwiYWRkZWRcIix2YWx1ZTpjW2YtMV19KSxmLS0pOihsPGkmJmw8az9nLnB1c2goe3N0YXR1czpcImRlbGV0ZWRcIix2YWx1ZTpiW2QtMV19KTooZy5wdXNoKHtzdGF0dXM6XCJyZXRhaW5lZFwiLHZhbHVlOmJbZC0xXX0pLGYtLSksZC0tKX1lPWcucmV2ZXJzZSgpfXJldHVybiBlfX0pKCk7YS5iKFwidXRpbHMuY29tcGFyZUFycmF5c1wiLGEuYS5PKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe2lmKDI8YS5sZW5ndGgpe2Zvcih2YXIgYj1hWzBdLGM9YVthLmxlbmd0aC0xXSxlPVtiXTtiIT09Yzspe2I9Yi5uZXh0U2libGluZztpZighYilyZXR1cm47ZS5wdXNoKGIpfUFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYSxbMCxhLmxlbmd0aF0uY29uY2F0KGUpKX19ZnVuY3Rpb24gYyhjLGYsZyxlLGgpe3ZhciBqPVtdLGM9YS5oKGZ1bmN0aW9uKCl7dmFyIGM9ZihnLGgpfHxcbltdOzA8ai5sZW5ndGgmJihiKGopLGEuYS5OYShqLGMpLGUmJmUoZyxjKSk7ai5zcGxpY2UoMCxqLmxlbmd0aCk7YS5hLk4oaixjKX0scyx7ZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOmMsZGlzcG9zZVdoZW46ZnVuY3Rpb24oKXtyZXR1cm4gMD09ai5sZW5ndGh8fCFhLmEuZmEoalswXSl9fSk7cmV0dXJue3hiOmosaDpjfX1hLmEuT2E9ZnVuY3Rpb24oZCxmLGcsZSxoKXtmb3IodmFyIGY9Znx8W10sZT1lfHx7fSxqPWEuYS5mLmdldChkLFwic2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ19sYXN0TWFwcGluZ1Jlc3VsdFwiKT09PW4saz1hLmEuZi5nZXQoZCxcInNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdfbGFzdE1hcHBpbmdSZXN1bHRcIil8fFtdLGk9YS5hLlQoayxmdW5jdGlvbihhKXtyZXR1cm4gYS4kYX0pLGw9YS5hLk8oaSxmKSxmPVtdLHE9MCxvPVtdLHY9MCxpPVtdLHU9cyxyPTAsdz1sLmxlbmd0aDtyPHc7cisrKXN3aXRjaChsW3JdLnN0YXR1cyl7Y2FzZSBcInJldGFpbmVkXCI6dmFyIHk9XG5rW3FdO3kucWIodik7dj1mLnB1c2goeSk7MDx5LlAubGVuZ3RoJiYodT15LlBbeS5QLmxlbmd0aC0xXSk7cSsrO2JyZWFrO2Nhc2UgXCJkZWxldGVkXCI6a1txXS5oLkEoKTtiKGtbcV0uUCk7YS5hLnYoa1txXS5QLGZ1bmN0aW9uKGEpe28ucHVzaCh7ZWxlbWVudDphLGluZGV4OnIsdmFsdWU6bFtyXS52YWx1ZX0pO3U9YX0pO3ErKzticmVhaztjYXNlIFwiYWRkZWRcIjpmb3IodmFyIHk9bFtyXS52YWx1ZSx4PWEubSh2KSx2PWMoZCxnLHksaCx4KSxDPXYueGIsdj1mLnB1c2goeyRhOmxbcl0udmFsdWUsUDpDLGg6di5oLHFiOnh9KSx6PTAsQj1DLmxlbmd0aDt6PEI7eisrKXt2YXIgRD1DW3pdO2kucHVzaCh7ZWxlbWVudDpELGluZGV4OnIsdmFsdWU6bFtyXS52YWx1ZX0pO3U9PXM/YS5lLkthKGQsRCk6YS5lLkZhKGQsRCx1KTt1PUR9aCYmaCh5LEMseCl9YS5hLnYobyxmdW5jdGlvbihiKXthLkYoYi5lbGVtZW50KX0pO2c9dDtpZighail7aWYoZS5hZnRlckFkZClmb3Iocj0wO3I8aS5sZW5ndGg7cisrKWUuYWZ0ZXJBZGQoaVtyXS5lbGVtZW50LFxuaVtyXS5pbmRleCxpW3JdLnZhbHVlKTtpZihlLmJlZm9yZVJlbW92ZSl7Zm9yKHI9MDtyPG8ubGVuZ3RoO3IrKyllLmJlZm9yZVJlbW92ZShvW3JdLmVsZW1lbnQsb1tyXS5pbmRleCxvW3JdLnZhbHVlKTtnPXB9fWlmKCFnJiZvLmxlbmd0aClmb3Iocj0wO3I8by5sZW5ndGg7cisrKWU9b1tyXS5lbGVtZW50LGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpO2EuYS5mLnNldChkLFwic2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ19sYXN0TWFwcGluZ1Jlc3VsdFwiLGYpfX0pKCk7YS5iKFwidXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ1wiLGEuYS5PYSk7YS5xPWZ1bmN0aW9uKCl7dGhpcy5hbGxvd1RlbXBsYXRlUmV3cml0aW5nPXR9O2EucS5wcm90b3R5cGU9bmV3IGEudDthLnEucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIpe3ZhciBjPSEoOT5hLmEuamEpJiZiLm5vZGVzP2Iubm9kZXMoKTpzO1xuaWYoYylyZXR1cm4gYS5hLkwoYy5jbG9uZU5vZGUocCkuY2hpbGROb2Rlcyk7Yj1iLnRleHQoKTtyZXR1cm4gYS5hLnBhKGIpfTthLnEuSz1uZXcgYS5xO2EucmEoYS5xLkspO2EuYihcIm5hdGl2ZVRlbXBsYXRlRW5naW5lXCIsYS5xKTsoZnVuY3Rpb24oKXthLm1hPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52Yj1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnl8fCFqUXVlcnkudG1wbClyZXR1cm4gMDt0cnl7aWYoMDw9alF1ZXJ5LnRtcGwudGFnLnRtcGwub3Blbi50b1N0cmluZygpLmluZGV4T2YoXCJfX1wiKSlyZXR1cm4gMn1jYXRjaChhKXt9cmV0dXJuIDF9KCk7dGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGYsZyl7Zz1nfHx7fTsyPmEmJm0oRXJyb3IoXCJZb3VyIHZlcnNpb24gb2YgalF1ZXJ5LnRtcGwgaXMgdG9vIG9sZC4gUGxlYXNlIHVwZ3JhZGUgdG8galF1ZXJ5LnRtcGwgMS4wLjBwcmUgb3IgbGF0ZXIuXCIpKTt2YXIgZT1iLmRhdGEoXCJwcmVjb21waWxlZFwiKTtcbmV8fChlPWIudGV4dCgpfHxcIlwiLGU9alF1ZXJ5LnRlbXBsYXRlKHMsXCJ7e2tvX3dpdGggJGl0ZW0ua29CaW5kaW5nQ29udGV4dH19XCIrZStcInt7L2tvX3dpdGh9fVwiKSxiLmRhdGEoXCJwcmVjb21waWxlZFwiLGUpKTtiPVtmLiRkYXRhXTtmPWpRdWVyeS5leHRlbmQoe2tvQmluZGluZ0NvbnRleHQ6Zn0sZy50ZW1wbGF0ZU9wdGlvbnMpO2Y9alF1ZXJ5LnRtcGwoZSxiLGYpO2YuYXBwZW5kVG8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7alF1ZXJ5LmZyYWdtZW50cz17fTtyZXR1cm4gZn07dGhpcy5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ7e2tvX2NvZGUgKChmdW5jdGlvbigpIHsgcmV0dXJuIFwiK2ErXCIgfSkoKSkgfX1cIn07dGhpcy5hZGRUZW1wbGF0ZT1mdW5jdGlvbihhLGIpe2RvY3VtZW50LndyaXRlKFwiPHNjcmlwdCB0eXBlPSd0ZXh0L2h0bWwnIGlkPSdcIithK1wiJz5cIitiK1wiPFxcL3NjcmlwdD5cIil9OzA8YSYmKGpRdWVyeS50bXBsLnRhZy5rb19jb2RlPVxue29wZW46XCJfXy5wdXNoKCQxIHx8ICcnKTtcIn0salF1ZXJ5LnRtcGwudGFnLmtvX3dpdGg9e29wZW46XCJ3aXRoKCQxKSB7XCIsY2xvc2U6XCJ9IFwifSl9O2EubWEucHJvdG90eXBlPW5ldyBhLnQ7dmFyIGI9bmV3IGEubWE7MDxiLnZiJiZhLnJhKGIpO2EuYihcImpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZVwiLGEubWEpfSkoKX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcmVxdWlyZSYmXCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9FKG1vZHVsZS5leHBvcnRzfHxleHBvcnRzKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLEUpOkUod2luZG93LmtvPXt9KTtwO1xufSkod2luZG93LGRvY3VtZW50LG5hdmlnYXRvcik7XG4iXX0=
;