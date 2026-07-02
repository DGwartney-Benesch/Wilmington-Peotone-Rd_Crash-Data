System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
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
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/tools/redux-action-interceptor.ts ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReduxActionInterceptorExtensionImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/custom_edit/src/config.ts");


class ReduxActionInterceptorExtensionImpl {
    constructor() {
        this.id = 'redux-action-interceptor-extension';
    }
    intercept(action) {
        var _a, _b, _c, _d;
        const isCloseAction = (action.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.ActionKeys.CloseWidget && action.widgetId === this.widgetId) ||
            (action.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.ActionKeys.CloseWidgets && ((_a = action.widgetIds) === null || _a === void 0 ? void 0 : _a.includes(this.widgetId)));
        const isHiddenAction = action.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.ActionKeys.WidgetRuntimeInfoChange && action.widgetId === this.widgetId
            && action.prop === 'state' && action.value === jimu_core__WEBPACK_IMPORTED_MODULE_0__.WidgetState.Hidden;
        if (isCloseAction || isHiddenAction) {
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const widgetConfig = (_c = (_b = state.appConfig.widgets) === null || _b === void 0 ? void 0 : _b[this.widgetId]) === null || _c === void 0 ? void 0 : _c.config;
            const isGeometryMode = (widgetConfig === null || widgetConfig === void 0 ? void 0 : widgetConfig.editMode) === _config__WEBPACK_IMPORTED_MODULE_1__.EditModeType.Geometry;
            if (isGeometryMode && !this.confirmClose && this.formChange) {
                (_d = this.showWarningBeforeClose) === null || _d === void 0 ? void 0 : _d.call(this, isHiddenAction);
                return;
            }
        }
        if (this.confirmClose) {
            this.confirmClose = false;
        }
        return action;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b21fZWRpdC9kaXN0L3Rvb2xzL3JlZHV4LWFjdGlvbi1pbnRlcmNlcHRvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLHVDQUF1QjtJQUN2QixxQ0FBcUI7QUFDdkIsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzVCLHVDQUFpQjtJQUNqQix1Q0FBaUI7QUFDbkIsQ0FBQyxFQUhXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFHN0I7QUFFRCxJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDeEIsaUNBQWU7SUFDZix3Q0FBc0I7QUFDeEIsQ0FBQyxFQUhXLGNBQWMsS0FBZCxjQUFjLFFBR3pCO0FBRUQsSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLGdEQUE2QjtJQUM3Qix3Q0FBcUI7QUFDdkIsQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCOzs7Ozs7Ozs7Ozs7QUN4QkQsdUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pxRDtBQUNqRDtBQUV4QyxNQUFNLG1DQUFtQztJQUF4RDtRQUNFLE9BQUUsR0FBRyxvQ0FBb0M7SUF5QjNDLENBQUM7SUFuQkMsU0FBUyxDQUFFLE1BQXFCOztRQUM5QixNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssaURBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM1RyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssaURBQVUsQ0FBQyxVQUFVLENBQUMsWUFBWSxLQUFJLE1BQUMsTUFBTSxDQUFDLFNBQXNCLDBDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDakgsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxpREFBVSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRO2VBQ3BILE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssa0RBQVcsQ0FBQyxNQUFNO1FBQ25FLElBQUksYUFBYSxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sS0FBSyxHQUFHLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdEMsTUFBTSxZQUFZLEdBQUcsaUJBQUssQ0FBQyxTQUFTLENBQUMsT0FBTywwQ0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLDBDQUFFLE1BQWtCO1lBQ2pGLE1BQU0sY0FBYyxHQUFHLGFBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxRQUFRLE1BQUssaURBQVksQ0FBQyxRQUFRO1lBQ3ZFLElBQUksY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzVELFVBQUksQ0FBQyxzQkFBc0IscURBQUcsY0FBYyxDQUFDO2dCQUM3QyxPQUFNO1lBQ1IsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUs7UUFDM0IsQ0FBQztRQUNELE9BQU8sTUFBTTtJQUNmLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvdG9vbHMvcmVkdXgtYWN0aW9uLWludGVyY2VwdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcclxuICBJbW11dGFibGVPYmplY3QsXHJcbiAgVXNlRGF0YVNvdXJjZSxcclxuICBGaWVsZFNjaGVtYVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRNb2RlVHlwZSB7XHJcbiAgQXR0cmlidXRlID0gJ0FUVFJJQlVURScsXHJcbiAgR2VvbWV0cnkgPSAnR0VPTUVUUlknXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExheWVySG9ub3JNb2RlVHlwZSB7XHJcbiAgV2VibWFwID0gJ1dFQk1BUCcsXHJcbiAgQ3VzdG9tID0gJ0NVU1RPTSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW1wb3J0SGludFR5cGUge1xyXG4gIE5vTWFwID0gJ05PTUFQJyxcclxuICBOb0xheWVyID0gJ05PRURJVEFCTEUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNuYXBTZXR0aW5nTW9kZSB7XHJcbiAgUHJlc2NyaXB0aXZlID0gJ1BSRVNDUklQVElWRScsXHJcbiAgRmxleGlibGUgPSAnRkxFWElCTEUnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUZpZWxkcyBleHRlbmRzIEZpZWxkU2NoZW1hIHtcclxuICBjaGlsZHJlbj86IFRyZWVGaWVsZHNbXVxyXG4gIGdyb3VwS2V5PzogbnVtYmVyXHJcbiAgZWRpdEF1dGhvcml0eT86IGJvb2xlYW5cclxuICBzdWJEZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIGVkaXRhYmxlPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheWVyc0NvbmZpZyB7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcclxuICBhZGRSZWNvcmRzPzogYm9vbGVhblxyXG4gIGRlbGV0ZVJlY29yZHM/OiBib29sZWFuXHJcbiAgdXBkYXRlUmVjb3Jkcz86IGJvb2xlYW5cclxuICB1cGRhdGVBdHRyaWJ1dGVzPzogYm9vbGVhblxyXG4gIHVwZGF0ZUdlb21ldHJpZXM/OiBib29sZWFuXHJcbiAgc2hvd0ZpZWxkczogRmllbGRTY2hlbWFbXVxyXG4gIGdyb3VwZWRGaWVsZHM6IFRyZWVGaWVsZHNbXVxyXG4gIGxheWVySG9ub3JNb2RlOiBMYXllckhvbm9yTW9kZVR5cGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXBWaWV3Q29uZmlnIHtcclxuICBjdXN0b21pemVMYXllcnM6IGJvb2xlYW5cclxuICBjdXN0b21KaW11TGF5ZXJWaWV3SWRzPzogc3RyaW5nW11cclxuICBsYXllcnNDb25maWc/OiBMYXllcnNDb25maWdbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcFZpZXdzQ29uZmlnIHtcclxuICBbamltdU1hcFZpZXdJZDogc3RyaW5nXTogTWFwVmlld0NvbmZpZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgbGF5ZXJzQ29uZmlnPzogTGF5ZXJzQ29uZmlnW10gLy8gZmVhdHVyZSBmb3JtXHJcbiAgbWFwVmlld3NDb25maWc/OiBNYXBWaWV3c0NvbmZpZ1xyXG4gIGVkaXRNb2RlOiBFZGl0TW9kZVR5cGUgLy8gY29tbW9uXHJcbiAgZ3JpZFNuYXBwaW5nPzogYm9vbGVhblxyXG4gIHNlbGZTbmFwcGluZz86IGJvb2xlYW5cclxuICBmZWF0dXJlU25hcHBpbmc/OiBib29sZWFuXHJcbiAgZGVmYXVsdEdyaWRFbmFibGVkPzogYm9vbGVhblxyXG4gIGRlZmF1bHRTZWxmRW5hYmxlZD86IGJvb2xlYW5cclxuICBkZWZhdWx0RmVhdHVyZUVuYWJsZWQ/OiBib29sZWFuXHJcbiAgZGVmYXVsdFNuYXBMYXllcnM/OiBzdHJpbmdbXVxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgLy8gZmVhdHVyZSBmb3JtXHJcbiAgbm9EYXRhTWVzc2FnZTogc3RyaW5nIC8vIGZlYXR1cmUgZm9ybVxyXG4gIHNuYXBTZXR0aW5nTW9kZTogU25hcFNldHRpbmdNb2RlXHJcbiAgdG9vbHRpcD86IGJvb2xlYW5cclxuICBkZWZhdWx0VG9vbHRpcEVuYWJsZWQ/OiBib29sZWFuXHJcbiAgc2VnbWVudExhYmVsPzogYm9vbGVhblxyXG4gIGRlZmF1bHRTZWdtZW50TGFiZWxFbmFibGVkPzogYm9vbGVhblxyXG4gIHRlbXBsYXRlRmlsdGVyPzogYm9vbGVhblxyXG4gIHJlbGF0ZWRSZWNvcmRzPzogYm9vbGVhblxyXG4gIGxpdmVEYXRhRWRpdGluZz86IGJvb2xlYW5cclxuICBpbml0aWFsUmVzaGFwZU1vZGU/OiBib29sZWFuXHJcbiAgYmF0Y2hFZGl0aW5nPzogYm9vbGVhblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMgYWR2YW5jZWQgZWRpdGluZyB0b29scyBpbiB0aGUgd2lkZ2V0IGludGVyZmFjZS5cclxuICAgKiBXaGVuIHNldCB0byB0cnVlLCBhZGRpdGlvbmFsIGVkaXRpbmcgZnVuY3Rpb25hbGl0aWVzIHN1Y2ggYXMgc3BsaXQgYW5kIG1lcmdlIG9wZXJhdGlvbnMgYmVjb21lIGF2YWlsYWJsZS5cclxuICAgKiBUaGlzIHByb3BlcnR5IGlzIHJlbGF0ZWQgdG8gYHNwbGl0QnV0dG9uYCBhbmQgYG1lcmdlQnV0dG9uYCwgd2hpY2ggY29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcmVzcGVjdGl2ZSBidXR0b25zIGZvciBzcGxpdHRpbmcgYW5kIG1lcmdpbmcgZmVhdHVyZXMuXHJcbiAgICovXHJcbiAgYWR2YW5jZWRFZGl0aW5nVG9vbHM/OiBib29sZWFuXHJcbiAgc3BsaXRCdXR0b24/OiBib29sZWFuXHJcbiAgbWVyZ2VCdXR0b24/OiBib29sZWFuXHJcbiAgY29weVBhc3RlPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IHR5cGUgZXh0ZW5zaW9uU3BlYywgYXBwQWN0aW9ucywgdHlwZSBVbmtub3duQWN0aW9uLCBnZXRBcHBTdG9yZSwgV2lkZ2V0U3RhdGUgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEVkaXRNb2RlVHlwZSwgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHV4QWN0aW9uSW50ZXJjZXB0b3JFeHRlbnNpb25JbXBsIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5SZWR1eEFjdGlvbkludGVyY2VwdG9yRXh0ZW5zaW9uIHtcclxuICBpZCA9ICdyZWR1eC1hY3Rpb24taW50ZXJjZXB0b3ItZXh0ZW5zaW9uJ1xyXG4gIHdpZGdldElkOiBzdHJpbmdcclxuICBmb3JtQ2hhbmdlOiBib29sZWFuXHJcbiAgY29uZmlybUNsb3NlOiBib29sZWFuXHJcbiAgc2hvd1dhcm5pbmdCZWZvcmVDbG9zZTogKGlzSGlkZGVuQWN0aW9uOiBib29sZWFuKSA9PiB2b2lkXHJcblxyXG4gIGludGVyY2VwdCAoYWN0aW9uOiBVbmtub3duQWN0aW9uKTogVW5rbm93bkFjdGlvbiB7XHJcbiAgICBjb25zdCBpc0Nsb3NlQWN0aW9uID0gKGFjdGlvbi50eXBlID09PSBhcHBBY3Rpb25zLkFjdGlvbktleXMuQ2xvc2VXaWRnZXQgJiYgYWN0aW9uLndpZGdldElkID09PSB0aGlzLndpZGdldElkKSB8fFxyXG4gICAgICAoYWN0aW9uLnR5cGUgPT09IGFwcEFjdGlvbnMuQWN0aW9uS2V5cy5DbG9zZVdpZGdldHMgJiYgKGFjdGlvbi53aWRnZXRJZHMgYXMgc3RyaW5nW10pPy5pbmNsdWRlcyh0aGlzLndpZGdldElkKSlcclxuICAgIGNvbnN0IGlzSGlkZGVuQWN0aW9uID0gYWN0aW9uLnR5cGUgPT09IGFwcEFjdGlvbnMuQWN0aW9uS2V5cy5XaWRnZXRSdW50aW1lSW5mb0NoYW5nZSAmJiBhY3Rpb24ud2lkZ2V0SWQgPT09IHRoaXMud2lkZ2V0SWRcclxuICAgICAgJiYgYWN0aW9uLnByb3AgPT09ICdzdGF0ZScgJiYgYWN0aW9uLnZhbHVlID09PSBXaWRnZXRTdGF0ZS5IaWRkZW5cclxuICAgIGlmIChpc0Nsb3NlQWN0aW9uIHx8IGlzSGlkZGVuQWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpXHJcbiAgICAgIGNvbnN0IHdpZGdldENvbmZpZyA9IHN0YXRlLmFwcENvbmZpZy53aWRnZXRzPy5bdGhpcy53aWRnZXRJZF0/LmNvbmZpZyBhcyBJTUNvbmZpZ1xyXG4gICAgICBjb25zdCBpc0dlb21ldHJ5TW9kZSA9IHdpZGdldENvbmZpZz8uZWRpdE1vZGUgPT09IEVkaXRNb2RlVHlwZS5HZW9tZXRyeVxyXG4gICAgICBpZiAoaXNHZW9tZXRyeU1vZGUgJiYgIXRoaXMuY29uZmlybUNsb3NlICYmIHRoaXMuZm9ybUNoYW5nZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1dhcm5pbmdCZWZvcmVDbG9zZT8uKGlzSGlkZGVuQWN0aW9uKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb25maXJtQ2xvc2UpIHtcclxuICAgICAgdGhpcy5jb25maXJtQ2xvc2UgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjdGlvblxyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==