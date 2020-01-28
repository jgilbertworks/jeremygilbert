webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/components/Chart.js":
/*!***********************************!*\
  !*** ./pages/components/Chart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var _jsxFileName = "/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/Chart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var data = [["Task", "Hours per Day"], ["front-end", 10], ["back-end", 2.5], ["data", 2.5], ["design", 2.5] // ["Sleep", 7] // CSS-style declaration
];
var options = {
  // title: "my skills",
  pieHole: 0.0,
  is3D: false,
  fontSize: 16,
  fontName: "Arial",
  fontWeight: "bold",
  // fontColor: 'black',
  pieSliceBorderColor: "lightgray",
  pieSliceTextStyle: {
    color: "black"
  },
  tooltip: {
    text: "percentage"
  },
  legend: "none",
  pieSliceText: "label",
  pieStartAngle: 275,
  backgroundColor: "whitesmoke",
  chartArea: {
    left: 15,
    top: 15,
    right: 15,
    bottom: 50
  },
  // chartArea: { left: 15, top: 15, right: 0, bottom: 0 },
  slices: [{
    color: "#FF7F00",
    opacity: 0.8,
    offset: 0.05
  }, {
    color: "#4E8098",
    opacity: 0.8,
    offset: 0.1
  }, {
    color: "#CED3DC",
    opacity: 0.8,
    offset: 0.15
  }, {
    color: "#FCF7F8",
    offset: 0.1
  }] // chartArea: {
  //   left: 0,
  //   top: 0,
  //   width: "100%",
  //   height: "80%"
  // },

};

var SkillChart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SkillChart, _Component);

  function SkillChart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SkillChart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SkillChart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SkillChart, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-3944541614" + " " + "chart-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3944541614" + " " + 'list-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "front"), __jsx("li", {
        className: "jsx-3944541614" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3944541614" + " " + 'icon-text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "html5"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "html5"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-3944541614" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3944541614" + " " + 'icon-text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "css3"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "css3"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-3944541614" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3944541614" + " " + 'icon-text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "JavaScript"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "js-square"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-3944541614" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3944541614" + " " + 'icon-text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "React"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "react"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-3944541614" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3944541614" + " " + 'icon-text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Chrome Dev Tools"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "chrome"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })))), __jsx("div", {
        className: "jsx-3944541614" + " " + 'chart-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "my skills"), __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_8__["default"], {
        loader: __jsx("div", {
          className: "jsx-3944541614",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, "Loading Chart"),
        chartType: "PieChart",
        width: "100%",
        height: "500px",
        data: data,
        options: options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3944541614" + " " + 'list-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "back"), __jsx("li", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "python"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "node"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("img", {
        src: "/mongodb.png",
        alt: "my image",
        className: "jsx-3944541614" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("img", {
        src: "/mysql.png",
        alt: "my image",
        className: "jsx-3944541614" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-3944541614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("img", {
        src: "/express.png",
        alt: "my image",
        className: "jsx-3944541614" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3944541614",
        __self: this
      }, ".chart-wrapper.jsx-3944541614{display:grid;padding:2rem;border-top:1px solid lightgray;grid-template-columns:1fr 60% 1fr;background-color:whitesmoke;text-align:center;margin:0 auto;font-family:\"Arial\";}.skill-img.jsx-3944541614{background-size:cover;width:75px;}.icon-text.jsx-3944541614{font-size:2.5vw;}ul.jsx-3944541614{list-style-type:none;font-size:25px;padding:15px;}li.jsx-3944541614{padding:1px;}.fa.jsx-3944541614{padding:3px;}@media (max-width:1440px){}@media (max-width:1024px){.chart-wrapper.jsx-3944541614{grid-template-columns:1fr;grid-template-rows:1fr 60% 1fr;display:block;}ul.jsx-3944541614{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.li.jsx-3944541614{margin:.05rem;padding:.05rem;}.list-header.jsx-3944541614{display:none;}}@media (max-width:960px){}@media (max-width:768px){ul.jsx-3944541614{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.list-header.jsx-3944541614{display:none;}}@media (max-width:425px){.chart-wrapper.jsx-3944541614{margin:.05rem;padding:.05rem;font-size:14px;}ul.jsx-3944541614{display:none;}h1.jsx-3944541614{font-size:36px;margin:2rem 0px 0px 0px;}.chart-container.jsx-3944541614{height:auto;padding:.5rem;font-size:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIb0IsQUFHMEIsQUFXUyxBQUlOLEFBR0ssQUFLVCxBQUdBLEFBYWdCLEFBS2IsQUFJQyxBQUlELEFBUUEsQUFJQSxBQU1DLEFBTUQsQUFJRSxBQUlILFlBNURoQixBQUdBLEFBMERrQixDQW5GSCxBQW1EYixBQVlBLEFBWUEsQ0E1QmlCLEFBc0JBLENBVVMsQ0FqRTVCLEtBR2lCLENBUEosSUFUb0IsQUFxQ0UsQUE4Q2hCLEdBcENqQixBQXNCaUIsSUEzRG5CLEdBT2UsR0E4RGIsRUFLQSxHQWRBLEtBcERGLFFBakJvQyxBQXFDbEIsY0FDaEIsR0FHZ0MsQUFnQkEsaUJBeERKLDRCQUNWLGtCQUNKLGNBQ00sb0JBQ3RCLGtCQXFDRSxBQWdCQSIsImZpbGUiOiIvVXNlcnMvamVyZW15Z2lsYmVydC9EZXNrdG9wL2plcmVteWdpbGJlcnQvcGFnZXMvY29tcG9uZW50cy9DaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiO1xuaW1wb3J0IHsgZmFCb2xkIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5jb25zdCBkYXRhID0gW1xuICBbXCJUYXNrXCIsIFwiSG91cnMgcGVyIERheVwiXSxcbiAgW1wiZnJvbnQtZW5kXCIsIDEwXSxcbiAgW1wiYmFjay1lbmRcIiwgMi41XSxcbiAgW1wiZGF0YVwiLCAyLjVdLFxuICBbXCJkZXNpZ25cIiwgMi41XVxuICAvLyBbXCJTbGVlcFwiLCA3XSAvLyBDU1Mtc3R5bGUgZGVjbGFyYXRpb25cbl07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIC8vIHRpdGxlOiBcIm15IHNraWxsc1wiLFxuICBwaWVIb2xlOiAwLjAsXG4gIGlzM0Q6IGZhbHNlLFxuICBmb250U2l6ZTogMTYsXG4gIGZvbnROYW1lOiBcIkFyaWFsXCIsXG4gIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAvLyBmb250Q29sb3I6ICdibGFjaycsXG4gIHBpZVNsaWNlQm9yZGVyQ29sb3I6IFwibGlnaHRncmF5XCIsXG4gIHBpZVNsaWNlVGV4dFN0eWxlOiB7XG4gICAgY29sb3I6IFwiYmxhY2tcIlxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgdGV4dDogXCJwZXJjZW50YWdlXCJcbiAgfSxcbiAgbGVnZW5kOiBcIm5vbmVcIixcbiAgcGllU2xpY2VUZXh0OiBcImxhYmVsXCIsXG4gIHBpZVN0YXJ0QW5nbGU6IDI3NSxcbiAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlc21va2VcIixcbiAgY2hhcnRBcmVhOiB7IGxlZnQ6IDE1LCB0b3A6IDE1LCByaWdodDogMTUsIGJvdHRvbTogNTAgfSxcblxuICAvLyBjaGFydEFyZWE6IHsgbGVmdDogMTUsIHRvcDogMTUsIHJpZ2h0OiAwLCBib3R0b206IDAgfSxcbiAgc2xpY2VzOiBbXG4gICAge1xuICAgICAgY29sb3I6IFwiI0ZGN0YwMFwiLFxuICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgb2Zmc2V0OiAwLjA1XG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogXCIjNEU4MDk4XCIsXG4gICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICBvZmZzZXQ6IDAuMVxuICAgIH0sXG4gICAge1xuICAgICAgY29sb3I6IFwiI0NFRDNEQ1wiLFxuICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgb2Zmc2V0OiAwLjE1XG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogXCIjRkNGN0Y4XCIsXG4gICAgICBvZmZzZXQ6IDAuMVxuICAgIH1cbiAgXVxuICAvLyBjaGFydEFyZWE6IHtcbiAgLy8gICBsZWZ0OiAwLFxuICAvLyAgIHRvcDogMCxcbiAgLy8gICB3aWR0aDogXCIxMDAlXCIsXG4gIC8vICAgaGVpZ2h0OiBcIjgwJVwiXG4gIC8vIH0sXG59O1xuXG5jbGFzcyBTa2lsbENoYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdsaXN0LWhlYWRlcic+ZnJvbnQ8L2gxPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZhXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ljb24tdGV4dCc+aHRtbDU8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W1wiZmFiXCIsIFwiaHRtbDVcIl19IHNpemU9XCIzeFwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZhXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ljb24tdGV4dCc+Y3NzMzwvcD5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbXCJmYWJcIiwgXCJjc3MzXCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpY29uLXRleHQnPkphdmFTY3JpcHQ8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W1wiZmFiXCIsIFwianMtc3F1YXJlXCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpY29uLXRleHQnPlJlYWN0PC9wPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcInJlYWN0XCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpY29uLXRleHQnPkNocm9tZSBEZXYgVG9vbHM8L3A+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W1wiZmFiXCIsIFwiY2hyb21lXCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXJ0LWNvbnRhaW5lcic+XG4gICAgICAgICAgPGgxPm15IHNraWxsczwvaDE+XG4gICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICBsb2FkZXI9ezxkaXY+TG9hZGluZyBDaGFydDwvZGl2Pn1cbiAgICAgICAgICAgIGNoYXJ0VHlwZT1cIlBpZUNoYXJ0XCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MDBweFwiXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdsaXN0LWhlYWRlcic+YmFjazwvaDE+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W1wiZmFiXCIsIFwicHl0aG9uXCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbXCJmYWJcIiwgXCJub2RlXCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJza2lsbC1pbWdcIiBzcmM9XCIvbW9uZ29kYi5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNraWxsLWltZ1wiIHNyYz1cIi9teXNxbC5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNraWxsLWltZ1wiIHNyYz1cIi9leHByZXNzLnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY2hhcnQtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgLy8gcGFkZGluZzogMTAwcHggMTAwcHggMHB4IDEwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2MCUgMWZyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNraWxsLWltZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pY29uLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjV2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmEge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vbWVkaWEgcXVlcmllc1xuXG4gICAgICAgICAgbWVkaWEgKG1heC13aWR0aDogMjU2MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIC5jaGFydC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDYwJSAxZnI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGkge1xuICAgICAgICAgICAgICBtYXJnaW46IC4wNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogLjA1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAuY2hhcnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogLjA1cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAuMDVyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDBweCAwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxDaGFydDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/Chart.js */"));
    }
  }]);

  return SkillChart;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SkillChart);

/***/ })

})
//# sourceMappingURL=about.js.9a0e5e9c840b246422df.hot-update.js.map