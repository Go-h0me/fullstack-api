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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"D:\\\\fullstack-api\\\\pages\\\\feedback\\\\index.js\";\n\n\n\nfunction FeedbackPage(props) {\n  var _this = this;\n\n  function loadFeedbackHandler(id) {\n    fetch(\"/api/\".concat(id)).then(function (response) {\n      return response.json();\n    }).then(function (data) {});\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n    children: props.feedbackItems.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n        children: [item.text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: loadFeedbackHandler.bind(null, item.id),\n          children: \"Show Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 42\n        }, _this)]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 12\n  }, this);\n}\n\n_c = FeedbackPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FeedbackPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7OztBQUdBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBR3pCLFdBQVNDLG1CQUFULENBQTZCQyxFQUE3QixFQUFpQztBQUM3QkMsSUFBQUEsS0FBSyxnQkFBU0QsRUFBVCxFQUFMLENBQXNCRSxJQUF0QixDQUEyQixVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUFuQyxFQUF3REYsSUFBeEQsQ0FBNkQsVUFBQUcsSUFBSSxFQUFJLENBRXBFLENBRkQ7QUFHSDs7QUFHRCxzQkFBTztBQUFBLGNBQ0ZQLEtBQUssQ0FBQ1EsYUFBTixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRDtBQUFBLDBCQUNyQjtBQUFBLG1CQUFtQkEsSUFBSSxDQUFDQyxJQUF4QixlQUE2QjtBQUFRLGlCQUFPLEVBQUVWLG1CQUFtQixDQUFDVyxJQUFwQixDQUF5QixJQUF6QixFQUE4QkYsSUFBSSxDQUFDUixFQUFuQyxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBN0I7QUFBQSxTQUFTUSxJQUFJLENBQUNSLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURxQjtBQUFBLEtBQXhCO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBS0g7O0tBZlFIOztBQTRCVCwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcz8yNGJiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYnVpbGRGZWVkYmFja1BhdGgsIGV4dHJhY3RGZWVkYmFjayB9IGZyb20gJy4uL2FwaS9mZWVkYmFjaydcclxuXHJcbmZ1bmN0aW9uIEZlZWRiYWNrUGFnZShwcm9wcykge1xyXG5cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gbG9hZEZlZWRiYWNrSGFuZGxlcihpZCkge1xyXG4gICAgICAgIGZldGNoKGAvYXBpLyR7aWR9YCAgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuXHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiA8dWw+XHJcbiAgICAgICAge3Byb3BzLmZlZWRiYWNrSXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PntpdGVtLnRleHR9PGJ1dHRvbiBvbkNsaWNrPXtsb2FkRmVlZGJhY2tIYW5kbGVyLmJpbmQobnVsbCxpdGVtLmlkKX0+U2hvdyBEZXRhaWxzPC9idXR0b24+PC9saT5cclxuICAgICAgICApKX1cclxuICAgIDwvdWw+XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrSXRlbXM6IGRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja1BhZ2UiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGZWVkYmFja1BhZ2UiLCJwcm9wcyIsImxvYWRGZWVkYmFja0hhbmRsZXIiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJmZWVkYmFja0l0ZW1zIiwibWFwIiwiaXRlbSIsInRleHQiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n");

/***/ })

});