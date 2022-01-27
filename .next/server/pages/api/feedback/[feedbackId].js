"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/feedback/[feedbackId]";
exports.ids = ["pages/api/feedback/[feedbackId]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./pages/api/feedback/[feedbackId].js":
/*!********************************************!*\
  !*** ./pages/api/feedback/[feedbackId].js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./pages/api/feedback/index.js\");\n\n\nfunction handler(req, res) {\n  if (req.method === 'DELETE') {}\n\n  const feedbackId = req.query.feedbackId;\n  const filePath = (0,___WEBPACK_IMPORTED_MODULE_0__.buildFeedbackPath)();\n  const feedbackData = (0,___WEBPACK_IMPORTED_MODULE_0__.extractFeedback)(filePath);\n  const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId);\n  res.status(200).json({\n    feedback: selectedFeedback\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZGJhY2svW2ZlZWRiYWNrSWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBR0EsU0FBU0UsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3ZCLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLFFBQWxCLEVBQTRCLENBRTNCOztBQUVELFFBQU1DLFVBQVUsR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVVELFVBQTdCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHUixvREFBaUIsRUFBbEM7QUFDQSxRQUFNUyxZQUFZLEdBQUdSLGtEQUFlLENBQUNPLFFBQUQsQ0FBcEM7QUFDQSxRQUFNRSxnQkFBZ0IsR0FBR0QsWUFBWSxDQUFDRSxJQUFiLENBQWtCQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsRUFBVCxLQUFnQlAsVUFBOUMsQ0FBekI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUgsSUFBQUEsUUFBUSxFQUFFRjtBQUFaLEdBQXJCO0FBQ0g7O0FBR0QsaUVBQWVSLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2stYXBpLy4vcGFnZXMvYXBpL2ZlZWRiYWNrL1tmZWVkYmFja0lkXS5qcz8zNjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ1aWxkRmVlZGJhY2tQYXRoLCBleHRyYWN0RmVlZGJhY2sgfSBmcm9tICcuJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZlZWRiYWNrSWQgPSByZXEucXVlcnkuZmVlZGJhY2tJZDtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcclxuICAgIGNvbnN0IGZlZWRiYWNrRGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZEZlZWRiYWNrID0gZmVlZGJhY2tEYXRhLmZpbmQoZmVlZGJhY2sgPT4gZmVlZGJhY2suaWQgPT09IGZlZWRiYWNrSWQpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBmZWVkYmFjazogc2VsZWN0ZWRGZWVkYmFja30pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiJdLCJuYW1lcyI6WyJidWlsZEZlZWRiYWNrUGF0aCIsImV4dHJhY3RGZWVkYmFjayIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmZWVkYmFja0lkIiwicXVlcnkiLCJmaWxlUGF0aCIsImZlZWRiYWNrRGF0YSIsInNlbGVjdGVkRmVlZGJhY2siLCJmaW5kIiwiZmVlZGJhY2siLCJpZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/feedback/[feedbackId].js\n");

/***/ }),

/***/ "./pages/api/feedback/index.js":
/*!*************************************!*\
  !*** ./pages/api/feedback/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildFeedbackPath\": () => (/* binding */ buildFeedbackPath),\n/* harmony export */   \"extractFeedback\": () => (/* binding */ extractFeedback),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildFeedbackPath() {\n  return path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'feedback.json');\n}\nfunction extractFeedback(filePath) {\n  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n  const data = JSON.parse(fileData);\n  return data;\n}\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    const email = req.body.email;\n    const feedbackText = req.body.text;\n    const newFeedback = {\n      id: new Date().toISOString(),\n      email: email,\n      text: feedbackText\n    }; // store that in a data base or in a file\n\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    data.push(newFeedback);\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n    res.status(201).json({\n      message: 'Success!',\n      feedback: newFeedback\n    });\n  } else {\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    res.status(200).json({\n      feedback: data\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZGJhY2svaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxTQUFTRSxpQkFBVCxHQUE2QjtBQUNoQyxTQUFPRCxnREFBQSxDQUFVRyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixFQUFpQyxlQUFqQyxDQUFQO0FBQ0g7QUFFTSxTQUFTQyxlQUFULENBQXlCQyxRQUF6QixFQUFtQztBQUN0QyxRQUFNQyxRQUFRLEdBQUdSLHNEQUFBLENBQWdCTyxRQUFoQixDQUFqQjtBQUNBLFFBQU1HLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFFBQVgsQ0FBYjtBQUNBLFNBQU9FLElBQVA7QUFDSDs7QUFFRCxTQUFTRyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDdkIsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDeEIsVUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsS0FBdkI7QUFDQyxVQUFNRSxZQUFZLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRSxJQUE5QjtBQUVBLFVBQU1DLFdBQVcsR0FBRztBQUNoQkMsTUFBQUEsRUFBRSxFQUFFLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQURZO0FBRWhCUCxNQUFBQSxLQUFLLEVBQUVBLEtBRlM7QUFHaEJHLE1BQUFBLElBQUksRUFBRUQ7QUFIVSxLQUFwQixDQUp1QixDQVN2Qjs7QUFDQSxVQUFNWixRQUFRLEdBQUdMLGlCQUFpQixFQUFsQztBQUNBLFVBQU1RLElBQUksR0FBR0osZUFBZSxDQUFDQyxRQUFELENBQTVCO0FBQ0FHLElBQUFBLElBQUksQ0FBQ2UsSUFBTCxDQUFVSixXQUFWO0FBQ0FyQixJQUFBQSx1REFBQSxDQUFpQk8sUUFBakIsRUFBMkJJLElBQUksQ0FBQ2dCLFNBQUwsQ0FBZWpCLElBQWYsQ0FBM0I7QUFDQUssSUFBQUEsR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFLFVBQVg7QUFBdUJDLE1BQUFBLFFBQVEsRUFBRVY7QUFBakMsS0FBckI7QUFDSCxHQWZELE1BZU87QUFDSCxVQUFNZCxRQUFRLEdBQUdMLGlCQUFpQixFQUFsQztBQUNBLFVBQU1RLElBQUksR0FBR0osZUFBZSxDQUFDQyxRQUFELENBQTVCO0FBQ0FRLElBQUFBLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVFLE1BQUFBLFFBQVEsRUFBRXJCO0FBQVosS0FBckI7QUFDSDtBQUNKOztBQUVELGlFQUFlRyxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVsbHN0YWNrLWFwaS8uL3BhZ2VzL2FwaS9mZWVkYmFjay9pbmRleC5qcz8wNDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRmVlZGJhY2tQYXRoKCkge1xyXG4gICAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdmZWVkYmFjay5qc29uJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpIHtcclxuICAgIGNvbnN0IGZpbGVEYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVEYXRhKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcclxuICAgICAgICBjb25zdCBmZWVkYmFja1RleHQgPSByZXEuYm9keS50ZXh0O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdGZWVkYmFjayA9IHtcclxuICAgICAgICAgICAgaWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICB0ZXh0OiBmZWVkYmFja1RleHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBzdG9yZSB0aGF0IGluIGEgZGF0YSBiYXNlIG9yIGluIGEgZmlsZVxyXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpXHJcbiAgICAgICAgZGF0YS5wdXNoKG5ld0ZlZWRiYWNrKTtcclxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnU3VjY2VzcyEnLCBmZWVkYmFjazogbmV3RmVlZGJhY2sgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGZlZWRiYWNrOiBkYXRhIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJidWlsZEZlZWRiYWNrUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZXh0cmFjdEZlZWRiYWNrIiwiZmlsZVBhdGgiLCJmaWxlRGF0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJib2R5IiwiZmVlZGJhY2tUZXh0IiwidGV4dCIsIm5ld0ZlZWRiYWNrIiwiaWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmVlZGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/feedback/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/feedback/[feedbackId].js"));
module.exports = __webpack_exports__;

})();