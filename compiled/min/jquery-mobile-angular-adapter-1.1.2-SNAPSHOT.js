(function(e){typeof define=="function"&&define.amd?define(["jquery","angular","jquery.mobile"],e):e(window.jQuery,window.angular)})(function(e,t){(function(e){function t(e,t,n){var r=e[t];e[t]=function(){return n(r,this,arguments)}}t(e.mobile.selectmenu.prototype,"destroy",function(e,t,n){e.apply(t,n);var r=t.menuPage,i=t.screen,s=t.listbox;r&&r.remove(),i&&i.remove(),s&&s.remove()}),e.mobile.selectmenu.prototype.placeholder="",t(e.mobile.listview.prototype,"destroy",function(t,n,r){var i=n.element.attr("id"),s=new RegExp(e.mobile.subPageUrlKey+"="+i+"-"),o=n.childPages();t.apply(n,r);for(var u=0;u<o.length;u++){var a=e(o[u]),f=a.attr("data-url");f.match(s)&&a.remove()}}),t(e.mobile.listview.prototype,"refresh",function(e,t,n){return t.element.filter(":visible").length===0?e.call(t,!0):e.apply(t,n)}),e.fn.controlgroup&&e(document).bind("pagecreate create",function(t){e(":jqmData(role='controlgroup')",t.target).jqmEnhanceable().controlgroup({excludeInvisible:!1})}),t(e.fn,"controlgroup",function(e,t,n){if(t.filter(":visible").length===0){var r=n[0]||{};return r.excludeInvisible=!1,e.call(t,r)}return e.apply(t,n)});var n=e.fn.collapsible,r="ui-collapsible-content";e.fn.collapsible=function(){var e=this.find(".ui-collapsible-content");e.removeClass(r);try{return n.apply(this,arguments)}finally{e.addClass(r)}},t(e.mobile.navbar.prototype,"_create",function(t,n,r){var i=e.fn.find,s=n.element,o;e.fn.find=function(e){var t=i.apply(this,arguments);return e==="a"&&s.data("$navbtns",t),t};try{return t.apply(n,r)}finally{e.fn.find=i}}),e.mobile.navbar.prototype.refresh=function(){var t=this.element,n=t.data("$navbtns");n.splice(0,n.length),e.each(t.find("a"),function(e,t){n.push(t)});var r=n.filter(":jqmData(icon)").length?this.options.iconpos:undefined,i=t.find("ul"),s=i.children("li");i.removeClass(function(e,t){return(t.match(/\bui-grid-\S+/g)||[]).join(" ")}),s.removeClass(function(e,t){return(t.match(/\bui-block-\S+/g)||[]).join(" ")}),i.jqmEnhanceable().grid({grid:this.options.grid}),n.buttonMarkup({corners:!1,shadow:!1,inline:!0,iconpos:r})}})(e),function(e,t){function r(t,n){var r=e("<div>"+t+"</div>");return n(r.contents()),r.html()}var n=t.module("ng");n.factory("$precompile",function(){return function(e){return e}}),n.config(["$provide",function(e){e.decorator("$compile",["$precompile","$delegate",function(e,t){return function(){return arguments[0]=e(arguments[0]),t.apply(this,arguments)}}])}]),n.config(["$compileProvider","$provide",function(e,t){var n={},i=e.directive;e.directive=function(e,t){var s=function(e,i){var s=i.invoke(t);return s.template?s.template=r(s.template,e):s.templateUrl&&(n[s.templateUrl]=!0),s};return i.call(this,e,["$precompile","$injector",s])},t.decorator("$http",["$q","$delegate","$precompile",function(e,t,i){var s=t.get;return t.get=function(e){var t=s.apply(this,arguments);if(n[e]){var o=t.success;t.success=function(e){var t=function(){var t=arguments[0];return arguments[0]=r(t,i),e.apply(this,arguments)};return o(t)}}return t},t}])}])}(e,t),function(e){var t=e.module("ng");t.config(["$provide",function(e){e.decorator("$rootScope",["$delegate",function(e){return e.$disconnect=function(){if(this.$root==this)return;var e=this.$parent;this.$$disconnected=!0,e.$$childHead==this&&(e.$$childHead=this.$$nextSibling),e.$$childTail==this&&(e.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$$nextSibling=this.$$prevSibling=null},e.$reconnect=function(){if(this.$root==this)return;var e=this;if(!e.$$disconnected)return;var t=e.$parent;e.$$disconnected=!1,e.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=e,t.$$childTail=e):t.$$childHead=t.$$childTail=e},e}])}])}(t),function(e){var t=e.module("ng");t.config(["$provide",function(e){e.decorator("$rootScope",["$delegate",function(e){var t=e.$apply;e.$apply=function(){return e.$$phase?e.$eval.apply(this,arguments):t.apply(this,arguments)};var n=!1,r=e.$digest;return e.$digest=function(){if(e.$$phase)return;var t=r.apply(this,arguments)},e}])}])}(t),function(e,t){function s(e,t){if(!e.parentNode)return t();while(e.parentNode&&e.parentNode.nodeType===1)e=e.parentNode;var n=e.parentNode;n!==document&&document.documentElement.appendChild(e);try{return t()}finally{n!==document&&n.appendChild(e)}}function u(t,n){a(t,function(){if(h()){var r=Array.prototype.slice.call(arguments),i=this;for(var s=0;s<i.length;s++){var o=i.eq(s),u=o;n&&(u=n(o,r)||u);var a=u.attr("ngm-create")||"{}",f=JSON.parse(a);f[t]=r,u.attr("ngm-create",JSON.stringify(f));var l=o.attr("ngm-link")||"{}",p=JSON.parse(l);p[t]=!0,o.attr("ngm-link",JSON.stringify(p))}}return c()?!1:e.fn.orig[t].apply(this,arguments)})}function a(t,n){e.fn.orig[t]=e.fn.orig[t]||e.fn[t],e.fn[t]=n}function l(e,t){if(!t)return f[e];var n=f[e];f[e]=!0;var r=t();return f[e]=n,r}function c(e){return l("preventJqmWidgetCreation",e)}function h(e){return l("markJqmWidgetCreation",e)}function p(t){c(function(){var n=e.mobile.page.prototype.widgetEventPrefix;e.mobile.page.prototype.widgetEventPrefix="noop",t.page(),e.mobile.page.prototype.widgetEventPrefix=n})}var n=t.module("ng");e.mobile.autoInitializePage=!1;var r=[],i=!1;n.config(["$provide",function(t){t.decorator("$rootScope",["$delegate",function(t){var n=t.$digest,s;return t.$digest=function(){if(this===t){var o=e.mobile.activePage,u=o&&o.scope();s&&s!==u&&s.$disconnect(),s=u,u&&u.$reconnect()}var a=n.apply(this,arguments);if(this===t){var f=r.length;while(r.length){var l=r.shift();l.$disconnect()}f&&!i&&(i=!0,e.mobile.initializePage(),t.$broadcast("jqmInit"))}return a},t}])}]),n.factory("$precompile",function(){var e=':jqmData(role="page"), :jqmData(role="dialog")';return function(t){var n=t[0].parentNode;s(t[0],function(){var n=t.find(e).add(t.filter(e));n.attr("ngm-page","true"),h(function(){c(function(){n.length>0?n.page():t.parent().trigger("create")})}),n.page("destroy")});while(t[0].parentNode!==n)t=t.eq(0).parent();return t}}),n.directive("ngmPage",function(){return{restrict:"A",scope:!0,compile:function(t,n){return t.removeAttr("ngm-page"),{pre:function(t,n,i){p(n),r.push(t),n.bind("pagebeforeshow",function(n){var r=e(n.target);t.$emit("jqmPagebeforeshow",r),t.$root.$digest()})}}}}}),n.run(["$rootScope","$compile",function(t,n){a("page",function(){return!c()&&!this.data("page")&&this.attr("data-"+e.mobile.ns+"external-page")&&n(this)(t),e.fn.orig.page.apply(this,arguments)})}]),e.mobile.registerJqmNgWidget=function(e,t){o[e]=t,u(e,t.precompile)};var o={};n.directive("ngmCreate",function(){return{restrict:"A",priority:0,compile:function(t,n){var r=JSON.parse(n.ngmCreate);return{post:function(t,n,i,s){var u,a,f,l;for(u in r)a=o[u],f=r[u],l=e.fn.orig[u],a.create?a.create(l,n,f):l.apply(n,f)}}}}}),n.directive("ngmLink",["$injector",function(e){return{restrict:"A",priority:0,require:["?ngModel"],compile:function(t,n){var r=JSON.parse(n.ngmLink);return{post:function(t,n,i,s){var u,a;for(u in r)a=o[u],a.link(t,n,i,s,e)}}}}}]),e.fn.orig={};var f={}}(e,t),function(e,t){function r(e,t){return function(n){var r=Array.prototype.slice.call(arguments);r.unshift(e),r.push(n);for(var i=0;i<t.length;i++)t[i].apply(this,r)}}function o(e,t,n){var r=t.children().eq(0);e.apply(r,n)}function u(e,n){var r=t(e).closest("label"),i=t(e).closest("form,fieldset,:jqmData(role='page'),:jqmData(role='dialog')");i.length===0&&(i=e.parent());var s=r.length?r:i.find("label").filter("[for='"+e[0].id+"']"),o=e.parent();o[0].tagName.toUpperCase()!=="FIELDSET"&&e.wrap("<fieldset></fieldset>");var u=e.parent();return u.append(s),b(e,u),u}function a(e,t,n){var r=t.children().eq(0);e.apply(r,n)}function f(e,t,n){var r=t.children().eq(0),i=r.contents(),s=h(e,t,n),o=t.find("span span");return o.empty(),o.append(i),s}function l(e,t){return e.is("[type='search'],:jqmData(type='search')")?c(e,t):e}function c(e,t){e.wrapAll("<div></div>");var n=e.parent();return b(e,n),n}function h(e,t,n){if(t[0].nodeName.toUpperCase()!=="DIV")return e.apply(t,n);if(v(e))return e.apply(t,n);var r=t.children().eq(0);return r.insertBefore(t),t.empty(),m(t,function(){return e.apply(r,n)})}function p(e,n){var r=t.mobile.dialog.prototype.options,i=t("<a href='#' data-"+t.mobile.ns+"icon='delete' data-"+t.mobile.ns+"iconpos='notext'>"+r.closeBtnText+"</a>");return e.find(":jqmData(role='header')").prepend(i),e.data("headerCloseButton",i),e}function d(e,t,n){if(v(e))return e.apply(t,n);var r=t.data("headerCloseButton");return m(r,function(){return e.apply(t,n)})}function v(e){return e.isSpy&&e.originalValue!==e.plan}function m(e,n){function u(e){if(e){var n=t(e),r=n[0].nodeName.toUpperCase(),i=o[r];if(i)return delete o[r],i[0].className+=" "+n[0].className,i}return!1}var r,i,s,o={};for(r=0;r<e.length;r++)i=e.eq(r),i[0].parentNode.removeChild(i[0]),s=i[0].nodeName.toUpperCase(),o[s]=i;var a=g(t.fn,{init:function(e,t,n){var r=n[0];if(typeof r=="string"&&r.charAt(0)==="<"){var i=u(r);if(i)return i}return e.apply(t,n)},wrap:function(e,t,n){var r=n[0],i=u(r);return i?(i.insertBefore(t),i.append(t),t):e.apply(t,n)},wrapAll:function(e,t,n){var r=n[0],i=u(r);return i?(i.insertBefore(t),i.append(t),t):e.apply(t,n)}},n);for(s in o)throw new Error("existing element with tagName "+s+" was not used!");return a}function g(e,t,n){function s(n){var s=r[n]=e[n];s.restore=function(){e[n]=s,delete s.restore},e[n]=function(){if(i)return s.apply(this,arguments);i++;try{return t[n](s,this,arguments)}finally{i--}},e[n].prototype=s.prototype}var r={},i=0,o;for(o in t)s(o);try{return n()}finally{for(o in r)r[o].restore&&r[o].restore()}}function b(e,t){var n=[],r=e[0],i=t[0],s=r.attributes,o=s&&s.length;if(o)for(var u,a,f=o-1;f>=0;f--)u=s[f],a=u.name,y.test(a)&&(r.removeAttributeNode(u),i.setAttributeNode(u));var l="",c=r.className,h;c&&(c=c.replace(/[^;]+;?/,function(e){return y.test(e)?(l+=e,""):e})),l&&(i.className=l,r.className=c)}function w(e,t,n,r,i){r.$observe("disabled",function(t){t?n[e]("disable"):n[e]("enable")})}function E(e,t,n,r,i,s){var o=s.get("$parse");if(r.collapsed){var u=o(r.collapsed),a=u.assign;t.$watch(u,function(e){e?n.trigger("collapse"):n.trigger("expand")}),a&&(n.bind("collapse",function(){t.$apply(function(){a(t,!0)})}),n.bind("expand",function(){t.$apply(function(){a(t,!1)})}))}}function S(e,t,n,r,i){r.$observe("checked",function(r){k(e,t,n,"refresh")})}function x(e,t,n){var r="_listeners"+t;if(!e[r]){e[r]=[];var i=e[t];e[t]=function(){var t=i.apply(this,arguments);for(var n=0;n<e[r].length;n++)e[r][n]();return t}}e[r].push(n)}function T(e,t,n,r,i){var s=i[0];s&&x(s,"$render",function(){k(e,t,n,"refresh")})}function N(e,t,n,r,i){n.bind("$childrenChanged",function(){k(e,t,n,{})})}function C(e,t,n,r,i){n.bind("$childrenChanged",function(){k(e,t,n,"refresh")})}function k(e,t,n,r){var i="_refresh"+e,s=(n.data(i)||0)+1;n.data(i,s),t.$evalAsync(function(){n.data(i)===s&&n[e](r)})}var n={checkboxradio:{handlers:[w,T,S],precompile:u,create:a},button:{handlers:[w],precompile:c,create:f},collapsible:{handlers:[w,E]},textinput:{handlers:[w],precompile:l,create:h},slider:{handlers:[w,T],precompile:c,create:o},listview:{handlers:[C]},collapsibleset:{handlers:[C]},selectmenu:{handlers:[w,T,C],precompile:c,create:h},controlgroup:{handlers:[N]},navbar:{handlers:[C]},dialog:{handlers:[],precompile:p,create:d},fixedtoolbar:{handlers:[]}},i;for(var s in n)i=n[s],i.link=r(s,i.handlers),t.mobile.registerJqmNgWidget(s,i);var y=/(^|[\W])(repeat|switch-when|if)($|[\W])/;t.mobile.moveCloningDirectives=b}(t,e),function(e,t){function r(e){e.decorator("$browser",["$delegate","$history",function(e,t){e.origBaseHref=e.baseHref,e.baseHref=function(){var t=e.origBaseHref.apply(this,arguments);return t.replace(/\?[^#]*/,"")};var n=e.url;return e.url=function(e,r){var i=r==="back";i&&(r=!1);var s=n.call(this,r);return e&&t.onUrlChangeProgrammatically(e,r,i),n.apply(this,arguments)},e.onUrlChange(function(e){t.onUrlChangeBrowser(e)}),e}]),e.decorator("$location",["$delegate",function(e){return e.routeOverride=function(t){return e.$$routeOverride=t,this},e}])}function i(){t.mobile.pushStateEnabled=!1,t.mobile.hashListeningEnabled=!1,t.mobile.linkBindingEnabled=!1,t.mobile.changePage.defaults.changeHash=!1,t.support.dynamicBaseTag&&(t.support.dynamicBaseTag=!1,t.mobile.base.set=function(){})}function o(e){return e.substr(0,e.lastIndexOf("/"))}var n=e.module("ng");t.mobile._registerBrowserDecorator=r,n.config(["$provide",function(e){r(e)}]),i(),n.config(["$locationProvider",function(e){e.html5Mode(!0)}]),n.directive("ngView",function(){throw new Error("ngView is not allowed and not needed with the jqm adapter.")});var s="DEFAULT_JQM_PAGE";n.config(["$routeProvider",function(e){var t=e.when;e.when=function(e,n){if(!n.templateUrl&&!n.redirectTo)throw new Error("Only routes with templateUrl or redirectTo are allowed with the jqm adapter!");if(n.controller)throw new Error("Controllers are not allowed on routes with the jqm adapter. However, you may use the onActivate parameter");return t.apply(this,arguments)},e.otherwise({templateUrl:s})}]),n.run(["$route","$rootScope","$location","$browser","$history",function(n,r,i,u,a){var f=["templateUrl","jqmOptions","onActivate"];r.$on("$routeChangeStart",function(t,n){var r=i.$$routeOverride;delete i.$$routeOverride,r&&(e.forEach(f,function(e){r[e]&&(n[e]=r[e])}),n.resolve=n.resolve||{},e.forEach(r.locals,function(e,t){n.resolve[t]=function(){return e}})),n.ngmTemplateUrl=n.templateUrl,n.templateUrl=undefined}),r.$on("jqmPagebeforeshow",function(e){var t=n.current;t&&t.onActivate&&e.targetScope[t.onActivate].call(e.targetScope,t.locals)}),r.$on("$routeChangeSuccess",function(){function p(){t.mobile.changePage(c,h)}var f=n.current,l=t(document),c=f.ngmTemplateUrl;if(c===s){var c=i.url();c.indexOf("/")===-1?c=u.origBaseHref()+c:c=o(u.baseHref())+c}if(!c)return;var h={};a.fromUrlChange&&(h.fromHashChange=!0),f.jqmOptions&&e.extend(h,f.jqmOptions),t.mobile.pageContainer?p():r.$on("jqmInit",p)})}]),n.directive("a",function(){return{restrict:"E",compile:function(e,t){e.attr("href")==="#"&&t.$set("href","")}}})}(t,e),function(e,t){var n=t.module("ng");n.config(["$provide",function(e){e.decorator("$location",["$delegate","$history",function(e,t){return e.backMode=function(){return e.$$replace="back",this},e.goBack=function(){if(t.activeIndex<=0)throw new Error("There is no page in the history to go back to!");return this.$$parse(t.urlStack[t.activeIndex-1]),this.backMode(),this},e}])}]),n.factory("$history",function(){function t(e){window.history.go(e)}function n(t){e.activeIndex=e.urlStack.indexOf(t),e.activeIndex===-1?r(t,!1):e.fromUrlChange=!0}function r(t,n,r){if(r){var i=e.activeIndex,s=e.urlStack.lastIndexOf(t,i-1);if(s!==-1&&i!==-1){e.activeIndex=s,e.fromUrlChange=!0,e.go(s-i-1);return}}if(e.urlStack[e.activeIndex]===t)return;e.fromUrlChange=!1,n||e.activeIndex++,e.urlStack.splice(e.activeIndex,e.urlStack.length-e.activeIndex),e.urlStack.push(t)}var e;return e={go:t,urlStack:[],activeIndex:-1,fromUrlChange:!1,onUrlChangeProgrammatically:r,onUrlChangeBrowser:n}})}(window.jQuery,window.angular),function(e,t){function n(e,t){if(!!e^!!t)return!1;for(var n in e)if(t[n]!==e[n])return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}function r(e){if(!e)return e;var t;e.length?t=[]:t={};for(var n in e)t[n]=e[n];return t}var i=t.module("ng");i.directive("ngRepeat",function(){return{priority:1e3,compile:function(e,t,i){return{pre:function(e,t,i){var s=i.ngRepeat,o=s.match(/^.+in\s+(.*)\s*$/);if(!o)throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '"+s+"'.");var u=o[1],a,f=0;e.$watch(function(){var t=e.$eval(u);return n(t,a)||(a=r(t),f++),f},function(){t.parent().trigger("$childrenChanged")})}}}}})}(e,t),function(e,t){function n(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t.sort()}var r=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,i=t.module("ng");i.directive("ngOptions",["$parse",function(e){return{require:["select","?ngModel"],link:function(t,i,s,o){function v(){var e=[],r,i=d(t)||[],s=c?n(i):i,o,u,a={};for(u=0;o=s.length,u<o;u++){var p=i[u];a[l]=i[c?a[c]=s[u]:u],r=h(t,a),e.push({id:c?s[u]:u,label:f(t,a),optionGroup:r})}return e}if(!o[1])return;var u,a=s.ngOptions;if(!(u=a.match(r)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+a+"'.");var f=e(u[2]||u[1]),l=u[4]||u[6],c=u[5],h=e(u[3]||""),p=e(u[2]?u[1]:l),d=e(u[7]);t.$watch(v,function(){i.trigger("$childrenChanged")},!0)}}}])}(e,t),function(e){var t=e.module("ng");t.directive("option",["$interpolate",function(e){return{restrict:"E",compile:function(t,n){var r=e(t.text(),!0),i=e(t.attr("value"),!0);return function(e,t,n){e.$watch(r,function(){t.trigger("$childrenChanged")}),e.$watch(i,function(){t.trigger("$childrenChanged")})}}}}])}(t),function(t){var n=t.module("ng");n.directive("li",function(){return{restrict:"E",compile:function(t,n){return function(t,n,r){n.bind("$childrenChanged",function(){n.removeClass("ui-li");var t=n.data("buttonElements");if(t){var r=t.text;while(r.firstChild)n[0].appendChild(r.firstChild);e(t.inner).remove()}n.removeData("buttonElements")})}}}})}(t),function(e){var t=e.module("ng");t.directive("ngSwitch",function(){return{restrict:"EA",compile:function(e,t){var n=t.ngSwitch||t.on;return function(e,t){e.$watch(n,function(e){t.trigger("$childrenChanged")})}}}})}(t),function(e){var t=e.module("ng");t.directive("ngInclude",function(){return{restrict:"ECA",compile:function(e,t){var n=t.ngInclude||t.src;return function(e,t){e.$watch(n,function(e){t.trigger("$childrenChanged")}),e.$on("$includeContentLoaded",function(){t.trigger("$childrenChanged")})}}}})}(t),function(e,t){function r(){return{restrict:"E",require:"?ngModel",compile:function(e,t){var n=e.attr("type");return{pre:function(e,t,r,i){if(!i)return;var s=[];n==="date"&&s.push("blur"),s.push("change");var o=t.bind;t.bind=function(e,t){if(e.indexOf("input")!=-1||e.indexOf("change")!=-1)for(var n=0;n<s.length;n++){var r=s[n];e.indexOf(r)===-1&&(e+=" "+r)}return o.call(this,e,t)}}}}}}var n=t.module("ng");n.directive("input",r),n.directive("textarea",r)}(e,t),function(e){var t={transclude:"element",priority:1e3,terminal:!0,compile:function(e,t,n){return function(e,t,r){t[0].doNotMove=!0;var i=r.ngmIf,s,o;e.$watch(i,function(r){s&&(s.remove(),s=null),o&&o.$destroy(),r&&(o=e.$new(),n(o,function(e){s=e,t.after(e)})),t.parent().trigger("$childrenChanged")})}}},n=e.module("ng");n.directive("ngmIf",function(){return t})}(t),function(e){function n(e,t,n,r){t.bind(n,function(i){var s=e.$apply(r,t);n.charAt(0)=="v"&&i.preventDefault()})}function r(e,r){t.directive(e,function(){return function(t,i,s){var o=s[e];n(t,i,r,o)}})}var t=e.module("ng"),i=["tap","taphold","swipe","swiperight","swipeleft","vmouseover","vmouseout","vmousedown","vmousemove","vmouseup","vclick","vmousecancel","orientationchange","scrollstart","scrollend","pagebeforeshow","pagebeforehide","pageshow","pagehide"],s,o,u;for(u=0;u<i.length;u++)s=i[u],o="ngm"+s.substring(0,1).toUpperCase()+s.substring(1),r(o,s)}(t),function(e,t){function n(e){var t=e.indexOf(":");return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]}var r=t.module("ng");r.factory("$navigate",["$location",function(e){function t(t,r,i){var s;typeof t=="object"&&(s=t,t=s.target);var o=n(t),u=!1;o.length===2&&o[0]==="back"?(u=!0,t=o[1]):o.length===2&&(s={transition:o[0]},t=o[1]),t==="back"?e.goBack():(u&&e.backMode(),e.url(t)),e.routeOverride({jqmOptions:s,onActivate:r,locals:i})}return t}])}(e,t),function(e){function n(e){return e[t]=e[t]||{}}function r(e,t,r,i){var s=n(e),o=s[t];return o||(o=e.$new(),r(t,{$scope:o}),s[t]=o,o.$$referenceCount=0),o.$$referenceCount++,i.bind("$destroy",function(){o.$$referenceCount--,o.$$referenceCount===0&&(o.$destroy(),delete s[t])}),o}function i(e){var t=/([^\s,:]+)\s*:\s*([^\s,:]+)/g,n,r=!1,i={};while(n=t.exec(e))r=!0,i[n[1]]=n[2];if(!r)throw"Expression "+e+" needs to have the syntax <name>:<controller>,...";return i}var t="$$sharedControllers",s=e.module("ng");s.directive("ngmSharedController",["$controller",function(e){return{scope:!0,compile:function(t,n){var s=n.ngmSharedController,o=i(s),u=function(n){for(var i in o)n[i]=r(n.$root,o[i],e,t)};return{pre:u}}}}])}(t),function(e,t){function n(t){function r(e){var r=n[n.length-1];r.callback&&t.$apply(function(){r.callback.apply(this,arguments)}),e.preventDefault()}function s(){if(n.length>0){var t=n[n.length-1],r=t.msg;r?e.mobile.loading("show",{text:r,textVisible:!!r}):e.mobile.loading("show")}else e.mobile.loading("hide")}function o(){var e,t;typeof arguments[0]=="string"&&(e=arguments[0]),typeof arguments[0]=="function"&&(t=arguments[0]),typeof arguments[1]=="function"&&(t=arguments[1]),n.push({msg:e,callback:t}),s()}function u(){n.pop(),s()}function a(e,t){e.then(t,t)}function f(e,t){o(t),a(e,function(){u()})}function l(t,n,r){r||(r=e.mobile.loader.prototype.options.textWithCancel),o(r,function(){t.reject(n)}),a(t.promise,function(){u()})}var n=[],i;return e(document).delegate(".ui-loader","vclick",r),e.mobile.loader.prototype.options.textWithCancel||(e.mobile.loader.prototype.options.textWithCancel="Loading. Click to cancel."),e("div").live("pageshow",function(e,t){s()}),{show:o,hide:u,waitFor:f,waitForWithCancel:l}}var r=t.module("ng");r.factory("$waitDialog",["$rootScope",n])}(e,t),function(e,t){function n(e){return function(t,n,r){if(!t)return t;if(!n)throw new Error("Missing pager property");var i=this,s=i[n];s||(s=i[n]={loadMore:function(){this.loadMoreCalled=!0}});var o=r?+r:e,u=s.endIndex||o;return s.loadMoreCalled&&(s.loadMoreCalled=!1,u+=o),u>=t.length&&(u=t.length),u<o&&(u=o),s.hasMore=u<t.length,s.endIndex=u,s.cache=t.slice(0,u),s.cache}}n.$inject=["defaultListPageSize"];var r=t.module(["ng"]);r.constant("defaultListPageSize",10),r.filter("paged",n)}(e,t)})