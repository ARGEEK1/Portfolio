"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-3000 \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));\n_c1 = MotionLink;\nconst NavBar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4 mb-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"Sobre M\\xed\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Proyectos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https://github.com/ARGEEK1\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GitHubIcon, {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https://www.linkedin.com/in/antonio-rodr%C3%ADguez-toro/\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionLink, {\n                        href: \"mailto:antonio198889@gmail.com\",\n                        target: \"_blank\",\n                        title: \"Cont\\xe1ctame\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MailIcon, {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"MotionLink\");\n$RefreshReg$(_c2, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSDtBQUNBO0FBQ2M7QUFDcUI7QUFDdEI7QUFFdkMsTUFBTVEsYUFBYSxTQUFxQztRQUFwQyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsV0FBWSxHQUFFLEVBQUU7O0lBQ2pELE1BQU1DLFNBQVNULHNEQUFTQTtJQUN4QixxQkFDRSw4REFBQ0gsa0RBQUlBO1FBQUNTLE1BQU1BO1FBQU1FLFdBQVcsR0FBYSxPQUFWQSxXQUFVOztZQUN2Q0Q7MEJBQ0QsOERBQUNHO2dCQUNDRixXQUFXLHFIQUVWLE9BRENDLE9BQU9FLE1BQU0sS0FBS0wsT0FBTyxXQUFXLEtBQUs7MEJBRTVDOzs7Ozs7Ozs7Ozs7QUFLUDtHQWRNRDs7UUFDV0wsa0RBQVNBOzs7S0FEcEJLO0FBZ0JOLE1BQU1PLGFBQWFSLHFEQUFNQSxDQUFDUCxrREFBSUE7TUFBeEJlO0FBRU4sTUFBTUMsU0FBUyxJQUFNO0lBQ25CLHFCQUNFLDhEQUFDQztRQUFPTixXQUFVOzswQkFDaEIsOERBQUNPOztrQ0FDQyw4REFBQ1Y7d0JBQVdDLE1BQUs7d0JBQUlDLE9BQU07d0JBQU9DLFdBQVU7Ozs7OztrQ0FDNUMsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFTQyxPQUFNO3dCQUFXQyxXQUFVOzs7Ozs7a0NBQ3JELDhEQUFDSDt3QkFBV0MsTUFBSzt3QkFBWUMsT0FBTTt3QkFBWUMsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUczRCw4REFBQ087Z0JBQUlQLFdBQVU7O2tDQUNiLDhEQUFDSixtREFBUTt3QkFDUEUsTUFBSzt3QkFDTFcsUUFBTzt3QkFDUEMsWUFBWTs0QkFBRUMsR0FBRyxDQUFDO3dCQUFFO3dCQUNwQkMsVUFBVTs0QkFBRUMsT0FBTzt3QkFBSTt3QkFDdkJiLFdBQVU7a0NBRVYsNEVBQUNQLDhDQUFVQTs7Ozs7Ozs7OztrQ0FFYiw4REFBQ0csbURBQVE7d0JBQ1BFLE1BQUs7d0JBQ0xXLFFBQU87d0JBQ1BDLFlBQVk7NEJBQUVDLEdBQUcsQ0FBQzt3QkFBRTt3QkFDcEJDLFVBQVU7NEJBQUVDLE9BQU87d0JBQUk7d0JBQ3ZCYixXQUFVO2tDQUVWLDRFQUFDTixnREFBWUE7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNVO3dCQUNDTixNQUFLO3dCQUNMVyxRQUFPO3dCQUNQVixPQUFNO3dCQUNOVyxZQUFZOzRCQUFFQyxHQUFHLENBQUM7d0JBQUU7d0JBQ3BCQyxVQUFVOzRCQUFFQyxPQUFPO3dCQUFJO3dCQUN2QmIsV0FBVTtrQ0FFViw0RUFBQ0wsNENBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUliLDhEQUFDbUI7Z0JBQUlkLFdBQVU7MEJBQ2IsNEVBQUNULDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUliO01BN0NNYztBQStDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEdpdEh1Ykljb24sIExpbmtlZEluSWNvbiwgTWFpbEljb24gfSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgQ3VzdG9tTGluayA9ICh7IGhyZWYsIHRpdGxlLCBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XG4gICAgICB7dGl0bGV9XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e2BoLVsycHhdIGlubGluZS1ibG9jayBiZy1kYXJrIGFic29sdXRlIGxlZnQtMCAtYm90dG9tLTAuNSBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1bd2lkdGhdIGVhc2UgZHVyYXRpb24tMzAwMCAke1xuICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IGhyZWYgPyBcInctZnVsbFwiIDogXCJ3LTBcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgJm5ic3A7XG4gICAgICA8L3NwYW4+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuY29uc3QgTW90aW9uTGluayA9IG1vdGlvbihMaW5rKTtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMyIHB5LTggZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICA8bmF2PlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT1cIm1yLTQgbWItMlwiIC8+XG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYWJvdXRcIiB0aXRsZT1cIlNvYnJlIE3DrVwiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJQcm95ZWN0b3NcIiBjbGFzc05hbWU9XCJteC00XCIgLz5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FSR0VFSzFcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiXG4gICAgICAgID5cbiAgICAgICAgICA8R2l0SHViSWNvbiAvPlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FudG9uaW8tcm9kciVDMyVBRGd1ZXotdG9yby9cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiXG4gICAgICAgID5cbiAgICAgICAgICA8TGlua2VkSW5JY29uIC8+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDxNb3Rpb25MaW5rXG4gICAgICAgICAgaHJlZj1cIm1haWx0bzphbnRvbmlvMTk4ODg5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICB0aXRsZT1cIkNvbnTDoWN0YW1lXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxNYWlsSWNvbiAvPlxuICAgICAgICA8L01vdGlvbkxpbms+XG4gICAgICA8L25hdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5zbGF0ZS14LVstNTAlXVwiPlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiTG9nbyIsInVzZVJvdXRlciIsIkdpdEh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJNYWlsSWNvbiIsIm1vdGlvbiIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTW90aW9uTGluayIsIk5hdkJhciIsImhlYWRlciIsIm5hdiIsImEiLCJ0YXJnZXQiLCJ3aGlsZUhvdmVyIiwieSIsIndoaWxlVGFwIiwic2NhbGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});