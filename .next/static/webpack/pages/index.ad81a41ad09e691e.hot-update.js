"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst quote = {\n    initial: {\n        opacity: 0\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5\n        }\n    }\n};\nconst singelWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text , className =\"\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"inline-block w-full text-dark font-bold capitalize text-8xl \".concat(className),\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singelWord,\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, \"\".concat(word, \"-\").concat(index), true, {\n                    fileName: \"/Users/user/Desktop/Portfolio/src/components/AnimatedText.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/user/Desktop/Portfolio/src/components/AnimatedText.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/AnimatedText.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNiO0FBRTFCLE1BQU1FLFFBQVE7SUFDWkMsU0FBUztRQUNQQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUNQRCxTQUFTO1FBQ1RFLFlBQVk7WUFDVkMsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLGFBQWE7SUFDakJMLFNBQVM7UUFDUEMsU0FBUztRQUNUSyxHQUFHO0lBQ0w7SUFDQUosU0FBUztRQUNQRCxTQUFTO1FBQ1RLLEdBQUc7UUFDSEgsWUFBWTtZQUNWSSxVQUFVO1FBQ1o7SUFDRjtBQUNGO0FBRUEsTUFBTUMsZUFBZSxTQUE4QjtRQUE3QixFQUFFQyxLQUFJLEVBQUVDLFdBQVksR0FBRSxFQUFFO0lBQzVDLHFCQUNFLDhEQUFDQztRQUFJRCxXQUFVO2tCQUNiLDRFQUFDYixvREFBUztZQUNSYSxXQUFXLCtEQUF5RSxPQUFWQTtZQUMxRUcsVUFBVWQ7WUFDVkMsU0FBUTtZQUNSRSxTQUFRO3NCQUVQTyxLQUFLSyxLQUFLLENBQUMsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUMxQiw4REFBQ3BCLHNEQUFXO29CQUNaYSxXQUFVO29CQUNWRyxVQUFVUjs7d0JBRVBXO3dCQUFLOzttQkFKVSxHQUFXQyxPQUFSRCxNQUFLLEtBQVMsT0FBTkM7Ozs7Ozs7Ozs7Ozs7OztBQVV2QztLQXBCTVQ7QUFzQk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0LmpzPzRjMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgcXVvdGUgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAwLFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMC41LFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBzaW5nZWxXb3JkID0ge1xuICBpbml0aWFsOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB5OiA1MCxcbiAgfSxcbiAgYW5pbWF0ZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgeTogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgQW5pbWF0ZWRUZXh0ID0gKHsgdGV4dCwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPG1vdGlvbi5oMVxuICAgICAgICBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtZGFyayBmb250LWJvbGQgY2FwaXRhbGl6ZSB0ZXh0LTh4bCAke2NsYXNzTmFtZX1gfVxuICAgICAgICB2YXJpYW50cz17cXVvdGV9XG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgPlxuICAgICAgICB7dGV4dC5zcGxpdChcIiBcIikubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uc3BhbiBrZXk9e2Ake3dvcmR9LSR7aW5kZXh9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgIHZhcmlhbnRzPXtzaW5nZWxXb3JkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt3b3JkfSZuYnNwO1xuICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9tb3Rpb24uaDE+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZFRleHQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJxdW90ZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInNpbmdlbFdvcmQiLCJ5IiwiZHVyYXRpb24iLCJBbmltYXRlZFRleHQiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ2YXJpYW50cyIsInNwbGl0IiwibWFwIiwid29yZCIsImluZGV4Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ })

});