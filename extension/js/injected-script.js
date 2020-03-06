/*!
 * Maskbook is a open source project under GNU AGPL 3.0 licence.
 * 
 * 
 * More info about our project at https://github.com/DimensionDev/Maskbook
 * 
 * Maskbook is built on CircleCI, in which all the building process is available to the public.
 * 
 * We directly take the output to submit to the Web Store. We will integrate the automatic submission
 * into the CircleCI in the near future.
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/extension/injected-script/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/extension/injected-script/addEventListener.ts":
/*!***********************************************************!*\
  !*** ./src/extension/injected-script/addEventListener.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.ts");

{
    const store = {};
    function hijack(key) {
        store[key] = new Set();
    }
    function isEnabled(key) {
        return key in store;
    }
    function getEvent(x, mocks = {}) {
        const mockTable = {
            target: document.activeElement,
            srcElement: document.activeElement,
            // Since it is bubbled to the document.
            currentTarget: document,
            // ! Why?
            _inherits_from_prototype: true,
            ...mocks,
        };
        return new Proxy(x, {
            get(target, key) {
                return mockTable[key] || target[key];
            },
        });
    }
    const hacks = {
        paste(textOrImage) {
            var _a, _b;
            const e = new ClipboardEvent('paste', { clipboardData: new DataTransfer() });
            if (typeof textOrImage === 'string') {
                e.clipboardData.setData('text/plain', textOrImage);
                return getEvent(e, { defaultPrevented: false, preventDefault() { } });
            }
            else if (textOrImage.type === 'image') {
                const binary = Uint8Array.from(textOrImage.value);
                const blob = new Blob([binary], { type: 'image/png' });
                const file = new File([blob], 'image.png', { lastModified: Date.now(), type: 'image/png' });
                const dt = new Proxy(new DataTransfer(), {
                    get(target, key) {
                        if (key === 'files')
                            return [file];
                        if (key === 'types')
                            return ['Files'];
                        if (key === 'items')
                            return [
                                {
                                    kind: 'file',
                                    type: 'image/png',
                                    getAsFile() {
                                        return file;
                                    },
                                },
                            ];
                        if (key === 'getData')
                            return () => '';
                        return target[key];
                    },
                });
                return getEvent(e, { defaultPrevented: false, preventDefault() { }, clipboardData: dt });
            }
            const error = new Error(`Unknown event, got ${_b = (_a = textOrImage) === null || _a === void 0 ? void 0 : _a.type, (_b !== null && _b !== void 0 ? _b : 'unknown')}`);
            console.error(error);
            throw error;
        },
        input(text) {
            // Cause react hooks the input.value getter & setter
            const proto = document.activeElement.constructor.prototype;
            Object.getOwnPropertyDescriptor(proto, 'value').set.call(document.activeElement, text);
            return getEvent(new window.InputEvent('input', { inputType: 'insertText', data: text }));
        },
    };
    Object.keys(hacks).concat(['keyup', 'input']).forEach(hijack);
    const invokeCustomEvent = e => {
        const ev = e;
        const [eventName, param] = JSON.parse(ev.detail);
        for (const f of store[eventName] || []) {
            try {
                const hack = hacks[eventName];
                if (hack)
                    f(hack(...param));
                else
                    f(param);
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    document.addEventListener(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["CustomEventId"], invokeCustomEvent);
    document.addEventListener = new Proxy(document.addEventListener, {
        apply(target, thisRef, [event, callback, ...args]) {
            if (isEnabled(event))
                store[event].add(callback);
            return Reflect.apply(target, thisRef, [event, callback, ...args]);
        },
    });
    document.removeEventListener = new Proxy(document.removeEventListener, {
        apply(target, thisRef, [event, callback, ...args]) {
            if (isEnabled(event))
                store[event].delete(callback);
            return Reflect.apply(target, thisRef, [event, callback, ...args]);
        },
    });
}


/***/ }),

/***/ "./src/extension/injected-script/index.ts":
/*!************************************************!*\
  !*** ./src/extension/injected-script/index.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEventListener */ "./src/extension/injected-script/addEventListener.ts");



/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: CustomEventId, DecryptFailedReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventId", function() { return CustomEventId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecryptFailedReason", function() { return DecryptFailedReason; });
/** Just a random one. Never mind. */
const CustomEventId = '6fea93e2-1ce4-442f-b2f9-abaf4ff0ce64';
var DecryptFailedReason;
(function (DecryptFailedReason) {
    DecryptFailedReason["MyCryptoKeyNotFound"] = "MyCryptoKeyNotFound";
})(DecryptFailedReason || (DecryptFailedReason = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVuc2lvbi9pbmplY3RlZC1zY3JpcHQvYWRkRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9uL2luamVjdGVkLXNjcmlwdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxvQ0FBb0M7QUFDdkY7QUFDQTtBQUNBLG9DQUFvQyw0Q0FBNEMsRUFBRSxFQUFFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxvQkFBb0I7QUFDckUsNERBQTRELDhDQUE4QztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLG9DQUFvQyw0Q0FBNEMsRUFBRSxxQkFBcUI7QUFDdkc7QUFDQSwwREFBMEQsc0hBQXNIO0FBQ2hMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsc0NBQXNDO0FBQ2xHLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOERBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUE0Qjs7Ozs7Ozs7Ozs7OztBQ0E1QjtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0EsQ0FBQyxrREFBa0QiLCJmaWxlIjoianMvaW5qZWN0ZWQtc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZXh0ZW5zaW9uL2luamVjdGVkLXNjcmlwdC9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IEN1c3RvbUV2ZW50SWQgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xue1xuICAgIGNvbnN0IHN0b3JlID0ge307XG4gICAgZnVuY3Rpb24gaGlqYWNrKGtleSkge1xuICAgICAgICBzdG9yZVtrZXldID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgaW4gc3RvcmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEV2ZW50KHgsIG1vY2tzID0ge30pIHtcbiAgICAgICAgY29uc3QgbW9ja1RhYmxlID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgICAgc3JjRWxlbWVudDogZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIC8vIFNpbmNlIGl0IGlzIGJ1YmJsZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAgICAgICAgY3VycmVudFRhcmdldDogZG9jdW1lbnQsXG4gICAgICAgICAgICAvLyAhIFdoeT9cbiAgICAgICAgICAgIF9pbmhlcml0c19mcm9tX3Byb3RvdHlwZTogdHJ1ZSxcbiAgICAgICAgICAgIC4uLm1vY2tzLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHgsIHtcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2NrVGFibGVba2V5XSB8fCB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBoYWNrcyA9IHtcbiAgICAgICAgcGFzdGUodGV4dE9ySW1hZ2UpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IENsaXBib2FyZEV2ZW50KCdwYXN0ZScsIHsgY2xpcGJvYXJkRGF0YTogbmV3IERhdGFUcmFuc2ZlcigpIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXh0T3JJbWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIHRleHRPckltYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RXZlbnQoZSwgeyBkZWZhdWx0UHJldmVudGVkOiBmYWxzZSwgcHJldmVudERlZmF1bHQoKSB7IH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0ZXh0T3JJbWFnZS50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5ID0gVWludDhBcnJheS5mcm9tKHRleHRPckltYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2JpbmFyeV0sIHsgdHlwZTogJ2ltYWdlL3BuZycgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKFtibG9iXSwgJ2ltYWdlLnBuZycsIHsgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpLCB0eXBlOiAnaW1hZ2UvcG5nJyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdCA9IG5ldyBQcm94eShuZXcgRGF0YVRyYW5zZmVyKCksIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnZmlsZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbZmlsZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAndHlwZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbJ0ZpbGVzJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnaXRlbXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXNGaWxlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2dldERhdGEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RXZlbnQoZSwgeyBkZWZhdWx0UHJldmVudGVkOiBmYWxzZSwgcHJldmVudERlZmF1bHQoKSB7IH0sIGNsaXBib2FyZERhdGE6IGR0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYFVua25vd24gZXZlbnQsIGdvdCAke19iID0gKF9hID0gdGV4dE9ySW1hZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlLCAoX2IgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ3Vua25vd24nKX1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0KHRleHQpIHtcbiAgICAgICAgICAgIC8vIENhdXNlIHJlYWN0IGhvb2tzIHRoZSBpbnB1dC52YWx1ZSBnZXR0ZXIgJiBzZXR0ZXJcbiAgICAgICAgICAgIGNvbnN0IHByb3RvID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCAndmFsdWUnKS5zZXQuY2FsbChkb2N1bWVudC5hY3RpdmVFbGVtZW50LCB0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBnZXRFdmVudChuZXcgd2luZG93LklucHV0RXZlbnQoJ2lucHV0JywgeyBpbnB1dFR5cGU6ICdpbnNlcnRUZXh0JywgZGF0YTogdGV4dCB9KSk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhoYWNrcykuY29uY2F0KFsna2V5dXAnLCAnaW5wdXQnXSkuZm9yRWFjaChoaWphY2spO1xuICAgIGNvbnN0IGludm9rZUN1c3RvbUV2ZW50ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ID0gZTtcbiAgICAgICAgY29uc3QgW2V2ZW50TmFtZSwgcGFyYW1dID0gSlNPTi5wYXJzZShldi5kZXRhaWwpO1xuICAgICAgICBmb3IgKGNvbnN0IGYgb2Ygc3RvcmVbZXZlbnROYW1lXSB8fCBbXSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYWNrID0gaGFja3NbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoaGFjaylcbiAgICAgICAgICAgICAgICAgICAgZihoYWNrKC4uLnBhcmFtKSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBmKHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihDdXN0b21FdmVudElkLCBpbnZva2VDdXN0b21FdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA9IG5ldyBQcm94eShkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldCwgdGhpc1JlZiwgW2V2ZW50LCBjYWxsYmFjaywgLi4uYXJnc10pIHtcbiAgICAgICAgICAgIGlmIChpc0VuYWJsZWQoZXZlbnQpKVxuICAgICAgICAgICAgICAgIHN0b3JlW2V2ZW50XS5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzUmVmLCBbZXZlbnQsIGNhbGxiYWNrLCAuLi5hcmdzXSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IG5ldyBQcm94eShkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldCwgdGhpc1JlZiwgW2V2ZW50LCBjYWxsYmFjaywgLi4uYXJnc10pIHtcbiAgICAgICAgICAgIGlmIChpc0VuYWJsZWQoZXZlbnQpKVxuICAgICAgICAgICAgICAgIHN0b3JlW2V2ZW50XS5kZWxldGUoY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzUmVmLCBbZXZlbnQsIGNhbGxiYWNrLCAuLi5hcmdzXSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgJy4vYWRkRXZlbnRMaXN0ZW5lcic7XG4iLCIvKiogSnVzdCBhIHJhbmRvbSBvbmUuIE5ldmVyIG1pbmQuICovXG5leHBvcnQgY29uc3QgQ3VzdG9tRXZlbnRJZCA9ICc2ZmVhOTNlMi0xY2U0LTQ0MmYtYjJmOS1hYmFmNGZmMGNlNjQnO1xuZXhwb3J0IHZhciBEZWNyeXB0RmFpbGVkUmVhc29uO1xuKGZ1bmN0aW9uIChEZWNyeXB0RmFpbGVkUmVhc29uKSB7XG4gICAgRGVjcnlwdEZhaWxlZFJlYXNvbltcIk15Q3J5cHRvS2V5Tm90Rm91bmRcIl0gPSBcIk15Q3J5cHRvS2V5Tm90Rm91bmRcIjtcbn0pKERlY3J5cHRGYWlsZWRSZWFzb24gfHwgKERlY3J5cHRGYWlsZWRSZWFzb24gPSB7fSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==