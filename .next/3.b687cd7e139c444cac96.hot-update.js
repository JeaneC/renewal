webpackHotUpdate(3,{

/***/ "./components/Main/Title.js":
false,

/***/ "./components/home/Title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("./components/common/constants.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/home/Title.js';

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();





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

var _default = Title;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Title, 'Title', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/home/Title.js');
	reactHotLoader.register(Style, 'Style', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/home/Title.js');
	reactHotLoader.register(_default, 'default', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/components/home/Title.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Navbar_js__ = __webpack_require__("./components/common/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_Title_js__ = __webpack_require__("./components/home/Title.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/pages/index.js';

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();





var mainPage = function mainPage() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_common_Navbar_js__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 7
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_home_Title_js__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'h1',
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 9
				}
			},
			'Main Page'
		)
	);
};

var _default = mainPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(mainPage, 'mainPage', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/pages/index.js');
	reactHotLoader.register(_default, 'default', '/Users/jeanecarlos/Desktop/Projects/jisy-revamped/pages/index.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.b687cd7e139c444cac96.hot-update.js.map