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

/***/ "./your-extensions/widgets/custom_edit/src/config.ts"
/*!***********************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/config.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditModeType: () => (/* binding */ EditModeType),
/* harmony export */   ImportHintType: () => (/* binding */ ImportHintType),
/* harmony export */   LayerHonorModeType: () => (/* binding */ LayerHonorModeType),
/* harmony export */   SnapSettingMode: () => (/* binding */ SnapSettingMode)
/* harmony export */ });
var EditModeType;
(function (EditModeType) {
    EditModeType["Attribute"] = "ATTRIBUTE";
    EditModeType["Geometry"] = "GEOMETRY";
})(EditModeType || (EditModeType = {}));
var LayerHonorModeType;
(function (LayerHonorModeType) {
    LayerHonorModeType["Webmap"] = "WEBMAP";
    LayerHonorModeType["Custom"] = "CUSTOM";
})(LayerHonorModeType || (LayerHonorModeType = {}));
var ImportHintType;
(function (ImportHintType) {
    ImportHintType["NoMap"] = "NOMAP";
    ImportHintType["NoLayer"] = "NOEDITABLE";
})(ImportHintType || (ImportHintType = {}));
var SnapSettingMode;
(function (SnapSettingMode) {
    SnapSettingMode["Prescriptive"] = "PRESCRIPTIVE";
    SnapSettingMode["Flexible"] = "FLEXIBLE";
})(SnapSettingMode || (SnapSettingMode = {}));


/***/ },

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
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/data-actions/edit.ts ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/custom_edit/src/config.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");



class Edit extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    isSupported(dataSets, dataLevel, widgetId) {
        var _a, _b;
        let isActionSupported = false;
        let editHaveThisDs = false;
        const dataSet = dataSets[0];
        const { dataSource, records } = dataSet;
        const appState = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
        const appConfig = appState === null || appState === void 0 ? void 0 : appState.appConfig;
        const isWidgetInController = (_a = appState === null || appState === void 0 ? void 0 : appState.widgetsRuntimeInfo[this.widgetId]) === null || _a === void 0 ? void 0 : _a.controllerWidgetId;
        const targetEditWidget = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets[this.widgetId];
        if (!targetEditWidget)
            return;
        const useMapWidgetIds = targetEditWidget.useMapWidgetIds || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
        const { layersConfig, mapViewsConfig, editMode } = targetEditWidget.config;
        if (editMode === _config__WEBPACK_IMPORTED_MODULE_1__.EditModeType.Geometry) {
            if (useMapWidgetIds.length === 1) {
                const jimuMapViews = ((_b = jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.MapViewManager.getInstance().getJimuMapViewGroup(useMapWidgetIds[0])) === null || _b === void 0 ? void 0 : _b.getAllJimuMapViews()) || [];
                for (const jimuMapView of jimuMapViews) {
                    const mapViewConfig = mapViewsConfig === null || mapViewsConfig === void 0 ? void 0 : mapViewsConfig[jimuMapView.id];
                    if (mapViewConfig) {
                        const layerConfig = mapViewConfig.layersConfig.find(l => l.id === dataSource.id);
                        if (layerConfig) {
                            editHaveThisDs = true;
                        }
                    }
                    else {
                        const jimuLayerViews = jimuMapView.getAllJimuLayerViews();
                        const dsIds = jimuLayerViews.map(v => v.layerDataSourceId);
                        if (dsIds.includes(dataSource.id)) {
                            editHaveThisDs = true;
                        }
                    }
                }
            }
        }
        else {
            editHaveThisDs = !!layersConfig.find(item => item.useDataSource.dataSourceId === dataSource.id);
        }
        if (editHaveThisDs && dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records && (records === null || records === void 0 ? void 0 : records.length) > 0 && isWidgetInController) {
            isActionSupported = true;
        }
        return Promise.resolve(isActionSupported && dataSource.getStatus() !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady);
    }
    onExecute(dataSets, dataLevel, widgetId) {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.openWidgets([this.widgetId]));
        return Promise.resolve(true);
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b21fZWRpdC9kaXN0L2RhdGEtYWN0aW9ucy9lZGl0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUN0Qix1Q0FBdUI7SUFDdkIscUNBQXFCO0FBQ3ZCLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUVELElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1Qix1Q0FBaUI7SUFDakIsdUNBQWlCO0FBQ25CLENBQUMsRUFIVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRzdCO0FBRUQsSUFBWSxjQUdYO0FBSEQsV0FBWSxjQUFjO0lBQ3hCLGlDQUFlO0lBQ2Ysd0NBQXNCO0FBQ3hCLENBQUMsRUFIVyxjQUFjLEtBQWQsY0FBYyxRQUd6QjtBQUVELElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN6QixnREFBNkI7SUFDN0Isd0NBQXFCO0FBQ3ZCLENBQUMsRUFIVyxlQUFlLEtBQWYsZUFBZSxRQUcxQjs7Ozs7Ozs7Ozs7O0FDeEJELHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7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QU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLHVEQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNuRyxDQUFDO0lBRUQsU0FBUyxDQUFFLFFBQXlCLEVBQUUsU0FBb0IsRUFBRSxRQUFnQjtRQUMxRSxzREFBVyxFQUFFLENBQUMsUUFBUSxDQUNwQixpREFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUN4QztRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvZGF0YS1hY3Rpb25zL2VkaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xyXG4gIEltbXV0YWJsZU9iamVjdCxcclxuICBVc2VEYXRhU291cmNlLFxyXG4gIEZpZWxkU2NoZW1hXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdE1vZGVUeXBlIHtcclxuICBBdHRyaWJ1dGUgPSAnQVRUUklCVVRFJyxcclxuICBHZW9tZXRyeSA9ICdHRU9NRVRSWSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTGF5ZXJIb25vck1vZGVUeXBlIHtcclxuICBXZWJtYXAgPSAnV0VCTUFQJyxcclxuICBDdXN0b20gPSAnQ1VTVE9NJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbXBvcnRIaW50VHlwZSB7XHJcbiAgTm9NYXAgPSAnTk9NQVAnLFxyXG4gIE5vTGF5ZXIgPSAnTk9FRElUQUJMRSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU25hcFNldHRpbmdNb2RlIHtcclxuICBQcmVzY3JpcHRpdmUgPSAnUFJFU0NSSVBUSVZFJyxcclxuICBGbGV4aWJsZSA9ICdGTEVYSUJMRSdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlRmllbGRzIGV4dGVuZHMgRmllbGRTY2hlbWEge1xyXG4gIGNoaWxkcmVuPzogVHJlZUZpZWxkc1tdXHJcbiAgZ3JvdXBLZXk/OiBudW1iZXJcclxuICBlZGl0QXV0aG9yaXR5PzogYm9vbGVhblxyXG4gIHN1YkRlc2NyaXB0aW9uPzogc3RyaW5nXHJcbiAgZWRpdGFibGU/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJzQ29uZmlnIHtcclxuICBpZDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIGFkZFJlY29yZHM/OiBib29sZWFuXHJcbiAgZGVsZXRlUmVjb3Jkcz86IGJvb2xlYW5cclxuICB1cGRhdGVSZWNvcmRzPzogYm9vbGVhblxyXG4gIHVwZGF0ZUF0dHJpYnV0ZXM/OiBib29sZWFuXHJcbiAgdXBkYXRlR2VvbWV0cmllcz86IGJvb2xlYW5cclxuICBzaG93RmllbGRzOiBGaWVsZFNjaGVtYVtdXHJcbiAgZ3JvdXBlZEZpZWxkczogVHJlZUZpZWxkc1tdXHJcbiAgbGF5ZXJIb25vck1vZGU6IExheWVySG9ub3JNb2RlVHlwZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcFZpZXdDb25maWcge1xyXG4gIGN1c3RvbWl6ZUxheWVyczogYm9vbGVhblxyXG4gIGN1c3RvbUppbXVMYXllclZpZXdJZHM/OiBzdHJpbmdbXVxyXG4gIGxheWVyc0NvbmZpZz86IExheWVyc0NvbmZpZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwVmlld3NDb25maWcge1xyXG4gIFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBNYXBWaWV3Q29uZmlnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBsYXllcnNDb25maWc/OiBMYXllcnNDb25maWdbXSAvLyBmZWF0dXJlIGZvcm1cclxuICBtYXBWaWV3c0NvbmZpZz86IE1hcFZpZXdzQ29uZmlnXHJcbiAgZWRpdE1vZGU6IEVkaXRNb2RlVHlwZSAvLyBjb21tb25cclxuICBncmlkU25hcHBpbmc/OiBib29sZWFuXHJcbiAgc2VsZlNuYXBwaW5nPzogYm9vbGVhblxyXG4gIGZlYXR1cmVTbmFwcGluZz86IGJvb2xlYW5cclxuICBkZWZhdWx0R3JpZEVuYWJsZWQ/OiBib29sZWFuXHJcbiAgZGVmYXVsdFNlbGZFbmFibGVkPzogYm9vbGVhblxyXG4gIGRlZmF1bHRGZWF0dXJlRW5hYmxlZD86IGJvb2xlYW5cclxuICBkZWZhdWx0U25hcExheWVycz86IHN0cmluZ1tdXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyAvLyBmZWF0dXJlIGZvcm1cclxuICBub0RhdGFNZXNzYWdlOiBzdHJpbmcgLy8gZmVhdHVyZSBmb3JtXHJcbiAgc25hcFNldHRpbmdNb2RlOiBTbmFwU2V0dGluZ01vZGVcclxuICB0b29sdGlwPzogYm9vbGVhblxyXG4gIGRlZmF1bHRUb29sdGlwRW5hYmxlZD86IGJvb2xlYW5cclxuICBzZWdtZW50TGFiZWw/OiBib29sZWFuXHJcbiAgZGVmYXVsdFNlZ21lbnRMYWJlbEVuYWJsZWQ/OiBib29sZWFuXHJcbiAgdGVtcGxhdGVGaWx0ZXI/OiBib29sZWFuXHJcbiAgcmVsYXRlZFJlY29yZHM/OiBib29sZWFuXHJcbiAgbGl2ZURhdGFFZGl0aW5nPzogYm9vbGVhblxyXG4gIGluaXRpYWxSZXNoYXBlTW9kZT86IGJvb2xlYW5cclxuICBiYXRjaEVkaXRpbmc/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlcyBhZHZhbmNlZCBlZGl0aW5nIHRvb2xzIGluIHRoZSB3aWRnZXQgaW50ZXJmYWNlLlxyXG4gICAqIFdoZW4gc2V0IHRvIHRydWUsIGFkZGl0aW9uYWwgZWRpdGluZyBmdW5jdGlvbmFsaXRpZXMgc3VjaCBhcyBzcGxpdCBhbmQgbWVyZ2Ugb3BlcmF0aW9ucyBiZWNvbWUgYXZhaWxhYmxlLlxyXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgcmVsYXRlZCB0byBgc3BsaXRCdXR0b25gIGFuZCBgbWVyZ2VCdXR0b25gLCB3aGljaCBjb250cm9sIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSByZXNwZWN0aXZlIGJ1dHRvbnMgZm9yIHNwbGl0dGluZyBhbmQgbWVyZ2luZyBmZWF0dXJlcy5cclxuICAgKi9cclxuICBhZHZhbmNlZEVkaXRpbmdUb29scz86IGJvb2xlYW5cclxuICBzcGxpdEJ1dHRvbj86IGJvb2xlYW5cclxuICBtZXJnZUJ1dHRvbj86IGJvb2xlYW5cclxuICBjb3B5UGFzdGU/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtcclxuICBBYnN0cmFjdERhdGFBY3Rpb24sXHJcbiAgdHlwZSBEYXRhUmVjb3JkU2V0LFxyXG4gIGdldEFwcFN0b3JlLFxyXG4gIGFwcEFjdGlvbnMsXHJcbiAgRGF0YVNvdXJjZVN0YXR1cyxcclxuICBEYXRhTGV2ZWwsXHJcbiAgSW1tdXRhYmxlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBFZGl0TW9kZVR5cGUsIHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IE1hcFZpZXdNYW5hZ2VyIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcclxuICBpc1N1cHBvcnRlZCAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwsIHdpZGdldElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGxldCBpc0FjdGlvblN1cHBvcnRlZCA9IGZhbHNlXHJcbiAgICBsZXQgZWRpdEhhdmVUaGlzRHMgPSBmYWxzZVxyXG4gICAgY29uc3QgZGF0YVNldCA9IGRhdGFTZXRzWzBdXHJcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIHJlY29yZHMgfSA9IGRhdGFTZXRcclxuICAgIGNvbnN0IGFwcFN0YXRlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpXHJcbiAgICBjb25zdCBhcHBDb25maWcgPSBhcHBTdGF0ZT8uYXBwQ29uZmlnXHJcbiAgICBjb25zdCBpc1dpZGdldEluQ29udHJvbGxlciA9IGFwcFN0YXRlPy53aWRnZXRzUnVudGltZUluZm9bdGhpcy53aWRnZXRJZF0/LmNvbnRyb2xsZXJXaWRnZXRJZFxyXG4gICAgY29uc3QgdGFyZ2V0RWRpdFdpZGdldCA9IGFwcENvbmZpZz8ud2lkZ2V0c1t0aGlzLndpZGdldElkXVxyXG4gICAgaWYgKCF0YXJnZXRFZGl0V2lkZ2V0KSByZXR1cm5cclxuICAgIGNvbnN0IHVzZU1hcFdpZGdldElkcyA9IHRhcmdldEVkaXRXaWRnZXQudXNlTWFwV2lkZ2V0SWRzIHx8IEltbXV0YWJsZShbXSlcclxuICAgIGNvbnN0IHsgbGF5ZXJzQ29uZmlnLCBtYXBWaWV3c0NvbmZpZywgZWRpdE1vZGUgfSA9IHRhcmdldEVkaXRXaWRnZXQuY29uZmlnIGFzIElNQ29uZmlnXHJcbiAgICBpZiAoZWRpdE1vZGUgPT09IEVkaXRNb2RlVHlwZS5HZW9tZXRyeSkge1xyXG4gICAgICBpZiAodXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbnN0IGppbXVNYXBWaWV3cyA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0SmltdU1hcFZpZXdHcm91cCh1c2VNYXBXaWRnZXRJZHNbMF0pPy5nZXRBbGxKaW11TWFwVmlld3MoKSB8fCBbXVxyXG4gICAgICAgIGZvciAoY29uc3QgamltdU1hcFZpZXcgb2YgamltdU1hcFZpZXdzKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXBWaWV3Q29uZmlnID0gbWFwVmlld3NDb25maWc/LltqaW11TWFwVmlldy5pZF1cclxuICAgICAgICAgIGlmIChtYXBWaWV3Q29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyQ29uZmlnID0gbWFwVmlld0NvbmZpZy5sYXllcnNDb25maWcuZmluZChsID0+IGwuaWQgPT09IGRhdGFTb3VyY2UuaWQpXHJcbiAgICAgICAgICAgIGlmIChsYXllckNvbmZpZykge1xyXG4gICAgICAgICAgICAgIGVkaXRIYXZlVGhpc0RzID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBqaW11TGF5ZXJWaWV3cyA9IGppbXVNYXBWaWV3LmdldEFsbEppbXVMYXllclZpZXdzKClcclxuICAgICAgICAgICAgY29uc3QgZHNJZHMgPSBqaW11TGF5ZXJWaWV3cy5tYXAodiA9PiB2LmxheWVyRGF0YVNvdXJjZUlkKVxyXG4gICAgICAgICAgICBpZiAoZHNJZHMuaW5jbHVkZXMoZGF0YVNvdXJjZS5pZCkpIHtcclxuICAgICAgICAgICAgICBlZGl0SGF2ZVRoaXNEcyA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWRpdEhhdmVUaGlzRHMgPSAhIWxheWVyc0NvbmZpZy5maW5kKGl0ZW0gPT4gaXRlbS51c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCA9PT0gZGF0YVNvdXJjZS5pZClcclxuICAgIH1cclxuICAgIGlmIChlZGl0SGF2ZVRoaXNEcyAmJiBkYXRhTGV2ZWwgPT09IERhdGFMZXZlbC5SZWNvcmRzICYmIHJlY29yZHM/Lmxlbmd0aCA+IDAgJiYgaXNXaWRnZXRJbkNvbnRyb2xsZXIpIHtcclxuICAgICAgaXNBY3Rpb25TdXBwb3J0ZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGlzQWN0aW9uU3VwcG9ydGVkICYmIGRhdGFTb3VyY2UuZ2V0U3RhdHVzKCkgIT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkpXHJcbiAgfVxyXG5cclxuICBvbkV4ZWN1dGUgKGRhdGFTZXRzOiBEYXRhUmVjb3JkU2V0W10sIGRhdGFMZXZlbDogRGF0YUxldmVsLCB3aWRnZXRJZDogc3RyaW5nKSB7XHJcbiAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKFxyXG4gICAgICBhcHBBY3Rpb25zLm9wZW5XaWRnZXRzKFt0aGlzLndpZGdldElkXSlcclxuICAgIClcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9