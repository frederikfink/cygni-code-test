/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --primary: #E88B00;\\n    --secondary: #EFF1F3;\\n    --muted: #A7A7A7;\\n    --muted-dark: #454545;\\n    --bg: #16181A;\\n    --black: #000000;\\n}\\n\\nbody {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Inter', sans-serif;\\n    background-color: var(--bg);\\n    color: var(--bg);\\n}\\n\\nh1 { \\n    color: var(--primary); \\n    letter-spacing: -.1rem; \\n    margin: 0;\\n    font-weith: 800; \\n}\\n\\n.container {\\n    max-width: 1500px;\\n    margin: 0 auto;\\n}\\n\\n.nav__wrapper {\\n    position:fixed;\\n    width: 100%;\\n    background-color: rgba(22, 24, 26, 0.9);\\n    max-width: 1500px;\\n    backdrop-filter: blur(24px);\\n    -webkit-backdrop-filter: blur(24px);\\n    padding: 20px 0;\\n}\\n\\n.nav {\\n    margin: 0 20px;\\n    display: flex;\\n    align-items: center;\\n}\\n\\nbutton {\\n    all: unset;\\n    cursor: pointer;\\n}\\n\\ninput {\\n    all: unset;\\n}\\n\\nbutton:focus {\\n    outline: orange 5px auto;\\n}\\n\\n.nav__search {\\n    align-items: center;\\n    display:flex;\\n}\\n\\n.btn {\\n    border: 1px solid var(--muted-dark);\\n    border-radius: 0.3rem;\\n    padding: 0.4rem 0.8rem;\\n    color: var(--secondary);\\n    font-size: 0.8rem;\\n    display: flex;\\n    align-items: center;\\n    background-color:transparent;\\n}\\n\\n.nav__search_btn_icon {\\n    margin-left: 0.5rem;\\n    height: 1.2rem;\\n    width: 1.2rem;\\n    color: var(--secondary);\\n}\\n\\n.nav__search_btn_label {\\n    margin: 0 20px 0 0;\\n    color: var(--muted);\\n    font-family: 'Courier New', monospace;\\n    font-size: 0.9rem;\\n    display: block;\\n}\\n\\n.nav__search_field {\\n    margin-right: 1rem;\\n    padding: 0.2rem 0.6rem;\\n    max-width: 200px;\\n    font-size: 0.8rem;\\n    font-family: 'Inter', sans-serif;\\n    background: transparent;\\n    border-bottom: 1px solid var(--muted-dark);\\n    color: var(--muted);\\n}\\n\\n.feed {\\n    justify-content: center;\\n    padding: 100px 20px 0 20px;\\n    display:flex;\\n    gap: 20px;\\n    flex-wrap: wrap;\\n}\\n\\n.post {\\n    width: 100%;\\n    max-width: 350px;\\n    color: var(--muted);\\n    font-family: 'Inter', sans-serif;\\n    font-size: 0.8rem;\\n}\\n\\n.post__btn {\\n    width: inherit;\\n}\\n\\n.post__img {\\n    cursor: pointer;\\n    width: inherit;\\n    height: 277px;\\n    object-fit: cover;\\n    object-position: 50% 80%;\\n    margin: 0;\\n    padding: 0;\\n    border-radius: 0.5rem 0.5rem 0 0;\\n}\\n\\n.post__details {\\n    margin-top: -5px;\\n    padding: 0 0.8rem;\\n    background-color: var(--black);\\n    border-radius: 0 0 0.5rem 0.5rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n.post__title {\\n    text-overflow: ellipsis;\\n    margin: 0;\\n    white-space: nowrap;\\n    overflow: hidden;\\n    margin-right: 1rem;\\n}\\n\\n.post__owner_avatar {\\n    height: 1.2rem;\\n    width: 1.2rem;\\n    color: var(--muted);\\n}\\n\\n.post__owner_link {\\n    color: var(--muted);\\n    text-decoration: none;\\n}\\n\\n// breakpoints\\n@media only screen and (max-width: 639px) {\\n\\n}\\n@media only screen and (max-width: 640px) {\\n    .nav__search_label{\\n        display: none;\\n    }\\n\\n    .nav {\\n        flex-direction: column;\\n    }\\n    .nav__search {\\n        margin: 1rem 0;\\n        width: 100%;\\n        justify-content: space-between;\\n    }\\n}\\n@media only screen and (max-width: 1024px) { }\\n@media only screen and (max-width: 1280px) { }\\n\\n@media only screen and (max-width: 1536px) { }\\n\\n// utility\\n\\n.m-0 {\\n    margin: 0;\\n}\\n\\n.mx-0 {\\n    margin-left: 0;\\n    margin-right: 0;\\n}\\n\\n.my-0 {\\n    margin-top: 0;\\n    margin-bottom: 0;\\n}\\n\\n.mr-auto {\\n    margin-right: auto;\\n}\\n\\n.flex {\\n    display:flex;\\n}\\n\\n.color-secondary {\\n    color: var(--secondary);\\n}\\n\\n.spinner {\\n    border: 3px solid var(--muted-dark); \\n    border-top: 3px solid var(--primary);\\n    border-radius: 50%;\\n    width: 14px;\\n    height: 14px;\\n    margin-right: 0.6rem;\\n    animation: spin 2s linear infinite;\\n}\\n\\n@keyframes spin {\\n0% { transform: rotate(0deg); }\\n100% { transform: rotate(360deg); }\\n}\\n\\n.modal {\\n    position: fixed;\\n    background-color: rgba(22, 24, 26, 0.9);\\n    backdrop-filter: blur(24px);\\n    -webkit-backdrop-filter: blur(24px);\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    z-index: 999;\\n    transition: all 0.3s;\\n}\\n\\n.modal__body {\\n    display:flex;\\n    justify-content: center;\\n    flex-direction: column;\\n    max-width: 90%;\\n    margin: 0 auto;\\n    height: 100vh;\\n}\\n\\n.modal__img {\\n    max-width: 100%;\\n    object-fit: contain;\\n    max-height: 90%;\\n    border-radius: 0 0 0.5rem 0.5rem;\\n    background-color: var(--black);\\n}\\n\\n.modal__header {\\n    font-size: 0.8rem;\\n    display: flex;\\n    align-items: center;\\n    padding: 0.7rem;\\n    border-radius: 0.5rem 0.5rem 0 0;\\n    justify-content: space-between;\\n    background-color: var(--black);\\n    color: var(--muted);\\n}\\n  \\n.modal__close {\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://frontend/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts */ \"./src/posts.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./src/post.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nlet page = 1;\nlet keyword = \"porsche\";\nlet isLoading = false;\nlet modal_active = false;\n\nwindow.onload = ev => {\n  init();\n}\n\nconst init = async () => {\n\n  let feed = document.getElementById('feed');\n\n  // init images \n  handleSearch();\n\n  // eventlistner scroll\n  window.addEventListener('scroll', () => {\n    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && !isLoading) {\n      handleScrollBottom();\n    }\n  });\n\n  // eventlistener searchbar btn\n  document.getElementById('nav-search-btn').addEventListener('click', handleSearch);\n\n  // eventlistener searchbar enter\n  document.getElementById('nav-search-field').addEventListener('keypress', function (e) {\n    if (e.key == \"Enter\") handleSearch();\n  });\n\n  // eventlistner posts\n  document.getElementById(\"feed\").addEventListener(\"click\", async function (e) {\n    if (e.target && e.target.nodeName == \"IMG\" && !modal_active) handlePostClick(e)\n  });\n\n  // eventlistener close post\n  document.addEventListener('keydown', function (e) {\n    if(e.key == \"Escape\") handleModalClose();\n  });\n\n}\n\nconst handleScrollBottom = async () => {\n  updateLoadingState(true);\n  page += 1;\n  let photos = await (0,_posts__WEBPACK_IMPORTED_MODULE_0__.searchFlickr)({ keyword: keyword, page: page });\n  if(photos)\n  {\n    feed.insertAdjacentHTML('beforeend', await photos.join(''));\n  } else {\n    page -= 1;\n  }\n  updateLoadingState(false);\n}\n\nconst handleSearch = async () => {\n  if (!isLoading) {\n    updateLoadingState(true);\n\n    // update global states\n    keyword = document.getElementById('nav-search-field').value;\n    page = 1;\n\n    // fetch photos\n    let photos = await (0,_posts__WEBPACK_IMPORTED_MODULE_0__.searchFlickr)({ keyword: keyword, page: page });\n    feed.replaceChildren();\n    if(photos) {\n      feed.insertAdjacentHTML('beforeend', await photos.join(''));\n    }\n\n    // update dom\n    document.getElementById('keyword').innerHTML = `:${keyword}`;\n\n    // add eventlistners for posts\n    document.getElementById(\"feed\").addEventListener(\"click\", async function (e) {\n      if (e.target && e.target.nodeName == \"IMG\" && !modal_active) handlePostClick(e)\n    });\n\n    // update loading state\n    updateLoadingState(false);\n  }\n}\n\nconst handlePostClick = async (e) => {\n\n  modal_active = true;\n\n  const id = e.target.id;\n  const photo = await (0,_post__WEBPACK_IMPORTED_MODULE_1__.getOriginalSize)({ id });\n\n  if(photo) {\n    container.insertAdjacentHTML('beforeend', photo);\n    document.getElementById('modal-close-btn').addEventListener('click', handleModalClose);\n\n  }\n\n  modal_active = false;\n}\n\nconst updateLoadingState = (isLoading) => {\n  let spinner = document.getElementById('spinner');\n  isLoading = isLoading;\n  if (isLoading) spinner.hidden = false;\n  else spinner.hidden = true;\n}\n\nconst handleModalClose = () => {\n  let modal = document.getElementById('open-modal');\n\n  if(modal) modal.remove();\n}\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/post.js":
/*!*********************!*\
  !*** ./src/post.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getOriginalSize\": () => (/* binding */ getOriginalSize)\n/* harmony export */ });\nconst getOriginalSize = async ({ id }) => {\n\n    if (id === \"\") {\n        console.log(\"Could not find post\");\n        return false;\n    }\n\n\n    const path = \"http://localhost:3000/api\";\n\n    const res = await fetch(`${path}/posts/${id}`, {\n        headers: { 'Content-Type': 'application/json' }\n    });\n\n    try {\n        const data = await res.json();\n        return post(data);\n    } catch (error) {\n        console.log(\"could not load image\");\n        return false;\n    }\n\n}\n\nconst post = (data) => {\n\n    return (\n        `<div id=\"open-modal\" class=\"modal\">\n            <div class=\"modal__body\">\n                <div class=\"modal__header\" >\n                    ${data.width} x ${data.height}\n                    <button class=\"btn\" id=\"modal-close-btn\">\n                        close\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"nav__search_btn_icon h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n                        </svg>\n                    </button>\n                </div>\n                <img class=\"modal__img\" src=\"${data.source}\">\n            </div>\n        </div>`\n    );\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/post.js?");

/***/ }),

/***/ "./src/posts.js":
/*!**********************!*\
  !*** ./src/posts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFlickr\": () => (/* binding */ searchFlickr)\n/* harmony export */ });\nconst searchFlickr = async ({ keyword, page }) => {\n\n    if (keyword === \"\") {\n        console.log(\"Cannot search for nothing\");\n        return false;\n    }\n\n    const path = \"http://localhost:3000/api\";\n\n    try {\n        const res = await fetch(`${path}/search?keyword=${keyword}&page=${page}`, {\n            headers: { 'Content-Type': 'application/json' }\n        });\n        try {\n\n            const data = await res.json();\n            const photosData = data.photos.photo;\n            const photos = photosData.map(photo => post({ ...photo }));\n            return photos;\n\n        } catch (error) {\n            console.log(\"Please try again later.\");\n            return false;\n        }\n    } catch (error) {\n        console.log(\"Could not find API\");\n    }\n\n}\n\nconst post = ({ farm, server, id, secret, title }) => {\n    const image_url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;\n    return (\n        `<div class=\"post\">\n            <button class=\"post__btn\">\n                <img class=\"post__img\" id=${id} src=\"${image_url}\" />\n            </button>\n            <div class=\"post__details\">\n            <p class=\"post__title\">${title}</p>\n            <p class=\"post__owner\">\n                <a class=\"post__owner_link\" href=\"\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6 post__owner_avatar\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z\" />\n                    </svg>\n                </a>\n            </p>\n            </div>\n        </div>`\n    );\n}\n\n//# sourceURL=webpack://frontend/./src/posts.js?");

/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;