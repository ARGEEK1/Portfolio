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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n\n\n\n\nconst Skill = (param)=>{\n    let { icon , name , x , y  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute\",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        animate: {\n            x: x,\n            y: y\n        },\n        transition: {\n            duration: 1.5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                c: true,\n                children: icon\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            name\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Skill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-8xl mt-64 w-full text-center\",\n                children: \"Habilidades\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer\",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.HtmlIcon, {}, void 0, false, void 0, void 0),\n                        name: \"HTML\",\n                        x: \"-20vw\",\n                        y: \"2vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.CssIcom, {}, void 0, false, void 0, void 0),\n                        name: \"CSS\",\n                        x: \"1vw\",\n                        y: \"22vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.JsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"JavaScript\",\n                        x: \"20vw\",\n                        y: \"6vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ReactIcon, {}, void 0, false, void 0, void 0),\n                        name: \"ReactJS\",\n                        x: \"0vw\",\n                        y: \"10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.NextJsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"NextJS\",\n                        x: \"-20vw\",\n                        y: \"-15vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ReduxIcon, {}, void 0, false, void 0, void 0),\n                        name: \"Redux\",\n                        x: \"15vw\",\n                        y: \"-12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.NodeIcon, {}, void 0, false, void 0, void 0),\n                        name: \"NodeJS\",\n                        x: \"32vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ExpressJsIcon, {}, void 0, false, void 0, void 0),\n                        name: \"ExpressJS\",\n                        x: \"0vw\",\n                        y: \"-22vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MongoDbIcon, {}, void 0, false, void 0, void 0),\n                        name: \"MongoBD\",\n                        x: \"-5vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.PostgresSQLIcon, {}, void 0, false, void 0, void 0),\n                        name: \"PostgresSQL\",\n                        x: \"-25vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MySQLIcon, {}, void 0, false, void 0, void 0),\n                        name: \"MySQL\",\n                        x: \"30vw\",\n                        y: \"18vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.TailwindIcon, {}, void 0, false, void 0, void 0),\n                        name: \"TailwindCSS\",\n                        x: \"-35vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/Skills.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"Skill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDYjtBQWNUO0FBRWpCLE1BQU1jLFFBQVEsU0FBMEI7UUFBekIsRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFO0lBQ2pDLHFCQUNFLDhEQUFDbEIscURBQVU7UUFDVG9CLFdBQVU7UUFFVkMsWUFBWTtZQUFFQyxPQUFPO1FBQUs7UUFDMUJDLFNBQVM7WUFBRU4sR0FBRztZQUFHQyxHQUFHO1FBQUU7UUFDdEJNLFNBQVM7WUFBRVAsR0FBR0E7WUFBR0MsR0FBR0E7UUFBRTtRQUN0Qk8sWUFBWTtZQUFFQyxVQUFVO1FBQUk7OzBCQUU1Qiw4REFBQ1A7Z0JBQUlRLENBQUM7MEJBQUVaOzs7Ozs7WUFDUEM7Ozs7Ozs7QUFHUDtLQWRNRjtBQWdCTixNQUFNYyxTQUFTLElBQU07SUFDbkIscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBR1QsV0FBVTswQkFBOEM7Ozs7OzswQkFHNUQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3BCLHFEQUFVO3dCQUNUb0IsV0FBVTt3QkFFVkMsWUFBWTs0QkFBRUMsT0FBTzt3QkFBSztrQ0FDM0I7Ozs7OztrQ0FHRCw4REFBQ1I7d0JBQU1DLG9CQUFNLDhEQUFDYiw0Q0FBUUE7d0JBQUtjLE1BQUs7d0JBQU9DLEdBQUU7d0JBQVFDLEdBQUU7Ozs7OztrQ0FDbkQsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ0YsMkNBQU9BO3dCQUFLRyxNQUFLO3dCQUFNQyxHQUFFO3dCQUFNQyxHQUFFOzs7Ozs7a0NBQy9DLDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNYLDBDQUFNQTt3QkFBS1ksTUFBSzt3QkFBYUMsR0FBRTt3QkFBT0MsR0FBRTs7Ozs7O2tDQUN0RCw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDWiw2Q0FBU0E7d0JBQUthLE1BQUs7d0JBQVVDLEdBQUU7d0JBQU1DLEdBQUU7Ozs7OztrQ0FDckQsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ04sOENBQVVBO3dCQUFLTyxNQUFLO3dCQUFTQyxHQUFFO3dCQUFRQyxHQUFFOzs7Ozs7a0NBQ3ZELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNMLDZDQUFTQTt3QkFBS00sTUFBSzt3QkFBUUMsR0FBRTt3QkFBT0MsR0FBRTs7Ozs7O2tDQUNwRCw4REFBQ0o7d0JBQU1DLG9CQUFNLDhEQUFDUiw0Q0FBUUE7d0JBQUtTLE1BQUs7d0JBQVNDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDcEQsOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ0osaURBQWFBO3dCQUFLSyxNQUFLO3dCQUFZQyxHQUFFO3dCQUFNQyxHQUFFOzs7Ozs7a0NBQzNELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNQLCtDQUFXQTt3QkFBS1EsTUFBSzt3QkFBVUMsR0FBRTt3QkFBT0MsR0FBRTs7Ozs7O2tDQUN4RCw4REFBQ0o7d0JBQ0NDLG9CQUFNLDhEQUFDVCxtREFBZUE7d0JBQ3RCVSxNQUFLO3dCQUNMQyxHQUFFO3dCQUNGQyxHQUFFOzs7Ozs7a0NBRUosOERBQUNKO3dCQUFNQyxvQkFBTSw4REFBQ1YsNkNBQVNBO3dCQUFLVyxNQUFLO3dCQUFRQyxHQUFFO3dCQUFPQyxHQUFFOzs7Ozs7a0NBQ3BELDhEQUFDSjt3QkFBTUMsb0JBQU0sOERBQUNILGdEQUFZQTt3QkFBS0ksTUFBSzt3QkFBY0MsR0FBRTt3QkFBUUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7QUFJdEU7TUFsQ01VO0FBb0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NraWxscy5qcz9lMWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBIdG1sSWNvbixcbiAgUmVhY3RJY29uLFxuICBKc0ljb24sXG4gIE15U1FMSWNvbixcbiAgUG9zdGdyZXNTUUxJY29uLFxuICBOb2RlSWNvbixcbiAgTW9uZ29EYkljb24sXG4gIE5leHRKc0ljb24sXG4gIFJlZHV4SWNvbixcbiAgRXhwcmVzc0pzSWNvbixcbiAgVGFpbHdpbmRJY29uLFxuICBDc3NJY29tLFxufSBmcm9tIFwiLi9JY29uc1wiO1xuXG5jb25zdCBTa2lsbCA9ICh7IGljb24sIG5hbWUsIHgsIHkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZCBiZy1kYXJrIHRleHQtbGlnaHRcbiAgICAgICAgICBweS0zIHB4LTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGVcIlxuICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgaW5pdGlhbD17eyB4OiAwLCB5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IHg6IHgsIHk6IHkgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuNSB9fVxuICAgID5cbiAgICAgIDxkaXYgYz57aWNvbn08L2Rpdj5cbiAgICAgIHtuYW1lfVxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNraWxscyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTh4bCBtdC02NCB3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgSGFiaWxpZGFkZXNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctY2lyY3VsYXJMaWdodFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodFxuICAgICAgICAgIHAtOCBzaGFkb3ctZGFyayBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgV2ViXG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPFNraWxsIGljb249ezxIdG1sSWNvbiAvPn0gbmFtZT1cIkhUTUxcIiB4PVwiLTIwdndcIiB5PVwiMnZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxDc3NJY29tIC8+fSBuYW1lPVwiQ1NTXCIgeD1cIjF2d1wiIHk9XCIyMnZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxKc0ljb24gLz59IG5hbWU9XCJKYXZhU2NyaXB0XCIgeD1cIjIwdndcIiB5PVwiNnZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxSZWFjdEljb24gLz59IG5hbWU9XCJSZWFjdEpTXCIgeD1cIjB2d1wiIHk9XCIxMHZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxOZXh0SnNJY29uIC8+fSBuYW1lPVwiTmV4dEpTXCIgeD1cIi0yMHZ3XCIgeT1cIi0xNXZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxSZWR1eEljb24gLz59IG5hbWU9XCJSZWR1eFwiIHg9XCIxNXZ3XCIgeT1cIi0xMnZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxOb2RlSWNvbiAvPn0gbmFtZT1cIk5vZGVKU1wiIHg9XCIzMnZ3XCIgeT1cIi01dndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PEV4cHJlc3NKc0ljb24gLz59IG5hbWU9XCJFeHByZXNzSlNcIiB4PVwiMHZ3XCIgeT1cIi0yMnZ3XCIgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxNb25nb0RiSWNvbiAvPn0gbmFtZT1cIk1vbmdvQkRcIiB4PVwiLTV2d1wiIHk9XCItMTB2d1wiIC8+XG4gICAgICAgIDxTa2lsbFxuICAgICAgICAgIGljb249ezxQb3N0Z3Jlc1NRTEljb24gLz59XG4gICAgICAgICAgbmFtZT1cIlBvc3RncmVzU1FMXCJcbiAgICAgICAgICB4PVwiLTI1dndcIlxuICAgICAgICAgIHk9XCIxOHZ3XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNraWxsIGljb249ezxNeVNRTEljb24gLz59IG5hbWU9XCJNeVNRTFwiIHg9XCIzMHZ3XCIgeT1cIjE4dndcIiAvPlxuICAgICAgICA8U2tpbGwgaWNvbj17PFRhaWx3aW5kSWNvbiAvPn0gbmFtZT1cIlRhaWx3aW5kQ1NTXCIgeD1cIi0zNXZ3XCIgeT1cIi01dndcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJIdG1sSWNvbiIsIlJlYWN0SWNvbiIsIkpzSWNvbiIsIk15U1FMSWNvbiIsIlBvc3RncmVzU1FMSWNvbiIsIk5vZGVJY29uIiwiTW9uZ29EYkljb24iLCJOZXh0SnNJY29uIiwiUmVkdXhJY29uIiwiRXhwcmVzc0pzSWNvbiIsIlRhaWx3aW5kSWNvbiIsIkNzc0ljb20iLCJTa2lsbCIsImljb24iLCJuYW1lIiwieCIsInkiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImMiLCJTa2lsbHMiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});