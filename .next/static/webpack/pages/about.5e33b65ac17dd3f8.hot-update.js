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

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_profile_developer_pic_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/profile/developer-pic-2.jpg */ \"./public/images/profile/developer-pic-2.jpg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Skills */ \"./src/components/Skills.js\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience.js\");\n/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Education */ \"./src/components/Education.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useInView)(ref, {\n        once: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n        lineNumber: 32,\n        columnNumber: 10\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Antonio Rodr\\xedguez | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"La Pasi\\xf3n Alimenta El Prop\\xf3sito!\",\n                            className: \"mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16 sm:gap-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75\",\n                                            children: \"Sobre M\\xed\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"\\xa1Hola! \\uD83D\\uDC4B Soy Antonio Rodriguez, desarrollador Full Stack en constante evoluci\\xf3n y aprendizaje. Mi background en electr\\xf3nica y microsoldadura SMD ha desarrollado mi pensamiento l\\xf3gico y habilidades de resoluci\\xf3n de problemas.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"Disfruto desarrollando soluciones que satisfacen las necesidades de clientes y usuarios. He participado en proyectos grupales, donde he obtenido excelentes resultados gracias a mi capacidad de aprendizaje y compromiso.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Espero con inter\\xe9s la oportunidad de aportar mis habilidades y pasi\\xf3n a su pr\\xf3ximo proyecto, contribuyendo a su \\xe9xito con mis conocimientos y dedicaci\\xf3n.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            src: _public_images_profile_developer_pic_2_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                            alt: \"Antonio Rodr\\xedguez\",\n                                            className: \"w-full h-auto rounded-2xl\",\n                                            priority: true,\n                                            sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center xl:items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 2\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg \",\n                                                    children: \"clientes\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 5\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75 dark:text-light/75\",\n                                                    children: \"proyectos\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 8\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 109,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75 dark:text-light/75\",\n                                                    children: \"experiencia (meses)\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Education__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29EQUFHSCxXQUFVOzhEQUFpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU1yRiw4REFBQ3hCLDBEQUFNQTs7Ozs7c0NBQ1AsOERBQUNDLDhEQUFVQTs7Ozs7c0NBQ1gsOERBQUNDLDZEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0FBRUEsK0RBQWVnQixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC5qcz9mZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9BbmltYXRlZFRleHRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wcm9maWxlL2RldmVsb3Blci1waWMtMi5qcGdcIjtcbmltcG9ydCB7IHVzZUluVmlldywgdXNlTW90aW9uVmFsdWUsIHVzZVNwcmluZyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgU2tpbGxzIGZyb20gXCJAL2NvbXBvbmVudHMvU2tpbGxzXCI7XG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiQC9jb21wb25lbnRzL0V4cGVyaWVuY2VcIjtcbmltcG9ydCBFZHVjYXRpb24gZnJvbSBcIkAvY29tcG9uZW50cy9FZHVjYXRpb25cIjtcblxuY29uc3QgQW5pbWF0ZWROdW1iZXJzID0gKHsgdmFsdWUgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG1vdGlvblZhbHVlID0gdXNlTW90aW9uVmFsdWUoMCk7XG4gIGNvbnN0IHNwcmluZ1ZhbHVlID0gdXNlU3ByaW5nKG1vdGlvblZhbHVlLCB7IGR1cmF0aW9uOiAzMDAwIH0pO1xuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHsgb25jZTogdHJ1ZSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0luVmlldykge1xuICAgICAgbW90aW9uVmFsdWUuc2V0KHZhbHVlKTtcbiAgICB9XG4gIH0sIFtpc0luVmlldywgdmFsdWUsIG1vdGlvblZhbHVlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzcHJpbmdWYWx1ZS5vbihcImNoYW5nZVwiLCAobGF0ZXN0KSA9PiB7XG4gICAgICBpZiAocmVmLmN1cnJlbnQgJiYgbGF0ZXN0LnRvRml4ZWQoMCkgPD0gdmFsdWUpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQudGV4dENvbnRlbnQgPSBsYXRlc3QudG9GaXhlZCgwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3NwcmluZ1ZhbHVlLCB2YWx1ZV0pO1xuXG4gIHJldHVybiA8c3BhbiByZWY9e3JlZn0+PC9zcGFuPjtcbn07XG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFudG9uaW8gUm9kcsOtZ3VleiB8IEFib3V0IFBhZ2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiYW55IGRlc2NyaXB0aW9uXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBkYXJrOnRleHQtbGlnaHRcIj5cbiAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJwdC0xNlwiPlxuICAgICAgICAgIDxBbmltYXRlZFRleHRcbiAgICAgICAgICAgIHRleHQ9XCJMYSBQYXNpw7NuIEFsaW1lbnRhIEVsIFByb3DDs3NpdG8hXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTE2IGxnOiF0ZXh0LTd4bCBzbTohdGV4dC02eGwgeHM6IXRleHQtNHhsIHNtOm1iLThcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBncmlkLWNvbHMtOCBnYXAtMTYgc206Z2FwLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgeGw6Y29sLXNwYW4tNCBtZDpvcmRlci0yIG1kOmNvbC1zcGFuLThcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZGFyay83NSBkYXJrOnRleHQtbGlnaHQvNzVcIj5cbiAgICAgICAgICAgICAgICBTb2JyZSBNw61cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICDCoUhvbGEhIPCfkYsgU295IEFudG9uaW8gUm9kcmlndWV6LCBkZXNhcnJvbGxhZG9yIEZ1bGwgU3RhY2sgZW5cbiAgICAgICAgICAgICAgICBjb25zdGFudGUgZXZvbHVjacOzbiB5IGFwcmVuZGl6YWplLiBNaSBiYWNrZ3JvdW5kIGVuIGVsZWN0csOzbmljYVxuICAgICAgICAgICAgICAgIHkgbWljcm9zb2xkYWR1cmEgU01EIGhhIGRlc2Fycm9sbGFkbyBtaSBwZW5zYW1pZW50byBsw7NnaWNvIHlcbiAgICAgICAgICAgICAgICBoYWJpbGlkYWRlcyBkZSByZXNvbHVjacOzbiBkZSBwcm9ibGVtYXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIERpc2ZydXRvIGRlc2Fycm9sbGFuZG8gc29sdWNpb25lcyBxdWUgc2F0aXNmYWNlbiBsYXMgbmVjZXNpZGFkZXNcbiAgICAgICAgICAgICAgICBkZSBjbGllbnRlcyB5IHVzdWFyaW9zLiBIZSBwYXJ0aWNpcGFkbyBlbiBwcm95ZWN0b3MgZ3J1cGFsZXMsXG4gICAgICAgICAgICAgICAgZG9uZGUgaGUgb2J0ZW5pZG8gZXhjZWxlbnRlcyByZXN1bHRhZG9zIGdyYWNpYXMgYSBtaSBjYXBhY2lkYWRcbiAgICAgICAgICAgICAgICBkZSBhcHJlbmRpemFqZSB5IGNvbXByb21pc28uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICBFc3Blcm8gY29uIGludGVyw6lzIGxhIG9wb3J0dW5pZGFkIGRlIGFwb3J0YXIgbWlzIGhhYmlsaWRhZGVzIHlcbiAgICAgICAgICAgICAgICBwYXNpw7NuIGEgc3UgcHLDs3hpbW8gcHJveWVjdG8sIGNvbnRyaWJ1eWVuZG8gYSBzdSDDqXhpdG8gY29uIG1pc1xuICAgICAgICAgICAgICAgIGNvbm9jaW1pZW50b3MgeSBkZWRpY2FjacOzbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyByZWxhdGl2ZSBoLW1heCByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWRhcmtcbiAgICAgICAgICAgIGJnLWxpZ2h0IHAtOCBkYXJrOmJnLWRhcmsgZGFyazpib3JkZXItbGlnaHQgeGw6Y29sLXNwYW4tNCBtZDpvcmRlci0xIG1kOmNvbC1zcGFuLThcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMiVdIGgtWzEwMyVdIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmsgZGFyazpiZy1saWdodFwiIC8+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cHJvZmlsZVBpY31cbiAgICAgICAgICAgICAgICBhbHQ9XCJBbnRvbmlvIFJvZHLDrWd1ZXpcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcm91bmRlZC0yeGxcIlxuICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA3NjhweCkgMTAwdncsXG4gICAgICAgICAgICAgICAgKG1heC13aWR0aDogMTIwMHB4KSA1MHZ3LFxuICAgICAgICAgICAgICAgIDMzdndcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4geGw6Y29sLXNwYW4tOCB4bDpmbGV4LXJvdyB4bDppdGVtcy1jZW50ZXIgbWQ6b3JkZXItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIHhsOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGQgbWQ6dGV4dC02eGwgc206dGV4dC01eGwgeHM6dGV4dC00eGxcIj5cbiAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezJ9IC8+K1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NSBkYXJrOnRleHQtbGlnaHQvNzUgeGw6dGV4dC1jZW50ZXIgbWQ6dGV4dC1sZyBcIj5cbiAgICAgICAgICAgICAgICAgIGNsaWVudGVzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGQgbWQ6dGV4dC02eGwgc206dGV4dC01eGwgeHM6dGV4dC00eGxcIj5cbiAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezV9IC8+K1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NSBkYXJrOnRleHQtbGlnaHQvNzVcIj5cbiAgICAgICAgICAgICAgICAgIHByb3llY3Rvc1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkIG1kOnRleHQtNnhsIHNtOnRleHQtNXhsIHhzOnRleHQtNHhsXCI+XG4gICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXs4fSAvPitcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzUgZGFyazp0ZXh0LWxpZ2h0Lzc1XCI+XG4gICAgICAgICAgICAgICAgICBleHBlcmllbmNpYSAobWVzZXMpXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2tpbGxzIC8+XG4gICAgICAgICAgPEV4cGVyaWVuY2UgLz5cbiAgICAgICAgICA8RWR1Y2F0aW9uIC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiTGF5b3V0IiwiSGVhZCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJwcm9maWxlUGljIiwidXNlSW5WaWV3IiwidXNlTW90aW9uVmFsdWUiLCJ1c2VTcHJpbmciLCJTa2lsbHMiLCJFeHBlcmllbmNlIiwiRWR1Y2F0aW9uIiwiQW5pbWF0ZWROdW1iZXJzIiwidmFsdWUiLCJyZWYiLCJtb3Rpb25WYWx1ZSIsInNwcmluZ1ZhbHVlIiwiZHVyYXRpb24iLCJpc0luVmlldyIsIm9uY2UiLCJzZXQiLCJvbiIsImxhdGVzdCIsImN1cnJlbnQiLCJ0b0ZpeGVkIiwidGV4dENvbnRlbnQiLCJzcGFuIiwiYWJvdXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJ0ZXh0IiwiZGl2IiwiaDIiLCJwIiwic3JjIiwiYWx0IiwicHJpb3JpdHkiLCJzaXplcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});