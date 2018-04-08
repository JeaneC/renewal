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

/***/ "./components/about/Body.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Body.js';

// import AboutPic from '../../static/propic.png';


var ComponentName = function ComponentName(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'about-body', __source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'about-image-container', __source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/propic.png', alt: 'my image', className: 'about-image', __source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			})
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'about-description', __source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				{ className: 'about-paragraph', __source: {
						fileName: _jsxFileName,
						lineNumber: 11
					}
				},
				'I started coding Summer 2017 after switching majors for the fourth time. Two months into coding, I decided to test my luck at my first major hackathon hosted by JP Morgan Chase. In just 24 hours, my team somehow ended up winning the entire competition!'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				{ className: 'about-paragraph', __source: {
						fileName: _jsxFileName,
						lineNumber: 17
					}
				},
				'Now, I am an incoming intern at',
				' ',
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{ className: 'about-highlight', __source: {
							fileName: _jsxFileName,
							lineNumber: 19
						}
					},
					'JP Morgan Chase '
				),
				'and a',
				' ',
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{ className: 'about-highlight', __source: {
							fileName: _jsxFileName,
							lineNumber: 20
						}
					},
					'multi-winning hackathon hacker'
				),
				'. In 2018 alone, I have visited more than 5 different states all over the country to compete in 8 different hackathons!'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				{ className: 'about-paragraph', __source: {
						fileName: _jsxFileName,
						lineNumber: 24
					}
				},
				'Many people compete for different reasons. The truth is, competing is a way for friends, peers, and the world to hopefully see my passion in the things I can create.'
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Style, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 30
			}
		})
	);
};

var Style = function Style() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'style',
		{ jsx: true, __source: {
				fileName: _jsxFileName,
				lineNumber: 35
			}
		},
		'\n\t\t.about-body {\n\t\t\theight: 60vh;\n\t\t\tdisplay: flex;\n\t\t\tmargin-left: 5%;\n\t\t\tmargin-right: 5%;\n\t\t}\n\n\t\t.about-image-container {\n\t\t\tflex: 0.7;\n\t\t\tpadding: 2% 4% 7% 4%;\n\t\t}\n\n\t\t.about-image {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t}\n\n\t\t.about-description {\n\t\t\tflex: 1;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tpadding: 0% 4% 5% 3%;\n\t\t\tmargin-top: 2%;\n\t\t}\n\n\t\t.about-paragraph {\n\t\t\tcolor: ' + __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* darkerGrey */] + ';\n\t\t\tmargin-bottom: 0.5em;\n\t\t\tfont-size: 1.05em;\n\t\t\tline-height: 1.4em;\n\t\t\tfont-family: \'Open Sans\', sans-serif;\n\t\t\tfont-weight: 300;\n\t\t}\n\n\t\t.about-highlight {\n\t\t\tfont-size: inherit;\n\t\t\tfont-family: inherit;\n\t\t\tcolor: ' + __WEBPACK_IMPORTED_MODULE_1__common_constants__["c" /* primaryColor */] + ';\n\t\t\tfont-weight: 600;\n\t\t}\n\t'
	);
};

/* harmony default export */ __webpack_exports__["a"] = (ComponentName);

/***/ }),

/***/ "./components/about/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Header.js';




var Title = function Title(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'about-header', __source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'header-1', __source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			},
			'Jeane Ferdinand Carlos'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'header-2', __source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			},
			'Software Engineer'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Style, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		})
	);
};

var Style = function Style() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'style',
		{ jsx: true, __source: {
				fileName: _jsxFileName,
				lineNumber: 14
			}
		},
		'\n\t\t.about-header {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: 25vh;\n\t\t\tcolor: ' + __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* darkerGrey */] + ';\n\t\t}\n\n\t\t.header-1 {\n\t\t\tfont-size: 2.7em;\n\t\t\tfont-family: Georgia;\n\n\t\t\tfont-weight: 600;\n\t\t}\n\n\t\t.header-2 {\n\t\t\tfont-family: Georgia;\n\t\t\tfont-size: 1.8em;\n\t\t\tmargin-top: 0.6em;\n\t\t}\n\t'
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "./components/common/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Normalize__ = __webpack_require__("./components/common/Normalize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Navbar.js';







var Navbar = function Navbar(_ref) {
	var name = _ref.name,
	    hacks = _ref.hacks,
	    about = _ref.about;

	var nameClasses = name ? 'nav-item selected' : 'nav-item';
	var aboutClasses = about ? 'nav-item selected' : 'nav-item';
	var hackClasses = hacks ? 'nav-item right-margin selected' : 'nav-item right-margin';

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'navbar', __source: {
				fileName: _jsxFileName,
				lineNumber: 16
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Normalize__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 17
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: nameClasses, onClick: function onClick() {
					return __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/');
				}, __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			},
			'Jeane Carlos'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'flex-gap', __source: {
				fileName: _jsxFileName,
				lineNumber: 21
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: hackClasses, onClick: function onClick() {
					return __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/');
				}, __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			},
			'Hacks'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: aboutClasses, onClick: function onClick() {
					return __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/about');
				}, __source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			},
			'About'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Style, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 29
			}
		})
	);
};

var Style = function Style() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'style',
		{ jsx: true, __source: {
				fileName: _jsxFileName,
				lineNumber: 35
			}
		},
		'\n\t\t.navbar {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\theight: 15vh;\n\t\t\tpadding-left: 5%;\n\t\t\tpadding-right: 5%;\n\t\t}\n\n\t\t.flex-gap {\n\t\t\tflex: 1;\n\t\t}\n\n\t\t.right-margin {\n\t\t\tmargin-right: 1.5em;\n\t\t}\n\t\t.nav-item {\n\t\t\tcolor: ' + __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* grey */] + ';\n\t\t\tfont-size: 1.4em;\n\t\t\tfont-weight: 700;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.selected {\n\t\t\tcolor: ' + __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* primaryColor */] + ';\n\t\t}\n\t'
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
			className: 'jsx-4003477127',
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
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-4003477127',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			}),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-4003477127',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			})
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '4003477127',
			css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400\');*{box-sizing:border-box;margin:0;padding:0;font-family:\'Georgia\';font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL05vcm1hbGl6ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIsQUFFNEUsQUFHakQsc0JBQ2IsU0FDQyxVQUNZLHNCQUNQLGVBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL05vcm1hbGl6ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamVhbmVjYXJsb3MvRGVza3RvcC9Qcm9qZWN0cy9qaXN5LXJldmFtcGVkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IE5vcm1hbGl6ZSA9IHByb3BzID0+IChcblx0PGRpdj5cblx0XHQ8SGVhZD5cblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCcpO1xuXG5cdFx0XHQqIHtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRmb250LWZhbWlseTogJ0dlb3JnaWEnO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vcm1hbGl6ZTtcbiJdfQ== */\n/*@ sourceURL=components/common/Normalize.js */'
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
/* unused harmony export princeton */
/* unused harmony export nyu */
/* unused harmony export coloradoboulder */
/* unused harmony export stonybrook */
/* unused harmony export pennapps */
/* unused harmony export codeforgood */
/* unused harmony export hackathons */
var primaryColor = '#F44336';
var grey = '#AAAAAA';
var darkerGrey = '#707070';

var princeton = ['#E91E63', '#750F32'];
var nyu = ['#9C27B0', '#4E1458'];
var coloradoboulder = ['#616161', '#131313'];
var stonybrook = ['#F44336', '#7A221B'];
var pennapps = ['#00BCD4', '#005E6A'];
var codeforgood = ['#303F9F', '#182050'];

//I will start this from earliest to latest
var hackathons = ['Code For Good', 'PennApps', 'HackCewit', 'HackCU', 'HackNYU', 'HackPrinceton'];

/***/ }),

/***/ "./pages/about/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Navbar__ = __webpack_require__("./components/common/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_Header__ = __webpack_require__("./components/about/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_Body__ = __webpack_require__("./components/about/Body.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/pages/about/index.js';






var AboutPage = function AboutPage() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_common_Navbar__["a" /* default */], { name: true, about: true, __source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_about_Header__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_about_Body__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=about.js.map