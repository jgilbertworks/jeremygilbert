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
        className: "jsx-3828792192",
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
        className: "jsx-3828792192" + " " + "contact-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3828792192" + " " + "contact-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3828792192" + " " + "contact-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "contact me"), __jsx("div", {
        className: "jsx-3828792192" + " " + "icon",
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
        className: "jsx-3828792192" + " " + "icon",
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
        className: "jsx-3828792192" + " " + 'contact-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "jgilberworks@gmail.com"), __jsx("h1", {
        className: "jsx-3828792192" + " " + 'contact-header',
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
        id: "3828792192",
        __self: this
      }, ".contact-wrapper.jsx-3828792192{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:100vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.contact-container.jsx-3828792192{padding:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.contact-header.jsx-3828792192{color:black;font-size:36px;font-family:\"Arial\";}.icon.jsx-3828792192{display:inline-block;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;margin:1rem;}@media (max-width:425px){.contact-header.jsx-3828792192{font-size:24px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IsQUFHMEIsQUFTQSxBQUlELEFBS1MsQUFVSixZQWRGLENBYlcsQUFTUCxFQW1CbkIsTUFWb0IsTUFKQSxZQWJHLEVBa0JMLE1BSnBCLGVBYmUsYUFDTSwrQkFPckIsTUFVb0Isa0JBQ04sWUFDZCwwQkFsQm9CLGtCQUVwQiIsImZpbGUiOiIvVXNlcnMvamVyZW15Z2lsYmVydC9EZXNrdG9wL2plcmVteWdpbGJlcnQvcGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbi8vIGdldCBvdXIgZm9udGF3ZXNvbWUgaW1wb3J0c1xuLy8gaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFiIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XG5pbXBvcnQgeyBmYUVudmVsb3BlU3F1YXJlLCBmYUtleSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxubGlicmFyeS5hZGQoZmFiLCBmYUVudmVsb3BlU3F1YXJlLCBmYUtleSk7XG5cbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBsaW5rIHdhcyBjbGlja2VkLlwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKFwiaHR0cHM6Ly9naXRodWIuY29tL2pnaWxiZXJ0d29ya3NcIik7XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2tUd28gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXG4gICAgICBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qZXJlbXktZ2lsYmVydC00MTMyMzMyOS9cIlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3Qtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250YWN0LWhlYWRlclwiPmNvbnRhY3QgbWU8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBjdXJzb3I9e1wicG9pbnRlclwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tUd299XG4gICAgICAgICAgICAgICAgaWNvbj17W1wiZmFiXCIsIFwibGlua2VkaW5cIl19XG4gICAgICAgICAgICAgICAgc2l6ZT1cIjEweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgY3Vyc29yPXtcInBvaW50ZXJcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIGljb249e1tcImZhYlwiLCBcImdpdGh1Yi1zcXVhcmVcIl19XG4gICAgICAgICAgICAgICAgc2l6ZT1cIjEweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRhY3QtaGVhZGVyJz5qZ2lsYmVyd29ya3NAZ21haWwuY29tPC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0LWhlYWRlcic+KDUxMCkgNjgxLTM4NTU8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhY3Qtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdC1oZWFkZXIge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbWVkaWEgcXVlcmllcyBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICAgIC5jb250YWN0LWhlYWRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgLy8gZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIC8vIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXX0= */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/contact.js */"));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.4b4683a59d4621c347e5.hot-update.js.map