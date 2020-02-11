webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/components/RecentSkills.js":
/*!******************************************!*\
  !*** ./pages/components/RecentSkills.js ***!
  \******************************************/
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







var _jsxFileName = "/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/RecentSkills.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


var RecentSkills =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RecentSkills, _Component);

  function RecentSkills() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RecentSkills);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentSkills)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "codeHubClick", function (e) {
      e.preventDefault();
      window.location.assign("https://limitless-bayou-67971.herokuapp.com/");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "clickyGame", function (e) {
      e.preventDefault();
      window.location.assign("https://shielded-woodland-97189.herokuapp.com/");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "petFinder", function (e) {
      e.preventDefault();
      window.location.assign("https://cryptic-gorge-70462.herokuapp.com/");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RecentSkills, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-3287024646" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3287024646" + " " + "recent-work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3287024646" + " " + "recent-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "recent work")), __jsx("div", {
        className: "jsx-3287024646" + " " + "recent-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3287024646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3287024646" + " " + "main-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("img", {
        onClick: this.codeHubClick,
        src: "/codehub.png",
        alt: "codeHub",
        className: "jsx-3287024646" + " " + "skill-photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), __jsx("p", {
        className: "jsx-3287024646" + " " + "work-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "codeHub: a social network for developers")), __jsx("div", {
        className: "jsx-3287024646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3287024646" + " " + "main-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("img", {
        onClick: this.clickyGame,
        src: "/memory.png",
        alt: "memory game",
        className: "jsx-3287024646" + " " + "skill-photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), __jsx("p", {
        className: "jsx-3287024646" + " " + "work-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Clicky Game: a memory game made in React.js")), __jsx("div", {
        className: "jsx-3287024646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3287024646" + " " + "main-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("img", {
        src: "/mealmusic.png",
        alt: "my image",
        className: "jsx-3287024646" + " " + "skill-photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), __jsx("p", {
        className: "jsx-3287024646" + " " + "work-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Meal Music: pair your favorite restaurant and playlist")), __jsx("div", {
        className: "jsx-3287024646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("div", {
        id: "card4",
        className: "jsx-3287024646" + " " + "main-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("img", {
        onClick: this.petFinder,
        src: "/petfinder-3.png",
        alt: "pet finder",
        className: "jsx-3287024646" + " " + "skill-photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), __jsx("p", {
        className: "jsx-3287024646" + " " + "work-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Lost & Hound: report missing and lost pets"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3287024646",
        __self: this
      }, ".wrapper.jsx-3287024646{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;margin:1rem;font-family:\"Arial\";}.recent-header.jsx-3287024646{margin:2rem;font-size:40px;}.recent-container.jsx-3287024646{display:grid;grid-template-rows:1fr;justify-items:center;}.main-card.jsx-3287024646{display:grid;justify-items:center;grid-template-columns:repeat(2,fr);grid-template-rows:repeat(4 minmax(100px,auto));height:150px;width:90%;min-width:180px;max-width:300px;border-radius:5px;margin:1rem;border:0.5px solid lightgray;background-color:whitesmoke;-webkit-transition:-webkit-transform 0.5s ease;-webkit-transition:transform 0.5s ease;transition:transform 0.5s ease;overflow:hidden;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.main-card.jsx-3287024646:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.skill-photo.jsx-3287024646{display:grid;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;width:100%;height:100%;border-radius:5px;border:1px solid whitesmoke;background-color:white;margin:0 auto;background-size:cover;cursor:pointer;}.work-description.jsx-3287024646{font-size:18px;font-weight:bold;margin:1rem;}@media (max-width:2560px){.recent-container.jsx-3287024646{grid-template-columns:1fr 1fr 1fr 1fr;}}@media (max-width:1440px){.recent-container.jsx-3287024646{grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;}}@media (max-width:1024px){.recent-container.jsx-3287024646{grid-template-columns:1fr 1fr;}}@media (max-width:768px){.recent-container.jsx-3287024646{grid-template-columns:1fr 1fr;margin:0.05rem;padding:0.05rem;}}@media (max-width:425px){.recent-container.jsx-3287024646{grid-template-columns:1fr;padding:0px 10px 0px 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb21wb25lbnRzL1JlY2VudFNraWxscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRW9CLEFBRzBCLEFBT0QsQUFJQyxBQU9BLEFBa0JRLEFBSVIsQUFtQkUsQUFTeUIsQUFPQSxBQVFSLEFBT0EsQUFTSixZQTNGYixDQVBXLEFBV0gsQUFPRixBQXNCTixFQW1CRSxXQXdDVyxDQTNGOUIsR0E0RUUsQUFNaUIsRUE5QkwsRUF6Q3dCLEVBTmYsRUF3RHJCLEFBTXlCLENBMUVGLEtBNER6QixDQThCb0IsT0FTbEIsS0FyRkYsSUE4REUsQUFnQkEsQ0EzRlksT0FrQnFDLEtBakI3QixDQWlDdEIsQUFLYSxXQUNDLFFBdENkLElBdUNvQixrQkFDVSxDQXZCZixhQUNILFVBQ00sSUFzQk8sWUFyQlAsV0FzQkYsS0FyQkksU0FzQkksU0FyQlYsWUFDaUIsQ0F3QmQsZUFFakIsYUF4QjhCLDRCQUNHLHFIQUNmLGdCQUNnQix3RUFDbEMiLCJmaWxlIjoiL1VzZXJzL2plcmVteWdpbGJlcnQvRGVza3RvcC9qZXJlbXlnaWxiZXJ0L3BhZ2VzL2NvbXBvbmVudHMvUmVjZW50U2tpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBSZWNlbnRTa2lsbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb2RlSHViQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcImh0dHBzOi8vbGltaXRsZXNzLWJheW91LTY3OTcxLmhlcm9rdWFwcC5jb20vXCIpO1xuICB9O1xuICBjbGlja3lHYW1lID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCJodHRwczovL3NoaWVsZGVkLXdvb2RsYW5kLTk3MTg5Lmhlcm9rdWFwcC5jb20vXCIpO1xuICB9O1xuICBwZXRGaW5kZXIgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcImh0dHBzOi8vY3J5cHRpYy1nb3JnZS03MDQ2Mi5oZXJva3VhcHAuY29tL1wiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudC13b3JrXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInJlY2VudC1oZWFkZXJcIj5yZWNlbnQgd29yazwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNhcmRcIj5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvZGVIdWJDbGlja31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbC1waG90b1wiIFxuICAgICAgICAgICAgICAgIHNyYz1cIi9jb2RlaHViLnBuZ1wiIFxuICAgICAgICAgICAgICAgIGFsdD1cImNvZGVIdWJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3b3JrLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIGNvZGVIdWI6IGEgc29jaWFsIG5ldHdvcmsgZm9yIGRldmVsb3BlcnNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2FyZFwiPlxuICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xpY2t5R2FtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbC1waG90b1wiIFxuICAgICAgICAgICAgICAgIHNyYz1cIi9tZW1vcnkucG5nXCIgXG4gICAgICAgICAgICAgICAgYWx0PVwibWVtb3J5IGdhbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3b3JrLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIENsaWNreSBHYW1lOiBhIG1lbW9yeSBnYW1lIG1hZGUgaW4gUmVhY3QuanNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2FyZFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2tpbGwtcGhvdG9cIlxuICAgICAgICAgICAgICAgIHNyYz1cIi9tZWFsbXVzaWMucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJteSBpbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvcmstZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgTWVhbCBNdXNpYzogcGFpciB5b3VyIGZhdm9yaXRlIHJlc3RhdXJhbnQgYW5kIHBsYXlsaXN0XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImNhcmQ0XCIgY2xhc3NOYW1lPVwibWFpbi1jYXJkXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnBldEZpbmRlcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbC1waG90b1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiL3BldGZpbmRlci0zLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwicGV0IGZpbmRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvcmstZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgTG9zdCAmIEhvdW5kOiByZXBvcnQgbWlzc2luZyBhbmQgbG9zdCBwZXRzXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVjZW50LWhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWNlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMnJlbTtcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tY2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgZnIpO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCBtaW5tYXgoMTAwcHgsIGF1dG8pKTtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IC0xMnB4IDEycHggMnB4IDFweCByZ2JhKDMwLCAzMCwgMzEsIDAuMik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tY2FyZDpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNraWxsLXBob3RvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIC8qIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgIC8vIGJvcmRlcjoxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNraWxsLXBob3RvOmhvdmVyIHtcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndvcmstZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbWVkaWEgcXVlcmllc1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDI1NjBweCkge1xuICAgICAgICAgICAgLnJlY2VudC1jb250YWluZXIge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZzogMHB4IDEwMHB4IDBweCAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgICAgICAucmVjZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZzogMHB4IDc1cHggMHB4IDc1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgLnJlY2VudC1jb250YWluZXIge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDBweCA1MHB4IDBweCA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLnJlY2VudC1jb250YWluZXIge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMC4wNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC4wNXJlbTtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAucmVjZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlY2VudFNraWxscztcbiJdfQ== */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/RecentSkills.js */"));
    }
  }]);

  return RecentSkills;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentSkills);

/***/ })

})
//# sourceMappingURL=about.js.d55d42b066639709287a.hot-update.js.map