System.register(["jimu-core/emotion","jimu-core","jimu-ui","esri/form/FormTemplate","esri/rest/support/Query","esri/form/elements/FieldElement","esri/form/elements/GroupElement","esri/form/ExpressionInfo","jimu-theme","esri/widgets/FeatureForm","esri/widgets/BatchAttributeForm","esri/Graphic","esri/core/Collection","jimu-arcgis","esri/core/reactiveUtils","esri/widgets/Editor","arcgis-map-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_form_elements_GroupElement__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_form_ExpressionInfo__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_FeatureForm__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_BatchAttributeForm__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_core_Collection__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__ = {};
	var __WEBPACK_EXTERNAL_MODULE_arcgis_map_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_form_elements_GroupElement__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_form_ExpressionInfo__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_FeatureForm__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_BatchAttributeForm__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_core_Collection__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_arcgis_map_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
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
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_form_elements_GroupElement__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_form_elements_GroupElement__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_form_ExpressionInfo__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_form_ExpressionInfo__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_theme__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_widgets_FeatureForm__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_FeatureForm__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_widgets_BatchAttributeForm__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_BatchAttributeForm__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_Graphic__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_core_Collection__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_core_Collection__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_arcgis_map_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_arcgis_map_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/editor/batch-edit.svg"
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/batch-edit.svg ***!
  \*******************************************************/
(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M11.795 5.281c.387-.387 1.028-.373 1.432.03l1.461 1.462c.404.404.417 1.045.03 1.432L8.414 14.51l-2.674.48a.637.637 0 0 1-.73-.73l.48-2.673zm-5.362 6.825-.32 1.782 1.782-.32 3.99-3.992-1.461-1.462zm4.692-4.693 1.46 1.462 1.402-1.401-1.462-1.461z\" clip-rule=\"evenodd\"></path><path fill=\"#000\" d=\"M4 11H1v-1h3zM7 8H1V7h6zM10 5H1V4h9zM12 2H1V1h11z\"></path></svg>"

/***/ },

/***/ "./jimu-icons/svg/outlined/editor/plus.svg"
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/plus.svg ***!
  \*************************************************/
(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5\"></path></svg>"

/***/ },

/***/ "./jimu-icons/svg/outlined/editor/search.svg"
/*!***************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/search.svg ***!
  \***************************************************/
(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z\" clip-rule=\"evenodd\"></path></svg>"

/***/ },

/***/ "./jimu-icons/svg/outlined/suggested/info.svg"
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/suggested/info.svg ***!
  \****************************************************/
(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14\" clip-rule=\"evenodd\"></path></svg>"

/***/ },

/***/ "./your-extensions/widgets/custom_edit/icon.svg"
/*!******************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/icon.svg ***!
  \******************************************************/
(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 20\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"m14.071 2.828 1.414-1.414 2.829 2.829-1.415 1.414zm-.707.708L8.038 8.86l.236 2.593 2.593.236 5.325-5.326zm-6.01 8.838 3.889.354 8.485-8.485L15.485 0 7 8.485zM8.5 3H0v17h17v-8.5h-1V19H1V4h7.5z\" clip-rule=\"evenodd\"></path></svg>"

/***/ },

/***/ "./jimu-icons/outlined/editor/batch-edit.tsx"
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/editor/batch-edit.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchEditOutlined: () => (/* binding */ BatchEditOutlined)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_batch_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/outlined/editor/batch-edit.svg */ "./jimu-icons/svg/outlined/editor/batch-edit.svg");
/* harmony import */ var _svg_outlined_editor_batch_edit_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_batch_edit_svg__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const BatchEditOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ className: classes }, others));
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_batch_edit_svg__WEBPACK_IMPORTED_MODULE_2___default()) }, others));
};


/***/ },

/***/ "./jimu-icons/outlined/editor/plus.tsx"
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/plus.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlusOutlined: () => (/* binding */ PlusOutlined)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/outlined/editor/plus.svg */ "./jimu-icons/svg/outlined/editor/plus.svg");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const PlusOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ className: classes }, others));
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_2___default()) }, others));
};


/***/ },

/***/ "./jimu-icons/outlined/editor/search.tsx"
/*!***********************************************!*\
  !*** ./jimu-icons/outlined/editor/search.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchOutlined: () => (/* binding */ SearchOutlined)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/outlined/editor/search.svg */ "./jimu-icons/svg/outlined/editor/search.svg");
/* harmony import */ var _svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const SearchOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ className: classes }, others));
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_2___default()) }, others));
};


/***/ },

/***/ "./jimu-icons/outlined/suggested/info.tsx"
/*!************************************************!*\
  !*** ./jimu-icons/outlined/suggested/info.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoOutlined: () => (/* binding */ InfoOutlined)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/outlined/suggested/info.svg */ "./jimu-icons/svg/outlined/suggested/info.svg");
/* harmony import */ var _svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const InfoOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ className: classes }, others));
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SVG, Object.assign({ className: classes, src: (_svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_2___default()) }, others));
};


/***/ },

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

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/edit-item-ds.tsx"
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/edit-item-ds.tsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditItemDataSource)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");



class EditItemDataSource extends jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onDataSourceCreated = (ds) => {
            var _a, _b;
            (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.onDataSourceCreated) === null || _b === void 0 ? void 0 : _b.call(_a, this.props.useDataSource.dataSourceId, ds);
        };
        this.onSelectionChange = (selection, preSelection) => {
            var _a, _b;
            const selectedChange = !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.idsArrayEquals)(selection, preSelection) && ((selection === null || selection === void 0 ? void 0 : selection.length) !== 0 || (preSelection === null || preSelection === void 0 ? void 0 : preSelection.length) !== 0);
            if (selectedChange) {
                (_b = (_a = this.props).onSelectionChange) === null || _b === void 0 ? void 0 : _b.call(_a, this.props.useDataSource.dataSourceId);
            }
        };
        this.onDataSourceInfoChange = (info, preInfo) => {
            var _a, _b;
            if (!info)
                return;
            const sourceVersionChange = info.sourceVersion !== (preInfo === null || preInfo === void 0 ? void 0 : preInfo.sourceVersion);
            if (sourceVersionChange) {
                (_b = (_a = this.props).onSourceVersionChange) === null || _b === void 0 ? void 0 : _b.call(_a, this.props.useDataSource.dataSourceId, info.sourceVersion);
            }
        };
    }
    render() {
        const { useDataSource } = this.props;
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: useDataSource, onDataSourceCreated: this.onDataSourceCreated, onSelectionChange: this.onSelectionChange, onDataSourceInfoChange: this.onDataSourceInfoChange }));
    }
}


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/edit-list-ds.tsx"
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/edit-list-ds.tsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts");
/* harmony import */ var _edit_item_ds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-item-ds */ "./your-extensions/widgets/custom_edit/src/runtime/components/edit-item-ds.tsx");





const EditListDataSource = (props) => {
    const { useDataSources, unsavedChange, onDataSourceCreated, onSelectionChange, onSourceVersionChange } = props;
    const [showConfirm, setShowConfirm] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const selectionToBeChangeDsIds = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef([]);
    const timer = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const doSelectionChange = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        if (selectionToBeChangeDsIds.current.length > 0) {
            timer.current !== null && window.clearTimeout(timer.current);
            timer.current = window.setTimeout(() => {
                onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(selectionToBeChangeDsIds.current);
                selectionToBeChangeDsIds.current = [];
            }, 500);
        }
    }, [onSelectionChange]);
    const handleSelectionChangeConfirm = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dsId) => {
        if (!selectionToBeChangeDsIds.current.includes(dsId)) {
            selectionToBeChangeDsIds.current.push(dsId);
        }
        if (unsavedChange) {
            setShowConfirm(true);
        }
        else {
            doSelectionChange();
        }
    }, [doSelectionChange, unsavedChange]);
    const handleConfirm = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setShowConfirm(false);
        doSelectionChange();
    }, [doSelectionChange]);
    const handleCancel = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setShowConfirm(false);
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!unsavedChange) {
            doSelectionChange();
        }
    }, [doSelectionChange, unsavedChange]);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_3__["default"]);
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, { children: [useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.map((useDs) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_edit_item_ds__WEBPACK_IMPORTED_MODULE_4__["default"], { useDataSource: useDs, onDataSourceCreated: onDataSourceCreated, onSelectionChange: handleSelectionChangeConfirm, onSourceVersionChange: onSourceVersionChange }, useDs.dataSourceId)), showConfirm && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialog, { level: 'warning', title: translate('selectionChangeConfirmTitle'), hasNotShowAgainOption: false, content: translate('selectionChangeConfirmTips'), confirmLabel: translate('discardConfirm'), cancelLabel: translate('discardCancel'), onConfirm: handleConfirm, onClose: handleCancel })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditListDataSource);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/editor-close-warning.tsx"
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/editor-close-warning.tsx ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts");




const EditorCloseWarning = (props) => {
    const { id, formChange } = props;
    const [warningBeforeClose, setWarningBeforeClose] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [isHidden, setIsHidden] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const actionInterceptor = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        return jimu_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionManager.getInstance().getExtensionById(`${id}-reduxActionInterceptor`);
    }, [id]);
    const handleConfirmClose = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setWarningBeforeClose(false);
        if (actionInterceptor)
            actionInterceptor.confirmClose = true;
        if (isHidden) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.widgetRuntimeInfoChange(id, 'state', jimu_core__WEBPACK_IMPORTED_MODULE_1__.WidgetState.Hidden));
        }
        else {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.closeWidget(id));
        }
    }, [actionInterceptor, id, isHidden]);
    const handleCancelClose = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setWarningBeforeClose(false);
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!actionInterceptor)
            return;
        actionInterceptor.formChange = formChange;
    }, [actionInterceptor, formChange]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!actionInterceptor)
            return;
        actionInterceptor.showWarningBeforeClose = (isHiddenAction) => {
            setIsHidden(isHiddenAction);
            setWarningBeforeClose(true);
        };
    }, [actionInterceptor]);
    return warningBeforeClose && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialog, { level: 'warning', title: translate('selectionChangeConfirmTitle'), hasNotShowAgainOption: false, content: translate('selectionChangeConfirmTips'), confirmLabel: translate('discardConfirm'), cancelLabel: translate('discardCancel'), onConfirm: handleConfirmClose, onClose: handleCancelClose });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorCloseWarning);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/editor-component.tsx"
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/editor-component.tsx ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/core/reactiveUtils */ "@arcgis/core/core/reactiveUtils");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icon.svg */ "./your-extensions/widgets/custom_edit/icon.svg");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/custom_edit/src/utils/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");
/* harmony import */ var _edit_list_ds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-list-ds */ "./your-extensions/widgets/custom_edit/src/runtime/components/edit-list-ds.tsx");
/* harmony import */ var _editor_close_warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor-close-warning */ "./your-extensions/widgets/custom_edit/src/runtime/components/editor-close-warning.tsx");
/* harmony import */ var _use_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./use-editor */ "./your-extensions/widgets/custom_edit/src/runtime/components/use-editor.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts");
/* harmony import */ var _editor_copy_paste__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editor-copy-paste */ "./your-extensions/widgets/custom_edit/src/runtime/components/editor-copy-paste.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














const getWidgetStyle = (theme) => (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  ${_utils__WEBPACK_IMPORTED_MODULE_8__.featureFormStyle}

  position: relative;
  width: 100%;
  height: 100%;
  min-width: 260px;
  min-height: 76px;
  overflow: visible !important;
  background: transparent !important;
  box-shadow: none !important;

  --calcite-flow-header-background-color: ${theme.sys.color.surface.paper};
  --calcite-flow-heading-text-color: ${theme.sys.color.surface.paperText};
  --calcite-flow-footer-background-color: ${theme.sys.color.surface.paper};
  --calcite-panel-footer-text-color: ${theme.sys.color.surface.paperText};
  --calcite-accordion-item-heading-text-color: ${theme.sys.color.surface.paperText};
  --calcite-accordion-item-expand-icon-color: ${theme.sys.color.surface.paperText};
  --calcite-action-background-color: ${theme.sys.color.action.default};
  --calcite-action-text-color: ${theme.sys.color.action.text};
  --calcite-action-background-color-press: ${theme.sys.color.action.pressed};
  --calcite-action-background-color-hover: ${theme.sys.color.action.hover};
  --calcite-action-text-color-press: ${theme.sys.color.action.text};
  --calcite-list-content-text-color: ${theme.sys.color.action.text};
  --calcite-list-label-text-color: ${theme.sys.color.action.text};
  --calcite-list-description-text-color: ${theme.sys.color.action.text};

  &.widget-edit {
    background: transparent !important;
    box-shadow: none !important;
    overflow: visible !important;
  }

  .simple-comment-button-row {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    margin: 0;
    background: transparent !important;
    z-index: 30;
  }

  .simple-comment-button-row .jimu-btn {
    min-width: 220px;
    height: 58px;
    border-radius: 999px;
    padding: 12px 26px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: .1px;
    color: #fff;
    background: linear-gradient(180deg, #4f8cff 0%, #2f6fe6 48%, #1f55bd 100%);
    border: 1px solid rgba(23, 79, 181, .95);
    box-shadow:
      0 9px 18px rgba(0, 0, 0, .35),
      0 2px 4px rgba(0, 0, 0, .28),
      inset 0 1px 0 rgba(255, 255, 255, .42),
      inset 0 -2px 0 rgba(0, 0, 0, .16);
    text-shadow: 0 1px 1px rgba(0, 0, 0, .35);
    transition: transform .12s ease, box-shadow .12s ease, filter .12s ease;
  }

  .simple-comment-button-row .jimu-btn:hover:not(:disabled) {
    filter: brightness(1.04);
    transform: translateY(-1px);
    box-shadow:
      0 11px 20px rgba(0, 0, 0, .38),
      0 3px 5px rgba(0, 0, 0, .3),
      inset 0 1px 0 rgba(255, 255, 255, .48),
      inset 0 -2px 0 rgba(0, 0, 0, .16);
  }

  .simple-comment-button-row .jimu-btn:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow:
      0 5px 10px rgba(0, 0, 0, .32),
      inset 0 1px 2px rgba(0, 0, 0, .22);
  }

  .simple-comment-button-row .jimu-btn:disabled {
    opacity: .72;
    cursor: not-allowed;
  }

  .simple-comment-editor-panel {
    position: absolute;
    right: 0;
    bottom: 78px;

    /*
      Keep the editor panel inside the Experience Builder widget box.
      This avoids left/right clipping when the app is viewed on smaller screens
      or when DevTools reduces the available page width.
    */
    width: 100%;
    height: calc(100% - 78px);
    min-width: 0;
    min-height: 0;

    background: #2f2f2f;
    border: 1px solid rgba(255, 255, 255, .16);
    border-radius: 16px;
    overflow: hidden;
    box-shadow:
      0 18px 36px rgba(0, 0, 0, .42),
      0 4px 10px rgba(0, 0, 0, .28);
    z-index: 20;
  }

  .simple-comment-editor-panel.d-none {
    display: none;
  }

  .simple-comment-editor-container {
    height: 100%;
    width: 100%;
    min-width: 0;
    min-height: 0;
    background: transparent;
    overflow: auto;
  }

  .simple-comment-panel-cancel {
    position: absolute;
    top: 10px;
    right: 12px;
    z-index: 50;
    min-width: 96px;
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, .28);
    color: #fff;
    background: linear-gradient(180deg, #555 0%, #3c3c3c 100%);
    box-shadow:
      0 4px 10px rgba(0, 0, 0, .25),
      inset 0 1px 0 rgba(255, 255, 255, .18);
    font-weight: 600;
    cursor: pointer;
  }

  .simple-comment-panel-cancel:hover {
    filter: brightness(1.08);
  }

  .esri-editor,
  .esri-editor__scroller,
  .esri-editor__panel-content,
  .esri-editor__content-group {
    background: #2f2f2f;
  }

  .esri-editor__panel-toolbar {
    background-color: ${theme.sys.color.surface.paper};
    color: ${theme.sys.color.surface.paperText};
  }

  .esri-sketch-tooltip-controls__block,
  .esri-snapping-controls__toggle-block,
  .esri-snapping-controls__layer-list-block {
    background-color: ${theme.sys.color.surface.paper};
    color: ${theme.sys.color.surface.paperText};
  }
  
  .simple-comment-editor-panel calcite-action.back-button[aria-label='Back'],
  .simple-comment-editor-panel calcite-action.back-button[title='Back'],
  .simple-comment-editor-panel calcite-action.back-button[icon='chevron-left'] {
    display: none !important;
  }
    
`;
const hideEditorBackButton = () => {
    const hideFromRoot = (root) => {
        var _a, _b;
        const backActions = (_a = root.querySelectorAll) === null || _a === void 0 ? void 0 : _a.call(root, "calcite-action.back-button[aria-label='Back'], calcite-action.back-button[title='Back'], calcite-action.back-button[icon='chevron-left']");
        backActions === null || backActions === void 0 ? void 0 : backActions.forEach((action) => {
            const element = action;
            element.style.display = 'none';
            element.style.visibility = 'hidden';
            element.style.width = '0';
            element.style.minWidth = '0';
            element.style.padding = '0';
            element.style.margin = '0';
        });
        (_b = root.querySelectorAll) === null || _b === void 0 ? void 0 : _b.call(root, '*').forEach((el) => {
            const shadowRoot = el.shadowRoot;
            if (shadowRoot) {
                hideFromRoot(shadowRoot);
            }
        });
    };
    const panel = document.querySelector('.simple-comment-editor-panel');
    if (panel) {
        hideFromRoot(panel);
    }
    else {
        hideFromRoot(document);
    }
};
const EditorComponent = (props) => {
    var _a;
    const { id, config, canEditFeature, useMapWidgetIds, visible } = props;
    const { mapViewsConfig, batchEditing = false, advancedEditingTools = true, copyPaste } = config;
    const [jimuMapView, setJimuMapView] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [mapUseDataSources, setMapUseDataSources] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState();
    const [editFeatures, setEditFeatures] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState({});
    const [pasteStep, setPasteStep] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('ready');
    const [commentEditorOpen, setCommentEditorOpen] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_12__["default"]);
    const theme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const editContainer = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const editor = (0,_use_editor__WEBPACK_IMPORTED_MODULE_11__["default"])({
        config,
        jimuMapView,
        editContainer,
        canEditFeature
    });
    const updateUseDataSourcesByLayerInfos = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((layerInfos) => __awaiter(void 0, void 0, void 0, function* () {
        if (!jimuMapView || jimuMapView.isDestroyed() || !layerInfos)
            return;
        const viewConfig = mapViewsConfig === null || mapViewsConfig === void 0 ? void 0 : mapViewsConfig[jimuMapView.id];
        const customizeLayers = viewConfig === null || viewConfig === void 0 ? void 0 : viewConfig.customizeLayers;
        const customJimuLayerViewIds = viewConfig === null || viewConfig === void 0 ? void 0 : viewConfig.customJimuLayerViewIds;
        const newMapUseDataSources = [];
        for (const layerInfo of layerInfos) {
            try {
                if (!layerInfo.enabled || layerInfo.layer.isTable)
                    continue;
                const jimuLayerViewId = jimuMapView.getJimuLayerViewIdByAPILayer(layerInfo.layer);
                if (customizeLayers && !(customJimuLayerViewIds === null || customJimuLayerViewIds === void 0 ? void 0 : customJimuLayerViewIds.includes(jimuLayerViewId)))
                    continue;
                const jimuLayerView = yield jimuMapView.whenJimuLayerViewLoaded(jimuLayerViewId);
                const layerDs = jimuLayerView.getLayerDataSource();
                if (!layerDs || !_utils__WEBPACK_IMPORTED_MODULE_7__.supportedDsTypes.includes(layerDs.type))
                    continue;
                const mainDs = layerDs.getMainDataSource();
                const rootDs = layerDs.getRootDataSource();
                const usedDs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)({
                    dataSourceId: layerDs.id,
                    mainDataSourceId: mainDs === null || mainDs === void 0 ? void 0 : mainDs.id,
                    dataViewId: layerDs.dataViewId,
                    rootDataSourceId: rootDs === null || rootDs === void 0 ? void 0 : rootDs.id
                });
                newMapUseDataSources.push(usedDs);
            }
            catch (e) {
                continue;
            }
        }
        setMapUseDataSources(newMapUseDataSources);
    }), [jimuMapView, mapViewsConfig]);
    const handleActiveViewChange = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((jimuMapView) => {
        setJimuMapView(jimuMapView);
    }, []);
    const startWorkflow = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((features) => __awaiter(void 0, void 0, void 0, function* () {
        if (!editor || !jimuMapView || selectionFromEditor.current)
            return;
        if (editor.activeWorkflow) {
            editor.cancelWorkflow();
        }
        const selectionManager = editor.effectiveSelectionManager;
        const featureRecords = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.flatMapArrayWithView)(features, jimuMapView);
        if (featureRecords.length === 0) {
            (selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.hasSelection) && selectionManager.clear();
        }
        else {
            selectionFromExb.current = true;
            let fullFeatures = [];
            try {
                fullFeatures = yield (0,_utils__WEBPACK_IMPORTED_MODULE_8__.queryFullFeatures)(jimuMapView, features);
            }
            catch (err) {
                console.error('Failed to query editing features:', err);
            }
            if (fullFeatures.length === 0) {
                (selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.hasSelection) && selectionManager.clear();
                console.error('No features found for the selected data records.');
            }
            else if (fullFeatures.length === 1) {
                (selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.hasSelection) && selectionManager.clear();
                const activeFeature = fullFeatures[0];
                editor.startUpdateWorkflowAtFeatureEdit(activeFeature);
            }
            else if (fullFeatures.length > 1) {
                if (jimuMapView.view.type === '2d' && batchEditing) {
                    (selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.hasSelection) && selectionManager.clear();
                    selectionManager && selectionManager.updateSelection({
                        current: fullFeatures,
                        added: [],
                        removed: [],
                    });
                }
                else {
                    editor.startUpdateWorkflowAtMultipleFeatureSelection(fullFeatures);
                }
            }
        }
    }), [batchEditing, editor, jimuMapView]);
    const startCommentsCreateWorkflow = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        var _a, _b;
        if (!editor)
            return;
        const commentsLayerInfo = (_a = editor.layerInfos) === null || _a === void 0 ? void 0 : _a.find((layerInfo) => {
            return layerInfo.layer.title === 'Comments';
        });
        if (!commentsLayerInfo || !commentsLayerInfo.addEnabled) {
            console.error('Could not find editable Comments layer.');
            return;
        }
        const commentsLayer = commentsLayerInfo.layer;
        const template = (_b = commentsLayer.templates) === null || _b === void 0 ? void 0 : _b[0];
        if (!template) {
            console.error('Could not find a feature template for the Comments layer.');
            return;
        }
        if (editor.activeWorkflow) {
            editor.cancelWorkflow();
        }
        setCommentEditorOpen(true);
        window.setTimeout(() => {
            try {
                ;
                editor.startCreateFeaturesWorkflowAtFeatureCreation({
                    layer: commentsLayer,
                    template: template
                });
            }
            catch (err) {
                console.error('Failed to start Comments create workflow:', err);
            }
        }, 250);
    }, [editor]);
    const closeCommentsCreateWorkflow = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        var _a;
        if (editor === null || editor === void 0 ? void 0 : editor.activeWorkflow) {
            editor.cancelWorkflow();
        }
        if ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.container) {
            const container = jimuMapView.view.container;
            container.style.cursor = 'default';
        }
        setCommentEditorOpen(false);
    }, [editor, jimuMapView]);
    const finishCommentsCreateWorkflow = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        window.setTimeout(() => {
            var _a;
            try {
                if (editor === null || editor === void 0 ? void 0 : editor.activeWorkflow) {
                    editor.cancelWorkflow();
                }
                if ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.container) {
                    const container = jimuMapView.view.container;
                    container.style.cursor = 'default';
                }
            }
            catch (err) {
                console.error('Failed to close comment create workflow:', err);
            }
            setCommentEditorOpen(false);
        }, 800);
    }, [editor, jimuMapView]);
    const selectionFromEditor = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(false);
    const selectionFromExb = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(false);
    const handleSelectionChange = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dataSourceIds) => {
        const newEditFeatures = Object.assign({}, editFeatures);
        for (const dataSourceId of dataSourceIds) {
            const dataSource = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDataSourceById)(dataSourceId);
            if (!dataSource)
                continue;
            const selectedRecords = dataSource.getSelectedRecords();
            newEditFeatures[dataSourceId] = selectedRecords;
        }
        setEditFeatures(newEditFeatures);
        if (selectionFromEditor.current) {
            window.setTimeout(() => {
                selectionFromEditor.current = false;
            }, 50);
        }
        else if (visible && commentEditorOpen) {
            startWorkflow(newEditFeatures);
        }
    }, [commentEditorOpen, editFeatures, startWorkflow, visible]);
    const handleSourceVersionChange = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dataSourceId) => {
        const featureRecords = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.flatMapArrayWithView)(editFeatures, jimuMapView);
        const featureCount = featureRecords.length;
        if (!(editor === null || editor === void 0 ? void 0 : editor.viewModel.syncing) || featureCount === 1) {
            handleSelectionChange([dataSourceId]);
        }
    }, [editFeatures, editor, handleSelectionChange, jimuMapView]);
    const editFeatureRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useLatest(editFeatures);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        var _a, _b;
        if (visible && commentEditorOpen && !((_a = editor === null || editor === void 0 ? void 0 : editor.activeWorkflow) === null || _a === void 0 ? void 0 : _a.started)) {
            startWorkflow(editFeatureRef.current);
        }
        if (!visible && ((_b = editor === null || editor === void 0 ? void 0 : editor.activeWorkflow) === null || _b === void 0 ? void 0 : _b.started)) {
            editor.activeWorkflow.cancel();
            setCommentEditorOpen(false);
        }
    }, [commentEditorOpen, editFeatureRef, editor, startWorkflow, visible]);
    const [formChange, setFormChange] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const previousRootFeatures = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef([]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!editor || !jimuMapView)
            return;
        const selectionManager = editor.effectiveSelectionManager;
        const selectionChangeHandle = jimuMapView.view.type === '2d' && batchEditing && selectionManager.on('selection-change', (evt) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (selectionFromExb.current) {
                selectionFromExb.current = false;
                return;
            }
            const rootDs = jimuMapView.getMapDataSource();
            for (const change of (evt.changes || [])) {
                const layer = change.layer;
                if (!layer)
                    continue;
                const dsId = jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getDataSourceIdByJSAPILayer(rootDs, layer);
                const ds = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDataSourceById)(dsId);
                if (!ds)
                    continue;
                const layerSelectedIds = change.selection || [];
                const dsSelectedIds = ds.getSelectedRecordIds();
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.idsArrayEquals)(layerSelectedIds, dsSelectedIds) && (layerSelectedIds.length !== 0 || dsSelectedIds.length !== 0)) {
                    if (layerSelectedIds.length === 0) {
                        ds.clearSelection();
                    }
                    else {
                        const records = (_a = (yield ds.query({
                            objectIds: layerSelectedIds,
                            outFields: ['*'],
                            returnGeometry: true
                        }))) === null || _a === void 0 ? void 0 : _a.records;
                        ds.selectRecordsByIds(records.map(r => r.getId()), records);
                    }
                    selectionFromEditor.current = true;
                }
            }
        }));
        const watchCandidates = esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__.watch(() => { var _a, _b, _c; return (_c = (_b = (_a = editor.viewModel) === null || _a === void 0 ? void 0 : _a.activeWorkflow) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.candidates; }, (candidates, oldCandidates) => {
            var _a, _b, _c, _d, _e;
            const data = (_b = (_a = editor.viewModel) === null || _a === void 0 ? void 0 : _a.activeWorkflow) === null || _b === void 0 ? void 0 : _b.data;
            const rootFeatures = ((_d = (_c = data === null || data === void 0 ? void 0 : data.rootFeatures) === null || _c === void 0 ? void 0 : _c.toArray) === null || _d === void 0 ? void 0 : _d.call(_c)) || [];
            const singleSelection = previousRootFeatures.current.length === 0 && rootFeatures.length === 1;
            const singleUnselection = previousRootFeatures.current.length === 1 && rootFeatures.length === 0;
            const singleSelectionInBatchMode = (singleSelection || singleUnselection) && !(selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.hasSelection);
            if (jimuMapView.view.type === '2d' && batchEditing && !singleSelectionInBatchMode)
                return;
            previousRootFeatures.current = rootFeatures || [];
            const toolbar = editor.viewModel.selectionToolbarViewModel;
            if (toolbar && toolbar.activeOperation) {
                (_e = toolbar.cancel) === null || _e === void 0 ? void 0 : _e.call(toolbar);
            }
            if (selectionFromExb.current || editor.viewModel.syncing) {
                if (candidates !== undefined) {
                    selectionFromExb.current = false;
                }
                return;
            }
            const candidateFeatures = (candidates === null || candidates === void 0 ? void 0 : candidates.length) > 0 ? candidates : rootFeatures;
            const candidateFeatureMap = {};
            for (const c of (candidateFeatures || [])) {
                if (!candidateFeatureMap[c.layer.id]) {
                    candidateFeatureMap[c.layer.id] = [];
                }
                candidateFeatureMap[c.layer.id].push(c);
            }
            const layers = editor.layerInfos.map(l => l.layer);
            for (const layer of layers) {
                const rootDs = jimuMapView.getMapDataSource();
                const dsId = jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getDataSourceIdByJSAPILayer(rootDs, layer);
                const ds = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDataSourceById)(dsId);
                if (!ds)
                    continue;
                const candidateFeatures = candidateFeatureMap[layer.id] || [];
                const candidateIds = [];
                const candidateRecords = [];
                for (const feature of candidateFeatures) {
                    const record = ds.buildRecord(feature);
                    candidateRecords.push(record);
                    candidateIds.push(record.getId());
                }
                const selectedIds = ds.getSelectedRecordIds();
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.idsArrayEquals)(selectedIds, candidateIds) && (selectedIds.length !== 0 || candidateIds.length !== 0)) {
                    const allWithGeometry = candidateRecords.every(r => r.feature.geometry);
                    if (allWithGeometry) {
                        ds.selectRecordsByIds(candidateIds, candidateRecords);
                    }
                    else {
                        ds.query({
                            objectIds: candidateIds,
                            outFields: ['*'],
                            returnGeometry: true
                        }).then(result => {
                            const records = ((result === null || result === void 0 ? void 0 : result.records) || []);
                            ds.selectRecordsByIds(candidateIds, records);
                        }).catch(() => {
                            console.error(new Error('Failed to query features'));
                        });
                    }
                    selectionFromEditor.current = true;
                }
            }
        });
        const watchFeatureForm = esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__.watch(() => { var _a; return (_a = editor.viewModel) === null || _a === void 0 ? void 0 : _a.formViewModel; }, (formViewModel) => {
            if (!formViewModel) {
                setFormChange(false);
                return;
            }
            if ('features' in formViewModel) {
                const batchAttributeFormViewModel = formViewModel;
                batchAttributeFormViewModel.on('value-change', () => {
                    setFormChange(batchAttributeFormViewModel.userHasChangedValues);
                });
            }
            else if ('feature' in formViewModel) {
                const featureFormViewModel = formViewModel;
                const originalFormValues = featureFormViewModel.getValues();
                featureFormViewModel.on('value-change', (changedValue) => {
                    var _a;
                    const idField = featureFormViewModel.layer.objectIdField;
                    const arcadeFields = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getFlatFormElements)(((_a = featureFormViewModel.formTemplate) === null || _a === void 0 ? void 0 : _a.elements) || [])
                        .map(e => e.type === 'field' && e.valueExpression && e.fieldName).filter(v => !!v) || [];
                    const { fieldName } = changedValue;
                    if (fieldName === idField || arcadeFields.includes(fieldName)) {
                        return;
                    }
                    const newFormValues = featureFormViewModel.getValues();
                    let change = false;
                    if (newFormValues) {
                        for (const key in newFormValues) {
                            if (arcadeFields.includes(key))
                                continue;
                            if ((originalFormValues === null || originalFormValues === void 0 ? void 0 : originalFormValues[key]) !== newFormValues[key]) {
                                change = true;
                                break;
                            }
                        }
                    }
                    setFormChange(change);
                });
                featureFormViewModel.on('submit', () => {
                    setFormChange(false);
                    finishCommentsCreateWorkflow();
                });
            }
        });
        return () => {
            var _a, _b;
            (_a = selectionChangeHandle === null || selectionChangeHandle === void 0 ? void 0 : selectionChangeHandle.remove) === null || _a === void 0 ? void 0 : _a.call(selectionChangeHandle);
            (_b = watchCandidates === null || watchCandidates === void 0 ? void 0 : watchCandidates.remove) === null || _b === void 0 ? void 0 : _b.call(watchCandidates);
            watchFeatureForm.remove();
        };
    }, [editor, jimuMapView, batchEditing, finishCommentsCreateWorkflow]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!commentEditorOpen)
            return;
        hideEditorBackButton();
        const interval = window.setInterval(() => {
            hideEditorBackButton();
        }, 250);
        window.setTimeout(() => {
            window.clearInterval(interval);
        }, 3000);
        return () => {
            window.clearInterval(interval);
        };
    }, [commentEditorOpen]);
    const previousBatchEditing = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.usePrevious(batchEditing);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        var _a;
        if (!editor)
            return;
        if (previousBatchEditing !== batchEditing) {
            const selectionToolbar = editor._selectionToolbar;
            if (!batchEditing && (selectionToolbar === null || selectionToolbar === void 0 ? void 0 : selectionToolbar.activeOperation)) {
                (_a = selectionToolbar.cancel) === null || _a === void 0 ? void 0 : _a.call(selectionToolbar);
            }
            if (editor.activeWorkflow) {
                startWorkflow(editFeatures);
            }
        }
    }, [batchEditing, editFeatures, editor, previousBatchEditing, startWorkflow]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!editor)
            return;
        const watchLayerInfos = esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__.watch(() => editor === null || editor === void 0 ? void 0 : editor.layerInfos, (layerInfos) => {
            updateUseDataSourcesByLayerInfos(layerInfos);
        }, { initial: true });
        return () => {
            watchLayerInfos.remove();
        };
    }, [editor, updateUseDataSourcesByLayerInfos]);
    const mapWidgetId = useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds[0];
    const calciteColorMapping = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.useCalciteColorMapping)();
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Paper, { shape: 'none', className: 'jimu-widget widget-edit', css: [getWidgetStyle(theme), calciteColorMapping], children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'simple-comment-button-row', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: 'primary', size: 'sm', onClick: startCommentsCreateWorkflow, disabled: !editor || !jimuMapView || commentEditorOpen, children: "Add Comment" }) }), advancedEditingTools && copyPaste && mapWidgetId && jimuMapView && jimuMapView.view.type === '2d' && editor && commentEditorOpen &&
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_editor_copy_paste__WEBPACK_IMPORTED_MODULE_13__["default"], { jimuMapView: jimuMapView, editor: editor, mapWidgetId: mapWidgetId, widgetId: id, formChange: formChange, onStepChange: setPasteStep }), mapWidgetId &&
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)('simple-comment-editor-panel', {
                        'd-none': pasteStep === 'pasteSpecial' || !commentEditorOpen
                    }), children: [commentEditorOpen && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: 'button', className: 'simple-comment-panel-cancel', onClick: closeCommentsCreateWorkflow, children: "Cancel" })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'edit-con simple-comment-editor-container', ref: editContainer })] }), !mapWidgetId && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.WidgetPlaceholder, { autoFlip: true, icon: (_icon_svg__WEBPACK_IMPORTED_MODULE_6___default()), name: translate('_widgetLabel'), "data-testid": 'editPlaceholder' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: mapWidgetId, onActiveViewChange: handleActiveViewChange }), mapWidgetId && !jimuMapView && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-secondary-loading' }), editor && commentEditorOpen && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_edit_list_ds__WEBPACK_IMPORTED_MODULE_9__["default"], { useDataSources: mapUseDataSources, unsavedChange: formChange && !!((_a = editor.viewModel) === null || _a === void 0 ? void 0 : _a.formViewModel), onSelectionChange: handleSelectionChange, onSourceVersionChange: handleSourceVersionChange }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_editor_close_warning__WEBPACK_IMPORTED_MODULE_10__["default"], { id: props.id, formChange: formChange })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorComponent);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/editor-copy-paste.tsx"
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/editor-copy-paste.tsx ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var arcgis_map_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! arcgis-map-components */ "arcgis-map-components");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/core/reactiveUtils */ "@arcgis/core/core/reactiveUtils");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/custom_edit/src/utils/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const copyPasteToolStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  display: flex;
  gap: 4px;
  position: absolute;
  top: 9px;
  right: 4px;
  z-index: 2;
`;
const pastePanelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  max-width: unset;
  --arcgis-paste-width: 100%;
  --arcgis-paste-height: 100%;
`;
function CopyPastePanel(props) {
    const { jimuMapView, editor, mapWidgetId, widgetId, formChange, onStepChange } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, _translations_default__WEBPACK_IMPORTED_MODULE_6__["default"]);
    const [step, setStep] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('ready');
    const [pasteComponent, setPasteComponent] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [clipboardItems, setClipboardItems] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [warningBeforePaste, setWarningBeforePaste] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [selectedFeatures, setSelectedFeatures] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [copying, setCopying] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const copyFeatures = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const esriClipboard = pasteComponent === null || pasteComponent === void 0 ? void 0 : pasteComponent.clipboard;
        if (!esriClipboard)
            return;
        setCopying(true);
        try {
            const copyData = [];
            const featureLayerMap = selectedFeatures.reduce((map, graphic) => {
                var _a;
                const layer = (_a = jimuMapView.jimuLayerViews[graphic.jimuLayerViewId]) === null || _a === void 0 ? void 0 : _a.layer;
                if (!layer) {
                    return map;
                }
                if (!map.get(layer)) {
                    map.set(layer, []);
                }
                map.get(layer).push(graphic);
                return map;
            }, new Map());
            const promises = Array.from(featureLayerMap.entries()).map(([layer, graphics]) => {
                const featureLayer = layer;
                const ids = graphics.map(g => { var _a; return (_a = g.getObjectId()) !== null && _a !== void 0 ? _a : g.getGlobalId(); }).filter(id => id !== undefined);
                if (ids.length === 0) {
                    return Promise.resolve();
                }
                return featureLayer.queryFeatures({
                    objectIds: ids,
                    outFields: ['*'],
                    returnGeometry: true,
                    outSpatialReference: jimuMapView.view.spatialReference
                }).then(result => {
                    const features = result.features;
                    return features;
                }).catch(() => {
                    console.error('Failed to query features for copy');
                });
            });
            const features = yield Promise.allSettled(promises).then(results => {
                const allFeatures = [];
                results.forEach(res => {
                    if (res.status === 'fulfilled' && Array.isArray(res.value)) {
                        allFeatures.push(...res.value);
                    }
                });
                return allFeatures;
            });
            features.forEach((graphic) => {
                const layer = graphic.layer;
                if (!layer)
                    return;
                copyData.push({
                    graphic,
                    layer,
                    type: 'feature',
                });
            });
            esriClipboard.setData(copyData);
        }
        catch (err) {
            console.error('Failed to copy features: ', err);
        }
        finally {
            setCopying(false);
        }
    }), [jimuMapView, pasteComponent === null || pasteComponent === void 0 ? void 0 : pasteComponent.clipboard, selectedFeatures]);
    const layerPermissionsCheck = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => ({
        canCreate: (layer) => {
            const layerInfos = (editor === null || editor === void 0 ? void 0 : editor.layerInfos) || [];
            const layerInfo = layerInfos.find(l => { var _a; return ((_a = l.layer) === null || _a === void 0 ? void 0 : _a.id) === (layer === null || layer === void 0 ? void 0 : layer.id); });
            return !layerInfo || layerInfo.addEnabled;
        },
        canUpdate: (layer) => {
            const layerInfos = (editor === null || editor === void 0 ? void 0 : editor.layerInfos) || [];
            const layerInfo = layerInfos.find(l => { var _a; return ((_a = l.layer) === null || _a === void 0 ? void 0 : _a.id) === (layer === null || layer === void 0 ? void 0 : layer.id); });
            return !layerInfo || (layerInfo.updateEnabled && layerInfo.geometryUpdatesEnabled);
        },
    }), [editor === null || editor === void 0 ? void 0 : editor.layerInfos]);
    const startPaste = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((step) => {
        if (pasteComponent === null || pasteComponent === void 0 ? void 0 : pasteComponent.closed) {
            pasteComponent.closed = false;
        }
        setStep(step);
    }, [pasteComponent]);
    const handleConfirmStartPaste = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        if (warningBeforePaste) {
            startPaste(warningBeforePaste);
        }
        setWarningBeforePaste(null);
    }, [startPaste, warningBeforePaste]);
    const handleCancelStartPaste = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setWarningBeforePaste(null);
    }, []);
    const tryPasteWithAttributes = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        if (formChange) {
            setWarningBeforePaste('pasteSpecial');
        }
        else {
            startPaste('pasteSpecial');
        }
    }, [formChange, startPaste]);
    const cancelPaste = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setStep('ready');
    }, []);
    const updateDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((result) => {
        const layerFeaturesMap = new Map();
        if (result.type === 'layer') {
            const addFeatureResults = result.edits.addFeatureResults;
            const layer = result.layer;
            layerFeaturesMap.set(layer, addFeatureResults);
        }
        else {
            const allJimuLayerViews = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.getAllJimuLayerViews();
            const serviceUrl = result.featureService.url;
            for (const edit of result.edits) {
                const layerView = allJimuLayerViews.find(jlv => {
                    const l = jlv.layer;
                    return (l === null || l === void 0 ? void 0 : l.layerId) === edit.id && (l === null || l === void 0 ? void 0 : l.url) && l.url.includes(serviceUrl);
                });
                if (!layerView)
                    continue;
                const addFeatureResults = edit.addFeatureResults;
                layerFeaturesMap.set(layerView.layer, addFeatureResults);
            }
        }
        const promises = [];
        layerFeaturesMap.forEach((features, layer) => {
            const dsId = jimuMapView.getDataSourceIdByAPILayer(layer);
            const ds = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDataSourceById)(dsId);
            if (!ds)
                return;
            promises.push(new Promise((resolve, reject) => {
                const addIds = features.map(f => { var _a; return (_a = f.objectId) !== null && _a !== void 0 ? _a : f.globalId; });
                if (addIds.length > 0) {
                    ds.query({
                        objectIds: addIds,
                        outFields: ['*'],
                        returnGeometry: true
                    }).then(result => {
                        const records = ((result === null || result === void 0 ? void 0 : result.records) || []);
                        const featurePromises = records.map(r => r.getJSAPIGraphic());
                        Promise.all(featurePromises).then((addFeatures) => {
                            (0,_utils__WEBPACK_IMPORTED_MODULE_5__.updateDataSourceAfterEdit)(ds, { addFeatures });
                            ds.selectRecordsByIds(addIds, records);
                        }).catch(() => {
                            console.error('Failed to get added features graphics');
                        });
                        resolve();
                    }).catch(() => {
                        reject(new Error('Failed to query added features'));
                    });
                }
                else {
                    reject(new Error('No features to add'));
                }
            }));
        });
    }, [jimuMapView]);
    const handleApplyPaste = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((e) => {
        const promise = new Promise((resolve, reject) => {
            try {
                const applySet = e.detail.applySet;
                if (applySet) {
                    pasteComponent.writeChanges(applySet)
                        .then((result) => {
                        if (Array.isArray(result)) {
                            for (const res of result) {
                                updateDataSource(res);
                            }
                        }
                        else {
                            updateDataSource(result);
                        }
                        setStep('ready');
                        resolve();
                    })
                        .catch((err) => {
                        reject(new Error('Failed to apply paste edits: ' + err.message));
                        console.error(err);
                    });
                }
                else {
                    resolve();
                }
            }
            catch (err) {
                reject(new Error('Failed to save edits: ' + err.message));
            }
        });
        e.detail.completionCallback = promise;
    }, [pasteComponent, updateDataSource]);
    const handlePasteReady = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((evt) => {
        const pasteComponent = evt.target;
        setPasteComponent(pasteComponent);
    }, []);
    const prevJimuMapView = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.usePrevious(jimuMapView);
    const selectedFeaturesReqIdRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(0);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        var _a;
        // clear clipboard when changing map view
        if (prevJimuMapView !== jimuMapView && ((_a = pasteComponent === null || pasteComponent === void 0 ? void 0 : pasteComponent.clipboard) === null || _a === void 0 ? void 0 : _a.hasItems)) {
            pasteComponent.clipboard.setData([]);
        }
        // listen to selected features change
        const updateSelectedFeatures = () => __awaiter(this, void 0, void 0, function* () {
            if (jimuMapView) {
                const reqId = ++selectedFeaturesReqIdRef.current;
                const features = yield jimuMapView.getSelectedFeatures();
                if (reqId === selectedFeaturesReqIdRef.current) {
                    setSelectedFeatures(features);
                }
            }
        });
        if (jimuMapView) {
            updateSelectedFeatures();
            jimuMapView.addJimuLayerViewSelectedFeaturesChangeListener(updateSelectedFeatures);
        }
        return () => {
            if (jimuMapView) {
                jimuMapView.removeJimuLayerViewSelectedFeaturesChangeListener(updateSelectedFeatures);
            }
        };
    }, [jimuMapView, pasteComponent, prevJimuMapView]);
    // watch clipboard items change
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!pasteComponent)
            return;
        const watchClipboard = esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__.watch(() => { var _a; return (_a = pasteComponent === null || pasteComponent === void 0 ? void 0 : pasteComponent.clipboard) === null || _a === void 0 ? void 0 : _a.version; }, (version) => {
            var _a;
            const items = (_a = pasteComponent === null || pasteComponent === void 0 ? void 0 : pasteComponent.clipboard) === null || _a === void 0 ? void 0 : _a.items;
            setClipboardItems(items ? items.toArray() : []);
        });
        return () => {
            watchClipboard === null || watchClipboard === void 0 ? void 0 : watchClipboard.remove();
        };
    }, [pasteComponent]);
    const requestControl = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const action = jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.requestAutoControlMapWidget(mapWidgetId, widgetId);
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().dispatch(action);
        jimuMapView.clearSelectedFeatures();
        const selectionToolbar = editor._selectionToolbar;
        if (selectionToolbar === null || selectionToolbar === void 0 ? void 0 : selectionToolbar.activeOperation) {
            (_a = selectionToolbar.cancel) === null || _a === void 0 ? void 0 : _a.call(selectionToolbar);
        }
        if (pasteComponent) {
            yield pasteComponent.showClipboardItems(true);
            yield pasteComponent.startMoveClipboard(true);
        }
    }), [editor, jimuMapView, mapWidgetId, pasteComponent, widgetId]);
    const releaseControl = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const action = jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.releaseAutoControlMapWidget(mapWidgetId);
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().dispatch(action);
        if (pasteComponent) {
            yield pasteComponent.showClipboardItems(false);
            yield pasteComponent.cancelMoveClipboard();
        }
    }), [mapWidgetId, pasteComponent]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        // update paste open for parent
        onStepChange(step);
        // manage map control
        if (step === 'ready') {
            releaseControl();
        }
        else {
            requestControl();
        }
    }, [onStepChange, releaseControl, requestControl, step]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        return () => {
            void releaseControl();
        };
    }, [releaseControl]);
    const clipboardEmpty = !clipboardItems || clipboardItems.length === 0;
    const noSelection = !Array.isArray(selectedFeatures) || selectedFeatures.length === 0;
    const exceedMaxCount = Array.isArray(selectedFeatures) && selectedFeatures.length > 200;
    const [unsupportedLayers, selectionFromMultiLayers] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const unsupportedLayers = [];
        const uniqueLayers = [];
        let selectionFromMultiLayers = false;
        if (noSelection)
            return [unsupportedLayers, selectionFromMultiLayers];
        selectedFeatures.forEach((graphic) => {
            const layer = graphic === null || graphic === void 0 ? void 0 : graphic.layer;
            const layerType = layer === null || layer === void 0 ? void 0 : layer.type;
            if (layer && layerType && !['feature', 'subtype-group', 'subtype-sublayer'].includes(layerType)) {
                !unsupportedLayers.includes(layer) && unsupportedLayers.push(layer);
            }
            !uniqueLayers.includes(layer) && uniqueLayers.push(layer);
        });
        selectionFromMultiLayers = uniqueLayers.length > 1;
        return [unsupportedLayers, selectionFromMultiLayers];
    }, [noSelection, selectedFeatures]);
    const unsupportedLayerNames = unsupportedLayers.map(l => l.title || l.id || '').join(', ');
    const hasUnsupportedLayers = unsupportedLayers.length > 0;
    const disableCopy = noSelection || exceedMaxCount || selectionFromMultiLayers || hasUnsupportedLayers || copying;
    let copyTooltip = translate('copy');
    if (noSelection || selectionFromMultiLayers) {
        copyTooltip = translate('canNotCopyMultipleLayers');
    }
    else if (exceedMaxCount) {
        copyTooltip = `${translate('maximum')}: 200`;
    }
    else if (hasUnsupportedLayers) {
        copyTooltip = translate('copySupportedLayersOnly', { layers: unsupportedLayerNames });
    }
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, { children: [pasteComponent && ['ready', 'paste'].includes(step) &&
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'copy-paste-tool', css: copyPasteToolStyle, children: step === 'ready' && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-action", { id: `${widgetId}-editor-copy`, icon: 'copy', text: '', loading: copying, disabled: disableCopy, "aria-label": translate('copy'), onClick: copyFeatures }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": `${widgetId}-editor-copy`, placement: 'bottom', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: copyTooltip }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-action", { id: `${widgetId}-editor-paste`, icon: 'paste-with-attribute', text: '', disabled: clipboardEmpty, "aria-label": translate('paste'), onClick: tryPasteWithAttributes }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": `${widgetId}-editor-paste`, placement: 'bottom', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: translate('paste') }) })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("arcgis-paste", { view: jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view, alwaysShowFeatureForm: true, pasteWithMultipleLayersEnabled: false, pasteWithMultipleFeaturesEnabled: true, maximumFeatureCount: 200, supportedCommands: ['paste', 'paste-as'], hideHeaderCloseButton: true, layerPermissionsCheck: layerPermissionsCheck, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)('w-100 h-100', { 'd-none': step !== 'pasteSpecial' }), css: pastePanelStyle, onarcgisReady: handlePasteReady, onarcgisApplyPasteCommand: handleApplyPaste, onarcgisClose: cancelPaste, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-action", { slot: 'home-header-actions-start', icon: 'chevron-left', text: '', title: translate('back'), "aria-label": translate('back'), iconFlipRtl: true, onClick: cancelPaste }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-notice", { slot: 'commands-page-message', className: 'mt-4', open: true, icon: "move", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { slot: "message", children: translate('moveClipboardFeatures') }) })] }), warningBeforePaste &&
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialog, { level: 'warning', title: translate('selectionChangeConfirmTitle'), hasNotShowAgainOption: false, content: translate('selectionChangeConfirmTips'), confirmLabel: translate('discardConfirm'), cancelLabel: translate('discardCancel'), onConfirm: handleConfirmStartPaste, onClose: handleCancelStartPaste })] });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyPastePanel);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/empty-placeholder.tsx"
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/empty-placeholder.tsx ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/suggested/info */ "./jimu-icons/outlined/suggested/info.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");




const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  .edit-blank {
    min-height: 300px;
    & > div{
      top: calc(50% + 20px);
      transform: translateY(-50%);
    }
    p{
      margin-top: 16px;
      margin-bottom: 16px;
      color: var(--sys-color-surface-paper-hint);
    }
  }
`;
const EmptyPlaceholder = (props) => {
    const { emptyTips } = props;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'surface-1 border-0 h-100', css: style, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 text-center edit-blank', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'position-absolute edit-blank-content w-100', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_2__.InfoOutlined, { size: 32, color: 'var(--sys-color-surface-paper-hint)' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, { component: 'p', variant: 'label1', className: 'empty-tips', children: emptyTips })] }) }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyPlaceholder);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-buttons.tsx"
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-buttons.tsx ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  &.form-buttons{
    border-top: 1px solid var(--sys-color-divider-secondary);
    padding: 12px 15px;
    display: flex;
    .single-button {
      flex: 1;
    }
    .multi-buttons {
      width: 49%;
    }
  }
`;
const FeatureFormButtons = (props) => {
    const { buttons } = props;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between form-buttons', css: style, children: buttons.map(({ disabled = false, label, type, clickHandler }, index) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)({
                'single-button': buttons.length === 1,
                'multi-buttons': buttons.length > 1,
            }), type: type, disabled: disabled, onClick: clickHandler, children: label }, index)) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFormButtons);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-component.tsx"
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-component.tsx ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormChangeType: () => (/* binding */ FormChangeType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_form_FormTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/form/FormTemplate */ "esri/form/FormTemplate");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/custom_edit/src/config.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/custom_edit/src/utils/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");
/* harmony import */ var _empty_placeholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./empty-placeholder */ "./your-extensions/widgets/custom_edit/src/runtime/components/empty-placeholder.tsx");
/* harmony import */ var _feature_form_confirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature-form-confirm */ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-confirm.tsx");
/* harmony import */ var _feature_form_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feature-form-header */ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-header.tsx");
/* harmony import */ var _feature_form_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feature-form-buttons */ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-buttons.tsx");
/* harmony import */ var _feature_form_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature-form-list */ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-list.tsx");
/* harmony import */ var _feature_form_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feature-form-select */ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-select.tsx");
/* harmony import */ var _edit_list_ds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-list-ds */ "./your-extensions/widgets/custom_edit/src/runtime/components/edit-list-ds.tsx");
/* harmony import */ var _use_feature_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./use-feature-form */ "./your-extensions/widgets/custom_edit/src/runtime/components/use-feature-form.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















const widgetStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  ${_utils__WEBPACK_IMPORTED_MODULE_7__.featureFormStyle}
  &.widget-edit {
    .jimu-loading {
      z-index: 1;
    }
    .edit-con {
      display: flex;
      flex-direction: column;
    }
    .attr-height {
      overflow-y: auto;
      height: calc(100% - 113px);
      .edit-notice {
        margin: 12px 15px;
      }
    }
  }
`;
var FormChangeType;
(function (FormChangeType) {
    FormChangeType["Arcade"] = "arcade";
    FormChangeType["Normal"] = "normal";
})(FormChangeType || (FormChangeType = {}));
const FeatureFormComponent = (props) => {
    var _a, _b;
    const { label: widgetLabel, config, canEditFeature, useDataSources } = props;
    const { description, layersConfig, noDataMessage, batchEditing } = config;
    const [activeId, setActiveId] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [activeRecords, setActiveRecords] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [editFeatures, setEditFeatures] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState({});
    const [sourceVersion, setSourceVersion] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [layersInfo, setLayersInfo] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState({});
    const [addLayersConfig, setAddLayersConfig] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState((0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)([]));
    const [delConfirm, setDelConfirm] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [backConfirm, setBackConfirm] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const editContainer = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(undefined);
    const activeLayerInfo = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => layersInfo[activeId], [activeId, layersInfo]);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_5__["default"], jimu_core__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        const newEditFeatures = Object.assign({}, editFeatures);
        let editFeaturesChanged = false;
        for (const dsId in editFeatures) {
            const layerConfig = layersConfig.find(l => l.id === dsId);
            if (!layerConfig) {
                delete newEditFeatures[dsId];
                editFeaturesChanged = true;
            }
        }
        editFeaturesChanged && setEditFeatures(newEditFeatures);
    }, [editFeatures, layersConfig]);
    const { loading, formChange, formSubmittable, saveForm, addForm, deleteForm } = (0,_use_feature_form__WEBPACK_IMPORTED_MODULE_15__["default"])({
        sourceVersion,
        activeLayerInfo,
        activeRecords,
        editContainer,
    });
    const formPrivilegesIsFull = (activeLayerInfo === null || activeLayerInfo === void 0 ? void 0 : activeLayerInfo.privilege) === 'full';
    const formPrivilegesIsNormal = (activeLayerInfo === null || activeLayerInfo === void 0 ? void 0 : activeLayerInfo.privilege) === 'normal';
    const formEditable = (activeLayerInfo === null || activeLayerInfo === void 0 ? void 0 : activeLayerInfo.isPublic) || canEditFeature || formPrivilegesIsFull;
    const activeConfig = layersConfig.find(item => item.id === activeId);
    const layerDefinition = (_b = (_a = activeLayerInfo === null || activeLayerInfo === void 0 ? void 0 : activeLayerInfo.dataSource) === null || _a === void 0 ? void 0 : _a.getLayerDefinition) === null || _b === void 0 ? void 0 : _b.call(_a);
    const { create, update, deletable } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDsPrivileges)(layerDefinition);
    const updateRecords = (activeConfig === null || activeConfig === void 0 ? void 0 : activeConfig.updateRecords) && update;
    const deleteRecords = (activeConfig === null || activeConfig === void 0 ? void 0 : activeConfig.deleteRecords) && deletable;
    const addRecords = (activeConfig === null || activeConfig === void 0 ? void 0 : activeConfig.addRecords) && create;
    const isTableLayer = (layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.type) === jimu_core__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.Table;
    const intl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
    const countLabel = (activeRecords === null || activeRecords === void 0 ? void 0 : activeRecords.length) > 1 ? ` (${intl.formatNumber(activeRecords.length)})` : '';
    const controls = [];
    if (formPrivilegesIsFull || (formPrivilegesIsNormal && updateRecords)) {
        controls.push({
            label: translate('update') + countLabel,
            type: 'primary',
            disabled: !(formChange && formSubmittable),
            clickHandler: saveForm
        });
    }
    const handleDeleteConfirm = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setDelConfirm(true);
    }, []);
    const cancelDelete = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setDelConfirm(false);
    }, []);
    const handleDelete = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const success = yield deleteForm();
        if (success) {
            setDelConfirm(false);
        }
    }), [deleteForm]);
    if (formPrivilegesIsFull || (formPrivilegesIsNormal && deleteRecords)) {
        controls.push({
            label: translate('delete') + countLabel,
            type: 'danger',
            clickHandler: handleDeleteConfirm
        });
    }
    const addControls = [];
    const handleAdd = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const success = yield addForm();
        if (success) {
            setActiveId(null);
        }
    }), [addForm]);
    if (isTableLayer && (formPrivilegesIsFull || (formPrivilegesIsNormal && addRecords))) {
        addControls.push({
            label: translate('add'),
            type: 'primary',
            disabled: false,
            clickHandler: handleAdd
        });
    }
    const handleBack = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        const flatEditFeatures = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.flatMapArray)(editFeatures);
        if (flatEditFeatures.length === 1) {
            let needClearSelection = true;
            const featureRecord = flatEditFeatures[0];
            const dataSource = featureRecord.dataSource;
            const selectedRecordIds = dataSource.getSelectedRecordIds();
            if (selectedRecordIds.length > 1 || !selectedRecordIds.includes(featureRecord.getId())) {
                needClearSelection = false;
            }
            if (dataSource && needClearSelection) {
                dataSource.clearSelection();
            }
        }
        setBackConfirm(false);
        setActiveId(null);
        setActiveRecords(null);
    }, [editFeatures]);
    const handleBackConfirm = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        if (formChange) {
            setBackConfirm(true);
        }
        else {
            handleBack();
        }
    }, [formChange, handleBack]);
    const cancelBack = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        setBackConfirm(false);
    }, []);
    const handleClickItem = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dsId, record) => {
        setActiveId(dsId);
        setActiveRecords([record]);
    }, []);
    const handleBatchEdit = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dsId, records) => {
        setActiveId(dsId);
        setActiveRecords(records);
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (typeof canEditFeature !== 'boolean')
            return;
        const newAddLayersConfig = layersConfig.filter(layerConfig => {
            const layerInfo = layersInfo[layerConfig.id];
            if (!layerInfo)
                return false;
            const layerDefinition = layerInfo.dataSource.getLayerDefinition();
            const isTable = (layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.type) === jimu_core__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.Table;
            return (layerInfo.isPublic || canEditFeature) && isTable && (layerInfo.privilege === 'full' ||
                (layerInfo.privilege === 'normal' && layerConfig.addRecords));
        });
        setAddLayersConfig(newAddLayersConfig);
    }, [canEditFeature, layersConfig, layersInfo]);
    const handleNew = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        const firstId = addLayersConfig[0].id;
        setActiveId(firstId);
        setActiveRecords(null);
    }, [addLayersConfig]);
    const getLayerInfo = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dsId) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
            const ds = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDataSourceById)(dsId);
            const dataSource = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getEditDataSource)(ds);
            const layer = yield dataSource.createJSAPILayerByDataSource();
            let formTemplate;
            const layerConfig = layersConfig.filter(l => l.id === dsId)[0];
            if (!layerConfig)
                return;
            if (layerConfig.layerHonorMode === _config__WEBPACK_IMPORTED_MODULE_4__.LayerHonorModeType.Webmap) {
                formTemplate = layer.formTemplate;
            }
            else {
                const hiddenFields = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getEditHiddenFields)(dataSource.getLayerDefinition());
                const fieldElements = (((_a = layer.formTemplate) === null || _a === void 0 ? void 0 : _a.elements) || []).filter(e => e.type === 'field');
                const elements = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.constructFormElements)(layerConfig.groupedFields.asMutable({ deep: true }), hiddenFields, fieldElements);
                const expressionInfos = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.constructExpressionInfos)((_b = layer.formTemplate) === null || _b === void 0 ? void 0 : _b.expressionInfos);
                formTemplate = layer.formTemplate ? layer.formTemplate.clone() : new esri_form_FormTemplate__WEBPACK_IMPORTED_MODULE_3__["default"]();
                formTemplate.elements = elements;
                formTemplate.expressionInfos = expressionInfos;
            }
            // New logic of API: The user with advanced permissions can modify the configuration regardless of the configuration
            const isAdvancedPermission = yield (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getIsAdvancedPermission)(dataSource);
            // full editing privileges
            const fullEditingPrivileges = layer.userHasFullEditingPrivileges;
            const layerEditingEnabled = (_c = layer.editingEnabled) !== null && _c !== void 0 ? _c : true;
            let privilege;
            if (isAdvancedPermission || (fullEditingPrivileges && layerEditingEnabled)) {
                privilege = 'full';
            }
            else if (!layerEditingEnabled) {
                privilege = 'none';
            }
            else {
                privilege = 'normal';
            }
            // fetch to confirm whether it's a public source
            const isPublic = yield (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDsAccessibleInfo)(layer.url);
            const layerInfo = {
                id: layerConfig.id,
                dataSource,
                layer,
                formTemplate,
                isPublic,
                privilege
            };
            return layerInfo;
        }
        catch (err) {
            console.error(err);
        }
    }), [layersConfig]);
    const handleDataSourceCreated = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dsId) => __awaiter(void 0, void 0, void 0, function* () {
        const newLayerInfo = yield getLayerInfo(dsId);
        setLayersInfo(old => {
            const newLayersInfo = {};
            for (const l of layersConfig) {
                if (l.id === dsId) {
                    newLayersInfo[l.id] = newLayerInfo;
                }
                else if (old[l.id]) {
                    newLayersInfo[l.id] = old[l.id];
                }
            }
            return newLayersInfo;
        });
    }), [getLayerInfo, layersConfig]);
    const activeIdRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useLatest(activeId);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        const updateLayersInfo = () => __awaiter(void 0, void 0, void 0, function* () {
            const newLayersInfo = {};
            for (const layerConfig of layersConfig) {
                const dsId = layerConfig.id;
                const ds = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDataSourceById)(dsId);
                if (!ds)
                    continue;
                newLayersInfo[layerConfig.id] = yield getLayerInfo(layerConfig.id);
            }
            setLayersInfo(newLayersInfo);
            if (activeIdRef.current && !newLayersInfo[activeIdRef.current]) {
                setActiveId(null);
                setActiveRecords(null);
            }
        });
        updateLayersInfo();
    }, [layersConfig, getLayerInfo, activeIdRef]);
    const previousBatchEditing = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.usePrevious(batchEditing);
    // Exit batch form when turn off batch editing
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (previousBatchEditing !== batchEditing && !batchEditing && (activeRecords === null || activeRecords === void 0 ? void 0 : activeRecords.length) > 1) {
            setActiveId(null);
            setActiveRecords(null);
        }
    }, [batchEditing, previousBatchEditing, activeRecords]);
    const editFeatureRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useLatest(editFeatures);
    const handleSelectionChange = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dataSourceIds, sourceVersion) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const newEditFeatures = Object.assign({}, editFeatureRef.current);
        for (const dataSourceId of dataSourceIds) {
            const dataSource = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDataSourceById)(dataSourceId);
            if (!dataSource)
                return;
            let editRecords = dataSource.getSelectedRecords();
            const fieldNames = Object.keys(dataSource.getSchema().fields || {});
            const displayField = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDisplayField)(dataSource);
            if (editRecords.length > 0 && editRecords[0].getFieldValue(displayField) === undefined && fieldNames.includes(displayField)) {
                try {
                    const ids = editRecords.map(record => record.getId());
                    const outFields = [displayField];
                    const idField = dataSource.getIdField();
                    if (idField)
                        outFields.push(idField);
                    const uniqueIds = ((_a = dataSource.getUniqueIdFields()) === null || _a === void 0 ? void 0 : _a.asMutable()) || [];
                    if (uniqueIds.length > 0) {
                        outFields.push(...uniqueIds);
                    }
                    const queryResult = yield dataSource.query({ outFields, objectIds: ids });
                    if (queryResult.records) {
                        editRecords = queryResult.records;
                    }
                }
                catch (err) {
                    console.error(err);
                }
            }
            newEditFeatures[dataSourceId] = editRecords;
        }
        setEditFeatures(newEditFeatures);
        const flatEditFeatures = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.flatMapArray)(newEditFeatures);
        if (flatEditFeatures.length === 1) {
            const [dsId, features] = Object.entries(newEditFeatures).find(([dsId, features]) => features.length > 0);
            setActiveId(dsId);
            setSourceVersion(sourceVersion);
            setActiveRecords([features[0]]);
        }
        else {
            setActiveId(null);
            setActiveRecords(null);
        }
    }), [editFeatureRef]);
    const handleSourceVersionChange = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dataSourceId, sourceVersion) => {
        handleSelectionChange([dataSourceId], sourceVersion);
    }, [handleSelectionChange]);
    const layersOrder = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => layersConfig.map(l => l.id).asMutable(), [layersConfig]);
    const flatEditFeatures = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.flatMapArray)(editFeatures);
    const editCount = flatEditFeatures.length;
    const hasValidLayer = layersConfig.length > 0;
    const noLayerTips = translate('initAttEmptyMessage');
    const emptyTips = hasValidLayer ? (noDataMessage || translate('noRecordTips')) : noLayerTips;
    let featureFormStep;
    if (activeId) {
        featureFormStep = activeRecords ? 'form' : 'new';
    }
    else {
        featureFormStep = editCount > 1 ? 'list' : 'empty';
    }
    let reliesOnFormPrivilegesIsFull = false;
    if (featureFormStep === 'form') {
        reliesOnFormPrivilegesIsFull = (!updateRecords || !deleteRecords) && formPrivilegesIsFull;
    }
    else if (featureFormStep === 'new') {
        reliesOnFormPrivilegesIsFull = !addRecords && formPrivilegesIsFull;
    }
    const calciteColorMapping = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.useCalciteColorMapping)();
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Paper, { shape: 'none', className: 'jimu-widget widget-edit esri-widget', css: [widgetStyle, calciteColorMapping], children: [loading && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Loading, { type: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingType.Secondary }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'edit-con surface-1 border-0 h-100', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_feature_form_header__WEBPACK_IMPORTED_MODULE_10__["default"], { widgetLabel: widgetLabel, description: description, hasTableLayerAdd: addLayersConfig.length > 0, featureFormStep: featureFormStep, activeLayerInfo: activeLayerInfo, activeRecords: activeRecords, editCount: editCount, onBack: handleBackConfirm, onNew: handleNew }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)('attr-height', { 'd-none': featureFormStep !== 'form' && featureFormStep !== 'new' }), ref: editContainer, children: [featureFormStep === 'new' &&
                                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_feature_form_select__WEBPACK_IMPORTED_MODULE_13__["default"], { addLayersConfig: addLayersConfig, activeId: activeId, onChange: setActiveId }), reliesOnFormPrivilegesIsFull &&
                                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-notice", { className: 'edit-notice', kind: 'brand', open: true, scale: "s", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { slot: "message", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, { variant: 'label3', children: translate('ownerAdminNotice') }) }) })] }), featureFormStep === 'list' &&
                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_feature_form_list__WEBPACK_IMPORTED_MODULE_12__["default"], { editFeatures: editFeatures, layersInfo: layersInfo, layersOrder: layersOrder, onClickItem: handleClickItem, batchEditing: batchEditing, onBatchEdit: handleBatchEdit }), featureFormStep === 'empty' &&
                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_empty_placeholder__WEBPACK_IMPORTED_MODULE_8__["default"], { emptyTips: emptyTips }), featureFormStep === 'form' && controls.length > 0 && formEditable &&
                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_feature_form_buttons__WEBPACK_IMPORTED_MODULE_11__["default"], { buttons: controls }), featureFormStep === 'new' && addControls.length > 0 &&
                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_feature_form_buttons__WEBPACK_IMPORTED_MODULE_11__["default"], { buttons: addControls })] }), delConfirm && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_feature_form_confirm__WEBPACK_IMPORTED_MODULE_9__["default"], { title: translate('deleteRecord'), message: (activeRecords === null || activeRecords === void 0 ? void 0 : activeRecords.length) > 1 ? translate('deleteRecordsTips') : translate('deleteRecordTips'), confirmText: translate('delete'), cancelText: translate('keepRecord'), onConfirm: handleDelete, onCancel: cancelDelete }), backConfirm && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_feature_form_confirm__WEBPACK_IMPORTED_MODULE_9__["default"], { title: translate('selectionChangeConfirmTitle'), message: translate('selectionChangeConfirmTips'), confirmText: translate('discardConfirm'), cancelText: translate('discardCancel'), onConfirm: handleBack, onCancel: cancelBack }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_edit_list_ds__WEBPACK_IMPORTED_MODULE_14__["default"], { useDataSources: useDataSources, unsavedChange: formChange === FormChangeType.Normal && (activeRecords === null || activeRecords === void 0 ? void 0 : activeRecords.length) > 0, onDataSourceCreated: handleDataSourceCreated, onSelectionChange: handleSelectionChange, onSourceVersionChange: handleSourceVersionChange })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFormComponent);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-confirm.tsx"
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-confirm.tsx ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


const FeatureFormConfirm = (props) => {
    const { title, message, confirmText, cancelText, onConfirm, onCancel } = props;
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-scrim", { "data-testid": 'prompt', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'esri-editor__prompt--danger', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'esri-editor__prompt__header', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-icon", { icon: 'exclamation-mark-triangle' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Typography, { component: 'span', variant: 'title2', className: 'esri-widget__heading esri-editor__prompt__header__heading', children: title })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Typography, { component: 'div', variant: 'label1', className: 'esri-editor__prompt__message', children: message }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'esri-editor__prompt__divider' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'esri-editor__prompt__actions', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-button", { appearance: 'outline', className: 'esri-editor__prompt__half-width-button', "data-testid": 'secondary-prompt-button', kind: 'danger', onClick: onCancel, width: 'full', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: 'label1', children: cancelText }) }, 'prompt-secondary-button'), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-button", { appearance: 'solid', className: 'esri-editor__prompt__half-width-button', "data-testid": 'primary-prompt-button', kind: 'danger', onClick: onConfirm, width: 'full', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: 'label1', children: confirmText }) }, 'prompt-primary-button')] })] }) }, 'prompt');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFormConfirm);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-header.tsx"
/*!********************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-header.tsx ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/editor/plus */ "./jimu-icons/outlined/editor/plus.tsx");






const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  border-bottom: 1px solid var(--sys-color-divider-secondary);
  border-top-left-radius: var(--sys-shape-2);
  border-top-right-radius: var(--sys-shape-2);
  .list-empty {
    padding: 12px 15px;
    .list-empty-header {
      margin: 0;
      .list-empty-header-title {
        line-height: 1.2;
        margin-bottom: 8px;
      }
      .list-empty-description-text {
        margin: 0;
        line-height: 1.4;
      }
    }
  }
  .form-header {
    min-height: 56px;
    overflow: hidden;
    .form-heading{
      margin: 0 8px;
      padding: 1px 0;
      height: 56px;
      line-height: 54px;
    }
  }
  .back-button{
    width: 32px;
    padding-inline: 8px;
    padding-block: 4px;
    line-height: 16px;
    color: var(--sys-color-surface-surface-text);
    background-color: transparent;
    border-top: 0px !important;
    border-left: 0px !important;
    border-bottom: 0px !important;
    border-style: solid;
    border-color: var(--sys-color-divider-secondary);
    border-inline-end-width: 1px;
  }
  .add-feature-btn {
    position: absolute;
    right: 15px;
    top: 12px;
    button{
      width: 32px;
      height: 32px;
    }
  }
`;
const FeatureFormHeader = (props) => {
    const { activeLayerInfo, widgetLabel, description, activeRecords, editCount, hasTableLayerAdd, featureFormStep, onBack, onNew } = props;
    const isListOrEmpty = featureFormStep === 'list' || featureFormStep === 'empty';
    const isFormOrNew = featureFormStep === 'form' || featureFormStep === 'new';
    let addEditLabel = '';
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const featureTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useFeatureTitle)(activeRecords === null || activeRecords === void 0 ? void 0 : activeRecords[0], activeLayerInfo === null || activeLayerInfo === void 0 ? void 0 : activeLayerInfo.dataSource);
    if (featureFormStep === 'new') {
        addEditLabel = translate('addFeature');
    }
    else if (featureFormStep === 'form' && activeLayerInfo && activeRecords) {
        if (activeRecords.length > 1) {
            addEditLabel = activeLayerInfo.dataSource.getLabel();
        }
        else if (activeRecords.length === 1) {
            addEditLabel = featureTitle;
        }
    }
    const intl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
    const countLabel = editCount > 1 ? ` (${intl.formatNumber(editCount)})` : '';
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.classNames)({ 'd-flex': isFormOrNew }), css: style, children: [isFormOrNew &&
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: 'back-button', title: translate('back'), onClick: onBack, children: "<" }), isListOrEmpty && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-empty', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'list-empty-header', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, { variant: 'title1', className: 'list-empty-header-title', children: widgetLabel + countLabel }), description && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, { variant: 'title3', color: 'var(--sys-color-surface-paper-hint)', noWrap: true, title: description, className: 'list-empty-description-text', children: description })] }) }), isFormOrNew &&
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", { className: 'form-header', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, { variant: 'title1', noWrap: true, title: addEditLabel, className: 'form-heading', children: addEditLabel }) }), hasTableLayerAdd && isListOrEmpty &&
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: 'sm', icon: true, type: 'tertiary', color: 'inherit', className: 'add-feature-btn', onClick: onNew, title: translate('addFeature'), "aria-label": translate('addFeature'), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_5__.PlusOutlined, { className: 'mr-1' }), translate('add')] })] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFormHeader);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-list-items.tsx"
/*!************************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-list-items.tsx ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/custom_edit/src/utils/index.ts");





const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  &.feature-list-items {
    list-style: none;
    margin: 0;
    padding: 0;
    .feature-list-item {
      background-color: var(--sys-color-action);
      color: var(--sys-color-action-text);
      cursor: pointer;
      margin-bottom: 6px;
      min-height: 48px;
      transition: border 250ms ease-in-out;
      display: flex;
      justify-content: space-between;
      .feature-list-item-container {
        display: flex;
        margin: 9px 2px;
        width: 100%;
        .feature-list-item-label{
          flex: 1;
          margin: 0;
          display: flex;
          align-items: center;
          word-break: break-word;
          text-align: left;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      :hover {
        cursor: pointer;
        background-color: var(--sys-color-action-hover);
      }
      :focus,
      :focus-visible {
        outline-offset: -2px !important;
      }
    }
  }
`;
const FeatureFormListItems = (props) => {
    const { group, filterText, onClickItem } = props;
    const dataSource = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getEditDataSource)((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDataSourceById)(group.dsId));
    const featureTitleMap = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useFeatureTitleMap)(group.items, dataSource);
    const lowerCasedFilter = filterText.toLowerCase();
    const isMatch = (title) => { var _a; return !lowerCasedFilter || ((_a = title === null || title === void 0 ? void 0 : title.toString()) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(lowerCasedFilter)); };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'feature-list-items', role: 'listbox', css: style, children: group.items.map((item, index) => {
            const id = item.getId();
            const title = featureTitleMap.get(id) || '';
            if (!isMatch(title)) {
                return null;
            }
            else {
                return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { role: 'option', className: 'w-100 border-0 feature-list-item', onClick: () => { onClickItem(group.dsId, item); }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'feature-list-item-container', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'feature-list-item-label', children: title }) }) }, `${group.dsId}__${id}_${index}`));
            }
        }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFormListItems);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-list.tsx"
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-list.tsx ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/search */ "./jimu-icons/outlined/editor/search.tsx");
/* harmony import */ var jimu_icons_outlined_editor_batch_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/editor/batch-edit */ "./jimu-icons/outlined/editor/batch-edit.tsx");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts");
/* harmony import */ var _feature_form_list_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature-form-list-items */ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-list-items.tsx");







const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  &.feature-list {
    padding: 8px 16px;
    max-height: unset;
    background-color: var(--calcite-color-background);
    .feature-list-no-match {
      justify-content: center;
      align-items: center;
      height: 96px;
      display: flex;
    }
    .feature-list-group {
      padding: 12px 12px 0;
      .feature-list-group-header {
        margin-bottom: 8px;
      }
      .feature-list-group-label {
        line-height: 1.286;
      }
    }
  }
`;
const FeatureFormList = (props) => {
    const { editFeatures, layersOrder, layersInfo, batchEditing, onBatchEdit, onClickItem } = props;
    const [filterText, setFilterText] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('');
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(jimu_core__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"]);
    const { count, groupedSelectedFeatures } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        var _a;
        let count = 0;
        const groupedSelectedFeatures = [];
        for (const dsId in editFeatures) {
            const featuresArray = editFeatures[dsId];
            if (featuresArray.length === 0 || !layersInfo[dsId])
                continue;
            const dataSource = (_a = layersInfo[dsId]) === null || _a === void 0 ? void 0 : _a.dataSource;
            const dsLabel = dataSource.getLabel();
            const group = {
                id: dsId,
                dsId,
                label: dsLabel,
                items: featuresArray
            };
            count += group.items.length;
            groupedSelectedFeatures.push(group);
        }
        // Sort the FeatureForm selection list
        groupedSelectedFeatures.sort((a, b) => {
            const aIndex = layersOrder.findIndex(dsId => dsId === a.id);
            const bIndex = layersOrder.findIndex(dsId => dsId === b.id);
            return aIndex - bIndex;
        });
        return { count, groupedSelectedFeatures };
    }, [editFeatures, layersInfo, layersOrder]);
    const onFilterChange = (evt) => {
        setFilterText(evt.target.value);
    };
    const handleBatchEdit = (group) => {
        onBatchEdit === null || onBatchEdit === void 0 ? void 0 : onBatchEdit(group.dsId, group.items);
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'feature-list h-100 overflow-auto', css: style, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'feature-list-search d-flex align-items-center m-2', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: 'w-100', placeholder: translate('search'), onChange: onFilterChange, value: filterText, prefix: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_3__.SearchOutlined, { color: 'var(--sys-color-action-input-field-placeholder)' }), allowClear: true, title: filterText }) }), count === 0 &&
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'feature-list-no-match', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, { variant: 'title1', children: translate('noItemsFound') }) }), count > 0 && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'feature-list-groups', children: groupedSelectedFeatures.map(group => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { role: 'group', "aria-label": group.label, className: 'feature-list-group', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", { className: 'feature-list-group-header d-flex align-items-center justify-content-between', title: group.label, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, { component: 'span', variant: 'title2', className: 'feature-list-group-label', children: group.label }), batchEditing &&
                                    (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', variant: 'text', icon: true, disabled: group.items.length === 0, title: translate('editTheseRecords'), onClick: () => { handleBatchEdit(group); }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_batch_edit__WEBPACK_IMPORTED_MODULE_4__.BatchEditOutlined, {}) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_feature_form_list_items__WEBPACK_IMPORTED_MODULE_6__["default"], { group: group, filterText: filterText, onClickItem: onClickItem })] }, group.id)) })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFormList);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-select.tsx"
/*!********************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-select.tsx ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  &.layer-selector{
    padding: 12px 15px;
    label {
      margin-bottom: 12px;
    }
  }
`;
const FeatureFormSelect = (props) => {
    const { activeId, addLayersConfig, onChange } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
    const isSingle = addLayersConfig.length === 1;
    const label = isSingle ? addLayersConfig[0].name : translate('selectLayer');
    const handleChange = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((evt) => {
        var _a;
        const selectedLayerId = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value;
        onChange(selectedLayerId);
    }, [onChange]);
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'layer-selector', css: style, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, { variant: 'label1', children: label }) }), !isSingle && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: activeId, onChange: handleChange, children: addLayersConfig.map(config => {
                    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: config.id, children: config.name }, config.id));
                }) })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFormSelect);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/use-editor.ts"
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/use-editor.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_widgets_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/widgets/Editor */ "esri/widgets/Editor");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/custom_edit/src/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/custom_edit/src/utils/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const useEditor = (options) => {
    const { config, jimuMapView, editContainer, canEditFeature } = options;
    const { mapViewsConfig, relatedRecords, liveDataEditing } = config;
    const editorRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const [editor, setEditor] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const destroyEditor = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        if (editorRef.current && !editorRef.current.destroyed) {
            editorRef.current.destroy();
        }
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        return () => {
            destroyEditor();
        };
    }, [destroyEditor]);
    const [editorLayerInfos, setEditorLayerInfos] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [showUpdateBtn, setShowUpdateBtn] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const updateEditorLayerInfos = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        var _a, _b, _c, _d;
        if (!jimuMapView || typeof canEditFeature !== 'boolean')
            return;
        let allLayerViews = jimuMapView.getAllJimuLayerViews();
        const mapViewConfig = mapViewsConfig === null || mapViewsConfig === void 0 ? void 0 : mapViewsConfig[jimuMapView.id];
        const customizeLayers = mapViewConfig === null || mapViewConfig === void 0 ? void 0 : mapViewConfig.customizeLayers;
        const customJimuLayerViewIds = mapViewConfig === null || mapViewConfig === void 0 ? void 0 : mapViewConfig.customJimuLayerViewIds;
        const layersConfig = (mapViewConfig === null || mapViewConfig === void 0 ? void 0 : mapViewConfig.layersConfig) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
        if (customizeLayers) {
            allLayerViews = allLayerViews.sort((a, b) => {
                const aIndex = layersConfig.findIndex(layerConfig => layerConfig.id === a.layerDataSourceId);
                const bIndex = layersConfig.findIndex(layerConfig => layerConfig.id === b.layerDataSourceId);
                return aIndex - bIndex;
            });
        }
        const allLayers = ((_d = (_c = (_b = (_a = jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.allLayers) === null || _c === void 0 ? void 0 : _c.toArray) === null || _d === void 0 ? void 0 : _d.call(_c)) || [];
        const uneditableLayers = allLayers.filter(layer => {
            const isSupported = _utils__WEBPACK_IMPORTED_MODULE_4__.SUPPORTED_JIMU_LAYER_TYPES.includes(layer.type);
            const notInJimuLayerView = !allLayerViews.find(layerView => layerView.layer === layer);
            return isSupported && notInJimuLayerView;
        });
        const supportedLayerViews = allLayerViews.filter(layerView => {
            const layer = layerView.layer;
            const isSupported = _utils__WEBPACK_IMPORTED_MODULE_4__.SUPPORTED_JIMU_LAYER_TYPES.includes(layer.type);
            return isSupported;
        });
        const editableLayerViews = [];
        supportedLayerViews.forEach(layerView => {
            const isEditable = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isEditableLayerView)(layerView, customizeLayers, customJimuLayerViewIds, liveDataEditing);
            if (isEditable) {
                editableLayerViews.push(layerView);
            }
            else {
                uneditableLayers.push(layerView.layer);
            }
        });
        const uneditableLayerInfos = uneditableLayers.map(layer => (0,_utils__WEBPACK_IMPORTED_MODULE_5__.constructUneditableInfo)(layer));
        const editablePromise = editableLayerViews.map((layerView) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c;
            const ds = yield layerView.getOrCreateLayerDataSource();
            if (!ds)
                return null;
            const layerConfig = (_c = (_b = (_a = layersConfig.filter(l => l.id === (ds === null || ds === void 0 ? void 0 : ds.id))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.asMutable) === null || _c === void 0 ? void 0 : _c.call(_b, { deep: true });
            const dataSource = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getEditDataSource)(ds);
            return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getEditorLayerInfo)(dataSource, layerConfig, layerView, relatedRecords, canEditFeature);
        }));
        Promise.all(editablePromise).then((results) => {
            var _a;
            const validResults = results.filter(v => !!v);
            setShowUpdateBtn(validResults.some(r => r.showUpdateBtn));
            const layerInfos = validResults.map(r => r.editorLayerInfo).concat(uneditableLayerInfos);
            const relatedTableInfos = [];
            const allTables = (jimuMapView.view.map.allTables.toArray() || []);
            for (const layerInfo of layerInfos) {
                const elements = ((_a = layerInfo.formTemplate) === null || _a === void 0 ? void 0 : _a.elements) || [];
                const hasRelationships = elements.some(e => e.type === 'relationship');
                if (!hasRelationships)
                    continue;
                const relationships = layerInfo.layer.relationships;
                for (const relationship of relationships) {
                    const relatedTableId = relationship.relatedTableId;
                    const relatedTable = allTables.find(t => t.layerId === relatedTableId);
                    if (!relatedTable)
                        continue;
                    const relatedTableInfo = relatedTableInfos.find(tableInfo => tableInfo.layer === relatedTable);
                    if (relatedTableInfo)
                        continue;
                    relatedTableInfos.push({
                        layer: relatedTable,
                        enabled: true,
                        addEnabled: layerInfo.addEnabled,
                        updateEnabled: layerInfo.updateEnabled,
                        deleteEnabled: layerInfo.deleteEnabled,
                    });
                }
            }
            setEditorLayerInfos(layerInfos.concat(relatedTableInfos));
        });
    }, [canEditFeature, jimuMapView, liveDataEditing, mapViewsConfig, relatedRecords]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        updateEditorLayerInfos();
    }, [updateEditorLayerInfos]);
    const updateEditorLayerInfosRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useLatest(updateEditorLayerInfos);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        var _a, _b, _c, _d, _e;
        if (!((_b = (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.layers))
            return;
        const visibleChangedListener = () => {
            updateEditorLayerInfosRef.current();
        };
        let timer = null;
        let lastLayerCount = jimuMapView.getAllJimuLayerViews().length;
        const layersChangedListener = (jimuLayerView) => {
            // if the layer is from runtime, update layerInfos immediately
            if (jimuLayerView.fromRuntime) {
                updateEditorLayerInfosRef.current();
                return;
            }
            // if the layer is created while map loading, debounce the update for 5 seconds
            // to avoid too many updates
            if (timer) {
                window.clearTimeout(timer);
            }
            timer = window.setTimeout(() => {
                const currentLayerCount = jimuMapView.getAllJimuLayerViews().length;
                if (currentLayerCount === lastLayerCount)
                    return;
                updateEditorLayerInfosRef.current();
                lastLayerCount = currentLayerCount;
            }, 5000);
        };
        const nonEditLayerAddListener = (event) => {
            var _a, _b;
            if (((_a = event === null || event === void 0 ? void 0 : event.item) === null || _a === void 0 ? void 0 : _a.declaredClass) === 'esri.layers.GraphicsLayer' || ((_b = event === null || event === void 0 ? void 0 : event.item) === null || _b === void 0 ? void 0 : _b.listMode) === 'hide') {
                updateEditorLayerInfosRef.current();
            }
        };
        jimuMapView.addJimuLayerViewsVisibleChangeListener(visibleChangedListener);
        jimuMapView.addJimuLayerViewCreatedListener(layersChangedListener);
        const afterAddListener = (_e = (_d = (_c = jimuMapView.view) === null || _c === void 0 ? void 0 : _c.map) === null || _d === void 0 ? void 0 : _d.allLayers) === null || _e === void 0 ? void 0 : _e.on('after-add', nonEditLayerAddListener);
        jimuMapView.addJimuLayerViewRemovedListener(layersChangedListener);
        return () => {
            var _a, _b, _c, _d;
            (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.removeJimuLayerViewsVisibleChangeListener) === null || _a === void 0 ? void 0 : _a.call(jimuMapView, visibleChangedListener);
            (_b = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.removeJimuLayerViewCreatedListener) === null || _b === void 0 ? void 0 : _b.call(jimuMapView, layersChangedListener);
            (_c = afterAddListener === null || afterAddListener === void 0 ? void 0 : afterAddListener.remove) === null || _c === void 0 ? void 0 : _c.call(afterAddListener);
            (_d = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.removeJimuLayerViewRemovedListener) === null || _d === void 0 ? void 0 : _d.call(jimuMapView, layersChangedListener);
        };
    }, [jimuMapView, updateEditorLayerInfosRef]);
    const updateEditorByConfig = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const editorWidget = editorRef.current;
        const { selfSnapping, featureSnapping, gridSnapping = false, defaultSelfEnabled, defaultFeatureEnabled, defaultGridEnabled = false, snapSettingMode, defaultSnapLayers, tooltip, defaultTooltipEnabled = false, segmentLabel = true, defaultSegmentLabelEnabled = false, templateFilter, initialReshapeMode, batchEditing = false, advancedEditingTools = true, splitButton = true, mergeButton = true } = config;
        editorWidget.tooltipOptions.enabled = defaultTooltipEnabled;
        editorWidget.labelOptions.enabled = defaultSegmentLabelEnabled;
        editorWidget.snappingOptions.enabled = defaultSelfEnabled || defaultFeatureEnabled || defaultGridEnabled;
        editorWidget.snappingOptions.selfEnabled = defaultSelfEnabled;
        editorWidget.snappingOptions.featureEnabled = defaultFeatureEnabled;
        editorWidget.snappingOptions.gridEnabled = defaultGridEnabled && gridSnapping;
        editorWidget.snappingOptions.featureSources = yield jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.SnappingUtils.getSnappingFeatureSourcesCollection(jimuMapView, defaultSnapLayers);
        const flexibleMode = snapSettingMode === _config__WEBPACK_IMPORTED_MODULE_3__.SnapSettingMode.Flexible;
        const snapOn = selfSnapping || featureSnapping || gridSnapping;
        const snappingControlsOpen = flexibleMode && snapOn;
        editorWidget.visibleElements.selectionToolbar = batchEditing;
        editorWidget.visibleElements.snappingControls = snappingControlsOpen;
        editorWidget.visibleElements.snappingControlsElements = {
            enabledToggle: selfSnapping || featureSnapping || gridSnapping,
            selfEnabledToggle: selfSnapping,
            featureEnabledToggle: featureSnapping,
            layerList: featureSnapping,
            layerListToggleLayersButton: featureSnapping,
            gridEnabledToggle: gridSnapping,
            gridControls: gridSnapping
        };
        editorWidget.visibleElements.tooltipsToggle = tooltip;
        editorWidget.visibleElements.labelsToggle = segmentLabel;
        const settingsOpen = snappingControlsOpen || tooltip || (segmentLabel && ((_a = jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) === '3d');
        editorWidget.visibleElements.settingsMenu = settingsOpen;
        editorWidget.visibleElements.splitButton = advancedEditingTools && splitButton;
        editorWidget.visibleElements.mergeButton = advancedEditingTools && batchEditing && mergeButton;
        editorWidget.supportingWidgetDefaults = {
            featureTemplates: {
                visibleElements: {
                    filter: templateFilter
                }
            },
            sketch: {
                defaultUpdateOptions: {
                    tool: initialReshapeMode ? 'reshape' : 'transform'
                }
            }
        };
    }), [config, jimuMapView]);
    const previousJimuMapView = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.usePrevious(jimuMapView);
    const previousConfig = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.usePrevious(config);
    const updateDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((layer, event) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Only update data source when editing or adding
        if (!((_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.viewModel.syncing))
            return;
        const dsId = jimuMapView.getDataSourceIdByAPILayer(layer);
        const ds = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDataSourceById)(dsId);
        if (!ds)
            return;
        const addIds = event.addedFeatures.map(f => f.objectId);
        let addFeatures = [];
        if (addIds.length > 0) {
            const addFeatureSet = yield layer.queryFeatures({
                objectIds: addIds,
                outFields: ['*'],
                returnGeometry: false
            });
            addFeatures = (addFeatureSet === null || addFeatureSet === void 0 ? void 0 : addFeatureSet.features) || [];
        }
        const updateIds = event.updatedFeatures.map(f => f.objectId);
        let updateFeatures = [];
        if (updateIds.length > 0) {
            const updateFeatureSet = yield layer.queryFeatures({
                objectIds: updateIds,
                outFields: ['*'],
                returnGeometry: false
            });
            updateFeatures = (updateFeatureSet === null || updateFeatureSet === void 0 ? void 0 : updateFeatureSet.features) || [];
        }
        const deleteFeatures = event.deletedFeatures.map(f => ({ objectId: f.objectId }));
        (0,_utils__WEBPACK_IMPORTED_MODULE_5__.updateDataSourceAfterEdit)(ds, { addFeatures, updateFeatures, deleteFeatures });
    }), [jimuMapView]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!jimuMapView || !editContainer.current)
            return;
        if (!editorRef.current || jimuMapView !== previousJimuMapView) {
            destroyEditor();
            const container = document.createElement('div');
            container.className = 'h-100';
            editContainer.current.appendChild(container);
            editorRef.current = new esri_widgets_Editor__WEBPACK_IMPORTED_MODULE_2__["default"]({
                container,
                view: jimuMapView.view
            });
            setEditor(editorRef.current);
            updateEditorByConfig();
        }
        else if (config !== previousConfig) {
            updateEditorByConfig();
        }
    }, [config, destroyEditor, editContainer, jimuMapView, previousConfig, previousJimuMapView, updateEditorByConfig]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const editorWidget = editorRef.current;
        if (!editorWidget)
            return;
        const handles = [];
        for (const layerInfo of editorLayerInfos) {
            if (!layerInfo.enabled)
                continue;
            const editorLayer = layerInfo.layer;
            if (editorLayer.type === 'subtype-sublayer') {
                const subtypeGrouplayer = editorLayer.parent;
                const handle = subtypeGrouplayer === null || subtypeGrouplayer === void 0 ? void 0 : subtypeGrouplayer.on('edits', (event) => {
                    updateDataSource(subtypeGrouplayer, event);
                });
                handles.push(handle);
            }
            else {
                const featureLayer = editorLayer;
                const handle = featureLayer.on('edits', (event) => {
                    updateDataSource(featureLayer, event);
                });
                handles.push(handle);
            }
        }
        editorWidget.layerInfos = editorLayerInfos;
        editorWidget.visibleElements.editFeaturesSection = showUpdateBtn;
        return () => {
            for (const handle of handles) {
                handle.remove();
            }
        };
    }, [editorLayerInfos, showUpdateBtn, updateDataSource]);
    return editor;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditor);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/use-feature-form.ts"
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/use-feature-form.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var esri_widgets_FeatureForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri/widgets/FeatureForm */ "esri/widgets/FeatureForm");
/* harmony import */ var esri_widgets_BatchAttributeForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/widgets/BatchAttributeForm */ "esri/widgets/BatchAttributeForm");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_core_Collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/core/Collection */ "esri/core/Collection");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/custom_edit/src/utils/index.ts");
/* harmony import */ var _feature_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feature-form-component */ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-component.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const useFeatureForm = (options) => {
    const { activeLayerInfo, activeRecords, sourceVersion, editContainer } = options;
    const activeId = activeLayerInfo === null || activeLayerInfo === void 0 ? void 0 : activeLayerInfo.id;
    const activeLayer = activeLayerInfo === null || activeLayerInfo === void 0 ? void 0 : activeLayerInfo.layer;
    const formTemplate = activeLayerInfo === null || activeLayerInfo === void 0 ? void 0 : activeLayerInfo.formTemplate;
    const [formChange, setFormChange] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [formSubmittable, setFormSubmittable] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [loading, setLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const editForm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    // Sequence guard to prevent race conditions between concurrent render calls
    const renderSeq = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(0);
    const destroyEditForm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        var _a, _b;
        if (((_a = editForm.current) === null || _a === void 0 ? void 0 : _a.destroy) && !((_b = editForm.current) === null || _b === void 0 ? void 0 : _b.destroyed)) {
            editForm.current.destroy();
            setFormChange(null);
        }
    }, []);
    const renderEditForm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Increment sequence
            const seq = ++renderSeq.current;
            destroyEditForm();
            const ds = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDataSourceById)(activeId);
            const dataSource = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getEditDataSource)(ds);
            let features;
            if (!activeRecords || activeRecords.length === 0) {
                features = [new esri_Graphic__WEBPACK_IMPORTED_MODULE_3__["default"]({ layer: activeLayer })];
            }
            else {
                const ids = activeRecords.map((f) => f.getId());
                const result = yield dataSource.query({
                    objectIds: ids,
                    returnGeometry: true,
                    notAddFieldsToClient: true,
                    outFields: ['*']
                });
                const fullRecords = ((result === null || result === void 0 ? void 0 : result.records) || []);
                features = yield Promise.all(fullRecords.map((fullRecord) => __awaiter(void 0, void 0, void 0, function* () { return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeToJSAPIGraphic(fullRecord.feature); })));
            }
            const originFields = activeLayer.fields;
            if (!originFields || activeLayer.loadStatus !== 'loaded') {
                // For arcade data source, the layer's fields may be filtered by the arcade script.
                // If the layer is not loaded, the FeatureForm will load the layer and the fields will be all fields.
                // So we need to load the layer first and then set the original fields back to the layer.
                yield activeLayer.load();
                if (originFields && originFields.length > 0) {
                    activeLayer.set({ 'fields': originFields });
                }
            }
            // Squence guard before creating the form
            if (seq !== renderSeq.current)
                return;
            const container = document && document.createElement('div');
            editContainer.current.appendChild(container);
            if (features.length > 1) {
                const featureCollection = new esri_core_Collection__WEBPACK_IMPORTED_MODULE_4__["default"](features);
                const layer = features[0].layer;
                const batchForm = new esri_widgets_BatchAttributeForm__WEBPACK_IMPORTED_MODULE_2__["default"]({
                    container: container,
                    features: featureCollection,
                    layerInfos: [{
                            layer,
                            formTemplate
                        }],
                    timeZone: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getTimezone)(dataSource)
                });
                editForm.current = batchForm;
                batchForm.on('value-change', (changedValue) => {
                    const submittable = batchForm.viewModel.valid;
                    const change = batchForm.viewModel.userHasChangedValues ? _feature_form_component__WEBPACK_IMPORTED_MODULE_7__.FormChangeType.Normal : _feature_form_component__WEBPACK_IMPORTED_MODULE_7__.FormChangeType.Arcade;
                    setFormChange(change);
                    setFormSubmittable(submittable);
                });
            }
            else if (features.length === 1) {
                const feature = features[0];
                const featureForm = new esri_widgets_FeatureForm__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    container: container,
                    feature: features[0],
                    layer: activeLayer,
                    formTemplate,
                    timeZone: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getTimezone)(dataSource)
                });
                editForm.current = featureForm;
                featureForm.on('value-change', (changedValue) => {
                    var _a;
                    const uniqueIdFields = dataSource.getUniqueIdFields() || [];
                    const idField = dataSource.getIdField();
                    const { fieldName } = changedValue;
                    // Exclude cases where the 'value-change' is caused by dataSource select.
                    // If the changed field has an idField, the change is caused by dataSource select change.
                    if (uniqueIdFields.includes(fieldName) || fieldName === idField)
                        return;
                    const submittable = featureForm.viewModel.submittable;
                    const originalFormValues = feature.attributes;
                    const newFormValues = featureForm.viewModel.getValues();
                    let change = null;
                    if (newFormValues) {
                        const arcadeFields = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getFlatFormElements)(((_a = featureForm.viewModel.formTemplate) === null || _a === void 0 ? void 0 : _a.elements) || [])
                            .map(e => e.type === 'field' && e.valueExpression && e.fieldName).filter(v => !!v) || [];
                        for (const key in newFormValues) {
                            if ((originalFormValues === null || originalFormValues === void 0 ? void 0 : originalFormValues[key]) !== newFormValues[key]) {
                                const isArcade = arcadeFields.includes(key);
                                if (isArcade && !change) {
                                    change = _feature_form_component__WEBPACK_IMPORTED_MODULE_7__.FormChangeType.Arcade;
                                }
                                if (!isArcade) {
                                    change = _feature_form_component__WEBPACK_IMPORTED_MODULE_7__.FormChangeType.Normal;
                                    break;
                                }
                            }
                        }
                    }
                    setFormChange(change);
                    setFormSubmittable(submittable);
                });
            }
        }
        catch (err) {
            console.error(err);
        }
    }), [activeRecords, activeId, activeLayer, destroyEditForm, editContainer, formTemplate]);
    const saveForm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const form = editForm.current;
        if (!form)
            return;
        let edits = {};
        if (form instanceof esri_widgets_BatchAttributeForm__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            if (!form.viewModel.valid)
                return;
            const allFieldInputs = form.viewModel.activeForm.allFieldInputs;
            const updatedAttributes = {};
            allFieldInputs.forEach((fieldInput) => {
                if (fieldInput.distinctValues.length !== 1)
                    return;
                const fieldValue = fieldInput.distinctValues[0];
                if (fieldInput.userHasChangedValue || fieldInput.template.hasValueCalculations) {
                    updatedAttributes[fieldInput.fieldName] = fieldValue;
                }
            });
            const updateFeatures = form.features;
            updateFeatures.forEach((f) => {
                if (f === null || f === void 0 ? void 0 : f.geometry) {
                    f.geometry = null;
                }
                Object.keys(updatedAttributes).forEach((fieldName) => {
                    f.attributes[fieldName] = updatedAttributes[fieldName];
                });
            });
            edits = {
                updateFeatures
            };
        }
        else if (form instanceof esri_widgets_FeatureForm__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            if (!form.viewModel.submittable)
                return;
            const newFeature = form.feature;
            if (!newFeature)
                return;
            if (newFeature === null || newFeature === void 0 ? void 0 : newFeature.geometry) {
                newFeature.geometry = null;
            }
            const updated = form.getValues();
            Object.keys(updated).forEach((name) => {
                newFeature.attributes[name] = updated[name];
            });
            edits = {
                updateFeatures: [newFeature]
            };
        }
        setLoading(true);
        setFormChange(null);
        try {
            yield (0,_utils__WEBPACK_IMPORTED_MODULE_5__.applyAttributeUpdates)(activeLayerInfo, edits);
            let updateEdits = edits;
            if (edits.updateFeatures.length > 1) {
                try {
                    const ds = activeLayerInfo.dataSource;
                    const features = Array.isArray(edits.updateFeatures) ? edits.updateFeatures : edits.updateFeatures.toArray();
                    const updateIds = features.map((f) => f.getObjectId());
                    const result = yield ds.query({
                        objectIds: updateIds,
                        outFields: ['*'],
                        returnGeometry: false
                    });
                    const updateFeatures = ((result === null || result === void 0 ? void 0 : result.records) || []).map((r) => r.feature);
                    updateEdits = { updateFeatures };
                }
                catch (e) {
                    console.error(e);
                }
            }
            (0,_utils__WEBPACK_IMPORTED_MODULE_5__.updateDataSourceAfterEdit)(activeLayerInfo.dataSource, updateEdits);
        }
        catch (e) {
            console.error(e);
        }
        setLoading(false);
        return true;
    }), [activeLayerInfo]);
    const addForm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const featureForm = editForm.current;
        const formViewModel = featureForm === null || featureForm === void 0 ? void 0 : featureForm.viewModel;
        const submittable = formViewModel === null || formViewModel === void 0 ? void 0 : formViewModel.submittable;
        const addFeature = formViewModel === null || formViewModel === void 0 ? void 0 : formViewModel.feature;
        if (submittable && addFeature) {
            const updated = featureForm.getValues();
            addFeature.attributes = updated;
            const edits = {
                addFeatures: [addFeature]
            };
            setLoading(true);
            setFormChange(null);
            try {
                yield (0,_utils__WEBPACK_IMPORTED_MODULE_5__.applyAttributeUpdates)(activeLayerInfo, edits);
                (0,_utils__WEBPACK_IMPORTED_MODULE_5__.updateDataSourceAfterEdit)(activeLayerInfo.dataSource, edits);
            }
            catch (e) {
                console.error(e);
            }
            setLoading(false);
            return true;
        }
    }), [activeLayerInfo]);
    const deleteForm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const form = editForm.current;
        if (!form)
            return;
        let edits = {};
        if (form instanceof esri_widgets_FeatureForm__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            const objectId = form.feature.getObjectId();
            edits = {
                deleteFeatures: [{
                        objectId: typeof objectId === 'number' ? objectId : parseInt(objectId),
                    }]
            };
        }
        else if (form instanceof esri_widgets_BatchAttributeForm__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            const objectIds = form.features.map(f => f.getObjectId()).toArray();
            edits = {
                deleteFeatures: objectIds.map(objectId => ({ objectId: typeof objectId === 'number' ? objectId : parseInt(objectId) }))
            };
        }
        setLoading(true);
        setFormChange(null);
        try {
            yield (0,_utils__WEBPACK_IMPORTED_MODULE_5__.applyAttributeUpdates)(activeLayerInfo, edits);
            (0,_utils__WEBPACK_IMPORTED_MODULE_5__.updateDataSourceAfterEdit)(activeLayerInfo.dataSource, edits);
        }
        catch (e) {
            console.error(e);
        }
        setLoading(false);
        return true;
    }), [activeLayerInfo]);
    const timer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => {
            if (activeId && activeLayer && editContainer.current) {
                renderEditForm();
            }
            else {
                destroyEditForm();
            }
        }, 500);
    }, [activeId, activeLayer, sourceVersion, editContainer, destroyEditForm, renderEditForm, activeRecords === null || activeRecords === void 0 ? void 0 : activeRecords.length]);
    // JSAPI bug: FeatureForm's value-change not work for the first time due to deps loading.
    // Below code load the deps in advance to avoid the bug.
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const featureForm = new esri_widgets_FeatureForm__WEBPACK_IMPORTED_MODULE_1__["default"]();
        featureForm.destroy();
    }, []);
    return { loading, formChange, formSubmittable, saveForm, addForm, deleteForm };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFeatureForm);


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts"
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyAttributeUpdates: () => (/* binding */ applyAttributeUpdates),
/* harmony export */   constructExpressionInfos: () => (/* binding */ constructExpressionInfos),
/* harmony export */   constructFormElements: () => (/* binding */ constructFormElements),
/* harmony export */   constructUneditableInfo: () => (/* binding */ constructUneditableInfo),
/* harmony export */   featureFormStyle: () => (/* binding */ featureFormStyle),
/* harmony export */   flatMapArray: () => (/* binding */ flatMapArray),
/* harmony export */   flatMapArrayWithView: () => (/* binding */ flatMapArrayWithView),
/* harmony export */   getDisplayField: () => (/* binding */ getDisplayField),
/* harmony export */   getDsAccessibleInfo: () => (/* binding */ getDsAccessibleInfo),
/* harmony export */   getEditorLayerInfo: () => (/* binding */ getEditorLayerInfo),
/* harmony export */   getIsAdvancedPermission: () => (/* binding */ getIsAdvancedPermission),
/* harmony export */   getPrivilege: () => (/* binding */ getPrivilege),
/* harmony export */   getTimezone: () => (/* binding */ getTimezone),
/* harmony export */   idsArrayEquals: () => (/* binding */ idsArrayEquals),
/* harmony export */   isEditableLayerView: () => (/* binding */ isEditableLayerView),
/* harmony export */   queryFullFeatures: () => (/* binding */ queryFullFeatures),
/* harmony export */   updateDataSourceAfterEdit: () => (/* binding */ updateDataSourceAfterEdit),
/* harmony export */   useCalciteColorMapping: () => (/* binding */ useCalciteColorMapping),
/* harmony export */   useFeatureTitle: () => (/* binding */ useFeatureTitle),
/* harmony export */   useFeatureTitleMap: () => (/* binding */ useFeatureTitleMap)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/rest/support/Query */ "esri/rest/support/Query");
/* harmony import */ var esri_form_elements_FieldElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/form/elements/FieldElement */ "esri/form/elements/FieldElement");
/* harmony import */ var esri_form_elements_GroupElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/form/elements/GroupElement */ "esri/form/elements/GroupElement");
/* harmony import */ var esri_form_FormTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/form/FormTemplate */ "esri/form/FormTemplate");
/* harmony import */ var esri_form_ExpressionInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/form/ExpressionInfo */ "esri/form/ExpressionInfo");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/custom_edit/src/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./your-extensions/widgets/custom_edit/src/utils/index.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const flatMapArray = (editFeatures) => {
    // flat editFeatures
    const flatEditFeatures = [];
    for (const dsId in editFeatures) {
        if (editFeatures === null || editFeatures === void 0 ? void 0 : editFeatures[dsId]) {
            flatEditFeatures.push(...editFeatures[dsId]);
        }
    }
    return flatEditFeatures;
};
const flatMapArrayWithView = (editFeatures, jimuMapView) => {
    const flatEditFeatures = [];
    const mapDsId = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.dataSourceId;
    for (const dsId in editFeatures) {
        if (dsId.indexOf(mapDsId) === 0 && (editFeatures === null || editFeatures === void 0 ? void 0 : editFeatures[dsId])) {
            flatEditFeatures.push(...editFeatures[dsId]);
        }
    }
    return flatEditFeatures;
};
function isEditableLayerView(layerView, customizeLayers, customJimuLayerViewIds, liveDataEditing) {
    const layer = layerView.layer;
    const hasUrl = !!layer.url;
    const isDrawMeasurements = layer.id.toString().includes('jimu-draw-measurements-layer');
    const notEditable = layer[jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExBAddedJSAPIProperties.EXB_NOT_EDITABLE];
    const isFromRuntime = layerView.fromRuntime;
    let shouldShow = true;
    if (isFromRuntime) {
        shouldShow = liveDataEditing;
    }
    else {
        shouldShow = customizeLayers ? customJimuLayerViewIds.includes(layerView.id) : true;
    }
    const isVisible = layerView.isLayerVisible();
    return hasUrl && !isDrawMeasurements && !notEditable && shouldShow && isVisible;
}
const getDsAccessibleInfo = (url) => __awaiter(void 0, void 0, void 0, function* () {
    if (!url)
        return false;
    const request = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request;
    try {
        const info = yield request(`${url}?f=json`);
        if (Object.keys(info).includes('error')) {
            return false;
        }
        else {
            return true;
        }
    }
    catch (err) {
        return false;
    }
});
const getPrivilege = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const exbAccess = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.privilegeUtils.checkExbAccess(jimu_core__WEBPACK_IMPORTED_MODULE_0__.privilegeUtils.CheckTarget.Experience);
    return (_a = exbAccess === null || exbAccess === void 0 ? void 0 : exbAccess.capabilities) === null || _a === void 0 ? void 0 : _a.canEditFeature;
});
const getIsAdvancedPermission = (dataSource) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const layerItemInfo = yield (dataSource === null || dataSource === void 0 ? void 0 : dataSource.fetchItemInfo().then((info) => {
        return info;
    }).catch(err => {
        console.error(err);
    }));
    if (!layerItemInfo || !layerItemInfo.url)
        return false;
    // user is admin/owner, or user and item are in the same update org
    // If there is no portalUrl, it means it's non-hosted (sampleServer6)
    const portalUrl = (_a = (yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchArcGISServerInfo(layerItemInfo.url))) === null || _a === void 0 ? void 0 : _a.owningSystemUrl;
    if (!portalUrl)
        return false;
    const sessionForItem = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getSessionByUrl(portalUrl);
    // If there is no session, it means there was no pop-up login
    if (!sessionForItem)
        return false;
    const user = yield sessionForItem.getUser();
    const isAdmin = (user === null || user === void 0 ? void 0 : user.role) === 'org_admin';
    const isOrgItem = layerItemInfo === null || layerItemInfo === void 0 ? void 0 : layerItemInfo.isOrgItem;
    // Grants the ability to update and categorize content in the organization and edit hosted feature layers in your organization.
    const hasUpdateItems = ((user === null || user === void 0 ? void 0 : user.privileges) || []).includes('portal:admin:updateItems');
    const allowAdminEdit = isAdmin && isOrgItem && hasUpdateItems;
    const isOwner = layerItemInfo.owner === (user === null || user === void 0 ? void 0 : user.username);
    const isInUpdatedGroup = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.privilegeUtils.isItemInTheUpdatedGroup(layerItemInfo.id, sessionForItem);
    return allowAdminEdit || isOwner || isInUpdatedGroup;
});
const getTimezone = (dataSource) => {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getTimezoneAPIFromRuntime(dataSource.getTimezone());
};
const idsArrayEquals = (selection, preSelection) => {
    return Array.isArray(selection) &&
        Array.isArray(preSelection) &&
        selection.length === preSelection.length &&
        selection.every((v, i) => preSelection[i] === v);
};
const getDisplayField = (dataSource) => {
    var _a;
    const layerDefinition = dataSource === null || dataSource === void 0 ? void 0 : dataSource.getLayerDefinition();
    const belongToLayerDefinition = (_a = dataSource.belongToDataSource) === null || _a === void 0 ? void 0 : _a.getLayerDefinition();
    const displayField = (layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.displayField) ||
        (belongToLayerDefinition === null || belongToLayerDefinition === void 0 ? void 0 : belongToLayerDefinition.displayField);
    return displayField;
};
const useFeatureTitle = (record, dataSource) => {
    const records = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => record ? [record] : [], [record]);
    const featureTitleMap = useFeatureTitleMap(records, dataSource);
    const id = record === null || record === void 0 ? void 0 : record.getId();
    return featureTitleMap.get(id) || '';
};
function buildFeatureTitleMap(records, titles, dataSource) {
    const displayField = getDisplayField(dataSource);
    const map = new Map();
    records.forEach((record) => {
        if (!record)
            return;
        const id = record.getId();
        let title = titles === null || titles === void 0 ? void 0 : titles.get(id);
        if (!title || title === '') {
            title = record.getFieldValue(displayField) || record.getId() || '';
        }
        if (title && !map.get(id)) {
            map.set(id, title);
        }
    });
    return map;
}
const useFeatureTitleMap = (records, dataSource) => {
    const [featureTitleMap, setFeatureTitleMap] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(new Map());
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!dataSource || records.length === 0) {
            setFeatureTitleMap(new Map());
            return;
        }
        const layer = dataSource.layer;
        const features = records.map(r => r.feature);
        if (typeof (layer === null || layer === void 0 ? void 0 : layer.getFeatureTitles) === 'function') {
            layer.getFeatureTitles(features, {
                fetchMissingFields: true,
                removeHTML: true,
            }).then((titles) => {
                setFeatureTitleMap(buildFeatureTitleMap(records, titles, dataSource));
            }).catch(() => {
                setFeatureTitleMap(buildFeatureTitleMap(records, undefined, dataSource));
            });
        }
        else {
            setFeatureTitleMap(buildFeatureTitleMap(records, undefined, dataSource));
        }
    }, [dataSource, records]);
    return featureTitleMap;
};
const constructUneditableInfo = (layer) => {
    return {
        layer,
        enabled: false,
        addEnabled: false,
        updateEnabled: false,
        deleteEnabled: false,
        attributeUpdatesEnabled: false,
        geometryUpdatesEnabled: false,
        attachmentsOnUpdateEnabled: false,
    };
};
const constructFormElements = (groupedFields, hiddenFields, fieldElements) => {
    const elements = groupedFields.filter(f => !hiddenFields.includes(f.jimuName)).map(item => {
        if (item.children) {
            return new esri_form_elements_GroupElement__WEBPACK_IMPORTED_MODULE_4__["default"]({
                label: item.name,
                description: item.subDescription || (item === null || item === void 0 ? void 0 : item.description),
                elements: item.children.filter(f => !hiddenFields.includes(f.jimuName)).map(ele => {
                    return new esri_form_elements_FieldElement__WEBPACK_IMPORTED_MODULE_3__["default"]({
                        fieldName: ele.jimuName,
                        label: ele.alias || ele.name,
                        description: ele.subDescription || ele.description,
                        editableExpression: ele.editAuthority ? 'editableTrue' : 'editableFalse'
                    });
                })
            });
        }
        else {
            const existElement = fieldElements.find(e => e.fieldName === item.jimuName);
            const fieldElement = existElement ? existElement.clone() : new esri_form_elements_FieldElement__WEBPACK_IMPORTED_MODULE_3__["default"]({
                fieldName: item.jimuName,
                label: (item === null || item === void 0 ? void 0 : item.alias) || (item === null || item === void 0 ? void 0 : item.name)
            });
            fieldElement.description = item.subDescription || (item === null || item === void 0 ? void 0 : item.description);
            fieldElement.editableExpression = item.editAuthority && !fieldElement.valueExpression ? 'editableTrue' : 'editableFalse';
            return fieldElement;
        }
    });
    return elements;
};
const constructExpressionInfos = (expressionInfos) => {
    const infos = [...(expressionInfos || [])];
    infos.push(new esri_form_ExpressionInfo__WEBPACK_IMPORTED_MODULE_6__["default"]({ name: 'editableTrue', expression: 'true' }));
    infos.push(new esri_form_ExpressionInfo__WEBPACK_IMPORTED_MODULE_6__["default"]({ name: 'editableFalse', expression: 'false' }));
    return infos;
};
const constructFormTemplate = (editorUseLayer, layerConfig, relatedRecords, hiddenFields) => {
    const { groupedFields, layerHonorMode } = layerConfig;
    const originalFormTemplate = editorUseLayer.formTemplate;
    const editorFormTemplate = originalFormTemplate ? originalFormTemplate.clone() : new esri_form_FormTemplate__WEBPACK_IMPORTED_MODULE_5__["default"]();
    const fieldElements = ((originalFormTemplate === null || originalFormTemplate === void 0 ? void 0 : originalFormTemplate.elements) || []).filter(e => e.type === 'field');
    let expressionInfosConstructed = false;
    if (layerHonorMode === _config__WEBPACK_IMPORTED_MODULE_7__.LayerHonorModeType.Custom) {
        editorFormTemplate.expressionInfos = constructExpressionInfos(editorFormTemplate.expressionInfos);
        expressionInfosConstructed = true;
        editorFormTemplate.elements = constructFormElements(groupedFields, hiddenFields, fieldElements);
    }
    if (!relatedRecords && editorFormTemplate.elements) {
        for (const element of editorFormTemplate.elements) {
            if (element.type === 'relationship') {
                if (!expressionInfosConstructed) {
                    editorFormTemplate.expressionInfos = constructExpressionInfos(editorFormTemplate.expressionInfos);
                }
                element.editableExpression = 'editableFalse';
            }
        }
    }
    editorFormTemplate.title = (originalFormTemplate === null || originalFormTemplate === void 0 ? void 0 : originalFormTemplate.title) || editorUseLayer.title;
    return editorFormTemplate;
};
const queryFullFeatures = (jimuMapView, features) => __awaiter(void 0, void 0, void 0, function* () {
    const promises = [];
    for (const dsId in features) {
        const layerFeaturesArray = features[dsId];
        if ((layerFeaturesArray === null || layerFeaturesArray === void 0 ? void 0 : layerFeaturesArray.length) > 0) {
            const ids = layerFeaturesArray.map(r => r.getId());
            const jimuLayerView = jimuMapView.getJimuLayerViewByDataSourceId(dsId);
            const currentEditLayer = jimuLayerView === null || jimuLayerView === void 0 ? void 0 : jimuLayerView.layer;
            if (!currentEditLayer)
                continue;
            const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_2__["default"]({
                objectIds: ids,
                outFields: ['*'],
                returnGeometry: true
            });
            promises.push(currentEditLayer.queryFeatures(query));
        }
    }
    const results = yield Promise.all(promises);
    const fullFeatures = results.reduce((prev, cur) => {
        if (Array.isArray(cur.features)) {
            return prev.concat(cur.features);
        }
        else {
            return prev;
        }
    }, []);
    return fullFeatures;
});
const getEditorLayerInfo = (dataSource, layerConfig, jimuLayerView, relatedRecords, canEditFeature) => __awaiter(void 0, void 0, void 0, function* () {
    let showUpdateBtn = false;
    let editorLayerInfo;
    const editorUseLayer = jimuLayerView.layer;
    const fullEditingPrivileges = editorUseLayer === null || editorUseLayer === void 0 ? void 0 : editorUseLayer.userHasFullEditingPrivileges;
    const isAdvancedPermission = yield getIsAdvancedPermission(dataSource);
    const layerEditingEnabled = editorUseLayer.editingEnabled;
    let editorLayerConfig = layerConfig;
    if (!editorLayerConfig) {
        editorLayerConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.constructConfig)(dataSource, editorUseLayer);
    }
    const layerDefinition = dataSource.getLayerDefinition();
    const hiddenFields = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getEditHiddenFields)(layerDefinition);
    const usedFormTemplate = constructFormTemplate(editorUseLayer, editorLayerConfig, relatedRecords, hiddenFields);
    if (isAdvancedPermission || fullEditingPrivileges) {
        showUpdateBtn = true;
        editorLayerInfo = {
            layer: editorUseLayer,
            formTemplate: usedFormTemplate,
            enabled: true,
            addEnabled: true,
            updateEnabled: true,
            deleteEnabled: true,
            attributeUpdatesEnabled: true,
            geometryUpdatesEnabled: true
        };
    }
    else if (!layerEditingEnabled || !dataSource) {
        editorLayerInfo = constructUneditableInfo(editorUseLayer);
    }
    else {
        const { addRecords, deleteRecords, updateRecords, updateAttributes, updateGeometries } = editorLayerConfig;
        // New logic of API: The user with advanced permissions can modify the configuration regardless of the configuration
        const haveUpdatePrivilege = updateRecords || deleteRecords;
        if (isAdvancedPermission || haveUpdatePrivilege) {
            showUpdateBtn = true;
        }
        // fetch to confirm whether it's a public source
        const accessible = yield getDsAccessibleInfo(editorUseLayer === null || editorUseLayer === void 0 ? void 0 : editorUseLayer.url);
        // exb access and privilege
        const editable = accessible || canEditFeature;
        const { allowGeometryUpdates, create, update, deletable } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getDsPrivileges)(layerDefinition);
        editorLayerInfo = {
            layer: editorUseLayer,
            formTemplate: usedFormTemplate,
            enabled: editable && (addRecords || updateRecords || deleteRecords),
            addEnabled: addRecords && create,
            updateEnabled: updateRecords && update,
            deleteEnabled: deleteRecords && deletable,
            attributeUpdatesEnabled: updateAttributes && update,
            geometryUpdatesEnabled: updateGeometries && allowGeometryUpdates
        };
    }
    return { showUpdateBtn, editorLayerInfo };
});
const updateDataSourceAfterEdit = (dataSource, edits) => {
    var _a;
    const { addFeatures = [], updateFeatures = [], deleteFeatures = [] } = edits;
    for (const addFeature of addFeatures) {
        const record = dataSource.buildRecord(addFeature);
        dataSource.afterAddRecord(record);
    }
    const updateRecords = [];
    for (const updateFeature of updateFeatures) {
        const recordId = updateFeature.getObjectId();
        const originalFeature = (_a = dataSource.getRecordById(recordId)) === null || _a === void 0 ? void 0 : _a.feature;
        const originalAttributes = (originalFeature === null || originalFeature === void 0 ? void 0 : originalFeature.attributes) || {};
        const newAttributes = Object.assign(originalAttributes, updateFeature === null || updateFeature === void 0 ? void 0 : updateFeature.attributes);
        updateFeature.attributes = newAttributes;
        const record = dataSource.buildRecord(updateFeature);
        updateRecords.push(record);
    }
    dataSource.afterUpdateRecords(updateRecords);
    const deleteRecordIds = [];
    for (const deleteFeature of deleteFeatures) {
        if ('attributes' in deleteFeature) {
            const recordId = deleteFeature.getObjectId();
            deleteRecordIds.push(recordId);
        }
        else {
            deleteRecordIds.push((deleteFeature === null || deleteFeature === void 0 ? void 0 : deleteFeature.objectId) || (deleteFeature === null || deleteFeature === void 0 ? void 0 : deleteFeature.globalId));
        }
    }
    dataSource.afterDeleteRecordsByIds(deleteRecordIds);
};
const applyAttributeUpdates = (layerInfo, params) => __awaiter(void 0, void 0, void 0, function* () {
    const dataSource = layerInfo.dataSource;
    const layer = layerInfo.layer;
    const gdbVersion = dataSource.getGDBVersion();
    return layer.applyEdits(params, { gdbVersion });
});
const useCalciteColorMapping = () => {
    const isClassicTheme = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.hooks.useClassicTheme();
    const theme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    const isDarkTheme = theme.sys.color.mode === 'dark';
    return isClassicTheme && !isDarkTheme ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `--calcite-color-background: #f7f7f7;` : '';
};
const featureFormStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .esri-widget {
    background-color: unset !important;
  }
  .esri-feature-form__text-element {
    color: inherit;
  }
  .esri-feature-form__text-element p {
    color: inherit;
  }
  .esri-widget__content--empty {
    color: var(--sys-color-surface-paper-hint);
  }
  .esri-attachments__add-attachment-button {
    border-radius: var(--calcite-button-corner-radius);
    font-size: 0.875rem;
  }
  .esri-editor__prompt--danger .esri-editor__prompt__header__heading {
    color: var(--sys-color-surface-paper-text);
  }
`;


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts"
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/translations/default.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Edit',
    initAttEmptyMessage: 'Please add an editable source.',
    noRecordTips: 'No valid record is selected, select one or add one.',
    addFeature: 'Add feature',
    update: 'Update',
    deleteRecord: 'Delete this record?',
    deleteRecordTips: 'This record will be permanently removed.',
    deleteRecordsTips: 'These records will be permanently removed.',
    keepRecord: 'Keep record',
    _action_edit_label: 'Edit',
    selectionChangeConfirmTitle: 'Discard the edits?',
    selectionChangeConfirmTips: 'You have unsaved edits that could be lost.',
    discardConfirm: 'Discard edits',
    discardCancel: 'Continue editing',
    ownerAdminNotice: 'Editing is restricted but you have privileges to edit this layer.',
    editTheseRecords: 'Edit these records',
    pasteSpecial: 'Paste special',
    copySupportedLayersOnly: 'Only feature layers or subtype group layers are supported for copying features, other layers are skipped: {layers}.',
    moveClipboardFeatures: 'Move features by dragging them on the map.',
    canNotCopyMultipleLayers: 'Please select features from a single layer to copy',
    canNotCopyGeneral: 'Copy is not available for this selection',
    canNotPasteGeneral: 'Paste is not available for this selection'
});


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/utils/index.ts"
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/utils/index.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INVISIBLE_FIELD: () => (/* binding */ INVISIBLE_FIELD),
/* harmony export */   SUPPORTED_JIMU_LAYER_TYPES: () => (/* binding */ SUPPORTED_JIMU_LAYER_TYPES),
/* harmony export */   constructConfig: () => (/* binding */ constructConfig),
/* harmony export */   getDataSourceById: () => (/* binding */ getDataSourceById),
/* harmony export */   getDsCap: () => (/* binding */ getDsCap),
/* harmony export */   getDsPrivileges: () => (/* binding */ getDsPrivileges),
/* harmony export */   getEditDataSource: () => (/* binding */ getEditDataSource),
/* harmony export */   getEditHiddenFields: () => (/* binding */ getEditHiddenFields),
/* harmony export */   getFlatFormElements: () => (/* binding */ getFlatFormElements),
/* harmony export */   supportedDsTypes: () => (/* binding */ supportedDsTypes)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/custom_edit/src/config.ts");


// These fields comes from FeatureTableViewModel's doc:
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable-FeatureTableViewModel.html#columns
const INVISIBLE_FIELD = [
    'CreationDate',
    'Creator',
    'EditDate',
    'Editor',
    'GlobalID'
];
const SUPPORTED_JIMU_LAYER_TYPES = [
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.JSAPILayerTypes.FeatureLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.JSAPILayerTypes.SceneLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.JSAPILayerTypes.BuildingComponentSublayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.JSAPILayerTypes.OrientedImageryLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.JSAPILayerTypes.SubtypeSublayer
];
const supportedDsTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.BuildingComponentSubLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.OrientedImageryLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SubtypeSublayer
]);
/**
 * Function to check if ds have a specified capability.
 * @param {string | string[]} capabilities ds's capabilities
 * @param {string} capType capability to be checked
 * @returns {boolean}
 */
const getDsCap = (capabilities, capType) => {
    if (capabilities) {
        return Array.isArray(capabilities)
            ? capabilities === null || capabilities === void 0 ? void 0 : capabilities.join().toLowerCase().includes(capType)
            : capabilities === null || capabilities === void 0 ? void 0 : capabilities.toLowerCase().includes(capType);
    }
    else {
        return false;
    }
};
const getDsPrivileges = (layerDefinition) => {
    const allowGeometryUpdates = layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.allowGeometryUpdates;
    const capabilities = layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.capabilities;
    const create = getDsCap(capabilities, 'create');
    const update = getDsCap(capabilities, 'update');
    const deletable = getDsCap(capabilities, 'delete');
    return { allowGeometryUpdates, create, update, deletable };
};
/**
 * Gets the names of the fields which are used for tracking edits.
 *
 * @ignore
 */
function getEditHiddenFields(layerDefinition) {
    if (!layerDefinition) {
        return [];
    }
    const objectIdField = layerDefinition.objectIdField;
    const { creationDateField, creatorField, editDateField, editorField } = layerDefinition.editFieldsInfo || {};
    // REST API does not expose the `geometryProperties`
    // While Map SDK uses this to hide the st_length(shape) and st_area(shape) fields
    const { shapeAreaFieldName, shapeLengthFieldName } = layerDefinition.geometryProperties || {};
    return [objectIdField, creationDateField, creatorField, editDateField, editorField, shapeAreaFieldName, shapeLengthFieldName].filter(Boolean);
}
const getFlatFormElements = (formElements) => {
    const flatElements = [];
    formElements === null || formElements === void 0 ? void 0 : formElements.forEach(ele => {
        if (ele.type === 'group') {
            flatElements.push(...getFlatFormElements(ele.elements));
        }
        else {
            flatElements.push(ele);
        }
    });
    return flatElements;
};
const constructConfig = (ds, layer) => {
    var _a, _b, _c, _d, _e;
    // Init capabilities
    const layerDefinition = ds.getLayerDefinition();
    const { allowGeometryUpdates, create, update, deletable } = getDsPrivileges(layerDefinition);
    // Fields operation
    const fields = ((_c = (_b = (_a = ds.getSchema()) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.asMutable) === null || _c === void 0 ? void 0 : _c.call(_b, { deep: true })) || {};
    let showFields = Object.values(fields);
    // According to the API, these five items do not displayed in the Editor by default
    showFields = showFields.filter(item => !getEditHiddenFields(layerDefinition).includes(item.name));
    // Popup Setting is initially selected by default if the map has popup setting
    const formElements = (_d = layer.formTemplate) === null || _d === void 0 ? void 0 : _d.elements;
    if (formElements) {
        const formFieldNames = getFlatFormElements(formElements).filter(ele => ele.type === 'field').map(ele => ele.fieldName);
        showFields = showFields.filter(f => formFieldNames.includes(f.name));
    }
    // If there are too many columns, only the first 50 columns will be displayed by default
    if ((showFields === null || showFields === void 0 ? void 0 : showFields.length) > 50) {
        showFields = showFields.slice(0, 50);
    }
    // Field editing is enabled by default
    const fieldsConfig = (layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.fields) || [];
    const groupedFields = showFields.map(item => {
        const orgField = fieldsConfig.find(field => field.name === item.jimuName);
        const defaultAuthority = orgField === null || orgField === void 0 ? void 0 : orgField.editable;
        return Object.assign(Object.assign({}, item), { editAuthority: defaultAuthority, subDescription: (item === null || item === void 0 ? void 0 : item.description) || '', editable: defaultAuthority });
    });
    const useDataSources = {
        dataSourceId: ds.id,
        mainDataSourceId: ds.id,
        dataViewId: ds.dataViewId,
        rootDataSourceId: (_e = ds.getRootDataSource()) === null || _e === void 0 ? void 0 : _e.id
    };
    const layerConfig = {
        id: ds.id,
        name: ds.getLabel(),
        useDataSource: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDataSources),
        addRecords: create,
        deleteRecords: deletable,
        updateRecords: update,
        updateAttributes: update,
        updateGeometries: allowGeometryUpdates && update,
        showFields,
        groupedFields,
        layerHonorMode: _config__WEBPACK_IMPORTED_MODULE_1__.LayerHonorModeType.Webmap
    };
    return layerConfig;
};
const getDataSourceById = (dsId) => {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
};
const getEditDataSource = (ds) => {
    const isSceneLayer = (ds === null || ds === void 0 ? void 0 : ds.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer || (ds === null || ds === void 0 ? void 0 : ds.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.BuildingComponentSubLayer;
    const isOrientedImagery = (ds === null || ds === void 0 ? void 0 : ds.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.OrientedImageryLayer;
    let dataSource;
    if (isSceneLayer) {
        dataSource = ds.getAssociatedDataSource();
    }
    else if (isOrientedImagery) {
        // OrientedImageryLayer extends FeatureLayer, so we can use it as a FeatureLayer
        dataSource = ds;
    }
    else {
        dataSource = ds;
    }
    return dataSource;
};


/***/ },

/***/ "./your-extensions/widgets/custom_edit/src/version-manager.ts"
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/version-manager.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   versionManager: () => (/* binding */ versionManager)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./your-extensions/widgets/custom_edit/src/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/custom_edit/src/utils/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class VersionManager extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.WidgetVersionManager {
    constructor() {
        super(...arguments);
        this.versions = [{
                version: '1.7.0',
                description: 'Add layerHonorMode to config for support smart form.',
                upgrader: (oldConfig) => __awaiter(this, void 0, void 0, function* () {
                    let newConfig = oldConfig;
                    const decoupleNested = (groupSubItems, fieldsConfig) => {
                        const unNestedFields = [];
                        const recursion = (subItems) => {
                            subItems.forEach(item => {
                                if (item.groupKey) {
                                    recursion(item.children);
                                }
                                else {
                                    const subOrgField = fieldsConfig.find(config => config.name === item.jimuName);
                                    if (!_utils__WEBPACK_IMPORTED_MODULE_2__.INVISIBLE_FIELD.includes(item.jimuName)) {
                                        unNestedFields.push(Object.assign(Object.assign({}, item), { editable: subOrgField === null || subOrgField === void 0 ? void 0 : subOrgField.editable, editAuthority: (subOrgField === null || subOrgField === void 0 ? void 0 : subOrgField.editable) ? item === null || item === void 0 ? void 0 : item.editAuthority : false }));
                                    }
                                }
                            });
                            return unNestedFields;
                        };
                        return recursion(groupSubItems);
                    };
                    return yield Promise.all(newConfig.layersConfig.map(layerConfig => {
                        return new Promise(resolve => {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().createDataSourceByUseDataSource(layerConfig.useDataSource).then(currentDs => {
                                const layerDefinition = currentDs === null || currentDs === void 0 ? void 0 : currentDs.getLayerDefinition();
                                const fieldsConfig = (layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.fields) || [];
                                const newGroupedFields = layerConfig.groupedFields.map(field => {
                                    var _a;
                                    const orgField = fieldsConfig.find(config => config.name === field.jimuName);
                                    if (field.groupKey) {
                                        return Object.assign(Object.assign({}, field), { editable: true, editAuthority: !((_a = field === null || field === void 0 ? void 0 : field.children) === null || _a === void 0 ? void 0 : _a.some(item => item.editAuthority === false)), children: decoupleNested(field === null || field === void 0 ? void 0 : field.children, fieldsConfig) });
                                    }
                                    return Object.assign(Object.assign({}, field), { editable: orgField === null || orgField === void 0 ? void 0 : orgField.editable, editAuthority: (orgField === null || orgField === void 0 ? void 0 : orgField.editable) ? field === null || field === void 0 ? void 0 : field.editAuthority : false });
                                }).filter(item => !_utils__WEBPACK_IMPORTED_MODULE_2__.INVISIBLE_FIELD.includes(item.jimuName));
                                resolve(newGroupedFields);
                            }).catch(() => {
                                resolve([]);
                            });
                        });
                    })).then(res => {
                        res.forEach((resItem, i) => {
                            const selectedFields = newConfig.layersConfig[i].showFields.filter(item => !_utils__WEBPACK_IMPORTED_MODULE_2__.INVISIBLE_FIELD.includes(item.jimuName));
                            let unGroupedFields = [];
                            const resGroupedFields = resItem.asMutable({ deep: true });
                            resItem.forEach(item => {
                                if (item.groupKey) {
                                    unGroupedFields = unGroupedFields.concat(item.children);
                                }
                                else {
                                    unGroupedFields.push(item);
                                }
                            });
                            selectedFields.forEach(ele => {
                                if (!unGroupedFields.find(field => field.jimuName === ele.jimuName)) {
                                    resGroupedFields.push(ele);
                                }
                            });
                            newConfig = newConfig.setIn(['layersConfig', i, 'groupedFields'], (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(resGroupedFields));
                            newConfig = newConfig.setIn(['layersConfig', i, 'layerHonorMode'], _config__WEBPACK_IMPORTED_MODULE_1__.LayerHonorModeType.Custom);
                        });
                        return Promise.resolve(newConfig);
                    }).catch(() => {
                        return Promise.resolve(newConfig);
                    });
                })
            }, {
                version: '1.10.0',
                description: 'Set old app default snapping to true',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    newConfig = newConfig.set('selfSnapping', true).set('featureSnapping', true);
                    return newConfig;
                }
            }, {
                version: '1.12.0',
                description: 'Set "undefined" option to "false", and remove not editable layer',
                upgrader: (oldConfig) => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b, _c;
                    let newConfig = oldConfig;
                    const isGeometryMode = newConfig.editMode === _config__WEBPACK_IMPORTED_MODULE_1__.EditModeType.Geometry;
                    const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
                    const newLayersConfig = [];
                    for (const config of newConfig.layersConfig) {
                        let dataSource;
                        try {
                            dataSource = yield dsManager.createDataSourceByUseDataSource(config === null || config === void 0 ? void 0 : config.useDataSource);
                        }
                        catch (error) {
                            console.error(error);
                        }
                        if (!dataSource) {
                            newLayersConfig.push(config);
                            continue;
                        }
                        const layerDefinition = dataSource === null || dataSource === void 0 ? void 0 : dataSource.getLayerDefinition();
                        const isTable = ((_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.layer) === null || _a === void 0 ? void 0 : _a.isTable) || (layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerServiceTypes.Table;
                        if (isGeometryMode && isTable)
                            continue;
                        const allowGeometryUpdates = layerDefinition === null || layerDefinition === void 0 ? void 0 : layerDefinition.allowGeometryUpdates;
                        const layerEditingEnabled = (_c = (_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.layer) === null || _b === void 0 ? void 0 : _b.editingEnabled) !== null && _c !== void 0 ? _c : true;
                        if (layerEditingEnabled) {
                            let newLayerConfig;
                            if (config.updateGeometries) {
                                newLayerConfig = Object.assign(Object.assign({}, config), { updateRecords: true, updateAttributes: true, updateGeometries: allowGeometryUpdates && true });
                            }
                            else {
                                newLayerConfig = Object.assign(Object.assign({}, config), { updateRecords: false, updateAttributes: false, updateGeometries: false });
                            }
                            newLayersConfig.push(newLayerConfig);
                        }
                    }
                    newConfig = newConfig.setIn(['layersConfig'], newLayersConfig);
                    return newConfig;
                })
            }, {
                version: '1.13.0',
                description: 'Update snap options',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    if (newConfig.selfSnapping) {
                        newConfig = newConfig.set('defaultSelfEnabled', true);
                    }
                    if (newConfig.featureSnapping) {
                        newConfig = newConfig.set('defaultFeatureEnabled', true);
                    }
                    return newConfig;
                }
            }, {
                version: '1.14.0',
                description: 'Add predefine snapping options',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    newConfig = newConfig.set('snapSettingMode', _config__WEBPACK_IMPORTED_MODULE_1__.SnapSettingMode.Flexible);
                    return newConfig;
                }
            }, {
                version: '1.15.0',
                description: 'Add general setting options',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    newConfig = newConfig.set('tooltip', true).set('templateFilter', true).set('relatedRecords', true);
                    return newConfig;
                }
            }, {
                version: '1.16.0',
                description: 'Update map mode config',
                upgradeFullInfo: true,
                upgrader: (oldInfo) => __awaiter(this, void 0, void 0, function* () {
                    const oldWidgetJson = oldInfo.widgetJson;
                    const oldConfig = oldWidgetJson.config;
                    if (!oldConfig)
                        return oldInfo;
                    let newConfig = oldConfig;
                    const { editMode, layersConfig } = oldConfig;
                    const isEditMode = editMode === _config__WEBPACK_IMPORTED_MODULE_1__.EditModeType.Geometry;
                    const newMapViewsConfig = {};
                    const getJimuLayerViewIdByLayerDsId = (layerDsId, mapDsId, jimuMapViewId) => __awaiter(this, void 0, void 0, function* () {
                        try {
                            const layerDs = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                                dataSourceId: layerDsId,
                                mainDataSourceId: layerDsId,
                                rootDataSourceId: mapDsId
                            }));
                            if (!layerDs) {
                                console.error('Cannot create layer data source.', layerDsId);
                                return null;
                            }
                            const jimuLayerViewId = `${jimuMapViewId}-${layerDs.jimuLayerId}`;
                            return jimuLayerViewId;
                        }
                        catch (error) {
                            console.error('Cannot create layer data source.', error);
                            return null;
                        }
                    });
                    if (isEditMode) {
                        const useMapWidgetId = oldWidgetJson.useMapWidgetIds[0];
                        for (const config of layersConfig) {
                            const layerDsId = config.id;
                            const i = layerDsId.indexOf('-');
                            const mapDsId = config.id.substring(0, i);
                            const jimuMapView = `${useMapWidgetId}-${mapDsId}`; // like 'widget_1-dataSource_1'
                            const jimuLayerViewId = yield getJimuLayerViewIdByLayerDsId(layerDsId, mapDsId, jimuMapView);
                            if (!jimuLayerViewId)
                                continue;
                            const mutableConfig = config.asMutable({ deep: true });
                            if (newMapViewsConfig[jimuMapView]) {
                                newMapViewsConfig[jimuMapView].customJimuLayerViewIds.push(jimuLayerViewId);
                                const orgLayersConfig = newMapViewsConfig[jimuMapView].layersConfig;
                                const newLayersConfig = orgLayersConfig;
                                newLayersConfig.push(mutableConfig);
                                newMapViewsConfig[jimuMapView].layersConfig = newLayersConfig;
                            }
                            else {
                                const newViewConfig = {
                                    customizeLayers: true,
                                    customJimuLayerViewIds: [jimuLayerViewId],
                                    layersConfig: [mutableConfig]
                                };
                                newMapViewsConfig[jimuMapView] = newViewConfig;
                            }
                        }
                        newConfig = newConfig.set('mapViewsConfig', newMapViewsConfig);
                    }
                    const widgetJson = oldWidgetJson.set('config', (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newConfig));
                    const widgetInfo = Object.assign(Object.assign({}, oldInfo), { widgetJson });
                    return widgetInfo;
                })
            }];
    }
}
const versionManager = new VersionManager();


/***/ },

/***/ "arcgis-map-components"
/*!****************************************!*\
  !*** external "arcgis-map-components" ***!
  \****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_arcgis_map_components__;

/***/ },

/***/ "esri/Graphic"
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ },

/***/ "esri/core/Collection"
/*!***************************************!*\
  !*** external "esri/core/Collection" ***!
  \***************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_Collection__;

/***/ },

/***/ "@arcgis/core/core/reactiveUtils"
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__;

/***/ },

/***/ "esri/form/ExpressionInfo"
/*!*******************************************!*\
  !*** external "esri/form/ExpressionInfo" ***!
  \*******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_form_ExpressionInfo__;

/***/ },

/***/ "esri/form/FormTemplate"
/*!*****************************************!*\
  !*** external "esri/form/FormTemplate" ***!
  \*****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__;

/***/ },

/***/ "esri/form/elements/FieldElement"
/*!**************************************************!*\
  !*** external "esri/form/elements/FieldElement" ***!
  \**************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__;

/***/ },

/***/ "esri/form/elements/GroupElement"
/*!**************************************************!*\
  !*** external "esri/form/elements/GroupElement" ***!
  \**************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_form_elements_GroupElement__;

/***/ },

/***/ "esri/rest/support/Query"
/*!******************************************!*\
  !*** external "esri/rest/support/Query" ***!
  \******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__;

/***/ },

/***/ "esri/widgets/BatchAttributeForm"
/*!**************************************************!*\
  !*** external "esri/widgets/BatchAttributeForm" ***!
  \**************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_BatchAttributeForm__;

/***/ },

/***/ "esri/widgets/Editor"
/*!**************************************!*\
  !*** external "esri/widgets/Editor" ***!
  \**************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__;

/***/ },

/***/ "esri/widgets/FeatureForm"
/*!*******************************************!*\
  !*** external "esri/widgets/FeatureForm" ***!
  \*******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_FeatureForm__;

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

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "jimu-theme"
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/custom_edit/src/runtime/widget.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/custom_edit/src/config.ts");
/* harmony import */ var _components_feature_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/feature-form-component */ "./your-extensions/widgets/custom_edit/src/runtime/components/feature-form-component.tsx");
/* harmony import */ var _components_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/editor-component */ "./your-extensions/widgets/custom_edit/src/runtime/components/editor-component.tsx");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/utils */ "./your-extensions/widgets/custom_edit/src/runtime/components/utils.ts");
/* harmony import */ var _version_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../version-manager */ "./your-extensions/widgets/custom_edit/src/version-manager.ts");







const EditWidget = (props) => {
    const { id, label, config, useDataSources, useMapWidgetIds, controllerWidgetId, state } = props;
    const isAttributeOnly = config.editMode === _config__WEBPACK_IMPORTED_MODULE_2__.EditModeType.Attribute;
    // use exb privilege instead of api's supportsUpdateByOthers
    const [canEditFeature, setCanEditFeature] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(undefined);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.getPrivilege)().then((canEdit) => {
            setCanEditFeature(canEdit);
        }).catch(() => {
            setCanEditFeature(false);
        });
    }, []);
    const visible = controllerWidgetId ? [jimu_core__WEBPACK_IMPORTED_MODULE_1__.WidgetState.Active, jimu_core__WEBPACK_IMPORTED_MODULE_1__.WidgetState.Opened].includes(state) : state !== jimu_core__WEBPACK_IMPORTED_MODULE_1__.WidgetState.Hidden;
    return isAttributeOnly
        ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_feature_form_component__WEBPACK_IMPORTED_MODULE_3__["default"], { label: label, config: config, canEditFeature: canEditFeature, useDataSources: useDataSources })
        : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_editor_component__WEBPACK_IMPORTED_MODULE_4__["default"], { id: id, visible: visible, config: config, canEditFeature: canEditFeature, useMapWidgetIds: useMapWidgetIds });
};
EditWidget.versionManager = _version_manager__WEBPACK_IMPORTED_MODULE_6__.versionManager;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditWidget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jdXN0b21fZWRpdC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Zjs7Ozs7Ozs7OztBQ0FBLG1QOzs7Ozs7Ozs7O0FDQUEsdVM7Ozs7Ozs7Ozs7QUNBQSxxWjs7Ozs7Ozs7OztBQ0FBLG9YOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBRWE7QUFFbkQsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRztJQUN0QixNQUFNLEVBQUUsU0FBUyxLQUFnQixLQUFLLEVBQWhCLE1BQU0sVUFBSyxLQUFLLEVBQWhDLGFBQXdCLENBQVE7SUFFdEMsTUFBTSxPQUFPLEdBQUcscURBQVUsQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUM7SUFDdEUsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLHVGQUFLLFNBQVMsRUFBRSxPQUFPLElBQU0sTUFBYSxFQUFJO0lBQy9ELE9BQU8sZ0VBQUMsR0FBRyxrQkFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSw0RUFBRyxJQUFNLE1BQU0sRUFBSTtBQUMxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g0QztBQUVPO0FBRTdDLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFO0lBQ3ZELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO0lBQ3RCLE1BQU0sRUFBRSxTQUFTLEtBQWdCLEtBQUssRUFBaEIsTUFBTSxVQUFLLEtBQUssRUFBaEMsYUFBd0IsQ0FBUTtJQUV0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dXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvYmF0Y2gtZWRpdC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9wbHVzLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL3N1Z2dlc3RlZC9pbmZvLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvaWNvbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2JhdGNoLWVkaXQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9wbHVzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3Ivc2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mby50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9ydW50aW1lL2NvbXBvbmVudHMvZWRpdC1pdGVtLWRzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9lZGl0LWxpc3QtZHMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvcnVudGltZS9jb21wb25lbnRzL2VkaXRvci1jbG9zZS13YXJuaW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9lZGl0b3ItY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9lZGl0b3ItY29weS1wYXN0ZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9ydW50aW1lL2NvbXBvbmVudHMvZW1wdHktcGxhY2Vob2xkZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvcnVudGltZS9jb21wb25lbnRzL2ZlYXR1cmUtZm9ybS1idXR0b25zLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9mZWF0dXJlLWZvcm0tY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9mZWF0dXJlLWZvcm0tY29uZmlybS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9ydW50aW1lL2NvbXBvbmVudHMvZmVhdHVyZS1mb3JtLWhlYWRlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9ydW50aW1lL2NvbXBvbmVudHMvZmVhdHVyZS1mb3JtLWxpc3QtaXRlbXMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvcnVudGltZS9jb21wb25lbnRzL2ZlYXR1cmUtZm9ybS1saXN0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9mZWF0dXJlLWZvcm0tc2VsZWN0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3VzdG9tX2VkaXQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy91c2UtZWRpdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvcnVudGltZS9jb21wb25lbnRzL3VzZS1mZWF0dXJlLWZvcm0udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9ydW50aW1lL2NvbXBvbmVudHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jdXN0b21fZWRpdC9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy92ZXJzaW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJhcmNnaXMtbWFwLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9jb3JlL0NvbGxlY3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29yZS9yZWFjdGl2ZVV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2Zvcm0vRXhwcmVzc2lvbkluZm9cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZm9ybS9Gb3JtVGVtcGxhdGVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZm9ybS9lbGVtZW50cy9GaWVsZEVsZW1lbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZm9ybS9lbGVtZW50cy9Hcm91cEVsZW1lbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvQmF0Y2hBdHRyaWJ1dGVGb3JtXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvRWRpdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvRmVhdHVyZUZvcm1cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2N1c3RvbV9lZGl0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTExLjc5NSA1LjI4MWMuMzg3LS4zODcgMS4wMjgtLjM3MyAxLjQzMi4wM2wxLjQ2MSAxLjQ2MmMuNDA0LjQwNC40MTcgMS4wNDUuMDMgMS40MzJMOC40MTQgMTQuNTFsLTIuNjc0LjQ4YS42MzcuNjM3IDAgMCAxLS43My0uNzNsLjQ4LTIuNjczem0tNS4zNjIgNi44MjUtLjMyIDEuNzgyIDEuNzgyLS4zMiAzLjk5LTMuOTkyLTEuNDYxLTEuNDYyem00LjY5Mi00LjY5MyAxLjQ2IDEuNDYyIDEuNDAyLTEuNDAxLTEuNDYyLTEuNDYxelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTQgMTFIMXYtMWgzek03IDhIMVY3aDZ6TTEwIDVIMVY0aDl6TTEyIDJIMVYxaDExelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMG0tMS4yNyA0LjkzNmE2LjUgNi41IDAgMSAxIC43MDctLjcwN2w0LjEzNiA0LjEzN2EuNS41IDAgMSAxLS43MDcuNzA3elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTggNS41YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMk02LjUgNy41QS41LjUgMCAwIDEgNyA3aDEuNXY0LjVoMWEuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxIDAtMWgxVjhIN2EuNS41IDAgMCAxLS41LS41XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOCAxNkE4IDggMCAxIDEgOCAwYTggOCAwIDAgMSAwIDE2bTAtMUE3IDcgMCAxIDAgOCAxYTcgNyAwIDAgMCAwIDE0XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIm0xNC4wNzEgMi44MjggMS40MTQtMS40MTQgMi44MjkgMi44MjktMS40MTUgMS40MTR6bS0uNzA3LjcwOEw4LjAzOCA4Ljg2bC4yMzYgMi41OTMgMi41OTMuMjM2IDUuMzI1LTUuMzI2em0tNi4wMSA4LjgzOCAzLjg4OS4zNTQgOC40ODUtOC40ODVMMTUuNDg1IDAgNyA4LjQ4NXpNOC41IDNIMHYxN2gxN3YtOC41aC0xVjE5SDFWNGg3LjV6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgdHlwZSB7IFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL2JhdGNoLWVkaXQuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhdGNoRWRpdE91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9wbHVzLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBQbHVzT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgdHlwZSB7IFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3NlYXJjaC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgdHlwZSB7IFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvc3VnZ2VzdGVkL2luZm8uc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9PdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUge1xyXG4gIEltbXV0YWJsZU9iamVjdCxcclxuICBVc2VEYXRhU291cmNlLFxyXG4gIEZpZWxkU2NoZW1hXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdE1vZGVUeXBlIHtcclxuICBBdHRyaWJ1dGUgPSAnQVRUUklCVVRFJyxcclxuICBHZW9tZXRyeSA9ICdHRU9NRVRSWSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTGF5ZXJIb25vck1vZGVUeXBlIHtcclxuICBXZWJtYXAgPSAnV0VCTUFQJyxcclxuICBDdXN0b20gPSAnQ1VTVE9NJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbXBvcnRIaW50VHlwZSB7XHJcbiAgTm9NYXAgPSAnTk9NQVAnLFxyXG4gIE5vTGF5ZXIgPSAnTk9FRElUQUJMRSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU25hcFNldHRpbmdNb2RlIHtcclxuICBQcmVzY3JpcHRpdmUgPSAnUFJFU0NSSVBUSVZFJyxcclxuICBGbGV4aWJsZSA9ICdGTEVYSUJMRSdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlRmllbGRzIGV4dGVuZHMgRmllbGRTY2hlbWEge1xyXG4gIGNoaWxkcmVuPzogVHJlZUZpZWxkc1tdXHJcbiAgZ3JvdXBLZXk/OiBudW1iZXJcclxuICBlZGl0QXV0aG9yaXR5PzogYm9vbGVhblxyXG4gIHN1YkRlc2NyaXB0aW9uPzogc3RyaW5nXHJcbiAgZWRpdGFibGU/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJzQ29uZmlnIHtcclxuICBpZDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIGFkZFJlY29yZHM/OiBib29sZWFuXHJcbiAgZGVsZXRlUmVjb3Jkcz86IGJvb2xlYW5cclxuICB1cGRhdGVSZWNvcmRzPzogYm9vbGVhblxyXG4gIHVwZGF0ZUF0dHJpYnV0ZXM/OiBib29sZWFuXHJcbiAgdXBkYXRlR2VvbWV0cmllcz86IGJvb2xlYW5cclxuICBzaG93RmllbGRzOiBGaWVsZFNjaGVtYVtdXHJcbiAgZ3JvdXBlZEZpZWxkczogVHJlZUZpZWxkc1tdXHJcbiAgbGF5ZXJIb25vck1vZGU6IExheWVySG9ub3JNb2RlVHlwZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcFZpZXdDb25maWcge1xyXG4gIGN1c3RvbWl6ZUxheWVyczogYm9vbGVhblxyXG4gIGN1c3RvbUppbXVMYXllclZpZXdJZHM/OiBzdHJpbmdbXVxyXG4gIGxheWVyc0NvbmZpZz86IExheWVyc0NvbmZpZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwVmlld3NDb25maWcge1xyXG4gIFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBNYXBWaWV3Q29uZmlnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBsYXllcnNDb25maWc/OiBMYXllcnNDb25maWdbXSAvLyBmZWF0dXJlIGZvcm1cclxuICBtYXBWaWV3c0NvbmZpZz86IE1hcFZpZXdzQ29uZmlnXHJcbiAgZWRpdE1vZGU6IEVkaXRNb2RlVHlwZSAvLyBjb21tb25cclxuICBncmlkU25hcHBpbmc/OiBib29sZWFuXHJcbiAgc2VsZlNuYXBwaW5nPzogYm9vbGVhblxyXG4gIGZlYXR1cmVTbmFwcGluZz86IGJvb2xlYW5cclxuICBkZWZhdWx0R3JpZEVuYWJsZWQ/OiBib29sZWFuXHJcbiAgZGVmYXVsdFNlbGZFbmFibGVkPzogYm9vbGVhblxyXG4gIGRlZmF1bHRGZWF0dXJlRW5hYmxlZD86IGJvb2xlYW5cclxuICBkZWZhdWx0U25hcExheWVycz86IHN0cmluZ1tdXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyAvLyBmZWF0dXJlIGZvcm1cclxuICBub0RhdGFNZXNzYWdlOiBzdHJpbmcgLy8gZmVhdHVyZSBmb3JtXHJcbiAgc25hcFNldHRpbmdNb2RlOiBTbmFwU2V0dGluZ01vZGVcclxuICB0b29sdGlwPzogYm9vbGVhblxyXG4gIGRlZmF1bHRUb29sdGlwRW5hYmxlZD86IGJvb2xlYW5cclxuICBzZWdtZW50TGFiZWw/OiBib29sZWFuXHJcbiAgZGVmYXVsdFNlZ21lbnRMYWJlbEVuYWJsZWQ/OiBib29sZWFuXHJcbiAgdGVtcGxhdGVGaWx0ZXI/OiBib29sZWFuXHJcbiAgcmVsYXRlZFJlY29yZHM/OiBib29sZWFuXHJcbiAgbGl2ZURhdGFFZGl0aW5nPzogYm9vbGVhblxyXG4gIGluaXRpYWxSZXNoYXBlTW9kZT86IGJvb2xlYW5cclxuICBiYXRjaEVkaXRpbmc/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlcyBhZHZhbmNlZCBlZGl0aW5nIHRvb2xzIGluIHRoZSB3aWRnZXQgaW50ZXJmYWNlLlxyXG4gICAqIFdoZW4gc2V0IHRvIHRydWUsIGFkZGl0aW9uYWwgZWRpdGluZyBmdW5jdGlvbmFsaXRpZXMgc3VjaCBhcyBzcGxpdCBhbmQgbWVyZ2Ugb3BlcmF0aW9ucyBiZWNvbWUgYXZhaWxhYmxlLlxyXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgcmVsYXRlZCB0byBgc3BsaXRCdXR0b25gIGFuZCBgbWVyZ2VCdXR0b25gLCB3aGljaCBjb250cm9sIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSByZXNwZWN0aXZlIGJ1dHRvbnMgZm9yIHNwbGl0dGluZyBhbmQgbWVyZ2luZyBmZWF0dXJlcy5cclxuICAgKi9cclxuICBhZHZhbmNlZEVkaXRpbmdUb29scz86IGJvb2xlYW5cclxuICBzcGxpdEJ1dHRvbj86IGJvb2xlYW5cclxuICBtZXJnZUJ1dHRvbj86IGJvb2xlYW5cclxuICBjb3B5UGFzdGU/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuIiwiaW1wb3J0IHsgUmVhY3QsIERhdGFTb3VyY2VDb21wb25lbnQsIHR5cGUgSU1Vc2VEYXRhU291cmNlLCB0eXBlIERhdGFTb3VyY2UsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSU1EYXRhU291cmNlSW5mbyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgaWRzQXJyYXlFcXVhbHMgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuaW50ZXJmYWNlIERhdGFTb3VyY2VQcm9wcyB7XHJcbiAgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlXHJcbiAgb25EYXRhU291cmNlQ3JlYXRlZD86IChkYXRhU291cmNlSWQ6IHN0cmluZywgZGF0YVNvdXJjZT86IERhdGFTb3VyY2UpID0+IHZvaWRcclxuICBvblNlbGVjdGlvbkNoYW5nZTogKGRhdGFTb3VyY2VJZDogc3RyaW5nKSA9PiB2b2lkXHJcbiAgb25Tb3VyY2VWZXJzaW9uQ2hhbmdlPzogKGRhdGFTb3VyY2VJZDogc3RyaW5nLCBzb3VyY2VWZXJzaW9uOiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdEl0ZW1EYXRhU291cmNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxEYXRhU291cmNlUHJvcHM+IHtcclxuICBvbkRhdGFTb3VyY2VDcmVhdGVkID0gKGRzOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzPy5vbkRhdGFTb3VyY2VDcmVhdGVkPy4odGhpcy5wcm9wcy51c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCwgZHMpXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbkNoYW5nZSA9IChzZWxlY3Rpb246IEltbXV0YWJsZUFycmF5PHN0cmluZ3xudW1iZXI+LCBwcmVTZWxlY3Rpb24/OiBJbW11dGFibGVBcnJheTxzdHJpbmd8bnVtYmVyPikgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDaGFuZ2UgPSAhaWRzQXJyYXlFcXVhbHMoc2VsZWN0aW9uLCBwcmVTZWxlY3Rpb24pICYmIChzZWxlY3Rpb24/Lmxlbmd0aCAhPT0gMCB8fCBwcmVTZWxlY3Rpb24/Lmxlbmd0aCAhPT0gMClcclxuICAgIGlmIChzZWxlY3RlZENoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlPy4odGhpcy5wcm9wcy51c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2UgPSAoaW5mbzogSU1EYXRhU291cmNlSW5mbywgcHJlSW5mbz86IElNRGF0YVNvdXJjZUluZm8pID0+IHtcclxuICAgIGlmICghaW5mbykgcmV0dXJuXHJcbiAgICBjb25zdCBzb3VyY2VWZXJzaW9uQ2hhbmdlID0gaW5mby5zb3VyY2VWZXJzaW9uICE9PSBwcmVJbmZvPy5zb3VyY2VWZXJzaW9uXHJcbiAgICBpZiAoc291cmNlVmVyc2lvbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU291cmNlVmVyc2lvbkNoYW5nZT8uKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQsIGluZm8uc291cmNlVmVyc2lvbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IHVzZURhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cclxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXt0aGlzLm9uRGF0YVNvdXJjZUNyZWF0ZWR9XHJcbiAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e3RoaXMub25TZWxlY3Rpb25DaGFuZ2V9XHJcbiAgICAgICAgb25EYXRhU291cmNlSW5mb0NoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VJbmZvQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBEYXRhU291cmNlLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgaG9va3MsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgVXNlRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQ29uZmlybURpYWxvZyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCBFZGl0SXRlbURhdGFTb3VyY2UgZnJvbSAnLi9lZGl0LWl0ZW0tZHMnXHJcblxyXG5pbnRlcmZhY2UgRWRpdExpc3REYXRhU291cmNlUHJvcHMge1xyXG4gIHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSB8IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XHJcbiAgdW5zYXZlZENoYW5nZTogYm9vbGVhblxyXG4gIG9uRGF0YVNvdXJjZUNyZWF0ZWQ/OiAoZGF0YVNvdXJjZUlkOiBzdHJpbmcsIGRhdGFTb3VyY2U/OiBEYXRhU291cmNlKSA9PiB2b2lkXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2U6IChkYXRhU291cmNlSWRzOiBzdHJpbmdbXSkgPT4gdm9pZFxyXG4gIG9uU291cmNlVmVyc2lvbkNoYW5nZT86IChkYXRhU291cmNlSWQ6IHN0cmluZywgc291cmNlVmVyc2lvbjogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEVkaXRMaXN0RGF0YVNvdXJjZSA9IChwcm9wczogRWRpdExpc3REYXRhU291cmNlUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHVzZURhdGFTb3VyY2VzLCB1bnNhdmVkQ2hhbmdlLCBvbkRhdGFTb3VyY2VDcmVhdGVkLCBvblNlbGVjdGlvbkNoYW5nZSwgb25Tb3VyY2VWZXJzaW9uQ2hhbmdlIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBbc2hvd0NvbmZpcm0sIHNldFNob3dDb25maXJtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHNlbGVjdGlvblRvQmVDaGFuZ2VEc0lkcyA9IFJlYWN0LnVzZVJlZjxzdHJpbmdbXT4oW10pXHJcbiAgY29uc3QgdGltZXIgPSBSZWFjdC51c2VSZWY8bnVtYmVyPihudWxsKVxyXG4gIGNvbnN0IGRvU2VsZWN0aW9uQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGlvblRvQmVDaGFuZ2VEc0lkcy5jdXJyZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGltZXIuY3VycmVudCAhPT0gbnVsbCAmJiB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpXHJcbiAgICAgIHRpbWVyLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U/LihzZWxlY3Rpb25Ub0JlQ2hhbmdlRHNJZHMuY3VycmVudClcclxuICAgICAgICBzZWxlY3Rpb25Ub0JlQ2hhbmdlRHNJZHMuY3VycmVudCA9IFtdXHJcbiAgICAgIH0sIDUwMClcclxuICAgIH1cclxuICB9LCBbb25TZWxlY3Rpb25DaGFuZ2VdKVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2VDb25maXJtID0gUmVhY3QudXNlQ2FsbGJhY2soKGRzSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFzZWxlY3Rpb25Ub0JlQ2hhbmdlRHNJZHMuY3VycmVudC5pbmNsdWRlcyhkc0lkKSkge1xyXG4gICAgICBzZWxlY3Rpb25Ub0JlQ2hhbmdlRHNJZHMuY3VycmVudC5wdXNoKGRzSWQpXHJcbiAgICB9XHJcbiAgICBpZiAodW5zYXZlZENoYW5nZSkge1xyXG4gICAgICBzZXRTaG93Q29uZmlybSh0cnVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9TZWxlY3Rpb25DaGFuZ2UoKVxyXG4gICAgfVxyXG4gIH0sIFtkb1NlbGVjdGlvbkNoYW5nZSwgdW5zYXZlZENoYW5nZV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSlcclxuICAgIGRvU2VsZWN0aW9uQ2hhbmdlKClcclxuICB9LCBbZG9TZWxlY3Rpb25DaGFuZ2VdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93Q29uZmlybShmYWxzZSlcclxuICB9LCBbXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdW5zYXZlZENoYW5nZSkge1xyXG4gICAgICBkb1NlbGVjdGlvbkNoYW5nZSgpXHJcbiAgICB9XHJcbiAgfSwgW2RvU2VsZWN0aW9uQ2hhbmdlLCB1bnNhdmVkQ2hhbmdlXSlcclxuXHJcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxyXG5cclxuICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD5cclxuICAgIHt1c2VEYXRhU291cmNlcz8ubWFwKCh1c2VEczogSU1Vc2VEYXRhU291cmNlKSA9PlxyXG4gICAgICA8RWRpdEl0ZW1EYXRhU291cmNlXHJcbiAgICAgICAga2V5PXt1c2VEcy5kYXRhU291cmNlSWR9XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRHN9XHJcbiAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cclxuICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9uQ2hhbmdlQ29uZmlybX1cclxuICAgICAgICBvblNvdXJjZVZlcnNpb25DaGFuZ2U9e29uU291cmNlVmVyc2lvbkNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICl9XHJcbiAgICB7c2hvd0NvbmZpcm0gJiYgPENvbmZpcm1EaWFsb2dcclxuICAgICAgbGV2ZWw9J3dhcm5pbmcnXHJcbiAgICAgIHRpdGxlPXt0cmFuc2xhdGUoJ3NlbGVjdGlvbkNoYW5nZUNvbmZpcm1UaXRsZScpfVxyXG4gICAgICBoYXNOb3RTaG93QWdhaW5PcHRpb249e2ZhbHNlfVxyXG4gICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3NlbGVjdGlvbkNoYW5nZUNvbmZpcm1UaXBzJyl9XHJcbiAgICAgIGNvbmZpcm1MYWJlbD17dHJhbnNsYXRlKCdkaXNjYXJkQ29uZmlybScpfVxyXG4gICAgICBjYW5jZWxMYWJlbD17dHJhbnNsYXRlKCdkaXNjYXJkQ2FuY2VsJyl9XHJcbiAgICAgIG9uQ29uZmlybT17aGFuZGxlQ29uZmlybX1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2FuY2VsfVxyXG4gICAgLz59XHJcbiAgPC9SZWFjdC5GcmFnbWVudD4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRMaXN0RGF0YVNvdXJjZVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgaG9va3MsIGdldEFwcFN0b3JlLCBhcHBBY3Rpb25zLCBFeHRlbnNpb25NYW5hZ2VyLCBXaWRnZXRTdGF0ZX0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBDb25maXJtRGlhbG9nIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHR5cGUgUmVkdXhBY3Rpb25JbnRlcmNlcHRvckV4dGVuc2lvbkltcGwgZnJvbSAnLi4vLi4vdG9vbHMvcmVkdXgtYWN0aW9uLWludGVyY2VwdG9yJ1xyXG5cclxuaW50ZXJmYWNlIEVkaXRvckNsb3NlV2FybmluZ1Byb3BzIHtcclxuICBpZDogc3RyaW5nXHJcbiAgZm9ybUNoYW5nZTogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBFZGl0b3JDbG9zZVdhcm5pbmcgPSAocHJvcHM6IEVkaXRvckNsb3NlV2FybmluZ1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgZm9ybUNoYW5nZSB9ID0gcHJvcHNcclxuXHJcblxyXG4gIGNvbnN0IFt3YXJuaW5nQmVmb3JlQ2xvc2UsIHNldFdhcm5pbmdCZWZvcmVDbG9zZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaXNIaWRkZW4sIHNldElzSGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXHJcblxyXG4gIGNvbnN0IGFjdGlvbkludGVyY2VwdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gRXh0ZW5zaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEV4dGVuc2lvbkJ5SWQoYCR7aWR9LXJlZHV4QWN0aW9uSW50ZXJjZXB0b3JgKSBhcyBSZWR1eEFjdGlvbkludGVyY2VwdG9yRXh0ZW5zaW9uSW1wbFxyXG4gIH0sIFtpZF0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1DbG9zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFdhcm5pbmdCZWZvcmVDbG9zZShmYWxzZSlcclxuICAgIGlmIChhY3Rpb25JbnRlcmNlcHRvcikgYWN0aW9uSW50ZXJjZXB0b3IuY29uZmlybUNsb3NlID0gdHJ1ZVxyXG4gICAgaWYgKGlzSGlkZGVuKSB7XHJcbiAgICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRSdW50aW1lSW5mb0NoYW5nZShpZCwgJ3N0YXRlJywgV2lkZ2V0U3RhdGUuSGlkZGVuKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy5jbG9zZVdpZGdldChpZCkpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGlvbkludGVyY2VwdG9yLCBpZCwgaXNIaWRkZW5dKVxyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxDbG9zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFdhcm5pbmdCZWZvcmVDbG9zZShmYWxzZSlcclxuICB9LCBbXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYWN0aW9uSW50ZXJjZXB0b3IpIHJldHVyblxyXG4gICAgYWN0aW9uSW50ZXJjZXB0b3IuZm9ybUNoYW5nZSA9IGZvcm1DaGFuZ2VcclxuICB9LCBbYWN0aW9uSW50ZXJjZXB0b3IsIGZvcm1DaGFuZ2VdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhY3Rpb25JbnRlcmNlcHRvcikgcmV0dXJuXHJcbiAgICBhY3Rpb25JbnRlcmNlcHRvci5zaG93V2FybmluZ0JlZm9yZUNsb3NlID0gKGlzSGlkZGVuQWN0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHNldElzSGlkZGVuKGlzSGlkZGVuQWN0aW9uKVxyXG4gICAgICBzZXRXYXJuaW5nQmVmb3JlQ2xvc2UodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbYWN0aW9uSW50ZXJjZXB0b3JdKVxyXG5cclxuICByZXR1cm4gd2FybmluZ0JlZm9yZUNsb3NlICYmIDxDb25maXJtRGlhbG9nXHJcbiAgICBsZXZlbD0nd2FybmluZydcclxuICAgIHRpdGxlPXt0cmFuc2xhdGUoJ3NlbGVjdGlvbkNoYW5nZUNvbmZpcm1UaXRsZScpfVxyXG4gICAgaGFzTm90U2hvd0FnYWluT3B0aW9uPXtmYWxzZX1cclxuICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc2VsZWN0aW9uQ2hhbmdlQ29uZmlybVRpcHMnKX1cclxuICAgIGNvbmZpcm1MYWJlbD17dHJhbnNsYXRlKCdkaXNjYXJkQ29uZmlybScpfVxyXG4gICAgY2FuY2VsTGFiZWw9e3RyYW5zbGF0ZSgnZGlzY2FyZENhbmNlbCcpfVxyXG4gICAgb25Db25maXJtPXtoYW5kbGVDb25maXJtQ2xvc2V9XHJcbiAgICBvbkNsb3NlPXtoYW5kbGVDYW5jZWxDbG9zZX1cclxuICAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JDbG9zZVdhcm5pbmdcclxuIiwiaW1wb3J0IHtcclxuICBSZWFjdCwgSW1tdXRhYmxlLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgdHlwZSBEYXRhU291cmNlVHlwZXMsIHR5cGUgSW1tdXRhYmxlQXJyYXksXHJcbiAgdHlwZSBGZWF0dXJlRGF0YVJlY29yZCwgZGF0YVNvdXJjZVV0aWxzLCBob29rcywgY3NzLCB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZXNcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IFBhcGVyLCBXaWRnZXRQbGFjZWhvbGRlciwgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xyXG5pbXBvcnQgKiBhcyByZWFjdGl2ZVV0aWxzIGZyb20gJ2VzcmkvY29yZS9yZWFjdGl2ZVV0aWxzJ1xyXG5pbXBvcnQgZWRpdFdpZGdldEljb24gZnJvbSAnLi4vLi4vLi4vaWNvbi5zdmcnXHJcbmltcG9ydCB7IGdldERhdGFTb3VyY2VCeUlkLCBnZXRGbGF0Rm9ybUVsZW1lbnRzLCBzdXBwb3J0ZWREc1R5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7XHJcbiAgdHlwZSBFZGl0RmVhdHVyZXMsIGZlYXR1cmVGb3JtU3R5bGUsIGZsYXRNYXBBcnJheVdpdGhWaWV3LCBpZHNBcnJheUVxdWFscywgcXVlcnlGdWxsRmVhdHVyZXMsXHJcbiAgdXNlQ2FsY2l0ZUNvbG9yTWFwcGluZ1xyXG59IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBFZGl0TGlzdERhdGFTb3VyY2UgZnJvbSAnLi9lZGl0LWxpc3QtZHMnXHJcbmltcG9ydCBFZGl0b3JDbG9zZVdhcm5pbmcgZnJvbSAnLi9lZGl0b3ItY2xvc2Utd2FybmluZydcclxuaW1wb3J0IHVzZUVkaXRvciBmcm9tICcuL3VzZS1lZGl0b3InXHJcbmltcG9ydCB0eXBlIHsgQ29tbW9uUHJvcHMgfSBmcm9tICcuLi93aWRnZXQnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCBFZGl0b3JDb3B5UGFzdGUgZnJvbSAnLi9lZGl0b3ItY29weS1wYXN0ZSdcclxuXHJcbmludGVyZmFjZSBFZGl0b3JDb21wb25lbnRQcm9wcyBleHRlbmRzIENvbW1vblByb3BzIHtcclxuICBpZDogc3RyaW5nXHJcbiAgdXNlTWFwV2lkZ2V0SWRzOiBJbW11dGFibGVBcnJheTxzdHJpbmc+XHJcbiAgdmlzaWJsZTogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBnZXRXaWRnZXRTdHlsZSA9ICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcykgPT4gY3NzYFxyXG4gICR7ZmVhdHVyZUZvcm1TdHlsZX1cclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4td2lkdGg6IDI2MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDc2cHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgLS1jYWxjaXRlLWZsb3ctaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuc3lzLmNvbG9yLnN1cmZhY2UucGFwZXJ9O1xyXG4gIC0tY2FsY2l0ZS1mbG93LWhlYWRpbmctdGV4dC1jb2xvcjogJHt0aGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5wYXBlclRleHR9O1xyXG4gIC0tY2FsY2l0ZS1mbG93LWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnN5cy5jb2xvci5zdXJmYWNlLnBhcGVyfTtcclxuICAtLWNhbGNpdGUtcGFuZWwtZm9vdGVyLXRleHQtY29sb3I6ICR7dGhlbWUuc3lzLmNvbG9yLnN1cmZhY2UucGFwZXJUZXh0fTtcclxuICAtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taGVhZGluZy10ZXh0LWNvbG9yOiAke3RoZW1lLnN5cy5jb2xvci5zdXJmYWNlLnBhcGVyVGV4dH07XHJcbiAgLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWV4cGFuZC1pY29uLWNvbG9yOiAke3RoZW1lLnN5cy5jb2xvci5zdXJmYWNlLnBhcGVyVGV4dH07XHJcbiAgLS1jYWxjaXRlLWFjdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnN5cy5jb2xvci5hY3Rpb24uZGVmYXVsdH07XHJcbiAgLS1jYWxjaXRlLWFjdGlvbi10ZXh0LWNvbG9yOiAke3RoZW1lLnN5cy5jb2xvci5hY3Rpb24udGV4dH07XHJcbiAgLS1jYWxjaXRlLWFjdGlvbi1iYWNrZ3JvdW5kLWNvbG9yLXByZXNzOiAke3RoZW1lLnN5cy5jb2xvci5hY3Rpb24ucHJlc3NlZH07XHJcbiAgLS1jYWxjaXRlLWFjdGlvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAke3RoZW1lLnN5cy5jb2xvci5hY3Rpb24uaG92ZXJ9O1xyXG4gIC0tY2FsY2l0ZS1hY3Rpb24tdGV4dC1jb2xvci1wcmVzczogJHt0aGVtZS5zeXMuY29sb3IuYWN0aW9uLnRleHR9O1xyXG4gIC0tY2FsY2l0ZS1saXN0LWNvbnRlbnQtdGV4dC1jb2xvcjogJHt0aGVtZS5zeXMuY29sb3IuYWN0aW9uLnRleHR9O1xyXG4gIC0tY2FsY2l0ZS1saXN0LWxhYmVsLXRleHQtY29sb3I6ICR7dGhlbWUuc3lzLmNvbG9yLmFjdGlvbi50ZXh0fTtcclxuICAtLWNhbGNpdGUtbGlzdC1kZXNjcmlwdGlvbi10ZXh0LWNvbG9yOiAke3RoZW1lLnN5cy5jb2xvci5hY3Rpb24udGV4dH07XHJcblxyXG4gICYud2lkZ2V0LWVkaXQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2ltcGxlLWNvbW1lbnQtYnV0dG9uLXJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMzA7XHJcbiAgfVxyXG5cclxuICAuc2ltcGxlLWNvbW1lbnQtYnV0dG9uLXJvdyAuamltdS1idG4ge1xyXG4gICAgbWluLXdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogNThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgcGFkZGluZzogMTJweCAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNGY4Y2ZmIDAlLCAjMmY2ZmU2IDQ4JSwgIzFmNTViZCAxMDAlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMsIDc5LCAxODEsIC45NSk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAwIDlweCAxOHB4IHJnYmEoMCwgMCwgMCwgLjM1KSxcclxuICAgICAgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjI4KSxcclxuICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC40MiksXHJcbiAgICAgIGluc2V0IDAgLTJweCAwIHJnYmEoMCwgMCwgMCwgLjE2KTtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMzUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xMnMgZWFzZSwgYm94LXNoYWRvdyAuMTJzIGVhc2UsIGZpbHRlciAuMTJzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuc2ltcGxlLWNvbW1lbnQtYnV0dG9uLXJvdyAuamltdS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDQpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgMCAxMXB4IDIwcHggcmdiYSgwLCAwLCAwLCAuMzgpLFxyXG4gICAgICAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMyksXHJcbiAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNDgpLFxyXG4gICAgICBpbnNldCAwIC0ycHggMCByZ2JhKDAsIDAsIDAsIC4xNik7XHJcbiAgfVxyXG5cclxuICAuc2ltcGxlLWNvbW1lbnQtYnV0dG9uLXJvdyAuamltdS1idG46YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIC4zMiksXHJcbiAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4yMik7XHJcbiAgfVxyXG5cclxuICAuc2ltcGxlLWNvbW1lbnQtYnV0dG9uLXJvdyAuamltdS1idG46ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogLjcyO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcblxyXG4gIC5zaW1wbGUtY29tbWVudC1lZGl0b3ItcGFuZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDc4cHg7XHJcblxyXG4gICAgLypcclxuICAgICAgS2VlcCB0aGUgZWRpdG9yIHBhbmVsIGluc2lkZSB0aGUgRXhwZXJpZW5jZSBCdWlsZGVyIHdpZGdldCBib3guXHJcbiAgICAgIFRoaXMgYXZvaWRzIGxlZnQvcmlnaHQgY2xpcHBpbmcgd2hlbiB0aGUgYXBwIGlzIHZpZXdlZCBvbiBzbWFsbGVyIHNjcmVlbnNcclxuICAgICAgb3Igd2hlbiBEZXZUb29scyByZWR1Y2VzIHRoZSBhdmFpbGFibGUgcGFnZSB3aWR0aC5cclxuICAgICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzhweCk7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMyZjJmMmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgIDAgMThweCAzNnB4IHJnYmEoMCwgMCwgMCwgLjQyKSxcclxuICAgICAgMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIC4yOCk7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICB9XHJcblxyXG4gIC5zaW1wbGUtY29tbWVudC1lZGl0b3ItcGFuZWwuZC1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2ltcGxlLWNvbW1lbnQtZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNpbXBsZS1jb21tZW50LXBhbmVsLWNhbmNlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgbWluLXdpZHRoOiA5NnB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1NTUgMCUsICMzYzNjM2MgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjI1KSxcclxuICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xOCk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnNpbXBsZS1jb21tZW50LXBhbmVsLWNhbmNlbDpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wOCk7XHJcbiAgfVxyXG5cclxuICAuZXNyaS1lZGl0b3IsXHJcbiAgLmVzcmktZWRpdG9yX19zY3JvbGxlcixcclxuICAuZXNyaS1lZGl0b3JfX3BhbmVsLWNvbnRlbnQsXHJcbiAgLmVzcmktZWRpdG9yX19jb250ZW50LWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZjJmMmY7XHJcbiAgfVxyXG5cclxuICAuZXNyaS1lZGl0b3JfX3BhbmVsLXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5wYXBlcn07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5wYXBlclRleHR9O1xyXG4gIH1cclxuXHJcbiAgLmVzcmktc2tldGNoLXRvb2x0aXAtY29udHJvbHNfX2Jsb2NrLFxyXG4gIC5lc3JpLXNuYXBwaW5nLWNvbnRyb2xzX190b2dnbGUtYmxvY2ssXHJcbiAgLmVzcmktc25hcHBpbmctY29udHJvbHNfX2xheWVyLWxpc3QtYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5wYXBlcn07XHJcbiAgICBjb2xvcjogJHt0aGVtZS5zeXMuY29sb3Iuc3VyZmFjZS5wYXBlclRleHR9O1xyXG4gIH1cclxuICBcclxuICAuc2ltcGxlLWNvbW1lbnQtZWRpdG9yLXBhbmVsIGNhbGNpdGUtYWN0aW9uLmJhY2stYnV0dG9uW2FyaWEtbGFiZWw9J0JhY2snXSxcclxuICAuc2ltcGxlLWNvbW1lbnQtZWRpdG9yLXBhbmVsIGNhbGNpdGUtYWN0aW9uLmJhY2stYnV0dG9uW3RpdGxlPSdCYWNrJ10sXHJcbiAgLnNpbXBsZS1jb21tZW50LWVkaXRvci1wYW5lbCBjYWxjaXRlLWFjdGlvbi5iYWNrLWJ1dHRvbltpY29uPSdjaGV2cm9uLWxlZnQnXSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCB0eXBlIFBhc3RlU3RlcCA9ICdyZWFkeScgfCAncGFzdGUnIHwgJ3Bhc3RlU3BlY2lhbCdcclxuXHJcbmNvbnN0IGhpZGVFZGl0b3JCYWNrQnV0dG9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhpZGVGcm9tUm9vdCA9IChyb290OiBEb2N1bWVudCB8IFNoYWRvd1Jvb3QgfCBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYmFja0FjdGlvbnMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGw/LihcclxuICAgICAgXCJjYWxjaXRlLWFjdGlvbi5iYWNrLWJ1dHRvblthcmlhLWxhYmVsPSdCYWNrJ10sIGNhbGNpdGUtYWN0aW9uLmJhY2stYnV0dG9uW3RpdGxlPSdCYWNrJ10sIGNhbGNpdGUtYWN0aW9uLmJhY2stYnV0dG9uW2ljb249J2NoZXZyb24tbGVmdCddXCJcclxuICAgIClcclxuXHJcbiAgICBiYWNrQWN0aW9ucz8uZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBhY3Rpb24gYXMgSFRNTEVsZW1lbnRcclxuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMCdcclxuICAgICAgZWxlbWVudC5zdHlsZS5taW5XaWR0aCA9ICcwJ1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMCdcclxuICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMCdcclxuICAgIH0pXHJcblxyXG4gICAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsPy4oJyonKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gKGVsIGFzIEhUTUxFbGVtZW50KS5zaGFkb3dSb290XHJcbiAgICAgIGlmIChzaGFkb3dSb290KSB7XHJcbiAgICAgICAgaGlkZUZyb21Sb290KHNoYWRvd1Jvb3QpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW1wbGUtY29tbWVudC1lZGl0b3ItcGFuZWwnKSBhcyBIVE1MRWxlbWVudFxyXG4gIGlmIChwYW5lbCkge1xyXG4gICAgaGlkZUZyb21Sb290KHBhbmVsKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBoaWRlRnJvbVJvb3QoZG9jdW1lbnQpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBFZGl0b3JDb21wb25lbnQgPSAocHJvcHM6IEVkaXRvckNvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgY29uZmlnLCBjYW5FZGl0RmVhdHVyZSwgdXNlTWFwV2lkZ2V0SWRzLCB2aXNpYmxlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgbWFwVmlld3NDb25maWcsIGJhdGNoRWRpdGluZyA9IGZhbHNlLCBhZHZhbmNlZEVkaXRpbmdUb29scyA9IHRydWUsIGNvcHlQYXN0ZSB9ID0gY29uZmlnXHJcblxyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXHJcbiAgY29uc3QgW21hcFVzZURhdGFTb3VyY2VzLCBzZXRNYXBVc2VEYXRhU291cmNlc10gPSBSZWFjdC51c2VTdGF0ZTxJTVVzZURhdGFTb3VyY2VbXT4oKVxyXG4gIGNvbnN0IFtlZGl0RmVhdHVyZXMsIHNldEVkaXRGZWF0dXJlc10gPSBSZWFjdC51c2VTdGF0ZTxFZGl0RmVhdHVyZXM+KHt9KVxyXG4gIGNvbnN0IFtwYXN0ZVN0ZXAsIHNldFBhc3RlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxQYXN0ZVN0ZXA+KCdyZWFkeScpXHJcbiAgY29uc3QgW2NvbW1lbnRFZGl0b3JPcGVuLCBzZXRDb21tZW50RWRpdG9yT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG5cclxuICBjb25zdCBlZGl0Q29udGFpbmVyID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IGVkaXRvciA9IHVzZUVkaXRvcih7XHJcbiAgICBjb25maWcsXHJcbiAgICBqaW11TWFwVmlldyxcclxuICAgIGVkaXRDb250YWluZXIsXHJcbiAgICBjYW5FZGl0RmVhdHVyZVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZURhdGFTb3VyY2VzQnlMYXllckluZm9zID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKGxheWVySW5mb3M6IF9fZXNyaS5FZGl0b3JMYXllckluZm9bXSkgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldyB8fCBqaW11TWFwVmlldy5pc0Rlc3Ryb3llZCgpIHx8ICFsYXllckluZm9zKSByZXR1cm5cclxuICAgIGNvbnN0IHZpZXdDb25maWcgPSBtYXBWaWV3c0NvbmZpZz8uW2ppbXVNYXBWaWV3LmlkXVxyXG4gICAgY29uc3QgY3VzdG9taXplTGF5ZXJzID0gdmlld0NvbmZpZz8uY3VzdG9taXplTGF5ZXJzXHJcbiAgICBjb25zdCBjdXN0b21KaW11TGF5ZXJWaWV3SWRzID0gdmlld0NvbmZpZz8uY3VzdG9tSmltdUxheWVyVmlld0lkc1xyXG4gICAgY29uc3QgbmV3TWFwVXNlRGF0YVNvdXJjZXMgPSBbXVxyXG4gICAgZm9yIChjb25zdCBsYXllckluZm8gb2YgbGF5ZXJJbmZvcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICghbGF5ZXJJbmZvLmVuYWJsZWQgfHwgKGxheWVySW5mby5sYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyKS5pc1RhYmxlKSBjb250aW51ZVxyXG4gICAgICAgIGNvbnN0IGppbXVMYXllclZpZXdJZCA9IGppbXVNYXBWaWV3LmdldEppbXVMYXllclZpZXdJZEJ5QVBJTGF5ZXIobGF5ZXJJbmZvLmxheWVyKVxyXG4gICAgICAgIGlmIChjdXN0b21pemVMYXllcnMgJiYgIWN1c3RvbUppbXVMYXllclZpZXdJZHM/LmluY2x1ZGVzKGppbXVMYXllclZpZXdJZCkpIGNvbnRpbnVlXHJcbiAgICAgICAgY29uc3QgamltdUxheWVyVmlldyA9IGF3YWl0IGppbXVNYXBWaWV3LndoZW5KaW11TGF5ZXJWaWV3TG9hZGVkKGppbXVMYXllclZpZXdJZClcclxuICAgICAgICBjb25zdCBsYXllckRzID0gamltdUxheWVyVmlldy5nZXRMYXllckRhdGFTb3VyY2UoKVxyXG4gICAgICAgIGlmICghbGF5ZXJEcyB8fCAhc3VwcG9ydGVkRHNUeXBlcy5pbmNsdWRlcyhsYXllckRzLnR5cGUgYXMgRGF0YVNvdXJjZVR5cGVzKSkgY29udGludWVcclxuICAgICAgICBjb25zdCBtYWluRHMgPSBsYXllckRzLmdldE1haW5EYXRhU291cmNlKClcclxuICAgICAgICBjb25zdCByb290RHMgPSBsYXllckRzLmdldFJvb3REYXRhU291cmNlKClcclxuICAgICAgICBjb25zdCB1c2VkRHM6IElNVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IGxheWVyRHMuaWQsXHJcbiAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBtYWluRHM/LmlkLFxyXG4gICAgICAgICAgZGF0YVZpZXdJZDogbGF5ZXJEcy5kYXRhVmlld0lkLFxyXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogcm9vdERzPy5pZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbmV3TWFwVXNlRGF0YVNvdXJjZXMucHVzaCh1c2VkRHMpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRNYXBVc2VEYXRhU291cmNlcyhuZXdNYXBVc2VEYXRhU291cmNlcylcclxuICB9LCBbamltdU1hcFZpZXcsIG1hcFZpZXdzQ29uZmlnXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQWN0aXZlVmlld0NoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIHNldEppbXVNYXBWaWV3KGppbXVNYXBWaWV3KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzdGFydFdvcmtmbG93ID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKGZlYXR1cmVzOiBFZGl0RmVhdHVyZXMpID0+IHtcclxuICAgIGlmICghZWRpdG9yIHx8ICFqaW11TWFwVmlldyB8fCBzZWxlY3Rpb25Gcm9tRWRpdG9yLmN1cnJlbnQpIHJldHVyblxyXG4gICAgaWYgKGVkaXRvci5hY3RpdmVXb3JrZmxvdykge1xyXG4gICAgICBlZGl0b3IuY2FuY2VsV29ya2Zsb3coKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGlvbk1hbmFnZXIgPSAoZWRpdG9yIGFzIGFueSkuZWZmZWN0aXZlU2VsZWN0aW9uTWFuYWdlclxyXG4gICAgY29uc3QgZmVhdHVyZVJlY29yZHMgPSBmbGF0TWFwQXJyYXlXaXRoVmlldyhmZWF0dXJlcywgamltdU1hcFZpZXcpXHJcbiAgICBpZiAoZmVhdHVyZVJlY29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNlbGVjdGlvbk1hbmFnZXI/Lmhhc1NlbGVjdGlvbiAmJiBzZWxlY3Rpb25NYW5hZ2VyLmNsZWFyKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdGlvbkZyb21FeGIuY3VycmVudCA9IHRydWVcclxuICAgICAgbGV0IGZ1bGxGZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSA9IFtdXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZnVsbEZlYXR1cmVzID0gYXdhaXQgcXVlcnlGdWxsRmVhdHVyZXMoamltdU1hcFZpZXcsIGZlYXR1cmVzKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gcXVlcnkgZWRpdGluZyBmZWF0dXJlczonLCBlcnIpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZ1bGxGZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzZWxlY3Rpb25NYW5hZ2VyPy5oYXNTZWxlY3Rpb24gJiYgc2VsZWN0aW9uTWFuYWdlci5jbGVhcigpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gZmVhdHVyZXMgZm91bmQgZm9yIHRoZSBzZWxlY3RlZCBkYXRhIHJlY29yZHMuJylcclxuICAgICAgfSBlbHNlIGlmIChmdWxsRmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgc2VsZWN0aW9uTWFuYWdlcj8uaGFzU2VsZWN0aW9uICYmIHNlbGVjdGlvbk1hbmFnZXIuY2xlYXIoKVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUZlYXR1cmUgPSBmdWxsRmVhdHVyZXNbMF1cclxuICAgICAgICBlZGl0b3Iuc3RhcnRVcGRhdGVXb3JrZmxvd0F0RmVhdHVyZUVkaXQoYWN0aXZlRmVhdHVyZSlcclxuICAgICAgfSBlbHNlIGlmIChmdWxsRmVhdHVyZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGlmIChqaW11TWFwVmlldy52aWV3LnR5cGUgPT09ICcyZCcgJiYgYmF0Y2hFZGl0aW5nKSB7XHJcbiAgICAgICAgICBzZWxlY3Rpb25NYW5hZ2VyPy5oYXNTZWxlY3Rpb24gJiYgc2VsZWN0aW9uTWFuYWdlci5jbGVhcigpXHJcbiAgICAgICAgICBzZWxlY3Rpb25NYW5hZ2VyICYmIHNlbGVjdGlvbk1hbmFnZXIudXBkYXRlU2VsZWN0aW9uKHtcclxuICAgICAgICAgICAgY3VycmVudDogZnVsbEZlYXR1cmVzLFxyXG4gICAgICAgICAgICBhZGRlZDogW10sXHJcbiAgICAgICAgICAgIHJlbW92ZWQ6IFtdLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWRpdG9yLnN0YXJ0VXBkYXRlV29ya2Zsb3dBdE11bHRpcGxlRmVhdHVyZVNlbGVjdGlvbihmdWxsRmVhdHVyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2JhdGNoRWRpdGluZywgZWRpdG9yLCBqaW11TWFwVmlld10pXHJcblxyXG4gIGNvbnN0IHN0YXJ0Q29tbWVudHNDcmVhdGVXb3JrZmxvdyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghZWRpdG9yKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBjb21tZW50c0xheWVySW5mbyA9IGVkaXRvci5sYXllckluZm9zPy5maW5kKChsYXllckluZm8pID0+IHtcclxuICAgICAgcmV0dXJuIChsYXllckluZm8ubGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcikudGl0bGUgPT09ICdDb21tZW50cydcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFjb21tZW50c0xheWVySW5mbyB8fCAhY29tbWVudHNMYXllckluZm8uYWRkRW5hYmxlZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgZmluZCBlZGl0YWJsZSBDb21tZW50cyBsYXllci4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb21tZW50c0xheWVyID0gY29tbWVudHNMYXllckluZm8ubGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllclxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBjb21tZW50c0xheWVyLnRlbXBsYXRlcz8uWzBdXHJcblxyXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgZmluZCBhIGZlYXR1cmUgdGVtcGxhdGUgZm9yIHRoZSBDb21tZW50cyBsYXllci4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWRpdG9yLmFjdGl2ZVdvcmtmbG93KSB7XHJcbiAgICAgIGVkaXRvci5jYW5jZWxXb3JrZmxvdygpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29tbWVudEVkaXRvck9wZW4odHJ1ZSlcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgOyhlZGl0b3IgYXMgYW55KS5zdGFydENyZWF0ZUZlYXR1cmVzV29ya2Zsb3dBdEZlYXR1cmVDcmVhdGlvbih7XHJcbiAgICAgICAgICBsYXllcjogY29tbWVudHNMYXllcixcclxuICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzdGFydCBDb21tZW50cyBjcmVhdGUgd29ya2Zsb3c6JywgZXJyKVxyXG4gICAgICB9XHJcbiAgICB9LCAyNTApXHJcbiAgfSwgW2VkaXRvcl0pXHJcblxyXG4gIGNvbnN0IGNsb3NlQ29tbWVudHNDcmVhdGVXb3JrZmxvdyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChlZGl0b3I/LmFjdGl2ZVdvcmtmbG93KSB7XHJcbiAgICAgIGVkaXRvci5jYW5jZWxXb3JrZmxvdygpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGppbXVNYXBWaWV3Py52aWV3Py5jb250YWluZXIpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gamltdU1hcFZpZXcudmlldy5jb250YWluZXIgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbW1lbnRFZGl0b3JPcGVuKGZhbHNlKVxyXG4gIH0sIFtlZGl0b3IsIGppbXVNYXBWaWV3XSlcclxuXHJcbiAgY29uc3QgZmluaXNoQ29tbWVudHNDcmVhdGVXb3JrZmxvdyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoZWRpdG9yPy5hY3RpdmVXb3JrZmxvdykge1xyXG4gICAgICAgICAgZWRpdG9yLmNhbmNlbFdvcmtmbG93KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChqaW11TWFwVmlldz8udmlldz8uY29udGFpbmVyKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBqaW11TWFwVmlldy52aWV3LmNvbnRhaW5lciBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNsb3NlIGNvbW1lbnQgY3JlYXRlIHdvcmtmbG93OicsIGVycilcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0Q29tbWVudEVkaXRvck9wZW4oZmFsc2UpXHJcbiAgICB9LCA4MDApXHJcbiAgfSwgW2VkaXRvciwgamltdU1hcFZpZXddKVxyXG5cclxuICBjb25zdCBzZWxlY3Rpb25Gcm9tRWRpdG9yID0gUmVhY3QudXNlUmVmKGZhbHNlKVxyXG4gIGNvbnN0IHNlbGVjdGlvbkZyb21FeGIgPSBSZWFjdC51c2VSZWYoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbkNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChkYXRhU291cmNlSWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgY29uc3QgbmV3RWRpdEZlYXR1cmVzID0gT2JqZWN0LmFzc2lnbih7fSwgZWRpdEZlYXR1cmVzKVxyXG4gICAgZm9yIChjb25zdCBkYXRhU291cmNlSWQgb2YgZGF0YVNvdXJjZUlkcykge1xyXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0RGF0YVNvdXJjZUJ5SWQoZGF0YVNvdXJjZUlkKVxyXG4gICAgICBpZiAoIWRhdGFTb3VyY2UpIGNvbnRpbnVlXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkUmVjb3JkcyA9IGRhdGFTb3VyY2UuZ2V0U2VsZWN0ZWRSZWNvcmRzKClcclxuICAgICAgbmV3RWRpdEZlYXR1cmVzW2RhdGFTb3VyY2VJZF0gPSBzZWxlY3RlZFJlY29yZHNcclxuICAgIH1cclxuICAgIHNldEVkaXRGZWF0dXJlcyhuZXdFZGl0RmVhdHVyZXMpXHJcbiAgICBpZiAoc2VsZWN0aW9uRnJvbUVkaXRvci5jdXJyZW50KSB7XHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZWxlY3Rpb25Gcm9tRWRpdG9yLmN1cnJlbnQgPSBmYWxzZVxyXG4gICAgICB9LCA1MClcclxuICAgIH0gZWxzZSBpZiAodmlzaWJsZSAmJiBjb21tZW50RWRpdG9yT3Blbikge1xyXG4gICAgICBzdGFydFdvcmtmbG93KG5ld0VkaXRGZWF0dXJlcylcclxuICAgIH1cclxuICB9LCBbY29tbWVudEVkaXRvck9wZW4sIGVkaXRGZWF0dXJlcywgc3RhcnRXb3JrZmxvdywgdmlzaWJsZV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvdXJjZVZlcnNpb25DaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygoZGF0YVNvdXJjZUlkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGZlYXR1cmVSZWNvcmRzID0gZmxhdE1hcEFycmF5V2l0aFZpZXcoZWRpdEZlYXR1cmVzLCBqaW11TWFwVmlldylcclxuICAgIGNvbnN0IGZlYXR1cmVDb3VudCA9IGZlYXR1cmVSZWNvcmRzLmxlbmd0aFxyXG4gICAgaWYgKCFlZGl0b3I/LnZpZXdNb2RlbC5zeW5jaW5nIHx8IGZlYXR1cmVDb3VudCA9PT0gMSkge1xyXG4gICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoW2RhdGFTb3VyY2VJZF0pXHJcbiAgICB9XHJcbiAgfSwgW2VkaXRGZWF0dXJlcywgZWRpdG9yLCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UsIGppbXVNYXBWaWV3XSlcclxuXHJcbiAgY29uc3QgZWRpdEZlYXR1cmVSZWYgPSBob29rcy51c2VMYXRlc3QoZWRpdEZlYXR1cmVzKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmlzaWJsZSAmJiBjb21tZW50RWRpdG9yT3BlbiAmJiAhZWRpdG9yPy5hY3RpdmVXb3JrZmxvdz8uc3RhcnRlZCkge1xyXG4gICAgICBzdGFydFdvcmtmbG93KGVkaXRGZWF0dXJlUmVmLmN1cnJlbnQpXHJcbiAgICB9XHJcbiAgICBpZiAoIXZpc2libGUgJiYgZWRpdG9yPy5hY3RpdmVXb3JrZmxvdz8uc3RhcnRlZCkge1xyXG4gICAgICBlZGl0b3IuYWN0aXZlV29ya2Zsb3cuY2FuY2VsKClcclxuICAgICAgc2V0Q29tbWVudEVkaXRvck9wZW4oZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW2NvbW1lbnRFZGl0b3JPcGVuLCBlZGl0RmVhdHVyZVJlZiwgZWRpdG9yLCBzdGFydFdvcmtmbG93LCB2aXNpYmxlXSlcclxuXHJcbiAgY29uc3QgW2Zvcm1DaGFuZ2UsIHNldEZvcm1DaGFuZ2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgcHJldmlvdXNSb290RmVhdHVyZXMgPSBSZWFjdC51c2VSZWY8X19lc3JpLkdyYXBoaWNbXT4oW10pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWVkaXRvciB8fCAhamltdU1hcFZpZXcpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGlvbk1hbmFnZXIgPSAoZWRpdG9yIGFzIGFueSkuZWZmZWN0aXZlU2VsZWN0aW9uTWFuYWdlclxyXG4gICAgY29uc3Qgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlID0gamltdU1hcFZpZXcudmlldy50eXBlID09PSAnMmQnICYmIGJhdGNoRWRpdGluZyAmJiBzZWxlY3Rpb25NYW5hZ2VyLm9uKCdzZWxlY3Rpb24tY2hhbmdlJywgYXN5bmMgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoc2VsZWN0aW9uRnJvbUV4Yi5jdXJyZW50KSB7XHJcbiAgICAgICAgc2VsZWN0aW9uRnJvbUV4Yi5jdXJyZW50ID0gZmFsc2VcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCByb290RHMgPSBqaW11TWFwVmlldy5nZXRNYXBEYXRhU291cmNlKClcclxuICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgKGV2dC5jaGFuZ2VzIHx8IFtdKSkge1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gY2hhbmdlLmxheWVyXHJcbiAgICAgICAgaWYgKCFsYXllcikgY29udGludWVcclxuICAgICAgICBjb25zdCBkc0lkID0gZGF0YVNvdXJjZVV0aWxzLmdldERhdGFTb3VyY2VJZEJ5SlNBUElMYXllcihyb290RHMsIGxheWVyKVxyXG4gICAgICAgIGNvbnN0IGRzID0gZ2V0RGF0YVNvdXJjZUJ5SWQoZHNJZClcclxuICAgICAgICBpZiAoIWRzKSBjb250aW51ZVxyXG4gICAgICAgIGNvbnN0IGxheWVyU2VsZWN0ZWRJZHMgPSBjaGFuZ2Uuc2VsZWN0aW9uIHx8IFtdXHJcbiAgICAgICAgY29uc3QgZHNTZWxlY3RlZElkcyA9IGRzLmdldFNlbGVjdGVkUmVjb3JkSWRzKClcclxuICAgICAgICBpZiAoIWlkc0FycmF5RXF1YWxzKGxheWVyU2VsZWN0ZWRJZHMsIGRzU2VsZWN0ZWRJZHMpICYmIChsYXllclNlbGVjdGVkSWRzLmxlbmd0aCAhPT0gMCB8fCBkc1NlbGVjdGVkSWRzLmxlbmd0aCAhPT0gMCkpIHtcclxuICAgICAgICAgIGlmIChsYXllclNlbGVjdGVkSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBkcy5jbGVhclNlbGVjdGlvbigpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZWNvcmRzID0gKGF3YWl0IGRzLnF1ZXJ5KHtcclxuICAgICAgICAgICAgICBvYmplY3RJZHM6IGxheWVyU2VsZWN0ZWRJZHMsXHJcbiAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk/LnJlY29yZHMgYXMgRmVhdHVyZURhdGFSZWNvcmRbXVxyXG4gICAgICAgICAgICBkcy5zZWxlY3RSZWNvcmRzQnlJZHMocmVjb3Jkcy5tYXAociA9PiByLmdldElkKCkpLCByZWNvcmRzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZWN0aW9uRnJvbUVkaXRvci5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB3YXRjaENhbmRpZGF0ZXMgPSByZWFjdGl2ZVV0aWxzLndhdGNoKCgpID0+IChlZGl0b3Iudmlld01vZGVsPy5hY3RpdmVXb3JrZmxvdz8uZGF0YSBhcyBfX2VzcmkuVXBkYXRlV29ya2Zsb3dEYXRhKT8uY2FuZGlkYXRlcywgKGNhbmRpZGF0ZXMsIG9sZENhbmRpZGF0ZXMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGVkaXRvci52aWV3TW9kZWw/LmFjdGl2ZVdvcmtmbG93Py5kYXRhIGFzIGFueVxyXG4gICAgICBjb25zdCByb290RmVhdHVyZXMgPSBkYXRhPy5yb290RmVhdHVyZXM/LnRvQXJyYXk/LigpIHx8IFtdXHJcbiAgICAgIGNvbnN0IHNpbmdsZVNlbGVjdGlvbiA9IHByZXZpb3VzUm9vdEZlYXR1cmVzLmN1cnJlbnQubGVuZ3RoID09PSAwICYmIHJvb3RGZWF0dXJlcy5sZW5ndGggPT09IDFcclxuICAgICAgY29uc3Qgc2luZ2xlVW5zZWxlY3Rpb24gPSBwcmV2aW91c1Jvb3RGZWF0dXJlcy5jdXJyZW50Lmxlbmd0aCA9PT0gMSAmJiByb290RmVhdHVyZXMubGVuZ3RoID09PSAwXHJcbiAgICAgIGNvbnN0IHNpbmdsZVNlbGVjdGlvbkluQmF0Y2hNb2RlID0gKHNpbmdsZVNlbGVjdGlvbiB8fCBzaW5nbGVVbnNlbGVjdGlvbikgJiYgIXNlbGVjdGlvbk1hbmFnZXI/Lmhhc1NlbGVjdGlvblxyXG4gICAgICBpZiAoamltdU1hcFZpZXcudmlldy50eXBlID09PSAnMmQnICYmIGJhdGNoRWRpdGluZyAmJiAhc2luZ2xlU2VsZWN0aW9uSW5CYXRjaE1vZGUpIHJldHVyblxyXG4gICAgICBwcmV2aW91c1Jvb3RGZWF0dXJlcy5jdXJyZW50ID0gcm9vdEZlYXR1cmVzIHx8IFtdXHJcblxyXG4gICAgICBjb25zdCB0b29sYmFyID0gKGVkaXRvci52aWV3TW9kZWwgYXMgYW55KS5zZWxlY3Rpb25Ub29sYmFyVmlld01vZGVsXHJcbiAgICAgIGlmICh0b29sYmFyICYmIHRvb2xiYXIuYWN0aXZlT3BlcmF0aW9uKSB7XHJcbiAgICAgICAgdG9vbGJhci5jYW5jZWw/LigpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbGVjdGlvbkZyb21FeGIuY3VycmVudCB8fCBlZGl0b3Iudmlld01vZGVsLnN5bmNpbmcpIHtcclxuICAgICAgICBpZiAoY2FuZGlkYXRlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBzZWxlY3Rpb25Gcm9tRXhiLmN1cnJlbnQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2FuZGlkYXRlRmVhdHVyZXMgPSBjYW5kaWRhdGVzPy5sZW5ndGggPiAwID8gY2FuZGlkYXRlcyA6IHJvb3RGZWF0dXJlc1xyXG4gICAgICBjb25zdCBjYW5kaWRhdGVGZWF0dXJlTWFwOiB7W2xheWVySWQ6IHN0cmluZ106IF9fZXNyaS5HcmFwaGljW119ID0ge31cclxuICAgICAgZm9yIChjb25zdCBjIG9mIChjYW5kaWRhdGVGZWF0dXJlcyB8fCBbXSkpIHtcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZUZlYXR1cmVNYXBbYy5sYXllci5pZF0pIHtcclxuICAgICAgICAgIGNhbmRpZGF0ZUZlYXR1cmVNYXBbYy5sYXllci5pZF0gPSBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW5kaWRhdGVGZWF0dXJlTWFwW2MubGF5ZXIuaWRdLnB1c2goYylcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsYXllcnMgPSBlZGl0b3IubGF5ZXJJbmZvcy5tYXAobCA9PiBsLmxheWVyKVxyXG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xyXG4gICAgICAgIGNvbnN0IHJvb3REcyA9IGppbXVNYXBWaWV3LmdldE1hcERhdGFTb3VyY2UoKVxyXG4gICAgICAgIGNvbnN0IGRzSWQgPSBkYXRhU291cmNlVXRpbHMuZ2V0RGF0YVNvdXJjZUlkQnlKU0FQSUxheWVyKHJvb3REcywgbGF5ZXIpXHJcbiAgICAgICAgY29uc3QgZHMgPSBnZXREYXRhU291cmNlQnlJZChkc0lkKVxyXG4gICAgICAgIGlmICghZHMpIGNvbnRpbnVlXHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlRmVhdHVyZXMgPSBjYW5kaWRhdGVGZWF0dXJlTWFwW2xheWVyLmlkXSB8fCBbXVxyXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZUlkczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiA9IFtdXHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlUmVjb3JkcyA9IFtdXHJcbiAgICAgICAgZm9yIChjb25zdCBmZWF0dXJlIG9mIGNhbmRpZGF0ZUZlYXR1cmVzKSB7XHJcbiAgICAgICAgICBjb25zdCByZWNvcmQgPSBkcy5idWlsZFJlY29yZChmZWF0dXJlKVxyXG4gICAgICAgICAgY2FuZGlkYXRlUmVjb3Jkcy5wdXNoKHJlY29yZClcclxuICAgICAgICAgIGNhbmRpZGF0ZUlkcy5wdXNoKHJlY29yZC5nZXRJZCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWxlY3RlZElkcyA9IGRzLmdldFNlbGVjdGVkUmVjb3JkSWRzKClcclxuICAgICAgICBpZiAoIWlkc0FycmF5RXF1YWxzKHNlbGVjdGVkSWRzLCBjYW5kaWRhdGVJZHMpICYmIChzZWxlY3RlZElkcy5sZW5ndGggIT09IDAgfHwgY2FuZGlkYXRlSWRzLmxlbmd0aCAhPT0gMCkpIHtcclxuICAgICAgICAgIGNvbnN0IGFsbFdpdGhHZW9tZXRyeSA9IGNhbmRpZGF0ZVJlY29yZHMuZXZlcnkociA9PiByLmZlYXR1cmUuZ2VvbWV0cnkpXHJcbiAgICAgICAgICBpZiAoYWxsV2l0aEdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgIGRzLnNlbGVjdFJlY29yZHNCeUlkcyhjYW5kaWRhdGVJZHMsIGNhbmRpZGF0ZVJlY29yZHMpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkcy5xdWVyeSh7XHJcbiAgICAgICAgICAgICAgb2JqZWN0SWRzOiBjYW5kaWRhdGVJZHMsXHJcbiAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVjb3JkcyA9IChyZXN1bHQ/LnJlY29yZHMgfHwgW10pIGFzIEZlYXR1cmVEYXRhUmVjb3JkW11cclxuICAgICAgICAgICAgICBkcy5zZWxlY3RSZWNvcmRzQnlJZHMoY2FuZGlkYXRlSWRzLCByZWNvcmRzKVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBxdWVyeSBmZWF0dXJlcycpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZWN0aW9uRnJvbUVkaXRvci5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB3YXRjaEZlYXR1cmVGb3JtID0gcmVhY3RpdmVVdGlscy53YXRjaCgoKSA9PiBlZGl0b3Iudmlld01vZGVsPy5mb3JtVmlld01vZGVsLCAoZm9ybVZpZXdNb2RlbCkgPT4ge1xyXG4gICAgICBpZiAoIWZvcm1WaWV3TW9kZWwpIHtcclxuICAgICAgICBzZXRGb3JtQ2hhbmdlKGZhbHNlKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnZmVhdHVyZXMnIGluIGZvcm1WaWV3TW9kZWwpIHtcclxuICAgICAgICBjb25zdCBiYXRjaEF0dHJpYnV0ZUZvcm1WaWV3TW9kZWwgPSBmb3JtVmlld01vZGVsXHJcbiAgICAgICAgYmF0Y2hBdHRyaWJ1dGVGb3JtVmlld01vZGVsLm9uKCd2YWx1ZS1jaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRGb3JtQ2hhbmdlKGJhdGNoQXR0cmlidXRlRm9ybVZpZXdNb2RlbC51c2VySGFzQ2hhbmdlZFZhbHVlcylcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKCdmZWF0dXJlJyBpbiBmb3JtVmlld01vZGVsKSB7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZUZvcm1WaWV3TW9kZWwgPSBmb3JtVmlld01vZGVsXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxGb3JtVmFsdWVzID0gZmVhdHVyZUZvcm1WaWV3TW9kZWwuZ2V0VmFsdWVzKClcclxuICAgICAgICBmZWF0dXJlRm9ybVZpZXdNb2RlbC5vbigndmFsdWUtY2hhbmdlJywgKGNoYW5nZWRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaWRGaWVsZCA9IGZlYXR1cmVGb3JtVmlld01vZGVsLmxheWVyLm9iamVjdElkRmllbGRcclxuICAgICAgICAgIGNvbnN0IGFyY2FkZUZpZWxkcyA9IGdldEZsYXRGb3JtRWxlbWVudHMoZmVhdHVyZUZvcm1WaWV3TW9kZWwuZm9ybVRlbXBsYXRlPy5lbGVtZW50cyB8fCBbXSlcclxuICAgICAgICAgICAgLm1hcChlID0+IGUudHlwZSA9PT0gJ2ZpZWxkJyAmJiBlLnZhbHVlRXhwcmVzc2lvbiAmJiBlLmZpZWxkTmFtZSkuZmlsdGVyKHYgPT4gISF2KSB8fCBbXVxyXG4gICAgICAgICAgY29uc3QgeyBmaWVsZE5hbWUgfSA9IGNoYW5nZWRWYWx1ZVxyXG4gICAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gaWRGaWVsZCB8fCBhcmNhZGVGaWVsZHMuaW5jbHVkZXMoZmllbGROYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IG5ld0Zvcm1WYWx1ZXMgPSBmZWF0dXJlRm9ybVZpZXdNb2RlbC5nZXRWYWx1ZXMoKVxyXG4gICAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlXHJcbiAgICAgICAgICBpZiAobmV3Rm9ybVZhbHVlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdGb3JtVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGFyY2FkZUZpZWxkcy5pbmNsdWRlcyhrZXkpKSBjb250aW51ZVxyXG4gICAgICAgICAgICAgIGlmIChvcmlnaW5hbEZvcm1WYWx1ZXM/LltrZXldICE9PSBuZXdGb3JtVmFsdWVzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRGb3JtQ2hhbmdlKGNoYW5nZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZlYXR1cmVGb3JtVmlld01vZGVsLm9uKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRGb3JtQ2hhbmdlKGZhbHNlKVxyXG4gICAgICAgICAgZmluaXNoQ29tbWVudHNDcmVhdGVXb3JrZmxvdygpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZWxlY3Rpb25DaGFuZ2VIYW5kbGU/LnJlbW92ZT8uKClcclxuICAgICAgd2F0Y2hDYW5kaWRhdGVzPy5yZW1vdmU/LigpXHJcbiAgICAgIHdhdGNoRmVhdHVyZUZvcm0ucmVtb3ZlKClcclxuICAgIH1cclxuICB9LCBbZWRpdG9yLCBqaW11TWFwVmlldywgYmF0Y2hFZGl0aW5nLCBmaW5pc2hDb21tZW50c0NyZWF0ZVdvcmtmbG93XSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY29tbWVudEVkaXRvck9wZW4pIHJldHVyblxyXG5cclxuICAgIGhpZGVFZGl0b3JCYWNrQnV0dG9uKClcclxuXHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGhpZGVFZGl0b3JCYWNrQnV0dG9uKClcclxuICAgIH0sIDI1MClcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsKVxyXG4gICAgfSwgMzAwMClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICAgIH1cclxuICB9LCBbY29tbWVudEVkaXRvck9wZW5dKVxyXG5cclxuICBjb25zdCBwcmV2aW91c0JhdGNoRWRpdGluZyA9IGhvb2tzLnVzZVByZXZpb3VzKGJhdGNoRWRpdGluZylcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFlZGl0b3IpIHJldHVyblxyXG4gICAgaWYgKHByZXZpb3VzQmF0Y2hFZGl0aW5nICE9PSBiYXRjaEVkaXRpbmcpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uVG9vbGJhciA9IChlZGl0b3IgYXMgYW55KS5fc2VsZWN0aW9uVG9vbGJhclxyXG4gICAgICBpZiAoIWJhdGNoRWRpdGluZyAmJiBzZWxlY3Rpb25Ub29sYmFyPy5hY3RpdmVPcGVyYXRpb24pIHtcclxuICAgICAgICBzZWxlY3Rpb25Ub29sYmFyLmNhbmNlbD8uKClcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWRpdG9yLmFjdGl2ZVdvcmtmbG93KSB7XHJcbiAgICAgICAgc3RhcnRXb3JrZmxvdyhlZGl0RmVhdHVyZXMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYmF0Y2hFZGl0aW5nLCBlZGl0RmVhdHVyZXMsIGVkaXRvciwgcHJldmlvdXNCYXRjaEVkaXRpbmcsIHN0YXJ0V29ya2Zsb3ddKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFlZGl0b3IpIHJldHVyblxyXG4gICAgY29uc3Qgd2F0Y2hMYXllckluZm9zID0gcmVhY3RpdmVVdGlscy53YXRjaCgoKSA9PiBlZGl0b3I/LmxheWVySW5mb3MsIChsYXllckluZm9zKSA9PiB7XHJcbiAgICAgIHVwZGF0ZVVzZURhdGFTb3VyY2VzQnlMYXllckluZm9zKGxheWVySW5mb3MpXHJcbiAgICB9LCB7IGluaXRpYWw6IHRydWUgfSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdhdGNoTGF5ZXJJbmZvcy5yZW1vdmUoKVxyXG4gICAgfVxyXG4gIH0sIFtlZGl0b3IsIHVwZGF0ZVVzZURhdGFTb3VyY2VzQnlMYXllckluZm9zXSlcclxuXHJcbiAgY29uc3QgbWFwV2lkZ2V0SWQgPSB1c2VNYXBXaWRnZXRJZHM/LlswXVxyXG4gIGNvbnN0IGNhbGNpdGVDb2xvck1hcHBpbmcgPSB1c2VDYWxjaXRlQ29sb3JNYXBwaW5nKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzaGFwZT0nbm9uZScgY2xhc3NOYW1lPSdqaW11LXdpZGdldCB3aWRnZXQtZWRpdCcgY3NzPXtbZ2V0V2lkZ2V0U3R5bGUodGhlbWUpLCBjYWxjaXRlQ29sb3JNYXBwaW5nXX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaW1wbGUtY29tbWVudC1idXR0b24tcm93Jz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB0eXBlPSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgICBvbkNsaWNrPXtzdGFydENvbW1lbnRzQ3JlYXRlV29ya2Zsb3d9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IWVkaXRvciB8fCAhamltdU1hcFZpZXcgfHwgY29tbWVudEVkaXRvck9wZW59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIENvbW1lbnRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7YWR2YW5jZWRFZGl0aW5nVG9vbHMgJiYgY29weVBhc3RlICYmIG1hcFdpZGdldElkICYmIGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LnZpZXcudHlwZSA9PT0gJzJkJyAmJiBlZGl0b3IgJiYgY29tbWVudEVkaXRvck9wZW4gJiZcclxuICAgICAgICA8RWRpdG9yQ29weVBhc3RlXHJcbiAgICAgICAgICBqaW11TWFwVmlldz17amltdU1hcFZpZXd9XHJcbiAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cclxuICAgICAgICAgIG1hcFdpZGdldElkPXttYXBXaWRnZXRJZH1cclxuICAgICAgICAgIHdpZGdldElkPXtpZH1cclxuICAgICAgICAgIGZvcm1DaGFuZ2U9e2Zvcm1DaGFuZ2V9XHJcbiAgICAgICAgICBvblN0ZXBDaGFuZ2U9e3NldFBhc3RlU3RlcH1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcblxyXG4gICAgICB7bWFwV2lkZ2V0SWQgJiZcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NpbXBsZS1jb21tZW50LWVkaXRvci1wYW5lbCcsIHtcclxuICAgICAgICAgICAgJ2Qtbm9uZSc6IHBhc3RlU3RlcCA9PT0gJ3Bhc3RlU3BlY2lhbCcgfHwgIWNvbW1lbnRFZGl0b3JPcGVuXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y29tbWVudEVkaXRvck9wZW4gJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2ltcGxlLWNvbW1lbnQtcGFuZWwtY2FuY2VsJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQ29tbWVudHNDcmVhdGVXb3JrZmxvd31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWRpdC1jb24gc2ltcGxlLWNvbW1lbnQtZWRpdG9yLWNvbnRhaW5lcicgcmVmPXtlZGl0Q29udGFpbmVyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcblxyXG4gICAgICB7IW1hcFdpZGdldElkICYmIDxXaWRnZXRQbGFjZWhvbGRlclxyXG4gICAgICAgIGF1dG9GbGlwXHJcbiAgICAgICAgaWNvbj17ZWRpdFdpZGdldEljb259XHJcbiAgICAgICAgbmFtZT17dHJhbnNsYXRlKCdfd2lkZ2V0TGFiZWwnKX1cclxuICAgICAgICBkYXRhLXRlc3RpZD0nZWRpdFBsYWNlaG9sZGVyJ1xyXG4gICAgICAvPn1cclxuXHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXttYXBXaWRnZXRJZH1cclxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2hhbmRsZUFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7bWFwV2lkZ2V0SWQgJiYgIWppbXVNYXBWaWV3ICYmIDxkaXYgY2xhc3NOYW1lPSdqaW11LXNlY29uZGFyeS1sb2FkaW5nJyAvPn1cclxuXHJcbiAgICAgIHtlZGl0b3IgJiYgY29tbWVudEVkaXRvck9wZW4gJiYgPEVkaXRMaXN0RGF0YVNvdXJjZVxyXG4gICAgICAgIHVzZURhdGFTb3VyY2VzPXttYXBVc2VEYXRhU291cmNlc31cclxuICAgICAgICB1bnNhdmVkQ2hhbmdlPXtmb3JtQ2hhbmdlICYmICEhZWRpdG9yLnZpZXdNb2RlbD8uZm9ybVZpZXdNb2RlbH1cclxuICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9uQ2hhbmdlfVxyXG4gICAgICAgIG9uU291cmNlVmVyc2lvbkNoYW5nZT17aGFuZGxlU291cmNlVmVyc2lvbkNoYW5nZX1cclxuICAgICAgLz59XHJcblxyXG4gICAgICA8RWRpdG9yQ2xvc2VXYXJuaW5nIGlkPXtwcm9wcy5pZH0gZm9ybUNoYW5nZT17Zm9ybUNoYW5nZX0gLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JDb21wb25lbnRcclxuIiwiaW1wb3J0IHtcclxuICBhcHBBY3Rpb25zLCBnZXRBcHBTdG9yZSwgUmVhY3QsIGhvb2tzLCBjbGFzc05hbWVzLCBjc3MsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11Q29yZU1lc3NhZ2VzLFxyXG4gIHR5cGUgRmVhdHVyZURhdGFSZWNvcmRcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgQ29uZmlybURpYWxvZywgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVaU1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0ICdhcmNnaXMtbWFwLWNvbXBvbmVudHMnXHJcbmltcG9ydCB0eXBlIHsgQXJjZ2lzUGFzdGVDdXN0b21FdmVudCB9IGZyb20gJ0BhcmNnaXMvbWFwLWNvbXBvbmVudHMnXHJcbmltcG9ydCAqIGFzIHJlYWN0aXZlVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHMnXHJcbmltcG9ydCB0eXBlIHsgQ2xpcGJvYXJkSXRlbSwgQ2xpcGJvYXJkU3VwcG9ydGVkTGF5ZXIgfSBmcm9tICdlc3JpL2FwcGxpY2F0aW9ucy9Db21wb25lbnRzL2NsaXBib2FyZCdcclxuaW1wb3J0IHR5cGUgeyBBcHBseVNldCwgQXBwbHlTZXRMYXllckVkaXRSZXN1bHQsIEFwcGx5U2V0U2VydmljZUVkaXRSZXN1bHQsIEFwcGx5U2V0U3VwcG9ydGVkTGF5ZXIgfSBmcm9tICdlc3JpL2FwcGxpY2F0aW9ucy9Db21wb25lbnRzL2FwcGx5U2V0VXRpbHMnXHJcbmltcG9ydCB0eXBlIHsgRmVhdHVyZUVkaXRSZXN1bHQgfSBmcm9tICdlc3JpL2xheWVycy9ncmFwaGljcy9lZGl0aW5nU3VwcG9ydCdcclxuaW1wb3J0IHR5cGUgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnXHJcbmltcG9ydCB0eXBlIHsgR3JhcGhpY0xheWVyIH0gZnJvbSAnZXNyaS9HcmFwaGljJ1xyXG5pbXBvcnQgdHlwZSBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG5pbXBvcnQgdHlwZSBTdWJ0eXBlR3JvdXBMYXllciBmcm9tICdlc3JpL2xheWVycy9TdWJ0eXBlR3JvdXBMYXllcidcclxuaW1wb3J0IHR5cGUgRWRpdG9yIGZyb20gJ2Vzcmkvd2lkZ2V0cy9FZGl0b3InXHJcbmltcG9ydCB7IHVwZGF0ZURhdGFTb3VyY2VBZnRlckVkaXQgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgeyBnZXREYXRhU291cmNlQnlJZCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgdHlwZSB7IFBhc3RlU3RlcCB9IGZyb20gJy4vZWRpdG9yLWNvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29weVBhc3RlUGFuZWxQcm9wcyB7XHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XHJcbiAgZWRpdG9yOiBFZGl0b3JcclxuICBtYXBXaWRnZXRJZDogc3RyaW5nXHJcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xyXG4gIGZvcm1DaGFuZ2U6IGJvb2xlYW5cclxuICBvblN0ZXBDaGFuZ2U6IChzdGVwOiBQYXN0ZVN0ZXApID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgY29weVBhc3RlVG9vbFN0eWxlID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOXB4O1xyXG4gIHJpZ2h0OiA0cHg7XHJcbiAgei1pbmRleDogMjtcclxuYFxyXG5cclxuY29uc3QgcGFzdGVQYW5lbFN0eWxlID0gY3NzYFxyXG4gIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgLS1hcmNnaXMtcGFzdGUtd2lkdGg6IDEwMCU7XHJcbiAgLS1hcmNnaXMtcGFzdGUtaGVpZ2h0OiAxMDAlO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBDb3B5UGFzdGVQYW5lbCAocHJvcHM6IENvcHlQYXN0ZVBhbmVsUHJvcHMpIHtcclxuICBjb25zdCB7IGppbXVNYXBWaWV3LCBlZGl0b3IsIG1hcFdpZGdldElkLCB3aWRnZXRJZCwgZm9ybUNoYW5nZSwgb25TdGVwQ2hhbmdlIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihqaW11VWlNZXNzYWdlcywgamltdUNvcmVNZXNzYWdlcywgZGVmYXVsdE1lc3NhZ2VzKVxyXG5cclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxQYXN0ZVN0ZXA+KCdyZWFkeScpXHJcbiAgY29uc3QgW3Bhc3RlQ29tcG9uZW50LCBzZXRQYXN0ZUNvbXBvbmVudF0gPSBSZWFjdC51c2VTdGF0ZTxIVE1MQXJjZ2lzUGFzdGVFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IFtjbGlwYm9hcmRJdGVtcywgc2V0Q2xpcGJvYXJkSXRlbXNdID0gUmVhY3QudXNlU3RhdGU8Q2xpcGJvYXJkSXRlbVtdPihbXSlcclxuICBjb25zdCBbd2FybmluZ0JlZm9yZVBhc3RlLCBzZXRXYXJuaW5nQmVmb3JlUGFzdGVdID0gUmVhY3QudXNlU3RhdGU8J3Bhc3RlJyB8ICdwYXN0ZVNwZWNpYWwnPihudWxsKVxyXG4gIGNvbnN0IFtzZWxlY3RlZEZlYXR1cmVzLCBzZXRTZWxlY3RlZEZlYXR1cmVzXSA9IFJlYWN0LnVzZVN0YXRlPEdyYXBoaWNbXT4oW10pXHJcbiAgY29uc3QgW2NvcHlpbmcsIHNldENvcHlpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNvcHlGZWF0dXJlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGVzcmlDbGlwYm9hcmQgPSBwYXN0ZUNvbXBvbmVudD8uY2xpcGJvYXJkXHJcbiAgICBpZiAoIWVzcmlDbGlwYm9hcmQpIHJldHVyblxyXG4gICAgc2V0Q29weWluZyh0cnVlKVxyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgY29weURhdGE6IEFycmF5PHtcclxuICAgICAgICBsYXllcjogQ2xpcGJvYXJkU3VwcG9ydGVkTGF5ZXJcclxuICAgICAgICBncmFwaGljOiBHcmFwaGljXHJcbiAgICAgICAgdHlwZTogJ2ZlYXR1cmUnIHwgJ3N0cmluZydcclxuICAgIH0+ID0gW11cclxuICAgIGNvbnN0IGZlYXR1cmVMYXllck1hcCA9IHNlbGVjdGVkRmVhdHVyZXMucmVkdWNlKChtYXAsIGdyYXBoaWMpID0+IHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy5qaW11TGF5ZXJWaWV3c1soZ3JhcGhpYyBhcyBhbnkpLmppbXVMYXllclZpZXdJZF0/LmxheWVyIGFzIENsaXBib2FyZFN1cHBvcnRlZExheWVyXHJcbiAgICAgIGlmICghbGF5ZXIpIHtcclxuICAgICAgICByZXR1cm4gbWFwXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFtYXAuZ2V0KGxheWVyKSkge1xyXG4gICAgICAgIG1hcC5zZXQobGF5ZXIsIFtdKVxyXG4gICAgICB9XHJcbiAgICAgIG1hcC5nZXQobGF5ZXIpLnB1c2goZ3JhcGhpYylcclxuICAgICAgcmV0dXJuIG1hcFxyXG4gICAgfSwgbmV3IE1hcDxHcmFwaGljTGF5ZXIsIEdyYXBoaWNbXT4oKSlcclxuICAgIGNvbnN0IHByb21pc2VzID0gQXJyYXkuZnJvbShmZWF0dXJlTGF5ZXJNYXAuZW50cmllcygpKS5tYXAoKFtsYXllciwgZ3JhcGhpY3NdKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZlYXR1cmVMYXllciA9IGxheWVyIGFzIEZlYXR1cmVMYXllclxyXG4gICAgICBjb25zdCBpZHMgPSBncmFwaGljcy5tYXAoZyA9PiBnLmdldE9iamVjdElkKCkgPz8gZy5nZXRHbG9iYWxJZCgpKS5maWx0ZXIoaWQgPT4gaWQgIT09IHVuZGVmaW5lZClcclxuICAgICAgaWYgKGlkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmVhdHVyZUxheWVyLnF1ZXJ5RmVhdHVyZXMoe1xyXG4gICAgICAgIG9iamVjdElkczogaWRzLFxyXG4gICAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXHJcbiAgICAgICAgb3V0U3BhdGlhbFJlZmVyZW5jZTogamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICBjb25zdCBmZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlc1xyXG4gICAgICAgIHJldHVybiBmZWF0dXJlc1xyXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHF1ZXJ5IGZlYXR1cmVzIGZvciBjb3B5JylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBjb25zdCBmZWF0dXJlcyA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcykudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgY29uc3QgYWxsRmVhdHVyZXM6IEdyYXBoaWNbXSA9IFtdXHJcbiAgICAgIHJlc3VsdHMuZm9yRWFjaChyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAnZnVsZmlsbGVkJyAmJiBBcnJheS5pc0FycmF5KHJlcy52YWx1ZSkpIHtcclxuICAgICAgICAgIGFsbEZlYXR1cmVzLnB1c2goLi4ucmVzLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGFsbEZlYXR1cmVzXHJcbiAgICB9KVxyXG4gICAgZmVhdHVyZXMuZm9yRWFjaCgoZ3JhcGhpYykgPT4ge1xyXG4gICAgICBjb25zdCBsYXllciA9IGdyYXBoaWMubGF5ZXIgYXMgQ2xpcGJvYXJkU3VwcG9ydGVkTGF5ZXJcclxuICAgICAgaWYgKCFsYXllcikgcmV0dXJuXHJcbiAgICAgIGNvcHlEYXRhLnB1c2goe1xyXG4gICAgICAgIGdyYXBoaWMsXHJcbiAgICAgICAgbGF5ZXIsXHJcbiAgICAgICAgdHlwZTogJ2ZlYXR1cmUnLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIGVzcmlDbGlwYm9hcmQuc2V0RGF0YShjb3B5RGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY29weSBmZWF0dXJlczogJywgZXJyKVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0Q29weWluZyhmYWxzZSlcclxuICAgIH1cclxuICB9LCBbamltdU1hcFZpZXcsIHBhc3RlQ29tcG9uZW50Py5jbGlwYm9hcmQsIHNlbGVjdGVkRmVhdHVyZXNdKVxyXG5cclxuICBjb25zdCBsYXllclBlcm1pc3Npb25zQ2hlY2sgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XHJcbiAgICBjYW5DcmVhdGU6IChsYXllcjogRmVhdHVyZUxheWVyIHwgU3VidHlwZUdyb3VwTGF5ZXIpID0+IHtcclxuICAgICAgY29uc3QgbGF5ZXJJbmZvcyA9IGVkaXRvcj8ubGF5ZXJJbmZvcyB8fCBbXVxyXG4gICAgICBjb25zdCBsYXllckluZm8gPSBsYXllckluZm9zLmZpbmQobCA9PiBsLmxheWVyPy5pZCA9PT0gbGF5ZXI/LmlkKVxyXG4gICAgICByZXR1cm4gIWxheWVySW5mbyB8fCBsYXllckluZm8uYWRkRW5hYmxlZFxyXG4gICAgfSxcclxuICAgIGNhblVwZGF0ZTogKGxheWVyOiBGZWF0dXJlTGF5ZXIgfCBTdWJ0eXBlR3JvdXBMYXllcikgPT4ge1xyXG4gICAgICBjb25zdCBsYXllckluZm9zID0gZWRpdG9yPy5sYXllckluZm9zIHx8IFtdXHJcbiAgICAgIGNvbnN0IGxheWVySW5mbyA9IGxheWVySW5mb3MuZmluZChsID0+IGwubGF5ZXI/LmlkID09PSBsYXllcj8uaWQpXHJcbiAgICAgIHJldHVybiAhbGF5ZXJJbmZvIHx8IChsYXllckluZm8udXBkYXRlRW5hYmxlZCAmJiBsYXllckluZm8uZ2VvbWV0cnlVcGRhdGVzRW5hYmxlZClcclxuICAgIH0sXHJcbiAgfSksIFtlZGl0b3I/LmxheWVySW5mb3NdKVxyXG5cclxuICBjb25zdCBzdGFydFBhc3RlID0gUmVhY3QudXNlQ2FsbGJhY2soKHN0ZXA6ICdwYXN0ZScgfCAncGFzdGVTcGVjaWFsJykgPT4ge1xyXG4gICAgaWYgKHBhc3RlQ29tcG9uZW50Py5jbG9zZWQpIHtcclxuICAgICAgcGFzdGVDb21wb25lbnQuY2xvc2VkID0gZmFsc2VcclxuICAgIH1cclxuICAgIHNldFN0ZXAoc3RlcClcclxuICB9LCBbcGFzdGVDb21wb25lbnRdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDb25maXJtU3RhcnRQYXN0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICh3YXJuaW5nQmVmb3JlUGFzdGUpIHtcclxuICAgICAgc3RhcnRQYXN0ZSh3YXJuaW5nQmVmb3JlUGFzdGUpXHJcbiAgICB9XHJcbiAgICBzZXRXYXJuaW5nQmVmb3JlUGFzdGUobnVsbClcclxuICB9LCBbc3RhcnRQYXN0ZSwgd2FybmluZ0JlZm9yZVBhc3RlXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsU3RhcnRQYXN0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFdhcm5pbmdCZWZvcmVQYXN0ZShudWxsKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCB0cnlQYXN0ZVdpdGhBdHRyaWJ1dGVzID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKGZvcm1DaGFuZ2UpIHtcclxuICAgICAgc2V0V2FybmluZ0JlZm9yZVBhc3RlKCdwYXN0ZVNwZWNpYWwnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhcnRQYXN0ZSgncGFzdGVTcGVjaWFsJylcclxuICAgIH1cclxuICB9LCBbZm9ybUNoYW5nZSwgc3RhcnRQYXN0ZV0pXHJcblxyXG4gIGNvbnN0IGNhbmNlbFBhc3RlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U3RlcCgncmVhZHknKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCB1cGRhdGVEYXRhU291cmNlID0gUmVhY3QudXNlQ2FsbGJhY2soKFxyXG4gICAgcmVzdWx0OiBBcHBseVNldFNlcnZpY2VFZGl0UmVzdWx0IHwgQXBwbHlTZXRMYXllckVkaXRSZXN1bHRcclxuICApID0+IHtcclxuICAgIGNvbnN0IGxheWVyRmVhdHVyZXNNYXAgPSBuZXcgTWFwPEFwcGx5U2V0U3VwcG9ydGVkTGF5ZXIsIEZlYXR1cmVFZGl0UmVzdWx0W10+KClcclxuICAgIGlmIChyZXN1bHQudHlwZSA9PT0gJ2xheWVyJykge1xyXG4gICAgICBjb25zdCBhZGRGZWF0dXJlUmVzdWx0cyA9IHJlc3VsdC5lZGl0cy5hZGRGZWF0dXJlUmVzdWx0c1xyXG4gICAgICBjb25zdCBsYXllciA9IHJlc3VsdC5sYXllclxyXG4gICAgICBsYXllckZlYXR1cmVzTWFwLnNldChsYXllciwgYWRkRmVhdHVyZVJlc3VsdHMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhbGxKaW11TGF5ZXJWaWV3cyA9IGppbXVNYXBWaWV3Py5nZXRBbGxKaW11TGF5ZXJWaWV3cygpXHJcbiAgICAgIGNvbnN0IHNlcnZpY2VVcmwgPSByZXN1bHQuZmVhdHVyZVNlcnZpY2UudXJsXHJcbiAgICAgIGZvciAoY29uc3QgZWRpdCBvZiByZXN1bHQuZWRpdHMpIHtcclxuICAgICAgICBjb25zdCBsYXllclZpZXcgPSBhbGxKaW11TGF5ZXJWaWV3cy5maW5kKGpsdiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsID0gamx2LmxheWVyXHJcbiAgICAgICAgICByZXR1cm4gbD8ubGF5ZXJJZCA9PT0gZWRpdC5pZCAmJiBsPy51cmwgJiYgbC51cmwuaW5jbHVkZXMoc2VydmljZVVybClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghbGF5ZXJWaWV3KSBjb250aW51ZVxyXG4gICAgICAgIGNvbnN0IGFkZEZlYXR1cmVSZXN1bHRzID0gZWRpdC5hZGRGZWF0dXJlUmVzdWx0c1xyXG4gICAgICAgIGxheWVyRmVhdHVyZXNNYXAuc2V0KGxheWVyVmlldy5sYXllciwgYWRkRmVhdHVyZVJlc3VsdHMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHByb21pc2VzID0gW11cclxuICAgIGxheWVyRmVhdHVyZXNNYXAuZm9yRWFjaCgoZmVhdHVyZXMsIGxheWVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRzSWQgPSBqaW11TWFwVmlldy5nZXREYXRhU291cmNlSWRCeUFQSUxheWVyKGxheWVyKVxyXG4gICAgICBjb25zdCBkcyA9IGdldERhdGFTb3VyY2VCeUlkKGRzSWQpXHJcbiAgICAgIGlmICghZHMpIHJldHVyblxyXG4gICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBhZGRJZHMgPSBmZWF0dXJlcy5tYXAoZiA9PiBmLm9iamVjdElkID8/IGYuZ2xvYmFsSWQpXHJcbiAgICAgICAgaWYgKGFkZElkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBkcy5xdWVyeSh7XHJcbiAgICAgICAgICAgIG9iamVjdElkczogYWRkSWRzLFxyXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxyXG4gICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWNvcmRzID0gKHJlc3VsdD8ucmVjb3JkcyB8fCBbXSkgYXMgRmVhdHVyZURhdGFSZWNvcmRbXVxyXG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlUHJvbWlzZXMgPSByZWNvcmRzLm1hcChyID0+IHIuZ2V0SlNBUElHcmFwaGljKCkpXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGZlYXR1cmVQcm9taXNlcykudGhlbigoYWRkRmVhdHVyZXMpID0+IHtcclxuICAgICAgICAgICAgICB1cGRhdGVEYXRhU291cmNlQWZ0ZXJFZGl0KGRzLCB7IGFkZEZlYXR1cmVzIH0pXHJcbiAgICAgICAgICAgICAgZHMuc2VsZWN0UmVjb3Jkc0J5SWRzKGFkZElkcywgcmVjb3JkcylcclxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYWRkZWQgZmVhdHVyZXMgZ3JhcGhpY3MnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIHF1ZXJ5IGFkZGVkIGZlYXR1cmVzJykpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdObyBmZWF0dXJlcyB0byBhZGQnKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgfSlcclxuICB9LCBbamltdU1hcFZpZXddKVxyXG5cclxuICBjb25zdCBoYW5kbGVBcHBseVBhc3RlID0gUmVhY3QudXNlQ2FsbGJhY2soKGU6IEFyY2dpc1Bhc3RlQ3VzdG9tRXZlbnQ8e1xyXG4gICAgY29tcGxldGlvbkNhbGxiYWNrPzogUHJvbWlzZTx7XHJcbiAgICAgICAgc3VjY2VzczogYm9vbGVhblxyXG4gICAgICAgIGVycm9yQ29kZT86IHN0cmluZ1xyXG4gICAgICAgIGVycm9yTWVzc2FnZT86IHN0cmluZ1xyXG4gICAgfT4gfCBQcm9taXNlPHZvaWQ+XHJcbiAgICBhcHBseVNldD86IEFwcGx5U2V0XHJcbiAgfT4pID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYXBwbHlTZXQgPSBlLmRldGFpbC5hcHBseVNldFxyXG4gICAgICAgIGlmIChhcHBseVNldCkge1xyXG4gICAgICAgICAgcGFzdGVDb21wb25lbnQud3JpdGVDaGFuZ2VzKGFwcGx5U2V0KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByZXMgb2YgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXRhU291cmNlKHJlcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdXBkYXRlRGF0YVNvdXJjZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U3RlcCgncmVhZHknKVxyXG4gICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gYXBwbHkgcGFzdGUgZWRpdHM6ICcgKyBlcnIubWVzc2FnZSkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gc2F2ZSBlZGl0czogJyArIGVyci5tZXNzYWdlKSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGUuZGV0YWlsLmNvbXBsZXRpb25DYWxsYmFjayA9IHByb21pc2VcclxuICB9LCBbcGFzdGVDb21wb25lbnQsIHVwZGF0ZURhdGFTb3VyY2VdKVxyXG5cclxuICBjb25zdCBoYW5kbGVQYXN0ZVJlYWR5ID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2dDogQXJjZ2lzUGFzdGVDdXN0b21FdmVudDx2b2lkPikgPT4ge1xyXG4gICAgY29uc3QgcGFzdGVDb21wb25lbnQgPSBldnQudGFyZ2V0XHJcbiAgICBzZXRQYXN0ZUNvbXBvbmVudChwYXN0ZUNvbXBvbmVudClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgcHJldkppbXVNYXBWaWV3ID0gaG9va3MudXNlUHJldmlvdXMoamltdU1hcFZpZXcpXHJcbiAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlc1JlcUlkUmVmID0gUmVhY3QudXNlUmVmKDApXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNsZWFyIGNsaXBib2FyZCB3aGVuIGNoYW5naW5nIG1hcCB2aWV3XHJcbiAgICBpZiAocHJldkppbXVNYXBWaWV3ICE9PSBqaW11TWFwVmlldyAmJiBwYXN0ZUNvbXBvbmVudD8uY2xpcGJvYXJkPy5oYXNJdGVtcykge1xyXG4gICAgICBwYXN0ZUNvbXBvbmVudC5jbGlwYm9hcmQuc2V0RGF0YShbXSlcclxuICAgIH1cclxuICAgIC8vIGxpc3RlbiB0byBzZWxlY3RlZCBmZWF0dXJlcyBjaGFuZ2VcclxuICAgIGNvbnN0IHVwZGF0ZVNlbGVjdGVkRmVhdHVyZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICAgIGNvbnN0IHJlcUlkID0gKytzZWxlY3RlZEZlYXR1cmVzUmVxSWRSZWYuY3VycmVudFxyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gYXdhaXQgamltdU1hcFZpZXcuZ2V0U2VsZWN0ZWRGZWF0dXJlcygpXHJcbiAgICAgICAgaWYgKHJlcUlkID09PSBzZWxlY3RlZEZlYXR1cmVzUmVxSWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRGZWF0dXJlcyhmZWF0dXJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICB1cGRhdGVTZWxlY3RlZEZlYXR1cmVzKClcclxuICAgICAgamltdU1hcFZpZXcuYWRkSmltdUxheWVyVmlld1NlbGVjdGVkRmVhdHVyZXNDaGFuZ2VMaXN0ZW5lcih1cGRhdGVTZWxlY3RlZEZlYXR1cmVzKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcucmVtb3ZlSmltdUxheWVyVmlld1NlbGVjdGVkRmVhdHVyZXNDaGFuZ2VMaXN0ZW5lcih1cGRhdGVTZWxlY3RlZEZlYXR1cmVzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBwYXN0ZUNvbXBvbmVudCwgcHJldkppbXVNYXBWaWV3XSlcclxuXHJcbiAgLy8gd2F0Y2ggY2xpcGJvYXJkIGl0ZW1zIGNoYW5nZVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXBhc3RlQ29tcG9uZW50KSByZXR1cm5cclxuICAgIGNvbnN0IHdhdGNoQ2xpcGJvYXJkID0gcmVhY3RpdmVVdGlscy53YXRjaCgoKSA9PiBwYXN0ZUNvbXBvbmVudD8uY2xpcGJvYXJkPy52ZXJzaW9uLCAodmVyc2lvbikgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtcyA9IHBhc3RlQ29tcG9uZW50Py5jbGlwYm9hcmQ/Lml0ZW1zXHJcbiAgICAgIHNldENsaXBib2FyZEl0ZW1zKGl0ZW1zID8gaXRlbXMudG9BcnJheSgpIDogW10pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2F0Y2hDbGlwYm9hcmQ/LnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgfSwgW3Bhc3RlQ29tcG9uZW50XSlcclxuXHJcbiAgY29uc3QgcmVxdWVzdENvbnRyb2wgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBhcHBBY3Rpb25zLnJlcXVlc3RBdXRvQ29udHJvbE1hcFdpZGdldChtYXBXaWRnZXRJZCwgd2lkZ2V0SWQpXHJcbiAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFjdGlvbilcclxuICAgIGppbXVNYXBWaWV3LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpXHJcbiAgICBjb25zdCBzZWxlY3Rpb25Ub29sYmFyID0gKGVkaXRvciBhcyBhbnkpLl9zZWxlY3Rpb25Ub29sYmFyXHJcbiAgICBpZiAoc2VsZWN0aW9uVG9vbGJhcj8uYWN0aXZlT3BlcmF0aW9uKSB7XHJcbiAgICAgIHNlbGVjdGlvblRvb2xiYXIuY2FuY2VsPy4oKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhc3RlQ29tcG9uZW50KSB7XHJcbiAgICAgIGF3YWl0IHBhc3RlQ29tcG9uZW50LnNob3dDbGlwYm9hcmRJdGVtcyh0cnVlKVxyXG4gICAgICBhd2FpdCBwYXN0ZUNvbXBvbmVudC5zdGFydE1vdmVDbGlwYm9hcmQodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbZWRpdG9yLCBqaW11TWFwVmlldywgbWFwV2lkZ2V0SWQsIHBhc3RlQ29tcG9uZW50LCB3aWRnZXRJZF0pXHJcblxyXG4gIGNvbnN0IHJlbGVhc2VDb250cm9sID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uID0gYXBwQWN0aW9ucy5yZWxlYXNlQXV0b0NvbnRyb2xNYXBXaWRnZXQobWFwV2lkZ2V0SWQpXHJcbiAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFjdGlvbilcclxuICAgIGlmIChwYXN0ZUNvbXBvbmVudCkge1xyXG4gICAgICBhd2FpdCBwYXN0ZUNvbXBvbmVudC5zaG93Q2xpcGJvYXJkSXRlbXMoZmFsc2UpXHJcbiAgICAgIGF3YWl0IHBhc3RlQ29tcG9uZW50LmNhbmNlbE1vdmVDbGlwYm9hcmQoKVxyXG4gICAgfVxyXG4gIH0sIFttYXBXaWRnZXRJZCwgcGFzdGVDb21wb25lbnRdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gdXBkYXRlIHBhc3RlIG9wZW4gZm9yIHBhcmVudFxyXG4gICAgb25TdGVwQ2hhbmdlKHN0ZXApXHJcbiAgICAvLyBtYW5hZ2UgbWFwIGNvbnRyb2xcclxuICAgIGlmIChzdGVwID09PSAncmVhZHknKSB7XHJcbiAgICAgIHJlbGVhc2VDb250cm9sKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcXVlc3RDb250cm9sKClcclxuICAgIH1cclxuICB9LCBbb25TdGVwQ2hhbmdlLCByZWxlYXNlQ29udHJvbCwgcmVxdWVzdENvbnRyb2wsIHN0ZXBdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdm9pZCByZWxlYXNlQ29udHJvbCgpXHJcbiAgICB9XHJcbiAgfSwgW3JlbGVhc2VDb250cm9sXSlcclxuXHJcbiAgY29uc3QgY2xpcGJvYXJkRW1wdHkgPSAhY2xpcGJvYXJkSXRlbXMgfHwgY2xpcGJvYXJkSXRlbXMubGVuZ3RoID09PSAwXHJcbiAgY29uc3Qgbm9TZWxlY3Rpb24gPSAhQXJyYXkuaXNBcnJheShzZWxlY3RlZEZlYXR1cmVzKSB8fCBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aCA9PT0gMFxyXG4gIGNvbnN0IGV4Y2VlZE1heENvdW50ID0gQXJyYXkuaXNBcnJheShzZWxlY3RlZEZlYXR1cmVzKSAmJiBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aCA+IDIwMFxyXG4gIGNvbnN0IFt1bnN1cHBvcnRlZExheWVycywgc2VsZWN0aW9uRnJvbU11bHRpTGF5ZXJzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdXBwb3J0ZWRMYXllcnMgPSBbXVxyXG4gICAgY29uc3QgdW5pcXVlTGF5ZXJzID0gW11cclxuICAgIGxldCBzZWxlY3Rpb25Gcm9tTXVsdGlMYXllcnMgPSBmYWxzZVxyXG4gICAgaWYgKG5vU2VsZWN0aW9uKSByZXR1cm4gW3Vuc3VwcG9ydGVkTGF5ZXJzLCBzZWxlY3Rpb25Gcm9tTXVsdGlMYXllcnNdXHJcbiAgICBzZWxlY3RlZEZlYXR1cmVzLmZvckVhY2goKGdyYXBoaWMpID0+IHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBncmFwaGljPy5sYXllclxyXG4gICAgICBjb25zdCBsYXllclR5cGUgPSBsYXllcj8udHlwZVxyXG4gICAgICBpZiAobGF5ZXIgJiYgbGF5ZXJUeXBlICYmICFbJ2ZlYXR1cmUnLCAnc3VidHlwZS1ncm91cCcsICdzdWJ0eXBlLXN1YmxheWVyJ10uaW5jbHVkZXMobGF5ZXJUeXBlKSkge1xyXG4gICAgICAgICF1bnN1cHBvcnRlZExheWVycy5pbmNsdWRlcyhsYXllcikgJiYgdW5zdXBwb3J0ZWRMYXllcnMucHVzaChsYXllcilcclxuICAgICAgfVxyXG4gICAgICAhdW5pcXVlTGF5ZXJzLmluY2x1ZGVzKGxheWVyKSAmJiB1bmlxdWVMYXllcnMucHVzaChsYXllcilcclxuICAgIH0pXHJcbiAgICBzZWxlY3Rpb25Gcm9tTXVsdGlMYXllcnMgPSB1bmlxdWVMYXllcnMubGVuZ3RoID4xXHJcbiAgICByZXR1cm4gW3Vuc3VwcG9ydGVkTGF5ZXJzLCBzZWxlY3Rpb25Gcm9tTXVsdGlMYXllcnNdXHJcbiAgfSwgW25vU2VsZWN0aW9uLCBzZWxlY3RlZEZlYXR1cmVzXSlcclxuICBjb25zdCB1bnN1cHBvcnRlZExheWVyTmFtZXMgPSB1bnN1cHBvcnRlZExheWVycy5tYXAobCA9PiBsLnRpdGxlIHx8IGwuaWQgfHwgJycpLmpvaW4oJywgJylcclxuICBjb25zdCBoYXNVbnN1cHBvcnRlZExheWVycyA9IHVuc3VwcG9ydGVkTGF5ZXJzLmxlbmd0aCA+IDBcclxuICBjb25zdCBkaXNhYmxlQ29weSA9IG5vU2VsZWN0aW9uIHx8IGV4Y2VlZE1heENvdW50IHx8IHNlbGVjdGlvbkZyb21NdWx0aUxheWVycyB8fCBoYXNVbnN1cHBvcnRlZExheWVycyB8fCBjb3B5aW5nXHJcbiAgbGV0IGNvcHlUb29sdGlwID0gdHJhbnNsYXRlKCdjb3B5JylcclxuICBpZiAobm9TZWxlY3Rpb24gfHwgc2VsZWN0aW9uRnJvbU11bHRpTGF5ZXJzKSB7XHJcbiAgICBjb3B5VG9vbHRpcCA9IHRyYW5zbGF0ZSgnY2FuTm90Q29weU11bHRpcGxlTGF5ZXJzJylcclxuICB9IGVsc2UgaWYgKGV4Y2VlZE1heENvdW50KSB7XHJcbiAgICBjb3B5VG9vbHRpcCA9IGAke3RyYW5zbGF0ZSgnbWF4aW11bScpfTogMjAwYFxyXG4gIH0gZWxzZSBpZiAoaGFzVW5zdXBwb3J0ZWRMYXllcnMpIHtcclxuICAgIGNvcHlUb29sdGlwID0gdHJhbnNsYXRlKCdjb3B5U3VwcG9ydGVkTGF5ZXJzT25seScsIHsgbGF5ZXJzOiB1bnN1cHBvcnRlZExheWVyTmFtZXMgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICB7cGFzdGVDb21wb25lbnQgJiYgWydyZWFkeScsICdwYXN0ZSddLmluY2x1ZGVzKHN0ZXApICYmXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3B5LXBhc3RlLXRvb2wnIGNzcz17Y29weVBhc3RlVG9vbFN0eWxlfT5cclxuICAgICAgICB7c3RlcCA9PT0gJ3JlYWR5JyAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb25cclxuICAgICAgICAgICAgaWQ9e2Ake3dpZGdldElkfS1lZGl0b3ItY29weWB9XHJcbiAgICAgICAgICAgIGljb249J2NvcHknXHJcbiAgICAgICAgICAgIHRleHQ9JydcclxuICAgICAgICAgICAgbG9hZGluZz17Y29weWluZ31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVDb3B5fVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2NvcHknKX1cclxuICAgICAgICAgICAgb25DbGljaz17Y29weUZlYXR1cmVzfVxyXG4gICAgICAgICAgPjwvY2FsY2l0ZS1hY3Rpb24+XHJcbiAgICAgICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PXtgJHt3aWRnZXRJZH0tZWRpdG9yLWNvcHlgfSBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgIDxzcGFuPntjb3B5VG9vbHRpcH08L3NwYW4+XHJcbiAgICAgICAgICA8L2NhbGNpdGUtdG9vbHRpcD5cclxuICAgICAgICAgIDxjYWxjaXRlLWFjdGlvblxyXG4gICAgICAgICAgICBpZD17YCR7d2lkZ2V0SWR9LWVkaXRvci1wYXN0ZWB9XHJcbiAgICAgICAgICAgIGljb249J3Bhc3RlLXdpdGgtYXR0cmlidXRlJ1xyXG4gICAgICAgICAgICB0ZXh0PScnXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjbGlwYm9hcmRFbXB0eX1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdwYXN0ZScpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0cnlQYXN0ZVdpdGhBdHRyaWJ1dGVzfVxyXG4gICAgICAgICAgPjwvY2FsY2l0ZS1hY3Rpb24+XHJcbiAgICAgICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PXtgJHt3aWRnZXRJZH0tZWRpdG9yLXBhc3RlYH0gcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRlKCdwYXN0ZScpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIDxhcmNnaXMtcGFzdGVcclxuICAgICAgdmlldz17amltdU1hcFZpZXc/LnZpZXd9XHJcbiAgICAgIGFsd2F5c1Nob3dGZWF0dXJlRm9ybVxyXG4gICAgICBwYXN0ZVdpdGhNdWx0aXBsZUxheWVyc0VuYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICBwYXN0ZVdpdGhNdWx0aXBsZUZlYXR1cmVzRW5hYmxlZFxyXG4gICAgICBtYXhpbXVtRmVhdHVyZUNvdW50PXsyMDB9XHJcbiAgICAgIHN1cHBvcnRlZENvbW1hbmRzPXtbJ3Bhc3RlJywgJ3Bhc3RlLWFzJ119XHJcbiAgICAgIGhpZGVIZWFkZXJDbG9zZUJ1dHRvblxyXG4gICAgICBsYXllclBlcm1pc3Npb25zQ2hlY2s9e2xheWVyUGVybWlzc2lvbnNDaGVja31cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3LTEwMCBoLTEwMCcsIHsnZC1ub25lJzogc3RlcCAhPT0gJ3Bhc3RlU3BlY2lhbCd9KX1cclxuICAgICAgY3NzPXtwYXN0ZVBhbmVsU3R5bGV9XHJcbiAgICAgIG9uYXJjZ2lzUmVhZHk9e2hhbmRsZVBhc3RlUmVhZHl9XHJcbiAgICAgIG9uYXJjZ2lzQXBwbHlQYXN0ZUNvbW1hbmQ9e2hhbmRsZUFwcGx5UGFzdGV9XHJcbiAgICAgIG9uYXJjZ2lzQ2xvc2U9e2NhbmNlbFBhc3RlfVxyXG4gICAgPlxyXG4gICAgICA8Y2FsY2l0ZS1hY3Rpb25cclxuICAgICAgICBzbG90PSdob21lLWhlYWRlci1hY3Rpb25zLXN0YXJ0J1xyXG4gICAgICAgIGljb249J2NoZXZyb24tbGVmdCdcclxuICAgICAgICB0ZXh0PScnXHJcbiAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZSgnYmFjaycpfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnYmFjaycpfVxyXG4gICAgICAgIGljb25GbGlwUnRsXHJcbiAgICAgICAgb25DbGljaz17Y2FuY2VsUGFzdGV9XHJcbiAgICAgID48L2NhbGNpdGUtYWN0aW9uPlxyXG4gICAgICA8Y2FsY2l0ZS1ub3RpY2Ugc2xvdD0nY29tbWFuZHMtcGFnZS1tZXNzYWdlJyBjbGFzc05hbWU9J210LTQnIG9wZW4gaWNvbj1cIm1vdmVcIj5cclxuICAgICAgICA8ZGl2IHNsb3Q9XCJtZXNzYWdlXCI+e3RyYW5zbGF0ZSgnbW92ZUNsaXBib2FyZEZlYXR1cmVzJyl9PC9kaXY+XHJcbiAgICAgIDwvY2FsY2l0ZS1ub3RpY2U+XHJcbiAgICA8L2FyY2dpcy1wYXN0ZT5cclxuICAgIHt3YXJuaW5nQmVmb3JlUGFzdGUgJiZcclxuICAgICAgPENvbmZpcm1EaWFsb2dcclxuICAgICAgICBsZXZlbD0nd2FybmluZydcclxuICAgICAgICB0aXRsZT17dHJhbnNsYXRlKCdzZWxlY3Rpb25DaGFuZ2VDb25maXJtVGl0bGUnKX1cclxuICAgICAgICBoYXNOb3RTaG93QWdhaW5PcHRpb249e2ZhbHNlfVxyXG4gICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc2VsZWN0aW9uQ2hhbmdlQ29uZmlybVRpcHMnKX1cclxuICAgICAgICBjb25maXJtTGFiZWw9e3RyYW5zbGF0ZSgnZGlzY2FyZENvbmZpcm0nKX1cclxuICAgICAgICBjYW5jZWxMYWJlbD17dHJhbnNsYXRlKCdkaXNjYXJkQ2FuY2VsJyl9XHJcbiAgICAgICAgb25Db25maXJtPXtoYW5kbGVDb25maXJtU3RhcnRQYXN0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDYW5jZWxTdGFydFBhc3RlfVxyXG4gICAgICAvPlxyXG4gICAgfVxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcHlQYXN0ZVBhbmVsXHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSW5mb091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mbydcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ2ppbXUtdWknXHJcblxyXG5pbnRlcmZhY2UgRW1wdHlQbGFjZWhvbGRlclByb3BzIHtcclxuICBlbXB0eVRpcHM6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAuZWRpdC1ibGFuayB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICYgPiBkaXZ7XHJcbiAgICAgIHRvcDogY2FsYyg1MCUgKyAyMHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1zdXJmYWNlLXBhcGVyLWhpbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgRW1wdHlQbGFjZWhvbGRlciA9IChwcm9wczogRW1wdHlQbGFjZWhvbGRlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBlbXB0eVRpcHMgfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3VyZmFjZS0xIGJvcmRlci0wIGgtMTAwJyBjc3M9e3N0eWxlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIHRleHQtY2VudGVyIGVkaXQtYmxhbmsnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3NpdGlvbi1hYnNvbHV0ZSBlZGl0LWJsYW5rLWNvbnRlbnQgdy0xMDAnPlxyXG4gICAgICAgICAgPEluZm9PdXRsaW5lZCBzaXplPXszMn0gY29sb3I9J3ZhcigtLXN5cy1jb2xvci1zdXJmYWNlLXBhcGVyLWhpbnQpJyAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdwJyB2YXJpYW50PSdsYWJlbDEnIGNsYXNzTmFtZT0nZW1wdHktdGlwcyc+e2VtcHR5VGlwc308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXB0eVBsYWNlaG9sZGVyXHJcbiIsImltcG9ydCB7IGNsYXNzTmFtZXMsIGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHR5cGUgeyBDb250cm9sQnV0dG9uIH0gZnJvbSAnLi9mZWF0dXJlLWZvcm0tY29tcG9uZW50J1xyXG5cclxuaW50ZXJmYWNlIEZlYXR1cmVGb3JtQnV0dG9uc1Byb3BzIHtcclxuICBidXR0b25zOiBDb250cm9sQnV0dG9uW11cclxufVxyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgJi5mb3JtLWJ1dHRvbnN7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc3lzLWNvbG9yLWRpdmlkZXItc2Vjb25kYXJ5KTtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuc2luZ2xlLWJ1dHRvbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICAubXVsdGktYnV0dG9ucyB7XHJcbiAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBGZWF0dXJlRm9ybUJ1dHRvbnMgPSAocHJvcHM6IEZlYXR1cmVGb3JtQnV0dG9uc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBidXR0b25zIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZvcm0tYnV0dG9ucycgY3NzPXtzdHlsZX0+XHJcbiAgICAgIHtidXR0b25zLm1hcCgoeyBkaXNhYmxlZCA9IGZhbHNlLCBsYWJlbCwgdHlwZSwgY2xpY2tIYW5kbGVyIH0sIGluZGV4KSA9PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAnc2luZ2xlLWJ1dHRvbic6IGJ1dHRvbnMubGVuZ3RoID09PSAxLFxyXG4gICAgICAgICAgICAnbXVsdGktYnV0dG9ucyc6IGJ1dHRvbnMubGVuZ3RoID4gMSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVGb3JtQnV0dG9uc1xyXG4iLCJpbXBvcnQge1xyXG4gIFJlYWN0LCBjbGFzc05hbWVzLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdUNvcmVNZXNzYWdlcywgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIEltbXV0YWJsZUFycmF5LFxyXG4gIGhvb2tzLCBjc3MsIEltbXV0YWJsZSwgdHlwZSBTdWJ0eXBlU3VibGF5ZXJEYXRhU291cmNlLCB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkLCB0eXBlIEZlYXR1cmVMYXllckRhdGFTb3VyY2UsXHJcbiAgU3VwcG9ydGVkTGF5ZXJTZXJ2aWNlVHlwZXMsIHVzZUludGxcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgQnV0dG9uUHJvcHMsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlNZXNzYWdlcywgTG9hZGluZywgTG9hZGluZ1R5cGUsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IEZvcm1UZW1wbGF0ZSBmcm9tICdlc3JpL2Zvcm0vRm9ybVRlbXBsYXRlJ1xyXG5pbXBvcnQgeyB0eXBlIExheWVyc0NvbmZpZywgTGF5ZXJIb25vck1vZGVUeXBlIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgeyBnZXREYXRhU291cmNlQnlJZCwgZ2V0RHNQcml2aWxlZ2VzLCBnZXRFZGl0RGF0YVNvdXJjZSwgZ2V0RWRpdEhpZGRlbkZpZWxkcyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQge1xyXG4gIGNvbnN0cnVjdEZvcm1FbGVtZW50cywgdHlwZSBFZGl0RmVhdHVyZXMsIGZsYXRNYXBBcnJheSwgZ2V0RHNBY2Nlc3NpYmxlSW5mbywgZ2V0SXNBZHZhbmNlZFBlcm1pc3Npb24sIGdldERpc3BsYXlGaWVsZCxcclxuICBmZWF0dXJlRm9ybVN0eWxlLFxyXG4gIHVzZUNhbGNpdGVDb2xvck1hcHBpbmcsXHJcbiAgY29uc3RydWN0RXhwcmVzc2lvbkluZm9zXHJcbn0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IEVtcHR5UGxhY2Vob2xkZXIgZnJvbSAnLi9lbXB0eS1wbGFjZWhvbGRlcidcclxuaW1wb3J0IEZlYXR1cmVGb3JtQ29uZmlybSBmcm9tICcuL2ZlYXR1cmUtZm9ybS1jb25maXJtJ1xyXG5pbXBvcnQgRmVhdHVyZUZvcm1IZWFkZXIgZnJvbSAnLi9mZWF0dXJlLWZvcm0taGVhZGVyJ1xyXG5pbXBvcnQgRmVhdHVyZUZvcm1CdXR0b25zIGZyb20gJy4vZmVhdHVyZS1mb3JtLWJ1dHRvbnMnXHJcbmltcG9ydCBGZWF0dXJlRm9ybUxpc3QgZnJvbSAnLi9mZWF0dXJlLWZvcm0tbGlzdCdcclxuaW1wb3J0IEZlYXR1cmVGb3JtU2VsZWN0IGZyb20gJy4vZmVhdHVyZS1mb3JtLXNlbGVjdCdcclxuaW1wb3J0IEVkaXRMaXN0RGF0YVNvdXJjZSBmcm9tICcuL2VkaXQtbGlzdC1kcydcclxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcyB9IGZyb20gJy4uL3dpZGdldCdcclxuaW1wb3J0IHVzZUZlYXR1cmVGb3JtIGZyb20gJy4vdXNlLWZlYXR1cmUtZm9ybSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbEJ1dHRvbiB7XHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIHR5cGU6IEJ1dHRvblByb3BzWyd0eXBlJ11cclxuICBjbGlja0hhbmRsZXI6ICgpID0+IHZvaWRcclxuICBkaXNhYmxlZD86IGJvb2xlYW5cclxufVxyXG5cclxuaW50ZXJmYWNlIEZlYXR1cmVGb3JtQ29tcG9uZW50UHJvcHMgZXh0ZW5kcyBDb21tb25Qcm9wcyB7XHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPlxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBGZWF0dXJlRm9ybVN0ZXAgPSAnZW1wdHknIHwgJ2xpc3QnIHwgJ2Zvcm0nIHwgJ25ldydcclxuZXhwb3J0IHR5cGUgRm9ybVByaXZpbGVkZ2VzID0gJ2Z1bGwnIHwgJ25vbmUnIHwgJ25vcm1hbCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJJbmZvIHtcclxuICBpZDogc3RyaW5nXHJcbiAgZGF0YVNvdXJjZTogRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IFN1YnR5cGVTdWJsYXllckRhdGFTb3VyY2VcclxuICBsYXllcjogX19lc3JpLkZlYXR1cmVMYXllciB8IF9fZXNyaS5TdWJ0eXBlU3VibGF5ZXJcclxuICBmb3JtVGVtcGxhdGU6IEZvcm1UZW1wbGF0ZVxyXG4gIGlzUHVibGljOiBib29sZWFuXHJcbiAgcHJpdmlsZWdlOiBGb3JtUHJpdmlsZWRnZXNcclxufVxyXG5cclxuY29uc3Qgd2lkZ2V0U3R5bGUgPSBjc3NgXHJcbiAgJHtmZWF0dXJlRm9ybVN0eWxlfVxyXG4gICYud2lkZ2V0LWVkaXQge1xyXG4gICAgLmppbXUtbG9hZGluZyB7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAuZWRpdC1jb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmF0dHItaGVpZ2h0IHtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTNweCk7XHJcbiAgICAgIC5lZGl0LW5vdGljZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBlbnVtIEZvcm1DaGFuZ2VUeXBlIHtcclxuICBBcmNhZGUgPSAnYXJjYWRlJyxcclxuICBOb3JtYWwgPSAnbm9ybWFsJ1xyXG59XHJcblxyXG5jb25zdCBGZWF0dXJlRm9ybUNvbXBvbmVudCA9IChwcm9wczogRmVhdHVyZUZvcm1Db21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGFiZWw6IHdpZGdldExhYmVsLCBjb25maWcsIGNhbkVkaXRGZWF0dXJlLCB1c2VEYXRhU291cmNlcyB9ID0gcHJvcHNcclxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBsYXllcnNDb25maWcsIG5vRGF0YU1lc3NhZ2UsIGJhdGNoRWRpdGluZyB9ID0gY29uZmlnXHJcblxyXG4gIGNvbnN0IFthY3RpdmVJZCwgc2V0QWN0aXZlSWRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihudWxsKVxyXG4gIGNvbnN0IFthY3RpdmVSZWNvcmRzLCBzZXRBY3RpdmVSZWNvcmRzXSA9IFJlYWN0LnVzZVN0YXRlPEZlYXR1cmVEYXRhUmVjb3JkW10+KG51bGwpXHJcbiAgY29uc3QgW2VkaXRGZWF0dXJlcywgc2V0RWRpdEZlYXR1cmVzXSA9IFJlYWN0LnVzZVN0YXRlPEVkaXRGZWF0dXJlcz4oe30pXHJcbiAgY29uc3QgW3NvdXJjZVZlcnNpb24sIHNldFNvdXJjZVZlcnNpb25dID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihudWxsKVxyXG4gIGNvbnN0IFtsYXllcnNJbmZvLCBzZXRMYXllcnNJbmZvXSA9IFJlYWN0LnVzZVN0YXRlPHsgW2RzSWQ6IHN0cmluZ106IExheWVySW5mbyB9Pih7fSlcclxuICBjb25zdCBbYWRkTGF5ZXJzQ29uZmlnLCBzZXRBZGRMYXllcnNDb25maWddID0gUmVhY3QudXNlU3RhdGU8SW1tdXRhYmxlQXJyYXk8TGF5ZXJzQ29uZmlnPj4oSW1tdXRhYmxlKFtdKSlcclxuICBjb25zdCBbZGVsQ29uZmlybSwgc2V0RGVsQ29uZmlybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYmFja0NvbmZpcm0sIHNldEJhY2tDb25maXJtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBlZGl0Q29udGFpbmVyID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50Pih1bmRlZmluZWQpXHJcblxyXG4gIGNvbnN0IGFjdGl2ZUxheWVySW5mbyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gbGF5ZXJzSW5mb1thY3RpdmVJZF0sIFthY3RpdmVJZCwgbGF5ZXJzSW5mb10pXHJcblxyXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcywgamltdUNvcmVNZXNzYWdlcywgamltdVVJTWVzc2FnZXMpXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdFZGl0RmVhdHVyZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlZGl0RmVhdHVyZXMpXHJcbiAgICBsZXQgZWRpdEZlYXR1cmVzQ2hhbmdlZCA9IGZhbHNlXHJcbiAgICBmb3IgKGNvbnN0IGRzSWQgaW4gZWRpdEZlYXR1cmVzKSB7XHJcbiAgICAgIGNvbnN0IGxheWVyQ29uZmlnID0gbGF5ZXJzQ29uZmlnLmZpbmQobCA9PiBsLmlkID09PSBkc0lkKVxyXG4gICAgICBpZiAoIWxheWVyQ29uZmlnKSB7XHJcbiAgICAgICAgZGVsZXRlIG5ld0VkaXRGZWF0dXJlc1tkc0lkXVxyXG4gICAgICAgIGVkaXRGZWF0dXJlc0NoYW5nZWQgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVkaXRGZWF0dXJlc0NoYW5nZWQgJiYgc2V0RWRpdEZlYXR1cmVzKG5ld0VkaXRGZWF0dXJlcylcclxuICB9LCBbZWRpdEZlYXR1cmVzLCBsYXllcnNDb25maWddKVxyXG5cclxuICBjb25zdCB7IGxvYWRpbmcsIGZvcm1DaGFuZ2UsIGZvcm1TdWJtaXR0YWJsZSwgc2F2ZUZvcm0sIGFkZEZvcm0sIGRlbGV0ZUZvcm0gfSA9IHVzZUZlYXR1cmVGb3JtKHtcclxuICAgIHNvdXJjZVZlcnNpb24sXHJcbiAgICBhY3RpdmVMYXllckluZm8sXHJcbiAgICBhY3RpdmVSZWNvcmRzLFxyXG4gICAgZWRpdENvbnRhaW5lcixcclxuICB9KVxyXG5cclxuICBjb25zdCBmb3JtUHJpdmlsZWdlc0lzRnVsbCA9IGFjdGl2ZUxheWVySW5mbz8ucHJpdmlsZWdlID09PSAnZnVsbCdcclxuICBjb25zdCBmb3JtUHJpdmlsZWdlc0lzTm9ybWFsID0gYWN0aXZlTGF5ZXJJbmZvPy5wcml2aWxlZ2UgPT09ICdub3JtYWwnXHJcbiAgY29uc3QgZm9ybUVkaXRhYmxlID0gYWN0aXZlTGF5ZXJJbmZvPy5pc1B1YmxpYyB8fCBjYW5FZGl0RmVhdHVyZSB8fCBmb3JtUHJpdmlsZWdlc0lzRnVsbFxyXG4gIGNvbnN0IGFjdGl2ZUNvbmZpZyA9IGxheWVyc0NvbmZpZy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aXZlSWQpXHJcbiAgY29uc3QgbGF5ZXJEZWZpbml0aW9uID0gYWN0aXZlTGF5ZXJJbmZvPy5kYXRhU291cmNlPy5nZXRMYXllckRlZmluaXRpb24/LigpXHJcbiAgY29uc3Qge2NyZWF0ZSwgdXBkYXRlLCBkZWxldGFibGV9ID0gZ2V0RHNQcml2aWxlZ2VzKGxheWVyRGVmaW5pdGlvbilcclxuICBjb25zdCB1cGRhdGVSZWNvcmRzID0gYWN0aXZlQ29uZmlnPy51cGRhdGVSZWNvcmRzICYmIHVwZGF0ZVxyXG4gIGNvbnN0IGRlbGV0ZVJlY29yZHMgPSBhY3RpdmVDb25maWc/LmRlbGV0ZVJlY29yZHMgJiYgZGVsZXRhYmxlXHJcbiAgY29uc3QgYWRkUmVjb3JkcyA9IGFjdGl2ZUNvbmZpZz8uYWRkUmVjb3JkcyAmJiBjcmVhdGVcclxuICBjb25zdCBpc1RhYmxlTGF5ZXIgPSBsYXllckRlZmluaXRpb24/LnR5cGUgPT09IFN1cHBvcnRlZExheWVyU2VydmljZVR5cGVzLlRhYmxlXHJcblxyXG4gIGNvbnN0IGludGwgPSB1c2VJbnRsKClcclxuICBjb25zdCBjb3VudExhYmVsID0gYWN0aXZlUmVjb3Jkcz8ubGVuZ3RoID4gMSA/IGAgKCR7aW50bC5mb3JtYXROdW1iZXIoYWN0aXZlUmVjb3Jkcy5sZW5ndGgpfSlgIDogJydcclxuICBjb25zdCBjb250cm9sczogQ29udHJvbEJ1dHRvbltdID0gW11cclxuICBpZiAoZm9ybVByaXZpbGVnZXNJc0Z1bGwgfHwgKGZvcm1Qcml2aWxlZ2VzSXNOb3JtYWwgJiYgdXBkYXRlUmVjb3JkcykpIHtcclxuICAgIGNvbnRyb2xzLnB1c2goe1xyXG4gICAgICBsYWJlbDogdHJhbnNsYXRlKCd1cGRhdGUnKSArIGNvdW50TGFiZWwsXHJcbiAgICAgIHR5cGU6ICdwcmltYXJ5JyxcclxuICAgICAgZGlzYWJsZWQ6ICEoZm9ybUNoYW5nZSAmJiBmb3JtU3VibWl0dGFibGUpLFxyXG4gICAgICBjbGlja0hhbmRsZXI6IHNhdmVGb3JtXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVDb25maXJtID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RGVsQ29uZmlybSh0cnVlKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGNhbmNlbERlbGV0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldERlbENvbmZpcm0oZmFsc2UpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGRlbGV0ZUZvcm0oKVxyXG4gICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgc2V0RGVsQ29uZmlybShmYWxzZSlcclxuICAgIH1cclxuICB9LCBbZGVsZXRlRm9ybV0pXHJcbiAgaWYgKGZvcm1Qcml2aWxlZ2VzSXNGdWxsIHx8IChmb3JtUHJpdmlsZWdlc0lzTm9ybWFsICYmIGRlbGV0ZVJlY29yZHMpKSB7XHJcbiAgICBjb250cm9scy5wdXNoKHtcclxuICAgICAgbGFiZWw6IHRyYW5zbGF0ZSgnZGVsZXRlJykgKyBjb3VudExhYmVsLFxyXG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgY2xpY2tIYW5kbGVyOiBoYW5kbGVEZWxldGVDb25maXJtXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkQ29udHJvbHM6IENvbnRyb2xCdXR0b25bXSA9IFtdXHJcbiAgY29uc3QgaGFuZGxlQWRkID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGFkZEZvcm0oKVxyXG4gICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgc2V0QWN0aXZlSWQobnVsbClcclxuICAgIH1cclxuICB9LCBbYWRkRm9ybV0pXHJcbiAgaWYgKGlzVGFibGVMYXllciAmJiAoZm9ybVByaXZpbGVnZXNJc0Z1bGwgfHwgKGZvcm1Qcml2aWxlZ2VzSXNOb3JtYWwgJiYgYWRkUmVjb3JkcykpKSB7XHJcbiAgICBhZGRDb250cm9scy5wdXNoKHtcclxuICAgICAgbGFiZWw6IHRyYW5zbGF0ZSgnYWRkJyksXHJcbiAgICAgIHR5cGU6ICdwcmltYXJ5JyxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBjbGlja0hhbmRsZXI6IGhhbmRsZUFkZFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBmbGF0RWRpdEZlYXR1cmVzID0gZmxhdE1hcEFycmF5KGVkaXRGZWF0dXJlcylcclxuICAgIGlmIChmbGF0RWRpdEZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBsZXQgbmVlZENsZWFyU2VsZWN0aW9uID0gdHJ1ZVxyXG4gICAgICBjb25zdCBmZWF0dXJlUmVjb3JkID0gZmxhdEVkaXRGZWF0dXJlc1swXVxyXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZmVhdHVyZVJlY29yZC5kYXRhU291cmNlXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkUmVjb3JkSWRzID0gZGF0YVNvdXJjZS5nZXRTZWxlY3RlZFJlY29yZElkcygpXHJcbiAgICAgIGlmIChzZWxlY3RlZFJlY29yZElkcy5sZW5ndGggPiAxIHx8ICFzZWxlY3RlZFJlY29yZElkcy5pbmNsdWRlcyhmZWF0dXJlUmVjb3JkLmdldElkKCkpKSB7XHJcbiAgICAgICAgbmVlZENsZWFyU2VsZWN0aW9uID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YVNvdXJjZSAmJiBuZWVkQ2xlYXJTZWxlY3Rpb24pIHtcclxuICAgICAgICBkYXRhU291cmNlLmNsZWFyU2VsZWN0aW9uKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0QmFja0NvbmZpcm0oZmFsc2UpXHJcbiAgICBzZXRBY3RpdmVJZChudWxsKVxyXG4gICAgc2V0QWN0aXZlUmVjb3JkcyhudWxsKVxyXG4gIH0sIFtlZGl0RmVhdHVyZXNdKVxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDb25maXJtID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKGZvcm1DaGFuZ2UpIHtcclxuICAgICAgc2V0QmFja0NvbmZpcm0odHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhhbmRsZUJhY2soKVxyXG4gICAgfVxyXG4gIH0sIFtmb3JtQ2hhbmdlLCBoYW5kbGVCYWNrXSlcclxuICBjb25zdCBjYW5jZWxCYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0QmFja0NvbmZpcm0oZmFsc2UpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrSXRlbSA9IFJlYWN0LnVzZUNhbGxiYWNrKChkc0lkOiBzdHJpbmcsIHJlY29yZDogRmVhdHVyZURhdGFSZWNvcmQpID0+IHtcclxuICAgIHNldEFjdGl2ZUlkKGRzSWQpXHJcbiAgICBzZXRBY3RpdmVSZWNvcmRzKFtyZWNvcmRdKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUJhdGNoRWRpdCA9IFJlYWN0LnVzZUNhbGxiYWNrKChkc0lkOiBzdHJpbmcsIHJlY29yZHM6IEZlYXR1cmVEYXRhUmVjb3JkW10pID0+IHtcclxuICAgIHNldEFjdGl2ZUlkKGRzSWQpXHJcbiAgICBzZXRBY3RpdmVSZWNvcmRzKHJlY29yZHMpXHJcbiAgfSwgW10pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGNhbkVkaXRGZWF0dXJlICE9PSAnYm9vbGVhbicpIHJldHVyblxyXG4gICAgY29uc3QgbmV3QWRkTGF5ZXJzQ29uZmlnID0gbGF5ZXJzQ29uZmlnLmZpbHRlcihsYXllckNvbmZpZyA9PiB7XHJcbiAgICAgIGNvbnN0IGxheWVySW5mbyA9IGxheWVyc0luZm9bbGF5ZXJDb25maWcuaWRdXHJcbiAgICAgIGlmICghbGF5ZXJJbmZvKSByZXR1cm4gZmFsc2VcclxuICAgICAgY29uc3QgbGF5ZXJEZWZpbml0aW9uID0gbGF5ZXJJbmZvLmRhdGFTb3VyY2UuZ2V0TGF5ZXJEZWZpbml0aW9uKClcclxuICAgICAgY29uc3QgaXNUYWJsZSA9IGxheWVyRGVmaW5pdGlvbj8udHlwZSA9PT0gU3VwcG9ydGVkTGF5ZXJTZXJ2aWNlVHlwZXMuVGFibGVcclxuICAgICAgcmV0dXJuIChsYXllckluZm8uaXNQdWJsaWMgfHwgY2FuRWRpdEZlYXR1cmUpICYmIGlzVGFibGUgJiYgKFxyXG4gICAgICAgIGxheWVySW5mby5wcml2aWxlZ2UgPT09ICdmdWxsJyB8fFxyXG4gICAgICAgIChsYXllckluZm8ucHJpdmlsZWdlID09PSAnbm9ybWFsJyAmJiBsYXllckNvbmZpZy5hZGRSZWNvcmRzKVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gICAgc2V0QWRkTGF5ZXJzQ29uZmlnKG5ld0FkZExheWVyc0NvbmZpZylcclxuICB9LCBbY2FuRWRpdEZlYXR1cmUsIGxheWVyc0NvbmZpZywgbGF5ZXJzSW5mb10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZU5ldyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0SWQgPSBhZGRMYXllcnNDb25maWdbMF0uaWRcclxuICAgIHNldEFjdGl2ZUlkKGZpcnN0SWQpXHJcbiAgICBzZXRBY3RpdmVSZWNvcmRzKG51bGwpXHJcbiAgfSwgW2FkZExheWVyc0NvbmZpZ10pXHJcblxyXG4gIGNvbnN0IGdldExheWVySW5mbyA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChkc0lkOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRzID0gZ2V0RGF0YVNvdXJjZUJ5SWQoZHNJZClcclxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGdldEVkaXREYXRhU291cmNlKGRzKVxyXG4gICAgICBjb25zdCBsYXllciA9IGF3YWl0IGRhdGFTb3VyY2UuY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSgpIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBfX2VzcmkuU3VidHlwZVN1YmxheWVyXHJcbiAgICAgIGxldCBmb3JtVGVtcGxhdGU6IEZvcm1UZW1wbGF0ZVxyXG4gICAgICBjb25zdCBsYXllckNvbmZpZyA9IGxheWVyc0NvbmZpZy5maWx0ZXIobCA9PiBsLmlkID09PSBkc0lkKVswXVxyXG4gICAgICBpZiAoIWxheWVyQ29uZmlnKSByZXR1cm5cclxuICAgICAgaWYgKGxheWVyQ29uZmlnLmxheWVySG9ub3JNb2RlID09PSBMYXllckhvbm9yTW9kZVR5cGUuV2VibWFwKSB7XHJcbiAgICAgICAgZm9ybVRlbXBsYXRlID0gbGF5ZXIuZm9ybVRlbXBsYXRlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaGlkZGVuRmllbGRzID0gZ2V0RWRpdEhpZGRlbkZpZWxkcyhkYXRhU291cmNlLmdldExheWVyRGVmaW5pdGlvbigpKVxyXG4gICAgICAgIGNvbnN0IGZpZWxkRWxlbWVudHMgPSAobGF5ZXIuZm9ybVRlbXBsYXRlPy5lbGVtZW50cyB8fCBbXSkuZmlsdGVyKGUgPT4gZS50eXBlID09PSAnZmllbGQnKVxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gY29uc3RydWN0Rm9ybUVsZW1lbnRzKGxheWVyQ29uZmlnLmdyb3VwZWRGaWVsZHMuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSwgaGlkZGVuRmllbGRzLCBmaWVsZEVsZW1lbnRzKVxyXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb25JbmZvcyA9IGNvbnN0cnVjdEV4cHJlc3Npb25JbmZvcyhsYXllci5mb3JtVGVtcGxhdGU/LmV4cHJlc3Npb25JbmZvcylcclxuICAgICAgICBmb3JtVGVtcGxhdGUgPSBsYXllci5mb3JtVGVtcGxhdGUgPyBsYXllci5mb3JtVGVtcGxhdGUuY2xvbmUoKSA6IG5ldyBGb3JtVGVtcGxhdGUoKVxyXG4gICAgICAgIGZvcm1UZW1wbGF0ZS5lbGVtZW50cyA9IGVsZW1lbnRzXHJcbiAgICAgICAgZm9ybVRlbXBsYXRlLmV4cHJlc3Npb25JbmZvcyA9IGV4cHJlc3Npb25JbmZvc1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE5ldyBsb2dpYyBvZiBBUEk6IFRoZSB1c2VyIHdpdGggYWR2YW5jZWQgcGVybWlzc2lvbnMgY2FuIG1vZGlmeSB0aGUgY29uZmlndXJhdGlvbiByZWdhcmRsZXNzIG9mIHRoZSBjb25maWd1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGlzQWR2YW5jZWRQZXJtaXNzaW9uID0gYXdhaXQgZ2V0SXNBZHZhbmNlZFBlcm1pc3Npb24oZGF0YVNvdXJjZSlcclxuICAgICAgLy8gZnVsbCBlZGl0aW5nIHByaXZpbGVnZXNcclxuICAgICAgY29uc3QgZnVsbEVkaXRpbmdQcml2aWxlZ2VzOiBib29sZWFuID0gKGxheWVyIGFzIGFueSkudXNlckhhc0Z1bGxFZGl0aW5nUHJpdmlsZWdlc1xyXG4gICAgICBjb25zdCBsYXllckVkaXRpbmdFbmFibGVkOiBib29sZWFuID0gbGF5ZXIuZWRpdGluZ0VuYWJsZWQgPz8gdHJ1ZVxyXG4gICAgICBsZXQgcHJpdmlsZWdlOiAnZnVsbCcgfCAnbm9uZScgfCAnbm9ybWFsJ1xyXG4gICAgICBpZiAoaXNBZHZhbmNlZFBlcm1pc3Npb24gfHwgKGZ1bGxFZGl0aW5nUHJpdmlsZWdlcyAmJiBsYXllckVkaXRpbmdFbmFibGVkKSkge1xyXG4gICAgICAgIHByaXZpbGVnZSA9ICdmdWxsJ1xyXG4gICAgICB9IGVsc2UgaWYgKCFsYXllckVkaXRpbmdFbmFibGVkKSB7XHJcbiAgICAgICAgcHJpdmlsZWdlID0gJ25vbmUnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJpdmlsZWdlID0gJ25vcm1hbCdcclxuICAgICAgfVxyXG4gICAgICAvLyBmZXRjaCB0byBjb25maXJtIHdoZXRoZXIgaXQncyBhIHB1YmxpYyBzb3VyY2VcclxuICAgICAgY29uc3QgaXNQdWJsaWMgPSBhd2FpdCBnZXREc0FjY2Vzc2libGVJbmZvKGxheWVyLnVybClcclxuICAgICAgY29uc3QgbGF5ZXJJbmZvID0ge1xyXG4gICAgICAgIGlkOiBsYXllckNvbmZpZy5pZCxcclxuICAgICAgICBkYXRhU291cmNlLFxyXG4gICAgICAgIGxheWVyLFxyXG4gICAgICAgIGZvcm1UZW1wbGF0ZSxcclxuICAgICAgICBpc1B1YmxpYyxcclxuICAgICAgICBwcml2aWxlZ2VcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGF5ZXJJbmZvXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICB9XHJcbiAgfSwgW2xheWVyc0NvbmZpZ10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VDcmVhdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKGRzSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbmV3TGF5ZXJJbmZvID0gYXdhaXQgZ2V0TGF5ZXJJbmZvKGRzSWQpXHJcbiAgICBzZXRMYXllcnNJbmZvKG9sZCA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0xheWVyc0luZm8gPSB7fVxyXG4gICAgICBmb3IgKGNvbnN0IGwgb2YgbGF5ZXJzQ29uZmlnKSB7XHJcbiAgICAgICAgaWYgKGwuaWQgPT09IGRzSWQpIHtcclxuICAgICAgICAgIG5ld0xheWVyc0luZm9bbC5pZF0gPSBuZXdMYXllckluZm9cclxuICAgICAgICB9IGVsc2UgaWYgKG9sZFtsLmlkXSkge1xyXG4gICAgICAgICAgbmV3TGF5ZXJzSW5mb1tsLmlkXSA9IG9sZFtsLmlkXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3TGF5ZXJzSW5mb1xyXG4gICAgfSlcclxuICB9LCBbZ2V0TGF5ZXJJbmZvLCBsYXllcnNDb25maWddKVxyXG5cclxuICBjb25zdCBhY3RpdmVJZFJlZiA9IGhvb2tzLnVzZUxhdGVzdChhY3RpdmVJZClcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlTGF5ZXJzSW5mbyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgbmV3TGF5ZXJzSW5mbyA9IHt9XHJcbiAgICAgIGZvciAoY29uc3QgbGF5ZXJDb25maWcgb2YgbGF5ZXJzQ29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgZHNJZCA9IGxheWVyQ29uZmlnLmlkXHJcbiAgICAgICAgY29uc3QgZHMgPSBnZXREYXRhU291cmNlQnlJZChkc0lkKVxyXG4gICAgICAgIGlmICghZHMpIGNvbnRpbnVlXHJcbiAgICAgICAgbmV3TGF5ZXJzSW5mb1tsYXllckNvbmZpZy5pZF0gPSBhd2FpdCBnZXRMYXllckluZm8obGF5ZXJDb25maWcuaWQpXHJcbiAgICAgIH1cclxuICAgICAgc2V0TGF5ZXJzSW5mbyhuZXdMYXllcnNJbmZvKVxyXG4gICAgICBpZiAoYWN0aXZlSWRSZWYuY3VycmVudCAmJiAhbmV3TGF5ZXJzSW5mb1thY3RpdmVJZFJlZi5jdXJyZW50XSkge1xyXG4gICAgICAgIHNldEFjdGl2ZUlkKG51bGwpXHJcbiAgICAgICAgc2V0QWN0aXZlUmVjb3JkcyhudWxsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMYXllcnNJbmZvKClcclxuICB9LCBbbGF5ZXJzQ29uZmlnLCBnZXRMYXllckluZm8sIGFjdGl2ZUlkUmVmXSlcclxuXHJcbiAgY29uc3QgcHJldmlvdXNCYXRjaEVkaXRpbmcgPSBob29rcy51c2VQcmV2aW91cyhiYXRjaEVkaXRpbmcpXHJcbiAgLy8gRXhpdCBiYXRjaCBmb3JtIHdoZW4gdHVybiBvZmYgYmF0Y2ggZWRpdGluZ1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJldmlvdXNCYXRjaEVkaXRpbmcgIT09IGJhdGNoRWRpdGluZyAmJiAhYmF0Y2hFZGl0aW5nICYmIGFjdGl2ZVJlY29yZHM/Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgc2V0QWN0aXZlSWQobnVsbClcclxuICAgICAgc2V0QWN0aXZlUmVjb3JkcyhudWxsKVxyXG4gICAgfVxyXG4gIH0sIFtiYXRjaEVkaXRpbmcsIHByZXZpb3VzQmF0Y2hFZGl0aW5nLCBhY3RpdmVSZWNvcmRzXSlcclxuXHJcbiAgY29uc3QgZWRpdEZlYXR1cmVSZWYgPSBob29rcy51c2VMYXRlc3QoZWRpdEZlYXR1cmVzKVxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbkNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChkYXRhU291cmNlSWRzOiBzdHJpbmdbXSwgc291cmNlVmVyc2lvbj86IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3RWRpdEZlYXR1cmVzID0gT2JqZWN0LmFzc2lnbih7fSwgZWRpdEZlYXR1cmVSZWYuY3VycmVudClcclxuICAgIGZvciAoY29uc3QgZGF0YVNvdXJjZUlkIG9mIGRhdGFTb3VyY2VJZHMpIHtcclxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGdldERhdGFTb3VyY2VCeUlkKGRhdGFTb3VyY2VJZClcclxuICAgICAgaWYgKCFkYXRhU291cmNlKSByZXR1cm5cclxuICAgICAgbGV0IGVkaXRSZWNvcmRzID0gZGF0YVNvdXJjZS5nZXRTZWxlY3RlZFJlY29yZHMoKVxyXG4gICAgICBjb25zdCBmaWVsZE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YVNvdXJjZS5nZXRTY2hlbWEoKS5maWVsZHMgfHwge30pXHJcbiAgICAgIGNvbnN0IGRpc3BsYXlGaWVsZCA9IGdldERpc3BsYXlGaWVsZChkYXRhU291cmNlKVxyXG4gICAgICBpZiAoZWRpdFJlY29yZHMubGVuZ3RoID4gMCAmJiBlZGl0UmVjb3Jkc1swXS5nZXRGaWVsZFZhbHVlKGRpc3BsYXlGaWVsZCkgPT09IHVuZGVmaW5lZCAmJiBmaWVsZE5hbWVzLmluY2x1ZGVzKGRpc3BsYXlGaWVsZCkpIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICBjb25zdCBpZHMgPSBlZGl0UmVjb3Jkcy5tYXAocmVjb3JkID0+IHJlY29yZC5nZXRJZCgpKVxyXG4gICAgICAgICAgY29uc3Qgb3V0RmllbGRzID0gW2Rpc3BsYXlGaWVsZF1cclxuICAgICAgICAgIGNvbnN0IGlkRmllbGQgPSBkYXRhU291cmNlLmdldElkRmllbGQoKVxyXG4gICAgICAgICAgaWYgKGlkRmllbGQpIG91dEZpZWxkcy5wdXNoKGlkRmllbGQpXHJcbiAgICAgICAgICBjb25zdCB1bmlxdWVJZHMgPSBkYXRhU291cmNlLmdldFVuaXF1ZUlkRmllbGRzKCk/LmFzTXV0YWJsZSgpIHx8IFtdXHJcbiAgICAgICAgICBpZiAodW5pcXVlSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgb3V0RmllbGRzLnB1c2goLi4udW5pcXVlSWRzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcXVlcnlSZXN1bHQgPSBhd2FpdCBkYXRhU291cmNlLnF1ZXJ5KHsgb3V0RmllbGRzLCBvYmplY3RJZHM6IGlkcyB9KVxyXG4gICAgICAgICAgaWYgKHF1ZXJ5UmVzdWx0LnJlY29yZHMpIHtcclxuICAgICAgICAgICAgZWRpdFJlY29yZHMgPSBxdWVyeVJlc3VsdC5yZWNvcmRzIGFzIEZlYXR1cmVEYXRhUmVjb3JkW11cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBuZXdFZGl0RmVhdHVyZXNbZGF0YVNvdXJjZUlkXSA9IGVkaXRSZWNvcmRzXHJcbiAgICB9XHJcbiAgICBzZXRFZGl0RmVhdHVyZXMobmV3RWRpdEZlYXR1cmVzKVxyXG4gICAgY29uc3QgZmxhdEVkaXRGZWF0dXJlcyA9IGZsYXRNYXBBcnJheShuZXdFZGl0RmVhdHVyZXMpXHJcbiAgICBpZiAoZmxhdEVkaXRGZWF0dXJlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgY29uc3QgW2RzSWQsIGZlYXR1cmVzXSA9IE9iamVjdC5lbnRyaWVzKG5ld0VkaXRGZWF0dXJlcykuZmluZCgoW2RzSWQsIGZlYXR1cmVzXSkgPT4gZmVhdHVyZXMubGVuZ3RoID4gMClcclxuICAgICAgc2V0QWN0aXZlSWQoZHNJZClcclxuICAgICAgc2V0U291cmNlVmVyc2lvbihzb3VyY2VWZXJzaW9uKVxyXG4gICAgICBzZXRBY3RpdmVSZWNvcmRzKFtmZWF0dXJlc1swXV0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRBY3RpdmVJZChudWxsKVxyXG4gICAgICBzZXRBY3RpdmVSZWNvcmRzKG51bGwpXHJcbiAgICB9XHJcbiAgfSwgW2VkaXRGZWF0dXJlUmVmXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlU291cmNlVmVyc2lvbkNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChkYXRhU291cmNlSWQ6IHN0cmluZywgc291cmNlVmVyc2lvbjogbnVtYmVyKSA9PiB7XHJcbiAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoW2RhdGFTb3VyY2VJZF0sIHNvdXJjZVZlcnNpb24pXHJcbiAgfSwgW2hhbmRsZVNlbGVjdGlvbkNoYW5nZV0pXHJcblxyXG4gIGNvbnN0IGxheWVyc09yZGVyID0gUmVhY3QudXNlTWVtbygoKSA9PiBsYXllcnNDb25maWcubWFwKGwgPT4gbC5pZCkuYXNNdXRhYmxlKCksIFtsYXllcnNDb25maWddKVxyXG4gIGNvbnN0IGZsYXRFZGl0RmVhdHVyZXMgPSBmbGF0TWFwQXJyYXkoZWRpdEZlYXR1cmVzKVxyXG4gIGNvbnN0IGVkaXRDb3VudCA9IGZsYXRFZGl0RmVhdHVyZXMubGVuZ3RoXHJcbiAgY29uc3QgaGFzVmFsaWRMYXllciA9IGxheWVyc0NvbmZpZy5sZW5ndGggPiAwXHJcbiAgY29uc3Qgbm9MYXllclRpcHMgPSB0cmFuc2xhdGUoJ2luaXRBdHRFbXB0eU1lc3NhZ2UnKVxyXG4gIGNvbnN0IGVtcHR5VGlwcyA9IGhhc1ZhbGlkTGF5ZXIgPyAobm9EYXRhTWVzc2FnZSB8fCB0cmFuc2xhdGUoJ25vUmVjb3JkVGlwcycpKSA6IG5vTGF5ZXJUaXBzXHJcblxyXG4gIGxldCBmZWF0dXJlRm9ybVN0ZXA6IEZlYXR1cmVGb3JtU3RlcFxyXG4gIGlmIChhY3RpdmVJZCkge1xyXG4gICAgZmVhdHVyZUZvcm1TdGVwID0gYWN0aXZlUmVjb3JkcyA/ICdmb3JtJyA6ICduZXcnXHJcbiAgfSBlbHNlIHtcclxuICAgIGZlYXR1cmVGb3JtU3RlcCA9IGVkaXRDb3VudCA+IDEgPyAnbGlzdCcgOiAnZW1wdHknXHJcbiAgfVxyXG5cclxuICBsZXQgcmVsaWVzT25Gb3JtUHJpdmlsZWdlc0lzRnVsbCA9IGZhbHNlXHJcbiAgaWYgKGZlYXR1cmVGb3JtU3RlcCA9PT0gJ2Zvcm0nKSB7XHJcbiAgICByZWxpZXNPbkZvcm1Qcml2aWxlZ2VzSXNGdWxsID0gKCF1cGRhdGVSZWNvcmRzIHx8ICFkZWxldGVSZWNvcmRzKSAmJiBmb3JtUHJpdmlsZWdlc0lzRnVsbFxyXG4gIH0gZWxzZSBpZiAoZmVhdHVyZUZvcm1TdGVwID09PSAnbmV3Jykge1xyXG4gICAgcmVsaWVzT25Gb3JtUHJpdmlsZWdlc0lzRnVsbCA9ICFhZGRSZWNvcmRzICYmIGZvcm1Qcml2aWxlZ2VzSXNGdWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBjYWxjaXRlQ29sb3JNYXBwaW5nID0gdXNlQ2FsY2l0ZUNvbG9yTWFwcGluZygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgc2hhcGU9J25vbmUnIGNsYXNzTmFtZT0namltdS13aWRnZXQgd2lkZ2V0LWVkaXQgZXNyaS13aWRnZXQnIGNzcz17W3dpZGdldFN0eWxlLCBjYWxjaXRlQ29sb3JNYXBwaW5nXX0+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nIHR5cGU9e0xvYWRpbmdUeXBlLlNlY29uZGFyeX0gLz59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlZGl0LWNvbiBzdXJmYWNlLTEgYm9yZGVyLTAgaC0xMDAnPlxyXG4gICAgICAgIDxGZWF0dXJlRm9ybUhlYWRlclxyXG4gICAgICAgICAgd2lkZ2V0TGFiZWw9e3dpZGdldExhYmVsfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgaGFzVGFibGVMYXllckFkZD17YWRkTGF5ZXJzQ29uZmlnLmxlbmd0aCA+IDB9XHJcbiAgICAgICAgICBmZWF0dXJlRm9ybVN0ZXA9e2ZlYXR1cmVGb3JtU3RlcH1cclxuICAgICAgICAgIGFjdGl2ZUxheWVySW5mbz17YWN0aXZlTGF5ZXJJbmZvfVxyXG4gICAgICAgICAgYWN0aXZlUmVjb3Jkcz17YWN0aXZlUmVjb3Jkc31cclxuICAgICAgICAgIGVkaXRDb3VudD17ZWRpdENvdW50fVxyXG4gICAgICAgICAgb25CYWNrPXtoYW5kbGVCYWNrQ29uZmlybX1cclxuICAgICAgICAgIG9uTmV3PXtoYW5kbGVOZXd9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYXR0ci1oZWlnaHQnLCB7J2Qtbm9uZSc6IGZlYXR1cmVGb3JtU3RlcCAhPT0gJ2Zvcm0nICYmIGZlYXR1cmVGb3JtU3RlcCAhPT0gJ25ldyd9KX0gcmVmPXtlZGl0Q29udGFpbmVyfT5cclxuICAgICAgICAgIHtmZWF0dXJlRm9ybVN0ZXAgPT09ICduZXcnICYmXHJcbiAgICAgICAgICAgIDxGZWF0dXJlRm9ybVNlbGVjdFxyXG4gICAgICAgICAgICAgIGFkZExheWVyc0NvbmZpZz17YWRkTGF5ZXJzQ29uZmlnfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZUlkPXthY3RpdmVJZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0QWN0aXZlSWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7cmVsaWVzT25Gb3JtUHJpdmlsZWdlc0lzRnVsbCAmJlxyXG4gICAgICAgICAgICA8Y2FsY2l0ZS1ub3RpY2UgY2xhc3NOYW1lPSdlZGl0LW5vdGljZScga2luZD0nYnJhbmQnIG9wZW4gc2NhbGU9XCJzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nbGFiZWwzJz57dHJhbnNsYXRlKCdvd25lckFkbWluTm90aWNlJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2NhbGNpdGUtbm90aWNlPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtmZWF0dXJlRm9ybVN0ZXAgPT09ICdsaXN0JyAmJlxyXG4gICAgICAgICAgPEZlYXR1cmVGb3JtTGlzdFxyXG4gICAgICAgICAgICBlZGl0RmVhdHVyZXM9e2VkaXRGZWF0dXJlc31cclxuICAgICAgICAgICAgbGF5ZXJzSW5mbz17bGF5ZXJzSW5mb31cclxuICAgICAgICAgICAgbGF5ZXJzT3JkZXI9e2xheWVyc09yZGVyfVxyXG4gICAgICAgICAgICBvbkNsaWNrSXRlbT17aGFuZGxlQ2xpY2tJdGVtfVxyXG4gICAgICAgICAgICBiYXRjaEVkaXRpbmc9e2JhdGNoRWRpdGluZ31cclxuICAgICAgICAgICAgb25CYXRjaEVkaXQ9e2hhbmRsZUJhdGNoRWRpdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtmZWF0dXJlRm9ybVN0ZXAgPT09ICdlbXB0eScgJiZcclxuICAgICAgICAgIDxFbXB0eVBsYWNlaG9sZGVyIGVtcHR5VGlwcz17ZW1wdHlUaXBzfSAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7ZmVhdHVyZUZvcm1TdGVwID09PSAnZm9ybScgJiYgY29udHJvbHMubGVuZ3RoID4gMCAmJiBmb3JtRWRpdGFibGUgJiZcclxuICAgICAgICAgIDxGZWF0dXJlRm9ybUJ1dHRvbnMgYnV0dG9ucz17Y29udHJvbHN9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtmZWF0dXJlRm9ybVN0ZXAgPT09ICduZXcnICYmIGFkZENvbnRyb2xzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIDxGZWF0dXJlRm9ybUJ1dHRvbnMgYnV0dG9ucz17YWRkQ29udHJvbHN9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2RlbENvbmZpcm0gJiYgPEZlYXR1cmVGb3JtQ29uZmlybVxyXG4gICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoJ2RlbGV0ZVJlY29yZCcpfVxyXG4gICAgICAgIG1lc3NhZ2U9e2FjdGl2ZVJlY29yZHM/Lmxlbmd0aCA+IDEgPyB0cmFuc2xhdGUoJ2RlbGV0ZVJlY29yZHNUaXBzJykgOiB0cmFuc2xhdGUoJ2RlbGV0ZVJlY29yZFRpcHMnKX1cclxuICAgICAgICBjb25maXJtVGV4dD17dHJhbnNsYXRlKCdkZWxldGUnKX1cclxuICAgICAgICBjYW5jZWxUZXh0PXt0cmFuc2xhdGUoJ2tlZXBSZWNvcmQnKX1cclxuICAgICAgICBvbkNvbmZpcm09e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICBvbkNhbmNlbD17Y2FuY2VsRGVsZXRlfVxyXG4gICAgICAvPn1cclxuICAgICAge2JhY2tDb25maXJtICYmIDxGZWF0dXJlRm9ybUNvbmZpcm1cclxuICAgICAgICB0aXRsZT17dHJhbnNsYXRlKCdzZWxlY3Rpb25DaGFuZ2VDb25maXJtVGl0bGUnKX1cclxuICAgICAgICBtZXNzYWdlPXt0cmFuc2xhdGUoJ3NlbGVjdGlvbkNoYW5nZUNvbmZpcm1UaXBzJyl9XHJcbiAgICAgICAgY29uZmlybVRleHQ9e3RyYW5zbGF0ZSgnZGlzY2FyZENvbmZpcm0nKX1cclxuICAgICAgICBjYW5jZWxUZXh0PXt0cmFuc2xhdGUoJ2Rpc2NhcmRDYW5jZWwnKX1cclxuICAgICAgICBvbkNvbmZpcm09e2hhbmRsZUJhY2t9XHJcbiAgICAgICAgb25DYW5jZWw9e2NhbmNlbEJhY2t9XHJcbiAgICAgIC8+fVxyXG4gICAgICA8RWRpdExpc3REYXRhU291cmNlXHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgIHVuc2F2ZWRDaGFuZ2U9e2Zvcm1DaGFuZ2UgPT09IEZvcm1DaGFuZ2VUeXBlLk5vcm1hbCAmJiBhY3RpdmVSZWNvcmRzPy5sZW5ndGggPiAwfVxyXG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e2hhbmRsZURhdGFTb3VyY2VDcmVhdGVkfVxyXG4gICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb25DaGFuZ2V9XHJcbiAgICAgICAgb25Tb3VyY2VWZXJzaW9uQ2hhbmdlPXtoYW5kbGVTb3VyY2VWZXJzaW9uQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYXBlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVGb3JtQ29tcG9uZW50XHJcbiIsImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuaW50ZXJmYWNlIEZlYXR1cmVGb3JtRGVsZXRlUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBtZXNzYWdlOiBzdHJpbmdcclxuICBjb25maXJtVGV4dDogc3RyaW5nXHJcbiAgY2FuY2VsVGV4dDogc3RyaW5nXHJcbiAgb25Db25maXJtOiAoKSA9PiB2b2lkXHJcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgRmVhdHVyZUZvcm1Db25maXJtID0gKHByb3BzOiBGZWF0dXJlRm9ybURlbGV0ZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgbWVzc2FnZSwgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIG9uQ29uZmlybSwgb25DYW5jZWwgfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiA8Y2FsY2l0ZS1zY3JpbSBkYXRhLXRlc3RpZD0ncHJvbXB0JyBrZXk9J3Byb21wdCc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZXNyaS1lZGl0b3JfX3Byb21wdC0tZGFuZ2VyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VzcmktZWRpdG9yX19wcm9tcHRfX2hlYWRlcic+XHJcbiAgICAgICAgPGNhbGNpdGUtaWNvbiBpY29uPSdleGNsYW1hdGlvbi1tYXJrLXRyaWFuZ2xlJz48L2NhbGNpdGUtaWNvbj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3NwYW4nIHZhcmlhbnQ9J3RpdGxlMicgY2xhc3NOYW1lPSdlc3JpLXdpZGdldF9faGVhZGluZyBlc3JpLWVkaXRvcl9fcHJvbXB0X19oZWFkZXJfX2hlYWRpbmcnPnt0aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2RpdicgdmFyaWFudD0nbGFiZWwxJyBjbGFzc05hbWU9J2VzcmktZWRpdG9yX19wcm9tcHRfX21lc3NhZ2UnPnttZXNzYWdlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VzcmktZWRpdG9yX19wcm9tcHRfX2RpdmlkZXInIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlc3JpLWVkaXRvcl9fcHJvbXB0X19hY3Rpb25zJz5cclxuICAgICAgICA8Y2FsY2l0ZS1idXR0b25cclxuICAgICAgICAgIGFwcGVhcmFuY2U9J291dGxpbmUnXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2VzcmktZWRpdG9yX19wcm9tcHRfX2hhbGYtd2lkdGgtYnV0dG9uJ1xyXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9J3NlY29uZGFyeS1wcm9tcHQtYnV0dG9uJ1xyXG4gICAgICAgICAga2V5PSdwcm9tcHQtc2Vjb25kYXJ5LWJ1dHRvbidcclxuICAgICAgICAgIGtpbmQ9J2RhbmdlcidcclxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsfVxyXG4gICAgICAgICAgd2lkdGg9J2Z1bGwnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nbGFiZWwxJz57Y2FuY2VsVGV4dH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9jYWxjaXRlLWJ1dHRvbj5cclxuICAgICAgICA8Y2FsY2l0ZS1idXR0b25cclxuICAgICAgICAgIGFwcGVhcmFuY2U9J3NvbGlkJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdlc3JpLWVkaXRvcl9fcHJvbXB0X19oYWxmLXdpZHRoLWJ1dHRvbidcclxuICAgICAgICAgIGRhdGEtdGVzdGlkPSdwcmltYXJ5LXByb21wdC1idXR0b24nXHJcbiAgICAgICAgICBrZXk9J3Byb21wdC1wcmltYXJ5LWJ1dHRvbidcclxuICAgICAgICAgIGtpbmQ9J2RhbmdlcidcclxuICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlybX1cclxuICAgICAgICAgIHdpZHRoPSdmdWxsJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2xhYmVsMSc+e2NvbmZpcm1UZXh0fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2NhbGNpdGUtYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvY2FsY2l0ZS1zY3JpbT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUZvcm1Db25maXJtXHJcbiIsImltcG9ydCB7IGNsYXNzTmFtZXMsIGhvb2tzLCB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkLCBjc3MsIHVzZUludGwgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IHVzZUZlYXR1cmVUaXRsZSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB0eXBlIHsgRmVhdHVyZUZvcm1TdGVwLCBMYXllckluZm8gfSBmcm9tICcuL2ZlYXR1cmUtZm9ybS1jb21wb25lbnQnXHJcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXMnXHJcblxyXG5pbnRlcmZhY2UgRmVhdHVyZUZvcm1IZWFkZXJQcm9wcyB7XHJcbiAgd2lkZ2V0TGFiZWw6IHN0cmluZ1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcclxuICBoYXNUYWJsZUxheWVyQWRkOiBib29sZWFuXHJcbiAgZmVhdHVyZUZvcm1TdGVwOiBGZWF0dXJlRm9ybVN0ZXBcclxuICBhY3RpdmVMYXllckluZm86IExheWVySW5mb1xyXG4gIGFjdGl2ZVJlY29yZHM6IEZlYXR1cmVEYXRhUmVjb3JkW11cclxuICBlZGl0Q291bnQ6IG51bWJlclxyXG4gIG9uQmFjazogKCkgPT4gdm9pZFxyXG4gIG9uTmV3OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zeXMtY29sb3ItZGl2aWRlci1zZWNvbmRhcnkpO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXN5cy1zaGFwZS0yKTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tc3lzLXNoYXBlLTIpO1xyXG4gIC5saXN0LWVtcHR5IHtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgIC5saXN0LWVtcHR5LWhlYWRlciB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgLmxpc3QtZW1wdHktaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1lbXB0eS1kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZm9ybS1oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuZm9ybS1oZWFkaW5ne1xyXG4gICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJhY2stYnV0dG9ue1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBwYWRkaW5nLWlubGluZTogOHB4O1xyXG4gICAgcGFkZGluZy1ibG9jazogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLXN1cmZhY2Utc3VyZmFjZS10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN5cy1jb2xvci1kaXZpZGVyLXNlY29uZGFyeSk7XHJcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogMXB4O1xyXG4gIH1cclxuICAuYWRkLWZlYXR1cmUtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgRmVhdHVyZUZvcm1IZWFkZXIgPSAocHJvcHM6IEZlYXR1cmVGb3JtSGVhZGVyUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFjdGl2ZUxheWVySW5mbywgd2lkZ2V0TGFiZWwsIGRlc2NyaXB0aW9uLCBhY3RpdmVSZWNvcmRzLCBlZGl0Q291bnQsIGhhc1RhYmxlTGF5ZXJBZGQsIGZlYXR1cmVGb3JtU3RlcCwgb25CYWNrLCBvbk5ldyB9ID0gcHJvcHNcclxuICBjb25zdCBpc0xpc3RPckVtcHR5ID0gZmVhdHVyZUZvcm1TdGVwID09PSAnbGlzdCcgfHwgZmVhdHVyZUZvcm1TdGVwID09PSAnZW1wdHknXHJcbiAgY29uc3QgaXNGb3JtT3JOZXcgPSBmZWF0dXJlRm9ybVN0ZXAgPT09ICdmb3JtJyB8fCBmZWF0dXJlRm9ybVN0ZXAgPT09ICduZXcnXHJcbiAgbGV0IGFkZEVkaXRMYWJlbCA9ICcnXHJcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxyXG4gIGNvbnN0IGZlYXR1cmVUaXRsZSA9IHVzZUZlYXR1cmVUaXRsZShhY3RpdmVSZWNvcmRzPy5bMF0sIGFjdGl2ZUxheWVySW5mbz8uZGF0YVNvdXJjZSlcclxuICBpZiAoZmVhdHVyZUZvcm1TdGVwID09PSAnbmV3Jykge1xyXG4gICAgYWRkRWRpdExhYmVsID0gdHJhbnNsYXRlKCdhZGRGZWF0dXJlJylcclxuICB9IGVsc2UgaWYgKGZlYXR1cmVGb3JtU3RlcCA9PT0gJ2Zvcm0nICYmIGFjdGl2ZUxheWVySW5mbyAmJiBhY3RpdmVSZWNvcmRzKSB7XHJcbiAgICBpZiAoYWN0aXZlUmVjb3Jkcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGFkZEVkaXRMYWJlbCA9IGFjdGl2ZUxheWVySW5mby5kYXRhU291cmNlLmdldExhYmVsKClcclxuICAgIH0gZWxzZSBpZiAoYWN0aXZlUmVjb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgYWRkRWRpdExhYmVsID0gZmVhdHVyZVRpdGxlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbnRsID0gdXNlSW50bCgpXHJcbiAgY29uc3QgY291bnRMYWJlbCA9IGVkaXRDb3VudCA+IDEgPyBgICgke2ludGwuZm9ybWF0TnVtYmVyKGVkaXRDb3VudCl9KWAgOiAnJ1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAnZC1mbGV4JzogaXNGb3JtT3JOZXcgfSl9IGNzcz17c3R5bGV9PlxyXG4gICAge2lzRm9ybU9yTmV3ICYmXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9J2JhY2stYnV0dG9uJ1xyXG4gICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoJ2JhY2snKX1cclxuICAgICAgICBvbkNsaWNrPXtvbkJhY2t9XHJcbiAgICAgID4mbHQ7PC9idXR0b24+XHJcbiAgICB9XHJcbiAgICB7aXNMaXN0T3JFbXB0eSAmJiA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1lbXB0eSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWVtcHR5LWhlYWRlcic+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0ndGl0bGUxJyBjbGFzc05hbWU9J2xpc3QtZW1wdHktaGVhZGVyLXRpdGxlJz57d2lkZ2V0TGFiZWwgKyBjb3VudExhYmVsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9J3RpdGxlMydcclxuICAgICAgICAgIGNvbG9yPSd2YXIoLS1zeXMtY29sb3Itc3VyZmFjZS1wYXBlci1oaW50KSdcclxuICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgdGl0bGU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdsaXN0LWVtcHR5LWRlc2NyaXB0aW9uLXRleHQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+fVxyXG4gICAge2lzRm9ybU9yTmV3ICYmXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdmb3JtLWhlYWRlcic+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0ndGl0bGUxJyBub1dyYXAgdGl0bGU9e2FkZEVkaXRMYWJlbH0gY2xhc3NOYW1lPSdmb3JtLWhlYWRpbmcnPlxyXG4gICAgICAgICAge2FkZEVkaXRMYWJlbH1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgfVxyXG4gICAge2hhc1RhYmxlTGF5ZXJBZGQgJiYgaXNMaXN0T3JFbXB0eSAmJlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgaWNvblxyXG4gICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgIGNvbG9yPSdpbmhlcml0J1xyXG4gICAgICAgIGNsYXNzTmFtZT0nYWRkLWZlYXR1cmUtYnRuJ1xyXG4gICAgICAgIG9uQ2xpY2s9e29uTmV3fVxyXG4gICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoJ2FkZEZlYXR1cmUnKX1cclxuICAgICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2FkZEZlYXR1cmUnKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxQbHVzT3V0bGluZWQgY2xhc3NOYW1lPSdtci0xJyAvPlxyXG4gICAgICAgIHt0cmFuc2xhdGUoJ2FkZCcpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIH1cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUZvcm1IZWFkZXJcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgRmVhdHVyZURhdGFSZWNvcmQsIGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgdXNlRmVhdHVyZVRpdGxlTWFwIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZUJ5SWQsIGdldEVkaXREYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB0eXBlIHsgRmVhdHVyZUZvcm1Hcm91cCB9IGZyb20gJy4vZmVhdHVyZS1mb3JtLWxpc3QnXHJcblxyXG5pbnRlcmZhY2UgRmVhdHVyZUZvcm1MaXN0SXRlbVByb3BzIHtcclxuICBncm91cDogRmVhdHVyZUZvcm1Hcm91cFxyXG4gIGZpbHRlclRleHQ6IHN0cmluZ1xyXG4gIG9uQ2xpY2tJdGVtOiAoZHNJZDogc3RyaW5nLCBmZWF0dXJlOiBGZWF0dXJlRGF0YVJlY29yZCkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAmLmZlYXR1cmUtbGlzdC1pdGVtcyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5mZWF0dXJlLWxpc3QtaXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN5cy1jb2xvci1hY3Rpb24pO1xyXG4gICAgICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLWFjdGlvbi10ZXh0KTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlciAyNTBtcyBlYXNlLWluLW91dDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAuZmVhdHVyZS1saXN0LWl0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogOXB4IDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuZmVhdHVyZS1saXN0LWl0ZW0tbGFiZWx7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN5cy1jb2xvci1hY3Rpb24taG92ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIDpmb2N1cyxcclxuICAgICAgOmZvY3VzLXZpc2libGUge1xyXG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEZlYXR1cmVGb3JtTGlzdEl0ZW1zID0gKHByb3BzOiBGZWF0dXJlRm9ybUxpc3RJdGVtUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGdyb3VwLCBmaWx0ZXJUZXh0LCBvbkNsaWNrSXRlbSB9ID0gcHJvcHNcclxuICBjb25zdCBkYXRhU291cmNlID0gZ2V0RWRpdERhdGFTb3VyY2UoZ2V0RGF0YVNvdXJjZUJ5SWQoZ3JvdXAuZHNJZCkpXHJcbiAgY29uc3QgZmVhdHVyZVRpdGxlTWFwID0gdXNlRmVhdHVyZVRpdGxlTWFwKGdyb3VwLml0ZW1zLCBkYXRhU291cmNlKVxyXG5cclxuICBjb25zdCBsb3dlckNhc2VkRmlsdGVyID0gZmlsdGVyVGV4dC50b0xvd2VyQ2FzZSgpXHJcbiAgY29uc3QgaXNNYXRjaCA9ICh0aXRsZTogc3RyaW5nKSA9PiAhbG93ZXJDYXNlZEZpbHRlciB8fCB0aXRsZT8udG9TdHJpbmcoKT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlckNhc2VkRmlsdGVyKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmZWF0dXJlLWxpc3QtaXRlbXMnIHJvbGU9J2xpc3Rib3gnIGNzcz17c3R5bGV9PlxyXG4gICAgICB7Z3JvdXAuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gaXRlbS5nZXRJZCgpXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmZWF0dXJlVGl0bGVNYXAuZ2V0KGlkKSB8fCAnJ1xyXG4gICAgICAgIGlmICghaXNNYXRjaCh0aXRsZSkpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoPEJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e2Ake2dyb3VwLmRzSWR9X18ke2lkfV8ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHJvbGU9J29wdGlvbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCBib3JkZXItMCBmZWF0dXJlLWxpc3QtaXRlbSdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBvbkNsaWNrSXRlbShncm91cC5kc0lkLCBpdGVtKSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZS1saXN0LWl0ZW0tY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZlYXR1cmUtbGlzdC1pdGVtLWxhYmVsJz57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQnV0dG9uPilcclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlRm9ybUxpc3RJdGVtc1xyXG4iLCJpbXBvcnQge1xyXG4gIFJlYWN0LCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdUNvcmVNZXNzYWdlcywgaG9va3MsIHR5cGUgRmVhdHVyZURhdGFSZWNvcmQsIGNzc1xyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0SW5wdXQsIFR5cG9ncmFwaHkgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBTZWFyY2hPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3NlYXJjaCdcclxuaW1wb3J0IHsgQmF0Y2hFZGl0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9iYXRjaC1lZGl0J1xyXG5pbXBvcnQgdHlwZSB7IEVkaXRGZWF0dXJlcyB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB0eXBlIHsgTGF5ZXJJbmZvIH0gZnJvbSAnLi9mZWF0dXJlLWZvcm0tY29tcG9uZW50J1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgRmVhdHVyZUZvcm1MaXN0SXRlbXMgZnJvbSAnLi9mZWF0dXJlLWZvcm0tbGlzdC1pdGVtcydcclxuXHJcbmludGVyZmFjZSBGZWF0dXJlRm9ybUxpc3RQcm9wcyB7XHJcbiAgZWRpdEZlYXR1cmVzOiBFZGl0RmVhdHVyZXNcclxuICBsYXllcnNJbmZvOiB7IFtkc0lkOiBzdHJpbmddOiBMYXllckluZm8gfVxyXG4gIGxheWVyc09yZGVyOiBzdHJpbmdbXVxyXG4gIGJhdGNoRWRpdGluZzogYm9vbGVhblxyXG4gIG9uQmF0Y2hFZGl0OiAoZHNJZDogc3RyaW5nLCByZWNvcmRzOiBGZWF0dXJlRGF0YVJlY29yZFtdKSA9PiB2b2lkXHJcbiAgb25DbGlja0l0ZW06IChkc0lkOiBzdHJpbmcsIHJlY29yZDogRmVhdHVyZURhdGFSZWNvcmQpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlRm9ybUdyb3VwIHtcclxuICBpZDogc3RyaW5nXHJcbiAgZHNJZDogc3RyaW5nXHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIGl0ZW1zOiBGZWF0dXJlRGF0YVJlY29yZFtdXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICYuZmVhdHVyZS1saXN0IHtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJhY2tncm91bmQpO1xyXG4gICAgLmZlYXR1cmUtbGlzdC1uby1tYXRjaCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZS1saXN0LWdyb3VwIHtcclxuICAgICAgcGFkZGluZzogMTJweCAxMnB4IDA7XHJcbiAgICAgIC5mZWF0dXJlLWxpc3QtZ3JvdXAtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZlYXR1cmUtbGlzdC1ncm91cC1sYWJlbCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBGZWF0dXJlRm9ybUxpc3QgPSAocHJvcHM6IEZlYXR1cmVGb3JtTGlzdFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBlZGl0RmVhdHVyZXMsIGxheWVyc09yZGVyLCBsYXllcnNJbmZvLCBiYXRjaEVkaXRpbmcsIG9uQmF0Y2hFZGl0LCBvbkNsaWNrSXRlbSB9ID0gcHJvcHNcclxuICBjb25zdCBbZmlsdGVyVGV4dCwgc2V0RmlsdGVyVGV4dF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihqaW11Q29yZU1lc3NhZ2VzLCBkZWZhdWx0TWVzc2FnZXMpXHJcbiAgY29uc3QgeyBjb3VudCwgZ3JvdXBlZFNlbGVjdGVkRmVhdHVyZXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IGNvdW50ID0gMFxyXG4gICAgY29uc3QgZ3JvdXBlZFNlbGVjdGVkRmVhdHVyZXM6IEZlYXR1cmVGb3JtR3JvdXBbXSA9IFtdXHJcbiAgICBmb3IgKGNvbnN0IGRzSWQgaW4gZWRpdEZlYXR1cmVzKSB7XHJcbiAgICAgIGNvbnN0IGZlYXR1cmVzQXJyYXkgPSBlZGl0RmVhdHVyZXNbZHNJZF1cclxuICAgICAgaWYgKGZlYXR1cmVzQXJyYXkubGVuZ3RoID09PSAwIHx8ICFsYXllcnNJbmZvW2RzSWRdKSBjb250aW51ZVxyXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gbGF5ZXJzSW5mb1tkc0lkXT8uZGF0YVNvdXJjZVxyXG4gICAgICBjb25zdCBkc0xhYmVsID0gZGF0YVNvdXJjZS5nZXRMYWJlbCgpXHJcbiAgICAgIGNvbnN0IGdyb3VwOiBGZWF0dXJlRm9ybUdyb3VwID0ge1xyXG4gICAgICAgIGlkOiBkc0lkLFxyXG4gICAgICAgIGRzSWQsXHJcbiAgICAgICAgbGFiZWw6IGRzTGFiZWwsXHJcbiAgICAgICAgaXRlbXM6IGZlYXR1cmVzQXJyYXlcclxuICAgICAgfVxyXG4gICAgICBjb3VudCArPSBncm91cC5pdGVtcy5sZW5ndGhcclxuICAgICAgZ3JvdXBlZFNlbGVjdGVkRmVhdHVyZXMucHVzaChncm91cClcclxuICAgIH1cclxuICAgIC8vIFNvcnQgdGhlIEZlYXR1cmVGb3JtIHNlbGVjdGlvbiBsaXN0XHJcbiAgICBncm91cGVkU2VsZWN0ZWRGZWF0dXJlcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFJbmRleCA9IGxheWVyc09yZGVyLmZpbmRJbmRleChkc0lkID0+IGRzSWQgPT09IGEuaWQpXHJcbiAgICAgIGNvbnN0IGJJbmRleCA9IGxheWVyc09yZGVyLmZpbmRJbmRleChkc0lkID0+IGRzSWQgPT09IGIuaWQpXHJcbiAgICAgIHJldHVybiBhSW5kZXggLSBiSW5kZXhcclxuICAgIH0pXHJcbiAgICByZXR1cm4geyBjb3VudCwgZ3JvdXBlZFNlbGVjdGVkRmVhdHVyZXMgfVxyXG4gIH0sIFtlZGl0RmVhdHVyZXMsIGxheWVyc0luZm8sIGxheWVyc09yZGVyXSlcclxuXHJcblxyXG4gIGNvbnN0IG9uRmlsdGVyQ2hhbmdlID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldEZpbHRlclRleHQoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhdGNoRWRpdCA9IChncm91cDogRmVhdHVyZUZvcm1Hcm91cCkgPT4ge1xyXG4gICAgb25CYXRjaEVkaXQ/Lihncm91cC5kc0lkLCBncm91cC5pdGVtcylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZS1saXN0IGgtMTAwIG92ZXJmbG93LWF1dG8nIGNzcz17c3R5bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZS1saXN0LXNlYXJjaCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG0tMic+XHJcbiAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3NlYXJjaCcpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2ZpbHRlclRleHR9XHJcbiAgICAgICAgICBwcmVmaXg9ezxTZWFyY2hPdXRsaW5lZCBjb2xvcj0ndmFyKC0tc3lzLWNvbG9yLWFjdGlvbi1pbnB1dC1maWVsZC1wbGFjZWhvbGRlciknIC8+fVxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgdGl0bGU9e2ZpbHRlclRleHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjb3VudCA9PT0gMCAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmZWF0dXJlLWxpc3Qtbm8tbWF0Y2gnPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0ndGl0bGUxJz57dHJhbnNsYXRlKCdub0l0ZW1zRm91bmQnKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAge2NvdW50ID4gMCAmJiA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZS1saXN0LWdyb3Vwcyc+XHJcbiAgICAgICAge2dyb3VwZWRTZWxlY3RlZEZlYXR1cmVzLm1hcChncm91cCA9PlxyXG4gICAgICAgICAgPGRpdiByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17Z3JvdXAubGFiZWx9IGNsYXNzTmFtZT0nZmVhdHVyZS1saXN0LWdyb3VwJyBrZXk9e2dyb3VwLmlkfT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZmVhdHVyZS1saXN0LWdyb3VwLWhlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJyB0aXRsZT17Z3JvdXAubGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0nc3BhbicgdmFyaWFudD0ndGl0bGUyJyBjbGFzc05hbWU9J2ZlYXR1cmUtbGlzdC1ncm91cC1sYWJlbCc+e2dyb3VwLmxhYmVsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB7YmF0Y2hFZGl0aW5nICYmXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J3NtJyB2YXJpYW50PSd0ZXh0JyBpY29uIGRpc2FibGVkPXtncm91cC5pdGVtcy5sZW5ndGggPT09IDB9IHRpdGxlPXt0cmFuc2xhdGUoJ2VkaXRUaGVzZVJlY29yZHMnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVCYXRjaEVkaXQoZ3JvdXApIH19ID5cclxuICAgICAgICAgICAgICAgICAgPEJhdGNoRWRpdE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxGZWF0dXJlRm9ybUxpc3RJdGVtcyBncm91cD17Z3JvdXB9IGZpbHRlclRleHQ9e2ZpbHRlclRleHR9IG9uQ2xpY2tJdGVtPXtvbkNsaWNrSXRlbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUZvcm1MaXN0XHJcbiIsImltcG9ydCB7IFJlYWN0LCBob29rcywgY3NzLCB0eXBlIEltbXV0YWJsZUFycmF5IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMsIFNlbGVjdCwgVHlwb2dyYXBoeSB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB0eXBlIHsgTGF5ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5cclxuaW50ZXJmYWNlIEZlYXR1cmVGb3JtU2VsZWN0UHJvcHMge1xyXG4gIGFkZExheWVyc0NvbmZpZzogSW1tdXRhYmxlQXJyYXk8TGF5ZXJzQ29uZmlnPlxyXG4gIGFjdGl2ZUlkOiBzdHJpbmdcclxuICBvbkNoYW5nZTogKGRzSWQ6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAmLmxheWVyLXNlbGVjdG9ye1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgRmVhdHVyZUZvcm1TZWxlY3QgPSAocHJvcHM6IEZlYXR1cmVGb3JtU2VsZWN0UHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFjdGl2ZUlkLCBhZGRMYXllcnNDb25maWcsIG9uQ2hhbmdlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGppbXVVSU1lc3NhZ2VzKVxyXG5cclxuICBjb25zdCBpc1NpbmdsZSA9IGFkZExheWVyc0NvbmZpZy5sZW5ndGggPT09IDFcclxuICBjb25zdCBsYWJlbCA9IGlzU2luZ2xlID8gYWRkTGF5ZXJzQ29uZmlnWzBdLm5hbWUgOiB0cmFuc2xhdGUoJ3NlbGVjdExheWVyJylcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2dCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRMYXllcklkID0gZXZ0Py50YXJnZXQ/LnZhbHVlXHJcbiAgICBvbkNoYW5nZShzZWxlY3RlZExheWVySWQpXHJcbiAgfSwgW29uQ2hhbmdlXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdsYXllci1zZWxlY3RvcicgY3NzPXtzdHlsZX0+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdsYWJlbDEnPntsYWJlbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIHshaXNTaW5nbGUgJiYgPFNlbGVjdFxyXG4gICAgICAgIHZhbHVlPXthY3RpdmVJZH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2FkZExheWVyc0NvbmZpZy5tYXAoY29uZmlnID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjb25maWcuaWR9IHZhbHVlPXtjb25maWcuaWR9PlxyXG4gICAgICAgICAgICAgIHtjb25maWcubmFtZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvU2VsZWN0Pn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUZvcm1TZWxlY3RcclxuIiwiaW1wb3J0IHsgSW1tdXRhYmxlLCBSZWFjdCwgaG9va3MsIHR5cGUgSlNBUElMYXllclR5cGVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEppbXVMYXllclZpZXcsIHR5cGUgSmltdU1hcFZpZXcsIFNuYXBwaW5nVXRpbHMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IEVkaXRvciBmcm9tICdlc3JpL3dpZGdldHMvRWRpdG9yJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnLCB0eXBlIExheWVyc0NvbmZpZywgU25hcFNldHRpbmdNb2RlIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXREYXRhU291cmNlQnlJZCwgZ2V0RWRpdERhdGFTb3VyY2UsIFNVUFBPUlRFRF9KSU1VX0xBWUVSX1RZUEVTLCB0eXBlIFN1cHBvcnRlZERhdGFTb3VyY2UsIHR5cGUgU3VwcG9ydGVkTGF5ZXIgfSBmcm9tICcuLi8uLi91dGlscydcclxuaW1wb3J0IHsgY29uc3RydWN0VW5lZGl0YWJsZUluZm8sIGdldEVkaXRvckxheWVySW5mbywgaXNFZGl0YWJsZUxheWVyVmlldywgdXBkYXRlRGF0YVNvdXJjZUFmdGVyRWRpdCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5pbnRlcmZhY2UgVXNlRWRpdG9yT3B0aW9ucyB7XHJcbiAgY29uZmlnOiBJTUNvbmZpZ1xyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlld1xyXG4gIGVkaXRDb250YWluZXI6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD5cclxuICBjYW5FZGl0RmVhdHVyZTogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCB1c2VFZGl0b3IgPSAob3B0aW9uczogVXNlRWRpdG9yT3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHsgY29uZmlnLCBqaW11TWFwVmlldywgZWRpdENvbnRhaW5lciwgY2FuRWRpdEZlYXR1cmUgfSA9IG9wdGlvbnNcclxuICBjb25zdCB7IG1hcFZpZXdzQ29uZmlnLCByZWxhdGVkUmVjb3JkcywgbGl2ZURhdGFFZGl0aW5nIH0gPSBjb25maWdcclxuICBjb25zdCBlZGl0b3JSZWYgPSBSZWFjdC51c2VSZWY8RWRpdG9yPihudWxsKVxyXG4gIGNvbnN0IFtlZGl0b3IsIHNldEVkaXRvcl0gPSBSZWFjdC51c2VTdGF0ZTxFZGl0b3I+KG51bGwpXHJcbiAgY29uc3QgZGVzdHJveUVkaXRvciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChlZGl0b3JSZWYuY3VycmVudCAmJiAhZWRpdG9yUmVmLmN1cnJlbnQuZGVzdHJveWVkKSB7XHJcbiAgICAgIGVkaXRvclJlZi5jdXJyZW50LmRlc3Ryb3koKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkZXN0cm95RWRpdG9yKClcclxuICAgIH1cclxuICB9LCBbZGVzdHJveUVkaXRvcl0pXHJcblxyXG4gIGNvbnN0IFtlZGl0b3JMYXllckluZm9zLCBzZXRFZGl0b3JMYXllckluZm9zXSA9IFJlYWN0LnVzZVN0YXRlPF9fZXNyaS5FZGl0b3JMYXllckluZm9bXT4oW10pXHJcbiAgY29uc3QgW3Nob3dVcGRhdGVCdG4sIHNldFNob3dVcGRhdGVCdG5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgdXBkYXRlRWRpdG9yTGF5ZXJJbmZvcyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcgfHwgdHlwZW9mIGNhbkVkaXRGZWF0dXJlICE9PSAnYm9vbGVhbicpIHJldHVyblxyXG4gICAgbGV0IGFsbExheWVyVmlld3MgPSBqaW11TWFwVmlldy5nZXRBbGxKaW11TGF5ZXJWaWV3cygpXHJcbiAgICBjb25zdCBtYXBWaWV3Q29uZmlnID0gbWFwVmlld3NDb25maWc/LltqaW11TWFwVmlldy5pZF1cclxuICAgIGNvbnN0IGN1c3RvbWl6ZUxheWVycyA9IG1hcFZpZXdDb25maWc/LmN1c3RvbWl6ZUxheWVyc1xyXG4gICAgY29uc3QgY3VzdG9tSmltdUxheWVyVmlld0lkcyA9IG1hcFZpZXdDb25maWc/LmN1c3RvbUppbXVMYXllclZpZXdJZHNcclxuICAgIGNvbnN0IGxheWVyc0NvbmZpZyA9IG1hcFZpZXdDb25maWc/LmxheWVyc0NvbmZpZyB8fCBJbW11dGFibGU8TGF5ZXJzQ29uZmlnW10+KFtdKVxyXG4gICAgaWYgKGN1c3RvbWl6ZUxheWVycykge1xyXG4gICAgICBhbGxMYXllclZpZXdzID0gYWxsTGF5ZXJWaWV3cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYUluZGV4ID0gbGF5ZXJzQ29uZmlnLmZpbmRJbmRleChsYXllckNvbmZpZyA9PiBsYXllckNvbmZpZy5pZCA9PT0gYS5sYXllckRhdGFTb3VyY2VJZClcclxuICAgICAgICBjb25zdCBiSW5kZXggPSBsYXllcnNDb25maWcuZmluZEluZGV4KGxheWVyQ29uZmlnID0+IGxheWVyQ29uZmlnLmlkID09PSBiLmxheWVyRGF0YVNvdXJjZUlkKVxyXG4gICAgICAgIHJldHVybiBhSW5kZXggLSBiSW5kZXhcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFsbExheWVycyA9IGppbXVNYXBWaWV3LnZpZXc/Lm1hcD8uYWxsTGF5ZXJzPy50b0FycmF5Py4oKSB8fCBbXVxyXG4gICAgY29uc3QgdW5lZGl0YWJsZUxheWVycyA9IGFsbExheWVycy5maWx0ZXIobGF5ZXIgPT4ge1xyXG4gICAgICBjb25zdCBpc1N1cHBvcnRlZCA9IFNVUFBPUlRFRF9KSU1VX0xBWUVSX1RZUEVTLmluY2x1ZGVzKGxheWVyLnR5cGUgYXMgSlNBUElMYXllclR5cGVzKVxyXG4gICAgICBjb25zdCBub3RJbkppbXVMYXllclZpZXcgPSAhYWxsTGF5ZXJWaWV3cy5maW5kKGxheWVyVmlldyA9PiBsYXllclZpZXcubGF5ZXIgPT09IGxheWVyKVxyXG4gICAgICByZXR1cm4gaXNTdXBwb3J0ZWQgJiYgbm90SW5KaW11TGF5ZXJWaWV3XHJcbiAgICB9KSBhcyBTdXBwb3J0ZWRMYXllcltdXHJcbiAgICBjb25zdCBzdXBwb3J0ZWRMYXllclZpZXdzID0gYWxsTGF5ZXJWaWV3cy5maWx0ZXIobGF5ZXJWaWV3ID0+IHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBsYXllclZpZXcubGF5ZXJcclxuICAgICAgY29uc3QgaXNTdXBwb3J0ZWQgPSBTVVBQT1JURURfSklNVV9MQVlFUl9UWVBFUy5pbmNsdWRlcyhsYXllci50eXBlKVxyXG4gICAgICByZXR1cm4gaXNTdXBwb3J0ZWRcclxuICAgIH0pXHJcbiAgICBjb25zdCBlZGl0YWJsZUxheWVyVmlld3M6IEppbXVMYXllclZpZXdbXSA9IFtdXHJcbiAgICBzdXBwb3J0ZWRMYXllclZpZXdzLmZvckVhY2gobGF5ZXJWaWV3ID0+IHtcclxuICAgICAgY29uc3QgaXNFZGl0YWJsZSA9IGlzRWRpdGFibGVMYXllclZpZXcobGF5ZXJWaWV3LCBjdXN0b21pemVMYXllcnMsIGN1c3RvbUppbXVMYXllclZpZXdJZHMsIGxpdmVEYXRhRWRpdGluZylcclxuICAgICAgaWYgKGlzRWRpdGFibGUpIHtcclxuICAgICAgICBlZGl0YWJsZUxheWVyVmlld3MucHVzaChsYXllclZpZXcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdW5lZGl0YWJsZUxheWVycy5wdXNoKGxheWVyVmlldy5sYXllcilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHVuZWRpdGFibGVMYXllckluZm9zID0gdW5lZGl0YWJsZUxheWVycy5tYXAobGF5ZXIgPT4gY29uc3RydWN0VW5lZGl0YWJsZUluZm8obGF5ZXIpKVxyXG4gICAgY29uc3QgZWRpdGFibGVQcm9taXNlID0gZWRpdGFibGVMYXllclZpZXdzLm1hcChhc3luYyAobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRzID0gYXdhaXQgbGF5ZXJWaWV3LmdldE9yQ3JlYXRlTGF5ZXJEYXRhU291cmNlKCkgYXMgU3VwcG9ydGVkRGF0YVNvdXJjZVxyXG4gICAgICBpZiAoIWRzKSByZXR1cm4gbnVsbFxyXG4gICAgICBjb25zdCBsYXllckNvbmZpZyA9IGxheWVyc0NvbmZpZy5maWx0ZXIobCA9PiBsLmlkID09PSBkcz8uaWQpPy5bMF0/LmFzTXV0YWJsZT8uKHsgZGVlcDogdHJ1ZSB9KVxyXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0RWRpdERhdGFTb3VyY2UoZHMpXHJcbiAgICAgIHJldHVybiBnZXRFZGl0b3JMYXllckluZm8oZGF0YVNvdXJjZSwgbGF5ZXJDb25maWcsIGxheWVyVmlldywgcmVsYXRlZFJlY29yZHMsIGNhbkVkaXRGZWF0dXJlKVxyXG4gICAgfSlcclxuICAgIFByb21pc2UuYWxsKGVkaXRhYmxlUHJvbWlzZSkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICBjb25zdCB2YWxpZFJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcih2ID0+ICEhdilcclxuICAgICAgc2V0U2hvd1VwZGF0ZUJ0bih2YWxpZFJlc3VsdHMuc29tZShyID0+IHIuc2hvd1VwZGF0ZUJ0bikpXHJcbiAgICAgIGNvbnN0IGxheWVySW5mb3MgPSB2YWxpZFJlc3VsdHMubWFwKHIgPT4gci5lZGl0b3JMYXllckluZm8pLmNvbmNhdCh1bmVkaXRhYmxlTGF5ZXJJbmZvcylcclxuICAgICAgY29uc3QgcmVsYXRlZFRhYmxlSW5mb3MgPSBbXVxyXG4gICAgICBjb25zdCBhbGxUYWJsZXMgPSAoamltdU1hcFZpZXcudmlldy5tYXAuYWxsVGFibGVzLnRvQXJyYXkoKSB8fCBbXSkgYXMgX19lc3JpLkZlYXR1cmVMYXllcltdXHJcbiAgICAgIGZvciAoY29uc3QgbGF5ZXJJbmZvIG9mIGxheWVySW5mb3MpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGxheWVySW5mby5mb3JtVGVtcGxhdGU/LmVsZW1lbnRzIHx8IFtdXHJcbiAgICAgICAgY29uc3QgaGFzUmVsYXRpb25zaGlwcyA9IGVsZW1lbnRzLnNvbWUoZSA9PiBlLnR5cGUgPT09ICdyZWxhdGlvbnNoaXAnKVxyXG4gICAgICAgIGlmICghaGFzUmVsYXRpb25zaGlwcykgY29udGludWVcclxuICAgICAgICBjb25zdCByZWxhdGlvbnNoaXBzID0gKGxheWVySW5mby5sYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyIHwgX19lc3JpLlN1YnR5cGVTdWJsYXllciB8IF9fZXNyaS5TY2VuZUxheWVyKS5yZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgZm9yIChjb25zdCByZWxhdGlvbnNoaXAgb2YgcmVsYXRpb25zaGlwcykge1xyXG4gICAgICAgICAgY29uc3QgcmVsYXRlZFRhYmxlSWQgPSByZWxhdGlvbnNoaXAucmVsYXRlZFRhYmxlSWRcclxuICAgICAgICAgIGNvbnN0IHJlbGF0ZWRUYWJsZSA9IGFsbFRhYmxlcy5maW5kKHQgPT4gdC5sYXllcklkID09PSByZWxhdGVkVGFibGVJZClcclxuICAgICAgICAgIGlmICghcmVsYXRlZFRhYmxlKSBjb250aW51ZVxyXG4gICAgICAgICAgY29uc3QgcmVsYXRlZFRhYmxlSW5mbyA9IHJlbGF0ZWRUYWJsZUluZm9zLmZpbmQodGFibGVJbmZvID0+IHRhYmxlSW5mby5sYXllciA9PT0gcmVsYXRlZFRhYmxlKVxyXG4gICAgICAgICAgaWYgKHJlbGF0ZWRUYWJsZUluZm8pIGNvbnRpbnVlXHJcbiAgICAgICAgICByZWxhdGVkVGFibGVJbmZvcy5wdXNoKHtcclxuICAgICAgICAgICAgbGF5ZXI6IHJlbGF0ZWRUYWJsZSxcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgYWRkRW5hYmxlZDogbGF5ZXJJbmZvLmFkZEVuYWJsZWQsXHJcbiAgICAgICAgICAgIHVwZGF0ZUVuYWJsZWQ6IGxheWVySW5mby51cGRhdGVFbmFibGVkLFxyXG4gICAgICAgICAgICBkZWxldGVFbmFibGVkOiBsYXllckluZm8uZGVsZXRlRW5hYmxlZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldEVkaXRvckxheWVySW5mb3MobGF5ZXJJbmZvcy5jb25jYXQocmVsYXRlZFRhYmxlSW5mb3MpKVxyXG4gICAgfSlcclxuICB9LCBbY2FuRWRpdEZlYXR1cmUsIGppbXVNYXBWaWV3LCBsaXZlRGF0YUVkaXRpbmcsIG1hcFZpZXdzQ29uZmlnLCByZWxhdGVkUmVjb3Jkc10pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGVFZGl0b3JMYXllckluZm9zKClcclxuICB9LCBbdXBkYXRlRWRpdG9yTGF5ZXJJbmZvc10pXHJcblxyXG4gIGNvbnN0IHVwZGF0ZUVkaXRvckxheWVySW5mb3NSZWYgPSBob29rcy51c2VMYXRlc3QodXBkYXRlRWRpdG9yTGF5ZXJJbmZvcylcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldz8udmlldz8ubWFwPy5sYXllcnMpIHJldHVyblxyXG4gICAgY29uc3QgdmlzaWJsZUNoYW5nZWRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgdXBkYXRlRWRpdG9yTGF5ZXJJbmZvc1JlZi5jdXJyZW50KClcclxuICAgIH1cclxuICAgIGxldCB0aW1lcjogbnVtYmVyID0gbnVsbFxyXG4gICAgbGV0IGxhc3RMYXllckNvdW50ID0gamltdU1hcFZpZXcuZ2V0QWxsSmltdUxheWVyVmlld3MoKS5sZW5ndGhcclxuICAgIGNvbnN0IGxheWVyc0NoYW5nZWRMaXN0ZW5lciA9IChqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgIC8vIGlmIHRoZSBsYXllciBpcyBmcm9tIHJ1bnRpbWUsIHVwZGF0ZSBsYXllckluZm9zIGltbWVkaWF0ZWx5XHJcbiAgICAgIGlmIChqaW11TGF5ZXJWaWV3LmZyb21SdW50aW1lKSB7XHJcbiAgICAgICAgdXBkYXRlRWRpdG9yTGF5ZXJJbmZvc1JlZi5jdXJyZW50KClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICAvLyBpZiB0aGUgbGF5ZXIgaXMgY3JlYXRlZCB3aGlsZSBtYXAgbG9hZGluZywgZGVib3VuY2UgdGhlIHVwZGF0ZSBmb3IgNSBzZWNvbmRzXHJcbiAgICAgIC8vIHRvIGF2b2lkIHRvbyBtYW55IHVwZGF0ZXNcclxuICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcilcclxuICAgICAgfVxyXG4gICAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50TGF5ZXJDb3VudCA9IGppbXVNYXBWaWV3LmdldEFsbEppbXVMYXllclZpZXdzKCkubGVuZ3RoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRMYXllckNvdW50ID09PSBsYXN0TGF5ZXJDb3VudCkgcmV0dXJuXHJcbiAgICAgICAgdXBkYXRlRWRpdG9yTGF5ZXJJbmZvc1JlZi5jdXJyZW50KClcclxuICAgICAgICBsYXN0TGF5ZXJDb3VudCA9IGN1cnJlbnRMYXllckNvdW50XHJcbiAgICAgIH0sIDUwMDApXHJcbiAgICB9XHJcbiAgICBjb25zdCBub25FZGl0TGF5ZXJBZGRMaXN0ZW5lciA9IChldmVudDogX19lc3JpLkNvbGxlY3Rpb25BZnRlckl0ZW1FdmVudDxfX2VzcmkuTGF5ZXI+KSA9PiB7XHJcbiAgICAgIGlmIChldmVudD8uaXRlbT8uZGVjbGFyZWRDbGFzcyA9PT0gJ2VzcmkubGF5ZXJzLkdyYXBoaWNzTGF5ZXInIHx8IGV2ZW50Py5pdGVtPy5saXN0TW9kZSA9PT0gJ2hpZGUnKSB7XHJcbiAgICAgICAgdXBkYXRlRWRpdG9yTGF5ZXJJbmZvc1JlZi5jdXJyZW50KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgamltdU1hcFZpZXcuYWRkSmltdUxheWVyVmlld3NWaXNpYmxlQ2hhbmdlTGlzdGVuZXIodmlzaWJsZUNoYW5nZWRMaXN0ZW5lcilcclxuICAgIGppbXVNYXBWaWV3LmFkZEppbXVMYXllclZpZXdDcmVhdGVkTGlzdGVuZXIobGF5ZXJzQ2hhbmdlZExpc3RlbmVyKVxyXG4gICAgY29uc3QgYWZ0ZXJBZGRMaXN0ZW5lciA9IGppbXVNYXBWaWV3LnZpZXc/Lm1hcD8uYWxsTGF5ZXJzPy5vbignYWZ0ZXItYWRkJywgbm9uRWRpdExheWVyQWRkTGlzdGVuZXIpXHJcbiAgICBqaW11TWFwVmlldy5hZGRKaW11TGF5ZXJWaWV3UmVtb3ZlZExpc3RlbmVyKGxheWVyc0NoYW5nZWRMaXN0ZW5lcilcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGppbXVNYXBWaWV3Py5yZW1vdmVKaW11TGF5ZXJWaWV3c1Zpc2libGVDaGFuZ2VMaXN0ZW5lcj8uKHZpc2libGVDaGFuZ2VkTGlzdGVuZXIpXHJcbiAgICAgIGppbXVNYXBWaWV3Py5yZW1vdmVKaW11TGF5ZXJWaWV3Q3JlYXRlZExpc3RlbmVyPy4obGF5ZXJzQ2hhbmdlZExpc3RlbmVyKVxyXG4gICAgICBhZnRlckFkZExpc3RlbmVyPy5yZW1vdmU/LigpXHJcbiAgICAgIGppbXVNYXBWaWV3Py5yZW1vdmVKaW11TGF5ZXJWaWV3UmVtb3ZlZExpc3RlbmVyPy4obGF5ZXJzQ2hhbmdlZExpc3RlbmVyKVxyXG4gICAgfVxyXG4gIH0sIFtqaW11TWFwVmlldywgdXBkYXRlRWRpdG9yTGF5ZXJJbmZvc1JlZl0pXHJcblxyXG4gIGNvbnN0IHVwZGF0ZUVkaXRvckJ5Q29uZmlnID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yV2lkZ2V0ID0gZWRpdG9yUmVmLmN1cnJlbnRcclxuICAgIGNvbnN0IHtcclxuICAgICAgc2VsZlNuYXBwaW5nLCBmZWF0dXJlU25hcHBpbmcsIGdyaWRTbmFwcGluZyA9IGZhbHNlLCBkZWZhdWx0U2VsZkVuYWJsZWQsIGRlZmF1bHRGZWF0dXJlRW5hYmxlZCwgZGVmYXVsdEdyaWRFbmFibGVkID0gZmFsc2UsXHJcbiAgICAgIHNuYXBTZXR0aW5nTW9kZSwgZGVmYXVsdFNuYXBMYXllcnMsIHRvb2x0aXAsIGRlZmF1bHRUb29sdGlwRW5hYmxlZCA9IGZhbHNlLCBzZWdtZW50TGFiZWwgPSB0cnVlLCBkZWZhdWx0U2VnbWVudExhYmVsRW5hYmxlZCA9IGZhbHNlLFxyXG4gICAgICB0ZW1wbGF0ZUZpbHRlciwgaW5pdGlhbFJlc2hhcGVNb2RlLCBiYXRjaEVkaXRpbmcgPSBmYWxzZSwgYWR2YW5jZWRFZGl0aW5nVG9vbHMgPSB0cnVlLCBzcGxpdEJ1dHRvbiA9IHRydWUsIG1lcmdlQnV0dG9uID0gdHJ1ZVxyXG4gICAgfSA9IGNvbmZpZ1xyXG4gICAgZWRpdG9yV2lkZ2V0LnRvb2x0aXBPcHRpb25zLmVuYWJsZWQgPSBkZWZhdWx0VG9vbHRpcEVuYWJsZWRcclxuICAgIGVkaXRvcldpZGdldC5sYWJlbE9wdGlvbnMuZW5hYmxlZCA9IGRlZmF1bHRTZWdtZW50TGFiZWxFbmFibGVkXHJcbiAgICBlZGl0b3JXaWRnZXQuc25hcHBpbmdPcHRpb25zLmVuYWJsZWQgPSBkZWZhdWx0U2VsZkVuYWJsZWQgfHwgZGVmYXVsdEZlYXR1cmVFbmFibGVkIHx8IGRlZmF1bHRHcmlkRW5hYmxlZFxyXG4gICAgZWRpdG9yV2lkZ2V0LnNuYXBwaW5nT3B0aW9ucy5zZWxmRW5hYmxlZCA9IGRlZmF1bHRTZWxmRW5hYmxlZFxyXG4gICAgZWRpdG9yV2lkZ2V0LnNuYXBwaW5nT3B0aW9ucy5mZWF0dXJlRW5hYmxlZCA9IGRlZmF1bHRGZWF0dXJlRW5hYmxlZFxyXG4gICAgZWRpdG9yV2lkZ2V0LnNuYXBwaW5nT3B0aW9ucy5ncmlkRW5hYmxlZCA9IGRlZmF1bHRHcmlkRW5hYmxlZCAmJiBncmlkU25hcHBpbmdcclxuICAgIGVkaXRvcldpZGdldC5zbmFwcGluZ09wdGlvbnMuZmVhdHVyZVNvdXJjZXMgPSBhd2FpdCBTbmFwcGluZ1V0aWxzLmdldFNuYXBwaW5nRmVhdHVyZVNvdXJjZXNDb2xsZWN0aW9uKGppbXVNYXBWaWV3LCBkZWZhdWx0U25hcExheWVycylcclxuICAgIGNvbnN0IGZsZXhpYmxlTW9kZSA9IHNuYXBTZXR0aW5nTW9kZSA9PT0gU25hcFNldHRpbmdNb2RlLkZsZXhpYmxlXHJcbiAgICBjb25zdCBzbmFwT24gPSBzZWxmU25hcHBpbmcgfHwgZmVhdHVyZVNuYXBwaW5nIHx8IGdyaWRTbmFwcGluZ1xyXG4gICAgY29uc3Qgc25hcHBpbmdDb250cm9sc09wZW4gPSBmbGV4aWJsZU1vZGUgJiYgc25hcE9uO1xyXG4gICAgKGVkaXRvcldpZGdldC52aXNpYmxlRWxlbWVudHMgYXMgYW55KS5zZWxlY3Rpb25Ub29sYmFyID0gYmF0Y2hFZGl0aW5nXHJcbiAgICBlZGl0b3JXaWRnZXQudmlzaWJsZUVsZW1lbnRzLnNuYXBwaW5nQ29udHJvbHMgPSBzbmFwcGluZ0NvbnRyb2xzT3BlblxyXG4gICAgZWRpdG9yV2lkZ2V0LnZpc2libGVFbGVtZW50cy5zbmFwcGluZ0NvbnRyb2xzRWxlbWVudHMgPSB7XHJcbiAgICAgIGVuYWJsZWRUb2dnbGU6IHNlbGZTbmFwcGluZyB8fCBmZWF0dXJlU25hcHBpbmcgfHwgZ3JpZFNuYXBwaW5nLFxyXG4gICAgICBzZWxmRW5hYmxlZFRvZ2dsZTogc2VsZlNuYXBwaW5nLFxyXG4gICAgICBmZWF0dXJlRW5hYmxlZFRvZ2dsZTogZmVhdHVyZVNuYXBwaW5nLFxyXG4gICAgICBsYXllckxpc3Q6IGZlYXR1cmVTbmFwcGluZyxcclxuICAgICAgbGF5ZXJMaXN0VG9nZ2xlTGF5ZXJzQnV0dG9uOiBmZWF0dXJlU25hcHBpbmcsXHJcbiAgICAgIGdyaWRFbmFibGVkVG9nZ2xlOiBncmlkU25hcHBpbmcsXHJcbiAgICAgIGdyaWRDb250cm9sczogZ3JpZFNuYXBwaW5nXHJcbiAgICB9XHJcbiAgICBlZGl0b3JXaWRnZXQudmlzaWJsZUVsZW1lbnRzLnRvb2x0aXBzVG9nZ2xlID0gdG9vbHRpcFxyXG4gICAgZWRpdG9yV2lkZ2V0LnZpc2libGVFbGVtZW50cy5sYWJlbHNUb2dnbGUgPSBzZWdtZW50TGFiZWxcclxuICAgIGNvbnN0IHNldHRpbmdzT3BlbiA9IHNuYXBwaW5nQ29udHJvbHNPcGVuIHx8IHRvb2x0aXAgfHwgKHNlZ21lbnRMYWJlbCAmJiBqaW11TWFwVmlldy52aWV3Py50eXBlID09PSAnM2QnKVxyXG4gICAgZWRpdG9yV2lkZ2V0LnZpc2libGVFbGVtZW50cy5zZXR0aW5nc01lbnUgPSBzZXR0aW5nc09wZW5cclxuICAgIGVkaXRvcldpZGdldC52aXNpYmxlRWxlbWVudHMuc3BsaXRCdXR0b24gPSBhZHZhbmNlZEVkaXRpbmdUb29scyAmJiBzcGxpdEJ1dHRvblxyXG4gICAgZWRpdG9yV2lkZ2V0LnZpc2libGVFbGVtZW50cy5tZXJnZUJ1dHRvbiA9IGFkdmFuY2VkRWRpdGluZ1Rvb2xzICYmIGJhdGNoRWRpdGluZyAmJiBtZXJnZUJ1dHRvblxyXG4gICAgZWRpdG9yV2lkZ2V0LnN1cHBvcnRpbmdXaWRnZXREZWZhdWx0cyA9IHtcclxuICAgICAgZmVhdHVyZVRlbXBsYXRlczoge1xyXG4gICAgICAgIHZpc2libGVFbGVtZW50czoge1xyXG4gICAgICAgICAgZmlsdGVyOiB0ZW1wbGF0ZUZpbHRlclxyXG4gICAgICAgIH0gYXMgX19lc3JpLkZlYXR1cmVUZW1wbGF0ZXNbJ3Zpc2libGVFbGVtZW50cyddXHJcbiAgICAgIH0sXHJcbiAgICAgIHNrZXRjaDoge1xyXG4gICAgICAgIGRlZmF1bHRVcGRhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICB0b29sOiBpbml0aWFsUmVzaGFwZU1vZGUgPyAncmVzaGFwZScgOiAndHJhbnNmb3JtJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtjb25maWcsIGppbXVNYXBWaWV3XSlcclxuXHJcbiAgY29uc3QgcHJldmlvdXNKaW11TWFwVmlldyA9IGhvb2tzLnVzZVByZXZpb3VzKGppbXVNYXBWaWV3KVxyXG4gIGNvbnN0IHByZXZpb3VzQ29uZmlnID0gaG9va3MudXNlUHJldmlvdXMoY29uZmlnKVxyXG4gIGNvbnN0IHVwZGF0ZURhdGFTb3VyY2UgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoXHJcbiAgICBsYXllcjogX19lc3JpLlN1YnR5cGVHcm91cExheWVyIHwgX19lc3JpLkZlYXR1cmVMYXllcixcclxuICAgIGV2ZW50OiBfX2VzcmkuU3VidHlwZUdyb3VwTGF5ZXJFZGl0c0V2ZW50XHJcbiAgKSA9PiB7XHJcbiAgICAvLyBPbmx5IHVwZGF0ZSBkYXRhIHNvdXJjZSB3aGVuIGVkaXRpbmcgb3IgYWRkaW5nXHJcbiAgICBpZiAoIWVkaXRvclJlZi5jdXJyZW50Py52aWV3TW9kZWwuc3luY2luZykgcmV0dXJuXHJcbiAgICBjb25zdCBkc0lkID0gamltdU1hcFZpZXcuZ2V0RGF0YVNvdXJjZUlkQnlBUElMYXllcihsYXllcilcclxuICAgIGNvbnN0IGRzID0gZ2V0RGF0YVNvdXJjZUJ5SWQoZHNJZClcclxuICAgIGlmICghZHMpIHJldHVyblxyXG4gICAgY29uc3QgYWRkSWRzID0gZXZlbnQuYWRkZWRGZWF0dXJlcy5tYXAoZiA9PiBmLm9iamVjdElkKVxyXG4gICAgbGV0IGFkZEZlYXR1cmVzID0gW11cclxuICAgIGlmIChhZGRJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBhZGRGZWF0dXJlU2V0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyh7XHJcbiAgICAgICAgb2JqZWN0SWRzOiBhZGRJZHMsXHJcbiAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgYWRkRmVhdHVyZXMgPSBhZGRGZWF0dXJlU2V0Py5mZWF0dXJlcyB8fCBbXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUlkcyA9IGV2ZW50LnVwZGF0ZWRGZWF0dXJlcy5tYXAoZiA9PiBmLm9iamVjdElkKVxyXG4gICAgbGV0IHVwZGF0ZUZlYXR1cmVzID0gW11cclxuICAgIGlmICh1cGRhdGVJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB1cGRhdGVGZWF0dXJlU2V0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyh7XHJcbiAgICAgICAgb2JqZWN0SWRzOiB1cGRhdGVJZHMsXHJcbiAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgdXBkYXRlRmVhdHVyZXMgPSB1cGRhdGVGZWF0dXJlU2V0Py5mZWF0dXJlcyB8fCBbXVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsZXRlRmVhdHVyZXMgPSBldmVudC5kZWxldGVkRmVhdHVyZXMubWFwKGYgPT4gKHtvYmplY3RJZDogZi5vYmplY3RJZH0pKVxyXG4gICAgdXBkYXRlRGF0YVNvdXJjZUFmdGVyRWRpdChkcywgeyBhZGRGZWF0dXJlcywgdXBkYXRlRmVhdHVyZXMsIGRlbGV0ZUZlYXR1cmVzfSlcclxuICB9LCBbamltdU1hcFZpZXddKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3IHx8ICFlZGl0Q29udGFpbmVyLmN1cnJlbnQpIHJldHVyblxyXG5cclxuICAgIGlmICghZWRpdG9yUmVmLmN1cnJlbnQgfHwgamltdU1hcFZpZXcgIT09IHByZXZpb3VzSmltdU1hcFZpZXcpIHtcclxuICAgICAgZGVzdHJveUVkaXRvcigpXHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaC0xMDAnXHJcbiAgICAgIGVkaXRDb250YWluZXIuY3VycmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbiAgICAgIGVkaXRvclJlZi5jdXJyZW50ID0gbmV3IEVkaXRvcih7XHJcbiAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgIHZpZXc6IGppbXVNYXBWaWV3LnZpZXdcclxuICAgICAgfSlcclxuICAgICAgc2V0RWRpdG9yKGVkaXRvclJlZi5jdXJyZW50KVxyXG4gICAgICB1cGRhdGVFZGl0b3JCeUNvbmZpZygpXHJcbiAgICB9IGVsc2UgaWYgKGNvbmZpZyAhPT0gcHJldmlvdXNDb25maWcpIHtcclxuICAgICAgdXBkYXRlRWRpdG9yQnlDb25maWcoKVxyXG4gICAgfVxyXG4gIH0sIFtjb25maWcsIGRlc3Ryb3lFZGl0b3IsIGVkaXRDb250YWluZXIsIGppbXVNYXBWaWV3LCBwcmV2aW91c0NvbmZpZywgcHJldmlvdXNKaW11TWFwVmlldywgdXBkYXRlRWRpdG9yQnlDb25maWddKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0b3JXaWRnZXQgPSBlZGl0b3JSZWYuY3VycmVudFxyXG4gICAgaWYgKCFlZGl0b3JXaWRnZXQpIHJldHVyblxyXG4gICAgY29uc3QgaGFuZGxlczogX19lc3JpLkhhbmRsZVtdID0gW11cclxuICAgIGZvciAoY29uc3QgbGF5ZXJJbmZvIG9mIGVkaXRvckxheWVySW5mb3MpIHtcclxuICAgICAgaWYgKCFsYXllckluZm8uZW5hYmxlZCkgY29udGludWVcclxuICAgICAgY29uc3QgZWRpdG9yTGF5ZXIgPSBsYXllckluZm8ubGF5ZXJcclxuICAgICAgaWYgKGVkaXRvckxheWVyLnR5cGUgPT09ICdzdWJ0eXBlLXN1YmxheWVyJykge1xyXG4gICAgICAgIGNvbnN0IHN1YnR5cGVHcm91cGxheWVyID0gZWRpdG9yTGF5ZXIucGFyZW50XHJcbiAgICAgICAgY29uc3QgaGFuZGxlID0gc3VidHlwZUdyb3VwbGF5ZXI/Lm9uKCdlZGl0cycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgdXBkYXRlRGF0YVNvdXJjZShzdWJ0eXBlR3JvdXBsYXllciwgZXZlbnQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBoYW5kbGVzLnB1c2goaGFuZGxlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVMYXllciA9IGVkaXRvckxheWVyIGFzIHVua25vd24gYXMgX19lc3JpLkZlYXR1cmVMYXllclxyXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IGZlYXR1cmVMYXllci5vbignZWRpdHMnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIHVwZGF0ZURhdGFTb3VyY2UoZmVhdHVyZUxheWVyLCBldmVudClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGhhbmRsZXMucHVzaChoYW5kbGUpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlZGl0b3JXaWRnZXQubGF5ZXJJbmZvcyA9IGVkaXRvckxheWVySW5mb3NcclxuICAgIGVkaXRvcldpZGdldC52aXNpYmxlRWxlbWVudHMuZWRpdEZlYXR1cmVzU2VjdGlvbiA9IHNob3dVcGRhdGVCdG5cclxuICAgIFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBoYW5kbGUgb2YgaGFuZGxlcykge1xyXG4gICAgICAgIGhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2VkaXRvckxheWVySW5mb3MsIHNob3dVcGRhdGVCdG4sIHVwZGF0ZURhdGFTb3VyY2VdKVxyXG5cclxuICByZXR1cm4gZWRpdG9yXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUVkaXRvclxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgZGF0YVNvdXJjZVV0aWxzLCB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgRmVhdHVyZUZvcm0gZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVGb3JtJ1xyXG5pbXBvcnQgQmF0Y2hBdHRyaWJ1dGVGb3JtIGZyb20gJ2Vzcmkvd2lkZ2V0cy9CYXRjaEF0dHJpYnV0ZUZvcm0nXHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYydcclxuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnZXNyaS9jb3JlL0NvbGxlY3Rpb24nXHJcbmltcG9ydCB7IGFwcGx5QXR0cmlidXRlVXBkYXRlcywgZ2V0VGltZXpvbmUsIHVwZGF0ZURhdGFTb3VyY2VBZnRlckVkaXQgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBnZXREYXRhU291cmNlQnlJZCwgZ2V0RWRpdERhdGFTb3VyY2UsIGdldEZsYXRGb3JtRWxlbWVudHMgfSBmcm9tICcuLi8uLi91dGlscydcclxuaW1wb3J0IHsgRm9ybUNoYW5nZVR5cGUsIHR5cGUgTGF5ZXJJbmZvIH0gZnJvbSAnLi9mZWF0dXJlLWZvcm0tY29tcG9uZW50J1xyXG5cclxuaW50ZXJmYWNlIFVzZUZlYXR1cmVGb3JtT3B0aW9ucyB7XHJcbiAgYWN0aXZlTGF5ZXJJbmZvOiBMYXllckluZm9cclxuICBhY3RpdmVSZWNvcmRzOiBGZWF0dXJlRGF0YVJlY29yZFtdXHJcbiAgc291cmNlVmVyc2lvbjogbnVtYmVyXHJcbiAgZWRpdENvbnRhaW5lcjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxyXG59XHJcblxyXG5jb25zdCB1c2VGZWF0dXJlRm9ybSA9IChvcHRpb25zOiBVc2VGZWF0dXJlRm9ybU9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7IGFjdGl2ZUxheWVySW5mbywgYWN0aXZlUmVjb3Jkcywgc291cmNlVmVyc2lvbiwgZWRpdENvbnRhaW5lciB9ID0gb3B0aW9uc1xyXG4gIGNvbnN0IGFjdGl2ZUlkID0gYWN0aXZlTGF5ZXJJbmZvPy5pZFxyXG4gIGNvbnN0IGFjdGl2ZUxheWVyID0gYWN0aXZlTGF5ZXJJbmZvPy5sYXllclxyXG4gIGNvbnN0IGZvcm1UZW1wbGF0ZSA9IGFjdGl2ZUxheWVySW5mbz8uZm9ybVRlbXBsYXRlXHJcblxyXG4gIGNvbnN0IFtmb3JtQ2hhbmdlLCBzZXRGb3JtQ2hhbmdlXSA9IFJlYWN0LnVzZVN0YXRlPEZvcm1DaGFuZ2VUeXBlPihudWxsKVxyXG4gIGNvbnN0IFtmb3JtU3VibWl0dGFibGUsIHNldEZvcm1TdWJtaXR0YWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgZWRpdEZvcm0gPSBSZWFjdC51c2VSZWY8RmVhdHVyZUZvcm0gfCBCYXRjaEF0dHJpYnV0ZUZvcm0+KG51bGwpXHJcbiAgLy8gU2VxdWVuY2UgZ3VhcmQgdG8gcHJldmVudCByYWNlIGNvbmRpdGlvbnMgYmV0d2VlbiBjb25jdXJyZW50IHJlbmRlciBjYWxsc1xyXG4gIGNvbnN0IHJlbmRlclNlcSA9IFJlYWN0LnVzZVJlZigwKVxyXG4gIGNvbnN0IGRlc3Ryb3lFZGl0Rm9ybSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChlZGl0Rm9ybS5jdXJyZW50Py5kZXN0cm95ICYmICFlZGl0Rm9ybS5jdXJyZW50Py5kZXN0cm95ZWQpIHtcclxuICAgICAgZWRpdEZvcm0uY3VycmVudC5kZXN0cm95KClcclxuICAgICAgc2V0Rm9ybUNoYW5nZShudWxsKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IHJlbmRlckVkaXRGb3JtID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gSW5jcmVtZW50IHNlcXVlbmNlXHJcbiAgICAgIGNvbnN0IHNlcSA9ICsrcmVuZGVyU2VxLmN1cnJlbnRcclxuICAgICAgZGVzdHJveUVkaXRGb3JtKClcclxuICAgICAgY29uc3QgZHMgPSBnZXREYXRhU291cmNlQnlJZChhY3RpdmVJZClcclxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGdldEVkaXREYXRhU291cmNlKGRzKVxyXG4gICAgICBsZXQgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW11cclxuICAgICAgaWYgKCFhY3RpdmVSZWNvcmRzIHx8IGFjdGl2ZVJlY29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZmVhdHVyZXMgPSBbbmV3IEdyYXBoaWMoeyBsYXllcjogYWN0aXZlTGF5ZXIgfSldXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaWRzID0gYWN0aXZlUmVjb3Jkcy5tYXAoKGYpID0+IGYuZ2V0SWQoKSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhU291cmNlLnF1ZXJ5KHtcclxuICAgICAgICAgIG9iamVjdElkczogaWRzLFxyXG4gICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXHJcbiAgICAgICAgICBub3RBZGRGaWVsZHNUb0NsaWVudDogdHJ1ZSxcclxuICAgICAgICAgIG91dEZpZWxkczogWycqJ11cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGZ1bGxSZWNvcmRzID0gKHJlc3VsdD8ucmVjb3JkcyB8fCBbXSkgYXMgRmVhdHVyZURhdGFSZWNvcmRbXVxyXG4gICAgICAgIGZlYXR1cmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZnVsbFJlY29yZHMubWFwKGFzeW5jIChmdWxsUmVjb3JkKSA9PiBhd2FpdCBkYXRhU291cmNlVXRpbHMuY2hhbmdlVG9KU0FQSUdyYXBoaWMoZnVsbFJlY29yZC5mZWF0dXJlKSkpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgb3JpZ2luRmllbGRzID0gYWN0aXZlTGF5ZXIuZmllbGRzXHJcbiAgICAgIGlmICghb3JpZ2luRmllbGRzIHx8IGFjdGl2ZUxheWVyLmxvYWRTdGF0dXMgIT09ICdsb2FkZWQnKSB7XHJcbiAgICAgICAgLy8gRm9yIGFyY2FkZSBkYXRhIHNvdXJjZSwgdGhlIGxheWVyJ3MgZmllbGRzIG1heSBiZSBmaWx0ZXJlZCBieSB0aGUgYXJjYWRlIHNjcmlwdC5cclxuICAgICAgICAvLyBJZiB0aGUgbGF5ZXIgaXMgbm90IGxvYWRlZCwgdGhlIEZlYXR1cmVGb3JtIHdpbGwgbG9hZCB0aGUgbGF5ZXIgYW5kIHRoZSBmaWVsZHMgd2lsbCBiZSBhbGwgZmllbGRzLlxyXG4gICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gbG9hZCB0aGUgbGF5ZXIgZmlyc3QgYW5kIHRoZW4gc2V0IHRoZSBvcmlnaW5hbCBmaWVsZHMgYmFjayB0byB0aGUgbGF5ZXIuXHJcbiAgICAgICAgYXdhaXQgYWN0aXZlTGF5ZXIubG9hZCgpXHJcbiAgICAgICAgaWYgKG9yaWdpbkZpZWxkcyAmJiBvcmlnaW5GaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgYWN0aXZlTGF5ZXIuc2V0KHsnZmllbGRzJzogb3JpZ2luRmllbGRzfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gU3F1ZW5jZSBndWFyZCBiZWZvcmUgY3JlYXRpbmcgdGhlIGZvcm1cclxuICAgICAgaWYgKHNlcSAhPT0gcmVuZGVyU2VxLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBlZGl0Q29udGFpbmVyLmN1cnJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVDb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24oZmVhdHVyZXMpXHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBmZWF0dXJlc1swXS5sYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyIHwgX19lc3JpLlN1YnR5cGVTdWJsYXllclxyXG4gICAgICAgIGNvbnN0IGJhdGNoRm9ybSA9IG5ldyBCYXRjaEF0dHJpYnV0ZUZvcm0oe1xyXG4gICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZUNvbGxlY3Rpb24sXHJcbiAgICAgICAgICBsYXllckluZm9zOiBbe1xyXG4gICAgICAgICAgICBsYXllcixcclxuICAgICAgICAgICAgZm9ybVRlbXBsYXRlXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHRpbWVab25lOiBnZXRUaW1lem9uZShkYXRhU291cmNlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZWRpdEZvcm0uY3VycmVudCA9IGJhdGNoRm9ybVxyXG4gICAgICAgIGJhdGNoRm9ybS5vbigndmFsdWUtY2hhbmdlJywgKGNoYW5nZWRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3VibWl0dGFibGUgPSBiYXRjaEZvcm0udmlld01vZGVsLnZhbGlkXHJcbiAgICAgICAgICBjb25zdCBjaGFuZ2UgPSBiYXRjaEZvcm0udmlld01vZGVsLnVzZXJIYXNDaGFuZ2VkVmFsdWVzID8gRm9ybUNoYW5nZVR5cGUuTm9ybWFsIDogRm9ybUNoYW5nZVR5cGUuQXJjYWRlXHJcbiAgICAgICAgICBzZXRGb3JtQ2hhbmdlKGNoYW5nZSlcclxuICAgICAgICAgIHNldEZvcm1TdWJtaXR0YWJsZShzdWJtaXR0YWJsZSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmUgPSBmZWF0dXJlc1swXVxyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVGb3JtID0gbmV3IEZlYXR1cmVGb3JtKHtcclxuICAgICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxyXG4gICAgICAgICAgZmVhdHVyZTogZmVhdHVyZXNbMF0sXHJcbiAgICAgICAgICBsYXllcjogYWN0aXZlTGF5ZXIsXHJcbiAgICAgICAgICBmb3JtVGVtcGxhdGUsXHJcbiAgICAgICAgICB0aW1lWm9uZTogZ2V0VGltZXpvbmUoZGF0YVNvdXJjZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGVkaXRGb3JtLmN1cnJlbnQgPSBmZWF0dXJlRm9ybVxyXG4gICAgICAgIGZlYXR1cmVGb3JtLm9uKCd2YWx1ZS1jaGFuZ2UnLCAoY2hhbmdlZFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1bmlxdWVJZEZpZWxkcyA9IGRhdGFTb3VyY2UuZ2V0VW5pcXVlSWRGaWVsZHMoKSB8fCBbXVxyXG4gICAgICAgICAgY29uc3QgaWRGaWVsZCA9IGRhdGFTb3VyY2UuZ2V0SWRGaWVsZCgpXHJcbiAgICAgICAgICBjb25zdCB7IGZpZWxkTmFtZSB9ID0gY2hhbmdlZFZhbHVlXHJcbiAgICAgICAgICAvLyBFeGNsdWRlIGNhc2VzIHdoZXJlIHRoZSAndmFsdWUtY2hhbmdlJyBpcyBjYXVzZWQgYnkgZGF0YVNvdXJjZSBzZWxlY3QuXHJcbiAgICAgICAgICAvLyBJZiB0aGUgY2hhbmdlZCBmaWVsZCBoYXMgYW4gaWRGaWVsZCwgdGhlIGNoYW5nZSBpcyBjYXVzZWQgYnkgZGF0YVNvdXJjZSBzZWxlY3QgY2hhbmdlLlxyXG4gICAgICAgICAgaWYgKHVuaXF1ZUlkRmllbGRzLmluY2x1ZGVzKGZpZWxkTmFtZSkgfHwgZmllbGROYW1lID09PSBpZEZpZWxkKSByZXR1cm5cclxuICAgICAgICAgIGNvbnN0IHN1Ym1pdHRhYmxlID0gZmVhdHVyZUZvcm0udmlld01vZGVsLnN1Ym1pdHRhYmxlXHJcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbEZvcm1WYWx1ZXMgPSBmZWF0dXJlLmF0dHJpYnV0ZXNcclxuICAgICAgICAgIGNvbnN0IG5ld0Zvcm1WYWx1ZXMgPSBmZWF0dXJlRm9ybS52aWV3TW9kZWwuZ2V0VmFsdWVzKClcclxuICAgICAgICAgIGxldCBjaGFuZ2U6IEZvcm1DaGFuZ2VUeXBlID0gbnVsbFxyXG4gICAgICAgICAgaWYgKG5ld0Zvcm1WYWx1ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgYXJjYWRlRmllbGRzID0gZ2V0RmxhdEZvcm1FbGVtZW50cyhmZWF0dXJlRm9ybS52aWV3TW9kZWwuZm9ybVRlbXBsYXRlPy5lbGVtZW50cyB8fCBbXSlcclxuICAgICAgICAgICAgICAubWFwKGUgPT4gZS50eXBlID09PSAnZmllbGQnICYmIGUudmFsdWVFeHByZXNzaW9uICYmIGUuZmllbGROYW1lKS5maWx0ZXIodiA9PiAhIXYpIHx8IFtdXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5ld0Zvcm1WYWx1ZXMpIHtcclxuICAgICAgICAgICAgICBpZiAob3JpZ2luYWxGb3JtVmFsdWVzPy5ba2V5XSAhPT0gbmV3Rm9ybVZhbHVlc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FyY2FkZSA9IGFyY2FkZUZpZWxkcy5pbmNsdWRlcyhrZXkpXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNBcmNhZGUgJiYgIWNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2UgPSBGb3JtQ2hhbmdlVHlwZS5BcmNhZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXNBcmNhZGUpIHtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlID0gRm9ybUNoYW5nZVR5cGUuTm9ybWFsXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0Rm9ybUNoYW5nZShjaGFuZ2UpXHJcbiAgICAgICAgICBzZXRGb3JtU3VibWl0dGFibGUoc3VibWl0dGFibGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVSZWNvcmRzLCBhY3RpdmVJZCwgYWN0aXZlTGF5ZXIsIGRlc3Ryb3lFZGl0Rm9ybSwgZWRpdENvbnRhaW5lciwgZm9ybVRlbXBsYXRlXSlcclxuXHJcbiAgY29uc3Qgc2F2ZUZvcm0gPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZWRpdEZvcm0uY3VycmVudFxyXG4gICAgaWYgKCFmb3JtKSByZXR1cm5cclxuICAgIGxldCBlZGl0czogX19lc3JpLkZlYXR1cmVMYXllckFwcGx5RWRpdHNFZGl0cyA9IHt9XHJcbiAgICBpZiAoZm9ybSBpbnN0YW5jZW9mIEJhdGNoQXR0cmlidXRlRm9ybSkge1xyXG4gICAgICBpZiAoIWZvcm0udmlld01vZGVsLnZhbGlkKSByZXR1cm5cclxuICAgICAgY29uc3QgYWxsRmllbGRJbnB1dHMgPSBmb3JtLnZpZXdNb2RlbC5hY3RpdmVGb3JtLmFsbEZpZWxkSW5wdXRzXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRBdHRyaWJ1dGVzID0ge31cclxuICAgICAgYWxsRmllbGRJbnB1dHMuZm9yRWFjaCgoZmllbGRJbnB1dCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZElucHV0LmRpc3RpbmN0VmFsdWVzLmxlbmd0aCAhPT0gMSkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGZpZWxkSW5wdXQuZGlzdGluY3RWYWx1ZXNbMF1cclxuICAgICAgICBpZiAoZmllbGRJbnB1dC51c2VySGFzQ2hhbmdlZFZhbHVlIHx8IChmaWVsZElucHV0IGFzIGFueSkudGVtcGxhdGUuaGFzVmFsdWVDYWxjdWxhdGlvbnMpIHtcclxuICAgICAgICAgIHVwZGF0ZWRBdHRyaWJ1dGVzW2ZpZWxkSW5wdXQuZmllbGROYW1lXSA9IGZpZWxkVmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IHVwZGF0ZUZlYXR1cmVzID0gZm9ybS5mZWF0dXJlc1xyXG4gICAgICB1cGRhdGVGZWF0dXJlcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgaWYgKGY/Lmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICBmLmdlb21ldHJ5ID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh1cGRhdGVkQXR0cmlidXRlcykuZm9yRWFjaCgoZmllbGROYW1lKSA9PiB7XHJcbiAgICAgICAgICBmLmF0dHJpYnV0ZXNbZmllbGROYW1lXSA9IHVwZGF0ZWRBdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICBlZGl0cyA9IHtcclxuICAgICAgICB1cGRhdGVGZWF0dXJlc1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZvcm0gaW5zdGFuY2VvZiBGZWF0dXJlRm9ybSkge1xyXG4gICAgICBpZiAoIWZvcm0udmlld01vZGVsLnN1Ym1pdHRhYmxlKSByZXR1cm5cclxuICAgICAgY29uc3QgbmV3RmVhdHVyZSA9IGZvcm0uZmVhdHVyZVxyXG4gICAgICBpZiAoIW5ld0ZlYXR1cmUpIHJldHVyblxyXG4gICAgICBpZiAobmV3RmVhdHVyZT8uZ2VvbWV0cnkpIHtcclxuICAgICAgICBuZXdGZWF0dXJlLmdlb21ldHJ5ID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBmb3JtLmdldFZhbHVlcygpXHJcbiAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZWQpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICBuZXdGZWF0dXJlLmF0dHJpYnV0ZXNbbmFtZV0gPSB1cGRhdGVkW25hbWVdXHJcbiAgICAgIH0pXHJcbiAgICAgIGVkaXRzID0ge1xyXG4gICAgICAgIHVwZGF0ZUZlYXR1cmVzOiBbbmV3RmVhdHVyZV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0Rm9ybUNoYW5nZShudWxsKVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBwbHlBdHRyaWJ1dGVVcGRhdGVzKGFjdGl2ZUxheWVySW5mbywgZWRpdHMpXHJcbiAgICAgIGxldCB1cGRhdGVFZGl0cyA9IGVkaXRzXHJcbiAgICAgIGlmIChlZGl0cy51cGRhdGVGZWF0dXJlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGRzID0gYWN0aXZlTGF5ZXJJbmZvLmRhdGFTb3VyY2VcclxuICAgICAgICAgIGNvbnN0IGZlYXR1cmVzID0gQXJyYXkuaXNBcnJheShlZGl0cy51cGRhdGVGZWF0dXJlcykgPyBlZGl0cy51cGRhdGVGZWF0dXJlcyA6IGVkaXRzLnVwZGF0ZUZlYXR1cmVzLnRvQXJyYXkoKVxyXG4gICAgICAgICAgY29uc3QgdXBkYXRlSWRzID0gZmVhdHVyZXMubWFwKChmOiBfX2VzcmkuR3JhcGhpYykgPT4gZi5nZXRPYmplY3RJZCgpKVxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHMucXVlcnkoe1xyXG4gICAgICAgICAgICBvYmplY3RJZHM6IHVwZGF0ZUlkcyxcclxuICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc3QgdXBkYXRlRmVhdHVyZXMgPSAocmVzdWx0Py5yZWNvcmRzIHx8IFtdKS5tYXAoKHI6IEZlYXR1cmVEYXRhUmVjb3JkKSA9PiByLmZlYXR1cmUgYXMgX19lc3JpLkdyYXBoaWMpXHJcbiAgICAgICAgICB1cGRhdGVFZGl0cyA9IHsgdXBkYXRlRmVhdHVyZXMgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlRGF0YVNvdXJjZUFmdGVyRWRpdChhY3RpdmVMYXllckluZm8uZGF0YVNvdXJjZSwgdXBkYXRlRWRpdHMpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0sIFthY3RpdmVMYXllckluZm9dKVxyXG5cclxuICBjb25zdCBhZGRGb3JtID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZmVhdHVyZUZvcm0gPSBlZGl0Rm9ybS5jdXJyZW50IGFzIEZlYXR1cmVGb3JtXHJcbiAgICBjb25zdCBmb3JtVmlld01vZGVsID0gZmVhdHVyZUZvcm0/LnZpZXdNb2RlbFxyXG4gICAgY29uc3Qgc3VibWl0dGFibGUgPSBmb3JtVmlld01vZGVsPy5zdWJtaXR0YWJsZVxyXG4gICAgY29uc3QgYWRkRmVhdHVyZSA9IGZvcm1WaWV3TW9kZWw/LmZlYXR1cmVcclxuICAgIGlmIChzdWJtaXR0YWJsZSAmJiBhZGRGZWF0dXJlKSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBmZWF0dXJlRm9ybS5nZXRWYWx1ZXMoKVxyXG4gICAgICBhZGRGZWF0dXJlLmF0dHJpYnV0ZXMgPSB1cGRhdGVkXHJcbiAgICAgIGNvbnN0IGVkaXRzID0ge1xyXG4gICAgICAgIGFkZEZlYXR1cmVzOiBbYWRkRmVhdHVyZV1cclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIHNldEZvcm1DaGFuZ2UobnVsbClcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBhcHBseUF0dHJpYnV0ZVVwZGF0ZXMoYWN0aXZlTGF5ZXJJbmZvLCBlZGl0cylcclxuICAgICAgICB1cGRhdGVEYXRhU291cmNlQWZ0ZXJFZGl0KGFjdGl2ZUxheWVySW5mby5kYXRhU291cmNlLCBlZGl0cylcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVMYXllckluZm9dKVxyXG5cclxuICBjb25zdCBkZWxldGVGb3JtID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGVkaXRGb3JtLmN1cnJlbnRcclxuICAgIGlmICghZm9ybSkgcmV0dXJuXHJcbiAgICBsZXQgZWRpdHM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJBcHBseUVkaXRzRWRpdHMgPSB7fVxyXG4gICAgaWYgKGZvcm0gaW5zdGFuY2VvZiBGZWF0dXJlRm9ybSkge1xyXG4gICAgICBjb25zdCBvYmplY3RJZCA9IGZvcm0uZmVhdHVyZS5nZXRPYmplY3RJZCgpXHJcbiAgICAgIGVkaXRzID0ge1xyXG4gICAgICAgIGRlbGV0ZUZlYXR1cmVzOiBbe1xyXG4gICAgICAgICAgb2JqZWN0SWQ6IHR5cGVvZiBvYmplY3RJZCA9PT0gJ251bWJlcicgPyBvYmplY3RJZCA6IHBhcnNlSW50KG9iamVjdElkKSxcclxuICAgICAgICB9XVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZvcm0gaW5zdGFuY2VvZiBCYXRjaEF0dHJpYnV0ZUZvcm0pIHtcclxuICAgICAgY29uc3Qgb2JqZWN0SWRzID0gZm9ybS5mZWF0dXJlcy5tYXAoZiA9PiBmLmdldE9iamVjdElkKCkpLnRvQXJyYXkoKVxyXG4gICAgICBlZGl0cyA9IHtcclxuICAgICAgICBkZWxldGVGZWF0dXJlczogb2JqZWN0SWRzLm1hcChvYmplY3RJZCA9PiAoIHtvYmplY3RJZDogdHlwZW9mIG9iamVjdElkID09PSAnbnVtYmVyJyA/IG9iamVjdElkIDogcGFyc2VJbnQob2JqZWN0SWQpIH0pKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRGb3JtQ2hhbmdlKG51bGwpXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcHBseUF0dHJpYnV0ZVVwZGF0ZXMoYWN0aXZlTGF5ZXJJbmZvLCBlZGl0cylcclxuICAgICAgdXBkYXRlRGF0YVNvdXJjZUFmdGVyRWRpdChhY3RpdmVMYXllckluZm8uZGF0YVNvdXJjZSwgZWRpdHMpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0sIFthY3RpdmVMYXllckluZm9dKVxyXG5cclxuICBjb25zdCB0aW1lciA9IFJlYWN0LnVzZVJlZjxudW1iZXI+KG51bGwpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIuY3VycmVudClcclxuICAgIHRpbWVyLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChhY3RpdmVJZCAmJiBhY3RpdmVMYXllciAmJiBlZGl0Q29udGFpbmVyLmN1cnJlbnQpIHtcclxuICAgICAgICByZW5kZXJFZGl0Rm9ybSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzdHJveUVkaXRGb3JtKClcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKVxyXG4gIH0sIFthY3RpdmVJZCwgYWN0aXZlTGF5ZXIsIHNvdXJjZVZlcnNpb24sIGVkaXRDb250YWluZXIsIGRlc3Ryb3lFZGl0Rm9ybSwgcmVuZGVyRWRpdEZvcm0sIGFjdGl2ZVJlY29yZHM/Lmxlbmd0aF0pXHJcblxyXG4gIC8vIEpTQVBJIGJ1ZzogRmVhdHVyZUZvcm0ncyB2YWx1ZS1jaGFuZ2Ugbm90IHdvcmsgZm9yIHRoZSBmaXJzdCB0aW1lIGR1ZSB0byBkZXBzIGxvYWRpbmcuXHJcbiAgLy8gQmVsb3cgY29kZSBsb2FkIHRoZSBkZXBzIGluIGFkdmFuY2UgdG8gYXZvaWQgdGhlIGJ1Zy5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmVhdHVyZUZvcm0gPSBuZXcgRmVhdHVyZUZvcm0oKVxyXG4gICAgZmVhdHVyZUZvcm0uZGVzdHJveSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiB7IGxvYWRpbmcsIGZvcm1DaGFuZ2UsIGZvcm1TdWJtaXR0YWJsZSwgc2F2ZUZvcm0sIGFkZEZvcm0sIGRlbGV0ZUZvcm0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VGZWF0dXJlRm9ybVxyXG4iLCJpbXBvcnQge1xyXG4gIGRhdGFTb3VyY2VVdGlscywgZXNyaSwgdHlwZSBJbW11dGFibGVBcnJheSwgcHJpdmlsZWdlVXRpbHMsIFNlcnZpY2VNYW5hZ2VyLCBTZXNzaW9uTWFuYWdlcixcclxuICB0eXBlIFN1YnR5cGVTdWJsYXllckRhdGFTb3VyY2UsIHR5cGUgQXJjR0lTUXVlcmlhYmxlRGF0YVNvdXJjZSwgdHlwZSBGZWF0dXJlRGF0YVJlY29yZCxcclxuICB0eXBlIEZlYXR1cmVMYXllckRhdGFTb3VyY2UsIHR5cGUgRGF0YVNvdXJjZSwgRXhCQWRkZWRKU0FQSVByb3BlcnRpZXMsIHR5cGUgRGF0YVJlY29yZCxcclxuICBjc3MsIFJlYWN0XHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBob29rcyBhcyB1aUhvb2tzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHR5cGUgeyBKaW11TWFwVmlldywgSmltdUxheWVyVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgdHlwZSB7IElJdGVtIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcG9ydGFsJ1xyXG5pbXBvcnQgUXVlcnkgZnJvbSAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknXHJcbmltcG9ydCBGaWVsZEVsZW1lbnQgZnJvbSAnZXNyaS9mb3JtL2VsZW1lbnRzL0ZpZWxkRWxlbWVudCdcclxuaW1wb3J0IEdyb3VwRWxlbWVudCBmcm9tICdlc3JpL2Zvcm0vZWxlbWVudHMvR3JvdXBFbGVtZW50J1xyXG5pbXBvcnQgRm9ybVRlbXBsYXRlIGZyb20gJ2VzcmkvZm9ybS9Gb3JtVGVtcGxhdGUnXHJcbmltcG9ydCBFeHByZXNzaW9uSW5mbyBmcm9tICdlc3JpL2Zvcm0vRXhwcmVzc2lvbkluZm8nXHJcbmltcG9ydCB7IHR5cGUgTGF5ZXJzQ29uZmlnLCB0eXBlIFRyZWVGaWVsZHMsIExheWVySG9ub3JNb2RlVHlwZSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IHsgdHlwZSBTdXBwb3J0ZWRMYXllciwgdHlwZSBTdXBwb3J0ZWREYXRhU291cmNlLCBjb25zdHJ1Y3RDb25maWcsIGdldEVkaXRIaWRkZW5GaWVsZHMsIGdldERzUHJpdmlsZWdlcyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgdHlwZSB7IExheWVySW5mbyB9IGZyb20gJy4vZmVhdHVyZS1mb3JtLWNvbXBvbmVudCdcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZGl0RmVhdHVyZXMge1xyXG4gIFtkc0lkOiBzdHJpbmddOiBGZWF0dXJlRGF0YVJlY29yZFtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmbGF0TWFwQXJyYXkgPSAoZWRpdEZlYXR1cmVzOiBFZGl0RmVhdHVyZXMpID0+IHtcclxuICAvLyBmbGF0IGVkaXRGZWF0dXJlc1xyXG4gIGNvbnN0IGZsYXRFZGl0RmVhdHVyZXM6IEZlYXR1cmVEYXRhUmVjb3JkW10gPSBbXVxyXG4gIGZvciAoY29uc3QgZHNJZCBpbiBlZGl0RmVhdHVyZXMpIHtcclxuICAgIGlmIChlZGl0RmVhdHVyZXM/Lltkc0lkXSkge1xyXG4gICAgICBmbGF0RWRpdEZlYXR1cmVzLnB1c2goLi4uZWRpdEZlYXR1cmVzW2RzSWRdKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmxhdEVkaXRGZWF0dXJlc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmxhdE1hcEFycmF5V2l0aFZpZXcgPSAoZWRpdEZlYXR1cmVzOiBFZGl0RmVhdHVyZXMsIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykgPT4ge1xyXG4gIGNvbnN0IGZsYXRFZGl0RmVhdHVyZXM6IEZlYXR1cmVEYXRhUmVjb3JkW10gPSBbXVxyXG4gIGNvbnN0IG1hcERzSWQgPSBqaW11TWFwVmlldz8uZGF0YVNvdXJjZUlkXHJcbiAgZm9yIChjb25zdCBkc0lkIGluIGVkaXRGZWF0dXJlcykge1xyXG4gICAgaWYgKGRzSWQuaW5kZXhPZihtYXBEc0lkKSA9PT0gMCAmJiBlZGl0RmVhdHVyZXM/Lltkc0lkXSkge1xyXG4gICAgICBmbGF0RWRpdEZlYXR1cmVzLnB1c2goLi4uZWRpdEZlYXR1cmVzW2RzSWRdKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmxhdEVkaXRGZWF0dXJlc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFZGl0YWJsZUxheWVyVmlldyAoXHJcbiAgbGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3LFxyXG4gIGN1c3RvbWl6ZUxheWVyczogYm9vbGVhbixcclxuICBjdXN0b21KaW11TGF5ZXJWaWV3SWRzOiBJbW11dGFibGVBcnJheTxzdHJpbmc+LFxyXG4gIGxpdmVEYXRhRWRpdGluZzogYm9vbGVhblxyXG4pIHtcclxuICBjb25zdCBsYXllciA9IGxheWVyVmlldy5sYXllclxyXG4gIGNvbnN0IGhhc1VybCA9ICEhbGF5ZXIudXJsXHJcbiAgY29uc3QgaXNEcmF3TWVhc3VyZW1lbnRzID0gbGF5ZXIuaWQudG9TdHJpbmcoKS5pbmNsdWRlcygnamltdS1kcmF3LW1lYXN1cmVtZW50cy1sYXllcicpXHJcbiAgY29uc3Qgbm90RWRpdGFibGUgPSBsYXllcltFeEJBZGRlZEpTQVBJUHJvcGVydGllcy5FWEJfTk9UX0VESVRBQkxFXVxyXG4gIGNvbnN0IGlzRnJvbVJ1bnRpbWUgPSBsYXllclZpZXcuZnJvbVJ1bnRpbWVcclxuICBsZXQgc2hvdWxkU2hvdyA9IHRydWVcclxuICBpZiAoaXNGcm9tUnVudGltZSkge1xyXG4gICAgc2hvdWxkU2hvdyA9IGxpdmVEYXRhRWRpdGluZ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaG91bGRTaG93ID0gY3VzdG9taXplTGF5ZXJzID8gY3VzdG9tSmltdUxheWVyVmlld0lkcy5pbmNsdWRlcyhsYXllclZpZXcuaWQpIDogdHJ1ZVxyXG4gIH1cclxuICBjb25zdCBpc1Zpc2libGUgPSBsYXllclZpZXcuaXNMYXllclZpc2libGUoKVxyXG4gIHJldHVybiBoYXNVcmwgJiYgIWlzRHJhd01lYXN1cmVtZW50cyAmJiAhbm90RWRpdGFibGUgJiYgc2hvdWxkU2hvdyAmJiBpc1Zpc2libGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERzQWNjZXNzaWJsZUluZm8gPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcclxuICBpZiAoIXVybCkgcmV0dXJuIGZhbHNlXHJcbiAgY29uc3QgcmVxdWVzdCA9IGVzcmkucmVzdFJlcXVlc3QucmVxdWVzdFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgcmVxdWVzdChgJHt1cmx9P2Y9anNvbmApXHJcbiAgICBpZiAoT2JqZWN0LmtleXMoaW5mbykuaW5jbHVkZXMoJ2Vycm9yJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJpdmlsZWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGV4YkFjY2VzcyA9IGF3YWl0IHByaXZpbGVnZVV0aWxzLmNoZWNrRXhiQWNjZXNzKHByaXZpbGVnZVV0aWxzLkNoZWNrVGFyZ2V0LkV4cGVyaWVuY2UpXHJcbiAgcmV0dXJuIGV4YkFjY2Vzcz8uY2FwYWJpbGl0aWVzPy5jYW5FZGl0RmVhdHVyZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXNBZHZhbmNlZFBlcm1pc3Npb24gPSBhc3luYyAoZGF0YVNvdXJjZTogU3VwcG9ydGVkRGF0YVNvdXJjZSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG4gIGNvbnN0IGxheWVySXRlbUluZm8gPSBhd2FpdCBkYXRhU291cmNlPy5mZXRjaEl0ZW1JbmZvKCkudGhlbigoaW5mbzogSUl0ZW0pID0+IHtcclxuICAgIHJldHVybiBpbmZvXHJcbiAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gIH0pXHJcbiAgaWYgKCFsYXllckl0ZW1JbmZvIHx8ICFsYXllckl0ZW1JbmZvLnVybCkgcmV0dXJuIGZhbHNlXHJcbiAgLy8gdXNlciBpcyBhZG1pbi9vd25lciwgb3IgdXNlciBhbmQgaXRlbSBhcmUgaW4gdGhlIHNhbWUgdXBkYXRlIG9yZ1xyXG4gIC8vIElmIHRoZXJlIGlzIG5vIHBvcnRhbFVybCwgaXQgbWVhbnMgaXQncyBub24taG9zdGVkIChzYW1wbGVTZXJ2ZXI2KVxyXG4gIGNvbnN0IHBvcnRhbFVybCA9IChhd2FpdCBTZXJ2aWNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmZldGNoQXJjR0lTU2VydmVySW5mbyhsYXllckl0ZW1JbmZvLnVybCkpPy5vd25pbmdTeXN0ZW1VcmxcclxuICBpZiAoIXBvcnRhbFVybCkgcmV0dXJuIGZhbHNlXHJcbiAgY29uc3Qgc2Vzc2lvbkZvckl0ZW0gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFNlc3Npb25CeVVybChwb3J0YWxVcmwpXHJcbiAgLy8gSWYgdGhlcmUgaXMgbm8gc2Vzc2lvbiwgaXQgbWVhbnMgdGhlcmUgd2FzIG5vIHBvcC11cCBsb2dpblxyXG4gIGlmICghc2Vzc2lvbkZvckl0ZW0pIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBzZXNzaW9uRm9ySXRlbS5nZXRVc2VyKClcclxuICBjb25zdCBpc0FkbWluID0gdXNlcj8ucm9sZSA9PT0gJ29yZ19hZG1pbidcclxuICBjb25zdCBpc09yZ0l0ZW0gPSBsYXllckl0ZW1JbmZvPy5pc09yZ0l0ZW1cclxuICAvLyBHcmFudHMgdGhlIGFiaWxpdHkgdG8gdXBkYXRlIGFuZCBjYXRlZ29yaXplIGNvbnRlbnQgaW4gdGhlIG9yZ2FuaXphdGlvbiBhbmQgZWRpdCBob3N0ZWQgZmVhdHVyZSBsYXllcnMgaW4geW91ciBvcmdhbml6YXRpb24uXHJcbiAgY29uc3QgaGFzVXBkYXRlSXRlbXMgPSAodXNlcj8ucHJpdmlsZWdlcyB8fCBbXSkuaW5jbHVkZXMoJ3BvcnRhbDphZG1pbjp1cGRhdGVJdGVtcycpXHJcbiAgY29uc3QgYWxsb3dBZG1pbkVkaXQgPSBpc0FkbWluICYmIGlzT3JnSXRlbSAmJiBoYXNVcGRhdGVJdGVtc1xyXG4gIGNvbnN0IGlzT3duZXIgPSBsYXllckl0ZW1JbmZvLm93bmVyID09PSB1c2VyPy51c2VybmFtZVxyXG4gIGNvbnN0IGlzSW5VcGRhdGVkR3JvdXAgPSBhd2FpdCBwcml2aWxlZ2VVdGlscy5pc0l0ZW1JblRoZVVwZGF0ZWRHcm91cChsYXllckl0ZW1JbmZvLmlkLCBzZXNzaW9uRm9ySXRlbSlcclxuICByZXR1cm4gYWxsb3dBZG1pbkVkaXQgfHwgaXNPd25lciB8fCBpc0luVXBkYXRlZEdyb3VwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUaW1lem9uZSA9IChkYXRhU291cmNlOiBTdXBwb3J0ZWREYXRhU291cmNlKSA9PiB7XHJcbiAgcmV0dXJuIGRhdGFTb3VyY2VVdGlscy5nZXRUaW1lem9uZUFQSUZyb21SdW50aW1lKGRhdGFTb3VyY2UuZ2V0VGltZXpvbmUoKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlkc0FycmF5RXF1YWxzID0gKHNlbGVjdGlvbjogSW1tdXRhYmxlQXJyYXk8c3RyaW5nfG51bWJlcj4gfCBBcnJheTxzdHJpbmd8bnVtYmVyPiwgcHJlU2VsZWN0aW9uOiBJbW11dGFibGVBcnJheTxzdHJpbmd8bnVtYmVyPiB8IEFycmF5PHN0cmluZ3xudW1iZXI+KSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc2VsZWN0aW9uKSAmJlxyXG4gICAgQXJyYXkuaXNBcnJheShwcmVTZWxlY3Rpb24pICYmXHJcbiAgICBzZWxlY3Rpb24ubGVuZ3RoID09PSBwcmVTZWxlY3Rpb24ubGVuZ3RoICYmXHJcbiAgICBzZWxlY3Rpb24uZXZlcnkoKHYsIGkpID0+IHByZVNlbGVjdGlvbltpXSA9PT0gdilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERpc3BsYXlGaWVsZCA9IChkYXRhU291cmNlOiBTdXBwb3J0ZWREYXRhU291cmNlKSA9PiB7XHJcbiAgY29uc3QgbGF5ZXJEZWZpbml0aW9uID0gZGF0YVNvdXJjZT8uZ2V0TGF5ZXJEZWZpbml0aW9uKClcclxuICBjb25zdCBiZWxvbmdUb0xheWVyRGVmaW5pdGlvbiA9IChkYXRhU291cmNlLmJlbG9uZ1RvRGF0YVNvdXJjZSBhcyBBcmNHSVNRdWVyaWFibGVEYXRhU291cmNlKT8uZ2V0TGF5ZXJEZWZpbml0aW9uKClcclxuICBjb25zdCBkaXNwbGF5RmllbGQgPSBsYXllckRlZmluaXRpb24/LmRpc3BsYXlGaWVsZCB8fFxyXG4gICAgYmVsb25nVG9MYXllckRlZmluaXRpb24/LmRpc3BsYXlGaWVsZFxyXG4gIHJldHVybiBkaXNwbGF5RmllbGRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZlYXR1cmVUaXRsZSA9IChyZWNvcmQ6IEZlYXR1cmVEYXRhUmVjb3JkLCBkYXRhU291cmNlOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgU3VidHlwZVN1YmxheWVyRGF0YVNvdXJjZSkgPT4ge1xyXG4gIGNvbnN0IHJlY29yZHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHJlY29yZCA/IFtyZWNvcmRdIDogW10sIFtyZWNvcmRdKVxyXG4gIGNvbnN0IGZlYXR1cmVUaXRsZU1hcCA9IHVzZUZlYXR1cmVUaXRsZU1hcChyZWNvcmRzLCBkYXRhU291cmNlKVxyXG4gIGNvbnN0IGlkID0gcmVjb3JkPy5nZXRJZCgpXHJcbiAgcmV0dXJuIGZlYXR1cmVUaXRsZU1hcC5nZXQoaWQpIHx8ICcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkRmVhdHVyZVRpdGxlTWFwIChcclxuICByZWNvcmRzOiBGZWF0dXJlRGF0YVJlY29yZFtdLFxyXG4gIHRpdGxlczogTWFwPG51bWJlciB8IHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZCxcclxuICBkYXRhU291cmNlOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgU3VidHlwZVN1YmxheWVyRGF0YVNvdXJjZVxyXG4pIHtcclxuICBjb25zdCBkaXNwbGF5RmllbGQgPSBnZXREaXNwbGF5RmllbGQoZGF0YVNvdXJjZSlcclxuICBjb25zdCBtYXAgPSBuZXcgTWFwPG51bWJlciB8IHN0cmluZywgc3RyaW5nPigpXHJcbiAgcmVjb3Jkcy5mb3JFYWNoKChyZWNvcmQpID0+IHtcclxuICAgIGlmICghcmVjb3JkKSByZXR1cm5cclxuICAgIGNvbnN0IGlkID0gcmVjb3JkLmdldElkKClcclxuICAgIGxldCB0aXRsZSA9IHRpdGxlcz8uZ2V0KGlkKVxyXG4gICAgaWYgKCF0aXRsZSB8fCB0aXRsZSA9PT0gJycpIHtcclxuICAgICAgdGl0bGUgPSByZWNvcmQuZ2V0RmllbGRWYWx1ZShkaXNwbGF5RmllbGQpIHx8IHJlY29yZC5nZXRJZCgpIHx8ICcnXHJcbiAgICB9XHJcbiAgICBpZiAodGl0bGUgJiYgIW1hcC5nZXQoaWQpKSB7XHJcbiAgICAgIG1hcC5zZXQoaWQsIHRpdGxlKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG1hcFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmVhdHVyZVRpdGxlTWFwID0gKHJlY29yZHM6IEZlYXR1cmVEYXRhUmVjb3JkW10sIGRhdGFTb3VyY2U6IEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBTdWJ0eXBlU3VibGF5ZXJEYXRhU291cmNlKSA9PiB7XHJcbiAgY29uc3QgW2ZlYXR1cmVUaXRsZU1hcCwgc2V0RmVhdHVyZVRpdGxlTWFwXSA9IFJlYWN0LnVzZVN0YXRlPE1hcDxudW1iZXIgfCBzdHJpbmcsIHN0cmluZz4+KG5ldyBNYXAoKSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YVNvdXJjZSB8fCByZWNvcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRGZWF0dXJlVGl0bGVNYXAobmV3IE1hcCgpKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGxheWVyID0gZGF0YVNvdXJjZS5sYXllciBhcyBhbnlcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gcmVjb3Jkcy5tYXAociA9PiByLmZlYXR1cmUgYXMgX19lc3JpLkdyYXBoaWMpXHJcbiAgICBpZiAodHlwZW9mIGxheWVyPy5nZXRGZWF0dXJlVGl0bGVzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGxheWVyLmdldEZlYXR1cmVUaXRsZXMoZmVhdHVyZXMsIHtcclxuICAgICAgICBmZXRjaE1pc3NpbmdGaWVsZHM6IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlSFRNTDogdHJ1ZSxcclxuICAgICAgfSkudGhlbigodGl0bGVzOiBNYXA8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmc+KSA9PiB7XHJcbiAgICAgICAgc2V0RmVhdHVyZVRpdGxlTWFwKGJ1aWxkRmVhdHVyZVRpdGxlTWFwKHJlY29yZHMsIHRpdGxlcywgZGF0YVNvdXJjZSkpXHJcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBzZXRGZWF0dXJlVGl0bGVNYXAoYnVpbGRGZWF0dXJlVGl0bGVNYXAocmVjb3JkcywgdW5kZWZpbmVkLCBkYXRhU291cmNlKSlcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZlYXR1cmVUaXRsZU1hcChidWlsZEZlYXR1cmVUaXRsZU1hcChyZWNvcmRzLCB1bmRlZmluZWQsIGRhdGFTb3VyY2UpKVxyXG4gICAgfVxyXG4gIH0sIFtkYXRhU291cmNlLCByZWNvcmRzXSlcclxuICByZXR1cm4gZmVhdHVyZVRpdGxlTWFwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RVbmVkaXRhYmxlSW5mbyA9IChsYXllcjogU3VwcG9ydGVkTGF5ZXIpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbGF5ZXIsXHJcbiAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgIGFkZEVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgdXBkYXRlRW5hYmxlZDogZmFsc2UsXHJcbiAgICBkZWxldGVFbmFibGVkOiBmYWxzZSxcclxuICAgIGF0dHJpYnV0ZVVwZGF0ZXNFbmFibGVkOiBmYWxzZSxcclxuICAgIGdlb21ldHJ5VXBkYXRlc0VuYWJsZWQ6IGZhbHNlLFxyXG4gICAgYXR0YWNobWVudHNPblVwZGF0ZUVuYWJsZWQ6IGZhbHNlLFxyXG4gIH0gYXMgX19lc3JpLkVkaXRvckxheWVySW5mb1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uc3RydWN0Rm9ybUVsZW1lbnRzID0gKGdyb3VwZWRGaWVsZHM6IFRyZWVGaWVsZHNbXSwgaGlkZGVuRmllbGRzOiBzdHJpbmdbXSwgZmllbGRFbGVtZW50czogX19lc3JpLkZpZWxkRWxlbWVudFtdKTogQXJyYXk8RmllbGRFbGVtZW50IHwgR3JvdXBFbGVtZW50PiA9PiB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBncm91cGVkRmllbGRzLmZpbHRlcihmID0+ICFoaWRkZW5GaWVsZHMuaW5jbHVkZXMoZi5qaW11TmFtZSkpLm1hcChpdGVtID0+IHtcclxuICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgIHJldHVybiBuZXcgR3JvdXBFbGVtZW50KHtcclxuICAgICAgICBsYWJlbDogaXRlbS5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLnN1YkRlc2NyaXB0aW9uIHx8IGl0ZW0/LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGVsZW1lbnRzOiBpdGVtLmNoaWxkcmVuLmZpbHRlcihmID0+ICFoaWRkZW5GaWVsZHMuaW5jbHVkZXMoZi5qaW11TmFtZSkpLm1hcChlbGUgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBGaWVsZEVsZW1lbnQoe1xyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IGVsZS5qaW11TmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6IGVsZS5hbGlhcyB8fCBlbGUubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsZS5zdWJEZXNjcmlwdGlvbiB8fCBlbGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGVkaXRhYmxlRXhwcmVzc2lvbjogZWxlLmVkaXRBdXRob3JpdHkgPyAnZWRpdGFibGVUcnVlJyA6ICdlZGl0YWJsZUZhbHNlJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXhpc3RFbGVtZW50ID0gZmllbGRFbGVtZW50cy5maW5kKGUgPT4gZS5maWVsZE5hbWUgPT09IGl0ZW0uamltdU5hbWUpXHJcbiAgICAgIGNvbnN0IGZpZWxkRWxlbWVudCA9IGV4aXN0RWxlbWVudCA/IGV4aXN0RWxlbWVudC5jbG9uZSgpIDogbmV3IEZpZWxkRWxlbWVudCh7XHJcbiAgICAgICAgZmllbGROYW1lOiBpdGVtLmppbXVOYW1lLFxyXG4gICAgICAgIGxhYmVsOiBpdGVtPy5hbGlhcyB8fCBpdGVtPy5uYW1lXHJcbiAgICAgIH0pXHJcbiAgICAgIGZpZWxkRWxlbWVudC5kZXNjcmlwdGlvbiA9IGl0ZW0uc3ViRGVzY3JpcHRpb24gfHwgaXRlbT8uZGVzY3JpcHRpb25cclxuICAgICAgZmllbGRFbGVtZW50LmVkaXRhYmxlRXhwcmVzc2lvbiA9IGl0ZW0uZWRpdEF1dGhvcml0eSAmJiAhZmllbGRFbGVtZW50LnZhbHVlRXhwcmVzc2lvbiA/ICdlZGl0YWJsZVRydWUnIDogJ2VkaXRhYmxlRmFsc2UnXHJcbiAgICAgIHJldHVybiBmaWVsZEVsZW1lbnRcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBlbGVtZW50c1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uc3RydWN0RXhwcmVzc2lvbkluZm9zID0gKGV4cHJlc3Npb25JbmZvczogX19lc3JpLkV4cHJlc3Npb25JbmZvW10pID0+IHtcclxuICBjb25zdCBpbmZvczogX19lc3JpLkV4cHJlc3Npb25JbmZvW10gPSBbLi4uKGV4cHJlc3Npb25JbmZvcyB8fCBbXSldXHJcbiAgaW5mb3MucHVzaChuZXcgRXhwcmVzc2lvbkluZm8oeyBuYW1lOiAnZWRpdGFibGVUcnVlJywgZXhwcmVzc2lvbjogJ3RydWUnIH0pKVxyXG4gIGluZm9zLnB1c2gobmV3IEV4cHJlc3Npb25JbmZvKHsgbmFtZTogJ2VkaXRhYmxlRmFsc2UnLCBleHByZXNzaW9uOiAnZmFsc2UnIH0pKVxyXG4gIHJldHVybiBpbmZvc1xyXG59XHJcblxyXG5jb25zdCBjb25zdHJ1Y3RGb3JtVGVtcGxhdGUgPSAoXHJcbiAgZWRpdG9yVXNlTGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBfX2VzcmkuU3VidHlwZVN1YmxheWVyLFxyXG4gIGxheWVyQ29uZmlnOiBMYXllcnNDb25maWcsXHJcbiAgcmVsYXRlZFJlY29yZHM6IGJvb2xlYW4sXHJcbiAgaGlkZGVuRmllbGRzOiBzdHJpbmdbXVxyXG4pID0+IHtcclxuICBjb25zdCB7IGdyb3VwZWRGaWVsZHMsIGxheWVySG9ub3JNb2RlIH0gPSBsYXllckNvbmZpZ1xyXG4gIGNvbnN0IG9yaWdpbmFsRm9ybVRlbXBsYXRlID0gZWRpdG9yVXNlTGF5ZXIuZm9ybVRlbXBsYXRlXHJcbiAgY29uc3QgZWRpdG9yRm9ybVRlbXBsYXRlOiBGb3JtVGVtcGxhdGUgPSBvcmlnaW5hbEZvcm1UZW1wbGF0ZSA/IG9yaWdpbmFsRm9ybVRlbXBsYXRlLmNsb25lKCkgOiBuZXcgRm9ybVRlbXBsYXRlKClcclxuICBjb25zdCBmaWVsZEVsZW1lbnRzID0gKG9yaWdpbmFsRm9ybVRlbXBsYXRlPy5lbGVtZW50cyB8fCBbXSkuZmlsdGVyKGUgPT4gZS50eXBlID09PSAnZmllbGQnKVxyXG4gIGxldCBleHByZXNzaW9uSW5mb3NDb25zdHJ1Y3RlZCA9IGZhbHNlXHJcbiAgaWYgKGxheWVySG9ub3JNb2RlID09PSBMYXllckhvbm9yTW9kZVR5cGUuQ3VzdG9tKSB7XHJcbiAgICBlZGl0b3JGb3JtVGVtcGxhdGUuZXhwcmVzc2lvbkluZm9zID0gY29uc3RydWN0RXhwcmVzc2lvbkluZm9zKGVkaXRvckZvcm1UZW1wbGF0ZS5leHByZXNzaW9uSW5mb3MpXHJcbiAgICBleHByZXNzaW9uSW5mb3NDb25zdHJ1Y3RlZCA9IHRydWVcclxuICAgIGVkaXRvckZvcm1UZW1wbGF0ZS5lbGVtZW50cyA9IGNvbnN0cnVjdEZvcm1FbGVtZW50cyhncm91cGVkRmllbGRzLCBoaWRkZW5GaWVsZHMsIGZpZWxkRWxlbWVudHMpXHJcbiAgfVxyXG4gIGlmICghcmVsYXRlZFJlY29yZHMgJiYgZWRpdG9yRm9ybVRlbXBsYXRlLmVsZW1lbnRzKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWRpdG9yRm9ybVRlbXBsYXRlLmVsZW1lbnRzKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyZWxhdGlvbnNoaXAnKSB7XHJcbiAgICAgICAgaWYgKCFleHByZXNzaW9uSW5mb3NDb25zdHJ1Y3RlZCkge1xyXG4gICAgICAgICAgZWRpdG9yRm9ybVRlbXBsYXRlLmV4cHJlc3Npb25JbmZvcyA9IGNvbnN0cnVjdEV4cHJlc3Npb25JbmZvcyhlZGl0b3JGb3JtVGVtcGxhdGUuZXhwcmVzc2lvbkluZm9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmVkaXRhYmxlRXhwcmVzc2lvbiA9ICdlZGl0YWJsZUZhbHNlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVkaXRvckZvcm1UZW1wbGF0ZS50aXRsZSA9IG9yaWdpbmFsRm9ybVRlbXBsYXRlPy50aXRsZSB8fCBlZGl0b3JVc2VMYXllci50aXRsZVxyXG4gIHJldHVybiBlZGl0b3JGb3JtVGVtcGxhdGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5RnVsbEZlYXR1cmVzID0gYXN5bmMgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgZmVhdHVyZXM6IEVkaXRGZWF0dXJlcykgPT4ge1xyXG4gIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPF9fZXNyaS5GZWF0dXJlU2V0Pj4gPSBbXVxyXG4gIGZvciAoY29uc3QgZHNJZCBpbiBmZWF0dXJlcykge1xyXG4gICAgY29uc3QgbGF5ZXJGZWF0dXJlc0FycmF5ID0gZmVhdHVyZXNbZHNJZF1cclxuICAgIGlmIChsYXllckZlYXR1cmVzQXJyYXk/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgaWRzID0gbGF5ZXJGZWF0dXJlc0FycmF5Lm1hcChyID0+IHIuZ2V0SWQoKSlcclxuICAgICAgY29uc3QgamltdUxheWVyVmlldyA9IGppbXVNYXBWaWV3LmdldEppbXVMYXllclZpZXdCeURhdGFTb3VyY2VJZChkc0lkKVxyXG4gICAgICBjb25zdCBjdXJyZW50RWRpdExheWVyID0gamltdUxheWVyVmlldz8ubGF5ZXJcclxuICAgICAgaWYgKCFjdXJyZW50RWRpdExheWVyKSBjb250aW51ZVxyXG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSh7XHJcbiAgICAgICAgb2JqZWN0SWRzOiBpZHMsXHJcbiAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICBwcm9taXNlcy5wdXNoKGN1cnJlbnRFZGl0TGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcclxuICBjb25zdCBmdWxsRmVhdHVyZXMgPSByZXN1bHRzLnJlZHVjZTxfX2VzcmkuR3JhcGhpY1tdPigocHJldiwgY3VyKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXIuZmVhdHVyZXMpKSB7XHJcbiAgICAgIHJldHVybiBwcmV2LmNvbmNhdChjdXIuZmVhdHVyZXMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcHJldlxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiBmdWxsRmVhdHVyZXNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEVkaXRvckxheWVySW5mbyA9IGFzeW5jIChcclxuICBkYXRhU291cmNlOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgU3VidHlwZVN1YmxheWVyRGF0YVNvdXJjZSxcclxuICBsYXllckNvbmZpZzogTGF5ZXJzQ29uZmlnLFxyXG4gIGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcsXHJcbiAgcmVsYXRlZFJlY29yZHM6IGJvb2xlYW4sXHJcbiAgY2FuRWRpdEZlYXR1cmU6IGJvb2xlYW5cclxuKSA9PiB7XHJcbiAgbGV0IHNob3dVcGRhdGVCdG4gPSBmYWxzZVxyXG4gIGxldCBlZGl0b3JMYXllckluZm86IF9fZXNyaS5FZGl0b3JMYXllckluZm9cclxuICBjb25zdCBlZGl0b3JVc2VMYXllciA9IGppbXVMYXllclZpZXcubGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllciB8IF9fZXNyaS5TdWJ0eXBlU3VibGF5ZXJcclxuICBjb25zdCBmdWxsRWRpdGluZ1ByaXZpbGVnZXMgPSAoZWRpdG9yVXNlTGF5ZXIgYXMgYW55KT8udXNlckhhc0Z1bGxFZGl0aW5nUHJpdmlsZWdlc1xyXG4gIGNvbnN0IGlzQWR2YW5jZWRQZXJtaXNzaW9uID0gYXdhaXQgZ2V0SXNBZHZhbmNlZFBlcm1pc3Npb24oZGF0YVNvdXJjZSlcclxuICBjb25zdCBsYXllckVkaXRpbmdFbmFibGVkID0gZWRpdG9yVXNlTGF5ZXIuZWRpdGluZ0VuYWJsZWRcclxuICBsZXQgZWRpdG9yTGF5ZXJDb25maWcgPSBsYXllckNvbmZpZ1xyXG4gIGlmICghZWRpdG9yTGF5ZXJDb25maWcpIHtcclxuICAgIGVkaXRvckxheWVyQ29uZmlnID0gY29uc3RydWN0Q29uZmlnKGRhdGFTb3VyY2UsIGVkaXRvclVzZUxheWVyKVxyXG4gIH1cclxuICBjb25zdCBsYXllckRlZmluaXRpb24gPSBkYXRhU291cmNlLmdldExheWVyRGVmaW5pdGlvbigpXHJcbiAgY29uc3QgaGlkZGVuRmllbGRzID0gZ2V0RWRpdEhpZGRlbkZpZWxkcyhsYXllckRlZmluaXRpb24pXHJcbiAgY29uc3QgdXNlZEZvcm1UZW1wbGF0ZSA9IGNvbnN0cnVjdEZvcm1UZW1wbGF0ZShlZGl0b3JVc2VMYXllciwgZWRpdG9yTGF5ZXJDb25maWcsIHJlbGF0ZWRSZWNvcmRzLCBoaWRkZW5GaWVsZHMpXHJcbiAgaWYgKGlzQWR2YW5jZWRQZXJtaXNzaW9uIHx8IGZ1bGxFZGl0aW5nUHJpdmlsZWdlcykge1xyXG4gICAgc2hvd1VwZGF0ZUJ0biA9IHRydWVcclxuICAgIGVkaXRvckxheWVySW5mbyA9IHtcclxuICAgICAgbGF5ZXI6IGVkaXRvclVzZUxheWVyLFxyXG4gICAgICBmb3JtVGVtcGxhdGU6IHVzZWRGb3JtVGVtcGxhdGUsXHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIGFkZEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIHVwZGF0ZUVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIGRlbGV0ZUVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIGF0dHJpYnV0ZVVwZGF0ZXNFbmFibGVkOiB0cnVlLFxyXG4gICAgICBnZW9tZXRyeVVwZGF0ZXNFbmFibGVkOiB0cnVlXHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghbGF5ZXJFZGl0aW5nRW5hYmxlZCB8fCAhZGF0YVNvdXJjZSkge1xyXG4gICAgZWRpdG9yTGF5ZXJJbmZvID0gY29uc3RydWN0VW5lZGl0YWJsZUluZm8oZWRpdG9yVXNlTGF5ZXIpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgYWRkUmVjb3JkcywgZGVsZXRlUmVjb3JkcywgdXBkYXRlUmVjb3JkcywgdXBkYXRlQXR0cmlidXRlcywgdXBkYXRlR2VvbWV0cmllcyB9ID0gZWRpdG9yTGF5ZXJDb25maWdcclxuICAgIC8vIE5ldyBsb2dpYyBvZiBBUEk6IFRoZSB1c2VyIHdpdGggYWR2YW5jZWQgcGVybWlzc2lvbnMgY2FuIG1vZGlmeSB0aGUgY29uZmlndXJhdGlvbiByZWdhcmRsZXNzIG9mIHRoZSBjb25maWd1cmF0aW9uXHJcbiAgICBjb25zdCBoYXZlVXBkYXRlUHJpdmlsZWdlID0gdXBkYXRlUmVjb3JkcyB8fCBkZWxldGVSZWNvcmRzXHJcbiAgICBpZiAoaXNBZHZhbmNlZFBlcm1pc3Npb24gfHwgaGF2ZVVwZGF0ZVByaXZpbGVnZSkge1xyXG4gICAgICBzaG93VXBkYXRlQnRuID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gZmV0Y2ggdG8gY29uZmlybSB3aGV0aGVyIGl0J3MgYSBwdWJsaWMgc291cmNlXHJcbiAgICBjb25zdCBhY2Nlc3NpYmxlID0gYXdhaXQgZ2V0RHNBY2Nlc3NpYmxlSW5mbyhlZGl0b3JVc2VMYXllcj8udXJsKVxyXG4gICAgLy8gZXhiIGFjY2VzcyBhbmQgcHJpdmlsZWdlXHJcbiAgICBjb25zdCBlZGl0YWJsZSA9IGFjY2Vzc2libGUgfHwgY2FuRWRpdEZlYXR1cmVcclxuICAgIGNvbnN0IHthbGxvd0dlb21ldHJ5VXBkYXRlcywgY3JlYXRlLCB1cGRhdGUsIGRlbGV0YWJsZX0gPSBnZXREc1ByaXZpbGVnZXMobGF5ZXJEZWZpbml0aW9uKVxyXG4gICAgZWRpdG9yTGF5ZXJJbmZvID0ge1xyXG4gICAgICBsYXllcjogZWRpdG9yVXNlTGF5ZXIsXHJcbiAgICAgIGZvcm1UZW1wbGF0ZTogdXNlZEZvcm1UZW1wbGF0ZSxcclxuICAgICAgZW5hYmxlZDogZWRpdGFibGUgJiYgKGFkZFJlY29yZHMgfHwgdXBkYXRlUmVjb3JkcyB8fCBkZWxldGVSZWNvcmRzKSxcclxuICAgICAgYWRkRW5hYmxlZDogYWRkUmVjb3JkcyAmJiBjcmVhdGUsXHJcbiAgICAgIHVwZGF0ZUVuYWJsZWQ6IHVwZGF0ZVJlY29yZHMgJiYgdXBkYXRlLFxyXG4gICAgICBkZWxldGVFbmFibGVkOiBkZWxldGVSZWNvcmRzICYmIGRlbGV0YWJsZSxcclxuICAgICAgYXR0cmlidXRlVXBkYXRlc0VuYWJsZWQ6IHVwZGF0ZUF0dHJpYnV0ZXMgJiYgdXBkYXRlLFxyXG4gICAgICBnZW9tZXRyeVVwZGF0ZXNFbmFibGVkOiB1cGRhdGVHZW9tZXRyaWVzICYmIGFsbG93R2VvbWV0cnlVcGRhdGVzXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7IHNob3dVcGRhdGVCdG4sIGVkaXRvckxheWVySW5mbyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVEYXRhU291cmNlQWZ0ZXJFZGl0ID0gKGRhdGFTb3VyY2U6IERhdGFTb3VyY2UsIGVkaXRzOiBfX2VzcmkuRmVhdHVyZUxheWVyQXBwbHlFZGl0c0VkaXRzKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRGZWF0dXJlcyA9IFtdLCB1cGRhdGVGZWF0dXJlcyA9IFtdLCBkZWxldGVGZWF0dXJlcyA9IFtdIH0gPSBlZGl0c1xyXG4gIGZvciAoY29uc3QgYWRkRmVhdHVyZSBvZiBhZGRGZWF0dXJlcykge1xyXG4gICAgY29uc3QgcmVjb3JkID0gZGF0YVNvdXJjZS5idWlsZFJlY29yZChhZGRGZWF0dXJlKVxyXG4gICAgZGF0YVNvdXJjZS5hZnRlckFkZFJlY29yZChyZWNvcmQpXHJcbiAgfVxyXG4gIGNvbnN0IHVwZGF0ZVJlY29yZHM6IERhdGFSZWNvcmRbXSA9IFtdXHJcbiAgZm9yIChjb25zdCB1cGRhdGVGZWF0dXJlIG9mIHVwZGF0ZUZlYXR1cmVzKSB7XHJcbiAgICBjb25zdCByZWNvcmRJZCA9IHVwZGF0ZUZlYXR1cmUuZ2V0T2JqZWN0SWQoKVxyXG4gICAgY29uc3Qgb3JpZ2luYWxGZWF0dXJlID0gKGRhdGFTb3VyY2UuZ2V0UmVjb3JkQnlJZChyZWNvcmRJZCkgYXMgRmVhdHVyZURhdGFSZWNvcmQpPy5mZWF0dXJlIGFzIF9fZXNyaS5HcmFwaGljXHJcbiAgICBjb25zdCBvcmlnaW5hbEF0dHJpYnV0ZXMgPSBvcmlnaW5hbEZlYXR1cmU/LmF0dHJpYnV0ZXMgfHwge31cclxuICAgIGNvbnN0IG5ld0F0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKG9yaWdpbmFsQXR0cmlidXRlcywgdXBkYXRlRmVhdHVyZT8uYXR0cmlidXRlcylcclxuICAgIHVwZGF0ZUZlYXR1cmUuYXR0cmlidXRlcyA9IG5ld0F0dHJpYnV0ZXNcclxuICAgIGNvbnN0IHJlY29yZCA9IGRhdGFTb3VyY2UuYnVpbGRSZWNvcmQodXBkYXRlRmVhdHVyZSlcclxuICAgIHVwZGF0ZVJlY29yZHMucHVzaChyZWNvcmQpXHJcbiAgfVxyXG4gIGRhdGFTb3VyY2UuYWZ0ZXJVcGRhdGVSZWNvcmRzKHVwZGF0ZVJlY29yZHMpXHJcbiAgY29uc3QgZGVsZXRlUmVjb3JkSWRzID0gW11cclxuICBmb3IgKGNvbnN0IGRlbGV0ZUZlYXR1cmUgb2YgZGVsZXRlRmVhdHVyZXMpIHtcclxuICAgIGlmICgnYXR0cmlidXRlcycgaW4gZGVsZXRlRmVhdHVyZSkge1xyXG4gICAgICBjb25zdCByZWNvcmRJZCA9IGRlbGV0ZUZlYXR1cmUuZ2V0T2JqZWN0SWQoKVxyXG4gICAgICBkZWxldGVSZWNvcmRJZHMucHVzaChyZWNvcmRJZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZVJlY29yZElkcy5wdXNoKGRlbGV0ZUZlYXR1cmU/Lm9iamVjdElkIHx8IGRlbGV0ZUZlYXR1cmU/Lmdsb2JhbElkKVxyXG4gICAgfVxyXG4gIH1cclxuICBkYXRhU291cmNlLmFmdGVyRGVsZXRlUmVjb3Jkc0J5SWRzKGRlbGV0ZVJlY29yZElkcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcGx5QXR0cmlidXRlVXBkYXRlcyA9IGFzeW5jIChsYXllckluZm86IExheWVySW5mbywgcGFyYW1zOiBfX2VzcmkuRmVhdHVyZUxheWVyQXBwbHlFZGl0c0VkaXRzKSA9PiB7XHJcbiAgY29uc3QgZGF0YVNvdXJjZSA9IGxheWVySW5mby5kYXRhU291cmNlXHJcbiAgY29uc3QgbGF5ZXIgPSBsYXllckluZm8ubGF5ZXJcclxuICBjb25zdCBnZGJWZXJzaW9uID0gZGF0YVNvdXJjZS5nZXRHREJWZXJzaW9uKClcclxuICByZXR1cm4gbGF5ZXIuYXBwbHlFZGl0cyhwYXJhbXMsIHsgZ2RiVmVyc2lvbiB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2FsY2l0ZUNvbG9yTWFwcGluZyA9ICgpID0+IHtcclxuICBjb25zdCBpc0NsYXNzaWNUaGVtZSA9IHVpSG9va3MudXNlQ2xhc3NpY1RoZW1lKClcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBpc0RhcmtUaGVtZSA9IHRoZW1lLnN5cy5jb2xvci5tb2RlID09PSAnZGFyaydcclxuICByZXR1cm4gaXNDbGFzc2ljVGhlbWUgJiYgIWlzRGFya1RoZW1lID8gY3NzYC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjZjdmN2Y3O2AgOiAnJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmVhdHVyZUZvcm1TdHlsZSA9IGNzc2BcclxuICAuZXNyaS13aWRnZXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmVzcmktZmVhdHVyZS1mb3JtX190ZXh0LWVsZW1lbnQge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5lc3JpLWZlYXR1cmUtZm9ybV9fdGV4dC1lbGVtZW50IHAge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5lc3JpLXdpZGdldF9fY29udGVudC0tZW1wdHkge1xyXG4gICAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1zdXJmYWNlLXBhcGVyLWhpbnQpO1xyXG4gIH1cclxuICAuZXNyaS1hdHRhY2htZW50c19fYWRkLWF0dGFjaG1lbnQtYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhbGNpdGUtYnV0dG9uLWNvcm5lci1yYWRpdXMpO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbiAgLmVzcmktZWRpdG9yX19wcm9tcHQtLWRhbmdlciAuZXNyaS1lZGl0b3JfX3Byb21wdF9faGVhZGVyX19oZWFkaW5nIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zeXMtY29sb3Itc3VyZmFjZS1wYXBlci10ZXh0KTtcclxuICB9XHJcbmBcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogJ0VkaXQnLFxyXG4gIGluaXRBdHRFbXB0eU1lc3NhZ2U6ICdQbGVhc2UgYWRkIGFuIGVkaXRhYmxlIHNvdXJjZS4nLFxyXG4gIG5vUmVjb3JkVGlwczogJ05vIHZhbGlkIHJlY29yZCBpcyBzZWxlY3RlZCwgc2VsZWN0IG9uZSBvciBhZGQgb25lLicsXHJcbiAgYWRkRmVhdHVyZTogJ0FkZCBmZWF0dXJlJyxcclxuICB1cGRhdGU6ICdVcGRhdGUnLFxyXG4gIGRlbGV0ZVJlY29yZDogJ0RlbGV0ZSB0aGlzIHJlY29yZD8nLFxyXG4gIGRlbGV0ZVJlY29yZFRpcHM6ICdUaGlzIHJlY29yZCB3aWxsIGJlIHBlcm1hbmVudGx5IHJlbW92ZWQuJyxcclxuICBkZWxldGVSZWNvcmRzVGlwczogJ1RoZXNlIHJlY29yZHMgd2lsbCBiZSBwZXJtYW5lbnRseSByZW1vdmVkLicsXHJcbiAga2VlcFJlY29yZDogJ0tlZXAgcmVjb3JkJyxcclxuICBfYWN0aW9uX2VkaXRfbGFiZWw6ICdFZGl0JyxcclxuICBzZWxlY3Rpb25DaGFuZ2VDb25maXJtVGl0bGU6ICdEaXNjYXJkIHRoZSBlZGl0cz8nLFxyXG4gIHNlbGVjdGlvbkNoYW5nZUNvbmZpcm1UaXBzOiAnWW91IGhhdmUgdW5zYXZlZCBlZGl0cyB0aGF0IGNvdWxkIGJlIGxvc3QuJyxcclxuICBkaXNjYXJkQ29uZmlybTogJ0Rpc2NhcmQgZWRpdHMnLFxyXG4gIGRpc2NhcmRDYW5jZWw6ICdDb250aW51ZSBlZGl0aW5nJyxcclxuICBvd25lckFkbWluTm90aWNlOiAnRWRpdGluZyBpcyByZXN0cmljdGVkIGJ1dCB5b3UgaGF2ZSBwcml2aWxlZ2VzIHRvIGVkaXQgdGhpcyBsYXllci4nLFxyXG4gIGVkaXRUaGVzZVJlY29yZHM6ICdFZGl0IHRoZXNlIHJlY29yZHMnLFxyXG4gIHBhc3RlU3BlY2lhbDogJ1Bhc3RlIHNwZWNpYWwnLFxyXG4gIGNvcHlTdXBwb3J0ZWRMYXllcnNPbmx5OiAnT25seSBmZWF0dXJlIGxheWVycyBvciBzdWJ0eXBlIGdyb3VwIGxheWVycyBhcmUgc3VwcG9ydGVkIGZvciBjb3B5aW5nIGZlYXR1cmVzLCBvdGhlciBsYXllcnMgYXJlIHNraXBwZWQ6IHtsYXllcnN9LicsXHJcbiAgbW92ZUNsaXBib2FyZEZlYXR1cmVzOiAnTW92ZSBmZWF0dXJlcyBieSBkcmFnZ2luZyB0aGVtIG9uIHRoZSBtYXAuJyxcclxuICBjYW5Ob3RDb3B5TXVsdGlwbGVMYXllcnM6ICdQbGVhc2Ugc2VsZWN0IGZlYXR1cmVzIGZyb20gYSBzaW5nbGUgbGF5ZXIgdG8gY29weScsXHJcbiAgY2FuTm90Q29weUdlbmVyYWw6ICdDb3B5IGlzIG5vdCBhdmFpbGFibGUgZm9yIHRoaXMgc2VsZWN0aW9uJyxcclxuICBjYW5Ob3RQYXN0ZUdlbmVyYWw6ICdQYXN0ZSBpcyBub3QgYXZhaWxhYmxlIGZvciB0aGlzIHNlbGVjdGlvbidcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIHR5cGUgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSwgSW1tdXRhYmxlLCBEYXRhU291cmNlVHlwZXMsIHR5cGUgU2NlbmVMYXllckRhdGFTb3VyY2UsXHJcbiAgdHlwZSBCdWlsZGluZ0NvbXBvbmVudFN1YkxheWVyRGF0YVNvdXJjZSwgdHlwZSBPcmllbnRlZEltYWdlcnlMYXllckRhdGFTb3VyY2UsIHR5cGUgU3VidHlwZVN1YmxheWVyRGF0YVNvdXJjZSxcclxuICBEYXRhU291cmNlTWFuYWdlciwgSlNBUElMYXllclR5cGVzXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgdHlwZSB7IElMYXllckRlZmluaXRpb24gfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLXNlcnZpY2UnXHJcbmltcG9ydCB7IExheWVySG9ub3JNb2RlVHlwZSwgdHlwZSBMYXllcnNDb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5cclxuLy8gVGhlc2UgZmllbGRzIGNvbWVzIGZyb20gRmVhdHVyZVRhYmxlVmlld01vZGVsJ3MgZG9jOlxyXG4vLyBodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2Vzcmktd2lkZ2V0cy1GZWF0dXJlVGFibGUtRmVhdHVyZVRhYmxlVmlld01vZGVsLmh0bWwjY29sdW1uc1xyXG5leHBvcnQgY29uc3QgSU5WSVNJQkxFX0ZJRUxEID0gW1xyXG4gICdDcmVhdGlvbkRhdGUnLFxyXG4gICdDcmVhdG9yJyxcclxuICAnRWRpdERhdGUnLFxyXG4gICdFZGl0b3InLFxyXG4gICdHbG9iYWxJRCdcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9KSU1VX0xBWUVSX1RZUEVTID0gW1xyXG4gIEpTQVBJTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIsXHJcbiAgSlNBUElMYXllclR5cGVzLlNjZW5lTGF5ZXIsXHJcbiAgSlNBUElMYXllclR5cGVzLkJ1aWxkaW5nQ29tcG9uZW50U3VibGF5ZXIsXHJcbiAgSlNBUElMYXllclR5cGVzLk9yaWVudGVkSW1hZ2VyeUxheWVyLFxyXG4gIEpTQVBJTGF5ZXJUeXBlcy5TdWJ0eXBlU3VibGF5ZXJcclxuXVxyXG5cclxuZXhwb3J0IHR5cGUgU3VwcG9ydGVkTGF5ZXIgPVxyXG4gIF9fZXNyaS5GZWF0dXJlTGF5ZXIgfFxyXG4gIF9fZXNyaS5TY2VuZUxheWVyIHxcclxuICBfX2VzcmkuQnVpbGRpbmdDb21wb25lbnRTdWJsYXllciB8XHJcbiAgX19lc3JpLk9yaWVudGVkSW1hZ2VyeUxheWVyIHxcclxuICBfX2VzcmkuU3VidHlwZVN1YmxheWVyXHJcblxyXG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkRHNUeXBlcyA9IEltbXV0YWJsZShbXHJcbiAgRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcixcclxuICBEYXRhU291cmNlVHlwZXMuU2NlbmVMYXllcixcclxuICBEYXRhU291cmNlVHlwZXMuQnVpbGRpbmdDb21wb25lbnRTdWJMYXllcixcclxuICBEYXRhU291cmNlVHlwZXMuT3JpZW50ZWRJbWFnZXJ5TGF5ZXIsXHJcbiAgRGF0YVNvdXJjZVR5cGVzLlN1YnR5cGVTdWJsYXllclxyXG5dKVxyXG5cclxuZXhwb3J0IHR5cGUgU3VwcG9ydGVkRGF0YVNvdXJjZSA9XHJcbiAgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8XHJcbiAgU2NlbmVMYXllckRhdGFTb3VyY2UgfFxyXG4gIEJ1aWxkaW5nQ29tcG9uZW50U3ViTGF5ZXJEYXRhU291cmNlIHxcclxuICBPcmllbnRlZEltYWdlcnlMYXllckRhdGFTb3VyY2UgfFxyXG4gIFN1YnR5cGVTdWJsYXllckRhdGFTb3VyY2VcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0byBjaGVjayBpZiBkcyBoYXZlIGEgc3BlY2lmaWVkIGNhcGFiaWxpdHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IGNhcGFiaWxpdGllcyBkcydzIGNhcGFiaWxpdGllc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FwVHlwZSBjYXBhYmlsaXR5IHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0RHNDYXAgPSAoY2FwYWJpbGl0aWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgY2FwVHlwZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKGNhcGFiaWxpdGllcykge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY2FwYWJpbGl0aWVzKVxyXG4gICAgICA/IGNhcGFiaWxpdGllcz8uam9pbigpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY2FwVHlwZSlcclxuICAgICAgOiBjYXBhYmlsaXRpZXM/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY2FwVHlwZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RHNQcml2aWxlZ2VzID0gKGxheWVyRGVmaW5pdGlvbjogSUxheWVyRGVmaW5pdGlvbikgPT4ge1xyXG4gIGNvbnN0IGFsbG93R2VvbWV0cnlVcGRhdGVzID0gbGF5ZXJEZWZpbml0aW9uPy5hbGxvd0dlb21ldHJ5VXBkYXRlc1xyXG4gIGNvbnN0IGNhcGFiaWxpdGllcyA9IGxheWVyRGVmaW5pdGlvbj8uY2FwYWJpbGl0aWVzXHJcbiAgY29uc3QgY3JlYXRlID0gZ2V0RHNDYXAoY2FwYWJpbGl0aWVzLCAnY3JlYXRlJylcclxuICBjb25zdCB1cGRhdGUgPSBnZXREc0NhcChjYXBhYmlsaXRpZXMsICd1cGRhdGUnKVxyXG4gIGNvbnN0IGRlbGV0YWJsZSA9IGdldERzQ2FwKGNhcGFiaWxpdGllcywgJ2RlbGV0ZScpXHJcbiAgcmV0dXJuIHsgYWxsb3dHZW9tZXRyeVVwZGF0ZXMsIGNyZWF0ZSwgdXBkYXRlLCBkZWxldGFibGUgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgbmFtZXMgb2YgdGhlIGZpZWxkcyB3aGljaCBhcmUgdXNlZCBmb3IgdHJhY2tpbmcgZWRpdHMuXHJcbiAqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0SGlkZGVuRmllbGRzIChsYXllckRlZmluaXRpb246IElMYXllckRlZmluaXRpb24pOiBzdHJpbmdbXSB7XHJcbiAgaWYgKCFsYXllckRlZmluaXRpb24pIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxuICBjb25zdCBvYmplY3RJZEZpZWxkID0gbGF5ZXJEZWZpbml0aW9uLm9iamVjdElkRmllbGRcclxuICBjb25zdCB7IGNyZWF0aW9uRGF0ZUZpZWxkLCBjcmVhdG9yRmllbGQsIGVkaXREYXRlRmllbGQsIGVkaXRvckZpZWxkIH0gPSBsYXllckRlZmluaXRpb24uZWRpdEZpZWxkc0luZm8gfHwge31cclxuICAvLyBSRVNUIEFQSSBkb2VzIG5vdCBleHBvc2UgdGhlIGBnZW9tZXRyeVByb3BlcnRpZXNgXHJcbiAgLy8gV2hpbGUgTWFwIFNESyB1c2VzIHRoaXMgdG8gaGlkZSB0aGUgc3RfbGVuZ3RoKHNoYXBlKSBhbmQgc3RfYXJlYShzaGFwZSkgZmllbGRzXHJcbiAgY29uc3QgeyBzaGFwZUFyZWFGaWVsZE5hbWUsIHNoYXBlTGVuZ3RoRmllbGROYW1lIH0gPSAobGF5ZXJEZWZpbml0aW9uIGFzIGFueSkuZ2VvbWV0cnlQcm9wZXJ0aWVzIHx8IHt9XHJcbiAgcmV0dXJuIFtvYmplY3RJZEZpZWxkLCBjcmVhdGlvbkRhdGVGaWVsZCwgY3JlYXRvckZpZWxkLCBlZGl0RGF0ZUZpZWxkLCBlZGl0b3JGaWVsZCwgc2hhcGVBcmVhRmllbGROYW1lLCBzaGFwZUxlbmd0aEZpZWxkTmFtZV0uZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5vbkdyb3VwRWxlbWVudCA9IF9fZXNyaS5BdHRhY2htZW50RWxlbWVudFxyXG4gIHwgX19lc3JpLkZpZWxkRWxlbWVudFxyXG4gIHwgX19lc3JpLlJlbGF0aW9uc2hpcEVsZW1lbnRcclxuICB8IF9fZXNyaS5UZXh0RWxlbWVudFxyXG4gIHwgX19lc3JpLlV0aWxpdHlOZXR3b3JrQXNzb2NpYXRpb25zRWxlbWVudFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZsYXRGb3JtRWxlbWVudHMgPSAoZm9ybUVsZW1lbnRzOiBfX2VzcmkuRm9ybVRlbXBsYXRlWydlbGVtZW50cyddKTogTm9uR3JvdXBFbGVtZW50W10gPT4ge1xyXG4gIGNvbnN0IGZsYXRFbGVtZW50czogTm9uR3JvdXBFbGVtZW50W10gPSBbXVxyXG4gIGZvcm1FbGVtZW50cz8uZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgaWYgKGVsZS50eXBlID09PSAnZ3JvdXAnKSB7XHJcbiAgICAgIGZsYXRFbGVtZW50cy5wdXNoKC4uLmdldEZsYXRGb3JtRWxlbWVudHMoZWxlLmVsZW1lbnRzKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZsYXRFbGVtZW50cy5wdXNoKGVsZSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmbGF0RWxlbWVudHNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdENvbmZpZyA9IChkczogU3VwcG9ydGVkRGF0YVNvdXJjZSwgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBfX2VzcmkuU3VidHlwZVN1YmxheWVyKSA9PiB7XHJcbiAgLy8gSW5pdCBjYXBhYmlsaXRpZXNcclxuICBjb25zdCBsYXllckRlZmluaXRpb24gPSBkcy5nZXRMYXllckRlZmluaXRpb24oKVxyXG4gIGNvbnN0IHthbGxvd0dlb21ldHJ5VXBkYXRlcywgY3JlYXRlLCB1cGRhdGUsIGRlbGV0YWJsZX0gPSBnZXREc1ByaXZpbGVnZXMobGF5ZXJEZWZpbml0aW9uKVxyXG4gIC8vIEZpZWxkcyBvcGVyYXRpb25cclxuICBjb25zdCBmaWVsZHMgPSBkcy5nZXRTY2hlbWEoKT8uZmllbGRzPy5hc011dGFibGU/Lih7IGRlZXA6IHRydWUgfSkgfHwge31cclxuICBsZXQgc2hvd0ZpZWxkcyA9IE9iamVjdC52YWx1ZXMoZmllbGRzKVxyXG4gIC8vIEFjY29yZGluZyB0byB0aGUgQVBJLCB0aGVzZSBmaXZlIGl0ZW1zIGRvIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIEVkaXRvciBieSBkZWZhdWx0XHJcbiAgc2hvd0ZpZWxkcyA9IHNob3dGaWVsZHMuZmlsdGVyKFxyXG4gICAgaXRlbSA9PiAhZ2V0RWRpdEhpZGRlbkZpZWxkcyhsYXllckRlZmluaXRpb24pLmluY2x1ZGVzKGl0ZW0ubmFtZSlcclxuICApXHJcbiAgLy8gUG9wdXAgU2V0dGluZyBpcyBpbml0aWFsbHkgc2VsZWN0ZWQgYnkgZGVmYXVsdCBpZiB0aGUgbWFwIGhhcyBwb3B1cCBzZXR0aW5nXHJcbiAgY29uc3QgZm9ybUVsZW1lbnRzID0gbGF5ZXIuZm9ybVRlbXBsYXRlPy5lbGVtZW50c1xyXG4gIGlmIChmb3JtRWxlbWVudHMpIHtcclxuICAgIGNvbnN0IGZvcm1GaWVsZE5hbWVzID0gZ2V0RmxhdEZvcm1FbGVtZW50cyhmb3JtRWxlbWVudHMpLmZpbHRlcihlbGUgPT4gZWxlLnR5cGUgPT09ICdmaWVsZCcpLm1hcChlbGUgPT4gZWxlLmZpZWxkTmFtZSlcclxuICAgIHNob3dGaWVsZHMgPSBzaG93RmllbGRzLmZpbHRlcihmID0+IGZvcm1GaWVsZE5hbWVzLmluY2x1ZGVzKGYubmFtZSkpXHJcbiAgfVxyXG4gIC8vIElmIHRoZXJlIGFyZSB0b28gbWFueSBjb2x1bW5zLCBvbmx5IHRoZSBmaXJzdCA1MCBjb2x1bW5zIHdpbGwgYmUgZGlzcGxheWVkIGJ5IGRlZmF1bHRcclxuICBpZiAoc2hvd0ZpZWxkcz8ubGVuZ3RoID4gNTApIHtcclxuICAgIHNob3dGaWVsZHMgPSBzaG93RmllbGRzLnNsaWNlKDAsIDUwKVxyXG4gIH1cclxuICAvLyBGaWVsZCBlZGl0aW5nIGlzIGVuYWJsZWQgYnkgZGVmYXVsdFxyXG4gIGNvbnN0IGZpZWxkc0NvbmZpZyA9IGxheWVyRGVmaW5pdGlvbj8uZmllbGRzIHx8IFtdXHJcbiAgY29uc3QgZ3JvdXBlZEZpZWxkcyA9IHNob3dGaWVsZHMubWFwKGl0ZW0gPT4ge1xyXG4gICAgY29uc3Qgb3JnRmllbGQgPSBmaWVsZHNDb25maWcuZmluZChmaWVsZCA9PiBmaWVsZC5uYW1lID09PSBpdGVtLmppbXVOYW1lKVxyXG4gICAgY29uc3QgZGVmYXVsdEF1dGhvcml0eSA9IG9yZ0ZpZWxkPy5lZGl0YWJsZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaXRlbSxcclxuICAgICAgZWRpdEF1dGhvcml0eTogZGVmYXVsdEF1dGhvcml0eSxcclxuICAgICAgc3ViRGVzY3JpcHRpb246IGl0ZW0/LmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICBlZGl0YWJsZTogZGVmYXVsdEF1dGhvcml0eVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSB7XHJcbiAgICBkYXRhU291cmNlSWQ6IGRzLmlkLFxyXG4gICAgbWFpbkRhdGFTb3VyY2VJZDogZHMuaWQsXHJcbiAgICBkYXRhVmlld0lkOiBkcy5kYXRhVmlld0lkLFxyXG4gICAgcm9vdERhdGFTb3VyY2VJZDogZHMuZ2V0Um9vdERhdGFTb3VyY2UoKT8uaWRcclxuICB9XHJcbiAgY29uc3QgbGF5ZXJDb25maWc6IExheWVyc0NvbmZpZyA9IHtcclxuICAgIGlkOiBkcy5pZCxcclxuICAgIG5hbWU6IGRzLmdldExhYmVsKCksXHJcbiAgICB1c2VEYXRhU291cmNlOiBJbW11dGFibGUodXNlRGF0YVNvdXJjZXMpLFxyXG4gICAgYWRkUmVjb3JkczogY3JlYXRlLFxyXG4gICAgZGVsZXRlUmVjb3JkczogZGVsZXRhYmxlLFxyXG4gICAgdXBkYXRlUmVjb3JkczogdXBkYXRlLFxyXG4gICAgdXBkYXRlQXR0cmlidXRlczogdXBkYXRlLFxyXG4gICAgdXBkYXRlR2VvbWV0cmllczogYWxsb3dHZW9tZXRyeVVwZGF0ZXMgJiYgdXBkYXRlLFxyXG4gICAgc2hvd0ZpZWxkcyxcclxuICAgIGdyb3VwZWRGaWVsZHMsXHJcbiAgICBsYXllckhvbm9yTW9kZTogTGF5ZXJIb25vck1vZGVUeXBlLldlYm1hcFxyXG4gIH1cclxuICByZXR1cm4gbGF5ZXJDb25maWdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VCeUlkID0gKGRzSWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZHNJZCkgYXMgU3VwcG9ydGVkRGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RWRpdERhdGFTb3VyY2UgPSAoZHM6IFN1cHBvcnRlZERhdGFTb3VyY2UpID0+IHtcclxuICBjb25zdCBpc1NjZW5lTGF5ZXIgPSBkcz8udHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLlNjZW5lTGF5ZXIgfHwgZHM/LnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5CdWlsZGluZ0NvbXBvbmVudFN1YkxheWVyXHJcbiAgY29uc3QgaXNPcmllbnRlZEltYWdlcnkgPSBkcz8udHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLk9yaWVudGVkSW1hZ2VyeUxheWVyXHJcbiAgbGV0IGRhdGFTb3VyY2U6IEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBTdWJ0eXBlU3VibGF5ZXJEYXRhU291cmNlXHJcbiAgaWYgKGlzU2NlbmVMYXllcikge1xyXG4gICAgZGF0YVNvdXJjZSA9IGRzLmdldEFzc29jaWF0ZWREYXRhU291cmNlKClcclxuICB9IGVsc2UgaWYgKGlzT3JpZW50ZWRJbWFnZXJ5KSB7XHJcbiAgICAvLyBPcmllbnRlZEltYWdlcnlMYXllciBleHRlbmRzIEZlYXR1cmVMYXllciwgc28gd2UgY2FuIHVzZSBpdCBhcyBhIEZlYXR1cmVMYXllclxyXG4gICAgZGF0YVNvdXJjZSA9IGRzIGFzIHVua25vd24gYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXRhU291cmNlID0gZHNcclxuICB9XHJcbiAgcmV0dXJuIGRhdGFTb3VyY2VcclxufVxyXG4iLCJpbXBvcnQgeyB0eXBlIERhdGFTb3VyY2UsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEZlYXR1cmVMYXllckRhdGFTb3VyY2UsIEltbXV0YWJsZSwgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBKU0FQSUxheWVyTWl4aW4sIFN1cHBvcnRlZExheWVyU2VydmljZVR5cGVzLCB0eXBlIFdpZGdldFVwZ3JhZGVJbmZvLCBXaWRnZXRWZXJzaW9uTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgRWRpdE1vZGVUeXBlLCB0eXBlIElNQ29uZmlnLCBMYXllckhvbm9yTW9kZVR5cGUsIHR5cGUgTWFwVmlld0NvbmZpZywgU25hcFNldHRpbmdNb2RlIH0gZnJvbSAnLi9jb25maWcnXHJcbmltcG9ydCB7IElOVklTSUJMRV9GSUVMRCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5jbGFzcyBWZXJzaW9uTWFuYWdlciBleHRlbmRzIFdpZGdldFZlcnNpb25NYW5hZ2VyIHtcclxuICB2ZXJzaW9ucyA9IFt7XHJcbiAgICB2ZXJzaW9uOiAnMS43LjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICdBZGQgbGF5ZXJIb25vck1vZGUgdG8gY29uZmlnIGZvciBzdXBwb3J0IHNtYXJ0IGZvcm0uJyxcclxuICAgIHVwZ3JhZGVyOiBhc3luYyAob2xkQ29uZmlnKSA9PiB7XHJcbiAgICAgIGxldCBuZXdDb25maWcgPSBvbGRDb25maWdcclxuICAgICAgY29uc3QgZGVjb3VwbGVOZXN0ZWQgPSAoZ3JvdXBTdWJJdGVtcywgZmllbGRzQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdW5OZXN0ZWRGaWVsZHMgPSBbXVxyXG4gICAgICAgIGNvbnN0IHJlY3Vyc2lvbiA9IChzdWJJdGVtcykgPT4ge1xyXG4gICAgICAgICAgc3ViSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uZ3JvdXBLZXkpIHtcclxuICAgICAgICAgICAgICByZWN1cnNpb24oaXRlbS5jaGlsZHJlbilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBzdWJPcmdGaWVsZCA9IGZpZWxkc0NvbmZpZy5maW5kKGNvbmZpZyA9PiBjb25maWcubmFtZSA9PT0gaXRlbS5qaW11TmFtZSlcclxuICAgICAgICAgICAgICBpZiAoIUlOVklTSUJMRV9GSUVMRC5pbmNsdWRlcyhpdGVtLmppbXVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5OZXN0ZWRGaWVsZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBzdWJPcmdGaWVsZD8uZWRpdGFibGUsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRBdXRob3JpdHk6IHN1Yk9yZ0ZpZWxkPy5lZGl0YWJsZSA/IGl0ZW0/LmVkaXRBdXRob3JpdHkgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gdW5OZXN0ZWRGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2lvbihncm91cFN1Ykl0ZW1zKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBuZXdDb25maWcubGF5ZXJzQ29uZmlnLm1hcChsYXllckNvbmZpZyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuY3JlYXRlRGF0YVNvdXJjZUJ5VXNlRGF0YVNvdXJjZShsYXllckNvbmZpZy51c2VEYXRhU291cmNlKS50aGVuKGN1cnJlbnREcyA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGF5ZXJEZWZpbml0aW9uID0gKGN1cnJlbnREcyBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlKT8uZ2V0TGF5ZXJEZWZpbml0aW9uKClcclxuICAgICAgICAgICAgICBjb25zdCBmaWVsZHNDb25maWcgPSBsYXllckRlZmluaXRpb24/LmZpZWxkcyB8fCBbXVxyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld0dyb3VwZWRGaWVsZHMgPSBsYXllckNvbmZpZy5ncm91cGVkRmllbGRzLm1hcChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmdGaWVsZCA9IGZpZWxkc0NvbmZpZy5maW5kKGNvbmZpZyA9PiBjb25maWcubmFtZSA9PT0gZmllbGQuamltdU5hbWUpXHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZ3JvdXBLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0QXV0aG9yaXR5OiAhZmllbGQ/LmNoaWxkcmVuPy5zb21lKGl0ZW0gPT4gaXRlbS5lZGl0QXV0aG9yaXR5ID09PSBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRlY291cGxlTmVzdGVkKGZpZWxkPy5jaGlsZHJlbiwgZmllbGRzQ29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IG9yZ0ZpZWxkPy5lZGl0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgZWRpdEF1dGhvcml0eTogb3JnRmllbGQ/LmVkaXRhYmxlID8gZmllbGQ/LmVkaXRBdXRob3JpdHkgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIGl0ZW0gPT4gIUlOVklTSUJMRV9GSUVMRC5pbmNsdWRlcyhpdGVtLmppbXVOYW1lKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXNvbHZlKG5ld0dyb3VwZWRGaWVsZHMpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKFtdKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXMuZm9yRWFjaCgocmVzSXRlbTogSW1tdXRhYmxlQXJyYXk8YW55PiwgaSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWVsZHMgPSBuZXdDb25maWcubGF5ZXJzQ29uZmlnW2ldLnNob3dGaWVsZHMuZmlsdGVyKFxyXG4gICAgICAgICAgICBpdGVtID0+ICFJTlZJU0lCTEVfRklFTEQuaW5jbHVkZXMoaXRlbS5qaW11TmFtZSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIGxldCB1bkdyb3VwZWRGaWVsZHMgPSBbXVxyXG4gICAgICAgICAgY29uc3QgcmVzR3JvdXBlZEZpZWxkcyA9IHJlc0l0ZW0uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxyXG4gICAgICAgICAgcmVzSXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5ncm91cEtleSkge1xyXG4gICAgICAgICAgICAgIHVuR3JvdXBlZEZpZWxkcyA9IHVuR3JvdXBlZEZpZWxkcy5jb25jYXQoaXRlbS5jaGlsZHJlbilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB1bkdyb3VwZWRGaWVsZHMucHVzaChpdGVtKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgc2VsZWN0ZWRGaWVsZHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXVuR3JvdXBlZEZpZWxkcy5maW5kKGZpZWxkID0+IGZpZWxkLmppbXVOYW1lID09PSBlbGUuamltdU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgcmVzR3JvdXBlZEZpZWxkcy5wdXNoKGVsZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ2xheWVyc0NvbmZpZycsIGksICdncm91cGVkRmllbGRzJ10sIEltbXV0YWJsZShyZXNHcm91cGVkRmllbGRzKSlcclxuICAgICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ2xheWVyc0NvbmZpZycsIGksICdsYXllckhvbm9yTW9kZSddLCBMYXllckhvbm9yTW9kZVR5cGUuQ3VzdG9tKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXdDb25maWcpXHJcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ld0NvbmZpZylcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICB2ZXJzaW9uOiAnMS4xMC4wJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IG9sZCBhcHAgZGVmYXVsdCBzbmFwcGluZyB0byB0cnVlJyxcclxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnKSA9PiB7XHJcbiAgICAgIGxldCBuZXdDb25maWcgPSBvbGRDb25maWdcclxuICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgnc2VsZlNuYXBwaW5nJywgdHJ1ZSkuc2V0KCdmZWF0dXJlU25hcHBpbmcnLCB0cnVlKVxyXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgdmVyc2lvbjogJzEuMTIuMCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1NldCBcInVuZGVmaW5lZFwiIG9wdGlvbiB0byBcImZhbHNlXCIsIGFuZCByZW1vdmUgbm90IGVkaXRhYmxlIGxheWVyJyxcclxuICAgIHVwZ3JhZGVyOiBhc3luYyAob2xkQ29uZmlnKSA9PiB7XHJcbiAgICAgIGxldCBuZXdDb25maWcgPSBvbGRDb25maWdcclxuICAgICAgY29uc3QgaXNHZW9tZXRyeU1vZGUgPSBuZXdDb25maWcuZWRpdE1vZGUgPT09IEVkaXRNb2RlVHlwZS5HZW9tZXRyeVxyXG4gICAgICBjb25zdCBkc01hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICAgIGNvbnN0IG5ld0xheWVyc0NvbmZpZyA9IFtdXHJcbiAgICAgIGZvciAoY29uc3QgY29uZmlnIG9mIG5ld0NvbmZpZy5sYXllcnNDb25maWcpIHtcclxuICAgICAgICBsZXQgZGF0YVNvdXJjZVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBkYXRhU291cmNlID0gYXdhaXQgZHNNYW5hZ2VyLmNyZWF0ZURhdGFTb3VyY2VCeVVzZURhdGFTb3VyY2UoY29uZmlnPy51c2VEYXRhU291cmNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgIG5ld0xheWVyc0NvbmZpZy5wdXNoKGNvbmZpZylcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxheWVyRGVmaW5pdGlvbiA9IGRhdGFTb3VyY2U/LmdldExheWVyRGVmaW5pdGlvbigpXHJcbiAgICAgICAgY29uc3QgaXNUYWJsZSA9IGRhdGFTb3VyY2U/LmxheWVyPy5pc1RhYmxlIHx8IGxheWVyRGVmaW5pdGlvbj8udHlwZSA9PT0gU3VwcG9ydGVkTGF5ZXJTZXJ2aWNlVHlwZXMuVGFibGVcclxuICAgICAgICBpZiAoaXNHZW9tZXRyeU1vZGUgJiYgaXNUYWJsZSkgY29udGludWVcclxuICAgICAgICBjb25zdCBhbGxvd0dlb21ldHJ5VXBkYXRlcyA9IGxheWVyRGVmaW5pdGlvbj8uYWxsb3dHZW9tZXRyeVVwZGF0ZXNcclxuICAgICAgICBjb25zdCBsYXllckVkaXRpbmdFbmFibGVkID0gZGF0YVNvdXJjZT8ubGF5ZXI/LmVkaXRpbmdFbmFibGVkID8/IHRydWVcclxuICAgICAgICBpZiAobGF5ZXJFZGl0aW5nRW5hYmxlZCkge1xyXG4gICAgICAgICAgbGV0IG5ld0xheWVyQ29uZmlnXHJcbiAgICAgICAgICBpZiAoY29uZmlnLnVwZGF0ZUdlb21ldHJpZXMpIHtcclxuICAgICAgICAgICAgbmV3TGF5ZXJDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgICAgICAgIHVwZGF0ZVJlY29yZHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgdXBkYXRlQXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICB1cGRhdGVHZW9tZXRyaWVzOiBhbGxvd0dlb21ldHJ5VXBkYXRlcyAmJiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0xheWVyQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICAgICAgICB1cGRhdGVSZWNvcmRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICB1cGRhdGVBdHRyaWJ1dGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICB1cGRhdGVHZW9tZXRyaWVzOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV3TGF5ZXJzQ29uZmlnLnB1c2gobmV3TGF5ZXJDb25maWcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ2xheWVyc0NvbmZpZyddLCBuZXdMYXllcnNDb25maWcpXHJcbiAgICAgIHJldHVybiBuZXdDb25maWdcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICB2ZXJzaW9uOiAnMS4xMy4wJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVXBkYXRlIHNuYXAgb3B0aW9ucycsXHJcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZykgPT4ge1xyXG4gICAgICBsZXQgbmV3Q29uZmlnID0gb2xkQ29uZmlnXHJcbiAgICAgIGlmIChuZXdDb25maWcuc2VsZlNuYXBwaW5nKSB7XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgnZGVmYXVsdFNlbGZFbmFibGVkJywgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3Q29uZmlnLmZlYXR1cmVTbmFwcGluZykge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ2RlZmF1bHRGZWF0dXJlRW5hYmxlZCcsIHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHZlcnNpb246ICcxLjE0LjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICdBZGQgcHJlZGVmaW5lIHNuYXBwaW5nIG9wdGlvbnMnLFxyXG4gICAgdXBncmFkZXI6IChvbGRDb25maWcpID0+IHtcclxuICAgICAgbGV0IG5ld0NvbmZpZyA9IG9sZENvbmZpZ1xyXG4gICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0KCdzbmFwU2V0dGluZ01vZGUnLCBTbmFwU2V0dGluZ01vZGUuRmxleGlibGUpXHJcbiAgICAgIHJldHVybiBuZXdDb25maWdcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICB2ZXJzaW9uOiAnMS4xNS4wJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnQWRkIGdlbmVyYWwgc2V0dGluZyBvcHRpb25zJyxcclxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnKSA9PiB7XHJcbiAgICAgIGxldCBuZXdDb25maWcgPSBvbGRDb25maWdcclxuICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgndG9vbHRpcCcsIHRydWUpLnNldCgndGVtcGxhdGVGaWx0ZXInLCB0cnVlKS5zZXQoJ3JlbGF0ZWRSZWNvcmRzJywgdHJ1ZSlcclxuICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHZlcnNpb246ICcxLjE2LjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICdVcGRhdGUgbWFwIG1vZGUgY29uZmlnJyxcclxuICAgIHVwZ3JhZGVGdWxsSW5mbzogdHJ1ZSxcclxuICAgIHVwZ3JhZGVyOiBhc3luYyAob2xkSW5mbzogV2lkZ2V0VXBncmFkZUluZm8pID0+IHtcclxuICAgICAgY29uc3Qgb2xkV2lkZ2V0SnNvbiA9IG9sZEluZm8ud2lkZ2V0SnNvblxyXG4gICAgICBjb25zdCBvbGRDb25maWcgPSBvbGRXaWRnZXRKc29uLmNvbmZpZyBhcyBJTUNvbmZpZ1xyXG4gICAgICBpZiAoIW9sZENvbmZpZykgcmV0dXJuIG9sZEluZm9cclxuICAgICAgbGV0IG5ld0NvbmZpZyA9IG9sZENvbmZpZ1xyXG4gICAgICBjb25zdCB7IGVkaXRNb2RlLCBsYXllcnNDb25maWcgfSA9IG9sZENvbmZpZ1xyXG4gICAgICBjb25zdCBpc0VkaXRNb2RlID0gZWRpdE1vZGUgPT09IEVkaXRNb2RlVHlwZS5HZW9tZXRyeVxyXG4gICAgICBjb25zdCBuZXdNYXBWaWV3c0NvbmZpZzogeyBbamltdU1hcFZpZXdJZDogc3RyaW5nXTogTWFwVmlld0NvbmZpZyB9ID0ge31cclxuXHJcbiAgICAgIGNvbnN0IGdldEppbXVMYXllclZpZXdJZEJ5TGF5ZXJEc0lkID0gYXN5bmMgKGxheWVyRHNJZDogc3RyaW5nLCBtYXBEc0lkOiBzdHJpbmcsIGppbXVNYXBWaWV3SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBsYXllckRzID0gYXdhaXQgRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jcmVhdGVEYXRhU291cmNlQnlVc2VEYXRhU291cmNlKEltbXV0YWJsZSh7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogbGF5ZXJEc0lkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBsYXllckRzSWQsXHJcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IG1hcERzSWRcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgaWYgKCFsYXllckRzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBjcmVhdGUgbGF5ZXIgZGF0YSBzb3VyY2UuJywgbGF5ZXJEc0lkKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgamltdUxheWVyVmlld0lkID0gYCR7amltdU1hcFZpZXdJZH0tJHsobGF5ZXJEcyBhcyBKU0FQSUxheWVyTWl4aW4gJiBEYXRhU291cmNlKS5qaW11TGF5ZXJJZH1gXHJcbiAgICAgICAgICByZXR1cm4gamltdUxheWVyVmlld0lkXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBjcmVhdGUgbGF5ZXIgZGF0YSBzb3VyY2UuJywgZXJyb3IpXHJcbiAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzRWRpdE1vZGUpIHtcclxuICAgICAgICBjb25zdCB1c2VNYXBXaWRnZXRJZCA9IG9sZFdpZGdldEpzb24udXNlTWFwV2lkZ2V0SWRzWzBdXHJcbiAgICAgICAgZm9yIChjb25zdCBjb25maWcgb2YgbGF5ZXJzQ29uZmlnKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXllckRzSWQgPSBjb25maWcuaWRcclxuICAgICAgICAgIGNvbnN0IGkgPSBsYXllckRzSWQuaW5kZXhPZignLScpXHJcbiAgICAgICAgICBjb25zdCBtYXBEc0lkID0gY29uZmlnLmlkLnN1YnN0cmluZygwLCBpKVxyXG4gICAgICAgICAgY29uc3QgamltdU1hcFZpZXcgPSBgJHt1c2VNYXBXaWRnZXRJZH0tJHttYXBEc0lkfWAgLy8gbGlrZSAnd2lkZ2V0XzEtZGF0YVNvdXJjZV8xJ1xyXG4gICAgICAgICAgY29uc3QgamltdUxheWVyVmlld0lkID0gYXdhaXQgZ2V0SmltdUxheWVyVmlld0lkQnlMYXllckRzSWQobGF5ZXJEc0lkLCBtYXBEc0lkLCBqaW11TWFwVmlldylcclxuICAgICAgICAgIGlmICghamltdUxheWVyVmlld0lkKSBjb250aW51ZVxyXG4gICAgICAgICAgY29uc3QgbXV0YWJsZUNvbmZpZyA9IChjb25maWcgYXMgYW55KS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXHJcbiAgICAgICAgICBpZiAobmV3TWFwVmlld3NDb25maWdbamltdU1hcFZpZXddKSB7XHJcbiAgICAgICAgICAgIG5ld01hcFZpZXdzQ29uZmlnW2ppbXVNYXBWaWV3XS5jdXN0b21KaW11TGF5ZXJWaWV3SWRzLnB1c2goamltdUxheWVyVmlld0lkKVxyXG4gICAgICAgICAgICBjb25zdCBvcmdMYXllcnNDb25maWcgPSBuZXdNYXBWaWV3c0NvbmZpZ1tqaW11TWFwVmlld10ubGF5ZXJzQ29uZmlnXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xheWVyc0NvbmZpZyA9IG9yZ0xheWVyc0NvbmZpZ1xyXG4gICAgICAgICAgICBuZXdMYXllcnNDb25maWcucHVzaChtdXRhYmxlQ29uZmlnKVxyXG4gICAgICAgICAgICBuZXdNYXBWaWV3c0NvbmZpZ1tqaW11TWFwVmlld10ubGF5ZXJzQ29uZmlnID0gbmV3TGF5ZXJzQ29uZmlnXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWaWV3Q29uZmlnOiBNYXBWaWV3Q29uZmlnID0ge1xyXG4gICAgICAgICAgICAgIGN1c3RvbWl6ZUxheWVyczogdHJ1ZSxcclxuICAgICAgICAgICAgICBjdXN0b21KaW11TGF5ZXJWaWV3SWRzOiBbamltdUxheWVyVmlld0lkXSxcclxuICAgICAgICAgICAgICBsYXllcnNDb25maWc6IFttdXRhYmxlQ29uZmlnXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld01hcFZpZXdzQ29uZmlnW2ppbXVNYXBWaWV3XSA9IG5ld1ZpZXdDb25maWdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgnbWFwVmlld3NDb25maWcnLCBuZXdNYXBWaWV3c0NvbmZpZylcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3aWRnZXRKc29uID0gb2xkV2lkZ2V0SnNvbi5zZXQoJ2NvbmZpZycsIEltbXV0YWJsZShuZXdDb25maWcpKVxyXG4gICAgICBjb25zdCB3aWRnZXRJbmZvID0geyAuLi5vbGRJbmZvLCB3aWRnZXRKc29uIH1cclxuICAgICAgcmV0dXJuIHdpZGdldEluZm9cclxuICAgIH1cclxuICB9XVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmVyc2lvbk1hbmFnZXI6IFdpZGdldFZlcnNpb25NYW5hZ2VyID0gbmV3IFZlcnNpb25NYW5hZ2VyKClcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FyY2dpc19tYXBfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9jb3JlX0NvbGxlY3Rpb25fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2NvcmVfcmVhY3RpdmVVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2Zvcm1fRXhwcmVzc2lvbkluZm9fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9mb3JtX0Zvcm1UZW1wbGF0ZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2Zvcm1fZWxlbWVudHNfRmllbGRFbGVtZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZm9ybV9lbGVtZW50c19Hcm91cEVsZW1lbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X3N1cHBvcnRfUXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX0JhdGNoQXR0cmlidXRlRm9ybV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfRWRpdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19GZWF0dXJlRm9ybV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCBXaWRnZXRTdGF0ZSwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgRWRpdE1vZGVUeXBlLCB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgRmVhdHVyZUZvcm1Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2ZlYXR1cmUtZm9ybS1jb21wb25lbnQnXHJcbmltcG9ydCBFZGl0b3JDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvci1jb21wb25lbnQnXHJcbmltcG9ydCB7IGdldFByaXZpbGVnZSB9IGZyb20gJy4vY29tcG9uZW50cy91dGlscydcclxuaW1wb3J0IHsgdmVyc2lvbk1hbmFnZXIgfSBmcm9tICcuLi92ZXJzaW9uLW1hbmFnZXInXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1vblByb3BzIHtcclxuICBjb25maWc6IElNQ29uZmlnXHJcbiAgY2FuRWRpdEZlYXR1cmU6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgRWRpdFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgbGFiZWwsIGNvbmZpZywgdXNlRGF0YVNvdXJjZXMsIHVzZU1hcFdpZGdldElkcywgY29udHJvbGxlcldpZGdldElkLCBzdGF0ZSB9ID0gcHJvcHNcclxuICBjb25zdCBpc0F0dHJpYnV0ZU9ubHkgPSBjb25maWcuZWRpdE1vZGUgPT09IEVkaXRNb2RlVHlwZS5BdHRyaWJ1dGVcclxuICAvLyB1c2UgZXhiIHByaXZpbGVnZSBpbnN0ZWFkIG9mIGFwaSdzIHN1cHBvcnRzVXBkYXRlQnlPdGhlcnNcclxuICBjb25zdCBbY2FuRWRpdEZlYXR1cmUsIHNldENhbkVkaXRGZWF0dXJlXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJpdmlsZWdlKCkudGhlbigoY2FuRWRpdCkgPT4ge1xyXG4gICAgICBzZXRDYW5FZGl0RmVhdHVyZShjYW5FZGl0KVxyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBzZXRDYW5FZGl0RmVhdHVyZShmYWxzZSlcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHZpc2libGUgPSBjb250cm9sbGVyV2lkZ2V0SWQgPyBbV2lkZ2V0U3RhdGUuQWN0aXZlLCBXaWRnZXRTdGF0ZS5PcGVuZWRdLmluY2x1ZGVzKHN0YXRlKSA6IHN0YXRlICE9PSBXaWRnZXRTdGF0ZS5IaWRkZW5cclxuXHJcbiAgcmV0dXJuIGlzQXR0cmlidXRlT25seVxyXG4gICAgPyA8RmVhdHVyZUZvcm1Db21wb25lbnQgbGFiZWw9e2xhYmVsfSBjb25maWc9e2NvbmZpZ30gY2FuRWRpdEZlYXR1cmU9e2NhbkVkaXRGZWF0dXJlfSB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9IC8+XHJcbiAgICA6IDxFZGl0b3JDb21wb25lbnQgaWQ9e2lkfSB2aXNpYmxlPXt2aXNpYmxlfSBjb25maWc9e2NvbmZpZ30gY2FuRWRpdEZlYXR1cmU9e2NhbkVkaXRGZWF0dXJlfSB1c2VNYXBXaWRnZXRJZHM9e3VzZU1hcFdpZGdldElkc30gLz5cclxufVxyXG5cclxuRWRpdFdpZGdldC52ZXJzaW9uTWFuYWdlciA9IHZlcnNpb25NYW5hZ2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0V2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=