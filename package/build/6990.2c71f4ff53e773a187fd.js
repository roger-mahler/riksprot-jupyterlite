"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6990],{6990:(e,t,i)=>{i.r(t),i.d(t,{ConnectionLost:()=>s,IConnectionLost:()=>H,ILabShell:()=>C,ILabStatus:()=>L.y,ILayoutRestorer:()=>A.L,IMimeDocumentTracker:()=>m.w2,IRouter:()=>S,ITreePathUpdater:()=>E,JupyterFrontEnd:()=>g,JupyterFrontEndContextMenu:()=>o,JupyterLab:()=>x,LabShell:()=>T,LayoutRestorer:()=>A.c,Router:()=>M,createRendermimePlugin:()=>m.aX,createRendermimePlugins:()=>m.as});var n=i(5859),a=i(15343);const s=async function(e,t,i){const s=(i=i||a.nullTranslator).load("jupyterlab"),r=s.__("Server Connection Error"),o=s.__("A connection to the Jupyter server could not be established.\nJupyterLab will continue trying to reconnect.\nCheck your network connection or Jupyter server configuration.\n");return(0,n.showErrorMessage)(r,{message:o})};var r,o,d=i(12929),l=i(19508),h=i(36470),c=i(80758),u=i(19461),p=i(56475);class g extends c.Application{constructor(e){super(e),this._formatChanged=new p.Signal(this),this.contextMenu=new h.ContextMenuSvg({commands:this.commands,renderer:e.contextMenuRenderer});const t=new Promise((e=>{requestAnimationFrame((()=>{e()}))}));this.commandLinker=e.commandLinker||new n.CommandLinker({commands:this.commands}),this.docRegistry=e.docRegistry||new d.DocumentRegistry,this.restored=e.restored||this.started.then((()=>t)).catch((()=>t)),this.serviceManager=e.serviceManager||new l.ServiceManager}get format(){return this._format}set format(e){this._format!==e&&(this._format=e,document.body.dataset.format=e,this._formatChanged.emit(e))}get formatChanged(){return this._formatChanged}contextMenuHitTest(e){if(!(this._contextMenuEvent&&this._contextMenuEvent.target instanceof Node))return;let t=this._contextMenuEvent.target;do{if(t instanceof HTMLElement&&e(t))return t;t=t.parentNode}while(t&&t.parentNode&&t!==t.parentNode)}evtContextMenu(e){if(this._contextMenuEvent=e,!e.shiftKey&&!r.suppressContextMenu(e.target)&&this.contextMenu.open(e)){const t=this.contextMenu.menu.items;if(1===t.length&&t[0].command===o.contextMenu)return void this.contextMenu.menu.close();e.preventDefault(),e.stopPropagation()}}}!function(e){e.inDocMode=function(e,t){const i=new RegExp(`^${t.urls.doc}`);return!!e.match(i)},e.IPaths=new u.Token("@jupyterlab/application:IPaths"),e.ITreeResolver=new u.Token("@jupyterlab/application:ITreeResolver")}(g||(g={})),function(e){e.suppressContextMenu=function(e){return null!==e.closest("[data-jp-suppress-context-menu]")}}(r||(r={})),function(e){e.contextMenu="__internal:context-menu-info"}(o||(o={}));var _=i(83749),m=i(75677),f=i(61442),w=i(13079),v=i(39462),P=i(27639);const y="jp-SideBar",b=900,k="jp-Activity",C=new u.Token("@jupyterlab/application:ILabShell");class T extends P.Widget{constructor(e){super(),this._dockChildHook=(e,t)=>{switch(t.type){case"child-added":t.child.addClass(k),this._tracker.add(t.child);break;case"child-removed":t.child.removeClass(k),this._tracker.remove(t.child)}return!0},this._activeChanged=new p.Signal(this),this._cachedLayout=null,this._currentChanged=new p.Signal(this),this._currentPath="",this._currentPathChanged=new p.Signal(this),this._modeChanged=new p.Signal(this),this._isRestored=!1,this._layoutModified=new p.Signal(this),this._layoutDebouncer=new v.Debouncer((()=>{this._layoutModified.emit(void 0)}),0),this._restored=new u.PromiseDelegate,this._tracker=new P.FocusTracker,this._mainOptionsCache=new Map,this._sideOptionsCache=new Map,this.addClass("jp-LabShell"),this.id="main";const t=(e&&e.translator||a.nullTranslator).load("jupyterlab"),i=this._headerPanel=new P.BoxPanel,n=this._menuHandler=new B.PanelHandler;n.panel.node.setAttribute("role","navigation"),n.panel.node.setAttribute("aria-label",t.__("main"));const s=this._topHandler=new B.PanelHandler;s.panel.node.setAttribute("role","banner");const r=this._bottomPanel=new P.BoxPanel;r.node.setAttribute("role","contentinfo");const o=new P.BoxPanel,l=this._vsplitPanel=new B.RestorableSplitPanel,c=this._dockPanel=new h.DockPanelSvg;w.MessageLoop.installMessageHook(c,this._dockChildHook);const g=this._hsplitPanel=new B.RestorableSplitPanel,_=this._downPanel=new h.TabPanelSvg({tabsMovable:!0}),m=this._leftHandler=new B.SideBarHandler,f=this._rightHandler=new B.SideBarHandler,b=new P.BoxLayout;i.id="jp-header-panel",n.panel.id="jp-menu-panel",s.panel.id="jp-top-panel",r.id="jp-bottom-panel",o.id="jp-main-content-panel",l.id="jp-main-vsplit-panel",c.id="jp-main-dock-panel",g.id="jp-main-split-panel",_.id="jp-down-stack",m.sideBar.addClass(y),m.sideBar.addClass("jp-mod-left"),m.sideBar.node.setAttribute("aria-label",t.__("main sidebar")),m.sideBar.contentNode.setAttribute("aria-label",t.__("main sidebar")),m.sideBar.node.setAttribute("role","complementary"),m.stackedPanel.id="jp-left-stack",f.sideBar.addClass(y),f.sideBar.addClass("jp-mod-right"),f.sideBar.node.setAttribute("aria-label",t.__("alternate sidebar")),f.sideBar.contentNode.setAttribute("aria-label",t.__("alternate sidebar")),f.sideBar.node.setAttribute("role","complementary"),f.stackedPanel.id="jp-right-stack",c.node.setAttribute("role","main"),o.spacing=0,l.spacing=1,c.spacing=5,g.spacing=1,i.direction="top-to-bottom",l.orientation="vertical",o.direction="left-to-right",g.orientation="horizontal",r.direction="bottom-to-top",P.SplitPanel.setStretch(m.stackedPanel,0),P.SplitPanel.setStretch(_,0),P.SplitPanel.setStretch(c,1),P.SplitPanel.setStretch(f.stackedPanel,0),P.BoxPanel.setStretch(m.sideBar,0),P.BoxPanel.setStretch(g,1),P.BoxPanel.setStretch(f.sideBar,0),P.SplitPanel.setStretch(l,1),g.addWidget(m.stackedPanel),g.addWidget(c),g.addWidget(f.stackedPanel),l.addWidget(g),l.addWidget(_),o.addWidget(m.sideBar),o.addWidget(l),o.addWidget(f.sideBar),b.direction="top-to-bottom",b.spacing=0,l.setRelativeSizes([3,1]),g.setRelativeSizes([1,2.5,1]),P.BoxLayout.setStretch(i,0),P.BoxLayout.setStretch(n.panel,0),P.BoxLayout.setStretch(s.panel,0),P.BoxLayout.setStretch(o,1),P.BoxLayout.setStretch(r,0),b.addWidget(i),b.addWidget(s.panel),b.addWidget(o),b.addWidget(r),this._headerPanel.hide(),this._bottomPanel.hide(),this._downPanel.hide(),this.layout=b,this._tracker.currentChanged.connect(this._onCurrentChanged,this),this._tracker.activeChanged.connect(this._onActiveChanged,this),this._dockPanel.layoutModified.connect(this._onLayoutModified,this),this._vsplitPanel.updated.connect(this._onLayoutModified,this),this._downPanel.currentChanged.connect(this._onLayoutModified,this),this._downPanel.tabBar.tabMoved.connect(this._onTabPanelChanged,this),this._downPanel.stackedPanel.widgetRemoved.connect(this._onTabPanelChanged,this),this._leftHandler.sideBar.currentChanged.connect(this._onLayoutModified,this),this._rightHandler.sideBar.currentChanged.connect(this._onLayoutModified,this),this._hsplitPanel.updated.connect(this._onLayoutModified,this);const C=this._titleHandler=new B.TitleHandler(this);this.add(C,"top",{rank:100}),"multiple-document"===this._dockPanel.mode?(this._topHandler.addWidget(this._menuHandler.panel,100),C.hide()):b.insertWidget(2,this._menuHandler.panel);const T=this._skipLinkWidget=new B.SkipLinkWidget(this);this.add(T,"top",{rank:0}),this._skipLinkWidget.show(),this.currentChanged.connect(((e,t)=>{let i=t.newValue,n=t.oldValue;n&&n.title.changed.disconnect(this._updateTitlePanelTitle,this),i&&(i.title.changed.connect(this._updateTitlePanelTitle,this),this._updateTitlePanelTitle()),i&&i instanceof d.DocumentWidget&&i.context.pathChanged.connect(this._updateCurrentPath,this),this._updateCurrentPath()}))}get activeChanged(){return this._activeChanged}get activeWidget(){return this._tracker.activeWidget}get currentChanged(){return this._currentChanged}get modeChanged(){return this._modeChanged}get currentPathChanged(){return this._currentPathChanged}get currentWidget(){return this._tracker.currentWidget}get layoutModified(){return this._layoutModified}get leftCollapsed(){return!this._leftHandler.sideBar.currentTitle}get rightCollapsed(){return!this._rightHandler.sideBar.currentTitle}get presentationMode(){return this.hasClass("jp-mod-presentationMode")}set presentationMode(e){this.toggleClass("jp-mod-presentationMode",e)}get mode(){return this._dockPanel.mode}set mode(e){const t=this._dockPanel;if(e===t.mode)return;const i=this.currentWidget;if("single-document"===e)this._cachedLayout=t.saveLayout(),t.mode=e,this.currentWidget&&t.activateWidget(this.currentWidget),this.layout.insertWidget(2,this._menuHandler.panel),this._titleHandler.show(),this._updateTitlePanelTitle();else{const n=(0,f.toArray)(t.widgets());t.mode=e,this._cachedLayout&&(B.normalizeAreaConfig(t,this._cachedLayout.main),t.restoreLayout(this._cachedLayout),this._cachedLayout=null),n.forEach((e=>{e.parent||this._addToMainArea(e,Object.assign(Object.assign({},this._mainOptionsCache.get(e)),{activate:!1}))})),this._mainOptionsCache.clear(),i&&t.activateWidget(i),this.add(this._menuHandler.panel,"top",{rank:100}),this._titleHandler.hide()}this.node.dataset.shellMode=e,this._downPanel.fit(),this._modeChanged.emit(e)}get restored(){return this._restored.promise}activateById(e){if(this._leftHandler.has(e))return void this._leftHandler.activate(e);if(this._rightHandler.has(e))return void this._rightHandler.activate(e);const t=this._downPanel.tabBar.titles.findIndex((t=>t.owner.id===e));if(t>=0)return void(this._downPanel.currentIndex=t);const i=this._dockPanel,n=(0,f.find)(i.widgets(),(t=>t.id===e));n&&i.activateWidget(n)}activateNextTab(){const e=this._currentTabBar();if(!e)return;const t=e.currentIndex;if(-1!==t){if(t<e.titles.length-1)return e.currentIndex+=1,void(e.currentTitle&&e.currentTitle.owner.activate());if(t===e.titles.length-1){const e=this._adjacentBar("next");e&&(e.currentIndex=0,e.currentTitle&&e.currentTitle.owner.activate())}}}activatePreviousTab(){const e=this._currentTabBar();if(!e)return;const t=e.currentIndex;if(-1!==t){if(t>0)return e.currentIndex-=1,void(e.currentTitle&&e.currentTitle.owner.activate());if(0===t){const e=this._adjacentBar("previous");if(e){const t=e.titles.length;e.currentIndex=t-1,e.currentTitle&&e.currentTitle.owner.activate()}}}}activateNextTabBar(){const e=this._adjacentBar("next");e&&e.currentTitle&&e.currentTitle.owner.activate()}activatePreviousTabBar(){const e=this._adjacentBar("previous");e&&e.currentTitle&&e.currentTitle.owner.activate()}add(e,t="main",i){switch(t||"main"){case"bottom":return this._addToBottomArea(e,i);case"down":return this._addToDownArea(e,i);case"header":return this._addToHeaderArea(e,i);case"left":return this._addToLeftArea(e,i);case"main":return this._addToMainArea(e,i);case"menu":return this._addToMenuArea(e,i);case"right":return this._addToRightArea(e,i);case"top":return this._addToTopArea(e,i);default:throw new Error(`Invalid area: ${t}`)}}collapseLeft(){this._leftHandler.collapse(),this._onLayoutModified()}collapseRight(){this._rightHandler.collapse(),this._onLayoutModified()}dispose(){this.isDisposed||(this._layoutDebouncer.dispose(),super.dispose())}expandLeft(){this._leftHandler.expand(),this._onLayoutModified()}expandRight(){this._rightHandler.expand(),this._onLayoutModified()}closeAll(){(0,f.toArray)(this._dockPanel.widgets()).forEach((e=>e.close())),this._downPanel.stackedPanel.widgets.forEach((e=>e.close()))}isEmpty(e){switch(e){case"bottom":return 0===this._bottomPanel.widgets.length;case"down":return 0===this._downPanel.stackedPanel.widgets.length;case"header":return 0===this._headerPanel.widgets.length;case"left":return 0===this._leftHandler.stackedPanel.widgets.length;case"main":return this._dockPanel.isEmpty;case"menu":return 0===this._menuHandler.panel.widgets.length;case"right":return 0===this._rightHandler.stackedPanel.widgets.length;case"top":return 0===this._topHandler.panel.widgets.length;default:return!0}}restoreLayout(e,t){var i,n;const{mainArea:a,downArea:s,leftArea:r,rightArea:o,relativeSizes:d}=t;if(a){const{currentWidget:t,dock:i}=a;i&&this._dockPanel.restoreLayout(i),e&&(this.mode=e),t&&this.activateById(t.id)}else e&&(this.mode=e);if(s){const{currentWidget:e,widgets:t,size:a}=s,r=null!==(i=null==t?void 0:t.map((e=>e.id)))&&void 0!==i?i:[];this._downPanel.tabBar.titles.filter((e=>!r.includes(e.owner.id))).map((e=>e.owner.close()));const o=this._downPanel.tabBar.titles.map((e=>e.owner.id));for(null==t||t.filter((e=>!o.includes(e.id))).map((e=>this._downPanel.addWidget(e)));!f.ArrayExt.shallowEqual(r,this._downPanel.tabBar.titles.map((e=>e.owner.id)));)this._downPanel.tabBar.titles.forEach(((e,t)=>{const i=r.findIndex((t=>e.owner.id==t));i>=0&&i!=t&&this._downPanel.tabBar.insertTab(i,e)}));if(e){const t=this._downPanel.stackedPanel.widgets.findIndex((t=>t.id===e.id));t&&(this._downPanel.currentIndex=t,null===(n=this._downPanel.currentWidget)||void 0===n||n.activate())}a&&a>0?this._vsplitPanel.setRelativeSizes([1-a,a]):(this._downPanel.stackedPanel.widgets.forEach((e=>e.close())),this._downPanel.hide())}r?this._leftHandler.rehydrate(r):"single-document"===e&&this.collapseLeft(),o?this._rightHandler.rehydrate(o):"single-document"===e&&this.collapseRight(),d&&this._hsplitPanel.setRelativeSizes(d),this._isRestored||(w.MessageLoop.flush(),this._restored.resolve(t))}saveLayout(){return{mainArea:{currentWidget:this._tracker.currentWidget,dock:"single-document"===this.mode&&this._cachedLayout||this._dockPanel.saveLayout()},downArea:{currentWidget:this._downPanel.currentWidget,widgets:(0,f.toArray)(this._downPanel.stackedPanel.widgets),size:this._vsplitPanel.relativeSizes()[1]},leftArea:this._leftHandler.dehydrate(),rightArea:this._rightHandler.dehydrate(),relativeSizes:this._hsplitPanel.relativeSizes()}}widgets(e){switch(null!=e?e:"main"){case"main":return this._dockPanel.widgets();case"left":return(0,f.iter)(this._leftHandler.sideBar.titles.map((e=>e.owner)));case"right":return(0,f.iter)(this._rightHandler.sideBar.titles.map((e=>e.owner)));case"header":return this._headerPanel.children();case"top":return this._topHandler.panel.children();case"menu":return this._menuHandler.panel.children();case"bottom":return this._bottomPanel.children();default:throw new Error(`Invalid area: ${e}`)}}onAfterAttach(e){this.node.dataset.shellMode=this.mode}_updateTitlePanelTitle(){let e=this.currentWidget;const t=this._titleHandler.inputElement;t.value=e?e.title.label:"",t.title=e?e.title.caption:""}_updateCurrentPath(){let e=this.currentWidget,t="";e&&e instanceof d.DocumentWidget&&(t=e.context.path),this._currentPathChanged.emit({newValue:t,oldValue:this._currentPath}),this._currentPath=t}_addToLeftArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||this._sideOptionsCache.get(e)||{},this._sideOptionsCache.set(e,t);const i="rank"in t?t.rank:b;this._leftHandler.addWidget(e,i),this._onLayoutModified()}_addToMainArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||{};const i=this._dockPanel,n=t.mode||"tab-after";let a=this.currentWidget;t.ref&&(a=(0,f.find)(i.widgets(),(e=>e.id===t.ref))||null);const{title:s}=e;s.dataset=Object.assign(Object.assign({},s.dataset),{id:e.id}),s.icon instanceof h.LabIcon?s.icon=s.icon.bindprops({stylesheet:"mainAreaTab"}):"string"!=typeof s.icon&&s.icon||(s.iconClass=(0,h.classes)(s.iconClass,"jp-Icon")),i.addWidget(e,{mode:n,ref:a}),"single-document"===i.mode&&this._mainOptionsCache.set(e,t),!1!==t.activate&&i.activateWidget(e)}_addToRightArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const i="rank"in(t=t||this._sideOptionsCache.get(e)||{})?t.rank:b;this._sideOptionsCache.set(e,t),this._rightHandler.addWidget(e,i),this._onLayoutModified()}_addToTopArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:b;this._topHandler.addWidget(e,n),this._onLayoutModified(),this._topHandler.panel.isHidden&&this._topHandler.panel.show()}_addToMenuArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:b;this._menuHandler.addWidget(e,n),this._onLayoutModified(),this._menuHandler.panel.isHidden&&this._menuHandler.panel.show()}_addToHeaderArea(e,t){e.id?(this._headerPanel.addWidget(e),this._onLayoutModified(),this._headerPanel.isHidden&&this._headerPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_addToBottomArea(e,t){e.id?(this._bottomPanel.addWidget(e),this._onLayoutModified(),this._bottomPanel.isHidden&&this._bottomPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_addToDownArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||{};const{title:i}=e;i.dataset=Object.assign(Object.assign({},i.dataset),{id:e.id}),i.icon instanceof h.LabIcon?i.icon=i.icon.bindprops({stylesheet:"mainAreaTab"}):"string"!=typeof i.icon&&i.icon||(i.iconClass=(0,h.classes)(i.iconClass,"jp-Icon")),this._downPanel.addWidget(e),this._onLayoutModified(),this._downPanel.isHidden&&this._downPanel.show()}_adjacentBar(e){const t=this._currentTabBar();if(!t)return null;const i=(0,f.toArray)(this._dockPanel.tabBars()),n=i.length,a=i.indexOf(t);return"previous"===e?a>0?i[a-1]:0===a?i[n-1]:null:a<n-1?i[a+1]:a===n-1?i[0]:null}_currentTabBar(){const e=this._tracker.currentWidget;if(!e)return null;const t=e.title,i=this._dockPanel.tabBars();return(0,f.find)(i,(e=>e.titles.indexOf(t)>-1))||null}_onActiveChanged(e,t){t.newValue&&(t.newValue.title.className+=" jp-mod-active"),t.oldValue&&(t.oldValue.title.className=t.oldValue.title.className.replace("jp-mod-active","")),this._activeChanged.emit(t)}_onCurrentChanged(e,t){t.newValue&&(t.newValue.title.className+=" jp-mod-current"),t.oldValue&&(t.oldValue.title.className=t.oldValue.title.className.replace("jp-mod-current","")),this._currentChanged.emit(t),this._onLayoutModified()}_onTabPanelChanged(){0===this._downPanel.stackedPanel.widgets.length&&this._downPanel.hide(),this._onLayoutModified()}_onLayoutModified(){this._layoutDebouncer.invoke()}}var B;!function(e){e.itemCmp=function(e,t){return e.rank-t.rank},e.normalizeAreaConfig=function e(t,i){i&&("tab-area"!==i.type?i.children.forEach((i=>{e(t,i)})):i.widgets=i.widgets.filter((e=>!e.isDisposed&&e.parent===t)))},e.PanelHandler=class{constructor(){this._panelChildHook=(e,t)=>{switch(t.type){case"child-added":{const e=t.child;if(this._items.find((t=>t.widget===e)))break;const i=this._items[this._items.length-1].rank;this._items.push({widget:e,rank:i})}break;case"child-removed":{const e=t.child;f.ArrayExt.removeFirstWhere(this._items,(t=>t.widget===e))}}return!0},this._items=new Array,this._panel=new P.Panel,w.MessageLoop.installMessageHook(this._panel,this._panelChildHook)}get panel(){return this._panel}addWidget(t,i){t.parent=null;const n={widget:t,rank:i},a=f.ArrayExt.upperBound(this._items,n,e.itemCmp);f.ArrayExt.insert(this._items,a,n),this._panel.insertWidget(a,t)}},e.SideBarHandler=class{constructor(){this._items=new Array,this._sideBar=new P.TabBar({insertBehavior:"none",removeBehavior:"none",allowDeselect:!0,orientation:"vertical"}),this._stackedPanel=new P.StackedPanel,this._sideBar.hide(),this._stackedPanel.hide(),this._lastCurrent=null,this._sideBar.currentChanged.connect(this._onCurrentChanged,this),this._sideBar.tabActivateRequested.connect(this._onTabActivateRequested,this),this._stackedPanel.widgetRemoved.connect(this._onWidgetRemoved,this)}get sideBar(){return this._sideBar}get stackedPanel(){return this._stackedPanel}expand(){const e=this._lastCurrent||this._items.length>0&&this._items[0].widget;e&&this.activate(e.id)}activate(e){const t=this._findWidgetByID(e);t&&(this._sideBar.currentTitle=t.title,t.activate())}has(e){return null!==this._findWidgetByID(e)}collapse(){this._sideBar.currentTitle=null}addWidget(e,t){e.parent=null,e.hide();const i={widget:e,rank:t},n=this._findInsertIndex(i);f.ArrayExt.insert(this._items,n,i),this._stackedPanel.insertWidget(n,e);const a=this._sideBar.insertTab(n,e.title);a.dataset={id:e.id},a.icon instanceof h.LabIcon?a.icon=a.icon.bindprops({stylesheet:"sideBar"}):"string"!=typeof a.icon&&a.icon||(a.iconClass=(0,h.classes)(a.iconClass,"jp-Icon","jp-Icon-20")),this._refreshVisibility()}dehydrate(){const e=null===this._sideBar.currentTitle,t=(0,f.toArray)(this._stackedPanel.widgets);return{collapsed:e,currentWidget:t[this._sideBar.currentIndex],widgets:t}}rehydrate(e){e.currentWidget&&this.activate(e.currentWidget.id),e.collapsed&&this.collapse()}_findInsertIndex(t){return f.ArrayExt.upperBound(this._items,t,e.itemCmp)}_findWidgetIndex(e){return f.ArrayExt.findFirstIndex(this._items,(t=>t.widget===e))}_findWidgetByTitle(e){const t=(0,f.find)(this._items,(t=>t.widget.title===e));return t?t.widget:null}_findWidgetByID(e){const t=(0,f.find)(this._items,(t=>t.widget.id===e));return t?t.widget:null}_refreshVisibility(){this._sideBar.setHidden(0===this._sideBar.titles.length),this._stackedPanel.setHidden(null===this._sideBar.currentTitle)}_onCurrentChanged(e,t){const i=t.previousTitle?this._findWidgetByTitle(t.previousTitle):null,n=t.currentTitle?this._findWidgetByTitle(t.currentTitle):null;i&&i.hide(),n&&n.show(),this._lastCurrent=n||i,this._refreshVisibility()}_onTabActivateRequested(e,t){t.title.owner.activate()}_onWidgetRemoved(e,t){t===this._lastCurrent&&(this._lastCurrent=null),f.ArrayExt.removeAt(this._items,this._findWidgetIndex(t)),this._sideBar.removeTab(t.title),this._refreshVisibility()}};class t extends P.Widget{constructor(e){super(),this.addClass("jp-skiplink"),this.id="jp-skiplink",this._shell=e,this._createSkipLink("Skip to left side bar")}handleEvent(e){switch(e.type){case"click":this._focusLeftSideBar()}}onAfterAttach(e){super.onAfterAttach(e),this.node.addEventListener("click",this)}onBeforeDetach(e){this.node.removeEventListener("click",this),super.onBeforeDetach(e)}_focusLeftSideBar(){this._shell.expandLeft()}_createSkipLink(e){const t=document.createElement("a");t.href="#",t.tabIndex=1,t.text=e,t.className="skip-link",this.node.appendChild(t)}}e.SkipLinkWidget=t;class i extends P.Widget{constructor(e){super(),this._selected=!1;const t=document.createElement("input");t.type="text",this.node.appendChild(t),this._shell=e,this.id="jp-title-panel-title"}onAfterAttach(e){super.onAfterAttach(e),this.inputElement.addEventListener("keyup",this),this.inputElement.addEventListener("click",this),this.inputElement.addEventListener("blur",this)}onBeforeDetach(e){super.onBeforeDetach(e),this.inputElement.removeEventListener("keyup",this),this.inputElement.removeEventListener("click",this),this.inputElement.removeEventListener("blur",this)}handleEvent(e){switch(e.type){case"keyup":this._evtKeyUp(e);break;case"click":this._evtClick(e);break;case"blur":this._selected=!1}}async _evtKeyUp(e){if("Enter"==e.key){const e=this._shell.currentWidget;if(null==e)return;const t=e.title.label,i=this.inputElement,n=i.value;i.blur(),n!==t?e.title.label=n:i.value=t}}_evtClick(e){if(0!==e.button||this._selected)return;const t=this.inputElement;e.preventDefault(),e.stopPropagation(),this._selected=!0;const i=t.value.indexOf(".");-1===i?t.select():t.setSelectionRange(0,i)}get inputElement(){return this.node.children[0]}}e.TitleHandler=i;class n extends P.SplitPanel{constructor(e={}){super(e),this.updated=new p.Signal(this)}onUpdateRequest(e){super.onUpdateRequest(e),this.updated.emit()}}e.RestorableSplitPanel=n}(B||(B={}));var L=i(20389);class x extends g{constructor(e={shell:new T}){super(Object.assign(Object.assign({},e),{shell:e.shell||new T})),this.name=_.PageConfig.getOption("appName")||"JupyterLab",this.namespace=_.PageConfig.getOption("appNamespace")||this.name,this.registerPluginErrors=[],this.status=new L.J(this),this.version=_.PageConfig.getOption("appVersion")||"unknown",this.restored=this.shell.restored.then((()=>{})).catch((()=>{}));const t=Object.keys(x.defaultInfo).reduce(((t,i)=>(i in e&&(t[i]=JSON.parse(JSON.stringify(e[i]))),t)),{});this._info=Object.assign(Object.assign({},x.defaultInfo),t);const i=x.defaultPaths.urls,n=x.defaultPaths.directories,a=e.paths&&e.paths.urls||{},s=e.paths&&e.paths.directories||{};if(this._paths={urls:Object.keys(i).reduce(((e,t)=>{if(t in a){const i=a[t];e[t]=i}else e[t]=i[t];return e}),{}),directories:Object.keys(x.defaultPaths.directories).reduce(((e,t)=>{if(t in s){const i=s[t];e[t]=i}else e[t]=n[t];return e}),{})},this._info.devMode&&this.shell.addClass("jp-mod-devMode"),this.docRegistry.addModelFactory(new d.Base64ModelFactory),e.mimeExtensions)for(const t of(0,m.as)(e.mimeExtensions))this.registerPlugin(t)}get info(){return this._info}get paths(){return this._paths}registerPluginModule(e){let t=e.default;e.hasOwnProperty("__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){this.registerPluginErrors.push(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}!function(e){e.IInfo=new u.Token("@jupyterlab/application:IInfo"),e.defaultInfo={devMode:"true"===_.PageConfig.getOption("devMode").toLowerCase(),deferred:{patterns:[],matches:[]},disabled:{patterns:[],matches:[]},mimeExtensions:[],filesCached:"true"===_.PageConfig.getOption("cacheFiles").toLowerCase()},e.defaultPaths={urls:{base:_.PageConfig.getOption("baseUrl"),notFound:_.PageConfig.getOption("notFoundUrl"),app:_.PageConfig.getOption("appUrl"),doc:_.PageConfig.getOption("docUrl"),static:_.PageConfig.getOption("staticUrl"),settings:_.PageConfig.getOption("settingsUrl"),themes:_.PageConfig.getOption("themesUrl"),translations:_.PageConfig.getOption("translationsApiUrl"),hubHost:_.PageConfig.getOption("hubHost")||void 0,hubPrefix:_.PageConfig.getOption("hubPrefix")||void 0,hubUser:_.PageConfig.getOption("hubUser")||void 0,hubServerName:_.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:_.PageConfig.getOption("appSettingsDir"),schemas:_.PageConfig.getOption("schemasDir"),static:_.PageConfig.getOption("staticDir"),templates:_.PageConfig.getOption("templatesDir"),themes:_.PageConfig.getOption("themesDir"),userSettings:_.PageConfig.getOption("userSettingsDir"),serverRoot:_.PageConfig.getOption("serverRoot"),workspaces:_.PageConfig.getOption("workspacesDir")}}}(x||(x={}));var A=i(67863),W=i(11397);class M{constructor(e){this.stop=new u.Token("@jupyterlab/application:Router#stop"),this._routed=new p.Signal(this),this._rules=new Map,this.base=e.base,this.commands=e.commands}get current(){var e,t;const{base:i}=this,n=_.URLExt.parse(window.location.href),{search:a,hash:s}=n,r=null!==(t=null===(e=n.pathname)||void 0===e?void 0:e.replace(i,"/"))&&void 0!==t?t:"";return{hash:s,path:r,request:r+a+s,search:a}}get routed(){return this._routed}navigate(e,t={}){const{base:i}=this,{history:n}=window,{hard:a}=t,s=document.location.href,r=e&&0===e.indexOf(i)?e:_.URLExt.join(i,e);return r===s?a?this.reload():void 0:(n.pushState({},"",r),a?this.reload():void(t.skipRouting||requestAnimationFrame((()=>{this.route()}))))}register(e){var t;const{command:i,pattern:n}=e,a=null!==(t=e.rank)&&void 0!==t?t:100,s=this._rules;return s.set(n,{command:i,rank:a}),new W.DisposableDelegate((()=>{s.delete(n)}))}reload(){window.location.reload()}route(){const{commands:e,current:t,stop:i}=this,{request:n}=t,a=this._routed,s=this._rules,r=[];s.forEach(((e,t)=>{(null==n?void 0:n.match(t))&&r.push(e)}));const o=r.sort(((e,t)=>t.rank-e.rank)),d=new u.PromiseDelegate,l=async()=>{if(!o.length)return a.emit(t),void d.resolve(void 0);const{command:s}=o.pop();try{const n=this.current.request;await e.execute(s,t)===i&&(o.length=0,console.debug(`Routing ${n} was short-circuited by ${s}`))}catch(e){console.warn(`Routing ${n} to ${s} failed`,e)}l()};return l(),d.promise}}const H=new u.Token("@jupyterlab/apputils:IConnectionLost"),S=new u.Token("@jupyterlab/application:IRouter"),E=new u.Token("@jupyterlab/application:ITreePathUpdater")}}]);
//# sourceMappingURL=6990.2c71f4ff53e773a187fd.js.map