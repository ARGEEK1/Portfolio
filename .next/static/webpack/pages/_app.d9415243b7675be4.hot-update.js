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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1.5px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-3000 \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));\n_c1 = MotionLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex-col justify-center items-center hidden lg:flex\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-between jus\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/\",\n                                title: \"Inicio\",\n                                className: \"mr-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                lineNumber: 65,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/about\",\n                                title: \"Sobre M\\xed\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/projects\",\n                                title: \"Proyectos\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center justify-center flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"https://github.com/ARGEEK1\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GitHubIcon, {}, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"https://www.linkedin.com/in/antonio-rodr%C3%ADguez-toro/\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionLink, {\n                                href: \"mailto:antonio198889@gmail.com\",\n                                target: \"_blank\",\n                                title: \"Cont\\xe1ctame\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MailIcon, {}, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                lineNumber: 89,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                                className: \"ml-3 flex items-center justify-center rounded-full p-1\\n          \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n          \"),\n                                children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                                lineNumber: 100,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                        lineNumber: 70,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/components/NavBar.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"kR30wDLNpiUdCYMTQcHMODslZIE=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c2 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"MotionLink\");\n$RefreshReg$(_c2, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzBCQU1MLDhEQUFDYztnQkFBSWQsV0FBVTswQkFDYiw0RUFBQ1osNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7SUE5Rk1pQjs7UUFDb0JULCtEQUFnQkE7OztNQURwQ1M7QUFnR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzPzZiZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEdpdEh1Ykljb24sIExpbmtlZEluSWNvbiwgTWFpbEljb24sIFN1bkljb24sIE1vb25JY29uIH0gZnJvbSBcIi4vSWNvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgdXNlVGhlbWVTd2l0Y2hlciBmcm9tIFwiLi9ob29rcy91c2VUaGVtZVN3aXRjaGVyXCI7XG5cbmNvbnN0IEN1c3RvbUxpbmsgPSAoeyBocmVmLCB0aXRsZSwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByZWxhdGl2ZSBncm91cGB9PlxuICAgICAge3RpdGxlfVxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3NOYW1lPXtgaC1bMS41cHhdIGlubGluZS1ibG9jayBiZy1kYXJrIGRhcms6YmctbGlnaHQgYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMSBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1bd2lkdGhdIGVhc2UgZHVyYXRpb24tMzAwMCAke1xuICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IGhyZWYgPyBcInctZnVsbFwiIDogXCJ3LTBcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgJm5ic3A7XG4gICAgICA8L3NwYW4+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuY29uc3QgTW90aW9uTGluayA9IG1vdGlvbihMaW5rKTtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VUaGVtZVN3aXRjaGVyKCk7XG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMzIgcHktOCBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cbiAgICBkYXJrOnRleHQtbGlnaHRcIlxuICAgID5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGhpZGRlbiBsZzpmbGV4XCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJsb2NrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBoLTAuNSB3LTYgcm91bmRlZC1zbSAke1xuICAgICAgICAgICAgaXNPcGVuID8gXCJyb3RhdGUtNDUgdHJhbnNsYXRlLXktMVwiIDogXCItdHJhbnNsYXRlLXktMC41XCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGgtMC41IHctNiByb3VuZGVkLXNtIG15LTAuNSAke1xuICAgICAgICAgICAgaXNPcGVuID8gXCJvcGFjaXR5LTBcIiA6IFwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+PC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gJHtcbiAgICAgICAgICAgIGlzT3BlbiA/IFwiLXJvdGF0ZS00NSAtdHJhbnNsYXRlLXktMVwiIDogXCJ0cmFuc2xhdGUteS0wLjVcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtYmV0d2VlbiBqdXNcIj5cblxuICAgICAgPG5hdj5cbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9cIiB0aXRsZT1cIkluaWNpb1wiIGNsYXNzTmFtZT1cIm1yLTRcIiAvPlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2Fib3V0XCIgdGl0bGU9XCJTb2JyZSBNw61cIiBjbGFzc05hbWU9XCJteC00XCIgLz5cbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9wcm9qZWN0c1wiIHRpdGxlPVwiUHJveWVjdG9zXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XG4gICAgICA8L25hdj5cblxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BUkdFRUsxXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTNcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdpdEh1Ykljb24gLz5cbiAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbnRvbmlvLXJvZHIlQzMlQURndWV6LXRvcm8vXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTNcIlxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8TW90aW9uTGlua1xuICAgICAgICAgIGhyZWY9XCJtYWlsdG86YW50b25pbzE5ODg4OUBnbWFpbC5jb21cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgdGl0bGU9XCJDb250w6FjdGFtZVwiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiXG4gICAgICAgID5cbiAgICAgICAgICA8TWFpbEljb24gLz5cbiAgICAgICAgPC9Nb3Rpb25MaW5rPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKG1vZGUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BtbC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBwLTFcbiAgICAgICAgICAke21vZGUgPT09IFwibGlnaHRcIiA/IFwiYmctZGFyayB0ZXh0LWxpZ2h0XCIgOiBcImJnLWxpZ2h0IHRleHQtZGFya1wifVxuICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICB7bW9kZSA9PT0gXCJkYXJrXCIgPyAoXG4gICAgICAgICAgICA8TW9vbkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8U3VuSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25hdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV1cIj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiTG9nbyIsInVzZVJvdXRlciIsIkdpdEh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJNYWlsSWNvbiIsIlN1bkljb24iLCJNb29uSWNvbiIsIm1vdGlvbiIsInVzZVRoZW1lU3dpdGNoZXIiLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk1vdGlvbkxpbmsiLCJOYXZCYXIiLCJtb2RlIiwic2V0TW9kZSIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNsaWNrIiwiaGVhZGVyIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsIm5hdiIsImEiLCJ0YXJnZXQiLCJ3aGlsZUhvdmVyIiwieSIsIndoaWxlVGFwIiwic2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});