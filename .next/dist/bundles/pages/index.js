module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Normalize__ = __webpack_require__("./components/common/Normalize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Navbar.js';






var Navbar = function Navbar(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'navbar', __source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Normalize__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'nav-item selected', __source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			},
			'Jeane Carlos'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'flex-gap', __source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'nav-item right-margin selected', __source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			},
			'Hacks'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'nav-item', __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			},
			'About'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Style, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 15
			}
		})
	);
};

var Style = function Style() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'style',
		{ jsx: true, __source: {
				fileName: _jsxFileName,
				lineNumber: 20
			}
		},
		'\n\t\t.navbar {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\theight: 15vh;\n\t\t\tpadding-left: 5%;\n\t\t\tpadding-right: 5%;\n\t\t}\n\n\t\t.flex-gap {\n\t\t\tflex: 1;\n\t\t}\n\n\t\t.right-margin {\n\t\t\tmargin-right: 1.5em;\n\t\t}\n\t\t.nav-item {\n\t\t\tcolor: ' + __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* grey */] + ';\n\t\t\tfont-size: 1.6em;\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\t.selected {\n\t\t\tcolor: ' + __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* primaryColor */] + ';\n\t\t}\n\t'
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/common/Normalize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Normalize.js';




var Normalize = function Normalize(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-1946146746',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 5
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 6
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1946146746',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			}),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-1946146746',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			})
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '1946146746',
			css: '*{box-sizing:border-box;margin:0;padding:0;font-family:\'Georgia\';font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL05vcm1hbGl6ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIsQUFHMkIsc0JBQ2IsU0FDQyxVQUNZLHNCQUNQLGVBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL05vcm1hbGl6ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamVhbmVjYXJsb3MvRGVza3RvcC9Qcm9qZWN0cy9qaXN5LXJldmFtcGVkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IE5vcm1hbGl6ZSA9IHByb3BzID0+IChcblx0PGRpdj5cblx0XHQ8SGVhZD5cblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0KiB7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdHZW9yZ2lhJztcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3JtYWxpemU7XG4iXX0= */\n/*@ sourceURL=components/common/Normalize.js */'
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Normalize);

/***/ }),

/***/ "./components/common/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return darkerGrey; });
var primaryColor = '#F44336';
var grey = '#AAAAAA';
var darkerGrey = '#707070';

/***/ }),

/***/ "./components/home/Card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/home/Card.js';




var Card = function Card(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'container', __source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'card', __source: {
				fileName: _jsxFileName,
				lineNumber: 7
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Style, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		})
	);
};

var Style = function Style() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'style',
		{ jsx: true, __source: {
				fileName: _jsxFileName,
				lineNumber: 13
			}
		},
		'\n\t\t.container {\n\t\t\tdisplay: flex;\n\t\t\tflex: 1;\n\t\t\tcolor: white;\n\t\t\tborder: 1px solid white;\n\t\t}\n\n\t\t.card {\n\t\t\tflex: 1;\n\t\t\theight: 100%;\n\t\t\tbackground: blue;\n\t\t}\n\t'
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "./components/home/Row.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card__ = __webpack_require__("./components/home/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/home/Row.js';





var Row = function Row(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'row', __source: {
				fileName: _jsxFileName,
				lineNumber: 7
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'gap', __source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Style, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		})
	);
};

var Style = function Style() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'style',
		{ jsx: true, __source: {
				fileName: _jsxFileName,
				lineNumber: 16
			}
		},
		'\n\t\t.row {\n\t\t\tdisplay: flex;\n\t\t\theight: 55vh;\n\t\t\tpadding: 3% 6% 3% 6%;\n\t\t}\n\t\t.gap {\n\t\t\tflex: 0.1;\n\t\t}\n\t'
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),

/***/ "./components/home/Title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/home/Title.js';




var Title = function Title(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'title', __source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		},
		'I am a Hackathon Enthusiast',
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Style, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		})
	);
};

var Style = function Style() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'style',
		{ jsx: true, __source: {
				fileName: _jsxFileName,
				lineNumber: 13
			}
		},
		'\n\t\t.title {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: 35vh;\n\t\t\tfont-size: 3em;\n\t\t\tcolor: ' + __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* darkerGrey */] + ';\n\t\t}\n\t'
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Navbar__ = __webpack_require__("./components/common/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_Title__ = __webpack_require__("./components/home/Title.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_Row__ = __webpack_require__("./components/home/Row.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/pages/index.js';






var mainPage = function mainPage() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_common_Navbar__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_home_Title__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_home_Row__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["default"] = (mainPage);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map