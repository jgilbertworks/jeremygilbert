module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/components/Footer.js":
/*!************************************!*\
  !*** ./pages/components/Footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-2626060521" + " " + "footer-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626060521" + " " + "footer-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2626060521",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Jeremy Gilbert 2020")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2626060521",
      __self: this
    }, ".footer-container.jsx-2626060521{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:100px;width:100%;color:whitesmoke;text-align:center;background:black;font-family:\"Arial\";}.footer-name.jsx-2626060521{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}p.jsx-2626060521{font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTb0IsQUFHMEIsQUFlSyxBQUlILGFBbEJXLEVBbUI1Qix3QkFsQnlCLHVCQUNWLFNBYWYsSUFaYSxXQUNNLGlCQUNDLGtCQUNELGlCQUNHLG9CQUl0QiIsImZpbGUiOiIvVXNlcnMvamVyZW15Z2lsYmVydC9EZXNrdG9wL2plcmVteWdpbGJlcnQvcGFnZXMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW5hbWVcIj5cbiAgICAgICAgICA8cD5KZXJlbXkgR2lsYmVydCAyMDIwPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICAvLyBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvb3Rlci1uYW1lIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/Footer.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class NavBar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-573056000" + " " + "nav-bar-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-573056000" + " " + "header-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-573056000",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Jeremy Gilbert"))), __jsx("ul", {
      className: "jsx-573056000" + " " + "nav-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-573056000",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "about")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-573056000",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "portfolio")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-573056000",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "contact"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "573056000",
      __self: this
    }, ".nav-bar-container.jsx-573056000{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;background:black;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;height:100px;}.header-name.jsx-573056000{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:left;}h1.jsx-573056000{color:white;font-family:\"Arial\";}h1.jsx-573056000:hover{cursor:pointer;}.nav-list.jsx-573056000{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}a.jsx-573056000{-webkit-text-decoration:none;text-decoration:none;font-family:\"Arial\";-webkit-text-decoration-style:none;text-decoration-style:none;-webkit-text-decoration:none;text-decoration:none;display:inline;margin:0px 30px 0px 30px;font-size:24px;-webkit-text-size-adjust:auto;text-size-adjust:auto;list-style-type:none;color:white;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}a.jsx-573056000:hover{cursor:pointer;}@media (max-width:2560px){.nav-bar-container.jsx-573056000{padding:0px 100px 0px 100px;}}@media (max-width:1440px){.nav-bar-container.jsx-573056000{padding:0px 75px 0px 75px;}}@media (max-width:1024px){.nav-bar-container.jsx-573056000{padding:0px 50px 0px 50px;}}@media (max-width:768px){.nav-bar-container.jsx-573056000{grid-template-columns:1fr;grid-template-rows:1fr 1fr;padding:0px 25px 0px 25px;height:175px;}.header-name.jsx-573056000{text-align:center;}}@media (max-width:425px){.nav-bar-container.jsx-573056000{padding:1rem;}.header-name.jsx-573056000{text-align:center;}.nav-list.jsx-573056000>a.jsx-573056000{margin:0px 30px 0px 0px;}@media (max-width:320px){.nav-bar-container.jsx-573056000{padding:.5rem;}.header-name.jsx-573056000{text-align:center;font-size:16px;}.nav-list.jsx-573056000>a.jsx-573056000{font-size:18px;margin:0px 30px 0px 0px;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBRzBCLEFBVUssQUFLTixBQUtHLEFBSUcsQUFJRyxBQWNQLEFBT2dCLEFBTUYsQUFNQSxBQU1BLEFBTVIsQUFNTCxBQUdLLEFBSU0sQUFJUixBQUdJLEFBSUgsWUFqRkMsQ0FmVSxBQStFOUIsQ0FXRSxDQXRFSixBQXNCQSxBQXVEOEIsR0F4QjVCLEFBU0EsQUFXbUIsTUFQbkIsRUEvQkEsQUFNQSxBQU02QixFQWxCN0IsSUFqQ0YsQ0E4RUksTUFJQSxJQWpHcUIsT0EyQkgsR0F3Q1EsYUFsRVgsSUEyQlUsQ0FuQlgsQUFjbEIsUUE2Q2lCLElBbEVRLElBUXpCLEtBMkRFLHdDQXhDcUIsa0RBMUJILEFBMkJILGVBQ1UsR0EzQlosYUFDZixTQTJCaUIsZUFDTyxvREFDRCxxQkFDVCxZQUNvQix3RUFDbEMiLCJmaWxlIjoiL1VzZXJzL2plcmVteWdpbGJlcnQvRGVza3RvcC9qZXJlbXlnaWxiZXJ0L3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJhci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbmFtZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXhcIj5cbiAgICAgICAgICAgIDxoMT5KZXJlbXkgR2lsYmVydDwvaDE+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1saXN0XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgPGE+YWJvdXQ8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICA8YT5wb3J0Zm9saW88L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgPGE+Y29udGFjdDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmF2LWJhci1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci1uYW1lIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMTpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saXN0IHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAzMHB4IDBweCAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgdGV4dC1zaXplLWFkanVzdDogYXV0bztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9tZWRpYSBxdWVyaWVzXG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMjU2MHB4KSB7XG4gICAgICAgICAgICAubmF2LWJhci1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTAwcHggMHB4IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgICAgIC5uYXYtYmFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA3NXB4IDBweCA3NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIC5uYXYtYmFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1MHB4IDBweCA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLm5hdi1iYXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyLW5hbWUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAubmF2LWJhci1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlci1uYW1lIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1saXN0ID4gYSB7XG4gICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMzBweCAwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgICAgICAgICAgIC5uYXYtYmFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1uYW1lIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5uYXYtbGlzdCA+IGEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAzMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl19 */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/components/Header.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-twitter-embed */ "react-twitter-embed");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_twitter_embed__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jeremygilbert/Desktop/jeremygilbert/pages/portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Portfolio extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-2085233336",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336" + " " + 'master-wrapper',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2085233336" + " " + "portfolio-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336" + " " + "portfololio-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("section", {
      className: "jsx-2085233336" + " " + "intro-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("aside", {
      className: "jsx-2085233336" + " " + "card-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("img", {
      src: "/jpg.jpg",
      alt: "my image",
      className: "jsx-2085233336" + " " + "card-photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "intro-card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-2085233336" + " " + "intro-line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "follow me")), __jsx("aside", {
      className: "jsx-2085233336" + " " + "twitter-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_4__["TwitterFollowButton"], {
      options: {
        size: "large",
        showCount: "false"
      },
      screenName: "jgilbertworks",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_4__["TwitterDMButton"], {
      id: 1215768166044856321,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-2085233336" + " " + "body-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("section", {
      className: "jsx-2085233336" + " " + "overview-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("section", {
      className: "jsx-2085233336" + " " + "overview-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("aside", {
      className: "jsx-2085233336" + " " + "overview-portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2085233336" + " " + "portfolio-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "portfolio")), __jsx("aside", {
      className: "jsx-2085233336" + " " + "button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("button", {
      className: "jsx-2085233336" + " " + "interactive-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "interactive"), __jsx("button", {
      className: "jsx-2085233336" + " " + "front-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "front")), __jsx("aside", {
      className: "jsx-2085233336" + " " + "button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("button", {
      className: "jsx-2085233336" + " " + "back-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "back"), __jsx("button", {
      className: "jsx-2085233336" + " " + "mobile-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "mobile")))), __jsx("section", {
      className: "jsx-2085233336" + " " + "interactive-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("aside", {
      className: "jsx-2085233336" + " " + "interactive-overview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336" + " " + "dot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-2085233336" + " " + "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "interactive")), __jsx("aside", {
      className: "jsx-2085233336" + " " + "interactive-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 1",
      className: "jsx-2085233336" + " " + "interactive-img-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "interactive-two",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 2",
      className: "jsx-2085233336" + " " + "interactive-img-two",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 3",
      className: "jsx-2085233336" + " " + "interactive-img-three",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "interactive-three",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 4",
      className: "jsx-2085233336" + " " + "interactive-img-four",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 5",
      className: "jsx-2085233336" + " " + "interactive-img-five",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })))), __jsx("section", {
      className: "jsx-2085233336" + " " + "front-end-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("aside", {
      className: "jsx-2085233336" + " " + "front-end-overview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336" + " " + "dot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-2085233336" + " " + "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "front-end")), __jsx("aside", {
      className: "jsx-2085233336" + " " + "front-end-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 6",
      className: "jsx-2085233336" + " " + "front-img-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "front-end-two",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336" + " " + "front-end-two-a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 7",
      className: "jsx-2085233336" + " " + "front-img-two",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "front-end-three",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 8",
      className: "jsx-2085233336" + " " + "front-img-three",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 9",
      className: "jsx-2085233336" + " " + "front-img-four",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 10",
      className: "jsx-2085233336" + " " + "front-img-five",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    })))), __jsx("section", {
      className: "jsx-2085233336" + " " + "back-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("aside", {
      className: "jsx-2085233336" + " " + "back-end-overview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336" + " " + "dot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-2085233336" + " " + "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "back-end")), __jsx("aside", {
      className: "jsx-2085233336" + " " + "back-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 11",
      className: "jsx-2085233336" + " " + "back-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "back-end-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336" + " " + "back-end-one-a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 12",
      className: "jsx-2085233336" + " " + "back-img-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "back-end-two",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 13",
      className: "jsx-2085233336" + " " + "back-img-two",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }))), __jsx("section", {
      className: "jsx-2085233336" + " " + "mobile-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("aside", {
      className: "jsx-2085233336" + " " + "mobile-overview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2085233336" + " " + "dot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-2085233336" + " " + "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "mobile")), __jsx("aside", {
      className: "jsx-2085233336" + " " + "mobile-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 14",
      className: "jsx-2085233336" + " " + "mobile-img-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "mobile-two",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("aside", {
      className: "jsx-2085233336" + " " + "mobile-two-a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 15",
      className: "jsx-2085233336" + " " + "mobile-img-two",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 16",
      className: "jsx-2085233336" + " " + "mobile-img-three",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    })), __jsx("aside", {
      className: "jsx-2085233336" + " " + "mobile-three",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("img", {
      src: "/mealmusic.png",
      alt: "image 16",
      className: "jsx-2085233336" + " " + "mobile-img-four",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    })))))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2085233336",
      __self: this
    }, ".master-wrapper.jsx-2085233336{display:grid;grid-template-columns:1fr;}.portfolio-wrapper.jsx-2085233336{display:grid;height:190vh;min-height:0;margin:2rem;padding:2rem;font-family:\"Arial\";}.portfolio-container.jsx-2085233336{display:grid;grid-template-columns:1fr;padding:30px 30px 30px 30px;text-align:center;}.intro-card.jsx-2085233336{display:grid;grid-template-columns:1fr 1fr 1fr;height:auto;max-width:65%;min-width:280px;background:white;border-radius:100px;border:1px solid lightgray;margin:0px 0px 2rem 0px;box-shadow:-12px 12px 2px 1px rgba(30,30,31,0.2);j,;}.intro-card-text.jsx-2085233336{text-align:left;}.intro-line.jsx-2085233336{font-size:36px;justify-self:center;position:relative;top:10%;}.intro-subline.jsx-2085233336{font-size:24px;font-weight:lighter;color:gray;}.card-img.jsx-2085233336{display:grid;border-radius:100%;border:none;height:100px;width:100px;justify-self:left;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:2rem;}.card-photo.jsx-2085233336{height:100%;width:100%;border-radius:100%;background-color:orange;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.twitter-container.jsx-2085233336{display:grid;margin:0 auto;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;margin:1rem;overflow:none;}.twitter-follow-button.jsx-2085233336{height:100px;}.body-wrapper.jsx-2085233336{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;grid-gap:50px;}.overview-portfolio.jsx-2085233336{display:grid;grid-template-columns:1fr;text-align:center;}.portfolio-text.jsx-2085233336{font-size:24px;color:gray;margin:20px 0px 0px 0px;}.button-container.jsx-2085233336{display:grid;grid-template-columns:1fr 1fr;padding:20px;}.interactive-button.jsx-2085233336,.front-button.jsx-2085233336,.back-button.jsx-2085233336,.mobile-button.jsx-2085233336{height:50px;min-width:50px;font-size:18px;border-radius:50px;background-color:lightgray;}.interactive-button.jsx-2085233336{width:100%;}.front-button.jsx-2085233336{width:70%;justify-self:center;}.back-button.jsx-2085233336{width:80%;}.mobile-button.jsx-2085233336{width:50%;min-width:70px;}.dot.jsx-2085233336{height:20px;width:20px;border-radius:100%;background-color:orange;}.interactive-container.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);width:100%;min-width:200px;max-width:400px;height:505px;border:1px solid lightgray;border-radius:10px;margin:40px 0px 0px 0px;margin:2rem 0px 0px 0px;box-shadow:-12px 12px 2px 1px rgba(30,30,31,0.2);}.overview-card.jsx-2085233336{min-width:50px;}.overview-container.jsx-2085233336{display:grid;grid-template-columns:1fr;width:100%;height:250px;border:1px solid lightgray;border-radius:10px;background-color:white;max-width:400px;min-width:200px;margin:0px 0px 2rem 0px;box-shadow:-12px 12px 2px 1px rgba(30,30,31,0.2);}.front-end-container.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(3,1fr);width:100%;min-width:200px;max-width:400px;height:550px;border:1px solid lightgray;border-radius:10px;box-shadow:-12px 12px 2px 1px rgba(30,30,31,0.2);}.back-container.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2,1fr);width:100%;height:505px;border:1px solid lightgray;border-radius:10px;min-width:200px;max-width:400px;margin:0px 0px 2rem 0px;box-shadow:-12px 12px 2px 1px rgba(30,30,31,0.2);}.mobile-container.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(3,1fr);width:100%;min-width:200px;max-width:400px;height:520px;border:1px solid lightgray;border-radius:10px;margin:2rem 0px 0px 0px;overflow:none;box-shadow:-12px 12px 2px 1px rgba(30,30,31,0.2);}.interactive-overview.jsx-2085233336,.front-end-overview.jsx-2085233336,.back-end-overview.jsx-2085233336,.mobile-overview.jsx-2085233336{display:grid;grid-template-columns:1fr auto 1fr;padding:20px 20px 20px 20px;}.card-header.jsx-2085233336{font-size:24px;}.interactive-one.jsx-2085233336,.front-end-one.jsx-2085233336,.back-end.jsx-2085233336,.mobile-one.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-gap:10px;padding:0px 20px 0px 20px;}.interactive-two.jsx-2085233336,.interactive-three.jsx-2085233336{display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.interactive-two.jsx-2085233336{padding:10px 20px 10px 20px;}.front-end-two.jsx-2085233336,.back-end-one.jsx-2085233336,.mobile-two.jsx-2085233336{display:grid;grid-template-columns:1fr 1fr;}.front-end-two-a.jsx-2085233336{display:grid;grid-gap:10px;grid-template-columns:1fr;grid-template-rows:1fr;padding:10px 0px 20px 20px;}.back-end-one-a.jsx-2085233336{display:grid;grid-gap:10px;grid-template-columns:1fr;grid-template-rows:1fr;padding:10px 10px 20px 20px;}.interactive-three.jsx-2085233336{padding:0px 20px 20px 20px;}.front-end-three.jsx-2085233336{display:grid;grid-gap:10px;grid-template-colums:1fr;grid-template-rows:1fr 1fr 1fr;padding:10px 20px 20px 10px;}.back-end-two.jsx-2085233336{display:grid;grid-gap:10px;grid-template-colums:1fr;grid-template-rows:1fr;padding:10px 20px 20px 0px;}.mobile-two-a.jsx-2085233336{display:grid;grid-gap:10px;grid-template-colums:1fr;grid-template-rows:1fr 1fr;padding:10px 10px 20px 20px;}.mobile-three.jsx-2085233336{display:grid;grid-gap:10px;grid-template-colums:1fr;grid-template-rows:1fr;padding:10px 20px 20px 0px;}.interactive-img-one.jsx-2085233336,.front-img-one.jsx-2085233336,.back-img.jsx-2085233336,.mobile-img-one.jsx-2085233336{width:100%;height:150px;border-radius:5px;}.interactive-img-two.jsx-2085233336,.interactive-img-three.jsx-2085233336,.interactive-img-four.jsx-2085233336,.interactive-img-five.jsx-2085233336,.mobile-img-two.jsx-2085233336,.mobile-img-three.jsx-2085233336{width:100%;height:100px;border-radius:5px;}.front-img-two.jsx-2085233336{width:100%;height:250px;border-radius:5px;}.front-img-three.jsx-2085233336,.front-img-four.jsx-2085233336,.front-img-five.jsx-2085233336{width:100%;height:75px;border-radius:5px;}.back-img-one.jsx-2085233336,.back-img-two.jsx-2085233336,.mobile-img-four.jsx-2085233336{width:100%;height:210px;border-radius:5px;}@media (max-width:1440px){}@media (max-width:1200px){.intro-line.jsx-2085233336{justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}.portfolio-wrapper.jsx-2085233336{height:250vh;}.portfolio-container.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr 1fr;}.body-wrapper.jsx-2085233336{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;}.back-container.jsx-2085233336{grid-column:2/3;grid-row:1/2;margin:0 auto;}}@media (max-width:1024px){.intro-line.jsx-2085233336{justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}.portfolio-wrapper.jsx-2085233336{height:250vh;}.portfolio-container.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr 1fr;}.body-wrapper.jsx-2085233336{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;}.back-container.jsx-2085233336{grid-column:2/3;grid-row:1/2;}}@media (max-width:960px){.portfolio-wrapper.jsx-2085233336{height:420vh;}.intro-card.jsx-2085233336{max-width:90%;max-width:500px;margin:0 auto;}.intro-line.jsx-2085233336{justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}.overview-container.jsx-2085233336,.interactive-container.jsx-2085233336{margin:0 auto;margin-top:3rem;}.body-wrapper.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;}.front-end-container.jsx-2085233336{grid-column:1/2;grid-row:2/3;margin:0 auto;}.back-container.jsx-2085233336{grid-column:1/2;grid-row:3/4;margin:0 auto;}.mobile-container.jsx-2085233336{grid-column:1/2;grid-row:4/5;margin:0 auto;margin:3rem 0px 0px 0px;}}@media (max-width:768px){.portfolio-wrapper.jsx-2085233336{height:420vh;}.intro-card.jsx-2085233336{max-width:100%;max-width:500px;}.intro-line.jsx-2085233336{font-size:30px;justify-self:end;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;margin:3rem 0px 0px 0px;}.overview-container.jsx-2085233336,.interactive-container.jsx-2085233336{margin:0 auto;margin-top:3rem;}.body-wrapper.jsx-2085233336{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;}.front-end-container.jsx-2085233336{grid-column:1/2;grid-row:2/3;margin:0 auto;}.back-container.jsx-2085233336{grid-column:1/2;grid-row:3/4;margin:0 auto;}.mobile-container.jsx-2085233336{grid-column:1/2;grid-row:4/5;margin:0 auto;margin:3rem 0px 0px 0px;}}@media (max-width:600px){.portfolio-wrapper.jsx-2085233336{height:410vh;}.intro-card.jsx-2085233336{display:grid;grid-template-columns:1fr 1fr;}.intro-card-text.jsx-2085233336{margin:2rem;margin:0 auto;}.intro-line.jsx-2085233336{font-size:24px;margin:1.25rem .25rem .5rem 1rem;}.card-img.jsx-2085233336,.card-photo.jsx-2085233336{display:none;}}@media (max-width:425px){.portfolio-wrapper.jsx-2085233336{display:grid;margin:.05rem;height:410vh;}.intro-card.jsx-2085233336{grid-template-columns:1fr;max-width:100%;justify-items:center;}.intro-card-text.jsx-2085233336,.card-img.jsx-2085233336,.card-photo.jsx-2085233336{display:none;}.intro-card.jsx-2085233336,.overview-container.jsx-2085233336,.interactive-container.jsx-2085233336,.front-end-container.jsx-2085233336,.back-container.jsx-2085233336,.mobile-container.jsx-2085233336{width:280px;}}@media (max-width:320px){.portfolio-wrapper.jsx-2085233336{height:480vh;margin:.05rem;}.intro-card.jsx-2085233336,.overview-container.jsx-2085233336,.interactive-container.jsx-2085233336,.front-end-container.jsx-2085233336,.back-container.jsx-2085233336,.mobile-container.jsx-2085233336{width:250px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9wb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE1vQixBQUd3QixBQUlFLEFBU0EsQUFVQSxBQVlHLEFBR0QsQUFNQSxBQU9GLEFBVUQsQUFRQyxBQU9BLEFBR0EsQUFNQSxBQUtFLEFBS0YsQUFRRCxBQU9ELEFBR0QsQUFJQSxBQUdBLEFBSUUsQUFXQyxBQWdCRSxBQUdGLEFBaUJBLEFBYUEsQUFhQSxBQXFCQSxBQU1FLEFBU0YsQUFPQSxBQU1lLEFBS2YsQUFJQSxBQU9BLEFBT2MsQUFHZCxBQU9BLEFBT0EsQUFPQSxBQWFGLEFBVUEsQUFLQSxBQU9BLEFBT0EsQUFpQlEsQUFJSixBQUdBLEFBS0EsQUFLRyxBQVFDLEFBSUosQUFHQSxBQUtBLEFBS0csQUFNSCxBQUdDLEFBS0csQUFLSCxBQUtELEFBS0csQUFLQSxBQUtBLEFBU0gsQUFHRSxBQUlBLEFBT0QsQUFLRCxBQUtHLEFBS0EsQUFLQSxBQVNILEFBR0EsQUFLRCxBQUtHLEFBT0YsQUFNQSxBQUthLEFBT2IsQUFRQyxBQUtDLEFBV0QsVUFqYkksQUFJdEIsQUFHaUIsQ0FWakIsQUFvTWUsQUFVQSxBQUtBLEFBT0QsQUFPQyxDQWxSRixBQTBDSSxBQXFCSixBQWlYSyxBQXNDZCxBQWdCb0IsQ0FuaUJFLEFBSVgsQUFTYSxBQVVRLEFBNEJmLEFBa0JMLEFBT2hCLEFBR29DLEFBTVIsQUFVSSxBQXdDSixBQW1CQSxBQWlCQSxBQWFBLEFBYUEsQUFxQlMsQUFlVCxBQU9JLEFBV0EsQUFJaEIsQUFPQSxBQVVBLEFBT0EsQUFPQSxBQU9BLEFBK0RkLEFBRzRCLEFBS0ksQUFpQmhDLEFBRzRCLEFBS0ksQUFXaEMsQUFrQjRCLEFBd0I1QixBQW1CNEIsQUF3QjVCLEFBR2dDLEFBaUJoQyxBQU1nQixBQVloQixBQWFrQixDQXJJQSxBQVVBLEFBMkNBLENBbGFFLEFBTUEsQUE4Q1QsQUE2RGIsQUF5RUEsQUE2Tm9CLEFBSUMsQUFtRGdCLENBamRyQyxBQThVaUIsQUF5QkEsQUE2QkEsQUFLQSxBQUtBLEFBaUNBLEFBS0EsQUFLQSxDQTVIRSxBQXlCQSxBQStCQSxNQTFWRSxBQStEQSxBQTRNRCxDQXRCQSxBQVVBLEFBS0EsQUFjQSxDQXZOcEIsQ0FwSGUsQUFzRlcsQUFvWnhCLEFBcUJpQixDQTliSSxBQWtDTixBQXdKVyxBQU9BLEFBTTVCLEFBSTJCLEFBT0EsQUFPQSxBQU9BLEFBME5WLEFBeUJiLENBblNKLENBNEhrQixBQXlCaEIsQUE2QmdCLEFBS0EsQUFLQSxBQWlDQSxBQUtBLEFBS0EsQ0EzV2xCLEFBa1NrQixBQVVoQixBQTJDQSxDQVhBLENBMVlZLEFBOFlLLEdBM1pDLEFBTVAsSUE1Q2YsQUFLZ0IsQUFRZ0IsQUF3RVYsQUFrRGdCLEFBbUJ2QixBQWlCdUIsQUFhQSxBQWFBLEFBb0NwQixBQThIbUIsQUF5QkEsQUFrQ1IsQUEyQ0EsQ0FtRHpCLENBdkxGLEFBMkx5QixDQXRjQyxBQTBDTCxBQXFCSyxBQXNMMUIsQUFVQSxBQUtBLEFBY0EsQ0FqUGUsQUFpSkMsQUFXaEIsQUFpSCtCLEFBTTdCLEFBbUI2QixBQW1DN0IsQUFLQSxBQUswQixBQWlDMUIsQUFLQSxBQUswQixBQVkxQixDQXJiYSxBQWdXYixFQXJXRixDQXhCYyxBQXdEVyxDQTJJSyxBQTBSNUIsRUF6WkYsQUFnRWUsQ0FySkEsQ0EyUWtCLEFBT1IsQUFPSSxBQU9KLENBL1BmLEFBbU1rQixBQXNCSCxBQU9BLEdBdkt6QixDQTNDYyxBQWlDZCxBQTJKb0IsRUF6TkosRUFnQmhCLEFBaUU2QixDQTBUM0IsQUEyQ0EsQUF1REEsQ0F6VzJCLENBckpQLEVBd0RBLEFBaUV0QixDQTlHb0IsQUFpYWxCLEFBMkNBLEVBeGFrQixDQTBCSixBQXdSZCxBQUtBLEFBb0JBLEFBS0EsRUE5UFcsQUFvQ0EsQUFhQSxBQWFBLENBN0tLLEVBZ1FXLEFBY0EsQ0EzRTdCLEFBcUM2QixBQU9DLEdBN0I5QixBQXFEOEIsQUFnRTVCLEFBeUJBLEFBK0JBLElBL1FnQixBQW9DQSxBQWFILEFBYUcsQUEyRVksQUFpUkosQ0ExaEIxQixBQXdFQSxDQTlEQSxDQTZDb0IsQ0FUQSxDQW1EcEIsQ0FoRm1CLENBbUlFLElBcVNPLEVBdlFDLEdBakRYLEFBb0NBLEFBMEJBLEdBa0ZsQixBQWNBLENBbE9jLEFBNExkLEFBa1NJLENBM1JKLEVBOU9zQixDQXNRdEIsRUFuSXlCLEVBcUh6QixJQTVNZ0IsQUFvRUQsQUFvQ0EsQUEwQkEsR0EwUGIsS0F2UW1CLEdBaEtRLEVBZ0hBLEFBb0NBLEFBMEJBLEFBd0M3QixDQTFLQSxHQXVGa0IsVUE4QkEsTUE3QkEsS0FuSVEsRUFnSEwsQUFvQ0EsQUEwQkEsRUExSXJCLENBVGMsQUFzSUksTUE1QlEsTUF6RzFCLElBcUYwQixBQW9DNEIsQUFhNUIsQUFjQSxHQS9LNEIsV0FxSUEsVUFwQjVCLEFBaUQ0QixBQWN0QyxjQUNzQyxVQS9EQSxDQW9DdEQsR0FySkQsR0FBQyxRQXFJQSxVQTZCQSxjQWVBLFVBL0RBIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbXlnaWxiZXJ0L0Rlc2t0b3AvamVyZW15Z2lsYmVydC9wYWdlcy9wb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQge1xuICBUd2l0dGVyVGltZWxpbmVFbWJlZCxcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxuICBUd2l0dGVyRm9sbG93QnV0dG9uLFxuICBUd2l0dGVySGFzaHRhZ0J1dHRvbixcbiAgVHdpdHRlck1lbnRpb25CdXR0b24sXG4gIFR3aXR0ZXJUd2VldEVtYmVkLFxuICBUd2l0dGVyTW9tZW50U2hhcmUsXG4gIFR3aXR0ZXJETUJ1dHRvbixcbiAgVHdpdHRlclZpZGVvRW1iZWQsXG4gIFR3aXR0ZXJPbkFpckJ1dHRvblxufSBmcm9tIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiO1xuXG5jbGFzcyBQb3J0Zm9saW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzdGVyLXdyYXBwZXInPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xvbGlvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm8tY2FyZFwiPlxuICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiY2FyZC1pbWdcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtcGhvdG9cIiBzcmM9XCIvanBnLmpwZ1wiIGFsdD1cIm15IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImludHJvLWNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbnRyby1saW5lXCI+Zm9sbG93IG1lPC9oMT5cbiAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInR3aXR0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFR3aXR0ZXJGb2xsb3dCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3sgc2l6ZTogXCJsYXJnZVwiLCBzaG93Q291bnQ6IFwiZmFsc2VcIiB9fVxuICAgICAgICAgICAgICAgICAgc2NyZWVuTmFtZT17XCJqZ2lsYmVydHdvcmtzXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VHdpdHRlckRNQnV0dG9uIGlkPXsxMjE1NzY4MTY2MDQ0ODU2MzIxfSAvPlxuICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3ZlcnZpZXctY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwib3ZlcnZpZXctcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHRcIj5wb3J0Zm9saW88L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnRlcmFjdGl2ZS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmcm9udC1idXR0b25cIj5mcm9udDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFjay1idXR0b25cIj5iYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2JpbGUtYnV0dG9uXCI+bW9iaWxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludGVyYWN0aXZlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImludGVyYWN0aXZlLW92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+aW50ZXJhY3RpdmU8L2gxPlxuICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJpbnRlcmFjdGl2ZS1vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludGVyYWN0aXZlLWltZy1vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9tZWFsbXVzaWMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZSAxXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiaW50ZXJhY3RpdmUtdHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlcmFjdGl2ZS1pbWctdHdvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbWVhbG11c2ljLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2UgMlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlcmFjdGl2ZS1pbWctdGhyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9tZWFsbXVzaWMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZSAzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiaW50ZXJhY3RpdmUtdGhyZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludGVyYWN0aXZlLWltZy1mb3VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbWVhbG11c2ljLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2UgNFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlcmFjdGl2ZS1pbWctZml2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL21lYWxtdXNpYy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIDVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmcm9udC1lbmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImZyb250LWVuZC1vdmVydmlld1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+ZnJvbnQtZW5kPC9oMT5cbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJmcm9udC1lbmQtb25lXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZyb250LWltZy1vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbWVhbG11c2ljLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIDZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJmcm9udC1lbmQtdHdvXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250LWVuZC10d28tYVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnJvbnQtaW1nLXR3b1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL21lYWxtdXNpYy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIDdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiZnJvbnQtZW5kLXRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmcm9udC1pbWctdGhyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9tZWFsbXVzaWMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZSA4XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZyb250LWltZy1mb3VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbWVhbG11c2ljLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2UgOVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmcm9udC1pbWctZml2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL21lYWxtdXNpYy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIDEwXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYWNrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJiYWNrLWVuZC1vdmVydmlld1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+YmFjay1lbmQ8L2gxPlxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImJhY2stZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2staW1nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL21lYWxtdXNpYy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZSAxMVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImJhY2stZW5kLW9uZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrLWVuZC1vbmUtYVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFjay1pbWctb25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbWVhbG11c2ljLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2UgMTJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYmFjay1lbmQtdHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrLWltZy10d29cIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9tZWFsbXVzaWMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZSAxM1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9iaWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1vYmlsZS1vdmVydmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPm1vYmlsZTwvaDE+XG4gICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1vYmlsZS1vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1pbWctb25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbWVhbG11c2ljLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2UgMTRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtb2JpbGUtdHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtb2JpbGUtdHdvLWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtaW1nLXR3b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbWVhbG11c2ljLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZSAxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtaW1nLXRocmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9tZWFsbXVzaWMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIDE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibW9iaWxlLXRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLWltZy1mb3VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9tZWFsbXVzaWMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIDE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFzdGVyLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIH1cbiAgICAgICAgICAucG9ydGZvbGlvLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGhlaWdodDogMTkwdmg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICAvLyBvdmVyZmxvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvcnRmb2xpby1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxLjV2aDtcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnRyby1jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NSU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAycmVtIDBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xMnB4IDEycHggMnB4IDFweCByZ2JhKDMwLCAzMCwgMzEsIDAuMik7aixcbiAgICAgICAgICB9XG4gICAgICAgICAgLmludHJvLWNhcmQtdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW50cm8tbGluZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW50cm8tc3VibGluZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgLy8gbWFyZ2luOiAxcmVtO1xuICAgICAgICAgICAgLy8gb3ZlcmZsb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLWltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLXBob3RvIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudHdpdHRlci1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50d2l0dGVyLWZvbGxvdy1idXR0b24ge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHktd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vdmVydmlldy1wb3J0Zm9saW8ge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9ydGZvbGlvLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW50ZXJhY3RpdmUtYnV0dG9uLFxuICAgICAgICAgIC5mcm9udC1idXR0b24sXG4gICAgICAgICAgLmJhY2stYnV0dG9uLFxuICAgICAgICAgIC5tb2JpbGUtYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnRlcmFjdGl2ZS1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mcm9udC1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFjay1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRvdCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgICAvLyBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xuICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjpjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcG9ydGZvbGlvIGNvbnRhaW5lcnNcblxuICAgICAgICAgIC5pbnRlcmFjdGl2ZS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwcHggMHB4IDBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xMnB4IDEycHggMnB4IDFweCByZ2JhKDMwLCAzMCwgMzEsIDAuMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm92ZXJ2aWV3LWNhcmQge1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3ZlcnZpZXctY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgLy8gcGFkZGluZzogMHB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAycmVtIDBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xMnB4IDEycHggMnB4IDFweCByZ2JhKDMwLCAzMCwgMzEsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIC5vdmVydmlldy1jYXJkIHtcbiAgICAgICAgICAvLyAgIG1hcmdpbjogMHB4IDBweCAycmVtIDBweDtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLmZyb250LWVuZC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xMnB4IDEycHggMnB4IDFweCByZ2JhKDMwLCAzMCwgMzEsIDAuMik7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhY2stY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMnJlbSAwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMTJweCAxMnB4IDJweCAxcHggcmdiYSgzMCwgMzAsIDMxLCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgLy8gbWFyZ2luOiA2MHB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDBweCAwcHggMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMTJweCAxMnB4IDJweCAxcHggcmdiYSgzMCwgMzAsIDMxLCAwLjIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHBvcnRmb2xpbyBoZWFkZXIgJiBvdmVydmlld3NcblxuICAgICAgICAgIC5pbnRlcmFjdGl2ZS1vdmVydmlldyxcbiAgICAgICAgICAuZnJvbnQtZW5kLW92ZXJ2aWV3LFxuICAgICAgICAgIC5iYWNrLWVuZC1vdmVydmlldyxcbiAgICAgICAgICAubW9iaWxlLW92ZXJ2aWV3IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIDFmcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcG9ydGZvbGlvLWltZy1jb250YWluZXJzXG5cbiAgICAgICAgICAuaW50ZXJhY3RpdmUtb25lLFxuICAgICAgICAgIC5mcm9udC1lbmQtb25lLFxuICAgICAgICAgIC5iYWNrLWVuZCxcbiAgICAgICAgICAubW9iaWxlLW9uZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW50ZXJhY3RpdmUtdHdvLFxuICAgICAgICAgIC5pbnRlcmFjdGl2ZS10aHJlZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnRlcmFjdGl2ZS10d28ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZyb250LWVuZC10d28sXG4gICAgICAgICAgLmJhY2stZW5kLW9uZSxcbiAgICAgICAgICAubW9iaWxlLXR3byB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJvbnQtZW5kLXR3by1hIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWNrLWVuZC1vbmUtYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmludGVyYWN0aXZlLXRocmVlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZyb250LWVuZC10aHJlZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtczogMWZyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWNrLWVuZC10d28ge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bXM6IDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXR3by1hIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1zOiAxZnI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXRocmVlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1zOiAxZnI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBwb3J0Zm9saW8gaW1hZ2VzXG5cbiAgICAgICAgICAuaW50ZXJhY3RpdmUtaW1nLW9uZSxcbiAgICAgICAgICAuZnJvbnQtaW1nLW9uZSxcbiAgICAgICAgICAuYmFjay1pbWcsXG4gICAgICAgICAgLm1vYmlsZS1pbWctb25lIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmludGVyYWN0aXZlLWltZy10d28sXG4gICAgICAgICAgLmludGVyYWN0aXZlLWltZy10aHJlZSxcbiAgICAgICAgICAuaW50ZXJhY3RpdmUtaW1nLWZvdXIsXG4gICAgICAgICAgLmludGVyYWN0aXZlLWltZy1maXZlLFxuICAgICAgICAgIC5tb2JpbGUtaW1nLXR3byxcbiAgICAgICAgICAubW9iaWxlLWltZy10aHJlZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mcm9udC1pbWctdHdvIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZyb250LWltZy10aHJlZSxcbiAgICAgICAgICAuZnJvbnQtaW1nLWZvdXIsXG4gICAgICAgICAgLmZyb250LWltZy1maXZlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFjay1pbWctb25lLFxuICAgICAgICAgIC5iYWNrLWltZy10d28sXG4gICAgICAgICAgLm1vYmlsZS1pbWctZm91ciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbWVkaWEgcXVlcmllc1xuXG4gICAgICAgICAgbWVkaWEgKG1heC13aWR0aDogMjU2MHB4KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAuaW50cm8tbGluZSB7XG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLXdyYXBwZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib2R5LXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIC5pbnRyby1saW5lIHtcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8td3JhcHBlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjUwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJvZHktd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2stY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgICAucG9ydGZvbGlvLXdyYXBwZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQyMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmludHJvLWNhcmQge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW50cm8tbGluZSB7XG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3ZlcnZpZXctY29udGFpbmVyLFxuICAgICAgICAgICAgLmludGVyYWN0aXZlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm9keS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZyb250LWVuZC1jb250YWluZXIge1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgICAgICAgICAgICBncmlkLXJvdzogMi8zO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgICAgICAgICAgIGdyaWQtcm93OiAzLzQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgICAgICAgICAgICBncmlkLXJvdzogNC81O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luOiAzcmVtIDBweCAwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLnBvcnRmb2xpby13cmFwcGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MjB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnRyby1jYXJkIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmludHJvLWxpbmUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogM3JlbSAwcHggMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vdmVydmlldy1jb250YWluZXIsXG4gICAgICAgICAgICAuaW50ZXJhY3RpdmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib2R5LXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZnJvbnQtZW5kLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2stY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IDMvNDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgICAgICAgICAgIGdyaWQtcm93OiA0LzU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW46IDNyZW0gMHB4IDBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAucG9ydGZvbGlvLXdyYXBwZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQxMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmludHJvLWNhcmQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnRyby1jYXJkLXRleHQge1xuICAgICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnRyby1saW5lIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAvLyBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICAgICAgICBtYXJnaW46IDEuMjVyZW0gLjI1cmVtIC41cmVtIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC1pbWcsXG4gICAgICAgICAgICAuY2FyZC1waG90byB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAucG9ydGZvbGlvLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBtYXJnaW46IC4wNXJlbTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MTB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnRyby1jYXJkIHtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmludHJvLWNhcmQtdGV4dCxcbiAgICAgICAgICAgIC5jYXJkLWltZyxcbiAgICAgICAgICAgIC5jYXJkLXBob3RvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnRyby1jYXJkLFxuICAgICAgICAgICAgICAub3ZlcnZpZXctY29udGFpbmVyLFxuICAgICAgICAgICAgICAuaW50ZXJhY3RpdmUtY29udGFpbmVyLFxuICAgICAgICAgICAgICAuZnJvbnQtZW5kLWNvbnRhaW5lcixcbiAgICAgICAgICAgICAgLmJhY2stY29udGFpbmVyLFxuICAgICAgICAgICAgICAubW9iaWxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICAgICAgICAgLnBvcnRmb2xpby13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4MHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLjA1cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW50cm8tY2FyZCxcbiAgICAgICAgICAgICAgLm92ZXJ2aWV3LWNvbnRhaW5lcixcbiAgICAgICAgICAgICAgLmludGVyYWN0aXZlLWNvbnRhaW5lcixcbiAgICAgICAgICAgICAgLmZyb250LWVuZC1jb250YWluZXIsXG4gICAgICAgICAgICAgIC5iYWNrLWNvbnRhaW5lcixcbiAgICAgICAgICAgICAgLm1vYmlsZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvO1xuIl19 */\n/*@ sourceURL=/Users/jeremygilbert/Desktop/jeremygilbert/pages/portfolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeremygilbert/Desktop/jeremygilbert/pages/portfolio.js */"./pages/portfolio.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-twitter-embed":
/*!**************************************!*\
  !*** external "react-twitter-embed" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-twitter-embed");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map