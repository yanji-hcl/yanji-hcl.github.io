webpackHotUpdate_N_E("pages/hikes",{

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! exports provided: locales, defaultLocale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locales\", function() { return locales; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultLocale\", function() { return defaultLocale; });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-http-backend */ \"./node_modules/i18next-http-backend/esm/index.js\");\n\n\n\n\nvar locales = ['en-US', 'zh-CN', 'zh-TW', 'hi-IN'];\nvar defaultLocale = 'en-US';\nvar detection = {\n  // order and from where user language should be detected\n  order: ['querystring'],\n  lookupQuerystring: 'lang'\n};\nvar getProdUrl = (process && process.env && \"development\" || undefined) === 'production' ? '/volt-mx-tutorials' : '';\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"initReactI18next\"]).init({\n  react: {\n    useSuspense: false\n  },\n  detection: detection,\n  fallbackLng: {\n    en: ['en-US'],\n    zh: ['zh-CN'],\n    \"default\": [defaultLocale]\n  },\n  backend: {\n    loadPath: \"\".concat(getProdUrl, \"/locales/{{lng}}/{{ns}}.json\")\n  },\n  returnObjects: true,\n  debug: false,\n  interpolation: {\n    escapeValue: false // not needed for react!!\n\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaTE4bi5qcz85M2I0Il0sIm5hbWVzIjpbImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwiZGV0ZWN0aW9uIiwib3JkZXIiLCJsb29rdXBRdWVyeXN0cmluZyIsImdldFByb2RVcmwiLCJpMThuZXh0IiwidXNlIiwiWEhSIiwiTGFuZ3VhZ2VEZXRlY3RvciIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImZhbGxiYWNrTG5nIiwiZW4iLCJ6aCIsImJhY2tlbmQiLCJsb2FkUGF0aCIsInJldHVybk9iamVjdHMiLCJkZWJ1ZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBQWhCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLE9BQXRCO0FBRVAsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCO0FBQ0FDLE9BQUssRUFBRSxDQUFDLGFBQUQsQ0FGUztBQUdoQkMsbUJBQWlCLEVBQUU7QUFISCxDQUFsQjtBQUtBLElBQU1DLFVBQVUsR0FBRyx3Q0FBb0IsbUJBQUssWUFBekIsR0FBd0Msb0JBQXhDLEdBQStELEVBQWxGO0FBRUFDLCtDQUFPLENBQ0pDLEdBREgsQ0FDT0MsNERBRFAsRUFFR0QsR0FGSCxDQUVPRSx3RUFGUCxFQUdHRixHQUhILENBR09HLDhEQUhQLEVBSUdDLElBSkgsQ0FJUTtBQUNKQyxPQUFLLEVBQUU7QUFDTEMsZUFBVyxFQUFFO0FBRFIsR0FESDtBQUlKWCxXQUFTLEVBQVRBLFNBSkk7QUFLSlksYUFBVyxFQUFFO0FBQ1hDLE1BQUUsRUFBRSxDQUFDLE9BQUQsQ0FETztBQUVYQyxNQUFFLEVBQUUsQ0FBQyxPQUFELENBRk87QUFHWCxlQUFTLENBQUNmLGFBQUQ7QUFIRSxHQUxUO0FBVUpnQixTQUFPLEVBQUU7QUFDUEMsWUFBUSxZQUFLYixVQUFMO0FBREQsR0FWTDtBQWFKYyxlQUFhLEVBQUUsSUFiWDtBQWNKQyxPQUFLLEVBQUUsS0FkSDtBQWVKQyxlQUFhLEVBQUU7QUFDYkMsZUFBVyxFQUFFLEtBREEsQ0FDTzs7QUFEUDtBQWZYLENBSlI7QUF3QmVoQiw4R0FBZiIsImZpbGUiOiIuL2kxOG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gJ2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yJztcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBYSFIgZnJvbSAnaTE4bmV4dC1odHRwLWJhY2tlbmQnO1xuXG5leHBvcnQgY29uc3QgbG9jYWxlcyA9IFsnZW4tVVMnLCAnemgtQ04nLCAnemgtVFcnLCAnaGktSU4nXTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlID0gJ2VuLVVTJztcblxuY29uc3QgZGV0ZWN0aW9uID0ge1xuICAvLyBvcmRlciBhbmQgZnJvbSB3aGVyZSB1c2VyIGxhbmd1YWdlIHNob3VsZCBiZSBkZXRlY3RlZFxuICBvcmRlcjogWydxdWVyeXN0cmluZyddLFxuICBsb29rdXBRdWVyeXN0cmluZzogJ2xhbmcnLFxufTtcbmNvbnN0IGdldFByb2RVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJy92b2x0LW14LXR1dG9yaWFscycgOiAnJztcblxuaTE4bmV4dFxuICAudXNlKFhIUilcbiAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXG4gIC5pbml0KHtcbiAgICByZWFjdDoge1xuICAgICAgdXNlU3VzcGVuc2U6IGZhbHNlLFxuICAgIH0sXG4gICAgZGV0ZWN0aW9uLFxuICAgIGZhbGxiYWNrTG5nOiB7XG4gICAgICBlbjogWydlbi1VUyddLFxuICAgICAgemg6IFsnemgtQ04nXSxcbiAgICAgIGRlZmF1bHQ6IFtkZWZhdWx0TG9jYWxlXSxcbiAgICB9LFxuICAgIGJhY2tlbmQ6IHtcbiAgICAgIGxvYWRQYXRoOiBgJHtnZXRQcm9kVXJsfS9sb2NhbGVzL3t7bG5nfX0ve3tuc319Lmpzb25gLFxuICAgIH0sXG4gICAgcmV0dXJuT2JqZWN0czogdHJ1ZSxcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyBub3QgbmVlZGVkIGZvciByZWFjdCEhXG4gICAgfSxcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGkxOG5leHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ })

})