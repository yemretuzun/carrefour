/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{398:function(t,e,r){"use strict";r.r(e);var n=r(318);r(328);var o=function(){return(o=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};function c(t,e,r,n){return new(r||(r=Promise))((function(o,c){function h(t){try{f(n.next(t))}catch(t){c(t)}}function l(t){try{f(n.throw(t))}catch(t){c(t)}}function f(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(h,l)}f((n=n.apply(t,e||[])).next())}))}function h(t,body){var e,r,n,g,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(h){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(n=2&c[0]?r.return:c[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,c[1])).done)return n;switch(r=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){o.label=c[1];break}if(6===c[0]&&o.label<n[1]){o.label=n[1],n=c;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(c);break}n[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],r=0}finally{e=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,h])}}}var l,f=r(319),d=r(322),m=r(320),v=function(){function t(t,e,r,n){this.client=t,this.storage=e,this.storageCache=r,this.logger=n}return t.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var r=Date.now()-e,n=r<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+r+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+n+"."),n},t.prototype.fetch=function(t){return c(this,void 0,void 0,(function(){var e,r,n,o,c;return h(this,(function(h){switch(h.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=h.sent(),r=e[0],(n=e[1])&&this.isCachedDataFresh(t.cacheMaxAgeMillis,r)?[2,n]:(t.eTag=n&&n.eTag,[4,this.client.fetch(t)]);case 2:return o=h.sent(),c=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===o.status&&c.push(this.storage.setLastSuccessfulFetchResponse(o)),[4,Promise.all(c)];case 3:return h.sent(),[2,o]}}))}))},t}(),y=((l={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",l["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",l["registration-api-key"]="Undefined API key. Check Firebase app initialization.",l["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",l["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",l["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",l["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",l["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",l["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",l["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',l["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',l["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",l["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",l),w=new f.b("remoteconfig","Remote Config",y);var _=function(){function t(t,e,r,n,o,c){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=r,this.projectId=n,this.apiKey=o,this.appId=c}return t.prototype.fetch=function(t){return c(this,void 0,void 0,(function(){var e,r,n,o,c,l,f,d,m,v,y,_,C,S,T,E,M,F,I;return h(this,(function(h){switch(h.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=h.sent(),r=e[0],n=e[1],o=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",c=o+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,l={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},f={sdk_version:this.sdkVersion,app_instance_id:r,app_instance_id_token:n,app_id:this.appId,language_code:(void 0===L&&(L=navigator),L.languages&&L.languages[0]||L.language)},d={method:"POST",headers:l,body:JSON.stringify(f)},m=fetch(c,d),v=new Promise((function(e,r){t.signal.addEventListener((function(){var t=new Error("The operation was aborted.");t.name="AbortError",r(t)}))})),h.label=2;case 2:return h.trys.push([2,5,,6]),[4,Promise.race([m,v])];case 3:return h.sent(),[4,m];case 4:return y=h.sent(),[3,6];case 5:throw _=h.sent(),C="fetch-client-network","AbortError"===_.name&&(C="fetch-timeout"),w.create(C,{originalErrorMessage:_.message});case 6:if(S=y.status,T=y.headers.get("ETag")||void 0,200!==y.status)return[3,11];F=void 0,h.label=7;case 7:return h.trys.push([7,9,,10]),[4,y.json()];case 8:return F=h.sent(),[3,10];case 9:throw I=h.sent(),w.create("fetch-client-parse",{originalErrorMessage:I.message});case 10:E=F.entries,M=F.state,h.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===M?S=500:"NO_CHANGE"===M?S=304:"NO_TEMPLATE"!==M&&"EMPTY_CONFIG"!==M||(E={}),304!==S&&200!==S)throw w.create("fetch-status",{httpStatus:S});return[2,{status:S,eTag:T,config:E}]}var L}))}))},t}(),C=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach((function(t){return t()}))},t}(),S=["1","true","t","yes","y","on"],T=function(){function t(t,e){void 0===e&&(e=""),this._source=t,this._value=e}return t.prototype.asString=function(){return this._value},t.prototype.asBoolean=function(){return"static"!==this._source&&S.indexOf(this._value.toLowerCase())>=0},t.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},t.prototype.getSource=function(){return this._source},t}(),E=function(){function t(t,e,r,n,o){this.app=t,this._client=e,this._storageCache=r,this._storage=n,this._logger=o,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}return t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=d.a.DEBUG;break;case"silent":this._logger.logLevel=d.a.SILENT;break;default:this._logger.logLevel=d.a.ERROR}},Object.defineProperty(t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!1,configurable:!0}),t.prototype.activate=function(){return c(this,void 0,void 0,(function(){var t,e,r;return h(this,(function(n){switch(n.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return t=n.sent(),e=t[0],r=t[1],e&&e.config&&e.eTag&&e.eTag!==r?[4,Promise.all([this._storageCache.setActiveConfig(e.config),this._storage.setActiveConfigEtag(e.eTag)])]:[2,!1];case 2:return n.sent(),[2,!0]}}))}))},t.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then((function(){t._isInitializationComplete=!0}))),this._initializePromise},t.prototype.fetch=function(){return c(this,void 0,void 0,(function(){var t,e,r,n=this;return h(this,(function(o){switch(o.label){case 0:t=new C,setTimeout((function(){return c(n,void 0,void 0,(function(){return h(this,(function(e){return t.abort(),[2]}))}))}),this.settings.fetchTimeoutMillis),o.label=1;case 1:return o.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:t})];case 2:return o.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return o.sent(),[3,6];case 4:return e=o.sent(),d="fetch-throttle",r=(l=e)instanceof f.c&&-1!==l.code.indexOf(d)?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(r)];case 5:throw o.sent(),e;case 6:return[2]}var l,d}))}))},t.prototype.fetchAndActivate=function(){return c(this,void 0,void 0,(function(){return h(this,(function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}}))}))},t.prototype.getAll=function(){var t=this;return function(t,e){void 0===t&&(t={});void 0===e&&(e={});return Object.keys(o(o({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce((function(e,r){return e[r]=t.getValue(r),e}),{})},t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},t.prototype.getString=function(t){return this.getValue(t).asString()},t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new T("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new T("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new T("static"))},t}();function M(t,e){var r=t.target.error||void 0;return w.create(e,{originalErrorMessage:r&&r.message})}var F=function(){function t(t,e,r,n){void 0===n&&(n=new Promise((function(t,e){var r=indexedDB.open("firebase_remote_config",1);r.onerror=function(t){e(M(t,"storage-open"))},r.onsuccess=function(e){t(e.target.result)},r.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore("app_namespace_store",{keyPath:"compositeKey"})}}}))),this.appId=t,this.appName=e,this.namespace=r,this.openDbPromise=n}return t.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},t.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},t.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},t.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},t.prototype.getActiveConfig=function(){return this.get("active_config")},t.prototype.setActiveConfig=function(t){return this.set("active_config",t)},t.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},t.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},t.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},t.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},t.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},t.prototype.get=function(t){return c(this,void 0,void 0,(function(){var e,r=this;return h(this,(function(n){switch(n.label){case 0:return[4,this.openDbPromise];case 1:return e=n.sent(),[2,new Promise((function(n,o){var c=e.transaction(["app_namespace_store"],"readonly").objectStore("app_namespace_store"),h=r.createCompositeKey(t);try{var l=c.get(h);l.onerror=function(t){o(M(t,"storage-get"))},l.onsuccess=function(t){var e=t.target.result;n(e?e.value:void 0)}}catch(t){o(w.create("storage-get",{originalErrorMessage:t&&t.message}))}}))]}}))}))},t.prototype.set=function(t,e){return c(this,void 0,void 0,(function(){var r,n=this;return h(this,(function(o){switch(o.label){case 0:return[4,this.openDbPromise];case 1:return r=o.sent(),[2,new Promise((function(o,c){var h=r.transaction(["app_namespace_store"],"readwrite").objectStore("app_namespace_store"),l=n.createCompositeKey(t);try{var f=h.put({compositeKey:l,value:e});f.onerror=function(t){c(M(t,"storage-set"))},f.onsuccess=function(){o()}}catch(t){c(w.create("storage-set",{originalErrorMessage:t&&t.message}))}}))]}}))}))},t.prototype.delete=function(t){return c(this,void 0,void 0,(function(){var e,r=this;return h(this,(function(n){switch(n.label){case 0:return[4,this.openDbPromise];case 1:return e=n.sent(),[2,new Promise((function(n,o){var c=e.transaction(["app_namespace_store"],"readwrite").objectStore("app_namespace_store"),h=r.createCompositeKey(t);try{var l=c.delete(h);l.onerror=function(t){o(M(t,"storage-delete"))},l.onsuccess=function(){n()}}catch(t){o(w.create("storage-delete",{originalErrorMessage:t&&t.message}))}}))]}}))}))},t.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},t}(),I=function(){function t(t){this.storage=t}return t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},t.prototype.getActiveConfig=function(){return this.activeConfig},t.prototype.loadFromStorage=function(){return c(this,void 0,void 0,(function(){var t,e,r,n,o,c;return h(this,(function(h){switch(h.label){case 0:return t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),[4,t];case 1:return(n=h.sent())&&(this.lastFetchStatus=n),[4,e];case 2:return(o=h.sent())&&(this.lastSuccessfulFetchTimestampMillis=o),[4,r];case 3:return(c=h.sent())&&(this.activeConfig=c),[2]}}))}))},t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},t}();function L(t,e){return new Promise((function(r,n){var o=Math.max(e-Date.now(),0),c=setTimeout(r,o);t.addEventListener((function(){clearTimeout(c),n(w.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}var k,P=function(){function t(t,e){this.client=t,this.storage=e}return t.prototype.fetch=function(t){return c(this,void 0,void 0,(function(){var e;return h(this,(function(r){switch(r.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=r.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(t,e)]}}))}))},t.prototype.attemptFetch=function(t,e){var r=e.throttleEndTimeMillis,n=e.backoffCount;return c(this,void 0,void 0,(function(){var e,o,c;return h(this,(function(h){switch(h.label){case 0:return[4,L(t.signal,r)];case 1:h.sent(),h.label=2;case 2:return h.trys.push([2,5,,7]),[4,this.client.fetch(t)];case 3:return e=h.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return h.sent(),[2,e];case 5:if(!function(t){if(!(t instanceof f.c&&t.customData))return!1;var e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(o=h.sent()))throw o;return c={throttleEndTimeMillis:Date.now()+Object(f.j)(n),backoffCount:n+1},[4,this.storage.setThrottleMetadata(c)];case 6:return h.sent(),[2,this.attemptFetch(t,c)];case 7:return[2]}}))}))},t}();(k=n.a).INTERNAL.registerComponent(new m.a("remoteConfig",(function(t,e){var r=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();if("undefined"==typeof window)throw w.create("registration-window");var o=r.options,c=o.projectId,h=o.apiKey,l=o.appId;if(!c)throw w.create("registration-project-id");if(!h)throw w.create("registration-api-key");if(!l)throw w.create("registration-app-id");e=e||"firebase";var f=new F(l,r.name,e),m=new I(f),y=new d.b("@firebase/remote-config");y.logLevel=d.a.ERROR;var C=new _(n,k.SDK_VERSION,e,c,h,l),S=new P(C,f),T=new v(S,f,m,y),M=new E(r,T,m,f,y);return M.ensureInitialized(),M}),"PUBLIC").setMultipleInstances(!0)),k.registerVersion("@firebase/remote-config","0.1.30")}}]);