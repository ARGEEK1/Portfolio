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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_profile_developer_pic_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/profile/developer-pic-2.jpg */ \"./public/images/profile/developer-pic-2.jpg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)(ref);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Antonio Rodr\\xedguez | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"La Pasi\\xf3n Alimenta El Prop\\xf3sito!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"Sobre M\\xed\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"\\xa1Hola! \\uD83D\\uDC4B Soy Antonio Rodriguez, desarrollador Full Stack en constante evoluci\\xf3n y aprendizaje. Mi background en electr\\xf3nica y microsoldadura SMD ha desarrollado mi pensamiento l\\xf3gico y habilidades de resoluci\\xf3n de problemas.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"Disfruto desarrollando soluciones que satisfacen las necesidades de clientes y usuarios. He participado en proyectos grupales, donde he obtenido excelentes resultados gracias a mi capacidad de aprendizaje y compromiso.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Espero con inter\\xe9s la oportunidad de aportar mis habilidades y pasi\\xf3n a su pr\\xf3ximo proyecto, contribuyendo a su \\xe9xito con mis conocimientos y dedicaci\\xf3n.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            src: _public_images_profile_developer_pic_2_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                            alt: \"Antonio Rodr\\xedguez\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 2\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"clientes\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 5\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 92,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"proyectos\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 8\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 101,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"experiencia (meses)\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/Portfolio/src/pages/about.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWVOLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0LmpzP2ZkNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9maWxlUGljIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3Byb2ZpbGUvZGV2ZWxvcGVyLXBpYy0yLmpwZ1wiO1xuaW1wb3J0IHsgdXNlSW5WaWV3LCB1c2VNb3Rpb25WYWx1ZSwgdXNlU3ByaW5nIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgQW5pbWF0ZWROdW1iZXJzID0gKHsgdmFsdWUgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG1vdGlvblZhbHVlID0gdXNlTW90aW9uVmFsdWUoMCk7XG4gIGNvbnN0IHNwcmluZ1ZhbHVlID0gdXNlU3ByaW5nKG1vdGlvblZhbHVlLCB7IGR1cmF0aW9uOiAzMDAwIH0pO1xuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNJblZpZXcpIHtcbiAgICAgIG1vdGlvblZhbHVlLnNldCh2YWx1ZSk7XG4gICAgfVxuICB9LCBbaXNJblZpZXcsIHZhbHVlLCBtb3Rpb25WYWx1ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3ByaW5nVmFsdWUub24oXCJjaGFuZ2VcIiwgKGxhdGVzdCkgPT4ge1xuICAgICAgaWYgKHJlZi5jdXJyZW50ICYmIGxhdGVzdC50b0ZpeGVkKDApIDw9IHZhbHVlKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LnRleHRDb250ZW50ID0gbGF0ZXN0LnRvRml4ZWQoMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtzcHJpbmdWYWx1ZSwgdmFsdWVdKTtcblxuICByZXR1cm4gPHNwYW4gcmVmPXtyZWZ9Pjwvc3Bhbj47XG59O1xuY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QW50b25pbyBSb2Ryw61ndWV6IHwgQWJvdXQgUGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJhbnkgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicHQtMTZcIj5cbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0XG4gICAgICAgICAgICB0ZXh0PVwiTGEgUGFzacOzbiBBbGltZW50YSBFbCBQcm9ww7NzaXRvIVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xNlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdy1mdWxsIGdyaWQtY29scy04IGdhcC0xNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWxnIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1kYXJrLzc1XCI+XG4gICAgICAgICAgICAgICAgU29icmUgTcOtXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgwqFIb2xhISDwn5GLIFNveSBBbnRvbmlvIFJvZHJpZ3VleiwgZGVzYXJyb2xsYWRvciBGdWxsIFN0YWNrIGVuXG4gICAgICAgICAgICAgICAgY29uc3RhbnRlIGV2b2x1Y2nDs24geSBhcHJlbmRpemFqZS4gTWkgYmFja2dyb3VuZCBlbiBlbGVjdHLDs25pY2FcbiAgICAgICAgICAgICAgICB5IG1pY3Jvc29sZGFkdXJhIFNNRCBoYSBkZXNhcnJvbGxhZG8gbWkgcGVuc2FtaWVudG8gbMOzZ2ljbyB5XG4gICAgICAgICAgICAgICAgaGFiaWxpZGFkZXMgZGUgcmVzb2x1Y2nDs24gZGUgcHJvYmxlbWFzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTQgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICBEaXNmcnV0byBkZXNhcnJvbGxhbmRvIHNvbHVjaW9uZXMgcXVlIHNhdGlzZmFjZW4gbGFzIG5lY2VzaWRhZGVzXG4gICAgICAgICAgICAgICAgZGUgY2xpZW50ZXMgeSB1c3Vhcmlvcy4gSGUgcGFydGljaXBhZG8gZW4gcHJveWVjdG9zIGdydXBhbGVzLFxuICAgICAgICAgICAgICAgIGRvbmRlIGhlIG9idGVuaWRvIGV4Y2VsZW50ZXMgcmVzdWx0YWRvcyBncmFjaWFzIGEgbWkgY2FwYWNpZGFkXG4gICAgICAgICAgICAgICAgZGUgYXByZW5kaXphamUgeSBjb21wcm9taXNvLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgRXNwZXJvIGNvbiBpbnRlcsOpcyBsYSBvcG9ydHVuaWRhZCBkZSBhcG9ydGFyIG1pcyBoYWJpbGlkYWRlcyB5XG4gICAgICAgICAgICAgICAgcGFzacOzbiBhIHN1IHByw7N4aW1vIHByb3llY3RvLCBjb250cmlidXllbmRvIGEgc3Ugw6l4aXRvIGNvbiBtaXNcbiAgICAgICAgICAgICAgICBjb25vY2ltaWVudG9zIHkgZGVkaWNhY2nDs24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgcmVsYXRpdmUgaC1tYXggcm91bmRlZC0yeGwgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrXG4gICAgICAgICAgICBiZy1saWdodCBwLThcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMiVdIGgtWzEwMyVdIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmtcIiAvPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2ZpbGVQaWN9XG4gICAgICAgICAgICAgICAgYWx0PVwiQW50b25pbyBSb2Ryw61ndWV6XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHJvdW5kZWQtMnhsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXsyfSAvPitcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzVcIj5cbiAgICAgICAgICAgICAgICAgIGNsaWVudGVzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezV9IC8+K1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NVwiPlxuICAgICAgICAgICAgICAgICAgcHJveWVjdG9zXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezh9IC8+K1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NVwiPlxuICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jaWEgKG1lc2VzKVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiTGF5b3V0IiwiSGVhZCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJwcm9maWxlUGljIiwidXNlSW5WaWV3IiwidXNlTW90aW9uVmFsdWUiLCJ1c2VTcHJpbmciLCJBbmltYXRlZE51bWJlcnMiLCJ2YWx1ZSIsInJlZiIsIm1vdGlvblZhbHVlIiwic3ByaW5nVmFsdWUiLCJkdXJhdGlvbiIsImlzSW5WaWV3Iiwic2V0Iiwib24iLCJsYXRlc3QiLCJjdXJyZW50IiwidG9GaXhlZCIsInRleHRDb250ZW50Iiwic3BhbiIsImFib3V0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwidGV4dCIsImRpdiIsImgyIiwicCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});