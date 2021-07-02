webpackHotUpdate_N_E("pages/_app",{

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! exports provided: locales, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locales\", function() { return locales; });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-http-backend */ \"./node_modules/i18next-http-backend/esm/index.js\");\n\n\n\n\n\nvar _require = __webpack_require__(/*! ./hike.config */ \"./hike.config.js\"),\n    HIKES_BASE_URL = _require.HIKES_BASE_URL;\n\nvar locales = ['en-US', 'zh-CN', 'zh-TW', 'hi-IN'];\nvar detection = {\n  // order and from where user language should be detected\n  order: ['querystring', 'path'],\n  lookupQuerystring: 'lang'\n};\nvar prod = (process && process.env && \"development\" || undefined) === 'production';\nvar getProdUrl = prod ? \"/\".concat(HIKES_BASE_URL) : '';\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"initReactI18next\"]).init({\n  detection: detection,\n  fallbackLng: {\n    en: ['en-US'],\n    zh: ['zh-CN'],\n    \"default\": ['en-US']\n  },\n  backend: {\n    loadPath: \"\".concat(getProdUrl, \"/locales/{{lng}}/{{ns}}.json\")\n  },\n  returnObjects: true,\n  debug: false,\n  interpolation: {\n    escapeValue: false // not needed for react!!\n\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaTE4bi5qcz85M2I0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJISUtFU19CQVNFX1VSTCIsImxvY2FsZXMiLCJkZXRlY3Rpb24iLCJvcmRlciIsImxvb2t1cFF1ZXJ5c3RyaW5nIiwicHJvZCIsImdldFByb2RVcmwiLCJpMThuZXh0IiwidXNlIiwiWEhSIiwiTGFuZ3VhZ2VEZXRlY3RvciIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwiZmFsbGJhY2tMbmciLCJlbiIsInpoIiwiYmFja2VuZCIsImxvYWRQYXRoIiwicmV0dXJuT2JqZWN0cyIsImRlYnVnIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7ZUFFMkJBLG1CQUFPLENBQUMsd0M7SUFBM0JDLGMsWUFBQUEsYzs7QUFFRCxJQUFNQyxPQUFPLEdBQUcsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUFoQjtBQUNQLElBQU1DLFNBQVMsR0FBRztBQUNoQjtBQUNBQyxPQUFLLEVBQUUsQ0FBQyxhQUFELEVBQWdCLE1BQWhCLENBRlM7QUFHaEJDLG1CQUFpQixFQUFFO0FBSEgsQ0FBbEI7QUFLQSxJQUFNQyxJQUFJLEdBQUcsd0NBQW9CLG1CQUFLLFlBQXRDO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRCxJQUFJLGNBQU9MLGNBQVAsSUFBMEIsRUFBakQ7QUFFQU8sK0NBQU8sQ0FDSkMsR0FESCxDQUNPQyw0REFEUCxFQUVHRCxHQUZILENBRU9FLHdFQUZQLEVBR0dGLEdBSEgsQ0FHT0csOERBSFAsRUFJR0MsSUFKSCxDQUlRO0FBQ0pWLFdBQVMsRUFBVEEsU0FESTtBQUVKVyxhQUFXLEVBQUU7QUFDWEMsTUFBRSxFQUFFLENBQUMsT0FBRCxDQURPO0FBRVhDLE1BQUUsRUFBRSxDQUFDLE9BQUQsQ0FGTztBQUdYLGVBQVMsQ0FBQyxPQUFEO0FBSEUsR0FGVDtBQU9KQyxTQUFPLEVBQUU7QUFDUEMsWUFBUSxZQUFLWCxVQUFMO0FBREQsR0FQTDtBQVVKWSxlQUFhLEVBQUUsSUFWWDtBQVdKQyxPQUFLLEVBQUUsS0FYSDtBQVlKQyxlQUFhLEVBQUU7QUFDYkMsZUFBVyxFQUFFLEtBREEsQ0FDTzs7QUFEUDtBQVpYLENBSlI7QUFxQmVkLDhHQUFmIiwiZmlsZSI6Ii4vaTE4bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3InO1xuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFhIUiBmcm9tICdpMThuZXh0LWh0dHAtYmFja2VuZCc7XG5cbmNvbnN0IHsgSElLRVNfQkFTRV9VUkwgfSA9IHJlcXVpcmUoJy4vaGlrZS5jb25maWcnKTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsZXMgPSBbJ2VuLVVTJywgJ3poLUNOJywgJ3poLVRXJywgJ2hpLUlOJ107XG5jb25zdCBkZXRlY3Rpb24gPSB7XG4gIC8vIG9yZGVyIGFuZCBmcm9tIHdoZXJlIHVzZXIgbGFuZ3VhZ2Ugc2hvdWxkIGJlIGRldGVjdGVkXG4gIG9yZGVyOiBbJ3F1ZXJ5c3RyaW5nJywgJ3BhdGgnXSxcbiAgbG9va3VwUXVlcnlzdHJpbmc6ICdsYW5nJyxcbn07XG5jb25zdCBwcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmNvbnN0IGdldFByb2RVcmwgPSBwcm9kID8gYC8ke0hJS0VTX0JBU0VfVVJMfWAgOiAnJztcblxuaTE4bmV4dFxuICAudXNlKFhIUilcbiAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXG4gIC5pbml0KHtcbiAgICBkZXRlY3Rpb24sXG4gICAgZmFsbGJhY2tMbmc6IHtcbiAgICAgIGVuOiBbJ2VuLVVTJ10sXG4gICAgICB6aDogWyd6aC1DTiddLFxuICAgICAgZGVmYXVsdDogWydlbi1VUyddLFxuICAgIH0sXG4gICAgYmFja2VuZDoge1xuICAgICAgbG9hZFBhdGg6IGAke2dldFByb2RVcmx9L2xvY2FsZXMve3tsbmd9fS97e25zfX0uanNvbmAsXG4gICAgfSxcbiAgICByZXR1cm5PYmplY3RzOiB0cnVlLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIG5vdCBuZWVkZWQgZm9yIHJlYWN0ISFcbiAgICB9LFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgaTE4bmV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ })

})