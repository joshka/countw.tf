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
		var wtfPerMin = count / mins || 0;
		return wtfPerMin.toFixed(3);
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL3NpdGUvc2NyaXB0cy9hcHAuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9rbm9ja291dC1jbGllbnQva25vY2tvdXQuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL3NpdGUvc2NyaXB0cy92aWV3TW9kZWwuanMiLCIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9kYXRlanMvbGliL2RhdGUuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9rbm9ja291dC1tYXBwaW5nL2luZGV4LmpzIiwiL1VzZXJzL2pvc2hrYS9Db2RlL2NvdW50dy50Zi9ub2RlX21vZHVsZXMva25vY2tvdXQtbWFwcGluZy9ub2RlX21vZHVsZXMva25vY2tvdXQtY2xpZW50L2tub2Nrb3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3J3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGtvID0gcmVxdWlyZSgna25vY2tvdXQtY2xpZW50JyksXG5cdHZtID0gcmVxdWlyZSgnLi92aWV3TW9kZWwnKTtcblxua28uYXBwbHlCaW5kaW5ncyh2bSk7IiwiLy8gS25vY2tvdXQgSmF2YVNjcmlwdCBsaWJyYXJ5IHYyLjIuMVxuLy8gKGMpIFN0ZXZlbiBTYW5kZXJzb24gLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4vLyBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuXG4oZnVuY3Rpb24oKSB7ZnVuY3Rpb24gaih3KXt0aHJvdyB3O312YXIgbT0hMCxwPW51bGwscj0hMTtmdW5jdGlvbiB1KHcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB3fX07dmFyIHg9d2luZG93LHk9ZG9jdW1lbnQsZ2E9bmF2aWdhdG9yLEY9d2luZG93LmpRdWVyeSxJPXZvaWQgMDtcbmZ1bmN0aW9uIEwodyl7ZnVuY3Rpb24gaGEoYSxkLGMsZSxmKXt2YXIgZz1bXTthPWIuaihmdW5jdGlvbigpe3ZhciBhPWQoYyxmKXx8W107MDxnLmxlbmd0aCYmKGIuYS5ZYShNKGcpLGEpLGUmJmIuci5LKGUscCxbYyxhLGZdKSk7Zy5zcGxpY2UoMCxnLmxlbmd0aCk7Yi5hLlAoZyxhKX0scCx7VzphLEthOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PWcubGVuZ3RofHwhYi5hLlgoZ1swXSl9fSk7cmV0dXJue006ZyxqOmEucGEoKT9hOkl9fWZ1bmN0aW9uIE0oYSl7Zm9yKDthLmxlbmd0aCYmIWIuYS5YKGFbMF0pOylhLnNwbGljZSgwLDEpO2lmKDE8YS5sZW5ndGgpe2Zvcih2YXIgZD1hWzBdLGM9YVthLmxlbmd0aC0xXSxlPVtkXTtkIT09Yzspe2Q9ZC5uZXh0U2libGluZztpZighZClyZXR1cm47ZS5wdXNoKGQpfUFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYSxbMCxhLmxlbmd0aF0uY29uY2F0KGUpKX1yZXR1cm4gYX1mdW5jdGlvbiBTKGEsYixjLGUsZil7dmFyIGc9TWF0aC5taW4sXG5oPU1hdGgubWF4LGs9W10sbCxuPWEubGVuZ3RoLHEscz1iLmxlbmd0aCx2PXMtbnx8MSxHPW4rcysxLEosQSx6O2ZvcihsPTA7bDw9bjtsKyspe0E9SjtrLnB1c2goSj1bXSk7ej1nKHMsbCt2KTtmb3IocT1oKDAsbC0xKTtxPD16O3ErKylKW3FdPXE/bD9hW2wtMV09PT1iW3EtMV0/QVtxLTFdOmcoQVtxXXx8RyxKW3EtMV18fEcpKzE6cSsxOmwrMX1nPVtdO2g9W107dj1bXTtsPW47Zm9yKHE9cztsfHxxOylzPWtbbF1bcV0tMSxxJiZzPT09a1tsXVtxLTFdP2gucHVzaChnW2cubGVuZ3RoXT17c3RhdHVzOmMsdmFsdWU6YlstLXFdLGluZGV4OnF9KTpsJiZzPT09a1tsLTFdW3FdP3YucHVzaChnW2cubGVuZ3RoXT17c3RhdHVzOmUsdmFsdWU6YVstLWxdLGluZGV4Omx9KTooZy5wdXNoKHtzdGF0dXM6XCJyZXRhaW5lZFwiLHZhbHVlOmJbLS1xXX0pLC0tbCk7aWYoaC5sZW5ndGgmJnYubGVuZ3RoKXthPTEwKm47dmFyIHQ7Zm9yKGI9Yz0wOyhmfHxiPGEpJiYodD1oW2NdKTtjKyspe2ZvcihlPVxuMDtrPXZbZV07ZSsrKWlmKHQudmFsdWU9PT1rLnZhbHVlKXt0Lm1vdmVkPWsuaW5kZXg7ay5tb3ZlZD10LmluZGV4O3Yuc3BsaWNlKGUsMSk7Yj1lPTA7YnJlYWt9Yis9ZX19cmV0dXJuIGcucmV2ZXJzZSgpfWZ1bmN0aW9uIFQoYSxkLGMsZSxmKXtmPWZ8fHt9O3ZhciBnPWEmJk4oYSksZz1nJiZnLm93bmVyRG9jdW1lbnQsaD1mLnRlbXBsYXRlRW5naW5lfHxPO2IuemEudmIoYyxoLGcpO2M9aC5yZW5kZXJUZW1wbGF0ZShjLGUsZixnKTsoXCJudW1iZXJcIiE9dHlwZW9mIGMubGVuZ3RofHwwPGMubGVuZ3RoJiZcIm51bWJlclwiIT10eXBlb2YgY1swXS5ub2RlVHlwZSkmJmooRXJyb3IoXCJUZW1wbGF0ZSBlbmdpbmUgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgRE9NIG5vZGVzXCIpKTtnPXI7c3dpdGNoKGQpe2Nhc2UgXCJyZXBsYWNlQ2hpbGRyZW5cIjpiLmUuTihhLGMpO2c9bTticmVhaztjYXNlIFwicmVwbGFjZU5vZGVcIjpiLmEuWWEoYSxjKTtnPW07YnJlYWs7Y2FzZSBcImlnbm9yZVRhcmdldE5vZGVcIjpicmVhaztcbmRlZmF1bHQ6aihFcnJvcihcIlVua25vd24gcmVuZGVyTW9kZTogXCIrZCkpfWcmJihVKGMsZSksZi5hZnRlclJlbmRlciYmYi5yLksoZi5hZnRlclJlbmRlcixwLFtjLGUuJGRhdGFdKSk7cmV0dXJuIGN9ZnVuY3Rpb24gTihhKXtyZXR1cm4gYS5ub2RlVHlwZT9hOjA8YS5sZW5ndGg/YVswXTpwfWZ1bmN0aW9uIFUoYSxkKXtpZihhLmxlbmd0aCl7dmFyIGM9YVswXSxlPWFbYS5sZW5ndGgtMV07VihjLGUsZnVuY3Rpb24oYSl7Yi5EYShkLGEpfSk7VihjLGUsZnVuY3Rpb24oYSl7Yi5zLmliKGEsW2RdKX0pfX1mdW5jdGlvbiBWKGEsZCxjKXt2YXIgZTtmb3IoZD1iLmUubmV4dFNpYmxpbmcoZCk7YSYmKGU9YSkhPT1kOylhPWIuZS5uZXh0U2libGluZyhlKSwoMT09PWUubm9kZVR5cGV8fDg9PT1lLm5vZGVUeXBlKSYmYyhlKX1mdW5jdGlvbiBXKGEsZCxjKXthPWIuZy5hYShhKTtmb3IodmFyIGU9Yi5nLlEsZj0wO2Y8YS5sZW5ndGg7ZisrKXt2YXIgZz1hW2ZdLmtleTtpZihlLmhhc093blByb3BlcnR5KGcpKXt2YXIgaD1cbmVbZ107XCJmdW5jdGlvblwiPT09dHlwZW9mIGg/KGc9aChhW2ZdLnZhbHVlKSkmJmooRXJyb3IoZykpOmh8fGooRXJyb3IoXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnXCIrZytcIicgYmluZGluZyB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiKSl9fWE9XCJrby5fX3RyX2FtYnRucyhmdW5jdGlvbigkY29udGV4dCwkZWxlbWVudCl7cmV0dXJuKGZ1bmN0aW9uKCl7cmV0dXJueyBcIitiLmcuYmEoYSkrXCIgfSB9KSgpfSlcIjtyZXR1cm4gYy5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2soYSkrZH1mdW5jdGlvbiBYKGEsZCxjLGUpe2Z1bmN0aW9uIGYoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGtbYV19fWZ1bmN0aW9uIGcoKXtyZXR1cm4ga312YXIgaD0wLGssbDtiLmooZnVuY3Rpb24oKXt2YXIgbj1jJiZjIGluc3RhbmNlb2YgYi56P2M6bmV3IGIueihiLmEuZChjKSkscT1uLiRkYXRhO2UmJmIuZWIoYSxuKTtpZihrPShcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP1xuZChuLGEpOmQpfHxiLkouaW5zdGFuY2UuZ2V0QmluZGluZ3MoYSxuKSl7aWYoMD09PWgpe2g9MTtmb3IodmFyIHMgaW4gayl7dmFyIHY9Yi5jW3NdO3YmJjg9PT1hLm5vZGVUeXBlJiYhYi5lLklbc10mJmooRXJyb3IoXCJUaGUgYmluZGluZyAnXCIrcytcIicgY2Fubm90IGJlIHVzZWQgd2l0aCB2aXJ0dWFsIGVsZW1lbnRzXCIpKTtpZih2JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2LmluaXQmJih2PSgwLHYuaW5pdCkoYSxmKHMpLGcscSxuKSkmJnYuY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MpbCE9PUkmJmooRXJyb3IoXCJNdWx0aXBsZSBiaW5kaW5ncyAoXCIrbCtcIiBhbmQgXCIrcytcIikgYXJlIHRyeWluZyB0byBjb250cm9sIGRlc2NlbmRhbnQgYmluZGluZ3Mgb2YgdGhlIHNhbWUgZWxlbWVudC4gWW91IGNhbm5vdCB1c2UgdGhlc2UgYmluZGluZ3MgdG9nZXRoZXIgb24gdGhlIHNhbWUgZWxlbWVudC5cIikpLGw9c31oPTJ9aWYoMj09PWgpZm9yKHMgaW4gaykodj1iLmNbc10pJiZcImZ1bmN0aW9uXCI9PVxudHlwZW9mIHYudXBkYXRlJiYoMCx2LnVwZGF0ZSkoYSxmKHMpLGcscSxuKX19LHAse1c6YX0pO3JldHVybntOYjpsPT09SX19ZnVuY3Rpb24gWShhLGQsYyl7dmFyIGU9bSxmPTE9PT1kLm5vZGVUeXBlO2YmJmIuZS5UYShkKTtpZihmJiZjfHxiLkouaW5zdGFuY2Uubm9kZUhhc0JpbmRpbmdzKGQpKWU9WChkLHAsYSxjKS5OYjtlJiZaKGEsZCwhZil9ZnVuY3Rpb24gWihhLGQsYyl7Zm9yKHZhciBlPWIuZS5maXJzdENoaWxkKGQpO2Q9ZTspZT1iLmUubmV4dFNpYmxpbmcoZCksWShhLGQsYyl9ZnVuY3Rpb24gJChhLGIpe3ZhciBjPWFhKGEsYik7cmV0dXJuIGM/MDxjLmxlbmd0aD9jW2MubGVuZ3RoLTFdLm5leHRTaWJsaW5nOmEubmV4dFNpYmxpbmc6cH1mdW5jdGlvbiBhYShhLGIpe2Zvcih2YXIgYz1hLGU9MSxmPVtdO2M9Yy5uZXh0U2libGluZzspe2lmKEgoYykmJihlLS0sMD09PWUpKXJldHVybiBmO2YucHVzaChjKTtCKGMpJiZlKyt9Ynx8aihFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiK1xuYS5ub2RlVmFsdWUpKTtyZXR1cm4gcH1mdW5jdGlvbiBIKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoSz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGlhKX1mdW5jdGlvbiBCKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoSz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGphKX1mdW5jdGlvbiBQKGEsYil7Zm9yKHZhciBjPXA7YSE9YzspYz1hLGE9YS5yZXBsYWNlKGthLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGJbY119KTtyZXR1cm4gYX1mdW5jdGlvbiBsYSgpe3ZhciBhPVtdLGQ9W107dGhpcy5zYXZlPWZ1bmN0aW9uKGMsZSl7dmFyIGY9Yi5hLmkoYSxjKTswPD1mP2RbZl09ZTooYS5wdXNoKGMpLGQucHVzaChlKSl9O3RoaXMuZ2V0PWZ1bmN0aW9uKGMpe2M9Yi5hLmkoYSxjKTtyZXR1cm4gMDw9Yz9kW2NdOkl9fWZ1bmN0aW9uIGJhKGEsYixjKXtmdW5jdGlvbiBlKGUpe3ZhciBnPWIoYVtlXSk7c3dpdGNoKHR5cGVvZiBnKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcImZ1bmN0aW9uXCI6ZltlXT1cbmc7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJ1bmRlZmluZWRcIjp2YXIgaD1jLmdldChnKTtmW2VdPWghPT1JP2g6YmEoZyxiLGMpfX1jPWN8fG5ldyBsYTthPWIoYSk7aWYoIShcIm9iamVjdFwiPT10eXBlb2YgYSYmYSE9PXAmJmEhPT1JJiYhKGEgaW5zdGFuY2VvZiBEYXRlKSkpcmV0dXJuIGE7dmFyIGY9YSBpbnN0YW5jZW9mIEFycmF5P1tdOnt9O2Muc2F2ZShhLGYpO3ZhciBnPWE7aWYoZyBpbnN0YW5jZW9mIEFycmF5KXtmb3IodmFyIGg9MDtoPGcubGVuZ3RoO2grKyllKGgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGcudG9KU09OJiZlKFwidG9KU09OXCIpfWVsc2UgZm9yKGggaW4gZyllKGgpO3JldHVybiBmfWZ1bmN0aW9uIGNhKGEsZCl7aWYoYSlpZig4PT1hLm5vZGVUeXBlKXt2YXIgYz1iLnMuVWEoYS5ub2RlVmFsdWUpO2MhPXAmJmQucHVzaCh7c2I6YSxGYjpjfSl9ZWxzZSBpZigxPT1hLm5vZGVUeXBlKWZvcih2YXIgYz0wLGU9YS5jaGlsZE5vZGVzLGY9ZS5sZW5ndGg7YzxmO2MrKyljYShlW2NdLFxuZCl9ZnVuY3Rpb24gUShhLGQsYyxlKXtiLmNbYV09e2luaXQ6ZnVuY3Rpb24oYSl7Yi5hLmYuc2V0KGEsZGEse30pO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczptfX0sdXBkYXRlOmZ1bmN0aW9uKGEsZyxoLGssbCl7aD1iLmEuZi5nZXQoYSxkYSk7Zz1iLmEuZChnKCkpO2s9IWMhPT0hZzt2YXIgbj0haC5aYTtpZihufHxkfHxrIT09aC5xYiluJiYoaC5aYT1iLmEuSWEoYi5lLmNoaWxkTm9kZXMoYSksbSkpLGs/KG58fGIuZS5OKGEsYi5hLklhKGguWmEpKSxiLkVhKGU/ZShsLGcpOmwsYSkpOmIuZS5ZKGEpLGgucWI9a319O2IuZy5RW2FdPXI7Yi5lLklbYV09bX1mdW5jdGlvbiBlYShhLGQsYyl7YyYmZCE9PWIuay5xKGEpJiZiLmsuVChhLGQpO2QhPT1iLmsucShhKSYmYi5yLksoYi5hLkJhLHAsW2EsXCJjaGFuZ2VcIl0pfXZhciBiPVwidW5kZWZpbmVkXCIhPT10eXBlb2Ygdz93Ont9O2IuYj1mdW5jdGlvbihhLGQpe2Zvcih2YXIgYz1hLnNwbGl0KFwiLlwiKSxlPWIsZj0wO2Y8XG5jLmxlbmd0aC0xO2YrKyllPWVbY1tmXV07ZVtjW2MubGVuZ3RoLTFdXT1kfTtiLnA9ZnVuY3Rpb24oYSxiLGMpe2FbYl09Y307Yi52ZXJzaW9uPVwiMi4yLjFcIjtiLmIoXCJ2ZXJzaW9uXCIsYi52ZXJzaW9uKTtiLmE9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGQpe2lmKFwiaW5wdXRcIiE9PWIuYS51KGEpfHwhYS50eXBlfHxcImNsaWNrXCIhPWQudG9Mb3dlckNhc2UoKSlyZXR1cm4gcjt2YXIgYz1hLnR5cGU7cmV0dXJuXCJjaGVja2JveFwiPT1jfHxcInJhZGlvXCI9PWN9dmFyIGQ9L14oXFxzfFxcdTAwQTApK3woXFxzfFxcdTAwQTApKyQvZyxjPXt9LGU9e307Y1svRmlyZWZveFxcLzIvaS50ZXN0KGdhLnVzZXJBZ2VudCk/XCJLZXlib2FyZEV2ZW50XCI6XCJVSUV2ZW50c1wiXT1bXCJrZXl1cFwiLFwia2V5ZG93blwiLFwia2V5cHJlc3NcIl07Yy5Nb3VzZUV2ZW50cz1cImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIuc3BsaXQoXCIgXCIpO1xuZm9yKHZhciBmIGluIGMpe3ZhciBnPWNbZl07aWYoZy5sZW5ndGgpZm9yKHZhciBoPTAsaz1nLmxlbmd0aDtoPGs7aCsrKWVbZ1toXV09Zn12YXIgbD17cHJvcGVydHljaGFuZ2U6bX0sbixjPTM7Zj15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGc9Zi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlcIik7Zi5pbm5lckhUTUw9XCJcXHgzYyEtLVtpZiBndCBJRSBcIisgKytjK1wiXT48aT48L2k+PCFbZW5kaWZdLS1cXHgzZVwiLGdbMF07KTtuPTQ8Yz9jOkk7cmV0dXJue05hOltcImF1dGhlbnRpY2l0eV90b2tlblwiLC9eX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4oXy4qKT8kL10sbzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgZD0wLGM9YS5sZW5ndGg7ZDxjO2QrKyliKGFbZF0pfSxpOmZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmluZGV4T2YpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiKTtmb3IodmFyIGQ9MCxjPWEubGVuZ3RoO2Q8XG5jO2QrKylpZihhW2RdPT09YilyZXR1cm4gZDtyZXR1cm4tMX0sbGI6ZnVuY3Rpb24oYSxiLGQpe2Zvcih2YXIgYz0wLGU9YS5sZW5ndGg7YzxlO2MrKylpZihiLmNhbGwoZCxhW2NdKSlyZXR1cm4gYVtjXTtyZXR1cm4gcH0sZ2E6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuaShhLGQpOzA8PWMmJmEuc3BsaWNlKGMsMSl9LEdhOmZ1bmN0aW9uKGEpe2E9YXx8W107Zm9yKHZhciBkPVtdLGM9MCxlPWEubGVuZ3RoO2M8ZTtjKyspMD5iLmEuaShkLGFbY10pJiZkLnB1c2goYVtjXSk7cmV0dXJuIGR9LFY6ZnVuY3Rpb24oYSxiKXthPWF8fFtdO2Zvcih2YXIgZD1bXSxjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWQucHVzaChiKGFbY10pKTtyZXR1cm4gZH0sZmE6ZnVuY3Rpb24oYSxiKXthPWF8fFtdO2Zvcih2YXIgZD1bXSxjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWIoYVtjXSkmJmQucHVzaChhW2NdKTtyZXR1cm4gZH0sUDpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxcbmIpO2Vsc2UgZm9yKHZhciBkPTAsYz1iLmxlbmd0aDtkPGM7ZCsrKWEucHVzaChiW2RdKTtyZXR1cm4gYX0sZXh0ZW5kOmZ1bmN0aW9uKGEsYil7aWYoYilmb3IodmFyIGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiYoYVtkXT1iW2RdKTtyZXR1cm4gYX0sa2E6ZnVuY3Rpb24oYSl7Zm9yKDthLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlTm9kZShhLmZpcnN0Q2hpbGQpfSxIYjpmdW5jdGlvbihhKXthPWIuYS5MKGEpO2Zvcih2YXIgZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz0wLGU9YS5sZW5ndGg7YzxlO2MrKylkLmFwcGVuZENoaWxkKGIuQShhW2NdKSk7cmV0dXJuIGR9LElhOmZ1bmN0aW9uKGEsZCl7Zm9yKHZhciBjPTAsZT1hLmxlbmd0aCxnPVtdO2M8ZTtjKyspe3ZhciBmPWFbY10uY2xvbmVOb2RlKG0pO2cucHVzaChkP2IuQShmKTpmKX1yZXR1cm4gZ30sTjpmdW5jdGlvbihhLGQpe2IuYS5rYShhKTtpZihkKWZvcih2YXIgYz0wLGU9ZC5sZW5ndGg7YzxlO2MrKylhLmFwcGVuZENoaWxkKGRbY10pfSxcbllhOmZ1bmN0aW9uKGEsZCl7dmFyIGM9YS5ub2RlVHlwZT9bYV06YTtpZigwPGMubGVuZ3RoKXtmb3IodmFyIGU9Y1swXSxnPWUucGFyZW50Tm9kZSxmPTAsaD1kLmxlbmd0aDtmPGg7ZisrKWcuaW5zZXJ0QmVmb3JlKGRbZl0sZSk7Zj0wO2ZvcihoPWMubGVuZ3RoO2Y8aDtmKyspYi5yZW1vdmVOb2RlKGNbZl0pfX0sYmI6ZnVuY3Rpb24oYSxiKXs3Pm4/YS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLGIpOmEuc2VsZWN0ZWQ9Yn0sRDpmdW5jdGlvbihhKXtyZXR1cm4oYXx8XCJcIikucmVwbGFjZShkLFwiXCIpfSxSYjpmdW5jdGlvbihhLGQpe2Zvcih2YXIgYz1bXSxlPShhfHxcIlwiKS5zcGxpdChkKSxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKXt2YXIgaD1iLmEuRChlW2ZdKTtcIlwiIT09aCYmYy5wdXNoKGgpfXJldHVybiBjfSxPYjpmdW5jdGlvbihhLGIpe2E9YXx8XCJcIjtyZXR1cm4gYi5sZW5ndGg+YS5sZW5ndGg/cjphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LHRiOmZ1bmN0aW9uKGEsYil7aWYoYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbilyZXR1cm4gMTY9PVxuKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSkmMTYpO2Zvcig7YSE9cDspe2lmKGE9PWIpcmV0dXJuIG07YT1hLnBhcmVudE5vZGV9cmV0dXJuIHJ9LFg6ZnVuY3Rpb24oYSl7cmV0dXJuIGIuYS50YihhLGEub3duZXJEb2N1bWVudCl9LHU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LG46ZnVuY3Rpb24oYixkLGMpe3ZhciBlPW4mJmxbZF07aWYoIWUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKXtpZihhKGIsZCkpe3ZhciBmPWM7Yz1mdW5jdGlvbihhLGIpe3ZhciBkPXRoaXMuY2hlY2tlZDtiJiYodGhpcy5jaGVja2VkPWIubmIhPT1tKTtmLmNhbGwodGhpcyxhKTt0aGlzLmNoZWNrZWQ9ZH19RihiKS5iaW5kKGQsYyl9ZWxzZSFlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmFkZEV2ZW50TGlzdGVuZXI/Yi5hZGRFdmVudExpc3RlbmVyKGQsYyxyKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5hdHRhY2hFdmVudD9iLmF0dGFjaEV2ZW50KFwib25cIitcbmQsZnVuY3Rpb24oYSl7Yy5jYWxsKGIsYSl9KTpqKEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYWRkRXZlbnRMaXN0ZW5lciBvciBhdHRhY2hFdmVudFwiKSl9LEJhOmZ1bmN0aW9uKGIsZCl7KCFifHwhYi5ub2RlVHlwZSkmJmooRXJyb3IoXCJlbGVtZW50IG11c3QgYmUgYSBET00gbm9kZSB3aGVuIGNhbGxpbmcgdHJpZ2dlckV2ZW50XCIpKTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgRil7dmFyIGM9W107YShiLGQpJiZjLnB1c2goe25iOmIuY2hlY2tlZH0pO0YoYikudHJpZ2dlcihkLGMpfWVsc2VcImZ1bmN0aW9uXCI9PXR5cGVvZiB5LmNyZWF0ZUV2ZW50P1wiZnVuY3Rpb25cIj09dHlwZW9mIGIuZGlzcGF0Y2hFdmVudD8oYz15LmNyZWF0ZUV2ZW50KGVbZF18fFwiSFRNTEV2ZW50c1wiKSxjLmluaXRFdmVudChkLG0sbSx4LDAsMCwwLDAsMCxyLHIscixyLDAsYiksYi5kaXNwYXRjaEV2ZW50KGMpKTpqKEVycm9yKFwiVGhlIHN1cHBsaWVkIGVsZW1lbnQgZG9lc24ndCBzdXBwb3J0IGRpc3BhdGNoRXZlbnRcIikpOlxuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZmlyZUV2ZW50PyhhKGIsZCkmJihiLmNoZWNrZWQ9Yi5jaGVja2VkIT09bSksYi5maXJlRXZlbnQoXCJvblwiK2QpKTpqKEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdHJpZ2dlcmluZyBldmVudHNcIikpfSxkOmZ1bmN0aW9uKGEpe3JldHVybiBiLiQoYSk/YSgpOmF9LHVhOmZ1bmN0aW9uKGEpe3JldHVybiBiLiQoYSk/YS50KCk6YX0sZGE6ZnVuY3Rpb24oYSxkLGMpe2lmKGQpe3ZhciBlPS9bXFx3LV0rL2csZj1hLmNsYXNzTmFtZS5tYXRjaChlKXx8W107Yi5hLm8oZC5tYXRjaChlKSxmdW5jdGlvbihhKXt2YXIgZD1iLmEuaShmLGEpOzA8PWQ/Y3x8Zi5zcGxpY2UoZCwxKTpjJiZmLnB1c2goYSl9KTthLmNsYXNzTmFtZT1mLmpvaW4oXCIgXCIpfX0sY2I6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKTtpZihjPT09cHx8Yz09PUkpYz1cIlwiO2lmKDM9PT1hLm5vZGVUeXBlKWEuZGF0YT1jO2Vsc2V7dmFyIGU9Yi5lLmZpcnN0Q2hpbGQoYSk7XG4hZXx8MyE9ZS5ub2RlVHlwZXx8Yi5lLm5leHRTaWJsaW5nKGUpP2IuZS5OKGEsW3kuY3JlYXRlVGV4dE5vZGUoYyldKTplLmRhdGE9YztiLmEud2IoYSl9fSxhYjpmdW5jdGlvbihhLGIpe2EubmFtZT1iO2lmKDc+PW4pdHJ5e2EubWVyZ2VBdHRyaWJ1dGVzKHkuY3JlYXRlRWxlbWVudChcIjxpbnB1dCBuYW1lPSdcIithLm5hbWUrXCInLz5cIikscil9Y2F0Y2goZCl7fX0sd2I6ZnVuY3Rpb24oYSl7OTw9biYmKGE9MT09YS5ub2RlVHlwZT9hOmEucGFyZW50Tm9kZSxhLnN0eWxlJiYoYS5zdHlsZS56b29tPWEuc3R5bGUuem9vbSkpfSx1YjpmdW5jdGlvbihhKXtpZig5PD1uKXt2YXIgYj1hLnN0eWxlLndpZHRoO2Euc3R5bGUud2lkdGg9MDthLnN0eWxlLndpZHRoPWJ9fSxMYjpmdW5jdGlvbihhLGQpe2E9Yi5hLmQoYSk7ZD1iLmEuZChkKTtmb3IodmFyIGM9W10sZT1hO2U8PWQ7ZSsrKWMucHVzaChlKTtyZXR1cm4gY30sTDpmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sZD0wLGM9YS5sZW5ndGg7ZDxcbmM7ZCsrKWIucHVzaChhW2RdKTtyZXR1cm4gYn0sUGI6Nj09PW4sUWI6Nz09PW4sWjpuLE9hOmZ1bmN0aW9uKGEsZCl7Zm9yKHZhciBjPWIuYS5MKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGIuYS5MKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKSkpLGU9XCJzdHJpbmdcIj09dHlwZW9mIGQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZT09PWR9OmZ1bmN0aW9uKGEpe3JldHVybiBkLnRlc3QoYS5uYW1lKX0sZj1bXSxnPWMubGVuZ3RoLTE7MDw9ZztnLS0pZShjW2ddKSYmZi5wdXNoKGNbZ10pO3JldHVybiBmfSxJYjpmdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYSYmKGE9Yi5hLkQoYSkpP3guSlNPTiYmeC5KU09OLnBhcnNlP3guSlNPTi5wYXJzZShhKToobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiK2EpKSgpOnB9LHhhOmZ1bmN0aW9uKGEsZCxjKXsoXCJ1bmRlZmluZWRcIj09dHlwZW9mIEpTT058fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBKU09OLnN0cmluZ2lmeSkmJlxuaihFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpKTtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoYi5hLmQoYSksZCxjKX0sSmI6ZnVuY3Rpb24oYSxkLGMpe2M9Y3x8e307dmFyIGU9Yy5wYXJhbXN8fHt9LGY9Yy5pbmNsdWRlRmllbGRzfHx0aGlzLk5hLGc9YTtpZihcIm9iamVjdFwiPT10eXBlb2YgYSYmXCJmb3JtXCI9PT1iLmEudShhKSlmb3IodmFyIGc9YS5hY3Rpb24saD1mLmxlbmd0aC0xOzA8PWg7aC0tKWZvcih2YXIgaz1iLmEuT2EoYSxmW2hdKSxsPWsubGVuZ3RoLTE7MDw9bDtsLS0pZVtrW2xdLm5hbWVdPWtbbF0udmFsdWU7ZD1iLmEuZChkKTt2YXIgbj15LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xubi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO24uYWN0aW9uPWc7bi5tZXRob2Q9XCJwb3N0XCI7Zm9yKHZhciB3IGluIGQpYT15LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLm5hbWU9dyxhLnZhbHVlPWIuYS54YShiLmEuZChkW3ddKSksbi5hcHBlbmRDaGlsZChhKTtmb3IodyBpbiBlKWE9eS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS5uYW1lPXcsYS52YWx1ZT1lW3ddLG4uYXBwZW5kQ2hpbGQoYSk7eS5ib2R5LmFwcGVuZENoaWxkKG4pO2Muc3VibWl0dGVyP2Muc3VibWl0dGVyKG4pOm4uc3VibWl0KCk7c2V0VGltZW91dChmdW5jdGlvbigpe24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKX0sMCl9fX07Yi5iKFwidXRpbHNcIixiLmEpO2IuYihcInV0aWxzLmFycmF5Rm9yRWFjaFwiLGIuYS5vKTtiLmIoXCJ1dGlscy5hcnJheUZpcnN0XCIsYi5hLmxiKTtiLmIoXCJ1dGlscy5hcnJheUZpbHRlclwiLGIuYS5mYSk7Yi5iKFwidXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlc1wiLGIuYS5HYSk7Yi5iKFwidXRpbHMuYXJyYXlJbmRleE9mXCIsXG5iLmEuaSk7Yi5iKFwidXRpbHMuYXJyYXlNYXBcIixiLmEuVik7Yi5iKFwidXRpbHMuYXJyYXlQdXNoQWxsXCIsYi5hLlApO2IuYihcInV0aWxzLmFycmF5UmVtb3ZlSXRlbVwiLGIuYS5nYSk7Yi5iKFwidXRpbHMuZXh0ZW5kXCIsYi5hLmV4dGVuZCk7Yi5iKFwidXRpbHMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3RcIixiLmEuTmEpO2IuYihcInV0aWxzLmdldEZvcm1GaWVsZHNcIixiLmEuT2EpO2IuYihcInV0aWxzLnBlZWtPYnNlcnZhYmxlXCIsYi5hLnVhKTtiLmIoXCJ1dGlscy5wb3N0SnNvblwiLGIuYS5KYik7Yi5iKFwidXRpbHMucGFyc2VKc29uXCIsYi5hLkliKTtiLmIoXCJ1dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlclwiLGIuYS5uKTtiLmIoXCJ1dGlscy5zdHJpbmdpZnlKc29uXCIsYi5hLnhhKTtiLmIoXCJ1dGlscy5yYW5nZVwiLGIuYS5MYik7Yi5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYi5hLmRhKTtiLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixiLmEuQmEpO2IuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixcbmIuYS5kKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO2E9Yy5zaGlmdCgpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBiLmFwcGx5KGEsYy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpfX0pO2IuYS5mPW5ldyBmdW5jdGlvbigpe3ZhciBhPTAsZD1cIl9fa29fX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGM9e307cmV0dXJue2dldDpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5mLmxhKGEscik7cmV0dXJuIGM9PT1JP0k6Y1tkXX0sc2V0OmZ1bmN0aW9uKGEsZCxjKXtjPT09SSYmYi5hLmYubGEoYSxyKT09PUl8fChiLmEuZi5sYShhLG0pW2RdPWMpfSxsYTpmdW5jdGlvbihiLGYpe3ZhciBnPWJbZF07aWYoIWd8fCEoXCJudWxsXCIhPT1nJiZjW2ddKSl7aWYoIWYpcmV0dXJuIEk7Zz1iW2RdPVwia29cIitcbmErKztjW2ddPXt9fXJldHVybiBjW2ddfSxjbGVhcjpmdW5jdGlvbihhKXt2YXIgYj1hW2RdO3JldHVybiBiPyhkZWxldGUgY1tiXSxhW2RdPXAsbSk6cn19fTtiLmIoXCJ1dGlscy5kb21EYXRhXCIsYi5hLmYpO2IuYihcInV0aWxzLmRvbURhdGEuY2xlYXJcIixiLmEuZi5jbGVhcik7Yi5hLkY9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGQpe3ZhciBlPWIuYS5mLmdldChhLGMpO2U9PT1JJiZkJiYoZT1bXSxiLmEuZi5zZXQoYSxjLGUpKTtyZXR1cm4gZX1mdW5jdGlvbiBkKGMpe3ZhciBlPWEoYyxyKTtpZihlKWZvcih2YXIgZT1lLnNsaWNlKDApLGs9MDtrPGUubGVuZ3RoO2srKyllW2tdKGMpO2IuYS5mLmNsZWFyKGMpO1wiZnVuY3Rpb25cIj09dHlwZW9mIEYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEYuY2xlYW5EYXRhJiZGLmNsZWFuRGF0YShbY10pO2lmKGZbYy5ub2RlVHlwZV0pZm9yKGU9Yy5maXJzdENoaWxkO2M9ZTspZT1jLm5leHRTaWJsaW5nLDg9PT1jLm5vZGVUeXBlJiZkKGMpfVxudmFyIGM9XCJfX2tvX2RvbU5vZGVEaXNwb3NhbF9fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZT17MTptLDg6bSw5Om19LGY9ezE6bSw5Om19O3JldHVybntDYTpmdW5jdGlvbihiLGQpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGQmJmooRXJyb3IoXCJDYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2EoYixtKS5wdXNoKGQpfSxYYTpmdW5jdGlvbihkLGUpe3ZhciBmPWEoZCxyKTtmJiYoYi5hLmdhKGYsZSksMD09Zi5sZW5ndGgmJmIuYS5mLnNldChkLGMsSSkpfSxBOmZ1bmN0aW9uKGEpe2lmKGVbYS5ub2RlVHlwZV0mJihkKGEpLGZbYS5ub2RlVHlwZV0pKXt2YXIgYz1bXTtiLmEuUChjLGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKTtmb3IodmFyIGs9MCxsPWMubGVuZ3RoO2s8bDtrKyspZChjW2tdKX1yZXR1cm4gYX0scmVtb3ZlTm9kZTpmdW5jdGlvbihhKXtiLkEoYSk7YS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSl9fX07Yi5BPWIuYS5GLkE7Yi5yZW1vdmVOb2RlPVxuYi5hLkYucmVtb3ZlTm9kZTtiLmIoXCJjbGVhbk5vZGVcIixiLkEpO2IuYihcInJlbW92ZU5vZGVcIixiLnJlbW92ZU5vZGUpO2IuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbFwiLGIuYS5GKTtiLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrXCIsYi5hLkYuQ2EpO2IuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2tcIixiLmEuRi5YYSk7Yi5hLnRhPWZ1bmN0aW9uKGEpe3ZhciBkO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKWlmKEYucGFyc2VIVE1MKWQ9Ri5wYXJzZUhUTUwoYSk7ZWxzZXtpZigoZD1GLmNsZWFuKFthXSkpJiZkWzBdKXtmb3IoYT1kWzBdO2EucGFyZW50Tm9kZSYmMTEhPT1hLnBhcmVudE5vZGUubm9kZVR5cGU7KWE9YS5wYXJlbnROb2RlO2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfX1lbHNle3ZhciBjPWIuYS5EKGEpLnRvTG93ZXJDYXNlKCk7ZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jPWMubWF0Y2goL148KHRoZWFkfHRib2R5fHRmb290KS8pJiZbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdfHwhYy5pbmRleE9mKFwiPHRyXCIpJiZbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdfHwoIWMuaW5kZXhPZihcIjx0ZFwiKXx8IWMuaW5kZXhPZihcIjx0aFwiKSkmJlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl18fFswLFwiXCIsXCJcIl07YT1cImlnbm9yZWQ8ZGl2PlwiK2NbMV0rYStjWzJdK1wiPC9kaXY+XCI7Zm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIHguaW5uZXJTaGl2P2QuYXBwZW5kQ2hpbGQoeC5pbm5lclNoaXYoYSkpOmQuaW5uZXJIVE1MPWE7Y1swXS0tOylkPWQubGFzdENoaWxkO2Q9Yi5hLkwoZC5sYXN0Q2hpbGQuY2hpbGROb2Rlcyl9cmV0dXJuIGR9O2IuYS5jYT1mdW5jdGlvbihhLGQpe2IuYS5rYShhKTtkPWIuYS5kKGQpO2lmKGQhPT1wJiZkIT09SSlpZihcInN0cmluZ1wiIT10eXBlb2YgZCYmKGQ9ZC50b1N0cmluZygpKSxcblwidW5kZWZpbmVkXCIhPXR5cGVvZiBGKUYoYSkuaHRtbChkKTtlbHNlIGZvcih2YXIgYz1iLmEudGEoZCksZT0wO2U8Yy5sZW5ndGg7ZSsrKWEuYXBwZW5kQ2hpbGQoY1tlXSl9O2IuYihcInV0aWxzLnBhcnNlSHRtbEZyYWdtZW50XCIsYi5hLnRhKTtiLmIoXCJ1dGlscy5zZXRIdG1sXCIsYi5hLmNhKTt2YXIgUj17fTtiLnM9e3JhOmZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGEmJmooRXJyb3IoXCJZb3UgY2FuIG9ubHkgcGFzcyBhIGZ1bmN0aW9uIHRvIGtvLm1lbW9pemF0aW9uLm1lbW9pemUoKVwiKSk7dmFyIGI9KDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKSsoNDI5NDk2NzI5NiooMStNYXRoLnJhbmRvbSgpKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1JbYl09YTtyZXR1cm5cIlxceDNjIS0tW2tvX21lbW86XCIrYitcIl0tLVxceDNlXCJ9LGhiOmZ1bmN0aW9uKGEsYil7dmFyIGM9UlthXTtjPT09SSYmaihFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIitcbmErXCIuIFBlcmhhcHMgaXQncyBhbHJlYWR5IGJlZW4gdW5tZW1vaXplZC5cIikpO3RyeXtyZXR1cm4gYy5hcHBseShwLGJ8fFtdKSxtfWZpbmFsbHl7ZGVsZXRlIFJbYV19fSxpYjpmdW5jdGlvbihhLGQpe3ZhciBjPVtdO2NhKGEsYyk7Zm9yKHZhciBlPTAsZj1jLmxlbmd0aDtlPGY7ZSsrKXt2YXIgZz1jW2VdLnNiLGg9W2ddO2QmJmIuYS5QKGgsZCk7Yi5zLmhiKGNbZV0uRmIsaCk7Zy5ub2RlVmFsdWU9XCJcIjtnLnBhcmVudE5vZGUmJmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnKX19LFVhOmZ1bmN0aW9uKGEpe3JldHVybihhPWEubWF0Y2goL15cXFtrb19tZW1vXFw6KC4qPylcXF0kLykpP2FbMV06cH19O2IuYihcIm1lbW9pemF0aW9uXCIsYi5zKTtiLmIoXCJtZW1vaXphdGlvbi5tZW1vaXplXCIsYi5zLnJhKTtiLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVcIixiLnMuaGIpO2IuYihcIm1lbW9pemF0aW9uLnBhcnNlTWVtb1RleHRcIixiLnMuVWEpO2IuYihcIm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50c1wiLFxuYi5zLmliKTtiLk1hPXt0aHJvdHRsZTpmdW5jdGlvbihhLGQpe2EudGhyb3R0bGVFdmFsdWF0aW9uPWQ7dmFyIGM9cDtyZXR1cm4gYi5qKHtyZWFkOmEsd3JpdGU6ZnVuY3Rpb24oYil7Y2xlYXJUaW1lb3V0KGMpO2M9c2V0VGltZW91dChmdW5jdGlvbigpe2EoYil9LGQpfX0pfSxub3RpZnk6ZnVuY3Rpb24oYSxkKXthLmVxdWFsaXR5Q29tcGFyZXI9XCJhbHdheXNcIj09ZD91KHIpOmIubS5mbi5lcXVhbGl0eUNvbXBhcmVyO3JldHVybiBhfX07Yi5iKFwiZXh0ZW5kZXJzXCIsYi5NYSk7Yi5mYj1mdW5jdGlvbihhLGQsYyl7dGhpcy50YXJnZXQ9YTt0aGlzLmhhPWQ7dGhpcy5yYj1jO2IucCh0aGlzLFwiZGlzcG9zZVwiLHRoaXMuQil9O2IuZmIucHJvdG90eXBlLkI9ZnVuY3Rpb24oKXt0aGlzLkNiPW07dGhpcy5yYigpfTtiLlM9ZnVuY3Rpb24oKXt0aGlzLnc9e307Yi5hLmV4dGVuZCh0aGlzLGIuUy5mbik7Yi5wKHRoaXMsXCJzdWJzY3JpYmVcIix0aGlzLnlhKTtiLnAodGhpcyxcImV4dGVuZFwiLFxudGhpcy5leHRlbmQpO2IucCh0aGlzLFwiZ2V0U3Vic2NyaXB0aW9uc0NvdW50XCIsdGhpcy55Yil9O2IuUy5mbj17eWE6ZnVuY3Rpb24oYSxkLGMpe2M9Y3x8XCJjaGFuZ2VcIjt2YXIgZT1uZXcgYi5mYih0aGlzLGQ/YS5iaW5kKGQpOmEsZnVuY3Rpb24oKXtiLmEuZ2EodGhpcy53W2NdLGUpfS5iaW5kKHRoaXMpKTt0aGlzLndbY118fCh0aGlzLndbY109W10pO3RoaXMud1tjXS5wdXNoKGUpO3JldHVybiBlfSxub3RpZnlTdWJzY3JpYmVyczpmdW5jdGlvbihhLGQpe2Q9ZHx8XCJjaGFuZ2VcIjt0aGlzLndbZF0mJmIuci5LKGZ1bmN0aW9uKCl7Yi5hLm8odGhpcy53W2RdLnNsaWNlKDApLGZ1bmN0aW9uKGIpe2ImJmIuQ2IhPT1tJiZiLmhhKGEpfSl9LHRoaXMpfSx5YjpmdW5jdGlvbigpe3ZhciBhPTAsYjtmb3IoYiBpbiB0aGlzLncpdGhpcy53Lmhhc093blByb3BlcnR5KGIpJiYoYSs9dGhpcy53W2JdLmxlbmd0aCk7cmV0dXJuIGF9LGV4dGVuZDpmdW5jdGlvbihhKXt2YXIgZD10aGlzO2lmKGEpZm9yKHZhciBjIGluIGEpe3ZhciBlPVxuYi5NYVtjXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYoZD1lKGQsYVtjXSkpfXJldHVybiBkfX07Yi5RYT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnlhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5vdGlmeVN1YnNjcmliZXJzfTtiLmIoXCJzdWJzY3JpYmFibGVcIixiLlMpO2IuYihcImlzU3Vic2NyaWJhYmxlXCIsYi5RYSk7dmFyIEM9W107Yi5yPXttYjpmdW5jdGlvbihhKXtDLnB1c2goe2hhOmEsTGE6W119KX0sZW5kOmZ1bmN0aW9uKCl7Qy5wb3AoKX0sV2E6ZnVuY3Rpb24oYSl7Yi5RYShhKXx8aihFcnJvcihcIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llc1wiKSk7aWYoMDxDLmxlbmd0aCl7dmFyIGQ9Q1tDLmxlbmd0aC0xXTtkJiYhKDA8PWIuYS5pKGQuTGEsYSkpJiYoZC5MYS5wdXNoKGEpLGQuaGEoYSkpfX0sSzpmdW5jdGlvbihhLGIsYyl7dHJ5e3JldHVybiBDLnB1c2gocCksYS5hcHBseShiLGN8fFtdKX1maW5hbGx5e0MucG9wKCl9fX07XG52YXIgbWE9e3VuZGVmaW5lZDptLFwiYm9vbGVhblwiOm0sbnVtYmVyOm0sc3RyaW5nOm19O2IubT1mdW5jdGlvbihhKXtmdW5jdGlvbiBkKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXtpZighZC5lcXVhbGl0eUNvbXBhcmVyfHwhZC5lcXVhbGl0eUNvbXBhcmVyKGMsYXJndW1lbnRzWzBdKSlkLkgoKSxjPWFyZ3VtZW50c1swXSxkLkcoKTtyZXR1cm4gdGhpc31iLnIuV2EoZCk7cmV0dXJuIGN9dmFyIGM9YTtiLlMuY2FsbChkKTtkLnQ9ZnVuY3Rpb24oKXtyZXR1cm4gY307ZC5HPWZ1bmN0aW9uKCl7ZC5ub3RpZnlTdWJzY3JpYmVycyhjKX07ZC5IPWZ1bmN0aW9uKCl7ZC5ub3RpZnlTdWJzY3JpYmVycyhjLFwiYmVmb3JlQ2hhbmdlXCIpfTtiLmEuZXh0ZW5kKGQsYi5tLmZuKTtiLnAoZCxcInBlZWtcIixkLnQpO2IucChkLFwidmFsdWVIYXNNdXRhdGVkXCIsZC5HKTtiLnAoZCxcInZhbHVlV2lsbE11dGF0ZVwiLGQuSCk7cmV0dXJuIGR9O2IubS5mbj17ZXF1YWxpdHlDb21wYXJlcjpmdW5jdGlvbihhLFxuYil7cmV0dXJuIGE9PT1wfHx0eXBlb2YgYSBpbiBtYT9hPT09YjpyfX07dmFyIEU9Yi5tLktiPVwiX19rb19wcm90b19fXCI7Yi5tLmZuW0VdPWIubTtiLm1hPWZ1bmN0aW9uKGEsZCl7cmV0dXJuIGE9PT1wfHxhPT09SXx8YVtFXT09PUk/cjphW0VdPT09ZD9tOmIubWEoYVtFXSxkKX07Yi4kPWZ1bmN0aW9uKGEpe3JldHVybiBiLm1hKGEsYi5tKX07Yi5SYT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhW0VdPT09Yi5tfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhW0VdPT09Yi5qJiZhLnpiP206cn07Yi5iKFwib2JzZXJ2YWJsZVwiLGIubSk7Yi5iKFwiaXNPYnNlcnZhYmxlXCIsYi4kKTtiLmIoXCJpc1dyaXRlYWJsZU9ic2VydmFibGVcIixiLlJhKTtiLlI9ZnVuY3Rpb24oYSl7MD09YXJndW1lbnRzLmxlbmd0aCYmKGE9W10pO2EhPT1wJiYoYSE9PUkmJiEoXCJsZW5ndGhcImluIGEpKSYmaihFcnJvcihcIlRoZSBhcmd1bWVudCBwYXNzZWQgd2hlbiBpbml0aWFsaXppbmcgYW4gb2JzZXJ2YWJsZSBhcnJheSBtdXN0IGJlIGFuIGFycmF5LCBvciBudWxsLCBvciB1bmRlZmluZWQuXCIpKTtcbnZhciBkPWIubShhKTtiLmEuZXh0ZW5kKGQsYi5SLmZuKTtyZXR1cm4gZH07Yi5SLmZuPXtyZW1vdmU6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXMudCgpLGM9W10sZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6ZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1hfSxmPTA7ZjxiLmxlbmd0aDtmKyspe3ZhciBnPWJbZl07ZShnKSYmKDA9PT1jLmxlbmd0aCYmdGhpcy5IKCksYy5wdXNoKGcpLGIuc3BsaWNlKGYsMSksZi0tKX1jLmxlbmd0aCYmdGhpcy5HKCk7cmV0dXJuIGN9LHJlbW92ZUFsbDpmdW5jdGlvbihhKXtpZihhPT09SSl7dmFyIGQ9dGhpcy50KCksYz1kLnNsaWNlKDApO3RoaXMuSCgpO2Quc3BsaWNlKDAsZC5sZW5ndGgpO3RoaXMuRygpO3JldHVybiBjfXJldHVybiFhP1tdOnRoaXMucmVtb3ZlKGZ1bmN0aW9uKGQpe3JldHVybiAwPD1iLmEuaShhLGQpfSl9LGRlc3Ryb3k6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy50KCksYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6ZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1cbmF9O3RoaXMuSCgpO2Zvcih2YXIgZT1iLmxlbmd0aC0xOzA8PWU7ZS0tKWMoYltlXSkmJihiW2VdLl9kZXN0cm95PW0pO3RoaXMuRygpfSxkZXN0cm95QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09ST90aGlzLmRlc3Ryb3kodShtKSk6IWE/W106dGhpcy5kZXN0cm95KGZ1bmN0aW9uKGQpe3JldHVybiAwPD1iLmEuaShhLGQpfSl9LGluZGV4T2Y6ZnVuY3Rpb24oYSl7dmFyIGQ9dGhpcygpO3JldHVybiBiLmEuaShkLGEpfSxyZXBsYWNlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5pbmRleE9mKGEpOzA8PWMmJih0aGlzLkgoKSx0aGlzLnQoKVtjXT1iLHRoaXMuRygpKX19O2IuYS5vKFwicG9wIHB1c2ggcmV2ZXJzZSBzaGlmdCBzb3J0IHNwbGljZSB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2IuUi5mblthXT1mdW5jdGlvbigpe3ZhciBiPXRoaXMudCgpO3RoaXMuSCgpO2I9YlthXS5hcHBseShiLGFyZ3VtZW50cyk7dGhpcy5HKCk7cmV0dXJuIGJ9fSk7Yi5hLm8oW1wic2xpY2VcIl0sXG5mdW5jdGlvbihhKXtiLlIuZm5bYV09ZnVuY3Rpb24oKXt2YXIgYj10aGlzKCk7cmV0dXJuIGJbYV0uYXBwbHkoYixhcmd1bWVudHMpfX0pO2IuYihcIm9ic2VydmFibGVBcnJheVwiLGIuUik7Yi5qPWZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKCl7Yi5hLm8oeixmdW5jdGlvbihhKXthLkIoKX0pO3o9W119ZnVuY3Rpb24gZigpe3ZhciBhPWgudGhyb3R0bGVFdmFsdWF0aW9uO2EmJjA8PWE/KGNsZWFyVGltZW91dCh0KSx0PXNldFRpbWVvdXQoZyxhKSk6ZygpfWZ1bmN0aW9uIGcoKXtpZighcSlpZihuJiZ3KCkpQSgpO2Vsc2V7cT1tO3RyeXt2YXIgYT1iLmEuVih6LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRhcmdldH0pO2Iuci5tYihmdW5jdGlvbihjKXt2YXIgZDswPD0oZD1iLmEuaShhLGMpKT9hW2RdPUk6ei5wdXNoKGMueWEoZikpfSk7Zm9yKHZhciBjPXMuY2FsbChkKSxlPWEubGVuZ3RoLTE7MDw9ZTtlLS0pYVtlXSYmei5zcGxpY2UoZSwxKVswXS5CKCk7bj1tO2gubm90aWZ5U3Vic2NyaWJlcnMobCxcblwiYmVmb3JlQ2hhbmdlXCIpO2w9Y31maW5hbGx5e2Iuci5lbmQoKX1oLm5vdGlmeVN1YnNjcmliZXJzKGwpO3E9cjt6Lmxlbmd0aHx8QSgpfX1mdW5jdGlvbiBoKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXJldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiB2P3YuYXBwbHkoZCxhcmd1bWVudHMpOmooRXJyb3IoXCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLlwiKSksdGhpcztufHxnKCk7Yi5yLldhKGgpO3JldHVybiBsfWZ1bmN0aW9uIGsoKXtyZXR1cm4hbnx8MDx6Lmxlbmd0aH12YXIgbCxuPXIscT1yLHM9YTtzJiZcIm9iamVjdFwiPT10eXBlb2Ygcz8oYz1zLHM9Yy5yZWFkKTooYz1jfHx7fSxzfHwocz1jLnJlYWQpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBzJiZqKEVycm9yKFwiUGFzcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGtvLmNvbXB1dGVkXCIpKTtcbnZhciB2PWMud3JpdGUsRz1jLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZHx8Yy5XfHxwLHc9Yy5kaXNwb3NlV2hlbnx8Yy5LYXx8dShyKSxBPWUsej1bXSx0PXA7ZHx8KGQ9Yy5vd25lcik7aC50PWZ1bmN0aW9uKCl7bnx8ZygpO3JldHVybiBsfTtoLnhiPWZ1bmN0aW9uKCl7cmV0dXJuIHoubGVuZ3RofTtoLnpiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLndyaXRlO2guQj1mdW5jdGlvbigpe0EoKX07aC5wYT1rO2IuUy5jYWxsKGgpO2IuYS5leHRlbmQoaCxiLmouZm4pO2IucChoLFwicGVla1wiLGgudCk7Yi5wKGgsXCJkaXNwb3NlXCIsaC5CKTtiLnAoaCxcImlzQWN0aXZlXCIsaC5wYSk7Yi5wKGgsXCJnZXREZXBlbmRlbmNpZXNDb3VudFwiLGgueGIpO2MuZGVmZXJFdmFsdWF0aW9uIT09bSYmZygpO2lmKEcmJmsoKSl7QT1mdW5jdGlvbigpe2IuYS5GLlhhKEcsYXJndW1lbnRzLmNhbGxlZSk7ZSgpfTtiLmEuRi5DYShHLEEpO3ZhciBEPXcsdz1mdW5jdGlvbigpe3JldHVybiFiLmEuWChHKXx8RCgpfX1yZXR1cm4gaH07XG5iLkJiPWZ1bmN0aW9uKGEpe3JldHVybiBiLm1hKGEsYi5qKX07dz1iLm0uS2I7Yi5qW3ddPWIubTtiLmouZm49e307Yi5qLmZuW3ddPWIuajtiLmIoXCJkZXBlbmRlbnRPYnNlcnZhYmxlXCIsYi5qKTtiLmIoXCJjb21wdXRlZFwiLGIuaik7Yi5iKFwiaXNDb21wdXRlZFwiLGIuQmIpO2IuZ2I9ZnVuY3Rpb24oYSl7MD09YXJndW1lbnRzLmxlbmd0aCYmaihFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIikpO3JldHVybiBiYShhLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYz0wO2IuJChhKSYmMTA+YztjKyspYT1hKCk7cmV0dXJuIGF9KX07Yi50b0pTT049ZnVuY3Rpb24oYSxkLGMpe2E9Yi5nYihhKTtyZXR1cm4gYi5hLnhhKGEsZCxjKX07Yi5iKFwidG9KU1wiLGIuZ2IpO2IuYihcInRvSlNPTlwiLGIudG9KU09OKTtiLms9e3E6ZnVuY3Rpb24oYSl7c3dpdGNoKGIuYS51KGEpKXtjYXNlIFwib3B0aW9uXCI6cmV0dXJuIGEuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX189PT1cbm0/Yi5hLmYuZ2V0KGEsYi5jLm9wdGlvbnMuc2EpOjc+PWIuYS5aP2EuZ2V0QXR0cmlidXRlTm9kZShcInZhbHVlXCIpLnNwZWNpZmllZD9hLnZhbHVlOmEudGV4dDphLnZhbHVlO2Nhc2UgXCJzZWxlY3RcIjpyZXR1cm4gMDw9YS5zZWxlY3RlZEluZGV4P2Iuay5xKGEub3B0aW9uc1thLnNlbGVjdGVkSW5kZXhdKTpJO2RlZmF1bHQ6cmV0dXJuIGEudmFsdWV9fSxUOmZ1bmN0aW9uKGEsZCl7c3dpdGNoKGIuYS51KGEpKXtjYXNlIFwib3B0aW9uXCI6c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwic3RyaW5nXCI6Yi5hLmYuc2V0KGEsYi5jLm9wdGlvbnMuc2EsSSk7XCJfX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfX1wiaW4gYSYmZGVsZXRlIGEuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX187YS52YWx1ZT1kO2JyZWFrO2RlZmF1bHQ6Yi5hLmYuc2V0KGEsYi5jLm9wdGlvbnMuc2EsZCksYS5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz1tLGEudmFsdWU9XCJudW1iZXJcIj09PXR5cGVvZiBkP1xuZDpcIlwifWJyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmb3IodmFyIGM9YS5vcHRpb25zLmxlbmd0aC0xOzA8PWM7Yy0tKWlmKGIuay5xKGEub3B0aW9uc1tjXSk9PWQpe2Euc2VsZWN0ZWRJbmRleD1jO2JyZWFrfWJyZWFrO2RlZmF1bHQ6aWYoZD09PXB8fGQ9PT1JKWQ9XCJcIjthLnZhbHVlPWR9fX07Yi5iKFwic2VsZWN0RXh0ZW5zaW9uc1wiLGIuayk7Yi5iKFwic2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWVcIixiLmsucSk7Yi5iKFwic2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlXCIsYi5rLlQpO3ZhciBrYT0vXFxAa29fdG9rZW5fKFxcZCspXFxAL2csbmE9W1widHJ1ZVwiLFwiZmFsc2VcIl0sb2E9L14oPzpbJF9hLXpdWyRcXHddKnwoLispKFxcLlxccypbJF9hLXpdWyRcXHddKnxcXFsuK1xcXSkpJC9pO2IuZz17UTpbXSxhYTpmdW5jdGlvbihhKXt2YXIgZD1iLmEuRChhKTtpZigzPmQubGVuZ3RoKXJldHVybltdO1wie1wiPT09ZC5jaGFyQXQoMCkmJihkPWQuc3Vic3RyaW5nKDEsZC5sZW5ndGgtMSkpO2E9W107Zm9yKHZhciBjPVxucCxlLGY9MDtmPGQubGVuZ3RoO2YrKyl7dmFyIGc9ZC5jaGFyQXQoZik7aWYoYz09PXApc3dpdGNoKGcpe2Nhc2UgJ1wiJzpjYXNlIFwiJ1wiOmNhc2UgXCIvXCI6Yz1mLGU9Z31lbHNlIGlmKGc9PWUmJlwiXFxcXFwiIT09ZC5jaGFyQXQoZi0xKSl7Zz1kLnN1YnN0cmluZyhjLGYrMSk7YS5wdXNoKGcpO3ZhciBoPVwiQGtvX3Rva2VuX1wiKyhhLmxlbmd0aC0xKStcIkBcIixkPWQuc3Vic3RyaW5nKDAsYykraCtkLnN1YnN0cmluZyhmKzEpLGY9Zi0oZy5sZW5ndGgtaC5sZW5ndGgpLGM9cH19ZT1jPXA7Zm9yKHZhciBrPTAsbD1wLGY9MDtmPGQubGVuZ3RoO2YrKyl7Zz1kLmNoYXJBdChmKTtpZihjPT09cClzd2l0Y2goZyl7Y2FzZSBcIntcIjpjPWY7bD1nO2U9XCJ9XCI7YnJlYWs7Y2FzZSBcIihcIjpjPWY7bD1nO2U9XCIpXCI7YnJlYWs7Y2FzZSBcIltcIjpjPWYsbD1nLGU9XCJdXCJ9Zz09PWw/aysrOmc9PT1lJiYoay0tLDA9PT1rJiYoZz1kLnN1YnN0cmluZyhjLGYrMSksYS5wdXNoKGcpLGg9XCJAa29fdG9rZW5fXCIrKGEubGVuZ3RoLVxuMSkrXCJAXCIsZD1kLnN1YnN0cmluZygwLGMpK2grZC5zdWJzdHJpbmcoZisxKSxmLT1nLmxlbmd0aC1oLmxlbmd0aCxjPXApKX1lPVtdO2Q9ZC5zcGxpdChcIixcIik7Yz0wO2ZvcihmPWQubGVuZ3RoO2M8ZjtjKyspaz1kW2NdLGw9ay5pbmRleE9mKFwiOlwiKSwwPGwmJmw8ay5sZW5ndGgtMT8oZz1rLnN1YnN0cmluZyhsKzEpLGUucHVzaCh7a2V5OlAoay5zdWJzdHJpbmcoMCxsKSxhKSx2YWx1ZTpQKGcsYSl9KSk6ZS5wdXNoKHt1bmtub3duOlAoayxhKX0pO3JldHVybiBlfSxiYTpmdW5jdGlvbihhKXt2YXIgZD1cInN0cmluZ1wiPT09dHlwZW9mIGE/Yi5nLmFhKGEpOmEsYz1bXTthPVtdO2Zvcih2YXIgZSxmPTA7ZT1kW2ZdO2YrKylpZigwPGMubGVuZ3RoJiZjLnB1c2goXCIsXCIpLGUua2V5KXt2YXIgZzthOntnPWUua2V5O3ZhciBoPWIuYS5EKGcpO3N3aXRjaChoLmxlbmd0aCYmaC5jaGFyQXQoMCkpe2Nhc2UgXCInXCI6Y2FzZSAnXCInOmJyZWFrIGE7ZGVmYXVsdDpnPVwiJ1wiK2grXCInXCJ9fWU9ZS52YWx1ZTtcbmMucHVzaChnKTtjLnB1c2goXCI6XCIpO2MucHVzaChlKTtlPWIuYS5EKGUpOzA8PWIuYS5pKG5hLGIuYS5EKGUpLnRvTG93ZXJDYXNlKCkpP2U9cjooaD1lLm1hdGNoKG9hKSxlPWg9PT1wP3I6aFsxXT9cIk9iamVjdChcIitoWzFdK1wiKVwiK2hbMl06ZSk7ZSYmKDA8YS5sZW5ndGgmJmEucHVzaChcIiwgXCIpLGEucHVzaChnK1wiIDogZnVuY3Rpb24oX19rb192YWx1ZSkgeyBcIitlK1wiID0gX19rb192YWx1ZTsgfVwiKSl9ZWxzZSBlLnVua25vd24mJmMucHVzaChlLnVua25vd24pO2Q9Yy5qb2luKFwiXCIpOzA8YS5sZW5ndGgmJihkPWQrXCIsICdfa29fcHJvcGVydHlfd3JpdGVycycgOiB7IFwiK2Euam9pbihcIlwiKStcIiB9IFwiKTtyZXR1cm4gZH0sRWI6ZnVuY3Rpb24oYSxkKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihiLmEuRChhW2NdLmtleSk9PWQpcmV0dXJuIG07cmV0dXJuIHJ9LGVhOmZ1bmN0aW9uKGEsZCxjLGUsZil7aWYoIWF8fCFiLlJhKGEpKXtpZigoYT1kKCkuX2tvX3Byb3BlcnR5X3dyaXRlcnMpJiZcbmFbY10pYVtjXShlKX1lbHNlKCFmfHxhLnQoKSE9PWUpJiZhKGUpfX07Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZ1wiLGIuZyk7Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNcIixiLmcuUSk7Yi5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWxcIixiLmcuYWEpO2IuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzXCIsYi5nLmJhKTtiLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZ1wiLGIuZyk7Yi5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvblwiLGIuZy5iYSk7dmFyIEs9XCJcXHgzYyEtLXRlc3QtLVxceDNlXCI9PT15LmNyZWF0ZUNvbW1lbnQoXCJ0ZXN0XCIpLnRleHQsamE9Sz8vXlxceDNjIS0tXFxzKmtvKD86XFxzKyguK1xccypcXDpbXFxzXFxTXSopKT9cXHMqLS1cXHgzZSQvOi9eXFxzKmtvKD86XFxzKyguK1xccypcXDpbXFxzXFxTXSopKT9cXHMqJC8saWE9Sz8vXlxceDNjIS0tXFxzKlxcL2tvXFxzKi0tXFx4M2UkLzpcbi9eXFxzKlxcL2tvXFxzKiQvLHBhPXt1bDptLG9sOm19O2IuZT17STp7fSxjaGlsZE5vZGVzOmZ1bmN0aW9uKGEpe3JldHVybiBCKGEpP2FhKGEpOmEuY2hpbGROb2Rlc30sWTpmdW5jdGlvbihhKXtpZihCKGEpKXthPWIuZS5jaGlsZE5vZGVzKGEpO2Zvcih2YXIgZD0wLGM9YS5sZW5ndGg7ZDxjO2QrKyliLnJlbW92ZU5vZGUoYVtkXSl9ZWxzZSBiLmEua2EoYSl9LE46ZnVuY3Rpb24oYSxkKXtpZihCKGEpKXtiLmUuWShhKTtmb3IodmFyIGM9YS5uZXh0U2libGluZyxlPTAsZj1kLmxlbmd0aDtlPGY7ZSsrKWMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZFtlXSxjKX1lbHNlIGIuYS5OKGEsZCl9LFZhOmZ1bmN0aW9uKGEsYil7QihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGIsYS5uZXh0U2libGluZyk6YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKGIsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKGIpfSxQYTpmdW5jdGlvbihhLGQsYyl7Yz9CKGEpP2EucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZCxcbmMubmV4dFNpYmxpbmcpOmMubmV4dFNpYmxpbmc/YS5pbnNlcnRCZWZvcmUoZCxjLm5leHRTaWJsaW5nKTphLmFwcGVuZENoaWxkKGQpOmIuZS5WYShhLGQpfSxmaXJzdENoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiFCKGEpP2EuZmlyc3RDaGlsZDohYS5uZXh0U2libGluZ3x8SChhLm5leHRTaWJsaW5nKT9wOmEubmV4dFNpYmxpbmd9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGEpe0IoYSkmJihhPSQoYSkpO3JldHVybiBhLm5leHRTaWJsaW5nJiZIKGEubmV4dFNpYmxpbmcpP3A6YS5uZXh0U2libGluZ30samI6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9QihhKSk/YVsxXTpwfSxUYTpmdW5jdGlvbihhKXtpZihwYVtiLmEudShhKV0pe3ZhciBkPWEuZmlyc3RDaGlsZDtpZihkKXtkbyBpZigxPT09ZC5ub2RlVHlwZSl7dmFyIGM7Yz1kLmZpcnN0Q2hpbGQ7dmFyIGU9cDtpZihjKXtkbyBpZihlKWUucHVzaChjKTtlbHNlIGlmKEIoYykpe3ZhciBmPSQoYyxtKTtmP2M9ZjplPVtjXX1lbHNlIEgoYykmJlxuKGU9W2NdKTt3aGlsZShjPWMubmV4dFNpYmxpbmcpfWlmKGM9ZSl7ZT1kLm5leHRTaWJsaW5nO2ZvcihmPTA7ZjxjLmxlbmd0aDtmKyspZT9hLmluc2VydEJlZm9yZShjW2ZdLGUpOmEuYXBwZW5kQ2hpbGQoY1tmXSl9fXdoaWxlKGQ9ZC5uZXh0U2libGluZyl9fX19O2IuYihcInZpcnR1YWxFbGVtZW50c1wiLGIuZSk7Yi5iKFwidmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1wiLGIuZS5JKTtiLmIoXCJ2aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlXCIsYi5lLlkpO2IuYihcInZpcnR1YWxFbGVtZW50cy5pbnNlcnRBZnRlclwiLGIuZS5QYSk7Yi5iKFwidmlydHVhbEVsZW1lbnRzLnByZXBlbmRcIixiLmUuVmEpO2IuYihcInZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW5cIixiLmUuTik7Yi5KPWZ1bmN0aW9uKCl7dGhpcy5IYT17fX07Yi5hLmV4dGVuZChiLkoucHJvdG90eXBlLHtub2RlSGFzQmluZGluZ3M6ZnVuY3Rpb24oYSl7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgMTpyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIikhPVxucDtjYXNlIDg6cmV0dXJuIGIuZS5qYihhKSE9cDtkZWZhdWx0OnJldHVybiByfX0sZ2V0QmluZGluZ3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGEsYik7cmV0dXJuIGM/dGhpcy5wYXJzZUJpbmRpbmdzU3RyaW5nKGMsYixhKTpwfSxnZXRCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihhKXtzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBhLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKTtjYXNlIDg6cmV0dXJuIGIuZS5qYihhKTtkZWZhdWx0OnJldHVybiBwfX0scGFyc2VCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihhLGQsYyl7dHJ5e3ZhciBlO2lmKCEoZT10aGlzLkhhW2FdKSl7dmFyIGY9dGhpcy5IYSxnLGg9XCJ3aXRoKCRjb250ZXh0KXt3aXRoKCRkYXRhfHx7fSl7cmV0dXJue1wiK2IuZy5iYShhKStcIn19fVwiO2c9bmV3IEZ1bmN0aW9uKFwiJGNvbnRleHRcIixcIiRlbGVtZW50XCIsaCk7ZT1mW2FdPWd9cmV0dXJuIGUoZCxjKX1jYXRjaChrKXtqKEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbk1lc3NhZ2U6IFwiK1xuaytcIjtcXG5CaW5kaW5ncyB2YWx1ZTogXCIrYSkpfX19KTtiLkouaW5zdGFuY2U9bmV3IGIuSjtiLmIoXCJiaW5kaW5nUHJvdmlkZXJcIixiLkopO2IuYz17fTtiLno9ZnVuY3Rpb24oYSxkLGMpe2Q/KGIuYS5leHRlbmQodGhpcyxkKSx0aGlzLiRwYXJlbnRDb250ZXh0PWQsdGhpcy4kcGFyZW50PWQuJGRhdGEsdGhpcy4kcGFyZW50cz0oZC4kcGFyZW50c3x8W10pLnNsaWNlKDApLHRoaXMuJHBhcmVudHMudW5zaGlmdCh0aGlzLiRwYXJlbnQpKToodGhpcy4kcGFyZW50cz1bXSx0aGlzLiRyb290PWEsdGhpcy5rbz1iKTt0aGlzLiRkYXRhPWE7YyYmKHRoaXNbY109YSl9O2Iuei5wcm90b3R5cGUuY3JlYXRlQ2hpbGRDb250ZXh0PWZ1bmN0aW9uKGEsZCl7cmV0dXJuIG5ldyBiLnooYSx0aGlzLGQpfTtiLnoucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihhKXt2YXIgZD1iLmEuZXh0ZW5kKG5ldyBiLnosdGhpcyk7cmV0dXJuIGIuYS5leHRlbmQoZCxhKX07Yi5lYj1mdW5jdGlvbihhLGQpe2lmKDI9PVxuYXJndW1lbnRzLmxlbmd0aCliLmEuZi5zZXQoYSxcIl9fa29fYmluZGluZ0NvbnRleHRfX1wiLGQpO2Vsc2UgcmV0dXJuIGIuYS5mLmdldChhLFwiX19rb19iaW5kaW5nQ29udGV4dF9fXCIpfTtiLkZhPWZ1bmN0aW9uKGEsZCxjKXsxPT09YS5ub2RlVHlwZSYmYi5lLlRhKGEpO3JldHVybiBYKGEsZCxjLG0pfTtiLkVhPWZ1bmN0aW9uKGEsYil7KDE9PT1iLm5vZGVUeXBlfHw4PT09Yi5ub2RlVHlwZSkmJlooYSxiLG0pfTtiLkRhPWZ1bmN0aW9uKGEsYil7YiYmKDEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZSkmJmooRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKSk7Yj1ifHx4LmRvY3VtZW50LmJvZHk7WShhLGIsbSl9O2IuamE9ZnVuY3Rpb24oYSl7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgMTpjYXNlIDg6dmFyIGQ9Yi5lYihhKTtpZihkKXJldHVybiBkO1xuaWYoYS5wYXJlbnROb2RlKXJldHVybiBiLmphKGEucGFyZW50Tm9kZSl9cmV0dXJuIEl9O2IucGI9ZnVuY3Rpb24oYSl7cmV0dXJuKGE9Yi5qYShhKSk/YS4kZGF0YTpJfTtiLmIoXCJiaW5kaW5nSGFuZGxlcnNcIixiLmMpO2IuYihcImFwcGx5QmluZGluZ3NcIixiLkRhKTtiLmIoXCJhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c1wiLGIuRWEpO2IuYihcImFwcGx5QmluZGluZ3NUb05vZGVcIixiLkZhKTtiLmIoXCJjb250ZXh0Rm9yXCIsYi5qYSk7Yi5iKFwiZGF0YUZvclwiLGIucGIpO3ZhciBmYT17XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsXCJmb3JcIjpcImh0bWxGb3JcIn07Yi5jLmF0dHI9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSl8fHt9LGU7Zm9yKGUgaW4gYylpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIGY9Yi5hLmQoY1tlXSksZz1mPT09cnx8Zj09PXB8fGY9PT1JO2cmJmEucmVtb3ZlQXR0cmlidXRlKGUpOzg+PWIuYS5aJiZlIGluIGZhPyhlPWZhW2VdLGc/YS5yZW1vdmVBdHRyaWJ1dGUoZSk6XG5hW2VdPWYpOmd8fGEuc2V0QXR0cmlidXRlKGUsZi50b1N0cmluZygpKTtcIm5hbWVcIj09PWUmJmIuYS5hYihhLGc/XCJcIjpmLnRvU3RyaW5nKCkpfX19O2IuYy5jaGVja2VkPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtiLmEubihhLFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciBlO2lmKFwiY2hlY2tib3hcIj09YS50eXBlKWU9YS5jaGVja2VkO2Vsc2UgaWYoXCJyYWRpb1wiPT1hLnR5cGUmJmEuY2hlY2tlZCllPWEudmFsdWU7ZWxzZSByZXR1cm47dmFyIGY9ZCgpLGc9Yi5hLmQoZik7XCJjaGVja2JveFwiPT1hLnR5cGUmJmcgaW5zdGFuY2VvZiBBcnJheT8oZT1iLmEuaShnLGEudmFsdWUpLGEuY2hlY2tlZCYmMD5lP2YucHVzaChhLnZhbHVlKTohYS5jaGVja2VkJiYwPD1lJiZmLnNwbGljZShlLDEpKTpiLmcuZWEoZixjLFwiY2hlY2tlZFwiLGUsbSl9KTtcInJhZGlvXCI9PWEudHlwZSYmIWEubmFtZSYmYi5jLnVuaXF1ZU5hbWUuaW5pdChhLHUobSkpfSx1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKCkpO1xuXCJjaGVja2JveFwiPT1hLnR5cGU/YS5jaGVja2VkPWMgaW5zdGFuY2VvZiBBcnJheT8wPD1iLmEuaShjLGEudmFsdWUpOmM6XCJyYWRpb1wiPT1hLnR5cGUmJihhLmNoZWNrZWQ9YS52YWx1ZT09Yyl9fTtiLmMuY3NzPXt1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1iLmEuZChkKCkpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBjKWZvcih2YXIgZSBpbiBjKXt2YXIgZj1iLmEuZChjW2VdKTtiLmEuZGEoYSxlLGYpfWVsc2UgYz1TdHJpbmcoY3x8XCJcIiksYi5hLmRhKGEsYS5fX2tvX19jc3NWYWx1ZSxyKSxhLl9fa29fX2Nzc1ZhbHVlPWMsYi5hLmRhKGEsYyxtKX19O2IuYy5lbmFibGU9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSk7YyYmYS5kaXNhYmxlZD9hLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpOiFjJiYhYS5kaXNhYmxlZCYmKGEuZGlzYWJsZWQ9bSl9fTtiLmMuZGlzYWJsZT17dXBkYXRlOmZ1bmN0aW9uKGEsZCl7Yi5jLmVuYWJsZS51cGRhdGUoYSxmdW5jdGlvbigpe3JldHVybiFiLmEuZChkKCkpfSl9fTtcbmIuYy5ldmVudD17aW5pdDpmdW5jdGlvbihhLGQsYyxlKXt2YXIgZj1kKCl8fHt9LGc7Zm9yKGcgaW4gZikoZnVuY3Rpb24oKXt2YXIgZj1nO1wic3RyaW5nXCI9PXR5cGVvZiBmJiZiLmEubihhLGYsZnVuY3Rpb24oYSl7dmFyIGcsbj1kKClbZl07aWYobil7dmFyIHE9YygpO3RyeXt2YXIgcz1iLmEuTChhcmd1bWVudHMpO3MudW5zaGlmdChlKTtnPW4uYXBwbHkoZSxzKX1maW5hbGx5e2chPT1tJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT1yKX1xW2YrXCJCdWJibGVcIl09PT1yJiYoYS5jYW5jZWxCdWJibGU9bSxhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKSl9fSl9KSgpfX07Yi5jLmZvcmVhY2g9e1NhOmZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBkPWEoKSxjPWIuYS51YShkKTtpZighY3x8XCJudW1iZXJcIj09dHlwZW9mIGMubGVuZ3RoKXJldHVybntmb3JlYWNoOmQsdGVtcGxhdGVFbmdpbmU6Yi5DLm9hfTtcbmIuYS5kKGQpO3JldHVybntmb3JlYWNoOmMuZGF0YSxhczpjLmFzLGluY2x1ZGVEZXN0cm95ZWQ6Yy5pbmNsdWRlRGVzdHJveWVkLGFmdGVyQWRkOmMuYWZ0ZXJBZGQsYmVmb3JlUmVtb3ZlOmMuYmVmb3JlUmVtb3ZlLGFmdGVyUmVuZGVyOmMuYWZ0ZXJSZW5kZXIsYmVmb3JlTW92ZTpjLmJlZm9yZU1vdmUsYWZ0ZXJNb3ZlOmMuYWZ0ZXJNb3ZlLHRlbXBsYXRlRW5naW5lOmIuQy5vYX19fSxpbml0OmZ1bmN0aW9uKGEsZCl7cmV0dXJuIGIuYy50ZW1wbGF0ZS5pbml0KGEsYi5jLmZvcmVhY2guU2EoZCkpfSx1cGRhdGU6ZnVuY3Rpb24oYSxkLGMsZSxmKXtyZXR1cm4gYi5jLnRlbXBsYXRlLnVwZGF0ZShhLGIuYy5mb3JlYWNoLlNhKGQpLGMsZSxmKX19O2IuZy5RLmZvcmVhY2g9cjtiLmUuSS5mb3JlYWNoPW07Yi5jLmhhc2ZvY3VzPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKGUpe2EuX19rb19oYXNmb2N1c1VwZGF0aW5nPW07dmFyIGY9YS5vd25lckRvY3VtZW50O1wiYWN0aXZlRWxlbWVudFwiaW5cbmYmJihlPWYuYWN0aXZlRWxlbWVudD09PWEpO2Y9ZCgpO2IuZy5lYShmLGMsXCJoYXNmb2N1c1wiLGUsbSk7YS5fX2tvX2hhc2ZvY3VzVXBkYXRpbmc9cn12YXIgZj1lLmJpbmQocCxtKSxnPWUuYmluZChwLHIpO2IuYS5uKGEsXCJmb2N1c1wiLGYpO2IuYS5uKGEsXCJmb2N1c2luXCIsZik7Yi5hLm4oYSxcImJsdXJcIixnKTtiLmEubihhLFwiZm9jdXNvdXRcIixnKX0sdXBkYXRlOmZ1bmN0aW9uKGEsZCl7dmFyIGM9Yi5hLmQoZCgpKTthLl9fa29faGFzZm9jdXNVcGRhdGluZ3x8KGM/YS5mb2N1cygpOmEuYmx1cigpLGIuci5LKGIuYS5CYSxwLFthLGM/XCJmb2N1c2luXCI6XCJmb2N1c291dFwiXSkpfX07Yi5jLmh0bWw9e2luaXQ6ZnVuY3Rpb24oKXtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6bX19LHVwZGF0ZTpmdW5jdGlvbihhLGQpe2IuYS5jYShhLGQoKSl9fTt2YXIgZGE9XCJfX2tvX3dpdGhJZkJpbmRpbmdEYXRhXCI7UShcImlmXCIpO1EoXCJpZm5vdFwiLHIsbSk7UShcIndpdGhcIixtLHIsZnVuY3Rpb24oYSxcbmIpe3JldHVybiBhLmNyZWF0ZUNoaWxkQ29udGV4dChiKX0pO2IuYy5vcHRpb25zPXt1cGRhdGU6ZnVuY3Rpb24oYSxkLGMpe1wic2VsZWN0XCIhPT1iLmEudShhKSYmaihFcnJvcihcIm9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpKTtmb3IodmFyIGU9MD09YS5sZW5ndGgsZj1iLmEuVihiLmEuZmEoYS5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLnRhZ05hbWUmJlwib3B0aW9uXCI9PT1iLmEudShhKSYmYS5zZWxlY3RlZH0pLGZ1bmN0aW9uKGEpe3JldHVybiBiLmsucShhKXx8YS5pbm5lclRleHR8fGEudGV4dENvbnRlbnR9KSxnPWEuc2Nyb2xsVG9wLGg9Yi5hLmQoZCgpKTswPGEubGVuZ3RoOyliLkEoYS5vcHRpb25zWzBdKSxhLnJlbW92ZSgwKTtpZihoKXtjPWMoKTt2YXIgaz1jLm9wdGlvbnNJbmNsdWRlRGVzdHJveWVkO1wibnVtYmVyXCIhPXR5cGVvZiBoLmxlbmd0aCYmKGg9W2hdKTtpZihjLm9wdGlvbnNDYXB0aW9uKXt2YXIgbD15LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5iLmEuY2EobCxjLm9wdGlvbnNDYXB0aW9uKTtiLmsuVChsLEkpO2EuYXBwZW5kQ2hpbGQobCl9ZD0wO2Zvcih2YXIgbj1oLmxlbmd0aDtkPG47ZCsrKXt2YXIgcT1oW2RdO2lmKCFxfHwhcS5fZGVzdHJveXx8ayl7dmFyIGw9eS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLHM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXR5cGVvZiBiO3JldHVyblwiZnVuY3Rpb25cIj09ZD9iKGEpOlwic3RyaW5nXCI9PWQ/YVtiXTpjfSx2PXMocSxjLm9wdGlvbnNWYWx1ZSxxKTtiLmsuVChsLGIuYS5kKHYpKTtxPXMocSxjLm9wdGlvbnNUZXh0LHYpO2IuYS5jYihsLHEpO2EuYXBwZW5kQ2hpbGQobCl9fWg9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKTtkPWs9MDtmb3Iobj1oLmxlbmd0aDtkPG47ZCsrKTA8PWIuYS5pKGYsYi5rLnEoaFtkXSkpJiYoYi5hLmJiKGhbZF0sbSksaysrKTthLnNjcm9sbFRvcD1nO2UmJlwidmFsdWVcImluIGMmJmVhKGEsYi5hLnVhKGMudmFsdWUpLG0pO2IuYS51YihhKX19fTtcbmIuYy5vcHRpb25zLnNhPVwiX19rby5vcHRpb25WYWx1ZURvbURhdGFfX1wiO2IuYy5zZWxlY3RlZE9wdGlvbnM9e2luaXQ6ZnVuY3Rpb24oYSxkLGMpe2IuYS5uKGEsXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPWQoKSxmPVtdO2IuYS5vKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksZnVuY3Rpb24oYSl7YS5zZWxlY3RlZCYmZi5wdXNoKGIuay5xKGEpKX0pO2IuZy5lYShlLGMsXCJ2YWx1ZVwiLGYpfSl9LHVwZGF0ZTpmdW5jdGlvbihhLGQpe1wic2VsZWN0XCIhPWIuYS51KGEpJiZqKEVycm9yKFwidmFsdWVzIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKSk7dmFyIGM9Yi5hLmQoZCgpKTtjJiZcIm51bWJlclwiPT10eXBlb2YgYy5sZW5ndGgmJmIuYS5vKGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksZnVuY3Rpb24oYSl7dmFyIGQ9MDw9Yi5hLmkoYyxiLmsucShhKSk7Yi5hLmJiKGEsZCl9KX19O2IuYy5zdHlsZT17dXBkYXRlOmZ1bmN0aW9uKGEsXG5kKXt2YXIgYz1iLmEuZChkKCl8fHt9KSxlO2ZvcihlIGluIGMpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBmPWIuYS5kKGNbZV0pO2Euc3R5bGVbZV09Znx8XCJcIn19fTtiLmMuc3VibWl0PXtpbml0OmZ1bmN0aW9uKGEsZCxjLGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGQoKSYmaihFcnJvcihcIlRoZSB2YWx1ZSBmb3IgYSBzdWJtaXQgYmluZGluZyBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2IuYS5uKGEsXCJzdWJtaXRcIixmdW5jdGlvbihiKXt2YXIgYyxoPWQoKTt0cnl7Yz1oLmNhbGwoZSxhKX1maW5hbGx5e2MhPT1tJiYoYi5wcmV2ZW50RGVmYXVsdD9iLnByZXZlbnREZWZhdWx0KCk6Yi5yZXR1cm5WYWx1ZT1yKX19KX19O2IuYy50ZXh0PXt1cGRhdGU6ZnVuY3Rpb24oYSxkKXtiLmEuY2IoYSxkKCkpfX07Yi5lLkkudGV4dD1tO2IuYy51bmlxdWVOYW1lPXtpbml0OmZ1bmN0aW9uKGEsZCl7aWYoZCgpKXt2YXIgYz1cImtvX3VuaXF1ZV9cIisgKytiLmMudW5pcXVlTmFtZS5vYjtiLmEuYWIoYSxcbmMpfX19O2IuYy51bmlxdWVOYW1lLm9iPTA7Yi5jLnZhbHVlPXtpbml0OmZ1bmN0aW9uKGEsZCxjKXtmdW5jdGlvbiBlKCl7aD1yO3ZhciBlPWQoKSxmPWIuay5xKGEpO2IuZy5lYShlLGMsXCJ2YWx1ZVwiLGYpfXZhciBmPVtcImNoYW5nZVwiXSxnPWMoKS52YWx1ZVVwZGF0ZSxoPXI7ZyYmKFwic3RyaW5nXCI9PXR5cGVvZiBnJiYoZz1bZ10pLGIuYS5QKGYsZyksZj1iLmEuR2EoZikpO2lmKGIuYS5aJiYoXCJpbnB1dFwiPT1hLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PWEudHlwZSYmXCJvZmZcIiE9YS5hdXRvY29tcGxldGUmJighYS5mb3JtfHxcIm9mZlwiIT1hLmZvcm0uYXV0b2NvbXBsZXRlKSkmJi0xPT1iLmEuaShmLFwicHJvcGVydHljaGFuZ2VcIikpYi5hLm4oYSxcInByb3BlcnR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtoPW19KSxiLmEubihhLFwiYmx1clwiLGZ1bmN0aW9uKCl7aCYmZSgpfSk7Yi5hLm8oZixmdW5jdGlvbihjKXt2YXIgZD1lO2IuYS5PYihjLFwiYWZ0ZXJcIikmJihkPWZ1bmN0aW9uKCl7c2V0VGltZW91dChlLFxuMCl9LGM9Yy5zdWJzdHJpbmcoNSkpO2IuYS5uKGEsYyxkKX0pfSx1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz1cInNlbGVjdFwiPT09Yi5hLnUoYSksZT1iLmEuZChkKCkpLGY9Yi5rLnEoYSksZz1lIT1mOzA9PT1lJiYoMCE9PWYmJlwiMFwiIT09ZikmJihnPW0pO2cmJihmPWZ1bmN0aW9uKCl7Yi5rLlQoYSxlKX0sZigpLGMmJnNldFRpbWVvdXQoZiwwKSk7YyYmMDxhLmxlbmd0aCYmZWEoYSxlLHIpfX07Yi5jLnZpc2libGU9e3VwZGF0ZTpmdW5jdGlvbihhLGQpe3ZhciBjPWIuYS5kKGQoKSksZT1cIm5vbmVcIiE9YS5zdHlsZS5kaXNwbGF5O2MmJiFlP2Euc3R5bGUuZGlzcGxheT1cIlwiOiFjJiZlJiYoYS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19O2IuYy5jbGljaz17aW5pdDpmdW5jdGlvbihhLGQsYyxlKXtyZXR1cm4gYi5jLmV2ZW50LmluaXQuY2FsbCh0aGlzLGEsZnVuY3Rpb24oKXt2YXIgYT17fTthLmNsaWNrPWQoKTtyZXR1cm4gYX0sYyxlKX19O2Iudj1mdW5jdGlvbigpe307Yi52LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1cbmZ1bmN0aW9uKCl7aihFcnJvcihcIk92ZXJyaWRlIHJlbmRlclRlbXBsYXRlU291cmNlXCIpKX07Yi52LnByb3RvdHlwZS5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oKXtqKEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpKX07Yi52LnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYSxkKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7ZD1kfHx5O3ZhciBjPWQuZ2V0RWxlbWVudEJ5SWQoYSk7Y3x8aihFcnJvcihcIkNhbm5vdCBmaW5kIHRlbXBsYXRlIHdpdGggSUQgXCIrYSkpO3JldHVybiBuZXcgYi5sLmgoYyl9aWYoMT09YS5ub2RlVHlwZXx8OD09YS5ub2RlVHlwZSlyZXR1cm4gbmV3IGIubC5PKGEpO2ooRXJyb3IoXCJVbmtub3duIHRlbXBsYXRlIHR5cGU6IFwiK2EpKX07Yi52LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1mdW5jdGlvbihhLGIsYyxlKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZSk7XG5yZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZShhLGIsYyl9O2Iudi5wcm90b3R5cGUuaXNUZW1wbGF0ZVJld3JpdHRlbj1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc9PT1yP206dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxiKS5kYXRhKFwiaXNSZXdyaXR0ZW5cIil9O2Iudi5wcm90b3R5cGUucmV3cml0ZVRlbXBsYXRlPWZ1bmN0aW9uKGEsYixjKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsYyk7Yj1iKGEudGV4dCgpKTthLnRleHQoYik7YS5kYXRhKFwiaXNSZXdyaXR0ZW5cIixtKX07Yi5iKFwidGVtcGxhdGVFbmdpbmVcIixiLnYpO3ZhciBxYT0vKDxbYS16XStcXGQqKFxccysoPyFkYXRhLWJpbmQ9KVthLXowLTlcXC1dKyg9KFxcXCJbXlxcXCJdKlxcXCJ8XFwnW15cXCddKlxcJykpPykqXFxzKylkYXRhLWJpbmQ9KFtcIiddKShbXFxzXFxTXSo/KVxcNS9naSxyYT0vXFx4M2MhLS1cXHMqa29cXGJcXHMqKFtcXHNcXFNdKj8pXFxzKi0tXFx4M2UvZztiLnphPXt2YjpmdW5jdGlvbihhLFxuZCxjKXtkLmlzVGVtcGxhdGVSZXdyaXR0ZW4oYSxjKXx8ZC5yZXdyaXRlVGVtcGxhdGUoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi56YS5HYihhLGQpfSxjKX0sR2I6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5yZXBsYWNlKHFhLGZ1bmN0aW9uKGEsZSxmLGcsaCxrLGwpe3JldHVybiBXKGwsZSxiKX0pLnJlcGxhY2UocmEsZnVuY3Rpb24oYSxlKXtyZXR1cm4gVyhlLFwiXFx4M2MhLS0ga28gLS1cXHgzZVwiLGIpfSl9LGtiOmZ1bmN0aW9uKGEpe3JldHVybiBiLnMucmEoZnVuY3Rpb24oZCxjKXtkLm5leHRTaWJsaW5nJiZiLkZhKGQubmV4dFNpYmxpbmcsYSxjKX0pfX07Yi5iKFwiX190cl9hbWJ0bnNcIixiLnphLmtiKTtiLmw9e307Yi5sLmg9ZnVuY3Rpb24oYSl7dGhpcy5oPWF9O2IubC5oLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7dmFyIGE9Yi5hLnUodGhpcy5oKSxhPVwic2NyaXB0XCI9PT1hP1widGV4dFwiOlwidGV4dGFyZWFcIj09PWE/XCJ2YWx1ZVwiOlwiaW5uZXJIVE1MXCI7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5oW2FdO1xudmFyIGQ9YXJndW1lbnRzWzBdO1wiaW5uZXJIVE1MXCI9PT1hP2IuYS5jYSh0aGlzLmgsZCk6dGhpcy5oW2FdPWR9O2IubC5oLnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKGEpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBiLmEuZi5nZXQodGhpcy5oLFwidGVtcGxhdGVTb3VyY2VEYXRhX1wiK2EpO2IuYS5mLnNldCh0aGlzLmgsXCJ0ZW1wbGF0ZVNvdXJjZURhdGFfXCIrYSxhcmd1bWVudHNbMV0pfTtiLmwuTz1mdW5jdGlvbihhKXt0aGlzLmg9YX07Yi5sLk8ucHJvdG90eXBlPW5ldyBiLmwuaDtiLmwuTy5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBhPWIuYS5mLmdldCh0aGlzLmgsXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiKXx8e307YS5BYT09PUkmJmEuaWEmJihhLkFhPWEuaWEuaW5uZXJIVE1MKTtyZXR1cm4gYS5BYX1iLmEuZi5zZXQodGhpcy5oLFwiX19rb19hbm9uX3RlbXBsYXRlX19cIix7QWE6YXJndW1lbnRzWzBdfSl9O2IubC5oLnByb3RvdHlwZS5ub2Rlcz1cbmZ1bmN0aW9uKCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4oYi5hLmYuZ2V0KHRoaXMuaCxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIpfHx7fSkuaWE7Yi5hLmYuc2V0KHRoaXMuaCxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIse2lhOmFyZ3VtZW50c1swXX0pfTtiLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixiLmwpO2IuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYi5sLmgpO2IuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGIubC5PKTt2YXIgTztiLndhPWZ1bmN0aW9uKGEpe2EhPUkmJiEoYSBpbnN0YW5jZW9mIGIudikmJmooRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKSk7Tz1hfTtiLnZhPWZ1bmN0aW9uKGEsZCxjLGUsZil7Yz1jfHx7fTsoYy50ZW1wbGF0ZUVuZ2luZXx8Tyk9PUkmJmooRXJyb3IoXCJTZXQgYSB0ZW1wbGF0ZSBlbmdpbmUgYmVmb3JlIGNhbGxpbmcgcmVuZGVyVGVtcGxhdGVcIikpO1xuZj1mfHxcInJlcGxhY2VDaGlsZHJlblwiO2lmKGUpe3ZhciBnPU4oZSk7cmV0dXJuIGIuaihmdW5jdGlvbigpe3ZhciBoPWQmJmQgaW5zdGFuY2VvZiBiLno/ZDpuZXcgYi56KGIuYS5kKGQpKSxrPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YShoLiRkYXRhLGgpOmEsaD1UKGUsZixrLGgsYyk7XCJyZXBsYWNlTm9kZVwiPT1mJiYoZT1oLGc9TihlKSl9LHAse0thOmZ1bmN0aW9uKCl7cmV0dXJuIWd8fCFiLmEuWChnKX0sVzpnJiZcInJlcGxhY2VOb2RlXCI9PWY/Zy5wYXJlbnROb2RlOmd9KX1yZXR1cm4gYi5zLnJhKGZ1bmN0aW9uKGUpe2IudmEoYSxkLGMsZSxcInJlcGxhY2VOb2RlXCIpfSl9O2IuTWI9ZnVuY3Rpb24oYSxkLGMsZSxmKXtmdW5jdGlvbiBnKGEsYil7VShiLGspO2MuYWZ0ZXJSZW5kZXImJmMuYWZ0ZXJSZW5kZXIoYixhKX1mdW5jdGlvbiBoKGQsZSl7az1mLmNyZWF0ZUNoaWxkQ29udGV4dChiLmEuZChkKSxjLmFzKTtrLiRpbmRleD1lO3ZhciBnPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/XG5hKGQsayk6YTtyZXR1cm4gVChwLFwiaWdub3JlVGFyZ2V0Tm9kZVwiLGcsayxjKX12YXIgaztyZXR1cm4gYi5qKGZ1bmN0aW9uKCl7dmFyIGE9Yi5hLmQoZCl8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBhLmxlbmd0aCYmKGE9W2FdKTthPWIuYS5mYShhLGZ1bmN0aW9uKGEpe3JldHVybiBjLmluY2x1ZGVEZXN0cm95ZWR8fGE9PT1JfHxhPT09cHx8IWIuYS5kKGEuX2Rlc3Ryb3kpfSk7Yi5yLksoYi5hLiRhLHAsW2UsYSxoLGMsZ10pfSxwLHtXOmV9KX07Yi5jLnRlbXBsYXRlPXtpbml0OmZ1bmN0aW9uKGEsZCl7dmFyIGM9Yi5hLmQoZCgpKTtpZihcInN0cmluZ1wiIT10eXBlb2YgYyYmIWMubmFtZSYmKDE9PWEubm9kZVR5cGV8fDg9PWEubm9kZVR5cGUpKWM9MT09YS5ub2RlVHlwZT9hLmNoaWxkTm9kZXM6Yi5lLmNoaWxkTm9kZXMoYSksYz1iLmEuSGIoYyksKG5ldyBiLmwuTyhhKSkubm9kZXMoYyk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOm19fSx1cGRhdGU6ZnVuY3Rpb24oYSxcbmQsYyxlLGYpe2Q9Yi5hLmQoZCgpKTtjPXt9O2U9bTt2YXIgZyxoPXA7XCJzdHJpbmdcIiE9dHlwZW9mIGQmJihjPWQsZD1jLm5hbWUsXCJpZlwiaW4gYyYmKGU9Yi5hLmQoY1tcImlmXCJdKSksZSYmXCJpZm5vdFwiaW4gYyYmKGU9IWIuYS5kKGMuaWZub3QpKSxnPWIuYS5kKGMuZGF0YSkpO1wiZm9yZWFjaFwiaW4gYz9oPWIuTWIoZHx8YSxlJiZjLmZvcmVhY2h8fFtdLGMsYSxmKTplPyhmPVwiZGF0YVwiaW4gYz9mLmNyZWF0ZUNoaWxkQ29udGV4dChnLGMuYXMpOmYsaD1iLnZhKGR8fGEsZixjLGEpKTpiLmUuWShhKTtmPWg7KGc9Yi5hLmYuZ2V0KGEsXCJfX2tvX190ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleV9fXCIpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZy5CJiZnLkIoKTtiLmEuZi5zZXQoYSxcIl9fa29fX3RlbXBsYXRlQ29tcHV0ZWREb21EYXRhS2V5X19cIixmJiZmLnBhKCk/ZjpJKX19O2IuZy5RLnRlbXBsYXRlPWZ1bmN0aW9uKGEpe2E9Yi5nLmFhKGEpO3JldHVybiAxPT1hLmxlbmd0aCYmYVswXS51bmtub3dufHxcbmIuZy5FYihhLFwibmFtZVwiKT9wOlwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzIG5lc3RlZCB3aXRoaW4gaXRzIHRlbXBsYXRlc1wifTtiLmUuSS50ZW1wbGF0ZT1tO2IuYihcInNldFRlbXBsYXRlRW5naW5lXCIsYi53YSk7Yi5iKFwicmVuZGVyVGVtcGxhdGVcIixiLnZhKTtiLmEuSmE9ZnVuY3Rpb24oYSxiLGMpe2E9YXx8W107Yj1ifHxbXTtyZXR1cm4gYS5sZW5ndGg8PWIubGVuZ3RoP1MoYSxiLFwiYWRkZWRcIixcImRlbGV0ZWRcIixjKTpTKGIsYSxcImRlbGV0ZWRcIixcImFkZGVkXCIsYyl9O2IuYihcInV0aWxzLmNvbXBhcmVBcnJheXNcIixiLmEuSmEpO2IuYS4kYT1mdW5jdGlvbihhLGQsYyxlLGYpe2Z1bmN0aW9uIGcoYSxiKXt0PWxbYl07dyE9PWImJih6W2FdPXQpO3QubmEodysrKTtNKHQuTSk7cy5wdXNoKHQpO0EucHVzaCh0KX1mdW5jdGlvbiBoKGEsYyl7aWYoYSlmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspY1tkXSYmYi5hLm8oY1tkXS5NLFxuZnVuY3Rpb24oYil7YShiLGQsY1tkXS5VKX0pfWQ9ZHx8W107ZT1lfHx7fTt2YXIgaz1iLmEuZi5nZXQoYSxcInNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdfbGFzdE1hcHBpbmdSZXN1bHRcIik9PT1JLGw9Yi5hLmYuZ2V0KGEsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIpfHxbXSxuPWIuYS5WKGwsZnVuY3Rpb24oYSl7cmV0dXJuIGEuVX0pLHE9Yi5hLkphKG4sZCkscz1bXSx2PTAsdz0wLEI9W10sQT1bXTtkPVtdO2Zvcih2YXIgej1bXSxuPVtdLHQsRD0wLEMsRTtDPXFbRF07RCsrKXN3aXRjaChFPUMubW92ZWQsQy5zdGF0dXMpe2Nhc2UgXCJkZWxldGVkXCI6RT09PUkmJih0PWxbdl0sdC5qJiZ0LmouQigpLEIucHVzaC5hcHBseShCLE0odC5NKSksZS5iZWZvcmVSZW1vdmUmJihkW0RdPXQsQS5wdXNoKHQpKSk7disrO2JyZWFrO2Nhc2UgXCJyZXRhaW5lZFwiOmcoRCx2KyspO2JyZWFrO2Nhc2UgXCJhZGRlZFwiOkUhPT1JP1xuZyhELEUpOih0PXtVOkMudmFsdWUsbmE6Yi5tKHcrKyl9LHMucHVzaCh0KSxBLnB1c2godCksa3x8KG5bRF09dCkpfWgoZS5iZWZvcmVNb3ZlLHopO2IuYS5vKEIsZS5iZWZvcmVSZW1vdmU/Yi5BOmIucmVtb3ZlTm9kZSk7Zm9yKHZhciBEPTAsaz1iLmUuZmlyc3RDaGlsZChhKSxIO3Q9QVtEXTtEKyspe3QuTXx8Yi5hLmV4dGVuZCh0LGhhKGEsYyx0LlUsZix0Lm5hKSk7Zm9yKHY9MDtxPXQuTVt2XTtrPXEubmV4dFNpYmxpbmcsSD1xLHYrKylxIT09ayYmYi5lLlBhKGEscSxIKTshdC5BYiYmZiYmKGYodC5VLHQuTSx0Lm5hKSx0LkFiPW0pfWgoZS5iZWZvcmVSZW1vdmUsZCk7aChlLmFmdGVyTW92ZSx6KTtoKGUuYWZ0ZXJBZGQsbik7Yi5hLmYuc2V0KGEsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIscyl9O2IuYihcInV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdcIixiLmEuJGEpO2IuQz1mdW5jdGlvbigpe3RoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz1cbnJ9O2IuQy5wcm90b3R5cGU9bmV3IGIudjtiLkMucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGEpe3ZhciBkPSEoOT5iLmEuWikmJmEubm9kZXM/YS5ub2RlcygpOnA7aWYoZClyZXR1cm4gYi5hLkwoZC5jbG9uZU5vZGUobSkuY2hpbGROb2Rlcyk7YT1hLnRleHQoKTtyZXR1cm4gYi5hLnRhKGEpfTtiLkMub2E9bmV3IGIuQztiLndhKGIuQy5vYSk7Yi5iKFwibmF0aXZlVGVtcGxhdGVFbmdpbmVcIixiLkMpO2IucWE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkRiPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIEZ8fCFGLnRtcGwpcmV0dXJuIDA7dHJ5e2lmKDA8PUYudG1wbC50YWcudG1wbC5vcGVuLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpKXJldHVybiAyfWNhdGNoKGEpe31yZXR1cm4gMX0oKTt0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsYyxlKXtlPWV8fHt9OzI+YSYmaihFcnJvcihcIllvdXIgdmVyc2lvbiBvZiBqUXVlcnkudG1wbCBpcyB0b28gb2xkLiBQbGVhc2UgdXBncmFkZSB0byBqUXVlcnkudG1wbCAxLjAuMHByZSBvciBsYXRlci5cIikpO1xudmFyIGY9Yi5kYXRhKFwicHJlY29tcGlsZWRcIik7Znx8KGY9Yi50ZXh0KCl8fFwiXCIsZj1GLnRlbXBsYXRlKHAsXCJ7e2tvX3dpdGggJGl0ZW0ua29CaW5kaW5nQ29udGV4dH19XCIrZitcInt7L2tvX3dpdGh9fVwiKSxiLmRhdGEoXCJwcmVjb21waWxlZFwiLGYpKTtiPVtjLiRkYXRhXTtjPUYuZXh0ZW5kKHtrb0JpbmRpbmdDb250ZXh0OmN9LGUudGVtcGxhdGVPcHRpb25zKTtjPUYudG1wbChmLGIsYyk7Yy5hcHBlbmRUbyh5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO0YuZnJhZ21lbnRzPXt9O3JldHVybiBjfTt0aGlzLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaz1mdW5jdGlvbihhKXtyZXR1cm5cInt7a29fY29kZSAoKGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIrYStcIiB9KSgpKSB9fVwifTt0aGlzLmFkZFRlbXBsYXRlPWZ1bmN0aW9uKGEsYil7eS53cml0ZShcIjxzY3JpcHQgdHlwZT0ndGV4dC9odG1sJyBpZD0nXCIrYStcIic+XCIrYitcIlxceDNjL3NjcmlwdD5cIil9OzA8YSYmKEYudG1wbC50YWcua29fY29kZT1cbntvcGVuOlwiX18ucHVzaCgkMSB8fCAnJyk7XCJ9LEYudG1wbC50YWcua29fd2l0aD17b3BlbjpcIndpdGgoJDEpIHtcIixjbG9zZTpcIn0gXCJ9KX07Yi5xYS5wcm90b3R5cGU9bmV3IGIudjt3PW5ldyBiLnFhOzA8dy5EYiYmYi53YSh3KTtiLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixiLnFhKX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcmVxdWlyZSYmXCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9MKG1vZHVsZS5leHBvcnRzfHxleHBvcnRzKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLEwpOkwoeC5rbz17fSk7bTtcbn0pKCk7XG4iLCJ2YXIga28gPSByZXF1aXJlKCdrbm9ja291dC1jbGllbnQnKSxcblx0ZGF0ZWpzID0gcmVxdWlyZSgnZGF0ZWpzJyksXG5cdF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5rby5tYXBwaW5nID0gcmVxdWlyZSgna25vY2tvdXQtbWFwcGluZycpO1xuXG5mdW5jdGlvbiBWaWV3TW9kZWwod3RmSGlzdG9yeSkge1xuXHR0aGlzLnd0Zkhpc3RvcnkgPSBrby5vYnNlcnZhYmxlQXJyYXkod3RmSGlzdG9yeSk7XG5cdFxuXHR0aGlzLnd0ZkNvdW50ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMud3RmSGlzdG9yeSgpLmxlbmd0aDtcblx0fSwgdGhpcyk7XG5cdFxuXHR0aGlzLmxhc3RXdGYgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0IFx0cmV0dXJuIF8ubGFzdCh0aGlzLnd0Zkhpc3RvcnkoKSk7XG4gXHR9LCB0aGlzKTtcblx0XG5cdHRoaXMubGFzdFd0ZlRleHQgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHR2YXIgbGFzdFd0ZiA9IHRoaXMubGFzdFd0ZigpO1xuXHRcdGlmIChsYXN0V3RmKVxuXHRcdFx0cmV0dXJuIGZvcm1hdERhdGUobGFzdFd0Zi5kYXRlKTtcblx0XHRyZXR1cm4gJ25ldmVyJztcblx0fSwgdGhpcyk7XG5cblx0dGhpcy50b2RheXNXdGZzID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMud3RmSGlzdG9yeSgpLm1hcChtYXBEYXRlKS5maWx0ZXIoaXNUb2RheSk7XG5cdH0sIHRoaXMpO1xuXG5cdHRoaXMudG9kYXlXdGZQZXJNaW4gPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHR2YXIgdG9kYXkgPSB0aGlzLnRvZGF5c1d0ZnMoKTtcblx0XHR2YXIgZmlyc3QgPSBfLmZpcnN0KHRvZGF5KTtcblx0XHR2YXIgbGFzdCA9IF8ubGFzdCh0b2RheSk7XG5cdFx0dmFyIG1pbnMgPSAobGFzdCAtIGZpcnN0KSAvIDEwMDAgLyA2MDtcblx0XHR2YXIgY291bnQgPSB0b2RheS5sZW5ndGg7XG5cdFx0dmFyIHd0ZlBlck1pbiA9IGNvdW50IC8gbWlucyB8fCAwO1xuXHRcdHJldHVybiB3dGZQZXJNaW4udG9GaXhlZCgzKTtcblx0fSwgdGhpcyk7XG5cblx0dGhpcy5wYXN0MjQgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy53dGZIaXN0b3J5KCkubWFwKG1hcERhdGUpLmZpbHRlcihpc1Bhc3QyNCk7XG5cdH0sIHRoaXMpO1xuXG5cdHRoaXMudG9kYXlXdGZDb3VudCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnRvZGF5c1d0ZnMoKS5sZW5ndGg7XG5cdH0sIHRoaXMpO1xuXG5cdHRoaXMuaG91cmx5V3RmcyA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBncm91cGVkID0gXy5ncm91cEJ5KHRoaXMucGFzdDI0KCksIG1hcEhvdXIpO1xuXHRcdHZhciBob3VybHkgPSBbXTtcblx0XHR2YXIgaSwgbTtcblx0XHR2YXIgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG5cdFx0XHRob3VyID0gKGkgKyBvZmZzZXQgKyAxKSAlIDI0O1xuXHRcdFx0aG91cmx5W2ldID0geyBob3VyOiBob3VyLCB3dGZzOiBncm91cGVkWycnICsgaG91cl0gfHwgW10gfTtcblx0XHR9XG5cdFx0cmV0dXJuIGhvdXJseTtcblx0fSwgdGhpcyk7XG5cblx0dGhpcy5ob3VybHlWaXNpYmxlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG5cblx0a28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhpc3RvcnkgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnd0Zkhpc3RvcnkoKSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3d0Zkhpc3RvcnknLCBoaXN0b3J5KTtcblx0fSwgdGhpcykuZXh0ZW5kKHt0aHJvdHRsZTogMX0pO1xufVxuXG5WaWV3TW9kZWwucHJvdG90eXBlLnd0ZiA9IGZ1bmN0aW9uKCkge1xuXHRkYXRlID0gbmV3IERhdGUoKTtcblx0dGhpcy53dGZIaXN0b3J5LnB1c2goeyBkYXRlOiBkYXRlIH0pO1xufVxuXG5WaWV3TW9kZWwucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMud3RmSGlzdG9yeS5yZW1vdmVBbGwoKTtcbn1cblxuVmlld01vZGVsLnByb3RvdHlwZS50b2dnbGVIb3VybHlWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuaG91cmx5VmlzaWJsZSghdGhpcy5ob3VybHlWaXNpYmxlKCkpO1xufVxuXG5mdW5jdGlvbiBtYXBIb3VyKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcbn1cblxuZnVuY3Rpb24gbWFwRGF0ZShpdGVtKSB7XG5cdHJldHVybiBpdGVtLmRhdGU7XG59XG5cbmZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5iZXR3ZWVuKERhdGUudG9kYXkoKSwgRGF0ZS5wYXJzZSgndG9tb3Jyb3cnKSk7XG59XG5cbmZ1bmN0aW9uIGlzUGFzdDI0KGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuY29tcGFyZVRvKG5ldyBEYXRlKCkuYWRkKC0xKS5kYXlzKCkpID09PSAxO1xufVxuXG5mdW5jdGlvbiBmaXhEYXRlKGtleSwgdmFsdWUpe1xuXHRyZXR1cm4gKGtleSA9PT0gJ2RhdGUnKSA/IG5ldyBEYXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUudG9TdHJpbmcoJ2RkZCwgTU1NIGRkLCB5eXl5IGg6bW06c3MgdHQnKTtcbn1cblxudmFyIHN0b3JlZEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3RmSGlzdG9yeScpO1xudmFyIHd0Zkhpc3RvcnkgPSBKU09OLnBhcnNlKHN0b3JlZEhpc3RvcnksIGZpeERhdGUpIHx8IFtdO1xudmFyIHZtID0gbmV3IFZpZXdNb2RlbCh3dGZIaXN0b3J5KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2bTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKGV2LnNvdXJjZSA9PT0gd2luZG93ICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiIsIihmdW5jdGlvbihwcm9jZXNzKXsvKipcclxuICogQHZlcnNpb246IDEuMCBBbHBoYS0xXHJcbiAqIEBhdXRob3I6IENvb2xpdGUgSW5jLiBodHRwOi8vd3d3LmNvb2xpdGUuY29tL1xyXG4gKiBAZGF0ZTogMjAwOC0wNS0xM1xyXG4gKiBAY29weXJpZ2h0OiBDb3B5cmlnaHQgKGMpIDIwMDYtMjAwOCwgQ29vbGl0ZSBJbmMuIChodHRwOi8vd3d3LmNvb2xpdGUuY29tLykuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIEBsaWNlbnNlOiBMaWNlbnNlZCB1bmRlciBUaGUgTUlUIExpY2Vuc2UuIFNlZSBsaWNlbnNlLnR4dCBhbmQgaHR0cDovL3d3dy5kYXRlanMuY29tL2xpY2Vuc2UvLiBcclxuICogQHdlYnNpdGU6IGh0dHA6Ly93d3cuZGF0ZWpzLmNvbS9cclxuICovXHJcbkRhdGUuQ3VsdHVyZUluZm89e25hbWU6XCJlbi1VU1wiLGVuZ2xpc2hOYW1lOlwiRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcIixuYXRpdmVOYW1lOlwiRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcIixkYXlOYW1lczpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSxhYmJyZXZpYXRlZERheU5hbWVzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxzaG9ydGVzdERheU5hbWVzOltcIlN1XCIsXCJNb1wiLFwiVHVcIixcIldlXCIsXCJUaFwiLFwiRnJcIixcIlNhXCJdLGZpcnN0TGV0dGVyRGF5TmFtZXM6W1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxtb250aE5hbWVzOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxhYmJyZXZpYXRlZE1vbnRoTmFtZXM6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSxhbURlc2lnbmF0b3I6XCJBTVwiLHBtRGVzaWduYXRvcjpcIlBNXCIsZmlyc3REYXlPZldlZWs6MCx0d29EaWdpdFllYXJNYXg6MjAyOSxkYXRlRWxlbWVudE9yZGVyOlwibWR5XCIsZm9ybWF0UGF0dGVybnM6e3Nob3J0RGF0ZTpcIk0vZC95eXl5XCIsbG9uZ0RhdGU6XCJkZGRkLCBNTU1NIGRkLCB5eXl5XCIsc2hvcnRUaW1lOlwiaDptbSB0dFwiLGxvbmdUaW1lOlwiaDptbTpzcyB0dFwiLGZ1bGxEYXRlVGltZTpcImRkZGQsIE1NTU0gZGQsIHl5eXkgaDptbTpzcyB0dFwiLHNvcnRhYmxlRGF0ZVRpbWU6XCJ5eXl5LU1NLWRkVEhIOm1tOnNzXCIsdW5pdmVyc2FsU29ydGFibGVEYXRlVGltZTpcInl5eXktTU0tZGQgSEg6bW06c3NaXCIscmZjMTEyMzpcImRkZCwgZGQgTU1NIHl5eXkgSEg6bW06c3MgR01UXCIsbW9udGhEYXk6XCJNTU1NIGRkXCIseWVhck1vbnRoOlwiTU1NTSwgeXl5eVwifSxyZWdleFBhdHRlcm5zOntqYW46L15qYW4odWFyeSk/L2ksZmViOi9eZmViKHJ1YXJ5KT8vaSxtYXI6L15tYXIoY2gpPy9pLGFwcjovXmFwcihpbCk/L2ksbWF5Oi9ebWF5L2ksanVuOi9eanVuKGUpPy9pLGp1bDovXmp1bCh5KT8vaSxhdWc6L15hdWcodXN0KT8vaSxzZXA6L15zZXAodChlbWJlcik/KT8vaSxvY3Q6L15vY3Qob2Jlcik/L2ksbm92Oi9ebm92KGVtYmVyKT8vaSxkZWM6L15kZWMoZW1iZXIpPy9pLHN1bjovXnN1KG4oZGF5KT8pPy9pLG1vbjovXm1vKG4oZGF5KT8pPy9pLHR1ZTovXnR1KGUocyhkYXkpPyk/KT8vaSx3ZWQ6L153ZShkKG5lc2RheSk/KT8vaSx0aHU6L150aCh1KHIocyhkYXkpPyk/KT8pPy9pLGZyaTovXmZyKGkoZGF5KT8pPy9pLHNhdDovXnNhKHQodXJkYXkpPyk/L2ksZnV0dXJlOi9ebmV4dC9pLHBhc3Q6L15sYXN0fHBhc3R8cHJldihpb3VzKT8vaSxhZGQ6L14oXFwrfGFmdChlcik/fGZyb218aGVuY2UpL2ksc3VidHJhY3Q6L14oXFwtfGJlZihvcmUpP3xhZ28pL2kseWVzdGVyZGF5Oi9eeWVzKHRlcmRheSk/L2ksdG9kYXk6L150KG9kKGF5KT8pPy9pLHRvbW9ycm93Oi9edG9tKG9ycm93KT8vaSxub3c6L15uKG93KT8vaSxtaWxsaXNlY29uZDovXm1zfG1pbGxpKHNlY29uZCk/cz8vaSxzZWNvbmQ6L15zZWMob25kKT9zPy9pLG1pbnV0ZTovXm1ufG1pbih1dGUpP3M/L2ksaG91cjovXmgob3VyKT9zPy9pLHdlZWs6L153KGVlayk/cz8vaSxtb250aDovXm0ob250aCk/cz8vaSxkYXk6L15kKGF5KT9zPy9pLHllYXI6L155KGVhcik/cz8vaSxzaG9ydE1lcmlkaWFuOi9eKGF8cCkvaSxsb25nTWVyaWRpYW46L14oYVxcLj9tP1xcLj98cFxcLj9tP1xcLj8pL2ksdGltZXpvbmU6L14oKGUoc3xkKXR8YyhzfGQpdHxtKHN8ZCl0fHAoc3xkKXQpfCgoZ210KT9cXHMqKFxcK3xcXC0pXFxzKlxcZFxcZFxcZFxcZD8pfGdtdHx1dGMpL2ksb3JkaW5hbFN1ZmZpeDovXlxccyooc3R8bmR8cmR8dGgpL2ksdGltZUNvbnRleHQ6L15cXHMqKFxcOnxhKD8hdXxwKXxwKS9pfSx0aW1lem9uZXM6W3tuYW1lOlwiVVRDXCIsb2Zmc2V0OlwiLTAwMFwifSx7bmFtZTpcIkdNVFwiLG9mZnNldDpcIi0wMDBcIn0se25hbWU6XCJFU1RcIixvZmZzZXQ6XCItMDUwMFwifSx7bmFtZTpcIkVEVFwiLG9mZnNldDpcIi0wNDAwXCJ9LHtuYW1lOlwiQ1NUXCIsb2Zmc2V0OlwiLTA2MDBcIn0se25hbWU6XCJDRFRcIixvZmZzZXQ6XCItMDUwMFwifSx7bmFtZTpcIk1TVFwiLG9mZnNldDpcIi0wNzAwXCJ9LHtuYW1lOlwiTURUXCIsb2Zmc2V0OlwiLTA2MDBcIn0se25hbWU6XCJQU1RcIixvZmZzZXQ6XCItMDgwMFwifSx7bmFtZTpcIlBEVFwiLG9mZnNldDpcIi0wNzAwXCJ9XX07XG4oZnVuY3Rpb24oKXt2YXIgJEQ9RGF0ZSwkUD0kRC5wcm90b3R5cGUsJEM9JEQuQ3VsdHVyZUluZm8scD1mdW5jdGlvbihzLGwpe2lmKCFsKXtsPTI7fVxucmV0dXJuKFwiMDAwXCIrcykuc2xpY2UobCotMSk7fTskUC5jbGVhclRpbWU9ZnVuY3Rpb24oKXt0aGlzLnNldEhvdXJzKDApO3RoaXMuc2V0TWludXRlcygwKTt0aGlzLnNldFNlY29uZHMoMCk7dGhpcy5zZXRNaWxsaXNlY29uZHMoMCk7cmV0dXJuIHRoaXM7fTskUC5zZXRUaW1lVG9Ob3c9ZnVuY3Rpb24oKXt2YXIgbj1uZXcgRGF0ZSgpO3RoaXMuc2V0SG91cnMobi5nZXRIb3VycygpKTt0aGlzLnNldE1pbnV0ZXMobi5nZXRNaW51dGVzKCkpO3RoaXMuc2V0U2Vjb25kcyhuLmdldFNlY29uZHMoKSk7dGhpcy5zZXRNaWxsaXNlY29uZHMobi5nZXRNaWxsaXNlY29uZHMoKSk7cmV0dXJuIHRoaXM7fTskRC50b2RheT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSgpLmNsZWFyVGltZSgpO307JEQuY29tcGFyZT1mdW5jdGlvbihkYXRlMSxkYXRlMil7aWYoaXNOYU4oZGF0ZTEpfHxpc05hTihkYXRlMikpe3Rocm93IG5ldyBFcnJvcihkYXRlMStcIiAtIFwiK2RhdGUyKTt9ZWxzZSBpZihkYXRlMSBpbnN0YW5jZW9mIERhdGUmJmRhdGUyIGluc3RhbmNlb2YgRGF0ZSl7cmV0dXJuKGRhdGUxPGRhdGUyKT8tMTooZGF0ZTE+ZGF0ZTIpPzE6MDt9ZWxzZXt0aHJvdyBuZXcgVHlwZUVycm9yKGRhdGUxK1wiIC0gXCIrZGF0ZTIpO319OyRELmVxdWFscz1mdW5jdGlvbihkYXRlMSxkYXRlMil7cmV0dXJuKGRhdGUxLmNvbXBhcmVUbyhkYXRlMik9PT0wKTt9OyRELmdldERheU51bWJlckZyb21OYW1lPWZ1bmN0aW9uKG5hbWUpe3ZhciBuPSRDLmRheU5hbWVzLG09JEMuYWJicmV2aWF0ZWREYXlOYW1lcyxvPSRDLnNob3J0ZXN0RGF5TmFtZXMscz1uYW1lLnRvTG93ZXJDYXNlKCk7Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe2lmKG5baV0udG9Mb3dlckNhc2UoKT09c3x8bVtpXS50b0xvd2VyQ2FzZSgpPT1zfHxvW2ldLnRvTG93ZXJDYXNlKCk9PXMpe3JldHVybiBpO319XG5yZXR1cm4tMTt9OyRELmdldE1vbnRoTnVtYmVyRnJvbU5hbWU9ZnVuY3Rpb24obmFtZSl7dmFyIG49JEMubW9udGhOYW1lcyxtPSRDLmFiYnJldmlhdGVkTW9udGhOYW1lcyxzPW5hbWUudG9Mb3dlckNhc2UoKTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7aWYobltpXS50b0xvd2VyQ2FzZSgpPT1zfHxtW2ldLnRvTG93ZXJDYXNlKCk9PXMpe3JldHVybiBpO319XG5yZXR1cm4tMTt9OyRELmlzTGVhcFllYXI9ZnVuY3Rpb24oeWVhcil7cmV0dXJuKCh5ZWFyJTQ9PT0wJiZ5ZWFyJTEwMCE9PTApfHx5ZWFyJTQwMD09PTApO307JEQuZ2V0RGF5c0luTW9udGg9ZnVuY3Rpb24oeWVhcixtb250aCl7cmV0dXJuWzMxLCgkRC5pc0xlYXBZZWFyKHllYXIpPzI5OjI4KSwzMSwzMCwzMSwzMCwzMSwzMSwzMCwzMSwzMCwzMV1bbW9udGhdO307JEQuZ2V0VGltZXpvbmVBYmJyZXZpYXRpb249ZnVuY3Rpb24ob2Zmc2V0KXt2YXIgej0kQy50aW1lem9uZXMscDtmb3IodmFyIGk9MDtpPHoubGVuZ3RoO2krKyl7aWYoeltpXS5vZmZzZXQ9PT1vZmZzZXQpe3JldHVybiB6W2ldLm5hbWU7fX1cbnJldHVybiBudWxsO307JEQuZ2V0VGltZXpvbmVPZmZzZXQ9ZnVuY3Rpb24obmFtZSl7dmFyIHo9JEMudGltZXpvbmVzLHA7Zm9yKHZhciBpPTA7aTx6Lmxlbmd0aDtpKyspe2lmKHpbaV0ubmFtZT09PW5hbWUudG9VcHBlckNhc2UoKSl7cmV0dXJuIHpbaV0ub2Zmc2V0O319XG5yZXR1cm4gbnVsbDt9OyRQLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0VGltZSgpKTt9OyRQLmNvbXBhcmVUbz1mdW5jdGlvbihkYXRlKXtyZXR1cm4gRGF0ZS5jb21wYXJlKHRoaXMsZGF0ZSk7fTskUC5lcXVhbHM9ZnVuY3Rpb24oZGF0ZSl7cmV0dXJuIERhdGUuZXF1YWxzKHRoaXMsZGF0ZXx8bmV3IERhdGUoKSk7fTskUC5iZXR3ZWVuPWZ1bmN0aW9uKHN0YXJ0LGVuZCl7cmV0dXJuIHRoaXMuZ2V0VGltZSgpPj1zdGFydC5nZXRUaW1lKCkmJnRoaXMuZ2V0VGltZSgpPD1lbmQuZ2V0VGltZSgpO307JFAuaXNBZnRlcj1mdW5jdGlvbihkYXRlKXtyZXR1cm4gdGhpcy5jb21wYXJlVG8oZGF0ZXx8bmV3IERhdGUoKSk9PT0xO307JFAuaXNCZWZvcmU9ZnVuY3Rpb24oZGF0ZSl7cmV0dXJuKHRoaXMuY29tcGFyZVRvKGRhdGV8fG5ldyBEYXRlKCkpPT09LTEpO307JFAuaXNUb2RheT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzU2FtZURheShuZXcgRGF0ZSgpKTt9OyRQLmlzU2FtZURheT1mdW5jdGlvbihkYXRlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLmNsZWFyVGltZSgpLmVxdWFscyhkYXRlLmNsb25lKCkuY2xlYXJUaW1lKCkpO307JFAuYWRkTWlsbGlzZWNvbmRzPWZ1bmN0aW9uKHZhbHVlKXt0aGlzLnNldE1pbGxpc2Vjb25kcyh0aGlzLmdldE1pbGxpc2Vjb25kcygpK3ZhbHVlKTtyZXR1cm4gdGhpczt9OyRQLmFkZFNlY29uZHM9ZnVuY3Rpb24odmFsdWUpe3JldHVybiB0aGlzLmFkZE1pbGxpc2Vjb25kcyh2YWx1ZSoxMDAwKTt9OyRQLmFkZE1pbnV0ZXM9ZnVuY3Rpb24odmFsdWUpe3JldHVybiB0aGlzLmFkZE1pbGxpc2Vjb25kcyh2YWx1ZSo2MDAwMCk7fTskUC5hZGRIb3Vycz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkTWlsbGlzZWNvbmRzKHZhbHVlKjM2MDAwMDApO307JFAuYWRkRGF5cz1mdW5jdGlvbih2YWx1ZSl7dGhpcy5zZXREYXRlKHRoaXMuZ2V0RGF0ZSgpK3ZhbHVlKTtyZXR1cm4gdGhpczt9OyRQLmFkZFdlZWtzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGREYXlzKHZhbHVlKjcpO307JFAuYWRkTW9udGhzPWZ1bmN0aW9uKHZhbHVlKXt2YXIgbj10aGlzLmdldERhdGUoKTt0aGlzLnNldERhdGUoMSk7dGhpcy5zZXRNb250aCh0aGlzLmdldE1vbnRoKCkrdmFsdWUpO3RoaXMuc2V0RGF0ZShNYXRoLm1pbihuLCRELmdldERheXNJbk1vbnRoKHRoaXMuZ2V0RnVsbFllYXIoKSx0aGlzLmdldE1vbnRoKCkpKSk7cmV0dXJuIHRoaXM7fTskUC5hZGRZZWFycz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkTW9udGhzKHZhbHVlKjEyKTt9OyRQLmFkZD1mdW5jdGlvbihjb25maWcpe2lmKHR5cGVvZiBjb25maWc9PVwibnVtYmVyXCIpe3RoaXMuX29yaWVudD1jb25maWc7cmV0dXJuIHRoaXM7fVxudmFyIHg9Y29uZmlnO2lmKHgubWlsbGlzZWNvbmRzKXt0aGlzLmFkZE1pbGxpc2Vjb25kcyh4Lm1pbGxpc2Vjb25kcyk7fVxuaWYoeC5zZWNvbmRzKXt0aGlzLmFkZFNlY29uZHMoeC5zZWNvbmRzKTt9XG5pZih4Lm1pbnV0ZXMpe3RoaXMuYWRkTWludXRlcyh4Lm1pbnV0ZXMpO31cbmlmKHguaG91cnMpe3RoaXMuYWRkSG91cnMoeC5ob3Vycyk7fVxuaWYoeC53ZWVrcyl7dGhpcy5hZGRXZWVrcyh4LndlZWtzKTt9XG5pZih4Lm1vbnRocyl7dGhpcy5hZGRNb250aHMoeC5tb250aHMpO31cbmlmKHgueWVhcnMpe3RoaXMuYWRkWWVhcnMoeC55ZWFycyk7fVxuaWYoeC5kYXlzKXt0aGlzLmFkZERheXMoeC5kYXlzKTt9XG5yZXR1cm4gdGhpczt9O3ZhciAkeSwkbSwkZDskUC5nZXRXZWVrPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGcsbixzLHc7JHk9KCEkeSk/dGhpcy5nZXRGdWxsWWVhcigpOiR5OyRtPSghJG0pP3RoaXMuZ2V0TW9udGgoKSsxOiRtOyRkPSghJGQpP3RoaXMuZ2V0RGF0ZSgpOiRkO2lmKCRtPD0yKXthPSR5LTE7Yj0oYS80fDApLShhLzEwMHwwKSsoYS80MDB8MCk7Yz0oKGEtMSkvNHwwKS0oKGEtMSkvMTAwfDApKygoYS0xKS80MDB8MCk7cz1iLWM7ZT0wO2Y9JGQtMSsoMzEqKCRtLTEpKTt9ZWxzZXthPSR5O2I9KGEvNHwwKS0oYS8xMDB8MCkrKGEvNDAwfDApO2M9KChhLTEpLzR8MCktKChhLTEpLzEwMHwwKSsoKGEtMSkvNDAwfDApO3M9Yi1jO2U9cysxO2Y9JGQrKCgxNTMqKCRtLTMpKzIpLzUpKzU4K3M7fVxuZz0oYStiKSU3O2Q9KGYrZy1lKSU3O249KGYrMy1kKXwwO2lmKG48MCl7dz01My0oKGctcykvNXwwKTt9ZWxzZSBpZihuPjM2NCtzKXt3PTE7fWVsc2V7dz0obi83fDApKzE7fVxuJHk9JG09JGQ9bnVsbDtyZXR1cm4gdzt9OyRQLmdldElTT1dlZWs9ZnVuY3Rpb24oKXskeT10aGlzLmdldFVUQ0Z1bGxZZWFyKCk7JG09dGhpcy5nZXRVVENNb250aCgpKzE7JGQ9dGhpcy5nZXRVVENEYXRlKCk7cmV0dXJuIHAodGhpcy5nZXRXZWVrKCkpO307JFAuc2V0V2Vlaz1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5tb3ZlVG9EYXlPZldlZWsoMSkuYWRkV2Vla3Mobi10aGlzLmdldFdlZWsoKSk7fTskRC5fdmFsaWRhdGU9ZnVuY3Rpb24obixtaW4sbWF4LG5hbWUpe2lmKHR5cGVvZiBuPT1cInVuZGVmaW5lZFwiKXtyZXR1cm4gZmFsc2U7fWVsc2UgaWYodHlwZW9mIG4hPVwibnVtYmVyXCIpe3Rocm93IG5ldyBUeXBlRXJyb3IobitcIiBpcyBub3QgYSBOdW1iZXIuXCIpO31lbHNlIGlmKG48bWlufHxuPm1heCl7dGhyb3cgbmV3IFJhbmdlRXJyb3IobitcIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgXCIrbmFtZStcIi5cIik7fVxucmV0dXJuIHRydWU7fTskRC52YWxpZGF0ZU1pbGxpc2Vjb25kPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDAsOTk5LFwibWlsbGlzZWNvbmRcIik7fTskRC52YWxpZGF0ZVNlY29uZD1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwwLDU5LFwic2Vjb25kXCIpO307JEQudmFsaWRhdGVNaW51dGU9ZnVuY3Rpb24odmFsdWUpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMCw1OSxcIm1pbnV0ZVwiKTt9OyRELnZhbGlkYXRlSG91cj1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwwLDIzLFwiaG91clwiKTt9OyRELnZhbGlkYXRlRGF5PWZ1bmN0aW9uKHZhbHVlLHllYXIsbW9udGgpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMSwkRC5nZXREYXlzSW5Nb250aCh5ZWFyLG1vbnRoKSxcImRheVwiKTt9OyRELnZhbGlkYXRlTW9udGg9ZnVuY3Rpb24odmFsdWUpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMCwxMSxcIm1vbnRoXCIpO307JEQudmFsaWRhdGVZZWFyPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDAsOTk5OSxcInllYXJcIik7fTskUC5zZXQ9ZnVuY3Rpb24oY29uZmlnKXtpZigkRC52YWxpZGF0ZU1pbGxpc2Vjb25kKGNvbmZpZy5taWxsaXNlY29uZCkpe3RoaXMuYWRkTWlsbGlzZWNvbmRzKGNvbmZpZy5taWxsaXNlY29uZC10aGlzLmdldE1pbGxpc2Vjb25kcygpKTt9XG5pZigkRC52YWxpZGF0ZVNlY29uZChjb25maWcuc2Vjb25kKSl7dGhpcy5hZGRTZWNvbmRzKGNvbmZpZy5zZWNvbmQtdGhpcy5nZXRTZWNvbmRzKCkpO31cbmlmKCRELnZhbGlkYXRlTWludXRlKGNvbmZpZy5taW51dGUpKXt0aGlzLmFkZE1pbnV0ZXMoY29uZmlnLm1pbnV0ZS10aGlzLmdldE1pbnV0ZXMoKSk7fVxuaWYoJEQudmFsaWRhdGVIb3VyKGNvbmZpZy5ob3VyKSl7dGhpcy5hZGRIb3Vycyhjb25maWcuaG91ci10aGlzLmdldEhvdXJzKCkpO31cbmlmKCRELnZhbGlkYXRlTW9udGgoY29uZmlnLm1vbnRoKSl7dGhpcy5hZGRNb250aHMoY29uZmlnLm1vbnRoLXRoaXMuZ2V0TW9udGgoKSk7fVxuaWYoJEQudmFsaWRhdGVZZWFyKGNvbmZpZy55ZWFyKSl7dGhpcy5hZGRZZWFycyhjb25maWcueWVhci10aGlzLmdldEZ1bGxZZWFyKCkpO31cbmlmKCRELnZhbGlkYXRlRGF5KGNvbmZpZy5kYXksdGhpcy5nZXRGdWxsWWVhcigpLHRoaXMuZ2V0TW9udGgoKSkpe3RoaXMuYWRkRGF5cyhjb25maWcuZGF5LXRoaXMuZ2V0RGF0ZSgpKTt9XG5pZihjb25maWcudGltZXpvbmUpe3RoaXMuc2V0VGltZXpvbmUoY29uZmlnLnRpbWV6b25lKTt9XG5pZihjb25maWcudGltZXpvbmVPZmZzZXQpe3RoaXMuc2V0VGltZXpvbmVPZmZzZXQoY29uZmlnLnRpbWV6b25lT2Zmc2V0KTt9XG5pZihjb25maWcud2VlayYmJEQuX3ZhbGlkYXRlKGNvbmZpZy53ZWVrLDAsNTMsXCJ3ZWVrXCIpKXt0aGlzLnNldFdlZWsoY29uZmlnLndlZWspO31cbnJldHVybiB0aGlzO307JFAubW92ZVRvRmlyc3REYXlPZk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0KHtkYXk6MX0pO307JFAubW92ZVRvTGFzdERheU9mTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXQoe2RheTokRC5nZXREYXlzSW5Nb250aCh0aGlzLmdldEZ1bGxZZWFyKCksdGhpcy5nZXRNb250aCgpKX0pO307JFAubW92ZVRvTnRoT2NjdXJyZW5jZT1mdW5jdGlvbihkYXlPZldlZWssb2NjdXJyZW5jZSl7dmFyIHNoaWZ0PTA7aWYob2NjdXJyZW5jZT4wKXtzaGlmdD1vY2N1cnJlbmNlLTE7fVxuZWxzZSBpZihvY2N1cnJlbmNlPT09LTEpe3RoaXMubW92ZVRvTGFzdERheU9mTW9udGgoKTtpZih0aGlzLmdldERheSgpIT09ZGF5T2ZXZWVrKXt0aGlzLm1vdmVUb0RheU9mV2VlayhkYXlPZldlZWssLTEpO31cbnJldHVybiB0aGlzO31cbnJldHVybiB0aGlzLm1vdmVUb0ZpcnN0RGF5T2ZNb250aCgpLmFkZERheXMoLTEpLm1vdmVUb0RheU9mV2VlayhkYXlPZldlZWssKzEpLmFkZFdlZWtzKHNoaWZ0KTt9OyRQLm1vdmVUb0RheU9mV2Vlaz1mdW5jdGlvbihkYXlPZldlZWssb3JpZW50KXt2YXIgZGlmZj0oZGF5T2ZXZWVrLXRoaXMuZ2V0RGF5KCkrNyoob3JpZW50fHwrMSkpJTc7cmV0dXJuIHRoaXMuYWRkRGF5cygoZGlmZj09PTApP2RpZmYrPTcqKG9yaWVudHx8KzEpOmRpZmYpO307JFAubW92ZVRvTW9udGg9ZnVuY3Rpb24obW9udGgsb3JpZW50KXt2YXIgZGlmZj0obW9udGgtdGhpcy5nZXRNb250aCgpKzEyKihvcmllbnR8fCsxKSklMTI7cmV0dXJuIHRoaXMuYWRkTW9udGhzKChkaWZmPT09MCk/ZGlmZis9MTIqKG9yaWVudHx8KzEpOmRpZmYpO307JFAuZ2V0T3JkaW5hbE51bWJlcj1mdW5jdGlvbigpe3JldHVybiBNYXRoLmNlaWwoKHRoaXMuY2xvbmUoKS5jbGVhclRpbWUoKS1uZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksMCwxKSkvODY0MDAwMDApKzE7fTskUC5nZXRUaW1lem9uZT1mdW5jdGlvbigpe3JldHVybiAkRC5nZXRUaW1lem9uZUFiYnJldmlhdGlvbih0aGlzLmdldFVUQ09mZnNldCgpKTt9OyRQLnNldFRpbWV6b25lT2Zmc2V0PWZ1bmN0aW9uKG9mZnNldCl7dmFyIGhlcmU9dGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLHRoZXJlPU51bWJlcihvZmZzZXQpKi02LzEwO3JldHVybiB0aGlzLmFkZE1pbnV0ZXModGhlcmUtaGVyZSk7fTskUC5zZXRUaW1lem9uZT1mdW5jdGlvbihvZmZzZXQpe3JldHVybiB0aGlzLnNldFRpbWV6b25lT2Zmc2V0KCRELmdldFRpbWV6b25lT2Zmc2V0KG9mZnNldCkpO307JFAuaGFzRGF5bGlnaHRTYXZpbmdUaW1lPWZ1bmN0aW9uKCl7cmV0dXJuKERhdGUudG9kYXkoKS5zZXQoe21vbnRoOjAsZGF5OjF9KS5nZXRUaW1lem9uZU9mZnNldCgpIT09RGF0ZS50b2RheSgpLnNldCh7bW9udGg6NixkYXk6MX0pLmdldFRpbWV6b25lT2Zmc2V0KCkpO307JFAuaXNEYXlsaWdodFNhdmluZ1RpbWU9ZnVuY3Rpb24oKXtyZXR1cm4odGhpcy5oYXNEYXlsaWdodFNhdmluZ1RpbWUoKSYmbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpPT09RGF0ZS50b2RheSgpLnNldCh7bW9udGg6NixkYXk6MX0pLmdldFRpbWV6b25lT2Zmc2V0KCkpO307JFAuZ2V0VVRDT2Zmc2V0PWZ1bmN0aW9uKCl7dmFyIG49dGhpcy5nZXRUaW1lem9uZU9mZnNldCgpKi0xMC82LHI7aWYobjwwKXtyPShuLTEwMDAwKS50b1N0cmluZygpO3JldHVybiByLmNoYXJBdCgwKStyLnN1YnN0cigyKTt9ZWxzZXtyPShuKzEwMDAwKS50b1N0cmluZygpO3JldHVyblwiK1wiK3Iuc3Vic3RyKDEpO319OyRQLmdldEVsYXBzZWQ9ZnVuY3Rpb24oZGF0ZSl7cmV0dXJuKGRhdGV8fG5ldyBEYXRlKCkpLXRoaXM7fTtpZighJFAudG9JU09TdHJpbmcpeyRQLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZihuKXtyZXR1cm4gbjwxMD8nMCcrbjpuO31cbnJldHVybidcIicrdGhpcy5nZXRVVENGdWxsWWVhcigpKyctJytcbmYodGhpcy5nZXRVVENNb250aCgpKzEpKyctJytcbmYodGhpcy5nZXRVVENEYXRlKCkpKydUJytcbmYodGhpcy5nZXRVVENIb3VycygpKSsnOicrXG5mKHRoaXMuZ2V0VVRDTWludXRlcygpKSsnOicrXG5mKHRoaXMuZ2V0VVRDU2Vjb25kcygpKSsnWlwiJzt9O31cbiRQLl90b1N0cmluZz0kUC50b1N0cmluZzskUC50b1N0cmluZz1mdW5jdGlvbihmb3JtYXQpe3ZhciB4PXRoaXM7aWYoZm9ybWF0JiZmb3JtYXQubGVuZ3RoPT0xKXt2YXIgYz0kQy5mb3JtYXRQYXR0ZXJuczt4LnQ9eC50b1N0cmluZztzd2l0Y2goZm9ybWF0KXtjYXNlXCJkXCI6cmV0dXJuIHgudChjLnNob3J0RGF0ZSk7Y2FzZVwiRFwiOnJldHVybiB4LnQoYy5sb25nRGF0ZSk7Y2FzZVwiRlwiOnJldHVybiB4LnQoYy5mdWxsRGF0ZVRpbWUpO2Nhc2VcIm1cIjpyZXR1cm4geC50KGMubW9udGhEYXkpO2Nhc2VcInJcIjpyZXR1cm4geC50KGMucmZjMTEyMyk7Y2FzZVwic1wiOnJldHVybiB4LnQoYy5zb3J0YWJsZURhdGVUaW1lKTtjYXNlXCJ0XCI6cmV0dXJuIHgudChjLnNob3J0VGltZSk7Y2FzZVwiVFwiOnJldHVybiB4LnQoYy5sb25nVGltZSk7Y2FzZVwidVwiOnJldHVybiB4LnQoYy51bml2ZXJzYWxTb3J0YWJsZURhdGVUaW1lKTtjYXNlXCJ5XCI6cmV0dXJuIHgudChjLnllYXJNb250aCk7fX1cbnZhciBvcmQ9ZnVuY3Rpb24obil7c3dpdGNoKG4qMSl7Y2FzZSAxOmNhc2UgMjE6Y2FzZSAzMTpyZXR1cm5cInN0XCI7Y2FzZSAyOmNhc2UgMjI6cmV0dXJuXCJuZFwiO2Nhc2UgMzpjYXNlIDIzOnJldHVyblwicmRcIjtkZWZhdWx0OnJldHVyblwidGhcIjt9fTtyZXR1cm4gZm9ybWF0P2Zvcm1hdC5yZXBsYWNlKC8oXFxcXCk/KGRkP2Q/ZD98TU0/TT9NP3x5eT95P3k/fGhoP3xISD98bW0/fHNzP3x0dD98UykvZyxmdW5jdGlvbihtKXtpZihtLmNoYXJBdCgwKT09PVwiXFxcXFwiKXtyZXR1cm4gbS5yZXBsYWNlKFwiXFxcXFwiLFwiXCIpO31cbnguaD14LmdldEhvdXJzO3N3aXRjaChtKXtjYXNlXCJoaFwiOnJldHVybiBwKHguaCgpPDEzPyh4LmgoKT09PTA/MTI6eC5oKCkpOih4LmgoKS0xMikpO2Nhc2VcImhcIjpyZXR1cm4geC5oKCk8MTM/KHguaCgpPT09MD8xMjp4LmgoKSk6KHguaCgpLTEyKTtjYXNlXCJISFwiOnJldHVybiBwKHguaCgpKTtjYXNlXCJIXCI6cmV0dXJuIHguaCgpO2Nhc2VcIm1tXCI6cmV0dXJuIHAoeC5nZXRNaW51dGVzKCkpO2Nhc2VcIm1cIjpyZXR1cm4geC5nZXRNaW51dGVzKCk7Y2FzZVwic3NcIjpyZXR1cm4gcCh4LmdldFNlY29uZHMoKSk7Y2FzZVwic1wiOnJldHVybiB4LmdldFNlY29uZHMoKTtjYXNlXCJ5eXl5XCI6cmV0dXJuIHAoeC5nZXRGdWxsWWVhcigpLDQpO2Nhc2VcInl5XCI6cmV0dXJuIHAoeC5nZXRGdWxsWWVhcigpKTtjYXNlXCJkZGRkXCI6cmV0dXJuICRDLmRheU5hbWVzW3guZ2V0RGF5KCldO2Nhc2VcImRkZFwiOnJldHVybiAkQy5hYmJyZXZpYXRlZERheU5hbWVzW3guZ2V0RGF5KCldO2Nhc2VcImRkXCI6cmV0dXJuIHAoeC5nZXREYXRlKCkpO2Nhc2VcImRcIjpyZXR1cm4geC5nZXREYXRlKCk7Y2FzZVwiTU1NTVwiOnJldHVybiAkQy5tb250aE5hbWVzW3guZ2V0TW9udGgoKV07Y2FzZVwiTU1NXCI6cmV0dXJuICRDLmFiYnJldmlhdGVkTW9udGhOYW1lc1t4LmdldE1vbnRoKCldO2Nhc2VcIk1NXCI6cmV0dXJuIHAoKHguZ2V0TW9udGgoKSsxKSk7Y2FzZVwiTVwiOnJldHVybiB4LmdldE1vbnRoKCkrMTtjYXNlXCJ0XCI6cmV0dXJuIHguaCgpPDEyPyRDLmFtRGVzaWduYXRvci5zdWJzdHJpbmcoMCwxKTokQy5wbURlc2lnbmF0b3Iuc3Vic3RyaW5nKDAsMSk7Y2FzZVwidHRcIjpyZXR1cm4geC5oKCk8MTI/JEMuYW1EZXNpZ25hdG9yOiRDLnBtRGVzaWduYXRvcjtjYXNlXCJTXCI6cmV0dXJuIG9yZCh4LmdldERhdGUoKSk7ZGVmYXVsdDpyZXR1cm4gbTt9fSk6dGhpcy5fdG9TdHJpbmcoKTt9O30oKSk7XG4oZnVuY3Rpb24oKXt2YXIgJEQ9RGF0ZSwkUD0kRC5wcm90b3R5cGUsJEM9JEQuQ3VsdHVyZUluZm8sJE49TnVtYmVyLnByb3RvdHlwZTskUC5fb3JpZW50PSsxOyRQLl9udGg9bnVsbDskUC5faXM9ZmFsc2U7JFAuX3NhbWU9ZmFsc2U7JFAuX2lzU2Vjb25kPWZhbHNlOyROLl9kYXRlRWxlbWVudD1cImRheVwiOyRQLm5leHQ9ZnVuY3Rpb24oKXt0aGlzLl9vcmllbnQ9KzE7cmV0dXJuIHRoaXM7fTskRC5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuICRELnRvZGF5KCkubmV4dCgpO307JFAubGFzdD0kUC5wcmV2PSRQLnByZXZpb3VzPWZ1bmN0aW9uKCl7dGhpcy5fb3JpZW50PS0xO3JldHVybiB0aGlzO307JEQubGFzdD0kRC5wcmV2PSRELnByZXZpb3VzPWZ1bmN0aW9uKCl7cmV0dXJuICRELnRvZGF5KCkubGFzdCgpO307JFAuaXM9ZnVuY3Rpb24oKXt0aGlzLl9pcz10cnVlO3JldHVybiB0aGlzO307JFAuc2FtZT1mdW5jdGlvbigpe3RoaXMuX3NhbWU9dHJ1ZTt0aGlzLl9pc1NlY29uZD1mYWxzZTtyZXR1cm4gdGhpczt9OyRQLnRvZGF5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2FtZSgpLmRheSgpO307JFAud2Vla2RheT1mdW5jdGlvbigpe2lmKHRoaXMuX2lzKXt0aGlzLl9pcz1mYWxzZTtyZXR1cm4oIXRoaXMuaXMoKS5zYXQoKSYmIXRoaXMuaXMoKS5zdW4oKSk7fVxucmV0dXJuIGZhbHNlO307JFAuYXQ9ZnVuY3Rpb24odGltZSl7cmV0dXJuKHR5cGVvZiB0aW1lPT09XCJzdHJpbmdcIik/JEQucGFyc2UodGhpcy50b1N0cmluZyhcImRcIikrXCIgXCIrdGltZSk6dGhpcy5zZXQodGltZSk7fTskTi5mcm9tTm93PSROLmFmdGVyPWZ1bmN0aW9uKGRhdGUpe3ZhciBjPXt9O2NbdGhpcy5fZGF0ZUVsZW1lbnRdPXRoaXM7cmV0dXJuKCghZGF0ZSk/bmV3IERhdGUoKTpkYXRlLmNsb25lKCkpLmFkZChjKTt9OyROLmFnbz0kTi5iZWZvcmU9ZnVuY3Rpb24oZGF0ZSl7dmFyIGM9e307Y1t0aGlzLl9kYXRlRWxlbWVudF09dGhpcyotMTtyZXR1cm4oKCFkYXRlKT9uZXcgRGF0ZSgpOmRhdGUuY2xvbmUoKSkuYWRkKGMpO307dmFyIGR4PShcInN1bmRheSBtb25kYXkgdHVlc2RheSB3ZWRuZXNkYXkgdGh1cnNkYXkgZnJpZGF5IHNhdHVyZGF5XCIpLnNwbGl0KC9cXHMvKSxteD0oXCJqYW51YXJ5IGZlYnJ1YXJ5IG1hcmNoIGFwcmlsIG1heSBqdW5lIGp1bHkgYXVndXN0IHNlcHRlbWJlciBvY3RvYmVyIG5vdmVtYmVyIGRlY2VtYmVyXCIpLnNwbGl0KC9cXHMvKSxweD0oXCJNaWxsaXNlY29uZCBTZWNvbmQgTWludXRlIEhvdXIgRGF5IFdlZWsgTW9udGggWWVhclwiKS5zcGxpdCgvXFxzLykscHhmPShcIk1pbGxpc2Vjb25kcyBTZWNvbmRzIE1pbnV0ZXMgSG91cnMgRGF0ZSBXZWVrIE1vbnRoIEZ1bGxZZWFyXCIpLnNwbGl0KC9cXHMvKSxudGg9KFwiZmluYWwgZmlyc3Qgc2Vjb25kIHRoaXJkIGZvdXJ0aCBmaWZ0aFwiKS5zcGxpdCgvXFxzLyksZGU7JFAudG9PYmplY3Q9ZnVuY3Rpb24oKXt2YXIgbz17fTtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe29bcHhbaV0udG9Mb3dlckNhc2UoKV09dGhpc1tcImdldFwiK3B4ZltpXV0oKTt9XG5yZXR1cm4gbzt9OyRELmZyb21PYmplY3Q9ZnVuY3Rpb24oY29uZmlnKXtjb25maWcud2Vlaz1udWxsO3JldHVybiBEYXRlLnRvZGF5KCkuc2V0KGNvbmZpZyk7fTt2YXIgZGY9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7aWYodGhpcy5faXMpe3RoaXMuX2lzPWZhbHNlO3JldHVybiB0aGlzLmdldERheSgpPT1uO31cbmlmKHRoaXMuX250aCE9PW51bGwpe2lmKHRoaXMuX2lzU2Vjb25kKXt0aGlzLmFkZFNlY29uZHModGhpcy5fb3JpZW50Ki0xKTt9XG50aGlzLl9pc1NlY29uZD1mYWxzZTt2YXIgbnRlbXA9dGhpcy5fbnRoO3RoaXMuX250aD1udWxsO3ZhciB0ZW1wPXRoaXMuY2xvbmUoKS5tb3ZlVG9MYXN0RGF5T2ZNb250aCgpO3RoaXMubW92ZVRvTnRoT2NjdXJyZW5jZShuLG50ZW1wKTtpZih0aGlzPnRlbXApe3Rocm93IG5ldyBSYW5nZUVycm9yKCRELmdldERheU5hbWUobikrXCIgZG9lcyBub3Qgb2NjdXIgXCIrbnRlbXArXCIgdGltZXMgaW4gdGhlIG1vbnRoIG9mIFwiKyRELmdldE1vbnRoTmFtZSh0ZW1wLmdldE1vbnRoKCkpK1wiIFwiK3RlbXAuZ2V0RnVsbFllYXIoKStcIi5cIik7fVxucmV0dXJuIHRoaXM7fVxucmV0dXJuIHRoaXMubW92ZVRvRGF5T2ZXZWVrKG4sdGhpcy5fb3JpZW50KTt9O307dmFyIHNkZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD0kRC50b2RheSgpLHNoaWZ0PW4tdC5nZXREYXkoKTtpZihuPT09MCYmJEMuZmlyc3REYXlPZldlZWs9PT0xJiZ0LmdldERheSgpIT09MCl7c2hpZnQ9c2hpZnQrNzt9XG5yZXR1cm4gdC5hZGREYXlzKHNoaWZ0KTt9O307Zm9yKHZhciBpPTA7aTxkeC5sZW5ndGg7aSsrKXskRFtkeFtpXS50b1VwcGVyQ2FzZSgpXT0kRFtkeFtpXS50b1VwcGVyQ2FzZSgpLnN1YnN0cmluZygwLDMpXT1pOyREW2R4W2ldXT0kRFtkeFtpXS5zdWJzdHJpbmcoMCwzKV09c2RmKGkpOyRQW2R4W2ldXT0kUFtkeFtpXS5zdWJzdHJpbmcoMCwzKV09ZGYoaSk7fVxudmFyIG1mPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe2lmKHRoaXMuX2lzKXt0aGlzLl9pcz1mYWxzZTtyZXR1cm4gdGhpcy5nZXRNb250aCgpPT09bjt9XG5yZXR1cm4gdGhpcy5tb3ZlVG9Nb250aChuLHRoaXMuX29yaWVudCk7fTt9O3ZhciBzbWY9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuICRELnRvZGF5KCkuc2V0KHttb250aDpuLGRheToxfSk7fTt9O2Zvcih2YXIgaj0wO2o8bXgubGVuZ3RoO2orKyl7JERbbXhbal0udG9VcHBlckNhc2UoKV09JERbbXhbal0udG9VcHBlckNhc2UoKS5zdWJzdHJpbmcoMCwzKV09ajskRFtteFtqXV09JERbbXhbal0uc3Vic3RyaW5nKDAsMyldPXNtZihqKTskUFtteFtqXV09JFBbbXhbal0uc3Vic3RyaW5nKDAsMyldPW1mKGopO31cbnZhciBlZj1mdW5jdGlvbihqKXtyZXR1cm4gZnVuY3Rpb24oKXtpZih0aGlzLl9pc1NlY29uZCl7dGhpcy5faXNTZWNvbmQ9ZmFsc2U7cmV0dXJuIHRoaXM7fVxuaWYodGhpcy5fc2FtZSl7dGhpcy5fc2FtZT10aGlzLl9pcz1mYWxzZTt2YXIgbzE9dGhpcy50b09iamVjdCgpLG8yPShhcmd1bWVudHNbMF18fG5ldyBEYXRlKCkpLnRvT2JqZWN0KCksdj1cIlwiLGs9ai50b0xvd2VyQ2FzZSgpO2Zvcih2YXIgbT0ocHgubGVuZ3RoLTEpO20+LTE7bS0tKXt2PXB4W21dLnRvTG93ZXJDYXNlKCk7aWYobzFbdl0hPW8yW3ZdKXtyZXR1cm4gZmFsc2U7fVxuaWYoaz09dil7YnJlYWs7fX1cbnJldHVybiB0cnVlO31cbmlmKGouc3Vic3RyaW5nKGoubGVuZ3RoLTEpIT1cInNcIil7ais9XCJzXCI7fVxucmV0dXJuIHRoaXNbXCJhZGRcIitqXSh0aGlzLl9vcmllbnQpO307fTt2YXIgbmY9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5fZGF0ZUVsZW1lbnQ9bjtyZXR1cm4gdGhpczt9O307Zm9yKHZhciBrPTA7azxweC5sZW5ndGg7aysrKXtkZT1weFtrXS50b0xvd2VyQ2FzZSgpOyRQW2RlXT0kUFtkZStcInNcIl09ZWYocHhba10pOyROW2RlXT0kTltkZStcInNcIl09bmYoZGUpO31cbiRQLl9zcz1lZihcIlNlY29uZFwiKTt2YXIgbnRoZm49ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKGRheU9mV2Vlayl7aWYodGhpcy5fc2FtZSl7cmV0dXJuIHRoaXMuX3NzKGFyZ3VtZW50c1swXSk7fVxuaWYoZGF5T2ZXZWVrfHxkYXlPZldlZWs9PT0wKXtyZXR1cm4gdGhpcy5tb3ZlVG9OdGhPY2N1cnJlbmNlKGRheU9mV2VlayxuKTt9XG50aGlzLl9udGg9bjtpZihuPT09MiYmKGRheU9mV2Vlaz09PXVuZGVmaW5lZHx8ZGF5T2ZXZWVrPT09bnVsbCkpe3RoaXMuX2lzU2Vjb25kPXRydWU7cmV0dXJuIHRoaXMuYWRkU2Vjb25kcyh0aGlzLl9vcmllbnQpO31cbnJldHVybiB0aGlzO307fTtmb3IodmFyIGw9MDtsPG50aC5sZW5ndGg7bCsrKXskUFtudGhbbF1dPShsPT09MCk/bnRoZm4oLTEpOm50aGZuKGwpO319KCkpO1xuKGZ1bmN0aW9uKCl7RGF0ZS5QYXJzaW5nPXtFeGNlcHRpb246ZnVuY3Rpb24ocyl7dGhpcy5tZXNzYWdlPVwiUGFyc2UgZXJyb3IgYXQgJ1wiK3Muc3Vic3RyaW5nKDAsMTApK1wiIC4uLidcIjt9fTt2YXIgJFA9RGF0ZS5QYXJzaW5nO3ZhciBfPSRQLk9wZXJhdG9ycz17cnRva2VuOmZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihzKXt2YXIgbXg9cy5tYXRjaChyKTtpZihteCl7cmV0dXJuKFtteFswXSxzLnN1YnN0cmluZyhteFswXS5sZW5ndGgpXSk7fWVsc2V7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9fTt9LHRva2VuOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbihzKXtyZXR1cm4gXy5ydG9rZW4obmV3IFJlZ0V4cChcIl5cXHMqXCIrcytcIlxccypcIikpKHMpO307fSxzdG9rZW46ZnVuY3Rpb24ocyl7cmV0dXJuIF8ucnRva2VuKG5ldyBSZWdFeHAoXCJeXCIrcykpO30sdW50aWw6ZnVuY3Rpb24ocCl7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciBxeD1bXSxyeD1udWxsO3doaWxlKHMubGVuZ3RoKXt0cnl7cng9cC5jYWxsKHRoaXMscyk7fWNhdGNoKGUpe3F4LnB1c2gocnhbMF0pO3M9cnhbMV07Y29udGludWU7fVxuYnJlYWs7fVxucmV0dXJuW3F4LHNdO307fSxtYW55OmZ1bmN0aW9uKHApe3JldHVybiBmdW5jdGlvbihzKXt2YXIgcng9W10scj1udWxsO3doaWxlKHMubGVuZ3RoKXt0cnl7cj1wLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7cmV0dXJuW3J4LHNdO31cbnJ4LnB1c2goclswXSk7cz1yWzFdO31cbnJldHVybltyeCxzXTt9O30sb3B0aW9uYWw6ZnVuY3Rpb24ocCl7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByPW51bGw7dHJ5e3I9cC5jYWxsKHRoaXMscyk7fWNhdGNoKGUpe3JldHVybltudWxsLHNdO31cbnJldHVybltyWzBdLHJbMV1dO307fSxub3Q6ZnVuY3Rpb24ocCl7cmV0dXJuIGZ1bmN0aW9uKHMpe3RyeXtwLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7cmV0dXJuW251bGwsc107fVxudGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9O30saWdub3JlOmZ1bmN0aW9uKHApe3JldHVybiBwP2Z1bmN0aW9uKHMpe3ZhciByPW51bGw7cj1wLmNhbGwodGhpcyxzKTtyZXR1cm5bbnVsbCxyWzFdXTt9Om51bGw7fSxwcm9kdWN0OmZ1bmN0aW9uKCl7dmFyIHB4PWFyZ3VtZW50c1swXSxxeD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkscng9W107Zm9yKHZhciBpPTA7aTxweC5sZW5ndGg7aSsrKXtyeC5wdXNoKF8uZWFjaChweFtpXSxxeCkpO31cbnJldHVybiByeDt9LGNhY2hlOmZ1bmN0aW9uKHJ1bGUpe3ZhciBjYWNoZT17fSxyPW51bGw7cmV0dXJuIGZ1bmN0aW9uKHMpe3RyeXtyPWNhY2hlW3NdPShjYWNoZVtzXXx8cnVsZS5jYWxsKHRoaXMscykpO31jYXRjaChlKXtyPWNhY2hlW3NdPWU7fVxuaWYociBpbnN0YW5jZW9mICRQLkV4Y2VwdGlvbil7dGhyb3cgcjt9ZWxzZXtyZXR1cm4gcjt9fTt9LGFueTpmdW5jdGlvbigpe3ZhciBweD1hcmd1bWVudHM7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByPW51bGw7Zm9yKHZhciBpPTA7aTxweC5sZW5ndGg7aSsrKXtpZihweFtpXT09bnVsbCl7Y29udGludWU7fVxudHJ5e3I9KHB4W2ldLmNhbGwodGhpcyxzKSk7fWNhdGNoKGUpe3I9bnVsbDt9XG5pZihyKXtyZXR1cm4gcjt9fVxudGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9O30sZWFjaDpmdW5jdGlvbigpe3ZhciBweD1hcmd1bWVudHM7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByeD1bXSxyPW51bGw7Zm9yKHZhciBpPTA7aTxweC5sZW5ndGg7aSsrKXtpZihweFtpXT09bnVsbCl7Y29udGludWU7fVxudHJ5e3I9KHB4W2ldLmNhbGwodGhpcyxzKSk7fWNhdGNoKGUpe3Rocm93IG5ldyAkUC5FeGNlcHRpb24ocyk7fVxucngucHVzaChyWzBdKTtzPXJbMV07fVxucmV0dXJuW3J4LHNdO307fSxhbGw6ZnVuY3Rpb24oKXt2YXIgcHg9YXJndW1lbnRzLF89XztyZXR1cm4gXy5lYWNoKF8ub3B0aW9uYWwocHgpKTt9LHNlcXVlbmNlOmZ1bmN0aW9uKHB4LGQsYyl7ZD1kfHxfLnJ0b2tlbigvXlxccyovKTtjPWN8fG51bGw7aWYocHgubGVuZ3RoPT0xKXtyZXR1cm4gcHhbMF07fVxucmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByPW51bGwscT1udWxsO3ZhciByeD1bXTtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe3RyeXtyPXB4W2ldLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7YnJlYWs7fVxucngucHVzaChyWzBdKTt0cnl7cT1kLmNhbGwodGhpcyxyWzFdKTt9Y2F0Y2goZXgpe3E9bnVsbDticmVhazt9XG5zPXFbMV07fVxuaWYoIXIpe3Rocm93IG5ldyAkUC5FeGNlcHRpb24ocyk7fVxuaWYocSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihxWzFdKTt9XG5pZihjKXt0cnl7cj1jLmNhbGwodGhpcyxyWzFdKTt9Y2F0Y2goZXkpe3Rocm93IG5ldyAkUC5FeGNlcHRpb24oclsxXSk7fX1cbnJldHVybltyeCwocj9yWzFdOnMpXTt9O30sYmV0d2VlbjpmdW5jdGlvbihkMSxwLGQyKXtkMj1kMnx8ZDE7dmFyIF9mbj1fLmVhY2goXy5pZ25vcmUoZDEpLHAsXy5pZ25vcmUoZDIpKTtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHJ4PV9mbi5jYWxsKHRoaXMscyk7cmV0dXJuW1tyeFswXVswXSxyWzBdWzJdXSxyeFsxXV07fTt9LGxpc3Q6ZnVuY3Rpb24ocCxkLGMpe2Q9ZHx8Xy5ydG9rZW4oL15cXHMqLyk7Yz1jfHxudWxsO3JldHVybihwIGluc3RhbmNlb2YgQXJyYXk/Xy5lYWNoKF8ucHJvZHVjdChwLnNsaWNlKDAsLTEpLF8uaWdub3JlKGQpKSxwLnNsaWNlKC0xKSxfLmlnbm9yZShjKSk6Xy5lYWNoKF8ubWFueShfLmVhY2gocCxfLmlnbm9yZShkKSkpLHB4LF8uaWdub3JlKGMpKSk7fSxzZXQ6ZnVuY3Rpb24ocHgsZCxjKXtkPWR8fF8ucnRva2VuKC9eXFxzKi8pO2M9Y3x8bnVsbDtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbCxwPW51bGwscT1udWxsLHJ4PW51bGwsYmVzdD1bW10sc10sbGFzdD1mYWxzZTtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe3E9bnVsbDtwPW51bGw7cj1udWxsO2xhc3Q9KHB4Lmxlbmd0aD09MSk7dHJ5e3I9cHhbaV0uY2FsbCh0aGlzLHMpO31jYXRjaChlKXtjb250aW51ZTt9XG5yeD1bW3JbMF1dLHJbMV1dO2lmKHJbMV0ubGVuZ3RoPjAmJiFsYXN0KXt0cnl7cT1kLmNhbGwodGhpcyxyWzFdKTt9Y2F0Y2goZXgpe2xhc3Q9dHJ1ZTt9fWVsc2V7bGFzdD10cnVlO31cbmlmKCFsYXN0JiZxWzFdLmxlbmd0aD09PTApe2xhc3Q9dHJ1ZTt9XG5pZighbGFzdCl7dmFyIHF4PVtdO2Zvcih2YXIgaj0wO2o8cHgubGVuZ3RoO2orKyl7aWYoaSE9ail7cXgucHVzaChweFtqXSk7fX1cbnA9Xy5zZXQocXgsZCkuY2FsbCh0aGlzLHFbMV0pO2lmKHBbMF0ubGVuZ3RoPjApe3J4WzBdPXJ4WzBdLmNvbmNhdChwWzBdKTtyeFsxXT1wWzFdO319XG5pZihyeFsxXS5sZW5ndGg8YmVzdFsxXS5sZW5ndGgpe2Jlc3Q9cng7fVxuaWYoYmVzdFsxXS5sZW5ndGg9PT0wKXticmVhazt9fVxuaWYoYmVzdFswXS5sZW5ndGg9PT0wKXtyZXR1cm4gYmVzdDt9XG5pZihjKXt0cnl7cT1jLmNhbGwodGhpcyxiZXN0WzFdKTt9Y2F0Y2goZXkpe3Rocm93IG5ldyAkUC5FeGNlcHRpb24oYmVzdFsxXSk7fVxuYmVzdFsxXT1xWzFdO31cbnJldHVybiBiZXN0O307fSxmb3J3YXJkOmZ1bmN0aW9uKGdyLGZuYW1lKXtyZXR1cm4gZnVuY3Rpb24ocyl7cmV0dXJuIGdyW2ZuYW1lXS5jYWxsKHRoaXMscyk7fTt9LHJlcGxhY2U6ZnVuY3Rpb24ocnVsZSxyZXBsKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9cnVsZS5jYWxsKHRoaXMscyk7cmV0dXJuW3JlcGwsclsxXV07fTt9LHByb2Nlc3M6ZnVuY3Rpb24ocnVsZSxmbil7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByPXJ1bGUuY2FsbCh0aGlzLHMpO3JldHVybltmbi5jYWxsKHRoaXMsclswXSksclsxXV07fTt9LG1pbjpmdW5jdGlvbihtaW4scnVsZSl7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByeD1ydWxlLmNhbGwodGhpcyxzKTtpZihyeFswXS5sZW5ndGg8bWluKXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO31cbnJldHVybiByeDt9O319O3ZhciBfZ2VuZXJhdG9yPWZ1bmN0aW9uKG9wKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYXJncz1udWxsLHJ4PVtdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7YXJncz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO31lbHNlIGlmKGFyZ3VtZW50c1swXWluc3RhbmNlb2YgQXJyYXkpe2FyZ3M9YXJndW1lbnRzWzBdO31cbmlmKGFyZ3Mpe2Zvcih2YXIgaT0wLHB4PWFyZ3Muc2hpZnQoKTtpPHB4Lmxlbmd0aDtpKyspe2FyZ3MudW5zaGlmdChweFtpXSk7cngucHVzaChvcC5hcHBseShudWxsLGFyZ3MpKTthcmdzLnNoaWZ0KCk7cmV0dXJuIHJ4O319ZWxzZXtyZXR1cm4gb3AuYXBwbHkobnVsbCxhcmd1bWVudHMpO319O307dmFyIGd4PVwib3B0aW9uYWwgbm90IGlnbm9yZSBjYWNoZVwiLnNwbGl0KC9cXHMvKTtmb3IodmFyIGk9MDtpPGd4Lmxlbmd0aDtpKyspe19bZ3hbaV1dPV9nZW5lcmF0b3IoX1tneFtpXV0pO31cbnZhciBfdmVjdG9yPWZ1bmN0aW9uKG9wKXtyZXR1cm4gZnVuY3Rpb24oKXtpZihhcmd1bWVudHNbMF1pbnN0YW5jZW9mIEFycmF5KXtyZXR1cm4gb3AuYXBwbHkobnVsbCxhcmd1bWVudHNbMF0pO31lbHNle3JldHVybiBvcC5hcHBseShudWxsLGFyZ3VtZW50cyk7fX07fTt2YXIgdng9XCJlYWNoIGFueSBhbGxcIi5zcGxpdCgvXFxzLyk7Zm9yKHZhciBqPTA7ajx2eC5sZW5ndGg7aisrKXtfW3Z4W2pdXT1fdmVjdG9yKF9bdnhbal1dKTt9fSgpKTsoZnVuY3Rpb24oKXt2YXIgJEQ9RGF0ZSwkUD0kRC5wcm90b3R5cGUsJEM9JEQuQ3VsdHVyZUluZm87dmFyIGZsYXR0ZW5BbmRDb21wYWN0PWZ1bmN0aW9uKGF4KXt2YXIgcng9W107Zm9yKHZhciBpPTA7aTxheC5sZW5ndGg7aSsrKXtpZihheFtpXWluc3RhbmNlb2YgQXJyYXkpe3J4PXJ4LmNvbmNhdChmbGF0dGVuQW5kQ29tcGFjdChheFtpXSkpO31lbHNle2lmKGF4W2ldKXtyeC5wdXNoKGF4W2ldKTt9fX1cbnJldHVybiByeDt9OyRELkdyYW1tYXI9e307JEQuVHJhbnNsYXRvcj17aG91cjpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLmhvdXI9TnVtYmVyKHMpO307fSxtaW51dGU6ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5taW51dGU9TnVtYmVyKHMpO307fSxzZWNvbmQ6ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5zZWNvbmQ9TnVtYmVyKHMpO307fSxtZXJpZGlhbjpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm1lcmlkaWFuPXMuc2xpY2UoMCwxKS50b0xvd2VyQ2FzZSgpO307fSx0aW1lem9uZTpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1zLnJlcGxhY2UoL1teXFxkXFwrXFwtXS9nLFwiXCIpO2lmKG4ubGVuZ3RoKXt0aGlzLnRpbWV6b25lT2Zmc2V0PU51bWJlcihuKTt9ZWxzZXt0aGlzLnRpbWV6b25lPXMudG9Mb3dlckNhc2UoKTt9fTt9LGRheTpmdW5jdGlvbih4KXt2YXIgcz14WzBdO3JldHVybiBmdW5jdGlvbigpe3RoaXMuZGF5PU51bWJlcihzLm1hdGNoKC9cXGQrLylbMF0pO307fSxtb250aDpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm1vbnRoPShzLmxlbmd0aD09Myk/XCJqYW4gZmViIG1hciBhcHIgbWF5IGp1biBqdWwgYXVnIHNlcCBvY3Qgbm92IGRlY1wiLmluZGV4T2YocykvNDpOdW1iZXIocyktMTt9O30seWVhcjpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1OdW1iZXIocyk7dGhpcy55ZWFyPSgocy5sZW5ndGg+Mik/bjoobisoKChuKzIwMDApPCRDLnR3b0RpZ2l0WWVhck1heCk/MjAwMDoxOTAwKSkpO307fSxyZGF5OmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3N3aXRjaChzKXtjYXNlXCJ5ZXN0ZXJkYXlcIjp0aGlzLmRheXM9LTE7YnJlYWs7Y2FzZVwidG9tb3Jyb3dcIjp0aGlzLmRheXM9MTticmVhaztjYXNlXCJ0b2RheVwiOnRoaXMuZGF5cz0wO2JyZWFrO2Nhc2VcIm5vd1wiOnRoaXMuZGF5cz0wO3RoaXMubm93PXRydWU7YnJlYWs7fX07fSxmaW5pc2hFeGFjdDpmdW5jdGlvbih4KXt4PSh4IGluc3RhbmNlb2YgQXJyYXkpP3g6W3hdO2Zvcih2YXIgaT0wO2k8eC5sZW5ndGg7aSsrKXtpZih4W2ldKXt4W2ldLmNhbGwodGhpcyk7fX1cbnZhciBub3c9bmV3IERhdGUoKTtpZigodGhpcy5ob3VyfHx0aGlzLm1pbnV0ZSkmJighdGhpcy5tb250aCYmIXRoaXMueWVhciYmIXRoaXMuZGF5KSl7dGhpcy5kYXk9bm93LmdldERhdGUoKTt9XG5pZighdGhpcy55ZWFyKXt0aGlzLnllYXI9bm93LmdldEZ1bGxZZWFyKCk7fVxuaWYoIXRoaXMubW9udGgmJnRoaXMubW9udGghPT0wKXt0aGlzLm1vbnRoPW5vdy5nZXRNb250aCgpO31cbmlmKCF0aGlzLmRheSl7dGhpcy5kYXk9MTt9XG5pZighdGhpcy5ob3VyKXt0aGlzLmhvdXI9MDt9XG5pZighdGhpcy5taW51dGUpe3RoaXMubWludXRlPTA7fVxuaWYoIXRoaXMuc2Vjb25kKXt0aGlzLnNlY29uZD0wO31cbmlmKHRoaXMubWVyaWRpYW4mJnRoaXMuaG91cil7aWYodGhpcy5tZXJpZGlhbj09XCJwXCImJnRoaXMuaG91cjwxMil7dGhpcy5ob3VyPXRoaXMuaG91cisxMjt9ZWxzZSBpZih0aGlzLm1lcmlkaWFuPT1cImFcIiYmdGhpcy5ob3VyPT0xMil7dGhpcy5ob3VyPTA7fX1cbmlmKHRoaXMuZGF5PiRELmdldERheXNJbk1vbnRoKHRoaXMueWVhcix0aGlzLm1vbnRoKSl7dGhyb3cgbmV3IFJhbmdlRXJyb3IodGhpcy5kYXkrXCIgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGRheXMuXCIpO31cbnZhciByPW5ldyBEYXRlKHRoaXMueWVhcix0aGlzLm1vbnRoLHRoaXMuZGF5LHRoaXMuaG91cix0aGlzLm1pbnV0ZSx0aGlzLnNlY29uZCk7aWYodGhpcy50aW1lem9uZSl7ci5zZXQoe3RpbWV6b25lOnRoaXMudGltZXpvbmV9KTt9ZWxzZSBpZih0aGlzLnRpbWV6b25lT2Zmc2V0KXtyLnNldCh7dGltZXpvbmVPZmZzZXQ6dGhpcy50aW1lem9uZU9mZnNldH0pO31cbnJldHVybiByO30sZmluaXNoOmZ1bmN0aW9uKHgpe3g9KHggaW5zdGFuY2VvZiBBcnJheSk/ZmxhdHRlbkFuZENvbXBhY3QoeCk6W3hdO2lmKHgubGVuZ3RoPT09MCl7cmV0dXJuIG51bGw7fVxuZm9yKHZhciBpPTA7aTx4Lmxlbmd0aDtpKyspe2lmKHR5cGVvZiB4W2ldPT1cImZ1bmN0aW9uXCIpe3hbaV0uY2FsbCh0aGlzKTt9fVxudmFyIHRvZGF5PSRELnRvZGF5KCk7aWYodGhpcy5ub3cmJiF0aGlzLnVuaXQmJiF0aGlzLm9wZXJhdG9yKXtyZXR1cm4gbmV3IERhdGUoKTt9ZWxzZSBpZih0aGlzLm5vdyl7dG9kYXk9bmV3IERhdGUoKTt9XG52YXIgZXhwcmVzc2lvbj0hISh0aGlzLmRheXMmJnRoaXMuZGF5cyE9PW51bGx8fHRoaXMub3JpZW50fHx0aGlzLm9wZXJhdG9yKTt2YXIgZ2FwLG1vZCxvcmllbnQ7b3JpZW50PSgodGhpcy5vcmllbnQ9PVwicGFzdFwifHx0aGlzLm9wZXJhdG9yPT1cInN1YnRyYWN0XCIpPy0xOjEpO2lmKCF0aGlzLm5vdyYmXCJob3VyIG1pbnV0ZSBzZWNvbmRcIi5pbmRleE9mKHRoaXMudW5pdCkhPS0xKXt0b2RheS5zZXRUaW1lVG9Ob3coKTt9XG5pZih0aGlzLm1vbnRofHx0aGlzLm1vbnRoPT09MCl7aWYoXCJ5ZWFyIGRheSBob3VyIG1pbnV0ZSBzZWNvbmRcIi5pbmRleE9mKHRoaXMudW5pdCkhPS0xKXt0aGlzLnZhbHVlPXRoaXMubW9udGgrMTt0aGlzLm1vbnRoPW51bGw7ZXhwcmVzc2lvbj10cnVlO319XG5pZighZXhwcmVzc2lvbiYmdGhpcy53ZWVrZGF5JiYhdGhpcy5kYXkmJiF0aGlzLmRheXMpe3ZhciB0ZW1wPURhdGVbdGhpcy53ZWVrZGF5XSgpO3RoaXMuZGF5PXRlbXAuZ2V0RGF0ZSgpO2lmKCF0aGlzLm1vbnRoKXt0aGlzLm1vbnRoPXRlbXAuZ2V0TW9udGgoKTt9XG50aGlzLnllYXI9dGVtcC5nZXRGdWxsWWVhcigpO31cbmlmKGV4cHJlc3Npb24mJnRoaXMud2Vla2RheSYmdGhpcy51bml0IT1cIm1vbnRoXCIpe3RoaXMudW5pdD1cImRheVwiO2dhcD0oJEQuZ2V0RGF5TnVtYmVyRnJvbU5hbWUodGhpcy53ZWVrZGF5KS10b2RheS5nZXREYXkoKSk7bW9kPTc7dGhpcy5kYXlzPWdhcD8oKGdhcCsob3JpZW50Km1vZCkpJW1vZCk6KG9yaWVudCptb2QpO31cbmlmKHRoaXMubW9udGgmJnRoaXMudW5pdD09XCJkYXlcIiYmdGhpcy5vcGVyYXRvcil7dGhpcy52YWx1ZT0odGhpcy5tb250aCsxKTt0aGlzLm1vbnRoPW51bGw7fVxuaWYodGhpcy52YWx1ZSE9bnVsbCYmdGhpcy5tb250aCE9bnVsbCYmdGhpcy55ZWFyIT1udWxsKXt0aGlzLmRheT10aGlzLnZhbHVlKjE7fVxuaWYodGhpcy5tb250aCYmIXRoaXMuZGF5JiZ0aGlzLnZhbHVlKXt0b2RheS5zZXQoe2RheTp0aGlzLnZhbHVlKjF9KTtpZighZXhwcmVzc2lvbil7dGhpcy5kYXk9dGhpcy52YWx1ZSoxO319XG5pZighdGhpcy5tb250aCYmdGhpcy52YWx1ZSYmdGhpcy51bml0PT1cIm1vbnRoXCImJiF0aGlzLm5vdyl7dGhpcy5tb250aD10aGlzLnZhbHVlO2V4cHJlc3Npb249dHJ1ZTt9XG5pZihleHByZXNzaW9uJiYodGhpcy5tb250aHx8dGhpcy5tb250aD09PTApJiZ0aGlzLnVuaXQhPVwieWVhclwiKXt0aGlzLnVuaXQ9XCJtb250aFwiO2dhcD0odGhpcy5tb250aC10b2RheS5nZXRNb250aCgpKTttb2Q9MTI7dGhpcy5tb250aHM9Z2FwPygoZ2FwKyhvcmllbnQqbW9kKSklbW9kKToob3JpZW50Km1vZCk7dGhpcy5tb250aD1udWxsO31cbmlmKCF0aGlzLnVuaXQpe3RoaXMudW5pdD1cImRheVwiO31cbmlmKCF0aGlzLnZhbHVlJiZ0aGlzLm9wZXJhdG9yJiZ0aGlzLm9wZXJhdG9yIT09bnVsbCYmdGhpc1t0aGlzLnVuaXQrXCJzXCJdJiZ0aGlzW3RoaXMudW5pdCtcInNcIl0hPT1udWxsKXt0aGlzW3RoaXMudW5pdCtcInNcIl09dGhpc1t0aGlzLnVuaXQrXCJzXCJdKygodGhpcy5vcGVyYXRvcj09XCJhZGRcIik/MTotMSkrKHRoaXMudmFsdWV8fDApKm9yaWVudDt9ZWxzZSBpZih0aGlzW3RoaXMudW5pdCtcInNcIl09PW51bGx8fHRoaXMub3BlcmF0b3IhPW51bGwpe2lmKCF0aGlzLnZhbHVlKXt0aGlzLnZhbHVlPTE7fVxudGhpc1t0aGlzLnVuaXQrXCJzXCJdPXRoaXMudmFsdWUqb3JpZW50O31cbmlmKHRoaXMubWVyaWRpYW4mJnRoaXMuaG91cil7aWYodGhpcy5tZXJpZGlhbj09XCJwXCImJnRoaXMuaG91cjwxMil7dGhpcy5ob3VyPXRoaXMuaG91cisxMjt9ZWxzZSBpZih0aGlzLm1lcmlkaWFuPT1cImFcIiYmdGhpcy5ob3VyPT0xMil7dGhpcy5ob3VyPTA7fX1cbmlmKHRoaXMud2Vla2RheSYmIXRoaXMuZGF5JiYhdGhpcy5kYXlzKXt2YXIgdGVtcD1EYXRlW3RoaXMud2Vla2RheV0oKTt0aGlzLmRheT10ZW1wLmdldERhdGUoKTtpZih0ZW1wLmdldE1vbnRoKCkhPT10b2RheS5nZXRNb250aCgpKXt0aGlzLm1vbnRoPXRlbXAuZ2V0TW9udGgoKTt9fVxuaWYoKHRoaXMubW9udGh8fHRoaXMubW9udGg9PT0wKSYmIXRoaXMuZGF5KXt0aGlzLmRheT0xO31cbmlmKCF0aGlzLm9yaWVudCYmIXRoaXMub3BlcmF0b3ImJnRoaXMudW5pdD09XCJ3ZWVrXCImJnRoaXMudmFsdWUmJiF0aGlzLmRheSYmIXRoaXMubW9udGgpe3JldHVybiBEYXRlLnRvZGF5KCkuc2V0V2Vlayh0aGlzLnZhbHVlKTt9XG5pZihleHByZXNzaW9uJiZ0aGlzLnRpbWV6b25lJiZ0aGlzLmRheSYmdGhpcy5kYXlzKXt0aGlzLmRheT10aGlzLmRheXM7fVxucmV0dXJuKGV4cHJlc3Npb24pP3RvZGF5LmFkZCh0aGlzKTp0b2RheS5zZXQodGhpcyk7fX07dmFyIF89JEQuUGFyc2luZy5PcGVyYXRvcnMsZz0kRC5HcmFtbWFyLHQ9JEQuVHJhbnNsYXRvcixfZm47Zy5kYXRlUGFydERlbGltaXRlcj1fLnJ0b2tlbigvXihbXFxzXFwtXFwuXFwsXFwvXFx4MjddKykvKTtnLnRpbWVQYXJ0RGVsaW1pdGVyPV8uc3Rva2VuKFwiOlwiKTtnLndoaXRlU3BhY2U9Xy5ydG9rZW4oL15cXHMqLyk7Zy5nZW5lcmFsRGVsaW1pdGVyPV8ucnRva2VuKC9eKChbXFxzXFwsXXxhdHxAfG9uKSspLyk7dmFyIF9DPXt9O2cuY3Rva2VuPWZ1bmN0aW9uKGtleXMpe3ZhciBmbj1fQ1trZXlzXTtpZighZm4pe3ZhciBjPSRDLnJlZ2V4UGF0dGVybnM7dmFyIGt4PWtleXMuc3BsaXQoL1xccysvKSxweD1bXTtmb3IodmFyIGk9MDtpPGt4Lmxlbmd0aDtpKyspe3B4LnB1c2goXy5yZXBsYWNlKF8ucnRva2VuKGNba3hbaV1dKSxreFtpXSkpO31cbmZuPV9DW2tleXNdPV8uYW55LmFwcGx5KG51bGwscHgpO31cbnJldHVybiBmbjt9O2cuY3Rva2VuMj1mdW5jdGlvbihrZXkpe3JldHVybiBfLnJ0b2tlbigkQy5yZWdleFBhdHRlcm5zW2tleV0pO307Zy5oPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKDBbMC05XXwxWzAtMl18WzEtOV0pLyksdC5ob3VyKSk7Zy5oaD1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXigwWzAtOV18MVswLTJdKS8pLHQuaG91cikpO2cuSD1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihbMC0xXVswLTldfDJbMC0zXXxbMC05XSkvKSx0LmhvdXIpKTtnLkhIPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFswLTFdWzAtOV18MlswLTNdKS8pLHQuaG91cikpO2cubT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihbMC01XVswLTldfFswLTldKS8pLHQubWludXRlKSk7Zy5tbT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXlswLTVdWzAtOV0vKSx0Lm1pbnV0ZSkpO2cucz1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihbMC01XVswLTldfFswLTldKS8pLHQuc2Vjb25kKSk7Zy5zcz1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXlswLTVdWzAtOV0vKSx0LnNlY29uZCkpO2cuaG1zPV8uY2FjaGUoXy5zZXF1ZW5jZShbZy5ILGcubSxnLnNdLGcudGltZVBhcnREZWxpbWl0ZXIpKTtnLnQ9Xy5jYWNoZShfLnByb2Nlc3MoZy5jdG9rZW4yKFwic2hvcnRNZXJpZGlhblwiKSx0Lm1lcmlkaWFuKSk7Zy50dD1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbjIoXCJsb25nTWVyaWRpYW5cIiksdC5tZXJpZGlhbikpO2cuej1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXigoXFwrfFxcLSlcXHMqXFxkXFxkXFxkXFxkKXwoKFxcK3xcXC0pXFxkXFxkXFw6P1xcZFxcZCkvKSx0LnRpbWV6b25lKSk7Zy56ej1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXigoXFwrfFxcLSlcXHMqXFxkXFxkXFxkXFxkKXwoKFxcK3xcXC0pXFxkXFxkXFw6P1xcZFxcZCkvKSx0LnRpbWV6b25lKSk7Zy56eno9Xy5jYWNoZShfLnByb2Nlc3MoZy5jdG9rZW4yKFwidGltZXpvbmVcIiksdC50aW1lem9uZSkpO2cudGltZVN1ZmZpeD1fLmVhY2goXy5pZ25vcmUoZy53aGl0ZVNwYWNlKSxfLnNldChbZy50dCxnLnp6el0pKTtnLnRpbWU9Xy5lYWNoKF8ub3B0aW9uYWwoXy5pZ25vcmUoXy5zdG9rZW4oXCJUXCIpKSksZy5obXMsZy50aW1lU3VmZml4KTtnLmQ9Xy5jYWNoZShfLnByb2Nlc3MoXy5lYWNoKF8ucnRva2VuKC9eKFswLTJdXFxkfDNbMC0xXXxcXGQpLyksXy5vcHRpb25hbChnLmN0b2tlbjIoXCJvcmRpbmFsU3VmZml4XCIpKSksdC5kYXkpKTtnLmRkPV8uY2FjaGUoXy5wcm9jZXNzKF8uZWFjaChfLnJ0b2tlbigvXihbMC0yXVxcZHwzWzAtMV0pLyksXy5vcHRpb25hbChnLmN0b2tlbjIoXCJvcmRpbmFsU3VmZml4XCIpKSksdC5kYXkpKTtnLmRkZD1nLmRkZGQ9Xy5jYWNoZShfLnByb2Nlc3MoZy5jdG9rZW4oXCJzdW4gbW9uIHR1ZSB3ZWQgdGh1IGZyaSBzYXRcIiksZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy53ZWVrZGF5PXM7fTt9KSk7Zy5NPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKDFbMC0yXXwwXFxkfFxcZCkvKSx0Lm1vbnRoKSk7Zy5NTT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXigxWzAtMl18MFxcZCkvKSx0Lm1vbnRoKSk7Zy5NTU09Zy5NTU1NPV8uY2FjaGUoXy5wcm9jZXNzKGcuY3Rva2VuKFwiamFuIGZlYiBtYXIgYXByIG1heSBqdW4ganVsIGF1ZyBzZXAgb2N0IG5vdiBkZWNcIiksdC5tb250aCkpO2cueT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXGRcXGQ/KS8pLHQueWVhcikpO2cueXk9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oXFxkXFxkKS8pLHQueWVhcikpO2cueXl5PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFxcZFxcZD9cXGQ/XFxkPykvKSx0LnllYXIpKTtnLnl5eXk9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oXFxkXFxkXFxkXFxkKS8pLHQueWVhcikpO19mbj1mdW5jdGlvbigpe3JldHVybiBfLmVhY2goXy5hbnkuYXBwbHkobnVsbCxhcmd1bWVudHMpLF8ubm90KGcuY3Rva2VuMihcInRpbWVDb250ZXh0XCIpKSk7fTtnLmRheT1fZm4oZy5kLGcuZGQpO2cubW9udGg9X2ZuKGcuTSxnLk1NTSk7Zy55ZWFyPV9mbihnLnl5eXksZy55eSk7Zy5vcmllbnRhdGlvbj1fLnByb2Nlc3MoZy5jdG9rZW4oXCJwYXN0IGZ1dHVyZVwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm9yaWVudD1zO307fSk7Zy5vcGVyYXRvcj1fLnByb2Nlc3MoZy5jdG9rZW4oXCJhZGQgc3VidHJhY3RcIiksZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5vcGVyYXRvcj1zO307fSk7Zy5yZGF5PV8ucHJvY2VzcyhnLmN0b2tlbihcInllc3RlcmRheSB0b21vcnJvdyB0b2RheSBub3dcIiksdC5yZGF5KTtnLnVuaXQ9Xy5wcm9jZXNzKGcuY3Rva2VuKFwic2Vjb25kIG1pbnV0ZSBob3VyIGRheSB3ZWVrIG1vbnRoIHllYXJcIiksZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy51bml0PXM7fTt9KTtnLnZhbHVlPV8ucHJvY2VzcyhfLnJ0b2tlbigvXlxcZFxcZD8oc3R8bmR8cmR8dGgpPy8pLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMudmFsdWU9cy5yZXBsYWNlKC9cXEQvZyxcIlwiKTt9O30pO2cuZXhwcmVzc2lvbj1fLnNldChbZy5yZGF5LGcub3BlcmF0b3IsZy52YWx1ZSxnLnVuaXQsZy5vcmllbnRhdGlvbixnLmRkZCxnLk1NTV0pO19mbj1mdW5jdGlvbigpe3JldHVybiBfLnNldChhcmd1bWVudHMsZy5kYXRlUGFydERlbGltaXRlcik7fTtnLm1keT1fZm4oZy5kZGQsZy5tb250aCxnLmRheSxnLnllYXIpO2cueW1kPV9mbihnLmRkZCxnLnllYXIsZy5tb250aCxnLmRheSk7Zy5kbXk9X2ZuKGcuZGRkLGcuZGF5LGcubW9udGgsZy55ZWFyKTtnLmRhdGU9ZnVuY3Rpb24ocyl7cmV0dXJuKChnWyRDLmRhdGVFbGVtZW50T3JkZXJdfHxnLm1keSkuY2FsbCh0aGlzLHMpKTt9O2cuZm9ybWF0PV8ucHJvY2VzcyhfLm1hbnkoXy5hbnkoXy5wcm9jZXNzKF8ucnRva2VuKC9eKGRkP2Q/ZD98TU0/TT9NP3x5eT95P3k/fGhoP3xISD98bW0/fHNzP3x0dD98eno/ej8pLyksZnVuY3Rpb24oZm10KXtpZihnW2ZtdF0pe3JldHVybiBnW2ZtdF07fWVsc2V7dGhyb3cgJEQuUGFyc2luZy5FeGNlcHRpb24oZm10KTt9fSksXy5wcm9jZXNzKF8ucnRva2VuKC9eW15kTXloSG1zdHpdKy8pLGZ1bmN0aW9uKHMpe3JldHVybiBfLmlnbm9yZShfLnN0b2tlbihzKSk7fSkpKSxmdW5jdGlvbihydWxlcyl7cmV0dXJuIF8ucHJvY2VzcyhfLmVhY2guYXBwbHkobnVsbCxydWxlcyksdC5maW5pc2hFeGFjdCk7fSk7dmFyIF9GPXt9O3ZhciBfZ2V0PWZ1bmN0aW9uKGYpe3JldHVybiBfRltmXT0oX0ZbZl18fGcuZm9ybWF0KGYpWzBdKTt9O2cuZm9ybWF0cz1mdW5jdGlvbihmeCl7aWYoZnggaW5zdGFuY2VvZiBBcnJheSl7dmFyIHJ4PVtdO2Zvcih2YXIgaT0wO2k8ZngubGVuZ3RoO2krKyl7cngucHVzaChfZ2V0KGZ4W2ldKSk7fVxucmV0dXJuIF8uYW55LmFwcGx5KG51bGwscngpO31lbHNle3JldHVybiBfZ2V0KGZ4KTt9fTtnLl9mb3JtYXRzPWcuZm9ybWF0cyhbXCJcXFwieXl5eS1NTS1kZFRISDptbTpzc1pcXFwiXCIsXCJ5eXl5LU1NLWRkVEhIOm1tOnNzWlwiLFwieXl5eS1NTS1kZFRISDptbTpzc3pcIixcInl5eXktTU0tZGRUSEg6bW06c3NcIixcInl5eXktTU0tZGRUSEg6bW1aXCIsXCJ5eXl5LU1NLWRkVEhIOm1telwiLFwieXl5eS1NTS1kZFRISDptbVwiLFwiZGRkLCBNTU0gZGQsIHl5eXkgSDptbTpzcyB0dFwiLFwiZGRkIE1NTSBkIHl5eXkgSEg6bW06c3Mgenp6XCIsXCJNTWRkeXl5eVwiLFwiZGRNTXl5eXlcIixcIk1kZHl5eXlcIixcImRkTXl5eXlcIixcIk1keXl5eVwiLFwiZE15eXl5XCIsXCJ5eXl5XCIsXCJNZHl5XCIsXCJkTXl5XCIsXCJkXCJdKTtnLl9zdGFydD1fLnByb2Nlc3MoXy5zZXQoW2cuZGF0ZSxnLnRpbWUsZy5leHByZXNzaW9uXSxnLmdlbmVyYWxEZWxpbWl0ZXIsZy53aGl0ZVNwYWNlKSx0LmZpbmlzaCk7Zy5zdGFydD1mdW5jdGlvbihzKXt0cnl7dmFyIHI9Zy5fZm9ybWF0cy5jYWxsKHt9LHMpO2lmKHJbMV0ubGVuZ3RoPT09MCl7cmV0dXJuIHI7fX1jYXRjaChlKXt9XG5yZXR1cm4gZy5fc3RhcnQuY2FsbCh7fSxzKTt9OyRELl9wYXJzZT0kRC5wYXJzZTskRC5wYXJzZT1mdW5jdGlvbihzKXt2YXIgcj1udWxsO2lmKCFzKXtyZXR1cm4gbnVsbDt9XG5pZihzIGluc3RhbmNlb2YgRGF0ZSl7cmV0dXJuIHM7fVxudHJ5e3I9JEQuR3JhbW1hci5zdGFydC5jYWxsKHt9LHMucmVwbGFjZSgvXlxccyooXFxTKihcXHMrXFxTKykqKVxccyokLyxcIiQxXCIpKTt9Y2F0Y2goZSl7cmV0dXJuIG51bGw7fVxucmV0dXJuKChyWzFdLmxlbmd0aD09PTApP3JbMF06bnVsbCk7fTskRC5nZXRQYXJzZUZ1bmN0aW9uPWZ1bmN0aW9uKGZ4KXt2YXIgZm49JEQuR3JhbW1hci5mb3JtYXRzKGZ4KTtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDt0cnl7cj1mbi5jYWxsKHt9LHMpO31jYXRjaChlKXtyZXR1cm4gbnVsbDt9XG5yZXR1cm4oKHJbMV0ubGVuZ3RoPT09MCk/clswXTpudWxsKTt9O307JEQucGFyc2VFeGFjdD1mdW5jdGlvbihzLGZ4KXtyZXR1cm4gJEQuZ2V0UGFyc2VGdW5jdGlvbihmeCkocyk7fTt9KCkpO1xyXG5cbn0pKHJlcXVpcmUoXCJfX2Jyb3dzZXJpZnlfcHJvY2Vzc1wiKSkiLCIoZnVuY3Rpb24oKXsvLyAgICAgVW5kZXJzY29yZS5qcyAxLjQuNFxuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgSW5jLlxuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbihmdW5jdGlvbigpIHtcblxuICAvLyBCYXNlbGluZSBzZXR1cFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIGluIHRoZSBicm93c2VyLCBvciBgZ2xvYmFsYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBFc3RhYmxpc2ggdGhlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgdG8gYnJlYWsgb3V0IG9mIGEgbG9vcCBpdGVyYXRpb24uXG4gIHZhciBicmVha2VyID0ge307XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZSwgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICB2YXIgcHVzaCAgICAgICAgICAgICA9IEFycmF5UHJvdG8ucHVzaCxcbiAgICAgIHNsaWNlICAgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgICAgY29uY2F0ICAgICAgICAgICA9IEFycmF5UHJvdG8uY29uY2F0LFxuICAgICAgdG9TdHJpbmcgICAgICAgICA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgICAgaGFzT3duUHJvcGVydHkgICA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuXG4gIC8vIEFsbCAqKkVDTUFTY3JpcHQgNSoqIG5hdGl2ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3ZSBob3BlIHRvIHVzZVxuICAvLyBhcmUgZGVjbGFyZWQgaGVyZS5cbiAgdmFyXG4gICAgbmF0aXZlRm9yRWFjaCAgICAgID0gQXJyYXlQcm90by5mb3JFYWNoLFxuICAgIG5hdGl2ZU1hcCAgICAgICAgICA9IEFycmF5UHJvdG8ubWFwLFxuICAgIG5hdGl2ZVJlZHVjZSAgICAgICA9IEFycmF5UHJvdG8ucmVkdWNlLFxuICAgIG5hdGl2ZVJlZHVjZVJpZ2h0ICA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHQsXG4gICAgbmF0aXZlRmlsdGVyICAgICAgID0gQXJyYXlQcm90by5maWx0ZXIsXG4gICAgbmF0aXZlRXZlcnkgICAgICAgID0gQXJyYXlQcm90by5ldmVyeSxcbiAgICBuYXRpdmVTb21lICAgICAgICAgPSBBcnJheVByb3RvLnNvbWUsXG4gICAgbmF0aXZlSW5kZXhPZiAgICAgID0gQXJyYXlQcm90by5pbmRleE9mLFxuICAgIG5hdGl2ZUxhc3RJbmRleE9mICA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2YsXG4gICAgbmF0aXZlSXNBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheSxcbiAgICBuYXRpdmVLZXlzICAgICAgICAgPSBPYmplY3Qua2V5cyxcbiAgICBuYXRpdmVCaW5kICAgICAgICAgPSBGdW5jUHJvdG8uYmluZDtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZSBvbGQgYHJlcXVpcmUoKWAgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QgdmlhIGEgc3RyaW5nIGlkZW50aWZpZXIsXG4gIC8vIGZvciBDbG9zdXJlIENvbXBpbGVyIFwiYWR2YW5jZWRcIiBtb2RlLlxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfO1xuICAgIH1cbiAgICBleHBvcnRzLl8gPSBfO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuXyA9IF87XG4gIH1cblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjQuNCc7XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyBvYmplY3RzIHdpdGggdGhlIGJ1aWx0LWluIGBmb3JFYWNoYCwgYXJyYXlzLCBhbmQgcmF3IG9iamVjdHMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmb3JFYWNoYCBpZiBhdmFpbGFibGUuXG4gIHZhciBlYWNoID0gXy5lYWNoID0gXy5mb3JFYWNoID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuO1xuICAgIGlmIChuYXRpdmVGb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBuYXRpdmVGb3JFYWNoKSB7XG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChfLmhhcyhvYmosIGtleSkpIHtcbiAgICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopID09PSBicmVha2VyKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRvciB0byBlYWNoIGVsZW1lbnQuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBtYXBgIGlmIGF2YWlsYWJsZS5cbiAgXy5tYXAgPSBfLmNvbGxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVNYXAgJiYgb2JqLm1hcCA9PT0gbmF0aXZlTWFwKSByZXR1cm4gb2JqLm1hcChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmVzdWx0c1tyZXN1bHRzLmxlbmd0aF0gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgdmFyIHJlZHVjZUVycm9yID0gJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnO1xuXG4gIC8vICoqUmVkdWNlKiogYnVpbGRzIHVwIGEgc2luZ2xlIHJlc3VsdCBmcm9tIGEgbGlzdCBvZiB2YWx1ZXMsIGFrYSBgaW5qZWN0YCxcbiAgLy8gb3IgYGZvbGRsYC4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZWAgaWYgYXZhaWxhYmxlLlxuICBfLnJlZHVjZSA9IF8uZm9sZGwgPSBfLmluamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIGlmIChvYmogPT0gbnVsbCkgb2JqID0gW107XG4gICAgaWYgKG5hdGl2ZVJlZHVjZSAmJiBvYmoucmVkdWNlID09PSBuYXRpdmVSZWR1Y2UpIHtcbiAgICAgIGlmIChjb250ZXh0KSBpdGVyYXRvciA9IF8uYmluZChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gaW5pdGlhbCA/IG9iai5yZWR1Y2UoaXRlcmF0b3IsIG1lbW8pIDogb2JqLnJlZHVjZShpdGVyYXRvcik7XG4gICAgfVxuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gdmFsdWU7XG4gICAgICAgIGluaXRpYWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgbWVtbywgdmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWluaXRpYWwpIHRocm93IG5ldyBUeXBlRXJyb3IocmVkdWNlRXJyb3IpO1xuICAgIHJldHVybiBtZW1vO1xuICB9O1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgcmVkdWNlUmlnaHRgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2VSaWdodCA9IF8uZm9sZHIgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2VSaWdodCAmJiBvYmoucmVkdWNlUmlnaHQgPT09IG5hdGl2ZVJlZHVjZVJpZ2h0KSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlUmlnaHQoaXRlcmF0b3IsIG1lbW8pIDogb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gK2xlbmd0aCkge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpbmRleCA9IGtleXMgPyBrZXlzWy0tbGVuZ3RoXSA6IC0tbGVuZ3RoO1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSBvYmpbaW5kZXhdO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIG9ialtpbmRleF0sIGluZGV4LCBsaXN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWluaXRpYWwpIHRocm93IG5ldyBUeXBlRXJyb3IocmVkdWNlRXJyb3IpO1xuICAgIHJldHVybiBtZW1vO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZpbHRlcmAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlRmlsdGVyICYmIG9iai5maWx0ZXIgPT09IG5hdGl2ZUZpbHRlcikgcmV0dXJuIG9iai5maWx0ZXIoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4gIWl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIG1hdGNoIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGV2ZXJ5YCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYGFsbGAuXG4gIF8uZXZlcnkgPSBfLmFsbCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciB8fCAoaXRlcmF0b3IgPSBfLmlkZW50aXR5KTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKG5hdGl2ZUV2ZXJ5ICYmIG9iai5ldmVyeSA9PT0gbmF0aXZlRXZlcnkpIHJldHVybiBvYmouZXZlcnkoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmICghKHJlc3VsdCA9IHJlc3VsdCAmJiBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKSByZXR1cm4gYnJlYWtlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHQ7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgbWF0Y2hlcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBzb21lYCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYGFueWAuXG4gIHZhciBhbnkgPSBfLnNvbWUgPSBfLmFueSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciB8fCAoaXRlcmF0b3IgPSBfLmlkZW50aXR5KTtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChuYXRpdmVTb21lICYmIG9iai5zb21lID09PSBuYXRpdmVTb21lKSByZXR1cm4gb2JqLnNvbWUoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChyZXN1bHQgfHwgKHJlc3VsdCA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIHZhbHVlICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBvYmouaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikgcmV0dXJuIG9iai5pbmRleE9mKHRhcmdldCkgIT0gLTE7XG4gICAgcmV0dXJuIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRhcmdldDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIChpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdKS5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gdmFsdWVba2V5XTsgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmlsdGVyYDogc2VsZWN0aW5nIG9ubHkgb2JqZWN0c1xuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLndoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycywgZmlyc3QpIHtcbiAgICBpZiAoXy5pc0VtcHR5KGF0dHJzKSkgcmV0dXJuIGZpcnN0ID8gbnVsbCA6IFtdO1xuICAgIHJldHVybiBfW2ZpcnN0ID8gJ2ZpbmQnIDogJ2ZpbHRlciddKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgICBpZiAoYXR0cnNba2V5XSAhPT0gdmFsdWVba2V5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy53aGVyZShvYmosIGF0dHJzLCB0cnVlKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCBvciAoZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIC8vIENhbid0IG9wdGltaXplIGFycmF5cyBvZiBpbnRlZ2VycyBsb25nZXIgdGhhbiA2NSw1MzUgZWxlbWVudHMuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgwNzk3XG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0FycmF5KG9iaikgJiYgb2JqWzBdID09PSArb2JqWzBdICYmIG9iai5sZW5ndGggPCA2NTUzNSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIG9iaik7XG4gICAgfVxuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0VtcHR5KG9iaikpIHJldHVybiAtSW5maW5pdHk7XG4gICAgdmFyIHJlc3VsdCA9IHtjb21wdXRlZCA6IC1JbmZpbml0eSwgdmFsdWU6IC1JbmZpbml0eX07XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgdmFyIGNvbXB1dGVkID0gaXRlcmF0b3IgPyBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkgOiB2YWx1ZTtcbiAgICAgIGNvbXB1dGVkID49IHJlc3VsdC5jb21wdXRlZCAmJiAocmVzdWx0ID0ge3ZhbHVlIDogdmFsdWUsIGNvbXB1dGVkIDogY29tcHV0ZWR9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzRW1wdHkob2JqKSkgcmV0dXJuIEluZmluaXR5O1xuICAgIHZhciByZXN1bHQgPSB7Y29tcHV0ZWQgOiBJbmZpbml0eSwgdmFsdWU6IEluZmluaXR5fTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBpdGVyYXRvciA/IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSA6IHZhbHVlO1xuICAgICAgY29tcHV0ZWQgPCByZXN1bHQuY29tcHV0ZWQgJiYgKHJlc3VsdCA9IHt2YWx1ZSA6IHZhbHVlLCBjb21wdXRlZCA6IGNvbXB1dGVkfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfTtcblxuICAvLyBTaHVmZmxlIGFuIGFycmF5LlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmFuZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzaHVmZmxlZCA9IFtdO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmFuZCA9IF8ucmFuZG9tKGluZGV4KyspO1xuICAgICAgc2h1ZmZsZWRbaW5kZXggLSAxXSA9IHNodWZmbGVkW3JhbmRdO1xuICAgICAgc2h1ZmZsZWRbcmFuZF0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgbG9va3VwIGl0ZXJhdG9ycy5cbiAgdmFyIGxvb2t1cEl0ZXJhdG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlIDogZnVuY3Rpb24ob2JqKXsgcmV0dXJuIG9ialt2YWx1ZV07IH07XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdG9yLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcih2YWx1ZSk7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlIDogdmFsdWUsXG4gICAgICAgIGluZGV4IDogaW5kZXgsXG4gICAgICAgIGNyaXRlcmlhIDogaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggPCByaWdodC5pbmRleCA/IC0xIDogMTtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0LCBiZWhhdmlvcikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcih2YWx1ZSB8fCBfLmlkZW50aXR5KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICB2YXIga2V5ID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIG9iaik7XG4gICAgICBiZWhhdmlvcihyZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBncm91cChvYmosIHZhbHVlLCBjb250ZXh0LCBmdW5jdGlvbihyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICAgIChfLmhhcyhyZXN1bHQsIGtleSkgPyByZXN1bHRba2V5XSA6IChyZXN1bHRba2V5XSA9IFtdKSkucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZ3JvdXAob2JqLCB2YWx1ZSwgY29udGV4dCwgZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICAgIGlmICghXy5oYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XSA9IDA7XG4gICAgICByZXN1bHRba2V5XSsrO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yID09IG51bGwgPyBfLmlkZW50aXR5IDogbG9va3VwSXRlcmF0b3IoaXRlcmF0b3IpO1xuICAgIHZhciB2YWx1ZSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqKTtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IChsb3cgKyBoaWdoKSA+Pj4gMTtcbiAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbbWlkXSkgPCB2YWx1ZSA/IGxvdyA9IG1pZCArIDEgOiBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIFNhZmVseSBjb252ZXJ0IGFueXRoaW5nIGl0ZXJhYmxlIGludG8gYSByZWFsLCBsaXZlIGFycmF5LlxuICBfLnRvQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgICBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIHJldHVybiAobiAhPSBudWxsKSAmJiAhZ3VhcmQgPyBzbGljZS5jYWxsKGFycmF5LCAwLCBuKSA6IGFycmF5WzBdO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGxhc3QgZW50cnkgb2YgdGhlIGFycmF5LiBFc3BlY2lhbGx5IHVzZWZ1bCBvblxuICAvLyB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiBhbGwgdGhlIHZhbHVlcyBpblxuICAvLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGhcbiAgLy8gYF8ubWFwYC5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtICgobiA9PSBudWxsKSB8fCBndWFyZCA/IDEgOiBuKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5sYXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgaWYgKChuICE9IG51bGwpICYmICFndWFyZCkge1xuICAgICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIE1hdGgubWF4KGFycmF5Lmxlbmd0aCAtIG4sIDApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYHRhaWxgIGFuZCBgZHJvcGAuXG4gIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nIGFuICoqbioqIHdpbGwgcmV0dXJuXG4gIC8vIHRoZSByZXN0IE4gdmFsdWVzIGluIHRoZSBhcnJheS4gVGhlICoqZ3VhcmQqKlxuICAvLyBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAobiA9PSBudWxsKSB8fCBndWFyZCA/IDEgOiBuKTtcbiAgfTtcblxuICAvLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIF8uY29tcGFjdCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBfLmlkZW50aXR5KTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIHJlY3Vyc2l2ZSBgZmxhdHRlbmAgZnVuY3Rpb24uXG4gIHZhciBmbGF0dGVuID0gZnVuY3Rpb24oaW5wdXQsIHNoYWxsb3csIG91dHB1dCkge1xuICAgIGVhY2goaW5wdXQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBzaGFsbG93ID8gcHVzaC5hcHBseShvdXRwdXQsIHZhbHVlKSA6IGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIG91dHB1dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb21wbGV0ZWx5IGZsYXR0ZW5lZCB2ZXJzaW9uIG9mIGFuIGFycmF5LlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBbXSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0b3I7XG4gICAgICBpdGVyYXRvciA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGluaXRpYWwgPSBpdGVyYXRvciA/IF8ubWFwKGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkgOiBhcnJheTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZWFjaChpbml0aWFsLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGlmIChpc1NvcnRlZCA/ICghaW5kZXggfHwgc2VlbltzZWVuLmxlbmd0aCAtIDFdICE9PSB2YWx1ZSkgOiAhXy5jb250YWlucyhzZWVuLCB2YWx1ZSkpIHtcbiAgICAgICAgc2Vlbi5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGFycmF5W2luZGV4XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSB1bmlvbjogZWFjaCBkaXN0aW5jdCBlbGVtZW50IGZyb20gYWxsIG9mXG4gIC8vIHRoZSBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLnVuaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW5pcShjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKF8udW5pcShhcnJheSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfLmV2ZXJ5KHJlc3QsIGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBfLmluZGV4T2Yob3RoZXIsIGl0ZW0pID49IDA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXsgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTsgfSk7XG4gIH07XG5cbiAgLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuICAvLyBhbiBpbmRleCBnbyB0b2dldGhlci5cbiAgXy56aXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB2YXIgbGVuZ3RoID0gXy5tYXgoXy5wbHVjayhhcmdzLCAnbGVuZ3RoJykpO1xuICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0c1tpXSA9IF8ucGx1Y2soYXJncywgXCJcIiArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4gIC8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuICAvLyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gIF8ub2JqZWN0ID0gZnVuY3Rpb24obGlzdCwgdmFsdWVzKSB7XG4gICAgaWYgKGxpc3QgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwbHkgdXMgd2l0aCBpbmRleE9mIChJJ20gbG9va2luZyBhdCB5b3UsICoqTVNJRSoqKSxcbiAgLy8gd2UgbmVlZCB0aGlzIGZ1bmN0aW9uLiBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuXG4gIC8vIGl0ZW0gaW4gYW4gYXJyYXksIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBpbmRleE9mYCBpZiBhdmFpbGFibGUuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgaXNTb3J0ZWQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDtcbiAgICBpZiAoaXNTb3J0ZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgaXNTb3J0ZWQgPT0gJ251bWJlcicpIHtcbiAgICAgICAgaSA9IChpc1NvcnRlZCA8IDAgPyBNYXRoLm1heCgwLCBsICsgaXNTb3J0ZWQpIDogaXNTb3J0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IF8uc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaV0gPT09IGl0ZW0gPyBpIDogLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIGFycmF5LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0sIGlzU29ydGVkKTtcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGxhc3RJbmRleE9mYCBpZiBhdmFpbGFibGUuXG4gIF8ubGFzdEluZGV4T2YgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgZnJvbSkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGhhc0luZGV4ID0gZnJvbSAhPSBudWxsO1xuICAgIGlmIChuYXRpdmVMYXN0SW5kZXhPZiAmJiBhcnJheS5sYXN0SW5kZXhPZiA9PT0gbmF0aXZlTGFzdEluZGV4T2YpIHtcbiAgICAgIHJldHVybiBoYXNJbmRleCA/IGFycmF5Lmxhc3RJbmRleE9mKGl0ZW0sIGZyb20pIDogYXJyYXkubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIHZhciBpID0gKGhhc0luZGV4ID8gZnJvbSA6IGFycmF5Lmxlbmd0aCk7XG4gICAgd2hpbGUgKGktLSkgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYW4gaW50ZWdlciBBcnJheSBjb250YWluaW5nIGFuIGFyaXRobWV0aWMgcHJvZ3Jlc3Npb24uIEEgcG9ydCBvZlxuICAvLyB0aGUgbmF0aXZlIFB5dGhvbiBgcmFuZ2UoKWAgZnVuY3Rpb24uIFNlZVxuICAvLyBbdGhlIFB5dGhvbiBkb2N1bWVudGF0aW9uXShodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvZnVuY3Rpb25zLmh0bWwjcmFuZ2UpLlxuICBfLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICBzdG9wID0gc3RhcnQgfHwgMDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgc3RlcCA9IGFyZ3VtZW50c1syXSB8fCAxO1xuXG4gICAgdmFyIGxlbiA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB2YXIgcmFuZ2UgPSBuZXcgQXJyYXkobGVuKTtcblxuICAgIHdoaWxlKGlkeCA8IGxlbikge1xuICAgICAgcmFuZ2VbaWR4KytdID0gc3RhcnQ7XG4gICAgICBzdGFydCArPSBzdGVwO1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuICAvLyBvcHRpb25hbGx5KS4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYEZ1bmN0aW9uLmJpbmRgIGlmXG4gIC8vIGF2YWlsYWJsZS5cbiAgXy5iaW5kID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xuICAgIGlmIChmdW5jLmJpbmQgPT09IG5hdGl2ZUJpbmQgJiYgbmF0aXZlQmluZCkgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbiAgLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuXG4gIF8ucGFydGlhbCA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEJpbmQgYWxsIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdFxuICAvLyBhbGwgY2FsbGJhY2tzIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGZ1bmNzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDApIGZ1bmNzID0gXy5mdW5jdGlvbnMob2JqKTtcbiAgICBlYWNoKGZ1bmNzLCBmdW5jdGlvbihmKSB7IG9ialtmXSA9IF8uYmluZChvYmpbZl0sIG9iaik7IH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbiAgXy5tZW1vaXplID0gZnVuY3Rpb24oZnVuYywgaGFzaGVyKSB7XG4gICAgdmFyIG1lbW8gPSB7fTtcbiAgICBoYXNoZXIgfHwgKGhhc2hlciA9IF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrZXkgPSBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfLmhhcyhtZW1vLCBrZXkpID8gbWVtb1trZXldIDogKG1lbW9ba2V5XSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpeyByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTsgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgcmV0dXJuIF8uZGVsYXkuYXBwbHkoXywgW2Z1bmMsIDFdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHRpbWVvdXQsIHJlc3VsdDtcbiAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBuZXcgRGF0ZTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZTtcbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIHJlc3VsdDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4gIC8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG4gIF8ub25jZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICB2YXIgcmFuID0gZmFsc2UsIG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHJhbikgcmV0dXJuIG1lbW87XG4gICAgICByYW4gPSB0cnVlO1xuICAgICAgbWVtbyA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIHNlY29uZCxcbiAgLy8gYWxsb3dpbmcgeW91IHRvIGFkanVzdCBhcmd1bWVudHMsIHJ1biBjb2RlIGJlZm9yZSBhbmQgYWZ0ZXIsIGFuZFxuICAvLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICBfLndyYXAgPSBmdW5jdGlvbihmdW5jLCB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbZnVuY107XG4gICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gd3JhcHBlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4gIC8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG4gIF8uY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmdW5jcyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGZvciAodmFyIGkgPSBmdW5jcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhcmdzID0gW2Z1bmNzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGFmdGVyIGJlaW5nIGNhbGxlZCBOIHRpbWVzLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICBpZiAodGltZXMgPD0gMCkgcmV0dXJuIGZ1bmMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIE9iamVjdCBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgXG4gIF8ua2V5cyA9IG5hdGl2ZUtleXMgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiAhPT0gT2JqZWN0KG9iaikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb2JqZWN0Jyk7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSBrZXlzW2tleXMubGVuZ3RoXSA9IGtleTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIHZhbHVlcy5wdXNoKG9ialtrZXldKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuICBfLnBhaXJzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHBhaXJzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkgcGFpcnMucHVzaChba2V5LCBvYmpba2V5XV0pO1xuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIHJlc3VsdFtvYmpba2V5XV0gPSBrZXk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrZXlzID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgZWFjaChrZXlzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgaW4gb2JqKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoIV8uY29udGFpbnMoa2V5cywga2V5KSkgY29weVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKG9ialtwcm9wXSA9PSBudWxsKSBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIEhhcm1vbnkgYGVnYWxgIHByb3Bvc2FsOiBodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwuXG4gICAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09IDEgLyBiO1xuICAgIC8vIEEgc3RyaWN0IGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYG51bGwgPT0gdW5kZWZpbmVkYC5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGEgPT09IGI7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gYSA9PSBTdHJpbmcoYik7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLiBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yXG4gICAgICAgIC8vIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICByZXR1cm4gYSAhPSArYSA/IGIgIT0gK2IgOiAoYSA9PSAwID8gMSAvIGEgPT0gMSAvIGIgOiBhID09ICtiKTtcbiAgICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgIHJldHVybiArYSA9PSArYjtcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyIHNvdXJjZSBwYXR0ZXJucyBhbmQgZmxhZ3MuXG4gICAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxuICAgICAgICByZXR1cm4gYS5zb3VyY2UgPT0gYi5zb3VyY2UgJiZcbiAgICAgICAgICAgICAgIGEuZ2xvYmFsID09IGIuZ2xvYmFsICYmXG4gICAgICAgICAgICAgICBhLm11bHRpbGluZSA9PSBiLm11bHRpbGluZSAmJlxuICAgICAgICAgICAgICAgYS5pZ25vcmVDYXNlID09IGIuaWdub3JlQ2FzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09IGI7XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcbiAgICB2YXIgc2l6ZSA9IDAsIHJlc3VsdCA9IHRydWU7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgIHNpemUgPSBhLmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpemUgPT0gYi5sZW5ndGg7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBlcShhW3NpemVdLCBiW3NpemVdLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHNcbiAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiAoYUN0b3IgaW5zdGFuY2VvZiBhQ3RvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmlzRnVuY3Rpb24oYkN0b3IpICYmIChiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoXy5oYXMoYSwga2V5KSkge1xuICAgICAgICAgIC8vIENvdW50IHRoZSBleHBlY3RlZCBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgICAgICBzaXplKys7XG4gICAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyLlxuICAgICAgICAgIGlmICghKHJlc3VsdCA9IF8uaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgIGlmIChfLmhhcyhiLCBrZXkpICYmICEoc2l6ZS0tKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gIXNpemU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wb3AoKTtcbiAgICBiU3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbiAgXy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBlcShhLCBiLCBbXSwgW10pO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikpIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgYW4gb2JqZWN0P1xuICBfLmlzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH07XG5cbiAgLy8gQWRkIHNvbWUgaXNUeXBlIG1ldGhvZHM6IGlzQXJndW1lbnRzLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAuXG4gIGVhY2goWydBcmd1bWVudHMnLCAnRnVuY3Rpb24nLCAnU3RyaW5nJywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgX1snaXMnICsgbmFtZV0gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSksIHdoZXJlXG4gIC8vIHRoZXJlIGlzbid0IGFueSBpbnNwZWN0YWJsZSBcIkFyZ3VtZW50c1wiIHR5cGUuXG4gIGlmICghXy5pc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgXy5pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuICEhKG9iaiAmJiBfLmhhcyhvYmosICdjYWxsZWUnKSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS5cbiAgaWYgKHR5cGVvZiAoLy4vKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG4gICAgfTtcbiAgfVxuXG4gIC8vIElzIGEgZ2l2ZW4gb2JqZWN0IGEgZmluaXRlIG51bWJlcj9cbiAgXy5pc0Zpbml0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBpc0Zpbml0ZShvYmopICYmICFpc05hTihwYXJzZUZsb2F0KG9iaikpO1xuICB9O1xuXG4gIC8vIElzIHRoZSBnaXZlbiB2YWx1ZSBgTmFOYD8gKE5hTiBpcyB0aGUgb25seSBudW1iZXIgd2hpY2ggZG9lcyBub3QgZXF1YWwgaXRzZWxmKS5cbiAgXy5pc05hTiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfLmlzTnVtYmVyKG9iaikgJiYgb2JqICE9ICtvYmo7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuICBfLmlzTnVsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSB1bmRlZmluZWQ/XG4gIF8uaXNVbmRlZmluZWQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0b3JzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG4gIF8udGltZXMgPSBmdW5jdGlvbihuLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciBhY2N1bSA9IEFycmF5KG4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgZXNjYXBlOiB7XG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnLFxuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICBcIidcIjogJyYjeDI3OycsXG4gICAgICAnLyc6ICcmI3gyRjsnXG4gICAgfVxuICB9O1xuICBlbnRpdHlNYXAudW5lc2NhcGUgPSBfLmludmVydChlbnRpdHlNYXAuZXNjYXBlKTtcblxuICAvLyBSZWdleGVzIGNvbnRhaW5pbmcgdGhlIGtleXMgYW5kIHZhbHVlcyBsaXN0ZWQgaW1tZWRpYXRlbHkgYWJvdmUuXG4gIHZhciBlbnRpdHlSZWdleGVzID0ge1xuICAgIGVzY2FwZTogICBuZXcgUmVnRXhwKCdbJyArIF8ua2V5cyhlbnRpdHlNYXAuZXNjYXBlKS5qb2luKCcnKSArICddJywgJ2cnKSxcbiAgICB1bmVzY2FwZTogbmV3IFJlZ0V4cCgnKCcgKyBfLmtleXMoZW50aXR5TWFwLnVuZXNjYXBlKS5qb2luKCd8JykgKyAnKScsICdnJylcbiAgfTtcblxuICAvLyBGdW5jdGlvbnMgZm9yIGVzY2FwaW5nIGFuZCB1bmVzY2FwaW5nIHN0cmluZ3MgdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG4gIF8uZWFjaChbJ2VzY2FwZScsICd1bmVzY2FwZSddLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBfW21ldGhvZF0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIGlmIChzdHJpbmcgPT0gbnVsbCkgcmV0dXJuICcnO1xuICAgICAgcmV0dXJuICgnJyArIHN0cmluZykucmVwbGFjZShlbnRpdHlSZWdleGVzW21ldGhvZF0sIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBlbnRpdHlNYXBbbWV0aG9kXVttYXRjaF07XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBJZiB0aGUgdmFsdWUgb2YgdGhlIG5hbWVkIHByb3BlcnR5IGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQ7XG4gIC8vIG90aGVyd2lzZSwgcmV0dXJuIGl0LlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKG9iamVjdCkgOiB2YWx1ZTtcbiAgfTtcblxuICAvLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIGZ1bmMuYXBwbHkoXywgYXJncykpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuICAvLyBVc2VmdWwgZm9yIHRlbXBvcmFyeSBET00gaWRzLlxuICB2YXIgaWRDb3VudGVyID0gMDtcbiAgXy51bmlxdWVJZCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gICAgcmV0dXJuIHByZWZpeCA/IHByZWZpeCArIGlkIDogaWQ7XG4gIH07XG5cbiAgLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLCBjaGFuZ2UgdGhlXG4gIC8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbiAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICAgIGV2YWx1YXRlICAgIDogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgICBpbnRlcnBvbGF0ZSA6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICAgIGVzY2FwZSAgICAgIDogLzwlLShbXFxzXFxTXSs/KSU+L2dcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogICAgICBcIidcIixcbiAgICAnXFxcXCc6ICAgICAnXFxcXCcsXG4gICAgJ1xccic6ICAgICAncicsXG4gICAgJ1xcbic6ICAgICAnbicsXG4gICAgJ1xcdCc6ICAgICAndCcsXG4gICAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ3UyMDI5J1xuICB9O1xuXG4gIHZhciBlc2NhcGVyID0gL1xcXFx8J3xcXHJ8XFxufFxcdHxcXHUyMDI4fFxcdTIwMjkvZztcblxuICAvLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuICAvLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4gIC8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24odGV4dCwgZGF0YSwgc2V0dGluZ3MpIHtcbiAgICB2YXIgcmVuZGVyO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoW1xuICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuaW50ZXJwb2xhdGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICAgIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAgIC8vIENvbXBpbGUgdGhlIHRlbXBsYXRlIHNvdXJjZSwgZXNjYXBpbmcgc3RyaW5nIGxpdGVyYWxzIGFwcHJvcHJpYXRlbHkuXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24obWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgICAgIC5yZXBsYWNlKGVzY2FwZXIsIGZ1bmN0aW9uKG1hdGNoKSB7IHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTsgfSk7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH1cbiAgICAgIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICAgIH1cbiAgICAgIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyBcInJldHVybiBfX3A7XFxuXCI7XG5cbiAgICB0cnkge1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSByZXR1cm4gcmVuZGVyKGRhdGEsIF8pO1xuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgZnVuY3Rpb24gc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonKSArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgLy8gQWRkIGEgXCJjaGFpblwiIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGRlbGVnYXRlIHRvIHRoZSB3cmFwcGVyLlxuICBfLmNoYWluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8ob2JqKS5jaGFpbigpO1xuICB9O1xuXG4gIC8vIE9PUFxuICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXRcbiAgLy8gY2FuIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCB0aGVcbiAgLy8gdW5kZXJzY29yZSBmdW5jdGlvbnMuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgYWxsIG9mIHRoZSBVbmRlcnNjb3JlIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlciBvYmplY3QuXG4gIF8ubWl4aW4oXyk7XG5cbiAgLy8gQWRkIGFsbCBtdXRhdG9yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PSAnc2hpZnQnIHx8IG5hbWUgPT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICBfLmV4dGVuZChfLnByb3RvdHlwZSwge1xuXG4gICAgLy8gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuICAgIGNoYWluOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2NoYWluID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgICB9XG5cbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXsvLy8gS25vY2tvdXQgTWFwcGluZyBwbHVnaW4gdjIuMy4yXG4vLy8gKGMpIDIwMTIgU3RldmVuIFNhbmRlcnNvbiwgUm95IEphY29icyAtIGh0dHA6Ly9rbm9ja291dGpzLmNvbS9cbi8vLyBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdC8vIE1vZHVsZSBzeXN0ZW1zIG1hZ2ljIGRhbmNlLlxuXG5cdGlmICh0eXBlb2YgcmVxdWlyZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KUyBvciBOb2RlOiBoYXJkLWNvZGVkIGRlcGVuZGVuY3kgb24gXCJrbm9ja291dFwiXG5cdFx0ZmFjdG9yeShyZXF1aXJlKFwia25vY2tvdXQtY2xpZW50XCIpLCBleHBvcnRzKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lW1wiYW1kXCJdKSB7XG5cdFx0Ly8gQU1EIGFub255bW91cyBtb2R1bGUgd2l0aCBoYXJkLWNvZGVkIGRlcGVuZGVuY3kgb24gXCJrbm9ja291dFwiXG5cdFx0ZGVmaW5lKFtcImtub2Nrb3V0XCIsIFwiZXhwb3J0c1wiXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gPHNjcmlwdD4gdGFnOiB1c2UgdGhlIGdsb2JhbCBga29gIG9iamVjdCwgYXR0YWNoaW5nIGEgYG1hcHBpbmdgIHByb3BlcnR5XG5cdFx0ZmFjdG9yeShrbywga28ubWFwcGluZyA9IHt9KTtcblx0fVxufShmdW5jdGlvbiAoa28sIGV4cG9ydHMpIHtcblx0dmFyIERFQlVHPXRydWU7XG5cdHZhciBtYXBwaW5nUHJvcGVydHkgPSBcIl9fa29fbWFwcGluZ19fXCI7XG5cdHZhciByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0dmFyIG1hcHBpbmdOZXN0aW5nID0gMDtcblx0dmFyIGRlcGVuZGVudE9ic2VydmFibGVzO1xuXHR2YXIgdmlzaXRlZE9iamVjdHM7XG5cdHZhciByZWNvZ25pemVkUm9vdFByb3BlcnRpZXMgPSBbXCJjcmVhdGVcIiwgXCJ1cGRhdGVcIiwgXCJrZXlcIiwgXCJhcnJheUNoYW5nZWRcIl07XG5cdHZhciBlbXB0eVJldHVybiA9IHt9O1xuXG5cdHZhciBfZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0aW5jbHVkZTogW1wiX2Rlc3Ryb3lcIl0sXG5cdFx0aWdub3JlOiBbXSxcblx0XHRjb3B5OiBbXVxuXHR9O1xuXHR2YXIgZGVmYXVsdE9wdGlvbnMgPSBfZGVmYXVsdE9wdGlvbnM7XG5cblx0Ly8gQXV0aG9yOiBLZW5ueVRNIEAgU3RhY2tPdmVyZmxvd1xuXHRmdW5jdGlvbiB1bmlvbkFycmF5cyAoeCwgeSkge1xuXHRcdHZhciBvYmogPSB7fTtcblx0XHRmb3IgKHZhciBpID0geC5sZW5ndGggLSAxOyBpID49IDA7IC0tIGkpIG9ialt4W2ldXSA9IHhbaV07XG5cdFx0Zm9yICh2YXIgaSA9IHkubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLSBpKSBvYmpbeVtpXV0gPSB5W2ldO1xuXHRcdHZhciByZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGsgaW4gb2JqKSB7XG5cdFx0XHRyZXMucHVzaChvYmpba10pO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gcmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kT2JqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0XHRpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgc291cmNlW2tleV0pIHtcblx0XHRcdFx0aWYgKGtleSAmJiBkZXN0aW5hdGlvbltrZXldICYmICEoZXhwb3J0cy5nZXRUeXBlKGRlc3RpbmF0aW9uW2tleV0pID09PSBcImFycmF5XCIpKSB7XG5cdFx0XHRcdFx0ZXh0ZW5kT2JqZWN0KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgYm90aEFycmF5cyA9IGV4cG9ydHMuZ2V0VHlwZShkZXN0aW5hdGlvbltrZXldKSA9PT0gXCJhcnJheVwiICYmIGV4cG9ydHMuZ2V0VHlwZShzb3VyY2Vba2V5XSkgPT09IFwiYXJyYXlcIjtcblx0XHRcdFx0XHRpZiAoYm90aEFycmF5cykge1xuXHRcdFx0XHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IHVuaW9uQXJyYXlzKGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1lcmdlKG9iajEsIG9iajIpIHtcblx0XHR2YXIgbWVyZ2VkID0ge307XG5cdFx0ZXh0ZW5kT2JqZWN0KG1lcmdlZCwgb2JqMSk7XG5cdFx0ZXh0ZW5kT2JqZWN0KG1lcmdlZCwgb2JqMik7XG5cblx0XHRyZXR1cm4gbWVyZ2VkO1xuXHR9XG5cblx0ZXhwb3J0cy5pc01hcHBlZCA9IGZ1bmN0aW9uICh2aWV3TW9kZWwpIHtcblx0XHR2YXIgdW53cmFwcGVkID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2aWV3TW9kZWwpO1xuXHRcdHJldHVybiB1bndyYXBwZWQgJiYgdW53cmFwcGVkW21hcHBpbmdQcm9wZXJ0eV07XG5cdH1cblxuXHRleHBvcnRzLmZyb21KUyA9IGZ1bmN0aW9uIChqc09iamVjdCAvKiwgaW5wdXRPcHRpb25zLCB0YXJnZXQqLyApIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJXaGVuIGNhbGxpbmcga28uZnJvbUpTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIik7XG5cblx0XHQvLyBXaGVuIG1hcHBpbmcgaXMgY29tcGxldGVkLCBldmVuIHdpdGggYW4gZXhjZXB0aW9uLCByZXNldCB0aGUgbmVzdGluZyBsZXZlbFxuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdG1hcHBpbmdOZXN0aW5nID0gMDtcblx0XHR9LCAwKTtcblxuXHRcdGlmICghbWFwcGluZ05lc3RpbmcrKykge1xuXHRcdFx0ZGVwZW5kZW50T2JzZXJ2YWJsZXMgPSBbXTtcblx0XHRcdHZpc2l0ZWRPYmplY3RzID0gbmV3IG9iamVjdExvb2t1cCgpO1xuXHRcdH1cblxuXHRcdHZhciBvcHRpb25zO1xuXHRcdHZhciB0YXJnZXQ7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7XG5cdFx0XHRpZiAoYXJndW1lbnRzWzFdW21hcHBpbmdQcm9wZXJ0eV0pIHtcblx0XHRcdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1sxXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMykge1xuXHRcdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1sxXTtcblx0XHRcdHRhcmdldCA9IGFyZ3VtZW50c1syXTtcblx0XHR9XG5cblx0XHRpZiAodGFyZ2V0KSB7XG5cdFx0XHRvcHRpb25zID0gbWVyZ2Uob3B0aW9ucywgdGFyZ2V0W21hcHBpbmdQcm9wZXJ0eV0pO1xuXHRcdH1cblx0XHRvcHRpb25zID0gZmlsbE9wdGlvbnMob3B0aW9ucyk7XG5cblx0XHR2YXIgcmVzdWx0ID0gdXBkYXRlVmlld01vZGVsKHRhcmdldCwganNPYmplY3QsIG9wdGlvbnMpO1xuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdHJlc3VsdCA9IHRhcmdldDtcblx0XHR9XG5cblx0XHQvLyBFdmFsdWF0ZSBhbnkgZGVwZW5kZW50IG9ic2VydmFibGVzIHRoYXQgd2VyZSBwcm94aWVkLlxuXHRcdC8vIERvIHRoaXMgaW4gYSB0aW1lb3V0IHRvIGRlZmVyIGV4ZWN1dGlvbi4gQmFzaWNhbGx5LCBhbnkgdXNlciBjb2RlIHRoYXQgZXhwbGljaXRseSBsb29rcyB1cCB0aGUgRE8gd2lsbCBwZXJmb3JtIHRoZSBmaXJzdCBldmFsdWF0aW9uLiBPdGhlcndpc2UsXG5cdFx0Ly8gaXQgd2lsbCBiZSBkb25lIGJ5IHRoaXMgY29kZS5cblx0XHRpZiAoIS0tbWFwcGluZ05lc3RpbmcpIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0d2hpbGUgKGRlcGVuZGVudE9ic2VydmFibGVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBETyA9IGRlcGVuZGVudE9ic2VydmFibGVzLnBvcCgpO1xuXHRcdFx0XHRcdGlmIChETykgRE8oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMCk7XG5cdFx0fVxuXG5cdFx0Ly8gU2F2ZSBhbnkgbmV3IG1hcHBpbmcgb3B0aW9ucyBpbiB0aGUgdmlldyBtb2RlbCwgc28gdGhhdCB1cGRhdGVGcm9tSlMgY2FuIHVzZSB0aGVtIGxhdGVyLlxuXHRcdHJlc3VsdFttYXBwaW5nUHJvcGVydHldID0gbWVyZ2UocmVzdWx0W21hcHBpbmdQcm9wZXJ0eV0sIG9wdGlvbnMpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRleHBvcnRzLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb25TdHJpbmcgLyosIG9wdGlvbnMsIHRhcmdldCovICkge1xuXHRcdHZhciBwYXJzZWQgPSBrby51dGlscy5wYXJzZUpzb24oanNvblN0cmluZyk7XG5cdFx0YXJndW1lbnRzWzBdID0gcGFyc2VkO1xuXHRcdHJldHVybiBleHBvcnRzLmZyb21KUy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHR9O1xuXG5cdGV4cG9ydHMudXBkYXRlRnJvbUpTID0gZnVuY3Rpb24gKHZpZXdNb2RlbCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImtvLm1hcHBpbmcudXBkYXRlRnJvbUpTLCB1c2Uga28ubWFwcGluZy5mcm9tSlMgaW5zdGVhZC4gUGxlYXNlIG5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgcGFyYW1ldGVycyBpcyBkaWZmZXJlbnQhXCIpO1xuXHR9O1xuXG5cdGV4cG9ydHMudXBkYXRlRnJvbUpTT04gPSBmdW5jdGlvbiAodmlld01vZGVsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy51cGRhdGVGcm9tSlNPTiwgdXNlIGtvLm1hcHBpbmcuZnJvbUpTT04gaW5zdGVhZC4gUGxlYXNlIG5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgcGFyYW1ldGVycyBpcyBkaWZmZXJlbnQhXCIpO1xuXHR9O1xuXG5cdGV4cG9ydHMudG9KUyA9IGZ1bmN0aW9uIChyb290T2JqZWN0LCBvcHRpb25zKSB7XG5cdFx0aWYgKCFkZWZhdWx0T3B0aW9ucykgZXhwb3J0cy5yZXNldERlZmF1bHRPcHRpb25zKCk7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJXaGVuIGNhbGxpbmcga28ubWFwcGluZy50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIik7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShkZWZhdWx0T3B0aW9ucy5pZ25vcmUpICE9PSBcImFycmF5XCIpIHRocm93IG5ldyBFcnJvcihcImtvLm1hcHBpbmcuZGVmYXVsdE9wdGlvbnMoKS5pZ25vcmUgc2hvdWxkIGJlIGFuIGFycmF5LlwiKTtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGRlZmF1bHRPcHRpb25zLmluY2x1ZGUpICE9PSBcImFycmF5XCIpIHRocm93IG5ldyBFcnJvcihcImtvLm1hcHBpbmcuZGVmYXVsdE9wdGlvbnMoKS5pbmNsdWRlIHNob3VsZCBiZSBhbiBhcnJheS5cIik7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShkZWZhdWx0T3B0aW9ucy5jb3B5KSAhPT0gXCJhcnJheVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJrby5tYXBwaW5nLmRlZmF1bHRPcHRpb25zKCkuY29weSBzaG91bGQgYmUgYW4gYXJyYXkuXCIpO1xuXG5cdFx0Ly8gTWVyZ2UgaW4gdGhlIG9wdGlvbnMgdXNlZCBpbiBmcm9tSlNcblx0XHRvcHRpb25zID0gZmlsbE9wdGlvbnMob3B0aW9ucywgcm9vdE9iamVjdFttYXBwaW5nUHJvcGVydHldKTtcblxuXHRcdC8vIFdlIGp1c3QgdW53cmFwIGV2ZXJ5dGhpbmcgYXQgZXZlcnkgbGV2ZWwgaW4gdGhlIG9iamVjdCBncmFwaFxuXHRcdHJldHVybiBleHBvcnRzLnZpc2l0TW9kZWwocm9vdE9iamVjdCwgZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHgpXG5cdFx0fSwgb3B0aW9ucyk7XG5cdH07XG5cblx0ZXhwb3J0cy50b0pTT04gPSBmdW5jdGlvbiAocm9vdE9iamVjdCwgb3B0aW9ucykge1xuXHRcdHZhciBwbGFpbkphdmFTY3JpcHRPYmplY3QgPSBleHBvcnRzLnRvSlMocm9vdE9iamVjdCwgb3B0aW9ucyk7XG5cdFx0cmV0dXJuIGtvLnV0aWxzLnN0cmluZ2lmeUpzb24ocGxhaW5KYXZhU2NyaXB0T2JqZWN0KTtcblx0fTtcblxuXHRleHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZGVmYXVsdE9wdGlvbnMgPSBhcmd1bWVudHNbMF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkZWZhdWx0T3B0aW9ucztcblx0XHR9XG5cdH07XG5cblx0ZXhwb3J0cy5yZXNldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuXHRcdGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdFx0aW5jbHVkZTogX2RlZmF1bHRPcHRpb25zLmluY2x1ZGUuc2xpY2UoMCksXG5cdFx0XHRpZ25vcmU6IF9kZWZhdWx0T3B0aW9ucy5pZ25vcmUuc2xpY2UoMCksXG5cdFx0XHRjb3B5OiBfZGVmYXVsdE9wdGlvbnMuY29weS5zbGljZSgwKVxuXHRcdH07XG5cdH07XG5cblx0ZXhwb3J0cy5nZXRUeXBlID0gZnVuY3Rpb24oeCkge1xuXHRcdGlmICgoeCkgJiYgKHR5cGVvZiAoeCkgPT09IFwib2JqZWN0XCIpKSB7XG5cdFx0XHRpZiAoeC5jb25zdHJ1Y3RvciA9PSAobmV3IERhdGUpLmNvbnN0cnVjdG9yKSByZXR1cm4gXCJkYXRlXCI7XG5cdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgQXJyYXldXCIpIHJldHVybiBcImFycmF5XCI7XG5cdFx0fVxuXHRcdHJldHVybiB0eXBlb2YgeDtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpbGxPcHRpb25zKHJhd09wdGlvbnMsIG90aGVyT3B0aW9ucykge1xuXHRcdHZhciBvcHRpb25zID0gbWVyZ2Uoe30sIHJhd09wdGlvbnMpO1xuXG5cdFx0Ly8gTW92ZSByZWNvZ25pemVkIHJvb3QtbGV2ZWwgcHJvcGVydGllcyBpbnRvIGEgcm9vdCBuYW1lc3BhY2Vcblx0XHRmb3IgKHZhciBpID0gcmVjb2duaXplZFJvb3RQcm9wZXJ0aWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHR2YXIgcHJvcGVydHkgPSByZWNvZ25pemVkUm9vdFByb3BlcnRpZXNbaV07XG5cdFx0XHRcblx0XHRcdC8vIENhcnJ5IG9uLCB1bmxlc3MgdGhpcyBwcm9wZXJ0eSBpcyBwcmVzZW50XG5cdFx0XHRpZiAoIW9wdGlvbnNbcHJvcGVydHldKSBjb250aW51ZTtcblx0XHRcdFxuXHRcdFx0Ly8gTW92ZSB0aGUgcHJvcGVydHkgaW50byB0aGUgcm9vdCBuYW1lc3BhY2Vcblx0XHRcdGlmICghKG9wdGlvbnNbXCJcIl0gaW5zdGFuY2VvZiBPYmplY3QpKSBvcHRpb25zW1wiXCJdID0ge307XG5cdFx0XHRvcHRpb25zW1wiXCJdW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xuXHRcdFx0ZGVsZXRlIG9wdGlvbnNbcHJvcGVydHldO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlck9wdGlvbnMpIHtcblx0XHRcdG9wdGlvbnMuaWdub3JlID0gbWVyZ2VBcnJheXMob3RoZXJPcHRpb25zLmlnbm9yZSwgb3B0aW9ucy5pZ25vcmUpO1xuXHRcdFx0b3B0aW9ucy5pbmNsdWRlID0gbWVyZ2VBcnJheXMob3RoZXJPcHRpb25zLmluY2x1ZGUsIG9wdGlvbnMuaW5jbHVkZSk7XG5cdFx0XHRvcHRpb25zLmNvcHkgPSBtZXJnZUFycmF5cyhvdGhlck9wdGlvbnMuY29weSwgb3B0aW9ucy5jb3B5KTtcblx0XHR9XG5cdFx0b3B0aW9ucy5pZ25vcmUgPSBtZXJnZUFycmF5cyhvcHRpb25zLmlnbm9yZSwgZGVmYXVsdE9wdGlvbnMuaWdub3JlKTtcblx0XHRvcHRpb25zLmluY2x1ZGUgPSBtZXJnZUFycmF5cyhvcHRpb25zLmluY2x1ZGUsIGRlZmF1bHRPcHRpb25zLmluY2x1ZGUpO1xuXHRcdG9wdGlvbnMuY29weSA9IG1lcmdlQXJyYXlzKG9wdGlvbnMuY29weSwgZGVmYXVsdE9wdGlvbnMuY29weSk7XG5cblx0XHRvcHRpb25zLm1hcHBlZFByb3BlcnRpZXMgPSBvcHRpb25zLm1hcHBlZFByb3BlcnRpZXMgfHwge307XG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXJnZUFycmF5cyhhLCBiKSB7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShhKSAhPT0gXCJhcnJheVwiKSB7XG5cdFx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGEpID09PSBcInVuZGVmaW5lZFwiKSBhID0gW107XG5cdFx0XHRlbHNlIGEgPSBbYV07XG5cdFx0fVxuXHRcdGlmIChleHBvcnRzLmdldFR5cGUoYikgIT09IFwiYXJyYXlcIikge1xuXHRcdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShiKSA9PT0gXCJ1bmRlZmluZWRcIikgYiA9IFtdO1xuXHRcdFx0ZWxzZSBiID0gW2JdO1xuXHRcdH1cblxuXHRcdHJldHVybiBrby51dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzKGEuY29uY2F0KGIpKTtcblx0fVxuXG5cdC8vIFdoZW4gdXNpbmcgYSAnY3JlYXRlJyBjYWxsYmFjaywgd2UgcHJveHkgdGhlIGRlcGVuZGVudCBvYnNlcnZhYmxlIHNvIHRoYXQgaXQgZG9lc24ndCBpbW1lZGlhdGVseSBldmFsdWF0ZSBvbiBjcmVhdGlvbi5cblx0Ly8gVGhlIHJlYXNvbiBpcyB0aGF0IHRoZSBkZXBlbmRlbnQgb2JzZXJ2YWJsZXMgaW4gdGhlIHVzZXItc3BlY2lmaWVkIGNhbGxiYWNrIG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gcHJvcGVydGllcyB0aGF0IGhhdmUgbm90IGJlZW4gbWFwcGVkIHlldC5cblx0ZnVuY3Rpb24gd2l0aFByb3h5RGVwZW5kZW50T2JzZXJ2YWJsZShkZXBlbmRlbnRPYnNlcnZhYmxlcywgY2FsbGJhY2spIHtcblx0XHR2YXIgbG9jYWxETyA9IGtvLmRlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0a28uZGVwZW5kZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChyZWFkLCBvd25lciwgb3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHRcdGlmIChyZWFkICYmIHR5cGVvZiByZWFkID09IFwib2JqZWN0XCIpIHsgLy8gbWlycm9ycyBjb25kaXRpb24gaW4ga25vY2tvdXQgaW1wbGVtZW50YXRpb24gb2YgRE8nc1xuXHRcdFx0XHRvcHRpb25zID0gcmVhZDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHJlYWxEZWZlckV2YWx1YXRpb24gPSBvcHRpb25zLmRlZmVyRXZhbHVhdGlvbjtcblxuXHRcdFx0dmFyIGlzUmVtb3ZlZCA9IGZhbHNlO1xuXG5cdFx0XHQvLyBXZSB3cmFwIHRoZSBvcmlnaW5hbCBkZXBlbmRlbnQgb2JzZXJ2YWJsZSBzbyB0aGF0IHdlIGNhbiByZW1vdmUgaXQgZnJvbSB0aGUgJ2RlcGVuZGVudE9ic2VydmFibGVzJyBsaXN0IHdlIG5lZWQgdG8gZXZhbHVhdGUgYWZ0ZXIgbWFwcGluZyBoYXNcblx0XHRcdC8vIGNvbXBsZXRlZCBpZiB0aGUgdXNlciBhbHJlYWR5IGV2YWx1YXRlZCB0aGUgRE8gdGhlbXNlbHZlcyBpbiB0aGUgbWVhbnRpbWUuXG5cdFx0XHR2YXIgd3JhcCA9IGZ1bmN0aW9uIChETykge1xuXHRcdFx0XHQvLyBUZW1wb3JhcmlseSByZXZlcnQga28uZGVwZW5kZW50T2JzZXJ2YWJsZSwgc2luY2UgaXQgaXMgdXNlZCBpbiBrby5pc1dyaXRlYWJsZU9ic2VydmFibGVcblx0XHRcdFx0dmFyIHRtcCA9IGtvLmRlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0XHRcdGtvLmRlcGVuZGVudE9ic2VydmFibGUgPSByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlO1xuXHRcdFx0XHR2YXIgaXNXcml0ZWFibGUgPSBrby5pc1dyaXRlYWJsZU9ic2VydmFibGUoRE8pO1xuXHRcdFx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gdG1wO1xuXG5cdFx0XHRcdHZhciB3cmFwcGVkID0gcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZSh7XG5cdFx0XHRcdFx0cmVhZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKCFpc1JlbW92ZWQpIHtcblx0XHRcdFx0XHRcdFx0a28udXRpbHMuYXJyYXlSZW1vdmVJdGVtKGRlcGVuZGVudE9ic2VydmFibGVzLCBETyk7XG5cdFx0XHRcdFx0XHRcdGlzUmVtb3ZlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gRE8uYXBwbHkoRE8sIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR3cml0ZTogaXNXcml0ZWFibGUgJiYgZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIERPKHZhbCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkZWZlckV2YWx1YXRpb246IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChERUJVRykgd3JhcHBlZC5fd3JhcHBlciA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB3cmFwcGVkO1xuXHRcdFx0fTtcblx0XHRcdFxuXHRcdFx0b3B0aW9ucy5kZWZlckV2YWx1YXRpb24gPSB0cnVlOyAvLyB3aWxsIGVpdGhlciBzZXQgZm9yIGp1c3Qgb3B0aW9ucywgb3IgYm90aCByZWFkL29wdGlvbnMuXG5cdFx0XHR2YXIgcmVhbERlcGVuZGVudE9ic2VydmFibGUgPSBuZXcgcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZShyZWFkLCBvd25lciwgb3B0aW9ucyk7XG5cblx0XHRcdGlmICghcmVhbERlZmVyRXZhbHVhdGlvbikge1xuXHRcdFx0XHRyZWFsRGVwZW5kZW50T2JzZXJ2YWJsZSA9IHdyYXAocmVhbERlcGVuZGVudE9ic2VydmFibGUpO1xuXHRcdFx0XHRkZXBlbmRlbnRPYnNlcnZhYmxlcy5wdXNoKHJlYWxEZXBlbmRlbnRPYnNlcnZhYmxlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlYWxEZXBlbmRlbnRPYnNlcnZhYmxlO1xuXHRcdH1cblx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlLmZuID0gcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZS5mbjtcblx0XHRrby5jb21wdXRlZCA9IGtvLmRlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0dmFyIHJlc3VsdCA9IGNhbGxiYWNrKCk7XG5cdFx0a28uZGVwZW5kZW50T2JzZXJ2YWJsZSA9IGxvY2FsRE87XG5cdFx0a28uY29tcHV0ZWQgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVWaWV3TW9kZWwobWFwcGVkUm9vdE9iamVjdCwgcm9vdE9iamVjdCwgb3B0aW9ucywgcGFyZW50TmFtZSwgcGFyZW50LCBwYXJlbnRQcm9wZXJ0eU5hbWUsIG1hcHBlZFBhcmVudCkge1xuXHRcdHZhciBpc0FycmF5ID0gZXhwb3J0cy5nZXRUeXBlKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCkpID09PSBcImFycmF5XCI7XG5cblx0XHRwYXJlbnRQcm9wZXJ0eU5hbWUgPSBwYXJlbnRQcm9wZXJ0eU5hbWUgfHwgXCJcIjtcblxuXHRcdC8vIElmIHRoaXMgb2JqZWN0IHdhcyBhbHJlYWR5IG1hcHBlZCBwcmV2aW91c2x5LCB0YWtlIHRoZSBvcHRpb25zIGZyb20gdGhlcmUgYW5kIG1lcmdlIHRoZW0gd2l0aCBvdXIgZXhpc3Rpbmcgb25lcy5cblx0XHRpZiAoZXhwb3J0cy5pc01hcHBlZChtYXBwZWRSb290T2JqZWN0KSkge1xuXHRcdFx0dmFyIHByZXZpb3VzTWFwcGluZyA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdClbbWFwcGluZ1Byb3BlcnR5XTtcblx0XHRcdG9wdGlvbnMgPSBtZXJnZShwcmV2aW91c01hcHBpbmcsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdHZhciBjYWxsYmFja1BhcmFtcyA9IHtcblx0XHRcdGRhdGE6IHJvb3RPYmplY3QsXG5cdFx0XHRwYXJlbnQ6IG1hcHBlZFBhcmVudFxuXHRcdH07XG5cblx0XHR2YXIgaGFzQ3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9uc1twYXJlbnROYW1lXSAmJiBvcHRpb25zW3BhcmVudE5hbWVdLmNyZWF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuXHRcdH07XG5cblx0XHR2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0cmV0dXJuIHdpdGhQcm94eURlcGVuZGVudE9ic2VydmFibGUoZGVwZW5kZW50T2JzZXJ2YWJsZXMsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHBhcmVudCkgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiBvcHRpb25zW3BhcmVudE5hbWVdLmNyZWF0ZSh7XG5cdFx0XHRcdFx0XHRkYXRhOiBkYXRhIHx8IGNhbGxiYWNrUGFyYW1zLmRhdGEsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6IGNhbGxiYWNrUGFyYW1zLnBhcmVudCxcblx0XHRcdFx0XHRcdHNraXA6IGVtcHR5UmV0dXJuXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0uY3JlYXRlKHtcblx0XHRcdFx0XHRcdGRhdGE6IGRhdGEgfHwgY2FsbGJhY2tQYXJhbXMuZGF0YSxcblx0XHRcdFx0XHRcdHBhcmVudDogY2FsbGJhY2tQYXJhbXMucGFyZW50XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBoYXNVcGRhdGVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvcHRpb25zW3BhcmVudE5hbWVdICYmIG9wdGlvbnNbcGFyZW50TmFtZV0udXBkYXRlIGluc3RhbmNlb2YgRnVuY3Rpb247XG5cdFx0fTtcblxuXHRcdHZhciB1cGRhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIChvYmosIGRhdGEpIHtcblx0XHRcdHZhciBwYXJhbXMgPSB7XG5cdFx0XHRcdGRhdGE6IGRhdGEgfHwgY2FsbGJhY2tQYXJhbXMuZGF0YSxcblx0XHRcdFx0cGFyZW50OiBjYWxsYmFja1BhcmFtcy5wYXJlbnQsXG5cdFx0XHRcdHRhcmdldDoga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShvYmopXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKG9iaikpIHtcblx0XHRcdFx0cGFyYW1zLm9ic2VydmFibGUgPSBvYmo7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvcHRpb25zW3BhcmVudE5hbWVdLnVwZGF0ZShwYXJhbXMpO1xuXHRcdH1cblxuXHRcdHZhciBhbHJlYWR5TWFwcGVkID0gdmlzaXRlZE9iamVjdHMuZ2V0KHJvb3RPYmplY3QpO1xuXHRcdGlmIChhbHJlYWR5TWFwcGVkKSB7XG5cdFx0XHRyZXR1cm4gYWxyZWFkeU1hcHBlZDtcblx0XHR9XG5cblx0XHRwYXJlbnROYW1lID0gcGFyZW50TmFtZSB8fCBcIlwiO1xuXG5cdFx0aWYgKCFpc0FycmF5KSB7XG5cdFx0XHQvLyBGb3IgYXRvbWljIHR5cGVzLCBkbyBhIGRpcmVjdCB1cGRhdGUgb24gdGhlIG9ic2VydmFibGVcblx0XHRcdGlmICghY2FuSGF2ZVByb3BlcnRpZXMocm9vdE9iamVjdCkpIHtcblx0XHRcdFx0c3dpdGNoIChleHBvcnRzLmdldFR5cGUocm9vdE9iamVjdCkpIHtcblx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUocm9vdE9iamVjdCkpIHtcblx0XHRcdFx0XHRcdFx0cm9vdE9iamVjdCh1cGRhdGVDYWxsYmFjayhyb290T2JqZWN0KSk7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSByb290T2JqZWN0O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHVwZGF0ZUNhbGxiYWNrKHJvb3RPYmplY3QpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0gcm9vdE9iamVjdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KSkge1xuXHRcdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHZhbHVlVG9Xcml0ZSA9IHVwZGF0ZUNhbGxiYWNrKG1hcHBlZFJvb3RPYmplY3QpO1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0KHZhbHVlVG9Xcml0ZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVRvV3JpdGU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgdmFsdWVUb1dyaXRlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KTtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCh2YWx1ZVRvV3JpdGUpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVUb1dyaXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzQ3JlYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0gY3JlYXRlQ2FsbGJhY2soKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0ga28ub2JzZXJ2YWJsZShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QodXBkYXRlQ2FsbGJhY2sobWFwcGVkUm9vdE9iamVjdCkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdCk7XG5cdFx0XHRcdGlmICghbWFwcGVkUm9vdE9iamVjdCkge1xuXHRcdFx0XHRcdGlmIChoYXNDcmVhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gY3JlYXRlQ2FsbGJhY2soKTtcblxuXHRcdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gdXBkYXRlQ2FsbGJhY2socmVzdWx0KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZUNhbGxiYWNrKHJlc3VsdCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSB1cGRhdGVDYWxsYmFjayhtYXBwZWRSb290T2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZpc2l0ZWRPYmplY3RzLnNhdmUocm9vdE9iamVjdCwgbWFwcGVkUm9vdE9iamVjdCk7XG5cdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSByZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblxuXHRcdFx0XHQvLyBGb3Igbm9uLWF0b21pYyB0eXBlcywgdmlzaXQgYWxsIHByb3BlcnRpZXMgYW5kIHVwZGF0ZSByZWN1cnNpdmVseVxuXHRcdFx0XHR2aXNpdFByb3BlcnRpZXNPckFycmF5RW50cmllcyhyb290T2JqZWN0LCBmdW5jdGlvbiAoaW5kZXhlcikge1xuXHRcdFx0XHRcdHZhciBmdWxsUHJvcGVydHlOYW1lID0gcGFyZW50UHJvcGVydHlOYW1lLmxlbmd0aCA/IHBhcmVudFByb3BlcnR5TmFtZSArIFwiLlwiICsgaW5kZXhlciA6IGluZGV4ZXI7XG5cblx0XHRcdFx0XHRpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuaWdub3JlLCBmdWxsUHJvcGVydHlOYW1lKSAhPSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5jb3B5LCBmdWxsUHJvcGVydHlOYW1lKSAhPSAtMSkge1xuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IHJvb3RPYmplY3RbaW5kZXhlcl07XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSW4gY2FzZSB3ZSBhcmUgYWRkaW5nIGFuIGFscmVhZHkgbWFwcGVkIHByb3BlcnR5LCBmaWxsIGl0IHdpdGggdGhlIHByZXZpb3VzbHkgbWFwcGVkIHByb3BlcnR5IHZhbHVlIHRvIHByZXZlbnQgcmVjdXJzaW9uLlxuXHRcdFx0XHRcdC8vIElmIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGF0IHdhcyBnZW5lcmF0ZWQgYnkgZnJvbUpTLCB3ZSBzaG91bGQgdXNlIHRoZSBvcHRpb25zIHNwZWNpZmllZCB0aGVyZVxuXHRcdFx0XHRcdHZhciBwcmV2TWFwcGVkUHJvcGVydHkgPSB2aXNpdGVkT2JqZWN0cy5nZXQocm9vdE9iamVjdFtpbmRleGVyXSk7XG5cdFx0XHRcdFx0dmFyIHJldHZhbCA9IHVwZGF0ZVZpZXdNb2RlbChtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdLCByb290T2JqZWN0W2luZGV4ZXJdLCBvcHRpb25zLCBpbmRleGVyLCBtYXBwZWRSb290T2JqZWN0LCBmdWxsUHJvcGVydHlOYW1lLCBtYXBwZWRSb290T2JqZWN0KTtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBwcmV2TWFwcGVkUHJvcGVydHkgfHwgcmV0dmFsO1xuXG5cdFx0XHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdKSkge1xuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvcHRpb25zLm1hcHBlZFByb3BlcnRpZXNbZnVsbFByb3BlcnR5TmFtZV0gPSB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgeyAvL21hcHBlZFJvb3RPYmplY3QgaXMgYW4gYXJyYXlcblx0XHRcdHZhciBjaGFuZ2VzID0gW107XG5cblx0XHRcdHZhciBoYXNLZXlDYWxsYmFjayA9IGZhbHNlO1xuXHRcdFx0dmFyIGtleUNhbGxiYWNrID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0cmV0dXJuIHg7XG5cdFx0XHR9XG5cdFx0XHRpZiAob3B0aW9uc1twYXJlbnROYW1lXSAmJiBvcHRpb25zW3BhcmVudE5hbWVdLmtleSkge1xuXHRcdFx0XHRrZXlDYWxsYmFjayA9IG9wdGlvbnNbcGFyZW50TmFtZV0ua2V5O1xuXHRcdFx0XHRoYXNLZXlDYWxsYmFjayA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgha28uaXNPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3QpKSB7XG5cdFx0XHRcdC8vIFdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvYnNlcnZhYmxlIGFycmF5LCBhbHNvIGFkZCBhIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgJ2tleScgb2YgdGhlIGFycmF5IGl0ZW1zIGludG8gYWNjb3VudC5cblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XG5cblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5tYXBwZWRSZW1vdmUgPSBmdW5jdGlvbiAodmFsdWVPclByZWRpY2F0ZSkge1xuXHRcdFx0XHRcdHZhciBwcmVkaWNhdGUgPSB0eXBlb2YgdmFsdWVPclByZWRpY2F0ZSA9PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZU9yUHJlZGljYXRlIDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0ga2V5Q2FsbGJhY2sodmFsdWVPclByZWRpY2F0ZSk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0LnJlbW92ZShmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWRpY2F0ZShrZXlDYWxsYmFjayhpdGVtKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZFJlbW92ZUFsbCA9IGZ1bmN0aW9uIChhcnJheU9mVmFsdWVzKSB7XG5cdFx0XHRcdFx0dmFyIGFycmF5T2ZLZXlzID0gZmlsdGVyQXJyYXlCeUtleShhcnJheU9mVmFsdWVzLCBrZXlDYWxsYmFjayk7XG5cdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3QucmVtb3ZlKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGFycmF5T2ZLZXlzLCBrZXlDYWxsYmFjayhpdGVtKSkgIT0gLTE7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZERlc3Ryb3kgPSBmdW5jdGlvbiAodmFsdWVPclByZWRpY2F0ZSkge1xuXHRcdFx0XHRcdHZhciBwcmVkaWNhdGUgPSB0eXBlb2YgdmFsdWVPclByZWRpY2F0ZSA9PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZU9yUHJlZGljYXRlIDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0ga2V5Q2FsbGJhY2sodmFsdWVPclByZWRpY2F0ZSk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0LmRlc3Ryb3koZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVkaWNhdGUoa2V5Q2FsbGJhY2soaXRlbSkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5tYXBwZWREZXN0cm95QWxsID0gZnVuY3Rpb24gKGFycmF5T2ZWYWx1ZXMpIHtcblx0XHRcdFx0XHR2YXIgYXJyYXlPZktleXMgPSBmaWx0ZXJBcnJheUJ5S2V5KGFycmF5T2ZWYWx1ZXMsIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdC5kZXN0cm95KGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGFycmF5T2ZLZXlzLCBrZXlDYWxsYmFjayhpdGVtKSkgIT0gLTE7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZEluZGV4T2YgPSBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdHZhciBrZXlzID0gZmlsdGVyQXJyYXlCeUtleShtYXBwZWRSb290T2JqZWN0KCksIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHR2YXIga2V5ID0ga2V5Q2FsbGJhY2soaXRlbSk7XG5cdFx0XHRcdFx0cmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZihrZXlzLCBrZXkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5tYXBwZWRDcmVhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAobWFwcGVkUm9vdE9iamVjdC5tYXBwZWRJbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFscmVhZHkgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGtleSB0aGF0IHlvdSBzcGVjaWZpZWQuXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBpdGVtID0gaGFzQ3JlYXRlQ2FsbGJhY2soKSA/IGNyZWF0ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHR2YXIgbmV3VmFsdWUgPSB1cGRhdGVDYWxsYmFjayhpdGVtLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKGl0ZW0pKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0obmV3VmFsdWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aXRlbSA9IG5ld1ZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0LnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIGN1cnJlbnRBcnJheUtleXMgPSBmaWx0ZXJBcnJheUJ5S2V5KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdCksIGtleUNhbGxiYWNrKS5zb3J0KCk7XG5cdFx0XHR2YXIgbmV3QXJyYXlLZXlzID0gZmlsdGVyQXJyYXlCeUtleShyb290T2JqZWN0LCBrZXlDYWxsYmFjayk7XG5cdFx0XHRpZiAoaGFzS2V5Q2FsbGJhY2spIG5ld0FycmF5S2V5cy5zb3J0KCk7XG5cdFx0XHR2YXIgZWRpdFNjcmlwdCA9IGtvLnV0aWxzLmNvbXBhcmVBcnJheXMoY3VycmVudEFycmF5S2V5cywgbmV3QXJyYXlLZXlzKTtcblxuXHRcdFx0dmFyIGlnbm9yZUluZGV4T2YgPSB7fTtcblx0XHRcdFxuXHRcdFx0dmFyIGksIGo7XG5cblx0XHRcdHZhciB1bndyYXBwZWRSb290T2JqZWN0ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KTtcblx0XHRcdHZhciBpdGVtc0J5S2V5ID0ge307XG5cdFx0XHR2YXIgb3B0aW1pemVkS2V5cyA9IHRydWU7XG5cdFx0XHRmb3IgKGkgPSAwLCBqID0gdW53cmFwcGVkUm9vdE9iamVjdC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHRcdFx0dmFyIGtleSA9IGtleUNhbGxiYWNrKHVud3JhcHBlZFJvb3RPYmplY3RbaV0pO1xuXHRcdFx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5IGluc3RhbmNlb2YgT2JqZWN0KSB7XG5cdFx0XHRcdFx0b3B0aW1pemVkS2V5cyA9IGZhbHNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW1zQnlLZXlba2V5XSA9IHVud3JhcHBlZFJvb3RPYmplY3RbaV07XG5cdFx0XHR9XG5cblx0XHRcdHZhciBuZXdDb250ZW50cyA9IFtdO1xuXHRcdFx0dmFyIHBhc3NlZE92ZXIgPSAwO1xuXHRcdFx0Zm9yIChpID0gMCwgaiA9IGVkaXRTY3JpcHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdFx0XHRcdHZhciBrZXkgPSBlZGl0U2NyaXB0W2ldO1xuXHRcdFx0XHR2YXIgbWFwcGVkSXRlbTtcblx0XHRcdFx0dmFyIGZ1bGxQcm9wZXJ0eU5hbWUgPSBwYXJlbnRQcm9wZXJ0eU5hbWUgKyBcIltcIiArIGkgKyBcIl1cIjtcblx0XHRcdFx0c3dpdGNoIChrZXkuc3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJhZGRlZFwiOlxuXHRcdFx0XHRcdHZhciBpdGVtID0gb3B0aW1pemVkS2V5cyA/IGl0ZW1zQnlLZXlba2V5LnZhbHVlXSA6IGdldEl0ZW1CeUtleShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpLCBrZXkudmFsdWUsIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHRtYXBwZWRJdGVtID0gdXBkYXRlVmlld01vZGVsKHVuZGVmaW5lZCwgaXRlbSwgb3B0aW9ucywgcGFyZW50TmFtZSwgbWFwcGVkUm9vdE9iamVjdCwgZnVsbFByb3BlcnR5TmFtZSwgcGFyZW50KTtcblx0XHRcdFx0XHRpZighaGFzQ3JlYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0bWFwcGVkSXRlbSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWFwcGVkSXRlbSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gaWdub3JhYmxlSW5kZXhPZihrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpLCBpdGVtLCBpZ25vcmVJbmRleE9mKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAobWFwcGVkSXRlbSA9PT0gZW1wdHlSZXR1cm4pIHtcblx0XHRcdFx0XHRcdHBhc3NlZE92ZXIrKztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bmV3Q29udGVudHNbaW5kZXggLSBwYXNzZWRPdmVyXSA9IG1hcHBlZEl0ZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWdub3JlSW5kZXhPZltpbmRleF0gPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmV0YWluZWRcIjpcblx0XHRcdFx0XHR2YXIgaXRlbSA9IG9wdGltaXplZEtleXMgPyBpdGVtc0J5S2V5W2tleS52YWx1ZV0gOiBnZXRJdGVtQnlLZXkoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KSwga2V5LnZhbHVlLCBrZXlDYWxsYmFjayk7XG5cdFx0XHRcdFx0bWFwcGVkSXRlbSA9IGdldEl0ZW1CeUtleShtYXBwZWRSb290T2JqZWN0LCBrZXkudmFsdWUsIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHR1cGRhdGVWaWV3TW9kZWwobWFwcGVkSXRlbSwgaXRlbSwgb3B0aW9ucywgcGFyZW50TmFtZSwgbWFwcGVkUm9vdE9iamVjdCwgZnVsbFByb3BlcnR5TmFtZSwgcGFyZW50KTtcblxuXHRcdFx0XHRcdHZhciBpbmRleCA9IGlnbm9yYWJsZUluZGV4T2Yoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KSwgaXRlbSwgaWdub3JlSW5kZXhPZik7XG5cdFx0XHRcdFx0bmV3Q29udGVudHNbaW5kZXhdID0gbWFwcGVkSXRlbTtcblx0XHRcdFx0XHRpZ25vcmVJbmRleE9mW2luZGV4XSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWxldGVkXCI6XG5cdFx0XHRcdFx0bWFwcGVkSXRlbSA9IGdldEl0ZW1CeUtleShtYXBwZWRSb290T2JqZWN0LCBrZXkudmFsdWUsIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNoYW5nZXMucHVzaCh7XG5cdFx0XHRcdFx0ZXZlbnQ6IGtleS5zdGF0dXMsXG5cdFx0XHRcdFx0aXRlbTogbWFwcGVkSXRlbVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0bWFwcGVkUm9vdE9iamVjdChuZXdDb250ZW50cyk7XG5cblx0XHRcdGlmIChvcHRpb25zW3BhcmVudE5hbWVdICYmIG9wdGlvbnNbcGFyZW50TmFtZV0uYXJyYXlDaGFuZ2VkKSB7XG5cdFx0XHRcdGtvLnV0aWxzLmFycmF5Rm9yRWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG5cdFx0XHRcdFx0b3B0aW9uc1twYXJlbnROYW1lXS5hcnJheUNoYW5nZWQoY2hhbmdlLmV2ZW50LCBjaGFuZ2UuaXRlbSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaWdub3JhYmxlSW5kZXhPZihhcnJheSwgaXRlbSwgaWdub3JlSW5kaWNlcykge1xuXHRcdGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdFx0XHRpZiAoaWdub3JlSW5kaWNlc1tpXSA9PT0gdHJ1ZSkgY29udGludWU7XG5cdFx0XHRpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIG1hcEtleShpdGVtLCBjYWxsYmFjaykge1xuXHRcdHZhciBtYXBwZWRJdGVtO1xuXHRcdGlmIChjYWxsYmFjaykgbWFwcGVkSXRlbSA9IGNhbGxiYWNrKGl0ZW0pO1xuXHRcdGlmIChleHBvcnRzLmdldFR5cGUobWFwcGVkSXRlbSkgPT09IFwidW5kZWZpbmVkXCIpIG1hcHBlZEl0ZW0gPSBpdGVtO1xuXG5cdFx0cmV0dXJuIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWFwcGVkSXRlbSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRJdGVtQnlLZXkoYXJyYXksIGtleSwgY2FsbGJhY2spIHtcblx0XHRhcnJheSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYXJyYXkpO1xuXHRcdGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGFycmF5W2ldO1xuXHRcdFx0aWYgKG1hcEtleShpdGVtLCBjYWxsYmFjaykgPT09IGtleSkgcmV0dXJuIGl0ZW07XG5cdFx0fVxuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLnVwZGF0ZSosIHRoZSBrZXkgJ1wiICsga2V5ICsgXCInIHdhcyBub3QgZm91bmQhXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZmlsdGVyQXJyYXlCeUtleShhcnJheSwgY2FsbGJhY2spIHtcblx0XHRyZXR1cm4ga28udXRpbHMuYXJyYXlNYXAoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhcnJheSksIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0cmV0dXJuIG1hcEtleShpdGVtLCBjYWxsYmFjayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIHZpc2l0b3JDYWxsYmFjaykge1xuXHRcdGlmIChleHBvcnRzLmdldFR5cGUocm9vdE9iamVjdCkgPT09IFwiYXJyYXlcIikge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb290T2JqZWN0Lmxlbmd0aDsgaSsrKVxuXHRcdFx0dmlzaXRvckNhbGxiYWNrKGkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcm9vdE9iamVjdClcblx0XHRcdHZpc2l0b3JDYWxsYmFjayhwcm9wZXJ0eU5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRmdW5jdGlvbiBjYW5IYXZlUHJvcGVydGllcyhvYmplY3QpIHtcblx0XHR2YXIgdHlwZSA9IGV4cG9ydHMuZ2V0VHlwZShvYmplY3QpO1xuXHRcdHJldHVybiAoKHR5cGUgPT09IFwib2JqZWN0XCIpIHx8ICh0eXBlID09PSBcImFycmF5XCIpKSAmJiAob2JqZWN0ICE9PSBudWxsKTtcblx0fVxuXG5cdC8vIEJhc2VkIG9uIHRoZSBwYXJlbnROYW1lLCB0aGlzIGNyZWF0ZXMgYSBmdWxseSBjbGFzc2lmaWVkIG5hbWUgb2YgYSBwcm9wZXJ0eVxuXG5cdGZ1bmN0aW9uIGdldFByb3BlcnR5TmFtZShwYXJlbnROYW1lLCBwYXJlbnQsIGluZGV4ZXIpIHtcblx0XHR2YXIgcHJvcGVydHlOYW1lID0gcGFyZW50TmFtZSB8fCBcIlwiO1xuXHRcdGlmIChleHBvcnRzLmdldFR5cGUocGFyZW50KSA9PT0gXCJhcnJheVwiKSB7XG5cdFx0XHRpZiAocGFyZW50TmFtZSkge1xuXHRcdFx0XHRwcm9wZXJ0eU5hbWUgKz0gXCJbXCIgKyBpbmRleGVyICsgXCJdXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwYXJlbnROYW1lKSB7XG5cdFx0XHRcdHByb3BlcnR5TmFtZSArPSBcIi5cIjtcblx0XHRcdH1cblx0XHRcdHByb3BlcnR5TmFtZSArPSBpbmRleGVyO1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcGVydHlOYW1lO1xuXHR9XG5cblx0ZXhwb3J0cy52aXNpdE1vZGVsID0gZnVuY3Rpb24gKHJvb3RPYmplY3QsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0b3B0aW9ucy52aXNpdGVkT2JqZWN0cyA9IG9wdGlvbnMudmlzaXRlZE9iamVjdHMgfHwgbmV3IG9iamVjdExvb2t1cCgpO1xuXG5cdFx0dmFyIG1hcHBlZFJvb3RPYmplY3Q7XG5cdFx0dmFyIHVud3JhcHBlZFJvb3RPYmplY3QgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpO1xuXG5cdFx0aWYgKCFjYW5IYXZlUHJvcGVydGllcyh1bndyYXBwZWRSb290T2JqZWN0KSkge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKHJvb3RPYmplY3QsIG9wdGlvbnMucGFyZW50TmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdGlvbnMgPSBmaWxsT3B0aW9ucyhvcHRpb25zLCB1bndyYXBwZWRSb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0pO1xuXG5cdFx0XHQvLyBPbmx5IGRvIGEgY2FsbGJhY2ssIGJ1dCBpZ25vcmUgdGhlIHJlc3VsdHNcblx0XHRcdGNhbGxiYWNrKHJvb3RPYmplY3QsIG9wdGlvbnMucGFyZW50TmFtZSk7XG5cdFx0XHRtYXBwZWRSb290T2JqZWN0ID0gZXhwb3J0cy5nZXRUeXBlKHVud3JhcHBlZFJvb3RPYmplY3QpID09PSBcImFycmF5XCIgPyBbXSA6IHt9O1xuXHRcdH1cblxuXHRcdG9wdGlvbnMudmlzaXRlZE9iamVjdHMuc2F2ZShyb290T2JqZWN0LCBtYXBwZWRSb290T2JqZWN0KTtcblxuXHRcdHZhciBwYXJlbnROYW1lID0gb3B0aW9ucy5wYXJlbnROYW1lO1xuXHRcdHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHVud3JhcHBlZFJvb3RPYmplY3QsIGZ1bmN0aW9uIChpbmRleGVyKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5pZ25vcmUgJiYga28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuaWdub3JlLCBpbmRleGVyKSAhPSAtMSkgcmV0dXJuO1xuXG5cdFx0XHR2YXIgcHJvcGVydHlWYWx1ZSA9IHVud3JhcHBlZFJvb3RPYmplY3RbaW5kZXhlcl07XG5cdFx0XHRvcHRpb25zLnBhcmVudE5hbWUgPSBnZXRQcm9wZXJ0eU5hbWUocGFyZW50TmFtZSwgdW53cmFwcGVkUm9vdE9iamVjdCwgaW5kZXhlcik7XG5cblx0XHRcdC8vIElmIHdlIGRvbid0IHdhbnQgdG8gZXhwbGljaXRseSBjb3B5IHRoZSB1bm1hcHBlZCBwcm9wZXJ0eS4uLlxuXHRcdFx0aWYgKGtvLnV0aWxzLmFycmF5SW5kZXhPZihvcHRpb25zLmNvcHksIGluZGV4ZXIpID09PSAtMSkge1xuXHRcdFx0XHQvLyAuLi5maW5kIG91dCBpZiBpdCdzIGEgcHJvcGVydHkgd2Ugd2FudCB0byBleHBsaWNpdGx5IGluY2x1ZGVcblx0XHRcdFx0aWYgKGtvLnV0aWxzLmFycmF5SW5kZXhPZihvcHRpb25zLmluY2x1ZGUsIGluZGV4ZXIpID09PSAtMSkge1xuXHRcdFx0XHRcdC8vIFRoZSBtYXBwZWQgcHJvcGVydGllcyBvYmplY3QgY29udGFpbnMgYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXJ0IG9mIHRoZSBvcmlnaW5hbCBvYmplY3QuXG5cdFx0XHRcdFx0Ly8gSWYgYSBwcm9wZXJ0eSBkb2VzIG5vdCBleGlzdCwgYW5kIGl0IGlzIG5vdCBiZWNhdXNlIGl0IGlzIHBhcnQgb2YgYW4gYXJyYXkgKGUuZy4gXCJteVByb3BbM11cIiksIHRoZW4gaXQgc2hvdWxkIG5vdCBiZSB1bm1hcHBlZC5cblx0XHRcdFx0XHRpZiAodW53cmFwcGVkUm9vdE9iamVjdFttYXBwaW5nUHJvcGVydHldICYmIHVud3JhcHBlZFJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XS5tYXBwZWRQcm9wZXJ0aWVzICYmICF1bndyYXBwZWRSb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0ubWFwcGVkUHJvcGVydGllc1tpbmRleGVyXSAmJiAhKGV4cG9ydHMuZ2V0VHlwZSh1bndyYXBwZWRSb290T2JqZWN0KSA9PT0gXCJhcnJheVwiKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb3V0cHV0UHJvcGVydHk7XG5cdFx0XHRzd2l0Y2ggKGV4cG9ydHMuZ2V0VHlwZShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHByb3BlcnR5VmFsdWUpKSkge1xuXHRcdFx0Y2FzZSBcIm9iamVjdFwiOlxuXHRcdFx0Y2FzZSBcImFycmF5XCI6XG5cdFx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XG5cdFx0XHRcdHZhciBwcmV2aW91c2x5TWFwcGVkVmFsdWUgPSBvcHRpb25zLnZpc2l0ZWRPYmplY3RzLmdldChwcm9wZXJ0eVZhbHVlKTtcblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IChleHBvcnRzLmdldFR5cGUocHJldmlvdXNseU1hcHBlZFZhbHVlKSAhPT0gXCJ1bmRlZmluZWRcIikgPyBwcmV2aW91c2x5TWFwcGVkVmFsdWUgOiBleHBvcnRzLnZpc2l0TW9kZWwocHJvcGVydHlWYWx1ZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0gPSBjYWxsYmFjayhwcm9wZXJ0eVZhbHVlLCBvcHRpb25zLnBhcmVudE5hbWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XG5cdH1cblxuXHRmdW5jdGlvbiBzaW1wbGVPYmplY3RMb29rdXAoKSB7XG5cdFx0dmFyIGtleXMgPSBbXTtcblx0XHR2YXIgdmFsdWVzID0gW107XG5cdFx0dGhpcy5zYXZlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdHZhciBleGlzdGluZ0luZGV4ID0ga28udXRpbHMuYXJyYXlJbmRleE9mKGtleXMsIGtleSk7XG5cdFx0XHRpZiAoZXhpc3RpbmdJbmRleCA+PSAwKSB2YWx1ZXNbZXhpc3RpbmdJbmRleF0gPSB2YWx1ZTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHRcdFx0dmFsdWVzLnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0dGhpcy5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHR2YXIgZXhpc3RpbmdJbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihrZXlzLCBrZXkpO1xuXHRcdFx0dmFyIHZhbHVlID0gKGV4aXN0aW5nSW5kZXggPj0gMCkgPyB2YWx1ZXNbZXhpc3RpbmdJbmRleF0gOiB1bmRlZmluZWQ7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fTtcblx0fTtcblx0XG5cdGZ1bmN0aW9uIG9iamVjdExvb2t1cCgpIHtcblx0XHR2YXIgYnVja2V0cyA9IHt9O1xuXHRcdFxuXHRcdHZhciBmaW5kQnVja2V0ID0gZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHR2YXIgYnVja2V0S2V5O1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YnVja2V0S2V5ID0ga2V5Oy8vSlNPTi5zdHJpbmdpZnkoa2V5KTtcblx0XHRcdH1cblx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdGJ1Y2tldEtleSA9IFwiJCQkXCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBidWNrZXQgPSBidWNrZXRzW2J1Y2tldEtleV07XG5cdFx0XHRpZiAoYnVja2V0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVja2V0ID0gbmV3IHNpbXBsZU9iamVjdExvb2t1cCgpO1xuXHRcdFx0XHRidWNrZXRzW2J1Y2tldEtleV0gPSBidWNrZXQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYnVja2V0O1xuXHRcdH07XG5cdFx0XG5cdFx0dGhpcy5zYXZlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGZpbmRCdWNrZXQoa2V5KS5zYXZlKGtleSwgdmFsdWUpO1xuXHRcdH07XG5cdFx0dGhpcy5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gZmluZEJ1Y2tldChrZXkpLmdldChrZXkpO1xuXHRcdH07XG5cdH07XG59KSk7XG59KSgpIiwiLy8gS25vY2tvdXQgSmF2YVNjcmlwdCBsaWJyYXJ5IHYyLjEuMFxuLy8gKGMpIFN0ZXZlbiBTYW5kZXJzb24gLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4vLyBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuXG4oZnVuY3Rpb24od2luZG93LGRvY3VtZW50LG5hdmlnYXRvcix1bmRlZmluZWQpe1xuZnVuY3Rpb24gbSh3KXt0aHJvdyB3O312YXIgbj12b2lkIDAscD0hMCxzPW51bGwsdD0hMTtmdW5jdGlvbiBBKHcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB3fX07ZnVuY3Rpb24gRSh3KXtmdW5jdGlvbiBCKGIsYyxkKXtkJiZjIT09YS5rLnIoYikmJmEuay5TKGIsYyk7YyE9PWEuay5yKGIpJiZhLmEudmEoYixcImNoYW5nZVwiKX12YXIgYT1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHc/dzp7fTthLmI9ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9Yi5zcGxpdChcIi5cIiksZj1hLGc9MDtnPGQubGVuZ3RoLTE7ZysrKWY9ZltkW2ddXTtmW2RbZC5sZW5ndGgtMV1dPWN9O2EuQj1mdW5jdGlvbihhLGMsZCl7YVtjXT1kfTthLnZlcnNpb249XCIyLjEuMFwiO2EuYihcInZlcnNpb25cIixhLnZlcnNpb24pO2EuYT1uZXcgZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyl7aWYoXCJpbnB1dFwiIT09YS5hLm8oYil8fCFiLnR5cGV8fFwiY2xpY2tcIiE9Yy50b0xvd2VyQ2FzZSgpKXJldHVybiB0O3ZhciBlPWIudHlwZTtyZXR1cm5cImNoZWNrYm94XCI9PWV8fFwicmFkaW9cIj09ZX12YXIgYz0vXihcXHN8XFx1MDBBMCkrfChcXHN8XFx1MDBBMCkrJC9nLGQ9e30sZj17fTtkWy9GaXJlZm94XFwvMi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk/XG5cIktleWJvYXJkRXZlbnRcIjpcIlVJRXZlbnRzXCJdPVtcImtleXVwXCIsXCJrZXlkb3duXCIsXCJrZXlwcmVzc1wiXTtkLk1vdXNlRXZlbnRzPVwiY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIi5zcGxpdChcIiBcIik7Zm9yKHZhciBnIGluIGQpe3ZhciBlPWRbZ107aWYoZS5sZW5ndGgpZm9yKHZhciBoPTAsaj1lLmxlbmd0aDtoPGo7aCsrKWZbZVtoXV09Z312YXIgaz17cHJvcGVydHljaGFuZ2U6cH0saT1mdW5jdGlvbigpe2Zvcih2YXIgYT0zLGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpXCIpO2IuaW5uZXJIVE1MPVwiPFxcIS0tW2lmIGd0IElFIFwiKyArK2ErXCJdPjxpPjwvaT48IVtlbmRpZl0tLVxcPlwiLGNbMF07KTtyZXR1cm4gNDxhP2E6bn0oKTtyZXR1cm57Q2E6W1wiYXV0aGVudGljaXR5X3Rva2VuXCIsL15fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbihfLiopPyQvXSxcbnY6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxlPWEubGVuZ3RoO2M8ZTtjKyspYihhW2NdKX0sajpmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mKXJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGEsYik7Zm9yKHZhciBjPTAsZT1hLmxlbmd0aDtjPGU7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxhYjpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBlPTAsZj1hLmxlbmd0aDtlPGY7ZSsrKWlmKGIuY2FsbChjLGFbZV0pKXJldHVybiBhW2VdO3JldHVybiBzfSxiYTpmdW5jdGlvbihiLGMpe3ZhciBlPWEuYS5qKGIsYyk7MDw9ZSYmYi5zcGxpY2UoZSwxKX0semE6ZnVuY3Rpb24oYil7Zm9yKHZhciBiPWJ8fFtdLGM9W10sZT0wLGY9Yi5sZW5ndGg7ZTxmO2UrKykwPmEuYS5qKGMsYltlXSkmJmMucHVzaChiW2VdKTtyZXR1cm4gY30sVDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYT1hfHxbXSxjPVtdLFxuZT0wLGY9YS5sZW5ndGg7ZTxmO2UrKyljLnB1c2goYihhW2VdKSk7cmV0dXJuIGN9LGFhOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBhPWF8fFtdLGM9W10sZT0wLGY9YS5sZW5ndGg7ZTxmO2UrKyliKGFbZV0pJiZjLnB1c2goYVtlXSk7cmV0dXJuIGN9LE46ZnVuY3Rpb24oYSxiKXtpZihiIGluc3RhbmNlb2YgQXJyYXkpYS5wdXNoLmFwcGx5KGEsYik7ZWxzZSBmb3IodmFyIGM9MCxlPWIubGVuZ3RoO2M8ZTtjKyspYS5wdXNoKGJbY10pO3JldHVybiBhfSxleHRlbmQ6ZnVuY3Rpb24oYSxiKXtpZihiKWZvcih2YXIgYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJihhW2NdPWJbY10pO3JldHVybiBhfSxnYTpmdW5jdGlvbihiKXtmb3IoO2IuZmlyc3RDaGlsZDspYS5yZW1vdmVOb2RlKGIuZmlyc3RDaGlsZCl9LEFiOmZ1bmN0aW9uKGIpe2Zvcih2YXIgYj1hLmEuTChiKSxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT0wLGY9Yi5sZW5ndGg7ZTxmO2UrKylhLkYoYltlXSksXG5jLmFwcGVuZENoaWxkKGJbZV0pO3JldHVybiBjfSxYOmZ1bmN0aW9uKGIsYyl7YS5hLmdhKGIpO2lmKGMpZm9yKHZhciBlPTAsZj1jLmxlbmd0aDtlPGY7ZSsrKWIuYXBwZW5kQ2hpbGQoY1tlXSl9LE5hOmZ1bmN0aW9uKGIsYyl7dmFyIGU9Yi5ub2RlVHlwZT9bYl06YjtpZigwPGUubGVuZ3RoKXtmb3IodmFyIGY9ZVswXSxkPWYucGFyZW50Tm9kZSxnPTAsaD1jLmxlbmd0aDtnPGg7ZysrKWQuaW5zZXJ0QmVmb3JlKGNbZ10sZik7Zz0wO2ZvcihoPWUubGVuZ3RoO2c8aDtnKyspYS5yZW1vdmVOb2RlKGVbZ10pfX0sUGE6ZnVuY3Rpb24oYSxiKXswPD1uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIDZcIik/YS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLGIpOmEuc2VsZWN0ZWQ9Yn0sdzpmdW5jdGlvbihhKXtyZXR1cm4oYXx8XCJcIikucmVwbGFjZShjLFwiXCIpfSxJYjpmdW5jdGlvbihiLGMpe2Zvcih2YXIgZT1bXSxmPShifHxcIlwiKS5zcGxpdChjKSxnPTAsZD1mLmxlbmd0aDtnPFxuZDtnKyspe3ZhciBoPWEuYS53KGZbZ10pO1wiXCIhPT1oJiZlLnB1c2goaCl9cmV0dXJuIGV9LEhiOmZ1bmN0aW9uKGEsYil7YT1hfHxcIlwiO3JldHVybiBiLmxlbmd0aD5hLmxlbmd0aD90OmEuc3Vic3RyaW5nKDAsYi5sZW5ndGgpPT09Yn0sZWI6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9XCJyZXR1cm4gKFwiK2ErXCIpXCIsZT0wO2U8YjtlKyspYz1cIndpdGgoc2NbXCIrZStcIl0pIHsgXCIrYytcIiB9IFwiO3JldHVybiBuZXcgRnVuY3Rpb24oXCJzY1wiLGMpfSxrYjpmdW5jdGlvbihhLGIpe2lmKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24pcmV0dXJuIDE2PT0oYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKSYxNik7Zm9yKDthIT1zOyl7aWYoYT09YilyZXR1cm4gcDthPWEucGFyZW50Tm9kZX1yZXR1cm4gdH0sZmE6ZnVuY3Rpb24oYil7cmV0dXJuIGEuYS5rYihiLGIub3duZXJEb2N1bWVudCl9LG86ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LFxubjpmdW5jdGlvbihhLGMsZSl7dmFyIGY9aSYma1tjXTtpZighZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGpRdWVyeSl7aWYoYihhLGMpKXZhciBnPWUsZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY2hlY2tlZDtiJiYodGhpcy5jaGVja2VkPWIuZmIhPT1wKTtnLmNhbGwodGhpcyxhKTt0aGlzLmNoZWNrZWQ9Y307alF1ZXJ5KGEpLmJpbmQoYyxlKX1lbHNlIWYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoYyxlLHQpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmF0dGFjaEV2ZW50P2EuYXR0YWNoRXZlbnQoXCJvblwiK2MsZnVuY3Rpb24oYil7ZS5jYWxsKGEsYil9KTptKEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYWRkRXZlbnRMaXN0ZW5lciBvciBhdHRhY2hFdmVudFwiKSl9LHZhOmZ1bmN0aW9uKGEsYyl7KCFhfHwhYS5ub2RlVHlwZSkmJm0oRXJyb3IoXCJlbGVtZW50IG11c3QgYmUgYSBET00gbm9kZSB3aGVuIGNhbGxpbmcgdHJpZ2dlckV2ZW50XCIpKTtcbmlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkpe3ZhciBlPVtdO2IoYSxjKSYmZS5wdXNoKHtmYjphLmNoZWNrZWR9KTtqUXVlcnkoYSkudHJpZ2dlcihjLGUpfWVsc2VcImZ1bmN0aW9uXCI9PXR5cGVvZiBkb2N1bWVudC5jcmVhdGVFdmVudD9cImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmRpc3BhdGNoRXZlbnQ/KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoZltjXXx8XCJIVE1MRXZlbnRzXCIpLGUuaW5pdEV2ZW50KGMscCxwLHdpbmRvdywwLDAsMCwwLDAsdCx0LHQsdCwwLGEpLGEuZGlzcGF0Y2hFdmVudChlKSk6bShFcnJvcihcIlRoZSBzdXBwbGllZCBlbGVtZW50IGRvZXNuJ3Qgc3VwcG9ydCBkaXNwYXRjaEV2ZW50XCIpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5maXJlRXZlbnQ/KGIoYSxjKSYmKGEuY2hlY2tlZD1hLmNoZWNrZWQhPT1wKSxhLmZpcmVFdmVudChcIm9uXCIrYykpOm0oRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0cmlnZ2VyaW5nIGV2ZW50c1wiKSl9LGQ6ZnVuY3Rpb24oYil7cmV0dXJuIGEubGEoYik/XG5iKCk6Yn0sVWE6ZnVuY3Rpb24oYixjLGUpe3ZhciBmPShiLmNsYXNzTmFtZXx8XCJcIikuc3BsaXQoL1xccysvKSxnPTA8PWEuYS5qKGYsYyk7aWYoZSYmIWcpYi5jbGFzc05hbWUrPShmWzBdP1wiIFwiOlwiXCIpK2M7ZWxzZSBpZihnJiYhZSl7ZT1cIlwiO2ZvcihnPTA7ZzxmLmxlbmd0aDtnKyspZltnXSE9YyYmKGUrPWZbZ10rXCIgXCIpO2IuY2xhc3NOYW1lPWEuYS53KGUpfX0sUWE6ZnVuY3Rpb24oYixjKXt2YXIgZT1hLmEuZChjKTtpZihlPT09c3x8ZT09PW4pZT1cIlwiO1wiaW5uZXJUZXh0XCJpbiBiP2IuaW5uZXJUZXh0PWU6Yi50ZXh0Q29udGVudD1lOzk8PWkmJihiLnN0eWxlLmRpc3BsYXk9Yi5zdHlsZS5kaXNwbGF5KX0sbGI6ZnVuY3Rpb24oYSl7aWYoOTw9aSl7dmFyIGI9YS5zdHlsZS53aWR0aDthLnN0eWxlLndpZHRoPTA7YS5zdHlsZS53aWR0aD1ifX0sRWI6ZnVuY3Rpb24oYixlKXtmb3IodmFyIGI9YS5hLmQoYiksZT1hLmEuZChlKSxjPVtdLGY9YjtmPD1lO2YrKyljLnB1c2goZik7cmV0dXJuIGN9LFxuTDpmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sZT0wLGM9YS5sZW5ndGg7ZTxjO2UrKyliLnB1c2goYVtlXSk7cmV0dXJuIGJ9LHRiOjY9PT1pLHViOjc9PT1pLGphOmksRGE6ZnVuY3Rpb24oYixlKXtmb3IodmFyIGM9YS5hLkwoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpKS5jb25jYXQoYS5hLkwoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRleHRhcmVhXCIpKSksZj1cInN0cmluZ1wiPT10eXBlb2YgZT9mdW5jdGlvbihhKXtyZXR1cm4gYS5uYW1lPT09ZX06ZnVuY3Rpb24oYSl7cmV0dXJuIGUudGVzdChhLm5hbWUpfSxnPVtdLGQ9Yy5sZW5ndGgtMTswPD1kO2QtLSlmKGNbZF0pJiZnLnB1c2goY1tkXSk7cmV0dXJuIGd9LEJiOmZ1bmN0aW9uKGIpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYj1hLmEudyhiKSk/d2luZG93LkpTT04mJndpbmRvdy5KU09OLnBhcnNlP3dpbmRvdy5KU09OLnBhcnNlKGIpOihuZXcgRnVuY3Rpb24oXCJyZXR1cm4gXCIrYikpKCk6c30sc2E6ZnVuY3Rpb24oYixcbmUsYyl7KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBKU09OfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgSlNPTi5zdHJpbmdpZnkpJiZtKEVycm9yKFwiQ2Fubm90IGZpbmQgSlNPTi5zdHJpbmdpZnkoKS4gU29tZSBicm93c2VycyAoZS5nLiwgSUUgPCA4KSBkb24ndCBzdXBwb3J0IGl0IG5hdGl2ZWx5LCBidXQgeW91IGNhbiBvdmVyY29tZSB0aGlzIGJ5IGFkZGluZyBhIHNjcmlwdCByZWZlcmVuY2UgdG8ganNvbjIuanMsIGRvd25sb2FkYWJsZSBmcm9tIGh0dHA6Ly93d3cuanNvbi5vcmcvanNvbjIuanNcIikpO3JldHVybiBKU09OLnN0cmluZ2lmeShhLmEuZChiKSxlLGMpfSxDYjpmdW5jdGlvbihiLGUsYyl7dmFyIGM9Y3x8e30sZj1jLnBhcmFtc3x8e30sZz1jLmluY2x1ZGVGaWVsZHN8fHRoaXMuQ2EsZD1iO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiJiZcImZvcm1cIj09PWEuYS5vKGIpKWZvcih2YXIgZD1iLmFjdGlvbixoPWcubGVuZ3RoLTE7MDw9aDtoLS0pZm9yKHZhciBrPWEuYS5EYShiLGdbaF0pLFxuaj1rLmxlbmd0aC0xOzA8PWo7ai0tKWZba1tqXS5uYW1lXT1rW2pdLnZhbHVlO3ZhciBlPWEuYS5kKGUpLGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7aS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2kuYWN0aW9uPWQ7aS5tZXRob2Q9XCJwb3N0XCI7Zm9yKHZhciB6IGluIGUpYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYi5uYW1lPXosYi52YWx1ZT1hLmEuc2EoYS5hLmQoZVt6XSkpLGkuYXBwZW5kQ2hpbGQoYik7Zm9yKHogaW4gZiliPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiLm5hbWU9eixiLnZhbHVlPWZbel0saS5hcHBlbmRDaGlsZChiKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGkpO2Muc3VibWl0dGVyP2Muc3VibWl0dGVyKGkpOmkuc3VibWl0KCk7c2V0VGltZW91dChmdW5jdGlvbigpe2kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKX0sMCl9fX07YS5iKFwidXRpbHNcIixhLmEpO2EuYihcInV0aWxzLmFycmF5Rm9yRWFjaFwiLGEuYS52KTtcbmEuYihcInV0aWxzLmFycmF5Rmlyc3RcIixhLmEuYWIpO2EuYihcInV0aWxzLmFycmF5RmlsdGVyXCIsYS5hLmFhKTthLmIoXCJ1dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzXCIsYS5hLnphKTthLmIoXCJ1dGlscy5hcnJheUluZGV4T2ZcIixhLmEuaik7YS5iKFwidXRpbHMuYXJyYXlNYXBcIixhLmEuVCk7YS5iKFwidXRpbHMuYXJyYXlQdXNoQWxsXCIsYS5hLk4pO2EuYihcInV0aWxzLmFycmF5UmVtb3ZlSXRlbVwiLGEuYS5iYSk7YS5iKFwidXRpbHMuZXh0ZW5kXCIsYS5hLmV4dGVuZCk7YS5iKFwidXRpbHMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3RcIixhLmEuQ2EpO2EuYihcInV0aWxzLmdldEZvcm1GaWVsZHNcIixhLmEuRGEpO2EuYihcInV0aWxzLnBvc3RKc29uXCIsYS5hLkNiKTthLmIoXCJ1dGlscy5wYXJzZUpzb25cIixhLmEuQmIpO2EuYihcInV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyXCIsYS5hLm4pO2EuYihcInV0aWxzLnN0cmluZ2lmeUpzb25cIixhLmEuc2EpO2EuYihcInV0aWxzLnJhbmdlXCIsYS5hLkViKTtcbmEuYihcInV0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzc1wiLGEuYS5VYSk7YS5iKFwidXRpbHMudHJpZ2dlckV2ZW50XCIsYS5hLnZhKTthLmIoXCJ1dGlscy51bndyYXBPYnNlcnZhYmxlXCIsYS5hLmQpO0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kfHwoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksYT1kLnNoaWZ0KCk7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGMuYXBwbHkoYSxkLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSl9fSk7YS5hLmY9bmV3IGZ1bmN0aW9uKCl7dmFyIGI9MCxjPVwiX19rb19fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZD17fTtyZXR1cm57Z2V0OmZ1bmN0aW9uKGIsYyl7dmFyIGU9YS5hLmYuZ2V0QWxsKGIsdCk7cmV0dXJuIGU9PT1uP246ZVtjXX0sc2V0OmZ1bmN0aW9uKGIsYyxlKXtlPT09biYmYS5hLmYuZ2V0QWxsKGIsXG50KT09PW58fChhLmEuZi5nZXRBbGwoYixwKVtjXT1lKX0sZ2V0QWxsOmZ1bmN0aW9uKGEsZyl7dmFyIGU9YVtjXTtpZighKGUmJlwibnVsbFwiIT09ZSkpe2lmKCFnKXJldHVybjtlPWFbY109XCJrb1wiK2IrKztkW2VdPXt9fXJldHVybiBkW2VdfSxjbGVhcjpmdW5jdGlvbihhKXt2YXIgYj1hW2NdO2ImJihkZWxldGUgZFtiXSxhW2NdPXMpfX19O2EuYihcInV0aWxzLmRvbURhdGFcIixhLmEuZik7YS5iKFwidXRpbHMuZG9tRGF0YS5jbGVhclwiLGEuYS5mLmNsZWFyKTthLmEuRz1uZXcgZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyl7dmFyIGY9YS5hLmYuZ2V0KGIsZCk7Zj09PW4mJmMmJihmPVtdLGEuYS5mLnNldChiLGQsZikpO3JldHVybiBmfWZ1bmN0aW9uIGMoZSl7dmFyIGY9YihlLHQpO2lmKGYpZm9yKHZhciBmPWYuc2xpY2UoMCksZD0wO2Q8Zi5sZW5ndGg7ZCsrKWZbZF0oZSk7YS5hLmYuY2xlYXIoZSk7XCJmdW5jdGlvblwiPT10eXBlb2YgalF1ZXJ5JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBqUXVlcnkuY2xlYW5EYXRhJiZcbmpRdWVyeS5jbGVhbkRhdGEoW2VdKTtpZihnW2Uubm9kZVR5cGVdKWZvcihmPWUuZmlyc3RDaGlsZDtlPWY7KWY9ZS5uZXh0U2libGluZyw4PT09ZS5ub2RlVHlwZSYmYyhlKX12YXIgZD1cIl9fa29fZG9tTm9kZURpc3Bvc2FsX19cIisobmV3IERhdGUpLmdldFRpbWUoKSxmPXsxOnAsODpwLDk6cH0sZz17MTpwLDk6cH07cmV0dXJue3dhOmZ1bmN0aW9uKGEsYyl7XCJmdW5jdGlvblwiIT10eXBlb2YgYyYmbShFcnJvcihcIkNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKSk7YihhLHApLnB1c2goYyl9LE1hOmZ1bmN0aW9uKGMsZil7dmFyIGc9YihjLHQpO2cmJihhLmEuYmEoZyxmKSwwPT1nLmxlbmd0aCYmYS5hLmYuc2V0KGMsZCxuKSl9LEY6ZnVuY3Rpb24oYil7aWYoZltiLm5vZGVUeXBlXSYmKGMoYiksZ1tiLm5vZGVUeXBlXSkpe3ZhciBkPVtdO2EuYS5OKGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikpO2Zvcih2YXIgYj0wLGo9ZC5sZW5ndGg7YjxqO2IrKyljKGRbYl0pfX0sXG5yZW1vdmVOb2RlOmZ1bmN0aW9uKGIpe2EuRihiKTtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX19fTthLkY9YS5hLkcuRjthLnJlbW92ZU5vZGU9YS5hLkcucmVtb3ZlTm9kZTthLmIoXCJjbGVhbk5vZGVcIixhLkYpO2EuYihcInJlbW92ZU5vZGVcIixhLnJlbW92ZU5vZGUpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbFwiLGEuYS5HKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrXCIsYS5hLkcud2EpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2tcIixhLmEuRy5NYSk7KGZ1bmN0aW9uKCl7YS5hLnBhPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkpe2lmKChjPWpRdWVyeS5jbGVhbihbYl0pKSYmY1swXSl7Zm9yKGI9Y1swXTtiLnBhcmVudE5vZGUmJjExIT09Yi5wYXJlbnROb2RlLm5vZGVUeXBlOyliPWIucGFyZW50Tm9kZTtiLnBhcmVudE5vZGUmJlxuYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpfX1lbHNle3ZhciBkPWEuYS53KGIpLnRvTG93ZXJDYXNlKCk7Yz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Q9ZC5tYXRjaCgvXjwodGhlYWR8dGJvZHl8dGZvb3QpLykmJlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl18fCFkLmluZGV4T2YoXCI8dHJcIikmJlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl18fCghZC5pbmRleE9mKFwiPHRkXCIpfHwhZC5pbmRleE9mKFwiPHRoXCIpKSYmWzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXXx8WzAsXCJcIixcIlwiXTtiPVwiaWdub3JlZDxkaXY+XCIrZFsxXStiK2RbMl0rXCI8L2Rpdj5cIjtmb3IoXCJmdW5jdGlvblwiPT10eXBlb2Ygd2luZG93LmlubmVyU2hpdj9jLmFwcGVuZENoaWxkKHdpbmRvdy5pbm5lclNoaXYoYikpOmMuaW5uZXJIVE1MPWI7ZFswXS0tOyljPWMubGFzdENoaWxkO2M9YS5hLkwoYy5sYXN0Q2hpbGQuY2hpbGROb2Rlcyl9cmV0dXJuIGN9O1xuYS5hLlk9ZnVuY3Rpb24oYixjKXthLmEuZ2EoYik7aWYoYyE9PXMmJmMhPT1uKWlmKFwic3RyaW5nXCIhPXR5cGVvZiBjJiYoYz1jLnRvU3RyaW5nKCkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkpalF1ZXJ5KGIpLmh0bWwoYyk7ZWxzZSBmb3IodmFyIGQ9YS5hLnBhKGMpLGY9MDtmPGQubGVuZ3RoO2YrKyliLmFwcGVuZENoaWxkKGRbZl0pfX0pKCk7YS5iKFwidXRpbHMucGFyc2VIdG1sRnJhZ21lbnRcIixhLmEucGEpO2EuYihcInV0aWxzLnNldEh0bWxcIixhLmEuWSk7YS5zPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe3JldHVybig0Mjk0OTY3Mjk2KigxK01hdGgucmFuZG9tKCkpfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSl9ZnVuY3Rpb24gYyhiLGcpe2lmKGIpaWYoOD09Yi5ub2RlVHlwZSl7dmFyIGU9YS5zLkphKGIubm9kZVZhbHVlKTtlIT1zJiZnLnB1c2goe2piOmIseWI6ZX0pfWVsc2UgaWYoMT09Yi5ub2RlVHlwZSlmb3IodmFyIGU9MCxkPWIuY2hpbGROb2RlcyxqPWQubGVuZ3RoO2U8XG5qO2UrKyljKGRbZV0sZyl9dmFyIGQ9e307cmV0dXJue25hOmZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGEmJm0oRXJyb3IoXCJZb3UgY2FuIG9ubHkgcGFzcyBhIGZ1bmN0aW9uIHRvIGtvLm1lbW9pemF0aW9uLm1lbW9pemUoKVwiKSk7dmFyIGM9YigpK2IoKTtkW2NdPWE7cmV0dXJuXCI8XFwhLS1ba29fbWVtbzpcIitjK1wiXS0tXFw+XCJ9LFZhOmZ1bmN0aW9uKGEsYil7dmFyIGM9ZFthXTtjPT09biYmbShFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIithK1wiLiBQZXJoYXBzIGl0J3MgYWxyZWFkeSBiZWVuIHVubWVtb2l6ZWQuXCIpKTt0cnl7cmV0dXJuIGMuYXBwbHkocyxifHxbXSkscH1maW5hbGx5e2RlbGV0ZSBkW2FdfX0sV2E6ZnVuY3Rpb24oYixkKXt2YXIgZT1bXTtjKGIsZSk7Zm9yKHZhciBoPTAsaj1lLmxlbmd0aDtoPGo7aCsrKXt2YXIgaz1lW2hdLmpiLGk9W2tdO2QmJmEuYS5OKGksZCk7YS5zLlZhKGVbaF0ueWIsaSk7ay5ub2RlVmFsdWU9XCJcIjtrLnBhcmVudE5vZGUmJlxuay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGspfX0sSmE6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5tYXRjaCgvXlxcW2tvX21lbW9cXDooLio/KVxcXSQvKSk/YVsxXTpzfX19KCk7YS5iKFwibWVtb2l6YXRpb25cIixhLnMpO2EuYihcIm1lbW9pemF0aW9uLm1lbW9pemVcIixhLnMubmEpO2EuYihcIm1lbW9pemF0aW9uLnVubWVtb2l6ZVwiLGEucy5WYSk7YS5iKFwibWVtb2l6YXRpb24ucGFyc2VNZW1vVGV4dFwiLGEucy5KYSk7YS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzXCIsYS5zLldhKTthLkJhPXt0aHJvdHRsZTpmdW5jdGlvbihiLGMpe2IudGhyb3R0bGVFdmFsdWF0aW9uPWM7dmFyIGQ9cztyZXR1cm4gYS5oKHtyZWFkOmIsd3JpdGU6ZnVuY3Rpb24oYSl7Y2xlYXJUaW1lb3V0KGQpO2Q9c2V0VGltZW91dChmdW5jdGlvbigpe2IoYSl9LGMpfX0pfSxub3RpZnk6ZnVuY3Rpb24oYixjKXtiLmVxdWFsaXR5Q29tcGFyZXI9XCJhbHdheXNcIj09Yz9BKHQpOmEubS5mbi5lcXVhbGl0eUNvbXBhcmVyO1xucmV0dXJuIGJ9fTthLmIoXCJleHRlbmRlcnNcIixhLkJhKTthLlNhPWZ1bmN0aW9uKGIsYyxkKXt0aGlzLnRhcmdldD1iO3RoaXMuY2E9Yzt0aGlzLmliPWQ7YS5CKHRoaXMsXCJkaXNwb3NlXCIsdGhpcy5BKX07YS5TYS5wcm90b3R5cGUuQT1mdW5jdGlvbigpe3RoaXMuc2I9cDt0aGlzLmliKCl9O2EuUj1mdW5jdGlvbigpe3RoaXMudT17fTthLmEuZXh0ZW5kKHRoaXMsYS5SLmZuKTthLkIodGhpcyxcInN1YnNjcmliZVwiLHRoaXMudGEpO2EuQih0aGlzLFwiZXh0ZW5kXCIsdGhpcy5leHRlbmQpO2EuQih0aGlzLFwiZ2V0U3Vic2NyaXB0aW9uc0NvdW50XCIsdGhpcy5vYil9O2EuUi5mbj17dGE6ZnVuY3Rpb24oYixjLGQpe3ZhciBkPWR8fFwiY2hhbmdlXCIsYj1jP2IuYmluZChjKTpiLGY9bmV3IGEuU2EodGhpcyxiLGZ1bmN0aW9uKCl7YS5hLmJhKHRoaXMudVtkXSxmKX0uYmluZCh0aGlzKSk7dGhpcy51W2RdfHwodGhpcy51W2RdPVtdKTt0aGlzLnVbZF0ucHVzaChmKTtyZXR1cm4gZn0sbm90aWZ5U3Vic2NyaWJlcnM6ZnVuY3Rpb24oYixcbmMpe2M9Y3x8XCJjaGFuZ2VcIjt0aGlzLnVbY10mJmEuYS52KHRoaXMudVtjXS5zbGljZSgwKSxmdW5jdGlvbihhKXthJiZhLnNiIT09cCYmYS5jYShiKX0pfSxvYjpmdW5jdGlvbigpe3ZhciBhPTAsYztmb3IoYyBpbiB0aGlzLnUpdGhpcy51Lmhhc093blByb3BlcnR5KGMpJiYoYSs9dGhpcy51W2NdLmxlbmd0aCk7cmV0dXJuIGF9LGV4dGVuZDpmdW5jdGlvbihiKXt2YXIgYz10aGlzO2lmKGIpZm9yKHZhciBkIGluIGIpe3ZhciBmPWEuQmFbZF07XCJmdW5jdGlvblwiPT10eXBlb2YgZiYmKGM9ZihjLGJbZF0pKX1yZXR1cm4gY319O2EuR2E9ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYS50YSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5ub3RpZnlTdWJzY3JpYmVyc307YS5iKFwic3Vic2NyaWJhYmxlXCIsYS5SKTthLmIoXCJpc1N1YnNjcmliYWJsZVwiLGEuR2EpO2EuVT1mdW5jdGlvbigpe3ZhciBiPVtdO3JldHVybntiYjpmdW5jdGlvbihhKXtiLnB1c2goe2NhOmEsQWE6W119KX0sXG5lbmQ6ZnVuY3Rpb24oKXtiLnBvcCgpfSxMYTpmdW5jdGlvbihjKXthLkdhKGMpfHxtKEVycm9yKFwiT25seSBzdWJzY3JpYmFibGUgdGhpbmdzIGNhbiBhY3QgYXMgZGVwZW5kZW5jaWVzXCIpKTtpZigwPGIubGVuZ3RoKXt2YXIgZD1iW2IubGVuZ3RoLTFdOzA8PWEuYS5qKGQuQWEsYyl8fChkLkFhLnB1c2goYyksZC5jYShjKSl9fX19KCk7dmFyIEc9e3VuZGVmaW5lZDpwLFwiYm9vbGVhblwiOnAsbnVtYmVyOnAsc3RyaW5nOnB9O2EubT1mdW5jdGlvbihiKXtmdW5jdGlvbiBjKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXtpZighYy5lcXVhbGl0eUNvbXBhcmVyfHwhYy5lcXVhbGl0eUNvbXBhcmVyKGQsYXJndW1lbnRzWzBdKSljLkkoKSxkPWFyZ3VtZW50c1swXSxjLkgoKTtyZXR1cm4gdGhpc31hLlUuTGEoYyk7cmV0dXJuIGR9dmFyIGQ9YjthLlIuY2FsbChjKTtjLkg9ZnVuY3Rpb24oKXtjLm5vdGlmeVN1YnNjcmliZXJzKGQpfTtjLkk9ZnVuY3Rpb24oKXtjLm5vdGlmeVN1YnNjcmliZXJzKGQsXG5cImJlZm9yZUNoYW5nZVwiKX07YS5hLmV4dGVuZChjLGEubS5mbik7YS5CKGMsXCJ2YWx1ZUhhc011dGF0ZWRcIixjLkgpO2EuQihjLFwidmFsdWVXaWxsTXV0YXRlXCIsYy5JKTtyZXR1cm4gY307YS5tLmZuPXtlcXVhbGl0eUNvbXBhcmVyOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGE9PT1zfHx0eXBlb2YgYSBpbiBHP2E9PT1jOnR9fTt2YXIgeD1hLm0uRGI9XCJfX2tvX3Byb3RvX19cIjthLm0uZm5beF09YS5tO2EuaWE9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj09PXN8fGI9PT1ufHxiW3hdPT09bj90OmJbeF09PT1jP3A6YS5pYShiW3hdLGMpfTthLmxhPWZ1bmN0aW9uKGIpe3JldHVybiBhLmlhKGIsYS5tKX07YS5IYT1mdW5jdGlvbihiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiZiW3hdPT09YS5tfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiZiW3hdPT09YS5oJiZiLnBiP3A6dH07YS5iKFwib2JzZXJ2YWJsZVwiLGEubSk7YS5iKFwiaXNPYnNlcnZhYmxlXCIsYS5sYSk7YS5iKFwiaXNXcml0ZWFibGVPYnNlcnZhYmxlXCIsXG5hLkhhKTthLlE9ZnVuY3Rpb24oYil7MD09YXJndW1lbnRzLmxlbmd0aCYmKGI9W10pO2IhPT1zJiYoYiE9PW4mJiEoXCJsZW5ndGhcImluIGIpKSYmbShFcnJvcihcIlRoZSBhcmd1bWVudCBwYXNzZWQgd2hlbiBpbml0aWFsaXppbmcgYW4gb2JzZXJ2YWJsZSBhcnJheSBtdXN0IGJlIGFuIGFycmF5LCBvciBudWxsLCBvciB1bmRlZmluZWQuXCIpKTt2YXIgYz1hLm0oYik7YS5hLmV4dGVuZChjLGEuUS5mbik7cmV0dXJuIGN9O2EuUS5mbj17cmVtb3ZlOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYz10aGlzKCksZD1bXSxmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YTpmdW5jdGlvbihjKXtyZXR1cm4gYz09PWF9LGc9MDtnPGMubGVuZ3RoO2crKyl7dmFyIGU9Y1tnXTtmKGUpJiYoMD09PWQubGVuZ3RoJiZ0aGlzLkkoKSxkLnB1c2goZSksYy5zcGxpY2UoZywxKSxnLS0pfWQubGVuZ3RoJiZ0aGlzLkgoKTtyZXR1cm4gZH0scmVtb3ZlQWxsOmZ1bmN0aW9uKGIpe2lmKGI9PT1uKXt2YXIgYz10aGlzKCksXG5kPWMuc2xpY2UoMCk7dGhpcy5JKCk7Yy5zcGxpY2UoMCxjLmxlbmd0aCk7dGhpcy5IKCk7cmV0dXJuIGR9cmV0dXJuIWI/W106dGhpcy5yZW1vdmUoZnVuY3Rpb24oYyl7cmV0dXJuIDA8PWEuYS5qKGIsYyl9KX0sZGVzdHJveTpmdW5jdGlvbihhKXt2YXIgYz10aGlzKCksZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6ZnVuY3Rpb24oYyl7cmV0dXJuIGM9PT1hfTt0aGlzLkkoKTtmb3IodmFyIGY9Yy5sZW5ndGgtMTswPD1mO2YtLSlkKGNbZl0pJiYoY1tmXS5fZGVzdHJveT1wKTt0aGlzLkgoKX0sZGVzdHJveUFsbDpmdW5jdGlvbihiKXtyZXR1cm4gYj09PW4/dGhpcy5kZXN0cm95KEEocCkpOiFiP1tdOnRoaXMuZGVzdHJveShmdW5jdGlvbihjKXtyZXR1cm4gMDw9YS5hLmooYixjKX0pfSxpbmRleE9mOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMoKTtyZXR1cm4gYS5hLmooYyxiKX0scmVwbGFjZTpmdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMuaW5kZXhPZihhKTswPD1kJiYodGhpcy5JKCksXG50aGlzKClbZF09Yyx0aGlzLkgoKSl9fTthLmEudihcInBvcCBwdXNoIHJldmVyc2Ugc2hpZnQgc29ydCBzcGxpY2UgdW5zaGlmdFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXthLlEuZm5bYl09ZnVuY3Rpb24oKXt2YXIgYT10aGlzKCk7dGhpcy5JKCk7YT1hW2JdLmFwcGx5KGEsYXJndW1lbnRzKTt0aGlzLkgoKTtyZXR1cm4gYX19KTthLmEudihbXCJzbGljZVwiXSxmdW5jdGlvbihiKXthLlEuZm5bYl09ZnVuY3Rpb24oKXt2YXIgYT10aGlzKCk7cmV0dXJuIGFbYl0uYXBwbHkoYSxhcmd1bWVudHMpfX0pO2EuYihcIm9ic2VydmFibGVBcnJheVwiLGEuUSk7YS5oPWZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBmKCl7YS5hLnYodixmdW5jdGlvbihhKXthLkEoKX0pO3Y9W119ZnVuY3Rpb24gZygpe3ZhciBhPWgudGhyb3R0bGVFdmFsdWF0aW9uO2EmJjA8PWE/KGNsZWFyVGltZW91dCh4KSx4PXNldFRpbWVvdXQoZSxhKSk6ZSgpfWZ1bmN0aW9uIGUoKXtpZighbClpZihpJiZ3KCkpdSgpO2Vsc2V7bD1cbnA7dHJ5e3ZhciBiPWEuYS5UKHYsZnVuY3Rpb24oYSl7cmV0dXJuIGEudGFyZ2V0fSk7YS5VLmJiKGZ1bmN0aW9uKGMpe3ZhciBlOzA8PShlPWEuYS5qKGIsYykpP2JbZV09bjp2LnB1c2goYy50YShnKSl9KTtmb3IodmFyIGU9cS5jYWxsKGMpLGY9Yi5sZW5ndGgtMTswPD1mO2YtLSliW2ZdJiZ2LnNwbGljZShmLDEpWzBdLkEoKTtpPXA7aC5ub3RpZnlTdWJzY3JpYmVycyhrLFwiYmVmb3JlQ2hhbmdlXCIpO2s9ZX1maW5hbGx5e2EuVS5lbmQoKX1oLm5vdGlmeVN1YnNjcmliZXJzKGspO2w9dH19ZnVuY3Rpb24gaCgpe2lmKDA8YXJndW1lbnRzLmxlbmd0aClqLmFwcGx5KGgsYXJndW1lbnRzKTtlbHNlIHJldHVybiBpfHxlKCksYS5VLkxhKGgpLGt9ZnVuY3Rpb24gaigpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBvP28uYXBwbHkoYyxhcmd1bWVudHMpOm0oRXJyb3IoXCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLlwiKSl9XG52YXIgayxpPXQsbD10LHE9YjtxJiZcIm9iamVjdFwiPT10eXBlb2YgcT8oZD1xLHE9ZC5yZWFkKTooZD1kfHx7fSxxfHwocT1kLnJlYWQpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBxJiZtKEVycm9yKFwiUGFzcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGtvLmNvbXB1dGVkXCIpKTt2YXIgbz1kLndyaXRlO2N8fChjPWQub3duZXIpO3ZhciB2PVtdLHU9ZixyPVwib2JqZWN0XCI9PXR5cGVvZiBkLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZD9kLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDpzLHc9ZC5kaXNwb3NlV2hlbnx8QSh0KTtpZihyKXt1PWZ1bmN0aW9uKCl7YS5hLkcuTWEocixhcmd1bWVudHMuY2FsbGVlKTtmKCl9O2EuYS5HLndhKHIsdSk7dmFyIHk9dyx3PWZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5mYShyKXx8eSgpfX12YXIgeD1zO2gubmI9ZnVuY3Rpb24oKXtyZXR1cm4gdi5sZW5ndGh9O2gucGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIGQud3JpdGU7aC5BPWZ1bmN0aW9uKCl7dSgpfTtcbmEuUi5jYWxsKGgpO2EuYS5leHRlbmQoaCxhLmguZm4pO2QuZGVmZXJFdmFsdWF0aW9uIT09cCYmZSgpO2EuQihoLFwiZGlzcG9zZVwiLGguQSk7YS5CKGgsXCJnZXREZXBlbmRlbmNpZXNDb3VudFwiLGgubmIpO3JldHVybiBofTthLnJiPWZ1bmN0aW9uKGIpe3JldHVybiBhLmlhKGIsYS5oKX07dz1hLm0uRGI7YS5oW3ddPWEubTthLmguZm49e307YS5oLmZuW3ddPWEuaDthLmIoXCJkZXBlbmRlbnRPYnNlcnZhYmxlXCIsYS5oKTthLmIoXCJjb21wdXRlZFwiLGEuaCk7YS5iKFwiaXNDb21wdXRlZFwiLGEucmIpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxnLGUpe2U9ZXx8bmV3IGQ7YT1nKGEpO2lmKCEoXCJvYmplY3RcIj09dHlwZW9mIGEmJmEhPT1zJiZhIT09biYmIShhIGluc3RhbmNlb2YgRGF0ZSkpKXJldHVybiBhO3ZhciBoPWEgaW5zdGFuY2VvZiBBcnJheT9bXTp7fTtlLnNhdmUoYSxoKTtjKGEsZnVuY3Rpb24oYyl7dmFyIGQ9ZyhhW2NdKTtzd2l0Y2godHlwZW9mIGQpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwiZnVuY3Rpb25cIjpoW2NdPVxuZDticmVhaztjYXNlIFwib2JqZWN0XCI6Y2FzZSBcInVuZGVmaW5lZFwiOnZhciBpPWUuZ2V0KGQpO2hbY109aSE9PW4/aTpiKGQsZyxlKX19KTtyZXR1cm4gaH1mdW5jdGlvbiBjKGEsYil7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliKGMpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9KU09OJiZiKFwidG9KU09OXCIpfWVsc2UgZm9yKGMgaW4gYSliKGMpfWZ1bmN0aW9uIGQoKXt2YXIgYj1bXSxjPVtdO3RoaXMuc2F2ZT1mdW5jdGlvbihlLGQpe3ZhciBqPWEuYS5qKGIsZSk7MDw9aj9jW2pdPWQ6KGIucHVzaChlKSxjLnB1c2goZCkpfTt0aGlzLmdldD1mdW5jdGlvbihlKXtlPWEuYS5qKGIsZSk7cmV0dXJuIDA8PWU/Y1tlXTpufX1hLlRhPWZ1bmN0aW9uKGMpezA9PWFyZ3VtZW50cy5sZW5ndGgmJm0oRXJyb3IoXCJXaGVuIGNhbGxpbmcga28udG9KUywgcGFzcyB0aGUgb2JqZWN0IHlvdSB3YW50IHRvIGNvbnZlcnQuXCIpKTtyZXR1cm4gYihjLGZ1bmN0aW9uKGIpe2Zvcih2YXIgYz1cbjA7YS5sYShiKSYmMTA+YztjKyspYj1iKCk7cmV0dXJuIGJ9KX07YS50b0pTT049ZnVuY3Rpb24oYixjLGUpe2I9YS5UYShiKTtyZXR1cm4gYS5hLnNhKGIsYyxlKX19KSgpO2EuYihcInRvSlNcIixhLlRhKTthLmIoXCJ0b0pTT05cIixhLnRvSlNPTik7KGZ1bmN0aW9uKCl7YS5rPXtyOmZ1bmN0aW9uKGIpe3N3aXRjaChhLmEubyhiKSl7Y2FzZSBcIm9wdGlvblwiOnJldHVybiBiLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fPT09cD9hLmEuZi5nZXQoYixhLmMub3B0aW9ucy5vYSk6Yi5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtjYXNlIFwic2VsZWN0XCI6cmV0dXJuIDA8PWIuc2VsZWN0ZWRJbmRleD9hLmsucihiLm9wdGlvbnNbYi5zZWxlY3RlZEluZGV4XSk6bjtkZWZhdWx0OnJldHVybiBiLnZhbHVlfX0sUzpmdW5jdGlvbihiLGMpe3N3aXRjaChhLmEubyhiKSl7Y2FzZSBcIm9wdGlvblwiOnN3aXRjaCh0eXBlb2YgYyl7Y2FzZSBcInN0cmluZ1wiOmEuYS5mLnNldChiLGEuYy5vcHRpb25zLm9hLFxubik7XCJfX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfX1wiaW4gYiYmZGVsZXRlIGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX187Yi52YWx1ZT1jO2JyZWFrO2RlZmF1bHQ6YS5hLmYuc2V0KGIsYS5jLm9wdGlvbnMub2EsYyksYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz1wLGIudmFsdWU9XCJudW1iZXJcIj09PXR5cGVvZiBjP2M6XCJcIn1icmVhaztjYXNlIFwic2VsZWN0XCI6Zm9yKHZhciBkPWIub3B0aW9ucy5sZW5ndGgtMTswPD1kO2QtLSlpZihhLmsucihiLm9wdGlvbnNbZF0pPT1jKXtiLnNlbGVjdGVkSW5kZXg9ZDticmVha31icmVhaztkZWZhdWx0OmlmKGM9PT1zfHxjPT09biljPVwiXCI7Yi52YWx1ZT1jfX19fSkoKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zXCIsYS5rKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZVwiLGEuay5yKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWVcIixhLmsuUyk7YS5nPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhLGIpe2Zvcih2YXIgZD1cbnM7YSE9ZDspZD1hLGE9YS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYltjXX0pO3JldHVybiBhfXZhciBjPS9cXEBrb190b2tlbl8oXFxkKylcXEAvZyxkPS9eW1xcXyRhLXpdW1xcXyRhLXowLTldKihcXFsuKj9cXF0pKihcXC5bXFxfJGEtel1bXFxfJGEtejAtOV0qKFxcWy4qP1xcXSkqKSokL2ksZj1bXCJ0cnVlXCIsXCJmYWxzZVwiXTtyZXR1cm57RDpbXSxXOmZ1bmN0aW9uKGMpe3ZhciBlPWEuYS53KGMpO2lmKDM+ZS5sZW5ndGgpcmV0dXJuW107XCJ7XCI9PT1lLmNoYXJBdCgwKSYmKGU9ZS5zdWJzdHJpbmcoMSxlLmxlbmd0aC0xKSk7Zm9yKHZhciBjPVtdLGQ9cyxmLGs9MDtrPGUubGVuZ3RoO2srKyl7dmFyIGk9ZS5jaGFyQXQoayk7aWYoZD09PXMpc3dpdGNoKGkpe2Nhc2UgJ1wiJzpjYXNlIFwiJ1wiOmNhc2UgXCIvXCI6ZD1rLGY9aX1lbHNlIGlmKGk9PWYmJlwiXFxcXFwiIT09ZS5jaGFyQXQoay0xKSl7aT1lLnN1YnN0cmluZyhkLGsrMSk7Yy5wdXNoKGkpO3ZhciBsPVwiQGtvX3Rva2VuX1wiKyhjLmxlbmd0aC1cbjEpK1wiQFwiLGU9ZS5zdWJzdHJpbmcoMCxkKStsK2Uuc3Vic3RyaW5nKGsrMSksaz1rLShpLmxlbmd0aC1sLmxlbmd0aCksZD1zfX1mPWQ9cztmb3IodmFyIHE9MCxvPXMsaz0wO2s8ZS5sZW5ndGg7aysrKXtpPWUuY2hhckF0KGspO2lmKGQ9PT1zKXN3aXRjaChpKXtjYXNlIFwie1wiOmQ9aztvPWk7Zj1cIn1cIjticmVhaztjYXNlIFwiKFwiOmQ9aztvPWk7Zj1cIilcIjticmVhaztjYXNlIFwiW1wiOmQ9ayxvPWksZj1cIl1cIn1pPT09bz9xKys6aT09PWYmJihxLS0sMD09PXEmJihpPWUuc3Vic3RyaW5nKGQsaysxKSxjLnB1c2goaSksbD1cIkBrb190b2tlbl9cIisoYy5sZW5ndGgtMSkrXCJAXCIsZT1lLnN1YnN0cmluZygwLGQpK2wrZS5zdWJzdHJpbmcoaysxKSxrLT1pLmxlbmd0aC1sLmxlbmd0aCxkPXMpKX1mPVtdO2U9ZS5zcGxpdChcIixcIik7ZD0wO2ZvcihrPWUubGVuZ3RoO2Q8aztkKyspcT1lW2RdLG89cS5pbmRleE9mKFwiOlwiKSwwPG8mJm88cS5sZW5ndGgtMT8oaT1xLnN1YnN0cmluZyhvKzEpLGYucHVzaCh7a2V5OmIocS5zdWJzdHJpbmcoMCxcbm8pLGMpLHZhbHVlOmIoaSxjKX0pKTpmLnB1c2goe3Vua25vd246YihxLGMpfSk7cmV0dXJuIGZ9LGthOmZ1bmN0aW9uKGIpe2Zvcih2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGI/YS5nLlcoYik6YixoPVtdLGI9W10saixrPTA7aj1jW2tdO2srKylpZigwPGgubGVuZ3RoJiZoLnB1c2goXCIsXCIpLGoua2V5KXt2YXIgaTthOntpPWoua2V5O3ZhciBsPWEuYS53KGkpO3N3aXRjaChsLmxlbmd0aCYmbC5jaGFyQXQoMCkpe2Nhc2UgXCInXCI6Y2FzZSAnXCInOmJyZWFrIGE7ZGVmYXVsdDppPVwiJ1wiK2wrXCInXCJ9fWo9ai52YWx1ZTtoLnB1c2goaSk7aC5wdXNoKFwiOlwiKTtoLnB1c2goaik7bD1hLmEudyhqKTtpZigwPD1hLmEuaihmLGEuYS53KGwpLnRvTG93ZXJDYXNlKCkpPzA6bC5tYXRjaChkKSE9PXMpMDxiLmxlbmd0aCYmYi5wdXNoKFwiLCBcIiksYi5wdXNoKGkrXCIgOiBmdW5jdGlvbihfX2tvX3ZhbHVlKSB7IFwiK2orXCIgPSBfX2tvX3ZhbHVlOyB9XCIpfWVsc2Ugai51bmtub3duJiZoLnB1c2goai51bmtub3duKTtcbmM9aC5qb2luKFwiXCIpOzA8Yi5sZW5ndGgmJihjPWMrXCIsICdfa29fcHJvcGVydHlfd3JpdGVycycgOiB7IFwiK2Iuam9pbihcIlwiKStcIiB9IFwiKTtyZXR1cm4gY30sd2I6ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKylpZihhLmEudyhiW2RdLmtleSk9PWMpcmV0dXJuIHA7cmV0dXJuIHR9LCQ6ZnVuY3Rpb24oYixjLGQsZixrKXtpZighYnx8IWEuSGEoYikpe2lmKChiPWMoKS5fa29fcHJvcGVydHlfd3JpdGVycykmJmJbZF0pYltkXShmKX1lbHNlKCFrfHxiKCkhPT1mKSYmYihmKX19fSgpO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nXCIsYS5nKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNcIixhLmcuRCk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsXCIsYS5nLlcpO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nLmluc2VydFByb3BlcnR5QWNjZXNzb3JzSW50b0pzb25cIixcbmEuZy5rYSk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gOD09YS5ub2RlVHlwZSYmKGc/YS50ZXh0OmEubm9kZVZhbHVlKS5tYXRjaChlKX1mdW5jdGlvbiBjKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoZz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGgpfWZ1bmN0aW9uIGQoYSxlKXtmb3IodmFyIGQ9YSxmPTEsZz1bXTtkPWQubmV4dFNpYmxpbmc7KXtpZihjKGQpJiYoZi0tLDA9PT1mKSlyZXR1cm4gZztnLnB1c2goZCk7YihkKSYmZisrfWV8fG0oRXJyb3IoXCJDYW5ub3QgZmluZCBjbG9zaW5nIGNvbW1lbnQgdGFnIHRvIG1hdGNoOiBcIithLm5vZGVWYWx1ZSkpO3JldHVybiBzfWZ1bmN0aW9uIGYoYSxiKXt2YXIgYz1kKGEsYik7cmV0dXJuIGM/MDxjLmxlbmd0aD9jW2MubGVuZ3RoLTFdLm5leHRTaWJsaW5nOmEubmV4dFNpYmxpbmc6c312YXIgZz1cIjxcXCEtLXRlc3QtLVxcPlwiPT09ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcInRlc3RcIikudGV4dCxlPWc/L148XFwhLS1cXHMqa29cXHMrKC4qXFw6LiopXFxzKi0tXFw+JC86XG4vXlxccyprb1xccysoLipcXDouKilcXHMqJC8saD1nPy9ePFxcIS0tXFxzKlxcL2tvXFxzKi0tXFw+JC86L15cXHMqXFwva29cXHMqJC8saj17dWw6cCxvbDpwfTthLmU9e0M6e30sY2hpbGROb2RlczpmdW5jdGlvbihhKXtyZXR1cm4gYihhKT9kKGEpOmEuY2hpbGROb2Rlc30saGE6ZnVuY3Rpb24oYyl7aWYoYihjKSlmb3IodmFyIGM9YS5lLmNoaWxkTm9kZXMoYyksZT0wLGQ9Yy5sZW5ndGg7ZTxkO2UrKylhLnJlbW92ZU5vZGUoY1tlXSk7ZWxzZSBhLmEuZ2EoYyl9LFg6ZnVuY3Rpb24oYyxlKXtpZihiKGMpKXthLmUuaGEoYyk7Zm9yKHZhciBkPWMubmV4dFNpYmxpbmcsZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKylkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVbZl0sZCl9ZWxzZSBhLmEuWChjLGUpfSxLYTpmdW5jdGlvbihhLGMpe2IoYSk/YS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjLGEubmV4dFNpYmxpbmcpOmEuZmlyc3RDaGlsZD9hLmluc2VydEJlZm9yZShjLGEuZmlyc3RDaGlsZCk6YS5hcHBlbmRDaGlsZChjKX0sXG5GYTpmdW5jdGlvbihhLGMsZSl7YihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMsZS5uZXh0U2libGluZyk6ZS5uZXh0U2libGluZz9hLmluc2VydEJlZm9yZShjLGUubmV4dFNpYmxpbmcpOmEuYXBwZW5kQ2hpbGQoYyl9LGZpcnN0Q2hpbGQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWIoYSk/YS5maXJzdENoaWxkOiFhLm5leHRTaWJsaW5nfHxjKGEubmV4dFNpYmxpbmcpP3M6YS5uZXh0U2libGluZ30sbmV4dFNpYmxpbmc6ZnVuY3Rpb24oYSl7YihhKSYmKGE9ZihhKSk7cmV0dXJuIGEubmV4dFNpYmxpbmcmJmMoYS5uZXh0U2libGluZyk/czphLm5leHRTaWJsaW5nfSxYYTpmdW5jdGlvbihhKXtyZXR1cm4oYT1iKGEpKT9hWzFdOnN9LElhOmZ1bmN0aW9uKGUpe2lmKGpbYS5hLm8oZSldKXt2YXIgZD1lLmZpcnN0Q2hpbGQ7aWYoZCl7ZG8gaWYoMT09PWQubm9kZVR5cGUpe3ZhciBnO2c9ZC5maXJzdENoaWxkO3ZhciBoPXM7aWYoZyl7ZG8gaWYoaCloLnB1c2goZyk7ZWxzZSBpZihiKGcpKXt2YXIgbz1cbmYoZyxwKTtvP2c9bzpoPVtnXX1lbHNlIGMoZykmJihoPVtnXSk7d2hpbGUoZz1nLm5leHRTaWJsaW5nKX1pZihnPWgpe2g9ZC5uZXh0U2libGluZztmb3Iobz0wO288Zy5sZW5ndGg7bysrKWg/ZS5pbnNlcnRCZWZvcmUoZ1tvXSxoKTplLmFwcGVuZENoaWxkKGdbb10pfX13aGlsZShkPWQubmV4dFNpYmxpbmcpfX19fX0pKCk7YS5iKFwidmlydHVhbEVsZW1lbnRzXCIsYS5lKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzXCIsYS5lLkMpO2EuYihcInZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGVcIixhLmUuaGEpO2EuYihcInZpcnR1YWxFbGVtZW50cy5pbnNlcnRBZnRlclwiLGEuZS5GYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLnByZXBlbmRcIixhLmUuS2EpO2EuYihcInZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW5cIixhLmUuWCk7KGZ1bmN0aW9uKCl7YS5KPWZ1bmN0aW9uKCl7dGhpcy5jYj17fX07YS5hLmV4dGVuZChhLkoucHJvdG90eXBlLHtub2RlSGFzQmluZGluZ3M6ZnVuY3Rpb24oYil7c3dpdGNoKGIubm9kZVR5cGUpe2Nhc2UgMTpyZXR1cm4gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIikhPVxucztjYXNlIDg6cmV0dXJuIGEuZS5YYShiKSE9cztkZWZhdWx0OnJldHVybiB0fX0sZ2V0QmluZGluZ3M6ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGEsYyk7cmV0dXJuIGQ/dGhpcy5wYXJzZUJpbmRpbmdzU3RyaW5nKGQsYyk6c30sZ2V0QmluZGluZ3NTdHJpbmc6ZnVuY3Rpb24oYil7c3dpdGNoKGIubm9kZVR5cGUpe2Nhc2UgMTpyZXR1cm4gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIik7Y2FzZSA4OnJldHVybiBhLmUuWGEoYik7ZGVmYXVsdDpyZXR1cm4gc319LHBhcnNlQmluZGluZ3NTdHJpbmc6ZnVuY3Rpb24oYixjKXt0cnl7dmFyIGQ9Yy4kZGF0YSxkPVwib2JqZWN0XCI9PXR5cGVvZiBkJiZkIT1zP1tkLGNdOltjXSxmPWQubGVuZ3RoLGc9dGhpcy5jYixlPWYrXCJfXCIrYixoO2lmKCEoaD1nW2VdKSl7dmFyIGo9XCIgeyBcIithLmcua2EoYikrXCIgfSBcIjtoPWdbZV09YS5hLmViKGosZil9cmV0dXJuIGgoZCl9Y2F0Y2goayl7bShFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBiaW5kaW5ncy5cXG5NZXNzYWdlOiBcIitcbmsrXCI7XFxuQmluZGluZ3MgdmFsdWU6IFwiK2IpKX19fSk7YS5KLmluc3RhbmNlPW5ldyBhLkp9KSgpO2EuYihcImJpbmRpbmdQcm92aWRlclwiLGEuSik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGQsZSl7Zm9yKHZhciBoPWEuZS5maXJzdENoaWxkKGQpO2Q9aDspaD1hLmUubmV4dFNpYmxpbmcoZCksYyhiLGQsZSl9ZnVuY3Rpb24gYyhjLGcsZSl7dmFyIGg9cCxqPTE9PT1nLm5vZGVUeXBlO2omJmEuZS5JYShnKTtpZihqJiZlfHxhLkouaW5zdGFuY2Uubm9kZUhhc0JpbmRpbmdzKGcpKWg9ZChnLHMsYyxlKS5HYjtoJiZiKGMsZywhail9ZnVuY3Rpb24gZChiLGMsZSxkKXtmdW5jdGlvbiBqKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBsW2FdfX1mdW5jdGlvbiBrKCl7cmV0dXJuIGx9dmFyIGk9MCxsLHE7YS5oKGZ1bmN0aW9uKCl7dmFyIG89ZSYmZSBpbnN0YW5jZW9mIGEuej9lOm5ldyBhLnooYS5hLmQoZSkpLHY9by4kZGF0YTtkJiZhLlJhKGIsbyk7aWYobD0oXCJmdW5jdGlvblwiPT1cbnR5cGVvZiBjP2MoKTpjKXx8YS5KLmluc3RhbmNlLmdldEJpbmRpbmdzKGIsbykpe2lmKDA9PT1pKXtpPTE7Zm9yKHZhciB1IGluIGwpe3ZhciByPWEuY1t1XTtyJiY4PT09Yi5ub2RlVHlwZSYmIWEuZS5DW3VdJiZtKEVycm9yKFwiVGhlIGJpbmRpbmcgJ1wiK3UrXCInIGNhbm5vdCBiZSB1c2VkIHdpdGggdmlydHVhbCBlbGVtZW50c1wiKSk7aWYociYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci5pbml0JiYocj0oMCxyLmluaXQpKGIsaih1KSxrLHYsbykpJiZyLmNvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzKXEhPT1uJiZtKEVycm9yKFwiTXVsdGlwbGUgYmluZGluZ3MgKFwiK3ErXCIgYW5kIFwiK3UrXCIpIGFyZSB0cnlpbmcgdG8gY29udHJvbCBkZXNjZW5kYW50IGJpbmRpbmdzIG9mIHRoZSBzYW1lIGVsZW1lbnQuIFlvdSBjYW5ub3QgdXNlIHRoZXNlIGJpbmRpbmdzIHRvZ2V0aGVyIG9uIHRoZSBzYW1lIGVsZW1lbnQuXCIpKSxxPXV9aT0yfWlmKDI9PT1pKWZvcih1IGluIGwpKHI9YS5jW3VdKSYmXCJmdW5jdGlvblwiPT1cbnR5cGVvZiByLnVwZGF0ZSYmKDAsci51cGRhdGUpKGIsaih1KSxrLHYsbyl9fSxzLHtkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6Yn0pO3JldHVybntHYjpxPT09bn19YS5jPXt9O2Euej1mdW5jdGlvbihiLGMpe2M/KGEuYS5leHRlbmQodGhpcyxjKSx0aGlzLiRwYXJlbnRDb250ZXh0PWMsdGhpcy4kcGFyZW50PWMuJGRhdGEsdGhpcy4kcGFyZW50cz0oYy4kcGFyZW50c3x8W10pLnNsaWNlKDApLHRoaXMuJHBhcmVudHMudW5zaGlmdCh0aGlzLiRwYXJlbnQpKToodGhpcy4kcGFyZW50cz1bXSx0aGlzLiRyb290PWIpO3RoaXMuJGRhdGE9Yn07YS56LnByb3RvdHlwZS5jcmVhdGVDaGlsZENvbnRleHQ9ZnVuY3Rpb24oYil7cmV0dXJuIG5ldyBhLnooYix0aGlzKX07YS56LnByb3RvdHlwZS5leHRlbmQ9ZnVuY3Rpb24oYil7dmFyIGM9YS5hLmV4dGVuZChuZXcgYS56LHRoaXMpO3JldHVybiBhLmEuZXh0ZW5kKGMsYil9O2EuUmE9ZnVuY3Rpb24oYixjKXtpZigyPT1hcmd1bWVudHMubGVuZ3RoKWEuYS5mLnNldChiLFxuXCJfX2tvX2JpbmRpbmdDb250ZXh0X19cIixjKTtlbHNlIHJldHVybiBhLmEuZi5nZXQoYixcIl9fa29fYmluZGluZ0NvbnRleHRfX1wiKX07YS55YT1mdW5jdGlvbihiLGMsZSl7MT09PWIubm9kZVR5cGUmJmEuZS5JYShiKTtyZXR1cm4gZChiLGMsZSxwKX07YS5ZYT1mdW5jdGlvbihhLGMpeygxPT09Yy5ub2RlVHlwZXx8OD09PWMubm9kZVR5cGUpJiZiKGEsYyxwKX07YS54YT1mdW5jdGlvbihhLGIpe2ImJigxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGUpJiZtKEVycm9yKFwia28uYXBwbHlCaW5kaW5nczogZmlyc3QgcGFyYW1ldGVyIHNob3VsZCBiZSB5b3VyIHZpZXcgbW9kZWw7IHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgRE9NIG5vZGVcIikpO2I9Ynx8d2luZG93LmRvY3VtZW50LmJvZHk7YyhhLGIscCl9O2EuZWE9ZnVuY3Rpb24oYil7c3dpdGNoKGIubm9kZVR5cGUpe2Nhc2UgMTpjYXNlIDg6dmFyIGM9YS5SYShiKTtpZihjKXJldHVybiBjO2lmKGIucGFyZW50Tm9kZSlyZXR1cm4gYS5lYShiLnBhcmVudE5vZGUpfX07XG5hLmhiPWZ1bmN0aW9uKGIpe3JldHVybihiPWEuZWEoYikpP2IuJGRhdGE6bn07YS5iKFwiYmluZGluZ0hhbmRsZXJzXCIsYS5jKTthLmIoXCJhcHBseUJpbmRpbmdzXCIsYS54YSk7YS5iKFwiYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHNcIixhLllhKTthLmIoXCJhcHBseUJpbmRpbmdzVG9Ob2RlXCIsYS55YSk7YS5iKFwiY29udGV4dEZvclwiLGEuZWEpO2EuYihcImRhdGFGb3JcIixhLmhiKX0pKCk7YS5hLnYoW1wiY2xpY2tcIl0sZnVuY3Rpb24oYil7YS5jW2JdPXtpbml0OmZ1bmN0aW9uKGMsZCxmLGcpe3JldHVybiBhLmMuZXZlbnQuaW5pdC5jYWxsKHRoaXMsYyxmdW5jdGlvbigpe3ZhciBhPXt9O2FbYl09ZCgpO3JldHVybiBhfSxmLGcpfX19KTthLmMuZXZlbnQ9e2luaXQ6ZnVuY3Rpb24oYixjLGQsZil7dmFyIGc9YygpfHx7fSxlO2ZvcihlIGluIGcpKGZ1bmN0aW9uKCl7dmFyIGc9ZTtcInN0cmluZ1wiPT10eXBlb2YgZyYmYS5hLm4oYixnLGZ1bmN0aW9uKGIpe3ZhciBlLGk9YygpW2ddO2lmKGkpe3ZhciBsPVxuZCgpO3RyeXt2YXIgcT1hLmEuTChhcmd1bWVudHMpO3EudW5zaGlmdChmKTtlPWkuYXBwbHkoZixxKX1maW5hbGx5e2UhPT1wJiYoYi5wcmV2ZW50RGVmYXVsdD9iLnByZXZlbnREZWZhdWx0KCk6Yi5yZXR1cm5WYWx1ZT10KX1sW2crXCJCdWJibGVcIl09PT10JiYoYi5jYW5jZWxCdWJibGU9cCxiLnN0b3BQcm9wYWdhdGlvbiYmYi5zdG9wUHJvcGFnYXRpb24oKSl9fSl9KSgpfX07YS5jLnN1Ym1pdD17aW5pdDpmdW5jdGlvbihiLGMsZCxmKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBjKCkmJm0oRXJyb3IoXCJUaGUgdmFsdWUgZm9yIGEgc3VibWl0IGJpbmRpbmcgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpKTthLmEubihiLFwic3VibWl0XCIsZnVuY3Rpb24oYSl7dmFyIGUsZD1jKCk7dHJ5e2U9ZC5jYWxsKGYsYil9ZmluYWxseXtlIT09cCYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9dCl9fSl9fTthLmMudmlzaWJsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9XG5hLmEuZChjKCkpLGY9XCJub25lXCIhPWIuc3R5bGUuZGlzcGxheTtkJiYhZj9iLnN0eWxlLmRpc3BsYXk9XCJcIjohZCYmZiYmKGIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIil9fTthLmMuZW5hYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCkpO2QmJmIuZGlzYWJsZWQ/Yi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTohZCYmIWIuZGlzYWJsZWQmJihiLmRpc2FibGVkPXApfX07YS5jLmRpc2FibGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYy5lbmFibGUudXBkYXRlKGIsZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmQoYygpKX0pfX07YS5jLnZhbHVlPXtpbml0OmZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBmKCl7dmFyIGU9YygpLGY9YS5rLnIoYik7YS5nLiQoZSxkLFwidmFsdWVcIixmLHApfXZhciBnPVtcImNoYW5nZVwiXSxlPWQoKS52YWx1ZVVwZGF0ZTtlJiYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPVtlXSksYS5hLk4oZyxlKSxnPWEuYS56YShnKSk7aWYoYS5hLmphJiZcbihcImlucHV0XCI9PWIudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09Yi50eXBlJiZcIm9mZlwiIT1iLmF1dG9jb21wbGV0ZSYmKCFiLmZvcm18fFwib2ZmXCIhPWIuZm9ybS5hdXRvY29tcGxldGUpKSYmLTE9PWEuYS5qKGcsXCJwcm9wZXJ0eWNoYW5nZVwiKSl7dmFyIGg9dDthLmEubihiLFwicHJvcGVydHljaGFuZ2VcIixmdW5jdGlvbigpe2g9cH0pO2EuYS5uKGIsXCJibHVyXCIsZnVuY3Rpb24oKXtpZihoKXtoPXQ7ZigpfX0pfWEuYS52KGcsZnVuY3Rpb24oYyl7dmFyIGU9ZjtpZihhLmEuSGIoYyxcImFmdGVyXCIpKXtlPWZ1bmN0aW9uKCl7c2V0VGltZW91dChmLDApfTtjPWMuc3Vic3RyaW5nKDUpfWEuYS5uKGIsYyxlKX0pfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1cInNlbGVjdFwiPT09YS5hLm8oYiksZj1hLmEuZChjKCkpLGc9YS5rLnIoYiksZT1mIT1nOzA9PT1mJiYoMCE9PWcmJlwiMFwiIT09ZykmJihlPXApO2UmJihnPWZ1bmN0aW9uKCl7YS5rLlMoYixmKX0sZygpLGQmJnNldFRpbWVvdXQoZyxcbjApKTtkJiYwPGIubGVuZ3RoJiZCKGIsZix0KX19O2EuYy5vcHRpb25zPXt1cGRhdGU6ZnVuY3Rpb24oYixjLGQpe1wic2VsZWN0XCIhPT1hLmEubyhiKSYmbShFcnJvcihcIm9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpKTtmb3IodmFyIGY9MD09Yi5sZW5ndGgsZz1hLmEuVChhLmEuYWEoYi5jaGlsZE5vZGVzLGZ1bmN0aW9uKGIpe3JldHVybiBiLnRhZ05hbWUmJlwib3B0aW9uXCI9PT1hLmEubyhiKSYmYi5zZWxlY3RlZH0pLGZ1bmN0aW9uKGIpe3JldHVybiBhLmsucihiKXx8Yi5pbm5lclRleHR8fGIudGV4dENvbnRlbnR9KSxlPWIuc2Nyb2xsVG9wLGg9YS5hLmQoYygpKTswPGIubGVuZ3RoOylhLkYoYi5vcHRpb25zWzBdKSxiLnJlbW92ZSgwKTtpZihoKXtkPWQoKTtcIm51bWJlclwiIT10eXBlb2YgaC5sZW5ndGgmJihoPVtoXSk7aWYoZC5vcHRpb25zQ2FwdGlvbil7dmFyIGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTthLmEuWShqLFxuZC5vcHRpb25zQ2FwdGlvbik7YS5rLlMoaixuKTtiLmFwcGVuZENoaWxkKGopfWZvcih2YXIgYz0wLGs9aC5sZW5ndGg7YzxrO2MrKyl7dmFyIGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxpPVwic3RyaW5nXCI9PXR5cGVvZiBkLm9wdGlvbnNWYWx1ZT9oW2NdW2Qub3B0aW9uc1ZhbHVlXTpoW2NdLGk9YS5hLmQoaSk7YS5rLlMoaixpKTt2YXIgbD1kLm9wdGlvbnNUZXh0LGk9XCJmdW5jdGlvblwiPT10eXBlb2YgbD9sKGhbY10pOlwic3RyaW5nXCI9PXR5cGVvZiBsP2hbY11bbF06aTtpZihpPT09c3x8aT09PW4paT1cIlwiO2EuYS5RYShqLGkpO2IuYXBwZW5kQ2hpbGQoail9aD1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpO2M9aj0wO2ZvcihrPWgubGVuZ3RoO2M8aztjKyspMDw9YS5hLmooZyxhLmsucihoW2NdKSkmJihhLmEuUGEoaFtjXSxwKSxqKyspO2Iuc2Nyb2xsVG9wPWU7ZiYmXCJ2YWx1ZVwiaW4gZCYmQihiLGEuYS5kKGQudmFsdWUpLHApO2EuYS5sYihiKX19fTtcbmEuYy5vcHRpb25zLm9hPVwiX19rby5vcHRpb25WYWx1ZURvbURhdGFfX1wiO2EuYy5zZWxlY3RlZE9wdGlvbnM9e0VhOmZ1bmN0aW9uKGIpe2Zvcih2YXIgYz1bXSxiPWIuY2hpbGROb2RlcyxkPTAsZj1iLmxlbmd0aDtkPGY7ZCsrKXt2YXIgZz1iW2RdLGU9YS5hLm8oZyk7XCJvcHRpb25cIj09ZSYmZy5zZWxlY3RlZD9jLnB1c2goYS5rLnIoZykpOlwib3B0Z3JvdXBcIj09ZSYmKGc9YS5jLnNlbGVjdGVkT3B0aW9ucy5FYShnKSxBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGMsW2MubGVuZ3RoLDBdLmNvbmNhdChnKSkpfXJldHVybiBjfSxpbml0OmZ1bmN0aW9uKGIsYyxkKXthLmEubihiLFwiY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYj1jKCksZz1hLmMuc2VsZWN0ZWRPcHRpb25zLkVhKHRoaXMpO2EuZy4kKGIsZCxcInZhbHVlXCIsZyl9KX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7XCJzZWxlY3RcIiE9YS5hLm8oYikmJm0oRXJyb3IoXCJ2YWx1ZXMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpKTtcbnZhciBkPWEuYS5kKGMoKSk7aWYoZCYmXCJudW1iZXJcIj09dHlwZW9mIGQubGVuZ3RoKWZvcih2YXIgZj1iLmNoaWxkTm9kZXMsZz0wLGU9Zi5sZW5ndGg7ZzxlO2crKyl7dmFyIGg9ZltnXTtcIm9wdGlvblwiPT09YS5hLm8oaCkmJmEuYS5QYShoLDA8PWEuYS5qKGQsYS5rLnIoaCkpKX19fTthLmMudGV4dD17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5hLlFhKGIsYygpKX19O2EuYy5odG1sPXtpbml0OmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOnB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCkpO2EuYS5ZKGIsZCl9fTthLmMuY3NzPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCl8fHt9KSxmO2ZvcihmIGluIGQpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGYpe3ZhciBnPWEuYS5kKGRbZl0pO2EuYS5VYShiLGYsZyl9fX07YS5jLnN0eWxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCl8fHt9KSxmO1xuZm9yKGYgaW4gZClpZihcInN0cmluZ1wiPT10eXBlb2YgZil7dmFyIGc9YS5hLmQoZFtmXSk7Yi5zdHlsZVtmXT1nfHxcIlwifX19O2EuYy51bmlxdWVOYW1lPXtpbml0OmZ1bmN0aW9uKGIsYyl7YygpJiYoYi5uYW1lPVwia29fdW5pcXVlX1wiKyArK2EuYy51bmlxdWVOYW1lLmdiLChhLmEudGJ8fGEuYS51YikmJmIubWVyZ2VBdHRyaWJ1dGVzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCI8aW5wdXQgbmFtZT0nXCIrYi5uYW1lK1wiJy8+XCIpLHQpKX19O2EuYy51bmlxdWVOYW1lLmdiPTA7YS5jLmNoZWNrZWQ9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe2EuYS5uKGIsXCJjbGlja1wiLGZ1bmN0aW9uKCl7dmFyIGY7aWYoXCJjaGVja2JveFwiPT1iLnR5cGUpZj1iLmNoZWNrZWQ7ZWxzZSBpZihcInJhZGlvXCI9PWIudHlwZSYmYi5jaGVja2VkKWY9Yi52YWx1ZTtlbHNlIHJldHVybjt2YXIgZz1jKCk7XCJjaGVja2JveFwiPT1iLnR5cGUmJmEuYS5kKGcpaW5zdGFuY2VvZiBBcnJheT8oZj1hLmEuaihhLmEuZChnKSxiLnZhbHVlKSxcbmIuY2hlY2tlZCYmMD5mP2cucHVzaChiLnZhbHVlKTohYi5jaGVja2VkJiYwPD1mJiZnLnNwbGljZShmLDEpKTphLmcuJChnLGQsXCJjaGVja2VkXCIsZixwKX0pO1wicmFkaW9cIj09Yi50eXBlJiYhYi5uYW1lJiZhLmMudW5pcXVlTmFtZS5pbml0KGIsQShwKSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSk7XCJjaGVja2JveFwiPT1iLnR5cGU/Yi5jaGVja2VkPWQgaW5zdGFuY2VvZiBBcnJheT8wPD1hLmEuaihkLGIudmFsdWUpOmQ6XCJyYWRpb1wiPT1iLnR5cGUmJihiLmNoZWNrZWQ9Yi52YWx1ZT09ZCl9fTt2YXIgRj17XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsXCJmb3JcIjpcImh0bWxGb3JcIn07YS5jLmF0dHI9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSl8fHt9LGY7Zm9yKGYgaW4gZClpZihcInN0cmluZ1wiPT10eXBlb2YgZil7dmFyIGc9YS5hLmQoZFtmXSksZT1nPT09dHx8Zz09PXN8fGc9PT1uO2UmJmIucmVtb3ZlQXR0cmlidXRlKGYpOzg+PWEuYS5qYSYmXG5mIGluIEY/KGY9RltmXSxlP2IucmVtb3ZlQXR0cmlidXRlKGYpOmJbZl09Zyk6ZXx8Yi5zZXRBdHRyaWJ1dGUoZixnLnRvU3RyaW5nKCkpfX19O2EuYy5oYXNmb2N1cz17aW5pdDpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZihiKXt2YXIgZT1jKCk7YS5nLiQoZSxkLFwiaGFzZm9jdXNcIixiLHApfWEuYS5uKGIsXCJmb2N1c1wiLGZ1bmN0aW9uKCl7ZihwKX0pO2EuYS5uKGIsXCJmb2N1c2luXCIsZnVuY3Rpb24oKXtmKHApfSk7YS5hLm4oYixcImJsdXJcIixmdW5jdGlvbigpe2YodCl9KTthLmEubihiLFwiZm9jdXNvdXRcIixmdW5jdGlvbigpe2YodCl9KX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpKTtkP2IuZm9jdXMoKTpiLmJsdXIoKTthLmEudmEoYixkP1wiZm9jdXNpblwiOlwiZm9jdXNvdXRcIil9fTthLmNbXCJ3aXRoXCJdPXtwOmZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBjPWIoKTtyZXR1cm57XCJpZlwiOmMsZGF0YTpjLHRlbXBsYXRlRW5naW5lOmEucS5LfX19LFxuaW5pdDpmdW5jdGlvbihiLGMpe3JldHVybiBhLmMudGVtcGxhdGUuaW5pdChiLGEuY1tcIndpdGhcIl0ucChjKSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCxmLGcpe3JldHVybiBhLmMudGVtcGxhdGUudXBkYXRlKGIsYS5jW1wid2l0aFwiXS5wKGMpLGQsZixnKX19O2EuZy5EW1wid2l0aFwiXT10O2EuZS5DW1wid2l0aFwiXT1wO2EuY1tcImlmXCJdPXtwOmZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybntcImlmXCI6YigpLHRlbXBsYXRlRW5naW5lOmEucS5LfX19LGluaXQ6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jLnRlbXBsYXRlLmluaXQoYixhLmNbXCJpZlwiXS5wKGMpKX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGYsZyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS51cGRhdGUoYixhLmNbXCJpZlwiXS5wKGMpLGQsZixnKX19O2EuZy5EW1wiaWZcIl09dDthLmUuQ1tcImlmXCJdPXA7YS5jLmlmbm90PXtwOmZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybntpZm5vdDpiKCksdGVtcGxhdGVFbmdpbmU6YS5xLkt9fX0sXG5pbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS5pbml0KGIsYS5jLmlmbm90LnAoYykpfSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZixnKXtyZXR1cm4gYS5jLnRlbXBsYXRlLnVwZGF0ZShiLGEuYy5pZm5vdC5wKGMpLGQsZixnKX19O2EuZy5ELmlmbm90PXQ7YS5lLkMuaWZub3Q9cDthLmMuZm9yZWFjaD17cDpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1hLmEuZChiKCkpO3JldHVybiFjfHxcIm51bWJlclwiPT10eXBlb2YgYy5sZW5ndGg/e2ZvcmVhY2g6Yyx0ZW1wbGF0ZUVuZ2luZTphLnEuS306e2ZvcmVhY2g6Yy5kYXRhLGluY2x1ZGVEZXN0cm95ZWQ6Yy5pbmNsdWRlRGVzdHJveWVkLGFmdGVyQWRkOmMuYWZ0ZXJBZGQsYmVmb3JlUmVtb3ZlOmMuYmVmb3JlUmVtb3ZlLGFmdGVyUmVuZGVyOmMuYWZ0ZXJSZW5kZXIsdGVtcGxhdGVFbmdpbmU6YS5xLkt9fX0saW5pdDpmdW5jdGlvbihiLGMpe3JldHVybiBhLmMudGVtcGxhdGUuaW5pdChiLGEuYy5mb3JlYWNoLnAoYykpfSxcbnVwZGF0ZTpmdW5jdGlvbihiLGMsZCxmLGcpe3JldHVybiBhLmMudGVtcGxhdGUudXBkYXRlKGIsYS5jLmZvcmVhY2gucChjKSxkLGYsZyl9fTthLmcuRC5mb3JlYWNoPXQ7YS5lLkMuZm9yZWFjaD1wO2EudD1mdW5jdGlvbigpe307YS50LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbigpe20oRXJyb3IoXCJPdmVycmlkZSByZW5kZXJUZW1wbGF0ZVNvdXJjZVwiKSl9O2EudC5wcm90b3R5cGUuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKCl7bShFcnJvcihcIk92ZXJyaWRlIGNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9ja1wiKSl9O2EudC5wcm90b3R5cGUubWFrZVRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsYyl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe3ZhciBjPWN8fGRvY3VtZW50LGQ9Yy5nZXRFbGVtZW50QnlJZChiKTtkfHxtKEVycm9yKFwiQ2Fubm90IGZpbmQgdGVtcGxhdGUgd2l0aCBJRCBcIitiKSk7cmV0dXJuIG5ldyBhLmwuaShkKX1pZigxPT1cbmIubm9kZVR5cGV8fDg9PWIubm9kZVR5cGUpcmV0dXJuIG5ldyBhLmwuTShiKTttKEVycm9yKFwiVW5rbm93biB0ZW1wbGF0ZSB0eXBlOiBcIitiKSl9O2EudC5wcm90b3R5cGUucmVuZGVyVGVtcGxhdGU9ZnVuY3Rpb24oYSxjLGQsZil7cmV0dXJuIHRoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2UodGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxmKSxjLGQpfTthLnQucHJvdG90eXBlLmlzVGVtcGxhdGVSZXdyaXR0ZW49ZnVuY3Rpb24oYSxjKXtyZXR1cm4gdGhpcy5hbGxvd1RlbXBsYXRlUmV3cml0aW5nPT09dHx8IShjJiZjIT1kb2N1bWVudCkmJnRoaXMuViYmdGhpcy5WW2FdP3A6dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxjKS5kYXRhKFwiaXNSZXdyaXR0ZW5cIil9O2EudC5wcm90b3R5cGUucmV3cml0ZVRlbXBsYXRlPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZj10aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGQpLGM9YyhmLnRleHQoKSk7Zi50ZXh0KGMpO2YuZGF0YShcImlzUmV3cml0dGVuXCIsXG5wKTshKGQmJmQhPWRvY3VtZW50KSYmXCJzdHJpbmdcIj09dHlwZW9mIGEmJih0aGlzLlY9dGhpcy5WfHx7fSx0aGlzLlZbYV09cCl9O2EuYihcInRlbXBsYXRlRW5naW5lXCIsYS50KTthLlo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxlKXtmb3IodmFyIGI9YS5nLlcoYiksZD1hLmcuRCxqPTA7ajxiLmxlbmd0aDtqKyspe3ZhciBrPWJbal0ua2V5O2lmKGQuaGFzT3duUHJvcGVydHkoaykpe3ZhciBpPWRba107XCJmdW5jdGlvblwiPT09dHlwZW9mIGk/KGs9aShiW2pdLnZhbHVlKSkmJm0oRXJyb3IoaykpOml8fG0oRXJyb3IoXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnXCIraytcIicgYmluZGluZyB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiKSl9fWI9XCJrby50ZW1wbGF0ZVJld3JpdGluZy5hcHBseU1lbW9pemVkQmluZGluZ3NUb05leHRTaWJsaW5nKGZ1bmN0aW9uKCkgeyAgICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uKCkgeyByZXR1cm4geyBcIithLmcua2EoYikrXG5cIiB9IH0pKCkgICAgICAgICB9KVwiO3JldHVybiBlLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jayhiKStjfXZhciBjPS8oPFthLXpdK1xcZCooXFxzKyg/IWRhdGEtYmluZD0pW2EtejAtOVxcLV0rKD0oXFxcIlteXFxcIl0qXFxcInxcXCdbXlxcJ10qXFwnKSk/KSpcXHMrKWRhdGEtYmluZD0oW1wiJ10pKFtcXHNcXFNdKj8pXFw1L2dpLGQ9LzxcXCEtLVxccyprb1xcYlxccyooW1xcc1xcU10qPylcXHMqLS1cXD4vZztyZXR1cm57bWI6ZnVuY3Rpb24oYixjLGUpe2MuaXNUZW1wbGF0ZVJld3JpdHRlbihiLGUpfHxjLnJld3JpdGVUZW1wbGF0ZShiLGZ1bmN0aW9uKGIpe3JldHVybiBhLlouemIoYixjKX0sZSl9LHpiOmZ1bmN0aW9uKGEsZyl7cmV0dXJuIGEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyxkLGYsaSxsLHEpe3JldHVybiBiKHEsYyxnKX0pLnJlcGxhY2UoZCxmdW5jdGlvbihhLGMpe3JldHVybiBiKGMsXCI8XFwhLS0ga28gLS1cXD5cIixnKX0pfSxaYTpmdW5jdGlvbihiKXtyZXR1cm4gYS5zLm5hKGZ1bmN0aW9uKGMsXG5lKXtjLm5leHRTaWJsaW5nJiZhLnlhKGMubmV4dFNpYmxpbmcsYixlKX0pfX19KCk7YS5iKFwidGVtcGxhdGVSZXdyaXRpbmdcIixhLlopO2EuYihcInRlbXBsYXRlUmV3cml0aW5nLmFwcGx5TWVtb2l6ZWRCaW5kaW5nc1RvTmV4dFNpYmxpbmdcIixhLlouWmEpOyhmdW5jdGlvbigpe2EubD17fTthLmwuaT1mdW5jdGlvbihhKXt0aGlzLmk9YX07YS5sLmkucHJvdG90eXBlLnRleHQ9ZnVuY3Rpb24oKXt2YXIgYj1hLmEubyh0aGlzLmkpLGI9XCJzY3JpcHRcIj09PWI/XCJ0ZXh0XCI6XCJ0ZXh0YXJlYVwiPT09Yj9cInZhbHVlXCI6XCJpbm5lckhUTUxcIjtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmlbYl07dmFyIGM9YXJndW1lbnRzWzBdO1wiaW5uZXJIVE1MXCI9PT1iP2EuYS5ZKHRoaXMuaSxjKTp0aGlzLmlbYl09Y307YS5sLmkucHJvdG90eXBlLmRhdGE9ZnVuY3Rpb24oYil7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGEuYS5mLmdldCh0aGlzLmksXCJ0ZW1wbGF0ZVNvdXJjZURhdGFfXCIrXG5iKTthLmEuZi5zZXQodGhpcy5pLFwidGVtcGxhdGVTb3VyY2VEYXRhX1wiK2IsYXJndW1lbnRzWzFdKX07YS5sLk09ZnVuY3Rpb24oYSl7dGhpcy5pPWF9O2EubC5NLnByb3RvdHlwZT1uZXcgYS5sLmk7YS5sLk0ucHJvdG90eXBlLnRleHQ9ZnVuY3Rpb24oKXtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXt2YXIgYj1hLmEuZi5nZXQodGhpcy5pLFwiX19rb19hbm9uX3RlbXBsYXRlX19cIil8fHt9O2IudWE9PT1uJiZiLmRhJiYoYi51YT1iLmRhLmlubmVySFRNTCk7cmV0dXJuIGIudWF9YS5hLmYuc2V0KHRoaXMuaSxcIl9fa29fYW5vbl90ZW1wbGF0ZV9fXCIse3VhOmFyZ3VtZW50c1swXX0pfTthLmwuaS5wcm90b3R5cGUubm9kZXM9ZnVuY3Rpb24oKXtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybihhLmEuZi5nZXQodGhpcy5pLFwiX19rb19hbm9uX3RlbXBsYXRlX19cIil8fHt9KS5kYTthLmEuZi5zZXQodGhpcy5pLFwiX19rb19hbm9uX3RlbXBsYXRlX19cIix7ZGE6YXJndW1lbnRzWzBdfSl9O1xuYS5iKFwidGVtcGxhdGVTb3VyY2VzXCIsYS5sKTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudFwiLGEubC5pKTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGVcIixhLmwuTSl9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQpe2Zvcih2YXIgZixjPWEuZS5uZXh0U2libGluZyhjKTtiJiYoZj1iKSE9PWM7KWI9YS5lLm5leHRTaWJsaW5nKGYpLCgxPT09Zi5ub2RlVHlwZXx8OD09PWYubm9kZVR5cGUpJiZkKGYpfWZ1bmN0aW9uIGMoYyxkKXtpZihjLmxlbmd0aCl7dmFyIGY9Y1swXSxnPWNbYy5sZW5ndGgtMV07YihmLGcsZnVuY3Rpb24oYil7YS54YShkLGIpfSk7YihmLGcsZnVuY3Rpb24oYil7YS5zLldhKGIsW2RdKX0pfX1mdW5jdGlvbiBkKGEpe3JldHVybiBhLm5vZGVUeXBlP2E6MDxhLmxlbmd0aD9hWzBdOnN9ZnVuY3Rpb24gZihiLGYsaixrLGkpe3ZhciBpPWl8fHt9LGw9YiYmZChiKSxsPWwmJmwub3duZXJEb2N1bWVudCxxPWkudGVtcGxhdGVFbmdpbmV8fFxuZzthLloubWIoaixxLGwpO2o9cS5yZW5kZXJUZW1wbGF0ZShqLGssaSxsKTsoXCJudW1iZXJcIiE9dHlwZW9mIGoubGVuZ3RofHwwPGoubGVuZ3RoJiZcIm51bWJlclwiIT10eXBlb2YgalswXS5ub2RlVHlwZSkmJm0oRXJyb3IoXCJUZW1wbGF0ZSBlbmdpbmUgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgRE9NIG5vZGVzXCIpKTtsPXQ7c3dpdGNoKGYpe2Nhc2UgXCJyZXBsYWNlQ2hpbGRyZW5cIjphLmUuWChiLGopO2w9cDticmVhaztjYXNlIFwicmVwbGFjZU5vZGVcIjphLmEuTmEoYixqKTtsPXA7YnJlYWs7Y2FzZSBcImlnbm9yZVRhcmdldE5vZGVcIjpicmVhaztkZWZhdWx0Om0oRXJyb3IoXCJVbmtub3duIHJlbmRlck1vZGU6IFwiK2YpKX1sJiYoYyhqLGspLGkuYWZ0ZXJSZW5kZXImJmkuYWZ0ZXJSZW5kZXIoaixrLiRkYXRhKSk7cmV0dXJuIGp9dmFyIGc7YS5yYT1mdW5jdGlvbihiKXtiIT1uJiYhKGIgaW5zdGFuY2VvZiBhLnQpJiZtKEVycm9yKFwidGVtcGxhdGVFbmdpbmUgbXVzdCBpbmhlcml0IGZyb20ga28udGVtcGxhdGVFbmdpbmVcIikpO1xuZz1ifTthLnFhPWZ1bmN0aW9uKGIsYyxqLGssaSl7aj1qfHx7fTsoai50ZW1wbGF0ZUVuZ2luZXx8Zyk9PW4mJm0oRXJyb3IoXCJTZXQgYSB0ZW1wbGF0ZSBlbmdpbmUgYmVmb3JlIGNhbGxpbmcgcmVuZGVyVGVtcGxhdGVcIikpO2k9aXx8XCJyZXBsYWNlQ2hpbGRyZW5cIjtpZihrKXt2YXIgbD1kKGspO3JldHVybiBhLmgoZnVuY3Rpb24oKXt2YXIgZz1jJiZjIGluc3RhbmNlb2YgYS56P2M6bmV3IGEueihhLmEuZChjKSksbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiP2IoZy4kZGF0YSk6YixnPWYoayxpLG8sZyxqKTtcInJlcGxhY2VOb2RlXCI9PWkmJihrPWcsbD1kKGspKX0scyx7ZGlzcG9zZVdoZW46ZnVuY3Rpb24oKXtyZXR1cm4hbHx8IWEuYS5mYShsKX0sZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOmwmJlwicmVwbGFjZU5vZGVcIj09aT9sLnBhcmVudE5vZGU6bH0pfXJldHVybiBhLnMubmEoZnVuY3Rpb24oZCl7YS5xYShiLGMsaixkLFwicmVwbGFjZU5vZGVcIil9KX07YS5GYj1mdW5jdGlvbihiLFxuZCxnLGssaSl7ZnVuY3Rpb24gbChhLGIpe2MoYixvKTtnLmFmdGVyUmVuZGVyJiZnLmFmdGVyUmVuZGVyKGIsYSl9ZnVuY3Rpb24gcShjLGQpe3ZhciBoPVwiZnVuY3Rpb25cIj09dHlwZW9mIGI/YihjKTpiO289aS5jcmVhdGVDaGlsZENvbnRleHQoYS5hLmQoYykpO28uJGluZGV4PWQ7cmV0dXJuIGYocyxcImlnbm9yZVRhcmdldE5vZGVcIixoLG8sZyl9dmFyIG87cmV0dXJuIGEuaChmdW5jdGlvbigpe3ZhciBiPWEuYS5kKGQpfHxbXTtcInVuZGVmaW5lZFwiPT10eXBlb2YgYi5sZW5ndGgmJihiPVtiXSk7Yj1hLmEuYWEoYixmdW5jdGlvbihiKXtyZXR1cm4gZy5pbmNsdWRlRGVzdHJveWVkfHxiPT09bnx8Yj09PXN8fCFhLmEuZChiLl9kZXN0cm95KX0pO2EuYS5PYShrLGIscSxnLGwpfSxzLHtkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6a30pfTthLmMudGVtcGxhdGU9e2luaXQ6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCkpO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBkJiYhZC5uYW1lJiZcbigxPT1iLm5vZGVUeXBlfHw4PT1iLm5vZGVUeXBlKSlkPTE9PWIubm9kZVR5cGU/Yi5jaGlsZE5vZGVzOmEuZS5jaGlsZE5vZGVzKGIpLGQ9YS5hLkFiKGQpLChuZXcgYS5sLk0oYikpLm5vZGVzKGQpO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczpwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGYsZyl7Yz1hLmEuZChjKCkpO2Y9cDtcInN0cmluZ1wiPT10eXBlb2YgYz9kPWM6KGQ9Yy5uYW1lLFwiaWZcImluIGMmJihmPWYmJmEuYS5kKGNbXCJpZlwiXSkpLFwiaWZub3RcImluIGMmJihmPWYmJiFhLmEuZChjLmlmbm90KSkpO3ZhciBsPXM7XCJvYmplY3RcIj09PXR5cGVvZiBjJiZcImZvcmVhY2hcImluIGM/bD1hLkZiKGR8fGIsZiYmYy5mb3JlYWNofHxbXSxjLGIsZyk6Zj8oZz1cIm9iamVjdFwiPT10eXBlb2YgYyYmXCJkYXRhXCJpbiBjP2cuY3JlYXRlQ2hpbGRDb250ZXh0KGEuYS5kKGMuZGF0YSkpOmcsbD1hLnFhKGR8fGIsZyxjLGIpKTphLmUuaGEoYik7Zz1sOyhjPWEuYS5mLmdldChiLFwiX19rb19fdGVtcGxhdGVTdWJzY3JpcHRpb25Eb21EYXRhS2V5X19cIikpJiZcblwiZnVuY3Rpb25cIj09dHlwZW9mIGMuQSYmYy5BKCk7YS5hLmYuc2V0KGIsXCJfX2tvX190ZW1wbGF0ZVN1YnNjcmlwdGlvbkRvbURhdGFLZXlfX1wiLGcpfX07YS5nLkQudGVtcGxhdGU9ZnVuY3Rpb24oYil7Yj1hLmcuVyhiKTtyZXR1cm4gMT09Yi5sZW5ndGgmJmJbMF0udW5rbm93bnx8YS5nLndiKGIsXCJuYW1lXCIpP3M6XCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IGFub255bW91cyB0ZW1wbGF0ZXMgbmVzdGVkIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCJ9O2EuZS5DLnRlbXBsYXRlPXB9KSgpO2EuYihcInNldFRlbXBsYXRlRW5naW5lXCIsYS5yYSk7YS5iKFwicmVuZGVyVGVtcGxhdGVcIixhLnFhKTsoZnVuY3Rpb24oKXthLmEuTz1mdW5jdGlvbihiLGMsZCl7aWYoZD09PW4pcmV0dXJuIGEuYS5PKGIsYywxKXx8YS5hLk8oYixjLDEwKXx8YS5hLk8oYixjLE51bWJlci5NQVhfVkFMVUUpO2Zvcih2YXIgYj1ifHxbXSxjPWN8fFtdLGY9YixnPWMsZT1bXSxoPTA7aDw9Zy5sZW5ndGg7aCsrKWVbaF09XG5bXTtmb3IodmFyIGg9MCxqPU1hdGgubWluKGYubGVuZ3RoLGQpO2g8PWo7aCsrKWVbMF1baF09aDtoPTE7Zm9yKGo9TWF0aC5taW4oZy5sZW5ndGgsZCk7aDw9ajtoKyspZVtoXVswXT1oO2Zvcih2YXIgaj1mLmxlbmd0aCxrLGk9Zy5sZW5ndGgsaD0xO2g8PWo7aCsrKXtrPU1hdGgubWF4KDEsaC1kKTtmb3IodmFyIGw9TWF0aC5taW4oaSxoK2QpO2s8PWw7aysrKWVba11baF09ZltoLTFdPT09Z1trLTFdP2Vbay0xXVtoLTFdOk1hdGgubWluKGVbay0xXVtoXT09PW4/TnVtYmVyLk1BWF9WQUxVRTplW2stMV1baF0rMSxlW2tdW2gtMV09PT1uP051bWJlci5NQVhfVkFMVUU6ZVtrXVtoLTFdKzEpfWQ9Yi5sZW5ndGg7Zj1jLmxlbmd0aDtnPVtdO2g9ZVtmXVtkXTtpZihoPT09billPXM7ZWxzZXtmb3IoOzA8ZHx8MDxmOyl7aj1lW2ZdW2RdO2k9MDxmP2VbZi0xXVtkXTpoKzE7bD0wPGQ/ZVtmXVtkLTFdOmgrMTtrPTA8ZiYmMDxkP2VbZi0xXVtkLTFdOmgrMTtpZihpPT09bnx8aTxqLTEpaT1cbmgrMTtpZihsPT09bnx8bDxqLTEpbD1oKzE7azxqLTEmJihrPWgrMSk7aTw9bCYmaTxrPyhnLnB1c2goe3N0YXR1czpcImFkZGVkXCIsdmFsdWU6Y1tmLTFdfSksZi0tKToobDxpJiZsPGs/Zy5wdXNoKHtzdGF0dXM6XCJkZWxldGVkXCIsdmFsdWU6YltkLTFdfSk6KGcucHVzaCh7c3RhdHVzOlwicmV0YWluZWRcIix2YWx1ZTpiW2QtMV19KSxmLS0pLGQtLSl9ZT1nLnJldmVyc2UoKX1yZXR1cm4gZX19KSgpO2EuYihcInV0aWxzLmNvbXBhcmVBcnJheXNcIixhLmEuTyk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhKXtpZigyPGEubGVuZ3RoKXtmb3IodmFyIGI9YVswXSxjPWFbYS5sZW5ndGgtMV0sZT1bYl07YiE9PWM7KXtiPWIubmV4dFNpYmxpbmc7aWYoIWIpcmV0dXJuO2UucHVzaChiKX1BcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGEsWzAsYS5sZW5ndGhdLmNvbmNhdChlKSl9fWZ1bmN0aW9uIGMoYyxmLGcsZSxoKXt2YXIgaj1bXSxjPWEuaChmdW5jdGlvbigpe3ZhciBjPWYoZyxoKXx8XG5bXTswPGoubGVuZ3RoJiYoYihqKSxhLmEuTmEoaixjKSxlJiZlKGcsYykpO2ouc3BsaWNlKDAsai5sZW5ndGgpO2EuYS5OKGosYyl9LHMse2Rpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDpjLGRpc3Bvc2VXaGVuOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PWoubGVuZ3RofHwhYS5hLmZhKGpbMF0pfX0pO3JldHVybnt4YjpqLGg6Y319YS5hLk9hPWZ1bmN0aW9uKGQsZixnLGUsaCl7Zm9yKHZhciBmPWZ8fFtdLGU9ZXx8e30saj1hLmEuZi5nZXQoZCxcInNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdfbGFzdE1hcHBpbmdSZXN1bHRcIik9PT1uLGs9YS5hLmYuZ2V0KGQsXCJzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nX2xhc3RNYXBwaW5nUmVzdWx0XCIpfHxbXSxpPWEuYS5UKGssZnVuY3Rpb24oYSl7cmV0dXJuIGEuJGF9KSxsPWEuYS5PKGksZiksZj1bXSxxPTAsbz1bXSx2PTAsaT1bXSx1PXMscj0wLHc9bC5sZW5ndGg7cjx3O3IrKylzd2l0Y2gobFtyXS5zdGF0dXMpe2Nhc2UgXCJyZXRhaW5lZFwiOnZhciB5PVxua1txXTt5LnFiKHYpO3Y9Zi5wdXNoKHkpOzA8eS5QLmxlbmd0aCYmKHU9eS5QW3kuUC5sZW5ndGgtMV0pO3ErKzticmVhaztjYXNlIFwiZGVsZXRlZFwiOmtbcV0uaC5BKCk7YihrW3FdLlApO2EuYS52KGtbcV0uUCxmdW5jdGlvbihhKXtvLnB1c2goe2VsZW1lbnQ6YSxpbmRleDpyLHZhbHVlOmxbcl0udmFsdWV9KTt1PWF9KTtxKys7YnJlYWs7Y2FzZSBcImFkZGVkXCI6Zm9yKHZhciB5PWxbcl0udmFsdWUseD1hLm0odiksdj1jKGQsZyx5LGgseCksQz12LnhiLHY9Zi5wdXNoKHskYTpsW3JdLnZhbHVlLFA6QyxoOnYuaCxxYjp4fSksej0wLEI9Qy5sZW5ndGg7ejxCO3orKyl7dmFyIEQ9Q1t6XTtpLnB1c2goe2VsZW1lbnQ6RCxpbmRleDpyLHZhbHVlOmxbcl0udmFsdWV9KTt1PT1zP2EuZS5LYShkLEQpOmEuZS5GYShkLEQsdSk7dT1EfWgmJmgoeSxDLHgpfWEuYS52KG8sZnVuY3Rpb24oYil7YS5GKGIuZWxlbWVudCl9KTtnPXQ7aWYoIWope2lmKGUuYWZ0ZXJBZGQpZm9yKHI9MDtyPGkubGVuZ3RoO3IrKyllLmFmdGVyQWRkKGlbcl0uZWxlbWVudCxcbmlbcl0uaW5kZXgsaVtyXS52YWx1ZSk7aWYoZS5iZWZvcmVSZW1vdmUpe2ZvcihyPTA7cjxvLmxlbmd0aDtyKyspZS5iZWZvcmVSZW1vdmUob1tyXS5lbGVtZW50LG9bcl0uaW5kZXgsb1tyXS52YWx1ZSk7Zz1wfX1pZighZyYmby5sZW5ndGgpZm9yKHI9MDtyPG8ubGVuZ3RoO3IrKyllPW9bcl0uZWxlbWVudCxlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKTthLmEuZi5zZXQoZCxcInNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdfbGFzdE1hcHBpbmdSZXN1bHRcIixmKX19KSgpO2EuYihcInV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdcIixhLmEuT2EpO2EucT1mdW5jdGlvbigpe3RoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz10fTthLnEucHJvdG90eXBlPW5ldyBhLnQ7YS5xLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiKXt2YXIgYz0hKDk+YS5hLmphKSYmYi5ub2Rlcz9iLm5vZGVzKCk6cztcbmlmKGMpcmV0dXJuIGEuYS5MKGMuY2xvbmVOb2RlKHApLmNoaWxkTm9kZXMpO2I9Yi50ZXh0KCk7cmV0dXJuIGEuYS5wYShiKX07YS5xLks9bmV3IGEucTthLnJhKGEucS5LKTthLmIoXCJuYXRpdmVUZW1wbGF0ZUVuZ2luZVwiLGEucSk7KGZ1bmN0aW9uKCl7YS5tYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMudmI9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgalF1ZXJ5fHwhalF1ZXJ5LnRtcGwpcmV0dXJuIDA7dHJ5e2lmKDA8PWpRdWVyeS50bXBsLnRhZy50bXBsLm9wZW4udG9TdHJpbmcoKS5pbmRleE9mKFwiX19cIikpcmV0dXJuIDJ9Y2F0Y2goYSl7fXJldHVybiAxfSgpO3RoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixmLGcpe2c9Z3x8e307Mj5hJiZtKEVycm9yKFwiWW91ciB2ZXJzaW9uIG9mIGpRdWVyeS50bXBsIGlzIHRvbyBvbGQuIFBsZWFzZSB1cGdyYWRlIHRvIGpRdWVyeS50bXBsIDEuMC4wcHJlIG9yIGxhdGVyLlwiKSk7dmFyIGU9Yi5kYXRhKFwicHJlY29tcGlsZWRcIik7XG5lfHwoZT1iLnRleHQoKXx8XCJcIixlPWpRdWVyeS50ZW1wbGF0ZShzLFwie3trb193aXRoICRpdGVtLmtvQmluZGluZ0NvbnRleHR9fVwiK2UrXCJ7ey9rb193aXRofX1cIiksYi5kYXRhKFwicHJlY29tcGlsZWRcIixlKSk7Yj1bZi4kZGF0YV07Zj1qUXVlcnkuZXh0ZW5kKHtrb0JpbmRpbmdDb250ZXh0OmZ9LGcudGVtcGxhdGVPcHRpb25zKTtmPWpRdWVyeS50bXBsKGUsYixmKTtmLmFwcGVuZFRvKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO2pRdWVyeS5mcmFnbWVudHM9e307cmV0dXJuIGZ9O3RoaXMuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKGEpe3JldHVyblwie3trb19jb2RlICgoZnVuY3Rpb24oKSB7IHJldHVybiBcIithK1wiIH0pKCkpIH19XCJ9O3RoaXMuYWRkVGVtcGxhdGU9ZnVuY3Rpb24oYSxiKXtkb2N1bWVudC53cml0ZShcIjxzY3JpcHQgdHlwZT0ndGV4dC9odG1sJyBpZD0nXCIrYStcIic+XCIrYitcIjxcXC9zY3JpcHQ+XCIpfTswPGEmJihqUXVlcnkudG1wbC50YWcua29fY29kZT1cbntvcGVuOlwiX18ucHVzaCgkMSB8fCAnJyk7XCJ9LGpRdWVyeS50bXBsLnRhZy5rb193aXRoPXtvcGVuOlwid2l0aCgkMSkge1wiLGNsb3NlOlwifSBcIn0pfTthLm1hLnByb3RvdHlwZT1uZXcgYS50O3ZhciBiPW5ldyBhLm1hOzA8Yi52YiYmYS5yYShiKTthLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixhLm1hKX0pKCl9XCJmdW5jdGlvblwiPT09dHlwZW9mIHJlcXVpcmUmJlwib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/RShtb2R1bGUuZXhwb3J0c3x8ZXhwb3J0cyk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxFKTpFKHdpbmRvdy5rbz17fSk7cDtcbn0pKHdpbmRvdyxkb2N1bWVudCxuYXZpZ2F0b3IpO1xuIl19
;