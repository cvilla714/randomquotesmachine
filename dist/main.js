/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

var QuoteBank = [{
  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  author: "Nelson Mandela"
}, {
  quote: "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney"
}, {
  quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  author: "Steve Jobs"
}];
window.onload = init;

function init() {
  // console.log("JS loaded");
  // document.querySelector("#text").innerText = "Cosmel";
  // document.querySelector("#author").innerText = "Author";
  generateQuote();
}

var generatorquote = document.querySelector("#new-quote");
generatorquote.addEventListener("click", generateQuote);

function generateQuote() {
  // console.log("Generate Quote");
  // console.log("JS loaded");
  var quoteSize = QuoteBank.length;
  var randomIndexQuote = Math.floor(Math.random() * quoteSize);
  var twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"; // formatting quote for twitter

  var quoteInApiFormat = QuoteBank[randomIndexQuote].quote.replace(/ /g, "%20"); // adding the quote

  twitterLink += quoteInApiFormat; // adding author in apit format

  var authorInApiFormat = QuoteBank[randomIndexQuote].author.replace(/ /g, "%20"); // adding the author

  twitterLink += " - " + authorInApiFormat;
  console.log(randomIndexQuote);
  document.querySelector("#tweet-quote").href = twitterLink;
  document.querySelector("#text").innerText = QuoteBank[randomIndexQuote].quote;
  document.querySelector("#author").innerText = QuoteBank[randomIndexQuote].author;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdW90ZS8uL3NyYy9zdHlsZS5jc3M/NTRjNCIsIndlYnBhY2s6Ly9xdW90ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9xdW90ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3F1b3RlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlF1b3RlQmFuayIsInF1b3RlIiwiYXV0aG9yIiwid2luZG93Iiwib25sb2FkIiwiaW5pdCIsImdlbmVyYXRlUXVvdGUiLCJnZW5lcmF0b3JxdW90ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdW90ZVNpemUiLCJsZW5ndGgiLCJyYW5kb21JbmRleFF1b3RlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidHdpdHRlckxpbmsiLCJxdW90ZUluQXBpRm9ybWF0IiwicmVwbGFjZSIsImF1dGhvckluQXBpRm9ybWF0IiwiY29uc29sZSIsImxvZyIsImhyZWYiLCJpbm5lclRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLE9BQUssRUFBRSwyRkFEVDtBQUVFQyxRQUFNLEVBQUU7QUFGVixDQURnQixFQUtoQjtBQUNFRCxPQUFLLEVBQUUsNERBRFQ7QUFFRUMsUUFBTSxFQUFFO0FBRlYsQ0FMZ0IsRUFTaEI7QUFDRUQsT0FBSyxFQUFFLDhKQURUO0FBRUVDLFFBQU0sRUFBRTtBQUZWLENBVGdCLENBQWxCO0FBZUFDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkMsSUFBaEI7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUNkO0FBQ0E7QUFDQTtBQUNBQyxlQUFhO0FBQ2Q7O0FBRUQsSUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBdkI7QUFDQUYsY0FBYyxDQUFDRyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5Q0osYUFBekM7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QjtBQUNBO0FBQ0EsTUFBSUssU0FBUyxHQUFHWCxTQUFTLENBQUNZLE1BQTFCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JMLFNBQTNCLENBQXZCO0FBQ0EsTUFBSU0sV0FBVyxHQUFHLGdGQUFsQixDQUx1QixDQU92Qjs7QUFDQSxNQUFJQyxnQkFBZ0IsR0FBR2xCLFNBQVMsQ0FBQ2EsZ0JBQUQsQ0FBVCxDQUE0QlosS0FBNUIsQ0FBa0NrQixPQUFsQyxDQUEwQyxJQUExQyxFQUFnRCxLQUFoRCxDQUF2QixDQVJ1QixDQVN2Qjs7QUFDQUYsYUFBVyxJQUFJQyxnQkFBZixDQVZ1QixDQVl2Qjs7QUFDQSxNQUFJRSxpQkFBaUIsR0FBR3BCLFNBQVMsQ0FBQ2EsZ0JBQUQsQ0FBVCxDQUE0QlgsTUFBNUIsQ0FBbUNpQixPQUFuQyxDQUEyQyxJQUEzQyxFQUFpRCxLQUFqRCxDQUF4QixDQWJ1QixDQWN2Qjs7QUFDQUYsYUFBVyxJQUFJLFFBQVFHLGlCQUF2QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsZ0JBQVo7QUFDQUwsVUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDYyxJQUF2QyxHQUE4Q04sV0FBOUM7QUFDQVQsVUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDZSxTQUFoQyxHQUE0Q3hCLFNBQVMsQ0FBQ2EsZ0JBQUQsQ0FBVCxDQUE0QlosS0FBeEU7QUFDQU8sVUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDZSxTQUFsQyxHQUE4Q3hCLFNBQVMsQ0FBQ2EsZ0JBQUQsQ0FBVCxDQUE0QlgsTUFBMUU7QUFDRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IFF1b3RlQmFuayA9IFtcbiAge1xuICAgIHF1b3RlOiBcIlRoZSBncmVhdGVzdCBnbG9yeSBpbiBsaXZpbmcgbGllcyBub3QgaW4gbmV2ZXIgZmFsbGluZywgYnV0IGluIHJpc2luZyBldmVyeSB0aW1lIHdlIGZhbGwuXCIsXG4gICAgYXV0aG9yOiBcIk5lbHNvbiBNYW5kZWxhXCIsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogXCJUaGUgd2F5IHRvIGdldCBzdGFydGVkIGlzIHRvIHF1aXQgdGFsa2luZyBhbmQgYmVnaW4gZG9pbmcuXCIsXG4gICAgYXV0aG9yOiBcIldhbHQgRGlzbmV5XCIsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogXCJZb3VyIHRpbWUgaXMgbGltaXRlZCwgc28gZG9uJ3Qgd2FzdGUgaXQgbGl2aW5nIHNvbWVvbmUgZWxzZSdzIGxpZmUuIERvbid0IGJlIHRyYXBwZWQgYnkgZG9nbWEg4oCTIHdoaWNoIGlzIGxpdmluZyB3aXRoIHRoZSByZXN1bHRzIG9mIG90aGVyIHBlb3BsZSdzIHRoaW5raW5nLlwiLFxuICAgIGF1dGhvcjogXCJTdGV2ZSBKb2JzXCIsXG4gIH0sXG5dO1xuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiSlMgbG9hZGVkXCIpO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RleHRcIikuaW5uZXJUZXh0ID0gXCJDb3NtZWxcIjtcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXRob3JcIikuaW5uZXJUZXh0ID0gXCJBdXRob3JcIjtcbiAgZ2VuZXJhdGVRdW90ZSgpO1xufVxuXG5jb25zdCBnZW5lcmF0b3JxdW90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXF1b3RlXCIpO1xuZ2VuZXJhdG9ycXVvdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlUXVvdGUpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVF1b3RlKCkge1xuICAvLyBjb25zb2xlLmxvZyhcIkdlbmVyYXRlIFF1b3RlXCIpO1xuICAvLyBjb25zb2xlLmxvZyhcIkpTIGxvYWRlZFwiKTtcbiAgbGV0IHF1b3RlU2l6ZSA9IFF1b3RlQmFuay5sZW5ndGg7XG4gIGxldCByYW5kb21JbmRleFF1b3RlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVvdGVTaXplKTtcbiAgbGV0IHR3aXR0ZXJMaW5rID0gXCJodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD9oYXNodGFncz1xdW90ZXMmcmVsYXRlZD1mcmVlY29kZWNhbXAmdGV4dD0lMjJcIjtcblxuICAvLyBmb3JtYXR0aW5nIHF1b3RlIGZvciB0d2l0dGVyXG4gIGxldCBxdW90ZUluQXBpRm9ybWF0ID0gUXVvdGVCYW5rW3JhbmRvbUluZGV4UXVvdGVdLnF1b3RlLnJlcGxhY2UoLyAvZywgXCIlMjBcIik7XG4gIC8vIGFkZGluZyB0aGUgcXVvdGVcbiAgdHdpdHRlckxpbmsgKz0gcXVvdGVJbkFwaUZvcm1hdDtcblxuICAvLyBhZGRpbmcgYXV0aG9yIGluIGFwaXQgZm9ybWF0XG4gIGxldCBhdXRob3JJbkFwaUZvcm1hdCA9IFF1b3RlQmFua1tyYW5kb21JbmRleFF1b3RlXS5hdXRob3IucmVwbGFjZSgvIC9nLCBcIiUyMFwiKTtcbiAgLy8gYWRkaW5nIHRoZSBhdXRob3JcbiAgdHdpdHRlckxpbmsgKz0gXCIgLSBcIiArIGF1dGhvckluQXBpRm9ybWF0O1xuXG4gIGNvbnNvbGUubG9nKHJhbmRvbUluZGV4UXVvdGUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3ZWV0LXF1b3RlXCIpLmhyZWYgPSB0d2l0dGVyTGluaztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0XCIpLmlubmVyVGV4dCA9IFF1b3RlQmFua1tyYW5kb21JbmRleFF1b3RlXS5xdW90ZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXRob3JcIikuaW5uZXJUZXh0ID0gUXVvdGVCYW5rW3JhbmRvbUluZGV4UXVvdGVdLmF1dGhvcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=