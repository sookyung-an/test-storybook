import{r as L}from"./index-D6ByhKmv.js";var d={},z;function $(){if(z)return d;z=1;var C={},f=L();function b(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var _=b(f);function j(i,r){for(var s=0;s<r.length;s++){var e=r[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function A(i,r,s){return r&&j(i.prototype,r),i}var p=typeof process<"u"&&C&&!0,S=function(i){return Object.prototype.toString.call(i)==="[object String]"},T=function(){function i(s){var e=s===void 0?{}:s,t=e.name,n=t===void 0?"stylesheet":t,o=e.optimizeForSpeed,u=o===void 0?p:o;l(S(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",l(typeof u=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var r=i.prototype;return r.setOptimizeForSpeed=function(e){l(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),l(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(p||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return typeof n=="number"?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(l(S(e),"`insertRule` accepts only strings"),typeof window>"u")return typeof t!="number"&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();typeof t!="number"&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch{return p||console.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed||typeof window>"u"){var n=typeof window<"u"?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch{p||console.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];l(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},r.deleteRule=function(e){if(typeof window>"u"){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},r.cssRules=function(){var e=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(o){return o.cssText===e._deletedRulePlaceholder?null:o})):t.push(null),t},[])},r.makeStyleTag=function(e,t,n){t&&l(S(t),"makeStyleTag accepts only strings as second parameter");var o=document.createElement("style");this._nonce&&o.setAttribute("nonce",this._nonce),o.type="text/css",o.setAttribute("data-"+e,""),t&&o.appendChild(document.createTextNode(t));var u=document.head||document.getElementsByTagName("head")[0];return n?u.insertBefore(o,n):u.appendChild(o),o},A(i,[{key:"length",get:function(){return this._rulesCount}}]),i}();function l(i,r){if(!i)throw new Error("StyleSheet: "+r+".")}function k(i){for(var r=5381,s=i.length;s;)r=r*33^i.charCodeAt(--s);return r>>>0}var O=k,E=function(i){return i.replace(/\/style/gi,"\\/style")},a={};function m(i,r){if(!r)return"jsx-"+i;var s=String(r),e=i+s;return a[e]||(a[e]="jsx-"+O(i+"-"+s)),a[e]}function g(i,r){var s=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(r=E(r));var e=i+r;return a[e]||(a[e]=r.replace(s,i)),a[e]}function I(i,r){return r===void 0&&(r={}),i.map(function(s){var e=s[0],t=s[1];return _.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:t}})})}var P=function(){function i(s){var e=s===void 0?{}:s,t=e.styleSheet,n=t===void 0?null:t,o=e.optimizeForSpeed,u=o===void 0?!1:o;this._sheet=n||new T({name:"styled-jsx",optimizeForSpeed:u}),this._sheet.inject(),n&&typeof u=="boolean"&&(this._sheet.setOptimizeForSpeed(u),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var r=i.prototype;return r.add=function(e){var t=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(c,B){return c[B]=0,c},{}));var n=this.getIdAndRules(e),o=n.styleId,u=n.rules;if(o in this._instancesCounts){this._instancesCounts[o]+=1;return}var h=u.map(function(c){return t._sheet.insertRule(c)}).filter(function(c){return c!==-1});this._indices[o]=h,this._instancesCounts[o]=1},r.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(q(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var o=this._fromServer&&this._fromServer[n];o?(o.parentNode.removeChild(o),delete this._fromServer[n]):(this._indices[n].forEach(function(u){return t._sheet.deleteRule(u)}),delete this._indices[n]),delete this._instancesCounts[n]}},r.update=function(e,t){this.add(t),this.remove(e)},r.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},r.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(o){return[o,e._fromServer[o]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(o){return[o,e._indices[o].map(function(u){return n[u].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(o){return!!o[1]}))},r.styles=function(e){return I(this.cssRules(),e)},r.getIdAndRules=function(e){var t=e.children,n=e.dynamic,o=e.id;if(n){var u=m(o,n);return{styleId:u,rules:Array.isArray(t)?t.map(function(h){return g(u,h)}):[g(u,t)]}}return{styleId:m(o),rules:Array.isArray(t)?t:[t]}},r.selectFromServer=function(){var e=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return e.reduce(function(t,n){var o=n.id.slice(2);return t[o]=n,t},{})},i}();function q(i,r){if(!i)throw new Error("StyleSheetRegistry: "+r+".")}var y=f.createContext(null);y.displayName="StyleSheetContext";function v(){return new P}function N(i){var r=i.registry,s=i.children,e=f.useContext(y),t=f.useState(function(){return e||r||v()}),n=t[0];return _.default.createElement(y.Provider,{value:n},s)}function R(){return f.useContext(y)}var x=_.default.useInsertionEffect||_.default.useLayoutEffect,w=typeof window<"u"?v():void 0;function F(i){var r=w||R();return r?typeof window>"u"?(r.add(i),null):(x(function(){return r.add(i),function(){r.remove(i)}},[i.id,String(i.dynamic)]),null):null}return F.dynamic=function(i){return i.map(function(r){var s=r[0],e=r[1];return m(s,e)}).join(" ")},d.StyleRegistry=N,d.createStyleRegistry=v,d.style=F,d.useStyleRegistry=R,d}export{$ as r};
