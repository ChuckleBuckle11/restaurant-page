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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayController.js */ \"./src/modules/displayController.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact\");\n\n\n\n\n\ninit();\n\nfunction init(){\n    (0,_modules_displayController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    addNavFunctions();\n}\n\n\nfunction addNavFunctions(){\n    const homeButton = document.getElementById(\"Home\")\n    const menuButton = document.getElementById(\"Menu\")\n    const contactButton = document.getElementById(\"Contact\")\n\n\n    homeButton.addEventListener('click', _modules_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    menuButton.addEventListener('click', _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    contactButton.addEventListener('click', _modules_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact":
/*!*****************************!*\
  !*** ./src/modules/contact ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setActiveButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setActiveButton */ \"./src/modules/setActiveButton.js\");\n\n// api key AIzaSyBQyYKaElXAWsPH2vtr0vSWSlyuRI1egDs\n\n\nfunction loadContacts(){\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createContacts());\n    (0,_setActiveButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Contact');\n}\n\nfunction createContacts(){\n    // creates Contact div\n    const contact = document.createElement('div');\n    contact.classList.add(\"contact\");\n    const contactContainer = document.createElement('div');\n    contactContainer.id = \"contact-container\";\n\n    //creates Google map embed\n    const googleEmbed = document.createElement('div');\n    googleEmbed.id = 'map';\n\n    const contactDetails = document.createElement('div');\n    contactDetails.id = 'contact-details';\n\n    const title = document.createElement(`div`);\n    title.textContent = \"Casamari Italian Restaurant\";\n    title.id = \"contact-title\";\n\n    const address = document.createElement('address');\n    address.innerHTML = \"Lot A-0G-01, Block A, No. 2, Jalan Kiara<br>\"+\n    \"Plaza Mont Kiara<br>\"+ \n    \"50480 Kuala Lumpur.\";\n    address.id = \"contact-address\";\n\n\n\n    // container for phoneNumber and svg\n    const phoneContainer = document.createElement('div');\n    phoneContainer.classList.add(\"phone-container\");\n    const phoneSVG = document.createElement('img');\n    phoneSVG.src = \"./img/phone.svg\";\n    const phoneNumber = document.createElement('div');\n    phoneNumber.textContent = \": 01-2345 6789\";\n    phoneNumber.id = \"contact-phoneNumber\";\n\n    phoneContainer.appendChild(phoneSVG);\n    phoneContainer.appendChild((phoneNumber))\n\n    // container for email\n    const emailContainer = document.createElement('div');\n    emailContainer.classList.add('email-container');\n    const emailSVG = document.createElement('img');\n    emailSVG.src = \"./img/mail.svg\";\n    const email = document.createElement('address');\n    email.textContent = `: casamari@gmail.com`;\n    email.id = \"contact-email\";\n\n    emailContainer.appendChild(emailSVG);\n    emailContainer.appendChild(email);\n\n    contactDetails.appendChild(title);\n    contactDetails.appendChild(address);\n    contactDetails.appendChild(phoneContainer);\n    contactDetails.appendChild(emailContainer);\n\n    contactContainer.appendChild(googleEmbed);\n    contactContainer.appendChild(contactDetails);\n    \n    \n    contact.appendChild(contactContainer);\n\n\n  // GOOGLE EMBED\n  // Create the script tag, set the appropriate attributes\n  var script = document.createElement('script');\n  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQyYKaElXAWsPH2vtr0vSWSlyuRI1egDs&callback=initMap';\n  script.async = true;\n  let map;\n  // Attach your callback function to the `window` object\n  window.initMap = function () {\n    // JS API is loaded and available\n    map = new google.maps.Map(document.getElementById(\"map\"), {\n      center: { lat: 3.165852409287279, lng: 101.65196843832469 },\n      zoom: 15,\n    });\n\n    const marker = new google.maps.Marker({\n      position: { lat: 3.165852409287279, lng: 101.65196843832469 },\n      map: map,\n      title: \"Casamari\",\n    });\n    marker.setTitle('new title');\n  };\n\n  // Append the 'script' element to 'head'\n  document.head.appendChild(script);\n  return contact;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContacts);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact?");

/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id){\n    const header = document.createElement(`header`);\n    header.setAttribute('id',id);\n    const logo = document.createElement('img');\n    logo.setAttribute('src',\"./img/logo.png\");\n    logo.setAttribute('alt',\"Logo\");\n    logo.setAttribute('id',\"logo\");\n\n    header.appendChild(logo)\n    return header;\n}\n\nfunction createButton(id,class_name,text) {\n    const button = document.createElement('button');\n    button.classList.add(class_name);\n    button.setAttribute('id',id);\n    button.textContent = text;\n    return button;\n}\n\nfunction createNav(id){\n    const nav = document.createElement('nav');\n    nav.setAttribute('id',id);\n\n    const homeBtn = createButton('Home','nav-button','Home');\n    const menuBtn = createButton('Menu','nav-button','Menu');\n    const contactBtn = createButton('Contact','nav-button','Contact');\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    return nav;\n}\n\n\n// creates the Main section of the page\nfunction createMain(id){\n    const main = document.createElement('main');\n    main.id = id;\n    return main;\n}\n\n//creates footer\nfunction createFooter(id){\n    const footer = document.createElement('footer');\n    footer.id = id;\n\n\n    const footerLeft = document.createElement('div');\n    footerLeft.id = \"footerLeft\";\n\n    const footerText = document.createElement('div');\n    footerText.textContent = \"Copyrights © 2022 All Rights Reserved by Casamari.\";\n\n    const footerLink = document.createElement('a');\n    footerLink.text = \"Privacy Policy\";\n\n    footerLeft.appendChild(footerText);\n    footerLeft.appendChild(footerLink);\n\n    const footerRight = document.createElement('div');\n    footerRight.id = 'footerRight';\n    const facebookSVG = document.createElement('img');\n    facebookSVG.setAttribute('src','./img/facebook.svg');\n    facebookSVG.classList.add('svg');\n    const instagramSVG = document.createElement('img');\n    instagramSVG.setAttribute('src','./img/instagram.svg');\n    instagramSVG.classList.add('svg');\n    footerRight.appendChild(facebookSVG);\n    footerRight.appendChild(instagramSVG);\n\n    footer.appendChild(footerLeft);\n    footer.appendChild(footerRight);\n    return footer;\n}\n\n\nfunction loadPage(){\n    const content = document.getElementById(`content`);\n    // creates header\n    const header = createHeader('header');\n    content.appendChild(header);\n\n    // creates nav\n    const nav = createNav('nav');\n    header.appendChild(nav);\n\n    //creates main\n    const main = createMain('main');\n    content.appendChild(main);\n\n    //creates footer\n    const footer = createFooter('footer');\n    content.appendChild(footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/displayController.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setActiveButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setActiveButton */ \"./src/modules/setActiveButton.js\");\n\n\nfunction createHomeScreen(){\n    const main = document.getElementById('main');\n    main.textContent = \"\";\n    const home = document.createElement('home');\n    home.id = \"home\";\n    main.appendChild(home);\n}\n\nfunction createImage(){\n    const home = document.getElementById('home');\n    const imgContainer = document.createElement(`div`);\n    imgContainer.classList.add('image-container');\n\n    //creates image\n    const image = document.createElement('img');\n    image.classList.add('image');\n    image.setAttribute('id','main-image');\n    image.setAttribute('src','./img/putanesca-12.jpg');\n\n    imgContainer.appendChild(image);\n    home.appendChild(imgContainer);\n}\n\nfunction createHomeText(){\n    const home = document.getElementById('home');\n    \n    const textContainer = document.createElement('div');\n    textContainer.id = \"homeContainer\";\n\n    const containerHeading = document.createElement('h1');\n    containerHeading.id = \"homeContainerHeading\";\n    containerHeading.textContent = \"A Haven For Italian Cuisine\";\n\n    const containerText = document.createElement('div');\n    containerText.id = \"homeContainerText\";\n    containerText.innerHTML = \"Since opening its doors in 2004, Casmari is famously known for bringing uniquely rustic Italian cuisine to the tables. Fresh ingredients used with our characteristic recipes from starters, salads, meat dishes and desserts is the bridge between our savoury food and the satisfying smile of our guests. <br> <br>To give you the best of tastes, Casamari signature sauces and bread dough are made fresh every morning. Our chefs bold and adventurous flavours provide new excitement and modern twist to classic Italian staple food of pasta, pizza and vino.\";\n\n    textContainer.appendChild(containerHeading);\n    textContainer.appendChild(containerText);\n\n    home.appendChild(textContainer);\n}\n\n\nfunction loadHome(){\n    createHomeScreen();\n    createImage();\n    createHomeText();\n\n    (0,_setActiveButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Home');\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setActiveButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setActiveButton */ \"./src/modules/setActiveButton.js\");\n\n\n\nfunction loadMenu(){\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n    (0,_setActiveButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Menu');\n}\n\n\nfunction createMenu(){\n    // creates Menu div\n    const menu  = document.createElement('div');\n    menu.classList.add(\"menu\");\n\n    menu.appendChild\n    (createMenuItem(\n        \"Carbonara\",\n        \"Cream | Parmesan | Bacon | Italian Herbs\"\n    ));\n    menu.appendChild\n    (createMenuItem(\n        \"Risottocacio Pepee Oro\",\n        \"Carnaroli Rice | Pecorino and Pepper | Gold Dust\"\n    ));\n    menu.appendChild\n    (createMenuItem(\n        \"Risotto Porcini\",\n        \"CarnaroliRice | Porcini Mushrooms | Parmesan Cream\"\n    ));\n    menu.appendChild\n    (createMenuItem(\n        \"Pappardelle All'Anatra\",\n        \"Duck Ragu | Spring Mushrooms | Smoked Scamorza Cream\"\n    ));\n    \n    return menu;\n\n}\n\nfunction createMenuItem(name, description){\n    //creates each Menu Item, appending the food name, description, and image\n    // Image names should match food names\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menu-item');\n    \n    const foodName = document.createElement('h2');\n    foodName.classList.add('food-name')\n    foodName.textContent = name;\n\n    const foodDescription = document.createElement('p');\n    foodDescription.classList.add('food-description')\n    foodDescription.textContent = description;\n\n    const foodImageContainer = document.createElement('div');\n    foodImageContainer.classList.add('image-container');\n    const foodImage = document.createElement('img');\n    foodImage.classList.add('food-image')\n    foodImage.src = `./img/${name.toLowerCase()}.jpg`;\n\n    foodImageContainer.appendChild(foodImage);\n\n    menuItem.appendChild(foodImageContainer);\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDescription);\n\n    return menuItem;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/setActiveButton.js":
/*!****************************************!*\
  !*** ./src/modules/setActiveButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setActiveButton(button){\n\n    // selects all the nav-buttons\n    const buttons = document.querySelectorAll('.nav-button');\n\n    // Enables all buttons \n    buttons.forEach((button)=> {\n        button.disabled = false;\n    });\n\n    // Disables the button for the current page\n    const activebutton = document.getElementById(button);\n    activebutton.disabled = true;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setActiveButton);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/setActiveButton.js?");

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