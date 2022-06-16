(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (() => {

function createHome(){
    const title = document.createElement('div');
    title.textContent = "Le Good Restaurant"

    const restaurant_div = document.createElement('div');
    const restaurant_img = document.createElement('img');
    restaurant_img.src = "../img/hall.jpg";
    restaurant_img.style.height = "200px"
    restaurant_div.appendChild(restaurant_img);

    const description = document.createElement('div');
    description.textContent = "Restaurant Description";

    CONTENT.appendChild(title);
    CONTENT.appendChild(restaurant_div);
    CONTENT.appendChild(description);

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ "./src/initialize.js");

console.log('HeRE')
// Initializes page
;(0,_initialize__WEBPACK_IMPORTED_MODULE_0__["default"])();




/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home__WEBPACK_IMPORTED_MODULE_0__);




function initializeWebsite() {

  const content = document.getElementById("content");

  content.appendChild(createHeader());
  // content.appendChild(createMain());
  // content.appendChild(createFooter());

  // loadHome();
}



// Creates the header
function createHeader() {
  const CONTENT = document.getElementById("content");
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Restaurant Name"

  header.appendChild(restaurantName);
  header.appendChild(createNav());
  

  return header;
}
// Creates the Nav section
function createNav(){
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
  homeButton.textContent = "Home";

  // homeButton.addEventListener("click", (e)=>{
  //   if (e.target.classList.contains("active")) return;
  //   setActiveButton(homeButton);
  //   loadHome();
  // })

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.textContent = "Menu";
  
  // menuButton.addEventListener("click", (e)=>{
  //   if (e.target.classList.contains("active")) return;
  //   setActiveButton(menuButton);
  //   loadMenu();
  // })
  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.textContent = "Contact";
  
  // contactButton.addEventListener("click", (e)=>{
  //   if (e.target.classList.contains("active")) return;
  //   setActiveButton(contactButton);
  //   loadMenu();
  // })
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createMain(){
  const main = document.createElement('div');
  main.classList.add('main');

  return main;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNqQjZDO0FBQzdDO0FBQ0E7QUFDQSx3REFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGE7Ozs7QUFJOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpRUFBZSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxpemUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkxlIEdvb2QgUmVzdGF1cmFudFwiXG5cbiAgICBjb25zdCByZXN0YXVyYW50X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcmVzdGF1cmFudF9pbWcuc3JjID0gXCIuLi9pbWcvaGFsbC5qcGdcIjtcbiAgICByZXN0YXVyYW50X2ltZy5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCJcbiAgICByZXN0YXVyYW50X2Rpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50X2ltZyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50IERlc2NyaXB0aW9uXCI7XG5cbiAgICBDT05URU5ULmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBDT05URU5ULmFwcGVuZENoaWxkKHJlc3RhdXJhbnRfZGl2KTtcbiAgICBDT05URU5ULmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxufSIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi9pbml0aWFsaXplXCI7XG5jb25zb2xlLmxvZygnSGVSRScpXG4vLyBJbml0aWFsaXplcyBwYWdlXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuXG5cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5cblxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAvLyBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIC8vIGxvYWRIb21lKCk7XG59XG5cblxuXG4vLyBDcmVhdGVzIHRoZSBoZWFkZXJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgQ09OVEVOVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50IE5hbWVcIlxuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIFxuXG4gIHJldHVybiBoZWFkZXI7XG59XG4vLyBDcmVhdGVzIHRoZSBOYXYgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgLy8gaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gIC8vICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAvLyAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnV0dG9uKTtcbiAgLy8gICBsb2FkSG9tZSgpO1xuICAvLyB9KVxuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIFxuICAvLyBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgLy8gICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gIC8vICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAvLyAgIGxvYWRNZW51KCk7XG4gIC8vIH0pXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIFxuICAvLyBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgLy8gICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gIC8vICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAvLyAgIGxvYWRNZW51KCk7XG4gIC8vIH0pXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==