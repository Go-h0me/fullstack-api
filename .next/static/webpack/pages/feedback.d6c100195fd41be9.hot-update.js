"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/feedback",{

/***/ "./pages/feedback/index.js":
/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"D:\\\\fullstack-api\\\\pages\\\\feedback\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction FeedbackPage(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      feedbackData = _useState[0],\n      setFeedbackData = _useState[1];\n\n  function loadFeedbackHandler(id) {\n    fetch(\"/api/feedback/\".concat(id)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setFeedbackData(data.feedback);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [feedbackData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: feedbackData.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 30\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n      children: props.feedbackItems.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n          children: [item.text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            onClick: loadFeedbackHandler.bind(null, item.id),\n            children: \"Show Details\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 50\n          }, _this)]\n        }, item.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, this);\n}\n\n_s(FeedbackPage, \"BwOV5us4vG60hlJRAywhcZUWCo4=\");\n\n_c = FeedbackPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FeedbackPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7O0FBR0EsU0FBU0UsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFBQTs7QUFDekIsa0JBQXdDRiwrQ0FBUSxFQUFoRDtBQUFBLE1BQU9HLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUEsV0FBU0MsbUJBQVQsQ0FBNkJDLEVBQTdCLEVBQWlDO0FBQzdCQyxJQUFBQSxLQUFLLHlCQUFrQkQsRUFBbEIsRUFBTCxDQUE2QkUsSUFBN0IsQ0FBa0MsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FBMUMsRUFBK0RGLElBQS9ELENBQW9FLFVBQUFHLElBQUksRUFBSTtBQUN4RVAsTUFBQUEsZUFBZSxDQUFDTyxJQUFJLENBQUNDLFFBQU4sQ0FBZjtBQUNILEtBRkQ7QUFHSDs7QUFDRCxzQkFDSSw4REFBQywyQ0FBRDtBQUFBLGVBQ0tULFlBQVksaUJBQUk7QUFBQSxnQkFBSUEsWUFBWSxDQUFDVTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRHJCLGVBR0k7QUFBQSxnQkFDS1gsS0FBSyxDQUFDWSxhQUFOLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxJQUFEO0FBQUEsNEJBQ3JCO0FBQUEscUJBQW1CQSxJQUFJLENBQUNDLElBQXhCLGVBQTZCO0FBQVEsbUJBQU8sRUFBRVosbUJBQW1CLENBQUNhLElBQXBCLENBQXlCLElBQXpCLEVBQStCRixJQUFJLENBQUNWLEVBQXBDLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE3QjtBQUFBLFdBQVNVLElBQUksQ0FBQ1YsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURxQjtBQUFBLE9BQXhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBbkJRTDs7S0FBQUE7O0FBZ0NULCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LmpzPzI0YmIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBidWlsZEZlZWRiYWNrUGF0aCwgZXh0cmFjdEZlZWRiYWNrIH0gZnJvbSAnLi4vYXBpL2ZlZWRiYWNrJ1xyXG5cclxuZnVuY3Rpb24gRmVlZGJhY2tQYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBbZmVlZGJhY2tEYXRhLCBzZXRGZWVkYmFja0RhdGFdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGZWVkYmFja0hhbmRsZXIoaWQpIHtcclxuICAgICAgICBmZXRjaChgL2FwaS9mZWVkYmFjay8ke2lkfWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzZXRGZWVkYmFja0RhdGEoZGF0YS5mZWVkYmFjaylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtmZWVkYmFja0RhdGEgJiYgPHA+e2ZlZWRiYWNrRGF0YS5lbWFpbH08L3A+fVxyXG5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmZlZWRiYWNrSXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0udGV4dH08YnV0dG9uIG9uQ2xpY2s9e2xvYWRGZWVkYmFja0hhbmRsZXIuYmluZChudWxsLCBpdGVtLmlkKX0+U2hvdyBEZXRhaWxzPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrSXRlbXM6IGRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja1BhZ2UiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsIkZlZWRiYWNrUGFnZSIsInByb3BzIiwiZmVlZGJhY2tEYXRhIiwic2V0RmVlZGJhY2tEYXRhIiwibG9hZEZlZWRiYWNrSGFuZGxlciIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImZlZWRiYWNrIiwiZW1haWwiLCJmZWVkYmFja0l0ZW1zIiwibWFwIiwiaXRlbSIsInRleHQiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n");

/***/ })

});