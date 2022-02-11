"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7808],{20133:(r,e,s)=>{s.d(e,{Z:()=>t});var n=s(60994),o=s.n(n),c=s(93476),a=s.n(c)()(o());a.push([r.id,"/*\nhttp://lesscss.org/ dark theme\nPorted to CodeMirror by Peter Kroon\n*/\n.cm-s-lesser-dark {\n  line-height: 1.3em;\n}\n.cm-s-lesser-dark.CodeMirror { background: #262626; color: #EBEFE7; text-shadow: 0 -1px 1px #262626; }\n.cm-s-lesser-dark div.CodeMirror-selected { background: #45443B; } /* 33322B*/\n.cm-s-lesser-dark .CodeMirror-line::selection, .cm-s-lesser-dark .CodeMirror-line > span::selection, .cm-s-lesser-dark .CodeMirror-line > span > span::selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-line::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-lesser-dark pre { padding: 0 8px; }/*editable code holder*/\n\n.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket { color: #7EFC7E; }/*65FC65*/\n\n.cm-s-lesser-dark .CodeMirror-gutters { background: #262626; border-right:1px solid #aaa; }\n.cm-s-lesser-dark .CodeMirror-guttermarker { color: #599eff; }\n.cm-s-lesser-dark .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-lesser-dark .CodeMirror-linenumber { color: #777; }\n\n.cm-s-lesser-dark span.cm-header { color: #a0a; }\n.cm-s-lesser-dark span.cm-quote { color: #090; }\n.cm-s-lesser-dark span.cm-keyword { color: #599eff; }\n.cm-s-lesser-dark span.cm-atom { color: #C2B470; }\n.cm-s-lesser-dark span.cm-number { color: #B35E4D; }\n.cm-s-lesser-dark span.cm-def { color: white; }\n.cm-s-lesser-dark span.cm-variable { color:#D9BF8C; }\n.cm-s-lesser-dark span.cm-variable-2 { color: #669199; }\n.cm-s-lesser-dark span.cm-variable-3, .cm-s-lesser-dark span.cm-type { color: white; }\n.cm-s-lesser-dark span.cm-property { color: #92A75C; }\n.cm-s-lesser-dark span.cm-operator { color: #92A75C; }\n.cm-s-lesser-dark span.cm-comment { color: #666; }\n.cm-s-lesser-dark span.cm-string { color: #BCD279; }\n.cm-s-lesser-dark span.cm-string-2 { color: #f50; }\n.cm-s-lesser-dark span.cm-meta { color: #738C73; }\n.cm-s-lesser-dark span.cm-qualifier { color: #555; }\n.cm-s-lesser-dark span.cm-builtin { color: #ff9e59; }\n.cm-s-lesser-dark span.cm-bracket { color: #EBEFE7; }\n.cm-s-lesser-dark span.cm-tag { color: #669199; }\n.cm-s-lesser-dark span.cm-attribute { color: #81a4d5; }\n.cm-s-lesser-dark span.cm-hr { color: #999; }\n.cm-s-lesser-dark span.cm-link { color: #7070E6; }\n.cm-s-lesser-dark span.cm-error { color: #9d1e15; }\n\n.cm-s-lesser-dark .CodeMirror-activeline-background { background: #3C3A3A; }\n.cm-s-lesser-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/lesser-dark.css"],names:[],mappings:"AAAA;;;CAGC;AACD;EACE,kBAAkB;AACpB;AACA,+BAA+B,mBAAmB,EAAE,cAAc,EAAE,+BAA+B,EAAE;AACrG,4CAA4C,mBAAmB,EAAE,EAAE,UAAU;AAC7E,mKAAmK,iCAAiC,EAAE;AACtM,kLAAkL,iCAAiC,EAAE;AACrN,uCAAuC,4BAA4B,EAAE;AACrE,wBAAwB,cAAc,EAAE,CAAC,uBAAuB;;AAEhE,+DAA+D,cAAc,EAAE,CAAC,SAAS;;AAEzF,wCAAwC,mBAAmB,EAAE,2BAA2B,EAAE;AAC1F,6CAA6C,cAAc,EAAE;AAC7D,oDAAoD,WAAW,EAAE;AACjE,2CAA2C,WAAW,EAAE;;AAExD,mCAAmC,WAAW,EAAE;AAChD,kCAAkC,WAAW,EAAE;AAC/C,oCAAoC,cAAc,EAAE;AACpD,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,gCAAgC,YAAY,EAAE;AAC9C,qCAAqC,aAAa,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uEAAuE,YAAY,EAAE;AACrF,qCAAqC,cAAc,EAAE;AACrD,qCAAqC,cAAc,EAAE;AACrD,oCAAoC,WAAW,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,qCAAqC,WAAW,EAAE;AAClD,iCAAiC,cAAc,EAAE;AACjD,sCAAsC,WAAW,EAAE;AACnD,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,cAAc,EAAE;AAChD,sCAAsC,cAAc,EAAE;AACtD,+BAA+B,WAAW,EAAE;AAC5C,iCAAiC,cAAc,EAAE;AACjD,kCAAkC,cAAc,EAAE;;AAElD,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:["/*\nhttp://lesscss.org/ dark theme\nPorted to CodeMirror by Peter Kroon\n*/\n.cm-s-lesser-dark {\n  line-height: 1.3em;\n}\n.cm-s-lesser-dark.CodeMirror { background: #262626; color: #EBEFE7; text-shadow: 0 -1px 1px #262626; }\n.cm-s-lesser-dark div.CodeMirror-selected { background: #45443B; } /* 33322B*/\n.cm-s-lesser-dark .CodeMirror-line::selection, .cm-s-lesser-dark .CodeMirror-line > span::selection, .cm-s-lesser-dark .CodeMirror-line > span > span::selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-line::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-lesser-dark pre { padding: 0 8px; }/*editable code holder*/\n\n.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket { color: #7EFC7E; }/*65FC65*/\n\n.cm-s-lesser-dark .CodeMirror-gutters { background: #262626; border-right:1px solid #aaa; }\n.cm-s-lesser-dark .CodeMirror-guttermarker { color: #599eff; }\n.cm-s-lesser-dark .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-lesser-dark .CodeMirror-linenumber { color: #777; }\n\n.cm-s-lesser-dark span.cm-header { color: #a0a; }\n.cm-s-lesser-dark span.cm-quote { color: #090; }\n.cm-s-lesser-dark span.cm-keyword { color: #599eff; }\n.cm-s-lesser-dark span.cm-atom { color: #C2B470; }\n.cm-s-lesser-dark span.cm-number { color: #B35E4D; }\n.cm-s-lesser-dark span.cm-def { color: white; }\n.cm-s-lesser-dark span.cm-variable { color:#D9BF8C; }\n.cm-s-lesser-dark span.cm-variable-2 { color: #669199; }\n.cm-s-lesser-dark span.cm-variable-3, .cm-s-lesser-dark span.cm-type { color: white; }\n.cm-s-lesser-dark span.cm-property { color: #92A75C; }\n.cm-s-lesser-dark span.cm-operator { color: #92A75C; }\n.cm-s-lesser-dark span.cm-comment { color: #666; }\n.cm-s-lesser-dark span.cm-string { color: #BCD279; }\n.cm-s-lesser-dark span.cm-string-2 { color: #f50; }\n.cm-s-lesser-dark span.cm-meta { color: #738C73; }\n.cm-s-lesser-dark span.cm-qualifier { color: #555; }\n.cm-s-lesser-dark span.cm-builtin { color: #ff9e59; }\n.cm-s-lesser-dark span.cm-bracket { color: #EBEFE7; }\n.cm-s-lesser-dark span.cm-tag { color: #669199; }\n.cm-s-lesser-dark span.cm-attribute { color: #81a4d5; }\n.cm-s-lesser-dark span.cm-hr { color: #999; }\n.cm-s-lesser-dark span.cm-link { color: #7070E6; }\n.cm-s-lesser-dark span.cm-error { color: #9d1e15; }\n\n.cm-s-lesser-dark .CodeMirror-activeline-background { background: #3C3A3A; }\n.cm-s-lesser-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n"],sourceRoot:""}]);const t=a},93476:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var s=r(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(r,s,n){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(n)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(o[a]=!0)}for(var t=0;t<r.length;t++){var A=[].concat(r[t]);n&&o[A[0]]||(s&&(A[2]?A[2]="".concat(s," and ").concat(A[2]):A[2]=s),e.push(A))}},e}},60994:r=>{function e(r,e){(null==e||e>r.length)&&(e=r.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=r[s];return n}r.exports=function(r){var s,n,o=(n=4,function(r){if(Array.isArray(r))return r}(s=r)||function(r,e){var s=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=s){var n,o,c=[],a=!0,t=!1;try{for(s=s.call(r);!(a=(n=s.next()).done)&&(c.push(n.value),!e||c.length!==e);a=!0);}catch(r){t=!0,o=r}finally{try{a||null==s.return||s.return()}finally{if(t)throw o}}return c}}(s,n)||function(r,s){if(r){if("string"==typeof r)return e(r,s);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,s):void 0}}(s,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[1],a=o[3];if(!a)return c;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),l="/*# ".concat(A," */"),i=a.sources.map((function(r){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(r," */")}));return[c].concat(i).concat([l]).join("\n")}return[c].join("\n")}},37808:(r,e,s)=>{s.r(e),s.d(e,{default:()=>a});var n=s(1892),o=s.n(n),c=s(20133);o()(c.Z,{insert:"head",singleton:!1});const a=c.Z.locals||{}},1892:(r,e,s)=>{var n,o=function(){var r={};return function(e){if(void 0===r[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(r){s=null}r[e]=s}return r[e]}}(),c=[];function a(r){for(var e=-1,s=0;s<c.length;s++)if(c[s].identifier===r){e=s;break}return e}function t(r,e){for(var s={},n=[],o=0;o<r.length;o++){var t=r[o],A=e.base?t[0]+e.base:t[0],l=s[A]||0,i="".concat(A," ").concat(l);s[A]=l+1;var d=a(i),m={css:t[1],media:t[2],sourceMap:t[3]};-1!==d?(c[d].references++,c[d].updater(m)):c.push({identifier:i,updater:p(m,e),references:1}),n.push(i)}return n}function A(r){var e=document.createElement("style"),n=r.attributes||{};if(void 0===n.nonce){var c=s.nc;c&&(n.nonce=c)}if(Object.keys(n).forEach((function(r){e.setAttribute(r,n[r])})),"function"==typeof r.insert)r.insert(e);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,i=(l=[],function(r,e){return l[r]=e,l.filter(Boolean).join("\n")});function d(r,e,s,n){var o=s?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet)r.styleSheet.cssText=i(e,o);else{var c=document.createTextNode(o),a=r.childNodes;a[e]&&r.removeChild(a[e]),a.length?r.insertBefore(c,a[e]):r.appendChild(c)}}function m(r,e,s){var n=s.css,o=s.media,c=s.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}var C=null,u=0;function p(r,e){var s,n,o;if(e.singleton){var c=u++;s=C||(C=A(e)),n=d.bind(null,s,c,!1),o=d.bind(null,s,c,!0)}else s=A(e),n=m.bind(null,s,e),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(s)};return n(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;n(r=e)}else o()}}r.exports=function(r,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var s=t(r=r||[],e);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var n=0;n<s.length;n++){var o=a(s[n]);c[o].references--}for(var A=t(r,e),l=0;l<s.length;l++){var i=a(s[l]);0===c[i].references&&(c[i].updater(),c.splice(i,1))}s=A}}}}}]);
//# sourceMappingURL=7808.075b1622f03e1f333d5b.js.map