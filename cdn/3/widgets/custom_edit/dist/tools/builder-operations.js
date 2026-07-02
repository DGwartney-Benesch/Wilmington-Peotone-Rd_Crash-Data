System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
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

/***/ "./your-extensions/widgets/custom_edit/src/setting/translations/default.ts"
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/setting/translations/default.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    newEdit: 'New editable source',
    newEditTips: 'Support selected features view only',
    attrMode: 'Attribute only',
    layerConfig: 'Layer configuration',
    capability: 'Capability',
    addRecords: 'Add records',
    deleteRecords: 'Delete records',
    updateRecords: 'Update records',
    snappingSettings: 'Snapping settings',
    configFields: 'Configure fields',
    configFieldsTip: 'Select fields to show',
    addGroup: 'Add a group',
    group: 'Group',
    checkAll: 'Check all',
    uncheckAll: 'Uncheck all',
    noDataMessageDefaultText: 'No valid record is selected, select one or add one.',
    editBlankStatus: 'Click the "{EditString}" button to add and configure {ModeString}',
    editableSource: 'editable data sources',
    changeModeConfirmTitle: 'Are you sure you want to switch the mode?',
    changeModeConfirmTips: 'You will lose the settings configured.',
    editable: 'Editable',
    editFieldDescription: 'Please input the description.',
    editableCount: '{count} Editable',
    layerHonorSetting: 'Use layer settings',
    layerCustomize: 'Customize',
    noLayerTips: 'The Map does not contain any editable data.',
    uneditableTips: 'The layer is in a read-only state.',
    templateFilter: 'Template filter',
    relatedRecords: 'Related records',
    runtimeDataEditing: 'Runtime data editing',
    initialReshapeMode: 'Display vertices while editing',
    editGeometryGuides: 'Show visual aids to help identify perpendicular and parallel lines when creating or updating a feature.',
    editFeatureToFeature: 'Snap vertices of a feature that is currently being drawn or reshaped to that of an existing feature\'s vertex, edge, or end point.',
    batchEditingSetting: 'Batch editing',
    layerLabel: 'Layer label',
    fieldGroupLabel: 'Group label',
    fieldDescription: 'Field description',
    groupDescription: 'Group description',
    advancedEditingTools: 'Advanced editing tools',
    splitButton: 'Split',
    mergeButton: 'Merge'
});


/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/tools/builder-operations.ts ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuilderOperations),
/* harmony export */   getKeysInLayersConfig: () => (/* binding */ getKeysInLayersConfig)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/custom_edit/src/config.ts");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setting/translations/default */ "./your-extensions/widgets/custom_edit/src/setting/translations/default.ts");




class BuilderOperations {
    constructor() {
        this.id = 'edit-builder-operation';
    }
    getTranslationKey(appConfig) {
        const config = appConfig.widgets[this.widgetId].config;
        const { editMode, description, noDataMessage, layersConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), mapViewsConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({}) } = config;
        const keys = [];
        if (editMode === _config__WEBPACK_IMPORTED_MODULE_2__.EditModeType.Attribute) {
            description && keys.push({
                keyType: 'value',
                key: `widgets.${this.widgetId}.config.description`,
                label: {
                    key: 'description',
                    enLabel: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.description
                },
                valueType: 'text'
            });
            noDataMessage && keys.push({
                keyType: 'value',
                key: `widgets.${this.widgetId}.config.noDataMessage`,
                label: {
                    key: 'noDataMessage',
                    enLabel: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.noDataMessage
                },
                valueType: 'text'
            });
            const layersConfigKeys = getKeysInLayersConfig(layersConfig, `widgets.${this.widgetId}.config`, true);
            layersConfigKeys.length > 0 && keys.push(...layersConfigKeys);
        }
        else if (editMode === _config__WEBPACK_IMPORTED_MODULE_2__.EditModeType.Geometry) {
            for (const [jimuMapViewId, mapViewConfig] of Object.entries(mapViewsConfig)) {
                const layersConfigKeys = getKeysInLayersConfig(mapViewConfig.layersConfig, `widgets.${this.widgetId}.config.mapViewsConfig.${jimuMapViewId}`);
                layersConfigKeys.length > 0 && keys.push(...layersConfigKeys);
            }
        }
        return Promise.resolve(keys);
    }
}
function getKeysInLayersConfig(layersConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), path, includeLabel) {
    const keys = [];
    layersConfig.forEach((layerConfig, layerIndex) => {
        const layerName = layerConfig.name;
        const layerPath = `${path}.layersConfig[${layerIndex}]`;
        if (includeLabel) {
            keys.push({
                keyType: 'value',
                key: `${layerPath}.name`,
                label: {
                    key: 'layerLabel',
                    enLabel: _setting_translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].layerLabel
                },
                nav: layerName,
                valueType: 'text'
            });
        }
        if (layerConfig.layerHonorMode === _config__WEBPACK_IMPORTED_MODULE_2__.LayerHonorModeType.Custom && layerConfig.groupedFields.length > 0) {
            layerConfig.groupedFields.forEach((item, itemIndex) => {
                const itemPath = `${layerPath}.groupedFields[${itemIndex}]`;
                const itemName = item.alias || item.jimuName || item.name;
                const layerItemName = `${layerName} / ${itemName}`;
                const isGroup = !!item.groupKey;
                if (isGroup) {
                    keys.push({
                        keyType: 'value',
                        key: `${itemPath}.name`,
                        label: {
                            key: 'fieldGroupLabel',
                            enLabel: _setting_translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].fieldGroupLabel
                        },
                        nav: layerItemName,
                        valueType: 'text'
                    });
                    if (item.children.length > 0) {
                        item.children.forEach((childItem, childIndex) => {
                            const childItemName = childItem.alias || childItem.jimuName || childItem.name;
                            const layerChildItemName = `${layerName} / ${itemName} / ${childItemName}`;
                            if (childItem.subDescription) {
                                keys.push(getItemDescriptionKey(layerChildItemName, `${itemPath}.children[${childIndex}]`, false));
                            }
                        });
                    }
                }
                if (item.subDescription) {
                    keys.push(getItemDescriptionKey(layerItemName, itemPath, isGroup));
                }
            });
        }
    });
    return keys;
}
function getItemDescriptionKey(layerItemName, path, isGroup) {
    const translateKey = isGroup ? 'groupDescription' : 'fieldDescription';
    return {
        keyType: 'value',
        key: `${path}.subDescription`,
        label: {
            key: translateKey,
            enLabel: _setting_translations_default__WEBPACK_IMPORTED_MODULE_3__["default"][translateKey]
        },
        nav: layerItemName,
        valueType: 'textarea'
    };
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b21fZWRpdC9kaXN0L3Rvb2xzL2J1aWxkZXItb3BlcmF0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsdUNBQXVCO0lBQ3ZCLHFDQUFxQjtBQUN2QixDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7QUFFRCxJQUFZLGtCQUdYO0FBSEQsV0FBWSxrQkFBa0I7SUFDNUIsdUNBQWlCO0lBQ2pCLHVDQUFpQjtBQUNuQixDQUFDLEVBSFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQUc3QjtBQUVELElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN4QixpQ0FBZTtJQUNmLHdDQUFzQjtBQUN4QixDQUFDLEVBSFcsY0FBYyxLQUFkLGNBQWMsUUFHekI7QUFFRCxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsZ0RBQTZCO0lBQzdCLHdDQUFxQjtBQUN2QixDQUFDLEVBSFcsZUFBZSxLQUFmLGVBQWUsUUFHMUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQsaUVBQWU7SUFDYixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLFdBQVcsRUFBRSxxQ0FBcUM7SUFDbEQsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixXQUFXLEVBQUUscUJBQXFCO0lBQ2xDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxlQUFlLEVBQUUsdUJBQXVCO0lBQ3hDLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEtBQUssRUFBRSxPQUFPO0lBQ2QsUUFBUSxFQUFFLFdBQVc7SUFDckIsVUFBVSxFQUFFLGFBQWE7SUFDekIsd0JBQXdCLEVBQUUscURBQXFEO0lBQy9FLGVBQWUs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QUcsU0FBUyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxJQUFJOzRCQUM3RSxNQUFNLGtCQUFrQixHQUFHLEdBQUcsU0FBUyxNQUFNLFFBQVEsTUFBTSxhQUFhLEVBQUU7NEJBQzFFLElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dDQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsUUFBUSxhQUFhLFVBQVUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUNwRyxDQUFDO3dCQUNILENBQUMsQ0FBQztvQkFDSixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztZQUNILENBQUMsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLElBQUk7QUFDYixDQUFDO0FBRUQsU0FBUyxxQkFBcUIsQ0FBRSxhQUFxQixFQUFFLElBQVksRUFBRSxPQUFnQjtJQUNuRixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFDdEUsT0FBTztRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLEdBQUcsRUFBRSxHQUFHLElBQUksaUJBQWlCO1FBQzdCLEtBQUssRUFBRTtZQUNMLEdBQUcsRUFBRSxZQUFZO1lBQ2pCLE9BQU8sRUFBRSxxRUFBZSxDQUFDLFlBQVksQ0FBQztTQUN2QztRQUNELEdBQUcsRUFBRSxhQUFhO1FBQ2xCLFNBQVMsRUFBRSxVQUFVO0tBQ3RCO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvc3JjL3Rvb2xzL2J1aWxkZXItb3BlcmF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XHJcbiAgSW1tdXRhYmxlT2JqZWN0LFxyXG4gIFVzZURhdGFTb3VyY2UsXHJcbiAgRmllbGRTY2hlbWFcclxufSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG5leHBvcnQgZW51bSBFZGl0TW9kZVR5cGUge1xyXG4gIEF0dHJpYnV0ZSA9ICdBVFRSSUJVVEUnLFxyXG4gIEdlb21ldHJ5ID0gJ0dFT01FVFJZJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBMYXllckhvbm9yTW9kZVR5cGUge1xyXG4gIFdlYm1hcCA9ICdXRUJNQVAnLFxyXG4gIEN1c3RvbSA9ICdDVVNUT00nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEltcG9ydEhpbnRUeXBlIHtcclxuICBOb01hcCA9ICdOT01BUCcsXHJcbiAgTm9MYXllciA9ICdOT0VESVRBQkxFJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTbmFwU2V0dGluZ01vZGUge1xyXG4gIFByZXNjcmlwdGl2ZSA9ICdQUkVTQ1JJUFRJVkUnLFxyXG4gIEZsZXhpYmxlID0gJ0ZMRVhJQkxFJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVGaWVsZHMgZXh0ZW5kcyBGaWVsZFNjaGVtYSB7XHJcbiAgY2hpbGRyZW4/OiBUcmVlRmllbGRzW11cclxuICBncm91cEtleT86IG51bWJlclxyXG4gIGVkaXRBdXRob3JpdHk/OiBib29sZWFuXHJcbiAgc3ViRGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBlZGl0YWJsZT86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXllcnNDb25maWcge1xyXG4gIGlkOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICB1c2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXHJcbiAgYWRkUmVjb3Jkcz86IGJvb2xlYW5cclxuICBkZWxldGVSZWNvcmRzPzogYm9vbGVhblxyXG4gIHVwZGF0ZVJlY29yZHM/OiBib29sZWFuXHJcbiAgdXBkYXRlQXR0cmlidXRlcz86IGJvb2xlYW5cclxuICB1cGRhdGVHZW9tZXRyaWVzPzogYm9vbGVhblxyXG4gIHNob3dGaWVsZHM6IEZpZWxkU2NoZW1hW11cclxuICBncm91cGVkRmllbGRzOiBUcmVlRmllbGRzW11cclxuICBsYXllckhvbm9yTW9kZTogTGF5ZXJIb25vck1vZGVUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwVmlld0NvbmZpZyB7XHJcbiAgY3VzdG9taXplTGF5ZXJzOiBib29sZWFuXHJcbiAgY3VzdG9tSmltdUxheWVyVmlld0lkcz86IHN0cmluZ1tdXHJcbiAgbGF5ZXJzQ29uZmlnPzogTGF5ZXJzQ29uZmlnW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXBWaWV3c0NvbmZpZyB7XHJcbiAgW2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IE1hcFZpZXdDb25maWdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xyXG4gIGxheWVyc0NvbmZpZz86IExheWVyc0NvbmZpZ1tdIC8vIGZlYXR1cmUgZm9ybVxyXG4gIG1hcFZpZXdzQ29uZmlnPzogTWFwVmlld3NDb25maWdcclxuICBlZGl0TW9kZTogRWRpdE1vZGVUeXBlIC8vIGNvbW1vblxyXG4gIGdyaWRTbmFwcGluZz86IGJvb2xlYW5cclxuICBzZWxmU25hcHBpbmc/OiBib29sZWFuXHJcbiAgZmVhdHVyZVNuYXBwaW5nPzogYm9vbGVhblxyXG4gIGRlZmF1bHRHcmlkRW5hYmxlZD86IGJvb2xlYW5cclxuICBkZWZhdWx0U2VsZkVuYWJsZWQ/OiBib29sZWFuXHJcbiAgZGVmYXVsdEZlYXR1cmVFbmFibGVkPzogYm9vbGVhblxyXG4gIGRlZmF1bHRTbmFwTGF5ZXJzPzogc3RyaW5nW11cclxuICBkZXNjcmlwdGlvbjogc3RyaW5nIC8vIGZlYXR1cmUgZm9ybVxyXG4gIG5vRGF0YU1lc3NhZ2U6IHN0cmluZyAvLyBmZWF0dXJlIGZvcm1cclxuICBzbmFwU2V0dGluZ01vZGU6IFNuYXBTZXR0aW5nTW9kZVxyXG4gIHRvb2x0aXA/OiBib29sZWFuXHJcbiAgZGVmYXVsdFRvb2x0aXBFbmFibGVkPzogYm9vbGVhblxyXG4gIHNlZ21lbnRMYWJlbD86IGJvb2xlYW5cclxuICBkZWZhdWx0U2VnbWVudExhYmVsRW5hYmxlZD86IGJvb2xlYW5cclxuICB0ZW1wbGF0ZUZpbHRlcj86IGJvb2xlYW5cclxuICByZWxhdGVkUmVjb3Jkcz86IGJvb2xlYW5cclxuICBsaXZlRGF0YUVkaXRpbmc/OiBib29sZWFuXHJcbiAgaW5pdGlhbFJlc2hhcGVNb2RlPzogYm9vbGVhblxyXG4gIGJhdGNoRWRpdGluZz86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBFbmFibGVzIGFkdmFuY2VkIGVkaXRpbmcgdG9vbHMgaW4gdGhlIHdpZGdldCBpbnRlcmZhY2UuXHJcbiAgICogV2hlbiBzZXQgdG8gdHJ1ZSwgYWRkaXRpb25hbCBlZGl0aW5nIGZ1bmN0aW9uYWxpdGllcyBzdWNoIGFzIHNwbGl0IGFuZCBtZXJnZSBvcGVyYXRpb25zIGJlY29tZSBhdmFpbGFibGUuXHJcbiAgICogVGhpcyBwcm9wZXJ0eSBpcyByZWxhdGVkIHRvIGBzcGxpdEJ1dHRvbmAgYW5kIGBtZXJnZUJ1dHRvbmAsIHdoaWNoIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHJlc3BlY3RpdmUgYnV0dG9ucyBmb3Igc3BsaXR0aW5nIGFuZCBtZXJnaW5nIGZlYXR1cmVzLlxyXG4gICAqL1xyXG4gIGFkdmFuY2VkRWRpdGluZ1Rvb2xzPzogYm9vbGVhblxyXG4gIHNwbGl0QnV0dG9uPzogYm9vbGVhblxyXG4gIG1lcmdlQnV0dG9uPzogYm9vbGVhblxyXG4gIGNvcHlQYXN0ZT86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbmV3RWRpdDogJ05ldyBlZGl0YWJsZSBzb3VyY2UnLFxyXG4gIG5ld0VkaXRUaXBzOiAnU3VwcG9ydCBzZWxlY3RlZCBmZWF0dXJlcyB2aWV3IG9ubHknLFxyXG4gIGF0dHJNb2RlOiAnQXR0cmlidXRlIG9ubHknLFxyXG4gIGxheWVyQ29uZmlnOiAnTGF5ZXIgY29uZmlndXJhdGlvbicsXHJcbiAgY2FwYWJpbGl0eTogJ0NhcGFiaWxpdHknLFxyXG4gIGFkZFJlY29yZHM6ICdBZGQgcmVjb3JkcycsXHJcbiAgZGVsZXRlUmVjb3JkczogJ0RlbGV0ZSByZWNvcmRzJyxcclxuICB1cGRhdGVSZWNvcmRzOiAnVXBkYXRlIHJlY29yZHMnLFxyXG4gIHNuYXBwaW5nU2V0dGluZ3M6ICdTbmFwcGluZyBzZXR0aW5ncycsXHJcbiAgY29uZmlnRmllbGRzOiAnQ29uZmlndXJlIGZpZWxkcycsXHJcbiAgY29uZmlnRmllbGRzVGlwOiAnU2VsZWN0IGZpZWxkcyB0byBzaG93JyxcclxuICBhZGRHcm91cDogJ0FkZCBhIGdyb3VwJyxcclxuICBncm91cDogJ0dyb3VwJyxcclxuICBjaGVja0FsbDogJ0NoZWNrIGFsbCcsXHJcbiAgdW5jaGVja0FsbDogJ1VuY2hlY2sgYWxsJyxcclxuICBub0RhdGFNZXNzYWdlRGVmYXVsdFRleHQ6ICdObyB2YWxpZCByZWNvcmQgaXMgc2VsZWN0ZWQsIHNlbGVjdCBvbmUgb3IgYWRkIG9uZS4nLFxyXG4gIGVkaXRCbGFua1N0YXR1czogJ0NsaWNrIHRoZSBcIntFZGl0U3RyaW5nfVwiIGJ1dHRvbiB0byBhZGQgYW5kIGNvbmZpZ3VyZSB7TW9kZVN0cmluZ30nLFxyXG4gIGVkaXRhYmxlU291cmNlOiAnZWRpdGFibGUgZGF0YSBzb3VyY2VzJyxcclxuICBjaGFuZ2VNb2RlQ29uZmlybVRpdGxlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN3aXRjaCB0aGUgbW9kZT8nLFxyXG4gIGNoYW5nZU1vZGVDb25maXJtVGlwczogJ1lvdSB3aWxsIGxvc2UgdGhlIHNldHRpbmdzIGNvbmZpZ3VyZWQuJyxcclxuICBlZGl0YWJsZTogJ0VkaXRhYmxlJyxcclxuICBlZGl0RmllbGREZXNjcmlwdGlvbjogJ1BsZWFzZSBpbnB1dCB0aGUgZGVzY3JpcHRpb24uJyxcclxuICBlZGl0YWJsZUNvdW50OiAne2NvdW50fSBFZGl0YWJsZScsXHJcbiAgbGF5ZXJIb25vclNldHRpbmc6ICdVc2UgbGF5ZXIgc2V0dGluZ3MnLFxyXG4gIGxheWVyQ3VzdG9taXplOiAnQ3VzdG9taXplJyxcclxuICBub0xheWVyVGlwczogJ1RoZSBNYXAgZG9lcyBub3QgY29udGFpbiBhbnkgZWRpdGFibGUgZGF0YS4nLFxyXG4gIHVuZWRpdGFibGVUaXBzOiAnVGhlIGxheWVyIGlzIGluIGEgcmVhZC1vbmx5IHN0YXRlLicsXHJcbiAgdGVtcGxhdGVGaWx0ZXI6ICdUZW1wbGF0ZSBmaWx0ZXInLFxyXG4gIHJlbGF0ZWRSZWNvcmRzOiAnUmVsYXRlZCByZWNvcmRzJyxcclxuICBydW50aW1lRGF0YUVkaXRpbmc6ICdSdW50aW1lIGRhdGEgZWRpdGluZycsXHJcbiAgaW5pdGlhbFJlc2hhcGVNb2RlOiAnRGlzcGxheSB2ZXJ0aWNlcyB3aGlsZSBlZGl0aW5nJyxcclxuICBlZGl0R2VvbWV0cnlHdWlkZXM6ICdTaG93IHZpc3VhbCBhaWRzIHRvIGhlbHAgaWRlbnRpZnkgcGVycGVuZGljdWxhciBhbmQgcGFyYWxsZWwgbGluZXMgd2hlbiBjcmVhdGluZyBvciB1cGRhdGluZyBhIGZlYXR1cmUuJyxcclxuICBlZGl0RmVhdHVyZVRvRmVhdHVyZTogJ1NuYXAgdmVydGljZXMgb2YgYSBmZWF0dXJlIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIGRyYXduIG9yIHJlc2hhcGVkIHRvIHRoYXQgb2YgYW4gZXhpc3RpbmcgZmVhdHVyZVxcJ3MgdmVydGV4LCBlZGdlLCBvciBlbmQgcG9pbnQuJyxcclxuICBiYXRjaEVkaXRpbmdTZXR0aW5nOiAnQmF0Y2ggZWRpdGluZycsXHJcbiAgbGF5ZXJMYWJlbDogJ0xheWVyIGxhYmVsJyxcclxuICBmaWVsZEdyb3VwTGFiZWw6ICdHcm91cCBsYWJlbCcsXHJcbiAgZmllbGREZXNjcmlwdGlvbjogJ0ZpZWxkIGRlc2NyaXB0aW9uJyxcclxuICBncm91cERlc2NyaXB0aW9uOiAnR3JvdXAgZGVzY3JpcHRpb24nLFxyXG4gIGFkdmFuY2VkRWRpdGluZ1Rvb2xzOiAnQWR2YW5jZWQgZWRpdGluZyB0b29scycsXHJcbiAgc3BsaXRCdXR0b246ICdTcGxpdCcsXHJcbiAgbWVyZ2VCdXR0b246ICdNZXJnZSdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IEltbXV0YWJsZSwgdHlwZSBleHRlbnNpb25TcGVjLCB0eXBlIElNQXBwQ29uZmlnLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIEltbXV0YWJsZU9iamVjdCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVaU1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgRWRpdE1vZGVUeXBlLCBMYXllckhvbm9yTW9kZVR5cGUsIHR5cGUgTGF5ZXJzQ29uZmlnLCB0eXBlIElNQ29uZmlnLCB0eXBlIE1hcFZpZXdDb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1aWxkZXJPcGVyYXRpb25zIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5CdWlsZGVyT3BlcmF0aW9uc0V4dGVuc2lvbiB7XHJcbiAgaWQgPSAnZWRpdC1idWlsZGVyLW9wZXJhdGlvbidcclxuICB3aWRnZXRJZDogc3RyaW5nXHJcblxyXG4gIGdldFRyYW5zbGF0aW9uS2V5IChhcHBDb25maWc6IElNQXBwQ29uZmlnKTogUHJvbWlzZTxleHRlbnNpb25TcGVjLlRyYW5zbGF0aW9uS2V5W10+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IGFwcENvbmZpZy53aWRnZXRzW3RoaXMud2lkZ2V0SWRdLmNvbmZpZyBhcyBJTUNvbmZpZ1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBlZGl0TW9kZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIG5vRGF0YU1lc3NhZ2UsXHJcbiAgICAgIGxheWVyc0NvbmZpZyA9IEltbXV0YWJsZShbXSkgYXMgSW1tdXRhYmxlQXJyYXk8TGF5ZXJzQ29uZmlnPixcclxuICAgICAgbWFwVmlld3NDb25maWcgPSBJbW11dGFibGUoe30pIGFzIEltbXV0YWJsZU9iamVjdDxNYXBWaWV3Q29uZmlnPlxyXG4gICAgfSA9IGNvbmZpZ1xyXG4gICAgY29uc3Qga2V5czogZXh0ZW5zaW9uU3BlYy5UcmFuc2xhdGlvbktleVtdID0gW11cclxuICAgIGlmIChlZGl0TW9kZSA9PT0gRWRpdE1vZGVUeXBlLkF0dHJpYnV0ZSkge1xyXG4gICAgICBkZXNjcmlwdGlvbiAmJiBrZXlzLnB1c2goe1xyXG4gICAgICAgIGtleVR5cGU6ICd2YWx1ZScsXHJcbiAgICAgICAga2V5OiBgd2lkZ2V0cy4ke3RoaXMud2lkZ2V0SWR9LmNvbmZpZy5kZXNjcmlwdGlvbmAsXHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgIGtleTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgIGVuTGFiZWw6IGppbXVVaU1lc3NhZ2VzLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZVR5cGU6ICd0ZXh0J1xyXG4gICAgICB9KVxyXG4gICAgICBub0RhdGFNZXNzYWdlICYmIGtleXMucHVzaCh7XHJcbiAgICAgICAga2V5VHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICBrZXk6IGB3aWRnZXRzLiR7dGhpcy53aWRnZXRJZH0uY29uZmlnLm5vRGF0YU1lc3NhZ2VgLFxyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICBrZXk6ICdub0RhdGFNZXNzYWdlJyxcclxuICAgICAgICAgIGVuTGFiZWw6IGppbXVVaU1lc3NhZ2VzLm5vRGF0YU1lc3NhZ2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlVHlwZTogJ3RleHQnXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGxheWVyc0NvbmZpZ0tleXMgPSBnZXRLZXlzSW5MYXllcnNDb25maWcobGF5ZXJzQ29uZmlnLCBgd2lkZ2V0cy4ke3RoaXMud2lkZ2V0SWR9LmNvbmZpZ2AsIHRydWUpXHJcbiAgICAgIGxheWVyc0NvbmZpZ0tleXMubGVuZ3RoID4gMCAmJmtleXMucHVzaCguLi5sYXllcnNDb25maWdLZXlzKVxyXG4gICAgfSBlbHNlIGlmIChlZGl0TW9kZSA9PT0gRWRpdE1vZGVUeXBlLkdlb21ldHJ5KSB7XHJcbiAgICAgIGZvciAoY29uc3QgW2ppbXVNYXBWaWV3SWQsIG1hcFZpZXdDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKG1hcFZpZXdzQ29uZmlnKSkge1xyXG4gICAgICAgIGNvbnN0IGxheWVyc0NvbmZpZ0tleXMgPSBnZXRLZXlzSW5MYXllcnNDb25maWcobWFwVmlld0NvbmZpZy5sYXllcnNDb25maWcsIGB3aWRnZXRzLiR7dGhpcy53aWRnZXRJZH0uY29uZmlnLm1hcFZpZXdzQ29uZmlnLiR7amltdU1hcFZpZXdJZH1gKVxyXG4gICAgICAgIGxheWVyc0NvbmZpZ0tleXMubGVuZ3RoID4gMCAmJiBrZXlzLnB1c2goLi4ubGF5ZXJzQ29uZmlnS2V5cylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5cylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlzSW5MYXllcnNDb25maWcgKGxheWVyc0NvbmZpZzogSW1tdXRhYmxlQXJyYXk8TGF5ZXJzQ29uZmlnPiA9IEltbXV0YWJsZShbXSksIHBhdGg6IHN0cmluZywgaW5jbHVkZUxhYmVsPzogYm9vbGVhbikge1xyXG4gIGNvbnN0IGtleXM6IGV4dGVuc2lvblNwZWMuVHJhbnNsYXRpb25LZXlbXSA9IFtdXHJcbiAgbGF5ZXJzQ29uZmlnLmZvckVhY2goKGxheWVyQ29uZmlnLCBsYXllckluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBsYXllck5hbWUgPSBsYXllckNvbmZpZy5uYW1lXHJcbiAgICBjb25zdCBsYXllclBhdGggPSBgJHtwYXRofS5sYXllcnNDb25maWdbJHtsYXllckluZGV4fV1gXHJcbiAgICBpZiAoaW5jbHVkZUxhYmVsKSB7XHJcbiAgICAgIGtleXMucHVzaCh7XHJcbiAgICAgICAga2V5VHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICBrZXk6IGAke2xheWVyUGF0aH0ubmFtZWAsXHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgIGtleTogJ2xheWVyTGFiZWwnLFxyXG4gICAgICAgICAgZW5MYWJlbDogZGVmYXVsdE1lc3NhZ2VzLmxheWVyTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdjogbGF5ZXJOYW1lLFxyXG4gICAgICAgIHZhbHVlVHlwZTogJ3RleHQnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAobGF5ZXJDb25maWcubGF5ZXJIb25vck1vZGUgPT09IExheWVySG9ub3JNb2RlVHlwZS5DdXN0b20gJiYgbGF5ZXJDb25maWcuZ3JvdXBlZEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxheWVyQ29uZmlnLmdyb3VwZWRGaWVsZHMuZm9yRWFjaCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbVBhdGggPSBgJHtsYXllclBhdGh9Lmdyb3VwZWRGaWVsZHNbJHtpdGVtSW5kZXh9XWBcclxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGl0ZW0uYWxpYXMgfHwgaXRlbS5qaW11TmFtZSB8fCBpdGVtLm5hbWVcclxuICAgICAgICBjb25zdCBsYXllckl0ZW1OYW1lID0gYCR7bGF5ZXJOYW1lfSAvICR7aXRlbU5hbWV9YFxyXG4gICAgICAgIGNvbnN0IGlzR3JvdXAgPSAhIWl0ZW0uZ3JvdXBLZXlcclxuICAgICAgICBpZiAoaXNHcm91cCkge1xyXG4gICAgICAgICAga2V5cy5wdXNoKHtcclxuICAgICAgICAgICAga2V5VHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgICAga2V5OiBgJHtpdGVtUGF0aH0ubmFtZWAsXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAga2V5OiAnZmllbGRHcm91cExhYmVsJyxcclxuICAgICAgICAgICAgICBlbkxhYmVsOiBkZWZhdWx0TWVzc2FnZXMuZmllbGRHcm91cExhYmVsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hdjogbGF5ZXJJdGVtTmFtZSxcclxuICAgICAgICAgICAgdmFsdWVUeXBlOiAndGV4dCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRJdGVtLCBjaGlsZEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGRJdGVtTmFtZSA9IGNoaWxkSXRlbS5hbGlhcyB8fCBjaGlsZEl0ZW0uamltdU5hbWUgfHwgY2hpbGRJdGVtLm5hbWVcclxuICAgICAgICAgICAgICBjb25zdCBsYXllckNoaWxkSXRlbU5hbWUgPSBgJHtsYXllck5hbWV9IC8gJHtpdGVtTmFtZX0gLyAke2NoaWxkSXRlbU5hbWV9YFxyXG4gICAgICAgICAgICAgIGlmIChjaGlsZEl0ZW0uc3ViRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChnZXRJdGVtRGVzY3JpcHRpb25LZXkobGF5ZXJDaGlsZEl0ZW1OYW1lLCBgJHtpdGVtUGF0aH0uY2hpbGRyZW5bJHtjaGlsZEluZGV4fV1gLCBmYWxzZSkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5zdWJEZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAga2V5cy5wdXNoKGdldEl0ZW1EZXNjcmlwdGlvbktleShsYXllckl0ZW1OYW1lLCBpdGVtUGF0aCwgaXNHcm91cCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGtleXNcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbURlc2NyaXB0aW9uS2V5IChsYXllckl0ZW1OYW1lOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgaXNHcm91cDogYm9vbGVhbik6IGV4dGVuc2lvblNwZWMuVHJhbnNsYXRpb25LZXkge1xyXG4gIGNvbnN0IHRyYW5zbGF0ZUtleSA9IGlzR3JvdXAgPyAnZ3JvdXBEZXNjcmlwdGlvbicgOiAnZmllbGREZXNjcmlwdGlvbidcclxuICByZXR1cm4ge1xyXG4gICAga2V5VHlwZTogJ3ZhbHVlJyxcclxuICAgIGtleTogYCR7cGF0aH0uc3ViRGVzY3JpcHRpb25gLFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAga2V5OiB0cmFuc2xhdGVLZXksXHJcbiAgICAgIGVuTGFiZWw6IGRlZmF1bHRNZXNzYWdlc1t0cmFuc2xhdGVLZXldXHJcbiAgICB9LFxyXG4gICAgbmF2OiBsYXllckl0ZW1OYW1lLFxyXG4gICAgdmFsdWVUeXBlOiAndGV4dGFyZWEnXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9