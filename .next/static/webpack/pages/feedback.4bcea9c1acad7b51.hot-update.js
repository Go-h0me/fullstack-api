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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"D:\\\\fullstack-api\\\\pages\\\\feedback\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction FeedbackPage(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      feedbackData = _useState[0],\n      setFeedbackData = _useState[1];\n\n  function loadFeedbackHandler(id) {\n    fetch(\"/api/\".concat(id)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setFeedbackData(data.feedback);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n    children: props.feedbackItems.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n        children: [item.text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: loadFeedbackHandler.bind(null, item.id),\n          children: \"Show Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 42\n        }, _this)]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 12\n  }, this);\n}\n\n_s(FeedbackPage, \"BwOV5us4vG60hlJRAywhcZUWCo4=\");\n\n_c = FeedbackPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FeedbackPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7O0FBR0EsU0FBU0UsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFBQTs7QUFDekIsa0JBQXdDRiwrQ0FBUSxFQUFoRDtBQUFBLE1BQU9HLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUEsV0FBU0MsbUJBQVQsQ0FBNkJDLEVBQTdCLEVBQWlDO0FBQzdCQyxJQUFBQSxLQUFLLGdCQUFTRCxFQUFULEVBQUwsQ0FBb0JFLElBQXBCLENBQXlCLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBQWpDLEVBQXNERixJQUF0RCxDQUEyRCxVQUFBRyxJQUFJLEVBQUk7QUFDL0RQLE1BQUFBLGVBQWUsQ0FBQ08sSUFBSSxDQUFDQyxRQUFOLENBQWY7QUFDSCxLQUZEO0FBR0g7O0FBR0Qsc0JBQU87QUFBQSxjQUNGVixLQUFLLENBQUNXLGFBQU4sQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLElBQUQ7QUFBQSwwQkFDckI7QUFBQSxtQkFBbUJBLElBQUksQ0FBQ0MsSUFBeEIsZUFBNkI7QUFBUSxpQkFBTyxFQUFFWCxtQkFBbUIsQ0FBQ1ksSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JGLElBQUksQ0FBQ1QsRUFBcEMsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTdCO0FBQUEsU0FBU1MsSUFBSSxDQUFDVCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcUI7QUFBQSxLQUF4QjtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIOztHQWZRTDs7S0FBQUE7O0FBNEJULCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LmpzPzI0YmIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEZyYWdtZW50LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGJ1aWxkRmVlZGJhY2tQYXRoLCBleHRyYWN0RmVlZGJhY2sgfSBmcm9tICcuLi9hcGkvZmVlZGJhY2snXHJcblxyXG5mdW5jdGlvbiBGZWVkYmFja1BhZ2UocHJvcHMpIHtcclxuICAgIGNvbnN0IFtmZWVkYmFja0RhdGEsIHNldEZlZWRiYWNrRGF0YV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZlZWRiYWNrSGFuZGxlcihpZCkge1xyXG4gICAgICAgIGZldGNoKGAvYXBpLyR7aWR9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZlZWRiYWNrRGF0YShkYXRhLmZlZWRiYWNrKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiA8dWw+XHJcbiAgICAgICAge3Byb3BzLmZlZWRiYWNrSXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PntpdGVtLnRleHR9PGJ1dHRvbiBvbkNsaWNrPXtsb2FkRmVlZGJhY2tIYW5kbGVyLmJpbmQobnVsbCwgaXRlbS5pZCl9PlNob3cgRGV0YWlsczwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKCk7XHJcbiAgICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBmZWVkYmFja0l0ZW1zOiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2tQYWdlIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlU3RhdGUiLCJGZWVkYmFja1BhZ2UiLCJwcm9wcyIsImZlZWRiYWNrRGF0YSIsInNldEZlZWRiYWNrRGF0YSIsImxvYWRGZWVkYmFja0hhbmRsZXIiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJmZWVkYmFjayIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwidGV4dCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n");

/***/ })

});