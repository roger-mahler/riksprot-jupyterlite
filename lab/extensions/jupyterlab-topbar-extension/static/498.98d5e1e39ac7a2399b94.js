(self.webpackChunkjupyterlab_topbar_extension=self.webpackChunkjupyterlab_topbar_extension||[]).push([[498,887],{496:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(609),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".jp-TopBar {\n  display: flex;\n  flex-grow: 1 !important;\n  min-height: unset !important;\n  height: var(--jp-private-menubar-height);\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color0);\n}\n\n.jp-LabShell[data-shell-mode='single-document'] .jp-TopBar {\n  border-bottom: unset;\n}\n\n.jp-TopBar > .jp-TopBar-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-left: calc(var(--jp-border-width) * 2) solid var(--jp-border-color0);\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n}\n\n.jp-Toolbar.jp-TopBar {\n  box-shadow: unset;\n}\n\n.jp-TopBar-DragItem {\n  z-index: 2;\n  border: calc(var(--jp-border-width) * 2) solid var(--jp-layout-color1);\n  color: var(--jp-content-font-color1);\n  background: var(--jp-layout-color1);\n}\n\n.jp-TopBar-DropTarget {\n  background-color: var(--md-blue-400);\n  color: var(--jp-content-font-color1);\n  opacity: 0.5;\n  cursor: move;\n}\n\n.jp-TopBar-DropTarget:hover {\n  background-color: var(--md-blue-400) !important;\n  cursor: move !important;\n}\n",""]);const a=o},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},62:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],d=t.base?s[0]+t.base:s[0],c=n[d]||0,p="".concat(d," ").concat(c);n[d]=c+1;var u=i(p),l={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(l)):a.push({identifier:p,updater:m(l,t),references:1}),r.push(p)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,p=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function l(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var a=v++;n=h||(h=d(t)),r=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=d(t),r=l.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var d=s(e,t),c=0;c<n.length;c++){var p=i(n[c]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}n=d}}}},498:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ITopBar:()=>v,TopBar:()=>m});var r=n(520),o=n(850),a=n(797),i=n(608),s=n(513),d=n(168),c=n(62),p=n.n(c),u=n(496);p()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;const l="application/x-jupyterlab-topbar",h="jp-TopBar-DropTarget",v=new a.Token("jupyterlab-topbar:ITopBar");class m extends r.Toolbar{constructor(){super(),this._drag=null,this._dragData=null,this.addClass("jp-TopBar"),this._changed=new d.Signal(this)}get changed(){return this._changed}addItem(e,t){return t.addClass("jp-TopBar-item"),super.addItem(e,t)}setOrder(e){const t=this.layout,n={};(0,o.each)(this.names(),((e,r)=>{n[e]=t.widgets[r]})),e.forEach(((e,r)=>{n[e]&&t.insertWidget(r,n[e])}))}onAfterAttach(e){super.onAfterAttach(e);const t=this.node;t.addEventListener("mousedown",this,!0),t.addEventListener("mousedown",this),t.addEventListener("p-dragenter",this),t.addEventListener("p-dragleave",this),t.addEventListener("p-dragover",this),t.addEventListener("p-drop",this)}onBeforeDetach(e){const t=this.node;t.removeEventListener("mousedown",this,!0),t.removeEventListener("mousedown",this),t.removeEventListener("p-dragenter",this),t.removeEventListener("p-dragleave",this),t.removeEventListener("p-dragover",this),t.removeEventListener("p-drop",this),document.removeEventListener("mousemove",this,!0),document.removeEventListener("mouseup",this,!0)}handleEvent(e){switch(e.type){case"mousedown":this._evtMousedown(e);break;case"mouseup":this._evtMouseup(e);break;case"mousemove":this._evtMousemove(e);break;case"p-dragenter":this._evtDragEnter(e);break;case"p-dragleave":this._evtDragLeave(e);break;case"p-dragover":this._evtDragOver(e);break;case"p-drop":this._evtDrop(e)}}_evtMousedown(e){const t=f.hitTestNodes(this.node.children,e.clientX,e.clientY);-1!==t&&0===e.button&&(e.preventDefault(),this._dragData={pressX:e.clientX,pressY:e.clientY,index:t},document.addEventListener("mouseup",this,!0),document.addEventListener("mousemove",this,!0))}_evtMouseup(e){if(0!==e.button||!this._drag)return document.removeEventListener("mousemove",this,!0),void document.removeEventListener("mouseup",this,!0);e.preventDefault(),e.stopPropagation()}_evtMousemove(e){if(e.preventDefault(),e.stopPropagation(),this._drag||!this._dragData)return;const t=this._dragData,n=Math.abs(e.clientX-t.pressX),r=Math.abs(e.clientY-t.pressY);n<5&&r<5||this._startDrag(t.index,e.clientX,e.clientY)}_evtDragEnter(e){if(!e.mimeData.hasData(l))return;e.preventDefault(),e.stopPropagation();const t=e.target,n=f.findWidget(this.node.children,t);-1!==n&&this.layout.widgets[n].node.classList.add(h)}_evtDragLeave(e){if(!e.mimeData.hasData(l))return;e.preventDefault(),e.stopPropagation();const t=this.node.getElementsByClassName(h);t.length&&t[0].classList.remove(h)}_evtDragOver(e){if(!e.mimeData.hasData(l))return;e.preventDefault(),e.stopPropagation(),e.dropAction=e.proposedAction;const t=this.node.getElementsByClassName(h);t.length&&t[0].classList.remove(h);const n=this._findRootItem(e.target),r=f.findWidget(this.node.children,n);-1!==r&&this.layout.widgets[r].node.classList.add(h)}_findRootItem(e){for(;e&&this.node!==e.parentElement;)e=e.parentElement;return e}_evtDrop(e){if(e.preventDefault(),e.stopPropagation(),"none"===e.proposedAction)return void(e.dropAction="none");if(!e.mimeData.hasData(l))return;let t=e.target;for(;t&&t.parentElement;){if(t.classList.contains(h)){t.classList.remove(h);break}t=t.parentElement}const n=f.findWidget(this.node.children,t);if(-1===n)return;const r=(0,o.toArray)(this.names()),a=this.layout,i=this._dragData.index,s=a.widgets[i];a.insertWidget(n,s);const d=(0,o.toArray)(this.names());(0,o.every)((0,o.map)(d,((e,t)=>e===r[t])),(e=>e))||this._changed.emit(d)}_startDrag(e,t,n){const r=this.node.children[e],o=f.createDragImage(r);this._drag=new s.Drag({dragImage:o,mimeData:new a.MimeData,supportedActions:"move",proposedAction:"move"}),this._drag.mimeData.setData(l,e),document.removeEventListener("mousemove",this,!0),document.removeEventListener("mouseup",this,!0),this._drag.start(t,n).then((e=>{this._drag=null}))}}var f;!function(e){e.createSpacerItem=function(){return r.Toolbar.createSpacerItem()}}(m||(m={})),function(e){e.hitTestNodes=function(e,t,n){return o.ArrayExt.findFirstIndex(e,(e=>i.ElementExt.hitTest(e,t,n)))},e.findWidget=function(e,t){return o.ArrayExt.findFirstIndex(e,(e=>e===t))},e.createDragImage=function(e){const t=e.cloneNode(!0);return t.className="jp-TopBar-DragItem",e.innerHTML||(t.style.width=`${e.clientWidth}px`,t.style.height=`${e.clientHeight}px`),t}}(f||(f={}))}}]);