/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/mailhogger.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/mailhogger.scss":
/*!*****************************!*\
  !*** ./css/mailhogger.scss ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./images recursive \\.(png|jpg|jpeg|gif|ico|svg|webp)$":
/*!***************************************************!*\
  !*** ./images \.(png|jpg|jpeg|gif|ico|svg|webp)$ ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon-email.svg": "./images/icon-email.svg"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./images recursive \\.(png|jpg|jpeg|gif|ico|svg|webp)$";

/***/ }),

/***/ "./images/icon-email.svg":
/*!*******************************!*\
  !*** ./images/icon-email.svg ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "./images/icon-email.3c801ea7.svg";

/***/ }),

/***/ "./js/mailhogger.js":
/*!**************************!*\
  !*** ./js/mailhogger.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// http://aerendir.me/2018/04/06/managin-static-images-webpack-encore/
var imagesContext = __webpack_require__(/*! ../images */ "./images recursive \\.(png|jpg|jpeg|gif|ico|svg|webp)$");
imagesContext.keys().forEach(imagesContext);

// require('../images/icon-email.svg');
__webpack_require__(/*! ../css/mailhogger.scss */ "./css/mailhogger.scss");

window.addEventListener('load', function () {
  var showTab = function showTab() {
    if (!this.classList.contains('active')) {
      // Mark all tabs as not active.
      this.parentNode.parentNode.querySelectorAll('.nav-link').forEach(function (el) {
        el.classList.remove('active');
      });

      // Hide all tab panes.
      this.parentNode.parentNode.parentNode.querySelectorAll('.tab-pane').forEach(function (el) {
        el.classList.remove('active');
      });

      this.classList.add('active');
      var match = /#(.+)$/.exec(this.href);
      if (match) {
        var target = document.getElementById(match[1]);
        if (target) {
          target.classList.add('active');
        }
      }
    }
  };

  document.querySelectorAll('.nav-tabs .nav-link').forEach(function (el) {
    el.addEventListener('click', showTab);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWViMjhlOWU2NDVjOWIyMDMwNGMiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haWxob2dnZXIuc2Nzcz8zNWI3Iiwid2VicGFjazovLy8uL2ltYWdlcyBcXC4ocG5nfGpwZ3xqcGVnfGdpZnxpY298c3ZnfHdlYnApJCIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaWNvbi1lbWFpbC5zdmciLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbGhvZ2dlci5qcyJdLCJuYW1lcyI6WyJpbWFnZXNDb250ZXh0IiwicmVxdWlyZSIsImtleXMiLCJmb3JFYWNoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dUYWIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJyZW1vdmUiLCJhZGQiLCJtYXRjaCIsImV4ZWMiLCJocmVmIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7OztBQ2pCQSxvRDs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQSxJQUFNQSxnQkFBZ0JDLDhGQUF0QjtBQUNBRCxjQUFjRSxJQUFkLEdBQXFCQyxPQUFyQixDQUE2QkgsYUFBN0I7O0FBRUE7QUFDQUMsbUJBQU9BLENBQUMscURBQVI7O0FBRUFHLE9BQU9DLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVc7QUFDekMsTUFBSUMsVUFBVSxTQUFWQSxPQUFVLEdBQVc7QUFDdkIsUUFBSSxDQUFDLEtBQUtDLFNBQUwsQ0FBZUMsUUFBZixDQUF3QixRQUF4QixDQUFMLEVBQXdDO0FBQ3RDO0FBQ0EsV0FBS0MsVUFBTCxDQUFnQkEsVUFBaEIsQ0FBMkJDLGdCQUEzQixDQUE0QyxXQUE1QyxFQUF5RFAsT0FBekQsQ0FBaUUsVUFBU1EsRUFBVCxFQUFhO0FBQzVFQSxXQUFHSixTQUFILENBQWFLLE1BQWIsQ0FBb0IsUUFBcEI7QUFDRCxPQUZEOztBQUlBO0FBQ0EsV0FBS0gsVUFBTCxDQUFnQkEsVUFBaEIsQ0FBMkJBLFVBQTNCLENBQXNDQyxnQkFBdEMsQ0FBdUQsV0FBdkQsRUFBb0VQLE9BQXBFLENBQTRFLFVBQVNRLEVBQVQsRUFBYTtBQUN2RkEsV0FBR0osU0FBSCxDQUFhSyxNQUFiLENBQW9CLFFBQXBCO0FBQ0QsT0FGRDs7QUFJQSxXQUFLTCxTQUFMLENBQWVNLEdBQWYsQ0FBbUIsUUFBbkI7QUFDQSxVQUFNQyxRQUFRLFNBQVNDLElBQVQsQ0FBYyxLQUFLQyxJQUFuQixDQUFkO0FBQ0EsVUFBSUYsS0FBSixFQUFXO0FBQ1QsWUFBTUcsU0FBU0MsU0FBU0MsY0FBVCxDQUF3QkwsTUFBTSxDQUFOLENBQXhCLENBQWY7QUFDQSxZQUFJRyxNQUFKLEVBQVk7QUFDVkEsaUJBQU9WLFNBQVAsQ0FBaUJNLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0FyQkQ7O0FBdUJBSyxXQUFTUixnQkFBVCxDQUEwQixxQkFBMUIsRUFBaURQLE9BQWpELENBQXlELFVBQVNRLEVBQVQsRUFBYTtBQUNwRUEsT0FBR04sZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkJDLE9BQTdCO0FBQ0QsR0FGRDtBQUdELENBM0JELEUiLCJmaWxlIjoibWFpbGhvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haWxob2dnZXIuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWViMjhlOWU2NDVjOWIyMDMwNGMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY3NzL21haWxob2dnZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9jc3MvbWFpbGhvZ2dlci5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9pY29uLWVtYWlsLnN2Z1wiOiBcIi4vaW1hZ2VzL2ljb24tZW1haWwuc3ZnXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vaW1hZ2VzIHJlY3Vyc2l2ZSBcXFxcLihwbmd8anBnfGpwZWd8Z2lmfGljb3xzdmd8d2VicCkkXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWFnZXMgXFwuKHBuZ3xqcGd8anBlZ3xnaWZ8aWNvfHN2Z3x3ZWJwKSRcbi8vIG1vZHVsZSBpZCA9IC4vaW1hZ2VzIHJlY3Vyc2l2ZSBcXC4ocG5nfGpwZ3xqcGVnfGdpZnxpY298c3ZnfHdlYnApJFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi9pbWFnZXMvaWNvbi1lbWFpbC4zYzgwMWVhNy5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltYWdlcy9pY29uLWVtYWlsLnN2Z1xuLy8gbW9kdWxlIGlkID0gLi9pbWFnZXMvaWNvbi1lbWFpbC5zdmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cDovL2FlcmVuZGlyLm1lLzIwMTgvMDQvMDYvbWFuYWdpbi1zdGF0aWMtaW1hZ2VzLXdlYnBhY2stZW5jb3JlL1xuY29uc3QgaW1hZ2VzQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzJywgdHJ1ZSwgL1xcLihwbmd8anBnfGpwZWd8Z2lmfGljb3xzdmd8d2VicCkkLyk7XG5pbWFnZXNDb250ZXh0LmtleXMoKS5mb3JFYWNoKGltYWdlc0NvbnRleHQpO1xuXG4vLyByZXF1aXJlKCcuLi9pbWFnZXMvaWNvbi1lbWFpbC5zdmcnKTtcbnJlcXVpcmUoJy4uL2Nzcy9tYWlsaG9nZ2VyLnNjc3MnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgdmFyIHNob3dUYWIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgLy8gTWFyayBhbGwgdGFicyBhcyBub3QgYWN0aXZlLlxuICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfSlcblxuICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVzLlxuICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLXBhbmUnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICBjb25zdCBtYXRjaCA9IC8jKC4rKSQvLmV4ZWModGhpcy5ocmVmKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hdGNoWzFdKVxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LXRhYnMgLm5hdi1saW5rJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RhYik7XG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvbWFpbGhvZ2dlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=