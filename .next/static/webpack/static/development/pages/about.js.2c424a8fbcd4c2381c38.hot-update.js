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
        className: "jsx-1728286175" + " " + "chart-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "front"), __jsx("li", {
        className: "jsx-1728286175" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "html5"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1728286175" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "css3"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1728286175" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "js-square"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1728286175" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "react"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1728286175" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "chrome"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })))), __jsx("div", {
        className: "jsx-1728286175" + " " + 'chart-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "my skills"), __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_8__["default"], {
        loader: __jsx("div", {
          className: "jsx-1728286175",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
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
          lineNumber: 92
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "back"), __jsx("li", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "python"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "node"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("img", {
        src: "/mongodb.png",
        alt: "my image",
        className: "jsx-1728286175" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("img", {
        src: "/mysql.png",
        alt: "my image",
        className: "jsx-1728286175" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1728286175",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("img", {
        src: "/express.png",
        alt: "my image",
        className: "jsx-1728286175" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1728286175",
        __self: this
      }, ".chart-wrapper.jsx-1728286175{display:grid;padding:2rem;border-top:1px solid lightgray;grid-template-columns:1fr 60% 1fr;background-color:whitesmoke;text-align:center;margin:0 auto;font-family:\"Arial\";}.skill-img.jsx-1728286175{background-size:cover;width:75px;}ul.jsx-1728286175{list-style-type:none;font-size:25px;padding:15px;}li.jsx-1728286175{padding:1px;}.fa.jsx-1728286175{padding:3px;}@media (max-width:1440px){}@media (max-width:1024px){.chart-wrapper.jsx-1728286175{grid-template-columns:1fr;grid-template-rows:1fr 60% 1fr;display:block;}}@media (max-width:768px){ul.jsx-1728286175{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (max-width:425px){.chart-wrapper.jsx-1728286175{margin:.05rem;padding:.05rem;font-size:14px;}ul.jsx-1728286175{display:none;}h1.jsx-1728286175{font-size:36px;margin:2rem 0px 0px 0px;}.chart-container.jsx-1728286175{height:auto;padding:.5rem;font-size:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIb0IsQUFHMEIsQUFXUyxBQUlELEFBS1QsQUFHQSxBQWFnQixBQVFiLEFBT0MsQUFNRCxBQUlFLEFBSUgsWUE1Q2hCLEFBR0EsQUEwQ2tCLENBaEVILEFBd0RiLENBTmlCLENBVVMsTUE5Q1gsQ0FKSixJQVRvQixBQWtDRSxBQThCaEIsR0FkQSxJQXhDbkIsR0FJZSxHQThDYixFQUtBLEdBZEEsS0FwQ0YsUUFkb0MsQUFrQ2xCLGNBQ2hCLEdBTWdDLGlCQXhDSiw0QkFDVixrQkFDSixjQUNNLG9CQUN0QixrQkFxQ0UiLCJmaWxlIjoiL1VzZXJzL2plcmVteWdpbGJlcnQvRGVza3RvcC9qZXJlbXlnaWxiZXJ0L3BhZ2VzL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWdvb2dsZS1jaGFydHNcIjtcbmltcG9ydCB7IGZhQm9sZCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAgW1wiVGFza1wiLCBcIkhvdXJzIHBlciBEYXlcIl0sXG4gIFtcImZyb250LWVuZFwiLCAxMF0sXG4gIFtcImJhY2stZW5kXCIsIDIuNV0sXG4gIFtcImRhdGFcIiwgMi41XSxcbiAgW1wiZGVzaWduXCIsIDIuNV1cbiAgLy8gW1wiU2xlZXBcIiwgN10gLy8gQ1NTLXN0eWxlIGRlY2xhcmF0aW9uXG5dO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICAvLyB0aXRsZTogXCJteSBza2lsbHNcIixcbiAgcGllSG9sZTogMC4wLFxuICBpczNEOiBmYWxzZSxcbiAgZm9udFNpemU6IDE2LFxuICBmb250TmFtZTogXCJBcmlhbFwiLFxuICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgLy8gZm9udENvbG9yOiAnYmxhY2snLFxuICBwaWVTbGljZUJvcmRlckNvbG9yOiBcImxpZ2h0Z3JheVwiLFxuICBwaWVTbGljZVRleHRTdHlsZToge1xuICAgIGNvbG9yOiBcImJsYWNrXCJcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIHRleHQ6IFwicGVyY2VudGFnZVwiXG4gIH0sXG4gIGxlZ2VuZDogXCJub25lXCIsXG4gIHBpZVNsaWNlVGV4dDogXCJsYWJlbFwiLFxuICBwaWVTdGFydEFuZ2xlOiAyNzUsXG4gIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCIsXG4gIGNoYXJ0QXJlYTogeyBsZWZ0OiAxNSwgdG9wOiAxNSwgcmlnaHQ6IDE1LCBib3R0b206IDUwIH0sXG5cbiAgLy8gY2hhcnRBcmVhOiB7IGxlZnQ6IDE1LCB0b3A6IDE1LCByaWdodDogMCwgYm90dG9tOiAwIH0sXG4gIHNsaWNlczogW1xuICAgIHtcbiAgICAgIGNvbG9yOiBcIiNGRjdGMDBcIixcbiAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgIG9mZnNldDogMC4wNVxuICAgIH0sXG4gICAge1xuICAgICAgY29sb3I6IFwiIzRFODA5OFwiLFxuICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgb2Zmc2V0OiAwLjFcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbG9yOiBcIiNDRUQzRENcIixcbiAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgIG9mZnNldDogMC4xNVxuICAgIH0sXG4gICAge1xuICAgICAgY29sb3I6IFwiI0ZDRjdGOFwiLFxuICAgICAgb2Zmc2V0OiAwLjFcbiAgICB9XG4gIF1cbiAgLy8gY2hhcnRBcmVhOiB7XG4gIC8vICAgbGVmdDogMCxcbiAgLy8gICB0b3A6IDAsXG4gIC8vICAgd2lkdGg6IFwiMTAwJVwiLFxuICAvLyAgIGhlaWdodDogXCI4MCVcIlxuICAvLyB9LFxufTtcblxuY2xhc3MgU2tpbGxDaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGgxPmZyb250PC9oMT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYVwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcImh0bWw1XCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYVwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcImNzczNcIl19IHNpemU9XCIzeFwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZhXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W1wiZmFiXCIsIFwianMtc3F1YXJlXCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYVwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcInJlYWN0XCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYVwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcImNocm9tZVwiXX0gc2l6ZT1cIjN4XCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydC1jb250YWluZXInPlxuICAgICAgICAgIDxoMT5teSBza2lsbHM8L2gxPlxuICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgbG9hZGVyPXs8ZGl2PkxvYWRpbmcgQ2hhcnQ8L2Rpdj59XG4gICAgICAgICAgICBjaGFydFR5cGU9XCJQaWVDaGFydFwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTAwcHhcIlxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGgxPmJhY2s8L2gxPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcInB5dGhvblwiXX0gc2l6ZT1cIjN4XCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W1wiZmFiXCIsIFwibm9kZVwiXX0gc2l6ZT1cIjN4XCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2tpbGwtaW1nXCIgc3JjPVwiL21vbmdvZGIucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJza2lsbC1pbWdcIiBzcmM9XCIvbXlzcWwucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJza2lsbC1pbWdcIiBzcmM9XCIvZXhwcmVzcy5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNoYXJ0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDEwMHB4IDEwMHB4IDBweCAxMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNjAlIDFmcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5za2lsbC1pbWcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9tZWRpYSBxdWVyaWVzXG5cbiAgICAgICAgICBtZWRpYSAobWF4LXdpZHRoOiAyNTYwcHgpIHtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgLmNoYXJ0LXdyYXBwZXIge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNjAlIDFmcjtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICAgIC5jaGFydC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAuMDVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IC4wNXJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMHB4IDBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbENoYXJ0O1xuIl19 */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/Chart.js */"));
    }
  }]);

  return SkillChart;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SkillChart);

/***/ })

})
//# sourceMappingURL=about.js.2c424a8fbcd4c2381c38.hot-update.js.map