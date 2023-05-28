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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n\n\n\n\nconst Skill = (param)=>{\n    let { icon , name , x , y  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        animate: {\n            x: x,\n            y: y\n        },\n        transition: {\n            duration: 1.5\n        },\n        children: [\n            icon,\n            name\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Skill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center\",\n                children: \"Habilidades\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.HtmlIcon, {}, void 0, false, void 0, void 0),\n                        name: \"HTML\",\n                        x: \"-20vw\",\n                        y: \"2vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"CSS\",\n                        x: \"-vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.JsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"JavaScript\",\n                        x: \"20vw\",\n                        y: \"6vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ReactIcon, {}, void 0, false, void 0, void 0),\n                        name: \"ReactJS\",\n                        x: \"0vw\",\n                        y: \"12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.NextJsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"NextJS\",\n                        x: \"-20vw\",\n                        y: \"-15vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ReduxIcon, {}, void 0, false, void 0, void 0),\n                        name: \"Redux\",\n                        x: \"15vw\",\n                        y: \"-12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.NodeIcon, {}, void 0, false, void 0, void 0),\n                        name: \"NodeJS\",\n                        x: \"32vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ExpressJsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"ExpressJS\",\n                        x: \"0vw\",\n                        y: \"-20vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MongoDbIcon, {}, void 0, false, void 0, void 0),\n                        name: \"MongoBD\",\n                        x: \"-5vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.PostgresSQLIcon, {}, void 0, false, void 0, void 0),\n                        name: \"PostgresSQL\",\n                        x: \"-25vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MySQLIcon, {}, void 0, false, void 0, void 0),\n                        name: \"MySQL\",\n                        x: \"30vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"TailwindCSS\",\n                        x: \"-35vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"Skill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDYjtBQVlUO0FBRWpCLE1BQU1ZLFFBQVEsU0FBMEI7UUFBekIsRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFO0lBQ2pDLHFCQUNFLDhEQUFDaEIscURBQVU7UUFDVGtCLFdBQVU7UUFFVkMsWUFBWTtZQUFFQyxPQUFPO1FBQUs7UUFDMUJDLFNBQVM7WUFBRU4sR0FBRztZQUFHQyxHQUFHO1FBQUU7UUFDdEJNLFNBQVM7WUFBRVAsR0FBR0E7WUFBR0MsR0FBR0E7UUFBRTtRQUN0Qk8sWUFBWTtZQUFFQyxVQUFVO1FBQUk7O1lBRTNCWDtZQUNBQzs7Ozs7OztBQUdQO0tBZE1GO0FBZ0JOLE1BQU1hLFNBQVMsSUFBTTtJQUNuQixxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFHUixXQUFVOzBCQUE4Qzs7Ozs7OzBCQUc1RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbEIscURBQVU7d0JBQ1RrQixXQUFVO3dCQUVWQyxZQUFZOzRCQUFFQyxPQUFPO3dCQUFLO2tDQUMzQjs7Ozs7O2tDQUdELDhEQUFDUjt3QkFBTUMsb0JBQU0sOERBQUNYLDRDQUFRQTt3QkFBS1ksTUFBSzt3QkFBT0MsR0FBRTt3QkFBUUMsR0FBRTs7Ozs7O2tDQUNuRCw4REFBQ0o7d0JBQU1FLE1BQUs7d0JBQU1DLEdBQUU7d0JBQU1DLEdBQUU7Ozs7OztrQ0FDNUIsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ1QsMENBQU1BO3dCQUFLVSxNQUFLO3dCQUFhQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQ3RELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNWLDZDQUFTQTt3QkFBS1csTUFBSzt3QkFBVUMsR0FBRTt3QkFBTUMsR0FBRTs7Ozs7O2tDQUNyRCw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDSiw4Q0FBVUE7d0JBQUtLLE1BQUs7d0JBQVNDLEdBQUU7d0JBQVFDLEdBQUU7Ozs7OztrQ0FDdkQsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ0gsNkNBQVNBO3dCQUFLSSxNQUFLO3dCQUFRQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQ3BELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNOLDRDQUFRQTt3QkFBS08sTUFBSzt3QkFBU0MsR0FBRTt3QkFBT0MsR0FBRTs7Ozs7O2tDQUNwRCw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDRixpREFBYUE7d0JBQUtHLE1BQUs7d0JBQVlDLEdBQUU7d0JBQU1DLEdBQUU7Ozs7OztrQ0FDM0QsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ0wsK0NBQVdBO3dCQUFLTSxNQUFLO3dCQUFVQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQ3hELDhEQUFDSjt3QkFDQ0Msb0JBQU0sOERBQUNQLG1EQUFlQTt3QkFDdEJRLE1BQUs7d0JBQ0xDLEdBQUU7d0JBQ0ZDLEdBQUU7Ozs7OztrQ0FFSiw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDUiw2Q0FBU0E7d0JBQUtTLE1BQUs7d0JBQVFDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDcEQsOERBQUNKO3dCQUFNRSxNQUFLO3dCQUFjQyxHQUFFO3dCQUFRQyxHQUFFOzs7Ozs7Ozs7Ozs7OztBQUk5QztNQWxDTVM7QUFvQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzP2UxZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEh0bWxJY29uLFxuICBSZWFjdEljb24sXG4gIEpzSWNvbixcbiAgTXlTUUxJY29uLFxuICBQb3N0Z3Jlc1NRTEljb24sXG4gIE5vZGVJY29uLFxuICBNb25nb0RiSWNvbixcbiAgTmV4dEpzSWNvbixcbiAgUmVkdXhJY29uLFxuICBFeHByZXNzSnNJY29uLFxufSBmcm9tIFwiLi9JY29uc1wiO1xuXG5jb25zdCBTa2lsbCA9ICh7IGljb24sIG5hbWUsIHgsIHkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZCBiZy1kYXJrIHRleHQtbGlnaHRcbiAgICAgICAgICBweS0zIHB4LTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGVcIlxuICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgaW5pdGlhbD17eyB4OiAwLCB5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IHg6IHgsIHk6IHkgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuNSB9fVxuICAgID5cbiAgICAgIHtpY29ufVxuICAgICAge25hbWV9XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtOHhsIG10LTY0IHctZnVsbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICBIYWJpbGlkYWRlc1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1jaXJjdWxhckxpZ2h0XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgYmctZGFyayB0ZXh0LWxpZ2h0XG4gICAgICAgICAgcC04IHNoYWRvdy1kYXJrIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgID5cbiAgICAgICAgICBXZWJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8U2tpbGwgaWNvbj17PEh0bWxJY29uIC8+fSBuYW1lPVwiSFRNTFwiIHg9XCItMjB2d1wiIHk9XCIydndcIiAvPlxuICAgICAgICA8U2tpbGwgbmFtZT1cIkNTU1wiIHg9XCItdndcIiB5PVwiLTEwdndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PEpzSWNvbiAvPn0gbmFtZT1cIkphdmFTY3JpcHRcIiB4PVwiMjB2d1wiIHk9XCI2dndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PFJlYWN0SWNvbiAvPn0gbmFtZT1cIlJlYWN0SlNcIiB4PVwiMHZ3XCIgeT1cIjEydndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PE5leHRKc0ljb24gLz59IG5hbWU9XCJOZXh0SlNcIiB4PVwiLTIwdndcIiB5PVwiLTE1dndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PFJlZHV4SWNvbiAvPn0gbmFtZT1cIlJlZHV4XCIgeD1cIjE1dndcIiB5PVwiLTEydndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PE5vZGVJY29uIC8+fSBuYW1lPVwiTm9kZUpTXCIgeD1cIjMydndcIiB5PVwiLTV2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8RXhwcmVzc0pzSWNvbiAvPn0gbmFtZT1cIkV4cHJlc3NKU1wiIHg9XCIwdndcIiB5PVwiLTIwdndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PE1vbmdvRGJJY29uIC8+fSBuYW1lPVwiTW9uZ29CRFwiIHg9XCItNXZ3XCIgeT1cIi0xMHZ3XCIgLz5cbiAgICAgICAgPFNraWxsXG4gICAgICAgICAgaWNvbj17PFBvc3RncmVzU1FMSWNvbiAvPn1cbiAgICAgICAgICBuYW1lPVwiUG9zdGdyZXNTUUxcIlxuICAgICAgICAgIHg9XCItMjV2d1wiXG4gICAgICAgICAgeT1cIjE4dndcIlxuICAgICAgICAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PE15U1FMSWNvbiAvPn0gbmFtZT1cIk15U1FMXCIgeD1cIjMwdndcIiB5PVwiMTh2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBuYW1lPVwiVGFpbHdpbmRDU1NcIiB4PVwiLTM1dndcIiB5PVwiLTV2d1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxscztcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsIkh0bWxJY29uIiwiUmVhY3RJY29uIiwiSnNJY29uIiwiTXlTUUxJY29uIiwiUG9zdGdyZXNTUUxJY29uIiwiTm9kZUljb24iLCJNb25nb0RiSWNvbiIsIk5leHRKc0ljb24iLCJSZWR1eEljb24iLCJFeHByZXNzSnNJY29uIiwiU2tpbGwiLCJpY29uIiwibmFtZSIsIngiLCJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwid2hpbGVIb3ZlciIsInNjYWxlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJTa2lsbHMiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});