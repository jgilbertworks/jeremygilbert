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
        className: "jsx-938109805",
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
        className: "jsx-938109805" + " " + "contact-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-938109805" + " " + "contact-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-938109805" + " " + "contact-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "contact me"), __jsx("div", {
        className: "jsx-938109805" + " " + "icon",
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
        className: "jsx-938109805" + " " + "icon",
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
        className: "jsx-938109805" + " " + 'contact-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "jgilberworks@gmail.com"), __jsx("h1", {
        className: "jsx-938109805" + " " + 'contact-header',
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
        id: "938109805",
        __self: this
      }, ".contact-wrapper.jsx-938109805{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:100vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.contact-container.jsx-938109805{padding:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.contact-header.jsx-938109805{color:black;font-size:36px;font-family:\"Arial\";}.icon.jsx-938109805{display:inline-block;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;margin:1rem;}@media (max-width:425px){.contact-header.jsx-938109805{font-size:24px;}.icon.jsx-938109805{display:grid;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IsQUFHMEIsQUFTQSxBQUlELEFBS1MsQUFVSixBQUdGLFlBakJBLENBYlcsQUFTUCxBQXNCbkIsRUFIQSxNQVZvQixNQUpBLFlBYkcsRUFrQkwsTUFKcEIsZUFiZSxhQUNNLCtCQU9yQixNQVVvQixrQkFDTixZQUNkLDBCQWxCb0Isa0JBRXBCIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuLy8gZ2V0IG91ciBmb250YXdlc29tZSBpbXBvcnRzXG4vLyBpbXBvcnQgeyBmYUhvbWUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYWIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbi8vIGltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcbmltcG9ydCB7IGZhRW52ZWxvcGVTcXVhcmUsIGZhS2V5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5saWJyYXJ5LmFkZChmYWIsIGZhRW52ZWxvcGVTcXVhcmUsIGZhS2V5KTtcblxuY2xhc3MgQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIGxpbmsgd2FzIGNsaWNrZWQuXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCJodHRwczovL2dpdGh1Yi5jb20vamdpbGJlcnR3b3Jrc1wiKTtcbiAgfTtcblxuICBoYW5kbGVDbGlja1R3byA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2plcmVteS1naWxiZXJ0LTQxMzIzMzI5L1wiXG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZGVyXCI+Y29udGFjdCBtZTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGN1cnNvcj17XCJwb2ludGVyXCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1R3b31cbiAgICAgICAgICAgICAgICBpY29uPXtbXCJmYWJcIiwgXCJsaW5rZWRpblwiXX1cbiAgICAgICAgICAgICAgICBzaXplPVwiMTB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBjdXJzb3I9e1wicG9pbnRlclwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgaWNvbj17W1wiZmFiXCIsIFwiZ2l0aHViLXNxdWFyZVwiXX1cbiAgICAgICAgICAgICAgICBzaXplPVwiMTB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29udGFjdC1oZWFkZXInPmpnaWxiZXJ3b3Jrc0BnbWFpbC5jb208L2gxPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRhY3QtaGVhZGVyJz4oNTEwKSA2ODEtMzg1NTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFjdC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0LWhlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBtZWRpYSBxdWVyaWVzIFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICAgICAgLmNvbnRhY3QtaGVhZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/contact.js */"));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.d6fda47e42ebd3a323b0.hot-update.js.map