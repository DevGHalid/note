(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./assets/components/App.js");
// any CSS you import will output into a single css file (app.css in this case)





react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/components/App.js":
/*!**********************************!*\
  !*** ./assets/components/App.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./assets/components/Navbar.js");
/* harmony import */ var _pages_sheet_SheetList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/sheet/SheetList */ "./assets/pages/sheet/SheetList.js");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex h-full pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-2/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-10/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/sheet",
    component: _pages_sheet_SheetList__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/sheet"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./assets/components/Navbar.js":
/*!*************************************!*\
  !*** ./assets/components/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _icons_SearchIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/SearchIcon */ "./assets/icons/SearchIcon.js");
/* harmony import */ var _icons_SettingIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/SettingIcon */ "./assets/icons/SettingIcon.js");
/* harmony import */ var _icons_CollectionIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/CollectionIcon */ "./assets/icons/CollectionIcon.js");
/* harmony import */ var _icons_StarIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/StarIcon */ "./assets/icons/StarIcon.js");
/* harmony import */ var _icons_TagIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/TagIcon */ "./assets/icons/TagIcon.js");
/* harmony import */ var _icons_TrashIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/TrashIcon */ "./assets/icons/TrashIcon.js");
/* harmony import */ var _icons_LogoutIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/LogoutIcon */ "./assets/icons/LogoutIcon.js");










function NavItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: props.to || '',
    className: "flex pl-4 cursor-pointer py-1 hover:bg-gray-300",
    activeClassName: "bg-gray-300"
  }, props.children);
}

function NavText(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs text-gray-700"
  }, props.children);
}

function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
    to: "/search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-4 mr-2 text-gray-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavText, null, "\u0411\u044B\u0441\u044B\u0439 \u043F\u043E\u0438\u0441\u043A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
    to: "setting"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_SettingIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-4 mr-2 text-gray-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavText, {
    className: "text-xs text-gray-700"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
    to: "/sheet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_CollectionIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "w-4 mr-2 text-gray-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavText, null, "\u041B\u0438\u0441\u0442")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
    to: "/star"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_StarIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "w-4 mr-2 text-gray-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavText, null, "\u041F\u043E\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
    to: "/tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_TagIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "w-4 mr-2 text-gray-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavText, null, "\u0422\u0435\u0433\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
    to: "/trash"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_TrashIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "w-4 mr-2 text-gray-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavText, null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex pl-4 cursor-pointer py-1 hover:bg-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_LogoutIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "w-4 mr-2 text-gray-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavText, null, "\u0412\u044B\u0439\u0442\u0438")));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./assets/icons/CollectionIcon.js":
/*!****************************************!*\
  !*** ./assets/icons/CollectionIcon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function CollectionIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionIcon);

/***/ }),

/***/ "./assets/icons/LogoutIcon.js":
/*!************************************!*\
  !*** ./assets/icons/LogoutIcon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function LogoutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LogoutIcon);

/***/ }),

/***/ "./assets/icons/SearchIcon.js":
/*!************************************!*\
  !*** ./assets/icons/SearchIcon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchIcon);

/***/ }),

/***/ "./assets/icons/SettingIcon.js":
/*!*************************************!*\
  !*** ./assets/icons/SettingIcon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SettingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SettingIcon);

/***/ }),

/***/ "./assets/icons/StarIcon.js":
/*!**********************************!*\
  !*** ./assets/icons/StarIcon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function StarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StarIcon);

/***/ }),

/***/ "./assets/icons/TagIcon.js":
/*!*********************************!*\
  !*** ./assets/icons/TagIcon.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function TagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TagIcon);

/***/ }),

/***/ "./assets/icons/TrashIcon.js":
/*!***********************************!*\
  !*** ./assets/icons/TrashIcon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function TrashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrashIcon);

/***/ }),

/***/ "./assets/pages/sheet/SheetList.js":
/*!*****************************************!*\
  !*** ./assets/pages/sheet/SheetList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SheetList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Sheet list");
}

/* harmony default export */ __webpack_exports__["default"] = (SheetList);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb25zL0NvbGxlY3Rpb25JY29uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29ucy9Mb2dvdXRJY29uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29ucy9TZWFyY2hJY29uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29ucy9TZXR0aW5nSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbnMvU3Rhckljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb25zL1RhZ0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb25zL1RyYXNoSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvc2hlZXQvU2hlZXRMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBcHAiLCJTaGVldExpc3QiLCJOYXZJdGVtIiwicHJvcHMiLCJ0byIsImNoaWxkcmVuIiwiTmF2VGV4dCIsIk5hdmJhciIsIkNvbGxlY3Rpb25JY29uIiwiTG9nb3V0SWNvbiIsIlNlYXJjaEljb24iLCJTZXR0aW5nSWNvbiIsIlN0YXJJY29uIiwiVGFnSWNvbiIsIlRyYXNoSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxnREFBUSxDQUFDQyxNQUFULGVBQ0UsMkRBQUMsOERBQUQscUJBQ0UsMkRBQUMsdURBQUQsT0FERixDQURGLEVB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LE1BRlA7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFVBQU0sRUFBQztBQUpULEtBS01BLEtBTE4sZ0JBT0U7QUFDRSxpQkFBYSxFQUFDLE9BRGhCO0FBRUUsa0JBQWMsRUFBQyxPQUZqQjtBQUdFLGVBQVcsRUFBRSxDQUhmO0FBSUUsS0FBQyxFQUFDO0FBSkosSUFQRixDQURGO0FBZ0JEOztBQUVjVyx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU2IsU0FBVCxHQUFxQjtBQUNuQixzQkFBTyxxRkFBUDtBQUNEOztBQUVjQSx3RUFBZixFOzs7Ozs7Ozs7OztBQ05BLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPEFwcCAvPlxuICA8L0Jyb3dzZXJSb3V0ZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgU2hlZXRMaXN0IGZyb20gJy4uL3BhZ2VzL3NoZWV0L1NoZWV0TGlzdCc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIHB0LTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzEyXCI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyXCI+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NoZWV0XCIgY29tcG9uZW50PXtTaGVldExpc3R9IC8+XG4gICAgICAgIDxSZWRpcmVjdCB0bz1cIi9zaGVldFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJy4uL2ljb25zL1NlYXJjaEljb24nO1xuaW1wb3J0IFNldHRpbmdJY29uIGZyb20gJy4uL2ljb25zL1NldHRpbmdJY29uJztcbmltcG9ydCBDb2xsZWN0aW9uSWNvbiBmcm9tICcuLi9pY29ucy9Db2xsZWN0aW9uSWNvbic7XG5pbXBvcnQgU3Rhckljb24gZnJvbSAnLi4vaWNvbnMvU3Rhckljb24nO1xuaW1wb3J0IFRhZ0ljb24gZnJvbSAnLi4vaWNvbnMvVGFnSWNvbic7XG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4uL2ljb25zL1RyYXNoSWNvbic7XG5pbXBvcnQgTG9nb3V0SWNvbiBmcm9tICcuLi9pY29ucy9Mb2dvdXRJY29uJztcblxuZnVuY3Rpb24gTmF2SXRlbShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxOYXZMaW5rXG4gICAgICB0bz17cHJvcHMudG8gfHwgJyd9XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IHBsLTQgY3Vyc29yLXBvaW50ZXIgcHktMSBob3ZlcjpiZy1ncmF5LTMwMFwiXG4gICAgICBhY3RpdmVDbGFzc05hbWU9XCJiZy1ncmF5LTMwMFwiXG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvTmF2TGluaz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTmF2VGV4dChwcm9wcykge1xuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwXCI+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG59XG5cbmZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkl0ZW0gdG89XCIvc2VhcmNoXCI+XG4gICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cInctNCBtci0yIHRleHQtZ3JheS03MDBcIiAvPlxuICAgICAgICA8TmF2VGV4dD7QkdGL0YHRi9C5INC/0L7QuNGB0Lo8L05hdlRleHQ+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICA8TmF2SXRlbSB0bz1cInNldHRpbmdcIj5cbiAgICAgICAgPFNldHRpbmdJY29uIGNsYXNzTmFtZT1cInctNCBtci0yIHRleHQtZ3JheS03MDBcIiAvPlxuICAgICAgICA8TmF2VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDBcIj7QndCw0YHRgtGA0L7QudC60Lg8L05hdlRleHQ+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj48L2Rpdj5cbiAgICAgIDxOYXZJdGVtIHRvPVwiL3NoZWV0XCI+XG4gICAgICAgIDxDb2xsZWN0aW9uSWNvbiBjbGFzc05hbWU9XCJ3LTQgbXItMiB0ZXh0LWdyYXktNzAwXCIgLz5cbiAgICAgICAgPE5hdlRleHQ+0JvQuNGB0YI8L05hdlRleHQ+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICA8TmF2SXRlbSB0bz1cIi9zdGFyXCI+XG4gICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJ3LTQgbXItMiB0ZXh0LWdyYXktNzAwXCIgLz5cbiAgICAgICAgPE5hdlRleHQ+0J/QvtC80LXRh9C10L3QvdGL0LU8L05hdlRleHQ+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICA8TmF2SXRlbSB0bz1cIi90YWdcIj5cbiAgICAgICAgPFRhZ0ljb24gY2xhc3NOYW1lPVwidy00IG1yLTIgdGV4dC1ncmF5LTcwMFwiIC8+XG4gICAgICAgIDxOYXZUZXh0PtCi0LXQs9C4PC9OYXZUZXh0PlxuICAgICAgPC9OYXZJdGVtPlxuICAgICAgPE5hdkl0ZW0gdG89XCIvdHJhc2hcIj5cbiAgICAgICAgPFRyYXNoSWNvbiBjbGFzc05hbWU9XCJ3LTQgbXItMiB0ZXh0LWdyYXktNzAwXCIgLz5cbiAgICAgICAgPE5hdlRleHQ+0JrQvtGA0LfQuNC90LA8L05hdlRleHQ+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwbC00IGN1cnNvci1wb2ludGVyIHB5LTEgaG92ZXI6YmctZ3JheS0zMDBcIj5cbiAgICAgICAgPExvZ291dEljb24gY2xhc3NOYW1lPVwidy00IG1yLTIgdGV4dC1ncmF5LTcwMFwiIC8+XG4gICAgICAgIDxOYXZUZXh0PtCS0YvQudGC0Lg8L05hdlRleHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ29sbGVjdGlvbkljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgZD1cIk0xOSAxMUg1bTE0IDBhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ2LTZhMiAyIDAgMDEyLTJtMTQgMFY5YTIgMiAwIDAwLTItMk01IDExVjlhMiAyIDAgMDEyLTJtMCAwVjVhMiAyIDAgMDEyLTJoNmEyIDIgMCAwMTIgMnYyTTcgN2gxMFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uSWNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExvZ291dEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9XCJNMTcgMTZsNC00bTAgMGwtNC00bTQgNEg3bTYgNHYxYTMgMyAwIDAxLTMgM0g2YTMgMyAwIDAxLTMtM1Y3YTMgMyAwIDAxMy0zaDRhMyAzIDAgMDEzIDN2MVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXRJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU2VhcmNoSWNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTggNGE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHpNMiA4YTYgNiAwIDExMTAuODkgMy40NzZsNC44MTcgNC44MTdhMSAxIDAgMDEtMS40MTQgMS40MTRsLTQuODE2LTQuODE2QTYgNiAwIDAxMiA4elwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU2V0dGluZ0ljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9XCJNMTAuMzI1IDQuMzE3Yy40MjYtMS43NTYgMi45MjQtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMDAyLjU3MyAxLjA2NmMxLjU0My0uOTQgMy4zMS44MjYgMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMDAxLjA2NSAyLjU3MmMxLjc1Ni40MjYgMS43NTYgMi45MjQgMCAzLjM1YTEuNzI0IDEuNzI0IDAgMDAtMS4wNjYgMi41NzNjLjk0IDEuNTQzLS44MjYgMy4zMS0yLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwMC0yLjU3MiAxLjA2NWMtLjQyNiAxLjc1Ni0yLjkyNCAxLjc1Ni0zLjM1IDBhMS43MjQgMS43MjQgMCAwMC0yLjU3My0xLjA2NmMtMS41NDMuOTQtMy4zMS0uODI2LTIuMzctMi4zN2ExLjcyNCAxLjcyNCAwIDAwLTEuMDY1LTIuNTcyYy0xLjc1Ni0uNDI2LTEuNzU2LTIuOTI0IDAtMy4zNWExLjcyNCAxLjcyNCAwIDAwMS4wNjYtMi41NzNjLS45NC0xLjU0My44MjYtMy4zMSAyLjM3LTIuMzcuOTk2LjYwOCAyLjI5Ni4wNyAyLjU3Mi0xLjA2NXpcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD1cIk0xNSAxMmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU3Rhckljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgZD1cIk0xMS4wNDkgMi45MjdjLjMtLjkyMSAxLjYwMy0uOTIxIDEuOTAyIDBsMS41MTkgNC42NzRhMSAxIDAgMDAuOTUuNjloNC45MTVjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTMuOTc2IDIuODg4YTEgMSAwIDAwLS4zNjMgMS4xMThsMS41MTggNC42NzRjLjMuOTIyLS43NTUgMS42ODgtMS41MzggMS4xMThsLTMuOTc2LTIuODg4YTEgMSAwIDAwLTEuMTc2IDBsLTMuOTc2IDIuODg4Yy0uNzgzLjU3LTEuODM4LS4xOTctMS41MzgtMS4xMThsMS41MTgtNC42NzRhMSAxIDAgMDAtLjM2My0xLjExOGwtMy45NzYtMi44ODhjLS43ODQtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDQuOTE0YTEgMSAwIDAwLjk1MS0uNjlsMS41MTktNC42NzR6XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gVGFnSWNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICBkPVwiTTcgN2guMDFNNyAzaDVjLjUxMiAwIDEuMDI0LjE5NSAxLjQxNC41ODZsNyA3YTIgMiAwIDAxMCAyLjgyOGwtNyA3YTIgMiAwIDAxLTIuODI4IDBsLTctN0ExLjk5NCAxLjk5NCAwIDAxMyAxMlY3YTQgNCAwIDAxNC00elwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gVHJhc2hJY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICBkPVwiTTE5IDdsLS44NjcgMTIuMTQyQTIgMiAwIDAxMTYuMTM4IDIxSDcuODYyYTIgMiAwIDAxLTEuOTk1LTEuODU4TDUgN201IDR2Nm00LTZ2Nm0xLTEwVjRhMSAxIDAgMDAtMS0xaC00YTEgMSAwIDAwLTEgMXYzTTQgN2gxNlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFzaEljb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBTaGVldExpc3QoKSB7XG4gIHJldHVybiA8ZGl2PlNoZWV0IGxpc3Q8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoZWV0TGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=