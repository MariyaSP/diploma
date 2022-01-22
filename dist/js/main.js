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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculate */ \"./modules/calculate.js\");\n/* harmony import */ var _modules_certificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/certificate */ \"./modules/certificate.js\");\n/* harmony import */ var _modules_smoo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/smoo */ \"./modules/smoo\");\n\r\n\r\n// import services from \"./modules/services\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('benefits', '.benefits__item', '.benefits__arrow', 2);\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('services', '.col-md-12', '.services__arrow', 1);\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.service-button', 'services-modal');\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.button', 'header-modal');\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('26 january 2022');\r\n\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_certificate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_smoo__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculate.js":
/*!******************************!*\
  !*** ./modules/calculate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculate = () => {\r\n\r\n    const pageBody = document.querySelector('body');\r\n\r\n    const validate = (obj, material, square) => {\r\n        const calcTotal = document.getElementById('calc-total');\r\n\r\n        if (obj.value !== '--' && material.value !== '--' && square.value !== '') {\r\n\r\n            calcTotal.value = ((obj.value * material.value * square.value).toFixed(1));\r\n            localStorage.calcTotal = calcTotal.value\r\n\r\n        }\r\n        else {\r\n            calcTotal.value = '';\r\n            localStorage.calcTotal = '';\r\n            return false;\r\n\r\n        }\r\n\r\n    }\r\n\r\n    if (pageBody.classList.contains('balkony')) {\r\n        const selectObj = document.getElementById('calc-type');\r\n        const objMaterial = document.getElementById('calc-type-material');\r\n        const calcInput = document.getElementById('calc-input');\r\n\r\n        selectObj.addEventListener('change', () => {\r\n            validate(selectObj, objMaterial, calcInput)\r\n        });\r\n\r\n\r\n        objMaterial.addEventListener('change', () => {\r\n            validate(selectObj, objMaterial, calcInput)\r\n        });\r\n\r\n        calcInput.addEventListener('input', () => {\r\n            calcInput.value = calcInput.value.replace(/[^0-9]/g, '');\r\n            validate(selectObj, objMaterial, calcInput);\r\n        }\r\n        );\r\n\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);\n\n//# sourceURL=webpack:///./modules/calculate.js?");

/***/ }),

/***/ "./modules/certificate.js":
/*!********************************!*\
  !*** ./modules/certificate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showCerfificate = () => {\r\n\r\n\r\n    const certificates = document.querySelector('#documents');\r\n    console.log(certificates);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCerfificate);\n\n//# sourceURL=webpack:///./modules/certificate.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = (btnModalClass, windowModalClass) => {\r\n\r\n    const btnModal = document.querySelectorAll(btnModalClass);\r\n    const windowModal = document.querySelector('.' + windowModalClass);\r\n    const overlay = document.querySelector('.overlay');\r\n\r\n    const visible = (elem, visyStyle) => {\r\n        elem.classList.toggle(visyStyle);\r\n    }\r\n\r\n    btnModal.forEach(item => {\r\n\r\n        item.addEventListener('click', (e) => {\r\n\r\n            e.preventDefault();\r\n            visible(windowModal, windowModalClass);\r\n            overlay.style.display = 'block';\r\n        })\r\n\r\n    })\r\n\r\n    windowModal.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains(windowModalClass+'__close')) {\r\n            visible(windowModal, windowModalClass);\r\n            overlay.style.display = 'none';\r\n        }\r\n\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst discontForm = () => {\r\n    const forms = document.querySelectorAll('.form-horizontal');\r\n    const statusBlock = document.createElement('div');\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n        list.forEach(inp => {\r\n            let reg;\r\n\r\n            let str = '';\r\n\r\n            str = (inp.value).trim();\r\n            switch (inp.name) {\r\n\r\n                case 'phone':\r\n                    reg = /^[\\+\\d()]/g;               //формат телефона 8 (999) 123-45-64\r\n                    if (!reg.test(inp.value) || str.length > 17) {\r\n                        inp.classList.add('error');\r\n                        success = false;\r\n                    }\r\n\r\n                    break;\r\n\r\n                case 'fio':\r\n                    reg = /^[а-яА-Яa-zA-Z ]/g;\r\n                    if (!reg.test(inp.value) || str.length < 2) {\r\n                        inp.classList.add('error');\r\n                        success = false;\r\n                    }\r\n\r\n                    break;\r\n\r\n            }\r\n\r\n        })\r\n\r\n\r\n        return success;\r\n    }\r\n\r\n    const validateInput = (e) => {\r\n\r\n        let nameInp = e.target.name;\r\n        switch (nameInp) {\r\n            case 'fio':\r\n                e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z ]/g, '');\r\n                break;\r\n            case 'phone':\r\n\r\n                e.target.value = e.target.value.replace(/[^\\+0-9]/, '');\r\n                break;\r\n\r\n        }\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n\r\n    const sending = (inputs, form, formElements) => {\r\n\r\n        let formBody = {};\r\n        const formData = new FormData(form);\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        })\r\n\r\n        formBody.calcTotal = localStorage.calcTotal;\r\n\r\n        console.log(formBody);\r\n\r\n        if (validate(inputs)) {\r\n\r\n            sendData(formBody)\r\n                .then(data => {\r\n\r\n                    formElements.forEach(input => {\r\n\r\n                        if (input.type != 'hidden')\r\n                            input.value = '';\r\n                    });\r\n                    statusBlock.textContent = \"заявка отправлена\";\r\n                    const message = form.querySelector('.order-form-button');\r\n                    message.before(statusBlock);\r\n\r\n                    setTimeout(() => {\r\n                        statusBlock.textContent = '';\r\n                    }, 5000);\r\n                })\r\n                .catch(error => {\r\n                    console.log('Ошибка');\r\n\r\n                });\r\n\r\n        }\r\n    }\r\n\r\n    forms.forEach((form) => {\r\n\r\n\r\n        const inputs = form.querySelectorAll('input');\r\n        const btnForm = form.querySelector('button');\r\n\r\n\r\n\r\n        inputs.forEach((item) => {\r\n            item.addEventListener('input', (e) => {\r\n                item.classList.remove('error');\r\n                validateInput(e);\r\n            });\r\n        })\r\n\r\n\r\n\r\n        btnForm.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n\r\n            sending(inputs, form, inputs);\r\n        });\r\n\r\n\r\n\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (discontForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sectionId, sliderItems, arrow, flag) => {\r\n    const sectionSlider = document.getElementById(sectionId);\r\n    const sliderBlockItems = sectionSlider.querySelectorAll(sliderItems);\r\n    const oldFlag = flag;\r\n\r\n    let sizeWin = document.documentElement.clientWidth;\r\n    let currentSlide = 0;\r\n\r\n    const start = (sizeWin) => {\r\n        if (sizeWin < 576) {\r\n            flag = 0;\r\n        } else {\r\n            flag = oldFlag;\r\n        }\r\n        render(currentSlide);\r\n    }\r\n\r\n    window.addEventListener('resize', () => {\r\n        sizeWin = document.documentElement.clientWidth;\r\n        start(sizeWin);\r\n    })\r\n\r\n    if (!sectionSlider || !sliderBlockItems) {\r\n        return;\r\n    }\r\n\r\n    const render = (currentItem) => {\r\n\r\n        sliderBlockItems.forEach((item, index) => {\r\n            if (index > (currentItem + flag) || index < currentItem) {\r\n\r\n                item.classList.add('item__display');\r\n            } else {\r\n                item.classList.remove('item__display');\r\n                \r\n                if (!flag)\r\n                    item.style.maxWidth = sizeWin + 'px';\r\n            }\r\n        })\r\n    }\r\n\r\n    sectionSlider.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.closest(arrow)) {\r\n            return;\r\n        }\r\n\r\n        if (e.target.closest(arrow + '--right')) {\r\n            currentSlide += flag + 1;\r\n        }\r\n        else if (e.target.closest(arrow + '--left')) {\r\n            currentSlide -= flag + 1;\r\n        }\r\n\r\n        if (currentSlide >= sliderBlockItems.length) {\r\n            if (flag)\r\n                currentSlide = 0;\r\n            else\r\n                currentSlide = flag + 1;\r\n        }\r\n        if (currentSlide < 0) {\r\n\r\n            if (flag) {\r\n                currentSlide = sliderBlockItems.length - (flag + 1);\r\n            }\r\n            else\r\n                currentSlide = sliderBlockItems.length - 1;\r\n        }\r\n\r\n        render(currentSlide);\r\n\r\n\r\n    })\r\n\r\n    start(sizeWin);\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/smoo":
/*!**********************!*\
  !*** ./modules/smoo ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollSmooth = () => {\r\n    const upButton = document.querySelector('.smooth-scroll');\r\n    const benefits = document.querySelector('#benefits');\r\n\r\n    upButton.style.display = 'none';\r\n\r\n    document.addEventListener('scroll', () => {\r\n\r\n        if (window.scrollY >= benefits.offsetTop) {\r\n            upButton.style.display = 'block';\r\n\r\n        } else {\r\n            upButton.style.display = 'none';\r\n        }\r\n\r\n    })\r\n\r\n    upButton.addEventListener('click', () => {\r\n        window.scrollTo({\r\n            behavior: 'smooth',\r\n            top: 0\r\n        })\r\n    })\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollSmooth);\n\n//# sourceURL=webpack:///./modules/smoo?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (dadline) => {\r\n\r\n    const counter = document.querySelectorAll('.count');\r\n\r\n\r\n    const getTimeRemaining = () => {\r\n\r\n        let dateStop = new Date(dadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds,\r\n            timeRemaining\r\n        }\r\n    }\r\n    const zeroPlus = (number) => {\r\n        return number < 10 ? '0' + number : number;\r\n    }\r\n\r\n    const updateClock = () => {\r\n\r\n        let gettime = getTimeRemaining();\r\n        if (gettime.timeRemaining > 0) {\r\n\r\n            counter.forEach((item, index) => {\r\n\r\n                if (index === 0 || index === 4) {\r\n                    item.querySelector('span').textContent = zeroPlus(gettime.days);\r\n                } else if (index === 1 || index === 5) {\r\n                    item.querySelector('span').textContent = zeroPlus(gettime.hours);\r\n                } else if (index === 2 || index === 6) {\r\n                    item.querySelector('span').textContent = zeroPlus(gettime.minutes);\r\n                } else {\r\n                    item.querySelector('span').textContent = zeroPlus(gettime.seconds);\r\n                }\r\n            })\r\n\r\n        }\r\n        else {\r\n            clearInterval(jTime);\r\n\r\n            counter.forEach((item) => {\r\n                item.querySelector('span').textContent = '00';\r\n            })\r\n        }\r\n    }\r\n    let jTime = setInterval(updateClock, 1000);\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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