(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
var _jsxFileName = "/home/neri/code/dionisio-landing/components/Layout.js";



var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/neri/code/dionisio-landing/components/Sidebar.js";


var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "side-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "dionisio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "By EpsiDev")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "side-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Geting started"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Struture"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Usage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "side-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "download")));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fneri%2Fcode%2Fdionisio-landing%2Fpages%2Findex.js!./":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fneri%2Fcode%2Fdionisio-landing%2Fpages%2Findex.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_6dc2816e14fab51b8269 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_6dc2816e14fab51b8269 */ "dll-reference dll_6dc2816e14fab51b8269"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/neri/code/dionisio-landing/pages/index.js";



function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Dionisio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laudantium maxime iste fugit ullam corporis aut expedita necessitatibus, doloremque ad sed quam, eligendi vitae temporibus, culpa ipsum ducimus dignissimos soluta!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Gettin started"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa exercitationem aliquam blanditiis corporis similique, aliquid aspernatur. Delectus totam quos enim labore doloremque accusamus, magni nesciunt aliquam maiores. Tempora, cum itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut quidem reprehenderit doloribus ab dicta voluptate pariatur, deserunt rem ipsa reiciendis tempora. Vel, quod temporibus eligendi deleniti quo expedita vero."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa exercitationem aliquam blanditiis corporis similique, aliquid aspernatur. Delectus totam quos enim labore doloremque accusamus, magni nesciunt aliquam maiores. Tempora, cum itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut quidem reprehenderit doloribus ab dicta voluptate pariatur, deserunt rem ipsa reiciendis tempora. Vel, quod temporibus eligendi deleniti quo expedita vero."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa exercitationem aliquam blanditiis corporis similique, aliquid aspernatur. Delectus totam quos enim labore doloremque accusamus, magni nesciunt aliquam maiores. Tempora, cum itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut quidem reprehenderit doloribus ab dicta voluptate pariatur, deserunt rem ipsa reiciendis tempora. Vel, quod temporibus eligendi deleniti quo expedita vero."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Structure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur perferendis minus nemo facilis placeat ab, inventore dignissimos sequi dolore eligendi magni, voluptatibus blanditiis iste deleniti quia laboriosam consequuntur earum!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Usage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas placeat repudiandae ipsa voluptatum dolorem, illum obcaecati minus iure qui sapiente ut rem magni ex in repellat maxime quod. Harum, laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio accusantium provident sapiente minus! Maiores, libero amet perferendis eos optio dolore quibusdam sapiente repellendus recusandae quam, quae maxime, architecto in excepturi!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas placeat repudiandae ipsa voluptatum dolorem, illum obcaecati minus iure qui sapiente ut rem magni ex in repellat maxime quod. Harum, laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio accusantium provident sapiente minus! Maiores, libero amet perferendis eos optio dolore quibusdam sapiente repellendus recusandae quam, quae maxime, architecto in excepturi!"));
}

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fneri%2Fcode%2Fdionisio-landing%2Fpages%2Findex.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fneri%2Fcode%2Fdionisio-landing%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fneri%2Fcode%2Fdionisio-landing%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_6dc2816e14fab51b8269":
/*!*******************************************!*\
  !*** external "dll_6dc2816e14fab51b8269" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_6dc2816e14fab51b8269;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map