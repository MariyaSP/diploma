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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('benefits', '.benefits__item', '.benefits__arrow', 2);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const headerModal = document.querySelector('.header-modal');\r\n    const btnModal = document.querySelector('.button');\r\n    const overlay = document.querySelector('.overlay');\r\n    \r\n\r\n    btnModal.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        headerModal.style.display = 'block';\r\n        overlay.style.display = 'block';\r\n    })\r\n\r\n    headerModal.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('header-modal__close')){\r\n            headerModal.style.display = 'none';\r\n            overlay.style.display = 'none';\r\n        }\r\n        \r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);;\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sectionId, sliderItems, arrow, flag) => {\r\n    const sectionSlider = document.getElementById(sectionId);\r\n    const sliderBlockItems = sectionSlider.querySelectorAll(sliderItems);\r\n    const oldFlag = flag;\r\n\r\n    let sizeWin = document.documentElement.clientWidth;\r\n    let currentSlide = 0;\r\n\r\n    const start = (sizeWin) => {\r\n        if (sizeWin < 576) {\r\n            flag = 0;\r\n        } else {\r\n            flag = oldFlag;\r\n        }\r\n        render(currentSlide);\r\n    }\r\n\r\n    window.addEventListener('resize', () => {\r\n        sizeWin = document.documentElement.clientWidth;\r\n        start(sizeWin);\r\n    })\r\n\r\n    if (!sectionSlider || !sliderBlockItems) {\r\n        return;\r\n    }\r\n\r\n    const render = (currentItem) => {\r\n        sliderBlockItems.forEach((item, index) => {\r\n\r\n            if (index > (currentItem + flag) || index < currentItem) {\r\n                {\r\n                    item.style.display = 'none';\r\n\r\n                }\r\n            } else {\r\n                item.style.display = 'block';\r\n                if (!flag)\r\n                    item.style.maxWidth = sizeWin + 'px';\r\n            }\r\n        })\r\n    }\r\n\r\n    sectionSlider.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.closest(arrow)) {\r\n            return;\r\n        }\r\n\r\n        if (e.target.closest(arrow + '--right')) {\r\n            currentSlide++;\r\n\r\n        }\r\n        else if (e.target.closest(arrow + '--left')) {\r\n            currentSlide--;\r\n        }\r\n\r\n        if (currentSlide >= sliderBlockItems.length - flag) {\r\n\r\n            if (!flag)\r\n                currentSlide = flag;\r\n            else\r\n                currentSlide = flag + 1;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        render(currentSlide);\r\n\r\n\r\n    })\r\n\r\n    start(sizeWin);\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;