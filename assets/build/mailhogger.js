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
/******/ 	__webpack_require__.p = "/build/";
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

/***/ "./js/mailhogger.js":
/*!**************************!*\
  !*** ./js/mailhogger.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzg2ZWJmNDk3ZDcxZWExM2Y1ODMiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haWxob2dnZXIuc2Nzcz8zNWI3Iiwid2VicGFjazovLy8uL2pzL21haWxob2dnZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93VGFiIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInJlbW92ZSIsImFkZCIsIm1hdGNoIiwiZXhlYyIsImhyZWYiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEseUM7Ozs7Ozs7Ozs7OztBQ0FBQSxtQkFBT0EsQ0FBQyxxREFBUjs7QUFFQUMsT0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBVztBQUN6QyxNQUFJQyxVQUFVLFNBQVZBLE9BQVUsR0FBVztBQUN2QixRQUFJLENBQUMsS0FBS0MsU0FBTCxDQUFlQyxRQUFmLENBQXdCLFFBQXhCLENBQUwsRUFBd0M7QUFDdEM7QUFDQSxXQUFLQyxVQUFMLENBQWdCQSxVQUFoQixDQUEyQkMsZ0JBQTNCLENBQTRDLFdBQTVDLEVBQXlEQyxPQUF6RCxDQUFpRSxVQUFTQyxFQUFULEVBQWE7QUFDNUVBLFdBQUdMLFNBQUgsQ0FBYU0sTUFBYixDQUFvQixRQUFwQjtBQUNELE9BRkQ7O0FBSUE7QUFDQSxXQUFLSixVQUFMLENBQWdCQSxVQUFoQixDQUEyQkEsVUFBM0IsQ0FBc0NDLGdCQUF0QyxDQUF1RCxXQUF2RCxFQUFvRUMsT0FBcEUsQ0FBNEUsVUFBU0MsRUFBVCxFQUFhO0FBQ3ZGQSxXQUFHTCxTQUFILENBQWFNLE1BQWIsQ0FBb0IsUUFBcEI7QUFDRCxPQUZEOztBQUlBLFdBQUtOLFNBQUwsQ0FBZU8sR0FBZixDQUFtQixRQUFuQjtBQUNBLFVBQU1DLFFBQVEsU0FBU0MsSUFBVCxDQUFjLEtBQUtDLElBQW5CLENBQWQ7QUFDQSxVQUFJRixLQUFKLEVBQVc7QUFDVCxZQUFNRyxTQUFTQyxTQUFTQyxjQUFULENBQXdCTCxNQUFNLENBQU4sQ0FBeEIsQ0FBZjtBQUNBLFlBQUlHLE1BQUosRUFBWTtBQUNWQSxpQkFBT1gsU0FBUCxDQUFpQk8sR0FBakIsQ0FBcUIsUUFBckI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQXJCRDs7QUF1QkFLLFdBQVNULGdCQUFULENBQTBCLHFCQUExQixFQUFpREMsT0FBakQsQ0FBeUQsVUFBU0MsRUFBVCxFQUFhO0FBQ3BFQSxPQUFHUCxnQkFBSCxDQUFvQixPQUFwQixFQUE2QkMsT0FBN0I7QUFDRCxHQUZEO0FBR0QsQ0EzQkQsRSIsImZpbGUiOiJtYWlsaG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWlsaG9nZ2VyLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4NmViZjQ5N2Q3MWVhMTNmNTgzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Nzcy9tYWlsaG9nZ2VyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vY3NzL21haWxob2dnZXIuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9jc3MvbWFpbGhvZ2dlci5zY3NzJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gIHZhciBzaG93VGFiID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIC8vIE1hcmsgYWxsIHRhYnMgYXMgbm90IGFjdGl2ZS5cbiAgICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lcy5cbiAgICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1wYW5lJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgY29uc3QgbWF0Y2ggPSAvIyguKykkLy5leGVjKHRoaXMuaHJlZilcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXRjaFsxXSlcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi10YWJzIC5uYXYtbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUYWIpO1xuICB9KVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21haWxob2dnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9