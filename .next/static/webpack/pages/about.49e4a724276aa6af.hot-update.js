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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n\n\n\n\nconst Skill = (param)=>{\n    let { icon , name , x , y  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        whileInView: {\n            x: x,\n            y: y\n        },\n        transition: {\n            duration: 1.5\n        },\n        viewport: {\n            once: true\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-1\",\n                children: icon\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            name\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Skill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center\",\n                children: \"Habilidades\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.HtmlIcon, {}, void 0, false, void 0, void 0),\n                        name: \"HTML\",\n                        x: \"-20vw\",\n                        y: \"2vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.CssIcom, {}, void 0, false, void 0, void 0),\n                        name: \"CSS\",\n                        x: \"1vw\",\n                        y: \"22vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.JsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"JavaScript\",\n                        x: \"20vw\",\n                        y: \"6vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ReactIcon, {}, void 0, false, void 0, void 0),\n                        name: \"ReactJS\",\n                        x: \"0vw\",\n                        y: \"10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.NextJsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"NextJS\",\n                        x: \"-20vw\",\n                        y: \"-15vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ReduxIcon, {}, void 0, false, void 0, void 0),\n                        name: \"Redux\",\n                        x: \"15vw\",\n                        y: \"-12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.NodeIcon, {}, void 0, false, void 0, void 0),\n                        name: \"NodeJS\",\n                        x: \"32vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ExpressJsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"ExpressJS\",\n                        x: \"0vw\",\n                        y: \"-22vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MongoDbIcon, {}, void 0, false, void 0, void 0),\n                        name: \"MongoBD\",\n                        x: \"-5vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.PostgresSQLIcon, {}, void 0, false, void 0, void 0),\n                        name: \"PostgresSQL\",\n                        x: \"-25vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MySQLIcon, {}, void 0, false, void 0, void 0),\n                        name: \"MySQL\",\n                        x: \"30vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.TailwindIcon, {}, void 0, false, void 0, void 0),\n                        name: \"TailwindCSS\",\n                        x: \"-35vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"Skill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDYjtBQWNUO0FBRWpCLE1BQU1jLFFBQVEsU0FBMEI7UUFBekIsRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFO0lBQ2pDLHFCQUNFLDhEQUFDbEIscURBQVU7UUFDVG9CLFdBQVU7UUFFVkMsWUFBWTtZQUFFQyxPQUFPO1FBQUs7UUFDMUJDLFNBQVM7WUFBRU4sR0FBRztZQUFHQyxHQUFHO1FBQUU7UUFDdEJNLGFBQWE7WUFBRVAsR0FBR0E7WUFBR0MsR0FBR0E7UUFBRTtRQUMxQk8sWUFBWTtZQUFFQyxVQUFVO1FBQUk7UUFDNUJDLFVBQVU7WUFBRUMsTUFBTSxJQUFJO1FBQUM7OzBCQUV2Qiw4REFBQ1Q7Z0JBQUlDLFdBQVU7MEJBQVFMOzs7Ozs7WUFDdEJDOzs7Ozs7O0FBR1A7S0FmTUY7QUFpQk4sTUFBTWUsU0FBUyxJQUFNO0lBQ25CLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUdWLFdBQVU7MEJBQThDOzs7Ozs7MEJBRzVELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNwQixxREFBVTt3QkFDVG9CLFdBQVU7d0JBRVZDLFlBQVk7NEJBQUVDLE9BQU87d0JBQUs7a0NBQzNCOzs7Ozs7a0NBR0QsOERBQUNSO3dCQUFNQyxvQkFBTSw4REFBQ2IsNENBQVFBO3dCQUFLYyxNQUFLO3dCQUFPQyxHQUFFO3dCQUFRQyxHQUFFOzs7Ozs7a0NBQ25ELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNGLDJDQUFPQTt3QkFBS0csTUFBSzt3QkFBTUMsR0FBRTt3QkFBTUMsR0FBRTs7Ozs7O2tDQUMvQyw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDWCwwQ0FBTUE7d0JBQUtZLE1BQUs7d0JBQWFDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDdEQsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ1osNkNBQVNBO3dCQUFLYSxNQUFLO3dCQUFVQyxHQUFFO3dCQUFNQyxHQUFFOzs7Ozs7a0NBQ3JELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNOLDhDQUFVQTt3QkFBS08sTUFBSzt3QkFBU0MsR0FBRTt3QkFBUUMsR0FBRTs7Ozs7O2tDQUN2RCw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDTCw2Q0FBU0E7d0JBQUtNLE1BQUs7d0JBQVFDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDcEQsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ1IsNENBQVFBO3dCQUFLUyxNQUFLO3dCQUFTQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQ3BELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNKLGlEQUFhQTt3QkFBS0ssTUFBSzt3QkFBWUMsR0FBRTt3QkFBTUMsR0FBRTs7Ozs7O2tDQUMzRCw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDUCwrQ0FBV0E7d0JBQUtRLE1BQUs7d0JBQVVDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDeEQsOERBQUNKO3dCQUNDQyxvQkFBTSw4REFBQ1QsbURBQWVBO3dCQUN0QlUsTUFBSzt3QkFDTEMsR0FBRTt3QkFDRkMsR0FBRTs7Ozs7O2tDQUVKLDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNWLDZDQUFTQTt3QkFBS1csTUFBSzt3QkFBUUMsR0FBRTt3QkFBT0MsR0FBRTs7Ozs7O2tDQUNwRCw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDSCxnREFBWUE7d0JBQUtJLE1BQUs7d0JBQWNDLEdBQUU7d0JBQVFDLEdBQUU7Ozs7Ozs7Ozs7Ozs7O0FBSXRFO01BbENNVztBQW9DTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanM/ZTFmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgSHRtbEljb24sXG4gIFJlYWN0SWNvbixcbiAgSnNJY29uLFxuICBNeVNRTEljb24sXG4gIFBvc3RncmVzU1FMSWNvbixcbiAgTm9kZUljb24sXG4gIE1vbmdvRGJJY29uLFxuICBOZXh0SnNJY29uLFxuICBSZWR1eEljb24sXG4gIEV4cHJlc3NKc0ljb24sXG4gIFRhaWx3aW5kSWNvbixcbiAgQ3NzSWNvbSxcbn0gZnJvbSBcIi4vSWNvbnNcIjtcblxuY29uc3QgU2tpbGwgPSAoeyBpY29uLCBuYW1lLCB4LCB5IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgYmctZGFyayB0ZXh0LWxpZ2h0XG4gICAgICAgICAgcHktMyBweC02IHNoYWRvdy1kYXJrIGN1cnNvci1wb2ludGVyIGFic29sdXRlXCJcbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgIGluaXRpYWw9e3sgeDogMCwgeTogMCB9fVxuICAgICAgd2hpbGVJblZpZXc9e3sgeDogeCwgeTogeSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41IH19XG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xXCI+e2ljb259PC9kaXY+XG4gICAgICB7bmFtZX1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC04eGwgbXQtNjQgdy1mdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgIEhhYmlsaWRhZGVzXG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWNpcmN1bGFyTGlnaHRcIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZCBiZy1kYXJrIHRleHQtbGlnaHRcbiAgICAgICAgICBwLTggc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFdlYlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8SHRtbEljb24gLz59IG5hbWU9XCJIVE1MXCIgeD1cIi0yMHZ3XCIgeT1cIjJ2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8Q3NzSWNvbSAvPn0gbmFtZT1cIkNTU1wiIHg9XCIxdndcIiB5PVwiMjJ2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8SnNJY29uIC8+fSBuYW1lPVwiSmF2YVNjcmlwdFwiIHg9XCIyMHZ3XCIgeT1cIjZ2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8UmVhY3RJY29uIC8+fSBuYW1lPVwiUmVhY3RKU1wiIHg9XCIwdndcIiB5PVwiMTB2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8TmV4dEpzSWNvbiAvPn0gbmFtZT1cIk5leHRKU1wiIHg9XCItMjB2d1wiIHk9XCItMTV2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8UmVkdXhJY29uIC8+fSBuYW1lPVwiUmVkdXhcIiB4PVwiMTV2d1wiIHk9XCItMTJ2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8Tm9kZUljb24gLz59IG5hbWU9XCJOb2RlSlNcIiB4PVwiMzJ2d1wiIHk9XCItNXZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxFeHByZXNzSnNJY29uIC8+fSBuYW1lPVwiRXhwcmVzc0pTXCIgeD1cIjB2d1wiIHk9XCItMjJ2d1wiIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8TW9uZ29EYkljb24gLz59IG5hbWU9XCJNb25nb0JEXCIgeD1cIi01dndcIiB5PVwiLTEwdndcIiAvPlxuICAgICAgICA8U2tpbGxcbiAgICAgICAgICBpY29uPXs8UG9zdGdyZXNTUUxJY29uIC8+fVxuICAgICAgICAgIG5hbWU9XCJQb3N0Z3Jlc1NRTFwiXG4gICAgICAgICAgeD1cIi0yNXZ3XCJcbiAgICAgICAgICB5PVwiMTh2d1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxTa2lsbCBpY29uPXs8TXlTUUxJY29uIC8+fSBuYW1lPVwiTXlTUUxcIiB4PVwiMzB2d1wiIHk9XCIxOHZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxUYWlsd2luZEljb24gLz59IG5hbWU9XCJUYWlsd2luZENTU1wiIHg9XCItMzV2d1wiIHk9XCItNXZ3XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzOyJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsIkh0bWxJY29uIiwiUmVhY3RJY29uIiwiSnNJY29uIiwiTXlTUUxJY29uIiwiUG9zdGdyZXNTUUxJY29uIiwiTm9kZUljb24iLCJNb25nb0RiSWNvbiIsIk5leHRKc0ljb24iLCJSZWR1eEljb24iLCJFeHByZXNzSnNJY29uIiwiVGFpbHdpbmRJY29uIiwiQ3NzSWNvbSIsIlNraWxsIiwiaWNvbiIsIm5hbWUiLCJ4IiwieSIsImRpdiIsImNsYXNzTmFtZSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZpZXdwb3J0Iiwib25jZSIsIlNraWxscyIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});