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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n\n\n\n\nconst Skill = (param)=>{\n    let { icon , name , x , y  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        whileInView: {\n            x: x,\n            y: y,\n            transition: {\n                duration: 1.5\n            }\n        },\n        viewport: {\n            once: true\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-1\",\n                children: icon\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            name\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Skill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32\",\n                children: \"Habilidades\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.HtmlIcon, {}, void 0, false, void 0, void 0),\n                        name: \"HTML\",\n                        x: \"-20vw\",\n                        y: \"2vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.CssIcom, {}, void 0, false, void 0, void 0),\n                        name: \"CSS\",\n                        x: \"1vw\",\n                        y: \"22vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.JsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"JavaScript\",\n                        x: \"20vw\",\n                        y: \"6vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ReactIcon, {}, void 0, false, void 0, void 0),\n                        name: \"ReactJS\",\n                        x: \"0vw\",\n                        y: \"10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.NextJsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"NextJS\",\n                        x: \"-20vw\",\n                        y: \"-15vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ReduxIcon, {}, void 0, false, void 0, void 0),\n                        name: \"Redux\",\n                        x: \"15vw\",\n                        y: \"-12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.NodeIcon, {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, void 0, void 0),\n                        name: \"NodeJS\",\n                        x: \"32vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ExpressJsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"ExpressJS\",\n                        x: \"0vw\",\n                        y: \"-22vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MongoDbIcon, {}, void 0, false, void 0, void 0),\n                        name: \"MongoBD\",\n                        x: \"-5vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.PostgresSQLIcon, {}, void 0, false, void 0, void 0),\n                        name: \"PostgresSQL\",\n                        x: \"-25vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MySQLIcon, {}, void 0, false, void 0, void 0),\n                        name: \"MySQL\",\n                        x: \"30vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.TailwindIcon, {}, void 0, false, void 0, void 0),\n                        name: \"TailwindCSS\",\n                        x: \"-35vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"Skill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDYjtBQWNUO0FBRWpCLE1BQU1jLFFBQVEsU0FBMEI7UUFBekIsRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFO0lBQ2pDLHFCQUNFLDhEQUFDbEIscURBQVU7UUFDVG9CLFdBQVU7UUFHVkMsWUFBWTtZQUFFQyxPQUFPO1FBQUs7UUFDMUJDLFNBQVM7WUFBRU4sR0FBRztZQUFHQyxHQUFHO1FBQUU7UUFDdEJNLGFBQWE7WUFBRVAsR0FBR0E7WUFBR0MsR0FBR0E7WUFBR08sWUFBWTtnQkFBRUMsVUFBVTtZQUFJO1FBQUU7UUFDekRDLFVBQVU7WUFBRUMsTUFBTSxJQUFJO1FBQUM7OzBCQUV2Qiw4REFBQ1Q7Z0JBQUlDLFdBQVU7MEJBQVFMOzs7Ozs7WUFDdEJDOzs7Ozs7O0FBR1A7S0FmTUY7QUFpQk4sTUFBTWUsU0FBUyxJQUFNO0lBQ25CLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUdWLFdBQVU7MEJBQW1FOzs7Ozs7MEJBR2pGLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNwQixxREFBVTt3QkFDVG9CLFdBQVU7d0JBRVZDLFlBQVk7NEJBQUVDLE9BQU87d0JBQUs7a0NBQzNCOzs7Ozs7a0NBR0QsOERBQUNSO3dCQUFNQyxvQkFBTSw4REFBQ2IsNENBQVFBO3dCQUFLYyxNQUFLO3dCQUFPQyxHQUFFO3dCQUFRQyxHQUFFOzs7Ozs7a0NBQ25ELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNGLDJDQUFPQTt3QkFBS0csTUFBSzt3QkFBTUMsR0FBRTt3QkFBTUMsR0FBRTs7Ozs7O2tDQUMvQyw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDWCwwQ0FBTUE7d0JBQUtZLE1BQUs7d0JBQWFDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDdEQsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ1osNkNBQVNBO3dCQUFLYSxNQUFLO3dCQUFVQyxHQUFFO3dCQUFNQyxHQUFFOzs7Ozs7a0NBQ3JELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNOLDhDQUFVQTt3QkFBS08sTUFBSzt3QkFBU0MsR0FBRTt3QkFBUUMsR0FBRTs7Ozs7O2tDQUN2RCw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDTCw2Q0FBU0E7d0JBQUtNLE1BQUs7d0JBQVFDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDcEQsOERBQUNKO3dCQUNDQyxvQkFBTSw4REFBQ1IsNENBQVFBOzRCQUFDYSxXQUFXOzt3QkFDM0JKLE1BQUs7d0JBQ0xDLEdBQUU7d0JBQ0ZDLEdBQUU7Ozs7OztrQ0FFSiw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDSixpREFBYUE7d0JBQUtLLE1BQUs7d0JBQVlDLEdBQUU7d0JBQU1DLEdBQUU7Ozs7OztrQ0FDM0QsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ1AsK0NBQVdBO3dCQUFLUSxNQUFLO3dCQUFVQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQ3hELDhEQUFDSjt3QkFDQ0Msb0JBQU0sOERBQUNULG1EQUFlQTt3QkFDdEJVLE1BQUs7d0JBQ0xDLEdBQUU7d0JBQ0ZDLEdBQUU7Ozs7OztrQ0FFSiw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDViw2Q0FBU0E7d0JBQUtXLE1BQUs7d0JBQVFDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDcEQsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ0gsZ0RBQVlBO3dCQUFLSSxNQUFLO3dCQUFjQyxHQUFFO3dCQUFRQyxHQUFFOzs7Ozs7Ozs7Ozs7OztBQUl0RTtNQXZDTVc7QUF5Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzP2UxZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEh0bWxJY29uLFxuICBSZWFjdEljb24sXG4gIEpzSWNvbixcbiAgTXlTUUxJY29uLFxuICBQb3N0Z3Jlc1NRTEljb24sXG4gIE5vZGVJY29uLFxuICBNb25nb0RiSWNvbixcbiAgTmV4dEpzSWNvbixcbiAgUmVkdXhJY29uLFxuICBFeHByZXNzSnNJY29uLFxuICBUYWlsd2luZEljb24sXG4gIENzc0ljb20sXG59IGZyb20gXCIuL0ljb25zXCI7XG5cbmNvbnN0IFNraWxsID0gKHsgaWNvbiwgbmFtZSwgeCwgeSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodFxuICAgICAgICAgIHB5LTMgcHgtNiBzaGFkb3ctZGFyayBjdXJzb3ItcG9pbnRlciBhYnNvbHV0ZSBkYXJrOmJnLWxpZ2h0IGRhcms6dGV4dC1kYXJrIGxnOnB5LTIgbGc6cHgtNFxuICAgICAgICAgIG1kOnRleHQtc20gbWQ6cHktMS41IG1kXCJcbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgIGluaXRpYWw9e3sgeDogMCwgeTogMCB9fVxuICAgICAgd2hpbGVJblZpZXc9e3sgeDogeCwgeTogeSwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMS41IH0gfX1cbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTFcIj57aWNvbn08L2Rpdj5cbiAgICAgIHtuYW1lfVxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNraWxscyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTh4bCBtdC02NCB3LWZ1bGwgdGV4dC1jZW50ZXIgbWQ6dGV4dC02eGwgbWQ6bXQtMzJcIj5cbiAgICAgICAgSGFiaWxpZGFkZXNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctY2lyY3VsYXJMaWdodCBkYXJrOmJnLWNpcmN1bGFyRGFya1wiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodFxuICAgICAgICAgIHAtOCBzaGFkb3ctZGFyayBjdXJzb3ItcG9pbnRlciBkYXJrOmJnLWxpZ2h0IGRhcms6dGV4dC1kYXJrXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgID5cbiAgICAgICAgICBXZWJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8U2tpbGwgaWNvbj17PEh0bWxJY29uIC8+fSBuYW1lPVwiSFRNTFwiIHg9XCItMjB2d1wiIHk9XCIydndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PENzc0ljb20gLz59IG5hbWU9XCJDU1NcIiB4PVwiMXZ3XCIgeT1cIjIydndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PEpzSWNvbiAvPn0gbmFtZT1cIkphdmFTY3JpcHRcIiB4PVwiMjB2d1wiIHk9XCI2dndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PFJlYWN0SWNvbiAvPn0gbmFtZT1cIlJlYWN0SlNcIiB4PVwiMHZ3XCIgeT1cIjEwdndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PE5leHRKc0ljb24gLz59IG5hbWU9XCJOZXh0SlNcIiB4PVwiLTIwdndcIiB5PVwiLTE1dndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PFJlZHV4SWNvbiAvPn0gbmFtZT1cIlJlZHV4XCIgeD1cIjE1dndcIiB5PVwiLTEydndcIiAvPlxuICAgICAgICA8U2tpbGxcbiAgICAgICAgICBpY29uPXs8Tm9kZUljb24gY2xhc3NOYW1lPXtcInctNiBoLTZcIn0gLz59XG4gICAgICAgICAgbmFtZT1cIk5vZGVKU1wiXG4gICAgICAgICAgeD1cIjMydndcIlxuICAgICAgICAgIHk9XCItNXZ3XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxFeHByZXNzSnNJY29uIC8+fSBuYW1lPVwiRXhwcmVzc0pTXCIgeD1cIjB2d1wiIHk9XCItMjJ2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8TW9uZ29EYkljb24gLz59IG5hbWU9XCJNb25nb0JEXCIgeD1cIi01dndcIiB5PVwiLTEwdndcIiAvPlxuICAgICAgICA8U2tpbGxcbiAgICAgICAgICBpY29uPXs8UG9zdGdyZXNTUUxJY29uIC8+fVxuICAgICAgICAgIG5hbWU9XCJQb3N0Z3Jlc1NRTFwiXG4gICAgICAgICAgeD1cIi0yNXZ3XCJcbiAgICAgICAgICB5PVwiMTh2d1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8TXlTUUxJY29uIC8+fSBuYW1lPVwiTXlTUUxcIiB4PVwiMzB2d1wiIHk9XCIxOHZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxUYWlsd2luZEljb24gLz59IG5hbWU9XCJUYWlsd2luZENTU1wiIHg9XCItMzV2d1wiIHk9XCItNXZ3XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIlJlYWN0IiwiSHRtbEljb24iLCJSZWFjdEljb24iLCJKc0ljb24iLCJNeVNRTEljb24iLCJQb3N0Z3Jlc1NRTEljb24iLCJOb2RlSWNvbiIsIk1vbmdvRGJJY29uIiwiTmV4dEpzSWNvbiIsIlJlZHV4SWNvbiIsIkV4cHJlc3NKc0ljb24iLCJUYWlsd2luZEljb24iLCJDc3NJY29tIiwiU2tpbGwiLCJpY29uIiwibmFtZSIsIngiLCJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwid2hpbGVIb3ZlciIsInNjYWxlIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidmlld3BvcnQiLCJvbmNlIiwiU2tpbGxzIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});