webpackHotUpdate_N_E("pages/tour",{

/***/ "./src/components/HikeHeader/index.js":
/*!********************************************!*\
  !*** ./src/components/HikeHeader/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ \"./src/components/HikeHeader/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _HikeSearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../HikeSearch */ \"./src/components/HikeSearch/index.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../i18n */ \"./i18n.js\");\n\n\n\nvar _jsxFileName = \"/Users/yanji/git/volt-mx-tutorials/src/components/HikeHeader/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_yanji_git_volt_mx_tutorials_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Header;\n\nvar HikeHeader = function HikeHeader(_ref) {\n  _s();\n\n  var search = _ref.search,\n      keyword = _ref.keyword;\n\n  var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_10___default()(),\n      publicRuntimeConfig = _getConfig.publicRuntimeConfig;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"].language),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setLanguage(i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"].language);\n  }, [i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"].language]);\n  var changeLang = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (selectedLanguage) {\n    // const { tour } = router.query;\n    // console.log('router obj: %o', router);\n    // let tourName = tour;\n    // if (router.pathname.includes('tour')) {\n    //   const route = router.asPath.split(/\\?/)[0];\n    //   tourName = route.substring(route.lastIndexOf('/') + 1, route.length);\n    //   console.log('parse tour name from router asPath');\n    // } else if (!tour) {\n    //   tourName = '';\n    // }\n    // console.log('tour name: %o', tourName);\n    // const refreshPath = tourName\n    //   ? `${publicRuntimeConfig.asset}/hikes/tour/${tourName}?lang=${selectedLanguage}`\n    //   : `${publicRuntimeConfig.asset}/hikes?lang=${selectedLanguage}`;\n    // console.log('current router: %o, and refreshPath: %o', router, refreshPath);\n    // redirect\n    // Another approach\n    var refreshPath = router.asPath.split(/=/)[0].concat(\"=\".concat(selectedLanguage));\n    router.push(refreshPath);\n  }, []);\n\n  var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_8__[\"Menu\"], {\n    children: _i18n__WEBPACK_IMPORTED_MODULE_14__[\"locales\"].map(function (locale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_8__[\"Menu\"].Item, {\n        onClick: function onClick() {\n          return changeLang(locale);\n        },\n        children: i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t(locale)\n      }, locale, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.headerRow,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.headerLayout,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Header, {\n        className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.header,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          type: \"flex\",\n          justify: \"space-between\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            span: 4,\n            style: {\n              height: 'inherit'\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n              href: {\n                pathname: \"\".concat(publicRuntimeConfig.asset, \"/hikes\"),\n                query: {\n                  lang: i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"].language\n                }\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                title: \"Kony Logo\",\n                className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.logo,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                  src: \"\".concat(publicRuntimeConfig.asset, \"/static/dist/images/productlogo.svg\"),\n                  className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.logo,\n                  alt: \"logo\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.camp,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n              src: \"\".concat(publicRuntimeConfig.asset, \"/static/dist/images/camp-mountain.svg\"),\n              alt: \"camp mountain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, router.query.tour && {\n        style: {\n          justifyContent: 'flex-end'\n        }\n      }), {}, {\n        className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.subHeader,\n        children: [search ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.search,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_HikeSearch__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            keyword: keyword\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _style_scss__WEBPACK_IMPORTED_MODULE_12___default.a.switchLang,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_8__[\"Dropdown\"], {\n            overlay: menu,\n            trigger: ['click'],\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n              className: \"ant-dropdown-link\",\n              onClick: function onClick(e) {\n                return e.preventDefault();\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], {\n                type: \"global\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 17\n              }, _this), i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t(language), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], {\n                type: \"caret-down\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HikeHeader, \"X6I7Yb8xE7QYVBl3AysQSn+jymM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_11__[\"useRouter\"]];\n});\n\n_c = HikeHeader;\nHikeHeader.propTypes = {\n  search: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,\n  keyword: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string\n};\nHikeHeader.defaultProps = {\n  search: true,\n  keyword: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HikeHeader);\n\nvar _c;\n\n$RefreshReg$(_c, \"HikeHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGlrZUhlYWRlci9pbmRleC5qcz8wZTNhIl0sIm5hbWVzIjpbIkhlYWRlciIsIkxheW91dCIsIkhpa2VIZWFkZXIiLCJzZWFyY2giLCJrZXl3b3JkIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiaTE4bmV4dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VFZmZlY3QiLCJjaGFuZ2VMYW5nIiwidXNlQ2FsbGJhY2siLCJzZWxlY3RlZExhbmd1YWdlIiwicmVmcmVzaFBhdGgiLCJhc1BhdGgiLCJzcGxpdCIsImNvbmNhdCIsInB1c2giLCJtZW51IiwibG9jYWxlcyIsIm1hcCIsImxvY2FsZSIsInQiLCJzdHlsZSIsImhlYWRlclJvdyIsImhlYWRlckxheW91dCIsImhlYWRlciIsImhlaWdodCIsInBhdGhuYW1lIiwiYXNzZXQiLCJxdWVyeSIsImxhbmciLCJsb2dvIiwiY2FtcCIsInRvdXIiLCJqdXN0aWZ5Q29udGVudCIsInN1YkhlYWRlciIsInN3aXRjaExhbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsTSxHQUFXQyxzRCxDQUFYRCxNOztBQUVSLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxtQkFDVkMsbURBQVMsRUFEQztBQUFBLE1BQ2xDQyxtQkFEa0MsY0FD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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzREQsQ0FoR0Q7O0dBQU1ULFU7VUFFV00sc0Q7OztLQUZYTixVO0FBa0dOQSxVQUFVLENBQUMwQyxTQUFYLEdBQXVCO0FBQ3JCekMsUUFBTSxFQUFFMEMsaURBQVMsQ0FBQ0MsSUFERztBQUVyQjFDLFNBQU8sRUFBRXlDLGlEQUFTLENBQUNFO0FBRkUsQ0FBdkI7QUFLQTdDLFVBQVUsQ0FBQzhDLFlBQVgsR0FBMEI7QUFDeEI3QyxRQUFNLEVBQUUsSUFEZ0I7QUFFeEJDLFNBQU8sRUFBRTtBQUZlLENBQTFCO0FBS2VGLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGlrZUhlYWRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnYW50ZC9saWIvbGF5b3V0JztcbmltcG9ydCBSb3cgZnJvbSAnYW50ZC9saWIvcm93JztcbmltcG9ydCBDb2wgZnJvbSAnYW50ZC9saWIvY29sJztcbmltcG9ydCB7IERyb3Bkb3duLCBJY29uLCBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBIaWtlU2VhcmNoIGZyb20gJy4uL0hpa2VTZWFyY2gnO1xuaW1wb3J0IHsgbG9jYWxlcyB9IGZyb20gJy4uLy4uLy4uL2kxOG4nO1xuXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xuXG5jb25zdCBIaWtlSGVhZGVyID0gKHsgc2VhcmNoLCBrZXl3b3JkIH0pID0+IHtcbiAgY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoaTE4bmV4dC5sYW5ndWFnZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMYW5ndWFnZShpMThuZXh0Lmxhbmd1YWdlKTtcbiAgfSwgW2kxOG5leHQubGFuZ3VhZ2VdKTtcblxuICBjb25zdCBjaGFuZ2VMYW5nID0gdXNlQ2FsbGJhY2soKHNlbGVjdGVkTGFuZ3VhZ2UpID0+IHtcbiAgICAvLyBjb25zdCB7IHRvdXIgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAvLyBjb25zb2xlLmxvZygncm91dGVyIG9iajogJW8nLCByb3V0ZXIpO1xuICAgIC8vIGxldCB0b3VyTmFtZSA9IHRvdXI7XG4gICAgLy8gaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygndG91cicpKSB7XG4gICAgLy8gICBjb25zdCByb3V0ZSA9IHJvdXRlci5hc1BhdGguc3BsaXQoL1xcPy8pWzBdO1xuICAgIC8vICAgdG91ck5hbWUgPSByb3V0ZS5zdWJzdHJpbmcocm91dGUubGFzdEluZGV4T2YoJy8nKSArIDEsIHJvdXRlLmxlbmd0aCk7XG4gICAgLy8gICBjb25zb2xlLmxvZygncGFyc2UgdG91ciBuYW1lIGZyb20gcm91dGVyIGFzUGF0aCcpO1xuICAgIC8vIH0gZWxzZSBpZiAoIXRvdXIpIHtcbiAgICAvLyAgIHRvdXJOYW1lID0gJyc7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKCd0b3VyIG5hbWU6ICVvJywgdG91ck5hbWUpO1xuICAgIC8vIGNvbnN0IHJlZnJlc2hQYXRoID0gdG91ck5hbWVcbiAgICAvLyAgID8gYCR7cHVibGljUnVudGltZUNvbmZpZy5hc3NldH0vaGlrZXMvdG91ci8ke3RvdXJOYW1lfT9sYW5nPSR7c2VsZWN0ZWRMYW5ndWFnZX1gXG4gICAgLy8gICA6IGAke3B1YmxpY1J1bnRpbWVDb25maWcuYXNzZXR9L2hpa2VzP2xhbmc9JHtzZWxlY3RlZExhbmd1YWdlfWA7XG4gICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQgcm91dGVyOiAlbywgYW5kIHJlZnJlc2hQYXRoOiAlbycsIHJvdXRlciwgcmVmcmVzaFBhdGgpO1xuICAgIC8vIHJlZGlyZWN0XG5cbiAgICAvLyBBbm90aGVyIGFwcHJvYWNoXG4gICAgY29uc3QgcmVmcmVzaFBhdGggPSByb3V0ZXIuYXNQYXRoLnNwbGl0KC89LylbMF0uY29uY2F0KGA9JHtzZWxlY3RlZExhbmd1YWdlfWApO1xuICAgIHJvdXRlci5wdXNoKHJlZnJlc2hQYXRoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG1lbnUgPSAoXG4gICAgPE1lbnU+XG4gICAgICB7bG9jYWxlcy5tYXAobG9jYWxlID0+IChcbiAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5nKGxvY2FsZSl9IGtleT17bG9jYWxlfT5cbiAgICAgICAgICB7aTE4bmV4dC50KGxvY2FsZSl9XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgKSl9XG4gICAgPC9NZW51PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBjbGFzc05hbWU9e3N0eWxlLmhlYWRlclJvd30+XG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyTGF5b3V0fT5cbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezR9IHN0eWxlPXt7IGhlaWdodDogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgJHtwdWJsaWNSdW50aW1lQ29uZmlnLmFzc2V0fS9oaWtlc2AsXG4gICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBsYW5nOiBpMThuZXh0Lmxhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJLb255IExvZ29cIiBjbGFzc05hbWU9e3N0eWxlLmxvZ299PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3B1YmxpY1J1bnRpbWVDb25maWcuYXNzZXR9L3N0YXRpYy9kaXN0L2ltYWdlcy9wcm9kdWN0bG9nby5zdmdgfSBjbGFzc05hbWU9e3N0eWxlLmxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPXtzdHlsZS5jYW1wfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17YCR7cHVibGljUnVudGltZUNvbmZpZy5hc3NldH0vc3RhdGljL2Rpc3QvaW1hZ2VzL2NhbXAtbW91bnRhaW4uc3ZnYH1cblxuICAgICAgICAgICAgICAgIGFsdD1cImNhbXAgbW91bnRhaW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgey4uLnJvdXRlci5xdWVyeS50b3VyICYmIHsgc3R5bGU6IHsganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuc3ViSGVhZGVyfVxuICAgICAgICA+XG4gICAgICAgICAge3NlYXJjaCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWFyY2h9PlxuICAgICAgICAgICAgICA8SGlrZVNlYXJjaCBrZXl3b3JkPXtrZXl3b3JkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN3aXRjaExhbmd9PlxuICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW50LWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImdsb2JhbFwiIC8+XG4gICAgICAgICAgICAgICAge2kxOG5leHQudChsYW5ndWFnZSl9XG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImNhcmV0LWRvd25cIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvUm93PlxuICApO1xufTtcblxuSGlrZUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHNlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gIGtleXdvcmQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5IaWtlSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VhcmNoOiB0cnVlLFxuICBrZXl3b3JkOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpa2VIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/HikeHeader/index.js\n");

/***/ })

})