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
exports.id = "pages/api/feedback";
exports.ids = ["pages/api/feedback"];
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

/***/ "./pages/api/feedback.js?7b9b":
/*!*******************************!*\
  !*** ./pages/api/feedback.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildFeedbackPath\": () => (/* binding */ buildFeedbackPath),\n/* harmony export */   \"extractFeedback\": () => (/* binding */ extractFeedback),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildFeedbackPath() {\n  return path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'feedback.json');\n}\nfunction extractFeedback(filePath) {\n  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n  const data = JSON.parse(fileData);\n  return data;\n}\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    const email = req.body.email;\n    const feedbackText = req.body.text;\n    const newFeedback = {\n      id: new Date().toISOString(),\n      email: email,\n      text: feedbackText\n    }; // store that in a data base or in a file\n\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    data.push(newFeedback);\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n    res.status(201).json({\n      message: 'Success!',\n      feedback: newFeedback\n    });\n  } else {\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    res.status(200).json({\n      feedback: data\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZGJhY2suanM/N2I5Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLFNBQVNFLGlCQUFULEdBQTZCO0FBQ2hDLFNBQU9ELGdEQUFBLENBQVVHLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE1BQXpCLEVBQWlDLGVBQWpDLENBQVA7QUFDSDtBQUVNLFNBQVNDLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ3RDLFFBQU1DLFFBQVEsR0FBR1Isc0RBQUEsQ0FBZ0JPLFFBQWhCLENBQWpCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osUUFBWCxDQUFiO0FBQ0EsU0FBT0UsSUFBUDtBQUNIOztBQUVELFNBQVNHLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN2QixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN4QixVQUFNQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSixDQUFTRCxLQUF2QjtBQUNDLFVBQU1FLFlBQVksR0FBR0wsR0FBRyxDQUFDSSxJQUFKLENBQVNFLElBQTlCO0FBRUEsVUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxNQUFBQSxFQUFFLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBRFk7QUFFaEJQLE1BQUFBLEtBQUssRUFBRUEsS0FGUztBQUdoQkcsTUFBQUEsSUFBSSxFQUFFRDtBQUhVLEtBQXBCLENBSnVCLENBU3ZCOztBQUNBLFVBQU1aLFFBQVEsR0FBR0wsaUJBQWlCLEVBQWxDO0FBQ0EsVUFBTVEsSUFBSSxHQUFHSixlQUFlLENBQUNDLFFBQUQsQ0FBNUI7QUFDQUcsSUFBQUEsSUFBSSxDQUFDZSxJQUFMLENBQVVKLFdBQVY7QUFDQXJCLElBQUFBLHVEQUFBLENBQWlCTyxRQUFqQixFQUEyQkksSUFBSSxDQUFDZ0IsU0FBTCxDQUFlakIsSUFBZixDQUEzQjtBQUNBSyxJQUFBQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUUsVUFBWDtBQUF1QkMsTUFBQUEsUUFBUSxFQUFFVjtBQUFqQyxLQUFyQjtBQUNILEdBZkQsTUFlTztBQUNILFVBQU1kLFFBQVEsR0FBR0wsaUJBQWlCLEVBQWxDO0FBQ0EsVUFBTVEsSUFBSSxHQUFHSixlQUFlLENBQUNDLFFBQUQsQ0FBNUI7QUFDQVEsSUFBQUEsR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsTUFBQUEsUUFBUSxFQUFFckI7QUFBWixLQUFyQjtBQUNIO0FBQ0o7O0FBRUQsaUVBQWVHLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2stYXBpLy4vcGFnZXMvYXBpL2ZlZWRiYWNrLmpzP2Y3YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGZWVkYmFja1BhdGgoKSB7XHJcbiAgICByZXR1cm4gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ2ZlZWRiYWNrLmpzb24nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCkge1xyXG4gICAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZmlsZURhdGEpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xyXG4gICAgICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IHJlcS5ib2R5LnRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0ZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHRleHQ6IGZlZWRiYWNrVGV4dCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHN0b3JlIHRoYXQgaW4gYSBkYXRhIGJhc2Ugb3IgaW4gYSBmaWxlXHJcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aClcclxuICAgICAgICBkYXRhLnB1c2gobmV3RmVlZGJhY2spO1xyXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdTdWNjZXNzIScsIGZlZWRiYWNrOiBuZXdGZWVkYmFjayB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKClcclxuICAgICAgICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmVlZGJhY2s6IGRhdGEgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImZzIiwicGF0aCIsImJ1aWxkRmVlZGJhY2tQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleHRyYWN0RmVlZGJhY2siLCJmaWxlUGF0aCIsImZpbGVEYXRhIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsImJvZHkiLCJmZWVkYmFja1RleHQiLCJ0ZXh0IiwibmV3RmVlZGJhY2siLCJpZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInB1c2giLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJmZWVkYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/feedback.js?7b9b\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/feedback.js?7b9b"));
module.exports = __webpack_exports__;

})();