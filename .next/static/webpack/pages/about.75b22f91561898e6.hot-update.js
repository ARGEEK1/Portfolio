"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n\n\n\n\nconst Skill = (param)=>{\n    let { icon , name , x , y  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        animate: {\n            x: x,\n            y: y\n        },\n        transition: {\n            duration: 1.5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"icon\", {}, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 15,\n                columnNumber: 6\n            }, undefined),\n            \"  \",\n            name\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Skill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center\",\n                children: \"Habilidades\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.HtmlIcon, {}, void 0, false, void 0, void 0),\n                        name: \"HTML\",\n                        x: \"-20vw\",\n                        y: \"2vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"CSS\",\n                        x: \"-5vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"JavaScript\",\n                        x: \"20vw\",\n                        y: \"6vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"ReactJS\",\n                        x: \"0vw\",\n                        y: \"12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"NextJS\",\n                        x: \"-20vw\",\n                        y: \"-15vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"Redux\",\n                        x: \"15vw\",\n                        y: \"-12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"NodeJS\",\n                        x: \"32vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"ExpressJS\",\n                        x: \"0vw\",\n                        y: \"-20vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"MongoBD\",\n                        x: \"-5vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"PostgresSQL\",\n                        x: \"-25vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"MySQL\",\n                        x: \"30vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"TailwindCSS\",\n                        x: \"-35vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"Skill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDYjtBQUNTO0FBRW5DLE1BQU1HLFFBQVEsU0FBeUI7UUFBeEIsRUFBQ0MsS0FBSSxFQUFFQyxLQUFJLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFO0lBQ2hDLHFCQUNFLDhEQUFDUCxxREFBVTtRQUNUUyxXQUFVO1FBRVZDLFlBQVk7WUFBRUMsT0FBTztRQUFLO1FBQzFCQyxTQUFTO1lBQUVOLEdBQUc7WUFBR0MsR0FBRztRQUFFO1FBQ3RCTSxTQUFTO1lBQUNQLEdBQUVBO1lBQUdDLEdBQUVBO1FBQUM7UUFDbEJPLFlBQVk7WUFBQ0MsVUFBVTtRQUFHOzswQkFFM0IsOERBQUNYOzs7OztZQUFPO1lBQUdDOzs7Ozs7O0FBR2hCO0tBYk1GO0FBZU4sTUFBTWEsU0FBUyxJQUFNO0lBQ25CLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUdSLFdBQVU7MEJBQThDOzs7Ozs7MEJBRzVELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNULHFEQUFVO3dCQUNUUyxXQUFVO3dCQUVWQyxZQUFZOzRCQUFFQyxPQUFPO3dCQUFLO2tDQUMzQjs7Ozs7O2tDQUdELDhEQUFDUjt3QkFBTUMsb0JBQU0sOERBQUNGLDRDQUFRQTt3QkFBS0csTUFBSzt3QkFBT0MsR0FBRTt3QkFBUUMsR0FBRTs7Ozs7O2tDQUNuRCw4REFBQ0o7d0JBQU1FLE1BQUs7d0JBQU1DLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDN0IsOERBQUNKO3dCQUFNRSxNQUFLO3dCQUFhQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQ3BDLDhEQUFDSjt3QkFBTUUsTUFBSzt3QkFBVUMsR0FBRTt3QkFBTUMsR0FBRTs7Ozs7O2tDQUNoQyw4REFBQ0o7d0JBQU1FLE1BQUs7d0JBQVNDLEdBQUU7d0JBQVFDLEdBQUU7Ozs7OztrQ0FDakMsOERBQUNKO3dCQUFNRSxNQUFLO3dCQUFRQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQy9CLDhEQUFDSjt3QkFBTUUsTUFBSzt3QkFBU0MsR0FBRTt3QkFBT0MsR0FBRTs7Ozs7O2tDQUNoQyw4REFBQ0o7d0JBQU1FLE1BQUs7d0JBQVlDLEdBQUU7d0JBQU1DLEdBQUU7Ozs7OztrQ0FDbEMsOERBQUNKO3dCQUFNRSxNQUFLO3dCQUFVQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQ2pDLDhEQUFDSjt3QkFBTUUsTUFBSzt3QkFBY0MsR0FBRTt3QkFBUUMsR0FBRTs7Ozs7O2tDQUN0Qyw4REFBQ0o7d0JBQU1FLE1BQUs7d0JBQVFDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDL0IsOERBQUNKO3dCQUFNRSxNQUFLO3dCQUFjQyxHQUFFO3dCQUFRQyxHQUFFOzs7Ozs7Ozs7Ozs7OztBQUk5QztNQTdCTVM7QUErQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzP2UxZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEh0bWxJY29uIH0gZnJvbSBcIi4vSWNvbnNcIjtcblxuY29uc3QgU2tpbGwgPSAoe2ljb24sIG5hbWUsIHgsIHkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZCBiZy1kYXJrIHRleHQtbGlnaHRcbiAgICAgICAgICBweS0zIHB4LTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGVcIlxuICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgaW5pdGlhbD17eyB4OiAwLCB5OiAwIH19XG4gICAgICBhbmltYXRlPXt7eDp4LCB5Onl9fVxuICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAxLjV9fVxuICAgID5cbiAgICB7PGljb24vPn0gIHtuYW1lfVxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNraWxscyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTh4bCBtdC02NCB3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgSGFiaWxpZGFkZXNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctY2lyY3VsYXJMaWdodFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodFxuICAgICAgICAgIHAtOCBzaGFkb3ctZGFyayBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgV2ViXG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPFNraWxsIGljb249ezxIdG1sSWNvbiAvPn0gbmFtZT1cIkhUTUxcIiB4PVwiLTIwdndcIiB5PVwiMnZ3XCIgLz5cbiAgICAgICAgPFNraWxsIG5hbWU9XCJDU1NcIiB4PVwiLTV2d1wiIHk9XCItMTB2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBuYW1lPVwiSmF2YVNjcmlwdFwiIHg9XCIyMHZ3XCIgeT1cIjZ2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBuYW1lPVwiUmVhY3RKU1wiIHg9XCIwdndcIiB5PVwiMTJ2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBuYW1lPVwiTmV4dEpTXCIgeD1cIi0yMHZ3XCIgeT1cIi0xNXZ3XCIgLz5cbiAgICAgICAgPFNraWxsIG5hbWU9XCJSZWR1eFwiIHg9XCIxNXZ3XCIgeT1cIi0xMnZ3XCIgLz5cbiAgICAgICAgPFNraWxsIG5hbWU9XCJOb2RlSlNcIiB4PVwiMzJ2d1wiIHk9XCItNXZ3XCIgLz5cbiAgICAgICAgPFNraWxsIG5hbWU9XCJFeHByZXNzSlNcIiB4PVwiMHZ3XCIgeT1cIi0yMHZ3XCIgLz5cbiAgICAgICAgPFNraWxsIG5hbWU9XCJNb25nb0JEXCIgeD1cIi01dndcIiB5PVwiLTEwdndcIiAvPlxuICAgICAgICA8U2tpbGwgbmFtZT1cIlBvc3RncmVzU1FMXCIgeD1cIi0yNXZ3XCIgeT1cIjE4dndcIiAvPlxuICAgICAgICA8U2tpbGwgbmFtZT1cIk15U1FMXCIgeD1cIjMwdndcIiB5PVwiMTh2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBuYW1lPVwiVGFpbHdpbmRDU1NcIiB4PVwiLTM1dndcIiB5PVwiLTV2d1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxscztcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsIkh0bWxJY29uIiwiU2tpbGwiLCJpY29uIiwibmFtZSIsIngiLCJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwid2hpbGVIb3ZlciIsInNjYWxlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJTa2lsbHMiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});