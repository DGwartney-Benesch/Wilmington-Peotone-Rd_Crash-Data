System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/tools/app-config-operations.ts ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppConfigOperation)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");


class AppConfigOperation {
    constructor() {
        this.id = 'edit-app-config-operation';
    }
    afterWidgetCopied(sourceWidgetId, sourceAppConfig, destWidgetId, destAppConfig, contentMap) {
        if (!contentMap) { // no need to change widget linkage if it is not performed during a page copying
            return destAppConfig;
        }
        let newAppConfig = destAppConfig;
        const widgetJson = sourceAppConfig.widgets[sourceWidgetId];
        const config = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.config;
        if (config.mapViewsConfig) {
            let newMapViewsConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
            for (const [jimuMapViewId, mapViewConfig] of Object.entries(config.mapViewsConfig)) {
                const customJimuLayerViewIds = mapViewConfig.customJimuLayerViewIds || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
                const newCustomJimuLayerViewIds = customJimuLayerViewIds.map(jimuLayerViewId => jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.mapViewUtils.getCopiedJimuLayerViewId(contentMap, jimuLayerViewId));
                const newMapViewConfig = mapViewConfig.set('customJimuLayerViewIds', newCustomJimuLayerViewIds);
                const newJimuMapViewId = jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.mapViewUtils.getCopiedJimuMapViewId(contentMap, jimuMapViewId);
                newMapViewsConfig = newMapViewsConfig.set(newJimuMapViewId, newMapViewConfig);
            }
            newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'mapViewsConfig'], newMapViewsConfig);
        }
        return newAppConfig;
    }
    /**
     * Cleanup the widget config when the useDataSource will be removed
     * @returns The updated appConfig
     */
    useDataSourceWillChange(appConfig, dataSourceId) {
        const widgetJson = appConfig.widgets[this.widgetId];
        let updatedAppConfig = appConfig;
        let newWidgetJson = widgetJson;
        const widgetConfig = widgetJson.config;
        const layersConfig = widgetConfig.layersConfig;
        const newLayersConfig = layersConfig.filter(l => isUseDsWillRemove(l.useDataSource, dataSourceId));
        if (layersConfig.length !== newLayersConfig.length) {
            newWidgetJson = newWidgetJson.setIn(['config', 'layersConfig'], newLayersConfig);
        }
        for (const [jimuMapViewId, mapViewConfig] of Object.entries(widgetConfig.mapViewsConfig || {})) {
            const mapViewLayersConfig = mapViewConfig.layersConfig;
            const newMapViewLayersConfig = mapViewLayersConfig.filter(l => isUseDsWillRemove(l.useDataSource, dataSourceId));
            if (mapViewLayersConfig.length !== newMapViewLayersConfig.length) {
                newWidgetJson = newWidgetJson.setIn(['config', 'mapViewsConfig', jimuMapViewId, 'layersConfig'], newMapViewLayersConfig);
            }
        }
        if (newWidgetJson !== widgetJson) {
            updatedAppConfig = updatedAppConfig.setIn(['widgets', this.widgetId], newWidgetJson);
        }
        return updatedAppConfig;
    }
}
const isUseDsWillRemove = (useDs, dsIdToRemove) => {
    return ![useDs === null || useDs === void 0 ? void 0 : useDs.dataSourceId, useDs === null || useDs === void 0 ? void 0 : useDs.rootDataSourceId].includes(dsIdToRemove);
};

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b21fZWRpdC9kaXN0L3Rvb2xzL2FwcC1jb25maWctb3BlcmF0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUNKcUU7QUFFOUU7QUFFM0IsTUFBTSxrQkFBa0I7SUFBdkM7UUFDRSxPQUFFLEdBQUcsMkJBQTJCO0lBaUVsQyxDQUFDO0lBOURDLGlCQUFpQixDQUNmLGNBQXNCLEVBQ3RCLGVBQTRCLEVBQzVCLFlBQW9CLEVBQ3BCLGFBQTBCLEVBQzFCLFVBQTZCO1FBRTdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLGdGQUFnRjtZQUNqRyxPQUFPLGFBQWE7UUFDdEIsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLGFBQWE7UUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDMUQsTUFBTSxNQUFNLEdBQWEsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLE1BQU07UUFFM0MsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7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b0IsRUFBRSxFQUFFO0lBQ3pFLE9BQU8sQ0FBQyxDQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxZQUFZLEVBQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGdCQUFnQixDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztBQUMvRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvdG9vbHMvYXBwLWNvbmZpZy1vcGVyYXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IHR5cGUgSU1Vc2VEYXRhU291cmNlLCBJbW11dGFibGUsIHR5cGUgRHVwbGljYXRlQ29udGV4dCwgdHlwZSBleHRlbnNpb25TcGVjLCB0eXBlIElNQXBwQ29uZmlnIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBtYXBWaWV3VXRpbHMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbmZpZ09wZXJhdGlvbiBpbXBsZW1lbnRzIGV4dGVuc2lvblNwZWMuQXBwQ29uZmlnT3BlcmF0aW9uc0V4dGVuc2lvbiB7XHJcbiAgaWQgPSAnZWRpdC1hcHAtY29uZmlnLW9wZXJhdGlvbidcclxuICB3aWRnZXRJZDogc3RyaW5nXHJcblxyXG4gIGFmdGVyV2lkZ2V0Q29waWVkIChcclxuICAgIHNvdXJjZVdpZGdldElkOiBzdHJpbmcsXHJcbiAgICBzb3VyY2VBcHBDb25maWc6IElNQXBwQ29uZmlnLFxyXG4gICAgZGVzdFdpZGdldElkOiBzdHJpbmcsXHJcbiAgICBkZXN0QXBwQ29uZmlnOiBJTUFwcENvbmZpZyxcclxuICAgIGNvbnRlbnRNYXA/OiBEdXBsaWNhdGVDb250ZXh0XHJcbiAgKTogSU1BcHBDb25maWcge1xyXG4gICAgaWYgKCFjb250ZW50TWFwKSB7IC8vIG5vIG5lZWQgdG8gY2hhbmdlIHdpZGdldCBsaW5rYWdlIGlmIGl0IGlzIG5vdCBwZXJmb3JtZWQgZHVyaW5nIGEgcGFnZSBjb3B5aW5nXHJcbiAgICAgIHJldHVybiBkZXN0QXBwQ29uZmlnXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld0FwcENvbmZpZyA9IGRlc3RBcHBDb25maWdcclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSBzb3VyY2VBcHBDb25maWcud2lkZ2V0c1tzb3VyY2VXaWRnZXRJZF1cclxuICAgIGNvbnN0IGNvbmZpZzogSU1Db25maWcgPSB3aWRnZXRKc29uPy5jb25maWdcclxuXHJcbiAgICBpZiAoY29uZmlnLm1hcFZpZXdzQ29uZmlnKSB7XHJcbiAgICAgIGxldCBuZXdNYXBWaWV3c0NvbmZpZyA9IEltbXV0YWJsZSh7fSlcclxuICAgICAgZm9yIChjb25zdCBbamltdU1hcFZpZXdJZCwgbWFwVmlld0NvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnLm1hcFZpZXdzQ29uZmlnKSkge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbUppbXVMYXllclZpZXdJZHMgPSBtYXBWaWV3Q29uZmlnLmN1c3RvbUppbXVMYXllclZpZXdJZHMgfHwgSW1tdXRhYmxlKFtdKVxyXG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbUppbXVMYXllclZpZXdJZHM9IGN1c3RvbUppbXVMYXllclZpZXdJZHMubWFwKGppbXVMYXllclZpZXdJZCA9PiBtYXBWaWV3VXRpbHMuZ2V0Q29waWVkSmltdUxheWVyVmlld0lkKGNvbnRlbnRNYXAsIGppbXVMYXllclZpZXdJZCkpXHJcbiAgICAgICAgY29uc3QgbmV3TWFwVmlld0NvbmZpZyA9IG1hcFZpZXdDb25maWcuc2V0KCdjdXN0b21KaW11TGF5ZXJWaWV3SWRzJywgbmV3Q3VzdG9tSmltdUxheWVyVmlld0lkcylcclxuICAgICAgICBjb25zdCBuZXdKaW11TWFwVmlld0lkID0gbWFwVmlld1V0aWxzLmdldENvcGllZEppbXVNYXBWaWV3SWQoY29udGVudE1hcCwgamltdU1hcFZpZXdJZClcclxuICAgICAgICBuZXdNYXBWaWV3c0NvbmZpZyA9IG5ld01hcFZpZXdzQ29uZmlnLnNldChuZXdKaW11TWFwVmlld0lkLCBuZXdNYXBWaWV3Q29uZmlnKVxyXG4gICAgICB9XHJcbiAgICAgIG5ld0FwcENvbmZpZyA9IG5ld0FwcENvbmZpZy5zZXRJbihbJ3dpZGdldHMnLCBkZXN0V2lkZ2V0SWQsICdjb25maWcnLCAnbWFwVmlld3NDb25maWcnXSwgbmV3TWFwVmlld3NDb25maWcpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld0FwcENvbmZpZ1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYW51cCB0aGUgd2lkZ2V0IGNvbmZpZyB3aGVuIHRoZSB1c2VEYXRhU291cmNlIHdpbGwgYmUgcmVtb3ZlZFxyXG4gICAqIEByZXR1cm5zIFRoZSB1cGRhdGVkIGFwcENvbmZpZ1xyXG4gICAqL1xyXG4gIHVzZURhdGFTb3VyY2VXaWxsQ2hhbmdlIChhcHBDb25maWc6IElNQXBwQ29uZmlnLCBkYXRhU291cmNlSWQ6IHN0cmluZyk6IElNQXBwQ29uZmlnIHtcclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWcud2lkZ2V0c1t0aGlzLndpZGdldElkXVxyXG5cclxuICAgIGxldCB1cGRhdGVkQXBwQ29uZmlnID0gYXBwQ29uZmlnXHJcblxyXG4gICAgbGV0IG5ld1dpZGdldEpzb24gPSB3aWRnZXRKc29uXHJcblxyXG4gICAgY29uc3Qgd2lkZ2V0Q29uZmlnID0gd2lkZ2V0SnNvbi5jb25maWcgYXMgSU1Db25maWdcclxuICAgIGNvbnN0IGxheWVyc0NvbmZpZyA9IHdpZGdldENvbmZpZy5sYXllcnNDb25maWdcclxuICAgIGNvbnN0IG5ld0xheWVyc0NvbmZpZyA9IGxheWVyc0NvbmZpZy5maWx0ZXIobCA9PiBpc1VzZURzV2lsbFJlbW92ZShsLnVzZURhdGFTb3VyY2UsIGRhdGFTb3VyY2VJZCkpXHJcbiAgICBpZiAobGF5ZXJzQ29uZmlnLmxlbmd0aCAhPT0gbmV3TGF5ZXJzQ29uZmlnLmxlbmd0aCkge1xyXG4gICAgICBuZXdXaWRnZXRKc29uID0gbmV3V2lkZ2V0SnNvbi5zZXRJbihbJ2NvbmZpZycsICdsYXllcnNDb25maWcnXSwgbmV3TGF5ZXJzQ29uZmlnKVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgW2ppbXVNYXBWaWV3SWQsIG1hcFZpZXdDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKHdpZGdldENvbmZpZy5tYXBWaWV3c0NvbmZpZyB8fCB7fSkpIHtcclxuICAgICAgY29uc3QgbWFwVmlld0xheWVyc0NvbmZpZyA9IG1hcFZpZXdDb25maWcubGF5ZXJzQ29uZmlnXHJcbiAgICAgIGNvbnN0IG5ld01hcFZpZXdMYXllcnNDb25maWcgPSBtYXBWaWV3TGF5ZXJzQ29uZmlnLmZpbHRlcihsID0+IGlzVXNlRHNXaWxsUmVtb3ZlKGwudXNlRGF0YVNvdXJjZSwgZGF0YVNvdXJjZUlkKSlcclxuICAgICAgaWYgKG1hcFZpZXdMYXllcnNDb25maWcubGVuZ3RoICE9PSBuZXdNYXBWaWV3TGF5ZXJzQ29uZmlnLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld1dpZGdldEpzb24gPSBuZXdXaWRnZXRKc29uLnNldEluKFsnY29uZmlnJywgJ21hcFZpZXdzQ29uZmlnJywgamltdU1hcFZpZXdJZCwgJ2xheWVyc0NvbmZpZyddLCBuZXdNYXBWaWV3TGF5ZXJzQ29uZmlnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1dpZGdldEpzb24gIT09IHdpZGdldEpzb24pIHtcclxuICAgICAgdXBkYXRlZEFwcENvbmZpZyA9IHVwZGF0ZWRBcHBDb25maWcuc2V0SW4oWyd3aWRnZXRzJywgdGhpcy53aWRnZXRJZF0sIG5ld1dpZGdldEpzb24pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWRBcHBDb25maWdcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGlzVXNlRHNXaWxsUmVtb3ZlID0gKHVzZURzOiBJTVVzZURhdGFTb3VyY2UsIGRzSWRUb1JlbW92ZTogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuICFbdXNlRHM/LmRhdGFTb3VyY2VJZCwgdXNlRHM/LnJvb3REYXRhU291cmNlSWRdLmluY2x1ZGVzKGRzSWRUb1JlbW92ZSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=