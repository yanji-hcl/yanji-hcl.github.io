webpackHotUpdate_N_E("pages/hikes",{

/***/ "./pages/hikes.js":
/*!************************!*\
  !*** ./pages/hikes.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_HikeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/HikeHeader */ \"./src/components/HikeHeader/index.js\");\n/* harmony import */ var _src_components_ToursList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/ToursList */ \"./src/components/ToursList/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ \"./pages/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_utils_populate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/utils/populate */ \"./src/utils/populate.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/yanji/git/volt-mx-tutorials/pages/hikes.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // import i18next from 'i18next';\n\n\n\n\n\n\n\nvar HikePage = function HikePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      categories = _useState[0],\n      setCategories = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var getHikes = /*#__PURE__*/function () {\n    var _ref = Object(_Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var categoriesMaps;\n      return _Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_src_utils_populate__WEBPACK_IMPORTED_MODULE_8__[\"getMapCategories\"])();\n\n            case 2:\n              categoriesMaps = _context.sent;\n              setCategories(categoriesMaps);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getHikes() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    getHikes();\n    return function () {};\n  }, [_i18n__WEBPACK_IMPORTED_MODULE_9__[\"default\"].language]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var path = router.asPath.split(/\\?/);\n    var searchParams = new URLSearchParams(path[1]);\n    var lang = searchParams.get('lang');\n\n    if (lang) {\n      if (lang !== _i18n__WEBPACK_IMPORTED_MODULE_9__[\"default\"].language) {\n        router.push(router.asPath);\n      }\n    } else {\n      router.push({\n        pathname: path[0] || router.pathname,\n        query: {\n          lang: 'en-US'\n        }\n      });\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_7___default.a.hikeBody,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_HikeHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_scss__WEBPACK_IMPORTED_MODULE_7___default.a.hikeContainer,\n      children: categories.map(function (item) {\n        return item.categoryTours !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_ToursList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          title: item.categoryName,\n          desc: item.categoryDescription,\n          alias: item.categoryAlias || item.categoryName,\n          tours: item.categoryTours\n        }, item.categoryName, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this) : null;\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HikePage, \"nCkU5yC4r4qYWxDv0b8UJDIFNUI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = HikePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HikePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HikePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGlrZXMuanM/N2JlOSJdLCJuYW1lcyI6WyJIaWtlUGFnZSIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRIaWtlcyIsImdldE1hcENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzTWFwcyIsInVzZUVmZmVjdCIsImkxOG5leHQiLCJsYW5ndWFnZSIsInBhdGgiLCJhc1BhdGgiLCJzcGxpdCIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxhbmciLCJnZXQiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInN0eWxlcyIsImhpa2VCb2R5IiwiaGlrZUNvbnRhaW5lciIsIm1hcCIsIml0ZW0iLCJjYXRlZ29yeVRvdXJzIiwiY2F0ZWdvcnlOYW1lIiwiY2F0ZWdvcnlEZXNjcmlwdGlvbiIsImNhdGVnb3J5QWxpYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsRUFBRCxDQUR2QjtBQUFBLE1BQ2RDLFVBRGM7QUFBQSxNQUNGQyxhQURFOztBQUVyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFFBQVE7QUFBQSw4UkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNjQyw0RUFBZ0IsRUFEOUI7O0FBQUE7QUFDVEMsNEJBRFM7QUFFZkwsMkJBQWEsQ0FBQ0ssY0FBRCxDQUFiOztBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJGLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFLQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2RILFlBQVE7QUFDUixXQUFPLFlBQU0sQ0FBRSxDQUFmO0FBQ0QsR0FIUSxFQUdOLENBQUNJLDZDQUFPLENBQUNDLFFBQVQsQ0FITSxDQUFUO0FBS0FGLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1HLElBQUksR0FBR1IsTUFBTSxDQUFDUyxNQUFQLENBQWNDLEtBQWQsQ0FBb0IsSUFBcEIsQ0FBYjtBQUNBLFFBQU1DLFlBQVksR0FBRyxJQUFJQyxlQUFKLENBQW9CSixJQUFJLENBQUMsQ0FBRCxDQUF4QixDQUFyQjtBQUNBLFFBQU1LLElBQUksR0FBR0YsWUFBWSxDQUFDRyxHQUFiLENBQWlCLE1BQWpCLENBQWI7O0FBRUEsUUFBSUQsSUFBSixFQUFVO0FBQ1IsVUFBSUEsSUFBSSxLQUFLUCw2Q0FBTyxDQUFDQyxRQUFyQixFQUErQjtBQUM3QlAsY0FBTSxDQUFDZSxJQUFQLENBQVlmLE1BQU0sQ0FBQ1MsTUFBbkI7QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMVCxZQUFNLENBQUNlLElBQVAsQ0FBWTtBQUNWQyxnQkFBUSxFQUFFUixJQUFJLENBQUMsQ0FBRCxDQUFKLElBQVdSLE1BQU0sQ0FBQ2dCLFFBRGxCO0FBRVZDLGFBQUssRUFBRTtBQUNMSixjQUFJLEVBQUU7QUFERDtBQUZHLE9BQVo7QUFNRDtBQUNGLEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFrQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVLLGtEQUFNLENBQUNDLFFBQXZCO0FBQUEsNEJBQ0UscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVELGtEQUFNLENBQUNFLGFBQXZCO0FBQUEsZ0JBQ0d0QixVQUFVLENBQUN1QixHQUFYLENBQWUsVUFBQUMsSUFBSTtBQUFBLGVBQUtBLElBQUksQ0FBQ0MsYUFBTCxLQUF1QixJQUF2QixnQkFDdkIscUVBQUMsaUVBQUQ7QUFFRSxlQUFLLEVBQUVELElBQUksQ0FBQ0UsWUFGZDtBQUdFLGNBQUksRUFBRUYsSUFBSSxDQUFDRyxtQkFIYjtBQUlFLGVBQUssRUFBRUgsSUFBSSxDQUFDSSxhQUFMLElBQXNCSixJQUFJLENBQUNFLFlBSnBDO0FBS0UsZUFBSyxFQUFFRixJQUFJLENBQUNDO0FBTGQsV0FDT0QsSUFBSSxDQUFDRSxZQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHVCLEdBUXJCLElBUmdCO0FBQUEsT0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FoREQ7O0dBQU01QixRO1VBRVdLLHFEOzs7S0FGWEwsUTtBQWtEU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9oaWtlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuLy8gaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgSGlrZUhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IaWtlSGVhZGVyJztcbmltcG9ydCBUb3Vyc0xpc3QgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVG91cnNMaXN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IGdldE1hcENhdGVnb3JpZXMgfSBmcm9tICcuLi9zcmMvdXRpbHMvcG9wdWxhdGUnO1xuaW1wb3J0IGkxOG5leHQgZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IEhpa2VQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdldEhpa2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpZXNNYXBzID0gYXdhaXQgZ2V0TWFwQ2F0ZWdvcmllcygpO1xuICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcmllc01hcHMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0SGlrZXMoKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtpMThuZXh0Lmxhbmd1YWdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwYXRoID0gcm91dGVyLmFzUGF0aC5zcGxpdCgvXFw/Lyk7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXRoWzFdKTtcbiAgICBjb25zdCBsYW5nID0gc2VhcmNoUGFyYW1zLmdldCgnbGFuZycpO1xuXG4gICAgaWYgKGxhbmcpIHtcbiAgICAgIGlmIChsYW5nICE9PSBpMThuZXh0Lmxhbmd1YWdlKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKHJvdXRlci5hc1BhdGgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBwYXRoWzBdIHx8IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBsYW5nOiAnZW4tVVMnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaWtlQm9keX0+XG4gICAgICA8SGlrZUhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaWtlQ29udGFpbmVyfT5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKGl0ZW0gPT4gKGl0ZW0uY2F0ZWdvcnlUb3VycyAhPT0gbnVsbCA/IChcbiAgICAgICAgICA8VG91cnNMaXN0XG4gICAgICAgICAgICBrZXk9e2l0ZW0uY2F0ZWdvcnlOYW1lfVxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0uY2F0ZWdvcnlOYW1lfVxuICAgICAgICAgICAgZGVzYz17aXRlbS5jYXRlZ29yeURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgYWxpYXM9e2l0ZW0uY2F0ZWdvcnlBbGlhcyB8fCBpdGVtLmNhdGVnb3J5TmFtZX1cbiAgICAgICAgICAgIHRvdXJzPXtpdGVtLmNhdGVnb3J5VG91cnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGwpKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlrZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hikes.js\n");

/***/ })

})