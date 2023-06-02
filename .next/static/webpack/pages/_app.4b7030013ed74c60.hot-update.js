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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1.5px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-3000 \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));\n_c1 = MotionLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex flex-col justify-center items-center\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 \".concat(isOpen ? \"rotate-45 \" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Inicio\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"Sobre M\\xed\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Proyectos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://github.com/ARGEEK1\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GitHubIcon, {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://www.linkedin.com/in/antonio-rodr%C3%ADguez-toro/\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionLink, {\n                        href: \"mailto:antonio198889@gmail.com\",\n                        target: \"_blank\",\n                        title: \"Cont\\xe1ctame\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MailIcon, {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1\\n          \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n          \"),\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"kR30wDLNpiUdCYMTQcHMODslZIE=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c2 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"MotionLink\");\n$RefreshReg$(_c2, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDZDtBQUNjO0FBQ3dDO0FBQ3pDO0FBQ2lCO0FBRXhELE1BQU1ZLGFBQWEsU0FBcUM7UUFBcEMsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFdBQVksR0FBRSxFQUFFOztJQUNqRCxNQUFNQyxTQUFTWixzREFBU0E7SUFDeEIscUJBQ0UsOERBQUNKLGtEQUFJQTtRQUFDYSxNQUFNQTtRQUFNRSxXQUFXLEdBQWEsT0FBVkEsV0FBVTs7WUFDdkNEOzBCQUNELDhEQUFDRztnQkFDQ0YsV0FBVyxtSUFFVixPQURDQyxPQUFPRSxNQUFNLEtBQUtMLE9BQU8sV0FBVyxLQUFLOzBCQUU1Qzs7Ozs7Ozs7Ozs7O0FBS1A7R0FkTUQ7O1FBQ1dSLGtEQUFTQTs7O0tBRHBCUTtBQWdCTixNQUFNTyxhQUFhVCxxREFBTUEsQ0FBQ1Ysa0RBQUlBO01BQXhCbUI7QUFFTixNQUFNQyxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCxtRUFBZ0JBO0lBRXhDLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHdEIsK0NBQVFBLENBQUMsS0FBSztJQUUxQyxNQUFNdUIsY0FBYyxJQUFNO1FBQ3hCRCxVQUFVLENBQUNEO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0c7UUFDQ1gsV0FBVTs7MEJBR1YsOERBQUNZO2dCQUNDWixXQUFVO2dCQUNWYSxTQUFTSDs7a0NBRVQsOERBQUNSO3dCQUFLRixXQUFXLHFFQUEyRyxPQUF0Q1EsU0FBUyxlQUFlLGFBQWE7Ozs7OztrQ0FDM0gsOERBQUNOO3dCQUNDRixXQUFXLDJEQUFnRyxPQUFyQ1EsU0FBUyxjQUFjLGFBQWE7Ozs7OztrQ0FFNUcsOERBQUNOO3dCQUFLRixXQUFVOzs7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDYzs7a0NBQ0MsOERBQUNqQjt3QkFBV0MsTUFBSzt3QkFBSUMsT0FBTTt3QkFBU0MsV0FBVTs7Ozs7O2tDQUM5Qyw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVNDLE9BQU07d0JBQVdDLFdBQVU7Ozs7OztrQ0FDckQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFZQyxPQUFNO3dCQUFZQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBRzNELDhEQUFDYztnQkFBSWQsV0FBVTs7a0NBQ2IsOERBQUNMLG1EQUFRO3dCQUNQRyxNQUFLO3dCQUNMa0IsUUFBTzt3QkFDUEMsWUFBWTs0QkFBRUMsR0FBRyxDQUFDO3dCQUFFO3dCQUNwQkMsVUFBVTs0QkFBRUMsT0FBTzt3QkFBSTt3QkFDdkJwQixXQUFVO2tDQUVWLDRFQUFDViw4Q0FBVUE7Ozs7Ozs7Ozs7a0NBRWIsOERBQUNLLG1EQUFRO3dCQUNQRyxNQUFLO3dCQUNMa0IsUUFBTzt3QkFDUEMsWUFBWTs0QkFBRUMsR0FBRyxDQUFDO3dCQUFFO3dCQUNwQkMsVUFBVTs0QkFBRUMsT0FBTzt3QkFBSTt3QkFDdkJwQixXQUFVO2tDQUVWLDRFQUFDVCxnREFBWUE7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNhO3dCQUNDTixNQUFLO3dCQUNMa0IsUUFBTzt3QkFDUGpCLE9BQU07d0JBQ05rQixZQUFZOzRCQUFFQyxHQUFHLENBQUM7d0JBQUU7d0JBQ3BCQyxVQUFVOzRCQUFFQyxPQUFPO3dCQUFJO3dCQUN2QnBCLFdBQVU7a0NBRVYsNEVBQUNSLDRDQUFRQTs7Ozs7Ozs7OztrQ0FHWCw4REFBQ29CO3dCQUNDQyxTQUFTLElBQU1OLFFBQVFELFNBQVMsVUFBVSxTQUFTLE9BQU87d0JBQzFETixXQUFXLHFFQUNzRCxPQUEvRE0sU0FBUyxVQUFVLHVCQUF1QixvQkFBb0IsRUFBQztrQ0FHaEVBLFNBQVMsdUJBQ1IsOERBQUNaLDRDQUFRQTs0QkFBQ00sV0FBVzs7Ozs7c0RBRXJCLDhEQUFDUCwyQ0FBT0E7NEJBQUNPLFdBQVc7Ozs7O3FDQUNyQjs7Ozs7Ozs7Ozs7OzBCQUlMLDhEQUFDcUI7Z0JBQUlyQixXQUFVOzBCQUNiLDRFQUFDWiw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtJQWhGTWlCOztRQUNvQlQsK0RBQWdCQTs7O01BRHBDUztBQWtGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgR2l0SHViSWNvbiwgTGlua2VkSW5JY29uLCBNYWlsSWNvbiwgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB1c2VUaGVtZVN3aXRjaGVyIGZyb20gXCIuL2hvb2tzL3VzZVRoZW1lU3dpdGNoZXJcIjtcblxuY29uc3QgQ3VzdG9tTGluayA9ICh7IGhyZWYsIHRpdGxlLCBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XG4gICAgICB7dGl0bGV9XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e2BoLVsxLjVweF0gaW5saW5lLWJsb2NrIGJnLWRhcmsgZGFyazpiZy1saWdodCBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0xIGdyb3VwLWhvdmVyOnctZnVsbCB0cmFuc2l0aW9uLVt3aWR0aF0gZWFzZSBkdXJhdGlvbi0zMDAwICR7XG4gICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/IFwidy1mdWxsXCIgOiBcInctMFwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICAmbmJzcDtcbiAgICAgIDwvc3Bhbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5jb25zdCBNb3Rpb25MaW5rID0gbW90aW9uKExpbmspO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVRoZW1lU3dpdGNoZXIoKTtcblxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblxuICAgIGRhcms6dGV4dC1saWdodFwiXG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgaC0wLjUgdy02IHJvdW5kZWQtc20gLXRyYW5zbGF0ZS15LTAuNSAke2lzT3BlbiA/IFwicm90YXRlLTQ1IFwiIDogXCJvcGFjaXR5LTEwMFwifWB9Pjwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgaC0wLjUgdy02IHJvdW5kZWQtc20gbXktMC41ICR7aXNPcGVuID8gXCJvcGFjaXR5LTBcIiA6IFwib3BhY2l0eS0xMDBcIn1gfVxuICAgICAgICA+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgaC0wLjUgdy02IHJvdW5kZWQtc20gdHJhbnNsYXRlLXktMC41XCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgdGl0bGU9XCJJbmljaW9cIiBjbGFzc05hbWU9XCJtci00XCIgLz5cbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hYm91dFwiIHRpdGxlPVwiU29icmUgTcOtXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvcHJvamVjdHNcIiB0aXRsZT1cIlByb3llY3Rvc1wiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwXCI+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQVJHRUVLMVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxHaXRIdWJJY29uIC8+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW50b25pby1yb2RyJUMzJUFEZ3Vlei10b3JvL1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rZWRJbkljb24gLz5cbiAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgPE1vdGlvbkxpbmtcbiAgICAgICAgICBocmVmPVwibWFpbHRvOmFudG9uaW8xOTg4ODlAZ21haWwuY29tXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHRpdGxlPVwiQ29udMOhY3RhbWVcIlxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTNcIlxuICAgICAgICA+XG4gICAgICAgICAgPE1haWxJY29uIC8+XG4gICAgICAgIDwvTW90aW9uTGluaz5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kZShtb2RlID09PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWwtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xXG4gICAgICAgICAgJHttb2RlID09PSBcImxpZ2h0XCIgPyBcImJnLWRhcmsgdGV4dC1saWdodFwiIDogXCJiZy1saWdodCB0ZXh0LWRhcmtcIn1cbiAgICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAge21vZGUgPT09IFwiZGFya1wiID8gKFxuICAgICAgICAgICAgPE1vb25JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFN1bkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV1cIj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiTG9nbyIsInVzZVJvdXRlciIsIkdpdEh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJNYWlsSWNvbiIsIlN1bkljb24iLCJNb29uSWNvbiIsIm1vdGlvbiIsInVzZVRoZW1lU3dpdGNoZXIiLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk1vdGlvbkxpbmsiLCJOYXZCYXIiLCJtb2RlIiwic2V0TW9kZSIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNsaWNrIiwiaGVhZGVyIiwiYnV0dG9uIiwib25DbGljayIsIm5hdiIsImEiLCJ0YXJnZXQiLCJ3aGlsZUhvdmVyIiwieSIsIndoaWxlVGFwIiwic2NhbGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});