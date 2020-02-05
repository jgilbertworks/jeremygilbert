webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var _jsxFileName = "/Users/jeremygilbert/Desktop/jeremygilbert/pages/contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


 // get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";



 // import Footer from './Footer';



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_14__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faEnvelopeSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faKey"]);

var Contact =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact, _Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (e) {
      e.preventDefault();
      console.log("The link was clicked.");
      window.location.assign("https://github.com/jgilbertworks");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickTwo", function (e) {
      e.preventDefault();
      console.log("clicked");
      window.location.assign("https://www.linkedin.com/in/jeremy-gilbert-41323329/");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-3984738283",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3984738283" + " " + "contact-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3984738283" + " " + "contact-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3984738283" + " " + "contact-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "contact me"), __jsx("div", {
        className: "jsx-3984738283" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        cursor: "pointer",
        onClick: this.handleClickTwo,
        icon: ["fab", "linkedin"],
        size: "10x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3984738283" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        cursor: "pointer",
        onClick: this.handleClick,
        icon: ["fab", "github-square"],
        size: "10x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), __jsx("h1", {
        className: "jsx-3984738283" + " " + 'contact-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "jgilberworks@gmail.com"), __jsx("h1", {
        className: "jsx-3984738283" + " " + 'contact-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "(510) 681-3855"))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3984738283",
        __self: this
      }, ".contact-wrapper.jsx-3984738283{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:100vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.contact-container.jsx-3984738283{padding:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.contact-header.jsx-3984738283{color:black;font-size:36px;font-family:\"Arial\";}.icon.jsx-3984738283{display:inline-block;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;margin:1rem;}@media (max-width:425px){.contact-header.jsx-3984738283{font-size:24px;}.icon.jsx-3984738283{display:grid;margin:0 auto;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IsQUFHMEIsQUFTQSxBQUlELEFBS1MsQUFVSixBQUdGLFlBakJBLENBYlcsQUFTUCxBQXNCSCxFQUhoQixNQVZvQixNQUpBLEFBa0JBLFlBL0JHLEVBa0JMLE1BSnBCLGVBYmUsYUFDTSx1QkE4Qm5CLFFBdkJGLE1BVW9CLGtCQUNOLFlBQ2QsMEJBbEJvQixrQkFFcEIiLCJmaWxlIjoiL1VzZXJzL2plcmVteWdpbGJlcnQvRGVza3RvcC9qZXJlbXlnaWxiZXJ0L3BhZ2VzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyXCI7XG4vLyBnZXQgb3VyIGZvbnRhd2Vzb21lIGltcG9ydHNcbi8vIGltcG9ydCB7IGZhSG9tZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhYiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuLy8gaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHsgZmFFbnZlbG9wZVNxdWFyZSwgZmFLZXkgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmxpYnJhcnkuYWRkKGZhYiwgZmFFbnZlbG9wZVNxdWFyZSwgZmFLZXkpO1xuXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJUaGUgbGluayB3YXMgY2xpY2tlZC5cIik7XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcImh0dHBzOi8vZ2l0aHViLmNvbS9qZ2lsYmVydHdvcmtzXCIpO1xuICB9O1xuXG4gIGhhbmRsZUNsaWNrVHdvID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKFxuICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamVyZW15LWdpbGJlcnQtNDEzMjMzMjkvXCJcbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkZXJcIj5jb250YWN0IG1lPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgY3Vyc29yPXtcInBvaW50ZXJcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrVHdvfVxuICAgICAgICAgICAgICAgIGljb249e1tcImZhYlwiLCBcImxpbmtlZGluXCJdfVxuICAgICAgICAgICAgICAgIHNpemU9XCIxMHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGN1cnNvcj17XCJwb2ludGVyXCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICBpY29uPXtbXCJmYWJcIiwgXCJnaXRodWItc3F1YXJlXCJdfVxuICAgICAgICAgICAgICAgIHNpemU9XCIxMHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0LWhlYWRlcic+amdpbGJlcndvcmtzQGdtYWlsLmNvbTwvaDE+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29udGFjdC1oZWFkZXInPig1MTApIDY4MS0zODU1PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWN0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3QtaGVhZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG1lZGlhIHF1ZXJpZXMgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAuY29udGFjdC1oZWFkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl19 */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/contact.js */"));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.20b109f7c0a3dd6f12f3.hot-update.js.map