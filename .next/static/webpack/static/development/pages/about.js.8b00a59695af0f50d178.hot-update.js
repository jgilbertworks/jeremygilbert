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
        className: "jsx-1098127862" + " " + "chart-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1098127862" + " " + 'list-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "front"), __jsx("li", {
        className: "jsx-1098127862" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1098127862",
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
        className: "jsx-1098127862" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "css3"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1098127862" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "js-square"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1098127862" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "react"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1098127862" + " " + "fa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "chrome"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })))), __jsx("div", {
        className: "jsx-1098127862" + " " + 'chart-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "my skills"), __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_8__["default"], {
        loader: __jsx("div", {
          className: "jsx-1098127862",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
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
          lineNumber: 94
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1098127862" + " " + 'list-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "back"), __jsx("li", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "python"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: ["fab", "node"],
        size: "3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("img", {
        src: "/mongodb.png",
        alt: "my image",
        className: "jsx-1098127862" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("img", {
        src: "/mysql.png",
        alt: "my image",
        className: "jsx-1098127862" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), __jsx("li", {
        className: "jsx-1098127862",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("img", {
        src: "/express.png",
        alt: "my image",
        className: "jsx-1098127862" + " " + "skill-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1098127862",
        __self: this
      }, ".chart-wrapper.jsx-1098127862{display:grid;padding:2rem;border-top:1px solid lightgray;grid-template-columns:1fr 60% 1fr;background-color:whitesmoke;text-align:center;margin:0 auto;font-family:\"Arial\";}.skill-img.jsx-1098127862{background-size:cover;width:75px;}ul.jsx-1098127862{list-style-type:none;font-size:25px;padding:15px;}li.jsx-1098127862{padding:1px;}.fa.jsx-1098127862{padding:3px;}@media (max-width:1440px){}@media (max-width:1024px){.chart-wrapper.jsx-1098127862{grid-template-columns:1fr;grid-template-rows:1fr 60% 1fr;display:block;}ul.jsx-1098127862{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.li.jsx-1098127862{margin:.05rem;padding:.05rem;}.list-header.jsx-1098127862{display:none;}}@media (max-width:960px){}@media (max-width:768px){ul.jsx-1098127862{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.list-header.jsx-1098127862{display:none;}}@media (max-width:425px){.chart-wrapper.jsx-1098127862{margin:.05rem;padding:.05rem;font-size:14px;}ul.jsx-1098127862{display:none;}h1.jsx-1098127862{font-size:36px;margin:2rem 0px 0px 0px;}.chart-container.jsx-1098127862{height:auto;padding:.5rem;font-size:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIb0IsQUFHMEIsQUFXUyxBQUlELEFBS1QsQUFHQSxBQWFnQixBQUtiLEFBSUMsQUFJRCxBQVFBLEFBSUEsQUFNQyxBQU1ELEFBSUUsQUFJSCxZQTVEaEIsQUFHQSxBQTBEa0IsQ0FoRkgsQUFnRGIsQUFZQSxBQVlBLENBNUJpQixBQXNCQSxDQVVTLE1BOURYLENBSkosSUFUb0IsQUFrQ0UsQUE4Q2hCLEdBcENqQixBQXNCaUIsSUF4RG5CLEdBSWUsR0E4RGIsRUFLQSxHQWRBLEtBcERGLFFBZG9DLEFBa0NsQixjQUNoQixHQUdnQyxBQWdCQSxpQkFyREosNEJBQ1Ysa0JBQ0osY0FDTSxvQkFDdEIsa0JBa0NFLEFBZ0JBIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb21wb25lbnRzL0NoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJyZWFjdC1nb29nbGUtY2hhcnRzXCI7XG5pbXBvcnQgeyBmYUJvbGQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIFtcIlRhc2tcIiwgXCJIb3VycyBwZXIgRGF5XCJdLFxuICBbXCJmcm9udC1lbmRcIiwgMTBdLFxuICBbXCJiYWNrLWVuZFwiLCAyLjVdLFxuICBbXCJkYXRhXCIsIDIuNV0sXG4gIFtcImRlc2lnblwiLCAyLjVdXG4gIC8vIFtcIlNsZWVwXCIsIDddIC8vIENTUy1zdHlsZSBkZWNsYXJhdGlvblxuXTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgLy8gdGl0bGU6IFwibXkgc2tpbGxzXCIsXG4gIHBpZUhvbGU6IDAuMCxcbiAgaXMzRDogZmFsc2UsXG4gIGZvbnRTaXplOiAxNixcbiAgZm9udE5hbWU6IFwiQXJpYWxcIixcbiAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIC8vIGZvbnRDb2xvcjogJ2JsYWNrJyxcbiAgcGllU2xpY2VCb3JkZXJDb2xvcjogXCJsaWdodGdyYXlcIixcbiAgcGllU2xpY2VUZXh0U3R5bGU6IHtcbiAgICBjb2xvcjogXCJibGFja1wiXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICB0ZXh0OiBcInBlcmNlbnRhZ2VcIlxuICB9LFxuICBsZWdlbmQ6IFwibm9uZVwiLFxuICBwaWVTbGljZVRleHQ6IFwibGFiZWxcIixcbiAgcGllU3RhcnRBbmdsZTogMjc1LFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiLFxuICBjaGFydEFyZWE6IHsgbGVmdDogMTUsIHRvcDogMTUsIHJpZ2h0OiAxNSwgYm90dG9tOiA1MCB9LFxuXG4gIC8vIGNoYXJ0QXJlYTogeyBsZWZ0OiAxNSwgdG9wOiAxNSwgcmlnaHQ6IDAsIGJvdHRvbTogMCB9LFxuICBzbGljZXM6IFtcbiAgICB7XG4gICAgICBjb2xvcjogXCIjRkY3RjAwXCIsXG4gICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICBvZmZzZXQ6IDAuMDVcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbG9yOiBcIiM0RTgwOThcIixcbiAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgIG9mZnNldDogMC4xXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogXCIjQ0VEM0RDXCIsXG4gICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICBvZmZzZXQ6IDAuMTVcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbG9yOiBcIiNGQ0Y3RjhcIixcbiAgICAgIG9mZnNldDogMC4xXG4gICAgfVxuICBdXG4gIC8vIGNoYXJ0QXJlYToge1xuICAvLyAgIGxlZnQ6IDAsXG4gIC8vICAgdG9wOiAwLFxuICAvLyAgIHdpZHRoOiBcIjEwMCVcIixcbiAgLy8gICBoZWlnaHQ6IFwiODAlXCJcbiAgLy8gfSxcbn07XG5cbmNsYXNzIFNraWxsQ2hhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2xpc3QtaGVhZGVyJz5mcm9udDwvaDE+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmFcIj5cbiAgICAgICAgICAgIDxwPmh0bWw1PC9wPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcImh0bWw1XCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmFcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbXCJmYWJcIiwgXCJjc3MzXCJdfSBzaXplPVwiM3hcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmYVwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcImpzLXNxdWFyZVwiXX0gc2l6ZT1cIjN4XCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmFcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbXCJmYWJcIiwgXCJyZWFjdFwiXX0gc2l6ZT1cIjN4XCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmFcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbXCJmYWJcIiwgXCJjaHJvbWVcIl19IHNpemU9XCIzeFwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhcnQtY29udGFpbmVyJz5cbiAgICAgICAgICA8aDE+bXkgc2tpbGxzPC9oMT5cbiAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgIGxvYWRlcj17PGRpdj5Mb2FkaW5nIENoYXJ0PC9kaXY+fVxuICAgICAgICAgICAgY2hhcnRUeXBlPVwiUGllQ2hhcnRcIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwMHB4XCJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2xpc3QtaGVhZGVyJz5iYWNrPC9oMT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbXCJmYWJcIiwgXCJweXRob25cIl19IHNpemU9XCIzeFwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhYlwiLCBcIm5vZGVcIl19IHNpemU9XCIzeFwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNraWxsLWltZ1wiIHNyYz1cIi9tb25nb2RiLnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2tpbGwtaW1nXCIgc3JjPVwiL215c3FsLnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2tpbGwtaW1nXCIgc3JjPVwiL2V4cHJlc3MucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jaGFydC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMDBweCAxMDBweCAwcHggMTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDYwJSAxZnI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2tpbGwtaW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmEge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vbWVkaWEgcXVlcmllc1xuXG4gICAgICAgICAgbWVkaWEgKG1heC13aWR0aDogMjU2MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIC5jaGFydC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDYwJSAxZnI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGkge1xuICAgICAgICAgICAgICBtYXJnaW46IC4wNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogLjA1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAuY2hhcnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogLjA1cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAuMDVyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDBweCAwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxDaGFydDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/Chart.js */"));
    }
  }]);

  return SkillChart;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SkillChart);

/***/ })

})
//# sourceMappingURL=about.js.8b00a59695af0f50d178.hot-update.js.map