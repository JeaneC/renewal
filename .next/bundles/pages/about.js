module.exports =

        __NEXT_REGISTER_PAGE('/about', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./components/about/Body.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Body.js';

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();


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

var _default = ComponentName;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(ComponentName, 'ComponentName', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Body.js');
	reactHotLoader.register(Style, 'Style', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Body.js');
	reactHotLoader.register(_default, 'default', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Body.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/about/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Header.js';

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();





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

var _default = Title;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Title, 'Title', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Header.js');
	reactHotLoader.register(Style, 'Style', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Header.js');
	reactHotLoader.register(_default, 'default', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/about/Header.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Normalize__ = __webpack_require__("./components/common/Normalize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Navbar.js';

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();








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

var _default = Navbar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Navbar, 'Navbar', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Navbar.js');
	reactHotLoader.register(Style, 'Style', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Navbar.js');
	reactHotLoader.register(_default, 'default', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Navbar.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/Normalize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Normalize.js';


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();




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

var _default = Normalize;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Normalize, 'Normalize', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Normalize.js');
	reactHotLoader.register(_default, 'default', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/Normalize.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return darkerGrey; });
/* unused harmony export princeton */
/* unused harmony export nyu */
/* unused harmony export coloradoboulder */
/* unused harmony export stonybrook */
/* unused harmony export pennapps */
/* unused harmony export codeforgood */
/* unused harmony export hackathons */
(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

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
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(primaryColor, 'primaryColor', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(grey, 'grey', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(darkerGrey, 'darkerGrey', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(princeton, 'princeton', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(nyu, 'nyu', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(coloradoboulder, 'coloradoboulder', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(stonybrook, 'stonybrook', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(pennapps, 'pennapps', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(codeforgood, 'codeforgood', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	reactHotLoader.register(hackathons, 'hackathons', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/common/constants.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/about/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Navbar__ = __webpack_require__("./components/common/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_Header__ = __webpack_require__("./components/about/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_Body__ = __webpack_require__("./components/about/Body.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/pages/about/index.js';

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();







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

var _default = AboutPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(AboutPage, 'AboutPage', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/pages/about/index.js');
	reactHotLoader.register(_default, 'default', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/pages/about/index.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=about.js.map