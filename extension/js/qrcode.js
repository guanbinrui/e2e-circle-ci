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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web-workers/QRCode.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jsqr/dist/jsQR.js":
/*!****************************************!*\
  !*** ./node_modules/jsqr/dist/jsQR.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix = /** @class */ (function () {
    function BitMatrix(data, width) {
        this.width = width;
        this.height = data.length / width;
        this.data = data;
    }
    BitMatrix.createEmpty = function (width, height) {
        return new BitMatrix(new Uint8ClampedArray(width * height), width);
    };
    BitMatrix.prototype.get = function (x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return false;
        }
        return !!this.data[y * this.width + x];
    };
    BitMatrix.prototype.set = function (x, y, v) {
        this.data[y * this.width + x] = v ? 1 : 0;
    };
    BitMatrix.prototype.setRegion = function (left, top, width, height, v) {
        for (var y = top; y < top + height; y++) {
            for (var x = left; x < left + width; x++) {
                this.set(x, y, !!v);
            }
        }
    };
    return BitMatrix;
}());
exports.BitMatrix = BitMatrix;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGFPoly_1 = __webpack_require__(2);
function addOrSubtractGF(a, b) {
    return a ^ b; // tslint:disable-line:no-bitwise
}
exports.addOrSubtractGF = addOrSubtractGF;
var GenericGF = /** @class */ (function () {
    function GenericGF(primitive, size, genBase) {
        this.primitive = primitive;
        this.size = size;
        this.generatorBase = genBase;
        this.expTable = new Array(this.size);
        this.logTable = new Array(this.size);
        var x = 1;
        for (var i = 0; i < this.size; i++) {
            this.expTable[i] = x;
            x = x * 2;
            if (x >= this.size) {
                x = (x ^ this.primitive) & (this.size - 1); // tslint:disable-line:no-bitwise
            }
        }
        for (var i = 0; i < this.size - 1; i++) {
            this.logTable[this.expTable[i]] = i;
        }
        this.zero = new GenericGFPoly_1.default(this, Uint8ClampedArray.from([0]));
        this.one = new GenericGFPoly_1.default(this, Uint8ClampedArray.from([1]));
    }
    GenericGF.prototype.multiply = function (a, b) {
        if (a === 0 || b === 0) {
            return 0;
        }
        return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
    };
    GenericGF.prototype.inverse = function (a) {
        if (a === 0) {
            throw new Error("Can't invert 0");
        }
        return this.expTable[this.size - this.logTable[a] - 1];
    };
    GenericGF.prototype.buildMonomial = function (degree, coefficient) {
        if (degree < 0) {
            throw new Error("Invalid monomial degree less than 0");
        }
        if (coefficient === 0) {
            return this.zero;
        }
        var coefficients = new Uint8ClampedArray(degree + 1);
        coefficients[0] = coefficient;
        return new GenericGFPoly_1.default(this, coefficients);
    };
    GenericGF.prototype.log = function (a) {
        if (a === 0) {
            throw new Error("Can't take log(0)");
        }
        return this.logTable[a];
    };
    GenericGF.prototype.exp = function (a) {
        return this.expTable[a];
    };
    return GenericGF;
}());
exports.default = GenericGF;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGF_1 = __webpack_require__(1);
var GenericGFPoly = /** @class */ (function () {
    function GenericGFPoly(field, coefficients) {
        if (coefficients.length === 0) {
            throw new Error("No coefficients.");
        }
        this.field = field;
        var coefficientsLength = coefficients.length;
        if (coefficientsLength > 1 && coefficients[0] === 0) {
            // Leading term must be non-zero for anything except the constant polynomial "0"
            var firstNonZero = 1;
            while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                firstNonZero++;
            }
            if (firstNonZero === coefficientsLength) {
                this.coefficients = field.zero.coefficients;
            }
            else {
                this.coefficients = new Uint8ClampedArray(coefficientsLength - firstNonZero);
                for (var i = 0; i < this.coefficients.length; i++) {
                    this.coefficients[i] = coefficients[firstNonZero + i];
                }
            }
        }
        else {
            this.coefficients = coefficients;
        }
    }
    GenericGFPoly.prototype.degree = function () {
        return this.coefficients.length - 1;
    };
    GenericGFPoly.prototype.isZero = function () {
        return this.coefficients[0] === 0;
    };
    GenericGFPoly.prototype.getCoefficient = function (degree) {
        return this.coefficients[this.coefficients.length - 1 - degree];
    };
    GenericGFPoly.prototype.addOrSubtract = function (other) {
        if (this.isZero()) {
            return other;
        }
        if (other.isZero()) {
            return this;
        }
        var smallerCoefficients = this.coefficients;
        var largerCoefficients = other.coefficients;
        if (smallerCoefficients.length > largerCoefficients.length) {
            _a = [largerCoefficients, smallerCoefficients], smallerCoefficients = _a[0], largerCoefficients = _a[1];
        }
        var sumDiff = new Uint8ClampedArray(largerCoefficients.length);
        var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
        for (var i = 0; i < lengthDiff; i++) {
            sumDiff[i] = largerCoefficients[i];
        }
        for (var i = lengthDiff; i < largerCoefficients.length; i++) {
            sumDiff[i] = GenericGF_1.addOrSubtractGF(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
        }
        return new GenericGFPoly(this.field, sumDiff);
        var _a;
    };
    GenericGFPoly.prototype.multiply = function (scalar) {
        if (scalar === 0) {
            return this.field.zero;
        }
        if (scalar === 1) {
            return this;
        }
        var size = this.coefficients.length;
        var product = new Uint8ClampedArray(size);
        for (var i = 0; i < size; i++) {
            product[i] = this.field.multiply(this.coefficients[i], scalar);
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.multiplyPoly = function (other) {
        if (this.isZero() || other.isZero()) {
            return this.field.zero;
        }
        var aCoefficients = this.coefficients;
        var aLength = aCoefficients.length;
        var bCoefficients = other.coefficients;
        var bLength = bCoefficients.length;
        var product = new Uint8ClampedArray(aLength + bLength - 1);
        for (var i = 0; i < aLength; i++) {
            var aCoeff = aCoefficients[i];
            for (var j = 0; j < bLength; j++) {
                product[i + j] = GenericGF_1.addOrSubtractGF(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
            }
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.multiplyByMonomial = function (degree, coefficient) {
        if (degree < 0) {
            throw new Error("Invalid degree less than 0");
        }
        if (coefficient === 0) {
            return this.field.zero;
        }
        var size = this.coefficients.length;
        var product = new Uint8ClampedArray(size + degree);
        for (var i = 0; i < size; i++) {
            product[i] = this.field.multiply(this.coefficients[i], coefficient);
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.evaluateAt = function (a) {
        var result = 0;
        if (a === 0) {
            // Just return the x^0 coefficient
            return this.getCoefficient(0);
        }
        var size = this.coefficients.length;
        if (a === 1) {
            // Just the sum of the coefficients
            this.coefficients.forEach(function (coefficient) {
                result = GenericGF_1.addOrSubtractGF(result, coefficient);
            });
            return result;
        }
        result = this.coefficients[0];
        for (var i = 1; i < size; i++) {
            result = GenericGF_1.addOrSubtractGF(this.field.multiply(a, result), this.coefficients[i]);
        }
        return result;
    };
    return GenericGFPoly;
}());
exports.default = GenericGFPoly;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binarizer_1 = __webpack_require__(4);
var decoder_1 = __webpack_require__(5);
var extractor_1 = __webpack_require__(11);
var locator_1 = __webpack_require__(12);
function scan(matrix) {
    var location = locator_1.locate(matrix);
    if (!location) {
        return null;
    }
    var extracted = extractor_1.extract(matrix, location);
    var decoded = decoder_1.decode(extracted.matrix);
    if (!decoded) {
        return null;
    }
    return {
        binaryData: decoded.bytes,
        data: decoded.text,
        chunks: decoded.chunks,
        location: {
            topRightCorner: extracted.mappingFunction(location.dimension, 0),
            topLeftCorner: extracted.mappingFunction(0, 0),
            bottomRightCorner: extracted.mappingFunction(location.dimension, location.dimension),
            bottomLeftCorner: extracted.mappingFunction(0, location.dimension),
            topRightFinderPattern: location.topRight,
            topLeftFinderPattern: location.topLeft,
            bottomLeftFinderPattern: location.bottomLeft,
            bottomRightAlignmentPattern: location.alignmentPattern,
        },
    };
}
var defaultOptions = {
    inversionAttempts: "attemptBoth",
};
function jsQR(data, width, height, providedOptions) {
    if (providedOptions === void 0) { providedOptions = {}; }
    var options = defaultOptions;
    Object.keys(options || {}).forEach(function (opt) {
        options[opt] = providedOptions[opt] || options[opt];
    });
    var shouldInvert = options.inversionAttempts === "attemptBoth" || options.inversionAttempts === "invertFirst";
    var tryInvertedFirst = options.inversionAttempts === "onlyInvert" || options.inversionAttempts === "invertFirst";
    var _a = binarizer_1.binarize(data, width, height, shouldInvert), binarized = _a.binarized, inverted = _a.inverted;
    var result = scan(tryInvertedFirst ? inverted : binarized);
    if (!result && (options.inversionAttempts === "attemptBoth" || options.inversionAttempts === "invertFirst")) {
        result = scan(tryInvertedFirst ? binarized : inverted);
    }
    return result;
}
jsQR.default = jsQR;
exports.default = jsQR;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __webpack_require__(0);
var REGION_SIZE = 8;
var MIN_DYNAMIC_RANGE = 24;
function numBetween(value, min, max) {
    return value < min ? min : value > max ? max : value;
}
// Like BitMatrix but accepts arbitry Uint8 values
var Matrix = /** @class */ (function () {
    function Matrix(width, height) {
        this.width = width;
        this.data = new Uint8ClampedArray(width * height);
    }
    Matrix.prototype.get = function (x, y) {
        return this.data[y * this.width + x];
    };
    Matrix.prototype.set = function (x, y, value) {
        this.data[y * this.width + x] = value;
    };
    return Matrix;
}());
function binarize(data, width, height, returnInverted) {
    if (data.length !== width * height * 4) {
        throw new Error("Malformed data passed to binarizer.");
    }
    // Convert image to greyscale
    var greyscalePixels = new Matrix(width, height);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var r = data[((y * width + x) * 4) + 0];
            var g = data[((y * width + x) * 4) + 1];
            var b = data[((y * width + x) * 4) + 2];
            greyscalePixels.set(x, y, 0.2126 * r + 0.7152 * g + 0.0722 * b);
        }
    }
    var horizontalRegionCount = Math.ceil(width / REGION_SIZE);
    var verticalRegionCount = Math.ceil(height / REGION_SIZE);
    var blackPoints = new Matrix(horizontalRegionCount, verticalRegionCount);
    for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
        for (var hortizontalRegion = 0; hortizontalRegion < horizontalRegionCount; hortizontalRegion++) {
            var sum = 0;
            var min = Infinity;
            var max = 0;
            for (var y = 0; y < REGION_SIZE; y++) {
                for (var x = 0; x < REGION_SIZE; x++) {
                    var pixelLumosity = greyscalePixels.get(hortizontalRegion * REGION_SIZE + x, verticalRegion * REGION_SIZE + y);
                    sum += pixelLumosity;
                    min = Math.min(min, pixelLumosity);
                    max = Math.max(max, pixelLumosity);
                }
            }
            var average = sum / (Math.pow(REGION_SIZE, 2));
            if (max - min <= MIN_DYNAMIC_RANGE) {
                // If variation within the block is low, assume this is a block with only light or only
                // dark pixels. In that case we do not want to use the average, as it would divide this
                // low contrast area into black and white pixels, essentially creating data out of noise.
                //
                // Default the blackpoint for these blocks to be half the min - effectively white them out
                average = min / 2;
                if (verticalRegion > 0 && hortizontalRegion > 0) {
                    // Correct the "white background" assumption for blocks that have neighbors by comparing
                    // the pixels in this block to the previously calculated black points. This is based on
                    // the fact that dark barcode symbology is always surrounded by some amount of light
                    // background for which reasonable black point estimates were made. The bp estimated at
                    // the boundaries is used for the interior.
                    // The (min < bp) is arbitrary but works better than other heuristics that were tried.
                    var averageNeighborBlackPoint = (blackPoints.get(hortizontalRegion, verticalRegion - 1) +
                        (2 * blackPoints.get(hortizontalRegion - 1, verticalRegion)) +
                        blackPoints.get(hortizontalRegion - 1, verticalRegion - 1)) / 4;
                    if (min < averageNeighborBlackPoint) {
                        average = averageNeighborBlackPoint;
                    }
                }
            }
            blackPoints.set(hortizontalRegion, verticalRegion, average);
        }
    }
    var binarized = BitMatrix_1.BitMatrix.createEmpty(width, height);
    var inverted = null;
    if (returnInverted) {
        inverted = BitMatrix_1.BitMatrix.createEmpty(width, height);
    }
    for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
        for (var hortizontalRegion = 0; hortizontalRegion < horizontalRegionCount; hortizontalRegion++) {
            var left = numBetween(hortizontalRegion, 2, horizontalRegionCount - 3);
            var top_1 = numBetween(verticalRegion, 2, verticalRegionCount - 3);
            var sum = 0;
            for (var xRegion = -2; xRegion <= 2; xRegion++) {
                for (var yRegion = -2; yRegion <= 2; yRegion++) {
                    sum += blackPoints.get(left + xRegion, top_1 + yRegion);
                }
            }
            var threshold = sum / 25;
            for (var xRegion = 0; xRegion < REGION_SIZE; xRegion++) {
                for (var yRegion = 0; yRegion < REGION_SIZE; yRegion++) {
                    var x = hortizontalRegion * REGION_SIZE + xRegion;
                    var y = verticalRegion * REGION_SIZE + yRegion;
                    var lum = greyscalePixels.get(x, y);
                    binarized.set(x, y, lum <= threshold);
                    if (returnInverted) {
                        inverted.set(x, y, !(lum <= threshold));
                    }
                }
            }
        }
    }
    if (returnInverted) {
        return { binarized: binarized, inverted: inverted };
    }
    return { binarized: binarized };
}
exports.binarize = binarize;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __webpack_require__(0);
var decodeData_1 = __webpack_require__(6);
var reedsolomon_1 = __webpack_require__(9);
var version_1 = __webpack_require__(10);
// tslint:disable:no-bitwise
function numBitsDiffering(x, y) {
    var z = x ^ y;
    var bitCount = 0;
    while (z) {
        bitCount++;
        z &= z - 1;
    }
    return bitCount;
}
function pushBit(bit, byte) {
    return (byte << 1) | bit;
}
// tslint:enable:no-bitwise
var FORMAT_INFO_TABLE = [
    { bits: 0x5412, formatInfo: { errorCorrectionLevel: 1, dataMask: 0 } },
    { bits: 0x5125, formatInfo: { errorCorrectionLevel: 1, dataMask: 1 } },
    { bits: 0x5E7C, formatInfo: { errorCorrectionLevel: 1, dataMask: 2 } },
    { bits: 0x5B4B, formatInfo: { errorCorrectionLevel: 1, dataMask: 3 } },
    { bits: 0x45F9, formatInfo: { errorCorrectionLevel: 1, dataMask: 4 } },
    { bits: 0x40CE, formatInfo: { errorCorrectionLevel: 1, dataMask: 5 } },
    { bits: 0x4F97, formatInfo: { errorCorrectionLevel: 1, dataMask: 6 } },
    { bits: 0x4AA0, formatInfo: { errorCorrectionLevel: 1, dataMask: 7 } },
    { bits: 0x77C4, formatInfo: { errorCorrectionLevel: 0, dataMask: 0 } },
    { bits: 0x72F3, formatInfo: { errorCorrectionLevel: 0, dataMask: 1 } },
    { bits: 0x7DAA, formatInfo: { errorCorrectionLevel: 0, dataMask: 2 } },
    { bits: 0x789D, formatInfo: { errorCorrectionLevel: 0, dataMask: 3 } },
    { bits: 0x662F, formatInfo: { errorCorrectionLevel: 0, dataMask: 4 } },
    { bits: 0x6318, formatInfo: { errorCorrectionLevel: 0, dataMask: 5 } },
    { bits: 0x6C41, formatInfo: { errorCorrectionLevel: 0, dataMask: 6 } },
    { bits: 0x6976, formatInfo: { errorCorrectionLevel: 0, dataMask: 7 } },
    { bits: 0x1689, formatInfo: { errorCorrectionLevel: 3, dataMask: 0 } },
    { bits: 0x13BE, formatInfo: { errorCorrectionLevel: 3, dataMask: 1 } },
    { bits: 0x1CE7, formatInfo: { errorCorrectionLevel: 3, dataMask: 2 } },
    { bits: 0x19D0, formatInfo: { errorCorrectionLevel: 3, dataMask: 3 } },
    { bits: 0x0762, formatInfo: { errorCorrectionLevel: 3, dataMask: 4 } },
    { bits: 0x0255, formatInfo: { errorCorrectionLevel: 3, dataMask: 5 } },
    { bits: 0x0D0C, formatInfo: { errorCorrectionLevel: 3, dataMask: 6 } },
    { bits: 0x083B, formatInfo: { errorCorrectionLevel: 3, dataMask: 7 } },
    { bits: 0x355F, formatInfo: { errorCorrectionLevel: 2, dataMask: 0 } },
    { bits: 0x3068, formatInfo: { errorCorrectionLevel: 2, dataMask: 1 } },
    { bits: 0x3F31, formatInfo: { errorCorrectionLevel: 2, dataMask: 2 } },
    { bits: 0x3A06, formatInfo: { errorCorrectionLevel: 2, dataMask: 3 } },
    { bits: 0x24B4, formatInfo: { errorCorrectionLevel: 2, dataMask: 4 } },
    { bits: 0x2183, formatInfo: { errorCorrectionLevel: 2, dataMask: 5 } },
    { bits: 0x2EDA, formatInfo: { errorCorrectionLevel: 2, dataMask: 6 } },
    { bits: 0x2BED, formatInfo: { errorCorrectionLevel: 2, dataMask: 7 } },
];
var DATA_MASKS = [
    function (p) { return ((p.y + p.x) % 2) === 0; },
    function (p) { return (p.y % 2) === 0; },
    function (p) { return p.x % 3 === 0; },
    function (p) { return (p.y + p.x) % 3 === 0; },
    function (p) { return (Math.floor(p.y / 2) + Math.floor(p.x / 3)) % 2 === 0; },
    function (p) { return ((p.x * p.y) % 2) + ((p.x * p.y) % 3) === 0; },
    function (p) { return ((((p.y * p.x) % 2) + (p.y * p.x) % 3) % 2) === 0; },
    function (p) { return ((((p.y + p.x) % 2) + (p.y * p.x) % 3) % 2) === 0; },
];
function buildFunctionPatternMask(version) {
    var dimension = 17 + 4 * version.versionNumber;
    var matrix = BitMatrix_1.BitMatrix.createEmpty(dimension, dimension);
    matrix.setRegion(0, 0, 9, 9, true); // Top left finder pattern + separator + format
    matrix.setRegion(dimension - 8, 0, 8, 9, true); // Top right finder pattern + separator + format
    matrix.setRegion(0, dimension - 8, 9, 8, true); // Bottom left finder pattern + separator + format
    // Alignment patterns
    for (var _i = 0, _a = version.alignmentPatternCenters; _i < _a.length; _i++) {
        var x = _a[_i];
        for (var _b = 0, _c = version.alignmentPatternCenters; _b < _c.length; _b++) {
            var y = _c[_b];
            if (!(x === 6 && y === 6 || x === 6 && y === dimension - 7 || x === dimension - 7 && y === 6)) {
                matrix.setRegion(x - 2, y - 2, 5, 5, true);
            }
        }
    }
    matrix.setRegion(6, 9, 1, dimension - 17, true); // Vertical timing pattern
    matrix.setRegion(9, 6, dimension - 17, 1, true); // Horizontal timing pattern
    if (version.versionNumber > 6) {
        matrix.setRegion(dimension - 11, 0, 3, 6, true); // Version info, top right
        matrix.setRegion(0, dimension - 11, 6, 3, true); // Version info, bottom left
    }
    return matrix;
}
function readCodewords(matrix, version, formatInfo) {
    var dataMask = DATA_MASKS[formatInfo.dataMask];
    var dimension = matrix.height;
    var functionPatternMask = buildFunctionPatternMask(version);
    var codewords = [];
    var currentByte = 0;
    var bitsRead = 0;
    // Read columns in pairs, from right to left
    var readingUp = true;
    for (var columnIndex = dimension - 1; columnIndex > 0; columnIndex -= 2) {
        if (columnIndex === 6) {
            columnIndex--;
        }
        for (var i = 0; i < dimension; i++) {
            var y = readingUp ? dimension - 1 - i : i;
            for (var columnOffset = 0; columnOffset < 2; columnOffset++) {
                var x = columnIndex - columnOffset;
                if (!functionPatternMask.get(x, y)) {
                    bitsRead++;
                    var bit = matrix.get(x, y);
                    if (dataMask({ y: y, x: x })) {
                        bit = !bit;
                    }
                    currentByte = pushBit(bit, currentByte);
                    if (bitsRead === 8) {
                        codewords.push(currentByte);
                        bitsRead = 0;
                        currentByte = 0;
                    }
                }
            }
        }
        readingUp = !readingUp;
    }
    return codewords;
}
function readVersion(matrix) {
    var dimension = matrix.height;
    var provisionalVersion = Math.floor((dimension - 17) / 4);
    if (provisionalVersion <= 6) {
        return version_1.VERSIONS[provisionalVersion - 1];
    }
    var topRightVersionBits = 0;
    for (var y = 5; y >= 0; y--) {
        for (var x = dimension - 9; x >= dimension - 11; x--) {
            topRightVersionBits = pushBit(matrix.get(x, y), topRightVersionBits);
        }
    }
    var bottomLeftVersionBits = 0;
    for (var x = 5; x >= 0; x--) {
        for (var y = dimension - 9; y >= dimension - 11; y--) {
            bottomLeftVersionBits = pushBit(matrix.get(x, y), bottomLeftVersionBits);
        }
    }
    var bestDifference = Infinity;
    var bestVersion;
    for (var _i = 0, VERSIONS_1 = version_1.VERSIONS; _i < VERSIONS_1.length; _i++) {
        var version = VERSIONS_1[_i];
        if (version.infoBits === topRightVersionBits || version.infoBits === bottomLeftVersionBits) {
            return version;
        }
        var difference = numBitsDiffering(topRightVersionBits, version.infoBits);
        if (difference < bestDifference) {
            bestVersion = version;
            bestDifference = difference;
        }
        difference = numBitsDiffering(bottomLeftVersionBits, version.infoBits);
        if (difference < bestDifference) {
            bestVersion = version;
            bestDifference = difference;
        }
    }
    // We can tolerate up to 3 bits of error since no two version info codewords will
    // differ in less than 8 bits.
    if (bestDifference <= 3) {
        return bestVersion;
    }
}
function readFormatInformation(matrix) {
    var topLeftFormatInfoBits = 0;
    for (var x = 0; x <= 8; x++) {
        if (x !== 6) {
            topLeftFormatInfoBits = pushBit(matrix.get(x, 8), topLeftFormatInfoBits);
        }
    }
    for (var y = 7; y >= 0; y--) {
        if (y !== 6) {
            topLeftFormatInfoBits = pushBit(matrix.get(8, y), topLeftFormatInfoBits);
        }
    }
    var dimension = matrix.height;
    var topRightBottomRightFormatInfoBits = 0;
    for (var y = dimension - 1; y >= dimension - 7; y--) {
        topRightBottomRightFormatInfoBits = pushBit(matrix.get(8, y), topRightBottomRightFormatInfoBits);
    }
    for (var x = dimension - 8; x < dimension; x++) {
        topRightBottomRightFormatInfoBits = pushBit(matrix.get(x, 8), topRightBottomRightFormatInfoBits);
    }
    var bestDifference = Infinity;
    var bestFormatInfo = null;
    for (var _i = 0, FORMAT_INFO_TABLE_1 = FORMAT_INFO_TABLE; _i < FORMAT_INFO_TABLE_1.length; _i++) {
        var _a = FORMAT_INFO_TABLE_1[_i], bits = _a.bits, formatInfo = _a.formatInfo;
        if (bits === topLeftFormatInfoBits || bits === topRightBottomRightFormatInfoBits) {
            return formatInfo;
        }
        var difference = numBitsDiffering(topLeftFormatInfoBits, bits);
        if (difference < bestDifference) {
            bestFormatInfo = formatInfo;
            bestDifference = difference;
        }
        if (topLeftFormatInfoBits !== topRightBottomRightFormatInfoBits) {
            difference = numBitsDiffering(topRightBottomRightFormatInfoBits, bits);
            if (difference < bestDifference) {
                bestFormatInfo = formatInfo;
                bestDifference = difference;
            }
        }
    }
    // Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits differing means we found a match
    if (bestDifference <= 3) {
        return bestFormatInfo;
    }
    return null;
}
function getDataBlocks(codewords, version, ecLevel) {
    var ecInfo = version.errorCorrectionLevels[ecLevel];
    var dataBlocks = [];
    var totalCodewords = 0;
    ecInfo.ecBlocks.forEach(function (block) {
        for (var i = 0; i < block.numBlocks; i++) {
            dataBlocks.push({ numDataCodewords: block.dataCodewordsPerBlock, codewords: [] });
            totalCodewords += block.dataCodewordsPerBlock + ecInfo.ecCodewordsPerBlock;
        }
    });
    // In some cases the QR code will be malformed enough that we pull off more or less than we should.
    // If we pull off less there's nothing we can do.
    // If we pull off more we can safely truncate
    if (codewords.length < totalCodewords) {
        return null;
    }
    codewords = codewords.slice(0, totalCodewords);
    var shortBlockSize = ecInfo.ecBlocks[0].dataCodewordsPerBlock;
    // Pull codewords to fill the blocks up to the minimum size
    for (var i = 0; i < shortBlockSize; i++) {
        for (var _i = 0, dataBlocks_1 = dataBlocks; _i < dataBlocks_1.length; _i++) {
            var dataBlock = dataBlocks_1[_i];
            dataBlock.codewords.push(codewords.shift());
        }
    }
    // If there are any large blocks, pull codewords to fill the last element of those
    if (ecInfo.ecBlocks.length > 1) {
        var smallBlockCount = ecInfo.ecBlocks[0].numBlocks;
        var largeBlockCount = ecInfo.ecBlocks[1].numBlocks;
        for (var i = 0; i < largeBlockCount; i++) {
            dataBlocks[smallBlockCount + i].codewords.push(codewords.shift());
        }
    }
    // Add the rest of the codewords to the blocks. These are the error correction codewords.
    while (codewords.length > 0) {
        for (var _a = 0, dataBlocks_2 = dataBlocks; _a < dataBlocks_2.length; _a++) {
            var dataBlock = dataBlocks_2[_a];
            dataBlock.codewords.push(codewords.shift());
        }
    }
    return dataBlocks;
}
function decodeMatrix(matrix) {
    var version = readVersion(matrix);
    if (!version) {
        return null;
    }
    var formatInfo = readFormatInformation(matrix);
    if (!formatInfo) {
        return null;
    }
    var codewords = readCodewords(matrix, version, formatInfo);
    var dataBlocks = getDataBlocks(codewords, version, formatInfo.errorCorrectionLevel);
    if (!dataBlocks) {
        return null;
    }
    // Count total number of data bytes
    var totalBytes = dataBlocks.reduce(function (a, b) { return a + b.numDataCodewords; }, 0);
    var resultBytes = new Uint8ClampedArray(totalBytes);
    var resultIndex = 0;
    for (var _i = 0, dataBlocks_3 = dataBlocks; _i < dataBlocks_3.length; _i++) {
        var dataBlock = dataBlocks_3[_i];
        var correctedBytes = reedsolomon_1.decode(dataBlock.codewords, dataBlock.codewords.length - dataBlock.numDataCodewords);
        if (!correctedBytes) {
            return null;
        }
        for (var i = 0; i < dataBlock.numDataCodewords; i++) {
            resultBytes[resultIndex++] = correctedBytes[i];
        }
    }
    try {
        return decodeData_1.decode(resultBytes, version.versionNumber);
    }
    catch (_a) {
        return null;
    }
}
function decode(matrix) {
    if (matrix == null) {
        return null;
    }
    var result = decodeMatrix(matrix);
    if (result) {
        return result;
    }
    // Decoding didn't work, try mirroring the QR across the topLeft -> bottomRight line.
    for (var x = 0; x < matrix.width; x++) {
        for (var y = x + 1; y < matrix.height; y++) {
            if (matrix.get(x, y) !== matrix.get(y, x)) {
                matrix.set(x, y, !matrix.get(x, y));
                matrix.set(y, x, !matrix.get(y, x));
            }
        }
    }
    return decodeMatrix(matrix);
}
exports.decode = decode;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-bitwise
var BitStream_1 = __webpack_require__(7);
var shiftJISTable_1 = __webpack_require__(8);
var Mode;
(function (Mode) {
    Mode["Numeric"] = "numeric";
    Mode["Alphanumeric"] = "alphanumeric";
    Mode["Byte"] = "byte";
    Mode["Kanji"] = "kanji";
    Mode["ECI"] = "eci";
})(Mode = exports.Mode || (exports.Mode = {}));
var ModeByte;
(function (ModeByte) {
    ModeByte[ModeByte["Terminator"] = 0] = "Terminator";
    ModeByte[ModeByte["Numeric"] = 1] = "Numeric";
    ModeByte[ModeByte["Alphanumeric"] = 2] = "Alphanumeric";
    ModeByte[ModeByte["Byte"] = 4] = "Byte";
    ModeByte[ModeByte["Kanji"] = 8] = "Kanji";
    ModeByte[ModeByte["ECI"] = 7] = "ECI";
    // StructuredAppend = 0x3,
    // FNC1FirstPosition = 0x5,
    // FNC1SecondPosition = 0x9,
})(ModeByte || (ModeByte = {}));
function decodeNumeric(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [10, 12, 14][size];
    var length = stream.readBits(characterCountSize);
    // Read digits in groups of 3
    while (length >= 3) {
        var num = stream.readBits(10);
        if (num >= 1000) {
            throw new Error("Invalid numeric value above 999");
        }
        var a = Math.floor(num / 100);
        var b = Math.floor(num / 10) % 10;
        var c = num % 10;
        bytes.push(48 + a, 48 + b, 48 + c);
        text += a.toString() + b.toString() + c.toString();
        length -= 3;
    }
    // If the number of digits aren't a multiple of 3, the remaining digits are special cased.
    if (length === 2) {
        var num = stream.readBits(7);
        if (num >= 100) {
            throw new Error("Invalid numeric value above 99");
        }
        var a = Math.floor(num / 10);
        var b = num % 10;
        bytes.push(48 + a, 48 + b);
        text += a.toString() + b.toString();
    }
    else if (length === 1) {
        var num = stream.readBits(4);
        if (num >= 10) {
            throw new Error("Invalid numeric value above 9");
        }
        bytes.push(48 + num);
        text += num.toString();
    }
    return { bytes: bytes, text: text };
}
var AlphanumericCharacterCodes = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    " ", "$", "%", "*", "+", "-", ".", "/", ":",
];
function decodeAlphanumeric(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [9, 11, 13][size];
    var length = stream.readBits(characterCountSize);
    while (length >= 2) {
        var v = stream.readBits(11);
        var a = Math.floor(v / 45);
        var b = v % 45;
        bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0), AlphanumericCharacterCodes[b].charCodeAt(0));
        text += AlphanumericCharacterCodes[a] + AlphanumericCharacterCodes[b];
        length -= 2;
    }
    if (length === 1) {
        var a = stream.readBits(6);
        bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0));
        text += AlphanumericCharacterCodes[a];
    }
    return { bytes: bytes, text: text };
}
function decodeByte(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [8, 16, 16][size];
    var length = stream.readBits(characterCountSize);
    for (var i = 0; i < length; i++) {
        var b = stream.readBits(8);
        bytes.push(b);
    }
    try {
        text += decodeURIComponent(bytes.map(function (b) { return "%" + ("0" + b.toString(16)).substr(-2); }).join(""));
    }
    catch (_a) {
        // failed to decode
    }
    return { bytes: bytes, text: text };
}
function decodeKanji(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [8, 10, 12][size];
    var length = stream.readBits(characterCountSize);
    for (var i = 0; i < length; i++) {
        var k = stream.readBits(13);
        var c = (Math.floor(k / 0xC0) << 8) | (k % 0xC0);
        if (c < 0x1F00) {
            c += 0x8140;
        }
        else {
            c += 0xC140;
        }
        bytes.push(c >> 8, c & 0xFF);
        text += String.fromCharCode(shiftJISTable_1.shiftJISTable[c]);
    }
    return { bytes: bytes, text: text };
}
function decode(data, version) {
    var stream = new BitStream_1.BitStream(data);
    // There are 3 'sizes' based on the version. 1-9 is small (0), 10-26 is medium (1) and 27-40 is large (2).
    var size = version <= 9 ? 0 : version <= 26 ? 1 : 2;
    var result = {
        text: "",
        bytes: [],
        chunks: [],
    };
    while (stream.available() >= 4) {
        var mode = stream.readBits(4);
        if (mode === ModeByte.Terminator) {
            return result;
        }
        else if (mode === ModeByte.ECI) {
            if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(7),
                });
            }
            else if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(14),
                });
            }
            else if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(21),
                });
            }
            else {
                // ECI data seems corrupted
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: -1,
                });
            }
        }
        else if (mode === ModeByte.Numeric) {
            var numericResult = decodeNumeric(stream, size);
            result.text += numericResult.text;
            (_a = result.bytes).push.apply(_a, numericResult.bytes);
            result.chunks.push({
                type: Mode.Numeric,
                text: numericResult.text,
            });
        }
        else if (mode === ModeByte.Alphanumeric) {
            var alphanumericResult = decodeAlphanumeric(stream, size);
            result.text += alphanumericResult.text;
            (_b = result.bytes).push.apply(_b, alphanumericResult.bytes);
            result.chunks.push({
                type: Mode.Alphanumeric,
                text: alphanumericResult.text,
            });
        }
        else if (mode === ModeByte.Byte) {
            var byteResult = decodeByte(stream, size);
            result.text += byteResult.text;
            (_c = result.bytes).push.apply(_c, byteResult.bytes);
            result.chunks.push({
                type: Mode.Byte,
                bytes: byteResult.bytes,
                text: byteResult.text,
            });
        }
        else if (mode === ModeByte.Kanji) {
            var kanjiResult = decodeKanji(stream, size);
            result.text += kanjiResult.text;
            (_d = result.bytes).push.apply(_d, kanjiResult.bytes);
            result.chunks.push({
                type: Mode.Kanji,
                bytes: kanjiResult.bytes,
                text: kanjiResult.text,
            });
        }
    }
    var _a, _b, _c, _d;
}
exports.decode = decode;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:no-bitwise
Object.defineProperty(exports, "__esModule", { value: true });
var BitStream = /** @class */ (function () {
    function BitStream(bytes) {
        this.byteOffset = 0;
        this.bitOffset = 0;
        this.bytes = bytes;
    }
    BitStream.prototype.readBits = function (numBits) {
        if (numBits < 1 || numBits > 32 || numBits > this.available()) {
            throw new Error("Cannot read " + numBits.toString() + " bits");
        }
        var result = 0;
        // First, read remainder from current byte
        if (this.bitOffset > 0) {
            var bitsLeft = 8 - this.bitOffset;
            var toRead = numBits < bitsLeft ? numBits : bitsLeft;
            var bitsToNotRead = bitsLeft - toRead;
            var mask = (0xFF >> (8 - toRead)) << bitsToNotRead;
            result = (this.bytes[this.byteOffset] & mask) >> bitsToNotRead;
            numBits -= toRead;
            this.bitOffset += toRead;
            if (this.bitOffset === 8) {
                this.bitOffset = 0;
                this.byteOffset++;
            }
        }
        // Next read whole bytes
        if (numBits > 0) {
            while (numBits >= 8) {
                result = (result << 8) | (this.bytes[this.byteOffset] & 0xFF);
                this.byteOffset++;
                numBits -= 8;
            }
            // Finally read a partial byte
            if (numBits > 0) {
                var bitsToNotRead = 8 - numBits;
                var mask = (0xFF >> bitsToNotRead) << bitsToNotRead;
                result = (result << numBits) | ((this.bytes[this.byteOffset] & mask) >> bitsToNotRead);
                this.bitOffset += numBits;
            }
        }
        return result;
    };
    BitStream.prototype.available = function () {
        return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    };
    return BitStream;
}());
exports.BitStream = BitStream;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftJISTable = {
    0x20: 0x0020,
    0x21: 0x0021,
    0x22: 0x0022,
    0x23: 0x0023,
    0x24: 0x0024,
    0x25: 0x0025,
    0x26: 0x0026,
    0x27: 0x0027,
    0x28: 0x0028,
    0x29: 0x0029,
    0x2A: 0x002A,
    0x2B: 0x002B,
    0x2C: 0x002C,
    0x2D: 0x002D,
    0x2E: 0x002E,
    0x2F: 0x002F,
    0x30: 0x0030,
    0x31: 0x0031,
    0x32: 0x0032,
    0x33: 0x0033,
    0x34: 0x0034,
    0x35: 0x0035,
    0x36: 0x0036,
    0x37: 0x0037,
    0x38: 0x0038,
    0x39: 0x0039,
    0x3A: 0x003A,
    0x3B: 0x003B,
    0x3C: 0x003C,
    0x3D: 0x003D,
    0x3E: 0x003E,
    0x3F: 0x003F,
    0x40: 0x0040,
    0x41: 0x0041,
    0x42: 0x0042,
    0x43: 0x0043,
    0x44: 0x0044,
    0x45: 0x0045,
    0x46: 0x0046,
    0x47: 0x0047,
    0x48: 0x0048,
    0x49: 0x0049,
    0x4A: 0x004A,
    0x4B: 0x004B,
    0x4C: 0x004C,
    0x4D: 0x004D,
    0x4E: 0x004E,
    0x4F: 0x004F,
    0x50: 0x0050,
    0x51: 0x0051,
    0x52: 0x0052,
    0x53: 0x0053,
    0x54: 0x0054,
    0x55: 0x0055,
    0x56: 0x0056,
    0x57: 0x0057,
    0x58: 0x0058,
    0x59: 0x0059,
    0x5A: 0x005A,
    0x5B: 0x005B,
    0x5C: 0x00A5,
    0x5D: 0x005D,
    0x5E: 0x005E,
    0x5F: 0x005F,
    0x60: 0x0060,
    0x61: 0x0061,
    0x62: 0x0062,
    0x63: 0x0063,
    0x64: 0x0064,
    0x65: 0x0065,
    0x66: 0x0066,
    0x67: 0x0067,
    0x68: 0x0068,
    0x69: 0x0069,
    0x6A: 0x006A,
    0x6B: 0x006B,
    0x6C: 0x006C,
    0x6D: 0x006D,
    0x6E: 0x006E,
    0x6F: 0x006F,
    0x70: 0x0070,
    0x71: 0x0071,
    0x72: 0x0072,
    0x73: 0x0073,
    0x74: 0x0074,
    0x75: 0x0075,
    0x76: 0x0076,
    0x77: 0x0077,
    0x78: 0x0078,
    0x79: 0x0079,
    0x7A: 0x007A,
    0x7B: 0x007B,
    0x7C: 0x007C,
    0x7D: 0x007D,
    0x7E: 0x203E,
    0x8140: 0x3000,
    0x8141: 0x3001,
    0x8142: 0x3002,
    0x8143: 0xFF0C,
    0x8144: 0xFF0E,
    0x8145: 0x30FB,
    0x8146: 0xFF1A,
    0x8147: 0xFF1B,
    0x8148: 0xFF1F,
    0x8149: 0xFF01,
    0x814A: 0x309B,
    0x814B: 0x309C,
    0x814C: 0x00B4,
    0x814D: 0xFF40,
    0x814E: 0x00A8,
    0x814F: 0xFF3E,
    0x8150: 0xFFE3,
    0x8151: 0xFF3F,
    0x8152: 0x30FD,
    0x8153: 0x30FE,
    0x8154: 0x309D,
    0x8155: 0x309E,
    0x8156: 0x3003,
    0x8157: 0x4EDD,
    0x8158: 0x3005,
    0x8159: 0x3006,
    0x815A: 0x3007,
    0x815B: 0x30FC,
    0x815C: 0x2015,
    0x815D: 0x2010,
    0x815E: 0xFF0F,
    0x815F: 0x005C,
    0x8160: 0x301C,
    0x8161: 0x2016,
    0x8162: 0xFF5C,
    0x8163: 0x2026,
    0x8164: 0x2025,
    0x8165: 0x2018,
    0x8166: 0x2019,
    0x8167: 0x201C,
    0x8168: 0x201D,
    0x8169: 0xFF08,
    0x816A: 0xFF09,
    0x816B: 0x3014,
    0x816C: 0x3015,
    0x816D: 0xFF3B,
    0x816E: 0xFF3D,
    0x816F: 0xFF5B,
    0x8170: 0xFF5D,
    0x8171: 0x3008,
    0x8172: 0x3009,
    0x8173: 0x300A,
    0x8174: 0x300B,
    0x8175: 0x300C,
    0x8176: 0x300D,
    0x8177: 0x300E,
    0x8178: 0x300F,
    0x8179: 0x3010,
    0x817A: 0x3011,
    0x817B: 0xFF0B,
    0x817C: 0x2212,
    0x817D: 0x00B1,
    0x817E: 0x00D7,
    0x8180: 0x00F7,
    0x8181: 0xFF1D,
    0x8182: 0x2260,
    0x8183: 0xFF1C,
    0x8184: 0xFF1E,
    0x8185: 0x2266,
    0x8186: 0x2267,
    0x8187: 0x221E,
    0x8188: 0x2234,
    0x8189: 0x2642,
    0x818A: 0x2640,
    0x818B: 0x00B0,
    0x818C: 0x2032,
    0x818D: 0x2033,
    0x818E: 0x2103,
    0x818F: 0xFFE5,
    0x8190: 0xFF04,
    0x8191: 0x00A2,
    0x8192: 0x00A3,
    0x8193: 0xFF05,
    0x8194: 0xFF03,
    0x8195: 0xFF06,
    0x8196: 0xFF0A,
    0x8197: 0xFF20,
    0x8198: 0x00A7,
    0x8199: 0x2606,
    0x819A: 0x2605,
    0x819B: 0x25CB,
    0x819C: 0x25CF,
    0x819D: 0x25CE,
    0x819E: 0x25C7,
    0x819F: 0x25C6,
    0x81A0: 0x25A1,
    0x81A1: 0x25A0,
    0x81A2: 0x25B3,
    0x81A3: 0x25B2,
    0x81A4: 0x25BD,
    0x81A5: 0x25BC,
    0x81A6: 0x203B,
    0x81A7: 0x3012,
    0x81A8: 0x2192,
    0x81A9: 0x2190,
    0x81AA: 0x2191,
    0x81AB: 0x2193,
    0x81AC: 0x3013,
    0x81B8: 0x2208,
    0x81B9: 0x220B,
    0x81BA: 0x2286,
    0x81BB: 0x2287,
    0x81BC: 0x2282,
    0x81BD: 0x2283,
    0x81BE: 0x222A,
    0x81BF: 0x2229,
    0x81C8: 0x2227,
    0x81C9: 0x2228,
    0x81CA: 0x00AC,
    0x81CB: 0x21D2,
    0x81CC: 0x21D4,
    0x81CD: 0x2200,
    0x81CE: 0x2203,
    0x81DA: 0x2220,
    0x81DB: 0x22A5,
    0x81DC: 0x2312,
    0x81DD: 0x2202,
    0x81DE: 0x2207,
    0x81DF: 0x2261,
    0x81E0: 0x2252,
    0x81E1: 0x226A,
    0x81E2: 0x226B,
    0x81E3: 0x221A,
    0x81E4: 0x223D,
    0x81E5: 0x221D,
    0x81E6: 0x2235,
    0x81E7: 0x222B,
    0x81E8: 0x222C,
    0x81F0: 0x212B,
    0x81F1: 0x2030,
    0x81F2: 0x266F,
    0x81F3: 0x266D,
    0x81F4: 0x266A,
    0x81F5: 0x2020,
    0x81F6: 0x2021,
    0x81F7: 0x00B6,
    0x81FC: 0x25EF,
    0x824F: 0xFF10,
    0x8250: 0xFF11,
    0x8251: 0xFF12,
    0x8252: 0xFF13,
    0x8253: 0xFF14,
    0x8254: 0xFF15,
    0x8255: 0xFF16,
    0x8256: 0xFF17,
    0x8257: 0xFF18,
    0x8258: 0xFF19,
    0x8260: 0xFF21,
    0x8261: 0xFF22,
    0x8262: 0xFF23,
    0x8263: 0xFF24,
    0x8264: 0xFF25,
    0x8265: 0xFF26,
    0x8266: 0xFF27,
    0x8267: 0xFF28,
    0x8268: 0xFF29,
    0x8269: 0xFF2A,
    0x826A: 0xFF2B,
    0x826B: 0xFF2C,
    0x826C: 0xFF2D,
    0x826D: 0xFF2E,
    0x826E: 0xFF2F,
    0x826F: 0xFF30,
    0x8270: 0xFF31,
    0x8271: 0xFF32,
    0x8272: 0xFF33,
    0x8273: 0xFF34,
    0x8274: 0xFF35,
    0x8275: 0xFF36,
    0x8276: 0xFF37,
    0x8277: 0xFF38,
    0x8278: 0xFF39,
    0x8279: 0xFF3A,
    0x8281: 0xFF41,
    0x8282: 0xFF42,
    0x8283: 0xFF43,
    0x8284: 0xFF44,
    0x8285: 0xFF45,
    0x8286: 0xFF46,
    0x8287: 0xFF47,
    0x8288: 0xFF48,
    0x8289: 0xFF49,
    0x828A: 0xFF4A,
    0x828B: 0xFF4B,
    0x828C: 0xFF4C,
    0x828D: 0xFF4D,
    0x828E: 0xFF4E,
    0x828F: 0xFF4F,
    0x8290: 0xFF50,
    0x8291: 0xFF51,
    0x8292: 0xFF52,
    0x8293: 0xFF53,
    0x8294: 0xFF54,
    0x8295: 0xFF55,
    0x8296: 0xFF56,
    0x8297: 0xFF57,
    0x8298: 0xFF58,
    0x8299: 0xFF59,
    0x829A: 0xFF5A,
    0x829F: 0x3041,
    0x82A0: 0x3042,
    0x82A1: 0x3043,
    0x82A2: 0x3044,
    0x82A3: 0x3045,
    0x82A4: 0x3046,
    0x82A5: 0x3047,
    0x82A6: 0x3048,
    0x82A7: 0x3049,
    0x82A8: 0x304A,
    0x82A9: 0x304B,
    0x82AA: 0x304C,
    0x82AB: 0x304D,
    0x82AC: 0x304E,
    0x82AD: 0x304F,
    0x82AE: 0x3050,
    0x82AF: 0x3051,
    0x82B0: 0x3052,
    0x82B1: 0x3053,
    0x82B2: 0x3054,
    0x82B3: 0x3055,
    0x82B4: 0x3056,
    0x82B5: 0x3057,
    0x82B6: 0x3058,
    0x82B7: 0x3059,
    0x82B8: 0x305A,
    0x82B9: 0x305B,
    0x82BA: 0x305C,
    0x82BB: 0x305D,
    0x82BC: 0x305E,
    0x82BD: 0x305F,
    0x82BE: 0x3060,
    0x82BF: 0x3061,
    0x82C0: 0x3062,
    0x82C1: 0x3063,
    0x82C2: 0x3064,
    0x82C3: 0x3065,
    0x82C4: 0x3066,
    0x82C5: 0x3067,
    0x82C6: 0x3068,
    0x82C7: 0x3069,
    0x82C8: 0x306A,
    0x82C9: 0x306B,
    0x82CA: 0x306C,
    0x82CB: 0x306D,
    0x82CC: 0x306E,
    0x82CD: 0x306F,
    0x82CE: 0x3070,
    0x82CF: 0x3071,
    0x82D0: 0x3072,
    0x82D1: 0x3073,
    0x82D2: 0x3074,
    0x82D3: 0x3075,
    0x82D4: 0x3076,
    0x82D5: 0x3077,
    0x82D6: 0x3078,
    0x82D7: 0x3079,
    0x82D8: 0x307A,
    0x82D9: 0x307B,
    0x82DA: 0x307C,
    0x82DB: 0x307D,
    0x82DC: 0x307E,
    0x82DD: 0x307F,
    0x82DE: 0x3080,
    0x82DF: 0x3081,
    0x82E0: 0x3082,
    0x82E1: 0x3083,
    0x82E2: 0x3084,
    0x82E3: 0x3085,
    0x82E4: 0x3086,
    0x82E5: 0x3087,
    0x82E6: 0x3088,
    0x82E7: 0x3089,
    0x82E8: 0x308A,
    0x82E9: 0x308B,
    0x82EA: 0x308C,
    0x82EB: 0x308D,
    0x82EC: 0x308E,
    0x82ED: 0x308F,
    0x82EE: 0x3090,
    0x82EF: 0x3091,
    0x82F0: 0x3092,
    0x82F1: 0x3093,
    0x8340: 0x30A1,
    0x8341: 0x30A2,
    0x8342: 0x30A3,
    0x8343: 0x30A4,
    0x8344: 0x30A5,
    0x8345: 0x30A6,
    0x8346: 0x30A7,
    0x8347: 0x30A8,
    0x8348: 0x30A9,
    0x8349: 0x30AA,
    0x834A: 0x30AB,
    0x834B: 0x30AC,
    0x834C: 0x30AD,
    0x834D: 0x30AE,
    0x834E: 0x30AF,
    0x834F: 0x30B0,
    0x8350: 0x30B1,
    0x8351: 0x30B2,
    0x8352: 0x30B3,
    0x8353: 0x30B4,
    0x8354: 0x30B5,
    0x8355: 0x30B6,
    0x8356: 0x30B7,
    0x8357: 0x30B8,
    0x8358: 0x30B9,
    0x8359: 0x30BA,
    0x835A: 0x30BB,
    0x835B: 0x30BC,
    0x835C: 0x30BD,
    0x835D: 0x30BE,
    0x835E: 0x30BF,
    0x835F: 0x30C0,
    0x8360: 0x30C1,
    0x8361: 0x30C2,
    0x8362: 0x30C3,
    0x8363: 0x30C4,
    0x8364: 0x30C5,
    0x8365: 0x30C6,
    0x8366: 0x30C7,
    0x8367: 0x30C8,
    0x8368: 0x30C9,
    0x8369: 0x30CA,
    0x836A: 0x30CB,
    0x836B: 0x30CC,
    0x836C: 0x30CD,
    0x836D: 0x30CE,
    0x836E: 0x30CF,
    0x836F: 0x30D0,
    0x8370: 0x30D1,
    0x8371: 0x30D2,
    0x8372: 0x30D3,
    0x8373: 0x30D4,
    0x8374: 0x30D5,
    0x8375: 0x30D6,
    0x8376: 0x30D7,
    0x8377: 0x30D8,
    0x8378: 0x30D9,
    0x8379: 0x30DA,
    0x837A: 0x30DB,
    0x837B: 0x30DC,
    0x837C: 0x30DD,
    0x837D: 0x30DE,
    0x837E: 0x30DF,
    0x8380: 0x30E0,
    0x8381: 0x30E1,
    0x8382: 0x30E2,
    0x8383: 0x30E3,
    0x8384: 0x30E4,
    0x8385: 0x30E5,
    0x8386: 0x30E6,
    0x8387: 0x30E7,
    0x8388: 0x30E8,
    0x8389: 0x30E9,
    0x838A: 0x30EA,
    0x838B: 0x30EB,
    0x838C: 0x30EC,
    0x838D: 0x30ED,
    0x838E: 0x30EE,
    0x838F: 0x30EF,
    0x8390: 0x30F0,
    0x8391: 0x30F1,
    0x8392: 0x30F2,
    0x8393: 0x30F3,
    0x8394: 0x30F4,
    0x8395: 0x30F5,
    0x8396: 0x30F6,
    0x839F: 0x0391,
    0x83A0: 0x0392,
    0x83A1: 0x0393,
    0x83A2: 0x0394,
    0x83A3: 0x0395,
    0x83A4: 0x0396,
    0x83A5: 0x0397,
    0x83A6: 0x0398,
    0x83A7: 0x0399,
    0x83A8: 0x039A,
    0x83A9: 0x039B,
    0x83AA: 0x039C,
    0x83AB: 0x039D,
    0x83AC: 0x039E,
    0x83AD: 0x039F,
    0x83AE: 0x03A0,
    0x83AF: 0x03A1,
    0x83B0: 0x03A3,
    0x83B1: 0x03A4,
    0x83B2: 0x03A5,
    0x83B3: 0x03A6,
    0x83B4: 0x03A7,
    0x83B5: 0x03A8,
    0x83B6: 0x03A9,
    0x83BF: 0x03B1,
    0x83C0: 0x03B2,
    0x83C1: 0x03B3,
    0x83C2: 0x03B4,
    0x83C3: 0x03B5,
    0x83C4: 0x03B6,
    0x83C5: 0x03B7,
    0x83C6: 0x03B8,
    0x83C7: 0x03B9,
    0x83C8: 0x03BA,
    0x83C9: 0x03BB,
    0x83CA: 0x03BC,
    0x83CB: 0x03BD,
    0x83CC: 0x03BE,
    0x83CD: 0x03BF,
    0x83CE: 0x03C0,
    0x83CF: 0x03C1,
    0x83D0: 0x03C3,
    0x83D1: 0x03C4,
    0x83D2: 0x03C5,
    0x83D3: 0x03C6,
    0x83D4: 0x03C7,
    0x83D5: 0x03C8,
    0x83D6: 0x03C9,
    0x8440: 0x0410,
    0x8441: 0x0411,
    0x8442: 0x0412,
    0x8443: 0x0413,
    0x8444: 0x0414,
    0x8445: 0x0415,
    0x8446: 0x0401,
    0x8447: 0x0416,
    0x8448: 0x0417,
    0x8449: 0x0418,
    0x844A: 0x0419,
    0x844B: 0x041A,
    0x844C: 0x041B,
    0x844D: 0x041C,
    0x844E: 0x041D,
    0x844F: 0x041E,
    0x8450: 0x041F,
    0x8451: 0x0420,
    0x8452: 0x0421,
    0x8453: 0x0422,
    0x8454: 0x0423,
    0x8455: 0x0424,
    0x8456: 0x0425,
    0x8457: 0x0426,
    0x8458: 0x0427,
    0x8459: 0x0428,
    0x845A: 0x0429,
    0x845B: 0x042A,
    0x845C: 0x042B,
    0x845D: 0x042C,
    0x845E: 0x042D,
    0x845F: 0x042E,
    0x8460: 0x042F,
    0x8470: 0x0430,
    0x8471: 0x0431,
    0x8472: 0x0432,
    0x8473: 0x0433,
    0x8474: 0x0434,
    0x8475: 0x0435,
    0x8476: 0x0451,
    0x8477: 0x0436,
    0x8478: 0x0437,
    0x8479: 0x0438,
    0x847A: 0x0439,
    0x847B: 0x043A,
    0x847C: 0x043B,
    0x847D: 0x043C,
    0x847E: 0x043D,
    0x8480: 0x043E,
    0x8481: 0x043F,
    0x8482: 0x0440,
    0x8483: 0x0441,
    0x8484: 0x0442,
    0x8485: 0x0443,
    0x8486: 0x0444,
    0x8487: 0x0445,
    0x8488: 0x0446,
    0x8489: 0x0447,
    0x848A: 0x0448,
    0x848B: 0x0449,
    0x848C: 0x044A,
    0x848D: 0x044B,
    0x848E: 0x044C,
    0x848F: 0x044D,
    0x8490: 0x044E,
    0x8491: 0x044F,
    0x849F: 0x2500,
    0x84A0: 0x2502,
    0x84A1: 0x250C,
    0x84A2: 0x2510,
    0x84A3: 0x2518,
    0x84A4: 0x2514,
    0x84A5: 0x251C,
    0x84A6: 0x252C,
    0x84A7: 0x2524,
    0x84A8: 0x2534,
    0x84A9: 0x253C,
    0x84AA: 0x2501,
    0x84AB: 0x2503,
    0x84AC: 0x250F,
    0x84AD: 0x2513,
    0x84AE: 0x251B,
    0x84AF: 0x2517,
    0x84B0: 0x2523,
    0x84B1: 0x2533,
    0x84B2: 0x252B,
    0x84B3: 0x253B,
    0x84B4: 0x254B,
    0x84B5: 0x2520,
    0x84B6: 0x252F,
    0x84B7: 0x2528,
    0x84B8: 0x2537,
    0x84B9: 0x253F,
    0x84BA: 0x251D,
    0x84BB: 0x2530,
    0x84BC: 0x2525,
    0x84BD: 0x2538,
    0x84BE: 0x2542,
    0x889F: 0x4E9C,
    0x88A0: 0x5516,
    0x88A1: 0x5A03,
    0x88A2: 0x963F,
    0x88A3: 0x54C0,
    0x88A4: 0x611B,
    0x88A5: 0x6328,
    0x88A6: 0x59F6,
    0x88A7: 0x9022,
    0x88A8: 0x8475,
    0x88A9: 0x831C,
    0x88AA: 0x7A50,
    0x88AB: 0x60AA,
    0x88AC: 0x63E1,
    0x88AD: 0x6E25,
    0x88AE: 0x65ED,
    0x88AF: 0x8466,
    0x88B0: 0x82A6,
    0x88B1: 0x9BF5,
    0x88B2: 0x6893,
    0x88B3: 0x5727,
    0x88B4: 0x65A1,
    0x88B5: 0x6271,
    0x88B6: 0x5B9B,
    0x88B7: 0x59D0,
    0x88B8: 0x867B,
    0x88B9: 0x98F4,
    0x88BA: 0x7D62,
    0x88BB: 0x7DBE,
    0x88BC: 0x9B8E,
    0x88BD: 0x6216,
    0x88BE: 0x7C9F,
    0x88BF: 0x88B7,
    0x88C0: 0x5B89,
    0x88C1: 0x5EB5,
    0x88C2: 0x6309,
    0x88C3: 0x6697,
    0x88C4: 0x6848,
    0x88C5: 0x95C7,
    0x88C6: 0x978D,
    0x88C7: 0x674F,
    0x88C8: 0x4EE5,
    0x88C9: 0x4F0A,
    0x88CA: 0x4F4D,
    0x88CB: 0x4F9D,
    0x88CC: 0x5049,
    0x88CD: 0x56F2,
    0x88CE: 0x5937,
    0x88CF: 0x59D4,
    0x88D0: 0x5A01,
    0x88D1: 0x5C09,
    0x88D2: 0x60DF,
    0x88D3: 0x610F,
    0x88D4: 0x6170,
    0x88D5: 0x6613,
    0x88D6: 0x6905,
    0x88D7: 0x70BA,
    0x88D8: 0x754F,
    0x88D9: 0x7570,
    0x88DA: 0x79FB,
    0x88DB: 0x7DAD,
    0x88DC: 0x7DEF,
    0x88DD: 0x80C3,
    0x88DE: 0x840E,
    0x88DF: 0x8863,
    0x88E0: 0x8B02,
    0x88E1: 0x9055,
    0x88E2: 0x907A,
    0x88E3: 0x533B,
    0x88E4: 0x4E95,
    0x88E5: 0x4EA5,
    0x88E6: 0x57DF,
    0x88E7: 0x80B2,
    0x88E8: 0x90C1,
    0x88E9: 0x78EF,
    0x88EA: 0x4E00,
    0x88EB: 0x58F1,
    0x88EC: 0x6EA2,
    0x88ED: 0x9038,
    0x88EE: 0x7A32,
    0x88EF: 0x8328,
    0x88F0: 0x828B,
    0x88F1: 0x9C2F,
    0x88F2: 0x5141,
    0x88F3: 0x5370,
    0x88F4: 0x54BD,
    0x88F5: 0x54E1,
    0x88F6: 0x56E0,
    0x88F7: 0x59FB,
    0x88F8: 0x5F15,
    0x88F9: 0x98F2,
    0x88FA: 0x6DEB,
    0x88FB: 0x80E4,
    0x88FC: 0x852D,
    0x8940: 0x9662,
    0x8941: 0x9670,
    0x8942: 0x96A0,
    0x8943: 0x97FB,
    0x8944: 0x540B,
    0x8945: 0x53F3,
    0x8946: 0x5B87,
    0x8947: 0x70CF,
    0x8948: 0x7FBD,
    0x8949: 0x8FC2,
    0x894A: 0x96E8,
    0x894B: 0x536F,
    0x894C: 0x9D5C,
    0x894D: 0x7ABA,
    0x894E: 0x4E11,
    0x894F: 0x7893,
    0x8950: 0x81FC,
    0x8951: 0x6E26,
    0x8952: 0x5618,
    0x8953: 0x5504,
    0x8954: 0x6B1D,
    0x8955: 0x851A,
    0x8956: 0x9C3B,
    0x8957: 0x59E5,
    0x8958: 0x53A9,
    0x8959: 0x6D66,
    0x895A: 0x74DC,
    0x895B: 0x958F,
    0x895C: 0x5642,
    0x895D: 0x4E91,
    0x895E: 0x904B,
    0x895F: 0x96F2,
    0x8960: 0x834F,
    0x8961: 0x990C,
    0x8962: 0x53E1,
    0x8963: 0x55B6,
    0x8964: 0x5B30,
    0x8965: 0x5F71,
    0x8966: 0x6620,
    0x8967: 0x66F3,
    0x8968: 0x6804,
    0x8969: 0x6C38,
    0x896A: 0x6CF3,
    0x896B: 0x6D29,
    0x896C: 0x745B,
    0x896D: 0x76C8,
    0x896E: 0x7A4E,
    0x896F: 0x9834,
    0x8970: 0x82F1,
    0x8971: 0x885B,
    0x8972: 0x8A60,
    0x8973: 0x92ED,
    0x8974: 0x6DB2,
    0x8975: 0x75AB,
    0x8976: 0x76CA,
    0x8977: 0x99C5,
    0x8978: 0x60A6,
    0x8979: 0x8B01,
    0x897A: 0x8D8A,
    0x897B: 0x95B2,
    0x897C: 0x698E,
    0x897D: 0x53AD,
    0x897E: 0x5186,
    0x8980: 0x5712,
    0x8981: 0x5830,
    0x8982: 0x5944,
    0x8983: 0x5BB4,
    0x8984: 0x5EF6,
    0x8985: 0x6028,
    0x8986: 0x63A9,
    0x8987: 0x63F4,
    0x8988: 0x6CBF,
    0x8989: 0x6F14,
    0x898A: 0x708E,
    0x898B: 0x7114,
    0x898C: 0x7159,
    0x898D: 0x71D5,
    0x898E: 0x733F,
    0x898F: 0x7E01,
    0x8990: 0x8276,
    0x8991: 0x82D1,
    0x8992: 0x8597,
    0x8993: 0x9060,
    0x8994: 0x925B,
    0x8995: 0x9D1B,
    0x8996: 0x5869,
    0x8997: 0x65BC,
    0x8998: 0x6C5A,
    0x8999: 0x7525,
    0x899A: 0x51F9,
    0x899B: 0x592E,
    0x899C: 0x5965,
    0x899D: 0x5F80,
    0x899E: 0x5FDC,
    0x899F: 0x62BC,
    0x89A0: 0x65FA,
    0x89A1: 0x6A2A,
    0x89A2: 0x6B27,
    0x89A3: 0x6BB4,
    0x89A4: 0x738B,
    0x89A5: 0x7FC1,
    0x89A6: 0x8956,
    0x89A7: 0x9D2C,
    0x89A8: 0x9D0E,
    0x89A9: 0x9EC4,
    0x89AA: 0x5CA1,
    0x89AB: 0x6C96,
    0x89AC: 0x837B,
    0x89AD: 0x5104,
    0x89AE: 0x5C4B,
    0x89AF: 0x61B6,
    0x89B0: 0x81C6,
    0x89B1: 0x6876,
    0x89B2: 0x7261,
    0x89B3: 0x4E59,
    0x89B4: 0x4FFA,
    0x89B5: 0x5378,
    0x89B6: 0x6069,
    0x89B7: 0x6E29,
    0x89B8: 0x7A4F,
    0x89B9: 0x97F3,
    0x89BA: 0x4E0B,
    0x89BB: 0x5316,
    0x89BC: 0x4EEE,
    0x89BD: 0x4F55,
    0x89BE: 0x4F3D,
    0x89BF: 0x4FA1,
    0x89C0: 0x4F73,
    0x89C1: 0x52A0,
    0x89C2: 0x53EF,
    0x89C3: 0x5609,
    0x89C4: 0x590F,
    0x89C5: 0x5AC1,
    0x89C6: 0x5BB6,
    0x89C7: 0x5BE1,
    0x89C8: 0x79D1,
    0x89C9: 0x6687,
    0x89CA: 0x679C,
    0x89CB: 0x67B6,
    0x89CC: 0x6B4C,
    0x89CD: 0x6CB3,
    0x89CE: 0x706B,
    0x89CF: 0x73C2,
    0x89D0: 0x798D,
    0x89D1: 0x79BE,
    0x89D2: 0x7A3C,
    0x89D3: 0x7B87,
    0x89D4: 0x82B1,
    0x89D5: 0x82DB,
    0x89D6: 0x8304,
    0x89D7: 0x8377,
    0x89D8: 0x83EF,
    0x89D9: 0x83D3,
    0x89DA: 0x8766,
    0x89DB: 0x8AB2,
    0x89DC: 0x5629,
    0x89DD: 0x8CA8,
    0x89DE: 0x8FE6,
    0x89DF: 0x904E,
    0x89E0: 0x971E,
    0x89E1: 0x868A,
    0x89E2: 0x4FC4,
    0x89E3: 0x5CE8,
    0x89E4: 0x6211,
    0x89E5: 0x7259,
    0x89E6: 0x753B,
    0x89E7: 0x81E5,
    0x89E8: 0x82BD,
    0x89E9: 0x86FE,
    0x89EA: 0x8CC0,
    0x89EB: 0x96C5,
    0x89EC: 0x9913,
    0x89ED: 0x99D5,
    0x89EE: 0x4ECB,
    0x89EF: 0x4F1A,
    0x89F0: 0x89E3,
    0x89F1: 0x56DE,
    0x89F2: 0x584A,
    0x89F3: 0x58CA,
    0x89F4: 0x5EFB,
    0x89F5: 0x5FEB,
    0x89F6: 0x602A,
    0x89F7: 0x6094,
    0x89F8: 0x6062,
    0x89F9: 0x61D0,
    0x89FA: 0x6212,
    0x89FB: 0x62D0,
    0x89FC: 0x6539,
    0x8A40: 0x9B41,
    0x8A41: 0x6666,
    0x8A42: 0x68B0,
    0x8A43: 0x6D77,
    0x8A44: 0x7070,
    0x8A45: 0x754C,
    0x8A46: 0x7686,
    0x8A47: 0x7D75,
    0x8A48: 0x82A5,
    0x8A49: 0x87F9,
    0x8A4A: 0x958B,
    0x8A4B: 0x968E,
    0x8A4C: 0x8C9D,
    0x8A4D: 0x51F1,
    0x8A4E: 0x52BE,
    0x8A4F: 0x5916,
    0x8A50: 0x54B3,
    0x8A51: 0x5BB3,
    0x8A52: 0x5D16,
    0x8A53: 0x6168,
    0x8A54: 0x6982,
    0x8A55: 0x6DAF,
    0x8A56: 0x788D,
    0x8A57: 0x84CB,
    0x8A58: 0x8857,
    0x8A59: 0x8A72,
    0x8A5A: 0x93A7,
    0x8A5B: 0x9AB8,
    0x8A5C: 0x6D6C,
    0x8A5D: 0x99A8,
    0x8A5E: 0x86D9,
    0x8A5F: 0x57A3,
    0x8A60: 0x67FF,
    0x8A61: 0x86CE,
    0x8A62: 0x920E,
    0x8A63: 0x5283,
    0x8A64: 0x5687,
    0x8A65: 0x5404,
    0x8A66: 0x5ED3,
    0x8A67: 0x62E1,
    0x8A68: 0x64B9,
    0x8A69: 0x683C,
    0x8A6A: 0x6838,
    0x8A6B: 0x6BBB,
    0x8A6C: 0x7372,
    0x8A6D: 0x78BA,
    0x8A6E: 0x7A6B,
    0x8A6F: 0x899A,
    0x8A70: 0x89D2,
    0x8A71: 0x8D6B,
    0x8A72: 0x8F03,
    0x8A73: 0x90ED,
    0x8A74: 0x95A3,
    0x8A75: 0x9694,
    0x8A76: 0x9769,
    0x8A77: 0x5B66,
    0x8A78: 0x5CB3,
    0x8A79: 0x697D,
    0x8A7A: 0x984D,
    0x8A7B: 0x984E,
    0x8A7C: 0x639B,
    0x8A7D: 0x7B20,
    0x8A7E: 0x6A2B,
    0x8A80: 0x6A7F,
    0x8A81: 0x68B6,
    0x8A82: 0x9C0D,
    0x8A83: 0x6F5F,
    0x8A84: 0x5272,
    0x8A85: 0x559D,
    0x8A86: 0x6070,
    0x8A87: 0x62EC,
    0x8A88: 0x6D3B,
    0x8A89: 0x6E07,
    0x8A8A: 0x6ED1,
    0x8A8B: 0x845B,
    0x8A8C: 0x8910,
    0x8A8D: 0x8F44,
    0x8A8E: 0x4E14,
    0x8A8F: 0x9C39,
    0x8A90: 0x53F6,
    0x8A91: 0x691B,
    0x8A92: 0x6A3A,
    0x8A93: 0x9784,
    0x8A94: 0x682A,
    0x8A95: 0x515C,
    0x8A96: 0x7AC3,
    0x8A97: 0x84B2,
    0x8A98: 0x91DC,
    0x8A99: 0x938C,
    0x8A9A: 0x565B,
    0x8A9B: 0x9D28,
    0x8A9C: 0x6822,
    0x8A9D: 0x8305,
    0x8A9E: 0x8431,
    0x8A9F: 0x7CA5,
    0x8AA0: 0x5208,
    0x8AA1: 0x82C5,
    0x8AA2: 0x74E6,
    0x8AA3: 0x4E7E,
    0x8AA4: 0x4F83,
    0x8AA5: 0x51A0,
    0x8AA6: 0x5BD2,
    0x8AA7: 0x520A,
    0x8AA8: 0x52D8,
    0x8AA9: 0x52E7,
    0x8AAA: 0x5DFB,
    0x8AAB: 0x559A,
    0x8AAC: 0x582A,
    0x8AAD: 0x59E6,
    0x8AAE: 0x5B8C,
    0x8AAF: 0x5B98,
    0x8AB0: 0x5BDB,
    0x8AB1: 0x5E72,
    0x8AB2: 0x5E79,
    0x8AB3: 0x60A3,
    0x8AB4: 0x611F,
    0x8AB5: 0x6163,
    0x8AB6: 0x61BE,
    0x8AB7: 0x63DB,
    0x8AB8: 0x6562,
    0x8AB9: 0x67D1,
    0x8ABA: 0x6853,
    0x8ABB: 0x68FA,
    0x8ABC: 0x6B3E,
    0x8ABD: 0x6B53,
    0x8ABE: 0x6C57,
    0x8ABF: 0x6F22,
    0x8AC0: 0x6F97,
    0x8AC1: 0x6F45,
    0x8AC2: 0x74B0,
    0x8AC3: 0x7518,
    0x8AC4: 0x76E3,
    0x8AC5: 0x770B,
    0x8AC6: 0x7AFF,
    0x8AC7: 0x7BA1,
    0x8AC8: 0x7C21,
    0x8AC9: 0x7DE9,
    0x8ACA: 0x7F36,
    0x8ACB: 0x7FF0,
    0x8ACC: 0x809D,
    0x8ACD: 0x8266,
    0x8ACE: 0x839E,
    0x8ACF: 0x89B3,
    0x8AD0: 0x8ACC,
    0x8AD1: 0x8CAB,
    0x8AD2: 0x9084,
    0x8AD3: 0x9451,
    0x8AD4: 0x9593,
    0x8AD5: 0x9591,
    0x8AD6: 0x95A2,
    0x8AD7: 0x9665,
    0x8AD8: 0x97D3,
    0x8AD9: 0x9928,
    0x8ADA: 0x8218,
    0x8ADB: 0x4E38,
    0x8ADC: 0x542B,
    0x8ADD: 0x5CB8,
    0x8ADE: 0x5DCC,
    0x8ADF: 0x73A9,
    0x8AE0: 0x764C,
    0x8AE1: 0x773C,
    0x8AE2: 0x5CA9,
    0x8AE3: 0x7FEB,
    0x8AE4: 0x8D0B,
    0x8AE5: 0x96C1,
    0x8AE6: 0x9811,
    0x8AE7: 0x9854,
    0x8AE8: 0x9858,
    0x8AE9: 0x4F01,
    0x8AEA: 0x4F0E,
    0x8AEB: 0x5371,
    0x8AEC: 0x559C,
    0x8AED: 0x5668,
    0x8AEE: 0x57FA,
    0x8AEF: 0x5947,
    0x8AF0: 0x5B09,
    0x8AF1: 0x5BC4,
    0x8AF2: 0x5C90,
    0x8AF3: 0x5E0C,
    0x8AF4: 0x5E7E,
    0x8AF5: 0x5FCC,
    0x8AF6: 0x63EE,
    0x8AF7: 0x673A,
    0x8AF8: 0x65D7,
    0x8AF9: 0x65E2,
    0x8AFA: 0x671F,
    0x8AFB: 0x68CB,
    0x8AFC: 0x68C4,
    0x8B40: 0x6A5F,
    0x8B41: 0x5E30,
    0x8B42: 0x6BC5,
    0x8B43: 0x6C17,
    0x8B44: 0x6C7D,
    0x8B45: 0x757F,
    0x8B46: 0x7948,
    0x8B47: 0x5B63,
    0x8B48: 0x7A00,
    0x8B49: 0x7D00,
    0x8B4A: 0x5FBD,
    0x8B4B: 0x898F,
    0x8B4C: 0x8A18,
    0x8B4D: 0x8CB4,
    0x8B4E: 0x8D77,
    0x8B4F: 0x8ECC,
    0x8B50: 0x8F1D,
    0x8B51: 0x98E2,
    0x8B52: 0x9A0E,
    0x8B53: 0x9B3C,
    0x8B54: 0x4E80,
    0x8B55: 0x507D,
    0x8B56: 0x5100,
    0x8B57: 0x5993,
    0x8B58: 0x5B9C,
    0x8B59: 0x622F,
    0x8B5A: 0x6280,
    0x8B5B: 0x64EC,
    0x8B5C: 0x6B3A,
    0x8B5D: 0x72A0,
    0x8B5E: 0x7591,
    0x8B5F: 0x7947,
    0x8B60: 0x7FA9,
    0x8B61: 0x87FB,
    0x8B62: 0x8ABC,
    0x8B63: 0x8B70,
    0x8B64: 0x63AC,
    0x8B65: 0x83CA,
    0x8B66: 0x97A0,
    0x8B67: 0x5409,
    0x8B68: 0x5403,
    0x8B69: 0x55AB,
    0x8B6A: 0x6854,
    0x8B6B: 0x6A58,
    0x8B6C: 0x8A70,
    0x8B6D: 0x7827,
    0x8B6E: 0x6775,
    0x8B6F: 0x9ECD,
    0x8B70: 0x5374,
    0x8B71: 0x5BA2,
    0x8B72: 0x811A,
    0x8B73: 0x8650,
    0x8B74: 0x9006,
    0x8B75: 0x4E18,
    0x8B76: 0x4E45,
    0x8B77: 0x4EC7,
    0x8B78: 0x4F11,
    0x8B79: 0x53CA,
    0x8B7A: 0x5438,
    0x8B7B: 0x5BAE,
    0x8B7C: 0x5F13,
    0x8B7D: 0x6025,
    0x8B7E: 0x6551,
    0x8B80: 0x673D,
    0x8B81: 0x6C42,
    0x8B82: 0x6C72,
    0x8B83: 0x6CE3,
    0x8B84: 0x7078,
    0x8B85: 0x7403,
    0x8B86: 0x7A76,
    0x8B87: 0x7AAE,
    0x8B88: 0x7B08,
    0x8B89: 0x7D1A,
    0x8B8A: 0x7CFE,
    0x8B8B: 0x7D66,
    0x8B8C: 0x65E7,
    0x8B8D: 0x725B,
    0x8B8E: 0x53BB,
    0x8B8F: 0x5C45,
    0x8B90: 0x5DE8,
    0x8B91: 0x62D2,
    0x8B92: 0x62E0,
    0x8B93: 0x6319,
    0x8B94: 0x6E20,
    0x8B95: 0x865A,
    0x8B96: 0x8A31,
    0x8B97: 0x8DDD,
    0x8B98: 0x92F8,
    0x8B99: 0x6F01,
    0x8B9A: 0x79A6,
    0x8B9B: 0x9B5A,
    0x8B9C: 0x4EA8,
    0x8B9D: 0x4EAB,
    0x8B9E: 0x4EAC,
    0x8B9F: 0x4F9B,
    0x8BA0: 0x4FA0,
    0x8BA1: 0x50D1,
    0x8BA2: 0x5147,
    0x8BA3: 0x7AF6,
    0x8BA4: 0x5171,
    0x8BA5: 0x51F6,
    0x8BA6: 0x5354,
    0x8BA7: 0x5321,
    0x8BA8: 0x537F,
    0x8BA9: 0x53EB,
    0x8BAA: 0x55AC,
    0x8BAB: 0x5883,
    0x8BAC: 0x5CE1,
    0x8BAD: 0x5F37,
    0x8BAE: 0x5F4A,
    0x8BAF: 0x602F,
    0x8BB0: 0x6050,
    0x8BB1: 0x606D,
    0x8BB2: 0x631F,
    0x8BB3: 0x6559,
    0x8BB4: 0x6A4B,
    0x8BB5: 0x6CC1,
    0x8BB6: 0x72C2,
    0x8BB7: 0x72ED,
    0x8BB8: 0x77EF,
    0x8BB9: 0x80F8,
    0x8BBA: 0x8105,
    0x8BBB: 0x8208,
    0x8BBC: 0x854E,
    0x8BBD: 0x90F7,
    0x8BBE: 0x93E1,
    0x8BBF: 0x97FF,
    0x8BC0: 0x9957,
    0x8BC1: 0x9A5A,
    0x8BC2: 0x4EF0,
    0x8BC3: 0x51DD,
    0x8BC4: 0x5C2D,
    0x8BC5: 0x6681,
    0x8BC6: 0x696D,
    0x8BC7: 0x5C40,
    0x8BC8: 0x66F2,
    0x8BC9: 0x6975,
    0x8BCA: 0x7389,
    0x8BCB: 0x6850,
    0x8BCC: 0x7C81,
    0x8BCD: 0x50C5,
    0x8BCE: 0x52E4,
    0x8BCF: 0x5747,
    0x8BD0: 0x5DFE,
    0x8BD1: 0x9326,
    0x8BD2: 0x65A4,
    0x8BD3: 0x6B23,
    0x8BD4: 0x6B3D,
    0x8BD5: 0x7434,
    0x8BD6: 0x7981,
    0x8BD7: 0x79BD,
    0x8BD8: 0x7B4B,
    0x8BD9: 0x7DCA,
    0x8BDA: 0x82B9,
    0x8BDB: 0x83CC,
    0x8BDC: 0x887F,
    0x8BDD: 0x895F,
    0x8BDE: 0x8B39,
    0x8BDF: 0x8FD1,
    0x8BE0: 0x91D1,
    0x8BE1: 0x541F,
    0x8BE2: 0x9280,
    0x8BE3: 0x4E5D,
    0x8BE4: 0x5036,
    0x8BE5: 0x53E5,
    0x8BE6: 0x533A,
    0x8BE7: 0x72D7,
    0x8BE8: 0x7396,
    0x8BE9: 0x77E9,
    0x8BEA: 0x82E6,
    0x8BEB: 0x8EAF,
    0x8BEC: 0x99C6,
    0x8BED: 0x99C8,
    0x8BEE: 0x99D2,
    0x8BEF: 0x5177,
    0x8BF0: 0x611A,
    0x8BF1: 0x865E,
    0x8BF2: 0x55B0,
    0x8BF3: 0x7A7A,
    0x8BF4: 0x5076,
    0x8BF5: 0x5BD3,
    0x8BF6: 0x9047,
    0x8BF7: 0x9685,
    0x8BF8: 0x4E32,
    0x8BF9: 0x6ADB,
    0x8BFA: 0x91E7,
    0x8BFB: 0x5C51,
    0x8BFC: 0x5C48,
    0x8C40: 0x6398,
    0x8C41: 0x7A9F,
    0x8C42: 0x6C93,
    0x8C43: 0x9774,
    0x8C44: 0x8F61,
    0x8C45: 0x7AAA,
    0x8C46: 0x718A,
    0x8C47: 0x9688,
    0x8C48: 0x7C82,
    0x8C49: 0x6817,
    0x8C4A: 0x7E70,
    0x8C4B: 0x6851,
    0x8C4C: 0x936C,
    0x8C4D: 0x52F2,
    0x8C4E: 0x541B,
    0x8C4F: 0x85AB,
    0x8C50: 0x8A13,
    0x8C51: 0x7FA4,
    0x8C52: 0x8ECD,
    0x8C53: 0x90E1,
    0x8C54: 0x5366,
    0x8C55: 0x8888,
    0x8C56: 0x7941,
    0x8C57: 0x4FC2,
    0x8C58: 0x50BE,
    0x8C59: 0x5211,
    0x8C5A: 0x5144,
    0x8C5B: 0x5553,
    0x8C5C: 0x572D,
    0x8C5D: 0x73EA,
    0x8C5E: 0x578B,
    0x8C5F: 0x5951,
    0x8C60: 0x5F62,
    0x8C61: 0x5F84,
    0x8C62: 0x6075,
    0x8C63: 0x6176,
    0x8C64: 0x6167,
    0x8C65: 0x61A9,
    0x8C66: 0x63B2,
    0x8C67: 0x643A,
    0x8C68: 0x656C,
    0x8C69: 0x666F,
    0x8C6A: 0x6842,
    0x8C6B: 0x6E13,
    0x8C6C: 0x7566,
    0x8C6D: 0x7A3D,
    0x8C6E: 0x7CFB,
    0x8C6F: 0x7D4C,
    0x8C70: 0x7D99,
    0x8C71: 0x7E4B,
    0x8C72: 0x7F6B,
    0x8C73: 0x830E,
    0x8C74: 0x834A,
    0x8C75: 0x86CD,
    0x8C76: 0x8A08,
    0x8C77: 0x8A63,
    0x8C78: 0x8B66,
    0x8C79: 0x8EFD,
    0x8C7A: 0x981A,
    0x8C7B: 0x9D8F,
    0x8C7C: 0x82B8,
    0x8C7D: 0x8FCE,
    0x8C7E: 0x9BE8,
    0x8C80: 0x5287,
    0x8C81: 0x621F,
    0x8C82: 0x6483,
    0x8C83: 0x6FC0,
    0x8C84: 0x9699,
    0x8C85: 0x6841,
    0x8C86: 0x5091,
    0x8C87: 0x6B20,
    0x8C88: 0x6C7A,
    0x8C89: 0x6F54,
    0x8C8A: 0x7A74,
    0x8C8B: 0x7D50,
    0x8C8C: 0x8840,
    0x8C8D: 0x8A23,
    0x8C8E: 0x6708,
    0x8C8F: 0x4EF6,
    0x8C90: 0x5039,
    0x8C91: 0x5026,
    0x8C92: 0x5065,
    0x8C93: 0x517C,
    0x8C94: 0x5238,
    0x8C95: 0x5263,
    0x8C96: 0x55A7,
    0x8C97: 0x570F,
    0x8C98: 0x5805,
    0x8C99: 0x5ACC,
    0x8C9A: 0x5EFA,
    0x8C9B: 0x61B2,
    0x8C9C: 0x61F8,
    0x8C9D: 0x62F3,
    0x8C9E: 0x6372,
    0x8C9F: 0x691C,
    0x8CA0: 0x6A29,
    0x8CA1: 0x727D,
    0x8CA2: 0x72AC,
    0x8CA3: 0x732E,
    0x8CA4: 0x7814,
    0x8CA5: 0x786F,
    0x8CA6: 0x7D79,
    0x8CA7: 0x770C,
    0x8CA8: 0x80A9,
    0x8CA9: 0x898B,
    0x8CAA: 0x8B19,
    0x8CAB: 0x8CE2,
    0x8CAC: 0x8ED2,
    0x8CAD: 0x9063,
    0x8CAE: 0x9375,
    0x8CAF: 0x967A,
    0x8CB0: 0x9855,
    0x8CB1: 0x9A13,
    0x8CB2: 0x9E78,
    0x8CB3: 0x5143,
    0x8CB4: 0x539F,
    0x8CB5: 0x53B3,
    0x8CB6: 0x5E7B,
    0x8CB7: 0x5F26,
    0x8CB8: 0x6E1B,
    0x8CB9: 0x6E90,
    0x8CBA: 0x7384,
    0x8CBB: 0x73FE,
    0x8CBC: 0x7D43,
    0x8CBD: 0x8237,
    0x8CBE: 0x8A00,
    0x8CBF: 0x8AFA,
    0x8CC0: 0x9650,
    0x8CC1: 0x4E4E,
    0x8CC2: 0x500B,
    0x8CC3: 0x53E4,
    0x8CC4: 0x547C,
    0x8CC5: 0x56FA,
    0x8CC6: 0x59D1,
    0x8CC7: 0x5B64,
    0x8CC8: 0x5DF1,
    0x8CC9: 0x5EAB,
    0x8CCA: 0x5F27,
    0x8CCB: 0x6238,
    0x8CCC: 0x6545,
    0x8CCD: 0x67AF,
    0x8CCE: 0x6E56,
    0x8CCF: 0x72D0,
    0x8CD0: 0x7CCA,
    0x8CD1: 0x88B4,
    0x8CD2: 0x80A1,
    0x8CD3: 0x80E1,
    0x8CD4: 0x83F0,
    0x8CD5: 0x864E,
    0x8CD6: 0x8A87,
    0x8CD7: 0x8DE8,
    0x8CD8: 0x9237,
    0x8CD9: 0x96C7,
    0x8CDA: 0x9867,
    0x8CDB: 0x9F13,
    0x8CDC: 0x4E94,
    0x8CDD: 0x4E92,
    0x8CDE: 0x4F0D,
    0x8CDF: 0x5348,
    0x8CE0: 0x5449,
    0x8CE1: 0x543E,
    0x8CE2: 0x5A2F,
    0x8CE3: 0x5F8C,
    0x8CE4: 0x5FA1,
    0x8CE5: 0x609F,
    0x8CE6: 0x68A7,
    0x8CE7: 0x6A8E,
    0x8CE8: 0x745A,
    0x8CE9: 0x7881,
    0x8CEA: 0x8A9E,
    0x8CEB: 0x8AA4,
    0x8CEC: 0x8B77,
    0x8CED: 0x9190,
    0x8CEE: 0x4E5E,
    0x8CEF: 0x9BC9,
    0x8CF0: 0x4EA4,
    0x8CF1: 0x4F7C,
    0x8CF2: 0x4FAF,
    0x8CF3: 0x5019,
    0x8CF4: 0x5016,
    0x8CF5: 0x5149,
    0x8CF6: 0x516C,
    0x8CF7: 0x529F,
    0x8CF8: 0x52B9,
    0x8CF9: 0x52FE,
    0x8CFA: 0x539A,
    0x8CFB: 0x53E3,
    0x8CFC: 0x5411,
    0x8D40: 0x540E,
    0x8D41: 0x5589,
    0x8D42: 0x5751,
    0x8D43: 0x57A2,
    0x8D44: 0x597D,
    0x8D45: 0x5B54,
    0x8D46: 0x5B5D,
    0x8D47: 0x5B8F,
    0x8D48: 0x5DE5,
    0x8D49: 0x5DE7,
    0x8D4A: 0x5DF7,
    0x8D4B: 0x5E78,
    0x8D4C: 0x5E83,
    0x8D4D: 0x5E9A,
    0x8D4E: 0x5EB7,
    0x8D4F: 0x5F18,
    0x8D50: 0x6052,
    0x8D51: 0x614C,
    0x8D52: 0x6297,
    0x8D53: 0x62D8,
    0x8D54: 0x63A7,
    0x8D55: 0x653B,
    0x8D56: 0x6602,
    0x8D57: 0x6643,
    0x8D58: 0x66F4,
    0x8D59: 0x676D,
    0x8D5A: 0x6821,
    0x8D5B: 0x6897,
    0x8D5C: 0x69CB,
    0x8D5D: 0x6C5F,
    0x8D5E: 0x6D2A,
    0x8D5F: 0x6D69,
    0x8D60: 0x6E2F,
    0x8D61: 0x6E9D,
    0x8D62: 0x7532,
    0x8D63: 0x7687,
    0x8D64: 0x786C,
    0x8D65: 0x7A3F,
    0x8D66: 0x7CE0,
    0x8D67: 0x7D05,
    0x8D68: 0x7D18,
    0x8D69: 0x7D5E,
    0x8D6A: 0x7DB1,
    0x8D6B: 0x8015,
    0x8D6C: 0x8003,
    0x8D6D: 0x80AF,
    0x8D6E: 0x80B1,
    0x8D6F: 0x8154,
    0x8D70: 0x818F,
    0x8D71: 0x822A,
    0x8D72: 0x8352,
    0x8D73: 0x884C,
    0x8D74: 0x8861,
    0x8D75: 0x8B1B,
    0x8D76: 0x8CA2,
    0x8D77: 0x8CFC,
    0x8D78: 0x90CA,
    0x8D79: 0x9175,
    0x8D7A: 0x9271,
    0x8D7B: 0x783F,
    0x8D7C: 0x92FC,
    0x8D7D: 0x95A4,
    0x8D7E: 0x964D,
    0x8D80: 0x9805,
    0x8D81: 0x9999,
    0x8D82: 0x9AD8,
    0x8D83: 0x9D3B,
    0x8D84: 0x525B,
    0x8D85: 0x52AB,
    0x8D86: 0x53F7,
    0x8D87: 0x5408,
    0x8D88: 0x58D5,
    0x8D89: 0x62F7,
    0x8D8A: 0x6FE0,
    0x8D8B: 0x8C6A,
    0x8D8C: 0x8F5F,
    0x8D8D: 0x9EB9,
    0x8D8E: 0x514B,
    0x8D8F: 0x523B,
    0x8D90: 0x544A,
    0x8D91: 0x56FD,
    0x8D92: 0x7A40,
    0x8D93: 0x9177,
    0x8D94: 0x9D60,
    0x8D95: 0x9ED2,
    0x8D96: 0x7344,
    0x8D97: 0x6F09,
    0x8D98: 0x8170,
    0x8D99: 0x7511,
    0x8D9A: 0x5FFD,
    0x8D9B: 0x60DA,
    0x8D9C: 0x9AA8,
    0x8D9D: 0x72DB,
    0x8D9E: 0x8FBC,
    0x8D9F: 0x6B64,
    0x8DA0: 0x9803,
    0x8DA1: 0x4ECA,
    0x8DA2: 0x56F0,
    0x8DA3: 0x5764,
    0x8DA4: 0x58BE,
    0x8DA5: 0x5A5A,
    0x8DA6: 0x6068,
    0x8DA7: 0x61C7,
    0x8DA8: 0x660F,
    0x8DA9: 0x6606,
    0x8DAA: 0x6839,
    0x8DAB: 0x68B1,
    0x8DAC: 0x6DF7,
    0x8DAD: 0x75D5,
    0x8DAE: 0x7D3A,
    0x8DAF: 0x826E,
    0x8DB0: 0x9B42,
    0x8DB1: 0x4E9B,
    0x8DB2: 0x4F50,
    0x8DB3: 0x53C9,
    0x8DB4: 0x5506,
    0x8DB5: 0x5D6F,
    0x8DB6: 0x5DE6,
    0x8DB7: 0x5DEE,
    0x8DB8: 0x67FB,
    0x8DB9: 0x6C99,
    0x8DBA: 0x7473,
    0x8DBB: 0x7802,
    0x8DBC: 0x8A50,
    0x8DBD: 0x9396,
    0x8DBE: 0x88DF,
    0x8DBF: 0x5750,
    0x8DC0: 0x5EA7,
    0x8DC1: 0x632B,
    0x8DC2: 0x50B5,
    0x8DC3: 0x50AC,
    0x8DC4: 0x518D,
    0x8DC5: 0x6700,
    0x8DC6: 0x54C9,
    0x8DC7: 0x585E,
    0x8DC8: 0x59BB,
    0x8DC9: 0x5BB0,
    0x8DCA: 0x5F69,
    0x8DCB: 0x624D,
    0x8DCC: 0x63A1,
    0x8DCD: 0x683D,
    0x8DCE: 0x6B73,
    0x8DCF: 0x6E08,
    0x8DD0: 0x707D,
    0x8DD1: 0x91C7,
    0x8DD2: 0x7280,
    0x8DD3: 0x7815,
    0x8DD4: 0x7826,
    0x8DD5: 0x796D,
    0x8DD6: 0x658E,
    0x8DD7: 0x7D30,
    0x8DD8: 0x83DC,
    0x8DD9: 0x88C1,
    0x8DDA: 0x8F09,
    0x8DDB: 0x969B,
    0x8DDC: 0x5264,
    0x8DDD: 0x5728,
    0x8DDE: 0x6750,
    0x8DDF: 0x7F6A,
    0x8DE0: 0x8CA1,
    0x8DE1: 0x51B4,
    0x8DE2: 0x5742,
    0x8DE3: 0x962A,
    0x8DE4: 0x583A,
    0x8DE5: 0x698A,
    0x8DE6: 0x80B4,
    0x8DE7: 0x54B2,
    0x8DE8: 0x5D0E,
    0x8DE9: 0x57FC,
    0x8DEA: 0x7895,
    0x8DEB: 0x9DFA,
    0x8DEC: 0x4F5C,
    0x8DED: 0x524A,
    0x8DEE: 0x548B,
    0x8DEF: 0x643E,
    0x8DF0: 0x6628,
    0x8DF1: 0x6714,
    0x8DF2: 0x67F5,
    0x8DF3: 0x7A84,
    0x8DF4: 0x7B56,
    0x8DF5: 0x7D22,
    0x8DF6: 0x932F,
    0x8DF7: 0x685C,
    0x8DF8: 0x9BAD,
    0x8DF9: 0x7B39,
    0x8DFA: 0x5319,
    0x8DFB: 0x518A,
    0x8DFC: 0x5237,
    0x8E40: 0x5BDF,
    0x8E41: 0x62F6,
    0x8E42: 0x64AE,
    0x8E43: 0x64E6,
    0x8E44: 0x672D,
    0x8E45: 0x6BBA,
    0x8E46: 0x85A9,
    0x8E47: 0x96D1,
    0x8E48: 0x7690,
    0x8E49: 0x9BD6,
    0x8E4A: 0x634C,
    0x8E4B: 0x9306,
    0x8E4C: 0x9BAB,
    0x8E4D: 0x76BF,
    0x8E4E: 0x6652,
    0x8E4F: 0x4E09,
    0x8E50: 0x5098,
    0x8E51: 0x53C2,
    0x8E52: 0x5C71,
    0x8E53: 0x60E8,
    0x8E54: 0x6492,
    0x8E55: 0x6563,
    0x8E56: 0x685F,
    0x8E57: 0x71E6,
    0x8E58: 0x73CA,
    0x8E59: 0x7523,
    0x8E5A: 0x7B97,
    0x8E5B: 0x7E82,
    0x8E5C: 0x8695,
    0x8E5D: 0x8B83,
    0x8E5E: 0x8CDB,
    0x8E5F: 0x9178,
    0x8E60: 0x9910,
    0x8E61: 0x65AC,
    0x8E62: 0x66AB,
    0x8E63: 0x6B8B,
    0x8E64: 0x4ED5,
    0x8E65: 0x4ED4,
    0x8E66: 0x4F3A,
    0x8E67: 0x4F7F,
    0x8E68: 0x523A,
    0x8E69: 0x53F8,
    0x8E6A: 0x53F2,
    0x8E6B: 0x55E3,
    0x8E6C: 0x56DB,
    0x8E6D: 0x58EB,
    0x8E6E: 0x59CB,
    0x8E6F: 0x59C9,
    0x8E70: 0x59FF,
    0x8E71: 0x5B50,
    0x8E72: 0x5C4D,
    0x8E73: 0x5E02,
    0x8E74: 0x5E2B,
    0x8E75: 0x5FD7,
    0x8E76: 0x601D,
    0x8E77: 0x6307,
    0x8E78: 0x652F,
    0x8E79: 0x5B5C,
    0x8E7A: 0x65AF,
    0x8E7B: 0x65BD,
    0x8E7C: 0x65E8,
    0x8E7D: 0x679D,
    0x8E7E: 0x6B62,
    0x8E80: 0x6B7B,
    0x8E81: 0x6C0F,
    0x8E82: 0x7345,
    0x8E83: 0x7949,
    0x8E84: 0x79C1,
    0x8E85: 0x7CF8,
    0x8E86: 0x7D19,
    0x8E87: 0x7D2B,
    0x8E88: 0x80A2,
    0x8E89: 0x8102,
    0x8E8A: 0x81F3,
    0x8E8B: 0x8996,
    0x8E8C: 0x8A5E,
    0x8E8D: 0x8A69,
    0x8E8E: 0x8A66,
    0x8E8F: 0x8A8C,
    0x8E90: 0x8AEE,
    0x8E91: 0x8CC7,
    0x8E92: 0x8CDC,
    0x8E93: 0x96CC,
    0x8E94: 0x98FC,
    0x8E95: 0x6B6F,
    0x8E96: 0x4E8B,
    0x8E97: 0x4F3C,
    0x8E98: 0x4F8D,
    0x8E99: 0x5150,
    0x8E9A: 0x5B57,
    0x8E9B: 0x5BFA,
    0x8E9C: 0x6148,
    0x8E9D: 0x6301,
    0x8E9E: 0x6642,
    0x8E9F: 0x6B21,
    0x8EA0: 0x6ECB,
    0x8EA1: 0x6CBB,
    0x8EA2: 0x723E,
    0x8EA3: 0x74BD,
    0x8EA4: 0x75D4,
    0x8EA5: 0x78C1,
    0x8EA6: 0x793A,
    0x8EA7: 0x800C,
    0x8EA8: 0x8033,
    0x8EA9: 0x81EA,
    0x8EAA: 0x8494,
    0x8EAB: 0x8F9E,
    0x8EAC: 0x6C50,
    0x8EAD: 0x9E7F,
    0x8EAE: 0x5F0F,
    0x8EAF: 0x8B58,
    0x8EB0: 0x9D2B,
    0x8EB1: 0x7AFA,
    0x8EB2: 0x8EF8,
    0x8EB3: 0x5B8D,
    0x8EB4: 0x96EB,
    0x8EB5: 0x4E03,
    0x8EB6: 0x53F1,
    0x8EB7: 0x57F7,
    0x8EB8: 0x5931,
    0x8EB9: 0x5AC9,
    0x8EBA: 0x5BA4,
    0x8EBB: 0x6089,
    0x8EBC: 0x6E7F,
    0x8EBD: 0x6F06,
    0x8EBE: 0x75BE,
    0x8EBF: 0x8CEA,
    0x8EC0: 0x5B9F,
    0x8EC1: 0x8500,
    0x8EC2: 0x7BE0,
    0x8EC3: 0x5072,
    0x8EC4: 0x67F4,
    0x8EC5: 0x829D,
    0x8EC6: 0x5C61,
    0x8EC7: 0x854A,
    0x8EC8: 0x7E1E,
    0x8EC9: 0x820E,
    0x8ECA: 0x5199,
    0x8ECB: 0x5C04,
    0x8ECC: 0x6368,
    0x8ECD: 0x8D66,
    0x8ECE: 0x659C,
    0x8ECF: 0x716E,
    0x8ED0: 0x793E,
    0x8ED1: 0x7D17,
    0x8ED2: 0x8005,
    0x8ED3: 0x8B1D,
    0x8ED4: 0x8ECA,
    0x8ED5: 0x906E,
    0x8ED6: 0x86C7,
    0x8ED7: 0x90AA,
    0x8ED8: 0x501F,
    0x8ED9: 0x52FA,
    0x8EDA: 0x5C3A,
    0x8EDB: 0x6753,
    0x8EDC: 0x707C,
    0x8EDD: 0x7235,
    0x8EDE: 0x914C,
    0x8EDF: 0x91C8,
    0x8EE0: 0x932B,
    0x8EE1: 0x82E5,
    0x8EE2: 0x5BC2,
    0x8EE3: 0x5F31,
    0x8EE4: 0x60F9,
    0x8EE5: 0x4E3B,
    0x8EE6: 0x53D6,
    0x8EE7: 0x5B88,
    0x8EE8: 0x624B,
    0x8EE9: 0x6731,
    0x8EEA: 0x6B8A,
    0x8EEB: 0x72E9,
    0x8EEC: 0x73E0,
    0x8EED: 0x7A2E,
    0x8EEE: 0x816B,
    0x8EEF: 0x8DA3,
    0x8EF0: 0x9152,
    0x8EF1: 0x9996,
    0x8EF2: 0x5112,
    0x8EF3: 0x53D7,
    0x8EF4: 0x546A,
    0x8EF5: 0x5BFF,
    0x8EF6: 0x6388,
    0x8EF7: 0x6A39,
    0x8EF8: 0x7DAC,
    0x8EF9: 0x9700,
    0x8EFA: 0x56DA,
    0x8EFB: 0x53CE,
    0x8EFC: 0x5468,
    0x8F40: 0x5B97,
    0x8F41: 0x5C31,
    0x8F42: 0x5DDE,
    0x8F43: 0x4FEE,
    0x8F44: 0x6101,
    0x8F45: 0x62FE,
    0x8F46: 0x6D32,
    0x8F47: 0x79C0,
    0x8F48: 0x79CB,
    0x8F49: 0x7D42,
    0x8F4A: 0x7E4D,
    0x8F4B: 0x7FD2,
    0x8F4C: 0x81ED,
    0x8F4D: 0x821F,
    0x8F4E: 0x8490,
    0x8F4F: 0x8846,
    0x8F50: 0x8972,
    0x8F51: 0x8B90,
    0x8F52: 0x8E74,
    0x8F53: 0x8F2F,
    0x8F54: 0x9031,
    0x8F55: 0x914B,
    0x8F56: 0x916C,
    0x8F57: 0x96C6,
    0x8F58: 0x919C,
    0x8F59: 0x4EC0,
    0x8F5A: 0x4F4F,
    0x8F5B: 0x5145,
    0x8F5C: 0x5341,
    0x8F5D: 0x5F93,
    0x8F5E: 0x620E,
    0x8F5F: 0x67D4,
    0x8F60: 0x6C41,
    0x8F61: 0x6E0B,
    0x8F62: 0x7363,
    0x8F63: 0x7E26,
    0x8F64: 0x91CD,
    0x8F65: 0x9283,
    0x8F66: 0x53D4,
    0x8F67: 0x5919,
    0x8F68: 0x5BBF,
    0x8F69: 0x6DD1,
    0x8F6A: 0x795D,
    0x8F6B: 0x7E2E,
    0x8F6C: 0x7C9B,
    0x8F6D: 0x587E,
    0x8F6E: 0x719F,
    0x8F6F: 0x51FA,
    0x8F70: 0x8853,
    0x8F71: 0x8FF0,
    0x8F72: 0x4FCA,
    0x8F73: 0x5CFB,
    0x8F74: 0x6625,
    0x8F75: 0x77AC,
    0x8F76: 0x7AE3,
    0x8F77: 0x821C,
    0x8F78: 0x99FF,
    0x8F79: 0x51C6,
    0x8F7A: 0x5FAA,
    0x8F7B: 0x65EC,
    0x8F7C: 0x696F,
    0x8F7D: 0x6B89,
    0x8F7E: 0x6DF3,
    0x8F80: 0x6E96,
    0x8F81: 0x6F64,
    0x8F82: 0x76FE,
    0x8F83: 0x7D14,
    0x8F84: 0x5DE1,
    0x8F85: 0x9075,
    0x8F86: 0x9187,
    0x8F87: 0x9806,
    0x8F88: 0x51E6,
    0x8F89: 0x521D,
    0x8F8A: 0x6240,
    0x8F8B: 0x6691,
    0x8F8C: 0x66D9,
    0x8F8D: 0x6E1A,
    0x8F8E: 0x5EB6,
    0x8F8F: 0x7DD2,
    0x8F90: 0x7F72,
    0x8F91: 0x66F8,
    0x8F92: 0x85AF,
    0x8F93: 0x85F7,
    0x8F94: 0x8AF8,
    0x8F95: 0x52A9,
    0x8F96: 0x53D9,
    0x8F97: 0x5973,
    0x8F98: 0x5E8F,
    0x8F99: 0x5F90,
    0x8F9A: 0x6055,
    0x8F9B: 0x92E4,
    0x8F9C: 0x9664,
    0x8F9D: 0x50B7,
    0x8F9E: 0x511F,
    0x8F9F: 0x52DD,
    0x8FA0: 0x5320,
    0x8FA1: 0x5347,
    0x8FA2: 0x53EC,
    0x8FA3: 0x54E8,
    0x8FA4: 0x5546,
    0x8FA5: 0x5531,
    0x8FA6: 0x5617,
    0x8FA7: 0x5968,
    0x8FA8: 0x59BE,
    0x8FA9: 0x5A3C,
    0x8FAA: 0x5BB5,
    0x8FAB: 0x5C06,
    0x8FAC: 0x5C0F,
    0x8FAD: 0x5C11,
    0x8FAE: 0x5C1A,
    0x8FAF: 0x5E84,
    0x8FB0: 0x5E8A,
    0x8FB1: 0x5EE0,
    0x8FB2: 0x5F70,
    0x8FB3: 0x627F,
    0x8FB4: 0x6284,
    0x8FB5: 0x62DB,
    0x8FB6: 0x638C,
    0x8FB7: 0x6377,
    0x8FB8: 0x6607,
    0x8FB9: 0x660C,
    0x8FBA: 0x662D,
    0x8FBB: 0x6676,
    0x8FBC: 0x677E,
    0x8FBD: 0x68A2,
    0x8FBE: 0x6A1F,
    0x8FBF: 0x6A35,
    0x8FC0: 0x6CBC,
    0x8FC1: 0x6D88,
    0x8FC2: 0x6E09,
    0x8FC3: 0x6E58,
    0x8FC4: 0x713C,
    0x8FC5: 0x7126,
    0x8FC6: 0x7167,
    0x8FC7: 0x75C7,
    0x8FC8: 0x7701,
    0x8FC9: 0x785D,
    0x8FCA: 0x7901,
    0x8FCB: 0x7965,
    0x8FCC: 0x79F0,
    0x8FCD: 0x7AE0,
    0x8FCE: 0x7B11,
    0x8FCF: 0x7CA7,
    0x8FD0: 0x7D39,
    0x8FD1: 0x8096,
    0x8FD2: 0x83D6,
    0x8FD3: 0x848B,
    0x8FD4: 0x8549,
    0x8FD5: 0x885D,
    0x8FD6: 0x88F3,
    0x8FD7: 0x8A1F,
    0x8FD8: 0x8A3C,
    0x8FD9: 0x8A54,
    0x8FDA: 0x8A73,
    0x8FDB: 0x8C61,
    0x8FDC: 0x8CDE,
    0x8FDD: 0x91A4,
    0x8FDE: 0x9266,
    0x8FDF: 0x937E,
    0x8FE0: 0x9418,
    0x8FE1: 0x969C,
    0x8FE2: 0x9798,
    0x8FE3: 0x4E0A,
    0x8FE4: 0x4E08,
    0x8FE5: 0x4E1E,
    0x8FE6: 0x4E57,
    0x8FE7: 0x5197,
    0x8FE8: 0x5270,
    0x8FE9: 0x57CE,
    0x8FEA: 0x5834,
    0x8FEB: 0x58CC,
    0x8FEC: 0x5B22,
    0x8FED: 0x5E38,
    0x8FEE: 0x60C5,
    0x8FEF: 0x64FE,
    0x8FF0: 0x6761,
    0x8FF1: 0x6756,
    0x8FF2: 0x6D44,
    0x8FF3: 0x72B6,
    0x8FF4: 0x7573,
    0x8FF5: 0x7A63,
    0x8FF6: 0x84B8,
    0x8FF7: 0x8B72,
    0x8FF8: 0x91B8,
    0x8FF9: 0x9320,
    0x8FFA: 0x5631,
    0x8FFB: 0x57F4,
    0x8FFC: 0x98FE,
    0x9040: 0x62ED,
    0x9041: 0x690D,
    0x9042: 0x6B96,
    0x9043: 0x71ED,
    0x9044: 0x7E54,
    0x9045: 0x8077,
    0x9046: 0x8272,
    0x9047: 0x89E6,
    0x9048: 0x98DF,
    0x9049: 0x8755,
    0x904A: 0x8FB1,
    0x904B: 0x5C3B,
    0x904C: 0x4F38,
    0x904D: 0x4FE1,
    0x904E: 0x4FB5,
    0x904F: 0x5507,
    0x9050: 0x5A20,
    0x9051: 0x5BDD,
    0x9052: 0x5BE9,
    0x9053: 0x5FC3,
    0x9054: 0x614E,
    0x9055: 0x632F,
    0x9056: 0x65B0,
    0x9057: 0x664B,
    0x9058: 0x68EE,
    0x9059: 0x699B,
    0x905A: 0x6D78,
    0x905B: 0x6DF1,
    0x905C: 0x7533,
    0x905D: 0x75B9,
    0x905E: 0x771F,
    0x905F: 0x795E,
    0x9060: 0x79E6,
    0x9061: 0x7D33,
    0x9062: 0x81E3,
    0x9063: 0x82AF,
    0x9064: 0x85AA,
    0x9065: 0x89AA,
    0x9066: 0x8A3A,
    0x9067: 0x8EAB,
    0x9068: 0x8F9B,
    0x9069: 0x9032,
    0x906A: 0x91DD,
    0x906B: 0x9707,
    0x906C: 0x4EBA,
    0x906D: 0x4EC1,
    0x906E: 0x5203,
    0x906F: 0x5875,
    0x9070: 0x58EC,
    0x9071: 0x5C0B,
    0x9072: 0x751A,
    0x9073: 0x5C3D,
    0x9074: 0x814E,
    0x9075: 0x8A0A,
    0x9076: 0x8FC5,
    0x9077: 0x9663,
    0x9078: 0x976D,
    0x9079: 0x7B25,
    0x907A: 0x8ACF,
    0x907B: 0x9808,
    0x907C: 0x9162,
    0x907D: 0x56F3,
    0x907E: 0x53A8,
    0x9080: 0x9017,
    0x9081: 0x5439,
    0x9082: 0x5782,
    0x9083: 0x5E25,
    0x9084: 0x63A8,
    0x9085: 0x6C34,
    0x9086: 0x708A,
    0x9087: 0x7761,
    0x9088: 0x7C8B,
    0x9089: 0x7FE0,
    0x908A: 0x8870,
    0x908B: 0x9042,
    0x908C: 0x9154,
    0x908D: 0x9310,
    0x908E: 0x9318,
    0x908F: 0x968F,
    0x9090: 0x745E,
    0x9091: 0x9AC4,
    0x9092: 0x5D07,
    0x9093: 0x5D69,
    0x9094: 0x6570,
    0x9095: 0x67A2,
    0x9096: 0x8DA8,
    0x9097: 0x96DB,
    0x9098: 0x636E,
    0x9099: 0x6749,
    0x909A: 0x6919,
    0x909B: 0x83C5,
    0x909C: 0x9817,
    0x909D: 0x96C0,
    0x909E: 0x88FE,
    0x909F: 0x6F84,
    0x90A0: 0x647A,
    0x90A1: 0x5BF8,
    0x90A2: 0x4E16,
    0x90A3: 0x702C,
    0x90A4: 0x755D,
    0x90A5: 0x662F,
    0x90A6: 0x51C4,
    0x90A7: 0x5236,
    0x90A8: 0x52E2,
    0x90A9: 0x59D3,
    0x90AA: 0x5F81,
    0x90AB: 0x6027,
    0x90AC: 0x6210,
    0x90AD: 0x653F,
    0x90AE: 0x6574,
    0x90AF: 0x661F,
    0x90B0: 0x6674,
    0x90B1: 0x68F2,
    0x90B2: 0x6816,
    0x90B3: 0x6B63,
    0x90B4: 0x6E05,
    0x90B5: 0x7272,
    0x90B6: 0x751F,
    0x90B7: 0x76DB,
    0x90B8: 0x7CBE,
    0x90B9: 0x8056,
    0x90BA: 0x58F0,
    0x90BB: 0x88FD,
    0x90BC: 0x897F,
    0x90BD: 0x8AA0,
    0x90BE: 0x8A93,
    0x90BF: 0x8ACB,
    0x90C0: 0x901D,
    0x90C1: 0x9192,
    0x90C2: 0x9752,
    0x90C3: 0x9759,
    0x90C4: 0x6589,
    0x90C5: 0x7A0E,
    0x90C6: 0x8106,
    0x90C7: 0x96BB,
    0x90C8: 0x5E2D,
    0x90C9: 0x60DC,
    0x90CA: 0x621A,
    0x90CB: 0x65A5,
    0x90CC: 0x6614,
    0x90CD: 0x6790,
    0x90CE: 0x77F3,
    0x90CF: 0x7A4D,
    0x90D0: 0x7C4D,
    0x90D1: 0x7E3E,
    0x90D2: 0x810A,
    0x90D3: 0x8CAC,
    0x90D4: 0x8D64,
    0x90D5: 0x8DE1,
    0x90D6: 0x8E5F,
    0x90D7: 0x78A9,
    0x90D8: 0x5207,
    0x90D9: 0x62D9,
    0x90DA: 0x63A5,
    0x90DB: 0x6442,
    0x90DC: 0x6298,
    0x90DD: 0x8A2D,
    0x90DE: 0x7A83,
    0x90DF: 0x7BC0,
    0x90E0: 0x8AAC,
    0x90E1: 0x96EA,
    0x90E2: 0x7D76,
    0x90E3: 0x820C,
    0x90E4: 0x8749,
    0x90E5: 0x4ED9,
    0x90E6: 0x5148,
    0x90E7: 0x5343,
    0x90E8: 0x5360,
    0x90E9: 0x5BA3,
    0x90EA: 0x5C02,
    0x90EB: 0x5C16,
    0x90EC: 0x5DDD,
    0x90ED: 0x6226,
    0x90EE: 0x6247,
    0x90EF: 0x64B0,
    0x90F0: 0x6813,
    0x90F1: 0x6834,
    0x90F2: 0x6CC9,
    0x90F3: 0x6D45,
    0x90F4: 0x6D17,
    0x90F5: 0x67D3,
    0x90F6: 0x6F5C,
    0x90F7: 0x714E,
    0x90F8: 0x717D,
    0x90F9: 0x65CB,
    0x90FA: 0x7A7F,
    0x90FB: 0x7BAD,
    0x90FC: 0x7DDA,
    0x9140: 0x7E4A,
    0x9141: 0x7FA8,
    0x9142: 0x817A,
    0x9143: 0x821B,
    0x9144: 0x8239,
    0x9145: 0x85A6,
    0x9146: 0x8A6E,
    0x9147: 0x8CCE,
    0x9148: 0x8DF5,
    0x9149: 0x9078,
    0x914A: 0x9077,
    0x914B: 0x92AD,
    0x914C: 0x9291,
    0x914D: 0x9583,
    0x914E: 0x9BAE,
    0x914F: 0x524D,
    0x9150: 0x5584,
    0x9151: 0x6F38,
    0x9152: 0x7136,
    0x9153: 0x5168,
    0x9154: 0x7985,
    0x9155: 0x7E55,
    0x9156: 0x81B3,
    0x9157: 0x7CCE,
    0x9158: 0x564C,
    0x9159: 0x5851,
    0x915A: 0x5CA8,
    0x915B: 0x63AA,
    0x915C: 0x66FE,
    0x915D: 0x66FD,
    0x915E: 0x695A,
    0x915F: 0x72D9,
    0x9160: 0x758F,
    0x9161: 0x758E,
    0x9162: 0x790E,
    0x9163: 0x7956,
    0x9164: 0x79DF,
    0x9165: 0x7C97,
    0x9166: 0x7D20,
    0x9167: 0x7D44,
    0x9168: 0x8607,
    0x9169: 0x8A34,
    0x916A: 0x963B,
    0x916B: 0x9061,
    0x916C: 0x9F20,
    0x916D: 0x50E7,
    0x916E: 0x5275,
    0x916F: 0x53CC,
    0x9170: 0x53E2,
    0x9171: 0x5009,
    0x9172: 0x55AA,
    0x9173: 0x58EE,
    0x9174: 0x594F,
    0x9175: 0x723D,
    0x9176: 0x5B8B,
    0x9177: 0x5C64,
    0x9178: 0x531D,
    0x9179: 0x60E3,
    0x917A: 0x60F3,
    0x917B: 0x635C,
    0x917C: 0x6383,
    0x917D: 0x633F,
    0x917E: 0x63BB,
    0x9180: 0x64CD,
    0x9181: 0x65E9,
    0x9182: 0x66F9,
    0x9183: 0x5DE3,
    0x9184: 0x69CD,
    0x9185: 0x69FD,
    0x9186: 0x6F15,
    0x9187: 0x71E5,
    0x9188: 0x4E89,
    0x9189: 0x75E9,
    0x918A: 0x76F8,
    0x918B: 0x7A93,
    0x918C: 0x7CDF,
    0x918D: 0x7DCF,
    0x918E: 0x7D9C,
    0x918F: 0x8061,
    0x9190: 0x8349,
    0x9191: 0x8358,
    0x9192: 0x846C,
    0x9193: 0x84BC,
    0x9194: 0x85FB,
    0x9195: 0x88C5,
    0x9196: 0x8D70,
    0x9197: 0x9001,
    0x9198: 0x906D,
    0x9199: 0x9397,
    0x919A: 0x971C,
    0x919B: 0x9A12,
    0x919C: 0x50CF,
    0x919D: 0x5897,
    0x919E: 0x618E,
    0x919F: 0x81D3,
    0x91A0: 0x8535,
    0x91A1: 0x8D08,
    0x91A2: 0x9020,
    0x91A3: 0x4FC3,
    0x91A4: 0x5074,
    0x91A5: 0x5247,
    0x91A6: 0x5373,
    0x91A7: 0x606F,
    0x91A8: 0x6349,
    0x91A9: 0x675F,
    0x91AA: 0x6E2C,
    0x91AB: 0x8DB3,
    0x91AC: 0x901F,
    0x91AD: 0x4FD7,
    0x91AE: 0x5C5E,
    0x91AF: 0x8CCA,
    0x91B0: 0x65CF,
    0x91B1: 0x7D9A,
    0x91B2: 0x5352,
    0x91B3: 0x8896,
    0x91B4: 0x5176,
    0x91B5: 0x63C3,
    0x91B6: 0x5B58,
    0x91B7: 0x5B6B,
    0x91B8: 0x5C0A,
    0x91B9: 0x640D,
    0x91BA: 0x6751,
    0x91BB: 0x905C,
    0x91BC: 0x4ED6,
    0x91BD: 0x591A,
    0x91BE: 0x592A,
    0x91BF: 0x6C70,
    0x91C0: 0x8A51,
    0x91C1: 0x553E,
    0x91C2: 0x5815,
    0x91C3: 0x59A5,
    0x91C4: 0x60F0,
    0x91C5: 0x6253,
    0x91C6: 0x67C1,
    0x91C7: 0x8235,
    0x91C8: 0x6955,
    0x91C9: 0x9640,
    0x91CA: 0x99C4,
    0x91CB: 0x9A28,
    0x91CC: 0x4F53,
    0x91CD: 0x5806,
    0x91CE: 0x5BFE,
    0x91CF: 0x8010,
    0x91D0: 0x5CB1,
    0x91D1: 0x5E2F,
    0x91D2: 0x5F85,
    0x91D3: 0x6020,
    0x91D4: 0x614B,
    0x91D5: 0x6234,
    0x91D6: 0x66FF,
    0x91D7: 0x6CF0,
    0x91D8: 0x6EDE,
    0x91D9: 0x80CE,
    0x91DA: 0x817F,
    0x91DB: 0x82D4,
    0x91DC: 0x888B,
    0x91DD: 0x8CB8,
    0x91DE: 0x9000,
    0x91DF: 0x902E,
    0x91E0: 0x968A,
    0x91E1: 0x9EDB,
    0x91E2: 0x9BDB,
    0x91E3: 0x4EE3,
    0x91E4: 0x53F0,
    0x91E5: 0x5927,
    0x91E6: 0x7B2C,
    0x91E7: 0x918D,
    0x91E8: 0x984C,
    0x91E9: 0x9DF9,
    0x91EA: 0x6EDD,
    0x91EB: 0x7027,
    0x91EC: 0x5353,
    0x91ED: 0x5544,
    0x91EE: 0x5B85,
    0x91EF: 0x6258,
    0x91F0: 0x629E,
    0x91F1: 0x62D3,
    0x91F2: 0x6CA2,
    0x91F3: 0x6FEF,
    0x91F4: 0x7422,
    0x91F5: 0x8A17,
    0x91F6: 0x9438,
    0x91F7: 0x6FC1,
    0x91F8: 0x8AFE,
    0x91F9: 0x8338,
    0x91FA: 0x51E7,
    0x91FB: 0x86F8,
    0x91FC: 0x53EA,
    0x9240: 0x53E9,
    0x9241: 0x4F46,
    0x9242: 0x9054,
    0x9243: 0x8FB0,
    0x9244: 0x596A,
    0x9245: 0x8131,
    0x9246: 0x5DFD,
    0x9247: 0x7AEA,
    0x9248: 0x8FBF,
    0x9249: 0x68DA,
    0x924A: 0x8C37,
    0x924B: 0x72F8,
    0x924C: 0x9C48,
    0x924D: 0x6A3D,
    0x924E: 0x8AB0,
    0x924F: 0x4E39,
    0x9250: 0x5358,
    0x9251: 0x5606,
    0x9252: 0x5766,
    0x9253: 0x62C5,
    0x9254: 0x63A2,
    0x9255: 0x65E6,
    0x9256: 0x6B4E,
    0x9257: 0x6DE1,
    0x9258: 0x6E5B,
    0x9259: 0x70AD,
    0x925A: 0x77ED,
    0x925B: 0x7AEF,
    0x925C: 0x7BAA,
    0x925D: 0x7DBB,
    0x925E: 0x803D,
    0x925F: 0x80C6,
    0x9260: 0x86CB,
    0x9261: 0x8A95,
    0x9262: 0x935B,
    0x9263: 0x56E3,
    0x9264: 0x58C7,
    0x9265: 0x5F3E,
    0x9266: 0x65AD,
    0x9267: 0x6696,
    0x9268: 0x6A80,
    0x9269: 0x6BB5,
    0x926A: 0x7537,
    0x926B: 0x8AC7,
    0x926C: 0x5024,
    0x926D: 0x77E5,
    0x926E: 0x5730,
    0x926F: 0x5F1B,
    0x9270: 0x6065,
    0x9271: 0x667A,
    0x9272: 0x6C60,
    0x9273: 0x75F4,
    0x9274: 0x7A1A,
    0x9275: 0x7F6E,
    0x9276: 0x81F4,
    0x9277: 0x8718,
    0x9278: 0x9045,
    0x9279: 0x99B3,
    0x927A: 0x7BC9,
    0x927B: 0x755C,
    0x927C: 0x7AF9,
    0x927D: 0x7B51,
    0x927E: 0x84C4,
    0x9280: 0x9010,
    0x9281: 0x79E9,
    0x9282: 0x7A92,
    0x9283: 0x8336,
    0x9284: 0x5AE1,
    0x9285: 0x7740,
    0x9286: 0x4E2D,
    0x9287: 0x4EF2,
    0x9288: 0x5B99,
    0x9289: 0x5FE0,
    0x928A: 0x62BD,
    0x928B: 0x663C,
    0x928C: 0x67F1,
    0x928D: 0x6CE8,
    0x928E: 0x866B,
    0x928F: 0x8877,
    0x9290: 0x8A3B,
    0x9291: 0x914E,
    0x9292: 0x92F3,
    0x9293: 0x99D0,
    0x9294: 0x6A17,
    0x9295: 0x7026,
    0x9296: 0x732A,
    0x9297: 0x82E7,
    0x9298: 0x8457,
    0x9299: 0x8CAF,
    0x929A: 0x4E01,
    0x929B: 0x5146,
    0x929C: 0x51CB,
    0x929D: 0x558B,
    0x929E: 0x5BF5,
    0x929F: 0x5E16,
    0x92A0: 0x5E33,
    0x92A1: 0x5E81,
    0x92A2: 0x5F14,
    0x92A3: 0x5F35,
    0x92A4: 0x5F6B,
    0x92A5: 0x5FB4,
    0x92A6: 0x61F2,
    0x92A7: 0x6311,
    0x92A8: 0x66A2,
    0x92A9: 0x671D,
    0x92AA: 0x6F6E,
    0x92AB: 0x7252,
    0x92AC: 0x753A,
    0x92AD: 0x773A,
    0x92AE: 0x8074,
    0x92AF: 0x8139,
    0x92B0: 0x8178,
    0x92B1: 0x8776,
    0x92B2: 0x8ABF,
    0x92B3: 0x8ADC,
    0x92B4: 0x8D85,
    0x92B5: 0x8DF3,
    0x92B6: 0x929A,
    0x92B7: 0x9577,
    0x92B8: 0x9802,
    0x92B9: 0x9CE5,
    0x92BA: 0x52C5,
    0x92BB: 0x6357,
    0x92BC: 0x76F4,
    0x92BD: 0x6715,
    0x92BE: 0x6C88,
    0x92BF: 0x73CD,
    0x92C0: 0x8CC3,
    0x92C1: 0x93AE,
    0x92C2: 0x9673,
    0x92C3: 0x6D25,
    0x92C4: 0x589C,
    0x92C5: 0x690E,
    0x92C6: 0x69CC,
    0x92C7: 0x8FFD,
    0x92C8: 0x939A,
    0x92C9: 0x75DB,
    0x92CA: 0x901A,
    0x92CB: 0x585A,
    0x92CC: 0x6802,
    0x92CD: 0x63B4,
    0x92CE: 0x69FB,
    0x92CF: 0x4F43,
    0x92D0: 0x6F2C,
    0x92D1: 0x67D8,
    0x92D2: 0x8FBB,
    0x92D3: 0x8526,
    0x92D4: 0x7DB4,
    0x92D5: 0x9354,
    0x92D6: 0x693F,
    0x92D7: 0x6F70,
    0x92D8: 0x576A,
    0x92D9: 0x58F7,
    0x92DA: 0x5B2C,
    0x92DB: 0x7D2C,
    0x92DC: 0x722A,
    0x92DD: 0x540A,
    0x92DE: 0x91E3,
    0x92DF: 0x9DB4,
    0x92E0: 0x4EAD,
    0x92E1: 0x4F4E,
    0x92E2: 0x505C,
    0x92E3: 0x5075,
    0x92E4: 0x5243,
    0x92E5: 0x8C9E,
    0x92E6: 0x5448,
    0x92E7: 0x5824,
    0x92E8: 0x5B9A,
    0x92E9: 0x5E1D,
    0x92EA: 0x5E95,
    0x92EB: 0x5EAD,
    0x92EC: 0x5EF7,
    0x92ED: 0x5F1F,
    0x92EE: 0x608C,
    0x92EF: 0x62B5,
    0x92F0: 0x633A,
    0x92F1: 0x63D0,
    0x92F2: 0x68AF,
    0x92F3: 0x6C40,
    0x92F4: 0x7887,
    0x92F5: 0x798E,
    0x92F6: 0x7A0B,
    0x92F7: 0x7DE0,
    0x92F8: 0x8247,
    0x92F9: 0x8A02,
    0x92FA: 0x8AE6,
    0x92FB: 0x8E44,
    0x92FC: 0x9013,
    0x9340: 0x90B8,
    0x9341: 0x912D,
    0x9342: 0x91D8,
    0x9343: 0x9F0E,
    0x9344: 0x6CE5,
    0x9345: 0x6458,
    0x9346: 0x64E2,
    0x9347: 0x6575,
    0x9348: 0x6EF4,
    0x9349: 0x7684,
    0x934A: 0x7B1B,
    0x934B: 0x9069,
    0x934C: 0x93D1,
    0x934D: 0x6EBA,
    0x934E: 0x54F2,
    0x934F: 0x5FB9,
    0x9350: 0x64A4,
    0x9351: 0x8F4D,
    0x9352: 0x8FED,
    0x9353: 0x9244,
    0x9354: 0x5178,
    0x9355: 0x586B,
    0x9356: 0x5929,
    0x9357: 0x5C55,
    0x9358: 0x5E97,
    0x9359: 0x6DFB,
    0x935A: 0x7E8F,
    0x935B: 0x751C,
    0x935C: 0x8CBC,
    0x935D: 0x8EE2,
    0x935E: 0x985B,
    0x935F: 0x70B9,
    0x9360: 0x4F1D,
    0x9361: 0x6BBF,
    0x9362: 0x6FB1,
    0x9363: 0x7530,
    0x9364: 0x96FB,
    0x9365: 0x514E,
    0x9366: 0x5410,
    0x9367: 0x5835,
    0x9368: 0x5857,
    0x9369: 0x59AC,
    0x936A: 0x5C60,
    0x936B: 0x5F92,
    0x936C: 0x6597,
    0x936D: 0x675C,
    0x936E: 0x6E21,
    0x936F: 0x767B,
    0x9370: 0x83DF,
    0x9371: 0x8CED,
    0x9372: 0x9014,
    0x9373: 0x90FD,
    0x9374: 0x934D,
    0x9375: 0x7825,
    0x9376: 0x783A,
    0x9377: 0x52AA,
    0x9378: 0x5EA6,
    0x9379: 0x571F,
    0x937A: 0x5974,
    0x937B: 0x6012,
    0x937C: 0x5012,
    0x937D: 0x515A,
    0x937E: 0x51AC,
    0x9380: 0x51CD,
    0x9381: 0x5200,
    0x9382: 0x5510,
    0x9383: 0x5854,
    0x9384: 0x5858,
    0x9385: 0x5957,
    0x9386: 0x5B95,
    0x9387: 0x5CF6,
    0x9388: 0x5D8B,
    0x9389: 0x60BC,
    0x938A: 0x6295,
    0x938B: 0x642D,
    0x938C: 0x6771,
    0x938D: 0x6843,
    0x938E: 0x68BC,
    0x938F: 0x68DF,
    0x9390: 0x76D7,
    0x9391: 0x6DD8,
    0x9392: 0x6E6F,
    0x9393: 0x6D9B,
    0x9394: 0x706F,
    0x9395: 0x71C8,
    0x9396: 0x5F53,
    0x9397: 0x75D8,
    0x9398: 0x7977,
    0x9399: 0x7B49,
    0x939A: 0x7B54,
    0x939B: 0x7B52,
    0x939C: 0x7CD6,
    0x939D: 0x7D71,
    0x939E: 0x5230,
    0x939F: 0x8463,
    0x93A0: 0x8569,
    0x93A1: 0x85E4,
    0x93A2: 0x8A0E,
    0x93A3: 0x8B04,
    0x93A4: 0x8C46,
    0x93A5: 0x8E0F,
    0x93A6: 0x9003,
    0x93A7: 0x900F,
    0x93A8: 0x9419,
    0x93A9: 0x9676,
    0x93AA: 0x982D,
    0x93AB: 0x9A30,
    0x93AC: 0x95D8,
    0x93AD: 0x50CD,
    0x93AE: 0x52D5,
    0x93AF: 0x540C,
    0x93B0: 0x5802,
    0x93B1: 0x5C0E,
    0x93B2: 0x61A7,
    0x93B3: 0x649E,
    0x93B4: 0x6D1E,
    0x93B5: 0x77B3,
    0x93B6: 0x7AE5,
    0x93B7: 0x80F4,
    0x93B8: 0x8404,
    0x93B9: 0x9053,
    0x93BA: 0x9285,
    0x93BB: 0x5CE0,
    0x93BC: 0x9D07,
    0x93BD: 0x533F,
    0x93BE: 0x5F97,
    0x93BF: 0x5FB3,
    0x93C0: 0x6D9C,
    0x93C1: 0x7279,
    0x93C2: 0x7763,
    0x93C3: 0x79BF,
    0x93C4: 0x7BE4,
    0x93C5: 0x6BD2,
    0x93C6: 0x72EC,
    0x93C7: 0x8AAD,
    0x93C8: 0x6803,
    0x93C9: 0x6A61,
    0x93CA: 0x51F8,
    0x93CB: 0x7A81,
    0x93CC: 0x6934,
    0x93CD: 0x5C4A,
    0x93CE: 0x9CF6,
    0x93CF: 0x82EB,
    0x93D0: 0x5BC5,
    0x93D1: 0x9149,
    0x93D2: 0x701E,
    0x93D3: 0x5678,
    0x93D4: 0x5C6F,
    0x93D5: 0x60C7,
    0x93D6: 0x6566,
    0x93D7: 0x6C8C,
    0x93D8: 0x8C5A,
    0x93D9: 0x9041,
    0x93DA: 0x9813,
    0x93DB: 0x5451,
    0x93DC: 0x66C7,
    0x93DD: 0x920D,
    0x93DE: 0x5948,
    0x93DF: 0x90A3,
    0x93E0: 0x5185,
    0x93E1: 0x4E4D,
    0x93E2: 0x51EA,
    0x93E3: 0x8599,
    0x93E4: 0x8B0E,
    0x93E5: 0x7058,
    0x93E6: 0x637A,
    0x93E7: 0x934B,
    0x93E8: 0x6962,
    0x93E9: 0x99B4,
    0x93EA: 0x7E04,
    0x93EB: 0x7577,
    0x93EC: 0x5357,
    0x93ED: 0x6960,
    0x93EE: 0x8EDF,
    0x93EF: 0x96E3,
    0x93F0: 0x6C5D,
    0x93F1: 0x4E8C,
    0x93F2: 0x5C3C,
    0x93F3: 0x5F10,
    0x93F4: 0x8FE9,
    0x93F5: 0x5302,
    0x93F6: 0x8CD1,
    0x93F7: 0x8089,
    0x93F8: 0x8679,
    0x93F9: 0x5EFF,
    0x93FA: 0x65E5,
    0x93FB: 0x4E73,
    0x93FC: 0x5165,
    0x9440: 0x5982,
    0x9441: 0x5C3F,
    0x9442: 0x97EE,
    0x9443: 0x4EFB,
    0x9444: 0x598A,
    0x9445: 0x5FCD,
    0x9446: 0x8A8D,
    0x9447: 0x6FE1,
    0x9448: 0x79B0,
    0x9449: 0x7962,
    0x944A: 0x5BE7,
    0x944B: 0x8471,
    0x944C: 0x732B,
    0x944D: 0x71B1,
    0x944E: 0x5E74,
    0x944F: 0x5FF5,
    0x9450: 0x637B,
    0x9451: 0x649A,
    0x9452: 0x71C3,
    0x9453: 0x7C98,
    0x9454: 0x4E43,
    0x9455: 0x5EFC,
    0x9456: 0x4E4B,
    0x9457: 0x57DC,
    0x9458: 0x56A2,
    0x9459: 0x60A9,
    0x945A: 0x6FC3,
    0x945B: 0x7D0D,
    0x945C: 0x80FD,
    0x945D: 0x8133,
    0x945E: 0x81BF,
    0x945F: 0x8FB2,
    0x9460: 0x8997,
    0x9461: 0x86A4,
    0x9462: 0x5DF4,
    0x9463: 0x628A,
    0x9464: 0x64AD,
    0x9465: 0x8987,
    0x9466: 0x6777,
    0x9467: 0x6CE2,
    0x9468: 0x6D3E,
    0x9469: 0x7436,
    0x946A: 0x7834,
    0x946B: 0x5A46,
    0x946C: 0x7F75,
    0x946D: 0x82AD,
    0x946E: 0x99AC,
    0x946F: 0x4FF3,
    0x9470: 0x5EC3,
    0x9471: 0x62DD,
    0x9472: 0x6392,
    0x9473: 0x6557,
    0x9474: 0x676F,
    0x9475: 0x76C3,
    0x9476: 0x724C,
    0x9477: 0x80CC,
    0x9478: 0x80BA,
    0x9479: 0x8F29,
    0x947A: 0x914D,
    0x947B: 0x500D,
    0x947C: 0x57F9,
    0x947D: 0x5A92,
    0x947E: 0x6885,
    0x9480: 0x6973,
    0x9481: 0x7164,
    0x9482: 0x72FD,
    0x9483: 0x8CB7,
    0x9484: 0x58F2,
    0x9485: 0x8CE0,
    0x9486: 0x966A,
    0x9487: 0x9019,
    0x9488: 0x877F,
    0x9489: 0x79E4,
    0x948A: 0x77E7,
    0x948B: 0x8429,
    0x948C: 0x4F2F,
    0x948D: 0x5265,
    0x948E: 0x535A,
    0x948F: 0x62CD,
    0x9490: 0x67CF,
    0x9491: 0x6CCA,
    0x9492: 0x767D,
    0x9493: 0x7B94,
    0x9494: 0x7C95,
    0x9495: 0x8236,
    0x9496: 0x8584,
    0x9497: 0x8FEB,
    0x9498: 0x66DD,
    0x9499: 0x6F20,
    0x949A: 0x7206,
    0x949B: 0x7E1B,
    0x949C: 0x83AB,
    0x949D: 0x99C1,
    0x949E: 0x9EA6,
    0x949F: 0x51FD,
    0x94A0: 0x7BB1,
    0x94A1: 0x7872,
    0x94A2: 0x7BB8,
    0x94A3: 0x8087,
    0x94A4: 0x7B48,
    0x94A5: 0x6AE8,
    0x94A6: 0x5E61,
    0x94A7: 0x808C,
    0x94A8: 0x7551,
    0x94A9: 0x7560,
    0x94AA: 0x516B,
    0x94AB: 0x9262,
    0x94AC: 0x6E8C,
    0x94AD: 0x767A,
    0x94AE: 0x9197,
    0x94AF: 0x9AEA,
    0x94B0: 0x4F10,
    0x94B1: 0x7F70,
    0x94B2: 0x629C,
    0x94B3: 0x7B4F,
    0x94B4: 0x95A5,
    0x94B5: 0x9CE9,
    0x94B6: 0x567A,
    0x94B7: 0x5859,
    0x94B8: 0x86E4,
    0x94B9: 0x96BC,
    0x94BA: 0x4F34,
    0x94BB: 0x5224,
    0x94BC: 0x534A,
    0x94BD: 0x53CD,
    0x94BE: 0x53DB,
    0x94BF: 0x5E06,
    0x94C0: 0x642C,
    0x94C1: 0x6591,
    0x94C2: 0x677F,
    0x94C3: 0x6C3E,
    0x94C4: 0x6C4E,
    0x94C5: 0x7248,
    0x94C6: 0x72AF,
    0x94C7: 0x73ED,
    0x94C8: 0x7554,
    0x94C9: 0x7E41,
    0x94CA: 0x822C,
    0x94CB: 0x85E9,
    0x94CC: 0x8CA9,
    0x94CD: 0x7BC4,
    0x94CE: 0x91C6,
    0x94CF: 0x7169,
    0x94D0: 0x9812,
    0x94D1: 0x98EF,
    0x94D2: 0x633D,
    0x94D3: 0x6669,
    0x94D4: 0x756A,
    0x94D5: 0x76E4,
    0x94D6: 0x78D0,
    0x94D7: 0x8543,
    0x94D8: 0x86EE,
    0x94D9: 0x532A,
    0x94DA: 0x5351,
    0x94DB: 0x5426,
    0x94DC: 0x5983,
    0x94DD: 0x5E87,
    0x94DE: 0x5F7C,
    0x94DF: 0x60B2,
    0x94E0: 0x6249,
    0x94E1: 0x6279,
    0x94E2: 0x62AB,
    0x94E3: 0x6590,
    0x94E4: 0x6BD4,
    0x94E5: 0x6CCC,
    0x94E6: 0x75B2,
    0x94E7: 0x76AE,
    0x94E8: 0x7891,
    0x94E9: 0x79D8,
    0x94EA: 0x7DCB,
    0x94EB: 0x7F77,
    0x94EC: 0x80A5,
    0x94ED: 0x88AB,
    0x94EE: 0x8AB9,
    0x94EF: 0x8CBB,
    0x94F0: 0x907F,
    0x94F1: 0x975E,
    0x94F2: 0x98DB,
    0x94F3: 0x6A0B,
    0x94F4: 0x7C38,
    0x94F5: 0x5099,
    0x94F6: 0x5C3E,
    0x94F7: 0x5FAE,
    0x94F8: 0x6787,
    0x94F9: 0x6BD8,
    0x94FA: 0x7435,
    0x94FB: 0x7709,
    0x94FC: 0x7F8E,
    0x9540: 0x9F3B,
    0x9541: 0x67CA,
    0x9542: 0x7A17,
    0x9543: 0x5339,
    0x9544: 0x758B,
    0x9545: 0x9AED,
    0x9546: 0x5F66,
    0x9547: 0x819D,
    0x9548: 0x83F1,
    0x9549: 0x8098,
    0x954A: 0x5F3C,
    0x954B: 0x5FC5,
    0x954C: 0x7562,
    0x954D: 0x7B46,
    0x954E: 0x903C,
    0x954F: 0x6867,
    0x9550: 0x59EB,
    0x9551: 0x5A9B,
    0x9552: 0x7D10,
    0x9553: 0x767E,
    0x9554: 0x8B2C,
    0x9555: 0x4FF5,
    0x9556: 0x5F6A,
    0x9557: 0x6A19,
    0x9558: 0x6C37,
    0x9559: 0x6F02,
    0x955A: 0x74E2,
    0x955B: 0x7968,
    0x955C: 0x8868,
    0x955D: 0x8A55,
    0x955E: 0x8C79,
    0x955F: 0x5EDF,
    0x9560: 0x63CF,
    0x9561: 0x75C5,
    0x9562: 0x79D2,
    0x9563: 0x82D7,
    0x9564: 0x9328,
    0x9565: 0x92F2,
    0x9566: 0x849C,
    0x9567: 0x86ED,
    0x9568: 0x9C2D,
    0x9569: 0x54C1,
    0x956A: 0x5F6C,
    0x956B: 0x658C,
    0x956C: 0x6D5C,
    0x956D: 0x7015,
    0x956E: 0x8CA7,
    0x956F: 0x8CD3,
    0x9570: 0x983B,
    0x9571: 0x654F,
    0x9572: 0x74F6,
    0x9573: 0x4E0D,
    0x9574: 0x4ED8,
    0x9575: 0x57E0,
    0x9576: 0x592B,
    0x9577: 0x5A66,
    0x9578: 0x5BCC,
    0x9579: 0x51A8,
    0x957A: 0x5E03,
    0x957B: 0x5E9C,
    0x957C: 0x6016,
    0x957D: 0x6276,
    0x957E: 0x6577,
    0x9580: 0x65A7,
    0x9581: 0x666E,
    0x9582: 0x6D6E,
    0x9583: 0x7236,
    0x9584: 0x7B26,
    0x9585: 0x8150,
    0x9586: 0x819A,
    0x9587: 0x8299,
    0x9588: 0x8B5C,
    0x9589: 0x8CA0,
    0x958A: 0x8CE6,
    0x958B: 0x8D74,
    0x958C: 0x961C,
    0x958D: 0x9644,
    0x958E: 0x4FAE,
    0x958F: 0x64AB,
    0x9590: 0x6B66,
    0x9591: 0x821E,
    0x9592: 0x8461,
    0x9593: 0x856A,
    0x9594: 0x90E8,
    0x9595: 0x5C01,
    0x9596: 0x6953,
    0x9597: 0x98A8,
    0x9598: 0x847A,
    0x9599: 0x8557,
    0x959A: 0x4F0F,
    0x959B: 0x526F,
    0x959C: 0x5FA9,
    0x959D: 0x5E45,
    0x959E: 0x670D,
    0x959F: 0x798F,
    0x95A0: 0x8179,
    0x95A1: 0x8907,
    0x95A2: 0x8986,
    0x95A3: 0x6DF5,
    0x95A4: 0x5F17,
    0x95A5: 0x6255,
    0x95A6: 0x6CB8,
    0x95A7: 0x4ECF,
    0x95A8: 0x7269,
    0x95A9: 0x9B92,
    0x95AA: 0x5206,
    0x95AB: 0x543B,
    0x95AC: 0x5674,
    0x95AD: 0x58B3,
    0x95AE: 0x61A4,
    0x95AF: 0x626E,
    0x95B0: 0x711A,
    0x95B1: 0x596E,
    0x95B2: 0x7C89,
    0x95B3: 0x7CDE,
    0x95B4: 0x7D1B,
    0x95B5: 0x96F0,
    0x95B6: 0x6587,
    0x95B7: 0x805E,
    0x95B8: 0x4E19,
    0x95B9: 0x4F75,
    0x95BA: 0x5175,
    0x95BB: 0x5840,
    0x95BC: 0x5E63,
    0x95BD: 0x5E73,
    0x95BE: 0x5F0A,
    0x95BF: 0x67C4,
    0x95C0: 0x4E26,
    0x95C1: 0x853D,
    0x95C2: 0x9589,
    0x95C3: 0x965B,
    0x95C4: 0x7C73,
    0x95C5: 0x9801,
    0x95C6: 0x50FB,
    0x95C7: 0x58C1,
    0x95C8: 0x7656,
    0x95C9: 0x78A7,
    0x95CA: 0x5225,
    0x95CB: 0x77A5,
    0x95CC: 0x8511,
    0x95CD: 0x7B86,
    0x95CE: 0x504F,
    0x95CF: 0x5909,
    0x95D0: 0x7247,
    0x95D1: 0x7BC7,
    0x95D2: 0x7DE8,
    0x95D3: 0x8FBA,
    0x95D4: 0x8FD4,
    0x95D5: 0x904D,
    0x95D6: 0x4FBF,
    0x95D7: 0x52C9,
    0x95D8: 0x5A29,
    0x95D9: 0x5F01,
    0x95DA: 0x97AD,
    0x95DB: 0x4FDD,
    0x95DC: 0x8217,
    0x95DD: 0x92EA,
    0x95DE: 0x5703,
    0x95DF: 0x6355,
    0x95E0: 0x6B69,
    0x95E1: 0x752B,
    0x95E2: 0x88DC,
    0x95E3: 0x8F14,
    0x95E4: 0x7A42,
    0x95E5: 0x52DF,
    0x95E6: 0x5893,
    0x95E7: 0x6155,
    0x95E8: 0x620A,
    0x95E9: 0x66AE,
    0x95EA: 0x6BCD,
    0x95EB: 0x7C3F,
    0x95EC: 0x83E9,
    0x95ED: 0x5023,
    0x95EE: 0x4FF8,
    0x95EF: 0x5305,
    0x95F0: 0x5446,
    0x95F1: 0x5831,
    0x95F2: 0x5949,
    0x95F3: 0x5B9D,
    0x95F4: 0x5CF0,
    0x95F5: 0x5CEF,
    0x95F6: 0x5D29,
    0x95F7: 0x5E96,
    0x95F8: 0x62B1,
    0x95F9: 0x6367,
    0x95FA: 0x653E,
    0x95FB: 0x65B9,
    0x95FC: 0x670B,
    0x9640: 0x6CD5,
    0x9641: 0x6CE1,
    0x9642: 0x70F9,
    0x9643: 0x7832,
    0x9644: 0x7E2B,
    0x9645: 0x80DE,
    0x9646: 0x82B3,
    0x9647: 0x840C,
    0x9648: 0x84EC,
    0x9649: 0x8702,
    0x964A: 0x8912,
    0x964B: 0x8A2A,
    0x964C: 0x8C4A,
    0x964D: 0x90A6,
    0x964E: 0x92D2,
    0x964F: 0x98FD,
    0x9650: 0x9CF3,
    0x9651: 0x9D6C,
    0x9652: 0x4E4F,
    0x9653: 0x4EA1,
    0x9654: 0x508D,
    0x9655: 0x5256,
    0x9656: 0x574A,
    0x9657: 0x59A8,
    0x9658: 0x5E3D,
    0x9659: 0x5FD8,
    0x965A: 0x5FD9,
    0x965B: 0x623F,
    0x965C: 0x66B4,
    0x965D: 0x671B,
    0x965E: 0x67D0,
    0x965F: 0x68D2,
    0x9660: 0x5192,
    0x9661: 0x7D21,
    0x9662: 0x80AA,
    0x9663: 0x81A8,
    0x9664: 0x8B00,
    0x9665: 0x8C8C,
    0x9666: 0x8CBF,
    0x9667: 0x927E,
    0x9668: 0x9632,
    0x9669: 0x5420,
    0x966A: 0x982C,
    0x966B: 0x5317,
    0x966C: 0x50D5,
    0x966D: 0x535C,
    0x966E: 0x58A8,
    0x966F: 0x64B2,
    0x9670: 0x6734,
    0x9671: 0x7267,
    0x9672: 0x7766,
    0x9673: 0x7A46,
    0x9674: 0x91E6,
    0x9675: 0x52C3,
    0x9676: 0x6CA1,
    0x9677: 0x6B86,
    0x9678: 0x5800,
    0x9679: 0x5E4C,
    0x967A: 0x5954,
    0x967B: 0x672C,
    0x967C: 0x7FFB,
    0x967D: 0x51E1,
    0x967E: 0x76C6,
    0x9680: 0x6469,
    0x9681: 0x78E8,
    0x9682: 0x9B54,
    0x9683: 0x9EBB,
    0x9684: 0x57CB,
    0x9685: 0x59B9,
    0x9686: 0x6627,
    0x9687: 0x679A,
    0x9688: 0x6BCE,
    0x9689: 0x54E9,
    0x968A: 0x69D9,
    0x968B: 0x5E55,
    0x968C: 0x819C,
    0x968D: 0x6795,
    0x968E: 0x9BAA,
    0x968F: 0x67FE,
    0x9690: 0x9C52,
    0x9691: 0x685D,
    0x9692: 0x4EA6,
    0x9693: 0x4FE3,
    0x9694: 0x53C8,
    0x9695: 0x62B9,
    0x9696: 0x672B,
    0x9697: 0x6CAB,
    0x9698: 0x8FC4,
    0x9699: 0x4FAD,
    0x969A: 0x7E6D,
    0x969B: 0x9EBF,
    0x969C: 0x4E07,
    0x969D: 0x6162,
    0x969E: 0x6E80,
    0x969F: 0x6F2B,
    0x96A0: 0x8513,
    0x96A1: 0x5473,
    0x96A2: 0x672A,
    0x96A3: 0x9B45,
    0x96A4: 0x5DF3,
    0x96A5: 0x7B95,
    0x96A6: 0x5CAC,
    0x96A7: 0x5BC6,
    0x96A8: 0x871C,
    0x96A9: 0x6E4A,
    0x96AA: 0x84D1,
    0x96AB: 0x7A14,
    0x96AC: 0x8108,
    0x96AD: 0x5999,
    0x96AE: 0x7C8D,
    0x96AF: 0x6C11,
    0x96B0: 0x7720,
    0x96B1: 0x52D9,
    0x96B2: 0x5922,
    0x96B3: 0x7121,
    0x96B4: 0x725F,
    0x96B5: 0x77DB,
    0x96B6: 0x9727,
    0x96B7: 0x9D61,
    0x96B8: 0x690B,
    0x96B9: 0x5A7F,
    0x96BA: 0x5A18,
    0x96BB: 0x51A5,
    0x96BC: 0x540D,
    0x96BD: 0x547D,
    0x96BE: 0x660E,
    0x96BF: 0x76DF,
    0x96C0: 0x8FF7,
    0x96C1: 0x9298,
    0x96C2: 0x9CF4,
    0x96C3: 0x59EA,
    0x96C4: 0x725D,
    0x96C5: 0x6EC5,
    0x96C6: 0x514D,
    0x96C7: 0x68C9,
    0x96C8: 0x7DBF,
    0x96C9: 0x7DEC,
    0x96CA: 0x9762,
    0x96CB: 0x9EBA,
    0x96CC: 0x6478,
    0x96CD: 0x6A21,
    0x96CE: 0x8302,
    0x96CF: 0x5984,
    0x96D0: 0x5B5F,
    0x96D1: 0x6BDB,
    0x96D2: 0x731B,
    0x96D3: 0x76F2,
    0x96D4: 0x7DB2,
    0x96D5: 0x8017,
    0x96D6: 0x8499,
    0x96D7: 0x5132,
    0x96D8: 0x6728,
    0x96D9: 0x9ED9,
    0x96DA: 0x76EE,
    0x96DB: 0x6762,
    0x96DC: 0x52FF,
    0x96DD: 0x9905,
    0x96DE: 0x5C24,
    0x96DF: 0x623B,
    0x96E0: 0x7C7E,
    0x96E1: 0x8CB0,
    0x96E2: 0x554F,
    0x96E3: 0x60B6,
    0x96E4: 0x7D0B,
    0x96E5: 0x9580,
    0x96E6: 0x5301,
    0x96E7: 0x4E5F,
    0x96E8: 0x51B6,
    0x96E9: 0x591C,
    0x96EA: 0x723A,
    0x96EB: 0x8036,
    0x96EC: 0x91CE,
    0x96ED: 0x5F25,
    0x96EE: 0x77E2,
    0x96EF: 0x5384,
    0x96F0: 0x5F79,
    0x96F1: 0x7D04,
    0x96F2: 0x85AC,
    0x96F3: 0x8A33,
    0x96F4: 0x8E8D,
    0x96F5: 0x9756,
    0x96F6: 0x67F3,
    0x96F7: 0x85AE,
    0x96F8: 0x9453,
    0x96F9: 0x6109,
    0x96FA: 0x6108,
    0x96FB: 0x6CB9,
    0x96FC: 0x7652,
    0x9740: 0x8AED,
    0x9741: 0x8F38,
    0x9742: 0x552F,
    0x9743: 0x4F51,
    0x9744: 0x512A,
    0x9745: 0x52C7,
    0x9746: 0x53CB,
    0x9747: 0x5BA5,
    0x9748: 0x5E7D,
    0x9749: 0x60A0,
    0x974A: 0x6182,
    0x974B: 0x63D6,
    0x974C: 0x6709,
    0x974D: 0x67DA,
    0x974E: 0x6E67,
    0x974F: 0x6D8C,
    0x9750: 0x7336,
    0x9751: 0x7337,
    0x9752: 0x7531,
    0x9753: 0x7950,
    0x9754: 0x88D5,
    0x9755: 0x8A98,
    0x9756: 0x904A,
    0x9757: 0x9091,
    0x9758: 0x90F5,
    0x9759: 0x96C4,
    0x975A: 0x878D,
    0x975B: 0x5915,
    0x975C: 0x4E88,
    0x975D: 0x4F59,
    0x975E: 0x4E0E,
    0x975F: 0x8A89,
    0x9760: 0x8F3F,
    0x9761: 0x9810,
    0x9762: 0x50AD,
    0x9763: 0x5E7C,
    0x9764: 0x5996,
    0x9765: 0x5BB9,
    0x9766: 0x5EB8,
    0x9767: 0x63DA,
    0x9768: 0x63FA,
    0x9769: 0x64C1,
    0x976A: 0x66DC,
    0x976B: 0x694A,
    0x976C: 0x69D8,
    0x976D: 0x6D0B,
    0x976E: 0x6EB6,
    0x976F: 0x7194,
    0x9770: 0x7528,
    0x9771: 0x7AAF,
    0x9772: 0x7F8A,
    0x9773: 0x8000,
    0x9774: 0x8449,
    0x9775: 0x84C9,
    0x9776: 0x8981,
    0x9777: 0x8B21,
    0x9778: 0x8E0A,
    0x9779: 0x9065,
    0x977A: 0x967D,
    0x977B: 0x990A,
    0x977C: 0x617E,
    0x977D: 0x6291,
    0x977E: 0x6B32,
    0x9780: 0x6C83,
    0x9781: 0x6D74,
    0x9782: 0x7FCC,
    0x9783: 0x7FFC,
    0x9784: 0x6DC0,
    0x9785: 0x7F85,
    0x9786: 0x87BA,
    0x9787: 0x88F8,
    0x9788: 0x6765,
    0x9789: 0x83B1,
    0x978A: 0x983C,
    0x978B: 0x96F7,
    0x978C: 0x6D1B,
    0x978D: 0x7D61,
    0x978E: 0x843D,
    0x978F: 0x916A,
    0x9790: 0x4E71,
    0x9791: 0x5375,
    0x9792: 0x5D50,
    0x9793: 0x6B04,
    0x9794: 0x6FEB,
    0x9795: 0x85CD,
    0x9796: 0x862D,
    0x9797: 0x89A7,
    0x9798: 0x5229,
    0x9799: 0x540F,
    0x979A: 0x5C65,
    0x979B: 0x674E,
    0x979C: 0x68A8,
    0x979D: 0x7406,
    0x979E: 0x7483,
    0x979F: 0x75E2,
    0x97A0: 0x88CF,
    0x97A1: 0x88E1,
    0x97A2: 0x91CC,
    0x97A3: 0x96E2,
    0x97A4: 0x9678,
    0x97A5: 0x5F8B,
    0x97A6: 0x7387,
    0x97A7: 0x7ACB,
    0x97A8: 0x844E,
    0x97A9: 0x63A0,
    0x97AA: 0x7565,
    0x97AB: 0x5289,
    0x97AC: 0x6D41,
    0x97AD: 0x6E9C,
    0x97AE: 0x7409,
    0x97AF: 0x7559,
    0x97B0: 0x786B,
    0x97B1: 0x7C92,
    0x97B2: 0x9686,
    0x97B3: 0x7ADC,
    0x97B4: 0x9F8D,
    0x97B5: 0x4FB6,
    0x97B6: 0x616E,
    0x97B7: 0x65C5,
    0x97B8: 0x865C,
    0x97B9: 0x4E86,
    0x97BA: 0x4EAE,
    0x97BB: 0x50DA,
    0x97BC: 0x4E21,
    0x97BD: 0x51CC,
    0x97BE: 0x5BEE,
    0x97BF: 0x6599,
    0x97C0: 0x6881,
    0x97C1: 0x6DBC,
    0x97C2: 0x731F,
    0x97C3: 0x7642,
    0x97C4: 0x77AD,
    0x97C5: 0x7A1C,
    0x97C6: 0x7CE7,
    0x97C7: 0x826F,
    0x97C8: 0x8AD2,
    0x97C9: 0x907C,
    0x97CA: 0x91CF,
    0x97CB: 0x9675,
    0x97CC: 0x9818,
    0x97CD: 0x529B,
    0x97CE: 0x7DD1,
    0x97CF: 0x502B,
    0x97D0: 0x5398,
    0x97D1: 0x6797,
    0x97D2: 0x6DCB,
    0x97D3: 0x71D0,
    0x97D4: 0x7433,
    0x97D5: 0x81E8,
    0x97D6: 0x8F2A,
    0x97D7: 0x96A3,
    0x97D8: 0x9C57,
    0x97D9: 0x9E9F,
    0x97DA: 0x7460,
    0x97DB: 0x5841,
    0x97DC: 0x6D99,
    0x97DD: 0x7D2F,
    0x97DE: 0x985E,
    0x97DF: 0x4EE4,
    0x97E0: 0x4F36,
    0x97E1: 0x4F8B,
    0x97E2: 0x51B7,
    0x97E3: 0x52B1,
    0x97E4: 0x5DBA,
    0x97E5: 0x601C,
    0x97E6: 0x73B2,
    0x97E7: 0x793C,
    0x97E8: 0x82D3,
    0x97E9: 0x9234,
    0x97EA: 0x96B7,
    0x97EB: 0x96F6,
    0x97EC: 0x970A,
    0x97ED: 0x9E97,
    0x97EE: 0x9F62,
    0x97EF: 0x66A6,
    0x97F0: 0x6B74,
    0x97F1: 0x5217,
    0x97F2: 0x52A3,
    0x97F3: 0x70C8,
    0x97F4: 0x88C2,
    0x97F5: 0x5EC9,
    0x97F6: 0x604B,
    0x97F7: 0x6190,
    0x97F8: 0x6F23,
    0x97F9: 0x7149,
    0x97FA: 0x7C3E,
    0x97FB: 0x7DF4,
    0x97FC: 0x806F,
    0x9840: 0x84EE,
    0x9841: 0x9023,
    0x9842: 0x932C,
    0x9843: 0x5442,
    0x9844: 0x9B6F,
    0x9845: 0x6AD3,
    0x9846: 0x7089,
    0x9847: 0x8CC2,
    0x9848: 0x8DEF,
    0x9849: 0x9732,
    0x984A: 0x52B4,
    0x984B: 0x5A41,
    0x984C: 0x5ECA,
    0x984D: 0x5F04,
    0x984E: 0x6717,
    0x984F: 0x697C,
    0x9850: 0x6994,
    0x9851: 0x6D6A,
    0x9852: 0x6F0F,
    0x9853: 0x7262,
    0x9854: 0x72FC,
    0x9855: 0x7BED,
    0x9856: 0x8001,
    0x9857: 0x807E,
    0x9858: 0x874B,
    0x9859: 0x90CE,
    0x985A: 0x516D,
    0x985B: 0x9E93,
    0x985C: 0x7984,
    0x985D: 0x808B,
    0x985E: 0x9332,
    0x985F: 0x8AD6,
    0x9860: 0x502D,
    0x9861: 0x548C,
    0x9862: 0x8A71,
    0x9863: 0x6B6A,
    0x9864: 0x8CC4,
    0x9865: 0x8107,
    0x9866: 0x60D1,
    0x9867: 0x67A0,
    0x9868: 0x9DF2,
    0x9869: 0x4E99,
    0x986A: 0x4E98,
    0x986B: 0x9C10,
    0x986C: 0x8A6B,
    0x986D: 0x85C1,
    0x986E: 0x8568,
    0x986F: 0x6900,
    0x9870: 0x6E7E,
    0x9871: 0x7897,
    0x9872: 0x8155,
    0x989F: 0x5F0C,
    0x98A0: 0x4E10,
    0x98A1: 0x4E15,
    0x98A2: 0x4E2A,
    0x98A3: 0x4E31,
    0x98A4: 0x4E36,
    0x98A5: 0x4E3C,
    0x98A6: 0x4E3F,
    0x98A7: 0x4E42,
    0x98A8: 0x4E56,
    0x98A9: 0x4E58,
    0x98AA: 0x4E82,
    0x98AB: 0x4E85,
    0x98AC: 0x8C6B,
    0x98AD: 0x4E8A,
    0x98AE: 0x8212,
    0x98AF: 0x5F0D,
    0x98B0: 0x4E8E,
    0x98B1: 0x4E9E,
    0x98B2: 0x4E9F,
    0x98B3: 0x4EA0,
    0x98B4: 0x4EA2,
    0x98B5: 0x4EB0,
    0x98B6: 0x4EB3,
    0x98B7: 0x4EB6,
    0x98B8: 0x4ECE,
    0x98B9: 0x4ECD,
    0x98BA: 0x4EC4,
    0x98BB: 0x4EC6,
    0x98BC: 0x4EC2,
    0x98BD: 0x4ED7,
    0x98BE: 0x4EDE,
    0x98BF: 0x4EED,
    0x98C0: 0x4EDF,
    0x98C1: 0x4EF7,
    0x98C2: 0x4F09,
    0x98C3: 0x4F5A,
    0x98C4: 0x4F30,
    0x98C5: 0x4F5B,
    0x98C6: 0x4F5D,
    0x98C7: 0x4F57,
    0x98C8: 0x4F47,
    0x98C9: 0x4F76,
    0x98CA: 0x4F88,
    0x98CB: 0x4F8F,
    0x98CC: 0x4F98,
    0x98CD: 0x4F7B,
    0x98CE: 0x4F69,
    0x98CF: 0x4F70,
    0x98D0: 0x4F91,
    0x98D1: 0x4F6F,
    0x98D2: 0x4F86,
    0x98D3: 0x4F96,
    0x98D4: 0x5118,
    0x98D5: 0x4FD4,
    0x98D6: 0x4FDF,
    0x98D7: 0x4FCE,
    0x98D8: 0x4FD8,
    0x98D9: 0x4FDB,
    0x98DA: 0x4FD1,
    0x98DB: 0x4FDA,
    0x98DC: 0x4FD0,
    0x98DD: 0x4FE4,
    0x98DE: 0x4FE5,
    0x98DF: 0x501A,
    0x98E0: 0x5028,
    0x98E1: 0x5014,
    0x98E2: 0x502A,
    0x98E3: 0x5025,
    0x98E4: 0x5005,
    0x98E5: 0x4F1C,
    0x98E6: 0x4FF6,
    0x98E7: 0x5021,
    0x98E8: 0x5029,
    0x98E9: 0x502C,
    0x98EA: 0x4FFE,
    0x98EB: 0x4FEF,
    0x98EC: 0x5011,
    0x98ED: 0x5006,
    0x98EE: 0x5043,
    0x98EF: 0x5047,
    0x98F0: 0x6703,
    0x98F1: 0x5055,
    0x98F2: 0x5050,
    0x98F3: 0x5048,
    0x98F4: 0x505A,
    0x98F5: 0x5056,
    0x98F6: 0x506C,
    0x98F7: 0x5078,
    0x98F8: 0x5080,
    0x98F9: 0x509A,
    0x98FA: 0x5085,
    0x98FB: 0x50B4,
    0x98FC: 0x50B2,
    0x9940: 0x50C9,
    0x9941: 0x50CA,
    0x9942: 0x50B3,
    0x9943: 0x50C2,
    0x9944: 0x50D6,
    0x9945: 0x50DE,
    0x9946: 0x50E5,
    0x9947: 0x50ED,
    0x9948: 0x50E3,
    0x9949: 0x50EE,
    0x994A: 0x50F9,
    0x994B: 0x50F5,
    0x994C: 0x5109,
    0x994D: 0x5101,
    0x994E: 0x5102,
    0x994F: 0x5116,
    0x9950: 0x5115,
    0x9951: 0x5114,
    0x9952: 0x511A,
    0x9953: 0x5121,
    0x9954: 0x513A,
    0x9955: 0x5137,
    0x9956: 0x513C,
    0x9957: 0x513B,
    0x9958: 0x513F,
    0x9959: 0x5140,
    0x995A: 0x5152,
    0x995B: 0x514C,
    0x995C: 0x5154,
    0x995D: 0x5162,
    0x995E: 0x7AF8,
    0x995F: 0x5169,
    0x9960: 0x516A,
    0x9961: 0x516E,
    0x9962: 0x5180,
    0x9963: 0x5182,
    0x9964: 0x56D8,
    0x9965: 0x518C,
    0x9966: 0x5189,
    0x9967: 0x518F,
    0x9968: 0x5191,
    0x9969: 0x5193,
    0x996A: 0x5195,
    0x996B: 0x5196,
    0x996C: 0x51A4,
    0x996D: 0x51A6,
    0x996E: 0x51A2,
    0x996F: 0x51A9,
    0x9970: 0x51AA,
    0x9971: 0x51AB,
    0x9972: 0x51B3,
    0x9973: 0x51B1,
    0x9974: 0x51B2,
    0x9975: 0x51B0,
    0x9976: 0x51B5,
    0x9977: 0x51BD,
    0x9978: 0x51C5,
    0x9979: 0x51C9,
    0x997A: 0x51DB,
    0x997B: 0x51E0,
    0x997C: 0x8655,
    0x997D: 0x51E9,
    0x997E: 0x51ED,
    0x9980: 0x51F0,
    0x9981: 0x51F5,
    0x9982: 0x51FE,
    0x9983: 0x5204,
    0x9984: 0x520B,
    0x9985: 0x5214,
    0x9986: 0x520E,
    0x9987: 0x5227,
    0x9988: 0x522A,
    0x9989: 0x522E,
    0x998A: 0x5233,
    0x998B: 0x5239,
    0x998C: 0x524F,
    0x998D: 0x5244,
    0x998E: 0x524B,
    0x998F: 0x524C,
    0x9990: 0x525E,
    0x9991: 0x5254,
    0x9992: 0x526A,
    0x9993: 0x5274,
    0x9994: 0x5269,
    0x9995: 0x5273,
    0x9996: 0x527F,
    0x9997: 0x527D,
    0x9998: 0x528D,
    0x9999: 0x5294,
    0x999A: 0x5292,
    0x999B: 0x5271,
    0x999C: 0x5288,
    0x999D: 0x5291,
    0x999E: 0x8FA8,
    0x999F: 0x8FA7,
    0x99A0: 0x52AC,
    0x99A1: 0x52AD,
    0x99A2: 0x52BC,
    0x99A3: 0x52B5,
    0x99A4: 0x52C1,
    0x99A5: 0x52CD,
    0x99A6: 0x52D7,
    0x99A7: 0x52DE,
    0x99A8: 0x52E3,
    0x99A9: 0x52E6,
    0x99AA: 0x98ED,
    0x99AB: 0x52E0,
    0x99AC: 0x52F3,
    0x99AD: 0x52F5,
    0x99AE: 0x52F8,
    0x99AF: 0x52F9,
    0x99B0: 0x5306,
    0x99B1: 0x5308,
    0x99B2: 0x7538,
    0x99B3: 0x530D,
    0x99B4: 0x5310,
    0x99B5: 0x530F,
    0x99B6: 0x5315,
    0x99B7: 0x531A,
    0x99B8: 0x5323,
    0x99B9: 0x532F,
    0x99BA: 0x5331,
    0x99BB: 0x5333,
    0x99BC: 0x5338,
    0x99BD: 0x5340,
    0x99BE: 0x5346,
    0x99BF: 0x5345,
    0x99C0: 0x4E17,
    0x99C1: 0x5349,
    0x99C2: 0x534D,
    0x99C3: 0x51D6,
    0x99C4: 0x535E,
    0x99C5: 0x5369,
    0x99C6: 0x536E,
    0x99C7: 0x5918,
    0x99C8: 0x537B,
    0x99C9: 0x5377,
    0x99CA: 0x5382,
    0x99CB: 0x5396,
    0x99CC: 0x53A0,
    0x99CD: 0x53A6,
    0x99CE: 0x53A5,
    0x99CF: 0x53AE,
    0x99D0: 0x53B0,
    0x99D1: 0x53B6,
    0x99D2: 0x53C3,
    0x99D3: 0x7C12,
    0x99D4: 0x96D9,
    0x99D5: 0x53DF,
    0x99D6: 0x66FC,
    0x99D7: 0x71EE,
    0x99D8: 0x53EE,
    0x99D9: 0x53E8,
    0x99DA: 0x53ED,
    0x99DB: 0x53FA,
    0x99DC: 0x5401,
    0x99DD: 0x543D,
    0x99DE: 0x5440,
    0x99DF: 0x542C,
    0x99E0: 0x542D,
    0x99E1: 0x543C,
    0x99E2: 0x542E,
    0x99E3: 0x5436,
    0x99E4: 0x5429,
    0x99E5: 0x541D,
    0x99E6: 0x544E,
    0x99E7: 0x548F,
    0x99E8: 0x5475,
    0x99E9: 0x548E,
    0x99EA: 0x545F,
    0x99EB: 0x5471,
    0x99EC: 0x5477,
    0x99ED: 0x5470,
    0x99EE: 0x5492,
    0x99EF: 0x547B,
    0x99F0: 0x5480,
    0x99F1: 0x5476,
    0x99F2: 0x5484,
    0x99F3: 0x5490,
    0x99F4: 0x5486,
    0x99F5: 0x54C7,
    0x99F6: 0x54A2,
    0x99F7: 0x54B8,
    0x99F8: 0x54A5,
    0x99F9: 0x54AC,
    0x99FA: 0x54C4,
    0x99FB: 0x54C8,
    0x99FC: 0x54A8,
    0x9A40: 0x54AB,
    0x9A41: 0x54C2,
    0x9A42: 0x54A4,
    0x9A43: 0x54BE,
    0x9A44: 0x54BC,
    0x9A45: 0x54D8,
    0x9A46: 0x54E5,
    0x9A47: 0x54E6,
    0x9A48: 0x550F,
    0x9A49: 0x5514,
    0x9A4A: 0x54FD,
    0x9A4B: 0x54EE,
    0x9A4C: 0x54ED,
    0x9A4D: 0x54FA,
    0x9A4E: 0x54E2,
    0x9A4F: 0x5539,
    0x9A50: 0x5540,
    0x9A51: 0x5563,
    0x9A52: 0x554C,
    0x9A53: 0x552E,
    0x9A54: 0x555C,
    0x9A55: 0x5545,
    0x9A56: 0x5556,
    0x9A57: 0x5557,
    0x9A58: 0x5538,
    0x9A59: 0x5533,
    0x9A5A: 0x555D,
    0x9A5B: 0x5599,
    0x9A5C: 0x5580,
    0x9A5D: 0x54AF,
    0x9A5E: 0x558A,
    0x9A5F: 0x559F,
    0x9A60: 0x557B,
    0x9A61: 0x557E,
    0x9A62: 0x5598,
    0x9A63: 0x559E,
    0x9A64: 0x55AE,
    0x9A65: 0x557C,
    0x9A66: 0x5583,
    0x9A67: 0x55A9,
    0x9A68: 0x5587,
    0x9A69: 0x55A8,
    0x9A6A: 0x55DA,
    0x9A6B: 0x55C5,
    0x9A6C: 0x55DF,
    0x9A6D: 0x55C4,
    0x9A6E: 0x55DC,
    0x9A6F: 0x55E4,
    0x9A70: 0x55D4,
    0x9A71: 0x5614,
    0x9A72: 0x55F7,
    0x9A73: 0x5616,
    0x9A74: 0x55FE,
    0x9A75: 0x55FD,
    0x9A76: 0x561B,
    0x9A77: 0x55F9,
    0x9A78: 0x564E,
    0x9A79: 0x5650,
    0x9A7A: 0x71DF,
    0x9A7B: 0x5634,
    0x9A7C: 0x5636,
    0x9A7D: 0x5632,
    0x9A7E: 0x5638,
    0x9A80: 0x566B,
    0x9A81: 0x5664,
    0x9A82: 0x562F,
    0x9A83: 0x566C,
    0x9A84: 0x566A,
    0x9A85: 0x5686,
    0x9A86: 0x5680,
    0x9A87: 0x568A,
    0x9A88: 0x56A0,
    0x9A89: 0x5694,
    0x9A8A: 0x568F,
    0x9A8B: 0x56A5,
    0x9A8C: 0x56AE,
    0x9A8D: 0x56B6,
    0x9A8E: 0x56B4,
    0x9A8F: 0x56C2,
    0x9A90: 0x56BC,
    0x9A91: 0x56C1,
    0x9A92: 0x56C3,
    0x9A93: 0x56C0,
    0x9A94: 0x56C8,
    0x9A95: 0x56CE,
    0x9A96: 0x56D1,
    0x9A97: 0x56D3,
    0x9A98: 0x56D7,
    0x9A99: 0x56EE,
    0x9A9A: 0x56F9,
    0x9A9B: 0x5700,
    0x9A9C: 0x56FF,
    0x9A9D: 0x5704,
    0x9A9E: 0x5709,
    0x9A9F: 0x5708,
    0x9AA0: 0x570B,
    0x9AA1: 0x570D,
    0x9AA2: 0x5713,
    0x9AA3: 0x5718,
    0x9AA4: 0x5716,
    0x9AA5: 0x55C7,
    0x9AA6: 0x571C,
    0x9AA7: 0x5726,
    0x9AA8: 0x5737,
    0x9AA9: 0x5738,
    0x9AAA: 0x574E,
    0x9AAB: 0x573B,
    0x9AAC: 0x5740,
    0x9AAD: 0x574F,
    0x9AAE: 0x5769,
    0x9AAF: 0x57C0,
    0x9AB0: 0x5788,
    0x9AB1: 0x5761,
    0x9AB2: 0x577F,
    0x9AB3: 0x5789,
    0x9AB4: 0x5793,
    0x9AB5: 0x57A0,
    0x9AB6: 0x57B3,
    0x9AB7: 0x57A4,
    0x9AB8: 0x57AA,
    0x9AB9: 0x57B0,
    0x9ABA: 0x57C3,
    0x9ABB: 0x57C6,
    0x9ABC: 0x57D4,
    0x9ABD: 0x57D2,
    0x9ABE: 0x57D3,
    0x9ABF: 0x580A,
    0x9AC0: 0x57D6,
    0x9AC1: 0x57E3,
    0x9AC2: 0x580B,
    0x9AC3: 0x5819,
    0x9AC4: 0x581D,
    0x9AC5: 0x5872,
    0x9AC6: 0x5821,
    0x9AC7: 0x5862,
    0x9AC8: 0x584B,
    0x9AC9: 0x5870,
    0x9ACA: 0x6BC0,
    0x9ACB: 0x5852,
    0x9ACC: 0x583D,
    0x9ACD: 0x5879,
    0x9ACE: 0x5885,
    0x9ACF: 0x58B9,
    0x9AD0: 0x589F,
    0x9AD1: 0x58AB,
    0x9AD2: 0x58BA,
    0x9AD3: 0x58DE,
    0x9AD4: 0x58BB,
    0x9AD5: 0x58B8,
    0x9AD6: 0x58AE,
    0x9AD7: 0x58C5,
    0x9AD8: 0x58D3,
    0x9AD9: 0x58D1,
    0x9ADA: 0x58D7,
    0x9ADB: 0x58D9,
    0x9ADC: 0x58D8,
    0x9ADD: 0x58E5,
    0x9ADE: 0x58DC,
    0x9ADF: 0x58E4,
    0x9AE0: 0x58DF,
    0x9AE1: 0x58EF,
    0x9AE2: 0x58FA,
    0x9AE3: 0x58F9,
    0x9AE4: 0x58FB,
    0x9AE5: 0x58FC,
    0x9AE6: 0x58FD,
    0x9AE7: 0x5902,
    0x9AE8: 0x590A,
    0x9AE9: 0x5910,
    0x9AEA: 0x591B,
    0x9AEB: 0x68A6,
    0x9AEC: 0x5925,
    0x9AED: 0x592C,
    0x9AEE: 0x592D,
    0x9AEF: 0x5932,
    0x9AF0: 0x5938,
    0x9AF1: 0x593E,
    0x9AF2: 0x7AD2,
    0x9AF3: 0x5955,
    0x9AF4: 0x5950,
    0x9AF5: 0x594E,
    0x9AF6: 0x595A,
    0x9AF7: 0x5958,
    0x9AF8: 0x5962,
    0x9AF9: 0x5960,
    0x9AFA: 0x5967,
    0x9AFB: 0x596C,
    0x9AFC: 0x5969,
    0x9B40: 0x5978,
    0x9B41: 0x5981,
    0x9B42: 0x599D,
    0x9B43: 0x4F5E,
    0x9B44: 0x4FAB,
    0x9B45: 0x59A3,
    0x9B46: 0x59B2,
    0x9B47: 0x59C6,
    0x9B48: 0x59E8,
    0x9B49: 0x59DC,
    0x9B4A: 0x598D,
    0x9B4B: 0x59D9,
    0x9B4C: 0x59DA,
    0x9B4D: 0x5A25,
    0x9B4E: 0x5A1F,
    0x9B4F: 0x5A11,
    0x9B50: 0x5A1C,
    0x9B51: 0x5A09,
    0x9B52: 0x5A1A,
    0x9B53: 0x5A40,
    0x9B54: 0x5A6C,
    0x9B55: 0x5A49,
    0x9B56: 0x5A35,
    0x9B57: 0x5A36,
    0x9B58: 0x5A62,
    0x9B59: 0x5A6A,
    0x9B5A: 0x5A9A,
    0x9B5B: 0x5ABC,
    0x9B5C: 0x5ABE,
    0x9B5D: 0x5ACB,
    0x9B5E: 0x5AC2,
    0x9B5F: 0x5ABD,
    0x9B60: 0x5AE3,
    0x9B61: 0x5AD7,
    0x9B62: 0x5AE6,
    0x9B63: 0x5AE9,
    0x9B64: 0x5AD6,
    0x9B65: 0x5AFA,
    0x9B66: 0x5AFB,
    0x9B67: 0x5B0C,
    0x9B68: 0x5B0B,
    0x9B69: 0x5B16,
    0x9B6A: 0x5B32,
    0x9B6B: 0x5AD0,
    0x9B6C: 0x5B2A,
    0x9B6D: 0x5B36,
    0x9B6E: 0x5B3E,
    0x9B6F: 0x5B43,
    0x9B70: 0x5B45,
    0x9B71: 0x5B40,
    0x9B72: 0x5B51,
    0x9B73: 0x5B55,
    0x9B74: 0x5B5A,
    0x9B75: 0x5B5B,
    0x9B76: 0x5B65,
    0x9B77: 0x5B69,
    0x9B78: 0x5B70,
    0x9B79: 0x5B73,
    0x9B7A: 0x5B75,
    0x9B7B: 0x5B78,
    0x9B7C: 0x6588,
    0x9B7D: 0x5B7A,
    0x9B7E: 0x5B80,
    0x9B80: 0x5B83,
    0x9B81: 0x5BA6,
    0x9B82: 0x5BB8,
    0x9B83: 0x5BC3,
    0x9B84: 0x5BC7,
    0x9B85: 0x5BC9,
    0x9B86: 0x5BD4,
    0x9B87: 0x5BD0,
    0x9B88: 0x5BE4,
    0x9B89: 0x5BE6,
    0x9B8A: 0x5BE2,
    0x9B8B: 0x5BDE,
    0x9B8C: 0x5BE5,
    0x9B8D: 0x5BEB,
    0x9B8E: 0x5BF0,
    0x9B8F: 0x5BF6,
    0x9B90: 0x5BF3,
    0x9B91: 0x5C05,
    0x9B92: 0x5C07,
    0x9B93: 0x5C08,
    0x9B94: 0x5C0D,
    0x9B95: 0x5C13,
    0x9B96: 0x5C20,
    0x9B97: 0x5C22,
    0x9B98: 0x5C28,
    0x9B99: 0x5C38,
    0x9B9A: 0x5C39,
    0x9B9B: 0x5C41,
    0x9B9C: 0x5C46,
    0x9B9D: 0x5C4E,
    0x9B9E: 0x5C53,
    0x9B9F: 0x5C50,
    0x9BA0: 0x5C4F,
    0x9BA1: 0x5B71,
    0x9BA2: 0x5C6C,
    0x9BA3: 0x5C6E,
    0x9BA4: 0x4E62,
    0x9BA5: 0x5C76,
    0x9BA6: 0x5C79,
    0x9BA7: 0x5C8C,
    0x9BA8: 0x5C91,
    0x9BA9: 0x5C94,
    0x9BAA: 0x599B,
    0x9BAB: 0x5CAB,
    0x9BAC: 0x5CBB,
    0x9BAD: 0x5CB6,
    0x9BAE: 0x5CBC,
    0x9BAF: 0x5CB7,
    0x9BB0: 0x5CC5,
    0x9BB1: 0x5CBE,
    0x9BB2: 0x5CC7,
    0x9BB3: 0x5CD9,
    0x9BB4: 0x5CE9,
    0x9BB5: 0x5CFD,
    0x9BB6: 0x5CFA,
    0x9BB7: 0x5CED,
    0x9BB8: 0x5D8C,
    0x9BB9: 0x5CEA,
    0x9BBA: 0x5D0B,
    0x9BBB: 0x5D15,
    0x9BBC: 0x5D17,
    0x9BBD: 0x5D5C,
    0x9BBE: 0x5D1F,
    0x9BBF: 0x5D1B,
    0x9BC0: 0x5D11,
    0x9BC1: 0x5D14,
    0x9BC2: 0x5D22,
    0x9BC3: 0x5D1A,
    0x9BC4: 0x5D19,
    0x9BC5: 0x5D18,
    0x9BC6: 0x5D4C,
    0x9BC7: 0x5D52,
    0x9BC8: 0x5D4E,
    0x9BC9: 0x5D4B,
    0x9BCA: 0x5D6C,
    0x9BCB: 0x5D73,
    0x9BCC: 0x5D76,
    0x9BCD: 0x5D87,
    0x9BCE: 0x5D84,
    0x9BCF: 0x5D82,
    0x9BD0: 0x5DA2,
    0x9BD1: 0x5D9D,
    0x9BD2: 0x5DAC,
    0x9BD3: 0x5DAE,
    0x9BD4: 0x5DBD,
    0x9BD5: 0x5D90,
    0x9BD6: 0x5DB7,
    0x9BD7: 0x5DBC,
    0x9BD8: 0x5DC9,
    0x9BD9: 0x5DCD,
    0x9BDA: 0x5DD3,
    0x9BDB: 0x5DD2,
    0x9BDC: 0x5DD6,
    0x9BDD: 0x5DDB,
    0x9BDE: 0x5DEB,
    0x9BDF: 0x5DF2,
    0x9BE0: 0x5DF5,
    0x9BE1: 0x5E0B,
    0x9BE2: 0x5E1A,
    0x9BE3: 0x5E19,
    0x9BE4: 0x5E11,
    0x9BE5: 0x5E1B,
    0x9BE6: 0x5E36,
    0x9BE7: 0x5E37,
    0x9BE8: 0x5E44,
    0x9BE9: 0x5E43,
    0x9BEA: 0x5E40,
    0x9BEB: 0x5E4E,
    0x9BEC: 0x5E57,
    0x9BED: 0x5E54,
    0x9BEE: 0x5E5F,
    0x9BEF: 0x5E62,
    0x9BF0: 0x5E64,
    0x9BF1: 0x5E47,
    0x9BF2: 0x5E75,
    0x9BF3: 0x5E76,
    0x9BF4: 0x5E7A,
    0x9BF5: 0x9EBC,
    0x9BF6: 0x5E7F,
    0x9BF7: 0x5EA0,
    0x9BF8: 0x5EC1,
    0x9BF9: 0x5EC2,
    0x9BFA: 0x5EC8,
    0x9BFB: 0x5ED0,
    0x9BFC: 0x5ECF,
    0x9C40: 0x5ED6,
    0x9C41: 0x5EE3,
    0x9C42: 0x5EDD,
    0x9C43: 0x5EDA,
    0x9C44: 0x5EDB,
    0x9C45: 0x5EE2,
    0x9C46: 0x5EE1,
    0x9C47: 0x5EE8,
    0x9C48: 0x5EE9,
    0x9C49: 0x5EEC,
    0x9C4A: 0x5EF1,
    0x9C4B: 0x5EF3,
    0x9C4C: 0x5EF0,
    0x9C4D: 0x5EF4,
    0x9C4E: 0x5EF8,
    0x9C4F: 0x5EFE,
    0x9C50: 0x5F03,
    0x9C51: 0x5F09,
    0x9C52: 0x5F5D,
    0x9C53: 0x5F5C,
    0x9C54: 0x5F0B,
    0x9C55: 0x5F11,
    0x9C56: 0x5F16,
    0x9C57: 0x5F29,
    0x9C58: 0x5F2D,
    0x9C59: 0x5F38,
    0x9C5A: 0x5F41,
    0x9C5B: 0x5F48,
    0x9C5C: 0x5F4C,
    0x9C5D: 0x5F4E,
    0x9C5E: 0x5F2F,
    0x9C5F: 0x5F51,
    0x9C60: 0x5F56,
    0x9C61: 0x5F57,
    0x9C62: 0x5F59,
    0x9C63: 0x5F61,
    0x9C64: 0x5F6D,
    0x9C65: 0x5F73,
    0x9C66: 0x5F77,
    0x9C67: 0x5F83,
    0x9C68: 0x5F82,
    0x9C69: 0x5F7F,
    0x9C6A: 0x5F8A,
    0x9C6B: 0x5F88,
    0x9C6C: 0x5F91,
    0x9C6D: 0x5F87,
    0x9C6E: 0x5F9E,
    0x9C6F: 0x5F99,
    0x9C70: 0x5F98,
    0x9C71: 0x5FA0,
    0x9C72: 0x5FA8,
    0x9C73: 0x5FAD,
    0x9C74: 0x5FBC,
    0x9C75: 0x5FD6,
    0x9C76: 0x5FFB,
    0x9C77: 0x5FE4,
    0x9C78: 0x5FF8,
    0x9C79: 0x5FF1,
    0x9C7A: 0x5FDD,
    0x9C7B: 0x60B3,
    0x9C7C: 0x5FFF,
    0x9C7D: 0x6021,
    0x9C7E: 0x6060,
    0x9C80: 0x6019,
    0x9C81: 0x6010,
    0x9C82: 0x6029,
    0x9C83: 0x600E,
    0x9C84: 0x6031,
    0x9C85: 0x601B,
    0x9C86: 0x6015,
    0x9C87: 0x602B,
    0x9C88: 0x6026,
    0x9C89: 0x600F,
    0x9C8A: 0x603A,
    0x9C8B: 0x605A,
    0x9C8C: 0x6041,
    0x9C8D: 0x606A,
    0x9C8E: 0x6077,
    0x9C8F: 0x605F,
    0x9C90: 0x604A,
    0x9C91: 0x6046,
    0x9C92: 0x604D,
    0x9C93: 0x6063,
    0x9C94: 0x6043,
    0x9C95: 0x6064,
    0x9C96: 0x6042,
    0x9C97: 0x606C,
    0x9C98: 0x606B,
    0x9C99: 0x6059,
    0x9C9A: 0x6081,
    0x9C9B: 0x608D,
    0x9C9C: 0x60E7,
    0x9C9D: 0x6083,
    0x9C9E: 0x609A,
    0x9C9F: 0x6084,
    0x9CA0: 0x609B,
    0x9CA1: 0x6096,
    0x9CA2: 0x6097,
    0x9CA3: 0x6092,
    0x9CA4: 0x60A7,
    0x9CA5: 0x608B,
    0x9CA6: 0x60E1,
    0x9CA7: 0x60B8,
    0x9CA8: 0x60E0,
    0x9CA9: 0x60D3,
    0x9CAA: 0x60B4,
    0x9CAB: 0x5FF0,
    0x9CAC: 0x60BD,
    0x9CAD: 0x60C6,
    0x9CAE: 0x60B5,
    0x9CAF: 0x60D8,
    0x9CB0: 0x614D,
    0x9CB1: 0x6115,
    0x9CB2: 0x6106,
    0x9CB3: 0x60F6,
    0x9CB4: 0x60F7,
    0x9CB5: 0x6100,
    0x9CB6: 0x60F4,
    0x9CB7: 0x60FA,
    0x9CB8: 0x6103,
    0x9CB9: 0x6121,
    0x9CBA: 0x60FB,
    0x9CBB: 0x60F1,
    0x9CBC: 0x610D,
    0x9CBD: 0x610E,
    0x9CBE: 0x6147,
    0x9CBF: 0x613E,
    0x9CC0: 0x6128,
    0x9CC1: 0x6127,
    0x9CC2: 0x614A,
    0x9CC3: 0x613F,
    0x9CC4: 0x613C,
    0x9CC5: 0x612C,
    0x9CC6: 0x6134,
    0x9CC7: 0x613D,
    0x9CC8: 0x6142,
    0x9CC9: 0x6144,
    0x9CCA: 0x6173,
    0x9CCB: 0x6177,
    0x9CCC: 0x6158,
    0x9CCD: 0x6159,
    0x9CCE: 0x615A,
    0x9CCF: 0x616B,
    0x9CD0: 0x6174,
    0x9CD1: 0x616F,
    0x9CD2: 0x6165,
    0x9CD3: 0x6171,
    0x9CD4: 0x615F,
    0x9CD5: 0x615D,
    0x9CD6: 0x6153,
    0x9CD7: 0x6175,
    0x9CD8: 0x6199,
    0x9CD9: 0x6196,
    0x9CDA: 0x6187,
    0x9CDB: 0x61AC,
    0x9CDC: 0x6194,
    0x9CDD: 0x619A,
    0x9CDE: 0x618A,
    0x9CDF: 0x6191,
    0x9CE0: 0x61AB,
    0x9CE1: 0x61AE,
    0x9CE2: 0x61CC,
    0x9CE3: 0x61CA,
    0x9CE4: 0x61C9,
    0x9CE5: 0x61F7,
    0x9CE6: 0x61C8,
    0x9CE7: 0x61C3,
    0x9CE8: 0x61C6,
    0x9CE9: 0x61BA,
    0x9CEA: 0x61CB,
    0x9CEB: 0x7F79,
    0x9CEC: 0x61CD,
    0x9CED: 0x61E6,
    0x9CEE: 0x61E3,
    0x9CEF: 0x61F6,
    0x9CF0: 0x61FA,
    0x9CF1: 0x61F4,
    0x9CF2: 0x61FF,
    0x9CF3: 0x61FD,
    0x9CF4: 0x61FC,
    0x9CF5: 0x61FE,
    0x9CF6: 0x6200,
    0x9CF7: 0x6208,
    0x9CF8: 0x6209,
    0x9CF9: 0x620D,
    0x9CFA: 0x620C,
    0x9CFB: 0x6214,
    0x9CFC: 0x621B,
    0x9D40: 0x621E,
    0x9D41: 0x6221,
    0x9D42: 0x622A,
    0x9D43: 0x622E,
    0x9D44: 0x6230,
    0x9D45: 0x6232,
    0x9D46: 0x6233,
    0x9D47: 0x6241,
    0x9D48: 0x624E,
    0x9D49: 0x625E,
    0x9D4A: 0x6263,
    0x9D4B: 0x625B,
    0x9D4C: 0x6260,
    0x9D4D: 0x6268,
    0x9D4E: 0x627C,
    0x9D4F: 0x6282,
    0x9D50: 0x6289,
    0x9D51: 0x627E,
    0x9D52: 0x6292,
    0x9D53: 0x6293,
    0x9D54: 0x6296,
    0x9D55: 0x62D4,
    0x9D56: 0x6283,
    0x9D57: 0x6294,
    0x9D58: 0x62D7,
    0x9D59: 0x62D1,
    0x9D5A: 0x62BB,
    0x9D5B: 0x62CF,
    0x9D5C: 0x62FF,
    0x9D5D: 0x62C6,
    0x9D5E: 0x64D4,
    0x9D5F: 0x62C8,
    0x9D60: 0x62DC,
    0x9D61: 0x62CC,
    0x9D62: 0x62CA,
    0x9D63: 0x62C2,
    0x9D64: 0x62C7,
    0x9D65: 0x629B,
    0x9D66: 0x62C9,
    0x9D67: 0x630C,
    0x9D68: 0x62EE,
    0x9D69: 0x62F1,
    0x9D6A: 0x6327,
    0x9D6B: 0x6302,
    0x9D6C: 0x6308,
    0x9D6D: 0x62EF,
    0x9D6E: 0x62F5,
    0x9D6F: 0x6350,
    0x9D70: 0x633E,
    0x9D71: 0x634D,
    0x9D72: 0x641C,
    0x9D73: 0x634F,
    0x9D74: 0x6396,
    0x9D75: 0x638E,
    0x9D76: 0x6380,
    0x9D77: 0x63AB,
    0x9D78: 0x6376,
    0x9D79: 0x63A3,
    0x9D7A: 0x638F,
    0x9D7B: 0x6389,
    0x9D7C: 0x639F,
    0x9D7D: 0x63B5,
    0x9D7E: 0x636B,
    0x9D80: 0x6369,
    0x9D81: 0x63BE,
    0x9D82: 0x63E9,
    0x9D83: 0x63C0,
    0x9D84: 0x63C6,
    0x9D85: 0x63E3,
    0x9D86: 0x63C9,
    0x9D87: 0x63D2,
    0x9D88: 0x63F6,
    0x9D89: 0x63C4,
    0x9D8A: 0x6416,
    0x9D8B: 0x6434,
    0x9D8C: 0x6406,
    0x9D8D: 0x6413,
    0x9D8E: 0x6426,
    0x9D8F: 0x6436,
    0x9D90: 0x651D,
    0x9D91: 0x6417,
    0x9D92: 0x6428,
    0x9D93: 0x640F,
    0x9D94: 0x6467,
    0x9D95: 0x646F,
    0x9D96: 0x6476,
    0x9D97: 0x644E,
    0x9D98: 0x652A,
    0x9D99: 0x6495,
    0x9D9A: 0x6493,
    0x9D9B: 0x64A5,
    0x9D9C: 0x64A9,
    0x9D9D: 0x6488,
    0x9D9E: 0x64BC,
    0x9D9F: 0x64DA,
    0x9DA0: 0x64D2,
    0x9DA1: 0x64C5,
    0x9DA2: 0x64C7,
    0x9DA3: 0x64BB,
    0x9DA4: 0x64D8,
    0x9DA5: 0x64C2,
    0x9DA6: 0x64F1,
    0x9DA7: 0x64E7,
    0x9DA8: 0x8209,
    0x9DA9: 0x64E0,
    0x9DAA: 0x64E1,
    0x9DAB: 0x62AC,
    0x9DAC: 0x64E3,
    0x9DAD: 0x64EF,
    0x9DAE: 0x652C,
    0x9DAF: 0x64F6,
    0x9DB0: 0x64F4,
    0x9DB1: 0x64F2,
    0x9DB2: 0x64FA,
    0x9DB3: 0x6500,
    0x9DB4: 0x64FD,
    0x9DB5: 0x6518,
    0x9DB6: 0x651C,
    0x9DB7: 0x6505,
    0x9DB8: 0x6524,
    0x9DB9: 0x6523,
    0x9DBA: 0x652B,
    0x9DBB: 0x6534,
    0x9DBC: 0x6535,
    0x9DBD: 0x6537,
    0x9DBE: 0x6536,
    0x9DBF: 0x6538,
    0x9DC0: 0x754B,
    0x9DC1: 0x6548,
    0x9DC2: 0x6556,
    0x9DC3: 0x6555,
    0x9DC4: 0x654D,
    0x9DC5: 0x6558,
    0x9DC6: 0x655E,
    0x9DC7: 0x655D,
    0x9DC8: 0x6572,
    0x9DC9: 0x6578,
    0x9DCA: 0x6582,
    0x9DCB: 0x6583,
    0x9DCC: 0x8B8A,
    0x9DCD: 0x659B,
    0x9DCE: 0x659F,
    0x9DCF: 0x65AB,
    0x9DD0: 0x65B7,
    0x9DD1: 0x65C3,
    0x9DD2: 0x65C6,
    0x9DD3: 0x65C1,
    0x9DD4: 0x65C4,
    0x9DD5: 0x65CC,
    0x9DD6: 0x65D2,
    0x9DD7: 0x65DB,
    0x9DD8: 0x65D9,
    0x9DD9: 0x65E0,
    0x9DDA: 0x65E1,
    0x9DDB: 0x65F1,
    0x9DDC: 0x6772,
    0x9DDD: 0x660A,
    0x9DDE: 0x6603,
    0x9DDF: 0x65FB,
    0x9DE0: 0x6773,
    0x9DE1: 0x6635,
    0x9DE2: 0x6636,
    0x9DE3: 0x6634,
    0x9DE4: 0x661C,
    0x9DE5: 0x664F,
    0x9DE6: 0x6644,
    0x9DE7: 0x6649,
    0x9DE8: 0x6641,
    0x9DE9: 0x665E,
    0x9DEA: 0x665D,
    0x9DEB: 0x6664,
    0x9DEC: 0x6667,
    0x9DED: 0x6668,
    0x9DEE: 0x665F,
    0x9DEF: 0x6662,
    0x9DF0: 0x6670,
    0x9DF1: 0x6683,
    0x9DF2: 0x6688,
    0x9DF3: 0x668E,
    0x9DF4: 0x6689,
    0x9DF5: 0x6684,
    0x9DF6: 0x6698,
    0x9DF7: 0x669D,
    0x9DF8: 0x66C1,
    0x9DF9: 0x66B9,
    0x9DFA: 0x66C9,
    0x9DFB: 0x66BE,
    0x9DFC: 0x66BC,
    0x9E40: 0x66C4,
    0x9E41: 0x66B8,
    0x9E42: 0x66D6,
    0x9E43: 0x66DA,
    0x9E44: 0x66E0,
    0x9E45: 0x663F,
    0x9E46: 0x66E6,
    0x9E47: 0x66E9,
    0x9E48: 0x66F0,
    0x9E49: 0x66F5,
    0x9E4A: 0x66F7,
    0x9E4B: 0x670F,
    0x9E4C: 0x6716,
    0x9E4D: 0x671E,
    0x9E4E: 0x6726,
    0x9E4F: 0x6727,
    0x9E50: 0x9738,
    0x9E51: 0x672E,
    0x9E52: 0x673F,
    0x9E53: 0x6736,
    0x9E54: 0x6741,
    0x9E55: 0x6738,
    0x9E56: 0x6737,
    0x9E57: 0x6746,
    0x9E58: 0x675E,
    0x9E59: 0x6760,
    0x9E5A: 0x6759,
    0x9E5B: 0x6763,
    0x9E5C: 0x6764,
    0x9E5D: 0x6789,
    0x9E5E: 0x6770,
    0x9E5F: 0x67A9,
    0x9E60: 0x677C,
    0x9E61: 0x676A,
    0x9E62: 0x678C,
    0x9E63: 0x678B,
    0x9E64: 0x67A6,
    0x9E65: 0x67A1,
    0x9E66: 0x6785,
    0x9E67: 0x67B7,
    0x9E68: 0x67EF,
    0x9E69: 0x67B4,
    0x9E6A: 0x67EC,
    0x9E6B: 0x67B3,
    0x9E6C: 0x67E9,
    0x9E6D: 0x67B8,
    0x9E6E: 0x67E4,
    0x9E6F: 0x67DE,
    0x9E70: 0x67DD,
    0x9E71: 0x67E2,
    0x9E72: 0x67EE,
    0x9E73: 0x67B9,
    0x9E74: 0x67CE,
    0x9E75: 0x67C6,
    0x9E76: 0x67E7,
    0x9E77: 0x6A9C,
    0x9E78: 0x681E,
    0x9E79: 0x6846,
    0x9E7A: 0x6829,
    0x9E7B: 0x6840,
    0x9E7C: 0x684D,
    0x9E7D: 0x6832,
    0x9E7E: 0x684E,
    0x9E80: 0x68B3,
    0x9E81: 0x682B,
    0x9E82: 0x6859,
    0x9E83: 0x6863,
    0x9E84: 0x6877,
    0x9E85: 0x687F,
    0x9E86: 0x689F,
    0x9E87: 0x688F,
    0x9E88: 0x68AD,
    0x9E89: 0x6894,
    0x9E8A: 0x689D,
    0x9E8B: 0x689B,
    0x9E8C: 0x6883,
    0x9E8D: 0x6AAE,
    0x9E8E: 0x68B9,
    0x9E8F: 0x6874,
    0x9E90: 0x68B5,
    0x9E91: 0x68A0,
    0x9E92: 0x68BA,
    0x9E93: 0x690F,
    0x9E94: 0x688D,
    0x9E95: 0x687E,
    0x9E96: 0x6901,
    0x9E97: 0x68CA,
    0x9E98: 0x6908,
    0x9E99: 0x68D8,
    0x9E9A: 0x6922,
    0x9E9B: 0x6926,
    0x9E9C: 0x68E1,
    0x9E9D: 0x690C,
    0x9E9E: 0x68CD,
    0x9E9F: 0x68D4,
    0x9EA0: 0x68E7,
    0x9EA1: 0x68D5,
    0x9EA2: 0x6936,
    0x9EA3: 0x6912,
    0x9EA4: 0x6904,
    0x9EA5: 0x68D7,
    0x9EA6: 0x68E3,
    0x9EA7: 0x6925,
    0x9EA8: 0x68F9,
    0x9EA9: 0x68E0,
    0x9EAA: 0x68EF,
    0x9EAB: 0x6928,
    0x9EAC: 0x692A,
    0x9EAD: 0x691A,
    0x9EAE: 0x6923,
    0x9EAF: 0x6921,
    0x9EB0: 0x68C6,
    0x9EB1: 0x6979,
    0x9EB2: 0x6977,
    0x9EB3: 0x695C,
    0x9EB4: 0x6978,
    0x9EB5: 0x696B,
    0x9EB6: 0x6954,
    0x9EB7: 0x697E,
    0x9EB8: 0x696E,
    0x9EB9: 0x6939,
    0x9EBA: 0x6974,
    0x9EBB: 0x693D,
    0x9EBC: 0x6959,
    0x9EBD: 0x6930,
    0x9EBE: 0x6961,
    0x9EBF: 0x695E,
    0x9EC0: 0x695D,
    0x9EC1: 0x6981,
    0x9EC2: 0x696A,
    0x9EC3: 0x69B2,
    0x9EC4: 0x69AE,
    0x9EC5: 0x69D0,
    0x9EC6: 0x69BF,
    0x9EC7: 0x69C1,
    0x9EC8: 0x69D3,
    0x9EC9: 0x69BE,
    0x9ECA: 0x69CE,
    0x9ECB: 0x5BE8,
    0x9ECC: 0x69CA,
    0x9ECD: 0x69DD,
    0x9ECE: 0x69BB,
    0x9ECF: 0x69C3,
    0x9ED0: 0x69A7,
    0x9ED1: 0x6A2E,
    0x9ED2: 0x6991,
    0x9ED3: 0x69A0,
    0x9ED4: 0x699C,
    0x9ED5: 0x6995,
    0x9ED6: 0x69B4,
    0x9ED7: 0x69DE,
    0x9ED8: 0x69E8,
    0x9ED9: 0x6A02,
    0x9EDA: 0x6A1B,
    0x9EDB: 0x69FF,
    0x9EDC: 0x6B0A,
    0x9EDD: 0x69F9,
    0x9EDE: 0x69F2,
    0x9EDF: 0x69E7,
    0x9EE0: 0x6A05,
    0x9EE1: 0x69B1,
    0x9EE2: 0x6A1E,
    0x9EE3: 0x69ED,
    0x9EE4: 0x6A14,
    0x9EE5: 0x69EB,
    0x9EE6: 0x6A0A,
    0x9EE7: 0x6A12,
    0x9EE8: 0x6AC1,
    0x9EE9: 0x6A23,
    0x9EEA: 0x6A13,
    0x9EEB: 0x6A44,
    0x9EEC: 0x6A0C,
    0x9EED: 0x6A72,
    0x9EEE: 0x6A36,
    0x9EEF: 0x6A78,
    0x9EF0: 0x6A47,
    0x9EF1: 0x6A62,
    0x9EF2: 0x6A59,
    0x9EF3: 0x6A66,
    0x9EF4: 0x6A48,
    0x9EF5: 0x6A38,
    0x9EF6: 0x6A22,
    0x9EF7: 0x6A90,
    0x9EF8: 0x6A8D,
    0x9EF9: 0x6AA0,
    0x9EFA: 0x6A84,
    0x9EFB: 0x6AA2,
    0x9EFC: 0x6AA3,
    0x9F40: 0x6A97,
    0x9F41: 0x8617,
    0x9F42: 0x6ABB,
    0x9F43: 0x6AC3,
    0x9F44: 0x6AC2,
    0x9F45: 0x6AB8,
    0x9F46: 0x6AB3,
    0x9F47: 0x6AAC,
    0x9F48: 0x6ADE,
    0x9F49: 0x6AD1,
    0x9F4A: 0x6ADF,
    0x9F4B: 0x6AAA,
    0x9F4C: 0x6ADA,
    0x9F4D: 0x6AEA,
    0x9F4E: 0x6AFB,
    0x9F4F: 0x6B05,
    0x9F50: 0x8616,
    0x9F51: 0x6AFA,
    0x9F52: 0x6B12,
    0x9F53: 0x6B16,
    0x9F54: 0x9B31,
    0x9F55: 0x6B1F,
    0x9F56: 0x6B38,
    0x9F57: 0x6B37,
    0x9F58: 0x76DC,
    0x9F59: 0x6B39,
    0x9F5A: 0x98EE,
    0x9F5B: 0x6B47,
    0x9F5C: 0x6B43,
    0x9F5D: 0x6B49,
    0x9F5E: 0x6B50,
    0x9F5F: 0x6B59,
    0x9F60: 0x6B54,
    0x9F61: 0x6B5B,
    0x9F62: 0x6B5F,
    0x9F63: 0x6B61,
    0x9F64: 0x6B78,
    0x9F65: 0x6B79,
    0x9F66: 0x6B7F,
    0x9F67: 0x6B80,
    0x9F68: 0x6B84,
    0x9F69: 0x6B83,
    0x9F6A: 0x6B8D,
    0x9F6B: 0x6B98,
    0x9F6C: 0x6B95,
    0x9F6D: 0x6B9E,
    0x9F6E: 0x6BA4,
    0x9F6F: 0x6BAA,
    0x9F70: 0x6BAB,
    0x9F71: 0x6BAF,
    0x9F72: 0x6BB2,
    0x9F73: 0x6BB1,
    0x9F74: 0x6BB3,
    0x9F75: 0x6BB7,
    0x9F76: 0x6BBC,
    0x9F77: 0x6BC6,
    0x9F78: 0x6BCB,
    0x9F79: 0x6BD3,
    0x9F7A: 0x6BDF,
    0x9F7B: 0x6BEC,
    0x9F7C: 0x6BEB,
    0x9F7D: 0x6BF3,
    0x9F7E: 0x6BEF,
    0x9F80: 0x9EBE,
    0x9F81: 0x6C08,
    0x9F82: 0x6C13,
    0x9F83: 0x6C14,
    0x9F84: 0x6C1B,
    0x9F85: 0x6C24,
    0x9F86: 0x6C23,
    0x9F87: 0x6C5E,
    0x9F88: 0x6C55,
    0x9F89: 0x6C62,
    0x9F8A: 0x6C6A,
    0x9F8B: 0x6C82,
    0x9F8C: 0x6C8D,
    0x9F8D: 0x6C9A,
    0x9F8E: 0x6C81,
    0x9F8F: 0x6C9B,
    0x9F90: 0x6C7E,
    0x9F91: 0x6C68,
    0x9F92: 0x6C73,
    0x9F93: 0x6C92,
    0x9F94: 0x6C90,
    0x9F95: 0x6CC4,
    0x9F96: 0x6CF1,
    0x9F97: 0x6CD3,
    0x9F98: 0x6CBD,
    0x9F99: 0x6CD7,
    0x9F9A: 0x6CC5,
    0x9F9B: 0x6CDD,
    0x9F9C: 0x6CAE,
    0x9F9D: 0x6CB1,
    0x9F9E: 0x6CBE,
    0x9F9F: 0x6CBA,
    0x9FA0: 0x6CDB,
    0x9FA1: 0x6CEF,
    0x9FA2: 0x6CD9,
    0x9FA3: 0x6CEA,
    0x9FA4: 0x6D1F,
    0x9FA5: 0x884D,
    0x9FA6: 0x6D36,
    0x9FA7: 0x6D2B,
    0x9FA8: 0x6D3D,
    0x9FA9: 0x6D38,
    0x9FAA: 0x6D19,
    0x9FAB: 0x6D35,
    0x9FAC: 0x6D33,
    0x9FAD: 0x6D12,
    0x9FAE: 0x6D0C,
    0x9FAF: 0x6D63,
    0x9FB0: 0x6D93,
    0x9FB1: 0x6D64,
    0x9FB2: 0x6D5A,
    0x9FB3: 0x6D79,
    0x9FB4: 0x6D59,
    0x9FB5: 0x6D8E,
    0x9FB6: 0x6D95,
    0x9FB7: 0x6FE4,
    0x9FB8: 0x6D85,
    0x9FB9: 0x6DF9,
    0x9FBA: 0x6E15,
    0x9FBB: 0x6E0A,
    0x9FBC: 0x6DB5,
    0x9FBD: 0x6DC7,
    0x9FBE: 0x6DE6,
    0x9FBF: 0x6DB8,
    0x9FC0: 0x6DC6,
    0x9FC1: 0x6DEC,
    0x9FC2: 0x6DDE,
    0x9FC3: 0x6DCC,
    0x9FC4: 0x6DE8,
    0x9FC5: 0x6DD2,
    0x9FC6: 0x6DC5,
    0x9FC7: 0x6DFA,
    0x9FC8: 0x6DD9,
    0x9FC9: 0x6DE4,
    0x9FCA: 0x6DD5,
    0x9FCB: 0x6DEA,
    0x9FCC: 0x6DEE,
    0x9FCD: 0x6E2D,
    0x9FCE: 0x6E6E,
    0x9FCF: 0x6E2E,
    0x9FD0: 0x6E19,
    0x9FD1: 0x6E72,
    0x9FD2: 0x6E5F,
    0x9FD3: 0x6E3E,
    0x9FD4: 0x6E23,
    0x9FD5: 0x6E6B,
    0x9FD6: 0x6E2B,
    0x9FD7: 0x6E76,
    0x9FD8: 0x6E4D,
    0x9FD9: 0x6E1F,
    0x9FDA: 0x6E43,
    0x9FDB: 0x6E3A,
    0x9FDC: 0x6E4E,
    0x9FDD: 0x6E24,
    0x9FDE: 0x6EFF,
    0x9FDF: 0x6E1D,
    0x9FE0: 0x6E38,
    0x9FE1: 0x6E82,
    0x9FE2: 0x6EAA,
    0x9FE3: 0x6E98,
    0x9FE4: 0x6EC9,
    0x9FE5: 0x6EB7,
    0x9FE6: 0x6ED3,
    0x9FE7: 0x6EBD,
    0x9FE8: 0x6EAF,
    0x9FE9: 0x6EC4,
    0x9FEA: 0x6EB2,
    0x9FEB: 0x6ED4,
    0x9FEC: 0x6ED5,
    0x9FED: 0x6E8F,
    0x9FEE: 0x6EA5,
    0x9FEF: 0x6EC2,
    0x9FF0: 0x6E9F,
    0x9FF1: 0x6F41,
    0x9FF2: 0x6F11,
    0x9FF3: 0x704C,
    0x9FF4: 0x6EEC,
    0x9FF5: 0x6EF8,
    0x9FF6: 0x6EFE,
    0x9FF7: 0x6F3F,
    0x9FF8: 0x6EF2,
    0x9FF9: 0x6F31,
    0x9FFA: 0x6EEF,
    0x9FFB: 0x6F32,
    0x9FFC: 0x6ECC,
    0xA1: 0xFF61,
    0xA2: 0xFF62,
    0xA3: 0xFF63,
    0xA4: 0xFF64,
    0xA5: 0xFF65,
    0xA6: 0xFF66,
    0xA7: 0xFF67,
    0xA8: 0xFF68,
    0xA9: 0xFF69,
    0xAA: 0xFF6A,
    0xAB: 0xFF6B,
    0xAC: 0xFF6C,
    0xAD: 0xFF6D,
    0xAE: 0xFF6E,
    0xAF: 0xFF6F,
    0xB0: 0xFF70,
    0xB1: 0xFF71,
    0xB2: 0xFF72,
    0xB3: 0xFF73,
    0xB4: 0xFF74,
    0xB5: 0xFF75,
    0xB6: 0xFF76,
    0xB7: 0xFF77,
    0xB8: 0xFF78,
    0xB9: 0xFF79,
    0xBA: 0xFF7A,
    0xBB: 0xFF7B,
    0xBC: 0xFF7C,
    0xBD: 0xFF7D,
    0xBE: 0xFF7E,
    0xBF: 0xFF7F,
    0xC0: 0xFF80,
    0xC1: 0xFF81,
    0xC2: 0xFF82,
    0xC3: 0xFF83,
    0xC4: 0xFF84,
    0xC5: 0xFF85,
    0xC6: 0xFF86,
    0xC7: 0xFF87,
    0xC8: 0xFF88,
    0xC9: 0xFF89,
    0xCA: 0xFF8A,
    0xCB: 0xFF8B,
    0xCC: 0xFF8C,
    0xCD: 0xFF8D,
    0xCE: 0xFF8E,
    0xCF: 0xFF8F,
    0xD0: 0xFF90,
    0xD1: 0xFF91,
    0xD2: 0xFF92,
    0xD3: 0xFF93,
    0xD4: 0xFF94,
    0xD5: 0xFF95,
    0xD6: 0xFF96,
    0xD7: 0xFF97,
    0xD8: 0xFF98,
    0xD9: 0xFF99,
    0xDA: 0xFF9A,
    0xDB: 0xFF9B,
    0xDC: 0xFF9C,
    0xDD: 0xFF9D,
    0xDE: 0xFF9E,
    0xDF: 0xFF9F,
    0xE040: 0x6F3E,
    0xE041: 0x6F13,
    0xE042: 0x6EF7,
    0xE043: 0x6F86,
    0xE044: 0x6F7A,
    0xE045: 0x6F78,
    0xE046: 0x6F81,
    0xE047: 0x6F80,
    0xE048: 0x6F6F,
    0xE049: 0x6F5B,
    0xE04A: 0x6FF3,
    0xE04B: 0x6F6D,
    0xE04C: 0x6F82,
    0xE04D: 0x6F7C,
    0xE04E: 0x6F58,
    0xE04F: 0x6F8E,
    0xE050: 0x6F91,
    0xE051: 0x6FC2,
    0xE052: 0x6F66,
    0xE053: 0x6FB3,
    0xE054: 0x6FA3,
    0xE055: 0x6FA1,
    0xE056: 0x6FA4,
    0xE057: 0x6FB9,
    0xE058: 0x6FC6,
    0xE059: 0x6FAA,
    0xE05A: 0x6FDF,
    0xE05B: 0x6FD5,
    0xE05C: 0x6FEC,
    0xE05D: 0x6FD4,
    0xE05E: 0x6FD8,
    0xE05F: 0x6FF1,
    0xE060: 0x6FEE,
    0xE061: 0x6FDB,
    0xE062: 0x7009,
    0xE063: 0x700B,
    0xE064: 0x6FFA,
    0xE065: 0x7011,
    0xE066: 0x7001,
    0xE067: 0x700F,
    0xE068: 0x6FFE,
    0xE069: 0x701B,
    0xE06A: 0x701A,
    0xE06B: 0x6F74,
    0xE06C: 0x701D,
    0xE06D: 0x7018,
    0xE06E: 0x701F,
    0xE06F: 0x7030,
    0xE070: 0x703E,
    0xE071: 0x7032,
    0xE072: 0x7051,
    0xE073: 0x7063,
    0xE074: 0x7099,
    0xE075: 0x7092,
    0xE076: 0x70AF,
    0xE077: 0x70F1,
    0xE078: 0x70AC,
    0xE079: 0x70B8,
    0xE07A: 0x70B3,
    0xE07B: 0x70AE,
    0xE07C: 0x70DF,
    0xE07D: 0x70CB,
    0xE07E: 0x70DD,
    0xE080: 0x70D9,
    0xE081: 0x7109,
    0xE082: 0x70FD,
    0xE083: 0x711C,
    0xE084: 0x7119,
    0xE085: 0x7165,
    0xE086: 0x7155,
    0xE087: 0x7188,
    0xE088: 0x7166,
    0xE089: 0x7162,
    0xE08A: 0x714C,
    0xE08B: 0x7156,
    0xE08C: 0x716C,
    0xE08D: 0x718F,
    0xE08E: 0x71FB,
    0xE08F: 0x7184,
    0xE090: 0x7195,
    0xE091: 0x71A8,
    0xE092: 0x71AC,
    0xE093: 0x71D7,
    0xE094: 0x71B9,
    0xE095: 0x71BE,
    0xE096: 0x71D2,
    0xE097: 0x71C9,
    0xE098: 0x71D4,
    0xE099: 0x71CE,
    0xE09A: 0x71E0,
    0xE09B: 0x71EC,
    0xE09C: 0x71E7,
    0xE09D: 0x71F5,
    0xE09E: 0x71FC,
    0xE09F: 0x71F9,
    0xE0A0: 0x71FF,
    0xE0A1: 0x720D,
    0xE0A2: 0x7210,
    0xE0A3: 0x721B,
    0xE0A4: 0x7228,
    0xE0A5: 0x722D,
    0xE0A6: 0x722C,
    0xE0A7: 0x7230,
    0xE0A8: 0x7232,
    0xE0A9: 0x723B,
    0xE0AA: 0x723C,
    0xE0AB: 0x723F,
    0xE0AC: 0x7240,
    0xE0AD: 0x7246,
    0xE0AE: 0x724B,
    0xE0AF: 0x7258,
    0xE0B0: 0x7274,
    0xE0B1: 0x727E,
    0xE0B2: 0x7282,
    0xE0B3: 0x7281,
    0xE0B4: 0x7287,
    0xE0B5: 0x7292,
    0xE0B6: 0x7296,
    0xE0B7: 0x72A2,
    0xE0B8: 0x72A7,
    0xE0B9: 0x72B9,
    0xE0BA: 0x72B2,
    0xE0BB: 0x72C3,
    0xE0BC: 0x72C6,
    0xE0BD: 0x72C4,
    0xE0BE: 0x72CE,
    0xE0BF: 0x72D2,
    0xE0C0: 0x72E2,
    0xE0C1: 0x72E0,
    0xE0C2: 0x72E1,
    0xE0C3: 0x72F9,
    0xE0C4: 0x72F7,
    0xE0C5: 0x500F,
    0xE0C6: 0x7317,
    0xE0C7: 0x730A,
    0xE0C8: 0x731C,
    0xE0C9: 0x7316,
    0xE0CA: 0x731D,
    0xE0CB: 0x7334,
    0xE0CC: 0x732F,
    0xE0CD: 0x7329,
    0xE0CE: 0x7325,
    0xE0CF: 0x733E,
    0xE0D0: 0x734E,
    0xE0D1: 0x734F,
    0xE0D2: 0x9ED8,
    0xE0D3: 0x7357,
    0xE0D4: 0x736A,
    0xE0D5: 0x7368,
    0xE0D6: 0x7370,
    0xE0D7: 0x7378,
    0xE0D8: 0x7375,
    0xE0D9: 0x737B,
    0xE0DA: 0x737A,
    0xE0DB: 0x73C8,
    0xE0DC: 0x73B3,
    0xE0DD: 0x73CE,
    0xE0DE: 0x73BB,
    0xE0DF: 0x73C0,
    0xE0E0: 0x73E5,
    0xE0E1: 0x73EE,
    0xE0E2: 0x73DE,
    0xE0E3: 0x74A2,
    0xE0E4: 0x7405,
    0xE0E5: 0x746F,
    0xE0E6: 0x7425,
    0xE0E7: 0x73F8,
    0xE0E8: 0x7432,
    0xE0E9: 0x743A,
    0xE0EA: 0x7455,
    0xE0EB: 0x743F,
    0xE0EC: 0x745F,
    0xE0ED: 0x7459,
    0xE0EE: 0x7441,
    0xE0EF: 0x745C,
    0xE0F0: 0x7469,
    0xE0F1: 0x7470,
    0xE0F2: 0x7463,
    0xE0F3: 0x746A,
    0xE0F4: 0x7476,
    0xE0F5: 0x747E,
    0xE0F6: 0x748B,
    0xE0F7: 0x749E,
    0xE0F8: 0x74A7,
    0xE0F9: 0x74CA,
    0xE0FA: 0x74CF,
    0xE0FB: 0x74D4,
    0xE0FC: 0x73F1,
    0xE140: 0x74E0,
    0xE141: 0x74E3,
    0xE142: 0x74E7,
    0xE143: 0x74E9,
    0xE144: 0x74EE,
    0xE145: 0x74F2,
    0xE146: 0x74F0,
    0xE147: 0x74F1,
    0xE148: 0x74F8,
    0xE149: 0x74F7,
    0xE14A: 0x7504,
    0xE14B: 0x7503,
    0xE14C: 0x7505,
    0xE14D: 0x750C,
    0xE14E: 0x750E,
    0xE14F: 0x750D,
    0xE150: 0x7515,
    0xE151: 0x7513,
    0xE152: 0x751E,
    0xE153: 0x7526,
    0xE154: 0x752C,
    0xE155: 0x753C,
    0xE156: 0x7544,
    0xE157: 0x754D,
    0xE158: 0x754A,
    0xE159: 0x7549,
    0xE15A: 0x755B,
    0xE15B: 0x7546,
    0xE15C: 0x755A,
    0xE15D: 0x7569,
    0xE15E: 0x7564,
    0xE15F: 0x7567,
    0xE160: 0x756B,
    0xE161: 0x756D,
    0xE162: 0x7578,
    0xE163: 0x7576,
    0xE164: 0x7586,
    0xE165: 0x7587,
    0xE166: 0x7574,
    0xE167: 0x758A,
    0xE168: 0x7589,
    0xE169: 0x7582,
    0xE16A: 0x7594,
    0xE16B: 0x759A,
    0xE16C: 0x759D,
    0xE16D: 0x75A5,
    0xE16E: 0x75A3,
    0xE16F: 0x75C2,
    0xE170: 0x75B3,
    0xE171: 0x75C3,
    0xE172: 0x75B5,
    0xE173: 0x75BD,
    0xE174: 0x75B8,
    0xE175: 0x75BC,
    0xE176: 0x75B1,
    0xE177: 0x75CD,
    0xE178: 0x75CA,
    0xE179: 0x75D2,
    0xE17A: 0x75D9,
    0xE17B: 0x75E3,
    0xE17C: 0x75DE,
    0xE17D: 0x75FE,
    0xE17E: 0x75FF,
    0xE180: 0x75FC,
    0xE181: 0x7601,
    0xE182: 0x75F0,
    0xE183: 0x75FA,
    0xE184: 0x75F2,
    0xE185: 0x75F3,
    0xE186: 0x760B,
    0xE187: 0x760D,
    0xE188: 0x7609,
    0xE189: 0x761F,
    0xE18A: 0x7627,
    0xE18B: 0x7620,
    0xE18C: 0x7621,
    0xE18D: 0x7622,
    0xE18E: 0x7624,
    0xE18F: 0x7634,
    0xE190: 0x7630,
    0xE191: 0x763B,
    0xE192: 0x7647,
    0xE193: 0x7648,
    0xE194: 0x7646,
    0xE195: 0x765C,
    0xE196: 0x7658,
    0xE197: 0x7661,
    0xE198: 0x7662,
    0xE199: 0x7668,
    0xE19A: 0x7669,
    0xE19B: 0x766A,
    0xE19C: 0x7667,
    0xE19D: 0x766C,
    0xE19E: 0x7670,
    0xE19F: 0x7672,
    0xE1A0: 0x7676,
    0xE1A1: 0x7678,
    0xE1A2: 0x767C,
    0xE1A3: 0x7680,
    0xE1A4: 0x7683,
    0xE1A5: 0x7688,
    0xE1A6: 0x768B,
    0xE1A7: 0x768E,
    0xE1A8: 0x7696,
    0xE1A9: 0x7693,
    0xE1AA: 0x7699,
    0xE1AB: 0x769A,
    0xE1AC: 0x76B0,
    0xE1AD: 0x76B4,
    0xE1AE: 0x76B8,
    0xE1AF: 0x76B9,
    0xE1B0: 0x76BA,
    0xE1B1: 0x76C2,
    0xE1B2: 0x76CD,
    0xE1B3: 0x76D6,
    0xE1B4: 0x76D2,
    0xE1B5: 0x76DE,
    0xE1B6: 0x76E1,
    0xE1B7: 0x76E5,
    0xE1B8: 0x76E7,
    0xE1B9: 0x76EA,
    0xE1BA: 0x862F,
    0xE1BB: 0x76FB,
    0xE1BC: 0x7708,
    0xE1BD: 0x7707,
    0xE1BE: 0x7704,
    0xE1BF: 0x7729,
    0xE1C0: 0x7724,
    0xE1C1: 0x771E,
    0xE1C2: 0x7725,
    0xE1C3: 0x7726,
    0xE1C4: 0x771B,
    0xE1C5: 0x7737,
    0xE1C6: 0x7738,
    0xE1C7: 0x7747,
    0xE1C8: 0x775A,
    0xE1C9: 0x7768,
    0xE1CA: 0x776B,
    0xE1CB: 0x775B,
    0xE1CC: 0x7765,
    0xE1CD: 0x777F,
    0xE1CE: 0x777E,
    0xE1CF: 0x7779,
    0xE1D0: 0x778E,
    0xE1D1: 0x778B,
    0xE1D2: 0x7791,
    0xE1D3: 0x77A0,
    0xE1D4: 0x779E,
    0xE1D5: 0x77B0,
    0xE1D6: 0x77B6,
    0xE1D7: 0x77B9,
    0xE1D8: 0x77BF,
    0xE1D9: 0x77BC,
    0xE1DA: 0x77BD,
    0xE1DB: 0x77BB,
    0xE1DC: 0x77C7,
    0xE1DD: 0x77CD,
    0xE1DE: 0x77D7,
    0xE1DF: 0x77DA,
    0xE1E0: 0x77DC,
    0xE1E1: 0x77E3,
    0xE1E2: 0x77EE,
    0xE1E3: 0x77FC,
    0xE1E4: 0x780C,
    0xE1E5: 0x7812,
    0xE1E6: 0x7926,
    0xE1E7: 0x7820,
    0xE1E8: 0x792A,
    0xE1E9: 0x7845,
    0xE1EA: 0x788E,
    0xE1EB: 0x7874,
    0xE1EC: 0x7886,
    0xE1ED: 0x787C,
    0xE1EE: 0x789A,
    0xE1EF: 0x788C,
    0xE1F0: 0x78A3,
    0xE1F1: 0x78B5,
    0xE1F2: 0x78AA,
    0xE1F3: 0x78AF,
    0xE1F4: 0x78D1,
    0xE1F5: 0x78C6,
    0xE1F6: 0x78CB,
    0xE1F7: 0x78D4,
    0xE1F8: 0x78BE,
    0xE1F9: 0x78BC,
    0xE1FA: 0x78C5,
    0xE1FB: 0x78CA,
    0xE1FC: 0x78EC,
    0xE240: 0x78E7,
    0xE241: 0x78DA,
    0xE242: 0x78FD,
    0xE243: 0x78F4,
    0xE244: 0x7907,
    0xE245: 0x7912,
    0xE246: 0x7911,
    0xE247: 0x7919,
    0xE248: 0x792C,
    0xE249: 0x792B,
    0xE24A: 0x7940,
    0xE24B: 0x7960,
    0xE24C: 0x7957,
    0xE24D: 0x795F,
    0xE24E: 0x795A,
    0xE24F: 0x7955,
    0xE250: 0x7953,
    0xE251: 0x797A,
    0xE252: 0x797F,
    0xE253: 0x798A,
    0xE254: 0x799D,
    0xE255: 0x79A7,
    0xE256: 0x9F4B,
    0xE257: 0x79AA,
    0xE258: 0x79AE,
    0xE259: 0x79B3,
    0xE25A: 0x79B9,
    0xE25B: 0x79BA,
    0xE25C: 0x79C9,
    0xE25D: 0x79D5,
    0xE25E: 0x79E7,
    0xE25F: 0x79EC,
    0xE260: 0x79E1,
    0xE261: 0x79E3,
    0xE262: 0x7A08,
    0xE263: 0x7A0D,
    0xE264: 0x7A18,
    0xE265: 0x7A19,
    0xE266: 0x7A20,
    0xE267: 0x7A1F,
    0xE268: 0x7980,
    0xE269: 0x7A31,
    0xE26A: 0x7A3B,
    0xE26B: 0x7A3E,
    0xE26C: 0x7A37,
    0xE26D: 0x7A43,
    0xE26E: 0x7A57,
    0xE26F: 0x7A49,
    0xE270: 0x7A61,
    0xE271: 0x7A62,
    0xE272: 0x7A69,
    0xE273: 0x9F9D,
    0xE274: 0x7A70,
    0xE275: 0x7A79,
    0xE276: 0x7A7D,
    0xE277: 0x7A88,
    0xE278: 0x7A97,
    0xE279: 0x7A95,
    0xE27A: 0x7A98,
    0xE27B: 0x7A96,
    0xE27C: 0x7AA9,
    0xE27D: 0x7AC8,
    0xE27E: 0x7AB0,
    0xE280: 0x7AB6,
    0xE281: 0x7AC5,
    0xE282: 0x7AC4,
    0xE283: 0x7ABF,
    0xE284: 0x9083,
    0xE285: 0x7AC7,
    0xE286: 0x7ACA,
    0xE287: 0x7ACD,
    0xE288: 0x7ACF,
    0xE289: 0x7AD5,
    0xE28A: 0x7AD3,
    0xE28B: 0x7AD9,
    0xE28C: 0x7ADA,
    0xE28D: 0x7ADD,
    0xE28E: 0x7AE1,
    0xE28F: 0x7AE2,
    0xE290: 0x7AE6,
    0xE291: 0x7AED,
    0xE292: 0x7AF0,
    0xE293: 0x7B02,
    0xE294: 0x7B0F,
    0xE295: 0x7B0A,
    0xE296: 0x7B06,
    0xE297: 0x7B33,
    0xE298: 0x7B18,
    0xE299: 0x7B19,
    0xE29A: 0x7B1E,
    0xE29B: 0x7B35,
    0xE29C: 0x7B28,
    0xE29D: 0x7B36,
    0xE29E: 0x7B50,
    0xE29F: 0x7B7A,
    0xE2A0: 0x7B04,
    0xE2A1: 0x7B4D,
    0xE2A2: 0x7B0B,
    0xE2A3: 0x7B4C,
    0xE2A4: 0x7B45,
    0xE2A5: 0x7B75,
    0xE2A6: 0x7B65,
    0xE2A7: 0x7B74,
    0xE2A8: 0x7B67,
    0xE2A9: 0x7B70,
    0xE2AA: 0x7B71,
    0xE2AB: 0x7B6C,
    0xE2AC: 0x7B6E,
    0xE2AD: 0x7B9D,
    0xE2AE: 0x7B98,
    0xE2AF: 0x7B9F,
    0xE2B0: 0x7B8D,
    0xE2B1: 0x7B9C,
    0xE2B2: 0x7B9A,
    0xE2B3: 0x7B8B,
    0xE2B4: 0x7B92,
    0xE2B5: 0x7B8F,
    0xE2B6: 0x7B5D,
    0xE2B7: 0x7B99,
    0xE2B8: 0x7BCB,
    0xE2B9: 0x7BC1,
    0xE2BA: 0x7BCC,
    0xE2BB: 0x7BCF,
    0xE2BC: 0x7BB4,
    0xE2BD: 0x7BC6,
    0xE2BE: 0x7BDD,
    0xE2BF: 0x7BE9,
    0xE2C0: 0x7C11,
    0xE2C1: 0x7C14,
    0xE2C2: 0x7BE6,
    0xE2C3: 0x7BE5,
    0xE2C4: 0x7C60,
    0xE2C5: 0x7C00,
    0xE2C6: 0x7C07,
    0xE2C7: 0x7C13,
    0xE2C8: 0x7BF3,
    0xE2C9: 0x7BF7,
    0xE2CA: 0x7C17,
    0xE2CB: 0x7C0D,
    0xE2CC: 0x7BF6,
    0xE2CD: 0x7C23,
    0xE2CE: 0x7C27,
    0xE2CF: 0x7C2A,
    0xE2D0: 0x7C1F,
    0xE2D1: 0x7C37,
    0xE2D2: 0x7C2B,
    0xE2D3: 0x7C3D,
    0xE2D4: 0x7C4C,
    0xE2D5: 0x7C43,
    0xE2D6: 0x7C54,
    0xE2D7: 0x7C4F,
    0xE2D8: 0x7C40,
    0xE2D9: 0x7C50,
    0xE2DA: 0x7C58,
    0xE2DB: 0x7C5F,
    0xE2DC: 0x7C64,
    0xE2DD: 0x7C56,
    0xE2DE: 0x7C65,
    0xE2DF: 0x7C6C,
    0xE2E0: 0x7C75,
    0xE2E1: 0x7C83,
    0xE2E2: 0x7C90,
    0xE2E3: 0x7CA4,
    0xE2E4: 0x7CAD,
    0xE2E5: 0x7CA2,
    0xE2E6: 0x7CAB,
    0xE2E7: 0x7CA1,
    0xE2E8: 0x7CA8,
    0xE2E9: 0x7CB3,
    0xE2EA: 0x7CB2,
    0xE2EB: 0x7CB1,
    0xE2EC: 0x7CAE,
    0xE2ED: 0x7CB9,
    0xE2EE: 0x7CBD,
    0xE2EF: 0x7CC0,
    0xE2F0: 0x7CC5,
    0xE2F1: 0x7CC2,
    0xE2F2: 0x7CD8,
    0xE2F3: 0x7CD2,
    0xE2F4: 0x7CDC,
    0xE2F5: 0x7CE2,
    0xE2F6: 0x9B3B,
    0xE2F7: 0x7CEF,
    0xE2F8: 0x7CF2,
    0xE2F9: 0x7CF4,
    0xE2FA: 0x7CF6,
    0xE2FB: 0x7CFA,
    0xE2FC: 0x7D06,
    0xE340: 0x7D02,
    0xE341: 0x7D1C,
    0xE342: 0x7D15,
    0xE343: 0x7D0A,
    0xE344: 0x7D45,
    0xE345: 0x7D4B,
    0xE346: 0x7D2E,
    0xE347: 0x7D32,
    0xE348: 0x7D3F,
    0xE349: 0x7D35,
    0xE34A: 0x7D46,
    0xE34B: 0x7D73,
    0xE34C: 0x7D56,
    0xE34D: 0x7D4E,
    0xE34E: 0x7D72,
    0xE34F: 0x7D68,
    0xE350: 0x7D6E,
    0xE351: 0x7D4F,
    0xE352: 0x7D63,
    0xE353: 0x7D93,
    0xE354: 0x7D89,
    0xE355: 0x7D5B,
    0xE356: 0x7D8F,
    0xE357: 0x7D7D,
    0xE358: 0x7D9B,
    0xE359: 0x7DBA,
    0xE35A: 0x7DAE,
    0xE35B: 0x7DA3,
    0xE35C: 0x7DB5,
    0xE35D: 0x7DC7,
    0xE35E: 0x7DBD,
    0xE35F: 0x7DAB,
    0xE360: 0x7E3D,
    0xE361: 0x7DA2,
    0xE362: 0x7DAF,
    0xE363: 0x7DDC,
    0xE364: 0x7DB8,
    0xE365: 0x7D9F,
    0xE366: 0x7DB0,
    0xE367: 0x7DD8,
    0xE368: 0x7DDD,
    0xE369: 0x7DE4,
    0xE36A: 0x7DDE,
    0xE36B: 0x7DFB,
    0xE36C: 0x7DF2,
    0xE36D: 0x7DE1,
    0xE36E: 0x7E05,
    0xE36F: 0x7E0A,
    0xE370: 0x7E23,
    0xE371: 0x7E21,
    0xE372: 0x7E12,
    0xE373: 0x7E31,
    0xE374: 0x7E1F,
    0xE375: 0x7E09,
    0xE376: 0x7E0B,
    0xE377: 0x7E22,
    0xE378: 0x7E46,
    0xE379: 0x7E66,
    0xE37A: 0x7E3B,
    0xE37B: 0x7E35,
    0xE37C: 0x7E39,
    0xE37D: 0x7E43,
    0xE37E: 0x7E37,
    0xE380: 0x7E32,
    0xE381: 0x7E3A,
    0xE382: 0x7E67,
    0xE383: 0x7E5D,
    0xE384: 0x7E56,
    0xE385: 0x7E5E,
    0xE386: 0x7E59,
    0xE387: 0x7E5A,
    0xE388: 0x7E79,
    0xE389: 0x7E6A,
    0xE38A: 0x7E69,
    0xE38B: 0x7E7C,
    0xE38C: 0x7E7B,
    0xE38D: 0x7E83,
    0xE38E: 0x7DD5,
    0xE38F: 0x7E7D,
    0xE390: 0x8FAE,
    0xE391: 0x7E7F,
    0xE392: 0x7E88,
    0xE393: 0x7E89,
    0xE394: 0x7E8C,
    0xE395: 0x7E92,
    0xE396: 0x7E90,
    0xE397: 0x7E93,
    0xE398: 0x7E94,
    0xE399: 0x7E96,
    0xE39A: 0x7E8E,
    0xE39B: 0x7E9B,
    0xE39C: 0x7E9C,
    0xE39D: 0x7F38,
    0xE39E: 0x7F3A,
    0xE39F: 0x7F45,
    0xE3A0: 0x7F4C,
    0xE3A1: 0x7F4D,
    0xE3A2: 0x7F4E,
    0xE3A3: 0x7F50,
    0xE3A4: 0x7F51,
    0xE3A5: 0x7F55,
    0xE3A6: 0x7F54,
    0xE3A7: 0x7F58,
    0xE3A8: 0x7F5F,
    0xE3A9: 0x7F60,
    0xE3AA: 0x7F68,
    0xE3AB: 0x7F69,
    0xE3AC: 0x7F67,
    0xE3AD: 0x7F78,
    0xE3AE: 0x7F82,
    0xE3AF: 0x7F86,
    0xE3B0: 0x7F83,
    0xE3B1: 0x7F88,
    0xE3B2: 0x7F87,
    0xE3B3: 0x7F8C,
    0xE3B4: 0x7F94,
    0xE3B5: 0x7F9E,
    0xE3B6: 0x7F9D,
    0xE3B7: 0x7F9A,
    0xE3B8: 0x7FA3,
    0xE3B9: 0x7FAF,
    0xE3BA: 0x7FB2,
    0xE3BB: 0x7FB9,
    0xE3BC: 0x7FAE,
    0xE3BD: 0x7FB6,
    0xE3BE: 0x7FB8,
    0xE3BF: 0x8B71,
    0xE3C0: 0x7FC5,
    0xE3C1: 0x7FC6,
    0xE3C2: 0x7FCA,
    0xE3C3: 0x7FD5,
    0xE3C4: 0x7FD4,
    0xE3C5: 0x7FE1,
    0xE3C6: 0x7FE6,
    0xE3C7: 0x7FE9,
    0xE3C8: 0x7FF3,
    0xE3C9: 0x7FF9,
    0xE3CA: 0x98DC,
    0xE3CB: 0x8006,
    0xE3CC: 0x8004,
    0xE3CD: 0x800B,
    0xE3CE: 0x8012,
    0xE3CF: 0x8018,
    0xE3D0: 0x8019,
    0xE3D1: 0x801C,
    0xE3D2: 0x8021,
    0xE3D3: 0x8028,
    0xE3D4: 0x803F,
    0xE3D5: 0x803B,
    0xE3D6: 0x804A,
    0xE3D7: 0x8046,
    0xE3D8: 0x8052,
    0xE3D9: 0x8058,
    0xE3DA: 0x805A,
    0xE3DB: 0x805F,
    0xE3DC: 0x8062,
    0xE3DD: 0x8068,
    0xE3DE: 0x8073,
    0xE3DF: 0x8072,
    0xE3E0: 0x8070,
    0xE3E1: 0x8076,
    0xE3E2: 0x8079,
    0xE3E3: 0x807D,
    0xE3E4: 0x807F,
    0xE3E5: 0x8084,
    0xE3E6: 0x8086,
    0xE3E7: 0x8085,
    0xE3E8: 0x809B,
    0xE3E9: 0x8093,
    0xE3EA: 0x809A,
    0xE3EB: 0x80AD,
    0xE3EC: 0x5190,
    0xE3ED: 0x80AC,
    0xE3EE: 0x80DB,
    0xE3EF: 0x80E5,
    0xE3F0: 0x80D9,
    0xE3F1: 0x80DD,
    0xE3F2: 0x80C4,
    0xE3F3: 0x80DA,
    0xE3F4: 0x80D6,
    0xE3F5: 0x8109,
    0xE3F6: 0x80EF,
    0xE3F7: 0x80F1,
    0xE3F8: 0x811B,
    0xE3F9: 0x8129,
    0xE3FA: 0x8123,
    0xE3FB: 0x812F,
    0xE3FC: 0x814B,
    0xE440: 0x968B,
    0xE441: 0x8146,
    0xE442: 0x813E,
    0xE443: 0x8153,
    0xE444: 0x8151,
    0xE445: 0x80FC,
    0xE446: 0x8171,
    0xE447: 0x816E,
    0xE448: 0x8165,
    0xE449: 0x8166,
    0xE44A: 0x8174,
    0xE44B: 0x8183,
    0xE44C: 0x8188,
    0xE44D: 0x818A,
    0xE44E: 0x8180,
    0xE44F: 0x8182,
    0xE450: 0x81A0,
    0xE451: 0x8195,
    0xE452: 0x81A4,
    0xE453: 0x81A3,
    0xE454: 0x815F,
    0xE455: 0x8193,
    0xE456: 0x81A9,
    0xE457: 0x81B0,
    0xE458: 0x81B5,
    0xE459: 0x81BE,
    0xE45A: 0x81B8,
    0xE45B: 0x81BD,
    0xE45C: 0x81C0,
    0xE45D: 0x81C2,
    0xE45E: 0x81BA,
    0xE45F: 0x81C9,
    0xE460: 0x81CD,
    0xE461: 0x81D1,
    0xE462: 0x81D9,
    0xE463: 0x81D8,
    0xE464: 0x81C8,
    0xE465: 0x81DA,
    0xE466: 0x81DF,
    0xE467: 0x81E0,
    0xE468: 0x81E7,
    0xE469: 0x81FA,
    0xE46A: 0x81FB,
    0xE46B: 0x81FE,
    0xE46C: 0x8201,
    0xE46D: 0x8202,
    0xE46E: 0x8205,
    0xE46F: 0x8207,
    0xE470: 0x820A,
    0xE471: 0x820D,
    0xE472: 0x8210,
    0xE473: 0x8216,
    0xE474: 0x8229,
    0xE475: 0x822B,
    0xE476: 0x8238,
    0xE477: 0x8233,
    0xE478: 0x8240,
    0xE479: 0x8259,
    0xE47A: 0x8258,
    0xE47B: 0x825D,
    0xE47C: 0x825A,
    0xE47D: 0x825F,
    0xE47E: 0x8264,
    0xE480: 0x8262,
    0xE481: 0x8268,
    0xE482: 0x826A,
    0xE483: 0x826B,
    0xE484: 0x822E,
    0xE485: 0x8271,
    0xE486: 0x8277,
    0xE487: 0x8278,
    0xE488: 0x827E,
    0xE489: 0x828D,
    0xE48A: 0x8292,
    0xE48B: 0x82AB,
    0xE48C: 0x829F,
    0xE48D: 0x82BB,
    0xE48E: 0x82AC,
    0xE48F: 0x82E1,
    0xE490: 0x82E3,
    0xE491: 0x82DF,
    0xE492: 0x82D2,
    0xE493: 0x82F4,
    0xE494: 0x82F3,
    0xE495: 0x82FA,
    0xE496: 0x8393,
    0xE497: 0x8303,
    0xE498: 0x82FB,
    0xE499: 0x82F9,
    0xE49A: 0x82DE,
    0xE49B: 0x8306,
    0xE49C: 0x82DC,
    0xE49D: 0x8309,
    0xE49E: 0x82D9,
    0xE49F: 0x8335,
    0xE4A0: 0x8334,
    0xE4A1: 0x8316,
    0xE4A2: 0x8332,
    0xE4A3: 0x8331,
    0xE4A4: 0x8340,
    0xE4A5: 0x8339,
    0xE4A6: 0x8350,
    0xE4A7: 0x8345,
    0xE4A8: 0x832F,
    0xE4A9: 0x832B,
    0xE4AA: 0x8317,
    0xE4AB: 0x8318,
    0xE4AC: 0x8385,
    0xE4AD: 0x839A,
    0xE4AE: 0x83AA,
    0xE4AF: 0x839F,
    0xE4B0: 0x83A2,
    0xE4B1: 0x8396,
    0xE4B2: 0x8323,
    0xE4B3: 0x838E,
    0xE4B4: 0x8387,
    0xE4B5: 0x838A,
    0xE4B6: 0x837C,
    0xE4B7: 0x83B5,
    0xE4B8: 0x8373,
    0xE4B9: 0x8375,
    0xE4BA: 0x83A0,
    0xE4BB: 0x8389,
    0xE4BC: 0x83A8,
    0xE4BD: 0x83F4,
    0xE4BE: 0x8413,
    0xE4BF: 0x83EB,
    0xE4C0: 0x83CE,
    0xE4C1: 0x83FD,
    0xE4C2: 0x8403,
    0xE4C3: 0x83D8,
    0xE4C4: 0x840B,
    0xE4C5: 0x83C1,
    0xE4C6: 0x83F7,
    0xE4C7: 0x8407,
    0xE4C8: 0x83E0,
    0xE4C9: 0x83F2,
    0xE4CA: 0x840D,
    0xE4CB: 0x8422,
    0xE4CC: 0x8420,
    0xE4CD: 0x83BD,
    0xE4CE: 0x8438,
    0xE4CF: 0x8506,
    0xE4D0: 0x83FB,
    0xE4D1: 0x846D,
    0xE4D2: 0x842A,
    0xE4D3: 0x843C,
    0xE4D4: 0x855A,
    0xE4D5: 0x8484,
    0xE4D6: 0x8477,
    0xE4D7: 0x846B,
    0xE4D8: 0x84AD,
    0xE4D9: 0x846E,
    0xE4DA: 0x8482,
    0xE4DB: 0x8469,
    0xE4DC: 0x8446,
    0xE4DD: 0x842C,
    0xE4DE: 0x846F,
    0xE4DF: 0x8479,
    0xE4E0: 0x8435,
    0xE4E1: 0x84CA,
    0xE4E2: 0x8462,
    0xE4E3: 0x84B9,
    0xE4E4: 0x84BF,
    0xE4E5: 0x849F,
    0xE4E6: 0x84D9,
    0xE4E7: 0x84CD,
    0xE4E8: 0x84BB,
    0xE4E9: 0x84DA,
    0xE4EA: 0x84D0,
    0xE4EB: 0x84C1,
    0xE4EC: 0x84C6,
    0xE4ED: 0x84D6,
    0xE4EE: 0x84A1,
    0xE4EF: 0x8521,
    0xE4F0: 0x84FF,
    0xE4F1: 0x84F4,
    0xE4F2: 0x8517,
    0xE4F3: 0x8518,
    0xE4F4: 0x852C,
    0xE4F5: 0x851F,
    0xE4F6: 0x8515,
    0xE4F7: 0x8514,
    0xE4F8: 0x84FC,
    0xE4F9: 0x8540,
    0xE4FA: 0x8563,
    0xE4FB: 0x8558,
    0xE4FC: 0x8548,
    0xE540: 0x8541,
    0xE541: 0x8602,
    0xE542: 0x854B,
    0xE543: 0x8555,
    0xE544: 0x8580,
    0xE545: 0x85A4,
    0xE546: 0x8588,
    0xE547: 0x8591,
    0xE548: 0x858A,
    0xE549: 0x85A8,
    0xE54A: 0x856D,
    0xE54B: 0x8594,
    0xE54C: 0x859B,
    0xE54D: 0x85EA,
    0xE54E: 0x8587,
    0xE54F: 0x859C,
    0xE550: 0x8577,
    0xE551: 0x857E,
    0xE552: 0x8590,
    0xE553: 0x85C9,
    0xE554: 0x85BA,
    0xE555: 0x85CF,
    0xE556: 0x85B9,
    0xE557: 0x85D0,
    0xE558: 0x85D5,
    0xE559: 0x85DD,
    0xE55A: 0x85E5,
    0xE55B: 0x85DC,
    0xE55C: 0x85F9,
    0xE55D: 0x860A,
    0xE55E: 0x8613,
    0xE55F: 0x860B,
    0xE560: 0x85FE,
    0xE561: 0x85FA,
    0xE562: 0x8606,
    0xE563: 0x8622,
    0xE564: 0x861A,
    0xE565: 0x8630,
    0xE566: 0x863F,
    0xE567: 0x864D,
    0xE568: 0x4E55,
    0xE569: 0x8654,
    0xE56A: 0x865F,
    0xE56B: 0x8667,
    0xE56C: 0x8671,
    0xE56D: 0x8693,
    0xE56E: 0x86A3,
    0xE56F: 0x86A9,
    0xE570: 0x86AA,
    0xE571: 0x868B,
    0xE572: 0x868C,
    0xE573: 0x86B6,
    0xE574: 0x86AF,
    0xE575: 0x86C4,
    0xE576: 0x86C6,
    0xE577: 0x86B0,
    0xE578: 0x86C9,
    0xE579: 0x8823,
    0xE57A: 0x86AB,
    0xE57B: 0x86D4,
    0xE57C: 0x86DE,
    0xE57D: 0x86E9,
    0xE57E: 0x86EC,
    0xE580: 0x86DF,
    0xE581: 0x86DB,
    0xE582: 0x86EF,
    0xE583: 0x8712,
    0xE584: 0x8706,
    0xE585: 0x8708,
    0xE586: 0x8700,
    0xE587: 0x8703,
    0xE588: 0x86FB,
    0xE589: 0x8711,
    0xE58A: 0x8709,
    0xE58B: 0x870D,
    0xE58C: 0x86F9,
    0xE58D: 0x870A,
    0xE58E: 0x8734,
    0xE58F: 0x873F,
    0xE590: 0x8737,
    0xE591: 0x873B,
    0xE592: 0x8725,
    0xE593: 0x8729,
    0xE594: 0x871A,
    0xE595: 0x8760,
    0xE596: 0x875F,
    0xE597: 0x8778,
    0xE598: 0x874C,
    0xE599: 0x874E,
    0xE59A: 0x8774,
    0xE59B: 0x8757,
    0xE59C: 0x8768,
    0xE59D: 0x876E,
    0xE59E: 0x8759,
    0xE59F: 0x8753,
    0xE5A0: 0x8763,
    0xE5A1: 0x876A,
    0xE5A2: 0x8805,
    0xE5A3: 0x87A2,
    0xE5A4: 0x879F,
    0xE5A5: 0x8782,
    0xE5A6: 0x87AF,
    0xE5A7: 0x87CB,
    0xE5A8: 0x87BD,
    0xE5A9: 0x87C0,
    0xE5AA: 0x87D0,
    0xE5AB: 0x96D6,
    0xE5AC: 0x87AB,
    0xE5AD: 0x87C4,
    0xE5AE: 0x87B3,
    0xE5AF: 0x87C7,
    0xE5B0: 0x87C6,
    0xE5B1: 0x87BB,
    0xE5B2: 0x87EF,
    0xE5B3: 0x87F2,
    0xE5B4: 0x87E0,
    0xE5B5: 0x880F,
    0xE5B6: 0x880D,
    0xE5B7: 0x87FE,
    0xE5B8: 0x87F6,
    0xE5B9: 0x87F7,
    0xE5BA: 0x880E,
    0xE5BB: 0x87D2,
    0xE5BC: 0x8811,
    0xE5BD: 0x8816,
    0xE5BE: 0x8815,
    0xE5BF: 0x8822,
    0xE5C0: 0x8821,
    0xE5C1: 0x8831,
    0xE5C2: 0x8836,
    0xE5C3: 0x8839,
    0xE5C4: 0x8827,
    0xE5C5: 0x883B,
    0xE5C6: 0x8844,
    0xE5C7: 0x8842,
    0xE5C8: 0x8852,
    0xE5C9: 0x8859,
    0xE5CA: 0x885E,
    0xE5CB: 0x8862,
    0xE5CC: 0x886B,
    0xE5CD: 0x8881,
    0xE5CE: 0x887E,
    0xE5CF: 0x889E,
    0xE5D0: 0x8875,
    0xE5D1: 0x887D,
    0xE5D2: 0x88B5,
    0xE5D3: 0x8872,
    0xE5D4: 0x8882,
    0xE5D5: 0x8897,
    0xE5D6: 0x8892,
    0xE5D7: 0x88AE,
    0xE5D8: 0x8899,
    0xE5D9: 0x88A2,
    0xE5DA: 0x888D,
    0xE5DB: 0x88A4,
    0xE5DC: 0x88B0,
    0xE5DD: 0x88BF,
    0xE5DE: 0x88B1,
    0xE5DF: 0x88C3,
    0xE5E0: 0x88C4,
    0xE5E1: 0x88D4,
    0xE5E2: 0x88D8,
    0xE5E3: 0x88D9,
    0xE5E4: 0x88DD,
    0xE5E5: 0x88F9,
    0xE5E6: 0x8902,
    0xE5E7: 0x88FC,
    0xE5E8: 0x88F4,
    0xE5E9: 0x88E8,
    0xE5EA: 0x88F2,
    0xE5EB: 0x8904,
    0xE5EC: 0x890C,
    0xE5ED: 0x890A,
    0xE5EE: 0x8913,
    0xE5EF: 0x8943,
    0xE5F0: 0x891E,
    0xE5F1: 0x8925,
    0xE5F2: 0x892A,
    0xE5F3: 0x892B,
    0xE5F4: 0x8941,
    0xE5F5: 0x8944,
    0xE5F6: 0x893B,
    0xE5F7: 0x8936,
    0xE5F8: 0x8938,
    0xE5F9: 0x894C,
    0xE5FA: 0x891D,
    0xE5FB: 0x8960,
    0xE5FC: 0x895E,
    0xE640: 0x8966,
    0xE641: 0x8964,
    0xE642: 0x896D,
    0xE643: 0x896A,
    0xE644: 0x896F,
    0xE645: 0x8974,
    0xE646: 0x8977,
    0xE647: 0x897E,
    0xE648: 0x8983,
    0xE649: 0x8988,
    0xE64A: 0x898A,
    0xE64B: 0x8993,
    0xE64C: 0x8998,
    0xE64D: 0x89A1,
    0xE64E: 0x89A9,
    0xE64F: 0x89A6,
    0xE650: 0x89AC,
    0xE651: 0x89AF,
    0xE652: 0x89B2,
    0xE653: 0x89BA,
    0xE654: 0x89BD,
    0xE655: 0x89BF,
    0xE656: 0x89C0,
    0xE657: 0x89DA,
    0xE658: 0x89DC,
    0xE659: 0x89DD,
    0xE65A: 0x89E7,
    0xE65B: 0x89F4,
    0xE65C: 0x89F8,
    0xE65D: 0x8A03,
    0xE65E: 0x8A16,
    0xE65F: 0x8A10,
    0xE660: 0x8A0C,
    0xE661: 0x8A1B,
    0xE662: 0x8A1D,
    0xE663: 0x8A25,
    0xE664: 0x8A36,
    0xE665: 0x8A41,
    0xE666: 0x8A5B,
    0xE667: 0x8A52,
    0xE668: 0x8A46,
    0xE669: 0x8A48,
    0xE66A: 0x8A7C,
    0xE66B: 0x8A6D,
    0xE66C: 0x8A6C,
    0xE66D: 0x8A62,
    0xE66E: 0x8A85,
    0xE66F: 0x8A82,
    0xE670: 0x8A84,
    0xE671: 0x8AA8,
    0xE672: 0x8AA1,
    0xE673: 0x8A91,
    0xE674: 0x8AA5,
    0xE675: 0x8AA6,
    0xE676: 0x8A9A,
    0xE677: 0x8AA3,
    0xE678: 0x8AC4,
    0xE679: 0x8ACD,
    0xE67A: 0x8AC2,
    0xE67B: 0x8ADA,
    0xE67C: 0x8AEB,
    0xE67D: 0x8AF3,
    0xE67E: 0x8AE7,
    0xE680: 0x8AE4,
    0xE681: 0x8AF1,
    0xE682: 0x8B14,
    0xE683: 0x8AE0,
    0xE684: 0x8AE2,
    0xE685: 0x8AF7,
    0xE686: 0x8ADE,
    0xE687: 0x8ADB,
    0xE688: 0x8B0C,
    0xE689: 0x8B07,
    0xE68A: 0x8B1A,
    0xE68B: 0x8AE1,
    0xE68C: 0x8B16,
    0xE68D: 0x8B10,
    0xE68E: 0x8B17,
    0xE68F: 0x8B20,
    0xE690: 0x8B33,
    0xE691: 0x97AB,
    0xE692: 0x8B26,
    0xE693: 0x8B2B,
    0xE694: 0x8B3E,
    0xE695: 0x8B28,
    0xE696: 0x8B41,
    0xE697: 0x8B4C,
    0xE698: 0x8B4F,
    0xE699: 0x8B4E,
    0xE69A: 0x8B49,
    0xE69B: 0x8B56,
    0xE69C: 0x8B5B,
    0xE69D: 0x8B5A,
    0xE69E: 0x8B6B,
    0xE69F: 0x8B5F,
    0xE6A0: 0x8B6C,
    0xE6A1: 0x8B6F,
    0xE6A2: 0x8B74,
    0xE6A3: 0x8B7D,
    0xE6A4: 0x8B80,
    0xE6A5: 0x8B8C,
    0xE6A6: 0x8B8E,
    0xE6A7: 0x8B92,
    0xE6A8: 0x8B93,
    0xE6A9: 0x8B96,
    0xE6AA: 0x8B99,
    0xE6AB: 0x8B9A,
    0xE6AC: 0x8C3A,
    0xE6AD: 0x8C41,
    0xE6AE: 0x8C3F,
    0xE6AF: 0x8C48,
    0xE6B0: 0x8C4C,
    0xE6B1: 0x8C4E,
    0xE6B2: 0x8C50,
    0xE6B3: 0x8C55,
    0xE6B4: 0x8C62,
    0xE6B5: 0x8C6C,
    0xE6B6: 0x8C78,
    0xE6B7: 0x8C7A,
    0xE6B8: 0x8C82,
    0xE6B9: 0x8C89,
    0xE6BA: 0x8C85,
    0xE6BB: 0x8C8A,
    0xE6BC: 0x8C8D,
    0xE6BD: 0x8C8E,
    0xE6BE: 0x8C94,
    0xE6BF: 0x8C7C,
    0xE6C0: 0x8C98,
    0xE6C1: 0x621D,
    0xE6C2: 0x8CAD,
    0xE6C3: 0x8CAA,
    0xE6C4: 0x8CBD,
    0xE6C5: 0x8CB2,
    0xE6C6: 0x8CB3,
    0xE6C7: 0x8CAE,
    0xE6C8: 0x8CB6,
    0xE6C9: 0x8CC8,
    0xE6CA: 0x8CC1,
    0xE6CB: 0x8CE4,
    0xE6CC: 0x8CE3,
    0xE6CD: 0x8CDA,
    0xE6CE: 0x8CFD,
    0xE6CF: 0x8CFA,
    0xE6D0: 0x8CFB,
    0xE6D1: 0x8D04,
    0xE6D2: 0x8D05,
    0xE6D3: 0x8D0A,
    0xE6D4: 0x8D07,
    0xE6D5: 0x8D0F,
    0xE6D6: 0x8D0D,
    0xE6D7: 0x8D10,
    0xE6D8: 0x9F4E,
    0xE6D9: 0x8D13,
    0xE6DA: 0x8CCD,
    0xE6DB: 0x8D14,
    0xE6DC: 0x8D16,
    0xE6DD: 0x8D67,
    0xE6DE: 0x8D6D,
    0xE6DF: 0x8D71,
    0xE6E0: 0x8D73,
    0xE6E1: 0x8D81,
    0xE6E2: 0x8D99,
    0xE6E3: 0x8DC2,
    0xE6E4: 0x8DBE,
    0xE6E5: 0x8DBA,
    0xE6E6: 0x8DCF,
    0xE6E7: 0x8DDA,
    0xE6E8: 0x8DD6,
    0xE6E9: 0x8DCC,
    0xE6EA: 0x8DDB,
    0xE6EB: 0x8DCB,
    0xE6EC: 0x8DEA,
    0xE6ED: 0x8DEB,
    0xE6EE: 0x8DDF,
    0xE6EF: 0x8DE3,
    0xE6F0: 0x8DFC,
    0xE6F1: 0x8E08,
    0xE6F2: 0x8E09,
    0xE6F3: 0x8DFF,
    0xE6F4: 0x8E1D,
    0xE6F5: 0x8E1E,
    0xE6F6: 0x8E10,
    0xE6F7: 0x8E1F,
    0xE6F8: 0x8E42,
    0xE6F9: 0x8E35,
    0xE6FA: 0x8E30,
    0xE6FB: 0x8E34,
    0xE6FC: 0x8E4A,
    0xE740: 0x8E47,
    0xE741: 0x8E49,
    0xE742: 0x8E4C,
    0xE743: 0x8E50,
    0xE744: 0x8E48,
    0xE745: 0x8E59,
    0xE746: 0x8E64,
    0xE747: 0x8E60,
    0xE748: 0x8E2A,
    0xE749: 0x8E63,
    0xE74A: 0x8E55,
    0xE74B: 0x8E76,
    0xE74C: 0x8E72,
    0xE74D: 0x8E7C,
    0xE74E: 0x8E81,
    0xE74F: 0x8E87,
    0xE750: 0x8E85,
    0xE751: 0x8E84,
    0xE752: 0x8E8B,
    0xE753: 0x8E8A,
    0xE754: 0x8E93,
    0xE755: 0x8E91,
    0xE756: 0x8E94,
    0xE757: 0x8E99,
    0xE758: 0x8EAA,
    0xE759: 0x8EA1,
    0xE75A: 0x8EAC,
    0xE75B: 0x8EB0,
    0xE75C: 0x8EC6,
    0xE75D: 0x8EB1,
    0xE75E: 0x8EBE,
    0xE75F: 0x8EC5,
    0xE760: 0x8EC8,
    0xE761: 0x8ECB,
    0xE762: 0x8EDB,
    0xE763: 0x8EE3,
    0xE764: 0x8EFC,
    0xE765: 0x8EFB,
    0xE766: 0x8EEB,
    0xE767: 0x8EFE,
    0xE768: 0x8F0A,
    0xE769: 0x8F05,
    0xE76A: 0x8F15,
    0xE76B: 0x8F12,
    0xE76C: 0x8F19,
    0xE76D: 0x8F13,
    0xE76E: 0x8F1C,
    0xE76F: 0x8F1F,
    0xE770: 0x8F1B,
    0xE771: 0x8F0C,
    0xE772: 0x8F26,
    0xE773: 0x8F33,
    0xE774: 0x8F3B,
    0xE775: 0x8F39,
    0xE776: 0x8F45,
    0xE777: 0x8F42,
    0xE778: 0x8F3E,
    0xE779: 0x8F4C,
    0xE77A: 0x8F49,
    0xE77B: 0x8F46,
    0xE77C: 0x8F4E,
    0xE77D: 0x8F57,
    0xE77E: 0x8F5C,
    0xE780: 0x8F62,
    0xE781: 0x8F63,
    0xE782: 0x8F64,
    0xE783: 0x8F9C,
    0xE784: 0x8F9F,
    0xE785: 0x8FA3,
    0xE786: 0x8FAD,
    0xE787: 0x8FAF,
    0xE788: 0x8FB7,
    0xE789: 0x8FDA,
    0xE78A: 0x8FE5,
    0xE78B: 0x8FE2,
    0xE78C: 0x8FEA,
    0xE78D: 0x8FEF,
    0xE78E: 0x9087,
    0xE78F: 0x8FF4,
    0xE790: 0x9005,
    0xE791: 0x8FF9,
    0xE792: 0x8FFA,
    0xE793: 0x9011,
    0xE794: 0x9015,
    0xE795: 0x9021,
    0xE796: 0x900D,
    0xE797: 0x901E,
    0xE798: 0x9016,
    0xE799: 0x900B,
    0xE79A: 0x9027,
    0xE79B: 0x9036,
    0xE79C: 0x9035,
    0xE79D: 0x9039,
    0xE79E: 0x8FF8,
    0xE79F: 0x904F,
    0xE7A0: 0x9050,
    0xE7A1: 0x9051,
    0xE7A2: 0x9052,
    0xE7A3: 0x900E,
    0xE7A4: 0x9049,
    0xE7A5: 0x903E,
    0xE7A6: 0x9056,
    0xE7A7: 0x9058,
    0xE7A8: 0x905E,
    0xE7A9: 0x9068,
    0xE7AA: 0x906F,
    0xE7AB: 0x9076,
    0xE7AC: 0x96A8,
    0xE7AD: 0x9072,
    0xE7AE: 0x9082,
    0xE7AF: 0x907D,
    0xE7B0: 0x9081,
    0xE7B1: 0x9080,
    0xE7B2: 0x908A,
    0xE7B3: 0x9089,
    0xE7B4: 0x908F,
    0xE7B5: 0x90A8,
    0xE7B6: 0x90AF,
    0xE7B7: 0x90B1,
    0xE7B8: 0x90B5,
    0xE7B9: 0x90E2,
    0xE7BA: 0x90E4,
    0xE7BB: 0x6248,
    0xE7BC: 0x90DB,
    0xE7BD: 0x9102,
    0xE7BE: 0x9112,
    0xE7BF: 0x9119,
    0xE7C0: 0x9132,
    0xE7C1: 0x9130,
    0xE7C2: 0x914A,
    0xE7C3: 0x9156,
    0xE7C4: 0x9158,
    0xE7C5: 0x9163,
    0xE7C6: 0x9165,
    0xE7C7: 0x9169,
    0xE7C8: 0x9173,
    0xE7C9: 0x9172,
    0xE7CA: 0x918B,
    0xE7CB: 0x9189,
    0xE7CC: 0x9182,
    0xE7CD: 0x91A2,
    0xE7CE: 0x91AB,
    0xE7CF: 0x91AF,
    0xE7D0: 0x91AA,
    0xE7D1: 0x91B5,
    0xE7D2: 0x91B4,
    0xE7D3: 0x91BA,
    0xE7D4: 0x91C0,
    0xE7D5: 0x91C1,
    0xE7D6: 0x91C9,
    0xE7D7: 0x91CB,
    0xE7D8: 0x91D0,
    0xE7D9: 0x91D6,
    0xE7DA: 0x91DF,
    0xE7DB: 0x91E1,
    0xE7DC: 0x91DB,
    0xE7DD: 0x91FC,
    0xE7DE: 0x91F5,
    0xE7DF: 0x91F6,
    0xE7E0: 0x921E,
    0xE7E1: 0x91FF,
    0xE7E2: 0x9214,
    0xE7E3: 0x922C,
    0xE7E4: 0x9215,
    0xE7E5: 0x9211,
    0xE7E6: 0x925E,
    0xE7E7: 0x9257,
    0xE7E8: 0x9245,
    0xE7E9: 0x9249,
    0xE7EA: 0x9264,
    0xE7EB: 0x9248,
    0xE7EC: 0x9295,
    0xE7ED: 0x923F,
    0xE7EE: 0x924B,
    0xE7EF: 0x9250,
    0xE7F0: 0x929C,
    0xE7F1: 0x9296,
    0xE7F2: 0x9293,
    0xE7F3: 0x929B,
    0xE7F4: 0x925A,
    0xE7F5: 0x92CF,
    0xE7F6: 0x92B9,
    0xE7F7: 0x92B7,
    0xE7F8: 0x92E9,
    0xE7F9: 0x930F,
    0xE7FA: 0x92FA,
    0xE7FB: 0x9344,
    0xE7FC: 0x932E,
    0xE840: 0x9319,
    0xE841: 0x9322,
    0xE842: 0x931A,
    0xE843: 0x9323,
    0xE844: 0x933A,
    0xE845: 0x9335,
    0xE846: 0x933B,
    0xE847: 0x935C,
    0xE848: 0x9360,
    0xE849: 0x937C,
    0xE84A: 0x936E,
    0xE84B: 0x9356,
    0xE84C: 0x93B0,
    0xE84D: 0x93AC,
    0xE84E: 0x93AD,
    0xE84F: 0x9394,
    0xE850: 0x93B9,
    0xE851: 0x93D6,
    0xE852: 0x93D7,
    0xE853: 0x93E8,
    0xE854: 0x93E5,
    0xE855: 0x93D8,
    0xE856: 0x93C3,
    0xE857: 0x93DD,
    0xE858: 0x93D0,
    0xE859: 0x93C8,
    0xE85A: 0x93E4,
    0xE85B: 0x941A,
    0xE85C: 0x9414,
    0xE85D: 0x9413,
    0xE85E: 0x9403,
    0xE85F: 0x9407,
    0xE860: 0x9410,
    0xE861: 0x9436,
    0xE862: 0x942B,
    0xE863: 0x9435,
    0xE864: 0x9421,
    0xE865: 0x943A,
    0xE866: 0x9441,
    0xE867: 0x9452,
    0xE868: 0x9444,
    0xE869: 0x945B,
    0xE86A: 0x9460,
    0xE86B: 0x9462,
    0xE86C: 0x945E,
    0xE86D: 0x946A,
    0xE86E: 0x9229,
    0xE86F: 0x9470,
    0xE870: 0x9475,
    0xE871: 0x9477,
    0xE872: 0x947D,
    0xE873: 0x945A,
    0xE874: 0x947C,
    0xE875: 0x947E,
    0xE876: 0x9481,
    0xE877: 0x947F,
    0xE878: 0x9582,
    0xE879: 0x9587,
    0xE87A: 0x958A,
    0xE87B: 0x9594,
    0xE87C: 0x9596,
    0xE87D: 0x9598,
    0xE87E: 0x9599,
    0xE880: 0x95A0,
    0xE881: 0x95A8,
    0xE882: 0x95A7,
    0xE883: 0x95AD,
    0xE884: 0x95BC,
    0xE885: 0x95BB,
    0xE886: 0x95B9,
    0xE887: 0x95BE,
    0xE888: 0x95CA,
    0xE889: 0x6FF6,
    0xE88A: 0x95C3,
    0xE88B: 0x95CD,
    0xE88C: 0x95CC,
    0xE88D: 0x95D5,
    0xE88E: 0x95D4,
    0xE88F: 0x95D6,
    0xE890: 0x95DC,
    0xE891: 0x95E1,
    0xE892: 0x95E5,
    0xE893: 0x95E2,
    0xE894: 0x9621,
    0xE895: 0x9628,
    0xE896: 0x962E,
    0xE897: 0x962F,
    0xE898: 0x9642,
    0xE899: 0x964C,
    0xE89A: 0x964F,
    0xE89B: 0x964B,
    0xE89C: 0x9677,
    0xE89D: 0x965C,
    0xE89E: 0x965E,
    0xE89F: 0x965D,
    0xE8A0: 0x965F,
    0xE8A1: 0x9666,
    0xE8A2: 0x9672,
    0xE8A3: 0x966C,
    0xE8A4: 0x968D,
    0xE8A5: 0x9698,
    0xE8A6: 0x9695,
    0xE8A7: 0x9697,
    0xE8A8: 0x96AA,
    0xE8A9: 0x96A7,
    0xE8AA: 0x96B1,
    0xE8AB: 0x96B2,
    0xE8AC: 0x96B0,
    0xE8AD: 0x96B4,
    0xE8AE: 0x96B6,
    0xE8AF: 0x96B8,
    0xE8B0: 0x96B9,
    0xE8B1: 0x96CE,
    0xE8B2: 0x96CB,
    0xE8B3: 0x96C9,
    0xE8B4: 0x96CD,
    0xE8B5: 0x894D,
    0xE8B6: 0x96DC,
    0xE8B7: 0x970D,
    0xE8B8: 0x96D5,
    0xE8B9: 0x96F9,
    0xE8BA: 0x9704,
    0xE8BB: 0x9706,
    0xE8BC: 0x9708,
    0xE8BD: 0x9713,
    0xE8BE: 0x970E,
    0xE8BF: 0x9711,
    0xE8C0: 0x970F,
    0xE8C1: 0x9716,
    0xE8C2: 0x9719,
    0xE8C3: 0x9724,
    0xE8C4: 0x972A,
    0xE8C5: 0x9730,
    0xE8C6: 0x9739,
    0xE8C7: 0x973D,
    0xE8C8: 0x973E,
    0xE8C9: 0x9744,
    0xE8CA: 0x9746,
    0xE8CB: 0x9748,
    0xE8CC: 0x9742,
    0xE8CD: 0x9749,
    0xE8CE: 0x975C,
    0xE8CF: 0x9760,
    0xE8D0: 0x9764,
    0xE8D1: 0x9766,
    0xE8D2: 0x9768,
    0xE8D3: 0x52D2,
    0xE8D4: 0x976B,
    0xE8D5: 0x9771,
    0xE8D6: 0x9779,
    0xE8D7: 0x9785,
    0xE8D8: 0x977C,
    0xE8D9: 0x9781,
    0xE8DA: 0x977A,
    0xE8DB: 0x9786,
    0xE8DC: 0x978B,
    0xE8DD: 0x978F,
    0xE8DE: 0x9790,
    0xE8DF: 0x979C,
    0xE8E0: 0x97A8,
    0xE8E1: 0x97A6,
    0xE8E2: 0x97A3,
    0xE8E3: 0x97B3,
    0xE8E4: 0x97B4,
    0xE8E5: 0x97C3,
    0xE8E6: 0x97C6,
    0xE8E7: 0x97C8,
    0xE8E8: 0x97CB,
    0xE8E9: 0x97DC,
    0xE8EA: 0x97ED,
    0xE8EB: 0x9F4F,
    0xE8EC: 0x97F2,
    0xE8ED: 0x7ADF,
    0xE8EE: 0x97F6,
    0xE8EF: 0x97F5,
    0xE8F0: 0x980F,
    0xE8F1: 0x980C,
    0xE8F2: 0x9838,
    0xE8F3: 0x9824,
    0xE8F4: 0x9821,
    0xE8F5: 0x9837,
    0xE8F6: 0x983D,
    0xE8F7: 0x9846,
    0xE8F8: 0x984F,
    0xE8F9: 0x984B,
    0xE8FA: 0x986B,
    0xE8FB: 0x986F,
    0xE8FC: 0x9870,
    0xE940: 0x9871,
    0xE941: 0x9874,
    0xE942: 0x9873,
    0xE943: 0x98AA,
    0xE944: 0x98AF,
    0xE945: 0x98B1,
    0xE946: 0x98B6,
    0xE947: 0x98C4,
    0xE948: 0x98C3,
    0xE949: 0x98C6,
    0xE94A: 0x98E9,
    0xE94B: 0x98EB,
    0xE94C: 0x9903,
    0xE94D: 0x9909,
    0xE94E: 0x9912,
    0xE94F: 0x9914,
    0xE950: 0x9918,
    0xE951: 0x9921,
    0xE952: 0x991D,
    0xE953: 0x991E,
    0xE954: 0x9924,
    0xE955: 0x9920,
    0xE956: 0x992C,
    0xE957: 0x992E,
    0xE958: 0x993D,
    0xE959: 0x993E,
    0xE95A: 0x9942,
    0xE95B: 0x9949,
    0xE95C: 0x9945,
    0xE95D: 0x9950,
    0xE95E: 0x994B,
    0xE95F: 0x9951,
    0xE960: 0x9952,
    0xE961: 0x994C,
    0xE962: 0x9955,
    0xE963: 0x9997,
    0xE964: 0x9998,
    0xE965: 0x99A5,
    0xE966: 0x99AD,
    0xE967: 0x99AE,
    0xE968: 0x99BC,
    0xE969: 0x99DF,
    0xE96A: 0x99DB,
    0xE96B: 0x99DD,
    0xE96C: 0x99D8,
    0xE96D: 0x99D1,
    0xE96E: 0x99ED,
    0xE96F: 0x99EE,
    0xE970: 0x99F1,
    0xE971: 0x99F2,
    0xE972: 0x99FB,
    0xE973: 0x99F8,
    0xE974: 0x9A01,
    0xE975: 0x9A0F,
    0xE976: 0x9A05,
    0xE977: 0x99E2,
    0xE978: 0x9A19,
    0xE979: 0x9A2B,
    0xE97A: 0x9A37,
    0xE97B: 0x9A45,
    0xE97C: 0x9A42,
    0xE97D: 0x9A40,
    0xE97E: 0x9A43,
    0xE980: 0x9A3E,
    0xE981: 0x9A55,
    0xE982: 0x9A4D,
    0xE983: 0x9A5B,
    0xE984: 0x9A57,
    0xE985: 0x9A5F,
    0xE986: 0x9A62,
    0xE987: 0x9A65,
    0xE988: 0x9A64,
    0xE989: 0x9A69,
    0xE98A: 0x9A6B,
    0xE98B: 0x9A6A,
    0xE98C: 0x9AAD,
    0xE98D: 0x9AB0,
    0xE98E: 0x9ABC,
    0xE98F: 0x9AC0,
    0xE990: 0x9ACF,
    0xE991: 0x9AD1,
    0xE992: 0x9AD3,
    0xE993: 0x9AD4,
    0xE994: 0x9ADE,
    0xE995: 0x9ADF,
    0xE996: 0x9AE2,
    0xE997: 0x9AE3,
    0xE998: 0x9AE6,
    0xE999: 0x9AEF,
    0xE99A: 0x9AEB,
    0xE99B: 0x9AEE,
    0xE99C: 0x9AF4,
    0xE99D: 0x9AF1,
    0xE99E: 0x9AF7,
    0xE99F: 0x9AFB,
    0xE9A0: 0x9B06,
    0xE9A1: 0x9B18,
    0xE9A2: 0x9B1A,
    0xE9A3: 0x9B1F,
    0xE9A4: 0x9B22,
    0xE9A5: 0x9B23,
    0xE9A6: 0x9B25,
    0xE9A7: 0x9B27,
    0xE9A8: 0x9B28,
    0xE9A9: 0x9B29,
    0xE9AA: 0x9B2A,
    0xE9AB: 0x9B2E,
    0xE9AC: 0x9B2F,
    0xE9AD: 0x9B32,
    0xE9AE: 0x9B44,
    0xE9AF: 0x9B43,
    0xE9B0: 0x9B4F,
    0xE9B1: 0x9B4D,
    0xE9B2: 0x9B4E,
    0xE9B3: 0x9B51,
    0xE9B4: 0x9B58,
    0xE9B5: 0x9B74,
    0xE9B6: 0x9B93,
    0xE9B7: 0x9B83,
    0xE9B8: 0x9B91,
    0xE9B9: 0x9B96,
    0xE9BA: 0x9B97,
    0xE9BB: 0x9B9F,
    0xE9BC: 0x9BA0,
    0xE9BD: 0x9BA8,
    0xE9BE: 0x9BB4,
    0xE9BF: 0x9BC0,
    0xE9C0: 0x9BCA,
    0xE9C1: 0x9BB9,
    0xE9C2: 0x9BC6,
    0xE9C3: 0x9BCF,
    0xE9C4: 0x9BD1,
    0xE9C5: 0x9BD2,
    0xE9C6: 0x9BE3,
    0xE9C7: 0x9BE2,
    0xE9C8: 0x9BE4,
    0xE9C9: 0x9BD4,
    0xE9CA: 0x9BE1,
    0xE9CB: 0x9C3A,
    0xE9CC: 0x9BF2,
    0xE9CD: 0x9BF1,
    0xE9CE: 0x9BF0,
    0xE9CF: 0x9C15,
    0xE9D0: 0x9C14,
    0xE9D1: 0x9C09,
    0xE9D2: 0x9C13,
    0xE9D3: 0x9C0C,
    0xE9D4: 0x9C06,
    0xE9D5: 0x9C08,
    0xE9D6: 0x9C12,
    0xE9D7: 0x9C0A,
    0xE9D8: 0x9C04,
    0xE9D9: 0x9C2E,
    0xE9DA: 0x9C1B,
    0xE9DB: 0x9C25,
    0xE9DC: 0x9C24,
    0xE9DD: 0x9C21,
    0xE9DE: 0x9C30,
    0xE9DF: 0x9C47,
    0xE9E0: 0x9C32,
    0xE9E1: 0x9C46,
    0xE9E2: 0x9C3E,
    0xE9E3: 0x9C5A,
    0xE9E4: 0x9C60,
    0xE9E5: 0x9C67,
    0xE9E6: 0x9C76,
    0xE9E7: 0x9C78,
    0xE9E8: 0x9CE7,
    0xE9E9: 0x9CEC,
    0xE9EA: 0x9CF0,
    0xE9EB: 0x9D09,
    0xE9EC: 0x9D08,
    0xE9ED: 0x9CEB,
    0xE9EE: 0x9D03,
    0xE9EF: 0x9D06,
    0xE9F0: 0x9D2A,
    0xE9F1: 0x9D26,
    0xE9F2: 0x9DAF,
    0xE9F3: 0x9D23,
    0xE9F4: 0x9D1F,
    0xE9F5: 0x9D44,
    0xE9F6: 0x9D15,
    0xE9F7: 0x9D12,
    0xE9F8: 0x9D41,
    0xE9F9: 0x9D3F,
    0xE9FA: 0x9D3E,
    0xE9FB: 0x9D46,
    0xE9FC: 0x9D48,
    0xEA40: 0x9D5D,
    0xEA41: 0x9D5E,
    0xEA42: 0x9D64,
    0xEA43: 0x9D51,
    0xEA44: 0x9D50,
    0xEA45: 0x9D59,
    0xEA46: 0x9D72,
    0xEA47: 0x9D89,
    0xEA48: 0x9D87,
    0xEA49: 0x9DAB,
    0xEA4A: 0x9D6F,
    0xEA4B: 0x9D7A,
    0xEA4C: 0x9D9A,
    0xEA4D: 0x9DA4,
    0xEA4E: 0x9DA9,
    0xEA4F: 0x9DB2,
    0xEA50: 0x9DC4,
    0xEA51: 0x9DC1,
    0xEA52: 0x9DBB,
    0xEA53: 0x9DB8,
    0xEA54: 0x9DBA,
    0xEA55: 0x9DC6,
    0xEA56: 0x9DCF,
    0xEA57: 0x9DC2,
    0xEA58: 0x9DD9,
    0xEA59: 0x9DD3,
    0xEA5A: 0x9DF8,
    0xEA5B: 0x9DE6,
    0xEA5C: 0x9DED,
    0xEA5D: 0x9DEF,
    0xEA5E: 0x9DFD,
    0xEA5F: 0x9E1A,
    0xEA60: 0x9E1B,
    0xEA61: 0x9E1E,
    0xEA62: 0x9E75,
    0xEA63: 0x9E79,
    0xEA64: 0x9E7D,
    0xEA65: 0x9E81,
    0xEA66: 0x9E88,
    0xEA67: 0x9E8B,
    0xEA68: 0x9E8C,
    0xEA69: 0x9E92,
    0xEA6A: 0x9E95,
    0xEA6B: 0x9E91,
    0xEA6C: 0x9E9D,
    0xEA6D: 0x9EA5,
    0xEA6E: 0x9EA9,
    0xEA6F: 0x9EB8,
    0xEA70: 0x9EAA,
    0xEA71: 0x9EAD,
    0xEA72: 0x9761,
    0xEA73: 0x9ECC,
    0xEA74: 0x9ECE,
    0xEA75: 0x9ECF,
    0xEA76: 0x9ED0,
    0xEA77: 0x9ED4,
    0xEA78: 0x9EDC,
    0xEA79: 0x9EDE,
    0xEA7A: 0x9EDD,
    0xEA7B: 0x9EE0,
    0xEA7C: 0x9EE5,
    0xEA7D: 0x9EE8,
    0xEA7E: 0x9EEF,
    0xEA80: 0x9EF4,
    0xEA81: 0x9EF6,
    0xEA82: 0x9EF7,
    0xEA83: 0x9EF9,
    0xEA84: 0x9EFB,
    0xEA85: 0x9EFC,
    0xEA86: 0x9EFD,
    0xEA87: 0x9F07,
    0xEA88: 0x9F08,
    0xEA89: 0x76B7,
    0xEA8A: 0x9F15,
    0xEA8B: 0x9F21,
    0xEA8C: 0x9F2C,
    0xEA8D: 0x9F3E,
    0xEA8E: 0x9F4A,
    0xEA8F: 0x9F52,
    0xEA90: 0x9F54,
    0xEA91: 0x9F63,
    0xEA92: 0x9F5F,
    0xEA93: 0x9F60,
    0xEA94: 0x9F61,
    0xEA95: 0x9F66,
    0xEA96: 0x9F67,
    0xEA97: 0x9F6C,
    0xEA98: 0x9F6A,
    0xEA99: 0x9F77,
    0xEA9A: 0x9F72,
    0xEA9B: 0x9F76,
    0xEA9C: 0x9F95,
    0xEA9D: 0x9F9C,
    0xEA9E: 0x9FA0,
    0xEA9F: 0x582F,
    0xEAA0: 0x69C7,
    0xEAA1: 0x9059,
    0xEAA2: 0x7464,
    0xEAA3: 0x51DC,
    0xEAA4: 0x7199,
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGF_1 = __webpack_require__(1);
var GenericGFPoly_1 = __webpack_require__(2);
function runEuclideanAlgorithm(field, a, b, R) {
    // Assume a's degree is >= b's
    if (a.degree() < b.degree()) {
        _a = [b, a], a = _a[0], b = _a[1];
    }
    var rLast = a;
    var r = b;
    var tLast = field.zero;
    var t = field.one;
    // Run Euclidean algorithm until r's degree is less than R/2
    while (r.degree() >= R / 2) {
        var rLastLast = rLast;
        var tLastLast = tLast;
        rLast = r;
        tLast = t;
        // Divide rLastLast by rLast, with quotient in q and remainder in r
        if (rLast.isZero()) {
            // Euclidean algorithm already terminated?
            return null;
        }
        r = rLastLast;
        var q = field.zero;
        var denominatorLeadingTerm = rLast.getCoefficient(rLast.degree());
        var dltInverse = field.inverse(denominatorLeadingTerm);
        while (r.degree() >= rLast.degree() && !r.isZero()) {
            var degreeDiff = r.degree() - rLast.degree();
            var scale = field.multiply(r.getCoefficient(r.degree()), dltInverse);
            q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
            r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
        }
        t = q.multiplyPoly(tLast).addOrSubtract(tLastLast);
        if (r.degree() >= rLast.degree()) {
            return null;
        }
    }
    var sigmaTildeAtZero = t.getCoefficient(0);
    if (sigmaTildeAtZero === 0) {
        return null;
    }
    var inverse = field.inverse(sigmaTildeAtZero);
    return [t.multiply(inverse), r.multiply(inverse)];
    var _a;
}
function findErrorLocations(field, errorLocator) {
    // This is a direct application of Chien's search
    var numErrors = errorLocator.degree();
    if (numErrors === 1) {
        return [errorLocator.getCoefficient(1)];
    }
    var result = new Array(numErrors);
    var errorCount = 0;
    for (var i = 1; i < field.size && errorCount < numErrors; i++) {
        if (errorLocator.evaluateAt(i) === 0) {
            result[errorCount] = field.inverse(i);
            errorCount++;
        }
    }
    if (errorCount !== numErrors) {
        return null;
    }
    return result;
}
function findErrorMagnitudes(field, errorEvaluator, errorLocations) {
    // This is directly applying Forney's Formula
    var s = errorLocations.length;
    var result = new Array(s);
    for (var i = 0; i < s; i++) {
        var xiInverse = field.inverse(errorLocations[i]);
        var denominator = 1;
        for (var j = 0; j < s; j++) {
            if (i !== j) {
                denominator = field.multiply(denominator, GenericGF_1.addOrSubtractGF(1, field.multiply(errorLocations[j], xiInverse)));
            }
        }
        result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
        if (field.generatorBase !== 0) {
            result[i] = field.multiply(result[i], xiInverse);
        }
    }
    return result;
}
function decode(bytes, twoS) {
    var outputBytes = new Uint8ClampedArray(bytes.length);
    outputBytes.set(bytes);
    var field = new GenericGF_1.default(0x011D, 256, 0); // x^8 + x^4 + x^3 + x^2 + 1
    var poly = new GenericGFPoly_1.default(field, outputBytes);
    var syndromeCoefficients = new Uint8ClampedArray(twoS);
    var error = false;
    for (var s = 0; s < twoS; s++) {
        var evaluation = poly.evaluateAt(field.exp(s + field.generatorBase));
        syndromeCoefficients[syndromeCoefficients.length - 1 - s] = evaluation;
        if (evaluation !== 0) {
            error = true;
        }
    }
    if (!error) {
        return outputBytes;
    }
    var syndrome = new GenericGFPoly_1.default(field, syndromeCoefficients);
    var sigmaOmega = runEuclideanAlgorithm(field, field.buildMonomial(twoS, 1), syndrome, twoS);
    if (sigmaOmega === null) {
        return null;
    }
    var errorLocations = findErrorLocations(field, sigmaOmega[0]);
    if (errorLocations == null) {
        return null;
    }
    var errorMagnitudes = findErrorMagnitudes(field, sigmaOmega[1], errorLocations);
    for (var i = 0; i < errorLocations.length; i++) {
        var position = outputBytes.length - 1 - field.log(errorLocations[i]);
        if (position < 0) {
            return null;
        }
        outputBytes[position] = GenericGF_1.addOrSubtractGF(outputBytes[position], errorMagnitudes[i]);
    }
    return outputBytes;
}
exports.decode = decode;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSIONS = [
    {
        infoBits: null,
        versionNumber: 1,
        alignmentPatternCenters: [],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 7,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 19 }],
            },
            {
                ecCodewordsPerBlock: 10,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }],
            },
            {
                ecCodewordsPerBlock: 13,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 13 }],
            },
            {
                ecCodewordsPerBlock: 17,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 9 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 2,
        alignmentPatternCenters: [6, 18],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 10,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 34 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 28 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 22 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 3,
        alignmentPatternCenters: [6, 22],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 15,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 55 }],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 44 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 17 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 13 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 4,
        alignmentPatternCenters: [6, 26],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 80 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 32 }],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 24 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 9 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 5,
        alignmentPatternCenters: [6, 30],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 108 }],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 43 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                    { numBlocks: 2, dataCodewordsPerBlock: 16 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 11 },
                    { numBlocks: 2, dataCodewordsPerBlock: 12 },
                ],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 6,
        alignmentPatternCenters: [6, 34],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 68 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 27 }],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 19 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 15 }],
            },
        ],
    },
    {
        infoBits: 0x07C94,
        versionNumber: 7,
        alignmentPatternCenters: [6, 22, 38],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 78 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 31 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 4, dataCodewordsPerBlock: 15 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 13 },
                    { numBlocks: 1, dataCodewordsPerBlock: 14 },
                ],
            },
        ],
    },
    {
        infoBits: 0x085BC,
        versionNumber: 8,
        alignmentPatternCenters: [6, 24, 42],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 97 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 38 },
                    { numBlocks: 2, dataCodewordsPerBlock: 39 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 18 },
                    { numBlocks: 2, dataCodewordsPerBlock: 19 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 14 },
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x09A99,
        versionNumber: 9,
        alignmentPatternCenters: [6, 26, 46],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 116 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 36 },
                    { numBlocks: 2, dataCodewordsPerBlock: 37 },
                ],
            },
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 16 },
                    { numBlocks: 4, dataCodewordsPerBlock: 17 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 12 },
                    { numBlocks: 4, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0A4D3,
        versionNumber: 10,
        alignmentPatternCenters: [6, 28, 50],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 68 },
                    { numBlocks: 2, dataCodewordsPerBlock: 69 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 43 },
                    { numBlocks: 1, dataCodewordsPerBlock: 44 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 19 },
                    { numBlocks: 2, dataCodewordsPerBlock: 20 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 15 },
                    { numBlocks: 2, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0BBF6,
        versionNumber: 11,
        alignmentPatternCenters: [6, 30, 54],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 81 }],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 50 },
                    { numBlocks: 4, dataCodewordsPerBlock: 51 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 22 },
                    { numBlocks: 4, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 12 },
                    { numBlocks: 8, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0C762,
        versionNumber: 12,
        alignmentPatternCenters: [6, 32, 58],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 92 },
                    { numBlocks: 2, dataCodewordsPerBlock: 93 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 36 },
                    { numBlocks: 2, dataCodewordsPerBlock: 37 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 20 },
                    { numBlocks: 6, dataCodewordsPerBlock: 21 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 14 },
                    { numBlocks: 4, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0D847,
        versionNumber: 13,
        alignmentPatternCenters: [6, 34, 62],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 107 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 37 },
                    { numBlocks: 1, dataCodewordsPerBlock: 38 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 20 },
                    { numBlocks: 4, dataCodewordsPerBlock: 21 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 11 },
                    { numBlocks: 4, dataCodewordsPerBlock: 12 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0E60D,
        versionNumber: 14,
        alignmentPatternCenters: [6, 26, 46, 66],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 115 },
                    { numBlocks: 1, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 40 },
                    { numBlocks: 5, dataCodewordsPerBlock: 41 },
                ],
            },
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 16 },
                    { numBlocks: 5, dataCodewordsPerBlock: 17 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 12 },
                    { numBlocks: 5, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0F928,
        versionNumber: 15,
        alignmentPatternCenters: [6, 26, 48, 70],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 87 },
                    { numBlocks: 1, dataCodewordsPerBlock: 88 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 41 },
                    { numBlocks: 5, dataCodewordsPerBlock: 42 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 24 },
                    { numBlocks: 7, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 12 },
                    { numBlocks: 7, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x10B78,
        versionNumber: 16,
        alignmentPatternCenters: [6, 26, 50, 74],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 98 },
                    { numBlocks: 1, dataCodewordsPerBlock: 99 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 45 },
                    { numBlocks: 3, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 19 },
                    { numBlocks: 2, dataCodewordsPerBlock: 20 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 15 },
                    { numBlocks: 13, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1145D,
        versionNumber: 17,
        alignmentPatternCenters: [6, 30, 54, 78],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 107 },
                    { numBlocks: 5, dataCodewordsPerBlock: 108 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 46 },
                    { numBlocks: 1, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 22 },
                    { numBlocks: 15, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 17, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x12A17,
        versionNumber: 18,
        alignmentPatternCenters: [6, 30, 56, 82],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 120 },
                    { numBlocks: 1, dataCodewordsPerBlock: 121 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 9, dataCodewordsPerBlock: 43 },
                    { numBlocks: 4, dataCodewordsPerBlock: 44 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 22 },
                    { numBlocks: 1, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x13532,
        versionNumber: 19,
        alignmentPatternCenters: [6, 30, 58, 86],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 113 },
                    { numBlocks: 4, dataCodewordsPerBlock: 114 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 44 },
                    { numBlocks: 11, dataCodewordsPerBlock: 45 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 21 },
                    { numBlocks: 4, dataCodewordsPerBlock: 22 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 9, dataCodewordsPerBlock: 13 },
                    { numBlocks: 16, dataCodewordsPerBlock: 14 },
                ],
            },
        ],
    },
    {
        infoBits: 0x149A6,
        versionNumber: 20,
        alignmentPatternCenters: [6, 34, 62, 90],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 107 },
                    { numBlocks: 5, dataCodewordsPerBlock: 108 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 41 },
                    { numBlocks: 13, dataCodewordsPerBlock: 42 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 24 },
                    { numBlocks: 5, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 15 },
                    { numBlocks: 10, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x15683,
        versionNumber: 21,
        alignmentPatternCenters: [6, 28, 50, 72, 94],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 116 },
                    { numBlocks: 4, dataCodewordsPerBlock: 117 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 42 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 22 },
                    { numBlocks: 6, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 16 },
                    { numBlocks: 6, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x168C9,
        versionNumber: 22,
        alignmentPatternCenters: [6, 26, 50, 74, 98],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 111 },
                    { numBlocks: 7, dataCodewordsPerBlock: 112 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 46 }],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 24 },
                    { numBlocks: 16, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 34, dataCodewordsPerBlock: 13 }],
            },
        ],
    },
    {
        infoBits: 0x177EC,
        versionNumber: 23,
        alignmentPatternCenters: [6, 30, 54, 74, 102],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 121 },
                    { numBlocks: 5, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 47 },
                    { numBlocks: 14, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 16, dataCodewordsPerBlock: 15 },
                    { numBlocks: 14, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x18EC4,
        versionNumber: 24,
        alignmentPatternCenters: [6, 28, 54, 80, 106],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 117 },
                    { numBlocks: 4, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 45 },
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 24 },
                    { numBlocks: 16, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 30, dataCodewordsPerBlock: 16 },
                    { numBlocks: 2, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x191E1,
        versionNumber: 25,
        alignmentPatternCenters: [6, 32, 58, 84, 110],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 106 },
                    { numBlocks: 4, dataCodewordsPerBlock: 107 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 47 },
                    { numBlocks: 13, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 24 },
                    { numBlocks: 22, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 15 },
                    { numBlocks: 13, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1AFAB,
        versionNumber: 26,
        alignmentPatternCenters: [6, 30, 58, 86, 114],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 114 },
                    { numBlocks: 2, dataCodewordsPerBlock: 115 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 46 },
                    { numBlocks: 4, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 28, dataCodewordsPerBlock: 22 },
                    { numBlocks: 6, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 33, dataCodewordsPerBlock: 16 },
                    { numBlocks: 4, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1B08E,
        versionNumber: 27,
        alignmentPatternCenters: [6, 34, 62, 90, 118],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 122 },
                    { numBlocks: 4, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 45 },
                    { numBlocks: 3, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 23 },
                    { numBlocks: 26, dataCodewordsPerBlock: 24 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 15 },
                    { numBlocks: 28, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1CC1A,
        versionNumber: 28,
        alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 117 },
                    { numBlocks: 10, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 45 },
                    { numBlocks: 23, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 24 },
                    { numBlocks: 31, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 15 },
                    { numBlocks: 31, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1D33F,
        versionNumber: 29,
        alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 116 },
                    { numBlocks: 7, dataCodewordsPerBlock: 117 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 21, dataCodewordsPerBlock: 45 },
                    { numBlocks: 7, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 23 },
                    { numBlocks: 37, dataCodewordsPerBlock: 24 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                    { numBlocks: 26, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1ED75,
        versionNumber: 30,
        alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 115 },
                    { numBlocks: 10, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 47 },
                    { numBlocks: 10, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 24 },
                    { numBlocks: 25, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 23, dataCodewordsPerBlock: 15 },
                    { numBlocks: 25, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1F250,
        versionNumber: 31,
        alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 115 },
                    { numBlocks: 3, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 46 },
                    { numBlocks: 29, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 42, dataCodewordsPerBlock: 24 },
                    { numBlocks: 1, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 23, dataCodewordsPerBlock: 15 },
                    { numBlocks: 28, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x209D5,
        versionNumber: 32,
        alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 115 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 46 },
                    { numBlocks: 23, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 24 },
                    { numBlocks: 35, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                    { numBlocks: 35, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x216F0,
        versionNumber: 33,
        alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 115 },
                    { numBlocks: 1, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                    { numBlocks: 21, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 29, dataCodewordsPerBlock: 24 },
                    { numBlocks: 19, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 15 },
                    { numBlocks: 46, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x228BA,
        versionNumber: 34,
        alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 115 },
                    { numBlocks: 6, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                    { numBlocks: 23, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 44, dataCodewordsPerBlock: 24 },
                    { numBlocks: 7, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 59, dataCodewordsPerBlock: 16 },
                    { numBlocks: 1, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x2379F,
        versionNumber: 35,
        alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 121 },
                    { numBlocks: 7, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 47 },
                    { numBlocks: 26, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 39, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 15 },
                    { numBlocks: 41, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x24B0B,
        versionNumber: 36,
        alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 121 },
                    { numBlocks: 14, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 47 },
                    { numBlocks: 34, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 46, dataCodewordsPerBlock: 24 },
                    { numBlocks: 10, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                    { numBlocks: 64, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x2542E,
        versionNumber: 37,
        alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 122 },
                    { numBlocks: 4, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 29, dataCodewordsPerBlock: 46 },
                    { numBlocks: 14, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 49, dataCodewordsPerBlock: 24 },
                    { numBlocks: 10, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 24, dataCodewordsPerBlock: 15 },
                    { numBlocks: 46, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x26A64,
        versionNumber: 38,
        alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 122 },
                    { numBlocks: 18, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 46 },
                    { numBlocks: 32, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 48, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 42, dataCodewordsPerBlock: 15 },
                    { numBlocks: 32, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x27541,
        versionNumber: 39,
        alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 20, dataCodewordsPerBlock: 117 },
                    { numBlocks: 4, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 40, dataCodewordsPerBlock: 47 },
                    { numBlocks: 7, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 43, dataCodewordsPerBlock: 24 },
                    { numBlocks: 22, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 15 },
                    { numBlocks: 67, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x28C69,
        versionNumber: 40,
        alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 118 },
                    { numBlocks: 6, dataCodewordsPerBlock: 119 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 18, dataCodewordsPerBlock: 47 },
                    { numBlocks: 31, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 34, dataCodewordsPerBlock: 24 },
                    { numBlocks: 34, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 20, dataCodewordsPerBlock: 15 },
                    { numBlocks: 61, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
];


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __webpack_require__(0);
function squareToQuadrilateral(p1, p2, p3, p4) {
    var dx3 = p1.x - p2.x + p3.x - p4.x;
    var dy3 = p1.y - p2.y + p3.y - p4.y;
    if (dx3 === 0 && dy3 === 0) {
        return {
            a11: p2.x - p1.x,
            a12: p2.y - p1.y,
            a13: 0,
            a21: p3.x - p2.x,
            a22: p3.y - p2.y,
            a23: 0,
            a31: p1.x,
            a32: p1.y,
            a33: 1,
        };
    }
    else {
        var dx1 = p2.x - p3.x;
        var dx2 = p4.x - p3.x;
        var dy1 = p2.y - p3.y;
        var dy2 = p4.y - p3.y;
        var denominator = dx1 * dy2 - dx2 * dy1;
        var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
        var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
        return {
            a11: p2.x - p1.x + a13 * p2.x,
            a12: p2.y - p1.y + a13 * p2.y,
            a13: a13,
            a21: p4.x - p1.x + a23 * p4.x,
            a22: p4.y - p1.y + a23 * p4.y,
            a23: a23,
            a31: p1.x,
            a32: p1.y,
            a33: 1,
        };
    }
}
function quadrilateralToSquare(p1, p2, p3, p4) {
    // Here, the adjoint serves as the inverse:
    var sToQ = squareToQuadrilateral(p1, p2, p3, p4);
    return {
        a11: sToQ.a22 * sToQ.a33 - sToQ.a23 * sToQ.a32,
        a12: sToQ.a13 * sToQ.a32 - sToQ.a12 * sToQ.a33,
        a13: sToQ.a12 * sToQ.a23 - sToQ.a13 * sToQ.a22,
        a21: sToQ.a23 * sToQ.a31 - sToQ.a21 * sToQ.a33,
        a22: sToQ.a11 * sToQ.a33 - sToQ.a13 * sToQ.a31,
        a23: sToQ.a13 * sToQ.a21 - sToQ.a11 * sToQ.a23,
        a31: sToQ.a21 * sToQ.a32 - sToQ.a22 * sToQ.a31,
        a32: sToQ.a12 * sToQ.a31 - sToQ.a11 * sToQ.a32,
        a33: sToQ.a11 * sToQ.a22 - sToQ.a12 * sToQ.a21,
    };
}
function times(a, b) {
    return {
        a11: a.a11 * b.a11 + a.a21 * b.a12 + a.a31 * b.a13,
        a12: a.a12 * b.a11 + a.a22 * b.a12 + a.a32 * b.a13,
        a13: a.a13 * b.a11 + a.a23 * b.a12 + a.a33 * b.a13,
        a21: a.a11 * b.a21 + a.a21 * b.a22 + a.a31 * b.a23,
        a22: a.a12 * b.a21 + a.a22 * b.a22 + a.a32 * b.a23,
        a23: a.a13 * b.a21 + a.a23 * b.a22 + a.a33 * b.a23,
        a31: a.a11 * b.a31 + a.a21 * b.a32 + a.a31 * b.a33,
        a32: a.a12 * b.a31 + a.a22 * b.a32 + a.a32 * b.a33,
        a33: a.a13 * b.a31 + a.a23 * b.a32 + a.a33 * b.a33,
    };
}
function extract(image, location) {
    var qToS = quadrilateralToSquare({ x: 3.5, y: 3.5 }, { x: location.dimension - 3.5, y: 3.5 }, { x: location.dimension - 6.5, y: location.dimension - 6.5 }, { x: 3.5, y: location.dimension - 3.5 });
    var sToQ = squareToQuadrilateral(location.topLeft, location.topRight, location.alignmentPattern, location.bottomLeft);
    var transform = times(sToQ, qToS);
    var matrix = BitMatrix_1.BitMatrix.createEmpty(location.dimension, location.dimension);
    var mappingFunction = function (x, y) {
        var denominator = transform.a13 * x + transform.a23 * y + transform.a33;
        return {
            x: (transform.a11 * x + transform.a21 * y + transform.a31) / denominator,
            y: (transform.a12 * x + transform.a22 * y + transform.a32) / denominator,
        };
    };
    for (var y = 0; y < location.dimension; y++) {
        for (var x = 0; x < location.dimension; x++) {
            var xValue = x + 0.5;
            var yValue = y + 0.5;
            var sourcePixel = mappingFunction(xValue, yValue);
            matrix.set(x, y, image.get(Math.floor(sourcePixel.x), Math.floor(sourcePixel.y)));
        }
    }
    return {
        matrix: matrix,
        mappingFunction: mappingFunction,
    };
}
exports.extract = extract;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MAX_FINDERPATTERNS_TO_SEARCH = 4;
var MIN_QUAD_RATIO = 0.5;
var MAX_QUAD_RATIO = 1.5;
var distance = function (a, b) { return Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)); };
function sum(values) {
    return values.reduce(function (a, b) { return a + b; });
}
// Takes three finder patterns and organizes them into topLeft, topRight, etc
function reorderFinderPatterns(pattern1, pattern2, pattern3) {
    // Find distances between pattern centers
    var oneTwoDistance = distance(pattern1, pattern2);
    var twoThreeDistance = distance(pattern2, pattern3);
    var oneThreeDistance = distance(pattern1, pattern3);
    var bottomLeft;
    var topLeft;
    var topRight;
    // Assume one closest to other two is B; A and C will just be guesses at first
    if (twoThreeDistance >= oneTwoDistance && twoThreeDistance >= oneThreeDistance) {
        _a = [pattern2, pattern1, pattern3], bottomLeft = _a[0], topLeft = _a[1], topRight = _a[2];
    }
    else if (oneThreeDistance >= twoThreeDistance && oneThreeDistance >= oneTwoDistance) {
        _b = [pattern1, pattern2, pattern3], bottomLeft = _b[0], topLeft = _b[1], topRight = _b[2];
    }
    else {
        _c = [pattern1, pattern3, pattern2], bottomLeft = _c[0], topLeft = _c[1], topRight = _c[2];
    }
    // Use cross product to figure out whether bottomLeft (A) and topRight (C) are correct or flipped in relation to topLeft (B)
    // This asks whether BC x BA has a positive z component, which is the arrangement we want. If it's negative, then
    // we've got it flipped around and should swap topRight and bottomLeft.
    if (((topRight.x - topLeft.x) * (bottomLeft.y - topLeft.y)) - ((topRight.y - topLeft.y) * (bottomLeft.x - topLeft.x)) < 0) {
        _d = [topRight, bottomLeft], bottomLeft = _d[0], topRight = _d[1];
    }
    return { bottomLeft: bottomLeft, topLeft: topLeft, topRight: topRight };
    var _a, _b, _c, _d;
}
// Computes the dimension (number of modules on a side) of the QR Code based on the position of the finder patterns
function computeDimension(topLeft, topRight, bottomLeft, matrix) {
    var moduleSize = (sum(countBlackWhiteRun(topLeft, bottomLeft, matrix, 5)) / 7 + // Divide by 7 since the ratio is 1:1:3:1:1
        sum(countBlackWhiteRun(topLeft, topRight, matrix, 5)) / 7 +
        sum(countBlackWhiteRun(bottomLeft, topLeft, matrix, 5)) / 7 +
        sum(countBlackWhiteRun(topRight, topLeft, matrix, 5)) / 7) / 4;
    if (moduleSize < 1) {
        throw new Error("Invalid module size");
    }
    var topDimension = Math.round(distance(topLeft, topRight) / moduleSize);
    var sideDimension = Math.round(distance(topLeft, bottomLeft) / moduleSize);
    var dimension = Math.floor((topDimension + sideDimension) / 2) + 7;
    switch (dimension % 4) {
        case 0:
            dimension++;
            break;
        case 2:
            dimension--;
            break;
    }
    return { dimension: dimension, moduleSize: moduleSize };
}
// Takes an origin point and an end point and counts the sizes of the black white run from the origin towards the end point.
// Returns an array of elements, representing the pixel size of the black white run.
// Uses a variant of http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
function countBlackWhiteRunTowardsPoint(origin, end, matrix, length) {
    var switchPoints = [{ x: Math.floor(origin.x), y: Math.floor(origin.y) }];
    var steep = Math.abs(end.y - origin.y) > Math.abs(end.x - origin.x);
    var fromX;
    var fromY;
    var toX;
    var toY;
    if (steep) {
        fromX = Math.floor(origin.y);
        fromY = Math.floor(origin.x);
        toX = Math.floor(end.y);
        toY = Math.floor(end.x);
    }
    else {
        fromX = Math.floor(origin.x);
        fromY = Math.floor(origin.y);
        toX = Math.floor(end.x);
        toY = Math.floor(end.y);
    }
    var dx = Math.abs(toX - fromX);
    var dy = Math.abs(toY - fromY);
    var error = Math.floor(-dx / 2);
    var xStep = fromX < toX ? 1 : -1;
    var yStep = fromY < toY ? 1 : -1;
    var currentPixel = true;
    // Loop up until x == toX, but not beyond
    for (var x = fromX, y = fromY; x !== toX + xStep; x += xStep) {
        // Does current pixel mean we have moved white to black or vice versa?
        // Scanning black in state 0,2 and white in state 1, so if we find the wrong
        // color, advance to next state or end if we are in state 2 already
        var realX = steep ? y : x;
        var realY = steep ? x : y;
        if (matrix.get(realX, realY) !== currentPixel) {
            currentPixel = !currentPixel;
            switchPoints.push({ x: realX, y: realY });
            if (switchPoints.length === length + 1) {
                break;
            }
        }
        error += dy;
        if (error > 0) {
            if (y === toY) {
                break;
            }
            y += yStep;
            error -= dx;
        }
    }
    var distances = [];
    for (var i = 0; i < length; i++) {
        if (switchPoints[i] && switchPoints[i + 1]) {
            distances.push(distance(switchPoints[i], switchPoints[i + 1]));
        }
        else {
            distances.push(0);
        }
    }
    return distances;
}
// Takes an origin point and an end point and counts the sizes of the black white run in the origin point
// along the line that intersects with the end point. Returns an array of elements, representing the pixel sizes
// of the black white run. Takes a length which represents the number of switches from black to white to look for.
function countBlackWhiteRun(origin, end, matrix, length) {
    var rise = end.y - origin.y;
    var run = end.x - origin.x;
    var towardsEnd = countBlackWhiteRunTowardsPoint(origin, end, matrix, Math.ceil(length / 2));
    var awayFromEnd = countBlackWhiteRunTowardsPoint(origin, { x: origin.x - run, y: origin.y - rise }, matrix, Math.ceil(length / 2));
    var middleValue = towardsEnd.shift() + awayFromEnd.shift() - 1; // Substract one so we don't double count a pixel
    return (_a = awayFromEnd.concat(middleValue)).concat.apply(_a, towardsEnd);
    var _a;
}
// Takes in a black white run and an array of expected ratios. Returns the average size of the run as well as the "error" -
// that is the amount the run diverges from the expected ratio
function scoreBlackWhiteRun(sequence, ratios) {
    var averageSize = sum(sequence) / sum(ratios);
    var error = 0;
    ratios.forEach(function (ratio, i) {
        error += Math.pow((sequence[i] - ratio * averageSize), 2);
    });
    return { averageSize: averageSize, error: error };
}
// Takes an X,Y point and an array of sizes and scores the point against those ratios.
// For example for a finder pattern takes the ratio list of 1:1:3:1:1 and checks horizontal, vertical and diagonal ratios
// against that.
function scorePattern(point, ratios, matrix) {
    try {
        var horizontalRun = countBlackWhiteRun(point, { x: -1, y: point.y }, matrix, ratios.length);
        var verticalRun = countBlackWhiteRun(point, { x: point.x, y: -1 }, matrix, ratios.length);
        var topLeftPoint = {
            x: Math.max(0, point.x - point.y) - 1,
            y: Math.max(0, point.y - point.x) - 1,
        };
        var topLeftBottomRightRun = countBlackWhiteRun(point, topLeftPoint, matrix, ratios.length);
        var bottomLeftPoint = {
            x: Math.min(matrix.width, point.x + point.y) + 1,
            y: Math.min(matrix.height, point.y + point.x) + 1,
        };
        var bottomLeftTopRightRun = countBlackWhiteRun(point, bottomLeftPoint, matrix, ratios.length);
        var horzError = scoreBlackWhiteRun(horizontalRun, ratios);
        var vertError = scoreBlackWhiteRun(verticalRun, ratios);
        var diagDownError = scoreBlackWhiteRun(topLeftBottomRightRun, ratios);
        var diagUpError = scoreBlackWhiteRun(bottomLeftTopRightRun, ratios);
        var ratioError = Math.sqrt(horzError.error * horzError.error +
            vertError.error * vertError.error +
            diagDownError.error * diagDownError.error +
            diagUpError.error * diagUpError.error);
        var avgSize = (horzError.averageSize + vertError.averageSize + diagDownError.averageSize + diagUpError.averageSize) / 4;
        var sizeError = (Math.pow((horzError.averageSize - avgSize), 2) +
            Math.pow((vertError.averageSize - avgSize), 2) +
            Math.pow((diagDownError.averageSize - avgSize), 2) +
            Math.pow((diagUpError.averageSize - avgSize), 2)) / avgSize;
        return ratioError + sizeError;
    }
    catch (_a) {
        return Infinity;
    }
}
function locate(matrix) {
    var finderPatternQuads = [];
    var activeFinderPatternQuads = [];
    var alignmentPatternQuads = [];
    var activeAlignmentPatternQuads = [];
    var _loop_1 = function (y) {
        var length_1 = 0;
        var lastBit = false;
        var scans = [0, 0, 0, 0, 0];
        var _loop_2 = function (x) {
            var v = matrix.get(x, y);
            if (v === lastBit) {
                length_1++;
            }
            else {
                scans = [scans[1], scans[2], scans[3], scans[4], length_1];
                length_1 = 1;
                lastBit = v;
                // Do the last 5 color changes ~ match the expected ratio for a finder pattern? 1:1:3:1:1 of b:w:b:w:b
                var averageFinderPatternBlocksize = sum(scans) / 7;
                var validFinderPattern = Math.abs(scans[0] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[1] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[2] - 3 * averageFinderPatternBlocksize) < 3 * averageFinderPatternBlocksize &&
                    Math.abs(scans[3] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[4] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    !v; // And make sure the current pixel is white since finder patterns are bordered in white
                // Do the last 3 color changes ~ match the expected ratio for an alignment pattern? 1:1:1 of w:b:w
                var averageAlignmentPatternBlocksize = sum(scans.slice(-3)) / 3;
                var validAlignmentPattern = Math.abs(scans[2] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    Math.abs(scans[3] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    Math.abs(scans[4] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    v; // Is the current pixel black since alignment patterns are bordered in black
                if (validFinderPattern) {
                    // Compute the start and end x values of the large center black square
                    var endX_1 = x - scans[3] - scans[4];
                    var startX_1 = endX_1 - scans[2];
                    var line = { startX: startX_1, endX: endX_1, y: y };
                    // Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
                    // that line as the starting point.
                    var matchingQuads = activeFinderPatternQuads.filter(function (q) {
                        return (startX_1 >= q.bottom.startX && startX_1 <= q.bottom.endX) ||
                            (endX_1 >= q.bottom.startX && startX_1 <= q.bottom.endX) ||
                            (startX_1 <= q.bottom.startX && endX_1 >= q.bottom.endX && ((scans[2] / (q.bottom.endX - q.bottom.startX)) < MAX_QUAD_RATIO &&
                                (scans[2] / (q.bottom.endX - q.bottom.startX)) > MIN_QUAD_RATIO));
                    });
                    if (matchingQuads.length > 0) {
                        matchingQuads[0].bottom = line;
                    }
                    else {
                        activeFinderPatternQuads.push({ top: line, bottom: line });
                    }
                }
                if (validAlignmentPattern) {
                    // Compute the start and end x values of the center black square
                    var endX_2 = x - scans[4];
                    var startX_2 = endX_2 - scans[3];
                    var line = { startX: startX_2, y: y, endX: endX_2 };
                    // Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
                    // that line as the starting point.
                    var matchingQuads = activeAlignmentPatternQuads.filter(function (q) {
                        return (startX_2 >= q.bottom.startX && startX_2 <= q.bottom.endX) ||
                            (endX_2 >= q.bottom.startX && startX_2 <= q.bottom.endX) ||
                            (startX_2 <= q.bottom.startX && endX_2 >= q.bottom.endX && ((scans[2] / (q.bottom.endX - q.bottom.startX)) < MAX_QUAD_RATIO &&
                                (scans[2] / (q.bottom.endX - q.bottom.startX)) > MIN_QUAD_RATIO));
                    });
                    if (matchingQuads.length > 0) {
                        matchingQuads[0].bottom = line;
                    }
                    else {
                        activeAlignmentPatternQuads.push({ top: line, bottom: line });
                    }
                }
            }
        };
        for (var x = -1; x <= matrix.width; x++) {
            _loop_2(x);
        }
        finderPatternQuads.push.apply(finderPatternQuads, activeFinderPatternQuads.filter(function (q) { return q.bottom.y !== y && q.bottom.y - q.top.y >= 2; }));
        activeFinderPatternQuads = activeFinderPatternQuads.filter(function (q) { return q.bottom.y === y; });
        alignmentPatternQuads.push.apply(alignmentPatternQuads, activeAlignmentPatternQuads.filter(function (q) { return q.bottom.y !== y; }));
        activeAlignmentPatternQuads = activeAlignmentPatternQuads.filter(function (q) { return q.bottom.y === y; });
    };
    for (var y = 0; y <= matrix.height; y++) {
        _loop_1(y);
    }
    finderPatternQuads.push.apply(finderPatternQuads, activeFinderPatternQuads.filter(function (q) { return q.bottom.y - q.top.y >= 2; }));
    alignmentPatternQuads.push.apply(alignmentPatternQuads, activeAlignmentPatternQuads);
    var finderPatternGroups = finderPatternQuads
        .filter(function (q) { return q.bottom.y - q.top.y >= 2; }) // All quads must be at least 2px tall since the center square is larger than a block
        .map(function (q) {
        var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
        var y = (q.top.y + q.bottom.y + 1) / 2;
        if (!matrix.get(Math.round(x), Math.round(y))) {
            return;
        }
        var lengths = [q.top.endX - q.top.startX, q.bottom.endX - q.bottom.startX, q.bottom.y - q.top.y + 1];
        var size = sum(lengths) / lengths.length;
        var score = scorePattern({ x: Math.round(x), y: Math.round(y) }, [1, 1, 3, 1, 1], matrix);
        return { score: score, x: x, y: y, size: size };
    })
        .filter(function (q) { return !!q; }) // Filter out any rejected quads from above
        .sort(function (a, b) { return a.score - b.score; })
        .map(function (point, i, finderPatterns) {
        if (i > MAX_FINDERPATTERNS_TO_SEARCH) {
            return null;
        }
        var otherPoints = finderPatterns
            .filter(function (p, ii) { return i !== ii; })
            .map(function (p) { return ({ x: p.x, y: p.y, score: p.score + (Math.pow((p.size - point.size), 2)) / point.size, size: p.size }); })
            .sort(function (a, b) { return a.score - b.score; });
        if (otherPoints.length < 2) {
            return null;
        }
        var score = point.score + otherPoints[0].score + otherPoints[1].score;
        return { points: [point].concat(otherPoints.slice(0, 2)), score: score };
    })
        .filter(function (q) { return !!q; }) // Filter out any rejected finder patterns from above
        .sort(function (a, b) { return a.score - b.score; });
    if (finderPatternGroups.length === 0) {
        return null;
    }
    var _a = reorderFinderPatterns(finderPatternGroups[0].points[0], finderPatternGroups[0].points[1], finderPatternGroups[0].points[2]), topRight = _a.topRight, topLeft = _a.topLeft, bottomLeft = _a.bottomLeft;
    // Now that we've found the three finder patterns we can determine the blockSize and the size of the QR code.
    // We'll use these to help find the alignment pattern but also later when we do the extraction.
    var dimension;
    var moduleSize;
    try {
        (_b = computeDimension(topLeft, topRight, bottomLeft, matrix), dimension = _b.dimension, moduleSize = _b.moduleSize);
    }
    catch (e) {
        return null;
    }
    // Now find the alignment pattern
    var bottomRightFinderPattern = {
        x: topRight.x - topLeft.x + bottomLeft.x,
        y: topRight.y - topLeft.y + bottomLeft.y,
    };
    var modulesBetweenFinderPatterns = ((distance(topLeft, bottomLeft) + distance(topLeft, topRight)) / 2 / moduleSize);
    var correctionToTopLeft = 1 - (3 / modulesBetweenFinderPatterns);
    var expectedAlignmentPattern = {
        x: topLeft.x + correctionToTopLeft * (bottomRightFinderPattern.x - topLeft.x),
        y: topLeft.y + correctionToTopLeft * (bottomRightFinderPattern.y - topLeft.y),
    };
    var alignmentPatterns = alignmentPatternQuads
        .map(function (q) {
        var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
        var y = (q.top.y + q.bottom.y + 1) / 2;
        if (!matrix.get(Math.floor(x), Math.floor(y))) {
            return;
        }
        var lengths = [q.top.endX - q.top.startX, q.bottom.endX - q.bottom.startX, (q.bottom.y - q.top.y + 1)];
        var size = sum(lengths) / lengths.length;
        var sizeScore = scorePattern({ x: Math.floor(x), y: Math.floor(y) }, [1, 1, 1], matrix);
        var score = sizeScore + distance({ x: x, y: y }, expectedAlignmentPattern);
        return { x: x, y: y, score: score };
    })
        .filter(function (v) { return !!v; })
        .sort(function (a, b) { return a.score - b.score; });
    // If there are less than 15 modules between finder patterns it's a version 1 QR code and as such has no alignmemnt pattern
    // so we can only use our best guess.
    var alignmentPattern = modulesBetweenFinderPatterns >= 15 && alignmentPatterns.length ? alignmentPatterns[0] : expectedAlignmentPattern;
    return {
        alignmentPattern: { x: alignmentPattern.x, y: alignmentPattern.y },
        bottomLeft: { x: bottomLeft.x, y: bottomLeft.y },
        dimension: dimension,
        topLeft: { x: topLeft.x, y: topLeft.y },
        topRight: { x: topRight.x, y: topRight.y },
    };
    var _b;
}
exports.locate = locate;


/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./src/web-workers/QRCode.ts":
/*!***********************************!*\
  !*** ./src/web-workers/QRCode.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsqr */ "./node_modules/jsqr/dist/jsQR.js");
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_0__);

const self = globalThis;
self.addEventListener('message', ev => {
    const [data, width, height] = ev.data;
    self.postMessage(jsqr__WEBPACK_IMPORTED_MODULE_0___default()(data, width, height));
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcXIvZGlzdC9qc1FSLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWItd29ya2Vycy9RUkNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUtxQjtBQUMzQixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0MsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBLGdDQUFnQywrQkFBK0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEUsdUNBQXVDLDJDQUEyQztBQUNsRjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0NBQXNDO0FBQ3RFLHVDQUF1QywyQ0FBMkM7QUFDbEY7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQsc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hELHFDQUFxQyx1QkFBdUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUU7QUFDQTtBQUNBLGtCQUFrQixnQ0FBZ0MsRUFBRTtBQUNwRCxrQkFBa0Isd0JBQXdCLEVBQUU7QUFDNUMsa0JBQWtCLHNCQUFzQixFQUFFO0FBQzFDLGtCQUFrQiw4QkFBOEIsRUFBRTtBQUNsRCxrQkFBa0IsOERBQThELEVBQUU7QUFDbEYsa0JBQWtCLG9EQUFvRCxFQUFFO0FBQ3hFLGtCQUFrQiwwREFBMEQsRUFBRTtBQUM5RSxrQkFBa0IsMERBQTBELEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUNuRDtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQSw4REFBOEQsZ0JBQWdCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQ7QUFDQSx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQkFBaUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQSxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQixtQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IsbUNBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHdCQUF3QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxpQ0FBaUM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDLDZCQUE2QiwrREFBK0Q7QUFDNUY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLG1EQUFtRCwwQkFBMEI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwwQkFBMEI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELCtCQUErQixFQUFFO0FBQ3pGO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQTBCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQywyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJDQUEyQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxnREFBZ0QsRUFBRTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBeUM7QUFDckUsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBeUM7QUFDckUsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJDQUEyQztBQUN2RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQTJDO0FBQ3ZFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBMkM7QUFDdkUsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDJDQUEyQztBQUN2RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQTJDO0FBQ3ZFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBMkM7QUFDdkUsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQTRDO0FBQ2pFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsNENBQTRDO0FBQ2pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDRDQUE0QztBQUNqRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRDQUE0QztBQUN4RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBNEM7QUFDakUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQTRDO0FBQ2pFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDRDQUE0QztBQUNqRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiw0Q0FBNEM7QUFDakU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBNEM7QUFDakUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUIsR0FBRyxzQ0FBc0MsR0FBRywyREFBMkQsR0FBRyxzQ0FBc0M7QUFDdk07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUVBQXVFO0FBQ3ZHO0FBQ0EsMENBQTBDLGNBQWMsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBbUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHdDQUF3QztBQUN0RyxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxvQkFBb0I7QUFDM0UscURBQXFELG9CQUFvQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCwwQkFBMEI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDBCQUEwQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBLHdHQUF3RyxzREFBc0QsRUFBRTtBQUNoSyxpRkFBaUYseUJBQXlCLEVBQUU7QUFDNUcsaUhBQWlILHlCQUF5QixFQUFFO0FBQzVJLHVGQUF1Rix5QkFBeUIsRUFBRTtBQUNsSDtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBLG9HQUFvRyxrQ0FBa0MsRUFBRTtBQUN4STtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQyxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUNBQXFDO0FBQ3ZFLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsOEJBQThCLFlBQVksRUFBRTtBQUM1QywrQkFBK0IsMEJBQTBCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN6RCwrQkFBK0IsVUFBVSxtR0FBbUcsRUFBRSxFQUFFO0FBQ2hKLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsOEJBQThCLFlBQVksRUFBRTtBQUM1QywrQkFBK0IsMEJBQTBCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUNBQXFDO0FBQzNFLDBDQUEwQyxhQUFhO0FBQ3ZELGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsOEJBQThCLFlBQVksRUFBRTtBQUM1QywrQkFBK0IsMEJBQTBCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQStDO0FBQzFFLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDenpURDtBQUFBO0FBQUE7QUFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUFJO0FBQ3pCLENBQUMiLCJmaWxlIjoianMvcXJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvd2ViLXdvcmtlcnMvUVJDb2RlLnRzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNRUlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc1FSXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBCaXRNYXRyaXggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQml0TWF0cml4KGRhdGEsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkYXRhLmxlbmd0aCAvIHdpZHRoO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBCaXRNYXRyaXguY3JlYXRlRW1wdHkgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICByZXR1cm4gbmV3IEJpdE1hdHJpeChuZXcgVWludDhDbGFtcGVkQXJyYXkod2lkdGggKiBoZWlnaHQpLCB3aWR0aCk7XG4gICAgfTtcbiAgICBCaXRNYXRyaXgucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgMCB8fCB4ID49IHRoaXMud2lkdGggfHwgeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIXRoaXMuZGF0YVt5ICogdGhpcy53aWR0aCArIHhdO1xuICAgIH07XG4gICAgQml0TWF0cml4LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoeCwgeSwgdikge1xuICAgICAgICB0aGlzLmRhdGFbeSAqIHRoaXMud2lkdGggKyB4XSA9IHYgPyAxIDogMDtcbiAgICB9O1xuICAgIEJpdE1hdHJpeC5wcm90b3R5cGUuc2V0UmVnaW9uID0gZnVuY3Rpb24gKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgdikge1xuICAgICAgICBmb3IgKHZhciB5ID0gdG9wOyB5IDwgdG9wICsgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHggPSBsZWZ0OyB4IDwgbGVmdCArIHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh4LCB5LCAhIXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQml0TWF0cml4O1xufSgpKTtcbmV4cG9ydHMuQml0TWF0cml4ID0gQml0TWF0cml4O1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdlbmVyaWNHRlBvbHlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5mdW5jdGlvbiBhZGRPclN1YnRyYWN0R0YoYSwgYikge1xuICAgIHJldHVybiBhIF4gYjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG59XG5leHBvcnRzLmFkZE9yU3VidHJhY3RHRiA9IGFkZE9yU3VidHJhY3RHRjtcbnZhciBHZW5lcmljR0YgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2VuZXJpY0dGKHByaW1pdGl2ZSwgc2l6ZSwgZ2VuQmFzZSkge1xuICAgICAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5nZW5lcmF0b3JCYXNlID0gZ2VuQmFzZTtcbiAgICAgICAgdGhpcy5leHBUYWJsZSA9IG5ldyBBcnJheSh0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmxvZ1RhYmxlID0gbmV3IEFycmF5KHRoaXMuc2l6ZSk7XG4gICAgICAgIHZhciB4ID0gMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5leHBUYWJsZVtpXSA9IHg7XG4gICAgICAgICAgICB4ID0geCAqIDI7XG4gICAgICAgICAgICBpZiAoeCA+PSB0aGlzLnNpemUpIHtcbiAgICAgICAgICAgICAgICB4ID0gKHggXiB0aGlzLnByaW1pdGl2ZSkgJiAodGhpcy5zaXplIC0gMSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ1RhYmxlW3RoaXMuZXhwVGFibGVbaV1dID0gaTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnplcm8gPSBuZXcgR2VuZXJpY0dGUG9seV8xLmRlZmF1bHQodGhpcywgVWludDhDbGFtcGVkQXJyYXkuZnJvbShbMF0pKTtcbiAgICAgICAgdGhpcy5vbmUgPSBuZXcgR2VuZXJpY0dGUG9seV8xLmRlZmF1bHQodGhpcywgVWludDhDbGFtcGVkQXJyYXkuZnJvbShbMV0pKTtcbiAgICB9XG4gICAgR2VuZXJpY0dGLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhID09PSAwIHx8IGIgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmV4cFRhYmxlWyh0aGlzLmxvZ1RhYmxlW2FdICsgdGhpcy5sb2dUYWJsZVtiXSkgJSAodGhpcy5zaXplIC0gMSldO1xuICAgIH07XG4gICAgR2VuZXJpY0dGLnByb3RvdHlwZS5pbnZlcnNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgaWYgKGEgPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGludmVydCAwXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmV4cFRhYmxlW3RoaXMuc2l6ZSAtIHRoaXMubG9nVGFibGVbYV0gLSAxXTtcbiAgICB9O1xuICAgIEdlbmVyaWNHRi5wcm90b3R5cGUuYnVpbGRNb25vbWlhbCA9IGZ1bmN0aW9uIChkZWdyZWUsIGNvZWZmaWNpZW50KSB7XG4gICAgICAgIGlmIChkZWdyZWUgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG1vbm9taWFsIGRlZ3JlZSBsZXNzIHRoYW4gMFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29lZmZpY2llbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnplcm87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvZWZmaWNpZW50cyA9IG5ldyBVaW50OENsYW1wZWRBcnJheShkZWdyZWUgKyAxKTtcbiAgICAgICAgY29lZmZpY2llbnRzWzBdID0gY29lZmZpY2llbnQ7XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0dGUG9seV8xLmRlZmF1bHQodGhpcywgY29lZmZpY2llbnRzKTtcbiAgICB9O1xuICAgIEdlbmVyaWNHRi5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgaWYgKGEgPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHRha2UgbG9nKDApXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ1RhYmxlW2FdO1xuICAgIH07XG4gICAgR2VuZXJpY0dGLnByb3RvdHlwZS5leHAgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBUYWJsZVthXTtcbiAgICB9O1xuICAgIHJldHVybiBHZW5lcmljR0Y7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2VuZXJpY0dGO1xuXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdlbmVyaWNHRl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBHZW5lcmljR0ZQb2x5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdlbmVyaWNHRlBvbHkoZmllbGQsIGNvZWZmaWNpZW50cykge1xuICAgICAgICBpZiAoY29lZmZpY2llbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29lZmZpY2llbnRzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIHZhciBjb2VmZmljaWVudHNMZW5ndGggPSBjb2VmZmljaWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAoY29lZmZpY2llbnRzTGVuZ3RoID4gMSAmJiBjb2VmZmljaWVudHNbMF0gPT09IDApIHtcbiAgICAgICAgICAgIC8vIExlYWRpbmcgdGVybSBtdXN0IGJlIG5vbi16ZXJvIGZvciBhbnl0aGluZyBleGNlcHQgdGhlIGNvbnN0YW50IHBvbHlub21pYWwgXCIwXCJcbiAgICAgICAgICAgIHZhciBmaXJzdE5vblplcm8gPSAxO1xuICAgICAgICAgICAgd2hpbGUgKGZpcnN0Tm9uWmVybyA8IGNvZWZmaWNpZW50c0xlbmd0aCAmJiBjb2VmZmljaWVudHNbZmlyc3ROb25aZXJvXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZpcnN0Tm9uWmVybysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0Tm9uWmVybyA9PT0gY29lZmZpY2llbnRzTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VmZmljaWVudHMgPSBmaWVsZC56ZXJvLmNvZWZmaWNpZW50cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29lZmZpY2llbnRzID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGNvZWZmaWNpZW50c0xlbmd0aCAtIGZpcnN0Tm9uWmVybyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvZWZmaWNpZW50c1tpXSA9IGNvZWZmaWNpZW50c1tmaXJzdE5vblplcm8gKyBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvZWZmaWNpZW50cyA9IGNvZWZmaWNpZW50cztcbiAgICAgICAgfVxuICAgIH1cbiAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5kZWdyZWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGggLSAxO1xuICAgIH07XG4gICAgR2VuZXJpY0dGUG9seS5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2VmZmljaWVudHNbMF0gPT09IDA7XG4gICAgfTtcbiAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5nZXRDb2VmZmljaWVudCA9IGZ1bmN0aW9uIChkZWdyZWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29lZmZpY2llbnRzW3RoaXMuY29lZmZpY2llbnRzLmxlbmd0aCAtIDEgLSBkZWdyZWVdO1xuICAgIH07XG4gICAgR2VuZXJpY0dGUG9seS5wcm90b3R5cGUuYWRkT3JTdWJ0cmFjdCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICBpZiAodGhpcy5pc1plcm8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIG90aGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlci5pc1plcm8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNtYWxsZXJDb2VmZmljaWVudHMgPSB0aGlzLmNvZWZmaWNpZW50cztcbiAgICAgICAgdmFyIGxhcmdlckNvZWZmaWNpZW50cyA9IG90aGVyLmNvZWZmaWNpZW50cztcbiAgICAgICAgaWYgKHNtYWxsZXJDb2VmZmljaWVudHMubGVuZ3RoID4gbGFyZ2VyQ29lZmZpY2llbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgX2EgPSBbbGFyZ2VyQ29lZmZpY2llbnRzLCBzbWFsbGVyQ29lZmZpY2llbnRzXSwgc21hbGxlckNvZWZmaWNpZW50cyA9IF9hWzBdLCBsYXJnZXJDb2VmZmljaWVudHMgPSBfYVsxXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3VtRGlmZiA9IG5ldyBVaW50OENsYW1wZWRBcnJheShsYXJnZXJDb2VmZmljaWVudHMubGVuZ3RoKTtcbiAgICAgICAgdmFyIGxlbmd0aERpZmYgPSBsYXJnZXJDb2VmZmljaWVudHMubGVuZ3RoIC0gc21hbGxlckNvZWZmaWNpZW50cy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoRGlmZjsgaSsrKSB7XG4gICAgICAgICAgICBzdW1EaWZmW2ldID0gbGFyZ2VyQ29lZmZpY2llbnRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBsZW5ndGhEaWZmOyBpIDwgbGFyZ2VyQ29lZmZpY2llbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW1EaWZmW2ldID0gR2VuZXJpY0dGXzEuYWRkT3JTdWJ0cmFjdEdGKHNtYWxsZXJDb2VmZmljaWVudHNbaSAtIGxlbmd0aERpZmZdLCBsYXJnZXJDb2VmZmljaWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0dGUG9seSh0aGlzLmZpZWxkLCBzdW1EaWZmKTtcbiAgICAgICAgdmFyIF9hO1xuICAgIH07XG4gICAgR2VuZXJpY0dGUG9seS5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG4gICAgICAgIGlmIChzY2FsYXIgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLnplcm87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjYWxhciA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBwcm9kdWN0ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHNpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgcHJvZHVjdFtpXSA9IHRoaXMuZmllbGQubXVsdGlwbHkodGhpcy5jb2VmZmljaWVudHNbaV0sIHNjYWxhcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmljR0ZQb2x5KHRoaXMuZmllbGQsIHByb2R1Y3QpO1xuICAgIH07XG4gICAgR2VuZXJpY0dGUG9seS5wcm90b3R5cGUubXVsdGlwbHlQb2x5ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzWmVybygpIHx8IG90aGVyLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZC56ZXJvO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhQ29lZmZpY2llbnRzID0gdGhpcy5jb2VmZmljaWVudHM7XG4gICAgICAgIHZhciBhTGVuZ3RoID0gYUNvZWZmaWNpZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBiQ29lZmZpY2llbnRzID0gb3RoZXIuY29lZmZpY2llbnRzO1xuICAgICAgICB2YXIgYkxlbmd0aCA9IGJDb2VmZmljaWVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgcHJvZHVjdCA9IG5ldyBVaW50OENsYW1wZWRBcnJheShhTGVuZ3RoICsgYkxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGFDb2VmZiA9IGFDb2VmZmljaWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RbaSArIGpdID0gR2VuZXJpY0dGXzEuYWRkT3JTdWJ0cmFjdEdGKHByb2R1Y3RbaSArIGpdLCB0aGlzLmZpZWxkLm11bHRpcGx5KGFDb2VmZiwgYkNvZWZmaWNpZW50c1tqXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0dGUG9seSh0aGlzLmZpZWxkLCBwcm9kdWN0KTtcbiAgICB9O1xuICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLm11bHRpcGx5QnlNb25vbWlhbCA9IGZ1bmN0aW9uIChkZWdyZWUsIGNvZWZmaWNpZW50KSB7XG4gICAgICAgIGlmIChkZWdyZWUgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRlZ3JlZSBsZXNzIHRoYW4gMFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29lZmZpY2llbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLnplcm87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBwcm9kdWN0ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHNpemUgKyBkZWdyZWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgcHJvZHVjdFtpXSA9IHRoaXMuZmllbGQubXVsdGlwbHkodGhpcy5jb2VmZmljaWVudHNbaV0sIGNvZWZmaWNpZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdlbmVyaWNHRlBvbHkodGhpcy5maWVsZCwgcHJvZHVjdCk7XG4gICAgfTtcbiAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5ldmFsdWF0ZUF0ID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgIGlmIChhID09PSAwKSB7XG4gICAgICAgICAgICAvLyBKdXN0IHJldHVybiB0aGUgeF4wIGNvZWZmaWNpZW50XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb2VmZmljaWVudCgwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuY29lZmZpY2llbnRzLmxlbmd0aDtcbiAgICAgICAgaWYgKGEgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIEp1c3QgdGhlIHN1bSBvZiB0aGUgY29lZmZpY2llbnRzXG4gICAgICAgICAgICB0aGlzLmNvZWZmaWNpZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb2VmZmljaWVudCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEdlbmVyaWNHRl8xLmFkZE9yU3VidHJhY3RHRihyZXN1bHQsIGNvZWZmaWNpZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSB0aGlzLmNvZWZmaWNpZW50c1swXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEdlbmVyaWNHRl8xLmFkZE9yU3VidHJhY3RHRih0aGlzLmZpZWxkLm11bHRpcGx5KGEsIHJlc3VsdCksIHRoaXMuY29lZmZpY2llbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIEdlbmVyaWNHRlBvbHk7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2VuZXJpY0dGUG9seTtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBiaW5hcml6ZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgZGVjb2Rlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBleHRyYWN0b3JfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIGxvY2F0b3JfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuZnVuY3Rpb24gc2NhbihtYXRyaXgpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBsb2NhdG9yXzEubG9jYXRlKG1hdHJpeCk7XG4gICAgaWYgKCFsb2NhdGlvbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGV4dHJhY3RlZCA9IGV4dHJhY3Rvcl8xLmV4dHJhY3QobWF0cml4LCBsb2NhdGlvbik7XG4gICAgdmFyIGRlY29kZWQgPSBkZWNvZGVyXzEuZGVjb2RlKGV4dHJhY3RlZC5tYXRyaXgpO1xuICAgIGlmICghZGVjb2RlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmluYXJ5RGF0YTogZGVjb2RlZC5ieXRlcyxcbiAgICAgICAgZGF0YTogZGVjb2RlZC50ZXh0LFxuICAgICAgICBjaHVua3M6IGRlY29kZWQuY2h1bmtzLFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgdG9wUmlnaHRDb3JuZXI6IGV4dHJhY3RlZC5tYXBwaW5nRnVuY3Rpb24obG9jYXRpb24uZGltZW5zaW9uLCAwKSxcbiAgICAgICAgICAgIHRvcExlZnRDb3JuZXI6IGV4dHJhY3RlZC5tYXBwaW5nRnVuY3Rpb24oMCwgMCksXG4gICAgICAgICAgICBib3R0b21SaWdodENvcm5lcjogZXh0cmFjdGVkLm1hcHBpbmdGdW5jdGlvbihsb2NhdGlvbi5kaW1lbnNpb24sIGxvY2F0aW9uLmRpbWVuc2lvbiksXG4gICAgICAgICAgICBib3R0b21MZWZ0Q29ybmVyOiBleHRyYWN0ZWQubWFwcGluZ0Z1bmN0aW9uKDAsIGxvY2F0aW9uLmRpbWVuc2lvbiksXG4gICAgICAgICAgICB0b3BSaWdodEZpbmRlclBhdHRlcm46IGxvY2F0aW9uLnRvcFJpZ2h0LFxuICAgICAgICAgICAgdG9wTGVmdEZpbmRlclBhdHRlcm46IGxvY2F0aW9uLnRvcExlZnQsXG4gICAgICAgICAgICBib3R0b21MZWZ0RmluZGVyUGF0dGVybjogbG9jYXRpb24uYm90dG9tTGVmdCxcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0QWxpZ25tZW50UGF0dGVybjogbG9jYXRpb24uYWxpZ25tZW50UGF0dGVybixcbiAgICAgICAgfSxcbiAgICB9O1xufVxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGludmVyc2lvbkF0dGVtcHRzOiBcImF0dGVtcHRCb3RoXCIsXG59O1xuZnVuY3Rpb24ganNRUihkYXRhLCB3aWR0aCwgaGVpZ2h0LCBwcm92aWRlZE9wdGlvbnMpIHtcbiAgICBpZiAocHJvdmlkZWRPcHRpb25zID09PSB2b2lkIDApIHsgcHJvdmlkZWRPcHRpb25zID0ge307IH1cbiAgICB2YXIgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMgfHwge30pLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICBvcHRpb25zW29wdF0gPSBwcm92aWRlZE9wdGlvbnNbb3B0XSB8fCBvcHRpb25zW29wdF07XG4gICAgfSk7XG4gICAgdmFyIHNob3VsZEludmVydCA9IG9wdGlvbnMuaW52ZXJzaW9uQXR0ZW1wdHMgPT09IFwiYXR0ZW1wdEJvdGhcIiB8fCBvcHRpb25zLmludmVyc2lvbkF0dGVtcHRzID09PSBcImludmVydEZpcnN0XCI7XG4gICAgdmFyIHRyeUludmVydGVkRmlyc3QgPSBvcHRpb25zLmludmVyc2lvbkF0dGVtcHRzID09PSBcIm9ubHlJbnZlcnRcIiB8fCBvcHRpb25zLmludmVyc2lvbkF0dGVtcHRzID09PSBcImludmVydEZpcnN0XCI7XG4gICAgdmFyIF9hID0gYmluYXJpemVyXzEuYmluYXJpemUoZGF0YSwgd2lkdGgsIGhlaWdodCwgc2hvdWxkSW52ZXJ0KSwgYmluYXJpemVkID0gX2EuYmluYXJpemVkLCBpbnZlcnRlZCA9IF9hLmludmVydGVkO1xuICAgIHZhciByZXN1bHQgPSBzY2FuKHRyeUludmVydGVkRmlyc3QgPyBpbnZlcnRlZCA6IGJpbmFyaXplZCk7XG4gICAgaWYgKCFyZXN1bHQgJiYgKG9wdGlvbnMuaW52ZXJzaW9uQXR0ZW1wdHMgPT09IFwiYXR0ZW1wdEJvdGhcIiB8fCBvcHRpb25zLmludmVyc2lvbkF0dGVtcHRzID09PSBcImludmVydEZpcnN0XCIpKSB7XG4gICAgICAgIHJlc3VsdCA9IHNjYW4odHJ5SW52ZXJ0ZWRGaXJzdCA/IGJpbmFyaXplZCA6IGludmVydGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmpzUVIuZGVmYXVsdCA9IGpzUVI7XG5leHBvcnRzLmRlZmF1bHQgPSBqc1FSO1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJpdE1hdHJpeF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBSRUdJT05fU0laRSA9IDg7XG52YXIgTUlOX0RZTkFNSUNfUkFOR0UgPSAyNDtcbmZ1bmN0aW9uIG51bUJldHdlZW4odmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbn1cbi8vIExpa2UgQml0TWF0cml4IGJ1dCBhY2NlcHRzIGFyYml0cnkgVWludDggdmFsdWVzXG52YXIgTWF0cml4ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hdHJpeCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHdpZHRoICogaGVpZ2h0KTtcbiAgICB9XG4gICAgTWF0cml4LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3kgKiB0aGlzLndpZHRoICsgeF07XG4gICAgfTtcbiAgICBNYXRyaXgucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh4LCB5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbeSAqIHRoaXMud2lkdGggKyB4XSA9IHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIE1hdHJpeDtcbn0oKSk7XG5mdW5jdGlvbiBiaW5hcml6ZShkYXRhLCB3aWR0aCwgaGVpZ2h0LCByZXR1cm5JbnZlcnRlZCkge1xuICAgIGlmIChkYXRhLmxlbmd0aCAhPT0gd2lkdGggKiBoZWlnaHQgKiA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1hbGZvcm1lZCBkYXRhIHBhc3NlZCB0byBiaW5hcml6ZXIuXCIpO1xuICAgIH1cbiAgICAvLyBDb252ZXJ0IGltYWdlIHRvIGdyZXlzY2FsZVxuICAgIHZhciBncmV5c2NhbGVQaXhlbHMgPSBuZXcgTWF0cml4KHdpZHRoLCBoZWlnaHQpO1xuICAgIGZvciAodmFyIHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICB2YXIgciA9IGRhdGFbKCh5ICogd2lkdGggKyB4KSAqIDQpICsgMF07XG4gICAgICAgICAgICB2YXIgZyA9IGRhdGFbKCh5ICogd2lkdGggKyB4KSAqIDQpICsgMV07XG4gICAgICAgICAgICB2YXIgYiA9IGRhdGFbKCh5ICogd2lkdGggKyB4KSAqIDQpICsgMl07XG4gICAgICAgICAgICBncmV5c2NhbGVQaXhlbHMuc2V0KHgsIHksIDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGhvcml6b250YWxSZWdpb25Db3VudCA9IE1hdGguY2VpbCh3aWR0aCAvIFJFR0lPTl9TSVpFKTtcbiAgICB2YXIgdmVydGljYWxSZWdpb25Db3VudCA9IE1hdGguY2VpbChoZWlnaHQgLyBSRUdJT05fU0laRSk7XG4gICAgdmFyIGJsYWNrUG9pbnRzID0gbmV3IE1hdHJpeChob3Jpem9udGFsUmVnaW9uQ291bnQsIHZlcnRpY2FsUmVnaW9uQ291bnQpO1xuICAgIGZvciAodmFyIHZlcnRpY2FsUmVnaW9uID0gMDsgdmVydGljYWxSZWdpb24gPCB2ZXJ0aWNhbFJlZ2lvbkNvdW50OyB2ZXJ0aWNhbFJlZ2lvbisrKSB7XG4gICAgICAgIGZvciAodmFyIGhvcnRpem9udGFsUmVnaW9uID0gMDsgaG9ydGl6b250YWxSZWdpb24gPCBob3Jpem9udGFsUmVnaW9uQ291bnQ7IGhvcnRpem9udGFsUmVnaW9uKyspIHtcbiAgICAgICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICAgICAgdmFyIG1pbiA9IEluZmluaXR5O1xuICAgICAgICAgICAgdmFyIG1heCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IFJFR0lPTl9TSVpFOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IFJFR0lPTl9TSVpFOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBpeGVsTHVtb3NpdHkgPSBncmV5c2NhbGVQaXhlbHMuZ2V0KGhvcnRpem9udGFsUmVnaW9uICogUkVHSU9OX1NJWkUgKyB4LCB2ZXJ0aWNhbFJlZ2lvbiAqIFJFR0lPTl9TSVpFICsgeSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBwaXhlbEx1bW9zaXR5O1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHBpeGVsTHVtb3NpdHkpO1xuICAgICAgICAgICAgICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIHBpeGVsTHVtb3NpdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhdmVyYWdlID0gc3VtIC8gKE1hdGgucG93KFJFR0lPTl9TSVpFLCAyKSk7XG4gICAgICAgICAgICBpZiAobWF4IC0gbWluIDw9IE1JTl9EWU5BTUlDX1JBTkdFKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdmFyaWF0aW9uIHdpdGhpbiB0aGUgYmxvY2sgaXMgbG93LCBhc3N1bWUgdGhpcyBpcyBhIGJsb2NrIHdpdGggb25seSBsaWdodCBvciBvbmx5XG4gICAgICAgICAgICAgICAgLy8gZGFyayBwaXhlbHMuIEluIHRoYXQgY2FzZSB3ZSBkbyBub3Qgd2FudCB0byB1c2UgdGhlIGF2ZXJhZ2UsIGFzIGl0IHdvdWxkIGRpdmlkZSB0aGlzXG4gICAgICAgICAgICAgICAgLy8gbG93IGNvbnRyYXN0IGFyZWEgaW50byBibGFjayBhbmQgd2hpdGUgcGl4ZWxzLCBlc3NlbnRpYWxseSBjcmVhdGluZyBkYXRhIG91dCBvZiBub2lzZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgdGhlIGJsYWNrcG9pbnQgZm9yIHRoZXNlIGJsb2NrcyB0byBiZSBoYWxmIHRoZSBtaW4gLSBlZmZlY3RpdmVseSB3aGl0ZSB0aGVtIG91dFxuICAgICAgICAgICAgICAgIGF2ZXJhZ2UgPSBtaW4gLyAyO1xuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFJlZ2lvbiA+IDAgJiYgaG9ydGl6b250YWxSZWdpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIFwid2hpdGUgYmFja2dyb3VuZFwiIGFzc3VtcHRpb24gZm9yIGJsb2NrcyB0aGF0IGhhdmUgbmVpZ2hib3JzIGJ5IGNvbXBhcmluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcGl4ZWxzIGluIHRoaXMgYmxvY2sgdG8gdGhlIHByZXZpb3VzbHkgY2FsY3VsYXRlZCBibGFjayBwb2ludHMuIFRoaXMgaXMgYmFzZWQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGZhY3QgdGhhdCBkYXJrIGJhcmNvZGUgc3ltYm9sb2d5IGlzIGFsd2F5cyBzdXJyb3VuZGVkIGJ5IHNvbWUgYW1vdW50IG9mIGxpZ2h0XG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQgZm9yIHdoaWNoIHJlYXNvbmFibGUgYmxhY2sgcG9pbnQgZXN0aW1hdGVzIHdlcmUgbWFkZS4gVGhlIGJwIGVzdGltYXRlZCBhdFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYm91bmRhcmllcyBpcyB1c2VkIGZvciB0aGUgaW50ZXJpb3IuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSAobWluIDwgYnApIGlzIGFyYml0cmFyeSBidXQgd29ya3MgYmV0dGVyIHRoYW4gb3RoZXIgaGV1cmlzdGljcyB0aGF0IHdlcmUgdHJpZWQuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdmVyYWdlTmVpZ2hib3JCbGFja1BvaW50ID0gKGJsYWNrUG9pbnRzLmdldChob3J0aXpvbnRhbFJlZ2lvbiwgdmVydGljYWxSZWdpb24gLSAxKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoMiAqIGJsYWNrUG9pbnRzLmdldChob3J0aXpvbnRhbFJlZ2lvbiAtIDEsIHZlcnRpY2FsUmVnaW9uKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxhY2tQb2ludHMuZ2V0KGhvcnRpem9udGFsUmVnaW9uIC0gMSwgdmVydGljYWxSZWdpb24gLSAxKSkgLyA0O1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluIDwgYXZlcmFnZU5laWdoYm9yQmxhY2tQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXZlcmFnZSA9IGF2ZXJhZ2VOZWlnaGJvckJsYWNrUG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibGFja1BvaW50cy5zZXQoaG9ydGl6b250YWxSZWdpb24sIHZlcnRpY2FsUmVnaW9uLCBhdmVyYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgYmluYXJpemVkID0gQml0TWF0cml4XzEuQml0TWF0cml4LmNyZWF0ZUVtcHR5KHdpZHRoLCBoZWlnaHQpO1xuICAgIHZhciBpbnZlcnRlZCA9IG51bGw7XG4gICAgaWYgKHJldHVybkludmVydGVkKSB7XG4gICAgICAgIGludmVydGVkID0gQml0TWF0cml4XzEuQml0TWF0cml4LmNyZWF0ZUVtcHR5KHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgICBmb3IgKHZhciB2ZXJ0aWNhbFJlZ2lvbiA9IDA7IHZlcnRpY2FsUmVnaW9uIDwgdmVydGljYWxSZWdpb25Db3VudDsgdmVydGljYWxSZWdpb24rKykge1xuICAgICAgICBmb3IgKHZhciBob3J0aXpvbnRhbFJlZ2lvbiA9IDA7IGhvcnRpem9udGFsUmVnaW9uIDwgaG9yaXpvbnRhbFJlZ2lvbkNvdW50OyBob3J0aXpvbnRhbFJlZ2lvbisrKSB7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IG51bUJldHdlZW4oaG9ydGl6b250YWxSZWdpb24sIDIsIGhvcml6b250YWxSZWdpb25Db3VudCAtIDMpO1xuICAgICAgICAgICAgdmFyIHRvcF8xID0gbnVtQmV0d2Vlbih2ZXJ0aWNhbFJlZ2lvbiwgMiwgdmVydGljYWxSZWdpb25Db3VudCAtIDMpO1xuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciB4UmVnaW9uID0gLTI7IHhSZWdpb24gPD0gMjsgeFJlZ2lvbisrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeVJlZ2lvbiA9IC0yOyB5UmVnaW9uIDw9IDI7IHlSZWdpb24rKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYmxhY2tQb2ludHMuZ2V0KGxlZnQgKyB4UmVnaW9uLCB0b3BfMSArIHlSZWdpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aHJlc2hvbGQgPSBzdW0gLyAyNTtcbiAgICAgICAgICAgIGZvciAodmFyIHhSZWdpb24gPSAwOyB4UmVnaW9uIDwgUkVHSU9OX1NJWkU7IHhSZWdpb24rKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHlSZWdpb24gPSAwOyB5UmVnaW9uIDwgUkVHSU9OX1NJWkU7IHlSZWdpb24rKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGhvcnRpem9udGFsUmVnaW9uICogUkVHSU9OX1NJWkUgKyB4UmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHZlcnRpY2FsUmVnaW9uICogUkVHSU9OX1NJWkUgKyB5UmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbHVtID0gZ3JleXNjYWxlUGl4ZWxzLmdldCh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgYmluYXJpemVkLnNldCh4LCB5LCBsdW0gPD0gdGhyZXNob2xkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVybkludmVydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZC5zZXQoeCwgeSwgIShsdW0gPD0gdGhyZXNob2xkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJldHVybkludmVydGVkKSB7XG4gICAgICAgIHJldHVybiB7IGJpbmFyaXplZDogYmluYXJpemVkLCBpbnZlcnRlZDogaW52ZXJ0ZWQgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYmluYXJpemVkOiBiaW5hcml6ZWQgfTtcbn1cbmV4cG9ydHMuYmluYXJpemUgPSBiaW5hcml6ZTtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBCaXRNYXRyaXhfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgZGVjb2RlRGF0YV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciByZWVkc29sb21vbl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciB2ZXJzaW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2VcbmZ1bmN0aW9uIG51bUJpdHNEaWZmZXJpbmcoeCwgeSkge1xuICAgIHZhciB6ID0geCBeIHk7XG4gICAgdmFyIGJpdENvdW50ID0gMDtcbiAgICB3aGlsZSAoeikge1xuICAgICAgICBiaXRDb3VudCsrO1xuICAgICAgICB6ICY9IHogLSAxO1xuICAgIH1cbiAgICByZXR1cm4gYml0Q291bnQ7XG59XG5mdW5jdGlvbiBwdXNoQml0KGJpdCwgYnl0ZSkge1xuICAgIHJldHVybiAoYnl0ZSA8PCAxKSB8IGJpdDtcbn1cbi8vIHRzbGludDplbmFibGU6bm8tYml0d2lzZVxudmFyIEZPUk1BVF9JTkZPX1RBQkxFID0gW1xuICAgIHsgYml0czogMHg1NDEyLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAxLCBkYXRhTWFzazogMCB9IH0sXG4gICAgeyBiaXRzOiAweDUxMjUsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDEsIGRhdGFNYXNrOiAxIH0gfSxcbiAgICB7IGJpdHM6IDB4NUU3QywgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMSwgZGF0YU1hc2s6IDIgfSB9LFxuICAgIHsgYml0czogMHg1QjRCLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAxLCBkYXRhTWFzazogMyB9IH0sXG4gICAgeyBiaXRzOiAweDQ1RjksIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDEsIGRhdGFNYXNrOiA0IH0gfSxcbiAgICB7IGJpdHM6IDB4NDBDRSwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMSwgZGF0YU1hc2s6IDUgfSB9LFxuICAgIHsgYml0czogMHg0Rjk3LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAxLCBkYXRhTWFzazogNiB9IH0sXG4gICAgeyBiaXRzOiAweDRBQTAsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDEsIGRhdGFNYXNrOiA3IH0gfSxcbiAgICB7IGJpdHM6IDB4NzdDNCwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMCwgZGF0YU1hc2s6IDAgfSB9LFxuICAgIHsgYml0czogMHg3MkYzLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAwLCBkYXRhTWFzazogMSB9IH0sXG4gICAgeyBiaXRzOiAweDdEQUEsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDAsIGRhdGFNYXNrOiAyIH0gfSxcbiAgICB7IGJpdHM6IDB4Nzg5RCwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMCwgZGF0YU1hc2s6IDMgfSB9LFxuICAgIHsgYml0czogMHg2NjJGLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAwLCBkYXRhTWFzazogNCB9IH0sXG4gICAgeyBiaXRzOiAweDYzMTgsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDAsIGRhdGFNYXNrOiA1IH0gfSxcbiAgICB7IGJpdHM6IDB4NkM0MSwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMCwgZGF0YU1hc2s6IDYgfSB9LFxuICAgIHsgYml0czogMHg2OTc2LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAwLCBkYXRhTWFzazogNyB9IH0sXG4gICAgeyBiaXRzOiAweDE2ODksIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDMsIGRhdGFNYXNrOiAwIH0gfSxcbiAgICB7IGJpdHM6IDB4MTNCRSwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMywgZGF0YU1hc2s6IDEgfSB9LFxuICAgIHsgYml0czogMHgxQ0U3LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAzLCBkYXRhTWFzazogMiB9IH0sXG4gICAgeyBiaXRzOiAweDE5RDAsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDMsIGRhdGFNYXNrOiAzIH0gfSxcbiAgICB7IGJpdHM6IDB4MDc2MiwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMywgZGF0YU1hc2s6IDQgfSB9LFxuICAgIHsgYml0czogMHgwMjU1LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAzLCBkYXRhTWFzazogNSB9IH0sXG4gICAgeyBiaXRzOiAweDBEMEMsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDMsIGRhdGFNYXNrOiA2IH0gfSxcbiAgICB7IGJpdHM6IDB4MDgzQiwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMywgZGF0YU1hc2s6IDcgfSB9LFxuICAgIHsgYml0czogMHgzNTVGLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAyLCBkYXRhTWFzazogMCB9IH0sXG4gICAgeyBiaXRzOiAweDMwNjgsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDIsIGRhdGFNYXNrOiAxIH0gfSxcbiAgICB7IGJpdHM6IDB4M0YzMSwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMiwgZGF0YU1hc2s6IDIgfSB9LFxuICAgIHsgYml0czogMHgzQTA2LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAyLCBkYXRhTWFzazogMyB9IH0sXG4gICAgeyBiaXRzOiAweDI0QjQsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDIsIGRhdGFNYXNrOiA0IH0gfSxcbiAgICB7IGJpdHM6IDB4MjE4MywgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMiwgZGF0YU1hc2s6IDUgfSB9LFxuICAgIHsgYml0czogMHgyRURBLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAyLCBkYXRhTWFzazogNiB9IH0sXG4gICAgeyBiaXRzOiAweDJCRUQsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDIsIGRhdGFNYXNrOiA3IH0gfSxcbl07XG52YXIgREFUQV9NQVNLUyA9IFtcbiAgICBmdW5jdGlvbiAocCkgeyByZXR1cm4gKChwLnkgKyBwLngpICUgMikgPT09IDA7IH0sXG4gICAgZnVuY3Rpb24gKHApIHsgcmV0dXJuIChwLnkgJSAyKSA9PT0gMDsgfSxcbiAgICBmdW5jdGlvbiAocCkgeyByZXR1cm4gcC54ICUgMyA9PT0gMDsgfSxcbiAgICBmdW5jdGlvbiAocCkgeyByZXR1cm4gKHAueSArIHAueCkgJSAzID09PSAwOyB9LFxuICAgIGZ1bmN0aW9uIChwKSB7IHJldHVybiAoTWF0aC5mbG9vcihwLnkgLyAyKSArIE1hdGguZmxvb3IocC54IC8gMykpICUgMiA9PT0gMDsgfSxcbiAgICBmdW5jdGlvbiAocCkgeyByZXR1cm4gKChwLnggKiBwLnkpICUgMikgKyAoKHAueCAqIHAueSkgJSAzKSA9PT0gMDsgfSxcbiAgICBmdW5jdGlvbiAocCkgeyByZXR1cm4gKCgoKHAueSAqIHAueCkgJSAyKSArIChwLnkgKiBwLngpICUgMykgJSAyKSA9PT0gMDsgfSxcbiAgICBmdW5jdGlvbiAocCkgeyByZXR1cm4gKCgoKHAueSArIHAueCkgJSAyKSArIChwLnkgKiBwLngpICUgMykgJSAyKSA9PT0gMDsgfSxcbl07XG5mdW5jdGlvbiBidWlsZEZ1bmN0aW9uUGF0dGVybk1hc2sodmVyc2lvbikge1xuICAgIHZhciBkaW1lbnNpb24gPSAxNyArIDQgKiB2ZXJzaW9uLnZlcnNpb25OdW1iZXI7XG4gICAgdmFyIG1hdHJpeCA9IEJpdE1hdHJpeF8xLkJpdE1hdHJpeC5jcmVhdGVFbXB0eShkaW1lbnNpb24sIGRpbWVuc2lvbik7XG4gICAgbWF0cml4LnNldFJlZ2lvbigwLCAwLCA5LCA5LCB0cnVlKTsgLy8gVG9wIGxlZnQgZmluZGVyIHBhdHRlcm4gKyBzZXBhcmF0b3IgKyBmb3JtYXRcbiAgICBtYXRyaXguc2V0UmVnaW9uKGRpbWVuc2lvbiAtIDgsIDAsIDgsIDksIHRydWUpOyAvLyBUb3AgcmlnaHQgZmluZGVyIHBhdHRlcm4gKyBzZXBhcmF0b3IgKyBmb3JtYXRcbiAgICBtYXRyaXguc2V0UmVnaW9uKDAsIGRpbWVuc2lvbiAtIDgsIDksIDgsIHRydWUpOyAvLyBCb3R0b20gbGVmdCBmaW5kZXIgcGF0dGVybiArIHNlcGFyYXRvciArIGZvcm1hdFxuICAgIC8vIEFsaWdubWVudCBwYXR0ZXJuc1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB2ZXJzaW9uLmFsaWdubWVudFBhdHRlcm5DZW50ZXJzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgeCA9IF9hW19pXTtcbiAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IHZlcnNpb24uYWxpZ25tZW50UGF0dGVybkNlbnRlcnM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICB2YXIgeSA9IF9jW19iXTtcbiAgICAgICAgICAgIGlmICghKHggPT09IDYgJiYgeSA9PT0gNiB8fCB4ID09PSA2ICYmIHkgPT09IGRpbWVuc2lvbiAtIDcgfHwgeCA9PT0gZGltZW5zaW9uIC0gNyAmJiB5ID09PSA2KSkge1xuICAgICAgICAgICAgICAgIG1hdHJpeC5zZXRSZWdpb24oeCAtIDIsIHkgLSAyLCA1LCA1LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXRyaXguc2V0UmVnaW9uKDYsIDksIDEsIGRpbWVuc2lvbiAtIDE3LCB0cnVlKTsgLy8gVmVydGljYWwgdGltaW5nIHBhdHRlcm5cbiAgICBtYXRyaXguc2V0UmVnaW9uKDksIDYsIGRpbWVuc2lvbiAtIDE3LCAxLCB0cnVlKTsgLy8gSG9yaXpvbnRhbCB0aW1pbmcgcGF0dGVyblxuICAgIGlmICh2ZXJzaW9uLnZlcnNpb25OdW1iZXIgPiA2KSB7XG4gICAgICAgIG1hdHJpeC5zZXRSZWdpb24oZGltZW5zaW9uIC0gMTEsIDAsIDMsIDYsIHRydWUpOyAvLyBWZXJzaW9uIGluZm8sIHRvcCByaWdodFxuICAgICAgICBtYXRyaXguc2V0UmVnaW9uKDAsIGRpbWVuc2lvbiAtIDExLCA2LCAzLCB0cnVlKTsgLy8gVmVyc2lvbiBpbmZvLCBib3R0b20gbGVmdFxuICAgIH1cbiAgICByZXR1cm4gbWF0cml4O1xufVxuZnVuY3Rpb24gcmVhZENvZGV3b3JkcyhtYXRyaXgsIHZlcnNpb24sIGZvcm1hdEluZm8pIHtcbiAgICB2YXIgZGF0YU1hc2sgPSBEQVRBX01BU0tTW2Zvcm1hdEluZm8uZGF0YU1hc2tdO1xuICAgIHZhciBkaW1lbnNpb24gPSBtYXRyaXguaGVpZ2h0O1xuICAgIHZhciBmdW5jdGlvblBhdHRlcm5NYXNrID0gYnVpbGRGdW5jdGlvblBhdHRlcm5NYXNrKHZlcnNpb24pO1xuICAgIHZhciBjb2Rld29yZHMgPSBbXTtcbiAgICB2YXIgY3VycmVudEJ5dGUgPSAwO1xuICAgIHZhciBiaXRzUmVhZCA9IDA7XG4gICAgLy8gUmVhZCBjb2x1bW5zIGluIHBhaXJzLCBmcm9tIHJpZ2h0IHRvIGxlZnRcbiAgICB2YXIgcmVhZGluZ1VwID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBjb2x1bW5JbmRleCA9IGRpbWVuc2lvbiAtIDE7IGNvbHVtbkluZGV4ID4gMDsgY29sdW1uSW5kZXggLT0gMikge1xuICAgICAgICBpZiAoY29sdW1uSW5kZXggPT09IDYpIHtcbiAgICAgICAgICAgIGNvbHVtbkluZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaW1lbnNpb247IGkrKykge1xuICAgICAgICAgICAgdmFyIHkgPSByZWFkaW5nVXAgPyBkaW1lbnNpb24gLSAxIC0gaSA6IGk7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2x1bW5PZmZzZXQgPSAwOyBjb2x1bW5PZmZzZXQgPCAyOyBjb2x1bW5PZmZzZXQrKykge1xuICAgICAgICAgICAgICAgIHZhciB4ID0gY29sdW1uSW5kZXggLSBjb2x1bW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCFmdW5jdGlvblBhdHRlcm5NYXNrLmdldCh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICBiaXRzUmVhZCsrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYml0ID0gbWF0cml4LmdldCh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNYXNrKHsgeTogeSwgeDogeCB9KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYml0ID0gIWJpdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qnl0ZSA9IHB1c2hCaXQoYml0LCBjdXJyZW50Qnl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXRzUmVhZCA9PT0gOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZXdvcmRzLnB1c2goY3VycmVudEJ5dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYml0c1JlYWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ5dGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlYWRpbmdVcCA9ICFyZWFkaW5nVXA7XG4gICAgfVxuICAgIHJldHVybiBjb2Rld29yZHM7XG59XG5mdW5jdGlvbiByZWFkVmVyc2lvbihtYXRyaXgpIHtcbiAgICB2YXIgZGltZW5zaW9uID0gbWF0cml4LmhlaWdodDtcbiAgICB2YXIgcHJvdmlzaW9uYWxWZXJzaW9uID0gTWF0aC5mbG9vcigoZGltZW5zaW9uIC0gMTcpIC8gNCk7XG4gICAgaWYgKHByb3Zpc2lvbmFsVmVyc2lvbiA8PSA2KSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uXzEuVkVSU0lPTlNbcHJvdmlzaW9uYWxWZXJzaW9uIC0gMV07XG4gICAgfVxuICAgIHZhciB0b3BSaWdodFZlcnNpb25CaXRzID0gMDtcbiAgICBmb3IgKHZhciB5ID0gNTsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgZm9yICh2YXIgeCA9IGRpbWVuc2lvbiAtIDk7IHggPj0gZGltZW5zaW9uIC0gMTE7IHgtLSkge1xuICAgICAgICAgICAgdG9wUmlnaHRWZXJzaW9uQml0cyA9IHB1c2hCaXQobWF0cml4LmdldCh4LCB5KSwgdG9wUmlnaHRWZXJzaW9uQml0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGJvdHRvbUxlZnRWZXJzaW9uQml0cyA9IDA7XG4gICAgZm9yICh2YXIgeCA9IDU7IHggPj0gMDsgeC0tKSB7XG4gICAgICAgIGZvciAodmFyIHkgPSBkaW1lbnNpb24gLSA5OyB5ID49IGRpbWVuc2lvbiAtIDExOyB5LS0pIHtcbiAgICAgICAgICAgIGJvdHRvbUxlZnRWZXJzaW9uQml0cyA9IHB1c2hCaXQobWF0cml4LmdldCh4LCB5KSwgYm90dG9tTGVmdFZlcnNpb25CaXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgYmVzdERpZmZlcmVuY2UgPSBJbmZpbml0eTtcbiAgICB2YXIgYmVzdFZlcnNpb247XG4gICAgZm9yICh2YXIgX2kgPSAwLCBWRVJTSU9OU18xID0gdmVyc2lvbl8xLlZFUlNJT05TOyBfaSA8IFZFUlNJT05TXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gVkVSU0lPTlNfMVtfaV07XG4gICAgICAgIGlmICh2ZXJzaW9uLmluZm9CaXRzID09PSB0b3BSaWdodFZlcnNpb25CaXRzIHx8IHZlcnNpb24uaW5mb0JpdHMgPT09IGJvdHRvbUxlZnRWZXJzaW9uQml0cykge1xuICAgICAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBudW1CaXRzRGlmZmVyaW5nKHRvcFJpZ2h0VmVyc2lvbkJpdHMsIHZlcnNpb24uaW5mb0JpdHMpO1xuICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IGJlc3REaWZmZXJlbmNlKSB7XG4gICAgICAgICAgICBiZXN0VmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgICAgICBiZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgZGlmZmVyZW5jZSA9IG51bUJpdHNEaWZmZXJpbmcoYm90dG9tTGVmdFZlcnNpb25CaXRzLCB2ZXJzaW9uLmluZm9CaXRzKTtcbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCBiZXN0RGlmZmVyZW5jZSkge1xuICAgICAgICAgICAgYmVzdFZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICAgICAgYmVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFdlIGNhbiB0b2xlcmF0ZSB1cCB0byAzIGJpdHMgb2YgZXJyb3Igc2luY2Ugbm8gdHdvIHZlcnNpb24gaW5mbyBjb2Rld29yZHMgd2lsbFxuICAgIC8vIGRpZmZlciBpbiBsZXNzIHRoYW4gOCBiaXRzLlxuICAgIGlmIChiZXN0RGlmZmVyZW5jZSA8PSAzKSB7XG4gICAgICAgIHJldHVybiBiZXN0VmVyc2lvbjtcbiAgICB9XG59XG5mdW5jdGlvbiByZWFkRm9ybWF0SW5mb3JtYXRpb24obWF0cml4KSB7XG4gICAgdmFyIHRvcExlZnRGb3JtYXRJbmZvQml0cyA9IDA7XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPD0gODsgeCsrKSB7XG4gICAgICAgIGlmICh4ICE9PSA2KSB7XG4gICAgICAgICAgICB0b3BMZWZ0Rm9ybWF0SW5mb0JpdHMgPSBwdXNoQml0KG1hdHJpeC5nZXQoeCwgOCksIHRvcExlZnRGb3JtYXRJbmZvQml0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgeSA9IDc7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgIGlmICh5ICE9PSA2KSB7XG4gICAgICAgICAgICB0b3BMZWZ0Rm9ybWF0SW5mb0JpdHMgPSBwdXNoQml0KG1hdHJpeC5nZXQoOCwgeSksIHRvcExlZnRGb3JtYXRJbmZvQml0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGRpbWVuc2lvbiA9IG1hdHJpeC5oZWlnaHQ7XG4gICAgdmFyIHRvcFJpZ2h0Qm90dG9tUmlnaHRGb3JtYXRJbmZvQml0cyA9IDA7XG4gICAgZm9yICh2YXIgeSA9IGRpbWVuc2lvbiAtIDE7IHkgPj0gZGltZW5zaW9uIC0gNzsgeS0tKSB7XG4gICAgICAgIHRvcFJpZ2h0Qm90dG9tUmlnaHRGb3JtYXRJbmZvQml0cyA9IHB1c2hCaXQobWF0cml4LmdldCg4LCB5KSwgdG9wUmlnaHRCb3R0b21SaWdodEZvcm1hdEluZm9CaXRzKTtcbiAgICB9XG4gICAgZm9yICh2YXIgeCA9IGRpbWVuc2lvbiAtIDg7IHggPCBkaW1lbnNpb247IHgrKykge1xuICAgICAgICB0b3BSaWdodEJvdHRvbVJpZ2h0Rm9ybWF0SW5mb0JpdHMgPSBwdXNoQml0KG1hdHJpeC5nZXQoeCwgOCksIHRvcFJpZ2h0Qm90dG9tUmlnaHRGb3JtYXRJbmZvQml0cyk7XG4gICAgfVxuICAgIHZhciBiZXN0RGlmZmVyZW5jZSA9IEluZmluaXR5O1xuICAgIHZhciBiZXN0Rm9ybWF0SW5mbyA9IG51bGw7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBGT1JNQVRfSU5GT19UQUJMRV8xID0gRk9STUFUX0lORk9fVEFCTEU7IF9pIDwgRk9STUFUX0lORk9fVEFCTEVfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIF9hID0gRk9STUFUX0lORk9fVEFCTEVfMVtfaV0sIGJpdHMgPSBfYS5iaXRzLCBmb3JtYXRJbmZvID0gX2EuZm9ybWF0SW5mbztcbiAgICAgICAgaWYgKGJpdHMgPT09IHRvcExlZnRGb3JtYXRJbmZvQml0cyB8fCBiaXRzID09PSB0b3BSaWdodEJvdHRvbVJpZ2h0Rm9ybWF0SW5mb0JpdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRJbmZvO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaWZmZXJlbmNlID0gbnVtQml0c0RpZmZlcmluZyh0b3BMZWZ0Rm9ybWF0SW5mb0JpdHMsIGJpdHMpO1xuICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IGJlc3REaWZmZXJlbmNlKSB7XG4gICAgICAgICAgICBiZXN0Rm9ybWF0SW5mbyA9IGZvcm1hdEluZm87XG4gICAgICAgICAgICBiZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcExlZnRGb3JtYXRJbmZvQml0cyAhPT0gdG9wUmlnaHRCb3R0b21SaWdodEZvcm1hdEluZm9CaXRzKSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gbnVtQml0c0RpZmZlcmluZyh0b3BSaWdodEJvdHRvbVJpZ2h0Rm9ybWF0SW5mb0JpdHMsIGJpdHMpO1xuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCBiZXN0RGlmZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIGJlc3RGb3JtYXRJbmZvID0gZm9ybWF0SW5mbztcbiAgICAgICAgICAgICAgICBiZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFtbWluZyBkaXN0YW5jZSBvZiB0aGUgMzIgbWFza2VkIGNvZGVzIGlzIDcsIGJ5IGNvbnN0cnVjdGlvbiwgc28gPD0gMyBiaXRzIGRpZmZlcmluZyBtZWFucyB3ZSBmb3VuZCBhIG1hdGNoXG4gICAgaWYgKGJlc3REaWZmZXJlbmNlIDw9IDMpIHtcbiAgICAgICAgcmV0dXJuIGJlc3RGb3JtYXRJbmZvO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldERhdGFCbG9ja3MoY29kZXdvcmRzLCB2ZXJzaW9uLCBlY0xldmVsKSB7XG4gICAgdmFyIGVjSW5mbyA9IHZlcnNpb24uZXJyb3JDb3JyZWN0aW9uTGV2ZWxzW2VjTGV2ZWxdO1xuICAgIHZhciBkYXRhQmxvY2tzID0gW107XG4gICAgdmFyIHRvdGFsQ29kZXdvcmRzID0gMDtcbiAgICBlY0luZm8uZWNCbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9jay5udW1CbG9ja3M7IGkrKykge1xuICAgICAgICAgICAgZGF0YUJsb2Nrcy5wdXNoKHsgbnVtRGF0YUNvZGV3b3JkczogYmxvY2suZGF0YUNvZGV3b3Jkc1BlckJsb2NrLCBjb2Rld29yZHM6IFtdIH0pO1xuICAgICAgICAgICAgdG90YWxDb2Rld29yZHMgKz0gYmxvY2suZGF0YUNvZGV3b3Jkc1BlckJsb2NrICsgZWNJbmZvLmVjQ29kZXdvcmRzUGVyQmxvY2s7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJbiBzb21lIGNhc2VzIHRoZSBRUiBjb2RlIHdpbGwgYmUgbWFsZm9ybWVkIGVub3VnaCB0aGF0IHdlIHB1bGwgb2ZmIG1vcmUgb3IgbGVzcyB0aGFuIHdlIHNob3VsZC5cbiAgICAvLyBJZiB3ZSBwdWxsIG9mZiBsZXNzIHRoZXJlJ3Mgbm90aGluZyB3ZSBjYW4gZG8uXG4gICAgLy8gSWYgd2UgcHVsbCBvZmYgbW9yZSB3ZSBjYW4gc2FmZWx5IHRydW5jYXRlXG4gICAgaWYgKGNvZGV3b3Jkcy5sZW5ndGggPCB0b3RhbENvZGV3b3Jkcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29kZXdvcmRzID0gY29kZXdvcmRzLnNsaWNlKDAsIHRvdGFsQ29kZXdvcmRzKTtcbiAgICB2YXIgc2hvcnRCbG9ja1NpemUgPSBlY0luZm8uZWNCbG9ja3NbMF0uZGF0YUNvZGV3b3Jkc1BlckJsb2NrO1xuICAgIC8vIFB1bGwgY29kZXdvcmRzIHRvIGZpbGwgdGhlIGJsb2NrcyB1cCB0byB0aGUgbWluaW11bSBzaXplXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaG9ydEJsb2NrU2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZGF0YUJsb2Nrc18xID0gZGF0YUJsb2NrczsgX2kgPCBkYXRhQmxvY2tzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGF0YUJsb2NrID0gZGF0YUJsb2Nrc18xW19pXTtcbiAgICAgICAgICAgIGRhdGFCbG9jay5jb2Rld29yZHMucHVzaChjb2Rld29yZHMuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUgYXJlIGFueSBsYXJnZSBibG9ja3MsIHB1bGwgY29kZXdvcmRzIHRvIGZpbGwgdGhlIGxhc3QgZWxlbWVudCBvZiB0aG9zZVxuICAgIGlmIChlY0luZm8uZWNCbG9ja3MubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgc21hbGxCbG9ja0NvdW50ID0gZWNJbmZvLmVjQmxvY2tzWzBdLm51bUJsb2NrcztcbiAgICAgICAgdmFyIGxhcmdlQmxvY2tDb3VudCA9IGVjSW5mby5lY0Jsb2Nrc1sxXS5udW1CbG9ja3M7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFyZ2VCbG9ja0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFCbG9ja3Nbc21hbGxCbG9ja0NvdW50ICsgaV0uY29kZXdvcmRzLnB1c2goY29kZXdvcmRzLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgcmVzdCBvZiB0aGUgY29kZXdvcmRzIHRvIHRoZSBibG9ja3MuIFRoZXNlIGFyZSB0aGUgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMuXG4gICAgd2hpbGUgKGNvZGV3b3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIF9hID0gMCwgZGF0YUJsb2Nrc18yID0gZGF0YUJsb2NrczsgX2EgPCBkYXRhQmxvY2tzXzIubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICB2YXIgZGF0YUJsb2NrID0gZGF0YUJsb2Nrc18yW19hXTtcbiAgICAgICAgICAgIGRhdGFCbG9jay5jb2Rld29yZHMucHVzaChjb2Rld29yZHMuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGFCbG9ja3M7XG59XG5mdW5jdGlvbiBkZWNvZGVNYXRyaXgobWF0cml4KSB7XG4gICAgdmFyIHZlcnNpb24gPSByZWFkVmVyc2lvbihtYXRyaXgpO1xuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGZvcm1hdEluZm8gPSByZWFkRm9ybWF0SW5mb3JtYXRpb24obWF0cml4KTtcbiAgICBpZiAoIWZvcm1hdEluZm8pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBjb2Rld29yZHMgPSByZWFkQ29kZXdvcmRzKG1hdHJpeCwgdmVyc2lvbiwgZm9ybWF0SW5mbyk7XG4gICAgdmFyIGRhdGFCbG9ja3MgPSBnZXREYXRhQmxvY2tzKGNvZGV3b3JkcywgdmVyc2lvbiwgZm9ybWF0SW5mby5lcnJvckNvcnJlY3Rpb25MZXZlbCk7XG4gICAgaWYgKCFkYXRhQmxvY2tzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBDb3VudCB0b3RhbCBudW1iZXIgb2YgZGF0YSBieXRlc1xuICAgIHZhciB0b3RhbEJ5dGVzID0gZGF0YUJsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgKyBiLm51bURhdGFDb2Rld29yZHM7IH0sIDApO1xuICAgIHZhciByZXN1bHRCeXRlcyA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh0b3RhbEJ5dGVzKTtcbiAgICB2YXIgcmVzdWx0SW5kZXggPSAwO1xuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YUJsb2Nrc18zID0gZGF0YUJsb2NrczsgX2kgPCBkYXRhQmxvY2tzXzMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBkYXRhQmxvY2sgPSBkYXRhQmxvY2tzXzNbX2ldO1xuICAgICAgICB2YXIgY29ycmVjdGVkQnl0ZXMgPSByZWVkc29sb21vbl8xLmRlY29kZShkYXRhQmxvY2suY29kZXdvcmRzLCBkYXRhQmxvY2suY29kZXdvcmRzLmxlbmd0aCAtIGRhdGFCbG9jay5udW1EYXRhQ29kZXdvcmRzKTtcbiAgICAgICAgaWYgKCFjb3JyZWN0ZWRCeXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhQmxvY2subnVtRGF0YUNvZGV3b3JkczsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRCeXRlc1tyZXN1bHRJbmRleCsrXSA9IGNvcnJlY3RlZEJ5dGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVEYXRhXzEuZGVjb2RlKHJlc3VsdEJ5dGVzLCB2ZXJzaW9uLnZlcnNpb25OdW1iZXIpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZnVuY3Rpb24gZGVjb2RlKG1hdHJpeCkge1xuICAgIGlmIChtYXRyaXggPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGRlY29kZU1hdHJpeChtYXRyaXgpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gRGVjb2RpbmcgZGlkbid0IHdvcmssIHRyeSBtaXJyb3JpbmcgdGhlIFFSIGFjcm9zcyB0aGUgdG9wTGVmdCAtPiBib3R0b21SaWdodCBsaW5lLlxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgbWF0cml4LndpZHRoOyB4KyspIHtcbiAgICAgICAgZm9yICh2YXIgeSA9IHggKyAxOyB5IDwgbWF0cml4LmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBpZiAobWF0cml4LmdldCh4LCB5KSAhPT0gbWF0cml4LmdldCh5LCB4KSkge1xuICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoeCwgeSwgIW1hdHJpeC5nZXQoeCwgeSkpO1xuICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoeSwgeCwgIW1hdHJpeC5nZXQoeSwgeCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVNYXRyaXgobWF0cml4KTtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZVxudmFyIEJpdFN0cmVhbV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBzaGlmdEpJU1RhYmxlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIE1vZGU7XG4oZnVuY3Rpb24gKE1vZGUpIHtcbiAgICBNb2RlW1wiTnVtZXJpY1wiXSA9IFwibnVtZXJpY1wiO1xuICAgIE1vZGVbXCJBbHBoYW51bWVyaWNcIl0gPSBcImFscGhhbnVtZXJpY1wiO1xuICAgIE1vZGVbXCJCeXRlXCJdID0gXCJieXRlXCI7XG4gICAgTW9kZVtcIkthbmppXCJdID0gXCJrYW5qaVwiO1xuICAgIE1vZGVbXCJFQ0lcIl0gPSBcImVjaVwiO1xufSkoTW9kZSA9IGV4cG9ydHMuTW9kZSB8fCAoZXhwb3J0cy5Nb2RlID0ge30pKTtcbnZhciBNb2RlQnl0ZTtcbihmdW5jdGlvbiAoTW9kZUJ5dGUpIHtcbiAgICBNb2RlQnl0ZVtNb2RlQnl0ZVtcIlRlcm1pbmF0b3JcIl0gPSAwXSA9IFwiVGVybWluYXRvclwiO1xuICAgIE1vZGVCeXRlW01vZGVCeXRlW1wiTnVtZXJpY1wiXSA9IDFdID0gXCJOdW1lcmljXCI7XG4gICAgTW9kZUJ5dGVbTW9kZUJ5dGVbXCJBbHBoYW51bWVyaWNcIl0gPSAyXSA9IFwiQWxwaGFudW1lcmljXCI7XG4gICAgTW9kZUJ5dGVbTW9kZUJ5dGVbXCJCeXRlXCJdID0gNF0gPSBcIkJ5dGVcIjtcbiAgICBNb2RlQnl0ZVtNb2RlQnl0ZVtcIkthbmppXCJdID0gOF0gPSBcIkthbmppXCI7XG4gICAgTW9kZUJ5dGVbTW9kZUJ5dGVbXCJFQ0lcIl0gPSA3XSA9IFwiRUNJXCI7XG4gICAgLy8gU3RydWN0dXJlZEFwcGVuZCA9IDB4MyxcbiAgICAvLyBGTkMxRmlyc3RQb3NpdGlvbiA9IDB4NSxcbiAgICAvLyBGTkMxU2Vjb25kUG9zaXRpb24gPSAweDksXG59KShNb2RlQnl0ZSB8fCAoTW9kZUJ5dGUgPSB7fSkpO1xuZnVuY3Rpb24gZGVjb2RlTnVtZXJpYyhzdHJlYW0sIHNpemUpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgdmFyIGNoYXJhY3RlckNvdW50U2l6ZSA9IFsxMCwgMTIsIDE0XVtzaXplXTtcbiAgICB2YXIgbGVuZ3RoID0gc3RyZWFtLnJlYWRCaXRzKGNoYXJhY3RlckNvdW50U2l6ZSk7XG4gICAgLy8gUmVhZCBkaWdpdHMgaW4gZ3JvdXBzIG9mIDNcbiAgICB3aGlsZSAobGVuZ3RoID49IDMpIHtcbiAgICAgICAgdmFyIG51bSA9IHN0cmVhbS5yZWFkQml0cygxMCk7XG4gICAgICAgIGlmIChudW0gPj0gMTAwMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBudW1lcmljIHZhbHVlIGFib3ZlIDk5OVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IE1hdGguZmxvb3IobnVtIC8gMTAwKTtcbiAgICAgICAgdmFyIGIgPSBNYXRoLmZsb29yKG51bSAvIDEwKSAlIDEwO1xuICAgICAgICB2YXIgYyA9IG51bSAlIDEwO1xuICAgICAgICBieXRlcy5wdXNoKDQ4ICsgYSwgNDggKyBiLCA0OCArIGMpO1xuICAgICAgICB0ZXh0ICs9IGEudG9TdHJpbmcoKSArIGIudG9TdHJpbmcoKSArIGMudG9TdHJpbmcoKTtcbiAgICAgICAgbGVuZ3RoIC09IDM7XG4gICAgfVxuICAgIC8vIElmIHRoZSBudW1iZXIgb2YgZGlnaXRzIGFyZW4ndCBhIG11bHRpcGxlIG9mIDMsIHRoZSByZW1haW5pbmcgZGlnaXRzIGFyZSBzcGVjaWFsIGNhc2VkLlxuICAgIGlmIChsZW5ndGggPT09IDIpIHtcbiAgICAgICAgdmFyIG51bSA9IHN0cmVhbS5yZWFkQml0cyg3KTtcbiAgICAgICAgaWYgKG51bSA+PSAxMDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbnVtZXJpYyB2YWx1ZSBhYm92ZSA5OVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IE1hdGguZmxvb3IobnVtIC8gMTApO1xuICAgICAgICB2YXIgYiA9IG51bSAlIDEwO1xuICAgICAgICBieXRlcy5wdXNoKDQ4ICsgYSwgNDggKyBiKTtcbiAgICAgICAgdGV4dCArPSBhLnRvU3RyaW5nKCkgKyBiLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgbnVtID0gc3RyZWFtLnJlYWRCaXRzKDQpO1xuICAgICAgICBpZiAobnVtID49IDEwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG51bWVyaWMgdmFsdWUgYWJvdmUgOVwiKTtcbiAgICAgICAgfVxuICAgICAgICBieXRlcy5wdXNoKDQ4ICsgbnVtKTtcbiAgICAgICAgdGV4dCArPSBudW0udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYnl0ZXM6IGJ5dGVzLCB0ZXh0OiB0ZXh0IH07XG59XG52YXIgQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXMgPSBbXG4gICAgXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIixcbiAgICBcIjlcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLFxuICAgIFwiSVwiLCBcIkpcIiwgXCJLXCIsIFwiTFwiLCBcIk1cIiwgXCJOXCIsIFwiT1wiLCBcIlBcIiwgXCJRXCIsXG4gICAgXCJSXCIsIFwiU1wiLCBcIlRcIiwgXCJVXCIsIFwiVlwiLCBcIldcIiwgXCJYXCIsIFwiWVwiLCBcIlpcIixcbiAgICBcIiBcIiwgXCIkXCIsIFwiJVwiLCBcIipcIiwgXCIrXCIsIFwiLVwiLCBcIi5cIiwgXCIvXCIsIFwiOlwiLFxuXTtcbmZ1bmN0aW9uIGRlY29kZUFscGhhbnVtZXJpYyhzdHJlYW0sIHNpemUpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgdmFyIGNoYXJhY3RlckNvdW50U2l6ZSA9IFs5LCAxMSwgMTNdW3NpemVdO1xuICAgIHZhciBsZW5ndGggPSBzdHJlYW0ucmVhZEJpdHMoY2hhcmFjdGVyQ291bnRTaXplKTtcbiAgICB3aGlsZSAobGVuZ3RoID49IDIpIHtcbiAgICAgICAgdmFyIHYgPSBzdHJlYW0ucmVhZEJpdHMoMTEpO1xuICAgICAgICB2YXIgYSA9IE1hdGguZmxvb3IodiAvIDQ1KTtcbiAgICAgICAgdmFyIGIgPSB2ICUgNDU7XG4gICAgICAgIGJ5dGVzLnB1c2goQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYV0uY2hhckNvZGVBdCgwKSwgQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYl0uY2hhckNvZGVBdCgwKSk7XG4gICAgICAgIHRleHQgKz0gQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYV0gKyBBbHBoYW51bWVyaWNDaGFyYWN0ZXJDb2Rlc1tiXTtcbiAgICAgICAgbGVuZ3RoIC09IDI7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFyIGEgPSBzdHJlYW0ucmVhZEJpdHMoNik7XG4gICAgICAgIGJ5dGVzLnB1c2goQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYV0uY2hhckNvZGVBdCgwKSk7XG4gICAgICAgIHRleHQgKz0gQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYV07XG4gICAgfVxuICAgIHJldHVybiB7IGJ5dGVzOiBieXRlcywgdGV4dDogdGV4dCB9O1xufVxuZnVuY3Rpb24gZGVjb2RlQnl0ZShzdHJlYW0sIHNpemUpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgdmFyIGNoYXJhY3RlckNvdW50U2l6ZSA9IFs4LCAxNiwgMTZdW3NpemVdO1xuICAgIHZhciBsZW5ndGggPSBzdHJlYW0ucmVhZEJpdHMoY2hhcmFjdGVyQ291bnRTaXplKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBiID0gc3RyZWFtLnJlYWRCaXRzKDgpO1xuICAgICAgICBieXRlcy5wdXNoKGIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB0ZXh0ICs9IGRlY29kZVVSSUNvbXBvbmVudChieXRlcy5tYXAoZnVuY3Rpb24gKGIpIHsgcmV0dXJuIFwiJVwiICsgKFwiMFwiICsgYi50b1N0cmluZygxNikpLnN1YnN0cigtMik7IH0pLmpvaW4oXCJcIikpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgLy8gZmFpbGVkIHRvIGRlY29kZVxuICAgIH1cbiAgICByZXR1cm4geyBieXRlczogYnl0ZXMsIHRleHQ6IHRleHQgfTtcbn1cbmZ1bmN0aW9uIGRlY29kZUthbmppKHN0cmVhbSwgc2l6ZSkge1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIHZhciB0ZXh0ID0gXCJcIjtcbiAgICB2YXIgY2hhcmFjdGVyQ291bnRTaXplID0gWzgsIDEwLCAxMl1bc2l6ZV07XG4gICAgdmFyIGxlbmd0aCA9IHN0cmVhbS5yZWFkQml0cyhjaGFyYWN0ZXJDb3VudFNpemUpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGsgPSBzdHJlYW0ucmVhZEJpdHMoMTMpO1xuICAgICAgICB2YXIgYyA9IChNYXRoLmZsb29yKGsgLyAweEMwKSA8PCA4KSB8IChrICUgMHhDMCk7XG4gICAgICAgIGlmIChjIDwgMHgxRjAwKSB7XG4gICAgICAgICAgICBjICs9IDB4ODE0MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGMgKz0gMHhDMTQwO1xuICAgICAgICB9XG4gICAgICAgIGJ5dGVzLnB1c2goYyA+PiA4LCBjICYgMHhGRik7XG4gICAgICAgIHRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzaGlmdEpJU1RhYmxlXzEuc2hpZnRKSVNUYWJsZVtjXSk7XG4gICAgfVxuICAgIHJldHVybiB7IGJ5dGVzOiBieXRlcywgdGV4dDogdGV4dCB9O1xufVxuZnVuY3Rpb24gZGVjb2RlKGRhdGEsIHZlcnNpb24pIHtcbiAgICB2YXIgc3RyZWFtID0gbmV3IEJpdFN0cmVhbV8xLkJpdFN0cmVhbShkYXRhKTtcbiAgICAvLyBUaGVyZSBhcmUgMyAnc2l6ZXMnIGJhc2VkIG9uIHRoZSB2ZXJzaW9uLiAxLTkgaXMgc21hbGwgKDApLCAxMC0yNiBpcyBtZWRpdW0gKDEpIGFuZCAyNy00MCBpcyBsYXJnZSAoMikuXG4gICAgdmFyIHNpemUgPSB2ZXJzaW9uIDw9IDkgPyAwIDogdmVyc2lvbiA8PSAyNiA/IDEgOiAyO1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgIGJ5dGVzOiBbXSxcbiAgICAgICAgY2h1bmtzOiBbXSxcbiAgICB9O1xuICAgIHdoaWxlIChzdHJlYW0uYXZhaWxhYmxlKCkgPj0gNCkge1xuICAgICAgICB2YXIgbW9kZSA9IHN0cmVhbS5yZWFkQml0cyg0KTtcbiAgICAgICAgaWYgKG1vZGUgPT09IE1vZGVCeXRlLlRlcm1pbmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gTW9kZUJ5dGUuRUNJKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLnJlYWRCaXRzKDEpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNodW5rcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTW9kZS5FQ0ksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnROdW1iZXI6IHN0cmVhbS5yZWFkQml0cyg3KSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0cmVhbS5yZWFkQml0cygxKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jaHVua3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1vZGUuRUNJLFxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50TnVtYmVyOiBzdHJlYW0ucmVhZEJpdHMoMTQpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RyZWFtLnJlYWRCaXRzKDEpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNodW5rcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTW9kZS5FQ0ksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnROdW1iZXI6IHN0cmVhbS5yZWFkQml0cygyMSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFQ0kgZGF0YSBzZWVtcyBjb3JydXB0ZWRcbiAgICAgICAgICAgICAgICByZXN1bHQuY2h1bmtzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNb2RlLkVDSSxcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudE51bWJlcjogLTEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gTW9kZUJ5dGUuTnVtZXJpYykge1xuICAgICAgICAgICAgdmFyIG51bWVyaWNSZXN1bHQgPSBkZWNvZGVOdW1lcmljKHN0cmVhbSwgc2l6ZSk7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBudW1lcmljUmVzdWx0LnRleHQ7XG4gICAgICAgICAgICAoX2EgPSByZXN1bHQuYnl0ZXMpLnB1c2guYXBwbHkoX2EsIG51bWVyaWNSZXN1bHQuYnl0ZXMpO1xuICAgICAgICAgICAgcmVzdWx0LmNodW5rcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNb2RlLk51bWVyaWMsXG4gICAgICAgICAgICAgICAgdGV4dDogbnVtZXJpY1Jlc3VsdC50ZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gTW9kZUJ5dGUuQWxwaGFudW1lcmljKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGFudW1lcmljUmVzdWx0ID0gZGVjb2RlQWxwaGFudW1lcmljKHN0cmVhbSwgc2l6ZSk7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBhbHBoYW51bWVyaWNSZXN1bHQudGV4dDtcbiAgICAgICAgICAgIChfYiA9IHJlc3VsdC5ieXRlcykucHVzaC5hcHBseShfYiwgYWxwaGFudW1lcmljUmVzdWx0LmJ5dGVzKTtcbiAgICAgICAgICAgIHJlc3VsdC5jaHVua3MucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTW9kZS5BbHBoYW51bWVyaWMsXG4gICAgICAgICAgICAgICAgdGV4dDogYWxwaGFudW1lcmljUmVzdWx0LnRleHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RlID09PSBNb2RlQnl0ZS5CeXRlKSB7XG4gICAgICAgICAgICB2YXIgYnl0ZVJlc3VsdCA9IGRlY29kZUJ5dGUoc3RyZWFtLCBzaXplKTtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IGJ5dGVSZXN1bHQudGV4dDtcbiAgICAgICAgICAgIChfYyA9IHJlc3VsdC5ieXRlcykucHVzaC5hcHBseShfYywgYnl0ZVJlc3VsdC5ieXRlcyk7XG4gICAgICAgICAgICByZXN1bHQuY2h1bmtzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE1vZGUuQnl0ZSxcbiAgICAgICAgICAgICAgICBieXRlczogYnl0ZVJlc3VsdC5ieXRlcyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBieXRlUmVzdWx0LnRleHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RlID09PSBNb2RlQnl0ZS5LYW5qaSkge1xuICAgICAgICAgICAgdmFyIGthbmppUmVzdWx0ID0gZGVjb2RlS2Fuamkoc3RyZWFtLCBzaXplKTtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IGthbmppUmVzdWx0LnRleHQ7XG4gICAgICAgICAgICAoX2QgPSByZXN1bHQuYnl0ZXMpLnB1c2guYXBwbHkoX2QsIGthbmppUmVzdWx0LmJ5dGVzKTtcbiAgICAgICAgICAgIHJlc3VsdC5jaHVua3MucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTW9kZS5LYW5qaSxcbiAgICAgICAgICAgICAgICBieXRlczoga2FuamlSZXN1bHQuYnl0ZXMsXG4gICAgICAgICAgICAgICAgdGV4dDoga2FuamlSZXN1bHQudGV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJpdFN0cmVhbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaXRTdHJlYW0oYnl0ZXMpIHtcbiAgICAgICAgdGhpcy5ieXRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5iaXRPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmJ5dGVzID0gYnl0ZXM7XG4gICAgfVxuICAgIEJpdFN0cmVhbS5wcm90b3R5cGUucmVhZEJpdHMgPSBmdW5jdGlvbiAobnVtQml0cykge1xuICAgICAgICBpZiAobnVtQml0cyA8IDEgfHwgbnVtQml0cyA+IDMyIHx8IG51bUJpdHMgPiB0aGlzLmF2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVhZCBcIiArIG51bUJpdHMudG9TdHJpbmcoKSArIFwiIGJpdHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgIC8vIEZpcnN0LCByZWFkIHJlbWFpbmRlciBmcm9tIGN1cnJlbnQgYnl0ZVxuICAgICAgICBpZiAodGhpcy5iaXRPZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgYml0c0xlZnQgPSA4IC0gdGhpcy5iaXRPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgdG9SZWFkID0gbnVtQml0cyA8IGJpdHNMZWZ0ID8gbnVtQml0cyA6IGJpdHNMZWZ0O1xuICAgICAgICAgICAgdmFyIGJpdHNUb05vdFJlYWQgPSBiaXRzTGVmdCAtIHRvUmVhZDtcbiAgICAgICAgICAgIHZhciBtYXNrID0gKDB4RkYgPj4gKDggLSB0b1JlYWQpKSA8PCBiaXRzVG9Ob3RSZWFkO1xuICAgICAgICAgICAgcmVzdWx0ID0gKHRoaXMuYnl0ZXNbdGhpcy5ieXRlT2Zmc2V0XSAmIG1hc2spID4+IGJpdHNUb05vdFJlYWQ7XG4gICAgICAgICAgICBudW1CaXRzIC09IHRvUmVhZDtcbiAgICAgICAgICAgIHRoaXMuYml0T2Zmc2V0ICs9IHRvUmVhZDtcbiAgICAgICAgICAgIGlmICh0aGlzLmJpdE9mZnNldCA9PT0gOCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYml0T2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmJ5dGVPZmZzZXQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBOZXh0IHJlYWQgd2hvbGUgYnl0ZXNcbiAgICAgICAgaWYgKG51bUJpdHMgPiAwKSB7XG4gICAgICAgICAgICB3aGlsZSAobnVtQml0cyA+PSA4KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gKHJlc3VsdCA8PCA4KSB8ICh0aGlzLmJ5dGVzW3RoaXMuYnl0ZU9mZnNldF0gJiAweEZGKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ5dGVPZmZzZXQrKztcbiAgICAgICAgICAgICAgICBudW1CaXRzIC09IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaW5hbGx5IHJlYWQgYSBwYXJ0aWFsIGJ5dGVcbiAgICAgICAgICAgIGlmIChudW1CaXRzID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBiaXRzVG9Ob3RSZWFkID0gOCAtIG51bUJpdHM7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2sgPSAoMHhGRiA+PiBiaXRzVG9Ob3RSZWFkKSA8PCBiaXRzVG9Ob3RSZWFkO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IChyZXN1bHQgPDwgbnVtQml0cykgfCAoKHRoaXMuYnl0ZXNbdGhpcy5ieXRlT2Zmc2V0XSAmIG1hc2spID4+IGJpdHNUb05vdFJlYWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYml0T2Zmc2V0ICs9IG51bUJpdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIEJpdFN0cmVhbS5wcm90b3R5cGUuYXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gOCAqICh0aGlzLmJ5dGVzLmxlbmd0aCAtIHRoaXMuYnl0ZU9mZnNldCkgLSB0aGlzLmJpdE9mZnNldDtcbiAgICB9O1xuICAgIHJldHVybiBCaXRTdHJlYW07XG59KCkpO1xuZXhwb3J0cy5CaXRTdHJlYW0gPSBCaXRTdHJlYW07XG5cblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNoaWZ0SklTVGFibGUgPSB7XG4gICAgMHgyMDogMHgwMDIwLFxuICAgIDB4MjE6IDB4MDAyMSxcbiAgICAweDIyOiAweDAwMjIsXG4gICAgMHgyMzogMHgwMDIzLFxuICAgIDB4MjQ6IDB4MDAyNCxcbiAgICAweDI1OiAweDAwMjUsXG4gICAgMHgyNjogMHgwMDI2LFxuICAgIDB4Mjc6IDB4MDAyNyxcbiAgICAweDI4OiAweDAwMjgsXG4gICAgMHgyOTogMHgwMDI5LFxuICAgIDB4MkE6IDB4MDAyQSxcbiAgICAweDJCOiAweDAwMkIsXG4gICAgMHgyQzogMHgwMDJDLFxuICAgIDB4MkQ6IDB4MDAyRCxcbiAgICAweDJFOiAweDAwMkUsXG4gICAgMHgyRjogMHgwMDJGLFxuICAgIDB4MzA6IDB4MDAzMCxcbiAgICAweDMxOiAweDAwMzEsXG4gICAgMHgzMjogMHgwMDMyLFxuICAgIDB4MzM6IDB4MDAzMyxcbiAgICAweDM0OiAweDAwMzQsXG4gICAgMHgzNTogMHgwMDM1LFxuICAgIDB4MzY6IDB4MDAzNixcbiAgICAweDM3OiAweDAwMzcsXG4gICAgMHgzODogMHgwMDM4LFxuICAgIDB4Mzk6IDB4MDAzOSxcbiAgICAweDNBOiAweDAwM0EsXG4gICAgMHgzQjogMHgwMDNCLFxuICAgIDB4M0M6IDB4MDAzQyxcbiAgICAweDNEOiAweDAwM0QsXG4gICAgMHgzRTogMHgwMDNFLFxuICAgIDB4M0Y6IDB4MDAzRixcbiAgICAweDQwOiAweDAwNDAsXG4gICAgMHg0MTogMHgwMDQxLFxuICAgIDB4NDI6IDB4MDA0MixcbiAgICAweDQzOiAweDAwNDMsXG4gICAgMHg0NDogMHgwMDQ0LFxuICAgIDB4NDU6IDB4MDA0NSxcbiAgICAweDQ2OiAweDAwNDYsXG4gICAgMHg0NzogMHgwMDQ3LFxuICAgIDB4NDg6IDB4MDA0OCxcbiAgICAweDQ5OiAweDAwNDksXG4gICAgMHg0QTogMHgwMDRBLFxuICAgIDB4NEI6IDB4MDA0QixcbiAgICAweDRDOiAweDAwNEMsXG4gICAgMHg0RDogMHgwMDRELFxuICAgIDB4NEU6IDB4MDA0RSxcbiAgICAweDRGOiAweDAwNEYsXG4gICAgMHg1MDogMHgwMDUwLFxuICAgIDB4NTE6IDB4MDA1MSxcbiAgICAweDUyOiAweDAwNTIsXG4gICAgMHg1MzogMHgwMDUzLFxuICAgIDB4NTQ6IDB4MDA1NCxcbiAgICAweDU1OiAweDAwNTUsXG4gICAgMHg1NjogMHgwMDU2LFxuICAgIDB4NTc6IDB4MDA1NyxcbiAgICAweDU4OiAweDAwNTgsXG4gICAgMHg1OTogMHgwMDU5LFxuICAgIDB4NUE6IDB4MDA1QSxcbiAgICAweDVCOiAweDAwNUIsXG4gICAgMHg1QzogMHgwMEE1LFxuICAgIDB4NUQ6IDB4MDA1RCxcbiAgICAweDVFOiAweDAwNUUsXG4gICAgMHg1RjogMHgwMDVGLFxuICAgIDB4NjA6IDB4MDA2MCxcbiAgICAweDYxOiAweDAwNjEsXG4gICAgMHg2MjogMHgwMDYyLFxuICAgIDB4NjM6IDB4MDA2MyxcbiAgICAweDY0OiAweDAwNjQsXG4gICAgMHg2NTogMHgwMDY1LFxuICAgIDB4NjY6IDB4MDA2NixcbiAgICAweDY3OiAweDAwNjcsXG4gICAgMHg2ODogMHgwMDY4LFxuICAgIDB4Njk6IDB4MDA2OSxcbiAgICAweDZBOiAweDAwNkEsXG4gICAgMHg2QjogMHgwMDZCLFxuICAgIDB4NkM6IDB4MDA2QyxcbiAgICAweDZEOiAweDAwNkQsXG4gICAgMHg2RTogMHgwMDZFLFxuICAgIDB4NkY6IDB4MDA2RixcbiAgICAweDcwOiAweDAwNzAsXG4gICAgMHg3MTogMHgwMDcxLFxuICAgIDB4NzI6IDB4MDA3MixcbiAgICAweDczOiAweDAwNzMsXG4gICAgMHg3NDogMHgwMDc0LFxuICAgIDB4NzU6IDB4MDA3NSxcbiAgICAweDc2OiAweDAwNzYsXG4gICAgMHg3NzogMHgwMDc3LFxuICAgIDB4Nzg6IDB4MDA3OCxcbiAgICAweDc5OiAweDAwNzksXG4gICAgMHg3QTogMHgwMDdBLFxuICAgIDB4N0I6IDB4MDA3QixcbiAgICAweDdDOiAweDAwN0MsXG4gICAgMHg3RDogMHgwMDdELFxuICAgIDB4N0U6IDB4MjAzRSxcbiAgICAweDgxNDA6IDB4MzAwMCxcbiAgICAweDgxNDE6IDB4MzAwMSxcbiAgICAweDgxNDI6IDB4MzAwMixcbiAgICAweDgxNDM6IDB4RkYwQyxcbiAgICAweDgxNDQ6IDB4RkYwRSxcbiAgICAweDgxNDU6IDB4MzBGQixcbiAgICAweDgxNDY6IDB4RkYxQSxcbiAgICAweDgxNDc6IDB4RkYxQixcbiAgICAweDgxNDg6IDB4RkYxRixcbiAgICAweDgxNDk6IDB4RkYwMSxcbiAgICAweDgxNEE6IDB4MzA5QixcbiAgICAweDgxNEI6IDB4MzA5QyxcbiAgICAweDgxNEM6IDB4MDBCNCxcbiAgICAweDgxNEQ6IDB4RkY0MCxcbiAgICAweDgxNEU6IDB4MDBBOCxcbiAgICAweDgxNEY6IDB4RkYzRSxcbiAgICAweDgxNTA6IDB4RkZFMyxcbiAgICAweDgxNTE6IDB4RkYzRixcbiAgICAweDgxNTI6IDB4MzBGRCxcbiAgICAweDgxNTM6IDB4MzBGRSxcbiAgICAweDgxNTQ6IDB4MzA5RCxcbiAgICAweDgxNTU6IDB4MzA5RSxcbiAgICAweDgxNTY6IDB4MzAwMyxcbiAgICAweDgxNTc6IDB4NEVERCxcbiAgICAweDgxNTg6IDB4MzAwNSxcbiAgICAweDgxNTk6IDB4MzAwNixcbiAgICAweDgxNUE6IDB4MzAwNyxcbiAgICAweDgxNUI6IDB4MzBGQyxcbiAgICAweDgxNUM6IDB4MjAxNSxcbiAgICAweDgxNUQ6IDB4MjAxMCxcbiAgICAweDgxNUU6IDB4RkYwRixcbiAgICAweDgxNUY6IDB4MDA1QyxcbiAgICAweDgxNjA6IDB4MzAxQyxcbiAgICAweDgxNjE6IDB4MjAxNixcbiAgICAweDgxNjI6IDB4RkY1QyxcbiAgICAweDgxNjM6IDB4MjAyNixcbiAgICAweDgxNjQ6IDB4MjAyNSxcbiAgICAweDgxNjU6IDB4MjAxOCxcbiAgICAweDgxNjY6IDB4MjAxOSxcbiAgICAweDgxNjc6IDB4MjAxQyxcbiAgICAweDgxNjg6IDB4MjAxRCxcbiAgICAweDgxNjk6IDB4RkYwOCxcbiAgICAweDgxNkE6IDB4RkYwOSxcbiAgICAweDgxNkI6IDB4MzAxNCxcbiAgICAweDgxNkM6IDB4MzAxNSxcbiAgICAweDgxNkQ6IDB4RkYzQixcbiAgICAweDgxNkU6IDB4RkYzRCxcbiAgICAweDgxNkY6IDB4RkY1QixcbiAgICAweDgxNzA6IDB4RkY1RCxcbiAgICAweDgxNzE6IDB4MzAwOCxcbiAgICAweDgxNzI6IDB4MzAwOSxcbiAgICAweDgxNzM6IDB4MzAwQSxcbiAgICAweDgxNzQ6IDB4MzAwQixcbiAgICAweDgxNzU6IDB4MzAwQyxcbiAgICAweDgxNzY6IDB4MzAwRCxcbiAgICAweDgxNzc6IDB4MzAwRSxcbiAgICAweDgxNzg6IDB4MzAwRixcbiAgICAweDgxNzk6IDB4MzAxMCxcbiAgICAweDgxN0E6IDB4MzAxMSxcbiAgICAweDgxN0I6IDB4RkYwQixcbiAgICAweDgxN0M6IDB4MjIxMixcbiAgICAweDgxN0Q6IDB4MDBCMSxcbiAgICAweDgxN0U6IDB4MDBENyxcbiAgICAweDgxODA6IDB4MDBGNyxcbiAgICAweDgxODE6IDB4RkYxRCxcbiAgICAweDgxODI6IDB4MjI2MCxcbiAgICAweDgxODM6IDB4RkYxQyxcbiAgICAweDgxODQ6IDB4RkYxRSxcbiAgICAweDgxODU6IDB4MjI2NixcbiAgICAweDgxODY6IDB4MjI2NyxcbiAgICAweDgxODc6IDB4MjIxRSxcbiAgICAweDgxODg6IDB4MjIzNCxcbiAgICAweDgxODk6IDB4MjY0MixcbiAgICAweDgxOEE6IDB4MjY0MCxcbiAgICAweDgxOEI6IDB4MDBCMCxcbiAgICAweDgxOEM6IDB4MjAzMixcbiAgICAweDgxOEQ6IDB4MjAzMyxcbiAgICAweDgxOEU6IDB4MjEwMyxcbiAgICAweDgxOEY6IDB4RkZFNSxcbiAgICAweDgxOTA6IDB4RkYwNCxcbiAgICAweDgxOTE6IDB4MDBBMixcbiAgICAweDgxOTI6IDB4MDBBMyxcbiAgICAweDgxOTM6IDB4RkYwNSxcbiAgICAweDgxOTQ6IDB4RkYwMyxcbiAgICAweDgxOTU6IDB4RkYwNixcbiAgICAweDgxOTY6IDB4RkYwQSxcbiAgICAweDgxOTc6IDB4RkYyMCxcbiAgICAweDgxOTg6IDB4MDBBNyxcbiAgICAweDgxOTk6IDB4MjYwNixcbiAgICAweDgxOUE6IDB4MjYwNSxcbiAgICAweDgxOUI6IDB4MjVDQixcbiAgICAweDgxOUM6IDB4MjVDRixcbiAgICAweDgxOUQ6IDB4MjVDRSxcbiAgICAweDgxOUU6IDB4MjVDNyxcbiAgICAweDgxOUY6IDB4MjVDNixcbiAgICAweDgxQTA6IDB4MjVBMSxcbiAgICAweDgxQTE6IDB4MjVBMCxcbiAgICAweDgxQTI6IDB4MjVCMyxcbiAgICAweDgxQTM6IDB4MjVCMixcbiAgICAweDgxQTQ6IDB4MjVCRCxcbiAgICAweDgxQTU6IDB4MjVCQyxcbiAgICAweDgxQTY6IDB4MjAzQixcbiAgICAweDgxQTc6IDB4MzAxMixcbiAgICAweDgxQTg6IDB4MjE5MixcbiAgICAweDgxQTk6IDB4MjE5MCxcbiAgICAweDgxQUE6IDB4MjE5MSxcbiAgICAweDgxQUI6IDB4MjE5MyxcbiAgICAweDgxQUM6IDB4MzAxMyxcbiAgICAweDgxQjg6IDB4MjIwOCxcbiAgICAweDgxQjk6IDB4MjIwQixcbiAgICAweDgxQkE6IDB4MjI4NixcbiAgICAweDgxQkI6IDB4MjI4NyxcbiAgICAweDgxQkM6IDB4MjI4MixcbiAgICAweDgxQkQ6IDB4MjI4MyxcbiAgICAweDgxQkU6IDB4MjIyQSxcbiAgICAweDgxQkY6IDB4MjIyOSxcbiAgICAweDgxQzg6IDB4MjIyNyxcbiAgICAweDgxQzk6IDB4MjIyOCxcbiAgICAweDgxQ0E6IDB4MDBBQyxcbiAgICAweDgxQ0I6IDB4MjFEMixcbiAgICAweDgxQ0M6IDB4MjFENCxcbiAgICAweDgxQ0Q6IDB4MjIwMCxcbiAgICAweDgxQ0U6IDB4MjIwMyxcbiAgICAweDgxREE6IDB4MjIyMCxcbiAgICAweDgxREI6IDB4MjJBNSxcbiAgICAweDgxREM6IDB4MjMxMixcbiAgICAweDgxREQ6IDB4MjIwMixcbiAgICAweDgxREU6IDB4MjIwNyxcbiAgICAweDgxREY6IDB4MjI2MSxcbiAgICAweDgxRTA6IDB4MjI1MixcbiAgICAweDgxRTE6IDB4MjI2QSxcbiAgICAweDgxRTI6IDB4MjI2QixcbiAgICAweDgxRTM6IDB4MjIxQSxcbiAgICAweDgxRTQ6IDB4MjIzRCxcbiAgICAweDgxRTU6IDB4MjIxRCxcbiAgICAweDgxRTY6IDB4MjIzNSxcbiAgICAweDgxRTc6IDB4MjIyQixcbiAgICAweDgxRTg6IDB4MjIyQyxcbiAgICAweDgxRjA6IDB4MjEyQixcbiAgICAweDgxRjE6IDB4MjAzMCxcbiAgICAweDgxRjI6IDB4MjY2RixcbiAgICAweDgxRjM6IDB4MjY2RCxcbiAgICAweDgxRjQ6IDB4MjY2QSxcbiAgICAweDgxRjU6IDB4MjAyMCxcbiAgICAweDgxRjY6IDB4MjAyMSxcbiAgICAweDgxRjc6IDB4MDBCNixcbiAgICAweDgxRkM6IDB4MjVFRixcbiAgICAweDgyNEY6IDB4RkYxMCxcbiAgICAweDgyNTA6IDB4RkYxMSxcbiAgICAweDgyNTE6IDB4RkYxMixcbiAgICAweDgyNTI6IDB4RkYxMyxcbiAgICAweDgyNTM6IDB4RkYxNCxcbiAgICAweDgyNTQ6IDB4RkYxNSxcbiAgICAweDgyNTU6IDB4RkYxNixcbiAgICAweDgyNTY6IDB4RkYxNyxcbiAgICAweDgyNTc6IDB4RkYxOCxcbiAgICAweDgyNTg6IDB4RkYxOSxcbiAgICAweDgyNjA6IDB4RkYyMSxcbiAgICAweDgyNjE6IDB4RkYyMixcbiAgICAweDgyNjI6IDB4RkYyMyxcbiAgICAweDgyNjM6IDB4RkYyNCxcbiAgICAweDgyNjQ6IDB4RkYyNSxcbiAgICAweDgyNjU6IDB4RkYyNixcbiAgICAweDgyNjY6IDB4RkYyNyxcbiAgICAweDgyNjc6IDB4RkYyOCxcbiAgICAweDgyNjg6IDB4RkYyOSxcbiAgICAweDgyNjk6IDB4RkYyQSxcbiAgICAweDgyNkE6IDB4RkYyQixcbiAgICAweDgyNkI6IDB4RkYyQyxcbiAgICAweDgyNkM6IDB4RkYyRCxcbiAgICAweDgyNkQ6IDB4RkYyRSxcbiAgICAweDgyNkU6IDB4RkYyRixcbiAgICAweDgyNkY6IDB4RkYzMCxcbiAgICAweDgyNzA6IDB4RkYzMSxcbiAgICAweDgyNzE6IDB4RkYzMixcbiAgICAweDgyNzI6IDB4RkYzMyxcbiAgICAweDgyNzM6IDB4RkYzNCxcbiAgICAweDgyNzQ6IDB4RkYzNSxcbiAgICAweDgyNzU6IDB4RkYzNixcbiAgICAweDgyNzY6IDB4RkYzNyxcbiAgICAweDgyNzc6IDB4RkYzOCxcbiAgICAweDgyNzg6IDB4RkYzOSxcbiAgICAweDgyNzk6IDB4RkYzQSxcbiAgICAweDgyODE6IDB4RkY0MSxcbiAgICAweDgyODI6IDB4RkY0MixcbiAgICAweDgyODM6IDB4RkY0MyxcbiAgICAweDgyODQ6IDB4RkY0NCxcbiAgICAweDgyODU6IDB4RkY0NSxcbiAgICAweDgyODY6IDB4RkY0NixcbiAgICAweDgyODc6IDB4RkY0NyxcbiAgICAweDgyODg6IDB4RkY0OCxcbiAgICAweDgyODk6IDB4RkY0OSxcbiAgICAweDgyOEE6IDB4RkY0QSxcbiAgICAweDgyOEI6IDB4RkY0QixcbiAgICAweDgyOEM6IDB4RkY0QyxcbiAgICAweDgyOEQ6IDB4RkY0RCxcbiAgICAweDgyOEU6IDB4RkY0RSxcbiAgICAweDgyOEY6IDB4RkY0RixcbiAgICAweDgyOTA6IDB4RkY1MCxcbiAgICAweDgyOTE6IDB4RkY1MSxcbiAgICAweDgyOTI6IDB4RkY1MixcbiAgICAweDgyOTM6IDB4RkY1MyxcbiAgICAweDgyOTQ6IDB4RkY1NCxcbiAgICAweDgyOTU6IDB4RkY1NSxcbiAgICAweDgyOTY6IDB4RkY1NixcbiAgICAweDgyOTc6IDB4RkY1NyxcbiAgICAweDgyOTg6IDB4RkY1OCxcbiAgICAweDgyOTk6IDB4RkY1OSxcbiAgICAweDgyOUE6IDB4RkY1QSxcbiAgICAweDgyOUY6IDB4MzA0MSxcbiAgICAweDgyQTA6IDB4MzA0MixcbiAgICAweDgyQTE6IDB4MzA0MyxcbiAgICAweDgyQTI6IDB4MzA0NCxcbiAgICAweDgyQTM6IDB4MzA0NSxcbiAgICAweDgyQTQ6IDB4MzA0NixcbiAgICAweDgyQTU6IDB4MzA0NyxcbiAgICAweDgyQTY6IDB4MzA0OCxcbiAgICAweDgyQTc6IDB4MzA0OSxcbiAgICAweDgyQTg6IDB4MzA0QSxcbiAgICAweDgyQTk6IDB4MzA0QixcbiAgICAweDgyQUE6IDB4MzA0QyxcbiAgICAweDgyQUI6IDB4MzA0RCxcbiAgICAweDgyQUM6IDB4MzA0RSxcbiAgICAweDgyQUQ6IDB4MzA0RixcbiAgICAweDgyQUU6IDB4MzA1MCxcbiAgICAweDgyQUY6IDB4MzA1MSxcbiAgICAweDgyQjA6IDB4MzA1MixcbiAgICAweDgyQjE6IDB4MzA1MyxcbiAgICAweDgyQjI6IDB4MzA1NCxcbiAgICAweDgyQjM6IDB4MzA1NSxcbiAgICAweDgyQjQ6IDB4MzA1NixcbiAgICAweDgyQjU6IDB4MzA1NyxcbiAgICAweDgyQjY6IDB4MzA1OCxcbiAgICAweDgyQjc6IDB4MzA1OSxcbiAgICAweDgyQjg6IDB4MzA1QSxcbiAgICAweDgyQjk6IDB4MzA1QixcbiAgICAweDgyQkE6IDB4MzA1QyxcbiAgICAweDgyQkI6IDB4MzA1RCxcbiAgICAweDgyQkM6IDB4MzA1RSxcbiAgICAweDgyQkQ6IDB4MzA1RixcbiAgICAweDgyQkU6IDB4MzA2MCxcbiAgICAweDgyQkY6IDB4MzA2MSxcbiAgICAweDgyQzA6IDB4MzA2MixcbiAgICAweDgyQzE6IDB4MzA2MyxcbiAgICAweDgyQzI6IDB4MzA2NCxcbiAgICAweDgyQzM6IDB4MzA2NSxcbiAgICAweDgyQzQ6IDB4MzA2NixcbiAgICAweDgyQzU6IDB4MzA2NyxcbiAgICAweDgyQzY6IDB4MzA2OCxcbiAgICAweDgyQzc6IDB4MzA2OSxcbiAgICAweDgyQzg6IDB4MzA2QSxcbiAgICAweDgyQzk6IDB4MzA2QixcbiAgICAweDgyQ0E6IDB4MzA2QyxcbiAgICAweDgyQ0I6IDB4MzA2RCxcbiAgICAweDgyQ0M6IDB4MzA2RSxcbiAgICAweDgyQ0Q6IDB4MzA2RixcbiAgICAweDgyQ0U6IDB4MzA3MCxcbiAgICAweDgyQ0Y6IDB4MzA3MSxcbiAgICAweDgyRDA6IDB4MzA3MixcbiAgICAweDgyRDE6IDB4MzA3MyxcbiAgICAweDgyRDI6IDB4MzA3NCxcbiAgICAweDgyRDM6IDB4MzA3NSxcbiAgICAweDgyRDQ6IDB4MzA3NixcbiAgICAweDgyRDU6IDB4MzA3NyxcbiAgICAweDgyRDY6IDB4MzA3OCxcbiAgICAweDgyRDc6IDB4MzA3OSxcbiAgICAweDgyRDg6IDB4MzA3QSxcbiAgICAweDgyRDk6IDB4MzA3QixcbiAgICAweDgyREE6IDB4MzA3QyxcbiAgICAweDgyREI6IDB4MzA3RCxcbiAgICAweDgyREM6IDB4MzA3RSxcbiAgICAweDgyREQ6IDB4MzA3RixcbiAgICAweDgyREU6IDB4MzA4MCxcbiAgICAweDgyREY6IDB4MzA4MSxcbiAgICAweDgyRTA6IDB4MzA4MixcbiAgICAweDgyRTE6IDB4MzA4MyxcbiAgICAweDgyRTI6IDB4MzA4NCxcbiAgICAweDgyRTM6IDB4MzA4NSxcbiAgICAweDgyRTQ6IDB4MzA4NixcbiAgICAweDgyRTU6IDB4MzA4NyxcbiAgICAweDgyRTY6IDB4MzA4OCxcbiAgICAweDgyRTc6IDB4MzA4OSxcbiAgICAweDgyRTg6IDB4MzA4QSxcbiAgICAweDgyRTk6IDB4MzA4QixcbiAgICAweDgyRUE6IDB4MzA4QyxcbiAgICAweDgyRUI6IDB4MzA4RCxcbiAgICAweDgyRUM6IDB4MzA4RSxcbiAgICAweDgyRUQ6IDB4MzA4RixcbiAgICAweDgyRUU6IDB4MzA5MCxcbiAgICAweDgyRUY6IDB4MzA5MSxcbiAgICAweDgyRjA6IDB4MzA5MixcbiAgICAweDgyRjE6IDB4MzA5MyxcbiAgICAweDgzNDA6IDB4MzBBMSxcbiAgICAweDgzNDE6IDB4MzBBMixcbiAgICAweDgzNDI6IDB4MzBBMyxcbiAgICAweDgzNDM6IDB4MzBBNCxcbiAgICAweDgzNDQ6IDB4MzBBNSxcbiAgICAweDgzNDU6IDB4MzBBNixcbiAgICAweDgzNDY6IDB4MzBBNyxcbiAgICAweDgzNDc6IDB4MzBBOCxcbiAgICAweDgzNDg6IDB4MzBBOSxcbiAgICAweDgzNDk6IDB4MzBBQSxcbiAgICAweDgzNEE6IDB4MzBBQixcbiAgICAweDgzNEI6IDB4MzBBQyxcbiAgICAweDgzNEM6IDB4MzBBRCxcbiAgICAweDgzNEQ6IDB4MzBBRSxcbiAgICAweDgzNEU6IDB4MzBBRixcbiAgICAweDgzNEY6IDB4MzBCMCxcbiAgICAweDgzNTA6IDB4MzBCMSxcbiAgICAweDgzNTE6IDB4MzBCMixcbiAgICAweDgzNTI6IDB4MzBCMyxcbiAgICAweDgzNTM6IDB4MzBCNCxcbiAgICAweDgzNTQ6IDB4MzBCNSxcbiAgICAweDgzNTU6IDB4MzBCNixcbiAgICAweDgzNTY6IDB4MzBCNyxcbiAgICAweDgzNTc6IDB4MzBCOCxcbiAgICAweDgzNTg6IDB4MzBCOSxcbiAgICAweDgzNTk6IDB4MzBCQSxcbiAgICAweDgzNUE6IDB4MzBCQixcbiAgICAweDgzNUI6IDB4MzBCQyxcbiAgICAweDgzNUM6IDB4MzBCRCxcbiAgICAweDgzNUQ6IDB4MzBCRSxcbiAgICAweDgzNUU6IDB4MzBCRixcbiAgICAweDgzNUY6IDB4MzBDMCxcbiAgICAweDgzNjA6IDB4MzBDMSxcbiAgICAweDgzNjE6IDB4MzBDMixcbiAgICAweDgzNjI6IDB4MzBDMyxcbiAgICAweDgzNjM6IDB4MzBDNCxcbiAgICAweDgzNjQ6IDB4MzBDNSxcbiAgICAweDgzNjU6IDB4MzBDNixcbiAgICAweDgzNjY6IDB4MzBDNyxcbiAgICAweDgzNjc6IDB4MzBDOCxcbiAgICAweDgzNjg6IDB4MzBDOSxcbiAgICAweDgzNjk6IDB4MzBDQSxcbiAgICAweDgzNkE6IDB4MzBDQixcbiAgICAweDgzNkI6IDB4MzBDQyxcbiAgICAweDgzNkM6IDB4MzBDRCxcbiAgICAweDgzNkQ6IDB4MzBDRSxcbiAgICAweDgzNkU6IDB4MzBDRixcbiAgICAweDgzNkY6IDB4MzBEMCxcbiAgICAweDgzNzA6IDB4MzBEMSxcbiAgICAweDgzNzE6IDB4MzBEMixcbiAgICAweDgzNzI6IDB4MzBEMyxcbiAgICAweDgzNzM6IDB4MzBENCxcbiAgICAweDgzNzQ6IDB4MzBENSxcbiAgICAweDgzNzU6IDB4MzBENixcbiAgICAweDgzNzY6IDB4MzBENyxcbiAgICAweDgzNzc6IDB4MzBEOCxcbiAgICAweDgzNzg6IDB4MzBEOSxcbiAgICAweDgzNzk6IDB4MzBEQSxcbiAgICAweDgzN0E6IDB4MzBEQixcbiAgICAweDgzN0I6IDB4MzBEQyxcbiAgICAweDgzN0M6IDB4MzBERCxcbiAgICAweDgzN0Q6IDB4MzBERSxcbiAgICAweDgzN0U6IDB4MzBERixcbiAgICAweDgzODA6IDB4MzBFMCxcbiAgICAweDgzODE6IDB4MzBFMSxcbiAgICAweDgzODI6IDB4MzBFMixcbiAgICAweDgzODM6IDB4MzBFMyxcbiAgICAweDgzODQ6IDB4MzBFNCxcbiAgICAweDgzODU6IDB4MzBFNSxcbiAgICAweDgzODY6IDB4MzBFNixcbiAgICAweDgzODc6IDB4MzBFNyxcbiAgICAweDgzODg6IDB4MzBFOCxcbiAgICAweDgzODk6IDB4MzBFOSxcbiAgICAweDgzOEE6IDB4MzBFQSxcbiAgICAweDgzOEI6IDB4MzBFQixcbiAgICAweDgzOEM6IDB4MzBFQyxcbiAgICAweDgzOEQ6IDB4MzBFRCxcbiAgICAweDgzOEU6IDB4MzBFRSxcbiAgICAweDgzOEY6IDB4MzBFRixcbiAgICAweDgzOTA6IDB4MzBGMCxcbiAgICAweDgzOTE6IDB4MzBGMSxcbiAgICAweDgzOTI6IDB4MzBGMixcbiAgICAweDgzOTM6IDB4MzBGMyxcbiAgICAweDgzOTQ6IDB4MzBGNCxcbiAgICAweDgzOTU6IDB4MzBGNSxcbiAgICAweDgzOTY6IDB4MzBGNixcbiAgICAweDgzOUY6IDB4MDM5MSxcbiAgICAweDgzQTA6IDB4MDM5MixcbiAgICAweDgzQTE6IDB4MDM5MyxcbiAgICAweDgzQTI6IDB4MDM5NCxcbiAgICAweDgzQTM6IDB4MDM5NSxcbiAgICAweDgzQTQ6IDB4MDM5NixcbiAgICAweDgzQTU6IDB4MDM5NyxcbiAgICAweDgzQTY6IDB4MDM5OCxcbiAgICAweDgzQTc6IDB4MDM5OSxcbiAgICAweDgzQTg6IDB4MDM5QSxcbiAgICAweDgzQTk6IDB4MDM5QixcbiAgICAweDgzQUE6IDB4MDM5QyxcbiAgICAweDgzQUI6IDB4MDM5RCxcbiAgICAweDgzQUM6IDB4MDM5RSxcbiAgICAweDgzQUQ6IDB4MDM5RixcbiAgICAweDgzQUU6IDB4MDNBMCxcbiAgICAweDgzQUY6IDB4MDNBMSxcbiAgICAweDgzQjA6IDB4MDNBMyxcbiAgICAweDgzQjE6IDB4MDNBNCxcbiAgICAweDgzQjI6IDB4MDNBNSxcbiAgICAweDgzQjM6IDB4MDNBNixcbiAgICAweDgzQjQ6IDB4MDNBNyxcbiAgICAweDgzQjU6IDB4MDNBOCxcbiAgICAweDgzQjY6IDB4MDNBOSxcbiAgICAweDgzQkY6IDB4MDNCMSxcbiAgICAweDgzQzA6IDB4MDNCMixcbiAgICAweDgzQzE6IDB4MDNCMyxcbiAgICAweDgzQzI6IDB4MDNCNCxcbiAgICAweDgzQzM6IDB4MDNCNSxcbiAgICAweDgzQzQ6IDB4MDNCNixcbiAgICAweDgzQzU6IDB4MDNCNyxcbiAgICAweDgzQzY6IDB4MDNCOCxcbiAgICAweDgzQzc6IDB4MDNCOSxcbiAgICAweDgzQzg6IDB4MDNCQSxcbiAgICAweDgzQzk6IDB4MDNCQixcbiAgICAweDgzQ0E6IDB4MDNCQyxcbiAgICAweDgzQ0I6IDB4MDNCRCxcbiAgICAweDgzQ0M6IDB4MDNCRSxcbiAgICAweDgzQ0Q6IDB4MDNCRixcbiAgICAweDgzQ0U6IDB4MDNDMCxcbiAgICAweDgzQ0Y6IDB4MDNDMSxcbiAgICAweDgzRDA6IDB4MDNDMyxcbiAgICAweDgzRDE6IDB4MDNDNCxcbiAgICAweDgzRDI6IDB4MDNDNSxcbiAgICAweDgzRDM6IDB4MDNDNixcbiAgICAweDgzRDQ6IDB4MDNDNyxcbiAgICAweDgzRDU6IDB4MDNDOCxcbiAgICAweDgzRDY6IDB4MDNDOSxcbiAgICAweDg0NDA6IDB4MDQxMCxcbiAgICAweDg0NDE6IDB4MDQxMSxcbiAgICAweDg0NDI6IDB4MDQxMixcbiAgICAweDg0NDM6IDB4MDQxMyxcbiAgICAweDg0NDQ6IDB4MDQxNCxcbiAgICAweDg0NDU6IDB4MDQxNSxcbiAgICAweDg0NDY6IDB4MDQwMSxcbiAgICAweDg0NDc6IDB4MDQxNixcbiAgICAweDg0NDg6IDB4MDQxNyxcbiAgICAweDg0NDk6IDB4MDQxOCxcbiAgICAweDg0NEE6IDB4MDQxOSxcbiAgICAweDg0NEI6IDB4MDQxQSxcbiAgICAweDg0NEM6IDB4MDQxQixcbiAgICAweDg0NEQ6IDB4MDQxQyxcbiAgICAweDg0NEU6IDB4MDQxRCxcbiAgICAweDg0NEY6IDB4MDQxRSxcbiAgICAweDg0NTA6IDB4MDQxRixcbiAgICAweDg0NTE6IDB4MDQyMCxcbiAgICAweDg0NTI6IDB4MDQyMSxcbiAgICAweDg0NTM6IDB4MDQyMixcbiAgICAweDg0NTQ6IDB4MDQyMyxcbiAgICAweDg0NTU6IDB4MDQyNCxcbiAgICAweDg0NTY6IDB4MDQyNSxcbiAgICAweDg0NTc6IDB4MDQyNixcbiAgICAweDg0NTg6IDB4MDQyNyxcbiAgICAweDg0NTk6IDB4MDQyOCxcbiAgICAweDg0NUE6IDB4MDQyOSxcbiAgICAweDg0NUI6IDB4MDQyQSxcbiAgICAweDg0NUM6IDB4MDQyQixcbiAgICAweDg0NUQ6IDB4MDQyQyxcbiAgICAweDg0NUU6IDB4MDQyRCxcbiAgICAweDg0NUY6IDB4MDQyRSxcbiAgICAweDg0NjA6IDB4MDQyRixcbiAgICAweDg0NzA6IDB4MDQzMCxcbiAgICAweDg0NzE6IDB4MDQzMSxcbiAgICAweDg0NzI6IDB4MDQzMixcbiAgICAweDg0NzM6IDB4MDQzMyxcbiAgICAweDg0NzQ6IDB4MDQzNCxcbiAgICAweDg0NzU6IDB4MDQzNSxcbiAgICAweDg0NzY6IDB4MDQ1MSxcbiAgICAweDg0Nzc6IDB4MDQzNixcbiAgICAweDg0Nzg6IDB4MDQzNyxcbiAgICAweDg0Nzk6IDB4MDQzOCxcbiAgICAweDg0N0E6IDB4MDQzOSxcbiAgICAweDg0N0I6IDB4MDQzQSxcbiAgICAweDg0N0M6IDB4MDQzQixcbiAgICAweDg0N0Q6IDB4MDQzQyxcbiAgICAweDg0N0U6IDB4MDQzRCxcbiAgICAweDg0ODA6IDB4MDQzRSxcbiAgICAweDg0ODE6IDB4MDQzRixcbiAgICAweDg0ODI6IDB4MDQ0MCxcbiAgICAweDg0ODM6IDB4MDQ0MSxcbiAgICAweDg0ODQ6IDB4MDQ0MixcbiAgICAweDg0ODU6IDB4MDQ0MyxcbiAgICAweDg0ODY6IDB4MDQ0NCxcbiAgICAweDg0ODc6IDB4MDQ0NSxcbiAgICAweDg0ODg6IDB4MDQ0NixcbiAgICAweDg0ODk6IDB4MDQ0NyxcbiAgICAweDg0OEE6IDB4MDQ0OCxcbiAgICAweDg0OEI6IDB4MDQ0OSxcbiAgICAweDg0OEM6IDB4MDQ0QSxcbiAgICAweDg0OEQ6IDB4MDQ0QixcbiAgICAweDg0OEU6IDB4MDQ0QyxcbiAgICAweDg0OEY6IDB4MDQ0RCxcbiAgICAweDg0OTA6IDB4MDQ0RSxcbiAgICAweDg0OTE6IDB4MDQ0RixcbiAgICAweDg0OUY6IDB4MjUwMCxcbiAgICAweDg0QTA6IDB4MjUwMixcbiAgICAweDg0QTE6IDB4MjUwQyxcbiAgICAweDg0QTI6IDB4MjUxMCxcbiAgICAweDg0QTM6IDB4MjUxOCxcbiAgICAweDg0QTQ6IDB4MjUxNCxcbiAgICAweDg0QTU6IDB4MjUxQyxcbiAgICAweDg0QTY6IDB4MjUyQyxcbiAgICAweDg0QTc6IDB4MjUyNCxcbiAgICAweDg0QTg6IDB4MjUzNCxcbiAgICAweDg0QTk6IDB4MjUzQyxcbiAgICAweDg0QUE6IDB4MjUwMSxcbiAgICAweDg0QUI6IDB4MjUwMyxcbiAgICAweDg0QUM6IDB4MjUwRixcbiAgICAweDg0QUQ6IDB4MjUxMyxcbiAgICAweDg0QUU6IDB4MjUxQixcbiAgICAweDg0QUY6IDB4MjUxNyxcbiAgICAweDg0QjA6IDB4MjUyMyxcbiAgICAweDg0QjE6IDB4MjUzMyxcbiAgICAweDg0QjI6IDB4MjUyQixcbiAgICAweDg0QjM6IDB4MjUzQixcbiAgICAweDg0QjQ6IDB4MjU0QixcbiAgICAweDg0QjU6IDB4MjUyMCxcbiAgICAweDg0QjY6IDB4MjUyRixcbiAgICAweDg0Qjc6IDB4MjUyOCxcbiAgICAweDg0Qjg6IDB4MjUzNyxcbiAgICAweDg0Qjk6IDB4MjUzRixcbiAgICAweDg0QkE6IDB4MjUxRCxcbiAgICAweDg0QkI6IDB4MjUzMCxcbiAgICAweDg0QkM6IDB4MjUyNSxcbiAgICAweDg0QkQ6IDB4MjUzOCxcbiAgICAweDg0QkU6IDB4MjU0MixcbiAgICAweDg4OUY6IDB4NEU5QyxcbiAgICAweDg4QTA6IDB4NTUxNixcbiAgICAweDg4QTE6IDB4NUEwMyxcbiAgICAweDg4QTI6IDB4OTYzRixcbiAgICAweDg4QTM6IDB4NTRDMCxcbiAgICAweDg4QTQ6IDB4NjExQixcbiAgICAweDg4QTU6IDB4NjMyOCxcbiAgICAweDg4QTY6IDB4NTlGNixcbiAgICAweDg4QTc6IDB4OTAyMixcbiAgICAweDg4QTg6IDB4ODQ3NSxcbiAgICAweDg4QTk6IDB4ODMxQyxcbiAgICAweDg4QUE6IDB4N0E1MCxcbiAgICAweDg4QUI6IDB4NjBBQSxcbiAgICAweDg4QUM6IDB4NjNFMSxcbiAgICAweDg4QUQ6IDB4NkUyNSxcbiAgICAweDg4QUU6IDB4NjVFRCxcbiAgICAweDg4QUY6IDB4ODQ2NixcbiAgICAweDg4QjA6IDB4ODJBNixcbiAgICAweDg4QjE6IDB4OUJGNSxcbiAgICAweDg4QjI6IDB4Njg5MyxcbiAgICAweDg4QjM6IDB4NTcyNyxcbiAgICAweDg4QjQ6IDB4NjVBMSxcbiAgICAweDg4QjU6IDB4NjI3MSxcbiAgICAweDg4QjY6IDB4NUI5QixcbiAgICAweDg4Qjc6IDB4NTlEMCxcbiAgICAweDg4Qjg6IDB4ODY3QixcbiAgICAweDg4Qjk6IDB4OThGNCxcbiAgICAweDg4QkE6IDB4N0Q2MixcbiAgICAweDg4QkI6IDB4N0RCRSxcbiAgICAweDg4QkM6IDB4OUI4RSxcbiAgICAweDg4QkQ6IDB4NjIxNixcbiAgICAweDg4QkU6IDB4N0M5RixcbiAgICAweDg4QkY6IDB4ODhCNyxcbiAgICAweDg4QzA6IDB4NUI4OSxcbiAgICAweDg4QzE6IDB4NUVCNSxcbiAgICAweDg4QzI6IDB4NjMwOSxcbiAgICAweDg4QzM6IDB4NjY5NyxcbiAgICAweDg4QzQ6IDB4Njg0OCxcbiAgICAweDg4QzU6IDB4OTVDNyxcbiAgICAweDg4QzY6IDB4OTc4RCxcbiAgICAweDg4Qzc6IDB4Njc0RixcbiAgICAweDg4Qzg6IDB4NEVFNSxcbiAgICAweDg4Qzk6IDB4NEYwQSxcbiAgICAweDg4Q0E6IDB4NEY0RCxcbiAgICAweDg4Q0I6IDB4NEY5RCxcbiAgICAweDg4Q0M6IDB4NTA0OSxcbiAgICAweDg4Q0Q6IDB4NTZGMixcbiAgICAweDg4Q0U6IDB4NTkzNyxcbiAgICAweDg4Q0Y6IDB4NTlENCxcbiAgICAweDg4RDA6IDB4NUEwMSxcbiAgICAweDg4RDE6IDB4NUMwOSxcbiAgICAweDg4RDI6IDB4NjBERixcbiAgICAweDg4RDM6IDB4NjEwRixcbiAgICAweDg4RDQ6IDB4NjE3MCxcbiAgICAweDg4RDU6IDB4NjYxMyxcbiAgICAweDg4RDY6IDB4NjkwNSxcbiAgICAweDg4RDc6IDB4NzBCQSxcbiAgICAweDg4RDg6IDB4NzU0RixcbiAgICAweDg4RDk6IDB4NzU3MCxcbiAgICAweDg4REE6IDB4NzlGQixcbiAgICAweDg4REI6IDB4N0RBRCxcbiAgICAweDg4REM6IDB4N0RFRixcbiAgICAweDg4REQ6IDB4ODBDMyxcbiAgICAweDg4REU6IDB4ODQwRSxcbiAgICAweDg4REY6IDB4ODg2MyxcbiAgICAweDg4RTA6IDB4OEIwMixcbiAgICAweDg4RTE6IDB4OTA1NSxcbiAgICAweDg4RTI6IDB4OTA3QSxcbiAgICAweDg4RTM6IDB4NTMzQixcbiAgICAweDg4RTQ6IDB4NEU5NSxcbiAgICAweDg4RTU6IDB4NEVBNSxcbiAgICAweDg4RTY6IDB4NTdERixcbiAgICAweDg4RTc6IDB4ODBCMixcbiAgICAweDg4RTg6IDB4OTBDMSxcbiAgICAweDg4RTk6IDB4NzhFRixcbiAgICAweDg4RUE6IDB4NEUwMCxcbiAgICAweDg4RUI6IDB4NThGMSxcbiAgICAweDg4RUM6IDB4NkVBMixcbiAgICAweDg4RUQ6IDB4OTAzOCxcbiAgICAweDg4RUU6IDB4N0EzMixcbiAgICAweDg4RUY6IDB4ODMyOCxcbiAgICAweDg4RjA6IDB4ODI4QixcbiAgICAweDg4RjE6IDB4OUMyRixcbiAgICAweDg4RjI6IDB4NTE0MSxcbiAgICAweDg4RjM6IDB4NTM3MCxcbiAgICAweDg4RjQ6IDB4NTRCRCxcbiAgICAweDg4RjU6IDB4NTRFMSxcbiAgICAweDg4RjY6IDB4NTZFMCxcbiAgICAweDg4Rjc6IDB4NTlGQixcbiAgICAweDg4Rjg6IDB4NUYxNSxcbiAgICAweDg4Rjk6IDB4OThGMixcbiAgICAweDg4RkE6IDB4NkRFQixcbiAgICAweDg4RkI6IDB4ODBFNCxcbiAgICAweDg4RkM6IDB4ODUyRCxcbiAgICAweDg5NDA6IDB4OTY2MixcbiAgICAweDg5NDE6IDB4OTY3MCxcbiAgICAweDg5NDI6IDB4OTZBMCxcbiAgICAweDg5NDM6IDB4OTdGQixcbiAgICAweDg5NDQ6IDB4NTQwQixcbiAgICAweDg5NDU6IDB4NTNGMyxcbiAgICAweDg5NDY6IDB4NUI4NyxcbiAgICAweDg5NDc6IDB4NzBDRixcbiAgICAweDg5NDg6IDB4N0ZCRCxcbiAgICAweDg5NDk6IDB4OEZDMixcbiAgICAweDg5NEE6IDB4OTZFOCxcbiAgICAweDg5NEI6IDB4NTM2RixcbiAgICAweDg5NEM6IDB4OUQ1QyxcbiAgICAweDg5NEQ6IDB4N0FCQSxcbiAgICAweDg5NEU6IDB4NEUxMSxcbiAgICAweDg5NEY6IDB4Nzg5MyxcbiAgICAweDg5NTA6IDB4ODFGQyxcbiAgICAweDg5NTE6IDB4NkUyNixcbiAgICAweDg5NTI6IDB4NTYxOCxcbiAgICAweDg5NTM6IDB4NTUwNCxcbiAgICAweDg5NTQ6IDB4NkIxRCxcbiAgICAweDg5NTU6IDB4ODUxQSxcbiAgICAweDg5NTY6IDB4OUMzQixcbiAgICAweDg5NTc6IDB4NTlFNSxcbiAgICAweDg5NTg6IDB4NTNBOSxcbiAgICAweDg5NTk6IDB4NkQ2NixcbiAgICAweDg5NUE6IDB4NzREQyxcbiAgICAweDg5NUI6IDB4OTU4RixcbiAgICAweDg5NUM6IDB4NTY0MixcbiAgICAweDg5NUQ6IDB4NEU5MSxcbiAgICAweDg5NUU6IDB4OTA0QixcbiAgICAweDg5NUY6IDB4OTZGMixcbiAgICAweDg5NjA6IDB4ODM0RixcbiAgICAweDg5NjE6IDB4OTkwQyxcbiAgICAweDg5NjI6IDB4NTNFMSxcbiAgICAweDg5NjM6IDB4NTVCNixcbiAgICAweDg5NjQ6IDB4NUIzMCxcbiAgICAweDg5NjU6IDB4NUY3MSxcbiAgICAweDg5NjY6IDB4NjYyMCxcbiAgICAweDg5Njc6IDB4NjZGMyxcbiAgICAweDg5Njg6IDB4NjgwNCxcbiAgICAweDg5Njk6IDB4NkMzOCxcbiAgICAweDg5NkE6IDB4NkNGMyxcbiAgICAweDg5NkI6IDB4NkQyOSxcbiAgICAweDg5NkM6IDB4NzQ1QixcbiAgICAweDg5NkQ6IDB4NzZDOCxcbiAgICAweDg5NkU6IDB4N0E0RSxcbiAgICAweDg5NkY6IDB4OTgzNCxcbiAgICAweDg5NzA6IDB4ODJGMSxcbiAgICAweDg5NzE6IDB4ODg1QixcbiAgICAweDg5NzI6IDB4OEE2MCxcbiAgICAweDg5NzM6IDB4OTJFRCxcbiAgICAweDg5NzQ6IDB4NkRCMixcbiAgICAweDg5NzU6IDB4NzVBQixcbiAgICAweDg5NzY6IDB4NzZDQSxcbiAgICAweDg5Nzc6IDB4OTlDNSxcbiAgICAweDg5Nzg6IDB4NjBBNixcbiAgICAweDg5Nzk6IDB4OEIwMSxcbiAgICAweDg5N0E6IDB4OEQ4QSxcbiAgICAweDg5N0I6IDB4OTVCMixcbiAgICAweDg5N0M6IDB4Njk4RSxcbiAgICAweDg5N0Q6IDB4NTNBRCxcbiAgICAweDg5N0U6IDB4NTE4NixcbiAgICAweDg5ODA6IDB4NTcxMixcbiAgICAweDg5ODE6IDB4NTgzMCxcbiAgICAweDg5ODI6IDB4NTk0NCxcbiAgICAweDg5ODM6IDB4NUJCNCxcbiAgICAweDg5ODQ6IDB4NUVGNixcbiAgICAweDg5ODU6IDB4NjAyOCxcbiAgICAweDg5ODY6IDB4NjNBOSxcbiAgICAweDg5ODc6IDB4NjNGNCxcbiAgICAweDg5ODg6IDB4NkNCRixcbiAgICAweDg5ODk6IDB4NkYxNCxcbiAgICAweDg5OEE6IDB4NzA4RSxcbiAgICAweDg5OEI6IDB4NzExNCxcbiAgICAweDg5OEM6IDB4NzE1OSxcbiAgICAweDg5OEQ6IDB4NzFENSxcbiAgICAweDg5OEU6IDB4NzMzRixcbiAgICAweDg5OEY6IDB4N0UwMSxcbiAgICAweDg5OTA6IDB4ODI3NixcbiAgICAweDg5OTE6IDB4ODJEMSxcbiAgICAweDg5OTI6IDB4ODU5NyxcbiAgICAweDg5OTM6IDB4OTA2MCxcbiAgICAweDg5OTQ6IDB4OTI1QixcbiAgICAweDg5OTU6IDB4OUQxQixcbiAgICAweDg5OTY6IDB4NTg2OSxcbiAgICAweDg5OTc6IDB4NjVCQyxcbiAgICAweDg5OTg6IDB4NkM1QSxcbiAgICAweDg5OTk6IDB4NzUyNSxcbiAgICAweDg5OUE6IDB4NTFGOSxcbiAgICAweDg5OUI6IDB4NTkyRSxcbiAgICAweDg5OUM6IDB4NTk2NSxcbiAgICAweDg5OUQ6IDB4NUY4MCxcbiAgICAweDg5OUU6IDB4NUZEQyxcbiAgICAweDg5OUY6IDB4NjJCQyxcbiAgICAweDg5QTA6IDB4NjVGQSxcbiAgICAweDg5QTE6IDB4NkEyQSxcbiAgICAweDg5QTI6IDB4NkIyNyxcbiAgICAweDg5QTM6IDB4NkJCNCxcbiAgICAweDg5QTQ6IDB4NzM4QixcbiAgICAweDg5QTU6IDB4N0ZDMSxcbiAgICAweDg5QTY6IDB4ODk1NixcbiAgICAweDg5QTc6IDB4OUQyQyxcbiAgICAweDg5QTg6IDB4OUQwRSxcbiAgICAweDg5QTk6IDB4OUVDNCxcbiAgICAweDg5QUE6IDB4NUNBMSxcbiAgICAweDg5QUI6IDB4NkM5NixcbiAgICAweDg5QUM6IDB4ODM3QixcbiAgICAweDg5QUQ6IDB4NTEwNCxcbiAgICAweDg5QUU6IDB4NUM0QixcbiAgICAweDg5QUY6IDB4NjFCNixcbiAgICAweDg5QjA6IDB4ODFDNixcbiAgICAweDg5QjE6IDB4Njg3NixcbiAgICAweDg5QjI6IDB4NzI2MSxcbiAgICAweDg5QjM6IDB4NEU1OSxcbiAgICAweDg5QjQ6IDB4NEZGQSxcbiAgICAweDg5QjU6IDB4NTM3OCxcbiAgICAweDg5QjY6IDB4NjA2OSxcbiAgICAweDg5Qjc6IDB4NkUyOSxcbiAgICAweDg5Qjg6IDB4N0E0RixcbiAgICAweDg5Qjk6IDB4OTdGMyxcbiAgICAweDg5QkE6IDB4NEUwQixcbiAgICAweDg5QkI6IDB4NTMxNixcbiAgICAweDg5QkM6IDB4NEVFRSxcbiAgICAweDg5QkQ6IDB4NEY1NSxcbiAgICAweDg5QkU6IDB4NEYzRCxcbiAgICAweDg5QkY6IDB4NEZBMSxcbiAgICAweDg5QzA6IDB4NEY3MyxcbiAgICAweDg5QzE6IDB4NTJBMCxcbiAgICAweDg5QzI6IDB4NTNFRixcbiAgICAweDg5QzM6IDB4NTYwOSxcbiAgICAweDg5QzQ6IDB4NTkwRixcbiAgICAweDg5QzU6IDB4NUFDMSxcbiAgICAweDg5QzY6IDB4NUJCNixcbiAgICAweDg5Qzc6IDB4NUJFMSxcbiAgICAweDg5Qzg6IDB4NzlEMSxcbiAgICAweDg5Qzk6IDB4NjY4NyxcbiAgICAweDg5Q0E6IDB4Njc5QyxcbiAgICAweDg5Q0I6IDB4NjdCNixcbiAgICAweDg5Q0M6IDB4NkI0QyxcbiAgICAweDg5Q0Q6IDB4NkNCMyxcbiAgICAweDg5Q0U6IDB4NzA2QixcbiAgICAweDg5Q0Y6IDB4NzNDMixcbiAgICAweDg5RDA6IDB4Nzk4RCxcbiAgICAweDg5RDE6IDB4NzlCRSxcbiAgICAweDg5RDI6IDB4N0EzQyxcbiAgICAweDg5RDM6IDB4N0I4NyxcbiAgICAweDg5RDQ6IDB4ODJCMSxcbiAgICAweDg5RDU6IDB4ODJEQixcbiAgICAweDg5RDY6IDB4ODMwNCxcbiAgICAweDg5RDc6IDB4ODM3NyxcbiAgICAweDg5RDg6IDB4ODNFRixcbiAgICAweDg5RDk6IDB4ODNEMyxcbiAgICAweDg5REE6IDB4ODc2NixcbiAgICAweDg5REI6IDB4OEFCMixcbiAgICAweDg5REM6IDB4NTYyOSxcbiAgICAweDg5REQ6IDB4OENBOCxcbiAgICAweDg5REU6IDB4OEZFNixcbiAgICAweDg5REY6IDB4OTA0RSxcbiAgICAweDg5RTA6IDB4OTcxRSxcbiAgICAweDg5RTE6IDB4ODY4QSxcbiAgICAweDg5RTI6IDB4NEZDNCxcbiAgICAweDg5RTM6IDB4NUNFOCxcbiAgICAweDg5RTQ6IDB4NjIxMSxcbiAgICAweDg5RTU6IDB4NzI1OSxcbiAgICAweDg5RTY6IDB4NzUzQixcbiAgICAweDg5RTc6IDB4ODFFNSxcbiAgICAweDg5RTg6IDB4ODJCRCxcbiAgICAweDg5RTk6IDB4ODZGRSxcbiAgICAweDg5RUE6IDB4OENDMCxcbiAgICAweDg5RUI6IDB4OTZDNSxcbiAgICAweDg5RUM6IDB4OTkxMyxcbiAgICAweDg5RUQ6IDB4OTlENSxcbiAgICAweDg5RUU6IDB4NEVDQixcbiAgICAweDg5RUY6IDB4NEYxQSxcbiAgICAweDg5RjA6IDB4ODlFMyxcbiAgICAweDg5RjE6IDB4NTZERSxcbiAgICAweDg5RjI6IDB4NTg0QSxcbiAgICAweDg5RjM6IDB4NThDQSxcbiAgICAweDg5RjQ6IDB4NUVGQixcbiAgICAweDg5RjU6IDB4NUZFQixcbiAgICAweDg5RjY6IDB4NjAyQSxcbiAgICAweDg5Rjc6IDB4NjA5NCxcbiAgICAweDg5Rjg6IDB4NjA2MixcbiAgICAweDg5Rjk6IDB4NjFEMCxcbiAgICAweDg5RkE6IDB4NjIxMixcbiAgICAweDg5RkI6IDB4NjJEMCxcbiAgICAweDg5RkM6IDB4NjUzOSxcbiAgICAweDhBNDA6IDB4OUI0MSxcbiAgICAweDhBNDE6IDB4NjY2NixcbiAgICAweDhBNDI6IDB4NjhCMCxcbiAgICAweDhBNDM6IDB4NkQ3NyxcbiAgICAweDhBNDQ6IDB4NzA3MCxcbiAgICAweDhBNDU6IDB4NzU0QyxcbiAgICAweDhBNDY6IDB4NzY4NixcbiAgICAweDhBNDc6IDB4N0Q3NSxcbiAgICAweDhBNDg6IDB4ODJBNSxcbiAgICAweDhBNDk6IDB4ODdGOSxcbiAgICAweDhBNEE6IDB4OTU4QixcbiAgICAweDhBNEI6IDB4OTY4RSxcbiAgICAweDhBNEM6IDB4OEM5RCxcbiAgICAweDhBNEQ6IDB4NTFGMSxcbiAgICAweDhBNEU6IDB4NTJCRSxcbiAgICAweDhBNEY6IDB4NTkxNixcbiAgICAweDhBNTA6IDB4NTRCMyxcbiAgICAweDhBNTE6IDB4NUJCMyxcbiAgICAweDhBNTI6IDB4NUQxNixcbiAgICAweDhBNTM6IDB4NjE2OCxcbiAgICAweDhBNTQ6IDB4Njk4MixcbiAgICAweDhBNTU6IDB4NkRBRixcbiAgICAweDhBNTY6IDB4Nzg4RCxcbiAgICAweDhBNTc6IDB4ODRDQixcbiAgICAweDhBNTg6IDB4ODg1NyxcbiAgICAweDhBNTk6IDB4OEE3MixcbiAgICAweDhBNUE6IDB4OTNBNyxcbiAgICAweDhBNUI6IDB4OUFCOCxcbiAgICAweDhBNUM6IDB4NkQ2QyxcbiAgICAweDhBNUQ6IDB4OTlBOCxcbiAgICAweDhBNUU6IDB4ODZEOSxcbiAgICAweDhBNUY6IDB4NTdBMyxcbiAgICAweDhBNjA6IDB4NjdGRixcbiAgICAweDhBNjE6IDB4ODZDRSxcbiAgICAweDhBNjI6IDB4OTIwRSxcbiAgICAweDhBNjM6IDB4NTI4MyxcbiAgICAweDhBNjQ6IDB4NTY4NyxcbiAgICAweDhBNjU6IDB4NTQwNCxcbiAgICAweDhBNjY6IDB4NUVEMyxcbiAgICAweDhBNjc6IDB4NjJFMSxcbiAgICAweDhBNjg6IDB4NjRCOSxcbiAgICAweDhBNjk6IDB4NjgzQyxcbiAgICAweDhBNkE6IDB4NjgzOCxcbiAgICAweDhBNkI6IDB4NkJCQixcbiAgICAweDhBNkM6IDB4NzM3MixcbiAgICAweDhBNkQ6IDB4NzhCQSxcbiAgICAweDhBNkU6IDB4N0E2QixcbiAgICAweDhBNkY6IDB4ODk5QSxcbiAgICAweDhBNzA6IDB4ODlEMixcbiAgICAweDhBNzE6IDB4OEQ2QixcbiAgICAweDhBNzI6IDB4OEYwMyxcbiAgICAweDhBNzM6IDB4OTBFRCxcbiAgICAweDhBNzQ6IDB4OTVBMyxcbiAgICAweDhBNzU6IDB4OTY5NCxcbiAgICAweDhBNzY6IDB4OTc2OSxcbiAgICAweDhBNzc6IDB4NUI2NixcbiAgICAweDhBNzg6IDB4NUNCMyxcbiAgICAweDhBNzk6IDB4Njk3RCxcbiAgICAweDhBN0E6IDB4OTg0RCxcbiAgICAweDhBN0I6IDB4OTg0RSxcbiAgICAweDhBN0M6IDB4NjM5QixcbiAgICAweDhBN0Q6IDB4N0IyMCxcbiAgICAweDhBN0U6IDB4NkEyQixcbiAgICAweDhBODA6IDB4NkE3RixcbiAgICAweDhBODE6IDB4NjhCNixcbiAgICAweDhBODI6IDB4OUMwRCxcbiAgICAweDhBODM6IDB4NkY1RixcbiAgICAweDhBODQ6IDB4NTI3MixcbiAgICAweDhBODU6IDB4NTU5RCxcbiAgICAweDhBODY6IDB4NjA3MCxcbiAgICAweDhBODc6IDB4NjJFQyxcbiAgICAweDhBODg6IDB4NkQzQixcbiAgICAweDhBODk6IDB4NkUwNyxcbiAgICAweDhBOEE6IDB4NkVEMSxcbiAgICAweDhBOEI6IDB4ODQ1QixcbiAgICAweDhBOEM6IDB4ODkxMCxcbiAgICAweDhBOEQ6IDB4OEY0NCxcbiAgICAweDhBOEU6IDB4NEUxNCxcbiAgICAweDhBOEY6IDB4OUMzOSxcbiAgICAweDhBOTA6IDB4NTNGNixcbiAgICAweDhBOTE6IDB4NjkxQixcbiAgICAweDhBOTI6IDB4NkEzQSxcbiAgICAweDhBOTM6IDB4OTc4NCxcbiAgICAweDhBOTQ6IDB4NjgyQSxcbiAgICAweDhBOTU6IDB4NTE1QyxcbiAgICAweDhBOTY6IDB4N0FDMyxcbiAgICAweDhBOTc6IDB4ODRCMixcbiAgICAweDhBOTg6IDB4OTFEQyxcbiAgICAweDhBOTk6IDB4OTM4QyxcbiAgICAweDhBOUE6IDB4NTY1QixcbiAgICAweDhBOUI6IDB4OUQyOCxcbiAgICAweDhBOUM6IDB4NjgyMixcbiAgICAweDhBOUQ6IDB4ODMwNSxcbiAgICAweDhBOUU6IDB4ODQzMSxcbiAgICAweDhBOUY6IDB4N0NBNSxcbiAgICAweDhBQTA6IDB4NTIwOCxcbiAgICAweDhBQTE6IDB4ODJDNSxcbiAgICAweDhBQTI6IDB4NzRFNixcbiAgICAweDhBQTM6IDB4NEU3RSxcbiAgICAweDhBQTQ6IDB4NEY4MyxcbiAgICAweDhBQTU6IDB4NTFBMCxcbiAgICAweDhBQTY6IDB4NUJEMixcbiAgICAweDhBQTc6IDB4NTIwQSxcbiAgICAweDhBQTg6IDB4NTJEOCxcbiAgICAweDhBQTk6IDB4NTJFNyxcbiAgICAweDhBQUE6IDB4NURGQixcbiAgICAweDhBQUI6IDB4NTU5QSxcbiAgICAweDhBQUM6IDB4NTgyQSxcbiAgICAweDhBQUQ6IDB4NTlFNixcbiAgICAweDhBQUU6IDB4NUI4QyxcbiAgICAweDhBQUY6IDB4NUI5OCxcbiAgICAweDhBQjA6IDB4NUJEQixcbiAgICAweDhBQjE6IDB4NUU3MixcbiAgICAweDhBQjI6IDB4NUU3OSxcbiAgICAweDhBQjM6IDB4NjBBMyxcbiAgICAweDhBQjQ6IDB4NjExRixcbiAgICAweDhBQjU6IDB4NjE2MyxcbiAgICAweDhBQjY6IDB4NjFCRSxcbiAgICAweDhBQjc6IDB4NjNEQixcbiAgICAweDhBQjg6IDB4NjU2MixcbiAgICAweDhBQjk6IDB4NjdEMSxcbiAgICAweDhBQkE6IDB4Njg1MyxcbiAgICAweDhBQkI6IDB4NjhGQSxcbiAgICAweDhBQkM6IDB4NkIzRSxcbiAgICAweDhBQkQ6IDB4NkI1MyxcbiAgICAweDhBQkU6IDB4NkM1NyxcbiAgICAweDhBQkY6IDB4NkYyMixcbiAgICAweDhBQzA6IDB4NkY5NyxcbiAgICAweDhBQzE6IDB4NkY0NSxcbiAgICAweDhBQzI6IDB4NzRCMCxcbiAgICAweDhBQzM6IDB4NzUxOCxcbiAgICAweDhBQzQ6IDB4NzZFMyxcbiAgICAweDhBQzU6IDB4NzcwQixcbiAgICAweDhBQzY6IDB4N0FGRixcbiAgICAweDhBQzc6IDB4N0JBMSxcbiAgICAweDhBQzg6IDB4N0MyMSxcbiAgICAweDhBQzk6IDB4N0RFOSxcbiAgICAweDhBQ0E6IDB4N0YzNixcbiAgICAweDhBQ0I6IDB4N0ZGMCxcbiAgICAweDhBQ0M6IDB4ODA5RCxcbiAgICAweDhBQ0Q6IDB4ODI2NixcbiAgICAweDhBQ0U6IDB4ODM5RSxcbiAgICAweDhBQ0Y6IDB4ODlCMyxcbiAgICAweDhBRDA6IDB4OEFDQyxcbiAgICAweDhBRDE6IDB4OENBQixcbiAgICAweDhBRDI6IDB4OTA4NCxcbiAgICAweDhBRDM6IDB4OTQ1MSxcbiAgICAweDhBRDQ6IDB4OTU5MyxcbiAgICAweDhBRDU6IDB4OTU5MSxcbiAgICAweDhBRDY6IDB4OTVBMixcbiAgICAweDhBRDc6IDB4OTY2NSxcbiAgICAweDhBRDg6IDB4OTdEMyxcbiAgICAweDhBRDk6IDB4OTkyOCxcbiAgICAweDhBREE6IDB4ODIxOCxcbiAgICAweDhBREI6IDB4NEUzOCxcbiAgICAweDhBREM6IDB4NTQyQixcbiAgICAweDhBREQ6IDB4NUNCOCxcbiAgICAweDhBREU6IDB4NURDQyxcbiAgICAweDhBREY6IDB4NzNBOSxcbiAgICAweDhBRTA6IDB4NzY0QyxcbiAgICAweDhBRTE6IDB4NzczQyxcbiAgICAweDhBRTI6IDB4NUNBOSxcbiAgICAweDhBRTM6IDB4N0ZFQixcbiAgICAweDhBRTQ6IDB4OEQwQixcbiAgICAweDhBRTU6IDB4OTZDMSxcbiAgICAweDhBRTY6IDB4OTgxMSxcbiAgICAweDhBRTc6IDB4OTg1NCxcbiAgICAweDhBRTg6IDB4OTg1OCxcbiAgICAweDhBRTk6IDB4NEYwMSxcbiAgICAweDhBRUE6IDB4NEYwRSxcbiAgICAweDhBRUI6IDB4NTM3MSxcbiAgICAweDhBRUM6IDB4NTU5QyxcbiAgICAweDhBRUQ6IDB4NTY2OCxcbiAgICAweDhBRUU6IDB4NTdGQSxcbiAgICAweDhBRUY6IDB4NTk0NyxcbiAgICAweDhBRjA6IDB4NUIwOSxcbiAgICAweDhBRjE6IDB4NUJDNCxcbiAgICAweDhBRjI6IDB4NUM5MCxcbiAgICAweDhBRjM6IDB4NUUwQyxcbiAgICAweDhBRjQ6IDB4NUU3RSxcbiAgICAweDhBRjU6IDB4NUZDQyxcbiAgICAweDhBRjY6IDB4NjNFRSxcbiAgICAweDhBRjc6IDB4NjczQSxcbiAgICAweDhBRjg6IDB4NjVENyxcbiAgICAweDhBRjk6IDB4NjVFMixcbiAgICAweDhBRkE6IDB4NjcxRixcbiAgICAweDhBRkI6IDB4NjhDQixcbiAgICAweDhBRkM6IDB4NjhDNCxcbiAgICAweDhCNDA6IDB4NkE1RixcbiAgICAweDhCNDE6IDB4NUUzMCxcbiAgICAweDhCNDI6IDB4NkJDNSxcbiAgICAweDhCNDM6IDB4NkMxNyxcbiAgICAweDhCNDQ6IDB4NkM3RCxcbiAgICAweDhCNDU6IDB4NzU3RixcbiAgICAweDhCNDY6IDB4Nzk0OCxcbiAgICAweDhCNDc6IDB4NUI2MyxcbiAgICAweDhCNDg6IDB4N0EwMCxcbiAgICAweDhCNDk6IDB4N0QwMCxcbiAgICAweDhCNEE6IDB4NUZCRCxcbiAgICAweDhCNEI6IDB4ODk4RixcbiAgICAweDhCNEM6IDB4OEExOCxcbiAgICAweDhCNEQ6IDB4OENCNCxcbiAgICAweDhCNEU6IDB4OEQ3NyxcbiAgICAweDhCNEY6IDB4OEVDQyxcbiAgICAweDhCNTA6IDB4OEYxRCxcbiAgICAweDhCNTE6IDB4OThFMixcbiAgICAweDhCNTI6IDB4OUEwRSxcbiAgICAweDhCNTM6IDB4OUIzQyxcbiAgICAweDhCNTQ6IDB4NEU4MCxcbiAgICAweDhCNTU6IDB4NTA3RCxcbiAgICAweDhCNTY6IDB4NTEwMCxcbiAgICAweDhCNTc6IDB4NTk5MyxcbiAgICAweDhCNTg6IDB4NUI5QyxcbiAgICAweDhCNTk6IDB4NjIyRixcbiAgICAweDhCNUE6IDB4NjI4MCxcbiAgICAweDhCNUI6IDB4NjRFQyxcbiAgICAweDhCNUM6IDB4NkIzQSxcbiAgICAweDhCNUQ6IDB4NzJBMCxcbiAgICAweDhCNUU6IDB4NzU5MSxcbiAgICAweDhCNUY6IDB4Nzk0NyxcbiAgICAweDhCNjA6IDB4N0ZBOSxcbiAgICAweDhCNjE6IDB4ODdGQixcbiAgICAweDhCNjI6IDB4OEFCQyxcbiAgICAweDhCNjM6IDB4OEI3MCxcbiAgICAweDhCNjQ6IDB4NjNBQyxcbiAgICAweDhCNjU6IDB4ODNDQSxcbiAgICAweDhCNjY6IDB4OTdBMCxcbiAgICAweDhCNjc6IDB4NTQwOSxcbiAgICAweDhCNjg6IDB4NTQwMyxcbiAgICAweDhCNjk6IDB4NTVBQixcbiAgICAweDhCNkE6IDB4Njg1NCxcbiAgICAweDhCNkI6IDB4NkE1OCxcbiAgICAweDhCNkM6IDB4OEE3MCxcbiAgICAweDhCNkQ6IDB4NzgyNyxcbiAgICAweDhCNkU6IDB4Njc3NSxcbiAgICAweDhCNkY6IDB4OUVDRCxcbiAgICAweDhCNzA6IDB4NTM3NCxcbiAgICAweDhCNzE6IDB4NUJBMixcbiAgICAweDhCNzI6IDB4ODExQSxcbiAgICAweDhCNzM6IDB4ODY1MCxcbiAgICAweDhCNzQ6IDB4OTAwNixcbiAgICAweDhCNzU6IDB4NEUxOCxcbiAgICAweDhCNzY6IDB4NEU0NSxcbiAgICAweDhCNzc6IDB4NEVDNyxcbiAgICAweDhCNzg6IDB4NEYxMSxcbiAgICAweDhCNzk6IDB4NTNDQSxcbiAgICAweDhCN0E6IDB4NTQzOCxcbiAgICAweDhCN0I6IDB4NUJBRSxcbiAgICAweDhCN0M6IDB4NUYxMyxcbiAgICAweDhCN0Q6IDB4NjAyNSxcbiAgICAweDhCN0U6IDB4NjU1MSxcbiAgICAweDhCODA6IDB4NjczRCxcbiAgICAweDhCODE6IDB4NkM0MixcbiAgICAweDhCODI6IDB4NkM3MixcbiAgICAweDhCODM6IDB4NkNFMyxcbiAgICAweDhCODQ6IDB4NzA3OCxcbiAgICAweDhCODU6IDB4NzQwMyxcbiAgICAweDhCODY6IDB4N0E3NixcbiAgICAweDhCODc6IDB4N0FBRSxcbiAgICAweDhCODg6IDB4N0IwOCxcbiAgICAweDhCODk6IDB4N0QxQSxcbiAgICAweDhCOEE6IDB4N0NGRSxcbiAgICAweDhCOEI6IDB4N0Q2NixcbiAgICAweDhCOEM6IDB4NjVFNyxcbiAgICAweDhCOEQ6IDB4NzI1QixcbiAgICAweDhCOEU6IDB4NTNCQixcbiAgICAweDhCOEY6IDB4NUM0NSxcbiAgICAweDhCOTA6IDB4NURFOCxcbiAgICAweDhCOTE6IDB4NjJEMixcbiAgICAweDhCOTI6IDB4NjJFMCxcbiAgICAweDhCOTM6IDB4NjMxOSxcbiAgICAweDhCOTQ6IDB4NkUyMCxcbiAgICAweDhCOTU6IDB4ODY1QSxcbiAgICAweDhCOTY6IDB4OEEzMSxcbiAgICAweDhCOTc6IDB4OERERCxcbiAgICAweDhCOTg6IDB4OTJGOCxcbiAgICAweDhCOTk6IDB4NkYwMSxcbiAgICAweDhCOUE6IDB4NzlBNixcbiAgICAweDhCOUI6IDB4OUI1QSxcbiAgICAweDhCOUM6IDB4NEVBOCxcbiAgICAweDhCOUQ6IDB4NEVBQixcbiAgICAweDhCOUU6IDB4NEVBQyxcbiAgICAweDhCOUY6IDB4NEY5QixcbiAgICAweDhCQTA6IDB4NEZBMCxcbiAgICAweDhCQTE6IDB4NTBEMSxcbiAgICAweDhCQTI6IDB4NTE0NyxcbiAgICAweDhCQTM6IDB4N0FGNixcbiAgICAweDhCQTQ6IDB4NTE3MSxcbiAgICAweDhCQTU6IDB4NTFGNixcbiAgICAweDhCQTY6IDB4NTM1NCxcbiAgICAweDhCQTc6IDB4NTMyMSxcbiAgICAweDhCQTg6IDB4NTM3RixcbiAgICAweDhCQTk6IDB4NTNFQixcbiAgICAweDhCQUE6IDB4NTVBQyxcbiAgICAweDhCQUI6IDB4NTg4MyxcbiAgICAweDhCQUM6IDB4NUNFMSxcbiAgICAweDhCQUQ6IDB4NUYzNyxcbiAgICAweDhCQUU6IDB4NUY0QSxcbiAgICAweDhCQUY6IDB4NjAyRixcbiAgICAweDhCQjA6IDB4NjA1MCxcbiAgICAweDhCQjE6IDB4NjA2RCxcbiAgICAweDhCQjI6IDB4NjMxRixcbiAgICAweDhCQjM6IDB4NjU1OSxcbiAgICAweDhCQjQ6IDB4NkE0QixcbiAgICAweDhCQjU6IDB4NkNDMSxcbiAgICAweDhCQjY6IDB4NzJDMixcbiAgICAweDhCQjc6IDB4NzJFRCxcbiAgICAweDhCQjg6IDB4NzdFRixcbiAgICAweDhCQjk6IDB4ODBGOCxcbiAgICAweDhCQkE6IDB4ODEwNSxcbiAgICAweDhCQkI6IDB4ODIwOCxcbiAgICAweDhCQkM6IDB4ODU0RSxcbiAgICAweDhCQkQ6IDB4OTBGNyxcbiAgICAweDhCQkU6IDB4OTNFMSxcbiAgICAweDhCQkY6IDB4OTdGRixcbiAgICAweDhCQzA6IDB4OTk1NyxcbiAgICAweDhCQzE6IDB4OUE1QSxcbiAgICAweDhCQzI6IDB4NEVGMCxcbiAgICAweDhCQzM6IDB4NTFERCxcbiAgICAweDhCQzQ6IDB4NUMyRCxcbiAgICAweDhCQzU6IDB4NjY4MSxcbiAgICAweDhCQzY6IDB4Njk2RCxcbiAgICAweDhCQzc6IDB4NUM0MCxcbiAgICAweDhCQzg6IDB4NjZGMixcbiAgICAweDhCQzk6IDB4Njk3NSxcbiAgICAweDhCQ0E6IDB4NzM4OSxcbiAgICAweDhCQ0I6IDB4Njg1MCxcbiAgICAweDhCQ0M6IDB4N0M4MSxcbiAgICAweDhCQ0Q6IDB4NTBDNSxcbiAgICAweDhCQ0U6IDB4NTJFNCxcbiAgICAweDhCQ0Y6IDB4NTc0NyxcbiAgICAweDhCRDA6IDB4NURGRSxcbiAgICAweDhCRDE6IDB4OTMyNixcbiAgICAweDhCRDI6IDB4NjVBNCxcbiAgICAweDhCRDM6IDB4NkIyMyxcbiAgICAweDhCRDQ6IDB4NkIzRCxcbiAgICAweDhCRDU6IDB4NzQzNCxcbiAgICAweDhCRDY6IDB4Nzk4MSxcbiAgICAweDhCRDc6IDB4NzlCRCxcbiAgICAweDhCRDg6IDB4N0I0QixcbiAgICAweDhCRDk6IDB4N0RDQSxcbiAgICAweDhCREE6IDB4ODJCOSxcbiAgICAweDhCREI6IDB4ODNDQyxcbiAgICAweDhCREM6IDB4ODg3RixcbiAgICAweDhCREQ6IDB4ODk1RixcbiAgICAweDhCREU6IDB4OEIzOSxcbiAgICAweDhCREY6IDB4OEZEMSxcbiAgICAweDhCRTA6IDB4OTFEMSxcbiAgICAweDhCRTE6IDB4NTQxRixcbiAgICAweDhCRTI6IDB4OTI4MCxcbiAgICAweDhCRTM6IDB4NEU1RCxcbiAgICAweDhCRTQ6IDB4NTAzNixcbiAgICAweDhCRTU6IDB4NTNFNSxcbiAgICAweDhCRTY6IDB4NTMzQSxcbiAgICAweDhCRTc6IDB4NzJENyxcbiAgICAweDhCRTg6IDB4NzM5NixcbiAgICAweDhCRTk6IDB4NzdFOSxcbiAgICAweDhCRUE6IDB4ODJFNixcbiAgICAweDhCRUI6IDB4OEVBRixcbiAgICAweDhCRUM6IDB4OTlDNixcbiAgICAweDhCRUQ6IDB4OTlDOCxcbiAgICAweDhCRUU6IDB4OTlEMixcbiAgICAweDhCRUY6IDB4NTE3NyxcbiAgICAweDhCRjA6IDB4NjExQSxcbiAgICAweDhCRjE6IDB4ODY1RSxcbiAgICAweDhCRjI6IDB4NTVCMCxcbiAgICAweDhCRjM6IDB4N0E3QSxcbiAgICAweDhCRjQ6IDB4NTA3NixcbiAgICAweDhCRjU6IDB4NUJEMyxcbiAgICAweDhCRjY6IDB4OTA0NyxcbiAgICAweDhCRjc6IDB4OTY4NSxcbiAgICAweDhCRjg6IDB4NEUzMixcbiAgICAweDhCRjk6IDB4NkFEQixcbiAgICAweDhCRkE6IDB4OTFFNyxcbiAgICAweDhCRkI6IDB4NUM1MSxcbiAgICAweDhCRkM6IDB4NUM0OCxcbiAgICAweDhDNDA6IDB4NjM5OCxcbiAgICAweDhDNDE6IDB4N0E5RixcbiAgICAweDhDNDI6IDB4NkM5MyxcbiAgICAweDhDNDM6IDB4OTc3NCxcbiAgICAweDhDNDQ6IDB4OEY2MSxcbiAgICAweDhDNDU6IDB4N0FBQSxcbiAgICAweDhDNDY6IDB4NzE4QSxcbiAgICAweDhDNDc6IDB4OTY4OCxcbiAgICAweDhDNDg6IDB4N0M4MixcbiAgICAweDhDNDk6IDB4NjgxNyxcbiAgICAweDhDNEE6IDB4N0U3MCxcbiAgICAweDhDNEI6IDB4Njg1MSxcbiAgICAweDhDNEM6IDB4OTM2QyxcbiAgICAweDhDNEQ6IDB4NTJGMixcbiAgICAweDhDNEU6IDB4NTQxQixcbiAgICAweDhDNEY6IDB4ODVBQixcbiAgICAweDhDNTA6IDB4OEExMyxcbiAgICAweDhDNTE6IDB4N0ZBNCxcbiAgICAweDhDNTI6IDB4OEVDRCxcbiAgICAweDhDNTM6IDB4OTBFMSxcbiAgICAweDhDNTQ6IDB4NTM2NixcbiAgICAweDhDNTU6IDB4ODg4OCxcbiAgICAweDhDNTY6IDB4Nzk0MSxcbiAgICAweDhDNTc6IDB4NEZDMixcbiAgICAweDhDNTg6IDB4NTBCRSxcbiAgICAweDhDNTk6IDB4NTIxMSxcbiAgICAweDhDNUE6IDB4NTE0NCxcbiAgICAweDhDNUI6IDB4NTU1MyxcbiAgICAweDhDNUM6IDB4NTcyRCxcbiAgICAweDhDNUQ6IDB4NzNFQSxcbiAgICAweDhDNUU6IDB4NTc4QixcbiAgICAweDhDNUY6IDB4NTk1MSxcbiAgICAweDhDNjA6IDB4NUY2MixcbiAgICAweDhDNjE6IDB4NUY4NCxcbiAgICAweDhDNjI6IDB4NjA3NSxcbiAgICAweDhDNjM6IDB4NjE3NixcbiAgICAweDhDNjQ6IDB4NjE2NyxcbiAgICAweDhDNjU6IDB4NjFBOSxcbiAgICAweDhDNjY6IDB4NjNCMixcbiAgICAweDhDNjc6IDB4NjQzQSxcbiAgICAweDhDNjg6IDB4NjU2QyxcbiAgICAweDhDNjk6IDB4NjY2RixcbiAgICAweDhDNkE6IDB4Njg0MixcbiAgICAweDhDNkI6IDB4NkUxMyxcbiAgICAweDhDNkM6IDB4NzU2NixcbiAgICAweDhDNkQ6IDB4N0EzRCxcbiAgICAweDhDNkU6IDB4N0NGQixcbiAgICAweDhDNkY6IDB4N0Q0QyxcbiAgICAweDhDNzA6IDB4N0Q5OSxcbiAgICAweDhDNzE6IDB4N0U0QixcbiAgICAweDhDNzI6IDB4N0Y2QixcbiAgICAweDhDNzM6IDB4ODMwRSxcbiAgICAweDhDNzQ6IDB4ODM0QSxcbiAgICAweDhDNzU6IDB4ODZDRCxcbiAgICAweDhDNzY6IDB4OEEwOCxcbiAgICAweDhDNzc6IDB4OEE2MyxcbiAgICAweDhDNzg6IDB4OEI2NixcbiAgICAweDhDNzk6IDB4OEVGRCxcbiAgICAweDhDN0E6IDB4OTgxQSxcbiAgICAweDhDN0I6IDB4OUQ4RixcbiAgICAweDhDN0M6IDB4ODJCOCxcbiAgICAweDhDN0Q6IDB4OEZDRSxcbiAgICAweDhDN0U6IDB4OUJFOCxcbiAgICAweDhDODA6IDB4NTI4NyxcbiAgICAweDhDODE6IDB4NjIxRixcbiAgICAweDhDODI6IDB4NjQ4MyxcbiAgICAweDhDODM6IDB4NkZDMCxcbiAgICAweDhDODQ6IDB4OTY5OSxcbiAgICAweDhDODU6IDB4Njg0MSxcbiAgICAweDhDODY6IDB4NTA5MSxcbiAgICAweDhDODc6IDB4NkIyMCxcbiAgICAweDhDODg6IDB4NkM3QSxcbiAgICAweDhDODk6IDB4NkY1NCxcbiAgICAweDhDOEE6IDB4N0E3NCxcbiAgICAweDhDOEI6IDB4N0Q1MCxcbiAgICAweDhDOEM6IDB4ODg0MCxcbiAgICAweDhDOEQ6IDB4OEEyMyxcbiAgICAweDhDOEU6IDB4NjcwOCxcbiAgICAweDhDOEY6IDB4NEVGNixcbiAgICAweDhDOTA6IDB4NTAzOSxcbiAgICAweDhDOTE6IDB4NTAyNixcbiAgICAweDhDOTI6IDB4NTA2NSxcbiAgICAweDhDOTM6IDB4NTE3QyxcbiAgICAweDhDOTQ6IDB4NTIzOCxcbiAgICAweDhDOTU6IDB4NTI2MyxcbiAgICAweDhDOTY6IDB4NTVBNyxcbiAgICAweDhDOTc6IDB4NTcwRixcbiAgICAweDhDOTg6IDB4NTgwNSxcbiAgICAweDhDOTk6IDB4NUFDQyxcbiAgICAweDhDOUE6IDB4NUVGQSxcbiAgICAweDhDOUI6IDB4NjFCMixcbiAgICAweDhDOUM6IDB4NjFGOCxcbiAgICAweDhDOUQ6IDB4NjJGMyxcbiAgICAweDhDOUU6IDB4NjM3MixcbiAgICAweDhDOUY6IDB4NjkxQyxcbiAgICAweDhDQTA6IDB4NkEyOSxcbiAgICAweDhDQTE6IDB4NzI3RCxcbiAgICAweDhDQTI6IDB4NzJBQyxcbiAgICAweDhDQTM6IDB4NzMyRSxcbiAgICAweDhDQTQ6IDB4NzgxNCxcbiAgICAweDhDQTU6IDB4Nzg2RixcbiAgICAweDhDQTY6IDB4N0Q3OSxcbiAgICAweDhDQTc6IDB4NzcwQyxcbiAgICAweDhDQTg6IDB4ODBBOSxcbiAgICAweDhDQTk6IDB4ODk4QixcbiAgICAweDhDQUE6IDB4OEIxOSxcbiAgICAweDhDQUI6IDB4OENFMixcbiAgICAweDhDQUM6IDB4OEVEMixcbiAgICAweDhDQUQ6IDB4OTA2MyxcbiAgICAweDhDQUU6IDB4OTM3NSxcbiAgICAweDhDQUY6IDB4OTY3QSxcbiAgICAweDhDQjA6IDB4OTg1NSxcbiAgICAweDhDQjE6IDB4OUExMyxcbiAgICAweDhDQjI6IDB4OUU3OCxcbiAgICAweDhDQjM6IDB4NTE0MyxcbiAgICAweDhDQjQ6IDB4NTM5RixcbiAgICAweDhDQjU6IDB4NTNCMyxcbiAgICAweDhDQjY6IDB4NUU3QixcbiAgICAweDhDQjc6IDB4NUYyNixcbiAgICAweDhDQjg6IDB4NkUxQixcbiAgICAweDhDQjk6IDB4NkU5MCxcbiAgICAweDhDQkE6IDB4NzM4NCxcbiAgICAweDhDQkI6IDB4NzNGRSxcbiAgICAweDhDQkM6IDB4N0Q0MyxcbiAgICAweDhDQkQ6IDB4ODIzNyxcbiAgICAweDhDQkU6IDB4OEEwMCxcbiAgICAweDhDQkY6IDB4OEFGQSxcbiAgICAweDhDQzA6IDB4OTY1MCxcbiAgICAweDhDQzE6IDB4NEU0RSxcbiAgICAweDhDQzI6IDB4NTAwQixcbiAgICAweDhDQzM6IDB4NTNFNCxcbiAgICAweDhDQzQ6IDB4NTQ3QyxcbiAgICAweDhDQzU6IDB4NTZGQSxcbiAgICAweDhDQzY6IDB4NTlEMSxcbiAgICAweDhDQzc6IDB4NUI2NCxcbiAgICAweDhDQzg6IDB4NURGMSxcbiAgICAweDhDQzk6IDB4NUVBQixcbiAgICAweDhDQ0E6IDB4NUYyNyxcbiAgICAweDhDQ0I6IDB4NjIzOCxcbiAgICAweDhDQ0M6IDB4NjU0NSxcbiAgICAweDhDQ0Q6IDB4NjdBRixcbiAgICAweDhDQ0U6IDB4NkU1NixcbiAgICAweDhDQ0Y6IDB4NzJEMCxcbiAgICAweDhDRDA6IDB4N0NDQSxcbiAgICAweDhDRDE6IDB4ODhCNCxcbiAgICAweDhDRDI6IDB4ODBBMSxcbiAgICAweDhDRDM6IDB4ODBFMSxcbiAgICAweDhDRDQ6IDB4ODNGMCxcbiAgICAweDhDRDU6IDB4ODY0RSxcbiAgICAweDhDRDY6IDB4OEE4NyxcbiAgICAweDhDRDc6IDB4OERFOCxcbiAgICAweDhDRDg6IDB4OTIzNyxcbiAgICAweDhDRDk6IDB4OTZDNyxcbiAgICAweDhDREE6IDB4OTg2NyxcbiAgICAweDhDREI6IDB4OUYxMyxcbiAgICAweDhDREM6IDB4NEU5NCxcbiAgICAweDhDREQ6IDB4NEU5MixcbiAgICAweDhDREU6IDB4NEYwRCxcbiAgICAweDhDREY6IDB4NTM0OCxcbiAgICAweDhDRTA6IDB4NTQ0OSxcbiAgICAweDhDRTE6IDB4NTQzRSxcbiAgICAweDhDRTI6IDB4NUEyRixcbiAgICAweDhDRTM6IDB4NUY4QyxcbiAgICAweDhDRTQ6IDB4NUZBMSxcbiAgICAweDhDRTU6IDB4NjA5RixcbiAgICAweDhDRTY6IDB4NjhBNyxcbiAgICAweDhDRTc6IDB4NkE4RSxcbiAgICAweDhDRTg6IDB4NzQ1QSxcbiAgICAweDhDRTk6IDB4Nzg4MSxcbiAgICAweDhDRUE6IDB4OEE5RSxcbiAgICAweDhDRUI6IDB4OEFBNCxcbiAgICAweDhDRUM6IDB4OEI3NyxcbiAgICAweDhDRUQ6IDB4OTE5MCxcbiAgICAweDhDRUU6IDB4NEU1RSxcbiAgICAweDhDRUY6IDB4OUJDOSxcbiAgICAweDhDRjA6IDB4NEVBNCxcbiAgICAweDhDRjE6IDB4NEY3QyxcbiAgICAweDhDRjI6IDB4NEZBRixcbiAgICAweDhDRjM6IDB4NTAxOSxcbiAgICAweDhDRjQ6IDB4NTAxNixcbiAgICAweDhDRjU6IDB4NTE0OSxcbiAgICAweDhDRjY6IDB4NTE2QyxcbiAgICAweDhDRjc6IDB4NTI5RixcbiAgICAweDhDRjg6IDB4NTJCOSxcbiAgICAweDhDRjk6IDB4NTJGRSxcbiAgICAweDhDRkE6IDB4NTM5QSxcbiAgICAweDhDRkI6IDB4NTNFMyxcbiAgICAweDhDRkM6IDB4NTQxMSxcbiAgICAweDhENDA6IDB4NTQwRSxcbiAgICAweDhENDE6IDB4NTU4OSxcbiAgICAweDhENDI6IDB4NTc1MSxcbiAgICAweDhENDM6IDB4NTdBMixcbiAgICAweDhENDQ6IDB4NTk3RCxcbiAgICAweDhENDU6IDB4NUI1NCxcbiAgICAweDhENDY6IDB4NUI1RCxcbiAgICAweDhENDc6IDB4NUI4RixcbiAgICAweDhENDg6IDB4NURFNSxcbiAgICAweDhENDk6IDB4NURFNyxcbiAgICAweDhENEE6IDB4NURGNyxcbiAgICAweDhENEI6IDB4NUU3OCxcbiAgICAweDhENEM6IDB4NUU4MyxcbiAgICAweDhENEQ6IDB4NUU5QSxcbiAgICAweDhENEU6IDB4NUVCNyxcbiAgICAweDhENEY6IDB4NUYxOCxcbiAgICAweDhENTA6IDB4NjA1MixcbiAgICAweDhENTE6IDB4NjE0QyxcbiAgICAweDhENTI6IDB4NjI5NyxcbiAgICAweDhENTM6IDB4NjJEOCxcbiAgICAweDhENTQ6IDB4NjNBNyxcbiAgICAweDhENTU6IDB4NjUzQixcbiAgICAweDhENTY6IDB4NjYwMixcbiAgICAweDhENTc6IDB4NjY0MyxcbiAgICAweDhENTg6IDB4NjZGNCxcbiAgICAweDhENTk6IDB4Njc2RCxcbiAgICAweDhENUE6IDB4NjgyMSxcbiAgICAweDhENUI6IDB4Njg5NyxcbiAgICAweDhENUM6IDB4NjlDQixcbiAgICAweDhENUQ6IDB4NkM1RixcbiAgICAweDhENUU6IDB4NkQyQSxcbiAgICAweDhENUY6IDB4NkQ2OSxcbiAgICAweDhENjA6IDB4NkUyRixcbiAgICAweDhENjE6IDB4NkU5RCxcbiAgICAweDhENjI6IDB4NzUzMixcbiAgICAweDhENjM6IDB4NzY4NyxcbiAgICAweDhENjQ6IDB4Nzg2QyxcbiAgICAweDhENjU6IDB4N0EzRixcbiAgICAweDhENjY6IDB4N0NFMCxcbiAgICAweDhENjc6IDB4N0QwNSxcbiAgICAweDhENjg6IDB4N0QxOCxcbiAgICAweDhENjk6IDB4N0Q1RSxcbiAgICAweDhENkE6IDB4N0RCMSxcbiAgICAweDhENkI6IDB4ODAxNSxcbiAgICAweDhENkM6IDB4ODAwMyxcbiAgICAweDhENkQ6IDB4ODBBRixcbiAgICAweDhENkU6IDB4ODBCMSxcbiAgICAweDhENkY6IDB4ODE1NCxcbiAgICAweDhENzA6IDB4ODE4RixcbiAgICAweDhENzE6IDB4ODIyQSxcbiAgICAweDhENzI6IDB4ODM1MixcbiAgICAweDhENzM6IDB4ODg0QyxcbiAgICAweDhENzQ6IDB4ODg2MSxcbiAgICAweDhENzU6IDB4OEIxQixcbiAgICAweDhENzY6IDB4OENBMixcbiAgICAweDhENzc6IDB4OENGQyxcbiAgICAweDhENzg6IDB4OTBDQSxcbiAgICAweDhENzk6IDB4OTE3NSxcbiAgICAweDhEN0E6IDB4OTI3MSxcbiAgICAweDhEN0I6IDB4NzgzRixcbiAgICAweDhEN0M6IDB4OTJGQyxcbiAgICAweDhEN0Q6IDB4OTVBNCxcbiAgICAweDhEN0U6IDB4OTY0RCxcbiAgICAweDhEODA6IDB4OTgwNSxcbiAgICAweDhEODE6IDB4OTk5OSxcbiAgICAweDhEODI6IDB4OUFEOCxcbiAgICAweDhEODM6IDB4OUQzQixcbiAgICAweDhEODQ6IDB4NTI1QixcbiAgICAweDhEODU6IDB4NTJBQixcbiAgICAweDhEODY6IDB4NTNGNyxcbiAgICAweDhEODc6IDB4NTQwOCxcbiAgICAweDhEODg6IDB4NThENSxcbiAgICAweDhEODk6IDB4NjJGNyxcbiAgICAweDhEOEE6IDB4NkZFMCxcbiAgICAweDhEOEI6IDB4OEM2QSxcbiAgICAweDhEOEM6IDB4OEY1RixcbiAgICAweDhEOEQ6IDB4OUVCOSxcbiAgICAweDhEOEU6IDB4NTE0QixcbiAgICAweDhEOEY6IDB4NTIzQixcbiAgICAweDhEOTA6IDB4NTQ0QSxcbiAgICAweDhEOTE6IDB4NTZGRCxcbiAgICAweDhEOTI6IDB4N0E0MCxcbiAgICAweDhEOTM6IDB4OTE3NyxcbiAgICAweDhEOTQ6IDB4OUQ2MCxcbiAgICAweDhEOTU6IDB4OUVEMixcbiAgICAweDhEOTY6IDB4NzM0NCxcbiAgICAweDhEOTc6IDB4NkYwOSxcbiAgICAweDhEOTg6IDB4ODE3MCxcbiAgICAweDhEOTk6IDB4NzUxMSxcbiAgICAweDhEOUE6IDB4NUZGRCxcbiAgICAweDhEOUI6IDB4NjBEQSxcbiAgICAweDhEOUM6IDB4OUFBOCxcbiAgICAweDhEOUQ6IDB4NzJEQixcbiAgICAweDhEOUU6IDB4OEZCQyxcbiAgICAweDhEOUY6IDB4NkI2NCxcbiAgICAweDhEQTA6IDB4OTgwMyxcbiAgICAweDhEQTE6IDB4NEVDQSxcbiAgICAweDhEQTI6IDB4NTZGMCxcbiAgICAweDhEQTM6IDB4NTc2NCxcbiAgICAweDhEQTQ6IDB4NThCRSxcbiAgICAweDhEQTU6IDB4NUE1QSxcbiAgICAweDhEQTY6IDB4NjA2OCxcbiAgICAweDhEQTc6IDB4NjFDNyxcbiAgICAweDhEQTg6IDB4NjYwRixcbiAgICAweDhEQTk6IDB4NjYwNixcbiAgICAweDhEQUE6IDB4NjgzOSxcbiAgICAweDhEQUI6IDB4NjhCMSxcbiAgICAweDhEQUM6IDB4NkRGNyxcbiAgICAweDhEQUQ6IDB4NzVENSxcbiAgICAweDhEQUU6IDB4N0QzQSxcbiAgICAweDhEQUY6IDB4ODI2RSxcbiAgICAweDhEQjA6IDB4OUI0MixcbiAgICAweDhEQjE6IDB4NEU5QixcbiAgICAweDhEQjI6IDB4NEY1MCxcbiAgICAweDhEQjM6IDB4NTNDOSxcbiAgICAweDhEQjQ6IDB4NTUwNixcbiAgICAweDhEQjU6IDB4NUQ2RixcbiAgICAweDhEQjY6IDB4NURFNixcbiAgICAweDhEQjc6IDB4NURFRSxcbiAgICAweDhEQjg6IDB4NjdGQixcbiAgICAweDhEQjk6IDB4NkM5OSxcbiAgICAweDhEQkE6IDB4NzQ3MyxcbiAgICAweDhEQkI6IDB4NzgwMixcbiAgICAweDhEQkM6IDB4OEE1MCxcbiAgICAweDhEQkQ6IDB4OTM5NixcbiAgICAweDhEQkU6IDB4ODhERixcbiAgICAweDhEQkY6IDB4NTc1MCxcbiAgICAweDhEQzA6IDB4NUVBNyxcbiAgICAweDhEQzE6IDB4NjMyQixcbiAgICAweDhEQzI6IDB4NTBCNSxcbiAgICAweDhEQzM6IDB4NTBBQyxcbiAgICAweDhEQzQ6IDB4NTE4RCxcbiAgICAweDhEQzU6IDB4NjcwMCxcbiAgICAweDhEQzY6IDB4NTRDOSxcbiAgICAweDhEQzc6IDB4NTg1RSxcbiAgICAweDhEQzg6IDB4NTlCQixcbiAgICAweDhEQzk6IDB4NUJCMCxcbiAgICAweDhEQ0E6IDB4NUY2OSxcbiAgICAweDhEQ0I6IDB4NjI0RCxcbiAgICAweDhEQ0M6IDB4NjNBMSxcbiAgICAweDhEQ0Q6IDB4NjgzRCxcbiAgICAweDhEQ0U6IDB4NkI3MyxcbiAgICAweDhEQ0Y6IDB4NkUwOCxcbiAgICAweDhERDA6IDB4NzA3RCxcbiAgICAweDhERDE6IDB4OTFDNyxcbiAgICAweDhERDI6IDB4NzI4MCxcbiAgICAweDhERDM6IDB4NzgxNSxcbiAgICAweDhERDQ6IDB4NzgyNixcbiAgICAweDhERDU6IDB4Nzk2RCxcbiAgICAweDhERDY6IDB4NjU4RSxcbiAgICAweDhERDc6IDB4N0QzMCxcbiAgICAweDhERDg6IDB4ODNEQyxcbiAgICAweDhERDk6IDB4ODhDMSxcbiAgICAweDhEREE6IDB4OEYwOSxcbiAgICAweDhEREI6IDB4OTY5QixcbiAgICAweDhEREM6IDB4NTI2NCxcbiAgICAweDhEREQ6IDB4NTcyOCxcbiAgICAweDhEREU6IDB4Njc1MCxcbiAgICAweDhEREY6IDB4N0Y2QSxcbiAgICAweDhERTA6IDB4OENBMSxcbiAgICAweDhERTE6IDB4NTFCNCxcbiAgICAweDhERTI6IDB4NTc0MixcbiAgICAweDhERTM6IDB4OTYyQSxcbiAgICAweDhERTQ6IDB4NTgzQSxcbiAgICAweDhERTU6IDB4Njk4QSxcbiAgICAweDhERTY6IDB4ODBCNCxcbiAgICAweDhERTc6IDB4NTRCMixcbiAgICAweDhERTg6IDB4NUQwRSxcbiAgICAweDhERTk6IDB4NTdGQyxcbiAgICAweDhERUE6IDB4Nzg5NSxcbiAgICAweDhERUI6IDB4OURGQSxcbiAgICAweDhERUM6IDB4NEY1QyxcbiAgICAweDhERUQ6IDB4NTI0QSxcbiAgICAweDhERUU6IDB4NTQ4QixcbiAgICAweDhERUY6IDB4NjQzRSxcbiAgICAweDhERjA6IDB4NjYyOCxcbiAgICAweDhERjE6IDB4NjcxNCxcbiAgICAweDhERjI6IDB4NjdGNSxcbiAgICAweDhERjM6IDB4N0E4NCxcbiAgICAweDhERjQ6IDB4N0I1NixcbiAgICAweDhERjU6IDB4N0QyMixcbiAgICAweDhERjY6IDB4OTMyRixcbiAgICAweDhERjc6IDB4Njg1QyxcbiAgICAweDhERjg6IDB4OUJBRCxcbiAgICAweDhERjk6IDB4N0IzOSxcbiAgICAweDhERkE6IDB4NTMxOSxcbiAgICAweDhERkI6IDB4NTE4QSxcbiAgICAweDhERkM6IDB4NTIzNyxcbiAgICAweDhFNDA6IDB4NUJERixcbiAgICAweDhFNDE6IDB4NjJGNixcbiAgICAweDhFNDI6IDB4NjRBRSxcbiAgICAweDhFNDM6IDB4NjRFNixcbiAgICAweDhFNDQ6IDB4NjcyRCxcbiAgICAweDhFNDU6IDB4NkJCQSxcbiAgICAweDhFNDY6IDB4ODVBOSxcbiAgICAweDhFNDc6IDB4OTZEMSxcbiAgICAweDhFNDg6IDB4NzY5MCxcbiAgICAweDhFNDk6IDB4OUJENixcbiAgICAweDhFNEE6IDB4NjM0QyxcbiAgICAweDhFNEI6IDB4OTMwNixcbiAgICAweDhFNEM6IDB4OUJBQixcbiAgICAweDhFNEQ6IDB4NzZCRixcbiAgICAweDhFNEU6IDB4NjY1MixcbiAgICAweDhFNEY6IDB4NEUwOSxcbiAgICAweDhFNTA6IDB4NTA5OCxcbiAgICAweDhFNTE6IDB4NTNDMixcbiAgICAweDhFNTI6IDB4NUM3MSxcbiAgICAweDhFNTM6IDB4NjBFOCxcbiAgICAweDhFNTQ6IDB4NjQ5MixcbiAgICAweDhFNTU6IDB4NjU2MyxcbiAgICAweDhFNTY6IDB4Njg1RixcbiAgICAweDhFNTc6IDB4NzFFNixcbiAgICAweDhFNTg6IDB4NzNDQSxcbiAgICAweDhFNTk6IDB4NzUyMyxcbiAgICAweDhFNUE6IDB4N0I5NyxcbiAgICAweDhFNUI6IDB4N0U4MixcbiAgICAweDhFNUM6IDB4ODY5NSxcbiAgICAweDhFNUQ6IDB4OEI4MyxcbiAgICAweDhFNUU6IDB4OENEQixcbiAgICAweDhFNUY6IDB4OTE3OCxcbiAgICAweDhFNjA6IDB4OTkxMCxcbiAgICAweDhFNjE6IDB4NjVBQyxcbiAgICAweDhFNjI6IDB4NjZBQixcbiAgICAweDhFNjM6IDB4NkI4QixcbiAgICAweDhFNjQ6IDB4NEVENSxcbiAgICAweDhFNjU6IDB4NEVENCxcbiAgICAweDhFNjY6IDB4NEYzQSxcbiAgICAweDhFNjc6IDB4NEY3RixcbiAgICAweDhFNjg6IDB4NTIzQSxcbiAgICAweDhFNjk6IDB4NTNGOCxcbiAgICAweDhFNkE6IDB4NTNGMixcbiAgICAweDhFNkI6IDB4NTVFMyxcbiAgICAweDhFNkM6IDB4NTZEQixcbiAgICAweDhFNkQ6IDB4NThFQixcbiAgICAweDhFNkU6IDB4NTlDQixcbiAgICAweDhFNkY6IDB4NTlDOSxcbiAgICAweDhFNzA6IDB4NTlGRixcbiAgICAweDhFNzE6IDB4NUI1MCxcbiAgICAweDhFNzI6IDB4NUM0RCxcbiAgICAweDhFNzM6IDB4NUUwMixcbiAgICAweDhFNzQ6IDB4NUUyQixcbiAgICAweDhFNzU6IDB4NUZENyxcbiAgICAweDhFNzY6IDB4NjAxRCxcbiAgICAweDhFNzc6IDB4NjMwNyxcbiAgICAweDhFNzg6IDB4NjUyRixcbiAgICAweDhFNzk6IDB4NUI1QyxcbiAgICAweDhFN0E6IDB4NjVBRixcbiAgICAweDhFN0I6IDB4NjVCRCxcbiAgICAweDhFN0M6IDB4NjVFOCxcbiAgICAweDhFN0Q6IDB4Njc5RCxcbiAgICAweDhFN0U6IDB4NkI2MixcbiAgICAweDhFODA6IDB4NkI3QixcbiAgICAweDhFODE6IDB4NkMwRixcbiAgICAweDhFODI6IDB4NzM0NSxcbiAgICAweDhFODM6IDB4Nzk0OSxcbiAgICAweDhFODQ6IDB4NzlDMSxcbiAgICAweDhFODU6IDB4N0NGOCxcbiAgICAweDhFODY6IDB4N0QxOSxcbiAgICAweDhFODc6IDB4N0QyQixcbiAgICAweDhFODg6IDB4ODBBMixcbiAgICAweDhFODk6IDB4ODEwMixcbiAgICAweDhFOEE6IDB4ODFGMyxcbiAgICAweDhFOEI6IDB4ODk5NixcbiAgICAweDhFOEM6IDB4OEE1RSxcbiAgICAweDhFOEQ6IDB4OEE2OSxcbiAgICAweDhFOEU6IDB4OEE2NixcbiAgICAweDhFOEY6IDB4OEE4QyxcbiAgICAweDhFOTA6IDB4OEFFRSxcbiAgICAweDhFOTE6IDB4OENDNyxcbiAgICAweDhFOTI6IDB4OENEQyxcbiAgICAweDhFOTM6IDB4OTZDQyxcbiAgICAweDhFOTQ6IDB4OThGQyxcbiAgICAweDhFOTU6IDB4NkI2RixcbiAgICAweDhFOTY6IDB4NEU4QixcbiAgICAweDhFOTc6IDB4NEYzQyxcbiAgICAweDhFOTg6IDB4NEY4RCxcbiAgICAweDhFOTk6IDB4NTE1MCxcbiAgICAweDhFOUE6IDB4NUI1NyxcbiAgICAweDhFOUI6IDB4NUJGQSxcbiAgICAweDhFOUM6IDB4NjE0OCxcbiAgICAweDhFOUQ6IDB4NjMwMSxcbiAgICAweDhFOUU6IDB4NjY0MixcbiAgICAweDhFOUY6IDB4NkIyMSxcbiAgICAweDhFQTA6IDB4NkVDQixcbiAgICAweDhFQTE6IDB4NkNCQixcbiAgICAweDhFQTI6IDB4NzIzRSxcbiAgICAweDhFQTM6IDB4NzRCRCxcbiAgICAweDhFQTQ6IDB4NzVENCxcbiAgICAweDhFQTU6IDB4NzhDMSxcbiAgICAweDhFQTY6IDB4NzkzQSxcbiAgICAweDhFQTc6IDB4ODAwQyxcbiAgICAweDhFQTg6IDB4ODAzMyxcbiAgICAweDhFQTk6IDB4ODFFQSxcbiAgICAweDhFQUE6IDB4ODQ5NCxcbiAgICAweDhFQUI6IDB4OEY5RSxcbiAgICAweDhFQUM6IDB4NkM1MCxcbiAgICAweDhFQUQ6IDB4OUU3RixcbiAgICAweDhFQUU6IDB4NUYwRixcbiAgICAweDhFQUY6IDB4OEI1OCxcbiAgICAweDhFQjA6IDB4OUQyQixcbiAgICAweDhFQjE6IDB4N0FGQSxcbiAgICAweDhFQjI6IDB4OEVGOCxcbiAgICAweDhFQjM6IDB4NUI4RCxcbiAgICAweDhFQjQ6IDB4OTZFQixcbiAgICAweDhFQjU6IDB4NEUwMyxcbiAgICAweDhFQjY6IDB4NTNGMSxcbiAgICAweDhFQjc6IDB4NTdGNyxcbiAgICAweDhFQjg6IDB4NTkzMSxcbiAgICAweDhFQjk6IDB4NUFDOSxcbiAgICAweDhFQkE6IDB4NUJBNCxcbiAgICAweDhFQkI6IDB4NjA4OSxcbiAgICAweDhFQkM6IDB4NkU3RixcbiAgICAweDhFQkQ6IDB4NkYwNixcbiAgICAweDhFQkU6IDB4NzVCRSxcbiAgICAweDhFQkY6IDB4OENFQSxcbiAgICAweDhFQzA6IDB4NUI5RixcbiAgICAweDhFQzE6IDB4ODUwMCxcbiAgICAweDhFQzI6IDB4N0JFMCxcbiAgICAweDhFQzM6IDB4NTA3MixcbiAgICAweDhFQzQ6IDB4NjdGNCxcbiAgICAweDhFQzU6IDB4ODI5RCxcbiAgICAweDhFQzY6IDB4NUM2MSxcbiAgICAweDhFQzc6IDB4ODU0QSxcbiAgICAweDhFQzg6IDB4N0UxRSxcbiAgICAweDhFQzk6IDB4ODIwRSxcbiAgICAweDhFQ0E6IDB4NTE5OSxcbiAgICAweDhFQ0I6IDB4NUMwNCxcbiAgICAweDhFQ0M6IDB4NjM2OCxcbiAgICAweDhFQ0Q6IDB4OEQ2NixcbiAgICAweDhFQ0U6IDB4NjU5QyxcbiAgICAweDhFQ0Y6IDB4NzE2RSxcbiAgICAweDhFRDA6IDB4NzkzRSxcbiAgICAweDhFRDE6IDB4N0QxNyxcbiAgICAweDhFRDI6IDB4ODAwNSxcbiAgICAweDhFRDM6IDB4OEIxRCxcbiAgICAweDhFRDQ6IDB4OEVDQSxcbiAgICAweDhFRDU6IDB4OTA2RSxcbiAgICAweDhFRDY6IDB4ODZDNyxcbiAgICAweDhFRDc6IDB4OTBBQSxcbiAgICAweDhFRDg6IDB4NTAxRixcbiAgICAweDhFRDk6IDB4NTJGQSxcbiAgICAweDhFREE6IDB4NUMzQSxcbiAgICAweDhFREI6IDB4Njc1MyxcbiAgICAweDhFREM6IDB4NzA3QyxcbiAgICAweDhFREQ6IDB4NzIzNSxcbiAgICAweDhFREU6IDB4OTE0QyxcbiAgICAweDhFREY6IDB4OTFDOCxcbiAgICAweDhFRTA6IDB4OTMyQixcbiAgICAweDhFRTE6IDB4ODJFNSxcbiAgICAweDhFRTI6IDB4NUJDMixcbiAgICAweDhFRTM6IDB4NUYzMSxcbiAgICAweDhFRTQ6IDB4NjBGOSxcbiAgICAweDhFRTU6IDB4NEUzQixcbiAgICAweDhFRTY6IDB4NTNENixcbiAgICAweDhFRTc6IDB4NUI4OCxcbiAgICAweDhFRTg6IDB4NjI0QixcbiAgICAweDhFRTk6IDB4NjczMSxcbiAgICAweDhFRUE6IDB4NkI4QSxcbiAgICAweDhFRUI6IDB4NzJFOSxcbiAgICAweDhFRUM6IDB4NzNFMCxcbiAgICAweDhFRUQ6IDB4N0EyRSxcbiAgICAweDhFRUU6IDB4ODE2QixcbiAgICAweDhFRUY6IDB4OERBMyxcbiAgICAweDhFRjA6IDB4OTE1MixcbiAgICAweDhFRjE6IDB4OTk5NixcbiAgICAweDhFRjI6IDB4NTExMixcbiAgICAweDhFRjM6IDB4NTNENyxcbiAgICAweDhFRjQ6IDB4NTQ2QSxcbiAgICAweDhFRjU6IDB4NUJGRixcbiAgICAweDhFRjY6IDB4NjM4OCxcbiAgICAweDhFRjc6IDB4NkEzOSxcbiAgICAweDhFRjg6IDB4N0RBQyxcbiAgICAweDhFRjk6IDB4OTcwMCxcbiAgICAweDhFRkE6IDB4NTZEQSxcbiAgICAweDhFRkI6IDB4NTNDRSxcbiAgICAweDhFRkM6IDB4NTQ2OCxcbiAgICAweDhGNDA6IDB4NUI5NyxcbiAgICAweDhGNDE6IDB4NUMzMSxcbiAgICAweDhGNDI6IDB4NURERSxcbiAgICAweDhGNDM6IDB4NEZFRSxcbiAgICAweDhGNDQ6IDB4NjEwMSxcbiAgICAweDhGNDU6IDB4NjJGRSxcbiAgICAweDhGNDY6IDB4NkQzMixcbiAgICAweDhGNDc6IDB4NzlDMCxcbiAgICAweDhGNDg6IDB4NzlDQixcbiAgICAweDhGNDk6IDB4N0Q0MixcbiAgICAweDhGNEE6IDB4N0U0RCxcbiAgICAweDhGNEI6IDB4N0ZEMixcbiAgICAweDhGNEM6IDB4ODFFRCxcbiAgICAweDhGNEQ6IDB4ODIxRixcbiAgICAweDhGNEU6IDB4ODQ5MCxcbiAgICAweDhGNEY6IDB4ODg0NixcbiAgICAweDhGNTA6IDB4ODk3MixcbiAgICAweDhGNTE6IDB4OEI5MCxcbiAgICAweDhGNTI6IDB4OEU3NCxcbiAgICAweDhGNTM6IDB4OEYyRixcbiAgICAweDhGNTQ6IDB4OTAzMSxcbiAgICAweDhGNTU6IDB4OTE0QixcbiAgICAweDhGNTY6IDB4OTE2QyxcbiAgICAweDhGNTc6IDB4OTZDNixcbiAgICAweDhGNTg6IDB4OTE5QyxcbiAgICAweDhGNTk6IDB4NEVDMCxcbiAgICAweDhGNUE6IDB4NEY0RixcbiAgICAweDhGNUI6IDB4NTE0NSxcbiAgICAweDhGNUM6IDB4NTM0MSxcbiAgICAweDhGNUQ6IDB4NUY5MyxcbiAgICAweDhGNUU6IDB4NjIwRSxcbiAgICAweDhGNUY6IDB4NjdENCxcbiAgICAweDhGNjA6IDB4NkM0MSxcbiAgICAweDhGNjE6IDB4NkUwQixcbiAgICAweDhGNjI6IDB4NzM2MyxcbiAgICAweDhGNjM6IDB4N0UyNixcbiAgICAweDhGNjQ6IDB4OTFDRCxcbiAgICAweDhGNjU6IDB4OTI4MyxcbiAgICAweDhGNjY6IDB4NTNENCxcbiAgICAweDhGNjc6IDB4NTkxOSxcbiAgICAweDhGNjg6IDB4NUJCRixcbiAgICAweDhGNjk6IDB4NkREMSxcbiAgICAweDhGNkE6IDB4Nzk1RCxcbiAgICAweDhGNkI6IDB4N0UyRSxcbiAgICAweDhGNkM6IDB4N0M5QixcbiAgICAweDhGNkQ6IDB4NTg3RSxcbiAgICAweDhGNkU6IDB4NzE5RixcbiAgICAweDhGNkY6IDB4NTFGQSxcbiAgICAweDhGNzA6IDB4ODg1MyxcbiAgICAweDhGNzE6IDB4OEZGMCxcbiAgICAweDhGNzI6IDB4NEZDQSxcbiAgICAweDhGNzM6IDB4NUNGQixcbiAgICAweDhGNzQ6IDB4NjYyNSxcbiAgICAweDhGNzU6IDB4NzdBQyxcbiAgICAweDhGNzY6IDB4N0FFMyxcbiAgICAweDhGNzc6IDB4ODIxQyxcbiAgICAweDhGNzg6IDB4OTlGRixcbiAgICAweDhGNzk6IDB4NTFDNixcbiAgICAweDhGN0E6IDB4NUZBQSxcbiAgICAweDhGN0I6IDB4NjVFQyxcbiAgICAweDhGN0M6IDB4Njk2RixcbiAgICAweDhGN0Q6IDB4NkI4OSxcbiAgICAweDhGN0U6IDB4NkRGMyxcbiAgICAweDhGODA6IDB4NkU5NixcbiAgICAweDhGODE6IDB4NkY2NCxcbiAgICAweDhGODI6IDB4NzZGRSxcbiAgICAweDhGODM6IDB4N0QxNCxcbiAgICAweDhGODQ6IDB4NURFMSxcbiAgICAweDhGODU6IDB4OTA3NSxcbiAgICAweDhGODY6IDB4OTE4NyxcbiAgICAweDhGODc6IDB4OTgwNixcbiAgICAweDhGODg6IDB4NTFFNixcbiAgICAweDhGODk6IDB4NTIxRCxcbiAgICAweDhGOEE6IDB4NjI0MCxcbiAgICAweDhGOEI6IDB4NjY5MSxcbiAgICAweDhGOEM6IDB4NjZEOSxcbiAgICAweDhGOEQ6IDB4NkUxQSxcbiAgICAweDhGOEU6IDB4NUVCNixcbiAgICAweDhGOEY6IDB4N0REMixcbiAgICAweDhGOTA6IDB4N0Y3MixcbiAgICAweDhGOTE6IDB4NjZGOCxcbiAgICAweDhGOTI6IDB4ODVBRixcbiAgICAweDhGOTM6IDB4ODVGNyxcbiAgICAweDhGOTQ6IDB4OEFGOCxcbiAgICAweDhGOTU6IDB4NTJBOSxcbiAgICAweDhGOTY6IDB4NTNEOSxcbiAgICAweDhGOTc6IDB4NTk3MyxcbiAgICAweDhGOTg6IDB4NUU4RixcbiAgICAweDhGOTk6IDB4NUY5MCxcbiAgICAweDhGOUE6IDB4NjA1NSxcbiAgICAweDhGOUI6IDB4OTJFNCxcbiAgICAweDhGOUM6IDB4OTY2NCxcbiAgICAweDhGOUQ6IDB4NTBCNyxcbiAgICAweDhGOUU6IDB4NTExRixcbiAgICAweDhGOUY6IDB4NTJERCxcbiAgICAweDhGQTA6IDB4NTMyMCxcbiAgICAweDhGQTE6IDB4NTM0NyxcbiAgICAweDhGQTI6IDB4NTNFQyxcbiAgICAweDhGQTM6IDB4NTRFOCxcbiAgICAweDhGQTQ6IDB4NTU0NixcbiAgICAweDhGQTU6IDB4NTUzMSxcbiAgICAweDhGQTY6IDB4NTYxNyxcbiAgICAweDhGQTc6IDB4NTk2OCxcbiAgICAweDhGQTg6IDB4NTlCRSxcbiAgICAweDhGQTk6IDB4NUEzQyxcbiAgICAweDhGQUE6IDB4NUJCNSxcbiAgICAweDhGQUI6IDB4NUMwNixcbiAgICAweDhGQUM6IDB4NUMwRixcbiAgICAweDhGQUQ6IDB4NUMxMSxcbiAgICAweDhGQUU6IDB4NUMxQSxcbiAgICAweDhGQUY6IDB4NUU4NCxcbiAgICAweDhGQjA6IDB4NUU4QSxcbiAgICAweDhGQjE6IDB4NUVFMCxcbiAgICAweDhGQjI6IDB4NUY3MCxcbiAgICAweDhGQjM6IDB4NjI3RixcbiAgICAweDhGQjQ6IDB4NjI4NCxcbiAgICAweDhGQjU6IDB4NjJEQixcbiAgICAweDhGQjY6IDB4NjM4QyxcbiAgICAweDhGQjc6IDB4NjM3NyxcbiAgICAweDhGQjg6IDB4NjYwNyxcbiAgICAweDhGQjk6IDB4NjYwQyxcbiAgICAweDhGQkE6IDB4NjYyRCxcbiAgICAweDhGQkI6IDB4NjY3NixcbiAgICAweDhGQkM6IDB4Njc3RSxcbiAgICAweDhGQkQ6IDB4NjhBMixcbiAgICAweDhGQkU6IDB4NkExRixcbiAgICAweDhGQkY6IDB4NkEzNSxcbiAgICAweDhGQzA6IDB4NkNCQyxcbiAgICAweDhGQzE6IDB4NkQ4OCxcbiAgICAweDhGQzI6IDB4NkUwOSxcbiAgICAweDhGQzM6IDB4NkU1OCxcbiAgICAweDhGQzQ6IDB4NzEzQyxcbiAgICAweDhGQzU6IDB4NzEyNixcbiAgICAweDhGQzY6IDB4NzE2NyxcbiAgICAweDhGQzc6IDB4NzVDNyxcbiAgICAweDhGQzg6IDB4NzcwMSxcbiAgICAweDhGQzk6IDB4Nzg1RCxcbiAgICAweDhGQ0E6IDB4NzkwMSxcbiAgICAweDhGQ0I6IDB4Nzk2NSxcbiAgICAweDhGQ0M6IDB4NzlGMCxcbiAgICAweDhGQ0Q6IDB4N0FFMCxcbiAgICAweDhGQ0U6IDB4N0IxMSxcbiAgICAweDhGQ0Y6IDB4N0NBNyxcbiAgICAweDhGRDA6IDB4N0QzOSxcbiAgICAweDhGRDE6IDB4ODA5NixcbiAgICAweDhGRDI6IDB4ODNENixcbiAgICAweDhGRDM6IDB4ODQ4QixcbiAgICAweDhGRDQ6IDB4ODU0OSxcbiAgICAweDhGRDU6IDB4ODg1RCxcbiAgICAweDhGRDY6IDB4ODhGMyxcbiAgICAweDhGRDc6IDB4OEExRixcbiAgICAweDhGRDg6IDB4OEEzQyxcbiAgICAweDhGRDk6IDB4OEE1NCxcbiAgICAweDhGREE6IDB4OEE3MyxcbiAgICAweDhGREI6IDB4OEM2MSxcbiAgICAweDhGREM6IDB4OENERSxcbiAgICAweDhGREQ6IDB4OTFBNCxcbiAgICAweDhGREU6IDB4OTI2NixcbiAgICAweDhGREY6IDB4OTM3RSxcbiAgICAweDhGRTA6IDB4OTQxOCxcbiAgICAweDhGRTE6IDB4OTY5QyxcbiAgICAweDhGRTI6IDB4OTc5OCxcbiAgICAweDhGRTM6IDB4NEUwQSxcbiAgICAweDhGRTQ6IDB4NEUwOCxcbiAgICAweDhGRTU6IDB4NEUxRSxcbiAgICAweDhGRTY6IDB4NEU1NyxcbiAgICAweDhGRTc6IDB4NTE5NyxcbiAgICAweDhGRTg6IDB4NTI3MCxcbiAgICAweDhGRTk6IDB4NTdDRSxcbiAgICAweDhGRUE6IDB4NTgzNCxcbiAgICAweDhGRUI6IDB4NThDQyxcbiAgICAweDhGRUM6IDB4NUIyMixcbiAgICAweDhGRUQ6IDB4NUUzOCxcbiAgICAweDhGRUU6IDB4NjBDNSxcbiAgICAweDhGRUY6IDB4NjRGRSxcbiAgICAweDhGRjA6IDB4Njc2MSxcbiAgICAweDhGRjE6IDB4Njc1NixcbiAgICAweDhGRjI6IDB4NkQ0NCxcbiAgICAweDhGRjM6IDB4NzJCNixcbiAgICAweDhGRjQ6IDB4NzU3MyxcbiAgICAweDhGRjU6IDB4N0E2MyxcbiAgICAweDhGRjY6IDB4ODRCOCxcbiAgICAweDhGRjc6IDB4OEI3MixcbiAgICAweDhGRjg6IDB4OTFCOCxcbiAgICAweDhGRjk6IDB4OTMyMCxcbiAgICAweDhGRkE6IDB4NTYzMSxcbiAgICAweDhGRkI6IDB4NTdGNCxcbiAgICAweDhGRkM6IDB4OThGRSxcbiAgICAweDkwNDA6IDB4NjJFRCxcbiAgICAweDkwNDE6IDB4NjkwRCxcbiAgICAweDkwNDI6IDB4NkI5NixcbiAgICAweDkwNDM6IDB4NzFFRCxcbiAgICAweDkwNDQ6IDB4N0U1NCxcbiAgICAweDkwNDU6IDB4ODA3NyxcbiAgICAweDkwNDY6IDB4ODI3MixcbiAgICAweDkwNDc6IDB4ODlFNixcbiAgICAweDkwNDg6IDB4OThERixcbiAgICAweDkwNDk6IDB4ODc1NSxcbiAgICAweDkwNEE6IDB4OEZCMSxcbiAgICAweDkwNEI6IDB4NUMzQixcbiAgICAweDkwNEM6IDB4NEYzOCxcbiAgICAweDkwNEQ6IDB4NEZFMSxcbiAgICAweDkwNEU6IDB4NEZCNSxcbiAgICAweDkwNEY6IDB4NTUwNyxcbiAgICAweDkwNTA6IDB4NUEyMCxcbiAgICAweDkwNTE6IDB4NUJERCxcbiAgICAweDkwNTI6IDB4NUJFOSxcbiAgICAweDkwNTM6IDB4NUZDMyxcbiAgICAweDkwNTQ6IDB4NjE0RSxcbiAgICAweDkwNTU6IDB4NjMyRixcbiAgICAweDkwNTY6IDB4NjVCMCxcbiAgICAweDkwNTc6IDB4NjY0QixcbiAgICAweDkwNTg6IDB4NjhFRSxcbiAgICAweDkwNTk6IDB4Njk5QixcbiAgICAweDkwNUE6IDB4NkQ3OCxcbiAgICAweDkwNUI6IDB4NkRGMSxcbiAgICAweDkwNUM6IDB4NzUzMyxcbiAgICAweDkwNUQ6IDB4NzVCOSxcbiAgICAweDkwNUU6IDB4NzcxRixcbiAgICAweDkwNUY6IDB4Nzk1RSxcbiAgICAweDkwNjA6IDB4NzlFNixcbiAgICAweDkwNjE6IDB4N0QzMyxcbiAgICAweDkwNjI6IDB4ODFFMyxcbiAgICAweDkwNjM6IDB4ODJBRixcbiAgICAweDkwNjQ6IDB4ODVBQSxcbiAgICAweDkwNjU6IDB4ODlBQSxcbiAgICAweDkwNjY6IDB4OEEzQSxcbiAgICAweDkwNjc6IDB4OEVBQixcbiAgICAweDkwNjg6IDB4OEY5QixcbiAgICAweDkwNjk6IDB4OTAzMixcbiAgICAweDkwNkE6IDB4OTFERCxcbiAgICAweDkwNkI6IDB4OTcwNyxcbiAgICAweDkwNkM6IDB4NEVCQSxcbiAgICAweDkwNkQ6IDB4NEVDMSxcbiAgICAweDkwNkU6IDB4NTIwMyxcbiAgICAweDkwNkY6IDB4NTg3NSxcbiAgICAweDkwNzA6IDB4NThFQyxcbiAgICAweDkwNzE6IDB4NUMwQixcbiAgICAweDkwNzI6IDB4NzUxQSxcbiAgICAweDkwNzM6IDB4NUMzRCxcbiAgICAweDkwNzQ6IDB4ODE0RSxcbiAgICAweDkwNzU6IDB4OEEwQSxcbiAgICAweDkwNzY6IDB4OEZDNSxcbiAgICAweDkwNzc6IDB4OTY2MyxcbiAgICAweDkwNzg6IDB4OTc2RCxcbiAgICAweDkwNzk6IDB4N0IyNSxcbiAgICAweDkwN0E6IDB4OEFDRixcbiAgICAweDkwN0I6IDB4OTgwOCxcbiAgICAweDkwN0M6IDB4OTE2MixcbiAgICAweDkwN0Q6IDB4NTZGMyxcbiAgICAweDkwN0U6IDB4NTNBOCxcbiAgICAweDkwODA6IDB4OTAxNyxcbiAgICAweDkwODE6IDB4NTQzOSxcbiAgICAweDkwODI6IDB4NTc4MixcbiAgICAweDkwODM6IDB4NUUyNSxcbiAgICAweDkwODQ6IDB4NjNBOCxcbiAgICAweDkwODU6IDB4NkMzNCxcbiAgICAweDkwODY6IDB4NzA4QSxcbiAgICAweDkwODc6IDB4Nzc2MSxcbiAgICAweDkwODg6IDB4N0M4QixcbiAgICAweDkwODk6IDB4N0ZFMCxcbiAgICAweDkwOEE6IDB4ODg3MCxcbiAgICAweDkwOEI6IDB4OTA0MixcbiAgICAweDkwOEM6IDB4OTE1NCxcbiAgICAweDkwOEQ6IDB4OTMxMCxcbiAgICAweDkwOEU6IDB4OTMxOCxcbiAgICAweDkwOEY6IDB4OTY4RixcbiAgICAweDkwOTA6IDB4NzQ1RSxcbiAgICAweDkwOTE6IDB4OUFDNCxcbiAgICAweDkwOTI6IDB4NUQwNyxcbiAgICAweDkwOTM6IDB4NUQ2OSxcbiAgICAweDkwOTQ6IDB4NjU3MCxcbiAgICAweDkwOTU6IDB4NjdBMixcbiAgICAweDkwOTY6IDB4OERBOCxcbiAgICAweDkwOTc6IDB4OTZEQixcbiAgICAweDkwOTg6IDB4NjM2RSxcbiAgICAweDkwOTk6IDB4Njc0OSxcbiAgICAweDkwOUE6IDB4NjkxOSxcbiAgICAweDkwOUI6IDB4ODNDNSxcbiAgICAweDkwOUM6IDB4OTgxNyxcbiAgICAweDkwOUQ6IDB4OTZDMCxcbiAgICAweDkwOUU6IDB4ODhGRSxcbiAgICAweDkwOUY6IDB4NkY4NCxcbiAgICAweDkwQTA6IDB4NjQ3QSxcbiAgICAweDkwQTE6IDB4NUJGOCxcbiAgICAweDkwQTI6IDB4NEUxNixcbiAgICAweDkwQTM6IDB4NzAyQyxcbiAgICAweDkwQTQ6IDB4NzU1RCxcbiAgICAweDkwQTU6IDB4NjYyRixcbiAgICAweDkwQTY6IDB4NTFDNCxcbiAgICAweDkwQTc6IDB4NTIzNixcbiAgICAweDkwQTg6IDB4NTJFMixcbiAgICAweDkwQTk6IDB4NTlEMyxcbiAgICAweDkwQUE6IDB4NUY4MSxcbiAgICAweDkwQUI6IDB4NjAyNyxcbiAgICAweDkwQUM6IDB4NjIxMCxcbiAgICAweDkwQUQ6IDB4NjUzRixcbiAgICAweDkwQUU6IDB4NjU3NCxcbiAgICAweDkwQUY6IDB4NjYxRixcbiAgICAweDkwQjA6IDB4NjY3NCxcbiAgICAweDkwQjE6IDB4NjhGMixcbiAgICAweDkwQjI6IDB4NjgxNixcbiAgICAweDkwQjM6IDB4NkI2MyxcbiAgICAweDkwQjQ6IDB4NkUwNSxcbiAgICAweDkwQjU6IDB4NzI3MixcbiAgICAweDkwQjY6IDB4NzUxRixcbiAgICAweDkwQjc6IDB4NzZEQixcbiAgICAweDkwQjg6IDB4N0NCRSxcbiAgICAweDkwQjk6IDB4ODA1NixcbiAgICAweDkwQkE6IDB4NThGMCxcbiAgICAweDkwQkI6IDB4ODhGRCxcbiAgICAweDkwQkM6IDB4ODk3RixcbiAgICAweDkwQkQ6IDB4OEFBMCxcbiAgICAweDkwQkU6IDB4OEE5MyxcbiAgICAweDkwQkY6IDB4OEFDQixcbiAgICAweDkwQzA6IDB4OTAxRCxcbiAgICAweDkwQzE6IDB4OTE5MixcbiAgICAweDkwQzI6IDB4OTc1MixcbiAgICAweDkwQzM6IDB4OTc1OSxcbiAgICAweDkwQzQ6IDB4NjU4OSxcbiAgICAweDkwQzU6IDB4N0EwRSxcbiAgICAweDkwQzY6IDB4ODEwNixcbiAgICAweDkwQzc6IDB4OTZCQixcbiAgICAweDkwQzg6IDB4NUUyRCxcbiAgICAweDkwQzk6IDB4NjBEQyxcbiAgICAweDkwQ0E6IDB4NjIxQSxcbiAgICAweDkwQ0I6IDB4NjVBNSxcbiAgICAweDkwQ0M6IDB4NjYxNCxcbiAgICAweDkwQ0Q6IDB4Njc5MCxcbiAgICAweDkwQ0U6IDB4NzdGMyxcbiAgICAweDkwQ0Y6IDB4N0E0RCxcbiAgICAweDkwRDA6IDB4N0M0RCxcbiAgICAweDkwRDE6IDB4N0UzRSxcbiAgICAweDkwRDI6IDB4ODEwQSxcbiAgICAweDkwRDM6IDB4OENBQyxcbiAgICAweDkwRDQ6IDB4OEQ2NCxcbiAgICAweDkwRDU6IDB4OERFMSxcbiAgICAweDkwRDY6IDB4OEU1RixcbiAgICAweDkwRDc6IDB4NzhBOSxcbiAgICAweDkwRDg6IDB4NTIwNyxcbiAgICAweDkwRDk6IDB4NjJEOSxcbiAgICAweDkwREE6IDB4NjNBNSxcbiAgICAweDkwREI6IDB4NjQ0MixcbiAgICAweDkwREM6IDB4NjI5OCxcbiAgICAweDkwREQ6IDB4OEEyRCxcbiAgICAweDkwREU6IDB4N0E4MyxcbiAgICAweDkwREY6IDB4N0JDMCxcbiAgICAweDkwRTA6IDB4OEFBQyxcbiAgICAweDkwRTE6IDB4OTZFQSxcbiAgICAweDkwRTI6IDB4N0Q3NixcbiAgICAweDkwRTM6IDB4ODIwQyxcbiAgICAweDkwRTQ6IDB4ODc0OSxcbiAgICAweDkwRTU6IDB4NEVEOSxcbiAgICAweDkwRTY6IDB4NTE0OCxcbiAgICAweDkwRTc6IDB4NTM0MyxcbiAgICAweDkwRTg6IDB4NTM2MCxcbiAgICAweDkwRTk6IDB4NUJBMyxcbiAgICAweDkwRUE6IDB4NUMwMixcbiAgICAweDkwRUI6IDB4NUMxNixcbiAgICAweDkwRUM6IDB4NURERCxcbiAgICAweDkwRUQ6IDB4NjIyNixcbiAgICAweDkwRUU6IDB4NjI0NyxcbiAgICAweDkwRUY6IDB4NjRCMCxcbiAgICAweDkwRjA6IDB4NjgxMyxcbiAgICAweDkwRjE6IDB4NjgzNCxcbiAgICAweDkwRjI6IDB4NkNDOSxcbiAgICAweDkwRjM6IDB4NkQ0NSxcbiAgICAweDkwRjQ6IDB4NkQxNyxcbiAgICAweDkwRjU6IDB4NjdEMyxcbiAgICAweDkwRjY6IDB4NkY1QyxcbiAgICAweDkwRjc6IDB4NzE0RSxcbiAgICAweDkwRjg6IDB4NzE3RCxcbiAgICAweDkwRjk6IDB4NjVDQixcbiAgICAweDkwRkE6IDB4N0E3RixcbiAgICAweDkwRkI6IDB4N0JBRCxcbiAgICAweDkwRkM6IDB4N0REQSxcbiAgICAweDkxNDA6IDB4N0U0QSxcbiAgICAweDkxNDE6IDB4N0ZBOCxcbiAgICAweDkxNDI6IDB4ODE3QSxcbiAgICAweDkxNDM6IDB4ODIxQixcbiAgICAweDkxNDQ6IDB4ODIzOSxcbiAgICAweDkxNDU6IDB4ODVBNixcbiAgICAweDkxNDY6IDB4OEE2RSxcbiAgICAweDkxNDc6IDB4OENDRSxcbiAgICAweDkxNDg6IDB4OERGNSxcbiAgICAweDkxNDk6IDB4OTA3OCxcbiAgICAweDkxNEE6IDB4OTA3NyxcbiAgICAweDkxNEI6IDB4OTJBRCxcbiAgICAweDkxNEM6IDB4OTI5MSxcbiAgICAweDkxNEQ6IDB4OTU4MyxcbiAgICAweDkxNEU6IDB4OUJBRSxcbiAgICAweDkxNEY6IDB4NTI0RCxcbiAgICAweDkxNTA6IDB4NTU4NCxcbiAgICAweDkxNTE6IDB4NkYzOCxcbiAgICAweDkxNTI6IDB4NzEzNixcbiAgICAweDkxNTM6IDB4NTE2OCxcbiAgICAweDkxNTQ6IDB4Nzk4NSxcbiAgICAweDkxNTU6IDB4N0U1NSxcbiAgICAweDkxNTY6IDB4ODFCMyxcbiAgICAweDkxNTc6IDB4N0NDRSxcbiAgICAweDkxNTg6IDB4NTY0QyxcbiAgICAweDkxNTk6IDB4NTg1MSxcbiAgICAweDkxNUE6IDB4NUNBOCxcbiAgICAweDkxNUI6IDB4NjNBQSxcbiAgICAweDkxNUM6IDB4NjZGRSxcbiAgICAweDkxNUQ6IDB4NjZGRCxcbiAgICAweDkxNUU6IDB4Njk1QSxcbiAgICAweDkxNUY6IDB4NzJEOSxcbiAgICAweDkxNjA6IDB4NzU4RixcbiAgICAweDkxNjE6IDB4NzU4RSxcbiAgICAweDkxNjI6IDB4NzkwRSxcbiAgICAweDkxNjM6IDB4Nzk1NixcbiAgICAweDkxNjQ6IDB4NzlERixcbiAgICAweDkxNjU6IDB4N0M5NyxcbiAgICAweDkxNjY6IDB4N0QyMCxcbiAgICAweDkxNjc6IDB4N0Q0NCxcbiAgICAweDkxNjg6IDB4ODYwNyxcbiAgICAweDkxNjk6IDB4OEEzNCxcbiAgICAweDkxNkE6IDB4OTYzQixcbiAgICAweDkxNkI6IDB4OTA2MSxcbiAgICAweDkxNkM6IDB4OUYyMCxcbiAgICAweDkxNkQ6IDB4NTBFNyxcbiAgICAweDkxNkU6IDB4NTI3NSxcbiAgICAweDkxNkY6IDB4NTNDQyxcbiAgICAweDkxNzA6IDB4NTNFMixcbiAgICAweDkxNzE6IDB4NTAwOSxcbiAgICAweDkxNzI6IDB4NTVBQSxcbiAgICAweDkxNzM6IDB4NThFRSxcbiAgICAweDkxNzQ6IDB4NTk0RixcbiAgICAweDkxNzU6IDB4NzIzRCxcbiAgICAweDkxNzY6IDB4NUI4QixcbiAgICAweDkxNzc6IDB4NUM2NCxcbiAgICAweDkxNzg6IDB4NTMxRCxcbiAgICAweDkxNzk6IDB4NjBFMyxcbiAgICAweDkxN0E6IDB4NjBGMyxcbiAgICAweDkxN0I6IDB4NjM1QyxcbiAgICAweDkxN0M6IDB4NjM4MyxcbiAgICAweDkxN0Q6IDB4NjMzRixcbiAgICAweDkxN0U6IDB4NjNCQixcbiAgICAweDkxODA6IDB4NjRDRCxcbiAgICAweDkxODE6IDB4NjVFOSxcbiAgICAweDkxODI6IDB4NjZGOSxcbiAgICAweDkxODM6IDB4NURFMyxcbiAgICAweDkxODQ6IDB4NjlDRCxcbiAgICAweDkxODU6IDB4NjlGRCxcbiAgICAweDkxODY6IDB4NkYxNSxcbiAgICAweDkxODc6IDB4NzFFNSxcbiAgICAweDkxODg6IDB4NEU4OSxcbiAgICAweDkxODk6IDB4NzVFOSxcbiAgICAweDkxOEE6IDB4NzZGOCxcbiAgICAweDkxOEI6IDB4N0E5MyxcbiAgICAweDkxOEM6IDB4N0NERixcbiAgICAweDkxOEQ6IDB4N0RDRixcbiAgICAweDkxOEU6IDB4N0Q5QyxcbiAgICAweDkxOEY6IDB4ODA2MSxcbiAgICAweDkxOTA6IDB4ODM0OSxcbiAgICAweDkxOTE6IDB4ODM1OCxcbiAgICAweDkxOTI6IDB4ODQ2QyxcbiAgICAweDkxOTM6IDB4ODRCQyxcbiAgICAweDkxOTQ6IDB4ODVGQixcbiAgICAweDkxOTU6IDB4ODhDNSxcbiAgICAweDkxOTY6IDB4OEQ3MCxcbiAgICAweDkxOTc6IDB4OTAwMSxcbiAgICAweDkxOTg6IDB4OTA2RCxcbiAgICAweDkxOTk6IDB4OTM5NyxcbiAgICAweDkxOUE6IDB4OTcxQyxcbiAgICAweDkxOUI6IDB4OUExMixcbiAgICAweDkxOUM6IDB4NTBDRixcbiAgICAweDkxOUQ6IDB4NTg5NyxcbiAgICAweDkxOUU6IDB4NjE4RSxcbiAgICAweDkxOUY6IDB4ODFEMyxcbiAgICAweDkxQTA6IDB4ODUzNSxcbiAgICAweDkxQTE6IDB4OEQwOCxcbiAgICAweDkxQTI6IDB4OTAyMCxcbiAgICAweDkxQTM6IDB4NEZDMyxcbiAgICAweDkxQTQ6IDB4NTA3NCxcbiAgICAweDkxQTU6IDB4NTI0NyxcbiAgICAweDkxQTY6IDB4NTM3MyxcbiAgICAweDkxQTc6IDB4NjA2RixcbiAgICAweDkxQTg6IDB4NjM0OSxcbiAgICAweDkxQTk6IDB4Njc1RixcbiAgICAweDkxQUE6IDB4NkUyQyxcbiAgICAweDkxQUI6IDB4OERCMyxcbiAgICAweDkxQUM6IDB4OTAxRixcbiAgICAweDkxQUQ6IDB4NEZENyxcbiAgICAweDkxQUU6IDB4NUM1RSxcbiAgICAweDkxQUY6IDB4OENDQSxcbiAgICAweDkxQjA6IDB4NjVDRixcbiAgICAweDkxQjE6IDB4N0Q5QSxcbiAgICAweDkxQjI6IDB4NTM1MixcbiAgICAweDkxQjM6IDB4ODg5NixcbiAgICAweDkxQjQ6IDB4NTE3NixcbiAgICAweDkxQjU6IDB4NjNDMyxcbiAgICAweDkxQjY6IDB4NUI1OCxcbiAgICAweDkxQjc6IDB4NUI2QixcbiAgICAweDkxQjg6IDB4NUMwQSxcbiAgICAweDkxQjk6IDB4NjQwRCxcbiAgICAweDkxQkE6IDB4Njc1MSxcbiAgICAweDkxQkI6IDB4OTA1QyxcbiAgICAweDkxQkM6IDB4NEVENixcbiAgICAweDkxQkQ6IDB4NTkxQSxcbiAgICAweDkxQkU6IDB4NTkyQSxcbiAgICAweDkxQkY6IDB4NkM3MCxcbiAgICAweDkxQzA6IDB4OEE1MSxcbiAgICAweDkxQzE6IDB4NTUzRSxcbiAgICAweDkxQzI6IDB4NTgxNSxcbiAgICAweDkxQzM6IDB4NTlBNSxcbiAgICAweDkxQzQ6IDB4NjBGMCxcbiAgICAweDkxQzU6IDB4NjI1MyxcbiAgICAweDkxQzY6IDB4NjdDMSxcbiAgICAweDkxQzc6IDB4ODIzNSxcbiAgICAweDkxQzg6IDB4Njk1NSxcbiAgICAweDkxQzk6IDB4OTY0MCxcbiAgICAweDkxQ0E6IDB4OTlDNCxcbiAgICAweDkxQ0I6IDB4OUEyOCxcbiAgICAweDkxQ0M6IDB4NEY1MyxcbiAgICAweDkxQ0Q6IDB4NTgwNixcbiAgICAweDkxQ0U6IDB4NUJGRSxcbiAgICAweDkxQ0Y6IDB4ODAxMCxcbiAgICAweDkxRDA6IDB4NUNCMSxcbiAgICAweDkxRDE6IDB4NUUyRixcbiAgICAweDkxRDI6IDB4NUY4NSxcbiAgICAweDkxRDM6IDB4NjAyMCxcbiAgICAweDkxRDQ6IDB4NjE0QixcbiAgICAweDkxRDU6IDB4NjIzNCxcbiAgICAweDkxRDY6IDB4NjZGRixcbiAgICAweDkxRDc6IDB4NkNGMCxcbiAgICAweDkxRDg6IDB4NkVERSxcbiAgICAweDkxRDk6IDB4ODBDRSxcbiAgICAweDkxREE6IDB4ODE3RixcbiAgICAweDkxREI6IDB4ODJENCxcbiAgICAweDkxREM6IDB4ODg4QixcbiAgICAweDkxREQ6IDB4OENCOCxcbiAgICAweDkxREU6IDB4OTAwMCxcbiAgICAweDkxREY6IDB4OTAyRSxcbiAgICAweDkxRTA6IDB4OTY4QSxcbiAgICAweDkxRTE6IDB4OUVEQixcbiAgICAweDkxRTI6IDB4OUJEQixcbiAgICAweDkxRTM6IDB4NEVFMyxcbiAgICAweDkxRTQ6IDB4NTNGMCxcbiAgICAweDkxRTU6IDB4NTkyNyxcbiAgICAweDkxRTY6IDB4N0IyQyxcbiAgICAweDkxRTc6IDB4OTE4RCxcbiAgICAweDkxRTg6IDB4OTg0QyxcbiAgICAweDkxRTk6IDB4OURGOSxcbiAgICAweDkxRUE6IDB4NkVERCxcbiAgICAweDkxRUI6IDB4NzAyNyxcbiAgICAweDkxRUM6IDB4NTM1MyxcbiAgICAweDkxRUQ6IDB4NTU0NCxcbiAgICAweDkxRUU6IDB4NUI4NSxcbiAgICAweDkxRUY6IDB4NjI1OCxcbiAgICAweDkxRjA6IDB4NjI5RSxcbiAgICAweDkxRjE6IDB4NjJEMyxcbiAgICAweDkxRjI6IDB4NkNBMixcbiAgICAweDkxRjM6IDB4NkZFRixcbiAgICAweDkxRjQ6IDB4NzQyMixcbiAgICAweDkxRjU6IDB4OEExNyxcbiAgICAweDkxRjY6IDB4OTQzOCxcbiAgICAweDkxRjc6IDB4NkZDMSxcbiAgICAweDkxRjg6IDB4OEFGRSxcbiAgICAweDkxRjk6IDB4ODMzOCxcbiAgICAweDkxRkE6IDB4NTFFNyxcbiAgICAweDkxRkI6IDB4ODZGOCxcbiAgICAweDkxRkM6IDB4NTNFQSxcbiAgICAweDkyNDA6IDB4NTNFOSxcbiAgICAweDkyNDE6IDB4NEY0NixcbiAgICAweDkyNDI6IDB4OTA1NCxcbiAgICAweDkyNDM6IDB4OEZCMCxcbiAgICAweDkyNDQ6IDB4NTk2QSxcbiAgICAweDkyNDU6IDB4ODEzMSxcbiAgICAweDkyNDY6IDB4NURGRCxcbiAgICAweDkyNDc6IDB4N0FFQSxcbiAgICAweDkyNDg6IDB4OEZCRixcbiAgICAweDkyNDk6IDB4NjhEQSxcbiAgICAweDkyNEE6IDB4OEMzNyxcbiAgICAweDkyNEI6IDB4NzJGOCxcbiAgICAweDkyNEM6IDB4OUM0OCxcbiAgICAweDkyNEQ6IDB4NkEzRCxcbiAgICAweDkyNEU6IDB4OEFCMCxcbiAgICAweDkyNEY6IDB4NEUzOSxcbiAgICAweDkyNTA6IDB4NTM1OCxcbiAgICAweDkyNTE6IDB4NTYwNixcbiAgICAweDkyNTI6IDB4NTc2NixcbiAgICAweDkyNTM6IDB4NjJDNSxcbiAgICAweDkyNTQ6IDB4NjNBMixcbiAgICAweDkyNTU6IDB4NjVFNixcbiAgICAweDkyNTY6IDB4NkI0RSxcbiAgICAweDkyNTc6IDB4NkRFMSxcbiAgICAweDkyNTg6IDB4NkU1QixcbiAgICAweDkyNTk6IDB4NzBBRCxcbiAgICAweDkyNUE6IDB4NzdFRCxcbiAgICAweDkyNUI6IDB4N0FFRixcbiAgICAweDkyNUM6IDB4N0JBQSxcbiAgICAweDkyNUQ6IDB4N0RCQixcbiAgICAweDkyNUU6IDB4ODAzRCxcbiAgICAweDkyNUY6IDB4ODBDNixcbiAgICAweDkyNjA6IDB4ODZDQixcbiAgICAweDkyNjE6IDB4OEE5NSxcbiAgICAweDkyNjI6IDB4OTM1QixcbiAgICAweDkyNjM6IDB4NTZFMyxcbiAgICAweDkyNjQ6IDB4NThDNyxcbiAgICAweDkyNjU6IDB4NUYzRSxcbiAgICAweDkyNjY6IDB4NjVBRCxcbiAgICAweDkyNjc6IDB4NjY5NixcbiAgICAweDkyNjg6IDB4NkE4MCxcbiAgICAweDkyNjk6IDB4NkJCNSxcbiAgICAweDkyNkE6IDB4NzUzNyxcbiAgICAweDkyNkI6IDB4OEFDNyxcbiAgICAweDkyNkM6IDB4NTAyNCxcbiAgICAweDkyNkQ6IDB4NzdFNSxcbiAgICAweDkyNkU6IDB4NTczMCxcbiAgICAweDkyNkY6IDB4NUYxQixcbiAgICAweDkyNzA6IDB4NjA2NSxcbiAgICAweDkyNzE6IDB4NjY3QSxcbiAgICAweDkyNzI6IDB4NkM2MCxcbiAgICAweDkyNzM6IDB4NzVGNCxcbiAgICAweDkyNzQ6IDB4N0ExQSxcbiAgICAweDkyNzU6IDB4N0Y2RSxcbiAgICAweDkyNzY6IDB4ODFGNCxcbiAgICAweDkyNzc6IDB4ODcxOCxcbiAgICAweDkyNzg6IDB4OTA0NSxcbiAgICAweDkyNzk6IDB4OTlCMyxcbiAgICAweDkyN0E6IDB4N0JDOSxcbiAgICAweDkyN0I6IDB4NzU1QyxcbiAgICAweDkyN0M6IDB4N0FGOSxcbiAgICAweDkyN0Q6IDB4N0I1MSxcbiAgICAweDkyN0U6IDB4ODRDNCxcbiAgICAweDkyODA6IDB4OTAxMCxcbiAgICAweDkyODE6IDB4NzlFOSxcbiAgICAweDkyODI6IDB4N0E5MixcbiAgICAweDkyODM6IDB4ODMzNixcbiAgICAweDkyODQ6IDB4NUFFMSxcbiAgICAweDkyODU6IDB4Nzc0MCxcbiAgICAweDkyODY6IDB4NEUyRCxcbiAgICAweDkyODc6IDB4NEVGMixcbiAgICAweDkyODg6IDB4NUI5OSxcbiAgICAweDkyODk6IDB4NUZFMCxcbiAgICAweDkyOEE6IDB4NjJCRCxcbiAgICAweDkyOEI6IDB4NjYzQyxcbiAgICAweDkyOEM6IDB4NjdGMSxcbiAgICAweDkyOEQ6IDB4NkNFOCxcbiAgICAweDkyOEU6IDB4ODY2QixcbiAgICAweDkyOEY6IDB4ODg3NyxcbiAgICAweDkyOTA6IDB4OEEzQixcbiAgICAweDkyOTE6IDB4OTE0RSxcbiAgICAweDkyOTI6IDB4OTJGMyxcbiAgICAweDkyOTM6IDB4OTlEMCxcbiAgICAweDkyOTQ6IDB4NkExNyxcbiAgICAweDkyOTU6IDB4NzAyNixcbiAgICAweDkyOTY6IDB4NzMyQSxcbiAgICAweDkyOTc6IDB4ODJFNyxcbiAgICAweDkyOTg6IDB4ODQ1NyxcbiAgICAweDkyOTk6IDB4OENBRixcbiAgICAweDkyOUE6IDB4NEUwMSxcbiAgICAweDkyOUI6IDB4NTE0NixcbiAgICAweDkyOUM6IDB4NTFDQixcbiAgICAweDkyOUQ6IDB4NTU4QixcbiAgICAweDkyOUU6IDB4NUJGNSxcbiAgICAweDkyOUY6IDB4NUUxNixcbiAgICAweDkyQTA6IDB4NUUzMyxcbiAgICAweDkyQTE6IDB4NUU4MSxcbiAgICAweDkyQTI6IDB4NUYxNCxcbiAgICAweDkyQTM6IDB4NUYzNSxcbiAgICAweDkyQTQ6IDB4NUY2QixcbiAgICAweDkyQTU6IDB4NUZCNCxcbiAgICAweDkyQTY6IDB4NjFGMixcbiAgICAweDkyQTc6IDB4NjMxMSxcbiAgICAweDkyQTg6IDB4NjZBMixcbiAgICAweDkyQTk6IDB4NjcxRCxcbiAgICAweDkyQUE6IDB4NkY2RSxcbiAgICAweDkyQUI6IDB4NzI1MixcbiAgICAweDkyQUM6IDB4NzUzQSxcbiAgICAweDkyQUQ6IDB4NzczQSxcbiAgICAweDkyQUU6IDB4ODA3NCxcbiAgICAweDkyQUY6IDB4ODEzOSxcbiAgICAweDkyQjA6IDB4ODE3OCxcbiAgICAweDkyQjE6IDB4ODc3NixcbiAgICAweDkyQjI6IDB4OEFCRixcbiAgICAweDkyQjM6IDB4OEFEQyxcbiAgICAweDkyQjQ6IDB4OEQ4NSxcbiAgICAweDkyQjU6IDB4OERGMyxcbiAgICAweDkyQjY6IDB4OTI5QSxcbiAgICAweDkyQjc6IDB4OTU3NyxcbiAgICAweDkyQjg6IDB4OTgwMixcbiAgICAweDkyQjk6IDB4OUNFNSxcbiAgICAweDkyQkE6IDB4NTJDNSxcbiAgICAweDkyQkI6IDB4NjM1NyxcbiAgICAweDkyQkM6IDB4NzZGNCxcbiAgICAweDkyQkQ6IDB4NjcxNSxcbiAgICAweDkyQkU6IDB4NkM4OCxcbiAgICAweDkyQkY6IDB4NzNDRCxcbiAgICAweDkyQzA6IDB4OENDMyxcbiAgICAweDkyQzE6IDB4OTNBRSxcbiAgICAweDkyQzI6IDB4OTY3MyxcbiAgICAweDkyQzM6IDB4NkQyNSxcbiAgICAweDkyQzQ6IDB4NTg5QyxcbiAgICAweDkyQzU6IDB4NjkwRSxcbiAgICAweDkyQzY6IDB4NjlDQyxcbiAgICAweDkyQzc6IDB4OEZGRCxcbiAgICAweDkyQzg6IDB4OTM5QSxcbiAgICAweDkyQzk6IDB4NzVEQixcbiAgICAweDkyQ0E6IDB4OTAxQSxcbiAgICAweDkyQ0I6IDB4NTg1QSxcbiAgICAweDkyQ0M6IDB4NjgwMixcbiAgICAweDkyQ0Q6IDB4NjNCNCxcbiAgICAweDkyQ0U6IDB4NjlGQixcbiAgICAweDkyQ0Y6IDB4NEY0MyxcbiAgICAweDkyRDA6IDB4NkYyQyxcbiAgICAweDkyRDE6IDB4NjdEOCxcbiAgICAweDkyRDI6IDB4OEZCQixcbiAgICAweDkyRDM6IDB4ODUyNixcbiAgICAweDkyRDQ6IDB4N0RCNCxcbiAgICAweDkyRDU6IDB4OTM1NCxcbiAgICAweDkyRDY6IDB4NjkzRixcbiAgICAweDkyRDc6IDB4NkY3MCxcbiAgICAweDkyRDg6IDB4NTc2QSxcbiAgICAweDkyRDk6IDB4NThGNyxcbiAgICAweDkyREE6IDB4NUIyQyxcbiAgICAweDkyREI6IDB4N0QyQyxcbiAgICAweDkyREM6IDB4NzIyQSxcbiAgICAweDkyREQ6IDB4NTQwQSxcbiAgICAweDkyREU6IDB4OTFFMyxcbiAgICAweDkyREY6IDB4OURCNCxcbiAgICAweDkyRTA6IDB4NEVBRCxcbiAgICAweDkyRTE6IDB4NEY0RSxcbiAgICAweDkyRTI6IDB4NTA1QyxcbiAgICAweDkyRTM6IDB4NTA3NSxcbiAgICAweDkyRTQ6IDB4NTI0MyxcbiAgICAweDkyRTU6IDB4OEM5RSxcbiAgICAweDkyRTY6IDB4NTQ0OCxcbiAgICAweDkyRTc6IDB4NTgyNCxcbiAgICAweDkyRTg6IDB4NUI5QSxcbiAgICAweDkyRTk6IDB4NUUxRCxcbiAgICAweDkyRUE6IDB4NUU5NSxcbiAgICAweDkyRUI6IDB4NUVBRCxcbiAgICAweDkyRUM6IDB4NUVGNyxcbiAgICAweDkyRUQ6IDB4NUYxRixcbiAgICAweDkyRUU6IDB4NjA4QyxcbiAgICAweDkyRUY6IDB4NjJCNSxcbiAgICAweDkyRjA6IDB4NjMzQSxcbiAgICAweDkyRjE6IDB4NjNEMCxcbiAgICAweDkyRjI6IDB4NjhBRixcbiAgICAweDkyRjM6IDB4NkM0MCxcbiAgICAweDkyRjQ6IDB4Nzg4NyxcbiAgICAweDkyRjU6IDB4Nzk4RSxcbiAgICAweDkyRjY6IDB4N0EwQixcbiAgICAweDkyRjc6IDB4N0RFMCxcbiAgICAweDkyRjg6IDB4ODI0NyxcbiAgICAweDkyRjk6IDB4OEEwMixcbiAgICAweDkyRkE6IDB4OEFFNixcbiAgICAweDkyRkI6IDB4OEU0NCxcbiAgICAweDkyRkM6IDB4OTAxMyxcbiAgICAweDkzNDA6IDB4OTBCOCxcbiAgICAweDkzNDE6IDB4OTEyRCxcbiAgICAweDkzNDI6IDB4OTFEOCxcbiAgICAweDkzNDM6IDB4OUYwRSxcbiAgICAweDkzNDQ6IDB4NkNFNSxcbiAgICAweDkzNDU6IDB4NjQ1OCxcbiAgICAweDkzNDY6IDB4NjRFMixcbiAgICAweDkzNDc6IDB4NjU3NSxcbiAgICAweDkzNDg6IDB4NkVGNCxcbiAgICAweDkzNDk6IDB4NzY4NCxcbiAgICAweDkzNEE6IDB4N0IxQixcbiAgICAweDkzNEI6IDB4OTA2OSxcbiAgICAweDkzNEM6IDB4OTNEMSxcbiAgICAweDkzNEQ6IDB4NkVCQSxcbiAgICAweDkzNEU6IDB4NTRGMixcbiAgICAweDkzNEY6IDB4NUZCOSxcbiAgICAweDkzNTA6IDB4NjRBNCxcbiAgICAweDkzNTE6IDB4OEY0RCxcbiAgICAweDkzNTI6IDB4OEZFRCxcbiAgICAweDkzNTM6IDB4OTI0NCxcbiAgICAweDkzNTQ6IDB4NTE3OCxcbiAgICAweDkzNTU6IDB4NTg2QixcbiAgICAweDkzNTY6IDB4NTkyOSxcbiAgICAweDkzNTc6IDB4NUM1NSxcbiAgICAweDkzNTg6IDB4NUU5NyxcbiAgICAweDkzNTk6IDB4NkRGQixcbiAgICAweDkzNUE6IDB4N0U4RixcbiAgICAweDkzNUI6IDB4NzUxQyxcbiAgICAweDkzNUM6IDB4OENCQyxcbiAgICAweDkzNUQ6IDB4OEVFMixcbiAgICAweDkzNUU6IDB4OTg1QixcbiAgICAweDkzNUY6IDB4NzBCOSxcbiAgICAweDkzNjA6IDB4NEYxRCxcbiAgICAweDkzNjE6IDB4NkJCRixcbiAgICAweDkzNjI6IDB4NkZCMSxcbiAgICAweDkzNjM6IDB4NzUzMCxcbiAgICAweDkzNjQ6IDB4OTZGQixcbiAgICAweDkzNjU6IDB4NTE0RSxcbiAgICAweDkzNjY6IDB4NTQxMCxcbiAgICAweDkzNjc6IDB4NTgzNSxcbiAgICAweDkzNjg6IDB4NTg1NyxcbiAgICAweDkzNjk6IDB4NTlBQyxcbiAgICAweDkzNkE6IDB4NUM2MCxcbiAgICAweDkzNkI6IDB4NUY5MixcbiAgICAweDkzNkM6IDB4NjU5NyxcbiAgICAweDkzNkQ6IDB4Njc1QyxcbiAgICAweDkzNkU6IDB4NkUyMSxcbiAgICAweDkzNkY6IDB4NzY3QixcbiAgICAweDkzNzA6IDB4ODNERixcbiAgICAweDkzNzE6IDB4OENFRCxcbiAgICAweDkzNzI6IDB4OTAxNCxcbiAgICAweDkzNzM6IDB4OTBGRCxcbiAgICAweDkzNzQ6IDB4OTM0RCxcbiAgICAweDkzNzU6IDB4NzgyNSxcbiAgICAweDkzNzY6IDB4NzgzQSxcbiAgICAweDkzNzc6IDB4NTJBQSxcbiAgICAweDkzNzg6IDB4NUVBNixcbiAgICAweDkzNzk6IDB4NTcxRixcbiAgICAweDkzN0E6IDB4NTk3NCxcbiAgICAweDkzN0I6IDB4NjAxMixcbiAgICAweDkzN0M6IDB4NTAxMixcbiAgICAweDkzN0Q6IDB4NTE1QSxcbiAgICAweDkzN0U6IDB4NTFBQyxcbiAgICAweDkzODA6IDB4NTFDRCxcbiAgICAweDkzODE6IDB4NTIwMCxcbiAgICAweDkzODI6IDB4NTUxMCxcbiAgICAweDkzODM6IDB4NTg1NCxcbiAgICAweDkzODQ6IDB4NTg1OCxcbiAgICAweDkzODU6IDB4NTk1NyxcbiAgICAweDkzODY6IDB4NUI5NSxcbiAgICAweDkzODc6IDB4NUNGNixcbiAgICAweDkzODg6IDB4NUQ4QixcbiAgICAweDkzODk6IDB4NjBCQyxcbiAgICAweDkzOEE6IDB4NjI5NSxcbiAgICAweDkzOEI6IDB4NjQyRCxcbiAgICAweDkzOEM6IDB4Njc3MSxcbiAgICAweDkzOEQ6IDB4Njg0MyxcbiAgICAweDkzOEU6IDB4NjhCQyxcbiAgICAweDkzOEY6IDB4NjhERixcbiAgICAweDkzOTA6IDB4NzZENyxcbiAgICAweDkzOTE6IDB4NkREOCxcbiAgICAweDkzOTI6IDB4NkU2RixcbiAgICAweDkzOTM6IDB4NkQ5QixcbiAgICAweDkzOTQ6IDB4NzA2RixcbiAgICAweDkzOTU6IDB4NzFDOCxcbiAgICAweDkzOTY6IDB4NUY1MyxcbiAgICAweDkzOTc6IDB4NzVEOCxcbiAgICAweDkzOTg6IDB4Nzk3NyxcbiAgICAweDkzOTk6IDB4N0I0OSxcbiAgICAweDkzOUE6IDB4N0I1NCxcbiAgICAweDkzOUI6IDB4N0I1MixcbiAgICAweDkzOUM6IDB4N0NENixcbiAgICAweDkzOUQ6IDB4N0Q3MSxcbiAgICAweDkzOUU6IDB4NTIzMCxcbiAgICAweDkzOUY6IDB4ODQ2MyxcbiAgICAweDkzQTA6IDB4ODU2OSxcbiAgICAweDkzQTE6IDB4ODVFNCxcbiAgICAweDkzQTI6IDB4OEEwRSxcbiAgICAweDkzQTM6IDB4OEIwNCxcbiAgICAweDkzQTQ6IDB4OEM0NixcbiAgICAweDkzQTU6IDB4OEUwRixcbiAgICAweDkzQTY6IDB4OTAwMyxcbiAgICAweDkzQTc6IDB4OTAwRixcbiAgICAweDkzQTg6IDB4OTQxOSxcbiAgICAweDkzQTk6IDB4OTY3NixcbiAgICAweDkzQUE6IDB4OTgyRCxcbiAgICAweDkzQUI6IDB4OUEzMCxcbiAgICAweDkzQUM6IDB4OTVEOCxcbiAgICAweDkzQUQ6IDB4NTBDRCxcbiAgICAweDkzQUU6IDB4NTJENSxcbiAgICAweDkzQUY6IDB4NTQwQyxcbiAgICAweDkzQjA6IDB4NTgwMixcbiAgICAweDkzQjE6IDB4NUMwRSxcbiAgICAweDkzQjI6IDB4NjFBNyxcbiAgICAweDkzQjM6IDB4NjQ5RSxcbiAgICAweDkzQjQ6IDB4NkQxRSxcbiAgICAweDkzQjU6IDB4NzdCMyxcbiAgICAweDkzQjY6IDB4N0FFNSxcbiAgICAweDkzQjc6IDB4ODBGNCxcbiAgICAweDkzQjg6IDB4ODQwNCxcbiAgICAweDkzQjk6IDB4OTA1MyxcbiAgICAweDkzQkE6IDB4OTI4NSxcbiAgICAweDkzQkI6IDB4NUNFMCxcbiAgICAweDkzQkM6IDB4OUQwNyxcbiAgICAweDkzQkQ6IDB4NTMzRixcbiAgICAweDkzQkU6IDB4NUY5NyxcbiAgICAweDkzQkY6IDB4NUZCMyxcbiAgICAweDkzQzA6IDB4NkQ5QyxcbiAgICAweDkzQzE6IDB4NzI3OSxcbiAgICAweDkzQzI6IDB4Nzc2MyxcbiAgICAweDkzQzM6IDB4NzlCRixcbiAgICAweDkzQzQ6IDB4N0JFNCxcbiAgICAweDkzQzU6IDB4NkJEMixcbiAgICAweDkzQzY6IDB4NzJFQyxcbiAgICAweDkzQzc6IDB4OEFBRCxcbiAgICAweDkzQzg6IDB4NjgwMyxcbiAgICAweDkzQzk6IDB4NkE2MSxcbiAgICAweDkzQ0E6IDB4NTFGOCxcbiAgICAweDkzQ0I6IDB4N0E4MSxcbiAgICAweDkzQ0M6IDB4NjkzNCxcbiAgICAweDkzQ0Q6IDB4NUM0QSxcbiAgICAweDkzQ0U6IDB4OUNGNixcbiAgICAweDkzQ0Y6IDB4ODJFQixcbiAgICAweDkzRDA6IDB4NUJDNSxcbiAgICAweDkzRDE6IDB4OTE0OSxcbiAgICAweDkzRDI6IDB4NzAxRSxcbiAgICAweDkzRDM6IDB4NTY3OCxcbiAgICAweDkzRDQ6IDB4NUM2RixcbiAgICAweDkzRDU6IDB4NjBDNyxcbiAgICAweDkzRDY6IDB4NjU2NixcbiAgICAweDkzRDc6IDB4NkM4QyxcbiAgICAweDkzRDg6IDB4OEM1QSxcbiAgICAweDkzRDk6IDB4OTA0MSxcbiAgICAweDkzREE6IDB4OTgxMyxcbiAgICAweDkzREI6IDB4NTQ1MSxcbiAgICAweDkzREM6IDB4NjZDNyxcbiAgICAweDkzREQ6IDB4OTIwRCxcbiAgICAweDkzREU6IDB4NTk0OCxcbiAgICAweDkzREY6IDB4OTBBMyxcbiAgICAweDkzRTA6IDB4NTE4NSxcbiAgICAweDkzRTE6IDB4NEU0RCxcbiAgICAweDkzRTI6IDB4NTFFQSxcbiAgICAweDkzRTM6IDB4ODU5OSxcbiAgICAweDkzRTQ6IDB4OEIwRSxcbiAgICAweDkzRTU6IDB4NzA1OCxcbiAgICAweDkzRTY6IDB4NjM3QSxcbiAgICAweDkzRTc6IDB4OTM0QixcbiAgICAweDkzRTg6IDB4Njk2MixcbiAgICAweDkzRTk6IDB4OTlCNCxcbiAgICAweDkzRUE6IDB4N0UwNCxcbiAgICAweDkzRUI6IDB4NzU3NyxcbiAgICAweDkzRUM6IDB4NTM1NyxcbiAgICAweDkzRUQ6IDB4Njk2MCxcbiAgICAweDkzRUU6IDB4OEVERixcbiAgICAweDkzRUY6IDB4OTZFMyxcbiAgICAweDkzRjA6IDB4NkM1RCxcbiAgICAweDkzRjE6IDB4NEU4QyxcbiAgICAweDkzRjI6IDB4NUMzQyxcbiAgICAweDkzRjM6IDB4NUYxMCxcbiAgICAweDkzRjQ6IDB4OEZFOSxcbiAgICAweDkzRjU6IDB4NTMwMixcbiAgICAweDkzRjY6IDB4OENEMSxcbiAgICAweDkzRjc6IDB4ODA4OSxcbiAgICAweDkzRjg6IDB4ODY3OSxcbiAgICAweDkzRjk6IDB4NUVGRixcbiAgICAweDkzRkE6IDB4NjVFNSxcbiAgICAweDkzRkI6IDB4NEU3MyxcbiAgICAweDkzRkM6IDB4NTE2NSxcbiAgICAweDk0NDA6IDB4NTk4MixcbiAgICAweDk0NDE6IDB4NUMzRixcbiAgICAweDk0NDI6IDB4OTdFRSxcbiAgICAweDk0NDM6IDB4NEVGQixcbiAgICAweDk0NDQ6IDB4NTk4QSxcbiAgICAweDk0NDU6IDB4NUZDRCxcbiAgICAweDk0NDY6IDB4OEE4RCxcbiAgICAweDk0NDc6IDB4NkZFMSxcbiAgICAweDk0NDg6IDB4NzlCMCxcbiAgICAweDk0NDk6IDB4Nzk2MixcbiAgICAweDk0NEE6IDB4NUJFNyxcbiAgICAweDk0NEI6IDB4ODQ3MSxcbiAgICAweDk0NEM6IDB4NzMyQixcbiAgICAweDk0NEQ6IDB4NzFCMSxcbiAgICAweDk0NEU6IDB4NUU3NCxcbiAgICAweDk0NEY6IDB4NUZGNSxcbiAgICAweDk0NTA6IDB4NjM3QixcbiAgICAweDk0NTE6IDB4NjQ5QSxcbiAgICAweDk0NTI6IDB4NzFDMyxcbiAgICAweDk0NTM6IDB4N0M5OCxcbiAgICAweDk0NTQ6IDB4NEU0MyxcbiAgICAweDk0NTU6IDB4NUVGQyxcbiAgICAweDk0NTY6IDB4NEU0QixcbiAgICAweDk0NTc6IDB4NTdEQyxcbiAgICAweDk0NTg6IDB4NTZBMixcbiAgICAweDk0NTk6IDB4NjBBOSxcbiAgICAweDk0NUE6IDB4NkZDMyxcbiAgICAweDk0NUI6IDB4N0QwRCxcbiAgICAweDk0NUM6IDB4ODBGRCxcbiAgICAweDk0NUQ6IDB4ODEzMyxcbiAgICAweDk0NUU6IDB4ODFCRixcbiAgICAweDk0NUY6IDB4OEZCMixcbiAgICAweDk0NjA6IDB4ODk5NyxcbiAgICAweDk0NjE6IDB4ODZBNCxcbiAgICAweDk0NjI6IDB4NURGNCxcbiAgICAweDk0NjM6IDB4NjI4QSxcbiAgICAweDk0NjQ6IDB4NjRBRCxcbiAgICAweDk0NjU6IDB4ODk4NyxcbiAgICAweDk0NjY6IDB4Njc3NyxcbiAgICAweDk0Njc6IDB4NkNFMixcbiAgICAweDk0Njg6IDB4NkQzRSxcbiAgICAweDk0Njk6IDB4NzQzNixcbiAgICAweDk0NkE6IDB4NzgzNCxcbiAgICAweDk0NkI6IDB4NUE0NixcbiAgICAweDk0NkM6IDB4N0Y3NSxcbiAgICAweDk0NkQ6IDB4ODJBRCxcbiAgICAweDk0NkU6IDB4OTlBQyxcbiAgICAweDk0NkY6IDB4NEZGMyxcbiAgICAweDk0NzA6IDB4NUVDMyxcbiAgICAweDk0NzE6IDB4NjJERCxcbiAgICAweDk0NzI6IDB4NjM5MixcbiAgICAweDk0NzM6IDB4NjU1NyxcbiAgICAweDk0NzQ6IDB4Njc2RixcbiAgICAweDk0NzU6IDB4NzZDMyxcbiAgICAweDk0NzY6IDB4NzI0QyxcbiAgICAweDk0Nzc6IDB4ODBDQyxcbiAgICAweDk0Nzg6IDB4ODBCQSxcbiAgICAweDk0Nzk6IDB4OEYyOSxcbiAgICAweDk0N0E6IDB4OTE0RCxcbiAgICAweDk0N0I6IDB4NTAwRCxcbiAgICAweDk0N0M6IDB4NTdGOSxcbiAgICAweDk0N0Q6IDB4NUE5MixcbiAgICAweDk0N0U6IDB4Njg4NSxcbiAgICAweDk0ODA6IDB4Njk3MyxcbiAgICAweDk0ODE6IDB4NzE2NCxcbiAgICAweDk0ODI6IDB4NzJGRCxcbiAgICAweDk0ODM6IDB4OENCNyxcbiAgICAweDk0ODQ6IDB4NThGMixcbiAgICAweDk0ODU6IDB4OENFMCxcbiAgICAweDk0ODY6IDB4OTY2QSxcbiAgICAweDk0ODc6IDB4OTAxOSxcbiAgICAweDk0ODg6IDB4ODc3RixcbiAgICAweDk0ODk6IDB4NzlFNCxcbiAgICAweDk0OEE6IDB4NzdFNyxcbiAgICAweDk0OEI6IDB4ODQyOSxcbiAgICAweDk0OEM6IDB4NEYyRixcbiAgICAweDk0OEQ6IDB4NTI2NSxcbiAgICAweDk0OEU6IDB4NTM1QSxcbiAgICAweDk0OEY6IDB4NjJDRCxcbiAgICAweDk0OTA6IDB4NjdDRixcbiAgICAweDk0OTE6IDB4NkNDQSxcbiAgICAweDk0OTI6IDB4NzY3RCxcbiAgICAweDk0OTM6IDB4N0I5NCxcbiAgICAweDk0OTQ6IDB4N0M5NSxcbiAgICAweDk0OTU6IDB4ODIzNixcbiAgICAweDk0OTY6IDB4ODU4NCxcbiAgICAweDk0OTc6IDB4OEZFQixcbiAgICAweDk0OTg6IDB4NjZERCxcbiAgICAweDk0OTk6IDB4NkYyMCxcbiAgICAweDk0OUE6IDB4NzIwNixcbiAgICAweDk0OUI6IDB4N0UxQixcbiAgICAweDk0OUM6IDB4ODNBQixcbiAgICAweDk0OUQ6IDB4OTlDMSxcbiAgICAweDk0OUU6IDB4OUVBNixcbiAgICAweDk0OUY6IDB4NTFGRCxcbiAgICAweDk0QTA6IDB4N0JCMSxcbiAgICAweDk0QTE6IDB4Nzg3MixcbiAgICAweDk0QTI6IDB4N0JCOCxcbiAgICAweDk0QTM6IDB4ODA4NyxcbiAgICAweDk0QTQ6IDB4N0I0OCxcbiAgICAweDk0QTU6IDB4NkFFOCxcbiAgICAweDk0QTY6IDB4NUU2MSxcbiAgICAweDk0QTc6IDB4ODA4QyxcbiAgICAweDk0QTg6IDB4NzU1MSxcbiAgICAweDk0QTk6IDB4NzU2MCxcbiAgICAweDk0QUE6IDB4NTE2QixcbiAgICAweDk0QUI6IDB4OTI2MixcbiAgICAweDk0QUM6IDB4NkU4QyxcbiAgICAweDk0QUQ6IDB4NzY3QSxcbiAgICAweDk0QUU6IDB4OTE5NyxcbiAgICAweDk0QUY6IDB4OUFFQSxcbiAgICAweDk0QjA6IDB4NEYxMCxcbiAgICAweDk0QjE6IDB4N0Y3MCxcbiAgICAweDk0QjI6IDB4NjI5QyxcbiAgICAweDk0QjM6IDB4N0I0RixcbiAgICAweDk0QjQ6IDB4OTVBNSxcbiAgICAweDk0QjU6IDB4OUNFOSxcbiAgICAweDk0QjY6IDB4NTY3QSxcbiAgICAweDk0Qjc6IDB4NTg1OSxcbiAgICAweDk0Qjg6IDB4ODZFNCxcbiAgICAweDk0Qjk6IDB4OTZCQyxcbiAgICAweDk0QkE6IDB4NEYzNCxcbiAgICAweDk0QkI6IDB4NTIyNCxcbiAgICAweDk0QkM6IDB4NTM0QSxcbiAgICAweDk0QkQ6IDB4NTNDRCxcbiAgICAweDk0QkU6IDB4NTNEQixcbiAgICAweDk0QkY6IDB4NUUwNixcbiAgICAweDk0QzA6IDB4NjQyQyxcbiAgICAweDk0QzE6IDB4NjU5MSxcbiAgICAweDk0QzI6IDB4Njc3RixcbiAgICAweDk0QzM6IDB4NkMzRSxcbiAgICAweDk0QzQ6IDB4NkM0RSxcbiAgICAweDk0QzU6IDB4NzI0OCxcbiAgICAweDk0QzY6IDB4NzJBRixcbiAgICAweDk0Qzc6IDB4NzNFRCxcbiAgICAweDk0Qzg6IDB4NzU1NCxcbiAgICAweDk0Qzk6IDB4N0U0MSxcbiAgICAweDk0Q0E6IDB4ODIyQyxcbiAgICAweDk0Q0I6IDB4ODVFOSxcbiAgICAweDk0Q0M6IDB4OENBOSxcbiAgICAweDk0Q0Q6IDB4N0JDNCxcbiAgICAweDk0Q0U6IDB4OTFDNixcbiAgICAweDk0Q0Y6IDB4NzE2OSxcbiAgICAweDk0RDA6IDB4OTgxMixcbiAgICAweDk0RDE6IDB4OThFRixcbiAgICAweDk0RDI6IDB4NjMzRCxcbiAgICAweDk0RDM6IDB4NjY2OSxcbiAgICAweDk0RDQ6IDB4NzU2QSxcbiAgICAweDk0RDU6IDB4NzZFNCxcbiAgICAweDk0RDY6IDB4NzhEMCxcbiAgICAweDk0RDc6IDB4ODU0MyxcbiAgICAweDk0RDg6IDB4ODZFRSxcbiAgICAweDk0RDk6IDB4NTMyQSxcbiAgICAweDk0REE6IDB4NTM1MSxcbiAgICAweDk0REI6IDB4NTQyNixcbiAgICAweDk0REM6IDB4NTk4MyxcbiAgICAweDk0REQ6IDB4NUU4NyxcbiAgICAweDk0REU6IDB4NUY3QyxcbiAgICAweDk0REY6IDB4NjBCMixcbiAgICAweDk0RTA6IDB4NjI0OSxcbiAgICAweDk0RTE6IDB4NjI3OSxcbiAgICAweDk0RTI6IDB4NjJBQixcbiAgICAweDk0RTM6IDB4NjU5MCxcbiAgICAweDk0RTQ6IDB4NkJENCxcbiAgICAweDk0RTU6IDB4NkNDQyxcbiAgICAweDk0RTY6IDB4NzVCMixcbiAgICAweDk0RTc6IDB4NzZBRSxcbiAgICAweDk0RTg6IDB4Nzg5MSxcbiAgICAweDk0RTk6IDB4NzlEOCxcbiAgICAweDk0RUE6IDB4N0RDQixcbiAgICAweDk0RUI6IDB4N0Y3NyxcbiAgICAweDk0RUM6IDB4ODBBNSxcbiAgICAweDk0RUQ6IDB4ODhBQixcbiAgICAweDk0RUU6IDB4OEFCOSxcbiAgICAweDk0RUY6IDB4OENCQixcbiAgICAweDk0RjA6IDB4OTA3RixcbiAgICAweDk0RjE6IDB4OTc1RSxcbiAgICAweDk0RjI6IDB4OThEQixcbiAgICAweDk0RjM6IDB4NkEwQixcbiAgICAweDk0RjQ6IDB4N0MzOCxcbiAgICAweDk0RjU6IDB4NTA5OSxcbiAgICAweDk0RjY6IDB4NUMzRSxcbiAgICAweDk0Rjc6IDB4NUZBRSxcbiAgICAweDk0Rjg6IDB4Njc4NyxcbiAgICAweDk0Rjk6IDB4NkJEOCxcbiAgICAweDk0RkE6IDB4NzQzNSxcbiAgICAweDk0RkI6IDB4NzcwOSxcbiAgICAweDk0RkM6IDB4N0Y4RSxcbiAgICAweDk1NDA6IDB4OUYzQixcbiAgICAweDk1NDE6IDB4NjdDQSxcbiAgICAweDk1NDI6IDB4N0ExNyxcbiAgICAweDk1NDM6IDB4NTMzOSxcbiAgICAweDk1NDQ6IDB4NzU4QixcbiAgICAweDk1NDU6IDB4OUFFRCxcbiAgICAweDk1NDY6IDB4NUY2NixcbiAgICAweDk1NDc6IDB4ODE5RCxcbiAgICAweDk1NDg6IDB4ODNGMSxcbiAgICAweDk1NDk6IDB4ODA5OCxcbiAgICAweDk1NEE6IDB4NUYzQyxcbiAgICAweDk1NEI6IDB4NUZDNSxcbiAgICAweDk1NEM6IDB4NzU2MixcbiAgICAweDk1NEQ6IDB4N0I0NixcbiAgICAweDk1NEU6IDB4OTAzQyxcbiAgICAweDk1NEY6IDB4Njg2NyxcbiAgICAweDk1NTA6IDB4NTlFQixcbiAgICAweDk1NTE6IDB4NUE5QixcbiAgICAweDk1NTI6IDB4N0QxMCxcbiAgICAweDk1NTM6IDB4NzY3RSxcbiAgICAweDk1NTQ6IDB4OEIyQyxcbiAgICAweDk1NTU6IDB4NEZGNSxcbiAgICAweDk1NTY6IDB4NUY2QSxcbiAgICAweDk1NTc6IDB4NkExOSxcbiAgICAweDk1NTg6IDB4NkMzNyxcbiAgICAweDk1NTk6IDB4NkYwMixcbiAgICAweDk1NUE6IDB4NzRFMixcbiAgICAweDk1NUI6IDB4Nzk2OCxcbiAgICAweDk1NUM6IDB4ODg2OCxcbiAgICAweDk1NUQ6IDB4OEE1NSxcbiAgICAweDk1NUU6IDB4OEM3OSxcbiAgICAweDk1NUY6IDB4NUVERixcbiAgICAweDk1NjA6IDB4NjNDRixcbiAgICAweDk1NjE6IDB4NzVDNSxcbiAgICAweDk1NjI6IDB4NzlEMixcbiAgICAweDk1NjM6IDB4ODJENyxcbiAgICAweDk1NjQ6IDB4OTMyOCxcbiAgICAweDk1NjU6IDB4OTJGMixcbiAgICAweDk1NjY6IDB4ODQ5QyxcbiAgICAweDk1Njc6IDB4ODZFRCxcbiAgICAweDk1Njg6IDB4OUMyRCxcbiAgICAweDk1Njk6IDB4NTRDMSxcbiAgICAweDk1NkE6IDB4NUY2QyxcbiAgICAweDk1NkI6IDB4NjU4QyxcbiAgICAweDk1NkM6IDB4NkQ1QyxcbiAgICAweDk1NkQ6IDB4NzAxNSxcbiAgICAweDk1NkU6IDB4OENBNyxcbiAgICAweDk1NkY6IDB4OENEMyxcbiAgICAweDk1NzA6IDB4OTgzQixcbiAgICAweDk1NzE6IDB4NjU0RixcbiAgICAweDk1NzI6IDB4NzRGNixcbiAgICAweDk1NzM6IDB4NEUwRCxcbiAgICAweDk1NzQ6IDB4NEVEOCxcbiAgICAweDk1NzU6IDB4NTdFMCxcbiAgICAweDk1NzY6IDB4NTkyQixcbiAgICAweDk1Nzc6IDB4NUE2NixcbiAgICAweDk1Nzg6IDB4NUJDQyxcbiAgICAweDk1Nzk6IDB4NTFBOCxcbiAgICAweDk1N0E6IDB4NUUwMyxcbiAgICAweDk1N0I6IDB4NUU5QyxcbiAgICAweDk1N0M6IDB4NjAxNixcbiAgICAweDk1N0Q6IDB4NjI3NixcbiAgICAweDk1N0U6IDB4NjU3NyxcbiAgICAweDk1ODA6IDB4NjVBNyxcbiAgICAweDk1ODE6IDB4NjY2RSxcbiAgICAweDk1ODI6IDB4NkQ2RSxcbiAgICAweDk1ODM6IDB4NzIzNixcbiAgICAweDk1ODQ6IDB4N0IyNixcbiAgICAweDk1ODU6IDB4ODE1MCxcbiAgICAweDk1ODY6IDB4ODE5QSxcbiAgICAweDk1ODc6IDB4ODI5OSxcbiAgICAweDk1ODg6IDB4OEI1QyxcbiAgICAweDk1ODk6IDB4OENBMCxcbiAgICAweDk1OEE6IDB4OENFNixcbiAgICAweDk1OEI6IDB4OEQ3NCxcbiAgICAweDk1OEM6IDB4OTYxQyxcbiAgICAweDk1OEQ6IDB4OTY0NCxcbiAgICAweDk1OEU6IDB4NEZBRSxcbiAgICAweDk1OEY6IDB4NjRBQixcbiAgICAweDk1OTA6IDB4NkI2NixcbiAgICAweDk1OTE6IDB4ODIxRSxcbiAgICAweDk1OTI6IDB4ODQ2MSxcbiAgICAweDk1OTM6IDB4ODU2QSxcbiAgICAweDk1OTQ6IDB4OTBFOCxcbiAgICAweDk1OTU6IDB4NUMwMSxcbiAgICAweDk1OTY6IDB4Njk1MyxcbiAgICAweDk1OTc6IDB4OThBOCxcbiAgICAweDk1OTg6IDB4ODQ3QSxcbiAgICAweDk1OTk6IDB4ODU1NyxcbiAgICAweDk1OUE6IDB4NEYwRixcbiAgICAweDk1OUI6IDB4NTI2RixcbiAgICAweDk1OUM6IDB4NUZBOSxcbiAgICAweDk1OUQ6IDB4NUU0NSxcbiAgICAweDk1OUU6IDB4NjcwRCxcbiAgICAweDk1OUY6IDB4Nzk4RixcbiAgICAweDk1QTA6IDB4ODE3OSxcbiAgICAweDk1QTE6IDB4ODkwNyxcbiAgICAweDk1QTI6IDB4ODk4NixcbiAgICAweDk1QTM6IDB4NkRGNSxcbiAgICAweDk1QTQ6IDB4NUYxNyxcbiAgICAweDk1QTU6IDB4NjI1NSxcbiAgICAweDk1QTY6IDB4NkNCOCxcbiAgICAweDk1QTc6IDB4NEVDRixcbiAgICAweDk1QTg6IDB4NzI2OSxcbiAgICAweDk1QTk6IDB4OUI5MixcbiAgICAweDk1QUE6IDB4NTIwNixcbiAgICAweDk1QUI6IDB4NTQzQixcbiAgICAweDk1QUM6IDB4NTY3NCxcbiAgICAweDk1QUQ6IDB4NThCMyxcbiAgICAweDk1QUU6IDB4NjFBNCxcbiAgICAweDk1QUY6IDB4NjI2RSxcbiAgICAweDk1QjA6IDB4NzExQSxcbiAgICAweDk1QjE6IDB4NTk2RSxcbiAgICAweDk1QjI6IDB4N0M4OSxcbiAgICAweDk1QjM6IDB4N0NERSxcbiAgICAweDk1QjQ6IDB4N0QxQixcbiAgICAweDk1QjU6IDB4OTZGMCxcbiAgICAweDk1QjY6IDB4NjU4NyxcbiAgICAweDk1Qjc6IDB4ODA1RSxcbiAgICAweDk1Qjg6IDB4NEUxOSxcbiAgICAweDk1Qjk6IDB4NEY3NSxcbiAgICAweDk1QkE6IDB4NTE3NSxcbiAgICAweDk1QkI6IDB4NTg0MCxcbiAgICAweDk1QkM6IDB4NUU2MyxcbiAgICAweDk1QkQ6IDB4NUU3MyxcbiAgICAweDk1QkU6IDB4NUYwQSxcbiAgICAweDk1QkY6IDB4NjdDNCxcbiAgICAweDk1QzA6IDB4NEUyNixcbiAgICAweDk1QzE6IDB4ODUzRCxcbiAgICAweDk1QzI6IDB4OTU4OSxcbiAgICAweDk1QzM6IDB4OTY1QixcbiAgICAweDk1QzQ6IDB4N0M3MyxcbiAgICAweDk1QzU6IDB4OTgwMSxcbiAgICAweDk1QzY6IDB4NTBGQixcbiAgICAweDk1Qzc6IDB4NThDMSxcbiAgICAweDk1Qzg6IDB4NzY1NixcbiAgICAweDk1Qzk6IDB4NzhBNyxcbiAgICAweDk1Q0E6IDB4NTIyNSxcbiAgICAweDk1Q0I6IDB4NzdBNSxcbiAgICAweDk1Q0M6IDB4ODUxMSxcbiAgICAweDk1Q0Q6IDB4N0I4NixcbiAgICAweDk1Q0U6IDB4NTA0RixcbiAgICAweDk1Q0Y6IDB4NTkwOSxcbiAgICAweDk1RDA6IDB4NzI0NyxcbiAgICAweDk1RDE6IDB4N0JDNyxcbiAgICAweDk1RDI6IDB4N0RFOCxcbiAgICAweDk1RDM6IDB4OEZCQSxcbiAgICAweDk1RDQ6IDB4OEZENCxcbiAgICAweDk1RDU6IDB4OTA0RCxcbiAgICAweDk1RDY6IDB4NEZCRixcbiAgICAweDk1RDc6IDB4NTJDOSxcbiAgICAweDk1RDg6IDB4NUEyOSxcbiAgICAweDk1RDk6IDB4NUYwMSxcbiAgICAweDk1REE6IDB4OTdBRCxcbiAgICAweDk1REI6IDB4NEZERCxcbiAgICAweDk1REM6IDB4ODIxNyxcbiAgICAweDk1REQ6IDB4OTJFQSxcbiAgICAweDk1REU6IDB4NTcwMyxcbiAgICAweDk1REY6IDB4NjM1NSxcbiAgICAweDk1RTA6IDB4NkI2OSxcbiAgICAweDk1RTE6IDB4NzUyQixcbiAgICAweDk1RTI6IDB4ODhEQyxcbiAgICAweDk1RTM6IDB4OEYxNCxcbiAgICAweDk1RTQ6IDB4N0E0MixcbiAgICAweDk1RTU6IDB4NTJERixcbiAgICAweDk1RTY6IDB4NTg5MyxcbiAgICAweDk1RTc6IDB4NjE1NSxcbiAgICAweDk1RTg6IDB4NjIwQSxcbiAgICAweDk1RTk6IDB4NjZBRSxcbiAgICAweDk1RUE6IDB4NkJDRCxcbiAgICAweDk1RUI6IDB4N0MzRixcbiAgICAweDk1RUM6IDB4ODNFOSxcbiAgICAweDk1RUQ6IDB4NTAyMyxcbiAgICAweDk1RUU6IDB4NEZGOCxcbiAgICAweDk1RUY6IDB4NTMwNSxcbiAgICAweDk1RjA6IDB4NTQ0NixcbiAgICAweDk1RjE6IDB4NTgzMSxcbiAgICAweDk1RjI6IDB4NTk0OSxcbiAgICAweDk1RjM6IDB4NUI5RCxcbiAgICAweDk1RjQ6IDB4NUNGMCxcbiAgICAweDk1RjU6IDB4NUNFRixcbiAgICAweDk1RjY6IDB4NUQyOSxcbiAgICAweDk1Rjc6IDB4NUU5NixcbiAgICAweDk1Rjg6IDB4NjJCMSxcbiAgICAweDk1Rjk6IDB4NjM2NyxcbiAgICAweDk1RkE6IDB4NjUzRSxcbiAgICAweDk1RkI6IDB4NjVCOSxcbiAgICAweDk1RkM6IDB4NjcwQixcbiAgICAweDk2NDA6IDB4NkNENSxcbiAgICAweDk2NDE6IDB4NkNFMSxcbiAgICAweDk2NDI6IDB4NzBGOSxcbiAgICAweDk2NDM6IDB4NzgzMixcbiAgICAweDk2NDQ6IDB4N0UyQixcbiAgICAweDk2NDU6IDB4ODBERSxcbiAgICAweDk2NDY6IDB4ODJCMyxcbiAgICAweDk2NDc6IDB4ODQwQyxcbiAgICAweDk2NDg6IDB4ODRFQyxcbiAgICAweDk2NDk6IDB4ODcwMixcbiAgICAweDk2NEE6IDB4ODkxMixcbiAgICAweDk2NEI6IDB4OEEyQSxcbiAgICAweDk2NEM6IDB4OEM0QSxcbiAgICAweDk2NEQ6IDB4OTBBNixcbiAgICAweDk2NEU6IDB4OTJEMixcbiAgICAweDk2NEY6IDB4OThGRCxcbiAgICAweDk2NTA6IDB4OUNGMyxcbiAgICAweDk2NTE6IDB4OUQ2QyxcbiAgICAweDk2NTI6IDB4NEU0RixcbiAgICAweDk2NTM6IDB4NEVBMSxcbiAgICAweDk2NTQ6IDB4NTA4RCxcbiAgICAweDk2NTU6IDB4NTI1NixcbiAgICAweDk2NTY6IDB4NTc0QSxcbiAgICAweDk2NTc6IDB4NTlBOCxcbiAgICAweDk2NTg6IDB4NUUzRCxcbiAgICAweDk2NTk6IDB4NUZEOCxcbiAgICAweDk2NUE6IDB4NUZEOSxcbiAgICAweDk2NUI6IDB4NjIzRixcbiAgICAweDk2NUM6IDB4NjZCNCxcbiAgICAweDk2NUQ6IDB4NjcxQixcbiAgICAweDk2NUU6IDB4NjdEMCxcbiAgICAweDk2NUY6IDB4NjhEMixcbiAgICAweDk2NjA6IDB4NTE5MixcbiAgICAweDk2NjE6IDB4N0QyMSxcbiAgICAweDk2NjI6IDB4ODBBQSxcbiAgICAweDk2NjM6IDB4ODFBOCxcbiAgICAweDk2NjQ6IDB4OEIwMCxcbiAgICAweDk2NjU6IDB4OEM4QyxcbiAgICAweDk2NjY6IDB4OENCRixcbiAgICAweDk2Njc6IDB4OTI3RSxcbiAgICAweDk2Njg6IDB4OTYzMixcbiAgICAweDk2Njk6IDB4NTQyMCxcbiAgICAweDk2NkE6IDB4OTgyQyxcbiAgICAweDk2NkI6IDB4NTMxNyxcbiAgICAweDk2NkM6IDB4NTBENSxcbiAgICAweDk2NkQ6IDB4NTM1QyxcbiAgICAweDk2NkU6IDB4NThBOCxcbiAgICAweDk2NkY6IDB4NjRCMixcbiAgICAweDk2NzA6IDB4NjczNCxcbiAgICAweDk2NzE6IDB4NzI2NyxcbiAgICAweDk2NzI6IDB4Nzc2NixcbiAgICAweDk2NzM6IDB4N0E0NixcbiAgICAweDk2NzQ6IDB4OTFFNixcbiAgICAweDk2NzU6IDB4NTJDMyxcbiAgICAweDk2NzY6IDB4NkNBMSxcbiAgICAweDk2Nzc6IDB4NkI4NixcbiAgICAweDk2Nzg6IDB4NTgwMCxcbiAgICAweDk2Nzk6IDB4NUU0QyxcbiAgICAweDk2N0E6IDB4NTk1NCxcbiAgICAweDk2N0I6IDB4NjcyQyxcbiAgICAweDk2N0M6IDB4N0ZGQixcbiAgICAweDk2N0Q6IDB4NTFFMSxcbiAgICAweDk2N0U6IDB4NzZDNixcbiAgICAweDk2ODA6IDB4NjQ2OSxcbiAgICAweDk2ODE6IDB4NzhFOCxcbiAgICAweDk2ODI6IDB4OUI1NCxcbiAgICAweDk2ODM6IDB4OUVCQixcbiAgICAweDk2ODQ6IDB4NTdDQixcbiAgICAweDk2ODU6IDB4NTlCOSxcbiAgICAweDk2ODY6IDB4NjYyNyxcbiAgICAweDk2ODc6IDB4Njc5QSxcbiAgICAweDk2ODg6IDB4NkJDRSxcbiAgICAweDk2ODk6IDB4NTRFOSxcbiAgICAweDk2OEE6IDB4NjlEOSxcbiAgICAweDk2OEI6IDB4NUU1NSxcbiAgICAweDk2OEM6IDB4ODE5QyxcbiAgICAweDk2OEQ6IDB4Njc5NSxcbiAgICAweDk2OEU6IDB4OUJBQSxcbiAgICAweDk2OEY6IDB4NjdGRSxcbiAgICAweDk2OTA6IDB4OUM1MixcbiAgICAweDk2OTE6IDB4Njg1RCxcbiAgICAweDk2OTI6IDB4NEVBNixcbiAgICAweDk2OTM6IDB4NEZFMyxcbiAgICAweDk2OTQ6IDB4NTNDOCxcbiAgICAweDk2OTU6IDB4NjJCOSxcbiAgICAweDk2OTY6IDB4NjcyQixcbiAgICAweDk2OTc6IDB4NkNBQixcbiAgICAweDk2OTg6IDB4OEZDNCxcbiAgICAweDk2OTk6IDB4NEZBRCxcbiAgICAweDk2OUE6IDB4N0U2RCxcbiAgICAweDk2OUI6IDB4OUVCRixcbiAgICAweDk2OUM6IDB4NEUwNyxcbiAgICAweDk2OUQ6IDB4NjE2MixcbiAgICAweDk2OUU6IDB4NkU4MCxcbiAgICAweDk2OUY6IDB4NkYyQixcbiAgICAweDk2QTA6IDB4ODUxMyxcbiAgICAweDk2QTE6IDB4NTQ3MyxcbiAgICAweDk2QTI6IDB4NjcyQSxcbiAgICAweDk2QTM6IDB4OUI0NSxcbiAgICAweDk2QTQ6IDB4NURGMyxcbiAgICAweDk2QTU6IDB4N0I5NSxcbiAgICAweDk2QTY6IDB4NUNBQyxcbiAgICAweDk2QTc6IDB4NUJDNixcbiAgICAweDk2QTg6IDB4ODcxQyxcbiAgICAweDk2QTk6IDB4NkU0QSxcbiAgICAweDk2QUE6IDB4ODREMSxcbiAgICAweDk2QUI6IDB4N0ExNCxcbiAgICAweDk2QUM6IDB4ODEwOCxcbiAgICAweDk2QUQ6IDB4NTk5OSxcbiAgICAweDk2QUU6IDB4N0M4RCxcbiAgICAweDk2QUY6IDB4NkMxMSxcbiAgICAweDk2QjA6IDB4NzcyMCxcbiAgICAweDk2QjE6IDB4NTJEOSxcbiAgICAweDk2QjI6IDB4NTkyMixcbiAgICAweDk2QjM6IDB4NzEyMSxcbiAgICAweDk2QjQ6IDB4NzI1RixcbiAgICAweDk2QjU6IDB4NzdEQixcbiAgICAweDk2QjY6IDB4OTcyNyxcbiAgICAweDk2Qjc6IDB4OUQ2MSxcbiAgICAweDk2Qjg6IDB4NjkwQixcbiAgICAweDk2Qjk6IDB4NUE3RixcbiAgICAweDk2QkE6IDB4NUExOCxcbiAgICAweDk2QkI6IDB4NTFBNSxcbiAgICAweDk2QkM6IDB4NTQwRCxcbiAgICAweDk2QkQ6IDB4NTQ3RCxcbiAgICAweDk2QkU6IDB4NjYwRSxcbiAgICAweDk2QkY6IDB4NzZERixcbiAgICAweDk2QzA6IDB4OEZGNyxcbiAgICAweDk2QzE6IDB4OTI5OCxcbiAgICAweDk2QzI6IDB4OUNGNCxcbiAgICAweDk2QzM6IDB4NTlFQSxcbiAgICAweDk2QzQ6IDB4NzI1RCxcbiAgICAweDk2QzU6IDB4NkVDNSxcbiAgICAweDk2QzY6IDB4NTE0RCxcbiAgICAweDk2Qzc6IDB4NjhDOSxcbiAgICAweDk2Qzg6IDB4N0RCRixcbiAgICAweDk2Qzk6IDB4N0RFQyxcbiAgICAweDk2Q0E6IDB4OTc2MixcbiAgICAweDk2Q0I6IDB4OUVCQSxcbiAgICAweDk2Q0M6IDB4NjQ3OCxcbiAgICAweDk2Q0Q6IDB4NkEyMSxcbiAgICAweDk2Q0U6IDB4ODMwMixcbiAgICAweDk2Q0Y6IDB4NTk4NCxcbiAgICAweDk2RDA6IDB4NUI1RixcbiAgICAweDk2RDE6IDB4NkJEQixcbiAgICAweDk2RDI6IDB4NzMxQixcbiAgICAweDk2RDM6IDB4NzZGMixcbiAgICAweDk2RDQ6IDB4N0RCMixcbiAgICAweDk2RDU6IDB4ODAxNyxcbiAgICAweDk2RDY6IDB4ODQ5OSxcbiAgICAweDk2RDc6IDB4NTEzMixcbiAgICAweDk2RDg6IDB4NjcyOCxcbiAgICAweDk2RDk6IDB4OUVEOSxcbiAgICAweDk2REE6IDB4NzZFRSxcbiAgICAweDk2REI6IDB4Njc2MixcbiAgICAweDk2REM6IDB4NTJGRixcbiAgICAweDk2REQ6IDB4OTkwNSxcbiAgICAweDk2REU6IDB4NUMyNCxcbiAgICAweDk2REY6IDB4NjIzQixcbiAgICAweDk2RTA6IDB4N0M3RSxcbiAgICAweDk2RTE6IDB4OENCMCxcbiAgICAweDk2RTI6IDB4NTU0RixcbiAgICAweDk2RTM6IDB4NjBCNixcbiAgICAweDk2RTQ6IDB4N0QwQixcbiAgICAweDk2RTU6IDB4OTU4MCxcbiAgICAweDk2RTY6IDB4NTMwMSxcbiAgICAweDk2RTc6IDB4NEU1RixcbiAgICAweDk2RTg6IDB4NTFCNixcbiAgICAweDk2RTk6IDB4NTkxQyxcbiAgICAweDk2RUE6IDB4NzIzQSxcbiAgICAweDk2RUI6IDB4ODAzNixcbiAgICAweDk2RUM6IDB4OTFDRSxcbiAgICAweDk2RUQ6IDB4NUYyNSxcbiAgICAweDk2RUU6IDB4NzdFMixcbiAgICAweDk2RUY6IDB4NTM4NCxcbiAgICAweDk2RjA6IDB4NUY3OSxcbiAgICAweDk2RjE6IDB4N0QwNCxcbiAgICAweDk2RjI6IDB4ODVBQyxcbiAgICAweDk2RjM6IDB4OEEzMyxcbiAgICAweDk2RjQ6IDB4OEU4RCxcbiAgICAweDk2RjU6IDB4OTc1NixcbiAgICAweDk2RjY6IDB4NjdGMyxcbiAgICAweDk2Rjc6IDB4ODVBRSxcbiAgICAweDk2Rjg6IDB4OTQ1MyxcbiAgICAweDk2Rjk6IDB4NjEwOSxcbiAgICAweDk2RkE6IDB4NjEwOCxcbiAgICAweDk2RkI6IDB4NkNCOSxcbiAgICAweDk2RkM6IDB4NzY1MixcbiAgICAweDk3NDA6IDB4OEFFRCxcbiAgICAweDk3NDE6IDB4OEYzOCxcbiAgICAweDk3NDI6IDB4NTUyRixcbiAgICAweDk3NDM6IDB4NEY1MSxcbiAgICAweDk3NDQ6IDB4NTEyQSxcbiAgICAweDk3NDU6IDB4NTJDNyxcbiAgICAweDk3NDY6IDB4NTNDQixcbiAgICAweDk3NDc6IDB4NUJBNSxcbiAgICAweDk3NDg6IDB4NUU3RCxcbiAgICAweDk3NDk6IDB4NjBBMCxcbiAgICAweDk3NEE6IDB4NjE4MixcbiAgICAweDk3NEI6IDB4NjNENixcbiAgICAweDk3NEM6IDB4NjcwOSxcbiAgICAweDk3NEQ6IDB4NjdEQSxcbiAgICAweDk3NEU6IDB4NkU2NyxcbiAgICAweDk3NEY6IDB4NkQ4QyxcbiAgICAweDk3NTA6IDB4NzMzNixcbiAgICAweDk3NTE6IDB4NzMzNyxcbiAgICAweDk3NTI6IDB4NzUzMSxcbiAgICAweDk3NTM6IDB4Nzk1MCxcbiAgICAweDk3NTQ6IDB4ODhENSxcbiAgICAweDk3NTU6IDB4OEE5OCxcbiAgICAweDk3NTY6IDB4OTA0QSxcbiAgICAweDk3NTc6IDB4OTA5MSxcbiAgICAweDk3NTg6IDB4OTBGNSxcbiAgICAweDk3NTk6IDB4OTZDNCxcbiAgICAweDk3NUE6IDB4ODc4RCxcbiAgICAweDk3NUI6IDB4NTkxNSxcbiAgICAweDk3NUM6IDB4NEU4OCxcbiAgICAweDk3NUQ6IDB4NEY1OSxcbiAgICAweDk3NUU6IDB4NEUwRSxcbiAgICAweDk3NUY6IDB4OEE4OSxcbiAgICAweDk3NjA6IDB4OEYzRixcbiAgICAweDk3NjE6IDB4OTgxMCxcbiAgICAweDk3NjI6IDB4NTBBRCxcbiAgICAweDk3NjM6IDB4NUU3QyxcbiAgICAweDk3NjQ6IDB4NTk5NixcbiAgICAweDk3NjU6IDB4NUJCOSxcbiAgICAweDk3NjY6IDB4NUVCOCxcbiAgICAweDk3Njc6IDB4NjNEQSxcbiAgICAweDk3Njg6IDB4NjNGQSxcbiAgICAweDk3Njk6IDB4NjRDMSxcbiAgICAweDk3NkE6IDB4NjZEQyxcbiAgICAweDk3NkI6IDB4Njk0QSxcbiAgICAweDk3NkM6IDB4NjlEOCxcbiAgICAweDk3NkQ6IDB4NkQwQixcbiAgICAweDk3NkU6IDB4NkVCNixcbiAgICAweDk3NkY6IDB4NzE5NCxcbiAgICAweDk3NzA6IDB4NzUyOCxcbiAgICAweDk3NzE6IDB4N0FBRixcbiAgICAweDk3NzI6IDB4N0Y4QSxcbiAgICAweDk3NzM6IDB4ODAwMCxcbiAgICAweDk3NzQ6IDB4ODQ0OSxcbiAgICAweDk3NzU6IDB4ODRDOSxcbiAgICAweDk3NzY6IDB4ODk4MSxcbiAgICAweDk3Nzc6IDB4OEIyMSxcbiAgICAweDk3Nzg6IDB4OEUwQSxcbiAgICAweDk3Nzk6IDB4OTA2NSxcbiAgICAweDk3N0E6IDB4OTY3RCxcbiAgICAweDk3N0I6IDB4OTkwQSxcbiAgICAweDk3N0M6IDB4NjE3RSxcbiAgICAweDk3N0Q6IDB4NjI5MSxcbiAgICAweDk3N0U6IDB4NkIzMixcbiAgICAweDk3ODA6IDB4NkM4MyxcbiAgICAweDk3ODE6IDB4NkQ3NCxcbiAgICAweDk3ODI6IDB4N0ZDQyxcbiAgICAweDk3ODM6IDB4N0ZGQyxcbiAgICAweDk3ODQ6IDB4NkRDMCxcbiAgICAweDk3ODU6IDB4N0Y4NSxcbiAgICAweDk3ODY6IDB4ODdCQSxcbiAgICAweDk3ODc6IDB4ODhGOCxcbiAgICAweDk3ODg6IDB4Njc2NSxcbiAgICAweDk3ODk6IDB4ODNCMSxcbiAgICAweDk3OEE6IDB4OTgzQyxcbiAgICAweDk3OEI6IDB4OTZGNyxcbiAgICAweDk3OEM6IDB4NkQxQixcbiAgICAweDk3OEQ6IDB4N0Q2MSxcbiAgICAweDk3OEU6IDB4ODQzRCxcbiAgICAweDk3OEY6IDB4OTE2QSxcbiAgICAweDk3OTA6IDB4NEU3MSxcbiAgICAweDk3OTE6IDB4NTM3NSxcbiAgICAweDk3OTI6IDB4NUQ1MCxcbiAgICAweDk3OTM6IDB4NkIwNCxcbiAgICAweDk3OTQ6IDB4NkZFQixcbiAgICAweDk3OTU6IDB4ODVDRCxcbiAgICAweDk3OTY6IDB4ODYyRCxcbiAgICAweDk3OTc6IDB4ODlBNyxcbiAgICAweDk3OTg6IDB4NTIyOSxcbiAgICAweDk3OTk6IDB4NTQwRixcbiAgICAweDk3OUE6IDB4NUM2NSxcbiAgICAweDk3OUI6IDB4Njc0RSxcbiAgICAweDk3OUM6IDB4NjhBOCxcbiAgICAweDk3OUQ6IDB4NzQwNixcbiAgICAweDk3OUU6IDB4NzQ4MyxcbiAgICAweDk3OUY6IDB4NzVFMixcbiAgICAweDk3QTA6IDB4ODhDRixcbiAgICAweDk3QTE6IDB4ODhFMSxcbiAgICAweDk3QTI6IDB4OTFDQyxcbiAgICAweDk3QTM6IDB4OTZFMixcbiAgICAweDk3QTQ6IDB4OTY3OCxcbiAgICAweDk3QTU6IDB4NUY4QixcbiAgICAweDk3QTY6IDB4NzM4NyxcbiAgICAweDk3QTc6IDB4N0FDQixcbiAgICAweDk3QTg6IDB4ODQ0RSxcbiAgICAweDk3QTk6IDB4NjNBMCxcbiAgICAweDk3QUE6IDB4NzU2NSxcbiAgICAweDk3QUI6IDB4NTI4OSxcbiAgICAweDk3QUM6IDB4NkQ0MSxcbiAgICAweDk3QUQ6IDB4NkU5QyxcbiAgICAweDk3QUU6IDB4NzQwOSxcbiAgICAweDk3QUY6IDB4NzU1OSxcbiAgICAweDk3QjA6IDB4Nzg2QixcbiAgICAweDk3QjE6IDB4N0M5MixcbiAgICAweDk3QjI6IDB4OTY4NixcbiAgICAweDk3QjM6IDB4N0FEQyxcbiAgICAweDk3QjQ6IDB4OUY4RCxcbiAgICAweDk3QjU6IDB4NEZCNixcbiAgICAweDk3QjY6IDB4NjE2RSxcbiAgICAweDk3Qjc6IDB4NjVDNSxcbiAgICAweDk3Qjg6IDB4ODY1QyxcbiAgICAweDk3Qjk6IDB4NEU4NixcbiAgICAweDk3QkE6IDB4NEVBRSxcbiAgICAweDk3QkI6IDB4NTBEQSxcbiAgICAweDk3QkM6IDB4NEUyMSxcbiAgICAweDk3QkQ6IDB4NTFDQyxcbiAgICAweDk3QkU6IDB4NUJFRSxcbiAgICAweDk3QkY6IDB4NjU5OSxcbiAgICAweDk3QzA6IDB4Njg4MSxcbiAgICAweDk3QzE6IDB4NkRCQyxcbiAgICAweDk3QzI6IDB4NzMxRixcbiAgICAweDk3QzM6IDB4NzY0MixcbiAgICAweDk3QzQ6IDB4NzdBRCxcbiAgICAweDk3QzU6IDB4N0ExQyxcbiAgICAweDk3QzY6IDB4N0NFNyxcbiAgICAweDk3Qzc6IDB4ODI2RixcbiAgICAweDk3Qzg6IDB4OEFEMixcbiAgICAweDk3Qzk6IDB4OTA3QyxcbiAgICAweDk3Q0E6IDB4OTFDRixcbiAgICAweDk3Q0I6IDB4OTY3NSxcbiAgICAweDk3Q0M6IDB4OTgxOCxcbiAgICAweDk3Q0Q6IDB4NTI5QixcbiAgICAweDk3Q0U6IDB4N0REMSxcbiAgICAweDk3Q0Y6IDB4NTAyQixcbiAgICAweDk3RDA6IDB4NTM5OCxcbiAgICAweDk3RDE6IDB4Njc5NyxcbiAgICAweDk3RDI6IDB4NkRDQixcbiAgICAweDk3RDM6IDB4NzFEMCxcbiAgICAweDk3RDQ6IDB4NzQzMyxcbiAgICAweDk3RDU6IDB4ODFFOCxcbiAgICAweDk3RDY6IDB4OEYyQSxcbiAgICAweDk3RDc6IDB4OTZBMyxcbiAgICAweDk3RDg6IDB4OUM1NyxcbiAgICAweDk3RDk6IDB4OUU5RixcbiAgICAweDk3REE6IDB4NzQ2MCxcbiAgICAweDk3REI6IDB4NTg0MSxcbiAgICAweDk3REM6IDB4NkQ5OSxcbiAgICAweDk3REQ6IDB4N0QyRixcbiAgICAweDk3REU6IDB4OTg1RSxcbiAgICAweDk3REY6IDB4NEVFNCxcbiAgICAweDk3RTA6IDB4NEYzNixcbiAgICAweDk3RTE6IDB4NEY4QixcbiAgICAweDk3RTI6IDB4NTFCNyxcbiAgICAweDk3RTM6IDB4NTJCMSxcbiAgICAweDk3RTQ6IDB4NURCQSxcbiAgICAweDk3RTU6IDB4NjAxQyxcbiAgICAweDk3RTY6IDB4NzNCMixcbiAgICAweDk3RTc6IDB4NzkzQyxcbiAgICAweDk3RTg6IDB4ODJEMyxcbiAgICAweDk3RTk6IDB4OTIzNCxcbiAgICAweDk3RUE6IDB4OTZCNyxcbiAgICAweDk3RUI6IDB4OTZGNixcbiAgICAweDk3RUM6IDB4OTcwQSxcbiAgICAweDk3RUQ6IDB4OUU5NyxcbiAgICAweDk3RUU6IDB4OUY2MixcbiAgICAweDk3RUY6IDB4NjZBNixcbiAgICAweDk3RjA6IDB4NkI3NCxcbiAgICAweDk3RjE6IDB4NTIxNyxcbiAgICAweDk3RjI6IDB4NTJBMyxcbiAgICAweDk3RjM6IDB4NzBDOCxcbiAgICAweDk3RjQ6IDB4ODhDMixcbiAgICAweDk3RjU6IDB4NUVDOSxcbiAgICAweDk3RjY6IDB4NjA0QixcbiAgICAweDk3Rjc6IDB4NjE5MCxcbiAgICAweDk3Rjg6IDB4NkYyMyxcbiAgICAweDk3Rjk6IDB4NzE0OSxcbiAgICAweDk3RkE6IDB4N0MzRSxcbiAgICAweDk3RkI6IDB4N0RGNCxcbiAgICAweDk3RkM6IDB4ODA2RixcbiAgICAweDk4NDA6IDB4ODRFRSxcbiAgICAweDk4NDE6IDB4OTAyMyxcbiAgICAweDk4NDI6IDB4OTMyQyxcbiAgICAweDk4NDM6IDB4NTQ0MixcbiAgICAweDk4NDQ6IDB4OUI2RixcbiAgICAweDk4NDU6IDB4NkFEMyxcbiAgICAweDk4NDY6IDB4NzA4OSxcbiAgICAweDk4NDc6IDB4OENDMixcbiAgICAweDk4NDg6IDB4OERFRixcbiAgICAweDk4NDk6IDB4OTczMixcbiAgICAweDk4NEE6IDB4NTJCNCxcbiAgICAweDk4NEI6IDB4NUE0MSxcbiAgICAweDk4NEM6IDB4NUVDQSxcbiAgICAweDk4NEQ6IDB4NUYwNCxcbiAgICAweDk4NEU6IDB4NjcxNyxcbiAgICAweDk4NEY6IDB4Njk3QyxcbiAgICAweDk4NTA6IDB4Njk5NCxcbiAgICAweDk4NTE6IDB4NkQ2QSxcbiAgICAweDk4NTI6IDB4NkYwRixcbiAgICAweDk4NTM6IDB4NzI2MixcbiAgICAweDk4NTQ6IDB4NzJGQyxcbiAgICAweDk4NTU6IDB4N0JFRCxcbiAgICAweDk4NTY6IDB4ODAwMSxcbiAgICAweDk4NTc6IDB4ODA3RSxcbiAgICAweDk4NTg6IDB4ODc0QixcbiAgICAweDk4NTk6IDB4OTBDRSxcbiAgICAweDk4NUE6IDB4NTE2RCxcbiAgICAweDk4NUI6IDB4OUU5MyxcbiAgICAweDk4NUM6IDB4Nzk4NCxcbiAgICAweDk4NUQ6IDB4ODA4QixcbiAgICAweDk4NUU6IDB4OTMzMixcbiAgICAweDk4NUY6IDB4OEFENixcbiAgICAweDk4NjA6IDB4NTAyRCxcbiAgICAweDk4NjE6IDB4NTQ4QyxcbiAgICAweDk4NjI6IDB4OEE3MSxcbiAgICAweDk4NjM6IDB4NkI2QSxcbiAgICAweDk4NjQ6IDB4OENDNCxcbiAgICAweDk4NjU6IDB4ODEwNyxcbiAgICAweDk4NjY6IDB4NjBEMSxcbiAgICAweDk4Njc6IDB4NjdBMCxcbiAgICAweDk4Njg6IDB4OURGMixcbiAgICAweDk4Njk6IDB4NEU5OSxcbiAgICAweDk4NkE6IDB4NEU5OCxcbiAgICAweDk4NkI6IDB4OUMxMCxcbiAgICAweDk4NkM6IDB4OEE2QixcbiAgICAweDk4NkQ6IDB4ODVDMSxcbiAgICAweDk4NkU6IDB4ODU2OCxcbiAgICAweDk4NkY6IDB4NjkwMCxcbiAgICAweDk4NzA6IDB4NkU3RSxcbiAgICAweDk4NzE6IDB4Nzg5NyxcbiAgICAweDk4NzI6IDB4ODE1NSxcbiAgICAweDk4OUY6IDB4NUYwQyxcbiAgICAweDk4QTA6IDB4NEUxMCxcbiAgICAweDk4QTE6IDB4NEUxNSxcbiAgICAweDk4QTI6IDB4NEUyQSxcbiAgICAweDk4QTM6IDB4NEUzMSxcbiAgICAweDk4QTQ6IDB4NEUzNixcbiAgICAweDk4QTU6IDB4NEUzQyxcbiAgICAweDk4QTY6IDB4NEUzRixcbiAgICAweDk4QTc6IDB4NEU0MixcbiAgICAweDk4QTg6IDB4NEU1NixcbiAgICAweDk4QTk6IDB4NEU1OCxcbiAgICAweDk4QUE6IDB4NEU4MixcbiAgICAweDk4QUI6IDB4NEU4NSxcbiAgICAweDk4QUM6IDB4OEM2QixcbiAgICAweDk4QUQ6IDB4NEU4QSxcbiAgICAweDk4QUU6IDB4ODIxMixcbiAgICAweDk4QUY6IDB4NUYwRCxcbiAgICAweDk4QjA6IDB4NEU4RSxcbiAgICAweDk4QjE6IDB4NEU5RSxcbiAgICAweDk4QjI6IDB4NEU5RixcbiAgICAweDk4QjM6IDB4NEVBMCxcbiAgICAweDk4QjQ6IDB4NEVBMixcbiAgICAweDk4QjU6IDB4NEVCMCxcbiAgICAweDk4QjY6IDB4NEVCMyxcbiAgICAweDk4Qjc6IDB4NEVCNixcbiAgICAweDk4Qjg6IDB4NEVDRSxcbiAgICAweDk4Qjk6IDB4NEVDRCxcbiAgICAweDk4QkE6IDB4NEVDNCxcbiAgICAweDk4QkI6IDB4NEVDNixcbiAgICAweDk4QkM6IDB4NEVDMixcbiAgICAweDk4QkQ6IDB4NEVENyxcbiAgICAweDk4QkU6IDB4NEVERSxcbiAgICAweDk4QkY6IDB4NEVFRCxcbiAgICAweDk4QzA6IDB4NEVERixcbiAgICAweDk4QzE6IDB4NEVGNyxcbiAgICAweDk4QzI6IDB4NEYwOSxcbiAgICAweDk4QzM6IDB4NEY1QSxcbiAgICAweDk4QzQ6IDB4NEYzMCxcbiAgICAweDk4QzU6IDB4NEY1QixcbiAgICAweDk4QzY6IDB4NEY1RCxcbiAgICAweDk4Qzc6IDB4NEY1NyxcbiAgICAweDk4Qzg6IDB4NEY0NyxcbiAgICAweDk4Qzk6IDB4NEY3NixcbiAgICAweDk4Q0E6IDB4NEY4OCxcbiAgICAweDk4Q0I6IDB4NEY4RixcbiAgICAweDk4Q0M6IDB4NEY5OCxcbiAgICAweDk4Q0Q6IDB4NEY3QixcbiAgICAweDk4Q0U6IDB4NEY2OSxcbiAgICAweDk4Q0Y6IDB4NEY3MCxcbiAgICAweDk4RDA6IDB4NEY5MSxcbiAgICAweDk4RDE6IDB4NEY2RixcbiAgICAweDk4RDI6IDB4NEY4NixcbiAgICAweDk4RDM6IDB4NEY5NixcbiAgICAweDk4RDQ6IDB4NTExOCxcbiAgICAweDk4RDU6IDB4NEZENCxcbiAgICAweDk4RDY6IDB4NEZERixcbiAgICAweDk4RDc6IDB4NEZDRSxcbiAgICAweDk4RDg6IDB4NEZEOCxcbiAgICAweDk4RDk6IDB4NEZEQixcbiAgICAweDk4REE6IDB4NEZEMSxcbiAgICAweDk4REI6IDB4NEZEQSxcbiAgICAweDk4REM6IDB4NEZEMCxcbiAgICAweDk4REQ6IDB4NEZFNCxcbiAgICAweDk4REU6IDB4NEZFNSxcbiAgICAweDk4REY6IDB4NTAxQSxcbiAgICAweDk4RTA6IDB4NTAyOCxcbiAgICAweDk4RTE6IDB4NTAxNCxcbiAgICAweDk4RTI6IDB4NTAyQSxcbiAgICAweDk4RTM6IDB4NTAyNSxcbiAgICAweDk4RTQ6IDB4NTAwNSxcbiAgICAweDk4RTU6IDB4NEYxQyxcbiAgICAweDk4RTY6IDB4NEZGNixcbiAgICAweDk4RTc6IDB4NTAyMSxcbiAgICAweDk4RTg6IDB4NTAyOSxcbiAgICAweDk4RTk6IDB4NTAyQyxcbiAgICAweDk4RUE6IDB4NEZGRSxcbiAgICAweDk4RUI6IDB4NEZFRixcbiAgICAweDk4RUM6IDB4NTAxMSxcbiAgICAweDk4RUQ6IDB4NTAwNixcbiAgICAweDk4RUU6IDB4NTA0MyxcbiAgICAweDk4RUY6IDB4NTA0NyxcbiAgICAweDk4RjA6IDB4NjcwMyxcbiAgICAweDk4RjE6IDB4NTA1NSxcbiAgICAweDk4RjI6IDB4NTA1MCxcbiAgICAweDk4RjM6IDB4NTA0OCxcbiAgICAweDk4RjQ6IDB4NTA1QSxcbiAgICAweDk4RjU6IDB4NTA1NixcbiAgICAweDk4RjY6IDB4NTA2QyxcbiAgICAweDk4Rjc6IDB4NTA3OCxcbiAgICAweDk4Rjg6IDB4NTA4MCxcbiAgICAweDk4Rjk6IDB4NTA5QSxcbiAgICAweDk4RkE6IDB4NTA4NSxcbiAgICAweDk4RkI6IDB4NTBCNCxcbiAgICAweDk4RkM6IDB4NTBCMixcbiAgICAweDk5NDA6IDB4NTBDOSxcbiAgICAweDk5NDE6IDB4NTBDQSxcbiAgICAweDk5NDI6IDB4NTBCMyxcbiAgICAweDk5NDM6IDB4NTBDMixcbiAgICAweDk5NDQ6IDB4NTBENixcbiAgICAweDk5NDU6IDB4NTBERSxcbiAgICAweDk5NDY6IDB4NTBFNSxcbiAgICAweDk5NDc6IDB4NTBFRCxcbiAgICAweDk5NDg6IDB4NTBFMyxcbiAgICAweDk5NDk6IDB4NTBFRSxcbiAgICAweDk5NEE6IDB4NTBGOSxcbiAgICAweDk5NEI6IDB4NTBGNSxcbiAgICAweDk5NEM6IDB4NTEwOSxcbiAgICAweDk5NEQ6IDB4NTEwMSxcbiAgICAweDk5NEU6IDB4NTEwMixcbiAgICAweDk5NEY6IDB4NTExNixcbiAgICAweDk5NTA6IDB4NTExNSxcbiAgICAweDk5NTE6IDB4NTExNCxcbiAgICAweDk5NTI6IDB4NTExQSxcbiAgICAweDk5NTM6IDB4NTEyMSxcbiAgICAweDk5NTQ6IDB4NTEzQSxcbiAgICAweDk5NTU6IDB4NTEzNyxcbiAgICAweDk5NTY6IDB4NTEzQyxcbiAgICAweDk5NTc6IDB4NTEzQixcbiAgICAweDk5NTg6IDB4NTEzRixcbiAgICAweDk5NTk6IDB4NTE0MCxcbiAgICAweDk5NUE6IDB4NTE1MixcbiAgICAweDk5NUI6IDB4NTE0QyxcbiAgICAweDk5NUM6IDB4NTE1NCxcbiAgICAweDk5NUQ6IDB4NTE2MixcbiAgICAweDk5NUU6IDB4N0FGOCxcbiAgICAweDk5NUY6IDB4NTE2OSxcbiAgICAweDk5NjA6IDB4NTE2QSxcbiAgICAweDk5NjE6IDB4NTE2RSxcbiAgICAweDk5NjI6IDB4NTE4MCxcbiAgICAweDk5NjM6IDB4NTE4MixcbiAgICAweDk5NjQ6IDB4NTZEOCxcbiAgICAweDk5NjU6IDB4NTE4QyxcbiAgICAweDk5NjY6IDB4NTE4OSxcbiAgICAweDk5Njc6IDB4NTE4RixcbiAgICAweDk5Njg6IDB4NTE5MSxcbiAgICAweDk5Njk6IDB4NTE5MyxcbiAgICAweDk5NkE6IDB4NTE5NSxcbiAgICAweDk5NkI6IDB4NTE5NixcbiAgICAweDk5NkM6IDB4NTFBNCxcbiAgICAweDk5NkQ6IDB4NTFBNixcbiAgICAweDk5NkU6IDB4NTFBMixcbiAgICAweDk5NkY6IDB4NTFBOSxcbiAgICAweDk5NzA6IDB4NTFBQSxcbiAgICAweDk5NzE6IDB4NTFBQixcbiAgICAweDk5NzI6IDB4NTFCMyxcbiAgICAweDk5NzM6IDB4NTFCMSxcbiAgICAweDk5NzQ6IDB4NTFCMixcbiAgICAweDk5NzU6IDB4NTFCMCxcbiAgICAweDk5NzY6IDB4NTFCNSxcbiAgICAweDk5Nzc6IDB4NTFCRCxcbiAgICAweDk5Nzg6IDB4NTFDNSxcbiAgICAweDk5Nzk6IDB4NTFDOSxcbiAgICAweDk5N0E6IDB4NTFEQixcbiAgICAweDk5N0I6IDB4NTFFMCxcbiAgICAweDk5N0M6IDB4ODY1NSxcbiAgICAweDk5N0Q6IDB4NTFFOSxcbiAgICAweDk5N0U6IDB4NTFFRCxcbiAgICAweDk5ODA6IDB4NTFGMCxcbiAgICAweDk5ODE6IDB4NTFGNSxcbiAgICAweDk5ODI6IDB4NTFGRSxcbiAgICAweDk5ODM6IDB4NTIwNCxcbiAgICAweDk5ODQ6IDB4NTIwQixcbiAgICAweDk5ODU6IDB4NTIxNCxcbiAgICAweDk5ODY6IDB4NTIwRSxcbiAgICAweDk5ODc6IDB4NTIyNyxcbiAgICAweDk5ODg6IDB4NTIyQSxcbiAgICAweDk5ODk6IDB4NTIyRSxcbiAgICAweDk5OEE6IDB4NTIzMyxcbiAgICAweDk5OEI6IDB4NTIzOSxcbiAgICAweDk5OEM6IDB4NTI0RixcbiAgICAweDk5OEQ6IDB4NTI0NCxcbiAgICAweDk5OEU6IDB4NTI0QixcbiAgICAweDk5OEY6IDB4NTI0QyxcbiAgICAweDk5OTA6IDB4NTI1RSxcbiAgICAweDk5OTE6IDB4NTI1NCxcbiAgICAweDk5OTI6IDB4NTI2QSxcbiAgICAweDk5OTM6IDB4NTI3NCxcbiAgICAweDk5OTQ6IDB4NTI2OSxcbiAgICAweDk5OTU6IDB4NTI3MyxcbiAgICAweDk5OTY6IDB4NTI3RixcbiAgICAweDk5OTc6IDB4NTI3RCxcbiAgICAweDk5OTg6IDB4NTI4RCxcbiAgICAweDk5OTk6IDB4NTI5NCxcbiAgICAweDk5OUE6IDB4NTI5MixcbiAgICAweDk5OUI6IDB4NTI3MSxcbiAgICAweDk5OUM6IDB4NTI4OCxcbiAgICAweDk5OUQ6IDB4NTI5MSxcbiAgICAweDk5OUU6IDB4OEZBOCxcbiAgICAweDk5OUY6IDB4OEZBNyxcbiAgICAweDk5QTA6IDB4NTJBQyxcbiAgICAweDk5QTE6IDB4NTJBRCxcbiAgICAweDk5QTI6IDB4NTJCQyxcbiAgICAweDk5QTM6IDB4NTJCNSxcbiAgICAweDk5QTQ6IDB4NTJDMSxcbiAgICAweDk5QTU6IDB4NTJDRCxcbiAgICAweDk5QTY6IDB4NTJENyxcbiAgICAweDk5QTc6IDB4NTJERSxcbiAgICAweDk5QTg6IDB4NTJFMyxcbiAgICAweDk5QTk6IDB4NTJFNixcbiAgICAweDk5QUE6IDB4OThFRCxcbiAgICAweDk5QUI6IDB4NTJFMCxcbiAgICAweDk5QUM6IDB4NTJGMyxcbiAgICAweDk5QUQ6IDB4NTJGNSxcbiAgICAweDk5QUU6IDB4NTJGOCxcbiAgICAweDk5QUY6IDB4NTJGOSxcbiAgICAweDk5QjA6IDB4NTMwNixcbiAgICAweDk5QjE6IDB4NTMwOCxcbiAgICAweDk5QjI6IDB4NzUzOCxcbiAgICAweDk5QjM6IDB4NTMwRCxcbiAgICAweDk5QjQ6IDB4NTMxMCxcbiAgICAweDk5QjU6IDB4NTMwRixcbiAgICAweDk5QjY6IDB4NTMxNSxcbiAgICAweDk5Qjc6IDB4NTMxQSxcbiAgICAweDk5Qjg6IDB4NTMyMyxcbiAgICAweDk5Qjk6IDB4NTMyRixcbiAgICAweDk5QkE6IDB4NTMzMSxcbiAgICAweDk5QkI6IDB4NTMzMyxcbiAgICAweDk5QkM6IDB4NTMzOCxcbiAgICAweDk5QkQ6IDB4NTM0MCxcbiAgICAweDk5QkU6IDB4NTM0NixcbiAgICAweDk5QkY6IDB4NTM0NSxcbiAgICAweDk5QzA6IDB4NEUxNyxcbiAgICAweDk5QzE6IDB4NTM0OSxcbiAgICAweDk5QzI6IDB4NTM0RCxcbiAgICAweDk5QzM6IDB4NTFENixcbiAgICAweDk5QzQ6IDB4NTM1RSxcbiAgICAweDk5QzU6IDB4NTM2OSxcbiAgICAweDk5QzY6IDB4NTM2RSxcbiAgICAweDk5Qzc6IDB4NTkxOCxcbiAgICAweDk5Qzg6IDB4NTM3QixcbiAgICAweDk5Qzk6IDB4NTM3NyxcbiAgICAweDk5Q0E6IDB4NTM4MixcbiAgICAweDk5Q0I6IDB4NTM5NixcbiAgICAweDk5Q0M6IDB4NTNBMCxcbiAgICAweDk5Q0Q6IDB4NTNBNixcbiAgICAweDk5Q0U6IDB4NTNBNSxcbiAgICAweDk5Q0Y6IDB4NTNBRSxcbiAgICAweDk5RDA6IDB4NTNCMCxcbiAgICAweDk5RDE6IDB4NTNCNixcbiAgICAweDk5RDI6IDB4NTNDMyxcbiAgICAweDk5RDM6IDB4N0MxMixcbiAgICAweDk5RDQ6IDB4OTZEOSxcbiAgICAweDk5RDU6IDB4NTNERixcbiAgICAweDk5RDY6IDB4NjZGQyxcbiAgICAweDk5RDc6IDB4NzFFRSxcbiAgICAweDk5RDg6IDB4NTNFRSxcbiAgICAweDk5RDk6IDB4NTNFOCxcbiAgICAweDk5REE6IDB4NTNFRCxcbiAgICAweDk5REI6IDB4NTNGQSxcbiAgICAweDk5REM6IDB4NTQwMSxcbiAgICAweDk5REQ6IDB4NTQzRCxcbiAgICAweDk5REU6IDB4NTQ0MCxcbiAgICAweDk5REY6IDB4NTQyQyxcbiAgICAweDk5RTA6IDB4NTQyRCxcbiAgICAweDk5RTE6IDB4NTQzQyxcbiAgICAweDk5RTI6IDB4NTQyRSxcbiAgICAweDk5RTM6IDB4NTQzNixcbiAgICAweDk5RTQ6IDB4NTQyOSxcbiAgICAweDk5RTU6IDB4NTQxRCxcbiAgICAweDk5RTY6IDB4NTQ0RSxcbiAgICAweDk5RTc6IDB4NTQ4RixcbiAgICAweDk5RTg6IDB4NTQ3NSxcbiAgICAweDk5RTk6IDB4NTQ4RSxcbiAgICAweDk5RUE6IDB4NTQ1RixcbiAgICAweDk5RUI6IDB4NTQ3MSxcbiAgICAweDk5RUM6IDB4NTQ3NyxcbiAgICAweDk5RUQ6IDB4NTQ3MCxcbiAgICAweDk5RUU6IDB4NTQ5MixcbiAgICAweDk5RUY6IDB4NTQ3QixcbiAgICAweDk5RjA6IDB4NTQ4MCxcbiAgICAweDk5RjE6IDB4NTQ3NixcbiAgICAweDk5RjI6IDB4NTQ4NCxcbiAgICAweDk5RjM6IDB4NTQ5MCxcbiAgICAweDk5RjQ6IDB4NTQ4NixcbiAgICAweDk5RjU6IDB4NTRDNyxcbiAgICAweDk5RjY6IDB4NTRBMixcbiAgICAweDk5Rjc6IDB4NTRCOCxcbiAgICAweDk5Rjg6IDB4NTRBNSxcbiAgICAweDk5Rjk6IDB4NTRBQyxcbiAgICAweDk5RkE6IDB4NTRDNCxcbiAgICAweDk5RkI6IDB4NTRDOCxcbiAgICAweDk5RkM6IDB4NTRBOCxcbiAgICAweDlBNDA6IDB4NTRBQixcbiAgICAweDlBNDE6IDB4NTRDMixcbiAgICAweDlBNDI6IDB4NTRBNCxcbiAgICAweDlBNDM6IDB4NTRCRSxcbiAgICAweDlBNDQ6IDB4NTRCQyxcbiAgICAweDlBNDU6IDB4NTREOCxcbiAgICAweDlBNDY6IDB4NTRFNSxcbiAgICAweDlBNDc6IDB4NTRFNixcbiAgICAweDlBNDg6IDB4NTUwRixcbiAgICAweDlBNDk6IDB4NTUxNCxcbiAgICAweDlBNEE6IDB4NTRGRCxcbiAgICAweDlBNEI6IDB4NTRFRSxcbiAgICAweDlBNEM6IDB4NTRFRCxcbiAgICAweDlBNEQ6IDB4NTRGQSxcbiAgICAweDlBNEU6IDB4NTRFMixcbiAgICAweDlBNEY6IDB4NTUzOSxcbiAgICAweDlBNTA6IDB4NTU0MCxcbiAgICAweDlBNTE6IDB4NTU2MyxcbiAgICAweDlBNTI6IDB4NTU0QyxcbiAgICAweDlBNTM6IDB4NTUyRSxcbiAgICAweDlBNTQ6IDB4NTU1QyxcbiAgICAweDlBNTU6IDB4NTU0NSxcbiAgICAweDlBNTY6IDB4NTU1NixcbiAgICAweDlBNTc6IDB4NTU1NyxcbiAgICAweDlBNTg6IDB4NTUzOCxcbiAgICAweDlBNTk6IDB4NTUzMyxcbiAgICAweDlBNUE6IDB4NTU1RCxcbiAgICAweDlBNUI6IDB4NTU5OSxcbiAgICAweDlBNUM6IDB4NTU4MCxcbiAgICAweDlBNUQ6IDB4NTRBRixcbiAgICAweDlBNUU6IDB4NTU4QSxcbiAgICAweDlBNUY6IDB4NTU5RixcbiAgICAweDlBNjA6IDB4NTU3QixcbiAgICAweDlBNjE6IDB4NTU3RSxcbiAgICAweDlBNjI6IDB4NTU5OCxcbiAgICAweDlBNjM6IDB4NTU5RSxcbiAgICAweDlBNjQ6IDB4NTVBRSxcbiAgICAweDlBNjU6IDB4NTU3QyxcbiAgICAweDlBNjY6IDB4NTU4MyxcbiAgICAweDlBNjc6IDB4NTVBOSxcbiAgICAweDlBNjg6IDB4NTU4NyxcbiAgICAweDlBNjk6IDB4NTVBOCxcbiAgICAweDlBNkE6IDB4NTVEQSxcbiAgICAweDlBNkI6IDB4NTVDNSxcbiAgICAweDlBNkM6IDB4NTVERixcbiAgICAweDlBNkQ6IDB4NTVDNCxcbiAgICAweDlBNkU6IDB4NTVEQyxcbiAgICAweDlBNkY6IDB4NTVFNCxcbiAgICAweDlBNzA6IDB4NTVENCxcbiAgICAweDlBNzE6IDB4NTYxNCxcbiAgICAweDlBNzI6IDB4NTVGNyxcbiAgICAweDlBNzM6IDB4NTYxNixcbiAgICAweDlBNzQ6IDB4NTVGRSxcbiAgICAweDlBNzU6IDB4NTVGRCxcbiAgICAweDlBNzY6IDB4NTYxQixcbiAgICAweDlBNzc6IDB4NTVGOSxcbiAgICAweDlBNzg6IDB4NTY0RSxcbiAgICAweDlBNzk6IDB4NTY1MCxcbiAgICAweDlBN0E6IDB4NzFERixcbiAgICAweDlBN0I6IDB4NTYzNCxcbiAgICAweDlBN0M6IDB4NTYzNixcbiAgICAweDlBN0Q6IDB4NTYzMixcbiAgICAweDlBN0U6IDB4NTYzOCxcbiAgICAweDlBODA6IDB4NTY2QixcbiAgICAweDlBODE6IDB4NTY2NCxcbiAgICAweDlBODI6IDB4NTYyRixcbiAgICAweDlBODM6IDB4NTY2QyxcbiAgICAweDlBODQ6IDB4NTY2QSxcbiAgICAweDlBODU6IDB4NTY4NixcbiAgICAweDlBODY6IDB4NTY4MCxcbiAgICAweDlBODc6IDB4NTY4QSxcbiAgICAweDlBODg6IDB4NTZBMCxcbiAgICAweDlBODk6IDB4NTY5NCxcbiAgICAweDlBOEE6IDB4NTY4RixcbiAgICAweDlBOEI6IDB4NTZBNSxcbiAgICAweDlBOEM6IDB4NTZBRSxcbiAgICAweDlBOEQ6IDB4NTZCNixcbiAgICAweDlBOEU6IDB4NTZCNCxcbiAgICAweDlBOEY6IDB4NTZDMixcbiAgICAweDlBOTA6IDB4NTZCQyxcbiAgICAweDlBOTE6IDB4NTZDMSxcbiAgICAweDlBOTI6IDB4NTZDMyxcbiAgICAweDlBOTM6IDB4NTZDMCxcbiAgICAweDlBOTQ6IDB4NTZDOCxcbiAgICAweDlBOTU6IDB4NTZDRSxcbiAgICAweDlBOTY6IDB4NTZEMSxcbiAgICAweDlBOTc6IDB4NTZEMyxcbiAgICAweDlBOTg6IDB4NTZENyxcbiAgICAweDlBOTk6IDB4NTZFRSxcbiAgICAweDlBOUE6IDB4NTZGOSxcbiAgICAweDlBOUI6IDB4NTcwMCxcbiAgICAweDlBOUM6IDB4NTZGRixcbiAgICAweDlBOUQ6IDB4NTcwNCxcbiAgICAweDlBOUU6IDB4NTcwOSxcbiAgICAweDlBOUY6IDB4NTcwOCxcbiAgICAweDlBQTA6IDB4NTcwQixcbiAgICAweDlBQTE6IDB4NTcwRCxcbiAgICAweDlBQTI6IDB4NTcxMyxcbiAgICAweDlBQTM6IDB4NTcxOCxcbiAgICAweDlBQTQ6IDB4NTcxNixcbiAgICAweDlBQTU6IDB4NTVDNyxcbiAgICAweDlBQTY6IDB4NTcxQyxcbiAgICAweDlBQTc6IDB4NTcyNixcbiAgICAweDlBQTg6IDB4NTczNyxcbiAgICAweDlBQTk6IDB4NTczOCxcbiAgICAweDlBQUE6IDB4NTc0RSxcbiAgICAweDlBQUI6IDB4NTczQixcbiAgICAweDlBQUM6IDB4NTc0MCxcbiAgICAweDlBQUQ6IDB4NTc0RixcbiAgICAweDlBQUU6IDB4NTc2OSxcbiAgICAweDlBQUY6IDB4NTdDMCxcbiAgICAweDlBQjA6IDB4NTc4OCxcbiAgICAweDlBQjE6IDB4NTc2MSxcbiAgICAweDlBQjI6IDB4NTc3RixcbiAgICAweDlBQjM6IDB4NTc4OSxcbiAgICAweDlBQjQ6IDB4NTc5MyxcbiAgICAweDlBQjU6IDB4NTdBMCxcbiAgICAweDlBQjY6IDB4NTdCMyxcbiAgICAweDlBQjc6IDB4NTdBNCxcbiAgICAweDlBQjg6IDB4NTdBQSxcbiAgICAweDlBQjk6IDB4NTdCMCxcbiAgICAweDlBQkE6IDB4NTdDMyxcbiAgICAweDlBQkI6IDB4NTdDNixcbiAgICAweDlBQkM6IDB4NTdENCxcbiAgICAweDlBQkQ6IDB4NTdEMixcbiAgICAweDlBQkU6IDB4NTdEMyxcbiAgICAweDlBQkY6IDB4NTgwQSxcbiAgICAweDlBQzA6IDB4NTdENixcbiAgICAweDlBQzE6IDB4NTdFMyxcbiAgICAweDlBQzI6IDB4NTgwQixcbiAgICAweDlBQzM6IDB4NTgxOSxcbiAgICAweDlBQzQ6IDB4NTgxRCxcbiAgICAweDlBQzU6IDB4NTg3MixcbiAgICAweDlBQzY6IDB4NTgyMSxcbiAgICAweDlBQzc6IDB4NTg2MixcbiAgICAweDlBQzg6IDB4NTg0QixcbiAgICAweDlBQzk6IDB4NTg3MCxcbiAgICAweDlBQ0E6IDB4NkJDMCxcbiAgICAweDlBQ0I6IDB4NTg1MixcbiAgICAweDlBQ0M6IDB4NTgzRCxcbiAgICAweDlBQ0Q6IDB4NTg3OSxcbiAgICAweDlBQ0U6IDB4NTg4NSxcbiAgICAweDlBQ0Y6IDB4NThCOSxcbiAgICAweDlBRDA6IDB4NTg5RixcbiAgICAweDlBRDE6IDB4NThBQixcbiAgICAweDlBRDI6IDB4NThCQSxcbiAgICAweDlBRDM6IDB4NThERSxcbiAgICAweDlBRDQ6IDB4NThCQixcbiAgICAweDlBRDU6IDB4NThCOCxcbiAgICAweDlBRDY6IDB4NThBRSxcbiAgICAweDlBRDc6IDB4NThDNSxcbiAgICAweDlBRDg6IDB4NThEMyxcbiAgICAweDlBRDk6IDB4NThEMSxcbiAgICAweDlBREE6IDB4NThENyxcbiAgICAweDlBREI6IDB4NThEOSxcbiAgICAweDlBREM6IDB4NThEOCxcbiAgICAweDlBREQ6IDB4NThFNSxcbiAgICAweDlBREU6IDB4NThEQyxcbiAgICAweDlBREY6IDB4NThFNCxcbiAgICAweDlBRTA6IDB4NThERixcbiAgICAweDlBRTE6IDB4NThFRixcbiAgICAweDlBRTI6IDB4NThGQSxcbiAgICAweDlBRTM6IDB4NThGOSxcbiAgICAweDlBRTQ6IDB4NThGQixcbiAgICAweDlBRTU6IDB4NThGQyxcbiAgICAweDlBRTY6IDB4NThGRCxcbiAgICAweDlBRTc6IDB4NTkwMixcbiAgICAweDlBRTg6IDB4NTkwQSxcbiAgICAweDlBRTk6IDB4NTkxMCxcbiAgICAweDlBRUE6IDB4NTkxQixcbiAgICAweDlBRUI6IDB4NjhBNixcbiAgICAweDlBRUM6IDB4NTkyNSxcbiAgICAweDlBRUQ6IDB4NTkyQyxcbiAgICAweDlBRUU6IDB4NTkyRCxcbiAgICAweDlBRUY6IDB4NTkzMixcbiAgICAweDlBRjA6IDB4NTkzOCxcbiAgICAweDlBRjE6IDB4NTkzRSxcbiAgICAweDlBRjI6IDB4N0FEMixcbiAgICAweDlBRjM6IDB4NTk1NSxcbiAgICAweDlBRjQ6IDB4NTk1MCxcbiAgICAweDlBRjU6IDB4NTk0RSxcbiAgICAweDlBRjY6IDB4NTk1QSxcbiAgICAweDlBRjc6IDB4NTk1OCxcbiAgICAweDlBRjg6IDB4NTk2MixcbiAgICAweDlBRjk6IDB4NTk2MCxcbiAgICAweDlBRkE6IDB4NTk2NyxcbiAgICAweDlBRkI6IDB4NTk2QyxcbiAgICAweDlBRkM6IDB4NTk2OSxcbiAgICAweDlCNDA6IDB4NTk3OCxcbiAgICAweDlCNDE6IDB4NTk4MSxcbiAgICAweDlCNDI6IDB4NTk5RCxcbiAgICAweDlCNDM6IDB4NEY1RSxcbiAgICAweDlCNDQ6IDB4NEZBQixcbiAgICAweDlCNDU6IDB4NTlBMyxcbiAgICAweDlCNDY6IDB4NTlCMixcbiAgICAweDlCNDc6IDB4NTlDNixcbiAgICAweDlCNDg6IDB4NTlFOCxcbiAgICAweDlCNDk6IDB4NTlEQyxcbiAgICAweDlCNEE6IDB4NTk4RCxcbiAgICAweDlCNEI6IDB4NTlEOSxcbiAgICAweDlCNEM6IDB4NTlEQSxcbiAgICAweDlCNEQ6IDB4NUEyNSxcbiAgICAweDlCNEU6IDB4NUExRixcbiAgICAweDlCNEY6IDB4NUExMSxcbiAgICAweDlCNTA6IDB4NUExQyxcbiAgICAweDlCNTE6IDB4NUEwOSxcbiAgICAweDlCNTI6IDB4NUExQSxcbiAgICAweDlCNTM6IDB4NUE0MCxcbiAgICAweDlCNTQ6IDB4NUE2QyxcbiAgICAweDlCNTU6IDB4NUE0OSxcbiAgICAweDlCNTY6IDB4NUEzNSxcbiAgICAweDlCNTc6IDB4NUEzNixcbiAgICAweDlCNTg6IDB4NUE2MixcbiAgICAweDlCNTk6IDB4NUE2QSxcbiAgICAweDlCNUE6IDB4NUE5QSxcbiAgICAweDlCNUI6IDB4NUFCQyxcbiAgICAweDlCNUM6IDB4NUFCRSxcbiAgICAweDlCNUQ6IDB4NUFDQixcbiAgICAweDlCNUU6IDB4NUFDMixcbiAgICAweDlCNUY6IDB4NUFCRCxcbiAgICAweDlCNjA6IDB4NUFFMyxcbiAgICAweDlCNjE6IDB4NUFENyxcbiAgICAweDlCNjI6IDB4NUFFNixcbiAgICAweDlCNjM6IDB4NUFFOSxcbiAgICAweDlCNjQ6IDB4NUFENixcbiAgICAweDlCNjU6IDB4NUFGQSxcbiAgICAweDlCNjY6IDB4NUFGQixcbiAgICAweDlCNjc6IDB4NUIwQyxcbiAgICAweDlCNjg6IDB4NUIwQixcbiAgICAweDlCNjk6IDB4NUIxNixcbiAgICAweDlCNkE6IDB4NUIzMixcbiAgICAweDlCNkI6IDB4NUFEMCxcbiAgICAweDlCNkM6IDB4NUIyQSxcbiAgICAweDlCNkQ6IDB4NUIzNixcbiAgICAweDlCNkU6IDB4NUIzRSxcbiAgICAweDlCNkY6IDB4NUI0MyxcbiAgICAweDlCNzA6IDB4NUI0NSxcbiAgICAweDlCNzE6IDB4NUI0MCxcbiAgICAweDlCNzI6IDB4NUI1MSxcbiAgICAweDlCNzM6IDB4NUI1NSxcbiAgICAweDlCNzQ6IDB4NUI1QSxcbiAgICAweDlCNzU6IDB4NUI1QixcbiAgICAweDlCNzY6IDB4NUI2NSxcbiAgICAweDlCNzc6IDB4NUI2OSxcbiAgICAweDlCNzg6IDB4NUI3MCxcbiAgICAweDlCNzk6IDB4NUI3MyxcbiAgICAweDlCN0E6IDB4NUI3NSxcbiAgICAweDlCN0I6IDB4NUI3OCxcbiAgICAweDlCN0M6IDB4NjU4OCxcbiAgICAweDlCN0Q6IDB4NUI3QSxcbiAgICAweDlCN0U6IDB4NUI4MCxcbiAgICAweDlCODA6IDB4NUI4MyxcbiAgICAweDlCODE6IDB4NUJBNixcbiAgICAweDlCODI6IDB4NUJCOCxcbiAgICAweDlCODM6IDB4NUJDMyxcbiAgICAweDlCODQ6IDB4NUJDNyxcbiAgICAweDlCODU6IDB4NUJDOSxcbiAgICAweDlCODY6IDB4NUJENCxcbiAgICAweDlCODc6IDB4NUJEMCxcbiAgICAweDlCODg6IDB4NUJFNCxcbiAgICAweDlCODk6IDB4NUJFNixcbiAgICAweDlCOEE6IDB4NUJFMixcbiAgICAweDlCOEI6IDB4NUJERSxcbiAgICAweDlCOEM6IDB4NUJFNSxcbiAgICAweDlCOEQ6IDB4NUJFQixcbiAgICAweDlCOEU6IDB4NUJGMCxcbiAgICAweDlCOEY6IDB4NUJGNixcbiAgICAweDlCOTA6IDB4NUJGMyxcbiAgICAweDlCOTE6IDB4NUMwNSxcbiAgICAweDlCOTI6IDB4NUMwNyxcbiAgICAweDlCOTM6IDB4NUMwOCxcbiAgICAweDlCOTQ6IDB4NUMwRCxcbiAgICAweDlCOTU6IDB4NUMxMyxcbiAgICAweDlCOTY6IDB4NUMyMCxcbiAgICAweDlCOTc6IDB4NUMyMixcbiAgICAweDlCOTg6IDB4NUMyOCxcbiAgICAweDlCOTk6IDB4NUMzOCxcbiAgICAweDlCOUE6IDB4NUMzOSxcbiAgICAweDlCOUI6IDB4NUM0MSxcbiAgICAweDlCOUM6IDB4NUM0NixcbiAgICAweDlCOUQ6IDB4NUM0RSxcbiAgICAweDlCOUU6IDB4NUM1MyxcbiAgICAweDlCOUY6IDB4NUM1MCxcbiAgICAweDlCQTA6IDB4NUM0RixcbiAgICAweDlCQTE6IDB4NUI3MSxcbiAgICAweDlCQTI6IDB4NUM2QyxcbiAgICAweDlCQTM6IDB4NUM2RSxcbiAgICAweDlCQTQ6IDB4NEU2MixcbiAgICAweDlCQTU6IDB4NUM3NixcbiAgICAweDlCQTY6IDB4NUM3OSxcbiAgICAweDlCQTc6IDB4NUM4QyxcbiAgICAweDlCQTg6IDB4NUM5MSxcbiAgICAweDlCQTk6IDB4NUM5NCxcbiAgICAweDlCQUE6IDB4NTk5QixcbiAgICAweDlCQUI6IDB4NUNBQixcbiAgICAweDlCQUM6IDB4NUNCQixcbiAgICAweDlCQUQ6IDB4NUNCNixcbiAgICAweDlCQUU6IDB4NUNCQyxcbiAgICAweDlCQUY6IDB4NUNCNyxcbiAgICAweDlCQjA6IDB4NUNDNSxcbiAgICAweDlCQjE6IDB4NUNCRSxcbiAgICAweDlCQjI6IDB4NUNDNyxcbiAgICAweDlCQjM6IDB4NUNEOSxcbiAgICAweDlCQjQ6IDB4NUNFOSxcbiAgICAweDlCQjU6IDB4NUNGRCxcbiAgICAweDlCQjY6IDB4NUNGQSxcbiAgICAweDlCQjc6IDB4NUNFRCxcbiAgICAweDlCQjg6IDB4NUQ4QyxcbiAgICAweDlCQjk6IDB4NUNFQSxcbiAgICAweDlCQkE6IDB4NUQwQixcbiAgICAweDlCQkI6IDB4NUQxNSxcbiAgICAweDlCQkM6IDB4NUQxNyxcbiAgICAweDlCQkQ6IDB4NUQ1QyxcbiAgICAweDlCQkU6IDB4NUQxRixcbiAgICAweDlCQkY6IDB4NUQxQixcbiAgICAweDlCQzA6IDB4NUQxMSxcbiAgICAweDlCQzE6IDB4NUQxNCxcbiAgICAweDlCQzI6IDB4NUQyMixcbiAgICAweDlCQzM6IDB4NUQxQSxcbiAgICAweDlCQzQ6IDB4NUQxOSxcbiAgICAweDlCQzU6IDB4NUQxOCxcbiAgICAweDlCQzY6IDB4NUQ0QyxcbiAgICAweDlCQzc6IDB4NUQ1MixcbiAgICAweDlCQzg6IDB4NUQ0RSxcbiAgICAweDlCQzk6IDB4NUQ0QixcbiAgICAweDlCQ0E6IDB4NUQ2QyxcbiAgICAweDlCQ0I6IDB4NUQ3MyxcbiAgICAweDlCQ0M6IDB4NUQ3NixcbiAgICAweDlCQ0Q6IDB4NUQ4NyxcbiAgICAweDlCQ0U6IDB4NUQ4NCxcbiAgICAweDlCQ0Y6IDB4NUQ4MixcbiAgICAweDlCRDA6IDB4NURBMixcbiAgICAweDlCRDE6IDB4NUQ5RCxcbiAgICAweDlCRDI6IDB4NURBQyxcbiAgICAweDlCRDM6IDB4NURBRSxcbiAgICAweDlCRDQ6IDB4NURCRCxcbiAgICAweDlCRDU6IDB4NUQ5MCxcbiAgICAweDlCRDY6IDB4NURCNyxcbiAgICAweDlCRDc6IDB4NURCQyxcbiAgICAweDlCRDg6IDB4NURDOSxcbiAgICAweDlCRDk6IDB4NURDRCxcbiAgICAweDlCREE6IDB4NUREMyxcbiAgICAweDlCREI6IDB4NUREMixcbiAgICAweDlCREM6IDB4NURENixcbiAgICAweDlCREQ6IDB4NUREQixcbiAgICAweDlCREU6IDB4NURFQixcbiAgICAweDlCREY6IDB4NURGMixcbiAgICAweDlCRTA6IDB4NURGNSxcbiAgICAweDlCRTE6IDB4NUUwQixcbiAgICAweDlCRTI6IDB4NUUxQSxcbiAgICAweDlCRTM6IDB4NUUxOSxcbiAgICAweDlCRTQ6IDB4NUUxMSxcbiAgICAweDlCRTU6IDB4NUUxQixcbiAgICAweDlCRTY6IDB4NUUzNixcbiAgICAweDlCRTc6IDB4NUUzNyxcbiAgICAweDlCRTg6IDB4NUU0NCxcbiAgICAweDlCRTk6IDB4NUU0MyxcbiAgICAweDlCRUE6IDB4NUU0MCxcbiAgICAweDlCRUI6IDB4NUU0RSxcbiAgICAweDlCRUM6IDB4NUU1NyxcbiAgICAweDlCRUQ6IDB4NUU1NCxcbiAgICAweDlCRUU6IDB4NUU1RixcbiAgICAweDlCRUY6IDB4NUU2MixcbiAgICAweDlCRjA6IDB4NUU2NCxcbiAgICAweDlCRjE6IDB4NUU0NyxcbiAgICAweDlCRjI6IDB4NUU3NSxcbiAgICAweDlCRjM6IDB4NUU3NixcbiAgICAweDlCRjQ6IDB4NUU3QSxcbiAgICAweDlCRjU6IDB4OUVCQyxcbiAgICAweDlCRjY6IDB4NUU3RixcbiAgICAweDlCRjc6IDB4NUVBMCxcbiAgICAweDlCRjg6IDB4NUVDMSxcbiAgICAweDlCRjk6IDB4NUVDMixcbiAgICAweDlCRkE6IDB4NUVDOCxcbiAgICAweDlCRkI6IDB4NUVEMCxcbiAgICAweDlCRkM6IDB4NUVDRixcbiAgICAweDlDNDA6IDB4NUVENixcbiAgICAweDlDNDE6IDB4NUVFMyxcbiAgICAweDlDNDI6IDB4NUVERCxcbiAgICAweDlDNDM6IDB4NUVEQSxcbiAgICAweDlDNDQ6IDB4NUVEQixcbiAgICAweDlDNDU6IDB4NUVFMixcbiAgICAweDlDNDY6IDB4NUVFMSxcbiAgICAweDlDNDc6IDB4NUVFOCxcbiAgICAweDlDNDg6IDB4NUVFOSxcbiAgICAweDlDNDk6IDB4NUVFQyxcbiAgICAweDlDNEE6IDB4NUVGMSxcbiAgICAweDlDNEI6IDB4NUVGMyxcbiAgICAweDlDNEM6IDB4NUVGMCxcbiAgICAweDlDNEQ6IDB4NUVGNCxcbiAgICAweDlDNEU6IDB4NUVGOCxcbiAgICAweDlDNEY6IDB4NUVGRSxcbiAgICAweDlDNTA6IDB4NUYwMyxcbiAgICAweDlDNTE6IDB4NUYwOSxcbiAgICAweDlDNTI6IDB4NUY1RCxcbiAgICAweDlDNTM6IDB4NUY1QyxcbiAgICAweDlDNTQ6IDB4NUYwQixcbiAgICAweDlDNTU6IDB4NUYxMSxcbiAgICAweDlDNTY6IDB4NUYxNixcbiAgICAweDlDNTc6IDB4NUYyOSxcbiAgICAweDlDNTg6IDB4NUYyRCxcbiAgICAweDlDNTk6IDB4NUYzOCxcbiAgICAweDlDNUE6IDB4NUY0MSxcbiAgICAweDlDNUI6IDB4NUY0OCxcbiAgICAweDlDNUM6IDB4NUY0QyxcbiAgICAweDlDNUQ6IDB4NUY0RSxcbiAgICAweDlDNUU6IDB4NUYyRixcbiAgICAweDlDNUY6IDB4NUY1MSxcbiAgICAweDlDNjA6IDB4NUY1NixcbiAgICAweDlDNjE6IDB4NUY1NyxcbiAgICAweDlDNjI6IDB4NUY1OSxcbiAgICAweDlDNjM6IDB4NUY2MSxcbiAgICAweDlDNjQ6IDB4NUY2RCxcbiAgICAweDlDNjU6IDB4NUY3MyxcbiAgICAweDlDNjY6IDB4NUY3NyxcbiAgICAweDlDNjc6IDB4NUY4MyxcbiAgICAweDlDNjg6IDB4NUY4MixcbiAgICAweDlDNjk6IDB4NUY3RixcbiAgICAweDlDNkE6IDB4NUY4QSxcbiAgICAweDlDNkI6IDB4NUY4OCxcbiAgICAweDlDNkM6IDB4NUY5MSxcbiAgICAweDlDNkQ6IDB4NUY4NyxcbiAgICAweDlDNkU6IDB4NUY5RSxcbiAgICAweDlDNkY6IDB4NUY5OSxcbiAgICAweDlDNzA6IDB4NUY5OCxcbiAgICAweDlDNzE6IDB4NUZBMCxcbiAgICAweDlDNzI6IDB4NUZBOCxcbiAgICAweDlDNzM6IDB4NUZBRCxcbiAgICAweDlDNzQ6IDB4NUZCQyxcbiAgICAweDlDNzU6IDB4NUZENixcbiAgICAweDlDNzY6IDB4NUZGQixcbiAgICAweDlDNzc6IDB4NUZFNCxcbiAgICAweDlDNzg6IDB4NUZGOCxcbiAgICAweDlDNzk6IDB4NUZGMSxcbiAgICAweDlDN0E6IDB4NUZERCxcbiAgICAweDlDN0I6IDB4NjBCMyxcbiAgICAweDlDN0M6IDB4NUZGRixcbiAgICAweDlDN0Q6IDB4NjAyMSxcbiAgICAweDlDN0U6IDB4NjA2MCxcbiAgICAweDlDODA6IDB4NjAxOSxcbiAgICAweDlDODE6IDB4NjAxMCxcbiAgICAweDlDODI6IDB4NjAyOSxcbiAgICAweDlDODM6IDB4NjAwRSxcbiAgICAweDlDODQ6IDB4NjAzMSxcbiAgICAweDlDODU6IDB4NjAxQixcbiAgICAweDlDODY6IDB4NjAxNSxcbiAgICAweDlDODc6IDB4NjAyQixcbiAgICAweDlDODg6IDB4NjAyNixcbiAgICAweDlDODk6IDB4NjAwRixcbiAgICAweDlDOEE6IDB4NjAzQSxcbiAgICAweDlDOEI6IDB4NjA1QSxcbiAgICAweDlDOEM6IDB4NjA0MSxcbiAgICAweDlDOEQ6IDB4NjA2QSxcbiAgICAweDlDOEU6IDB4NjA3NyxcbiAgICAweDlDOEY6IDB4NjA1RixcbiAgICAweDlDOTA6IDB4NjA0QSxcbiAgICAweDlDOTE6IDB4NjA0NixcbiAgICAweDlDOTI6IDB4NjA0RCxcbiAgICAweDlDOTM6IDB4NjA2MyxcbiAgICAweDlDOTQ6IDB4NjA0MyxcbiAgICAweDlDOTU6IDB4NjA2NCxcbiAgICAweDlDOTY6IDB4NjA0MixcbiAgICAweDlDOTc6IDB4NjA2QyxcbiAgICAweDlDOTg6IDB4NjA2QixcbiAgICAweDlDOTk6IDB4NjA1OSxcbiAgICAweDlDOUE6IDB4NjA4MSxcbiAgICAweDlDOUI6IDB4NjA4RCxcbiAgICAweDlDOUM6IDB4NjBFNyxcbiAgICAweDlDOUQ6IDB4NjA4MyxcbiAgICAweDlDOUU6IDB4NjA5QSxcbiAgICAweDlDOUY6IDB4NjA4NCxcbiAgICAweDlDQTA6IDB4NjA5QixcbiAgICAweDlDQTE6IDB4NjA5NixcbiAgICAweDlDQTI6IDB4NjA5NyxcbiAgICAweDlDQTM6IDB4NjA5MixcbiAgICAweDlDQTQ6IDB4NjBBNyxcbiAgICAweDlDQTU6IDB4NjA4QixcbiAgICAweDlDQTY6IDB4NjBFMSxcbiAgICAweDlDQTc6IDB4NjBCOCxcbiAgICAweDlDQTg6IDB4NjBFMCxcbiAgICAweDlDQTk6IDB4NjBEMyxcbiAgICAweDlDQUE6IDB4NjBCNCxcbiAgICAweDlDQUI6IDB4NUZGMCxcbiAgICAweDlDQUM6IDB4NjBCRCxcbiAgICAweDlDQUQ6IDB4NjBDNixcbiAgICAweDlDQUU6IDB4NjBCNSxcbiAgICAweDlDQUY6IDB4NjBEOCxcbiAgICAweDlDQjA6IDB4NjE0RCxcbiAgICAweDlDQjE6IDB4NjExNSxcbiAgICAweDlDQjI6IDB4NjEwNixcbiAgICAweDlDQjM6IDB4NjBGNixcbiAgICAweDlDQjQ6IDB4NjBGNyxcbiAgICAweDlDQjU6IDB4NjEwMCxcbiAgICAweDlDQjY6IDB4NjBGNCxcbiAgICAweDlDQjc6IDB4NjBGQSxcbiAgICAweDlDQjg6IDB4NjEwMyxcbiAgICAweDlDQjk6IDB4NjEyMSxcbiAgICAweDlDQkE6IDB4NjBGQixcbiAgICAweDlDQkI6IDB4NjBGMSxcbiAgICAweDlDQkM6IDB4NjEwRCxcbiAgICAweDlDQkQ6IDB4NjEwRSxcbiAgICAweDlDQkU6IDB4NjE0NyxcbiAgICAweDlDQkY6IDB4NjEzRSxcbiAgICAweDlDQzA6IDB4NjEyOCxcbiAgICAweDlDQzE6IDB4NjEyNyxcbiAgICAweDlDQzI6IDB4NjE0QSxcbiAgICAweDlDQzM6IDB4NjEzRixcbiAgICAweDlDQzQ6IDB4NjEzQyxcbiAgICAweDlDQzU6IDB4NjEyQyxcbiAgICAweDlDQzY6IDB4NjEzNCxcbiAgICAweDlDQzc6IDB4NjEzRCxcbiAgICAweDlDQzg6IDB4NjE0MixcbiAgICAweDlDQzk6IDB4NjE0NCxcbiAgICAweDlDQ0E6IDB4NjE3MyxcbiAgICAweDlDQ0I6IDB4NjE3NyxcbiAgICAweDlDQ0M6IDB4NjE1OCxcbiAgICAweDlDQ0Q6IDB4NjE1OSxcbiAgICAweDlDQ0U6IDB4NjE1QSxcbiAgICAweDlDQ0Y6IDB4NjE2QixcbiAgICAweDlDRDA6IDB4NjE3NCxcbiAgICAweDlDRDE6IDB4NjE2RixcbiAgICAweDlDRDI6IDB4NjE2NSxcbiAgICAweDlDRDM6IDB4NjE3MSxcbiAgICAweDlDRDQ6IDB4NjE1RixcbiAgICAweDlDRDU6IDB4NjE1RCxcbiAgICAweDlDRDY6IDB4NjE1MyxcbiAgICAweDlDRDc6IDB4NjE3NSxcbiAgICAweDlDRDg6IDB4NjE5OSxcbiAgICAweDlDRDk6IDB4NjE5NixcbiAgICAweDlDREE6IDB4NjE4NyxcbiAgICAweDlDREI6IDB4NjFBQyxcbiAgICAweDlDREM6IDB4NjE5NCxcbiAgICAweDlDREQ6IDB4NjE5QSxcbiAgICAweDlDREU6IDB4NjE4QSxcbiAgICAweDlDREY6IDB4NjE5MSxcbiAgICAweDlDRTA6IDB4NjFBQixcbiAgICAweDlDRTE6IDB4NjFBRSxcbiAgICAweDlDRTI6IDB4NjFDQyxcbiAgICAweDlDRTM6IDB4NjFDQSxcbiAgICAweDlDRTQ6IDB4NjFDOSxcbiAgICAweDlDRTU6IDB4NjFGNyxcbiAgICAweDlDRTY6IDB4NjFDOCxcbiAgICAweDlDRTc6IDB4NjFDMyxcbiAgICAweDlDRTg6IDB4NjFDNixcbiAgICAweDlDRTk6IDB4NjFCQSxcbiAgICAweDlDRUE6IDB4NjFDQixcbiAgICAweDlDRUI6IDB4N0Y3OSxcbiAgICAweDlDRUM6IDB4NjFDRCxcbiAgICAweDlDRUQ6IDB4NjFFNixcbiAgICAweDlDRUU6IDB4NjFFMyxcbiAgICAweDlDRUY6IDB4NjFGNixcbiAgICAweDlDRjA6IDB4NjFGQSxcbiAgICAweDlDRjE6IDB4NjFGNCxcbiAgICAweDlDRjI6IDB4NjFGRixcbiAgICAweDlDRjM6IDB4NjFGRCxcbiAgICAweDlDRjQ6IDB4NjFGQyxcbiAgICAweDlDRjU6IDB4NjFGRSxcbiAgICAweDlDRjY6IDB4NjIwMCxcbiAgICAweDlDRjc6IDB4NjIwOCxcbiAgICAweDlDRjg6IDB4NjIwOSxcbiAgICAweDlDRjk6IDB4NjIwRCxcbiAgICAweDlDRkE6IDB4NjIwQyxcbiAgICAweDlDRkI6IDB4NjIxNCxcbiAgICAweDlDRkM6IDB4NjIxQixcbiAgICAweDlENDA6IDB4NjIxRSxcbiAgICAweDlENDE6IDB4NjIyMSxcbiAgICAweDlENDI6IDB4NjIyQSxcbiAgICAweDlENDM6IDB4NjIyRSxcbiAgICAweDlENDQ6IDB4NjIzMCxcbiAgICAweDlENDU6IDB4NjIzMixcbiAgICAweDlENDY6IDB4NjIzMyxcbiAgICAweDlENDc6IDB4NjI0MSxcbiAgICAweDlENDg6IDB4NjI0RSxcbiAgICAweDlENDk6IDB4NjI1RSxcbiAgICAweDlENEE6IDB4NjI2MyxcbiAgICAweDlENEI6IDB4NjI1QixcbiAgICAweDlENEM6IDB4NjI2MCxcbiAgICAweDlENEQ6IDB4NjI2OCxcbiAgICAweDlENEU6IDB4NjI3QyxcbiAgICAweDlENEY6IDB4NjI4MixcbiAgICAweDlENTA6IDB4NjI4OSxcbiAgICAweDlENTE6IDB4NjI3RSxcbiAgICAweDlENTI6IDB4NjI5MixcbiAgICAweDlENTM6IDB4NjI5MyxcbiAgICAweDlENTQ6IDB4NjI5NixcbiAgICAweDlENTU6IDB4NjJENCxcbiAgICAweDlENTY6IDB4NjI4MyxcbiAgICAweDlENTc6IDB4NjI5NCxcbiAgICAweDlENTg6IDB4NjJENyxcbiAgICAweDlENTk6IDB4NjJEMSxcbiAgICAweDlENUE6IDB4NjJCQixcbiAgICAweDlENUI6IDB4NjJDRixcbiAgICAweDlENUM6IDB4NjJGRixcbiAgICAweDlENUQ6IDB4NjJDNixcbiAgICAweDlENUU6IDB4NjRENCxcbiAgICAweDlENUY6IDB4NjJDOCxcbiAgICAweDlENjA6IDB4NjJEQyxcbiAgICAweDlENjE6IDB4NjJDQyxcbiAgICAweDlENjI6IDB4NjJDQSxcbiAgICAweDlENjM6IDB4NjJDMixcbiAgICAweDlENjQ6IDB4NjJDNyxcbiAgICAweDlENjU6IDB4NjI5QixcbiAgICAweDlENjY6IDB4NjJDOSxcbiAgICAweDlENjc6IDB4NjMwQyxcbiAgICAweDlENjg6IDB4NjJFRSxcbiAgICAweDlENjk6IDB4NjJGMSxcbiAgICAweDlENkE6IDB4NjMyNyxcbiAgICAweDlENkI6IDB4NjMwMixcbiAgICAweDlENkM6IDB4NjMwOCxcbiAgICAweDlENkQ6IDB4NjJFRixcbiAgICAweDlENkU6IDB4NjJGNSxcbiAgICAweDlENkY6IDB4NjM1MCxcbiAgICAweDlENzA6IDB4NjMzRSxcbiAgICAweDlENzE6IDB4NjM0RCxcbiAgICAweDlENzI6IDB4NjQxQyxcbiAgICAweDlENzM6IDB4NjM0RixcbiAgICAweDlENzQ6IDB4NjM5NixcbiAgICAweDlENzU6IDB4NjM4RSxcbiAgICAweDlENzY6IDB4NjM4MCxcbiAgICAweDlENzc6IDB4NjNBQixcbiAgICAweDlENzg6IDB4NjM3NixcbiAgICAweDlENzk6IDB4NjNBMyxcbiAgICAweDlEN0E6IDB4NjM4RixcbiAgICAweDlEN0I6IDB4NjM4OSxcbiAgICAweDlEN0M6IDB4NjM5RixcbiAgICAweDlEN0Q6IDB4NjNCNSxcbiAgICAweDlEN0U6IDB4NjM2QixcbiAgICAweDlEODA6IDB4NjM2OSxcbiAgICAweDlEODE6IDB4NjNCRSxcbiAgICAweDlEODI6IDB4NjNFOSxcbiAgICAweDlEODM6IDB4NjNDMCxcbiAgICAweDlEODQ6IDB4NjNDNixcbiAgICAweDlEODU6IDB4NjNFMyxcbiAgICAweDlEODY6IDB4NjNDOSxcbiAgICAweDlEODc6IDB4NjNEMixcbiAgICAweDlEODg6IDB4NjNGNixcbiAgICAweDlEODk6IDB4NjNDNCxcbiAgICAweDlEOEE6IDB4NjQxNixcbiAgICAweDlEOEI6IDB4NjQzNCxcbiAgICAweDlEOEM6IDB4NjQwNixcbiAgICAweDlEOEQ6IDB4NjQxMyxcbiAgICAweDlEOEU6IDB4NjQyNixcbiAgICAweDlEOEY6IDB4NjQzNixcbiAgICAweDlEOTA6IDB4NjUxRCxcbiAgICAweDlEOTE6IDB4NjQxNyxcbiAgICAweDlEOTI6IDB4NjQyOCxcbiAgICAweDlEOTM6IDB4NjQwRixcbiAgICAweDlEOTQ6IDB4NjQ2NyxcbiAgICAweDlEOTU6IDB4NjQ2RixcbiAgICAweDlEOTY6IDB4NjQ3NixcbiAgICAweDlEOTc6IDB4NjQ0RSxcbiAgICAweDlEOTg6IDB4NjUyQSxcbiAgICAweDlEOTk6IDB4NjQ5NSxcbiAgICAweDlEOUE6IDB4NjQ5MyxcbiAgICAweDlEOUI6IDB4NjRBNSxcbiAgICAweDlEOUM6IDB4NjRBOSxcbiAgICAweDlEOUQ6IDB4NjQ4OCxcbiAgICAweDlEOUU6IDB4NjRCQyxcbiAgICAweDlEOUY6IDB4NjREQSxcbiAgICAweDlEQTA6IDB4NjREMixcbiAgICAweDlEQTE6IDB4NjRDNSxcbiAgICAweDlEQTI6IDB4NjRDNyxcbiAgICAweDlEQTM6IDB4NjRCQixcbiAgICAweDlEQTQ6IDB4NjREOCxcbiAgICAweDlEQTU6IDB4NjRDMixcbiAgICAweDlEQTY6IDB4NjRGMSxcbiAgICAweDlEQTc6IDB4NjRFNyxcbiAgICAweDlEQTg6IDB4ODIwOSxcbiAgICAweDlEQTk6IDB4NjRFMCxcbiAgICAweDlEQUE6IDB4NjRFMSxcbiAgICAweDlEQUI6IDB4NjJBQyxcbiAgICAweDlEQUM6IDB4NjRFMyxcbiAgICAweDlEQUQ6IDB4NjRFRixcbiAgICAweDlEQUU6IDB4NjUyQyxcbiAgICAweDlEQUY6IDB4NjRGNixcbiAgICAweDlEQjA6IDB4NjRGNCxcbiAgICAweDlEQjE6IDB4NjRGMixcbiAgICAweDlEQjI6IDB4NjRGQSxcbiAgICAweDlEQjM6IDB4NjUwMCxcbiAgICAweDlEQjQ6IDB4NjRGRCxcbiAgICAweDlEQjU6IDB4NjUxOCxcbiAgICAweDlEQjY6IDB4NjUxQyxcbiAgICAweDlEQjc6IDB4NjUwNSxcbiAgICAweDlEQjg6IDB4NjUyNCxcbiAgICAweDlEQjk6IDB4NjUyMyxcbiAgICAweDlEQkE6IDB4NjUyQixcbiAgICAweDlEQkI6IDB4NjUzNCxcbiAgICAweDlEQkM6IDB4NjUzNSxcbiAgICAweDlEQkQ6IDB4NjUzNyxcbiAgICAweDlEQkU6IDB4NjUzNixcbiAgICAweDlEQkY6IDB4NjUzOCxcbiAgICAweDlEQzA6IDB4NzU0QixcbiAgICAweDlEQzE6IDB4NjU0OCxcbiAgICAweDlEQzI6IDB4NjU1NixcbiAgICAweDlEQzM6IDB4NjU1NSxcbiAgICAweDlEQzQ6IDB4NjU0RCxcbiAgICAweDlEQzU6IDB4NjU1OCxcbiAgICAweDlEQzY6IDB4NjU1RSxcbiAgICAweDlEQzc6IDB4NjU1RCxcbiAgICAweDlEQzg6IDB4NjU3MixcbiAgICAweDlEQzk6IDB4NjU3OCxcbiAgICAweDlEQ0E6IDB4NjU4MixcbiAgICAweDlEQ0I6IDB4NjU4MyxcbiAgICAweDlEQ0M6IDB4OEI4QSxcbiAgICAweDlEQ0Q6IDB4NjU5QixcbiAgICAweDlEQ0U6IDB4NjU5RixcbiAgICAweDlEQ0Y6IDB4NjVBQixcbiAgICAweDlERDA6IDB4NjVCNyxcbiAgICAweDlERDE6IDB4NjVDMyxcbiAgICAweDlERDI6IDB4NjVDNixcbiAgICAweDlERDM6IDB4NjVDMSxcbiAgICAweDlERDQ6IDB4NjVDNCxcbiAgICAweDlERDU6IDB4NjVDQyxcbiAgICAweDlERDY6IDB4NjVEMixcbiAgICAweDlERDc6IDB4NjVEQixcbiAgICAweDlERDg6IDB4NjVEOSxcbiAgICAweDlERDk6IDB4NjVFMCxcbiAgICAweDlEREE6IDB4NjVFMSxcbiAgICAweDlEREI6IDB4NjVGMSxcbiAgICAweDlEREM6IDB4Njc3MixcbiAgICAweDlEREQ6IDB4NjYwQSxcbiAgICAweDlEREU6IDB4NjYwMyxcbiAgICAweDlEREY6IDB4NjVGQixcbiAgICAweDlERTA6IDB4Njc3MyxcbiAgICAweDlERTE6IDB4NjYzNSxcbiAgICAweDlERTI6IDB4NjYzNixcbiAgICAweDlERTM6IDB4NjYzNCxcbiAgICAweDlERTQ6IDB4NjYxQyxcbiAgICAweDlERTU6IDB4NjY0RixcbiAgICAweDlERTY6IDB4NjY0NCxcbiAgICAweDlERTc6IDB4NjY0OSxcbiAgICAweDlERTg6IDB4NjY0MSxcbiAgICAweDlERTk6IDB4NjY1RSxcbiAgICAweDlERUE6IDB4NjY1RCxcbiAgICAweDlERUI6IDB4NjY2NCxcbiAgICAweDlERUM6IDB4NjY2NyxcbiAgICAweDlERUQ6IDB4NjY2OCxcbiAgICAweDlERUU6IDB4NjY1RixcbiAgICAweDlERUY6IDB4NjY2MixcbiAgICAweDlERjA6IDB4NjY3MCxcbiAgICAweDlERjE6IDB4NjY4MyxcbiAgICAweDlERjI6IDB4NjY4OCxcbiAgICAweDlERjM6IDB4NjY4RSxcbiAgICAweDlERjQ6IDB4NjY4OSxcbiAgICAweDlERjU6IDB4NjY4NCxcbiAgICAweDlERjY6IDB4NjY5OCxcbiAgICAweDlERjc6IDB4NjY5RCxcbiAgICAweDlERjg6IDB4NjZDMSxcbiAgICAweDlERjk6IDB4NjZCOSxcbiAgICAweDlERkE6IDB4NjZDOSxcbiAgICAweDlERkI6IDB4NjZCRSxcbiAgICAweDlERkM6IDB4NjZCQyxcbiAgICAweDlFNDA6IDB4NjZDNCxcbiAgICAweDlFNDE6IDB4NjZCOCxcbiAgICAweDlFNDI6IDB4NjZENixcbiAgICAweDlFNDM6IDB4NjZEQSxcbiAgICAweDlFNDQ6IDB4NjZFMCxcbiAgICAweDlFNDU6IDB4NjYzRixcbiAgICAweDlFNDY6IDB4NjZFNixcbiAgICAweDlFNDc6IDB4NjZFOSxcbiAgICAweDlFNDg6IDB4NjZGMCxcbiAgICAweDlFNDk6IDB4NjZGNSxcbiAgICAweDlFNEE6IDB4NjZGNyxcbiAgICAweDlFNEI6IDB4NjcwRixcbiAgICAweDlFNEM6IDB4NjcxNixcbiAgICAweDlFNEQ6IDB4NjcxRSxcbiAgICAweDlFNEU6IDB4NjcyNixcbiAgICAweDlFNEY6IDB4NjcyNyxcbiAgICAweDlFNTA6IDB4OTczOCxcbiAgICAweDlFNTE6IDB4NjcyRSxcbiAgICAweDlFNTI6IDB4NjczRixcbiAgICAweDlFNTM6IDB4NjczNixcbiAgICAweDlFNTQ6IDB4Njc0MSxcbiAgICAweDlFNTU6IDB4NjczOCxcbiAgICAweDlFNTY6IDB4NjczNyxcbiAgICAweDlFNTc6IDB4Njc0NixcbiAgICAweDlFNTg6IDB4Njc1RSxcbiAgICAweDlFNTk6IDB4Njc2MCxcbiAgICAweDlFNUE6IDB4Njc1OSxcbiAgICAweDlFNUI6IDB4Njc2MyxcbiAgICAweDlFNUM6IDB4Njc2NCxcbiAgICAweDlFNUQ6IDB4Njc4OSxcbiAgICAweDlFNUU6IDB4Njc3MCxcbiAgICAweDlFNUY6IDB4NjdBOSxcbiAgICAweDlFNjA6IDB4Njc3QyxcbiAgICAweDlFNjE6IDB4Njc2QSxcbiAgICAweDlFNjI6IDB4Njc4QyxcbiAgICAweDlFNjM6IDB4Njc4QixcbiAgICAweDlFNjQ6IDB4NjdBNixcbiAgICAweDlFNjU6IDB4NjdBMSxcbiAgICAweDlFNjY6IDB4Njc4NSxcbiAgICAweDlFNjc6IDB4NjdCNyxcbiAgICAweDlFNjg6IDB4NjdFRixcbiAgICAweDlFNjk6IDB4NjdCNCxcbiAgICAweDlFNkE6IDB4NjdFQyxcbiAgICAweDlFNkI6IDB4NjdCMyxcbiAgICAweDlFNkM6IDB4NjdFOSxcbiAgICAweDlFNkQ6IDB4NjdCOCxcbiAgICAweDlFNkU6IDB4NjdFNCxcbiAgICAweDlFNkY6IDB4NjdERSxcbiAgICAweDlFNzA6IDB4NjdERCxcbiAgICAweDlFNzE6IDB4NjdFMixcbiAgICAweDlFNzI6IDB4NjdFRSxcbiAgICAweDlFNzM6IDB4NjdCOSxcbiAgICAweDlFNzQ6IDB4NjdDRSxcbiAgICAweDlFNzU6IDB4NjdDNixcbiAgICAweDlFNzY6IDB4NjdFNyxcbiAgICAweDlFNzc6IDB4NkE5QyxcbiAgICAweDlFNzg6IDB4NjgxRSxcbiAgICAweDlFNzk6IDB4Njg0NixcbiAgICAweDlFN0E6IDB4NjgyOSxcbiAgICAweDlFN0I6IDB4Njg0MCxcbiAgICAweDlFN0M6IDB4Njg0RCxcbiAgICAweDlFN0Q6IDB4NjgzMixcbiAgICAweDlFN0U6IDB4Njg0RSxcbiAgICAweDlFODA6IDB4NjhCMyxcbiAgICAweDlFODE6IDB4NjgyQixcbiAgICAweDlFODI6IDB4Njg1OSxcbiAgICAweDlFODM6IDB4Njg2MyxcbiAgICAweDlFODQ6IDB4Njg3NyxcbiAgICAweDlFODU6IDB4Njg3RixcbiAgICAweDlFODY6IDB4Njg5RixcbiAgICAweDlFODc6IDB4Njg4RixcbiAgICAweDlFODg6IDB4NjhBRCxcbiAgICAweDlFODk6IDB4Njg5NCxcbiAgICAweDlFOEE6IDB4Njg5RCxcbiAgICAweDlFOEI6IDB4Njg5QixcbiAgICAweDlFOEM6IDB4Njg4MyxcbiAgICAweDlFOEQ6IDB4NkFBRSxcbiAgICAweDlFOEU6IDB4NjhCOSxcbiAgICAweDlFOEY6IDB4Njg3NCxcbiAgICAweDlFOTA6IDB4NjhCNSxcbiAgICAweDlFOTE6IDB4NjhBMCxcbiAgICAweDlFOTI6IDB4NjhCQSxcbiAgICAweDlFOTM6IDB4NjkwRixcbiAgICAweDlFOTQ6IDB4Njg4RCxcbiAgICAweDlFOTU6IDB4Njg3RSxcbiAgICAweDlFOTY6IDB4NjkwMSxcbiAgICAweDlFOTc6IDB4NjhDQSxcbiAgICAweDlFOTg6IDB4NjkwOCxcbiAgICAweDlFOTk6IDB4NjhEOCxcbiAgICAweDlFOUE6IDB4NjkyMixcbiAgICAweDlFOUI6IDB4NjkyNixcbiAgICAweDlFOUM6IDB4NjhFMSxcbiAgICAweDlFOUQ6IDB4NjkwQyxcbiAgICAweDlFOUU6IDB4NjhDRCxcbiAgICAweDlFOUY6IDB4NjhENCxcbiAgICAweDlFQTA6IDB4NjhFNyxcbiAgICAweDlFQTE6IDB4NjhENSxcbiAgICAweDlFQTI6IDB4NjkzNixcbiAgICAweDlFQTM6IDB4NjkxMixcbiAgICAweDlFQTQ6IDB4NjkwNCxcbiAgICAweDlFQTU6IDB4NjhENyxcbiAgICAweDlFQTY6IDB4NjhFMyxcbiAgICAweDlFQTc6IDB4NjkyNSxcbiAgICAweDlFQTg6IDB4NjhGOSxcbiAgICAweDlFQTk6IDB4NjhFMCxcbiAgICAweDlFQUE6IDB4NjhFRixcbiAgICAweDlFQUI6IDB4NjkyOCxcbiAgICAweDlFQUM6IDB4NjkyQSxcbiAgICAweDlFQUQ6IDB4NjkxQSxcbiAgICAweDlFQUU6IDB4NjkyMyxcbiAgICAweDlFQUY6IDB4NjkyMSxcbiAgICAweDlFQjA6IDB4NjhDNixcbiAgICAweDlFQjE6IDB4Njk3OSxcbiAgICAweDlFQjI6IDB4Njk3NyxcbiAgICAweDlFQjM6IDB4Njk1QyxcbiAgICAweDlFQjQ6IDB4Njk3OCxcbiAgICAweDlFQjU6IDB4Njk2QixcbiAgICAweDlFQjY6IDB4Njk1NCxcbiAgICAweDlFQjc6IDB4Njk3RSxcbiAgICAweDlFQjg6IDB4Njk2RSxcbiAgICAweDlFQjk6IDB4NjkzOSxcbiAgICAweDlFQkE6IDB4Njk3NCxcbiAgICAweDlFQkI6IDB4NjkzRCxcbiAgICAweDlFQkM6IDB4Njk1OSxcbiAgICAweDlFQkQ6IDB4NjkzMCxcbiAgICAweDlFQkU6IDB4Njk2MSxcbiAgICAweDlFQkY6IDB4Njk1RSxcbiAgICAweDlFQzA6IDB4Njk1RCxcbiAgICAweDlFQzE6IDB4Njk4MSxcbiAgICAweDlFQzI6IDB4Njk2QSxcbiAgICAweDlFQzM6IDB4NjlCMixcbiAgICAweDlFQzQ6IDB4NjlBRSxcbiAgICAweDlFQzU6IDB4NjlEMCxcbiAgICAweDlFQzY6IDB4NjlCRixcbiAgICAweDlFQzc6IDB4NjlDMSxcbiAgICAweDlFQzg6IDB4NjlEMyxcbiAgICAweDlFQzk6IDB4NjlCRSxcbiAgICAweDlFQ0E6IDB4NjlDRSxcbiAgICAweDlFQ0I6IDB4NUJFOCxcbiAgICAweDlFQ0M6IDB4NjlDQSxcbiAgICAweDlFQ0Q6IDB4NjlERCxcbiAgICAweDlFQ0U6IDB4NjlCQixcbiAgICAweDlFQ0Y6IDB4NjlDMyxcbiAgICAweDlFRDA6IDB4NjlBNyxcbiAgICAweDlFRDE6IDB4NkEyRSxcbiAgICAweDlFRDI6IDB4Njk5MSxcbiAgICAweDlFRDM6IDB4NjlBMCxcbiAgICAweDlFRDQ6IDB4Njk5QyxcbiAgICAweDlFRDU6IDB4Njk5NSxcbiAgICAweDlFRDY6IDB4NjlCNCxcbiAgICAweDlFRDc6IDB4NjlERSxcbiAgICAweDlFRDg6IDB4NjlFOCxcbiAgICAweDlFRDk6IDB4NkEwMixcbiAgICAweDlFREE6IDB4NkExQixcbiAgICAweDlFREI6IDB4NjlGRixcbiAgICAweDlFREM6IDB4NkIwQSxcbiAgICAweDlFREQ6IDB4NjlGOSxcbiAgICAweDlFREU6IDB4NjlGMixcbiAgICAweDlFREY6IDB4NjlFNyxcbiAgICAweDlFRTA6IDB4NkEwNSxcbiAgICAweDlFRTE6IDB4NjlCMSxcbiAgICAweDlFRTI6IDB4NkExRSxcbiAgICAweDlFRTM6IDB4NjlFRCxcbiAgICAweDlFRTQ6IDB4NkExNCxcbiAgICAweDlFRTU6IDB4NjlFQixcbiAgICAweDlFRTY6IDB4NkEwQSxcbiAgICAweDlFRTc6IDB4NkExMixcbiAgICAweDlFRTg6IDB4NkFDMSxcbiAgICAweDlFRTk6IDB4NkEyMyxcbiAgICAweDlFRUE6IDB4NkExMyxcbiAgICAweDlFRUI6IDB4NkE0NCxcbiAgICAweDlFRUM6IDB4NkEwQyxcbiAgICAweDlFRUQ6IDB4NkE3MixcbiAgICAweDlFRUU6IDB4NkEzNixcbiAgICAweDlFRUY6IDB4NkE3OCxcbiAgICAweDlFRjA6IDB4NkE0NyxcbiAgICAweDlFRjE6IDB4NkE2MixcbiAgICAweDlFRjI6IDB4NkE1OSxcbiAgICAweDlFRjM6IDB4NkE2NixcbiAgICAweDlFRjQ6IDB4NkE0OCxcbiAgICAweDlFRjU6IDB4NkEzOCxcbiAgICAweDlFRjY6IDB4NkEyMixcbiAgICAweDlFRjc6IDB4NkE5MCxcbiAgICAweDlFRjg6IDB4NkE4RCxcbiAgICAweDlFRjk6IDB4NkFBMCxcbiAgICAweDlFRkE6IDB4NkE4NCxcbiAgICAweDlFRkI6IDB4NkFBMixcbiAgICAweDlFRkM6IDB4NkFBMyxcbiAgICAweDlGNDA6IDB4NkE5NyxcbiAgICAweDlGNDE6IDB4ODYxNyxcbiAgICAweDlGNDI6IDB4NkFCQixcbiAgICAweDlGNDM6IDB4NkFDMyxcbiAgICAweDlGNDQ6IDB4NkFDMixcbiAgICAweDlGNDU6IDB4NkFCOCxcbiAgICAweDlGNDY6IDB4NkFCMyxcbiAgICAweDlGNDc6IDB4NkFBQyxcbiAgICAweDlGNDg6IDB4NkFERSxcbiAgICAweDlGNDk6IDB4NkFEMSxcbiAgICAweDlGNEE6IDB4NkFERixcbiAgICAweDlGNEI6IDB4NkFBQSxcbiAgICAweDlGNEM6IDB4NkFEQSxcbiAgICAweDlGNEQ6IDB4NkFFQSxcbiAgICAweDlGNEU6IDB4NkFGQixcbiAgICAweDlGNEY6IDB4NkIwNSxcbiAgICAweDlGNTA6IDB4ODYxNixcbiAgICAweDlGNTE6IDB4NkFGQSxcbiAgICAweDlGNTI6IDB4NkIxMixcbiAgICAweDlGNTM6IDB4NkIxNixcbiAgICAweDlGNTQ6IDB4OUIzMSxcbiAgICAweDlGNTU6IDB4NkIxRixcbiAgICAweDlGNTY6IDB4NkIzOCxcbiAgICAweDlGNTc6IDB4NkIzNyxcbiAgICAweDlGNTg6IDB4NzZEQyxcbiAgICAweDlGNTk6IDB4NkIzOSxcbiAgICAweDlGNUE6IDB4OThFRSxcbiAgICAweDlGNUI6IDB4NkI0NyxcbiAgICAweDlGNUM6IDB4NkI0MyxcbiAgICAweDlGNUQ6IDB4NkI0OSxcbiAgICAweDlGNUU6IDB4NkI1MCxcbiAgICAweDlGNUY6IDB4NkI1OSxcbiAgICAweDlGNjA6IDB4NkI1NCxcbiAgICAweDlGNjE6IDB4NkI1QixcbiAgICAweDlGNjI6IDB4NkI1RixcbiAgICAweDlGNjM6IDB4NkI2MSxcbiAgICAweDlGNjQ6IDB4NkI3OCxcbiAgICAweDlGNjU6IDB4NkI3OSxcbiAgICAweDlGNjY6IDB4NkI3RixcbiAgICAweDlGNjc6IDB4NkI4MCxcbiAgICAweDlGNjg6IDB4NkI4NCxcbiAgICAweDlGNjk6IDB4NkI4MyxcbiAgICAweDlGNkE6IDB4NkI4RCxcbiAgICAweDlGNkI6IDB4NkI5OCxcbiAgICAweDlGNkM6IDB4NkI5NSxcbiAgICAweDlGNkQ6IDB4NkI5RSxcbiAgICAweDlGNkU6IDB4NkJBNCxcbiAgICAweDlGNkY6IDB4NkJBQSxcbiAgICAweDlGNzA6IDB4NkJBQixcbiAgICAweDlGNzE6IDB4NkJBRixcbiAgICAweDlGNzI6IDB4NkJCMixcbiAgICAweDlGNzM6IDB4NkJCMSxcbiAgICAweDlGNzQ6IDB4NkJCMyxcbiAgICAweDlGNzU6IDB4NkJCNyxcbiAgICAweDlGNzY6IDB4NkJCQyxcbiAgICAweDlGNzc6IDB4NkJDNixcbiAgICAweDlGNzg6IDB4NkJDQixcbiAgICAweDlGNzk6IDB4NkJEMyxcbiAgICAweDlGN0E6IDB4NkJERixcbiAgICAweDlGN0I6IDB4NkJFQyxcbiAgICAweDlGN0M6IDB4NkJFQixcbiAgICAweDlGN0Q6IDB4NkJGMyxcbiAgICAweDlGN0U6IDB4NkJFRixcbiAgICAweDlGODA6IDB4OUVCRSxcbiAgICAweDlGODE6IDB4NkMwOCxcbiAgICAweDlGODI6IDB4NkMxMyxcbiAgICAweDlGODM6IDB4NkMxNCxcbiAgICAweDlGODQ6IDB4NkMxQixcbiAgICAweDlGODU6IDB4NkMyNCxcbiAgICAweDlGODY6IDB4NkMyMyxcbiAgICAweDlGODc6IDB4NkM1RSxcbiAgICAweDlGODg6IDB4NkM1NSxcbiAgICAweDlGODk6IDB4NkM2MixcbiAgICAweDlGOEE6IDB4NkM2QSxcbiAgICAweDlGOEI6IDB4NkM4MixcbiAgICAweDlGOEM6IDB4NkM4RCxcbiAgICAweDlGOEQ6IDB4NkM5QSxcbiAgICAweDlGOEU6IDB4NkM4MSxcbiAgICAweDlGOEY6IDB4NkM5QixcbiAgICAweDlGOTA6IDB4NkM3RSxcbiAgICAweDlGOTE6IDB4NkM2OCxcbiAgICAweDlGOTI6IDB4NkM3MyxcbiAgICAweDlGOTM6IDB4NkM5MixcbiAgICAweDlGOTQ6IDB4NkM5MCxcbiAgICAweDlGOTU6IDB4NkNDNCxcbiAgICAweDlGOTY6IDB4NkNGMSxcbiAgICAweDlGOTc6IDB4NkNEMyxcbiAgICAweDlGOTg6IDB4NkNCRCxcbiAgICAweDlGOTk6IDB4NkNENyxcbiAgICAweDlGOUE6IDB4NkNDNSxcbiAgICAweDlGOUI6IDB4NkNERCxcbiAgICAweDlGOUM6IDB4NkNBRSxcbiAgICAweDlGOUQ6IDB4NkNCMSxcbiAgICAweDlGOUU6IDB4NkNCRSxcbiAgICAweDlGOUY6IDB4NkNCQSxcbiAgICAweDlGQTA6IDB4NkNEQixcbiAgICAweDlGQTE6IDB4NkNFRixcbiAgICAweDlGQTI6IDB4NkNEOSxcbiAgICAweDlGQTM6IDB4NkNFQSxcbiAgICAweDlGQTQ6IDB4NkQxRixcbiAgICAweDlGQTU6IDB4ODg0RCxcbiAgICAweDlGQTY6IDB4NkQzNixcbiAgICAweDlGQTc6IDB4NkQyQixcbiAgICAweDlGQTg6IDB4NkQzRCxcbiAgICAweDlGQTk6IDB4NkQzOCxcbiAgICAweDlGQUE6IDB4NkQxOSxcbiAgICAweDlGQUI6IDB4NkQzNSxcbiAgICAweDlGQUM6IDB4NkQzMyxcbiAgICAweDlGQUQ6IDB4NkQxMixcbiAgICAweDlGQUU6IDB4NkQwQyxcbiAgICAweDlGQUY6IDB4NkQ2MyxcbiAgICAweDlGQjA6IDB4NkQ5MyxcbiAgICAweDlGQjE6IDB4NkQ2NCxcbiAgICAweDlGQjI6IDB4NkQ1QSxcbiAgICAweDlGQjM6IDB4NkQ3OSxcbiAgICAweDlGQjQ6IDB4NkQ1OSxcbiAgICAweDlGQjU6IDB4NkQ4RSxcbiAgICAweDlGQjY6IDB4NkQ5NSxcbiAgICAweDlGQjc6IDB4NkZFNCxcbiAgICAweDlGQjg6IDB4NkQ4NSxcbiAgICAweDlGQjk6IDB4NkRGOSxcbiAgICAweDlGQkE6IDB4NkUxNSxcbiAgICAweDlGQkI6IDB4NkUwQSxcbiAgICAweDlGQkM6IDB4NkRCNSxcbiAgICAweDlGQkQ6IDB4NkRDNyxcbiAgICAweDlGQkU6IDB4NkRFNixcbiAgICAweDlGQkY6IDB4NkRCOCxcbiAgICAweDlGQzA6IDB4NkRDNixcbiAgICAweDlGQzE6IDB4NkRFQyxcbiAgICAweDlGQzI6IDB4NkRERSxcbiAgICAweDlGQzM6IDB4NkRDQyxcbiAgICAweDlGQzQ6IDB4NkRFOCxcbiAgICAweDlGQzU6IDB4NkREMixcbiAgICAweDlGQzY6IDB4NkRDNSxcbiAgICAweDlGQzc6IDB4NkRGQSxcbiAgICAweDlGQzg6IDB4NkREOSxcbiAgICAweDlGQzk6IDB4NkRFNCxcbiAgICAweDlGQ0E6IDB4NkRENSxcbiAgICAweDlGQ0I6IDB4NkRFQSxcbiAgICAweDlGQ0M6IDB4NkRFRSxcbiAgICAweDlGQ0Q6IDB4NkUyRCxcbiAgICAweDlGQ0U6IDB4NkU2RSxcbiAgICAweDlGQ0Y6IDB4NkUyRSxcbiAgICAweDlGRDA6IDB4NkUxOSxcbiAgICAweDlGRDE6IDB4NkU3MixcbiAgICAweDlGRDI6IDB4NkU1RixcbiAgICAweDlGRDM6IDB4NkUzRSxcbiAgICAweDlGRDQ6IDB4NkUyMyxcbiAgICAweDlGRDU6IDB4NkU2QixcbiAgICAweDlGRDY6IDB4NkUyQixcbiAgICAweDlGRDc6IDB4NkU3NixcbiAgICAweDlGRDg6IDB4NkU0RCxcbiAgICAweDlGRDk6IDB4NkUxRixcbiAgICAweDlGREE6IDB4NkU0MyxcbiAgICAweDlGREI6IDB4NkUzQSxcbiAgICAweDlGREM6IDB4NkU0RSxcbiAgICAweDlGREQ6IDB4NkUyNCxcbiAgICAweDlGREU6IDB4NkVGRixcbiAgICAweDlGREY6IDB4NkUxRCxcbiAgICAweDlGRTA6IDB4NkUzOCxcbiAgICAweDlGRTE6IDB4NkU4MixcbiAgICAweDlGRTI6IDB4NkVBQSxcbiAgICAweDlGRTM6IDB4NkU5OCxcbiAgICAweDlGRTQ6IDB4NkVDOSxcbiAgICAweDlGRTU6IDB4NkVCNyxcbiAgICAweDlGRTY6IDB4NkVEMyxcbiAgICAweDlGRTc6IDB4NkVCRCxcbiAgICAweDlGRTg6IDB4NkVBRixcbiAgICAweDlGRTk6IDB4NkVDNCxcbiAgICAweDlGRUE6IDB4NkVCMixcbiAgICAweDlGRUI6IDB4NkVENCxcbiAgICAweDlGRUM6IDB4NkVENSxcbiAgICAweDlGRUQ6IDB4NkU4RixcbiAgICAweDlGRUU6IDB4NkVBNSxcbiAgICAweDlGRUY6IDB4NkVDMixcbiAgICAweDlGRjA6IDB4NkU5RixcbiAgICAweDlGRjE6IDB4NkY0MSxcbiAgICAweDlGRjI6IDB4NkYxMSxcbiAgICAweDlGRjM6IDB4NzA0QyxcbiAgICAweDlGRjQ6IDB4NkVFQyxcbiAgICAweDlGRjU6IDB4NkVGOCxcbiAgICAweDlGRjY6IDB4NkVGRSxcbiAgICAweDlGRjc6IDB4NkYzRixcbiAgICAweDlGRjg6IDB4NkVGMixcbiAgICAweDlGRjk6IDB4NkYzMSxcbiAgICAweDlGRkE6IDB4NkVFRixcbiAgICAweDlGRkI6IDB4NkYzMixcbiAgICAweDlGRkM6IDB4NkVDQyxcbiAgICAweEExOiAweEZGNjEsXG4gICAgMHhBMjogMHhGRjYyLFxuICAgIDB4QTM6IDB4RkY2MyxcbiAgICAweEE0OiAweEZGNjQsXG4gICAgMHhBNTogMHhGRjY1LFxuICAgIDB4QTY6IDB4RkY2NixcbiAgICAweEE3OiAweEZGNjcsXG4gICAgMHhBODogMHhGRjY4LFxuICAgIDB4QTk6IDB4RkY2OSxcbiAgICAweEFBOiAweEZGNkEsXG4gICAgMHhBQjogMHhGRjZCLFxuICAgIDB4QUM6IDB4RkY2QyxcbiAgICAweEFEOiAweEZGNkQsXG4gICAgMHhBRTogMHhGRjZFLFxuICAgIDB4QUY6IDB4RkY2RixcbiAgICAweEIwOiAweEZGNzAsXG4gICAgMHhCMTogMHhGRjcxLFxuICAgIDB4QjI6IDB4RkY3MixcbiAgICAweEIzOiAweEZGNzMsXG4gICAgMHhCNDogMHhGRjc0LFxuICAgIDB4QjU6IDB4RkY3NSxcbiAgICAweEI2OiAweEZGNzYsXG4gICAgMHhCNzogMHhGRjc3LFxuICAgIDB4Qjg6IDB4RkY3OCxcbiAgICAweEI5OiAweEZGNzksXG4gICAgMHhCQTogMHhGRjdBLFxuICAgIDB4QkI6IDB4RkY3QixcbiAgICAweEJDOiAweEZGN0MsXG4gICAgMHhCRDogMHhGRjdELFxuICAgIDB4QkU6IDB4RkY3RSxcbiAgICAweEJGOiAweEZGN0YsXG4gICAgMHhDMDogMHhGRjgwLFxuICAgIDB4QzE6IDB4RkY4MSxcbiAgICAweEMyOiAweEZGODIsXG4gICAgMHhDMzogMHhGRjgzLFxuICAgIDB4QzQ6IDB4RkY4NCxcbiAgICAweEM1OiAweEZGODUsXG4gICAgMHhDNjogMHhGRjg2LFxuICAgIDB4Qzc6IDB4RkY4NyxcbiAgICAweEM4OiAweEZGODgsXG4gICAgMHhDOTogMHhGRjg5LFxuICAgIDB4Q0E6IDB4RkY4QSxcbiAgICAweENCOiAweEZGOEIsXG4gICAgMHhDQzogMHhGRjhDLFxuICAgIDB4Q0Q6IDB4RkY4RCxcbiAgICAweENFOiAweEZGOEUsXG4gICAgMHhDRjogMHhGRjhGLFxuICAgIDB4RDA6IDB4RkY5MCxcbiAgICAweEQxOiAweEZGOTEsXG4gICAgMHhEMjogMHhGRjkyLFxuICAgIDB4RDM6IDB4RkY5MyxcbiAgICAweEQ0OiAweEZGOTQsXG4gICAgMHhENTogMHhGRjk1LFxuICAgIDB4RDY6IDB4RkY5NixcbiAgICAweEQ3OiAweEZGOTcsXG4gICAgMHhEODogMHhGRjk4LFxuICAgIDB4RDk6IDB4RkY5OSxcbiAgICAweERBOiAweEZGOUEsXG4gICAgMHhEQjogMHhGRjlCLFxuICAgIDB4REM6IDB4RkY5QyxcbiAgICAweEREOiAweEZGOUQsXG4gICAgMHhERTogMHhGRjlFLFxuICAgIDB4REY6IDB4RkY5RixcbiAgICAweEUwNDA6IDB4NkYzRSxcbiAgICAweEUwNDE6IDB4NkYxMyxcbiAgICAweEUwNDI6IDB4NkVGNyxcbiAgICAweEUwNDM6IDB4NkY4NixcbiAgICAweEUwNDQ6IDB4NkY3QSxcbiAgICAweEUwNDU6IDB4NkY3OCxcbiAgICAweEUwNDY6IDB4NkY4MSxcbiAgICAweEUwNDc6IDB4NkY4MCxcbiAgICAweEUwNDg6IDB4NkY2RixcbiAgICAweEUwNDk6IDB4NkY1QixcbiAgICAweEUwNEE6IDB4NkZGMyxcbiAgICAweEUwNEI6IDB4NkY2RCxcbiAgICAweEUwNEM6IDB4NkY4MixcbiAgICAweEUwNEQ6IDB4NkY3QyxcbiAgICAweEUwNEU6IDB4NkY1OCxcbiAgICAweEUwNEY6IDB4NkY4RSxcbiAgICAweEUwNTA6IDB4NkY5MSxcbiAgICAweEUwNTE6IDB4NkZDMixcbiAgICAweEUwNTI6IDB4NkY2NixcbiAgICAweEUwNTM6IDB4NkZCMyxcbiAgICAweEUwNTQ6IDB4NkZBMyxcbiAgICAweEUwNTU6IDB4NkZBMSxcbiAgICAweEUwNTY6IDB4NkZBNCxcbiAgICAweEUwNTc6IDB4NkZCOSxcbiAgICAweEUwNTg6IDB4NkZDNixcbiAgICAweEUwNTk6IDB4NkZBQSxcbiAgICAweEUwNUE6IDB4NkZERixcbiAgICAweEUwNUI6IDB4NkZENSxcbiAgICAweEUwNUM6IDB4NkZFQyxcbiAgICAweEUwNUQ6IDB4NkZENCxcbiAgICAweEUwNUU6IDB4NkZEOCxcbiAgICAweEUwNUY6IDB4NkZGMSxcbiAgICAweEUwNjA6IDB4NkZFRSxcbiAgICAweEUwNjE6IDB4NkZEQixcbiAgICAweEUwNjI6IDB4NzAwOSxcbiAgICAweEUwNjM6IDB4NzAwQixcbiAgICAweEUwNjQ6IDB4NkZGQSxcbiAgICAweEUwNjU6IDB4NzAxMSxcbiAgICAweEUwNjY6IDB4NzAwMSxcbiAgICAweEUwNjc6IDB4NzAwRixcbiAgICAweEUwNjg6IDB4NkZGRSxcbiAgICAweEUwNjk6IDB4NzAxQixcbiAgICAweEUwNkE6IDB4NzAxQSxcbiAgICAweEUwNkI6IDB4NkY3NCxcbiAgICAweEUwNkM6IDB4NzAxRCxcbiAgICAweEUwNkQ6IDB4NzAxOCxcbiAgICAweEUwNkU6IDB4NzAxRixcbiAgICAweEUwNkY6IDB4NzAzMCxcbiAgICAweEUwNzA6IDB4NzAzRSxcbiAgICAweEUwNzE6IDB4NzAzMixcbiAgICAweEUwNzI6IDB4NzA1MSxcbiAgICAweEUwNzM6IDB4NzA2MyxcbiAgICAweEUwNzQ6IDB4NzA5OSxcbiAgICAweEUwNzU6IDB4NzA5MixcbiAgICAweEUwNzY6IDB4NzBBRixcbiAgICAweEUwNzc6IDB4NzBGMSxcbiAgICAweEUwNzg6IDB4NzBBQyxcbiAgICAweEUwNzk6IDB4NzBCOCxcbiAgICAweEUwN0E6IDB4NzBCMyxcbiAgICAweEUwN0I6IDB4NzBBRSxcbiAgICAweEUwN0M6IDB4NzBERixcbiAgICAweEUwN0Q6IDB4NzBDQixcbiAgICAweEUwN0U6IDB4NzBERCxcbiAgICAweEUwODA6IDB4NzBEOSxcbiAgICAweEUwODE6IDB4NzEwOSxcbiAgICAweEUwODI6IDB4NzBGRCxcbiAgICAweEUwODM6IDB4NzExQyxcbiAgICAweEUwODQ6IDB4NzExOSxcbiAgICAweEUwODU6IDB4NzE2NSxcbiAgICAweEUwODY6IDB4NzE1NSxcbiAgICAweEUwODc6IDB4NzE4OCxcbiAgICAweEUwODg6IDB4NzE2NixcbiAgICAweEUwODk6IDB4NzE2MixcbiAgICAweEUwOEE6IDB4NzE0QyxcbiAgICAweEUwOEI6IDB4NzE1NixcbiAgICAweEUwOEM6IDB4NzE2QyxcbiAgICAweEUwOEQ6IDB4NzE4RixcbiAgICAweEUwOEU6IDB4NzFGQixcbiAgICAweEUwOEY6IDB4NzE4NCxcbiAgICAweEUwOTA6IDB4NzE5NSxcbiAgICAweEUwOTE6IDB4NzFBOCxcbiAgICAweEUwOTI6IDB4NzFBQyxcbiAgICAweEUwOTM6IDB4NzFENyxcbiAgICAweEUwOTQ6IDB4NzFCOSxcbiAgICAweEUwOTU6IDB4NzFCRSxcbiAgICAweEUwOTY6IDB4NzFEMixcbiAgICAweEUwOTc6IDB4NzFDOSxcbiAgICAweEUwOTg6IDB4NzFENCxcbiAgICAweEUwOTk6IDB4NzFDRSxcbiAgICAweEUwOUE6IDB4NzFFMCxcbiAgICAweEUwOUI6IDB4NzFFQyxcbiAgICAweEUwOUM6IDB4NzFFNyxcbiAgICAweEUwOUQ6IDB4NzFGNSxcbiAgICAweEUwOUU6IDB4NzFGQyxcbiAgICAweEUwOUY6IDB4NzFGOSxcbiAgICAweEUwQTA6IDB4NzFGRixcbiAgICAweEUwQTE6IDB4NzIwRCxcbiAgICAweEUwQTI6IDB4NzIxMCxcbiAgICAweEUwQTM6IDB4NzIxQixcbiAgICAweEUwQTQ6IDB4NzIyOCxcbiAgICAweEUwQTU6IDB4NzIyRCxcbiAgICAweEUwQTY6IDB4NzIyQyxcbiAgICAweEUwQTc6IDB4NzIzMCxcbiAgICAweEUwQTg6IDB4NzIzMixcbiAgICAweEUwQTk6IDB4NzIzQixcbiAgICAweEUwQUE6IDB4NzIzQyxcbiAgICAweEUwQUI6IDB4NzIzRixcbiAgICAweEUwQUM6IDB4NzI0MCxcbiAgICAweEUwQUQ6IDB4NzI0NixcbiAgICAweEUwQUU6IDB4NzI0QixcbiAgICAweEUwQUY6IDB4NzI1OCxcbiAgICAweEUwQjA6IDB4NzI3NCxcbiAgICAweEUwQjE6IDB4NzI3RSxcbiAgICAweEUwQjI6IDB4NzI4MixcbiAgICAweEUwQjM6IDB4NzI4MSxcbiAgICAweEUwQjQ6IDB4NzI4NyxcbiAgICAweEUwQjU6IDB4NzI5MixcbiAgICAweEUwQjY6IDB4NzI5NixcbiAgICAweEUwQjc6IDB4NzJBMixcbiAgICAweEUwQjg6IDB4NzJBNyxcbiAgICAweEUwQjk6IDB4NzJCOSxcbiAgICAweEUwQkE6IDB4NzJCMixcbiAgICAweEUwQkI6IDB4NzJDMyxcbiAgICAweEUwQkM6IDB4NzJDNixcbiAgICAweEUwQkQ6IDB4NzJDNCxcbiAgICAweEUwQkU6IDB4NzJDRSxcbiAgICAweEUwQkY6IDB4NzJEMixcbiAgICAweEUwQzA6IDB4NzJFMixcbiAgICAweEUwQzE6IDB4NzJFMCxcbiAgICAweEUwQzI6IDB4NzJFMSxcbiAgICAweEUwQzM6IDB4NzJGOSxcbiAgICAweEUwQzQ6IDB4NzJGNyxcbiAgICAweEUwQzU6IDB4NTAwRixcbiAgICAweEUwQzY6IDB4NzMxNyxcbiAgICAweEUwQzc6IDB4NzMwQSxcbiAgICAweEUwQzg6IDB4NzMxQyxcbiAgICAweEUwQzk6IDB4NzMxNixcbiAgICAweEUwQ0E6IDB4NzMxRCxcbiAgICAweEUwQ0I6IDB4NzMzNCxcbiAgICAweEUwQ0M6IDB4NzMyRixcbiAgICAweEUwQ0Q6IDB4NzMyOSxcbiAgICAweEUwQ0U6IDB4NzMyNSxcbiAgICAweEUwQ0Y6IDB4NzMzRSxcbiAgICAweEUwRDA6IDB4NzM0RSxcbiAgICAweEUwRDE6IDB4NzM0RixcbiAgICAweEUwRDI6IDB4OUVEOCxcbiAgICAweEUwRDM6IDB4NzM1NyxcbiAgICAweEUwRDQ6IDB4NzM2QSxcbiAgICAweEUwRDU6IDB4NzM2OCxcbiAgICAweEUwRDY6IDB4NzM3MCxcbiAgICAweEUwRDc6IDB4NzM3OCxcbiAgICAweEUwRDg6IDB4NzM3NSxcbiAgICAweEUwRDk6IDB4NzM3QixcbiAgICAweEUwREE6IDB4NzM3QSxcbiAgICAweEUwREI6IDB4NzNDOCxcbiAgICAweEUwREM6IDB4NzNCMyxcbiAgICAweEUwREQ6IDB4NzNDRSxcbiAgICAweEUwREU6IDB4NzNCQixcbiAgICAweEUwREY6IDB4NzNDMCxcbiAgICAweEUwRTA6IDB4NzNFNSxcbiAgICAweEUwRTE6IDB4NzNFRSxcbiAgICAweEUwRTI6IDB4NzNERSxcbiAgICAweEUwRTM6IDB4NzRBMixcbiAgICAweEUwRTQ6IDB4NzQwNSxcbiAgICAweEUwRTU6IDB4NzQ2RixcbiAgICAweEUwRTY6IDB4NzQyNSxcbiAgICAweEUwRTc6IDB4NzNGOCxcbiAgICAweEUwRTg6IDB4NzQzMixcbiAgICAweEUwRTk6IDB4NzQzQSxcbiAgICAweEUwRUE6IDB4NzQ1NSxcbiAgICAweEUwRUI6IDB4NzQzRixcbiAgICAweEUwRUM6IDB4NzQ1RixcbiAgICAweEUwRUQ6IDB4NzQ1OSxcbiAgICAweEUwRUU6IDB4NzQ0MSxcbiAgICAweEUwRUY6IDB4NzQ1QyxcbiAgICAweEUwRjA6IDB4NzQ2OSxcbiAgICAweEUwRjE6IDB4NzQ3MCxcbiAgICAweEUwRjI6IDB4NzQ2MyxcbiAgICAweEUwRjM6IDB4NzQ2QSxcbiAgICAweEUwRjQ6IDB4NzQ3NixcbiAgICAweEUwRjU6IDB4NzQ3RSxcbiAgICAweEUwRjY6IDB4NzQ4QixcbiAgICAweEUwRjc6IDB4NzQ5RSxcbiAgICAweEUwRjg6IDB4NzRBNyxcbiAgICAweEUwRjk6IDB4NzRDQSxcbiAgICAweEUwRkE6IDB4NzRDRixcbiAgICAweEUwRkI6IDB4NzRENCxcbiAgICAweEUwRkM6IDB4NzNGMSxcbiAgICAweEUxNDA6IDB4NzRFMCxcbiAgICAweEUxNDE6IDB4NzRFMyxcbiAgICAweEUxNDI6IDB4NzRFNyxcbiAgICAweEUxNDM6IDB4NzRFOSxcbiAgICAweEUxNDQ6IDB4NzRFRSxcbiAgICAweEUxNDU6IDB4NzRGMixcbiAgICAweEUxNDY6IDB4NzRGMCxcbiAgICAweEUxNDc6IDB4NzRGMSxcbiAgICAweEUxNDg6IDB4NzRGOCxcbiAgICAweEUxNDk6IDB4NzRGNyxcbiAgICAweEUxNEE6IDB4NzUwNCxcbiAgICAweEUxNEI6IDB4NzUwMyxcbiAgICAweEUxNEM6IDB4NzUwNSxcbiAgICAweEUxNEQ6IDB4NzUwQyxcbiAgICAweEUxNEU6IDB4NzUwRSxcbiAgICAweEUxNEY6IDB4NzUwRCxcbiAgICAweEUxNTA6IDB4NzUxNSxcbiAgICAweEUxNTE6IDB4NzUxMyxcbiAgICAweEUxNTI6IDB4NzUxRSxcbiAgICAweEUxNTM6IDB4NzUyNixcbiAgICAweEUxNTQ6IDB4NzUyQyxcbiAgICAweEUxNTU6IDB4NzUzQyxcbiAgICAweEUxNTY6IDB4NzU0NCxcbiAgICAweEUxNTc6IDB4NzU0RCxcbiAgICAweEUxNTg6IDB4NzU0QSxcbiAgICAweEUxNTk6IDB4NzU0OSxcbiAgICAweEUxNUE6IDB4NzU1QixcbiAgICAweEUxNUI6IDB4NzU0NixcbiAgICAweEUxNUM6IDB4NzU1QSxcbiAgICAweEUxNUQ6IDB4NzU2OSxcbiAgICAweEUxNUU6IDB4NzU2NCxcbiAgICAweEUxNUY6IDB4NzU2NyxcbiAgICAweEUxNjA6IDB4NzU2QixcbiAgICAweEUxNjE6IDB4NzU2RCxcbiAgICAweEUxNjI6IDB4NzU3OCxcbiAgICAweEUxNjM6IDB4NzU3NixcbiAgICAweEUxNjQ6IDB4NzU4NixcbiAgICAweEUxNjU6IDB4NzU4NyxcbiAgICAweEUxNjY6IDB4NzU3NCxcbiAgICAweEUxNjc6IDB4NzU4QSxcbiAgICAweEUxNjg6IDB4NzU4OSxcbiAgICAweEUxNjk6IDB4NzU4MixcbiAgICAweEUxNkE6IDB4NzU5NCxcbiAgICAweEUxNkI6IDB4NzU5QSxcbiAgICAweEUxNkM6IDB4NzU5RCxcbiAgICAweEUxNkQ6IDB4NzVBNSxcbiAgICAweEUxNkU6IDB4NzVBMyxcbiAgICAweEUxNkY6IDB4NzVDMixcbiAgICAweEUxNzA6IDB4NzVCMyxcbiAgICAweEUxNzE6IDB4NzVDMyxcbiAgICAweEUxNzI6IDB4NzVCNSxcbiAgICAweEUxNzM6IDB4NzVCRCxcbiAgICAweEUxNzQ6IDB4NzVCOCxcbiAgICAweEUxNzU6IDB4NzVCQyxcbiAgICAweEUxNzY6IDB4NzVCMSxcbiAgICAweEUxNzc6IDB4NzVDRCxcbiAgICAweEUxNzg6IDB4NzVDQSxcbiAgICAweEUxNzk6IDB4NzVEMixcbiAgICAweEUxN0E6IDB4NzVEOSxcbiAgICAweEUxN0I6IDB4NzVFMyxcbiAgICAweEUxN0M6IDB4NzVERSxcbiAgICAweEUxN0Q6IDB4NzVGRSxcbiAgICAweEUxN0U6IDB4NzVGRixcbiAgICAweEUxODA6IDB4NzVGQyxcbiAgICAweEUxODE6IDB4NzYwMSxcbiAgICAweEUxODI6IDB4NzVGMCxcbiAgICAweEUxODM6IDB4NzVGQSxcbiAgICAweEUxODQ6IDB4NzVGMixcbiAgICAweEUxODU6IDB4NzVGMyxcbiAgICAweEUxODY6IDB4NzYwQixcbiAgICAweEUxODc6IDB4NzYwRCxcbiAgICAweEUxODg6IDB4NzYwOSxcbiAgICAweEUxODk6IDB4NzYxRixcbiAgICAweEUxOEE6IDB4NzYyNyxcbiAgICAweEUxOEI6IDB4NzYyMCxcbiAgICAweEUxOEM6IDB4NzYyMSxcbiAgICAweEUxOEQ6IDB4NzYyMixcbiAgICAweEUxOEU6IDB4NzYyNCxcbiAgICAweEUxOEY6IDB4NzYzNCxcbiAgICAweEUxOTA6IDB4NzYzMCxcbiAgICAweEUxOTE6IDB4NzYzQixcbiAgICAweEUxOTI6IDB4NzY0NyxcbiAgICAweEUxOTM6IDB4NzY0OCxcbiAgICAweEUxOTQ6IDB4NzY0NixcbiAgICAweEUxOTU6IDB4NzY1QyxcbiAgICAweEUxOTY6IDB4NzY1OCxcbiAgICAweEUxOTc6IDB4NzY2MSxcbiAgICAweEUxOTg6IDB4NzY2MixcbiAgICAweEUxOTk6IDB4NzY2OCxcbiAgICAweEUxOUE6IDB4NzY2OSxcbiAgICAweEUxOUI6IDB4NzY2QSxcbiAgICAweEUxOUM6IDB4NzY2NyxcbiAgICAweEUxOUQ6IDB4NzY2QyxcbiAgICAweEUxOUU6IDB4NzY3MCxcbiAgICAweEUxOUY6IDB4NzY3MixcbiAgICAweEUxQTA6IDB4NzY3NixcbiAgICAweEUxQTE6IDB4NzY3OCxcbiAgICAweEUxQTI6IDB4NzY3QyxcbiAgICAweEUxQTM6IDB4NzY4MCxcbiAgICAweEUxQTQ6IDB4NzY4MyxcbiAgICAweEUxQTU6IDB4NzY4OCxcbiAgICAweEUxQTY6IDB4NzY4QixcbiAgICAweEUxQTc6IDB4NzY4RSxcbiAgICAweEUxQTg6IDB4NzY5NixcbiAgICAweEUxQTk6IDB4NzY5MyxcbiAgICAweEUxQUE6IDB4NzY5OSxcbiAgICAweEUxQUI6IDB4NzY5QSxcbiAgICAweEUxQUM6IDB4NzZCMCxcbiAgICAweEUxQUQ6IDB4NzZCNCxcbiAgICAweEUxQUU6IDB4NzZCOCxcbiAgICAweEUxQUY6IDB4NzZCOSxcbiAgICAweEUxQjA6IDB4NzZCQSxcbiAgICAweEUxQjE6IDB4NzZDMixcbiAgICAweEUxQjI6IDB4NzZDRCxcbiAgICAweEUxQjM6IDB4NzZENixcbiAgICAweEUxQjQ6IDB4NzZEMixcbiAgICAweEUxQjU6IDB4NzZERSxcbiAgICAweEUxQjY6IDB4NzZFMSxcbiAgICAweEUxQjc6IDB4NzZFNSxcbiAgICAweEUxQjg6IDB4NzZFNyxcbiAgICAweEUxQjk6IDB4NzZFQSxcbiAgICAweEUxQkE6IDB4ODYyRixcbiAgICAweEUxQkI6IDB4NzZGQixcbiAgICAweEUxQkM6IDB4NzcwOCxcbiAgICAweEUxQkQ6IDB4NzcwNyxcbiAgICAweEUxQkU6IDB4NzcwNCxcbiAgICAweEUxQkY6IDB4NzcyOSxcbiAgICAweEUxQzA6IDB4NzcyNCxcbiAgICAweEUxQzE6IDB4NzcxRSxcbiAgICAweEUxQzI6IDB4NzcyNSxcbiAgICAweEUxQzM6IDB4NzcyNixcbiAgICAweEUxQzQ6IDB4NzcxQixcbiAgICAweEUxQzU6IDB4NzczNyxcbiAgICAweEUxQzY6IDB4NzczOCxcbiAgICAweEUxQzc6IDB4Nzc0NyxcbiAgICAweEUxQzg6IDB4Nzc1QSxcbiAgICAweEUxQzk6IDB4Nzc2OCxcbiAgICAweEUxQ0E6IDB4Nzc2QixcbiAgICAweEUxQ0I6IDB4Nzc1QixcbiAgICAweEUxQ0M6IDB4Nzc2NSxcbiAgICAweEUxQ0Q6IDB4Nzc3RixcbiAgICAweEUxQ0U6IDB4Nzc3RSxcbiAgICAweEUxQ0Y6IDB4Nzc3OSxcbiAgICAweEUxRDA6IDB4Nzc4RSxcbiAgICAweEUxRDE6IDB4Nzc4QixcbiAgICAweEUxRDI6IDB4Nzc5MSxcbiAgICAweEUxRDM6IDB4NzdBMCxcbiAgICAweEUxRDQ6IDB4Nzc5RSxcbiAgICAweEUxRDU6IDB4NzdCMCxcbiAgICAweEUxRDY6IDB4NzdCNixcbiAgICAweEUxRDc6IDB4NzdCOSxcbiAgICAweEUxRDg6IDB4NzdCRixcbiAgICAweEUxRDk6IDB4NzdCQyxcbiAgICAweEUxREE6IDB4NzdCRCxcbiAgICAweEUxREI6IDB4NzdCQixcbiAgICAweEUxREM6IDB4NzdDNyxcbiAgICAweEUxREQ6IDB4NzdDRCxcbiAgICAweEUxREU6IDB4NzdENyxcbiAgICAweEUxREY6IDB4NzdEQSxcbiAgICAweEUxRTA6IDB4NzdEQyxcbiAgICAweEUxRTE6IDB4NzdFMyxcbiAgICAweEUxRTI6IDB4NzdFRSxcbiAgICAweEUxRTM6IDB4NzdGQyxcbiAgICAweEUxRTQ6IDB4NzgwQyxcbiAgICAweEUxRTU6IDB4NzgxMixcbiAgICAweEUxRTY6IDB4NzkyNixcbiAgICAweEUxRTc6IDB4NzgyMCxcbiAgICAweEUxRTg6IDB4NzkyQSxcbiAgICAweEUxRTk6IDB4Nzg0NSxcbiAgICAweEUxRUE6IDB4Nzg4RSxcbiAgICAweEUxRUI6IDB4Nzg3NCxcbiAgICAweEUxRUM6IDB4Nzg4NixcbiAgICAweEUxRUQ6IDB4Nzg3QyxcbiAgICAweEUxRUU6IDB4Nzg5QSxcbiAgICAweEUxRUY6IDB4Nzg4QyxcbiAgICAweEUxRjA6IDB4NzhBMyxcbiAgICAweEUxRjE6IDB4NzhCNSxcbiAgICAweEUxRjI6IDB4NzhBQSxcbiAgICAweEUxRjM6IDB4NzhBRixcbiAgICAweEUxRjQ6IDB4NzhEMSxcbiAgICAweEUxRjU6IDB4NzhDNixcbiAgICAweEUxRjY6IDB4NzhDQixcbiAgICAweEUxRjc6IDB4NzhENCxcbiAgICAweEUxRjg6IDB4NzhCRSxcbiAgICAweEUxRjk6IDB4NzhCQyxcbiAgICAweEUxRkE6IDB4NzhDNSxcbiAgICAweEUxRkI6IDB4NzhDQSxcbiAgICAweEUxRkM6IDB4NzhFQyxcbiAgICAweEUyNDA6IDB4NzhFNyxcbiAgICAweEUyNDE6IDB4NzhEQSxcbiAgICAweEUyNDI6IDB4NzhGRCxcbiAgICAweEUyNDM6IDB4NzhGNCxcbiAgICAweEUyNDQ6IDB4NzkwNyxcbiAgICAweEUyNDU6IDB4NzkxMixcbiAgICAweEUyNDY6IDB4NzkxMSxcbiAgICAweEUyNDc6IDB4NzkxOSxcbiAgICAweEUyNDg6IDB4NzkyQyxcbiAgICAweEUyNDk6IDB4NzkyQixcbiAgICAweEUyNEE6IDB4Nzk0MCxcbiAgICAweEUyNEI6IDB4Nzk2MCxcbiAgICAweEUyNEM6IDB4Nzk1NyxcbiAgICAweEUyNEQ6IDB4Nzk1RixcbiAgICAweEUyNEU6IDB4Nzk1QSxcbiAgICAweEUyNEY6IDB4Nzk1NSxcbiAgICAweEUyNTA6IDB4Nzk1MyxcbiAgICAweEUyNTE6IDB4Nzk3QSxcbiAgICAweEUyNTI6IDB4Nzk3RixcbiAgICAweEUyNTM6IDB4Nzk4QSxcbiAgICAweEUyNTQ6IDB4Nzk5RCxcbiAgICAweEUyNTU6IDB4NzlBNyxcbiAgICAweEUyNTY6IDB4OUY0QixcbiAgICAweEUyNTc6IDB4NzlBQSxcbiAgICAweEUyNTg6IDB4NzlBRSxcbiAgICAweEUyNTk6IDB4NzlCMyxcbiAgICAweEUyNUE6IDB4NzlCOSxcbiAgICAweEUyNUI6IDB4NzlCQSxcbiAgICAweEUyNUM6IDB4NzlDOSxcbiAgICAweEUyNUQ6IDB4NzlENSxcbiAgICAweEUyNUU6IDB4NzlFNyxcbiAgICAweEUyNUY6IDB4NzlFQyxcbiAgICAweEUyNjA6IDB4NzlFMSxcbiAgICAweEUyNjE6IDB4NzlFMyxcbiAgICAweEUyNjI6IDB4N0EwOCxcbiAgICAweEUyNjM6IDB4N0EwRCxcbiAgICAweEUyNjQ6IDB4N0ExOCxcbiAgICAweEUyNjU6IDB4N0ExOSxcbiAgICAweEUyNjY6IDB4N0EyMCxcbiAgICAweEUyNjc6IDB4N0ExRixcbiAgICAweEUyNjg6IDB4Nzk4MCxcbiAgICAweEUyNjk6IDB4N0EzMSxcbiAgICAweEUyNkE6IDB4N0EzQixcbiAgICAweEUyNkI6IDB4N0EzRSxcbiAgICAweEUyNkM6IDB4N0EzNyxcbiAgICAweEUyNkQ6IDB4N0E0MyxcbiAgICAweEUyNkU6IDB4N0E1NyxcbiAgICAweEUyNkY6IDB4N0E0OSxcbiAgICAweEUyNzA6IDB4N0E2MSxcbiAgICAweEUyNzE6IDB4N0E2MixcbiAgICAweEUyNzI6IDB4N0E2OSxcbiAgICAweEUyNzM6IDB4OUY5RCxcbiAgICAweEUyNzQ6IDB4N0E3MCxcbiAgICAweEUyNzU6IDB4N0E3OSxcbiAgICAweEUyNzY6IDB4N0E3RCxcbiAgICAweEUyNzc6IDB4N0E4OCxcbiAgICAweEUyNzg6IDB4N0E5NyxcbiAgICAweEUyNzk6IDB4N0E5NSxcbiAgICAweEUyN0E6IDB4N0E5OCxcbiAgICAweEUyN0I6IDB4N0E5NixcbiAgICAweEUyN0M6IDB4N0FBOSxcbiAgICAweEUyN0Q6IDB4N0FDOCxcbiAgICAweEUyN0U6IDB4N0FCMCxcbiAgICAweEUyODA6IDB4N0FCNixcbiAgICAweEUyODE6IDB4N0FDNSxcbiAgICAweEUyODI6IDB4N0FDNCxcbiAgICAweEUyODM6IDB4N0FCRixcbiAgICAweEUyODQ6IDB4OTA4MyxcbiAgICAweEUyODU6IDB4N0FDNyxcbiAgICAweEUyODY6IDB4N0FDQSxcbiAgICAweEUyODc6IDB4N0FDRCxcbiAgICAweEUyODg6IDB4N0FDRixcbiAgICAweEUyODk6IDB4N0FENSxcbiAgICAweEUyOEE6IDB4N0FEMyxcbiAgICAweEUyOEI6IDB4N0FEOSxcbiAgICAweEUyOEM6IDB4N0FEQSxcbiAgICAweEUyOEQ6IDB4N0FERCxcbiAgICAweEUyOEU6IDB4N0FFMSxcbiAgICAweEUyOEY6IDB4N0FFMixcbiAgICAweEUyOTA6IDB4N0FFNixcbiAgICAweEUyOTE6IDB4N0FFRCxcbiAgICAweEUyOTI6IDB4N0FGMCxcbiAgICAweEUyOTM6IDB4N0IwMixcbiAgICAweEUyOTQ6IDB4N0IwRixcbiAgICAweEUyOTU6IDB4N0IwQSxcbiAgICAweEUyOTY6IDB4N0IwNixcbiAgICAweEUyOTc6IDB4N0IzMyxcbiAgICAweEUyOTg6IDB4N0IxOCxcbiAgICAweEUyOTk6IDB4N0IxOSxcbiAgICAweEUyOUE6IDB4N0IxRSxcbiAgICAweEUyOUI6IDB4N0IzNSxcbiAgICAweEUyOUM6IDB4N0IyOCxcbiAgICAweEUyOUQ6IDB4N0IzNixcbiAgICAweEUyOUU6IDB4N0I1MCxcbiAgICAweEUyOUY6IDB4N0I3QSxcbiAgICAweEUyQTA6IDB4N0IwNCxcbiAgICAweEUyQTE6IDB4N0I0RCxcbiAgICAweEUyQTI6IDB4N0IwQixcbiAgICAweEUyQTM6IDB4N0I0QyxcbiAgICAweEUyQTQ6IDB4N0I0NSxcbiAgICAweEUyQTU6IDB4N0I3NSxcbiAgICAweEUyQTY6IDB4N0I2NSxcbiAgICAweEUyQTc6IDB4N0I3NCxcbiAgICAweEUyQTg6IDB4N0I2NyxcbiAgICAweEUyQTk6IDB4N0I3MCxcbiAgICAweEUyQUE6IDB4N0I3MSxcbiAgICAweEUyQUI6IDB4N0I2QyxcbiAgICAweEUyQUM6IDB4N0I2RSxcbiAgICAweEUyQUQ6IDB4N0I5RCxcbiAgICAweEUyQUU6IDB4N0I5OCxcbiAgICAweEUyQUY6IDB4N0I5RixcbiAgICAweEUyQjA6IDB4N0I4RCxcbiAgICAweEUyQjE6IDB4N0I5QyxcbiAgICAweEUyQjI6IDB4N0I5QSxcbiAgICAweEUyQjM6IDB4N0I4QixcbiAgICAweEUyQjQ6IDB4N0I5MixcbiAgICAweEUyQjU6IDB4N0I4RixcbiAgICAweEUyQjY6IDB4N0I1RCxcbiAgICAweEUyQjc6IDB4N0I5OSxcbiAgICAweEUyQjg6IDB4N0JDQixcbiAgICAweEUyQjk6IDB4N0JDMSxcbiAgICAweEUyQkE6IDB4N0JDQyxcbiAgICAweEUyQkI6IDB4N0JDRixcbiAgICAweEUyQkM6IDB4N0JCNCxcbiAgICAweEUyQkQ6IDB4N0JDNixcbiAgICAweEUyQkU6IDB4N0JERCxcbiAgICAweEUyQkY6IDB4N0JFOSxcbiAgICAweEUyQzA6IDB4N0MxMSxcbiAgICAweEUyQzE6IDB4N0MxNCxcbiAgICAweEUyQzI6IDB4N0JFNixcbiAgICAweEUyQzM6IDB4N0JFNSxcbiAgICAweEUyQzQ6IDB4N0M2MCxcbiAgICAweEUyQzU6IDB4N0MwMCxcbiAgICAweEUyQzY6IDB4N0MwNyxcbiAgICAweEUyQzc6IDB4N0MxMyxcbiAgICAweEUyQzg6IDB4N0JGMyxcbiAgICAweEUyQzk6IDB4N0JGNyxcbiAgICAweEUyQ0E6IDB4N0MxNyxcbiAgICAweEUyQ0I6IDB4N0MwRCxcbiAgICAweEUyQ0M6IDB4N0JGNixcbiAgICAweEUyQ0Q6IDB4N0MyMyxcbiAgICAweEUyQ0U6IDB4N0MyNyxcbiAgICAweEUyQ0Y6IDB4N0MyQSxcbiAgICAweEUyRDA6IDB4N0MxRixcbiAgICAweEUyRDE6IDB4N0MzNyxcbiAgICAweEUyRDI6IDB4N0MyQixcbiAgICAweEUyRDM6IDB4N0MzRCxcbiAgICAweEUyRDQ6IDB4N0M0QyxcbiAgICAweEUyRDU6IDB4N0M0MyxcbiAgICAweEUyRDY6IDB4N0M1NCxcbiAgICAweEUyRDc6IDB4N0M0RixcbiAgICAweEUyRDg6IDB4N0M0MCxcbiAgICAweEUyRDk6IDB4N0M1MCxcbiAgICAweEUyREE6IDB4N0M1OCxcbiAgICAweEUyREI6IDB4N0M1RixcbiAgICAweEUyREM6IDB4N0M2NCxcbiAgICAweEUyREQ6IDB4N0M1NixcbiAgICAweEUyREU6IDB4N0M2NSxcbiAgICAweEUyREY6IDB4N0M2QyxcbiAgICAweEUyRTA6IDB4N0M3NSxcbiAgICAweEUyRTE6IDB4N0M4MyxcbiAgICAweEUyRTI6IDB4N0M5MCxcbiAgICAweEUyRTM6IDB4N0NBNCxcbiAgICAweEUyRTQ6IDB4N0NBRCxcbiAgICAweEUyRTU6IDB4N0NBMixcbiAgICAweEUyRTY6IDB4N0NBQixcbiAgICAweEUyRTc6IDB4N0NBMSxcbiAgICAweEUyRTg6IDB4N0NBOCxcbiAgICAweEUyRTk6IDB4N0NCMyxcbiAgICAweEUyRUE6IDB4N0NCMixcbiAgICAweEUyRUI6IDB4N0NCMSxcbiAgICAweEUyRUM6IDB4N0NBRSxcbiAgICAweEUyRUQ6IDB4N0NCOSxcbiAgICAweEUyRUU6IDB4N0NCRCxcbiAgICAweEUyRUY6IDB4N0NDMCxcbiAgICAweEUyRjA6IDB4N0NDNSxcbiAgICAweEUyRjE6IDB4N0NDMixcbiAgICAweEUyRjI6IDB4N0NEOCxcbiAgICAweEUyRjM6IDB4N0NEMixcbiAgICAweEUyRjQ6IDB4N0NEQyxcbiAgICAweEUyRjU6IDB4N0NFMixcbiAgICAweEUyRjY6IDB4OUIzQixcbiAgICAweEUyRjc6IDB4N0NFRixcbiAgICAweEUyRjg6IDB4N0NGMixcbiAgICAweEUyRjk6IDB4N0NGNCxcbiAgICAweEUyRkE6IDB4N0NGNixcbiAgICAweEUyRkI6IDB4N0NGQSxcbiAgICAweEUyRkM6IDB4N0QwNixcbiAgICAweEUzNDA6IDB4N0QwMixcbiAgICAweEUzNDE6IDB4N0QxQyxcbiAgICAweEUzNDI6IDB4N0QxNSxcbiAgICAweEUzNDM6IDB4N0QwQSxcbiAgICAweEUzNDQ6IDB4N0Q0NSxcbiAgICAweEUzNDU6IDB4N0Q0QixcbiAgICAweEUzNDY6IDB4N0QyRSxcbiAgICAweEUzNDc6IDB4N0QzMixcbiAgICAweEUzNDg6IDB4N0QzRixcbiAgICAweEUzNDk6IDB4N0QzNSxcbiAgICAweEUzNEE6IDB4N0Q0NixcbiAgICAweEUzNEI6IDB4N0Q3MyxcbiAgICAweEUzNEM6IDB4N0Q1NixcbiAgICAweEUzNEQ6IDB4N0Q0RSxcbiAgICAweEUzNEU6IDB4N0Q3MixcbiAgICAweEUzNEY6IDB4N0Q2OCxcbiAgICAweEUzNTA6IDB4N0Q2RSxcbiAgICAweEUzNTE6IDB4N0Q0RixcbiAgICAweEUzNTI6IDB4N0Q2MyxcbiAgICAweEUzNTM6IDB4N0Q5MyxcbiAgICAweEUzNTQ6IDB4N0Q4OSxcbiAgICAweEUzNTU6IDB4N0Q1QixcbiAgICAweEUzNTY6IDB4N0Q4RixcbiAgICAweEUzNTc6IDB4N0Q3RCxcbiAgICAweEUzNTg6IDB4N0Q5QixcbiAgICAweEUzNTk6IDB4N0RCQSxcbiAgICAweEUzNUE6IDB4N0RBRSxcbiAgICAweEUzNUI6IDB4N0RBMyxcbiAgICAweEUzNUM6IDB4N0RCNSxcbiAgICAweEUzNUQ6IDB4N0RDNyxcbiAgICAweEUzNUU6IDB4N0RCRCxcbiAgICAweEUzNUY6IDB4N0RBQixcbiAgICAweEUzNjA6IDB4N0UzRCxcbiAgICAweEUzNjE6IDB4N0RBMixcbiAgICAweEUzNjI6IDB4N0RBRixcbiAgICAweEUzNjM6IDB4N0REQyxcbiAgICAweEUzNjQ6IDB4N0RCOCxcbiAgICAweEUzNjU6IDB4N0Q5RixcbiAgICAweEUzNjY6IDB4N0RCMCxcbiAgICAweEUzNjc6IDB4N0REOCxcbiAgICAweEUzNjg6IDB4N0RERCxcbiAgICAweEUzNjk6IDB4N0RFNCxcbiAgICAweEUzNkE6IDB4N0RERSxcbiAgICAweEUzNkI6IDB4N0RGQixcbiAgICAweEUzNkM6IDB4N0RGMixcbiAgICAweEUzNkQ6IDB4N0RFMSxcbiAgICAweEUzNkU6IDB4N0UwNSxcbiAgICAweEUzNkY6IDB4N0UwQSxcbiAgICAweEUzNzA6IDB4N0UyMyxcbiAgICAweEUzNzE6IDB4N0UyMSxcbiAgICAweEUzNzI6IDB4N0UxMixcbiAgICAweEUzNzM6IDB4N0UzMSxcbiAgICAweEUzNzQ6IDB4N0UxRixcbiAgICAweEUzNzU6IDB4N0UwOSxcbiAgICAweEUzNzY6IDB4N0UwQixcbiAgICAweEUzNzc6IDB4N0UyMixcbiAgICAweEUzNzg6IDB4N0U0NixcbiAgICAweEUzNzk6IDB4N0U2NixcbiAgICAweEUzN0E6IDB4N0UzQixcbiAgICAweEUzN0I6IDB4N0UzNSxcbiAgICAweEUzN0M6IDB4N0UzOSxcbiAgICAweEUzN0Q6IDB4N0U0MyxcbiAgICAweEUzN0U6IDB4N0UzNyxcbiAgICAweEUzODA6IDB4N0UzMixcbiAgICAweEUzODE6IDB4N0UzQSxcbiAgICAweEUzODI6IDB4N0U2NyxcbiAgICAweEUzODM6IDB4N0U1RCxcbiAgICAweEUzODQ6IDB4N0U1NixcbiAgICAweEUzODU6IDB4N0U1RSxcbiAgICAweEUzODY6IDB4N0U1OSxcbiAgICAweEUzODc6IDB4N0U1QSxcbiAgICAweEUzODg6IDB4N0U3OSxcbiAgICAweEUzODk6IDB4N0U2QSxcbiAgICAweEUzOEE6IDB4N0U2OSxcbiAgICAweEUzOEI6IDB4N0U3QyxcbiAgICAweEUzOEM6IDB4N0U3QixcbiAgICAweEUzOEQ6IDB4N0U4MyxcbiAgICAweEUzOEU6IDB4N0RENSxcbiAgICAweEUzOEY6IDB4N0U3RCxcbiAgICAweEUzOTA6IDB4OEZBRSxcbiAgICAweEUzOTE6IDB4N0U3RixcbiAgICAweEUzOTI6IDB4N0U4OCxcbiAgICAweEUzOTM6IDB4N0U4OSxcbiAgICAweEUzOTQ6IDB4N0U4QyxcbiAgICAweEUzOTU6IDB4N0U5MixcbiAgICAweEUzOTY6IDB4N0U5MCxcbiAgICAweEUzOTc6IDB4N0U5MyxcbiAgICAweEUzOTg6IDB4N0U5NCxcbiAgICAweEUzOTk6IDB4N0U5NixcbiAgICAweEUzOUE6IDB4N0U4RSxcbiAgICAweEUzOUI6IDB4N0U5QixcbiAgICAweEUzOUM6IDB4N0U5QyxcbiAgICAweEUzOUQ6IDB4N0YzOCxcbiAgICAweEUzOUU6IDB4N0YzQSxcbiAgICAweEUzOUY6IDB4N0Y0NSxcbiAgICAweEUzQTA6IDB4N0Y0QyxcbiAgICAweEUzQTE6IDB4N0Y0RCxcbiAgICAweEUzQTI6IDB4N0Y0RSxcbiAgICAweEUzQTM6IDB4N0Y1MCxcbiAgICAweEUzQTQ6IDB4N0Y1MSxcbiAgICAweEUzQTU6IDB4N0Y1NSxcbiAgICAweEUzQTY6IDB4N0Y1NCxcbiAgICAweEUzQTc6IDB4N0Y1OCxcbiAgICAweEUzQTg6IDB4N0Y1RixcbiAgICAweEUzQTk6IDB4N0Y2MCxcbiAgICAweEUzQUE6IDB4N0Y2OCxcbiAgICAweEUzQUI6IDB4N0Y2OSxcbiAgICAweEUzQUM6IDB4N0Y2NyxcbiAgICAweEUzQUQ6IDB4N0Y3OCxcbiAgICAweEUzQUU6IDB4N0Y4MixcbiAgICAweEUzQUY6IDB4N0Y4NixcbiAgICAweEUzQjA6IDB4N0Y4MyxcbiAgICAweEUzQjE6IDB4N0Y4OCxcbiAgICAweEUzQjI6IDB4N0Y4NyxcbiAgICAweEUzQjM6IDB4N0Y4QyxcbiAgICAweEUzQjQ6IDB4N0Y5NCxcbiAgICAweEUzQjU6IDB4N0Y5RSxcbiAgICAweEUzQjY6IDB4N0Y5RCxcbiAgICAweEUzQjc6IDB4N0Y5QSxcbiAgICAweEUzQjg6IDB4N0ZBMyxcbiAgICAweEUzQjk6IDB4N0ZBRixcbiAgICAweEUzQkE6IDB4N0ZCMixcbiAgICAweEUzQkI6IDB4N0ZCOSxcbiAgICAweEUzQkM6IDB4N0ZBRSxcbiAgICAweEUzQkQ6IDB4N0ZCNixcbiAgICAweEUzQkU6IDB4N0ZCOCxcbiAgICAweEUzQkY6IDB4OEI3MSxcbiAgICAweEUzQzA6IDB4N0ZDNSxcbiAgICAweEUzQzE6IDB4N0ZDNixcbiAgICAweEUzQzI6IDB4N0ZDQSxcbiAgICAweEUzQzM6IDB4N0ZENSxcbiAgICAweEUzQzQ6IDB4N0ZENCxcbiAgICAweEUzQzU6IDB4N0ZFMSxcbiAgICAweEUzQzY6IDB4N0ZFNixcbiAgICAweEUzQzc6IDB4N0ZFOSxcbiAgICAweEUzQzg6IDB4N0ZGMyxcbiAgICAweEUzQzk6IDB4N0ZGOSxcbiAgICAweEUzQ0E6IDB4OThEQyxcbiAgICAweEUzQ0I6IDB4ODAwNixcbiAgICAweEUzQ0M6IDB4ODAwNCxcbiAgICAweEUzQ0Q6IDB4ODAwQixcbiAgICAweEUzQ0U6IDB4ODAxMixcbiAgICAweEUzQ0Y6IDB4ODAxOCxcbiAgICAweEUzRDA6IDB4ODAxOSxcbiAgICAweEUzRDE6IDB4ODAxQyxcbiAgICAweEUzRDI6IDB4ODAyMSxcbiAgICAweEUzRDM6IDB4ODAyOCxcbiAgICAweEUzRDQ6IDB4ODAzRixcbiAgICAweEUzRDU6IDB4ODAzQixcbiAgICAweEUzRDY6IDB4ODA0QSxcbiAgICAweEUzRDc6IDB4ODA0NixcbiAgICAweEUzRDg6IDB4ODA1MixcbiAgICAweEUzRDk6IDB4ODA1OCxcbiAgICAweEUzREE6IDB4ODA1QSxcbiAgICAweEUzREI6IDB4ODA1RixcbiAgICAweEUzREM6IDB4ODA2MixcbiAgICAweEUzREQ6IDB4ODA2OCxcbiAgICAweEUzREU6IDB4ODA3MyxcbiAgICAweEUzREY6IDB4ODA3MixcbiAgICAweEUzRTA6IDB4ODA3MCxcbiAgICAweEUzRTE6IDB4ODA3NixcbiAgICAweEUzRTI6IDB4ODA3OSxcbiAgICAweEUzRTM6IDB4ODA3RCxcbiAgICAweEUzRTQ6IDB4ODA3RixcbiAgICAweEUzRTU6IDB4ODA4NCxcbiAgICAweEUzRTY6IDB4ODA4NixcbiAgICAweEUzRTc6IDB4ODA4NSxcbiAgICAweEUzRTg6IDB4ODA5QixcbiAgICAweEUzRTk6IDB4ODA5MyxcbiAgICAweEUzRUE6IDB4ODA5QSxcbiAgICAweEUzRUI6IDB4ODBBRCxcbiAgICAweEUzRUM6IDB4NTE5MCxcbiAgICAweEUzRUQ6IDB4ODBBQyxcbiAgICAweEUzRUU6IDB4ODBEQixcbiAgICAweEUzRUY6IDB4ODBFNSxcbiAgICAweEUzRjA6IDB4ODBEOSxcbiAgICAweEUzRjE6IDB4ODBERCxcbiAgICAweEUzRjI6IDB4ODBDNCxcbiAgICAweEUzRjM6IDB4ODBEQSxcbiAgICAweEUzRjQ6IDB4ODBENixcbiAgICAweEUzRjU6IDB4ODEwOSxcbiAgICAweEUzRjY6IDB4ODBFRixcbiAgICAweEUzRjc6IDB4ODBGMSxcbiAgICAweEUzRjg6IDB4ODExQixcbiAgICAweEUzRjk6IDB4ODEyOSxcbiAgICAweEUzRkE6IDB4ODEyMyxcbiAgICAweEUzRkI6IDB4ODEyRixcbiAgICAweEUzRkM6IDB4ODE0QixcbiAgICAweEU0NDA6IDB4OTY4QixcbiAgICAweEU0NDE6IDB4ODE0NixcbiAgICAweEU0NDI6IDB4ODEzRSxcbiAgICAweEU0NDM6IDB4ODE1MyxcbiAgICAweEU0NDQ6IDB4ODE1MSxcbiAgICAweEU0NDU6IDB4ODBGQyxcbiAgICAweEU0NDY6IDB4ODE3MSxcbiAgICAweEU0NDc6IDB4ODE2RSxcbiAgICAweEU0NDg6IDB4ODE2NSxcbiAgICAweEU0NDk6IDB4ODE2NixcbiAgICAweEU0NEE6IDB4ODE3NCxcbiAgICAweEU0NEI6IDB4ODE4MyxcbiAgICAweEU0NEM6IDB4ODE4OCxcbiAgICAweEU0NEQ6IDB4ODE4QSxcbiAgICAweEU0NEU6IDB4ODE4MCxcbiAgICAweEU0NEY6IDB4ODE4MixcbiAgICAweEU0NTA6IDB4ODFBMCxcbiAgICAweEU0NTE6IDB4ODE5NSxcbiAgICAweEU0NTI6IDB4ODFBNCxcbiAgICAweEU0NTM6IDB4ODFBMyxcbiAgICAweEU0NTQ6IDB4ODE1RixcbiAgICAweEU0NTU6IDB4ODE5MyxcbiAgICAweEU0NTY6IDB4ODFBOSxcbiAgICAweEU0NTc6IDB4ODFCMCxcbiAgICAweEU0NTg6IDB4ODFCNSxcbiAgICAweEU0NTk6IDB4ODFCRSxcbiAgICAweEU0NUE6IDB4ODFCOCxcbiAgICAweEU0NUI6IDB4ODFCRCxcbiAgICAweEU0NUM6IDB4ODFDMCxcbiAgICAweEU0NUQ6IDB4ODFDMixcbiAgICAweEU0NUU6IDB4ODFCQSxcbiAgICAweEU0NUY6IDB4ODFDOSxcbiAgICAweEU0NjA6IDB4ODFDRCxcbiAgICAweEU0NjE6IDB4ODFEMSxcbiAgICAweEU0NjI6IDB4ODFEOSxcbiAgICAweEU0NjM6IDB4ODFEOCxcbiAgICAweEU0NjQ6IDB4ODFDOCxcbiAgICAweEU0NjU6IDB4ODFEQSxcbiAgICAweEU0NjY6IDB4ODFERixcbiAgICAweEU0Njc6IDB4ODFFMCxcbiAgICAweEU0Njg6IDB4ODFFNyxcbiAgICAweEU0Njk6IDB4ODFGQSxcbiAgICAweEU0NkE6IDB4ODFGQixcbiAgICAweEU0NkI6IDB4ODFGRSxcbiAgICAweEU0NkM6IDB4ODIwMSxcbiAgICAweEU0NkQ6IDB4ODIwMixcbiAgICAweEU0NkU6IDB4ODIwNSxcbiAgICAweEU0NkY6IDB4ODIwNyxcbiAgICAweEU0NzA6IDB4ODIwQSxcbiAgICAweEU0NzE6IDB4ODIwRCxcbiAgICAweEU0NzI6IDB4ODIxMCxcbiAgICAweEU0NzM6IDB4ODIxNixcbiAgICAweEU0NzQ6IDB4ODIyOSxcbiAgICAweEU0NzU6IDB4ODIyQixcbiAgICAweEU0NzY6IDB4ODIzOCxcbiAgICAweEU0Nzc6IDB4ODIzMyxcbiAgICAweEU0Nzg6IDB4ODI0MCxcbiAgICAweEU0Nzk6IDB4ODI1OSxcbiAgICAweEU0N0E6IDB4ODI1OCxcbiAgICAweEU0N0I6IDB4ODI1RCxcbiAgICAweEU0N0M6IDB4ODI1QSxcbiAgICAweEU0N0Q6IDB4ODI1RixcbiAgICAweEU0N0U6IDB4ODI2NCxcbiAgICAweEU0ODA6IDB4ODI2MixcbiAgICAweEU0ODE6IDB4ODI2OCxcbiAgICAweEU0ODI6IDB4ODI2QSxcbiAgICAweEU0ODM6IDB4ODI2QixcbiAgICAweEU0ODQ6IDB4ODIyRSxcbiAgICAweEU0ODU6IDB4ODI3MSxcbiAgICAweEU0ODY6IDB4ODI3NyxcbiAgICAweEU0ODc6IDB4ODI3OCxcbiAgICAweEU0ODg6IDB4ODI3RSxcbiAgICAweEU0ODk6IDB4ODI4RCxcbiAgICAweEU0OEE6IDB4ODI5MixcbiAgICAweEU0OEI6IDB4ODJBQixcbiAgICAweEU0OEM6IDB4ODI5RixcbiAgICAweEU0OEQ6IDB4ODJCQixcbiAgICAweEU0OEU6IDB4ODJBQyxcbiAgICAweEU0OEY6IDB4ODJFMSxcbiAgICAweEU0OTA6IDB4ODJFMyxcbiAgICAweEU0OTE6IDB4ODJERixcbiAgICAweEU0OTI6IDB4ODJEMixcbiAgICAweEU0OTM6IDB4ODJGNCxcbiAgICAweEU0OTQ6IDB4ODJGMyxcbiAgICAweEU0OTU6IDB4ODJGQSxcbiAgICAweEU0OTY6IDB4ODM5MyxcbiAgICAweEU0OTc6IDB4ODMwMyxcbiAgICAweEU0OTg6IDB4ODJGQixcbiAgICAweEU0OTk6IDB4ODJGOSxcbiAgICAweEU0OUE6IDB4ODJERSxcbiAgICAweEU0OUI6IDB4ODMwNixcbiAgICAweEU0OUM6IDB4ODJEQyxcbiAgICAweEU0OUQ6IDB4ODMwOSxcbiAgICAweEU0OUU6IDB4ODJEOSxcbiAgICAweEU0OUY6IDB4ODMzNSxcbiAgICAweEU0QTA6IDB4ODMzNCxcbiAgICAweEU0QTE6IDB4ODMxNixcbiAgICAweEU0QTI6IDB4ODMzMixcbiAgICAweEU0QTM6IDB4ODMzMSxcbiAgICAweEU0QTQ6IDB4ODM0MCxcbiAgICAweEU0QTU6IDB4ODMzOSxcbiAgICAweEU0QTY6IDB4ODM1MCxcbiAgICAweEU0QTc6IDB4ODM0NSxcbiAgICAweEU0QTg6IDB4ODMyRixcbiAgICAweEU0QTk6IDB4ODMyQixcbiAgICAweEU0QUE6IDB4ODMxNyxcbiAgICAweEU0QUI6IDB4ODMxOCxcbiAgICAweEU0QUM6IDB4ODM4NSxcbiAgICAweEU0QUQ6IDB4ODM5QSxcbiAgICAweEU0QUU6IDB4ODNBQSxcbiAgICAweEU0QUY6IDB4ODM5RixcbiAgICAweEU0QjA6IDB4ODNBMixcbiAgICAweEU0QjE6IDB4ODM5NixcbiAgICAweEU0QjI6IDB4ODMyMyxcbiAgICAweEU0QjM6IDB4ODM4RSxcbiAgICAweEU0QjQ6IDB4ODM4NyxcbiAgICAweEU0QjU6IDB4ODM4QSxcbiAgICAweEU0QjY6IDB4ODM3QyxcbiAgICAweEU0Qjc6IDB4ODNCNSxcbiAgICAweEU0Qjg6IDB4ODM3MyxcbiAgICAweEU0Qjk6IDB4ODM3NSxcbiAgICAweEU0QkE6IDB4ODNBMCxcbiAgICAweEU0QkI6IDB4ODM4OSxcbiAgICAweEU0QkM6IDB4ODNBOCxcbiAgICAweEU0QkQ6IDB4ODNGNCxcbiAgICAweEU0QkU6IDB4ODQxMyxcbiAgICAweEU0QkY6IDB4ODNFQixcbiAgICAweEU0QzA6IDB4ODNDRSxcbiAgICAweEU0QzE6IDB4ODNGRCxcbiAgICAweEU0QzI6IDB4ODQwMyxcbiAgICAweEU0QzM6IDB4ODNEOCxcbiAgICAweEU0QzQ6IDB4ODQwQixcbiAgICAweEU0QzU6IDB4ODNDMSxcbiAgICAweEU0QzY6IDB4ODNGNyxcbiAgICAweEU0Qzc6IDB4ODQwNyxcbiAgICAweEU0Qzg6IDB4ODNFMCxcbiAgICAweEU0Qzk6IDB4ODNGMixcbiAgICAweEU0Q0E6IDB4ODQwRCxcbiAgICAweEU0Q0I6IDB4ODQyMixcbiAgICAweEU0Q0M6IDB4ODQyMCxcbiAgICAweEU0Q0Q6IDB4ODNCRCxcbiAgICAweEU0Q0U6IDB4ODQzOCxcbiAgICAweEU0Q0Y6IDB4ODUwNixcbiAgICAweEU0RDA6IDB4ODNGQixcbiAgICAweEU0RDE6IDB4ODQ2RCxcbiAgICAweEU0RDI6IDB4ODQyQSxcbiAgICAweEU0RDM6IDB4ODQzQyxcbiAgICAweEU0RDQ6IDB4ODU1QSxcbiAgICAweEU0RDU6IDB4ODQ4NCxcbiAgICAweEU0RDY6IDB4ODQ3NyxcbiAgICAweEU0RDc6IDB4ODQ2QixcbiAgICAweEU0RDg6IDB4ODRBRCxcbiAgICAweEU0RDk6IDB4ODQ2RSxcbiAgICAweEU0REE6IDB4ODQ4MixcbiAgICAweEU0REI6IDB4ODQ2OSxcbiAgICAweEU0REM6IDB4ODQ0NixcbiAgICAweEU0REQ6IDB4ODQyQyxcbiAgICAweEU0REU6IDB4ODQ2RixcbiAgICAweEU0REY6IDB4ODQ3OSxcbiAgICAweEU0RTA6IDB4ODQzNSxcbiAgICAweEU0RTE6IDB4ODRDQSxcbiAgICAweEU0RTI6IDB4ODQ2MixcbiAgICAweEU0RTM6IDB4ODRCOSxcbiAgICAweEU0RTQ6IDB4ODRCRixcbiAgICAweEU0RTU6IDB4ODQ5RixcbiAgICAweEU0RTY6IDB4ODREOSxcbiAgICAweEU0RTc6IDB4ODRDRCxcbiAgICAweEU0RTg6IDB4ODRCQixcbiAgICAweEU0RTk6IDB4ODREQSxcbiAgICAweEU0RUE6IDB4ODREMCxcbiAgICAweEU0RUI6IDB4ODRDMSxcbiAgICAweEU0RUM6IDB4ODRDNixcbiAgICAweEU0RUQ6IDB4ODRENixcbiAgICAweEU0RUU6IDB4ODRBMSxcbiAgICAweEU0RUY6IDB4ODUyMSxcbiAgICAweEU0RjA6IDB4ODRGRixcbiAgICAweEU0RjE6IDB4ODRGNCxcbiAgICAweEU0RjI6IDB4ODUxNyxcbiAgICAweEU0RjM6IDB4ODUxOCxcbiAgICAweEU0RjQ6IDB4ODUyQyxcbiAgICAweEU0RjU6IDB4ODUxRixcbiAgICAweEU0RjY6IDB4ODUxNSxcbiAgICAweEU0Rjc6IDB4ODUxNCxcbiAgICAweEU0Rjg6IDB4ODRGQyxcbiAgICAweEU0Rjk6IDB4ODU0MCxcbiAgICAweEU0RkE6IDB4ODU2MyxcbiAgICAweEU0RkI6IDB4ODU1OCxcbiAgICAweEU0RkM6IDB4ODU0OCxcbiAgICAweEU1NDA6IDB4ODU0MSxcbiAgICAweEU1NDE6IDB4ODYwMixcbiAgICAweEU1NDI6IDB4ODU0QixcbiAgICAweEU1NDM6IDB4ODU1NSxcbiAgICAweEU1NDQ6IDB4ODU4MCxcbiAgICAweEU1NDU6IDB4ODVBNCxcbiAgICAweEU1NDY6IDB4ODU4OCxcbiAgICAweEU1NDc6IDB4ODU5MSxcbiAgICAweEU1NDg6IDB4ODU4QSxcbiAgICAweEU1NDk6IDB4ODVBOCxcbiAgICAweEU1NEE6IDB4ODU2RCxcbiAgICAweEU1NEI6IDB4ODU5NCxcbiAgICAweEU1NEM6IDB4ODU5QixcbiAgICAweEU1NEQ6IDB4ODVFQSxcbiAgICAweEU1NEU6IDB4ODU4NyxcbiAgICAweEU1NEY6IDB4ODU5QyxcbiAgICAweEU1NTA6IDB4ODU3NyxcbiAgICAweEU1NTE6IDB4ODU3RSxcbiAgICAweEU1NTI6IDB4ODU5MCxcbiAgICAweEU1NTM6IDB4ODVDOSxcbiAgICAweEU1NTQ6IDB4ODVCQSxcbiAgICAweEU1NTU6IDB4ODVDRixcbiAgICAweEU1NTY6IDB4ODVCOSxcbiAgICAweEU1NTc6IDB4ODVEMCxcbiAgICAweEU1NTg6IDB4ODVENSxcbiAgICAweEU1NTk6IDB4ODVERCxcbiAgICAweEU1NUE6IDB4ODVFNSxcbiAgICAweEU1NUI6IDB4ODVEQyxcbiAgICAweEU1NUM6IDB4ODVGOSxcbiAgICAweEU1NUQ6IDB4ODYwQSxcbiAgICAweEU1NUU6IDB4ODYxMyxcbiAgICAweEU1NUY6IDB4ODYwQixcbiAgICAweEU1NjA6IDB4ODVGRSxcbiAgICAweEU1NjE6IDB4ODVGQSxcbiAgICAweEU1NjI6IDB4ODYwNixcbiAgICAweEU1NjM6IDB4ODYyMixcbiAgICAweEU1NjQ6IDB4ODYxQSxcbiAgICAweEU1NjU6IDB4ODYzMCxcbiAgICAweEU1NjY6IDB4ODYzRixcbiAgICAweEU1Njc6IDB4ODY0RCxcbiAgICAweEU1Njg6IDB4NEU1NSxcbiAgICAweEU1Njk6IDB4ODY1NCxcbiAgICAweEU1NkE6IDB4ODY1RixcbiAgICAweEU1NkI6IDB4ODY2NyxcbiAgICAweEU1NkM6IDB4ODY3MSxcbiAgICAweEU1NkQ6IDB4ODY5MyxcbiAgICAweEU1NkU6IDB4ODZBMyxcbiAgICAweEU1NkY6IDB4ODZBOSxcbiAgICAweEU1NzA6IDB4ODZBQSxcbiAgICAweEU1NzE6IDB4ODY4QixcbiAgICAweEU1NzI6IDB4ODY4QyxcbiAgICAweEU1NzM6IDB4ODZCNixcbiAgICAweEU1NzQ6IDB4ODZBRixcbiAgICAweEU1NzU6IDB4ODZDNCxcbiAgICAweEU1NzY6IDB4ODZDNixcbiAgICAweEU1Nzc6IDB4ODZCMCxcbiAgICAweEU1Nzg6IDB4ODZDOSxcbiAgICAweEU1Nzk6IDB4ODgyMyxcbiAgICAweEU1N0E6IDB4ODZBQixcbiAgICAweEU1N0I6IDB4ODZENCxcbiAgICAweEU1N0M6IDB4ODZERSxcbiAgICAweEU1N0Q6IDB4ODZFOSxcbiAgICAweEU1N0U6IDB4ODZFQyxcbiAgICAweEU1ODA6IDB4ODZERixcbiAgICAweEU1ODE6IDB4ODZEQixcbiAgICAweEU1ODI6IDB4ODZFRixcbiAgICAweEU1ODM6IDB4ODcxMixcbiAgICAweEU1ODQ6IDB4ODcwNixcbiAgICAweEU1ODU6IDB4ODcwOCxcbiAgICAweEU1ODY6IDB4ODcwMCxcbiAgICAweEU1ODc6IDB4ODcwMyxcbiAgICAweEU1ODg6IDB4ODZGQixcbiAgICAweEU1ODk6IDB4ODcxMSxcbiAgICAweEU1OEE6IDB4ODcwOSxcbiAgICAweEU1OEI6IDB4ODcwRCxcbiAgICAweEU1OEM6IDB4ODZGOSxcbiAgICAweEU1OEQ6IDB4ODcwQSxcbiAgICAweEU1OEU6IDB4ODczNCxcbiAgICAweEU1OEY6IDB4ODczRixcbiAgICAweEU1OTA6IDB4ODczNyxcbiAgICAweEU1OTE6IDB4ODczQixcbiAgICAweEU1OTI6IDB4ODcyNSxcbiAgICAweEU1OTM6IDB4ODcyOSxcbiAgICAweEU1OTQ6IDB4ODcxQSxcbiAgICAweEU1OTU6IDB4ODc2MCxcbiAgICAweEU1OTY6IDB4ODc1RixcbiAgICAweEU1OTc6IDB4ODc3OCxcbiAgICAweEU1OTg6IDB4ODc0QyxcbiAgICAweEU1OTk6IDB4ODc0RSxcbiAgICAweEU1OUE6IDB4ODc3NCxcbiAgICAweEU1OUI6IDB4ODc1NyxcbiAgICAweEU1OUM6IDB4ODc2OCxcbiAgICAweEU1OUQ6IDB4ODc2RSxcbiAgICAweEU1OUU6IDB4ODc1OSxcbiAgICAweEU1OUY6IDB4ODc1MyxcbiAgICAweEU1QTA6IDB4ODc2MyxcbiAgICAweEU1QTE6IDB4ODc2QSxcbiAgICAweEU1QTI6IDB4ODgwNSxcbiAgICAweEU1QTM6IDB4ODdBMixcbiAgICAweEU1QTQ6IDB4ODc5RixcbiAgICAweEU1QTU6IDB4ODc4MixcbiAgICAweEU1QTY6IDB4ODdBRixcbiAgICAweEU1QTc6IDB4ODdDQixcbiAgICAweEU1QTg6IDB4ODdCRCxcbiAgICAweEU1QTk6IDB4ODdDMCxcbiAgICAweEU1QUE6IDB4ODdEMCxcbiAgICAweEU1QUI6IDB4OTZENixcbiAgICAweEU1QUM6IDB4ODdBQixcbiAgICAweEU1QUQ6IDB4ODdDNCxcbiAgICAweEU1QUU6IDB4ODdCMyxcbiAgICAweEU1QUY6IDB4ODdDNyxcbiAgICAweEU1QjA6IDB4ODdDNixcbiAgICAweEU1QjE6IDB4ODdCQixcbiAgICAweEU1QjI6IDB4ODdFRixcbiAgICAweEU1QjM6IDB4ODdGMixcbiAgICAweEU1QjQ6IDB4ODdFMCxcbiAgICAweEU1QjU6IDB4ODgwRixcbiAgICAweEU1QjY6IDB4ODgwRCxcbiAgICAweEU1Qjc6IDB4ODdGRSxcbiAgICAweEU1Qjg6IDB4ODdGNixcbiAgICAweEU1Qjk6IDB4ODdGNyxcbiAgICAweEU1QkE6IDB4ODgwRSxcbiAgICAweEU1QkI6IDB4ODdEMixcbiAgICAweEU1QkM6IDB4ODgxMSxcbiAgICAweEU1QkQ6IDB4ODgxNixcbiAgICAweEU1QkU6IDB4ODgxNSxcbiAgICAweEU1QkY6IDB4ODgyMixcbiAgICAweEU1QzA6IDB4ODgyMSxcbiAgICAweEU1QzE6IDB4ODgzMSxcbiAgICAweEU1QzI6IDB4ODgzNixcbiAgICAweEU1QzM6IDB4ODgzOSxcbiAgICAweEU1QzQ6IDB4ODgyNyxcbiAgICAweEU1QzU6IDB4ODgzQixcbiAgICAweEU1QzY6IDB4ODg0NCxcbiAgICAweEU1Qzc6IDB4ODg0MixcbiAgICAweEU1Qzg6IDB4ODg1MixcbiAgICAweEU1Qzk6IDB4ODg1OSxcbiAgICAweEU1Q0E6IDB4ODg1RSxcbiAgICAweEU1Q0I6IDB4ODg2MixcbiAgICAweEU1Q0M6IDB4ODg2QixcbiAgICAweEU1Q0Q6IDB4ODg4MSxcbiAgICAweEU1Q0U6IDB4ODg3RSxcbiAgICAweEU1Q0Y6IDB4ODg5RSxcbiAgICAweEU1RDA6IDB4ODg3NSxcbiAgICAweEU1RDE6IDB4ODg3RCxcbiAgICAweEU1RDI6IDB4ODhCNSxcbiAgICAweEU1RDM6IDB4ODg3MixcbiAgICAweEU1RDQ6IDB4ODg4MixcbiAgICAweEU1RDU6IDB4ODg5NyxcbiAgICAweEU1RDY6IDB4ODg5MixcbiAgICAweEU1RDc6IDB4ODhBRSxcbiAgICAweEU1RDg6IDB4ODg5OSxcbiAgICAweEU1RDk6IDB4ODhBMixcbiAgICAweEU1REE6IDB4ODg4RCxcbiAgICAweEU1REI6IDB4ODhBNCxcbiAgICAweEU1REM6IDB4ODhCMCxcbiAgICAweEU1REQ6IDB4ODhCRixcbiAgICAweEU1REU6IDB4ODhCMSxcbiAgICAweEU1REY6IDB4ODhDMyxcbiAgICAweEU1RTA6IDB4ODhDNCxcbiAgICAweEU1RTE6IDB4ODhENCxcbiAgICAweEU1RTI6IDB4ODhEOCxcbiAgICAweEU1RTM6IDB4ODhEOSxcbiAgICAweEU1RTQ6IDB4ODhERCxcbiAgICAweEU1RTU6IDB4ODhGOSxcbiAgICAweEU1RTY6IDB4ODkwMixcbiAgICAweEU1RTc6IDB4ODhGQyxcbiAgICAweEU1RTg6IDB4ODhGNCxcbiAgICAweEU1RTk6IDB4ODhFOCxcbiAgICAweEU1RUE6IDB4ODhGMixcbiAgICAweEU1RUI6IDB4ODkwNCxcbiAgICAweEU1RUM6IDB4ODkwQyxcbiAgICAweEU1RUQ6IDB4ODkwQSxcbiAgICAweEU1RUU6IDB4ODkxMyxcbiAgICAweEU1RUY6IDB4ODk0MyxcbiAgICAweEU1RjA6IDB4ODkxRSxcbiAgICAweEU1RjE6IDB4ODkyNSxcbiAgICAweEU1RjI6IDB4ODkyQSxcbiAgICAweEU1RjM6IDB4ODkyQixcbiAgICAweEU1RjQ6IDB4ODk0MSxcbiAgICAweEU1RjU6IDB4ODk0NCxcbiAgICAweEU1RjY6IDB4ODkzQixcbiAgICAweEU1Rjc6IDB4ODkzNixcbiAgICAweEU1Rjg6IDB4ODkzOCxcbiAgICAweEU1Rjk6IDB4ODk0QyxcbiAgICAweEU1RkE6IDB4ODkxRCxcbiAgICAweEU1RkI6IDB4ODk2MCxcbiAgICAweEU1RkM6IDB4ODk1RSxcbiAgICAweEU2NDA6IDB4ODk2NixcbiAgICAweEU2NDE6IDB4ODk2NCxcbiAgICAweEU2NDI6IDB4ODk2RCxcbiAgICAweEU2NDM6IDB4ODk2QSxcbiAgICAweEU2NDQ6IDB4ODk2RixcbiAgICAweEU2NDU6IDB4ODk3NCxcbiAgICAweEU2NDY6IDB4ODk3NyxcbiAgICAweEU2NDc6IDB4ODk3RSxcbiAgICAweEU2NDg6IDB4ODk4MyxcbiAgICAweEU2NDk6IDB4ODk4OCxcbiAgICAweEU2NEE6IDB4ODk4QSxcbiAgICAweEU2NEI6IDB4ODk5MyxcbiAgICAweEU2NEM6IDB4ODk5OCxcbiAgICAweEU2NEQ6IDB4ODlBMSxcbiAgICAweEU2NEU6IDB4ODlBOSxcbiAgICAweEU2NEY6IDB4ODlBNixcbiAgICAweEU2NTA6IDB4ODlBQyxcbiAgICAweEU2NTE6IDB4ODlBRixcbiAgICAweEU2NTI6IDB4ODlCMixcbiAgICAweEU2NTM6IDB4ODlCQSxcbiAgICAweEU2NTQ6IDB4ODlCRCxcbiAgICAweEU2NTU6IDB4ODlCRixcbiAgICAweEU2NTY6IDB4ODlDMCxcbiAgICAweEU2NTc6IDB4ODlEQSxcbiAgICAweEU2NTg6IDB4ODlEQyxcbiAgICAweEU2NTk6IDB4ODlERCxcbiAgICAweEU2NUE6IDB4ODlFNyxcbiAgICAweEU2NUI6IDB4ODlGNCxcbiAgICAweEU2NUM6IDB4ODlGOCxcbiAgICAweEU2NUQ6IDB4OEEwMyxcbiAgICAweEU2NUU6IDB4OEExNixcbiAgICAweEU2NUY6IDB4OEExMCxcbiAgICAweEU2NjA6IDB4OEEwQyxcbiAgICAweEU2NjE6IDB4OEExQixcbiAgICAweEU2NjI6IDB4OEExRCxcbiAgICAweEU2NjM6IDB4OEEyNSxcbiAgICAweEU2NjQ6IDB4OEEzNixcbiAgICAweEU2NjU6IDB4OEE0MSxcbiAgICAweEU2NjY6IDB4OEE1QixcbiAgICAweEU2Njc6IDB4OEE1MixcbiAgICAweEU2Njg6IDB4OEE0NixcbiAgICAweEU2Njk6IDB4OEE0OCxcbiAgICAweEU2NkE6IDB4OEE3QyxcbiAgICAweEU2NkI6IDB4OEE2RCxcbiAgICAweEU2NkM6IDB4OEE2QyxcbiAgICAweEU2NkQ6IDB4OEE2MixcbiAgICAweEU2NkU6IDB4OEE4NSxcbiAgICAweEU2NkY6IDB4OEE4MixcbiAgICAweEU2NzA6IDB4OEE4NCxcbiAgICAweEU2NzE6IDB4OEFBOCxcbiAgICAweEU2NzI6IDB4OEFBMSxcbiAgICAweEU2NzM6IDB4OEE5MSxcbiAgICAweEU2NzQ6IDB4OEFBNSxcbiAgICAweEU2NzU6IDB4OEFBNixcbiAgICAweEU2NzY6IDB4OEE5QSxcbiAgICAweEU2Nzc6IDB4OEFBMyxcbiAgICAweEU2Nzg6IDB4OEFDNCxcbiAgICAweEU2Nzk6IDB4OEFDRCxcbiAgICAweEU2N0E6IDB4OEFDMixcbiAgICAweEU2N0I6IDB4OEFEQSxcbiAgICAweEU2N0M6IDB4OEFFQixcbiAgICAweEU2N0Q6IDB4OEFGMyxcbiAgICAweEU2N0U6IDB4OEFFNyxcbiAgICAweEU2ODA6IDB4OEFFNCxcbiAgICAweEU2ODE6IDB4OEFGMSxcbiAgICAweEU2ODI6IDB4OEIxNCxcbiAgICAweEU2ODM6IDB4OEFFMCxcbiAgICAweEU2ODQ6IDB4OEFFMixcbiAgICAweEU2ODU6IDB4OEFGNyxcbiAgICAweEU2ODY6IDB4OEFERSxcbiAgICAweEU2ODc6IDB4OEFEQixcbiAgICAweEU2ODg6IDB4OEIwQyxcbiAgICAweEU2ODk6IDB4OEIwNyxcbiAgICAweEU2OEE6IDB4OEIxQSxcbiAgICAweEU2OEI6IDB4OEFFMSxcbiAgICAweEU2OEM6IDB4OEIxNixcbiAgICAweEU2OEQ6IDB4OEIxMCxcbiAgICAweEU2OEU6IDB4OEIxNyxcbiAgICAweEU2OEY6IDB4OEIyMCxcbiAgICAweEU2OTA6IDB4OEIzMyxcbiAgICAweEU2OTE6IDB4OTdBQixcbiAgICAweEU2OTI6IDB4OEIyNixcbiAgICAweEU2OTM6IDB4OEIyQixcbiAgICAweEU2OTQ6IDB4OEIzRSxcbiAgICAweEU2OTU6IDB4OEIyOCxcbiAgICAweEU2OTY6IDB4OEI0MSxcbiAgICAweEU2OTc6IDB4OEI0QyxcbiAgICAweEU2OTg6IDB4OEI0RixcbiAgICAweEU2OTk6IDB4OEI0RSxcbiAgICAweEU2OUE6IDB4OEI0OSxcbiAgICAweEU2OUI6IDB4OEI1NixcbiAgICAweEU2OUM6IDB4OEI1QixcbiAgICAweEU2OUQ6IDB4OEI1QSxcbiAgICAweEU2OUU6IDB4OEI2QixcbiAgICAweEU2OUY6IDB4OEI1RixcbiAgICAweEU2QTA6IDB4OEI2QyxcbiAgICAweEU2QTE6IDB4OEI2RixcbiAgICAweEU2QTI6IDB4OEI3NCxcbiAgICAweEU2QTM6IDB4OEI3RCxcbiAgICAweEU2QTQ6IDB4OEI4MCxcbiAgICAweEU2QTU6IDB4OEI4QyxcbiAgICAweEU2QTY6IDB4OEI4RSxcbiAgICAweEU2QTc6IDB4OEI5MixcbiAgICAweEU2QTg6IDB4OEI5MyxcbiAgICAweEU2QTk6IDB4OEI5NixcbiAgICAweEU2QUE6IDB4OEI5OSxcbiAgICAweEU2QUI6IDB4OEI5QSxcbiAgICAweEU2QUM6IDB4OEMzQSxcbiAgICAweEU2QUQ6IDB4OEM0MSxcbiAgICAweEU2QUU6IDB4OEMzRixcbiAgICAweEU2QUY6IDB4OEM0OCxcbiAgICAweEU2QjA6IDB4OEM0QyxcbiAgICAweEU2QjE6IDB4OEM0RSxcbiAgICAweEU2QjI6IDB4OEM1MCxcbiAgICAweEU2QjM6IDB4OEM1NSxcbiAgICAweEU2QjQ6IDB4OEM2MixcbiAgICAweEU2QjU6IDB4OEM2QyxcbiAgICAweEU2QjY6IDB4OEM3OCxcbiAgICAweEU2Qjc6IDB4OEM3QSxcbiAgICAweEU2Qjg6IDB4OEM4MixcbiAgICAweEU2Qjk6IDB4OEM4OSxcbiAgICAweEU2QkE6IDB4OEM4NSxcbiAgICAweEU2QkI6IDB4OEM4QSxcbiAgICAweEU2QkM6IDB4OEM4RCxcbiAgICAweEU2QkQ6IDB4OEM4RSxcbiAgICAweEU2QkU6IDB4OEM5NCxcbiAgICAweEU2QkY6IDB4OEM3QyxcbiAgICAweEU2QzA6IDB4OEM5OCxcbiAgICAweEU2QzE6IDB4NjIxRCxcbiAgICAweEU2QzI6IDB4OENBRCxcbiAgICAweEU2QzM6IDB4OENBQSxcbiAgICAweEU2QzQ6IDB4OENCRCxcbiAgICAweEU2QzU6IDB4OENCMixcbiAgICAweEU2QzY6IDB4OENCMyxcbiAgICAweEU2Qzc6IDB4OENBRSxcbiAgICAweEU2Qzg6IDB4OENCNixcbiAgICAweEU2Qzk6IDB4OENDOCxcbiAgICAweEU2Q0E6IDB4OENDMSxcbiAgICAweEU2Q0I6IDB4OENFNCxcbiAgICAweEU2Q0M6IDB4OENFMyxcbiAgICAweEU2Q0Q6IDB4OENEQSxcbiAgICAweEU2Q0U6IDB4OENGRCxcbiAgICAweEU2Q0Y6IDB4OENGQSxcbiAgICAweEU2RDA6IDB4OENGQixcbiAgICAweEU2RDE6IDB4OEQwNCxcbiAgICAweEU2RDI6IDB4OEQwNSxcbiAgICAweEU2RDM6IDB4OEQwQSxcbiAgICAweEU2RDQ6IDB4OEQwNyxcbiAgICAweEU2RDU6IDB4OEQwRixcbiAgICAweEU2RDY6IDB4OEQwRCxcbiAgICAweEU2RDc6IDB4OEQxMCxcbiAgICAweEU2RDg6IDB4OUY0RSxcbiAgICAweEU2RDk6IDB4OEQxMyxcbiAgICAweEU2REE6IDB4OENDRCxcbiAgICAweEU2REI6IDB4OEQxNCxcbiAgICAweEU2REM6IDB4OEQxNixcbiAgICAweEU2REQ6IDB4OEQ2NyxcbiAgICAweEU2REU6IDB4OEQ2RCxcbiAgICAweEU2REY6IDB4OEQ3MSxcbiAgICAweEU2RTA6IDB4OEQ3MyxcbiAgICAweEU2RTE6IDB4OEQ4MSxcbiAgICAweEU2RTI6IDB4OEQ5OSxcbiAgICAweEU2RTM6IDB4OERDMixcbiAgICAweEU2RTQ6IDB4OERCRSxcbiAgICAweEU2RTU6IDB4OERCQSxcbiAgICAweEU2RTY6IDB4OERDRixcbiAgICAweEU2RTc6IDB4OEREQSxcbiAgICAweEU2RTg6IDB4OERENixcbiAgICAweEU2RTk6IDB4OERDQyxcbiAgICAweEU2RUE6IDB4OEREQixcbiAgICAweEU2RUI6IDB4OERDQixcbiAgICAweEU2RUM6IDB4OERFQSxcbiAgICAweEU2RUQ6IDB4OERFQixcbiAgICAweEU2RUU6IDB4OERERixcbiAgICAweEU2RUY6IDB4OERFMyxcbiAgICAweEU2RjA6IDB4OERGQyxcbiAgICAweEU2RjE6IDB4OEUwOCxcbiAgICAweEU2RjI6IDB4OEUwOSxcbiAgICAweEU2RjM6IDB4OERGRixcbiAgICAweEU2RjQ6IDB4OEUxRCxcbiAgICAweEU2RjU6IDB4OEUxRSxcbiAgICAweEU2RjY6IDB4OEUxMCxcbiAgICAweEU2Rjc6IDB4OEUxRixcbiAgICAweEU2Rjg6IDB4OEU0MixcbiAgICAweEU2Rjk6IDB4OEUzNSxcbiAgICAweEU2RkE6IDB4OEUzMCxcbiAgICAweEU2RkI6IDB4OEUzNCxcbiAgICAweEU2RkM6IDB4OEU0QSxcbiAgICAweEU3NDA6IDB4OEU0NyxcbiAgICAweEU3NDE6IDB4OEU0OSxcbiAgICAweEU3NDI6IDB4OEU0QyxcbiAgICAweEU3NDM6IDB4OEU1MCxcbiAgICAweEU3NDQ6IDB4OEU0OCxcbiAgICAweEU3NDU6IDB4OEU1OSxcbiAgICAweEU3NDY6IDB4OEU2NCxcbiAgICAweEU3NDc6IDB4OEU2MCxcbiAgICAweEU3NDg6IDB4OEUyQSxcbiAgICAweEU3NDk6IDB4OEU2MyxcbiAgICAweEU3NEE6IDB4OEU1NSxcbiAgICAweEU3NEI6IDB4OEU3NixcbiAgICAweEU3NEM6IDB4OEU3MixcbiAgICAweEU3NEQ6IDB4OEU3QyxcbiAgICAweEU3NEU6IDB4OEU4MSxcbiAgICAweEU3NEY6IDB4OEU4NyxcbiAgICAweEU3NTA6IDB4OEU4NSxcbiAgICAweEU3NTE6IDB4OEU4NCxcbiAgICAweEU3NTI6IDB4OEU4QixcbiAgICAweEU3NTM6IDB4OEU4QSxcbiAgICAweEU3NTQ6IDB4OEU5MyxcbiAgICAweEU3NTU6IDB4OEU5MSxcbiAgICAweEU3NTY6IDB4OEU5NCxcbiAgICAweEU3NTc6IDB4OEU5OSxcbiAgICAweEU3NTg6IDB4OEVBQSxcbiAgICAweEU3NTk6IDB4OEVBMSxcbiAgICAweEU3NUE6IDB4OEVBQyxcbiAgICAweEU3NUI6IDB4OEVCMCxcbiAgICAweEU3NUM6IDB4OEVDNixcbiAgICAweEU3NUQ6IDB4OEVCMSxcbiAgICAweEU3NUU6IDB4OEVCRSxcbiAgICAweEU3NUY6IDB4OEVDNSxcbiAgICAweEU3NjA6IDB4OEVDOCxcbiAgICAweEU3NjE6IDB4OEVDQixcbiAgICAweEU3NjI6IDB4OEVEQixcbiAgICAweEU3NjM6IDB4OEVFMyxcbiAgICAweEU3NjQ6IDB4OEVGQyxcbiAgICAweEU3NjU6IDB4OEVGQixcbiAgICAweEU3NjY6IDB4OEVFQixcbiAgICAweEU3Njc6IDB4OEVGRSxcbiAgICAweEU3Njg6IDB4OEYwQSxcbiAgICAweEU3Njk6IDB4OEYwNSxcbiAgICAweEU3NkE6IDB4OEYxNSxcbiAgICAweEU3NkI6IDB4OEYxMixcbiAgICAweEU3NkM6IDB4OEYxOSxcbiAgICAweEU3NkQ6IDB4OEYxMyxcbiAgICAweEU3NkU6IDB4OEYxQyxcbiAgICAweEU3NkY6IDB4OEYxRixcbiAgICAweEU3NzA6IDB4OEYxQixcbiAgICAweEU3NzE6IDB4OEYwQyxcbiAgICAweEU3NzI6IDB4OEYyNixcbiAgICAweEU3NzM6IDB4OEYzMyxcbiAgICAweEU3NzQ6IDB4OEYzQixcbiAgICAweEU3NzU6IDB4OEYzOSxcbiAgICAweEU3NzY6IDB4OEY0NSxcbiAgICAweEU3Nzc6IDB4OEY0MixcbiAgICAweEU3Nzg6IDB4OEYzRSxcbiAgICAweEU3Nzk6IDB4OEY0QyxcbiAgICAweEU3N0E6IDB4OEY0OSxcbiAgICAweEU3N0I6IDB4OEY0NixcbiAgICAweEU3N0M6IDB4OEY0RSxcbiAgICAweEU3N0Q6IDB4OEY1NyxcbiAgICAweEU3N0U6IDB4OEY1QyxcbiAgICAweEU3ODA6IDB4OEY2MixcbiAgICAweEU3ODE6IDB4OEY2MyxcbiAgICAweEU3ODI6IDB4OEY2NCxcbiAgICAweEU3ODM6IDB4OEY5QyxcbiAgICAweEU3ODQ6IDB4OEY5RixcbiAgICAweEU3ODU6IDB4OEZBMyxcbiAgICAweEU3ODY6IDB4OEZBRCxcbiAgICAweEU3ODc6IDB4OEZBRixcbiAgICAweEU3ODg6IDB4OEZCNyxcbiAgICAweEU3ODk6IDB4OEZEQSxcbiAgICAweEU3OEE6IDB4OEZFNSxcbiAgICAweEU3OEI6IDB4OEZFMixcbiAgICAweEU3OEM6IDB4OEZFQSxcbiAgICAweEU3OEQ6IDB4OEZFRixcbiAgICAweEU3OEU6IDB4OTA4NyxcbiAgICAweEU3OEY6IDB4OEZGNCxcbiAgICAweEU3OTA6IDB4OTAwNSxcbiAgICAweEU3OTE6IDB4OEZGOSxcbiAgICAweEU3OTI6IDB4OEZGQSxcbiAgICAweEU3OTM6IDB4OTAxMSxcbiAgICAweEU3OTQ6IDB4OTAxNSxcbiAgICAweEU3OTU6IDB4OTAyMSxcbiAgICAweEU3OTY6IDB4OTAwRCxcbiAgICAweEU3OTc6IDB4OTAxRSxcbiAgICAweEU3OTg6IDB4OTAxNixcbiAgICAweEU3OTk6IDB4OTAwQixcbiAgICAweEU3OUE6IDB4OTAyNyxcbiAgICAweEU3OUI6IDB4OTAzNixcbiAgICAweEU3OUM6IDB4OTAzNSxcbiAgICAweEU3OUQ6IDB4OTAzOSxcbiAgICAweEU3OUU6IDB4OEZGOCxcbiAgICAweEU3OUY6IDB4OTA0RixcbiAgICAweEU3QTA6IDB4OTA1MCxcbiAgICAweEU3QTE6IDB4OTA1MSxcbiAgICAweEU3QTI6IDB4OTA1MixcbiAgICAweEU3QTM6IDB4OTAwRSxcbiAgICAweEU3QTQ6IDB4OTA0OSxcbiAgICAweEU3QTU6IDB4OTAzRSxcbiAgICAweEU3QTY6IDB4OTA1NixcbiAgICAweEU3QTc6IDB4OTA1OCxcbiAgICAweEU3QTg6IDB4OTA1RSxcbiAgICAweEU3QTk6IDB4OTA2OCxcbiAgICAweEU3QUE6IDB4OTA2RixcbiAgICAweEU3QUI6IDB4OTA3NixcbiAgICAweEU3QUM6IDB4OTZBOCxcbiAgICAweEU3QUQ6IDB4OTA3MixcbiAgICAweEU3QUU6IDB4OTA4MixcbiAgICAweEU3QUY6IDB4OTA3RCxcbiAgICAweEU3QjA6IDB4OTA4MSxcbiAgICAweEU3QjE6IDB4OTA4MCxcbiAgICAweEU3QjI6IDB4OTA4QSxcbiAgICAweEU3QjM6IDB4OTA4OSxcbiAgICAweEU3QjQ6IDB4OTA4RixcbiAgICAweEU3QjU6IDB4OTBBOCxcbiAgICAweEU3QjY6IDB4OTBBRixcbiAgICAweEU3Qjc6IDB4OTBCMSxcbiAgICAweEU3Qjg6IDB4OTBCNSxcbiAgICAweEU3Qjk6IDB4OTBFMixcbiAgICAweEU3QkE6IDB4OTBFNCxcbiAgICAweEU3QkI6IDB4NjI0OCxcbiAgICAweEU3QkM6IDB4OTBEQixcbiAgICAweEU3QkQ6IDB4OTEwMixcbiAgICAweEU3QkU6IDB4OTExMixcbiAgICAweEU3QkY6IDB4OTExOSxcbiAgICAweEU3QzA6IDB4OTEzMixcbiAgICAweEU3QzE6IDB4OTEzMCxcbiAgICAweEU3QzI6IDB4OTE0QSxcbiAgICAweEU3QzM6IDB4OTE1NixcbiAgICAweEU3QzQ6IDB4OTE1OCxcbiAgICAweEU3QzU6IDB4OTE2MyxcbiAgICAweEU3QzY6IDB4OTE2NSxcbiAgICAweEU3Qzc6IDB4OTE2OSxcbiAgICAweEU3Qzg6IDB4OTE3MyxcbiAgICAweEU3Qzk6IDB4OTE3MixcbiAgICAweEU3Q0E6IDB4OTE4QixcbiAgICAweEU3Q0I6IDB4OTE4OSxcbiAgICAweEU3Q0M6IDB4OTE4MixcbiAgICAweEU3Q0Q6IDB4OTFBMixcbiAgICAweEU3Q0U6IDB4OTFBQixcbiAgICAweEU3Q0Y6IDB4OTFBRixcbiAgICAweEU3RDA6IDB4OTFBQSxcbiAgICAweEU3RDE6IDB4OTFCNSxcbiAgICAweEU3RDI6IDB4OTFCNCxcbiAgICAweEU3RDM6IDB4OTFCQSxcbiAgICAweEU3RDQ6IDB4OTFDMCxcbiAgICAweEU3RDU6IDB4OTFDMSxcbiAgICAweEU3RDY6IDB4OTFDOSxcbiAgICAweEU3RDc6IDB4OTFDQixcbiAgICAweEU3RDg6IDB4OTFEMCxcbiAgICAweEU3RDk6IDB4OTFENixcbiAgICAweEU3REE6IDB4OTFERixcbiAgICAweEU3REI6IDB4OTFFMSxcbiAgICAweEU3REM6IDB4OTFEQixcbiAgICAweEU3REQ6IDB4OTFGQyxcbiAgICAweEU3REU6IDB4OTFGNSxcbiAgICAweEU3REY6IDB4OTFGNixcbiAgICAweEU3RTA6IDB4OTIxRSxcbiAgICAweEU3RTE6IDB4OTFGRixcbiAgICAweEU3RTI6IDB4OTIxNCxcbiAgICAweEU3RTM6IDB4OTIyQyxcbiAgICAweEU3RTQ6IDB4OTIxNSxcbiAgICAweEU3RTU6IDB4OTIxMSxcbiAgICAweEU3RTY6IDB4OTI1RSxcbiAgICAweEU3RTc6IDB4OTI1NyxcbiAgICAweEU3RTg6IDB4OTI0NSxcbiAgICAweEU3RTk6IDB4OTI0OSxcbiAgICAweEU3RUE6IDB4OTI2NCxcbiAgICAweEU3RUI6IDB4OTI0OCxcbiAgICAweEU3RUM6IDB4OTI5NSxcbiAgICAweEU3RUQ6IDB4OTIzRixcbiAgICAweEU3RUU6IDB4OTI0QixcbiAgICAweEU3RUY6IDB4OTI1MCxcbiAgICAweEU3RjA6IDB4OTI5QyxcbiAgICAweEU3RjE6IDB4OTI5NixcbiAgICAweEU3RjI6IDB4OTI5MyxcbiAgICAweEU3RjM6IDB4OTI5QixcbiAgICAweEU3RjQ6IDB4OTI1QSxcbiAgICAweEU3RjU6IDB4OTJDRixcbiAgICAweEU3RjY6IDB4OTJCOSxcbiAgICAweEU3Rjc6IDB4OTJCNyxcbiAgICAweEU3Rjg6IDB4OTJFOSxcbiAgICAweEU3Rjk6IDB4OTMwRixcbiAgICAweEU3RkE6IDB4OTJGQSxcbiAgICAweEU3RkI6IDB4OTM0NCxcbiAgICAweEU3RkM6IDB4OTMyRSxcbiAgICAweEU4NDA6IDB4OTMxOSxcbiAgICAweEU4NDE6IDB4OTMyMixcbiAgICAweEU4NDI6IDB4OTMxQSxcbiAgICAweEU4NDM6IDB4OTMyMyxcbiAgICAweEU4NDQ6IDB4OTMzQSxcbiAgICAweEU4NDU6IDB4OTMzNSxcbiAgICAweEU4NDY6IDB4OTMzQixcbiAgICAweEU4NDc6IDB4OTM1QyxcbiAgICAweEU4NDg6IDB4OTM2MCxcbiAgICAweEU4NDk6IDB4OTM3QyxcbiAgICAweEU4NEE6IDB4OTM2RSxcbiAgICAweEU4NEI6IDB4OTM1NixcbiAgICAweEU4NEM6IDB4OTNCMCxcbiAgICAweEU4NEQ6IDB4OTNBQyxcbiAgICAweEU4NEU6IDB4OTNBRCxcbiAgICAweEU4NEY6IDB4OTM5NCxcbiAgICAweEU4NTA6IDB4OTNCOSxcbiAgICAweEU4NTE6IDB4OTNENixcbiAgICAweEU4NTI6IDB4OTNENyxcbiAgICAweEU4NTM6IDB4OTNFOCxcbiAgICAweEU4NTQ6IDB4OTNFNSxcbiAgICAweEU4NTU6IDB4OTNEOCxcbiAgICAweEU4NTY6IDB4OTNDMyxcbiAgICAweEU4NTc6IDB4OTNERCxcbiAgICAweEU4NTg6IDB4OTNEMCxcbiAgICAweEU4NTk6IDB4OTNDOCxcbiAgICAweEU4NUE6IDB4OTNFNCxcbiAgICAweEU4NUI6IDB4OTQxQSxcbiAgICAweEU4NUM6IDB4OTQxNCxcbiAgICAweEU4NUQ6IDB4OTQxMyxcbiAgICAweEU4NUU6IDB4OTQwMyxcbiAgICAweEU4NUY6IDB4OTQwNyxcbiAgICAweEU4NjA6IDB4OTQxMCxcbiAgICAweEU4NjE6IDB4OTQzNixcbiAgICAweEU4NjI6IDB4OTQyQixcbiAgICAweEU4NjM6IDB4OTQzNSxcbiAgICAweEU4NjQ6IDB4OTQyMSxcbiAgICAweEU4NjU6IDB4OTQzQSxcbiAgICAweEU4NjY6IDB4OTQ0MSxcbiAgICAweEU4Njc6IDB4OTQ1MixcbiAgICAweEU4Njg6IDB4OTQ0NCxcbiAgICAweEU4Njk6IDB4OTQ1QixcbiAgICAweEU4NkE6IDB4OTQ2MCxcbiAgICAweEU4NkI6IDB4OTQ2MixcbiAgICAweEU4NkM6IDB4OTQ1RSxcbiAgICAweEU4NkQ6IDB4OTQ2QSxcbiAgICAweEU4NkU6IDB4OTIyOSxcbiAgICAweEU4NkY6IDB4OTQ3MCxcbiAgICAweEU4NzA6IDB4OTQ3NSxcbiAgICAweEU4NzE6IDB4OTQ3NyxcbiAgICAweEU4NzI6IDB4OTQ3RCxcbiAgICAweEU4NzM6IDB4OTQ1QSxcbiAgICAweEU4NzQ6IDB4OTQ3QyxcbiAgICAweEU4NzU6IDB4OTQ3RSxcbiAgICAweEU4NzY6IDB4OTQ4MSxcbiAgICAweEU4Nzc6IDB4OTQ3RixcbiAgICAweEU4Nzg6IDB4OTU4MixcbiAgICAweEU4Nzk6IDB4OTU4NyxcbiAgICAweEU4N0E6IDB4OTU4QSxcbiAgICAweEU4N0I6IDB4OTU5NCxcbiAgICAweEU4N0M6IDB4OTU5NixcbiAgICAweEU4N0Q6IDB4OTU5OCxcbiAgICAweEU4N0U6IDB4OTU5OSxcbiAgICAweEU4ODA6IDB4OTVBMCxcbiAgICAweEU4ODE6IDB4OTVBOCxcbiAgICAweEU4ODI6IDB4OTVBNyxcbiAgICAweEU4ODM6IDB4OTVBRCxcbiAgICAweEU4ODQ6IDB4OTVCQyxcbiAgICAweEU4ODU6IDB4OTVCQixcbiAgICAweEU4ODY6IDB4OTVCOSxcbiAgICAweEU4ODc6IDB4OTVCRSxcbiAgICAweEU4ODg6IDB4OTVDQSxcbiAgICAweEU4ODk6IDB4NkZGNixcbiAgICAweEU4OEE6IDB4OTVDMyxcbiAgICAweEU4OEI6IDB4OTVDRCxcbiAgICAweEU4OEM6IDB4OTVDQyxcbiAgICAweEU4OEQ6IDB4OTVENSxcbiAgICAweEU4OEU6IDB4OTVENCxcbiAgICAweEU4OEY6IDB4OTVENixcbiAgICAweEU4OTA6IDB4OTVEQyxcbiAgICAweEU4OTE6IDB4OTVFMSxcbiAgICAweEU4OTI6IDB4OTVFNSxcbiAgICAweEU4OTM6IDB4OTVFMixcbiAgICAweEU4OTQ6IDB4OTYyMSxcbiAgICAweEU4OTU6IDB4OTYyOCxcbiAgICAweEU4OTY6IDB4OTYyRSxcbiAgICAweEU4OTc6IDB4OTYyRixcbiAgICAweEU4OTg6IDB4OTY0MixcbiAgICAweEU4OTk6IDB4OTY0QyxcbiAgICAweEU4OUE6IDB4OTY0RixcbiAgICAweEU4OUI6IDB4OTY0QixcbiAgICAweEU4OUM6IDB4OTY3NyxcbiAgICAweEU4OUQ6IDB4OTY1QyxcbiAgICAweEU4OUU6IDB4OTY1RSxcbiAgICAweEU4OUY6IDB4OTY1RCxcbiAgICAweEU4QTA6IDB4OTY1RixcbiAgICAweEU4QTE6IDB4OTY2NixcbiAgICAweEU4QTI6IDB4OTY3MixcbiAgICAweEU4QTM6IDB4OTY2QyxcbiAgICAweEU4QTQ6IDB4OTY4RCxcbiAgICAweEU4QTU6IDB4OTY5OCxcbiAgICAweEU4QTY6IDB4OTY5NSxcbiAgICAweEU4QTc6IDB4OTY5NyxcbiAgICAweEU4QTg6IDB4OTZBQSxcbiAgICAweEU4QTk6IDB4OTZBNyxcbiAgICAweEU4QUE6IDB4OTZCMSxcbiAgICAweEU4QUI6IDB4OTZCMixcbiAgICAweEU4QUM6IDB4OTZCMCxcbiAgICAweEU4QUQ6IDB4OTZCNCxcbiAgICAweEU4QUU6IDB4OTZCNixcbiAgICAweEU4QUY6IDB4OTZCOCxcbiAgICAweEU4QjA6IDB4OTZCOSxcbiAgICAweEU4QjE6IDB4OTZDRSxcbiAgICAweEU4QjI6IDB4OTZDQixcbiAgICAweEU4QjM6IDB4OTZDOSxcbiAgICAweEU4QjQ6IDB4OTZDRCxcbiAgICAweEU4QjU6IDB4ODk0RCxcbiAgICAweEU4QjY6IDB4OTZEQyxcbiAgICAweEU4Qjc6IDB4OTcwRCxcbiAgICAweEU4Qjg6IDB4OTZENSxcbiAgICAweEU4Qjk6IDB4OTZGOSxcbiAgICAweEU4QkE6IDB4OTcwNCxcbiAgICAweEU4QkI6IDB4OTcwNixcbiAgICAweEU4QkM6IDB4OTcwOCxcbiAgICAweEU4QkQ6IDB4OTcxMyxcbiAgICAweEU4QkU6IDB4OTcwRSxcbiAgICAweEU4QkY6IDB4OTcxMSxcbiAgICAweEU4QzA6IDB4OTcwRixcbiAgICAweEU4QzE6IDB4OTcxNixcbiAgICAweEU4QzI6IDB4OTcxOSxcbiAgICAweEU4QzM6IDB4OTcyNCxcbiAgICAweEU4QzQ6IDB4OTcyQSxcbiAgICAweEU4QzU6IDB4OTczMCxcbiAgICAweEU4QzY6IDB4OTczOSxcbiAgICAweEU4Qzc6IDB4OTczRCxcbiAgICAweEU4Qzg6IDB4OTczRSxcbiAgICAweEU4Qzk6IDB4OTc0NCxcbiAgICAweEU4Q0E6IDB4OTc0NixcbiAgICAweEU4Q0I6IDB4OTc0OCxcbiAgICAweEU4Q0M6IDB4OTc0MixcbiAgICAweEU4Q0Q6IDB4OTc0OSxcbiAgICAweEU4Q0U6IDB4OTc1QyxcbiAgICAweEU4Q0Y6IDB4OTc2MCxcbiAgICAweEU4RDA6IDB4OTc2NCxcbiAgICAweEU4RDE6IDB4OTc2NixcbiAgICAweEU4RDI6IDB4OTc2OCxcbiAgICAweEU4RDM6IDB4NTJEMixcbiAgICAweEU4RDQ6IDB4OTc2QixcbiAgICAweEU4RDU6IDB4OTc3MSxcbiAgICAweEU4RDY6IDB4OTc3OSxcbiAgICAweEU4RDc6IDB4OTc4NSxcbiAgICAweEU4RDg6IDB4OTc3QyxcbiAgICAweEU4RDk6IDB4OTc4MSxcbiAgICAweEU4REE6IDB4OTc3QSxcbiAgICAweEU4REI6IDB4OTc4NixcbiAgICAweEU4REM6IDB4OTc4QixcbiAgICAweEU4REQ6IDB4OTc4RixcbiAgICAweEU4REU6IDB4OTc5MCxcbiAgICAweEU4REY6IDB4OTc5QyxcbiAgICAweEU4RTA6IDB4OTdBOCxcbiAgICAweEU4RTE6IDB4OTdBNixcbiAgICAweEU4RTI6IDB4OTdBMyxcbiAgICAweEU4RTM6IDB4OTdCMyxcbiAgICAweEU4RTQ6IDB4OTdCNCxcbiAgICAweEU4RTU6IDB4OTdDMyxcbiAgICAweEU4RTY6IDB4OTdDNixcbiAgICAweEU4RTc6IDB4OTdDOCxcbiAgICAweEU4RTg6IDB4OTdDQixcbiAgICAweEU4RTk6IDB4OTdEQyxcbiAgICAweEU4RUE6IDB4OTdFRCxcbiAgICAweEU4RUI6IDB4OUY0RixcbiAgICAweEU4RUM6IDB4OTdGMixcbiAgICAweEU4RUQ6IDB4N0FERixcbiAgICAweEU4RUU6IDB4OTdGNixcbiAgICAweEU4RUY6IDB4OTdGNSxcbiAgICAweEU4RjA6IDB4OTgwRixcbiAgICAweEU4RjE6IDB4OTgwQyxcbiAgICAweEU4RjI6IDB4OTgzOCxcbiAgICAweEU4RjM6IDB4OTgyNCxcbiAgICAweEU4RjQ6IDB4OTgyMSxcbiAgICAweEU4RjU6IDB4OTgzNyxcbiAgICAweEU4RjY6IDB4OTgzRCxcbiAgICAweEU4Rjc6IDB4OTg0NixcbiAgICAweEU4Rjg6IDB4OTg0RixcbiAgICAweEU4Rjk6IDB4OTg0QixcbiAgICAweEU4RkE6IDB4OTg2QixcbiAgICAweEU4RkI6IDB4OTg2RixcbiAgICAweEU4RkM6IDB4OTg3MCxcbiAgICAweEU5NDA6IDB4OTg3MSxcbiAgICAweEU5NDE6IDB4OTg3NCxcbiAgICAweEU5NDI6IDB4OTg3MyxcbiAgICAweEU5NDM6IDB4OThBQSxcbiAgICAweEU5NDQ6IDB4OThBRixcbiAgICAweEU5NDU6IDB4OThCMSxcbiAgICAweEU5NDY6IDB4OThCNixcbiAgICAweEU5NDc6IDB4OThDNCxcbiAgICAweEU5NDg6IDB4OThDMyxcbiAgICAweEU5NDk6IDB4OThDNixcbiAgICAweEU5NEE6IDB4OThFOSxcbiAgICAweEU5NEI6IDB4OThFQixcbiAgICAweEU5NEM6IDB4OTkwMyxcbiAgICAweEU5NEQ6IDB4OTkwOSxcbiAgICAweEU5NEU6IDB4OTkxMixcbiAgICAweEU5NEY6IDB4OTkxNCxcbiAgICAweEU5NTA6IDB4OTkxOCxcbiAgICAweEU5NTE6IDB4OTkyMSxcbiAgICAweEU5NTI6IDB4OTkxRCxcbiAgICAweEU5NTM6IDB4OTkxRSxcbiAgICAweEU5NTQ6IDB4OTkyNCxcbiAgICAweEU5NTU6IDB4OTkyMCxcbiAgICAweEU5NTY6IDB4OTkyQyxcbiAgICAweEU5NTc6IDB4OTkyRSxcbiAgICAweEU5NTg6IDB4OTkzRCxcbiAgICAweEU5NTk6IDB4OTkzRSxcbiAgICAweEU5NUE6IDB4OTk0MixcbiAgICAweEU5NUI6IDB4OTk0OSxcbiAgICAweEU5NUM6IDB4OTk0NSxcbiAgICAweEU5NUQ6IDB4OTk1MCxcbiAgICAweEU5NUU6IDB4OTk0QixcbiAgICAweEU5NUY6IDB4OTk1MSxcbiAgICAweEU5NjA6IDB4OTk1MixcbiAgICAweEU5NjE6IDB4OTk0QyxcbiAgICAweEU5NjI6IDB4OTk1NSxcbiAgICAweEU5NjM6IDB4OTk5NyxcbiAgICAweEU5NjQ6IDB4OTk5OCxcbiAgICAweEU5NjU6IDB4OTlBNSxcbiAgICAweEU5NjY6IDB4OTlBRCxcbiAgICAweEU5Njc6IDB4OTlBRSxcbiAgICAweEU5Njg6IDB4OTlCQyxcbiAgICAweEU5Njk6IDB4OTlERixcbiAgICAweEU5NkE6IDB4OTlEQixcbiAgICAweEU5NkI6IDB4OTlERCxcbiAgICAweEU5NkM6IDB4OTlEOCxcbiAgICAweEU5NkQ6IDB4OTlEMSxcbiAgICAweEU5NkU6IDB4OTlFRCxcbiAgICAweEU5NkY6IDB4OTlFRSxcbiAgICAweEU5NzA6IDB4OTlGMSxcbiAgICAweEU5NzE6IDB4OTlGMixcbiAgICAweEU5NzI6IDB4OTlGQixcbiAgICAweEU5NzM6IDB4OTlGOCxcbiAgICAweEU5NzQ6IDB4OUEwMSxcbiAgICAweEU5NzU6IDB4OUEwRixcbiAgICAweEU5NzY6IDB4OUEwNSxcbiAgICAweEU5Nzc6IDB4OTlFMixcbiAgICAweEU5Nzg6IDB4OUExOSxcbiAgICAweEU5Nzk6IDB4OUEyQixcbiAgICAweEU5N0E6IDB4OUEzNyxcbiAgICAweEU5N0I6IDB4OUE0NSxcbiAgICAweEU5N0M6IDB4OUE0MixcbiAgICAweEU5N0Q6IDB4OUE0MCxcbiAgICAweEU5N0U6IDB4OUE0MyxcbiAgICAweEU5ODA6IDB4OUEzRSxcbiAgICAweEU5ODE6IDB4OUE1NSxcbiAgICAweEU5ODI6IDB4OUE0RCxcbiAgICAweEU5ODM6IDB4OUE1QixcbiAgICAweEU5ODQ6IDB4OUE1NyxcbiAgICAweEU5ODU6IDB4OUE1RixcbiAgICAweEU5ODY6IDB4OUE2MixcbiAgICAweEU5ODc6IDB4OUE2NSxcbiAgICAweEU5ODg6IDB4OUE2NCxcbiAgICAweEU5ODk6IDB4OUE2OSxcbiAgICAweEU5OEE6IDB4OUE2QixcbiAgICAweEU5OEI6IDB4OUE2QSxcbiAgICAweEU5OEM6IDB4OUFBRCxcbiAgICAweEU5OEQ6IDB4OUFCMCxcbiAgICAweEU5OEU6IDB4OUFCQyxcbiAgICAweEU5OEY6IDB4OUFDMCxcbiAgICAweEU5OTA6IDB4OUFDRixcbiAgICAweEU5OTE6IDB4OUFEMSxcbiAgICAweEU5OTI6IDB4OUFEMyxcbiAgICAweEU5OTM6IDB4OUFENCxcbiAgICAweEU5OTQ6IDB4OUFERSxcbiAgICAweEU5OTU6IDB4OUFERixcbiAgICAweEU5OTY6IDB4OUFFMixcbiAgICAweEU5OTc6IDB4OUFFMyxcbiAgICAweEU5OTg6IDB4OUFFNixcbiAgICAweEU5OTk6IDB4OUFFRixcbiAgICAweEU5OUE6IDB4OUFFQixcbiAgICAweEU5OUI6IDB4OUFFRSxcbiAgICAweEU5OUM6IDB4OUFGNCxcbiAgICAweEU5OUQ6IDB4OUFGMSxcbiAgICAweEU5OUU6IDB4OUFGNyxcbiAgICAweEU5OUY6IDB4OUFGQixcbiAgICAweEU5QTA6IDB4OUIwNixcbiAgICAweEU5QTE6IDB4OUIxOCxcbiAgICAweEU5QTI6IDB4OUIxQSxcbiAgICAweEU5QTM6IDB4OUIxRixcbiAgICAweEU5QTQ6IDB4OUIyMixcbiAgICAweEU5QTU6IDB4OUIyMyxcbiAgICAweEU5QTY6IDB4OUIyNSxcbiAgICAweEU5QTc6IDB4OUIyNyxcbiAgICAweEU5QTg6IDB4OUIyOCxcbiAgICAweEU5QTk6IDB4OUIyOSxcbiAgICAweEU5QUE6IDB4OUIyQSxcbiAgICAweEU5QUI6IDB4OUIyRSxcbiAgICAweEU5QUM6IDB4OUIyRixcbiAgICAweEU5QUQ6IDB4OUIzMixcbiAgICAweEU5QUU6IDB4OUI0NCxcbiAgICAweEU5QUY6IDB4OUI0MyxcbiAgICAweEU5QjA6IDB4OUI0RixcbiAgICAweEU5QjE6IDB4OUI0RCxcbiAgICAweEU5QjI6IDB4OUI0RSxcbiAgICAweEU5QjM6IDB4OUI1MSxcbiAgICAweEU5QjQ6IDB4OUI1OCxcbiAgICAweEU5QjU6IDB4OUI3NCxcbiAgICAweEU5QjY6IDB4OUI5MyxcbiAgICAweEU5Qjc6IDB4OUI4MyxcbiAgICAweEU5Qjg6IDB4OUI5MSxcbiAgICAweEU5Qjk6IDB4OUI5NixcbiAgICAweEU5QkE6IDB4OUI5NyxcbiAgICAweEU5QkI6IDB4OUI5RixcbiAgICAweEU5QkM6IDB4OUJBMCxcbiAgICAweEU5QkQ6IDB4OUJBOCxcbiAgICAweEU5QkU6IDB4OUJCNCxcbiAgICAweEU5QkY6IDB4OUJDMCxcbiAgICAweEU5QzA6IDB4OUJDQSxcbiAgICAweEU5QzE6IDB4OUJCOSxcbiAgICAweEU5QzI6IDB4OUJDNixcbiAgICAweEU5QzM6IDB4OUJDRixcbiAgICAweEU5QzQ6IDB4OUJEMSxcbiAgICAweEU5QzU6IDB4OUJEMixcbiAgICAweEU5QzY6IDB4OUJFMyxcbiAgICAweEU5Qzc6IDB4OUJFMixcbiAgICAweEU5Qzg6IDB4OUJFNCxcbiAgICAweEU5Qzk6IDB4OUJENCxcbiAgICAweEU5Q0E6IDB4OUJFMSxcbiAgICAweEU5Q0I6IDB4OUMzQSxcbiAgICAweEU5Q0M6IDB4OUJGMixcbiAgICAweEU5Q0Q6IDB4OUJGMSxcbiAgICAweEU5Q0U6IDB4OUJGMCxcbiAgICAweEU5Q0Y6IDB4OUMxNSxcbiAgICAweEU5RDA6IDB4OUMxNCxcbiAgICAweEU5RDE6IDB4OUMwOSxcbiAgICAweEU5RDI6IDB4OUMxMyxcbiAgICAweEU5RDM6IDB4OUMwQyxcbiAgICAweEU5RDQ6IDB4OUMwNixcbiAgICAweEU5RDU6IDB4OUMwOCxcbiAgICAweEU5RDY6IDB4OUMxMixcbiAgICAweEU5RDc6IDB4OUMwQSxcbiAgICAweEU5RDg6IDB4OUMwNCxcbiAgICAweEU5RDk6IDB4OUMyRSxcbiAgICAweEU5REE6IDB4OUMxQixcbiAgICAweEU5REI6IDB4OUMyNSxcbiAgICAweEU5REM6IDB4OUMyNCxcbiAgICAweEU5REQ6IDB4OUMyMSxcbiAgICAweEU5REU6IDB4OUMzMCxcbiAgICAweEU5REY6IDB4OUM0NyxcbiAgICAweEU5RTA6IDB4OUMzMixcbiAgICAweEU5RTE6IDB4OUM0NixcbiAgICAweEU5RTI6IDB4OUMzRSxcbiAgICAweEU5RTM6IDB4OUM1QSxcbiAgICAweEU5RTQ6IDB4OUM2MCxcbiAgICAweEU5RTU6IDB4OUM2NyxcbiAgICAweEU5RTY6IDB4OUM3NixcbiAgICAweEU5RTc6IDB4OUM3OCxcbiAgICAweEU5RTg6IDB4OUNFNyxcbiAgICAweEU5RTk6IDB4OUNFQyxcbiAgICAweEU5RUE6IDB4OUNGMCxcbiAgICAweEU5RUI6IDB4OUQwOSxcbiAgICAweEU5RUM6IDB4OUQwOCxcbiAgICAweEU5RUQ6IDB4OUNFQixcbiAgICAweEU5RUU6IDB4OUQwMyxcbiAgICAweEU5RUY6IDB4OUQwNixcbiAgICAweEU5RjA6IDB4OUQyQSxcbiAgICAweEU5RjE6IDB4OUQyNixcbiAgICAweEU5RjI6IDB4OURBRixcbiAgICAweEU5RjM6IDB4OUQyMyxcbiAgICAweEU5RjQ6IDB4OUQxRixcbiAgICAweEU5RjU6IDB4OUQ0NCxcbiAgICAweEU5RjY6IDB4OUQxNSxcbiAgICAweEU5Rjc6IDB4OUQxMixcbiAgICAweEU5Rjg6IDB4OUQ0MSxcbiAgICAweEU5Rjk6IDB4OUQzRixcbiAgICAweEU5RkE6IDB4OUQzRSxcbiAgICAweEU5RkI6IDB4OUQ0NixcbiAgICAweEU5RkM6IDB4OUQ0OCxcbiAgICAweEVBNDA6IDB4OUQ1RCxcbiAgICAweEVBNDE6IDB4OUQ1RSxcbiAgICAweEVBNDI6IDB4OUQ2NCxcbiAgICAweEVBNDM6IDB4OUQ1MSxcbiAgICAweEVBNDQ6IDB4OUQ1MCxcbiAgICAweEVBNDU6IDB4OUQ1OSxcbiAgICAweEVBNDY6IDB4OUQ3MixcbiAgICAweEVBNDc6IDB4OUQ4OSxcbiAgICAweEVBNDg6IDB4OUQ4NyxcbiAgICAweEVBNDk6IDB4OURBQixcbiAgICAweEVBNEE6IDB4OUQ2RixcbiAgICAweEVBNEI6IDB4OUQ3QSxcbiAgICAweEVBNEM6IDB4OUQ5QSxcbiAgICAweEVBNEQ6IDB4OURBNCxcbiAgICAweEVBNEU6IDB4OURBOSxcbiAgICAweEVBNEY6IDB4OURCMixcbiAgICAweEVBNTA6IDB4OURDNCxcbiAgICAweEVBNTE6IDB4OURDMSxcbiAgICAweEVBNTI6IDB4OURCQixcbiAgICAweEVBNTM6IDB4OURCOCxcbiAgICAweEVBNTQ6IDB4OURCQSxcbiAgICAweEVBNTU6IDB4OURDNixcbiAgICAweEVBNTY6IDB4OURDRixcbiAgICAweEVBNTc6IDB4OURDMixcbiAgICAweEVBNTg6IDB4OUREOSxcbiAgICAweEVBNTk6IDB4OUREMyxcbiAgICAweEVBNUE6IDB4OURGOCxcbiAgICAweEVBNUI6IDB4OURFNixcbiAgICAweEVBNUM6IDB4OURFRCxcbiAgICAweEVBNUQ6IDB4OURFRixcbiAgICAweEVBNUU6IDB4OURGRCxcbiAgICAweEVBNUY6IDB4OUUxQSxcbiAgICAweEVBNjA6IDB4OUUxQixcbiAgICAweEVBNjE6IDB4OUUxRSxcbiAgICAweEVBNjI6IDB4OUU3NSxcbiAgICAweEVBNjM6IDB4OUU3OSxcbiAgICAweEVBNjQ6IDB4OUU3RCxcbiAgICAweEVBNjU6IDB4OUU4MSxcbiAgICAweEVBNjY6IDB4OUU4OCxcbiAgICAweEVBNjc6IDB4OUU4QixcbiAgICAweEVBNjg6IDB4OUU4QyxcbiAgICAweEVBNjk6IDB4OUU5MixcbiAgICAweEVBNkE6IDB4OUU5NSxcbiAgICAweEVBNkI6IDB4OUU5MSxcbiAgICAweEVBNkM6IDB4OUU5RCxcbiAgICAweEVBNkQ6IDB4OUVBNSxcbiAgICAweEVBNkU6IDB4OUVBOSxcbiAgICAweEVBNkY6IDB4OUVCOCxcbiAgICAweEVBNzA6IDB4OUVBQSxcbiAgICAweEVBNzE6IDB4OUVBRCxcbiAgICAweEVBNzI6IDB4OTc2MSxcbiAgICAweEVBNzM6IDB4OUVDQyxcbiAgICAweEVBNzQ6IDB4OUVDRSxcbiAgICAweEVBNzU6IDB4OUVDRixcbiAgICAweEVBNzY6IDB4OUVEMCxcbiAgICAweEVBNzc6IDB4OUVENCxcbiAgICAweEVBNzg6IDB4OUVEQyxcbiAgICAweEVBNzk6IDB4OUVERSxcbiAgICAweEVBN0E6IDB4OUVERCxcbiAgICAweEVBN0I6IDB4OUVFMCxcbiAgICAweEVBN0M6IDB4OUVFNSxcbiAgICAweEVBN0Q6IDB4OUVFOCxcbiAgICAweEVBN0U6IDB4OUVFRixcbiAgICAweEVBODA6IDB4OUVGNCxcbiAgICAweEVBODE6IDB4OUVGNixcbiAgICAweEVBODI6IDB4OUVGNyxcbiAgICAweEVBODM6IDB4OUVGOSxcbiAgICAweEVBODQ6IDB4OUVGQixcbiAgICAweEVBODU6IDB4OUVGQyxcbiAgICAweEVBODY6IDB4OUVGRCxcbiAgICAweEVBODc6IDB4OUYwNyxcbiAgICAweEVBODg6IDB4OUYwOCxcbiAgICAweEVBODk6IDB4NzZCNyxcbiAgICAweEVBOEE6IDB4OUYxNSxcbiAgICAweEVBOEI6IDB4OUYyMSxcbiAgICAweEVBOEM6IDB4OUYyQyxcbiAgICAweEVBOEQ6IDB4OUYzRSxcbiAgICAweEVBOEU6IDB4OUY0QSxcbiAgICAweEVBOEY6IDB4OUY1MixcbiAgICAweEVBOTA6IDB4OUY1NCxcbiAgICAweEVBOTE6IDB4OUY2MyxcbiAgICAweEVBOTI6IDB4OUY1RixcbiAgICAweEVBOTM6IDB4OUY2MCxcbiAgICAweEVBOTQ6IDB4OUY2MSxcbiAgICAweEVBOTU6IDB4OUY2NixcbiAgICAweEVBOTY6IDB4OUY2NyxcbiAgICAweEVBOTc6IDB4OUY2QyxcbiAgICAweEVBOTg6IDB4OUY2QSxcbiAgICAweEVBOTk6IDB4OUY3NyxcbiAgICAweEVBOUE6IDB4OUY3MixcbiAgICAweEVBOUI6IDB4OUY3NixcbiAgICAweEVBOUM6IDB4OUY5NSxcbiAgICAweEVBOUQ6IDB4OUY5QyxcbiAgICAweEVBOUU6IDB4OUZBMCxcbiAgICAweEVBOUY6IDB4NTgyRixcbiAgICAweEVBQTA6IDB4NjlDNyxcbiAgICAweEVBQTE6IDB4OTA1OSxcbiAgICAweEVBQTI6IDB4NzQ2NCxcbiAgICAweEVBQTM6IDB4NTFEQyxcbiAgICAweEVBQTQ6IDB4NzE5OSxcbn07XG5cblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR2VuZXJpY0dGXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEdlbmVyaWNHRlBvbHlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5mdW5jdGlvbiBydW5FdWNsaWRlYW5BbGdvcml0aG0oZmllbGQsIGEsIGIsIFIpIHtcbiAgICAvLyBBc3N1bWUgYSdzIGRlZ3JlZSBpcyA+PSBiJ3NcbiAgICBpZiAoYS5kZWdyZWUoKSA8IGIuZGVncmVlKCkpIHtcbiAgICAgICAgX2EgPSBbYiwgYV0sIGEgPSBfYVswXSwgYiA9IF9hWzFdO1xuICAgIH1cbiAgICB2YXIgckxhc3QgPSBhO1xuICAgIHZhciByID0gYjtcbiAgICB2YXIgdExhc3QgPSBmaWVsZC56ZXJvO1xuICAgIHZhciB0ID0gZmllbGQub25lO1xuICAgIC8vIFJ1biBFdWNsaWRlYW4gYWxnb3JpdGhtIHVudGlsIHIncyBkZWdyZWUgaXMgbGVzcyB0aGFuIFIvMlxuICAgIHdoaWxlIChyLmRlZ3JlZSgpID49IFIgLyAyKSB7XG4gICAgICAgIHZhciByTGFzdExhc3QgPSByTGFzdDtcbiAgICAgICAgdmFyIHRMYXN0TGFzdCA9IHRMYXN0O1xuICAgICAgICByTGFzdCA9IHI7XG4gICAgICAgIHRMYXN0ID0gdDtcbiAgICAgICAgLy8gRGl2aWRlIHJMYXN0TGFzdCBieSByTGFzdCwgd2l0aCBxdW90aWVudCBpbiBxIGFuZCByZW1haW5kZXIgaW4gclxuICAgICAgICBpZiAockxhc3QuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIC8vIEV1Y2xpZGVhbiBhbGdvcml0aG0gYWxyZWFkeSB0ZXJtaW5hdGVkP1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHJMYXN0TGFzdDtcbiAgICAgICAgdmFyIHEgPSBmaWVsZC56ZXJvO1xuICAgICAgICB2YXIgZGVub21pbmF0b3JMZWFkaW5nVGVybSA9IHJMYXN0LmdldENvZWZmaWNpZW50KHJMYXN0LmRlZ3JlZSgpKTtcbiAgICAgICAgdmFyIGRsdEludmVyc2UgPSBmaWVsZC5pbnZlcnNlKGRlbm9taW5hdG9yTGVhZGluZ1Rlcm0pO1xuICAgICAgICB3aGlsZSAoci5kZWdyZWUoKSA+PSByTGFzdC5kZWdyZWUoKSAmJiAhci5pc1plcm8oKSkge1xuICAgICAgICAgICAgdmFyIGRlZ3JlZURpZmYgPSByLmRlZ3JlZSgpIC0gckxhc3QuZGVncmVlKCk7XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBmaWVsZC5tdWx0aXBseShyLmdldENvZWZmaWNpZW50KHIuZGVncmVlKCkpLCBkbHRJbnZlcnNlKTtcbiAgICAgICAgICAgIHEgPSBxLmFkZE9yU3VidHJhY3QoZmllbGQuYnVpbGRNb25vbWlhbChkZWdyZWVEaWZmLCBzY2FsZSkpO1xuICAgICAgICAgICAgciA9IHIuYWRkT3JTdWJ0cmFjdChyTGFzdC5tdWx0aXBseUJ5TW9ub21pYWwoZGVncmVlRGlmZiwgc2NhbGUpKTtcbiAgICAgICAgfVxuICAgICAgICB0ID0gcS5tdWx0aXBseVBvbHkodExhc3QpLmFkZE9yU3VidHJhY3QodExhc3RMYXN0KTtcbiAgICAgICAgaWYgKHIuZGVncmVlKCkgPj0gckxhc3QuZGVncmVlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBzaWdtYVRpbGRlQXRaZXJvID0gdC5nZXRDb2VmZmljaWVudCgwKTtcbiAgICBpZiAoc2lnbWFUaWxkZUF0WmVybyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGludmVyc2UgPSBmaWVsZC5pbnZlcnNlKHNpZ21hVGlsZGVBdFplcm8pO1xuICAgIHJldHVybiBbdC5tdWx0aXBseShpbnZlcnNlKSwgci5tdWx0aXBseShpbnZlcnNlKV07XG4gICAgdmFyIF9hO1xufVxuZnVuY3Rpb24gZmluZEVycm9yTG9jYXRpb25zKGZpZWxkLCBlcnJvckxvY2F0b3IpIHtcbiAgICAvLyBUaGlzIGlzIGEgZGlyZWN0IGFwcGxpY2F0aW9uIG9mIENoaWVuJ3Mgc2VhcmNoXG4gICAgdmFyIG51bUVycm9ycyA9IGVycm9yTG9jYXRvci5kZWdyZWUoKTtcbiAgICBpZiAobnVtRXJyb3JzID09PSAxKSB7XG4gICAgICAgIHJldHVybiBbZXJyb3JMb2NhdG9yLmdldENvZWZmaWNpZW50KDEpXTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShudW1FcnJvcnMpO1xuICAgIHZhciBlcnJvckNvdW50ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGZpZWxkLnNpemUgJiYgZXJyb3JDb3VudCA8IG51bUVycm9yczsgaSsrKSB7XG4gICAgICAgIGlmIChlcnJvckxvY2F0b3IuZXZhbHVhdGVBdChpKSA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0W2Vycm9yQ291bnRdID0gZmllbGQuaW52ZXJzZShpKTtcbiAgICAgICAgICAgIGVycm9yQ291bnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXJyb3JDb3VudCAhPT0gbnVtRXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmluZEVycm9yTWFnbml0dWRlcyhmaWVsZCwgZXJyb3JFdmFsdWF0b3IsIGVycm9yTG9jYXRpb25zKSB7XG4gICAgLy8gVGhpcyBpcyBkaXJlY3RseSBhcHBseWluZyBGb3JuZXkncyBGb3JtdWxhXG4gICAgdmFyIHMgPSBlcnJvckxvY2F0aW9ucy5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShzKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgICB2YXIgeGlJbnZlcnNlID0gZmllbGQuaW52ZXJzZShlcnJvckxvY2F0aW9uc1tpXSk7XG4gICAgICAgIHZhciBkZW5vbWluYXRvciA9IDE7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgczsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgICAgIGRlbm9taW5hdG9yID0gZmllbGQubXVsdGlwbHkoZGVub21pbmF0b3IsIEdlbmVyaWNHRl8xLmFkZE9yU3VidHJhY3RHRigxLCBmaWVsZC5tdWx0aXBseShlcnJvckxvY2F0aW9uc1tqXSwgeGlJbnZlcnNlKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtpXSA9IGZpZWxkLm11bHRpcGx5KGVycm9yRXZhbHVhdG9yLmV2YWx1YXRlQXQoeGlJbnZlcnNlKSwgZmllbGQuaW52ZXJzZShkZW5vbWluYXRvcikpO1xuICAgICAgICBpZiAoZmllbGQuZ2VuZXJhdG9yQmFzZSAhPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0W2ldID0gZmllbGQubXVsdGlwbHkocmVzdWx0W2ldLCB4aUludmVyc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBkZWNvZGUoYnl0ZXMsIHR3b1MpIHtcbiAgICB2YXIgb3V0cHV0Qnl0ZXMgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnl0ZXMubGVuZ3RoKTtcbiAgICBvdXRwdXRCeXRlcy5zZXQoYnl0ZXMpO1xuICAgIHZhciBmaWVsZCA9IG5ldyBHZW5lcmljR0ZfMS5kZWZhdWx0KDB4MDExRCwgMjU2LCAwKTsgLy8geF44ICsgeF40ICsgeF4zICsgeF4yICsgMVxuICAgIHZhciBwb2x5ID0gbmV3IEdlbmVyaWNHRlBvbHlfMS5kZWZhdWx0KGZpZWxkLCBvdXRwdXRCeXRlcyk7XG4gICAgdmFyIHN5bmRyb21lQ29lZmZpY2llbnRzID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHR3b1MpO1xuICAgIHZhciBlcnJvciA9IGZhbHNlO1xuICAgIGZvciAodmFyIHMgPSAwOyBzIDwgdHdvUzsgcysrKSB7XG4gICAgICAgIHZhciBldmFsdWF0aW9uID0gcG9seS5ldmFsdWF0ZUF0KGZpZWxkLmV4cChzICsgZmllbGQuZ2VuZXJhdG9yQmFzZSkpO1xuICAgICAgICBzeW5kcm9tZUNvZWZmaWNpZW50c1tzeW5kcm9tZUNvZWZmaWNpZW50cy5sZW5ndGggLSAxIC0gc10gPSBldmFsdWF0aW9uO1xuICAgICAgICBpZiAoZXZhbHVhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dEJ5dGVzO1xuICAgIH1cbiAgICB2YXIgc3luZHJvbWUgPSBuZXcgR2VuZXJpY0dGUG9seV8xLmRlZmF1bHQoZmllbGQsIHN5bmRyb21lQ29lZmZpY2llbnRzKTtcbiAgICB2YXIgc2lnbWFPbWVnYSA9IHJ1bkV1Y2xpZGVhbkFsZ29yaXRobShmaWVsZCwgZmllbGQuYnVpbGRNb25vbWlhbCh0d29TLCAxKSwgc3luZHJvbWUsIHR3b1MpO1xuICAgIGlmIChzaWdtYU9tZWdhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgZXJyb3JMb2NhdGlvbnMgPSBmaW5kRXJyb3JMb2NhdGlvbnMoZmllbGQsIHNpZ21hT21lZ2FbMF0pO1xuICAgIGlmIChlcnJvckxvY2F0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgZXJyb3JNYWduaXR1ZGVzID0gZmluZEVycm9yTWFnbml0dWRlcyhmaWVsZCwgc2lnbWFPbWVnYVsxXSwgZXJyb3JMb2NhdGlvbnMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JMb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gb3V0cHV0Qnl0ZXMubGVuZ3RoIC0gMSAtIGZpZWxkLmxvZyhlcnJvckxvY2F0aW9uc1tpXSk7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dEJ5dGVzW3Bvc2l0aW9uXSA9IEdlbmVyaWNHRl8xLmFkZE9yU3VidHJhY3RHRihvdXRwdXRCeXRlc1twb3NpdGlvbl0sIGVycm9yTWFnbml0dWRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRCeXRlcztcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuXG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVkVSU0lPTlMgPSBbXG4gICAge1xuICAgICAgICBpbmZvQml0czogbnVsbCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMSxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFtdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiA3LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTkgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDEwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDEzLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTMgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDE3LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogOSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiBudWxsLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAyLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDE4XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAzNCB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyOCB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjIsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiBudWxsLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAzLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDIyXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTUsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA1NSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NCB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNyB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjIsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMyB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiBudWxsLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiA0LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI2XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA4MCB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAzMiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA5IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IG51bGwsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDUsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzBdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEwOCB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0MyB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogbnVsbCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogNixcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzNF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDE4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNjggfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDE2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjcgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTkgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgwN0M5NCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogNyxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyMiwgMzhdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDc4IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDMxIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEzIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE0IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDA4NUJDLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiA4LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI0LCA0Ml0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogOTcgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIyLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDM4IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDM5IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjIsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTggfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTkgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgwOUE5OSxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogOSxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyNiwgNDZdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjIsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDBBNEQzLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAxMCxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyOCwgNTBdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA2OCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA2OSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQzIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ0IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTkgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgwQkJGNixcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMTEsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzAsIDU0XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA4MSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNTAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNTEgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDBDNzYyLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAxMixcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMiwgNThdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA5MiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA5MyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIyLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDM2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDM3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjEgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgwRDg0NyxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMTMsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzQsIDYyXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMDcgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIyLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDM3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDM4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjEgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MEU2MEQsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDE0LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI2LCA0NiwgNjZdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDEgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTMgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MEY5MjgsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDE1LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI2LCA0OCwgNzBdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA4NyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA4OCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQxIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQyIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTMgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MTBCNzgsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDE2LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI2LCA1MCwgNzRdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA5OCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA5OSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE5IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIwIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDExNDVELFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAxNyxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMCwgNTQsIDc4XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTA3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEwOCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxMkExNyxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMTgsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzAsIDU2LCA4Ml0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjEgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0MyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxMzUzMixcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMTksXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzAsIDU4LCA4Nl0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExMyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTQgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjIgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTQgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MTQ5QTYsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDIwLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDM0LCA2MiwgOTBdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMDcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTA4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQyIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxNTY4MyxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjEsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjgsIDUwLCA3MiwgOTRdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMTcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDIgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxNjhDOSxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjIsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjYsIDUwLCA3NCwgOThdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTEyIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMTcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDYgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDM0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEzIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MTc3RUMsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDIzLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMwLCA1NCwgNzQsIDEwMl0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjIgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxOEVDNCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjQsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjgsIDU0LCA4MCwgMTA2XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExOCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzAsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MTkxRTEsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDI1LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMyLCA1OCwgODQsIDExMF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEwNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMDcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogOCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDFBRkFCLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAyNixcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMCwgNTgsIDg2LCAxMTRdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTAsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyOCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxQjA4RSxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjcsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzQsIDYyLCA5MCwgMTE4XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIzIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MUNDMUEsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDI4LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI2LCA1MCwgNzQsIDk4LCAxMjJdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExOCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MUQzM0YsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDI5LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIzIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MUVENzUsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDMwLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI2LCA1MiwgNzgsIDEwNCwgMTMwXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTksIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MUYyNTAsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDMxLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMwLCA1NiwgODIsIDEwOCwgMTM0XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjksIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDI4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDIwOUQ1LFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAzMixcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDE3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTksIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDM1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDIxNkYwLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAzMyxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTksIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQ2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDIyOEJBLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAzNCxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzNCwgNjIsIDkwLCAxMTgsIDE0Nl0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0NCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1OSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgyMzc5RixcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMzUsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjYsIDE1MF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIyIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0OCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDI0QjBCLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAzNixcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyNCwgNTAsIDc2LCAxMDIsIDEyOCwgMTU0XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIxIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjIgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDY0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDI1NDJFLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAzNyxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyOCwgNTQsIDgwLCAxMDYsIDEzMiwgMTU4XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjMgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjksIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQ5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MjZBNjQsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDM4LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMyLCA1OCwgODQsIDExMCwgMTM2LCAxNjJdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgyNzU0MSxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMzksXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjYsIDU0LCA4MiwgMTEwLCAxMzgsIDE2Nl0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNjcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MjhDNjksXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDQwLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyLCAxNzBdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTksIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE4IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExOSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDM0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2MSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBCaXRNYXRyaXhfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5mdW5jdGlvbiBzcXVhcmVUb1F1YWRyaWxhdGVyYWwocDEsIHAyLCBwMywgcDQpIHtcbiAgICB2YXIgZHgzID0gcDEueCAtIHAyLnggKyBwMy54IC0gcDQueDtcbiAgICB2YXIgZHkzID0gcDEueSAtIHAyLnkgKyBwMy55IC0gcDQueTtcbiAgICBpZiAoZHgzID09PSAwICYmIGR5MyA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTExOiBwMi54IC0gcDEueCxcbiAgICAgICAgICAgIGExMjogcDIueSAtIHAxLnksXG4gICAgICAgICAgICBhMTM6IDAsXG4gICAgICAgICAgICBhMjE6IHAzLnggLSBwMi54LFxuICAgICAgICAgICAgYTIyOiBwMy55IC0gcDIueSxcbiAgICAgICAgICAgIGEyMzogMCxcbiAgICAgICAgICAgIGEzMTogcDEueCxcbiAgICAgICAgICAgIGEzMjogcDEueSxcbiAgICAgICAgICAgIGEzMzogMSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkeDEgPSBwMi54IC0gcDMueDtcbiAgICAgICAgdmFyIGR4MiA9IHA0LnggLSBwMy54O1xuICAgICAgICB2YXIgZHkxID0gcDIueSAtIHAzLnk7XG4gICAgICAgIHZhciBkeTIgPSBwNC55IC0gcDMueTtcbiAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gZHgxICogZHkyIC0gZHgyICogZHkxO1xuICAgICAgICB2YXIgYTEzID0gKGR4MyAqIGR5MiAtIGR4MiAqIGR5MykgLyBkZW5vbWluYXRvcjtcbiAgICAgICAgdmFyIGEyMyA9IChkeDEgKiBkeTMgLSBkeDMgKiBkeTEpIC8gZGVub21pbmF0b3I7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhMTE6IHAyLnggLSBwMS54ICsgYTEzICogcDIueCxcbiAgICAgICAgICAgIGExMjogcDIueSAtIHAxLnkgKyBhMTMgKiBwMi55LFxuICAgICAgICAgICAgYTEzOiBhMTMsXG4gICAgICAgICAgICBhMjE6IHA0LnggLSBwMS54ICsgYTIzICogcDQueCxcbiAgICAgICAgICAgIGEyMjogcDQueSAtIHAxLnkgKyBhMjMgKiBwNC55LFxuICAgICAgICAgICAgYTIzOiBhMjMsXG4gICAgICAgICAgICBhMzE6IHAxLngsXG4gICAgICAgICAgICBhMzI6IHAxLnksXG4gICAgICAgICAgICBhMzM6IDEsXG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gcXVhZHJpbGF0ZXJhbFRvU3F1YXJlKHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgLy8gSGVyZSwgdGhlIGFkam9pbnQgc2VydmVzIGFzIHRoZSBpbnZlcnNlOlxuICAgIHZhciBzVG9RID0gc3F1YXJlVG9RdWFkcmlsYXRlcmFsKHAxLCBwMiwgcDMsIHA0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhMTE6IHNUb1EuYTIyICogc1RvUS5hMzMgLSBzVG9RLmEyMyAqIHNUb1EuYTMyLFxuICAgICAgICBhMTI6IHNUb1EuYTEzICogc1RvUS5hMzIgLSBzVG9RLmExMiAqIHNUb1EuYTMzLFxuICAgICAgICBhMTM6IHNUb1EuYTEyICogc1RvUS5hMjMgLSBzVG9RLmExMyAqIHNUb1EuYTIyLFxuICAgICAgICBhMjE6IHNUb1EuYTIzICogc1RvUS5hMzEgLSBzVG9RLmEyMSAqIHNUb1EuYTMzLFxuICAgICAgICBhMjI6IHNUb1EuYTExICogc1RvUS5hMzMgLSBzVG9RLmExMyAqIHNUb1EuYTMxLFxuICAgICAgICBhMjM6IHNUb1EuYTEzICogc1RvUS5hMjEgLSBzVG9RLmExMSAqIHNUb1EuYTIzLFxuICAgICAgICBhMzE6IHNUb1EuYTIxICogc1RvUS5hMzIgLSBzVG9RLmEyMiAqIHNUb1EuYTMxLFxuICAgICAgICBhMzI6IHNUb1EuYTEyICogc1RvUS5hMzEgLSBzVG9RLmExMSAqIHNUb1EuYTMyLFxuICAgICAgICBhMzM6IHNUb1EuYTExICogc1RvUS5hMjIgLSBzVG9RLmExMiAqIHNUb1EuYTIxLFxuICAgIH07XG59XG5mdW5jdGlvbiB0aW1lcyhhLCBiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYTExOiBhLmExMSAqIGIuYTExICsgYS5hMjEgKiBiLmExMiArIGEuYTMxICogYi5hMTMsXG4gICAgICAgIGExMjogYS5hMTIgKiBiLmExMSArIGEuYTIyICogYi5hMTIgKyBhLmEzMiAqIGIuYTEzLFxuICAgICAgICBhMTM6IGEuYTEzICogYi5hMTEgKyBhLmEyMyAqIGIuYTEyICsgYS5hMzMgKiBiLmExMyxcbiAgICAgICAgYTIxOiBhLmExMSAqIGIuYTIxICsgYS5hMjEgKiBiLmEyMiArIGEuYTMxICogYi5hMjMsXG4gICAgICAgIGEyMjogYS5hMTIgKiBiLmEyMSArIGEuYTIyICogYi5hMjIgKyBhLmEzMiAqIGIuYTIzLFxuICAgICAgICBhMjM6IGEuYTEzICogYi5hMjEgKyBhLmEyMyAqIGIuYTIyICsgYS5hMzMgKiBiLmEyMyxcbiAgICAgICAgYTMxOiBhLmExMSAqIGIuYTMxICsgYS5hMjEgKiBiLmEzMiArIGEuYTMxICogYi5hMzMsXG4gICAgICAgIGEzMjogYS5hMTIgKiBiLmEzMSArIGEuYTIyICogYi5hMzIgKyBhLmEzMiAqIGIuYTMzLFxuICAgICAgICBhMzM6IGEuYTEzICogYi5hMzEgKyBhLmEyMyAqIGIuYTMyICsgYS5hMzMgKiBiLmEzMyxcbiAgICB9O1xufVxuZnVuY3Rpb24gZXh0cmFjdChpbWFnZSwgbG9jYXRpb24pIHtcbiAgICB2YXIgcVRvUyA9IHF1YWRyaWxhdGVyYWxUb1NxdWFyZSh7IHg6IDMuNSwgeTogMy41IH0sIHsgeDogbG9jYXRpb24uZGltZW5zaW9uIC0gMy41LCB5OiAzLjUgfSwgeyB4OiBsb2NhdGlvbi5kaW1lbnNpb24gLSA2LjUsIHk6IGxvY2F0aW9uLmRpbWVuc2lvbiAtIDYuNSB9LCB7IHg6IDMuNSwgeTogbG9jYXRpb24uZGltZW5zaW9uIC0gMy41IH0pO1xuICAgIHZhciBzVG9RID0gc3F1YXJlVG9RdWFkcmlsYXRlcmFsKGxvY2F0aW9uLnRvcExlZnQsIGxvY2F0aW9uLnRvcFJpZ2h0LCBsb2NhdGlvbi5hbGlnbm1lbnRQYXR0ZXJuLCBsb2NhdGlvbi5ib3R0b21MZWZ0KTtcbiAgICB2YXIgdHJhbnNmb3JtID0gdGltZXMoc1RvUSwgcVRvUyk7XG4gICAgdmFyIG1hdHJpeCA9IEJpdE1hdHJpeF8xLkJpdE1hdHJpeC5jcmVhdGVFbXB0eShsb2NhdGlvbi5kaW1lbnNpb24sIGxvY2F0aW9uLmRpbWVuc2lvbik7XG4gICAgdmFyIG1hcHBpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBkZW5vbWluYXRvciA9IHRyYW5zZm9ybS5hMTMgKiB4ICsgdHJhbnNmb3JtLmEyMyAqIHkgKyB0cmFuc2Zvcm0uYTMzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogKHRyYW5zZm9ybS5hMTEgKiB4ICsgdHJhbnNmb3JtLmEyMSAqIHkgKyB0cmFuc2Zvcm0uYTMxKSAvIGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgeTogKHRyYW5zZm9ybS5hMTIgKiB4ICsgdHJhbnNmb3JtLmEyMiAqIHkgKyB0cmFuc2Zvcm0uYTMyKSAvIGRlbm9taW5hdG9yLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBsb2NhdGlvbi5kaW1lbnNpb247IHkrKykge1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGxvY2F0aW9uLmRpbWVuc2lvbjsgeCsrKSB7XG4gICAgICAgICAgICB2YXIgeFZhbHVlID0geCArIDAuNTtcbiAgICAgICAgICAgIHZhciB5VmFsdWUgPSB5ICsgMC41O1xuICAgICAgICAgICAgdmFyIHNvdXJjZVBpeGVsID0gbWFwcGluZ0Z1bmN0aW9uKHhWYWx1ZSwgeVZhbHVlKTtcbiAgICAgICAgICAgIG1hdHJpeC5zZXQoeCwgeSwgaW1hZ2UuZ2V0KE1hdGguZmxvb3Ioc291cmNlUGl4ZWwueCksIE1hdGguZmxvb3Ioc291cmNlUGl4ZWwueSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBtYXRyaXg6IG1hdHJpeCxcbiAgICAgICAgbWFwcGluZ0Z1bmN0aW9uOiBtYXBwaW5nRnVuY3Rpb24sXG4gICAgfTtcbn1cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1BWF9GSU5ERVJQQVRURVJOU19UT19TRUFSQ0ggPSA0O1xudmFyIE1JTl9RVUFEX1JBVElPID0gMC41O1xudmFyIE1BWF9RVUFEX1JBVElPID0gMS41O1xudmFyIGRpc3RhbmNlID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdygoYi54IC0gYS54KSwgMikgKyBNYXRoLnBvdygoYi55IC0gYS55KSwgMikpOyB9O1xuZnVuY3Rpb24gc3VtKHZhbHVlcykge1xuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICsgYjsgfSk7XG59XG4vLyBUYWtlcyB0aHJlZSBmaW5kZXIgcGF0dGVybnMgYW5kIG9yZ2FuaXplcyB0aGVtIGludG8gdG9wTGVmdCwgdG9wUmlnaHQsIGV0Y1xuZnVuY3Rpb24gcmVvcmRlckZpbmRlclBhdHRlcm5zKHBhdHRlcm4xLCBwYXR0ZXJuMiwgcGF0dGVybjMpIHtcbiAgICAvLyBGaW5kIGRpc3RhbmNlcyBiZXR3ZWVuIHBhdHRlcm4gY2VudGVyc1xuICAgIHZhciBvbmVUd29EaXN0YW5jZSA9IGRpc3RhbmNlKHBhdHRlcm4xLCBwYXR0ZXJuMik7XG4gICAgdmFyIHR3b1RocmVlRGlzdGFuY2UgPSBkaXN0YW5jZShwYXR0ZXJuMiwgcGF0dGVybjMpO1xuICAgIHZhciBvbmVUaHJlZURpc3RhbmNlID0gZGlzdGFuY2UocGF0dGVybjEsIHBhdHRlcm4zKTtcbiAgICB2YXIgYm90dG9tTGVmdDtcbiAgICB2YXIgdG9wTGVmdDtcbiAgICB2YXIgdG9wUmlnaHQ7XG4gICAgLy8gQXNzdW1lIG9uZSBjbG9zZXN0IHRvIG90aGVyIHR3byBpcyBCOyBBIGFuZCBDIHdpbGwganVzdCBiZSBndWVzc2VzIGF0IGZpcnN0XG4gICAgaWYgKHR3b1RocmVlRGlzdGFuY2UgPj0gb25lVHdvRGlzdGFuY2UgJiYgdHdvVGhyZWVEaXN0YW5jZSA+PSBvbmVUaHJlZURpc3RhbmNlKSB7XG4gICAgICAgIF9hID0gW3BhdHRlcm4yLCBwYXR0ZXJuMSwgcGF0dGVybjNdLCBib3R0b21MZWZ0ID0gX2FbMF0sIHRvcExlZnQgPSBfYVsxXSwgdG9wUmlnaHQgPSBfYVsyXTtcbiAgICB9XG4gICAgZWxzZSBpZiAob25lVGhyZWVEaXN0YW5jZSA+PSB0d29UaHJlZURpc3RhbmNlICYmIG9uZVRocmVlRGlzdGFuY2UgPj0gb25lVHdvRGlzdGFuY2UpIHtcbiAgICAgICAgX2IgPSBbcGF0dGVybjEsIHBhdHRlcm4yLCBwYXR0ZXJuM10sIGJvdHRvbUxlZnQgPSBfYlswXSwgdG9wTGVmdCA9IF9iWzFdLCB0b3BSaWdodCA9IF9iWzJdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgX2MgPSBbcGF0dGVybjEsIHBhdHRlcm4zLCBwYXR0ZXJuMl0sIGJvdHRvbUxlZnQgPSBfY1swXSwgdG9wTGVmdCA9IF9jWzFdLCB0b3BSaWdodCA9IF9jWzJdO1xuICAgIH1cbiAgICAvLyBVc2UgY3Jvc3MgcHJvZHVjdCB0byBmaWd1cmUgb3V0IHdoZXRoZXIgYm90dG9tTGVmdCAoQSkgYW5kIHRvcFJpZ2h0IChDKSBhcmUgY29ycmVjdCBvciBmbGlwcGVkIGluIHJlbGF0aW9uIHRvIHRvcExlZnQgKEIpXG4gICAgLy8gVGhpcyBhc2tzIHdoZXRoZXIgQkMgeCBCQSBoYXMgYSBwb3NpdGl2ZSB6IGNvbXBvbmVudCwgd2hpY2ggaXMgdGhlIGFycmFuZ2VtZW50IHdlIHdhbnQuIElmIGl0J3MgbmVnYXRpdmUsIHRoZW5cbiAgICAvLyB3ZSd2ZSBnb3QgaXQgZmxpcHBlZCBhcm91bmQgYW5kIHNob3VsZCBzd2FwIHRvcFJpZ2h0IGFuZCBib3R0b21MZWZ0LlxuICAgIGlmICgoKHRvcFJpZ2h0LnggLSB0b3BMZWZ0LngpICogKGJvdHRvbUxlZnQueSAtIHRvcExlZnQueSkpIC0gKCh0b3BSaWdodC55IC0gdG9wTGVmdC55KSAqIChib3R0b21MZWZ0LnggLSB0b3BMZWZ0LngpKSA8IDApIHtcbiAgICAgICAgX2QgPSBbdG9wUmlnaHQsIGJvdHRvbUxlZnRdLCBib3R0b21MZWZ0ID0gX2RbMF0sIHRvcFJpZ2h0ID0gX2RbMV07XG4gICAgfVxuICAgIHJldHVybiB7IGJvdHRvbUxlZnQ6IGJvdHRvbUxlZnQsIHRvcExlZnQ6IHRvcExlZnQsIHRvcFJpZ2h0OiB0b3BSaWdodCB9O1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbn1cbi8vIENvbXB1dGVzIHRoZSBkaW1lbnNpb24gKG51bWJlciBvZiBtb2R1bGVzIG9uIGEgc2lkZSkgb2YgdGhlIFFSIENvZGUgYmFzZWQgb24gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaW5kZXIgcGF0dGVybnNcbmZ1bmN0aW9uIGNvbXB1dGVEaW1lbnNpb24odG9wTGVmdCwgdG9wUmlnaHQsIGJvdHRvbUxlZnQsIG1hdHJpeCkge1xuICAgIHZhciBtb2R1bGVTaXplID0gKHN1bShjb3VudEJsYWNrV2hpdGVSdW4odG9wTGVmdCwgYm90dG9tTGVmdCwgbWF0cml4LCA1KSkgLyA3ICsgLy8gRGl2aWRlIGJ5IDcgc2luY2UgdGhlIHJhdGlvIGlzIDE6MTozOjE6MVxuICAgICAgICBzdW0oY291bnRCbGFja1doaXRlUnVuKHRvcExlZnQsIHRvcFJpZ2h0LCBtYXRyaXgsIDUpKSAvIDcgK1xuICAgICAgICBzdW0oY291bnRCbGFja1doaXRlUnVuKGJvdHRvbUxlZnQsIHRvcExlZnQsIG1hdHJpeCwgNSkpIC8gNyArXG4gICAgICAgIHN1bShjb3VudEJsYWNrV2hpdGVSdW4odG9wUmlnaHQsIHRvcExlZnQsIG1hdHJpeCwgNSkpIC8gNykgLyA0O1xuICAgIGlmIChtb2R1bGVTaXplIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG1vZHVsZSBzaXplXCIpO1xuICAgIH1cbiAgICB2YXIgdG9wRGltZW5zaW9uID0gTWF0aC5yb3VuZChkaXN0YW5jZSh0b3BMZWZ0LCB0b3BSaWdodCkgLyBtb2R1bGVTaXplKTtcbiAgICB2YXIgc2lkZURpbWVuc2lvbiA9IE1hdGgucm91bmQoZGlzdGFuY2UodG9wTGVmdCwgYm90dG9tTGVmdCkgLyBtb2R1bGVTaXplKTtcbiAgICB2YXIgZGltZW5zaW9uID0gTWF0aC5mbG9vcigodG9wRGltZW5zaW9uICsgc2lkZURpbWVuc2lvbikgLyAyKSArIDc7XG4gICAgc3dpdGNoIChkaW1lbnNpb24gJSA0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGRpbWVuc2lvbisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGRpbWVuc2lvbi0tO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7IGRpbWVuc2lvbjogZGltZW5zaW9uLCBtb2R1bGVTaXplOiBtb2R1bGVTaXplIH07XG59XG4vLyBUYWtlcyBhbiBvcmlnaW4gcG9pbnQgYW5kIGFuIGVuZCBwb2ludCBhbmQgY291bnRzIHRoZSBzaXplcyBvZiB0aGUgYmxhY2sgd2hpdGUgcnVuIGZyb20gdGhlIG9yaWdpbiB0b3dhcmRzIHRoZSBlbmQgcG9pbnQuXG4vLyBSZXR1cm5zIGFuIGFycmF5IG9mIGVsZW1lbnRzLCByZXByZXNlbnRpbmcgdGhlIHBpeGVsIHNpemUgb2YgdGhlIGJsYWNrIHdoaXRlIHJ1bi5cbi8vIFVzZXMgYSB2YXJpYW50IG9mIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlc2VuaGFtJ3NfbGluZV9hbGdvcml0aG1cbmZ1bmN0aW9uIGNvdW50QmxhY2tXaGl0ZVJ1blRvd2FyZHNQb2ludChvcmlnaW4sIGVuZCwgbWF0cml4LCBsZW5ndGgpIHtcbiAgICB2YXIgc3dpdGNoUG9pbnRzID0gW3sgeDogTWF0aC5mbG9vcihvcmlnaW4ueCksIHk6IE1hdGguZmxvb3Iob3JpZ2luLnkpIH1dO1xuICAgIHZhciBzdGVlcCA9IE1hdGguYWJzKGVuZC55IC0gb3JpZ2luLnkpID4gTWF0aC5hYnMoZW5kLnggLSBvcmlnaW4ueCk7XG4gICAgdmFyIGZyb21YO1xuICAgIHZhciBmcm9tWTtcbiAgICB2YXIgdG9YO1xuICAgIHZhciB0b1k7XG4gICAgaWYgKHN0ZWVwKSB7XG4gICAgICAgIGZyb21YID0gTWF0aC5mbG9vcihvcmlnaW4ueSk7XG4gICAgICAgIGZyb21ZID0gTWF0aC5mbG9vcihvcmlnaW4ueCk7XG4gICAgICAgIHRvWCA9IE1hdGguZmxvb3IoZW5kLnkpO1xuICAgICAgICB0b1kgPSBNYXRoLmZsb29yKGVuZC54KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZyb21YID0gTWF0aC5mbG9vcihvcmlnaW4ueCk7XG4gICAgICAgIGZyb21ZID0gTWF0aC5mbG9vcihvcmlnaW4ueSk7XG4gICAgICAgIHRvWCA9IE1hdGguZmxvb3IoZW5kLngpO1xuICAgICAgICB0b1kgPSBNYXRoLmZsb29yKGVuZC55KTtcbiAgICB9XG4gICAgdmFyIGR4ID0gTWF0aC5hYnModG9YIC0gZnJvbVgpO1xuICAgIHZhciBkeSA9IE1hdGguYWJzKHRvWSAtIGZyb21ZKTtcbiAgICB2YXIgZXJyb3IgPSBNYXRoLmZsb29yKC1keCAvIDIpO1xuICAgIHZhciB4U3RlcCA9IGZyb21YIDwgdG9YID8gMSA6IC0xO1xuICAgIHZhciB5U3RlcCA9IGZyb21ZIDwgdG9ZID8gMSA6IC0xO1xuICAgIHZhciBjdXJyZW50UGl4ZWwgPSB0cnVlO1xuICAgIC8vIExvb3AgdXAgdW50aWwgeCA9PSB0b1gsIGJ1dCBub3QgYmV5b25kXG4gICAgZm9yICh2YXIgeCA9IGZyb21YLCB5ID0gZnJvbVk7IHggIT09IHRvWCArIHhTdGVwOyB4ICs9IHhTdGVwKSB7XG4gICAgICAgIC8vIERvZXMgY3VycmVudCBwaXhlbCBtZWFuIHdlIGhhdmUgbW92ZWQgd2hpdGUgdG8gYmxhY2sgb3IgdmljZSB2ZXJzYT9cbiAgICAgICAgLy8gU2Nhbm5pbmcgYmxhY2sgaW4gc3RhdGUgMCwyIGFuZCB3aGl0ZSBpbiBzdGF0ZSAxLCBzbyBpZiB3ZSBmaW5kIHRoZSB3cm9uZ1xuICAgICAgICAvLyBjb2xvciwgYWR2YW5jZSB0byBuZXh0IHN0YXRlIG9yIGVuZCBpZiB3ZSBhcmUgaW4gc3RhdGUgMiBhbHJlYWR5XG4gICAgICAgIHZhciByZWFsWCA9IHN0ZWVwID8geSA6IHg7XG4gICAgICAgIHZhciByZWFsWSA9IHN0ZWVwID8geCA6IHk7XG4gICAgICAgIGlmIChtYXRyaXguZ2V0KHJlYWxYLCByZWFsWSkgIT09IGN1cnJlbnRQaXhlbCkge1xuICAgICAgICAgICAgY3VycmVudFBpeGVsID0gIWN1cnJlbnRQaXhlbDtcbiAgICAgICAgICAgIHN3aXRjaFBvaW50cy5wdXNoKHsgeDogcmVhbFgsIHk6IHJlYWxZIH0pO1xuICAgICAgICAgICAgaWYgKHN3aXRjaFBvaW50cy5sZW5ndGggPT09IGxlbmd0aCArIDEpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlcnJvciArPSBkeTtcbiAgICAgICAgaWYgKGVycm9yID4gMCkge1xuICAgICAgICAgICAgaWYgKHkgPT09IHRvWSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSArPSB5U3RlcDtcbiAgICAgICAgICAgIGVycm9yIC09IGR4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzd2l0Y2hQb2ludHNbaV0gJiYgc3dpdGNoUG9pbnRzW2kgKyAxXSkge1xuICAgICAgICAgICAgZGlzdGFuY2VzLnB1c2goZGlzdGFuY2Uoc3dpdGNoUG9pbnRzW2ldLCBzd2l0Y2hQb2ludHNbaSArIDFdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkaXN0YW5jZXMucHVzaCgwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlzdGFuY2VzO1xufVxuLy8gVGFrZXMgYW4gb3JpZ2luIHBvaW50IGFuZCBhbiBlbmQgcG9pbnQgYW5kIGNvdW50cyB0aGUgc2l6ZXMgb2YgdGhlIGJsYWNrIHdoaXRlIHJ1biBpbiB0aGUgb3JpZ2luIHBvaW50XG4vLyBhbG9uZyB0aGUgbGluZSB0aGF0IGludGVyc2VjdHMgd2l0aCB0aGUgZW5kIHBvaW50LiBSZXR1cm5zIGFuIGFycmF5IG9mIGVsZW1lbnRzLCByZXByZXNlbnRpbmcgdGhlIHBpeGVsIHNpemVzXG4vLyBvZiB0aGUgYmxhY2sgd2hpdGUgcnVuLiBUYWtlcyBhIGxlbmd0aCB3aGljaCByZXByZXNlbnRzIHRoZSBudW1iZXIgb2Ygc3dpdGNoZXMgZnJvbSBibGFjayB0byB3aGl0ZSB0byBsb29rIGZvci5cbmZ1bmN0aW9uIGNvdW50QmxhY2tXaGl0ZVJ1bihvcmlnaW4sIGVuZCwgbWF0cml4LCBsZW5ndGgpIHtcbiAgICB2YXIgcmlzZSA9IGVuZC55IC0gb3JpZ2luLnk7XG4gICAgdmFyIHJ1biA9IGVuZC54IC0gb3JpZ2luLng7XG4gICAgdmFyIHRvd2FyZHNFbmQgPSBjb3VudEJsYWNrV2hpdGVSdW5Ub3dhcmRzUG9pbnQob3JpZ2luLCBlbmQsIG1hdHJpeCwgTWF0aC5jZWlsKGxlbmd0aCAvIDIpKTtcbiAgICB2YXIgYXdheUZyb21FbmQgPSBjb3VudEJsYWNrV2hpdGVSdW5Ub3dhcmRzUG9pbnQob3JpZ2luLCB7IHg6IG9yaWdpbi54IC0gcnVuLCB5OiBvcmlnaW4ueSAtIHJpc2UgfSwgbWF0cml4LCBNYXRoLmNlaWwobGVuZ3RoIC8gMikpO1xuICAgIHZhciBtaWRkbGVWYWx1ZSA9IHRvd2FyZHNFbmQuc2hpZnQoKSArIGF3YXlGcm9tRW5kLnNoaWZ0KCkgLSAxOyAvLyBTdWJzdHJhY3Qgb25lIHNvIHdlIGRvbid0IGRvdWJsZSBjb3VudCBhIHBpeGVsXG4gICAgcmV0dXJuIChfYSA9IGF3YXlGcm9tRW5kLmNvbmNhdChtaWRkbGVWYWx1ZSkpLmNvbmNhdC5hcHBseShfYSwgdG93YXJkc0VuZCk7XG4gICAgdmFyIF9hO1xufVxuLy8gVGFrZXMgaW4gYSBibGFjayB3aGl0ZSBydW4gYW5kIGFuIGFycmF5IG9mIGV4cGVjdGVkIHJhdGlvcy4gUmV0dXJucyB0aGUgYXZlcmFnZSBzaXplIG9mIHRoZSBydW4gYXMgd2VsbCBhcyB0aGUgXCJlcnJvclwiIC1cbi8vIHRoYXQgaXMgdGhlIGFtb3VudCB0aGUgcnVuIGRpdmVyZ2VzIGZyb20gdGhlIGV4cGVjdGVkIHJhdGlvXG5mdW5jdGlvbiBzY29yZUJsYWNrV2hpdGVSdW4oc2VxdWVuY2UsIHJhdGlvcykge1xuICAgIHZhciBhdmVyYWdlU2l6ZSA9IHN1bShzZXF1ZW5jZSkgLyBzdW0ocmF0aW9zKTtcbiAgICB2YXIgZXJyb3IgPSAwO1xuICAgIHJhdGlvcy5mb3JFYWNoKGZ1bmN0aW9uIChyYXRpbywgaSkge1xuICAgICAgICBlcnJvciArPSBNYXRoLnBvdygoc2VxdWVuY2VbaV0gLSByYXRpbyAqIGF2ZXJhZ2VTaXplKSwgMik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgYXZlcmFnZVNpemU6IGF2ZXJhZ2VTaXplLCBlcnJvcjogZXJyb3IgfTtcbn1cbi8vIFRha2VzIGFuIFgsWSBwb2ludCBhbmQgYW4gYXJyYXkgb2Ygc2l6ZXMgYW5kIHNjb3JlcyB0aGUgcG9pbnQgYWdhaW5zdCB0aG9zZSByYXRpb3MuXG4vLyBGb3IgZXhhbXBsZSBmb3IgYSBmaW5kZXIgcGF0dGVybiB0YWtlcyB0aGUgcmF0aW8gbGlzdCBvZiAxOjE6MzoxOjEgYW5kIGNoZWNrcyBob3Jpem9udGFsLCB2ZXJ0aWNhbCBhbmQgZGlhZ29uYWwgcmF0aW9zXG4vLyBhZ2FpbnN0IHRoYXQuXG5mdW5jdGlvbiBzY29yZVBhdHRlcm4ocG9pbnQsIHJhdGlvcywgbWF0cml4KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGhvcml6b250YWxSdW4gPSBjb3VudEJsYWNrV2hpdGVSdW4ocG9pbnQsIHsgeDogLTEsIHk6IHBvaW50LnkgfSwgbWF0cml4LCByYXRpb3MubGVuZ3RoKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsUnVuID0gY291bnRCbGFja1doaXRlUnVuKHBvaW50LCB7IHg6IHBvaW50LngsIHk6IC0xIH0sIG1hdHJpeCwgcmF0aW9zLmxlbmd0aCk7XG4gICAgICAgIHZhciB0b3BMZWZ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBNYXRoLm1heCgwLCBwb2ludC54IC0gcG9pbnQueSkgLSAxLFxuICAgICAgICAgICAgeTogTWF0aC5tYXgoMCwgcG9pbnQueSAtIHBvaW50LngpIC0gMSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRvcExlZnRCb3R0b21SaWdodFJ1biA9IGNvdW50QmxhY2tXaGl0ZVJ1bihwb2ludCwgdG9wTGVmdFBvaW50LCBtYXRyaXgsIHJhdGlvcy5sZW5ndGgpO1xuICAgICAgICB2YXIgYm90dG9tTGVmdFBvaW50ID0ge1xuICAgICAgICAgICAgeDogTWF0aC5taW4obWF0cml4LndpZHRoLCBwb2ludC54ICsgcG9pbnQueSkgKyAxLFxuICAgICAgICAgICAgeTogTWF0aC5taW4obWF0cml4LmhlaWdodCwgcG9pbnQueSArIHBvaW50LngpICsgMSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGJvdHRvbUxlZnRUb3BSaWdodFJ1biA9IGNvdW50QmxhY2tXaGl0ZVJ1bihwb2ludCwgYm90dG9tTGVmdFBvaW50LCBtYXRyaXgsIHJhdGlvcy5sZW5ndGgpO1xuICAgICAgICB2YXIgaG9yekVycm9yID0gc2NvcmVCbGFja1doaXRlUnVuKGhvcml6b250YWxSdW4sIHJhdGlvcyk7XG4gICAgICAgIHZhciB2ZXJ0RXJyb3IgPSBzY29yZUJsYWNrV2hpdGVSdW4odmVydGljYWxSdW4sIHJhdGlvcyk7XG4gICAgICAgIHZhciBkaWFnRG93bkVycm9yID0gc2NvcmVCbGFja1doaXRlUnVuKHRvcExlZnRCb3R0b21SaWdodFJ1biwgcmF0aW9zKTtcbiAgICAgICAgdmFyIGRpYWdVcEVycm9yID0gc2NvcmVCbGFja1doaXRlUnVuKGJvdHRvbUxlZnRUb3BSaWdodFJ1biwgcmF0aW9zKTtcbiAgICAgICAgdmFyIHJhdGlvRXJyb3IgPSBNYXRoLnNxcnQoaG9yekVycm9yLmVycm9yICogaG9yekVycm9yLmVycm9yICtcbiAgICAgICAgICAgIHZlcnRFcnJvci5lcnJvciAqIHZlcnRFcnJvci5lcnJvciArXG4gICAgICAgICAgICBkaWFnRG93bkVycm9yLmVycm9yICogZGlhZ0Rvd25FcnJvci5lcnJvciArXG4gICAgICAgICAgICBkaWFnVXBFcnJvci5lcnJvciAqIGRpYWdVcEVycm9yLmVycm9yKTtcbiAgICAgICAgdmFyIGF2Z1NpemUgPSAoaG9yekVycm9yLmF2ZXJhZ2VTaXplICsgdmVydEVycm9yLmF2ZXJhZ2VTaXplICsgZGlhZ0Rvd25FcnJvci5hdmVyYWdlU2l6ZSArIGRpYWdVcEVycm9yLmF2ZXJhZ2VTaXplKSAvIDQ7XG4gICAgICAgIHZhciBzaXplRXJyb3IgPSAoTWF0aC5wb3coKGhvcnpFcnJvci5hdmVyYWdlU2l6ZSAtIGF2Z1NpemUpLCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdygodmVydEVycm9yLmF2ZXJhZ2VTaXplIC0gYXZnU2l6ZSksIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KChkaWFnRG93bkVycm9yLmF2ZXJhZ2VTaXplIC0gYXZnU2l6ZSksIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KChkaWFnVXBFcnJvci5hdmVyYWdlU2l6ZSAtIGF2Z1NpemUpLCAyKSkgLyBhdmdTaXplO1xuICAgICAgICByZXR1cm4gcmF0aW9FcnJvciArIHNpemVFcnJvcjtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb2NhdGUobWF0cml4KSB7XG4gICAgdmFyIGZpbmRlclBhdHRlcm5RdWFkcyA9IFtdO1xuICAgIHZhciBhY3RpdmVGaW5kZXJQYXR0ZXJuUXVhZHMgPSBbXTtcbiAgICB2YXIgYWxpZ25tZW50UGF0dGVyblF1YWRzID0gW107XG4gICAgdmFyIGFjdGl2ZUFsaWdubWVudFBhdHRlcm5RdWFkcyA9IFtdO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgdmFyIGxlbmd0aF8xID0gMDtcbiAgICAgICAgdmFyIGxhc3RCaXQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNjYW5zID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB2YXIgdiA9IG1hdHJpeC5nZXQoeCwgeSk7XG4gICAgICAgICAgICBpZiAodiA9PT0gbGFzdEJpdCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aF8xKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2FucyA9IFtzY2Fuc1sxXSwgc2NhbnNbMl0sIHNjYW5zWzNdLCBzY2Fuc1s0XSwgbGVuZ3RoXzFdO1xuICAgICAgICAgICAgICAgIGxlbmd0aF8xID0gMTtcbiAgICAgICAgICAgICAgICBsYXN0Qml0ID0gdjtcbiAgICAgICAgICAgICAgICAvLyBEbyB0aGUgbGFzdCA1IGNvbG9yIGNoYW5nZXMgfiBtYXRjaCB0aGUgZXhwZWN0ZWQgcmF0aW8gZm9yIGEgZmluZGVyIHBhdHRlcm4/IDE6MTozOjE6MSBvZiBiOnc6Yjp3OmJcbiAgICAgICAgICAgICAgICB2YXIgYXZlcmFnZUZpbmRlclBhdHRlcm5CbG9ja3NpemUgPSBzdW0oc2NhbnMpIC8gNztcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRGaW5kZXJQYXR0ZXJuID0gTWF0aC5hYnMoc2NhbnNbMF0gLSBhdmVyYWdlRmluZGVyUGF0dGVybkJsb2Nrc2l6ZSkgPCBhdmVyYWdlRmluZGVyUGF0dGVybkJsb2Nrc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhzY2Fuc1sxXSAtIGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplKSA8IGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHNjYW5zWzJdIC0gMyAqIGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplKSA8IDMgKiBhdmVyYWdlRmluZGVyUGF0dGVybkJsb2Nrc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhzY2Fuc1szXSAtIGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplKSA8IGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHNjYW5zWzRdIC0gYXZlcmFnZUZpbmRlclBhdHRlcm5CbG9ja3NpemUpIDwgYXZlcmFnZUZpbmRlclBhdHRlcm5CbG9ja3NpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgIXY7IC8vIEFuZCBtYWtlIHN1cmUgdGhlIGN1cnJlbnQgcGl4ZWwgaXMgd2hpdGUgc2luY2UgZmluZGVyIHBhdHRlcm5zIGFyZSBib3JkZXJlZCBpbiB3aGl0ZVxuICAgICAgICAgICAgICAgIC8vIERvIHRoZSBsYXN0IDMgY29sb3IgY2hhbmdlcyB+IG1hdGNoIHRoZSBleHBlY3RlZCByYXRpbyBmb3IgYW4gYWxpZ25tZW50IHBhdHRlcm4/IDE6MToxIG9mIHc6Yjp3XG4gICAgICAgICAgICAgICAgdmFyIGF2ZXJhZ2VBbGlnbm1lbnRQYXR0ZXJuQmxvY2tzaXplID0gc3VtKHNjYW5zLnNsaWNlKC0zKSkgLyAzO1xuICAgICAgICAgICAgICAgIHZhciB2YWxpZEFsaWdubWVudFBhdHRlcm4gPSBNYXRoLmFicyhzY2Fuc1syXSAtIGF2ZXJhZ2VBbGlnbm1lbnRQYXR0ZXJuQmxvY2tzaXplKSA8IGF2ZXJhZ2VBbGlnbm1lbnRQYXR0ZXJuQmxvY2tzaXplICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHNjYW5zWzNdIC0gYXZlcmFnZUFsaWdubWVudFBhdHRlcm5CbG9ja3NpemUpIDwgYXZlcmFnZUFsaWdubWVudFBhdHRlcm5CbG9ja3NpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoc2NhbnNbNF0gLSBhdmVyYWdlQWxpZ25tZW50UGF0dGVybkJsb2Nrc2l6ZSkgPCBhdmVyYWdlQWxpZ25tZW50UGF0dGVybkJsb2Nrc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICB2OyAvLyBJcyB0aGUgY3VycmVudCBwaXhlbCBibGFjayBzaW5jZSBhbGlnbm1lbnQgcGF0dGVybnMgYXJlIGJvcmRlcmVkIGluIGJsYWNrXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkRmluZGVyUGF0dGVybikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb21wdXRlIHRoZSBzdGFydCBhbmQgZW5kIHggdmFsdWVzIG9mIHRoZSBsYXJnZSBjZW50ZXIgYmxhY2sgc3F1YXJlXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRYXzEgPSB4IC0gc2NhbnNbM10gLSBzY2Fuc1s0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0WF8xID0gZW5kWF8xIC0gc2NhbnNbMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5lID0geyBzdGFydFg6IHN0YXJ0WF8xLCBlbmRYOiBlbmRYXzEsIHk6IHkgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXMgdGhlcmUgYSBxdWFkIGRpcmVjdGx5IGFib3ZlIHRoZSBjdXJyZW50IHNwb3Q/IElmIHNvLCBleHRlbmQgaXQgd2l0aCB0aGUgbmV3IGxpbmUuIE90aGVyd2lzZSwgY3JlYXRlIGEgbmV3IHF1YWQgd2l0aFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IGxpbmUgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hpbmdRdWFkcyA9IGFjdGl2ZUZpbmRlclBhdHRlcm5RdWFkcy5maWx0ZXIoZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoc3RhcnRYXzEgPj0gcS5ib3R0b20uc3RhcnRYICYmIHN0YXJ0WF8xIDw9IHEuYm90dG9tLmVuZFgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVuZFhfMSA+PSBxLmJvdHRvbS5zdGFydFggJiYgc3RhcnRYXzEgPD0gcS5ib3R0b20uZW5kWCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhcnRYXzEgPD0gcS5ib3R0b20uc3RhcnRYICYmIGVuZFhfMSA+PSBxLmJvdHRvbS5lbmRYICYmICgoc2NhbnNbMl0gLyAocS5ib3R0b20uZW5kWCAtIHEuYm90dG9tLnN0YXJ0WCkpIDwgTUFYX1FVQURfUkFUSU8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNjYW5zWzJdIC8gKHEuYm90dG9tLmVuZFggLSBxLmJvdHRvbS5zdGFydFgpKSA+IE1JTl9RVUFEX1JBVElPKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdRdWFkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ1F1YWRzWzBdLmJvdHRvbSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVGaW5kZXJQYXR0ZXJuUXVhZHMucHVzaCh7IHRvcDogbGluZSwgYm90dG9tOiBsaW5lIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZEFsaWdubWVudFBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgc3RhcnQgYW5kIGVuZCB4IHZhbHVlcyBvZiB0aGUgY2VudGVyIGJsYWNrIHNxdWFyZVxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kWF8yID0geCAtIHNjYW5zWzRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRYXzIgPSBlbmRYXzIgLSBzY2Fuc1szXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSB7IHN0YXJ0WDogc3RhcnRYXzIsIHk6IHksIGVuZFg6IGVuZFhfMiB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIHF1YWQgZGlyZWN0bHkgYWJvdmUgdGhlIGN1cnJlbnQgc3BvdD8gSWYgc28sIGV4dGVuZCBpdCB3aXRoIHRoZSBuZXcgbGluZS4gT3RoZXJ3aXNlLCBjcmVhdGUgYSBuZXcgcXVhZCB3aXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgbGluZSBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGluZ1F1YWRzID0gYWN0aXZlQWxpZ25tZW50UGF0dGVyblF1YWRzLmZpbHRlcihmdW5jdGlvbiAocSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzdGFydFhfMiA+PSBxLmJvdHRvbS5zdGFydFggJiYgc3RhcnRYXzIgPD0gcS5ib3R0b20uZW5kWCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW5kWF8yID49IHEuYm90dG9tLnN0YXJ0WCAmJiBzdGFydFhfMiA8PSBxLmJvdHRvbS5lbmRYKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFydFhfMiA8PSBxLmJvdHRvbS5zdGFydFggJiYgZW5kWF8yID49IHEuYm90dG9tLmVuZFggJiYgKChzY2Fuc1syXSAvIChxLmJvdHRvbS5lbmRYIC0gcS5ib3R0b20uc3RhcnRYKSkgPCBNQVhfUVVBRF9SQVRJTyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2NhbnNbMl0gLyAocS5ib3R0b20uZW5kWCAtIHEuYm90dG9tLnN0YXJ0WCkpID4gTUlOX1FVQURfUkFUSU8pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ1F1YWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nUXVhZHNbMF0uYm90dG9tID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFsaWdubWVudFBhdHRlcm5RdWFkcy5wdXNoKHsgdG9wOiBsaW5lLCBib3R0b206IGxpbmUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIHggPSAtMTsgeCA8PSBtYXRyaXgud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgX2xvb3BfMih4KTtcbiAgICAgICAgfVxuICAgICAgICBmaW5kZXJQYXR0ZXJuUXVhZHMucHVzaC5hcHBseShmaW5kZXJQYXR0ZXJuUXVhZHMsIGFjdGl2ZUZpbmRlclBhdHRlcm5RdWFkcy5maWx0ZXIoZnVuY3Rpb24gKHEpIHsgcmV0dXJuIHEuYm90dG9tLnkgIT09IHkgJiYgcS5ib3R0b20ueSAtIHEudG9wLnkgPj0gMjsgfSkpO1xuICAgICAgICBhY3RpdmVGaW5kZXJQYXR0ZXJuUXVhZHMgPSBhY3RpdmVGaW5kZXJQYXR0ZXJuUXVhZHMuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiBxLmJvdHRvbS55ID09PSB5OyB9KTtcbiAgICAgICAgYWxpZ25tZW50UGF0dGVyblF1YWRzLnB1c2guYXBwbHkoYWxpZ25tZW50UGF0dGVyblF1YWRzLCBhY3RpdmVBbGlnbm1lbnRQYXR0ZXJuUXVhZHMuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiBxLmJvdHRvbS55ICE9PSB5OyB9KSk7XG4gICAgICAgIGFjdGl2ZUFsaWdubWVudFBhdHRlcm5RdWFkcyA9IGFjdGl2ZUFsaWdubWVudFBhdHRlcm5RdWFkcy5maWx0ZXIoZnVuY3Rpb24gKHEpIHsgcmV0dXJuIHEuYm90dG9tLnkgPT09IHk7IH0pO1xuICAgIH07XG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPD0gbWF0cml4LmhlaWdodDsgeSsrKSB7XG4gICAgICAgIF9sb29wXzEoeSk7XG4gICAgfVxuICAgIGZpbmRlclBhdHRlcm5RdWFkcy5wdXNoLmFwcGx5KGZpbmRlclBhdHRlcm5RdWFkcywgYWN0aXZlRmluZGVyUGF0dGVyblF1YWRzLmZpbHRlcihmdW5jdGlvbiAocSkgeyByZXR1cm4gcS5ib3R0b20ueSAtIHEudG9wLnkgPj0gMjsgfSkpO1xuICAgIGFsaWdubWVudFBhdHRlcm5RdWFkcy5wdXNoLmFwcGx5KGFsaWdubWVudFBhdHRlcm5RdWFkcywgYWN0aXZlQWxpZ25tZW50UGF0dGVyblF1YWRzKTtcbiAgICB2YXIgZmluZGVyUGF0dGVybkdyb3VwcyA9IGZpbmRlclBhdHRlcm5RdWFkc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiBxLmJvdHRvbS55IC0gcS50b3AueSA+PSAyOyB9KSAvLyBBbGwgcXVhZHMgbXVzdCBiZSBhdCBsZWFzdCAycHggdGFsbCBzaW5jZSB0aGUgY2VudGVyIHNxdWFyZSBpcyBsYXJnZXIgdGhhbiBhIGJsb2NrXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgdmFyIHggPSAocS50b3Auc3RhcnRYICsgcS50b3AuZW5kWCArIHEuYm90dG9tLnN0YXJ0WCArIHEuYm90dG9tLmVuZFgpIC8gNDtcbiAgICAgICAgdmFyIHkgPSAocS50b3AueSArIHEuYm90dG9tLnkgKyAxKSAvIDI7XG4gICAgICAgIGlmICghbWF0cml4LmdldChNYXRoLnJvdW5kKHgpLCBNYXRoLnJvdW5kKHkpKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW5ndGhzID0gW3EudG9wLmVuZFggLSBxLnRvcC5zdGFydFgsIHEuYm90dG9tLmVuZFggLSBxLmJvdHRvbS5zdGFydFgsIHEuYm90dG9tLnkgLSBxLnRvcC55ICsgMV07XG4gICAgICAgIHZhciBzaXplID0gc3VtKGxlbmd0aHMpIC8gbGVuZ3Rocy5sZW5ndGg7XG4gICAgICAgIHZhciBzY29yZSA9IHNjb3JlUGF0dGVybih7IHg6IE1hdGgucm91bmQoeCksIHk6IE1hdGgucm91bmQoeSkgfSwgWzEsIDEsIDMsIDEsIDFdLCBtYXRyaXgpO1xuICAgICAgICByZXR1cm4geyBzY29yZTogc2NvcmUsIHg6IHgsIHk6IHksIHNpemU6IHNpemUgfTtcbiAgICB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiAhIXE7IH0pIC8vIEZpbHRlciBvdXQgYW55IHJlamVjdGVkIHF1YWRzIGZyb20gYWJvdmVcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChwb2ludCwgaSwgZmluZGVyUGF0dGVybnMpIHtcbiAgICAgICAgaWYgKGkgPiBNQVhfRklOREVSUEFUVEVSTlNfVE9fU0VBUkNIKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3RoZXJQb2ludHMgPSBmaW5kZXJQYXR0ZXJuc1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocCwgaWkpIHsgcmV0dXJuIGkgIT09IGlpOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gKHsgeDogcC54LCB5OiBwLnksIHNjb3JlOiBwLnNjb3JlICsgKE1hdGgucG93KChwLnNpemUgLSBwb2ludC5zaXplKSwgMikpIC8gcG9pbnQuc2l6ZSwgc2l6ZTogcC5zaXplIH0pOyB9KVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlOyB9KTtcbiAgICAgICAgaWYgKG90aGVyUG9pbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY29yZSA9IHBvaW50LnNjb3JlICsgb3RoZXJQb2ludHNbMF0uc2NvcmUgKyBvdGhlclBvaW50c1sxXS5zY29yZTtcbiAgICAgICAgcmV0dXJuIHsgcG9pbnRzOiBbcG9pbnRdLmNvbmNhdChvdGhlclBvaW50cy5zbGljZSgwLCAyKSksIHNjb3JlOiBzY29yZSB9O1xuICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHEpIHsgcmV0dXJuICEhcTsgfSkgLy8gRmlsdGVyIG91dCBhbnkgcmVqZWN0ZWQgZmluZGVyIHBhdHRlcm5zIGZyb20gYWJvdmVcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlOyB9KTtcbiAgICBpZiAoZmluZGVyUGF0dGVybkdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBfYSA9IHJlb3JkZXJGaW5kZXJQYXR0ZXJucyhmaW5kZXJQYXR0ZXJuR3JvdXBzWzBdLnBvaW50c1swXSwgZmluZGVyUGF0dGVybkdyb3Vwc1swXS5wb2ludHNbMV0sIGZpbmRlclBhdHRlcm5Hcm91cHNbMF0ucG9pbnRzWzJdKSwgdG9wUmlnaHQgPSBfYS50b3BSaWdodCwgdG9wTGVmdCA9IF9hLnRvcExlZnQsIGJvdHRvbUxlZnQgPSBfYS5ib3R0b21MZWZ0O1xuICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIGZvdW5kIHRoZSB0aHJlZSBmaW5kZXIgcGF0dGVybnMgd2UgY2FuIGRldGVybWluZSB0aGUgYmxvY2tTaXplIGFuZCB0aGUgc2l6ZSBvZiB0aGUgUVIgY29kZS5cbiAgICAvLyBXZSdsbCB1c2UgdGhlc2UgdG8gaGVscCBmaW5kIHRoZSBhbGlnbm1lbnQgcGF0dGVybiBidXQgYWxzbyBsYXRlciB3aGVuIHdlIGRvIHRoZSBleHRyYWN0aW9uLlxuICAgIHZhciBkaW1lbnNpb247XG4gICAgdmFyIG1vZHVsZVNpemU7XG4gICAgdHJ5IHtcbiAgICAgICAgKF9iID0gY29tcHV0ZURpbWVuc2lvbih0b3BMZWZ0LCB0b3BSaWdodCwgYm90dG9tTGVmdCwgbWF0cml4KSwgZGltZW5zaW9uID0gX2IuZGltZW5zaW9uLCBtb2R1bGVTaXplID0gX2IubW9kdWxlU2l6ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBOb3cgZmluZCB0aGUgYWxpZ25tZW50IHBhdHRlcm5cbiAgICB2YXIgYm90dG9tUmlnaHRGaW5kZXJQYXR0ZXJuID0ge1xuICAgICAgICB4OiB0b3BSaWdodC54IC0gdG9wTGVmdC54ICsgYm90dG9tTGVmdC54LFxuICAgICAgICB5OiB0b3BSaWdodC55IC0gdG9wTGVmdC55ICsgYm90dG9tTGVmdC55LFxuICAgIH07XG4gICAgdmFyIG1vZHVsZXNCZXR3ZWVuRmluZGVyUGF0dGVybnMgPSAoKGRpc3RhbmNlKHRvcExlZnQsIGJvdHRvbUxlZnQpICsgZGlzdGFuY2UodG9wTGVmdCwgdG9wUmlnaHQpKSAvIDIgLyBtb2R1bGVTaXplKTtcbiAgICB2YXIgY29ycmVjdGlvblRvVG9wTGVmdCA9IDEgLSAoMyAvIG1vZHVsZXNCZXR3ZWVuRmluZGVyUGF0dGVybnMpO1xuICAgIHZhciBleHBlY3RlZEFsaWdubWVudFBhdHRlcm4gPSB7XG4gICAgICAgIHg6IHRvcExlZnQueCArIGNvcnJlY3Rpb25Ub1RvcExlZnQgKiAoYm90dG9tUmlnaHRGaW5kZXJQYXR0ZXJuLnggLSB0b3BMZWZ0LngpLFxuICAgICAgICB5OiB0b3BMZWZ0LnkgKyBjb3JyZWN0aW9uVG9Ub3BMZWZ0ICogKGJvdHRvbVJpZ2h0RmluZGVyUGF0dGVybi55IC0gdG9wTGVmdC55KSxcbiAgICB9O1xuICAgIHZhciBhbGlnbm1lbnRQYXR0ZXJucyA9IGFsaWdubWVudFBhdHRlcm5RdWFkc1xuICAgICAgICAubWFwKGZ1bmN0aW9uIChxKSB7XG4gICAgICAgIHZhciB4ID0gKHEudG9wLnN0YXJ0WCArIHEudG9wLmVuZFggKyBxLmJvdHRvbS5zdGFydFggKyBxLmJvdHRvbS5lbmRYKSAvIDQ7XG4gICAgICAgIHZhciB5ID0gKHEudG9wLnkgKyBxLmJvdHRvbS55ICsgMSkgLyAyO1xuICAgICAgICBpZiAoIW1hdHJpeC5nZXQoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuZ3RocyA9IFtxLnRvcC5lbmRYIC0gcS50b3Auc3RhcnRYLCBxLmJvdHRvbS5lbmRYIC0gcS5ib3R0b20uc3RhcnRYLCAocS5ib3R0b20ueSAtIHEudG9wLnkgKyAxKV07XG4gICAgICAgIHZhciBzaXplID0gc3VtKGxlbmd0aHMpIC8gbGVuZ3Rocy5sZW5ndGg7XG4gICAgICAgIHZhciBzaXplU2NvcmUgPSBzY29yZVBhdHRlcm4oeyB4OiBNYXRoLmZsb29yKHgpLCB5OiBNYXRoLmZsb29yKHkpIH0sIFsxLCAxLCAxXSwgbWF0cml4KTtcbiAgICAgICAgdmFyIHNjb3JlID0gc2l6ZVNjb3JlICsgZGlzdGFuY2UoeyB4OiB4LCB5OiB5IH0sIGV4cGVjdGVkQWxpZ25tZW50UGF0dGVybik7XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHNjb3JlOiBzY29yZSB9O1xuICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHYpIHsgcmV0dXJuICEhdjsgfSlcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlOyB9KTtcbiAgICAvLyBJZiB0aGVyZSBhcmUgbGVzcyB0aGFuIDE1IG1vZHVsZXMgYmV0d2VlbiBmaW5kZXIgcGF0dGVybnMgaXQncyBhIHZlcnNpb24gMSBRUiBjb2RlIGFuZCBhcyBzdWNoIGhhcyBubyBhbGlnbm1lbW50IHBhdHRlcm5cbiAgICAvLyBzbyB3ZSBjYW4gb25seSB1c2Ugb3VyIGJlc3QgZ3Vlc3MuXG4gICAgdmFyIGFsaWdubWVudFBhdHRlcm4gPSBtb2R1bGVzQmV0d2VlbkZpbmRlclBhdHRlcm5zID49IDE1ICYmIGFsaWdubWVudFBhdHRlcm5zLmxlbmd0aCA/IGFsaWdubWVudFBhdHRlcm5zWzBdIDogZXhwZWN0ZWRBbGlnbm1lbnRQYXR0ZXJuO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsaWdubWVudFBhdHRlcm46IHsgeDogYWxpZ25tZW50UGF0dGVybi54LCB5OiBhbGlnbm1lbnRQYXR0ZXJuLnkgfSxcbiAgICAgICAgYm90dG9tTGVmdDogeyB4OiBib3R0b21MZWZ0LngsIHk6IGJvdHRvbUxlZnQueSB9LFxuICAgICAgICBkaW1lbnNpb246IGRpbWVuc2lvbixcbiAgICAgICAgdG9wTGVmdDogeyB4OiB0b3BMZWZ0LngsIHk6IHRvcExlZnQueSB9LFxuICAgICAgICB0b3BSaWdodDogeyB4OiB0b3BSaWdodC54LCB5OiB0b3BSaWdodC55IH0sXG4gICAgfTtcbiAgICB2YXIgX2I7XG59XG5leHBvcnRzLmxvY2F0ZSA9IGxvY2F0ZTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlbXCJkZWZhdWx0XCJdO1xufSk7IiwiaW1wb3J0IGpzUVIgZnJvbSAnanNxcic7XG5jb25zdCBzZWxmID0gZ2xvYmFsVGhpcztcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ID0+IHtcbiAgICBjb25zdCBbZGF0YSwgd2lkdGgsIGhlaWdodF0gPSBldi5kYXRhO1xuICAgIHNlbGYucG9zdE1lc3NhZ2UoanNRUihkYXRhLCB3aWR0aCwgaGVpZ2h0KSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=