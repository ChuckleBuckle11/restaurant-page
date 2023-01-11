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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayController.js */ \"./src/modules/displayController.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n\n\n\ninit();\n\nfunction init(){\n    (0,_modules_displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id){\n    const header = document.createElement(`header`);\n    header.setAttribute('id',id);\n    const logo = document.createElement('img');\n    logo.setAttribute('src',\"./logo.png\");\n    logo.setAttribute('alt',\"Logo\");\n    logo.setAttribute('id',\"logo\");\n\n    header.appendChild(logo)\n    return header;\n}\n\nfunction createButton(id,class_name,text) {\n    const button = document.createElement('button');\n    button.classList.add(class_name);\n    button.setAttribute('id',id);\n    button.textContent = text;\n    return button;\n}\n\nfunction createNav(id){\n    const nav = document.createElement('nav');\n    nav.setAttribute('id',id);\n\n    const homeBtn = createButton('Home','nav-button','Home');\n    const menuBtn = createButton('Menu','nav-button','Menu');\n    const contactBtn = createButton('Contact','nav-button','Contact');\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    return nav;\n}\n\n\n// creates the Main section of the page\nfunction createMain(id){\n    const main = document.createElement('main');\n    main.id = id;\n    return main;\n}\n\n//creates footer\nfunction createFooter(id){\n    const footer = document.createElement('footer');\n    footer.id = id;\n    return footer;\n}\n\n\n\n\n\n\nfunction loadPage(){\n    const content = document.getElementById(`content`);\n    // creates header\n    const header = createHeader('header');\n    content.appendChild(header);\n\n    // creates nav\n    const nav = createNav('nav');\n    header.appendChild(nav);\n\n    //creates main\n    const main = createMain('main');\n    content.appendChild(main);\n\n    //creates footer\n    const footer = createFooter('footer');\n    content.appendChild(footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/displayController.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHomeScreen(){\n    const main = document.getElementById('main');\n    const home = document.createElement('home');\n    home.id = \"home\";\n    main.appendChild(home);\n}\n\nfunction createImage(){\n    const home = document.getElementById('home');\n\n    //creates image\n    const image = document.createElement('img');\n    image.classList.add('image');\n    image.setAttribute('id','main-image');\n    image.setAttribute('src','./putanesca-12.jpg')\n\n    home.appendChild(image);\n}\n\nfunction createHomeText(){\n    const home = document.getElementById('home');\n    \n    const textContainer = document.createElement('div');\n    textContainer.id = \"homeContainer\";\n\n    const containerHeading = document.createElement('h1');\n    containerHeading.id = \"homeContainerHeading\";\n    containerHeading.textContent = \"A Haven For Italian Cuisine\";\n\n    const containerText = document.createElement('div');\n    containerText.id = \"homeContainerText\";\n    containerText.innerHTML = \"Since opening its doors in 2004, Casmari is famously known for bringing uniquely rustic Italian cuisine to the tables. Fresh ingredients used with our characteristic recipes from starters, salads, meat dishes and desserts is the bridge between our savoury food and the satisfying smile of our guests. <br> <br>To give you the best of tastes, Casamari signature sauces and bread dough are made fresh every morning. Our chefs bold and adventurous flavours provide new excitement and modern twist to classic Italian staple food of pasta, pizza and vino.\";\n\n    textContainer.appendChild(containerHeading);\n    textContainer.appendChild(containerText);\n\n    home.appendChild(textContainer);\n}\n\n\nfunction loadHome(){\n    createHomeScreen();\n    createImage();\n    createHomeText();\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;