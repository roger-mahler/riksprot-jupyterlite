"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1835],{11835:(e,t,o)=>{o.r(t),o.d(t,{savingStatusPlugin:()=>v,pathStatusPlugin:()=>w,downloadPlugin:()=>b,openBrowserTabPlugin:()=>f,default:()=>y});var n,a=o(9481),r=o(5859),i=o(83749),d=o(83526),l=o(44010),c=o(15783),s=o(59867),u=o(15343),m=o(61442),g=o(19461),p=o(27639);!function(e){e.clone="docmanager:clone",e.deleteFile="docmanager:delete-file",e.newUntitled="docmanager:new-untitled",e.open="docmanager:open",e.openBrowserTab="docmanager:open-browser-tab",e.reload="docmanager:reload",e.rename="docmanager:rename",e.del="docmanager:delete",e.restoreCheckpoint="docmanager:restore-checkpoint",e.save="docmanager:save",e.saveAll="docmanager:save-all",e.saveAs="docmanager:save-as",e.download="docmanager:download",e.toggleAutosave="docmanager:toggle-autosave",e.showInFileBrowser="docmanager:show-in-file-browser"}(n||(n={}));const h="@jupyterlab/docmanager-extension:plugin",_={id:h,provides:d.IDocumentManager,requires:[c.ISettingRegistry,u.ITranslator],optional:[a.ILabStatus,r.ICommandPalette,a.ILabShell,r.ISessionContextDialogs,l.IDocumentProviderFactory],activate:(e,t,o,a,i,l,c,s)=>{var u;const p=o.load("jupyterlab"),_=e.serviceManager,v=new WeakSet,w={open:(t,o)=>{t.id||(t.id="document-manager-"+ ++D.id),t.title.dataset=Object.assign({type:"document-title"},t.title.dataset),t.isAttached||e.shell.add(t,"main",o||{}),e.shell.activateById(t.id);const n=y.contextForWidget(t);n&&!v.has(n)&&(a&&function(e,t){let o=null;const n=(t,n)=>{"dirty"===n.name&&(!0===n.newValue?o||(o=e.setDirty()):o&&(o.dispose(),o=null))};t.ready.then((()=>{t.model.stateChanged.connect(n),t.model.dirty&&(o=e.setDirty())})),t.disposed.connect((()=>{o&&o.dispose()}))}(a,n),v.add(n))}},b=e.docRegistry,f=e.restored.then((()=>{})),y=new d.DocumentManager({registry:b,manager:_,opener:w,when:f,setBusy:null!==(u=a&&(()=>a.setBusy()))&&void 0!==u?u:void 0,sessionDialogs:c||void 0,translator:o,collaborative:!0,docProviderFactory:null!=s?s:void 0});!function(e,t,o,a,i,l,c){const s=i.load("jupyterlab"),{commands:u,shell:g}=e,p=s.__("File Operations"),_=()=>{const{currentWidget:e}=g;return!(!e||!t.contextForWidget(e))};l&&function(e,t,o,a,i){const l=i.load("jupyterlab"),{commands:c}=e,s=()=>{var n;const a=/[Pp]ath:\s?(.*)\n?/,r=e.contextMenuHitTest((e=>{var t;return!!(null===(t=e.title)||void 0===t?void 0:t.match(a))})),i=null==r?void 0:r.title.match(a);return null!==(n=i&&t.findWidget(i[1],null))&&void 0!==n?n:o.currentWidget},u=()=>{const{currentWidget:e}=o;return!(!e||!t.contextForWidget(e))};c.addCommand(n.clone,{label:()=>l.__("New View for %1",x(s(),t)),isEnabled:u,execute:e=>{const o=s(),n=e.options||{mode:"split-right"};if(!o)return;const r=t.cloneWidget(o);r&&a.open(r,n)}}),c.addCommand(n.rename,{label:()=>{let e=x(s(),t);return e&&(e=" "+e),l.__("Rename%1…",e)},isEnabled:u,execute:()=>{if(u()){const e=t.contextForWidget(s());return(0,d.renameDialog)(t,e.path)}}}),c.addCommand(n.del,{label:()=>l.__("Delete %1",x(s(),t)),isEnabled:u,execute:async()=>{if(u()){const o=t.contextForWidget(s());if(!o)return;(await(0,r.showDialog)({title:l.__("Delete"),body:l.__("Are you sure you want to delete %1",o.path),buttons:[r.Dialog.cancelButton({label:l.__("Cancel")}),r.Dialog.warnButton({label:l.__("Delete")})]})).button.accept&&await e.commands.execute("docmanager:delete-file",{path:o.path})}}}),c.addCommand(n.showInFileBrowser,{label:()=>l.__("Show in File Browser"),isEnabled:u,execute:async()=>{const e=s(),o=e&&t.contextForWidget(e);o&&(await c.execute("filebrowser:activate",{path:o.path}),await c.execute("filebrowser:go-to-path",{path:o.path}))}})}(e,t,l,o,i),u.addCommand(n.deleteFile,{label:()=>`Delete ${x(g.currentWidget,t)}`,execute:e=>{const o=void 0===e.path?"":e.path;if(!o){const e=n.deleteFile;throw new Error(`A non-empty path is required for ${e}.`)}return t.deleteFile(o)}}),u.addCommand(n.newUntitled,{execute:e=>{const o=e.error||s.__("Error"),n=void 0===e.path?"":e.path,a={type:e.type,path:n};return"file"===e.type&&(a.ext=e.ext||".txt"),t.services.contents.newUntitled(a).catch((e=>(0,r.showErrorMessage)(o,e)))},label:e=>e.label||`New ${e.type}`}),u.addCommand(n.open,{execute:e=>{const o=void 0===e.path?"":e.path,n=e.factory||void 0,a=null==e?void 0:e.kernel,r=e.options||void 0;return t.services.contents.get(o,{content:!1}).then((()=>t.openOrReveal(o,n,a,r)))},icon:e=>e.icon||"",label:e=>e.label||e.factory,mnemonic:e=>e.mnemonic||-1}),u.addCommand(n.reload,{label:()=>s.__("Reload %1 from Disk",x(g.currentWidget,t)),caption:s.__("Reload contents from disk"),isEnabled:_,execute:()=>{if(!_())return;const e=t.contextForWidget(g.currentWidget),o=x(g.currentWidget,t);return e?e.model.dirty?(0,r.showDialog)({title:s.__("Reload %1 from Disk",o),body:s.__("Are you sure you want to reload the %1 from the disk?",o),buttons:[r.Dialog.cancelButton({label:s.__("Cancel")}),r.Dialog.warnButton({label:s.__("Reload")})]}).then((t=>{if(t.button.accept&&!e.isDisposed)return e.revert()})):e.isDisposed?void 0:e.revert():(0,r.showDialog)({title:s.__("Cannot Reload"),body:s.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:s.__("Ok")})]})}}),u.addCommand(n.restoreCheckpoint,{label:()=>s.__("Revert %1 to Checkpoint",x(g.currentWidget,t)),caption:s.__("Revert contents to previous checkpoint"),isEnabled:_,execute:()=>{if(!_())return;const e=t.contextForWidget(g.currentWidget);return e?e.listCheckpoints().then((o=>{if(o.length<1)return;const n=o[o.length-1];if(!n)return;const a=x(g.currentWidget,t);return(0,r.showDialog)({title:s.__("Revert %1 to checkpoint",a),body:new C(n,s,a),buttons:[r.Dialog.cancelButton({label:s.__("Cancel")}),r.Dialog.warnButton({label:s.__("Revert")})]}).then((t=>{if(!e.isDisposed)return t.button.accept?e.model.readOnly?e.revert():e.restoreCheckpoint().then((()=>e.revert())):void 0}))})):(0,r.showDialog)({title:s.__("Cannot Revert"),body:s.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:s.__("Ok")})]})}}),u.addCommand(n.save,{label:()=>s.__("Save %1",x(g.currentWidget,t)),caption:s.__("Save and create checkpoint"),isEnabled:()=>{const{currentWidget:e}=g;if(!e)return!1;const o=t.contextForWidget(e);return!!(o&&o.contentsModel&&o.contentsModel.writable)},execute:()=>{if(_()){const e=t.contextForWidget(g.currentWidget);return e?e.model.readOnly?(0,r.showDialog)({title:s.__("Cannot Save"),body:s.__("Document is read-only"),buttons:[r.Dialog.okButton({label:s.__("Ok")})]}):e.save().then((()=>e.createCheckpoint())).catch((e=>{if("Cancel"!==e.message)throw e})):(0,r.showDialog)({title:s.__("Cannot Save"),body:s.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:s.__("Ok")})]})}}}),u.addCommand(n.saveAll,{label:()=>s.__("Save All"),caption:s.__("Save all open documents"),isEnabled:()=>(0,m.some)((0,m.map)(g.widgets("main"),(e=>t.contextForWidget(e))),(e=>{var t,o;return null!==(o=null===(t=null==e?void 0:e.contentsModel)||void 0===t?void 0:t.writable)&&void 0!==o&&o})),execute:()=>{const e=[],o=new Set;return(0,m.each)(g.widgets("main"),(n=>{const a=t.contextForWidget(n);!a||a.model.readOnly||o.has(a.path)||(o.add(a.path),e.push(a.save()))})),Promise.all(e)}}),u.addCommand(n.saveAs,{label:()=>s.__("Save %1 As…",x(g.currentWidget,t)),caption:s.__("Save with new path"),isEnabled:_,execute:()=>{if(_()){const e=t.contextForWidget(g.currentWidget);return e?e.saveAs():(0,r.showDialog)({title:s.__("Cannot Save"),body:s.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:s.__("Ok")})]})}}}),u.addCommand(n.toggleAutosave,{label:s.__("Autosave Documents"),isToggled:()=>t.autosave,execute:()=>{const e=!t.autosave,o="autosave";return a.set(h,o,e).catch((e=>{console.error(`Failed to set ${h}:${o} - ${e.message}`)}))}}),c&&[n.reload,n.restoreCheckpoint,n.save,n.saveAs,n.toggleAutosave].forEach((e=>{c.addItem({command:e,category:p})}))}(e,y,w,t,o,l,i);const W=t=>{const o=t.get("autosave").composite;y.autosave=!0!==o&&!1!==o||o,e.commands.notifyCommandChanged(n.toggleAutosave);const a=t.get("autosaveInterval").composite;y.autosaveInterval=a||120;const r=t.get("lastModifiedCheckMargin").composite;y.lastModifiedCheckMargin=r||500;const i=t.get("defaultViewers").composite,d={};Object.keys(i).forEach((e=>{b.getFileType(e)?(b.getWidgetFactory(i[e])||console.warn(`Document viewer ${i[e]} not found`),d[e]=i[e]):console.warn(`File Type ${e} not found`)})),(0,m.each)(b.fileTypes(),(e=>{try{b.setDefaultWidgetFactory(e.name,d[e.name])}catch(t){console.warn(`Failed to set default viewer ${d[e.name]} for file type ${e.name}`)}}))};return Promise.all([t.load(h),e.restored]).then((([e])=>{e.changed.connect(W),W(e)})).catch((e=>{console.error(e.message)})),t.transform(h,{fetch:e=>{const t=(0,m.toArray)(b.fileTypes()).map((e=>e.name)).join("    \n"),o=(0,m.toArray)(b.widgetFactories()).map((e=>e.name)).join("    \n"),n=p.__('Overrides for the default viewers for file types.\nSpecify a mapping from file type name to document viewer name, for example:\n\ndefaultViewers: {\n  markdown: "Markdown Preview"\n}\n\nIf you specify non-existent file types or viewers, or if a viewer cannot\nopen a given file type, the override will not function.\n\nAvailable viewers:\n%1\n\nAvailable file types:\n%2',o,t),a=g.JSONExt.deepCopy(e.schema);return a.properties.defaultViewers.description=n,Object.assign(Object.assign({},e),{schema:a})}}),b.changed.connect((()=>t.reload(h))),y}},v={id:"@jupyterlab/docmanager-extension:saving-status",autoStart:!0,requires:[d.IDocumentManager,a.ILabShell,u.ITranslator],optional:[s.IStatusBar],activate:(e,t,o,n,a)=>{if(!a)return;const r=new d.SavingStatus({docManager:t,translator:n});r.model.widget=o.currentWidget,o.currentChanged.connect((()=>{r.model.widget=o.currentWidget})),a.registerStatusItem(v.id,{item:r,align:"middle",isActive:()=>null!==r.model&&null!==r.model.status,activeStateChanged:r.model.stateChanged})}},w={id:"@jupyterlab/docmanager-extension:path-status",autoStart:!0,requires:[d.IDocumentManager,a.ILabShell],optional:[s.IStatusBar],activate:(e,t,o,n)=>{if(!n)return;const a=new d.PathStatus({docManager:t});a.model.widget=o.currentWidget,o.currentChanged.connect((()=>{a.model.widget=o.currentWidget})),n.registerStatusItem(w.id,{item:a,align:"right",rank:0})}},b={id:"@jupyterlab/docmanager-extension:download",autoStart:!0,requires:[u.ITranslator,d.IDocumentManager],optional:[r.ICommandPalette],activate:(e,t,o,a)=>{const i=t.load("jupyterlab"),{commands:d,shell:l}=e,c=()=>{const{currentWidget:e}=l;return!(!e||!o.contextForWidget(e))};d.addCommand(n.download,{label:i.__("Download"),caption:i.__("Download the file to your computer"),isEnabled:c,execute:()=>{if(c()){const e=o.contextForWidget(l.currentWidget);return e?e.download():(0,r.showDialog)({title:i.__("Cannot Download"),body:i.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:i.__("OK")})]})}}});const s=i.__("File Operations");a&&a.addItem({command:n.download,category:s})}},f={id:"@jupyterlab/docmanager-extension:open-browser-tab",autoStart:!0,requires:[u.ITranslator,d.IDocumentManager],activate:(e,t,o)=>{const a=t.load("jupyterlab"),{commands:r}=e;r.addCommand(n.openBrowserTab,{execute:e=>{const t=void 0===e.path?"":e.path;if(t)return o.services.contents.getDownloadUrl(t).then((e=>{const t=window.open();if(!t)throw new Error("Failed to open new browser tab.");t.opener=null,t.location.href=e}))},icon:e=>e.icon||"",label:()=>a.__("Open in New Browser Tab")})}},y=[_,w,v,b,f];class C extends p.Widget{constructor(e,t,o="notebook"){super({node:D.createRevertConfirmNode(e,o,t)})}}function x(e,t){if(!e)return"File";const o=t.contextForWidget(e);if(!o)return"";const n=t.registry.getFileTypesForPath(o.path);return n.length&&n[0].displayName?n[0].displayName:"File"}var D;!function(e){e.id=0,e.createRevertConfirmNode=function(e,t,o){const n=document.createElement("div"),a=document.createElement("p"),r=document.createTextNode(o.__("Are you sure you want to revert the %1 to the latest checkpoint? ",t)),d=document.createElement("strong");d.textContent=o.__("This cannot be undone."),a.appendChild(r),a.appendChild(d);const l=document.createElement("p"),c=document.createTextNode(o.__("The checkpoint was last updated at: ")),s=document.createElement("p"),u=new Date(e.last_modified);return s.style.textAlign="center",s.textContent=i.Time.format(u,"dddd, MMMM Do YYYY, h:mm:ss a")+" ("+i.Time.formatHuman(u)+")",l.appendChild(c),l.appendChild(s),n.appendChild(a),n.appendChild(l),n}}(D||(D={}))}}]);
//# sourceMappingURL=1835.69823072f5a8bd0b7227.js.map